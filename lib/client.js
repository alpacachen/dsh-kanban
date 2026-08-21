window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Bp=Object.create;var Er=Object.defineProperty;var Np=Object.getOwnPropertyDescriptor;var _p=Object.getOwnPropertyNames;var Up=Object.getPrototypeOf,Hp=Object.prototype.hasOwnProperty;var ci=e=>{throw TypeError(e)};var qp=(e,t)=>{for(var a in t)Er(e,a,{get:t[a],enumerable:!0})},fi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of _p(t))!Hp.call(e,r)&&r!==a&&Er(e,r,{get:()=>t[r],enumerable:!(o=Np(t,r))||o.enumerable});return e};var q=(e,t,a)=>(a=e!=null?Bp(Up(e)):{},fi(t||!e||!e.__esModule?Er(a,"default",{value:e,enumerable:!0}):a,e)),zp=e=>fi(Er({},"__esModule",{value:!0}),e);var pi=(e,t,a)=>t.has(e)||ci("Cannot "+a);var qe=(e,t,a)=>(pi(e,t,"read from private field"),a?a.call(e):t.get(e)),mi=(e,t,a)=>t.has(e)?ci("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Qn=(e,t,a,o)=>(pi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var fb={};qp(fb,{default:()=>cb});module.exports=zp(fb);var gi=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-black: #000;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --tracking-tight: -0.025em;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-2xl: 1rem;
    --animate-spin: spin 1s linear infinite;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring:where(:not(iframe)) {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
  .not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip-path: none;
    white-space: normal;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: 0px;
  }
  .top-1 {
    top: var(--spacing);
  }
  .top-1\\.5 {
    top: calc(var(--spacing) * 1.5);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-\\[50\\%\\] {
    top: 50%;
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .-left-\\[21px\\] {
    left: calc(21px * -1);
  }
  .left-\\[50\\%\\] {
    left: 50%;
  }
  .isolate {
    isolation: isolate;
  }
  .isolation-auto {
    isolation: auto;
  }
  .z-50 {
    z-index: 50;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .my-1 {
    margin-block: var(--spacing);
  }
  .mt-0 {
    margin-top: 0px;
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1 {
    margin-bottom: var(--spacing);
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .flow-root {
    display: flow-root;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .inline-table {
    display: inline-table;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-caption {
    display: table-caption;
  }
  .table-cell {
    display: table-cell;
  }
  .table-column {
    display: table-column;
  }
  .table-column-group {
    display: table-column-group;
  }
  .table-footer-group {
    display: table-footer-group;
  }
  .table-header-group {
    display: table-header-group;
  }
  .table-row {
    display: table-row;
  }
  .table-row-group {
    display: table-row-group;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-\\[1px\\] {
    height: 1px;
  }
  .h-\\[var\\(--radix-select-trigger-height\\)\\] {
    height: var(--radix-select-trigger-height);
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .max-h-48 {
    max-height: calc(var(--spacing) * 48);
  }
  .max-h-96 {
    max-height: calc(var(--spacing) * 96);
  }
  .max-h-\\[60vh\\] {
    max-height: 60vh;
  }
  .min-h-0 {
    min-height: 0px;
  }
  .min-h-\\[4rem\\] {
    min-height: 4rem;
  }
  .min-h-\\[60px\\] {
    min-height: 60px;
  }
  .min-h-\\[420px\\] {
    min-height: 420px;
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-72 {
    width: calc(var(--spacing) * 72);
  }
  .w-\\[1px\\] {
    width: 1px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-lg {
    max-width: var(--container-lg);
  }
  .min-w-0 {
    min-width: 0px;
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
    min-width: var(--radix-select-trigger-width);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .grow {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .translate-x-\\[-50\\%\\] {
    --tw-translate-x: -50%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[-50\\%\\] {
    --tw-translate-y: -50%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .rotate-2 {
    rotate: 2deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-grab {
    cursor: grab;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .touch-pinch-zoom {
    --tw-pinch-zoom: pinch-zoom;
    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);
  }
  .touch-none {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  :where(.space-y-1 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-1\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-reverse > :not(:last-child)) {
    --tw-space-y-reverse: 1;
  }
  :where(.space-x-reverse > :not(:last-child)) {
    --tw-space-x-reverse: 1;
  }
  :where(.divide-x > :not(:last-child)) {
    --tw-divide-x-reverse: 0;
    border-inline-style: var(--tw-border-style);
    border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
    border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  }
  :where(.divide-y > :not(:last-child)) {
    --tw-divide-y-reverse: 0;
    border-bottom-style: var(--tw-border-style);
    border-top-style: var(--tw-border-style);
    border-top-width: calc(1px * var(--tw-divide-y-reverse));
    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  }
  :where(.divide-y-reverse > :not(:last-child)) {
    --tw-divide-y-reverse: 1;
  }
  .self-start {
    align-self: flex-start;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-hidden {
    overflow-y: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: 0.75rem;
  }
  .rounded-md {
    border-radius: 0.625rem;
  }
  .rounded-sm {
    border-radius: 0.5rem;
  }
  .rounded-xl {
    border-radius: 1rem;
  }
  .rounded-s {
    border-start-start-radius: 0.25rem;
    border-end-start-radius: 0.25rem;
  }
  .rounded-ss {
    border-start-start-radius: 0.25rem;
  }
  .rounded-e {
    border-start-end-radius: 0.25rem;
    border-end-end-radius: 0.25rem;
  }
  .rounded-se {
    border-start-end-radius: 0.25rem;
  }
  .rounded-ee {
    border-end-end-radius: 0.25rem;
  }
  .rounded-es {
    border-end-start-radius: 0.25rem;
  }
  .rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-tl {
    border-top-left-radius: 0.25rem;
  }
  .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-tr {
    border-top-right-radius: 0.25rem;
  }
  .rounded-b {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-br {
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-bl {
    border-bottom-left-radius: 0.25rem;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-s {
    border-inline-start-style: var(--tw-border-style);
    border-inline-start-width: 1px;
  }
  .border-e {
    border-inline-end-style: var(--tw-border-style);
    border-inline-end-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-\\[var\\(--dsw-alias-border-l2\\)\\] {
    border-color: var(--dsw-alias-border-l2);
  }
  .border-amber-500 {
    border-color: var(--color-amber-500);
  }
  .border-amber-500\\/40 {
    border-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-amber-500) 40%, transparent);
    }
  }
  .border-input {
    border-color: var(--dsw-alias-border-l1);
  }
  .border-primary {
    border-color: var(--dsw-alias-brand-primary);
  }
  .border-transparent {
    border-color: transparent;
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-amber-500\\/10 {
    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);
    }
  }
  .bg-background {
    background-color: var(--dsw-alias-bg-base);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/80 {
    background-color: color-mix(in srgb, #000 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);
    }
  }
  .bg-border {
    background-color: var(--dsw-alias-border-l1);
  }
  .bg-card {
    background-color: var(--dsw-alias-bg-layer-1);
  }
  .bg-destructive {
    background-color: var(--dsw-alias-state-error-primary);
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-muted {
    background-color: var(--dsw-alias-bg-layer-1);
  }
  .bg-popover {
    background-color: var(--dsw-alias-bg-overlay);
  }
  .bg-primary {
    background-color: var(--dsw-alias-brand-primary);
  }
  .bg-secondary {
    background-color: var(--dsw-alias-bg-layer-2);
  }
  .bg-secondary\\/70 {
    background-color: var(--dsw-alias-bg-layer-2);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--dsw-alias-bg-layer-2) 70%, transparent);
    }
  }
  .bg-sky-500 {
    background-color: var(--color-sky-500);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-repeat {
    background-repeat: repeat;
  }
  .p-0 {
    padding: 0px;
  }
  .p-0\\.5 {
    padding: calc(var(--spacing) * 0.5);
  }
  .p-1 {
    padding: var(--spacing);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-3\\.5 {
    padding: calc(var(--spacing) * 3.5);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: var(--spacing);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .py-0 {
    padding-block: 0px;
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-5 {
    padding-block: calc(var(--spacing) * 5);
  }
  .pt-0 {
    padding-top: 0px;
  }
  .pt-1 {
    padding-top: var(--spacing);
  }
  .pr-1 {
    padding-right: var(--spacing);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-2\\.5 {
    padding-bottom: calc(var(--spacing) * 2.5);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[10\\.5px\\] {
    font-size: 10.5px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13\\.5px\\] {
    font-size: 13.5px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .leading-4 {
    --tw-leading: calc(var(--spacing) * 4);
    line-height: calc(var(--spacing) * 4);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .text-clip {
    text-overflow: clip;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-amber-500 {
    color: var(--color-amber-500);
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-card-foreground {
    color: var(--dsw-alias-label-primary);
  }
  .text-destructive {
    color: var(--dsw-alias-state-error-primary);
  }
  .text-destructive-foreground {
    color: var(--dsw-alias-label-primary-foreground, #ffffff);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-foreground {
    color: var(--dsw-alias-label-primary);
  }
  .text-muted-foreground {
    color: var(--dsw-alias-label-secondary);
  }
  .text-muted-foreground\\/60 {
    color: var(--dsw-alias-label-secondary);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--dsw-alias-label-secondary) 60%, transparent);
    }
  }
  .text-muted-foreground\\/70 {
    color: var(--dsw-alias-label-secondary);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--dsw-alias-label-secondary) 70%, transparent);
    }
  }
  .text-popover-foreground {
    color: var(--dsw-alias-label-primary);
  }
  .text-primary {
    color: var(--dsw-alias-brand-primary);
  }
  .text-primary-foreground {
    color: var(--dsw-alias-label-primary-foreground, #ffffff);
  }
  .text-secondary-foreground {
    color: var(--dsw-alias-label-primary);
  }
  .text-sky-500 {
    color: var(--color-sky-500);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .normal-case {
    text-transform: none;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .not-italic {
    font-style: normal;
  }
  .diagonal-fractions {
    --tw-numeric-fraction: diagonal-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .lining-nums {
    --tw-numeric-figure: lining-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .oldstyle-nums {
    --tw-numeric-figure: oldstyle-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .ordinal {
    --tw-ordinal: ordinal;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .proportional-nums {
    --tw-numeric-spacing: proportional-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .slashed-zero {
    --tw-slashed-zero: slashed-zero;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .stacked-fractions {
    --tw-numeric-fraction: stacked-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .normal-nums {
    font-variant-numeric: normal;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .overline {
    text-decoration-line: overline;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-4 {
    text-underline-offset: 4px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .subpixel-antialiased {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
  .opacity-40 {
    opacity: 40%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-70 {
    opacity: 70%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-card {
    --tw-shadow: var(--dsw-shadow-lv2);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-column {
    --tw-shadow: 0 1px 2px var(--tw-shadow-color, rgb(0 0 0 / 0.06)), 0 4px 12px var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-float {
    --tw-shadow: var(--dsw-shadow-lv3);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-offset-background {
    --tw-ring-offset-color: var(--dsw-alias-bg-base);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .drop-shadow {
    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.1))) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.06)));
    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow( 0 1px 1px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .sepia {
    --tw-sepia: sepia(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur {
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-grayscale {
    --tw-backdrop-grayscale: grayscale(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-invert {
    --tw-backdrop-invert: invert(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-sepia {
    --tw-backdrop-sepia: sepia(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[transform\\,color\\,background-color\\,border-color\\,box-shadow\\] {
    transition-property: transform,color,background-color,border-color,box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .animate-in {
    animation-name: enter;
    animation-duration: 150ms;
    --tw-enter-opacity: initial;
    --tw-enter-scale: initial;
    --tw-enter-rotate: initial;
    --tw-enter-translate-x: initial;
    --tw-enter-translate-y: initial;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  :where(.divide-x-reverse > :not(:last-child)) {
    --tw-divide-x-reverse: 1;
  }
  .duration-150 {
    animation-duration: 150ms;
  }
  .duration-200 {
    animation-duration: 200ms;
  }
  .fade-in-0 {
    --tw-enter-opacity: 0;
  }
  .paused {
    animation-play-state: paused;
  }
  .ring-inset {
    --tw-ring-inset: inset;
  }
  .zoom-in {
    --tw-enter-scale: 0;
  }
  .zoom-in-95 {
    --tw-enter-scale: .95;
  }
  .zoom-out {
    --tw-exit-scale: 0;
  }
  @media (hover: hover) {
    .group-hover\\:shadow-float:is(:where(.group):hover *) {
      --tw-shadow: var(--dsw-shadow-lv3);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled ~ *) {
    cursor: not-allowed;
  }
  .peer-disabled\\:opacity-70:is(:where(.peer):disabled ~ *) {
    opacity: 70%;
  }
  .file\\:border-0::file-selector-button {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .file\\:bg-transparent::file-selector-button {
    background-color: transparent;
  }
  .file\\:text-sm::file-selector-button {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .file\\:font-medium::file-selector-button {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .file\\:text-foreground::file-selector-button {
    color: var(--dsw-alias-label-primary);
  }
  .placeholder\\:text-muted-foreground::placeholder {
    color: var(--dsw-alias-label-secondary);
  }
  @media (hover: hover) {
    .hover\\:bg-accent:hover {
      background-color: var(--dsw-alias-bg-layer-2);
    }
    .hover\\:bg-destructive\\/90:hover {
      background-color: var(--dsw-alias-state-error-primary);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-destructive\\/90:hover {
        background-color: color-mix(in oklab, var(--dsw-alias-state-error-primary) 90%, transparent);
      }
    }
    .hover\\:bg-primary\\/90:hover {
      background-color: var(--dsw-alias-brand-primary);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-primary\\/90:hover {
        background-color: color-mix(in oklab, var(--dsw-alias-brand-primary) 90%, transparent);
      }
    }
    .hover\\:bg-secondary\\/80:hover {
      background-color: var(--dsw-alias-bg-layer-2);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-secondary\\/80:hover {
        background-color: color-mix(in oklab, var(--dsw-alias-bg-layer-2) 80%, transparent);
      }
    }
    .hover\\:text-accent-foreground:hover {
      color: var(--dsw-alias-label-primary);
    }
    .hover\\:text-amber-500:hover {
      color: var(--color-amber-500);
    }
    .hover\\:text-foreground:hover {
      color: var(--dsw-alias-label-primary);
    }
    .hover\\:underline:hover {
      text-decoration-line: underline;
    }
    .hover\\:opacity-100:hover {
      opacity: 100%;
    }
  }
  .focus\\:bg-accent:focus {
    background-color: var(--dsw-alias-bg-layer-2);
  }
  .focus\\:text-accent-foreground:focus {
    color: var(--dsw-alias-label-primary);
  }
  .focus\\:ring-1:focus {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus\\:ring-2:focus {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus\\:ring-ring:focus {
    --tw-ring-color: var(--dsw-alias-brand-primary);
  }
  .focus\\:ring-offset-2:focus {
    --tw-ring-offset-width: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  }
  .focus\\:outline-none:focus {
    --tw-outline-style: none;
    outline-style: none;
  }
  .focus-visible\\:ring-1:focus-visible {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus-visible\\:ring-ring:focus-visible {
    --tw-ring-color: var(--dsw-alias-brand-primary);
  }
  .focus-visible\\:outline-none:focus-visible {
    --tw-outline-style: none;
    outline-style: none;
  }
  .active\\:scale-\\[0\\.97\\]:active {
    scale: 0.97;
  }
  .active\\:cursor-grabbing:active {
    cursor: grabbing;
  }
  .disabled\\:pointer-events-none:disabled {
    pointer-events: none;
  }
  .disabled\\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\\:opacity-50:disabled {
    opacity: 50%;
  }
  .data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
    pointer-events: none;
  }
  .data-\\[disabled\\]\\:opacity-50[data-disabled] {
    opacity: 50%;
  }
  .data-\\[side\\=bottom\\]\\:translate-y-1[data-side="bottom"] {
    --tw-translate-y: var(--spacing);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side="bottom"] {
    --tw-enter-translate-y: -0.5rem;
  }
  .data-\\[side\\=left\\]\\:-translate-x-1[data-side="left"] {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side="left"] {
    --tw-enter-translate-x: 0.5rem;
  }
  .data-\\[side\\=right\\]\\:translate-x-1[data-side="right"] {
    --tw-translate-x: var(--spacing);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side="right"] {
    --tw-enter-translate-x: -0.5rem;
  }
  .data-\\[side\\=top\\]\\:-translate-y-1[data-side="top"] {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side="top"] {
    --tw-enter-translate-y: 0.5rem;
  }
  .data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {
    animation-name: exit;
    animation-duration: 150ms;
    --tw-exit-opacity: initial;
    --tw-exit-scale: initial;
    --tw-exit-rotate: initial;
    --tw-exit-translate-x: initial;
    --tw-exit-translate-y: initial;
  }
  .data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {
    --tw-exit-opacity: 0;
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {
    --tw-exit-translate-x: -50%;
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {
    --tw-exit-translate-y: -48%;
  }
  .data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {
    --tw-exit-scale: .95;
  }
  .data-\\[state\\=open\\]\\:bg-accent[data-state="open"] {
    background-color: var(--dsw-alias-bg-layer-2);
  }
  .data-\\[state\\=open\\]\\:text-muted-foreground[data-state="open"] {
    color: var(--dsw-alias-label-secondary);
  }
  .data-\\[state\\=open\\]\\:animate-in[data-state="open"] {
    animation-name: enter;
    animation-duration: 150ms;
    --tw-enter-opacity: initial;
    --tw-enter-scale: initial;
    --tw-enter-rotate: initial;
    --tw-enter-translate-x: initial;
    --tw-enter-translate-y: initial;
  }
  .data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {
    --tw-enter-opacity: 0;
  }
  .data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {
    --tw-enter-translate-x: -50%;
  }
  .data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {
    --tw-enter-translate-y: -48%;
  }
  .data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {
    --tw-enter-scale: .95;
  }
  @media (width >= 40rem) {
    .sm\\:max-w-md {
      max-width: var(--container-md);
    }
    .sm\\:max-w-xl {
      max-width: var(--container-xl);
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:items-center {
      align-items: center;
    }
    .sm\\:justify-end {
      justify-content: flex-end;
    }
    :where(.sm\\:space-x-2 > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
    }
    .sm\\:rounded-lg {
      border-radius: 0.75rem;
    }
    .sm\\:text-left {
      text-align: left;
    }
  }
  .\\[\\&_svg\\]\\:pointer-events-none svg {
    pointer-events: none;
  }
  .\\[\\&_svg\\]\\:size-4 svg {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .\\[\\&_svg\\]\\:shrink-0 svg {
    flex-shrink: 0;
  }
  .\\[\\&\\>span\\]\\:line-clamp-1 > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
@layer base {
  * {
    border-color: var(--dsw-alias-border-l1);
  }
}
.kan-scroll::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.kan-scroll::-webkit-scrollbar-thumb {
  background: var(--dsw-alias-scrollbar-bg-l1, rgba(128, 128, 128, 0.3));
  border-radius: 999px;
}
.kan-scroll::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l1, rgba(128, 128, 128, 0.5));
}
.kan-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.kan-dragging {
  opacity: 0.4;
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-x {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pinch-zoom {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-pan-x: initial;
      --tw-pan-y: initial;
      --tw-pinch-zoom: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
    }
  }
}
`;var ri=require("react");var xe=require("react");var y=q(require("react")),va=require("react-dom");var Ce=require("react");function xi(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ce.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var No=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Or(e){return"nodeType"in e}function ze(e){var t,a;return e?fa(e)?e:Or(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Fr(e){let{Document:t}=ze(e);return e instanceof t}function eo(e){return fa(e)?!1:e instanceof ze(e).HTMLElement}function ts(e){return e instanceof ze(e).SVGElement}function pa(e){return e?fa(e)?e.document:Or(e)?Fr(e)?e:eo(e)||ts(e)?e.ownerDocument:document:document:document}var at=No?Ce.useLayoutEffect:Ce.useEffect;function _o(e){let t=(0,Ce.useRef)(e);return at(()=>{t.current=e}),(0,Ce.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function vi(){let e=(0,Ce.useRef)(null),t=(0,Ce.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Ce.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function to(e,t){t===void 0&&(t=[e]);let a=(0,Ce.useRef)(e);return at(()=>{a.current!==e&&(a.current=e)},t),a}function ao(e,t){let a=(0,Ce.useRef)();return(0,Ce.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Uo(e){let t=_o(e),a=(0,Ce.useRef)(null),o=(0,Ce.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Ho(e){let t=(0,Ce.useRef)();return(0,Ce.useEffect)(()=>{t.current=e},[e]),t.current}var es={};function ma(e,t){return(0,Ce.useMemo)(()=>{if(t)return t;let a=es[e]==null?0:es[e]+1;return es[e]=a,e+"-"+a},[e,t])}function wi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,s)=>{let l=Object.entries(s);for(let[i,u]of l){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var ga=wi(1),ha=wi(-1);function Gp(e){return"clientX"in e&&"clientY"in e}function oo(e){if(!e)return!1;let{KeyboardEvent:t}=ze(e.target);return t&&e instanceof t}function Wp(e){if(!e)return!1;let{TouchEvent:t}=ze(e.target);return t&&e instanceof t}function qo(e){if(Wp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Gp(e)?{x:e.clientX,y:e.clientY}:null}var tt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[tt.Translate.toString(e),tt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),hi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function bi(e){return e.matches(hi)?e:e.querySelector(hi)}var xa=q(require("react")),jp={display:"none"};function Ci(e){let{id:t,value:a}=e;return xa.default.createElement("div",{id:t,style:jp},a)}function Li(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return xa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function yi(){let[e,t]=(0,xa.useState)("");return{announce:(0,xa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Bi=(0,y.createContext)(null);function Kp(e){let t=(0,y.useContext)(Bi);(0,y.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Xp(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,y.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(s=>{var l;return(l=s[r])==null?void 0:l.call(s,n)})},[e]),t]}var $p={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Yp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Zp(e){let{announcements:t=Yp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=$p}=e,{announce:n,announcement:s}=yi(),l=ma("DndLiveRegion"),[i,u]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{u(!0)},[]),Kp((0,y.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;t.onDragMove&&n(t.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;n(t.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;n(t.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;n(t.onDragCancel({active:f,over:g}))}}),[n,t])),!i)return null;let c=y.default.createElement(y.default.Fragment,null,y.default.createElement(Ci,{id:o,value:r.draggable}),y.default.createElement(Li,{id:l,announcement:s}));return a?(0,va.createPortal)(c,a):c}var De;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(De||(De={}));function Nr(){}function ro(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Ur(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,y.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var gt=Object.freeze({x:0,y:0});function cs(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Jp(e,t){let a=qo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function fs(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Qp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function ns(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function jo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Ii(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Ni=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ii(t,t.left,t.top),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=cs(Ii(i),r);n.push({id:l,data:{droppableContainer:s,value:u}})}}return n.sort(fs)},Hr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=ns(t),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=ns(i),c=r.reduce((f,g,h)=>f+cs(u[h],g),0),d=Number((c/4).toFixed(4));n.push({id:l,data:{droppableContainer:s,value:d}})}}return n.sort(fs)};function em(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),s=r-o,l=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=s*l,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var ps=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:s}=n,l=a.get(s);if(l){let i=em(l,t);i>0&&r.push({id:s,data:{droppableContainer:n,value:i}})}}return r.sort(Qp)};function tm(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var _i=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:s}=n,l=a.get(s);if(l&&tm(o,l)){let u=ns(l).reduce((d,f)=>d+cs(o,f),0),c=Number((u/4).toFixed(4));r.push({id:s,data:{droppableContainer:n,value:c}})}}return r.sort(fs)};function am(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ui(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:gt}function om(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((s,l)=>({...s,top:s.top+e*l.y,bottom:s.bottom+e*l.y,left:s.left+e*l.x,right:s.right+e*l.x}),{...a})}}var rm=om(1);function Hi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function nm(e,t,a){let o=Hi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:s,y:l}=o,i=e.left-s-(1-r)*parseFloat(a),u=e.top-l-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var sm={ignoreTransform:!1};function Ca(e,t){t===void 0&&(t=sm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=ze(e).getComputedStyle(e);u&&(a=nm(a,u,c))}let{top:o,left:r,width:n,height:s,bottom:l,right:i}=a;return{top:o,left:r,width:n,height:s,bottom:l,right:i}}function Si(e){return Ca(e,{ignoreTransform:!0})}function lm(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function im(e,t){return t===void 0&&(t=ze(e).getComputedStyle(e)),t.position==="fixed"}function um(e,t){t===void 0&&(t=ze(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Ko(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Fr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!eo(r)||ts(r)||a.includes(r))return a;let n=ze(e).getComputedStyle(r);return r!==e&&um(r,n)&&a.push(r),im(r,n)?a:o(r.parentNode)}return e?o(e):a}function qi(e){let[t]=Ko(e,1);return t??null}function as(e){return!No||!e?null:fa(e)?e:Or(e)?Fr(e)||e===pa(e).scrollingElement?window:eo(e)?e:null:null}function zi(e){return fa(e)?e.scrollX:e.scrollLeft}function Vi(e){return fa(e)?e.scrollY:e.scrollTop}function ss(e){return{x:zi(e),y:Vi(e)}}var Me;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Me||(Me={}));function Gi(e){return!No||!e?!1:e===document.scrollingElement}function Wi(e){let t={x:0,y:0},a=Gi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,s=e.scrollTop>=o.y,l=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:s,isRight:l,maxScroll:o,minScroll:t}}var dm={x:.2,y:.2};function cm(e,t,a,o,r){let{top:n,left:s,right:l,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=dm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Wi(e),g={x:0,y:0},h={x:0,y:0},p={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+p.height?(g.y=Me.Backward,h.y=o*Math.abs((t.top+p.height-n)/p.height)):!c&&i>=t.bottom-p.height&&(g.y=Me.Forward,h.y=o*Math.abs((t.bottom-p.height-i)/p.height)),!f&&l>=t.right-p.width?(g.x=Me.Forward,h.x=o*Math.abs((t.right-p.width-l)/p.width)):!d&&s<=t.left+p.width&&(g.x=Me.Backward,h.x=o*Math.abs((t.left+p.width-s)/p.width)),{direction:g,speed:h}}function fm(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:s}=window;return{top:0,left:0,right:n,bottom:s,width:n,height:s}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function ji(e){return e.reduce((t,a)=>ga(t,ss(a)),gt)}function pm(e){return e.reduce((t,a)=>t+zi(a),0)}function mm(e){return e.reduce((t,a)=>t+Vi(a),0)}function Ki(e,t){if(t===void 0&&(t=Ca),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);qi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var gm=[["x",["left","right"],pm],["y",["top","bottom"],mm]],Vo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Ko(a),r=ji(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,s,l]of gm)for(let i of s)Object.defineProperty(this,i,{get:()=>{let u=l(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},wa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function hm(e){let{EventTarget:t}=ze(e);return e instanceof t?e:pa(e)}function os(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var it;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(it||(it={}));function Ri(e){e.preventDefault()}function xm(e){e.stopPropagation()}var ne;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ne||(ne={}));var Xi={start:[ne.Space,ne.Enter],cancel:[ne.Esc],end:[ne.Space,ne.Enter,ne.Tab]},vm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ne.Right:return{...a,x:a.x+25};case ne.Left:return{...a,x:a.x-25};case ne.Down:return{...a,y:a.y+25};case ne.Up:return{...a,y:a.y-25}}},ea=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new wa(pa(a)),this.windowListeners=new wa(ze(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(it.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Ki(o),a(gt)}handleKeyDown(t){if(oo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Xi,coordinateGetter:s=vm,scrollBehavior:l="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:gt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=s(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=ha(d,c),g={x:0,y:0},{scrollableAncestors:h}=o.current;for(let p of h){let m=t.code,{isTop:x,isRight:w,isLeft:v,isBottom:b,maxScroll:C,minScroll:L}=Wi(p),I=fm(p),S={x:Math.min(m===ne.Right?I.right-I.width/2:I.right,Math.max(m===ne.Right?I.left:I.left+I.width/2,d.x)),y:Math.min(m===ne.Down?I.bottom-I.height/2:I.bottom,Math.max(m===ne.Down?I.top:I.top+I.height/2,d.y))},P=m===ne.Right&&!w||m===ne.Left&&!v,E=m===ne.Down&&!b||m===ne.Up&&!x;if(P&&S.x!==d.x){let M=p.scrollLeft+f.x,D=m===ne.Right&&M<=C.x||m===ne.Left&&M>=L.x;if(D&&!f.y){p.scrollTo({left:M,behavior:l});return}D?g.x=p.scrollLeft-M:g.x=m===ne.Right?p.scrollLeft-C.x:p.scrollLeft-L.x,g.x&&p.scrollBy({left:-g.x,behavior:l});break}else if(E&&S.y!==d.y){let M=p.scrollTop+f.y,D=m===ne.Down&&M<=C.y||m===ne.Up&&M>=L.y;if(D&&!f.x){p.scrollTo({top:M,behavior:l});return}D?g.y=p.scrollTop-M:g.y=m===ne.Down?p.scrollTop-C.y:p.scrollTop-L.y,g.y&&p.scrollBy({top:-g.y,behavior:l});break}}this.handleMove(t,ga(ha(d,this.referenceCoordinates),g))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ea.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Xi,onActivation:r}=t,{active:n}=a,{code:s}=e.nativeEvent;if(o.start.includes(s)){let l=n.activatorNode.current;return l&&e.target!==l?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Pi(e){return!!(e&&"distance"in e)}function Di(e){return!!(e&&"delay"in e)}var Go=class{constructor(t,a,o){var r;o===void 0&&(o=hm(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:s}=n;this.props=t,this.events=a,this.document=pa(s),this.documentListeners=new wa(this.document),this.listeners=new wa(o),this.windowListeners=new wa(ze(s)),this.initialCoordinates=(r=qo(n))!=null?r:gt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.DragStart,Ri),this.windowListeners.add(it.VisibilityChange,this.handleCancel),this.windowListeners.add(it.ContextMenu,Ri),this.documentListeners.add(it.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Di(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Pi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(it.Click,xm,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(it.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:s,options:{activationConstraint:l}}=n;if(!r)return;let i=(a=qo(t))!=null?a:gt,u=ha(r,i);if(!o&&l){if(Pi(l)){if(l.tolerance!=null&&os(u,l.tolerance))return this.handleCancel();if(os(u,l.distance))return this.handleStart()}if(Di(l)&&os(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}t.cancelable&&t.preventDefault(),s(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ne.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},wm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},ta=class extends Go{constructor(t){let{event:a}=t,o=pa(a.target);super(t,wm,o)}};ta.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var bm={move:{name:"mousemove"},end:{name:"mouseup"}},ls;(function(e){e[e.RightClick=2]="RightClick"})(ls||(ls={}));var is=class extends Go{constructor(t){super(t,bm,pa(t.event.target))}};is.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===ls.RightClick?!1:(o?.({event:a}),!0)}}];var rs={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},us=class extends Go{constructor(t){super(t,rs)}static setup(){return window.addEventListener(rs.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(rs.move.name,t)};function t(){}}};us.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var zo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(zo||(zo={}));var _r;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(_r||(_r={}));function Cm(e){let{acceleration:t,activator:a=zo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:s=5,order:l=_r.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,g=ym({delta:d,disabled:!n}),[h,p]=vi(),m=(0,y.useRef)({x:0,y:0}),x=(0,y.useRef)({x:0,y:0}),w=(0,y.useMemo)(()=>{switch(a){case zo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case zo.DraggableRect:return r}},[a,r,i]),v=(0,y.useRef)(null),b=(0,y.useCallback)(()=>{let L=v.current;if(!L)return;let I=m.current.x*x.current.x,S=m.current.y*x.current.y;L.scrollBy(I,S)},[]),C=(0,y.useMemo)(()=>l===_r.TreeOrder?[...u].reverse():u,[l,u]);(0,y.useEffect)(()=>{if(!n||!u.length||!w){p();return}for(let L of C){if(o?.(L)===!1)continue;let I=u.indexOf(L),S=c[I];if(!S)continue;let{direction:P,speed:E}=cm(L,S,w,t,f);for(let M of["x","y"])g[M][P[M]]||(E[M]=0,P[M]=0);if(E.x>0||E.y>0){p(),v.current=L,h(b,s),m.current=E,x.current=P;return}}m.current={x:0,y:0},x.current={x:0,y:0},p()},[t,b,o,p,n,s,JSON.stringify(w),JSON.stringify(g),h,u,C,c,JSON.stringify(f)])}var Lm={x:{[Me.Backward]:!1,[Me.Forward]:!1},y:{[Me.Backward]:!1,[Me.Forward]:!1}};function ym(e){let{delta:t,disabled:a}=e,o=Ho(t);return ao(r=>{if(a||!o||!r)return Lm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Me.Backward]:r.x[Me.Backward]||n.x===-1,[Me.Forward]:r.x[Me.Forward]||n.x===1},y:{[Me.Backward]:r.y[Me.Backward]||n.y===-1,[Me.Forward]:r.y[Me.Forward]||n.y===1}}},[a,t,o])}function Im(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return ao(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Sm(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(s=>({eventName:s.eventName,handler:t(s.handler,o)}));return[...a,...n]},[]),[e,t])}var Wo;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Wo||(Wo={}));var ds;(function(e){e.Optimized="optimized"})(ds||(ds={}));var ki=new Map;function Rm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,s]=(0,y.useState)(null),{frequency:l,measure:i,strategy:u}=r,c=(0,y.useRef)(e),d=m(),f=to(d),g=(0,y.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&s(w=>w===null?x:w.concat(x.filter(v=>!w.includes(v))))},[f]),h=(0,y.useRef)(null),p=ao(x=>{if(d&&!a)return ki;if(!x||x===ki||c.current!==e||n!=null){let w=new Map;for(let v of e){if(!v)continue;if(n&&n.length>0&&!n.includes(v.id)&&v.rect.current){w.set(v.id,v.rect.current);continue}let b=v.node.current,C=b?new Vo(i(b),b):null;v.rect.current=C,C&&w.set(v.id,C)}return w}return x},[e,n,a,d,i]);return(0,y.useEffect)(()=>{c.current=e},[e]),(0,y.useEffect)(()=>{d||g()},[a,d]),(0,y.useEffect)(()=>{n&&n.length>0&&s(null)},[JSON.stringify(n)]),(0,y.useEffect)(()=>{d||typeof l!="number"||h.current!==null||(h.current=setTimeout(()=>{g(),h.current=null},l))},[l,d,g,...o]),{droppableRects:p,measureDroppableContainers:g,measuringScheduled:n!=null};function m(){switch(u){case Wo.Always:return!1;case Wo.BeforeDragging:return a;default:return!a}}}function ms(e,t){return ao(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Pm(e,t){return ms(e,t)}function Dm(e){let{callback:t,disabled:a}=e,o=_o(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function qr(e){let{callback:t,disabled:a}=e,o=_o(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function km(e){return new Vo(Ca(e),e)}function Mi(e,t,a){t===void 0&&(t=km);let[o,r]=(0,y.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let s=Dm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),l=qr({callback:n});return at(()=>{n(),e?(l?.observe(e),s?.observe(document.body,{childList:!0,subtree:!0})):(l?.disconnect(),s?.disconnect())},[e]),o}function Mm(e){let t=ms(e);return Ui(e,t)}var Ai=[];function Am(e){let t=(0,y.useRef)(e),a=ao(o=>e?o&&o!==Ai&&e&&t.current&&e.parentNode===t.current.parentNode?o:Ko(e):Ai,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),a}function Tm(e){let[t,a]=(0,y.useState)(null),o=(0,y.useRef)(e),r=(0,y.useCallback)(n=>{let s=as(n.target);s&&a(l=>l?(l.set(s,ss(s)),new Map(l)):null)},[]);return(0,y.useEffect)(()=>{let n=o.current;if(e!==n){s(n);let l=e.map(i=>{let u=as(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,ss(u)]):null}).filter(i=>i!=null);a(l.length?new Map(l):null),o.current=e}return()=>{s(e),s(n)};function s(l){l.forEach(i=>{let u=as(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,s)=>ga(n,s),gt):ji(e):gt,[e,t])}function Ti(e,t){t===void 0&&(t=[]);let a=(0,y.useRef)(null);return(0,y.useEffect)(()=>{a.current=null},t),(0,y.useEffect)(()=>{let o=e!==gt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?ha(e,a.current):gt}function Em(e){(0,y.useEffect)(()=>{if(!No)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Om(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=s=>{n(s,t)},a},{}),[e,t])}function $i(e){return(0,y.useMemo)(()=>e?lm(e):null,[e])}var Ei=[];function Fm(e,t){t===void 0&&(t=Ca);let[a]=e,o=$i(a?ze(a):null),[r,n]=(0,y.useState)(Ei);function s(){n(()=>e.length?e.map(i=>Gi(i)?o:new Vo(t(i),i)):Ei)}let l=qr({callback:s});return at(()=>{l?.disconnect(),s(),e.forEach(i=>l?.observe(i))},[e]),r}function Yi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return eo(t)?t:e}function Bm(e){let{measure:t}=e,[a,o]=(0,y.useState)(null),r=(0,y.useCallback)(u=>{for(let{target:c}of u)if(eo(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=qr({callback:r}),s=(0,y.useCallback)(u=>{let c=Yi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[l,i]=Uo(s);return(0,y.useMemo)(()=>({nodeRef:l,rect:a,setRef:i}),[a,l,i])}var Nm=[{sensor:ta,options:{}},{sensor:ea,options:{}}],_m={current:{}},Br={draggable:{measure:Si},droppable:{measure:Si,strategy:Wo.WhileDragging,frequency:ds.Optimized},dragOverlay:{measure:Ca}},ba=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Um={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ba,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Nr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Br,measureDroppableContainers:Nr,windowRect:null,measuringScheduled:!1},Zi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Nr,draggableNodes:new Map,over:null,measureDroppableContainers:Nr},Xo=(0,y.createContext)(Zi),Ji=(0,y.createContext)(Um);function Hm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ba}}}function qm(e,t){switch(t.type){case De.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case De.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case De.DragEnd:case De.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case De.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ba(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case De.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let s=new ba(e.droppable.containers);return s.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:s}}}case De.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ba(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function zm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,y.useContext)(Xo),n=Ho(o),s=Ho(a?.id);return(0,y.useEffect)(()=>{if(!t&&!o&&n&&s!=null){if(!oo(n)||document.activeElement===n.target)return;let l=r.get(s);if(!l)return;let{activatorNode:i,node:u}=l;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=bi(c);if(d){d.focus();break}}})}},[o,t,r,s,n]),null}function Qi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Vm(e){return(0,y.useMemo)(()=>({draggable:{...Br.draggable,...e?.draggable},droppable:{...Br.droppable,...e?.droppable},dragOverlay:{...Br.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Gm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,y.useRef)(!1),{x:s,y:l}=typeof r=="boolean"?{x:r,y:r}:r;at(()=>{if(!s&&!l||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ui(c,o);if(s||(d.x=0),l||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=qi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,s,l,o,a])}var zr=(0,y.createContext)({...gt,scaleX:1,scaleY:1}),Qt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Qt||(Qt={}));var Vr=(0,y.memo)(function(t){var a,o,r,n;let{id:s,accessibility:l,autoScroll:i=!0,children:u,sensors:c=Nm,collisionDetection:d=ps,measuring:f,modifiers:g,...h}=t,p=(0,y.useReducer)(qm,void 0,Hm),[m,x]=p,[w,v]=Xp(),[b,C]=(0,y.useState)(Qt.Uninitialized),L=b===Qt.Initialized,{draggable:{active:I,nodes:S,translate:P},droppable:{containers:E}}=m,M=I!=null?S.get(I):null,D=(0,y.useRef)({initial:null,translated:null}),F=(0,y.useMemo)(()=>{var He;return I!=null?{id:I,data:(He=M?.data)!=null?He:_m,rect:D}:null},[I,M]),U=(0,y.useRef)(null),[Z,W]=(0,y.useState)(null),[O,B]=(0,y.useState)(null),H=to(h,Object.values(h)),T=ma("DndDescribedBy",s),le=(0,y.useMemo)(()=>E.getEnabled(),[E]),Q=Vm(f),{droppableRects:ie,measureDroppableContainers:ve,measuringScheduled:R}=Rm(le,{dragging:L,dependencies:[P.x,P.y],config:Q.droppable}),N=Im(S,I),G=(0,y.useMemo)(()=>O?qo(O):null,[O]),k=Fp(),X=Pm(N,Q.draggable.measure);Gm({activeNode:I!=null?S.get(I):null,config:k.layoutShiftCompensation,initialRect:X,measure:Q.draggable.measure});let _=Mi(N,Q.draggable.measure,X),$=Mi(N?N.parentElement:null),Y=(0,y.useRef)({activatorEvent:null,active:null,activeNode:N,collisionRect:null,collisions:null,droppableRects:ie,draggableNodes:S,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),oe=E.getNodeFor((a=Y.current.over)==null?void 0:a.id),we=Bm({measure:Q.dragOverlay.measure}),Pe=(o=we.nodeRef.current)!=null?o:N,St=L?(r=we.rect)!=null?r:_:null,$a=!!(we.nodeRef.current&&we.rect),Ya=Mm($a?null:_),Yn=$i(Pe?ze(Pe):null),Xt=Am(L?oe??N:null),Ar=Fm(Xt),Tr=Qi(g,{transform:{x:P.x-Ya.x,y:P.y-Ya.y,scaleX:1,scaleY:1},activatorEvent:O,active:F,activeNodeRect:_,containerNodeRect:$,draggingNodeRect:St,over:Y.current.over,overlayNodeRect:we.rect,scrollableAncestors:Xt,scrollableAncestorRects:Ar,windowRect:Yn}),ni=G?ga(G,P):null,si=Tm(Xt),Dp=Ti(si),kp=Ti(si,[_]),Za=ga(Tr,Dp),Ja=St?rm(St,Tr):null,Eo=F&&Ja?d({active:F,collisionRect:Ja,droppableRects:ie,droppableContainers:le,pointerCoordinates:ni}):null,li=jo(Eo,"id"),[$t,ii]=(0,y.useState)(null),Mp=$a?Tr:ga(Tr,kp),Ap=am(Mp,(n=$t?.rect)!=null?n:null,_),Zn=(0,y.useRef)(null),ui=(0,y.useCallback)((He,Je)=>{let{sensor:Qe,options:Yt}=Je;if(U.current==null)return;let lt=S.get(U.current);if(!lt)return;let et=He.nativeEvent,Rt=new Qe({active:U.current,activeNode:lt,event:et,options:Yt,context:Y,onAbort(Be){if(!S.get(Be))return;let{onDragAbort:Pt}=H.current,Bt={id:Be};Pt?.(Bt),w({type:"onDragAbort",event:Bt})},onPending(Be,Zt,Pt,Bt){if(!S.get(Be))return;let{onDragPending:Fo}=H.current,Jt={id:Be,constraint:Zt,initialCoordinates:Pt,offset:Bt};Fo?.(Jt),w({type:"onDragPending",event:Jt})},onStart(Be){let Zt=U.current;if(Zt==null)return;let Pt=S.get(Zt);if(!Pt)return;let{onDragStart:Bt}=H.current,Oo={activatorEvent:et,active:{id:Zt,data:Pt.data,rect:D}};(0,va.unstable_batchedUpdates)(()=>{Bt?.(Oo),C(Qt.Initializing),x({type:De.DragStart,initialCoordinates:Be,active:Zt}),w({type:"onDragStart",event:Oo}),W(Zn.current),B(et)})},onMove(Be){x({type:De.DragMove,coordinates:Be})},onEnd:Qa(De.DragEnd),onCancel:Qa(De.DragCancel)});Zn.current=Rt;function Qa(Be){return async function(){let{active:Pt,collisions:Bt,over:Oo,scrollAdjustedTranslate:Fo}=Y.current,Jt=null;if(Pt&&Fo){let{cancelDrop:Bo}=H.current;Jt={activatorEvent:et,active:Pt,collisions:Bt,delta:Fo,over:Oo},Be===De.DragEnd&&typeof Bo=="function"&&await Promise.resolve(Bo(Jt))&&(Be=De.DragCancel)}U.current=null,(0,va.unstable_batchedUpdates)(()=>{x({type:Be}),C(Qt.Uninitialized),ii(null),W(null),B(null),Zn.current=null;let Bo=Be===De.DragEnd?"onDragEnd":"onDragCancel";if(Jt){let Jn=H.current[Bo];Jn?.(Jt),w({type:Bo,event:Jt})}})}}},[S]),Tp=(0,y.useCallback)((He,Je)=>(Qe,Yt)=>{let lt=Qe.nativeEvent,et=S.get(Yt);if(U.current!==null||!et||lt.dndKit||lt.defaultPrevented)return;let Rt={active:et};He(Qe,Je.options,Rt)===!0&&(lt.dndKit={capturedBy:Je.sensor},U.current=Yt,ui(Qe,Je))},[S,ui]),di=Sm(c,Tp);Em(c),at(()=>{_&&b===Qt.Initializing&&C(Qt.Initialized)},[_,b]),(0,y.useEffect)(()=>{let{onDragMove:He}=H.current,{active:Je,activatorEvent:Qe,collisions:Yt,over:lt}=Y.current;if(!Je||!Qe)return;let et={active:Je,activatorEvent:Qe,collisions:Yt,delta:{x:Za.x,y:Za.y},over:lt};(0,va.unstable_batchedUpdates)(()=>{He?.(et),w({type:"onDragMove",event:et})})},[Za.x,Za.y]),(0,y.useEffect)(()=>{let{active:He,activatorEvent:Je,collisions:Qe,droppableContainers:Yt,scrollAdjustedTranslate:lt}=Y.current;if(!He||U.current==null||!Je||!lt)return;let{onDragOver:et}=H.current,Rt=Yt.get(li),Qa=Rt&&Rt.rect.current?{id:Rt.id,rect:Rt.rect.current,data:Rt.data,disabled:Rt.disabled}:null,Be={active:He,activatorEvent:Je,collisions:Qe,delta:{x:lt.x,y:lt.y},over:Qa};(0,va.unstable_batchedUpdates)(()=>{ii(Qa),et?.(Be),w({type:"onDragOver",event:Be})})},[li]),at(()=>{Y.current={activatorEvent:O,active:F,activeNode:N,collisionRect:Ja,collisions:Eo,droppableRects:ie,draggableNodes:S,draggingNode:Pe,draggingNodeRect:St,droppableContainers:E,over:$t,scrollableAncestors:Xt,scrollAdjustedTranslate:Za},D.current={initial:St,translated:Ja}},[F,N,Eo,Ja,S,Pe,St,ie,E,$t,Xt,Za]),Cm({...k,delta:P,draggingRect:Ja,pointerCoordinates:ni,scrollableAncestors:Xt,scrollableAncestorRects:Ar});let Ep=(0,y.useMemo)(()=>({active:F,activeNode:N,activeNodeRect:_,activatorEvent:O,collisions:Eo,containerNodeRect:$,dragOverlay:we,draggableNodes:S,droppableContainers:E,droppableRects:ie,over:$t,measureDroppableContainers:ve,scrollableAncestors:Xt,scrollableAncestorRects:Ar,measuringConfiguration:Q,measuringScheduled:R,windowRect:Yn}),[F,N,_,O,Eo,$,we,S,E,ie,$t,ve,Xt,Ar,Q,R,Yn]),Op=(0,y.useMemo)(()=>({activatorEvent:O,activators:di,active:F,activeNodeRect:_,ariaDescribedById:{draggable:T},dispatch:x,draggableNodes:S,over:$t,measureDroppableContainers:ve}),[O,di,F,_,x,T,S,$t,ve]);return y.default.createElement(Bi.Provider,{value:v},y.default.createElement(Xo.Provider,{value:Op},y.default.createElement(Ji.Provider,{value:Ep},y.default.createElement(zr.Provider,{value:Ap},u)),y.default.createElement(zm,{disabled:l?.restoreFocus===!1})),y.default.createElement(Zp,{...l,hiddenTextDescribedById:T}));function Fp(){let He=Z?.autoScrollEnabled===!1,Je=typeof i=="object"?i.enabled===!1:i===!1,Qe=L&&!He&&!Je;return typeof i=="object"?{...i,enabled:Qe}:{enabled:Qe}}}),Wm=(0,y.createContext)(null),Oi="button",jm="Draggable";function eu(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ma(jm),{activators:s,activatorEvent:l,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,y.useContext)(Xo),{role:g=Oi,roleDescription:h="draggable",tabIndex:p=0}=r??{},m=i?.id===t,x=(0,y.useContext)(m?zr:Wm),[w,v]=Uo(),[b,C]=Uo(),L=Om(s,t),I=to(a);at(()=>(d.set(t,{id:t,key:n,node:w,activatorNode:b,data:I}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let S=(0,y.useMemo)(()=>({role:g,tabIndex:p,"aria-disabled":o,"aria-pressed":m&&g===Oi?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,g,p,m,h,c.draggable]);return{active:i,activatorEvent:l,activeNodeRect:u,attributes:S,isDragging:m,listeners:o?void 0:L,node:w,over:f,setNodeRef:v,setActivatorNodeRef:C,transform:x}}function gs(){return(0,y.useContext)(Ji)}var Km="Droppable",Xm={timeout:25};function Gr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ma(Km),{active:s,dispatch:l,over:i,measureDroppableContainers:u}=(0,y.useContext)(Xo),c=(0,y.useRef)({disabled:a}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),g=(0,y.useRef)(null),{disabled:h,updateMeasurementsFor:p,timeout:m}={...Xm,...r},x=to(p??o),w=(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),g.current=null},m)},[m]),v=qr({callback:w,disabled:h||!s}),b=(0,y.useCallback)((S,P)=>{v&&(P&&(v.unobserve(P),d.current=!1),S&&v.observe(S))},[v]),[C,L]=Uo(b),I=to(t);return(0,y.useEffect)(()=>{!v||!C.current||(v.disconnect(),d.current=!1,v.observe(C.current))},[C,v]),(0,y.useEffect)(()=>(l({type:De.RegisterDroppable,element:{id:o,key:n,disabled:a,node:C,rect:f,data:I}}),()=>l({type:De.UnregisterDroppable,key:n,id:o})),[o]),(0,y.useEffect)(()=>{a!==c.current.disabled&&(l({type:De.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,l]),{active:s,rect:f,isOver:i?.id===o,node:C,over:i,setNodeRef:L}}function $m(e){let{animation:t,children:a}=e,[o,r]=(0,y.useState)(null),[n,s]=(0,y.useState)(null),l=Ho(a);return!a&&!o&&l&&r(l),at(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),y.default.createElement(y.default.Fragment,null,a,o?(0,y.cloneElement)(o,{ref:s}):null)}var Ym={x:0,y:0,scaleX:1,scaleY:1};function Zm(e){let{children:t}=e;return y.default.createElement(Xo.Provider,{value:Zi},y.default.createElement(zr.Provider,{value:Ym},t))}var Jm={position:"fixed",touchAction:"none"},Qm=e=>oo(e)?"transform 250ms ease":void 0,eg=(0,y.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:s,rect:l,style:i,transform:u,transition:c=Qm}=e;if(!l)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Jm,width:l.width,height:l.height,top:l.top,left:l.left,transform:tt.Transform.toString(d),transformOrigin:r&&o?Jp(o,l):void 0,transition:typeof c=="function"?c(o):c,...i};return y.default.createElement(a,{className:s,style:f,ref:t},n)}),tg=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:s}=e;if(n!=null&&n.active)for(let[l,i]of Object.entries(n.active))i!==void 0&&(r[l]=a.node.style.getPropertyValue(l),a.node.style.setProperty(l,i));if(n!=null&&n.dragOverlay)for(let[l,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(l,i);return s!=null&&s.active&&a.node.classList.add(s.active),s!=null&&s.dragOverlay&&o.node.classList.add(s.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);s!=null&&s.active&&a.node.classList.remove(s.active)}},ag=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:tt.Transform.toString(t)},{transform:tt.Transform.toString(a)}]},og={duration:250,easing:"ease",keyframes:ag,sideEffects:tg({styles:{active:{opacity:"0"}}})};function rg(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return _o((n,s)=>{if(t===null)return;let l=a.get(n);if(!l)return;let i=l.node.current;if(!i)return;let u=Yi(s);if(!u)return;let{transform:c}=ze(s).getComputedStyle(s),d=Hi(c);if(!d)return;let f=typeof t=="function"?t:ng(t);return Ki(i,r.draggable.measure),f({active:{id:n,data:l.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:s,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function ng(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...og,...e};return n=>{let{active:s,dragOverlay:l,transform:i,...u}=n;if(!t)return;let c={x:l.rect.left-s.rect.left,y:l.rect.top-s.rect.top},d={scaleX:i.scaleX!==1?s.rect.width*i.scaleX/l.rect.width:1,scaleY:i.scaleY!==1?s.rect.height*i.scaleY/l.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},g=r({...u,active:s,dragOverlay:l,transform:{initial:i,final:f}}),[h]=g,p=g[g.length-1];if(JSON.stringify(h)===JSON.stringify(p))return;let m=o?.({active:s,dragOverlay:l,...u}),x=l.node.animate(g,{duration:t,easing:a,fill:"forwards"});return new Promise(w=>{x.onfinish=()=>{m?.(),w()}})}}var Fi=0;function sg(e){return(0,y.useMemo)(()=>{if(e!=null)return Fi++,Fi},[e])}var tu=y.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:s,wrapperElement:l="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggableNodes:h,droppableContainers:p,dragOverlay:m,over:x,measuringConfiguration:w,scrollableAncestors:v,scrollableAncestorRects:b,windowRect:C}=gs(),L=(0,y.useContext)(zr),I=sg(d?.id),S=Qi(s,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:v,scrollableAncestorRects:b,transform:L,windowRect:C}),P=ms(f),E=rg({config:o,draggableNodes:h,droppableContainers:p,measuringConfiguration:w}),M=P?m.setRef:void 0;return y.default.createElement(Zm,null,y.default.createElement($m,{animation:E},d&&I?y.default.createElement(eg,{key:I,id:d.id,ref:M,as:l,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:S},a):null))});var Le=q(require("react"));function au(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function lg(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Wr(e){return e!==null&&e>=0}function ig(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function ug(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var ou=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=au(t,o,a),s=t[r],l=n[r];return!l||!s?null:{x:l.left-s.left,y:l.top-s.top,scaleX:l.width/s.width,scaleY:l.height/s.height}};var jr={scaleX:1,scaleY:1},Xr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:s}=e,l=(t=n[a])!=null?t:o;if(!l)return null;if(r===a){let u=n[s];return u?{x:0,y:a<s?u.top+u.height-(l.top+l.height):u.top-l.top,...jr}:null}let i=dg(n,r,a);return r>a&&r<=s?{x:0,y:-l.height-i,...jr}:r<a&&r>=s?{x:0,y:l.height+i,...jr}:{x:0,y:0,...jr}};function dg(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var ru="Sortable",nu=Le.default.createContext({activeIndex:-1,containerId:ru,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ou,disabled:{draggable:!1,droppable:!1}});function $r(e){let{children:t,id:a,items:o,strategy:r=ou,disabled:n=!1}=e,{active:s,dragOverlay:l,droppableRects:i,over:u,measureDroppableContainers:c}=gs(),d=ma(ru,a),f=l.rect!==null,g=(0,Le.useMemo)(()=>o.map(L=>typeof L=="object"&&"id"in L?L.id:L),[o]),h=s!=null,p=s?g.indexOf(s.id):-1,m=u?g.indexOf(u.id):-1,x=(0,Le.useRef)(g),w=!ig(g,x.current),v=m!==-1&&p===-1||w,b=ug(n);at(()=>{w&&h&&c(g)},[w,g,h,c]),(0,Le.useEffect)(()=>{x.current=g},[g]);let C=(0,Le.useMemo)(()=>({activeIndex:p,containerId:d,disabled:b,disableTransforms:v,items:g,overIndex:m,useDragOverlay:f,sortedRects:lg(g,i),strategy:r}),[p,d,b.draggable,b.droppable,v,g,m,i,f,r]);return Le.default.createElement(nu.Provider,{value:C},t)}var cg=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return au(a,o,r).indexOf(t)},fg=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:s,previousItems:l,previousContainerId:i,transition:u}=e;return!u||!o||l!==n&&r===s?!1:a?!0:s!==r&&t===i},pg={duration:200,easing:"ease"},su="transform",mg=tt.Transition.toString({property:su,duration:0,easing:"linear"}),gg={roleDescription:"sortable"};function hg(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,s]=(0,Le.useState)(null),l=(0,Le.useRef)(a);return at(()=>{if(!t&&a!==l.current&&o.current){let i=r.current;if(i){let u=Ca(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&s(c)}}a!==l.current&&(l.current=a)},[t,a,o,r]),(0,Le.useEffect)(()=>{n&&s(null)},[n]),n}function Yr(e){let{animateLayoutChanges:t=fg,attributes:a,disabled:o,data:r,getNewIndex:n=cg,id:s,strategy:l,resizeObserverConfig:i,transition:u=pg}=e,{items:c,containerId:d,activeIndex:f,disabled:g,disableTransforms:h,sortedRects:p,overIndex:m,useDragOverlay:x,strategy:w}=(0,Le.useContext)(nu),v=xg(o,g),b=c.indexOf(s),C=(0,Le.useMemo)(()=>({sortable:{containerId:d,index:b,items:c},...r}),[d,r,b,c]),L=(0,Le.useMemo)(()=>c.slice(c.indexOf(s)),[c,s]),{rect:I,node:S,isOver:P,setNodeRef:E}=Gr({id:s,data:C,disabled:v.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...i}}),{active:M,activatorEvent:D,activeNodeRect:F,attributes:U,setNodeRef:Z,listeners:W,isDragging:O,over:B,setActivatorNodeRef:H,transform:T}=eu({id:s,data:C,attributes:{...gg,...a},disabled:v.draggable}),le=xi(E,Z),Q=!!M,ie=Q&&!h&&Wr(f)&&Wr(m),ve=!x&&O,R=ve&&ie?T:null,G=ie?R??(l??w)({rects:p,activeNodeRect:F,activeIndex:f,overIndex:m,index:b}):null,k=Wr(f)&&Wr(m)?n({id:s,items:c,activeIndex:f,overIndex:m}):b,X=M?.id,_=(0,Le.useRef)({activeId:X,items:c,newIndex:k,containerId:d}),$=c!==_.current.items,Y=t({active:M,containerId:d,isDragging:O,isSorting:Q,id:s,index:b,items:c,newIndex:_.current.newIndex,previousItems:_.current.items,previousContainerId:_.current.containerId,transition:u,wasDragging:_.current.activeId!=null}),oe=hg({disabled:!Y,index:b,node:S,rect:I});return(0,Le.useEffect)(()=>{Q&&_.current.newIndex!==k&&(_.current.newIndex=k),d!==_.current.containerId&&(_.current.containerId=d),c!==_.current.items&&(_.current.items=c)},[Q,k,d,c]),(0,Le.useEffect)(()=>{if(X===_.current.activeId)return;if(X&&!_.current.activeId){_.current.activeId=X;return}let Pe=setTimeout(()=>{_.current.activeId=X},50);return()=>clearTimeout(Pe)},[X]),{active:M,activeIndex:f,attributes:U,data:C,rect:I,index:b,newIndex:k,items:c,isOver:P,isSorting:Q,isDragging:O,listeners:W,node:S,overIndex:m,over:B,setNodeRef:le,setActivatorNodeRef:H,setDroppableNodeRef:E,setDraggableNodeRef:Z,transform:oe??G,transition:we()};function we(){if(oe||$&&_.current.newIndex===b)return mg;if(!(ve&&!oo(D)||!u)&&(Q||Y))return tt.Transition.toString({...u,property:su})}}function xg(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Kr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var vg=[ne.Down,ne.Right,ne.Up,ne.Left],Zr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:s,scrollableAncestors:l}}=t;if(vg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ne.Down:o.top<f.top&&i.push(d);break;case ne.Up:o.top>f.top&&i.push(d);break;case ne.Left:o.left>f.left&&i.push(d);break;case ne.Right:o.left<f.left&&i.push(d);break}});let u=Hr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=jo(u,"id");if(c===s?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),g=f?r.get(f.id):null,h=f?.node.current;if(h&&g&&d&&f){let m=Ko(h).some((L,I)=>l[I]!==L),x=lu(d,f),w=wg(d,f),v=m||!x?{x:0,y:0}:{x:w?o.width-g.width:0,y:w?o.height-g.height:0},b={x:g.left,y:g.top};return v.x&&v.y?b:ha(b,v)}}}};function lu(e,t){return!Kr(e)||!Kr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function wg(e,t){return!Kr(e)||!Kr(t)||!lu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Qr=require("react");var iu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var $o=require("react");var uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var du=(0,$o.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:r="",children:n,iconNode:s,...l},i)=>(0,$o.createElement)("svg",{ref:i,...uu,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:Jr("lucide",r),...l},[...s.map(([u,c])=>(0,$o.createElement)(u,c)),...Array.isArray(n)?n:[n]]));var de=(e,t)=>{let a=(0,Qr.forwardRef)(({className:o,...r},n)=>(0,Qr.createElement)(du,{ref:n,iconNode:t,className:Jr(`lucide-${iu(e)}`,o),...r}));return a.displayName=`${e}`,a};var bg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],aa=de("Check",bg);var Cg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],no=de("ChevronDown",Cg);var Lg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Yo=de("ChevronUp",Lg);var yg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Zo=de("Clock",yg);var Ig=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],Jo=de("Filter",Ig);var Sg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Qo=de("GripVertical",Sg);var Rg=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],er=de("List",Rg);var Pg=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],tr=de("MessageSquare",Pg);var Dg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nt=de("Plus",Dg);var kg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ar=de("RefreshCw",kg);var Mg=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],or=de("Settings2",Mg);var Ag=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],rr=de("Tag",Ag);var Tg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],_t=de("Trash2",Tg);var Eg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nr=de("X",Eg);var jn=require("react");var ku=q(require("react"),1);var Ne=q(require("react"),1);var cu=q(require("react"),1),Og=Object.defineProperty,xs=(e,t)=>Og(e,"name",{value:t,configurable:!0});function hs(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}xs(hs,"setRef");function fu(...e){return t=>{let a=!1,o=e.map(r=>{let n=hs(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():hs(e[r],null)}}}}xs(fu,"composeRefs");function ae(...e){return cu.useCallback(fu(...e),e)}xs(ae,"useComposedRefs");var Fg=Object.defineProperty,ht=(e,t)=>Fg(e,"name",{value:t,configurable:!0});function Ve(e){let t=Ne.forwardRef((a,o)=>{let{children:r,...n}=a,s=null,l=!1,i=[];vs(r)&&typeof en=="function"&&(r=en(r._payload)),Ne.Children.forEach(r,f=>{if(xu(f)){l=!0;let g=f,h="child"in g.props?g.props.child:g.props.children;vs(h)&&typeof en=="function"&&(h=en(h._payload)),s=Ng(g,h),i.push(s?.props?.children)}else i.push(f)}),s?s=Ne.cloneElement(s,void 0,i):!l&&Ne.Children.count(r)===1&&Ne.isValidElement(r)&&(s=r);let u=s?hu(s):void 0,c=ae(o,u);if(!s){if(r||r===0)throw new Error(l?Hg(e):Ug(e));return r}let d=gu(n,s.props??{});return s.type!==Ne.Fragment&&(d.ref=o?c:u),Ne.cloneElement(s,d)});return t.displayName=`${e}.Slot`,t}ht(Ve,"createSlot");var pu=Ve("Slot"),mu=Symbol.for("radix.slottable");function Bg(e){let t=ht(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=mu,t}ht(Bg,"createSlottable");var Ng=ht((e,t)=>{if("child"in e.props){let a=e.props.child;return Ne.isValidElement(a)?Ne.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Ne.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function gu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...l)=>{let i=n(...l);return r(...l),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}ht(gu,"mergeProps");function hu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}ht(hu,"getElementRef");function xu(e){return Ne.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===mu}ht(xu,"isSlottable");var _g=Symbol.for("react.lazy");function vs(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===_g&&"_payload"in e&&vu(e._payload)}ht(vs,"isLazyComponent");function vu(e){return typeof e=="object"&&e!==null&&"then"in e}ht(vu,"isPromiseLike");var Ug=ht(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Hg=ht(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),en=Ne[" use ".trim().toString()];function wu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=wu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function tn(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=wu(e))&&(o&&(o+=" "),o+=t);return o}var bu=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Cu=tn,an=(e,t)=>a=>{var o;if(t?.variants==null)return Cu(e,a?.class,a?.className);let{variants:r,defaultVariants:n}=t,s=Object.keys(r).map(u=>{let c=a?.[u],d=n?.[u];if(c===null)return null;let f=bu(c)||bu(d);return r[u][f]}),l=a&&Object.entries(a).reduce((u,c)=>{let[d,f]=c;return f===void 0||(u[d]=f),u},{}),i=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((u,c)=>{let{class:d,className:f,...g}=c;return Object.entries(g).every(h=>{let[p,m]=h;return Array.isArray(m)?m.includes({...n,...l}[p]):{...n,...l}[p]===m})?[...u,d,f]:u},[]);return Cu(e,s,i,a?.class,a?.className)};var qg=e=>{let t=Vg(e),{conflictingClassGroups:a,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:s=>{let l=s.split("-");return l[0]===""&&l.length!==1&&l.shift(),Iu(l,t)||zg(s)},getConflictingClassGroupIds:(s,l)=>{let i=a[s]||[];return l&&o[s]?[...i,...o[s]]:i}}},Iu=(e,t)=>{if(e.length===0)return t.classGroupId;let a=e[0],o=t.nextPart.get(a),r=o?Iu(e.slice(1),o):void 0;if(r)return r;if(t.validators.length===0)return;let n=e.join("-");return t.validators.find(({validator:s})=>s(n))?.classGroupId},Lu=/^\[(.+)\]$/,zg=e=>{if(Lu.test(e)){let t=Lu.exec(e)[1],a=t?.substring(0,t.indexOf(":"));if(a)return"arbitrary.."+a}},Vg=e=>{let{theme:t,prefix:a}=e,o={nextPart:new Map,validators:[]};return Wg(Object.entries(e.classGroups),a).forEach(([n,s])=>{bs(s,o,n,t)}),o},bs=(e,t,a,o)=>{e.forEach(r=>{if(typeof r=="string"){let n=r===""?t:yu(t,r);n.classGroupId=a;return}if(typeof r=="function"){if(Gg(r)){bs(r(o),t,a,o);return}t.validators.push({validator:r,classGroupId:a});return}Object.entries(r).forEach(([n,s])=>{bs(s,yu(t,n),a,o)})})},yu=(e,t)=>{let a=e;return t.split("-").forEach(o=>{a.nextPart.has(o)||a.nextPart.set(o,{nextPart:new Map,validators:[]}),a=a.nextPart.get(o)}),a},Gg=e=>e.isThemeGetter,Wg=(e,t)=>t?e.map(([a,o])=>{let r=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[t+s,l])):n);return[a,r]}):e,jg=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,a=new Map,o=new Map,r=(n,s)=>{a.set(n,s),t++,t>e&&(t=0,o=a,a=new Map)};return{get(n){let s=a.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return r(n,s),s},set(n,s){a.has(n)?a.set(n,s):r(n,s)}}};var Kg=e=>{let{separator:t,experimentalParseClassName:a}=e,o=t.length===1,r=t[0],n=t.length,s=l=>{let i=[],u=0,c=0,d;for(let m=0;m<l.length;m++){let x=l[m];if(u===0){if(x===r&&(o||l.slice(m,m+n)===t)){i.push(l.slice(c,m)),c=m+n;continue}if(x==="/"){d=m;continue}}x==="["?u++:x==="]"&&u--}let f=i.length===0?l:l.substring(c),g=f.startsWith("!"),h=g?f.substring(1):f,p=d&&d>c?d-c:void 0;return{modifiers:i,hasImportantModifier:g,baseClassName:h,maybePostfixModifierPosition:p}};return a?l=>a({className:l,parseClassName:s}):s},Xg=e=>{if(e.length<=1)return e;let t=[],a=[];return e.forEach(o=>{o[0]==="["?(t.push(...a.sort(),o),a=[]):a.push(o)}),t.push(...a.sort()),t},$g=e=>({cache:jg(e.cacheSize),parseClassName:Kg(e),...qg(e)}),Yg=/\s+/,Zg=(e,t)=>{let{parseClassName:a,getClassGroupId:o,getConflictingClassGroupIds:r}=t,n=[],s=e.trim().split(Yg),l="";for(let i=s.length-1;i>=0;i-=1){let u=s[i],{modifiers:c,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:g}=a(u),h=!!g,p=o(h?f.substring(0,g):f);if(!p){if(!h){l=u+(l.length>0?" "+l:l);continue}if(p=o(f),!p){l=u+(l.length>0?" "+l:l);continue}h=!1}let m=Xg(c).join(":"),x=d?m+"!":m,w=x+p;if(n.includes(w))continue;n.push(w);let v=r(p,h);for(let b=0;b<v.length;++b){let C=v[b];n.push(x+C)}l=u+(l.length>0?" "+l:l)}return l};function Jg(){let e=0,t,a,o="";for(;e<arguments.length;)(t=arguments[e++])&&(a=Su(t))&&(o&&(o+=" "),o+=a);return o}var Su=e=>{if(typeof e=="string")return e;let t,a="";for(let o=0;o<e.length;o++)e[o]&&(t=Su(e[o]))&&(a&&(a+=" "),a+=t);return a};function Qg(e,...t){let a,o,r,n=s;function s(i){let u=t.reduce((c,d)=>d(c),e());return a=$g(u),o=a.cache.get,r=a.cache.set,n=l,l(i)}function l(i){let u=o(i);if(u)return u;let c=Zg(i,a);return r(i,c),c}return function(){return n(Jg.apply(null,arguments))}}var me=e=>{let t=a=>a[e]||[];return t.isThemeGetter=!0,t},Ru=/^\[(?:([a-z-]+):)?(.+)\]$/i,eh=/^\d+\/\d+$/,th=new Set(["px","full","screen"]),ah=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,rh=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,nh=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ut=e=>so(e)||th.has(e)||eh.test(e),oa=e=>lo(e,"length",mh),so=e=>!!e&&!Number.isNaN(Number(e)),ws=e=>lo(e,"number",so),sr=e=>!!e&&Number.isInteger(Number(e)),lh=e=>e.endsWith("%")&&so(e.slice(0,-1)),te=e=>Ru.test(e),ra=e=>ah.test(e),ih=new Set(["length","size","percentage"]),uh=e=>lo(e,ih,Pu),dh=e=>lo(e,"position",Pu),ch=new Set(["image","url"]),fh=e=>lo(e,ch,hh),ph=e=>lo(e,"",gh),lr=()=>!0,lo=(e,t,a)=>{let o=Ru.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):a(o[2]):!1},mh=e=>oh.test(e)&&!rh.test(e),Pu=()=>!1,gh=e=>nh.test(e),hh=e=>sh.test(e);var xh=()=>{let e=me("colors"),t=me("spacing"),a=me("blur"),o=me("brightness"),r=me("borderColor"),n=me("borderRadius"),s=me("borderSpacing"),l=me("borderWidth"),i=me("contrast"),u=me("grayscale"),c=me("hueRotate"),d=me("invert"),f=me("gap"),g=me("gradientColorStops"),h=me("gradientColorStopPositions"),p=me("inset"),m=me("margin"),x=me("opacity"),w=me("padding"),v=me("saturate"),b=me("scale"),C=me("sepia"),L=me("skew"),I=me("space"),S=me("translate"),P=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto",te,t],D=()=>[te,t],F=()=>["",Ut,oa],U=()=>["auto",so,te],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",te],T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],le=()=>[so,te];return{cacheSize:500,separator:":",theme:{colors:[lr],spacing:[Ut,oa],blur:["none","",ra,te],brightness:le(),borderColor:[e],borderRadius:["none","","full",ra,te],borderSpacing:D(),borderWidth:F(),contrast:le(),grayscale:H(),hueRotate:le(),invert:H(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[lh,oa],inset:M(),margin:M(),opacity:le(),padding:D(),saturate:le(),scale:le(),sepia:H(),skew:le(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[ra]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),te]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",sr,te]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",sr,te]}],"grid-cols":[{"grid-cols":[lr]}],"col-start-end":[{col:["auto",{span:["full",sr,te]},te]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[lr]}],"row-start-end":[{row:["auto",{span:[sr,te]},te]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,t]}],"min-w":[{"min-w":[te,t,"min","max","fit"]}],"max-w":[{"max-w":[te,t,"none","full","min","max","fit","prose",{screen:[ra]},ra]}],h:[{h:[te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ra,oa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ws]}],"font-family":[{font:[lr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",so,ws]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ut,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ut,oa]}],"underline-offset":[{"underline-offset":["auto",Ut,te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),dh]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",uh]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},fh]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:W()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[Ut,te]}],"outline-w":[{outline:[Ut,oa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Ut,oa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ra,ph]}],"shadow-color":[{shadow:[lr]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[a]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",ra,te]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[a]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:le()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:le()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[sr,te]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ut,oa,ws]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}};var Du=Qg(xh);function ee(...e){return Du(tn(e))}var Mu=require("react/jsx-runtime"),vh=an("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[transform,color,background-color,border-color,box-shadow] duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-8 w-8"}},defaultVariants:{variant:"default",size:"default"}}),Ae=ku.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Mu.jsx)(o?pu:"button",{className:ee(vh({variant:t,size:a,className:e})),ref:n,...r}));Ae.displayName="Button";var mr=q(require("react"),1);var he=q(require("react"),1);var wh=Object.defineProperty,io=(e,t)=>wh(e,"name",{value:t,configurable:!0}),Au=!!(typeof window<"u"&&window.document&&window.document.createElement);function z(e,t,{checkForDefaultPrevented:a=!0}={}){return io(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}io(z,"composeEventHandlers");function bh(e){if(!Au)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}io(bh,"getOwnerWindow");function Cs(e){if(!Au)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}io(Cs,"getOwnerDocument");function Tu(e,t=!1){let{activeElement:a}=Cs(e);if(!a?.nodeName)return null;if(Eu(a)&&a.contentDocument)return Tu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Cs(a).getElementById(o);if(r)return r}}return a}io(Tu,"getActiveElement");function Eu(e){return e.tagName==="IFRAME"}io(Eu,"isFrame");var dt=q(require("react"),1),Ls=require("react/jsx-runtime"),Ch=Object.defineProperty,ut=(e,t)=>Ch(e,"name",{value:t,configurable:!0});function Lh(e,t){let a=dt.createContext(t);a.displayName=e+"Context";let o=ut(n=>{let{children:s,...l}=n,i=dt.useMemo(()=>l,Object.values(l));return(0,Ls.jsx)(a.Provider,{value:i,children:s})},"Provider");o.displayName=e+"Provider";function r(n,s={}){let{optional:l=!1}=s,i=dt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!l)throw new Error(`\`${n}\` must be used within \`${e}\``)}return ut(r,"useContext"),[o,r]}ut(Lh,"createContext");function _e(e,t=[]){let a=[];function o(n,s){let l=dt.createContext(s);l.displayName=n+"Context";let i=a.length;a=[...a,s];let u=ut(d=>{let{scope:f,children:g,...h}=d,p=f?.[e]?.[i]||l,m=dt.useMemo(()=>h,Object.values(h));return(0,Ls.jsx)(p.Provider,{value:m,children:g})},"Provider");u.displayName=n+"Provider";function c(d,f,g={}){let{optional:h=!1}=g,p=f?.[e]?.[i]||l,m=dt.useContext(p);if(m)return m;if(s!==void 0)return s;if(!h)throw new Error(`\`${d}\` must be used within \`${n}\``)}return ut(c,"useContext"),[u,c]}ut(o,"createContext");let r=ut(()=>{let n=a.map(s=>dt.createContext(s));return ut(function(l){let i=l?.[e]||n;return dt.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return r.scopeName=e,[o,Ou(r,...t)]}ut(_e,"createContextScope");function Ou(...e){let t=e[0];if(e.length===1)return t;let a=ut(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return ut(function(n){let s=o.reduce((l,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...l,...d}},{});return dt.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}ut(Ou,"composeContextScopes");var ys=q(require("react"),1);var Fu=q(require("react"),1),ue=globalThis?.document?Fu.useLayoutEffect:()=>{};var yh=Object.defineProperty,Ih=(e,t)=>yh(e,"name",{value:t,configurable:!0}),Sh=ys[" useId ".trim().toString()]||(()=>{}),Rh=0;function ot(e){let[t,a]=ys.useState(Sh());return ue(()=>{e||a(o=>o??String(Rh++))},[e]),e||(t?`radix-${t}`:"")}Ih(ot,"useId");var ct=q(require("react"),1);var on=!1;var xt=q(require("react"),1);var uo=q(require("react"),1),Ph=Object.defineProperty,Dh=(e,t)=>Ph(e,"name",{value:t,configurable:!0}),Bu=uo[" useEffectEvent ".trim().toString()],Nu=uo[" useInsertionEffect ".trim().toString()];function Is(e){if(typeof Bu=="function")return Bu(e);let t=uo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Nu=="function"?Nu(()=>{t.current=e}):ue(()=>{t.current=e}),uo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Dh(Is,"useEffectEvent");var kh=Object.defineProperty,ir=(e,t)=>kh(e,"name",{value:t,configurable:!0}),Mh=ct[" useInsertionEffect ".trim().toString()]||ue;function Dt({prop:e,defaultProp:t,onChange:a=ir(()=>{},"onChange"),caller:o}){let[r,n,s]=Uu({defaultProp:t,onChange:a}),l=e!==void 0,i=l?e:r;if(on){let c=ct.useRef(e!==void 0);ct.useEffect(()=>{let d=c.current;d!==l&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,o])}let u=ct.useCallback(c=>{if(l){let d=Hu(c)?c(e):c;d!==e&&s.current?.(d)}else n(c)},[l,e,n,s]);return[i,u]}ir(Dt,"useControllableState");function Uu({defaultProp:e,onChange:t}){let[a,o]=ct.useState(e),r=ct.useRef(a),n=ct.useRef(t);return Mh(()=>{n.current=t},[t]),ct.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}ir(Uu,"useUncontrolledState");function Hu(e){return typeof e=="function"}ir(Hu,"isFunction");var _u=Symbol("RADIX:SYNC_STATE");function Ah(e,t,a,o){let{prop:r,defaultProp:n,onChange:s,caller:l}=t,i=r!==void 0,u=Is(s);if(on){let m=xt.useRef(r!==void 0);xt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,l])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=xt.useReducer((m,x)=>{if(x.type===_u)return{...m,state:x.state};let w=e(m,x);return i&&!Object.is(w.state,m.state)&&u(w.state),w},...c),g=d.state,h=xt.useRef(g);xt.useEffect(()=>{h.current!==g&&(h.current=g,i||u(g))},[g,h,i]);let p=xt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return xt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:_u,state:r})},[r,d.state,i]),[p,f]}ir(Ah,"useControllableStateReducer");var ce=q(require("react"),1);var qu=q(require("react"),1),zu=q(require("react-dom"),1);var Vu=require("react/jsx-runtime"),Th=Object.defineProperty,Eh=(e,t)=>Th(e,"name",{value:t,configurable:!0}),Oh=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],re=Oh.reduce((e,t)=>{let a=Ve(`Primitive.${t}`),o=qu.forwardRef((r,n)=>{let{asChild:s,...l}=r,i=s?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Vu.jsx)(i,{...l,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function ur(e,t){e&&zu.flushSync(()=>e.dispatchEvent(t))}Eh(ur,"dispatchDiscreteCustomEvent");var co=q(require("react"),1),Fh=Object.defineProperty,Bh=(e,t)=>Fh(e,"name",{value:t,configurable:!0});function Te(e){let t=co.useRef(e);return co.useEffect(()=>{t.current=e}),co.useMemo(()=>((...a)=>t.current?.(...a)),[])}Bh(Te,"useCallbackRef");var Wu=require("react/jsx-runtime"),Nh=Object.defineProperty,Ee=(e,t)=>Nh(e,"name",{value:t,configurable:!0}),Ss="dismissableLayer.update",_h="dismissableLayer.pointerDownOutside",Uh="dismissableLayer.focusOutside",Gu,ju=ce.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),fo=ce.forwardRef(Ee(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:i,onDismiss:u,...c}=t,d=ce.useContext(ju),[f,g]=ce.useState(null),h=f?.ownerDocument??globalThis?.document,[,p]=ce.useState({}),m=ae(a,g),x=Array.from(d.layers),[w]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=w?x.indexOf(w):-1,b=f?x.indexOf(f):-1,C=d.layersWithOutsidePointerEventsDisabled.size>0,L=b>=v,I=ce.useRef(!1),S=Ku(D=>{s?.(D),i?.(D),D.defaultPrevented||u?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:I,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ce.useCallback(D=>{if(!(D instanceof Node))return!1;let F=[...d.branches].some(U=>U.contains(D));return L&&!F},[d.branches,L])}),P=Xu(D=>{if(r&&I.current)return;let F=D.target;[...d.branches].some(Z=>Z.contains(F))||(l?.(D),i?.(D),D.defaultPrevented||u?.())},h),E=f?b===x.length-1:!1,M=Te(D=>{D.key==="Escape"&&(n?.(D),!D.defaultPrevented&&u&&(D.preventDefault(),u()))});return ce.useEffect(()=>{if(E)return h.addEventListener("keydown",M,{capture:!0}),()=>h.removeEventListener("keydown",M,{capture:!0})},[h,E,M]),ce.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Gu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Rs(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Gu))}},[f,h,o,d]),ce.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Rs())},[f,d]),ce.useEffect(()=>{let D=Ee(()=>p({}),"handleUpdate");return document.addEventListener(Ss,D),()=>document.removeEventListener(Ss,D)},[]),(0,Wu.jsx)(re.div,{...c,ref:m,style:{pointerEvents:C?L?"auto":"none":void 0,...t.style},onFocusCapture:z(t.onFocusCapture,P.onFocusCapture),onBlurCapture:z(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:z(t.onPointerDownCapture,S.onPointerDownCapture)})},"DismissableLayer"));function Ps(){let e=ce.useContext(ju),[t,a]=ce.useState(null);return ce.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ee(Ps,"useDismissableLayerSurface");var Hh=Ee(()=>!0,"IS_TRUE");function Ku(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:s=Hh}=t,l=Te(e),i=ce.useRef(!1),u=ce.useRef(!1),c=ce.useRef(new Map),d=ce.useRef(()=>{});return ce.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Ee(f,"resetOutsideInteraction");function g(){return Array.from(c.current.values()).some(Boolean)}Ee(g,"isOutsideInteractionIntercepted");function h(v){if(!u.current)return;let b=v.target;b instanceof Node&&[...n].some(L=>L.contains(b))||c.current.set(v.type,!0),v.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Ee(h,"handleInteractionCapture");function p(v){u.current&&c.current.set(v.type,!1)}Ee(p,"handleInteractionBubble");let m=Ee(v=>{if(v.target&&!i.current){let C=function(){a.removeEventListener("click",d.current);let I=g();f(),I||Ds(_h,l,L,{discrete:!0})};var b=C;if(Ee(C,"handleAndDispatchPointerDownOutsideEvent"),!s(v.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let L={originalEvent:v};u.current=!0,r.current=o&&v.button===0,c.current.clear(),!o||v.button!==0?C():(a.removeEventListener("click",d.current),d.current=C,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let v of x)a.addEventListener(v,h,!0),a.addEventListener(v,p);let w=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(w),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let v of x)a.removeEventListener(v,h,!0),a.removeEventListener(v,p)}},[a,l,o,r,n,s]),{onPointerDownCapture:Ee(()=>i.current=!0,"onPointerDownCapture")}}Ee(Ku,"usePointerDownOutside");function Xu(e,t=globalThis?.document){let a=Te(e),o=ce.useRef(!1);return ce.useEffect(()=>{let r=Ee(n=>{n.target&&!o.current&&Ds(Uh,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ee(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ee(()=>o.current=!1,"onBlurCapture")}}Ee(Xu,"useFocusOutside");function Rs(){let e=new CustomEvent(Ss);document.dispatchEvent(e)}Ee(Rs,"dispatchUpdate");function Ds(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?ur(r,n):r.dispatchEvent(n)}Ee(Ds,"handleAndDispatchCustomEvent");var ft=q(require("react"),1);var Zu=require("react/jsx-runtime"),qh=Object.defineProperty,Ke=(e,t)=>qh(e,"name",{value:t,configurable:!0}),ks="focusScope.autoFocusOnMount",Ms="focusScope.autoFocusOnUnmount",$u={bubbles:!1,cancelable:!0},po=ft.forwardRef(Ke(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:s,...l}=t,[i,u]=ft.useState(null),c=Te(n),d=Te(s),f=ft.useRef(null),g=ae(a,u),h=ft.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ft.useEffect(()=>{if(r){let v=function(I){if(h.paused||!i)return;let S=I.target;i.contains(S)?f.current=S:Ht(f.current,{select:!0})},b=function(I){if(h.paused||!i)return;let S=I.relatedTarget;S!==null&&(i.contains(S)||Ht(f.current,{select:!0}))},C=function(I){if(document.activeElement===document.body)for(let P of I)P.removedNodes.length>0&&Ht(i)};var m=v,x=b,w=C;Ke(v,"handleFocusIn"),Ke(b,"handleFocusOut"),Ke(C,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",b);let L=new MutationObserver(C);return i&&L.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),L.disconnect()}}},[r,i,h.paused]),ft.useEffect(()=>{if(i){Yu.add(h);let m=document.activeElement;if(!i.contains(m)){let w=new CustomEvent(ks,$u);i.addEventListener(ks,c),i.dispatchEvent(w),w.defaultPrevented||(Ju(od(Es(i)),{select:!0}),document.activeElement===m&&Ht(i))}return()=>{i.removeEventListener(ks,c),setTimeout(()=>{let w=new CustomEvent(Ms,$u);i.addEventListener(Ms,d),i.dispatchEvent(w),w.defaultPrevented||Ht(m??document.body,{select:!0}),i.removeEventListener(Ms,d),Yu.remove(h)},0)}}},[i,c,d,h]);let p=ft.useCallback(m=>{if(!o&&!r||h.paused)return;let x=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,w=document.activeElement;if(x&&w){let v=m.currentTarget,[b,C]=Qu(v);b&&C?!m.shiftKey&&w===C?(m.preventDefault(),o&&Ht(b,{select:!0})):m.shiftKey&&w===b&&(m.preventDefault(),o&&Ht(C,{select:!0})):w===v&&m.preventDefault()}},[o,r,h.paused]);return(0,Zu.jsx)(re.div,{tabIndex:-1,...l,ref:g,onKeyDown:p})},"FocusScope"));function Ju(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Ht(o,{select:t}),document.activeElement!==a)return}Ke(Ju,"focusFirst");function Qu(e){let t=Es(e),a=As(t,e),o=As(t.reverse(),e);return[a,o]}Ke(Qu,"getTabbableEdges");function Es(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ke(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Ke(Es,"getTabbableCandidates");function As(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):ed(o,{upTo:t})))return o}Ke(As,"findVisible");function ed(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ke(ed,"isHidden");function td(e){return e instanceof HTMLInputElement&&"select"in e}Ke(td,"isSelectableInput");function Ht(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&td(e)&&t&&e.select()}}Ke(Ht,"focus");var Yu=ad();function ad(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Ts(e,t),e.unshift(t)},remove(t){e=Ts(e,t),e[0]?.resume()}}}Ke(ad,"createFocusScopesStack");function Ts(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ke(Ts,"arrayRemove");function od(e){return e.filter(t=>t.tagName!=="A")}Ke(od,"removeLinks");var rn=q(require("react"),1),rd=q(require("react-dom"),1);var nd=require("react/jsx-runtime"),zh=Object.defineProperty,Vh=(e,t)=>zh(e,"name",{value:t,configurable:!0}),mo=rn.forwardRef(Vh(function(t,a){let{container:o,...r}=t,[n,s]=rn.useState(!1);ue(()=>s(!0),[]);let l=o||n&&globalThis?.document?.body;return l?rd.createPortal((0,nd.jsx)(re.div,{...r,ref:a}),l):null},"Portal"));var Ue=q(require("react"),1);var sd=q(require("react"),1),Gh=Object.defineProperty,qt=(e,t)=>Gh(e,"name",{value:t,configurable:!0});function ld(e,t){return sd.useReducer((a,o)=>t[a][o]??a,e)}qt(ld,"useStateMachine");var zt=qt(e=>{let{present:t,children:a}=e,o=id(t),r=typeof a=="function"?a({present:o.isPresent}):Ue.Children.only(a),n=ud(o.ref,dd(r));return typeof a=="function"||o.isPresent?Ue.cloneElement(r,{ref:n}):null},"Presence");function id(e){let[t,a]=Ue.useState(),o=Ue.useRef(null),r=Ue.useRef(e),n=Ue.useRef("none"),s=Ue.useRef(void 0),l=e?"mounted":"unmounted",[i,u]=ld(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ue.useEffect(()=>{i==="mounted"?(n.current=s.current??go(o.current),s.current=void 0):n.current="none"},[i]),ue(()=>{let c=o.current,d=r.current;if(d!==e){let g=n.current,h=go(c);e?(s.current=h,u("MOUNT")):h==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&g!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),ue(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=qt(h=>{let m=go(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),g=qt(h=>{h.target===t&&(n.current=go(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ue.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,s.current=go(d)}else o.current=null;a(c)},[])}}qt(id,"usePresence");function Os(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}qt(Os,"setRef");function ud(...e){let t=Ue.useRef(e);return t.current=e,Ue.useCallback(a=>{let o=t.current,r=!1,n=o.map(s=>{let l=Os(s,a);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<n.length;s++){let l=n[s];typeof l=="function"?l():Os(o[s],null)}}},[])}qt(ud,"useStableComposedRefs");function go(e){return e?.animationName||"none"}qt(go,"getAnimationName");function dd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}qt(dd,"getElementRef");var cd=q(require("react"),1),Wh=Object.defineProperty,Bs=(e,t)=>Wh(e,"name",{value:t,configurable:!0}),nn=0,ho=null;function jh(e){return na(),e.children}Bs(jh,"FocusGuards");function na(){cd.useEffect(()=>{ho||(ho={start:Fs(),end:Fs()});let{start:e,end:t}=ho;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),nn++,()=>{nn===1&&(ho?.start.remove(),ho?.end.remove(),ho=null),nn=Math.max(0,nn-1)}},[])}Bs(na,"useFocusGuards");function Fs(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Bs(Fs,"createFocusGuard");var Ye=function(){return Ye=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ye.apply(this,arguments)};function sn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function fd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var fn=q(require("react"));var Ge=q(require("react"));var La="right-scroll-bar-position",ya="width-before-scroll-bar",Ns="with-scroll-bars-hidden",_s="--removed-body-scroll-bar-size";function ln(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var pd=require("react");function md(e,t){var a=(0,pd.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var un=q(require("react"));var Kh=typeof window<"u"?un.useLayoutEffect:un.useEffect,gd=new WeakMap;function Us(e,t){var a=md(t||null,function(o){return e.forEach(function(r){return ln(r,o)})});return Kh(function(){var o=gd.get(a);if(o){var r=new Set(o),n=new Set(e),s=a.current;r.forEach(function(l){n.has(l)||ln(l,null)}),n.forEach(function(l){r.has(l)||ln(l,s)})}gd.set(a,e)},[e]),a}function Xh(e){return e}function $h(e,t){t===void 0&&(t=Xh);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var s=t(n,o);return a.push(s),function(){a=a.filter(function(l){return l!==s})}},assignSyncMedium:function(n){for(o=!0;a.length;){var s=a;a=[],s.forEach(n)}a={push:function(l){return n(l)},filter:function(){return a}}},assignMedium:function(n){o=!0;var s=[];if(a.length){var l=a;a=[],l.forEach(n),s=a}var i=function(){var c=s;s=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),a}}}};return r}function Hs(e){e===void 0&&(e={});var t=$h(null);return t.options=Ye({async:!0,ssr:!1},e),t}var hd=q(require("react")),xd=function(e){var t=e.sideCar,a=sn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return hd.createElement(o,Ye({},a))};xd.isSideCarExport=!0;function qs(e,t){return e.useMedium(t),xd}var dn=Hs();var zs=function(){},dr=Ge.forwardRef(function(e,t){var a=Ge.useRef(null),o=Ge.useState({onScrollCapture:zs,onWheelCapture:zs,onTouchMoveCapture:zs}),r=o[0],n=o[1],s=e.forwardProps,l=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,g=e.noRelative,h=e.noIsolation,p=e.inert,m=e.allowPinchZoom,x=e.as,w=x===void 0?"div":x,v=e.gapMode,b=sn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=f,L=Us([a,t]),I=Ye(Ye({},b),r);return Ge.createElement(Ge.Fragment,null,c&&Ge.createElement(C,{sideCar:dn,removeScrollBar:u,shards:d,noRelative:g,noIsolation:h,inert:p,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:v}),s?Ge.cloneElement(Ge.Children.only(l),Ye(Ye({},I),{ref:L})):Ge.createElement(w,Ye({},I,{className:i,ref:L}),l))});dr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};dr.classNames={fullWidth:ya,zeroRight:La};var ge=q(require("react"));var vo=q(require("react"));var bd=q(require("react"));var vd;var wd=function(){if(vd)return vd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Yh(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wd();return t&&e.setAttribute("nonce",t),e}function Zh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Jh(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Vs=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Yh())&&(Zh(t,a),Jh(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Gs=function(){var e=Vs();return function(t,a){bd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var cr=function(){var e=Gs(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Qh={left:0,top:0,right:0,gap:0},Ws=function(e){return parseInt(e||"",10)||0},ex=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Ws(a),Ws(o),Ws(r)]},js=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Qh;var t=ex(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var tx=cr(),xo="data-scroll-locked",ax=function(e,t,a,o){var r=e.left,n=e.top,s=e.right,l=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Ns,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(l,"px ").concat(o,`;
  }
  body[`).concat(xo,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),a==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(n,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(o,`;
    `),a==="padding"&&"padding-right: ".concat(l,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(La,` {
    right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(ya,` {
    margin-right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(La," .").concat(La,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(ya," .").concat(ya,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(xo,`] {
    `).concat(_s,": ").concat(l,`px;
  }
`)},Cd=function(){var e=parseInt(document.body.getAttribute(xo)||"0",10);return isFinite(e)?e:0},ox=function(){vo.useEffect(function(){return document.body.setAttribute(xo,(Cd()+1).toString()),function(){var e=Cd()-1;e<=0?document.body.removeAttribute(xo):document.body.setAttribute(xo,e.toString())}},[])},Ks=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;ox();var n=vo.useMemo(function(){return js(r)},[r]);return vo.createElement(tx,{styles:ax(n,!t,r,a?"":"!important")})};var Xs=!1;if(typeof window<"u")try{fr=Object.defineProperty({},"passive",{get:function(){return Xs=!0,!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Xs=!1}var fr,Ia=Xs?{passive:!1}:!1;var rx=function(e){return e.tagName==="TEXTAREA"},Ld=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!rx(e)&&a[t]==="visible")},nx=function(e){return Ld(e,"overflowY")},sx=function(e){return Ld(e,"overflowX")},$s=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=yd(e,o);if(r){var n=Id(e,o),s=n[1],l=n[2];if(s>l)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},lx=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},ix=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},yd=function(e,t){return e==="v"?nx(t):sx(t)},Id=function(e,t){return e==="v"?lx(t):ix(t)},ux=function(e,t){return e==="h"&&t==="rtl"?-1:1},Sd=function(e,t,a,o,r){var n=ux(e,window.getComputedStyle(t).direction),s=n*o,l=a.target,i=t.contains(l),u=!1,c=s>0,d=0,f=0;do{if(!l)break;var g=Id(e,l),h=g[0],p=g[1],m=g[2],x=p-m-n*h;(h||x)&&yd(e,l)&&(d+=x,f+=h);var w=l.parentNode;l=w&&w.nodeType===Node.DOCUMENT_FRAGMENT_NODE?w.host:w}while(!i&&l!==document.body||i&&(t.contains(l)||t===l));return(c&&(r&&Math.abs(d)<1||!r&&s>d)||!c&&(r&&Math.abs(f)<1||!r&&-s>f))&&(u=!0),u};var cn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Rd=function(e){return[e.deltaX,e.deltaY]},Pd=function(e){return e&&"current"in e?e.current:e},dx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},cx=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},fx=0,wo=[];function Dd(e){var t=ge.useRef([]),a=ge.useRef([0,0]),o=ge.useRef(),r=ge.useState(fx++)[0],n=ge.useState(cr)[0],s=ge.useRef(e);ge.useEffect(function(){s.current=e},[e]),ge.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var p=fd([e.lockRef.current],(e.shards||[]).map(Pd),!0).filter(Boolean);return p.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),p.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var l=ge.useCallback(function(p,m){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!s.current.allowPinchZoom;var x=cn(p),w=a.current,v="deltaX"in p?p.deltaX:w[0]-x[0],b="deltaY"in p?p.deltaY:w[1]-x[1],C,L=p.target,I=Math.abs(v)>Math.abs(b)?"h":"v";if("touches"in p&&I==="h"&&L.type==="range")return!1;var S=window.getSelection(),P=S&&S.anchorNode,E=P?P===L||P.contains(L):!1;if(E)return!1;var M=$s(I,L);if(!M)return!0;if(M?C=I:(C=I==="v"?"h":"v",M=$s(I,L)),!M)return!1;if(!o.current&&"changedTouches"in p&&(v||b)&&(o.current=C),!C)return!0;var D=o.current||C;return Sd(D,m,p,D==="h"?v:b,!0)},[]),i=ge.useCallback(function(p){var m=p;if(!(!wo.length||wo[wo.length-1]!==n)){var x="deltaY"in m?Rd(m):cn(m),w=t.current.filter(function(C){return C.name===m.type&&(C.target===m.target||m.target===C.shadowParent)&&dx(C.delta,x)})[0];if(w&&w.should){m.cancelable&&m.preventDefault();return}if(!w){var v=(s.current.shards||[]).map(Pd).filter(Boolean).filter(function(C){return C.contains(m.target)}),b=v.length>0?l(m,v[0]):!s.current.noIsolation;b&&m.cancelable&&m.preventDefault()}}},[]),u=ge.useCallback(function(p,m,x,w){var v={name:p,delta:m,target:x,should:w,shadowParent:px(x)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(b){return b!==v})},1)},[]),c=ge.useCallback(function(p){a.current=cn(p),o.current=void 0},[]),d=ge.useCallback(function(p){u(p.type,Rd(p),p.target,l(p,e.lockRef.current))},[]),f=ge.useCallback(function(p){u(p.type,cn(p),p.target,l(p,e.lockRef.current))},[]);ge.useEffect(function(){return wo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ia),document.addEventListener("touchmove",i,Ia),document.addEventListener("touchstart",c,Ia),function(){wo=wo.filter(function(p){return p!==n}),document.removeEventListener("wheel",i,Ia),document.removeEventListener("touchmove",i,Ia),document.removeEventListener("touchstart",c,Ia)}},[]);var g=e.removeScrollBar,h=e.inert;return ge.createElement(ge.Fragment,null,h?ge.createElement(n,{styles:cx(r)}):null,g?ge.createElement(Ks,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function px(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var kd=qs(dn,Dd);var Md=fn.forwardRef(function(e,t){return fn.createElement(dr,Ye({},e,{ref:t,sideCar:kd}))});Md.classNames=dr.classNames;var Sa=Md;var mx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},bo=new WeakMap,pn=new WeakMap,mn={},Ys=0,Ad=function(e){return e&&(e.host||Ad(e.parentNode))},gx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Ad(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},hx=function(e,t,a,o){var r=gx(t,Array.isArray(e)?e:[e]);mn[a]||(mn[a]=new WeakMap);var n=mn[a],s=[],l=new Set,i=new Set(r),u=function(d){!d||l.has(d)||(l.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))c(f);else try{var g=f.getAttribute(o),h=g!==null&&g!=="false",p=(bo.get(f)||0)+1,m=(n.get(f)||0)+1;bo.set(f,p),n.set(f,m),s.push(f),p===1&&h&&pn.set(f,!0),m===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),l.clear(),Ys++,function(){s.forEach(function(d){var f=bo.get(d)-1,g=n.get(d)-1;bo.set(d,f),n.set(d,g),f||(pn.has(d)||d.removeAttribute(o),pn.delete(d)),g||d.removeAttribute(a)}),Ys--,Ys||(bo=new WeakMap,bo=new WeakMap,pn=new WeakMap,mn={})}},Co=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||mx(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),hx(o,r,a,"aria-hidden")):function(){return null}};var be=require("react/jsx-runtime"),xx=Object.defineProperty,pt=(e,t)=>xx(e,"name",{value:t,configurable:!0}),Js="Dialog",[Td,Fy]=_e(Js),[vx,kt]=Td(Js),Ed=pt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:s=!0}=e,l=he.useRef(null),i=he.useRef(null),[u,c]=Dt({prop:o,defaultProp:r??!1,onChange:n,caller:Js}),[d,f]=he.useState(0),[g,h]=he.useState(0);return(0,be.jsx)(vx,{scope:t,triggerRef:l,contentRef:i,contentId:ot(),titleId:ot(),descriptionId:ot(),titlePresent:d>0,descriptionPresent:g>0,setTitleCount:f,setDescriptionCount:h,open:u,onOpenChange:c,onOpenToggle:he.useCallback(()=>c(p=>!p),[c]),modal:s,children:a})},"Dialog");var Od="DialogPortal",[wx,Fd]=Td(Od,{forceMount:void 0}),Bd=pt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=kt(Od,t);return(0,be.jsx)(wx,{scope:t,forceMount:a,children:he.Children.map(o,s=>(0,be.jsx)(zt,{present:a||n.open,children:(0,be.jsx)(mo,{asChild:!0,container:r,children:s})}))})},"DialogPortal"),Zs="DialogOverlay",Qs=he.forwardRef(pt(function(t,a){let o=Fd(Zs,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=kt(Zs,t.__scopeDialog);return s.modal?(0,be.jsx)(zt,{present:r||s.open,children:(0,be.jsx)(Cx,{...n,ref:a})}):null},"DialogOverlay")),bx=Ve("DialogOverlay.RemoveScroll"),Cx=he.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=kt(Zs,o),s=Ps(),l=ae(a,s);return(0,be.jsx)(Sa,{as:bx,allowPinchZoom:!0,shards:[n.contentRef],children:(0,be.jsx)(re.div,{"data-state":ol(n.open),...r,ref:l,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),pr="DialogContent",el=he.forwardRef(pt(function(t,a){let o=Fd(pr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=kt(pr,t.__scopeDialog);return(0,be.jsx)(zt,{present:r||s.open,children:s.modal?(0,be.jsx)(Lx,{...n,ref:a}):(0,be.jsx)(yx,{...n,ref:a})})},"DialogContent")),Lx=he.forwardRef(pt(function(t,a){let o=kt(pr,t.__scopeDialog),r=he.useRef(null),n=ae(a,o.contentRef,r);return he.useEffect(()=>{let s=r.current;if(s)return Co(s)},[]),(0,be.jsx)(Nd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:z(t.onCloseAutoFocus,s=>{s.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:z(t.onPointerDownOutside,s=>{let l=s.detail.originalEvent,i=l.button===0&&l.ctrlKey===!0;(l.button===2||i)&&s.preventDefault()}),onFocusOutside:z(t.onFocusOutside,s=>s.preventDefault())})},"DialogContentModal")),yx=he.forwardRef(pt(function(t,a){let o=kt(pr,t.__scopeDialog),r=he.useRef(!1),n=he.useRef(!1);return(0,be.jsx)(Nd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{t.onCloseAutoFocus?.(s),s.defaultPrevented||(r.current||o.triggerRef.current?.focus(),s.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:s=>{t.onInteractOutside?.(s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let l=s.target;o.triggerRef.current?.contains(l)&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&n.current&&s.preventDefault()}})},"DialogContentNonModal")),Nd=he.forwardRef(pt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:s,...l}=t,i=kt(pr,o);return na(),(0,be.jsx)(be.Fragment,{children:(0,be.jsx)(po,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:s,children:(0,be.jsx)(fo,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":ol(i.open),...l,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Ix="DialogTitle",tl=he.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=kt(Ix,o),{setTitleCount:s}=n;return ue(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,be.jsx)(re.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Sx="DialogDescription",al=he.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=kt(Sx,o),{setDescriptionCount:s}=n;return ue(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,be.jsx)(re.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Rx="DialogClose",_d=he.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=kt(Rx,o);return(0,be.jsx)(re.button,{type:"button",...r,ref:a,onClick:z(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function ol(e){return e?"open":"closed"}pt(ol,"getState");var Hd=require("react"),rl="dsh-kanban",qd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Dx={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ra=null,nl=null;function zd(e){let t=e.get("locale");if(t!==void 0){Ra=t;try{t.register(rl,"zh",qd),t.register(rl,"en",Dx)}catch{}nl=t.bind(rl)}}function Lo(e){return nl?nl(e):qd[e]??e}var kx=e=>Ra&&typeof Ra.subscribe=="function"?Ra.subscribe(e):()=>{},Ud=()=>Ra&&typeof Ra.getSnapshot=="function"?Ra.getSnapshot():null;function Xe(){return(0,Hd.useSyncExternalStore)(kx,Ud,Ud),Lo}var rt=require("react/jsx-runtime"),yo=Ed;var Mx=Bd;var Vd=mr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(Qs,{ref:a,className:ee("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));Vd.displayName=Qs.displayName;var Pa=mr.forwardRef(({className:e,children:t,...a},o)=>{let r=Xe();return(0,rt.jsxs)(Mx,{children:[(0,rt.jsx)(Vd,{}),(0,rt.jsxs)(el,{ref:o,className:ee("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a,children:[t,(0,rt.jsxs)(_d,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,rt.jsx)(nr,{className:"h-4 w-4"}),(0,rt.jsx)("span",{className:"sr-only",children:r("close")})]})]})]})});Pa.displayName=el.displayName;var Da=({className:e,...t})=>(0,rt.jsx)("div",{className:ee("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Da.displayName="DialogHeader";var gr=({className:e,...t})=>(0,rt.jsx)("div",{className:ee("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});gr.displayName="DialogFooter";var ka=mr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(tl,{ref:a,className:ee("text-lg font-semibold leading-none tracking-tight",e),...t}));ka.displayName=tl.displayName;var hr=mr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(al,{ref:a,className:ee("text-sm text-muted-foreground",e),...t}));hr.displayName=al.displayName;var Ir=q(require("react"),1);var yt=q(require("react"),1);var J=q(require("react"),1);var vt=q(require("react"),1);var gn=require("react/jsx-runtime"),Ze=q(require("react"),1);var Ma=require("react/jsx-runtime");var Ax=Object.defineProperty,Oe=(e,t)=>Ax(e,"name",{value:t,configurable:!0});function Aa(e){let t=e+"CollectionProvider",[a,o]=_e(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),s=Oe(p=>{let{scope:m,children:x}=p,w=vt.useRef(null),v=vt.useRef(new Map).current;return(0,gn.jsx)(r,{scope:m,itemMap:v,collectionRef:w,children:x})},"CollectionProvider");s.displayName=t;let l=e+"CollectionSlot",i=Ve(l),u=vt.forwardRef((p,m)=>{let{scope:x,children:w}=p,v=n(l,x),b=ae(m,v.collectionRef);return(0,gn.jsx)(i,{ref:b,children:w})});u.displayName=l;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Ve(c),g=vt.forwardRef((p,m)=>{let{scope:x,children:w,...v}=p,b=vt.useRef(null),C=ae(m,b),L=n(c,x);return vt.useEffect(()=>(L.itemMap.set(b,{ref:b,...v}),()=>{L.itemMap.delete(b)})),(0,gn.jsx)(f,{[d]:"",ref:C,children:w})});g.displayName=c;function h(p){let m=n(e+"CollectionConsumer",p);return vt.useCallback(()=>{let w=m.collectionRef.current;if(!w)return[];let v=Array.from(w.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((L,I)=>v.indexOf(L.ref.current)-v.indexOf(I.ref.current))},[m.collectionRef,m.itemMap])}return Oe(h,"useCollection"),[{Provider:s,Slot:u,ItemSlot:g},h,o]}Oe(Aa,"createCollection");var Gd=new WeakMap,Se,nt,sl=(nt=class extends Map{constructor(a){super(a);mi(this,Se);Qn(this,Se,[...super.keys()]),Gd.set(this,!0)}set(a,o){return Gd.get(this)&&(this.has(a)?qe(this,Se)[qe(this,Se).indexOf(a)]=a:qe(this,Se).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),s=qe(this,Se).length,l=il(a),i=l>=0?l:s+l,u=i<0||i>=s?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);l<0&&i++;let d=[...qe(this,Se)],f,g=!1;for(let h=i;h<c;h++)if(i===h){let p=d[h];d[h]===o&&(p=d[h+1]),n&&this.delete(o),f=this.get(p),this.set(o,r)}else{!g&&d[h-1]===o&&(g=!0);let p=d[g?h:h-1],m=f;f=this.get(p),this.delete(p),this.set(p,m)}return this}with(a,o,r){let n=new nt(this);return n.insert(a,o,r),n}before(a){let o=qe(this,Se).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=qe(this,Se).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=qe(this,Se).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=qe(this,Se).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Qn(this,Se,[]),super.clear()}delete(a){let o=super.delete(a);return o&&qe(this,Se).splice(qe(this,Se).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=hn(qe(this,Se),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=hn(qe(this,Se),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return qe(this,Se).indexOf(a)}keyAt(a){return hn(qe(this,Se),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let s of this)Reflect.apply(a,o,[s,n,this])&&r.push(s),n++;return new nt(r)}map(a,o){let r=[],n=0;for(let s of this)r.push([s[0],Reflect.apply(a,o,[s,n,this])]),n++;return new nt(r)}reduce(...a){let[o,r]=a,n=0,s=r??this.at(0);for(let l of this)n===0&&a.length===1?s=l:s=Reflect.apply(o,this,[s,l,n,this]),n++;return s}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let s=this.size-1;s>=0;s--){let l=this.at(s);s===this.size-1&&a.length===1?n=l:n=Reflect.apply(o,this,[n,l,s,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new nt(o)}toReversed(){let a=new nt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new nt(o)}slice(a,o){let r=new nt,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let s=a;s<=n;s++){let l=this.keyAt(s),i=this.get(l);r.set(l,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Se=new WeakMap,Oe(nt,"OrderedDict"),nt);function hn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Wd(e,t);return a===-1?void 0:e[a]}Oe(hn,"at");function Wd(e,t){let a=e.length,o=il(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Oe(Wd,"toSafeIndex");function il(e){return e!==e||e===0?0:Math.trunc(e)}Oe(il,"toSafeInteger");function Tx(e){let t=e+"CollectionProvider",[a,o]=_e(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new sl,setItemMap:Oe(()=>{},"setItemMap")}),s=Oe(({state:v,...b})=>v?(0,Ma.jsx)(i,{...b,state:v}):(0,Ma.jsx)(l,{...b}),"CollectionProvider");s.displayName=t;let l=Oe(v=>{let b=m();return(0,Ma.jsx)(i,{...v,state:b})},"CollectionInit");l.displayName=t+"Init";let i=Oe(v=>{let{scope:b,children:C,state:L}=v,I=Ze.useRef(null),[S,P]=Ze.useState(null),E=ae(I,P),[M,D]=L;return Ze.useEffect(()=>{if(!S)return;let F=Xd(()=>{});return F.observe(S,{childList:!0,subtree:!0}),()=>{F.disconnect()}},[S]),(0,Ma.jsx)(r,{scope:b,itemMap:M,setItemMap:D,collectionRef:E,collectionRefObject:I,collectionElement:S,children:C})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Ve(u),d=Ze.forwardRef((v,b)=>{let{scope:C,children:L}=v,I=n(u,C),S=ae(b,I.collectionRef);return(0,Ma.jsx)(c,{ref:S,children:L})});d.displayName=u;let f=e+"CollectionItemSlot",g="data-radix-collection-item",h=Ve(f),p=Ze.forwardRef((v,b)=>{let{scope:C,children:L,...I}=v,S=Ze.useRef(null),[P,E]=Ze.useState(null),M=ae(b,S,E),D=n(f,C),{setItemMap:F}=D,U=Ze.useRef(I);jd(U.current,I)||(U.current=I);let Z=U.current;return Ze.useEffect(()=>{let W=Z;return F(O=>P?O.has(P)?O.set(P,{...W,element:P}).toSorted(ll):(O.set(P,{...W,element:P}),O.toSorted(ll)):O),()=>{F(O=>!P||!O.has(P)?O:(O.delete(P),new sl(O)))}},[P,Z,F]),(0,Ma.jsx)(h,{[g]:"",ref:M,children:L})});p.displayName=f;function m(){return Ze.useState(new sl)}Oe(m,"useInitCollection");function x(v){let{itemMap:b}=n(e+"CollectionConsumer",v);return b}return Oe(x,"useCollection"),[{Provider:s,Slot:d,ItemSlot:p},{createCollectionScope:o,useCollection:x,useInitCollection:m}]}Oe(Tx,"createCollection");function jd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Oe(jd,"shallowEqual");function Kd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Oe(Kd,"isElementPreceding");function ll(e,t){return!e[1].element||!t[1].element?0:Kd(e[1].element,t[1].element)?-1:1}Oe(ll,"sortByDocumentPosition");function Xd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Oe(Xd,"getChildListObserver");var xn=q(require("react"),1),Fx=require("react/jsx-runtime"),Ex=Object.defineProperty,Ox=(e,t)=>Ex(e,"name",{value:t,configurable:!0}),Bx=xn.createContext(void 0);function Ta(e){let t=xn.useContext(Bx);return e||t||"ltr"}Ox(Ta,"useDirection");var We=q(require("react"),1);var Zd=["top","right","bottom","left"];var Mt=Math.min,wt=Math.max,vr=Math.round,wr=Math.floor,At=e=>({x:e,y:e}),Nx={left:"right",right:"left",bottom:"top",top:"bottom"};function ul(e,t,a){return wt(e,Mt(t,a))}function Tt(e,t){return typeof e=="function"?e(t):e}function Vt(e){return e.split("-")[0]}function Ea(e){return e.split("-")[1]}function wn(e){return e==="x"?"y":"x"}function bn(e){return e==="y"?"height":"width"}function bt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function Cn(e){return wn(bt(e))}function Jd(e,t,a){a===void 0&&(a=!1);let o=Ea(e),r=Cn(e),n=bn(r),s=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=xr(s)),[s,xr(s)]}function Qd(e){let t=xr(e);return[vn(e),t,vn(t)]}function vn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var $d=["left","right"],Yd=["right","left"],_x=["top","bottom"],Ux=["bottom","top"];function Hx(e,t,a){switch(e){case"top":case"bottom":return a?t?Yd:$d:t?$d:Yd;case"left":case"right":return t?_x:Ux;default:return[]}}function ec(e,t,a,o){let r=Ea(e),n=Hx(Vt(e),a==="start",o);return r&&(n=n.map(s=>s+"-"+r),t&&(n=n.concat(n.map(vn)))),n}function xr(e){let t=Vt(e);return Nx[t]+e.slice(t.length)}function qx(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function dl(e){return typeof e!="number"?qx(e):{top:e,right:e,bottom:e,left:e}}function Oa(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function tc(e,t,a){let{reference:o,floating:r}=e,n=bt(t),s=Cn(t),l=bn(s),i=Vt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[l]/2-r[l]/2,g;switch(i){case"top":g={x:c,y:o.y-r.height};break;case"bottom":g={x:c,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-r.width,y:d};break;default:g={x:o.x,y:o.y}}let h=Ea(t);return h&&(g[s]+=f*(h==="end"?1:-1)*(a&&u?-1:1)),g}async function rc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:s,elements:l,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:g=0}=Tt(t,e),h=dl(g),m=l[f?d==="floating"?"reference":"floating":d],x=Oa(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:i})),w=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),b=await(n.isElement==null?void 0:n.isElement(v))&&await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1},C=Oa(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:v,strategy:i}):w);return{top:(x.top-C.top+h.top)/b.y,bottom:(C.bottom-x.bottom+h.bottom)/b.y,left:(x.left-C.left+h.left)/b.x,right:(C.right-x.right+h.right)/b.x}}var zx=50,nc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=a,l=s.detectOverflow?s:{...s,detectOverflow:rc},i=await(s.isRTL==null?void 0:s.isRTL(t)),u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=tc(u,o,i),f=o,g=0,h={};for(let p=0;p<n.length;p++){let m=n[p];if(!m)continue;let{name:x,fn:w}=m,{x:v,y:b,data:C,reset:L}=await w({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:u,platform:l,elements:{reference:e,floating:t}});c=v??c,d=b??d,h[x]={...h[x],...C},L&&g<zx&&(g++,typeof L=="object"&&(L.placement&&(f=L.placement),L.rects&&(u=L.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):L.rects),{x:c,y:d}=tc(u,f,i)),p=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}},sc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:s,elements:l,middlewareData:i}=t,{element:u,padding:c=0}=Tt(e,t)||{};if(u==null)return{};let d=dl(c),f={x:a,y:o},g=Cn(r),h=bn(g),p=await s.getDimensions(u),m=g==="y",x=m?"top":"left",w=m?"bottom":"right",v=m?"clientHeight":"clientWidth",b=n.reference[h]+n.reference[g]-f[g]-n.floating[h],C=f[g]-n.reference[g],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u)),I=L?L[v]:0;(!I||!await(s.isElement==null?void 0:s.isElement(L)))&&(I=l.floating[v]||n.floating[h]);let S=b/2-C/2,P=I/2-p[h]/2-1,E=Mt(d[x],P),M=Mt(d[w],P),D=I-p[h]-M,F=I/2-p[h]/2+S,U=ul(E,F,D),Z=!i.arrow&&Ea(r)!=null&&F!==U&&n.reference[h]/2-(F<E?E:M)-p[h]/2<0,W=Z?F<E?F-E:F-D:0;return{[g]:f[g]+W,data:{[g]:U,centerOffset:F-U-W,...Z&&{alignmentOffset:W}},reset:Z}}});var lc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:s,initialPlacement:l,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...m}=Tt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Vt(r),w=bt(l),v=Vt(l)===l,b=await(i.isRTL==null?void 0:i.isRTL(u.floating)),C=f||(v||!p?[xr(l)]:Qd(l)),L=h!=="none";!f&&L&&C.push(...ec(l,p,h,b));let I=[l,...C],S=await i.detectOverflow(t,m),P=[],E=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(S[x]),d){let U=Jd(r,s,b);P.push(S[U[0]],S[U[1]])}if(E=[...E,{placement:r,overflows:P}],!P.every(U=>U<=0)){var M,D;let U=(((M=n.flip)==null?void 0:M.index)||0)+1,Z=I[U];if(Z&&(!(d==="alignment"?w!==bt(Z):!1)||E.every(B=>bt(B.placement)===w?B.overflows[0]>0:!0)))return{data:{index:U,overflows:E},reset:{placement:Z}};let W=(D=E.filter(O=>O.overflows[0]<=0).sort((O,B)=>O.overflows[1]-B.overflows[1])[0])==null?void 0:D.placement;if(!W)switch(g){case"bestFit":{var F;let O=(F=E.filter(B=>{if(L){let H=bt(B.placement);return H===w||H==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(H=>H>0).reduce((H,T)=>H+T,0)]).sort((B,H)=>B[1]-H[1])[0])==null?void 0:F[0];O&&(W=O);break}case"initialPlacement":W=l;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function ac(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function oc(e){return Zd.some(t=>e[t]>=0)}var ic=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Tt(e,t);switch(r){case"referenceHidden":{let s=await o.detectOverflow(t,{...n,elementContext:"reference"}),l=ac(s,a.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:oc(l)}}}case"escaped":{let s=await o.detectOverflow(t,{...n,altBoundary:!0}),l=ac(s,a.floating);return{data:{escapedOffsets:l,escaped:oc(l)}}}default:return{}}}}};var uc=new Set(["left","top"]);async function Vx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Vt(a),l=Ea(a),i=bt(a)==="y",u=uc.has(s)?-1:1,c=n&&i?-1:1,d=Tt(t,e),{mainAxis:f,crossAxis:g,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof h=="number"&&(g=l==="end"?h*-1:h),i?{x:g*c,y:f*u}:{x:f*u,y:g*c}}var dc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:s,middlewareData:l}=t,i=await Vx(t,e);return s===((a=l.offset)==null?void 0:a.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:s}}}}},cc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:i={fn:w=>{let{x:v,y:b}=w;return{x:v,y:b}}},...u}=Tt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=bt(r),g=wn(f),h=c[g],p=c[f],m=(w,v)=>ul(v+d[w==="y"?"top":"left"],v,v-d[w==="y"?"bottom":"right"]);s&&(h=m(g,h)),l&&(p=m(f,p));let x=i.fn({...t,[g]:h,[f]:p});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[g]:s,[f]:l}}}}}},fc=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:s,rects:l,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Tt(e,t),f={x:r,y:n},g=bt(s),h=wn(g),p=f[h],m=f[g],x=Tt(u,t),w=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let C=h==="y"?"height":"width",L=l.reference[h]-l.floating[C]+w.mainAxis,I=l.reference[h]+l.reference[C]-w.mainAxis;p<L?p=L:p>I&&(p=I)}if(d){var v,b;let C=h==="y"?"width":"height",L=uc.has(Vt(s)),I=l.reference[g]-l.floating[C]+(L&&((v=i.offset)==null?void 0:v[g])||0)+(L?0:w.crossAxis),S=l.reference[g]+l.reference[C]+(L?0:((b=i.offset)==null?void 0:b[g])||0)-(L?w.crossAxis:0);m<I?m=I:m>S&&(m=S)}return{[h]:p,[g]:m}}}},pc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:s=()=>{},...l}=Tt(e,t),i=await r.detectOverflow(t,l),u=Vt(a),c=Ea(a),d=bt(a)==="y",{width:f,height:g}=o.floating,h,p;u==="top"||u==="bottom"?(h=u,p=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(p=u,h=c==="end"?"top":"bottom");let m=g-i.top-i.bottom,x=f-i.left-i.right,w=Mt(g-i[h],m),v=Mt(f-i[p],x),b=t.middlewareData.shift,C=!b,L=w,I=v;b!=null&&b.enabled.x&&(I=x),b!=null&&b.enabled.y&&(L=m),C&&!c&&(d?I=f-2*wt(i.left,i.right):L=g-2*wt(i.top,i.bottom)),await s({...t,availableWidth:I,availableHeight:L});let S=await r.getDimensions(n.floating);return f!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}};function Ln(){return typeof window<"u"}function Na(e){return gc(e)?(e.nodeName||"").toLowerCase():"#document"}function $e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Et(e){var t;return(t=(gc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gc(e){return Ln()?e instanceof Node||e instanceof $e(e).Node:!1}function Ct(e){return Ln()?e instanceof Element||e instanceof $e(e).Element:!1}function Gt(e){return Ln()?e instanceof HTMLElement||e instanceof $e(e).HTMLElement:!1}function mc(e){return!Ln()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $e(e).ShadowRoot}function br(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Lt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function hc(e){return/^(table|td|th)$/.test(Na(e))}function Cr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Gx=/transform|translate|scale|rotate|perspective|filter/,Wx=/paint|layout|strict|content/,Fa=e=>!!e&&e!=="none",cl;function yn(e){let t=Ct(e)?Lt(e):e;return Fa(t.transform)||Fa(t.translate)||Fa(t.scale)||Fa(t.rotate)||Fa(t.perspective)||!In()&&(Fa(t.backdropFilter)||Fa(t.filter))||Gx.test(t.willChange||"")||Wx.test(t.contain||"")}function xc(e){let t=sa(e);for(;Gt(t)&&!Io(t);){if(yn(t))return t;if(Cr(t))return null;t=sa(t)}return null}function In(){return cl==null&&(cl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),cl}function Io(e){return/^(html|body|#document)$/.test(Na(e))}function Lt(e){return $e(e).getComputedStyle(e)}function Lr(e){return Ct(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function sa(e){if(Na(e)==="html")return e;let t=e.assignedSlot||e.parentNode||mc(e)&&e.host||Et(e);return mc(t)?t.host:t}function vc(e){let t=sa(e);return Io(t)?(e.ownerDocument||e).body:Gt(t)&&br(t)?t:vc(t)}function Ba(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=vc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),s=$e(r);if(n){let l=Sn(s);return t.concat(s,s.visualViewport||[],br(r)?r:[],l&&a?Ba(l):[])}else return t.concat(r,Ba(r,[],a))}function Sn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Cc(e){let t=Lt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Gt(e),n=r?e.offsetWidth:a,s=r?e.offsetHeight:o,l=vr(a)!==n||vr(o)!==s;return l&&(a=n,o=s),{width:a,height:o,$:l}}function pl(e){return Ct(e)?e:e.contextElement}function So(e){let t=pl(e);if(!Gt(t))return At(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Cc(t),s=(n?vr(a.width):a.width)/o,l=(n?vr(a.height):a.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}var jx=At(0);function Lc(e){let t=$e(e);return!In()||!t.visualViewport?jx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===$e(e)}function _a(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=pl(e),s=At(1);t&&(o?Ct(o)&&(s=So(o)):s=So(e));let l=Kx(n,a,o)?Lc(n):At(0),i=(r.left+l.x)/s.x,u=(r.top+l.y)/s.y,c=r.width/s.x,d=r.height/s.y;if(n&&o){let f=$e(n),g=Ct(o)?$e(o):o,h=f,p=Sn(h);for(;p&&g!==h;){let m=So(p),x=p.getBoundingClientRect(),w=Lt(p),v=x.left+(p.clientLeft+parseFloat(w.paddingLeft))*m.x,b=x.top+(p.clientTop+parseFloat(w.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=v,u+=b,h=$e(p),p=Sn(h)}}return Oa({width:c,height:d,x:i,y:u})}function Rn(e,t){let a=Lr(e).scrollLeft;return t?t.left+a:_a(Et(e)).left+a}function yc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Rn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Xx(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",s=Et(o),l=t?Cr(t.floating):!1;if(o===s||l&&n)return a;let i={scrollLeft:0,scrollTop:0},u=At(1),c=At(0),d=Gt(o);if((d||!n)&&((Na(o)!=="body"||br(s))&&(i=Lr(o)),d)){let g=_a(o);u=So(o),c.x=g.x+o.clientLeft,c.y=g.y+o.clientTop}let f=s&&!d&&!n?yc(s,i):At(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function $x(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Yx(e){let t=Lr(e),a=e.ownerDocument.body,o=wt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=wt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Rn(e),s=-t.scrollTop;return Lt(a).direction==="rtl"&&(n+=wt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:s}}var Zx=25;function Jx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=$e(e),n=Et(e),s=r.visualViewport,l=n.clientWidth,i=n.clientHeight,u=0,c=0;if(s){let f=!In()||t==="fixed";o?f||(u=-s.offsetLeft,c=-s.offsetTop):(l=s.width,i=s.height,f&&(u=s.offsetLeft,c=s.offsetTop))}if(Rn(n)<=0){let f=n.ownerDocument,g=f.body,h=getComputedStyle(g),p=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,m=Math.abs(n.clientWidth-g.clientWidth-p),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=Zx&&(l-=x)}return{width:l,height:i,x:u,y:c}}function Qx(e,t){let a=_a(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=So(e),s=e.clientWidth*n.x,l=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:s,height:l,x:i,y:u}}function wc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Jx(e,a,t);else if(t==="document")o=Yx(Et(e));else if(Ct(t))o=Qx(t,a);else{let r=Lc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Oa(o)}function ev(e,t){let a=t.get(e);if(a)return a;let o=Ba(e,[],!1).filter(l=>Ct(l)&&Na(l)!=="body"),r=null,n=Lt(e).position==="fixed",s=n?sa(e):e;for(;Ct(s)&&!Io(s);){let l=Lt(s),i=yn(s),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&l.position==="static")?o=o.filter(d=>d!==s):r=l,s=sa(s)}return t.set(e,o),o}function tv(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,s=[...a==="clippingAncestors"?Cr(t)?[]:ev(t,this._c):[].concat(a),o],l=wc(t,s[0],r),i=l.top,u=l.right,c=l.bottom,d=l.left;for(let f=1;f<s.length;f++){let g=wc(t,s[f],r);i=wt(g.top,i),u=Mt(g.right,u),c=Mt(g.bottom,c),d=wt(g.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function av(e){let{width:t,height:a}=Cc(e);return{width:t,height:a}}function ov(e,t,a){let o=Gt(t),r=Et(t),n=a==="fixed",s=_a(e,!0,n,t),l={scrollLeft:0,scrollTop:0},i=At(0);if((o||!n)&&((Na(t)!=="body"||br(r))&&(l=Lr(t)),o)){let f=_a(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=Rn(r));let u=r&&!o&&!n?yc(r,l):At(0),c=s.left+l.scrollLeft-i.x-u.x,d=s.top+l.scrollTop-i.y-u.y;return{x:c,y:d,width:s.width,height:s.height}}function fl(e){return Lt(e).position==="static"}function bc(e,t){if(!Gt(e)||Lt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Et(e)===a&&(a=a.ownerDocument.body),a}function Ic(e,t){let a=$e(e);if(Cr(e))return a;if(!Gt(e)){let r=sa(e);for(;r&&!Io(r);){if(Ct(r)&&!fl(r))return r;r=sa(r)}return a}let o=bc(e,t);for(;o&&hc(o)&&fl(o);)o=bc(o,t);return o&&Io(o)&&fl(o)&&!yn(o)?a:o||xc(e)||a}var rv=async function(e){let t=this.getOffsetParent||Ic,a=this.getDimensions,o=await a(e.floating);return{reference:ov(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nv(e){return Lt(e).direction==="rtl"}var Sc={convertOffsetParentRelativeRectToViewportRelativeRect:Xx,getDocumentElement:Et,getClippingRect:tv,getOffsetParent:Ic,getElementRects:rv,getClientRects:$x,getDimensions:av,getScale:So,isElement:Ct,isRTL:nv};function Rc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function sv(e,t,a){let o=null,r,n=Et(e);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),s();let f=e.getBoundingClientRect(),{left:g,top:h,width:p,height:m}=f;if(c||t(),!p||!m)return;let x=wr(h),w=wr(n.clientWidth-(g+p)),v=wr(n.clientHeight-(h+m)),b=wr(g),L={rootMargin:-x+"px "+-w+"px "+-v+"px "+-b+"px",threshold:wt(0,Mt(1,d))||1},I=!0;function S(P){let E=P[0].intersectionRatio;if(!Rc(f,e.getBoundingClientRect()))return l();if(E!==d){if(!I)return l();E?l(!1,E):r=setTimeout(()=>{l(!1,1e-7)},1e3)}I=!1}try{o=new IntersectionObserver(S,{...L,root:n.ownerDocument})}catch{o=new IntersectionObserver(S,L)}o.observe(e)}let i=$e(e),u=()=>l(a);return i.addEventListener("resize",u),l(!0),()=>{i.removeEventListener("resize",u),s()}}function ml(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=pl(e),c=r||n?[...u?Ba(u):[],...t?Ba(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&l?sv(u,a,n):null,f=-1,g=null;s&&(g=new ResizeObserver(x=>{let[w]=x;w&&w.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=g)==null||v.observe(t)})),a()}),u&&!i&&g.observe(u),t&&g.observe(t));let h,p=i?_a(e):null;i&&m();function m(){let x=_a(e);p&&!Rc(p,x)&&a(),p=x,h=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(w=>{r&&w.removeEventListener("scroll",a),n&&w.removeEventListener("resize",a)}),d?.(),(x=g)==null||x.disconnect(),g=null,i&&cancelAnimationFrame(h)}}var Pc=dc;var Dc=cc,kc=lc,Mc=pc,Ac=ic,gl=sc;var Tc=fc,hl=(e,t,a)=>{let o=new Map,r=a??{},n={...Sc,...r.platform,_c:o};return nc(e,t,{...r,platform:n})};var Re=q(require("react"),1),Oc=require("react"),Fc=q(require("react-dom"),1),lv=typeof document<"u",iv=function(){},Pn=lv?Oc.useLayoutEffect:iv;function Dn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Dn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Dn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Bc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ec(e,t){let a=Bc(e);return Math.round(t*a)/a}function xl(e){let t=Re.useRef(e);return Pn(()=>{t.current=e}),t}function Nc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:s}={},transform:l=!0,whileElementsMounted:i,open:u}=e,[c,d]=Re.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,g]=Re.useState(o);Dn(f,o)||g(o);let[h,p]=Re.useState(null),[m,x]=Re.useState(null),w=Re.useCallback(B=>{B!==L.current&&(L.current=B,p(B))},[]),v=Re.useCallback(B=>{B!==I.current&&(I.current=B,x(B))},[]),b=n||h,C=s||m,L=Re.useRef(null),I=Re.useRef(null),S=Re.useRef(c),P=i!=null,E=xl(i),M=xl(r),D=xl(u),F=Re.useCallback(()=>{if(!L.current||!I.current)return;let B={placement:t,strategy:a,middleware:f};M.current&&(B.platform=M.current),hl(L.current,I.current,B).then(H=>{let T={...H,isPositioned:D.current!==!1};U.current&&!Dn(S.current,T)&&(S.current=T,Fc.flushSync(()=>{d(T)}))})},[f,t,a,M,D]);Pn(()=>{u===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(B=>({...B,isPositioned:!1})))},[u]);let U=Re.useRef(!1);Pn(()=>(U.current=!0,()=>{U.current=!1}),[]),Pn(()=>{if(b&&(L.current=b),C&&(I.current=C),b&&C){if(E.current)return E.current(b,C,F);F()}},[b,C,F,E,P]);let Z=Re.useMemo(()=>({reference:L,floating:I,setReference:w,setFloating:v}),[w,v]),W=Re.useMemo(()=>({reference:b,floating:C}),[b,C]),O=Re.useMemo(()=>{let B={position:a,left:0,top:0};if(!W.floating)return B;let H=Ec(W.floating,c.x),T=Ec(W.floating,c.y);return l?{...B,transform:"translate("+H+"px, "+T+"px)",...Bc(W.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:H,top:T}},[a,l,W.floating,c.x,c.y]);return Re.useMemo(()=>({...c,update:F,refs:Z,elements:W,floatingStyles:O}),[c,F,Z,W,O])}var uv=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?gl({element:o.current,padding:r}).fn(a):{}:o?gl({element:o,padding:r}).fn(a):{}}}},_c=(e,t)=>{let a=Pc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Uc=(e,t)=>{let a=Dc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Hc=(e,t)=>({fn:Tc(e).fn,options:[e,t]}),qc=(e,t)=>{let a=kc(e);return{name:a.name,fn:a.fn,options:[e,t]}},zc=(e,t)=>{let a=Mc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Vc=(e,t)=>{let a=Ac(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Gc=(e,t)=>{let a=uv(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Wc=q(require("react"),1);var dv=Object.defineProperty,cv=(e,t)=>dv(e,"name",{value:t,configurable:!0});function vl(e){let[t,a]=Wc.useState(void 0);return ue(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],s,l;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;s=u.inlineSize,l=u.blockSize}else s=e.offsetWidth,l=e.offsetHeight;a({width:s,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}cv(vl,"useSize");var Ro=require("react/jsx-runtime"),fv=Object.defineProperty,la=(e,t)=>fv(e,"name",{value:t,configurable:!0});var jc="Popper",[Kc,Po]=_e(jc),[pv,Xc]=Kc(jc),mv=la(e=>{let{__scopePopper:t,children:a}=e,[o,r]=We.useState(null),[n,s]=We.useState(void 0);return(0,Ro.jsx)(pv,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:s,children:a})},"Popper"),gv="PopperAnchor",hv=We.forwardRef(la(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,s=Xc(gv,o),l=We.useRef(null),i=s.onAnchorChange,u=We.useCallback(p=>{l.current=p,p&&i(p)},[i]),c=ae(a,u),d=We.useRef(null);We.useEffect(()=>{if(!r)return;let p=d.current;d.current=r.current,p!==d.current&&i(d.current)});let f=s.placementState&&kn(s.placementState),g=f?.[0],h=f?.[1];return r?null:(0,Ro.jsx)(re.div,{"data-radix-popper-side":g,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),$c="PopperContent",[xv,II]=Kc($c),vv=We.forwardRef(la(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:s="center",alignOffset:l=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:p,...m}=t,x=Xc($c,o),[w,v]=We.useState(null),b=ae(a,v),[C,L]=We.useState(null),I=vl(C),S=I?.width??0,P=I?.height??0,E=r+(s!=="center"?"-"+s:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},D=Array.isArray(c)?c:[c],F=D.length>0,U={padding:M,boundary:D.filter(Yc),altBoundary:F},{refs:Z,floatingStyles:W,placement:O,isPositioned:B,middlewareData:H}=Nc({strategy:"fixed",placement:E,whileElementsMounted:la((...X)=>ml(...X,{animationFrame:h==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[_c({mainAxis:n+P,alignmentAxis:l}),u&&Uc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Hc():void 0,...U}),u&&qc({...U}),zc({...U,apply:la(({elements:X,rects:_,availableWidth:$,availableHeight:Y})=>{let{width:oe,height:we}=_.reference,Pe=X.floating.style;Pe.setProperty("--radix-popper-available-width",`${$}px`),Pe.setProperty("--radix-popper-available-height",`${Y}px`),Pe.setProperty("--radix-popper-anchor-width",`${oe}px`),Pe.setProperty("--radix-popper-anchor-height",`${we}px`)},"apply")}),C&&Gc({element:C,padding:i}),wv({arrowWidth:S,arrowHeight:P}),g&&Vc({strategy:"referenceHidden",...U,boundary:F?U.boundary:void 0})]}),T=x.setPlacementState;ue(()=>(T(O),()=>{T(void 0)}),[O,T]);let[le,Q]=kn(O),ie=Te(p);ue(()=>{B&&ie?.()},[B,ie]);let ve=H.arrow?.x,R=H.arrow?.y,N=H.arrow?.centerOffset!==0,[G,k]=We.useState();return ue(()=>{w&&k(window.getComputedStyle(w).zIndex)},[w]),(0,Ro.jsx)("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:B?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:G,"--radix-popper-transform-origin":[H.transformOrigin?.x,H.transformOrigin?.y].join(" "),...H.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Ro.jsx)(xv,{scope:o,placedSide:le,placedAlign:Q,onArrowChange:L,arrowX:ve,arrowY:R,shouldHideArrow:N,children:(0,Ro.jsx)(re.div,{"data-side":le,"data-align":Q,...m,ref:b,style:{...m.style,animation:B?m.style?.animation:"none"}})})})},"PopperContent"));function Yc(e){return e!==null}la(Yc,"isNotNull");var wv=la(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,s=r.arrow?.centerOffset!==0,l=s?0:e.arrowWidth,i=s?0:e.arrowHeight,[u,c]=kn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+l/2,g=(r.arrow?.y??0)+i/2,h="",p="";return u==="bottom"?(h=s?d:`${f}px`,p=`${-i}px`):u==="top"?(h=s?d:`${f}px`,p=`${o.floating.height+i}px`):u==="right"?(h=`${-i}px`,p=s?d:`${g}px`):u==="left"&&(h=`${o.floating.width+i}px`,p=s?d:`${g}px`),{data:{x:h,y:p}}}}),"transformOrigin");function kn(e){let[t,a="center"]=e.split("-");return[t,a]}la(kn,"getSideAndAlignFromPlacement");var Mn=mv,An=hv,Tn=vv;var Fe=q(require("react"),1);var Cv=q(require("react"),1),En=q(require("react"),1),bv=Object.defineProperty,bl=(e,t)=>bv(e,"name",{value:t,configurable:!0}),wl=!1;function Jc(){let[e,t]=En.useState(wl);return En.useEffect(()=>{wl||(wl=!0,t(!0))},[]),e}bl(Jc,"useIsHydrated");var Qc=Cv[" useSyncExternalStore ".trim().toString()];function ef(){return()=>{}}bl(ef,"subscribe");function tf(){return Qc(ef,()=>!0,()=>!1)}bl(tf,"useIsHydratedModern");var af=typeof Qc=="function"?tf:Jc;var ia=require("react/jsx-runtime"),Lv=Object.defineProperty,Ua=(e,t)=>Lv(e,"name",{value:t,configurable:!0}),Cl="rovingFocusGroup.onEntryFocus",yv={bubbles:!1,cancelable:!0},On="RovingFocusGroup",[Ll,of,Iv]=Aa(On),[Sv,yl]=_e(On,[Iv]),[Rv,Pv]=Sv(On),Dv=Fe.forwardRef(Ua(function(t,a){return(0,ia.jsx)(Ll.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,ia.jsx)(Ll.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,ia.jsx)(kv,{...t,ref:a})})})},"RovingFocusGroup")),kv=Fe.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:s,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,g=Fe.useRef(null),h=ae(a,g),p=Ta(s),[m,x]=Dt({prop:l,defaultProp:i??null,onChange:u,caller:On}),[w,v]=Fe.useState(!1),b=Te(c),C=of(o),L=Fe.useRef(!1),[I,S]=Fe.useState(0);return Fe.useEffect(()=>{let P=g.current;if(P)return P.addEventListener(Cl,b),()=>P.removeEventListener(Cl,b)},[b]),(0,ia.jsx)(Rv,{scope:o,orientation:r,dir:p,loop:n,currentTabStopId:m,onItemFocus:Fe.useCallback(P=>x(P),[x]),onItemShiftTab:Fe.useCallback(()=>v(!0),[]),onFocusableItemAdd:Fe.useCallback(()=>S(P=>P+1),[]),onFocusableItemRemove:Fe.useCallback(()=>S(P=>P-1),[]),children:(0,ia.jsx)(re.div,{tabIndex:w||I===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:z(t.onMouseDown,()=>{L.current=!0}),onFocus:z(t.onFocus,P=>{let E=!L.current;if(P.target===P.currentTarget&&E&&!w){let M=new CustomEvent(Cl,yv);if(P.currentTarget.dispatchEvent(M),!M.defaultPrevented){let D=C().filter(O=>O.focusable),F=D.find(O=>O.active),U=D.find(O=>O.id===m),W=[F,U,...D].filter(Boolean).map(O=>O.ref.current);Il(W,d)}}L.current=!1}),onBlur:z(t.onBlur,()=>v(!1))})})},"RovingFocusGroupImpl")),Mv="RovingFocusGroupItem",Av=Fe.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:s,children:l,...i}=t,u=ot(),c=s||u,d=Pv(Mv,o),f=d.currentTabStopId===c,g=of(o),{onFocusableItemAdd:h,onFocusableItemRemove:p,currentTabStopId:m}=d,x=af();return ue(()=>{if(!(!x||!r))return h(),()=>p()},[x,r,h,p]),Fe.useEffect(()=>{if(!(x||!r))return h(),()=>p()},[x,r,h,p]),(0,ia.jsx)(Ll.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,ia.jsx)(re.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:z(t.onMouseDown,w=>{r?d.onItemFocus(c):w.preventDefault()}),onFocus:z(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:z(t.onKeyDown,w=>{if(w.key==="Tab"&&w.shiftKey){d.onItemShiftTab();return}if(w.target!==w.currentTarget)return;let v=nf(w,d.orientation,d.dir);if(v!==void 0){if(w.metaKey||w.ctrlKey||w.altKey||w.shiftKey)return;w.preventDefault();let C=g().filter(L=>L.focusable).map(L=>L.ref.current);if(v==="last")C.reverse();else if(v==="prev"||v==="next"){v==="prev"&&C.reverse();let L=C.indexOf(w.currentTarget);C=d.loop?sf(C,L+1):C.slice(L+1)}setTimeout(()=>Il(C))}}),children:typeof l=="function"?l({isCurrentTabStop:f,hasTabStop:m!=null}):l})})},"RovingFocusGroupItem")),Tv={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rf(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ua(rf,"getDirectionAwareKey");function nf(e,t,a){let o=rf(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Tv[o]}Ua(nf,"getFocusIntent");function Il(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ua(Il,"focusFirst");function sf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ua(sf,"wrapArray");var lf=Dv,uf=Av;var fe=require("react/jsx-runtime"),Fv=Object.defineProperty,pe=(e,t)=>Fv(e,"name",{value:t,configurable:!0}),Sl=["Enter"," "],Bv=["ArrowDown","PageUp","Home"],cf=["ArrowUp","PageDown","End"],Nv=[...Bv,...cf],eS={ltr:[...Sl,"ArrowRight"],rtl:[...Sl,"ArrowLeft"]};var Bn="Menu",[Rl,_v,Uv]=Aa(Bn),[Ha,Dl]=_e(Bn,[Uv,Po,yl]),kl=Po(),ff=yl(),[Hv,yr]=Ha(Bn),[qv,Ml]=Ha(Bn),zv=pe(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:s=!0}=e,l=kl(t),[i,u]=J.useState(null),c=J.useRef(!1),d=Te(n),f=Ta(r);return J.useEffect(()=>{let g=pe(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=pe(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),J.useEffect(()=>{if(!a)return;let g=pe(()=>d(!1),"handleBlur");return window.addEventListener("blur",g),()=>window.removeEventListener("blur",g)},[a,d]),(0,fe.jsx)(Mn,{...l,children:(0,fe.jsx)(Hv,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,fe.jsx)(qv,{scope:t,onClose:J.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:s,children:o})})})},"Menu"),Vv=J.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t,n=kl(o);return(0,fe.jsx)(An,{...n,...r,ref:a})},"MenuAnchor")),pf="MenuPortal",[Gv,Wv]=Ha(pf,{forceMount:void 0}),jv=pe(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=yr(pf,t);return(0,fe.jsx)(Gv,{scope:t,forceMount:a,children:(0,fe.jsx)(zt,{present:a||n.open,children:(0,fe.jsx)(mo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ua="MenuContent",[Kv,mf]=Ha(ua),Xv=J.forwardRef(pe(function(t,a){let o=Wv(ua,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,s=yr(ua,t.__scopeMenu),l=Ml(ua,t.__scopeMenu);return(0,fe.jsx)(Rl.Provider,{scope:t.__scopeMenu,children:(0,fe.jsx)(zt,{present:r||s.open,children:(0,fe.jsx)(Rl.Slot,{scope:t.__scopeMenu,children:l.modal?(0,fe.jsx)($v,{...n,ref:a}):(0,fe.jsx)(Yv,{...n,ref:a})})})})},"MenuContent")),$v=J.forwardRef(pe(function(t,a){let o=yr(ua,t.__scopeMenu),r=J.useRef(null),n=ae(a,r);return J.useEffect(()=>{let s=r.current;if(s)return Co(s)},[]),(0,fe.jsx)(gf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:z(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),Yv=J.forwardRef(pe(function(t,a){let o=yr(ua,t.__scopeMenu);return(0,fe.jsx)(gf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),Zv=Ve("MenuContent.ScrollLock"),gf=J.forwardRef(pe(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,disableOutsideScroll:p,...m}=t,x=yr(ua,o),w=Ml(ua,o),v=kl(o),b=ff(o),C=_v(o),[L,I]=J.useState(null),S=J.useRef(null),P=ae(a,S,x.onContentChange),E=J.useRef(0),M=J.useRef(""),D=J.useRef(0),F=J.useRef(null),U=J.useRef("right"),Z=J.useRef(0),W=p?Sa:J.Fragment,O=p?{as:Zv,allowPinchZoom:!0}:void 0,B=pe(T=>{let le=M.current+T,Q=C().filter(k=>!k.disabled),ie=document.activeElement,ve=Q.find(k=>k.ref.current===ie)?.textValue,R=Q.map(k=>k.textValue),N=bf(R,le,ve),G=Q.find(k=>k.textValue===N)?.ref.current;pe((function k(X){M.current=X,window.clearTimeout(E.current),X!==""&&(E.current=window.setTimeout(()=>k(""),1e3))}),"updateSearch")(le),G&&setTimeout(()=>G.focus())},"handleTypeaheadSearch");J.useEffect(()=>()=>window.clearTimeout(E.current),[]),na();let H=J.useCallback(T=>U.current===F.current?.side&&Lf(T,F.current?.area),[]);return(0,fe.jsx)(Kv,{scope:o,searchRef:M,onItemEnter:J.useCallback(T=>{H(T)&&T.preventDefault()},[H]),onItemLeave:J.useCallback(T=>{H(T)||(S.current?.focus(),I(null))},[H]),onTriggerLeave:J.useCallback(T=>{H(T)&&T.preventDefault()},[H]),pointerGraceTimerRef:D,onPointerGraceIntentChange:J.useCallback(T=>{F.current=T},[]),children:(0,fe.jsx)(W,{...O,children:(0,fe.jsx)(po,{asChild:!0,trapped:n,onMountAutoFocus:z(s,T=>{T.preventDefault(),S.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:(0,fe.jsx)(fo,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,children:(0,fe.jsx)(lf,{asChild:!0,...b,dir:w.dir,orientation:"vertical",loop:r,currentTabStopId:L,onCurrentTabStopIdChange:I,onEntryFocus:z(u,T=>{w.isUsingKeyboardRef.current||T.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,fe.jsx)(Tn,{role:"menu","aria-orientation":"vertical","data-state":hf(x.open),"data-radix-menu-content":"",dir:w.dir,...v,...m,ref:P,style:{outline:"none",...m.style},onKeyDown:z(m.onKeyDown,T=>{let Q=T.target.closest("[data-radix-menu-content]")===T.currentTarget,ie=T.ctrlKey||T.altKey||T.metaKey,ve=T.key.length===1;Q&&(T.key==="Tab"&&T.preventDefault(),!ie&&ve&&B(T.key));let R=S.current;if(T.target!==R||!Nv.includes(T.key))return;T.preventDefault();let G=C().filter(k=>!k.disabled).map(k=>k.ref.current);cf.includes(T.key)&&G.reverse(),vf(G)}),onBlur:z(t.onBlur,T=>{T.currentTarget.contains(T.target)||(window.clearTimeout(E.current),M.current="")}),onPointerMove:z(t.onPointerMove,Fn(T=>{let le=T.target,Q=Z.current!==T.clientX;if(T.currentTarget.contains(le)&&Q){let ie=T.clientX>Z.current?"right":"left";U.current=ie,Z.current=T.clientX}}))})})})})})})},"MenuContentImpl"));var Jv=J.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,fe.jsx)(re.div,{...r,ref:a})},"MenuLabel")),Pl="MenuItem",df="menu.itemSelect",Qv=J.forwardRef(pe(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,s=J.useRef(null),l=Ml(Pl,t.__scopeMenu),i=mf(Pl,t.__scopeMenu),u=ae(a,s),c=J.useRef(!1),d=pe(()=>{let f=s.current;if(!o&&f){let g=new CustomEvent(df,{bubbles:!0,cancelable:!0});f.addEventListener(df,h=>r?.(h),{once:!0}),ur(f,g),g.defaultPrevented?c.current=!1:l.onClose()}},"handleSelect");return(0,fe.jsx)(ew,{...n,ref:u,disabled:o,onClick:z(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:z(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:z(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||Sl.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),ew=J.forwardRef(pe(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...s}=t,l=mf(Pl,o),i=ff(o),u=J.useRef(null),c=ae(a,u),[d,f]=J.useState(!1),[g,h]=J.useState("");return J.useEffect(()=>{let p=u.current;p&&h((p.textContent??"").trim())},[s.children]),(0,fe.jsx)(Rl.ItemSlot,{scope:o,disabled:r,textValue:n??g,children:(0,fe.jsx)(uf,{asChild:!0,...i,focusable:!r,children:(0,fe.jsx)(re.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...s,ref:c,onPointerMove:z(t.onPointerMove,Fn(p=>{r?l.onItemLeave(p):(l.onItemEnter(p),p.defaultPrevented||p.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:z(t.onPointerLeave,Fn(p=>l.onItemLeave(p))),onFocus:z(t.onFocus,()=>f(!0)),onBlur:z(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var tw="MenuRadioGroup",[tS,aS]=Ha(tw,{value:void 0,onValueChange:pe(()=>{},"onValueChange")});var aw="MenuItemIndicator",[oS,rS]=Ha(aw,{checked:!1});var ow=J.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,fe.jsx)(re.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var rw="MenuSub",[nS,sS]=Ha(rw);function hf(e){return e?"open":"closed"}pe(hf,"getOpenState");function xf(e){return e==="indeterminate"}pe(xf,"isIndeterminate");function nw(e){return xf(e)?"indeterminate":e?"checked":"unchecked"}pe(nw,"getCheckedState");function vf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}pe(vf,"focusFirst");function wf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}pe(wf,"wrapArray");function bf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=wf(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}pe(bf,"getNextMatch");function Cf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let l=t[n],i=t[s],u=l.x,c=l.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}pe(Cf,"isPointInPolygon");function Lf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Cf(a,t)}pe(Lf,"isPointerInGraceArea");function Fn(e){return t=>t.pointerType==="mouse"?e(t):void 0}pe(Fn,"whenMouse");var yf=zv,If=Vv,Sf=jv,Rf=Xv;var Pf=Jv,Df=Qv;var kf=ow;var Ot=require("react/jsx-runtime"),lw=Object.defineProperty,qa=(e,t)=>lw(e,"name",{value:t,configurable:!0}),Al="DropdownMenu",[iw,yS]=_e(Al,[Dl]),za=Dl(),[uw,Mf]=iw(Al),dw=qa(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:s,modal:l=!0}=e,i=za(t),u=yt.useRef(null),[c,d]=Dt({prop:r,defaultProp:n??!1,onChange:s,caller:Al});return(0,Ot.jsx)(uw,{scope:t,triggerId:ot(),triggerRef:u,contentId:ot(),open:c,onOpenChange:d,onOpenToggle:yt.useCallback(()=>d(f=>!f),[d]),modal:l,children:(0,Ot.jsx)(yf,{...i,open:c,onOpenChange:d,dir:o,modal:l,children:a})})},"DropdownMenu"),cw="DropdownMenuTrigger",fw=yt.forwardRef(qa(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,s=Mf(cw,o),l=za(o),i=ae(a,s.triggerRef);return(0,Ot.jsx)(If,{asChild:!0,...l,children:(0,Ot.jsx)(re.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:z(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:z(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),pw=qa(e=>{let{__scopeDropdownMenu:t,...a}=e,o=za(t);return(0,Ot.jsx)(Sf,{...o,...a})},"DropdownMenuPortal"),mw="DropdownMenuContent",gw=yt.forwardRef(qa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Mf(mw,o),s=za(o),l=yt.useRef(!1);return(0,Ot.jsx)(Rf,{id:n.contentId,"aria-labelledby":n.triggerId,...s,...r,ref:a,onCloseAutoFocus:z(t.onCloseAutoFocus,i=>{l.current||n.triggerRef.current?.focus(),l.current=!1,i.preventDefault()}),onInteractOutside:z(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(l.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var hw=yt.forwardRef(qa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,Ot.jsx)(Pf,{...n,...r,ref:a})},"DropdownMenuLabel")),xw=yt.forwardRef(qa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,Ot.jsx)(Df,{...n,...r,ref:a})},"DropdownMenuItem"));var vw=yt.forwardRef(qa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,Ot.jsx)(kf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Af=dw,Tf=fw,Ef=pw,Tl=gw;var El=hw,Ol=xw;var Fl=vw;var Do=require("react/jsx-runtime"),Sr=Af,Rr=Tf;var ko=Ir.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Do.jsx)(Ef,{children:(0,Do.jsx)(Tl,{ref:o,sideOffset:t,className:ee("z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",e),...a})}));ko.displayName=Tl.displayName;var Wt=Ir.forwardRef(({className:e,inset:t,...a},o)=>(0,Do.jsx)(Ol,{ref:o,className:ee("relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...a}));Wt.displayName=Ol.displayName;var bw=Ir.forwardRef(({className:e,inset:t,...a},o)=>(0,Do.jsx)(El,{ref:o,className:ee("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...a}));bw.displayName=El.displayName;var Cw=Ir.forwardRef(({className:e,...t},a)=>(0,Do.jsx)(Fl,{ref:a,className:ee("-mx-1 my-1 h-px bg-muted",e),...t}));Cw.displayName=Fl.displayName;var Of=q(require("react"),1);var Ff=require("react/jsx-runtime"),jt=Of.forwardRef(({className:e,type:t,...a},o)=>(0,Ff.jsx)("input",{type:t,className:ee("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...a}));jt.displayName="Input";var _f=q(require("react"),1);var Bf=q(require("react"),1);var Nf=require("react/jsx-runtime"),Lw=Object.defineProperty,yw=(e,t)=>Lw(e,"name",{value:t,configurable:!0}),Iw=Bf.forwardRef(yw(function(t,a){return(0,Nf.jsx)(re.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Bl=Iw;var Uf=require("react/jsx-runtime"),Va=_f.forwardRef(({className:e,...t},a)=>(0,Uf.jsx)(Bl,{ref:a,className:ee("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e),...t}));Va.displayName=Bl.displayName;var ca=q(require("react"),1);var A=q(require("react"),1),Ul=q(require("react-dom"),1);var Rw=Object.defineProperty,Pw=(e,t)=>Rw(e,"name",{value:t,configurable:!0});function Nn(e,[t,a]){return Math.min(a,Math.max(t,e))}Pw(Nn,"clamp");var _n=q(require("react"),1),Dw=Object.defineProperty,kw=(e,t)=>Dw(e,"name",{value:t,configurable:!0});function Nl(e){let t=_n.useRef({value:e,previous:e});return _n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}kw(Nl,"usePrevious");var Mw=q(require("react"),1);var Aw=require("react/jsx-runtime");var Hf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var V=require("react/jsx-runtime"),Tw=Object.defineProperty,se=(e,t)=>Tw(e,"name",{value:t,configurable:!0}),Ew=[" ","Enter","ArrowUp","ArrowDown"],Ow=[" ","Enter"],Mo="Select",[Hn,qn,Fw]=Aa(Mo),[Wa,oR]=_e(Mo,[Fw,Po]),Hl=Po(),[Bw,da]=Wa(Mo),[Nw,_w]=Wa(Mo);function Wf(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:s,defaultValue:l,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:g,form:h,internal_do_not_use_render:p}=e,m=Hl(t),[x,w]=A.useState(null),[v,b]=A.useState(null),[C,L]=A.useState(!1),I=Ta(u),[S,P]=Dt({prop:o,defaultProp:r??!1,onChange:n,caller:Mo}),[E,M]=Dt({prop:s,defaultProp:l,onChange:i,caller:Mo}),D=A.useRef(null),F=A.useRef(E);A.useEffect(()=>{let Q=h?x?.ownerDocument.getElementById(h):x?.form;if(Q instanceof HTMLFormElement){let ie=se(()=>M(F.current),"reset");return Q.addEventListener("reset",ie),()=>Q.removeEventListener("reset",ie)}},[h,x,M]);let U=x?!!h||!!x.closest("form"):!0,[Z,W]=A.useState(new Set),O=ot(),B=Array.from(Z).map(Q=>Q.props.value).join(";"),H=A.useCallback(Q=>{W(ie=>new Set(ie).add(Q))},[]),T=A.useCallback(Q=>{W(ie=>{let ve=new Set(ie);return ve.delete(Q),ve})},[]),le={required:g,trigger:x,onTriggerChange:w,valueNode:v,onValueNodeChange:b,valueNodeHasChildren:C,onValueNodeHasChildrenChange:L,contentId:O,value:E,onValueChange:M,open:S,onOpenChange:P,dir:I,triggerPointerDownPosRef:D,disabled:f,name:c,autoComplete:d,form:h,nativeOptions:Z,nativeSelectKey:B,isFormControl:U};return(0,V.jsx)(Mn,{...m,children:(0,V.jsx)(Bw,{scope:t,...le,children:(0,V.jsx)(Hn.Provider,{scope:t,children:(0,V.jsx)(Nw,{scope:t,onNativeOptionAdd:H,onNativeOptionRemove:T,children:ap(p)?p(le):a})})})})}se(Wf,"SelectProvider");var jf=se(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,V.jsx)(Wf,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,V.jsxs)(V.Fragment,{children:[a,r?(0,V.jsx)(tb,{__scopeSelect:t}):null]})})},"Select"),Uw="SelectTrigger",ql=A.forwardRef(se(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,s=Hl(o),l=da(Uw,o),i=l.disabled||r,u=ae(a,l.onTriggerChange),c=qn(o),d=A.useRef("touch"),[f,g,h]=$l(m=>{let x=c().filter(b=>!b.disabled),w=x.find(b=>b.value===l.value),v=Yl(x,m,w);v!==void 0&&l.onValueChange(v.value)}),p=se(m=>{i||(l.onOpenChange(!0),h()),m&&(l.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,V.jsx)(An,{asChild:!0,...s,children:(0,V.jsx)(re.button,{type:"button",role:"combobox","aria-controls":l.open?l.contentId:void 0,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Pr(l.value)?"":void 0,...n,ref:u,onClick:z(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&p(m)}),onPointerDown:z(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(p(m),m.preventDefault())}),onKeyDown:z(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&g(m.key),!(x&&m.key===" ")&&Ew.includes(m.key)&&(p(),m.preventDefault())})})})},"SelectTrigger")),Hw="SelectValue",Kf=A.forwardRef(se(function(t,a){let{__scopeSelect:o,className:r,style:n,children:s,placeholder:l="",...i}=t,u=da(Hw,o),{onValueNodeHasChildrenChange:c}=u,d=s!==void 0,f=ae(a,u.onValueNodeChange);ue(()=>{c(d)},[c,d]);let g=Pr(u.value);return(0,V.jsx)(re.span,{...i,asChild:g?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,V.jsx)(A.Fragment,{children:g?l:s},g?"placeholder":"value")})},"SelectValue")),Xf=A.forwardRef(se(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,V.jsx)(re.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),qw="SelectPortal",[zw,Vw]=Wa(qw,{forceMount:void 0}),$f=se(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,V.jsx)(zw,{scope:e.__scopeSelect,forceMount:a,children:(0,V.jsx)(mo,{asChild:!0,...o})})},"SelectPortal"),Ga="SelectContent",zl=A.forwardRef(se(function(t,a){let o=Vw(Ga,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,s=da(Ga,t.__scopeSelect),[l,i]=A.useState();return ue(()=>{i(new DocumentFragment)},[]),(0,V.jsx)(zt,{present:r||s.open,children:({present:u})=>u?(0,V.jsx)(jw,{...n,ref:a}):(0,V.jsx)(Gw,{...n,fragment:l})})},"SelectContent")),Gw=A.forwardRef(se(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ul.createPortal((0,V.jsx)(Yf,{scope:o,children:(0,V.jsx)(Hn.Slot,{scope:o,children:(0,V.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),It=10,[Yf,ja]=Wa(Ga),Ww=Ve("SelectContent.RemoveScroll"),jw=A.forwardRef(se(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:l,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:p,hideWhenDetached:m,avoidCollisions:x,...w}=t,v=da(Ga,o),[b,C]=A.useState(null),[L,I]=A.useState(null),S=ae(a,C),[P,E]=A.useState(null),[M,D]=A.useState(null),F=qn(o),[U,Z]=A.useState(!1),W=A.useRef(!1);A.useEffect(()=>{if(b)return Co(b)},[b]),na();let O=A.useCallback(k=>{let[X,..._]=F().map(oe=>oe.ref.current),[$]=_.slice(-1),Y=document.activeElement;for(let oe of k)if(oe===Y||(oe?.scrollIntoView({block:"nearest"}),oe===X&&L&&(L.scrollTop=0),oe===$&&L&&(L.scrollTop=L.scrollHeight),oe?.focus(),document.activeElement!==Y))return},[F,L]),B=A.useCallback(()=>O([P,b]),[O,P,b]);A.useEffect(()=>{U&&B()},[U,B]);let{onOpenChange:H,triggerPointerDownPosRef:T}=v;A.useEffect(()=>{if(b){let k={x:0,y:0},X=se($=>{k={x:Math.abs(Math.round($.pageX)-(T.current?.x??0)),y:Math.abs(Math.round($.pageY)-(T.current?.y??0))}},"handlePointerMove"),_=se($=>{k.x<=10&&k.y<=10?$.preventDefault():$.composedPath().includes(b)||H(!1),document.removeEventListener("pointermove",X),T.current=null},"handlePointerUp");return T.current!==null&&(document.addEventListener("pointermove",X),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",_,{capture:!0})}}},[b,H,T]),A.useEffect(()=>{let k=se(()=>H(!1),"close");return window.addEventListener("blur",k),window.addEventListener("resize",k),()=>{window.removeEventListener("blur",k),window.removeEventListener("resize",k)}},[H]);let[le,Q]=$l(k=>{let X=F().filter(Y=>!Y.disabled),_=X.find(Y=>Y.ref.current===document.activeElement),$=Yl(X,k,_);$&&setTimeout(()=>$.ref.current?.focus())}),ie=A.useCallback((k,X,_)=>{let $=!W.current&&!_;(v.value!==void 0&&v.value===X||$)&&(E(k),$&&(W.current=!0))},[v.value]),ve=A.useCallback(()=>b?.focus(),[b]),R=A.useCallback((k,X,_)=>{let $=!W.current&&!_;(v.value!==void 0&&v.value===X||$)&&D(k)},[v.value]),N=r==="popper"?qf:Kw,G=N===qf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:p,hideWhenDetached:m,avoidCollisions:x}:{};return(0,V.jsx)(Yf,{scope:o,content:b,viewport:L,onViewportChange:I,itemRefCallback:ie,selectedItem:P,onItemLeave:ve,itemTextRefCallback:R,focusSelectedItem:B,selectedItemText:M,position:r,isPositioned:U,searchRef:le,children:(0,V.jsx)(Sa,{as:Ww,allowPinchZoom:!0,children:(0,V.jsx)(po,{asChild:!0,trapped:v.open,onMountAutoFocus:k=>{k.preventDefault()},onUnmountAutoFocus:z(n,k=>{v.trigger?.focus({preventScroll:!0}),k.preventDefault()}),children:(0,V.jsx)(fo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:k=>k.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,V.jsx)(N,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed",dir:v.dir,onContextMenu:k=>k.preventDefault(),...w,...G,onPlaced:()=>Z(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:z(w.onKeyDown,k=>{let X=k.ctrlKey||k.altKey||k.metaKey;if(k.key==="Tab"&&k.preventDefault(),!X&&k.key.length===1&&Q(k.key),["ArrowUp","ArrowDown","Home","End"].includes(k.key)){let $=F().filter(Y=>!Y.disabled).map(Y=>Y.ref.current);if(["ArrowUp","End"].includes(k.key)&&($=$.slice().reverse()),["ArrowUp","ArrowDown"].includes(k.key)){let Y=k.target,oe=$.indexOf(Y);$=$.slice(oe+1)}setTimeout(()=>O($)),k.preventDefault()}})})})})})})},"SelectContentImpl")),Kw=A.forwardRef(se(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,s=da(Ga,o),l=ja(Ga,o),[i,u]=A.useState(null),[c,d]=A.useState(null),f=ae(a,d),g=qn(o),h=A.useRef(!1),p=A.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:w,focusSelectedItem:v}=l,b=A.useCallback(()=>{if(s.trigger&&s.valueNode&&i&&c&&m&&x&&w){let S=s.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),E=s.valueNode.getBoundingClientRect(),M=w.getBoundingClientRect();if(s.dir!=="rtl"){let Y=M.left-P.left,oe=E.left-Y,we=S.left-oe,Pe=S.width+we,St=Math.max(Pe,P.width),$a=window.innerWidth-It,Ya=Nn(oe,[It,Math.max(It,$a-St)]);i.style.minWidth=Pe+"px",i.style.left=Ya+"px"}else{let Y=P.right-M.right,oe=window.innerWidth-E.right-Y,we=window.innerWidth-S.right-oe,Pe=S.width+we,St=Math.max(Pe,P.width),$a=window.innerWidth-It,Ya=Nn(oe,[It,Math.max(It,$a-St)]);i.style.minWidth=Pe+"px",i.style.right=Ya+"px"}let D=g(),F=window.innerHeight-It*2,U=m.scrollHeight,Z=window.getComputedStyle(c),W=parseInt(Z.borderTopWidth,10),O=parseInt(Z.paddingTop,10),B=parseInt(Z.borderBottomWidth,10),H=parseInt(Z.paddingBottom,10),T=W+O+U+H+B,le=Math.min(x.offsetHeight*5,T),Q=window.getComputedStyle(m),ie=parseInt(Q.paddingTop,10),ve=parseInt(Q.paddingBottom,10),R=S.top+S.height/2-It,N=F-R,G=x.offsetHeight/2,k=x.offsetTop+G,X=W+O+k,_=T-X;if(X<=R){let Y=D.length>0&&x===D[D.length-1].ref.current;i.style.bottom="0px";let oe=c.clientHeight-m.offsetTop-m.offsetHeight,we=Math.max(N,G+(Y?ve:0)+oe+B),Pe=X+we;i.style.height=Pe+"px"}else{let Y=D.length>0&&x===D[0].ref.current;i.style.top="0px";let we=Math.max(R,W+m.offsetTop+(Y?ie:0)+G)+_;i.style.height=we+"px",m.scrollTop=X-R+m.offsetTop}i.style.margin=`${It}px 0`,i.style.minHeight=le+"px",i.style.maxHeight=F+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[g,s.trigger,s.valueNode,i,c,m,x,w,s.dir,r]);ue(()=>b(),[b]);let[C,L]=A.useState();ue(()=>{c&&L(window.getComputedStyle(c).zIndex)},[c]);let I=A.useCallback(S=>{S&&p.current===!0&&(b(),v?.(),p.current=!1)},[b,v]);return(0,V.jsx)(Xw,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:I,children:(0,V.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:C},children:(0,V.jsx)(re.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),qf=A.forwardRef(se(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=It,...s}=t,l=Hl(o);return(0,V.jsx)(Tn,{...l,...s,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[Xw,Vl]=Wa(Ga,{}),zf="SelectViewport",Zf=A.forwardRef(se(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,s=ja(zf,o),l=Vl(zf,o),i=ae(a,s.onViewportChange),u=A.useRef(0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,V.jsx)(Hn.Slot,{scope:o,children:(0,V.jsx)(re.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:z(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:g}=l;if(g?.current&&f){let h=Math.abs(u.current-d.scrollTop);if(h>0){let p=window.innerHeight-It*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),w=Math.max(m,x);if(w<p){let v=w+h,b=Math.min(p,v),C=v-b;f.style.height=b+"px",f.style.bottom==="0px"&&(d.scrollTop=C>0?C:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),$w="SelectGroup",[rR,Yw]=Wa($w);var Zw="SelectLabel",Gl=A.forwardRef(se(function(t,a){let{__scopeSelect:o,...r}=t,n=Yw(Zw,o);return(0,V.jsx)(re.div,{id:n.id,...r,ref:a})},"SelectLabel")),_l="SelectItem",[Jw,Jf]=Wa(_l),Wl=A.forwardRef(se(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...l}=t,i=da(_l,o),u=ja(_l,o),c=i.value===r,[d,f]=A.useState(s??""),[g,h]=A.useState(!1),p=Te(b=>u.itemRefCallback?.(b,r,n)),m=ae(a,p),x=ot(),w=A.useRef("touch"),v=se(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,V.jsx)(Jw,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:A.useCallback(b=>{f(C=>C||(b?.textContent??"").trim())},[]),children:(0,V.jsx)(Hn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,V.jsx)(re.div,{role:"option","aria-labelledby":x,"data-highlighted":g?"":void 0,"aria-selected":c&&g,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...l,ref:m,onFocus:z(l.onFocus,()=>h(!0)),onBlur:z(l.onBlur,()=>h(!1)),onClick:z(l.onClick,()=>{w.current!=="mouse"&&v()}),onPointerUp:z(l.onPointerUp,()=>{w.current==="mouse"&&v()}),onPointerDown:z(l.onPointerDown,b=>{w.current=b.pointerType}),onPointerMove:z(l.onPointerMove,b=>{w.current=b.pointerType,n?u.onItemLeave?.():w.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:z(l.onPointerLeave,b=>{b.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:z(l.onKeyDown,b=>{n||b.target!==b.currentTarget||u.searchRef?.current!==""&&b.key===" "||(Ow.includes(b.key)&&v(),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),Un="SelectItemText",Qf=A.forwardRef(se(function(t,a){let{__scopeSelect:o,className:r,style:n,...s}=t,l=da(Un,o),i=ja(Un,o),u=Jf(Un,o),c=_w(Un,o),[d,f]=A.useState(null),g=Te(v=>i.itemTextRefCallback?.(v,u.value,u.disabled)),h=ae(a,f,u.onItemTextChange,g),p=d?.textContent,m=A.useMemo(()=>(0,V.jsx)("option",{value:u.value,disabled:u.disabled,children:p},u.value),[u.disabled,u.value,p]),{onNativeOptionAdd:x,onNativeOptionRemove:w}=c;return ue(()=>(x(m),()=>w(m)),[x,w,m]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(re.span,{id:u.textId,...s,ref:h}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren&&!Pr(l.value)?Ul.createPortal(s.children,l.valueNode):null]})},"SelectItemText")),Qw="SelectItemIndicator",ep=A.forwardRef(se(function(t,a){let{__scopeSelect:o,...r}=t;return Jf(Qw,o).isSelected?(0,V.jsx)(re.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Vf="SelectScrollUpButton",jl=A.forwardRef(se(function(t,a){let o=ja(Vf,t.__scopeSelect),r=Vl(Vf,t.__scopeSelect),[n,s]=A.useState(!1),l=ae(a,r.onScrollButtonChange);return ue(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;s(d)};var i=u;se(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(tp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),Gf="SelectScrollDownButton",Kl=A.forwardRef(se(function(t,a){let o=ja(Gf,t.__scopeSelect),r=Vl(Gf,t.__scopeSelect),[n,s]=A.useState(!1),l=ae(a,r.onScrollButtonChange);return ue(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;s(f)};var i=u;se(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(tp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),tp=A.forwardRef(se(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,s=ja("SelectScrollButton",o),l=A.useRef(null),i=qn(o),u=A.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return A.useEffect(()=>()=>u(),[u]),ue(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,V.jsx)(re.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:z(n.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:z(n.onPointerMove,()=>{s.onItemLeave?.(),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:z(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Xl=A.forwardRef(se(function(t,a){let{__scopeSelect:o,...r}=t;return(0,V.jsx)(re.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var eb="SelectBubbleInput",tb=A.forwardRef(se(function({__scopeSelect:t,...a},o){let r=da(eb,t),{value:n,onValueChange:s,required:l,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:g}=r,h=A.useRef(null),p=ae(o,h),m=n??"",x=Nl(m),w=Array.from(f).some(v=>(v.props.value??"")==="");return A.useEffect(()=>{let v=h.current;if(!v)return;let b=window.HTMLSelectElement.prototype,L=Object.getOwnPropertyDescriptor(b,"value").set;if(x!==m&&L){let I=new Event("change",{bubbles:!0});L.call(v,m),v.dispatchEvent(I)}},[x,m]),(0,V.jsxs)(re.select,{"aria-hidden":!0,required:l,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:v=>s(v.target.value),...a,style:{...Hf,...a.style},ref:p,defaultValue:m,children:[Pr(n)&&!w?(0,V.jsx)("option",{value:""}):null,Array.from(f)]},g)},"SelectBubbleInput"));function ap(e){return typeof e=="function"}se(ap,"isFunction");function Pr(e){return e===""||e===void 0}se(Pr,"shouldShowPlaceholder");function $l(e){let t=Te(e),a=A.useRef(""),o=A.useRef(0),r=A.useCallback(s=>{let l=a.current+s;t(l),se((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(l)},[t]),n=A.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return A.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}se($l,"useTypeaheadSearch");function Yl(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=op(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}se(Yl,"findNextItem");function op(e,t){return e.map((a,o)=>e[(t+o)%e.length])}se(op,"wrapArray");var ye=require("react/jsx-runtime"),Zl=jf;var Jl=Kf,zn=ca.forwardRef(({className:e,children:t,...a},o)=>(0,ye.jsxs)(ql,{ref:o,className:ee("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...a,children:[t,(0,ye.jsx)(Xf,{asChild:!0,children:(0,ye.jsx)(no,{className:"h-4 w-4 opacity-50"})})]}));zn.displayName=ql.displayName;var rp=ca.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(jl,{ref:a,className:ee("flex cursor-default items-center justify-center py-1",e),...t,children:(0,ye.jsx)(Yo,{className:"h-4 w-4"})}));rp.displayName=jl.displayName;var np=ca.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Kl,{ref:a,className:ee("flex cursor-default items-center justify-center py-1",e),...t,children:(0,ye.jsx)(no,{className:"h-4 w-4"})}));np.displayName=Kl.displayName;var Vn=ca.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,ye.jsx)($f,{children:(0,ye.jsxs)(zl,{ref:r,className:ee("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:a,...o,children:[(0,ye.jsx)(rp,{}),(0,ye.jsx)(Zf,{className:ee("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,ye.jsx)(np,{})]})}));Vn.displayName=zl.displayName;var ob=ca.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Gl,{ref:a,className:ee("px-2 py-1.5 text-sm font-semibold",e),...t}));ob.displayName=Gl.displayName;var Ao=ca.forwardRef(({className:e,children:t,...a},o)=>(0,ye.jsxs)(Wl,{ref:o,className:ee("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...a,children:[(0,ye.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,ye.jsx)(ep,{children:(0,ye.jsx)(aa,{className:"h-4 w-4"})})}),(0,ye.jsx)(Qf,{children:t})]}));Ao.displayName=Wl.displayName;var rb=ca.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Xl,{ref:a,className:ee("-mx-1 my-1 h-px bg-muted",e),...t}));rb.displayName=Xl.displayName;var sp=q(require("react"),1);var lp=require("react/jsx-runtime"),Ql=sp.forwardRef(({className:e,...t},a)=>(0,lp.jsx)("textarea",{className:ee("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));Ql.displayName="Textarea";var Kt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},Gn=["high","medium","low"],ip="#94a3b8";function up(e,t){return t?e.find(a=>a.name===t)?.color??ip:ip}var je=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),ei=e=>e==="high"||e==="medium"||e==="low"?Kt[e].label:"";function dp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let s=a.label??o,l=a.priority&&ei(a.priority)||o;return je(t("actCreated"),{column:a.column??"",label:s,priority:l})}case"card_moved":return je(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?je(t("actLabelSet"),{to:n}):r!=null&&n==null?je(t("actLabelCleared"),{from:r}):je(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let s=r?ei(r)||r:o,l=n?ei(n)||n:o;return r==null&&n!=null?je(t("actPrioritySet"),{to:l}):r!=null&&n==null?je(t("actPriorityCleared"),{from:s}):je(t("actPriority"),{from:s,to:l})}case"card_title_changed":return je(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_deleted":return t("actDeleted");case"column_added":return je(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return je(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return je(t("actColumnDeleted"),{column:a.column??""});case"label_added":return je(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return je(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return je(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return je(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Wn=e=>String(e).padStart(2,"0");function cp(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Wn(t.getMonth()+1)}-${Wn(t.getDate())} ${Wn(t.getHours())}:${Wn(t.getMinutes())}`}var mt=require("react/jsx-runtime");function fp({activities:e}){let t=Xe();if(e.length===0)return(0,mt.jsx)("p",{className:"text-xs text-muted-foreground",children:t("activityEmpty")});let a=[...e].reverse();return(0,mt.jsx)("ol",{className:"relative space-y-3.5 border-l border-[var(--dsw-alias-border-l2)] pl-4",children:a.map(o=>{let r=o.source==="agent";return(0,mt.jsxs)("li",{className:"relative",children:[(0,mt.jsx)("span",{className:`absolute -left-[21px] top-1.5 h-2 w-2 rounded-full ${r?"bg-sky-500":"bg-emerald-500"}`}),(0,mt.jsxs)("div",{className:"flex items-center gap-1.5 text-[11px] text-muted-foreground",children:[(0,mt.jsx)(Zo,{className:"h-3 w-3"}),(0,mt.jsx)("time",{className:"tabular-nums",children:cp(o.ts)}),(0,mt.jsx)("span",{children:"\xB7"}),(0,mt.jsx)("span",{className:`font-medium ${r?"text-sky-500":"text-emerald-500"}`,children:t(r?"actorAgent":"actorHuman")})]}),(0,mt.jsx)("p",{className:"mt-1 text-[13px] leading-snug text-foreground",children:dp(o,t)})]},o.id)})})}var j=require("react/jsx-runtime");function pp({open:e,card:t,labels:a,activities:o,onOpenChange:r,onSave:n,onDelete:s,onChatWithAgent:l}){let i=Xe(),[u,c]=(0,jn.useState)({id:"",title:"",note:"",label:"",priority:""});(0,jn.useEffect)(()=>{e&&c({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let d=f=>c(g=>({...g,...f}));return(0,j.jsx)(yo,{open:e,onOpenChange:r,children:(0,j.jsxs)(Pa,{className:"sm:max-w-xl","aria-describedby":void 0,onOpenAutoFocus:f=>f.preventDefault(),children:[(0,j.jsx)(Da,{children:(0,j.jsx)(ka,{className:"sr-only",children:i(t?"editCard":"addCard")})}),(0,j.jsxs)("div",{className:"grid gap-4 py-2",children:[(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsxs)(Va,{htmlFor:"card-title",className:"flex items-center justify-between",children:[(0,j.jsx)("span",{children:i("fieldTitle")}),t&&(0,j.jsxs)("span",{className:"text-[11px] font-medium text-muted-foreground",children:[i("fieldId"),": ",t.id]})]}),(0,j.jsx)(jt,{id:"card-title",value:u.title,placeholder:i("titlePlaceholder"),onChange:f=>d({title:f.target.value})})]}),(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsx)(Va,{children:i("fieldLabel")}),(0,j.jsxs)(Zl,{value:u.label||"__none__",onValueChange:f=>d({label:f==="__none__"?"":f}),children:[(0,j.jsx)(zn,{children:(0,j.jsx)(Jl,{placeholder:i("noLabel")})}),(0,j.jsxs)(Vn,{children:[(0,j.jsx)(Ao,{value:"__none__",children:i("noLabel")}),a.map(f=>(0,j.jsx)(Ao,{value:f.name,children:f.name},f.name))]})]})]}),(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsx)(Va,{children:i("fieldPriority")}),(0,j.jsxs)(Zl,{value:u.priority||"__none__",onValueChange:f=>d({priority:f==="__none__"?"":f}),children:[(0,j.jsx)(zn,{children:(0,j.jsx)(Jl,{placeholder:i("noPriority")})}),(0,j.jsxs)(Vn,{children:[(0,j.jsx)(Ao,{value:"__none__",children:i("noPriority")}),Gn.map(f=>{let g=Kt[f];return(0,j.jsx)(Ao,{value:f,children:(0,j.jsxs)("span",{className:"flex items-center gap-2",children:[(0,j.jsx)("span",{className:"h-2 w-2 rounded-full",style:{background:g.color}}),g.label]})},f)})]})]})]}),(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsx)(Va,{htmlFor:"card-note",children:i("fieldNote")}),(0,j.jsx)(Ql,{id:"card-note",value:u.note,placeholder:i("notePlaceholder"),rows:5,onChange:f=>d({note:f.target.value})})]}),t&&(0,j.jsxs)("div",{className:"grid gap-2 rounded-xl border border-[var(--dsw-alias-border-l2)] p-3",children:[(0,j.jsx)(Va,{className:"text-xs text-muted-foreground",children:i("activityTitle")}),(0,j.jsx)("div",{className:"max-h-48 overflow-y-auto pr-1",children:(0,j.jsx)(fp,{activities:o})})]})]}),(0,j.jsxs)(gr,{children:[t&&s&&(0,j.jsxs)(Ae,{variant:"destructive",className:"mr-auto",onClick:()=>{s(t),r(!1)},children:[(0,j.jsx)(_t,{className:"h-4 w-4"}),i("delete")]}),(0,j.jsxs)(Sr,{children:[(0,j.jsx)(Rr,{asChild:!0,children:(0,j.jsxs)(Ae,{variant:"outline",disabled:!u.title.trim()&&!u.note.trim(),children:[(0,j.jsx)(tr,{className:"h-4 w-4"}),i("chatWithAgent")]})}),(0,j.jsxs)(ko,{align:"end",children:[(0,j.jsx)(Wt,{onClick:()=>{l(u,"current"),r(!1)},children:i("chatCurrentSession")}),(0,j.jsx)(Wt,{onClick:()=>{l(u,"new"),r(!1)},children:i("chatNewSession")})]})]}),(0,j.jsx)(Ae,{disabled:!u.title.trim(),onClick:()=>{n(u),r(!1)},children:i("save")})]})]})})}var mp=require("react/jsx-runtime"),nb=an("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow",secondary:"border-transparent bg-secondary text-secondary-foreground",destructive:"border-transparent bg-destructive text-destructive-foreground shadow",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ti({className:e,variant:t,...a}){return(0,mp.jsx)("div",{className:ee(nb({variant:t}),e),...a})}var Ka=q(require("react"),1);var Xa=require("react/jsx-runtime"),Dr=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("rounded-xl border bg-card text-card-foreground shadow",e),...t}));Dr.displayName="Card";var sb=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("flex flex-col space-y-1.5 p-6",e),...t}));sb.displayName="CardHeader";var lb=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("font-semibold leading-none tracking-tight",e),...t}));lb.displayName="CardTitle";var ib=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("text-sm text-muted-foreground",e),...t}));ib.displayName="CardDescription";var kr=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("p-6 pt-0",e),...t}));kr.displayName="CardContent";var ub=Ka.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:ee("flex items-center p-6 pt-0",e),...t}));ub.displayName="CardFooter";var Ft=require("react/jsx-runtime");function gp({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:s,transition:l,isDragging:i}=Yr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}}),u=e.priority?Kt[e.priority]:null,c=up(t,e.label);return(0,Ft.jsx)("div",{ref:n,style:{transform:tt.Transform.toString(s),transition:l},...o,...r,onClick:()=>a(e),className:ee("group cursor-grab touch-none select-none active:cursor-grabbing",i&&"opacity-40"),children:(0,Ft.jsx)(Dr,{className:"pointer-events-none rounded-xl border-[var(--dsw-alias-border-l2)] shadow-card transition-shadow duration-200 group-hover:shadow-float",children:(0,Ft.jsxs)(kr,{className:"p-3.5",children:[(e.label||u)&&(0,Ft.jsxs)("div",{className:"mb-1.5 flex items-center gap-1.5",children:[e.label&&(0,Ft.jsx)(ti,{variant:"secondary",className:"rounded-full px-2 py-0 text-[10.5px] font-medium leading-4",style:{background:c,color:"#0b1220"},children:e.label}),u&&(0,Ft.jsx)(ti,{variant:"secondary",className:"rounded-full px-2 py-0 text-[10.5px] font-medium leading-4",style:{background:u.color,color:"#0b1220"},children:u.label})]}),(0,Ft.jsx)("p",{className:"text-[13.5px] font-medium leading-snug tracking-tight break-words",children:e.title}),e.note&&(0,Ft.jsx)("p",{className:"mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-3 whitespace-pre-wrap break-words",children:e.note})]})})})}var st=require("react/jsx-runtime");function hp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:s}=Gr({id:e.id,data:{type:"column"}}),l=Xe();return(0,st.jsxs)("div",{ref:n,className:ee("flex min-h-0 w-72 shrink-0 flex-col rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card shadow-column transition-colors",s&&"border-primary"),children:[(0,st.jsxs)("div",{className:"flex items-center gap-1.5 px-3 py-3",children:[(0,st.jsx)("h3",{className:"flex-1 truncate text-[13.5px] font-semibold tracking-tight",children:e.title}),(0,st.jsx)("span",{className:"rounded-full bg-secondary/70 px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground",children:t.length})]}),(0,st.jsxs)("div",{className:"kan-scroll flex min-h-[4rem] flex-1 flex-col gap-2 overflow-y-auto px-2.5 pb-2.5",children:[(0,st.jsx)($r,{items:t.map(i=>i.id),strategy:Xr,children:t.map(i=>(0,st.jsx)(gp,{card:i,labels:a,onOpen:r},i.id))}),t.length===0&&(0,st.jsx)("p",{className:"py-5 text-center text-xs text-muted-foreground/70",children:l("emptyColumn")})]}),(0,st.jsx)("div",{className:"p-2.5 pt-1",children:(0,st.jsxs)(Ae,{variant:"ghost",size:"sm",className:"w-full justify-start rounded-xl text-muted-foreground hover:text-foreground",onClick:()=>o(e),children:[(0,st.jsx)(Nt,{className:"h-4 w-4"}),l("addCard")]})})]})}var Mr=require("react");var Ie=require("react/jsx-runtime");function db({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:s,listeners:l,setNodeRef:i,transform:u,transition:c}=Yr({id:e.id}),d=Xe();return(0,Ie.jsxs)("div",{ref:i,style:{transform:tt.Transform.toString(u),transition:c},className:"flex items-center gap-1.5",children:[(0,Ie.jsx)("button",{...s,...l,className:"shrink-0 cursor-grab touch-none rounded-md p-1 text-muted-foreground/60 hover:bg-accent hover:text-foreground","aria-label":d("dragSort"),children:(0,Ie.jsx)(Qo,{className:"h-4 w-4"})}),(0,Ie.jsx)(jt,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,Ie.jsx)(Ae,{variant:"ghost",size:"icon",className:"h-8 w-8 shrink-0 text-destructive","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,Ie.jsx)(_t,{className:"h-4 w-4"})})]})}function xp({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:s}){let l=Xe(),[i,u]=(0,Mr.useState)({}),[c,d]=(0,Mr.useState)(""),f=Ur(ro(ta,{activationConstraint:{distance:8}}),ro(ea,{coordinateGetter:Zr}));(0,Mr.useEffect)(()=>{e&&u(Object.fromEntries(t.map(p=>[p.id,p.title])))},[e,t]);let g=p=>{let m=(i[p]??"").trim(),x=t.find(w=>w.id===p);x&&m&&m!==x.title&&r(p,m)},h=p=>{let{active:m,over:x}=p;x&&m.id!==x.id&&o(String(m.id),String(x.id))};return(0,Ie.jsx)(yo,{open:e,onOpenChange:a,children:(0,Ie.jsxs)(Pa,{className:"sm:max-w-md",children:[(0,Ie.jsxs)(Da,{children:[(0,Ie.jsx)(ka,{children:l("columnEdit")}),(0,Ie.jsx)(hr,{children:l("columnEditDesc")})]}),(0,Ie.jsx)(Vr,{sensors:f,collisionDetection:Ni,onDragEnd:h,children:(0,Ie.jsx)($r,{items:t.map(p=>p.id),strategy:Xr,children:(0,Ie.jsx)("div",{className:"flex max-h-[60vh] flex-col gap-2 overflow-y-auto py-2",children:t.map(p=>(0,Ie.jsx)(db,{column:p,value:i[p.id]??p.title,onValueChange:m=>u(x=>({...x,[p.id]:m})),onCommit:()=>g(p.id),onDelete:()=>n(p.id),canDelete:t.length>1},p.id))})})}),(0,Ie.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,Ie.jsx)(jt,{value:c,placeholder:l("newColumnPlaceholder"),onChange:p=>d(p.target.value),onKeyDown:p=>{p.key==="Enter"&&c.trim()&&(s(c.trim()),d(""))}}),(0,Ie.jsxs)(Ae,{size:"sm",onClick:()=>{c.trim()&&(s(c.trim()),d(""))},children:[(0,Ie.jsx)(Nt,{className:"h-4 w-4"}),l("add")]})]})]})})}var To=require("react");var ke=require("react/jsx-runtime");function vp({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let s=Xe(),[l,i]=(0,To.useState)({}),[u,c]=(0,To.useState)(""),[d,f]=(0,To.useState)("#38bdf8");(0,To.useEffect)(()=>{e&&i(Object.fromEntries(t.map(h=>[h.name,{name:h.name,color:h.color}])))},[e,t]);let g=h=>{let p=l[h];if(!p)return;let m=t.find(w=>w.name===h),x=p.name.trim();m&&x&&(x!==h||p.color!==m.color)&&r(h,x,p.color)};return(0,ke.jsx)(yo,{open:e,onOpenChange:a,children:(0,ke.jsxs)(Pa,{className:"sm:max-w-md",children:[(0,ke.jsxs)(Da,{children:[(0,ke.jsx)(ka,{children:s("labelEdit")}),(0,ke.jsx)(hr,{children:s("labelEditDesc")})]}),(0,ke.jsx)("div",{className:"flex max-h-[60vh] flex-col gap-2 overflow-y-auto py-2",children:t.map(h=>{let p=l[h.name]??{name:h.name,color:h.color};return(0,ke.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,ke.jsx)("input",{type:"color",value:p.color,className:"h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5",onChange:m=>i(x=>({...x,[h.name]:{...p,color:m.target.value}})),onBlur:()=>g(h.name)}),(0,ke.jsx)(jt,{value:p.name,onChange:m=>i(x=>({...x,[h.name]:{...p,name:m.target.value}})),onBlur:()=>g(h.name),onKeyDown:m=>{m.key==="Enter"&&m.target.blur()}}),(0,ke.jsx)(Ae,{variant:"ghost",size:"icon",className:"h-8 w-8 shrink-0 text-destructive",onClick:()=>n(h.name),children:(0,ke.jsx)(_t,{className:"h-4 w-4"})})]},h.name)})}),(0,ke.jsx)(gr,{className:"flex-col gap-2 sm:flex-row sm:items-center",children:(0,ke.jsxs)("div",{className:"flex flex-1 items-center gap-1.5",children:[(0,ke.jsx)("input",{type:"color",value:d,className:"h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5",onChange:h=>f(h.target.value)}),(0,ke.jsx)(jt,{value:u,placeholder:s("newLabelPlaceholder"),onChange:h=>c(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,ke.jsxs)(Ae,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,ke.jsx)(Nt,{className:"h-4 w-4"}),s("add")]})]})})]})})}function Kn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(o=>o.json())}var ai=new Map,oi=0,Xn=new Set;function wp(e,t){ai.set(e,t),oi++;for(let a of Xn)a()}function bp(e){let t=ai.get(e);if(t==null)return null;ai.delete(e),oi++;for(let a of Xn)a();return t}function Cp(e){return Xn.add(e),()=>{Xn.delete(e)}}function Lp(){return oi}function yp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Lo("fieldId")+": "+t),a&&n.push(a),r&&n.push(Lo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var K=require("react/jsx-runtime");function Ip(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,s=a?a(R=>R.items):[],l=a?a(R=>R.recentWorkspaceId):void 0,i=Array.isArray(s)?s.find(R=>Array.isArray(R.sessionIds)&&R.sessionIds.includes(t)):void 0,u=i?i.workspaceId:l||"default",c=Xe(),[d,f]=(0,xe.useState)(null),[g,h]=(0,xe.useState)(""),[p,m]=(0,xe.useState)([]),[x,w]=(0,xe.useState)(null),[v,b]=(0,xe.useState)(null),[C,L]=(0,xe.useState)(!1),[I,S]=(0,xe.useState)(!1),[P,E]=(0,xe.useState)(!1),[M,D]=(0,xe.useState)(""),F=(0,xe.useRef)(null),[U,Z]=(0,xe.useState)(null),W=Ur(ro(ta,{activationConstraint:{distance:8}}),ro(ea,{coordinateGetter:Zr})),O=(0,xe.useCallback)(R=>{R&&R.board&&(f({...R.board,activities:Array.isArray(R.board.activities)?R.board.activities:[]}),h("")),Array.isArray(R&&R.warnings)&&R.warnings.length>0&&m(N=>[...N,...R.warnings])},[]),B=(0,xe.useCallback)((R,N={})=>{Kn(R,N,u).then(O).catch(G=>h(c("actionFailed")+String(G&&G.message||G)))},[u,O]),H=(0,xe.useCallback)(()=>{E(!0),Kn("get",{},u).then(O).catch(R=>h(c("loadFailed")+String(R&&R.message||R))).finally(()=>E(!1))},[u,O,c]);(0,xe.useEffect)(()=>{let R=!0;return Kn("get",{},u).then(N=>{R&&O(N)}).catch(N=>{R&&h(c("loadFailed")+String(N&&N.message||N))}),()=>{R=!1}},[u,O]),(0,xe.useLayoutEffect)(()=>{let R=X=>{let _=X;for(;_;){let $=getComputedStyle(_).overflowY;if($==="auto"||$==="scroll")return _;_=_.parentElement}return null},N=()=>{let X=F.current;if(!X)return;let _=X.getBoundingClientRect().top,$=R(X.parentElement),Y=window.innerHeight;if($){let oe=$.querySelector("[data-composer-seat]"),we=oe?oe.getBoundingClientRect().top:0;oe&&oe.offsetHeight>0&&we>_?Y=we:Y=$.getBoundingClientRect().bottom}Z(Math.max(0,Math.floor(Y-_)))};N();let G=R(F.current?.parentElement??null),k=new ResizeObserver(N);return k.observe(document.documentElement),G&&k.observe(G),window.addEventListener("resize",N),()=>{k.disconnect(),window.removeEventListener("resize",N)}},[d!==null]);let T=(0,xe.useCallback)(R=>{let N=_i(R),G=N.length>0?N:ps(R),k=jo(G,"id");if(k==null)return[];if(new Set((d?.columns??[]).map(_=>_.id)).has(String(k))){let _=(d?.cards??[]).filter($=>$.columnId===k).map($=>$.id);if(_.length>0){let $=Hr({...R,droppableContainers:R.droppableContainers.filter(Y=>Y.id!==k&&_.includes(String(Y.id)))});$.length>0&&(k=$[0].id)}}return[{id:k}]},[d]),le=R=>{if(R.active.data.current?.type==="card"){let N=d?.cards.find(G=>G.id===R.active.id);N&&w(N)}},Q=R=>{let{active:N,over:G}=R;if(w(null),!G||!d)return;let k=N.data.current?.type,X=G.data.current?.type;if(k==="card")if(X==="card"){let _=d.cards.find(oe=>oe.id===G.id);if(!_||_.id===N.id)return;let Y=d.cards.filter(oe=>oe.columnId===_.columnId).findIndex(oe=>oe.id===_.id);B("moveCard",{id:String(N.id),columnId:_.columnId,toIndex:Y>=0?Y:void 0})}else X==="column"&&B("moveCard",{id:String(N.id),columnId:String(G.id)})},ie=R=>{if(!v)return;let N={title:R.title,note:R.note,label:R.label||void 0,priority:R.priority||void 0};v.card?B("updateCard",{id:v.card.id,...N}):B("addCard",{columnId:v.columnId,...N})},ve=(0,xe.useCallback)((R,N)=>{let G=yp(R);if(G){if(N==="current"){o?.setDraft(G);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(k=>{k&&(wp(k,G),n.open(k))}).catch(k=>h(c("actionFailed")+String(k&&k.message||k)))}},[o,r,n,u,c]);return d?(0,K.jsxs)("div",{ref:F,className:"flex h-full flex-col gap-3 p-5",style:U!=null?{height:U}:void 0,children:[g&&(0,K.jsx)("p",{className:"text-sm text-destructive",children:g}),p.length>0&&(0,K.jsxs)("div",{className:"flex items-start gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2",children:[(0,K.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,K.jsx)("p",{className:"text-xs font-medium text-amber-500",children:c("warnings")}),p.map((R,N)=>(0,K.jsx)("p",{className:"mt-0.5 break-words text-xs text-amber-600",children:R},N))]}),(0,K.jsx)(Ae,{variant:"ghost",size:"sm",className:"h-6 shrink-0 px-2 text-xs text-amber-600 hover:text-amber-500",onClick:()=>m([]),children:c("dismiss")})]}),(0,K.jsxs)(Vr,{sensors:W,collisionDetection:T,onDragStart:le,onDragEnd:Q,children:[(0,K.jsxs)("div",{className:"flex min-h-0 flex-1 gap-3",children:[(0,K.jsxs)("div",{className:"flex shrink-0 flex-col items-center gap-1.5 self-start rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card p-1.5 shadow-column",children:[(0,K.jsx)(Ae,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:H,children:(0,K.jsx)(ar,{className:P?"animate-spin":void 0})}),(0,K.jsxs)(Sr,{children:[(0,K.jsx)(Rr,{asChild:!0,children:(0,K.jsx)(Ae,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground",title:c("settings"),children:(0,K.jsx)(or,{className:"h-4 w-4"})})}),(0,K.jsxs)(ko,{align:"start",children:[(0,K.jsxs)(Wt,{onClick:()=>L(!0),children:[(0,K.jsx)(er,{className:"h-4 w-4"}),c("columnEdit")]}),(0,K.jsxs)(Wt,{onClick:()=>S(!0),children:[(0,K.jsx)(rr,{className:"h-4 w-4"}),c("labelEdit")]})]})]}),(0,K.jsxs)(Sr,{children:[(0,K.jsx)(Rr,{asChild:!0,children:(0,K.jsx)(Ae,{variant:M?"secondary":"ghost",size:"icon",className:"h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground",title:c("priorityFilter"),children:(0,K.jsx)(Jo,{className:"h-4 w-4"})})}),(0,K.jsxs)(ko,{align:"start",children:[(0,K.jsxs)(Wt,{onClick:()=>D(""),children:[(0,K.jsx)("span",{className:"flex h-4 w-4 items-center",children:!M&&(0,K.jsx)(aa,{className:"h-4 w-4"})}),c("all")]}),Gn.map(R=>(0,K.jsxs)(Wt,{onClick:()=>D(R),children:[(0,K.jsx)("span",{className:"flex h-4 w-4 items-center",children:M===R&&(0,K.jsx)(aa,{className:"h-4 w-4"})}),(0,K.jsx)("span",{className:"h-2 w-2 rounded-full",style:{background:Kt[R].color}}),Kt[R].label]},R))]})]})]}),(0,K.jsx)("div",{className:"kan-scroll flex min-h-0 flex-1 gap-3 overflow-x-auto overflow-y-hidden pb-2",children:d.columns.map(R=>{let N=d.cards.filter(G=>G.columnId===R.id&&(!M||G.priority===M));return(0,K.jsx)(hp,{column:R,cards:N,labels:d.labels,onAddCard:G=>b({card:null,columnId:G.id}),onOpenCard:G=>b({card:G,columnId:G.columnId})},R.id)})})]}),(0,K.jsx)(tu,{children:x?(0,K.jsx)(Dr,{className:"w-64 rotate-2 rounded-xl border-[var(--dsw-alias-border-l2)] bg-secondary shadow-float",children:(0,K.jsx)(kr,{className:"p-3.5",children:(0,K.jsx)("p",{className:"text-[13.5px] font-medium tracking-tight break-words",children:x.title})})}):null})]}),(0,K.jsx)(pp,{open:v!==null,card:v?.card??null,labels:d.labels,activities:v?.card?d.activities.filter(R=>R.cardId===v.card.id):[],onOpenChange:R=>{R||b(null)},onSave:ie,onDelete:R=>B("deleteCard",{id:R.id}),onChatWithAgent:ve}),(0,K.jsx)(xp,{open:C,columns:d.columns,onOpenChange:L,onReorder:(R,N)=>{let G=d.columns.findIndex(k=>k.id===N);G>=0&&B("moveColumn",{id:R,toIndex:G})},onRename:(R,N)=>B("renameColumn",{id:R,title:N}),onDelete:R=>B("deleteColumn",{id:R}),onAdd:R=>B("addColumn",{title:R})}),(0,K.jsx)(vp,{open:I,labels:d.labels,onOpenChange:S,onAdd:(R,N)=>B("addLabel",{name:R,color:N}),onUpdate:(R,N,G)=>B("updateLabel",{name:R,newName:N,color:G}),onDelete:R=>B("deleteLabel",{name:R})})]}):(0,K.jsx)("div",{className:"flex h-full min-h-[420px] items-center justify-center p-5",children:g?(0,K.jsx)("p",{className:"text-sm text-destructive",children:g}):(0,K.jsx)("p",{className:"text-sm text-muted-foreground",children:c("loading")})})}var $n=require("react");function Sp({sessionId:e,inputActions:t}){let a=(0,$n.useSyncExternalStore)(Cp,Lp);return(0,$n.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=bp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Rp={name:"dsh-kanban",inject:["slots","locale"],apply(e){zd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Lo("boardTab")},r=>(0,ri.createElement)(Ip,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,ri.createElement)(Sp,r)))}};var Pp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Pp+"]")){let e=document.createElement("style");e.setAttribute(Pp,""),e.textContent=gi,document.head.appendChild(e)}var cb=Rp;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/filter.js:
lucide-react/dist/esm/icons/grip-vertical.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/settings-2.js:
lucide-react/dist/esm/icons/tag.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})