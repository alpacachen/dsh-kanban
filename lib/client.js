window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Qp=Object.create;var Fr=Object.defineProperty;var em=Object.getOwnPropertyDescriptor;var tm=Object.getOwnPropertyNames;var am=Object.getPrototypeOf,om=Object.prototype.hasOwnProperty;var si=e=>{throw TypeError(e)};var rm=(e,t)=>{for(var a in t)Fr(e,a,{get:t[a],enumerable:!0})},ii=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of tm(t))!om.call(e,r)&&r!==a&&Fr(e,r,{get:()=>t[r],enumerable:!(o=em(t,r))||o.enumerable});return e};var j=(e,t,a)=>(a=e!=null?Qp(am(e)):{},ii(t||!e||!e.__esModule?Fr(a,"default",{value:e,enumerable:!0}):a,e)),nm=e=>ii(Fr({},"__esModule",{value:!0}),e);var ui=(e,t,a)=>t.has(e)||si("Cannot "+a);var Ge=(e,t,a)=>(ui(e,t,"read from private field"),a?a.call(e):t.get(e)),di=(e,t,a)=>t.has(e)?si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),el=(e,t,a,o)=>(ui(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var LC={};rm(LC,{default:()=>xC});module.exports=nm(LC);var ci=`/*
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
`;var ai=require("react");var ie=require("react");var k=j(require("react")),Ra=require("react-dom");var Pe=require("react");function pi(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Pe.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var zo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ia(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Nr(e){return"nodeType"in e}function Ye(e){var t,a;return e?Ia(e)?e:Nr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function _r(e){let{Document:t}=Ye(e);return e instanceof t}function uo(e){return Ia(e)?!1:e instanceof Ye(e).HTMLElement}function al(e){return e instanceof Ye(e).SVGElement}function va(e){return e?Ia(e)?e.document:Nr(e)?_r(e)?e:uo(e)||al(e)?e.ownerDocument:document:document:document}var ct=zo?Pe.useLayoutEffect:Pe.useEffect;function Xo(e){let t=(0,Pe.useRef)(e);return ct(()=>{t.current=e}),(0,Pe.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function mi(){let e=(0,Pe.useRef)(null),t=(0,Pe.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Pe.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function co(e,t){t===void 0&&(t=[e]);let a=(0,Pe.useRef)(e);return ct(()=>{a.current!==e&&(a.current=e)},t),a}function fo(e,t){let a=(0,Pe.useRef)();return(0,Pe.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Ko(e){let t=Xo(e),a=(0,Pe.useRef)(null),o=(0,Pe.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function jo(e){let t=(0,Pe.useRef)();return(0,Pe.useEffect)(()=>{t.current=e},[e]),t.current}var tl={};function ba(e,t){return(0,Pe.useMemo)(()=>{if(t)return t;let a=tl[e]==null?0:tl[e]+1;return tl[e]=a,e+"-"+a},[e,t])}function hi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var wa=hi(1),Sa=hi(-1);function sm(e){return"clientX"in e&&"clientY"in e}function po(e){if(!e)return!1;let{KeyboardEvent:t}=Ye(e.target);return t&&e instanceof t}function im(e){if(!e)return!1;let{TouchEvent:t}=Ye(e.target);return t&&e instanceof t}function $o(e){if(im(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return sm(e)?{x:e.clientX,y:e.clientY}:null}var dt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[dt.Translate.toString(e),dt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),fi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function gi(e){return e.matches(fi)?e:e.querySelector(fi)}var ya=j(require("react")),um={display:"none"};function xi(e){let{id:t,value:a}=e;return ya.default.createElement("div",{id:t,style:um},a)}function Li(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ya.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Ci(){let[e,t]=(0,ya.useState)("");return{announce:(0,ya.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Ti=(0,k.createContext)(null);function dm(e){let t=(0,k.useContext)(Ti);(0,k.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function cm(){let[e]=(0,k.useState)(()=>new Set),t=(0,k.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,k.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var fm={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},pm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function mm(e){let{announcements:t=pm,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=fm}=e,{announce:n,announcement:l}=Ci(),s=ba("DndLiveRegion"),[i,u]=(0,k.useState)(!1);if((0,k.useEffect)(()=>{u(!0)},[]),dm((0,k.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;n(t.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;n(t.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!i)return null;let c=k.default.createElement(k.default.Fragment,null,k.default.createElement(xi,{id:o,value:r.draggable}),k.default.createElement(Li,{id:s,announcement:l}));return a?(0,Ra.createPortal)(c,a):c}var Be;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Be||(Be={}));function Ur(){}function Da(e,t){return(0,k.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Vr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,k.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Rt=Object.freeze({x:0,y:0});function dl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function hm(e,t){let a=$o(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function cl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function gm(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function ll(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function ar(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Ii(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Ei=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ii(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=dl(Ii(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(cl)},Wr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=ll(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=ll(i),c=r.reduce((f,p,g)=>f+dl(u[g],p),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(cl)};function xm(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var fl=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=xm(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(gm)};function Lm(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Oi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Lm(o,s)){let u=ll(s).reduce((d,f)=>d+dl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(cl)};function Cm(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Bi(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Rt}function Im(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var vm=Im(1);function Fi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function bm(e,t,a){let o=Fi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var wm={ignoreTransform:!1};function Ma(e,t){t===void 0&&(t=wm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ye(e).getComputedStyle(e);u&&(a=bm(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function vi(e){return Ma(e,{ignoreTransform:!0})}function Sm(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function ym(e,t){return t===void 0&&(t=Ye(e).getComputedStyle(e)),t.position==="fixed"}function Rm(e,t){t===void 0&&(t=Ye(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function or(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(_r(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!uo(r)||al(r)||a.includes(r))return a;let n=Ye(e).getComputedStyle(r);return r!==e&&Rm(r,n)&&a.push(r),ym(r,n)?a:o(r.parentNode)}return e?o(e):a}function Ni(e){let[t]=or(e,1);return t??null}function ol(e){return!zo||!e?null:Ia(e)?e:Nr(e)?_r(e)||e===va(e).scrollingElement?window:uo(e)?e:null:null}function _i(e){return Ia(e)?e.scrollX:e.scrollLeft}function Hi(e){return Ia(e)?e.scrollY:e.scrollTop}function sl(e){return{x:_i(e),y:Hi(e)}}var _e;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(_e||(_e={}));function Ui(e){return!zo||!e?!1:e===document.scrollingElement}function qi(e){let t={x:0,y:0},a=Ui(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Pm={x:.2,y:.2};function km(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Pm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=qi(e),p={x:0,y:0},g={x:0,y:0},h={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+h.height?(p.y=_e.Backward,g.y=o*Math.abs((t.top+h.height-n)/h.height)):!c&&i>=t.bottom-h.height&&(p.y=_e.Forward,g.y=o*Math.abs((t.bottom-h.height-i)/h.height)),!f&&s>=t.right-h.width?(p.x=_e.Forward,g.x=o*Math.abs((t.right-h.width-s)/h.width)):!d&&l<=t.left+h.width&&(p.x=_e.Backward,g.x=o*Math.abs((t.left+h.width-l)/h.width)),{direction:p,speed:g}}function Dm(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Vi(e){return e.reduce((t,a)=>wa(t,sl(a)),Rt)}function Mm(e){return e.reduce((t,a)=>t+_i(a),0)}function Am(e){return e.reduce((t,a)=>t+Hi(a),0)}function Wi(e,t){if(t===void 0&&(t=Ma),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Ni(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Tm=[["x",["left","right"],Mm],["y",["top","bottom"],Am]],Zo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=or(a),r=Vi(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Tm)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Pa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Em(e){let{EventTarget:t}=Ye(e);return e instanceof t?e:va(e)}function rl(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Ct;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ct||(Ct={}));function bi(e){e.preventDefault()}function Om(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var Gi={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},Bm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},sa=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Pa(va(a)),this.windowListeners=new Pa(Ye(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ct.Resize,this.handleCancel),this.windowListeners.add(Ct.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ct.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Wi(o),a(Rt)}handleKeyDown(t){if(po(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Gi,coordinateGetter:l=Bm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:Rt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=Sa(d,c),p={x:0,y:0},{scrollableAncestors:g}=o.current;for(let h of g){let m=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:I,maxScroll:y,minScroll:v}=qi(h),w=Dm(h),D={x:Math.min(m===re.Right?w.right-w.width/2:w.right,Math.max(m===re.Right?w.left:w.left+w.width/2,d.x)),y:Math.min(m===re.Down?w.bottom-w.height/2:w.bottom,Math.max(m===re.Down?w.top:w.top+w.height/2,d.y))},S=m===re.Right&&!C||m===re.Left&&!L,R=m===re.Down&&!I||m===re.Up&&!x;if(S&&D.x!==d.x){let P=h.scrollLeft+f.x,E=m===re.Right&&P<=y.x||m===re.Left&&P>=v.x;if(E&&!f.y){h.scrollTo({left:P,behavior:s});return}E?p.x=h.scrollLeft-P:p.x=m===re.Right?h.scrollLeft-y.x:h.scrollLeft-v.x,p.x&&h.scrollBy({left:-p.x,behavior:s});break}else if(R&&D.y!==d.y){let P=h.scrollTop+f.y,E=m===re.Down&&P<=y.y||m===re.Up&&P>=v.y;if(E&&!f.x){h.scrollTo({top:P,behavior:s});return}E?p.y=h.scrollTop-P:p.y=m===re.Down?h.scrollTop-y.y:h.scrollTop-v.y,p.y&&h.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,wa(Sa(d,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};sa.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Gi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function wi(e){return!!(e&&"distance"in e)}function Si(e){return!!(e&&"delay"in e)}var Jo=class{constructor(t,a,o){var r;o===void 0&&(o=Em(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=va(l),this.documentListeners=new Pa(this.document),this.listeners=new Pa(o),this.windowListeners=new Pa(Ye(l)),this.initialCoordinates=(r=$o(n))!=null?r:Rt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Ct.Resize,this.handleCancel),this.windowListeners.add(Ct.DragStart,bi),this.windowListeners.add(Ct.VisibilityChange,this.handleCancel),this.windowListeners.add(Ct.ContextMenu,bi),this.documentListeners.add(Ct.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Si(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(wi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Ct.Click,Om,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ct.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=$o(t))!=null?a:Rt,u=Sa(r,i);if(!o&&s){if(wi(s)){if(s.tolerance!=null&&rl(u,s.tolerance))return this.handleCancel();if(rl(u,s.distance))return this.handleStart()}if(Si(s)&&rl(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Fm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},mo=class extends Jo{constructor(t){let{event:a}=t,o=va(a.target);super(t,Fm,o)}};mo.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Nm={move:{name:"mousemove"},end:{name:"mouseup"}},il;(function(e){e[e.RightClick=2]="RightClick"})(il||(il={}));var Qo=class extends Jo{constructor(t){super(t,Nm,va(t.event.target))}};Qo.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===il.RightClick?!1:(o?.({event:a}),!0)}}];var nl={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},er=class extends Jo{constructor(t){super(t,nl)}static setup(){return window.addEventListener(nl.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(nl.move.name,t)};function t(){}}};er.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Yo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Yo||(Yo={}));var qr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(qr||(qr={}));function _m(e){let{acceleration:t,activator:a=Yo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=qr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,p=Um({delta:d,disabled:!n}),[g,h]=mi(),m=(0,k.useRef)({x:0,y:0}),x=(0,k.useRef)({x:0,y:0}),C=(0,k.useMemo)(()=>{switch(a){case Yo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Yo.DraggableRect:return r}},[a,r,i]),L=(0,k.useRef)(null),I=(0,k.useCallback)(()=>{let v=L.current;if(!v)return;let w=m.current.x*x.current.x,D=m.current.y*x.current.y;v.scrollBy(w,D)},[]),y=(0,k.useMemo)(()=>s===qr.TreeOrder?[...u].reverse():u,[s,u]);(0,k.useEffect)(()=>{if(!n||!u.length||!C){h();return}for(let v of y){if(o?.(v)===!1)continue;let w=u.indexOf(v),D=c[w];if(!D)continue;let{direction:S,speed:R}=km(v,D,C,t,f);for(let P of["x","y"])p[P][S[P]]||(R[P]=0,S[P]=0);if(R.x>0||R.y>0){h(),L.current=v,g(I,l),m.current=R,x.current=S;return}}m.current={x:0,y:0},x.current={x:0,y:0},h()},[t,I,o,h,n,l,JSON.stringify(C),JSON.stringify(p),g,u,y,c,JSON.stringify(f)])}var Hm={x:{[_e.Backward]:!1,[_e.Forward]:!1},y:{[_e.Backward]:!1,[_e.Forward]:!1}};function Um(e){let{delta:t,disabled:a}=e,o=jo(t);return fo(r=>{if(a||!o||!r)return Hm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[_e.Backward]:r.x[_e.Backward]||n.x===-1,[_e.Forward]:r.x[_e.Forward]||n.x===1},y:{[_e.Backward]:r.y[_e.Backward]||n.y===-1,[_e.Forward]:r.y[_e.Forward]||n.y===1}}},[a,t,o])}function qm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return fo(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Vm(e,t){return(0,k.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var tr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(tr||(tr={}));var ul;(function(e){e.Optimized="optimized"})(ul||(ul={}));var yi=new Map;function Wm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,k.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,k.useRef)(e),d=m(),f=co(d),p=(0,k.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),g=(0,k.useRef)(null),h=fo(x=>{if(d&&!a)return yi;if(!x||x===yi||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let I=L.node.current,y=I?new Zo(i(I),I):null;L.rect.current=y,y&&C.set(L.id,y)}return C}return x},[e,n,a,d,i]);return(0,k.useEffect)(()=>{c.current=e},[e]),(0,k.useEffect)(()=>{d||p()},[a,d]),(0,k.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,k.useEffect)(()=>{d||typeof s!="number"||g.current!==null||(g.current=setTimeout(()=>{p(),g.current=null},s))},[s,d,p,...o]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:n!=null};function m(){switch(u){case tr.Always:return!1;case tr.BeforeDragging:return a;default:return!a}}}function pl(e,t){return fo(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Gm(e,t){return pl(e,t)}function zm(e){let{callback:t,disabled:a}=e,o=Xo(t),r=(0,k.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,k.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Gr(e){let{callback:t,disabled:a}=e,o=Xo(t),r=(0,k.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,k.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Xm(e){return new Zo(Ma(e),e)}function Ri(e,t,a){t===void 0&&(t=Xm);let[o,r]=(0,k.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=zm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Gr({callback:n});return ct(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Km(e){let t=pl(e);return Bi(e,t)}var Pi=[];function jm(e){let t=(0,k.useRef)(e),a=fo(o=>e?o&&o!==Pi&&e&&t.current&&e.parentNode===t.current.parentNode?o:or(e):Pi,[e]);return(0,k.useEffect)(()=>{t.current=e},[e]),a}function $m(e){let[t,a]=(0,k.useState)(null),o=(0,k.useRef)(e),r=(0,k.useCallback)(n=>{let l=ol(n.target);l&&a(s=>s?(s.set(l,sl(l)),new Map(s)):null)},[]);return(0,k.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=ol(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,sl(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=ol(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,k.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>wa(n,l),Rt):Vi(e):Rt,[e,t])}function ki(e,t){t===void 0&&(t=[]);let a=(0,k.useRef)(null);return(0,k.useEffect)(()=>{a.current=null},t),(0,k.useEffect)(()=>{let o=e!==Rt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?Sa(e,a.current):Rt}function Ym(e){(0,k.useEffect)(()=>{if(!zo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Zm(e,t){return(0,k.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function zi(e){return(0,k.useMemo)(()=>e?Sm(e):null,[e])}var Di=[];function Jm(e,t){t===void 0&&(t=Ma);let[a]=e,o=zi(a?Ye(a):null),[r,n]=(0,k.useState)(Di);function l(){n(()=>e.length?e.map(i=>Ui(i)?o:new Zo(t(i),i)):Di)}let s=Gr({callback:l});return ct(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Xi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return uo(t)?t:e}function Qm(e){let{measure:t}=e,[a,o]=(0,k.useState)(null),r=(0,k.useCallback)(u=>{for(let{target:c}of u)if(uo(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Gr({callback:r}),l=(0,k.useCallback)(u=>{let c=Xi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Ko(l);return(0,k.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var eh=[{sensor:mo,options:{}},{sensor:sa,options:{}}],th={current:{}},Hr={draggable:{measure:vi},droppable:{measure:vi,strategy:tr.WhileDragging,frequency:ul.Optimized},dragOverlay:{measure:Ma}},ka=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},ah={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ka,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ur},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Hr,measureDroppableContainers:Ur,windowRect:null,measuringScheduled:!1},Ki={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ur,draggableNodes:new Map,over:null,measureDroppableContainers:Ur},rr=(0,k.createContext)(Ki),ji=(0,k.createContext)(ah);function oh(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ka}}}function rh(e,t){switch(t.type){case Be.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Be.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Be.DragEnd:case Be.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Be.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ka(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Be.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new ka(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Be.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ka(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function nh(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,k.useContext)(rr),n=jo(o),l=jo(a?.id);return(0,k.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!po(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=gi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function $i(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function lh(e){return(0,k.useMemo)(()=>({draggable:{...Hr.draggable,...e?.draggable},droppable:{...Hr.droppable,...e?.droppable},dragOverlay:{...Hr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function sh(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,k.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;ct(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Bi(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Ni(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var zr=(0,k.createContext)({...Rt,scaleX:1,scaleY:1}),la;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(la||(la={}));var Xr=(0,k.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=eh,collisionDetection:d=fl,measuring:f,modifiers:p,...g}=t,h=(0,k.useReducer)(rh,void 0,oh),[m,x]=h,[C,L]=cm(),[I,y]=(0,k.useState)(la.Uninitialized),v=I===la.Initialized,{draggable:{active:w,nodes:D,translate:S},droppable:{containers:R}}=m,P=w!=null?D.get(w):null,E=(0,k.useRef)({initial:null,translated:null}),_=(0,k.useMemo)(()=>{var $e;return w!=null?{id:w,data:($e=P?.data)!=null?$e:th,rect:E}:null},[w,P]),U=(0,k.useRef)(null),[z,W]=(0,k.useState)(null),[A,N]=(0,k.useState)(null),X=co(g,Object.values(g)),V=ba("DndDescribedBy",l),ae=(0,k.useMemo)(()=>R.getEnabled(),[R]),Z=lh(f),{droppableRects:Q,measureDroppableContainers:Ae,measuringScheduled:Ie}=Wm(ae,{dragging:v,dependencies:[S.x,S.y],config:Z.droppable}),B=qm(D,w),ce=(0,k.useMemo)(()=>A?$o(A):null,[A]),fe=Jp(),pe=Gm(B,Z.draggable.measure);sh({activeNode:w!=null?D.get(w):null,config:fe.layoutShiftCompensation,initialRect:pe,measure:Z.draggable.measure});let F=Ri(B,Z.draggable.measure,pe),ue=Ri(B?B.parentElement:null),oe=(0,k.useRef)({activatorEvent:null,active:null,activeNode:B,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:D,draggingNode:null,draggingNodeRect:null,droppableContainers:R,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),b=R.getNodeFor((a=oe.current.over)==null?void 0:a.id),M=Qm({measure:Z.dragOverlay.measure}),T=(o=M.nodeRef.current)!=null?o:B,G=v?(r=M.rect)!=null?r:F:null,Re=!!(M.nodeRef.current&&M.rect),se=Km(Re?null:F),we=zi(T?Ye(T):null),Se=jm(v?b??B:null),lt=Jm(Se),at=$i(p,{transform:{x:S.x-se.x,y:S.y-se.y,scaleX:1,scaleY:1},activatorEvent:A,active:_,activeNodeRect:F,containerNodeRect:ue,draggingNodeRect:G,over:oe.current.over,overlayNodeRect:M.rect,scrollableAncestors:Se,scrollableAncestorRects:lt,windowRect:we}),Zn=ce?wa(ce,S):null,Xt=$m(Se),Br=ki(Xt),Xp=ki(Xt,[F]),lo=wa(at,Br),so=G?vm(G,at):null,qo=_&&so?d({active:_,collisionRect:so,droppableRects:Q,droppableContainers:ae,pointerCoordinates:Zn}):null,oi=ar(qo,"id"),[aa,ri]=(0,k.useState)(null),Kp=Re?at:wa(at,Xp),jp=Cm(Kp,(n=aa?.rect)!=null?n:null,F),Jn=(0,k.useRef)(null),ni=(0,k.useCallback)(($e,st)=>{let{sensor:it,options:oa}=st;if(U.current==null)return;let Lt=D.get(U.current);if(!Lt)return;let ut=$e.nativeEvent,Nt=new it({active:U.current,activeNode:Lt,event:ut,options:oa,context:oe,onAbort(We){if(!D.get(We))return;let{onDragAbort:_t}=X.current,Kt={id:We};_t?.(Kt),C({type:"onDragAbort",event:Kt})},onPending(We,ra,_t,Kt){if(!D.get(We))return;let{onDragPending:Wo}=X.current,na={id:We,constraint:ra,initialCoordinates:_t,offset:Kt};Wo?.(na),C({type:"onDragPending",event:na})},onStart(We){let ra=U.current;if(ra==null)return;let _t=D.get(ra);if(!_t)return;let{onDragStart:Kt}=X.current,Vo={activatorEvent:ut,active:{id:ra,data:_t.data,rect:E}};(0,Ra.unstable_batchedUpdates)(()=>{Kt?.(Vo),y(la.Initializing),x({type:Be.DragStart,initialCoordinates:We,active:ra}),C({type:"onDragStart",event:Vo}),W(Jn.current),N(ut)})},onMove(We){x({type:Be.DragMove,coordinates:We})},onEnd:io(Be.DragEnd),onCancel:io(Be.DragCancel)});Jn.current=Nt;function io(We){return async function(){let{active:_t,collisions:Kt,over:Vo,scrollAdjustedTranslate:Wo}=oe.current,na=null;if(_t&&Wo){let{cancelDrop:Go}=X.current;na={activatorEvent:ut,active:_t,collisions:Kt,delta:Wo,over:Vo},We===Be.DragEnd&&typeof Go=="function"&&await Promise.resolve(Go(na))&&(We=Be.DragCancel)}U.current=null,(0,Ra.unstable_batchedUpdates)(()=>{x({type:We}),y(la.Uninitialized),ri(null),W(null),N(null),Jn.current=null;let Go=We===Be.DragEnd?"onDragEnd":"onDragCancel";if(na){let Qn=X.current[Go];Qn?.(na),C({type:Go,event:na})}})}}},[D]),$p=(0,k.useCallback)(($e,st)=>(it,oa)=>{let Lt=it.nativeEvent,ut=D.get(oa);if(U.current!==null||!ut||Lt.dndKit||Lt.defaultPrevented)return;let Nt={active:ut};$e(it,st.options,Nt)===!0&&(Lt.dndKit={capturedBy:st.sensor},U.current=oa,ni(it,st))},[D,ni]),li=Vm(c,$p);Ym(c),ct(()=>{F&&I===la.Initializing&&y(la.Initialized)},[F,I]),(0,k.useEffect)(()=>{let{onDragMove:$e}=X.current,{active:st,activatorEvent:it,collisions:oa,over:Lt}=oe.current;if(!st||!it)return;let ut={active:st,activatorEvent:it,collisions:oa,delta:{x:lo.x,y:lo.y},over:Lt};(0,Ra.unstable_batchedUpdates)(()=>{$e?.(ut),C({type:"onDragMove",event:ut})})},[lo.x,lo.y]),(0,k.useEffect)(()=>{let{active:$e,activatorEvent:st,collisions:it,droppableContainers:oa,scrollAdjustedTranslate:Lt}=oe.current;if(!$e||U.current==null||!st||!Lt)return;let{onDragOver:ut}=X.current,Nt=oa.get(oi),io=Nt&&Nt.rect.current?{id:Nt.id,rect:Nt.rect.current,data:Nt.data,disabled:Nt.disabled}:null,We={active:$e,activatorEvent:st,collisions:it,delta:{x:Lt.x,y:Lt.y},over:io};(0,Ra.unstable_batchedUpdates)(()=>{ri(io),ut?.(We),C({type:"onDragOver",event:We})})},[oi]),ct(()=>{oe.current={activatorEvent:A,active:_,activeNode:B,collisionRect:so,collisions:qo,droppableRects:Q,draggableNodes:D,draggingNode:T,draggingNodeRect:G,droppableContainers:R,over:aa,scrollableAncestors:Se,scrollAdjustedTranslate:lo},E.current={initial:G,translated:so}},[_,B,qo,so,D,T,G,Q,R,aa,Se,lo]),_m({...fe,delta:S,draggingRect:so,pointerCoordinates:Zn,scrollableAncestors:Se,scrollableAncestorRects:lt});let Yp=(0,k.useMemo)(()=>({active:_,activeNode:B,activeNodeRect:F,activatorEvent:A,collisions:qo,containerNodeRect:ue,dragOverlay:M,draggableNodes:D,droppableContainers:R,droppableRects:Q,over:aa,measureDroppableContainers:Ae,scrollableAncestors:Se,scrollableAncestorRects:lt,measuringConfiguration:Z,measuringScheduled:Ie,windowRect:we}),[_,B,F,A,qo,ue,M,D,R,Q,aa,Ae,Se,lt,Z,Ie,we]),Zp=(0,k.useMemo)(()=>({activatorEvent:A,activators:li,active:_,activeNodeRect:F,ariaDescribedById:{draggable:V},dispatch:x,draggableNodes:D,over:aa,measureDroppableContainers:Ae}),[A,li,_,F,x,V,D,aa,Ae]);return k.default.createElement(Ti.Provider,{value:L},k.default.createElement(rr.Provider,{value:Zp},k.default.createElement(ji.Provider,{value:Yp},k.default.createElement(zr.Provider,{value:jp},u)),k.default.createElement(nh,{disabled:s?.restoreFocus===!1})),k.default.createElement(mm,{...s,hiddenTextDescribedById:V}));function Jp(){let $e=z?.autoScrollEnabled===!1,st=typeof i=="object"?i.enabled===!1:i===!1,it=v&&!$e&&!st;return typeof i=="object"?{...i,enabled:it}:{enabled:it}}}),ih=(0,k.createContext)(null),Mi="button",uh="Draggable";function Yi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ba(uh),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,k.useContext)(rr),{role:p=Mi,roleDescription:g="draggable",tabIndex:h=0}=r??{},m=i?.id===t,x=(0,k.useContext)(m?zr:ih),[C,L]=Ko(),[I,y]=Ko(),v=Zm(l,t),w=co(a);ct(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:I,data:w}),()=>{let S=d.get(t);S&&S.key===n&&d.delete(t)}),[d,t]);let D=(0,k.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":o,"aria-pressed":m&&p===Mi?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,p,h,m,g,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:D,isDragging:m,listeners:o?void 0:v,node:C,over:f,setNodeRef:L,setActivatorNodeRef:y,transform:x}}function nr(){return(0,k.useContext)(ji)}var dh="Droppable",ch={timeout:25};function Kr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ba(dh),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,k.useContext)(rr),c=(0,k.useRef)({disabled:a}),d=(0,k.useRef)(!1),f=(0,k.useRef)(null),p=(0,k.useRef)(null),{disabled:g,updateMeasurementsFor:h,timeout:m}={...ch,...r},x=co(h??o),C=(0,k.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),p.current=null},m)},[m]),L=Gr({callback:C,disabled:g||!l}),I=(0,k.useCallback)((D,S)=>{L&&(S&&(L.unobserve(S),d.current=!1),D&&L.observe(D))},[L]),[y,v]=Ko(I),w=co(t);return(0,k.useEffect)(()=>{!L||!y.current||(L.disconnect(),d.current=!1,L.observe(y.current))},[y,L]),(0,k.useEffect)(()=>(s({type:Be.RegisterDroppable,element:{id:o,key:n,disabled:a,node:y,rect:f,data:w}}),()=>s({type:Be.UnregisterDroppable,key:n,id:o})),[o]),(0,k.useEffect)(()=>{a!==c.current.disabled&&(s({type:Be.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:y,over:i,setNodeRef:v}}function fh(e){let{animation:t,children:a}=e,[o,r]=(0,k.useState)(null),[n,l]=(0,k.useState)(null),s=jo(a);return!a&&!o&&s&&r(s),ct(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),k.default.createElement(k.default.Fragment,null,a,o?(0,k.cloneElement)(o,{ref:l}):null)}var ph={x:0,y:0,scaleX:1,scaleY:1};function mh(e){let{children:t}=e;return k.default.createElement(rr.Provider,{value:Ki},k.default.createElement(zr.Provider,{value:ph},t))}var hh={position:"fixed",touchAction:"none"},gh=e=>po(e)?"transform 250ms ease":void 0,xh=(0,k.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=gh}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...hh,width:s.width,height:s.height,top:s.top,left:s.left,transform:dt.Transform.toString(d),transformOrigin:r&&o?hm(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return k.default.createElement(a,{className:l,style:f,ref:t},n)}),Lh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Ch=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:dt.Transform.toString(t)},{transform:dt.Transform.toString(a)}]},Ih={duration:250,easing:"ease",keyframes:Ch,sideEffects:Lh({styles:{active:{opacity:"0"}}})};function vh(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Xo((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Xi(l);if(!u)return;let{transform:c}=Ye(l).getComputedStyle(l),d=Fi(c);if(!d)return;let f=typeof t=="function"?t:bh(t);return Wi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function bh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Ih,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},p=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[g]=p,h=p[p.length-1];if(JSON.stringify(g)===JSON.stringify(h))return;let m=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{m?.(),C()}})}}var Ai=0;function wh(e){return(0,k.useMemo)(()=>{if(e!=null)return Ai++,Ai},[e])}var Zi=k.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:g,droppableContainers:h,dragOverlay:m,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:I,windowRect:y}=nr(),v=(0,k.useContext)(zr),w=wh(d?.id),D=$i(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:L,scrollableAncestorRects:I,transform:v,windowRect:y}),S=pl(f),R=vh({config:o,draggableNodes:g,droppableContainers:h,measuringConfiguration:C}),P=S?m.setRef:void 0;return k.default.createElement(mh,null,k.default.createElement(fh,{animation:R},d&&w?k.default.createElement(xh,{key:w,id:d.id,ref:P,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:S,style:{zIndex:u,...r},transform:D},a):null))});var ke=j(require("react"));function Ji(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Sh(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function jr(e){return e!==null&&e>=0}function yh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Rh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Qi=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Ji(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var $r={scaleX:1,scaleY:1},Zr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...$r}:null}let i=Ph(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...$r}:r<a&&r>=l?{x:0,y:s.height+i,...$r}:{x:0,y:0,...$r}};function Ph(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var eu="Sortable",tu=ke.default.createContext({activeIndex:-1,containerId:eu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Qi,disabled:{draggable:!1,droppable:!1}});function Jr(e){let{children:t,id:a,items:o,strategy:r=Qi,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=nr(),d=ba(eu,a),f=s.rect!==null,p=(0,ke.useMemo)(()=>o.map(v=>typeof v=="object"&&"id"in v?v.id:v),[o]),g=l!=null,h=l?p.indexOf(l.id):-1,m=u?p.indexOf(u.id):-1,x=(0,ke.useRef)(p),C=!yh(p,x.current),L=m!==-1&&h===-1||C,I=Rh(n);ct(()=>{C&&g&&c(p)},[C,p,g,c]),(0,ke.useEffect)(()=>{x.current=p},[p]);let y=(0,ke.useMemo)(()=>({activeIndex:h,containerId:d,disabled:I,disableTransforms:L,items:p,overIndex:m,useDragOverlay:f,sortedRects:Sh(p,i),strategy:r}),[h,d,I.draggable,I.droppable,L,p,m,i,f,r]);return ke.default.createElement(tu.Provider,{value:y},t)}var kh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Ji(a,o,r).indexOf(t)},Dh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Mh={duration:200,easing:"ease"},au="transform",Ah=dt.Transition.toString({property:au,duration:0,easing:"linear"}),Th={roleDescription:"sortable"};function Eh(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,ke.useState)(null),s=(0,ke.useRef)(a);return ct(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Ma(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,ke.useEffect)(()=>{n&&l(null)},[n]),n}function Qr(e){let{animateLayoutChanges:t=Dh,attributes:a,disabled:o,data:r,getNewIndex:n=kh,id:l,strategy:s,resizeObserverConfig:i,transition:u=Mh}=e,{items:c,containerId:d,activeIndex:f,disabled:p,disableTransforms:g,sortedRects:h,overIndex:m,useDragOverlay:x,strategy:C}=(0,ke.useContext)(tu),L=Oh(o,p),I=c.indexOf(l),y=(0,ke.useMemo)(()=>({sortable:{containerId:d,index:I,items:c},...r}),[d,r,I,c]),v=(0,ke.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:w,node:D,isOver:S,setNodeRef:R}=Kr({id:l,data:y,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:v,...i}}),{active:P,activatorEvent:E,activeNodeRect:_,attributes:U,setNodeRef:z,listeners:W,isDragging:A,over:N,setActivatorNodeRef:X,transform:V}=Yi({id:l,data:y,attributes:{...Th,...a},disabled:L.draggable}),ae=pi(R,z),Z=!!P,Q=Z&&!g&&jr(f)&&jr(m),Ae=!x&&A,Ie=Ae&&Q?V:null,ce=Q?Ie??(s??C)({rects:h,activeNodeRect:_,activeIndex:f,overIndex:m,index:I}):null,fe=jr(f)&&jr(m)?n({id:l,items:c,activeIndex:f,overIndex:m}):I,pe=P?.id,F=(0,ke.useRef)({activeId:pe,items:c,newIndex:fe,containerId:d}),ue=c!==F.current.items,oe=t({active:P,containerId:d,isDragging:A,isSorting:Z,id:l,index:I,items:c,newIndex:F.current.newIndex,previousItems:F.current.items,previousContainerId:F.current.containerId,transition:u,wasDragging:F.current.activeId!=null}),b=Eh({disabled:!oe,index:I,node:D,rect:w});return(0,ke.useEffect)(()=>{Z&&F.current.newIndex!==fe&&(F.current.newIndex=fe),d!==F.current.containerId&&(F.current.containerId=d),c!==F.current.items&&(F.current.items=c)},[Z,fe,d,c]),(0,ke.useEffect)(()=>{if(pe===F.current.activeId)return;if(pe!=null&&F.current.activeId==null){F.current.activeId=pe;return}let T=setTimeout(()=>{F.current.activeId=pe},50);return()=>clearTimeout(T)},[pe]),{active:P,activeIndex:f,attributes:U,data:y,rect:w,index:I,newIndex:fe,items:c,isOver:S,isSorting:Z,isDragging:A,listeners:W,node:D,overIndex:m,over:N,setNodeRef:ae,setActivatorNodeRef:X,setDroppableNodeRef:R,setDraggableNodeRef:z,transform:b??ce,transition:M()};function M(){if(b||ue&&F.current.newIndex===I)return Ah;if(!(Ae&&!po(E)||!u)&&(Z||oe))return dt.Transition.toString({...u,property:au})}}function Oh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Yr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Bh=[re.Down,re.Right,re.Up,re.Left],en=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Bh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=Wr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=ar(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,g=f?.node.current;if(g&&p&&d&&f){let m=or(g).some((v,w)=>s[w]!==v),x=ou(d,f),C=Fh(d,f),L=m||!x?{x:0,y:0}:{x:C?o.width-p.width:0,y:C?o.height-p.height:0},I={x:p.left,y:p.top};return L.x&&L.y?I:Sa(I,L)}}}};function ou(e,t){return!Yr(e)||!Yr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Fh(e,t){return!Yr(e)||!Yr(t)||!ou(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var tn=require("react");var ru=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function nu(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ru(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var lu=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var su=e=>{let t=lu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var sr=require("react");var lr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ml(e){return e!=null}function iu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??ia.width,n=e.size??e.height??ia.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?lr(...i):lr("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??ia["stroke-width"])*Number(e.size??e.width??ia.width)/Number(t.size??t.width??ia.width):t.strokeWidth??ia["stroke-width"];return["svg",{...Object.entries(ia).reduce((f,[p,g])=>(f[o(p)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&ml(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&ml(t.width)&&{[o("width")]:t.width},..."height"in t&&ml(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,g,h]=f,m=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return h?[p,m,h]:[p,m]})]}function uu(e,t={}){return iu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var du=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var ho=require("react");var Nh=(0,ho.createContext)({});var cu=()=>(0,ho.useContext)(Nh);var fu=(0,sr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:h=!1,nonScalingStroke:m=!1,color:x="currentColor",className:C=""}=cu()??{},L=!!i||du(d),[I,y,v=[]]=uu(c,{color:e??x,width:a??t??p,height:o??t??p,strokeWidth:r??g,absoluteStrokeWidth:n??h,nonScalingStroke:l??m,className:lr(C,s),hasA11yProp:L,attributes:d});return(0,sr.createElement)(I,{ref:f,...y},[...v.map(([w,D])=>(0,sr.createElement)(w,D)),...Array.isArray(i)?i:[i]])});function me(e,t=[],a=[]){let o=typeof e=="string"?nu(e,t,a):e,r=(0,tn.forwardRef)(({className:n,...l},s)=>(0,tn.createElement)(fu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=su(o.name)),r}var pu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};pu.node;var Pt=me(pu);var mu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};mu.node;var go=me(mu);var hu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};hu.node;var ir=me(hu);var gu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};gu.node;var ua=me(gu);var xu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};xu.node;var ur=me(xu);var Lu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};Lu.node;var dr=me(Lu);var Cu={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Cu.node;var Aa=me(Cu);var Iu={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Iu.node;var jt=me(Iu);var vu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};vu.node;var cr=me(vu);var bu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};bu.node;var fr=me(bu);var wu={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};wu.node;var pr=me(wu);var Su={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Su.node;var xo=me(Su);var yu={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};yu.node;var It=me(yu);var Ru={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ru.node;var da=me(Ru);var tt=require("react");var Hu=j(require("react"),1);var ze=j(require("react"),1);var Pu=j(require("react"),1),_h=Object.defineProperty,gl=(e,t)=>_h(e,"name",{value:t,configurable:!0});function hl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}gl(hl,"setRef");function ku(...e){return t=>{let a=!1,o=e.map(r=>{let n=hl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():hl(e[r],null)}}}}gl(ku,"composeRefs");function J(...e){return Pu.useCallback(ku(...e),e)}gl(J,"useComposedRefs");var Hh=Object.defineProperty,ft=(e,t)=>Hh(e,"name",{value:t,configurable:!0});function Ze(e){let t=ze.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];r=Bu(r),ze.Children.forEach(r,f=>{if(Eu(f)){s=!0;let p=f,g="child"in p.props?p.props.child:p.props.children;for(;xl(g)&&typeof an=="function";)g=an(g._payload);l=qh(p,g),i.push(l?.props?.children)}else i.push(f)}),l?l=ze.cloneElement(l,void 0,i):!s&&ze.Children.count(r)===1&&ze.isValidElement(r)&&(l=r);let u=l?Tu(l):void 0,c=J(o,u);if(!l){if(r||r===0)throw new Error(s?Gh(e):Wh(e));return r}let d=Au(n,l.props??{});return l.type!==ze.Fragment&&(d.ref=o?c:u),ze.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}ft(Ze,"createSlot");var Du=Ze("Slot"),Mu=Symbol.for("radix.slottable");function Uh(e){let t=ft(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Mu,t}ft(Uh,"createSlottable");var qh=ft((e,t)=>"child"in e.props?ze.isValidElement(t)?ze.cloneElement(t,void 0,e.props.children(t.props.children)):null:ze.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function Au(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=Fu(n,r))}return{...e,...a}}ft(Au,"mergeProps");function Tu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}ft(Tu,"getElementRef");function Eu(e){return ze.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Mu}ft(Eu,"isSlottable");var Vh=Symbol.for("react.lazy");function xl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Vh&&"_payload"in e&&Ou(e._payload)}ft(xl,"isLazyComponent");function Ou(e){return typeof e=="object"&&e!==null&&"then"in e}ft(Ou,"isPromiseLike");function Bu(e){let t=e;for(;xl(t)&&typeof an=="function";)t=an(t._payload);return t}ft(Bu,"useUnwrappedLazy");function Fu(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}ft(Fu,"concatAriaDescribedby");var Wh=ft(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Gh=ft(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),an=ze[" use ".trim().toString()];function Nu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Nu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function _u(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Nu(e))&&(o&&(o+=" "),o+=t);return o}function ee(...e){return _u(e)}var Uu=require("react/jsx-runtime");function zh({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ee("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var he=Hu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Uu.jsx)(o?Du:"button",{className:zh({variant:t,size:a,className:e}),ref:n,...r}));he.displayName="Button";var wr=j(require("react"),1);var Le=j(require("react"),1);var Xh=Object.defineProperty,Lo=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),qu=!!(typeof window<"u"&&window.document&&window.document.createElement);function K(e,t,{checkForDefaultPrevented:a=!0}={}){return Lo(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}Lo(K,"composeEventHandlers");function Kh(e){if(!qu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}Lo(Kh,"getOwnerWindow");function Ll(e){if(!qu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}Lo(Ll,"getOwnerDocument");function Vu(e,t=!1){let{activeElement:a}=Ll(e);if(!a?.nodeName)return null;if(Wu(a)&&a.contentDocument)return Vu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Ll(a).getElementById(o);if(r)return r}}return a}Lo(Vu,"getActiveElement");function Wu(e){return e.tagName==="IFRAME"}Lo(Wu,"isFrame");var bt=j(require("react"),1),Cl=require("react/jsx-runtime"),jh=Object.defineProperty,vt=(e,t)=>jh(e,"name",{value:t,configurable:!0});function $h(e,t){let a=bt.createContext(t);a.displayName=e+"Context";let o=vt(n=>{let{children:l,...s}=n,i=bt.useMemo(()=>s,Object.values(s));return(0,Cl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=bt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return vt(r,"useContext"),[o,r]}vt($h,"createContext");function Xe(e,t=[]){let a=[];function o(n,l){let s=bt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=vt(d=>{let{scope:f,children:p,...g}=d,h=f?.[e]?.[i]||s,m=bt.useMemo(()=>g,Object.values(g));return(0,Cl.jsx)(h.Provider,{value:m,children:p})},"Provider");u.displayName=n+"Provider";function c(d,f,p={}){let{optional:g=!1}=p,h=f?.[e]?.[i]||s,m=bt.useContext(h);if(m)return m;if(l!==void 0)return l;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return vt(c,"useContext"),[u,c]}vt(o,"createContext");let r=vt(()=>{let n=a.map(l=>bt.createContext(l));return vt(function(s){let i=s?.[e]||n;return bt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Gu(r,...t)]}vt(Xe,"createContextScope");function Gu(...e){let t=e[0];if(e.length===1)return t;let a=vt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return vt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return bt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}vt(Gu,"composeContextScopes");var Il=j(require("react"),1);var zu=j(require("react"),1),le=globalThis?.document?zu.useLayoutEffect:()=>{};var Yh=Object.defineProperty,Zh=(e,t)=>Yh(e,"name",{value:t,configurable:!0}),Jh=Il[" useId ".trim().toString()]||(()=>{}),Qh=0;function pt(e){let[t,a]=Il.useState(Jh());return le(()=>{e||a(o=>o??String(Qh++))},[e]),e||(t?`radix-${t}`:"")}Zh(pt,"useId");var wt=j(require("react"),1);var on=!1;var kt=j(require("react"),1);var Co=j(require("react"),1),eg=Object.defineProperty,tg=(e,t)=>eg(e,"name",{value:t,configurable:!0}),Xu=Co[" useEffectEvent ".trim().toString()],Ku=Co[" useInsertionEffect ".trim().toString()];function vl(e){if(typeof Xu=="function")return Xu(e);let t=Co.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Ku=="function"?Ku(()=>{t.current=e}):le(()=>{t.current=e}),Co.useMemo(()=>((...a)=>t.current?.(...a)),[])}tg(vl,"useEffectEvent");var ag=Object.defineProperty,mr=(e,t)=>ag(e,"name",{value:t,configurable:!0}),og=wt[" useInsertionEffect ".trim().toString()]||le;function Ht({prop:e,defaultProp:t,onChange:a=mr(()=>{},"onChange"),caller:o}){let[r,n,l]=$u({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(on){let c=wt.useRef(e!==void 0);wt.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=wt.useCallback(c=>{if(s){let d=Yu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}mr(Ht,"useControllableState");function $u({defaultProp:e,onChange:t}){let[a,o]=wt.useState(e),r=wt.useRef(a),n=wt.useRef(t);return og(()=>{n.current=t},[t]),wt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}mr($u,"useUncontrolledState");function Yu(e){return typeof e=="function"}mr(Yu,"isFunction");var ju=Symbol("RADIX:SYNC_STATE");function rg(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=vl(l);if(on){let m=kt.useRef(r!==void 0);kt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=kt.useReducer((m,x)=>{if(x.type===ju)return{...m,state:x.state};let C=e(m,x);return i&&!Object.is(C.state,m.state)&&u(C.state),C},...c),p=d.state,g=kt.useRef(p);kt.useEffect(()=>{g.current!==p&&(g.current=p,i||u(p))},[p,g,i]);let h=kt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return kt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:ju,state:r})},[r,d.state,i]),[h,f]}mr(rg,"useControllableStateReducer");var ge=j(require("react"),1);var Zu=j(require("react"),1),Ju=j(require("react-dom"),1);var Qu=require("react/jsx-runtime"),ng=Object.defineProperty,lg=(e,t)=>ng(e,"name",{value:t,configurable:!0}),sg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],te=sg.reduce((e,t)=>{let a=Ze(`Primitive.${t}`),o=Zu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Qu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function hr(e,t){e&&Ju.flushSync(()=>e.dispatchEvent(t))}lg(hr,"dispatchDiscreteCustomEvent");var gr=j(require("react"),1),ig=Object.defineProperty,ug=(e,t)=>ig(e,"name",{value:t,configurable:!0}),ed=gr[" useInsertionEffect ".trim().toString()];function He(e){let t=gr.useRef(e);return typeof ed=="function"?ed(()=>{t.current=e}):le(()=>{t.current=e}),gr.useMemo(()=>((...a)=>t.current?.(...a)),[])}ug(He,"useCallbackRef");var ad=require("react/jsx-runtime"),dg=Object.defineProperty,Ue=(e,t)=>dg(e,"name",{value:t,configurable:!0}),bl="dismissableLayer.update",cg="dismissableLayer.pointerDownOutside",fg="dismissableLayer.focusOutside",td,od=ge.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Io=ge.forwardRef(Ue(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ge.useContext(od),[f,p]=ge.useState(null),g=f?.ownerDocument??globalThis?.document,[,h]=ge.useState({}),m=J(a,p),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,I=f?x.indexOf(f):-1,y=d.layersWithOutsidePointerEventsDisabled.size>0,v=I>=L,w=ge.useRef(!1),D=rd(E=>{l?.(E),i?.(E),E.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:w,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ge.useCallback(E=>{if(!(E instanceof Node))return!1;let _=[...d.branches].some(U=>U.contains(E));return v&&!_},[d.branches,v])}),S=nd(E=>{if(r&&w.current)return;let _=E.target;[...d.branches].some(z=>z.contains(_))||(s?.(E),i?.(E),E.defaultPrevented||u?.())},g),R=f?I===x.length-1:!1,P=He(E=>{E.key==="Escape"&&(n?.(E),!E.defaultPrevented&&u&&(E.preventDefault(),u()))});return ge.useEffect(()=>{if(R)return g.addEventListener("keydown",P,{capture:!0}),()=>g.removeEventListener("keydown",P,{capture:!0})},[g,R,P]),ge.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(td=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),wl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=td))}},[f,g,o,d]),ge.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),wl())},[f,d]),ge.useEffect(()=>{let E=Ue(()=>h({}),"handleUpdate");return document.addEventListener(bl,E),()=>document.removeEventListener(bl,E)},[]),(0,ad.jsx)(te.div,{...c,ref:m,style:{pointerEvents:y?v?"auto":"none":void 0,...t.style},onFocusCapture:K(t.onFocusCapture,S.onFocusCapture),onBlurCapture:K(t.onBlurCapture,S.onBlurCapture),onPointerDownCapture:K(t.onPointerDownCapture,D.onPointerDownCapture)})},"DismissableLayer"));function Sl(){let e=ge.useContext(od),[t,a]=ge.useState(null);return ge.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ue(Sl,"useDismissableLayerSurface");var pg=Ue(()=>!0,"IS_TRUE");function rd(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=pg}=t,s=He(e),i=ge.useRef(!1),u=ge.useRef(!1),c=ge.useRef(new Map),d=ge.useRef(()=>{});return ge.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Ue(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}Ue(p,"isOutsideInteractionIntercepted");function g(L){if(!u.current)return;let I=L.target;I instanceof Node&&[...n].some(v=>v.contains(I))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Ue(g,"handleInteractionCapture");function h(L){u.current&&c.current.set(L.type,!1)}Ue(h,"handleInteractionBubble");let m=Ue(L=>{if(L.target&&!i.current){let y=function(){a.removeEventListener("click",d.current);let w=p();f(),w||yl(cg,s,v,{discrete:!0})};var I=y;if(Ue(y,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let v={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?y():(a.removeEventListener("click",d.current),d.current=y,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,g,!0),a.addEventListener(L,h);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,g,!0),a.removeEventListener(L,h)}},[a,s,o,r,n,l]),{onPointerDownCapture:Ue(()=>i.current=!0,"onPointerDownCapture")}}Ue(rd,"usePointerDownOutside");function nd(e,t=globalThis?.document){let a=He(e),o=ge.useRef(!1);return ge.useEffect(()=>{let r=Ue(n=>{n.target&&!o.current&&yl(fg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ue(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ue(()=>o.current=!1,"onBlurCapture")}}Ue(nd,"useFocusOutside");function wl(){let e=new CustomEvent(bl);document.dispatchEvent(e)}Ue(wl,"dispatchUpdate");function yl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?hr(r,n):r.dispatchEvent(n)}Ue(yl,"handleAndDispatchCustomEvent");var ye=j(require("react"),1);var Ml=require("react/jsx-runtime"),mg=Object.defineProperty,Te=(e,t)=>mg(e,"name",{value:t,configurable:!0}),Rl="focusScope.autoFocusOnMount",Pl="focusScope.autoFocusOnUnmount",ld={bubbles:!1,cancelable:!0},vo=ye.forwardRef(Te(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...i}=t,[u,c]=ye.useState(null),d=He(l),f=He(s),p=ye.useRef(null),g=J(a,c),h=ye.useRef(n);ye.useEffect(()=>{h.current=n});let m=ye.useCallback(L=>L?u?.contains(L)?!0:!!h.current?.some(I=>I.contains(L)):!1,[u]),x=ye.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ye.useEffect(()=>{if(r){let v=function(R){if(x.paused||!u)return;let P=R.target;m(P)?p.current=P:$t(p.current,{select:!0})},w=function(R){if(x.paused||!u)return;let P=R.relatedTarget;P!==null&&(m(P)||$t(p.current,{select:!0}))},D=function(R){if(document.activeElement===document.body)for(let E of R)E.removedNodes.length>0&&$t(u)};var L=v,I=w,y=D;Te(v,"handleFocusIn"),Te(w,"handleFocusOut"),Te(D,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",w);let S=new MutationObserver(D);return u&&S.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",w),S.disconnect()}}},[r,u,x.paused,m]),ye.useEffect(()=>{if(u){sd.add(x);let L=document.activeElement;if(!u.contains(L)){let y=new CustomEvent(Rl,ld);u.addEventListener(Rl,d),u.dispatchEvent(y),y.defaultPrevented||(ud(md(Tl(u)),{select:!0}),document.activeElement===L&&$t(u))}return()=>{u.removeEventListener(Rl,d);let y=u.ownerDocument,v=CustomEvent;setTimeout(()=>{let w=new v(Pl,ld);u.addEventListener(Pl,f),u.dispatchEvent(w),w.defaultPrevented||$t(L??y.body,{select:!0}),u.removeEventListener(Pl,f),sd.remove(x)},0)}}},[u,d,f,x]);let C=ye.useCallback(L=>{if(!o&&!r||x.paused)return;let I=L.key==="Tab"&&!L.altKey&&!L.ctrlKey&&!L.metaKey,y=document.activeElement;if(I&&y){let v=L.currentTarget,[w,D]=dd(v);w&&D?!L.shiftKey&&y===D?(L.preventDefault(),o&&$t(w,{select:!0})):L.shiftKey&&y===w&&(L.preventDefault(),o&&$t(D,{select:!0})):y===v&&L.preventDefault()}},[o,r,x.paused]);return(0,Ml.jsx)(te.div,{tabIndex:-1,...i,ref:g,onKeyDown:C})},"FocusScope")),id=ye.createContext(null);function xr({registry:e,children:t}){return e?(0,Ml.jsx)(id.Provider,{value:e,children:t}):t}Te(xr,"FocusScopeBranchProvider");function Lr(){let[e,t]=ye.useState([]),a=ye.useMemo(()=>({add:Te(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Te(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Te(Lr,"useFocusScopeBranchRegistry");function Al(e){let t=ye.useContext(id);ye.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Te(Al,"useFocusScopeBranch");function ud(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if($t(o,{select:t}),document.activeElement!==a)return}Te(ud,"focusFirst");function dd(e){let t=Tl(e),a=kl(t,e),o=kl(t.reverse(),e);return[a,o]}Te(dd,"getTabbableEdges");function Tl(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Te(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Te(Tl,"getTabbableCandidates");function kl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):cd(o,{upTo:t})))return o}Te(kl,"findVisible");function cd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Te(cd,"isHidden");function fd(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Te(fd,"isSelectableInput");function $t(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&fd(e)&&t&&e.select()}}Te($t,"focus");var sd=pd();function pd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Dl(e,t),e.unshift(t)},remove(t){e=Dl(e,t),e[0]?.resume()}}}Te(pd,"createFocusScopesStack");function Dl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Te(Dl,"arrayRemove");function md(e){return e.filter(t=>t.tagName!=="A")}Te(md,"removeLinks");var rn=j(require("react"),1),hd=j(require("react-dom"),1);var gd=require("react/jsx-runtime"),hg=Object.defineProperty,gg=(e,t)=>hg(e,"name",{value:t,configurable:!0}),bo=rn.forwardRef(gg(function(t,a){let{container:o,...r}=t,[n,l]=rn.useState(!1);le(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?hd.createPortal((0,gd.jsx)(te.div,{...r,ref:a}),s):null},"Portal"));var Ke=j(require("react"),1);var xd=j(require("react"),1),xg=Object.defineProperty,Yt=(e,t)=>xg(e,"name",{value:t,configurable:!0});function Ld(e,t){return xd.useReducer((a,o)=>t[a][o]??a,e)}Yt(Ld,"useStateMachine");var Zt=Yt(e=>{let{present:t,children:a}=e,o=Cd(t),r=typeof a=="function"?a({present:o.isPresent}):Ke.Children.only(a),n=Id(o.ref,vd(r));return typeof a=="function"||o.isPresent?Ke.cloneElement(r,{ref:n}):null},"Presence");function Cd(e){let[t,a]=Ke.useState(),o=Ke.useRef(null),r=Ke.useRef(e),n=Ke.useRef("none"),l=Ke.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=Ld(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ke.useEffect(()=>{i==="mounted"?(n.current=l.current??wo(o.current),l.current=void 0):n.current="none"},[i]),le(()=>{let c=o.current,d=r.current;if(d!==e){let p=n.current,g=wo(c);e?(l.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&p!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),le(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Yt(g=>{let m=wo(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),p=Yt(g=>{g.target===t&&(n.current=wo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ke.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=wo(d)}else o.current=null;a(c)},[])}}Yt(Cd,"usePresence");function El(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Yt(El,"setRef");function Id(...e){let t=Ke.useRef(e);return t.current=e,Ke.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=El(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():El(o[l],null)}}},[])}Yt(Id,"useStableComposedRefs");function wo(e){return e?.animationName||"none"}Yt(wo,"getAnimationName");function vd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Yt(vd,"getElementRef");var bd=j(require("react"),1),Lg=Object.defineProperty,Bl=(e,t)=>Lg(e,"name",{value:t,configurable:!0}),nn=0,So=null;function Cg(e){return ca(),e.children}Bl(Cg,"FocusGuards");function ca(){bd.useEffect(()=>{So||(So={start:Ol(),end:Ol()});let{start:e,end:t}=So;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),nn++,()=>{nn===1&&(So?.start.remove(),So?.end.remove(),So=null),nn=Math.max(0,nn-1)}},[])}Bl(ca,"useFocusGuards");function Ol(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Bl(Ol,"createFocusGuard");var rt=function(){return rt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},rt.apply(this,arguments)};function ln(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function wd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var fn=j(require("react"));var Je=j(require("react"));var Ta="right-scroll-bar-position",Ea="width-before-scroll-bar",Fl="with-scroll-bars-hidden",Nl="--removed-body-scroll-bar-size";function sn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Sd=require("react");function yd(e,t){var a=(0,Sd.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var un=j(require("react"));var Ig=typeof window<"u"?un.useLayoutEffect:un.useEffect,Rd=new WeakMap;function _l(e,t){var a=yd(t||null,function(o){return e.forEach(function(r){return sn(r,o)})});return Ig(function(){var o=Rd.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||sn(s,null)}),n.forEach(function(s){r.has(s)||sn(s,l)})}Rd.set(a,e)},[e]),a}function vg(e){return e}function bg(e,t){t===void 0&&(t=vg);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Hl(e){e===void 0&&(e={});var t=bg(null);return t.options=rt({async:!0,ssr:!1},e),t}var Pd=j(require("react")),kd=function(e){var t=e.sideCar,a=ln(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return Pd.createElement(o,rt({},a))};kd.isSideCarExport=!0;function Ul(e,t){return e.useMedium(t),kd}var dn=Hl();var ql=function(){},Cr=Je.forwardRef(function(e,t){var a=Je.useRef(null),o=Je.useState({onScrollCapture:ql,onWheelCapture:ql,onTouchMoveCapture:ql}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,g=e.noIsolation,h=e.inert,m=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,I=ln(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),y=f,v=_l([a,t]),w=rt(rt({},I),r);return Je.createElement(Je.Fragment,null,c&&Je.createElement(y,{sideCar:dn,removeScrollBar:u,shards:d,noRelative:p,noIsolation:g,inert:h,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:L}),l?Je.cloneElement(Je.Children.only(s),rt(rt({},w),{ref:v})):Je.createElement(C,rt({},w,{className:i,ref:v}),s))});Cr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Cr.classNames={fullWidth:Ea,zeroRight:Ta};var be=j(require("react"));var Ro=j(require("react"));var Ad=j(require("react"));var Dd;var Md=function(){if(Dd)return Dd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function wg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Md();return t&&e.setAttribute("nonce",t),e}function Sg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function yg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Vl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=wg())&&(Sg(t,a),yg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Wl=function(){var e=Vl();return function(t,a){Ad.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var Ir=function(){var e=Wl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Rg={left:0,top:0,right:0,gap:0},Gl=function(e){return parseInt(e||"",10)||0},Pg=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Gl(a),Gl(o),Gl(r)]},zl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Rg;var t=Pg(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var kg=Ir(),yo="data-scroll-locked",Dg=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Fl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(yo,`] {
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
  
  .`).concat(Ta,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ea,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ta," .").concat(Ta,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ea," .").concat(Ea,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(yo,`] {
    `).concat(Nl,": ").concat(s,`px;
  }
`)},Td=function(){var e=parseInt(document.body.getAttribute(yo)||"0",10);return isFinite(e)?e:0},Mg=function(){Ro.useEffect(function(){return document.body.setAttribute(yo,(Td()+1).toString()),function(){var e=Td()-1;e<=0?document.body.removeAttribute(yo):document.body.setAttribute(yo,e.toString())}},[])},Xl=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Mg();var n=Ro.useMemo(function(){return zl(r)},[r]);return Ro.createElement(kg,{styles:Dg(n,!t,r,a?"":"!important")})};var Kl=!1;if(typeof window<"u")try{vr=Object.defineProperty({},"passive",{get:function(){return Kl=!0,!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Kl=!1}var vr,Oa=Kl?{passive:!1}:!1;var Ag=function(e){return e.tagName==="TEXTAREA"},Ed=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Ag(e)&&a[t]==="visible")},Tg=function(e){return Ed(e,"overflowY")},Eg=function(e){return Ed(e,"overflowX")},jl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Od(e,o);if(r){var n=Bd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Og=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Bg=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},Od=function(e,t){return e==="v"?Tg(t):Eg(t)},Bd=function(e,t){return e==="v"?Og(t):Bg(t)},Fg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Fd=function(e,t,a,o,r){var n=Fg(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var p=Bd(e,s),g=p[0],h=p[1],m=p[2],x=h-m-n*g;(g||x)&&Od(e,s)&&(d+=x,f+=g);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var cn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Nd=function(e){return[e.deltaX,e.deltaY]},_d=function(e){return e&&"current"in e?e.current:e},Ng=function(e,t){return e[0]===t[0]&&e[1]===t[1]},_g=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Hg=0,Po=[];function Hd(e){var t=be.useRef([]),a=be.useRef([0,0]),o=be.useRef(),r=be.useState(Hg++)[0],n=be.useState(Ir)[0],l=be.useRef(e);be.useEffect(function(){l.current=e},[e]),be.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var h=wd([e.lockRef.current],(e.shards||[]).map(_d),!0).filter(Boolean);return h.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),h.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=be.useCallback(function(h,m){if("touches"in h&&h.touches.length===2||h.type==="wheel"&&h.ctrlKey)return!l.current.allowPinchZoom;var x=cn(h),C=a.current,L="deltaX"in h?h.deltaX:C[0]-x[0],I="deltaY"in h?h.deltaY:C[1]-x[1],y,v=h.target,w=Math.abs(L)>Math.abs(I)?"h":"v";if("touches"in h&&w==="h"&&v.type==="range")return!1;var D=window.getSelection(),S=D&&D.anchorNode,R=S?S===v||S.contains(v):!1;if(R)return!1;var P=jl(w,v);if(!P)return!0;if(P?y=w:(y=w==="v"?"h":"v",P=jl(w,v)),!P)return!1;if(!o.current&&"changedTouches"in h&&(L||I)&&(o.current=y),!y)return!0;var E=o.current||y;return Fd(E,m,h,E==="h"?L:I,!0)},[]),i=be.useCallback(function(h){var m=h;if(!(!Po.length||Po[Po.length-1]!==n)){var x="deltaY"in m?Nd(m):cn(m),C=t.current.filter(function(y){return y.name===m.type&&(y.target===m.target||m.target===y.shadowParent)&&Ng(y.delta,x)})[0];if(C&&C.should){m.cancelable&&m.preventDefault();return}if(!C){var L=(l.current.shards||[]).map(_d).filter(Boolean).filter(function(y){return y.contains(m.target)}),I=L.length>0?s(m,L[0]):!l.current.noIsolation;I&&m.cancelable&&m.preventDefault()}}},[]),u=be.useCallback(function(h,m,x,C){var L={name:h,delta:m,target:x,should:C,shadowParent:Ug(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(I){return I!==L})},1)},[]),c=be.useCallback(function(h){a.current=cn(h),o.current=void 0},[]),d=be.useCallback(function(h){u(h.type,Nd(h),h.target,s(h,e.lockRef.current))},[]),f=be.useCallback(function(h){u(h.type,cn(h),h.target,s(h,e.lockRef.current))},[]);be.useEffect(function(){return Po.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Oa),document.addEventListener("touchmove",i,Oa),document.addEventListener("touchstart",c,Oa),function(){Po=Po.filter(function(h){return h!==n}),document.removeEventListener("wheel",i,Oa),document.removeEventListener("touchmove",i,Oa),document.removeEventListener("touchstart",c,Oa)}},[]);var p=e.removeScrollBar,g=e.inert;return be.createElement(be.Fragment,null,g?be.createElement(n,{styles:_g(r)}):null,p?be.createElement(Xl,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ug(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ud=Ul(dn,Hd);var qd=fn.forwardRef(function(e,t){return fn.createElement(Cr,rt({},e,{ref:t,sideCar:Ud}))});qd.classNames=Cr.classNames;var Ba=qd;var qg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ko=new WeakMap,pn=new WeakMap,mn={},$l=0,Vd=function(e){return e&&(e.host||Vd(e.parentNode))},Vg=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Vd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Wg=function(e,t,a,o){var r=Vg(t,Array.isArray(e)?e:[e]);mn[a]||(mn[a]=new WeakMap);var n=mn[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(o),g=p!==null&&p!=="false",h=(ko.get(f)||0)+1,m=(n.get(f)||0)+1;ko.set(f,h),n.set(f,m),l.push(f),h===1&&g&&pn.set(f,!0),m===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),$l++,function(){l.forEach(function(d){var f=ko.get(d)-1,p=n.get(d)-1;ko.set(d,f),n.set(d,p),f||(pn.has(d)||d.removeAttribute(o),pn.delete(d)),p||d.removeAttribute(a)}),$l--,$l||(ko=new WeakMap,ko=new WeakMap,pn=new WeakMap,mn={})}},Do=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||qg(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Wg(o,r,a,"aria-hidden")):function(){return null}};var Ee=require("react/jsx-runtime"),Gg=Object.defineProperty,mt=(e,t)=>Gg(e,"name",{value:t,configurable:!0}),Zl="Dialog",[Wd,Qb]=Xe(Zl),[zg,Ut]=Wd(Zl),Gd=mt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=Le.useRef(null),i=Le.useRef(null),{nodes:u,registry:c}=Lr(),[d,f]=Ht({prop:o,defaultProp:r??!1,onChange:n,caller:Zl}),[p,g]=Le.useState(0),[h,m]=Le.useState(0);return(0,Ee.jsx)(zg,{scope:t,triggerRef:s,contentRef:i,contentId:pt(),titleId:pt(),descriptionId:pt(),titlePresent:p>0,descriptionPresent:h>0,setTitleCount:g,setDescriptionCount:m,open:d,onOpenChange:f,onOpenToggle:Le.useCallback(()=>f(x=>!x),[f]),modal:l,branchNodes:u,branchRegistry:c,children:a})},"Dialog");var zd="DialogPortal",[Xg,Xd]=Wd(zd,{forceMount:void 0}),Kd=mt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Ut(zd,t);return(0,Ee.jsx)(Xg,{scope:t,forceMount:a,children:Le.Children.map(o,l=>(0,Ee.jsx)(Zt,{present:a||n.open,children:(0,Ee.jsx)(bo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Yl="DialogOverlay",Jl=Le.forwardRef(mt(function(t,a){let o=Xd(Yl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Ut(Yl,t.__scopeDialog);return l.modal?(0,Ee.jsx)(Zt,{present:r||l.open,children:(0,Ee.jsx)(jg,{...n,ref:a})}):null},"DialogOverlay")),Kg=Ze("DialogOverlay.RemoveScroll"),jg=Le.forwardRef(mt(function(t,a){let{__scopeDialog:o,...r}=t,n=Ut(Yl,o),l=Sl(),s=J(a,l);return(0,Ee.jsx)(Ba,{as:Kg,allowPinchZoom:!0,shards:Le.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,Ee.jsx)(te.div,{"data-state":as(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),br="DialogContent",Ql=Le.forwardRef(mt(function(t,a){let o=Xd(br,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Ut(br,t.__scopeDialog);return(0,Ee.jsx)(Zt,{present:r||l.open,children:l.modal?(0,Ee.jsx)($g,{...n,ref:a}):(0,Ee.jsx)(Yg,{...n,ref:a})})},"DialogContent")),$g=Le.forwardRef(mt(function(t,a){let o=Ut(br,t.__scopeDialog),r=Le.useRef(null),n=J(a,o.contentRef,r);return Le.useEffect(()=>{let l=r.current;if(l)return Do(l)},[]),(0,Ee.jsx)(jd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:K(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:K(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:K(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Yg=Le.forwardRef(mt(function(t,a){let o=Ut(br,t.__scopeDialog),r=Le.useRef(!1),n=Le.useRef(!1);return(0,Ee.jsx)(jd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),jd=Le.forwardRef(mt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:i,...u}=t,c=Ut(br,o);return ca(),(0,Ee.jsx)(xr,{registry:c.branchRegistry,children:(0,Ee.jsx)(vo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Ee.jsx)(Io,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Yd(s,c.descriptionId):s,"data-state":as(c.open),...u,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),es=Le.forwardRef(mt(function(t,a){let{__scopeDialog:o,...r}=t,n=Ut("DialogTitle",o),{setTitleCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ee.jsx)(te.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),ts=Le.forwardRef(mt(function(t,a){let{__scopeDialog:o,...r}=t,n=Ut("DialogDescription",o),{setDescriptionCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ee.jsx)(te.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Zg="DialogClose",$d=Le.forwardRef(mt(function(t,a){let{__scopeDialog:o,...r}=t,n=Ut(Zg,o);return(0,Ee.jsx)(te.button,{type:"button",...r,ref:a,onClick:K(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Yd(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}mt(Yd,"concatAriaDescribedby");function as(e){return e?"open":"closed"}mt(as,"getState");var Jd=require("react"),os="dsh-kanban",Qd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Qg={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Fa=null,rs=null;function ec(e){let t=e.get("locale");if(t!==void 0){Fa=t;try{t.register(os,"zh",Qd),t.register(os,"en",Qg)}catch{}rs=t.bind(os)}}function Mo(e){return rs?rs(e):Qd[e]??e}var ex=e=>Fa&&typeof Fa.subscribe=="function"?Fa.subscribe(e):()=>{},Zd=()=>Fa&&typeof Fa.getSnapshot=="function"?Fa.getSnapshot():null;function qe(){return(0,Jd.useSyncExternalStore)(ex,Zd,Zd),Mo}var nt=require("react/jsx-runtime"),Ao=Gd;var tx=Kd;var tc=wr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(Jl,{ref:a,className:ee("kanban-portal kanban-dialog-overlay",e),...t}));tc.displayName=Jl.displayName;var Na=wr.forwardRef(({className:e,children:t,...a},o)=>{let r=qe();return(0,nt.jsxs)(tx,{children:[(0,nt.jsx)(tc,{}),(0,nt.jsxs)(Ql,{ref:o,className:ee("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,nt.jsxs)($d,{className:"kanban-dialog-close",children:[(0,nt.jsx)(da,{className:"kanban-dialog-close-icon"}),(0,nt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Na.displayName=Ql.displayName;var _a=({className:e,...t})=>(0,nt.jsx)("div",{className:ee("kanban-dialog-header",e),...t});_a.displayName="DialogHeader";var Ha=({className:e,...t})=>(0,nt.jsx)("div",{className:ee("kanban-dialog-body",e),...t});Ha.displayName="DialogBody";var Ua=({className:e,...t})=>(0,nt.jsx)("div",{className:ee("kanban-dialog-footer",e),...t});Ua.displayName="DialogFooter";var qa=wr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(es,{ref:a,className:ee("kanban-dialog-title",e),...t}));qa.displayName=es.displayName;var Sr=wr.forwardRef(({className:e,...t},a)=>(0,nt.jsx)(ts,{ref:a,className:ee("kanban-dialog-description",e),...t}));Sr.displayName=ts.displayName;var Tr=j(require("react"),1);var Ot=j(require("react"),1);var Y=j(require("react"),1);var Dt=j(require("react"),1);var gn=require("react/jsx-runtime"),Ne=j(require("react"),1);var fa=require("react/jsx-runtime");var ax=Object.defineProperty,Fe=(e,t)=>ax(e,"name",{value:t,configurable:!0});function Va(e){let t=e+"CollectionProvider",[a,o]=Xe(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Fe(h=>{let{scope:m,children:x}=h,C=Dt.useRef(null),L=Dt.useRef(new Map).current;return(0,gn.jsx)(r,{scope:m,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Ze(s),u=Dt.forwardRef((h,m)=>{let{scope:x,children:C}=h,L=n(s,x),I=J(m,L.collectionRef);return(0,gn.jsx)(i,{ref:I,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Ze(c),p=Dt.forwardRef((h,m)=>{let{scope:x,children:C,...L}=h,I=Dt.useRef(null),y=J(m,I),v=n(c,x);return Dt.useEffect(()=>(v.itemMap.set(I,{ref:I,...L}),()=>{v.itemMap.delete(I)})),(0,gn.jsx)(f,{[d]:"",ref:y,children:C})});p.displayName=c;function g(h){let m=n(e+"CollectionConsumer",h);return Dt.useCallback(()=>{let C=m.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((v,w)=>L.indexOf(v.ref.current)-L.indexOf(w.ref.current))},[m.collectionRef,m.itemMap])}return Fe(g,"useCollection"),[{Provider:l,Slot:u,ItemSlot:p},g,o]}Fe(Va,"createCollection");var ac=new WeakMap,De,ht,hn=(ht=class extends Map{constructor(a){super(a);di(this,De);el(this,De,[...super.keys()]),ac.set(this,!0)}set(a,o){return ac.get(this)&&!this.has(a)&&Ge(this,De).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=ns(a),i=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?Ge(this,De).indexOf(o)===i:i===this.size)return this.set(o,r),this;let u=Ge(this,De).filter(d=>d!==o);u.splice(i,0,o);let c=u.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new ht(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,De).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,De).indexOf(a);if(n===-1)return this;let l=Ge(this,De).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=Ge(this,De).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,De).indexOf(a);if(n===-1)return this;let l=Ge(this,De).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return el(this,De,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,De).splice(Ge(this,De).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=xn(Ge(this,De),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=xn(Ge(this,De),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,De).indexOf(a)}keyAt(a){return xn(Ge(this,De),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new ht(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new ht(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let i of this)l===0&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let i=this.entryAt(s);s===this.size-1&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new ht(o)}toReversed(){let a=new ht;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new ht(o)}slice(a,o){let r=new ht;for(let n of Ge(this,De).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},De=new WeakMap,Fe(ht,"OrderedDict"),ht);function xn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=oc(e,t);return a===-1?void 0:e[a]}Fe(xn,"at");function oc(e,t){let a=e.length,o=ns(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Fe(oc,"toSafeIndex");function ns(e){return e!==e||e===0?0:Math.trunc(e)}Fe(ns,"toSafeInteger");function ox(e){let t=e+"CollectionProvider",[a,o]=Xe(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let i=Fe(({state:v,...w})=>v?(0,fa.jsx)(c,{...w,state:v}):(0,fa.jsx)(u,{...w}),"CollectionProvider");i.displayName=t;let u=Fe(v=>{let w=C();return(0,fa.jsx)(c,{...v,state:w})},"CollectionInit");u.displayName=e+"CollectionInit";let c=Fe(v=>{let{scope:w,children:D,state:S}=v,R=Ne.useRef(null),[P,E]=Ne.useState(null),_=J(R,E),[U,z]=S,W=Ne.useRef(new hn),A=Ne.useCallback(()=>{let N=W.current;return lc(N)||N.sort(Ln),N},[]);return Ne.useEffect(()=>{if(!P)return;let N=sc(()=>{z(X=>{let V=X.toSorted(Ln);return V.some(([Z],Q)=>X.keyAt(Q)!==Z)?V:X})});return N.observe(P,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[P,z]),(0,fa.jsx)(r,{scope:w,collectionElementRef:_,collectionElementRefObject:R,getCollection:A,setCollection:z,registryRef:W,children:(0,fa.jsx)(l,{scope:w,collectionElement:P,collection:U,children:D})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=Ze(d),p=Ne.forwardRef((v,w)=>{let{scope:D,children:S}=v,R=n(d,D),P=J(w,R.collectionElementRef);return(0,fa.jsx)(f,{ref:P,children:S})});p.displayName=d;let g=e+"CollectionItemSlot",h="data-radix-collection-item",m=Ze(g),x=Ne.forwardRef((v,w)=>{let{scope:D,children:S,...R}=v,P=Ne.useRef(null),E=n(g,D),{setCollection:_,registryRef:U}=E,z=Ne.useRef(R);rc(z.current,R)||(z.current=R);let W=z.current,A=Ne.useCallback(V=>{let ae=U.current;V?ae.set(V,{...z.current,element:V}):P.current&&ae.delete(P.current)},[U]),N=J(w,A,P);le(()=>{let V=P.current,ae=U.current;V&&ae.has(V)&&ae.set(V,{...W,element:V})},[W,U]);let X=Ne.useRef(null);return Ne.useEffect(()=>{let V=P.current,ae=X.current;(ae?.element??null)===V&&(!V||ae?.itemData===W)||(X.current=V?{element:V,itemData:W}:null,_(Z=>{let Q=new hn(Z);return ae&&ae.element!==V&&Q.delete(ae.element),V&&Q.set(V,{...W,element:V}),Q.sort(Ln)}))}),Ne.useEffect(()=>()=>{let V=X.current;X.current=null,V&&_(ae=>{if(!ae.has(V.element))return ae;let Z=new hn(ae);return Z.delete(V.element),Z})},[_]),(0,fa.jsx)(m,{[h]:"",ref:N,children:S})});x.displayName=g;function C(){return Ne.useState(new hn)}Fe(C,"useInitCollection");function L(v){let{collection:w}=s(e+"CollectionConsumer",v);return w}Fe(L,"useCollection");function I(v){let{getCollection:w}=n(e+"CollectionConsumer",v);return w}return Fe(I,"useGetCollection"),[{Provider:i,Slot:p,ItemSlot:x},{createCollectionScope:o,useCollection:L,useGetCollection:I,useInitCollection:C}]}Fe(ox,"createCollection");function rc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Fe(rc,"shallowEqual");function nc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Fe(nc,"isElementPreceding");function lc(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}Fe(lc,"isInDocumentOrder");function Ln(e,t){return!e[1].element||!t[1].element?0:nc(e[1].element,t[1].element)?-1:1}Fe(Ln,"sortByDocumentPosition");function sc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Fe(sc,"getChildListObserver");var Cn=j(require("react"),1),lx=require("react/jsx-runtime"),rx=Object.defineProperty,nx=(e,t)=>rx(e,"name",{value:t,configurable:!0}),sx={LTR:"ltr",RTL:"rtl"},ix=Cn.createContext(void 0);function Wa(e){let t=Cn.useContext(ix);return e||t||sx.LTR}nx(Wa,"useDirection");var Qe=j(require("react"),1);var dc=["top","right","bottom","left"];var qt=Math.min,Mt=Math.max,Rr=Math.round,Pr=Math.floor,Vt=e=>({x:e,y:e}),ux={left:"right",right:"left",bottom:"top",top:"bottom"};function ls(e,t,a){return Mt(e,qt(t,a))}function Wt(e,t){return typeof e=="function"?e(t):e}function Jt(e){return e.split("-")[0]}function Ga(e){return e.split("-")[1]}function vn(e){return e==="x"?"y":"x"}function bn(e){return e==="y"?"height":"width"}function At(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function wn(e){return vn(At(e))}function cc(e,t,a){a===void 0&&(a=!1);let o=Ga(e),r=wn(e),n=bn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=yr(l)),[l,yr(l)]}function fc(e){let t=yr(e);return[In(e),t,In(t)]}function In(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var ic=["left","right"],uc=["right","left"],dx=["top","bottom"],cx=["bottom","top"];function fx(e,t,a){switch(e){case"top":case"bottom":return a?t?uc:ic:t?ic:uc;case"left":case"right":return t?dx:cx;default:return[]}}function pc(e,t,a,o){let r=Ga(e),n=fx(Jt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(In)))),n}function yr(e){let t=Jt(e);return ux[t]+e.slice(t.length)}function px(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function ss(e){return typeof e!="number"?px(e):{top:e,right:e,bottom:e,left:e}}function za(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function mc(e,t,a){let{reference:o,floating:r}=e,n=At(t),l=wn(t),s=bn(l),i=Jt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,p;switch(i){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}let g=Ga(t);return g&&(p[l]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),p}async function xc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Wt(t,e),g=ss(p),m=s[f?d==="floating"?"reference":"floating":d],x=za(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),I=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},y=za(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-y.top+g.top)/I.y,bottom:(y.bottom-x.bottom+g.bottom)/I.y,left:(x.left-y.left+g.left)/I.x,right:(y.right-x.right+g.right)/I.x}}var mx=50,Lc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:xc},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=mc(u,o,i),f=o,p=0,g={};for(let h=0;h<n.length;h++){let m=n[h];if(!m)continue;let{name:x,fn:C}=m,{x:L,y:I,data:y,reset:v}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=L??c,d=I??d,g[x]={...g[x],...y},v&&p<mx&&(p++,typeof v=="object"&&(v.placement&&(f=v.placement),v.rects&&(u=v.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),{x:c,y:d}=mc(u,f,i)),h=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},Cc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Wt(e,t)||{};if(u==null)return{};let d=ss(c),f={x:a,y:o},p=wn(r),g=bn(p),h=await l.getDimensions(u),m=p==="y",x=m?"top":"left",C=m?"bottom":"right",L=m?"clientHeight":"clientWidth",I=n.reference[g]+n.reference[p]-f[p]-n.floating[g],y=f[p]-n.reference[p],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),w=v?v[L]:0;(!w||!await(l.isElement==null?void 0:l.isElement(v)))&&(w=s.floating[L]||n.floating[g]);let D=I/2-y/2,S=w/2-h[g]/2-1,R=qt(d[x],S),P=qt(d[C],S),E=w-h[g]-P,_=w/2-h[g]/2+D,U=ls(R,_,E),z=!i.arrow&&Ga(r)!=null&&_!==U&&n.reference[g]/2-(_<R?R:P)-h[g]/2<0,W=z?_<R?_-R:_-E:0;return{[p]:f[p]+W,data:{[p]:U,centerOffset:_-U-W,...z&&{alignmentOffset:W}},reset:z}}});var Ic=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...m}=Wt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Jt(r),C=At(s),L=Jt(s)===s,I=await(i.isRTL==null?void 0:i.isRTL(u.floating)),y=f||(L||!h?[yr(s)]:fc(s)),v=g!=="none";!f&&v&&y.push(...pc(s,h,g,I));let w=[s,...y],D=await i.detectOverflow(t,m),S=[],R=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&S.push(D[x]),d){let U=cc(r,l,I);S.push(D[U[0]],D[U[1]])}if(R=[...R,{placement:r,overflows:S}],!S.every(U=>U<=0)){var P,E;let U=(((P=n.flip)==null?void 0:P.index)||0)+1,z=w[U];if(z&&(!(d==="alignment"?C!==At(z):!1)||R.every(N=>At(N.placement)===C?N.overflows[0]>0:!0)))return{data:{index:U,overflows:R},reset:{placement:z}};let W=(E=R.filter(A=>A.overflows[0]<=0).sort((A,N)=>A.overflows[1]-N.overflows[1])[0])==null?void 0:E.placement;if(!W)switch(p){case"bestFit":{var _;let A=(_=R.filter(N=>{if(v){let X=At(N.placement);return X===C||X==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(X=>X>0).reduce((X,V)=>X+V,0)]).sort((N,X)=>N[1]-X[1])[0])==null?void 0:_[0];A&&(W=A);break}case"initialPlacement":W=s;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function hc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function gc(e){return dc.some(t=>e[t]>=0)}var vc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Wt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=hc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:gc(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=hc(l,a.floating);return{data:{escapedOffsets:s,escaped:gc(s)}}}default:return{}}}}};var bc=new Set(["left","top"]);async function hx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Jt(a),s=Ga(a),i=At(a)==="y",u=bc.has(l)?-1:1,c=n&&i?-1:1,d=Wt(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(p=s==="end"?g*-1:g),i?{x:p*c,y:f*u}:{x:f*u,y:p*c}}var wc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await hx(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Sc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:L,y:I}=C;return{x:L,y:I}}},...u}=Wt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=At(r),p=vn(f),g=c[p],h=c[f],m=(C,L)=>ls(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);l&&(g=m(p,g)),s&&(h=m(f,h));let x=i.fn({...t,[p]:g,[f]:h});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[p]:l,[f]:s}}}}}},yc=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Wt(e,t),f={x:r,y:n},p=At(l),g=vn(p),h=f[g],m=f[p],x=Wt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let y=g==="y"?"height":"width",v=s.reference[g]-s.floating[y]+C.mainAxis,w=s.reference[g]+s.reference[y]-C.mainAxis;h<v?h=v:h>w&&(h=w)}if(d){var L,I;let y=g==="y"?"width":"height",v=bc.has(Jt(l)),w=s.reference[p]-s.floating[y]+(v&&((L=i.offset)==null?void 0:L[p])||0)+(v?0:C.crossAxis),D=s.reference[p]+s.reference[y]+(v?0:((I=i.offset)==null?void 0:I[p])||0)-(v?C.crossAxis:0);m<w?m=w:m>D&&(m=D)}return{[g]:h,[p]:m}}}},Rc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Wt(e,t),i=await r.detectOverflow(t,s),u=Jt(a),c=Ga(a),d=At(a)==="y",{width:f,height:p}=o.floating,g,h;u==="top"||u==="bottom"?(g=u,h=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(h=u,g=c==="end"?"top":"bottom");let m=p-i.top-i.bottom,x=f-i.left-i.right,C=qt(p-i[g],m),L=qt(f-i[h],x),I=t.middlewareData.shift,y=!I,v=C,w=L;I!=null&&I.enabled.x&&(w=x),I!=null&&I.enabled.y&&(v=m),y&&!c&&(d?w=f-2*Mt(i.left,i.right):v=p-2*Mt(i.top,i.bottom)),await l({...t,availableWidth:w,availableHeight:v});let D=await r.getDimensions(n.floating);return f!==D.width||p!==D.height?{reset:{rects:!0}}:{}}}};function Sn(){return typeof window<"u"}function ja(e){return kc(e)?(e.nodeName||"").toLowerCase():"#document"}function ot(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gt(e){var t;return(t=(kc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function kc(e){return Sn()?e instanceof Node||e instanceof ot(e).Node:!1}function Tt(e){return Sn()?e instanceof Element||e instanceof ot(e).Element:!1}function Qt(e){return Sn()?e instanceof HTMLElement||e instanceof ot(e).HTMLElement:!1}function Pc(e){return!Sn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ot(e).ShadowRoot}function kr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Et(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function Dc(e){return/^(table|td|th)$/.test(ja(e))}function Dr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var gx=/transform|translate|scale|rotate|perspective|filter/,xx=/paint|layout|strict|content/,Xa=e=>!!e&&e!=="none",is;function yn(e){let t=Tt(e)?Et(e):e;return Xa(t.transform)||Xa(t.translate)||Xa(t.scale)||Xa(t.rotate)||Xa(t.perspective)||!Rn()&&(Xa(t.backdropFilter)||Xa(t.filter))||gx.test(t.willChange||"")||xx.test(t.contain||"")}function Mc(e){let t=pa(e);for(;Qt(t)&&!To(t);){if(yn(t))return t;if(Dr(t))return null;t=pa(t)}return null}function Rn(){return is==null&&(is=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),is}function To(e){return/^(html|body|#document)$/.test(ja(e))}function Et(e){return ot(e).getComputedStyle(e)}function Mr(e){return Tt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pa(e){if(ja(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Pc(e)&&e.host||Gt(e);return Pc(t)?t.host:t}function Ac(e){let t=pa(e);return To(t)?(e.ownerDocument||e).body:Qt(t)&&kr(t)?t:Ac(t)}function Ka(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=Ac(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=ot(r);if(n){let s=Pn(l);return t.concat(l,l.visualViewport||[],kr(r)?r:[],s&&a?Ka(s):[])}else return t.concat(r,Ka(r,[],a))}function Pn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Oc(e){let t=Et(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Qt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Rr(a)!==n||Rr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function ds(e){return Tt(e)?e:e.contextElement}function Eo(e){let t=ds(e);if(!Qt(t))return Vt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Oc(t),l=(n?Rr(a.width):a.width)/o,s=(n?Rr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var Lx=Vt(0);function Bc(e){let t=ot(e);return!Rn()||!t.visualViewport?Lx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Cx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===ot(e)}function $a(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=ds(e),l=Vt(1);t&&(o?Tt(o)&&(l=Eo(o)):l=Eo(e));let s=Cx(n,a,o)?Bc(n):Vt(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=ot(n),p=Tt(o)?ot(o):o,g=f,h=Pn(g);for(;h&&p!==g;){let m=Eo(h),x=h.getBoundingClientRect(),C=Et(h),L=x.left+(h.clientLeft+parseFloat(C.paddingLeft))*m.x,I=x.top+(h.clientTop+parseFloat(C.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=L,u+=I,g=ot(h),h=Pn(g)}}return za({width:c,height:d,x:i,y:u})}function kn(e,t){let a=Mr(e).scrollLeft;return t?t.left+a:$a(Gt(e)).left+a}function Fc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-kn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Ix(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Gt(o),s=t?Dr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Vt(1),c=Vt(0),d=Qt(o);if((d||!n)&&((ja(o)!=="body"||kr(l))&&(i=Mr(o)),d)){let p=$a(o);u=Eo(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=l&&!d&&!n?Fc(l,i):Vt(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function vx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function bx(e){let t=Mr(e),a=e.ownerDocument.body,o=Mt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Mt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+kn(e),l=-t.scrollTop;return Et(a).direction==="rtl"&&(n+=Mt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var wx=25;function Sx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=ot(e),n=Gt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Rn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(kn(n)<=0){let f=n.ownerDocument,p=f.body,g=getComputedStyle(p),h=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(n.clientWidth-p.clientWidth-h),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=wx&&(s-=x)}return{width:s,height:i,x:u,y:c}}function yx(e,t){let a=$a(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Eo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function Tc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Sx(e,a,t);else if(t==="document")o=bx(Gt(e));else if(Tt(t))o=yx(t,a);else{let r=Bc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return za(o)}function Rx(e,t){let a=t.get(e);if(a)return a;let o=Ka(e,[],!1).filter(s=>Tt(s)&&ja(s)!=="body"),r=null,n=Et(e).position==="fixed",l=n?pa(e):e;for(;Tt(l)&&!To(l);){let s=Et(l),i=yn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=pa(l)}return t.set(e,o),o}function Px(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?Dr(t)?[]:Rx(t,this._c):[].concat(a),o],s=Tc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let p=Tc(t,l[f],r);i=Mt(p.top,i),u=qt(p.right,u),c=qt(p.bottom,c),d=Mt(p.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function kx(e){let{width:t,height:a}=Oc(e);return{width:t,height:a}}function Dx(e,t,a){let o=Qt(t),r=Gt(t),n=a==="fixed",l=$a(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Vt(0);if((o||!n)&&((ja(t)!=="body"||kr(r))&&(s=Mr(t)),o)){let f=$a(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=kn(r));let u=r&&!o&&!n?Fc(r,s):Vt(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function us(e){return Et(e).position==="static"}function Ec(e,t){if(!Qt(e)||Et(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Gt(e)===a&&(a=a.ownerDocument.body),a}function Nc(e,t){let a=ot(e);if(Dr(e))return a;if(!Qt(e)){let r=pa(e);for(;r&&!To(r);){if(Tt(r)&&!us(r))return r;r=pa(r)}return a}let o=Ec(e,t);for(;o&&Dc(o)&&us(o);)o=Ec(o,t);return o&&To(o)&&us(o)&&!yn(o)?a:o||Mc(e)||a}var Mx=async function(e){let t=this.getOffsetParent||Nc,a=this.getDimensions,o=await a(e.floating);return{reference:Dx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ax(e){return Et(e).direction==="rtl"}var _c={convertOffsetParentRelativeRectToViewportRelativeRect:Ix,getDocumentElement:Gt,getClippingRect:Px,getOffsetParent:Nc,getElementRects:Mx,getClientRects:vx,getDimensions:kx,getScale:Eo,isElement:Tt,isRTL:Ax};function Hc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Tx(e,t,a){let o=null,r,n=Gt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:p,top:g,width:h,height:m}=f;if(c||t(),!h||!m)return;let x=Pr(g),C=Pr(n.clientWidth-(p+h)),L=Pr(n.clientHeight-(g+m)),I=Pr(p),v={rootMargin:-x+"px "+-C+"px "+-L+"px "+-I+"px",threshold:Mt(0,qt(1,d))||1},w=!0;function D(S){let R=S[0].intersectionRatio;if(!Hc(f,e.getBoundingClientRect()))return s();if(R!==d){if(!w)return s();R?s(!1,R):r=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{o=new IntersectionObserver(D,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(D,v)}o.observe(e)}let i=ot(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function cs(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=ds(e),c=r||n?[...u?Ka(u):[],...t?Ka(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?Tx(u,a,n):null,f=-1,p=null;l&&(p=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=p)==null||L.observe(t)})),a()}),u&&!i&&p.observe(u),t&&p.observe(t));let g,h=i?$a(e):null;i&&m();function m(){let x=$a(e);h&&!Hc(h,x)&&a(),h=x,g=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=p)==null||x.disconnect(),p=null,i&&cancelAnimationFrame(g)}}var Uc=wc;var qc=Sc,Vc=Ic,Wc=Rc,Gc=vc,fs=Cc;var zc=yc,ps=(e,t,a)=>{let o=new Map,r=a??{},n={..._c,...r.platform,_c:o};return Lc(e,t,{...r,platform:n})};var Oe=j(require("react"),1),Kc=require("react"),jc=j(require("react-dom"),1),Ex=typeof document<"u",Ox=function(){},Dn=Ex?Kc.useLayoutEffect:Ox;function Mn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Mn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Mn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function $c(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Xc(e,t){let a=$c(e);return Math.round(t*a)/a}function ms(e){let t=Oe.useRef(e);return Dn(()=>{t.current=e}),t}function Yc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=Oe.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=Oe.useState(o);Mn(f,o)||p(o);let[g,h]=Oe.useState(null),[m,x]=Oe.useState(null),C=Oe.useCallback(N=>{N!==v.current&&(v.current=N,h(N))},[]),L=Oe.useCallback(N=>{N!==w.current&&(w.current=N,x(N))},[]),I=n||g,y=l||m,v=Oe.useRef(null),w=Oe.useRef(null),D=Oe.useRef(c),S=i!=null,R=ms(i),P=ms(r),E=ms(u),_=Oe.useCallback(()=>{if(!v.current||!w.current)return;let N={placement:t,strategy:a,middleware:f};P.current&&(N.platform=P.current),ps(v.current,w.current,N).then(X=>{let V={...X,isPositioned:E.current!==!1};U.current&&!Mn(D.current,V)&&(D.current=V,jc.flushSync(()=>{d(V)}))})},[f,t,a,P,E]);Dn(()=>{u===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,d(N=>({...N,isPositioned:!1})))},[u]);let U=Oe.useRef(!1);Dn(()=>(U.current=!0,()=>{U.current=!1}),[]),Dn(()=>{if(I&&(v.current=I),y&&(w.current=y),I&&y){if(R.current)return R.current(I,y,_);_()}},[I,y,_,R,S]);let z=Oe.useMemo(()=>({reference:v,floating:w,setReference:C,setFloating:L}),[C,L]),W=Oe.useMemo(()=>({reference:I,floating:y}),[I,y]),A=Oe.useMemo(()=>{let N={position:a,left:0,top:0};if(!W.floating)return N;let X=Xc(W.floating,c.x),V=Xc(W.floating,c.y);return s?{...N,transform:"translate("+X+"px, "+V+"px)",...$c(W.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:X,top:V}},[a,s,W.floating,c.x,c.y]);return Oe.useMemo(()=>({...c,update:_,refs:z,elements:W,floatingStyles:A}),[c,_,z,W,A])}var Bx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?fs({element:o.current,padding:r}).fn(a):{}:o?fs({element:o,padding:r}).fn(a):{}}}},Zc=(e,t)=>{let a=Uc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Jc=(e,t)=>{let a=qc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Qc=(e,t)=>({fn:zc(e).fn,options:[e,t]}),ef=(e,t)=>{let a=Vc(e);return{name:a.name,fn:a.fn,options:[e,t]}},tf=(e,t)=>{let a=Wc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var af=(e,t)=>{let a=Gc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var of=(e,t)=>{let a=Bx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var rf=j(require("react"),1);var Fx=Object.defineProperty,Nx=(e,t)=>Fx(e,"name",{value:t,configurable:!0});function hs(e){let[t,a]=rf.useState(void 0);return le(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,i;if("borderBoxSize"in l){let u=l.borderBoxSize,c=Array.isArray(u)?u[0]:u;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;a({width:s,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}Nx(hs,"useSize");var Oo=require("react/jsx-runtime"),_x=Object.defineProperty,ma=(e,t)=>_x(e,"name",{value:t,configurable:!0});var nf={Partial:"partial",Always:"always"},lf={Optimized:"optimized",Always:"always"},sf="Popper",[uf,Bo]=Xe(sf),[Hx,df]=uf(sf),An=ma(e=>{let{__scopePopper:t,children:a}=e,[o,r]=Qe.useState(null),[n,l]=Qe.useState(void 0);return(0,Oo.jsx)(Hx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Ux="PopperAnchor",Tn=Qe.forwardRef(ma(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=df(Ux,o),s=Qe.useRef(null),i=l.onAnchorChange,u=Qe.useCallback(h=>{s.current=h,h&&i(h)},[i]),c=J(a,u),d=Qe.useRef(null);Qe.useEffect(()=>{if(!r)return;let h=d.current;d.current=r.current,h!==d.current&&i(d.current)});let f=l.placementState&&On(l.placementState),p=f?.[0],g=f?.[1];return r?null:(0,Oo.jsx)(te.div,{"data-radix-popper-side":p,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),cf="PopperContent",[qx,Ww]=uf(cf),En=Qe.forwardRef(ma(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=nf.Partial,hideWhenDetached:p=!1,updatePositionStrategy:g=lf.Optimized,onPlaced:h,...m}=t,x=df(cf,o),[C,L]=Qe.useState(null),I=J(a,L),[y,v]=Qe.useState(null),w=hs(y),D=w?.width??0,S=w?.height??0,R=r+(l!=="center"?"-"+l:""),P=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},E=Array.isArray(c)?c:[c],_=E.length>0,U={padding:P,boundary:E.filter(ff),altBoundary:_},{refs:z,floatingStyles:W,placement:A,isPositioned:N,middlewareData:X}=Yc({strategy:"fixed",placement:R,whileElementsMounted:ma((...pe)=>cs(...pe,{animationFrame:g===lf.Always}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Zc({mainAxis:n+S,alignmentAxis:s}),u&&Jc({mainAxis:!0,crossAxis:!1,...f===nf.Partial?{limiter:Qc()}:{},...U}),u&&ef({...U}),tf({...U,apply:ma(({elements:pe,rects:F,availableWidth:ue,availableHeight:oe})=>{let{width:b,height:M}=F.reference,T=pe.floating.style;T.setProperty("--radix-popper-available-width",`${ue}px`),T.setProperty("--radix-popper-available-height",`${oe}px`),T.setProperty("--radix-popper-anchor-width",`${b}px`),T.setProperty("--radix-popper-anchor-height",`${M}px`)},"apply")}),y&&of({element:y,padding:i}),Vx({arrowWidth:D,arrowHeight:S}),p&&af(_?{strategy:"referenceHidden",...U}:{strategy:"referenceHidden",padding:U.padding,altBoundary:U.altBoundary})]}),V=x.setPlacementState;le(()=>(V(A),()=>{V(void 0)}),[A,V]);let[ae,Z]=On(A),Q=He(h);le(()=>{N&&Q?.()},[N,Q]);let Ae=X.arrow?.x,Ie=X.arrow?.y,B=X.arrow?.centerOffset!==0,[ce,fe]=Qe.useState();return le(()=>{C&&fe(window.getComputedStyle(C).zIndex)},[C]),(0,Oo.jsx)("div",{ref:z.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:N?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[X.transformOrigin?.x,X.transformOrigin?.y].join(" "),...X.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Oo.jsx)(qx,{scope:o,placedSide:ae,placedAlign:Z,onArrowChange:v,arrowX:Ae,arrowY:Ie,shouldHideArrow:B,children:(0,Oo.jsx)(te.div,{"data-side":ae,"data-align":Z,...m,ref:I,style:{...m.style,animation:N?m.style?.animation:"none"}})})})},"PopperContent"));function ff(e){return e!==null}ma(ff,"isNotNull");var Vx=ma(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=On(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,p=(r.arrow?.y??0)+i/2,g="",h="";return u==="bottom"?(g=l?d:`${f}px`,h=`${-i}px`):u==="top"?(g=l?d:`${f}px`,h=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,h=l?d:`${p}px`):u==="left"&&(g=`${o.floating.width+i}px`,h=l?d:`${p}px`),{data:{x:g,y:h}}}}),"transformOrigin");function On(e){let[t,a="center"]=e.split("-");return[t,a]}ma(On,"getSideAndAlignFromPlacement");var Ve=j(require("react"),1);var Gx=j(require("react"),1),Bn=j(require("react"),1),Wx=Object.defineProperty,xs=(e,t)=>Wx(e,"name",{value:t,configurable:!0}),gs=!1;function mf(){let[e,t]=Bn.useState(gs);return Bn.useEffect(()=>{gs||(gs=!0,t(!0))},[]),e}xs(mf,"useIsHydrated");var hf=Gx[" useSyncExternalStore ".trim().toString()];function gf(){return()=>{}}xs(gf,"subscribe");function xf(){return hf(gf,()=>!0,()=>!1)}xs(xf,"useIsHydratedModern");var Lf=typeof hf=="function"?xf:mf;var ha=require("react/jsx-runtime"),zx=Object.defineProperty,Ya=(e,t)=>zx(e,"name",{value:t,configurable:!0}),Ls="rovingFocusGroup.onEntryFocus",Xx={bubbles:!1,cancelable:!0},Fn="RovingFocusGroup",[Cs,If,Kx]=Va(Fn),[jx,Is]=Xe(Fn,[Kx]),Cf={Vertical:"vertical",Horizontal:"horizontal"},$x={LTR:"ltr",RTL:"rtl"},[Yx,Zx]=jx(Fn),vf=Ve.forwardRef(Ya(function(t,a){return(0,ha.jsx)(Cs.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,ha.jsx)(Cs.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,ha.jsx)(Jx,{...t,ref:a})})})},"RovingFocusGroup")),Jx=Ve.forwardRef(Ya(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,p=Ve.useRef(null),g=J(a,p),h=Wa(l),[m,x]=Ht({prop:s,defaultProp:i??null,onChange:u,caller:Fn}),[C,L]=Ve.useState(!1),I=He(c),y=If(o),v=Ve.useRef(!1),[w,D]=Ve.useState(0);return Ve.useEffect(()=>{let S=p.current;if(S)return S.addEventListener(Ls,I),()=>S.removeEventListener(Ls,I)},[I]),(0,ha.jsx)(Yx,{scope:o,orientation:r,dir:h,loop:n,currentTabStopId:m,onItemFocus:Ve.useCallback(S=>x(S),[x]),onItemShiftTab:Ve.useCallback(()=>L(!0),[]),onFocusableItemAdd:Ve.useCallback(()=>D(S=>S+1),[]),onFocusableItemRemove:Ve.useCallback(()=>D(S=>S-1),[]),children:(0,ha.jsx)(te.div,{tabIndex:C||w===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:K(t.onMouseDown,()=>{v.current=!0}),onFocus:K(t.onFocus,S=>{let R=!v.current;if(S.target===S.currentTarget&&R&&!C){let P=new CustomEvent(Ls,Xx);if(S.currentTarget.dispatchEvent(P),!P.defaultPrevented){let E=y().filter(A=>A.focusable),_=E.find(A=>A.active),U=E.find(A=>A.id===m),W=[_,U,...E].filter(Boolean).map(A=>A.ref.current);vs(W,d)}}v.current=!1}),onBlur:K(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),Qx="RovingFocusGroupItem",bf=Ve.forwardRef(Ya(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=pt(),c=l||u,d=Zx(Qx,o),f=d.currentTabStopId===c,p=If(o),{onFocusableItemAdd:g,onFocusableItemRemove:h,currentTabStopId:m}=d,x=Lf();return le(()=>{if(!(!x||!r))return g(),()=>h()},[x,r,g,h]),Ve.useEffect(()=>{if(!(x||!r))return g(),()=>h()},[x,r,g,h]),(0,ha.jsx)(Cs.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,ha.jsx)(te.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:K(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:K(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:K(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=Sf(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let y=p().filter(v=>v.focusable).map(v=>v.ref.current);if(L==="last")y.reverse();else if(L==="prev"||L==="next"){L==="prev"&&y.reverse();let v=y.indexOf(C.currentTarget);y=d.loop?yf(y,v+1):y.slice(v+1)}setTimeout(()=>vs(y))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:m!=null}):s})})},"RovingFocusGroupItem")),eL={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function wf(e,t){return t!==$x.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ya(wf,"getDirectionAwareKey");function Sf(e,t,a){let o=wf(e.key,a);if(!(t===Cf.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===Cf.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return eL[o]}Ya(Sf,"getFocusIntent");function vs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ya(vs,"focusFirst");function yf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ya(yf,"wrapArray");var xe=require("react/jsx-runtime"),oL=Object.defineProperty,Ce=(e,t)=>oL(e,"name",{value:t,configurable:!0});var bs=["Enter"," "],rL=["ArrowDown","PageUp","Home"],Pf=["ArrowUp","PageDown","End"],nL=[...rL,...Pf],CS={ltr:[...bs,"ArrowRight"],rtl:[...bs,"ArrowLeft"]};var _n="Menu",[ws,lL,sL]=Va(_n),[Za,ys]=Xe(_n,[sL,Bo,Is]),Rs=Bo(),kf=Is(),[iL,Ar]=Za(_n),[uL,Ps]=Za(_n),Df=Ce(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Rs(t),[i,u]=Y.useState(null),c=Y.useRef(!1),d=He(n),f=Wa(r);return Y.useEffect(()=>{let p=Ce(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=Ce(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),Y.useEffect(()=>{if(!a)return;let p=Ce(()=>d(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,d]),(0,xe.jsx)(An,{...s,children:(0,xe.jsx)(iL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,xe.jsx)(uL,{scope:t,onClose:Y.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),Mf=Y.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t,n=Rs(o);return(0,xe.jsx)(Tn,{...n,...r,ref:a})},"MenuAnchor")),Af="MenuPortal",[dL,cL]=Za(Af,{forceMount:void 0}),Tf=Ce(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Ar(Af,t);return(0,xe.jsx)(dL,{scope:t,forceMount:a,children:(0,xe.jsx)(Zt,{present:a||n.open,children:(0,xe.jsx)(bo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ga="MenuContent",[fL,Ef]=Za(ga),Of=Y.forwardRef(Ce(function(t,a){let o=cL(ga,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Ar(ga,t.__scopeMenu),s=Ps(ga,t.__scopeMenu);return(0,xe.jsx)(ws.Provider,{scope:t.__scopeMenu,children:(0,xe.jsx)(Zt,{present:r||l.open,children:(0,xe.jsx)(ws.Slot,{scope:t.__scopeMenu,children:s.modal?(0,xe.jsx)(pL,{...n,ref:a}):(0,xe.jsx)(mL,{...n,ref:a})})})})},"MenuContent")),pL=Y.forwardRef(Ce(function(t,a){let o=Ar(ga,t.__scopeMenu),r=Y.useRef(null),n=J(a,r);return Y.useEffect(()=>{let l=r.current;if(l)return Do(l)},[]),(0,xe.jsx)(Bf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:K(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),mL=Y.forwardRef(Ce(function(t,a){let o=Ar(ga,t.__scopeMenu);return(0,xe.jsx)(Bf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),hL=Ze("MenuContent.ScrollLock"),Bf=Y.forwardRef(Ce(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,disableOutsideScroll:h,...m}=t,x=Ar(ga,o),C=Ps(ga,o),L=Rs(o),I=kf(o),y=lL(o),[v,w]=Y.useState(null),D=Y.useRef(null),[S,R]=Y.useState(null);Al(S);let{nodes:P,registry:E}=Lr(),_=!!(n||h),U=J(a,D,x.onContentChange,R),z=Y.useRef(0),W=Y.useRef(""),A=Y.useRef(0),N=Y.useRef(null),X=Y.useRef("right"),V=Y.useRef(0),ae=Y.useMemo(()=>h?[D,...P.map(B=>({current:B}))]:[],[D,P,h]),Z=h?Ba:Y.Fragment,Q=h?{as:hL,allowPinchZoom:!0,shards:ae}:void 0,Ae=Ce(B=>{let ce=W.current+B,fe=y().filter(T=>!T.disabled),pe=document.activeElement,F=fe.find(T=>T.ref.current===pe)?.textValue,ue=fe.map(T=>T.textValue),oe=Wf(ue,ce,F),b=fe.find(T=>T.textValue===oe)?.ref.current;function M(T){W.current=T,window.clearTimeout(z.current),T!==""&&(z.current=window.setTimeout(()=>M(""),1e3))}Ce(M,"updateSearch"),M(ce),b&&setTimeout(()=>b.focus())},"handleTypeaheadSearch");Y.useEffect(()=>()=>window.clearTimeout(z.current),[]),ca();let Ie=Y.useCallback(B=>X.current===N.current?.side&&zf(B,N.current?.area),[]);return(0,xe.jsx)(fL,{scope:o,searchRef:W,onItemEnter:Y.useCallback(B=>{Ie(B)&&B.preventDefault()},[Ie]),onItemLeave:Y.useCallback(B=>{Ie(B)||(D.current?.focus(),w(null))},[Ie]),onTriggerLeave:Y.useCallback(B=>{Ie(B)&&B.preventDefault()},[Ie]),pointerGraceTimerRef:A,onPointerGraceIntentChange:Y.useCallback(B=>{N.current=B},[]),children:(0,xe.jsx)(xr,{registry:_?E:null,children:(0,xe.jsx)(Z,{...Q,children:(0,xe.jsx)(vo,{asChild:!0,trapped:n,branches:P,onMountAutoFocus:K(l,B=>{B.preventDefault(),D.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,xe.jsx)(Io,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,children:(0,xe.jsx)(vf,{asChild:!0,...I,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:v,onCurrentTabStopIdChange:w,onEntryFocus:K(u,B=>{C.isUsingKeyboardRef.current||B.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,xe.jsx)(En,{role:"menu","aria-orientation":"vertical","data-state":Hf(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...m,ref:U,style:{outline:"none",...m.style},onKeyDown:K(m.onKeyDown,B=>{let fe=B.target.closest("[data-radix-menu-content]")===B.currentTarget,pe=B.ctrlKey||B.altKey||B.metaKey,F=B.key.length===1;fe&&(B.key==="Tab"&&B.preventDefault(),!pe&&F&&Ae(B.key));let ue=D.current;if(B.target!==ue||!nL.includes(B.key))return;B.preventDefault();let b=y().filter(M=>!M.disabled).map(M=>M.ref.current);Pf.includes(B.key)&&b.reverse(),qf(b)}),onBlur:K(t.onBlur,B=>{B.currentTarget.contains(B.target)||(window.clearTimeout(z.current),W.current="")}),onPointerMove:K(t.onPointerMove,Nn(B=>{let ce=B.target,fe=V.current!==B.clientX;if(B.currentTarget.contains(ce)&&fe){let pe=B.clientX>V.current?"right":"left";X.current=pe,V.current=B.clientX}}))})})})})})})})},"MenuContentImpl"));var Ff=Y.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,xe.jsx)(te.div,{...r,ref:a})},"MenuLabel")),Ss="MenuItem",Rf="menu.itemSelect",Nf=Y.forwardRef(Ce(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Y.useRef(null),s=Ps(Ss,t.__scopeMenu),i=Ef(Ss,t.__scopeMenu),u=J(a,l),c=Y.useRef(!1),d=Ce(()=>{let f=l.current;if(!o&&f){let p=new CustomEvent(Rf,{bubbles:!0,cancelable:!0});f.addEventListener(Rf,g=>r?.(g),{once:!0}),hr(f,p),p.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,xe.jsx)(gL,{...n,ref:u,disabled:o,onClick:K(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:K(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:K(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||bs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),gL=Y.forwardRef(Ce(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Ef(Ss,o),i=kf(o),u=Y.useRef(null),c=J(a,u),[d,f]=Y.useState(!1),[p,g]=Y.useState("");return Y.useEffect(()=>{let h=u.current;h&&g((h.textContent??"").trim())},[l.children]),(0,xe.jsx)(ws.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,xe.jsx)(bf,{asChild:!0,...i,focusable:!r,children:(0,xe.jsx)(te.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:K(t.onPointerMove,Nn(h=>{r?s.onItemLeave(h):(s.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:K(t.onPointerLeave,Nn(h=>s.onItemLeave(h))),onFocus:K(t.onFocus,()=>f(!0)),onBlur:K(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var xL="MenuRadioGroup",[IS,vS]=Za(xL,{value:void 0,onValueChange:Ce(()=>{},"onValueChange")});var LL="MenuItemIndicator",[bS,wS]=Za(LL,{checked:!1});var _f=Y.forwardRef(Ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,xe.jsx)(te.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var CL="MenuSub",[SS,yS]=Za(CL);function Hf(e){return e?"open":"closed"}Ce(Hf,"getOpenState");function Uf(e){return e==="indeterminate"}Ce(Uf,"isIndeterminate");function IL(e){return Uf(e)?"indeterminate":e?"checked":"unchecked"}Ce(IL,"getCheckedState");function qf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Ce(qf,"focusFirst");function Vf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ce(Vf,"wrapArray");function Wf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Vf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Ce(Wf,"getNextMatch");function Gf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Ce(Gf,"isPointInPolygon");function zf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Gf(a,t)}Ce(zf,"isPointerInGraceArea");function Nn(e){return t=>t.pointerType==="mouse"?e(t):void 0}Ce(Nn,"whenMouse");var zt=require("react/jsx-runtime"),bL=Object.defineProperty,Ja=(e,t)=>bL(e,"name",{value:t,configurable:!0}),ks="DropdownMenu",[wL,VS]=Xe(ks,[ys]),Qa=ys(),[SL,Xf]=wL(ks),Kf=Ja(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Qa(t),u=Ot.useRef(null),[c,d]=Ht({prop:r,defaultProp:n??!1,onChange:l,caller:ks});return(0,zt.jsx)(SL,{scope:t,triggerId:pt(),triggerRef:u,contentId:pt(),open:c,onOpenChange:d,onOpenToggle:Ot.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,zt.jsx)(Df,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),yL="DropdownMenuTrigger",jf=Ot.forwardRef(Ja(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Xf(yL,o),s=Qa(o),i=J(a,l.triggerRef);return(0,zt.jsx)(Mf,{asChild:!0,...s,children:(0,zt.jsx)(te.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:K(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:K(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),$f=Ja(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Qa(t);return(0,zt.jsx)(Tf,{...o,...a})},"DropdownMenuPortal"),RL="DropdownMenuContent",Ds=Ot.forwardRef(Ja(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Xf(RL,o),l=Qa(o),s=Ot.useRef(!1);return(0,zt.jsx)(Of,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:K(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:K(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var Ms=Ot.forwardRef(Ja(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Qa(o);return(0,zt.jsx)(Ff,{...n,...r,ref:a})},"DropdownMenuLabel")),As=Ot.forwardRef(Ja(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Qa(o);return(0,zt.jsx)(Nf,{...n,...r,ref:a})},"DropdownMenuItem"));var Ts=Ot.forwardRef(Ja(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Qa(o);return(0,zt.jsx)(_f,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Fo=require("react/jsx-runtime"),No=Kf,_o=jf;var eo=Tr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Fo.jsx)($f,{children:(0,Fo.jsx)(Ds,{ref:o,sideOffset:t,className:ee("kanban-portal kanban-dropdown-content",e),...a})}));eo.displayName=Ds.displayName;var St=Tr.forwardRef(({className:e,inset:t,...a},o)=>(0,Fo.jsx)(As,{ref:o,className:ee("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));St.displayName=As.displayName;var kL=Tr.forwardRef(({className:e,inset:t,...a},o)=>(0,Fo.jsx)(Ms,{ref:o,className:ee("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));kL.displayName=Ms.displayName;var DL=Tr.forwardRef(({className:e,...t},a)=>(0,Fo.jsx)(Ts,{ref:a,className:ee("kanban-dropdown-separator",e),...t}));DL.displayName=Ts.displayName;var Yf=j(require("react"),1);var Zf=require("react/jsx-runtime"),ea=Yf.forwardRef(({className:e,type:t,...a},o)=>(0,Zf.jsx)("input",{type:t,className:ee("kanban-input",e),ref:o,...a}));ea.displayName="Input";var ep=j(require("react"),1);var Jf=j(require("react"),1);var Qf=require("react/jsx-runtime"),ML=Object.defineProperty,AL=(e,t)=>ML(e,"name",{value:t,configurable:!0}),Es=Jf.forwardRef(AL(function(t,a){return(0,Qf.jsx)(te.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var tp=require("react/jsx-runtime"),xa=ep.forwardRef(({className:e,...t},a)=>(0,tp.jsx)(Es,{ref:a,className:ee("kanban-label",e),...t}));xa.displayName=Es.displayName;var Ca=j(require("react"),1);var O=j(require("react"),1),Bs=j(require("react-dom"),1);var EL=Object.defineProperty,OL=(e,t)=>EL(e,"name",{value:t,configurable:!0});function Hn(e,[t,a]){return Math.min(a,Math.max(t,e))}OL(Hn,"clamp");var BL=j(require("react"),1);var FL=require("react/jsx-runtime");var ap=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var $=require("react/jsx-runtime"),NL=Object.defineProperty,ne=(e,t)=>NL(e,"name",{value:t,configurable:!0}),op={ItemAligned:"item-aligned",Popper:"popper"},_L={LTR:"ltr",RTL:"rtl"},HL=[" ","Enter","ArrowUp","ArrowDown"],UL=[" ","Enter"],Ho="Select",[qn,Vn,qL]=Va(Ho),[ao,Iy]=Xe(Ho,[qL,Bo]),Fs=Bo(),[VL,La]=ao(Ho),[WL,GL]=ao(Ho);function ip(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:p,form:g,internal_do_not_use_render:h}=e,m=Fs(t),[x,C]=O.useState(null),[L,I]=O.useState(null),[y,v]=O.useState(!1),w=Wa(u),[D,S]=Ht({prop:o,defaultProp:r??!1,onChange:n,caller:Ho}),[R,P]=Ht({prop:l,defaultProp:s,onChange:i,caller:Ho}),E=O.useRef(null),_=O.useRef(!1),[U,z]=O.useState(null),W=ne(B=>{z({value:B,hasConsumerStoppedPropagation:_.current}),P(B)},"handleUserSelect"),A=O.useRef(R);O.useEffect(()=>{let B=g?x?.ownerDocument.getElementById(g):x?.form;if(B instanceof HTMLFormElement){let ce=ne(()=>P(A.current),"reset");return B.addEventListener("reset",ce),()=>B.removeEventListener("reset",ce)}},[g,x,P]);let N=x?!!g||!!x.closest("form"):!0,[X,V]=O.useState(new Set),ae=pt(),Z=Array.from(X).map(B=>B.props.value).join(";"),Q=O.useCallback(B=>{V(ce=>new Set(ce).add(B))},[]),Ae=O.useCallback(B=>{V(ce=>{let fe=new Set(ce);return fe.delete(B),fe})},[]),Ie={required:p,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:I,valueNodeHasChildren:y,onValueNodeHasChildrenChange:v,contentId:ae,value:R,onValueChange:P,hasConsumerStoppedPropagationRef:_,userSelection:U,onUserSelect:W,open:D,onOpenChange:S,dir:w,triggerPointerDownPosRef:E,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:X,nativeSelectKey:Z,isFormControl:N};return(0,$.jsx)(An,{...m,children:(0,$.jsx)(VL,{scope:t,...Ie,children:(0,$.jsx)(qn.Provider,{scope:t,children:(0,$.jsx)(WL,{scope:t,onNativeOptionAdd:Q,onNativeOptionRemove:Ae,children:Cp(h)?h(Ie):a})})})})}ne(ip,"SelectProvider");var up=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,$.jsx)(ip,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,$.jsxs)($.Fragment,{children:[a,r?(0,$.jsx)(sC,{__scopeSelect:t}):null]})})},"Select"),zL="SelectTrigger",Ns=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Fs(o),s=La(zL,o),i=s.disabled||r,u=J(a,s.onTriggerChange),c=Vn(o),d=O.useRef("touch"),[f,p,g]=zs(m=>{let x=c().filter(I=>!I.disabled),C=x.find(I=>I.value===s.value),L=Xs(x,m,C);L!==void 0&&s.onUserSelect(L.value)}),h=ne(m=>{i||(s.onOpenChange(!0),g()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,$.jsx)(Tn,{asChild:!0,...l,children:(0,$.jsx)(te.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Er(s.value)?"":void 0,...n,ref:u,onClick:K(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&h(m)}),onPointerDown:K(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(h(m),m.preventDefault())}),onKeyDown:K(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=m.isPropagationStopped(),p(m.key)),!(x&&m.key===" ")&&HL.includes(m.key)&&(h(),m.preventDefault())})})})},"SelectTrigger")),XL="SelectValue",dp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=La(XL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=J(a,u.onValueNodeChange);le(()=>{c(d)},[c,d]);let p=Er(u.value);return(0,$.jsx)(te.span,{...i,asChild:p?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,$.jsx)(O.Fragment,{children:p?s:l},p?"placeholder":"value")})},"SelectValue")),cp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,$.jsx)(te.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),KL="SelectPortal",[jL,$L]=ao(KL,{forceMount:void 0}),fp=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,$.jsx)(jL,{scope:e.__scopeSelect,forceMount:a,children:(0,$.jsx)(bo,{asChild:!0,...o})})},"SelectPortal"),to="SelectContent",_s=O.forwardRef(ne(function(t,a){let o=$L(to,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=La(to,t.__scopeSelect),[s,i]=O.useState();return le(()=>{i(new DocumentFragment)},[]),(0,$.jsx)(Zt,{present:r||l.open,children:({present:u})=>u?(0,$.jsx)(JL,{...n,ref:a}):(0,$.jsx)(YL,{...n,fragment:s})})},"SelectContent")),YL=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Bs.createPortal((0,$.jsx)(pp,{scope:o,children:(0,$.jsx)(qn.Slot,{scope:o,children:(0,$.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Bt=10,[pp,oo]=ao(to),ZL=Ze("SelectContent.RemoveScroll"),JL=O.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r=op.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:h,hideWhenDetached:m,avoidCollisions:x,...C}=t,L=La(to,o),[I,y]=O.useState(null),[v,w]=O.useState(null),D=J(a,y),[S,R]=O.useState(null),[P,E]=O.useState(null),_=Vn(o),[U,z]=O.useState(!1),W=O.useRef(!1),A=O.useRef(!1),N=O.useRef(!1);O.useEffect(()=>{if(I)return Do(I)},[I]),ca();let X=O.useCallback(F=>{let[ue,...oe]=_().map(T=>T.ref.current),[b]=oe.slice(-1),M=document.activeElement;for(let T of F)if(T===M||(T?.scrollIntoView({block:"nearest"}),T===ue&&v&&(v.scrollTop=0),T===b&&v&&(v.scrollTop=v.scrollHeight),T?.focus(),document.activeElement!==M))return},[_,v]),V=O.useCallback(()=>X([S,I]),[X,S,I]);O.useEffect(()=>{U&&V()},[U,V]);let{onOpenChange:ae,triggerPointerDownPosRef:Z}=L;O.useEffect(()=>{if(I){let F={x:0,y:0},ue=ne(b=>{F={x:Math.abs(Math.round(b.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(b.pageY)-(Z.current?.y??0))}},"handlePointerMove"),oe=ne(b=>{F.x<=10&&F.y<=10?b.preventDefault():b.composedPath().includes(I)||ae(!1),document.removeEventListener("pointermove",ue),Z.current=null},"handlePointerUp");return Z.current!==null&&(document.addEventListener("pointermove",ue),document.addEventListener("pointerup",oe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",oe,{capture:!0})}}},[I,ae,Z]),O.useEffect(()=>{let F=ne(()=>ae(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[ae]);let[Q,Ae]=zs(F=>{let ue=_().filter(M=>!M.disabled),oe=ue.find(M=>M.ref.current===document.activeElement),b=Xs(ue,F,oe);b&&setTimeout(()=>b.ref.current?.focus())}),Ie=O.useCallback((F,ue,oe)=>{let b=!A.current;b&&(A.current=!0);let M=!W.current&&!oe;L.value!==void 0&&L.value===ue||M?(R(F),M&&(W.current=!0)):b&&R(F)},[L.value]),B=O.useCallback(()=>I?.focus(),[I]),ce=O.useCallback((F,ue,oe)=>{if(!F)return;let b=!N.current;b&&(N.current=!0);let M=!W.current&&!oe;(L.value!==void 0&&L.value===ue||M||b)&&E(F)},[L.value]),fe=r===op.Popper?rp:QL,pe=fe===rp?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:h,hideWhenDetached:m,avoidCollisions:x}:{};return(0,$.jsx)(pp,{scope:o,content:I,viewport:v,onViewportChange:w,itemRefCallback:Ie,selectedItem:S,onItemLeave:B,itemTextRefCallback:ce,focusSelectedItem:V,selectedItemText:P,position:r,isPositioned:U,searchRef:Q,children:(0,$.jsx)(Ba,{as:ZL,allowPinchZoom:!0,children:(0,$.jsx)(vo,{asChild:!0,trapped:L.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:K(n,F=>{L.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,$.jsx)(Io,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,$.jsx)(fe,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:F=>F.preventDefault(),...C,...pe,onPlaced:()=>z(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:K(C.onKeyDown,F=>{let ue=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!ue&&F.key.length===1&&Ae(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let b=_().filter(M=>!M.disabled).map(M=>M.ref.current);if(["ArrowUp","End"].includes(F.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let M=F.target,T=b.indexOf(M);b=b.slice(T+1)}setTimeout(()=>X(b)),F.preventDefault()}})})})})})})},"SelectContentImpl")),QL=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=La(to,o),s=oo(to,o),[i,u]=O.useState(null),[c,d]=O.useState(null),f=J(a,d),p=Vn(o),g=O.useRef(!1),h=O.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=s,I=O.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&m&&x&&C){let D=l.trigger.getBoundingClientRect(),S=c.getBoundingClientRect(),R=l.valueNode.getBoundingClientRect(),P=C.getBoundingClientRect();if(l.dir!==_L.RTL){let oe=P.left-S.left,b=R.left-oe,M=D.left-b,T=D.width+M,G=Math.max(T,S.width),Re=window.innerWidth-Bt,se=Hn(b,[Bt,Math.max(Bt,Re-G)]);i.style.minWidth=T+"px",i.style.left=se+"px"}else{let oe=S.right-P.right,b=window.innerWidth-R.right-oe,M=window.innerWidth-D.right-b,T=D.width+M,G=Math.max(T,S.width),Re=window.innerWidth-Bt,se=Hn(b,[Bt,Math.max(Bt,Re-G)]);i.style.minWidth=T+"px",i.style.right=se+"px"}let E=p(),_=window.innerHeight-Bt*2,U=m.scrollHeight,z=window.getComputedStyle(c),W=parseInt(z.borderTopWidth,10),A=parseInt(z.paddingTop,10),N=parseInt(z.borderBottomWidth,10),X=parseInt(z.paddingBottom,10),V=W+A+U+X+N,ae=Math.min(x.offsetHeight*5,V),Z=window.getComputedStyle(m),Q=parseInt(Z.paddingTop,10),Ae=parseInt(Z.paddingBottom,10),Ie=D.top+D.height/2-Bt,B=_-Ie,ce=x.offsetHeight/2,fe=x.offsetTop+ce,pe=W+A+fe,F=V-pe;if(pe<=Ie){let oe=E.length>0&&x===E[E.length-1].ref.current;i.style.bottom="0px";let b=c.clientHeight-m.offsetTop-m.offsetHeight,M=Math.max(B,ce+(oe?Ae:0)+b+N),T=pe+M;i.style.height=T+"px"}else{let oe=E.length>0&&x===E[0].ref.current;i.style.top="0px";let M=Math.max(Ie,W+m.offsetTop+(oe?Q:0)+ce)+F;i.style.height=M+"px",m.scrollTop=pe-Ie+m.offsetTop}i.style.margin=`${Bt}px 0`,i.style.minHeight=ae+"px",i.style.maxHeight=_+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[p,l.trigger,l.valueNode,i,c,m,x,C,l.dir,r]);le(()=>I(),[I]);let[y,v]=O.useState();le(()=>{c&&v(window.getComputedStyle(c).zIndex)},[c]);let w=O.useCallback(D=>{D&&h.current===!0&&(I(),L?.(),h.current=!1)},[I,L]);return(0,$.jsx)(eC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:w,children:(0,$.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:(0,$.jsx)(te.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),rp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Bt,...l}=t,s=Fs(o);return(0,$.jsx)(En,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[eC,Hs]=ao(to,{}),np="SelectViewport",mp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=oo(np,o),s=Hs(np,o),i=J(a,l.onViewportChange),u=O.useRef(0);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,$.jsx)(qn.Slot,{scope:o,children:(0,$.jsx)(te.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:K(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let h=window.innerHeight-Bt*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(m,x);if(C<h){let L=C+g,I=Math.min(h,L),y=L-I;f.style.height=I+"px",f.style.bottom==="0px"&&(d.scrollTop=y>0?y:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),tC="SelectGroup",[vy,aC]=ao(tC);var oC="SelectLabel",Us=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=aC(oC,o);return(0,$.jsx)(te.div,{id:n.id,...r,ref:a})},"SelectLabel")),Os="SelectItem",[rC,hp]=ao(Os),qs=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=La(Os,o),u=oo(Os,o),c=i.value===r,[d,f]=O.useState(l??""),[p,g]=O.useState(!1),h=He(I=>u.itemRefCallback?.(I,r,n)),m=J(a,h),x=pt(),C=O.useRef("touch");function L(I){i.hasConsumerStoppedPropagationRef.current=I.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return ne(L,"handleSelect"),(0,$.jsx)(rC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:O.useCallback(I=>{f(y=>y||(I?.textContent??"").trim())},[]),children:(0,$.jsx)(qn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,$.jsx)(te.div,{role:"option","aria-labelledby":x,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:m,onFocus:K(s.onFocus,()=>g(!0)),onBlur:K(s.onBlur,()=>g(!1)),onClick:K(s.onClick,I=>{n||C.current!=="mouse"&&L(I)}),onPointerUp:K(s.onPointerUp,I=>{n||C.current==="mouse"&&L(I)}),onPointerDown:K(s.onPointerDown,I=>{C.current=I.pointerType}),onPointerMove:K(s.onPointerMove,I=>{C.current=I.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&I.currentTarget.focus({preventScroll:!0})}),onPointerLeave:K(s.onPointerLeave,I=>{I.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:K(s.onKeyDown,I=>{n||I.target!==I.currentTarget||u.searchRef?.current!==""&&I.key===" "||(UL.includes(I.key)&&L(I),I.key===" "&&I.preventDefault())})})})})},"SelectItem")),Un="SelectItemText",gp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=La(Un,o),i=oo(Un,o),u=hp(Un,o),c=GL(Un,o),[d,f]=O.useState(null),p=He(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),g=J(a,f,u.onItemTextChange,p),h=d?.textContent,m=O.useMemo(()=>(0,$.jsx)("option",{value:u.value,disabled:u.disabled,children:h},u.value),[u.disabled,u.value,h]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return le(()=>(x(m),()=>C(m)),[x,C,m]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(te.span,{id:u.textId,...l,ref:g}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Er(s.value)?Bs.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),nC="SelectItemIndicator",xp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return hp(nC,o).isSelected?(0,$.jsx)(te.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),lp="SelectScrollUpButton",Vs=O.forwardRef(ne(function(t,a){let o=oo(lp,t.__scopeSelect),r=Hs(lp,t.__scopeSelect),[n,l]=O.useState(!1),s=J(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,$.jsx)(Lp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),sp="SelectScrollDownButton",Ws=O.forwardRef(ne(function(t,a){let o=oo(sp,t.__scopeSelect),r=Hs(sp,t.__scopeSelect),[n,l]=O.useState(!1),s=J(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,$.jsx)(Lp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Lp=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=oo("SelectScrollButton",o),s=O.useRef(null),i=Vn(o),u=O.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return O.useEffect(()=>()=>u(),[u]),le(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,$.jsx)(te.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:K(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:K(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:K(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Gs=O.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,$.jsx)(te.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var lC="SelectBubbleInput",sC=O.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=La(lC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:g}=r,h=O.useRef(null),m=J(o,h),x=n??"",C=O.useRef(x),L=O.useRef(f),I=O.useRef(!1),y=Array.from(p).some(v=>(v.props.value??"")==="");return O.useEffect(()=>{let v=h.current;if(!v)return;let w=window.HTMLSelectElement.prototype,S=Object.getOwnPropertyDescriptor(w,"value").set,R=f!==null&&f!==L.current;L.current=f;let P=C.current!==x;C.current=x;let E=R&&P;if(R&&!P&&f.value!==x&&!f.hasConsumerStoppedPropagation&&S){I.current=!0;try{S.call(v,f.value),v.dispatchEvent(new Event("change",{bubbles:!0}))}finally{I.current=!1,S.call(v,x)}return}let _=E&&!f.hasConsumerStoppedPropagation;if(P&&S){let U=new Event("change",{bubbles:_});S.call(v,x),v.dispatchEvent(U)}},[x,f]),(0,$.jsxs)(te.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:v=>{I.current||l(v.target.value)},...a,style:{...ap,...a.style},ref:m,defaultValue:x,children:[Er(n)&&!y?(0,$.jsx)("option",{value:""}):null,Array.from(p)]},g)},"SelectBubbleInput"));function Cp(e){return typeof e=="function"}ne(Cp,"isFunction");function Er(e){return e===""||e===void 0}ne(Er,"shouldShowPlaceholder");function zs(e){let t=He(e),a=O.useRef(""),o=O.useRef(0),r=O.useCallback(l=>{let s=a.current+l;t(s);function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}ne(i,"updateSearch"),i(s)},[t]),n=O.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return O.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(zs,"useTypeaheadSearch");function Xs(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Ip(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(Xs,"findNextItem");function Ip(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Ip,"wrapArray");var Me=require("react/jsx-runtime"),Ks=up;var js=dp,Wn=Ca.forwardRef(({className:e,children:t,...a},o)=>(0,Me.jsxs)(Ns,{ref:o,className:ee("kanban-select-trigger",e),...a,children:[t,(0,Me.jsx)(cp,{asChild:!0,children:(0,Me.jsx)(go,{className:"kanban-select-icon"})})]}));Wn.displayName=Ns.displayName;var vp=Ca.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Vs,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Me.jsx)(ir,{className:"kanban-select-scroll-icon"})}));vp.displayName=Vs.displayName;var bp=Ca.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Ws,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Me.jsx)(go,{className:"kanban-select-scroll-icon"})}));bp.displayName=Ws.displayName;var Gn=Ca.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Me.jsx)(fp,{children:(0,Me.jsxs)(_s,{ref:r,className:ee("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Me.jsx)(vp,{}),(0,Me.jsx)(mp,{className:ee("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Me.jsx)(bp,{})]})}));Gn.displayName=_s.displayName;var uC=Ca.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Us,{ref:a,className:ee("kanban-select-label",e),...t}));uC.displayName=Us.displayName;var Uo=Ca.forwardRef(({className:e,children:t,...a},o)=>(0,Me.jsxs)(qs,{ref:o,className:ee("kanban-select-item",e),...a,children:[(0,Me.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Me.jsx)(xp,{children:(0,Me.jsx)(Pt,{className:"kanban-select-check"})})}),(0,Me.jsx)(gp,{children:t})]}));Uo.displayName=qs.displayName;var dC=Ca.forwardRef(({className:e,...t},a)=>(0,Me.jsx)(Gs,{ref:a,className:ee("kanban-select-separator",e),...t}));dC.displayName=Gs.displayName;var wp=j(require("react"),1);var Sp=require("react/jsx-runtime"),zn=wp.forwardRef(({className:e,...t},a)=>(0,Sp.jsx)("textarea",{className:ee("kanban-textarea",e),ref:a,...t}));zn.displayName="Textarea";var Ft={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},Xn=["high","medium","low"],yp="var(--dsw-alias-label-tertiary)";function Rp(e,t){return t?e.find(a=>a.name===t)?.color??yp:yp}var et=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),$s=e=>e==="high"||e==="medium"||e==="low"?Ft[e].label:"";function Pp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&$s(a.priority)||o;return et(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return et(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?et(t("actLabelSet"),{to:n}):r!=null&&n==null?et(t("actLabelCleared"),{from:r}):et(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?$s(r)||r:o,s=n?$s(n)||n:o;return r==null&&n!=null?et(t("actPrioritySet"),{to:s}):r!=null&&n==null?et(t("actPriorityCleared"),{from:l}):et(t("actPriority"),{from:l,to:s})}case"card_title_changed":return et(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return et(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return et(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return et(t("actColumnDeleted"),{column:a.column??""});case"label_added":return et(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return et(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return et(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return et(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Kn=e=>String(e).padStart(2,"0");function Or(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Kn(t.getMonth()+1)}-${Kn(t.getDate())} ${Kn(t.getHours())}:${Kn(t.getMinutes())}`}var ta=require("react/jsx-runtime");function kp({activities:e}){let t=qe();if(e.length===0)return(0,ta.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ta.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ta.jsxs)("li",{className:"kanban-activity-item",children:[(0,ta.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ta.jsxs)("p",{className:"kanban-activity-description",children:[(0,ta.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Pp(o,t)]}),(0,ta.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Or(o.ts),children:Or(o.ts)})]},o.id)})})}var H=require("react/jsx-runtime");function Dp({open:e,error:t,card:a,labels:o,comments:r,activities:n,onOpenChange:l,onSave:s,onAddComment:i,onDelete:u,onChatWithAgent:c}){let d=qe(),f=(0,tt.useId)(),p=(0,tt.useRef)(null),[g,h]=(0,tt.useState)({id:"",title:"",note:"",label:"",priority:""}),[m,x]=(0,tt.useState)(""),[C,L]=(0,tt.useState)(!1),I=(0,tt.useRef)(!1),[y,v]=(0,tt.useState)(""),[w,D]=(0,tt.useState)(null),S=(0,tt.useRef)(null),R=(0,tt.useRef)(g);(0,tt.useEffect)(()=>{if(e){let A={id:a?.id??"",title:a?.title??"",note:a?.note??"",label:a?.label??"",priority:a?.priority??""};R.current=A,h(A),x(""),v(""),D(null)}},[e,a]),(0,tt.useEffect)(()=>{w&&S.current?.focus()},[w]);let P=!!m.trim()||Object.keys(g).some(A=>g[A]!==R.current[A]),E=A=>{if(!I.current){if(!A&&w){D(null);return}if(!A&&P){D("discard");return}l(A)}},_=async A=>{if(I.current)return!1;I.current=!0,L(!0),v("");try{let N=await A();return N===!1&&v(d("actionRetry")),N!==!1}catch(N){return v(d("actionFailed")+String(N instanceof Error?N.message:N)),!1}finally{I.current=!1,L(!1)}},U=async A=>{if(m.trim()){D(A);return}await _(()=>c(g,A))&&l(!1)},z=A=>h(N=>({...N,...A})),W=async()=>{let A=m.trim();!a||!A||A.length>2e3||await _(()=>i(a.id,A))&&x("")};return(0,H.jsx)(Ao,{open:e,onOpenChange:E,children:(0,H.jsxs)(Na,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:()=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null},onCloseAutoFocus:A=>{p.current?.isConnected&&(A.preventDefault(),p.current.focus())},children:[(0,H.jsxs)(_a,{children:[(0,H.jsx)(qa,{children:d(a?"editCard":"addCard")}),a&&(0,H.jsxs)("span",{className:"kanban-field-id",children:[d("fieldId"),": ",a.id]})]}),(0,H.jsxs)(Ha,{className:"kanban-form-stack",children:[(t||y)&&(0,H.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||y}),(0,H.jsxs)("div",{className:"kanban-form-field",children:[(0,H.jsx)(xa,{htmlFor:`${f}-title`,className:"kanban-field-label",children:d("fieldTitle")}),(0,H.jsx)(ea,{id:`${f}-title`,value:g.title,placeholder:d("titlePlaceholder"),maxLength:120,disabled:C||!!w,onChange:A=>z({title:A.target.value})})]}),(0,H.jsxs)("div",{className:"kanban-form-row",children:[(0,H.jsxs)("div",{className:"kanban-form-field",children:[(0,H.jsx)(xa,{htmlFor:`${f}-label`,children:d("fieldLabel")}),(0,H.jsxs)(Ks,{disabled:C||!!w,value:g.label||"__none__",onValueChange:A=>z({label:A==="__none__"?"":A}),children:[(0,H.jsx)(Wn,{id:`${f}-label`,children:(0,H.jsx)(js,{placeholder:d("noLabel")})}),(0,H.jsxs)(Gn,{children:[(0,H.jsx)(Uo,{value:"__none__",children:d("noLabel")}),o.map(A=>(0,H.jsx)(Uo,{value:A.name,children:A.name},A.name))]})]})]}),(0,H.jsxs)("div",{className:"kanban-form-field",children:[(0,H.jsx)(xa,{htmlFor:`${f}-priority`,children:d("fieldPriority")}),(0,H.jsxs)(Ks,{disabled:C||!!w,value:g.priority||"__none__",onValueChange:A=>z({priority:A==="__none__"?"":A}),children:[(0,H.jsx)(Wn,{id:`${f}-priority`,children:(0,H.jsx)(js,{placeholder:d("noPriority")})}),(0,H.jsxs)(Gn,{children:[(0,H.jsx)(Uo,{value:"__none__",children:d("noPriority")}),Xn.map(A=>{let N=Ft[A];return(0,H.jsx)(Uo,{value:A,children:(0,H.jsxs)("span",{className:"kanban-inline-priority",children:[(0,H.jsx)("span",{className:"kanban-priority-dot",style:{background:N.color}}),N.label]})},A)})]})]})]})]}),(0,H.jsxs)("div",{className:"kanban-form-field",children:[(0,H.jsx)(xa,{htmlFor:`${f}-note`,children:d("fieldNote")}),(0,H.jsx)(zn,{id:`${f}-note`,value:g.note,placeholder:d("notePlaceholder"),rows:5,maxLength:2e3,disabled:C||!!w,onChange:A=>z({note:A.target.value})})]}),a&&(0,H.jsxs)("div",{className:"kanban-comments-box",children:[(0,H.jsxs)(xa,{htmlFor:`${f}-comment`,children:[d("commentsTitle")," ",(0,H.jsxs)("span",{className:"kanban-tabular",children:["(",r.length,")"]})]}),(0,H.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:r.length===0?(0,H.jsx)("p",{className:"kanban-muted-small",children:d("commentEmpty")}):(0,H.jsx)("ol",{className:"kanban-comment-list",children:r.map(A=>{let N=A.source==="agent";return(0,H.jsxs)("li",{className:"kanban-comment-item",children:[(0,H.jsxs)("div",{className:"kanban-comment-meta",children:[(0,H.jsx)("span",{className:`kanban-activity-actor ${N?"is-agent":"is-human"}`,children:d(N?"actorAgent":"actorHuman")}),(0,H.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:A.createdAt,children:Or(A.createdAt)})]}),(0,H.jsx)("p",{className:"kanban-comment-content",children:A.content})]},A.id)})})}),(0,H.jsxs)("div",{className:"kanban-comment-composer",children:[(0,H.jsx)(zn,{id:`${f}-comment`,value:m,placeholder:d("commentPlaceholder"),rows:3,maxLength:2e3,disabled:C||!!w,onChange:A=>x(A.target.value),onKeyDown:A=>{(A.metaKey||A.ctrlKey)&&A.key==="Enter"&&(A.preventDefault(),W())}}),(0,H.jsxs)(he,{type:"button",variant:"outline",disabled:C||!!w||!m.trim(),onClick:()=>{W()},children:[(0,H.jsx)(fr,{className:"kanban-icon"}),d("sendComment")]})]})]}),a&&(0,H.jsxs)("div",{className:"kanban-activity-box",children:[(0,H.jsx)(xa,{className:"kanban-muted-small",children:d("activityTitle")}),(0,H.jsx)("div",{className:"kanban-activity-scroll",children:(0,H.jsx)(kp,{activities:n})})]})]}),(0,H.jsx)(Ua,{children:w?(0,H.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,H.jsx)("p",{role:"alert",children:d(w==="discard"?"discardChangesDesc":w==="delete"?"deleteCardDesc":"discardCommentDesc")}),(0,H.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,H.jsx)(he,{ref:S,variant:"outline",disabled:C,onClick:()=>D(null),children:d("cancel")}),(0,H.jsx)(he,{variant:"destructive",disabled:C,onClick:async()=>{if(w==="discard"){l(!1);return}if(w==="delete"){a&&u&&await _(()=>u(a))&&l(!1);return}await _(()=>c(g,w))&&l(!1)},children:d(w==="discard"?"discardChanges":w==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,H.jsxs)(H.Fragment,{children:[a&&u&&(0,H.jsxs)(he,{variant:"ghost",className:"kanban-dialog-delete",disabled:C,onClick:()=>D("delete"),children:[(0,H.jsx)(It,{className:"kanban-icon"}),d("delete")]}),(0,H.jsxs)(No,{children:[(0,H.jsx)(_o,{asChild:!0,children:(0,H.jsxs)(he,{variant:"outline",disabled:C||!g.title.trim()&&!g.note.trim(),children:[(0,H.jsx)(Aa,{className:"kanban-icon"}),d("chatWithAgent")]})}),(0,H.jsxs)(eo,{align:"end",children:[(0,H.jsx)(St,{onClick:()=>{U("current")},children:d("chatCurrentSession")}),(0,H.jsx)(St,{onClick:()=>{U("new")},children:d("chatNewSession")})]})]}),(0,H.jsx)(he,{disabled:C||!g.title.trim(),onClick:async()=>{await _(()=>s(g))&&(R.current=g,m.trim()||l(!1))},children:d("save")})]})})]})})}var Ap=require("react");var Mp=require("react/jsx-runtime");function cC({variant:e,className:t}={}){return ee("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Ys({className:e,variant:t,...a}){return(0,Mp.jsx)("div",{className:cC({variant:t,className:e}),...a})}var ro=j(require("react"),1);var no=require("react/jsx-runtime"),Zs=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-card",e),...t}));Zs.displayName="Card";var fC=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-card-header",e),...t}));fC.displayName="CardHeader";var pC=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-ui-card-title",e),...t}));pC.displayName="CardTitle";var mC=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-card-description",e),...t}));mC.displayName="CardDescription";var Js=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-card-content",e),...t}));Js.displayName="CardContent";var hC=ro.forwardRef(({className:e,...t},a)=>(0,no.jsx)("div",{ref:a,className:ee("kanban-card-footer",e),...t}));hC.displayName="CardFooter";var je=require("react/jsx-runtime");function Qs({card:e,labels:t}){let a=qe(),o=e.priority?Ft[e.priority]:null,r=Rp(t,e.label);return(0,je.jsx)(Zs,{className:"kanban-card",children:(0,je.jsxs)(Js,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,je.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,je.jsxs)(Ys,{variant:"secondary",className:"kanban-card-badge",children:[(0,je.jsx)("span",{className:"kanban-label-dot",style:{background:r},"aria-hidden":"true"}),e.label]}),o&&(0,je.jsxs)(Ys,{variant:"secondary",className:"kanban-card-badge",children:[(0,je.jsx)("span",{className:"kanban-label-dot",style:{background:o.color},"aria-hidden":"true"}),o.label]})]}),(0,je.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,je.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,je.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,je.jsx)(Aa,{"aria-hidden":"true"}),(0,je.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function Tp({card:e,labels:t,onOpen:a}){let o=qe(),r=(0,Ap.useId)(),{attributes:n,listeners:l,setNodeRef:s,transform:i,transition:u,isDragging:c}=Qr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,je.jsxs)("div",{ref:s,style:{transform:dt.Transform.toString(i),transition:u},...n,...l,"aria-label":e.title,"aria-describedby":r,onKeyDown:d=>{d.key==="Enter"&&!c?(d.preventDefault(),a(e)):l?.onKeyDown?.(d)},onClick:d=>{d.currentTarget.focus(),a(e)},className:`kanban-sortable-card${c?" is-dragging":""}`,children:[(0,je.jsx)("span",{id:r,className:"kanban-sr-only",children:o("cardKeyboardHelp")}),(0,je.jsx)(Qs,{card:e,labels:t})]})}var gt=require("react/jsx-runtime");function Ep({column:e,cards:t,totalCount:a,filtered:o,labels:r,onAddCard:n,onOpenCard:l}){let{setNodeRef:s,isOver:i}=Kr({id:e.id,data:{type:"column"}}),{active:u,over:c}=nr(),d=qe(),f=u?.data.current?.type==="card"&&(i||c?.data.current?.columnId===e.id);return(0,gt.jsxs)("div",{ref:s,className:`kanban-column${f?" is-over":""}`,children:[(0,gt.jsxs)("div",{className:"kanban-column-header",children:[(0,gt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,gt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,gt.jsxs)("div",{className:"kanban-column-cards",children:[(0,gt.jsx)(Jr,{items:t.map(p=>p.id),strategy:Zr,children:t.map(p=>(0,gt.jsx)(Tp,{card:p,labels:r,onOpen:l},p.id))}),t.length===0&&(0,gt.jsx)("p",{className:"kanban-column-empty",children:d(o?"noMatchingCards":"emptyColumn")})]}),(0,gt.jsx)("div",{className:"kanban-column-footer",children:(0,gt.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>n(e),children:[(0,gt.jsx)(jt,{className:"kanban-icon"}),d("addCard")]})})]})}var yt=require("react");var de=require("react/jsx-runtime");function gC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:i,setNodeRef:u,transform:c,transition:d}=Qr({id:e.id,disabled:l}),f=qe();return(0,de.jsxs)("div",{ref:u,style:{transform:dt.Transform.toString(c),transition:d},className:"kanban-sortable-row",children:[(0,de.jsx)("button",{...s,...i,className:"kanban-drag-handle",disabled:l,"aria-label":`${f("dragSort")}: ${e.title}`,children:(0,de.jsx)(ur,{className:"kanban-icon"})}),(0,de.jsx)(ea,{"aria-label":`${f("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:p=>a(p.target.value),onBlur:o,onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,de.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${f("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,de.jsx)(It,{className:"kanban-icon"})})]})}function Op({open:e,error:t,columns:a,onOpenChange:o,onReorder:r,onRename:n,onDelete:l,onAdd:s}){let i=qe(),[u,c]=(0,yt.useState)({}),[d,f]=(0,yt.useState)(""),[p,g]=(0,yt.useState)(!1),h=(0,yt.useRef)(!1),[m,x]=(0,yt.useState)(""),[C,L]=(0,yt.useState)(null),I=(0,yt.useRef)(null),y=Vr(Da(mo,{activationConstraint:{distance:8}}),Da(sa,{coordinateGetter:en}));(0,yt.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(R=>[R.id,R.title]))),f(""),x(""),L(null))},[e]),(0,yt.useEffect)(()=>{C&&I.current?.focus()},[C]);let v=async R=>{if(h.current)return!1;h.current=!0,g(!0),x("");try{let P=await R();return P===!1&&x(i("actionRetry")),P!==!1}catch(P){return x(i("actionFailed")+String(P instanceof Error?P.message:P)),!1}finally{h.current=!1,g(!1)}},w=async()=>{let R=d.trim();R&&await v(()=>s(R))&&f("")},D=R=>{let P=(u[R]??"").trim(),E=a.find(_=>_.id===R);E&&P&&P!==E.title&&v(()=>n(R,P))},S=R=>{let{active:P,over:E}=R;E&&P.id!==E.id&&v(()=>r(String(P.id),String(E.id)))};return(0,de.jsx)(Ao,{open:e,onOpenChange:R=>{if(!h.current){if(!R&&C){L(null);return}o(R)}},children:(0,de.jsxs)(Na,{className:"kanban-dialog-medium",children:[(0,de.jsxs)(_a,{children:[(0,de.jsx)(qa,{children:i("columnEdit")}),(0,de.jsx)(Sr,{children:i("columnEditDesc")})]}),(0,de.jsxs)(Ha,{children:[(t||m)&&(0,de.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||m}),(0,de.jsx)(Xr,{sensors:y,collisionDetection:Ei,onDragEnd:S,children:(0,de.jsx)(Jr,{items:a.map(R=>R.id),strategy:Zr,children:(0,de.jsx)("div",{className:"kanban-sortable-list",children:a.map(R=>(0,de.jsx)(gC,{column:R,value:u[R.id]??R.title,onValueChange:P=>c(E=>({...E,[R.id]:P})),onCommit:()=>D(R.id),onDelete:()=>L(R),disabled:p||!!C,canDelete:a.length>1},R.id))})})})]}),(0,de.jsx)(Ua,{children:C?(0,de.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,de.jsx)("p",{role:"alert",children:i("deleteColumnDesc").replace("{column}",C.title)}),(0,de.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,de.jsx)(he,{ref:I,variant:"outline",disabled:p,onClick:()=>L(null),children:i("cancel")}),(0,de.jsx)(he,{variant:"destructive",disabled:p,onClick:async()=>{await v(()=>l(C.id))&&L(null)},children:i("confirmDelete")})]})]}):(0,de.jsxs)("div",{className:"kanban-sortable-row",children:[(0,de.jsx)(ea,{value:d,disabled:p,placeholder:i("newColumnPlaceholder"),"aria-label":i("newColumnPlaceholder"),maxLength:40,onChange:R=>f(R.target.value),onKeyDown:R=>{R.key==="Enter"&&(R.preventDefault(),w())}}),(0,de.jsxs)(he,{size:"sm",disabled:p||!d.trim(),onClick:()=>{w()},children:[(0,de.jsx)(jt,{className:"kanban-icon"}),i("add")]})]})})]})})}var xt=require("react");var ve=require("react/jsx-runtime");function Bp({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=qe(),[i,u]=(0,xt.useState)({}),[c,d]=(0,xt.useState)(""),[f,p]=(0,xt.useState)("#38bdf8"),[g,h]=(0,xt.useState)(!1),m=(0,xt.useRef)(!1),[x,C]=(0,xt.useState)(""),[L,I]=(0,xt.useState)(null),y=(0,xt.useRef)(null);(0,xt.useEffect)(()=>{e&&(u(Object.fromEntries(a.map(S=>[S.name,{name:S.name,color:S.color}]))),d(""),p("#38bdf8"),C(""),I(null))},[e]),(0,xt.useEffect)(()=>{L&&y.current?.focus()},[L]);let v=async S=>{if(m.current)return!1;m.current=!0,h(!0),C("");try{let R=await S();return R===!1&&C(s("actionRetry")),R!==!1}catch(R){return C(s("actionFailed")+String(R instanceof Error?R.message:R)),!1}finally{m.current=!1,h(!1)}},w=async()=>{let S=c.trim();S&&await v(()=>r(S,f))&&d("")},D=S=>{let R=i[S];if(!R)return;let P=a.find(_=>_.name===S),E=R.name.trim();P&&E&&(E!==S||R.color!==P.color)&&v(()=>n(S,E,R.color))};return(0,ve.jsx)(Ao,{open:e,onOpenChange:S=>{if(!m.current){if(!S&&L){I(null);return}o(S)}},children:(0,ve.jsxs)(Na,{className:"kanban-dialog-medium",children:[(0,ve.jsxs)(_a,{children:[(0,ve.jsx)(qa,{children:s("labelEdit")}),(0,ve.jsx)(Sr,{children:s("labelEditDesc")})]}),(0,ve.jsxs)(Ha,{children:[(t||x)&&(0,ve.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||x}),(0,ve.jsx)("div",{className:"kanban-label-list",children:a.map(S=>{let R=i[S.name]??{name:S.name,color:S.color};return(0,ve.jsxs)("div",{className:"kanban-label-row",children:[(0,ve.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${S.name}`,value:R.color,disabled:g||!!L,className:"kanban-color-input",onChange:P=>u(E=>({...E,[S.name]:{...R,color:P.target.value}})),onBlur:()=>D(S.name)}),(0,ve.jsx)(ea,{"aria-label":`${s("labelName")}: ${S.name}`,value:R.name,disabled:g||!!L,maxLength:20,onChange:P=>u(E=>({...E,[S.name]:{...R,name:P.target.value}})),onBlur:()=>D(S.name),onKeyDown:P=>{P.key==="Enter"&&P.target.blur()}}),(0,ve.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${s("deleteLabel")}: ${S.name}`,disabled:g||!!L,onClick:()=>I(S.name),children:(0,ve.jsx)(It,{className:"kanban-icon"})})]},S.name)})})]}),(0,ve.jsx)(Ua,{children:L?(0,ve.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,ve.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",L)}),(0,ve.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,ve.jsx)(he,{ref:y,variant:"outline",disabled:g,onClick:()=>I(null),children:s("cancel")}),(0,ve.jsx)(he,{variant:"destructive",disabled:g,onClick:async()=>{await v(()=>l(L))&&I(null)},children:s("confirmDelete")})]})]}):(0,ve.jsxs)("div",{className:"kanban-label-add-row",children:[(0,ve.jsx)("input",{type:"color","aria-label":s("newLabelColor"),value:f,disabled:g,className:"kanban-color-input",onChange:S=>p(S.target.value)}),(0,ve.jsx)(ea,{value:c,disabled:g,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:S=>d(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.preventDefault(),w())}}),(0,ve.jsxs)(he,{size:"sm",disabled:g||!c.trim(),onClick:()=>{w()},children:[(0,ve.jsx)(jt,{className:"kanban-icon"}),s("add")]})]})})]})})}function jn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var ei=new Map,ti=0,$n=new Set;function Fp(e,t){ei.set(e,t),ti++;for(let a of $n)a()}function Np(e){let t=ei.get(e);if(t==null)return null;ei.delete(e),ti++;for(let a of $n)a();return t}function _p(e){return $n.add(e),()=>{$n.delete(e)}}function Hp(){return ti}function Up(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Mo("fieldId")+": "+t),a&&n.push(a),r&&n.push(Mo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var q=require("react/jsx-runtime");function qp(e,t,a,o,r){let n=e.find(m=>m.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(m=>m.columnId===n.columnId).findIndex(m=>m.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(m=>m.id!==t),i=s.filter(m=>m.columnId===a),u=o?i.findIndex(m=>m.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],p=i[i.length-1],g=f?d.indexOf(f):p?d.indexOf(p)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((m,x)=>m.id===e[x]?.id&&m.columnId===e[x]?.columnId)?e:d,toIndex:c}}function Vp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(b=>b.items):[],l=Array.isArray(n)?n.find(b=>Array.isArray(b.sessionIds)&&b.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=qe(),[u,c]=(0,ie.useState)(null),[d,f]=(0,ie.useState)(""),[p,g]=(0,ie.useState)([]),[h,m]=(0,ie.useState)(null),[x,C]=(0,ie.useState)(null),[L,I]=(0,ie.useState)(!1),[y,v]=(0,ie.useState)(!1),[w,D]=(0,ie.useState)(!1),[S,R]=(0,ie.useState)(""),[P,E]=(0,ie.useState)(null),_=(0,ie.useRef)(null),U=(0,ie.useRef)(u),z=(0,ie.useRef)(null),W=(0,ie.useRef)(s),A=(0,ie.useRef)(0),N=(0,ie.useRef)(0);U.current=u,W.current=s;let[X,V]=(0,ie.useState)(null),ae=Vr(Da(Qo,{activationConstraint:{distance:8}}),Da(er,{activationConstraint:{delay:250,tolerance:5}}),Da(sa,{coordinateGetter:en})),Z=(0,ie.useCallback)((b,M,T)=>{W.current!==M||T<N.current||(N.current=T,b&&b.board&&(c({...b.board,cards:Array.isArray(b.board.cards)?b.board.cards.map(G=>({...G,comments:Array.isArray(G.comments)?G.comments:[]})):[],activities:Array.isArray(b.board.activities)?b.board.activities:[]}),f("")),Array.isArray(b&&b.warnings)&&b.warnings.length>0&&g(G=>[...G,...b.warnings]))},[]),Q=(0,ie.useCallback)(async(b,M={})=>{let T=++A.current;f("");try{let G=await jn(b,M,s);return Z(G,s,T),!0}catch(G){return f(i("actionFailed")+String(G&&G.message||G)),!1}},[s,Z,i]),Ae=(0,ie.useCallback)(()=>{let b=++A.current;D(!0),jn("get",{},s).then(M=>Z(M,s,b)).catch(M=>f(i("loadFailed")+String(M&&M.message||M))).finally(()=>D(!1))},[s,Z,i]);(0,ie.useEffect)(()=>{let b=!0,M=++A.current;return c(null),E(null),R(""),C(null),m(null),f(""),g([]),jn("get",{},s).then(T=>{b&&Z(T,s,M)}).catch(T=>{b&&f(i("loadFailed")+String(T&&T.message||T))}),()=>{b=!1}},[s,Z,i]),(0,ie.useEffect)(()=>{u&&E(b=>b&&!u.labels.some(M=>M.name===b)?null:b)},[u?.labels]),(0,ie.useLayoutEffect)(()=>{let b=Re=>{let se=Re;for(;se;){let we=getComputedStyle(se).overflowY;if(we==="auto"||we==="scroll")return se;se=se.parentElement}return null},M=()=>{let Re=_.current;if(!Re)return;let se=b(Re.parentElement),we=Re.getBoundingClientRect().top+(se?.scrollTop??0),Se=window.innerHeight;if(se){let lt=se.querySelector("[data-composer-seat]"),at=lt?lt.getBoundingClientRect().top:0;lt&&lt.offsetHeight>0&&at>we?Se=at:Se=se.getBoundingClientRect().bottom}V(Math.max(0,Math.floor(Se-we)))};M();let T=b(_.current?.parentElement??null),G=new ResizeObserver(M);if(G.observe(document.documentElement),T){G.observe(T);let Re=T.querySelector("[data-composer-seat]");Re&&G.observe(Re)}return window.addEventListener("resize",M),()=>{G.disconnect(),window.removeEventListener("resize",M)}},[u!==null]);let Ie=(0,ie.useCallback)(b=>{let M=Oi(b),T=M.length>0?M:fl(b),G=ar(T,"id");if(G==null)return[];if(new Set((u?.columns??[]).map(se=>se.id)).has(String(G))){let se=(u?.cards??[]).filter(we=>we.columnId===G).map(we=>we.id);if(se.length>0){let we=Wr({...b,droppableContainers:b.droppableContainers.filter(Se=>Se.id!==G&&se.includes(String(Se.id)))});we.length>0&&(G=we[0].id)}}return[{id:G}]},[u]),B=b=>{let M=U.current;if(!M||M.cards===b)return;let T={...M,cards:b};U.current=T,c(T)},ce=b=>{if(b.active.data.current?.type!=="card")return;let M=U.current,T=M?.cards.find(G=>G.id===b.active.id);!T||!M||(z.current=M.cards,m(T))},fe=({active:b,over:M})=>{let T=U.current;if(!M||!T||b.data.current?.type!=="card")return;let G=String(b.id),Re=T.cards.find(at=>at.id===G),se=T.cards.find(at=>at.id===M.id),we=se?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!Re||!we||Re.columnId===we)return;let Se=b.rect.current.translated,lt=!!(se&&Se&&Se.top+Se.height/2>M.rect.top+M.rect.height/2);B(qp(T.cards,G,we,se?.id??null,lt).cards)},pe=({active:b,over:M})=>{let T=U.current,G=z.current;if(z.current=null,!M||!T||b.data.current?.type!=="card"){G&&B(G),m(null);return}let Re=String(b.id),se=T.cards.find(Xt=>Xt.id===M.id),we=se?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!we){G&&B(G),m(null);return}let Se=b.rect.current.translated,lt=!!(se&&Se&&Se.top+Se.height/2>M.rect.top+M.rect.height/2),at=qp(T.cards,Re,we,se?.id??null,lt);B(at.cards),m(null),(!G||at.cards.some((Xt,Br)=>Xt.id!==G[Br]?.id||Xt.columnId!==G[Br]?.columnId))&&Q("moveCard",{id:Re,columnId:we,toIndex:at.toIndex}).then(Xt=>{Xt||Ae()})},F=()=>{z.current&&B(z.current),z.current=null,m(null)},ue=b=>{if(!x)return Promise.resolve(!1);if(x.card){let M=U.current?.cards.find(G=>G.id===x.card.id)??x.card,T={id:M.id};return b.title!==M.title&&(T.title=b.title),b.note!==M.note&&(T.note=b.note),b.label!==(M.label??"")&&(T.label=b.label),b.priority!==(M.priority??"")&&(T.priority=b.priority),Q("updateCard",T)}return Q("addCard",{columnId:x.columnId,title:b.title,note:b.note,label:b.label||void 0,priority:b.priority||void 0})},oe=(0,ie.useCallback)(async(b,M)=>{let T=Up(b);if(!T)return!1;f("");try{return M==="current"?o?(await o.setDraft(T),!0):!1:r?.openWorkspace?(await r.openWorkspace(s,G=>Fp(G,T)),!0):!1}catch(G){return f(i("actionFailed")+String(G&&G.message||G)),!1}},[o,r,s,i]);return u?(0,q.jsxs)("div",{ref:_,className:"kanban-root kanban-view",style:X!=null?{height:X}:void 0,children:[d&&!x&&!L&&!y&&(0,q.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(S||P!==null)&&(0,q.jsxs)("div",{className:"kanban-filter-summary","aria-label":i("clearFilter"),children:[S&&(0,q.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${Ft[S].label}`,onClick:()=>R(""),children:[i("fieldPriority"),": ",Ft[S].label,(0,q.jsx)(da,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),P!==null&&(0,q.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${P||i("noLabel")}`,onClick:()=>E(null),children:[i("fieldLabel"),": ",P||i("noLabel"),(0,q.jsx)(da,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),p.length>0&&(0,q.jsxs)("div",{className:"kanban-warning",children:[(0,q.jsxs)("div",{className:"kanban-warning-body",children:[(0,q.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),p.map((b,M)=>(0,q.jsx)("p",{className:"kanban-warning-item",children:b},M))]}),(0,q.jsx)(he,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,q.jsxs)(Xr,{sensors:ae,collisionDetection:Ie,onDragStart:ce,onDragOver:fe,onDragEnd:pe,onDragCancel:F,children:[(0,q.jsxs)("div",{className:"kanban-content",children:[(0,q.jsxs)("div",{className:"kanban-toolbar",children:[(0,q.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:w,onClick:Ae,children:(0,q.jsx)(cr,{className:w?"kanban-animate-spin":void 0})}),(0,q.jsxs)(No,{children:[(0,q.jsx)(_o,{asChild:!0,children:(0,q.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,q.jsx)(pr,{className:"kanban-icon"})})}),(0,q.jsxs)(eo,{align:"start",children:[(0,q.jsxs)(St,{onClick:()=>{f(""),I(!0)},children:[(0,q.jsx)(dr,{className:"kanban-icon"}),i("columnEdit")]}),(0,q.jsxs)(St,{onClick:()=>{f(""),v(!0)},children:[(0,q.jsx)(xo,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,q.jsxs)(No,{children:[(0,q.jsx)(_o,{asChild:!0,children:(0,q.jsx)(he,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${S?" is-active":""}`,title:i("priorityFilter"),"aria-label":i("priorityFilter"),"aria-pressed":!!S,children:(0,q.jsx)(ua,{className:"kanban-icon"})})}),(0,q.jsxs)(eo,{align:"start",children:[(0,q.jsxs)(St,{role:"menuitemradio","aria-checked":!S,onSelect:()=>R(""),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:!S&&(0,q.jsx)(Pt,{className:"kanban-icon"})}),i("all")]}),Xn.map(b=>(0,q.jsxs)(St,{role:"menuitemradio","aria-checked":S===b,onSelect:()=>R(b),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:S===b&&(0,q.jsx)(Pt,{className:"kanban-icon"})}),(0,q.jsx)("span",{className:"kanban-priority-dot",style:{background:Ft[b].color}}),Ft[b].label]},b))]})]}),(0,q.jsxs)(No,{children:[(0,q.jsx)(_o,{asChild:!0,children:(0,q.jsx)(he,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${P!==null?" is-active":""}`,title:P===null?i("labelFilter"):`${i("labelFilter")}: ${P||i("noLabel")}`,"aria-label":i("labelFilter"),"aria-pressed":P!==null,children:(0,q.jsx)(xo,{className:"kanban-icon"})})}),(0,q.jsxs)(eo,{align:"start",children:[(0,q.jsxs)(St,{role:"menuitemradio","aria-checked":P===null,onSelect:()=>E(null),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:P===null&&(0,q.jsx)(Pt,{className:"kanban-icon"})}),i("all")]}),(0,q.jsxs)(St,{role:"menuitemradio","aria-checked":P==="",onSelect:()=>E(""),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:P===""&&(0,q.jsx)(Pt,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(b=>(0,q.jsxs)(St,{role:"menuitemradio","aria-checked":P===b.name,onSelect:()=>E(b.name),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:P===b.name&&(0,q.jsx)(Pt,{className:"kanban-icon"})}),(0,q.jsx)("span",{className:"kanban-label-dot",style:{background:b.color}}),b.name]},b.name))]})]})]}),(0,q.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(b=>{let M=u.cards.filter(T=>T.columnId===b.id&&(!S||T.priority===S)&&(P===null||(T.label??"")===P));return(0,q.jsx)(Ep,{column:b,cards:M,totalCount:u.cards.filter(T=>T.columnId===b.id).length,filtered:!!S||P!==null,labels:u.labels,onAddCard:T=>{f(""),C({card:null,columnId:T.id})},onOpenCard:T=>{f(""),C({card:T,columnId:T.columnId})}},b.id)})})]}),(0,q.jsx)(Zi,{children:h?(0,q.jsx)("div",{className:"kanban-drag-preview",children:(0,q.jsx)(Qs,{card:h,labels:u.labels})}):null})]}),(0,q.jsx)(Dp,{error:d,open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(b=>b.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(b=>b.cardId===x.card.id):[],onOpenChange:b=>{b||C(null)},onSave:ue,onAddComment:(b,M)=>Q("addComment",{id:b,content:M}),onDelete:b=>Q("deleteCard",{id:b.id}),onChatWithAgent:oe}),(0,q.jsx)(Op,{error:d,open:L,columns:u.columns,onOpenChange:I,onReorder:(b,M)=>{let T=u.columns.findIndex(G=>G.id===M);return T>=0?Q("moveColumn",{id:b,toIndex:T}):Promise.resolve(!1)},onRename:(b,M)=>Q("renameColumn",{id:b,title:M}),onDelete:b=>Q("deleteColumn",{id:b}),onAdd:b=>Q("addColumn",{title:b})}),(0,q.jsx)(Bp,{error:d,open:y,labels:u.labels,onOpenChange:v,onAdd:(b,M)=>Q("addLabel",{name:b,color:M}),onUpdate:(b,M,T)=>Q("updateLabel",{name:b,newName:M,color:T}),onDelete:b=>Q("deleteLabel",{name:b})})]}):(0,q.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,q.jsx)("p",{className:"kanban-error",children:d}):(0,q.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Yn=require("react");function Wp({sessionId:e,inputActions:t}){let a=(0,Yn.useSyncExternalStore)(_p,Hp);return(0,Yn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Np(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Gp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){ec(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Mo("boardTab")},o=>(0,ai.createElement)(Vp,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,ai.createElement)(Wp,o)))}};var zp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+zp+"]")){let e=document.createElement("style");e.setAttribute(zp,""),e.textContent=ci,document.head.appendChild(e)}var xC=Gp;
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
   * @license lucide-react v1.55.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})