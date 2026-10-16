window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var im=Object.create;var Hr=Object.defineProperty;var um=Object.getOwnPropertyDescriptor;var dm=Object.getOwnPropertyNames;var cm=Object.getPrototypeOf,fm=Object.prototype.hasOwnProperty;var fi=e=>{throw TypeError(e)};var pm=(e,t)=>{for(var a in t)Hr(e,a,{get:t[a],enumerable:!0})},pi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of dm(t))!fm.call(e,r)&&r!==a&&Hr(e,r,{get:()=>t[r],enumerable:!(o=um(t,r))||o.enumerable});return e};var j=(e,t,a)=>(a=e!=null?im(cm(e)):{},pi(t||!e||!e.__esModule?Hr(a,"default",{value:e,enumerable:!0}):a,e)),mm=e=>pi(Hr({},"__esModule",{value:!0}),e);var mi=(e,t,a)=>t.has(e)||fi("Cannot "+a);var Ge=(e,t,a)=>(mi(e,t,"read from private field"),a?a.call(e):t.get(e)),hi=(e,t,a)=>t.has(e)?fi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),os=(e,t,a,o)=>(mi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var DC={};pm(DC,{default:()=>PC});module.exports=mm(DC);var gi=`/*
 * Kanban plugin styles.
 * All selectors are namespaced so this stylesheet can live in DSH's <head>.
 * Typography, colors, borders and shadows use DSH theme tokens directly.
 */

.kanban-root,
.kanban-portal {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
}

.kanban-root,
.kanban-root *,
.kanban-portal,
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
  min-height: 0;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.kanban-error {
  color: var(--dsw-alias-state-error-primary);
  font: var(--dsw-font-xs-13);
}

.kanban-muted-text {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xs-13);
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
  min-width: 0;
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
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
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

.kanban-toolbar-button:active,
.kanban-toolbar-button.is-active {
  background: var(--dsw-alias-button-ghost-active-fill);
  color: var(--dsw-alias-label-primary);
}

.kanban-toolbar-button.is-active {
  position: relative;
}

.kanban-toolbar-button.is-active::after {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dsw-alias-state-business-primary);
  content: "";
}

.kanban-filter-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-filter-chip {
  max-width: 100%;
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-board-scroll {
  display: flex;
  min-width: 0;
  min-height: 0;
  flex: 1;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1px 1px 8px;
  overscroll-behavior-x: contain;
}

/* Standard scrollbar styling takes precedence over the Host's WebKit skin. */
.kanban-board-scroll,
.kanban-column-cards,
.kanban-dialog-body,
.kanban-dropdown-content,
.kanban-select-viewport,
.kanban-textarea {
  scrollbar-width: thin;
  scrollbar-color: auto;
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
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 65%, var(--dsw-alias-bg-module-platform));
}

.kanban-column.is-over {
  /* Highlight only the drop target, not every card inheriting its stroke token. */
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: inset 0 0 0 1px var(--dsw-alias-state-business-primary);
}

.kanban-column-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 6px;
  padding: 12px 12px 10px;
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
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-column-cards {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding: 2px 8px 8px;
  overscroll-behavior-y: contain;
}

.kanban-column-empty {
  padding: 20px 0;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
  font: var(--dsw-font-xxs-12);
}

.kanban-column-footer {
  flex-shrink: 0;
  padding: 6px 8px 8px;
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
  border-radius: 10px;
  cursor: grab;
  touch-action: auto;
  user-select: none;
}

.kanban-sortable-card:active {
  cursor: grabbing;
}

.kanban-sortable-card.is-dragging {
  opacity: 0.4;
}

.kanban-card {
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
}

.kanban-sortable-card:hover .kanban-card {
  border-color: var(--dsw-alias-border-l3);
  background: var(--dsw-alias-interactive-bg-hover-solid);
}

.kanban-sortable-card-content {
  padding: 12px;
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
  align-content: start;
  gap: 16px;
}

.kanban-form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.kanban-form-field {
  display: grid;
  min-width: 0;
  gap: 6px;
}

.kanban-field-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kanban-field-id {
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-markdown-preview {
  min-width: 0;
  padding: 8px 0;
  overflow-wrap: anywhere;
}

.kanban-textarea.kanban-markdown-source {
  width: 100%;
  min-height: 240px;
  font-family: var(--ds-font-family-code, ui-monospace, monospace);
  line-height: 1.6;
  tab-size: 2;
}

.kanban-note-hint {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 6px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-inline-priority {
  display: flex;
  align-items: center;
  gap: 8px;
}

.kanban-comments-box {
  display: grid;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--dsw-alias-border-l2);
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
  padding: 8px 0;
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
  min-height: 64px;
}

.kanban-activity-box {
  display: grid;
  gap: 6px;
  padding-top: 16px;
  border-top: 1px solid var(--dsw-alias-border-l2);
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
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
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
  border-radius: 8px;
  font: var(--dsw-font-xxs-12);
}

:where(.kanban-button--size-lg) {
  height: 40px;
  padding: 0 18px;
  border-radius: 12px;
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
  border: 1px solid var(--dsw-alias-border-l3);
}

.kanban-button--secondary {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-button--secondary:hover:not(:disabled) {
  background: var(--dsw-alias-button-ghost-active-fill);
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
  font: var(--dsw-font-xs-13);
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
  font: var(--dsw-font-xs-13);
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
  font: var(--dsw-font-xs-13);
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
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: calc(100% - 32px);
  max-width: 512px;
  max-height: calc(100dvh - 64px);
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 18px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
  box-shadow: var(--dsw-shadow-lv3);
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
  top: 12px;
  right: 12px;
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
  gap: 4px;
  padding: 18px 52px 16px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l1);
  text-align: left;
}

.kanban-dialog-body {
  min-width: 0;
  min-height: 0;
  overflow: auto;
  padding: 16px 20px;
  overscroll-behavior: contain;
}

.kanban-dialog-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-2);
}

.kanban-dialog-footer > .kanban-sortable-row {
  width: 100%;
}

.kanban-dialog-error {
  width: 100%;
  color: var(--dsw-alias-state-error-primary);
  font: var(--dsw-font-xs-13);
  overflow-wrap: anywhere;
}

.kanban-dialog-confirm {
  display: grid;
  width: 100%;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
}

.kanban-confirm-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
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
  font: var(--dsw-font-xs-13);
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
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  padding: 4px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv3);
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
  border-radius: 8px;
  padding: 5px 10px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
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
  font: var(--dsw-font-xs-strong-13);
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
  font: var(--dsw-font-xs-13);
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
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv3);
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
  font: var(--dsw-font-xs-strong-13);
}

.kanban-select-item {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 34px;
  align-items: center;
  border-radius: 8px;
  padding: 5px 32px 5px 10px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
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
  background: var(--dsw-alias-bg-layer-2);
  border: 1px solid var(--dsw-alias-border-l2);
  box-shadow: var(--dsw-shadow-lv1);
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
  flex-direction: column;
  gap: 8px;
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
  width: 100%;
  min-width: 0;
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

@media (max-width: 640px) {
  .kanban-view {
    padding: 10px;
  }

  .kanban-column {
    width: 272px;
    min-width: 272px;
  }

  .kanban-form-row {
    grid-template-columns: minmax(0, 1fr);
  }

  .kanban-dialog-content {
    max-height: calc(100dvh - 24px);
  }

  .kanban-dialog-header {
    padding-left: 14px;
  }

  .kanban-dialog-body {
    padding: 14px;
  }

  .kanban-dialog-footer {
    padding: 12px 14px;
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

/* Task details retain the dialog's focus management while using the full height. */
.kanban-dialog-content.kanban-drawer-content {
  top: 0;
  right: 0;
  bottom: 0;
  left: auto;
  height: 100dvh;
  max-width: 100%;
  max-height: 100dvh;
  border-width: 0 0 0 1px;
  border-radius: 0;
  transform: none;
}

.kanban-drawer-content[data-state="open"] {
  animation: kanban-drawer-in 180ms ease-out;
}

.kanban-drawer-content[data-state="closed"] {
  animation: kanban-drawer-out 150ms ease-in;
}

.kanban-drawer-content[data-resizing] {
  user-select: none;
}

.kanban-drawer-resize {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  width: 10px;
  outline: none;
  cursor: col-resize;
  touch-action: none;
}

.kanban-drawer-resize::after {
  position: absolute;
  top: calc(50% - 24px);
  left: 3px;
  width: 3px;
  height: 48px;
  border-radius: 2px;
  background: var(--dsw-alias-border-l2);
  content: "";
}

.kanban-drawer-resize:hover::after,
.kanban-drawer-resize:focus-visible::after,
.kanban-drawer-content[data-resizing] .kanban-drawer-resize::after {
  background: var(--dsw-alias-label-secondary);
}

.kanban-drawer-resize:focus-visible {
  box-shadow: inset 0 0 0 2px var(--dsw-alias-label-secondary);
}

@keyframes kanban-drawer-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes kanban-drawer-out {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

@media (max-width: 600px) {
  .kanban-dialog-content.kanban-drawer-content {
    border-left-width: 0;
  }
}
`;var li=require("react");var ue=require("react");var P=j(require("react")),Pa=require("react-dom");var ke=require("react");function Li(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,ke.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Ko=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function va(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Ur(e){return"nodeType"in e}function Ze(e){var t,a;return e?va(e)?e:Ur(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function qr(e){let{Document:t}=Ze(e);return e instanceof t}function fo(e){return va(e)?!1:e instanceof Ze(e).HTMLElement}function ns(e){return e instanceof Ze(e).SVGElement}function wa(e){return e?va(e)?e.document:Ur(e)?qr(e)?e:fo(e)||ns(e)?e.ownerDocument:document:document:document}var ct=Ko?ke.useLayoutEffect:ke.useEffect;function jo(e){let t=(0,ke.useRef)(e);return ct(()=>{t.current=e}),(0,ke.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function Ci(){let e=(0,ke.useRef)(null),t=(0,ke.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,ke.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function po(e,t){t===void 0&&(t=[e]);let a=(0,ke.useRef)(e);return ct(()=>{a.current!==e&&(a.current=e)},t),a}function mo(e,t){let a=(0,ke.useRef)();return(0,ke.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function $o(e){let t=jo(e),a=(0,ke.useRef)(null),o=(0,ke.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Yo(e){let t=(0,ke.useRef)();return(0,ke.useEffect)(()=>{t.current=e},[e]),t.current}var rs={};function Sa(e,t){return(0,ke.useMemo)(()=>{if(t)return t;let a=rs[e]==null?0:rs[e]+1;return rs[e]=a,e+"-"+a},[e,t])}function Ii(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,s)=>{let l=Object.entries(s);for(let[i,u]of l){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var ya=Ii(1),Ra=Ii(-1);function gm(e){return"clientX"in e&&"clientY"in e}function ho(e){if(!e)return!1;let{KeyboardEvent:t}=Ze(e.target);return t&&e instanceof t}function xm(e){if(!e)return!1;let{TouchEvent:t}=Ze(e.target);return t&&e instanceof t}function Zo(e){if(xm(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return gm(e)?{x:e.clientX,y:e.clientY}:null}var dt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[dt.Translate.toString(e),dt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),xi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function bi(e){return e.matches(xi)?e:e.querySelector(xi)}var ka=j(require("react")),Lm={display:"none"};function vi(e){let{id:t,value:a}=e;return ka.default.createElement("div",{id:t,style:Lm},a)}function wi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ka.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Si(){let[e,t]=(0,ka.useState)("");return{announce:(0,ka.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Ni=(0,P.createContext)(null);function Cm(e){let t=(0,P.useContext)(Ni);(0,P.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Im(){let[e]=(0,P.useState)(()=>new Set),t=(0,P.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,P.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(s=>{var l;return(l=s[r])==null?void 0:l.call(s,n)})},[e]),t]}var bm={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},vm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function wm(e){let{announcements:t=vm,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=bm}=e,{announce:n,announcement:s}=Si(),l=Sa("DndLiveRegion"),[i,u]=(0,P.useState)(!1);if((0,P.useEffect)(()=>{u(!0)},[]),Cm((0,P.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;n(t.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;n(t.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!i)return null;let c=P.default.createElement(P.default.Fragment,null,P.default.createElement(vi,{id:o,value:r.draggable}),P.default.createElement(wi,{id:l,announcement:s}));return a?(0,Pa.createPortal)(c,a):c}var Be;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Be||(Be={}));function Vr(){}function Aa(e,t){return(0,P.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Gr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,P.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Pt=Object.freeze({x:0,y:0});function ps(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Sm(e,t){let a=Zo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function ms(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function ym(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function us(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function rr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function yi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var _i=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=yi(t,t.left,t.top),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=ps(yi(i),r);n.push({id:l,data:{droppableContainer:s,value:u}})}}return n.sort(ms)},Xr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=us(t),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=us(i),c=r.reduce((f,p,g)=>f+ps(u[g],p),0),d=Number((c/4).toFixed(4));n.push({id:l,data:{droppableContainer:s,value:d}})}}return n.sort(ms)};function Rm(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),s=r-o,l=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=s*l,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var hs=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:s}=n,l=a.get(s);if(l){let i=Rm(l,t);i>0&&r.push({id:s,data:{droppableContainer:n,value:i}})}}return r.sort(ym)};function km(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Hi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:s}=n,l=a.get(s);if(l&&km(o,l)){let u=us(l).reduce((d,f)=>d+ps(o,f),0),c=Number((u/4).toFixed(4));r.push({id:s,data:{droppableContainer:n,value:c}})}}return r.sort(ms)};function Pm(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ui(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Pt}function Dm(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((s,l)=>({...s,top:s.top+e*l.y,bottom:s.bottom+e*l.y,left:s.left+e*l.x,right:s.right+e*l.x}),{...a})}}var Mm=Dm(1);function qi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Am(e,t,a){let o=qi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:s,y:l}=o,i=e.left-s-(1-r)*parseFloat(a),u=e.top-l-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Tm={ignoreTransform:!1};function Ta(e,t){t===void 0&&(t=Tm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ze(e).getComputedStyle(e);u&&(a=Am(a,u,c))}let{top:o,left:r,width:n,height:s,bottom:l,right:i}=a;return{top:o,left:r,width:n,height:s,bottom:l,right:i}}function Ri(e){return Ta(e,{ignoreTransform:!0})}function Em(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Om(e,t){return t===void 0&&(t=Ze(e).getComputedStyle(e)),t.position==="fixed"}function Fm(e,t){t===void 0&&(t=Ze(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function nr(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(qr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!fo(r)||ns(r)||a.includes(r))return a;let n=Ze(e).getComputedStyle(r);return r!==e&&Fm(r,n)&&a.push(r),Om(r,n)?a:o(r.parentNode)}return e?o(e):a}function Wi(e){let[t]=nr(e,1);return t??null}function ss(e){return!Ko||!e?null:va(e)?e:Ur(e)?qr(e)||e===wa(e).scrollingElement?window:fo(e)?e:null:null}function Vi(e){return va(e)?e.scrollX:e.scrollLeft}function zi(e){return va(e)?e.scrollY:e.scrollTop}function ds(e){return{x:Vi(e),y:zi(e)}}var Ue;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ue||(Ue={}));function Gi(e){return!Ko||!e?!1:e===document.scrollingElement}function Xi(e){let t={x:0,y:0},a=Gi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,s=e.scrollTop>=o.y,l=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:s,isRight:l,maxScroll:o,minScroll:t}}var Bm={x:.2,y:.2};function Nm(e,t,a,o,r){let{top:n,left:s,right:l,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Bm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Xi(e),p={x:0,y:0},g={x:0,y:0},h={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+h.height?(p.y=Ue.Backward,g.y=o*Math.abs((t.top+h.height-n)/h.height)):!c&&i>=t.bottom-h.height&&(p.y=Ue.Forward,g.y=o*Math.abs((t.bottom-h.height-i)/h.height)),!f&&l>=t.right-h.width?(p.x=Ue.Forward,g.x=o*Math.abs((t.right-h.width-l)/h.width)):!d&&s<=t.left+h.width&&(p.x=Ue.Backward,g.x=o*Math.abs((t.left+h.width-s)/h.width)),{direction:p,speed:g}}function _m(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:s}=window;return{top:0,left:0,right:n,bottom:s,width:n,height:s}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Ki(e){return e.reduce((t,a)=>ya(t,ds(a)),Pt)}function Hm(e){return e.reduce((t,a)=>t+Vi(a),0)}function Um(e){return e.reduce((t,a)=>t+zi(a),0)}function ji(e,t){if(t===void 0&&(t=Ta),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Wi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var qm=[["x",["left","right"],Hm],["y",["top","bottom"],Um]],Qo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=nr(a),r=Ki(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,s,l]of qm)for(let i of s)Object.defineProperty(this,i,{get:()=>{let u=l(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Da=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Wm(e){let{EventTarget:t}=Ze(e);return e instanceof t?e:wa(e)}function ls(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var It;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(It||(It={}));function ki(e){e.preventDefault()}function Vm(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var $i={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},zm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},ia=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Da(wa(a)),this.windowListeners=new Da(Ze(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(It.Resize,this.handleCancel),this.windowListeners.add(It.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(It.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&ji(o),a(Pt)}handleKeyDown(t){if(ho(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=$i,coordinateGetter:s=zm,scrollBehavior:l="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:Pt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=s(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=Ra(d,c),p={x:0,y:0},{scrollableAncestors:g}=o.current;for(let h of g){let m=t.code,{isTop:x,isRight:I,isLeft:L,isBottom:b,maxScroll:y,minScroll:C}=Xi(h),w=_m(h),D={x:Math.min(m===re.Right?w.right-w.width/2:w.right,Math.max(m===re.Right?w.left:w.left+w.width/2,d.x)),y:Math.min(m===re.Down?w.bottom-w.height/2:w.bottom,Math.max(m===re.Down?w.top:w.top+w.height/2,d.y))},R=m===re.Right&&!I||m===re.Left&&!L,k=m===re.Down&&!b||m===re.Up&&!x;if(R&&D.x!==d.x){let S=h.scrollLeft+f.x,A=m===re.Right&&S<=y.x||m===re.Left&&S>=C.x;if(A&&!f.y){h.scrollTo({left:S,behavior:l});return}A?p.x=h.scrollLeft-S:p.x=m===re.Right?h.scrollLeft-y.x:h.scrollLeft-C.x,p.x&&h.scrollBy({left:-p.x,behavior:l});break}else if(k&&D.y!==d.y){let S=h.scrollTop+f.y,A=m===re.Down&&S<=y.y||m===re.Up&&S>=C.y;if(A&&!f.x){h.scrollTo({top:S,behavior:l});return}A?p.y=h.scrollTop-S:p.y=m===re.Down?h.scrollTop-y.y:h.scrollTop-C.y,p.y&&h.scrollBy({top:-p.y,behavior:l});break}}this.handleMove(t,ya(Ra(d,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ia.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=$i,onActivation:r}=t,{active:n}=a,{code:s}=e.nativeEvent;if(o.start.includes(s)){let l=n.activatorNode.current;return l&&e.target!==l?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Pi(e){return!!(e&&"distance"in e)}function Di(e){return!!(e&&"delay"in e)}var er=class{constructor(t,a,o){var r;o===void 0&&(o=Wm(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:s}=n;this.props=t,this.events=a,this.document=wa(s),this.documentListeners=new Da(this.document),this.listeners=new Da(o),this.windowListeners=new Da(Ze(s)),this.initialCoordinates=(r=Zo(n))!=null?r:Pt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(It.Resize,this.handleCancel),this.windowListeners.add(It.DragStart,ki),this.windowListeners.add(It.VisibilityChange,this.handleCancel),this.windowListeners.add(It.ContextMenu,ki),this.documentListeners.add(It.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Di(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Pi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(It.Click,Vm,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(It.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:s,options:{activationConstraint:l}}=n;if(!r)return;let i=(a=Zo(t))!=null?a:Pt,u=Ra(r,i);if(!o&&l){if(Pi(l)){if(l.tolerance!=null&&ls(u,l.tolerance))return this.handleCancel();if(ls(u,l.distance))return this.handleStart()}if(Di(l)&&ls(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}t.cancelable&&t.preventDefault(),s(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Gm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},go=class extends er{constructor(t){let{event:a}=t,o=wa(a.target);super(t,Gm,o)}};go.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Xm={move:{name:"mousemove"},end:{name:"mouseup"}},cs;(function(e){e[e.RightClick=2]="RightClick"})(cs||(cs={}));var tr=class extends er{constructor(t){super(t,Xm,wa(t.event.target))}};tr.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===cs.RightClick?!1:(o?.({event:a}),!0)}}];var is={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},ar=class extends er{constructor(t){super(t,is)}static setup(){return window.addEventListener(is.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(is.move.name,t)};function t(){}}};ar.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Jo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Jo||(Jo={}));var zr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(zr||(zr={}));function Km(e){let{acceleration:t,activator:a=Jo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:s=5,order:l=zr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,p=$m({delta:d,disabled:!n}),[g,h]=Ci(),m=(0,P.useRef)({x:0,y:0}),x=(0,P.useRef)({x:0,y:0}),I=(0,P.useMemo)(()=>{switch(a){case Jo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Jo.DraggableRect:return r}},[a,r,i]),L=(0,P.useRef)(null),b=(0,P.useCallback)(()=>{let C=L.current;if(!C)return;let w=m.current.x*x.current.x,D=m.current.y*x.current.y;C.scrollBy(w,D)},[]),y=(0,P.useMemo)(()=>l===zr.TreeOrder?[...u].reverse():u,[l,u]);(0,P.useEffect)(()=>{if(!n||!u.length||!I){h();return}for(let C of y){if(o?.(C)===!1)continue;let w=u.indexOf(C),D=c[w];if(!D)continue;let{direction:R,speed:k}=Nm(C,D,I,t,f);for(let S of["x","y"])p[S][R[S]]||(k[S]=0,R[S]=0);if(k.x>0||k.y>0){h(),L.current=C,g(b,s),m.current=k,x.current=R;return}}m.current={x:0,y:0},x.current={x:0,y:0},h()},[t,b,o,h,n,s,JSON.stringify(I),JSON.stringify(p),g,u,y,c,JSON.stringify(f)])}var jm={x:{[Ue.Backward]:!1,[Ue.Forward]:!1},y:{[Ue.Backward]:!1,[Ue.Forward]:!1}};function $m(e){let{delta:t,disabled:a}=e,o=Yo(t);return mo(r=>{if(a||!o||!r)return jm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ue.Backward]:r.x[Ue.Backward]||n.x===-1,[Ue.Forward]:r.x[Ue.Forward]||n.x===1},y:{[Ue.Backward]:r.y[Ue.Backward]||n.y===-1,[Ue.Forward]:r.y[Ue.Forward]||n.y===1}}},[a,t,o])}function Ym(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return mo(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Zm(e,t){return(0,P.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(s=>({eventName:s.eventName,handler:t(s.handler,o)}));return[...a,...n]},[]),[e,t])}var or;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(or||(or={}));var fs;(function(e){e.Optimized="optimized"})(fs||(fs={}));var Mi=new Map;function Jm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,s]=(0,P.useState)(null),{frequency:l,measure:i,strategy:u}=r,c=(0,P.useRef)(e),d=m(),f=po(d),p=(0,P.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&s(I=>I===null?x:I.concat(x.filter(L=>!I.includes(L))))},[f]),g=(0,P.useRef)(null),h=mo(x=>{if(d&&!a)return Mi;if(!x||x===Mi||c.current!==e||n!=null){let I=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){I.set(L.id,L.rect.current);continue}let b=L.node.current,y=b?new Qo(i(b),b):null;L.rect.current=y,y&&I.set(L.id,y)}return I}return x},[e,n,a,d,i]);return(0,P.useEffect)(()=>{c.current=e},[e]),(0,P.useEffect)(()=>{d||p()},[a,d]),(0,P.useEffect)(()=>{n&&n.length>0&&s(null)},[JSON.stringify(n)]),(0,P.useEffect)(()=>{d||typeof l!="number"||g.current!==null||(g.current=setTimeout(()=>{p(),g.current=null},l))},[l,d,p,...o]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:n!=null};function m(){switch(u){case or.Always:return!1;case or.BeforeDragging:return a;default:return!a}}}function gs(e,t){return mo(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Qm(e,t){return gs(e,t)}function eh(e){let{callback:t,disabled:a}=e,o=jo(t),r=(0,P.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,P.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Kr(e){let{callback:t,disabled:a}=e,o=jo(t),r=(0,P.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,P.useEffect)(()=>()=>r?.disconnect(),[r]),r}function th(e){return new Qo(Ta(e),e)}function Ai(e,t,a){t===void 0&&(t=th);let[o,r]=(0,P.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let s=eh({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),l=Kr({callback:n});return ct(()=>{n(),e?(l?.observe(e),s?.observe(document.body,{childList:!0,subtree:!0})):(l?.disconnect(),s?.disconnect())},[e]),o}function ah(e){let t=gs(e);return Ui(e,t)}var Ti=[];function oh(e){let t=(0,P.useRef)(e),a=mo(o=>e?o&&o!==Ti&&e&&t.current&&e.parentNode===t.current.parentNode?o:nr(e):Ti,[e]);return(0,P.useEffect)(()=>{t.current=e},[e]),a}function rh(e){let[t,a]=(0,P.useState)(null),o=(0,P.useRef)(e),r=(0,P.useCallback)(n=>{let s=ss(n.target);s&&a(l=>l?(l.set(s,ds(s)),new Map(l)):null)},[]);return(0,P.useEffect)(()=>{let n=o.current;if(e!==n){s(n);let l=e.map(i=>{let u=ss(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,ds(u)]):null}).filter(i=>i!=null);a(l.length?new Map(l):null),o.current=e}return()=>{s(e),s(n)};function s(l){l.forEach(i=>{let u=ss(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,P.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,s)=>ya(n,s),Pt):Ki(e):Pt,[e,t])}function Ei(e,t){t===void 0&&(t=[]);let a=(0,P.useRef)(null);return(0,P.useEffect)(()=>{a.current=null},t),(0,P.useEffect)(()=>{let o=e!==Pt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?Ra(e,a.current):Pt}function nh(e){(0,P.useEffect)(()=>{if(!Ko)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function sh(e,t){return(0,P.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=s=>{n(s,t)},a},{}),[e,t])}function Yi(e){return(0,P.useMemo)(()=>e?Em(e):null,[e])}var Oi=[];function lh(e,t){t===void 0&&(t=Ta);let[a]=e,o=Yi(a?Ze(a):null),[r,n]=(0,P.useState)(Oi);function s(){n(()=>e.length?e.map(i=>Gi(i)?o:new Qo(t(i),i)):Oi)}let l=Kr({callback:s});return ct(()=>{l?.disconnect(),s(),e.forEach(i=>l?.observe(i))},[e]),r}function Zi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return fo(t)?t:e}function ih(e){let{measure:t}=e,[a,o]=(0,P.useState)(null),r=(0,P.useCallback)(u=>{for(let{target:c}of u)if(fo(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Kr({callback:r}),s=(0,P.useCallback)(u=>{let c=Zi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[l,i]=$o(s);return(0,P.useMemo)(()=>({nodeRef:l,rect:a,setRef:i}),[a,l,i])}var uh=[{sensor:go,options:{}},{sensor:ia,options:{}}],dh={current:{}},Wr={draggable:{measure:Ri},droppable:{measure:Ri,strategy:or.WhileDragging,frequency:fs.Optimized},dragOverlay:{measure:Ta}},Ma=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},ch={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ma,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Vr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Wr,measureDroppableContainers:Vr,windowRect:null,measuringScheduled:!1},Ji={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Vr,draggableNodes:new Map,over:null,measureDroppableContainers:Vr},sr=(0,P.createContext)(Ji),Qi=(0,P.createContext)(ch);function fh(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ma}}}function ph(e,t){switch(t.type){case Be.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Be.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Be.DragEnd:case Be.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Be.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Ma(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Be.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let s=new Ma(e.droppable.containers);return s.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:s}}}case Be.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Ma(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function mh(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,P.useContext)(sr),n=Yo(o),s=Yo(a?.id);return(0,P.useEffect)(()=>{if(!t&&!o&&n&&s!=null){if(!ho(n)||document.activeElement===n.target)return;let l=r.get(s);if(!l)return;let{activatorNode:i,node:u}=l;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=bi(c);if(d){d.focus();break}}})}},[o,t,r,s,n]),null}function eu(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function hh(e){return(0,P.useMemo)(()=>({draggable:{...Wr.draggable,...e?.draggable},droppable:{...Wr.droppable,...e?.droppable},dragOverlay:{...Wr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function gh(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,P.useRef)(!1),{x:s,y:l}=typeof r=="boolean"?{x:r,y:r}:r;ct(()=>{if(!s&&!l||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ui(c,o);if(s||(d.x=0),l||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Wi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,s,l,o,a])}var jr=(0,P.createContext)({...Pt,scaleX:1,scaleY:1}),la;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(la||(la={}));var $r=(0,P.memo)(function(t){var a,o,r,n;let{id:s,accessibility:l,autoScroll:i=!0,children:u,sensors:c=uh,collisionDetection:d=hs,measuring:f,modifiers:p,...g}=t,h=(0,P.useReducer)(ph,void 0,fh),[m,x]=h,[I,L]=Im(),[b,y]=(0,P.useState)(la.Uninitialized),C=b===la.Initialized,{draggable:{active:w,nodes:D,translate:R},droppable:{containers:k}}=m,S=w!=null?D.get(w):null,A=(0,P.useRef)({initial:null,translated:null}),_=(0,P.useMemo)(()=>{var Ye;return w!=null?{id:w,data:(Ye=S?.data)!=null?Ye:dh,rect:A}:null},[w,S]),H=(0,P.useRef)(null),[Y,K]=(0,P.useState)(null),[V,q]=(0,P.useState)(null),z=po(g,Object.values(g)),W=Sa("DndDescribedBy",s),E=(0,P.useMemo)(()=>k.getEnabled(),[k]),G=hh(f),{droppableRects:te,measureDroppableContainers:Ae,measuringScheduled:Ie}=Jm(E,{dragging:C,dependencies:[R.x,R.y],config:G.droppable}),B=Ym(D,w),pe=(0,P.useMemo)(()=>V?Zo(V):null,[V]),me=lm(),he=Qm(B,G.draggable.measure);gh({activeNode:w!=null?D.get(w):null,config:me.layoutShiftCompensation,initialRect:he,measure:G.draggable.measure});let N=Ai(B,G.draggable.measure,he),de=Ai(B?B.parentElement:null),oe=(0,P.useRef)({activatorEvent:null,active:null,activeNode:B,collisionRect:null,collisions:null,droppableRects:te,draggableNodes:D,draggingNode:null,draggingNodeRect:null,droppableContainers:k,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),v=k.getNodeFor((a=oe.current.over)==null?void 0:a.id),M=ih({measure:G.dragOverlay.measure}),T=(o=M.nodeRef.current)!=null?o:B,X=C?(r=M.rect)!=null?r:N:null,Re=!!(M.nodeRef.current&&M.rect),le=ah(Re?null:N),we=Yi(T?Ze(T):null),Se=oh(C?v??B:null),st=lh(Se),at=eu(p,{transform:{x:R.x-le.x,y:R.y-le.y,scaleX:1,scaleY:1},activatorEvent:V,active:_,activeNodeRect:N,containerNodeRect:de,draggingNodeRect:X,over:oe.current.over,overlayNodeRect:M.rect,scrollableAncestors:Se,scrollableAncestorRects:st,windowRect:we}),es=pe?ya(pe,R):null,Kt=rh(Se),_r=Ei(Kt),tm=Ei(Kt,[N]),io=ya(at,_r),uo=X?Mm(X,at):null,Vo=_&&uo?d({active:_,collisionRect:uo,droppableRects:te,droppableContainers:E,pointerCoordinates:es}):null,ii=rr(Vo,"id"),[oa,ui]=(0,P.useState)(null),am=Re?at:ya(at,tm),om=Pm(am,(n=oa?.rect)!=null?n:null,N),ts=(0,P.useRef)(null),di=(0,P.useCallback)((Ye,lt)=>{let{sensor:it,options:ra}=lt;if(H.current==null)return;let Ct=D.get(H.current);if(!Ct)return;let ut=Ye.nativeEvent,_t=new it({active:H.current,activeNode:Ct,event:ut,options:ra,context:oe,onAbort(ze){if(!D.get(ze))return;let{onDragAbort:Ht}=z.current,jt={id:ze};Ht?.(jt),I({type:"onDragAbort",event:jt})},onPending(ze,na,Ht,jt){if(!D.get(ze))return;let{onDragPending:Go}=z.current,sa={id:ze,constraint:na,initialCoordinates:Ht,offset:jt};Go?.(sa),I({type:"onDragPending",event:sa})},onStart(ze){let na=H.current;if(na==null)return;let Ht=D.get(na);if(!Ht)return;let{onDragStart:jt}=z.current,zo={activatorEvent:ut,active:{id:na,data:Ht.data,rect:A}};(0,Pa.unstable_batchedUpdates)(()=>{jt?.(zo),y(la.Initializing),x({type:Be.DragStart,initialCoordinates:ze,active:na}),I({type:"onDragStart",event:zo}),K(ts.current),q(ut)})},onMove(ze){x({type:Be.DragMove,coordinates:ze})},onEnd:co(Be.DragEnd),onCancel:co(Be.DragCancel)});ts.current=_t;function co(ze){return async function(){let{active:Ht,collisions:jt,over:zo,scrollAdjustedTranslate:Go}=oe.current,sa=null;if(Ht&&Go){let{cancelDrop:Xo}=z.current;sa={activatorEvent:ut,active:Ht,collisions:jt,delta:Go,over:zo},ze===Be.DragEnd&&typeof Xo=="function"&&await Promise.resolve(Xo(sa))&&(ze=Be.DragCancel)}H.current=null,(0,Pa.unstable_batchedUpdates)(()=>{x({type:ze}),y(la.Uninitialized),ui(null),K(null),q(null),ts.current=null;let Xo=ze===Be.DragEnd?"onDragEnd":"onDragCancel";if(sa){let as=z.current[Xo];as?.(sa),I({type:Xo,event:sa})}})}}},[D]),rm=(0,P.useCallback)((Ye,lt)=>(it,ra)=>{let Ct=it.nativeEvent,ut=D.get(ra);if(H.current!==null||!ut||Ct.dndKit||Ct.defaultPrevented)return;let _t={active:ut};Ye(it,lt.options,_t)===!0&&(Ct.dndKit={capturedBy:lt.sensor},H.current=ra,di(it,lt))},[D,di]),ci=Zm(c,rm);nh(c),ct(()=>{N&&b===la.Initializing&&y(la.Initialized)},[N,b]),(0,P.useEffect)(()=>{let{onDragMove:Ye}=z.current,{active:lt,activatorEvent:it,collisions:ra,over:Ct}=oe.current;if(!lt||!it)return;let ut={active:lt,activatorEvent:it,collisions:ra,delta:{x:io.x,y:io.y},over:Ct};(0,Pa.unstable_batchedUpdates)(()=>{Ye?.(ut),I({type:"onDragMove",event:ut})})},[io.x,io.y]),(0,P.useEffect)(()=>{let{active:Ye,activatorEvent:lt,collisions:it,droppableContainers:ra,scrollAdjustedTranslate:Ct}=oe.current;if(!Ye||H.current==null||!lt||!Ct)return;let{onDragOver:ut}=z.current,_t=ra.get(ii),co=_t&&_t.rect.current?{id:_t.id,rect:_t.rect.current,data:_t.data,disabled:_t.disabled}:null,ze={active:Ye,activatorEvent:lt,collisions:it,delta:{x:Ct.x,y:Ct.y},over:co};(0,Pa.unstable_batchedUpdates)(()=>{ui(co),ut?.(ze),I({type:"onDragOver",event:ze})})},[ii]),ct(()=>{oe.current={activatorEvent:V,active:_,activeNode:B,collisionRect:uo,collisions:Vo,droppableRects:te,draggableNodes:D,draggingNode:T,draggingNodeRect:X,droppableContainers:k,over:oa,scrollableAncestors:Se,scrollAdjustedTranslate:io},A.current={initial:X,translated:uo}},[_,B,Vo,uo,D,T,X,te,k,oa,Se,io]),Km({...me,delta:R,draggingRect:uo,pointerCoordinates:es,scrollableAncestors:Se,scrollableAncestorRects:st});let nm=(0,P.useMemo)(()=>({active:_,activeNode:B,activeNodeRect:N,activatorEvent:V,collisions:Vo,containerNodeRect:de,dragOverlay:M,draggableNodes:D,droppableContainers:k,droppableRects:te,over:oa,measureDroppableContainers:Ae,scrollableAncestors:Se,scrollableAncestorRects:st,measuringConfiguration:G,measuringScheduled:Ie,windowRect:we}),[_,B,N,V,Vo,de,M,D,k,te,oa,Ae,Se,st,G,Ie,we]),sm=(0,P.useMemo)(()=>({activatorEvent:V,activators:ci,active:_,activeNodeRect:N,ariaDescribedById:{draggable:W},dispatch:x,draggableNodes:D,over:oa,measureDroppableContainers:Ae}),[V,ci,_,N,x,W,D,oa,Ae]);return P.default.createElement(Ni.Provider,{value:L},P.default.createElement(sr.Provider,{value:sm},P.default.createElement(Qi.Provider,{value:nm},P.default.createElement(jr.Provider,{value:om},u)),P.default.createElement(mh,{disabled:l?.restoreFocus===!1})),P.default.createElement(wm,{...l,hiddenTextDescribedById:W}));function lm(){let Ye=Y?.autoScrollEnabled===!1,lt=typeof i=="object"?i.enabled===!1:i===!1,it=C&&!Ye&&!lt;return typeof i=="object"?{...i,enabled:it}:{enabled:it}}}),xh=(0,P.createContext)(null),Fi="button",Lh="Draggable";function tu(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Sa(Lh),{activators:s,activatorEvent:l,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,P.useContext)(sr),{role:p=Fi,roleDescription:g="draggable",tabIndex:h=0}=r??{},m=i?.id===t,x=(0,P.useContext)(m?jr:xh),[I,L]=$o(),[b,y]=$o(),C=sh(s,t),w=po(a);ct(()=>(d.set(t,{id:t,key:n,node:I,activatorNode:b,data:w}),()=>{let R=d.get(t);R&&R.key===n&&d.delete(t)}),[d,t]);let D=(0,P.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":o,"aria-pressed":m&&p===Fi?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,p,h,m,g,c.draggable]);return{active:i,activatorEvent:l,activeNodeRect:u,attributes:D,isDragging:m,listeners:o?void 0:C,node:I,over:f,setNodeRef:L,setActivatorNodeRef:y,transform:x}}function lr(){return(0,P.useContext)(Qi)}var Ch="Droppable",Ih={timeout:25};function Yr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Sa(Ch),{active:s,dispatch:l,over:i,measureDroppableContainers:u}=(0,P.useContext)(sr),c=(0,P.useRef)({disabled:a}),d=(0,P.useRef)(!1),f=(0,P.useRef)(null),p=(0,P.useRef)(null),{disabled:g,updateMeasurementsFor:h,timeout:m}={...Ih,...r},x=po(h??o),I=(0,P.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),p.current=null},m)},[m]),L=Kr({callback:I,disabled:g||!s}),b=(0,P.useCallback)((D,R)=>{L&&(R&&(L.unobserve(R),d.current=!1),D&&L.observe(D))},[L]),[y,C]=$o(b),w=po(t);return(0,P.useEffect)(()=>{!L||!y.current||(L.disconnect(),d.current=!1,L.observe(y.current))},[y,L]),(0,P.useEffect)(()=>(l({type:Be.RegisterDroppable,element:{id:o,key:n,disabled:a,node:y,rect:f,data:w}}),()=>l({type:Be.UnregisterDroppable,key:n,id:o})),[o]),(0,P.useEffect)(()=>{a!==c.current.disabled&&(l({type:Be.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,l]),{active:s,rect:f,isOver:i?.id===o,node:y,over:i,setNodeRef:C}}function bh(e){let{animation:t,children:a}=e,[o,r]=(0,P.useState)(null),[n,s]=(0,P.useState)(null),l=Yo(a);return!a&&!o&&l&&r(l),ct(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),P.default.createElement(P.default.Fragment,null,a,o?(0,P.cloneElement)(o,{ref:s}):null)}var vh={x:0,y:0,scaleX:1,scaleY:1};function wh(e){let{children:t}=e;return P.default.createElement(sr.Provider,{value:Ji},P.default.createElement(jr.Provider,{value:vh},t))}var Sh={position:"fixed",touchAction:"none"},yh=e=>ho(e)?"transform 250ms ease":void 0,Rh=(0,P.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:s,rect:l,style:i,transform:u,transition:c=yh}=e;if(!l)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Sh,width:l.width,height:l.height,top:l.top,left:l.left,transform:dt.Transform.toString(d),transformOrigin:r&&o?Sm(o,l):void 0,transition:typeof c=="function"?c(o):c,...i};return P.default.createElement(a,{className:s,style:f,ref:t},n)}),kh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:s}=e;if(n!=null&&n.active)for(let[l,i]of Object.entries(n.active))i!==void 0&&(r[l]=a.node.style.getPropertyValue(l),a.node.style.setProperty(l,i));if(n!=null&&n.dragOverlay)for(let[l,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(l,i);return s!=null&&s.active&&a.node.classList.add(s.active),s!=null&&s.dragOverlay&&o.node.classList.add(s.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);s!=null&&s.active&&a.node.classList.remove(s.active)}},Ph=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:dt.Transform.toString(t)},{transform:dt.Transform.toString(a)}]},Dh={duration:250,easing:"ease",keyframes:Ph,sideEffects:kh({styles:{active:{opacity:"0"}}})};function Mh(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return jo((n,s)=>{if(t===null)return;let l=a.get(n);if(!l)return;let i=l.node.current;if(!i)return;let u=Zi(s);if(!u)return;let{transform:c}=Ze(s).getComputedStyle(s),d=qi(c);if(!d)return;let f=typeof t=="function"?t:Ah(t);return ji(i,r.draggable.measure),f({active:{id:n,data:l.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:s,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function Ah(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Dh,...e};return n=>{let{active:s,dragOverlay:l,transform:i,...u}=n;if(!t)return;let c={x:l.rect.left-s.rect.left,y:l.rect.top-s.rect.top},d={scaleX:i.scaleX!==1?s.rect.width*i.scaleX/l.rect.width:1,scaleY:i.scaleY!==1?s.rect.height*i.scaleY/l.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},p=r({...u,active:s,dragOverlay:l,transform:{initial:i,final:f}}),[g]=p,h=p[p.length-1];if(JSON.stringify(g)===JSON.stringify(h))return;let m=o?.({active:s,dragOverlay:l,...u}),x=l.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(I=>{x.onfinish=()=>{m?.(),I()}})}}var Bi=0;function Th(e){return(0,P.useMemo)(()=>{if(e!=null)return Bi++,Bi},[e])}var au=P.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:s,wrapperElement:l="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:g,droppableContainers:h,dragOverlay:m,over:x,measuringConfiguration:I,scrollableAncestors:L,scrollableAncestorRects:b,windowRect:y}=lr(),C=(0,P.useContext)(jr),w=Th(d?.id),D=eu(s,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:L,scrollableAncestorRects:b,transform:C,windowRect:y}),R=gs(f),k=Mh({config:o,draggableNodes:g,droppableContainers:h,measuringConfiguration:I}),S=R?m.setRef:void 0;return P.default.createElement(wh,null,P.default.createElement(bh,{animation:k},d&&w?P.default.createElement(Rh,{key:w,id:d.id,ref:S,as:l,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:R,style:{zIndex:u,...r},transform:D},a):null))});var Pe=j(require("react"));function ou(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Eh(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Zr(e){return e!==null&&e>=0}function Oh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Fh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var ru=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=ou(t,o,a),s=t[r],l=n[r];return!l||!s?null:{x:l.left-s.left,y:l.top-s.top,scaleX:l.width/s.width,scaleY:l.height/s.height}};var Jr={scaleX:1,scaleY:1},en=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:s}=e,l=(t=n[a])!=null?t:o;if(!l)return null;if(r===a){let u=n[s];return u?{x:0,y:a<s?u.top+u.height-(l.top+l.height):u.top-l.top,...Jr}:null}let i=Bh(n,r,a);return r>a&&r<=s?{x:0,y:-l.height-i,...Jr}:r<a&&r>=s?{x:0,y:l.height+i,...Jr}:{x:0,y:0,...Jr}};function Bh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var nu="Sortable",su=Pe.default.createContext({activeIndex:-1,containerId:nu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:ru,disabled:{draggable:!1,droppable:!1}});function tn(e){let{children:t,id:a,items:o,strategy:r=ru,disabled:n=!1}=e,{active:s,dragOverlay:l,droppableRects:i,over:u,measureDroppableContainers:c}=lr(),d=Sa(nu,a),f=l.rect!==null,p=(0,Pe.useMemo)(()=>o.map(C=>typeof C=="object"&&"id"in C?C.id:C),[o]),g=s!=null,h=s?p.indexOf(s.id):-1,m=u?p.indexOf(u.id):-1,x=(0,Pe.useRef)(p),I=!Oh(p,x.current),L=m!==-1&&h===-1||I,b=Fh(n);ct(()=>{I&&g&&c(p)},[I,p,g,c]),(0,Pe.useEffect)(()=>{x.current=p},[p]);let y=(0,Pe.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:L,items:p,overIndex:m,useDragOverlay:f,sortedRects:Eh(p,i),strategy:r}),[h,d,b.draggable,b.droppable,L,p,m,i,f,r]);return Pe.default.createElement(su.Provider,{value:y},t)}var Nh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return ou(a,o,r).indexOf(t)},_h=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:s,previousItems:l,previousContainerId:i,transition:u}=e;return!u||!o||l!==n&&r===s?!1:a?!0:s!==r&&t===i},Hh={duration:200,easing:"ease"},lu="transform",Uh=dt.Transition.toString({property:lu,duration:0,easing:"linear"}),qh={roleDescription:"sortable"};function Wh(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,s]=(0,Pe.useState)(null),l=(0,Pe.useRef)(a);return ct(()=>{if(!t&&a!==l.current&&o.current){let i=r.current;if(i){let u=Ta(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&s(c)}}a!==l.current&&(l.current=a)},[t,a,o,r]),(0,Pe.useEffect)(()=>{n&&s(null)},[n]),n}function an(e){let{animateLayoutChanges:t=_h,attributes:a,disabled:o,data:r,getNewIndex:n=Nh,id:s,strategy:l,resizeObserverConfig:i,transition:u=Hh}=e,{items:c,containerId:d,activeIndex:f,disabled:p,disableTransforms:g,sortedRects:h,overIndex:m,useDragOverlay:x,strategy:I}=(0,Pe.useContext)(su),L=Vh(o,p),b=c.indexOf(s),y=(0,Pe.useMemo)(()=>({sortable:{containerId:d,index:b,items:c},...r}),[d,r,b,c]),C=(0,Pe.useMemo)(()=>c.slice(c.indexOf(s)),[c,s]),{rect:w,node:D,isOver:R,setNodeRef:k}=Yr({id:s,data:y,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...i}}),{active:S,activatorEvent:A,activeNodeRect:_,attributes:H,setNodeRef:Y,listeners:K,isDragging:V,over:q,setActivatorNodeRef:z,transform:W}=tu({id:s,data:y,attributes:{...qh,...a},disabled:L.draggable}),E=Li(k,Y),G=!!S,te=G&&!g&&Zr(f)&&Zr(m),Ae=!x&&V,Ie=Ae&&te?W:null,pe=te?Ie??(l??I)({rects:h,activeNodeRect:_,activeIndex:f,overIndex:m,index:b}):null,me=Zr(f)&&Zr(m)?n({id:s,items:c,activeIndex:f,overIndex:m}):b,he=S?.id,N=(0,Pe.useRef)({activeId:he,items:c,newIndex:me,containerId:d}),de=c!==N.current.items,oe=t({active:S,containerId:d,isDragging:V,isSorting:G,id:s,index:b,items:c,newIndex:N.current.newIndex,previousItems:N.current.items,previousContainerId:N.current.containerId,transition:u,wasDragging:N.current.activeId!=null}),v=Wh({disabled:!oe,index:b,node:D,rect:w});return(0,Pe.useEffect)(()=>{G&&N.current.newIndex!==me&&(N.current.newIndex=me),d!==N.current.containerId&&(N.current.containerId=d),c!==N.current.items&&(N.current.items=c)},[G,me,d,c]),(0,Pe.useEffect)(()=>{if(he===N.current.activeId)return;if(he!=null&&N.current.activeId==null){N.current.activeId=he;return}let T=setTimeout(()=>{N.current.activeId=he},50);return()=>clearTimeout(T)},[he]),{active:S,activeIndex:f,attributes:H,data:y,rect:w,index:b,newIndex:me,items:c,isOver:R,isSorting:G,isDragging:V,listeners:K,node:D,overIndex:m,over:q,setNodeRef:E,setActivatorNodeRef:z,setDroppableNodeRef:k,setDraggableNodeRef:Y,transform:v??pe,transition:M()};function M(){if(v||de&&N.current.newIndex===b)return Uh;if(!(Ae&&!ho(A)||!u)&&(G||oe))return dt.Transition.toString({...u,property:lu})}}function Vh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Qr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var zh=[re.Down,re.Right,re.Up,re.Left],on=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:s,scrollableAncestors:l}}=t;if(zh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=Xr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=rr(u,"id");if(c===s?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,g=f?.node.current;if(g&&p&&d&&f){let m=nr(g).some((C,w)=>l[w]!==C),x=iu(d,f),I=Gh(d,f),L=m||!x?{x:0,y:0}:{x:I?o.width-p.width:0,y:I?o.height-p.height:0},b={x:p.left,y:p.top};return L.x&&L.y?b:Ra(b,L)}}}};function iu(e,t){return!Qr(e)||!Qr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Gh(e,t){return!Qr(e)||!Qr(t)||!iu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var rn=require("react");var uu=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function du(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:uu(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var cu=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var fu=e=>{let t=cu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var ur=require("react");var ir=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var ua={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function xs(e){return e!=null}function pu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??ua.width,n=e.size??e.height??ua.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?ir(...i):ir("lucide",...l,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??ua["stroke-width"])*Number(e.size??e.width??ua.width)/Number(t.size??t.width??ua.width):t.strokeWidth??ua["stroke-width"];return["svg",{...Object.entries(ua).reduce((f,[p,g])=>(f[o(p)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&xs(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&xs(t.width)&&{[o("width")]:t.width},..."height"in t&&xs(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,g,h]=f,m=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return h?[p,m,h]:[p,m]})]}function mu(e,t={}){return pu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var hu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var xo=require("react");var Xh=(0,xo.createContext)({});var gu=()=>(0,xo.useContext)(Xh);var xu=(0,ur.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:s,className:l="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:h=!1,nonScalingStroke:m=!1,color:x="currentColor",className:I=""}=gu()??{},L=!!i||hu(d),[b,y,C=[]]=mu(c,{color:e??x,width:a??t??p,height:o??t??p,strokeWidth:r??g,absoluteStrokeWidth:n??h,nonScalingStroke:s??m,className:ir(I,l),hasA11yProp:L,attributes:d});return(0,ur.createElement)(b,{ref:f,...y},[...C.map(([w,D])=>(0,ur.createElement)(w,D)),...Array.isArray(i)?i:[i]])});function ie(e,t=[],a=[]){let o=typeof e=="string"?du(e,t,a):e,r=(0,rn.forwardRef)(({className:n,...s},l)=>(0,rn.createElement)(xu,{ref:l,icon:o,className:n,...s}));return o.name&&(r.displayName=fu(o.name)),r}var Lu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Lu.node;var ft=ie(Lu);var Cu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Cu.node;var Lo=ie(Cu);var Iu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Iu.node;var dr=ie(Iu);var bu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};bu.node;var da=ie(bu);var vu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};vu.node;var cr=ie(vu);var wu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};wu.node;var fr=ie(wu);var Su={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Su.node;var Ea=ie(Su);var yu={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};yu.node;var pr=ie(yu);var Ru={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Ru.node;var $t=ie(Ru);var ku={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};ku.node;var mr=ie(ku);var Pu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Pu.node;var hr=ie(Pu);var Du={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};Du.node;var gr=ie(Du);var Mu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Mu.node;var Co=ie(Mu);var Au={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Au.node;var bt=ie(Au);var Tu={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Tu.node;var ca=ie(Tu);var He=require("react");var Np=require("@deepseek-ai/dsh-client-ui-primitives");var Gu=j(require("react"),1);var Xe=j(require("react"),1);var Eu=j(require("react"),1),Kh=Object.defineProperty,Cs=(e,t)=>Kh(e,"name",{value:t,configurable:!0});function Ls(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Cs(Ls,"setRef");function Ou(...e){return t=>{let a=!1,o=e.map(r=>{let n=Ls(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():Ls(e[r],null)}}}}Cs(Ou,"composeRefs");function ee(...e){return Eu.useCallback(Ou(...e),e)}Cs(ee,"useComposedRefs");var jh=Object.defineProperty,pt=(e,t)=>jh(e,"name",{value:t,configurable:!0});function Je(e){let t=Xe.forwardRef((a,o)=>{let{children:r,...n}=a,s=null,l=!1,i=[];r=qu(r),Xe.Children.forEach(r,f=>{if(Hu(f)){l=!0;let p=f,g="child"in p.props?p.props.child:p.props.children;for(;Is(g)&&typeof nn=="function";)g=nn(g._payload);s=Yh(p,g),i.push(s?.props?.children)}else i.push(f)}),s?s=Xe.cloneElement(s,void 0,i):!l&&Xe.Children.count(r)===1&&Xe.isValidElement(r)&&(s=r);let u=s?_u(s):void 0,c=ee(o,u);if(!s){if(r||r===0)throw new Error(l?Qh(e):Jh(e));return r}let d=Nu(n,s.props??{});return s.type!==Xe.Fragment&&(d.ref=o?c:u),Xe.cloneElement(s,d)});return t.displayName=`${e}.Slot`,t}pt(Je,"createSlot");var Fu=Je("Slot"),Bu=Symbol.for("radix.slottable");function $h(e){let t=pt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Bu,t}pt($h,"createSlottable");var Yh=pt((e,t)=>"child"in e.props?Xe.isValidElement(t)?Xe.cloneElement(t,void 0,e.props.children(t.props.children)):null:Xe.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function Nu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...l)=>{let i=n(...l);return r(...l),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=Wu(n,r))}return{...e,...a}}pt(Nu,"mergeProps");function _u(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}pt(_u,"getElementRef");function Hu(e){return Xe.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Bu}pt(Hu,"isSlottable");var Zh=Symbol.for("react.lazy");function Is(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Zh&&"_payload"in e&&Uu(e._payload)}pt(Is,"isLazyComponent");function Uu(e){return typeof e=="object"&&e!==null&&"then"in e}pt(Uu,"isPromiseLike");function qu(e){let t=e;for(;Is(t)&&typeof nn=="function";)t=nn(t._payload);return t}pt(qu,"useUnwrappedLazy");function Wu(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}pt(Wu,"concatAriaDescribedby");var Jh=pt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Qh=pt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),nn=Xe[" use ".trim().toString()];function Vu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Vu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function zu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Vu(e))&&(o&&(o+=" "),o+=t);return o}function Q(...e){return zu(e)}var Xu=require("react/jsx-runtime");function eg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return Q("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var ce=Gu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Xu.jsx)(o?Fu:"button",{className:eg({variant:t,size:a,className:e}),ref:n,...r}));ce.displayName="Button";var Rr=j(require("react"),1);var Le=j(require("react"),1);var tg=Object.defineProperty,Io=(e,t)=>tg(e,"name",{value:t,configurable:!0}),Ku=!!(typeof window<"u"&&window.document&&window.document.createElement);function $(e,t,{checkForDefaultPrevented:a=!0}={}){return Io(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}Io($,"composeEventHandlers");function ag(e){if(!Ku)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}Io(ag,"getOwnerWindow");function bs(e){if(!Ku)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}Io(bs,"getOwnerDocument");function ju(e,t=!1){let{activeElement:a}=bs(e);if(!a?.nodeName)return null;if($u(a)&&a.contentDocument)return ju(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=bs(a).getElementById(o);if(r)return r}}return a}Io(ju,"getActiveElement");function $u(e){return e.tagName==="IFRAME"}Io($u,"isFrame");var wt=j(require("react"),1),vs=require("react/jsx-runtime"),og=Object.defineProperty,vt=(e,t)=>og(e,"name",{value:t,configurable:!0});function rg(e,t){let a=wt.createContext(t);a.displayName=e+"Context";let o=vt(n=>{let{children:s,...l}=n,i=wt.useMemo(()=>l,Object.values(l));return(0,vs.jsx)(a.Provider,{value:i,children:s})},"Provider");o.displayName=e+"Provider";function r(n,s={}){let{optional:l=!1}=s,i=wt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!l)throw new Error(`\`${n}\` must be used within \`${e}\``)}return vt(r,"useContext"),[o,r]}vt(rg,"createContext");function Ke(e,t=[]){let a=[];function o(n,s){let l=wt.createContext(s);l.displayName=n+"Context";let i=a.length;a=[...a,s];let u=vt(d=>{let{scope:f,children:p,...g}=d,h=f?.[e]?.[i]||l,m=wt.useMemo(()=>g,Object.values(g));return(0,vs.jsx)(h.Provider,{value:m,children:p})},"Provider");u.displayName=n+"Provider";function c(d,f,p={}){let{optional:g=!1}=p,h=f?.[e]?.[i]||l,m=wt.useContext(h);if(m)return m;if(s!==void 0)return s;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return vt(c,"useContext"),[u,c]}vt(o,"createContext");let r=vt(()=>{let n=a.map(s=>wt.createContext(s));return vt(function(l){let i=l?.[e]||n;return wt.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return r.scopeName=e,[o,Yu(r,...t)]}vt(Ke,"createContextScope");function Yu(...e){let t=e[0];if(e.length===1)return t;let a=vt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return vt(function(n){let s=o.reduce((l,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...l,...d}},{});return wt.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}vt(Yu,"composeContextScopes");var ws=j(require("react"),1);var Zu=j(require("react"),1),se=globalThis?.document?Zu.useLayoutEffect:()=>{};var ng=Object.defineProperty,sg=(e,t)=>ng(e,"name",{value:t,configurable:!0}),lg=ws[" useId ".trim().toString()]||(()=>{}),ig=0;function mt(e){let[t,a]=ws.useState(lg());return se(()=>{e||a(o=>o??String(ig++))},[e]),e||(t?`radix-${t}`:"")}sg(mt,"useId");var St=j(require("react"),1);var sn=!1;var Dt=j(require("react"),1);var bo=j(require("react"),1),ug=Object.defineProperty,dg=(e,t)=>ug(e,"name",{value:t,configurable:!0}),Ju=bo[" useEffectEvent ".trim().toString()],Qu=bo[" useInsertionEffect ".trim().toString()];function Ss(e){if(typeof Ju=="function")return Ju(e);let t=bo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Qu=="function"?Qu(()=>{t.current=e}):se(()=>{t.current=e}),bo.useMemo(()=>((...a)=>t.current?.(...a)),[])}dg(Ss,"useEffectEvent");var cg=Object.defineProperty,xr=(e,t)=>cg(e,"name",{value:t,configurable:!0}),fg=St[" useInsertionEffect ".trim().toString()]||se;function Ut({prop:e,defaultProp:t,onChange:a=xr(()=>{},"onChange"),caller:o}){let[r,n,s]=td({defaultProp:t,onChange:a}),l=e!==void 0,i=l?e:r;if(sn){let c=St.useRef(e!==void 0);St.useEffect(()=>{let d=c.current;d!==l&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,o])}let u=St.useCallback(c=>{if(l){let d=ad(c)?c(e):c;d!==e&&s.current?.(d)}else n(c)},[l,e,n,s]);return[i,u]}xr(Ut,"useControllableState");function td({defaultProp:e,onChange:t}){let[a,o]=St.useState(e),r=St.useRef(a),n=St.useRef(t);return fg(()=>{n.current=t},[t]),St.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}xr(td,"useUncontrolledState");function ad(e){return typeof e=="function"}xr(ad,"isFunction");var ed=Symbol("RADIX:SYNC_STATE");function pg(e,t,a,o){let{prop:r,defaultProp:n,onChange:s,caller:l}=t,i=r!==void 0,u=Ss(s);if(sn){let m=Dt.useRef(r!==void 0);Dt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,l])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=Dt.useReducer((m,x)=>{if(x.type===ed)return{...m,state:x.state};let I=e(m,x);return i&&!Object.is(I.state,m.state)&&u(I.state),I},...c),p=d.state,g=Dt.useRef(p);Dt.useEffect(()=>{g.current!==p&&(g.current=p,i||u(p))},[p,g,i]);let h=Dt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return Dt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:ed,state:r})},[r,d.state,i]),[h,f]}xr(pg,"useControllableStateReducer");var ge=j(require("react"),1);var od=j(require("react"),1),rd=j(require("react-dom"),1);var nd=require("react/jsx-runtime"),mg=Object.defineProperty,hg=(e,t)=>mg(e,"name",{value:t,configurable:!0}),gg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ae=gg.reduce((e,t)=>{let a=Je(`Primitive.${t}`),o=od.forwardRef((r,n)=>{let{asChild:s,...l}=r,i=s?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,nd.jsx)(i,{...l,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Lr(e,t){e&&rd.flushSync(()=>e.dispatchEvent(t))}hg(Lr,"dispatchDiscreteCustomEvent");var Cr=j(require("react"),1),xg=Object.defineProperty,Lg=(e,t)=>xg(e,"name",{value:t,configurable:!0}),sd=Cr[" useInsertionEffect ".trim().toString()];function qe(e){let t=Cr.useRef(e);return typeof sd=="function"?sd(()=>{t.current=e}):se(()=>{t.current=e}),Cr.useMemo(()=>((...a)=>t.current?.(...a)),[])}Lg(qe,"useCallbackRef");var id=require("react/jsx-runtime"),Cg=Object.defineProperty,We=(e,t)=>Cg(e,"name",{value:t,configurable:!0}),ys="dismissableLayer.update",Ig="dismissableLayer.pointerDownOutside",bg="dismissableLayer.focusOutside",ld,ud=ge.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),vo=ge.forwardRef(We(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:i,onDismiss:u,...c}=t,d=ge.useContext(ud),[f,p]=ge.useState(null),g=f?.ownerDocument??globalThis?.document,[,h]=ge.useState({}),m=ee(a,p),x=Array.from(d.layers),[I]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=I?x.indexOf(I):-1,b=f?x.indexOf(f):-1,y=d.layersWithOutsidePointerEventsDisabled.size>0,C=b>=L,w=ge.useRef(!1),D=dd(A=>{s?.(A),i?.(A),A.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:w,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ge.useCallback(A=>{if(!(A instanceof Node))return!1;let _=[...d.branches].some(H=>H.contains(A));return C&&!_},[d.branches,C])}),R=cd(A=>{if(r&&w.current)return;let _=A.target;[...d.branches].some(Y=>Y.contains(_))||(l?.(A),i?.(A),A.defaultPrevented||u?.())},g),k=f?b===x.length-1:!1,S=qe(A=>{A.key==="Escape"&&(n?.(A),!A.defaultPrevented&&u&&(A.preventDefault(),u()))});return ge.useEffect(()=>{if(k)return g.addEventListener("keydown",S,{capture:!0}),()=>g.removeEventListener("keydown",S,{capture:!0})},[g,k,S]),ge.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(ld=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Rs(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=ld))}},[f,g,o,d]),ge.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Rs())},[f,d]),ge.useEffect(()=>{let A=We(()=>h({}),"handleUpdate");return document.addEventListener(ys,A),()=>document.removeEventListener(ys,A)},[]),(0,id.jsx)(ae.div,{...c,ref:m,style:{pointerEvents:y?C?"auto":"none":void 0,...t.style},onFocusCapture:$(t.onFocusCapture,R.onFocusCapture),onBlurCapture:$(t.onBlurCapture,R.onBlurCapture),onPointerDownCapture:$(t.onPointerDownCapture,D.onPointerDownCapture)})},"DismissableLayer"));function ks(){let e=ge.useContext(ud),[t,a]=ge.useState(null);return ge.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}We(ks,"useDismissableLayerSurface");var vg=We(()=>!0,"IS_TRUE");function dd(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:s=vg}=t,l=qe(e),i=ge.useRef(!1),u=ge.useRef(!1),c=ge.useRef(new Map),d=ge.useRef(()=>{});return ge.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}We(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}We(p,"isOutsideInteractionIntercepted");function g(L){if(!u.current)return;let b=L.target;b instanceof Node&&[...n].some(C=>C.contains(b))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}We(g,"handleInteractionCapture");function h(L){u.current&&c.current.set(L.type,!1)}We(h,"handleInteractionBubble");let m=We(L=>{if(L.target&&!i.current){let y=function(){a.removeEventListener("click",d.current);let w=p();f(),w||Ps(Ig,l,C,{discrete:!0})};var b=y;if(We(y,"handleAndDispatchPointerDownOutsideEvent"),!s(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let C={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?y():(a.removeEventListener("click",d.current),d.current=y,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,g,!0),a.addEventListener(L,h);let I=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(I),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,g,!0),a.removeEventListener(L,h)}},[a,l,o,r,n,s]),{onPointerDownCapture:We(()=>i.current=!0,"onPointerDownCapture")}}We(dd,"usePointerDownOutside");function cd(e,t=globalThis?.document){let a=qe(e),o=ge.useRef(!1);return ge.useEffect(()=>{let r=We(n=>{n.target&&!o.current&&Ps(bg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:We(()=>o.current=!0,"onFocusCapture"),onBlurCapture:We(()=>o.current=!1,"onBlurCapture")}}We(cd,"useFocusOutside");function Rs(){let e=new CustomEvent(ys);document.dispatchEvent(e)}We(Rs,"dispatchUpdate");function Ps(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?Lr(r,n):r.dispatchEvent(n)}We(Ps,"handleAndDispatchCustomEvent");var ye=j(require("react"),1);var Es=require("react/jsx-runtime"),wg=Object.defineProperty,Te=(e,t)=>wg(e,"name",{value:t,configurable:!0}),Ds="focusScope.autoFocusOnMount",Ms="focusScope.autoFocusOnUnmount",fd={bubbles:!1,cancelable:!0},wo=ye.forwardRef(Te(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:s,onUnmountAutoFocus:l,...i}=t,[u,c]=ye.useState(null),d=qe(s),f=qe(l),p=ye.useRef(null),g=ee(a,c),h=ye.useRef(n);ye.useEffect(()=>{h.current=n});let m=ye.useCallback(L=>L?u?.contains(L)?!0:!!h.current?.some(b=>b.contains(L)):!1,[u]),x=ye.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ye.useEffect(()=>{if(r){let C=function(k){if(x.paused||!u)return;let S=k.target;m(S)?p.current=S:Yt(p.current,{select:!0})},w=function(k){if(x.paused||!u)return;let S=k.relatedTarget;S!==null&&(m(S)||Yt(p.current,{select:!0}))},D=function(k){if(document.activeElement===document.body)for(let A of k)A.removedNodes.length>0&&Yt(u)};var L=C,b=w,y=D;Te(C,"handleFocusIn"),Te(w,"handleFocusOut"),Te(D,"handleMutations"),document.addEventListener("focusin",C),document.addEventListener("focusout",w);let R=new MutationObserver(D);return u&&R.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",w),R.disconnect()}}},[r,u,x.paused,m]),ye.useEffect(()=>{if(u){pd.add(x);let L=document.activeElement;if(!u.contains(L)){let y=new CustomEvent(Ds,fd);u.addEventListener(Ds,d),u.dispatchEvent(y),y.defaultPrevented||(hd(Id(Fs(u)),{select:!0}),document.activeElement===L&&Yt(u))}return()=>{u.removeEventListener(Ds,d);let y=u.ownerDocument,C=CustomEvent;setTimeout(()=>{let w=new C(Ms,fd);u.addEventListener(Ms,f),u.dispatchEvent(w),w.defaultPrevented||Yt(L??y.body,{select:!0}),u.removeEventListener(Ms,f),pd.remove(x)},0)}}},[u,d,f,x]);let I=ye.useCallback(L=>{if(!o&&!r||x.paused)return;let b=L.key==="Tab"&&!L.altKey&&!L.ctrlKey&&!L.metaKey,y=document.activeElement;if(b&&y){let C=L.currentTarget,[w,D]=gd(C);w&&D?!L.shiftKey&&y===D?(L.preventDefault(),o&&Yt(w,{select:!0})):L.shiftKey&&y===w&&(L.preventDefault(),o&&Yt(D,{select:!0})):y===C&&L.preventDefault()}},[o,r,x.paused]);return(0,Es.jsx)(ae.div,{tabIndex:-1,...i,ref:g,onKeyDown:I})},"FocusScope")),md=ye.createContext(null);function Ir({registry:e,children:t}){return e?(0,Es.jsx)(md.Provider,{value:e,children:t}):t}Te(Ir,"FocusScopeBranchProvider");function br(){let[e,t]=ye.useState([]),a=ye.useMemo(()=>({add:Te(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Te(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Te(br,"useFocusScopeBranchRegistry");function Os(e){let t=ye.useContext(md);ye.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Te(Os,"useFocusScopeBranch");function hd(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Yt(o,{select:t}),document.activeElement!==a)return}Te(hd,"focusFirst");function gd(e){let t=Fs(e),a=As(t,e),o=As(t.reverse(),e);return[a,o]}Te(gd,"getTabbableEdges");function Fs(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Te(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Te(Fs,"getTabbableCandidates");function As(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):xd(o,{upTo:t})))return o}Te(As,"findVisible");function xd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Te(xd,"isHidden");function Ld(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Te(Ld,"isSelectableInput");function Yt(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Ld(e)&&t&&e.select()}}Te(Yt,"focus");var pd=Cd();function Cd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Ts(e,t),e.unshift(t)},remove(t){e=Ts(e,t),e[0]?.resume()}}}Te(Cd,"createFocusScopesStack");function Ts(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Te(Ts,"arrayRemove");function Id(e){return e.filter(t=>t.tagName!=="A")}Te(Id,"removeLinks");var ln=j(require("react"),1),bd=j(require("react-dom"),1);var vd=require("react/jsx-runtime"),Sg=Object.defineProperty,yg=(e,t)=>Sg(e,"name",{value:t,configurable:!0}),So=ln.forwardRef(yg(function(t,a){let{container:o,...r}=t,[n,s]=ln.useState(!1);se(()=>s(!0),[]);let l=o||n&&globalThis?.document?.body;return l?bd.createPortal((0,vd.jsx)(ae.div,{...r,ref:a}),l):null},"Portal"));var je=j(require("react"),1);var wd=j(require("react"),1),Rg=Object.defineProperty,Zt=(e,t)=>Rg(e,"name",{value:t,configurable:!0});function Sd(e,t){return wd.useReducer((a,o)=>t[a][o]??a,e)}Zt(Sd,"useStateMachine");var Jt=Zt(e=>{let{present:t,children:a}=e,o=yd(t),r=typeof a=="function"?a({present:o.isPresent}):je.Children.only(a),n=Rd(o.ref,kd(r));return typeof a=="function"||o.isPresent?je.cloneElement(r,{ref:n}):null},"Presence");function yd(e){let[t,a]=je.useState(),o=je.useRef(null),r=je.useRef(e),n=je.useRef("none"),s=je.useRef(void 0),l=e?"mounted":"unmounted",[i,u]=Sd(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return je.useEffect(()=>{i==="mounted"?(n.current=s.current??yo(o.current),s.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let p=n.current,g=yo(c);e?(s.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&p!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Zt(g=>{let m=yo(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),p=Zt(g=>{g.target===t&&(n.current=yo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:je.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,s.current=yo(d)}else o.current=null;a(c)},[])}}Zt(yd,"usePresence");function Bs(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Zt(Bs,"setRef");function Rd(...e){let t=je.useRef(e);return t.current=e,je.useCallback(a=>{let o=t.current,r=!1,n=o.map(s=>{let l=Bs(s,a);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<n.length;s++){let l=n[s];typeof l=="function"?l():Bs(o[s],null)}}},[])}Zt(Rd,"useStableComposedRefs");function yo(e){return e?.animationName||"none"}Zt(yo,"getAnimationName");function kd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Zt(kd,"getElementRef");var Pd=j(require("react"),1),kg=Object.defineProperty,_s=(e,t)=>kg(e,"name",{value:t,configurable:!0}),un=0,Ro=null;function Pg(e){return fa(),e.children}_s(Pg,"FocusGuards");function fa(){Pd.useEffect(()=>{Ro||(Ro={start:Ns(),end:Ns()});let{start:e,end:t}=Ro;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),un++,()=>{un===1&&(Ro?.start.remove(),Ro?.end.remove(),Ro=null),un=Math.max(0,un-1)}},[])}_s(fa,"useFocusGuards");function Ns(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}_s(Ns,"createFocusGuard");var rt=function(){return rt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},rt.apply(this,arguments)};function dn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Dd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var hn=j(require("react"));var Qe=j(require("react"));var Oa="right-scroll-bar-position",Fa="width-before-scroll-bar",Hs="with-scroll-bars-hidden",Us="--removed-body-scroll-bar-size";function cn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Md=require("react");function Ad(e,t){var a=(0,Md.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var fn=j(require("react"));var Dg=typeof window<"u"?fn.useLayoutEffect:fn.useEffect,Td=new WeakMap;function qs(e,t){var a=Ad(t||null,function(o){return e.forEach(function(r){return cn(r,o)})});return Dg(function(){var o=Td.get(a);if(o){var r=new Set(o),n=new Set(e),s=a.current;r.forEach(function(l){n.has(l)||cn(l,null)}),n.forEach(function(l){r.has(l)||cn(l,s)})}Td.set(a,e)},[e]),a}function Mg(e){return e}function Ag(e,t){t===void 0&&(t=Mg);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var s=t(n,o);return a.push(s),function(){a=a.filter(function(l){return l!==s})}},assignSyncMedium:function(n){for(o=!0;a.length;){var s=a;a=[],s.forEach(n)}a={push:function(l){return n(l)},filter:function(){return a}}},assignMedium:function(n){o=!0;var s=[];if(a.length){var l=a;a=[],l.forEach(n),s=a}var i=function(){var c=s;s=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),a}}}};return r}function Ws(e){e===void 0&&(e={});var t=Ag(null);return t.options=rt({async:!0,ssr:!1},e),t}var Ed=j(require("react")),Od=function(e){var t=e.sideCar,a=dn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return Ed.createElement(o,rt({},a))};Od.isSideCarExport=!0;function Vs(e,t){return e.useMedium(t),Od}var pn=Ws();var zs=function(){},vr=Qe.forwardRef(function(e,t){var a=Qe.useRef(null),o=Qe.useState({onScrollCapture:zs,onWheelCapture:zs,onTouchMoveCapture:zs}),r=o[0],n=o[1],s=e.forwardProps,l=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,g=e.noIsolation,h=e.inert,m=e.allowPinchZoom,x=e.as,I=x===void 0?"div":x,L=e.gapMode,b=dn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=f,C=qs([a,t]),w=rt(rt({},b),r);return Qe.createElement(Qe.Fragment,null,c&&Qe.createElement(y,{sideCar:pn,removeScrollBar:u,shards:d,noRelative:p,noIsolation:g,inert:h,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:L}),s?Qe.cloneElement(Qe.Children.only(l),rt(rt({},w),{ref:C})):Qe.createElement(I,rt({},w,{className:i,ref:C}),l))});vr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};vr.classNames={fullWidth:Fa,zeroRight:Oa};var ve=j(require("react"));var Po=j(require("react"));var Nd=j(require("react"));var Fd;var Bd=function(){if(Fd)return Fd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Tg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Bd();return t&&e.setAttribute("nonce",t),e}function Eg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Og(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Gs=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Tg())&&(Eg(t,a),Og(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Xs=function(){var e=Gs();return function(t,a){Nd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var wr=function(){var e=Xs(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Fg={left:0,top:0,right:0,gap:0},Ks=function(e){return parseInt(e||"",10)||0},Bg=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Ks(a),Ks(o),Ks(r)]},js=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Fg;var t=Bg(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Ng=wr(),ko="data-scroll-locked",_g=function(e,t,a,o){var r=e.left,n=e.top,s=e.right,l=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Hs,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(l,"px ").concat(o,`;
  }
  body[`).concat(ko,`] {
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
  
  .`).concat(Oa,` {
    right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(Fa,` {
    margin-right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(Oa," .").concat(Oa,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Fa," .").concat(Fa,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(ko,`] {
    `).concat(Us,": ").concat(l,`px;
  }
`)},_d=function(){var e=parseInt(document.body.getAttribute(ko)||"0",10);return isFinite(e)?e:0},Hg=function(){Po.useEffect(function(){return document.body.setAttribute(ko,(_d()+1).toString()),function(){var e=_d()-1;e<=0?document.body.removeAttribute(ko):document.body.setAttribute(ko,e.toString())}},[])},$s=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Hg();var n=Po.useMemo(function(){return js(r)},[r]);return Po.createElement(Ng,{styles:_g(n,!t,r,a?"":"!important")})};var Ys=!1;if(typeof window<"u")try{Sr=Object.defineProperty({},"passive",{get:function(){return Ys=!0,!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Ys=!1}var Sr,Ba=Ys?{passive:!1}:!1;var Ug=function(e){return e.tagName==="TEXTAREA"},Hd=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Ug(e)&&a[t]==="visible")},qg=function(e){return Hd(e,"overflowY")},Wg=function(e){return Hd(e,"overflowX")},Zs=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Ud(e,o);if(r){var n=qd(e,o),s=n[1],l=n[2];if(s>l)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Vg=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},zg=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},Ud=function(e,t){return e==="v"?qg(t):Wg(t)},qd=function(e,t){return e==="v"?Vg(t):zg(t)},Gg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Wd=function(e,t,a,o,r){var n=Gg(e,window.getComputedStyle(t).direction),s=n*o,l=a.target,i=t.contains(l),u=!1,c=s>0,d=0,f=0;do{if(!l)break;var p=qd(e,l),g=p[0],h=p[1],m=p[2],x=h-m-n*g;(g||x)&&Ud(e,l)&&(d+=x,f+=g);var I=l.parentNode;l=I&&I.nodeType===Node.DOCUMENT_FRAGMENT_NODE?I.host:I}while(!i&&l!==document.body||i&&(t.contains(l)||t===l));return(c&&(r&&Math.abs(d)<1||!r&&s>d)||!c&&(r&&Math.abs(f)<1||!r&&-s>f))&&(u=!0),u};var mn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Vd=function(e){return[e.deltaX,e.deltaY]},zd=function(e){return e&&"current"in e?e.current:e},Xg=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Kg=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},jg=0,Do=[];function Gd(e){var t=ve.useRef([]),a=ve.useRef([0,0]),o=ve.useRef(),r=ve.useState(jg++)[0],n=ve.useState(wr)[0],s=ve.useRef(e);ve.useEffect(function(){s.current=e},[e]),ve.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var h=Dd([e.lockRef.current],(e.shards||[]).map(zd),!0).filter(Boolean);return h.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),h.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var l=ve.useCallback(function(h,m){if("touches"in h&&h.touches.length===2||h.type==="wheel"&&h.ctrlKey)return!s.current.allowPinchZoom;var x=mn(h),I=a.current,L="deltaX"in h?h.deltaX:I[0]-x[0],b="deltaY"in h?h.deltaY:I[1]-x[1],y,C=h.target,w=Math.abs(L)>Math.abs(b)?"h":"v";if("touches"in h&&w==="h"&&C.type==="range")return!1;var D=window.getSelection(),R=D&&D.anchorNode,k=R?R===C||R.contains(C):!1;if(k)return!1;var S=Zs(w,C);if(!S)return!0;if(S?y=w:(y=w==="v"?"h":"v",S=Zs(w,C)),!S)return!1;if(!o.current&&"changedTouches"in h&&(L||b)&&(o.current=y),!y)return!0;var A=o.current||y;return Wd(A,m,h,A==="h"?L:b,!0)},[]),i=ve.useCallback(function(h){var m=h;if(!(!Do.length||Do[Do.length-1]!==n)){var x="deltaY"in m?Vd(m):mn(m),I=t.current.filter(function(y){return y.name===m.type&&(y.target===m.target||m.target===y.shadowParent)&&Xg(y.delta,x)})[0];if(I&&I.should){m.cancelable&&m.preventDefault();return}if(!I){var L=(s.current.shards||[]).map(zd).filter(Boolean).filter(function(y){return y.contains(m.target)}),b=L.length>0?l(m,L[0]):!s.current.noIsolation;b&&m.cancelable&&m.preventDefault()}}},[]),u=ve.useCallback(function(h,m,x,I){var L={name:h,delta:m,target:x,should:I,shadowParent:$g(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(b){return b!==L})},1)},[]),c=ve.useCallback(function(h){a.current=mn(h),o.current=void 0},[]),d=ve.useCallback(function(h){u(h.type,Vd(h),h.target,l(h,e.lockRef.current))},[]),f=ve.useCallback(function(h){u(h.type,mn(h),h.target,l(h,e.lockRef.current))},[]);ve.useEffect(function(){return Do.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ba),document.addEventListener("touchmove",i,Ba),document.addEventListener("touchstart",c,Ba),function(){Do=Do.filter(function(h){return h!==n}),document.removeEventListener("wheel",i,Ba),document.removeEventListener("touchmove",i,Ba),document.removeEventListener("touchstart",c,Ba)}},[]);var p=e.removeScrollBar,g=e.inert;return ve.createElement(ve.Fragment,null,g?ve.createElement(n,{styles:Kg(r)}):null,p?ve.createElement($s,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function $g(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Xd=Vs(pn,Gd);var Kd=hn.forwardRef(function(e,t){return hn.createElement(vr,rt({},e,{ref:t,sideCar:Xd}))});Kd.classNames=vr.classNames;var Na=Kd;var Yg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Mo=new WeakMap,gn=new WeakMap,xn={},Js=0,jd=function(e){return e&&(e.host||jd(e.parentNode))},Zg=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=jd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Jg=function(e,t,a,o){var r=Zg(t,Array.isArray(e)?e:[e]);xn[a]||(xn[a]=new WeakMap);var n=xn[a],s=[],l=new Set,i=new Set(r),u=function(d){!d||l.has(d)||(l.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))c(f);else try{var p=f.getAttribute(o),g=p!==null&&p!=="false",h=(Mo.get(f)||0)+1,m=(n.get(f)||0)+1;Mo.set(f,h),n.set(f,m),s.push(f),h===1&&g&&gn.set(f,!0),m===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),l.clear(),Js++,function(){s.forEach(function(d){var f=Mo.get(d)-1,p=n.get(d)-1;Mo.set(d,f),n.set(d,p),f||(gn.has(d)||d.removeAttribute(o),gn.delete(d)),p||d.removeAttribute(a)}),Js--,Js||(Mo=new WeakMap,Mo=new WeakMap,gn=new WeakMap,xn={})}},Ao=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||Yg(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Jg(o,r,a,"aria-hidden")):function(){return null}};var Ee=require("react/jsx-runtime"),Qg=Object.defineProperty,ht=(e,t)=>Qg(e,"name",{value:t,configurable:!0}),el="Dialog",[$d,pw]=Ke(el),[ex,qt]=$d(el),Yd=ht(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:s=!0}=e,l=Le.useRef(null),i=Le.useRef(null),{nodes:u,registry:c}=br(),[d,f]=Ut({prop:o,defaultProp:r??!1,onChange:n,caller:el}),[p,g]=Le.useState(0),[h,m]=Le.useState(0);return(0,Ee.jsx)(ex,{scope:t,triggerRef:l,contentRef:i,contentId:mt(),titleId:mt(),descriptionId:mt(),titlePresent:p>0,descriptionPresent:h>0,setTitleCount:g,setDescriptionCount:m,open:d,onOpenChange:f,onOpenToggle:Le.useCallback(()=>f(x=>!x),[f]),modal:s,branchNodes:u,branchRegistry:c,children:a})},"Dialog");var Zd="DialogPortal",[tx,Jd]=$d(Zd,{forceMount:void 0}),Qd=ht(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=qt(Zd,t);return(0,Ee.jsx)(tx,{scope:t,forceMount:a,children:Le.Children.map(o,s=>(0,Ee.jsx)(Jt,{present:a||n.open,children:(0,Ee.jsx)(So,{asChild:!0,container:r,children:s})}))})},"DialogPortal"),Qs="DialogOverlay",tl=Le.forwardRef(ht(function(t,a){let o=Jd(Qs,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=qt(Qs,t.__scopeDialog);return s.modal?(0,Ee.jsx)(Jt,{present:r||s.open,children:(0,Ee.jsx)(ox,{...n,ref:a})}):null},"DialogOverlay")),ax=Je("DialogOverlay.RemoveScroll"),ox=Le.forwardRef(ht(function(t,a){let{__scopeDialog:o,...r}=t,n=qt(Qs,o),s=ks(),l=ee(a,s);return(0,Ee.jsx)(Na,{as:ax,allowPinchZoom:!0,shards:Le.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,Ee.jsx)(ae.div,{"data-state":nl(n.open),...r,ref:l,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),yr="DialogContent",al=Le.forwardRef(ht(function(t,a){let o=Jd(yr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=qt(yr,t.__scopeDialog);return(0,Ee.jsx)(Jt,{present:r||s.open,children:s.modal?(0,Ee.jsx)(rx,{...n,ref:a}):(0,Ee.jsx)(nx,{...n,ref:a})})},"DialogContent")),rx=Le.forwardRef(ht(function(t,a){let o=qt(yr,t.__scopeDialog),r=Le.useRef(null),n=ee(a,o.contentRef,r);return Le.useEffect(()=>{let s=r.current;if(s)return Ao(s)},[]),(0,Ee.jsx)(ec,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:$(t.onCloseAutoFocus,s=>{s.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:$(t.onPointerDownOutside,s=>{let l=s.detail.originalEvent,i=l.button===0&&l.ctrlKey===!0;(l.button===2||i)&&s.preventDefault()}),onFocusOutside:$(t.onFocusOutside,s=>s.preventDefault())})},"DialogContentModal")),nx=Le.forwardRef(ht(function(t,a){let o=qt(yr,t.__scopeDialog),r=Le.useRef(!1),n=Le.useRef(!1);return(0,Ee.jsx)(ec,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{t.onCloseAutoFocus?.(s),s.defaultPrevented||(r.current||o.triggerRef.current?.focus(),s.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:s=>{t.onInteractOutside?.(s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let l=s.target;o.triggerRef.current?.contains(l)&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&n.current&&s.preventDefault()}})},"DialogContentNonModal")),ec=Le.forwardRef(ht(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:s,"aria-describedby":l,children:i,...u}=t,c=qt(yr,o);return fa(),(0,Ee.jsx)(Ir,{registry:c.branchRegistry,children:(0,Ee.jsx)(wo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:s,children:(0,Ee.jsx)(vo,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?ac(l,c.descriptionId):l,"data-state":nl(c.open),...u,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),ol=Le.forwardRef(ht(function(t,a){let{__scopeDialog:o,...r}=t,n=qt("DialogTitle",o),{setTitleCount:s}=n;return se(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,Ee.jsx)(ae.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),rl=Le.forwardRef(ht(function(t,a){let{__scopeDialog:o,...r}=t,n=qt("DialogDescription",o),{setDescriptionCount:s}=n;return se(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,Ee.jsx)(ae.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),sx="DialogClose",tc=Le.forwardRef(ht(function(t,a){let{__scopeDialog:o,...r}=t,n=qt(sx,o);return(0,Ee.jsx)(ae.button,{type:"button",...r,ref:a,onClick:$(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function ac(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}ht(ac,"concatAriaDescribedby");function nl(e){return e?"open":"closed"}ht(nl,"getState");var rc=require("react"),sl="dsh-kanban",nc={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},ix={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},_a=null,ll=null;function sc(e){let t=e.get("locale");t!==void 0&&(_a=t,e.effect(()=>t.register(sl,"zh",nc),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(sl,"en",ix),"dsh-kanban: English dictionary"),ll=t.bind(sl))}function To(e){return ll?ll(e):nc[e]??e}var ux=e=>_a&&typeof _a.subscribe=="function"?_a.subscribe(e):()=>{},oc=()=>_a&&typeof _a.getSnapshot=="function"?_a.getSnapshot():null;function Oe(){return(0,rc.useSyncExternalStore)(ux,oc,oc),To}var nt=require("react/jsx-runtime"),Eo=Yd;var dx=Qd;var lc=Rr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(tl,{ref:a,className:Q("kanban-portal kanban-dialog-overlay",e),...t}));lc.displayName=tl.displayName;var Ha=Rr.forwardRef(({className:e,children:t,...a},o)=>{let r=Oe();return(0,nt.jsxs)(dx,{children:[(0,nt.jsx)(lc,{}),(0,nt.jsxs)(al,{ref:o,className:Q("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,nt.jsxs)(tc,{className:"kanban-dialog-close",children:[(0,nt.jsx)(ca,{className:"kanban-dialog-close-icon"}),(0,nt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Ha.displayName=al.displayName;var Ua=({className:e,...t})=>(0,nt.jsx)("div",{className:Q("kanban-dialog-header",e),...t});Ua.displayName="DialogHeader";var qa=({className:e,...t})=>(0,nt.jsx)("div",{className:Q("kanban-dialog-body",e),...t});qa.displayName="DialogBody";var Wa=({className:e,...t})=>(0,nt.jsx)("div",{className:Q("kanban-dialog-footer",e),...t});Wa.displayName="DialogFooter";var Va=Rr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(ol,{ref:a,className:Q("kanban-dialog-title",e),...t}));Va.displayName=ol.displayName;var kr=Rr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(rl,{ref:a,className:Q("kanban-dialog-description",e),...t}));kr.displayName=rl.displayName;var yt=j(require("react"),1);var pa=require("react/jsx-runtime"),uc="dsh-kanban:card-drawer-width",cx=720,il=420;function fx(){try{let e=Number(window.localStorage.getItem(uc));if(Number.isFinite(e)&&e>0)return e}catch{}return cx}function ic(e){try{window.localStorage.setItem(uc,String(e))}catch{}}var ul=yt.forwardRef(({className:e,children:t,id:a,style:o,...r},n)=>{let s=Oe(),l=yt.useId(),i=a??l,u=`${l}-resize-hint`,[c,d]=yt.useState(fx),[f,p]=yt.useState(()=>window.innerWidth),[g,h]=yt.useState(!1),m=yt.useRef(null),x=f<=600,I=Math.min(1e3,f-64),L=C=>Math.max(il,Math.min(I,C)),b=x?f:L(c);yt.useEffect(()=>{let C=()=>{m.current&&(d(m.current.preferredWidth),m.current=null,h(!1)),p(window.innerWidth)};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);function y(C,w){let D=m.current;!D||D.pointerId!==C.pointerId||(m.current=null,h(!1),w?d(D.preferredWidth):ic(D.lastWidth),C.currentTarget.hasPointerCapture(C.pointerId)&&C.currentTarget.releasePointerCapture(C.pointerId))}return(0,pa.jsxs)(Ha,{...r,ref:n,id:i,className:Q("kanban-drawer-content",e),style:{...o,width:b},"data-resizing":g||void 0,children:[t,!x&&(0,pa.jsxs)(pa.Fragment,{children:[(0,pa.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":s("resizeTaskDetails"),"aria-describedby":u,"aria-orientation":"vertical","aria-valuemin":il,"aria-valuemax":I,"aria-valuenow":b,"aria-controls":i,title:s("resizeTaskDetailsHint"),onPointerDown:C=>{C.button!==0||m.current||(C.preventDefault(),C.currentTarget.focus(),C.currentTarget.setPointerCapture(C.pointerId),m.current={pointerId:C.pointerId,x:C.clientX,width:b,preferredWidth:c,lastWidth:b},h(!0))},onPointerMove:C=>{let w=m.current;if(!w||w.pointerId!==C.pointerId)return;let D=L(w.width+w.x-C.clientX);w.lastWidth=D,d(D)},onPointerUp:C=>y(C,!1),onPointerCancel:C=>y(C,!0),onLostPointerCapture:C=>y(C,!0),onKeyDown:C=>{let w;if(C.key==="ArrowLeft")w=L(b+32);else if(C.key==="ArrowRight")w=L(b-32);else if(C.key==="Home")w=il;else if(C.key==="End")w=I;else return;C.preventDefault(),d(w),ic(w)}}),(0,pa.jsx)("span",{id:u,className:"kanban-sr-only",children:s("resizeTaskDetailsHint")})]})]})});ul.displayName="DrawerContent";var Fr=j(require("react"),1);var Ft=j(require("react"),1);var J=j(require("react"),1);var Mt=j(require("react"),1);var Cn=require("react/jsx-runtime"),_e=j(require("react"),1);var ma=require("react/jsx-runtime");var px=Object.defineProperty,Ne=(e,t)=>px(e,"name",{value:t,configurable:!0});function za(e){let t=e+"CollectionProvider",[a,o]=Ke(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),s=Ne(h=>{let{scope:m,children:x}=h,I=Mt.useRef(null),L=Mt.useRef(new Map).current;return(0,Cn.jsx)(r,{scope:m,itemMap:L,collectionRef:I,children:x})},"CollectionProvider");s.displayName=t;let l=e+"CollectionSlot",i=Je(l),u=Mt.forwardRef((h,m)=>{let{scope:x,children:I}=h,L=n(l,x),b=ee(m,L.collectionRef);return(0,Cn.jsx)(i,{ref:b,children:I})});u.displayName=l;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Je(c),p=Mt.forwardRef((h,m)=>{let{scope:x,children:I,...L}=h,b=Mt.useRef(null),y=ee(m,b),C=n(c,x);return Mt.useEffect(()=>(C.itemMap.set(b,{ref:b,...L}),()=>{C.itemMap.delete(b)})),(0,Cn.jsx)(f,{[d]:"",ref:y,children:I})});p.displayName=c;function g(h){let m=n(e+"CollectionConsumer",h);return Mt.useCallback(()=>{let I=m.collectionRef.current;if(!I)return[];let L=Array.from(I.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((C,w)=>L.indexOf(C.ref.current)-L.indexOf(w.ref.current))},[m.collectionRef,m.itemMap])}return Ne(g,"useCollection"),[{Provider:s,Slot:u,ItemSlot:p},g,o]}Ne(za,"createCollection");var dc=new WeakMap,De,gt,Ln=(gt=class extends Map{constructor(a){super(a);hi(this,De);os(this,De,[...super.keys()]),dc.set(this,!0)}set(a,o){return dc.get(this)&&!this.has(a)&&Ge(this,De).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),s=n?this.size:this.size+1,l=dl(a),i=l>=0?Math.min(l,s-1):Math.max(s+l,0);if(n?Ge(this,De).indexOf(o)===i:i===this.size)return this.set(o,r),this;let u=Ge(this,De).filter(d=>d!==o);u.splice(i,0,o);let c=u.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new gt(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,De).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,De).indexOf(a);if(n===-1)return this;let s=Ge(this,De).indexOf(o),l=s!==-1&&s<n?n-1:n;return this.insert(l,o,r)}after(a){let o=Ge(this,De).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,De).indexOf(a);if(n===-1)return this;let s=Ge(this,De).indexOf(o),l=s!==-1&&s<=n?n:n+1;return this.insert(l,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return os(this,De,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,De).splice(Ge(this,De).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=In(Ge(this,De),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=In(Ge(this,De),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,De).indexOf(a)}keyAt(a){return In(Ge(this,De),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let s of this)Reflect.apply(a,o,[s,n,this])&&r.push(s),n++;return new gt(r)}map(a,o){let r=[],n=0;for(let s of this)r.push([s[0],Reflect.apply(a,o,[s,n,this])]),n++;return new gt(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let s=0,l=r;for(let i of this)s===0&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this]),s++;return l}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let s=r;for(let l=this.size-1;l>=0;l--){let i=this.entryAt(l);l===this.size-1&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this])}return s}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new gt(o)}toReversed(){let a=new gt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new gt(o)}slice(a,o){let r=new gt;for(let n of Ge(this,De).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},De=new WeakMap,Ne(gt,"OrderedDict"),gt);function In(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=cc(e,t);return a===-1?void 0:e[a]}Ne(In,"at");function cc(e,t){let a=e.length,o=dl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Ne(cc,"toSafeIndex");function dl(e){return e!==e||e===0?0:Math.trunc(e)}Ne(dl,"toSafeInteger");function mx(e){let t=e+"CollectionProvider",[a,o]=Ke(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[s,l]=a(t);s.displayName=e+"CollectionStatefulContextProvider";let i=Ne(({state:C,...w})=>C?(0,ma.jsx)(c,{...w,state:C}):(0,ma.jsx)(u,{...w}),"CollectionProvider");i.displayName=t;let u=Ne(C=>{let w=I();return(0,ma.jsx)(c,{...C,state:w})},"CollectionInit");u.displayName=e+"CollectionInit";let c=Ne(C=>{let{scope:w,children:D,state:R}=C,k=_e.useRef(null),[S,A]=_e.useState(null),_=ee(k,A),[H,Y]=R,K=_e.useRef(new Ln),V=_e.useCallback(()=>{let q=K.current;return mc(q)||q.sort(bn),q},[]);return _e.useEffect(()=>{if(!S)return;let q=hc(()=>{Y(z=>{let W=z.toSorted(bn);return W.some(([G],te)=>z.keyAt(te)!==G)?W:z})});return q.observe(S,{childList:!0,subtree:!0}),()=>{q.disconnect()}},[S,Y]),(0,ma.jsx)(r,{scope:w,collectionElementRef:_,collectionElementRefObject:k,getCollection:V,setCollection:Y,registryRef:K,children:(0,ma.jsx)(s,{scope:w,collectionElement:S,collection:H,children:D})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=Je(d),p=_e.forwardRef((C,w)=>{let{scope:D,children:R}=C,k=n(d,D),S=ee(w,k.collectionElementRef);return(0,ma.jsx)(f,{ref:S,children:R})});p.displayName=d;let g=e+"CollectionItemSlot",h="data-radix-collection-item",m=Je(g),x=_e.forwardRef((C,w)=>{let{scope:D,children:R,...k}=C,S=_e.useRef(null),A=n(g,D),{setCollection:_,registryRef:H}=A,Y=_e.useRef(k);fc(Y.current,k)||(Y.current=k);let K=Y.current,V=_e.useCallback(W=>{let E=H.current;W?E.set(W,{...Y.current,element:W}):S.current&&E.delete(S.current)},[H]),q=ee(w,V,S);se(()=>{let W=S.current,E=H.current;W&&E.has(W)&&E.set(W,{...K,element:W})},[K,H]);let z=_e.useRef(null);return _e.useEffect(()=>{let W=S.current,E=z.current;(E?.element??null)===W&&(!W||E?.itemData===K)||(z.current=W?{element:W,itemData:K}:null,_(G=>{let te=new Ln(G);return E&&E.element!==W&&te.delete(E.element),W&&te.set(W,{...K,element:W}),te.sort(bn)}))}),_e.useEffect(()=>()=>{let W=z.current;z.current=null,W&&_(E=>{if(!E.has(W.element))return E;let G=new Ln(E);return G.delete(W.element),G})},[_]),(0,ma.jsx)(m,{[h]:"",ref:q,children:R})});x.displayName=g;function I(){return _e.useState(new Ln)}Ne(I,"useInitCollection");function L(C){let{collection:w}=l(e+"CollectionConsumer",C);return w}Ne(L,"useCollection");function b(C){let{getCollection:w}=n(e+"CollectionConsumer",C);return w}return Ne(b,"useGetCollection"),[{Provider:i,Slot:p,ItemSlot:x},{createCollectionScope:o,useCollection:L,useGetCollection:b,useInitCollection:I}]}Ne(mx,"createCollection");function fc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ne(fc,"shallowEqual");function pc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ne(pc,"isElementPreceding");function mc(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}Ne(mc,"isInDocumentOrder");function bn(e,t){return!e[1].element||!t[1].element?0:pc(e[1].element,t[1].element)?-1:1}Ne(bn,"sortByDocumentPosition");function hc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Ne(hc,"getChildListObserver");var vn=j(require("react"),1),xx=require("react/jsx-runtime"),hx=Object.defineProperty,gx=(e,t)=>hx(e,"name",{value:t,configurable:!0}),Lx={LTR:"ltr",RTL:"rtl"},Cx=vn.createContext(void 0);function Ga(e){let t=vn.useContext(Cx);return e||t||Lx.LTR}gx(Ga,"useDirection");var et=j(require("react"),1);var Lc=["top","right","bottom","left"];var Wt=Math.min,At=Math.max,Dr=Math.round,Mr=Math.floor,Vt=e=>({x:e,y:e}),Ix={left:"right",right:"left",bottom:"top",top:"bottom"};function cl(e,t,a){return At(e,Wt(t,a))}function zt(e,t){return typeof e=="function"?e(t):e}function Qt(e){return e.split("-")[0]}function Xa(e){return e.split("-")[1]}function Sn(e){return e==="x"?"y":"x"}function yn(e){return e==="y"?"height":"width"}function Tt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function Rn(e){return Sn(Tt(e))}function Cc(e,t,a){a===void 0&&(a=!1);let o=Xa(e),r=Rn(e),n=yn(r),s=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Pr(s)),[s,Pr(s)]}function Ic(e){let t=Pr(e);return[wn(e),t,wn(t)]}function wn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var gc=["left","right"],xc=["right","left"],bx=["top","bottom"],vx=["bottom","top"];function wx(e,t,a){switch(e){case"top":case"bottom":return a?t?xc:gc:t?gc:xc;case"left":case"right":return t?bx:vx;default:return[]}}function bc(e,t,a,o){let r=Xa(e),n=wx(Qt(e),a==="start",o);return r&&(n=n.map(s=>s+"-"+r),t&&(n=n.concat(n.map(wn)))),n}function Pr(e){let t=Qt(e);return Ix[t]+e.slice(t.length)}function Sx(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function fl(e){return typeof e!="number"?Sx(e):{top:e,right:e,bottom:e,left:e}}function Ka(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function vc(e,t,a){let{reference:o,floating:r}=e,n=Tt(t),s=Rn(t),l=yn(s),i=Qt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[l]/2-r[l]/2,p;switch(i){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}let g=Xa(t);return g&&(p[s]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),p}async function yc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:s,elements:l,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=zt(t,e),g=fl(p),m=l[f?d==="floating"?"reference":"floating":d],x=Ka(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:i})),I=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),b=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},y=Ka(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:I,offsetParent:L,strategy:i}):I);return{top:(x.top-y.top+g.top)/b.y,bottom:(y.bottom-x.bottom+g.bottom)/b.y,left:(x.left-y.left+g.left)/b.x,right:(y.right-x.right+g.right)/b.x}}var yx=50,Rc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=a,l=s.detectOverflow?s:{...s,detectOverflow:yc},i=await(s.isRTL==null?void 0:s.isRTL(t)),u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=vc(u,o,i),f=o,p=0,g={};for(let h=0;h<n.length;h++){let m=n[h];if(!m)continue;let{name:x,fn:I}=m,{x:L,y:b,data:y,reset:C}=await I({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});c=L??c,d=b??d,g[x]={...g[x],...y},C&&p<yx&&(p++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(u=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:c,y:d}=vc(u,f,i)),h=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},kc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:s,elements:l,middlewareData:i}=t,{element:u,padding:c=0}=zt(e,t)||{};if(u==null)return{};let d=fl(c),f={x:a,y:o},p=Rn(r),g=yn(p),h=await s.getDimensions(u),m=p==="y",x=m?"top":"left",I=m?"bottom":"right",L=m?"clientHeight":"clientWidth",b=n.reference[g]+n.reference[p]-f[p]-n.floating[g],y=f[p]-n.reference[p],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u)),w=C?C[L]:0;(!w||!await(s.isElement==null?void 0:s.isElement(C)))&&(w=l.floating[L]||n.floating[g]);let D=b/2-y/2,R=w/2-h[g]/2-1,k=Wt(d[x],R),S=Wt(d[I],R),A=w-h[g]-S,_=w/2-h[g]/2+D,H=cl(k,_,A),Y=!i.arrow&&Xa(r)!=null&&_!==H&&n.reference[g]/2-(_<k?k:S)-h[g]/2<0,K=Y?_<k?_-k:_-A:0;return{[p]:f[p]+K,data:{[p]:H,centerOffset:_-H-K,...Y&&{alignmentOffset:K}},reset:Y}}});var Pc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:s,initialPlacement:l,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...m}=zt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Qt(r),I=Tt(l),L=Qt(l)===l,b=await(i.isRTL==null?void 0:i.isRTL(u.floating)),y=f||(L||!h?[Pr(l)]:Ic(l)),C=g!=="none";!f&&C&&y.push(...bc(l,h,g,b));let w=[l,...y],D=await i.detectOverflow(t,m),R=[],k=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&R.push(D[x]),d){let H=Cc(r,s,b);R.push(D[H[0]],D[H[1]])}if(k=[...k,{placement:r,overflows:R}],!R.every(H=>H<=0)){var S,A;let H=(((S=n.flip)==null?void 0:S.index)||0)+1,Y=w[H];if(Y&&(!(d==="alignment"?I!==Tt(Y):!1)||k.every(q=>Tt(q.placement)===I?q.overflows[0]>0:!0)))return{data:{index:H,overflows:k},reset:{placement:Y}};let K=(A=k.filter(V=>V.overflows[0]<=0).sort((V,q)=>V.overflows[1]-q.overflows[1])[0])==null?void 0:A.placement;if(!K)switch(p){case"bestFit":{var _;let V=(_=k.filter(q=>{if(C){let z=Tt(q.placement);return z===I||z==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(z=>z>0).reduce((z,W)=>z+W,0)]).sort((q,z)=>q[1]-z[1])[0])==null?void 0:_[0];V&&(K=V);break}case"initialPlacement":K=l;break}if(r!==K)return{reset:{placement:K}}}return{}}}};function wc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Sc(e){return Lc.some(t=>e[t]>=0)}var Dc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=zt(e,t);switch(r){case"referenceHidden":{let s=await o.detectOverflow(t,{...n,elementContext:"reference"}),l=wc(s,a.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Sc(l)}}}case"escaped":{let s=await o.detectOverflow(t,{...n,altBoundary:!0}),l=wc(s,a.floating);return{data:{escapedOffsets:l,escaped:Sc(l)}}}default:return{}}}}};var Mc=new Set(["left","top"]);async function Rx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Qt(a),l=Xa(a),i=Tt(a)==="y",u=Mc.has(s)?-1:1,c=n&&i?-1:1,d=zt(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof g=="number"&&(p=l==="end"?g*-1:g),i?{x:p*c,y:f*u}:{x:f*u,y:p*c}}var Ac=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:s,middlewareData:l}=t,i=await Rx(t,e);return s===((a=l.offset)==null?void 0:a.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:s}}}}},Tc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:i={fn:I=>{let{x:L,y:b}=I;return{x:L,y:b}}},...u}=zt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=Tt(r),p=Sn(f),g=c[p],h=c[f],m=(I,L)=>cl(L+d[I==="y"?"top":"left"],L,L-d[I==="y"?"bottom":"right"]);s&&(g=m(p,g)),l&&(h=m(f,h));let x=i.fn({...t,[p]:g,[f]:h});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[p]:s,[f]:l}}}}}},Ec=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:s,rects:l,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=zt(e,t),f={x:r,y:n},p=Tt(s),g=Sn(p),h=f[g],m=f[p],x=zt(u,t),I=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let y=g==="y"?"height":"width",C=l.reference[g]-l.floating[y]+I.mainAxis,w=l.reference[g]+l.reference[y]-I.mainAxis;h<C?h=C:h>w&&(h=w)}if(d){var L,b;let y=g==="y"?"width":"height",C=Mc.has(Qt(s)),w=l.reference[p]-l.floating[y]+(C&&((L=i.offset)==null?void 0:L[p])||0)+(C?0:I.crossAxis),D=l.reference[p]+l.reference[y]+(C?0:((b=i.offset)==null?void 0:b[p])||0)-(C?I.crossAxis:0);m<w?m=w:m>D&&(m=D)}return{[g]:h,[p]:m}}}},Oc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:s=()=>{},...l}=zt(e,t),i=await r.detectOverflow(t,l),u=Qt(a),c=Xa(a),d=Tt(a)==="y",{width:f,height:p}=o.floating,g,h;u==="top"||u==="bottom"?(g=u,h=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(h=u,g=c==="end"?"top":"bottom");let m=p-i.top-i.bottom,x=f-i.left-i.right,I=Wt(p-i[g],m),L=Wt(f-i[h],x),b=t.middlewareData.shift,y=!b,C=I,w=L;b!=null&&b.enabled.x&&(w=x),b!=null&&b.enabled.y&&(C=m),y&&!c&&(d?w=f-2*At(i.left,i.right):C=p-2*At(i.top,i.bottom)),await s({...t,availableWidth:w,availableHeight:C});let D=await r.getDimensions(n.floating);return f!==D.width||p!==D.height?{reset:{rects:!0}}:{}}}};function kn(){return typeof window<"u"}function Ya(e){return Bc(e)?(e.nodeName||"").toLowerCase():"#document"}function ot(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gt(e){var t;return(t=(Bc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Bc(e){return kn()?e instanceof Node||e instanceof ot(e).Node:!1}function Et(e){return kn()?e instanceof Element||e instanceof ot(e).Element:!1}function ea(e){return kn()?e instanceof HTMLElement||e instanceof ot(e).HTMLElement:!1}function Fc(e){return!kn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ot(e).ShadowRoot}function Ar(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Ot(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function Nc(e){return/^(table|td|th)$/.test(Ya(e))}function Tr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var kx=/transform|translate|scale|rotate|perspective|filter/,Px=/paint|layout|strict|content/,ja=e=>!!e&&e!=="none",pl;function Pn(e){let t=Et(e)?Ot(e):e;return ja(t.transform)||ja(t.translate)||ja(t.scale)||ja(t.rotate)||ja(t.perspective)||!Dn()&&(ja(t.backdropFilter)||ja(t.filter))||kx.test(t.willChange||"")||Px.test(t.contain||"")}function _c(e){let t=ha(e);for(;ea(t)&&!Oo(t);){if(Pn(t))return t;if(Tr(t))return null;t=ha(t)}return null}function Dn(){return pl==null&&(pl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),pl}function Oo(e){return/^(html|body|#document)$/.test(Ya(e))}function Ot(e){return ot(e).getComputedStyle(e)}function Er(e){return Et(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ha(e){if(Ya(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Fc(e)&&e.host||Gt(e);return Fc(t)?t.host:t}function Hc(e){let t=ha(e);return Oo(t)?(e.ownerDocument||e).body:ea(t)&&Ar(t)?t:Hc(t)}function $a(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=Hc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),s=ot(r);if(n){let l=Mn(s);return t.concat(s,s.visualViewport||[],Ar(r)?r:[],l&&a?$a(l):[])}else return t.concat(r,$a(r,[],a))}function Mn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wc(e){let t=Ot(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ea(e),n=r?e.offsetWidth:a,s=r?e.offsetHeight:o,l=Dr(a)!==n||Dr(o)!==s;return l&&(a=n,o=s),{width:a,height:o,$:l}}function hl(e){return Et(e)?e:e.contextElement}function Fo(e){let t=hl(e);if(!ea(t))return Vt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Wc(t),s=(n?Dr(a.width):a.width)/o,l=(n?Dr(a.height):a.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}var Dx=Vt(0);function Vc(e){let t=ot(e);return!Dn()||!t.visualViewport?Dx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Mx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===ot(e)}function Za(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=hl(e),s=Vt(1);t&&(o?Et(o)&&(s=Fo(o)):s=Fo(e));let l=Mx(n,a,o)?Vc(n):Vt(0),i=(r.left+l.x)/s.x,u=(r.top+l.y)/s.y,c=r.width/s.x,d=r.height/s.y;if(n&&o){let f=ot(n),p=Et(o)?ot(o):o,g=f,h=Mn(g);for(;h&&p!==g;){let m=Fo(h),x=h.getBoundingClientRect(),I=Ot(h),L=x.left+(h.clientLeft+parseFloat(I.paddingLeft))*m.x,b=x.top+(h.clientTop+parseFloat(I.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=L,u+=b,g=ot(h),h=Mn(g)}}return Ka({width:c,height:d,x:i,y:u})}function An(e,t){let a=Er(e).scrollLeft;return t?t.left+a:Za(Gt(e)).left+a}function zc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-An(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Ax(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",s=Gt(o),l=t?Tr(t.floating):!1;if(o===s||l&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Vt(1),c=Vt(0),d=ea(o);if((d||!n)&&((Ya(o)!=="body"||Ar(s))&&(i=Er(o)),d)){let p=Za(o);u=Fo(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=s&&!d&&!n?zc(s,i):Vt(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function Tx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Ex(e){let t=Er(e),a=e.ownerDocument.body,o=At(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=At(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+An(e),s=-t.scrollTop;return Ot(a).direction==="rtl"&&(n+=At(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:s}}var Ox=25;function Fx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=ot(e),n=Gt(e),s=r.visualViewport,l=n.clientWidth,i=n.clientHeight,u=0,c=0;if(s){let f=!Dn()||t==="fixed";o?f||(u=-s.offsetLeft,c=-s.offsetTop):(l=s.width,i=s.height,f&&(u=s.offsetLeft,c=s.offsetTop))}if(An(n)<=0){let f=n.ownerDocument,p=f.body,g=getComputedStyle(p),h=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(n.clientWidth-p.clientWidth-h),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=Ox&&(l-=x)}return{width:l,height:i,x:u,y:c}}function Bx(e,t){let a=Za(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Fo(e),s=e.clientWidth*n.x,l=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:s,height:l,x:i,y:u}}function Uc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Fx(e,a,t);else if(t==="document")o=Ex(Gt(e));else if(Et(t))o=Bx(t,a);else{let r=Vc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ka(o)}function Nx(e,t){let a=t.get(e);if(a)return a;let o=$a(e,[],!1).filter(l=>Et(l)&&Ya(l)!=="body"),r=null,n=Ot(e).position==="fixed",s=n?ha(e):e;for(;Et(s)&&!Oo(s);){let l=Ot(s),i=Pn(s),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&l.position==="static")?o=o.filter(d=>d!==s):r=l,s=ha(s)}return t.set(e,o),o}function _x(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,s=[...a==="clippingAncestors"?Tr(t)?[]:Nx(t,this._c):[].concat(a),o],l=Uc(t,s[0],r),i=l.top,u=l.right,c=l.bottom,d=l.left;for(let f=1;f<s.length;f++){let p=Uc(t,s[f],r);i=At(p.top,i),u=Wt(p.right,u),c=Wt(p.bottom,c),d=At(p.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function Hx(e){let{width:t,height:a}=Wc(e);return{width:t,height:a}}function Ux(e,t,a){let o=ea(t),r=Gt(t),n=a==="fixed",s=Za(e,!0,n,t),l={scrollLeft:0,scrollTop:0},i=Vt(0);if((o||!n)&&((Ya(t)!=="body"||Ar(r))&&(l=Er(t)),o)){let f=Za(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=An(r));let u=r&&!o&&!n?zc(r,l):Vt(0),c=s.left+l.scrollLeft-i.x-u.x,d=s.top+l.scrollTop-i.y-u.y;return{x:c,y:d,width:s.width,height:s.height}}function ml(e){return Ot(e).position==="static"}function qc(e,t){if(!ea(e)||Ot(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Gt(e)===a&&(a=a.ownerDocument.body),a}function Gc(e,t){let a=ot(e);if(Tr(e))return a;if(!ea(e)){let r=ha(e);for(;r&&!Oo(r);){if(Et(r)&&!ml(r))return r;r=ha(r)}return a}let o=qc(e,t);for(;o&&Nc(o)&&ml(o);)o=qc(o,t);return o&&Oo(o)&&ml(o)&&!Pn(o)?a:o||_c(e)||a}var qx=async function(e){let t=this.getOffsetParent||Gc,a=this.getDimensions,o=await a(e.floating);return{reference:Ux(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Wx(e){return Ot(e).direction==="rtl"}var Xc={convertOffsetParentRelativeRectToViewportRelativeRect:Ax,getDocumentElement:Gt,getClippingRect:_x,getOffsetParent:Gc,getElementRects:qx,getClientRects:Tx,getDimensions:Hx,getScale:Fo,isElement:Et,isRTL:Wx};function Kc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Vx(e,t,a){let o=null,r,n=Gt(e);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),s();let f=e.getBoundingClientRect(),{left:p,top:g,width:h,height:m}=f;if(c||t(),!h||!m)return;let x=Mr(g),I=Mr(n.clientWidth-(p+h)),L=Mr(n.clientHeight-(g+m)),b=Mr(p),C={rootMargin:-x+"px "+-I+"px "+-L+"px "+-b+"px",threshold:At(0,Wt(1,d))||1},w=!0;function D(R){let k=R[0].intersectionRatio;if(!Kc(f,e.getBoundingClientRect()))return l();if(k!==d){if(!w)return l();k?l(!1,k):r=setTimeout(()=>{l(!1,1e-7)},1e3)}w=!1}try{o=new IntersectionObserver(D,{...C,root:n.ownerDocument})}catch{o=new IntersectionObserver(D,C)}o.observe(e)}let i=ot(e),u=()=>l(a);return i.addEventListener("resize",u),l(!0),()=>{i.removeEventListener("resize",u),s()}}function gl(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=hl(e),c=r||n?[...u?$a(u):[],...t?$a(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&l?Vx(u,a,n):null,f=-1,p=null;s&&(p=new ResizeObserver(x=>{let[I]=x;I&&I.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=p)==null||L.observe(t)})),a()}),u&&!i&&p.observe(u),t&&p.observe(t));let g,h=i?Za(e):null;i&&m();function m(){let x=Za(e);h&&!Kc(h,x)&&a(),h=x,g=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(I=>{r&&I.removeEventListener("scroll",a),n&&I.removeEventListener("resize",a)}),d?.(),(x=p)==null||x.disconnect(),p=null,i&&cancelAnimationFrame(g)}}var jc=Ac;var $c=Tc,Yc=Pc,Zc=Oc,Jc=Dc,xl=kc;var Qc=Ec,Ll=(e,t,a)=>{let o=new Map,r=a??{},n={...Xc,...r.platform,_c:o};return Rc(e,t,{...r,platform:n})};var Fe=j(require("react"),1),tf=require("react"),af=j(require("react-dom"),1),zx=typeof document<"u",Gx=function(){},Tn=zx?tf.useLayoutEffect:Gx;function En(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!En(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!En(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function of(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ef(e,t){let a=of(e);return Math.round(t*a)/a}function Cl(e){let t=Fe.useRef(e);return Tn(()=>{t.current=e}),t}function rf(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:s}={},transform:l=!0,whileElementsMounted:i,open:u}=e,[c,d]=Fe.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=Fe.useState(o);En(f,o)||p(o);let[g,h]=Fe.useState(null),[m,x]=Fe.useState(null),I=Fe.useCallback(q=>{q!==C.current&&(C.current=q,h(q))},[]),L=Fe.useCallback(q=>{q!==w.current&&(w.current=q,x(q))},[]),b=n||g,y=s||m,C=Fe.useRef(null),w=Fe.useRef(null),D=Fe.useRef(c),R=i!=null,k=Cl(i),S=Cl(r),A=Cl(u),_=Fe.useCallback(()=>{if(!C.current||!w.current)return;let q={placement:t,strategy:a,middleware:f};S.current&&(q.platform=S.current),Ll(C.current,w.current,q).then(z=>{let W={...z,isPositioned:A.current!==!1};H.current&&!En(D.current,W)&&(D.current=W,af.flushSync(()=>{d(W)}))})},[f,t,a,S,A]);Tn(()=>{u===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,d(q=>({...q,isPositioned:!1})))},[u]);let H=Fe.useRef(!1);Tn(()=>(H.current=!0,()=>{H.current=!1}),[]),Tn(()=>{if(b&&(C.current=b),y&&(w.current=y),b&&y){if(k.current)return k.current(b,y,_);_()}},[b,y,_,k,R]);let Y=Fe.useMemo(()=>({reference:C,floating:w,setReference:I,setFloating:L}),[I,L]),K=Fe.useMemo(()=>({reference:b,floating:y}),[b,y]),V=Fe.useMemo(()=>{let q={position:a,left:0,top:0};if(!K.floating)return q;let z=ef(K.floating,c.x),W=ef(K.floating,c.y);return l?{...q,transform:"translate("+z+"px, "+W+"px)",...of(K.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:z,top:W}},[a,l,K.floating,c.x,c.y]);return Fe.useMemo(()=>({...c,update:_,refs:Y,elements:K,floatingStyles:V}),[c,_,Y,K,V])}var Xx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?xl({element:o.current,padding:r}).fn(a):{}:o?xl({element:o,padding:r}).fn(a):{}}}},nf=(e,t)=>{let a=jc(e);return{name:a.name,fn:a.fn,options:[e,t]}},sf=(e,t)=>{let a=$c(e);return{name:a.name,fn:a.fn,options:[e,t]}},lf=(e,t)=>({fn:Qc(e).fn,options:[e,t]}),uf=(e,t)=>{let a=Yc(e);return{name:a.name,fn:a.fn,options:[e,t]}},df=(e,t)=>{let a=Zc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var cf=(e,t)=>{let a=Jc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var ff=(e,t)=>{let a=Xx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var pf=j(require("react"),1);var Kx=Object.defineProperty,jx=(e,t)=>Kx(e,"name",{value:t,configurable:!0});function Il(e){let[t,a]=pf.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let s=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let l,i;if("borderBoxSize"in s){let u=s.borderBoxSize,c=Array.isArray(u)?u[0]:u;l=c.inlineSize,i=c.blockSize}else l=e.offsetWidth,i=e.offsetHeight;a({width:l,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}jx(Il,"useSize");var Bo=require("react/jsx-runtime"),$x=Object.defineProperty,ga=(e,t)=>$x(e,"name",{value:t,configurable:!0});var mf={Partial:"partial",Always:"always"},hf={Optimized:"optimized",Always:"always"},gf="Popper",[xf,No]=Ke(gf),[Yx,Lf]=xf(gf),On=ga(e=>{let{__scopePopper:t,children:a}=e,[o,r]=et.useState(null),[n,s]=et.useState(void 0);return(0,Bo.jsx)(Yx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:s,children:a})},"Popper"),Zx="PopperAnchor",Fn=et.forwardRef(ga(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,s=Lf(Zx,o),l=et.useRef(null),i=s.onAnchorChange,u=et.useCallback(h=>{l.current=h,h&&i(h)},[i]),c=ee(a,u),d=et.useRef(null);et.useEffect(()=>{if(!r)return;let h=d.current;d.current=r.current,h!==d.current&&i(d.current)});let f=s.placementState&&Nn(s.placementState),p=f?.[0],g=f?.[1];return r?null:(0,Bo.jsx)(ae.div,{"data-radix-popper-side":p,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),Cf="PopperContent",[Jx,lS]=xf(Cf),Bn=et.forwardRef(ga(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:s="center",alignOffset:l=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=mf.Partial,hideWhenDetached:p=!1,updatePositionStrategy:g=hf.Optimized,onPlaced:h,...m}=t,x=Lf(Cf,o),[I,L]=et.useState(null),b=ee(a,L),[y,C]=et.useState(null),w=Il(y),D=w?.width??0,R=w?.height??0,k=r+(s!=="center"?"-"+s:""),S=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},A=Array.isArray(c)?c:[c],_=A.length>0,H={padding:S,boundary:A.filter(If),altBoundary:_},{refs:Y,floatingStyles:K,placement:V,isPositioned:q,middlewareData:z}=rf({strategy:"fixed",placement:k,whileElementsMounted:ga((...he)=>gl(...he,{animationFrame:g===hf.Always}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[nf({mainAxis:n+R,alignmentAxis:l}),u&&sf({mainAxis:!0,crossAxis:!1,...f===mf.Partial?{limiter:lf()}:{},...H}),u&&uf({...H}),df({...H,apply:ga(({elements:he,rects:N,availableWidth:de,availableHeight:oe})=>{let{width:v,height:M}=N.reference,T=he.floating.style;T.setProperty("--radix-popper-available-width",`${de}px`),T.setProperty("--radix-popper-available-height",`${oe}px`),T.setProperty("--radix-popper-anchor-width",`${v}px`),T.setProperty("--radix-popper-anchor-height",`${M}px`)},"apply")}),y&&ff({element:y,padding:i}),Qx({arrowWidth:D,arrowHeight:R}),p&&cf(_?{strategy:"referenceHidden",...H}:{strategy:"referenceHidden",padding:H.padding,altBoundary:H.altBoundary})]}),W=x.setPlacementState;se(()=>(W(V),()=>{W(void 0)}),[V,W]);let[E,G]=Nn(V),te=qe(h);se(()=>{q&&te?.()},[q,te]);let Ae=z.arrow?.x,Ie=z.arrow?.y,B=z.arrow?.centerOffset!==0,[pe,me]=et.useState();return se(()=>{I&&me(window.getComputedStyle(I).zIndex)},[I]),(0,Bo.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:q?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Bo.jsx)(Jx,{scope:o,placedSide:E,placedAlign:G,onArrowChange:C,arrowX:Ae,arrowY:Ie,shouldHideArrow:B,children:(0,Bo.jsx)(ae.div,{"data-side":E,"data-align":G,...m,ref:b,style:{...m.style,animation:q?m.style?.animation:"none"}})})})},"PopperContent"));function If(e){return e!==null}ga(If,"isNotNull");var Qx=ga(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,s=r.arrow?.centerOffset!==0,l=s?0:e.arrowWidth,i=s?0:e.arrowHeight,[u,c]=Nn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+l/2,p=(r.arrow?.y??0)+i/2,g="",h="";return u==="bottom"?(g=s?d:`${f}px`,h=`${-i}px`):u==="top"?(g=s?d:`${f}px`,h=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,h=s?d:`${p}px`):u==="left"&&(g=`${o.floating.width+i}px`,h=s?d:`${p}px`),{data:{x:g,y:h}}}}),"transformOrigin");function Nn(e){let[t,a="center"]=e.split("-");return[t,a]}ga(Nn,"getSideAndAlignFromPlacement");var Ve=j(require("react"),1);var tL=j(require("react"),1),_n=j(require("react"),1),eL=Object.defineProperty,vl=(e,t)=>eL(e,"name",{value:t,configurable:!0}),bl=!1;function vf(){let[e,t]=_n.useState(bl);return _n.useEffect(()=>{bl||(bl=!0,t(!0))},[]),e}vl(vf,"useIsHydrated");var wf=tL[" useSyncExternalStore ".trim().toString()];function Sf(){return()=>{}}vl(Sf,"subscribe");function yf(){return wf(Sf,()=>!0,()=>!1)}vl(yf,"useIsHydratedModern");var Rf=typeof wf=="function"?yf:vf;var xa=require("react/jsx-runtime"),aL=Object.defineProperty,Ja=(e,t)=>aL(e,"name",{value:t,configurable:!0}),wl="rovingFocusGroup.onEntryFocus",oL={bubbles:!1,cancelable:!0},Hn="RovingFocusGroup",[Sl,Pf,rL]=za(Hn),[nL,yl]=Ke(Hn,[rL]),kf={Vertical:"vertical",Horizontal:"horizontal"},sL={LTR:"ltr",RTL:"rtl"},[lL,iL]=nL(Hn),Df=Ve.forwardRef(Ja(function(t,a){return(0,xa.jsx)(Sl.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,xa.jsx)(Sl.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,xa.jsx)(uL,{...t,ref:a})})})},"RovingFocusGroup")),uL=Ve.forwardRef(Ja(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:s,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,p=Ve.useRef(null),g=ee(a,p),h=Ga(s),[m,x]=Ut({prop:l,defaultProp:i??null,onChange:u,caller:Hn}),[I,L]=Ve.useState(!1),b=qe(c),y=Pf(o),C=Ve.useRef(!1),[w,D]=Ve.useState(0);return Ve.useEffect(()=>{let R=p.current;if(R)return R.addEventListener(wl,b),()=>R.removeEventListener(wl,b)},[b]),(0,xa.jsx)(lL,{scope:o,orientation:r,dir:h,loop:n,currentTabStopId:m,onItemFocus:Ve.useCallback(R=>x(R),[x]),onItemShiftTab:Ve.useCallback(()=>L(!0),[]),onFocusableItemAdd:Ve.useCallback(()=>D(R=>R+1),[]),onFocusableItemRemove:Ve.useCallback(()=>D(R=>R-1),[]),children:(0,xa.jsx)(ae.div,{tabIndex:I||w===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:$(t.onMouseDown,()=>{C.current=!0}),onFocus:$(t.onFocus,R=>{let k=!C.current;if(R.target===R.currentTarget&&k&&!I){let S=new CustomEvent(wl,oL);if(R.currentTarget.dispatchEvent(S),!S.defaultPrevented){let A=y().filter(V=>V.focusable),_=A.find(V=>V.active),H=A.find(V=>V.id===m),K=[_,H,...A].filter(Boolean).map(V=>V.ref.current);Rl(K,d)}}C.current=!1}),onBlur:$(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),dL="RovingFocusGroupItem",Mf=Ve.forwardRef(Ja(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:s,children:l,...i}=t,u=mt(),c=s||u,d=iL(dL,o),f=d.currentTabStopId===c,p=Pf(o),{onFocusableItemAdd:g,onFocusableItemRemove:h,currentTabStopId:m}=d,x=Rf();return se(()=>{if(!(!x||!r))return g(),()=>h()},[x,r,g,h]),Ve.useEffect(()=>{if(!(x||!r))return g(),()=>h()},[x,r,g,h]),(0,xa.jsx)(Sl.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,xa.jsx)(ae.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:$(t.onMouseDown,I=>{r?d.onItemFocus(c):I.preventDefault()}),onFocus:$(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:$(t.onKeyDown,I=>{if(I.key==="Tab"&&I.shiftKey){d.onItemShiftTab();return}if(I.target!==I.currentTarget)return;let L=Tf(I,d.orientation,d.dir);if(L!==void 0){if(I.metaKey||I.ctrlKey||I.altKey||I.shiftKey)return;I.preventDefault();let y=p().filter(C=>C.focusable).map(C=>C.ref.current);if(L==="last")y.reverse();else if(L==="prev"||L==="next"){L==="prev"&&y.reverse();let C=y.indexOf(I.currentTarget);y=d.loop?Ef(y,C+1):y.slice(C+1)}setTimeout(()=>Rl(y))}}),children:typeof l=="function"?l({isCurrentTabStop:f,hasTabStop:m!=null}):l})})},"RovingFocusGroupItem")),cL={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Af(e,t){return t!==sL.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ja(Af,"getDirectionAwareKey");function Tf(e,t,a){let o=Af(e.key,a);if(!(t===kf.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===kf.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return cL[o]}Ja(Tf,"getFocusIntent");function Rl(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ja(Rl,"focusFirst");function Ef(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ja(Ef,"wrapArray");var xe=require("react/jsx-runtime"),mL=Object.defineProperty,Ce=(e,t)=>mL(e,"name",{value:t,configurable:!0});var kl=["Enter"," "],hL=["ArrowDown","PageUp","Home"],Ff=["ArrowUp","PageDown","End"],gL=[...hL,...Ff],NS={ltr:[...kl,"ArrowRight"],rtl:[...kl,"ArrowLeft"]};var qn="Menu",[Pl,xL,LL]=za(qn),[Qa,Ml]=Ke(qn,[LL,No,yl]),Al=No(),Bf=yl(),[CL,Or]=Qa(qn),[IL,Tl]=Qa(qn),Nf=Ce(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:s=!0}=e,l=Al(t),[i,u]=J.useState(null),c=J.useRef(!1),d=qe(n),f=Ga(r);return J.useEffect(()=>{let p=Ce(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=Ce(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),J.useEffect(()=>{if(!a)return;let p=Ce(()=>d(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,d]),(0,xe.jsx)(On,{...l,children:(0,xe.jsx)(CL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,xe.jsx)(IL,{scope:t,onClose:J.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:s,children:o})})})},"Menu"),_f=J.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t,n=Al(o);return(0,xe.jsx)(Fn,{...n,...r,ref:a})},"MenuAnchor")),Hf="MenuPortal",[bL,vL]=Qa(Hf,{forceMount:void 0}),Uf=Ce(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Or(Hf,t);return(0,xe.jsx)(bL,{scope:t,forceMount:a,children:(0,xe.jsx)(Jt,{present:a||n.open,children:(0,xe.jsx)(So,{asChild:!0,container:r,children:o})})})},"MenuPortal"),La="MenuContent",[wL,qf]=Qa(La),Wf=J.forwardRef(Ce(function(t,a){let o=vL(La,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,s=Or(La,t.__scopeMenu),l=Tl(La,t.__scopeMenu);return(0,xe.jsx)(Pl.Provider,{scope:t.__scopeMenu,children:(0,xe.jsx)(Jt,{present:r||s.open,children:(0,xe.jsx)(Pl.Slot,{scope:t.__scopeMenu,children:l.modal?(0,xe.jsx)(SL,{...n,ref:a}):(0,xe.jsx)(yL,{...n,ref:a})})})})},"MenuContent")),SL=J.forwardRef(Ce(function(t,a){let o=Or(La,t.__scopeMenu),r=J.useRef(null),n=ee(a,r);return J.useEffect(()=>{let s=r.current;if(s)return Ao(s)},[]),(0,xe.jsx)(Vf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:$(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),yL=J.forwardRef(Ce(function(t,a){let o=Or(La,t.__scopeMenu);return(0,xe.jsx)(Vf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),RL=Je("MenuContent.ScrollLock"),Vf=J.forwardRef(Ce(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,disableOutsideScroll:h,...m}=t,x=Or(La,o),I=Tl(La,o),L=Al(o),b=Bf(o),y=xL(o),[C,w]=J.useState(null),D=J.useRef(null),[R,k]=J.useState(null);Os(R);let{nodes:S,registry:A}=br(),_=!!(n||h),H=ee(a,D,x.onContentChange,k),Y=J.useRef(0),K=J.useRef(""),V=J.useRef(0),q=J.useRef(null),z=J.useRef("right"),W=J.useRef(0),E=J.useMemo(()=>h?[D,...S.map(B=>({current:B}))]:[],[D,S,h]),G=h?Na:J.Fragment,te=h?{as:RL,allowPinchZoom:!0,shards:E}:void 0,Ae=Ce(B=>{let pe=K.current+B,me=y().filter(T=>!T.disabled),he=document.activeElement,N=me.find(T=>T.ref.current===he)?.textValue,de=me.map(T=>T.textValue),oe=Zf(de,pe,N),v=me.find(T=>T.textValue===oe)?.ref.current;function M(T){K.current=T,window.clearTimeout(Y.current),T!==""&&(Y.current=window.setTimeout(()=>M(""),1e3))}Ce(M,"updateSearch"),M(pe),v&&setTimeout(()=>v.focus())},"handleTypeaheadSearch");J.useEffect(()=>()=>window.clearTimeout(Y.current),[]),fa();let Ie=J.useCallback(B=>z.current===q.current?.side&&Qf(B,q.current?.area),[]);return(0,xe.jsx)(wL,{scope:o,searchRef:K,onItemEnter:J.useCallback(B=>{Ie(B)&&B.preventDefault()},[Ie]),onItemLeave:J.useCallback(B=>{Ie(B)||(D.current?.focus(),w(null))},[Ie]),onTriggerLeave:J.useCallback(B=>{Ie(B)&&B.preventDefault()},[Ie]),pointerGraceTimerRef:V,onPointerGraceIntentChange:J.useCallback(B=>{q.current=B},[]),children:(0,xe.jsx)(Ir,{registry:_?A:null,children:(0,xe.jsx)(G,{...te,children:(0,xe.jsx)(wo,{asChild:!0,trapped:n,branches:S,onMountAutoFocus:$(s,B=>{B.preventDefault(),D.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:(0,xe.jsx)(vo,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,children:(0,xe.jsx)(Df,{asChild:!0,...b,dir:I.dir,orientation:"vertical",loop:r,currentTabStopId:C,onCurrentTabStopIdChange:w,onEntryFocus:$(u,B=>{I.isUsingKeyboardRef.current||B.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,xe.jsx)(Bn,{role:"menu","aria-orientation":"vertical","data-state":Kf(x.open),"data-radix-menu-content":"",dir:I.dir,...L,...m,ref:H,style:{outline:"none",...m.style},onKeyDown:$(m.onKeyDown,B=>{let me=B.target.closest("[data-radix-menu-content]")===B.currentTarget,he=B.ctrlKey||B.altKey||B.metaKey,N=B.key.length===1;me&&(B.key==="Tab"&&B.preventDefault(),!he&&N&&Ae(B.key));let de=D.current;if(B.target!==de||!gL.includes(B.key))return;B.preventDefault();let v=y().filter(M=>!M.disabled).map(M=>M.ref.current);Ff.includes(B.key)&&v.reverse(),$f(v)}),onBlur:$(t.onBlur,B=>{B.currentTarget.contains(B.target)||(window.clearTimeout(Y.current),K.current="")}),onPointerMove:$(t.onPointerMove,Un(B=>{let pe=B.target,me=W.current!==B.clientX;if(B.currentTarget.contains(pe)&&me){let he=B.clientX>W.current?"right":"left";z.current=he,W.current=B.clientX}}))})})})})})})})},"MenuContentImpl"));var zf=J.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,xe.jsx)(ae.div,{...r,ref:a})},"MenuLabel")),Dl="MenuItem",Of="menu.itemSelect",Gf=J.forwardRef(Ce(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,s=J.useRef(null),l=Tl(Dl,t.__scopeMenu),i=qf(Dl,t.__scopeMenu),u=ee(a,s),c=J.useRef(!1),d=Ce(()=>{let f=s.current;if(!o&&f){let p=new CustomEvent(Of,{bubbles:!0,cancelable:!0});f.addEventListener(Of,g=>r?.(g),{once:!0}),Lr(f,p),p.defaultPrevented?c.current=!1:l.onClose()}},"handleSelect");return(0,xe.jsx)(kL,{...n,ref:u,disabled:o,onClick:$(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:$(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:$(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||kl.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),kL=J.forwardRef(Ce(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...s}=t,l=qf(Dl,o),i=Bf(o),u=J.useRef(null),c=ee(a,u),[d,f]=J.useState(!1),[p,g]=J.useState("");return J.useEffect(()=>{let h=u.current;h&&g((h.textContent??"").trim())},[s.children]),(0,xe.jsx)(Pl.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,xe.jsx)(Mf,{asChild:!0,...i,focusable:!r,children:(0,xe.jsx)(ae.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...s,ref:c,onPointerMove:$(t.onPointerMove,Un(h=>{r?l.onItemLeave(h):(l.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:$(t.onPointerLeave,Un(h=>l.onItemLeave(h))),onFocus:$(t.onFocus,()=>f(!0)),onBlur:$(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var PL="MenuRadioGroup",[_S,HS]=Qa(PL,{value:void 0,onValueChange:Ce(()=>{},"onValueChange")});var DL="MenuItemIndicator",[US,qS]=Qa(DL,{checked:!1});var Xf=J.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,xe.jsx)(ae.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var ML="MenuSub",[WS,VS]=Qa(ML);function Kf(e){return e?"open":"closed"}Ce(Kf,"getOpenState");function jf(e){return e==="indeterminate"}Ce(jf,"isIndeterminate");function AL(e){return jf(e)?"indeterminate":e?"checked":"unchecked"}Ce(AL,"getCheckedState");function $f(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Ce($f,"focusFirst");function Yf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ce(Yf,"wrapArray");function Zf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=Yf(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Ce(Zf,"getNextMatch");function Jf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let l=t[n],i=t[s],u=l.x,c=l.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Ce(Jf,"isPointInPolygon");function Qf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Jf(a,t)}Ce(Qf,"isPointerInGraceArea");function Un(e){return t=>t.pointerType==="mouse"?e(t):void 0}Ce(Un,"whenMouse");var Xt=require("react/jsx-runtime"),EL=Object.defineProperty,eo=(e,t)=>EL(e,"name",{value:t,configurable:!0}),El="DropdownMenu",[OL,sy]=Ke(El,[Ml]),to=Ml(),[FL,ep]=OL(El),tp=eo(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:s,modal:l=!0}=e,i=to(t),u=Ft.useRef(null),[c,d]=Ut({prop:r,defaultProp:n??!1,onChange:s,caller:El});return(0,Xt.jsx)(FL,{scope:t,triggerId:mt(),triggerRef:u,contentId:mt(),open:c,onOpenChange:d,onOpenToggle:Ft.useCallback(()=>d(f=>!f),[d]),modal:l,children:(0,Xt.jsx)(Nf,{...i,open:c,onOpenChange:d,dir:o,modal:l,children:a})})},"DropdownMenu"),BL="DropdownMenuTrigger",ap=Ft.forwardRef(eo(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,s=ep(BL,o),l=to(o),i=ee(a,s.triggerRef);return(0,Xt.jsx)(_f,{asChild:!0,...l,children:(0,Xt.jsx)(ae.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:$(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:$(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),op=eo(e=>{let{__scopeDropdownMenu:t,...a}=e,o=to(t);return(0,Xt.jsx)(Uf,{...o,...a})},"DropdownMenuPortal"),NL="DropdownMenuContent",Ol=Ft.forwardRef(eo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ep(NL,o),s=to(o),l=Ft.useRef(!1);return(0,Xt.jsx)(Wf,{id:n.contentId,"aria-labelledby":n.triggerId,...s,...r,ref:a,onCloseAutoFocus:$(t.onCloseAutoFocus,i=>{l.current||n.triggerRef.current?.focus(),l.current=!1,i.preventDefault()}),onInteractOutside:$(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(l.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var Fl=Ft.forwardRef(eo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=to(o);return(0,Xt.jsx)(zf,{...n,...r,ref:a})},"DropdownMenuLabel")),Bl=Ft.forwardRef(eo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=to(o);return(0,Xt.jsx)(Gf,{...n,...r,ref:a})},"DropdownMenuItem"));var Nl=Ft.forwardRef(eo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=to(o);return(0,Xt.jsx)(Xf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var _o=require("react/jsx-runtime"),Ho=tp,Uo=ap;var ao=Fr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,_o.jsx)(op,{children:(0,_o.jsx)(Ol,{ref:o,sideOffset:t,className:Q("kanban-portal kanban-dropdown-content",e),...a})}));ao.displayName=Ol.displayName;var Rt=Fr.forwardRef(({className:e,inset:t,...a},o)=>(0,_o.jsx)(Bl,{ref:o,className:Q("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Rt.displayName=Bl.displayName;var HL=Fr.forwardRef(({className:e,inset:t,...a},o)=>(0,_o.jsx)(Fl,{ref:o,className:Q("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));HL.displayName=Fl.displayName;var UL=Fr.forwardRef(({className:e,...t},a)=>(0,_o.jsx)(Nl,{ref:a,className:Q("kanban-dropdown-separator",e),...t}));UL.displayName=Nl.displayName;var rp=j(require("react"),1);var np=require("react/jsx-runtime"),ta=rp.forwardRef(({className:e,type:t,...a},o)=>(0,np.jsx)("input",{type:t,className:Q("kanban-input",e),ref:o,...a}));ta.displayName="Input";var ip=j(require("react"),1);var sp=j(require("react"),1);var lp=require("react/jsx-runtime"),qL=Object.defineProperty,WL=(e,t)=>qL(e,"name",{value:t,configurable:!0}),_l=sp.forwardRef(WL(function(t,a){return(0,lp.jsx)(ae.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var up=require("react/jsx-runtime"),Ca=ip.forwardRef(({className:e,...t},a)=>(0,up.jsx)(_l,{ref:a,className:Q("kanban-label",e),...t}));Ca.displayName=_l.displayName;var ba=j(require("react"),1);var O=j(require("react"),1),Ul=j(require("react-dom"),1);var zL=Object.defineProperty,GL=(e,t)=>zL(e,"name",{value:t,configurable:!0});function Wn(e,[t,a]){return Math.min(a,Math.max(t,e))}GL(Wn,"clamp");var XL=j(require("react"),1);var KL=require("react/jsx-runtime");var dp=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var Z=require("react/jsx-runtime"),jL=Object.defineProperty,ne=(e,t)=>jL(e,"name",{value:t,configurable:!0}),cp={ItemAligned:"item-aligned",Popper:"popper"},$L={LTR:"ltr",RTL:"rtl"},YL=[" ","Enter","ArrowUp","ArrowDown"],ZL=[" ","Enter"],qo="Select",[zn,Gn,JL]=za(qo),[ro,_y]=Ke(qo,[JL,No]),ql=No(),[QL,Ia]=ro(qo),[eC,tC]=ro(qo);function gp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:s,defaultValue:l,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:p,form:g,internal_do_not_use_render:h}=e,m=ql(t),[x,I]=O.useState(null),[L,b]=O.useState(null),[y,C]=O.useState(!1),w=Ga(u),[D,R]=Ut({prop:o,defaultProp:r??!1,onChange:n,caller:qo}),[k,S]=Ut({prop:s,defaultProp:l,onChange:i,caller:qo}),A=O.useRef(null),_=O.useRef(!1),[H,Y]=O.useState(null),K=ne(B=>{Y({value:B,hasConsumerStoppedPropagation:_.current}),S(B)},"handleUserSelect"),V=O.useRef(k);O.useEffect(()=>{let B=g?x?.ownerDocument.getElementById(g):x?.form;if(B instanceof HTMLFormElement){let pe=ne(()=>S(V.current),"reset");return B.addEventListener("reset",pe),()=>B.removeEventListener("reset",pe)}},[g,x,S]);let q=x?!!g||!!x.closest("form"):!0,[z,W]=O.useState(new Set),E=mt(),G=Array.from(z).map(B=>B.props.value).join(";"),te=O.useCallback(B=>{W(pe=>new Set(pe).add(B))},[]),Ae=O.useCallback(B=>{W(pe=>{let me=new Set(pe);return me.delete(B),me})},[]),Ie={required:p,trigger:x,onTriggerChange:I,valueNode:L,onValueNodeChange:b,valueNodeHasChildren:y,onValueNodeHasChildrenChange:C,contentId:E,value:k,onValueChange:S,hasConsumerStoppedPropagationRef:_,userSelection:H,onUserSelect:K,open:D,onOpenChange:R,dir:w,triggerPointerDownPosRef:A,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:z,nativeSelectKey:G,isFormControl:q};return(0,Z.jsx)(On,{...m,children:(0,Z.jsx)(QL,{scope:t,...Ie,children:(0,Z.jsx)(zn.Provider,{scope:t,children:(0,Z.jsx)(eC,{scope:t,onNativeOptionAdd:te,onNativeOptionRemove:Ae,children:kp(h)?h(Ie):a})})})})}ne(gp,"SelectProvider");var xp=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,Z.jsx)(gp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,Z.jsxs)(Z.Fragment,{children:[a,r?(0,Z.jsx)(LC,{__scopeSelect:t}):null]})})},"Select"),aC="SelectTrigger",Wl=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,s=ql(o),l=Ia(aC,o),i=l.disabled||r,u=ee(a,l.onTriggerChange),c=Gn(o),d=O.useRef("touch"),[f,p,g]=Yl(m=>{let x=c().filter(b=>!b.disabled),I=x.find(b=>b.value===l.value),L=Zl(x,m,I);L!==void 0&&l.onUserSelect(L.value)}),h=ne(m=>{i||(l.onOpenChange(!0),g()),m&&(l.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,Z.jsx)(Fn,{asChild:!0,...s,children:(0,Z.jsx)(ae.button,{type:"button",role:"combobox","aria-controls":l.open?l.contentId:void 0,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Br(l.value)?"":void 0,...n,ref:u,onClick:$(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&h(m)}),onPointerDown:$(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(h(m),m.preventDefault())}),onKeyDown:$(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&(l.hasConsumerStoppedPropagationRef.current=m.isPropagationStopped(),p(m.key)),!(x&&m.key===" ")&&YL.includes(m.key)&&(h(),m.preventDefault())})})})},"SelectTrigger")),oC="SelectValue",Lp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:s,placeholder:l="",...i}=t,u=Ia(oC,o),{onValueNodeHasChildrenChange:c}=u,d=s!==void 0,f=ee(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let p=Br(u.value);return(0,Z.jsx)(ae.span,{...i,asChild:p?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,Z.jsx)(O.Fragment,{children:p?l:s},p?"placeholder":"value")})},"SelectValue")),Cp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,Z.jsx)(ae.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),rC="SelectPortal",[nC,sC]=ro(rC,{forceMount:void 0}),Ip=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,Z.jsx)(nC,{scope:e.__scopeSelect,forceMount:a,children:(0,Z.jsx)(So,{asChild:!0,...o})})},"SelectPortal"),oo="SelectContent",Vl=O.forwardRef(ne(function(t,a){let o=sC(oo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,s=Ia(oo,t.__scopeSelect),[l,i]=O.useState();return se(()=>{i(new DocumentFragment)},[]),(0,Z.jsx)(Jt,{present:r||s.open,children:({present:u})=>u?(0,Z.jsx)(uC,{...n,ref:a}):(0,Z.jsx)(lC,{...n,fragment:l})})},"SelectContent")),lC=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ul.createPortal((0,Z.jsx)(bp,{scope:o,children:(0,Z.jsx)(zn.Slot,{scope:o,children:(0,Z.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Bt=10,[bp,no]=ro(oo),iC=Je("SelectContent.RemoveScroll"),uC=O.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r=cp.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:l,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:h,hideWhenDetached:m,avoidCollisions:x,...I}=t,L=Ia(oo,o),[b,y]=O.useState(null),[C,w]=O.useState(null),D=ee(a,y),[R,k]=O.useState(null),[S,A]=O.useState(null),_=Gn(o),[H,Y]=O.useState(!1),K=O.useRef(!1),V=O.useRef(!1),q=O.useRef(!1);O.useEffect(()=>{if(b)return Ao(b)},[b]),fa();let z=O.useCallback(N=>{let[de,...oe]=_().map(T=>T.ref.current),[v]=oe.slice(-1),M=document.activeElement;for(let T of N)if(T===M||(T?.scrollIntoView({block:"nearest"}),T===de&&C&&(C.scrollTop=0),T===v&&C&&(C.scrollTop=C.scrollHeight),T?.focus(),document.activeElement!==M))return},[_,C]),W=O.useCallback(()=>z([R,b]),[z,R,b]);O.useEffect(()=>{H&&W()},[H,W]);let{onOpenChange:E,triggerPointerDownPosRef:G}=L;O.useEffect(()=>{if(b){let N={x:0,y:0},de=ne(v=>{N={x:Math.abs(Math.round(v.pageX)-(G.current?.x??0)),y:Math.abs(Math.round(v.pageY)-(G.current?.y??0))}},"handlePointerMove"),oe=ne(v=>{N.x<=10&&N.y<=10?v.preventDefault():v.composedPath().includes(b)||E(!1),document.removeEventListener("pointermove",de),G.current=null},"handlePointerUp");return G.current!==null&&(document.addEventListener("pointermove",de),document.addEventListener("pointerup",oe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",de),document.removeEventListener("pointerup",oe,{capture:!0})}}},[b,E,G]),O.useEffect(()=>{let N=ne(()=>E(!1),"close");return window.addEventListener("blur",N),window.addEventListener("resize",N),()=>{window.removeEventListener("blur",N),window.removeEventListener("resize",N)}},[E]);let[te,Ae]=Yl(N=>{let de=_().filter(M=>!M.disabled),oe=de.find(M=>M.ref.current===document.activeElement),v=Zl(de,N,oe);v&&setTimeout(()=>v.ref.current?.focus())}),Ie=O.useCallback((N,de,oe)=>{let v=!V.current;v&&(V.current=!0);let M=!K.current&&!oe;L.value!==void 0&&L.value===de||M?(k(N),M&&(K.current=!0)):v&&k(N)},[L.value]),B=O.useCallback(()=>b?.focus(),[b]),pe=O.useCallback((N,de,oe)=>{if(!N)return;let v=!q.current;v&&(q.current=!0);let M=!K.current&&!oe;(L.value!==void 0&&L.value===de||M||v)&&A(N)},[L.value]),me=r===cp.Popper?fp:dC,he=me===fp?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:h,hideWhenDetached:m,avoidCollisions:x}:{};return(0,Z.jsx)(bp,{scope:o,content:b,viewport:C,onViewportChange:w,itemRefCallback:Ie,selectedItem:R,onItemLeave:B,itemTextRefCallback:pe,focusSelectedItem:W,selectedItemText:S,position:r,isPositioned:H,searchRef:te,children:(0,Z.jsx)(Na,{as:iC,allowPinchZoom:!0,children:(0,Z.jsx)(wo,{asChild:!0,trapped:L.open,onMountAutoFocus:N=>{N.preventDefault()},onUnmountAutoFocus:$(n,N=>{L.trigger?.focus({preventScroll:!0}),N.preventDefault()}),children:(0,Z.jsx)(vo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:N=>N.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,Z.jsx)(me,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:N=>N.preventDefault(),...I,...he,onPlaced:()=>Y(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...I.style},onKeyDown:$(I.onKeyDown,N=>{let de=N.ctrlKey||N.altKey||N.metaKey;if(N.key==="Tab"&&N.preventDefault(),!de&&N.key.length===1&&Ae(N.key),["ArrowUp","ArrowDown","Home","End"].includes(N.key)){let v=_().filter(M=>!M.disabled).map(M=>M.ref.current);if(["ArrowUp","End"].includes(N.key)&&(v=v.slice().reverse()),["ArrowUp","ArrowDown"].includes(N.key)){let M=N.target,T=v.indexOf(M);v=v.slice(T+1)}setTimeout(()=>z(v)),N.preventDefault()}})})})})})})},"SelectContentImpl")),dC=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,s=Ia(oo,o),l=no(oo,o),[i,u]=O.useState(null),[c,d]=O.useState(null),f=ee(a,d),p=Gn(o),g=O.useRef(!1),h=O.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:I,focusSelectedItem:L}=l,b=O.useCallback(()=>{if(s.trigger&&s.valueNode&&i&&c&&m&&x&&I){let D=s.trigger.getBoundingClientRect(),R=c.getBoundingClientRect(),k=s.valueNode.getBoundingClientRect(),S=I.getBoundingClientRect();if(s.dir!==$L.RTL){let oe=S.left-R.left,v=k.left-oe,M=D.left-v,T=D.width+M,X=Math.max(T,R.width),Re=window.innerWidth-Bt,le=Wn(v,[Bt,Math.max(Bt,Re-X)]);i.style.minWidth=T+"px",i.style.left=le+"px"}else{let oe=R.right-S.right,v=window.innerWidth-k.right-oe,M=window.innerWidth-D.right-v,T=D.width+M,X=Math.max(T,R.width),Re=window.innerWidth-Bt,le=Wn(v,[Bt,Math.max(Bt,Re-X)]);i.style.minWidth=T+"px",i.style.right=le+"px"}let A=p(),_=window.innerHeight-Bt*2,H=m.scrollHeight,Y=window.getComputedStyle(c),K=parseInt(Y.borderTopWidth,10),V=parseInt(Y.paddingTop,10),q=parseInt(Y.borderBottomWidth,10),z=parseInt(Y.paddingBottom,10),W=K+V+H+z+q,E=Math.min(x.offsetHeight*5,W),G=window.getComputedStyle(m),te=parseInt(G.paddingTop,10),Ae=parseInt(G.paddingBottom,10),Ie=D.top+D.height/2-Bt,B=_-Ie,pe=x.offsetHeight/2,me=x.offsetTop+pe,he=K+V+me,N=W-he;if(he<=Ie){let oe=A.length>0&&x===A[A.length-1].ref.current;i.style.bottom="0px";let v=c.clientHeight-m.offsetTop-m.offsetHeight,M=Math.max(B,pe+(oe?Ae:0)+v+q),T=he+M;i.style.height=T+"px"}else{let oe=A.length>0&&x===A[0].ref.current;i.style.top="0px";let M=Math.max(Ie,K+m.offsetTop+(oe?te:0)+pe)+N;i.style.height=M+"px",m.scrollTop=he-Ie+m.offsetTop}i.style.margin=`${Bt}px 0`,i.style.minHeight=E+"px",i.style.maxHeight=_+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[p,s.trigger,s.valueNode,i,c,m,x,I,s.dir,r]);se(()=>b(),[b]);let[y,C]=O.useState();se(()=>{c&&C(window.getComputedStyle(c).zIndex)},[c]);let w=O.useCallback(D=>{D&&h.current===!0&&(b(),L?.(),h.current=!1)},[b,L]);return(0,Z.jsx)(cC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:w,children:(0,Z.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:(0,Z.jsx)(ae.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),fp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Bt,...s}=t,l=ql(o);return(0,Z.jsx)(Bn,{...l,...s,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[cC,zl]=ro(oo,{}),pp="SelectViewport",vp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,s=no(pp,o),l=zl(pp,o),i=ee(a,s.onViewportChange),u=O.useRef(0);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,Z.jsx)(zn.Slot,{scope:o,children:(0,Z.jsx)(ae.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:$(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=l;if(p?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let h=window.innerHeight-Bt*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),I=Math.max(m,x);if(I<h){let L=I+g,b=Math.min(h,L),y=L-b;f.style.height=b+"px",f.style.bottom==="0px"&&(d.scrollTop=y>0?y:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),fC="SelectGroup",[Hy,pC]=ro(fC);var mC="SelectLabel",Gl=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=pC(mC,o);return(0,Z.jsx)(ae.div,{id:n.id,...r,ref:a})},"SelectLabel")),Hl="SelectItem",[hC,wp]=ro(Hl),Xl=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...l}=t,i=Ia(Hl,o),u=no(Hl,o),c=i.value===r,[d,f]=O.useState(s??""),[p,g]=O.useState(!1),h=qe(b=>u.itemRefCallback?.(b,r,n)),m=ee(a,h),x=mt(),I=O.useRef("touch");function L(b){i.hasConsumerStoppedPropagationRef.current=b.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return ne(L,"handleSelect"),(0,Z.jsx)(hC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:O.useCallback(b=>{f(y=>y||(b?.textContent??"").trim())},[]),children:(0,Z.jsx)(zn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,Z.jsx)(ae.div,{role:"option","aria-labelledby":x,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...l,ref:m,onFocus:$(l.onFocus,()=>g(!0)),onBlur:$(l.onBlur,()=>g(!1)),onClick:$(l.onClick,b=>{n||I.current!=="mouse"&&L(b)}),onPointerUp:$(l.onPointerUp,b=>{n||I.current==="mouse"&&L(b)}),onPointerDown:$(l.onPointerDown,b=>{I.current=b.pointerType}),onPointerMove:$(l.onPointerMove,b=>{I.current=b.pointerType,n?u.onItemLeave?.():I.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:$(l.onPointerLeave,b=>{b.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:$(l.onKeyDown,b=>{n||b.target!==b.currentTarget||u.searchRef?.current!==""&&b.key===" "||(ZL.includes(b.key)&&L(b),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),Vn="SelectItemText",Sp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...s}=t,l=Ia(Vn,o),i=no(Vn,o),u=wp(Vn,o),c=tC(Vn,o),[d,f]=O.useState(null),p=qe(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),g=ee(a,f,u.onItemTextChange,p),h=d?.textContent,m=O.useMemo(()=>(0,Z.jsx)("option",{value:u.value,disabled:u.disabled,children:h},u.value),[u.disabled,u.value,h]),{onNativeOptionAdd:x,onNativeOptionRemove:I}=c;return se(()=>(x(m),()=>I(m)),[x,I,m]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ae.span,{id:u.textId,...s,ref:g}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren&&!Br(l.value)?Ul.createPortal(s.children,l.valueNode):null]})},"SelectItemText")),gC="SelectItemIndicator",yp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return wp(gC,o).isSelected?(0,Z.jsx)(ae.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),mp="SelectScrollUpButton",Kl=O.forwardRef(ne(function(t,a){let o=no(mp,t.__scopeSelect),r=zl(mp,t.__scopeSelect),[n,s]=O.useState(!1),l=ee(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;s(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,Z.jsx)(Rp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),hp="SelectScrollDownButton",jl=O.forwardRef(ne(function(t,a){let o=no(hp,t.__scopeSelect),r=zl(hp,t.__scopeSelect),[n,s]=O.useState(!1),l=ee(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;s(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,Z.jsx)(Rp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Rp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,s=no("SelectScrollButton",o),l=O.useRef(null),i=Gn(o),u=O.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return O.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,Z.jsx)(ae.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:$(n.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:$(n.onPointerMove,()=>{s.onItemLeave?.(),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:$(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),$l=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,Z.jsx)(ae.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var xC="SelectBubbleInput",LC=O.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=Ia(xC,t),{value:n,onValueChange:s,required:l,disabled:i,name:u,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:g}=r,h=O.useRef(null),m=ee(o,h),x=n??"",I=O.useRef(x),L=O.useRef(f),b=O.useRef(!1),y=Array.from(p).some(C=>(C.props.value??"")==="");return O.useEffect(()=>{let C=h.current;if(!C)return;let w=window.HTMLSelectElement.prototype,R=Object.getOwnPropertyDescriptor(w,"value").set,k=f!==null&&f!==L.current;L.current=f;let S=I.current!==x;I.current=x;let A=k&&S;if(k&&!S&&f.value!==x&&!f.hasConsumerStoppedPropagation&&R){b.current=!0;try{R.call(C,f.value),C.dispatchEvent(new Event("change",{bubbles:!0}))}finally{b.current=!1,R.call(C,x)}return}let _=A&&!f.hasConsumerStoppedPropagation;if(S&&R){let H=new Event("change",{bubbles:_});R.call(C,x),C.dispatchEvent(H)}},[x,f]),(0,Z.jsxs)(ae.select,{"aria-hidden":!0,required:l,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:C=>{b.current||s(C.target.value)},...a,style:{...dp,...a.style},ref:m,defaultValue:x,children:[Br(n)&&!y?(0,Z.jsx)("option",{value:""}):null,Array.from(p)]},g)},"SelectBubbleInput"));function kp(e){return typeof e=="function"}ne(kp,"isFunction");function Br(e){return e===""||e===void 0}ne(Br,"shouldShowPlaceholder");function Yl(e){let t=qe(e),a=O.useRef(""),o=O.useRef(0),r=O.useCallback(s=>{let l=a.current+s;t(l);function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}ne(i,"updateSearch"),i(l)},[t]),n=O.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return O.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Yl,"useTypeaheadSearch");function Zl(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=Pp(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(Zl,"findNextItem");function Pp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Pp,"wrapArray");var Me=require("react/jsx-runtime"),Jl=xp;var Ql=Lp,Xn=ba.forwardRef(({className:e,children:t,...a},o)=>(0,Me.jsxs)(Wl,{ref:o,className:Q("kanban-select-trigger",e),...a,children:[t,(0,Me.jsx)(Cp,{asChild:!0,children:(0,Me.jsx)(Lo,{className:"kanban-select-icon"})})]}));Xn.displayName=Wl.displayName;var Dp=ba.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Kl,{ref:a,className:Q("kanban-select-scroll-button",e),...t,children:(0,Me.jsx)(dr,{className:"kanban-select-scroll-icon"})}));Dp.displayName=Kl.displayName;var Mp=ba.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(jl,{ref:a,className:Q("kanban-select-scroll-button",e),...t,children:(0,Me.jsx)(Lo,{className:"kanban-select-scroll-icon"})}));Mp.displayName=jl.displayName;var Kn=ba.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Me.jsx)(Ip,{children:(0,Me.jsxs)(Vl,{ref:r,className:Q("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Me.jsx)(Dp,{}),(0,Me.jsx)(vp,{className:Q("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Me.jsx)(Mp,{})]})}));Kn.displayName=Vl.displayName;var IC=ba.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Gl,{ref:a,className:Q("kanban-select-label",e),...t}));IC.displayName=Gl.displayName;var Wo=ba.forwardRef(({className:e,children:t,...a},o)=>(0,Me.jsxs)(Xl,{ref:o,className:Q("kanban-select-item",e),...a,children:[(0,Me.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Me.jsx)(yp,{children:(0,Me.jsx)(ft,{className:"kanban-select-check"})})}),(0,Me.jsx)(Sp,{children:t})]}));Wo.displayName=Xl.displayName;var bC=ba.forwardRef(({className:e,...t},a)=>(0,Me.jsx)($l,{ref:a,className:Q("kanban-select-separator",e),...t}));bC.displayName=$l.displayName;var Ap=j(require("react"),1);var Tp=require("react/jsx-runtime"),jn=Ap.forwardRef(({className:e,...t},a)=>(0,Tp.jsx)("textarea",{className:Q("kanban-textarea",e),ref:a,...t}));jn.displayName="Textarea";var Nt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},$n=["high","medium","low"],Ep="var(--dsw-alias-label-tertiary)";function Op(e,t){return t?e.find(a=>a.name===t)?.color??Ep:Ep}var tt=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),ei=e=>e==="high"||e==="medium"||e==="low"?Nt[e].label:"";function Fp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let s=a.label??o,l=a.priority&&ei(a.priority)||o;return tt(t("actCreated"),{column:a.column??"",label:s,priority:l})}case"card_moved":return tt(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?tt(t("actLabelSet"),{to:n}):r!=null&&n==null?tt(t("actLabelCleared"),{from:r}):tt(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let s=r?ei(r)||r:o,l=n?ei(n)||n:o;return r==null&&n!=null?tt(t("actPrioritySet"),{to:l}):r!=null&&n==null?tt(t("actPriorityCleared"),{from:s}):tt(t("actPriority"),{from:s,to:l})}case"card_title_changed":return tt(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return tt(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return tt(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return tt(t("actColumnDeleted"),{column:a.column??""});case"label_added":return tt(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return tt(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return tt(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return tt(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Yn=e=>String(e).padStart(2,"0");function Nr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Yn(t.getMonth()+1)}-${Yn(t.getDate())} ${Yn(t.getHours())}:${Yn(t.getMinutes())}`}var aa=require("react/jsx-runtime");function Bp({activities:e}){let t=Oe();if(e.length===0)return(0,aa.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,aa.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,aa.jsxs)("li",{className:"kanban-activity-item",children:[(0,aa.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,aa.jsxs)("p",{className:"kanban-activity-description",children:[(0,aa.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Fp(o,t)]}),(0,aa.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Nr(o.ts),children:Nr(o.ts)})]},o.id)})})}var F=require("react/jsx-runtime");function _p({open:e,error:t,card:a,labels:o,comments:r,activities:n,onOpenChange:s,onSave:l,onAddComment:i,onDelete:u,onChatWithAgent:c}){let d=Oe(),f=(0,He.useId)(),p=(0,He.useRef)(null),g=(0,He.useRef)(null),h=(0,He.useRef)(null),[m,x]=(0,He.useState)(!a),[I,L]=(0,He.useState)({id:"",title:"",note:"",label:"",priority:""}),[b,y]=(0,He.useState)(""),[C,w]=(0,He.useState)(!1),D=(0,He.useRef)(!1),[R,k]=(0,He.useState)(""),[S,A]=(0,He.useState)(null),_=(0,He.useRef)(null),H=(0,He.useRef)(I);(0,He.useEffect)(()=>{if(e){let E={id:a?.id??"",title:a?.title??"",note:a?.note??"",label:a?.label??"",priority:a?.priority??""};H.current=E,L(E),y(""),k(""),A(null),x(!a)}},[e,a]),(0,He.useEffect)(()=>{S&&_.current?.focus()},[S]);let Y=!!b.trim()||Object.keys(I).some(E=>I[E]!==H.current[E]),K=E=>{if(!D.current){if(!E&&S){A(null);return}if(!E&&Y){A("discard");return}s(E)}},V=async E=>{if(D.current)return!1;D.current=!0,w(!0),k("");try{let G=await E();return G===!1&&k(d("actionRetry")),G!==!1}catch(G){return k(d("actionFailed")+String(G instanceof Error?G.message:G)),!1}finally{D.current=!1,w(!1)}},q=async E=>{if(b.trim()){A(E);return}await V(()=>c(I,E))&&s(!1)},z=E=>L(G=>({...G,...E})),W=async()=>{let E=b.trim();!a||!E||E.length>2e3||await V(()=>i(a.id,E))&&y("")};return(0,F.jsx)(Eo,{open:e,onOpenChange:K,children:(0,F.jsxs)(ul,{"aria-describedby":void 0,onOpenAutoFocus:E=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,E.preventDefault(),g.current?.focus()},onCloseAutoFocus:E=>{p.current?.isConnected&&(E.preventDefault(),p.current.focus())},children:[(0,F.jsxs)(Ua,{children:[(0,F.jsx)(Va,{children:d(a?"taskDetails":"addCard")}),a&&(0,F.jsxs)("span",{className:"kanban-field-id",children:[d("fieldId"),": ",a.id]})]}),(0,F.jsxs)(qa,{className:"kanban-form-stack",children:[(t||R)&&(0,F.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||R}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(Ca,{htmlFor:`${f}-title`,className:"kanban-field-label",children:d("fieldTitle")}),(0,F.jsx)(ta,{ref:g,id:`${f}-title`,value:I.title,placeholder:d("titlePlaceholder"),maxLength:120,disabled:C||!!S,onChange:E=>z({title:E.target.value})})]}),(0,F.jsxs)("div",{className:"kanban-form-row",children:[(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(Ca,{htmlFor:`${f}-label`,children:d("fieldLabel")}),(0,F.jsxs)(Jl,{disabled:C||!!S,value:I.label||"__none__",onValueChange:E=>z({label:E==="__none__"?"":E}),children:[(0,F.jsx)(Xn,{id:`${f}-label`,children:(0,F.jsx)(Ql,{placeholder:d("noLabel")})}),(0,F.jsxs)(Kn,{children:[(0,F.jsx)(Wo,{value:"__none__",children:d("noLabel")}),o.map(E=>(0,F.jsx)(Wo,{value:E.name,children:E.name},E.name))]})]})]}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(Ca,{htmlFor:`${f}-priority`,children:d("fieldPriority")}),(0,F.jsxs)(Jl,{disabled:C||!!S,value:I.priority||"__none__",onValueChange:E=>z({priority:E==="__none__"?"":E}),children:[(0,F.jsx)(Xn,{id:`${f}-priority`,children:(0,F.jsx)(Ql,{placeholder:d("noPriority")})}),(0,F.jsxs)(Kn,{children:[(0,F.jsx)(Wo,{value:"__none__",children:d("noPriority")}),$n.map(E=>{let G=Nt[E];return(0,F.jsx)(Wo,{value:E,children:(0,F.jsxs)("span",{className:"kanban-inline-priority",children:[(0,F.jsx)("span",{className:"kanban-priority-dot",style:{background:G.color}}),G.label]})},E)})]})]})]})]}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsxs)("div",{className:"kanban-field-label",children:[(0,F.jsx)(Ca,{id:`${f}-note-label`,htmlFor:m?`${f}-note`:void 0,children:d("fieldNote")}),(0,F.jsxs)(ce,{variant:"ghost",size:"sm",disabled:C||!!S,"aria-controls":`${f}-description`,onClick:()=>{x(!m),m||requestAnimationFrame(()=>h.current?.focus())},children:[m?(0,F.jsx)(ft,{}):(0,F.jsx)(pr,{}),d(m?"finishEditingNote":"editNote")]})]}),(0,F.jsx)("div",{id:`${f}-description`,children:m?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(jn,{ref:h,id:`${f}-note`,className:"kanban-markdown-source",value:I.note,placeholder:d("notePlaceholder"),rows:12,maxLength:2e3,disabled:C||!!S,onChange:E=>z({note:E.target.value})}),(0,F.jsxs)("p",{className:"kanban-note-hint",children:[d("markdownEditHint")," ",(0,F.jsxs)("span",{className:"kanban-tabular",children:[I.note.length,"/2000"]})]})]}):(0,F.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${f}-note-label`,children:I.note.trim()?(0,F.jsx)(Np.MarkdownText,{text:I.note,labels:{code:{copyLabel:d("copyCode"),copiedLabel:d("copiedCode")},footnotes:d("footnotes")}}):(0,F.jsx)("p",{className:"kanban-muted-small",children:d("emptyNote")})})})]}),a&&(0,F.jsxs)("div",{className:"kanban-comments-box",children:[(0,F.jsxs)(Ca,{htmlFor:`${f}-comment`,children:[d("commentsTitle")," ",(0,F.jsxs)("span",{className:"kanban-tabular",children:["(",r.length,")"]})]}),(0,F.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:r.length===0?(0,F.jsx)("p",{className:"kanban-muted-small",children:d("commentEmpty")}):(0,F.jsx)("ol",{className:"kanban-comment-list",children:r.map(E=>{let G=E.source==="agent";return(0,F.jsxs)("li",{className:"kanban-comment-item",children:[(0,F.jsxs)("div",{className:"kanban-comment-meta",children:[(0,F.jsx)("span",{className:`kanban-activity-actor ${G?"is-agent":"is-human"}`,children:d(G?"actorAgent":"actorHuman")}),(0,F.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:E.createdAt,children:Nr(E.createdAt)})]}),(0,F.jsx)("p",{className:"kanban-comment-content",children:E.content})]},E.id)})})}),(0,F.jsxs)("div",{className:"kanban-comment-composer",children:[(0,F.jsx)(jn,{id:`${f}-comment`,value:b,placeholder:d("commentPlaceholder"),rows:3,maxLength:2e3,disabled:C||!!S,onChange:E=>y(E.target.value),onKeyDown:E=>{(E.metaKey||E.ctrlKey)&&E.key==="Enter"&&(E.preventDefault(),W())}}),(0,F.jsxs)(ce,{type:"button",variant:"outline",disabled:C||!!S||!b.trim(),onClick:()=>{W()},children:[(0,F.jsx)(hr,{className:"kanban-icon"}),d("sendComment")]})]})]}),a&&(0,F.jsxs)("div",{className:"kanban-activity-box",children:[(0,F.jsx)(Ca,{className:"kanban-muted-small",children:d("activityTitle")}),(0,F.jsx)("div",{className:"kanban-activity-scroll",children:(0,F.jsx)(Bp,{activities:n})})]})]}),(0,F.jsx)(Wa,{children:S?(0,F.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,F.jsx)("p",{role:"alert",children:d(S==="discard"?"discardChangesDesc":S==="delete"?"deleteCardDesc":"discardCommentDesc")}),(0,F.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,F.jsx)(ce,{ref:_,variant:"outline",disabled:C,onClick:()=>A(null),children:d("cancel")}),(0,F.jsx)(ce,{variant:"destructive",disabled:C,onClick:async()=>{if(S==="discard"){s(!1);return}if(S==="delete"){a&&u&&await V(()=>u(a))&&s(!1);return}await V(()=>c(I,S))&&s(!1)},children:d(S==="discard"?"discardChanges":S==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,F.jsxs)(F.Fragment,{children:[a&&u&&(0,F.jsxs)(ce,{variant:"ghost",className:"kanban-dialog-delete",disabled:C,onClick:()=>A("delete"),children:[(0,F.jsx)(bt,{className:"kanban-icon"}),d("delete")]}),(0,F.jsxs)(Ho,{children:[(0,F.jsx)(Uo,{asChild:!0,children:(0,F.jsxs)(ce,{variant:"outline",disabled:C||!I.title.trim()&&!I.note.trim(),children:[(0,F.jsx)(Ea,{className:"kanban-icon"}),d("chatWithAgent")]})}),(0,F.jsxs)(ao,{align:"end",children:[(0,F.jsx)(Rt,{onClick:()=>{q("current")},children:d("chatCurrentSession")}),(0,F.jsx)(Rt,{onClick:()=>{q("new")},children:d("chatNewSession")})]})]}),(0,F.jsx)(ce,{disabled:C||!I.title.trim(),onClick:async()=>{await V(()=>l(I))&&(H.current=I,b.trim()||s(!1))},children:d("save")})]})})]})})}var Up=require("react");var Hp=require("react/jsx-runtime");function vC({variant:e,className:t}={}){return Q("kanban-badge",`kanban-badge--${e??"default"}`,t)}function ti({className:e,variant:t,...a}){return(0,Hp.jsx)("div",{className:vC({variant:t,className:e}),...a})}var so=j(require("react"),1);var lo=require("react/jsx-runtime"),ai=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-card",e),...t}));ai.displayName="Card";var wC=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-card-header",e),...t}));wC.displayName="CardHeader";var SC=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-ui-card-title",e),...t}));SC.displayName="CardTitle";var yC=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-card-description",e),...t}));yC.displayName="CardDescription";var oi=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-card-content",e),...t}));oi.displayName="CardContent";var RC=so.forwardRef(({className:e,...t},a)=>(0,lo.jsx)("div",{ref:a,className:Q("kanban-card-footer",e),...t}));RC.displayName="CardFooter";var $e=require("react/jsx-runtime");function ri({card:e,labels:t}){let a=Oe(),o=e.priority?Nt[e.priority]:null,r=Op(t,e.label);return(0,$e.jsx)(ai,{className:"kanban-card",children:(0,$e.jsxs)(oi,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,$e.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,$e.jsxs)(ti,{variant:"secondary",className:"kanban-card-badge",children:[(0,$e.jsx)("span",{className:"kanban-label-dot",style:{background:r},"aria-hidden":"true"}),e.label]}),o&&(0,$e.jsxs)(ti,{variant:"secondary",className:"kanban-card-badge",children:[(0,$e.jsx)("span",{className:"kanban-label-dot",style:{background:o.color},"aria-hidden":"true"}),o.label]})]}),(0,$e.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,$e.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,$e.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,$e.jsx)(Ea,{"aria-hidden":"true"}),(0,$e.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function qp({card:e,labels:t,onOpen:a}){let o=Oe(),r=(0,Up.useId)(),{attributes:n,listeners:s,setNodeRef:l,transform:i,transition:u,isDragging:c}=an({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,$e.jsxs)("div",{ref:l,style:{transform:dt.Transform.toString(i),transition:u},...n,...s,"aria-label":e.title,"aria-describedby":r,onKeyDown:d=>{d.key==="Enter"&&!c?(d.preventDefault(),a(e)):s?.onKeyDown?.(d)},onClick:d=>{d.currentTarget.focus(),a(e)},className:`kanban-sortable-card${c?" is-dragging":""}`,children:[(0,$e.jsx)("span",{id:r,className:"kanban-sr-only",children:o("cardKeyboardHelp")}),(0,$e.jsx)(ri,{card:e,labels:t})]})}var xt=require("react/jsx-runtime");function Wp({column:e,cards:t,totalCount:a,filtered:o,labels:r,onAddCard:n,onOpenCard:s}){let{setNodeRef:l,isOver:i}=Yr({id:e.id,data:{type:"column"}}),{active:u,over:c}=lr(),d=Oe(),f=u?.data.current?.type==="card"&&(i||c?.data.current?.columnId===e.id);return(0,xt.jsxs)("div",{ref:l,className:`kanban-column${f?" is-over":""}`,children:[(0,xt.jsxs)("div",{className:"kanban-column-header",children:[(0,xt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,xt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,xt.jsxs)("div",{className:"kanban-column-cards",children:[(0,xt.jsx)(tn,{items:t.map(p=>p.id),strategy:en,children:t.map(p=>(0,xt.jsx)(qp,{card:p,labels:r,onOpen:s},p.id))}),t.length===0&&(0,xt.jsx)("p",{className:"kanban-column-empty",children:d(o?"noMatchingCards":"emptyColumn")})]}),(0,xt.jsx)("div",{className:"kanban-column-footer",children:(0,xt.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>n(e),children:[(0,xt.jsx)($t,{className:"kanban-icon"}),d("addCard")]})})]})}var kt=require("react");var fe=require("react/jsx-runtime");function kC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:s}){let{attributes:l,listeners:i,setNodeRef:u,transform:c,transition:d}=an({id:e.id,disabled:s}),f=Oe();return(0,fe.jsxs)("div",{ref:u,style:{transform:dt.Transform.toString(c),transition:d},className:"kanban-sortable-row",children:[(0,fe.jsx)("button",{...l,...i,className:"kanban-drag-handle",disabled:s,"aria-label":`${f("dragSort")}: ${e.title}`,children:(0,fe.jsx)(cr,{className:"kanban-icon"})}),(0,fe.jsx)(ta,{"aria-label":`${f("columnName")}: ${e.title}`,value:t,disabled:s,maxLength:40,onChange:p=>a(p.target.value),onBlur:o,onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,fe.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${f("delete")}: ${e.title}`,disabled:s||!n,onClick:r,children:(0,fe.jsx)(bt,{className:"kanban-icon"})})]})}function Vp({open:e,error:t,columns:a,onOpenChange:o,onReorder:r,onRename:n,onDelete:s,onAdd:l}){let i=Oe(),[u,c]=(0,kt.useState)({}),[d,f]=(0,kt.useState)(""),[p,g]=(0,kt.useState)(!1),h=(0,kt.useRef)(!1),[m,x]=(0,kt.useState)(""),[I,L]=(0,kt.useState)(null),b=(0,kt.useRef)(null),y=Gr(Aa(go,{activationConstraint:{distance:8}}),Aa(ia,{coordinateGetter:on}));(0,kt.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(k=>[k.id,k.title]))),f(""),x(""),L(null))},[e]),(0,kt.useEffect)(()=>{I&&b.current?.focus()},[I]);let C=async k=>{if(h.current)return!1;h.current=!0,g(!0),x("");try{let S=await k();return S===!1&&x(i("actionRetry")),S!==!1}catch(S){return x(i("actionFailed")+String(S instanceof Error?S.message:S)),!1}finally{h.current=!1,g(!1)}},w=async()=>{let k=d.trim();k&&await C(()=>l(k))&&f("")},D=k=>{let S=(u[k]??"").trim(),A=a.find(_=>_.id===k);A&&S&&S!==A.title&&C(()=>n(k,S))},R=k=>{let{active:S,over:A}=k;A&&S.id!==A.id&&C(()=>r(String(S.id),String(A.id)))};return(0,fe.jsx)(Eo,{open:e,onOpenChange:k=>{if(!h.current){if(!k&&I){L(null);return}o(k)}},children:(0,fe.jsxs)(Ha,{className:"kanban-dialog-medium",children:[(0,fe.jsxs)(Ua,{children:[(0,fe.jsx)(Va,{children:i("columnEdit")}),(0,fe.jsx)(kr,{children:i("columnEditDesc")})]}),(0,fe.jsxs)(qa,{children:[(t||m)&&(0,fe.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||m}),(0,fe.jsx)($r,{sensors:y,collisionDetection:_i,onDragEnd:R,children:(0,fe.jsx)(tn,{items:a.map(k=>k.id),strategy:en,children:(0,fe.jsx)("div",{className:"kanban-sortable-list",children:a.map(k=>(0,fe.jsx)(kC,{column:k,value:u[k.id]??k.title,onValueChange:S=>c(A=>({...A,[k.id]:S})),onCommit:()=>D(k.id),onDelete:()=>L(k),disabled:p||!!I,canDelete:a.length>1},k.id))})})})]}),(0,fe.jsx)(Wa,{children:I?(0,fe.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,fe.jsx)("p",{role:"alert",children:i("deleteColumnDesc").replace("{column}",I.title)}),(0,fe.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,fe.jsx)(ce,{ref:b,variant:"outline",disabled:p,onClick:()=>L(null),children:i("cancel")}),(0,fe.jsx)(ce,{variant:"destructive",disabled:p,onClick:async()=>{await C(()=>s(I.id))&&L(null)},children:i("confirmDelete")})]})]}):(0,fe.jsxs)("div",{className:"kanban-sortable-row",children:[(0,fe.jsx)(ta,{value:d,disabled:p,placeholder:i("newColumnPlaceholder"),"aria-label":i("newColumnPlaceholder"),maxLength:40,onChange:k=>f(k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),w())}}),(0,fe.jsxs)(ce,{size:"sm",disabled:p||!d.trim(),onClick:()=>{w()},children:[(0,fe.jsx)($t,{className:"kanban-icon"}),i("add")]})]})})]})})}var Lt=require("react");var be=require("react/jsx-runtime");function zp({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:s}){let l=Oe(),[i,u]=(0,Lt.useState)({}),[c,d]=(0,Lt.useState)(""),[f,p]=(0,Lt.useState)("#38bdf8"),[g,h]=(0,Lt.useState)(!1),m=(0,Lt.useRef)(!1),[x,I]=(0,Lt.useState)(""),[L,b]=(0,Lt.useState)(null),y=(0,Lt.useRef)(null);(0,Lt.useEffect)(()=>{e&&(u(Object.fromEntries(a.map(R=>[R.name,{name:R.name,color:R.color}]))),d(""),p("#38bdf8"),I(""),b(null))},[e]),(0,Lt.useEffect)(()=>{L&&y.current?.focus()},[L]);let C=async R=>{if(m.current)return!1;m.current=!0,h(!0),I("");try{let k=await R();return k===!1&&I(l("actionRetry")),k!==!1}catch(k){return I(l("actionFailed")+String(k instanceof Error?k.message:k)),!1}finally{m.current=!1,h(!1)}},w=async()=>{let R=c.trim();R&&await C(()=>r(R,f))&&d("")},D=R=>{let k=i[R];if(!k)return;let S=a.find(_=>_.name===R),A=k.name.trim();S&&A&&(A!==R||k.color!==S.color)&&C(()=>n(R,A,k.color))};return(0,be.jsx)(Eo,{open:e,onOpenChange:R=>{if(!m.current){if(!R&&L){b(null);return}o(R)}},children:(0,be.jsxs)(Ha,{className:"kanban-dialog-medium",children:[(0,be.jsxs)(Ua,{children:[(0,be.jsx)(Va,{children:l("labelEdit")}),(0,be.jsx)(kr,{children:l("labelEditDesc")})]}),(0,be.jsxs)(qa,{children:[(t||x)&&(0,be.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||x}),(0,be.jsx)("div",{className:"kanban-label-list",children:a.map(R=>{let k=i[R.name]??{name:R.name,color:R.color};return(0,be.jsxs)("div",{className:"kanban-label-row",children:[(0,be.jsx)("input",{type:"color","aria-label":`${l("labelColor")}: ${R.name}`,value:k.color,disabled:g||!!L,className:"kanban-color-input",onChange:S=>u(A=>({...A,[R.name]:{...k,color:S.target.value}})),onBlur:()=>D(R.name)}),(0,be.jsx)(ta,{"aria-label":`${l("labelName")}: ${R.name}`,value:k.name,disabled:g||!!L,maxLength:20,onChange:S=>u(A=>({...A,[R.name]:{...k,name:S.target.value}})),onBlur:()=>D(R.name),onKeyDown:S=>{S.key==="Enter"&&S.target.blur()}}),(0,be.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${l("deleteLabel")}: ${R.name}`,disabled:g||!!L,onClick:()=>b(R.name),children:(0,be.jsx)(bt,{className:"kanban-icon"})})]},R.name)})})]}),(0,be.jsx)(Wa,{children:L?(0,be.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,be.jsx)("p",{role:"alert",children:l("deleteLabelDesc").replace("{label}",L)}),(0,be.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,be.jsx)(ce,{ref:y,variant:"outline",disabled:g,onClick:()=>b(null),children:l("cancel")}),(0,be.jsx)(ce,{variant:"destructive",disabled:g,onClick:async()=>{await C(()=>s(L))&&b(null)},children:l("confirmDelete")})]})]}):(0,be.jsxs)("div",{className:"kanban-label-add-row",children:[(0,be.jsx)("input",{type:"color","aria-label":l("newLabelColor"),value:f,disabled:g,className:"kanban-color-input",onChange:R=>p(R.target.value)}),(0,be.jsx)(ta,{value:c,disabled:g,placeholder:l("newLabelPlaceholder"),"aria-label":l("newLabelPlaceholder"),maxLength:20,onChange:R=>d(R.target.value),onKeyDown:R=>{R.key==="Enter"&&(R.preventDefault(),w())}}),(0,be.jsxs)(ce,{size:"sm",disabled:g||!c.trim(),onClick:()=>{w()},children:[(0,be.jsx)($t,{className:"kanban-icon"}),l("add")]})]})})]})})}function Zn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var ni=new Map,si=0,Jn=new Set;function Gp(e,t){ni.set(e,t),si++;for(let a of Jn)a()}function Xp(e){let t=ni.get(e);if(t==null)return null;ni.delete(e),si++;for(let a of Jn)a();return t}function Kp(e){return Jn.add(e),()=>{Jn.delete(e)}}function jp(){return si}function $p(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(To("fieldId")+": "+t),a&&n.push(a),r&&n.push(To("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var U=require("react/jsx-runtime");function Yp(e,t,a,o,r){let n=e.find(m=>m.id===t);if(!n)return{cards:e,toIndex:-1};let s=e.filter(m=>m.columnId===n.columnId).findIndex(m=>m.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:s};let l=e.filter(m=>m.id!==t),i=l.filter(m=>m.columnId===a),u=o?i.findIndex(m=>m.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...l],f=i[c],p=i[i.length-1],g=f?d.indexOf(f):p?d.indexOf(p)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((m,x)=>m.id===e[x]?.id&&m.columnId===e[x]?.columnId)?e:d,toIndex:c}}function Zp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(v=>v.items):[],s=Array.isArray(n)?n.find(v=>Array.isArray(v.sessionIds)&&v.sessionIds.includes(t)):void 0,l=s?s.workspaceId:"default",i=Oe(),[u,c]=(0,ue.useState)(null),[d,f]=(0,ue.useState)(""),[p,g]=(0,ue.useState)([]),[h,m]=(0,ue.useState)(null),[x,I]=(0,ue.useState)(null),[L,b]=(0,ue.useState)(!1),[y,C]=(0,ue.useState)(!1),[w,D]=(0,ue.useState)(!1),[R,k]=(0,ue.useState)(""),[S,A]=(0,ue.useState)(null),_=(0,ue.useRef)(null),H=(0,ue.useRef)(u),Y=(0,ue.useRef)(null),K=(0,ue.useRef)(l),V=(0,ue.useRef)(0),q=(0,ue.useRef)(0);H.current=u,K.current=l;let[z,W]=(0,ue.useState)(null),E=Gr(Aa(tr,{activationConstraint:{distance:8}}),Aa(ar,{activationConstraint:{delay:250,tolerance:5}}),Aa(ia,{coordinateGetter:on})),G=(0,ue.useCallback)((v,M,T)=>{K.current!==M||T<q.current||(q.current=T,v&&v.board&&(c({...v.board,cards:Array.isArray(v.board.cards)?v.board.cards.map(X=>({...X,comments:Array.isArray(X.comments)?X.comments:[]})):[],activities:Array.isArray(v.board.activities)?v.board.activities:[]}),f("")),Array.isArray(v&&v.warnings)&&v.warnings.length>0&&g(X=>[...X,...v.warnings]))},[]),te=(0,ue.useCallback)(async(v,M={})=>{let T=++V.current;f("");try{let X=await Zn(v,M,l);return G(X,l,T),!0}catch(X){return f(i("actionFailed")+String(X&&X.message||X)),!1}},[l,G,i]),Ae=(0,ue.useCallback)(()=>{let v=++V.current;D(!0),Zn("get",{},l).then(M=>G(M,l,v)).catch(M=>f(i("loadFailed")+String(M&&M.message||M))).finally(()=>D(!1))},[l,G,i]);(0,ue.useEffect)(()=>{let v=!0,M=++V.current;return c(null),A(null),k(""),I(null),m(null),f(""),g([]),Zn("get",{},l).then(T=>{v&&G(T,l,M)}).catch(T=>{v&&f(i("loadFailed")+String(T&&T.message||T))}),()=>{v=!1}},[l,G,i]),(0,ue.useEffect)(()=>{u&&A(v=>v&&!u.labels.some(M=>M.name===v)?null:v)},[u?.labels]),(0,ue.useLayoutEffect)(()=>{let v=Re=>{let le=Re;for(;le;){let we=getComputedStyle(le).overflowY;if(we==="auto"||we==="scroll")return le;le=le.parentElement}return null},M=()=>{let Re=_.current;if(!Re)return;let le=v(Re.parentElement),we=Re.getBoundingClientRect().top+(le?.scrollTop??0),Se=window.innerHeight;if(le){let st=le.querySelector("[data-composer-seat]"),at=st?st.getBoundingClientRect().top:0;st&&st.offsetHeight>0&&at>we?Se=at:Se=le.getBoundingClientRect().bottom}W(Math.max(0,Math.floor(Se-we)))};M();let T=v(_.current?.parentElement??null),X=new ResizeObserver(M);if(X.observe(document.documentElement),T){X.observe(T);let Re=T.querySelector("[data-composer-seat]");Re&&X.observe(Re)}return window.addEventListener("resize",M),()=>{X.disconnect(),window.removeEventListener("resize",M)}},[u!==null]);let Ie=(0,ue.useCallback)(v=>{let M=Hi(v),T=M.length>0?M:hs(v),X=rr(T,"id");if(X==null)return[];if(new Set((u?.columns??[]).map(le=>le.id)).has(String(X))){let le=(u?.cards??[]).filter(we=>we.columnId===X).map(we=>we.id);if(le.length>0){let we=Xr({...v,droppableContainers:v.droppableContainers.filter(Se=>Se.id!==X&&le.includes(String(Se.id)))});we.length>0&&(X=we[0].id)}}return[{id:X}]},[u]),B=v=>{let M=H.current;if(!M||M.cards===v)return;let T={...M,cards:v};H.current=T,c(T)},pe=v=>{if(v.active.data.current?.type!=="card")return;let M=H.current,T=M?.cards.find(X=>X.id===v.active.id);!T||!M||(Y.current=M.cards,m(T))},me=({active:v,over:M})=>{let T=H.current;if(!M||!T||v.data.current?.type!=="card")return;let X=String(v.id),Re=T.cards.find(at=>at.id===X),le=T.cards.find(at=>at.id===M.id),we=le?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!Re||!we||Re.columnId===we)return;let Se=v.rect.current.translated,st=!!(le&&Se&&Se.top+Se.height/2>M.rect.top+M.rect.height/2);B(Yp(T.cards,X,we,le?.id??null,st).cards)},he=({active:v,over:M})=>{let T=H.current,X=Y.current;if(Y.current=null,!M||!T||v.data.current?.type!=="card"){X&&B(X),m(null);return}let Re=String(v.id),le=T.cards.find(Kt=>Kt.id===M.id),we=le?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!we){X&&B(X),m(null);return}let Se=v.rect.current.translated,st=!!(le&&Se&&Se.top+Se.height/2>M.rect.top+M.rect.height/2),at=Yp(T.cards,Re,we,le?.id??null,st);B(at.cards),m(null),(!X||at.cards.some((Kt,_r)=>Kt.id!==X[_r]?.id||Kt.columnId!==X[_r]?.columnId))&&te("moveCard",{id:Re,columnId:we,toIndex:at.toIndex}).then(Kt=>{Kt||Ae()})},N=()=>{Y.current&&B(Y.current),Y.current=null,m(null)},de=v=>{if(!x)return Promise.resolve(!1);if(x.card){let M=H.current?.cards.find(X=>X.id===x.card.id)??x.card,T={id:M.id};return v.title!==M.title&&(T.title=v.title),v.note!==M.note&&(T.note=v.note),v.label!==(M.label??"")&&(T.label=v.label),v.priority!==(M.priority??"")&&(T.priority=v.priority),te("updateCard",T)}return te("addCard",{columnId:x.columnId,title:v.title,note:v.note,label:v.label||void 0,priority:v.priority||void 0})},oe=(0,ue.useCallback)(async(v,M)=>{let T=$p(v);if(!T)return!1;f("");try{return M==="current"?o?(await o.setDraft(T),!0):!1:r?.openWorkspace?(await r.openWorkspace(l,X=>Gp(X,T)),!0):!1}catch(X){return f(i("actionFailed")+String(X&&X.message||X)),!1}},[o,r,l,i]);return u?(0,U.jsxs)("div",{ref:_,className:"kanban-root kanban-view",style:z!=null?{height:z}:void 0,children:[d&&!x&&!L&&!y&&(0,U.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(R||S!==null)&&(0,U.jsxs)("div",{className:"kanban-filter-summary","aria-label":i("clearFilter"),children:[R&&(0,U.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${Nt[R].label}`,onClick:()=>k(""),children:[i("fieldPriority"),": ",Nt[R].label,(0,U.jsx)(ca,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),S!==null&&(0,U.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${S||i("noLabel")}`,onClick:()=>A(null),children:[i("fieldLabel"),": ",S||i("noLabel"),(0,U.jsx)(ca,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),p.length>0&&(0,U.jsxs)("div",{className:"kanban-warning",children:[(0,U.jsxs)("div",{className:"kanban-warning-body",children:[(0,U.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),p.map((v,M)=>(0,U.jsx)("p",{className:"kanban-warning-item",children:v},M))]}),(0,U.jsx)(ce,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,U.jsxs)($r,{sensors:E,collisionDetection:Ie,onDragStart:pe,onDragOver:me,onDragEnd:he,onDragCancel:N,children:[(0,U.jsxs)("div",{className:"kanban-content",children:[(0,U.jsxs)("div",{className:"kanban-toolbar",children:[(0,U.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:w,onClick:Ae,children:(0,U.jsx)(mr,{className:w?"kanban-animate-spin":void 0})}),(0,U.jsxs)(Ho,{children:[(0,U.jsx)(Uo,{asChild:!0,children:(0,U.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,U.jsx)(gr,{className:"kanban-icon"})})}),(0,U.jsxs)(ao,{align:"start",children:[(0,U.jsxs)(Rt,{onClick:()=>{f(""),b(!0)},children:[(0,U.jsx)(fr,{className:"kanban-icon"}),i("columnEdit")]}),(0,U.jsxs)(Rt,{onClick:()=>{f(""),C(!0)},children:[(0,U.jsx)(Co,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,U.jsxs)(Ho,{children:[(0,U.jsx)(Uo,{asChild:!0,children:(0,U.jsx)(ce,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${R?" is-active":""}`,title:i("priorityFilter"),"aria-label":i("priorityFilter"),"aria-pressed":!!R,children:(0,U.jsx)(da,{className:"kanban-icon"})})}),(0,U.jsxs)(ao,{align:"start",children:[(0,U.jsxs)(Rt,{role:"menuitemradio","aria-checked":!R,onSelect:()=>k(""),children:[(0,U.jsx)("span",{className:"kanban-filter-check",children:!R&&(0,U.jsx)(ft,{className:"kanban-icon"})}),i("all")]}),$n.map(v=>(0,U.jsxs)(Rt,{role:"menuitemradio","aria-checked":R===v,onSelect:()=>k(v),children:[(0,U.jsx)("span",{className:"kanban-filter-check",children:R===v&&(0,U.jsx)(ft,{className:"kanban-icon"})}),(0,U.jsx)("span",{className:"kanban-priority-dot",style:{background:Nt[v].color}}),Nt[v].label]},v))]})]}),(0,U.jsxs)(Ho,{children:[(0,U.jsx)(Uo,{asChild:!0,children:(0,U.jsx)(ce,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${S!==null?" is-active":""}`,title:S===null?i("labelFilter"):`${i("labelFilter")}: ${S||i("noLabel")}`,"aria-label":i("labelFilter"),"aria-pressed":S!==null,children:(0,U.jsx)(Co,{className:"kanban-icon"})})}),(0,U.jsxs)(ao,{align:"start",children:[(0,U.jsxs)(Rt,{role:"menuitemradio","aria-checked":S===null,onSelect:()=>A(null),children:[(0,U.jsx)("span",{className:"kanban-filter-check",children:S===null&&(0,U.jsx)(ft,{className:"kanban-icon"})}),i("all")]}),(0,U.jsxs)(Rt,{role:"menuitemradio","aria-checked":S==="",onSelect:()=>A(""),children:[(0,U.jsx)("span",{className:"kanban-filter-check",children:S===""&&(0,U.jsx)(ft,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(v=>(0,U.jsxs)(Rt,{role:"menuitemradio","aria-checked":S===v.name,onSelect:()=>A(v.name),children:[(0,U.jsx)("span",{className:"kanban-filter-check",children:S===v.name&&(0,U.jsx)(ft,{className:"kanban-icon"})}),(0,U.jsx)("span",{className:"kanban-label-dot",style:{background:v.color}}),v.name]},v.name))]})]})]}),(0,U.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(v=>{let M=u.cards.filter(T=>T.columnId===v.id&&(!R||T.priority===R)&&(S===null||(T.label??"")===S));return(0,U.jsx)(Wp,{column:v,cards:M,totalCount:u.cards.filter(T=>T.columnId===v.id).length,filtered:!!R||S!==null,labels:u.labels,onAddCard:T=>{f(""),I({card:null,columnId:T.id})},onOpenCard:T=>{f(""),I({card:T,columnId:T.columnId})}},v.id)})})]}),(0,U.jsx)(au,{children:h?(0,U.jsx)("div",{className:"kanban-drag-preview",children:(0,U.jsx)(ri,{card:h,labels:u.labels})}):null})]}),(0,U.jsx)(_p,{error:d,open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(v=>v.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(v=>v.cardId===x.card.id):[],onOpenChange:v=>{v||I(null)},onSave:de,onAddComment:(v,M)=>te("addComment",{id:v,content:M}),onDelete:v=>te("deleteCard",{id:v.id}),onChatWithAgent:oe}),(0,U.jsx)(Vp,{error:d,open:L,columns:u.columns,onOpenChange:b,onReorder:(v,M)=>{let T=u.columns.findIndex(X=>X.id===M);return T>=0?te("moveColumn",{id:v,toIndex:T}):Promise.resolve(!1)},onRename:(v,M)=>te("renameColumn",{id:v,title:M}),onDelete:v=>te("deleteColumn",{id:v}),onAdd:v=>te("addColumn",{title:v})}),(0,U.jsx)(zp,{error:d,open:y,labels:u.labels,onOpenChange:C,onAdd:(v,M)=>te("addLabel",{name:v,color:M}),onUpdate:(v,M,T)=>te("updateLabel",{name:v,newName:M,color:T}),onDelete:v=>te("deleteLabel",{name:v})})]}):(0,U.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,U.jsx)("p",{className:"kanban-error",children:d}):(0,U.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Qn=require("react");function Jp({sessionId:e,inputActions:t}){let a=(0,Qn.useSyncExternalStore)(Kp,jp);return(0,Qn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Xp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Qp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){sc(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>To("boardTab")},o=>(0,li.createElement)(Zp,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,li.createElement)(Jp,o)))}};var em="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+em+"]")){let e=document.createElement("style");e.setAttribute(em,""),e.textContent=gi,document.head.appendChild(e)}var PC=Qp;
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
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/refresh-cw.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/settings-2.mjs:
lucide-react/dist/esm/icons/tag.mjs:
lucide-react/dist/esm/icons/trash.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.55.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})