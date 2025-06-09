import React from "react";

const TermsOfServicePage = () => {
  return (
    <section className="container mx-auto pt-[150px] py-20 px-5 font-inter text-neutral-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Terms Of Service</h1>
        <p className="text-sm text-gray-400">
          DATE OF LAST REVISION MARCH 2025
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="mb-4">
            Welcome to StreamFund! These Terms of Service (&quot;Terms&quot;)
            govern your use of the StreamFund platform (&quot;Platform&quot;)
            operated by [Your Company Name] (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;). By accessing or using StreamFund, you agree to
            these Terms. If you do not agree, please do not use the Platform.
          </p>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-4">
            StreamFund is a platform that connects content creators
            (&quot;Streamers&quot;) with their supporters (&quot;Donors&quot;)
            through donations and real-time interactions. We enable Streamers to
            receive financial support and Donors to engage with Streamers using
            cryptocurrency or fiat payments. These Terms apply to all users of
            the Platform, including Streamers, Donors, and visitors.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You must be at least 18 years old or the legal age of majority in
              your jurisdiction to use StreamFund.
            </li>
            <li>You must have the legal capacity to enter into these Terms.</li>
            <li>
              You may not use StreamFund if you are barred from doing so under
              applicable laws.
            </li>
          </ul>
        </section>

        {/* Account Registration */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Account Registration</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You must be at least 18 years old or the legal age of majority in
              your jurisdiction to create an account.
            </li>
            <li>You must have the legal capacity to enter into these Terms.</li>
            <li>
              You may not use StreamFund if you are barred from doing so under
              applicable laws.
            </li>
          </ul>
        </section>

        {/* Account Registration (continued) */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Account Registration</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Streamers:</strong> To receive donations, you must create
              an account, provide accurate information (e.g., username, bio,
              social media), and connect a supported wallet or payment method.
            </li>
            <li>
              <strong>Donors:</strong> You may donate without an account but
              must connect a wallet or use a supported payment method for
              transactions.
            </li>
            <li>
              <strong>Responsibility:</strong> You are responsible for keeping
              your account secure and for all activities under your account.
              Notify us immediately at [support email] if you suspect
              unauthorized access.
            </li>
          </ul>
        </section>

        {/* Donations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Donations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Process:</strong> Donors can send donations to Streamers
              via the Platform using cryptocurrency (e.g., ETH, USDC, USDT,
              Arbitrum) or other methods.
            </li>
            <li>
              <strong>Fees:</strong> We charge transaction fees, which will be
              disclosed before you confirm your donation. Additional fees may
              apply from your cryptocurrency wallet or payment network.
            </li>
            <li>
              <strong>Instant Payouts:</strong> Streamers receive donations
              instantly, subject to network confirmation times and fraud
              prevention checks.
            </li>
            <li>
              <strong>Refunds:</strong> Donations are non-refundable unless
              required by law or approved by us in exceptional cases (e.g.,
              technical errors).
            </li>
          </ul>
        </section>

        {/* User Content */}
        <section>
          <h2 className="text-2xl font-bold mb-4">User Content</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Messages:</strong> Donors may send messages with
              donations. These may appear live on a Streamer&apos;s stream if
              the &quot;Show my name&quot; option is selected.
            </li>
            <li>
              <strong>Rules:</strong> All content (e.g., messages, bios) must
              not be illegal, offensive, harassing, or violate others&apos;
              rights. We reserve the right to remove or block content that
              violates these Terms.
            </li>
            <li>
              <strong>Ownership:</strong> You retain ownership of your content
              but grant us a non-exclusive, worldwide license to use it on the
              Platform.
            </li>
          </ul>
        </section>

        {/* Web3 and Wallet Integration */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Web3 and Wallet Integration
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Wallet Connection:</strong> You may connect a
              cryptocurrency wallet (e.g., MetaMask) to StreamFund. We do not
              control or store your private keys—wallet security is your
              responsibility.
            </li>
            <li>
              <strong>Risks:</strong> You acknowledge the risks of blockchain
              transactions, including volatility, network delays, and
              irreversible transfers. We are not liable for losses due to
              blockchain technology.
            </li>
            <li>
              <strong>Third-Party Services:</strong> Features like LIFI or
              Binance Pay are provided by third parties. Their terms and risks
              apply when you use them through StreamFund.
            </li>
          </ul>
        </section>

        {/* Prohibited Conduct */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Prohibited Conduct</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use StreamFund for illegal activities (e.g., money laundering,
              fraud).
            </li>
            <li>Manipulate, attack, disrupt, or overload the Platform.</li>
            <li>Impersonate others or provide false information.</li>
            <li>
              Send spam, hate speech, or harmful content through donation
              messages.
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Our Rights:</strong> StreamFund&apos;s name, logo, and
              design are our property. You may not use them without written
              permission.
            </li>
            <li>
              <strong>Your Rights:</strong> You retain rights to your content,
              subject to the license in Section &quot;User Content&quot;.
            </li>
          </ul>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Privacy</h2>
          <p>
            Your personal data is handled per our Privacy Policy [link to
            Privacy Policy]. By using StreamFund, you consent to our data
            practices.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>By You:</strong> You may stop using StreamFund anytime.
            </li>
            <li>
              <strong>By Us:</strong> We may suspend or terminate your access if
              you violate these Terms, engage in fraud, or for any reason at our
              discretion, with or without notice.
            </li>
            <li>
              <strong>Effect:</strong> Termination does not affect completed
              donations or your obligations under these Terms.
            </li>
          </ul>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              StreamFund is provided &quot;as is&quot; without warranties. We do
              not guarantee uninterrupted access, error-free operation, or
              specific results from donations.
            </li>
            <li>
              We are not responsible for Streamer content, third-party services,
              or blockchain network issues.
            </li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            To the extent permitted by law, we are not liable for indirect,
            incidental, or consequential damages (e.g., lost profits, data loss)
            arising from your use of StreamFund, nor for total liability limited
            to the amount you donated or received in the past 12 months.
          </p>
        </section>

        {/* Indemnity */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Indemnity</h2>
          <p>
            You agree to indemnify us against claims, losses, or damages arising
            from your use of StreamFund, violation of these Terms, or
            infringement of others&apos; rights.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Indonesia/your
            jurisdiction]. Disputes will be resolved in [Indonesia/your
            country], unless otherwise required by law.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Changes take effect when
            posted on the Platform. Continued use after changes means you accept
            the new Terms.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Questions? Reach us at [support email] or [physical address if
            required].
          </p>
        </section>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
