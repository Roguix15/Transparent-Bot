import React from 'react';
import LegalSection from '@/components/legal/LegalSection';

const tosContent = `
## 1. Acceptance of Terms

By using Transparent, you agree to comply with these Terms of Service. Use of the bot also implies acceptance of our [Privacy Policy](/privacy).

## 2. Permitted Use

Users may not use Transparent for:
- **NSFW content**
- **Illegal or malicious activities**
- **Intentionally attempting to exploit bugs or vulnerabilities in the bot**

Users must respect copyright and not upload content they do not own or have permission to use.

## 3. Limitation of Liability

Transparent is provided **as-is**. The bot is not responsible for any data loss or issues that may arise from its use.

The bot may receive updates or changes without prior notice and does not guarantee 24/7 availability.

## 4. Data Handling

Please see our [Privacy Policy](/privacy) for details on how we handle user data.

In summary, the bot collects only the information necessary for its operation and statistical purposes.

## 5. Modifications

We may update or change these Terms at any time. Users are responsible for reviewing them periodically.

## 6. Additional Disclaimer

We reserve the right to suspend access to the bot for users violating these terms.

The bot is provided without warranty of any kind.
`;

export default function TermsOfService() {
  return (
    <LegalSection
      title="Terms of Service"
      lastUpdated="January 1, 2024"
      content={tosContent}
    />
  );
}
