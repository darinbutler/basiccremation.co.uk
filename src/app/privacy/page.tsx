export const metadata = {
  title: "Privacy Policy",
  description: "How Basic Cremation handles personal information collected through this website."
};

export default function PrivacyPage() {
  const updated = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" });

  return (
    <div className="max-w-page mx-auto px-4 md:px-8 py-12">
      <div className="max-w-prose prose-content">
        <h1>Privacy Policy</h1>
        <p>
          This privacy policy explains how Basic Cremation handles personal information collected
          through this website (basiccremation.co.uk).
        </p>

        <h2>Information we collect</h2>
        <p>We collect two kinds of information:</p>
        <ul>
          <li>
            <strong>Information you give us via the callback form:</strong> your name, phone number,
            and any message you choose to include. This is shared with the service team handling
            cremation arrangements so they can return your call.
          </li>
          <li>
            <strong>Anonymous analytics:</strong> pages visited, approximate location (city level),
            device type, and how you arrived at the site. We use this to understand which information
            is most useful to families and to improve the site.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <p>
          Callback form submissions are passed to the service team so they can return your call.
          Analytics data is used solely to improve this website. We do not sell your data and we do
          not share it with third parties for marketing purposes.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses minimal cookies for essential site function and anonymous analytics. You can
          decline non-essential cookies through your browser settings without affecting your ability
          to read information or call us.
        </p>

        <h2>Your rights under UK GDPR</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Ask what personal information we hold about you</li>
          <li>Ask for it to be corrected or deleted</li>
          <li>Object to processing or ask for it to be restricted</li>
          <li>Complain to the Information Commissioner&rsquo;s Office (ico.org.uk)</li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details on the contact page or call
          the number on this site.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. The current version is always
          published on this page.
        </p>

        <p className="text-sm text-ink-500">Last updated: {updated}</p>
      </div>
    </div>
  );
}
