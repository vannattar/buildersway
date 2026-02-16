import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name} and affiliated products and services.`,
};

export default function TermsPage() {
  const lastUpdated = "February 15, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            1. Agreement to Terms
          </h2>
          <p className="mt-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the services provided by {SITE.name}, operated by{" "}
            {SITE.author} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            These Terms apply to the website located at{" "}
            <strong>buildersway.io</strong> and all affiliated products,
            services, applications, and websites, including but not limited to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong>Voice Hats</strong> (voicehats.com) — web application and
              mobile applications
            </li>
            <li>
              <strong>ProReply</strong> (proreply.app) — browser extension and
              web application
            </li>
            <li>
              Any other products, services, or websites operated under{" "}
              {SITE.name} or {SITE.author}
            </li>
          </ul>
          <p className="mt-4">
            By accessing or using any of our services, you agree to be bound by
            these Terms. If you do not agree to these Terms, do not use our
            services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            2. Description of Services
          </h2>
          <p className="mt-4">
            We provide software applications and services designed to help users
            manage tasks, communicate effectively, and improve productivity.
            Our services may include AI-powered features, voice-driven
            interfaces, document processing, email assistance, and other
            functionality as described on each product&apos;s website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            3. Accounts
          </h2>
          <p className="mt-4">
            Some of our services require you to create an account. You are
            responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
            You agree to notify us immediately of any unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. Payments and Subscriptions
          </h2>
          <p className="mt-4">
            Certain services or features may require payment. All payments are
            processed through Stripe. By providing payment information, you
            agree to Stripe&apos;s terms of service.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Subscription fees are billed in advance on a recurring basis
              (monthly or annually, as selected)
            </li>
            <li>
              You may cancel your subscription at any time; cancellation takes
              effect at the end of the current billing period
            </li>
            <li>
              Refunds are handled on a case-by-case basis at our discretion
            </li>
            <li>
              We reserve the right to change pricing with reasonable notice
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            5. Acceptable Use
          </h2>
          <p className="mt-4">You agree not to use our services to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Violate any applicable law or regulation</li>
            <li>Infringe on the rights of others</li>
            <li>
              Transmit harmful, threatening, abusive, or otherwise objectionable
              content
            </li>
            <li>
              Attempt to gain unauthorized access to our systems or other
              users&apos; accounts
            </li>
            <li>
              Use automated means to access or collect data from our services
              without permission
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of our
              services
            </li>
            <li>
              Use our services to generate spam, phishing content, or deceptive
              communications
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            6. Your Content
          </h2>
          <p className="mt-4">
            You retain ownership of all content you create, upload, or submit
            through our services. By using our services, you grant us a limited
            license to process your content as necessary to provide the service
            functionality you have requested.
          </p>
          <p className="mt-4">
            You are responsible for ensuring you have the right to upload and
            process any content you submit, including documents, text, and other
            materials.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            7. AI-Generated Content
          </h2>
          <p className="mt-4">
            Our services may use artificial intelligence to generate content,
            suggestions, analyses, and recommendations. AI-generated content is
            provided as-is and should be reviewed before use. We do not
            guarantee the accuracy, completeness, or suitability of
            AI-generated content for any particular purpose.
          </p>
          <p className="mt-4">
            You are responsible for reviewing, editing, and verifying any
            AI-generated content before sending, publishing, or acting upon it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            8. Intellectual Property
          </h2>
          <p className="mt-4">
            Our services, including all software, designs, text, graphics, and
            other content created by us, are protected by intellectual property
            laws. You may not copy, modify, distribute, or create derivative
            works from our services without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            9. Disclaimers
          </h2>
          <p className="mt-4">
            OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p className="mt-4">
            We do not warrant that our services will be uninterrupted,
            error-free, or secure. We do not warrant the accuracy or
            reliability of any AI-generated content or recommendations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            10. Limitation of Liability
          </h2>
          <p className="mt-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE.author.toUpperCase()}{" "}
            AND {SITE.name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
            LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
            INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
            LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO
            ACCESS OR USE) OUR SERVICES.
          </p>
          <p className="mt-4">
            OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATING TO
            THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US
            IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            11. Termination
          </h2>
          <p className="mt-4">
            We may suspend or terminate your access to our services at any time,
            with or without cause, with or without notice. Upon termination,
            your right to use our services ceases immediately. Provisions that
            by their nature should survive termination will survive.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            12. Governing Law
          </h2>
          <p className="mt-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the United States and the state in which {SITE.author}{" "}
            primarily operates, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            13. Changes to These Terms
          </h2>
          <p className="mt-4">
            We may revise these Terms from time to time. We will provide notice
            of material changes by posting the updated Terms on this page and
            updating the &quot;Last updated&quot; date. Your continued use of
            our services after changes become effective constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            14. Contact Us
          </h2>
          <p className="mt-4">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mt-3">
            <strong>{SITE.author}</strong>
            <br />
            {SITE.name}
            <br />
            Email:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
