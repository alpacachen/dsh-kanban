window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var eh=Object.create;var on=Object.defineProperty;var th=Object.getOwnPropertyDescriptor;var ah=Object.getOwnPropertyNames;var oh=Object.getPrototypeOf,rh=Object.prototype.hasOwnProperty;var Oi=e=>{throw TypeError(e)};var nh=(e,t)=>{for(var a in t)on(e,a,{get:t[a],enumerable:!0})},Fi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ah(t))!rh.call(e,r)&&r!==a&&on(e,r,{get:()=>t[r],enumerable:!(o=th(t,r))||o.enumerable});return e};var j=(e,t,a)=>(a=e!=null?eh(oh(e)):{},Fi(t||!e||!e.__esModule?on(a,"default",{value:e,enumerable:!0}):a,e)),lh=e=>Fi(on({},"__esModule",{value:!0}),e);var Bi=(e,t,a)=>t.has(e)||Oi("Cannot "+a);var et=(e,t,a)=>(Bi(e,t,"read from private field"),a?a.call(e):t.get(e)),Ni=(e,t,a)=>t.has(e)?Oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),gl=(e,t,a,o)=>(Bi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var Mb={};nh(Mb,{default:()=>Db});module.exports=lh(Mb);var _i=`/*
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

.kanban-toolbar-divider {
  width: 24px;
  height: 1px;
  margin: 2px 0;
  background: var(--dsw-alias-border-l2);
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

.kanban-card-status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 8px;
}

.kanban-card-due-date {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-11);
}

.kanban-card-due-date svg {
  width: 12px;
  height: 12px;
}

.kanban-card-due-date.is-today { color: var(--dsw-alias-state-warn-primary); }
.kanban-card-due-date.is-overdue { color: var(--dsw-alias-state-error-primary); }
.kanban-card-due-date.is-completed { color: var(--dsw-alias-label-tertiary); }

.kanban-card-comment-count {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-left: auto;
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

.kanban-date-fields { align-items: start; }

.kanban-completed-date {
  display: flex;
  align-items: center;
  min-height: 32px;
}

.kanban-due-date-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 10px;
}

.kanban-due-date-controls input { width: 160px; color-scheme: inherit; }

.kanban-date-shortcuts { display: flex; flex-wrap: wrap; gap: 2px; }
.kanban-date-shortcuts .kanban-button { padding: 0 6px; }

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

/* List and label editors */
.kanban-editor-dialog {
  max-width: 480px;
}

.kanban-editor-dialog .kanban-dialog-description {
  font: var(--dsw-font-xxs-12);
}

.kanban-editor-body {
  display: grid;
  align-content: start;
  gap: 20px;
}

.kanban-editor-section,
.kanban-editor-add {
  display: grid;
  min-width: 0;
  gap: 8px;
}

.kanban-editor-caption {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-editor-caption span {
  color: var(--dsw-alias-label-tertiary);
  font-variant-numeric: tabular-nums;
}

.kanban-editor-list {
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1);
}

.kanban-editor-row {
  position: relative;
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 8px;
  min-height: 46px;
  padding: 6px;
}

.kanban-editor-row + .kanban-editor-row {
  border-top: 1px solid var(--dsw-alias-border-l1);
}

.kanban-editor-row[data-dragging] {
  z-index: 1;
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-2);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-editor-name {
  border-color: transparent;
  background: transparent;
}

.kanban-editor-name:hover:not(:disabled):not(:focus) {
  border-color: var(--dsw-alias-border-l2);
}

.kanban-editor-name:focus {
  background: var(--dsw-alias-bg-layer-2);
}

.kanban-editor-delete {
  color: var(--dsw-alias-label-tertiary);
}

.kanban-editor-delete:hover:not(:disabled),
.kanban-editor-delete:focus-visible {
  color: var(--dsw-alias-state-error-primary);
}

.kanban-editor-setting {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 148px;
  align-items: start;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}

.kanban-editor-setting-copy {
  display: grid;
  gap: 4px;
}

.kanban-editor-empty {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 14px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-editor-add {
  width: 100%;
}

.kanban-editor-add-row {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  padding-inline: 7px;
}

.kanban-editor-add-icon {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-tertiary);
}

.kanban-editor-add-button {
  height: 32px;
  min-width: 56px;
}

.kanban-drag-handle {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font: inherit;
  cursor: grab;
  touch-action: none;
}

.kanban-drag-handle:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.kanban-color-input {
  appearance: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  padding: 6px;
  background: transparent;
}

.kanban-color-input::-webkit-color-swatch-wrapper {
  padding: 0;
}

.kanban-color-input::-webkit-color-swatch {
  border: 1px solid var(--dsw-alias-border-l4);
  border-radius: 50%;
  corner-shape: round;
}

.kanban-color-input::-moz-color-swatch {
  border: 1px solid var(--dsw-alias-border-l4);
  border-radius: 50%;
}

.kanban-color-input:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-color-input:disabled {
  cursor: not-allowed;
  opacity: 0.4;
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

@media (max-width: 440px) {
  .kanban-editor-setting {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
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
`;var Di=require("react");var Le=require("react");var k=j(require("react")),za=require("react-dom");var Te=require("react");function Ui(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Te.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var sr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Na(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function rn(e){return"nodeType"in e}function rt(e){var t,a;return e?Na(e)?e:rn(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function nn(e){let{Document:t}=rt(e);return e instanceof t}function Po(e){return Na(e)?!1:e instanceof rt(e).HTMLElement}function Cl(e){return e instanceof rt(e).SVGElement}function _a(e){return e?Na(e)?e.document:rn(e)?nn(e)?e:Po(e)||Cl(e)?e.ownerDocument:document:document:document}var It=sr?Te.useLayoutEffect:Te.useEffect;function ir(e){let t=(0,Te.useRef)(e);return It(()=>{t.current=e}),(0,Te.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function qi(){let e=(0,Te.useRef)(null),t=(0,Te.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Te.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Do(e,t){t===void 0&&(t=[e]);let a=(0,Te.useRef)(e);return It(()=>{a.current!==e&&(a.current=e)},t),a}function Mo(e,t){let a=(0,Te.useRef)();return(0,Te.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function ur(e){let t=ir(e),a=(0,Te.useRef)(null),o=(0,Te.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function dr(e){let t=(0,Te.useRef)();return(0,Te.useEffect)(()=>{t.current=e},[e]),t.current}var xl={};function Ha(e,t){return(0,Te.useMemo)(()=>{if(t)return t;let a=xl[e]==null?0:xl[e]+1;return xl[e]=a,e+"-"+a},[e,t])}function Wi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var Ua=Wi(1),qa=Wi(-1);function ih(e){return"clientX"in e&&"clientY"in e}function To(e){if(!e)return!1;let{KeyboardEvent:t}=rt(e.target);return t&&e instanceof t}function uh(e){if(!e)return!1;let{TouchEvent:t}=rt(e.target);return t&&e instanceof t}function cr(e){if(uh(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return ih(e)?{x:e.clientX,y:e.clientY}:null}var vt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[vt.Translate.toString(e),vt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),Hi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function zi(e){return e.matches(Hi)?e:e.querySelector(Hi)}var Wa=j(require("react")),dh={display:"none"};function Vi(e){let{id:t,value:a}=e;return Wa.default.createElement("div",{id:t,style:dh},a)}function Gi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Wa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Xi(){let[e,t]=(0,Wa.useState)("");return{announce:(0,Wa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var nu=(0,k.createContext)(null);function ch(e){let t=(0,k.useContext)(nu);(0,k.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function fh(){let[e]=(0,k.useState)(()=>new Set),t=(0,k.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,k.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var ph={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},mh={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function hh(e){let{announcements:t=mh,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=ph}=e,{announce:n,announcement:l}=Xi(),s=Ha("DndLiveRegion"),[i,u]=(0,k.useState)(!1);if((0,k.useEffect)(()=>{u(!0)},[]),ch((0,k.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;n(t.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;n(t.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!i)return null;let c=k.default.createElement(k.default.Fragment,null,k.default.createElement(Vi,{id:o,value:r.draggable}),k.default.createElement(Gi,{id:s,announcement:l}));return a?(0,za.createPortal)(c,a):c}var qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(qe||(qe={}));function sn(){}function Xa(e,t){return(0,k.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function dn(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,k.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var _t=Object.freeze({x:0,y:0});function Rl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function gh(e,t){let a=cr(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function kl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function xh(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Il(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Cr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Ki(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var lu=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ki(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Rl(Ki(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(kl)},cn=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Il(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Il(i),c=r.reduce((f,p,g)=>f+Rl(u[g],p),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(kl)};function Ch(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var Pl=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Ch(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(xh)};function Lh(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var su=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Lh(o,s)){let u=Il(s).reduce((d,f)=>d+Rl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(kl)};function bh(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function iu(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_t}function vh(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Ih=vh(1);function uu(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function wh(e,t,a){let o=uu(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Sh={ignoreTransform:!1};function Ka(e,t){t===void 0&&(t=Sh);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=rt(e).getComputedStyle(e);u&&(a=wh(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function ji(e){return Ka(e,{ignoreTransform:!0})}function yh(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Rh(e,t){return t===void 0&&(t=rt(e).getComputedStyle(e)),t.position==="fixed"}function kh(e,t){t===void 0&&(t=rt(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Lr(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(nn(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Po(r)||Cl(r)||a.includes(r))return a;let n=rt(e).getComputedStyle(r);return r!==e&&kh(r,n)&&a.push(r),Rh(r,n)?a:o(r.parentNode)}return e?o(e):a}function du(e){let[t]=Lr(e,1);return t??null}function Ll(e){return!sr||!e?null:Na(e)?e:rn(e)?nn(e)||e===_a(e).scrollingElement?window:Po(e)?e:null:null}function cu(e){return Na(e)?e.scrollX:e.scrollLeft}function fu(e){return Na(e)?e.scrollY:e.scrollTop}function wl(e){return{x:cu(e),y:fu(e)}}var Xe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Xe||(Xe={}));function pu(e){return!sr||!e?!1:e===document.scrollingElement}function mu(e){let t={x:0,y:0},a=pu(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Ph={x:.2,y:.2};function Dh(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Ph);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=mu(e),p={x:0,y:0},g={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(p.y=Xe.Backward,g.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(p.y=Xe.Forward,g.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(p.x=Xe.Forward,g.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(p.x=Xe.Backward,g.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:p,speed:g}}function Mh(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function hu(e){return e.reduce((t,a)=>Ua(t,wl(a)),_t)}function Th(e){return e.reduce((t,a)=>t+cu(a),0)}function Ah(e){return e.reduce((t,a)=>t+fu(a),0)}function gu(e,t){if(t===void 0&&(t=Ka),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);du(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Eh=[["x",["left","right"],Th],["y",["top","bottom"],Ah]],pr=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Lr(a),r=hu(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Eh)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Va=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Oh(e){let{EventTarget:t}=rt(e);return e instanceof t?e:_a(e)}function bl(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Mt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Mt||(Mt={}));function $i(e){e.preventDefault()}function Fh(e){e.stopPropagation()}var fe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(fe||(fe={}));var xu={start:[fe.Space,fe.Enter],cancel:[fe.Esc],end:[fe.Space,fe.Enter,fe.Tab]},Bh=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case fe.Right:return{...a,x:a.x+25};case fe.Left:return{...a,x:a.x-25};case fe.Down:return{...a,y:a.y+25};case fe.Up:return{...a,y:a.y-25}}},va=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Va(_a(a)),this.windowListeners=new Va(rt(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Mt.Resize,this.handleCancel),this.windowListeners.add(Mt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Mt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&gu(o),a(_t)}handleKeyDown(t){if(To(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=xu,coordinateGetter:l=Bh,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:_t;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=qa(d,c),p={x:0,y:0},{scrollableAncestors:g}=o.current;for(let m of g){let h=t.code,{isTop:x,isRight:v,isLeft:C,isBottom:b,maxScroll:I,minScroll:L}=mu(m),w=Mh(m),P={x:Math.min(h===fe.Right?w.right-w.width/2:w.right,Math.max(h===fe.Right?w.left:w.left+w.width/2,d.x)),y:Math.min(h===fe.Down?w.bottom-w.height/2:w.bottom,Math.max(h===fe.Down?w.top:w.top+w.height/2,d.y))},M=h===fe.Right&&!v||h===fe.Left&&!C,S=h===fe.Down&&!b||h===fe.Up&&!x;if(M&&P.x!==d.x){let D=m.scrollLeft+f.x,T=h===fe.Right&&D<=I.x||h===fe.Left&&D>=L.x;if(T&&!f.y){m.scrollTo({left:D,behavior:s});return}T?p.x=m.scrollLeft-D:p.x=h===fe.Right?m.scrollLeft-I.x:m.scrollLeft-L.x,p.x&&m.scrollBy({left:-p.x,behavior:s});break}else if(S&&P.y!==d.y){let D=m.scrollTop+f.y,T=h===fe.Down&&D<=I.y||h===fe.Up&&D>=L.y;if(T&&!f.x){m.scrollTo({top:D,behavior:s});return}T?p.y=m.scrollTop-D:p.y=h===fe.Down?m.scrollTop-I.y:m.scrollTop-L.y,p.y&&m.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,Ua(qa(d,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};va.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=xu,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Yi(e){return!!(e&&"distance"in e)}function Zi(e){return!!(e&&"delay"in e)}var mr=class{constructor(t,a,o){var r;o===void 0&&(o=Oh(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=_a(l),this.documentListeners=new Va(this.document),this.listeners=new Va(o),this.windowListeners=new Va(rt(l)),this.initialCoordinates=(r=cr(n))!=null?r:_t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Mt.Resize,this.handleCancel),this.windowListeners.add(Mt.DragStart,$i),this.windowListeners.add(Mt.VisibilityChange,this.handleCancel),this.windowListeners.add(Mt.ContextMenu,$i),this.documentListeners.add(Mt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Zi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Yi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Mt.Click,Fh,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Mt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=cr(t))!=null?a:_t,u=qa(r,i);if(!o&&s){if(Yi(s)){if(s.tolerance!=null&&bl(u,s.tolerance))return this.handleCancel();if(bl(u,s.distance))return this.handleStart()}if(Zi(s)&&bl(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===fe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Nh={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Ao=class extends mr{constructor(t){let{event:a}=t,o=_a(a.target);super(t,Nh,o)}};Ao.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var _h={move:{name:"mousemove"},end:{name:"mouseup"}},Sl;(function(e){e[e.RightClick=2]="RightClick"})(Sl||(Sl={}));var hr=class extends mr{constructor(t){super(t,_h,_a(t.event.target))}};hr.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===Sl.RightClick?!1:(o?.({event:a}),!0)}}];var vl={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},gr=class extends mr{constructor(t){super(t,vl)}static setup(){return window.addEventListener(vl.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(vl.move.name,t)};function t(){}}};gr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var fr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(fr||(fr={}));var un;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(un||(un={}));function Hh(e){let{acceleration:t,activator:a=fr.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=un.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,p=qh({delta:d,disabled:!n}),[g,m]=qi(),h=(0,k.useRef)({x:0,y:0}),x=(0,k.useRef)({x:0,y:0}),v=(0,k.useMemo)(()=>{switch(a){case fr.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case fr.DraggableRect:return r}},[a,r,i]),C=(0,k.useRef)(null),b=(0,k.useCallback)(()=>{let L=C.current;if(!L)return;let w=h.current.x*x.current.x,P=h.current.y*x.current.y;L.scrollBy(w,P)},[]),I=(0,k.useMemo)(()=>s===un.TreeOrder?[...u].reverse():u,[s,u]);(0,k.useEffect)(()=>{if(!n||!u.length||!v){m();return}for(let L of I){if(o?.(L)===!1)continue;let w=u.indexOf(L),P=c[w];if(!P)continue;let{direction:M,speed:S}=Dh(L,P,v,t,f);for(let D of["x","y"])p[D][M[D]]||(S[D]=0,M[D]=0);if(S.x>0||S.y>0){m(),C.current=L,g(b,l),h.current=S,x.current=M;return}}h.current={x:0,y:0},x.current={x:0,y:0},m()},[t,b,o,m,n,l,JSON.stringify(v),JSON.stringify(p),g,u,I,c,JSON.stringify(f)])}var Uh={x:{[Xe.Backward]:!1,[Xe.Forward]:!1},y:{[Xe.Backward]:!1,[Xe.Forward]:!1}};function qh(e){let{delta:t,disabled:a}=e,o=dr(t);return Mo(r=>{if(a||!o||!r)return Uh;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Xe.Backward]:r.x[Xe.Backward]||n.x===-1,[Xe.Forward]:r.x[Xe.Forward]||n.x===1},y:{[Xe.Backward]:r.y[Xe.Backward]||n.y===-1,[Xe.Forward]:r.y[Xe.Forward]||n.y===1}}},[a,t,o])}function Wh(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Mo(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function zh(e,t){return(0,k.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var xr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(xr||(xr={}));var yl;(function(e){e.Optimized="optimized"})(yl||(yl={}));var Ji=new Map;function Vh(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,k.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,k.useRef)(e),d=h(),f=Do(d),p=(0,k.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(v=>v===null?x:v.concat(x.filter(C=>!v.includes(C))))},[f]),g=(0,k.useRef)(null),m=Mo(x=>{if(d&&!a)return Ji;if(!x||x===Ji||c.current!==e||n!=null){let v=new Map;for(let C of e){if(!C)continue;if(n&&n.length>0&&!n.includes(C.id)&&C.rect.current){v.set(C.id,C.rect.current);continue}let b=C.node.current,I=b?new pr(i(b),b):null;C.rect.current=I,I&&v.set(C.id,I)}return v}return x},[e,n,a,d,i]);return(0,k.useEffect)(()=>{c.current=e},[e]),(0,k.useEffect)(()=>{d||p()},[a,d]),(0,k.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,k.useEffect)(()=>{d||typeof s!="number"||g.current!==null||(g.current=setTimeout(()=>{p(),g.current=null},s))},[s,d,p,...o]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:n!=null};function h(){switch(u){case xr.Always:return!1;case xr.BeforeDragging:return a;default:return!a}}}function Dl(e,t){return Mo(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Gh(e,t){return Dl(e,t)}function Xh(e){let{callback:t,disabled:a}=e,o=ir(t),r=(0,k.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,k.useEffect)(()=>()=>r?.disconnect(),[r]),r}function fn(e){let{callback:t,disabled:a}=e,o=ir(t),r=(0,k.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,k.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Kh(e){return new pr(Ka(e),e)}function Qi(e,t,a){t===void 0&&(t=Kh);let[o,r]=(0,k.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=Xh({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=fn({callback:n});return It(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function jh(e){let t=Dl(e);return iu(e,t)}var eu=[];function $h(e){let t=(0,k.useRef)(e),a=Mo(o=>e?o&&o!==eu&&e&&t.current&&e.parentNode===t.current.parentNode?o:Lr(e):eu,[e]);return(0,k.useEffect)(()=>{t.current=e},[e]),a}function Yh(e){let[t,a]=(0,k.useState)(null),o=(0,k.useRef)(e),r=(0,k.useCallback)(n=>{let l=Ll(n.target);l&&a(s=>s?(s.set(l,wl(l)),new Map(s)):null)},[]);return(0,k.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Ll(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,wl(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Ll(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,k.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>Ua(n,l),_t):hu(e):_t,[e,t])}function tu(e,t){t===void 0&&(t=[]);let a=(0,k.useRef)(null);return(0,k.useEffect)(()=>{a.current=null},t),(0,k.useEffect)(()=>{let o=e!==_t;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?qa(e,a.current):_t}function Zh(e){(0,k.useEffect)(()=>{if(!sr)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Jh(e,t){return(0,k.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Cu(e){return(0,k.useMemo)(()=>e?yh(e):null,[e])}var au=[];function Qh(e,t){t===void 0&&(t=Ka);let[a]=e,o=Cu(a?rt(a):null),[r,n]=(0,k.useState)(au);function l(){n(()=>e.length?e.map(i=>pu(i)?o:new pr(t(i),i)):au)}let s=fn({callback:l});return It(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Lu(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Po(t)?t:e}function eg(e){let{measure:t}=e,[a,o]=(0,k.useState)(null),r=(0,k.useCallback)(u=>{for(let{target:c}of u)if(Po(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=fn({callback:r}),l=(0,k.useCallback)(u=>{let c=Lu(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=ur(l);return(0,k.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var tg=[{sensor:Ao,options:{}},{sensor:va,options:{}}],ag={current:{}},ln={draggable:{measure:ji},droppable:{measure:ji,strategy:xr.WhileDragging,frequency:yl.Optimized},dragOverlay:{measure:Ka}},Ga=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},og={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ga,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:sn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ln,measureDroppableContainers:sn,windowRect:null,measuringScheduled:!1},bu={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:sn,draggableNodes:new Map,over:null,measureDroppableContainers:sn},br=(0,k.createContext)(bu),vu=(0,k.createContext)(og);function rg(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ga}}}function ng(e,t){switch(t.type){case qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case qe.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case qe.DragEnd:case qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case qe.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Ga(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case qe.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new Ga(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case qe.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Ga(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function lg(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,k.useContext)(br),n=dr(o),l=dr(a?.id);return(0,k.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!To(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=zi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Iu(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function sg(e){return(0,k.useMemo)(()=>({draggable:{...ln.draggable,...e?.draggable},droppable:{...ln.droppable,...e?.droppable},dragOverlay:{...ln.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function ig(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,k.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;It(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=iu(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=du(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var pn=(0,k.createContext)({..._t,scaleX:1,scaleY:1}),ba;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ba||(ba={}));var mn=(0,k.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=tg,collisionDetection:d=Pl,measuring:f,modifiers:p,...g}=t,m=(0,k.useReducer)(ng,void 0,rg),[h,x]=m,[v,C]=fh(),[b,I]=(0,k.useState)(ba.Uninitialized),L=b===ba.Initialized,{draggable:{active:w,nodes:P,translate:M},droppable:{containers:S}}=h,D=w!=null?P.get(w):null,T=(0,k.useRef)({initial:null,translated:null}),_=(0,k.useMemo)(()=>{var ot;return w!=null?{id:w,data:(ot=D?.data)!=null?ot:ag,rect:T}:null},[w,D]),y=(0,k.useRef)(null),[H,q]=(0,k.useState)(null),[V,W]=(0,k.useState)(null),K=Do(g,Object.values(g)),z=Ha("DndDescribedBy",l),ie=(0,k.useMemo)(()=>S.getEnabled(),[S]),J=sg(f),{droppableRects:Ce,measureDroppableContainers:B,measuringScheduled:Q}=Vh(ie,{dragging:L,dependencies:[M.x,M.y],config:J.droppable}),E=Wh(P,w),be=(0,k.useMemo)(()=>V?cr(V):null,[V]),Ie=Qm(),xe=Gh(E,J.draggable.measure);ig({activeNode:w!=null?P.get(w):null,config:Ie.layoutShiftCompensation,initialRect:xe,measure:J.draggable.measure});let N=Qi(E,J.draggable.measure,xe),ve=Qi(E?E.parentElement:null),ue=(0,k.useRef)({activatorEvent:null,active:null,activeNode:E,collisionRect:null,collisions:null,droppableRects:Ce,draggableNodes:P,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=S.getNodeFor((a=ue.current.over)==null?void 0:a.id),ee=eg({measure:J.dragOverlay.measure}),oe=(o=ee.nodeRef.current)!=null?o:E,it=L?(r=ee.rect)!=null?r:N:null,R=!!(ee.nodeRef.current&&ee.rect),U=jh(R?null:N),G=Cu(oe?rt(oe):null),$=$h(L?Z??E:null),Pe=Qh($),ce=Iu(p,{transform:{x:M.x-U.x,y:M.y-U.y,scaleX:1,scaleY:1},activatorEvent:V,active:_,activeNodeRect:N,containerNodeRect:ve,draggingNodeRect:it,over:ue.current.over,overlayNodeRect:ee.rect,scrollableAncestors:$,scrollableAncestorRects:Pe,windowRect:G}),De=be?Ua(be,M):null,Je=Yh($),$t=tu(Je),Pt=tu(Je,[N]),Ba=Ua(ce,$t),xt=it?Ih(it,ce):null,ha=_&&xt?d({active:_,collisionRect:xt,droppableRects:Ce,droppableContainers:ie,pointerCoordinates:De}):null,Mi=Cr(ha,"id"),[ga,Ti]=(0,k.useState)(null),jm=R?ce:Ua(ce,Pt),$m=bh(jm,(n=ga?.rect)!=null?n:null,N),ml=(0,k.useRef)(null),Ai=(0,k.useCallback)((ot,Ct)=>{let{sensor:Lt,options:xa}=Ct;if(y.current==null)return;let Dt=P.get(y.current);if(!Dt)return;let bt=ot.nativeEvent,Yt=new Lt({active:y.current,activeNode:Dt,event:bt,options:xa,context:ue,onAbort(Qe){if(!P.get(Qe))return;let{onDragAbort:Zt}=K.current,na={id:Qe};Zt?.(na),v({type:"onDragAbort",event:na})},onPending(Qe,Ca,Zt,na){if(!P.get(Qe))return;let{onDragPending:nr}=K.current,La={id:Qe,constraint:Ca,initialCoordinates:Zt,offset:na};nr?.(La),v({type:"onDragPending",event:La})},onStart(Qe){let Ca=y.current;if(Ca==null)return;let Zt=P.get(Ca);if(!Zt)return;let{onDragStart:na}=K.current,rr={activatorEvent:bt,active:{id:Ca,data:Zt.data,rect:T}};(0,za.unstable_batchedUpdates)(()=>{na?.(rr),I(ba.Initializing),x({type:qe.DragStart,initialCoordinates:Qe,active:Ca}),v({type:"onDragStart",event:rr}),q(ml.current),W(bt)})},onMove(Qe){x({type:qe.DragMove,coordinates:Qe})},onEnd:ko(qe.DragEnd),onCancel:ko(qe.DragCancel)});ml.current=Yt;function ko(Qe){return async function(){let{active:Zt,collisions:na,over:rr,scrollAdjustedTranslate:nr}=ue.current,La=null;if(Zt&&nr){let{cancelDrop:lr}=K.current;La={activatorEvent:bt,active:Zt,collisions:na,delta:nr,over:rr},Qe===qe.DragEnd&&typeof lr=="function"&&await Promise.resolve(lr(La))&&(Qe=qe.DragCancel)}y.current=null,(0,za.unstable_batchedUpdates)(()=>{x({type:Qe}),I(ba.Uninitialized),Ti(null),q(null),W(null),ml.current=null;let lr=Qe===qe.DragEnd?"onDragEnd":"onDragCancel";if(La){let hl=K.current[lr];hl?.(La),v({type:lr,event:La})}})}}},[P]),Ym=(0,k.useCallback)((ot,Ct)=>(Lt,xa)=>{let Dt=Lt.nativeEvent,bt=P.get(xa);if(y.current!==null||!bt||Dt.dndKit||Dt.defaultPrevented)return;let Yt={active:bt};ot(Lt,Ct.options,Yt)===!0&&(Dt.dndKit={capturedBy:Ct.sensor},y.current=xa,Ai(Lt,Ct))},[P,Ai]),Ei=zh(c,Ym);Zh(c),It(()=>{N&&b===ba.Initializing&&I(ba.Initialized)},[N,b]),(0,k.useEffect)(()=>{let{onDragMove:ot}=K.current,{active:Ct,activatorEvent:Lt,collisions:xa,over:Dt}=ue.current;if(!Ct||!Lt)return;let bt={active:Ct,activatorEvent:Lt,collisions:xa,delta:{x:Ba.x,y:Ba.y},over:Dt};(0,za.unstable_batchedUpdates)(()=>{ot?.(bt),v({type:"onDragMove",event:bt})})},[Ba.x,Ba.y]),(0,k.useEffect)(()=>{let{active:ot,activatorEvent:Ct,collisions:Lt,droppableContainers:xa,scrollAdjustedTranslate:Dt}=ue.current;if(!ot||y.current==null||!Ct||!Dt)return;let{onDragOver:bt}=K.current,Yt=xa.get(Mi),ko=Yt&&Yt.rect.current?{id:Yt.id,rect:Yt.rect.current,data:Yt.data,disabled:Yt.disabled}:null,Qe={active:ot,activatorEvent:Ct,collisions:Lt,delta:{x:Dt.x,y:Dt.y},over:ko};(0,za.unstable_batchedUpdates)(()=>{Ti(ko),bt?.(Qe),v({type:"onDragOver",event:Qe})})},[Mi]),It(()=>{ue.current={activatorEvent:V,active:_,activeNode:E,collisionRect:xt,collisions:ha,droppableRects:Ce,draggableNodes:P,draggingNode:oe,draggingNodeRect:it,droppableContainers:S,over:ga,scrollableAncestors:$,scrollAdjustedTranslate:Ba},T.current={initial:it,translated:xt}},[_,E,ha,xt,P,oe,it,Ce,S,ga,$,Ba]),Hh({...Ie,delta:M,draggingRect:xt,pointerCoordinates:De,scrollableAncestors:$,scrollableAncestorRects:Pe});let Zm=(0,k.useMemo)(()=>({active:_,activeNode:E,activeNodeRect:N,activatorEvent:V,collisions:ha,containerNodeRect:ve,dragOverlay:ee,draggableNodes:P,droppableContainers:S,droppableRects:Ce,over:ga,measureDroppableContainers:B,scrollableAncestors:$,scrollableAncestorRects:Pe,measuringConfiguration:J,measuringScheduled:Q,windowRect:G}),[_,E,N,V,ha,ve,ee,P,S,Ce,ga,B,$,Pe,J,Q,G]),Jm=(0,k.useMemo)(()=>({activatorEvent:V,activators:Ei,active:_,activeNodeRect:N,ariaDescribedById:{draggable:z},dispatch:x,draggableNodes:P,over:ga,measureDroppableContainers:B}),[V,Ei,_,N,x,z,P,ga,B]);return k.default.createElement(nu.Provider,{value:C},k.default.createElement(br.Provider,{value:Jm},k.default.createElement(vu.Provider,{value:Zm},k.default.createElement(pn.Provider,{value:$m},u)),k.default.createElement(lg,{disabled:s?.restoreFocus===!1})),k.default.createElement(hh,{...s,hiddenTextDescribedById:z}));function Qm(){let ot=H?.autoScrollEnabled===!1,Ct=typeof i=="object"?i.enabled===!1:i===!1,Lt=L&&!ot&&!Ct;return typeof i=="object"?{...i,enabled:Lt}:{enabled:Lt}}}),ug=(0,k.createContext)(null),ou="button",dg="Draggable";function wu(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Ha(dg),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,k.useContext)(br),{role:p=ou,roleDescription:g="draggable",tabIndex:m=0}=r??{},h=i?.id===t,x=(0,k.useContext)(h?pn:ug),[v,C]=ur(),[b,I]=ur(),L=Jh(l,t),w=Do(a);It(()=>(d.set(t,{id:t,key:n,node:v,activatorNode:b,data:w}),()=>{let M=d.get(t);M&&M.key===n&&d.delete(t)}),[d,t]);let P=(0,k.useMemo)(()=>({role:p,tabIndex:m,"aria-disabled":o,"aria-pressed":h&&p===ou?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,p,m,h,g,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:P,isDragging:h,listeners:o?void 0:L,node:v,over:f,setNodeRef:C,setActivatorNodeRef:I,transform:x}}function vr(){return(0,k.useContext)(vu)}var cg="Droppable",fg={timeout:25};function hn(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Ha(cg),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,k.useContext)(br),c=(0,k.useRef)({disabled:a}),d=(0,k.useRef)(!1),f=(0,k.useRef)(null),p=(0,k.useRef)(null),{disabled:g,updateMeasurementsFor:m,timeout:h}={...fg,...r},x=Do(m??o),v=(0,k.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),p.current=null},h)},[h]),C=fn({callback:v,disabled:g||!l}),b=(0,k.useCallback)((P,M)=>{C&&(M&&(C.unobserve(M),d.current=!1),P&&C.observe(P))},[C]),[I,L]=ur(b),w=Do(t);return(0,k.useEffect)(()=>{!C||!I.current||(C.disconnect(),d.current=!1,C.observe(I.current))},[I,C]),(0,k.useEffect)(()=>(s({type:qe.RegisterDroppable,element:{id:o,key:n,disabled:a,node:I,rect:f,data:w}}),()=>s({type:qe.UnregisterDroppable,key:n,id:o})),[o]),(0,k.useEffect)(()=>{a!==c.current.disabled&&(s({type:qe.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:I,over:i,setNodeRef:L}}function pg(e){let{animation:t,children:a}=e,[o,r]=(0,k.useState)(null),[n,l]=(0,k.useState)(null),s=dr(a);return!a&&!o&&s&&r(s),It(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),k.default.createElement(k.default.Fragment,null,a,o?(0,k.cloneElement)(o,{ref:l}):null)}var mg={x:0,y:0,scaleX:1,scaleY:1};function hg(e){let{children:t}=e;return k.default.createElement(br.Provider,{value:bu},k.default.createElement(pn.Provider,{value:mg},t))}var gg={position:"fixed",touchAction:"none"},xg=e=>To(e)?"transform 250ms ease":void 0,Cg=(0,k.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=xg}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...gg,width:s.width,height:s.height,top:s.top,left:s.left,transform:vt.Transform.toString(d),transformOrigin:r&&o?gh(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return k.default.createElement(a,{className:l,style:f,ref:t},n)}),Lg=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},bg=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:vt.Transform.toString(t)},{transform:vt.Transform.toString(a)}]},vg={duration:250,easing:"ease",keyframes:bg,sideEffects:Lg({styles:{active:{opacity:"0"}}})};function Ig(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return ir((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Lu(l);if(!u)return;let{transform:c}=rt(l).getComputedStyle(l),d=uu(c);if(!d)return;let f=typeof t=="function"?t:wg(t);return gu(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function wg(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...vg,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},p=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[g]=p,m=p[p.length-1];if(JSON.stringify(g)===JSON.stringify(m))return;let h=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(v=>{x.onfinish=()=>{h?.(),v()}})}}var ru=0;function Sg(e){return(0,k.useMemo)(()=>{if(e!=null)return ru++,ru},[e])}var Su=k.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:g,droppableContainers:m,dragOverlay:h,over:x,measuringConfiguration:v,scrollableAncestors:C,scrollableAncestorRects:b,windowRect:I}=vr(),L=(0,k.useContext)(pn),w=Sg(d?.id),P=Iu(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:h.rect,over:x,overlayNodeRect:h.rect,scrollableAncestors:C,scrollableAncestorRects:b,transform:L,windowRect:I}),M=Dl(f),S=Ig({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:v}),D=M?h.setRef:void 0;return k.default.createElement(hg,null,k.default.createElement(pg,{animation:S},d&&w?k.default.createElement(Cg,{key:w,id:d.id,ref:D,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:M,style:{zIndex:u,...r},transform:P},a):null))});var Ae=j(require("react"));function yu(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function yg(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function gn(e){return e!==null&&e>=0}function Rg(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function kg(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Ru=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=yu(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var xn={scaleX:1,scaleY:1},Ln=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...xn}:null}let i=Pg(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...xn}:r<a&&r>=l?{x:0,y:s.height+i,...xn}:{x:0,y:0,...xn}};function Pg(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var ku="Sortable",Pu=Ae.default.createContext({activeIndex:-1,containerId:ku,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ru,disabled:{draggable:!1,droppable:!1}});function bn(e){let{children:t,id:a,items:o,strategy:r=Ru,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=vr(),d=Ha(ku,a),f=s.rect!==null,p=(0,Ae.useMemo)(()=>o.map(L=>typeof L=="object"&&"id"in L?L.id:L),[o]),g=l!=null,m=l?p.indexOf(l.id):-1,h=u?p.indexOf(u.id):-1,x=(0,Ae.useRef)(p),v=!Rg(p,x.current),C=h!==-1&&m===-1||v,b=kg(n);It(()=>{v&&g&&c(p)},[v,p,g,c]),(0,Ae.useEffect)(()=>{x.current=p},[p]);let I=(0,Ae.useMemo)(()=>({activeIndex:m,containerId:d,disabled:b,disableTransforms:C,items:p,overIndex:h,useDragOverlay:f,sortedRects:yg(p,i),strategy:r}),[m,d,b.draggable,b.droppable,C,p,h,i,f,r]);return Ae.default.createElement(Pu.Provider,{value:I},t)}var Dg=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return yu(a,o,r).indexOf(t)},Mg=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Tg={duration:200,easing:"ease"},Du="transform",Ag=vt.Transition.toString({property:Du,duration:0,easing:"linear"}),Eg={roleDescription:"sortable"};function Og(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Ae.useState)(null),s=(0,Ae.useRef)(a);return It(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Ka(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Ae.useEffect)(()=>{n&&l(null)},[n]),n}function vn(e){let{animateLayoutChanges:t=Mg,attributes:a,disabled:o,data:r,getNewIndex:n=Dg,id:l,strategy:s,resizeObserverConfig:i,transition:u=Tg}=e,{items:c,containerId:d,activeIndex:f,disabled:p,disableTransforms:g,sortedRects:m,overIndex:h,useDragOverlay:x,strategy:v}=(0,Ae.useContext)(Pu),C=Fg(o,p),b=c.indexOf(l),I=(0,Ae.useMemo)(()=>({sortable:{containerId:d,index:b,items:c},...r}),[d,r,b,c]),L=(0,Ae.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:w,node:P,isOver:M,setNodeRef:S}=hn({id:l,data:I,disabled:C.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...i}}),{active:D,activatorEvent:T,activeNodeRect:_,attributes:y,setNodeRef:H,listeners:q,isDragging:V,over:W,setActivatorNodeRef:K,transform:z}=wu({id:l,data:I,attributes:{...Eg,...a},disabled:C.draggable}),ie=Ui(S,H),J=!!D,Ce=J&&!g&&gn(f)&&gn(h),B=!x&&V,Q=B&&Ce?z:null,be=Ce?Q??(s??v)({rects:m,activeNodeRect:_,activeIndex:f,overIndex:h,index:b}):null,Ie=gn(f)&&gn(h)?n({id:l,items:c,activeIndex:f,overIndex:h}):b,xe=D?.id,N=(0,Ae.useRef)({activeId:xe,items:c,newIndex:Ie,containerId:d}),ve=c!==N.current.items,ue=t({active:D,containerId:d,isDragging:V,isSorting:J,id:l,index:b,items:c,newIndex:N.current.newIndex,previousItems:N.current.items,previousContainerId:N.current.containerId,transition:u,wasDragging:N.current.activeId!=null}),Z=Og({disabled:!ue,index:b,node:P,rect:w});return(0,Ae.useEffect)(()=>{J&&N.current.newIndex!==Ie&&(N.current.newIndex=Ie),d!==N.current.containerId&&(N.current.containerId=d),c!==N.current.items&&(N.current.items=c)},[J,Ie,d,c]),(0,Ae.useEffect)(()=>{if(xe===N.current.activeId)return;if(xe!=null&&N.current.activeId==null){N.current.activeId=xe;return}let oe=setTimeout(()=>{N.current.activeId=xe},50);return()=>clearTimeout(oe)},[xe]),{active:D,activeIndex:f,attributes:y,data:I,rect:w,index:b,newIndex:Ie,items:c,isOver:M,isSorting:J,isDragging:V,listeners:q,node:P,overIndex:h,over:W,setNodeRef:ie,setActivatorNodeRef:K,setDroppableNodeRef:S,setDraggableNodeRef:H,transform:Z??be,transition:ee()};function ee(){if(Z||ve&&N.current.newIndex===b)return Ag;if(!(B&&!To(T)||!u)&&(J||ue))return vt.Transition.toString({...u,property:Du})}}function Fg(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Cn(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Bg=[fe.Down,fe.Right,fe.Up,fe.Left],In=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Bg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case fe.Down:o.top<f.top&&i.push(d);break;case fe.Up:o.top>f.top&&i.push(d);break;case fe.Left:o.left>f.left&&i.push(d);break;case fe.Right:o.left<f.left&&i.push(d);break}});let u=cn({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Cr(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,g=f?.node.current;if(g&&p&&d&&f){let h=Lr(g).some((L,w)=>s[w]!==L),x=Mu(d,f),v=Ng(d,f),C=h||!x?{x:0,y:0}:{x:v?o.width-p.width:0,y:v?o.height-p.height:0},b={x:p.left,y:p.top};return C.x&&C.y?b:qa(b,C)}}}};function Mu(e,t){return!Cn(e)||!Cn(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Ng(e,t){return!Cn(e)||!Cn(t)||!Mu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var wn=require("react");var Tu=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Au(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Tu(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var Eu=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var Ou=e=>{let t=Eu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var wr=require("react");var Ir=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var Ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ml(e){return e!=null}function Fu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??Ia.width,n=e.size??e.height??Ia.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?Ir(...i):Ir("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??Ia["stroke-width"])*Number(e.size??e.width??Ia.width)/Number(t.size??t.width??Ia.width):t.strokeWidth??Ia["stroke-width"];return["svg",{...Object.entries(Ia).reduce((f,[p,g])=>(f[o(p)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&Ml(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&Ml(t.width)&&{[o("width")]:t.width},..."height"in t&&Ml(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,g,m]=f,h=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return m?[p,h,m]:[p,h]})]}function Bu(e,t={}){return Fu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var Nu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Eo=require("react");var _g=(0,Eo.createContext)({});var _u=()=>(0,Eo.useContext)(_g);var Hu=(0,wr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:m=!1,nonScalingStroke:h=!1,color:x="currentColor",className:v=""}=_u()??{},C=!!i||Nu(d),[b,I,L=[]]=Bu(c,{color:e??x,width:a??t??p,height:o??t??p,strokeWidth:r??g,absoluteStrokeWidth:n??m,nonScalingStroke:l??h,className:Ir(v,s),hasA11yProp:C,attributes:d});return(0,wr.createElement)(b,{ref:f,...I},[...L.map(([w,P])=>(0,wr.createElement)(w,P)),...Array.isArray(i)?i:[i]])});function me(e,t=[],a=[]){let o=typeof e=="string"?Au(e,t,a):e,r=(0,wn.forwardRef)(({className:n,...l},s)=>(0,wn.createElement)(Hu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=Ou(o.name)),r}var Uu={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Uu.node;var ja=me(Uu);var qu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};qu.node;var mt=me(qu);var Wu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Wu.node;var Oo=me(Wu);var zu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};zu.node;var Sr=me(zu);var Vu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Vu.node;var wa=me(Vu);var Gu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};Gu.node;var yr=me(Gu);var Xu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};Xu.node;var Rr=me(Xu);var Ku={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Ku.node;var la=me(Ku);var ju={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};ju.node;var kr=me(ju);var $u={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};$u.node;var $a=me($u);var Yu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Yu.node;var Pr=me(Yu);var Zu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Zu.node;var Dr=me(Zu);var Ju={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};Ju.node;var Mr=me(Ju);var Qu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Qu.node;var Fo=me(Qu);var ed={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};ed.node;var Tr=me(ed);var td={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};td.node;var Tt=me(td);var ad={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ad.node;var sa=me(ad);var Ue=require("react");var fm=require("@deepseek-ai/dsh-client-ui-primitives");var hd=j(require("react"),1);var tt=j(require("react"),1);var od=j(require("react"),1),Hg=Object.defineProperty,Al=(e,t)=>Hg(e,"name",{value:t,configurable:!0});function Tl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Al(Tl,"setRef");function rd(...e){return t=>{let a=!1,o=e.map(r=>{let n=Tl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():Tl(e[r],null)}}}}Al(rd,"composeRefs");function re(...e){return od.useCallback(rd(...e),e)}Al(re,"useComposedRefs");var Ug=Object.defineProperty,wt=(e,t)=>Ug(e,"name",{value:t,configurable:!0});function nt(e){let t=tt.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];r=cd(r),tt.Children.forEach(r,f=>{if(ud(f)){s=!0;let p=f,g="child"in p.props?p.props.child:p.props.children;for(;Ol(g)&&typeof Sn=="function";)g=Sn(g._payload);l=qg(p,g),i.push(l?.props?.children)}else i.push(f)}),l?l=tt.cloneElement(l,void 0,i):!s&&tt.Children.count(r)===1&&tt.isValidElement(r)&&(l=r);let u=l?id(l):void 0,c=re(o,u);if(!l){if(r||r===0)throw new Error(s?Vg(e):zg(e));return r}let d=sd(n,l.props??{});return l.type!==tt.Fragment&&(d.ref=o?c:u),tt.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}wt(nt,"createSlot");var nd=nt("Slot"),ld=Symbol.for("radix.slottable");function El(e){let t=wt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=ld,t}wt(El,"createSlottable");var qg=wt((e,t)=>"child"in e.props?tt.isValidElement(t)?tt.cloneElement(t,void 0,e.props.children(t.props.children)):null:tt.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function sd(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=fd(n,r))}return{...e,...a}}wt(sd,"mergeProps");function id(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}wt(id,"getElementRef");function ud(e){return tt.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ld}wt(ud,"isSlottable");var Wg=Symbol.for("react.lazy");function Ol(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Wg&&"_payload"in e&&dd(e._payload)}wt(Ol,"isLazyComponent");function dd(e){return typeof e=="object"&&e!==null&&"then"in e}wt(dd,"isPromiseLike");function cd(e){let t=e;for(;Ol(t)&&typeof Sn=="function";)t=Sn(t._payload);return t}wt(cd,"useUnwrappedLazy");function fd(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}wt(fd,"concatAriaDescribedby");var zg=wt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Vg=wt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Sn=tt[" use ".trim().toString()];function pd(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=pd(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function md(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=pd(e))&&(o&&(o+=" "),o+=t);return o}function ne(...e){return md(e)}var gd=require("react/jsx-runtime");function Gg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ne("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var he=hd.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,gd.jsx)(o?nd:"button",{className:Gg({variant:t,size:a,className:e}),ref:n,...r}));he.displayName="Button";var Wr=j(require("react"),1);var ye=j(require("react"),1);var Xg=Object.defineProperty,Bo=(e,t)=>Xg(e,"name",{value:t,configurable:!0}),xd=!!(typeof window<"u"&&window.document&&window.document.createElement);function X(e,t,{checkForDefaultPrevented:a=!0}={}){return Bo(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}Bo(X,"composeEventHandlers");function Kg(e){if(!xd)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}Bo(Kg,"getOwnerWindow");function Fl(e){if(!xd)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}Bo(Fl,"getOwnerDocument");function Cd(e,t=!1){let{activeElement:a}=Fl(e);if(!a?.nodeName)return null;if(Ld(a)&&a.contentDocument)return Cd(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Fl(a).getElementById(o);if(r)return r}}return a}Bo(Cd,"getActiveElement");function Ld(e){return e.tagName==="IFRAME"}Bo(Ld,"isFrame");var Et=j(require("react"),1),Bl=require("react/jsx-runtime"),jg=Object.defineProperty,At=(e,t)=>jg(e,"name",{value:t,configurable:!0});function $g(e,t){let a=Et.createContext(t);a.displayName=e+"Context";let o=At(n=>{let{children:l,...s}=n,i=Et.useMemo(()=>s,Object.values(s));return(0,Bl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=Et.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return At(r,"useContext"),[o,r]}At($g,"createContext");function We(e,t=[]){let a=[];function o(n,l){let s=Et.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=At(d=>{let{scope:f,children:p,...g}=d,m=f?.[e]?.[i]||s,h=Et.useMemo(()=>g,Object.values(g));return(0,Bl.jsx)(m.Provider,{value:h,children:p})},"Provider");u.displayName=n+"Provider";function c(d,f,p={}){let{optional:g=!1}=p,m=f?.[e]?.[i]||s,h=Et.useContext(m);if(h)return h;if(l!==void 0)return l;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return At(c,"useContext"),[u,c]}At(o,"createContext");let r=At(()=>{let n=a.map(l=>Et.createContext(l));return At(function(s){let i=s?.[e]||n;return Et.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,bd(r,...t)]}At(We,"createContextScope");function bd(...e){let t=e[0];if(e.length===1)return t;let a=At(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return At(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return Et.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}At(bd,"composeContextScopes");var Nl=j(require("react"),1);var vd=j(require("react"),1),de=globalThis?.document?vd.useLayoutEffect:()=>{};var Yg=Object.defineProperty,Zg=(e,t)=>Yg(e,"name",{value:t,configurable:!0}),Jg=Nl[" useId ".trim().toString()]||(()=>{}),Qg=0;function ut(e){let[t,a]=Nl.useState(Jg());return de(()=>{e||a(o=>o??String(Qg++))},[e]),e||(t?`radix-${t}`:"")}Zg(ut,"useId");var Ot=j(require("react"),1);var yn=!1;var Ht=j(require("react"),1);var No=j(require("react"),1),ex=Object.defineProperty,tx=(e,t)=>ex(e,"name",{value:t,configurable:!0}),Id=No[" useEffectEvent ".trim().toString()],wd=No[" useInsertionEffect ".trim().toString()];function _l(e){if(typeof Id=="function")return Id(e);let t=No.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof wd=="function"?wd(()=>{t.current=e}):de(()=>{t.current=e}),No.useMemo(()=>((...a)=>t.current?.(...a)),[])}tx(_l,"useEffectEvent");var ax=Object.defineProperty,Ar=(e,t)=>ax(e,"name",{value:t,configurable:!0}),ox=Ot[" useInsertionEffect ".trim().toString()]||de;function Ft({prop:e,defaultProp:t,onChange:a=Ar(()=>{},"onChange"),caller:o}){let[r,n,l]=yd({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(yn){let c=Ot.useRef(e!==void 0);Ot.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=Ot.useCallback(c=>{if(s){let d=Rd(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}Ar(Ft,"useControllableState");function yd({defaultProp:e,onChange:t}){let[a,o]=Ot.useState(e),r=Ot.useRef(a),n=Ot.useRef(t);return ox(()=>{n.current=t},[t]),Ot.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Ar(yd,"useUncontrolledState");function Rd(e){return typeof e=="function"}Ar(Rd,"isFunction");var Sd=Symbol("RADIX:SYNC_STATE");function rx(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=_l(l);if(yn){let h=Ht.useRef(r!==void 0);Ht.useEffect(()=>{let x=h.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=Ht.useReducer((h,x)=>{if(x.type===Sd)return{...h,state:x.state};let v=e(h,x);return i&&!Object.is(v.state,h.state)&&u(v.state),v},...c),p=d.state,g=Ht.useRef(p);Ht.useEffect(()=>{g.current!==p&&(g.current=p,i||u(p))},[p,g,i]);let m=Ht.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return Ht.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:Sd,state:r})},[r,d.state,i]),[m,f]}Ar(rx,"useControllableStateReducer");var we=j(require("react"),1);var kd=j(require("react"),1),Pd=j(require("react-dom"),1);var Dd=require("react/jsx-runtime"),nx=Object.defineProperty,lx=(e,t)=>nx(e,"name",{value:t,configurable:!0}),sx=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],se=sx.reduce((e,t)=>{let a=nt(`Primitive.${t}`),o=kd.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Dd.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Er(e,t){e&&Pd.flushSync(()=>e.dispatchEvent(t))}lx(Er,"dispatchDiscreteCustomEvent");var Or=j(require("react"),1),ix=Object.defineProperty,ux=(e,t)=>ix(e,"name",{value:t,configurable:!0}),Md=Or[" useInsertionEffect ".trim().toString()];function Ke(e){let t=Or.useRef(e);return typeof Md=="function"?Md(()=>{t.current=e}):de(()=>{t.current=e}),Or.useMemo(()=>((...a)=>t.current?.(...a)),[])}ux(Ke,"useCallbackRef");var Ad=require("react/jsx-runtime"),dx=Object.defineProperty,je=(e,t)=>dx(e,"name",{value:t,configurable:!0}),Hl="dismissableLayer.update",cx="dismissableLayer.pointerDownOutside",fx="dismissableLayer.focusOutside",Td,Ed=we.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Sa=we.forwardRef(je(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=we.useContext(Ed),[f,p]=we.useState(null),g=f?.ownerDocument??globalThis?.document,[,m]=we.useState({}),h=re(a,p),x=Array.from(d.layers),[v]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),C=v?x.indexOf(v):-1,b=f?x.indexOf(f):-1,I=d.layersWithOutsidePointerEventsDisabled.size>0,L=b>=C,w=we.useRef(!1),P=Od(T=>{l?.(T),i?.(T),T.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:w,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:we.useCallback(T=>{if(!(T instanceof Node))return!1;let _=[...d.branches].some(y=>y.contains(T));return L&&!_},[d.branches,L])}),M=Fd(T=>{if(r&&w.current)return;let _=T.target;[...d.branches].some(H=>H.contains(_))||(s?.(T),i?.(T),T.defaultPrevented||u?.())},g),S=f?b===x.length-1:!1,D=Ke(T=>{T.key==="Escape"&&(n?.(T),!T.defaultPrevented&&u&&(T.preventDefault(),u()))});return we.useEffect(()=>{if(S)return g.addEventListener("keydown",D,{capture:!0}),()=>g.removeEventListener("keydown",D,{capture:!0})},[g,S,D]),we.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Td=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Ul(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=Td))}},[f,g,o,d]),we.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Ul())},[f,d]),we.useEffect(()=>{let T=je(()=>m({}),"handleUpdate");return document.addEventListener(Hl,T),()=>document.removeEventListener(Hl,T)},[]),(0,Ad.jsx)(se.div,{...c,ref:h,style:{pointerEvents:I?L?"auto":"none":void 0,...t.style},onFocusCapture:X(t.onFocusCapture,M.onFocusCapture),onBlurCapture:X(t.onBlurCapture,M.onBlurCapture),onPointerDownCapture:X(t.onPointerDownCapture,P.onPointerDownCapture)})},"DismissableLayer"));function ql(){let e=we.useContext(Ed),[t,a]=we.useState(null);return we.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}je(ql,"useDismissableLayerSurface");var px=je(()=>!0,"IS_TRUE");function Od(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=px}=t,s=Ke(e),i=we.useRef(!1),u=we.useRef(!1),c=we.useRef(new Map),d=we.useRef(()=>{});return we.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}je(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}je(p,"isOutsideInteractionIntercepted");function g(C){if(!u.current)return;let b=C.target;b instanceof Node&&[...n].some(L=>L.contains(b))||c.current.set(C.type,!0),C.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}je(g,"handleInteractionCapture");function m(C){u.current&&c.current.set(C.type,!1)}je(m,"handleInteractionBubble");let h=je(C=>{if(C.target&&!i.current){let I=function(){a.removeEventListener("click",d.current);let w=p();f(),w||Wl(cx,s,L,{discrete:!0})};var b=I;if(je(I,"handleAndDispatchPointerDownOutsideEvent"),!l(C.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let L={originalEvent:C};u.current=!0,r.current=o&&C.button===0,c.current.clear(),!o||C.button!==0?I():(a.removeEventListener("click",d.current),d.current=I,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let C of x)a.addEventListener(C,g,!0),a.addEventListener(C,m);let v=window.setTimeout(()=>{a.addEventListener("pointerdown",h)},0);return()=>{window.clearTimeout(v),a.removeEventListener("pointerdown",h),a.removeEventListener("click",d.current);for(let C of x)a.removeEventListener(C,g,!0),a.removeEventListener(C,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:je(()=>i.current=!0,"onPointerDownCapture")}}je(Od,"usePointerDownOutside");function Fd(e,t=globalThis?.document){let a=Ke(e),o=we.useRef(!1);return we.useEffect(()=>{let r=je(n=>{n.target&&!o.current&&Wl(fx,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:je(()=>o.current=!0,"onFocusCapture"),onBlurCapture:je(()=>o.current=!1,"onBlurCapture")}}je(Fd,"useFocusOutside");function Ul(){let e=new CustomEvent(Hl);document.dispatchEvent(e)}je(Ul,"dispatchUpdate");function Wl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?Er(r,n):r.dispatchEvent(n)}je(Wl,"handleAndDispatchCustomEvent");var Me=j(require("react"),1);var Kl=require("react/jsx-runtime"),mx=Object.defineProperty,Be=(e,t)=>mx(e,"name",{value:t,configurable:!0}),zl="focusScope.autoFocusOnMount",Vl="focusScope.autoFocusOnUnmount",Bd={bubbles:!1,cancelable:!0},_o=Me.forwardRef(Be(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...i}=t,[u,c]=Me.useState(null),d=Ke(l),f=Ke(s),p=Me.useRef(null),g=re(a,c),m=Me.useRef(n);Me.useEffect(()=>{m.current=n});let h=Me.useCallback(C=>C?u?.contains(C)?!0:!!m.current?.some(b=>b.contains(C)):!1,[u]),x=Me.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Me.useEffect(()=>{if(r){let L=function(S){if(x.paused||!u)return;let D=S.target;h(D)?p.current=D:ia(p.current,{select:!0})},w=function(S){if(x.paused||!u)return;let D=S.relatedTarget;D!==null&&(h(D)||ia(p.current,{select:!0}))},P=function(S){if(document.activeElement===document.body)for(let T of S)T.removedNodes.length>0&&ia(u)};var C=L,b=w,I=P;Be(L,"handleFocusIn"),Be(w,"handleFocusOut"),Be(P,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",w);let M=new MutationObserver(P);return u&&M.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",w),M.disconnect()}}},[r,u,x.paused,h]),Me.useEffect(()=>{if(u){Nd.add(x);let C=document.activeElement;if(!u.contains(C)){let I=new CustomEvent(zl,Bd);u.addEventListener(zl,d),u.dispatchEvent(I),I.defaultPrevented||(Hd(Vd(jl(u)),{select:!0}),document.activeElement===C&&ia(u))}return()=>{u.removeEventListener(zl,d);let I=u.ownerDocument,L=CustomEvent;setTimeout(()=>{let w=new L(Vl,Bd);u.addEventListener(Vl,f),u.dispatchEvent(w),w.defaultPrevented||ia(C??I.body,{select:!0}),u.removeEventListener(Vl,f),Nd.remove(x)},0)}}},[u,d,f,x]);let v=Me.useCallback(C=>{if(!o&&!r||x.paused)return;let b=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,I=document.activeElement;if(b&&I){let L=C.currentTarget,[w,P]=Ud(L);w&&P?!C.shiftKey&&I===P?(C.preventDefault(),o&&ia(w,{select:!0})):C.shiftKey&&I===w&&(C.preventDefault(),o&&ia(P,{select:!0})):I===L&&C.preventDefault()}},[o,r,x.paused]);return(0,Kl.jsx)(se.div,{tabIndex:-1,...i,ref:g,onKeyDown:v})},"FocusScope")),_d=Me.createContext(null);function Fr({registry:e,children:t}){return e?(0,Kl.jsx)(_d.Provider,{value:e,children:t}):t}Be(Fr,"FocusScopeBranchProvider");function Br(){let[e,t]=Me.useState([]),a=Me.useMemo(()=>({add:Be(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Be(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Be(Br,"useFocusScopeBranchRegistry");function Nr(e){let t=Me.useContext(_d);Me.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Be(Nr,"useFocusScopeBranch");function Hd(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(ia(o,{select:t}),document.activeElement!==a)return}Be(Hd,"focusFirst");function Ud(e){let t=jl(e),a=Gl(t,e),o=Gl(t.reverse(),e);return[a,o]}Be(Ud,"getTabbableEdges");function jl(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Be(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Be(jl,"getTabbableCandidates");function Gl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):qd(o,{upTo:t})))return o}Be(Gl,"findVisible");function qd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Be(qd,"isHidden");function Wd(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Be(Wd,"isSelectableInput");function ia(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Wd(e)&&t&&e.select()}}Be(ia,"focus");var Nd=zd();function zd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Xl(e,t),e.unshift(t)},remove(t){e=Xl(e,t),e[0]?.resume()}}}Be(zd,"createFocusScopesStack");function Xl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Be(Xl,"arrayRemove");function Vd(e){return e.filter(t=>t.tagName!=="A")}Be(Vd,"removeLinks");var Rn=j(require("react"),1),Gd=j(require("react-dom"),1);var Xd=require("react/jsx-runtime"),hx=Object.defineProperty,gx=(e,t)=>hx(e,"name",{value:t,configurable:!0}),ya=Rn.forwardRef(gx(function(t,a){let{container:o,...r}=t,[n,l]=Rn.useState(!1);de(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Gd.createPortal((0,Xd.jsx)(se.div,{...r,ref:a}),s):null},"Portal"));var at=j(require("react"),1);var Kd=j(require("react"),1),xx=Object.defineProperty,ua=(e,t)=>xx(e,"name",{value:t,configurable:!0});function jd(e,t){return Kd.useReducer((a,o)=>t[a][o]??a,e)}ua(jd,"useStateMachine");var Bt=ua(e=>{let{present:t,children:a}=e,o=$d(t),r=typeof a=="function"?a({present:o.isPresent}):at.Children.only(a),n=Yd(o.ref,Zd(r));return typeof a=="function"||o.isPresent?at.cloneElement(r,{ref:n}):null},"Presence");function $d(e){let[t,a]=at.useState(),o=at.useRef(null),r=at.useRef(e),n=at.useRef("none"),l=at.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=jd(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return at.useEffect(()=>{i==="mounted"?(n.current=l.current??Ho(o.current),l.current=void 0):n.current="none"},[i]),de(()=>{let c=o.current,d=r.current;if(d!==e){let p=n.current,g=Ho(c);e?(l.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&p!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),de(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=ua(g=>{let h=Ho(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&h&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),p=ua(g=>{g.target===t&&(n.current=Ho(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:at.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=Ho(d)}else o.current=null;a(c)},[])}}ua($d,"usePresence");function $l(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ua($l,"setRef");function Yd(...e){let t=at.useRef(e);return t.current=e,at.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=$l(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():$l(o[l],null)}}},[])}ua(Yd,"useStableComposedRefs");function Ho(e){return e?.animationName||"none"}ua(Ho,"getAnimationName");function Zd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}ua(Zd,"getElementRef");var Jd=j(require("react"),1),Cx=Object.defineProperty,Zl=(e,t)=>Cx(e,"name",{value:t,configurable:!0}),kn=0,Uo=null;function Lx(e){return Ra(),e.children}Zl(Lx,"FocusGuards");function Ra(){Jd.useEffect(()=>{Uo||(Uo={start:Yl(),end:Yl()});let{start:e,end:t}=Uo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),kn++,()=>{kn===1&&(Uo?.start.remove(),Uo?.end.remove(),Uo=null),kn=Math.max(0,kn-1)}},[])}Zl(Ra,"useFocusGuards");function Yl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Zl(Yl,"createFocusGuard");var ht=function(){return ht=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},ht.apply(this,arguments)};function Pn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Qd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var En=j(require("react"));var lt=j(require("react"));var Ya="right-scroll-bar-position",Za="width-before-scroll-bar",Jl="with-scroll-bars-hidden",Ql="--removed-body-scroll-bar-size";function Dn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var ec=require("react");function tc(e,t){var a=(0,ec.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Mn=j(require("react"));var bx=typeof window<"u"?Mn.useLayoutEffect:Mn.useEffect,ac=new WeakMap;function es(e,t){var a=tc(t||null,function(o){return e.forEach(function(r){return Dn(r,o)})});return bx(function(){var o=ac.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Dn(s,null)}),n.forEach(function(s){r.has(s)||Dn(s,l)})}ac.set(a,e)},[e]),a}function vx(e){return e}function Ix(e,t){t===void 0&&(t=vx);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function ts(e){e===void 0&&(e={});var t=Ix(null);return t.options=ht({async:!0,ssr:!1},e),t}var oc=j(require("react")),rc=function(e){var t=e.sideCar,a=Pn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return oc.createElement(o,ht({},a))};rc.isSideCarExport=!0;function as(e,t){return e.useMedium(t),rc}var Tn=ts();var os=function(){},_r=lt.forwardRef(function(e,t){var a=lt.useRef(null),o=lt.useState({onScrollCapture:os,onWheelCapture:os,onTouchMoveCapture:os}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,g=e.noIsolation,m=e.inert,h=e.allowPinchZoom,x=e.as,v=x===void 0?"div":x,C=e.gapMode,b=Pn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=f,L=es([a,t]),w=ht(ht({},b),r);return lt.createElement(lt.Fragment,null,c&&lt.createElement(I,{sideCar:Tn,removeScrollBar:u,shards:d,noRelative:p,noIsolation:g,inert:m,setCallbacks:n,allowPinchZoom:!!h,lockRef:a,gapMode:C}),l?lt.cloneElement(lt.Children.only(s),ht(ht({},w),{ref:L})):lt.createElement(v,ht({},w,{className:i,ref:L}),s))});_r.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};_r.classNames={fullWidth:Za,zeroRight:Ya};var ke=j(require("react"));var Wo=j(require("react"));var sc=j(require("react"));var nc;var lc=function(){if(nc)return nc;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function wx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=lc();return t&&e.setAttribute("nonce",t),e}function Sx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function yx(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var rs=function(){var e=0,t=null;return{add:function(a){e==0&&(t=wx())&&(Sx(t,a),yx(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var ns=function(){var e=rs();return function(t,a){sc.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var Hr=function(){var e=ns(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Rx={left:0,top:0,right:0,gap:0},ls=function(e){return parseInt(e||"",10)||0},kx=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[ls(a),ls(o),ls(r)]},ss=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Rx;var t=kx(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Px=Hr(),qo="data-scroll-locked",Dx=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Jl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(qo,`] {
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
  
  .`).concat(Ya,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Za,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ya," .").concat(Ya,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Za," .").concat(Za,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(qo,`] {
    `).concat(Ql,": ").concat(s,`px;
  }
`)},ic=function(){var e=parseInt(document.body.getAttribute(qo)||"0",10);return isFinite(e)?e:0},Mx=function(){Wo.useEffect(function(){return document.body.setAttribute(qo,(ic()+1).toString()),function(){var e=ic()-1;e<=0?document.body.removeAttribute(qo):document.body.setAttribute(qo,e.toString())}},[])},is=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Mx();var n=Wo.useMemo(function(){return ss(r)},[r]);return Wo.createElement(Px,{styles:Dx(n,!t,r,a?"":"!important")})};var us=!1;if(typeof window<"u")try{Ur=Object.defineProperty({},"passive",{get:function(){return us=!0,!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{us=!1}var Ur,Ja=us?{passive:!1}:!1;var Tx=function(e){return e.tagName==="TEXTAREA"},uc=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Tx(e)&&a[t]==="visible")},Ax=function(e){return uc(e,"overflowY")},Ex=function(e){return uc(e,"overflowX")},ds=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=dc(e,o);if(r){var n=cc(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Ox=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Fx=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},dc=function(e,t){return e==="v"?Ax(t):Ex(t)},cc=function(e,t){return e==="v"?Ox(t):Fx(t)},Bx=function(e,t){return e==="h"&&t==="rtl"?-1:1},fc=function(e,t,a,o,r){var n=Bx(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var p=cc(e,s),g=p[0],m=p[1],h=p[2],x=m-h-n*g;(g||x)&&dc(e,s)&&(d+=x,f+=g);var v=s.parentNode;s=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var An=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},pc=function(e){return[e.deltaX,e.deltaY]},mc=function(e){return e&&"current"in e?e.current:e},Nx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},_x=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Hx=0,zo=[];function hc(e){var t=ke.useRef([]),a=ke.useRef([0,0]),o=ke.useRef(),r=ke.useState(Hx++)[0],n=ke.useState(Hr)[0],l=ke.useRef(e);ke.useEffect(function(){l.current=e},[e]),ke.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=Qd([e.lockRef.current],(e.shards||[]).map(mc),!0).filter(Boolean);return m.forEach(function(h){return h.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=ke.useCallback(function(m,h){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var x=An(m),v=a.current,C="deltaX"in m?m.deltaX:v[0]-x[0],b="deltaY"in m?m.deltaY:v[1]-x[1],I,L=m.target,w=Math.abs(C)>Math.abs(b)?"h":"v";if("touches"in m&&w==="h"&&L.type==="range")return!1;var P=window.getSelection(),M=P&&P.anchorNode,S=M?M===L||M.contains(L):!1;if(S)return!1;var D=ds(w,L);if(!D)return!0;if(D?I=w:(I=w==="v"?"h":"v",D=ds(w,L)),!D)return!1;if(!o.current&&"changedTouches"in m&&(C||b)&&(o.current=I),!I)return!0;var T=o.current||I;return fc(T,h,m,T==="h"?C:b,!0)},[]),i=ke.useCallback(function(m){var h=m;if(!(!zo.length||zo[zo.length-1]!==n)){var x="deltaY"in h?pc(h):An(h),v=t.current.filter(function(I){return I.name===h.type&&(I.target===h.target||h.target===I.shadowParent)&&Nx(I.delta,x)})[0];if(v&&v.should){h.cancelable&&h.preventDefault();return}if(!v){var C=(l.current.shards||[]).map(mc).filter(Boolean).filter(function(I){return I.contains(h.target)}),b=C.length>0?s(h,C[0]):!l.current.noIsolation;b&&h.cancelable&&h.preventDefault()}}},[]),u=ke.useCallback(function(m,h,x,v){var C={name:m,delta:h,target:x,should:v,shadowParent:Ux(x)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(b){return b!==C})},1)},[]),c=ke.useCallback(function(m){a.current=An(m),o.current=void 0},[]),d=ke.useCallback(function(m){u(m.type,pc(m),m.target,s(m,e.lockRef.current))},[]),f=ke.useCallback(function(m){u(m.type,An(m),m.target,s(m,e.lockRef.current))},[]);ke.useEffect(function(){return zo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ja),document.addEventListener("touchmove",i,Ja),document.addEventListener("touchstart",c,Ja),function(){zo=zo.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,Ja),document.removeEventListener("touchmove",i,Ja),document.removeEventListener("touchstart",c,Ja)}},[]);var p=e.removeScrollBar,g=e.inert;return ke.createElement(ke.Fragment,null,g?ke.createElement(n,{styles:_x(r)}):null,p?ke.createElement(is,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ux(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var gc=as(Tn,hc);var xc=En.forwardRef(function(e,t){return En.createElement(_r,ht({},e,{ref:t,sideCar:gc}))});xc.classNames=_r.classNames;var Qa=xc;var qx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Vo=new WeakMap,On=new WeakMap,Fn={},cs=0,Cc=function(e){return e&&(e.host||Cc(e.parentNode))},Wx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Cc(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},zx=function(e,t,a,o){var r=Wx(t,Array.isArray(e)?e:[e]);Fn[a]||(Fn[a]=new WeakMap);var n=Fn[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(o),g=p!==null&&p!=="false",m=(Vo.get(f)||0)+1,h=(n.get(f)||0)+1;Vo.set(f,m),n.set(f,h),l.push(f),m===1&&g&&On.set(f,!0),h===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),cs++,function(){l.forEach(function(d){var f=Vo.get(d)-1,p=n.get(d)-1;Vo.set(d,f),n.set(d,p),f||(On.has(d)||d.removeAttribute(o),On.delete(d)),p||d.removeAttribute(a)}),cs--,cs||(Vo=new WeakMap,Vo=new WeakMap,On=new WeakMap,Fn={})}},Go=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||qx(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),zx(o,r,a,"aria-hidden")):function(){return null}};var Ne=require("react/jsx-runtime"),Vx=Object.defineProperty,St=(e,t)=>Vx(e,"name",{value:t,configurable:!0}),ps="Dialog",[Lc,bS]=We(ps),[Gx,Jt]=Lc(ps),bc=St(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=ye.useRef(null),i=ye.useRef(null),{nodes:u,registry:c}=Br(),[d,f]=Ft({prop:o,defaultProp:r??!1,onChange:n,caller:ps}),[p,g]=ye.useState(0),[m,h]=ye.useState(0);return(0,Ne.jsx)(Gx,{scope:t,triggerRef:s,contentRef:i,contentId:ut(),titleId:ut(),descriptionId:ut(),titlePresent:p>0,descriptionPresent:m>0,setTitleCount:g,setDescriptionCount:h,open:d,onOpenChange:f,onOpenToggle:ye.useCallback(()=>f(x=>!x),[f]),modal:l,branchNodes:u,branchRegistry:c,children:a})},"Dialog");var vc="DialogPortal",[Xx,Ic]=Lc(vc,{forceMount:void 0}),wc=St(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Jt(vc,t);return(0,Ne.jsx)(Xx,{scope:t,forceMount:a,children:ye.Children.map(o,l=>(0,Ne.jsx)(Bt,{present:a||n.open,children:(0,Ne.jsx)(ya,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),fs="DialogOverlay",ms=ye.forwardRef(St(function(t,a){let o=Ic(fs,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Jt(fs,t.__scopeDialog);return l.modal?(0,Ne.jsx)(Bt,{present:r||l.open,children:(0,Ne.jsx)(jx,{...n,ref:a})}):null},"DialogOverlay")),Kx=nt("DialogOverlay.RemoveScroll"),jx=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=Jt(fs,o),l=ql(),s=re(a,l);return(0,Ne.jsx)(Qa,{as:Kx,allowPinchZoom:!0,shards:ye.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,Ne.jsx)(se.div,{"data-state":Cs(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),qr="DialogContent",hs=ye.forwardRef(St(function(t,a){let o=Ic(qr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Jt(qr,t.__scopeDialog);return(0,Ne.jsx)(Bt,{present:r||l.open,children:l.modal?(0,Ne.jsx)($x,{...n,ref:a}):(0,Ne.jsx)(Yx,{...n,ref:a})})},"DialogContent")),$x=ye.forwardRef(St(function(t,a){let o=Jt(qr,t.__scopeDialog),r=ye.useRef(null),n=re(a,o.contentRef,r);return ye.useEffect(()=>{let l=r.current;if(l)return Go(l)},[]),(0,Ne.jsx)(Sc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:X(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:X(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:X(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Yx=ye.forwardRef(St(function(t,a){let o=Jt(qr,t.__scopeDialog),r=ye.useRef(!1),n=ye.useRef(!1);return(0,Ne.jsx)(Sc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Sc=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:i,...u}=t,c=Jt(qr,o);return Ra(),(0,Ne.jsx)(Fr,{registry:c.branchRegistry,children:(0,Ne.jsx)(_o,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Ne.jsx)(Sa,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Rc(s,c.descriptionId):s,"data-state":Cs(c.open),...u,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),gs=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=Jt("DialogTitle",o),{setTitleCount:l}=n;return de(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ne.jsx)(se.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),xs=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=Jt("DialogDescription",o),{setDescriptionCount:l}=n;return de(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ne.jsx)(se.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Zx="DialogClose",yc=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=Jt(Zx,o);return(0,Ne.jsx)(se.button,{type:"button",...r,ref:a,onClick:X(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Rc(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}St(Rc,"concatAriaDescribedby");function Cs(e){return e?"open":"closed"}St(Cs,"getState");var Pc=require("react"),Ls="dsh-kanban",Dc={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldDueDate:"\u622A\u6B62\u65E5\u671F",fieldCompletedDate:"\u5B8C\u6210\u65E5\u671F",completedDateUnknown:"\u672A\u77E5",completedDateUnknownHint:"\u8FD9\u5F20\u5361\u7247\u6CA1\u6709\u5B8C\u6210\u65F6\u95F4\u8BB0\u5F55\u3002",today:"\u4ECA\u5929",tomorrow:"\u660E\u5929",nextWeek:"\u4E00\u5468\u540E",clearDate:"\u6E05\u9664\u65E5\u671F",dueToday:"\u4ECA\u5929\u5230\u671F",overdue:"\u5DF2\u903E\u671F",overdueDays:"\u5DF2\u903E\u671F {days} \u5929",shortDate:"{month}\u6708{day}\u65E5",yearDate:"{year}\u5E74{month}\u6708{day}\u65E5",dueDateFilter:"\u6309\u622A\u6B62\u65E5\u671F\u7B5B\u9009",completedColumn:"\u5B8C\u6210\u5217",noCompletedColumn:"\u672A\u8BBE\u7F6E",completedColumnHint:"\u79FB\u5165\u6B64\u5217\u7684\u4EFB\u52A1\u89C6\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u8BA1\u5165\u5230\u671F\u548C\u903E\u671F\u7B5B\u9009\u3002\u66F4\u6362\u5B8C\u6210\u5217\u540E\uFF0C\u65B0\u5B8C\u6210\u5217\u4E2D\u5DF2\u6709\u5361\u7247\u7684\u5B8C\u6210\u65E5\u671F\u5C06\u663E\u793A\u4E3A\u672A\u77E5\u3002",completed:"\u5DF2\u5B8C\u6210",incomplete:"\u672A\u5B8C\u6210",completionStatus:"\u5B8C\u6210\u72B6\u6001",feedback:"\u53CD\u9988\u4E0E\u5EFA\u8BAE \xB7 GitHub",actDueDate:"\u622A\u6B62\u65E5\u671F {from} \u2192 {to}",actCompletedColumn:"\u5B8C\u6210\u5217 {from} \u2192 {to}",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u52A8\u5DE6\u4FA7\u8C03\u6574\u987A\u5E8F\uFF0C\u540D\u79F0\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLists:"\u770B\u677F\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u70B9\u51FB\u540D\u79F0\u6216\u8272\u70B9\u7F16\u8F91\uFF0C\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLabels:"\u4EFB\u52A1\u6807\u7B7E",noLabelsHint:"\u6682\u65E0\u6807\u7B7E\uFF0C\u5728\u4E0B\u65B9\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u3002",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Qx={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldDueDate:"Due date",fieldCompletedDate:"Completed at",completedDateUnknown:"Unknown",completedDateUnknownHint:"No completion time was recorded for this card.",today:"Today",tomorrow:"Tomorrow",nextWeek:"In one week",clearDate:"Clear date",dueToday:"Due today",overdue:"Overdue",overdueDays:"Overdue by {days} days",shortDate:"{month}/{day}",yearDate:"{year}/{month}/{day}",dueDateFilter:"Filter by due date",completedColumn:"Completed list",noCompletedColumn:"Not set",completedColumnHint:"Tasks in this list are complete and excluded from due and overdue filters. Changing this list resets completion dates; cards already in the new list will show an unknown completion date.",completed:"Completed",incomplete:"Incomplete",completionStatus:"Completion status",feedback:"Feedback \xB7 GitHub",actDueDate:"Due date {from} \u2192 {to}",actCompletedColumn:"Completed list {from} \u2192 {to}",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder. Name changes save automatically.",boardLists:"Board lists",newColumnPlaceholder:"New list name",labelEditDesc:"Edit a name or color. Changes save automatically.",boardLabels:"Task labels",noLabelsHint:"No labels yet. Add your first one below.",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},eo=null,bs=null;function Mc(e){let t=e.get("locale");t!==void 0&&(eo=t,e.effect(()=>t.register(Ls,"zh",Dc),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(Ls,"en",Qx),"dsh-kanban: English dictionary"),bs=t.bind(Ls))}function Ut(e){return bs?bs(e):Dc[e]??e}var eC=e=>eo&&typeof eo.subscribe=="function"?eo.subscribe(e):()=>{},kc=()=>eo&&typeof eo.getSnapshot=="function"?eo.getSnapshot():null;function _e(){return(0,Pc.useSyncExternalStore)(eC,kc,kc),Ut}var gt=require("react/jsx-runtime"),Xo=bc;var tC=wc;var Tc=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(ms,{ref:a,className:ne("kanban-portal kanban-dialog-overlay",e),...t}));Tc.displayName=ms.displayName;var to=Wr.forwardRef(({className:e,children:t,...a},o)=>{let r=_e();return(0,gt.jsxs)(tC,{children:[(0,gt.jsx)(Tc,{}),(0,gt.jsxs)(hs,{ref:o,className:ne("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,gt.jsxs)(yc,{className:"kanban-dialog-close",children:[(0,gt.jsx)(sa,{className:"kanban-dialog-close-icon"}),(0,gt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});to.displayName=hs.displayName;var ao=({className:e,...t})=>(0,gt.jsx)("div",{className:ne("kanban-dialog-header",e),...t});ao.displayName="DialogHeader";var oo=({className:e,...t})=>(0,gt.jsx)("div",{className:ne("kanban-dialog-body",e),...t});oo.displayName="DialogBody";var ro=({className:e,...t})=>(0,gt.jsx)("div",{className:ne("kanban-dialog-footer",e),...t});ro.displayName="DialogFooter";var no=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(gs,{ref:a,className:ne("kanban-dialog-title",e),...t}));no.displayName=gs.displayName;var zr=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(xs,{ref:a,className:ne("kanban-dialog-description",e),...t}));zr.displayName=xs.displayName;var Nt=j(require("react"),1);var ka=require("react/jsx-runtime"),Ec="dsh-kanban:card-drawer-width",aC=720,vs=420;function oC(){try{let e=Number(window.localStorage.getItem(Ec));if(Number.isFinite(e)&&e>0)return e}catch{}return aC}function Ac(e){try{window.localStorage.setItem(Ec,String(e))}catch{}}var Is=Nt.forwardRef(({className:e,children:t,id:a,style:o,...r},n)=>{let l=_e(),s=Nt.useId(),i=a??s,u=`${s}-resize-hint`,[c,d]=Nt.useState(oC),[f,p]=Nt.useState(()=>window.innerWidth),[g,m]=Nt.useState(!1),h=Nt.useRef(null),x=f<=600,v=Math.min(1e3,f-64),C=L=>Math.max(vs,Math.min(v,L)),b=x?f:C(c);Nt.useEffect(()=>{let L=()=>{h.current&&(d(h.current.preferredWidth),h.current=null,m(!1)),p(window.innerWidth)};return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);function I(L,w){let P=h.current;!P||P.pointerId!==L.pointerId||(h.current=null,m(!1),w?d(P.preferredWidth):Ac(P.lastWidth),L.currentTarget.hasPointerCapture(L.pointerId)&&L.currentTarget.releasePointerCapture(L.pointerId))}return(0,ka.jsxs)(to,{...r,ref:n,id:i,className:ne("kanban-drawer-content",e),style:{...o,width:b},"data-resizing":g||void 0,children:[t,!x&&(0,ka.jsxs)(ka.Fragment,{children:[(0,ka.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":l("resizeTaskDetails"),"aria-describedby":u,"aria-orientation":"vertical","aria-valuemin":vs,"aria-valuemax":v,"aria-valuenow":b,"aria-controls":i,title:l("resizeTaskDetailsHint"),onPointerDown:L=>{L.button!==0||h.current||(L.preventDefault(),L.currentTarget.focus(),L.currentTarget.setPointerCapture(L.pointerId),h.current={pointerId:L.pointerId,x:L.clientX,width:b,preferredWidth:c,lastWidth:b},m(!0))},onPointerMove:L=>{let w=h.current;if(!w||w.pointerId!==L.pointerId)return;let P=C(w.width+w.x-L.clientX);w.lastWidth=P,d(P)},onPointerUp:L=>I(L,!1),onPointerCancel:L=>I(L,!0),onLostPointerCapture:L=>I(L,!0),onKeyDown:L=>{let w;if(L.key==="ArrowLeft")w=C(b+32);else if(L.key==="ArrowRight")w=C(b-32);else if(L.key==="Home")w=vs;else if(L.key==="End")w=v;else return;L.preventDefault(),d(w),Ac(w)}}),(0,ka.jsx)("span",{id:u,className:"kanban-sr-only",children:l("resizeTaskDetailsHint")})]})]})});Is.displayName="DrawerContent";var Zr=j(require("react"),1);var Xt=j(require("react"),1);var te=j(require("react"),1);var qt=j(require("react"),1);var Nn=require("react/jsx-runtime"),Ve=j(require("react"),1);var Pa=require("react/jsx-runtime");var rC=Object.defineProperty,ze=(e,t)=>rC(e,"name",{value:t,configurable:!0});function lo(e){let t=e+"CollectionProvider",[a,o]=We(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=ze(m=>{let{scope:h,children:x}=m,v=qt.useRef(null),C=qt.useRef(new Map).current;return(0,Nn.jsx)(r,{scope:h,itemMap:C,collectionRef:v,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=nt(s),u=qt.forwardRef((m,h)=>{let{scope:x,children:v}=m,C=n(s,x),b=re(h,C.collectionRef);return(0,Nn.jsx)(i,{ref:b,children:v})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=nt(c),p=qt.forwardRef((m,h)=>{let{scope:x,children:v,...C}=m,b=qt.useRef(null),I=re(h,b),L=n(c,x);return qt.useEffect(()=>(L.itemMap.set(b,{ref:b,...C}),()=>{L.itemMap.delete(b)})),(0,Nn.jsx)(f,{[d]:"",ref:I,children:v})});p.displayName=c;function g(m){let h=n(e+"CollectionConsumer",m);return qt.useCallback(()=>{let v=h.collectionRef.current;if(!v)return[];let C=Array.from(v.querySelectorAll(`[${d}]`));return Array.from(h.itemMap.values()).sort((L,w)=>C.indexOf(L.ref.current)-C.indexOf(w.ref.current))},[h.collectionRef,h.itemMap])}return ze(g,"useCollection"),[{Provider:l,Slot:u,ItemSlot:p},g,o]}ze(lo,"createCollection");var Oc=new WeakMap,Ee,yt,Bn=(yt=class extends Map{constructor(a){super(a);Ni(this,Ee);gl(this,Ee,[...super.keys()]),Oc.set(this,!0)}set(a,o){return Oc.get(this)&&!this.has(a)&&et(this,Ee).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=ws(a),i=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?et(this,Ee).indexOf(o)===i:i===this.size)return this.set(o,r),this;let u=et(this,Ee).filter(d=>d!==o);u.splice(i,0,o);let c=u.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new yt(this);return n.insert(a,o,r),n}before(a){let o=et(this,Ee).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=et(this,Ee).indexOf(a);if(n===-1)return this;let l=et(this,Ee).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=et(this,Ee).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=et(this,Ee).indexOf(a);if(n===-1)return this;let l=et(this,Ee).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return gl(this,Ee,[]),super.clear()}delete(a){let o=super.delete(a);return o&&et(this,Ee).splice(et(this,Ee).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=_n(et(this,Ee),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=_n(et(this,Ee),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return et(this,Ee).indexOf(a)}keyAt(a){return _n(et(this,Ee),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new yt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new yt(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let i of this)l===0&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let i=this.entryAt(s);s===this.size-1&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new yt(o)}toReversed(){let a=new yt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new yt(o)}slice(a,o){let r=new yt;for(let n of et(this,Ee).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Ee=new WeakMap,ze(yt,"OrderedDict"),yt);function _n(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Fc(e,t);return a===-1?void 0:e[a]}ze(_n,"at");function Fc(e,t){let a=e.length,o=ws(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}ze(Fc,"toSafeIndex");function ws(e){return e!==e||e===0?0:Math.trunc(e)}ze(ws,"toSafeInteger");function nC(e){let t=e+"CollectionProvider",[a,o]=We(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let i=ze(({state:L,...w})=>L?(0,Pa.jsx)(c,{...w,state:L}):(0,Pa.jsx)(u,{...w}),"CollectionProvider");i.displayName=t;let u=ze(L=>{let w=v();return(0,Pa.jsx)(c,{...L,state:w})},"CollectionInit");u.displayName=e+"CollectionInit";let c=ze(L=>{let{scope:w,children:P,state:M}=L,S=Ve.useRef(null),[D,T]=Ve.useState(null),_=re(S,T),[y,H]=M,q=Ve.useRef(new Bn),V=Ve.useCallback(()=>{let W=q.current;return _c(W)||W.sort(Hn),W},[]);return Ve.useEffect(()=>{if(!D)return;let W=Hc(()=>{H(K=>{let z=K.toSorted(Hn);return z.some(([J],Ce)=>K.keyAt(Ce)!==J)?z:K})});return W.observe(D,{childList:!0,subtree:!0}),()=>{W.disconnect()}},[D,H]),(0,Pa.jsx)(r,{scope:w,collectionElementRef:_,collectionElementRefObject:S,getCollection:V,setCollection:H,registryRef:q,children:(0,Pa.jsx)(l,{scope:w,collectionElement:D,collection:y,children:P})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=nt(d),p=Ve.forwardRef((L,w)=>{let{scope:P,children:M}=L,S=n(d,P),D=re(w,S.collectionElementRef);return(0,Pa.jsx)(f,{ref:D,children:M})});p.displayName=d;let g=e+"CollectionItemSlot",m="data-radix-collection-item",h=nt(g),x=Ve.forwardRef((L,w)=>{let{scope:P,children:M,...S}=L,D=Ve.useRef(null),T=n(g,P),{setCollection:_,registryRef:y}=T,H=Ve.useRef(S);Bc(H.current,S)||(H.current=S);let q=H.current,V=Ve.useCallback(z=>{let ie=y.current;z?ie.set(z,{...H.current,element:z}):D.current&&ie.delete(D.current)},[y]),W=re(w,V,D);de(()=>{let z=D.current,ie=y.current;z&&ie.has(z)&&ie.set(z,{...q,element:z})},[q,y]);let K=Ve.useRef(null);return Ve.useEffect(()=>{let z=D.current,ie=K.current;(ie?.element??null)===z&&(!z||ie?.itemData===q)||(K.current=z?{element:z,itemData:q}:null,_(J=>{let Ce=new Bn(J);return ie&&ie.element!==z&&Ce.delete(ie.element),z&&Ce.set(z,{...q,element:z}),Ce.sort(Hn)}))}),Ve.useEffect(()=>()=>{let z=K.current;K.current=null,z&&_(ie=>{if(!ie.has(z.element))return ie;let J=new Bn(ie);return J.delete(z.element),J})},[_]),(0,Pa.jsx)(h,{[m]:"",ref:W,children:M})});x.displayName=g;function v(){return Ve.useState(new Bn)}ze(v,"useInitCollection");function C(L){let{collection:w}=s(e+"CollectionConsumer",L);return w}ze(C,"useCollection");function b(L){let{getCollection:w}=n(e+"CollectionConsumer",L);return w}return ze(b,"useGetCollection"),[{Provider:i,Slot:p,ItemSlot:x},{createCollectionScope:o,useCollection:C,useGetCollection:b,useInitCollection:v}]}ze(nC,"createCollection");function Bc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}ze(Bc,"shallowEqual");function Nc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}ze(Nc,"isElementPreceding");function _c(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}ze(_c,"isInDocumentOrder");function Hn(e,t){return!e[1].element||!t[1].element?0:Nc(e[1].element,t[1].element)?-1:1}ze(Hn,"sortByDocumentPosition");function Hc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}ze(Hc,"getChildListObserver");var Un=j(require("react"),1),iC=require("react/jsx-runtime"),lC=Object.defineProperty,sC=(e,t)=>lC(e,"name",{value:t,configurable:!0}),uC={LTR:"ltr",RTL:"rtl"},dC=Un.createContext(void 0);function so(e){let t=Un.useContext(dC);return e||t||uC.LTR}sC(so,"useDirection");var st=j(require("react"),1);var Wc=["top","right","bottom","left"];var Qt=Math.min,Wt=Math.max,Gr=Math.round,Xr=Math.floor,ea=e=>({x:e,y:e}),cC={left:"right",right:"left",bottom:"top",top:"bottom"};function Ss(e,t,a){return Wt(e,Qt(t,a))}function ta(e,t){return typeof e=="function"?e(t):e}function da(e){return e.split("-")[0]}function io(e){return e.split("-")[1]}function Wn(e){return e==="x"?"y":"x"}function zn(e){return e==="y"?"height":"width"}function zt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function Vn(e){return Wn(zt(e))}function zc(e,t,a){a===void 0&&(a=!1);let o=io(e),r=Vn(e),n=zn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Vr(l)),[l,Vr(l)]}function Vc(e){let t=Vr(e);return[qn(e),t,qn(t)]}function qn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Uc=["left","right"],qc=["right","left"],fC=["top","bottom"],pC=["bottom","top"];function mC(e,t,a){switch(e){case"top":case"bottom":return a?t?qc:Uc:t?Uc:qc;case"left":case"right":return t?fC:pC;default:return[]}}function Gc(e,t,a,o){let r=io(e),n=mC(da(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(qn)))),n}function Vr(e){let t=da(e);return cC[t]+e.slice(t.length)}function hC(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function ys(e){return typeof e!="number"?hC(e):{top:e,right:e,bottom:e,left:e}}function uo(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Xc(e,t,a){let{reference:o,floating:r}=e,n=zt(t),l=Vn(t),s=zn(l),i=da(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,p;switch(i){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}let g=io(t);return g&&(p[l]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),p}async function $c(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=ta(t,e),g=ys(p),h=s[f?d==="floating"?"reference":"floating":d],x=uo(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(h)))==null||a?h:h.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),v=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),b=await(n.isElement==null?void 0:n.isElement(C))&&await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1},I=uo(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:C,strategy:i}):v);return{top:(x.top-I.top+g.top)/b.y,bottom:(I.bottom-x.bottom+g.bottom)/b.y,left:(x.left-I.left+g.left)/b.x,right:(I.right-x.right+g.right)/b.x}}var gC=50,Yc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:$c},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Xc(u,o,i),f=o,p=0,g={};for(let m=0;m<n.length;m++){let h=n[m];if(!h)continue;let{name:x,fn:v}=h,{x:C,y:b,data:I,reset:L}=await v({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=C??c,d=b??d,g[x]={...g[x],...I},L&&p<gC&&(p++,typeof L=="object"&&(L.placement&&(f=L.placement),L.rects&&(u=L.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):L.rects),{x:c,y:d}=Xc(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},Zc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=ta(e,t)||{};if(u==null)return{};let d=ys(c),f={x:a,y:o},p=Vn(r),g=zn(p),m=await l.getDimensions(u),h=p==="y",x=h?"top":"left",v=h?"bottom":"right",C=h?"clientHeight":"clientWidth",b=n.reference[g]+n.reference[p]-f[p]-n.floating[g],I=f[p]-n.reference[p],L=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),w=L?L[C]:0;(!w||!await(l.isElement==null?void 0:l.isElement(L)))&&(w=s.floating[C]||n.floating[g]);let P=b/2-I/2,M=w/2-m[g]/2-1,S=Qt(d[x],M),D=Qt(d[v],M),T=w-m[g]-D,_=w/2-m[g]/2+P,y=Ss(S,_,T),H=!i.arrow&&io(r)!=null&&_!==y&&n.reference[g]/2-(_<S?S:D)-m[g]/2<0,q=H?_<S?_-S:_-T:0;return{[p]:f[p]+q,data:{[p]:y,centerOffset:_-y-q,...H&&{alignmentOffset:q}},reset:H}}});var Jc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...h}=ta(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=da(r),v=zt(s),C=da(s)===s,b=await(i.isRTL==null?void 0:i.isRTL(u.floating)),I=f||(C||!m?[Vr(s)]:Vc(s)),L=g!=="none";!f&&L&&I.push(...Gc(s,m,g,b));let w=[s,...I],P=await i.detectOverflow(t,h),M=[],S=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&M.push(P[x]),d){let y=zc(r,l,b);M.push(P[y[0]],P[y[1]])}if(S=[...S,{placement:r,overflows:M}],!M.every(y=>y<=0)){var D,T;let y=(((D=n.flip)==null?void 0:D.index)||0)+1,H=w[y];if(H&&(!(d==="alignment"?v!==zt(H):!1)||S.every(W=>zt(W.placement)===v?W.overflows[0]>0:!0)))return{data:{index:y,overflows:S},reset:{placement:H}};let q=(T=S.filter(V=>V.overflows[0]<=0).sort((V,W)=>V.overflows[1]-W.overflows[1])[0])==null?void 0:T.placement;if(!q)switch(p){case"bestFit":{var _;let V=(_=S.filter(W=>{if(L){let K=zt(W.placement);return K===v||K==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(K=>K>0).reduce((K,z)=>K+z,0)]).sort((W,K)=>W[1]-K[1])[0])==null?void 0:_[0];V&&(q=V);break}case"initialPlacement":q=s;break}if(r!==q)return{reset:{placement:q}}}return{}}}};function Kc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function jc(e){return Wc.some(t=>e[t]>=0)}var Qc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=ta(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Kc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:jc(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Kc(l,a.floating);return{data:{escapedOffsets:s,escaped:jc(s)}}}default:return{}}}}};var ef=new Set(["left","top"]);async function xC(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=da(a),s=io(a),i=zt(a)==="y",u=ef.has(l)?-1:1,c=n&&i?-1:1,d=ta(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(p=s==="end"?g*-1:g),i?{x:p*c,y:f*u}:{x:f*u,y:p*c}}var tf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await xC(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},af=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:v=>{let{x:C,y:b}=v;return{x:C,y:b}}},...u}=ta(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=zt(r),p=Wn(f),g=c[p],m=c[f],h=(v,C)=>Ss(C+d[v==="y"?"top":"left"],C,C-d[v==="y"?"bottom":"right"]);l&&(g=h(p,g)),s&&(m=h(f,m));let x=i.fn({...t,[p]:g,[f]:m});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[p]:l,[f]:s}}}}}},of=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=ta(e,t),f={x:r,y:n},p=zt(l),g=Wn(p),m=f[g],h=f[p],x=ta(u,t),v=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let I=g==="y"?"height":"width",L=s.reference[g]-s.floating[I]+v.mainAxis,w=s.reference[g]+s.reference[I]-v.mainAxis;m<L?m=L:m>w&&(m=w)}if(d){var C,b;let I=g==="y"?"width":"height",L=ef.has(da(l)),w=s.reference[p]-s.floating[I]+(L&&((C=i.offset)==null?void 0:C[p])||0)+(L?0:v.crossAxis),P=s.reference[p]+s.reference[I]+(L?0:((b=i.offset)==null?void 0:b[p])||0)-(L?v.crossAxis:0);h<w?h=w:h>P&&(h=P)}return{[g]:m,[p]:h}}}},rf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=ta(e,t),i=await r.detectOverflow(t,s),u=da(a),c=io(a),d=zt(a)==="y",{width:f,height:p}=o.floating,g,m;u==="top"||u==="bottom"?(g=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,g=c==="end"?"top":"bottom");let h=p-i.top-i.bottom,x=f-i.left-i.right,v=Qt(p-i[g],h),C=Qt(f-i[m],x),b=t.middlewareData.shift,I=!b,L=v,w=C;b!=null&&b.enabled.x&&(w=x),b!=null&&b.enabled.y&&(L=h),I&&!c&&(d?w=f-2*Wt(i.left,i.right):L=p-2*Wt(i.top,i.bottom)),await l({...t,availableWidth:w,availableHeight:L});let P=await r.getDimensions(n.floating);return f!==P.width||p!==P.height?{reset:{rects:!0}}:{}}}};function Gn(){return typeof window<"u"}function po(e){return lf(e)?(e.nodeName||"").toLowerCase():"#document"}function dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function aa(e){var t;return(t=(lf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function lf(e){return Gn()?e instanceof Node||e instanceof dt(e).Node:!1}function Vt(e){return Gn()?e instanceof Element||e instanceof dt(e).Element:!1}function ca(e){return Gn()?e instanceof HTMLElement||e instanceof dt(e).HTMLElement:!1}function nf(e){return!Gn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dt(e).ShadowRoot}function Kr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function sf(e){return/^(table|td|th)$/.test(po(e))}function jr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var CC=/transform|translate|scale|rotate|perspective|filter/,LC=/paint|layout|strict|content/,co=e=>!!e&&e!=="none",Rs;function Xn(e){let t=Vt(e)?Gt(e):e;return co(t.transform)||co(t.translate)||co(t.scale)||co(t.rotate)||co(t.perspective)||!Kn()&&(co(t.backdropFilter)||co(t.filter))||CC.test(t.willChange||"")||LC.test(t.contain||"")}function uf(e){let t=Da(e);for(;ca(t)&&!Ko(t);){if(Xn(t))return t;if(jr(t))return null;t=Da(t)}return null}function Kn(){return Rs==null&&(Rs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Rs}function Ko(e){return/^(html|body|#document)$/.test(po(e))}function Gt(e){return dt(e).getComputedStyle(e)}function $r(e){return Vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Da(e){if(po(e)==="html")return e;let t=e.assignedSlot||e.parentNode||nf(e)&&e.host||aa(e);return nf(t)?t.host:t}function df(e){let t=Da(e);return Ko(t)?(e.ownerDocument||e).body:ca(t)&&Kr(t)?t:df(t)}function fo(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=df(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=dt(r);if(n){let s=jn(l);return t.concat(l,l.visualViewport||[],Kr(r)?r:[],s&&a?fo(s):[])}else return t.concat(r,fo(r,[],a))}function jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pf(e){let t=Gt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ca(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Gr(a)!==n||Gr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function Ps(e){return Vt(e)?e:e.contextElement}function jo(e){let t=Ps(e);if(!ca(t))return ea(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=pf(t),l=(n?Gr(a.width):a.width)/o,s=(n?Gr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var bC=ea(0);function mf(e){let t=dt(e);return!Kn()||!t.visualViewport?bC:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function vC(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===dt(e)}function mo(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=Ps(e),l=ea(1);t&&(o?Vt(o)&&(l=jo(o)):l=jo(e));let s=vC(n,a,o)?mf(n):ea(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=dt(n),p=Vt(o)?dt(o):o,g=f,m=jn(g);for(;m&&p!==g;){let h=jo(m),x=m.getBoundingClientRect(),v=Gt(m),C=x.left+(m.clientLeft+parseFloat(v.paddingLeft))*h.x,b=x.top+(m.clientTop+parseFloat(v.paddingTop))*h.y;i*=h.x,u*=h.y,c*=h.x,d*=h.y,i+=C,u+=b,g=dt(m),m=jn(g)}}return uo({width:c,height:d,x:i,y:u})}function $n(e,t){let a=$r(e).scrollLeft;return t?t.left+a:mo(aa(e)).left+a}function hf(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-$n(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function IC(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=aa(o),s=t?jr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=ea(1),c=ea(0),d=ca(o);if((d||!n)&&((po(o)!=="body"||Kr(l))&&(i=$r(o)),d)){let p=mo(o);u=jo(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=l&&!d&&!n?hf(l,i):ea(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function wC(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function SC(e){let t=$r(e),a=e.ownerDocument.body,o=Wt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Wt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+$n(e),l=-t.scrollTop;return Gt(a).direction==="rtl"&&(n+=Wt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var yC=25;function RC(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=dt(e),n=aa(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Kn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if($n(n)<=0){let f=n.ownerDocument,p=f.body,g=getComputedStyle(p),m=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,h=Math.abs(n.clientWidth-p.clientWidth-m),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?h/2:h;x<=yC&&(s-=x)}return{width:s,height:i,x:u,y:c}}function kC(e,t){let a=mo(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=jo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function cf(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=RC(e,a,t);else if(t==="document")o=SC(aa(e));else if(Vt(t))o=kC(t,a);else{let r=mf(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return uo(o)}function PC(e,t){let a=t.get(e);if(a)return a;let o=fo(e,[],!1).filter(s=>Vt(s)&&po(s)!=="body"),r=null,n=Gt(e).position==="fixed",l=n?Da(e):e;for(;Vt(l)&&!Ko(l);){let s=Gt(l),i=Xn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=Da(l)}return t.set(e,o),o}function DC(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?jr(t)?[]:PC(t,this._c):[].concat(a),o],s=cf(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let p=cf(t,l[f],r);i=Wt(p.top,i),u=Qt(p.right,u),c=Qt(p.bottom,c),d=Wt(p.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function MC(e){let{width:t,height:a}=pf(e);return{width:t,height:a}}function TC(e,t,a){let o=ca(t),r=aa(t),n=a==="fixed",l=mo(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=ea(0);if((o||!n)&&((po(t)!=="body"||Kr(r))&&(s=$r(t)),o)){let f=mo(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=$n(r));let u=r&&!o&&!n?hf(r,s):ea(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function ks(e){return Gt(e).position==="static"}function ff(e,t){if(!ca(e)||Gt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return aa(e)===a&&(a=a.ownerDocument.body),a}function gf(e,t){let a=dt(e);if(jr(e))return a;if(!ca(e)){let r=Da(e);for(;r&&!Ko(r);){if(Vt(r)&&!ks(r))return r;r=Da(r)}return a}let o=ff(e,t);for(;o&&sf(o)&&ks(o);)o=ff(o,t);return o&&Ko(o)&&ks(o)&&!Xn(o)?a:o||uf(e)||a}var AC=async function(e){let t=this.getOffsetParent||gf,a=this.getDimensions,o=await a(e.floating);return{reference:TC(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function EC(e){return Gt(e).direction==="rtl"}var xf={convertOffsetParentRelativeRectToViewportRelativeRect:IC,getDocumentElement:aa,getClippingRect:DC,getOffsetParent:gf,getElementRects:AC,getClientRects:wC,getDimensions:MC,getScale:jo,isElement:Vt,isRTL:EC};function Cf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function OC(e,t,a){let o=null,r,n=aa(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:p,top:g,width:m,height:h}=f;if(c||t(),!m||!h)return;let x=Xr(g),v=Xr(n.clientWidth-(p+m)),C=Xr(n.clientHeight-(g+h)),b=Xr(p),L={rootMargin:-x+"px "+-v+"px "+-C+"px "+-b+"px",threshold:Wt(0,Qt(1,d))||1},w=!0;function P(M){let S=M[0].intersectionRatio;if(!Cf(f,e.getBoundingClientRect()))return s();if(S!==d){if(!w)return s();S?s(!1,S):r=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{o=new IntersectionObserver(P,{...L,root:n.ownerDocument})}catch{o=new IntersectionObserver(P,L)}o.observe(e)}let i=dt(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function Ds(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=Ps(e),c=r||n?[...u?fo(u):[],...t?fo(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?OC(u,a,n):null,f=-1,p=null;l&&(p=new ResizeObserver(x=>{let[v]=x;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var C;(C=p)==null||C.observe(t)})),a()}),u&&!i&&p.observe(u),t&&p.observe(t));let g,m=i?mo(e):null;i&&h();function h(){let x=mo(e);m&&!Cf(m,x)&&a(),m=x,g=requestAnimationFrame(h)}return a(),()=>{var x;c.forEach(v=>{r&&v.removeEventListener("scroll",a),n&&v.removeEventListener("resize",a)}),d?.(),(x=p)==null||x.disconnect(),p=null,i&&cancelAnimationFrame(g)}}var Lf=tf;var bf=af,vf=Jc,If=rf,wf=Qc,Ms=Zc;var Sf=of,Ts=(e,t,a)=>{let o=new Map,r=a??{},n={...xf,...r.platform,_c:o};return Yc(e,t,{...r,platform:n})};var He=j(require("react"),1),Rf=require("react"),kf=j(require("react-dom"),1),FC=typeof document<"u",BC=function(){},Yn=FC?Rf.useLayoutEffect:BC;function Zn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Zn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Zn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Pf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function yf(e,t){let a=Pf(e);return Math.round(t*a)/a}function As(e){let t=He.useRef(e);return Yn(()=>{t.current=e}),t}function Df(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=He.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=He.useState(o);Zn(f,o)||p(o);let[g,m]=He.useState(null),[h,x]=He.useState(null),v=He.useCallback(W=>{W!==L.current&&(L.current=W,m(W))},[]),C=He.useCallback(W=>{W!==w.current&&(w.current=W,x(W))},[]),b=n||g,I=l||h,L=He.useRef(null),w=He.useRef(null),P=He.useRef(c),M=i!=null,S=As(i),D=As(r),T=As(u),_=He.useCallback(()=>{if(!L.current||!w.current)return;let W={placement:t,strategy:a,middleware:f};D.current&&(W.platform=D.current),Ts(L.current,w.current,W).then(K=>{let z={...K,isPositioned:T.current!==!1};y.current&&!Zn(P.current,z)&&(P.current=z,kf.flushSync(()=>{d(z)}))})},[f,t,a,D,T]);Yn(()=>{u===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,d(W=>({...W,isPositioned:!1})))},[u]);let y=He.useRef(!1);Yn(()=>(y.current=!0,()=>{y.current=!1}),[]),Yn(()=>{if(b&&(L.current=b),I&&(w.current=I),b&&I){if(S.current)return S.current(b,I,_);_()}},[b,I,_,S,M]);let H=He.useMemo(()=>({reference:L,floating:w,setReference:v,setFloating:C}),[v,C]),q=He.useMemo(()=>({reference:b,floating:I}),[b,I]),V=He.useMemo(()=>{let W={position:a,left:0,top:0};if(!q.floating)return W;let K=yf(q.floating,c.x),z=yf(q.floating,c.y);return s?{...W,transform:"translate("+K+"px, "+z+"px)",...Pf(q.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:z}},[a,s,q.floating,c.x,c.y]);return He.useMemo(()=>({...c,update:_,refs:H,elements:q,floatingStyles:V}),[c,_,H,q,V])}var NC=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?Ms({element:o.current,padding:r}).fn(a):{}:o?Ms({element:o,padding:r}).fn(a):{}}}},Mf=(e,t)=>{let a=Lf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Tf=(e,t)=>{let a=bf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Af=(e,t)=>({fn:Sf(e).fn,options:[e,t]}),Ef=(e,t)=>{let a=vf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Of=(e,t)=>{let a=If(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ff=(e,t)=>{let a=wf(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Bf=(e,t)=>{let a=NC(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Nf=j(require("react"),1);var _C=Object.defineProperty,HC=(e,t)=>_C(e,"name",{value:t,configurable:!0});function Es(e){let[t,a]=Nf.useState(void 0);return de(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,i;if("borderBoxSize"in l){let u=l.borderBoxSize,c=Array.isArray(u)?u[0]:u;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;a({width:s,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}HC(Es,"useSize");var $o=require("react/jsx-runtime"),UC=Object.defineProperty,Ma=(e,t)=>UC(e,"name",{value:t,configurable:!0});var _f={Partial:"partial",Always:"always"},Hf={Optimized:"optimized",Always:"always"},Uf="Popper",[qf,fa]=We(Uf),[qC,Wf]=qf(Uf),Yo=Ma(e=>{let{__scopePopper:t,children:a}=e,[o,r]=st.useState(null),[n,l]=st.useState(void 0);return(0,$o.jsx)(qC,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),WC="PopperAnchor",Zo=st.forwardRef(Ma(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Wf(WC,o),s=st.useRef(null),i=l.onAnchorChange,u=st.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=re(a,u),d=st.useRef(null);st.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Jn(l.placementState),p=f?.[0],g=f?.[1];return r?null:(0,$o.jsx)(se.div,{"data-radix-popper-side":p,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),zf="PopperContent",[zC,my]=qf(zf),Jo=st.forwardRef(Ma(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=_f.Partial,hideWhenDetached:p=!1,updatePositionStrategy:g=Hf.Optimized,onPlaced:m,...h}=t,x=Wf(zf,o),[v,C]=st.useState(null),b=re(a,C),[I,L]=st.useState(null),w=Es(I),P=w?.width??0,M=w?.height??0,S=r+(l!=="center"?"-"+l:""),D=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},T=Array.isArray(c)?c:[c],_=T.length>0,y={padding:D,boundary:T.filter(Vf),altBoundary:_},{refs:H,floatingStyles:q,placement:V,isPositioned:W,middlewareData:K}=Df({strategy:"fixed",placement:S,whileElementsMounted:Ma((...xe)=>Ds(...xe,{animationFrame:g===Hf.Always}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Mf({mainAxis:n+M,alignmentAxis:s}),u&&Tf({mainAxis:!0,crossAxis:!1,...f===_f.Partial?{limiter:Af()}:{},...y}),u&&Ef({...y}),Of({...y,apply:Ma(({elements:xe,rects:N,availableWidth:ve,availableHeight:ue})=>{let{width:Z,height:ee}=N.reference,oe=xe.floating.style;oe.setProperty("--radix-popper-available-width",`${ve}px`),oe.setProperty("--radix-popper-available-height",`${ue}px`),oe.setProperty("--radix-popper-anchor-width",`${Z}px`),oe.setProperty("--radix-popper-anchor-height",`${ee}px`)},"apply")}),I&&Bf({element:I,padding:i}),VC({arrowWidth:P,arrowHeight:M}),p&&Ff(_?{strategy:"referenceHidden",...y}:{strategy:"referenceHidden",padding:y.padding,altBoundary:y.altBoundary})]}),z=x.setPlacementState;de(()=>(z(V),()=>{z(void 0)}),[V,z]);let[ie,J]=Jn(V),Ce=Ke(m);de(()=>{W&&Ce?.()},[W,Ce]);let B=K.arrow?.x,Q=K.arrow?.y,E=K.arrow?.centerOffset!==0,[be,Ie]=st.useState();return de(()=>{v&&Ie(window.getComputedStyle(v).zIndex)},[v]),(0,$o.jsx)("div",{ref:H.setFloating,"data-radix-popper-content-wrapper":"",style:{...q,transform:W?q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:be,"--radix-popper-transform-origin":[K.transformOrigin?.x,K.transformOrigin?.y].join(" "),...K.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,$o.jsx)(zC,{scope:o,placedSide:ie,placedAlign:J,onArrowChange:L,arrowX:B,arrowY:Q,shouldHideArrow:E,children:(0,$o.jsx)(se.div,{"data-side":ie,"data-align":J,...h,ref:b,style:{...h.style,animation:W?h.style?.animation:"none"}})})})},"PopperContent"));function Vf(e){return e!==null}Ma(Vf,"isNotNull");var VC=Ma(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Jn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,p=(r.arrow?.y??0)+i/2,g="",m="";return u==="bottom"?(g=l?d:`${f}px`,m=`${-i}px`):u==="top"?(g=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,m=l?d:`${p}px`):u==="left"&&(g=`${o.floating.width+i}px`,m=l?d:`${p}px`),{data:{x:g,y:m}}}}),"transformOrigin");function Jn(e){let[t,a="center"]=e.split("-");return[t,a]}Ma(Jn,"getSideAndAlignFromPlacement");var $e=j(require("react"),1);var XC=j(require("react"),1),Qn=j(require("react"),1),GC=Object.defineProperty,Bs=(e,t)=>GC(e,"name",{value:t,configurable:!0}),Fs=!1;function Gf(){let[e,t]=Qn.useState(Fs);return Qn.useEffect(()=>{Fs||(Fs=!0,t(!0))},[]),e}Bs(Gf,"useIsHydrated");var Xf=XC[" useSyncExternalStore ".trim().toString()];function Kf(){return()=>{}}Bs(Kf,"subscribe");function jf(){return Xf(Kf,()=>!0,()=>!1)}Bs(jf,"useIsHydratedModern");var $f=typeof Xf=="function"?jf:Gf;var Ta=require("react/jsx-runtime"),KC=Object.defineProperty,ho=(e,t)=>KC(e,"name",{value:t,configurable:!0}),Ns="rovingFocusGroup.onEntryFocus",jC={bubbles:!1,cancelable:!0},el="RovingFocusGroup",[_s,Zf,$C]=lo(el),[YC,Hs]=We(el,[$C]),Yf={Vertical:"vertical",Horizontal:"horizontal"},ZC={LTR:"ltr",RTL:"rtl"},[JC,QC]=YC(el),Jf=$e.forwardRef(ho(function(t,a){return(0,Ta.jsx)(_s.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,Ta.jsx)(_s.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,Ta.jsx)(eL,{...t,ref:a})})})},"RovingFocusGroup")),eL=$e.forwardRef(ho(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,p=$e.useRef(null),g=re(a,p),m=so(l),[h,x]=Ft({prop:s,defaultProp:i??null,onChange:u,caller:el}),[v,C]=$e.useState(!1),b=Ke(c),I=Zf(o),L=$e.useRef(!1),[w,P]=$e.useState(0);return $e.useEffect(()=>{let M=p.current;if(M)return M.addEventListener(Ns,b),()=>M.removeEventListener(Ns,b)},[b]),(0,Ta.jsx)(JC,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:h,onItemFocus:$e.useCallback(M=>x(M),[x]),onItemShiftTab:$e.useCallback(()=>C(!0),[]),onFocusableItemAdd:$e.useCallback(()=>P(M=>M+1),[]),onFocusableItemRemove:$e.useCallback(()=>P(M=>M-1),[]),children:(0,Ta.jsx)(se.div,{tabIndex:v||w===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:X(t.onMouseDown,()=>{L.current=!0}),onFocus:X(t.onFocus,M=>{let S=!L.current;if(M.target===M.currentTarget&&S&&!v){let D=new CustomEvent(Ns,jC);if(M.currentTarget.dispatchEvent(D),!D.defaultPrevented){let T=I().filter(V=>V.focusable),_=T.find(V=>V.active),y=T.find(V=>V.id===h),q=[_,y,...T].filter(Boolean).map(V=>V.ref.current);Us(q,d)}}L.current=!1}),onBlur:X(t.onBlur,()=>C(!1))})})},"RovingFocusGroupImpl")),tL="RovingFocusGroupItem",Qf=$e.forwardRef(ho(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=ut(),c=l||u,d=QC(tL,o),f=d.currentTabStopId===c,p=Zf(o),{onFocusableItemAdd:g,onFocusableItemRemove:m,currentTabStopId:h}=d,x=$f();return de(()=>{if(!(!x||!r))return g(),()=>m()},[x,r,g,m]),$e.useEffect(()=>{if(!(x||!r))return g(),()=>m()},[x,r,g,m]),(0,Ta.jsx)(_s.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,Ta.jsx)(se.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:X(t.onMouseDown,v=>{r?d.onItemFocus(c):v.preventDefault()}),onFocus:X(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:X(t.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){d.onItemShiftTab();return}if(v.target!==v.currentTarget)return;let C=tp(v,d.orientation,d.dir);if(C!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let I=p().filter(L=>L.focusable).map(L=>L.ref.current);if(C==="last")I.reverse();else if(C==="prev"||C==="next"){C==="prev"&&I.reverse();let L=I.indexOf(v.currentTarget);I=d.loop?ap(I,L+1):I.slice(L+1)}setTimeout(()=>Us(I))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:h!=null}):s})})},"RovingFocusGroupItem")),aL={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ep(e,t){return t!==ZC.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}ho(ep,"getDirectionAwareKey");function tp(e,t,a){let o=ep(e.key,a);if(!(t===Yf.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===Yf.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return aL[o]}ho(tp,"getFocusIntent");function Us(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}ho(Us,"focusFirst");function ap(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ho(ap,"wrapArray");var Se=require("react/jsx-runtime"),rL=Object.defineProperty,Re=(e,t)=>rL(e,"name",{value:t,configurable:!0});var qs=["Enter"," "],nL=["ArrowDown","PageUp","Home"],np=["ArrowUp","PageDown","End"],lL=[...nL,...np],Vy={ltr:[...qs,"ArrowRight"],rtl:[...qs,"ArrowLeft"]};var al="Menu",[Ws,sL,iL]=lo(al),[go,Vs]=We(al,[iL,fa,Hs]),Gs=fa(),lp=Hs(),[uL,Yr]=go(al),[dL,Xs]=go(al),sp=Re(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Gs(t),[i,u]=te.useState(null),c=te.useRef(!1),d=Ke(n),f=so(r);return te.useEffect(()=>{let p=Re(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=Re(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),te.useEffect(()=>{if(!a)return;let p=Re(()=>d(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,d]),(0,Se.jsx)(Yo,{...s,children:(0,Se.jsx)(uL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,Se.jsx)(dL,{scope:t,onClose:te.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),ip=te.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t,n=Gs(o);return(0,Se.jsx)(Zo,{...n,...r,ref:a})},"MenuAnchor")),up="MenuPortal",[cL,fL]=go(up,{forceMount:void 0}),dp=Re(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Yr(up,t);return(0,Se.jsx)(cL,{scope:t,forceMount:a,children:(0,Se.jsx)(Bt,{present:a||n.open,children:(0,Se.jsx)(ya,{asChild:!0,container:r,children:o})})})},"MenuPortal"),Aa="MenuContent",[pL,cp]=go(Aa),fp=te.forwardRef(Re(function(t,a){let o=fL(Aa,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Yr(Aa,t.__scopeMenu),s=Xs(Aa,t.__scopeMenu);return(0,Se.jsx)(Ws.Provider,{scope:t.__scopeMenu,children:(0,Se.jsx)(Bt,{present:r||l.open,children:(0,Se.jsx)(Ws.Slot,{scope:t.__scopeMenu,children:s.modal?(0,Se.jsx)(mL,{...n,ref:a}):(0,Se.jsx)(hL,{...n,ref:a})})})})},"MenuContent")),mL=te.forwardRef(Re(function(t,a){let o=Yr(Aa,t.__scopeMenu),r=te.useRef(null),n=re(a,r);return te.useEffect(()=>{let l=r.current;if(l)return Go(l)},[]),(0,Se.jsx)(pp,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:X(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),hL=te.forwardRef(Re(function(t,a){let o=Yr(Aa,t.__scopeMenu);return(0,Se.jsx)(pp,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),gL=nt("MenuContent.ScrollLock"),pp=te.forwardRef(Re(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,disableOutsideScroll:m,...h}=t,x=Yr(Aa,o),v=Xs(Aa,o),C=Gs(o),b=lp(o),I=sL(o),[L,w]=te.useState(null),P=te.useRef(null),[M,S]=te.useState(null);Nr(M);let{nodes:D,registry:T}=Br(),_=!!(n||m),y=re(a,P,x.onContentChange,S),H=te.useRef(0),q=te.useRef(""),V=te.useRef(0),W=te.useRef(null),K=te.useRef("right"),z=te.useRef(0),ie=te.useMemo(()=>m?[P,...D.map(E=>({current:E}))]:[],[P,D,m]),J=m?Qa:te.Fragment,Ce=m?{as:gL,allowPinchZoom:!0,shards:ie}:void 0,B=Re(E=>{let be=q.current+E,Ie=I().filter(oe=>!oe.disabled),xe=document.activeElement,N=Ie.find(oe=>oe.ref.current===xe)?.textValue,ve=Ie.map(oe=>oe.textValue),ue=vp(ve,be,N),Z=Ie.find(oe=>oe.textValue===ue)?.ref.current;function ee(oe){q.current=oe,window.clearTimeout(H.current),oe!==""&&(H.current=window.setTimeout(()=>ee(""),1e3))}Re(ee,"updateSearch"),ee(be),Z&&setTimeout(()=>Z.focus())},"handleTypeaheadSearch");te.useEffect(()=>()=>window.clearTimeout(H.current),[]),Ra();let Q=te.useCallback(E=>K.current===W.current?.side&&wp(E,W.current?.area),[]);return(0,Se.jsx)(pL,{scope:o,searchRef:q,onItemEnter:te.useCallback(E=>{Q(E)&&E.preventDefault()},[Q]),onItemLeave:te.useCallback(E=>{Q(E)||(P.current?.focus(),w(null))},[Q]),onTriggerLeave:te.useCallback(E=>{Q(E)&&E.preventDefault()},[Q]),pointerGraceTimerRef:V,onPointerGraceIntentChange:te.useCallback(E=>{W.current=E},[]),children:(0,Se.jsx)(Fr,{registry:_?T:null,children:(0,Se.jsx)(J,{...Ce,children:(0,Se.jsx)(_o,{asChild:!0,trapped:n,branches:D,onMountAutoFocus:X(l,E=>{E.preventDefault(),P.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,Se.jsx)(Sa,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:g,children:(0,Se.jsx)(Jf,{asChild:!0,...b,dir:v.dir,orientation:"vertical",loop:r,currentTabStopId:L,onCurrentTabStopIdChange:w,onEntryFocus:X(u,E=>{v.isUsingKeyboardRef.current||E.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,Se.jsx)(Jo,{role:"menu","aria-orientation":"vertical","data-state":xp(x.open),"data-radix-menu-content":"",dir:v.dir,...C,...h,ref:y,style:{outline:"none",...h.style},onKeyDown:X(h.onKeyDown,E=>{let Ie=E.target.closest("[data-radix-menu-content]")===E.currentTarget,xe=E.ctrlKey||E.altKey||E.metaKey,N=E.key.length===1;Ie&&(E.key==="Tab"&&E.preventDefault(),!xe&&N&&B(E.key));let ve=P.current;if(E.target!==ve||!lL.includes(E.key))return;E.preventDefault();let Z=I().filter(ee=>!ee.disabled).map(ee=>ee.ref.current);np.includes(E.key)&&Z.reverse(),Lp(Z)}),onBlur:X(t.onBlur,E=>{E.currentTarget.contains(E.target)||(window.clearTimeout(H.current),q.current="")}),onPointerMove:X(t.onPointerMove,tl(E=>{let be=E.target,Ie=z.current!==E.clientX;if(E.currentTarget.contains(be)&&Ie){let xe=E.clientX>z.current?"right":"left";K.current=xe,z.current=E.clientX}}))})})})})})})})},"MenuContentImpl"));var mp=te.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(se.div,{...r,ref:a})},"MenuLabel")),zs="MenuItem",op="menu.itemSelect",hp=te.forwardRef(Re(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=te.useRef(null),s=Xs(zs,t.__scopeMenu),i=cp(zs,t.__scopeMenu),u=re(a,l),c=te.useRef(!1),d=Re(()=>{let f=l.current;if(!o&&f){let p=new CustomEvent(op,{bubbles:!0,cancelable:!0});f.addEventListener(op,g=>r?.(g),{once:!0}),Er(f,p),p.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,Se.jsx)(xL,{...n,ref:u,disabled:o,onClick:X(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:X(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:X(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||qs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),xL=te.forwardRef(Re(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=cp(zs,o),i=lp(o),u=te.useRef(null),c=re(a,u),[d,f]=te.useState(!1),[p,g]=te.useState("");return te.useEffect(()=>{let m=u.current;m&&g((m.textContent??"").trim())},[l.children]),(0,Se.jsx)(Ws.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,Se.jsx)(Qf,{asChild:!0,...i,focusable:!r,children:(0,Se.jsx)(se.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:X(t.onPointerMove,tl(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:X(t.onPointerLeave,tl(m=>s.onItemLeave(m))),onFocus:X(t.onFocus,()=>f(!0)),onBlur:X(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var CL="MenuRadioGroup",[Gy,Xy]=go(CL,{value:void 0,onValueChange:Re(()=>{},"onValueChange")});var LL="MenuItemIndicator",[Ky,jy]=go(LL,{checked:!1});var gp=te.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(se.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var bL="MenuSub",[$y,Yy]=go(bL);function xp(e){return e?"open":"closed"}Re(xp,"getOpenState");function Cp(e){return e==="indeterminate"}Re(Cp,"isIndeterminate");function vL(e){return Cp(e)?"indeterminate":e?"checked":"unchecked"}Re(vL,"getCheckedState");function Lp(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Re(Lp,"focusFirst");function bp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Re(bp,"wrapArray");function vp(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=bp(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Re(vp,"getNextMatch");function Ip(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Re(Ip,"isPointInPolygon");function wp(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Ip(a,t)}Re(wp,"isPointerInGraceArea");function tl(e){return t=>t.pointerType==="mouse"?e(t):void 0}Re(tl,"whenMouse");var oa=require("react/jsx-runtime"),wL=Object.defineProperty,xo=(e,t)=>wL(e,"name",{value:t,configurable:!0}),Ks="DropdownMenu",[SL,pR]=We(Ks,[Vs]),Co=Vs(),[yL,Sp]=SL(Ks),yp=xo(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Co(t),u=Xt.useRef(null),[c,d]=Ft({prop:r,defaultProp:n??!1,onChange:l,caller:Ks});return(0,oa.jsx)(yL,{scope:t,triggerId:ut(),triggerRef:u,contentId:ut(),open:c,onOpenChange:d,onOpenToggle:Xt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,oa.jsx)(sp,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),RL="DropdownMenuTrigger",Rp=Xt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Sp(RL,o),s=Co(o),i=re(a,l.triggerRef);return(0,oa.jsx)(ip,{asChild:!0,...s,children:(0,oa.jsx)(se.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:X(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:X(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),kp=xo(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Co(t);return(0,oa.jsx)(dp,{...o,...a})},"DropdownMenuPortal"),kL="DropdownMenuContent",js=Xt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Sp(kL,o),l=Co(o),s=Xt.useRef(!1);return(0,oa.jsx)(fp,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:X(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:X(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var $s=Xt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,oa.jsx)(mp,{...n,...r,ref:a})},"DropdownMenuLabel")),Ys=Xt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,oa.jsx)(hp,{...n,...r,ref:a})},"DropdownMenuItem"));var Zs=Xt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,oa.jsx)(gp,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Qo=require("react/jsx-runtime"),Lo=yp,bo=Rp;var Ea=Zr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Qo.jsx)(kp,{children:(0,Qo.jsx)(js,{ref:o,sideOffset:t,className:ne("kanban-portal kanban-dropdown-content",e),...a})}));Ea.displayName=js.displayName;var Rt=Zr.forwardRef(({className:e,inset:t,...a},o)=>(0,Qo.jsx)(Ys,{ref:o,className:ne("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Rt.displayName=Ys.displayName;var DL=Zr.forwardRef(({className:e,inset:t,...a},o)=>(0,Qo.jsx)($s,{ref:o,className:ne("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));DL.displayName=$s.displayName;var ML=Zr.forwardRef(({className:e,...t},a)=>(0,Qo.jsx)(Zs,{ref:a,className:ne("kanban-dropdown-separator",e),...t}));ML.displayName=Zs.displayName;var Pp=j(require("react"),1);var Dp=require("react/jsx-runtime"),ra=Pp.forwardRef(({className:e,type:t,...a},o)=>(0,Dp.jsx)("input",{type:t,className:ne("kanban-input",e),ref:o,...a}));ra.displayName="Input";var Ap=j(require("react"),1);var Mp=j(require("react"),1);var Tp=require("react/jsx-runtime"),TL=Object.defineProperty,AL=(e,t)=>TL(e,"name",{value:t,configurable:!0}),Js=Mp.forwardRef(AL(function(t,a){return(0,Tp.jsx)(se.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var Ep=require("react/jsx-runtime"),ct=Ap.forwardRef(({className:e,...t},a)=>(0,Ep.jsx)(Js,{ref:a,className:ne("kanban-label",e),...t}));ct.displayName=Js.displayName;var Fa=j(require("react"),1);var O=j(require("react"),1),ti=j(require("react-dom"),1);var OL=Object.defineProperty,FL=(e,t)=>OL(e,"name",{value:t,configurable:!0});function ol(e,[t,a]){return Math.min(a,Math.max(t,e))}FL(ol,"clamp");var Op=j(require("react"),1);var Fp=require("react/jsx-runtime"),BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0}),Qs=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Bp=Op.forwardRef(NL(function(t,a){return(0,Fp.jsx)(se.span,{...t,ref:a,style:{...Qs,...t.style}})},"VisuallyHidden"));var Y=require("react/jsx-runtime"),HL=Object.defineProperty,pe=(e,t)=>HL(e,"name",{value:t,configurable:!0}),Np={ItemAligned:"item-aligned",Popper:"popper"},UL={LTR:"ltr",RTL:"rtl"},qL=[" ","Enter","ArrowUp","ArrowDown"],WL=[" ","Enter"],er="Select",[nl,ll,zL]=lo(er),[Io,GR]=We(er,[zL,fa]),ai=fa(),[VL,Oa]=Io(er),[GL,XL]=Io(er);function Wp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:p,form:g,internal_do_not_use_render:m}=e,h=ai(t),[x,v]=O.useState(null),[C,b]=O.useState(null),[I,L]=O.useState(!1),w=so(u),[P,M]=Ft({prop:o,defaultProp:r??!1,onChange:n,caller:er}),[S,D]=Ft({prop:l,defaultProp:s,onChange:i,caller:er}),T=O.useRef(null),_=O.useRef(!1),[y,H]=O.useState(null),q=pe(E=>{H({value:E,hasConsumerStoppedPropagation:_.current}),D(E)},"handleUserSelect"),V=O.useRef(S);O.useEffect(()=>{let E=g?x?.ownerDocument.getElementById(g):x?.form;if(E instanceof HTMLFormElement){let be=pe(()=>D(V.current),"reset");return E.addEventListener("reset",be),()=>E.removeEventListener("reset",be)}},[g,x,D]);let W=x?!!g||!!x.closest("form"):!0,[K,z]=O.useState(new Set),ie=ut(),J=Array.from(K).map(E=>E.props.value).join(";"),Ce=O.useCallback(E=>{z(be=>new Set(be).add(E))},[]),B=O.useCallback(E=>{z(be=>{let Ie=new Set(be);return Ie.delete(E),Ie})},[]),Q={required:p,trigger:x,onTriggerChange:v,valueNode:C,onValueNodeChange:b,valueNodeHasChildren:I,onValueNodeHasChildrenChange:L,contentId:ie,value:S,onValueChange:D,hasConsumerStoppedPropagationRef:_,userSelection:y,onUserSelect:q,open:P,onOpenChange:M,dir:w,triggerPointerDownPosRef:T,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:K,nativeSelectKey:J,isFormControl:W};return(0,Y.jsx)(Yo,{...h,children:(0,Y.jsx)(VL,{scope:t,...Q,children:(0,Y.jsx)(nl.Provider,{scope:t,children:(0,Y.jsx)(GL,{scope:t,onNativeOptionAdd:Ce,onNativeOptionRemove:B,children:Qp(m)?m(Q):a})})})})}pe(Wp,"SelectProvider");var zp=pe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,Y.jsx)(Wp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,Y.jsxs)(Y.Fragment,{children:[a,r?(0,Y.jsx)(ub,{__scopeSelect:t}):null]})})},"Select"),KL="SelectTrigger",oi=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=ai(o),s=Oa(KL,o),i=s.disabled||r,u=re(a,s.onTriggerChange),c=ll(o),d=O.useRef("touch"),[f,p,g]=ci(h=>{let x=c().filter(b=>!b.disabled),v=x.find(b=>b.value===s.value),C=fi(x,h,v);C!==void 0&&s.onUserSelect(C.value)}),m=pe(h=>{i||(s.onOpenChange(!0),g()),h&&(s.triggerPointerDownPosRef.current={x:Math.round(h.pageX),y:Math.round(h.pageY)})},"handleOpen");return(0,Y.jsx)(Zo,{asChild:!0,...l,children:(0,Y.jsx)(se.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Jr(s.value)?"":void 0,...n,ref:u,onClick:X(n.onClick,h=>{h.currentTarget.focus(),d.current!=="mouse"&&m(h)}),onPointerDown:X(n.onPointerDown,h=>{d.current=h.pointerType;let x=h.target;x.hasPointerCapture(h.pointerId)&&x.releasePointerCapture(h.pointerId),h.button===0&&h.ctrlKey===!1&&h.pointerType==="mouse"&&(m(h),h.preventDefault())}),onKeyDown:X(n.onKeyDown,h=>{let x=f.current!=="";!(h.ctrlKey||h.altKey||h.metaKey)&&h.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=h.isPropagationStopped(),p(h.key)),!(x&&h.key===" ")&&qL.includes(h.key)&&(m(),h.preventDefault())})})})},"SelectTrigger")),jL="SelectValue",Vp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=Oa(jL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=re(a,u.onValueNodeChange);de(()=>{c(d)},[c,d]);let p=Jr(u.value);return(0,Y.jsx)(se.span,{...i,asChild:p?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,Y.jsx)(O.Fragment,{children:p?s:l},p?"placeholder":"value")})},"SelectValue")),Gp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,Y.jsx)(se.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),$L="SelectPortal",[YL,ZL]=Io($L,{forceMount:void 0}),Xp=pe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,Y.jsx)(YL,{scope:e.__scopeSelect,forceMount:a,children:(0,Y.jsx)(ya,{asChild:!0,...o})})},"SelectPortal"),vo="SelectContent",ri=O.forwardRef(pe(function(t,a){let o=ZL(vo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=Oa(vo,t.__scopeSelect),[s,i]=O.useState();return de(()=>{i(new DocumentFragment)},[]),(0,Y.jsx)(Bt,{present:r||l.open,children:({present:u})=>u?(0,Y.jsx)(eb,{...n,ref:a}):(0,Y.jsx)(JL,{...n,fragment:s})})},"SelectContent")),JL=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?ti.createPortal((0,Y.jsx)(Kp,{scope:o,children:(0,Y.jsx)(nl.Slot,{scope:o,children:(0,Y.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Kt=10,[Kp,wo]=Io(vo),QL=nt("SelectContent.RemoveScroll"),eb=O.forwardRef(pe(function(t,a){let{__scopeSelect:o}=t,{position:r=Np.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:m,hideWhenDetached:h,avoidCollisions:x,...v}=t,C=Oa(vo,o),[b,I]=O.useState(null),[L,w]=O.useState(null),P=re(a,I),[M,S]=O.useState(null),[D,T]=O.useState(null),_=ll(o),[y,H]=O.useState(!1),q=O.useRef(!1),V=O.useRef(!1),W=O.useRef(!1);O.useEffect(()=>{if(b)return Go(b)},[b]),Ra();let K=O.useCallback(N=>{let[ve,...ue]=_().map(oe=>oe.ref.current),[Z]=ue.slice(-1),ee=document.activeElement;for(let oe of N)if(oe===ee||(oe?.scrollIntoView({block:"nearest"}),oe===ve&&L&&(L.scrollTop=0),oe===Z&&L&&(L.scrollTop=L.scrollHeight),oe?.focus(),document.activeElement!==ee))return},[_,L]),z=O.useCallback(()=>K([M,b]),[K,M,b]);O.useEffect(()=>{y&&z()},[y,z]);let{onOpenChange:ie,triggerPointerDownPosRef:J}=C;O.useEffect(()=>{if(b){let N={x:0,y:0},ve=pe(Z=>{N={x:Math.abs(Math.round(Z.pageX)-(J.current?.x??0)),y:Math.abs(Math.round(Z.pageY)-(J.current?.y??0))}},"handlePointerMove"),ue=pe(Z=>{N.x<=10&&N.y<=10?Z.preventDefault():Z.composedPath().includes(b)||ie(!1),document.removeEventListener("pointermove",ve),J.current=null},"handlePointerUp");return J.current!==null&&(document.addEventListener("pointermove",ve),document.addEventListener("pointerup",ue,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ve),document.removeEventListener("pointerup",ue,{capture:!0})}}},[b,ie,J]),O.useEffect(()=>{let N=pe(()=>ie(!1),"close");return window.addEventListener("blur",N),window.addEventListener("resize",N),()=>{window.removeEventListener("blur",N),window.removeEventListener("resize",N)}},[ie]);let[Ce,B]=ci(N=>{let ve=_().filter(ee=>!ee.disabled),ue=ve.find(ee=>ee.ref.current===document.activeElement),Z=fi(ve,N,ue);Z&&setTimeout(()=>Z.ref.current?.focus())}),Q=O.useCallback((N,ve,ue)=>{let Z=!V.current;Z&&(V.current=!0);let ee=!q.current&&!ue;C.value!==void 0&&C.value===ve||ee?(S(N),ee&&(q.current=!0)):Z&&S(N)},[C.value]),E=O.useCallback(()=>b?.focus(),[b]),be=O.useCallback((N,ve,ue)=>{if(!N)return;let Z=!W.current;Z&&(W.current=!0);let ee=!q.current&&!ue;(C.value!==void 0&&C.value===ve||ee||Z)&&T(N)},[C.value]),Ie=r===Np.Popper?_p:tb,xe=Ie===_p?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:g,sticky:m,hideWhenDetached:h,avoidCollisions:x}:{};return(0,Y.jsx)(Kp,{scope:o,content:b,viewport:L,onViewportChange:w,itemRefCallback:Q,selectedItem:M,onItemLeave:E,itemTextRefCallback:be,focusSelectedItem:z,selectedItemText:D,position:r,isPositioned:y,searchRef:Ce,children:(0,Y.jsx)(Qa,{as:QL,allowPinchZoom:!0,children:(0,Y.jsx)(_o,{asChild:!0,trapped:C.open,onMountAutoFocus:N=>{N.preventDefault()},onUnmountAutoFocus:X(n,N=>{C.trigger?.focus({preventScroll:!0}),N.preventDefault()}),children:(0,Y.jsx)(Sa,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:N=>N.preventDefault(),onDismiss:()=>C.onOpenChange(!1),children:(0,Y.jsx)(Ie,{role:"listbox",id:C.contentId,"data-state":C.open?"open":"closed",dir:C.dir,onContextMenu:N=>N.preventDefault(),...v,...xe,onPlaced:()=>H(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:X(v.onKeyDown,N=>{let ve=N.ctrlKey||N.altKey||N.metaKey;if(N.key==="Tab"&&N.preventDefault(),!ve&&N.key.length===1&&B(N.key),["ArrowUp","ArrowDown","Home","End"].includes(N.key)){let Z=_().filter(ee=>!ee.disabled).map(ee=>ee.ref.current);if(["ArrowUp","End"].includes(N.key)&&(Z=Z.slice().reverse()),["ArrowUp","ArrowDown"].includes(N.key)){let ee=N.target,oe=Z.indexOf(ee);Z=Z.slice(oe+1)}setTimeout(()=>K(Z)),N.preventDefault()}})})})})})})},"SelectContentImpl")),tb=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=Oa(vo,o),s=wo(vo,o),[i,u]=O.useState(null),[c,d]=O.useState(null),f=re(a,d),p=ll(o),g=O.useRef(!1),m=O.useRef(!0),{viewport:h,selectedItem:x,selectedItemText:v,focusSelectedItem:C}=s,b=O.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&h&&x&&v){let P=l.trigger.getBoundingClientRect(),M=c.getBoundingClientRect(),S=l.valueNode.getBoundingClientRect(),D=v.getBoundingClientRect();if(l.dir!==UL.RTL){let ue=D.left-M.left,Z=S.left-ue,ee=P.left-Z,oe=P.width+ee,it=Math.max(oe,M.width),R=window.innerWidth-Kt,U=ol(Z,[Kt,Math.max(Kt,R-it)]);i.style.minWidth=oe+"px",i.style.left=U+"px"}else{let ue=M.right-D.right,Z=window.innerWidth-S.right-ue,ee=window.innerWidth-P.right-Z,oe=P.width+ee,it=Math.max(oe,M.width),R=window.innerWidth-Kt,U=ol(Z,[Kt,Math.max(Kt,R-it)]);i.style.minWidth=oe+"px",i.style.right=U+"px"}let T=p(),_=window.innerHeight-Kt*2,y=h.scrollHeight,H=window.getComputedStyle(c),q=parseInt(H.borderTopWidth,10),V=parseInt(H.paddingTop,10),W=parseInt(H.borderBottomWidth,10),K=parseInt(H.paddingBottom,10),z=q+V+y+K+W,ie=Math.min(x.offsetHeight*5,z),J=window.getComputedStyle(h),Ce=parseInt(J.paddingTop,10),B=parseInt(J.paddingBottom,10),Q=P.top+P.height/2-Kt,E=_-Q,be=x.offsetHeight/2,Ie=x.offsetTop+be,xe=q+V+Ie,N=z-xe;if(xe<=Q){let ue=T.length>0&&x===T[T.length-1].ref.current;i.style.bottom="0px";let Z=c.clientHeight-h.offsetTop-h.offsetHeight,ee=Math.max(E,be+(ue?B:0)+Z+W),oe=xe+ee;i.style.height=oe+"px"}else{let ue=T.length>0&&x===T[0].ref.current;i.style.top="0px";let ee=Math.max(Q,q+h.offsetTop+(ue?Ce:0)+be)+N;i.style.height=ee+"px",h.scrollTop=xe-Q+h.offsetTop}i.style.margin=`${Kt}px 0`,i.style.minHeight=ie+"px",i.style.maxHeight=_+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[p,l.trigger,l.valueNode,i,c,h,x,v,l.dir,r]);de(()=>b(),[b]);let[I,L]=O.useState();de(()=>{c&&L(window.getComputedStyle(c).zIndex)},[c]);let w=O.useCallback(P=>{P&&m.current===!0&&(b(),C?.(),m.current=!1)},[b,C]);return(0,Y.jsx)(ab,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:w,children:(0,Y.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:I},children:(0,Y.jsx)(se.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),_p=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Kt,...l}=t,s=ai(o);return(0,Y.jsx)(Jo,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[ab,ni]=Io(vo,{}),Hp="SelectViewport",jp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=wo(Hp,o),s=ni(Hp,o),i=re(a,l.onViewportChange),u=O.useRef(0);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,Y.jsx)(nl.Slot,{scope:o,children:(0,Y.jsx)(se.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:X(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let m=window.innerHeight-Kt*2,h=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),v=Math.max(h,x);if(v<m){let C=v+g,b=Math.min(m,C),I=C-b;f.style.height=b+"px",f.style.bottom==="0px"&&(d.scrollTop=I>0?I:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),ob="SelectGroup",[XR,rb]=Io(ob);var nb="SelectLabel",li=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,...r}=t,n=rb(nb,o);return(0,Y.jsx)(se.div,{id:n.id,...r,ref:a})},"SelectLabel")),ei="SelectItem",[lb,$p]=Io(ei),si=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=Oa(ei,o),u=wo(ei,o),c=i.value===r,[d,f]=O.useState(l??""),[p,g]=O.useState(!1),m=Ke(b=>u.itemRefCallback?.(b,r,n)),h=re(a,m),x=ut(),v=O.useRef("touch");function C(b){i.hasConsumerStoppedPropagationRef.current=b.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return pe(C,"handleSelect"),(0,Y.jsx)(lb,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:O.useCallback(b=>{f(I=>I||(b?.textContent??"").trim())},[]),children:(0,Y.jsx)(nl.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,Y.jsx)(se.div,{role:"option","aria-labelledby":x,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:h,onFocus:X(s.onFocus,()=>g(!0)),onBlur:X(s.onBlur,()=>g(!1)),onClick:X(s.onClick,b=>{n||v.current!=="mouse"&&C(b)}),onPointerUp:X(s.onPointerUp,b=>{n||v.current==="mouse"&&C(b)}),onPointerDown:X(s.onPointerDown,b=>{v.current=b.pointerType}),onPointerMove:X(s.onPointerMove,b=>{v.current=b.pointerType,n?u.onItemLeave?.():v.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:X(s.onPointerLeave,b=>{b.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:X(s.onKeyDown,b=>{n||b.target!==b.currentTarget||u.searchRef?.current!==""&&b.key===" "||(WL.includes(b.key)&&C(b),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),rl="SelectItemText",Yp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=Oa(rl,o),i=wo(rl,o),u=$p(rl,o),c=XL(rl,o),[d,f]=O.useState(null),p=Ke(C=>i.itemTextRefCallback?.(C,u.value,u.disabled)),g=re(a,f,u.onItemTextChange,p),m=d?.textContent,h=O.useMemo(()=>(0,Y.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:v}=c;return de(()=>(x(h),()=>v(h)),[x,v,h]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(se.span,{id:u.textId,...l,ref:g}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Jr(s.value)?ti.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),sb="SelectItemIndicator",Zp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,...r}=t;return $p(sb,o).isSelected?(0,Y.jsx)(se.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Up="SelectScrollUpButton",ii=O.forwardRef(pe(function(t,a){let o=wo(Up,t.__scopeSelect),r=ni(Up,t.__scopeSelect),[n,l]=O.useState(!1),s=re(a,r.onScrollButtonChange);return de(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;pe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,Y.jsx)(Jp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),qp="SelectScrollDownButton",ui=O.forwardRef(pe(function(t,a){let o=wo(qp,t.__scopeSelect),r=ni(qp,t.__scopeSelect),[n,l]=O.useState(!1),s=re(a,r.onScrollButtonChange);return de(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;pe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,Y.jsx)(Jp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Jp=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=wo("SelectScrollButton",o),s=O.useRef(null),i=ll(o),u=O.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return O.useEffect(()=>()=>u(),[u]),de(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,Y.jsx)(se.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:X(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:X(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:X(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),di=O.forwardRef(pe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,Y.jsx)(se.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var ib="SelectBubbleInput",ub=O.forwardRef(pe(function({__scopeSelect:t,...a},o){let r=Oa(ib,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:g}=r,m=O.useRef(null),h=re(o,m),x=n??"",v=O.useRef(x),C=O.useRef(f),b=O.useRef(!1),I=Array.from(p).some(L=>(L.props.value??"")==="");return O.useEffect(()=>{let L=m.current;if(!L)return;let w=window.HTMLSelectElement.prototype,M=Object.getOwnPropertyDescriptor(w,"value").set,S=f!==null&&f!==C.current;C.current=f;let D=v.current!==x;v.current=x;let T=S&&D;if(S&&!D&&f.value!==x&&!f.hasConsumerStoppedPropagation&&M){b.current=!0;try{M.call(L,f.value),L.dispatchEvent(new Event("change",{bubbles:!0}))}finally{b.current=!1,M.call(L,x)}return}let _=T&&!f.hasConsumerStoppedPropagation;if(D&&M){let y=new Event("change",{bubbles:_});M.call(L,x),L.dispatchEvent(y)}},[x,f]),(0,Y.jsxs)(se.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>{b.current||l(L.target.value)},...a,style:{...Qs,...a.style},ref:h,defaultValue:x,children:[Jr(n)&&!I?(0,Y.jsx)("option",{value:""}):null,Array.from(p)]},g)},"SelectBubbleInput"));function Qp(e){return typeof e=="function"}pe(Qp,"isFunction");function Jr(e){return e===""||e===void 0}pe(Jr,"shouldShowPlaceholder");function ci(e){let t=Ke(e),a=O.useRef(""),o=O.useRef(0),r=O.useCallback(l=>{let s=a.current+l;t(s);function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}pe(i,"updateSearch"),i(s)},[t]),n=O.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return O.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}pe(ci,"useTypeaheadSearch");function fi(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=em(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}pe(fi,"findNextItem");function em(e,t){return e.map((a,o)=>e[(t+o)%e.length])}pe(em,"wrapArray");var Oe=require("react/jsx-runtime"),Qr=zp;var en=Vp,tr=Fa.forwardRef(({className:e,children:t,...a},o)=>(0,Oe.jsxs)(oi,{ref:o,className:ne("kanban-select-trigger",e),...a,children:[t,(0,Oe.jsx)(Gp,{asChild:!0,children:(0,Oe.jsx)(Oo,{className:"kanban-select-icon"})})]}));tr.displayName=oi.displayName;var tm=Fa.forwardRef(({className:e,...t},a)=>(0,Oe.jsx)(ii,{ref:a,className:ne("kanban-select-scroll-button",e),...t,children:(0,Oe.jsx)(Sr,{className:"kanban-select-scroll-icon"})}));tm.displayName=ii.displayName;var am=Fa.forwardRef(({className:e,...t},a)=>(0,Oe.jsx)(ui,{ref:a,className:ne("kanban-select-scroll-button",e),...t,children:(0,Oe.jsx)(Oo,{className:"kanban-select-scroll-icon"})}));am.displayName=ui.displayName;var ar=Fa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Oe.jsx)(Xp,{children:(0,Oe.jsxs)(ri,{ref:r,className:ne("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Oe.jsx)(tm,{}),(0,Oe.jsx)(jp,{className:ne("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Oe.jsx)(am,{})]})}));ar.displayName=ri.displayName;var cb=Fa.forwardRef(({className:e,...t},a)=>(0,Oe.jsx)(li,{ref:a,className:ne("kanban-select-label",e),...t}));cb.displayName=li.displayName;var pa=Fa.forwardRef(({className:e,children:t,...a},o)=>(0,Oe.jsxs)(si,{ref:o,className:ne("kanban-select-item",e),...a,children:[(0,Oe.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Oe.jsx)(Zp,{children:(0,Oe.jsx)(mt,{className:"kanban-select-check"})})}),(0,Oe.jsx)(Yp,{children:t})]}));pa.displayName=si.displayName;var fb=Fa.forwardRef(({className:e,...t},a)=>(0,Oe.jsx)(di,{ref:a,className:ne("kanban-select-separator",e),...t}));fb.displayName=di.displayName;var om=j(require("react"),1);var rm=require("react/jsx-runtime"),sl=om.forwardRef(({className:e,...t},a)=>(0,rm.jsx)("textarea",{className:ne("kanban-textarea",e),ref:a,...t}));sl.displayName="Textarea";var jt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},il=["high","medium","low"],nm="var(--dsw-alias-label-tertiary)";function lm(e,t){return t?e.find(a=>a.name===t)?.color??nm:nm}var ul=require("react");function So(e=new Date,t=0){let a=new Date(e);return a.setDate(a.getDate()+t),`${String(a.getFullYear()).padStart(4,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function pi(e,t){let a=o=>{let[r,n,l]=o.split("-").map(Number),s=new Date(0);return s.setUTCFullYear(r,n-1,l),s.getTime()/864e5};return a(t)-a(e)}function sm(e,t,a,o){return t?!e.dueDate||e.columnId===a?!1:t==="today"?e.dueDate===o:e.dueDate<o:!0}function im(e,t,a){let[o,r,n]=e.split("-");return a(o===t.slice(0,4)?"shortDate":"yearDate").replace("{year}",o).replace("{month}",String(Number(r))).replace("{day}",String(Number(n)))}function um(){let[e,t]=(0,ul.useState)(()=>So());return(0,ul.useEffect)(()=>{let a,o=()=>{clearTimeout(a);let r=new Date;t(So(r));let n=new Date(r);n.setHours(24,0,0,0),a=setTimeout(o,n.getTime()-r.getTime()+100)};return o(),window.addEventListener("focus",o),document.addEventListener("visibilitychange",o),()=>{clearTimeout(a),window.removeEventListener("focus",o),document.removeEventListener("visibilitychange",o)}},[]),e}var Ye=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),mi=e=>e==="high"||e==="medium"||e==="low"?jt[e].label:"";function dm(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&mi(a.priority)||o;return Ye(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ye(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ye(t("actLabelSet"),{to:n}):r!=null&&n==null?Ye(t("actLabelCleared"),{from:r}):Ye(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?mi(r)||r:o,s=n?mi(n)||n:o;return r==null&&n!=null?Ye(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ye(t("actPriorityCleared"),{from:l}):Ye(t("actPriority"),{from:l,to:s})}case"card_due_date_changed":return Ye(t("actDueDate"),{from:r??o,to:n??o});case"board_completed_column_changed":return Ye(t("actCompletedColumn"),{from:a.fromColumn??r??o,to:a.toColumn??n??o});case"card_title_changed":return Ye(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return Ye(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ye(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ye(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ye(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ye(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ye(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ye(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var dl=e=>String(e).padStart(2,"0");function or(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${dl(t.getMonth()+1)}-${dl(t.getDate())} ${dl(t.getHours())}:${dl(t.getMinutes())}`}var ma=require("react/jsx-runtime");function cm({activities:e}){let t=_e();if(e.length===0)return(0,ma.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ma.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ma.jsxs)("li",{className:"kanban-activity-item",children:[(0,ma.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ma.jsxs)("p",{className:"kanban-activity-description",children:[(0,ma.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",dm(o,t)]}),(0,ma.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:or(o.ts),children:or(o.ts)})]},o.id)})})}var A=require("react/jsx-runtime");function pm({open:e,error:t,card:a,completed:o,completedAt:r,labels:n,comments:l,activities:s,onOpenChange:i,onSave:u,onAddComment:c,onDelete:d,onChatWithAgent:f}){let p=_e(),g=(0,Ue.useId)(),m=(0,Ue.useRef)(null),h=(0,Ue.useRef)(null),x=(0,Ue.useRef)(null),v=(0,Ue.useRef)(null),[C,b]=(0,Ue.useState)(!a),[I,L]=(0,Ue.useState)({id:"",title:"",note:"",label:"",priority:"",dueDate:""}),[w,P]=(0,Ue.useState)(""),[M,S]=(0,Ue.useState)(!1),D=(0,Ue.useRef)(!1),[T,_]=(0,Ue.useState)(""),[y,H]=(0,Ue.useState)(null),q=(0,Ue.useRef)(null),V=(0,Ue.useRef)(I);(0,Ue.useEffect)(()=>{if(e){let B={id:a?.id??"",title:a?.title??"",note:a?.note??"",label:a?.label??"",priority:a?.priority??"",dueDate:a?.dueDate??""};V.current=B,L(B),P(""),_(""),H(null),b(!a)}},[e,a]),(0,Ue.useEffect)(()=>{y&&q.current?.focus()},[y]);let W=!!w.trim()||Object.keys(I).some(B=>I[B]!==V.current[B]),K=B=>{if(!D.current){if(!B&&y){H(null);return}if(!B&&W){H("discard");return}i(B)}},z=async B=>{if(D.current)return!1;D.current=!0,S(!0),_("");try{let Q=await B();return Q===!1&&_(p("actionRetry")),Q!==!1}catch(Q){return _(p("actionFailed")+String(Q instanceof Error?Q.message:Q)),!1}finally{D.current=!1,S(!1)}},ie=async B=>{if(x.current?.reportValidity()){if(w.trim()){H(B);return}await z(()=>f(I,B))&&i(!1)}},J=B=>L(Q=>({...Q,...B})),Ce=async()=>{let B=w.trim();!a||!B||B.length>2e3||await z(()=>c(a.id,B))&&P("")};return(0,A.jsx)(Xo,{open:e,onOpenChange:K,children:(0,A.jsxs)(Is,{"aria-describedby":void 0,onOpenAutoFocus:B=>{m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,B.preventDefault(),h.current?.focus()},onCloseAutoFocus:B=>{m.current?.isConnected&&(B.preventDefault(),m.current.focus())},children:[(0,A.jsxs)(ao,{children:[(0,A.jsx)(no,{children:p(a?"taskDetails":"addCard")}),a&&(0,A.jsxs)("span",{className:"kanban-field-id",children:[p("fieldId"),": ",a.id]})]}),(0,A.jsxs)(oo,{className:"kanban-form-stack",children:[(t||T)&&(0,A.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||T}),(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsx)(ct,{htmlFor:`${g}-title`,className:"kanban-field-label",children:p("fieldTitle")}),(0,A.jsx)(ra,{ref:h,id:`${g}-title`,value:I.title,placeholder:p("titlePlaceholder"),maxLength:120,disabled:M||!!y,onChange:B=>J({title:B.target.value})})]}),(0,A.jsxs)("div",{className:"kanban-form-row",children:[(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsx)(ct,{htmlFor:`${g}-label`,children:p("fieldLabel")}),(0,A.jsxs)(Qr,{disabled:M||!!y,value:I.label||"__none__",onValueChange:B=>J({label:B==="__none__"?"":B}),children:[(0,A.jsx)(tr,{id:`${g}-label`,children:(0,A.jsx)(en,{placeholder:p("noLabel")})}),(0,A.jsxs)(ar,{children:[(0,A.jsx)(pa,{value:"__none__",children:p("noLabel")}),n.map(B=>(0,A.jsx)(pa,{value:B.name,children:B.name},B.name))]})]})]}),(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsx)(ct,{htmlFor:`${g}-priority`,children:p("fieldPriority")}),(0,A.jsxs)(Qr,{disabled:M||!!y,value:I.priority||"__none__",onValueChange:B=>J({priority:B==="__none__"?"":B}),children:[(0,A.jsx)(tr,{id:`${g}-priority`,children:(0,A.jsx)(en,{placeholder:p("noPriority")})}),(0,A.jsxs)(ar,{children:[(0,A.jsx)(pa,{value:"__none__",children:p("noPriority")}),il.map(B=>{let Q=jt[B];return(0,A.jsx)(pa,{value:B,children:(0,A.jsxs)("span",{className:"kanban-inline-priority",children:[(0,A.jsx)("span",{className:"kanban-priority-dot",style:{background:Q.color}}),Q.label]})},B)})]})]})]})]}),(0,A.jsxs)("div",{className:a?"kanban-form-row kanban-date-fields":void 0,children:[(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsx)(ct,{htmlFor:`${g}-due-date`,children:p("fieldDueDate")}),(0,A.jsxs)("div",{className:"kanban-due-date-controls",children:[(0,A.jsx)(ra,{ref:x,id:`${g}-due-date`,type:"date",min:"0001-01-01",max:"9999-12-31",value:I.dueDate,disabled:M||!!y,onChange:B=>J({dueDate:B.target.value})}),(0,A.jsxs)("div",{className:"kanban-date-shortcuts",children:[[["today",0],["tomorrow",1],["nextWeek",7]].map(([B,Q])=>(0,A.jsx)(he,{type:"button",variant:"ghost",size:"sm",disabled:M||!!y,onClick:()=>J({dueDate:So(new Date,Q)}),children:p(B)},B)),(0,A.jsx)(he,{type:"button",variant:"ghost",size:"sm",disabled:M||!!y||!I.dueDate,onClick:()=>J({dueDate:""}),children:p("clearDate")})]})]})]}),a&&(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsx)(ct,{htmlFor:`${g}-completed-date`,children:p("fieldCompletedDate")}),(0,A.jsx)("output",{id:`${g}-completed-date`,className:"kanban-completed-date","aria-describedby":o&&!r?`${g}-completed-date-hint`:void 0,children:o?r?(0,A.jsx)("time",{dateTime:r,children:or(r)}):p("completedDateUnknown"):"\u2014"}),o&&!r&&(0,A.jsx)("p",{id:`${g}-completed-date-hint`,className:"kanban-muted-small",children:p("completedDateUnknownHint")})]})]}),(0,A.jsxs)("div",{className:"kanban-form-field",children:[(0,A.jsxs)("div",{className:"kanban-field-label",children:[(0,A.jsx)(ct,{id:`${g}-note-label`,htmlFor:C?`${g}-note`:void 0,children:p("fieldNote")}),(0,A.jsxs)(he,{variant:"ghost",size:"sm",disabled:M||!!y,"aria-controls":`${g}-description`,onClick:()=>{b(!C),C||requestAnimationFrame(()=>v.current?.focus())},children:[C?(0,A.jsx)(mt,{}):(0,A.jsx)(kr,{}),p(C?"finishEditingNote":"editNote")]})]}),(0,A.jsx)("div",{id:`${g}-description`,children:C?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(sl,{ref:v,id:`${g}-note`,className:"kanban-markdown-source",value:I.note,placeholder:p("notePlaceholder"),rows:12,maxLength:2e3,disabled:M||!!y,onChange:B=>J({note:B.target.value})}),(0,A.jsxs)("p",{className:"kanban-note-hint",children:[p("markdownEditHint")," ",(0,A.jsxs)("span",{className:"kanban-tabular",children:[I.note.length,"/2000"]})]})]}):(0,A.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${g}-note-label`,children:I.note.trim()?(0,A.jsx)(fm.MarkdownText,{text:I.note,labels:{code:{copyLabel:p("copyCode"),copiedLabel:p("copiedCode")},footnotes:p("footnotes")}}):(0,A.jsx)("p",{className:"kanban-muted-small",children:p("emptyNote")})})})]}),a&&(0,A.jsxs)("div",{className:"kanban-comments-box",children:[(0,A.jsxs)(ct,{htmlFor:`${g}-comment`,children:[p("commentsTitle")," ",(0,A.jsxs)("span",{className:"kanban-tabular",children:["(",l.length,")"]})]}),(0,A.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:l.length===0?(0,A.jsx)("p",{className:"kanban-muted-small",children:p("commentEmpty")}):(0,A.jsx)("ol",{className:"kanban-comment-list",children:l.map(B=>{let Q=B.source==="agent";return(0,A.jsxs)("li",{className:"kanban-comment-item",children:[(0,A.jsxs)("div",{className:"kanban-comment-meta",children:[(0,A.jsx)("span",{className:`kanban-activity-actor ${Q?"is-agent":"is-human"}`,children:p(Q?"actorAgent":"actorHuman")}),(0,A.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:B.createdAt,children:or(B.createdAt)})]}),(0,A.jsx)("p",{className:"kanban-comment-content",children:B.content})]},B.id)})})}),(0,A.jsxs)("div",{className:"kanban-comment-composer",children:[(0,A.jsx)(sl,{id:`${g}-comment`,value:w,placeholder:p("commentPlaceholder"),rows:3,maxLength:2e3,disabled:M||!!y,onChange:B=>P(B.target.value),onKeyDown:B=>{(B.metaKey||B.ctrlKey)&&B.key==="Enter"&&(B.preventDefault(),Ce())}}),(0,A.jsxs)(he,{type:"button",variant:"outline",disabled:M||!!y||!w.trim(),onClick:()=>{Ce()},children:[(0,A.jsx)(Dr,{className:"kanban-icon"}),p("sendComment")]})]})]}),a&&(0,A.jsxs)("div",{className:"kanban-activity-box",children:[(0,A.jsx)(ct,{className:"kanban-muted-small",children:p("activityTitle")}),(0,A.jsx)("div",{className:"kanban-activity-scroll",children:(0,A.jsx)(cm,{activities:s})})]})]}),(0,A.jsx)(ro,{children:y?(0,A.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,A.jsx)("p",{role:"alert",children:p(y==="discard"?"discardChangesDesc":y==="delete"?"deleteCardDesc":"discardCommentDesc")}),(0,A.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,A.jsx)(he,{ref:q,variant:"outline",disabled:M,onClick:()=>H(null),children:p("cancel")}),(0,A.jsx)(he,{variant:"destructive",disabled:M,onClick:async()=>{if(y==="discard"){i(!1);return}if(y==="delete"){a&&d&&await z(()=>d(a))&&i(!1);return}await z(()=>f(I,y))&&i(!1)},children:p(y==="discard"?"discardChanges":y==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,A.jsxs)(A.Fragment,{children:[a&&d&&(0,A.jsxs)(he,{variant:"ghost",className:"kanban-dialog-delete",disabled:M,onClick:()=>H("delete"),children:[(0,A.jsx)(Tt,{className:"kanban-icon"}),p("delete")]}),(0,A.jsxs)(Lo,{children:[(0,A.jsx)(bo,{asChild:!0,children:(0,A.jsxs)(he,{variant:"outline",disabled:M||!I.title.trim()&&!I.note.trim(),children:[(0,A.jsx)(la,{className:"kanban-icon"}),p("chatWithAgent")]})}),(0,A.jsxs)(Ea,{align:"end",children:[(0,A.jsx)(Rt,{onClick:()=>{ie("current")},children:p("chatCurrentSession")}),(0,A.jsx)(Rt,{onClick:()=>{ie("new")},children:p("chatNewSession")})]})]}),(0,A.jsx)(he,{disabled:M||!I.title.trim(),onClick:async()=>{x.current?.reportValidity()&&await z(()=>u(I))&&(V.current=I,w.trim()||i(!1))},children:p("save")})]})})]})})}var hm=require("react");var mm=require("react/jsx-runtime");function pb({variant:e,className:t}={}){return ne("kanban-badge",`kanban-badge--${e??"default"}`,t)}function hi({className:e,variant:t,...a}){return(0,mm.jsx)("div",{className:pb({variant:t,className:e}),...a})}var yo=j(require("react"),1);var Ro=require("react/jsx-runtime"),gi=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-card",e),...t}));gi.displayName="Card";var mb=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-card-header",e),...t}));mb.displayName="CardHeader";var hb=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-ui-card-title",e),...t}));hb.displayName="CardTitle";var gb=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-card-description",e),...t}));gb.displayName="CardDescription";var xi=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-card-content",e),...t}));xi.displayName="CardContent";var xb=yo.forwardRef(({className:e,...t},a)=>(0,Ro.jsx)("div",{ref:a,className:ne("kanban-card-footer",e),...t}));xb.displayName="CardFooter";var Fe=require("react/jsx-runtime");function Ci({card:e,labels:t,completed:a=!1,today:o=So()}){let r=_e(),n=e.priority?jt[e.priority]:null,l=lm(t,e.label),s=a?"completed":e.dueDate===o?"today":e.dueDate&&e.dueDate<o?"overdue":"future",i=e.dueDate?s==="today"?r("dueToday"):s==="overdue"?r("overdueDays").replace("{days}",String(pi(e.dueDate,o))):im(e.dueDate,o,r):"";return(0,Fe.jsx)(gi,{className:"kanban-card",children:(0,Fe.jsxs)(xi,{className:"kanban-sortable-card-content",children:[(e.label||n)&&(0,Fe.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Fe.jsxs)(hi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Fe.jsx)("span",{className:"kanban-label-dot",style:{background:l},"aria-hidden":"true"}),e.label]}),n&&(0,Fe.jsxs)(hi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Fe.jsx)("span",{className:"kanban-label-dot",style:{background:n.color},"aria-hidden":"true"}),n.label]})]}),(0,Fe.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Fe.jsx)("p",{className:"kanban-card-note",children:e.note}),(e.dueDate||e.comments.length>0)&&(0,Fe.jsxs)("div",{className:"kanban-card-status-row",children:[e.dueDate&&(0,Fe.jsxs)("span",{className:`kanban-card-due-date is-${s}`,title:`${r("fieldDueDate")}: ${e.dueDate}${a?` \xB7 ${r("completed")}`:""}`,children:[(0,Fe.jsx)(ja,{"aria-hidden":"true"}),(0,Fe.jsx)("span",{children:i})]}),e.comments.length>0&&(0,Fe.jsxs)("span",{className:"kanban-card-comment-count",title:`${r("commentsTitle")}: ${e.comments.length}`,"aria-label":`${r("commentsTitle")}: ${e.comments.length}`,children:[(0,Fe.jsx)(la,{"aria-hidden":"true"}),(0,Fe.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})]})})}function gm({card:e,labels:t,completed:a,today:o=So(),onOpen:r}){let n=_e(),l=(0,hm.useId)(),{attributes:s,listeners:i,setNodeRef:u,transform:c,transition:d,isDragging:f}=vn({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Fe.jsxs)("div",{ref:u,style:{transform:vt.Transform.toString(c),transition:d},...s,...i,"aria-label":e.title,"aria-describedby":l,onKeyDown:p=>{p.key==="Enter"&&!f?(p.preventDefault(),r(e)):i?.onKeyDown?.(p)},onClick:p=>{p.currentTarget.focus(),r(e)},className:`kanban-sortable-card${f?" is-dragging":""}`,children:[(0,Fe.jsxs)("span",{id:l,className:"kanban-sr-only",children:[n("cardKeyboardHelp"),e.dueDate&&` ${n("fieldDueDate")}: ${e.dueDate}. ${a?n("completed"):e.dueDate===o?n("dueToday"):e.dueDate<o?n("overdueDays").replace("{days}",String(pi(e.dueDate,o))):""}`]}),(0,Fe.jsx)(Ci,{card:e,labels:t,completed:a,today:o})]})}var kt=require("react/jsx-runtime");function xm({column:e,cards:t,totalCount:a,filtered:o,labels:r,completed:n,today:l,onAddCard:s,onOpenCard:i}){let{setNodeRef:u,isOver:c}=hn({id:e.id,data:{type:"column"}}),{active:d,over:f}=vr(),p=_e(),g=d?.data.current?.type==="card"&&(c||f?.data.current?.columnId===e.id);return(0,kt.jsxs)("div",{ref:u,className:`kanban-column${g?" is-over":""}`,children:[(0,kt.jsxs)("div",{className:"kanban-column-header",children:[(0,kt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,kt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,kt.jsxs)("div",{className:"kanban-column-cards",children:[(0,kt.jsx)(bn,{items:t.map(m=>m.id),strategy:Ln,children:t.map(m=>(0,kt.jsx)(gm,{card:m,labels:r,completed:n,today:l,onOpen:i},m.id))}),t.length===0&&(0,kt.jsx)("p",{className:"kanban-column-empty",children:p(o?"noMatchingCards":"emptyColumn")})]}),(0,kt.jsx)("div",{className:"kanban-column-footer",children:(0,kt.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>s(e),children:[(0,kt.jsx)($a,{className:"kanban-icon"}),p("addCard")]})})]})}var ft=require("react");var ae=require("react/jsx-runtime");function Cb({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:i,setNodeRef:u,transform:c,transition:d,isDragging:f}=vn({id:e.id,disabled:l}),p=_e();return(0,ae.jsxs)("div",{ref:u,style:{transform:vt.Transform.toString(c),transition:d},className:"kanban-editor-row","data-dragging":f||void 0,children:[(0,ae.jsx)("button",{...s,...i,className:"kanban-drag-handle",disabled:l,"aria-label":`${p("dragSort")}: ${e.title}`,children:(0,ae.jsx)(yr,{className:"kanban-icon"})}),(0,ae.jsx)(ra,{className:"kanban-editor-name","aria-label":`${p("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:g=>a(g.target.value),onBlur:o,onKeyDown:g=>{g.key==="Enter"&&g.target.blur()}}),(0,ae.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${p("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,ae.jsx)(Tt,{className:"kanban-icon"})})]})}function Cm({open:e,error:t,columns:a,completedColumnId:o,onSetCompletedColumn:r,onOpenChange:n,onReorder:l,onRename:s,onDelete:i,onAdd:u}){let c=_e(),d=(0,ft.useId)(),f=(0,ft.useId)(),[p,g]=(0,ft.useState)({}),[m,h]=(0,ft.useState)(""),[x,v]=(0,ft.useState)(!1),C=(0,ft.useRef)(!1),[b,I]=(0,ft.useState)(""),[L,w]=(0,ft.useState)(null),P=(0,ft.useRef)(null),M=dn(Xa(Ao,{activationConstraint:{distance:8}}),Xa(va,{coordinateGetter:In}));(0,ft.useEffect)(()=>{e&&(g(Object.fromEntries(a.map(y=>[y.id,y.title]))),h(""),I(""),w(null))},[e]),(0,ft.useEffect)(()=>{L&&P.current?.focus()},[L]);let S=async y=>{if(C.current)return!1;C.current=!0,v(!0),I("");try{let H=await y();return H===!1&&I(c("actionRetry")),H!==!1}catch(H){return I(c("actionFailed")+String(H instanceof Error?H.message:H)),!1}finally{C.current=!1,v(!1)}},D=async()=>{let y=m.trim();y&&await S(()=>u(y))&&h("")},T=y=>{let H=(p[y]??"").trim(),q=a.find(V=>V.id===y);q&&H&&H!==q.title&&S(()=>s(y,H))},_=y=>{let{active:H,over:q}=y;q&&H.id!==q.id&&S(()=>l(String(H.id),String(q.id)))};return(0,ae.jsx)(Xo,{open:e,onOpenChange:y=>{if(!C.current){if(!y&&L){w(null);return}n(y)}},children:(0,ae.jsxs)(to,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,ae.jsxs)(ao,{children:[(0,ae.jsx)(no,{children:c("columnEdit")}),(0,ae.jsx)(zr,{children:c("columnEditDesc")})]}),(0,ae.jsxs)(oo,{className:"kanban-editor-body",children:[(t||b)&&(0,ae.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||b}),(0,ae.jsxs)("section",{className:"kanban-editor-section","aria-label":c("boardLists"),children:[(0,ae.jsxs)("h3",{className:"kanban-editor-caption",children:[c("boardLists")," ",(0,ae.jsx)("span",{children:a.length})]}),(0,ae.jsx)(mn,{sensors:M,collisionDetection:lu,onDragEnd:_,children:(0,ae.jsx)(bn,{items:a.map(y=>y.id),strategy:Ln,children:(0,ae.jsx)("div",{className:"kanban-editor-list",children:a.map(y=>(0,ae.jsx)(Cb,{column:y,value:p[y.id]??y.title,onValueChange:H=>g(q=>({...q,[y.id]:H})),onCommit:()=>T(y.id),onDelete:()=>w(y),disabled:x||!!L,canDelete:a.length>1},y.id))})})})]}),(0,ae.jsxs)("div",{className:"kanban-editor-setting",children:[(0,ae.jsxs)("div",{className:"kanban-editor-setting-copy",children:[(0,ae.jsx)(ct,{htmlFor:d,children:c("completedColumn")}),(0,ae.jsx)("p",{id:`${d}-hint`,className:"kanban-muted-small",children:c("completedColumnHint")})]}),(0,ae.jsxs)(Qr,{value:o||"__none__",disabled:x||!!L,onValueChange:y=>{S(()=>r(y==="__none__"?null:y))},children:[(0,ae.jsx)(tr,{id:d,"aria-describedby":`${d}-hint`,children:(0,ae.jsx)(en,{})}),(0,ae.jsxs)(ar,{children:[(0,ae.jsx)(pa,{value:"__none__",children:c("noCompletedColumn")}),a.map(y=>(0,ae.jsx)(pa,{value:y.id,children:y.title},y.id))]})]})]})]}),(0,ae.jsx)(ro,{children:L?(0,ae.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,ae.jsx)("p",{role:"alert",children:c("deleteColumnDesc").replace("{column}",L.title)}),(0,ae.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,ae.jsx)(he,{ref:P,variant:"outline",disabled:x,onClick:()=>w(null),children:c("cancel")}),(0,ae.jsx)(he,{variant:"destructive",disabled:x,onClick:async()=>{await S(()=>i(L.id))&&w(null)},children:c("confirmDelete")})]})]}):(0,ae.jsxs)("div",{className:"kanban-editor-add",children:[(0,ae.jsx)(ct,{htmlFor:f,children:c("newColumnPlaceholder")}),(0,ae.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,ae.jsx)("span",{className:"kanban-editor-add-icon","aria-hidden":"true",children:(0,ae.jsx)($a,{className:"kanban-icon"})}),(0,ae.jsx)(ra,{id:f,value:m,disabled:x,placeholder:c("newColumnPlaceholder"),"aria-label":c("newColumnPlaceholder"),maxLength:40,onChange:y=>h(y.target.value),onKeyDown:y=>{y.key==="Enter"&&(y.preventDefault(),D())}}),(0,ae.jsx)(he,{size:"sm",className:"kanban-editor-add-button",disabled:x||!m.trim(),onClick:()=>{D()},children:c("add")})]})]})})]})})}var pt=require("react");var ge=require("react/jsx-runtime");function Lm({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=_e(),i=(0,pt.useId)(),[u,c]=(0,pt.useState)({}),[d,f]=(0,pt.useState)(""),[p,g]=(0,pt.useState)("#38bdf8"),[m,h]=(0,pt.useState)(!1),x=(0,pt.useRef)(!1),[v,C]=(0,pt.useState)(""),[b,I]=(0,pt.useState)(null),L=(0,pt.useRef)(null);(0,pt.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(S=>[S.name,{name:S.name,color:S.color}]))),f(""),g("#38bdf8"),C(""),I(null))},[e]),(0,pt.useEffect)(()=>{b&&L.current?.focus()},[b]);let w=async S=>{if(x.current)return!1;x.current=!0,h(!0),C("");try{let D=await S();return D===!1&&C(s("actionRetry")),D!==!1}catch(D){return C(s("actionFailed")+String(D instanceof Error?D.message:D)),!1}finally{x.current=!1,h(!1)}},P=async()=>{let S=d.trim();S&&await w(()=>r(S,p))&&f("")},M=S=>{let D=u[S];if(!D)return;let T=a.find(y=>y.name===S),_=D.name.trim();T&&_&&(_!==S||D.color!==T.color)&&w(()=>n(S,_,D.color))};return(0,ge.jsx)(Xo,{open:e,onOpenChange:S=>{if(!x.current){if(!S&&b){I(null);return}o(S)}},children:(0,ge.jsxs)(to,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,ge.jsxs)(ao,{children:[(0,ge.jsx)(no,{children:s("labelEdit")}),(0,ge.jsx)(zr,{children:s("labelEditDesc")})]}),(0,ge.jsxs)(oo,{className:"kanban-editor-body",children:[(t||v)&&(0,ge.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||v}),(0,ge.jsxs)("section",{className:"kanban-editor-section","aria-label":s("boardLabels"),children:[(0,ge.jsxs)("h3",{className:"kanban-editor-caption",children:[s("boardLabels")," ",(0,ge.jsx)("span",{children:a.length})]}),(0,ge.jsxs)("div",{className:"kanban-editor-list",children:[a.length===0&&(0,ge.jsxs)("div",{className:"kanban-editor-empty",children:[(0,ge.jsx)(Tr,{className:"kanban-icon","aria-hidden":"true"}),(0,ge.jsx)("p",{children:s("noLabelsHint")})]}),a.map(S=>{let D=u[S.name]??{name:S.name,color:S.color};return(0,ge.jsxs)("div",{className:"kanban-editor-row",children:[(0,ge.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${S.name}`,title:`${s("labelColor")}: ${S.name}`,value:D.color,disabled:m||!!b,className:"kanban-color-input",onChange:T=>c(_=>({..._,[S.name]:{...D,color:T.target.value}})),onBlur:()=>M(S.name)}),(0,ge.jsx)(ra,{className:"kanban-editor-name","aria-label":`${s("labelName")}: ${S.name}`,value:D.name,disabled:m||!!b,maxLength:20,onChange:T=>c(_=>({..._,[S.name]:{...D,name:T.target.value}})),onBlur:()=>M(S.name),onKeyDown:T=>{T.key==="Enter"&&T.target.blur()}}),(0,ge.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${s("deleteLabel")}: ${S.name}`,disabled:m||!!b,onClick:()=>I(S.name),children:(0,ge.jsx)(Tt,{className:"kanban-icon"})})]},S.name)})]})]})]}),(0,ge.jsx)(ro,{children:b?(0,ge.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,ge.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",b)}),(0,ge.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,ge.jsx)(he,{ref:L,variant:"outline",disabled:m,onClick:()=>I(null),children:s("cancel")}),(0,ge.jsx)(he,{variant:"destructive",disabled:m,onClick:async()=>{await w(()=>l(b))&&I(null)},children:s("confirmDelete")})]})]}):(0,ge.jsxs)("div",{className:"kanban-editor-add",children:[(0,ge.jsx)(ct,{htmlFor:i,children:s("newLabelPlaceholder")}),(0,ge.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,ge.jsx)("input",{type:"color","aria-label":s("newLabelColor"),title:s("newLabelColor"),value:p,disabled:m,className:"kanban-color-input",onChange:S=>g(S.target.value)}),(0,ge.jsx)(ra,{id:i,value:d,disabled:m,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:S=>f(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.preventDefault(),P())}}),(0,ge.jsx)(he,{size:"sm",className:"kanban-editor-add-button",disabled:m||!d.trim(),onClick:()=>{P()},children:s("add")})]})]})})]})})}var Om=j(require("react"),1);var le=j(require("react"),1);var Ze=require("react/jsx-runtime"),Lb=Object.defineProperty,Ge=(e,t)=>Lb(e,"name",{value:t,configurable:!0}),[vi,CP]=We("Tooltip",[fa]),Ii=fa(),bb="TooltipProvider",vb=700,Li="tooltip.open",[Ib,wi]=vi(bb),vm=Ge(e=>{let{__scopeTooltip:t,delayDuration:a=vb,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:n}=e,l=le.useRef(!0),s=le.useRef(!1),i=le.useRef(0);return le.useEffect(()=>{let u=i.current;return()=>window.clearTimeout(u)},[]),(0,Ze.jsx)(Ib,{scope:t,isOpenDelayedRef:l,delayDuration:a,onOpen:le.useCallback(()=>{o<=0||(window.clearTimeout(i.current),l.current=!1)},[o]),onClose:le.useCallback(()=>{o<=0||(window.clearTimeout(i.current),i.current=window.setTimeout(()=>l.current=!0,o))},[o]),isPointerInTransitRef:s,onPointerInTransitChange:le.useCallback(u=>{s.current=u},[]),disableHoverableContent:r,children:n})},"TooltipProvider"),bi="Tooltip",[wb,an]=vi(bi),Im=Ge(e=>{let{__scopeTooltip:t,children:a,open:o,defaultOpen:r,onOpenChange:n,disableHoverableContent:l,delayDuration:s}=e,i=wi(bi,e.__scopeTooltip),u=Ii(t),[c,d]=le.useState(null),[f,p]=le.useState(void 0),g=ut(),m=le.useRef(0),h=l??i.disableHoverableContent,x=s??i.delayDuration,v=le.useRef(!1),[C,b]=Ft({prop:o,defaultProp:r??!1,onChange:Ge(S=>{S?(i.onOpen(),document.dispatchEvent(new CustomEvent(Li))):i.onClose(),n?.(S)},"onChange"),caller:bi}),I=le.useMemo(()=>C?v.current?"delayed-open":"instant-open":"closed",[C]),L=le.useCallback(()=>{window.clearTimeout(m.current),m.current=0,v.current=!1,b(!0)},[b]),w=le.useCallback(()=>{window.clearTimeout(m.current),m.current=0,b(!1)},[b]),P=le.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{v.current=!0,b(!0),m.current=0},x)},[x,b]);return le.useEffect(()=>()=>{m.current&&(window.clearTimeout(m.current),m.current=0)},[]),(0,Ze.jsx)(Yo,{...u,children:(0,Ze.jsx)(wb,{scope:t,contentId:f??g,setContentId:p,open:C,stateAttribute:I,trigger:c,onTriggerChange:d,onTriggerEnter:le.useCallback(()=>{i.isOpenDelayedRef.current?P():L()},[i.isOpenDelayedRef,P,L]),onTriggerLeave:le.useCallback(()=>{h?w():(window.clearTimeout(m.current),m.current=0)},[w,h]),onOpen:L,onClose:w,disableHoverableContent:h,children:a})})},"Tooltip"),bm="TooltipTrigger",wm=le.forwardRef(Ge(function(t,a){let{__scopeTooltip:o,"aria-describedby":r,...n}=t,l=an(bm,o),s=wi(bm,o),i=Ii(o),u=le.useRef(null),c=re(a,u,l.onTriggerChange),d=le.useRef(!1),f=le.useRef(!1),p=le.useCallback(()=>d.current=!1,[]);return le.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),(0,Ze.jsx)(Zo,{asChild:!0,...i,children:(0,Ze.jsx)(se.button,{"aria-describedby":l.open?Em(r,l.contentId):r,"data-state":l.stateAttribute,...n,ref:c,onPointerMove:X(t.onPointerMove,g=>{g.pointerType!=="touch"&&!f.current&&!s.isPointerInTransitRef.current&&(l.onTriggerEnter(),f.current=!0)}),onPointerLeave:X(t.onPointerLeave,()=>{l.onTriggerLeave(),f.current=!1}),onPointerDown:X(t.onPointerDown,()=>{l.open&&l.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:X(t.onFocus,()=>{d.current||l.onOpen()}),onBlur:X(t.onBlur,l.onClose),onClick:X(t.onClick,l.onClose)})})},"TooltipTrigger")),Sm="TooltipPortal",[Sb,yb]=vi(Sm,{forceMount:void 0}),ym=Ge(e=>{let{__scopeTooltip:t,forceMount:a,children:o,container:r}=e,n=an(Sm,t);return(0,Ze.jsx)(Sb,{scope:t,forceMount:a,children:(0,Ze.jsx)(Bt,{present:a||n.open,children:(0,Ze.jsx)(ya,{asChild:!0,container:r,children:o})})})},"TooltipPortal"),tn="TooltipContent",Si=le.forwardRef(Ge(function(t,a){let o=yb(tn,t.__scopeTooltip),{forceMount:r=o.forceMount,side:n="top",...l}=t,s=an(tn,t.__scopeTooltip);return(0,Ze.jsx)(Bt,{present:r||s.open,children:s.disableHoverableContent?(0,Ze.jsx)(Rm,{side:n,...l,ref:a}):(0,Ze.jsx)(Rb,{side:n,...l,ref:a})})},"TooltipContent")),Rb=le.forwardRef(Ge(function(t,a){let o=an(tn,t.__scopeTooltip),r=wi(tn,t.__scopeTooltip),n=le.useRef(null),l=re(a,n),[s,i]=le.useState(null),{trigger:u,onClose:c}=o,d=n.current,{onPointerInTransitChange:f}=r,p=le.useCallback(()=>{i(null),f(!1)},[f]),g=le.useCallback((m,h)=>{let x=m.currentTarget,v={x:m.clientX,y:m.clientY},C=km(v,x.getBoundingClientRect()),b=Pm(v,C),I=Dm(h.getBoundingClientRect()),L=Tm([...b,...I]);i(L),f(!0)},[f]);return le.useEffect(()=>()=>p(),[p]),le.useEffect(()=>{if(u&&d){let m=Ge(x=>g(x,d),"handleTriggerLeave"),h=Ge(x=>g(x,u),"handleContentLeave");return u.addEventListener("pointerleave",m),d.addEventListener("pointerleave",h),()=>{u.removeEventListener("pointerleave",m),d.removeEventListener("pointerleave",h)}}},[u,d,g,p]),le.useEffect(()=>{if(s){let m=Ge(h=>{let x=h.target,v={x:h.clientX,y:h.clientY},C=u?.contains(x)||d?.contains(x),b=!Mm(v,s);C?p():b&&(p(),c())},"handleTrackPointerGrace");return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[u,d,s,c,p]),(0,Ze.jsx)(Rm,{...t,ref:l})},"TooltipContentHoverable")),kb=El("TooltipContent"),Rm=le.forwardRef(Ge(function(t,a){let{__scopeTooltip:o,children:r,"aria-label":n,id:l,onEscapeKeyDown:s,onPointerDownOutside:i,...u}=t,c=an(tn,o),d=Ii(o),{onClose:f}=c,[p,g]=le.useState(null),m=re(a,g);Nr(p),le.useEffect(()=>(document.addEventListener(Li,f),()=>document.removeEventListener(Li,f)),[f]),le.useEffect(()=>{if(c.trigger){let x=Ge(v=>{v.target instanceof Node&&v.target.contains(c.trigger)&&f()},"handleScroll");return window.addEventListener("scroll",x,{capture:!0}),()=>window.removeEventListener("scroll",x,{capture:!0})}},[c.trigger,f]);let{setContentId:h}=c;return de(()=>(h(l),()=>{h(void 0)}),[l,h]),(0,Ze.jsx)(Sa,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:x=>x.preventDefault(),onDismiss:f,children:(0,Ze.jsxs)(Jo,{"data-state":c.stateAttribute,role:n?void 0:"tooltip",id:n?void 0:c.contentId,...d,...u,ref:m,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,Ze.jsx)(kb,{children:r}),n?(0,Ze.jsx)(Bp,{id:c.contentId,role:"tooltip",children:n}):null]})})},"TooltipContentImpl"));function km(e,t){let a=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),n=Math.abs(t.left-e.x);switch(Math.min(a,o,r,n)){case n:return"left";case r:return"right";case a:return"top";case o:return"bottom";default:throw new Error("unreachable")}}Ge(km,"getExitSideFromRect");function Pm(e,t,a=5){let o=[];switch(t){case"top":o.push({x:e.x-a,y:e.y+a},{x:e.x+a,y:e.y+a});break;case"bottom":o.push({x:e.x-a,y:e.y-a},{x:e.x+a,y:e.y-a});break;case"left":o.push({x:e.x+a,y:e.y-a},{x:e.x+a,y:e.y+a});break;case"right":o.push({x:e.x-a,y:e.y-a},{x:e.x-a,y:e.y+a});break}return o}Ge(Pm,"getPaddedExitPoints");function Dm(e){let{top:t,right:a,bottom:o,left:r}=e;return[{x:r,y:t},{x:a,y:t},{x:a,y:o},{x:r,y:o}]}Ge(Dm,"getPointsFromRect");function Mm(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Ge(Mm,"isPointInPolygon");function Tm(e){let t=e.slice();return t.sort((a,o)=>a.x<o.x?-1:a.x>o.x?1:a.y<o.y?-1:a.y>o.y?1:0),Am(t)}Ge(Tm,"getHull");function Am(e){if(e.length<=1)return e.slice();let t=[];for(let o=0;o<e.length;o++){let r=e[o];for(;t.length>=2;){let n=t[t.length-1],l=t[t.length-2];if((n.x-l.x)*(r.y-l.y)>=(n.y-l.y)*(r.x-l.x))t.pop();else break}t.push(r)}t.pop();let a=[];for(let o=e.length-1;o>=0;o--){let r=e[o];for(;a.length>=2;){let n=a[a.length-1],l=a[a.length-2];if((n.x-l.x)*(r.y-l.y)>=(n.y-l.y)*(r.x-l.x))a.pop();else break}a.push(r)}return a.pop(),t.length===1&&a.length===1&&t[0].x===a[0].x&&t[0].y===a[0].y?t:t.concat(a)}Ge(Am,"getHullPresorted");function Em(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}Ge(Em,"concatAriaDescribedby");var yi=require("react/jsx-runtime"),Fm=vm,Bm=Im,Nm=wm,Ri=Om.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,yi.jsx)(ym,{children:(0,yi.jsx)(Si,{ref:o,sideOffset:t,className:ne("kanban-portal kanban-tooltip-content",e),...a})}));Ri.displayName=Si.displayName;function cl(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var ki=new Map,Pi=0,fl=new Set;function _m(e,t){ki.set(e,t),Pi++;for(let a of fl)a()}function Hm(e){let t=ki.get(e);if(t==null)return null;ki.delete(e),Pi++;for(let a of fl)a();return t}function Um(e){return fl.add(e),()=>{fl.delete(e)}}function qm(){return Pi}function Wm(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Ut("fieldId")+": "+t),a&&n.push(a),r&&n.push(Ut("fieldLabel")+": "+r),e.dueDate&&n.push(Ut("fieldDueDate")+": "+e.dueDate),e.completed!==void 0&&n.push(Ut("completionStatus")+": "+Ut(e.completed?"completed":"incomplete")),e.completed&&n.push(Ut("fieldCompletedDate")+": "+(e.completedAt||Ut("completedDateUnknown"))),o&&n.push(o),n.join(`

`)}var F=require("react/jsx-runtime");function zm(e,t,a,o,r){let n=e.find(h=>h.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(h=>h.columnId===n.columnId).findIndex(h=>h.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(h=>h.id!==t),i=s.filter(h=>h.columnId===a),u=o?i.findIndex(h=>h.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],p=i[i.length-1],g=f?d.indexOf(f):p?d.indexOf(p)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((h,x)=>h.id===e[x]?.id&&h.columnId===e[x]?.columnId)?e:d,toIndex:c}}function Vm(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(R=>R.items):[],l=Array.isArray(n)?n.find(R=>Array.isArray(R.sessionIds)&&R.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=_e(),[u,c]=(0,Le.useState)(null),[d,f]=(0,Le.useState)(""),[p,g]=(0,Le.useState)([]),[m,h]=(0,Le.useState)(null),[x,v]=(0,Le.useState)(null),[C,b]=(0,Le.useState)(!1),[I,L]=(0,Le.useState)(!1),[w,P]=(0,Le.useState)(!1),M=um(),[S,D]=(0,Le.useState)(""),[T,_]=(0,Le.useState)(""),[y,H]=(0,Le.useState)(null),q=(0,Le.useRef)(null),V=(0,Le.useRef)(u),W=(0,Le.useRef)(null),K=(0,Le.useRef)(s),z=(0,Le.useRef)(0),ie=(0,Le.useRef)(0);V.current=u,K.current=s;let[J,Ce]=(0,Le.useState)(null),B=dn(Xa(hr,{activationConstraint:{distance:8}}),Xa(gr,{activationConstraint:{delay:250,tolerance:5}}),Xa(va,{coordinateGetter:In})),Q=(0,Le.useCallback)((R,U,G)=>{K.current!==U||G<ie.current||(ie.current=G,R&&R.board&&(c({...R.board,completedColumnId:R.board.completedColumnId??null,cards:Array.isArray(R.board.cards)?R.board.cards.map($=>({...$,dueDate:$.dueDate??null,completedAt:$.completedAt??null,comments:Array.isArray($.comments)?$.comments:[]})):[],activities:Array.isArray(R.board.activities)?R.board.activities:[]}),f("")),Array.isArray(R&&R.warnings)&&R.warnings.length>0&&g($=>[...$,...R.warnings]))},[]),E=(0,Le.useCallback)(async(R,U={})=>{let G=++z.current;f("");try{let $=await cl(R,U,s);return Q($,s,G),!0}catch($){return f(i("actionFailed")+String($&&$.message||$)),!1}},[s,Q,i]),be=(0,Le.useCallback)(()=>{let R=++z.current;P(!0),cl("get",{},s).then(U=>Q(U,s,R)).catch(U=>f(i("loadFailed")+String(U&&U.message||U))).finally(()=>P(!1))},[s,Q,i]);(0,Le.useEffect)(()=>{let R=!0,U=++z.current;return c(null),H(null),_(""),D(""),v(null),h(null),f(""),g([]),cl("get",{},s).then(G=>{R&&Q(G,s,U)}).catch(G=>{R&&f(i("loadFailed")+String(G&&G.message||G))}),()=>{R=!1}},[s,Q,i]),(0,Le.useEffect)(()=>{u&&H(R=>R&&!u.labels.some(U=>U.name===R)?null:R)},[u?.labels]),(0,Le.useLayoutEffect)(()=>{let R=Pe=>{let ce=Pe;for(;ce;){let De=getComputedStyle(ce).overflowY;if(De==="auto"||De==="scroll")return ce;ce=ce.parentElement}return null},U=()=>{let Pe=q.current;if(!Pe)return;let ce=R(Pe.parentElement),De=Pe.getBoundingClientRect().top+(ce?.scrollTop??0),Je=window.innerHeight;if(ce){let $t=ce.querySelector("[data-composer-seat]"),Pt=$t?$t.getBoundingClientRect().top:0;$t&&$t.offsetHeight>0&&Pt>De?Je=Pt:Je=ce.getBoundingClientRect().bottom}Ce(Math.max(0,Math.floor(Je-De)))};U();let G=R(q.current?.parentElement??null),$=new ResizeObserver(U);if($.observe(document.documentElement),G){$.observe(G);let Pe=G.querySelector("[data-composer-seat]");Pe&&$.observe(Pe)}return window.addEventListener("resize",U),()=>{$.disconnect(),window.removeEventListener("resize",U)}},[u!==null]);let Ie=(0,Le.useCallback)(R=>{let U=su(R),G=U.length>0?U:Pl(R),$=Cr(G,"id");if($==null)return[];if(new Set((u?.columns??[]).map(ce=>ce.id)).has(String($))){let ce=(u?.cards??[]).filter(De=>De.columnId===$).map(De=>De.id);if(ce.length>0){let De=cn({...R,droppableContainers:R.droppableContainers.filter(Je=>Je.id!==$&&ce.includes(String(Je.id)))});De.length>0&&($=De[0].id)}}return[{id:$}]},[u]),xe=R=>{let U=V.current;if(!U||U.cards===R)return;let G={...U,cards:R};V.current=G,c(G)},N=R=>{if(R.active.data.current?.type!=="card")return;let U=V.current,G=U?.cards.find($=>$.id===R.active.id);!G||!U||(W.current=U.cards,h(G))},ve=({active:R,over:U})=>{let G=V.current;if(!U||!G||R.data.current?.type!=="card")return;let $=String(R.id),Pe=G.cards.find(Pt=>Pt.id===$),ce=G.cards.find(Pt=>Pt.id===U.id),De=ce?.columnId??(U.data.current?.type==="column"?String(U.id):null);if(!Pe||!De||Pe.columnId===De)return;let Je=R.rect.current.translated,$t=!!(ce&&Je&&Je.top+Je.height/2>U.rect.top+U.rect.height/2);xe(zm(G.cards,$,De,ce?.id??null,$t).cards)},ue=({active:R,over:U})=>{let G=V.current,$=W.current;if(W.current=null,!U||!G||R.data.current?.type!=="card"){$&&xe($),h(null);return}let Pe=String(R.id),ce=G.cards.find(xt=>xt.id===U.id),De=ce?.columnId??(U.data.current?.type==="column"?String(U.id):null);if(!De){$&&xe($),h(null);return}let Je=R.rect.current.translated,$t=!!(ce&&Je&&Je.top+Je.height/2>U.rect.top+U.rect.height/2),Pt=zm(G.cards,Pe,De,ce?.id??null,$t);xe(Pt.cards),h(null),(!$||Pt.cards.some((xt,ha)=>xt.id!==$[ha]?.id||xt.columnId!==$[ha]?.columnId))&&E("moveCard",{id:Pe,columnId:De,toIndex:Pt.toIndex}).then(xt=>{xt||be()})},Z=()=>{W.current&&xe(W.current),W.current=null,h(null)},ee=R=>{if(!x)return Promise.resolve(!1);if(x.card){let U=V.current?.cards.find($=>$.id===x.card.id)??x.card,G={id:U.id};return R.title!==U.title&&(G.title=R.title),R.note!==U.note&&(G.note=R.note),R.label!==(U.label??"")&&(G.label=R.label),R.priority!==(U.priority??"")&&(G.priority=R.priority),R.dueDate!==(U.dueDate??"")&&(G.dueDate=R.dueDate||null),E("updateCard",G)}return E("addCard",{columnId:x.columnId,title:R.title,note:R.note,label:R.label||void 0,priority:R.priority||void 0,dueDate:R.dueDate||null})},oe=(0,Le.useCallback)(async(R,U)=>{let G=V.current,$=G?.cards.find(ce=>ce.id===R.id),Pe=Wm({...R,completedAt:$?.completedAt,completed:$&&G?.completedColumnId?$.columnId===G.completedColumnId:void 0});if(!Pe)return!1;f("");try{return U==="current"?o?(await o.setDraft(Pe),!0):!1:r?.openWorkspace?(await r.openWorkspace(s,ce=>_m(ce,Pe)),!0):!1}catch(ce){return f(i("actionFailed")+String(ce&&ce.message||ce)),!1}},[o,r,s,i]);if(!u)return(0,F.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,F.jsx)("p",{className:"kanban-error",children:d}):(0,F.jsx)("p",{className:"kanban-muted-text",children:i("loading")})});let it=u.cards.find(R=>R.id===x?.card?.id);return(0,F.jsxs)("div",{ref:q,className:"kanban-root kanban-view",style:J!=null?{height:J}:void 0,children:[d&&!x&&!C&&!I&&(0,F.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(T||y!==null||S)&&(0,F.jsxs)("div",{className:"kanban-filter-summary","aria-label":i("clearFilter"),children:[S&&(0,F.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${i(S==="today"?"dueToday":"overdue")}`,onClick:()=>D(""),children:[i(S==="today"?"dueToday":"overdue"),(0,F.jsx)(sa,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),T&&(0,F.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${jt[T].label}`,onClick:()=>_(""),children:[i("fieldPriority"),": ",jt[T].label,(0,F.jsx)(sa,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),y!==null&&(0,F.jsxs)(he,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${y||i("noLabel")}`,onClick:()=>H(null),children:[i("fieldLabel"),": ",y||i("noLabel"),(0,F.jsx)(sa,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),p.length>0&&(0,F.jsxs)("div",{className:"kanban-warning",children:[(0,F.jsxs)("div",{className:"kanban-warning-body",children:[(0,F.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),p.map((R,U)=>(0,F.jsx)("p",{className:"kanban-warning-item",children:R},U))]}),(0,F.jsx)(he,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,F.jsxs)(mn,{sensors:B,collisionDetection:Ie,onDragStart:N,onDragOver:ve,onDragEnd:ue,onDragCancel:Z,children:[(0,F.jsxs)("div",{className:"kanban-content",children:[(0,F.jsxs)("div",{className:"kanban-toolbar",children:[(0,F.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:w,onClick:be,children:(0,F.jsx)(Pr,{className:w?"kanban-animate-spin":void 0})}),(0,F.jsxs)(Lo,{children:[(0,F.jsx)(bo,{asChild:!0,children:(0,F.jsx)(he,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,F.jsx)(Mr,{className:"kanban-icon"})})}),(0,F.jsxs)(Ea,{align:"start",children:[(0,F.jsxs)(Rt,{onClick:()=>{f(""),b(!0)},children:[(0,F.jsx)(Rr,{className:"kanban-icon"}),i("columnEdit")]}),(0,F.jsxs)(Rt,{onClick:()=>{f(""),L(!0)},children:[(0,F.jsx)(Fo,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,F.jsxs)(Lo,{children:[(0,F.jsx)(bo,{asChild:!0,children:(0,F.jsx)(he,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${T?" is-active":""}`,title:i("priorityFilter"),"aria-label":i("priorityFilter"),"aria-pressed":!!T,children:(0,F.jsx)(wa,{className:"kanban-icon"})})}),(0,F.jsxs)(Ea,{align:"start",children:[(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":!T,onSelect:()=>_(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:!T&&(0,F.jsx)(mt,{className:"kanban-icon"})}),i("all")]}),il.map(R=>(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":T===R,onSelect:()=>_(R),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:T===R&&(0,F.jsx)(mt,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-priority-dot",style:{background:jt[R].color}}),jt[R].label]},R))]})]}),(0,F.jsxs)(Lo,{children:[(0,F.jsx)(bo,{asChild:!0,children:(0,F.jsx)(he,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${y!==null?" is-active":""}`,title:y===null?i("labelFilter"):`${i("labelFilter")}: ${y||i("noLabel")}`,"aria-label":i("labelFilter"),"aria-pressed":y!==null,children:(0,F.jsx)(Fo,{className:"kanban-icon"})})}),(0,F.jsxs)(Ea,{align:"start",children:[(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":y===null,onSelect:()=>H(null),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:y===null&&(0,F.jsx)(mt,{className:"kanban-icon"})}),i("all")]}),(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":y==="",onSelect:()=>H(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:y===""&&(0,F.jsx)(mt,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(R=>(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":y===R.name,onSelect:()=>H(R.name),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:y===R.name&&(0,F.jsx)(mt,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-label-dot",style:{background:R.color}}),R.name]},R.name))]})]}),(0,F.jsxs)(Lo,{children:[(0,F.jsx)(bo,{asChild:!0,children:(0,F.jsx)(he,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${S?" is-active":""}`,title:i("dueDateFilter"),"aria-label":i("dueDateFilter"),"aria-pressed":!!S,children:(0,F.jsx)(ja,{className:"kanban-icon"})})}),(0,F.jsx)(Ea,{align:"start",children:["","today","overdue"].map(R=>(0,F.jsxs)(Rt,{role:"menuitemradio","aria-checked":S===R,onSelect:()=>D(R),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:S===R&&(0,F.jsx)(mt,{className:"kanban-icon"})}),i(R==="today"?"dueToday":R==="overdue"?"overdue":"all")]},R))})]}),(0,F.jsx)("div",{className:"kanban-toolbar-divider",role:"separator"}),(0,F.jsx)(Fm,{delayDuration:300,children:(0,F.jsxs)(Bm,{children:[(0,F.jsx)(Nm,{asChild:!0,children:(0,F.jsx)(he,{asChild:!0,variant:"ghost",size:"icon",className:"kanban-toolbar-button",children:(0,F.jsx)("a",{href:"https://github.com/alpacachen/dsh-kanban/issues/new/choose",target:"_blank",rel:"noopener noreferrer","aria-label":i("feedback"),children:(0,F.jsx)(la,{className:"kanban-icon"})})})}),(0,F.jsx)(Ri,{side:"right",children:i("feedback")})]})})]}),(0,F.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(R=>{let U=u.cards.filter(G=>G.columnId===R.id&&(!T||G.priority===T)&&(y===null||(G.label??"")===y)&&(G.id===m?.id||sm(G,S,u.completedColumnId,M)));return(0,F.jsx)(xm,{column:R,cards:U,totalCount:u.cards.filter(G=>G.columnId===R.id).length,filtered:!!(T||S)||y!==null,completed:R.id===u.completedColumnId,today:M,labels:u.labels,onAddCard:G=>{f(""),v({card:null,columnId:G.id})},onOpenCard:G=>{f(""),v({card:G,columnId:G.columnId})}},R.id)})})]}),(0,F.jsx)(Su,{children:m?(0,F.jsx)("div",{className:"kanban-drag-preview",children:(0,F.jsx)(Ci,{card:m,labels:u.labels,completed:m.columnId===u.completedColumnId,today:M})}):null})]}),(0,F.jsx)(pm,{error:d,open:x!==null,card:x?.card??null,labels:u.labels,completed:!!(it&&it.columnId===u.completedColumnId),completedAt:it?.completedAt??null,comments:it?.comments??[],activities:x?.card?u.activities.filter(R=>R.cardId===x.card.id):[],onOpenChange:R=>{R||v(null)},onSave:ee,onAddComment:(R,U)=>E("addComment",{id:R,content:U}),onDelete:R=>E("deleteCard",{id:R.id}),onChatWithAgent:oe}),(0,F.jsx)(Cm,{error:d,open:C,columns:u.columns,completedColumnId:u.completedColumnId,onSetCompletedColumn:R=>E("setCompletedColumn",{columnId:R}),onOpenChange:b,onReorder:(R,U)=>{let G=u.columns.findIndex($=>$.id===U);return G>=0?E("moveColumn",{id:R,toIndex:G}):Promise.resolve(!1)},onRename:(R,U)=>E("renameColumn",{id:R,title:U}),onDelete:R=>E("deleteColumn",{id:R}),onAdd:R=>E("addColumn",{title:R})}),(0,F.jsx)(Lm,{error:d,open:I,labels:u.labels,onOpenChange:L,onAdd:(R,U)=>E("addLabel",{name:R,color:U}),onUpdate:(R,U,G)=>E("updateLabel",{name:R,newName:U,color:G}),onDelete:R=>E("deleteLabel",{name:R})})]})}var pl=require("react");function Gm({sessionId:e,inputActions:t}){let a=(0,pl.useSyncExternalStore)(Um,qm);return(0,pl.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Hm(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Xm={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){Mc(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Ut("boardTab")},o=>(0,Di.createElement)(Vm,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,Di.createElement)(Gm,o)))}};var Km="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Km+"]")){let e=document.createElement("style");e.setAttribute(Km,""),e.textContent=_i,document.head.appendChild(e)}var Db=Xm;
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
lucide-react/dist/esm/icons/calendar-days.mjs:
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
lucide-react/dist/esm/icons/tags.mjs:
lucide-react/dist/esm/icons/trash.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.59.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})