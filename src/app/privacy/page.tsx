import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} and affiliated products and services.`,
};

export default function PrivacyPage() {
  const lastUpdated = "February 15, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            1. Introduction
          </h2>
          <p className="mt-4">
            This Privacy Policy applies to {SITE.name} (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), operated by {SITE.author}. This
            policy covers the website located at{" "}
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
            By accessing or using any of our services, you agree to the
            collection, use, and disclosure of your information as described in
            this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            2. Information We Collect
          </h2>

          <h3 className="mt-6 font-semibold text-foreground">
            Information You Provide
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Account information (name, email address) when you create an
              account
            </li>
            <li>
              Payment information processed through our third-party payment
              processor, Stripe
            </li>
            <li>
              Content you create, upload, or submit through our services
              (including documents, tasks, voice recordings, and email content)
            </li>
            <li>Communications you send to us</li>
          </ul>

          <h3 className="mt-6 font-semibold text-foreground">
            Information Collected Automatically
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Device information (browser type, operating system, device type)
            </li>
            <li>Usage data (pages visited, features used, interaction data)</li>
            <li>IP address and approximate location</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            3. How We Use Your Information
          </h2>
          <p className="mt-4">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>
              Send you technical notices, updates, and administrative messages
            </li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>
              Generate AI-powered features, including but not limited to task
              management, email reply generation, document analysis, and research
              assistance
            </li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent security incidents</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. AI and Large Language Model Processing
          </h2>
          <p className="mt-4">
            Our services use artificial intelligence and large language models
            (LLMs) provided by third-party services to deliver core
            functionality. Content you provide (including text, voice input, and
            documents) may be processed by these AI services to generate
            responses, analyses, and recommendations.
          </p>
          <p className="mt-4">
            We do not use your personal content to train AI models. Content
            processing is performed on a per-request basis to deliver the
            service functionality you have requested.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            5. Third-Party Services
          </h2>
          <p className="mt-4">
            We use the following categories of third-party service providers:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Payment processing:</strong> Stripe processes all payment
              transactions. Your payment information is handled directly by
              Stripe under their privacy policy.
            </li>
            <li>
              <strong>AI/LLM providers:</strong> We use third-party AI services
              to power intelligent features in our applications.
            </li>
            <li>
              <strong>Hosting and infrastructure:</strong> Our services are
              hosted on third-party cloud platforms.
            </li>
            <li>
              <strong>Analytics:</strong> We may use analytics services to
              understand how our services are used.
            </li>
            <li>
              <strong>Email services:</strong> We use third-party email services
              for transactional and communication emails.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            6. Data Retention
          </h2>
          <p className="mt-4">
            We retain your personal information for as long as your account is
            active or as needed to provide you with our services. You may
            request deletion of your account and associated data at any time by
            contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            7. Data Security
          </h2>
          <p className="mt-4">
            We implement reasonable technical and organizational measures to
            protect your personal information. However, no method of
            transmission over the Internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            8. Your Rights
          </h2>
          <p className="mt-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Access:</strong> Request a copy of the personal information
              we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate
              information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information
            </li>
            <li>
              <strong>Portability:</strong> Request a portable copy of your data
            </li>
            <li>
              <strong>Opt-out:</strong> Opt out of certain data processing
              activities
            </li>
          </ul>

          <h3 className="mt-6 font-semibold text-foreground">
            California Residents (CCPA)
          </h3>
          <p className="mt-3">
            California residents have the right to know what personal information
            is collected, request deletion of personal information, and opt out
            of the sale of personal information. We do not sell personal
            information.
          </p>

          <h3 className="mt-6 font-semibold text-foreground">
            European Residents (GDPR)
          </h3>
          <p className="mt-3">
            If you are located in the European Economic Area, you have
            additional rights under the General Data Protection Regulation,
            including the right to lodge a complaint with a supervisory
            authority.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            9. Cookies
          </h2>
          <p className="mt-4">
            We use cookies and similar technologies to maintain sessions,
            remember preferences, and understand how our services are used. You
            can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            10. Children&apos;s Privacy
          </h2>
          <p className="mt-4">
            Our services are not directed to children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If you believe we have collected information from a child under
            13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            11. Changes to This Policy
          </h2>
          <p className="mt-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            12. Contact Us
          </h2>
          <p className="mt-4">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
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
