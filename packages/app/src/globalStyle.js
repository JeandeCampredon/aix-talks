/* eslint-disable */
import { css } from '@emotion/core';

import hs from '../resources/fonts/SignPainter-HouseScript.ttf';
import { fontFluid, fontScale } from './fonts';

export const resetStyle = css`
  /*! normalize.css v1.0.0 | MIT License | git.io/normalize */

  /* ==========================================================================
HTML5 display definitions
========================================================================== */

  /*
* Corrects ’block’ display not defined in IE 6/7/8/9 and Firefox 3.
*/

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }

  /*
* Corrects ’inline-block’ display not defined in IE 6/7/8/9 and Firefox 3.
*/

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  /*
* Prevents modern browsers from displaying ’audio’ without controls.
* Remove excess height in iOS 5 devices.
*/

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /*
* Addresses styling for ’hidden’ attribute not present in IE 7/8/9, Firefox 3,
* and Safari 4.
* Known issue: no IE 6 support.
*/

  [hidden] {
    display: none;
  }

  /* ==========================================================================
Base
========================================================================== */

  /*
* 1. Corrects text resizing oddly in IE 6/7 when body ’font-size’ is set using
* ’em’ units.
* 2. Prevents iOS text size adjust after orientation change, without disabling
* user zoom.
*/

  html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
  }

  /*
* Addresses ’font-family’ inconsistency between ’textarea’ and other form
* elements.
*/

  html,
  button,
  input,
  select,
  textarea {
    font-family: sans-serif;
  }

  /*
* Addresses margins handled incorrectly in IE 6/7.
*/

  body {
    margin: 0;
  }

  /* ==========================================================================
Links
========================================================================== */

  /*
* Addresses ’outline’ inconsistency between Chrome and other browsers.
*/

  a:focus {
    outline: thin dotted;
  }

  /*
* Improves readability when focused and also mouse hovered in all browsers.
*/

  a:active,
  a:hover {
    outline: 0;
  }

  /*
* Addresses styling not present in IE 7/8/9, Safari 5, and Chrome.
*/

  abbr[title] {
    border-bottom: 1px dotted;
  }

  /*
* Addresses style set to ’bolder’ in Firefox 3+, Safari 4/5, and Chrome.
*/

  b,
  strong {
    font-weight: bold;
  }

  blockquote {
    margin: 1em 40px;
  }

  /*
* Addresses styling not present in Safari 5 and Chrome.
*/

  dfn {
    font-style: italic;
  }

  /*
* Addresses styling not present in IE 6/7/8/9.
*/

  mark {
    background: #ff0;
    color: #000;
  }

  /*
* Addresses margins set differently in IE 6/7.
*/

  p,
  pre {
    margin: 1em 0;
  }

  /*
* Corrects font family set oddly in IE 6, Safari 4/5, and Chrome.
*/

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, serif;
    _font-family: ’courier new’, monospace;
    font-size: 1em;
  }

  /*
* Improves readability of pre-formatted text in all browsers.
*/

  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /*
* Addresses CSS quotes not supported in IE 6/7.
*/

  q {
    quotes: none;
  }

  /*
* Addresses ’quotes’ property not supported in Safari 4.
*/

  q:before,
  q:after {
    content: ’’;
    content: none;
  }

  small {
    font-size: 75%;
  }

  /*
* Prevents ’sub’ and ’sup’ affecting ’line-height’ in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  /* ==========================================================================
Lists
========================================================================== */

  /*
* Addresses margins set differently in IE 6/7.
*/

  dl,
  menu,
  ol,
  ul {
    margin: 1em 0;
  }

  dd {
    margin: 0 0 0 40px;
  }

  /*
* Addresses paddings set differently in IE 6/7.
*/

  menu,
  ol,
  ul {
    padding: 0 0 0 40px;
  }

  /*
* Corrects list images handled incorrectly in IE 7.
*/

  nav ul,
  nav ol {
    list-style: none;
    list-style-image: none;
  }

  /* ==========================================================================
Embedded content
========================================================================== */

  /*
* 1. Removes border when inside ’a’ element in IE 6/7/8/9 and Firefox 3.
* 2. Improves image quality when scaled in IE 7.
*/

  img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
  }

  /*
* Corrects overflow displayed oddly in IE 9.
*/

  svg:not(:root) {
    overflow: hidden;
  }

  /* ==========================================================================
Figures
========================================================================== */

  /*
* Addresses margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
*/

  figure {
    margin: 0;
  }

  /* ==========================================================================
Forms
========================================================================== */

  /*
* Corrects margin displayed oddly in IE 6/7.
*/

  form {
    margin: 0;
  }

  /*
* Define consistent border, margin, and padding.
*/

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  /*
* 1. Corrects color not being inherited in IE 6/7/8/9.
* 2. Corrects text not wrapping in Firefox 3.
* 3. Corrects alignment displayed oddly in IE 6/7.
*/

  legend {
    border: 0; /* 1 */
    padding: 0;
    white-space: normal; /* 2 */
    *margin-left: -7px; /* 3 */
  }

  /*
* 1. Corrects font size not being inherited in all browsers.
* 2. Addresses margins set differently in IE 6/7, Firefox 3+, Safari 5,
* and Chrome.
* 3. Improves appearance and consistency in all browsers.
*/

  button,
  input,
  select,
  textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
  }

  /*
* Addresses Firefox 3+ setting ’line-height’ on ’input’ using ’!important’ in
* the UA stylesheet.
*/

  button,
  input {
    line-height: normal;
  }

  /*
* 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native ’audio’
* and ’video’ controls.
* 2. Corrects inability to style clickable ’input’ types in iOS.
* 3. Improves usability and consistency of cursor style between image-type
* ’input’ and others.
* 4. Removes inner spacing in IE 7 without affecting normal text inputs.
* Known issue: inner spacing remains in IE 6.
*/

  button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible; /* 4 */
  }

  /*
* Re-set default cursor for disabled elements.
*/

  button[disabled],
  input[disabled] {
    cursor: default;
  }

  /*
* 1. Addresses box sizing set to content-box in IE 8/9.
* 2. Removes excess padding in IE 8/9.
* 3. Removes excess padding in IE 7.
* Known issue: excess padding remains in IE 6.
*/

  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    *height: 13px; /* 3 */
    *width: 13px; /* 3 */
  }

  /*
* 1. Addresses ’appearance’ set to ’searchfield’ in Safari 5 and Chrome.
* 2. Addresses ’box-sizing’ set to ’border-box’ in Safari 5 and Chrome
* (include ’-moz’ to future-proof).
*/

  input[type='search'] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
  }

  /*
* Removes inner padding and search cancel button in Safari 5 and Chrome
* on OS X.
*/

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
* Removes inner padding and border in Firefox 3+.
*/

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /*
* 1. Removes default vertical scrollbar in IE 6/7/8/9.
* 2. Improves readability and alignment in all browsers.
*/

  textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
  }

  /* ==========================================================================
Tables
========================================================================== */

  /*
* Remove most spacing between table cells.
*/

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

/*! default s */
export const customGlobalStyle = `
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  html {
    position: fixed;
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    font-weight: 100;
  }

  body {
    height: 100%;
    width: 100%;
    position: absolute;
    color: #232323
  }

  #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  html,
  button,
  input,
  select,
  textarea {
    font-family: 'roboto';
  }

  @font-face {
    font-family: "SignPainter-HouseScript";
    src: url("${hs}") format("ttf");
  }
`;
/* eslint-enable */

export default css`
  ${resetStyle};
  ${customGlobalStyle};
  ${fontFluid.fluidTypography};
  ${fontScale.structuredWriting};
`;
