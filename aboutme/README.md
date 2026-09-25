# Independent SEO Consultant Website

A responsive, multi-page static website starter for an independent full-service SEO consultant. It is designed to run directly in XAMPP without a build process or JavaScript framework.

## Pages

- `index.html` — conversion-focused homepage
- `services.html` — SEO service details and engagement formats
- `case-studies.html` — live project reviews and technical SEO findings
- `portfolio.html` — live SEO product portfolio with screenshots and review notes
- `about.html` — consultant profile and working principles
- `insights.html` — content/editorial starting point
- `contact.html` — contact information and inquiry form
- `privacy.html` — privacy-policy template
- `404.html` — custom error page

## Run locally in XAMPP

1. Start Apache in the XAMPP Control Panel.
2. Open the project through your local Apache URL, for example:
   - `http://localhost/aboutme/`
3. If the project is served under a different folder name, update the URL accordingly.

## Required replacements before launch

### Identity and contact

The public contact details are set to **fututana8@gmail.com** and **0948 515 546**. Update the service-area and response-time copy if your availability changes.

A professional portrait is currently used in `about.html` from `images/Capture.PNG`. Replace it with a higher-resolution version (at least 800 × 900 pixels) for sharper display on high-density screens.

### Domain and SEO metadata

Replace `https://www.example.com` throughout:

- HTML canonical and Open Graph URLs
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest` start URL, if using a subdirectory

Generate a real 1200 × 630 PNG social image and replace the SVG Open Graph image if your target platforms do not support SVG.

### Evidence and claims

Do not publish invented:

- Rankings
- Traffic increases
- Revenue or lead results
- Testimonials
- Client names or logos
- Experience levels
- Certifications
- Availability

Replace the live project reviews only with documented, permission-approved information if the projects or ownership change. Use a credible review policy and never add fake `Review` structured data.

### Service information

Customize:

- Service descriptions and deliverables
- Engagement formats
- Pricing or “starting from” information
- Minimum engagement requirements
- Response time and business hours
- Geographic service area

### Contact delivery

The current form prepares an email using the visitor’s mail client. It does not securely store or transmit data through a server.

Before launch, connect it to a suitable form endpoint, CRM, or email service. Add:

- Spam protection
- Server-side validation
- Rate limiting where appropriate
- Consent/privacy language
- A clear success and error state
- An accessible autoresponse, if appropriate

Do not collect sensitive information such as passwords or customer data.

### Newsletter

The newsletter form is a visual placeholder. Connect it to a mailing platform only after defining the audience, consent process, privacy notice, and unsubscribe workflow.

### Privacy policy

`privacy.html` is not legal advice. Customize it for the actual legal entity, jurisdiction, hosting location, analytics, CRM, scheduling tools, payment provider, retention periods, and legal rights.

## Technical notes

- HTML, CSS, and JavaScript are dependency-free except for optional Google Fonts.
- The portfolio screenshots are stored in `assets/images/portfolio/` and were captured from the live Vercel projects; recapture them when the products change.
- The portfolio and case-study pages use public project metadata and visible feature labels, not copied application source or fabricated performance results.
- The website includes responsive navigation, accessible focus states, reduced-motion support, lazy visual reveals, and a custom 404 page.
- `.htaccess` disables directory indexes and adds basic Apache security headers.
- `sitemap.xml` and `robots.txt` use `example.com` until the final domain is known.
- The Open Graph image at `assets/og-image.svg` is a template.

## Launch checklist

- [ ] Confirm the service area, response time, and legal privacy details
- [ ] Add a real headshot and biography
- [ ] Publish approved case studies and testimonials
- [ ] Add a real social-sharing image
- [ ] Connect the contact form
- [ ] Customize the privacy policy
- [ ] Replace the final domain in SEO files
- [ ] Check every internal link and form
- [ ] Test mobile, tablet, and desktop layouts
- [ ] Check keyboard navigation and contrast
- [ ] Run PageSpeed Insights and fix real performance issues
- [ ] Validate structured data
- [ ] Test with Google Search Console
- [ ] Configure analytics and conversion tracking only with an appropriate consent solution
- [ ] Deploy over HTTPS
