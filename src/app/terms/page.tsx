export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Basic Cremation website."
};

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" });

  return (
    <div className="max-w-page mx-auto px-4 md:px-8 py-12">
      <div className="max-w-prose prose-content">
        <h1>Terms of Use</h1>
        <p>By using basiccremation.co.uk you agree to the following terms.</p>

        <h2>About this site</h2>
        <p>
          Basic Cremation is an information website. We do not arrange cremations directly. When you
          call the number on this site you will be connected to a service provider who arranges
          cremations through a network of independent local funeral directors and crematoria. Any
          contract for cremation services is between you and that provider.
        </p>

        <h2>Information accuracy</h2>
        <p>
          We aim to keep all information on this site accurate and up to date but make no warranty
          as to its completeness or fitness for any particular purpose. Always confirm pricing,
          inclusions, and arrangements directly with the service team by phone before relying on
          them.
        </p>

        <h2>Use of this website</h2>
        <p>
          You may use this site for personal, non-commercial purposes. You may not copy, reproduce,
          or republish content from this site without permission, except for short personal
          reference.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site, including text, design, and layout, is &copy; Basic Cremation
          unless otherwise indicated.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          We are not liable for any loss arising from your use of this site, save for liability that
          cannot be excluded by law (such as for fraud or for death or personal injury caused by
          negligence).
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Disputes are subject to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. The current version is always published on
          this page.
        </p>

        <p className="text-sm text-ink-500">Last updated: {updated}</p>
      </div>
    </div>
  );
}
