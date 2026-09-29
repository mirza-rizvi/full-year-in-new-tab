# Security Policy

Full Year in New Tab is a local Chrome MV3 new-tab extension. It has no manifest permissions, no host permissions, no background worker, and no network requests in its current release posture.

## Supported Versions

Security fixes are handled for the latest published version and the current `main` branch.

## Reporting A Vulnerability

Report vulnerabilities privately through GitHub: [Report a vulnerability](https://github.com/mirza-rizvi/full-year-in-new-tab/security/advisories/new). Only the maintainer can see the report.

Please do not open a public issue for security problems.

Please include:

- Extension version
- Chrome version
- Operating system
- Affected surface, such as new-tab rendering, settings, local storage, build/release, or manifest
- Reproduction steps
- Expected impact

## Scope

Useful security reports include issues such as:

- Unexpected data collection or transmission
- Permission or manifest regressions
- Remote code or remote asset loading
- CSP bypasses
- Unsafe storage or settings behavior
- Release package contents that do not match the documented privacy posture

Reports about missing features, unsupported calendar integrations, or general support requests should use a regular GitHub issue instead.
