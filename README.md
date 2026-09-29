# Full Year in New Tab

A Chrome extension that shows the whole year as a calendar every time you open a new tab.

**[Install from the Chrome Web Store](https://chromewebstore.google.com/detail/full-year-in-new-tab/egmlabobknbhcmlpmkaljbolmmhjehmf)**

## What you see

- All twelve months on one page, with today highlighted
- Which day of the year it is, how many days are left, and a progress bar for the year
- Click any date to see its details; press **Today** to jump back

## Settings

Open **Settings** on the new tab page to change:

- **Layout:** Balanced, Planning, Wall calendar or Dense
- **Size:** comfortable or compact
- **Theme:** light, dark, or match your system
- **Week starts on:** Sunday or Monday
- **Extras:** week numbers, quarter labels, month numbers, and weekend or workday highlighting

**Reset defaults** restores the original settings. **Erase local data** removes everything the extension has saved.

## Privacy

The extension needs no permissions and never connects to the internet. It collects no data. Your settings are saved only in your browser on this device. [Full privacy policy](docs/PRIVACY.md).

## What it doesn't do

It shows the calendar only. There are no events, reminders or accounts, it doesn't connect to Google Calendar or other calendars, and settings don't sync between devices.

## Help and feedback

- Found a problem or have an idea? [Open an issue](https://github.com/mirza-rizvi/full-year-in-new-tab/issues).
- Security problem? See [SECURITY.md](SECURITY.md).

## For developers

<details>
<summary>Build from source</summary>

```bash
npm install
npm run typecheck
npm test
npm run build
```

To try your build, open `chrome://extensions`, turn on **Developer mode**, click **Load unpacked** and choose the `dist/` folder.

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [release notes for maintainers](docs/RELEASE.md).

</details>

## License

[MIT](LICENSE)
