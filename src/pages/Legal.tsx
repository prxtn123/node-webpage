import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-4">
            Privacy, GDPR & Terms
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: 31 October 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This notice is for the website at nodehub.uk, including the pages at nodehub.uk/node/. It is published by Praxis GB (PRAXISGB LIMITED). We handle personal information in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-12">
              This notice covers this website only. It does not cover data processed through the node product, which is governed by separate customer agreements and a Data Processing Addendum (DPA) when applicable.
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">Privacy Policy</h2>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">What personal data we collect</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website stores very little itself.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Contact and enquiry data:</strong> the contact form does not send your details to our servers. It opens your own email program with a message addressed to hello@praxisgb.com. That message can include your name, company, email address, phone number and what you wrote. Nothing is sent unless you send the email. You can also email hello@praxisgb.com, or call the number on the contact page, yourself.</li>
              <li><strong>Hosting logs:</strong> the site is static files hosted on GitHub Pages. When your browser loads a page, the host can record ordinary connection data in its server logs, such as your IP address, the page requested and the time. This website does not add its own logging on top of that.</li>
              <li><strong>Fonts:</strong> the typeface (Inter) is a file on this website. Your browser loads it from nodehub.uk. Visiting the site does not send your IP address to a font provider.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website does not set cookies. It does not use analytics, advertising tags or other third-party scripts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We do not collect special category data (for example health or ethnicity) through this website.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">How we use your data</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>To read and reply to emails and calls you choose to send us, including demo requests.</li>
              <li>The host uses connection logs to deliver the site and to protect it from abuse.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              This website does not measure how visitors use the pages, and it has no mailing-list signup.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Legal basis for processing</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li><strong>Legitimate interests:</strong> replying to enquiries you send us, and the host delivering the site and protecting it. We balance this against your rights.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              The website does not ask you to consent to cookies or to marketing emails, because it does not use cookies, analytics or a mailing list.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Who we share your data with</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell personal data.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>GitHub Pages hosts the website, so loading a page means that host receives the connection data described above.</li>
              <li>If you send the contact email, it goes through your email provider to the hello@praxisgb.com mailbox. The form is not passed to any other service.</li>
              <li>We may share information with legal authorities when the law requires it.</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Data retention</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website does not keep a copy of the contact form. It does not keep analytics records or cookie records, because it does not use them.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you send us an email, that message is held in the mailbox it was sent to so we can reply.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Your rights under UK GDPR</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Access, correct, or delete your personal data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability (where technically feasible)</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" className="text-blue-600 hover:text-blue-700">ico.org.uk</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              To exercise any of these rights, email <a href="mailto:privacy@praxisgb.com" className="text-blue-600 hover:text-blue-700">privacy@praxisgb.com</a>. We will respond within one month.
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">GDPR Compliance Statement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Praxis GB acts as the data controller for personal data collected via this website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We process data lawfully, transparently, and for specified purposes only. We use appropriate technical and organisational measures to protect data and conduct privacy risk assessments where relevant. In the unlikely event of a personal data breach, we will notify the ICO and affected individuals as required by law (within 72 hours where applicable).
            </p>

            <h2 className="text-3xl font-semibold text-black tracking-tight mt-16 mb-6">Terms of Use</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Permitted use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may view, browse, and download content for personal, non-commercial reference only. You must not:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Copy, reproduce, distribute or commercially exploit any content without written permission</li>
              <li>Modify or create derivative works from the site content</li>
              <li>Use the site for any unlawful purpose or in a way that could damage, disable, or impair it</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Intellectual property</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              All content on this website (text, images, design, logos) is owned by Praxis GB or licensed to us. No rights are granted beyond personal, non-commercial viewing.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Disclaimers and limitation of liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website is provided "as is" for informational purposes only. We do not guarantee accuracy, completeness, or uninterrupted access.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              To the maximum extent permitted by law, Praxis GB excludes all liability for any loss or damage arising from use of the site (including indirect or consequential loss). Our total liability is limited to £100.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Third-party links</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Any links to external websites are provided for convenience only. We are not responsible for their content or privacy practices.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Changes to these terms</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update these terms from time to time. Continued use of the website after changes constitutes acceptance.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Governing law</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              These terms are governed by the laws of England and Wales. Any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h3 className="text-xl font-semibold text-black mt-8 mb-4">Contact</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              For privacy queries: <a href="mailto:privacy@praxisgb.com" className="text-blue-600 hover:text-blue-700">privacy@praxisgb.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-12">
              General enquiries: <a href="mailto:hello@praxisgb.com" className="text-blue-600 hover:text-blue-700">hello@praxisgb.com</a>
            </p>

            <p className="text-sm text-gray-500 mt-16">
              © 2026 PRAXISGB LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
