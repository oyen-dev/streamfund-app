import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="container mx-auto pt-[150px] py-20 px-5 font-inter text-neutral-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Privacy and Policy</h1>
        <p className="text-sm text-neutral-20">
          DATE OF LAST REVISION MARCH 2025
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="mb-4">
            At StreamFund, operated by [Your Company Name] (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), we value your privacy. This
            Privacy Policy explains how we collect, use, share, and protect your
            information when you use our platform (&quot;Platform&quot;). By
            using StreamFund, you agree to this Policy. If you don&apos;t agree
            with it, please don&apos;t use our service.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-2">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account Information:</strong> When you register, we
              collect usernames, bios, social media links, and wallet addresses.
              Donors may provide names or aliases if they choose to do so.
            </li>
            <li>
              <strong>Transaction Data:</strong> Information about your
              transactions (e.g., ETH, USDC), wallet addresses, and payment
              method details (e.g., Smart Contract, Binance Pay, LIFI) when you
              send or receive funds.
            </li>
            <li>
              <strong>User Content:</strong> Messages sent with donations or
              content you submit (e.g., Streamer bios).
            </li>
            <li>
              <strong>Technical Data:</strong> IP addresses, device info (e.g.,
              browser type, operating system), and usage data (e.g., pages
              visited, time spent) when you interact with the Platform.
            </li>
            <li>
              <strong>Platform Data:</strong> Information about creators or
              payment services, like wallet IDs or transaction confirmations.
            </li>
          </ul>
        </section>

        {/* How We Collect Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How We Collect Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Directly from You:</strong> When you donate, or fill out
              forms (e.g., &quot;From&quot; field, messages).
            </li>
            <li>
              <strong>Automatically:</strong> Through cookies, logs, and
              analytics tools when you use the Platform.
            </li>
            <li>
              <strong>From Third Parties:</strong> Via wallet providers (e.g.,
              MetaMask) or payment processors (e.g., Binance Pay) when you
              connect them.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-2">We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide and improve StreamFund (e.g., process donations, display
              messages on streams).
            </li>
            <li>Send instant payouts to Streamers and verify transactions.</li>
            <li>Personalize your experience (e.g., show relevant streams).</li>
            <li>Communicate with you (e.g., support replies, updates).</li>
            <li>
              Detect and prevent fraud (e.g., monitor suspicious activity).
            </li>
            <li>Comply with legal obligations (e.g., tax reporting).</li>
          </ul>
        </section>

        {/* How We Share Your Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How We Share Your Information
          </h2>
          <p className="mb-2">We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Streamers:</strong> Donor names and messages (if you opt
              to show them) appear on streams.
            </li>
            <li>
              <strong>Service Providers:</strong> Third parties like payment
              processors (e.g., LIFI, Binance Pay) or analytics tools to operate
              the Platform.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law or to
              protect our rights (e.g., fraud prevention).
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger, sale, or
              acquisition, your data may be transferred to another entity.
            </li>
          </ul>
          <p className="mt-2">
            We do not sell your personal information to third parties for
            marketing purposes.
          </p>
        </section>

        {/* Web3 and Blockchain Considerations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Web3 and Blockchain Considerations
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Public Data:</strong> Wallet addresses and donation
              transactions are recorded on public blockchains (e.g., Ethereum,
              Arbitrum). This data is permanent and beyond our control once
              processed.
            </li>
            <li>
              <strong>Wallet Security:</strong> We do not store your private
              keys or control your wallet. You&apos;re responsible for securing
              your wallet.
            </li>
          </ul>
        </section>

        {/* Your Choices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account Settings:</strong> Streamers can update their
              profile info anytime. Donors can choose to donate anonymously by
              not filling the &quot;From&quot; field or unchecking &quot;Show my
              name&quot;.
            </li>
            <li>
              <strong>Cookies:</strong> You can disable cookies in your browser,
              but some features may not work.
            </li>
            <li>
              <strong>Wallet:</strong> Disconnect your wallet anytime via your
              wallet provider.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We use industry-standard measures (e.g., encryption, secure
              servers) to protect your data.
            </li>
            <li>
              However, no system is 100% secure. We are not liable for breaches
              beyond our control (e.g., wallet hacks, third-party
              vulnerabilities).
            </li>
          </ul>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We keep account and transaction data as long as needed to provide
              services or meet legal requirements (e.g., tax records).
            </li>
            <li>
              Inactive accounts may be deleted after 2 years (e.g., 2 years) of
              inactivity, with notice.
            </li>
          </ul>
        </section>

        {/* International Transfers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">International Transfers</h2>
          <p>
            StreamFund operates in [Indonesia/your jurisdiction]. Your data may
            be transferred to servers outside your country, subject to
            safeguards like encryption.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="mb-2">
            Under applicable laws (e.g., Indonesia&apos;s UU PDP), you may have
            rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your data.</li>
            <li>Restrict or object to processing.</li>
            <li>Request data portability.</li>
            <li>Contact us at [support email] to exercise these rights.</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p>
            StreamFund may link to external sites (e.g., social media, wallet
            providers). We&apos;re not responsible for their privacy practices.
          </p>
        </section>

        {/* Children&apos;s Privacy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
          <p>
            StreamFund is not intended for users under 18. We do not knowingly
            collect data from minors. Contact us if you believe we have such
            data.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. Changes take effect when posted.
            Check back regularly.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Reach us at [support email] or [physical address if required] with
            questions or concerns.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
