window.__ModuleLoader__.load({
  id: 'dsh-kanban',
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var vp=Object.create;var yr=Object.defineProperty;var wp=Object.getOwnPropertyDescriptor;var bp=Object.getOwnPropertyNames;var Cp=Object.getPrototypeOf,Lp=Object.prototype.hasOwnProperty;var ei=e=>{throw TypeError(e)};var Ip=(e,t)=>{for(var a in t)yr(e,a,{get:t[a],enumerable:!0})},ti=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of bp(t))!Lp.call(e,r)&&r!==a&&yr(e,r,{get:()=>t[r],enumerable:!(o=wp(t,r))||o.enumerable});return e};var H=(e,t,a)=>(a=e!=null?vp(Cp(e)):{},ti(t||!e||!e.__esModule?yr(a,"default",{value:e,enumerable:!0}):a,e)),yp=e=>ti(yr({},"__esModule",{value:!0}),e);var ai=(e,t,a)=>t.has(e)||ei("Cannot "+a);var Ue=(e,t,a)=>(ai(e,t,"read from private field"),a?a.call(e):t.get(e)),oi=(e,t,a)=>t.has(e)?ei("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),qn=(e,t,a,o)=>(ai(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var Ww={};Ip(Ww,{default:()=>Gw});module.exports=yp(Ww);var ri=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-black: #000;
    --spacing: 0.25rem;
    --container-md: 28rem;
    --container-lg: 32rem;
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
    --blur-xl: 24px;
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
  .left-2 {
    left: calc(var(--spacing) * 2);
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
  .-mt-0 {
    margin-top: 0px;
  }
  .mt-0 {
    margin-top: 0px;
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
  .-ml-1 {
    margin-left: calc(var(--spacing) * -1);
  }
  .ml-auto {
    margin-left: auto;
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
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
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
  .h-12 {
    height: calc(var(--spacing) * 12);
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
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-48 {
    width: calc(var(--spacing) * 48);
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
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
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
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
  .gap-0 {
    gap: 0px;
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
  .rounded {
    border-radius: 0.25rem;
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
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-\\[var\\(--dsw-alias-border-l2\\)\\] {
    border-color: var(--dsw-alias-border-l2);
  }
  .border-border {
    border-color: var(--dsw-alias-border-l1);
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
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
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
  .text-card-foreground {
    color: var(--dsw-alias-label-primary);
  }
  .text-destructive {
    color: var(--dsw-alias-state-error-primary);
  }
  .text-destructive-foreground {
    color: var(--dsw-alias-label-primary-foreground, #ffffff);
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
  .shadow-soft {
    --tw-shadow: var(--dsw-shadow-lv1);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
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
  .backdrop-blur-xl {
    --tw-backdrop-blur: blur(var(--blur-xl));
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
`;var lp=require("react");var $e=require("react");var I=H(require("react")),ma=require("react-dom");var he=require("react");function si(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,he.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Oo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ia(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Sr(e){return"nodeType"in e}function He(e){var t,a;return e?ia(e)?e:Sr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Rr(e){let{Document:t}=He(e);return e instanceof t}function Za(e){return ia(e)?!1:e instanceof He(e).HTMLElement}function Vn(e){return e instanceof He(e).SVGElement}function ua(e){return e?ia(e)?e.document:Sr(e)?Rr(e)?e:Za(e)||Vn(e)?e.ownerDocument:document:document:document}var et=Oo?he.useLayoutEffect:he.useEffect;function Fo(e){let t=(0,he.useRef)(e);return et(()=>{t.current=e}),(0,he.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function li(){let e=(0,he.useRef)(null),t=(0,he.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,he.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Ja(e,t){t===void 0&&(t=[e]);let a=(0,he.useRef)(e);return et(()=>{a.current!==e&&(a.current=e)},t),a}function Qa(e,t){let a=(0,he.useRef)();return(0,he.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Bo(e){let t=Fo(e),a=(0,he.useRef)(null),o=(0,he.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function No(e){let t=(0,he.useRef)();return(0,he.useEffect)(()=>{t.current=e},[e]),t.current}var zn={};function da(e,t){return(0,he.useMemo)(()=>{if(t)return t;let a=zn[e]==null?0:zn[e]+1;return zn[e]=a,e+"-"+a},[e,t])}function ii(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,s)=>{let l=Object.entries(s);for(let[i,u]of l){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var ca=ii(1),fa=ii(-1);function Rp(e){return"clientX"in e&&"clientY"in e}function eo(e){if(!e)return!1;let{KeyboardEvent:t}=He(e.target);return t&&e instanceof t}function Pp(e){if(!e)return!1;let{TouchEvent:t}=He(e.target);return t&&e instanceof t}function _o(e){if(Pp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Rp(e)?{x:e.clientX,y:e.clientY}:null}var Qe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[Qe.Translate.toString(e),Qe.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ni="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function ui(e){return e.matches(ni)?e:e.querySelector(ni)}var pa=H(require("react")),kp={display:"none"};function di(e){let{id:t,value:a}=e;return pa.default.createElement("div",{id:t,style:kp},a)}function ci(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return pa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function fi(){let[e,t]=(0,pa.useState)("");return{announce:(0,pa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Si=(0,I.createContext)(null);function Dp(e){let t=(0,I.useContext)(Si);(0,I.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Mp(){let[e]=(0,I.useState)(()=>new Set),t=(0,I.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,I.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(s=>{var l;return(l=s[r])==null?void 0:l.call(s,n)})},[e]),t]}var Ap={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Tp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Ep(e){let{announcements:t=Tp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Ap}=e,{announce:n,announcement:s}=fi(),l=da("DndLiveRegion"),[i,u]=(0,I.useState)(!1);if((0,I.useEffect)(()=>{u(!0)},[]),Dp((0,I.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=I.default.createElement(I.default.Fragment,null,I.default.createElement(di,{id:o,value:r.draggable}),I.default.createElement(ci,{id:l,announcement:s}));return a?(0,ma.createPortal)(c,a):c}var Se;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Se||(Se={}));function kr(){}function to(e,t){return(0,I.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Mr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,I.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var pt=Object.freeze({x:0,y:0});function Qn(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Op(e,t){let a=_o(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function es(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Fp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Kn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Vo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function pi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Ri=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=pi(t,t.left,t.top),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=Qn(pi(i),r);n.push({id:l,data:{droppableContainer:s,value:u}})}}return n.sort(es)},Ar=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Kn(t),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=Kn(i),c=r.reduce((f,h,g)=>f+Qn(u[g],h),0),d=Number((c/4).toFixed(4));n.push({id:l,data:{droppableContainer:s,value:d}})}}return n.sort(es)};function Bp(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),s=r-o,l=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=s*l,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var ts=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:s}=n,l=a.get(s);if(l){let i=Bp(l,t);i>0&&r.push({id:s,data:{droppableContainer:n,value:i}})}}return r.sort(Fp)};function Np(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Pi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:s}=n,l=a.get(s);if(l&&Np(o,l)){let u=Kn(l).reduce((d,f)=>d+Qn(o,f),0),c=Number((u/4).toFixed(4));r.push({id:s,data:{droppableContainer:n,value:c}})}}return r.sort(es)};function _p(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function ki(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:pt}function Up(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((s,l)=>({...s,top:s.top+e*l.y,bottom:s.bottom+e*l.y,left:s.left+e*l.x,right:s.right+e*l.x}),{...a})}}var Hp=Up(1);function Di(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function qp(e,t,a){let o=Di(t);if(!o)return e;let{scaleX:r,scaleY:n,x:s,y:l}=o,i=e.left-s-(1-r)*parseFloat(a),u=e.top-l-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var zp={ignoreTransform:!1};function xa(e,t){t===void 0&&(t=zp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=He(e).getComputedStyle(e);u&&(a=qp(a,u,c))}let{top:o,left:r,width:n,height:s,bottom:l,right:i}=a;return{top:o,left:r,width:n,height:s,bottom:l,right:i}}function mi(e){return xa(e,{ignoreTransform:!0})}function Vp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Gp(e,t){return t===void 0&&(t=He(e).getComputedStyle(e)),t.position==="fixed"}function Wp(e,t){t===void 0&&(t=He(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Go(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Rr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Za(r)||Vn(r)||a.includes(r))return a;let n=He(e).getComputedStyle(r);return r!==e&&Wp(r,n)&&a.push(r),Gp(r,n)?a:o(r.parentNode)}return e?o(e):a}function Mi(e){let[t]=Go(e,1);return t??null}function Gn(e){return!Oo||!e?null:ia(e)?e:Sr(e)?Rr(e)||e===ua(e).scrollingElement?window:Za(e)?e:null:null}function Ai(e){return ia(e)?e.scrollX:e.scrollLeft}function Ti(e){return ia(e)?e.scrollY:e.scrollTop}function Xn(e){return{x:Ai(e),y:Ti(e)}}var De;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(De||(De={}));function Ei(e){return!Oo||!e?!1:e===document.scrollingElement}function Oi(e){let t={x:0,y:0},a=Ei(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,s=e.scrollTop>=o.y,l=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:s,isRight:l,maxScroll:o,minScroll:t}}var jp={x:.2,y:.2};function Kp(e,t,a,o,r){let{top:n,left:s,right:l,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=jp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Oi(e),h={x:0,y:0},g={x:0,y:0},p={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+p.height?(h.y=De.Backward,g.y=o*Math.abs((t.top+p.height-n)/p.height)):!c&&i>=t.bottom-p.height&&(h.y=De.Forward,g.y=o*Math.abs((t.bottom-p.height-i)/p.height)),!f&&l>=t.right-p.width?(h.x=De.Forward,g.x=o*Math.abs((t.right-p.width-l)/p.width)):!d&&s<=t.left+p.width&&(h.x=De.Backward,g.x=o*Math.abs((t.left+p.width-s)/p.width)),{direction:h,speed:g}}function Xp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:s}=window;return{top:0,left:0,right:n,bottom:s,width:n,height:s}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Fi(e){return e.reduce((t,a)=>ca(t,Xn(a)),pt)}function $p(e){return e.reduce((t,a)=>t+Ai(a),0)}function Yp(e){return e.reduce((t,a)=>t+Ti(a),0)}function Bi(e,t){if(t===void 0&&(t=xa),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Mi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Zp=[["x",["left","right"],$p],["y",["top","bottom"],Yp]],Ho=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Go(a),r=Fi(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,s,l]of Zp)for(let i of s)Object.defineProperty(this,i,{get:()=>{let u=l(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},ga=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Jp(e){let{EventTarget:t}=He(e);return e instanceof t?e:ua(e)}function Wn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var lt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(lt||(lt={}));function gi(e){e.preventDefault()}function Qp(e){e.stopPropagation()}var ee;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ee||(ee={}));var Ni={start:[ee.Space,ee.Enter],cancel:[ee.Esc],end:[ee.Space,ee.Enter,ee.Tab]},em=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ee.Right:return{...a,x:a.x+25};case ee.Left:return{...a,x:a.x-25};case ee.Down:return{...a,y:a.y+25};case ee.Up:return{...a,y:a.y-25}}},Yt=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new ga(ua(a)),this.windowListeners=new ga(He(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(lt.Resize,this.handleCancel),this.windowListeners.add(lt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(lt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Bi(o),a(pt)}handleKeyDown(t){if(eo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Ni,coordinateGetter:s=em,scrollBehavior:l="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:pt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=s(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=fa(d,c),h={x:0,y:0},{scrollableAncestors:g}=o.current;for(let p of g){let m=t.code,{isTop:x,isRight:w,isLeft:v,isBottom:b,maxScroll:C,minScroll:L}=Oi(p),S=Xp(p),R={x:Math.min(m===ee.Right?S.right-S.width/2:S.right,Math.max(m===ee.Right?S.left:S.left+S.width/2,d.x)),y:Math.min(m===ee.Down?S.bottom-S.height/2:S.bottom,Math.max(m===ee.Down?S.top:S.top+S.height/2,d.y))},P=m===ee.Right&&!w||m===ee.Left&&!v,E=m===ee.Down&&!b||m===ee.Up&&!x;if(P&&R.x!==d.x){let T=p.scrollLeft+f.x,k=m===ee.Right&&T<=C.x||m===ee.Left&&T>=L.x;if(k&&!f.y){p.scrollTo({left:T,behavior:l});return}k?h.x=p.scrollLeft-T:h.x=m===ee.Right?p.scrollLeft-C.x:p.scrollLeft-L.x,h.x&&p.scrollBy({left:-h.x,behavior:l});break}else if(E&&R.y!==d.y){let T=p.scrollTop+f.y,k=m===ee.Down&&T<=C.y||m===ee.Up&&T>=L.y;if(k&&!f.x){p.scrollTo({top:T,behavior:l});return}k?h.y=p.scrollTop-T:h.y=m===ee.Down?p.scrollTop-C.y:p.scrollTop-L.y,h.y&&p.scrollBy({top:-h.y,behavior:l});break}}this.handleMove(t,ca(fa(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Yt.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Ni,onActivation:r}=t,{active:n}=a,{code:s}=e.nativeEvent;if(o.start.includes(s)){let l=n.activatorNode.current;return l&&e.target!==l?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function hi(e){return!!(e&&"distance"in e)}function xi(e){return!!(e&&"delay"in e)}var qo=class{constructor(t,a,o){var r;o===void 0&&(o=Jp(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:s}=n;this.props=t,this.events=a,this.document=ua(s),this.documentListeners=new ga(this.document),this.listeners=new ga(o),this.windowListeners=new ga(He(s)),this.initialCoordinates=(r=_o(n))!=null?r:pt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(lt.Resize,this.handleCancel),this.windowListeners.add(lt.DragStart,gi),this.windowListeners.add(lt.VisibilityChange,this.handleCancel),this.windowListeners.add(lt.ContextMenu,gi),this.documentListeners.add(lt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(xi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(hi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(lt.Click,Qp,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(lt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:s,options:{activationConstraint:l}}=n;if(!r)return;let i=(a=_o(t))!=null?a:pt,u=fa(r,i);if(!o&&l){if(hi(l)){if(l.tolerance!=null&&Wn(u,l.tolerance))return this.handleCancel();if(Wn(u,l.distance))return this.handleStart()}if(xi(l)&&Wn(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}t.cancelable&&t.preventDefault(),s(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ee.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},tm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Zt=class extends qo{constructor(t){let{event:a}=t,o=ua(a.target);super(t,tm,o)}};Zt.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var am={move:{name:"mousemove"},end:{name:"mouseup"}},$n;(function(e){e[e.RightClick=2]="RightClick"})($n||($n={}));var Yn=class extends qo{constructor(t){super(t,am,ua(t.event.target))}};Yn.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===$n.RightClick?!1:(o?.({event:a}),!0)}}];var jn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Zn=class extends qo{constructor(t){super(t,jn)}static setup(){return window.addEventListener(jn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(jn.move.name,t)};function t(){}}};Zn.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Uo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Uo||(Uo={}));var Dr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Dr||(Dr={}));function om(e){let{acceleration:t,activator:a=Uo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:s=5,order:l=Dr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=nm({delta:d,disabled:!n}),[g,p]=li(),m=(0,I.useRef)({x:0,y:0}),x=(0,I.useRef)({x:0,y:0}),w=(0,I.useMemo)(()=>{switch(a){case Uo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Uo.DraggableRect:return r}},[a,r,i]),v=(0,I.useRef)(null),b=(0,I.useCallback)(()=>{let L=v.current;if(!L)return;let S=m.current.x*x.current.x,R=m.current.y*x.current.y;L.scrollBy(S,R)},[]),C=(0,I.useMemo)(()=>l===Dr.TreeOrder?[...u].reverse():u,[l,u]);(0,I.useEffect)(()=>{if(!n||!u.length||!w){p();return}for(let L of C){if(o?.(L)===!1)continue;let S=u.indexOf(L),R=c[S];if(!R)continue;let{direction:P,speed:E}=Kp(L,R,w,t,f);for(let T of["x","y"])h[T][P[T]]||(E[T]=0,P[T]=0);if(E.x>0||E.y>0){p(),v.current=L,g(b,s),m.current=E,x.current=P;return}}m.current={x:0,y:0},x.current={x:0,y:0},p()},[t,b,o,p,n,s,JSON.stringify(w),JSON.stringify(h),g,u,C,c,JSON.stringify(f)])}var rm={x:{[De.Backward]:!1,[De.Forward]:!1},y:{[De.Backward]:!1,[De.Forward]:!1}};function nm(e){let{delta:t,disabled:a}=e,o=No(t);return Qa(r=>{if(a||!o||!r)return rm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[De.Backward]:r.x[De.Backward]||n.x===-1,[De.Forward]:r.x[De.Forward]||n.x===1},y:{[De.Backward]:r.y[De.Backward]||n.y===-1,[De.Forward]:r.y[De.Forward]||n.y===1}}},[a,t,o])}function sm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Qa(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function lm(e,t){return(0,I.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(s=>({eventName:s.eventName,handler:t(s.handler,o)}));return[...a,...n]},[]),[e,t])}var zo;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(zo||(zo={}));var Jn;(function(e){e.Optimized="optimized"})(Jn||(Jn={}));var vi=new Map;function im(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,s]=(0,I.useState)(null),{frequency:l,measure:i,strategy:u}=r,c=(0,I.useRef)(e),d=m(),f=Ja(d),h=(0,I.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&s(w=>w===null?x:w.concat(x.filter(v=>!w.includes(v))))},[f]),g=(0,I.useRef)(null),p=Qa(x=>{if(d&&!a)return vi;if(!x||x===vi||c.current!==e||n!=null){let w=new Map;for(let v of e){if(!v)continue;if(n&&n.length>0&&!n.includes(v.id)&&v.rect.current){w.set(v.id,v.rect.current);continue}let b=v.node.current,C=b?new Ho(i(b),b):null;v.rect.current=C,C&&w.set(v.id,C)}return w}return x},[e,n,a,d,i]);return(0,I.useEffect)(()=>{c.current=e},[e]),(0,I.useEffect)(()=>{d||h()},[a,d]),(0,I.useEffect)(()=>{n&&n.length>0&&s(null)},[JSON.stringify(n)]),(0,I.useEffect)(()=>{d||typeof l!="number"||g.current!==null||(g.current=setTimeout(()=>{h(),g.current=null},l))},[l,d,h,...o]),{droppableRects:p,measureDroppableContainers:h,measuringScheduled:n!=null};function m(){switch(u){case zo.Always:return!1;case zo.BeforeDragging:return a;default:return!a}}}function as(e,t){return Qa(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function um(e,t){return as(e,t)}function dm(e){let{callback:t,disabled:a}=e,o=Fo(t),r=(0,I.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,I.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Tr(e){let{callback:t,disabled:a}=e,o=Fo(t),r=(0,I.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,I.useEffect)(()=>()=>r?.disconnect(),[r]),r}function cm(e){return new Ho(xa(e),e)}function wi(e,t,a){t===void 0&&(t=cm);let[o,r]=(0,I.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let s=dm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),l=Tr({callback:n});return et(()=>{n(),e?(l?.observe(e),s?.observe(document.body,{childList:!0,subtree:!0})):(l?.disconnect(),s?.disconnect())},[e]),o}function fm(e){let t=as(e);return ki(e,t)}var bi=[];function pm(e){let t=(0,I.useRef)(e),a=Qa(o=>e?o&&o!==bi&&e&&t.current&&e.parentNode===t.current.parentNode?o:Go(e):bi,[e]);return(0,I.useEffect)(()=>{t.current=e},[e]),a}function mm(e){let[t,a]=(0,I.useState)(null),o=(0,I.useRef)(e),r=(0,I.useCallback)(n=>{let s=Gn(n.target);s&&a(l=>l?(l.set(s,Xn(s)),new Map(l)):null)},[]);return(0,I.useEffect)(()=>{let n=o.current;if(e!==n){s(n);let l=e.map(i=>{let u=Gn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Xn(u)]):null}).filter(i=>i!=null);a(l.length?new Map(l):null),o.current=e}return()=>{s(e),s(n)};function s(l){l.forEach(i=>{let u=Gn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,I.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,s)=>ca(n,s),pt):Fi(e):pt,[e,t])}function Ci(e,t){t===void 0&&(t=[]);let a=(0,I.useRef)(null);return(0,I.useEffect)(()=>{a.current=null},t),(0,I.useEffect)(()=>{let o=e!==pt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?fa(e,a.current):pt}function gm(e){(0,I.useEffect)(()=>{if(!Oo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function hm(e,t){return(0,I.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=s=>{n(s,t)},a},{}),[e,t])}function _i(e){return(0,I.useMemo)(()=>e?Vp(e):null,[e])}var Li=[];function xm(e,t){t===void 0&&(t=xa);let[a]=e,o=_i(a?He(a):null),[r,n]=(0,I.useState)(Li);function s(){n(()=>e.length?e.map(i=>Ei(i)?o:new Ho(t(i),i)):Li)}let l=Tr({callback:s});return et(()=>{l?.disconnect(),s(),e.forEach(i=>l?.observe(i))},[e]),r}function Ui(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Za(t)?t:e}function vm(e){let{measure:t}=e,[a,o]=(0,I.useState)(null),r=(0,I.useCallback)(u=>{for(let{target:c}of u)if(Za(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Tr({callback:r}),s=(0,I.useCallback)(u=>{let c=Ui(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[l,i]=Bo(s);return(0,I.useMemo)(()=>({nodeRef:l,rect:a,setRef:i}),[a,l,i])}var wm=[{sensor:Zt,options:{}},{sensor:Yt,options:{}}],bm={current:{}},Pr={draggable:{measure:mi},droppable:{measure:mi,strategy:zo.WhileDragging,frequency:Jn.Optimized},dragOverlay:{measure:xa}},ha=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Cm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ha,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:kr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Pr,measureDroppableContainers:kr,windowRect:null,measuringScheduled:!1},Hi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:kr,draggableNodes:new Map,over:null,measureDroppableContainers:kr},Wo=(0,I.createContext)(Hi),qi=(0,I.createContext)(Cm);function Lm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ha}}}function Im(e,t){switch(t.type){case Se.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Se.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Se.DragEnd:case Se.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Se.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ha(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Se.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let s=new ha(e.droppable.containers);return s.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:s}}}case Se.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ha(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function ym(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,I.useContext)(Wo),n=No(o),s=No(a?.id);return(0,I.useEffect)(()=>{if(!t&&!o&&n&&s!=null){if(!eo(n)||document.activeElement===n.target)return;let l=r.get(s);if(!l)return;let{activatorNode:i,node:u}=l;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=ui(c);if(d){d.focus();break}}})}},[o,t,r,s,n]),null}function zi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Sm(e){return(0,I.useMemo)(()=>({draggable:{...Pr.draggable,...e?.draggable},droppable:{...Pr.droppable,...e?.droppable},dragOverlay:{...Pr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Rm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,I.useRef)(!1),{x:s,y:l}=typeof r=="boolean"?{x:r,y:r}:r;et(()=>{if(!s&&!l||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=ki(c,o);if(s||(d.x=0),l||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Mi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,s,l,o,a])}var Er=(0,I.createContext)({...pt,scaleX:1,scaleY:1}),$t;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})($t||($t={}));var Or=(0,I.memo)(function(t){var a,o,r,n;let{id:s,accessibility:l,autoScroll:i=!0,children:u,sensors:c=wm,collisionDetection:d=ts,measuring:f,modifiers:h,...g}=t,p=(0,I.useReducer)(Im,void 0,Lm),[m,x]=p,[w,v]=Mp(),[b,C]=(0,I.useState)($t.Uninitialized),L=b===$t.Initialized,{draggable:{active:S,nodes:R,translate:P},droppable:{containers:E}}=m,T=S!=null?R.get(S):null,k=(0,I.useRef)({initial:null,translated:null}),y=(0,I.useMemo)(()=>{var _e;return S!=null?{id:S,data:(_e=T?.data)!=null?_e:bm,rect:k}:null},[S,T]),D=(0,I.useRef)(null),[O,U]=(0,I.useState)(null),[F,N]=(0,I.useState)(null),_=Ja(g,Object.values(g)),M=da("DndDescribedBy",s),Z=(0,I.useMemo)(()=>E.getEnabled(),[E]),K=Sm(f),{droppableRects:ne,measureDroppableContainers:be,measuringScheduled:Pe}=im(Z,{dragging:L,dependencies:[P.x,P.y],config:K.droppable}),pe=sm(R,S),ke=(0,I.useMemo)(()=>F?_o(F):null,[F]),B=xp(),Q=um(pe,K.draggable.measure);Rm({activeNode:S!=null?R.get(S):null,config:B.layoutShiftCompensation,initialRect:Q,measure:K.draggable.measure});let V=wi(pe,K.draggable.measure,Q),oe=wi(pe?pe.parentElement:null),te=(0,I.useRef)({activatorEvent:null,active:null,activeNode:pe,collisionRect:null,collisions:null,droppableRects:ne,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),le=E.getNodeFor((a=te.current.over)==null?void 0:a.id),Ie=vm({measure:K.dragOverlay.measure}),ye=(o=Ie.nodeRef.current)!=null?o:pe,It=L?(r=Ie.rect)!=null?r:V:null,ja=!!(Ie.nodeRef.current&&Ie.rect),Ka=fm(ja?null:V),_n=_i(ye?He(ye):null),Gt=pm(L?le??pe:null),Lr=xm(Gt),Ir=zi(h,{transform:{x:P.x-Ka.x,y:P.y-Ka.y,scaleX:1,scaleY:1},activatorEvent:F,active:y,activeNodeRect:V,containerNodeRect:oe,draggingNodeRect:It,over:te.current.over,overlayNodeRect:Ie.rect,scrollableAncestors:Gt,scrollableAncestorRects:Lr,windowRect:_n}),Xl=ke?ca(ke,P):null,$l=mm(Gt),dp=Ci($l),cp=Ci($l,[V]),Xa=ca(Ir,dp),$a=It?Hp(It,Ir):null,Mo=y&&$a?d({active:y,collisionRect:$a,droppableRects:ne,droppableContainers:Z,pointerCoordinates:Xl}):null,Yl=Vo(Mo,"id"),[Wt,Zl]=(0,I.useState)(null),fp=ja?Ir:ca(Ir,cp),pp=_p(fp,(n=Wt?.rect)!=null?n:null,V),Un=(0,I.useRef)(null),Jl=(0,I.useCallback)((_e,Ye)=>{let{sensor:Ze,options:jt}=Ye;if(D.current==null)return;let st=R.get(D.current);if(!st)return;let Je=_e.nativeEvent,yt=new Ze({active:D.current,activeNode:st,event:Je,options:jt,context:te,onAbort(Oe){if(!R.get(Oe))return;let{onDragAbort:St}=_.current,Ot={id:Oe};St?.(Ot),w({type:"onDragAbort",event:Ot})},onPending(Oe,Kt,St,Ot){if(!R.get(Oe))return;let{onDragPending:To}=_.current,Xt={id:Oe,constraint:Kt,initialCoordinates:St,offset:Ot};To?.(Xt),w({type:"onDragPending",event:Xt})},onStart(Oe){let Kt=D.current;if(Kt==null)return;let St=R.get(Kt);if(!St)return;let{onDragStart:Ot}=_.current,Ao={activatorEvent:Je,active:{id:Kt,data:St.data,rect:k}};(0,ma.unstable_batchedUpdates)(()=>{Ot?.(Ao),C($t.Initializing),x({type:Se.DragStart,initialCoordinates:Oe,active:Kt}),w({type:"onDragStart",event:Ao}),U(Un.current),N(Je)})},onMove(Oe){x({type:Se.DragMove,coordinates:Oe})},onEnd:Ya(Se.DragEnd),onCancel:Ya(Se.DragCancel)});Un.current=yt;function Ya(Oe){return async function(){let{active:St,collisions:Ot,over:Ao,scrollAdjustedTranslate:To}=te.current,Xt=null;if(St&&To){let{cancelDrop:Eo}=_.current;Xt={activatorEvent:Je,active:St,collisions:Ot,delta:To,over:Ao},Oe===Se.DragEnd&&typeof Eo=="function"&&await Promise.resolve(Eo(Xt))&&(Oe=Se.DragCancel)}D.current=null,(0,ma.unstable_batchedUpdates)(()=>{x({type:Oe}),C($t.Uninitialized),Zl(null),U(null),N(null),Un.current=null;let Eo=Oe===Se.DragEnd?"onDragEnd":"onDragCancel";if(Xt){let Hn=_.current[Eo];Hn?.(Xt),w({type:Eo,event:Xt})}})}}},[R]),mp=(0,I.useCallback)((_e,Ye)=>(Ze,jt)=>{let st=Ze.nativeEvent,Je=R.get(jt);if(D.current!==null||!Je||st.dndKit||st.defaultPrevented)return;let yt={active:Je};_e(Ze,Ye.options,yt)===!0&&(st.dndKit={capturedBy:Ye.sensor},D.current=jt,Jl(Ze,Ye))},[R,Jl]),Ql=lm(c,mp);gm(c),et(()=>{V&&b===$t.Initializing&&C($t.Initialized)},[V,b]),(0,I.useEffect)(()=>{let{onDragMove:_e}=_.current,{active:Ye,activatorEvent:Ze,collisions:jt,over:st}=te.current;if(!Ye||!Ze)return;let Je={active:Ye,activatorEvent:Ze,collisions:jt,delta:{x:Xa.x,y:Xa.y},over:st};(0,ma.unstable_batchedUpdates)(()=>{_e?.(Je),w({type:"onDragMove",event:Je})})},[Xa.x,Xa.y]),(0,I.useEffect)(()=>{let{active:_e,activatorEvent:Ye,collisions:Ze,droppableContainers:jt,scrollAdjustedTranslate:st}=te.current;if(!_e||D.current==null||!Ye||!st)return;let{onDragOver:Je}=_.current,yt=jt.get(Yl),Ya=yt&&yt.rect.current?{id:yt.id,rect:yt.rect.current,data:yt.data,disabled:yt.disabled}:null,Oe={active:_e,activatorEvent:Ye,collisions:Ze,delta:{x:st.x,y:st.y},over:Ya};(0,ma.unstable_batchedUpdates)(()=>{Zl(Ya),Je?.(Oe),w({type:"onDragOver",event:Oe})})},[Yl]),et(()=>{te.current={activatorEvent:F,active:y,activeNode:pe,collisionRect:$a,collisions:Mo,droppableRects:ne,draggableNodes:R,draggingNode:ye,draggingNodeRect:It,droppableContainers:E,over:Wt,scrollableAncestors:Gt,scrollAdjustedTranslate:Xa},k.current={initial:It,translated:$a}},[y,pe,Mo,$a,R,ye,It,ne,E,Wt,Gt,Xa]),om({...B,delta:P,draggingRect:$a,pointerCoordinates:Xl,scrollableAncestors:Gt,scrollableAncestorRects:Lr});let gp=(0,I.useMemo)(()=>({active:y,activeNode:pe,activeNodeRect:V,activatorEvent:F,collisions:Mo,containerNodeRect:oe,dragOverlay:Ie,draggableNodes:R,droppableContainers:E,droppableRects:ne,over:Wt,measureDroppableContainers:be,scrollableAncestors:Gt,scrollableAncestorRects:Lr,measuringConfiguration:K,measuringScheduled:Pe,windowRect:_n}),[y,pe,V,F,Mo,oe,Ie,R,E,ne,Wt,be,Gt,Lr,K,Pe,_n]),hp=(0,I.useMemo)(()=>({activatorEvent:F,activators:Ql,active:y,activeNodeRect:V,ariaDescribedById:{draggable:M},dispatch:x,draggableNodes:R,over:Wt,measureDroppableContainers:be}),[F,Ql,y,V,x,M,R,Wt,be]);return I.default.createElement(Si.Provider,{value:v},I.default.createElement(Wo.Provider,{value:hp},I.default.createElement(qi.Provider,{value:gp},I.default.createElement(Er.Provider,{value:pp},u)),I.default.createElement(ym,{disabled:l?.restoreFocus===!1})),I.default.createElement(Ep,{...l,hiddenTextDescribedById:M}));function xp(){let _e=O?.autoScrollEnabled===!1,Ye=typeof i=="object"?i.enabled===!1:i===!1,Ze=L&&!_e&&!Ye;return typeof i=="object"?{...i,enabled:Ze}:{enabled:Ze}}}),Pm=(0,I.createContext)(null),Ii="button",km="Draggable";function Vi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=da(km),{activators:s,activatorEvent:l,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,I.useContext)(Wo),{role:h=Ii,roleDescription:g="draggable",tabIndex:p=0}=r??{},m=i?.id===t,x=(0,I.useContext)(m?Er:Pm),[w,v]=Bo(),[b,C]=Bo(),L=hm(s,t),S=Ja(a);et(()=>(d.set(t,{id:t,key:n,node:w,activatorNode:b,data:S}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,I.useMemo)(()=>({role:h,tabIndex:p,"aria-disabled":o,"aria-pressed":m&&h===Ii?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,h,p,m,g,c.draggable]);return{active:i,activatorEvent:l,activeNodeRect:u,attributes:R,isDragging:m,listeners:o?void 0:L,node:w,over:f,setNodeRef:v,setActivatorNodeRef:C,transform:x}}function os(){return(0,I.useContext)(qi)}var Dm="Droppable",Mm={timeout:25};function Fr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=da(Dm),{active:s,dispatch:l,over:i,measureDroppableContainers:u}=(0,I.useContext)(Wo),c=(0,I.useRef)({disabled:a}),d=(0,I.useRef)(!1),f=(0,I.useRef)(null),h=(0,I.useRef)(null),{disabled:g,updateMeasurementsFor:p,timeout:m}={...Mm,...r},x=Ja(p??o),w=(0,I.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),h.current=null},m)},[m]),v=Tr({callback:w,disabled:g||!s}),b=(0,I.useCallback)((R,P)=>{v&&(P&&(v.unobserve(P),d.current=!1),R&&v.observe(R))},[v]),[C,L]=Bo(b),S=Ja(t);return(0,I.useEffect)(()=>{!v||!C.current||(v.disconnect(),d.current=!1,v.observe(C.current))},[C,v]),(0,I.useEffect)(()=>(l({type:Se.RegisterDroppable,element:{id:o,key:n,disabled:a,node:C,rect:f,data:S}}),()=>l({type:Se.UnregisterDroppable,key:n,id:o})),[o]),(0,I.useEffect)(()=>{a!==c.current.disabled&&(l({type:Se.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,l]),{active:s,rect:f,isOver:i?.id===o,node:C,over:i,setNodeRef:L}}function Am(e){let{animation:t,children:a}=e,[o,r]=(0,I.useState)(null),[n,s]=(0,I.useState)(null),l=No(a);return!a&&!o&&l&&r(l),et(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),I.default.createElement(I.default.Fragment,null,a,o?(0,I.cloneElement)(o,{ref:s}):null)}var Tm={x:0,y:0,scaleX:1,scaleY:1};function Em(e){let{children:t}=e;return I.default.createElement(Wo.Provider,{value:Hi},I.default.createElement(Er.Provider,{value:Tm},t))}var Om={position:"fixed",touchAction:"none"},Fm=e=>eo(e)?"transform 250ms ease":void 0,Bm=(0,I.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:s,rect:l,style:i,transform:u,transition:c=Fm}=e;if(!l)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Om,width:l.width,height:l.height,top:l.top,left:l.left,transform:Qe.Transform.toString(d),transformOrigin:r&&o?Op(o,l):void 0,transition:typeof c=="function"?c(o):c,...i};return I.default.createElement(a,{className:s,style:f,ref:t},n)}),Nm=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:s}=e;if(n!=null&&n.active)for(let[l,i]of Object.entries(n.active))i!==void 0&&(r[l]=a.node.style.getPropertyValue(l),a.node.style.setProperty(l,i));if(n!=null&&n.dragOverlay)for(let[l,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(l,i);return s!=null&&s.active&&a.node.classList.add(s.active),s!=null&&s.dragOverlay&&o.node.classList.add(s.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);s!=null&&s.active&&a.node.classList.remove(s.active)}},_m=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:Qe.Transform.toString(t)},{transform:Qe.Transform.toString(a)}]},Um={duration:250,easing:"ease",keyframes:_m,sideEffects:Nm({styles:{active:{opacity:"0"}}})};function Hm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Fo((n,s)=>{if(t===null)return;let l=a.get(n);if(!l)return;let i=l.node.current;if(!i)return;let u=Ui(s);if(!u)return;let{transform:c}=He(s).getComputedStyle(s),d=Di(c);if(!d)return;let f=typeof t=="function"?t:qm(t);return Bi(i,r.draggable.measure),f({active:{id:n,data:l.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:s,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function qm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Um,...e};return n=>{let{active:s,dragOverlay:l,transform:i,...u}=n;if(!t)return;let c={x:l.rect.left-s.rect.left,y:l.rect.top-s.rect.top},d={scaleX:i.scaleX!==1?s.rect.width*i.scaleX/l.rect.width:1,scaleY:i.scaleY!==1?s.rect.height*i.scaleY/l.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:s,dragOverlay:l,transform:{initial:i,final:f}}),[g]=h,p=h[h.length-1];if(JSON.stringify(g)===JSON.stringify(p))return;let m=o?.({active:s,dragOverlay:l,...u}),x=l.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(w=>{x.onfinish=()=>{m?.(),w()}})}}var yi=0;function zm(e){return(0,I.useMemo)(()=>{if(e!=null)return yi++,yi},[e])}var Gi=I.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:s,wrapperElement:l="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:g,droppableContainers:p,dragOverlay:m,over:x,measuringConfiguration:w,scrollableAncestors:v,scrollableAncestorRects:b,windowRect:C}=os(),L=(0,I.useContext)(Er),S=zm(d?.id),R=zi(s,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:v,scrollableAncestorRects:b,transform:L,windowRect:C}),P=as(f),E=Hm({config:o,draggableNodes:g,droppableContainers:p,measuringConfiguration:w}),T=P?m.setRef:void 0;return I.default.createElement(Em,null,I.default.createElement(Am,{animation:E},d&&S?I.default.createElement(Bm,{key:S,id:d.id,ref:T,as:l,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var xe=H(require("react"));function Wi(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Vm(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Br(e){return e!==null&&e>=0}function Gm(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Wm(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var ji=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Wi(t,o,a),s=t[r],l=n[r];return!l||!s?null:{x:l.left-s.left,y:l.top-s.top,scaleX:l.width/s.width,scaleY:l.height/s.height}};var Nr={scaleX:1,scaleY:1},Ur=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:s}=e,l=(t=n[a])!=null?t:o;if(!l)return null;if(r===a){let u=n[s];return u?{x:0,y:a<s?u.top+u.height-(l.top+l.height):u.top-l.top,...Nr}:null}let i=jm(n,r,a);return r>a&&r<=s?{x:0,y:-l.height-i,...Nr}:r<a&&r>=s?{x:0,y:l.height+i,...Nr}:{x:0,y:0,...Nr}};function jm(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Ki="Sortable",Xi=xe.default.createContext({activeIndex:-1,containerId:Ki,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ji,disabled:{draggable:!1,droppable:!1}});function Hr(e){let{children:t,id:a,items:o,strategy:r=ji,disabled:n=!1}=e,{active:s,dragOverlay:l,droppableRects:i,over:u,measureDroppableContainers:c}=os(),d=da(Ki,a),f=l.rect!==null,h=(0,xe.useMemo)(()=>o.map(L=>typeof L=="object"&&"id"in L?L.id:L),[o]),g=s!=null,p=s?h.indexOf(s.id):-1,m=u?h.indexOf(u.id):-1,x=(0,xe.useRef)(h),w=!Gm(h,x.current),v=m!==-1&&p===-1||w,b=Wm(n);et(()=>{w&&g&&c(h)},[w,h,g,c]),(0,xe.useEffect)(()=>{x.current=h},[h]);let C=(0,xe.useMemo)(()=>({activeIndex:p,containerId:d,disabled:b,disableTransforms:v,items:h,overIndex:m,useDragOverlay:f,sortedRects:Vm(h,i),strategy:r}),[p,d,b.draggable,b.droppable,v,h,m,i,f,r]);return xe.default.createElement(Xi.Provider,{value:C},t)}var Km=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Wi(a,o,r).indexOf(t)},Xm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:s,previousItems:l,previousContainerId:i,transition:u}=e;return!u||!o||l!==n&&r===s?!1:a?!0:s!==r&&t===i},$m={duration:200,easing:"ease"},$i="transform",Ym=Qe.Transition.toString({property:$i,duration:0,easing:"linear"}),Zm={roleDescription:"sortable"};function Jm(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,s]=(0,xe.useState)(null),l=(0,xe.useRef)(a);return et(()=>{if(!t&&a!==l.current&&o.current){let i=r.current;if(i){let u=xa(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&s(c)}}a!==l.current&&(l.current=a)},[t,a,o,r]),(0,xe.useEffect)(()=>{n&&s(null)},[n]),n}function qr(e){let{animateLayoutChanges:t=Xm,attributes:a,disabled:o,data:r,getNewIndex:n=Km,id:s,strategy:l,resizeObserverConfig:i,transition:u=$m}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:g,sortedRects:p,overIndex:m,useDragOverlay:x,strategy:w}=(0,xe.useContext)(Xi),v=Qm(o,h),b=c.indexOf(s),C=(0,xe.useMemo)(()=>({sortable:{containerId:d,index:b,items:c},...r}),[d,r,b,c]),L=(0,xe.useMemo)(()=>c.slice(c.indexOf(s)),[c,s]),{rect:S,node:R,isOver:P,setNodeRef:E}=Fr({id:s,data:C,disabled:v.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...i}}),{active:T,activatorEvent:k,activeNodeRect:y,attributes:D,setNodeRef:O,listeners:U,isDragging:F,over:N,setActivatorNodeRef:_,transform:M}=Vi({id:s,data:C,attributes:{...Zm,...a},disabled:v.draggable}),Z=si(E,O),K=!!T,ne=K&&!g&&Br(f)&&Br(m),be=!x&&F,Pe=be&&ne?M:null,ke=ne?Pe??(l??w)({rects:p,activeNodeRect:y,activeIndex:f,overIndex:m,index:b}):null,B=Br(f)&&Br(m)?n({id:s,items:c,activeIndex:f,overIndex:m}):b,Q=T?.id,V=(0,xe.useRef)({activeId:Q,items:c,newIndex:B,containerId:d}),oe=c!==V.current.items,te=t({active:T,containerId:d,isDragging:F,isSorting:K,id:s,index:b,items:c,newIndex:V.current.newIndex,previousItems:V.current.items,previousContainerId:V.current.containerId,transition:u,wasDragging:V.current.activeId!=null}),le=Jm({disabled:!te,index:b,node:R,rect:S});return(0,xe.useEffect)(()=>{K&&V.current.newIndex!==B&&(V.current.newIndex=B),d!==V.current.containerId&&(V.current.containerId=d),c!==V.current.items&&(V.current.items=c)},[K,B,d,c]),(0,xe.useEffect)(()=>{if(Q===V.current.activeId)return;if(Q&&!V.current.activeId){V.current.activeId=Q;return}let ye=setTimeout(()=>{V.current.activeId=Q},50);return()=>clearTimeout(ye)},[Q]),{active:T,activeIndex:f,attributes:D,data:C,rect:S,index:b,newIndex:B,items:c,isOver:P,isSorting:K,isDragging:F,listeners:U,node:R,overIndex:m,over:N,setNodeRef:Z,setActivatorNodeRef:_,setDroppableNodeRef:E,setDraggableNodeRef:O,transform:le??ke,transition:Ie()};function Ie(){if(le||oe&&V.current.newIndex===b)return Ym;if(!(be&&!eo(k)||!u)&&(K||te))return Qe.Transition.toString({...u,property:$i})}}function Qm(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function _r(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var eg=[ee.Down,ee.Right,ee.Up,ee.Left],zr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:s,scrollableAncestors:l}}=t;if(eg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ee.Down:o.top<f.top&&i.push(d);break;case ee.Up:o.top>f.top&&i.push(d);break;case ee.Left:o.left>f.left&&i.push(d);break;case ee.Right:o.left<f.left&&i.push(d);break}});let u=Ar({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Vo(u,"id");if(c===s?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,g=f?.node.current;if(g&&h&&d&&f){let m=Go(g).some((L,S)=>l[S]!==L),x=Yi(d,f),w=tg(d,f),v=m||!x?{x:0,y:0}:{x:w?o.width-h.width:0,y:w?o.height-h.height:0},b={x:h.left,y:h.top};return v.x&&v.y?b:fa(b,v)}}}};function Yi(e,t){return!_r(e)||!_r(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function tg(e,t){return!_r(e)||!_r(t)||!Yi(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Gr=require("react");var Zi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var jo=require("react");var Ji={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Qi=(0,jo.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:r="",children:n,iconNode:s,...l},i)=>(0,jo.createElement)("svg",{ref:i,...Ji,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:Vr("lucide",r),...l},[...s.map(([u,c])=>(0,jo.createElement)(u,c)),...Array.isArray(n)?n:[n]]));var me=(e,t)=>{let a=(0,Gr.forwardRef)(({className:o,...r},n)=>(0,Gr.createElement)(Qi,{ref:n,iconNode:t,className:Vr(`lucide-${Zi(e)}`,o),...r}));return a.displayName=`${e}`,a};var ag=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jt=me("Check",ag);var og=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ao=me("ChevronDown",og);var rg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ko=me("ChevronUp",rg);var ng=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],Xo=me("Filter",ng);var sg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],$o=me("GripVertical",sg);var lg=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Yo=me("List",lg);var ig=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ft=me("Plus",ig);var ug=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Zo=me("Settings2",ug);var dg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Jo=me("Tag",dg);var cg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Bt=me("Trash2",cg);var fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qo=me("X",fg);var Tn=require("react");var wu=H(require("react"),1);var Fe=H(require("react"),1);var eu=H(require("react"),1),pg=Object.defineProperty,ns=(e,t)=>pg(e,"name",{value:t,configurable:!0});function rs(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ns(rs,"setRef");function tu(...e){return t=>{let a=!1,o=e.map(r=>{let n=rs(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():rs(e[r],null)}}}}ns(tu,"composeRefs");function X(...e){return eu.useCallback(tu(...e),e)}ns(X,"useComposedRefs");var mg=Object.defineProperty,mt=(e,t)=>mg(e,"name",{value:t,configurable:!0});function qe(e){let t=Fe.forwardRef((a,o)=>{let{children:r,...n}=a,s=null,l=!1,i=[];ss(r)&&typeof Wr=="function"&&(r=Wr(r._payload)),Fe.Children.forEach(r,f=>{if(su(f)){l=!0;let h=f,g="child"in h.props?h.props.child:h.props.children;ss(g)&&typeof Wr=="function"&&(g=Wr(g._payload)),s=hg(h,g),i.push(s?.props?.children)}else i.push(f)}),s?s=Fe.cloneElement(s,void 0,i):!l&&Fe.Children.count(r)===1&&Fe.isValidElement(r)&&(s=r);let u=s?nu(s):void 0,c=X(o,u);if(!s){if(r||r===0)throw new Error(l?wg(e):vg(e));return r}let d=ru(n,s.props??{});return s.type!==Fe.Fragment&&(d.ref=o?c:u),Fe.cloneElement(s,d)});return t.displayName=`${e}.Slot`,t}mt(qe,"createSlot");var au=qe("Slot"),ou=Symbol.for("radix.slottable");function gg(e){let t=mt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=ou,t}mt(gg,"createSlottable");var hg=mt((e,t)=>{if("child"in e.props){let a=e.props.child;return Fe.isValidElement(a)?Fe.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Fe.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function ru(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...l)=>{let i=n(...l);return r(...l),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}mt(ru,"mergeProps");function nu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}mt(nu,"getElementRef");function su(e){return Fe.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ou}mt(su,"isSlottable");var xg=Symbol.for("react.lazy");function ss(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===xg&&"_payload"in e&&lu(e._payload)}mt(ss,"isLazyComponent");function lu(e){return typeof e=="object"&&e!==null&&"then"in e}mt(lu,"isPromiseLike");var vg=mt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),wg=mt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Wr=Fe[" use ".trim().toString()];function iu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=iu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function jr(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=iu(e))&&(o&&(o+=" "),o+=t);return o}var uu=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,du=jr,Kr=(e,t)=>a=>{var o;if(t?.variants==null)return du(e,a?.class,a?.className);let{variants:r,defaultVariants:n}=t,s=Object.keys(r).map(u=>{let c=a?.[u],d=n?.[u];if(c===null)return null;let f=uu(c)||uu(d);return r[u][f]}),l=a&&Object.entries(a).reduce((u,c)=>{let[d,f]=c;return f===void 0||(u[d]=f),u},{}),i=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((u,c)=>{let{class:d,className:f,...h}=c;return Object.entries(h).every(g=>{let[p,m]=g;return Array.isArray(m)?m.includes({...n,...l}[p]):{...n,...l}[p]===m})?[...u,d,f]:u},[]);return du(e,s,i,a?.class,a?.className)};var us="-",bg=e=>{let t=Lg(e),{conflictingClassGroups:a,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:s=>{let l=s.split(us);return l[0]===""&&l.length!==1&&l.shift(),pu(l,t)||Cg(s)},getConflictingClassGroupIds:(s,l)=>{let i=a[s]||[];return l&&o[s]?[...i,...o[s]]:i}}},pu=(e,t)=>{if(e.length===0)return t.classGroupId;let a=e[0],o=t.nextPart.get(a),r=o?pu(e.slice(1),o):void 0;if(r)return r;if(t.validators.length===0)return;let n=e.join(us);return t.validators.find(({validator:s})=>s(n))?.classGroupId},cu=/^\[(.+)\]$/,Cg=e=>{if(cu.test(e)){let t=cu.exec(e)[1],a=t?.substring(0,t.indexOf(":"));if(a)return"arbitrary.."+a}},Lg=e=>{let{theme:t,prefix:a}=e,o={nextPart:new Map,validators:[]};return yg(Object.entries(e.classGroups),a).forEach(([n,s])=>{is(s,o,n,t)}),o},is=(e,t,a,o)=>{e.forEach(r=>{if(typeof r=="string"){let n=r===""?t:fu(t,r);n.classGroupId=a;return}if(typeof r=="function"){if(Ig(r)){is(r(o),t,a,o);return}t.validators.push({validator:r,classGroupId:a});return}Object.entries(r).forEach(([n,s])=>{is(s,fu(t,n),a,o)})})},fu=(e,t)=>{let a=e;return t.split(us).forEach(o=>{a.nextPart.has(o)||a.nextPart.set(o,{nextPart:new Map,validators:[]}),a=a.nextPart.get(o)}),a},Ig=e=>e.isThemeGetter,yg=(e,t)=>t?e.map(([a,o])=>{let r=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[t+s,l])):n);return[a,r]}):e,Sg=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,a=new Map,o=new Map,r=(n,s)=>{a.set(n,s),t++,t>e&&(t=0,o=a,a=new Map)};return{get(n){let s=a.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return r(n,s),s},set(n,s){a.has(n)?a.set(n,s):r(n,s)}}},mu="!",Rg=e=>{let{separator:t,experimentalParseClassName:a}=e,o=t.length===1,r=t[0],n=t.length,s=l=>{let i=[],u=0,c=0,d;for(let m=0;m<l.length;m++){let x=l[m];if(u===0){if(x===r&&(o||l.slice(m,m+n)===t)){i.push(l.slice(c,m)),c=m+n;continue}if(x==="/"){d=m;continue}}x==="["?u++:x==="]"&&u--}let f=i.length===0?l:l.substring(c),h=f.startsWith(mu),g=h?f.substring(1):f,p=d&&d>c?d-c:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:p}};return a?l=>a({className:l,parseClassName:s}):s},Pg=e=>{if(e.length<=1)return e;let t=[],a=[];return e.forEach(o=>{o[0]==="["?(t.push(...a.sort(),o),a=[]):a.push(o)}),t.push(...a.sort()),t},kg=e=>({cache:Sg(e.cacheSize),parseClassName:Rg(e),...bg(e)}),Dg=/\s+/,Mg=(e,t)=>{let{parseClassName:a,getClassGroupId:o,getConflictingClassGroupIds:r}=t,n=[],s=e.trim().split(Dg),l="";for(let i=s.length-1;i>=0;i-=1){let u=s[i],{modifiers:c,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:h}=a(u),g=!!h,p=o(g?f.substring(0,h):f);if(!p){if(!g){l=u+(l.length>0?" "+l:l);continue}if(p=o(f),!p){l=u+(l.length>0?" "+l:l);continue}g=!1}let m=Pg(c).join(":"),x=d?m+mu:m,w=x+p;if(n.includes(w))continue;n.push(w);let v=r(p,g);for(let b=0;b<v.length;++b){let C=v[b];n.push(x+C)}l=u+(l.length>0?" "+l:l)}return l};function Ag(){let e=0,t,a,o="";for(;e<arguments.length;)(t=arguments[e++])&&(a=gu(t))&&(o&&(o+=" "),o+=a);return o}var gu=e=>{if(typeof e=="string")return e;let t,a="";for(let o=0;o<e.length;o++)e[o]&&(t=gu(e[o]))&&(a&&(a+=" "),a+=t);return a};function Tg(e,...t){let a,o,r,n=s;function s(i){let u=t.reduce((c,d)=>d(c),e());return a=kg(u),o=a.cache.get,r=a.cache.set,n=l,l(i)}function l(i){let u=o(i);if(u)return u;let c=Mg(i,a);return r(i,c),c}return function(){return n(Ag.apply(null,arguments))}}var de=e=>{let t=a=>a[e]||[];return t.isThemeGetter=!0,t},hu=/^\[(?:([a-z-]+):)?(.+)\]$/i,Eg=/^\d+\/\d+$/,Og=new Set(["px","full","screen"]),Fg=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Bg=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ng=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_g=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ug=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nt=e=>oo(e)||Og.has(e)||Eg.test(e),Qt=e=>ro(e,"length",Kg),oo=e=>!!e&&!Number.isNaN(Number(e)),ls=e=>ro(e,"number",oo),er=e=>!!e&&Number.isInteger(Number(e)),Hg=e=>e.endsWith("%")&&oo(e.slice(0,-1)),j=e=>hu.test(e),ea=e=>Fg.test(e),qg=new Set(["length","size","percentage"]),zg=e=>ro(e,qg,xu),Vg=e=>ro(e,"position",xu),Gg=new Set(["image","url"]),Wg=e=>ro(e,Gg,$g),jg=e=>ro(e,"",Xg),tr=()=>!0,ro=(e,t,a)=>{let o=hu.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):a(o[2]):!1},Kg=e=>Bg.test(e)&&!Ng.test(e),xu=()=>!1,Xg=e=>_g.test(e),$g=e=>Ug.test(e);var Yg=()=>{let e=de("colors"),t=de("spacing"),a=de("blur"),o=de("brightness"),r=de("borderColor"),n=de("borderRadius"),s=de("borderSpacing"),l=de("borderWidth"),i=de("contrast"),u=de("grayscale"),c=de("hueRotate"),d=de("invert"),f=de("gap"),h=de("gradientColorStops"),g=de("gradientColorStopPositions"),p=de("inset"),m=de("margin"),x=de("opacity"),w=de("padding"),v=de("saturate"),b=de("scale"),C=de("sepia"),L=de("skew"),S=de("space"),R=de("translate"),P=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto",j,t],k=()=>[j,t],y=()=>["",Nt,Qt],D=()=>["auto",oo,j],O=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],_=()=>["","0",j],M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[oo,j];return{cacheSize:500,separator:":",theme:{colors:[tr],spacing:[Nt,Qt],blur:["none","",ea,j],brightness:Z(),borderColor:[e],borderRadius:["none","","full",ea,j],borderSpacing:k(),borderWidth:y(),contrast:Z(),grayscale:_(),hueRotate:Z(),invert:_(),gap:k(),gradientColorStops:[e],gradientColorStopPositions:[Hg,Qt],inset:T(),margin:T(),opacity:Z(),padding:k(),saturate:Z(),scale:Z(),sepia:_(),skew:Z(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",j]}],container:["container"],columns:[{columns:[ea]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...O(),j]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",er,j]}],basis:[{basis:T()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",j]}],grow:[{grow:_()}],shrink:[{shrink:_()}],order:[{order:["first","last","none",er,j]}],"grid-cols":[{"grid-cols":[tr]}],"col-start-end":[{col:["auto",{span:["full",er,j]},j]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[tr]}],"row-start-end":[{row:["auto",{span:[er,j]},j]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",j]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",j]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",j,t]}],"min-w":[{"min-w":[j,t,"min","max","fit"]}],"max-w":[{"max-w":[j,t,"none","full","min","max","fit","prose",{screen:[ea]},ea]}],h:[{h:[j,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[j,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[j,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[j,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ea,Qt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ls]}],"font-family":[{font:[tr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",j]}],"line-clamp":[{"line-clamp":["none",oo,ls]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Nt,j]}],"list-image":[{"list-image":["none",j]}],"list-style-type":[{list:["none","disc","decimal",j]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Nt,Qt]}],"underline-offset":[{"underline-offset":["auto",Nt,j]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...O(),Vg]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zg]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Wg]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:U()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[Nt,j]}],"outline-w":[{outline:[Nt,Qt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[Nt,Qt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ea,jg]}],"shadow-color":[{shadow:[tr]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[a]}],brightness:[{brightness:[o]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",ea,j]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[a]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",j]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",j]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",j]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[er,j]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",j]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Nt,Qt,ls]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}};var vu=Tg(Yg);function W(...e){return vu(jr(e))}var bu=require("react/jsx-runtime"),Zg=Kr("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[transform,color,background-color,border-color,box-shadow] duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-8 w-8"}},defaultVariants:{variant:"default",size:"default"}}),ze=wu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,bu.jsx)(o?au:"button",{className:W(Zg({variant:t,size:a,className:e})),ref:n,...r}));ze.displayName="Button";var ir=H(require("react"),1);var fe=H(require("react"),1);var Jg=Object.defineProperty,no=(e,t)=>Jg(e,"name",{value:t,configurable:!0}),Cu=!!(typeof window<"u"&&window.document&&window.document.createElement);function q(e,t,{checkForDefaultPrevented:a=!0}={}){return no(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}no(q,"composeEventHandlers");function Qg(e){if(!Cu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}no(Qg,"getOwnerWindow");function ds(e){if(!Cu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}no(ds,"getOwnerDocument");function Lu(e,t=!1){let{activeElement:a}=ds(e);if(!a?.nodeName)return null;if(Iu(a)&&a.contentDocument)return Lu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=ds(a).getElementById(o);if(r)return r}}return a}no(Lu,"getActiveElement");function Iu(e){return e.tagName==="IFRAME"}no(Iu,"isFrame");var ut=H(require("react"),1),cs=require("react/jsx-runtime"),eh=Object.defineProperty,it=(e,t)=>eh(e,"name",{value:t,configurable:!0});function th(e,t){let a=ut.createContext(t);a.displayName=e+"Context";let o=it(n=>{let{children:s,...l}=n,i=ut.useMemo(()=>l,Object.values(l));return(0,cs.jsx)(a.Provider,{value:i,children:s})},"Provider");o.displayName=e+"Provider";function r(n,s={}){let{optional:l=!1}=s,i=ut.useContext(a);if(i)return i;if(t!==void 0)return t;if(!l)throw new Error(`\`${n}\` must be used within \`${e}\``)}return it(r,"useContext"),[o,r]}it(th,"createContext");function Be(e,t=[]){let a=[];function o(n,s){let l=ut.createContext(s);l.displayName=n+"Context";let i=a.length;a=[...a,s];let u=it(d=>{let{scope:f,children:h,...g}=d,p=f?.[e]?.[i]||l,m=ut.useMemo(()=>g,Object.values(g));return(0,cs.jsx)(p.Provider,{value:m,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:g=!1}=h,p=f?.[e]?.[i]||l,m=ut.useContext(p);if(m)return m;if(s!==void 0)return s;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return it(c,"useContext"),[u,c]}it(o,"createContext");let r=it(()=>{let n=a.map(s=>ut.createContext(s));return it(function(l){let i=l?.[e]||n;return ut.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return r.scopeName=e,[o,yu(r,...t)]}it(Be,"createContextScope");function yu(...e){let t=e[0];if(e.length===1)return t;let a=it(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return it(function(n){let s=o.reduce((l,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...l,...d}},{});return ut.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}it(yu,"composeContextScopes");var fs=H(require("react"),1);var Su=H(require("react"),1),re=globalThis?.document?Su.useLayoutEffect:()=>{};var ah=Object.defineProperty,oh=(e,t)=>ah(e,"name",{value:t,configurable:!0}),rh=fs[" useId ".trim().toString()]||(()=>{}),nh=0;function tt(e){let[t,a]=fs.useState(rh());return re(()=>{e||a(o=>o??String(nh++))},[e]),e||(t?`radix-${t}`:"")}oh(tt,"useId");var dt=H(require("react"),1);var Xr=!1;var gt=H(require("react"),1);var so=H(require("react"),1),sh=Object.defineProperty,lh=(e,t)=>sh(e,"name",{value:t,configurable:!0}),Ru=so[" useEffectEvent ".trim().toString()],Pu=so[" useInsertionEffect ".trim().toString()];function ps(e){if(typeof Ru=="function")return Ru(e);let t=so.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Pu=="function"?Pu(()=>{t.current=e}):re(()=>{t.current=e}),so.useMemo(()=>(...a)=>t.current?.(...a),[])}lh(ps,"useEffectEvent");var ih=Object.defineProperty,ar=(e,t)=>ih(e,"name",{value:t,configurable:!0}),uh=dt[" useInsertionEffect ".trim().toString()]||re;function Rt({prop:e,defaultProp:t,onChange:a=ar(()=>{},"onChange"),caller:o}){let[r,n,s]=Du({defaultProp:t,onChange:a}),l=e!==void 0,i=l?e:r;if(Xr){let c=dt.useRef(e!==void 0);dt.useEffect(()=>{let d=c.current;d!==l&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,o])}let u=dt.useCallback(c=>{if(l){let d=Mu(c)?c(e):c;d!==e&&s.current?.(d)}else n(c)},[l,e,n,s]);return[i,u]}ar(Rt,"useControllableState");function Du({defaultProp:e,onChange:t}){let[a,o]=dt.useState(e),r=dt.useRef(a),n=dt.useRef(t);return uh(()=>{n.current=t},[t]),dt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}ar(Du,"useUncontrolledState");function Mu(e){return typeof e=="function"}ar(Mu,"isFunction");var ku=Symbol("RADIX:SYNC_STATE");function dh(e,t,a,o){let{prop:r,defaultProp:n,onChange:s,caller:l}=t,i=r!==void 0,u=ps(s);if(Xr){let m=gt.useRef(r!==void 0);gt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,l])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=gt.useReducer((m,x)=>{if(x.type===ku)return{...m,state:x.state};let w=e(m,x);return i&&!Object.is(w.state,m.state)&&u(w.state),w},...c),h=d.state,g=gt.useRef(h);gt.useEffect(()=>{g.current!==h&&(g.current=h,i||u(h))},[h,g,i]);let p=gt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return gt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:ku,state:r})},[r,d.state,i]),[p,f]}ar(dh,"useControllableStateReducer");var se=H(require("react"),1);var Au=H(require("react"),1),Tu=H(require("react-dom"),1);var Eu=require("react/jsx-runtime"),ch=Object.defineProperty,fh=(e,t)=>ch(e,"name",{value:t,configurable:!0}),ph=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Y=ph.reduce((e,t)=>{let a=qe(`Primitive.${t}`),o=Au.forwardRef((r,n)=>{let{asChild:s,...l}=r,i=s?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Eu.jsx)(i,{...l,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function or(e,t){e&&Tu.flushSync(()=>e.dispatchEvent(t))}fh(or,"dispatchDiscreteCustomEvent");var lo=H(require("react"),1),mh=Object.defineProperty,gh=(e,t)=>mh(e,"name",{value:t,configurable:!0});function Me(e){let t=lo.useRef(e);return lo.useEffect(()=>{t.current=e}),lo.useMemo(()=>(...a)=>t.current?.(...a),[])}gh(Me,"useCallbackRef");var Fu=require("react/jsx-runtime"),hh=Object.defineProperty,Ae=(e,t)=>hh(e,"name",{value:t,configurable:!0}),ms="dismissableLayer.update",xh="dismissableLayer.pointerDownOutside",vh="dismissableLayer.focusOutside",Ou,Bu=se.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),io=se.forwardRef(Ae(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:i,onDismiss:u,...c}=t,d=se.useContext(Bu),[f,h]=se.useState(null),g=f?.ownerDocument??globalThis?.document,[,p]=se.useState({}),m=X(a,h),x=Array.from(d.layers),[w]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=w?x.indexOf(w):-1,b=f?x.indexOf(f):-1,C=d.layersWithOutsidePointerEventsDisabled.size>0,L=b>=v,S=se.useRef(!1),R=Nu(k=>{s?.(k),i?.(k),k.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:S,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:se.useCallback(k=>{if(!(k instanceof Node))return!1;let y=[...d.branches].some(D=>D.contains(k));return L&&!y},[d.branches,L])}),P=_u(k=>{if(r&&S.current)return;let y=k.target;[...d.branches].some(O=>O.contains(y))||(l?.(k),i?.(k),k.defaultPrevented||u?.())},g),E=f?b===x.length-1:!1,T=Me(k=>{k.key==="Escape"&&(n?.(k),!k.defaultPrevented&&u&&(k.preventDefault(),u()))});return se.useEffect(()=>{if(E)return g.addEventListener("keydown",T,{capture:!0}),()=>g.removeEventListener("keydown",T,{capture:!0})},[g,E,T]),se.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Ou=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),gs(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=Ou))}},[f,g,o,d]),se.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),gs())},[f,d]),se.useEffect(()=>{let k=Ae(()=>p({}),"handleUpdate");return document.addEventListener(ms,k),()=>document.removeEventListener(ms,k)},[]),(0,Fu.jsx)(Y.div,{...c,ref:m,style:{pointerEvents:C?L?"auto":"none":void 0,...t.style},onFocusCapture:q(t.onFocusCapture,P.onFocusCapture),onBlurCapture:q(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:q(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function hs(){let e=se.useContext(Bu),[t,a]=se.useState(null);return se.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ae(hs,"useDismissableLayerSurface");var wh=Ae(()=>!0,"IS_TRUE");function Nu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:s=wh}=t,l=Me(e),i=se.useRef(!1),u=se.useRef(!1),c=se.useRef(new Map),d=se.useRef(()=>{});return se.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Ae(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Ae(h,"isOutsideInteractionIntercepted");function g(v){if(!u.current)return;let b=v.target;b instanceof Node&&[...n].some(L=>L.contains(b))||c.current.set(v.type,!0),v.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Ae(g,"handleInteractionCapture");function p(v){u.current&&c.current.set(v.type,!1)}Ae(p,"handleInteractionBubble");let m=Ae(v=>{if(v.target&&!i.current){let C=function(){a.removeEventListener("click",d.current);let S=h();f(),S||xs(xh,l,L,{discrete:!0})};var b=C;if(Ae(C,"handleAndDispatchPointerDownOutsideEvent"),!s(v.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let L={originalEvent:v};u.current=!0,r.current=o&&v.button===0,c.current.clear(),!o||v.button!==0?C():(a.removeEventListener("click",d.current),d.current=C,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let v of x)a.addEventListener(v,g,!0),a.addEventListener(v,p);let w=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(w),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let v of x)a.removeEventListener(v,g,!0),a.removeEventListener(v,p)}},[a,l,o,r,n,s]),{onPointerDownCapture:Ae(()=>i.current=!0,"onPointerDownCapture")}}Ae(Nu,"usePointerDownOutside");function _u(e,t=globalThis?.document){let a=Me(e),o=se.useRef(!1);return se.useEffect(()=>{let r=Ae(n=>{n.target&&!o.current&&xs(vh,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ae(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ae(()=>o.current=!1,"onBlurCapture")}}Ae(_u,"useFocusOutside");function gs(){let e=new CustomEvent(ms);document.dispatchEvent(e)}Ae(gs,"dispatchUpdate");function xs(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?or(r,n):r.dispatchEvent(n)}Ae(xs,"handleAndDispatchCustomEvent");var ct=H(require("react"),1);var qu=require("react/jsx-runtime"),bh=Object.defineProperty,We=(e,t)=>bh(e,"name",{value:t,configurable:!0}),vs="focusScope.autoFocusOnMount",ws="focusScope.autoFocusOnUnmount",Uu={bubbles:!1,cancelable:!0},uo=ct.forwardRef(We(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:s,...l}=t,[i,u]=ct.useState(null),c=Me(n),d=Me(s),f=ct.useRef(null),h=X(a,u),g=ct.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ct.useEffect(()=>{if(r){let v=function(S){if(g.paused||!i)return;let R=S.target;i.contains(R)?f.current=R:_t(f.current,{select:!0})},b=function(S){if(g.paused||!i)return;let R=S.relatedTarget;R!==null&&(i.contains(R)||_t(f.current,{select:!0}))},C=function(S){if(document.activeElement===document.body)for(let P of S)P.removedNodes.length>0&&_t(i)};var m=v,x=b,w=C;We(v,"handleFocusIn"),We(b,"handleFocusOut"),We(C,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",b);let L=new MutationObserver(C);return i&&L.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),L.disconnect()}}},[r,i,g.paused]),ct.useEffect(()=>{if(i){Hu.add(g);let m=document.activeElement;if(!i.contains(m)){let w=new CustomEvent(vs,Uu);i.addEventListener(vs,c),i.dispatchEvent(w),w.defaultPrevented||(zu(Ku(Ls(i)),{select:!0}),document.activeElement===m&&_t(i))}return()=>{i.removeEventListener(vs,c),setTimeout(()=>{let w=new CustomEvent(ws,Uu);i.addEventListener(ws,d),i.dispatchEvent(w),w.defaultPrevented||_t(m??document.body,{select:!0}),i.removeEventListener(ws,d),Hu.remove(g)},0)}}},[i,c,d,g]);let p=ct.useCallback(m=>{if(!o&&!r||g.paused)return;let x=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,w=document.activeElement;if(x&&w){let v=m.currentTarget,[b,C]=Vu(v);b&&C?!m.shiftKey&&w===C?(m.preventDefault(),o&&_t(b,{select:!0})):m.shiftKey&&w===b&&(m.preventDefault(),o&&_t(C,{select:!0})):w===v&&m.preventDefault()}},[o,r,g.paused]);return(0,qu.jsx)(Y.div,{tabIndex:-1,...l,ref:h,onKeyDown:p})},"FocusScope"));function zu(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(_t(o,{select:t}),document.activeElement!==a)return}We(zu,"focusFirst");function Vu(e){let t=Ls(e),a=bs(t,e),o=bs(t.reverse(),e);return[a,o]}We(Vu,"getTabbableEdges");function Ls(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:We(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}We(Ls,"getTabbableCandidates");function bs(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Gu(o,{upTo:t})))return o}We(bs,"findVisible");function Gu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}We(Gu,"isHidden");function Wu(e){return e instanceof HTMLInputElement&&"select"in e}We(Wu,"isSelectableInput");function _t(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Wu(e)&&t&&e.select()}}We(_t,"focus");var Hu=ju();function ju(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Cs(e,t),e.unshift(t)},remove(t){e=Cs(e,t),e[0]?.resume()}}}We(ju,"createFocusScopesStack");function Cs(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}We(Cs,"arrayRemove");function Ku(e){return e.filter(t=>t.tagName!=="A")}We(Ku,"removeLinks");var $r=H(require("react"),1),Xu=H(require("react-dom"),1);var $u=require("react/jsx-runtime"),Ch=Object.defineProperty,Lh=(e,t)=>Ch(e,"name",{value:t,configurable:!0}),co=$r.forwardRef(Lh(function(t,a){let{container:o,...r}=t,[n,s]=$r.useState(!1);re(()=>s(!0),[]);let l=o||n&&globalThis?.document?.body;return l?Xu.createPortal((0,$u.jsx)(Y.div,{...r,ref:a}),l):null},"Portal"));var Ne=H(require("react"),1);var Yu=H(require("react"),1),Ih=Object.defineProperty,Ut=(e,t)=>Ih(e,"name",{value:t,configurable:!0});function Zu(e,t){return Yu.useReducer((a,o)=>t[a][o]??a,e)}Ut(Zu,"useStateMachine");var Ht=Ut(e=>{let{present:t,children:a}=e,o=Ju(t),r=typeof a=="function"?a({present:o.isPresent}):Ne.Children.only(a),n=Qu(o.ref,ed(r));return typeof a=="function"||o.isPresent?Ne.cloneElement(r,{ref:n}):null},"Presence");function Ju(e){let[t,a]=Ne.useState(),o=Ne.useRef(null),r=Ne.useRef(e),n=Ne.useRef("none"),s=Ne.useRef(void 0),l=e?"mounted":"unmounted",[i,u]=Zu(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ne.useEffect(()=>{i==="mounted"?(n.current=s.current??fo(o.current),s.current=void 0):n.current="none"},[i]),re(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,g=fo(c);e?(s.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),re(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Ut(g=>{let m=fo(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),h=Ut(g=>{g.target===t&&(n.current=fo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ne.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,s.current=fo(d)}else o.current=null;a(c)},[])}}Ut(Ju,"usePresence");function Is(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Ut(Is,"setRef");function Qu(...e){let t=Ne.useRef(e);return t.current=e,Ne.useCallback(a=>{let o=t.current,r=!1,n=o.map(s=>{let l=Is(s,a);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<n.length;s++){let l=n[s];typeof l=="function"?l():Is(o[s],null)}}},[])}Ut(Qu,"useStableComposedRefs");function fo(e){return e?.animationName||"none"}Ut(fo,"getAnimationName");function ed(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Ut(ed,"getElementRef");var td=H(require("react"),1),yh=Object.defineProperty,Ss=(e,t)=>yh(e,"name",{value:t,configurable:!0}),Yr=0,po=null;function Sh(e){return ta(),e.children}Ss(Sh,"FocusGuards");function ta(){td.useEffect(()=>{po||(po={start:ys(),end:ys()});let{start:e,end:t}=po;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Yr++,()=>{Yr===1&&(po?.start.remove(),po?.end.remove(),po=null),Yr=Math.max(0,Yr-1)}},[])}Ss(ta,"useFocusGuards");function ys(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Ss(ys,"createFocusGuard");var Ke=function(){return Ke=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ke.apply(this,arguments)};function Zr(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function ad(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var an=H(require("react"));var Ve=H(require("react"));var va="right-scroll-bar-position",wa="width-before-scroll-bar",Rs="with-scroll-bars-hidden",Ps="--removed-body-scroll-bar-size";function Jr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var od=require("react");function rd(e,t){var a=(0,od.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Qr=H(require("react"));var Rh=typeof window<"u"?Qr.useLayoutEffect:Qr.useEffect,nd=new WeakMap;function ks(e,t){var a=rd(t||null,function(o){return e.forEach(function(r){return Jr(r,o)})});return Rh(function(){var o=nd.get(a);if(o){var r=new Set(o),n=new Set(e),s=a.current;r.forEach(function(l){n.has(l)||Jr(l,null)}),n.forEach(function(l){r.has(l)||Jr(l,s)})}nd.set(a,e)},[e]),a}function Ph(e){return e}function kh(e,t){t===void 0&&(t=Ph);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var s=t(n,o);return a.push(s),function(){a=a.filter(function(l){return l!==s})}},assignSyncMedium:function(n){for(o=!0;a.length;){var s=a;a=[],s.forEach(n)}a={push:function(l){return n(l)},filter:function(){return a}}},assignMedium:function(n){o=!0;var s=[];if(a.length){var l=a;a=[],l.forEach(n),s=a}var i=function(){var c=s;s=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),a}}}};return r}function Ds(e){e===void 0&&(e={});var t=kh(null);return t.options=Ke({async:!0,ssr:!1},e),t}var sd=H(require("react")),ld=function(e){var t=e.sideCar,a=Zr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return sd.createElement(o,Ke({},a))};ld.isSideCarExport=!0;function Ms(e,t){return e.useMedium(t),ld}var en=Ds();var As=function(){},rr=Ve.forwardRef(function(e,t){var a=Ve.useRef(null),o=Ve.useState({onScrollCapture:As,onWheelCapture:As,onTouchMoveCapture:As}),r=o[0],n=o[1],s=e.forwardProps,l=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,g=e.noIsolation,p=e.inert,m=e.allowPinchZoom,x=e.as,w=x===void 0?"div":x,v=e.gapMode,b=Zr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=f,L=ks([a,t]),S=Ke(Ke({},b),r);return Ve.createElement(Ve.Fragment,null,c&&Ve.createElement(C,{sideCar:en,removeScrollBar:u,shards:d,noRelative:h,noIsolation:g,inert:p,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:v}),s?Ve.cloneElement(Ve.Children.only(l),Ke(Ke({},S),{ref:L})):Ve.createElement(w,Ke({},S,{className:i,ref:L}),l))});rr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};rr.classNames={fullWidth:wa,zeroRight:va};var ce=H(require("react"));var go=H(require("react"));var dd=H(require("react"));var id;var ud=function(){if(id)return id;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Dh(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ud();return t&&e.setAttribute("nonce",t),e}function Mh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ah(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ts=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Dh())&&(Mh(t,a),Ah(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Es=function(){var e=Ts();return function(t,a){dd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var nr=function(){var e=Es(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Th={left:0,top:0,right:0,gap:0},Os=function(e){return parseInt(e||"",10)||0},Eh=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Os(a),Os(o),Os(r)]},Fs=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Th;var t=Eh(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Oh=nr(),mo="data-scroll-locked",Fh=function(e,t,a,o){var r=e.left,n=e.top,s=e.right,l=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Rs,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(l,"px ").concat(o,`;
  }
  body[`).concat(mo,`] {
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
  
  .`).concat(va,` {
    right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(wa,` {
    margin-right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(va," .").concat(va,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(wa," .").concat(wa,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(mo,`] {
    `).concat(Ps,": ").concat(l,`px;
  }
`)},cd=function(){var e=parseInt(document.body.getAttribute(mo)||"0",10);return isFinite(e)?e:0},Bh=function(){go.useEffect(function(){return document.body.setAttribute(mo,(cd()+1).toString()),function(){var e=cd()-1;e<=0?document.body.removeAttribute(mo):document.body.setAttribute(mo,e.toString())}},[])},Bs=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Bh();var n=go.useMemo(function(){return Fs(r)},[r]);return go.createElement(Oh,{styles:Fh(n,!t,r,a?"":"!important")})};var Ns=!1;if(typeof window<"u")try{sr=Object.defineProperty({},"passive",{get:function(){return Ns=!0,!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Ns=!1}var sr,ba=Ns?{passive:!1}:!1;var Nh=function(e){return e.tagName==="TEXTAREA"},fd=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Nh(e)&&a[t]==="visible")},_h=function(e){return fd(e,"overflowY")},Uh=function(e){return fd(e,"overflowX")},_s=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=pd(e,o);if(r){var n=md(e,o),s=n[1],l=n[2];if(s>l)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Hh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},qh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},pd=function(e,t){return e==="v"?_h(t):Uh(t)},md=function(e,t){return e==="v"?Hh(t):qh(t)},zh=function(e,t){return e==="h"&&t==="rtl"?-1:1},gd=function(e,t,a,o,r){var n=zh(e,window.getComputedStyle(t).direction),s=n*o,l=a.target,i=t.contains(l),u=!1,c=s>0,d=0,f=0;do{if(!l)break;var h=md(e,l),g=h[0],p=h[1],m=h[2],x=p-m-n*g;(g||x)&&pd(e,l)&&(d+=x,f+=g);var w=l.parentNode;l=w&&w.nodeType===Node.DOCUMENT_FRAGMENT_NODE?w.host:w}while(!i&&l!==document.body||i&&(t.contains(l)||t===l));return(c&&(r&&Math.abs(d)<1||!r&&s>d)||!c&&(r&&Math.abs(f)<1||!r&&-s>f))&&(u=!0),u};var tn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},hd=function(e){return[e.deltaX,e.deltaY]},xd=function(e){return e&&"current"in e?e.current:e},Vh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Gh=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Wh=0,ho=[];function vd(e){var t=ce.useRef([]),a=ce.useRef([0,0]),o=ce.useRef(),r=ce.useState(Wh++)[0],n=ce.useState(nr)[0],s=ce.useRef(e);ce.useEffect(function(){s.current=e},[e]),ce.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var p=ad([e.lockRef.current],(e.shards||[]).map(xd),!0).filter(Boolean);return p.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),p.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var l=ce.useCallback(function(p,m){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!s.current.allowPinchZoom;var x=tn(p),w=a.current,v="deltaX"in p?p.deltaX:w[0]-x[0],b="deltaY"in p?p.deltaY:w[1]-x[1],C,L=p.target,S=Math.abs(v)>Math.abs(b)?"h":"v";if("touches"in p&&S==="h"&&L.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,E=P?P===L||P.contains(L):!1;if(E)return!1;var T=_s(S,L);if(!T)return!0;if(T?C=S:(C=S==="v"?"h":"v",T=_s(S,L)),!T)return!1;if(!o.current&&"changedTouches"in p&&(v||b)&&(o.current=C),!C)return!0;var k=o.current||C;return gd(k,m,p,k==="h"?v:b,!0)},[]),i=ce.useCallback(function(p){var m=p;if(!(!ho.length||ho[ho.length-1]!==n)){var x="deltaY"in m?hd(m):tn(m),w=t.current.filter(function(C){return C.name===m.type&&(C.target===m.target||m.target===C.shadowParent)&&Vh(C.delta,x)})[0];if(w&&w.should){m.cancelable&&m.preventDefault();return}if(!w){var v=(s.current.shards||[]).map(xd).filter(Boolean).filter(function(C){return C.contains(m.target)}),b=v.length>0?l(m,v[0]):!s.current.noIsolation;b&&m.cancelable&&m.preventDefault()}}},[]),u=ce.useCallback(function(p,m,x,w){var v={name:p,delta:m,target:x,should:w,shadowParent:jh(x)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(b){return b!==v})},1)},[]),c=ce.useCallback(function(p){a.current=tn(p),o.current=void 0},[]),d=ce.useCallback(function(p){u(p.type,hd(p),p.target,l(p,e.lockRef.current))},[]),f=ce.useCallback(function(p){u(p.type,tn(p),p.target,l(p,e.lockRef.current))},[]);ce.useEffect(function(){return ho.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,ba),document.addEventListener("touchmove",i,ba),document.addEventListener("touchstart",c,ba),function(){ho=ho.filter(function(p){return p!==n}),document.removeEventListener("wheel",i,ba),document.removeEventListener("touchmove",i,ba),document.removeEventListener("touchstart",c,ba)}},[]);var h=e.removeScrollBar,g=e.inert;return ce.createElement(ce.Fragment,null,g?ce.createElement(n,{styles:Gh(r)}):null,h?ce.createElement(Bs,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function jh(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var wd=Ms(en,vd);var bd=an.forwardRef(function(e,t){return an.createElement(rr,Ke({},e,{ref:t,sideCar:wd}))});bd.classNames=rr.classNames;var Ca=bd;var Kh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},xo=new WeakMap,on=new WeakMap,rn={},Us=0,Cd=function(e){return e&&(e.host||Cd(e.parentNode))},Xh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Cd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},$h=function(e,t,a,o){var r=Xh(t,Array.isArray(e)?e:[e]);rn[a]||(rn[a]=new WeakMap);var n=rn[a],s=[],l=new Set,i=new Set(r),u=function(d){!d||l.has(d)||(l.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))c(f);else try{var h=f.getAttribute(o),g=h!==null&&h!=="false",p=(xo.get(f)||0)+1,m=(n.get(f)||0)+1;xo.set(f,p),n.set(f,m),s.push(f),p===1&&g&&on.set(f,!0),m===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),l.clear(),Us++,function(){s.forEach(function(d){var f=xo.get(d)-1,h=n.get(d)-1;xo.set(d,f),n.set(d,h),f||(on.has(d)||d.removeAttribute(o),on.delete(d)),h||d.removeAttribute(a)}),Us--,Us||(xo=new WeakMap,xo=new WeakMap,on=new WeakMap,rn={})}},vo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||Kh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),$h(o,r,a,"aria-hidden")):function(){return null}};var ge=require("react/jsx-runtime"),Yh=Object.defineProperty,ft=(e,t)=>Yh(e,"name",{value:t,configurable:!0}),qs="Dialog",[Ld,nI]=Be(qs),[Zh,Pt]=Ld(qs),Id=ft(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:s=!0}=e,l=fe.useRef(null),i=fe.useRef(null),[u,c]=Rt({prop:o,defaultProp:r??!1,onChange:n,caller:qs}),[d,f]=fe.useState(0),[h,g]=fe.useState(0);return(0,ge.jsx)(Zh,{scope:t,triggerRef:l,contentRef:i,contentId:tt(),titleId:tt(),descriptionId:tt(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:g,open:u,onOpenChange:c,onOpenToggle:fe.useCallback(()=>c(p=>!p),[c]),modal:s,children:a})},"Dialog");var yd="DialogPortal",[Jh,Sd]=Ld(yd,{forceMount:void 0}),Rd=ft(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Pt(yd,t);return(0,ge.jsx)(Jh,{scope:t,forceMount:a,children:fe.Children.map(o,s=>(0,ge.jsx)(Ht,{present:a||n.open,children:(0,ge.jsx)(co,{asChild:!0,container:r,children:s})}))})},"DialogPortal"),Hs="DialogOverlay",zs=fe.forwardRef(ft(function(t,a){let o=Sd(Hs,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=Pt(Hs,t.__scopeDialog);return s.modal?(0,ge.jsx)(Ht,{present:r||s.open,children:(0,ge.jsx)(ex,{...n,ref:a})}):null},"DialogOverlay")),Qh=qe("DialogOverlay.RemoveScroll"),ex=fe.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(Hs,o),s=hs(),l=X(a,s);return(0,ge.jsx)(Ca,{as:Qh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,ge.jsx)(Y.div,{"data-state":js(n.open),...r,ref:l,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),lr="DialogContent",Vs=fe.forwardRef(ft(function(t,a){let o=Sd(lr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=Pt(lr,t.__scopeDialog);return(0,ge.jsx)(Ht,{present:r||s.open,children:s.modal?(0,ge.jsx)(tx,{...n,ref:a}):(0,ge.jsx)(ax,{...n,ref:a})})},"DialogContent")),tx=fe.forwardRef(ft(function(t,a){let o=Pt(lr,t.__scopeDialog),r=fe.useRef(null),n=X(a,o.contentRef,r);return fe.useEffect(()=>{let s=r.current;if(s)return vo(s)},[]),(0,ge.jsx)(Pd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:q(t.onCloseAutoFocus,s=>{s.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:q(t.onPointerDownOutside,s=>{let l=s.detail.originalEvent,i=l.button===0&&l.ctrlKey===!0;(l.button===2||i)&&s.preventDefault()}),onFocusOutside:q(t.onFocusOutside,s=>s.preventDefault())})},"DialogContentModal")),ax=fe.forwardRef(ft(function(t,a){let o=Pt(lr,t.__scopeDialog),r=fe.useRef(!1),n=fe.useRef(!1);return(0,ge.jsx)(Pd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{t.onCloseAutoFocus?.(s),s.defaultPrevented||(r.current||o.triggerRef.current?.focus(),s.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:s=>{t.onInteractOutside?.(s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let l=s.target;o.triggerRef.current?.contains(l)&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&n.current&&s.preventDefault()}})},"DialogContentNonModal")),Pd=fe.forwardRef(ft(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:s,...l}=t,i=Pt(lr,o);return ta(),(0,ge.jsx)(ge.Fragment,{children:(0,ge.jsx)(uo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:s,children:(0,ge.jsx)(io,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":js(i.open),...l,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),ox="DialogTitle",Gs=fe.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(ox,o),{setTitleCount:s}=n;return re(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,ge.jsx)(Y.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),rx="DialogDescription",Ws=fe.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(rx,o),{setDescriptionCount:s}=n;return re(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,ge.jsx)(Y.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),nx="DialogClose",kd=fe.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(nx,o);return(0,ge.jsx)(Y.button,{type:"button",...r,ref:a,onClick:q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function js(e){return e?"open":"closed"}ft(js,"getState");var Md=require("react"),Ks="dsh-kanban",Ad={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",editCardDesc:"\u4FEE\u6539\u5361\u7247\u4FE1\u606F",newCardDesc:"\u65B0\u5EFA\u4E00\u5F20\u4EFB\u52A1\u5361\u7247",fieldTitle:"\u6807\u9898",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8"},lx={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",editCardDesc:"Update card details",newCardDesc:"Create a new task card",fieldTitle:"Title",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All"},La=null,Xs=null;function Td(e){let t=e.get("locale");if(t!==void 0){La=t;try{t.register(Ks,"zh",Ad),t.register(Ks,"en",lx)}catch{}Xs=t.bind(Ks)}}function $s(e){return Xs?Xs(e):Ad[e]??e}var ix=e=>La&&typeof La.subscribe=="function"?La.subscribe(e):()=>{},Dd=()=>La&&typeof La.getSnapshot=="function"?La.getSnapshot():null;function at(){return(0,Md.useSyncExternalStore)(ix,Dd,Dd),$s}var ot=require("react/jsx-runtime"),wo=Id;var ux=Rd;var Ed=ir.forwardRef(({className:e,...t},a)=>(0,ot.jsx)(zs,{ref:a,className:W("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));Ed.displayName=zs.displayName;var Ia=ir.forwardRef(({className:e,children:t,...a},o)=>{let r=at();return(0,ot.jsxs)(ux,{children:[(0,ot.jsx)(Ed,{}),(0,ot.jsxs)(Vs,{ref:o,className:W("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a,children:[t,(0,ot.jsxs)(kd,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,ot.jsx)(Qo,{className:"h-4 w-4"}),(0,ot.jsx)("span",{className:"sr-only",children:r("close")})]})]})]})});Ia.displayName=Vs.displayName;var ya=({className:e,...t})=>(0,ot.jsx)("div",{className:W("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});ya.displayName="DialogHeader";var ur=({className:e,...t})=>(0,ot.jsx)("div",{className:W("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});ur.displayName="DialogFooter";var Sa=ir.forwardRef(({className:e,...t},a)=>(0,ot.jsx)(Gs,{ref:a,className:W("text-lg font-semibold leading-none tracking-tight",e),...t}));Sa.displayName=Gs.displayName;var Ra=ir.forwardRef(({className:e,...t},a)=>(0,ot.jsx)(Ws,{ref:a,className:W("text-sm text-muted-foreground",e),...t}));Ra.displayName=Ws.displayName;var Od=H(require("react"),1);var Fd=require("react/jsx-runtime"),qt=Od.forwardRef(({className:e,type:t,...a},o)=>(0,Fd.jsx)("input",{type:t,className:W("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...a}));qt.displayName="Input";var _d=H(require("react"),1);var Bd=H(require("react"),1);var Nd=require("react/jsx-runtime"),dx=Object.defineProperty,cx=(e,t)=>dx(e,"name",{value:t,configurable:!0}),fx=Bd.forwardRef(cx(function(t,a){return(0,Nd.jsx)(Y.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Ys=fx;var Ud=require("react/jsx-runtime"),bo=_d.forwardRef(({className:e,...t},a)=>(0,Ud.jsx)(Ys,{ref:a,className:W("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e),...t}));bo.displayName=Ys.displayName;var na=H(require("react"),1);var A=H(require("react"),1),fl=H(require("react-dom"),1);var mx=Object.defineProperty,gx=(e,t)=>mx(e,"name",{value:t,configurable:!0});function nn(e,[t,a]){return Math.min(a,Math.max(t,e))}gx(nn,"clamp");var ht=H(require("react"),1);var sn=require("react/jsx-runtime"),Xe=H(require("react"),1);var Pa=require("react/jsx-runtime");var hx=Object.defineProperty,Te=(e,t)=>hx(e,"name",{value:t,configurable:!0});function ka(e){let t=e+"CollectionProvider",[a,o]=Be(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),s=Te(p=>{let{scope:m,children:x}=p,w=ht.useRef(null),v=ht.useRef(new Map).current;return(0,sn.jsx)(r,{scope:m,itemMap:v,collectionRef:w,children:x})},"CollectionProvider");s.displayName=t;let l=e+"CollectionSlot",i=qe(l),u=ht.forwardRef((p,m)=>{let{scope:x,children:w}=p,v=n(l,x),b=X(m,v.collectionRef);return(0,sn.jsx)(i,{ref:b,children:w})});u.displayName=l;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=qe(c),h=ht.forwardRef((p,m)=>{let{scope:x,children:w,...v}=p,b=ht.useRef(null),C=X(m,b),L=n(c,x);return ht.useEffect(()=>(L.itemMap.set(b,{ref:b,...v}),()=>void L.itemMap.delete(b))),(0,sn.jsx)(f,{[d]:"",ref:C,children:w})});h.displayName=c;function g(p){let m=n(e+"CollectionConsumer",p);return ht.useCallback(()=>{let w=m.collectionRef.current;if(!w)return[];let v=Array.from(w.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((L,S)=>v.indexOf(L.ref.current)-v.indexOf(S.ref.current))},[m.collectionRef,m.itemMap])}return Te(g,"useCollection"),[{Provider:s,Slot:u,ItemSlot:h},g,o]}Te(ka,"createCollection");var Hd=new WeakMap,Ce,rt,Zs=(rt=class extends Map{constructor(a){super(a);oi(this,Ce);qn(this,Ce,[...super.keys()]),Hd.set(this,!0)}set(a,o){return Hd.get(this)&&(this.has(a)?Ue(this,Ce)[Ue(this,Ce).indexOf(a)]=a:Ue(this,Ce).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),s=Ue(this,Ce).length,l=Qs(a),i=l>=0?l:s+l,u=i<0||i>=s?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);l<0&&i++;let d=[...Ue(this,Ce)],f,h=!1;for(let g=i;g<c;g++)if(i===g){let p=d[g];d[g]===o&&(p=d[g+1]),n&&this.delete(o),f=this.get(p),this.set(o,r)}else{!h&&d[g-1]===o&&(h=!0);let p=d[h?g:g-1],m=f;f=this.get(p),this.delete(p),this.set(p,m)}return this}with(a,o,r){let n=new rt(this);return n.insert(a,o,r),n}before(a){let o=Ue(this,Ce).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ue(this,Ce).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ue(this,Ce).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ue(this,Ce).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return qn(this,Ce,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ue(this,Ce).splice(Ue(this,Ce).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=ln(Ue(this,Ce),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=ln(Ue(this,Ce),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ue(this,Ce).indexOf(a)}keyAt(a){return ln(Ue(this,Ce),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let s of this)Reflect.apply(a,o,[s,n,this])&&r.push(s),n++;return new rt(r)}map(a,o){let r=[],n=0;for(let s of this)r.push([s[0],Reflect.apply(a,o,[s,n,this])]),n++;return new rt(r)}reduce(...a){let[o,r]=a,n=0,s=r??this.at(0);for(let l of this)n===0&&a.length===1?s=l:s=Reflect.apply(o,this,[s,l,n,this]),n++;return s}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let s=this.size-1;s>=0;s--){let l=this.at(s);s===this.size-1&&a.length===1?n=l:n=Reflect.apply(o,this,[n,l,s,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new rt(o)}toReversed(){let a=new rt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new rt(o)}slice(a,o){let r=new rt,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let s=a;s<=n;s++){let l=this.keyAt(s),i=this.get(l);r.set(l,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Ce=new WeakMap,Te(rt,"OrderedDict"),rt);function ln(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=qd(e,t);return a===-1?void 0:e[a]}Te(ln,"at");function qd(e,t){let a=e.length,o=Qs(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Te(qd,"toSafeIndex");function Qs(e){return e!==e||e===0?0:Math.trunc(e)}Te(Qs,"toSafeInteger");function xx(e){let t=e+"CollectionProvider",[a,o]=Be(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Zs,setItemMap:Te(()=>{},"setItemMap")}),s=Te(({state:v,...b})=>v?(0,Pa.jsx)(i,{...b,state:v}):(0,Pa.jsx)(l,{...b}),"CollectionProvider");s.displayName=t;let l=Te(v=>{let b=m();return(0,Pa.jsx)(i,{...v,state:b})},"CollectionInit");l.displayName=t+"Init";let i=Te(v=>{let{scope:b,children:C,state:L}=v,S=Xe.useRef(null),[R,P]=Xe.useState(null),E=X(S,P),[T,k]=L;return Xe.useEffect(()=>{if(!R)return;let y=Gd(()=>{});return y.observe(R,{childList:!0,subtree:!0}),()=>{y.disconnect()}},[R]),(0,Pa.jsx)(r,{scope:b,itemMap:T,setItemMap:k,collectionRef:E,collectionRefObject:S,collectionElement:R,children:C})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=qe(u),d=Xe.forwardRef((v,b)=>{let{scope:C,children:L}=v,S=n(u,C),R=X(b,S.collectionRef);return(0,Pa.jsx)(c,{ref:R,children:L})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",g=qe(f),p=Xe.forwardRef((v,b)=>{let{scope:C,children:L,...S}=v,R=Xe.useRef(null),[P,E]=Xe.useState(null),T=X(b,R,E),k=n(f,C),{setItemMap:y}=k,D=Xe.useRef(S);zd(D.current,S)||(D.current=S);let O=D.current;return Xe.useEffect(()=>{let U=O;return y(F=>P?F.has(P)?F.set(P,{...U,element:P}).toSorted(Js):(F.set(P,{...U,element:P}),F.toSorted(Js)):F),()=>{y(F=>!P||!F.has(P)?F:(F.delete(P),new Zs(F)))}},[P,O,y]),(0,Pa.jsx)(g,{[h]:"",ref:T,children:L})});p.displayName=f;function m(){return Xe.useState(new Zs)}Te(m,"useInitCollection");function x(v){let{itemMap:b}=n(e+"CollectionConsumer",v);return b}return Te(x,"useCollection"),[{Provider:s,Slot:d,ItemSlot:p},{createCollectionScope:o,useCollection:x,useInitCollection:m}]}Te(xx,"createCollection");function zd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Te(zd,"shallowEqual");function Vd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Te(Vd,"isElementPreceding");function Js(e,t){return!e[1].element||!t[1].element?0:Vd(e[1].element,t[1].element)?-1:1}Te(Js,"sortByDocumentPosition");function Gd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Te(Gd,"getChildListObserver");var un=H(require("react"),1),bx=require("react/jsx-runtime"),vx=Object.defineProperty,wx=(e,t)=>vx(e,"name",{value:t,configurable:!0}),Cx=un.createContext(void 0);function Da(e){let t=un.useContext(Cx);return e||t||"ltr"}wx(Da,"useDirection");var Ge=H(require("react"),1);var Kd=["top","right","bottom","left"];var kt=Math.min,xt=Math.max,cr=Math.round,fr=Math.floor,Dt=e=>({x:e,y:e}),Lx={left:"right",right:"left",bottom:"top",top:"bottom"};function el(e,t,a){return xt(e,kt(t,a))}function Mt(e,t){return typeof e=="function"?e(t):e}function zt(e){return e.split("-")[0]}function Ma(e){return e.split("-")[1]}function cn(e){return e==="x"?"y":"x"}function fn(e){return e==="y"?"height":"width"}function vt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function pn(e){return cn(vt(e))}function Xd(e,t,a){a===void 0&&(a=!1);let o=Ma(e),r=pn(e),n=fn(r),s=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=dr(s)),[s,dr(s)]}function $d(e){let t=dr(e);return[dn(e),t,dn(t)]}function dn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Wd=["left","right"],jd=["right","left"],Ix=["top","bottom"],yx=["bottom","top"];function Sx(e,t,a){switch(e){case"top":case"bottom":return a?t?jd:Wd:t?Wd:jd;case"left":case"right":return t?Ix:yx;default:return[]}}function Yd(e,t,a,o){let r=Ma(e),n=Sx(zt(e),a==="start",o);return r&&(n=n.map(s=>s+"-"+r),t&&(n=n.concat(n.map(dn)))),n}function dr(e){let t=zt(e);return Lx[t]+e.slice(t.length)}function Rx(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function tl(e){return typeof e!="number"?Rx(e):{top:e,right:e,bottom:e,left:e}}function Aa(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Zd(e,t,a){let{reference:o,floating:r}=e,n=vt(t),s=pn(t),l=fn(s),i=zt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[l]/2-r[l]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let g=Ma(t);return g&&(h[s]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),h}async function ec(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:s,elements:l,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Mt(t,e),g=tl(h),m=l[f?d==="floating"?"reference":"floating":d],x=Aa(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:i})),w=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),b=await(n.isElement==null?void 0:n.isElement(v))&&await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1},C=Aa(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:v,strategy:i}):w);return{top:(x.top-C.top+g.top)/b.y,bottom:(C.bottom-x.bottom+g.bottom)/b.y,left:(x.left-C.left+g.left)/b.x,right:(C.right-x.right+g.right)/b.x}}var Px=50,tc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=a,l=s.detectOverflow?s:{...s,detectOverflow:ec},i=await(s.isRTL==null?void 0:s.isRTL(t)),u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Zd(u,o,i),f=o,h=0,g={};for(let p=0;p<n.length;p++){let m=n[p];if(!m)continue;let{name:x,fn:w}=m,{x:v,y:b,data:C,reset:L}=await w({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});c=v??c,d=b??d,g[x]={...g[x],...C},L&&h<Px&&(h++,typeof L=="object"&&(L.placement&&(f=L.placement),L.rects&&(u=L.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):L.rects),{x:c,y:d}=Zd(u,f,i)),p=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},ac=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:s,elements:l,middlewareData:i}=t,{element:u,padding:c=0}=Mt(e,t)||{};if(u==null)return{};let d=tl(c),f={x:a,y:o},h=pn(r),g=fn(h),p=await s.getDimensions(u),m=h==="y",x=m?"top":"left",w=m?"bottom":"right",v=m?"clientHeight":"clientWidth",b=n.reference[g]+n.reference[h]-f[h]-n.floating[g],C=f[h]-n.reference[h],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u)),S=L?L[v]:0;(!S||!await(s.isElement==null?void 0:s.isElement(L)))&&(S=l.floating[v]||n.floating[g]);let R=b/2-C/2,P=S/2-p[g]/2-1,E=kt(d[x],P),T=kt(d[w],P),k=S-p[g]-T,y=S/2-p[g]/2+R,D=el(E,y,k),O=!i.arrow&&Ma(r)!=null&&y!==D&&n.reference[g]/2-(y<E?E:T)-p[g]/2<0,U=O?y<E?y-E:y-k:0;return{[h]:f[h]+U,data:{[h]:D,centerOffset:y-D-U,...O&&{alignmentOffset:U}},reset:O}}});var oc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:s,initialPlacement:l,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...m}=Mt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=zt(r),w=vt(l),v=zt(l)===l,b=await(i.isRTL==null?void 0:i.isRTL(u.floating)),C=f||(v||!p?[dr(l)]:$d(l)),L=g!=="none";!f&&L&&C.push(...Yd(l,p,g,b));let S=[l,...C],R=await i.detectOverflow(t,m),P=[],E=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[x]),d){let D=Xd(r,s,b);P.push(R[D[0]],R[D[1]])}if(E=[...E,{placement:r,overflows:P}],!P.every(D=>D<=0)){var T,k;let D=(((T=n.flip)==null?void 0:T.index)||0)+1,O=S[D];if(O&&(!(d==="alignment"?w!==vt(O):!1)||E.every(N=>vt(N.placement)===w?N.overflows[0]>0:!0)))return{data:{index:D,overflows:E},reset:{placement:O}};let U=(k=E.filter(F=>F.overflows[0]<=0).sort((F,N)=>F.overflows[1]-N.overflows[1])[0])==null?void 0:k.placement;if(!U)switch(h){case"bestFit":{var y;let F=(y=E.filter(N=>{if(L){let _=vt(N.placement);return _===w||_==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(_=>_>0).reduce((_,M)=>_+M,0)]).sort((N,_)=>N[1]-_[1])[0])==null?void 0:y[0];F&&(U=F);break}case"initialPlacement":U=l;break}if(r!==U)return{reset:{placement:U}}}return{}}}};function Jd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Qd(e){return Kd.some(t=>e[t]>=0)}var rc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Mt(e,t);switch(r){case"referenceHidden":{let s=await o.detectOverflow(t,{...n,elementContext:"reference"}),l=Jd(s,a.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Qd(l)}}}case"escaped":{let s=await o.detectOverflow(t,{...n,altBoundary:!0}),l=Jd(s,a.floating);return{data:{escapedOffsets:l,escaped:Qd(l)}}}default:return{}}}}};var nc=new Set(["left","top"]);async function kx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=zt(a),l=Ma(a),i=vt(a)==="y",u=nc.has(s)?-1:1,c=n&&i?-1:1,d=Mt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof g=="number"&&(h=l==="end"?g*-1:g),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var sc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:s,middlewareData:l}=t,i=await kx(t,e);return s===((a=l.offset)==null?void 0:a.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:s}}}}},lc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:i={fn:w=>{let{x:v,y:b}=w;return{x:v,y:b}}},...u}=Mt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=vt(r),h=cn(f),g=c[h],p=c[f],m=(w,v)=>el(v+d[w==="y"?"top":"left"],v,v-d[w==="y"?"bottom":"right"]);s&&(g=m(h,g)),l&&(p=m(f,p));let x=i.fn({...t,[h]:g,[f]:p});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[h]:s,[f]:l}}}}}},ic=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:s,rects:l,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Mt(e,t),f={x:r,y:n},h=vt(s),g=cn(h),p=f[g],m=f[h],x=Mt(u,t),w=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let C=g==="y"?"height":"width",L=l.reference[g]-l.floating[C]+w.mainAxis,S=l.reference[g]+l.reference[C]-w.mainAxis;p<L?p=L:p>S&&(p=S)}if(d){var v,b;let C=g==="y"?"width":"height",L=nc.has(zt(s)),S=l.reference[h]-l.floating[C]+(L&&((v=i.offset)==null?void 0:v[h])||0)+(L?0:w.crossAxis),R=l.reference[h]+l.reference[C]+(L?0:((b=i.offset)==null?void 0:b[h])||0)-(L?w.crossAxis:0);m<S?m=S:m>R&&(m=R)}return{[g]:p,[h]:m}}}},uc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:s=()=>{},...l}=Mt(e,t),i=await r.detectOverflow(t,l),u=zt(a),c=Ma(a),d=vt(a)==="y",{width:f,height:h}=o.floating,g,p;u==="top"||u==="bottom"?(g=u,p=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(p=u,g=c==="end"?"top":"bottom");let m=h-i.top-i.bottom,x=f-i.left-i.right,w=kt(h-i[g],m),v=kt(f-i[p],x),b=t.middlewareData.shift,C=!b,L=w,S=v;b!=null&&b.enabled.x&&(S=x),b!=null&&b.enabled.y&&(L=m),C&&!c&&(d?S=f-2*xt(i.left,i.right):L=h-2*xt(i.top,i.bottom)),await s({...t,availableWidth:S,availableHeight:L});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function mn(){return typeof window<"u"}function Oa(e){return cc(e)?(e.nodeName||"").toLowerCase():"#document"}function je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function At(e){var t;return(t=(cc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function cc(e){return mn()?e instanceof Node||e instanceof je(e).Node:!1}function wt(e){return mn()?e instanceof Element||e instanceof je(e).Element:!1}function Vt(e){return mn()?e instanceof HTMLElement||e instanceof je(e).HTMLElement:!1}function dc(e){return!mn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof je(e).ShadowRoot}function pr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=bt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function fc(e){return/^(table|td|th)$/.test(Oa(e))}function mr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Dx=/transform|translate|scale|rotate|perspective|filter/,Mx=/paint|layout|strict|content/,Ta=e=>!!e&&e!=="none",al;function gn(e){let t=wt(e)?bt(e):e;return Ta(t.transform)||Ta(t.translate)||Ta(t.scale)||Ta(t.rotate)||Ta(t.perspective)||!hn()&&(Ta(t.backdropFilter)||Ta(t.filter))||Dx.test(t.willChange||"")||Mx.test(t.contain||"")}function pc(e){let t=aa(e);for(;Vt(t)&&!Co(t);){if(gn(t))return t;if(mr(t))return null;t=aa(t)}return null}function hn(){return al==null&&(al=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),al}function Co(e){return/^(html|body|#document)$/.test(Oa(e))}function bt(e){return je(e).getComputedStyle(e)}function gr(e){return wt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function aa(e){if(Oa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||dc(e)&&e.host||At(e);return dc(t)?t.host:t}function mc(e){let t=aa(e);return Co(t)?(e.ownerDocument||e).body:Vt(t)&&pr(t)?t:mc(t)}function Ea(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=mc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),s=je(r);if(n){let l=xn(s);return t.concat(s,s.visualViewport||[],pr(r)?r:[],l&&a?Ea(l):[])}else return t.concat(r,Ea(r,[],a))}function xn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xc(e){let t=bt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Vt(e),n=r?e.offsetWidth:a,s=r?e.offsetHeight:o,l=cr(a)!==n||cr(o)!==s;return l&&(a=n,o=s),{width:a,height:o,$:l}}function rl(e){return wt(e)?e:e.contextElement}function Lo(e){let t=rl(e);if(!Vt(t))return Dt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=xc(t),s=(n?cr(a.width):a.width)/o,l=(n?cr(a.height):a.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}var Ax=Dt(0);function vc(e){let t=je(e);return!hn()||!t.visualViewport?Ax:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Tx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===je(e)}function Fa(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=rl(e),s=Dt(1);t&&(o?wt(o)&&(s=Lo(o)):s=Lo(e));let l=Tx(n,a,o)?vc(n):Dt(0),i=(r.left+l.x)/s.x,u=(r.top+l.y)/s.y,c=r.width/s.x,d=r.height/s.y;if(n&&o){let f=je(n),h=wt(o)?je(o):o,g=f,p=xn(g);for(;p&&h!==g;){let m=Lo(p),x=p.getBoundingClientRect(),w=bt(p),v=x.left+(p.clientLeft+parseFloat(w.paddingLeft))*m.x,b=x.top+(p.clientTop+parseFloat(w.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=v,u+=b,g=je(p),p=xn(g)}}return Aa({width:c,height:d,x:i,y:u})}function vn(e,t){let a=gr(e).scrollLeft;return t?t.left+a:Fa(At(e)).left+a}function wc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-vn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Ex(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",s=At(o),l=t?mr(t.floating):!1;if(o===s||l&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Dt(1),c=Dt(0),d=Vt(o);if((d||!n)&&((Oa(o)!=="body"||pr(s))&&(i=gr(o)),d)){let h=Fa(o);u=Lo(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=s&&!d&&!n?wc(s,i):Dt(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function Ox(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Fx(e){let t=gr(e),a=e.ownerDocument.body,o=xt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=xt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+vn(e),s=-t.scrollTop;return bt(a).direction==="rtl"&&(n+=xt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:s}}var Bx=25;function Nx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=je(e),n=At(e),s=r.visualViewport,l=n.clientWidth,i=n.clientHeight,u=0,c=0;if(s){let f=!hn()||t==="fixed";o?f||(u=-s.offsetLeft,c=-s.offsetTop):(l=s.width,i=s.height,f&&(u=s.offsetLeft,c=s.offsetTop))}if(vn(n)<=0){let f=n.ownerDocument,h=f.body,g=getComputedStyle(h),p=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(n.clientWidth-h.clientWidth-p),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=Bx&&(l-=x)}return{width:l,height:i,x:u,y:c}}function _x(e,t){let a=Fa(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Lo(e),s=e.clientWidth*n.x,l=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:s,height:l,x:i,y:u}}function gc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Nx(e,a,t);else if(t==="document")o=Fx(At(e));else if(wt(t))o=_x(t,a);else{let r=vc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Aa(o)}function Ux(e,t){let a=t.get(e);if(a)return a;let o=Ea(e,[],!1).filter(l=>wt(l)&&Oa(l)!=="body"),r=null,n=bt(e).position==="fixed",s=n?aa(e):e;for(;wt(s)&&!Co(s);){let l=bt(s),i=gn(s),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&l.position==="static")?o=o.filter(d=>d!==s):r=l,s=aa(s)}return t.set(e,o),o}function Hx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,s=[...a==="clippingAncestors"?mr(t)?[]:Ux(t,this._c):[].concat(a),o],l=gc(t,s[0],r),i=l.top,u=l.right,c=l.bottom,d=l.left;for(let f=1;f<s.length;f++){let h=gc(t,s[f],r);i=xt(h.top,i),u=kt(h.right,u),c=kt(h.bottom,c),d=xt(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function qx(e){let{width:t,height:a}=xc(e);return{width:t,height:a}}function zx(e,t,a){let o=Vt(t),r=At(t),n=a==="fixed",s=Fa(e,!0,n,t),l={scrollLeft:0,scrollTop:0},i=Dt(0);if((o||!n)&&((Oa(t)!=="body"||pr(r))&&(l=gr(t)),o)){let f=Fa(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=vn(r));let u=r&&!o&&!n?wc(r,l):Dt(0),c=s.left+l.scrollLeft-i.x-u.x,d=s.top+l.scrollTop-i.y-u.y;return{x:c,y:d,width:s.width,height:s.height}}function ol(e){return bt(e).position==="static"}function hc(e,t){if(!Vt(e)||bt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return At(e)===a&&(a=a.ownerDocument.body),a}function bc(e,t){let a=je(e);if(mr(e))return a;if(!Vt(e)){let r=aa(e);for(;r&&!Co(r);){if(wt(r)&&!ol(r))return r;r=aa(r)}return a}let o=hc(e,t);for(;o&&fc(o)&&ol(o);)o=hc(o,t);return o&&Co(o)&&ol(o)&&!gn(o)?a:o||pc(e)||a}var Vx=async function(e){let t=this.getOffsetParent||bc,a=this.getDimensions,o=await a(e.floating);return{reference:zx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Gx(e){return bt(e).direction==="rtl"}var Cc={convertOffsetParentRelativeRectToViewportRelativeRect:Ex,getDocumentElement:At,getClippingRect:Hx,getOffsetParent:bc,getElementRects:Vx,getClientRects:Ox,getDimensions:qx,getScale:Lo,isElement:wt,isRTL:Gx};function Lc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Wx(e,t,a){let o=null,r,n=At(e);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),s();let f=e.getBoundingClientRect(),{left:h,top:g,width:p,height:m}=f;if(c||t(),!p||!m)return;let x=fr(g),w=fr(n.clientWidth-(h+p)),v=fr(n.clientHeight-(g+m)),b=fr(h),L={rootMargin:-x+"px "+-w+"px "+-v+"px "+-b+"px",threshold:xt(0,kt(1,d))||1},S=!0;function R(P){let E=P[0].intersectionRatio;if(!Lc(f,e.getBoundingClientRect()))return l();if(E!==d){if(!S)return l();E?l(!1,E):r=setTimeout(()=>{l(!1,1e-7)},1e3)}S=!1}try{o=new IntersectionObserver(R,{...L,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,L)}o.observe(e)}let i=je(e),u=()=>l(a);return i.addEventListener("resize",u),l(!0),()=>{i.removeEventListener("resize",u),s()}}function nl(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=rl(e),c=r||n?[...u?Ea(u):[],...t?Ea(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&l?Wx(u,a,n):null,f=-1,h=null;s&&(h=new ResizeObserver(x=>{let[w]=x;w&&w.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let g,p=i?Fa(e):null;i&&m();function m(){let x=Fa(e);p&&!Lc(p,x)&&a(),p=x,g=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(w=>{r&&w.removeEventListener("scroll",a),n&&w.removeEventListener("resize",a)}),d?.(),(x=h)==null||x.disconnect(),h=null,i&&cancelAnimationFrame(g)}}var Ic=sc;var yc=lc,Sc=oc,Rc=uc,Pc=rc,sl=ac;var kc=ic,ll=(e,t,a)=>{let o=new Map,r=a??{},n={...Cc,...r.platform,_c:o};return tc(e,t,{...r,platform:n})};var Le=H(require("react"),1),Mc=require("react"),Ac=H(require("react-dom"),1),jx=typeof document<"u",Kx=function(){},wn=jx?Mc.useLayoutEffect:Kx;function bn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!bn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!bn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Tc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Dc(e,t){let a=Tc(e);return Math.round(t*a)/a}function il(e){let t=Le.useRef(e);return wn(()=>{t.current=e}),t}function Ec(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:s}={},transform:l=!0,whileElementsMounted:i,open:u}=e,[c,d]=Le.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=Le.useState(o);bn(f,o)||h(o);let[g,p]=Le.useState(null),[m,x]=Le.useState(null),w=Le.useCallback(N=>{N!==L.current&&(L.current=N,p(N))},[]),v=Le.useCallback(N=>{N!==S.current&&(S.current=N,x(N))},[]),b=n||g,C=s||m,L=Le.useRef(null),S=Le.useRef(null),R=Le.useRef(c),P=i!=null,E=il(i),T=il(r),k=il(u),y=Le.useCallback(()=>{if(!L.current||!S.current)return;let N={placement:t,strategy:a,middleware:f};T.current&&(N.platform=T.current),ll(L.current,S.current,N).then(_=>{let M={..._,isPositioned:k.current!==!1};D.current&&!bn(R.current,M)&&(R.current=M,Ac.flushSync(()=>{d(M)}))})},[f,t,a,T,k]);wn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(N=>({...N,isPositioned:!1})))},[u]);let D=Le.useRef(!1);wn(()=>(D.current=!0,()=>{D.current=!1}),[]),wn(()=>{if(b&&(L.current=b),C&&(S.current=C),b&&C){if(E.current)return E.current(b,C,y);y()}},[b,C,y,E,P]);let O=Le.useMemo(()=>({reference:L,floating:S,setReference:w,setFloating:v}),[w,v]),U=Le.useMemo(()=>({reference:b,floating:C}),[b,C]),F=Le.useMemo(()=>{let N={position:a,left:0,top:0};if(!U.floating)return N;let _=Dc(U.floating,c.x),M=Dc(U.floating,c.y);return l?{...N,transform:"translate("+_+"px, "+M+"px)",...Tc(U.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:_,top:M}},[a,l,U.floating,c.x,c.y]);return Le.useMemo(()=>({...c,update:y,refs:O,elements:U,floatingStyles:F}),[c,y,O,U,F])}var Xx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?sl({element:o.current,padding:r}).fn(a):{}:o?sl({element:o,padding:r}).fn(a):{}}}},Oc=(e,t)=>{let a=Ic(e);return{name:a.name,fn:a.fn,options:[e,t]}},Fc=(e,t)=>{let a=yc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Bc=(e,t)=>({fn:kc(e).fn,options:[e,t]}),Nc=(e,t)=>{let a=Sc(e);return{name:a.name,fn:a.fn,options:[e,t]}},_c=(e,t)=>{let a=Rc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Uc=(e,t)=>{let a=Pc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Hc=(e,t)=>{let a=Xx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var qc=H(require("react"),1);var $x=Object.defineProperty,Yx=(e,t)=>$x(e,"name",{value:t,configurable:!0});function ul(e){let[t,a]=qc.useState(void 0);return re(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],s,l;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;s=u.inlineSize,l=u.blockSize}else s=e.offsetWidth,l=e.offsetHeight;a({width:s,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}Yx(ul,"useSize");var Io=require("react/jsx-runtime"),Zx=Object.defineProperty,oa=(e,t)=>Zx(e,"name",{value:t,configurable:!0});var zc="Popper",[Vc,yo]=Be(zc),[Jx,Gc]=Vc(zc),Qx=oa(e=>{let{__scopePopper:t,children:a}=e,[o,r]=Ge.useState(null),[n,s]=Ge.useState(void 0);return(0,Io.jsx)(Jx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:s,children:a})},"Popper"),ev="PopperAnchor",tv=Ge.forwardRef(oa(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,s=Gc(ev,o),l=Ge.useRef(null),i=s.onAnchorChange,u=Ge.useCallback(p=>{l.current=p,p&&i(p)},[i]),c=X(a,u),d=Ge.useRef(null);Ge.useEffect(()=>{if(!r)return;let p=d.current;d.current=r.current,p!==d.current&&i(d.current)});let f=s.placementState&&Cn(s.placementState),h=f?.[0],g=f?.[1];return r?null:(0,Io.jsx)(Y.div,{"data-radix-popper-side":h,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),Wc="PopperContent",[av,ey]=Vc(Wc),ov=Ge.forwardRef(oa(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:s="center",alignOffset:l=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:g="optimized",onPlaced:p,...m}=t,x=Gc(Wc,o),[w,v]=Ge.useState(null),b=X(a,v),[C,L]=Ge.useState(null),S=ul(C),R=S?.width??0,P=S?.height??0,E=r+(s!=="center"?"-"+s:""),T=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},k=Array.isArray(c)?c:[c],y=k.length>0,D={padding:T,boundary:k.filter(jc),altBoundary:y},{refs:O,floatingStyles:U,placement:F,isPositioned:N,middlewareData:_}=Ec({strategy:"fixed",placement:E,whileElementsMounted:oa((...Q)=>nl(...Q,{animationFrame:g==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Oc({mainAxis:n+P,alignmentAxis:l}),u&&Fc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Bc():void 0,...D}),u&&Nc({...D}),_c({...D,apply:oa(({elements:Q,rects:V,availableWidth:oe,availableHeight:te})=>{let{width:le,height:Ie}=V.reference,ye=Q.floating.style;ye.setProperty("--radix-popper-available-width",`${oe}px`),ye.setProperty("--radix-popper-available-height",`${te}px`),ye.setProperty("--radix-popper-anchor-width",`${le}px`),ye.setProperty("--radix-popper-anchor-height",`${Ie}px`)},"apply")}),C&&Hc({element:C,padding:i}),rv({arrowWidth:R,arrowHeight:P}),h&&Uc({strategy:"referenceHidden",...D,boundary:y?D.boundary:void 0})]}),M=x.setPlacementState;re(()=>(M(F),()=>{M(void 0)}),[F,M]);let[Z,K]=Cn(F),ne=Me(p);re(()=>{N&&ne?.()},[N,ne]);let be=_.arrow?.x,Pe=_.arrow?.y,pe=_.arrow?.centerOffset!==0,[ke,B]=Ge.useState();return re(()=>{w&&B(window.getComputedStyle(w).zIndex)},[w]),(0,Io.jsx)("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:N?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Io.jsx)(av,{scope:o,placedSide:Z,placedAlign:K,onArrowChange:L,arrowX:be,arrowY:Pe,shouldHideArrow:pe,children:(0,Io.jsx)(Y.div,{"data-side":Z,"data-align":K,...m,ref:b,style:{...m.style,animation:N?m.style?.animation:"none"}})})})},"PopperContent"));function jc(e){return e!==null}oa(jc,"isNotNull");var rv=oa(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,s=r.arrow?.centerOffset!==0,l=s?0:e.arrowWidth,i=s?0:e.arrowHeight,[u,c]=Cn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+l/2,h=(r.arrow?.y??0)+i/2,g="",p="";return u==="bottom"?(g=s?d:`${f}px`,p=`${-i}px`):u==="top"?(g=s?d:`${f}px`,p=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,p=s?d:`${h}px`):u==="left"&&(g=`${o.floating.width+i}px`,p=s?d:`${h}px`),{data:{x:g,y:p}}}}),"transformOrigin");function Cn(e){let[t,a="center"]=e.split("-");return[t,a]}oa(Cn,"getSideAndAlignFromPlacement");var Ln=Qx,In=tv,yn=ov;var Sn=H(require("react"),1),nv=Object.defineProperty,sv=(e,t)=>nv(e,"name",{value:t,configurable:!0});function dl(e){let t=Sn.useRef({value:e,previous:e});return Sn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}sv(dl,"usePrevious");var lv=H(require("react"),1);var iv=require("react/jsx-runtime");var Xc=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var z=require("react/jsx-runtime"),dv=Object.defineProperty,ae=(e,t)=>dv(e,"name",{value:t,configurable:!0}),cv=[" ","Enter","ArrowUp","ArrowDown"],fv=[" ","Enter"],So="Select",[Pn,kn,pv]=ka(So),[Na,Sy]=Be(So,[pv,yo]),pl=yo(),[mv,ra]=Na(So),[gv,hv]=Na(So);function Qc(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:s,defaultValue:l,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:g,internal_do_not_use_render:p}=e,m=pl(t),[x,w]=A.useState(null),[v,b]=A.useState(null),[C,L]=A.useState(!1),S=Da(u),[R,P]=Rt({prop:o,defaultProp:r??!1,onChange:n,caller:So}),[E,T]=Rt({prop:s,defaultProp:l,onChange:i,caller:So}),k=A.useRef(null),y=A.useRef(E);A.useEffect(()=>{let K=g?x?.ownerDocument.getElementById(g):x?.form;if(K instanceof HTMLFormElement){let ne=ae(()=>T(y.current),"reset");return K.addEventListener("reset",ne),()=>K.removeEventListener("reset",ne)}},[g,x,T]);let D=x?!!g||!!x.closest("form"):!0,[O,U]=A.useState(new Set),F=tt(),N=Array.from(O).map(K=>K.props.value).join(";"),_=A.useCallback(K=>{U(ne=>new Set(ne).add(K))},[]),M=A.useCallback(K=>{U(ne=>{let be=new Set(ne);return be.delete(K),be})},[]),Z={required:h,trigger:x,onTriggerChange:w,valueNode:v,onValueNodeChange:b,valueNodeHasChildren:C,onValueNodeHasChildrenChange:L,contentId:F,value:E,onValueChange:T,open:R,onOpenChange:P,dir:S,triggerPointerDownPosRef:k,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:O,nativeSelectKey:N,isFormControl:D};return(0,z.jsx)(Ln,{...m,children:(0,z.jsx)(mv,{scope:t,...Z,children:(0,z.jsx)(Pn.Provider,{scope:t,children:(0,z.jsx)(gv,{scope:t,onNativeOptionAdd:_,onNativeOptionRemove:M,children:cf(p)?p(Z):a})})})})}ae(Qc,"SelectProvider");var ef=ae(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,z.jsx)(Qc,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,z.jsxs)(z.Fragment,{children:[a,r?(0,z.jsx)(Ev,{__scopeSelect:t}):null]})})},"Select"),xv="SelectTrigger",ml=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,s=pl(o),l=ra(xv,o),i=l.disabled||r,u=X(a,l.onTriggerChange),c=kn(o),d=A.useRef("touch"),[f,h,g]=Ll(m=>{let x=c().filter(b=>!b.disabled),w=x.find(b=>b.value===l.value),v=Il(x,m,w);v!==void 0&&l.onValueChange(v.value)}),p=ae(m=>{i||(l.onOpenChange(!0),g()),m&&(l.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,z.jsx)(In,{asChild:!0,...s,children:(0,z.jsx)(Y.button,{type:"button",role:"combobox","aria-controls":l.open?l.contentId:void 0,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":hr(l.value)?"":void 0,...n,ref:u,onClick:q(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&p(m)}),onPointerDown:q(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(p(m),m.preventDefault())}),onKeyDown:q(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&h(m.key),!(x&&m.key===" ")&&cv.includes(m.key)&&(p(),m.preventDefault())})})})},"SelectTrigger")),vv="SelectValue",tf=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,className:r,style:n,children:s,placeholder:l="",...i}=t,u=ra(vv,o),{onValueNodeHasChildrenChange:c}=u,d=s!==void 0,f=X(a,u.onValueNodeChange);re(()=>{c(d)},[c,d]);let h=hr(u.value);return(0,z.jsx)(Y.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,z.jsx)(A.Fragment,{children:h?l:s},h?"placeholder":"value")})},"SelectValue")),af=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,z.jsx)(Y.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),wv="SelectPortal",[bv,Cv]=Na(wv,{forceMount:void 0}),of=ae(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,z.jsx)(bv,{scope:e.__scopeSelect,forceMount:a,children:(0,z.jsx)(co,{asChild:!0,...o})})},"SelectPortal"),Ba="SelectContent",gl=A.forwardRef(ae(function(t,a){let o=Cv(Ba,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,s=ra(Ba,t.__scopeSelect),[l,i]=A.useState();return re(()=>{i(new DocumentFragment)},[]),(0,z.jsx)(Ht,{present:r||s.open,children:({present:u})=>u?(0,z.jsx)(yv,{...n,ref:a}):(0,z.jsx)(Lv,{...n,fragment:l})})},"SelectContent")),Lv=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?fl.createPortal((0,z.jsx)(rf,{scope:o,children:(0,z.jsx)(Pn.Slot,{scope:o,children:(0,z.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Ct=10,[rf,_a]=Na(Ba),Iv=qe("SelectContent.RemoveScroll"),yv=A.forwardRef(ae(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:l,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:p,hideWhenDetached:m,avoidCollisions:x,...w}=t,v=ra(Ba,o),[b,C]=A.useState(null),[L,S]=A.useState(null),R=X(a,C),[P,E]=A.useState(null),[T,k]=A.useState(null),y=kn(o),[D,O]=A.useState(!1),U=A.useRef(!1);A.useEffect(()=>{if(b)return vo(b)},[b]),ta();let F=A.useCallback(B=>{let[Q,...V]=y().map(le=>le.ref.current),[oe]=V.slice(-1),te=document.activeElement;for(let le of B)if(le===te||(le?.scrollIntoView({block:"nearest"}),le===Q&&L&&(L.scrollTop=0),le===oe&&L&&(L.scrollTop=L.scrollHeight),le?.focus(),document.activeElement!==te))return},[y,L]),N=A.useCallback(()=>F([P,b]),[F,P,b]);A.useEffect(()=>{D&&N()},[D,N]);let{onOpenChange:_,triggerPointerDownPosRef:M}=v;A.useEffect(()=>{if(b){let B={x:0,y:0},Q=ae(oe=>{B={x:Math.abs(Math.round(oe.pageX)-(M.current?.x??0)),y:Math.abs(Math.round(oe.pageY)-(M.current?.y??0))}},"handlePointerMove"),V=ae(oe=>{B.x<=10&&B.y<=10?oe.preventDefault():oe.composedPath().includes(b)||_(!1),document.removeEventListener("pointermove",Q),M.current=null},"handlePointerUp");return M.current!==null&&(document.addEventListener("pointermove",Q),document.addEventListener("pointerup",V,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",V,{capture:!0})}}},[b,_,M]),A.useEffect(()=>{let B=ae(()=>_(!1),"close");return window.addEventListener("blur",B),window.addEventListener("resize",B),()=>{window.removeEventListener("blur",B),window.removeEventListener("resize",B)}},[_]);let[Z,K]=Ll(B=>{let Q=y().filter(te=>!te.disabled),V=Q.find(te=>te.ref.current===document.activeElement),oe=Il(Q,B,V);oe&&setTimeout(()=>oe.ref.current?.focus())}),ne=A.useCallback((B,Q,V)=>{let oe=!U.current&&!V;(v.value!==void 0&&v.value===Q||oe)&&(E(B),oe&&(U.current=!0))},[v.value]),be=A.useCallback(()=>b?.focus(),[b]),Pe=A.useCallback((B,Q,V)=>{let oe=!U.current&&!V;(v.value!==void 0&&v.value===Q||oe)&&k(B)},[v.value]),pe=r==="popper"?$c:Sv,ke=pe===$c?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:p,hideWhenDetached:m,avoidCollisions:x}:{};return(0,z.jsx)(rf,{scope:o,content:b,viewport:L,onViewportChange:S,itemRefCallback:ne,selectedItem:P,onItemLeave:be,itemTextRefCallback:Pe,focusSelectedItem:N,selectedItemText:T,position:r,isPositioned:D,searchRef:Z,children:(0,z.jsx)(Ca,{as:Iv,allowPinchZoom:!0,children:(0,z.jsx)(uo,{asChild:!0,trapped:v.open,onMountAutoFocus:B=>{B.preventDefault()},onUnmountAutoFocus:q(n,B=>{v.trigger?.focus({preventScroll:!0}),B.preventDefault()}),children:(0,z.jsx)(io,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:B=>B.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,z.jsx)(pe,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed",dir:v.dir,onContextMenu:B=>B.preventDefault(),...w,...ke,onPlaced:()=>O(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:q(w.onKeyDown,B=>{let Q=B.ctrlKey||B.altKey||B.metaKey;if(B.key==="Tab"&&B.preventDefault(),!Q&&B.key.length===1&&K(B.key),["ArrowUp","ArrowDown","Home","End"].includes(B.key)){let oe=y().filter(te=>!te.disabled).map(te=>te.ref.current);if(["ArrowUp","End"].includes(B.key)&&(oe=oe.slice().reverse()),["ArrowUp","ArrowDown"].includes(B.key)){let te=B.target,le=oe.indexOf(te);oe=oe.slice(le+1)}setTimeout(()=>F(oe)),B.preventDefault()}})})})})})})},"SelectContentImpl")),Sv=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,s=ra(Ba,o),l=_a(Ba,o),[i,u]=A.useState(null),[c,d]=A.useState(null),f=X(a,d),h=kn(o),g=A.useRef(!1),p=A.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:w,focusSelectedItem:v}=l,b=A.useCallback(()=>{if(s.trigger&&s.valueNode&&i&&c&&m&&x&&w){let R=s.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),E=s.valueNode.getBoundingClientRect(),T=w.getBoundingClientRect();if(s.dir!=="rtl"){let te=T.left-P.left,le=E.left-te,Ie=R.left-le,ye=R.width+Ie,It=Math.max(ye,P.width),ja=window.innerWidth-Ct,Ka=nn(le,[Ct,Math.max(Ct,ja-It)]);i.style.minWidth=ye+"px",i.style.left=Ka+"px"}else{let te=P.right-T.right,le=window.innerWidth-E.right-te,Ie=window.innerWidth-R.right-le,ye=R.width+Ie,It=Math.max(ye,P.width),ja=window.innerWidth-Ct,Ka=nn(le,[Ct,Math.max(Ct,ja-It)]);i.style.minWidth=ye+"px",i.style.right=Ka+"px"}let k=h(),y=window.innerHeight-Ct*2,D=m.scrollHeight,O=window.getComputedStyle(c),U=parseInt(O.borderTopWidth,10),F=parseInt(O.paddingTop,10),N=parseInt(O.borderBottomWidth,10),_=parseInt(O.paddingBottom,10),M=U+F+D+_+N,Z=Math.min(x.offsetHeight*5,M),K=window.getComputedStyle(m),ne=parseInt(K.paddingTop,10),be=parseInt(K.paddingBottom,10),Pe=R.top+R.height/2-Ct,pe=y-Pe,ke=x.offsetHeight/2,B=x.offsetTop+ke,Q=U+F+B,V=M-Q;if(Q<=Pe){let te=k.length>0&&x===k[k.length-1].ref.current;i.style.bottom="0px";let le=c.clientHeight-m.offsetTop-m.offsetHeight,Ie=Math.max(pe,ke+(te?be:0)+le+N),ye=Q+Ie;i.style.height=ye+"px"}else{let te=k.length>0&&x===k[0].ref.current;i.style.top="0px";let Ie=Math.max(Pe,U+m.offsetTop+(te?ne:0)+ke)+V;i.style.height=Ie+"px",m.scrollTop=Q-Pe+m.offsetTop}i.style.margin=`${Ct}px 0`,i.style.minHeight=Z+"px",i.style.maxHeight=y+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[h,s.trigger,s.valueNode,i,c,m,x,w,s.dir,r]);re(()=>b(),[b]);let[C,L]=A.useState();re(()=>{c&&L(window.getComputedStyle(c).zIndex)},[c]);let S=A.useCallback(R=>{R&&p.current===!0&&(b(),v?.(),p.current=!1)},[b,v]);return(0,z.jsx)(Rv,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:S,children:(0,z.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:C},children:(0,z.jsx)(Y.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),$c=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Ct,...s}=t,l=pl(o);return(0,z.jsx)(yn,{...l,...s,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[Rv,hl]=Na(Ba,{}),Yc="SelectViewport",nf=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,s=_a(Yc,o),l=hl(Yc,o),i=X(a,s.onViewportChange),u=A.useRef(0);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,z.jsx)(Pn.Slot,{scope:o,children:(0,z.jsx)(Y.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:q(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=l;if(h?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let p=window.innerHeight-Ct*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),w=Math.max(m,x);if(w<p){let v=w+g,b=Math.min(p,v),C=v-b;f.style.height=b+"px",f.style.bottom==="0px"&&(d.scrollTop=C>0?C:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),Pv="SelectGroup",[Ry,kv]=Na(Pv);var Dv="SelectLabel",xl=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,...r}=t,n=kv(Dv,o);return(0,z.jsx)(Y.div,{id:n.id,...r,ref:a})},"SelectLabel")),cl="SelectItem",[Mv,sf]=Na(cl),vl=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...l}=t,i=ra(cl,o),u=_a(cl,o),c=i.value===r,[d,f]=A.useState(s??""),[h,g]=A.useState(!1),p=Me(b=>u.itemRefCallback?.(b,r,n)),m=X(a,p),x=tt(),w=A.useRef("touch"),v=ae(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,z.jsx)(Mv,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:A.useCallback(b=>{f(C=>C||(b?.textContent??"").trim())},[]),children:(0,z.jsx)(Pn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,z.jsx)(Y.div,{role:"option","aria-labelledby":x,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...l,ref:m,onFocus:q(l.onFocus,()=>g(!0)),onBlur:q(l.onBlur,()=>g(!1)),onClick:q(l.onClick,()=>{w.current!=="mouse"&&v()}),onPointerUp:q(l.onPointerUp,()=>{w.current==="mouse"&&v()}),onPointerDown:q(l.onPointerDown,b=>{w.current=b.pointerType}),onPointerMove:q(l.onPointerMove,b=>{w.current=b.pointerType,n?u.onItemLeave?.():w.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:q(l.onPointerLeave,b=>{b.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:q(l.onKeyDown,b=>{n||b.target!==b.currentTarget||u.searchRef?.current!==""&&b.key===" "||(fv.includes(b.key)&&v(),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),Rn="SelectItemText",lf=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,className:r,style:n,...s}=t,l=ra(Rn,o),i=_a(Rn,o),u=sf(Rn,o),c=hv(Rn,o),[d,f]=A.useState(null),h=Me(v=>i.itemTextRefCallback?.(v,u.value,u.disabled)),g=X(a,f,u.onItemTextChange,h),p=d?.textContent,m=A.useMemo(()=>(0,z.jsx)("option",{value:u.value,disabled:u.disabled,children:p},u.value),[u.disabled,u.value,p]),{onNativeOptionAdd:x,onNativeOptionRemove:w}=c;return re(()=>(x(m),()=>w(m)),[x,w,m]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Y.span,{id:u.textId,...s,ref:g}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren&&!hr(l.value)?fl.createPortal(s.children,l.valueNode):null]})},"SelectItemText")),Av="SelectItemIndicator",uf=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,...r}=t;return sf(Av,o).isSelected?(0,z.jsx)(Y.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Zc="SelectScrollUpButton",wl=A.forwardRef(ae(function(t,a){let o=_a(Zc,t.__scopeSelect),r=hl(Zc,t.__scopeSelect),[n,s]=A.useState(!1),l=X(a,r.onScrollButtonChange);return re(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;s(d)};var i=u;ae(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,z.jsx)(df,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),Jc="SelectScrollDownButton",bl=A.forwardRef(ae(function(t,a){let o=_a(Jc,t.__scopeSelect),r=hl(Jc,t.__scopeSelect),[n,s]=A.useState(!1),l=X(a,r.onScrollButtonChange);return re(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;s(f)};var i=u;ae(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,z.jsx)(df,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),df=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,s=_a("SelectScrollButton",o),l=A.useRef(null),i=kn(o),u=A.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return A.useEffect(()=>()=>u(),[u]),re(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,z.jsx)(Y.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:q(n.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:q(n.onPointerMove,()=>{s.onItemLeave?.(),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:q(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Cl=A.forwardRef(ae(function(t,a){let{__scopeSelect:o,...r}=t;return(0,z.jsx)(Y.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var Tv="SelectBubbleInput",Ev=A.forwardRef(ae(function({__scopeSelect:t,...a},o){let r=ra(Tv,t),{value:n,onValueChange:s,required:l,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,g=A.useRef(null),p=X(o,g),m=n??"",x=dl(m),w=Array.from(f).some(v=>(v.props.value??"")==="");return A.useEffect(()=>{let v=g.current;if(!v)return;let b=window.HTMLSelectElement.prototype,L=Object.getOwnPropertyDescriptor(b,"value").set;if(x!==m&&L){let S=new Event("change",{bubbles:!0});L.call(v,m),v.dispatchEvent(S)}},[x,m]),(0,z.jsxs)(Y.select,{"aria-hidden":!0,required:l,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:v=>s(v.target.value),...a,style:{...Xc,...a.style},ref:p,defaultValue:m,children:[hr(n)&&!w?(0,z.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function cf(e){return typeof e=="function"}ae(cf,"isFunction");function hr(e){return e===""||e===void 0}ae(hr,"shouldShowPlaceholder");function Ll(e){let t=Me(e),a=A.useRef(""),o=A.useRef(0),r=A.useCallback(s=>{let l=a.current+s;t(l),ae(function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))},"updateSearch")(l)},[t]),n=A.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return A.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ae(Ll,"useTypeaheadSearch");function Il(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=ff(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ae(Il,"findNextItem");function ff(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ae(ff,"wrapArray");var ve=require("react/jsx-runtime"),yl=ef;var Sl=tf,Dn=na.forwardRef(({className:e,children:t,...a},o)=>(0,ve.jsxs)(ml,{ref:o,className:W("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...a,children:[t,(0,ve.jsx)(af,{asChild:!0,children:(0,ve.jsx)(ao,{className:"h-4 w-4 opacity-50"})})]}));Dn.displayName=ml.displayName;var pf=na.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(wl,{ref:a,className:W("flex cursor-default items-center justify-center py-1",e),...t,children:(0,ve.jsx)(Ko,{className:"h-4 w-4"})}));pf.displayName=wl.displayName;var mf=na.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(bl,{ref:a,className:W("flex cursor-default items-center justify-center py-1",e),...t,children:(0,ve.jsx)(ao,{className:"h-4 w-4"})}));mf.displayName=bl.displayName;var Mn=na.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,ve.jsx)(of,{children:(0,ve.jsxs)(gl,{ref:r,className:W("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:a,...o,children:[(0,ve.jsx)(pf,{}),(0,ve.jsx)(nf,{className:W("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,ve.jsx)(mf,{})]})}));Mn.displayName=gl.displayName;var Fv=na.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(xl,{ref:a,className:W("px-2 py-1.5 text-sm font-semibold",e),...t}));Fv.displayName=xl.displayName;var Ro=na.forwardRef(({className:e,children:t,...a},o)=>(0,ve.jsxs)(vl,{ref:o,className:W("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...a,children:[(0,ve.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,ve.jsx)(uf,{children:(0,ve.jsx)(Jt,{className:"h-4 w-4"})})}),(0,ve.jsx)(lf,{children:t})]}));Ro.displayName=vl.displayName;var Bv=na.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(Cl,{ref:a,className:W("-mx-1 my-1 h-px bg-muted",e),...t}));Bv.displayName=Cl.displayName;var gf=H(require("react"),1);var hf=require("react/jsx-runtime"),Rl=gf.forwardRef(({className:e,...t},a)=>(0,hf.jsx)("textarea",{className:W("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));Rl.displayName="Textarea";var Ua={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},An=["high","medium","low"],xf="#94a3b8";function vf(e,t){return t?e.find(a=>a.name===t)?.color??xf:xf}var J=require("react/jsx-runtime");function wf({open:e,card:t,labels:a,onOpenChange:o,onSave:r,onDelete:n}){let s=at(),[l,i]=(0,Tn.useState)({title:"",note:"",label:"",priority:""});(0,Tn.useEffect)(()=>{e&&i({title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let u=c=>i(d=>({...d,...c}));return(0,J.jsx)(wo,{open:e,onOpenChange:o,children:(0,J.jsxs)(Ia,{className:"sm:max-w-md",children:[(0,J.jsxs)(ya,{children:[(0,J.jsx)(Sa,{children:s(t?"editCard":"addCard")}),(0,J.jsx)(Ra,{children:s(t?"editCardDesc":"newCardDesc")})]}),(0,J.jsxs)("div",{className:"grid gap-4 py-2",children:[(0,J.jsxs)("div",{className:"grid gap-2",children:[(0,J.jsx)(bo,{htmlFor:"card-title",children:s("fieldTitle")}),(0,J.jsx)(qt,{id:"card-title",value:l.title,placeholder:s("titlePlaceholder"),onChange:c=>u({title:c.target.value})})]}),(0,J.jsxs)("div",{className:"grid gap-2",children:[(0,J.jsx)(bo,{children:s("fieldLabel")}),(0,J.jsxs)(yl,{value:l.label||"__none__",onValueChange:c=>u({label:c==="__none__"?"":c}),children:[(0,J.jsx)(Dn,{children:(0,J.jsx)(Sl,{placeholder:s("noLabel")})}),(0,J.jsxs)(Mn,{children:[(0,J.jsx)(Ro,{value:"__none__",children:s("noLabel")}),a.map(c=>(0,J.jsx)(Ro,{value:c.name,children:c.name},c.name))]})]})]}),(0,J.jsxs)("div",{className:"grid gap-2",children:[(0,J.jsx)(bo,{children:s("fieldPriority")}),(0,J.jsxs)(yl,{value:l.priority||"__none__",onValueChange:c=>u({priority:c==="__none__"?"":c}),children:[(0,J.jsx)(Dn,{children:(0,J.jsx)(Sl,{placeholder:s("noPriority")})}),(0,J.jsxs)(Mn,{children:[(0,J.jsx)(Ro,{value:"__none__",children:s("noPriority")}),An.map(c=>{let d=Ua[c];return(0,J.jsx)(Ro,{value:c,children:(0,J.jsxs)("span",{className:"flex items-center gap-2",children:[(0,J.jsx)("span",{className:"h-2 w-2 rounded-full",style:{background:d.color}}),d.label]})},c)})]})]})]}),(0,J.jsxs)("div",{className:"grid gap-2",children:[(0,J.jsx)(bo,{htmlFor:"card-note",children:s("fieldNote")}),(0,J.jsx)(Rl,{id:"card-note",value:l.note,placeholder:s("notePlaceholder"),rows:3,onChange:c=>u({note:c.target.value})})]})]}),(0,J.jsxs)(ur,{children:[t&&n&&(0,J.jsxs)(ze,{variant:"destructive",className:"mr-auto",onClick:()=>{n(t),o(!1)},children:[(0,J.jsx)(Bt,{className:"h-4 w-4"}),s("delete")]}),(0,J.jsx)(ze,{variant:"outline",onClick:()=>o(!1),children:s("cancel")}),(0,J.jsx)(ze,{disabled:!l.title.trim(),onClick:()=>{r(l),o(!1)},children:s("save")})]})]})})}var bf=require("react/jsx-runtime"),Nv=Kr("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow",secondary:"border-transparent bg-secondary text-secondary-foreground",destructive:"border-transparent bg-destructive text-destructive-foreground shadow",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Pl({className:e,variant:t,...a}){return(0,bf.jsx)("div",{className:W(Nv({variant:t}),e),...a})}var Ha=H(require("react"),1);var qa=require("react/jsx-runtime"),xr=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("rounded-xl border bg-card text-card-foreground shadow",e),...t}));xr.displayName="Card";var _v=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("flex flex-col space-y-1.5 p-6",e),...t}));_v.displayName="CardHeader";var Uv=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("font-semibold leading-none tracking-tight",e),...t}));Uv.displayName="CardTitle";var Hv=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("text-sm text-muted-foreground",e),...t}));Hv.displayName="CardDescription";var vr=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("p-6 pt-0",e),...t}));vr.displayName="CardContent";var qv=Ha.forwardRef(({className:e,...t},a)=>(0,qa.jsx)("div",{ref:a,className:W("flex items-center p-6 pt-0",e),...t}));qv.displayName="CardFooter";var Tt=require("react/jsx-runtime");function Cf({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:s,transition:l,isDragging:i}=qr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}}),u=e.priority?Ua[e.priority]:null,c=vf(t,e.label);return(0,Tt.jsx)("div",{ref:n,style:{transform:Qe.Transform.toString(s),transition:l},...o,...r,onClick:()=>a(e),className:W("group cursor-grab touch-none select-none active:cursor-grabbing",i&&"opacity-40"),children:(0,Tt.jsx)(xr,{className:"pointer-events-none rounded-xl border-[var(--dsw-alias-border-l2)] shadow-card transition-shadow duration-200 group-hover:shadow-float",children:(0,Tt.jsxs)(vr,{className:"p-3.5",children:[(e.label||u)&&(0,Tt.jsxs)("div",{className:"mb-1.5 flex items-center gap-1.5",children:[e.label&&(0,Tt.jsx)(Pl,{variant:"secondary",className:"rounded-full px-2 py-0 text-[10.5px] font-medium leading-4",style:{background:c,color:"#0b1220"},children:e.label}),u&&(0,Tt.jsx)(Pl,{variant:"secondary",className:"rounded-full px-2 py-0 text-[10.5px] font-medium leading-4",style:{background:u.color,color:"#0b1220"},children:u.label})]}),(0,Tt.jsx)("p",{className:"text-[13.5px] font-medium leading-snug tracking-tight break-words",children:e.title}),e.note&&(0,Tt.jsx)("p",{className:"mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-3 whitespace-pre-wrap break-words",children:e.note})]})})})}var nt=require("react/jsx-runtime");function Lf({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:s}=Fr({id:e.id,data:{type:"column"}}),l=at();return(0,nt.jsxs)("div",{ref:n,className:W("flex w-72 shrink-0 flex-col rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card shadow-column transition-colors",s&&"border-primary"),children:[(0,nt.jsxs)("div",{className:"flex items-center gap-1.5 px-3 py-3",children:[(0,nt.jsx)("h3",{className:"flex-1 truncate text-[13.5px] font-semibold tracking-tight",children:e.title}),(0,nt.jsx)("span",{className:"rounded-full bg-secondary/70 px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground",children:t.length})]}),(0,nt.jsxs)("div",{className:"kan-scroll flex min-h-[4rem] flex-1 flex-col gap-2 overflow-y-auto px-2.5 pb-2.5",children:[(0,nt.jsx)(Hr,{items:t.map(i=>i.id),strategy:Ur,children:t.map(i=>(0,nt.jsx)(Cf,{card:i,labels:a,onOpen:r},i.id))}),t.length===0&&(0,nt.jsx)("p",{className:"py-5 text-center text-xs text-muted-foreground/70",children:l("emptyColumn")})]}),(0,nt.jsx)("div",{className:"p-2.5 pt-1",children:(0,nt.jsxs)(ze,{variant:"ghost",size:"sm",className:"w-full justify-start rounded-xl text-muted-foreground hover:text-foreground",onClick:()=>o(e),children:[(0,nt.jsx)(Ft,{className:"h-4 w-4"}),l("addCard")]})})]})}var wr=require("react");var we=require("react/jsx-runtime");function zv({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:s,listeners:l,setNodeRef:i,transform:u,transition:c}=qr({id:e.id}),d=at();return(0,we.jsxs)("div",{ref:i,style:{transform:Qe.Transform.toString(u),transition:c},className:"flex items-center gap-1.5",children:[(0,we.jsx)("button",{...s,...l,className:"shrink-0 cursor-grab touch-none rounded-md p-1 text-muted-foreground/60 hover:bg-accent hover:text-foreground","aria-label":d("dragSort"),children:(0,we.jsx)($o,{className:"h-4 w-4"})}),(0,we.jsx)(qt,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,we.jsx)(ze,{variant:"ghost",size:"icon",className:"h-8 w-8 shrink-0 text-destructive",disabled:!n,onClick:r,children:(0,we.jsx)(Bt,{className:"h-4 w-4"})})]})}function If({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:s}){let l=at(),[i,u]=(0,wr.useState)({}),[c,d]=(0,wr.useState)(""),f=Mr(to(Zt,{activationConstraint:{distance:8}}),to(Yt,{coordinateGetter:zr}));(0,wr.useEffect)(()=>{e&&u(Object.fromEntries(t.map(p=>[p.id,p.title])))},[e,t]);let h=p=>{let m=(i[p]??"").trim(),x=t.find(w=>w.id===p);x&&m&&m!==x.title&&r(p,m)},g=p=>{let{active:m,over:x}=p;x&&m.id!==x.id&&o(String(m.id),String(x.id))};return(0,we.jsx)(wo,{open:e,onOpenChange:a,children:(0,we.jsxs)(Ia,{className:"sm:max-w-md",children:[(0,we.jsxs)(ya,{children:[(0,we.jsx)(Sa,{children:l("columnEdit")}),(0,we.jsx)(Ra,{children:l("columnEditDesc")})]}),(0,we.jsx)(Or,{sensors:f,collisionDetection:Ri,onDragEnd:g,children:(0,we.jsx)(Hr,{items:t.map(p=>p.id),strategy:Ur,children:(0,we.jsx)("div",{className:"flex max-h-[60vh] flex-col gap-2 overflow-y-auto py-2",children:t.map(p=>(0,we.jsx)(zv,{column:p,value:i[p.id]??p.title,onValueChange:m=>u(x=>({...x,[p.id]:m})),onCommit:()=>h(p.id),onDelete:()=>n(p.id),canDelete:t.length>1},p.id))})})}),(0,we.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,we.jsx)(qt,{value:c,placeholder:l("newColumnPlaceholder"),onChange:p=>d(p.target.value),onKeyDown:p=>{p.key==="Enter"&&c.trim()&&(s(c.trim()),d(""))}}),(0,we.jsxs)(ze,{size:"sm",onClick:()=>{c.trim()&&(s(c.trim()),d(""))},children:[(0,we.jsx)(Ft,{className:"h-4 w-4"}),l("add")]})]})]})})}var Po=require("react");var Re=require("react/jsx-runtime");function yf({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let s=at(),[l,i]=(0,Po.useState)({}),[u,c]=(0,Po.useState)(""),[d,f]=(0,Po.useState)("#38bdf8");(0,Po.useEffect)(()=>{e&&i(Object.fromEntries(t.map(g=>[g.name,{name:g.name,color:g.color}])))},[e,t]);let h=g=>{let p=l[g];if(!p)return;let m=t.find(w=>w.name===g),x=p.name.trim();m&&x&&(x!==g||p.color!==m.color)&&r(g,x,p.color)};return(0,Re.jsx)(wo,{open:e,onOpenChange:a,children:(0,Re.jsxs)(Ia,{className:"sm:max-w-md",children:[(0,Re.jsxs)(ya,{children:[(0,Re.jsx)(Sa,{children:s("labelEdit")}),(0,Re.jsx)(Ra,{children:s("labelEditDesc")})]}),(0,Re.jsx)("div",{className:"flex max-h-[60vh] flex-col gap-2 overflow-y-auto py-2",children:t.map(g=>{let p=l[g.name]??{name:g.name,color:g.color};return(0,Re.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,Re.jsx)("input",{type:"color",value:p.color,className:"h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5",onChange:m=>i(x=>({...x,[g.name]:{...p,color:m.target.value}})),onBlur:()=>h(g.name)}),(0,Re.jsx)(qt,{value:p.name,onChange:m=>i(x=>({...x,[g.name]:{...p,name:m.target.value}})),onBlur:()=>h(g.name),onKeyDown:m=>{m.key==="Enter"&&m.target.blur()}}),(0,Re.jsx)(ze,{variant:"ghost",size:"icon",className:"h-8 w-8 shrink-0 text-destructive",onClick:()=>n(g.name),children:(0,Re.jsx)(Bt,{className:"h-4 w-4"})})]},g.name)})}),(0,Re.jsx)(ur,{className:"flex-col gap-2 sm:flex-row sm:items-center",children:(0,Re.jsxs)("div",{className:"flex flex-1 items-center gap-1.5",children:[(0,Re.jsx)("input",{type:"color",value:d,className:"h-8 w-8 shrink-0 cursor-pointer rounded-md border border-input bg-transparent p-0.5",onChange:g=>f(g.target.value)}),(0,Re.jsx)(qt,{value:u,placeholder:s("newLabelPlaceholder"),onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Re.jsxs)(ze,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Re.jsx)(Ft,{className:"h-4 w-4"}),s("add")]})]})})]})})}var Cr=H(require("react"),1);var Lt=H(require("react"),1);var G=H(require("react"),1);var Ee=H(require("react"),1);var Gv=H(require("react"),1),En=H(require("react"),1),Vv=Object.defineProperty,Dl=(e,t)=>Vv(e,"name",{value:t,configurable:!0}),kl=!1;function Sf(){let[e,t]=En.useState(kl);return En.useEffect(()=>{kl||(kl=!0,t(!0))},[]),e}Dl(Sf,"useIsHydrated");var Rf=Gv[" useSyncExternalStore ".trim().toString()];function Pf(){return()=>{}}Dl(Pf,"subscribe");function kf(){return Rf(Pf,()=>!0,()=>!1)}Dl(kf,"useIsHydratedModern");var Df=typeof Rf=="function"?kf:Sf;var sa=require("react/jsx-runtime"),Wv=Object.defineProperty,za=(e,t)=>Wv(e,"name",{value:t,configurable:!0}),Ml="rovingFocusGroup.onEntryFocus",jv={bubbles:!1,cancelable:!0},On="RovingFocusGroup",[Al,Mf,Kv]=ka(On),[Xv,Tl]=Be(On,[Kv]),[$v,Yv]=Xv(On),Zv=Ee.forwardRef(za(function(t,a){return(0,sa.jsx)(Al.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,sa.jsx)(Al.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,sa.jsx)(Jv,{...t,ref:a})})})},"RovingFocusGroup")),Jv=Ee.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:s,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=Ee.useRef(null),g=X(a,h),p=Da(s),[m,x]=Rt({prop:l,defaultProp:i??null,onChange:u,caller:On}),[w,v]=Ee.useState(!1),b=Me(c),C=Mf(o),L=Ee.useRef(!1),[S,R]=Ee.useState(0);return Ee.useEffect(()=>{let P=h.current;if(P)return P.addEventListener(Ml,b),()=>P.removeEventListener(Ml,b)},[b]),(0,sa.jsx)($v,{scope:o,orientation:r,dir:p,loop:n,currentTabStopId:m,onItemFocus:Ee.useCallback(P=>x(P),[x]),onItemShiftTab:Ee.useCallback(()=>v(!0),[]),onFocusableItemAdd:Ee.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:Ee.useCallback(()=>R(P=>P-1),[]),children:(0,sa.jsx)(Y.div,{tabIndex:w||S===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:q(t.onMouseDown,()=>{L.current=!0}),onFocus:q(t.onFocus,P=>{let E=!L.current;if(P.target===P.currentTarget&&E&&!w){let T=new CustomEvent(Ml,jv);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){let k=C().filter(F=>F.focusable),y=k.find(F=>F.active),D=k.find(F=>F.id===m),U=[y,D,...k].filter(Boolean).map(F=>F.ref.current);El(U,d)}}L.current=!1}),onBlur:q(t.onBlur,()=>v(!1))})})},"RovingFocusGroupImpl")),Qv="RovingFocusGroupItem",ew=Ee.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:s,children:l,...i}=t,u=tt(),c=s||u,d=Yv(Qv,o),f=d.currentTabStopId===c,h=Mf(o),{onFocusableItemAdd:g,onFocusableItemRemove:p,currentTabStopId:m}=d,x=Df();return re(()=>{if(!(!x||!r))return g(),()=>p()},[x,r,g,p]),Ee.useEffect(()=>{if(!(x||!r))return g(),()=>p()},[x,r,g,p]),(0,sa.jsx)(Al.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,sa.jsx)(Y.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:q(t.onMouseDown,w=>{r?d.onItemFocus(c):w.preventDefault()}),onFocus:q(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:q(t.onKeyDown,w=>{if(w.key==="Tab"&&w.shiftKey){d.onItemShiftTab();return}if(w.target!==w.currentTarget)return;let v=Tf(w,d.orientation,d.dir);if(v!==void 0){if(w.metaKey||w.ctrlKey||w.altKey||w.shiftKey)return;w.preventDefault();let C=h().filter(L=>L.focusable).map(L=>L.ref.current);if(v==="last")C.reverse();else if(v==="prev"||v==="next"){v==="prev"&&C.reverse();let L=C.indexOf(w.currentTarget);C=d.loop?Ef(C,L+1):C.slice(L+1)}setTimeout(()=>El(C))}}),children:typeof l=="function"?l({isCurrentTabStop:f,hasTabStop:m!=null}):l})})},"RovingFocusGroupItem")),tw={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Af(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}za(Af,"getDirectionAwareKey");function Tf(e,t,a){let o=Af(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return tw[o]}za(Tf,"getFocusIntent");function El(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}za(El,"focusFirst");function Ef(e,t){return e.map((a,o)=>e[(t+o)%e.length])}za(Ef,"wrapArray");var Of=Zv,Ff=ew;var ie=require("react/jsx-runtime"),ow=Object.defineProperty,ue=(e,t)=>ow(e,"name",{value:t,configurable:!0}),Ol=["Enter"," "],rw=["ArrowDown","PageUp","Home"],Nf=["ArrowUp","PageDown","End"],nw=[...rw,...Nf],eR={ltr:[...Ol,"ArrowRight"],rtl:[...Ol,"ArrowLeft"]};var Bn="Menu",[Fl,sw,lw]=ka(Bn),[Va,Nl]=Be(Bn,[lw,yo,Tl]),_l=yo(),_f=Tl(),[iw,br]=Va(Bn),[uw,Ul]=Va(Bn),dw=ue(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:s=!0}=e,l=_l(t),[i,u]=G.useState(null),c=G.useRef(!1),d=Me(n),f=Da(r);return G.useEffect(()=>{let h=ue(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=ue(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),G.useEffect(()=>{if(!a)return;let h=ue(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,ie.jsx)(Ln,{...l,children:(0,ie.jsx)(iw,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,ie.jsx)(uw,{scope:t,onClose:G.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:s,children:o})})})},"Menu"),cw=G.forwardRef(ue(function(t,a){let{__scopeMenu:o,...r}=t,n=_l(o);return(0,ie.jsx)(In,{...n,...r,ref:a})},"MenuAnchor")),Uf="MenuPortal",[fw,pw]=Va(Uf,{forceMount:void 0}),mw=ue(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=br(Uf,t);return(0,ie.jsx)(fw,{scope:t,forceMount:a,children:(0,ie.jsx)(Ht,{present:a||n.open,children:(0,ie.jsx)(co,{asChild:!0,container:r,children:o})})})},"MenuPortal"),la="MenuContent",[gw,Hf]=Va(la),hw=G.forwardRef(ue(function(t,a){let o=pw(la,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,s=br(la,t.__scopeMenu),l=Ul(la,t.__scopeMenu);return(0,ie.jsx)(Fl.Provider,{scope:t.__scopeMenu,children:(0,ie.jsx)(Ht,{present:r||s.open,children:(0,ie.jsx)(Fl.Slot,{scope:t.__scopeMenu,children:l.modal?(0,ie.jsx)(xw,{...n,ref:a}):(0,ie.jsx)(vw,{...n,ref:a})})})})},"MenuContent")),xw=G.forwardRef(ue(function(t,a){let o=br(la,t.__scopeMenu),r=G.useRef(null),n=X(a,r);return G.useEffect(()=>{let s=r.current;if(s)return vo(s)},[]),(0,ie.jsx)(qf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:q(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),vw=G.forwardRef(ue(function(t,a){let o=br(la,t.__scopeMenu);return(0,ie.jsx)(qf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),ww=qe("MenuContent.ScrollLock"),qf=G.forwardRef(ue(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,disableOutsideScroll:p,...m}=t,x=br(la,o),w=Ul(la,o),v=_l(o),b=_f(o),C=sw(o),[L,S]=G.useState(null),R=G.useRef(null),P=X(a,R,x.onContentChange),E=G.useRef(0),T=G.useRef(""),k=G.useRef(0),y=G.useRef(null),D=G.useRef("right"),O=G.useRef(0),U=p?Ca:G.Fragment,F=p?{as:ww,allowPinchZoom:!0}:void 0,N=ue(M=>{let Z=T.current+M,K=C().filter(B=>!B.disabled),ne=document.activeElement,be=K.find(B=>B.ref.current===ne)?.textValue,Pe=K.map(B=>B.textValue),pe=jf(Pe,Z,be),ke=K.find(B=>B.textValue===pe)?.ref.current;ue(function B(Q){T.current=Q,window.clearTimeout(E.current),Q!==""&&(E.current=window.setTimeout(()=>B(""),1e3))},"updateSearch")(Z),ke&&setTimeout(()=>ke.focus())},"handleTypeaheadSearch");G.useEffect(()=>()=>window.clearTimeout(E.current),[]),ta();let _=G.useCallback(M=>D.current===y.current?.side&&Xf(M,y.current?.area),[]);return(0,ie.jsx)(gw,{scope:o,searchRef:T,onItemEnter:G.useCallback(M=>{_(M)&&M.preventDefault()},[_]),onItemLeave:G.useCallback(M=>{_(M)||(R.current?.focus(),S(null))},[_]),onTriggerLeave:G.useCallback(M=>{_(M)&&M.preventDefault()},[_]),pointerGraceTimerRef:k,onPointerGraceIntentChange:G.useCallback(M=>{y.current=M},[]),children:(0,ie.jsx)(U,{...F,children:(0,ie.jsx)(uo,{asChild:!0,trapped:n,onMountAutoFocus:q(s,M=>{M.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:(0,ie.jsx)(io,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,children:(0,ie.jsx)(Of,{asChild:!0,...b,dir:w.dir,orientation:"vertical",loop:r,currentTabStopId:L,onCurrentTabStopIdChange:S,onEntryFocus:q(u,M=>{w.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,ie.jsx)(yn,{role:"menu","aria-orientation":"vertical","data-state":zf(x.open),"data-radix-menu-content":"",dir:w.dir,...v,...m,ref:P,style:{outline:"none",...m.style},onKeyDown:q(m.onKeyDown,M=>{let K=M.target.closest("[data-radix-menu-content]")===M.currentTarget,ne=M.ctrlKey||M.altKey||M.metaKey,be=M.key.length===1;K&&(M.key==="Tab"&&M.preventDefault(),!ne&&be&&N(M.key));let Pe=R.current;if(M.target!==Pe||!nw.includes(M.key))return;M.preventDefault();let ke=C().filter(B=>!B.disabled).map(B=>B.ref.current);Nf.includes(M.key)&&ke.reverse(),Gf(ke)}),onBlur:q(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(E.current),T.current="")}),onPointerMove:q(t.onPointerMove,Fn(M=>{let Z=M.target,K=O.current!==M.clientX;if(M.currentTarget.contains(Z)&&K){let ne=M.clientX>O.current?"right":"left";D.current=ne,O.current=M.clientX}}))})})})})})})},"MenuContentImpl"));var bw=G.forwardRef(ue(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ie.jsx)(Y.div,{...r,ref:a})},"MenuLabel")),Bl="MenuItem",Bf="menu.itemSelect",Cw=G.forwardRef(ue(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,s=G.useRef(null),l=Ul(Bl,t.__scopeMenu),i=Hf(Bl,t.__scopeMenu),u=X(a,s),c=G.useRef(!1),d=ue(()=>{let f=s.current;if(!o&&f){let h=new CustomEvent(Bf,{bubbles:!0,cancelable:!0});f.addEventListener(Bf,g=>r?.(g),{once:!0}),or(f,h),h.defaultPrevented?c.current=!1:l.onClose()}},"handleSelect");return(0,ie.jsx)(Lw,{...n,ref:u,disabled:o,onClick:q(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||Ol.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),Lw=G.forwardRef(ue(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...s}=t,l=Hf(Bl,o),i=_f(o),u=G.useRef(null),c=X(a,u),[d,f]=G.useState(!1),[h,g]=G.useState("");return G.useEffect(()=>{let p=u.current;p&&g((p.textContent??"").trim())},[s.children]),(0,ie.jsx)(Fl.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,ie.jsx)(Ff,{asChild:!0,...i,focusable:!r,children:(0,ie.jsx)(Y.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...s,ref:c,onPointerMove:q(t.onPointerMove,Fn(p=>{r?l.onItemLeave(p):(l.onItemEnter(p),p.defaultPrevented||p.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:q(t.onPointerLeave,Fn(p=>l.onItemLeave(p))),onFocus:q(t.onFocus,()=>f(!0)),onBlur:q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var Iw="MenuRadioGroup",[tR,aR]=Va(Iw,{value:void 0,onValueChange:ue(()=>{},"onValueChange")});var yw="MenuItemIndicator",[oR,rR]=Va(yw,{checked:!1});var Sw=G.forwardRef(ue(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ie.jsx)(Y.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var Rw="MenuSub",[nR,sR]=Va(Rw);function zf(e){return e?"open":"closed"}ue(zf,"getOpenState");function Vf(e){return e==="indeterminate"}ue(Vf,"isIndeterminate");function Pw(e){return Vf(e)?"indeterminate":e?"checked":"unchecked"}ue(Pw,"getCheckedState");function Gf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}ue(Gf,"focusFirst");function Wf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ue(Wf,"wrapArray");function jf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=Wf(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ue(jf,"getNextMatch");function Kf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let l=t[n],i=t[s],u=l.x,c=l.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}ue(Kf,"isPointInPolygon");function Xf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Kf(a,t)}ue(Xf,"isPointerInGraceArea");function Fn(e){return t=>t.pointerType==="mouse"?e(t):void 0}ue(Fn,"whenMouse");var $f=dw,Yf=cw,Zf=mw,Jf=hw;var Qf=bw,ep=Cw;var tp=Sw;var Et=require("react/jsx-runtime"),Dw=Object.defineProperty,Ga=(e,t)=>Dw(e,"name",{value:t,configurable:!0}),Hl="DropdownMenu",[Mw,IR]=Be(Hl,[Nl]),Wa=Nl(),[Aw,ap]=Mw(Hl),Tw=Ga(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:s,modal:l=!0}=e,i=Wa(t),u=Lt.useRef(null),[c,d]=Rt({prop:r,defaultProp:n??!1,onChange:s,caller:Hl});return(0,Et.jsx)(Aw,{scope:t,triggerId:tt(),triggerRef:u,contentId:tt(),open:c,onOpenChange:d,onOpenToggle:Lt.useCallback(()=>d(f=>!f),[d]),modal:l,children:(0,Et.jsx)($f,{...i,open:c,onOpenChange:d,dir:o,modal:l,children:a})})},"DropdownMenu"),Ew="DropdownMenuTrigger",Ow=Lt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,s=ap(Ew,o),l=Wa(o),i=X(a,s.triggerRef);return(0,Et.jsx)(Yf,{asChild:!0,...l,children:(0,Et.jsx)(Y.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:q(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:q(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),Fw=Ga(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Wa(t);return(0,Et.jsx)(Zf,{...o,...a})},"DropdownMenuPortal"),Bw="DropdownMenuContent",Nw=Lt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ap(Bw,o),s=Wa(o),l=Lt.useRef(!1);return(0,Et.jsx)(Jf,{id:n.contentId,"aria-labelledby":n.triggerId,...s,...r,ref:a,onCloseAutoFocus:q(t.onCloseAutoFocus,i=>{l.current||n.triggerRef.current?.focus(),l.current=!1,i.preventDefault()}),onInteractOutside:q(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(l.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var _w=Lt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Wa(o);return(0,Et.jsx)(Qf,{...n,...r,ref:a})},"DropdownMenuLabel")),Uw=Lt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Wa(o);return(0,Et.jsx)(ep,{...n,...r,ref:a})},"DropdownMenuItem"));var Hw=Lt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Wa(o);return(0,Et.jsx)(tp,{...n,...r,ref:a})},"DropdownMenuSeparator"));var op=Tw,rp=Ow,np=Fw,ql=Nw;var zl=_w,Vl=Uw;var Gl=Hw;var ko=require("react/jsx-runtime"),Wl=op,jl=rp;var Nn=Cr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,ko.jsx)(np,{children:(0,ko.jsx)(ql,{ref:o,sideOffset:t,className:W("z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",e),...a})}));Nn.displayName=ql.displayName;var Do=Cr.forwardRef(({className:e,inset:t,...a},o)=>(0,ko.jsx)(Vl,{ref:o,className:W("relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...a}));Do.displayName=Vl.displayName;var zw=Cr.forwardRef(({className:e,inset:t,...a},o)=>(0,ko.jsx)(zl,{ref:o,className:W("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...a}));zw.displayName=zl.displayName;var Vw=Cr.forwardRef(({className:e,...t},a)=>(0,ko.jsx)(Gl,{ref:a,className:W("-mx-1 my-1 h-px bg-muted",e),...t}));Vw.displayName=Gl.displayName;function Kl(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(o=>o.json())}var $=require("react/jsx-runtime");function sp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=a?a(y=>y.items):[],r=a?a(y=>y.recentWorkspaceId):void 0,n=Array.isArray(o)?o.find(y=>Array.isArray(y.sessionIds)&&y.sessionIds.includes(t)):void 0,s=n?n.workspaceId:r||"default",l=at(),[i,u]=(0,$e.useState)(null),[c,d]=(0,$e.useState)(""),[f,h]=(0,$e.useState)(null),[g,p]=(0,$e.useState)(null),[m,x]=(0,$e.useState)(!1),[w,v]=(0,$e.useState)(!1),[b,C]=(0,$e.useState)(""),L=Mr(to(Zt,{activationConstraint:{distance:8}}),to(Yt,{coordinateGetter:zr})),S=(0,$e.useCallback)(y=>{y&&y.board&&(u(y.board),d(""))},[]),R=(0,$e.useCallback)((y,D={})=>{Kl(y,D,s).then(S).catch(O=>d(l("actionFailed")+String(O&&O.message||O)))},[s,S]);(0,$e.useEffect)(()=>{let y=!0;return Kl("get",{},s).then(D=>{y&&S(D)}).catch(D=>{y&&d(l("loadFailed")+String(D&&D.message||D))}),()=>{y=!1}},[s,S]);let P=(0,$e.useCallback)(y=>{let D=Pi(y),O=D.length>0?D:ts(y),U=Vo(O,"id");if(U==null)return[];if(new Set((i?.columns??[]).map(N=>N.id)).has(String(U))){let N=(i?.cards??[]).filter(_=>_.columnId===U).map(_=>_.id);if(N.length>0){let _=Ar({...y,droppableContainers:y.droppableContainers.filter(M=>M.id!==U&&N.includes(String(M.id)))});_.length>0&&(U=_[0].id)}}return[{id:U}]},[i]),E=y=>{if(y.active.data.current?.type==="card"){let D=i?.cards.find(O=>O.id===y.active.id);D&&h(D)}},T=y=>{let{active:D,over:O}=y;if(h(null),!O||!i)return;let U=D.data.current?.type,F=O.data.current?.type;if(U==="card")if(F==="card"){let N=i.cards.find(Z=>Z.id===O.id);if(!N||N.id===D.id)return;let M=i.cards.filter(Z=>Z.columnId===N.columnId).findIndex(Z=>Z.id===N.id);R("moveCard",{id:String(D.id),columnId:N.columnId,toIndex:M>=0?M:void 0})}else F==="column"&&R("moveCard",{id:String(D.id),columnId:String(O.id)})},k=y=>{if(!g)return;let D={title:y.title,note:y.note,label:y.label||void 0,priority:y.priority||void 0};g.card?R("updateCard",{id:g.card.id,...D}):R("addCard",{columnId:g.columnId,...D})};return i?(0,$.jsxs)("div",{className:"flex h-full min-h-[420px] flex-col gap-3 p-5",children:[c&&(0,$.jsx)("p",{className:"text-sm text-destructive",children:c}),(0,$.jsxs)(Or,{sensors:L,collisionDetection:P,onDragStart:E,onDragEnd:T,children:[(0,$.jsxs)("div",{className:"flex min-h-0 flex-1 gap-3",children:[(0,$.jsxs)("div",{className:"flex shrink-0 flex-col items-center gap-1.5 self-start rounded-2xl border border-[var(--dsw-alias-border-l2)] bg-card p-1.5 shadow-column",children:[(0,$.jsxs)(Wl,{children:[(0,$.jsx)(jl,{asChild:!0,children:(0,$.jsx)(ze,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground",title:l("settings"),children:(0,$.jsx)(Zo,{className:"h-4 w-4"})})}),(0,$.jsxs)(Nn,{align:"start",children:[(0,$.jsxs)(Do,{onClick:()=>x(!0),children:[(0,$.jsx)(Yo,{className:"h-4 w-4"}),l("columnEdit")]}),(0,$.jsxs)(Do,{onClick:()=>v(!0),children:[(0,$.jsx)(Jo,{className:"h-4 w-4"}),l("labelEdit")]})]})]}),(0,$.jsxs)(Wl,{children:[(0,$.jsx)(jl,{asChild:!0,children:(0,$.jsx)(ze,{variant:b?"secondary":"ghost",size:"icon",className:"h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground",title:l("priorityFilter"),children:(0,$.jsx)(Xo,{className:"h-4 w-4"})})}),(0,$.jsxs)(Nn,{align:"start",children:[(0,$.jsxs)(Do,{onClick:()=>C(""),children:[(0,$.jsx)("span",{className:"flex h-4 w-4 items-center",children:!b&&(0,$.jsx)(Jt,{className:"h-4 w-4"})}),l("all")]}),An.map(y=>(0,$.jsxs)(Do,{onClick:()=>C(y),children:[(0,$.jsx)("span",{className:"flex h-4 w-4 items-center",children:b===y&&(0,$.jsx)(Jt,{className:"h-4 w-4"})}),(0,$.jsx)("span",{className:"h-2 w-2 rounded-full",style:{background:Ua[y].color}}),Ua[y].label]},y))]})]})]}),(0,$.jsx)("div",{className:"kan-scroll flex flex-1 gap-3 overflow-x-auto pb-2",children:i.columns.map(y=>{let D=i.cards.filter(O=>O.columnId===y.id&&(!b||O.priority===b));return(0,$.jsx)(Lf,{column:y,cards:D,labels:i.labels,onAddCard:O=>p({card:null,columnId:O.id}),onOpenCard:O=>p({card:O,columnId:O.columnId})},y.id)})})]}),(0,$.jsx)(Gi,{children:f?(0,$.jsx)(xr,{className:"w-64 rotate-2 rounded-xl border-[var(--dsw-alias-border-l2)] bg-secondary shadow-float",children:(0,$.jsx)(vr,{className:"p-3.5",children:(0,$.jsx)("p",{className:"text-[13.5px] font-medium tracking-tight break-words",children:f.title})})}):null})]}),(0,$.jsx)(wf,{open:g!==null,card:g?.card??null,labels:i.labels,onOpenChange:y=>{y||p(null)},onSave:k,onDelete:y=>R("deleteCard",{id:y.id})}),(0,$.jsx)(If,{open:m,columns:i.columns,onOpenChange:x,onReorder:(y,D)=>{let O=i.columns.findIndex(U=>U.id===D);O>=0&&R("moveColumn",{id:y,toIndex:O})},onRename:(y,D)=>R("renameColumn",{id:y,title:D}),onDelete:y=>R("deleteColumn",{id:y}),onAdd:y=>R("addColumn",{title:y})}),(0,$.jsx)(yf,{open:w,labels:i.labels,onOpenChange:v,onAdd:(y,D)=>R("addLabel",{name:y,color:D}),onUpdate:(y,D,O)=>R("updateLabel",{name:y,newName:D,color:O}),onDelete:y=>R("deleteLabel",{name:y})})]}):(0,$.jsx)("div",{className:"flex h-full min-h-[420px] items-center justify-center p-5",children:c?(0,$.jsx)("p",{className:"text-sm text-destructive",children:c}):(0,$.jsx)("p",{className:"text-sm text-muted-foreground",children:l("loading")})})}var ip={name:"dsh-kanban",inject:["slots","locale"],apply(e){Td(e);let t=e.get("slots");t!==void 0&&t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>$s("boardTab")},a=>(0,lp.createElement)(sp,a)))}};var up="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+up+"]")){let e=document.createElement("style");e.setAttribute(up,""),e.textContent=ri,document.head.appendChild(e)}var Gw=ip;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/filter.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/grip-vertical.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/settings-2.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tag.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash-2.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

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