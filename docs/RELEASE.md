# Releasing Full Year in New Tab

Maintainer notes for testing and publishing a new version to the Chrome Web Store.

## Manual test in Chrome

After loading the built extension in Chrome, run a quick browser-level check:

- Open a new tab and confirm the full-year calendar renders.
- Open Settings and change the display mode.
- Toggle week numbers and quarter labels.
- Switch between light, dark, and system themes.
- Reload the new tab and confirm settings persist.
- Use **Erase local data** and confirm defaults return.

Chrome Web Store publishing notes and permission/privacy justifications are tracked in [CHROMEWEBSTORE.md](../CHROMEWEBSTORE.md).

## 1. Confirm Release Metadata

Before packaging, confirm the release metadata matches the extension behavior:

- `manifest.json` and `package.json` use the intended version.
- `CHROMEWEBSTORE.md` still matches the extension purpose, permissions, privacy posture, and listing copy.
- [docs/PRIVACY.md](PRIVACY.md) still matches runtime behavior.
- Any manifest, permission, privacy, screenshot, or listing copy changes are documented before submission.

For the current extension posture, the manifest should still have no `permissions` and no `host_permissions`.

## 2. Run Local Checks

Run the checks directly while developing:

```bash
npm run typecheck
npm test
npm run build
```

The release script repeats the required checks before creating the archive.

## 3. Build And Package

```bash
npm run release
```

The release script:

1. Runs `npm run typecheck`.
2. Runs the Vitest suite.
3. Removes and rebuilds `dist/`.
4. Reads the version from `dist/manifest.json`.
5. Creates `full-year-in-new-tab-v<version>.zip` from the root contents of `dist/`.

## 4. Inspect The Package

Review the `unzip -l` output printed by the release script. The archive should include:

- `manifest.json`
- `newtab.html`
- `theme-bootstrap.js`
- `_locales/`
- `icons/`
- `assets/`

Before uploading, confirm:

- No source maps are present unless intentionally enabled.
- No unexpected font assets are present.
- No remote assets or remotely loaded code were introduced.
- No manifest permissions or host permissions were added unless explicitly documented in `CHROMEWEBSTORE.md`.

## 5. Upload To Chrome Web Store

For the existing live extension:

1. Open the Chrome Developer Dashboard.
2. Select the existing **Full Year in New Tab** item.
3. Open the package/upload area for the item.
4. Upload `full-year-in-new-tab-v<version>.zip`.
5. Confirm the uploaded package version is greater than the currently published version.

For a first-time listing, use the dashboard's new item flow instead of updating an existing item.

## 6. Complete Store Listing And Privacy Fields

Review the Store listing before submission:

- Update listing copy, screenshots, category, or distribution only if they changed for this release.
- Keep the single purpose aligned with `CHROMEWEBSTORE.md`.
- Keep privacy practices aligned with [docs/PRIVACY.md](PRIVACY.md).
- For the current release posture, disclose that the extension does not collect user data.
- For the current manifest, there are no permissions and no host permissions to justify.
- Confirm the package uses local extension code and does not rely on remote assets or remote scripts.

## 7. Submit For Review

Submit the uploaded package for Chrome Web Store review.

If you want to control the exact publication time after approval, use the dashboard's deferred publishing option if available for the item.

## 8. After Submission

After approval or publication:

- Verify the public listing shows the intended version, screenshots, and description.
- Install or update the extension from the Chrome Web Store.
- Open a new tab and smoke-test the calendar, settings, theme, and local data erase flow.
- If a bad update is still in review, cancel the submission in the dashboard.
- If a bad update has already published, follow Chrome Web Store rollback guidance and submit a corrected package.
