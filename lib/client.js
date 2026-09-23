window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Up=Object.create;var Ar=Object.defineProperty;var Vp=Object.getOwnPropertyDescriptor;var Wp=Object.getOwnPropertyNames;var Gp=Object.getPrototypeOf,zp=Object.prototype.hasOwnProperty;var ri=e=>{throw TypeError(e)};var Kp=(e,t)=>{for(var a in t)Ar(e,a,{get:t[a],enumerable:!0})},ni=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wp(t))!zp.call(e,r)&&r!==a&&Ar(e,r,{get:()=>t[r],enumerable:!(o=Vp(t,r))||o.enumerable});return e};var V=(e,t,a)=>(a=e!=null?Up(Gp(e)):{},ni(t||!e||!e.__esModule?Ar(a,"default",{value:e,enumerable:!0}):a,e)),Xp=e=>ni(Ar({},"__esModule",{value:!0}),e);var li=(e,t,a)=>t.has(e)||ri("Cannot "+a);var Ke=(e,t,a)=>(li(e,t,"read from private field"),a?a.call(e):t.get(e)),si=(e,t,a)=>t.has(e)?ri("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),jn=(e,t,a,o)=>(li(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var PC={};Kp(PC,{default:()=>RC});module.exports=Xp(PC);var ii=`/*
 * Kanban plugin styles.
 * All selectors are namespaced so this stylesheet can live in DSH's <head>.
 * Typography, colors, borders and shadows use DSH theme tokens directly.
 */

.kanban-root {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
}

.kanban-portal {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
}

.kanban-root *,
.kanban-portal * {
  box-sizing: border-box;
}

/* Low-specificity reset: component variants must retain their font and color. */
:where(.kanban-root, .kanban-portal) :where(button, input, textarea) {
  font: inherit;
}

:where(.kanban-root, .kanban-portal) button {
  color: inherit;
}

.kanban-root svg,
.kanban-portal svg {
  display: block;
  flex-shrink: 0;
}

:where(.kanban-root, .kanban-portal) :where(p, h3, ol) {
  margin: 0;
}

/* One inset keyboard ring, not an outer ring plus the surface's stroke.
 * Low specificity lets text fields and Radix menu highlights own their focus. */
:where(.kanban-root, .kanban-portal) :focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: -2px;
}

.kanban-sortable-card:focus-visible .kanban-card {
  box-shadow: none;
}

/* Main board */
.kanban-loading {
  display: flex;
  height: 100%;
  min-height: 420px;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.kanban-view {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

.kanban-error {
  color: var(--dsw-alias-state-error-primary);
  font: var(--dsw-font-s-14);
}

.kanban-muted-text {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-s-14);
}

.kanban-warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-state-warn-primary);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-2);
}

.kanban-warning-body {
  min-width: 0;
  flex: 1;
}

.kanban-warning-title {
  color: var(--dsw-alias-state-warn-label);
  font: var(--dsw-font-xxs-strong-12);
}

.kanban-warning-item {
  margin-top: 2px;
  overflow-wrap: anywhere;
  color: var(--dsw-alias-state-warn-label);
  font: var(--dsw-font-xxs-12);
}

.kanban-warning-dismiss {
  flex-shrink: 0;
  height: 24px;
  padding: 0 8px;
  color: var(--dsw-alias-state-warn-label);
  font: var(--dsw-font-xxs-strong-12);
}

.kanban-warning-dismiss:hover {
  color: var(--dsw-alias-state-warn-primary);
}

.kanban-content {
  display: flex;
  min-height: 0;
  flex: 1;
  gap: 12px;
}

.kanban-toolbar {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  gap: 6px;
  padding: 6px;
  border: 0;
  border-radius: 16px;
  background: var(--dsw-alias-bg-layer-1);
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l2);
  box-shadow: var(--dsw-elevation-stroke);
}

.kanban-toolbar-button {
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  box-shadow: none;
}

.kanban-toolbar-button:hover {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-toolbar-button:active {
  background: var(--dsw-alias-button-ghost-active-fill);
}

.kanban-board-scroll {
  display: flex;
  min-width: 0;
  min-height: 0;
  flex: 1;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}

.kanban-filter-check {
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
}

.kanban-priority-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  corner-shape: round;
}

/* Columns and cards */
.kanban-column {
  display: flex;
  width: 288px;
  min-width: 288px;
  min-height: 0;
  flex-shrink: 0;
  flex-direction: column;
  border: 0;
  border-radius: 16px;
  background: var(--dsw-alias-bg-layer-1);
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l2);
  box-shadow: var(--dsw-elevation-stroke);
}

.kanban-column.is-over {
  /* Highlight only the drop target, not every card inheriting its stroke token. */
  box-shadow: inset 0 0 0 1px var(--dsw-alias-state-business-primary);
}

.kanban-column-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px;
}

.kanban-column-title {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font: var(--dsw-font-xs-strong-13);
}

.kanban-column-count {
  padding: 2px 6px;
  border-radius: 999px;
  corner-shape: round;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-11);
}

.kanban-column-cards {
  display: flex;
  min-height: 64px;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding: 0 10px 10px;
}

.kanban-column-empty {
  padding: 20px 0;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
  font: var(--dsw-font-xxs-12);
}

.kanban-column-footer {
  padding: 4px 10px 10px;
}

.kanban-add-card {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  box-shadow: none;
}

.kanban-add-card:hover {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-add-card:active {
  background: var(--dsw-alias-button-ghost-active-fill);
}

.kanban-sortable-card {
  border-radius: 12px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.kanban-sortable-card:active {
  cursor: grabbing;
}

.kanban-sortable-card.is-dragging {
  opacity: 0.4;
}

.kanban-card {
  border: 0;
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l2);
  box-shadow: var(--dsw-elevation-stroke);
}

.kanban-sortable-card:hover .kanban-card {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-sortable-card-content {
  padding: 14px;
}

.kanban-card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.kanban-card-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 1px 6px;
  border: 0;
  border-radius: 6px;
  font: var(--dsw-font-xxs-12);
  overflow-wrap: anywhere;
}

.kanban-label-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  corner-shape: round;
}

.kanban-card-title {
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-strong-13);
}

.kanban-card-note {
  display: -webkit-box;
  max-height: 4.875em;
  margin-top: 6px;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.kanban-card-comment-count {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 8px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-11);
}

.kanban-card-comment-count svg {
  width: 12px;
  height: 12px;
}

.kanban-drag-preview {
  width: 100%;
  transform: rotate(2deg);
  cursor: grabbing;
}

.kanban-drag-preview .kanban-card {
  background: var(--dsw-alias-bg-layer-2);
  box-shadow: var(--dsw-elevation-panel);
}

/* Form and activity */
.kanban-form-stack {
  display: grid;
  gap: 16px;
  padding: 8px 0;
}

.kanban-form-field {
  display: grid;
  gap: 8px;
}

.kanban-field-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kanban-field-id {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-strong-11);
}

.kanban-inline-priority {
  display: flex;
  align-items: center;
  gap: 8px;
}

.kanban-comments-box {
  display: grid;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
}

.kanban-comments-scroll {
  max-height: 220px;
  overflow-y: auto;
}

.kanban-comment-list {
  display: grid;
  gap: 8px;
  padding: 0;
  list-style: none;
}

.kanban-comment-item {
  display: grid;
  gap: 4px;
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-2);
}

.kanban-comment-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.kanban-comment-content {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xxs-12);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.kanban-comment-composer {
  display: grid;
  justify-items: end;
  gap: 8px;
}

.kanban-comment-composer .kanban-textarea {
  width: 100%;
}

.kanban-activity-box {
  display: grid;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
}

.kanban-activity-scroll {
  max-height: 168px;
  overflow-y: auto;
  margin: 0 -4px;
  padding: 0 4px;
}

.kanban-activity-list {
  display: grid;
}

.kanban-activity-item {
  display: grid;
  grid-template-columns: 6px minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 8px;
  padding: 7px 0;
  border-top: 1px solid var(--dsw-alias-border-l2);
}

.kanban-activity-item:first-child {
  border-top: 0;
}

.kanban-activity-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  corner-shape: round;
}

.kanban-activity-dot.is-agent {
  background: var(--dsw-alias-state-business-primary);
}

.kanban-activity-dot.is-human {
  background: var(--dsw-alias-state-success-primary);
}

.kanban-activity-actor {
  font: var(--dsw-font-xxxs-strong-11);
}

.kanban-activity-actor.is-agent {
  color: var(--dsw-alias-state-business-primary);
}

.kanban-activity-actor.is-human {
  color: var(--dsw-alias-state-success-primary);
}

.kanban-activity-description {
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xxs-12);
}

.kanban-activity-time {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-11);
  white-space: nowrap;
}

.kanban-muted-small {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-tiny-icon {
  width: 12px;
  height: 12px;
}

.kanban-tabular {
  font-variant-numeric: tabular-nums;
}

/* Radix-backed controls mirror the current Host primitive geometry and tokens. */
:where(.kanban-button) {
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;
  border: 0;
  border-radius: 18px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: pointer;
}

.kanban-button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.kanban-button svg {
  width: 16px;
  height: 16px;
  pointer-events: none;
}

:where(.kanban-button--size-default) {
  height: 36px;
  padding: 0 14px;
}

:where(.kanban-button--size-sm) {
  height: 28px;
  padding: 0 10px;
  border-radius: 14px;
  font: var(--dsw-font-xxs-12);
}

:where(.kanban-button--size-lg) {
  height: 40px;
  padding: 0 18px;
  border-radius: 20px;
}

:where(.kanban-button--size-icon) {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 8px;
}

.kanban-button--default {
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}

.kanban-button--default:hover:not(:disabled) {
  background: var(--dsw-alias-button-primary-hover);
}

.kanban-button--destructive {
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-static-neutral-00);
}

.kanban-button--destructive:hover:not(:disabled) {
  background: var(--dsw-alias-state-error-secondary);
}

.kanban-button--outline {
  border: 0.5px solid var(--dsw-alias-border-l3);
}

.kanban-button--secondary {
  background: var(--dsw-alias-button-tool-bar-fill);
}

.kanban-button--secondary:hover:not(:disabled) {
  background: var(--dsw-alias-button-tool-bar-hover);
}

.kanban-button--outline:hover:not(:disabled),
.kanban-button--ghost:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-button--ghost:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active);
}

.kanban-button--link {
  color: var(--dsw-alias-brand-primary);
  text-underline-offset: 4px;
}

.kanban-button--link:hover:not(:disabled) {
  text-decoration: underline;
}

.kanban-icon {
  width: 16px;
  height: 16px;
}

.kanban-icon-button {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 0;
}

.kanban-danger-button {
  color: var(--dsw-alias-state-error-primary);
}

/* Base styles must not override the card's compact business variant. */
:where(.kanban-card-content) {
  padding: 24px;
}

.kanban-card-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
}

.kanban-ui-card-title {
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
}

.kanban-card-description {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-s-14);
}

.kanban-card-footer {
  display: flex;
  align-items: center;
  padding: 24px 24px 0;
}

:where(.kanban-badge) {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  border-radius: 6px;
  padding: 2px 8px;
  font: var(--dsw-font-xxs-12);
}

.kanban-badge--default {
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary-foreground);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-badge--secondary {
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}

.kanban-badge--destructive {
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-label-primary-foreground);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-badge--outline {
  color: var(--dsw-alias-label-primary);
}

.kanban-input,
.kanban-textarea {
  width: 100%;
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l4);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
}

.kanban-input {
  height: 32px;
  padding: 0 8px;
}

.kanban-textarea {
  min-height: 60px;
  padding: 8px;
  resize: vertical;
}

.kanban-input::placeholder,
.kanban-textarea::placeholder {
  color: var(--dsw-alias-label-dimmed);
}

.kanban-input:focus,
.kanban-textarea:focus {
  border-color: var(--dsw-alias-state-business-primary);
  outline: none;
  box-shadow: none;
}

.kanban-input:disabled,
.kanban-textarea:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

:where(.kanban-label) {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
}

.kanban-separator {
  flex-shrink: 0;
  background: var(--dsw-alias-border-l1);
}

.kanban-separator--horizontal {
  width: 100%;
  height: 1px;
}

.kanban-separator--vertical {
  width: 1px;
  height: 100%;
}

/* Radix portals */
.kanban-dialog-overlay {
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: var(--dsw-alias-bg-mask-1);
  backdrop-filter: var(--dsw-mask-blur);
}

.kanban-dialog-overlay[data-state="open"] {
  animation: kanban-fade-in 150ms ease-out;
}

.kanban-dialog-overlay[data-state="closed"] {
  animation: kanban-fade-out 150ms ease-in;
}

.kanban-dialog-content {
  box-sizing: border-box;
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  display: grid;
  width: calc(100% - 32px);
  max-width: 512px;
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  gap: 20px;
  border: 0;
  border-radius: 24px;
  padding: 24px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  box-shadow: var(--dsw-elevation-prominent);
  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);
  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);
  transform: translate(-50%, -50%);
}

.kanban-dialog-wide {
  max-width: 576px;
}

.kanban-dialog-medium {
  max-width: 448px;
}

.kanban-dialog-content[data-state="open"] {
  animation: kanban-fade-in 150ms ease-out, kanban-dialog-in 150ms ease-out;
}

.kanban-dialog-content[data-state="closed"] {
  animation: kanban-fade-out 150ms ease-in, kanban-dialog-out 150ms ease-in;
}

.kanban-dialog-close {
  position: absolute;
  top: 18px;
  right: 14px;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font: inherit;
  cursor: pointer;
}

.kanban-dialog-close:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
  opacity: 1;
}

.kanban-dialog-close-icon {
  width: 16px;
  height: 16px;
}

.kanban-dialog-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 28px;
  text-align: left;
}

.kanban-dialog-footer {
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  justify-content: flex-end;
}

.kanban-dialog-title {
  margin: 0;
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.kanban-dialog-description {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-s-14);
}

.kanban-dialog-delete {
  margin-right: auto;
}

.kanban-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.kanban-dropdown-content {
  z-index: 1100;
  min-width: 128px;
  max-width: calc(100vw - 16px);
  max-height: var(--radix-dropdown-menu-content-available-height);
  overflow-y: auto;
  border: 0;
  border-radius: 20px;
  padding: 4px;
  background: var(--dsw-specific-menu);
  color: var(--dsw-alias-label-primary);
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l1);
  box-shadow: var(--dsw-elevation-prominent);
  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);
  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);
}

.kanban-dropdown-content[data-state="open"] {
  animation: kanban-fade-in 120ms ease-out, kanban-scale-in 120ms ease-out;
}

.kanban-dropdown-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  border-radius: 10px;
  padding: 5px 10px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: pointer;
  user-select: none;
  outline: none;
}

.kanban-dropdown-item--inset {
  padding-left: 32px;
}

.kanban-dropdown-item:hover,
.kanban-dropdown-item[data-highlighted] {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-dropdown-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.kanban-dropdown-item svg {
  width: 16px;
  height: 16px;
}

.kanban-dropdown-label {
  padding: 6px 8px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-strong-14);
}

.kanban-dropdown-label--inset {
  padding-left: 32px;
}

.kanban-dropdown-separator {
  height: 1px;
  margin: 4px -4px;
  background: var(--dsw-alias-border-l1);
}

.kanban-select-trigger {
  display: flex;
  width: 100%;
  min-width: 0;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  white-space: nowrap;
  border: 1px solid var(--dsw-alias-border-l4);
  border-radius: 8px;
  padding: 0 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: pointer;
}

.kanban-select-trigger:focus-visible {
  border-color: var(--dsw-alias-state-business-primary);
  outline: none;
  box-shadow: none;
}

.kanban-select-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.kanban-select-trigger > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kanban-select-icon,
.kanban-select-scroll-icon,
.kanban-select-check {
  width: 16px;
  height: 16px;
}

.kanban-select-scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
}

.kanban-select-content {
  position: relative;
  z-index: 1100;
  max-height: min(384px, var(--radix-select-content-available-height, 384px));
  min-width: 128px;
  max-width: calc(100vw - 16px);
  overflow: hidden;
  border: 0;
  border-radius: 20px;
  background: var(--dsw-specific-menu);
  color: var(--dsw-alias-label-primary);
  --dsw-elevation-stroke-color: var(--dsw-alias-border-l1);
  box-shadow: var(--dsw-elevation-prominent);
  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);
  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);
}

.kanban-select-content--popper .kanban-select-viewport--popper {
  min-width: var(--radix-select-trigger-width);
}

.kanban-select-content[data-state="open"] {
  animation: kanban-fade-in 120ms ease-out, kanban-scale-in 120ms ease-out;
}

.kanban-select-viewport {
  padding: 4px;
}

.kanban-select-label {
  padding: 6px 8px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-strong-14);
}

.kanban-select-item {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 34px;
  align-items: center;
  border-radius: 10px;
  padding: 5px 32px 5px 10px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: pointer;
  user-select: none;
  outline: none;
}

.kanban-select-item:hover,
.kanban-select-item[data-highlighted] {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-select-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.kanban-select-item-indicator {
  position: absolute;
  right: 8px;
  display: flex;
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
}

.kanban-select-separator {
  height: 1px;
  margin: 4px -4px;
  background: var(--dsw-alias-border-l1);
}

.kanban-tooltip-content {
  z-index: 1200;
  overflow: hidden;
  border-radius: 6px;
  padding: 6px 12px;
  background: var(--dsw-specific-tip);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xxs-12);
}

.kanban-tooltip-content[data-state="open"] {
  animation: kanban-fade-in 120ms ease-out, kanban-scale-in 120ms ease-out;
}

/* Dialog controls and drag handles */
.kanban-sortable-row,
.kanban-label-row,
.kanban-label-add-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.kanban-sortable-list,
.kanban-label-list {
  display: flex;
  max-height: 60vh;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding: 8px 0;
}

.kanban-drag-handle {
  flex-shrink: 0;
  padding: 4px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  cursor: grab;
  touch-action: none;
}

.kanban-drag-handle:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.kanban-label-add-row {
  flex: 1;
}

.kanban-color-input {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 6px;
  padding: 2px;
  background: transparent;
}

.kanban-dialog-footer-layout {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kanban-animate-spin {
  animation: kanban-spin 1s linear infinite;
}

@keyframes kanban-spin {
  to { transform: rotate(360deg); }
}

@keyframes kanban-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes kanban-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes kanban-scale-in {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}

@keyframes kanban-dialog-in {
  from { transform: translate(-50%, -50%) scale(0.95); }
  to { transform: translate(-50%, -50%) scale(1); }
}

@keyframes kanban-dialog-out {
  from { transform: translate(-50%, -50%) scale(1); }
  to { transform: translate(-50%, -50%) scale(0.95); }
}

@media (min-width: 640px) {
  .kanban-dialog-header {
    text-align: left;
  }

  .kanban-dialog-footer {
    flex-direction: row;
  }

  .kanban-dialog-footer-layout {
    flex-direction: row;
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .kanban-root,
  .kanban-root *,
  .kanban-portal,
  .kanban-portal * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0s !important;
  }
}
`;var Js=require("react");var ue=require("react");var y=V(require("react")),wa=require("react-dom");var we=require("react");function di(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,we.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Vo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Tr(e){return"nodeType"in e}function Xe(e){var t,a;return e?xa(e)?e:Tr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Er(e){let{Document:t}=Xe(e);return e instanceof t}function ro(e){return xa(e)?!1:e instanceof Xe(e).HTMLElement}function Yn(e){return e instanceof Xe(e).SVGElement}function La(e){return e?xa(e)?e.document:Tr(e)?Er(e)?e:ro(e)||Yn(e)?e.ownerDocument:document:document:document}var it=Vo?we.useLayoutEffect:we.useEffect;function Wo(e){let t=(0,we.useRef)(e);return it(()=>{t.current=e}),(0,we.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ci(){let e=(0,we.useRef)(null),t=(0,we.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,we.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function no(e,t){t===void 0&&(t=[e]);let a=(0,we.useRef)(e);return it(()=>{a.current!==e&&(a.current=e)},t),a}function lo(e,t){let a=(0,we.useRef)();return(0,we.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Go(e){let t=Wo(e),a=(0,we.useRef)(null),o=(0,we.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function zo(e){let t=(0,we.useRef)();return(0,we.useEffect)(()=>{t.current=e},[e]),t.current}var $n={};function Ca(e,t){return(0,we.useMemo)(()=>{if(t)return t;let a=$n[e]==null?0:$n[e]+1;return $n[e]=a,e+"-"+a},[e,t])}function fi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var Ia=fi(1),va=fi(-1);function $p(e){return"clientX"in e&&"clientY"in e}function so(e){if(!e)return!1;let{KeyboardEvent:t}=Xe(e.target);return t&&e instanceof t}function Yp(e){if(!e)return!1;let{TouchEvent:t}=Xe(e.target);return t&&e instanceof t}function Ko(e){if(Yp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return $p(e)?{x:e.clientX,y:e.clientY}:null}var st=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[st.Translate.toString(e),st.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ui="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pi(e){return e.matches(ui)?e:e.querySelector(ui)}var ba=V(require("react")),Zp={display:"none"};function mi(e){let{id:t,value:a}=e;return ba.default.createElement("div",{id:t,style:Zp},a)}function hi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ba.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function gi(){let[e,t]=(0,ba.useState)("");return{announce:(0,ba.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Di=(0,y.createContext)(null);function Qp(e){let t=(0,y.useContext)(Di);(0,y.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Jp(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,y.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var em={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},tm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function am(e){let{announcements:t=tm,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=em}=e,{announce:n,announcement:l}=gi(),s=Ca("DndLiveRegion"),[i,u]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{u(!0)},[]),Qp((0,y.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=y.default.createElement(y.default.Fragment,null,y.default.createElement(mi,{id:o,value:r.draggable}),y.default.createElement(hi,{id:s,announcement:l}));return a?(0,wa.createPortal)(c,a):c}var Te;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Te||(Te={}));function Fr(){}function io(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Nr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,y.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var bt=Object.freeze({x:0,y:0});function ll(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function om(e,t){let a=Ko(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function sl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function rm(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function el(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Zo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function xi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Mi=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=xi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=ll(xi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(sl)},_r=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=el(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=el(i),c=r.reduce((f,h,g)=>f+ll(u[g],h),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(sl)};function nm(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var il=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=nm(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(rm)};function lm(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Ai=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&lm(o,s)){let u=el(s).reduce((d,f)=>d+ll(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(sl)};function sm(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ti(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:bt}function im(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var um=im(1);function Ei(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function dm(e,t,a){let o=Ei(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var cm={ignoreTransform:!1};function Ra(e,t){t===void 0&&(t=cm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Xe(e).getComputedStyle(e);u&&(a=dm(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function Li(e){return Ra(e,{ignoreTransform:!0})}function fm(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function pm(e,t){return t===void 0&&(t=Xe(e).getComputedStyle(e)),t.position==="fixed"}function mm(e,t){t===void 0&&(t=Xe(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Qo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Er(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!ro(r)||Yn(r)||a.includes(r))return a;let n=Xe(e).getComputedStyle(r);return r!==e&&mm(r,n)&&a.push(r),pm(r,n)?a:o(r.parentNode)}return e?o(e):a}function Oi(e){let[t]=Qo(e,1);return t??null}function Zn(e){return!Vo||!e?null:xa(e)?e:Tr(e)?Er(e)||e===La(e).scrollingElement?window:ro(e)?e:null:null}function Fi(e){return xa(e)?e.scrollX:e.scrollLeft}function Bi(e){return xa(e)?e.scrollY:e.scrollTop}function tl(e){return{x:Fi(e),y:Bi(e)}}var Oe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Oe||(Oe={}));function Ni(e){return!Vo||!e?!1:e===document.scrollingElement}function _i(e){let t={x:0,y:0},a=Ni(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var hm={x:.2,y:.2};function gm(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=hm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=_i(e),h={x:0,y:0},g={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(h.y=Oe.Backward,g.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(h.y=Oe.Forward,g.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(h.x=Oe.Forward,g.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(h.x=Oe.Backward,g.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:h,speed:g}}function xm(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Hi(e){return e.reduce((t,a)=>Ia(t,tl(a)),bt)}function Lm(e){return e.reduce((t,a)=>t+Fi(a),0)}function Cm(e){return e.reduce((t,a)=>t+Bi(a),0)}function qi(e,t){if(t===void 0&&(t=Ra),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Oi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Im=[["x",["left","right"],Lm],["y",["top","bottom"],Cm]],jo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Qo(a),r=Hi(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Im)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Sa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function vm(e){let{EventTarget:t}=Xe(e);return e instanceof t?e:La(e)}function Qn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var mt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(mt||(mt={}));function Ci(e){e.preventDefault()}function bm(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var Ui={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},wm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},na=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Sa(La(a)),this.windowListeners=new Sa(Xe(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(mt.Resize,this.handleCancel),this.windowListeners.add(mt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(mt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&qi(o),a(bt)}handleKeyDown(t){if(so(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Ui,coordinateGetter:l=wm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:bt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=va(d,c),h={x:0,y:0},{scrollableAncestors:g}=o.current;for(let m of g){let p=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:I,maxScroll:b,minScroll:w}=_i(m),v=xm(m),R={x:Math.min(p===re.Right?v.right-v.width/2:v.right,Math.max(p===re.Right?v.left:v.left+v.width/2,d.x)),y:Math.min(p===re.Down?v.bottom-v.height/2:v.bottom,Math.max(p===re.Down?v.top:v.top+v.height/2,d.y))},P=p===re.Right&&!C||p===re.Left&&!L,E=p===re.Down&&!I||p===re.Up&&!x;if(P&&R.x!==d.x){let D=m.scrollLeft+f.x,A=p===re.Right&&D<=b.x||p===re.Left&&D>=w.x;if(A&&!f.y){m.scrollTo({left:D,behavior:s});return}A?h.x=m.scrollLeft-D:h.x=p===re.Right?m.scrollLeft-b.x:m.scrollLeft-w.x,h.x&&m.scrollBy({left:-h.x,behavior:s});break}else if(E&&R.y!==d.y){let D=m.scrollTop+f.y,A=p===re.Down&&D<=b.y||p===re.Up&&D>=w.y;if(A&&!f.x){m.scrollTo({top:D,behavior:s});return}A?h.y=m.scrollTop-D:h.y=p===re.Down?m.scrollTop-b.y:m.scrollTop-w.y,h.y&&m.scrollBy({top:-h.y,behavior:s});break}}this.handleMove(t,Ia(va(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};na.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Ui,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Ii(e){return!!(e&&"distance"in e)}function vi(e){return!!(e&&"delay"in e)}var $o=class{constructor(t,a,o){var r;o===void 0&&(o=vm(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=La(l),this.documentListeners=new Sa(this.document),this.listeners=new Sa(o),this.windowListeners=new Sa(Xe(l)),this.initialCoordinates=(r=Ko(n))!=null?r:bt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(mt.Resize,this.handleCancel),this.windowListeners.add(mt.DragStart,Ci),this.windowListeners.add(mt.VisibilityChange,this.handleCancel),this.windowListeners.add(mt.ContextMenu,Ci),this.documentListeners.add(mt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(vi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Ii(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(mt.Click,bm,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(mt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Ko(t))!=null?a:bt,u=va(r,i);if(!o&&s){if(Ii(s)){if(s.tolerance!=null&&Qn(u,s.tolerance))return this.handleCancel();if(Qn(u,s.distance))return this.handleStart()}if(vi(s)&&Qn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Sm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},la=class extends $o{constructor(t){let{event:a}=t,o=La(a.target);super(t,Sm,o)}};la.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var ym={move:{name:"mousemove"},end:{name:"mouseup"}},al;(function(e){e[e.RightClick=2]="RightClick"})(al||(al={}));var ol=class extends $o{constructor(t){super(t,ym,La(t.event.target))}};ol.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===al.RightClick?!1:(o?.({event:a}),!0)}}];var Jn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},rl=class extends $o{constructor(t){super(t,Jn)}static setup(){return window.addEventListener(Jn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Jn.move.name,t)};function t(){}}};rl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Xo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Xo||(Xo={}));var Br;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Br||(Br={}));function Rm(e){let{acceleration:t,activator:a=Xo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Br.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=km({delta:d,disabled:!n}),[g,m]=ci(),p=(0,y.useRef)({x:0,y:0}),x=(0,y.useRef)({x:0,y:0}),C=(0,y.useMemo)(()=>{switch(a){case Xo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Xo.DraggableRect:return r}},[a,r,i]),L=(0,y.useRef)(null),I=(0,y.useCallback)(()=>{let w=L.current;if(!w)return;let v=p.current.x*x.current.x,R=p.current.y*x.current.y;w.scrollBy(v,R)},[]),b=(0,y.useMemo)(()=>s===Br.TreeOrder?[...u].reverse():u,[s,u]);(0,y.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let w of b){if(o?.(w)===!1)continue;let v=u.indexOf(w),R=c[v];if(!R)continue;let{direction:P,speed:E}=gm(w,R,C,t,f);for(let D of["x","y"])h[D][P[D]]||(E[D]=0,P[D]=0);if(E.x>0||E.y>0){m(),L.current=w,g(I,l),p.current=E,x.current=P;return}}p.current={x:0,y:0},x.current={x:0,y:0},m()},[t,I,o,m,n,l,JSON.stringify(C),JSON.stringify(h),g,u,b,c,JSON.stringify(f)])}var Pm={x:{[Oe.Backward]:!1,[Oe.Forward]:!1},y:{[Oe.Backward]:!1,[Oe.Forward]:!1}};function km(e){let{delta:t,disabled:a}=e,o=zo(t);return lo(r=>{if(a||!o||!r)return Pm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Oe.Backward]:r.x[Oe.Backward]||n.x===-1,[Oe.Forward]:r.x[Oe.Forward]||n.x===1},y:{[Oe.Backward]:r.y[Oe.Backward]||n.y===-1,[Oe.Forward]:r.y[Oe.Forward]||n.y===1}}},[a,t,o])}function Dm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return lo(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Mm(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Yo;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Yo||(Yo={}));var nl;(function(e){e.Optimized="optimized"})(nl||(nl={}));var bi=new Map;function Am(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,y.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,y.useRef)(e),d=p(),f=no(d),h=(0,y.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),g=(0,y.useRef)(null),m=lo(x=>{if(d&&!a)return bi;if(!x||x===bi||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let I=L.node.current,b=I?new jo(i(I),I):null;L.rect.current=b,b&&C.set(L.id,b)}return C}return x},[e,n,a,d,i]);return(0,y.useEffect)(()=>{c.current=e},[e]),(0,y.useEffect)(()=>{d||h()},[a,d]),(0,y.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,y.useEffect)(()=>{d||typeof s!="number"||g.current!==null||(g.current=setTimeout(()=>{h(),g.current=null},s))},[s,d,h,...o]),{droppableRects:m,measureDroppableContainers:h,measuringScheduled:n!=null};function p(){switch(u){case Yo.Always:return!1;case Yo.BeforeDragging:return a;default:return!a}}}function ul(e,t){return lo(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Tm(e,t){return ul(e,t)}function Em(e){let{callback:t,disabled:a}=e,o=Wo(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Hr(e){let{callback:t,disabled:a}=e,o=Wo(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Om(e){return new jo(Ra(e),e)}function wi(e,t,a){t===void 0&&(t=Om);let[o,r]=(0,y.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=Em({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Hr({callback:n});return it(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Fm(e){let t=ul(e);return Ti(e,t)}var Si=[];function Bm(e){let t=(0,y.useRef)(e),a=lo(o=>e?o&&o!==Si&&e&&t.current&&e.parentNode===t.current.parentNode?o:Qo(e):Si,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),a}function Nm(e){let[t,a]=(0,y.useState)(null),o=(0,y.useRef)(e),r=(0,y.useCallback)(n=>{let l=Zn(n.target);l&&a(s=>s?(s.set(l,tl(l)),new Map(s)):null)},[]);return(0,y.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Zn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,tl(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Zn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>Ia(n,l),bt):Hi(e):bt,[e,t])}function yi(e,t){t===void 0&&(t=[]);let a=(0,y.useRef)(null);return(0,y.useEffect)(()=>{a.current=null},t),(0,y.useEffect)(()=>{let o=e!==bt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?va(e,a.current):bt}function _m(e){(0,y.useEffect)(()=>{if(!Vo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Hm(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Vi(e){return(0,y.useMemo)(()=>e?fm(e):null,[e])}var Ri=[];function qm(e,t){t===void 0&&(t=Ra);let[a]=e,o=Vi(a?Xe(a):null),[r,n]=(0,y.useState)(Ri);function l(){n(()=>e.length?e.map(i=>Ni(i)?o:new jo(t(i),i)):Ri)}let s=Hr({callback:l});return it(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Wi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return ro(t)?t:e}function Um(e){let{measure:t}=e,[a,o]=(0,y.useState)(null),r=(0,y.useCallback)(u=>{for(let{target:c}of u)if(ro(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Hr({callback:r}),l=(0,y.useCallback)(u=>{let c=Wi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Go(l);return(0,y.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var Vm=[{sensor:la,options:{}},{sensor:na,options:{}}],Wm={current:{}},Or={draggable:{measure:Li},droppable:{measure:Li,strategy:Yo.WhileDragging,frequency:nl.Optimized},dragOverlay:{measure:Ra}},ya=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Gm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ya,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Fr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Or,measureDroppableContainers:Fr,windowRect:null,measuringScheduled:!1},Gi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Fr,draggableNodes:new Map,over:null,measureDroppableContainers:Fr},Jo=(0,y.createContext)(Gi),zi=(0,y.createContext)(Gm);function zm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ya}}}function Km(e,t){switch(t.type){case Te.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Te.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Te.DragEnd:case Te.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Te.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ya(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Te.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new ya(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Te.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ya(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Xm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,y.useContext)(Jo),n=zo(o),l=zo(a?.id);return(0,y.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!so(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=pi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Ki(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function jm(e){return(0,y.useMemo)(()=>({draggable:{...Or.draggable,...e?.draggable},droppable:{...Or.droppable,...e?.droppable},dragOverlay:{...Or.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function $m(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,y.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;it(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ti(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Oi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var qr=(0,y.createContext)({...bt,scaleX:1,scaleY:1}),ra;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ra||(ra={}));var Ur=(0,y.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=Vm,collisionDetection:d=il,measuring:f,modifiers:h,...g}=t,m=(0,y.useReducer)(Km,void 0,zm),[p,x]=m,[C,L]=Jp(),[I,b]=(0,y.useState)(ra.Uninitialized),w=I===ra.Initialized,{draggable:{active:v,nodes:R,translate:P},droppable:{containers:E}}=p,D=v!=null?R.get(v):null,A=(0,y.useRef)({initial:null,translated:null}),N=(0,y.useMemo)(()=>{var ze;return v!=null?{id:v,data:(ze=D?.data)!=null?ze:Wm,rect:A}:null},[v,D]),q=(0,y.useRef)(null),[Y,$]=(0,y.useState)(null),[_,z]=(0,y.useState)(null),K=no(g,Object.values(g)),T=Ca("DndDescribedBy",l),Le=(0,y.useMemo)(()=>E.getEnabled(),[E]),X=jm(f),{droppableRects:Q,measureDroppableContainers:Ce,measuringScheduled:Pe}=Am(Le,{dragging:w,dependencies:[P.x,P.y],config:X.droppable}),de=Dm(R,v),ke=(0,y.useMemo)(()=>_?Ko(_):null,[_]),F=qp(),ee=Tm(de,X.draggable.measure);$m({activeNode:v!=null?R.get(v):null,config:F.layoutShiftCompensation,initialRect:ee,measure:X.draggable.measure});let j=wi(de,X.draggable.measure,ee),le=wi(de?de.parentElement:null),oe=(0,y.useRef)({activatorEvent:null,active:null,activeNode:de,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),S=E.getNodeFor((a=oe.current.over)==null?void 0:a.id),k=Um({measure:X.dragOverlay.measure}),O=(o=k.nodeRef.current)!=null?o:de,U=w?(r=k.rect)!=null?r:j:null,ve=!!(k.nodeRef.current&&k.rect),ie=Fm(ve?null:j),xe=Vi(O?Xe(O):null),Ie=Bm(w?S??de:null),ot=qm(Ie),Qe=Ki(h,{transform:{x:P.x-ie.x,y:P.y-ie.y,scaleX:1,scaleY:1},activatorEvent:_,active:N,activeNodeRect:j,containerNodeRect:le,draggingNodeRect:U,over:oe.current.over,overlayNodeRect:k.rect,scrollableAncestors:Ie,scrollableAncestorRects:ot,windowRect:xe}),zn=ke?Ia(ke,P):null,Wt=Nm(Ie),Mr=yi(Wt),Op=yi(Wt,[j]),to=Ia(Qe,Mr),ao=U?um(U,Qe):null,_o=N&&ao?d({active:N,collisionRect:ao,droppableRects:Q,droppableContainers:Le,pointerCoordinates:zn}):null,ei=Zo(_o,"id"),[ea,ti]=(0,y.useState)(null),Fp=ve?Qe:Ia(Qe,Op),Bp=sm(Fp,(n=ea?.rect)!=null?n:null,j),Kn=(0,y.useRef)(null),ai=(0,y.useCallback)((ze,rt)=>{let{sensor:nt,options:ta}=rt;if(q.current==null)return;let pt=R.get(q.current);if(!pt)return;let lt=ze.nativeEvent,Ot=new nt({active:q.current,activeNode:pt,event:lt,options:ta,context:oe,onAbort(qe){if(!R.get(qe))return;let{onDragAbort:Ft}=K.current,Gt={id:qe};Ft?.(Gt),C({type:"onDragAbort",event:Gt})},onPending(qe,aa,Ft,Gt){if(!R.get(qe))return;let{onDragPending:qo}=K.current,oa={id:qe,constraint:aa,initialCoordinates:Ft,offset:Gt};qo?.(oa),C({type:"onDragPending",event:oa})},onStart(qe){let aa=q.current;if(aa==null)return;let Ft=R.get(aa);if(!Ft)return;let{onDragStart:Gt}=K.current,Ho={activatorEvent:lt,active:{id:aa,data:Ft.data,rect:A}};(0,wa.unstable_batchedUpdates)(()=>{Gt?.(Ho),b(ra.Initializing),x({type:Te.DragStart,initialCoordinates:qe,active:aa}),C({type:"onDragStart",event:Ho}),$(Kn.current),z(lt)})},onMove(qe){x({type:Te.DragMove,coordinates:qe})},onEnd:oo(Te.DragEnd),onCancel:oo(Te.DragCancel)});Kn.current=Ot;function oo(qe){return async function(){let{active:Ft,collisions:Gt,over:Ho,scrollAdjustedTranslate:qo}=oe.current,oa=null;if(Ft&&qo){let{cancelDrop:Uo}=K.current;oa={activatorEvent:lt,active:Ft,collisions:Gt,delta:qo,over:Ho},qe===Te.DragEnd&&typeof Uo=="function"&&await Promise.resolve(Uo(oa))&&(qe=Te.DragCancel)}q.current=null,(0,wa.unstable_batchedUpdates)(()=>{x({type:qe}),b(ra.Uninitialized),ti(null),$(null),z(null),Kn.current=null;let Uo=qe===Te.DragEnd?"onDragEnd":"onDragCancel";if(oa){let Xn=K.current[Uo];Xn?.(oa),C({type:Uo,event:oa})}})}}},[R]),Np=(0,y.useCallback)((ze,rt)=>(nt,ta)=>{let pt=nt.nativeEvent,lt=R.get(ta);if(q.current!==null||!lt||pt.dndKit||pt.defaultPrevented)return;let Ot={active:lt};ze(nt,rt.options,Ot)===!0&&(pt.dndKit={capturedBy:rt.sensor},q.current=ta,ai(nt,rt))},[R,ai]),oi=Mm(c,Np);_m(c),it(()=>{j&&I===ra.Initializing&&b(ra.Initialized)},[j,I]),(0,y.useEffect)(()=>{let{onDragMove:ze}=K.current,{active:rt,activatorEvent:nt,collisions:ta,over:pt}=oe.current;if(!rt||!nt)return;let lt={active:rt,activatorEvent:nt,collisions:ta,delta:{x:to.x,y:to.y},over:pt};(0,wa.unstable_batchedUpdates)(()=>{ze?.(lt),C({type:"onDragMove",event:lt})})},[to.x,to.y]),(0,y.useEffect)(()=>{let{active:ze,activatorEvent:rt,collisions:nt,droppableContainers:ta,scrollAdjustedTranslate:pt}=oe.current;if(!ze||q.current==null||!rt||!pt)return;let{onDragOver:lt}=K.current,Ot=ta.get(ei),oo=Ot&&Ot.rect.current?{id:Ot.id,rect:Ot.rect.current,data:Ot.data,disabled:Ot.disabled}:null,qe={active:ze,activatorEvent:rt,collisions:nt,delta:{x:pt.x,y:pt.y},over:oo};(0,wa.unstable_batchedUpdates)(()=>{ti(oo),lt?.(qe),C({type:"onDragOver",event:qe})})},[ei]),it(()=>{oe.current={activatorEvent:_,active:N,activeNode:de,collisionRect:ao,collisions:_o,droppableRects:Q,draggableNodes:R,draggingNode:O,draggingNodeRect:U,droppableContainers:E,over:ea,scrollableAncestors:Ie,scrollAdjustedTranslate:to},A.current={initial:U,translated:ao}},[N,de,_o,ao,R,O,U,Q,E,ea,Ie,to]),Rm({...F,delta:P,draggingRect:ao,pointerCoordinates:zn,scrollableAncestors:Ie,scrollableAncestorRects:ot});let _p=(0,y.useMemo)(()=>({active:N,activeNode:de,activeNodeRect:j,activatorEvent:_,collisions:_o,containerNodeRect:le,dragOverlay:k,draggableNodes:R,droppableContainers:E,droppableRects:Q,over:ea,measureDroppableContainers:Ce,scrollableAncestors:Ie,scrollableAncestorRects:ot,measuringConfiguration:X,measuringScheduled:Pe,windowRect:xe}),[N,de,j,_,_o,le,k,R,E,Q,ea,Ce,Ie,ot,X,Pe,xe]),Hp=(0,y.useMemo)(()=>({activatorEvent:_,activators:oi,active:N,activeNodeRect:j,ariaDescribedById:{draggable:T},dispatch:x,draggableNodes:R,over:ea,measureDroppableContainers:Ce}),[_,oi,N,j,x,T,R,ea,Ce]);return y.default.createElement(Di.Provider,{value:L},y.default.createElement(Jo.Provider,{value:Hp},y.default.createElement(zi.Provider,{value:_p},y.default.createElement(qr.Provider,{value:Bp},u)),y.default.createElement(Xm,{disabled:s?.restoreFocus===!1})),y.default.createElement(am,{...s,hiddenTextDescribedById:T}));function qp(){let ze=Y?.autoScrollEnabled===!1,rt=typeof i=="object"?i.enabled===!1:i===!1,nt=w&&!ze&&!rt;return typeof i=="object"?{...i,enabled:nt}:{enabled:nt}}}),Ym=(0,y.createContext)(null),Pi="button",Zm="Draggable";function Xi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Ca(Zm),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,y.useContext)(Jo),{role:h=Pi,roleDescription:g="draggable",tabIndex:m=0}=r??{},p=i?.id===t,x=(0,y.useContext)(p?qr:Ym),[C,L]=Go(),[I,b]=Go(),w=Hm(l,t),v=no(a);it(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:I,data:v}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,y.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":o,"aria-pressed":p&&h===Pi?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,h,m,p,g,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:p,listeners:o?void 0:w,node:C,over:f,setNodeRef:L,setActivatorNodeRef:b,transform:x}}function er(){return(0,y.useContext)(zi)}var Qm="Droppable",Jm={timeout:25};function Vr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Ca(Qm),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,y.useContext)(Jo),c=(0,y.useRef)({disabled:a}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),h=(0,y.useRef)(null),{disabled:g,updateMeasurementsFor:m,timeout:p}={...Jm,...r},x=no(m??o),C=(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),h.current=null},p)},[p]),L=Hr({callback:C,disabled:g||!l}),I=(0,y.useCallback)((R,P)=>{L&&(P&&(L.unobserve(P),d.current=!1),R&&L.observe(R))},[L]),[b,w]=Go(I),v=no(t);return(0,y.useEffect)(()=>{!L||!b.current||(L.disconnect(),d.current=!1,L.observe(b.current))},[b,L]),(0,y.useEffect)(()=>(s({type:Te.RegisterDroppable,element:{id:o,key:n,disabled:a,node:b,rect:f,data:v}}),()=>s({type:Te.UnregisterDroppable,key:n,id:o})),[o]),(0,y.useEffect)(()=>{a!==c.current.disabled&&(s({type:Te.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:b,over:i,setNodeRef:w}}function eh(e){let{animation:t,children:a}=e,[o,r]=(0,y.useState)(null),[n,l]=(0,y.useState)(null),s=zo(a);return!a&&!o&&s&&r(s),it(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),y.default.createElement(y.default.Fragment,null,a,o?(0,y.cloneElement)(o,{ref:l}):null)}var th={x:0,y:0,scaleX:1,scaleY:1};function ah(e){let{children:t}=e;return y.default.createElement(Jo.Provider,{value:Gi},y.default.createElement(qr.Provider,{value:th},t))}var oh={position:"fixed",touchAction:"none"},rh=e=>so(e)?"transform 250ms ease":void 0,nh=(0,y.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=rh}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...oh,width:s.width,height:s.height,top:s.top,left:s.left,transform:st.Transform.toString(d),transformOrigin:r&&o?om(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return y.default.createElement(a,{className:l,style:f,ref:t},n)}),lh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},sh=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:st.Transform.toString(t)},{transform:st.Transform.toString(a)}]},ih={duration:250,easing:"ease",keyframes:sh,sideEffects:lh({styles:{active:{opacity:"0"}}})};function uh(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Wo((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Wi(l);if(!u)return;let{transform:c}=Xe(l).getComputedStyle(l),d=Ei(c);if(!d)return;let f=typeof t=="function"?t:dh(t);return qi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function dh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...ih,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[g]=h,m=h[h.length-1];if(JSON.stringify(g)===JSON.stringify(m))return;let p=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{p?.(),C()}})}}var ki=0;function ch(e){return(0,y.useMemo)(()=>{if(e!=null)return ki++,ki},[e])}var ji=y.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:p,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:I,windowRect:b}=er(),w=(0,y.useContext)(qr),v=ch(d?.id),R=Ki(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:p.rect,over:x,overlayNodeRect:p.rect,scrollableAncestors:L,scrollableAncestorRects:I,transform:w,windowRect:b}),P=ul(f),E=uh({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:C}),D=P?p.setRef:void 0;return y.default.createElement(ah,null,y.default.createElement(eh,{animation:E},d&&v?y.default.createElement(nh,{key:v,id:d.id,ref:D,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var Se=V(require("react"));function $i(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function fh(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Wr(e){return e!==null&&e>=0}function ph(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function mh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Yi=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=$i(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Gr={scaleX:1,scaleY:1},Kr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Gr}:null}let i=hh(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Gr}:r<a&&r>=l?{x:0,y:s.height+i,...Gr}:{x:0,y:0,...Gr}};function hh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Zi="Sortable",Qi=Se.default.createContext({activeIndex:-1,containerId:Zi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Yi,disabled:{draggable:!1,droppable:!1}});function Xr(e){let{children:t,id:a,items:o,strategy:r=Yi,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=er(),d=Ca(Zi,a),f=s.rect!==null,h=(0,Se.useMemo)(()=>o.map(w=>typeof w=="object"&&"id"in w?w.id:w),[o]),g=l!=null,m=l?h.indexOf(l.id):-1,p=u?h.indexOf(u.id):-1,x=(0,Se.useRef)(h),C=!ph(h,x.current),L=p!==-1&&m===-1||C,I=mh(n);it(()=>{C&&g&&c(h)},[C,h,g,c]),(0,Se.useEffect)(()=>{x.current=h},[h]);let b=(0,Se.useMemo)(()=>({activeIndex:m,containerId:d,disabled:I,disableTransforms:L,items:h,overIndex:p,useDragOverlay:f,sortedRects:fh(h,i),strategy:r}),[m,d,I.draggable,I.droppable,L,h,p,i,f,r]);return Se.default.createElement(Qi.Provider,{value:b},t)}var gh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return $i(a,o,r).indexOf(t)},xh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Lh={duration:200,easing:"ease"},Ji="transform",Ch=st.Transition.toString({property:Ji,duration:0,easing:"linear"}),Ih={roleDescription:"sortable"};function vh(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Se.useState)(null),s=(0,Se.useRef)(a);return it(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Ra(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Se.useEffect)(()=>{n&&l(null)},[n]),n}function jr(e){let{animateLayoutChanges:t=xh,attributes:a,disabled:o,data:r,getNewIndex:n=gh,id:l,strategy:s,resizeObserverConfig:i,transition:u=Lh}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:g,sortedRects:m,overIndex:p,useDragOverlay:x,strategy:C}=(0,Se.useContext)(Qi),L=bh(o,h),I=c.indexOf(l),b=(0,Se.useMemo)(()=>({sortable:{containerId:d,index:I,items:c},...r}),[d,r,I,c]),w=(0,Se.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:v,node:R,isOver:P,setNodeRef:E}=Vr({id:l,data:b,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:w,...i}}),{active:D,activatorEvent:A,activeNodeRect:N,attributes:q,setNodeRef:Y,listeners:$,isDragging:_,over:z,setActivatorNodeRef:K,transform:T}=Xi({id:l,data:b,attributes:{...Ih,...a},disabled:L.draggable}),Le=di(E,Y),X=!!D,Q=X&&!g&&Wr(f)&&Wr(p),Ce=!x&&_,Pe=Ce&&Q?T:null,ke=Q?Pe??(s??C)({rects:m,activeNodeRect:N,activeIndex:f,overIndex:p,index:I}):null,F=Wr(f)&&Wr(p)?n({id:l,items:c,activeIndex:f,overIndex:p}):I,ee=D?.id,j=(0,Se.useRef)({activeId:ee,items:c,newIndex:F,containerId:d}),le=c!==j.current.items,oe=t({active:D,containerId:d,isDragging:_,isSorting:X,id:l,index:I,items:c,newIndex:j.current.newIndex,previousItems:j.current.items,previousContainerId:j.current.containerId,transition:u,wasDragging:j.current.activeId!=null}),S=vh({disabled:!oe,index:I,node:R,rect:v});return(0,Se.useEffect)(()=>{X&&j.current.newIndex!==F&&(j.current.newIndex=F),d!==j.current.containerId&&(j.current.containerId=d),c!==j.current.items&&(j.current.items=c)},[X,F,d,c]),(0,Se.useEffect)(()=>{if(ee===j.current.activeId)return;if(ee!=null&&j.current.activeId==null){j.current.activeId=ee;return}let O=setTimeout(()=>{j.current.activeId=ee},50);return()=>clearTimeout(O)},[ee]),{active:D,activeIndex:f,attributes:q,data:b,rect:v,index:I,newIndex:F,items:c,isOver:P,isSorting:X,isDragging:_,listeners:$,node:R,overIndex:p,over:z,setNodeRef:Le,setActivatorNodeRef:K,setDroppableNodeRef:E,setDraggableNodeRef:Y,transform:S??ke,transition:k()};function k(){if(S||le&&j.current.newIndex===I)return Ch;if(!(Ce&&!so(A)||!u)&&(X||oe))return st.Transition.toString({...u,property:Ji})}}function bh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function zr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var wh=[re.Down,re.Right,re.Up,re.Left],$r=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(wh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=_r({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Zo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,g=f?.node.current;if(g&&h&&d&&f){let p=Qo(g).some((w,v)=>s[v]!==w),x=eu(d,f),C=Sh(d,f),L=p||!x?{x:0,y:0}:{x:C?o.width-h.width:0,y:C?o.height-h.height:0},I={x:h.left,y:h.top};return L.x&&L.y?I:va(I,L)}}}};function eu(e,t){return!zr(e)||!zr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Sh(e,t){return!zr(e)||!zr(t)||!eu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Yr=require("react");var tu=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function au(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:tu(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var ou=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var ru=e=>{let t=ou(e);return t.charAt(0).toUpperCase()+t.slice(1)};var ar=require("react");var tr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var sa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function dl(e){return e!=null}function nu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??sa.width,n=e.size??e.height??sa.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?tr(...i):tr("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??sa["stroke-width"])*Number(e.size??e.width??sa.width)/Number(t.size??t.width??sa.width):t.strokeWidth??sa["stroke-width"];return["svg",{...Object.entries(sa).reduce((f,[h,g])=>(f[o(h)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&dl(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&dl(t.width)&&{[o("width")]:t.width},..."height"in t&&dl(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[h,g,m]=f,p=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return m?[h,p,m]:[h,p]})]}function lu(e,t={}){return nu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var su=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var uo=require("react");var yh=(0,uo.createContext)({});var iu=()=>(0,uo.useContext)(yh);var uu=(0,ar.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:h=24,strokeWidth:g=2,absoluteStrokeWidth:m=!1,nonScalingStroke:p=!1,color:x="currentColor",className:C=""}=iu()??{},L=!!i||su(d),[I,b,w=[]]=lu(c,{color:e??x,width:a??t??h,height:o??t??h,strokeWidth:r??g,absoluteStrokeWidth:n??m,nonScalingStroke:l??p,className:tr(C,s),hasA11yProp:L,attributes:d});return(0,ar.createElement)(I,{ref:f,...b},[...w.map(([v,R])=>(0,ar.createElement)(v,R)),...Array.isArray(i)?i:[i]])});function ce(e,t=[],a=[]){let o=typeof e=="string"?au(e,t,a):e,r=(0,Yr.forwardRef)(({className:n,...l},s)=>(0,Yr.createElement)(uu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=ru(o.name)),r}var du={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};du.node;var wt=ce(du);var cu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};cu.node;var co=ce(cu);var fu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};fu.node;var or=ce(fu);var pu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};pu.node;var ia=ce(pu);var mu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};mu.node;var rr=ce(mu);var hu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};hu.node;var nr=ce(hu);var gu={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};gu.node;var Pa=ce(gu);var xu={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};xu.node;var zt=ce(xu);var Lu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Lu.node;var lr=ce(Lu);var Cu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Cu.node;var sr=ce(Cu);var Iu={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};Iu.node;var ir=ce(Iu);var vu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};vu.node;var fo=ce(vu);var bu={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};bu.node;var ht=ce(bu);var wu={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};wu.node;var ur=ce(wu);var Et=require("react");var Ou=V(require("react"),1);var Ue=V(require("react"),1);var Su=V(require("react"),1),Rh=Object.defineProperty,fl=(e,t)=>Rh(e,"name",{value:t,configurable:!0});function cl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}fl(cl,"setRef");function yu(...e){return t=>{let a=!1,o=e.map(r=>{let n=cl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():cl(e[r],null)}}}}fl(yu,"composeRefs");function J(...e){return Su.useCallback(yu(...e),e)}fl(J,"useComposedRefs");var Ph=Object.defineProperty,St=(e,t)=>Ph(e,"name",{value:t,configurable:!0});function je(e){let t=Ue.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];pl(r)&&typeof Zr=="function"&&(r=Zr(r._payload)),Ue.Children.forEach(r,f=>{if(Mu(f)){s=!0;let h=f,g="child"in h.props?h.props.child:h.props.children;pl(g)&&typeof Zr=="function"&&(g=Zr(g._payload)),l=Dh(h,g),i.push(l?.props?.children)}else i.push(f)}),l?l=Ue.cloneElement(l,void 0,i):!s&&Ue.Children.count(r)===1&&Ue.isValidElement(r)&&(l=r);let u=l?Du(l):void 0,c=J(o,u);if(!l){if(r||r===0)throw new Error(s?Th(e):Ah(e));return r}let d=ku(n,l.props??{});return l.type!==Ue.Fragment&&(d.ref=o?c:u),Ue.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}St(je,"createSlot");var Ru=je("Slot"),Pu=Symbol.for("radix.slottable");function kh(e){let t=St(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Pu,t}St(kh,"createSlottable");var Dh=St((e,t)=>{if("child"in e.props){let a=e.props.child;return Ue.isValidElement(a)?Ue.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Ue.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function ku(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}St(ku,"mergeProps");function Du(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}St(Du,"getElementRef");function Mu(e){return Ue.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pu}St(Mu,"isSlottable");var Mh=Symbol.for("react.lazy");function pl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Mh&&"_payload"in e&&Au(e._payload)}St(pl,"isLazyComponent");function Au(e){return typeof e=="object"&&e!==null&&"then"in e}St(Au,"isPromiseLike");var Ah=St(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Th=St(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Zr=Ue[" use ".trim().toString()];function Tu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Tu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Eu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Tu(e))&&(o&&(o+=" "),o+=t);return o}function te(...e){return Eu(e)}var Fu=require("react/jsx-runtime");function Eh({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return te("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var De=Ou.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Fu.jsx)(o?Ru:"button",{className:Eh({variant:t,size:a,className:e}),ref:n,...r}));De.displayName="Button";var gr=V(require("react"),1);var ge=V(require("react"),1);var Oh=Object.defineProperty,po=(e,t)=>Oh(e,"name",{value:t,configurable:!0}),Bu=!!(typeof window<"u"&&window.document&&window.document.createElement);function W(e,t,{checkForDefaultPrevented:a=!0}={}){return po(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}po(W,"composeEventHandlers");function Fh(e){if(!Bu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}po(Fh,"getOwnerWindow");function ml(e){if(!Bu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}po(ml,"getOwnerDocument");function Nu(e,t=!1){let{activeElement:a}=ml(e);if(!a?.nodeName)return null;if(_u(a)&&a.contentDocument)return Nu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=ml(a).getElementById(o);if(r)return r}}return a}po(Nu,"getActiveElement");function _u(e){return e.tagName==="IFRAME"}po(_u,"isFrame");var xt=V(require("react"),1),hl=require("react/jsx-runtime"),Bh=Object.defineProperty,gt=(e,t)=>Bh(e,"name",{value:t,configurable:!0});function Nh(e,t){let a=xt.createContext(t);a.displayName=e+"Context";let o=gt(n=>{let{children:l,...s}=n,i=xt.useMemo(()=>s,Object.values(s));return(0,hl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=xt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return gt(r,"useContext"),[o,r]}gt(Nh,"createContext");function Ve(e,t=[]){let a=[];function o(n,l){let s=xt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=gt(d=>{let{scope:f,children:h,...g}=d,m=f?.[e]?.[i]||s,p=xt.useMemo(()=>g,Object.values(g));return(0,hl.jsx)(m.Provider,{value:p,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:g=!1}=h,m=f?.[e]?.[i]||s,p=xt.useContext(m);if(p)return p;if(l!==void 0)return l;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return gt(c,"useContext"),[u,c]}gt(o,"createContext");let r=gt(()=>{let n=a.map(l=>xt.createContext(l));return gt(function(s){let i=s?.[e]||n;return xt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Hu(r,...t)]}gt(Ve,"createContextScope");function Hu(...e){let t=e[0];if(e.length===1)return t;let a=gt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return gt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return xt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}gt(Hu,"composeContextScopes");var gl=V(require("react"),1);var qu=V(require("react"),1),se=globalThis?.document?qu.useLayoutEffect:()=>{};var _h=Object.defineProperty,Hh=(e,t)=>_h(e,"name",{value:t,configurable:!0}),qh=gl[" useId ".trim().toString()]||(()=>{}),Uh=0;function ut(e){let[t,a]=gl.useState(qh());return se(()=>{e||a(o=>o??String(Uh++))},[e]),e||(t?`radix-${t}`:"")}Hh(ut,"useId");var Lt=V(require("react"),1);var Qr=!1;var yt=V(require("react"),1);var mo=V(require("react"),1),Vh=Object.defineProperty,Wh=(e,t)=>Vh(e,"name",{value:t,configurable:!0}),Uu=mo[" useEffectEvent ".trim().toString()],Vu=mo[" useInsertionEffect ".trim().toString()];function xl(e){if(typeof Uu=="function")return Uu(e);let t=mo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Vu=="function"?Vu(()=>{t.current=e}):se(()=>{t.current=e}),mo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Wh(xl,"useEffectEvent");var Gh=Object.defineProperty,dr=(e,t)=>Gh(e,"name",{value:t,configurable:!0}),zh=Lt[" useInsertionEffect ".trim().toString()]||se;function Bt({prop:e,defaultProp:t,onChange:a=dr(()=>{},"onChange"),caller:o}){let[r,n,l]=Gu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Qr){let c=Lt.useRef(e!==void 0);Lt.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=Lt.useCallback(c=>{if(s){let d=zu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}dr(Bt,"useControllableState");function Gu({defaultProp:e,onChange:t}){let[a,o]=Lt.useState(e),r=Lt.useRef(a),n=Lt.useRef(t);return zh(()=>{n.current=t},[t]),Lt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}dr(Gu,"useUncontrolledState");function zu(e){return typeof e=="function"}dr(zu,"isFunction");var Wu=Symbol("RADIX:SYNC_STATE");function Kh(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=xl(l);if(Qr){let p=yt.useRef(r!==void 0);yt.useEffect(()=>{let x=p.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=yt.useReducer((p,x)=>{if(x.type===Wu)return{...p,state:x.state};let C=e(p,x);return i&&!Object.is(C.state,p.state)&&u(C.state),C},...c),h=d.state,g=yt.useRef(h);yt.useEffect(()=>{g.current!==h&&(g.current=h,i||u(h))},[h,g,i]);let m=yt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return yt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:Wu,state:r})},[r,d.state,i]),[m,f]}dr(Kh,"useControllableStateReducer");var fe=V(require("react"),1);var Ku=V(require("react"),1),Xu=V(require("react-dom"),1);var ju=require("react/jsx-runtime"),Xh=Object.defineProperty,jh=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),$h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ae=$h.reduce((e,t)=>{let a=je(`Primitive.${t}`),o=Ku.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,ju.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function cr(e,t){e&&Xu.flushSync(()=>e.dispatchEvent(t))}jh(cr,"dispatchDiscreteCustomEvent");var ho=V(require("react"),1),Yh=Object.defineProperty,Zh=(e,t)=>Yh(e,"name",{value:t,configurable:!0});function Fe(e){let t=ho.useRef(e);return ho.useEffect(()=>{t.current=e}),ho.useMemo(()=>((...a)=>t.current?.(...a)),[])}Zh(Fe,"useCallbackRef");var Yu=require("react/jsx-runtime"),Qh=Object.defineProperty,Be=(e,t)=>Qh(e,"name",{value:t,configurable:!0}),Ll="dismissableLayer.update",Jh="dismissableLayer.pointerDownOutside",eg="dismissableLayer.focusOutside",$u,Zu=fe.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),go=fe.forwardRef(Be(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=fe.useContext(Zu),[f,h]=fe.useState(null),g=f?.ownerDocument??globalThis?.document,[,m]=fe.useState({}),p=J(a,h),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,I=f?x.indexOf(f):-1,b=d.layersWithOutsidePointerEventsDisabled.size>0,w=I>=L,v=fe.useRef(!1),R=Qu(A=>{l?.(A),i?.(A),A.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:v,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:fe.useCallback(A=>{if(!(A instanceof Node))return!1;let N=[...d.branches].some(q=>q.contains(A));return w&&!N},[d.branches,w])}),P=Ju(A=>{if(r&&v.current)return;let N=A.target;[...d.branches].some(Y=>Y.contains(N))||(s?.(A),i?.(A),A.defaultPrevented||u?.())},g),E=f?I===x.length-1:!1,D=Fe(A=>{A.key==="Escape"&&(n?.(A),!A.defaultPrevented&&u&&(A.preventDefault(),u()))});return fe.useEffect(()=>{if(E)return g.addEventListener("keydown",D,{capture:!0}),()=>g.removeEventListener("keydown",D,{capture:!0})},[g,E,D]),fe.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&($u=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Cl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=$u))}},[f,g,o,d]),fe.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Cl())},[f,d]),fe.useEffect(()=>{let A=Be(()=>m({}),"handleUpdate");return document.addEventListener(Ll,A),()=>document.removeEventListener(Ll,A)},[]),(0,Yu.jsx)(ae.div,{...c,ref:p,style:{pointerEvents:b?w?"auto":"none":void 0,...t.style},onFocusCapture:W(t.onFocusCapture,P.onFocusCapture),onBlurCapture:W(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:W(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function Il(){let e=fe.useContext(Zu),[t,a]=fe.useState(null);return fe.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Be(Il,"useDismissableLayerSurface");var tg=Be(()=>!0,"IS_TRUE");function Qu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=tg}=t,s=Fe(e),i=fe.useRef(!1),u=fe.useRef(!1),c=fe.useRef(new Map),d=fe.useRef(()=>{});return fe.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Be(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Be(h,"isOutsideInteractionIntercepted");function g(L){if(!u.current)return;let I=L.target;I instanceof Node&&[...n].some(w=>w.contains(I))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Be(g,"handleInteractionCapture");function m(L){u.current&&c.current.set(L.type,!1)}Be(m,"handleInteractionBubble");let p=Be(L=>{if(L.target&&!i.current){let b=function(){a.removeEventListener("click",d.current);let v=h();f(),v||vl(Jh,s,w,{discrete:!0})};var I=b;if(Be(b,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let w={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?b():(a.removeEventListener("click",d.current),d.current=b,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,g,!0),a.addEventListener(L,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",p),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,g,!0),a.removeEventListener(L,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Be(()=>i.current=!0,"onPointerDownCapture")}}Be(Qu,"usePointerDownOutside");function Ju(e,t=globalThis?.document){let a=Fe(e),o=fe.useRef(!1);return fe.useEffect(()=>{let r=Be(n=>{n.target&&!o.current&&vl(eg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Be(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Be(()=>o.current=!1,"onBlurCapture")}}Be(Ju,"useFocusOutside");function Cl(){let e=new CustomEvent(Ll);document.dispatchEvent(e)}Be(Cl,"dispatchUpdate");function vl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?cr(r,n):r.dispatchEvent(n)}Be(vl,"handleAndDispatchCustomEvent");var Ct=V(require("react"),1);var ad=require("react/jsx-runtime"),ag=Object.defineProperty,Je=(e,t)=>ag(e,"name",{value:t,configurable:!0}),bl="focusScope.autoFocusOnMount",wl="focusScope.autoFocusOnUnmount",ed={bubbles:!1,cancelable:!0},xo=Ct.forwardRef(Je(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=Ct.useState(null),c=Fe(n),d=Fe(l),f=Ct.useRef(null),h=J(a,u),g=Ct.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Ct.useEffect(()=>{if(r){let L=function(v){if(g.paused||!i)return;let R=v.target;i.contains(R)?f.current=R:Kt(f.current,{select:!0})},I=function(v){if(g.paused||!i)return;let R=v.relatedTarget;R!==null&&(i.contains(R)||Kt(f.current,{select:!0}))},b=function(v){if(document.activeElement===document.body)for(let P of v)P.removedNodes.length>0&&Kt(i)};var p=L,x=I,C=b;Je(L,"handleFocusIn"),Je(I,"handleFocusOut"),Je(b,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",I);let w=new MutationObserver(b);return i&&w.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",I),w.disconnect()}}},[r,i,g.paused]),Ct.useEffect(()=>{if(i){td.add(g);let p=document.activeElement;if(!i.contains(p)){let C=new CustomEvent(bl,ed);i.addEventListener(bl,c),i.dispatchEvent(C),C.defaultPrevented||(od(id(Rl(i)),{select:!0}),document.activeElement===p&&Kt(i))}return()=>{i.removeEventListener(bl,c),setTimeout(()=>{let C=new CustomEvent(wl,ed);i.addEventListener(wl,d),i.dispatchEvent(C),C.defaultPrevented||Kt(p??document.body,{select:!0}),i.removeEventListener(wl,d),td.remove(g)},0)}}},[i,c,d,g]);let m=Ct.useCallback(p=>{if(!o&&!r||g.paused)return;let x=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,C=document.activeElement;if(x&&C){let L=p.currentTarget,[I,b]=rd(L);I&&b?!p.shiftKey&&C===b?(p.preventDefault(),o&&Kt(I,{select:!0})):p.shiftKey&&C===I&&(p.preventDefault(),o&&Kt(b,{select:!0})):C===L&&p.preventDefault()}},[o,r,g.paused]);return(0,ad.jsx)(ae.div,{tabIndex:-1,...s,ref:h,onKeyDown:m})},"FocusScope"));function od(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Kt(o,{select:t}),document.activeElement!==a)return}Je(od,"focusFirst");function rd(e){let t=Rl(e),a=Sl(t,e),o=Sl(t.reverse(),e);return[a,o]}Je(rd,"getTabbableEdges");function Rl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Je(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Je(Rl,"getTabbableCandidates");function Sl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):nd(o,{upTo:t})))return o}Je(Sl,"findVisible");function nd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Je(nd,"isHidden");function ld(e){return e instanceof HTMLInputElement&&"select"in e}Je(ld,"isSelectableInput");function Kt(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&ld(e)&&t&&e.select()}}Je(Kt,"focus");var td=sd();function sd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=yl(e,t),e.unshift(t)},remove(t){e=yl(e,t),e[0]?.resume()}}}Je(sd,"createFocusScopesStack");function yl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Je(yl,"arrayRemove");function id(e){return e.filter(t=>t.tagName!=="A")}Je(id,"removeLinks");var Jr=V(require("react"),1),ud=V(require("react-dom"),1);var dd=require("react/jsx-runtime"),og=Object.defineProperty,rg=(e,t)=>og(e,"name",{value:t,configurable:!0}),Lo=Jr.forwardRef(rg(function(t,a){let{container:o,...r}=t,[n,l]=Jr.useState(!1);se(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?ud.createPortal((0,dd.jsx)(ae.div,{...r,ref:a}),s):null},"Portal"));var We=V(require("react"),1);var cd=V(require("react"),1),ng=Object.defineProperty,Xt=(e,t)=>ng(e,"name",{value:t,configurable:!0});function fd(e,t){return cd.useReducer((a,o)=>t[a][o]??a,e)}Xt(fd,"useStateMachine");var jt=Xt(e=>{let{present:t,children:a}=e,o=pd(t),r=typeof a=="function"?a({present:o.isPresent}):We.Children.only(a),n=md(o.ref,hd(r));return typeof a=="function"||o.isPresent?We.cloneElement(r,{ref:n}):null},"Presence");function pd(e){let[t,a]=We.useState(),o=We.useRef(null),r=We.useRef(e),n=We.useRef("none"),l=We.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=fd(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return We.useEffect(()=>{i==="mounted"?(n.current=l.current??Co(o.current),l.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,g=Co(c);e?(l.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Xt(g=>{let p=Co(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&p&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),h=Xt(g=>{g.target===t&&(n.current=Co(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:We.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=Co(d)}else o.current=null;a(c)},[])}}Xt(pd,"usePresence");function Pl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Xt(Pl,"setRef");function md(...e){let t=We.useRef(e);return t.current=e,We.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=Pl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():Pl(o[l],null)}}},[])}Xt(md,"useStableComposedRefs");function Co(e){return e?.animationName||"none"}Xt(Co,"getAnimationName");function hd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Xt(hd,"getElementRef");var gd=V(require("react"),1),lg=Object.defineProperty,Dl=(e,t)=>lg(e,"name",{value:t,configurable:!0}),en=0,Io=null;function sg(e){return ua(),e.children}Dl(sg,"FocusGuards");function ua(){gd.useEffect(()=>{Io||(Io={start:kl(),end:kl()});let{start:e,end:t}=Io;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),en++,()=>{en===1&&(Io?.start.remove(),Io?.end.remove(),Io=null),en=Math.max(0,en-1)}},[])}Dl(ua,"useFocusGuards");function kl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Dl(kl,"createFocusGuard");var tt=function(){return tt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},tt.apply(this,arguments)};function tn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function xd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var ln=V(require("react"));var $e=V(require("react"));var ka="right-scroll-bar-position",Da="width-before-scroll-bar",Ml="with-scroll-bars-hidden",Al="--removed-body-scroll-bar-size";function an(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Ld=require("react");function Cd(e,t){var a=(0,Ld.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var on=V(require("react"));var ig=typeof window<"u"?on.useLayoutEffect:on.useEffect,Id=new WeakMap;function Tl(e,t){var a=Cd(t||null,function(o){return e.forEach(function(r){return an(r,o)})});return ig(function(){var o=Id.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||an(s,null)}),n.forEach(function(s){r.has(s)||an(s,l)})}Id.set(a,e)},[e]),a}function ug(e){return e}function dg(e,t){t===void 0&&(t=ug);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function El(e){e===void 0&&(e={});var t=dg(null);return t.options=tt({async:!0,ssr:!1},e),t}var vd=V(require("react")),bd=function(e){var t=e.sideCar,a=tn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return vd.createElement(o,tt({},a))};bd.isSideCarExport=!0;function Ol(e,t){return e.useMedium(t),bd}var rn=El();var Fl=function(){},fr=$e.forwardRef(function(e,t){var a=$e.useRef(null),o=$e.useState({onScrollCapture:Fl,onWheelCapture:Fl,onTouchMoveCapture:Fl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,g=e.noIsolation,m=e.inert,p=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,I=tn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=f,w=Tl([a,t]),v=tt(tt({},I),r);return $e.createElement($e.Fragment,null,c&&$e.createElement(b,{sideCar:rn,removeScrollBar:u,shards:d,noRelative:h,noIsolation:g,inert:m,setCallbacks:n,allowPinchZoom:!!p,lockRef:a,gapMode:L}),l?$e.cloneElement($e.Children.only(s),tt(tt({},v),{ref:w})):$e.createElement(C,tt({},v,{className:i,ref:w}),s))});fr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};fr.classNames={fullWidth:Da,zeroRight:ka};var he=V(require("react"));var bo=V(require("react"));var yd=V(require("react"));var wd;var Sd=function(){if(wd)return wd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function cg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Sd();return t&&e.setAttribute("nonce",t),e}function fg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function pg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Bl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=cg())&&(fg(t,a),pg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Nl=function(){var e=Bl();return function(t,a){yd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var pr=function(){var e=Nl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var mg={left:0,top:0,right:0,gap:0},_l=function(e){return parseInt(e||"",10)||0},hg=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[_l(a),_l(o),_l(r)]},Hl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return mg;var t=hg(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var gg=pr(),vo="data-scroll-locked",xg=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Ml,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(vo,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),a==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(n,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(o,`;
    `),a==="padding"&&"padding-right: ".concat(s,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ka,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Da,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(ka," .").concat(ka,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Da," .").concat(Da,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(vo,`] {
    `).concat(Al,": ").concat(s,`px;
  }
`)},Rd=function(){var e=parseInt(document.body.getAttribute(vo)||"0",10);return isFinite(e)?e:0},Lg=function(){bo.useEffect(function(){return document.body.setAttribute(vo,(Rd()+1).toString()),function(){var e=Rd()-1;e<=0?document.body.removeAttribute(vo):document.body.setAttribute(vo,e.toString())}},[])},ql=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Lg();var n=bo.useMemo(function(){return Hl(r)},[r]);return bo.createElement(gg,{styles:xg(n,!t,r,a?"":"!important")})};var Ul=!1;if(typeof window<"u")try{mr=Object.defineProperty({},"passive",{get:function(){return Ul=!0,!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Ul=!1}var mr,Ma=Ul?{passive:!1}:!1;var Cg=function(e){return e.tagName==="TEXTAREA"},Pd=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Cg(e)&&a[t]==="visible")},Ig=function(e){return Pd(e,"overflowY")},vg=function(e){return Pd(e,"overflowX")},Vl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=kd(e,o);if(r){var n=Dd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},bg=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},wg=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},kd=function(e,t){return e==="v"?Ig(t):vg(t)},Dd=function(e,t){return e==="v"?bg(t):wg(t)},Sg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Md=function(e,t,a,o,r){var n=Sg(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var h=Dd(e,s),g=h[0],m=h[1],p=h[2],x=m-p-n*g;(g||x)&&kd(e,s)&&(d+=x,f+=g);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var nn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ad=function(e){return[e.deltaX,e.deltaY]},Td=function(e){return e&&"current"in e?e.current:e},yg=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Rg=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Pg=0,wo=[];function Ed(e){var t=he.useRef([]),a=he.useRef([0,0]),o=he.useRef(),r=he.useState(Pg++)[0],n=he.useState(pr)[0],l=he.useRef(e);he.useEffect(function(){l.current=e},[e]),he.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=xd([e.lockRef.current],(e.shards||[]).map(Td),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=he.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var x=nn(m),C=a.current,L="deltaX"in m?m.deltaX:C[0]-x[0],I="deltaY"in m?m.deltaY:C[1]-x[1],b,w=m.target,v=Math.abs(L)>Math.abs(I)?"h":"v";if("touches"in m&&v==="h"&&w.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,E=P?P===w||P.contains(w):!1;if(E)return!1;var D=Vl(v,w);if(!D)return!0;if(D?b=v:(b=v==="v"?"h":"v",D=Vl(v,w)),!D)return!1;if(!o.current&&"changedTouches"in m&&(L||I)&&(o.current=b),!b)return!0;var A=o.current||b;return Md(A,p,m,A==="h"?L:I,!0)},[]),i=he.useCallback(function(m){var p=m;if(!(!wo.length||wo[wo.length-1]!==n)){var x="deltaY"in p?Ad(p):nn(p),C=t.current.filter(function(b){return b.name===p.type&&(b.target===p.target||p.target===b.shadowParent)&&yg(b.delta,x)})[0];if(C&&C.should){p.cancelable&&p.preventDefault();return}if(!C){var L=(l.current.shards||[]).map(Td).filter(Boolean).filter(function(b){return b.contains(p.target)}),I=L.length>0?s(p,L[0]):!l.current.noIsolation;I&&p.cancelable&&p.preventDefault()}}},[]),u=he.useCallback(function(m,p,x,C){var L={name:m,delta:p,target:x,should:C,shadowParent:kg(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(I){return I!==L})},1)},[]),c=he.useCallback(function(m){a.current=nn(m),o.current=void 0},[]),d=he.useCallback(function(m){u(m.type,Ad(m),m.target,s(m,e.lockRef.current))},[]),f=he.useCallback(function(m){u(m.type,nn(m),m.target,s(m,e.lockRef.current))},[]);he.useEffect(function(){return wo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ma),document.addEventListener("touchmove",i,Ma),document.addEventListener("touchstart",c,Ma),function(){wo=wo.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,Ma),document.removeEventListener("touchmove",i,Ma),document.removeEventListener("touchstart",c,Ma)}},[]);var h=e.removeScrollBar,g=e.inert;return he.createElement(he.Fragment,null,g?he.createElement(n,{styles:Rg(r)}):null,h?he.createElement(ql,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function kg(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Od=Ol(rn,Ed);var Fd=ln.forwardRef(function(e,t){return ln.createElement(fr,tt({},e,{ref:t,sideCar:Od}))});Fd.classNames=fr.classNames;var Aa=Fd;var Dg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},So=new WeakMap,sn=new WeakMap,un={},Wl=0,Bd=function(e){return e&&(e.host||Bd(e.parentNode))},Mg=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Bd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Ag=function(e,t,a,o){var r=Mg(t,Array.isArray(e)?e:[e]);un[a]||(un[a]=new WeakMap);var n=un[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var h=f.getAttribute(o),g=h!==null&&h!=="false",m=(So.get(f)||0)+1,p=(n.get(f)||0)+1;So.set(f,m),n.set(f,p),l.push(f),m===1&&g&&sn.set(f,!0),p===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),Wl++,function(){l.forEach(function(d){var f=So.get(d)-1,h=n.get(d)-1;So.set(d,f),n.set(d,h),f||(sn.has(d)||d.removeAttribute(o),sn.delete(d)),h||d.removeAttribute(a)}),Wl--,Wl||(So=new WeakMap,So=new WeakMap,sn=new WeakMap,un={})}},yo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||Dg(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Ag(o,r,a,"aria-hidden")):function(){return null}};var be=require("react/jsx-runtime"),Tg=Object.defineProperty,It=(e,t)=>Tg(e,"name",{value:t,configurable:!0}),zl="Dialog",[Nd,sw]=Ve(zl),[Eg,Nt]=Nd(zl),_d=It(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=ge.useRef(null),i=ge.useRef(null),[u,c]=Bt({prop:o,defaultProp:r??!1,onChange:n,caller:zl}),[d,f]=ge.useState(0),[h,g]=ge.useState(0);return(0,be.jsx)(Eg,{scope:t,triggerRef:s,contentRef:i,contentId:ut(),titleId:ut(),descriptionId:ut(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:g,open:u,onOpenChange:c,onOpenToggle:ge.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var Hd="DialogPortal",[Og,qd]=Nd(Hd,{forceMount:void 0}),Ud=It(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Nt(Hd,t);return(0,be.jsx)(Og,{scope:t,forceMount:a,children:ge.Children.map(o,l=>(0,be.jsx)(jt,{present:a||n.open,children:(0,be.jsx)(Lo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Gl="DialogOverlay",Kl=ge.forwardRef(It(function(t,a){let o=qd(Gl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Nt(Gl,t.__scopeDialog);return l.modal?(0,be.jsx)(jt,{present:r||l.open,children:(0,be.jsx)(Bg,{...n,ref:a})}):null},"DialogOverlay")),Fg=je("DialogOverlay.RemoveScroll"),Bg=ge.forwardRef(It(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt(Gl,o),l=Il(),s=J(a,l);return(0,be.jsx)(Aa,{as:Fg,allowPinchZoom:!0,shards:[n.contentRef],children:(0,be.jsx)(ae.div,{"data-state":Yl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),hr="DialogContent",Xl=ge.forwardRef(It(function(t,a){let o=qd(hr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Nt(hr,t.__scopeDialog);return(0,be.jsx)(jt,{present:r||l.open,children:l.modal?(0,be.jsx)(Ng,{...n,ref:a}):(0,be.jsx)(_g,{...n,ref:a})})},"DialogContent")),Ng=ge.forwardRef(It(function(t,a){let o=Nt(hr,t.__scopeDialog),r=ge.useRef(null),n=J(a,o.contentRef,r);return ge.useEffect(()=>{let l=r.current;if(l)return yo(l)},[]),(0,be.jsx)(Vd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:W(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:W(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),_g=ge.forwardRef(It(function(t,a){let o=Nt(hr,t.__scopeDialog),r=ge.useRef(!1),n=ge.useRef(!1);return(0,be.jsx)(Vd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Vd=ge.forwardRef(It(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Nt(hr,o);return ua(),(0,be.jsx)(be.Fragment,{children:(0,be.jsx)(xo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,be.jsx)(go,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Yl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Hg="DialogTitle",jl=ge.forwardRef(It(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt(Hg,o),{setTitleCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,be.jsx)(ae.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),qg="DialogDescription",$l=ge.forwardRef(It(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt(qg,o),{setDescriptionCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,be.jsx)(ae.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Ug="DialogClose",Wd=ge.forwardRef(It(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt(Ug,o);return(0,be.jsx)(ae.button,{type:"button",...r,ref:a,onClick:W(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Yl(e){return e?"open":"closed"}It(Yl,"getState");var zd=require("react"),Zl="dsh-kanban",Kd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Wg={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ta=null,Ql=null;function Xd(e){let t=e.get("locale");if(t!==void 0){Ta=t;try{t.register(Zl,"zh",Kd),t.register(Zl,"en",Wg)}catch{}Ql=t.bind(Zl)}}function Ro(e){return Ql?Ql(e):Kd[e]??e}var Gg=e=>Ta&&typeof Ta.subscribe=="function"?Ta.subscribe(e):()=>{},Gd=()=>Ta&&typeof Ta.getSnapshot=="function"?Ta.getSnapshot():null;function Ne(){return(0,zd.useSyncExternalStore)(Gg,Gd,Gd),Ro}var dt=require("react/jsx-runtime"),Po=_d;var zg=Ud;var jd=gr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)(Kl,{ref:a,className:te("kanban-portal kanban-dialog-overlay",e),...t}));jd.displayName=Kl.displayName;var Ea=gr.forwardRef(({className:e,children:t,...a},o)=>{let r=Ne();return(0,dt.jsxs)(zg,{children:[(0,dt.jsx)(jd,{}),(0,dt.jsxs)(Xl,{ref:o,className:te("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,dt.jsxs)(Wd,{className:"kanban-dialog-close",children:[(0,dt.jsx)(ur,{className:"kanban-dialog-close-icon"}),(0,dt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Ea.displayName=Xl.displayName;var Oa=({className:e,...t})=>(0,dt.jsx)("div",{className:te("kanban-dialog-header",e),...t});Oa.displayName="DialogHeader";var xr=({className:e,...t})=>(0,dt.jsx)("div",{className:te("kanban-dialog-footer",e),...t});xr.displayName="DialogFooter";var Fa=gr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)(jl,{ref:a,className:te("kanban-dialog-title",e),...t}));Fa.displayName=jl.displayName;var Lr=gr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)($l,{ref:a,className:te("kanban-dialog-description",e),...t}));Lr.displayName=$l.displayName;var Rr=V(require("react"),1);var At=V(require("react"),1);var Z=V(require("react"),1);var Rt=V(require("react"),1);var dn=require("react/jsx-runtime"),at=V(require("react"),1);var Ba=require("react/jsx-runtime");var Kg=Object.defineProperty,_e=(e,t)=>Kg(e,"name",{value:t,configurable:!0});function Na(e){let t=e+"CollectionProvider",[a,o]=Ve(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=_e(m=>{let{scope:p,children:x}=m,C=Rt.useRef(null),L=Rt.useRef(new Map).current;return(0,dn.jsx)(r,{scope:p,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=je(s),u=Rt.forwardRef((m,p)=>{let{scope:x,children:C}=m,L=n(s,x),I=J(p,L.collectionRef);return(0,dn.jsx)(i,{ref:I,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=je(c),h=Rt.forwardRef((m,p)=>{let{scope:x,children:C,...L}=m,I=Rt.useRef(null),b=J(p,I),w=n(c,x);return Rt.useEffect(()=>(w.itemMap.set(I,{ref:I,...L}),()=>{w.itemMap.delete(I)})),(0,dn.jsx)(f,{[d]:"",ref:b,children:C})});h.displayName=c;function g(m){let p=n(e+"CollectionConsumer",m);return Rt.useCallback(()=>{let C=p.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((w,v)=>L.indexOf(w.ref.current)-L.indexOf(v.ref.current))},[p.collectionRef,p.itemMap])}return _e(g,"useCollection"),[{Provider:l,Slot:u,ItemSlot:h},g,o]}_e(Na,"createCollection");var $d=new WeakMap,Me,ct,Jl=(ct=class extends Map{constructor(a){super(a);si(this,Me);jn(this,Me,[...super.keys()]),$d.set(this,!0)}set(a,o){return $d.get(this)&&(this.has(a)?Ke(this,Me)[Ke(this,Me).indexOf(a)]=a:Ke(this,Me).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=Ke(this,Me).length,s=ts(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...Ke(this,Me)],f,h=!1;for(let g=i;g<c;g++)if(i===g){let m=d[g];d[g]===o&&(m=d[g+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!h&&d[g-1]===o&&(h=!0);let m=d[h?g:g-1],p=f;f=this.get(m),this.delete(m),this.set(m,p)}return this}with(a,o,r){let n=new ct(this);return n.insert(a,o,r),n}before(a){let o=Ke(this,Me).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ke(this,Me).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ke(this,Me).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ke(this,Me).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return jn(this,Me,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ke(this,Me).splice(Ke(this,Me).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=cn(Ke(this,Me),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=cn(Ke(this,Me),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ke(this,Me).indexOf(a)}keyAt(a){return cn(Ke(this,Me),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new ct(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new ct(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new ct(o)}toReversed(){let a=new ct;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new ct(o)}slice(a,o){let r=new ct,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Me=new WeakMap,_e(ct,"OrderedDict"),ct);function cn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Yd(e,t);return a===-1?void 0:e[a]}_e(cn,"at");function Yd(e,t){let a=e.length,o=ts(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}_e(Yd,"toSafeIndex");function ts(e){return e!==e||e===0?0:Math.trunc(e)}_e(ts,"toSafeInteger");function Xg(e){let t=e+"CollectionProvider",[a,o]=Ve(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Jl,setItemMap:_e(()=>{},"setItemMap")}),l=_e(({state:L,...I})=>L?(0,Ba.jsx)(i,{...I,state:L}):(0,Ba.jsx)(s,{...I}),"CollectionProvider");l.displayName=t;let s=_e(L=>{let I=p();return(0,Ba.jsx)(i,{...L,state:I})},"CollectionInit");s.displayName=t+"Init";let i=_e(L=>{let{scope:I,children:b,state:w}=L,v=at.useRef(null),[R,P]=at.useState(null),E=J(v,P),[D,A]=w;return at.useEffect(()=>{if(!R)return;let N=Jd(()=>{});return N.observe(R,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[R]),(0,Ba.jsx)(r,{scope:I,itemMap:D,setItemMap:A,collectionRef:E,collectionRefObject:v,collectionElement:R,children:b})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=je(u),d=at.forwardRef((L,I)=>{let{scope:b,children:w}=L,v=n(u,b),R=J(I,v.collectionRef);return(0,Ba.jsx)(c,{ref:R,children:w})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",g=je(f),m=at.forwardRef((L,I)=>{let{scope:b,children:w,...v}=L,R=at.useRef(null),[P,E]=at.useState(null),D=J(I,R,E),A=n(f,b),{setItemMap:N}=A,q=at.useRef(v);Zd(q.current,v)||(q.current=v);let Y=q.current;return at.useEffect(()=>{let $=Y;return N(_=>P?_.has(P)?_.set(P,{...$,element:P}).toSorted(es):(_.set(P,{...$,element:P}),_.toSorted(es)):_),()=>{N(_=>!P||!_.has(P)?_:(_.delete(P),new Jl(_)))}},[P,Y,N]),(0,Ba.jsx)(g,{[h]:"",ref:D,children:w})});m.displayName=f;function p(){return at.useState(new Jl)}_e(p,"useInitCollection");function x(L){let{itemMap:I}=n(e+"CollectionConsumer",L);return I}return _e(x,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:x,useInitCollection:p}]}_e(Xg,"createCollection");function Zd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}_e(Zd,"shallowEqual");function Qd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}_e(Qd,"isElementPreceding");function es(e,t){return!e[1].element||!t[1].element?0:Qd(e[1].element,t[1].element)?-1:1}_e(es,"sortByDocumentPosition");function Jd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}_e(Jd,"getChildListObserver");var fn=V(require("react"),1),Yg=require("react/jsx-runtime"),jg=Object.defineProperty,$g=(e,t)=>jg(e,"name",{value:t,configurable:!0}),Zg=fn.createContext(void 0);function _a(e){let t=fn.useContext(Zg);return e||t||"ltr"}$g(_a,"useDirection");var Ye=V(require("react"),1);var ac=["top","right","bottom","left"];var _t=Math.min,Pt=Math.max,Ir=Math.round,vr=Math.floor,Ht=e=>({x:e,y:e}),Qg={left:"right",right:"left",bottom:"top",top:"bottom"};function as(e,t,a){return Pt(e,_t(t,a))}function qt(e,t){return typeof e=="function"?e(t):e}function $t(e){return e.split("-")[0]}function Ha(e){return e.split("-")[1]}function mn(e){return e==="x"?"y":"x"}function hn(e){return e==="y"?"height":"width"}function kt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function gn(e){return mn(kt(e))}function oc(e,t,a){a===void 0&&(a=!1);let o=Ha(e),r=gn(e),n=hn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Cr(l)),[l,Cr(l)]}function rc(e){let t=Cr(e);return[pn(e),t,pn(t)]}function pn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var ec=["left","right"],tc=["right","left"],Jg=["top","bottom"],ex=["bottom","top"];function tx(e,t,a){switch(e){case"top":case"bottom":return a?t?tc:ec:t?ec:tc;case"left":case"right":return t?Jg:ex;default:return[]}}function nc(e,t,a,o){let r=Ha(e),n=tx($t(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(pn)))),n}function Cr(e){let t=$t(e);return Qg[t]+e.slice(t.length)}function ax(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function os(e){return typeof e!="number"?ax(e):{top:e,right:e,bottom:e,left:e}}function qa(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function lc(e,t,a){let{reference:o,floating:r}=e,n=kt(t),l=gn(t),s=hn(l),i=$t(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let g=Ha(t);return g&&(h[l]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),h}async function uc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=qt(t,e),g=os(h),p=s[f?d==="floating"?"reference":"floating":d],x=qa(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(p)))==null||a?p:p.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),I=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},b=qa(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-b.top+g.top)/I.y,bottom:(b.bottom-x.bottom+g.bottom)/I.y,left:(x.left-b.left+g.left)/I.x,right:(b.right-x.right+g.right)/I.x}}var ox=50,dc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:uc},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=lc(u,o,i),f=o,h=0,g={};for(let m=0;m<n.length;m++){let p=n[m];if(!p)continue;let{name:x,fn:C}=p,{x:L,y:I,data:b,reset:w}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=L??c,d=I??d,g[x]={...g[x],...b},w&&h<ox&&(h++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(u=w.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):w.rects),{x:c,y:d}=lc(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},cc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=qt(e,t)||{};if(u==null)return{};let d=os(c),f={x:a,y:o},h=gn(r),g=hn(h),m=await l.getDimensions(u),p=h==="y",x=p?"top":"left",C=p?"bottom":"right",L=p?"clientHeight":"clientWidth",I=n.reference[g]+n.reference[h]-f[h]-n.floating[g],b=f[h]-n.reference[h],w=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),v=w?w[L]:0;(!v||!await(l.isElement==null?void 0:l.isElement(w)))&&(v=s.floating[L]||n.floating[g]);let R=I/2-b/2,P=v/2-m[g]/2-1,E=_t(d[x],P),D=_t(d[C],P),A=v-m[g]-D,N=v/2-m[g]/2+R,q=as(E,N,A),Y=!i.arrow&&Ha(r)!=null&&N!==q&&n.reference[g]/2-(N<E?E:D)-m[g]/2<0,$=Y?N<E?N-E:N-A:0;return{[h]:f[h]+$,data:{[h]:q,centerOffset:N-q-$,...Y&&{alignmentOffset:$}},reset:Y}}});var fc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...p}=qt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=$t(r),C=kt(s),L=$t(s)===s,I=await(i.isRTL==null?void 0:i.isRTL(u.floating)),b=f||(L||!m?[Cr(s)]:rc(s)),w=g!=="none";!f&&w&&b.push(...nc(s,m,g,I));let v=[s,...b],R=await i.detectOverflow(t,p),P=[],E=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[x]),d){let q=oc(r,l,I);P.push(R[q[0]],R[q[1]])}if(E=[...E,{placement:r,overflows:P}],!P.every(q=>q<=0)){var D,A;let q=(((D=n.flip)==null?void 0:D.index)||0)+1,Y=v[q];if(Y&&(!(d==="alignment"?C!==kt(Y):!1)||E.every(z=>kt(z.placement)===C?z.overflows[0]>0:!0)))return{data:{index:q,overflows:E},reset:{placement:Y}};let $=(A=E.filter(_=>_.overflows[0]<=0).sort((_,z)=>_.overflows[1]-z.overflows[1])[0])==null?void 0:A.placement;if(!$)switch(h){case"bestFit":{var N;let _=(N=E.filter(z=>{if(w){let K=kt(z.placement);return K===C||K==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(K=>K>0).reduce((K,T)=>K+T,0)]).sort((z,K)=>z[1]-K[1])[0])==null?void 0:N[0];_&&($=_);break}case"initialPlacement":$=s;break}if(r!==$)return{reset:{placement:$}}}return{}}}};function sc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ic(e){return ac.some(t=>e[t]>=0)}var pc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=qt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=sc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ic(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=sc(l,a.floating);return{data:{escapedOffsets:s,escaped:ic(s)}}}default:return{}}}}};var mc=new Set(["left","top"]);async function rx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=$t(a),s=Ha(a),i=kt(a)==="y",u=mc.has(l)?-1:1,c=n&&i?-1:1,d=qt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(h=s==="end"?g*-1:g),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var hc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await rx(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},gc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:L,y:I}=C;return{x:L,y:I}}},...u}=qt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=kt(r),h=mn(f),g=c[h],m=c[f],p=(C,L)=>as(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);l&&(g=p(h,g)),s&&(m=p(f,m));let x=i.fn({...t,[h]:g,[f]:m});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[h]:l,[f]:s}}}}}},xc=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=qt(e,t),f={x:r,y:n},h=kt(l),g=mn(h),m=f[g],p=f[h],x=qt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let b=g==="y"?"height":"width",w=s.reference[g]-s.floating[b]+C.mainAxis,v=s.reference[g]+s.reference[b]-C.mainAxis;m<w?m=w:m>v&&(m=v)}if(d){var L,I;let b=g==="y"?"width":"height",w=mc.has($t(l)),v=s.reference[h]-s.floating[b]+(w&&((L=i.offset)==null?void 0:L[h])||0)+(w?0:C.crossAxis),R=s.reference[h]+s.reference[b]+(w?0:((I=i.offset)==null?void 0:I[h])||0)-(w?C.crossAxis:0);p<v?p=v:p>R&&(p=R)}return{[g]:m,[h]:p}}}},Lc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=qt(e,t),i=await r.detectOverflow(t,s),u=$t(a),c=Ha(a),d=kt(a)==="y",{width:f,height:h}=o.floating,g,m;u==="top"||u==="bottom"?(g=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,g=c==="end"?"top":"bottom");let p=h-i.top-i.bottom,x=f-i.left-i.right,C=_t(h-i[g],p),L=_t(f-i[m],x),I=t.middlewareData.shift,b=!I,w=C,v=L;I!=null&&I.enabled.x&&(v=x),I!=null&&I.enabled.y&&(w=p),b&&!c&&(d?v=f-2*Pt(i.left,i.right):w=h-2*Pt(i.top,i.bottom)),await l({...t,availableWidth:v,availableHeight:w});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function xn(){return typeof window<"u"}function Wa(e){return Ic(e)?(e.nodeName||"").toLowerCase():"#document"}function et(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ut(e){var t;return(t=(Ic(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ic(e){return xn()?e instanceof Node||e instanceof et(e).Node:!1}function Dt(e){return xn()?e instanceof Element||e instanceof et(e).Element:!1}function Yt(e){return xn()?e instanceof HTMLElement||e instanceof et(e).HTMLElement:!1}function Cc(e){return!xn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof et(e).ShadowRoot}function br(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Mt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function vc(e){return/^(table|td|th)$/.test(Wa(e))}function wr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var nx=/transform|translate|scale|rotate|perspective|filter/,lx=/paint|layout|strict|content/,Ua=e=>!!e&&e!=="none",rs;function Ln(e){let t=Dt(e)?Mt(e):e;return Ua(t.transform)||Ua(t.translate)||Ua(t.scale)||Ua(t.rotate)||Ua(t.perspective)||!Cn()&&(Ua(t.backdropFilter)||Ua(t.filter))||nx.test(t.willChange||"")||lx.test(t.contain||"")}function bc(e){let t=da(e);for(;Yt(t)&&!ko(t);){if(Ln(t))return t;if(wr(t))return null;t=da(t)}return null}function Cn(){return rs==null&&(rs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),rs}function ko(e){return/^(html|body|#document)$/.test(Wa(e))}function Mt(e){return et(e).getComputedStyle(e)}function Sr(e){return Dt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function da(e){if(Wa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Cc(e)&&e.host||Ut(e);return Cc(t)?t.host:t}function wc(e){let t=da(e);return ko(t)?(e.ownerDocument||e).body:Yt(t)&&br(t)?t:wc(t)}function Va(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=wc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=et(r);if(n){let s=In(l);return t.concat(l,l.visualViewport||[],br(r)?r:[],s&&a?Va(s):[])}else return t.concat(r,Va(r,[],a))}function In(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Rc(e){let t=Mt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Yt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Ir(a)!==n||Ir(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function ls(e){return Dt(e)?e:e.contextElement}function Do(e){let t=ls(e);if(!Yt(t))return Ht(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Rc(t),l=(n?Ir(a.width):a.width)/o,s=(n?Ir(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var sx=Ht(0);function Pc(e){let t=et(e);return!Cn()||!t.visualViewport?sx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ix(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===et(e)}function Ga(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=ls(e),l=Ht(1);t&&(o?Dt(o)&&(l=Do(o)):l=Do(e));let s=ix(n,a,o)?Pc(n):Ht(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=et(n),h=Dt(o)?et(o):o,g=f,m=In(g);for(;m&&h!==g;){let p=Do(m),x=m.getBoundingClientRect(),C=Mt(m),L=x.left+(m.clientLeft+parseFloat(C.paddingLeft))*p.x,I=x.top+(m.clientTop+parseFloat(C.paddingTop))*p.y;i*=p.x,u*=p.y,c*=p.x,d*=p.y,i+=L,u+=I,g=et(m),m=In(g)}}return qa({width:c,height:d,x:i,y:u})}function vn(e,t){let a=Sr(e).scrollLeft;return t?t.left+a:Ga(Ut(e)).left+a}function kc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-vn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function ux(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Ut(o),s=t?wr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ht(1),c=Ht(0),d=Yt(o);if((d||!n)&&((Wa(o)!=="body"||br(l))&&(i=Sr(o)),d)){let h=Ga(o);u=Do(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=l&&!d&&!n?kc(l,i):Ht(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function dx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function cx(e){let t=Sr(e),a=e.ownerDocument.body,o=Pt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Pt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+vn(e),l=-t.scrollTop;return Mt(a).direction==="rtl"&&(n+=Pt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var fx=25;function px(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=et(e),n=Ut(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Cn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(vn(n)<=0){let f=n.ownerDocument,h=f.body,g=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,p=Math.abs(n.clientWidth-h.clientWidth-m),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?p/2:p;x<=fx&&(s-=x)}return{width:s,height:i,x:u,y:c}}function mx(e,t){let a=Ga(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Do(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function Sc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=px(e,a,t);else if(t==="document")o=cx(Ut(e));else if(Dt(t))o=mx(t,a);else{let r=Pc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return qa(o)}function hx(e,t){let a=t.get(e);if(a)return a;let o=Va(e,[],!1).filter(s=>Dt(s)&&Wa(s)!=="body"),r=null,n=Mt(e).position==="fixed",l=n?da(e):e;for(;Dt(l)&&!ko(l);){let s=Mt(l),i=Ln(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=da(l)}return t.set(e,o),o}function gx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?wr(t)?[]:hx(t,this._c):[].concat(a),o],s=Sc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let h=Sc(t,l[f],r);i=Pt(h.top,i),u=_t(h.right,u),c=_t(h.bottom,c),d=Pt(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function xx(e){let{width:t,height:a}=Rc(e);return{width:t,height:a}}function Lx(e,t,a){let o=Yt(t),r=Ut(t),n=a==="fixed",l=Ga(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Ht(0);if((o||!n)&&((Wa(t)!=="body"||br(r))&&(s=Sr(t)),o)){let f=Ga(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=vn(r));let u=r&&!o&&!n?kc(r,s):Ht(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function ns(e){return Mt(e).position==="static"}function yc(e,t){if(!Yt(e)||Mt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Ut(e)===a&&(a=a.ownerDocument.body),a}function Dc(e,t){let a=et(e);if(wr(e))return a;if(!Yt(e)){let r=da(e);for(;r&&!ko(r);){if(Dt(r)&&!ns(r))return r;r=da(r)}return a}let o=yc(e,t);for(;o&&vc(o)&&ns(o);)o=yc(o,t);return o&&ko(o)&&ns(o)&&!Ln(o)?a:o||bc(e)||a}var Cx=async function(e){let t=this.getOffsetParent||Dc,a=this.getDimensions,o=await a(e.floating);return{reference:Lx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ix(e){return Mt(e).direction==="rtl"}var Mc={convertOffsetParentRelativeRectToViewportRelativeRect:ux,getDocumentElement:Ut,getClippingRect:gx,getOffsetParent:Dc,getElementRects:Cx,getClientRects:dx,getDimensions:xx,getScale:Do,isElement:Dt,isRTL:Ix};function Ac(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vx(e,t,a){let o=null,r,n=Ut(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:h,top:g,width:m,height:p}=f;if(c||t(),!m||!p)return;let x=vr(g),C=vr(n.clientWidth-(h+m)),L=vr(n.clientHeight-(g+p)),I=vr(h),w={rootMargin:-x+"px "+-C+"px "+-L+"px "+-I+"px",threshold:Pt(0,_t(1,d))||1},v=!0;function R(P){let E=P[0].intersectionRatio;if(!Ac(f,e.getBoundingClientRect()))return s();if(E!==d){if(!v)return s();E?s(!1,E):r=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(R,{...w,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,w)}o.observe(e)}let i=et(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function ss(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=ls(e),c=r||n?[...u?Va(u):[],...t?Va(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?vx(u,a,n):null,f=-1,h=null;l&&(h=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=h)==null||L.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let g,m=i?Ga(e):null;i&&p();function p(){let x=Ga(e);m&&!Ac(m,x)&&a(),m=x,g=requestAnimationFrame(p)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=h)==null||x.disconnect(),h=null,i&&cancelAnimationFrame(g)}}var Tc=hc;var Ec=gc,Oc=fc,Fc=Lc,Bc=pc,is=cc;var Nc=xc,us=(e,t,a)=>{let o=new Map,r=a??{},n={...Mc,...r.platform,_c:o};return dc(e,t,{...r,platform:n})};var Ae=V(require("react"),1),Hc=require("react"),qc=V(require("react-dom"),1),bx=typeof document<"u",wx=function(){},bn=bx?Hc.useLayoutEffect:wx;function wn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!wn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!wn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Uc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function _c(e,t){let a=Uc(e);return Math.round(t*a)/a}function ds(e){let t=Ae.useRef(e);return bn(()=>{t.current=e}),t}function Vc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=Ae.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=Ae.useState(o);wn(f,o)||h(o);let[g,m]=Ae.useState(null),[p,x]=Ae.useState(null),C=Ae.useCallback(z=>{z!==w.current&&(w.current=z,m(z))},[]),L=Ae.useCallback(z=>{z!==v.current&&(v.current=z,x(z))},[]),I=n||g,b=l||p,w=Ae.useRef(null),v=Ae.useRef(null),R=Ae.useRef(c),P=i!=null,E=ds(i),D=ds(r),A=ds(u),N=Ae.useCallback(()=>{if(!w.current||!v.current)return;let z={placement:t,strategy:a,middleware:f};D.current&&(z.platform=D.current),us(w.current,v.current,z).then(K=>{let T={...K,isPositioned:A.current!==!1};q.current&&!wn(R.current,T)&&(R.current=T,qc.flushSync(()=>{d(T)}))})},[f,t,a,D,A]);bn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(z=>({...z,isPositioned:!1})))},[u]);let q=Ae.useRef(!1);bn(()=>(q.current=!0,()=>{q.current=!1}),[]),bn(()=>{if(I&&(w.current=I),b&&(v.current=b),I&&b){if(E.current)return E.current(I,b,N);N()}},[I,b,N,E,P]);let Y=Ae.useMemo(()=>({reference:w,floating:v,setReference:C,setFloating:L}),[C,L]),$=Ae.useMemo(()=>({reference:I,floating:b}),[I,b]),_=Ae.useMemo(()=>{let z={position:a,left:0,top:0};if(!$.floating)return z;let K=_c($.floating,c.x),T=_c($.floating,c.y);return s?{...z,transform:"translate("+K+"px, "+T+"px)",...Uc($.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:T}},[a,s,$.floating,c.x,c.y]);return Ae.useMemo(()=>({...c,update:N,refs:Y,elements:$,floatingStyles:_}),[c,N,Y,$,_])}var Sx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?is({element:o.current,padding:r}).fn(a):{}:o?is({element:o,padding:r}).fn(a):{}}}},Wc=(e,t)=>{let a=Tc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Gc=(e,t)=>{let a=Ec(e);return{name:a.name,fn:a.fn,options:[e,t]}},zc=(e,t)=>({fn:Nc(e).fn,options:[e,t]}),Kc=(e,t)=>{let a=Oc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Xc=(e,t)=>{let a=Fc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var jc=(e,t)=>{let a=Bc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var $c=(e,t)=>{let a=Sx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Yc=V(require("react"),1);var yx=Object.defineProperty,Rx=(e,t)=>yx(e,"name",{value:t,configurable:!0});function cs(e){let[t,a]=Yc.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}Rx(cs,"useSize");var Mo=require("react/jsx-runtime"),Px=Object.defineProperty,ca=(e,t)=>Px(e,"name",{value:t,configurable:!0});var Zc="Popper",[Qc,Ao]=Ve(Zc),[kx,Jc]=Qc(Zc),Dx=ca(e=>{let{__scopePopper:t,children:a}=e,[o,r]=Ye.useState(null),[n,l]=Ye.useState(void 0);return(0,Mo.jsx)(kx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Mx="PopperAnchor",Ax=Ye.forwardRef(ca(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Jc(Mx,o),s=Ye.useRef(null),i=l.onAnchorChange,u=Ye.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=J(a,u),d=Ye.useRef(null);Ye.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Sn(l.placementState),h=f?.[0],g=f?.[1];return r?null:(0,Mo.jsx)(ae.div,{"data-radix-popper-side":h,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),ef="PopperContent",[Tx,Yw]=Qc(ef),Ex=Ye.forwardRef(ca(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:g="optimized",onPlaced:m,...p}=t,x=Jc(ef,o),[C,L]=Ye.useState(null),I=J(a,L),[b,w]=Ye.useState(null),v=cs(b),R=v?.width??0,P=v?.height??0,E=r+(l!=="center"?"-"+l:""),D=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},A=Array.isArray(c)?c:[c],N=A.length>0,q={padding:D,boundary:A.filter(tf),altBoundary:N},{refs:Y,floatingStyles:$,placement:_,isPositioned:z,middlewareData:K}=Vc({strategy:"fixed",placement:E,whileElementsMounted:ca((...ee)=>ss(...ee,{animationFrame:g==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Wc({mainAxis:n+P,alignmentAxis:s}),u&&Gc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?zc():void 0,...q}),u&&Kc({...q}),Xc({...q,apply:ca(({elements:ee,rects:j,availableWidth:le,availableHeight:oe})=>{let{width:S,height:k}=j.reference,O=ee.floating.style;O.setProperty("--radix-popper-available-width",`${le}px`),O.setProperty("--radix-popper-available-height",`${oe}px`),O.setProperty("--radix-popper-anchor-width",`${S}px`),O.setProperty("--radix-popper-anchor-height",`${k}px`)},"apply")}),b&&$c({element:b,padding:i}),Ox({arrowWidth:R,arrowHeight:P}),h&&jc({strategy:"referenceHidden",...q,boundary:N?q.boundary:void 0})]}),T=x.setPlacementState;se(()=>(T(_),()=>{T(void 0)}),[_,T]);let[Le,X]=Sn(_),Q=Fe(m);se(()=>{z&&Q?.()},[z,Q]);let Ce=K.arrow?.x,Pe=K.arrow?.y,de=K.arrow?.centerOffset!==0,[ke,F]=Ye.useState();return se(()=>{C&&F(window.getComputedStyle(C).zIndex)},[C]),(0,Mo.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:z?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[K.transformOrigin?.x,K.transformOrigin?.y].join(" "),...K.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Mo.jsx)(Tx,{scope:o,placedSide:Le,placedAlign:X,onArrowChange:w,arrowX:Ce,arrowY:Pe,shouldHideArrow:de,children:(0,Mo.jsx)(ae.div,{"data-side":Le,"data-align":X,...p,ref:I,style:{...p.style,animation:z?p.style?.animation:"none"}})})})},"PopperContent"));function tf(e){return e!==null}ca(tf,"isNotNull");var Ox=ca(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Sn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,h=(r.arrow?.y??0)+i/2,g="",m="";return u==="bottom"?(g=l?d:`${f}px`,m=`${-i}px`):u==="top"?(g=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,m=l?d:`${h}px`):u==="left"&&(g=`${o.floating.width+i}px`,m=l?d:`${h}px`),{data:{x:g,y:m}}}}),"transformOrigin");function Sn(e){let[t,a="center"]=e.split("-");return[t,a]}ca(Sn,"getSideAndAlignFromPlacement");var yn=Dx,Rn=Ax,Pn=Ex;var He=V(require("react"),1);var Bx=V(require("react"),1),kn=V(require("react"),1),Fx=Object.defineProperty,ps=(e,t)=>Fx(e,"name",{value:t,configurable:!0}),fs=!1;function of(){let[e,t]=kn.useState(fs);return kn.useEffect(()=>{fs||(fs=!0,t(!0))},[]),e}ps(of,"useIsHydrated");var rf=Bx[" useSyncExternalStore ".trim().toString()];function nf(){return()=>{}}ps(nf,"subscribe");function lf(){return rf(nf,()=>!0,()=>!1)}ps(lf,"useIsHydratedModern");var sf=typeof rf=="function"?lf:of;var fa=require("react/jsx-runtime"),Nx=Object.defineProperty,za=(e,t)=>Nx(e,"name",{value:t,configurable:!0}),ms="rovingFocusGroup.onEntryFocus",_x={bubbles:!1,cancelable:!0},Dn="RovingFocusGroup",[hs,uf,Hx]=Na(Dn),[qx,gs]=Ve(Dn,[Hx]),[Ux,Vx]=qx(Dn),Wx=He.forwardRef(za(function(t,a){return(0,fa.jsx)(hs.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,fa.jsx)(hs.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,fa.jsx)(Gx,{...t,ref:a})})})},"RovingFocusGroup")),Gx=He.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=He.useRef(null),g=J(a,h),m=_a(l),[p,x]=Bt({prop:s,defaultProp:i??null,onChange:u,caller:Dn}),[C,L]=He.useState(!1),I=Fe(c),b=uf(o),w=He.useRef(!1),[v,R]=He.useState(0);return He.useEffect(()=>{let P=h.current;if(P)return P.addEventListener(ms,I),()=>P.removeEventListener(ms,I)},[I]),(0,fa.jsx)(Ux,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:p,onItemFocus:He.useCallback(P=>x(P),[x]),onItemShiftTab:He.useCallback(()=>L(!0),[]),onFocusableItemAdd:He.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:He.useCallback(()=>R(P=>P-1),[]),children:(0,fa.jsx)(ae.div,{tabIndex:C||v===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:W(t.onMouseDown,()=>{w.current=!0}),onFocus:W(t.onFocus,P=>{let E=!w.current;if(P.target===P.currentTarget&&E&&!C){let D=new CustomEvent(ms,_x);if(P.currentTarget.dispatchEvent(D),!D.defaultPrevented){let A=b().filter(_=>_.focusable),N=A.find(_=>_.active),q=A.find(_=>_.id===p),$=[N,q,...A].filter(Boolean).map(_=>_.ref.current);xs($,d)}}w.current=!1}),onBlur:W(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),zx="RovingFocusGroupItem",Kx=He.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=ut(),c=l||u,d=Vx(zx,o),f=d.currentTabStopId===c,h=uf(o),{onFocusableItemAdd:g,onFocusableItemRemove:m,currentTabStopId:p}=d,x=sf();return se(()=>{if(!(!x||!r))return g(),()=>m()},[x,r,g,m]),He.useEffect(()=>{if(!(x||!r))return g(),()=>m()},[x,r,g,m]),(0,fa.jsx)(hs.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,fa.jsx)(ae.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:W(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:W(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:W(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=cf(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let b=h().filter(w=>w.focusable).map(w=>w.ref.current);if(L==="last")b.reverse();else if(L==="prev"||L==="next"){L==="prev"&&b.reverse();let w=b.indexOf(C.currentTarget);b=d.loop?ff(b,w+1):b.slice(w+1)}setTimeout(()=>xs(b))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:p!=null}):s})})},"RovingFocusGroupItem")),Xx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function df(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}za(df,"getDirectionAwareKey");function cf(e,t,a){let o=df(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Xx[o]}za(cf,"getFocusIntent");function xs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}za(xs,"focusFirst");function ff(e,t){return e.map((a,o)=>e[(t+o)%e.length])}za(ff,"wrapArray");var pf=Wx,mf=Kx;var pe=require("react/jsx-runtime"),Yx=Object.defineProperty,me=(e,t)=>Yx(e,"name",{value:t,configurable:!0}),Ls=["Enter"," "],Zx=["ArrowDown","PageUp","Home"],gf=["ArrowUp","PageDown","End"],Qx=[...Zx,...gf],RS={ltr:[...Ls,"ArrowRight"],rtl:[...Ls,"ArrowLeft"]};var An="Menu",[Cs,Jx,eL]=Na(An),[Ka,vs]=Ve(An,[eL,Ao,gs]),bs=Ao(),xf=gs(),[tL,yr]=Ka(An),[aL,ws]=Ka(An),oL=me(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=bs(t),[i,u]=Z.useState(null),c=Z.useRef(!1),d=Fe(n),f=_a(r);return Z.useEffect(()=>{let h=me(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=me(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),Z.useEffect(()=>{if(!a)return;let h=me(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,pe.jsx)(yn,{...s,children:(0,pe.jsx)(tL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,pe.jsx)(aL,{scope:t,onClose:Z.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),rL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t,n=bs(o);return(0,pe.jsx)(Rn,{...n,...r,ref:a})},"MenuAnchor")),Lf="MenuPortal",[nL,lL]=Ka(Lf,{forceMount:void 0}),sL=me(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=yr(Lf,t);return(0,pe.jsx)(nL,{scope:t,forceMount:a,children:(0,pe.jsx)(jt,{present:a||n.open,children:(0,pe.jsx)(Lo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),pa="MenuContent",[iL,Cf]=Ka(pa),uL=Z.forwardRef(me(function(t,a){let o=lL(pa,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=yr(pa,t.__scopeMenu),s=ws(pa,t.__scopeMenu);return(0,pe.jsx)(Cs.Provider,{scope:t.__scopeMenu,children:(0,pe.jsx)(jt,{present:r||l.open,children:(0,pe.jsx)(Cs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,pe.jsx)(dL,{...n,ref:a}):(0,pe.jsx)(cL,{...n,ref:a})})})})},"MenuContent")),dL=Z.forwardRef(me(function(t,a){let o=yr(pa,t.__scopeMenu),r=Z.useRef(null),n=J(a,r);return Z.useEffect(()=>{let l=r.current;if(l)return yo(l)},[]),(0,pe.jsx)(If,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),cL=Z.forwardRef(me(function(t,a){let o=yr(pa,t.__scopeMenu);return(0,pe.jsx)(If,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),fL=je("MenuContent.ScrollLock"),If=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,disableOutsideScroll:m,...p}=t,x=yr(pa,o),C=ws(pa,o),L=bs(o),I=xf(o),b=Jx(o),[w,v]=Z.useState(null),R=Z.useRef(null),P=J(a,R,x.onContentChange),E=Z.useRef(0),D=Z.useRef(""),A=Z.useRef(0),N=Z.useRef(null),q=Z.useRef("right"),Y=Z.useRef(0),$=m?Aa:Z.Fragment,_=m?{as:fL,allowPinchZoom:!0}:void 0,z=me(T=>{let Le=D.current+T,X=b().filter(F=>!F.disabled),Q=document.activeElement,Ce=X.find(F=>F.ref.current===Q)?.textValue,Pe=X.map(F=>F.textValue),de=yf(Pe,Le,Ce),ke=X.find(F=>F.textValue===de)?.ref.current;me((function F(ee){D.current=ee,window.clearTimeout(E.current),ee!==""&&(E.current=window.setTimeout(()=>F(""),1e3))}),"updateSearch")(Le),ke&&setTimeout(()=>ke.focus())},"handleTypeaheadSearch");Z.useEffect(()=>()=>window.clearTimeout(E.current),[]),ua();let K=Z.useCallback(T=>q.current===N.current?.side&&Pf(T,N.current?.area),[]);return(0,pe.jsx)(iL,{scope:o,searchRef:D,onItemEnter:Z.useCallback(T=>{K(T)&&T.preventDefault()},[K]),onItemLeave:Z.useCallback(T=>{K(T)||(R.current?.focus(),v(null))},[K]),onTriggerLeave:Z.useCallback(T=>{K(T)&&T.preventDefault()},[K]),pointerGraceTimerRef:A,onPointerGraceIntentChange:Z.useCallback(T=>{N.current=T},[]),children:(0,pe.jsx)($,{..._,children:(0,pe.jsx)(xo,{asChild:!0,trapped:n,onMountAutoFocus:W(l,T=>{T.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,pe.jsx)(go,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,children:(0,pe.jsx)(pf,{asChild:!0,...I,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:w,onCurrentTabStopIdChange:v,onEntryFocus:W(u,T=>{C.isUsingKeyboardRef.current||T.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,pe.jsx)(Pn,{role:"menu","aria-orientation":"vertical","data-state":vf(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...p,ref:P,style:{outline:"none",...p.style},onKeyDown:W(p.onKeyDown,T=>{let X=T.target.closest("[data-radix-menu-content]")===T.currentTarget,Q=T.ctrlKey||T.altKey||T.metaKey,Ce=T.key.length===1;X&&(T.key==="Tab"&&T.preventDefault(),!Q&&Ce&&z(T.key));let Pe=R.current;if(T.target!==Pe||!Qx.includes(T.key))return;T.preventDefault();let ke=b().filter(F=>!F.disabled).map(F=>F.ref.current);gf.includes(T.key)&&ke.reverse(),wf(ke)}),onBlur:W(t.onBlur,T=>{T.currentTarget.contains(T.target)||(window.clearTimeout(E.current),D.current="")}),onPointerMove:W(t.onPointerMove,Mn(T=>{let Le=T.target,X=Y.current!==T.clientX;if(T.currentTarget.contains(Le)&&X){let Q=T.clientX>Y.current?"right":"left";q.current=Q,Y.current=T.clientX}}))})})})})})})},"MenuContentImpl"));var pL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(ae.div,{...r,ref:a})},"MenuLabel")),Is="MenuItem",hf="menu.itemSelect",mL=Z.forwardRef(me(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Z.useRef(null),s=ws(Is,t.__scopeMenu),i=Cf(Is,t.__scopeMenu),u=J(a,l),c=Z.useRef(!1),d=me(()=>{let f=l.current;if(!o&&f){let h=new CustomEvent(hf,{bubbles:!0,cancelable:!0});f.addEventListener(hf,g=>r?.(g),{once:!0}),cr(f,h),h.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,pe.jsx)(hL,{...n,ref:u,disabled:o,onClick:W(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:W(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:W(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||Ls.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),hL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Cf(Is,o),i=xf(o),u=Z.useRef(null),c=J(a,u),[d,f]=Z.useState(!1),[h,g]=Z.useState("");return Z.useEffect(()=>{let m=u.current;m&&g((m.textContent??"").trim())},[l.children]),(0,pe.jsx)(Cs.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,pe.jsx)(mf,{asChild:!0,...i,focusable:!r,children:(0,pe.jsx)(ae.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:W(t.onPointerMove,Mn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:W(t.onPointerLeave,Mn(m=>s.onItemLeave(m))),onFocus:W(t.onFocus,()=>f(!0)),onBlur:W(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var gL="MenuRadioGroup",[PS,kS]=Ka(gL,{value:void 0,onValueChange:me(()=>{},"onValueChange")});var xL="MenuItemIndicator",[DS,MS]=Ka(xL,{checked:!1});var LL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(ae.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var CL="MenuSub",[AS,TS]=Ka(CL);function vf(e){return e?"open":"closed"}me(vf,"getOpenState");function bf(e){return e==="indeterminate"}me(bf,"isIndeterminate");function IL(e){return bf(e)?"indeterminate":e?"checked":"unchecked"}me(IL,"getCheckedState");function wf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}me(wf,"focusFirst");function Sf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}me(Sf,"wrapArray");function yf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Sf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}me(yf,"getNextMatch");function Rf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}me(Rf,"isPointInPolygon");function Pf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Rf(a,t)}me(Pf,"isPointerInGraceArea");function Mn(e){return t=>t.pointerType==="mouse"?e(t):void 0}me(Mn,"whenMouse");var kf=oL,Df=rL,Mf=sL,Af=uL;var Tf=pL,Ef=mL;var Of=LL;var Vt=require("react/jsx-runtime"),bL=Object.defineProperty,Xa=(e,t)=>bL(e,"name",{value:t,configurable:!0}),Ss="DropdownMenu",[wL,$S]=Ve(Ss,[vs]),ja=vs(),[SL,Ff]=wL(Ss),yL=Xa(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=ja(t),u=At.useRef(null),[c,d]=Bt({prop:r,defaultProp:n??!1,onChange:l,caller:Ss});return(0,Vt.jsx)(SL,{scope:t,triggerId:ut(),triggerRef:u,contentId:ut(),open:c,onOpenChange:d,onOpenToggle:At.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,Vt.jsx)(kf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),RL="DropdownMenuTrigger",PL=At.forwardRef(Xa(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Ff(RL,o),s=ja(o),i=J(a,l.triggerRef);return(0,Vt.jsx)(Df,{asChild:!0,...s,children:(0,Vt.jsx)(ae.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:W(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:W(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),kL=Xa(e=>{let{__scopeDropdownMenu:t,...a}=e,o=ja(t);return(0,Vt.jsx)(Mf,{...o,...a})},"DropdownMenuPortal"),DL="DropdownMenuContent",ML=At.forwardRef(Xa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ff(DL,o),l=ja(o),s=At.useRef(!1);return(0,Vt.jsx)(Af,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:W(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:W(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var AL=At.forwardRef(Xa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Tf,{...n,...r,ref:a})},"DropdownMenuLabel")),TL=At.forwardRef(Xa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Ef,{...n,...r,ref:a})},"DropdownMenuItem"));var EL=At.forwardRef(Xa(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Of,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Bf=yL,Nf=PL,_f=kL,ys=ML;var Rs=AL,Ps=TL;var ks=EL;var To=require("react/jsx-runtime"),Eo=Bf,Oo=Nf;var $a=Rr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,To.jsx)(_f,{children:(0,To.jsx)(ys,{ref:o,sideOffset:t,className:te("kanban-portal kanban-dropdown-content",e),...a})}));$a.displayName=ys.displayName;var vt=Rr.forwardRef(({className:e,inset:t,...a},o)=>(0,To.jsx)(Ps,{ref:o,className:te("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));vt.displayName=Ps.displayName;var FL=Rr.forwardRef(({className:e,inset:t,...a},o)=>(0,To.jsx)(Rs,{ref:o,className:te("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));FL.displayName=Rs.displayName;var BL=Rr.forwardRef(({className:e,...t},a)=>(0,To.jsx)(ks,{ref:a,className:te("kanban-dropdown-separator",e),...t}));BL.displayName=ks.displayName;var Hf=V(require("react"),1);var qf=require("react/jsx-runtime"),Zt=Hf.forwardRef(({className:e,type:t,...a},o)=>(0,qf.jsx)("input",{type:t,className:te("kanban-input",e),ref:o,...a}));Zt.displayName="Input";var Wf=V(require("react"),1);var Uf=V(require("react"),1);var Vf=require("react/jsx-runtime"),NL=Object.defineProperty,_L=(e,t)=>NL(e,"name",{value:t,configurable:!0}),HL=Uf.forwardRef(_L(function(t,a){return(0,Vf.jsx)(ae.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Ds=HL;var Gf=require("react/jsx-runtime"),ma=Wf.forwardRef(({className:e,...t},a)=>(0,Gf.jsx)(Ds,{ref:a,className:te("kanban-label",e),...t}));ma.displayName=Ds.displayName;var ga=V(require("react"),1);var M=V(require("react"),1),Ts=V(require("react-dom"),1);var UL=Object.defineProperty,VL=(e,t)=>UL(e,"name",{value:t,configurable:!0});function Tn(e,[t,a]){return Math.min(a,Math.max(t,e))}VL(Tn,"clamp");var En=V(require("react"),1),WL=Object.defineProperty,GL=(e,t)=>WL(e,"name",{value:t,configurable:!0});function Ms(e){let t=En.useRef({value:e,previous:e});return En.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}GL(Ms,"usePrevious");var zL=V(require("react"),1);var KL=require("react/jsx-runtime");var zf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var G=require("react/jsx-runtime"),XL=Object.defineProperty,ne=(e,t)=>XL(e,"name",{value:t,configurable:!0}),jL=[" ","Enter","ArrowUp","ArrowDown"],$L=[" ","Enter"],Fo="Select",[Fn,Bn,YL]=Na(Fo),[Za,Dy]=Ve(Fo,[YL,Ao]),Es=Ao(),[ZL,ha]=Za(Fo),[QL,JL]=Za(Fo);function Yf(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:g,internal_do_not_use_render:m}=e,p=Es(t),[x,C]=M.useState(null),[L,I]=M.useState(null),[b,w]=M.useState(!1),v=_a(u),[R,P]=Bt({prop:o,defaultProp:r??!1,onChange:n,caller:Fo}),[E,D]=Bt({prop:l,defaultProp:s,onChange:i,caller:Fo}),A=M.useRef(null),N=M.useRef(E);M.useEffect(()=>{let X=g?x?.ownerDocument.getElementById(g):x?.form;if(X instanceof HTMLFormElement){let Q=ne(()=>D(N.current),"reset");return X.addEventListener("reset",Q),()=>X.removeEventListener("reset",Q)}},[g,x,D]);let q=x?!!g||!!x.closest("form"):!0,[Y,$]=M.useState(new Set),_=ut(),z=Array.from(Y).map(X=>X.props.value).join(";"),K=M.useCallback(X=>{$(Q=>new Set(Q).add(X))},[]),T=M.useCallback(X=>{$(Q=>{let Ce=new Set(Q);return Ce.delete(X),Ce})},[]),Le={required:h,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:I,valueNodeHasChildren:b,onValueNodeHasChildrenChange:w,contentId:_,value:E,onValueChange:D,open:R,onOpenChange:P,dir:v,triggerPointerDownPosRef:A,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:Y,nativeSelectKey:z,isFormControl:q};return(0,G.jsx)(yn,{...p,children:(0,G.jsx)(ZL,{scope:t,...Le,children:(0,G.jsx)(Fn.Provider,{scope:t,children:(0,G.jsx)(QL,{scope:t,onNativeOptionAdd:K,onNativeOptionRemove:T,children:sp(m)?m(Le):a})})})})}ne(Yf,"SelectProvider");var Zf=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,G.jsx)(Yf,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,G.jsxs)(G.Fragment,{children:[a,r?(0,G.jsx)(gC,{__scopeSelect:t}):null]})})},"Select"),eC="SelectTrigger",Os=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Es(o),s=ha(eC,o),i=s.disabled||r,u=J(a,s.onTriggerChange),c=Bn(o),d=M.useRef("touch"),[f,h,g]=Vs(p=>{let x=c().filter(I=>!I.disabled),C=x.find(I=>I.value===s.value),L=Ws(x,p,C);L!==void 0&&s.onValueChange(L.value)}),m=ne(p=>{i||(s.onOpenChange(!0),g()),p&&(s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})},"handleOpen");return(0,G.jsx)(Rn,{asChild:!0,...l,children:(0,G.jsx)(ae.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Pr(s.value)?"":void 0,...n,ref:u,onClick:W(n.onClick,p=>{p.currentTarget.focus(),d.current!=="mouse"&&m(p)}),onPointerDown:W(n.onPointerDown,p=>{d.current=p.pointerType;let x=p.target;x.hasPointerCapture(p.pointerId)&&x.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(m(p),p.preventDefault())}),onKeyDown:W(n.onKeyDown,p=>{let x=f.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&h(p.key),!(x&&p.key===" ")&&jL.includes(p.key)&&(m(),p.preventDefault())})})})},"SelectTrigger")),tC="SelectValue",Qf=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=ha(tC,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=J(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let h=Pr(u.value);return(0,G.jsx)(ae.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,G.jsx)(M.Fragment,{children:h?s:l},h?"placeholder":"value")})},"SelectValue")),Jf=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,G.jsx)(ae.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),aC="SelectPortal",[oC,rC]=Za(aC,{forceMount:void 0}),ep=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,G.jsx)(oC,{scope:e.__scopeSelect,forceMount:a,children:(0,G.jsx)(Lo,{asChild:!0,...o})})},"SelectPortal"),Ya="SelectContent",Fs=M.forwardRef(ne(function(t,a){let o=rC(Ya,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=ha(Ya,t.__scopeSelect),[s,i]=M.useState();return se(()=>{i(new DocumentFragment)},[]),(0,G.jsx)(jt,{present:r||l.open,children:({present:u})=>u?(0,G.jsx)(sC,{...n,ref:a}):(0,G.jsx)(nC,{...n,fragment:s})})},"SelectContent")),nC=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ts.createPortal((0,G.jsx)(tp,{scope:o,children:(0,G.jsx)(Fn.Slot,{scope:o,children:(0,G.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Tt=10,[tp,Qa]=Za(Ya),lC=je("SelectContent.RemoveScroll"),sC=M.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:m,hideWhenDetached:p,avoidCollisions:x,...C}=t,L=ha(Ya,o),[I,b]=M.useState(null),[w,v]=M.useState(null),R=J(a,b),[P,E]=M.useState(null),[D,A]=M.useState(null),N=Bn(o),[q,Y]=M.useState(!1),$=M.useRef(!1);M.useEffect(()=>{if(I)return yo(I)},[I]),ua();let _=M.useCallback(F=>{let[ee,...j]=N().map(S=>S.ref.current),[le]=j.slice(-1),oe=document.activeElement;for(let S of F)if(S===oe||(S?.scrollIntoView({block:"nearest"}),S===ee&&w&&(w.scrollTop=0),S===le&&w&&(w.scrollTop=w.scrollHeight),S?.focus(),document.activeElement!==oe))return},[N,w]),z=M.useCallback(()=>_([P,I]),[_,P,I]);M.useEffect(()=>{q&&z()},[q,z]);let{onOpenChange:K,triggerPointerDownPosRef:T}=L;M.useEffect(()=>{if(I){let F={x:0,y:0},ee=ne(le=>{F={x:Math.abs(Math.round(le.pageX)-(T.current?.x??0)),y:Math.abs(Math.round(le.pageY)-(T.current?.y??0))}},"handlePointerMove"),j=ne(le=>{F.x<=10&&F.y<=10?le.preventDefault():le.composedPath().includes(I)||K(!1),document.removeEventListener("pointermove",ee),T.current=null},"handlePointerUp");return T.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",j,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",j,{capture:!0})}}},[I,K,T]),M.useEffect(()=>{let F=ne(()=>K(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[K]);let[Le,X]=Vs(F=>{let ee=N().filter(oe=>!oe.disabled),j=ee.find(oe=>oe.ref.current===document.activeElement),le=Ws(ee,F,j);le&&setTimeout(()=>le.ref.current?.focus())}),Q=M.useCallback((F,ee,j)=>{let le=!$.current&&!j;(L.value!==void 0&&L.value===ee||le)&&(E(F),le&&($.current=!0))},[L.value]),Ce=M.useCallback(()=>I?.focus(),[I]),Pe=M.useCallback((F,ee,j)=>{let le=!$.current&&!j;(L.value!==void 0&&L.value===ee||le)&&A(F)},[L.value]),de=r==="popper"?Kf:iC,ke=de===Kf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:m,hideWhenDetached:p,avoidCollisions:x}:{};return(0,G.jsx)(tp,{scope:o,content:I,viewport:w,onViewportChange:v,itemRefCallback:Q,selectedItem:P,onItemLeave:Ce,itemTextRefCallback:Pe,focusSelectedItem:z,selectedItemText:D,position:r,isPositioned:q,searchRef:Le,children:(0,G.jsx)(Aa,{as:lC,allowPinchZoom:!0,children:(0,G.jsx)(xo,{asChild:!0,trapped:L.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:W(n,F=>{L.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,G.jsx)(go,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,G.jsx)(de,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:F=>F.preventDefault(),...C,...ke,onPlaced:()=>Y(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:W(C.onKeyDown,F=>{let ee=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!ee&&F.key.length===1&&X(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let le=N().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);if(["ArrowUp","End"].includes(F.key)&&(le=le.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let oe=F.target,S=le.indexOf(oe);le=le.slice(S+1)}setTimeout(()=>_(le)),F.preventDefault()}})})})})})})},"SelectContentImpl")),iC=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=ha(Ya,o),s=Qa(Ya,o),[i,u]=M.useState(null),[c,d]=M.useState(null),f=J(a,d),h=Bn(o),g=M.useRef(!1),m=M.useRef(!0),{viewport:p,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=s,I=M.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&p&&x&&C){let R=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),E=l.valueNode.getBoundingClientRect(),D=C.getBoundingClientRect();if(l.dir!=="rtl"){let oe=D.left-P.left,S=E.left-oe,k=R.left-S,O=R.width+k,U=Math.max(O,P.width),ve=window.innerWidth-Tt,ie=Tn(S,[Tt,Math.max(Tt,ve-U)]);i.style.minWidth=O+"px",i.style.left=ie+"px"}else{let oe=P.right-D.right,S=window.innerWidth-E.right-oe,k=window.innerWidth-R.right-S,O=R.width+k,U=Math.max(O,P.width),ve=window.innerWidth-Tt,ie=Tn(S,[Tt,Math.max(Tt,ve-U)]);i.style.minWidth=O+"px",i.style.right=ie+"px"}let A=h(),N=window.innerHeight-Tt*2,q=p.scrollHeight,Y=window.getComputedStyle(c),$=parseInt(Y.borderTopWidth,10),_=parseInt(Y.paddingTop,10),z=parseInt(Y.borderBottomWidth,10),K=parseInt(Y.paddingBottom,10),T=$+_+q+K+z,Le=Math.min(x.offsetHeight*5,T),X=window.getComputedStyle(p),Q=parseInt(X.paddingTop,10),Ce=parseInt(X.paddingBottom,10),Pe=R.top+R.height/2-Tt,de=N-Pe,ke=x.offsetHeight/2,F=x.offsetTop+ke,ee=$+_+F,j=T-ee;if(ee<=Pe){let oe=A.length>0&&x===A[A.length-1].ref.current;i.style.bottom="0px";let S=c.clientHeight-p.offsetTop-p.offsetHeight,k=Math.max(de,ke+(oe?Ce:0)+S+z),O=ee+k;i.style.height=O+"px"}else{let oe=A.length>0&&x===A[0].ref.current;i.style.top="0px";let k=Math.max(Pe,$+p.offsetTop+(oe?Q:0)+ke)+j;i.style.height=k+"px",p.scrollTop=ee-Pe+p.offsetTop}i.style.margin=`${Tt}px 0`,i.style.minHeight=Le+"px",i.style.maxHeight=N+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[h,l.trigger,l.valueNode,i,c,p,x,C,l.dir,r]);se(()=>I(),[I]);let[b,w]=M.useState();se(()=>{c&&w(window.getComputedStyle(c).zIndex)},[c]);let v=M.useCallback(R=>{R&&m.current===!0&&(I(),L?.(),m.current=!1)},[I,L]);return(0,G.jsx)(uC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:v,children:(0,G.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:b},children:(0,G.jsx)(ae.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Kf=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Tt,...l}=t,s=Es(o);return(0,G.jsx)(Pn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[uC,Bs]=Za(Ya,{}),Xf="SelectViewport",ap=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=Qa(Xf,o),s=Bs(Xf,o),i=J(a,l.onViewportChange),u=M.useRef(0);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,G.jsx)(Fn.Slot,{scope:o,children:(0,G.jsx)(ae.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:W(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let m=window.innerHeight-Tt*2,p=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(p,x);if(C<m){let L=C+g,I=Math.min(m,L),b=L-I;f.style.height=I+"px",f.style.bottom==="0px"&&(d.scrollTop=b>0?b:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),dC="SelectGroup",[My,cC]=Za(dC);var fC="SelectLabel",Ns=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=cC(fC,o);return(0,G.jsx)(ae.div,{id:n.id,...r,ref:a})},"SelectLabel")),As="SelectItem",[pC,op]=Za(As),_s=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=ha(As,o),u=Qa(As,o),c=i.value===r,[d,f]=M.useState(l??""),[h,g]=M.useState(!1),m=Fe(I=>u.itemRefCallback?.(I,r,n)),p=J(a,m),x=ut(),C=M.useRef("touch"),L=ne(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,G.jsx)(pC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:M.useCallback(I=>{f(b=>b||(I?.textContent??"").trim())},[]),children:(0,G.jsx)(Fn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,G.jsx)(ae.div,{role:"option","aria-labelledby":x,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:p,onFocus:W(s.onFocus,()=>g(!0)),onBlur:W(s.onBlur,()=>g(!1)),onClick:W(s.onClick,()=>{C.current!=="mouse"&&L()}),onPointerUp:W(s.onPointerUp,()=>{C.current==="mouse"&&L()}),onPointerDown:W(s.onPointerDown,I=>{C.current=I.pointerType}),onPointerMove:W(s.onPointerMove,I=>{C.current=I.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&I.currentTarget.focus({preventScroll:!0})}),onPointerLeave:W(s.onPointerLeave,I=>{I.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:W(s.onKeyDown,I=>{n||I.target!==I.currentTarget||u.searchRef?.current!==""&&I.key===" "||($L.includes(I.key)&&L(),I.key===" "&&I.preventDefault())})})})})},"SelectItem")),On="SelectItemText",rp=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=ha(On,o),i=Qa(On,o),u=op(On,o),c=JL(On,o),[d,f]=M.useState(null),h=Fe(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),g=J(a,f,u.onItemTextChange,h),m=d?.textContent,p=M.useMemo(()=>(0,G.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return se(()=>(x(p),()=>C(p)),[x,C,p]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ae.span,{id:u.textId,...l,ref:g}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Pr(s.value)?Ts.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),mC="SelectItemIndicator",np=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return op(mC,o).isSelected?(0,G.jsx)(ae.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),jf="SelectScrollUpButton",Hs=M.forwardRef(ne(function(t,a){let o=Qa(jf,t.__scopeSelect),r=Bs(jf,t.__scopeSelect),[n,l]=M.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,G.jsx)(lp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),$f="SelectScrollDownButton",qs=M.forwardRef(ne(function(t,a){let o=Qa($f,t.__scopeSelect),r=Bs($f,t.__scopeSelect),[n,l]=M.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,G.jsx)(lp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),lp=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=Qa("SelectScrollButton",o),s=M.useRef(null),i=Bn(o),u=M.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return M.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,G.jsx)(ae.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:W(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:W(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:W(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Us=M.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,G.jsx)(ae.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var hC="SelectBubbleInput",gC=M.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=ha(hC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,g=M.useRef(null),m=J(o,g),p=n??"",x=Ms(p),C=Array.from(f).some(L=>(L.props.value??"")==="");return M.useEffect(()=>{let L=g.current;if(!L)return;let I=window.HTMLSelectElement.prototype,w=Object.getOwnPropertyDescriptor(I,"value").set;if(x!==p&&w){let v=new Event("change",{bubbles:!0});w.call(L,p),L.dispatchEvent(v)}},[x,p]),(0,G.jsxs)(ae.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>l(L.target.value),...a,style:{...zf,...a.style},ref:m,defaultValue:p,children:[Pr(n)&&!C?(0,G.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function sp(e){return typeof e=="function"}ne(sp,"isFunction");function Pr(e){return e===""||e===void 0}ne(Pr,"shouldShowPlaceholder");function Vs(e){let t=Fe(e),a=M.useRef(""),o=M.useRef(0),r=M.useCallback(l=>{let s=a.current+l;t(s),ne((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=M.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return M.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Vs,"useTypeaheadSearch");function Ws(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=ip(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(Ws,"findNextItem");function ip(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(ip,"wrapArray");var ye=require("react/jsx-runtime"),Gs=Zf;var zs=Qf,Nn=ga.forwardRef(({className:e,children:t,...a},o)=>(0,ye.jsxs)(Os,{ref:o,className:te("kanban-select-trigger",e),...a,children:[t,(0,ye.jsx)(Jf,{asChild:!0,children:(0,ye.jsx)(co,{className:"kanban-select-icon"})})]}));Nn.displayName=Os.displayName;var up=ga.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Hs,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,ye.jsx)(or,{className:"kanban-select-scroll-icon"})}));up.displayName=Hs.displayName;var dp=ga.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(qs,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,ye.jsx)(co,{className:"kanban-select-scroll-icon"})}));dp.displayName=qs.displayName;var _n=ga.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,ye.jsx)(ep,{children:(0,ye.jsxs)(Fs,{ref:r,className:te("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,ye.jsx)(up,{}),(0,ye.jsx)(ap,{className:te("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,ye.jsx)(dp,{})]})}));_n.displayName=Fs.displayName;var LC=ga.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Ns,{ref:a,className:te("kanban-select-label",e),...t}));LC.displayName=Ns.displayName;var Bo=ga.forwardRef(({className:e,children:t,...a},o)=>(0,ye.jsxs)(_s,{ref:o,className:te("kanban-select-item",e),...a,children:[(0,ye.jsx)("span",{className:"kanban-select-item-indicator",children:(0,ye.jsx)(np,{children:(0,ye.jsx)(wt,{className:"kanban-select-check"})})}),(0,ye.jsx)(rp,{children:t})]}));Bo.displayName=_s.displayName;var CC=ga.forwardRef(({className:e,...t},a)=>(0,ye.jsx)(Us,{ref:a,className:te("kanban-select-separator",e),...t}));CC.displayName=Us.displayName;var cp=V(require("react"),1);var fp=require("react/jsx-runtime"),Hn=cp.forwardRef(({className:e,...t},a)=>(0,fp.jsx)("textarea",{className:te("kanban-textarea",e),ref:a,...t}));Hn.displayName="Textarea";var Qt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},qn=["high","medium","low"],pp="var(--dsw-alias-label-tertiary)";function mp(e,t){return t?e.find(a=>a.name===t)?.color??pp:pp}var Ze=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Ks=e=>e==="high"||e==="medium"||e==="low"?Qt[e].label:"";function hp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Ks(a.priority)||o;return Ze(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ze(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ze(t("actLabelSet"),{to:n}):r!=null&&n==null?Ze(t("actLabelCleared"),{from:r}):Ze(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Ks(r)||r:o,s=n?Ks(n)||n:o;return r==null&&n!=null?Ze(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ze(t("actPriorityCleared"),{from:l}):Ze(t("actPriority"),{from:l,to:s})}case"card_title_changed":return Ze(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return Ze(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ze(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ze(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ze(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ze(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ze(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ze(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Un=e=>String(e).padStart(2,"0");function kr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Un(t.getMonth()+1)}-${Un(t.getDate())} ${Un(t.getHours())}:${Un(t.getMinutes())}`}var Jt=require("react/jsx-runtime");function gp({activities:e}){let t=Ne();if(e.length===0)return(0,Jt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Jt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Jt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Jt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Jt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Jt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",hp(o,t)]}),(0,Jt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:kr(o.ts),children:kr(o.ts)})]},o.id)})})}var B=require("react/jsx-runtime");function xp({open:e,card:t,labels:a,comments:o,activities:r,onOpenChange:n,onSave:l,onAddComment:s,onDelete:i,onChatWithAgent:u}){let c=Ne(),d=(0,Et.useId)(),f=(0,Et.useRef)(null),[h,g]=(0,Et.useState)({id:"",title:"",note:"",label:"",priority:""}),[m,p]=(0,Et.useState)(""),[x,C]=(0,Et.useState)(!1),[L,I]=(0,Et.useState)(!1);(0,Et.useEffect)(()=>{e&&(g({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""}),p(""))},[e,t]);let b=v=>g(R=>({...R,...v})),w=async()=>{let v=m.trim();if(!t||!v||v.length>2e3||L)return;I(!0);let R=await s(t.id,v);I(!1),R!==!1&&p("")};return(0,B.jsx)(Po,{open:e,onOpenChange:n,children:(0,B.jsxs)(Ea,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:()=>{f.current=document.activeElement instanceof HTMLElement?document.activeElement:null},onCloseAutoFocus:v=>{f.current?.isConnected&&(v.preventDefault(),f.current.focus())},children:[(0,B.jsx)(Oa,{children:(0,B.jsx)(Fa,{className:"kanban-sr-only",children:c(t?"editCard":"addCard")})}),(0,B.jsxs)("div",{className:"kanban-form-stack",children:[(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsxs)(ma,{htmlFor:`${d}-title`,className:"kanban-field-label",children:[(0,B.jsx)("span",{children:c("fieldTitle")}),t&&(0,B.jsxs)("span",{className:"kanban-field-id",children:[c("fieldId"),": ",t.id]})]}),(0,B.jsx)(Zt,{id:`${d}-title`,value:h.title,placeholder:c("titlePlaceholder"),maxLength:120,onChange:v=>b({title:v.target.value})})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(ma,{htmlFor:`${d}-label`,children:c("fieldLabel")}),(0,B.jsxs)(Gs,{value:h.label||"__none__",onValueChange:v=>b({label:v==="__none__"?"":v}),children:[(0,B.jsx)(Nn,{id:`${d}-label`,children:(0,B.jsx)(zs,{placeholder:c("noLabel")})}),(0,B.jsxs)(_n,{children:[(0,B.jsx)(Bo,{value:"__none__",children:c("noLabel")}),a.map(v=>(0,B.jsx)(Bo,{value:v.name,children:v.name},v.name))]})]})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(ma,{htmlFor:`${d}-priority`,children:c("fieldPriority")}),(0,B.jsxs)(Gs,{value:h.priority||"__none__",onValueChange:v=>b({priority:v==="__none__"?"":v}),children:[(0,B.jsx)(Nn,{id:`${d}-priority`,children:(0,B.jsx)(zs,{placeholder:c("noPriority")})}),(0,B.jsxs)(_n,{children:[(0,B.jsx)(Bo,{value:"__none__",children:c("noPriority")}),qn.map(v=>{let R=Qt[v];return(0,B.jsx)(Bo,{value:v,children:(0,B.jsxs)("span",{className:"kanban-inline-priority",children:[(0,B.jsx)("span",{className:"kanban-priority-dot",style:{background:R.color}}),R.label]})},v)})]})]})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(ma,{htmlFor:`${d}-note`,children:c("fieldNote")}),(0,B.jsx)(Hn,{id:`${d}-note`,value:h.note,placeholder:c("notePlaceholder"),rows:5,maxLength:2e3,onChange:v=>b({note:v.target.value})})]}),t&&(0,B.jsxs)("div",{className:"kanban-comments-box",children:[(0,B.jsxs)(ma,{htmlFor:`${d}-comment`,children:[c("commentsTitle")," ",(0,B.jsxs)("span",{className:"kanban-tabular",children:["(",o.length,")"]})]}),(0,B.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:o.length===0?(0,B.jsx)("p",{className:"kanban-muted-small",children:c("commentEmpty")}):(0,B.jsx)("ol",{className:"kanban-comment-list",children:o.map(v=>{let R=v.source==="agent";return(0,B.jsxs)("li",{className:"kanban-comment-item",children:[(0,B.jsxs)("div",{className:"kanban-comment-meta",children:[(0,B.jsx)("span",{className:`kanban-activity-actor ${R?"is-agent":"is-human"}`,children:c(R?"actorAgent":"actorHuman")}),(0,B.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:v.createdAt,children:kr(v.createdAt)})]}),(0,B.jsx)("p",{className:"kanban-comment-content",children:v.content})]},v.id)})})}),(0,B.jsxs)("div",{className:"kanban-comment-composer",children:[(0,B.jsx)(Hn,{id:`${d}-comment`,value:m,placeholder:c("commentPlaceholder"),rows:3,maxLength:2e3,disabled:L,onChange:v=>p(v.target.value),onKeyDown:v=>{(v.metaKey||v.ctrlKey)&&v.key==="Enter"&&(v.preventDefault(),w())}}),(0,B.jsxs)(De,{type:"button",variant:"outline",disabled:L||!m.trim(),onClick:()=>{w()},children:[(0,B.jsx)(sr,{className:"kanban-icon"}),c("sendComment")]})]})]}),t&&(0,B.jsxs)("div",{className:"kanban-activity-box",children:[(0,B.jsx)(ma,{className:"kanban-muted-small",children:c("activityTitle")}),(0,B.jsx)("div",{className:"kanban-activity-scroll",children:(0,B.jsx)(gp,{activities:r})})]})]}),(0,B.jsxs)(xr,{children:[t&&i&&(0,B.jsxs)(De,{variant:"outline",className:"kanban-dialog-delete",disabled:x,onClick:async()=>{C(!0);let v=await i(t);C(!1),v!==!1&&n(!1)},children:[(0,B.jsx)(ht,{className:"kanban-icon"}),c("delete")]}),(0,B.jsxs)(Eo,{children:[(0,B.jsx)(Oo,{asChild:!0,children:(0,B.jsxs)(De,{variant:"outline",disabled:!h.title.trim()&&!h.note.trim(),children:[(0,B.jsx)(Pa,{className:"kanban-icon"}),c("chatWithAgent")]})}),(0,B.jsxs)($a,{align:"end",children:[(0,B.jsx)(vt,{onClick:()=>{u(h,"current"),n(!1)},children:c("chatCurrentSession")}),(0,B.jsx)(vt,{onClick:()=>{u(h,"new"),n(!1)},children:c("chatNewSession")})]})]}),(0,B.jsx)(De,{variant:"outline",disabled:x||!h.title.trim(),onClick:async()=>{C(!0);let v=await l(h);C(!1),v!==!1&&n(!1)},children:c("save")})]})]})})}var Cp=require("react");var Lp=require("react/jsx-runtime");function IC({variant:e,className:t}={}){return te("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Xs({className:e,variant:t,...a}){return(0,Lp.jsx)("div",{className:IC({variant:t,className:e}),...a})}var Ja=V(require("react"),1);var eo=require("react/jsx-runtime"),js=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-card",e),...t}));js.displayName="Card";var vC=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-card-header",e),...t}));vC.displayName="CardHeader";var bC=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-ui-card-title",e),...t}));bC.displayName="CardTitle";var wC=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-card-description",e),...t}));wC.displayName="CardDescription";var $s=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-card-content",e),...t}));$s.displayName="CardContent";var SC=Ja.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:te("kanban-card-footer",e),...t}));SC.displayName="CardFooter";var Ge=require("react/jsx-runtime");function Ys({card:e,labels:t}){let a=Ne(),o=e.priority?Qt[e.priority]:null,r=mp(t,e.label);return(0,Ge.jsx)(js,{className:"kanban-card",children:(0,Ge.jsxs)($s,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,Ge.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Ge.jsxs)(Xs,{variant:"secondary",className:"kanban-card-badge",children:[(0,Ge.jsx)("span",{className:"kanban-label-dot",style:{background:r},"aria-hidden":"true"}),e.label]}),o&&(0,Ge.jsxs)(Xs,{variant:"secondary",className:"kanban-card-badge",children:[(0,Ge.jsx)("span",{className:"kanban-label-dot",style:{background:o.color},"aria-hidden":"true"}),o.label]})]}),(0,Ge.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Ge.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,Ge.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,Ge.jsx)(Pa,{"aria-hidden":"true"}),(0,Ge.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function Ip({card:e,labels:t,onOpen:a}){let o=Ne(),r=(0,Cp.useId)(),{attributes:n,listeners:l,setNodeRef:s,transform:i,transition:u,isDragging:c}=jr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Ge.jsxs)("div",{ref:s,style:{transform:st.Transform.toString(i),transition:u},...n,...l,"aria-label":e.title,"aria-describedby":r,onKeyDown:d=>{d.key==="Enter"&&!c?(d.preventDefault(),a(e)):l?.onKeyDown?.(d)},onClick:d=>{d.currentTarget.focus(),a(e)},className:`kanban-sortable-card${c?" is-dragging":""}`,children:[(0,Ge.jsx)("span",{id:r,className:"kanban-sr-only",children:o("cardKeyboardHelp")}),(0,Ge.jsx)(Ys,{card:e,labels:t})]})}var ft=require("react/jsx-runtime");function vp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Vr({id:e.id,data:{type:"column"}}),{active:s,over:i}=er(),u=Ne(),c=s?.data.current?.type==="card"&&(l||i?.data.current?.columnId===e.id);return(0,ft.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ft.jsxs)("div",{className:"kanban-column-header",children:[(0,ft.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ft.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ft.jsxs)("div",{className:"kanban-column-cards",children:[(0,ft.jsx)(Xr,{items:t.map(d=>d.id),strategy:Kr,children:t.map(d=>(0,ft.jsx)(Ip,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ft.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ft.jsx)("div",{className:"kanban-column-footer",children:(0,ft.jsxs)(De,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ft.jsx)(zt,{className:"kanban-icon"}),u("addCard")]})})]})}var Dr=require("react");var Re=require("react/jsx-runtime");function yC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=jr({id:e.id}),d=Ne();return(0,Re.jsxs)("div",{ref:i,style:{transform:st.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,Re.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":`${d("dragSort")}: ${e.title}`,children:(0,Re.jsx)(rr,{className:"kanban-icon"})}),(0,Re.jsx)(Zt,{"aria-label":`${d("columnName")}: ${e.title}`,value:t,maxLength:40,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,Re.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${d("delete")}: ${e.title}`,disabled:!n,onClick:r,children:(0,Re.jsx)(ht,{className:"kanban-icon"})})]})}function bp({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=Ne(),[i,u]=(0,Dr.useState)({}),[c,d]=(0,Dr.useState)(""),f=Nr(io(la,{activationConstraint:{distance:8}}),io(na,{coordinateGetter:$r}));(0,Dr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let h=m=>{let p=(i[m]??"").trim(),x=t.find(C=>C.id===m);x&&p&&p!==x.title&&r(m,p)},g=m=>{let{active:p,over:x}=m;x&&p.id!==x.id&&o(String(p.id),String(x.id))};return(0,Re.jsx)(Po,{open:e,onOpenChange:a,children:(0,Re.jsxs)(Ea,{className:"kanban-dialog-medium",children:[(0,Re.jsxs)(Oa,{children:[(0,Re.jsx)(Fa,{children:s("columnEdit")}),(0,Re.jsx)(Lr,{children:s("columnEditDesc")})]}),(0,Re.jsx)(Ur,{sensors:f,collisionDetection:Mi,onDragEnd:g,children:(0,Re.jsx)(Xr,{items:t.map(m=>m.id),strategy:Kr,children:(0,Re.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,Re.jsx)(yC,{column:m,value:i[m.id]??m.title,onValueChange:p=>u(x=>({...x,[m.id]:p})),onCommit:()=>h(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,Re.jsxs)("div",{className:"kanban-sortable-row",children:[(0,Re.jsx)(Zt,{value:c,placeholder:s("newColumnPlaceholder"),"aria-label":s("newColumnPlaceholder"),maxLength:40,onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,Re.jsxs)(De,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,Re.jsx)(zt,{className:"kanban-icon"}),s("add")]})]})]})})}var No=require("react");var Ee=require("react/jsx-runtime");function wp({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=Ne(),[s,i]=(0,No.useState)({}),[u,c]=(0,No.useState)(""),[d,f]=(0,No.useState)("#38bdf8");(0,No.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(g=>[g.name,{name:g.name,color:g.color}]))),c(""),f("#38bdf8"))},[e]);let h=g=>{let m=s[g];if(!m)return;let p=t.find(C=>C.name===g),x=m.name.trim();p&&x&&(x!==g||m.color!==p.color)&&r(g,x,m.color)};return(0,Ee.jsx)(Po,{open:e,onOpenChange:a,children:(0,Ee.jsxs)(Ea,{className:"kanban-dialog-medium",children:[(0,Ee.jsxs)(Oa,{children:[(0,Ee.jsx)(Fa,{children:l("labelEdit")}),(0,Ee.jsx)(Lr,{children:l("labelEditDesc")})]}),(0,Ee.jsx)("div",{className:"kanban-label-list",children:t.map(g=>{let m=s[g.name]??{name:g.name,color:g.color};return(0,Ee.jsxs)("div",{className:"kanban-label-row",children:[(0,Ee.jsx)("input",{type:"color","aria-label":`${l("labelColor")}: ${g.name}`,value:m.color,className:"kanban-color-input",onChange:p=>i(x=>({...x,[g.name]:{...m,color:p.target.value}})),onBlur:()=>h(g.name)}),(0,Ee.jsx)(Zt,{"aria-label":`${l("labelName")}: ${g.name}`,value:m.name,maxLength:20,onChange:p=>i(x=>({...x,[g.name]:{...m,name:p.target.value}})),onBlur:()=>h(g.name),onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,Ee.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${l("deleteLabel")}: ${g.name}`,onClick:()=>n(g.name),children:(0,Ee.jsx)(ht,{className:"kanban-icon"})})]},g.name)})}),(0,Ee.jsx)(xr,{className:"kanban-dialog-footer-layout",children:(0,Ee.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Ee.jsx)("input",{type:"color","aria-label":l("newLabelColor"),value:d,className:"kanban-color-input",onChange:g=>f(g.target.value)}),(0,Ee.jsx)(Zt,{value:u,placeholder:l("newLabelPlaceholder"),"aria-label":l("newLabelPlaceholder"),maxLength:20,onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Ee.jsxs)(De,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Ee.jsx)(zt,{className:"kanban-icon"}),l("add")]})]})})]})})}function Vn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Zs=new Map,Qs=0,Wn=new Set;function Sp(e,t){Zs.set(e,t),Qs++;for(let a of Wn)a()}function yp(e){let t=Zs.get(e);if(t==null)return null;Zs.delete(e),Qs++;for(let a of Wn)a();return t}function Rp(e){return Wn.add(e),()=>{Wn.delete(e)}}function Pp(){return Qs}function kp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Ro("fieldId")+": "+t),a&&n.push(a),r&&n.push(Ro("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var H=require("react/jsx-runtime");function Dp(e,t,a,o,r){let n=e.find(p=>p.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(p=>p.columnId===n.columnId).findIndex(p=>p.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(p=>p.id!==t),i=s.filter(p=>p.columnId===a),u=o?i.findIndex(p=>p.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],h=i[i.length-1],g=f?d.indexOf(f):h?d.indexOf(h)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((p,x)=>p.id===e[x]?.id&&p.columnId===e[x]?.columnId)?e:d,toIndex:c}}function Mp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(S=>S.items):[],l=Array.isArray(n)?n.find(S=>Array.isArray(S.sessionIds)&&S.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=Ne(),[u,c]=(0,ue.useState)(null),[d,f]=(0,ue.useState)(""),[h,g]=(0,ue.useState)([]),[m,p]=(0,ue.useState)(null),[x,C]=(0,ue.useState)(null),[L,I]=(0,ue.useState)(!1),[b,w]=(0,ue.useState)(!1),[v,R]=(0,ue.useState)(!1),[P,E]=(0,ue.useState)(""),[D,A]=(0,ue.useState)(null),N=(0,ue.useRef)(null),q=(0,ue.useRef)(u),Y=(0,ue.useRef)(null),$=(0,ue.useRef)(s),_=(0,ue.useRef)(0),z=(0,ue.useRef)(0);q.current=u,$.current=s;let[K,T]=(0,ue.useState)(null),Le=Nr(io(la,{activationConstraint:{distance:8}}),io(na,{coordinateGetter:$r})),X=(0,ue.useCallback)((S,k,O)=>{$.current!==k||O<z.current||(z.current=O,S&&S.board&&(c({...S.board,cards:Array.isArray(S.board.cards)?S.board.cards.map(U=>({...U,comments:Array.isArray(U.comments)?U.comments:[]})):[],activities:Array.isArray(S.board.activities)?S.board.activities:[]}),f("")),Array.isArray(S&&S.warnings)&&S.warnings.length>0&&g(U=>[...U,...S.warnings]))},[]),Q=(0,ue.useCallback)(async(S,k={})=>{let O=++_.current;try{let U=await Vn(S,k,s);return X(U,s,O),!0}catch(U){return f(i("actionFailed")+String(U&&U.message||U)),!1}},[s,X,i]),Ce=(0,ue.useCallback)(()=>{let S=++_.current;R(!0),Vn("get",{},s).then(k=>X(k,s,S)).catch(k=>f(i("loadFailed")+String(k&&k.message||k))).finally(()=>R(!1))},[s,X,i]);(0,ue.useEffect)(()=>{let S=!0,k=++_.current;return c(null),A(null),C(null),p(null),f(""),g([]),Vn("get",{},s).then(O=>{S&&X(O,s,k)}).catch(O=>{S&&f(i("loadFailed")+String(O&&O.message||O))}),()=>{S=!1}},[s,X,i]),(0,ue.useEffect)(()=>{u&&A(S=>S&&!u.labels.some(k=>k.name===S)?null:S)},[u?.labels]),(0,ue.useLayoutEffect)(()=>{let S=ve=>{let ie=ve;for(;ie;){let xe=getComputedStyle(ie).overflowY;if(xe==="auto"||xe==="scroll")return ie;ie=ie.parentElement}return null},k=()=>{let ve=N.current;if(!ve)return;let ie=S(ve.parentElement),xe=ve.getBoundingClientRect().top+(ie?.scrollTop??0),Ie=window.innerHeight;if(ie){let ot=ie.querySelector("[data-composer-seat]"),Qe=ot?ot.getBoundingClientRect().top:0;ot&&ot.offsetHeight>0&&Qe>xe?Ie=Qe:Ie=ie.getBoundingClientRect().bottom}T(Math.max(0,Math.floor(Ie-xe)))};k();let O=S(N.current?.parentElement??null),U=new ResizeObserver(k);if(U.observe(document.documentElement),O){U.observe(O);let ve=O.querySelector("[data-composer-seat]");ve&&U.observe(ve)}return window.addEventListener("resize",k),()=>{U.disconnect(),window.removeEventListener("resize",k)}},[u!==null]);let Pe=(0,ue.useCallback)(S=>{let k=Ai(S),O=k.length>0?k:il(S),U=Zo(O,"id");if(U==null)return[];if(new Set((u?.columns??[]).map(ie=>ie.id)).has(String(U))){let ie=(u?.cards??[]).filter(xe=>xe.columnId===U).map(xe=>xe.id);if(ie.length>0){let xe=_r({...S,droppableContainers:S.droppableContainers.filter(Ie=>Ie.id!==U&&ie.includes(String(Ie.id)))});xe.length>0&&(U=xe[0].id)}}return[{id:U}]},[u]),de=S=>{let k=q.current;if(!k||k.cards===S)return;let O={...k,cards:S};q.current=O,c(O)},ke=S=>{if(S.active.data.current?.type!=="card")return;let k=q.current,O=k?.cards.find(U=>U.id===S.active.id);!O||!k||(Y.current=k.cards,p(O))},F=({active:S,over:k})=>{let O=q.current;if(!k||!O||S.data.current?.type!=="card")return;let U=String(S.id),ve=O.cards.find(Qe=>Qe.id===U),ie=O.cards.find(Qe=>Qe.id===k.id),xe=ie?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!ve||!xe||ve.columnId===xe)return;let Ie=S.rect.current.translated,ot=!!(ie&&Ie&&Ie.top+Ie.height/2>k.rect.top+k.rect.height/2);de(Dp(O.cards,U,xe,ie?.id??null,ot).cards)},ee=({active:S,over:k})=>{let O=q.current,U=Y.current;if(Y.current=null,!k||!O||S.data.current?.type!=="card"){U&&de(U),p(null);return}let ve=String(S.id),ie=O.cards.find(Wt=>Wt.id===k.id),xe=ie?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!xe){U&&de(U),p(null);return}let Ie=S.rect.current.translated,ot=!!(ie&&Ie&&Ie.top+Ie.height/2>k.rect.top+k.rect.height/2),Qe=Dp(O.cards,ve,xe,ie?.id??null,ot);de(Qe.cards),p(null),(!U||Qe.cards.some((Wt,Mr)=>Wt.id!==U[Mr]?.id||Wt.columnId!==U[Mr]?.columnId))&&Q("moveCard",{id:ve,columnId:xe,toIndex:Qe.toIndex}).then(Wt=>{Wt||Ce()})},j=()=>{Y.current&&de(Y.current),Y.current=null,p(null)},le=S=>{if(!x)return Promise.resolve(!1);if(x.card){let k={id:x.card.id};return S.title!==x.card.title&&(k.title=S.title),S.note!==x.card.note&&(k.note=S.note),S.label!==(x.card.label??"")&&(k.label=S.label),S.priority!==(x.card.priority??"")&&(k.priority=S.priority),Q("updateCard",k)}return Q("addCard",{columnId:x.columnId,title:S.title,note:S.note,label:S.label||void 0,priority:S.priority||void 0})},oe=(0,ue.useCallback)((S,k)=>{let O=kp(S);if(O){if(k==="current"){o?.setDraft(O);return}r?.openWorkspace&&r.openWorkspace(s,U=>Sp(U,O)).catch(U=>f(i("actionFailed")+String(U&&U.message||U)))}},[o,r,s,i]);return u?(0,H.jsxs)("div",{ref:N,className:"kanban-root kanban-view",style:K!=null?{height:K}:void 0,children:[d&&(0,H.jsx)("p",{className:"kanban-error",children:d}),h.length>0&&(0,H.jsxs)("div",{className:"kanban-warning",children:[(0,H.jsxs)("div",{className:"kanban-warning-body",children:[(0,H.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),h.map((S,k)=>(0,H.jsx)("p",{className:"kanban-warning-item",children:S},k))]}),(0,H.jsx)(De,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,H.jsxs)(Ur,{sensors:Le,collisionDetection:Pe,onDragStart:ke,onDragOver:F,onDragEnd:ee,onDragCancel:j,children:[(0,H.jsxs)("div",{className:"kanban-content",children:[(0,H.jsxs)("div",{className:"kanban-toolbar",children:[(0,H.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:v,onClick:Ce,children:(0,H.jsx)(lr,{className:v?"kanban-animate-spin":void 0})}),(0,H.jsxs)(Eo,{children:[(0,H.jsx)(Oo,{asChild:!0,children:(0,H.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,H.jsx)(ir,{className:"kanban-icon"})})}),(0,H.jsxs)($a,{align:"start",children:[(0,H.jsxs)(vt,{onClick:()=>I(!0),children:[(0,H.jsx)(nr,{className:"kanban-icon"}),i("columnEdit")]}),(0,H.jsxs)(vt,{onClick:()=>w(!0),children:[(0,H.jsx)(fo,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,H.jsxs)(Eo,{children:[(0,H.jsx)(Oo,{asChild:!0,children:(0,H.jsx)(De,{variant:P?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:i("priorityFilter"),"aria-label":i("priorityFilter"),children:(0,H.jsx)(ia,{className:"kanban-icon"})})}),(0,H.jsxs)($a,{align:"start",children:[(0,H.jsxs)(vt,{onClick:()=>E(""),children:[(0,H.jsx)("span",{className:"kanban-filter-check",children:!P&&(0,H.jsx)(wt,{className:"kanban-icon"})}),i("all")]}),qn.map(S=>(0,H.jsxs)(vt,{onClick:()=>E(S),children:[(0,H.jsx)("span",{className:"kanban-filter-check",children:P===S&&(0,H.jsx)(wt,{className:"kanban-icon"})}),(0,H.jsx)("span",{className:"kanban-priority-dot",style:{background:Qt[S].color}}),Qt[S].label]},S))]})]}),(0,H.jsxs)(Eo,{children:[(0,H.jsx)(Oo,{asChild:!0,children:(0,H.jsx)(De,{variant:D!==null?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:D===null?i("labelFilter"):`${i("labelFilter")}: ${D||i("noLabel")}`,"aria-label":i("labelFilter"),children:(0,H.jsx)(fo,{className:"kanban-icon"})})}),(0,H.jsxs)($a,{align:"start",children:[(0,H.jsxs)(vt,{role:"menuitemradio","aria-checked":D===null,onSelect:()=>A(null),children:[(0,H.jsx)("span",{className:"kanban-filter-check",children:D===null&&(0,H.jsx)(wt,{className:"kanban-icon"})}),i("all")]}),(0,H.jsxs)(vt,{role:"menuitemradio","aria-checked":D==="",onSelect:()=>A(""),children:[(0,H.jsx)("span",{className:"kanban-filter-check",children:D===""&&(0,H.jsx)(wt,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(S=>(0,H.jsxs)(vt,{role:"menuitemradio","aria-checked":D===S.name,onSelect:()=>A(S.name),children:[(0,H.jsx)("span",{className:"kanban-filter-check",children:D===S.name&&(0,H.jsx)(wt,{className:"kanban-icon"})}),(0,H.jsx)("span",{className:"kanban-label-dot",style:{background:S.color}}),S.name]},S.name))]})]})]}),(0,H.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(S=>{let k=u.cards.filter(O=>O.columnId===S.id&&(!P||O.priority===P)&&(D===null||(O.label??"")===D));return(0,H.jsx)(vp,{column:S,cards:k,labels:u.labels,onAddCard:O=>C({card:null,columnId:O.id}),onOpenCard:O=>C({card:O,columnId:O.columnId})},S.id)})})]}),(0,H.jsx)(ji,{children:m?(0,H.jsx)("div",{className:"kanban-drag-preview",children:(0,H.jsx)(Ys,{card:m,labels:u.labels})}):null})]}),(0,H.jsx)(xp,{open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(S=>S.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(S=>S.cardId===x.card.id):[],onOpenChange:S=>{S||C(null)},onSave:le,onAddComment:(S,k)=>Q("addComment",{id:S,content:k}),onDelete:S=>Q("deleteCard",{id:S.id}),onChatWithAgent:oe}),(0,H.jsx)(bp,{open:L,columns:u.columns,onOpenChange:I,onReorder:(S,k)=>{let O=u.columns.findIndex(U=>U.id===k);O>=0&&Q("moveColumn",{id:S,toIndex:O})},onRename:(S,k)=>Q("renameColumn",{id:S,title:k}),onDelete:S=>Q("deleteColumn",{id:S}),onAdd:S=>Q("addColumn",{title:S})}),(0,H.jsx)(wp,{open:b,labels:u.labels,onOpenChange:w,onAdd:(S,k)=>Q("addLabel",{name:S,color:k}),onUpdate:(S,k,O)=>Q("updateLabel",{name:S,newName:k,color:O}),onDelete:S=>Q("deleteLabel",{name:S})})]}):(0,H.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,H.jsx)("p",{className:"kanban-error",children:d}):(0,H.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Gn=require("react");function Ap({sessionId:e,inputActions:t}){let a=(0,Gn.useSyncExternalStore)(Rp,Pp);return(0,Gn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=yp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Tp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){Xd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Ro("boardTab")},o=>(0,Js.createElement)(Mp,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,Js.createElement)(Ap,o)))}};var Ep="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Ep+"]")){let e=document.createElement("style");e.setAttribute(Ep,""),e.textContent=ii,document.head.appendChild(e)}var RC=Tp;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/check.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/chevron-up.mjs:
lucide-react/dist/esm/icons/funnel.mjs:
lucide-react/dist/esm/icons/grip-vertical.mjs:
lucide-react/dist/esm/icons/list.mjs:
lucide-react/dist/esm/icons/message-square.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/refresh-cw.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/settings-2.mjs:
lucide-react/dist/esm/icons/tag.mjs:
lucide-react/dist/esm/icons/trash.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.46.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})