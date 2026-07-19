// Cloudflare Worker — Brevo contact proxy
// 1. Deploy this as your Worker
// 2. Set BREVO_API_KEY as a secret: wrangler secret put BREVO_API_KEY
//    (or in Cloudflare Dashboard → Workers → your worker → Settings → Variables)

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const formData = await request.formData();
      const email = formData.get('EMAIL');

      if (!email) {
        return Response.redirect(new URL(request.url).origin + '/register.html', 302);
      }

      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': env.BREVO_API_KEY
        },
        body: JSON.stringify({
          email: email,
          listIds: [16],
          updateEnabled: true
        })
      });

      const origin = new URL(request.url).origin;
      const location = origin + '/thank-you.html';

      if (response.ok) {
        return Response.redirect(location, 302);
      }

      const result = await response.json();
      if (result.code === 'duplicate_parameter') {
        return Response.redirect(location, 302);
      }

      return new Response(JSON.stringify(result), { status: response.status });
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  }
};
