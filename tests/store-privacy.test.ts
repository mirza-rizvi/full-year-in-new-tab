import { describe, expect, it } from 'vitest';
import privacyText from '../docs/PRIVACY.md?raw';
import storeText from '../CHROMEWEBSTORE.md?raw';

describe('Chrome Web Store and privacy docs', () => {
  it('tracks Chrome Web Store handoff fields', () => {
    expect(storeText).toContain('Single Purpose');
    expect(storeText).toContain('Permissions');
    expect(storeText).toContain('Host Permissions');
    expect(storeText).toContain('Privacy');
    expect(storeText).toContain('No user data is collected');
    expect(storeText).toContain('docs/PRIVACY.md');
  });

  it('keeps the privacy handoff aligned with local-only behavior', () => {
    expect(privacyText).toContain('fyi:calendar-settings');
    expect(privacyText).toContain('does not collect, transmit, sell, or share personal data');
    expect(privacyText).toContain('no permissions');
    expect(privacyText).toContain('no host permissions');
    expect(privacyText).toContain('no background worker');
    expect(privacyText).toContain('no analytics');
    expect(privacyText).toContain('no network requests');
  });
});
