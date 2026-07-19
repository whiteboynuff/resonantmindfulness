// Cloudflare Worker — serves static site + handles form POST to Brevo
// Set BREVO_API_KEY as a secret: wrangler secret put BREVO_API_KEY

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle form submissions
    if (request.method === 'POST' && url.pathname === '/api/subscribe') {
      try {
        const formData = await request.formData();
        const email = formData.get('EMAIL');

        if (!email) {
          return Response.redirect(url.origin + '/register.html', 302);
        }

        const response = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': env.BREVO_API_KEY
          },
          body: JSON.stringify({ email: email, listIds: [16], updateEnabled: true })
        });

        if (response.ok) {
          return Response.redirect(url.origin + '/thank-you.html', 302);
        }

        const result = await response.json();
        if (result.code === 'duplicate_parameter') {
          return Response.redirect(url.origin + '/thank-you.html', 302);
        }

        return Response.redirect(url.origin + '/thank-you.html', 302);
      } catch (err) {
        return Response.redirect(url.origin + '/thank-you.html', 302);
      }
    }

    // Serve static assets (Cloudflare Workers Assets binding)
    return env.ASSETS.fetch(request);
  }
};
