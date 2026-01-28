import React from 'react';
import LegalSection from '@/components/legal/LegalSection';

const privacyContent = `
## 1. Introduction

By using Transparent, you agree to this Privacy Policy. This document explains how we handle your data while using the bot.

## 2. Data We Collect

We collect the following data from users:

- **Your Discord ID**
- **Images you upload to the cloud for convenience (optional)**

## 3. How We Use Your Data

Discord IDs and uploaded images are used only to provide bot functionality.

Uploaded images can be accessed quickly without needing to re-upload each time. Users who prefer privacy can choose to upload images for each command instead.

## 4. Data Sharing

**Your data, including uploaded images, will never be shared with third parties.**

The bot owner does not intentionally view user-uploaded images; they are stored solely to provide bot functionality.

## 5. Data Retention

Uploaded photos remain stored until the user deletes them.

Users can remove photos individually or all at once using the \`/manage_images\` command.

## 6. Your Rights

You can request deletion of your stored images at any time using the \`/manage_images\` command.

Users can also request full removal of their data from the bot's storage.

## 7. Security

We take reasonable measures to protect user data, but absolute security cannot be guaranteed.

## 8. Changes to This Policy

This Privacy Policy may be updated or changed at any time. Users are encouraged to review it periodically.
`;

export default function PrivacyPolicy() {
  return (
    <LegalSection
      title="Privacy Policy"
      lastUpdated="January 1, 2024"
      content={privacyContent}
    />
  );
}
