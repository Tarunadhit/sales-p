# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [15.0.0-canary.684e33d25.0](https://github.com/material-components/material-components-web/compare/v14.0.0...v15.0.0-canary.684e33d25.0) (2023-01-10)


### Bug Fixes

* **button:** Attribute `hidden` now correctly hides the button. ([88db019](https://github.com/material-components/material-components-web/commit/88db019902ca09811794b202d66ce1f9f2e54aec))
* **button:** Refactored HCM focus ring into a base style with display: none so mixins can be applied to both a visible non-HCM ring and the HCM ring without extra specificity to override ripple-theme.focus selectors ([6a61d62](https://github.com/material-components/material-components-web/commit/6a61d62f6b2b1f6b4bcf7477bdad46ba4139e5c8))
* **iconbutton:** Apply icon-size theme-styles properly for font icons. ([77cf00e](https://github.com/material-components/material-components-web/commit/77cf00e3767e7ae73fd704e55830ceda8b71fdc9))
* **iconbutton:** Extract focus ring display properties into static styles to prevent customization via density mixins from overriding focus ring display conditions ([3c7b844](https://github.com/material-components/material-components-web/commit/3c7b844c2a27c678d9be5e93f9845dd8efda5835))
* **iconbutton:** support custom properties as values for an icon button ([68aaed9](https://github.com/material-components/material-components-web/commit/68aaed940081f45cc1730e684c70e132793b6633))


### Features

* Update icon button theme `size` function to be able to accept values with rem units. ([0e3dc8e](https://github.com/material-components/material-components-web/commit/0e3dc8e3892e2cda93062eb64ff498dbc18203f3))
