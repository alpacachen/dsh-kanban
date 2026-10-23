window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var eh=Object.create;var an=Object.defineProperty;var th=Object.getOwnPropertyDescriptor;var ah=Object.getOwnPropertyNames;var oh=Object.getPrototypeOf,rh=Object.prototype.hasOwnProperty;var Oi=e=>{throw TypeError(e)};var nh=(e,t)=>{for(var a in t)an(e,a,{get:t[a],enumerable:!0})},Fi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ah(t))!rh.call(e,r)&&r!==a&&an(e,r,{get:()=>t[r],enumerable:!(o=th(t,r))||o.enumerable});return e};var j=(e,t,a)=>(a=e!=null?eh(oh(e)):{},Fi(t||!e||!e.__esModule?an(a,"default",{value:e,enumerable:!0}):a,e)),lh=e=>Fi(an({},"__esModule",{value:!0}),e);var Bi=(e,t,a)=>t.has(e)||Oi("Cannot "+a);var et=(e,t,a)=>(Bi(e,t,"read from private field"),a?a.call(e):t.get(e)),Ni=(e,t,a)=>t.has(e)?Oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),hl=(e,t,a,o)=>(Bi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var Mb={};nh(Mb,{default:()=>Db});module.exports=lh(Mb);var _i=`/*
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
`;var Pi=require("react");var Ce=require("react");var R=j(require("react")),qa=require("react-dom");var Me=require("react");function Ui(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Me.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var nr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function on(e){return"nodeType"in e}function rt(e){var t,a;return e?Fa(e)?e:on(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function rn(e){let{Document:t}=rt(e);return e instanceof t}function Ro(e){return Fa(e)?!1:e instanceof rt(e).HTMLElement}function xl(e){return e instanceof rt(e).SVGElement}function Ba(e){return e?Fa(e)?e.document:on(e)?rn(e)?e:Ro(e)||xl(e)?e.ownerDocument:document:document:document}var vt=nr?Me.useLayoutEffect:Me.useEffect;function lr(e){let t=(0,Me.useRef)(e);return vt(()=>{t.current=e}),(0,Me.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function qi(){let e=(0,Me.useRef)(null),t=(0,Me.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Me.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function ko(e,t){t===void 0&&(t=[e]);let a=(0,Me.useRef)(e);return vt(()=>{a.current!==e&&(a.current=e)},t),a}function Po(e,t){let a=(0,Me.useRef)();return(0,Me.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function sr(e){let t=lr(e),a=(0,Me.useRef)(null),o=(0,Me.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function ir(e){let t=(0,Me.useRef)();return(0,Me.useEffect)(()=>{t.current=e},[e]),t.current}var gl={};function Na(e,t){return(0,Me.useMemo)(()=>{if(t)return t;let a=gl[e]==null?0:gl[e]+1;return gl[e]=a,e+"-"+a},[e,t])}function Wi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var _a=Wi(1),Ha=Wi(-1);function ih(e){return"clientX"in e&&"clientY"in e}function Do(e){if(!e)return!1;let{KeyboardEvent:t}=rt(e.target);return t&&e instanceof t}function uh(e){if(!e)return!1;let{TouchEvent:t}=rt(e.target);return t&&e instanceof t}function ur(e){if(uh(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return ih(e)?{x:e.clientX,y:e.clientY}:null}var bt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[bt.Translate.toString(e),bt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),Hi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function zi(e){return e.matches(Hi)?e:e.querySelector(Hi)}var Ua=j(require("react")),dh={display:"none"};function Vi(e){let{id:t,value:a}=e;return Ua.default.createElement("div",{id:t,style:dh},a)}function Gi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ua.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Xi(){let[e,t]=(0,Ua.useState)("");return{announce:(0,Ua.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var nu=(0,R.createContext)(null);function ch(e){let t=(0,R.useContext)(nu);(0,R.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function fh(){let[e]=(0,R.useState)(()=>new Set),t=(0,R.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,R.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var ph={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},mh={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function hh(e){let{announcements:t=mh,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=ph}=e,{announce:n,announcement:l}=Xi(),s=Na("DndLiveRegion"),[i,u]=(0,R.useState)(!1);if((0,R.useEffect)(()=>{u(!0)},[]),ch((0,R.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;n(t.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;n(t.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!i)return null;let c=R.default.createElement(R.default.Fragment,null,R.default.createElement(Vi,{id:o,value:r.draggable}),R.default.createElement(Gi,{id:s,announcement:l}));return a?(0,qa.createPortal)(c,a):c}var qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(qe||(qe={}));function ln(){}function Va(e,t){return(0,R.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function un(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,R.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var _t=Object.freeze({x:0,y:0});function yl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function gh(e,t){let a=ur(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Rl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function xh(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function vl(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function gr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Ki(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var lu=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ki(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=yl(Ki(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(Rl)},dn=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=vl(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=vl(i),c=r.reduce((f,p,x)=>f+yl(u[x],p),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(Rl)};function Ch(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var kl=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Ch(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(xh)};function Lh(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var su=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Lh(o,s)){let u=vl(s).reduce((d,f)=>d+yl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(Rl)};function bh(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function iu(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_t}function vh(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Ih=vh(1);function uu(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function wh(e,t,a){let o=uu(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Sh={ignoreTransform:!1};function Ga(e,t){t===void 0&&(t=Sh);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=rt(e).getComputedStyle(e);u&&(a=wh(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function ji(e){return Ga(e,{ignoreTransform:!0})}function yh(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Rh(e,t){return t===void 0&&(t=rt(e).getComputedStyle(e)),t.position==="fixed"}function kh(e,t){t===void 0&&(t=rt(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function xr(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(rn(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Ro(r)||xl(r)||a.includes(r))return a;let n=rt(e).getComputedStyle(r);return r!==e&&kh(r,n)&&a.push(r),Rh(r,n)?a:o(r.parentNode)}return e?o(e):a}function du(e){let[t]=xr(e,1);return t??null}function Cl(e){return!nr||!e?null:Fa(e)?e:on(e)?rn(e)||e===Ba(e).scrollingElement?window:Ro(e)?e:null:null}function cu(e){return Fa(e)?e.scrollX:e.scrollLeft}function fu(e){return Fa(e)?e.scrollY:e.scrollTop}function Il(e){return{x:cu(e),y:fu(e)}}var Xe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Xe||(Xe={}));function pu(e){return!nr||!e?!1:e===document.scrollingElement}function mu(e){let t={x:0,y:0},a=pu(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Ph={x:.2,y:.2};function Dh(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Ph);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=mu(e),p={x:0,y:0},x={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(p.y=Xe.Backward,x.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(p.y=Xe.Forward,x.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(p.x=Xe.Forward,x.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(p.x=Xe.Backward,x.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:p,speed:x}}function Mh(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function hu(e){return e.reduce((t,a)=>_a(t,Il(a)),_t)}function Th(e){return e.reduce((t,a)=>t+cu(a),0)}function Ah(e){return e.reduce((t,a)=>t+fu(a),0)}function gu(e,t){if(t===void 0&&(t=Ga),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);du(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Eh=[["x",["left","right"],Th],["y",["top","bottom"],Ah]],cr=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=xr(a),r=hu(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Eh)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Wa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Oh(e){let{EventTarget:t}=rt(e);return e instanceof t?e:Ba(e)}function Ll(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Dt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Dt||(Dt={}));function $i(e){e.preventDefault()}function Fh(e){e.stopPropagation()}var ce;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ce||(ce={}));var xu={start:[ce.Space,ce.Enter],cancel:[ce.Esc],end:[ce.Space,ce.Enter,ce.Tab]},Bh=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ce.Right:return{...a,x:a.x+25};case ce.Left:return{...a,x:a.x-25};case ce.Down:return{...a,y:a.y+25};case ce.Up:return{...a,y:a.y-25}}},ba=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Wa(Ba(a)),this.windowListeners=new Wa(rt(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Dt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&gu(o),a(_t)}handleKeyDown(t){if(Do(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=xu,coordinateGetter:l=Bh,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:_t;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=Ha(d,c),p={x:0,y:0},{scrollableAncestors:x}=o.current;for(let m of x){let h=t.code,{isTop:g,isRight:v,isLeft:C,isBottom:b,maxScroll:w,minScroll:L}=mu(m),I=Mh(m),k={x:Math.min(h===ce.Right?I.right-I.width/2:I.right,Math.max(h===ce.Right?I.left:I.left+I.width/2,d.x)),y:Math.min(h===ce.Down?I.bottom-I.height/2:I.bottom,Math.max(h===ce.Down?I.top:I.top+I.height/2,d.y))},T=h===ce.Right&&!v||h===ce.Left&&!C,S=h===ce.Down&&!b||h===ce.Up&&!g;if(T&&k.x!==d.x){let M=m.scrollLeft+f.x,P=h===ce.Right&&M<=w.x||h===ce.Left&&M>=L.x;if(P&&!f.y){m.scrollTo({left:M,behavior:s});return}P?p.x=m.scrollLeft-M:p.x=h===ce.Right?m.scrollLeft-w.x:m.scrollLeft-L.x,p.x&&m.scrollBy({left:-p.x,behavior:s});break}else if(S&&k.y!==d.y){let M=m.scrollTop+f.y,P=h===ce.Down&&M<=w.y||h===ce.Up&&M>=L.y;if(P&&!f.x){m.scrollTo({top:M,behavior:s});return}P?p.y=m.scrollTop-M:p.y=h===ce.Down?m.scrollTop-w.y:m.scrollTop-L.y,p.y&&m.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,_a(Ha(d,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ba.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=xu,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Yi(e){return!!(e&&"distance"in e)}function Zi(e){return!!(e&&"delay"in e)}var fr=class{constructor(t,a,o){var r;o===void 0&&(o=Oh(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=Ba(l),this.documentListeners=new Wa(this.document),this.listeners=new Wa(o),this.windowListeners=new Wa(rt(l)),this.initialCoordinates=(r=ur(n))!=null?r:_t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.DragStart,$i),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),this.windowListeners.add(Dt.ContextMenu,$i),this.documentListeners.add(Dt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Zi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Yi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Dt.Click,Fh,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Dt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=ur(t))!=null?a:_t,u=Ha(r,i);if(!o&&s){if(Yi(s)){if(s.tolerance!=null&&Ll(u,s.tolerance))return this.handleCancel();if(Ll(u,s.distance))return this.handleStart()}if(Zi(s)&&Ll(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ce.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Nh={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Mo=class extends fr{constructor(t){let{event:a}=t,o=Ba(a.target);super(t,Nh,o)}};Mo.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var _h={move:{name:"mousemove"},end:{name:"mouseup"}},wl;(function(e){e[e.RightClick=2]="RightClick"})(wl||(wl={}));var pr=class extends fr{constructor(t){super(t,_h,Ba(t.event.target))}};pr.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===wl.RightClick?!1:(o?.({event:a}),!0)}}];var bl={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},mr=class extends fr{constructor(t){super(t,bl)}static setup(){return window.addEventListener(bl.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(bl.move.name,t)};function t(){}}};mr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var dr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(dr||(dr={}));var sn;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(sn||(sn={}));function Hh(e){let{acceleration:t,activator:a=dr.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=sn.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,p=qh({delta:d,disabled:!n}),[x,m]=qi(),h=(0,R.useRef)({x:0,y:0}),g=(0,R.useRef)({x:0,y:0}),v=(0,R.useMemo)(()=>{switch(a){case dr.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case dr.DraggableRect:return r}},[a,r,i]),C=(0,R.useRef)(null),b=(0,R.useCallback)(()=>{let L=C.current;if(!L)return;let I=h.current.x*g.current.x,k=h.current.y*g.current.y;L.scrollBy(I,k)},[]),w=(0,R.useMemo)(()=>s===sn.TreeOrder?[...u].reverse():u,[s,u]);(0,R.useEffect)(()=>{if(!n||!u.length||!v){m();return}for(let L of w){if(o?.(L)===!1)continue;let I=u.indexOf(L),k=c[I];if(!k)continue;let{direction:T,speed:S}=Dh(L,k,v,t,f);for(let M of["x","y"])p[M][T[M]]||(S[M]=0,T[M]=0);if(S.x>0||S.y>0){m(),C.current=L,x(b,l),h.current=S,g.current=T;return}}h.current={x:0,y:0},g.current={x:0,y:0},m()},[t,b,o,m,n,l,JSON.stringify(v),JSON.stringify(p),x,u,w,c,JSON.stringify(f)])}var Uh={x:{[Xe.Backward]:!1,[Xe.Forward]:!1},y:{[Xe.Backward]:!1,[Xe.Forward]:!1}};function qh(e){let{delta:t,disabled:a}=e,o=ir(t);return Po(r=>{if(a||!o||!r)return Uh;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Xe.Backward]:r.x[Xe.Backward]||n.x===-1,[Xe.Forward]:r.x[Xe.Forward]||n.x===1},y:{[Xe.Backward]:r.y[Xe.Backward]||n.y===-1,[Xe.Forward]:r.y[Xe.Forward]||n.y===1}}},[a,t,o])}function Wh(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Po(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function zh(e,t){return(0,R.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var hr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(hr||(hr={}));var Sl;(function(e){e.Optimized="optimized"})(Sl||(Sl={}));var Ji=new Map;function Vh(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,R.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,R.useRef)(e),d=h(),f=ko(d),p=(0,R.useCallback)(function(g){g===void 0&&(g=[]),!f.current&&l(v=>v===null?g:v.concat(g.filter(C=>!v.includes(C))))},[f]),x=(0,R.useRef)(null),m=Po(g=>{if(d&&!a)return Ji;if(!g||g===Ji||c.current!==e||n!=null){let v=new Map;for(let C of e){if(!C)continue;if(n&&n.length>0&&!n.includes(C.id)&&C.rect.current){v.set(C.id,C.rect.current);continue}let b=C.node.current,w=b?new cr(i(b),b):null;C.rect.current=w,w&&v.set(C.id,w)}return v}return g},[e,n,a,d,i]);return(0,R.useEffect)(()=>{c.current=e},[e]),(0,R.useEffect)(()=>{d||p()},[a,d]),(0,R.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,R.useEffect)(()=>{d||typeof s!="number"||x.current!==null||(x.current=setTimeout(()=>{p(),x.current=null},s))},[s,d,p,...o]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:n!=null};function h(){switch(u){case hr.Always:return!1;case hr.BeforeDragging:return a;default:return!a}}}function Pl(e,t){return Po(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Gh(e,t){return Pl(e,t)}function Xh(e){let{callback:t,disabled:a}=e,o=lr(t),r=(0,R.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,R.useEffect)(()=>()=>r?.disconnect(),[r]),r}function cn(e){let{callback:t,disabled:a}=e,o=lr(t),r=(0,R.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,R.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Kh(e){return new cr(Ga(e),e)}function Qi(e,t,a){t===void 0&&(t=Kh);let[o,r]=(0,R.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=Xh({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=cn({callback:n});return vt(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function jh(e){let t=Pl(e);return iu(e,t)}var eu=[];function $h(e){let t=(0,R.useRef)(e),a=Po(o=>e?o&&o!==eu&&e&&t.current&&e.parentNode===t.current.parentNode?o:xr(e):eu,[e]);return(0,R.useEffect)(()=>{t.current=e},[e]),a}function Yh(e){let[t,a]=(0,R.useState)(null),o=(0,R.useRef)(e),r=(0,R.useCallback)(n=>{let l=Cl(n.target);l&&a(s=>s?(s.set(l,Il(l)),new Map(s)):null)},[]);return(0,R.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Cl(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Il(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Cl(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,R.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>_a(n,l),_t):hu(e):_t,[e,t])}function tu(e,t){t===void 0&&(t=[]);let a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current=null},t),(0,R.useEffect)(()=>{let o=e!==_t;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?Ha(e,a.current):_t}function Zh(e){(0,R.useEffect)(()=>{if(!nr)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Jh(e,t){return(0,R.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Cu(e){return(0,R.useMemo)(()=>e?yh(e):null,[e])}var au=[];function Qh(e,t){t===void 0&&(t=Ga);let[a]=e,o=Cu(a?rt(a):null),[r,n]=(0,R.useState)(au);function l(){n(()=>e.length?e.map(i=>pu(i)?o:new cr(t(i),i)):au)}let s=cn({callback:l});return vt(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Lu(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Ro(t)?t:e}function eg(e){let{measure:t}=e,[a,o]=(0,R.useState)(null),r=(0,R.useCallback)(u=>{for(let{target:c}of u)if(Ro(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=cn({callback:r}),l=(0,R.useCallback)(u=>{let c=Lu(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=sr(l);return(0,R.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var tg=[{sensor:Mo,options:{}},{sensor:ba,options:{}}],ag={current:{}},nn={draggable:{measure:ji},droppable:{measure:ji,strategy:hr.WhileDragging,frequency:Sl.Optimized},dragOverlay:{measure:Ga}},za=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},og={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new za,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ln},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:nn,measureDroppableContainers:ln,windowRect:null,measuringScheduled:!1},bu={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ln,draggableNodes:new Map,over:null,measureDroppableContainers:ln},Cr=(0,R.createContext)(bu),vu=(0,R.createContext)(og);function rg(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new za}}}function ng(e,t){switch(t.type){case qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case qe.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case qe.DragEnd:case qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case qe.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new za(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case qe.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new za(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case qe.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new za(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function lg(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,R.useContext)(Cr),n=ir(o),l=ir(a?.id);return(0,R.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!Do(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=zi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Iu(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function sg(e){return(0,R.useMemo)(()=>({draggable:{...nn.draggable,...e?.draggable},droppable:{...nn.droppable,...e?.droppable},dragOverlay:{...nn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function ig(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,R.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;vt(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=iu(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=du(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var fn=(0,R.createContext)({..._t,scaleX:1,scaleY:1}),La;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(La||(La={}));var pn=(0,R.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=tg,collisionDetection:d=kl,measuring:f,modifiers:p,...x}=t,m=(0,R.useReducer)(ng,void 0,rg),[h,g]=m,[v,C]=fh(),[b,w]=(0,R.useState)(La.Uninitialized),L=b===La.Initialized,{draggable:{active:I,nodes:k,translate:T},droppable:{containers:S}}=h,M=I!=null?k.get(I):null,P=(0,R.useRef)({initial:null,translated:null}),N=(0,R.useMemo)(()=>{var ot;return I!=null?{id:I,data:(ot=M?.data)!=null?ot:ag,rect:P}:null},[I,M]),D=(0,R.useRef)(null),[U,V]=(0,R.useState)(null),[G,q]=(0,R.useState)(null),K=ko(x,Object.values(x)),W=Na("DndDescribedBy",l),se=(0,R.useMemo)(()=>S.getEnabled(),[S]),A=sg(f),{droppableRects:ee,measureDroppableContainers:Ue,measuringScheduled:xe}=Vh(se,{dragging:L,dependencies:[T.x,T.y],config:A.droppable}),O=Wh(k,I),Le=(0,R.useMemo)(()=>G?ur(G):null,[G]),ve=Qm(),ge=Gh(O,A.draggable.measure);ig({activeNode:I!=null?k.get(I):null,config:ve.layoutShiftCompensation,initialRect:ge,measure:A.draggable.measure});let _=Qi(O,A.draggable.measure,ge),be=Qi(O?O.parentElement:null),ie=(0,R.useRef)({activatorEvent:null,active:null,activeNode:O,collisionRect:null,collisions:null,droppableRects:ee,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Y=S.getNodeFor((a=ie.current.over)==null?void 0:a.id),J=eg({measure:A.dragOverlay.measure}),ae=(o=J.nodeRef.current)!=null?o:O,y=L?(r=J.rect)!=null?r:_:null,H=!!(J.nodeRef.current&&J.rect),z=jh(H?null:_),Z=Cu(ae?rt(ae):null),Ie=$h(L?Y??O:null),de=Qh(Ie),ke=Iu(p,{transform:{x:T.x-z.x,y:T.y-z.y,scaleX:1,scaleY:1},activatorEvent:G,active:N,activeNodeRect:_,containerNodeRect:be,draggingNodeRect:y,over:ie.current.over,overlayNodeRect:J.rect,scrollableAncestors:Ie,scrollableAncestorRects:de,windowRect:Z}),Je=Le?_a(Le,T):null,Nt=Yh(Ie),kt=tu(Nt),Di=tu(Nt,[_]),gt=_a(ke,kt),oa=y?Ih(y,ke):null,tr=N&&oa?d({active:N,collisionRect:oa,droppableRects:ee,droppableContainers:se,pointerCoordinates:Je}):null,Mi=gr(tr,"id"),[ha,Ti]=(0,R.useState)(null),jm=H?ke:_a(ke,Di),$m=bh(jm,(n=ha?.rect)!=null?n:null,_),pl=(0,R.useRef)(null),Ai=(0,R.useCallback)((ot,xt)=>{let{sensor:Ct,options:ga}=xt;if(D.current==null)return;let Pt=k.get(D.current);if(!Pt)return;let Lt=ot.nativeEvent,jt=new Ct({active:D.current,activeNode:Pt,event:Lt,options:ga,context:ie,onAbort(Qe){if(!k.get(Qe))return;let{onDragAbort:$t}=K.current,ra={id:Qe};$t?.(ra),v({type:"onDragAbort",event:ra})},onPending(Qe,xa,$t,ra){if(!k.get(Qe))return;let{onDragPending:or}=K.current,Ca={id:Qe,constraint:xa,initialCoordinates:$t,offset:ra};or?.(Ca),v({type:"onDragPending",event:Ca})},onStart(Qe){let xa=D.current;if(xa==null)return;let $t=k.get(xa);if(!$t)return;let{onDragStart:ra}=K.current,ar={activatorEvent:Lt,active:{id:xa,data:$t.data,rect:P}};(0,qa.unstable_batchedUpdates)(()=>{ra?.(ar),w(La.Initializing),g({type:qe.DragStart,initialCoordinates:Qe,active:xa}),v({type:"onDragStart",event:ar}),V(pl.current),q(Lt)})},onMove(Qe){g({type:qe.DragMove,coordinates:Qe})},onEnd:yo(qe.DragEnd),onCancel:yo(qe.DragCancel)});pl.current=jt;function yo(Qe){return async function(){let{active:$t,collisions:ra,over:ar,scrollAdjustedTranslate:or}=ie.current,Ca=null;if($t&&or){let{cancelDrop:rr}=K.current;Ca={activatorEvent:Lt,active:$t,collisions:ra,delta:or,over:ar},Qe===qe.DragEnd&&typeof rr=="function"&&await Promise.resolve(rr(Ca))&&(Qe=qe.DragCancel)}D.current=null,(0,qa.unstable_batchedUpdates)(()=>{g({type:Qe}),w(La.Uninitialized),Ti(null),V(null),q(null),pl.current=null;let rr=Qe===qe.DragEnd?"onDragEnd":"onDragCancel";if(Ca){let ml=K.current[rr];ml?.(Ca),v({type:rr,event:Ca})}})}}},[k]),Ym=(0,R.useCallback)((ot,xt)=>(Ct,ga)=>{let Pt=Ct.nativeEvent,Lt=k.get(ga);if(D.current!==null||!Lt||Pt.dndKit||Pt.defaultPrevented)return;let jt={active:Lt};ot(Ct,xt.options,jt)===!0&&(Pt.dndKit={capturedBy:xt.sensor},D.current=ga,Ai(Ct,xt))},[k,Ai]),Ei=zh(c,Ym);Zh(c),vt(()=>{_&&b===La.Initializing&&w(La.Initialized)},[_,b]),(0,R.useEffect)(()=>{let{onDragMove:ot}=K.current,{active:xt,activatorEvent:Ct,collisions:ga,over:Pt}=ie.current;if(!xt||!Ct)return;let Lt={active:xt,activatorEvent:Ct,collisions:ga,delta:{x:gt.x,y:gt.y},over:Pt};(0,qa.unstable_batchedUpdates)(()=>{ot?.(Lt),v({type:"onDragMove",event:Lt})})},[gt.x,gt.y]),(0,R.useEffect)(()=>{let{active:ot,activatorEvent:xt,collisions:Ct,droppableContainers:ga,scrollAdjustedTranslate:Pt}=ie.current;if(!ot||D.current==null||!xt||!Pt)return;let{onDragOver:Lt}=K.current,jt=ga.get(Mi),yo=jt&&jt.rect.current?{id:jt.id,rect:jt.rect.current,data:jt.data,disabled:jt.disabled}:null,Qe={active:ot,activatorEvent:xt,collisions:Ct,delta:{x:Pt.x,y:Pt.y},over:yo};(0,qa.unstable_batchedUpdates)(()=>{Ti(yo),Lt?.(Qe),v({type:"onDragOver",event:Qe})})},[Mi]),vt(()=>{ie.current={activatorEvent:G,active:N,activeNode:O,collisionRect:oa,collisions:tr,droppableRects:ee,draggableNodes:k,draggingNode:ae,draggingNodeRect:y,droppableContainers:S,over:ha,scrollableAncestors:Ie,scrollAdjustedTranslate:gt},P.current={initial:y,translated:oa}},[N,O,tr,oa,k,ae,y,ee,S,ha,Ie,gt]),Hh({...ve,delta:T,draggingRect:oa,pointerCoordinates:Je,scrollableAncestors:Ie,scrollableAncestorRects:de});let Zm=(0,R.useMemo)(()=>({active:N,activeNode:O,activeNodeRect:_,activatorEvent:G,collisions:tr,containerNodeRect:be,dragOverlay:J,draggableNodes:k,droppableContainers:S,droppableRects:ee,over:ha,measureDroppableContainers:Ue,scrollableAncestors:Ie,scrollableAncestorRects:de,measuringConfiguration:A,measuringScheduled:xe,windowRect:Z}),[N,O,_,G,tr,be,J,k,S,ee,ha,Ue,Ie,de,A,xe,Z]),Jm=(0,R.useMemo)(()=>({activatorEvent:G,activators:Ei,active:N,activeNodeRect:_,ariaDescribedById:{draggable:W},dispatch:g,draggableNodes:k,over:ha,measureDroppableContainers:Ue}),[G,Ei,N,_,g,W,k,ha,Ue]);return R.default.createElement(nu.Provider,{value:C},R.default.createElement(Cr.Provider,{value:Jm},R.default.createElement(vu.Provider,{value:Zm},R.default.createElement(fn.Provider,{value:$m},u)),R.default.createElement(lg,{disabled:s?.restoreFocus===!1})),R.default.createElement(hh,{...s,hiddenTextDescribedById:W}));function Qm(){let ot=U?.autoScrollEnabled===!1,xt=typeof i=="object"?i.enabled===!1:i===!1,Ct=L&&!ot&&!xt;return typeof i=="object"?{...i,enabled:Ct}:{enabled:Ct}}}),ug=(0,R.createContext)(null),ou="button",dg="Draggable";function wu(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Na(dg),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,R.useContext)(Cr),{role:p=ou,roleDescription:x="draggable",tabIndex:m=0}=r??{},h=i?.id===t,g=(0,R.useContext)(h?fn:ug),[v,C]=sr(),[b,w]=sr(),L=Jh(l,t),I=ko(a);vt(()=>(d.set(t,{id:t,key:n,node:v,activatorNode:b,data:I}),()=>{let T=d.get(t);T&&T.key===n&&d.delete(t)}),[d,t]);let k=(0,R.useMemo)(()=>({role:p,tabIndex:m,"aria-disabled":o,"aria-pressed":h&&p===ou?!0:void 0,"aria-roledescription":x,"aria-describedby":c.draggable}),[o,p,m,h,x,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:k,isDragging:h,listeners:o?void 0:L,node:v,over:f,setNodeRef:C,setActivatorNodeRef:w,transform:g}}function Lr(){return(0,R.useContext)(vu)}var cg="Droppable",fg={timeout:25};function mn(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Na(cg),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,R.useContext)(Cr),c=(0,R.useRef)({disabled:a}),d=(0,R.useRef)(!1),f=(0,R.useRef)(null),p=(0,R.useRef)(null),{disabled:x,updateMeasurementsFor:m,timeout:h}={...fg,...r},g=ko(m??o),v=(0,R.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(g.current)?g.current:[g.current]),p.current=null},h)},[h]),C=cn({callback:v,disabled:x||!l}),b=(0,R.useCallback)((k,T)=>{C&&(T&&(C.unobserve(T),d.current=!1),k&&C.observe(k))},[C]),[w,L]=sr(b),I=ko(t);return(0,R.useEffect)(()=>{!C||!w.current||(C.disconnect(),d.current=!1,C.observe(w.current))},[w,C]),(0,R.useEffect)(()=>(s({type:qe.RegisterDroppable,element:{id:o,key:n,disabled:a,node:w,rect:f,data:I}}),()=>s({type:qe.UnregisterDroppable,key:n,id:o})),[o]),(0,R.useEffect)(()=>{a!==c.current.disabled&&(s({type:qe.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:w,over:i,setNodeRef:L}}function pg(e){let{animation:t,children:a}=e,[o,r]=(0,R.useState)(null),[n,l]=(0,R.useState)(null),s=ir(a);return!a&&!o&&s&&r(s),vt(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),R.default.createElement(R.default.Fragment,null,a,o?(0,R.cloneElement)(o,{ref:l}):null)}var mg={x:0,y:0,scaleX:1,scaleY:1};function hg(e){let{children:t}=e;return R.default.createElement(Cr.Provider,{value:bu},R.default.createElement(fn.Provider,{value:mg},t))}var gg={position:"fixed",touchAction:"none"},xg=e=>Do(e)?"transform 250ms ease":void 0,Cg=(0,R.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=xg}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...gg,width:s.width,height:s.height,top:s.top,left:s.left,transform:bt.Transform.toString(d),transformOrigin:r&&o?gh(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return R.default.createElement(a,{className:l,style:f,ref:t},n)}),Lg=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},bg=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:bt.Transform.toString(t)},{transform:bt.Transform.toString(a)}]},vg={duration:250,easing:"ease",keyframes:bg,sideEffects:Lg({styles:{active:{opacity:"0"}}})};function Ig(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return lr((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Lu(l);if(!u)return;let{transform:c}=rt(l).getComputedStyle(l),d=uu(c);if(!d)return;let f=typeof t=="function"?t:wg(t);return gu(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function wg(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...vg,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},p=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[x]=p,m=p[p.length-1];if(JSON.stringify(x)===JSON.stringify(m))return;let h=o?.({active:l,dragOverlay:s,...u}),g=s.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(v=>{g.onfinish=()=>{h?.(),v()}})}}var ru=0;function Sg(e){return(0,R.useMemo)(()=>{if(e!=null)return ru++,ru},[e])}var Su=R.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:x,droppableContainers:m,dragOverlay:h,over:g,measuringConfiguration:v,scrollableAncestors:C,scrollableAncestorRects:b,windowRect:w}=Lr(),L=(0,R.useContext)(fn),I=Sg(d?.id),k=Iu(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:h.rect,over:g,overlayNodeRect:h.rect,scrollableAncestors:C,scrollableAncestorRects:b,transform:L,windowRect:w}),T=Pl(f),S=Ig({config:o,draggableNodes:x,droppableContainers:m,measuringConfiguration:v}),M=T?h.setRef:void 0;return R.default.createElement(hg,null,R.default.createElement(pg,{animation:S},d&&I?R.default.createElement(Cg,{key:I,id:d.id,ref:M,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:T,style:{zIndex:u,...r},transform:k},a):null))});var Te=j(require("react"));function yu(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function yg(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function hn(e){return e!==null&&e>=0}function Rg(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function kg(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Ru=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=yu(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var gn={scaleX:1,scaleY:1},Cn=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...gn}:null}let i=Pg(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...gn}:r<a&&r>=l?{x:0,y:s.height+i,...gn}:{x:0,y:0,...gn}};function Pg(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var ku="Sortable",Pu=Te.default.createContext({activeIndex:-1,containerId:ku,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ru,disabled:{draggable:!1,droppable:!1}});function Ln(e){let{children:t,id:a,items:o,strategy:r=Ru,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=Lr(),d=Na(ku,a),f=s.rect!==null,p=(0,Te.useMemo)(()=>o.map(L=>typeof L=="object"&&"id"in L?L.id:L),[o]),x=l!=null,m=l?p.indexOf(l.id):-1,h=u?p.indexOf(u.id):-1,g=(0,Te.useRef)(p),v=!Rg(p,g.current),C=h!==-1&&m===-1||v,b=kg(n);vt(()=>{v&&x&&c(p)},[v,p,x,c]),(0,Te.useEffect)(()=>{g.current=p},[p]);let w=(0,Te.useMemo)(()=>({activeIndex:m,containerId:d,disabled:b,disableTransforms:C,items:p,overIndex:h,useDragOverlay:f,sortedRects:yg(p,i),strategy:r}),[m,d,b.draggable,b.droppable,C,p,h,i,f,r]);return Te.default.createElement(Pu.Provider,{value:w},t)}var Dg=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return yu(a,o,r).indexOf(t)},Mg=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Tg={duration:200,easing:"ease"},Du="transform",Ag=bt.Transition.toString({property:Du,duration:0,easing:"linear"}),Eg={roleDescription:"sortable"};function Og(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Te.useState)(null),s=(0,Te.useRef)(a);return vt(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Ga(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Te.useEffect)(()=>{n&&l(null)},[n]),n}function bn(e){let{animateLayoutChanges:t=Mg,attributes:a,disabled:o,data:r,getNewIndex:n=Dg,id:l,strategy:s,resizeObserverConfig:i,transition:u=Tg}=e,{items:c,containerId:d,activeIndex:f,disabled:p,disableTransforms:x,sortedRects:m,overIndex:h,useDragOverlay:g,strategy:v}=(0,Te.useContext)(Pu),C=Fg(o,p),b=c.indexOf(l),w=(0,Te.useMemo)(()=>({sortable:{containerId:d,index:b,items:c},...r}),[d,r,b,c]),L=(0,Te.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:I,node:k,isOver:T,setNodeRef:S}=mn({id:l,data:w,disabled:C.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...i}}),{active:M,activatorEvent:P,activeNodeRect:N,attributes:D,setNodeRef:U,listeners:V,isDragging:G,over:q,setActivatorNodeRef:K,transform:W}=wu({id:l,data:w,attributes:{...Eg,...a},disabled:C.draggable}),se=Ui(S,U),A=!!M,ee=A&&!x&&hn(f)&&hn(h),Ue=!g&&G,xe=Ue&&ee?W:null,Le=ee?xe??(s??v)({rects:m,activeNodeRect:N,activeIndex:f,overIndex:h,index:b}):null,ve=hn(f)&&hn(h)?n({id:l,items:c,activeIndex:f,overIndex:h}):b,ge=M?.id,_=(0,Te.useRef)({activeId:ge,items:c,newIndex:ve,containerId:d}),be=c!==_.current.items,ie=t({active:M,containerId:d,isDragging:G,isSorting:A,id:l,index:b,items:c,newIndex:_.current.newIndex,previousItems:_.current.items,previousContainerId:_.current.containerId,transition:u,wasDragging:_.current.activeId!=null}),Y=Og({disabled:!ie,index:b,node:k,rect:I});return(0,Te.useEffect)(()=>{A&&_.current.newIndex!==ve&&(_.current.newIndex=ve),d!==_.current.containerId&&(_.current.containerId=d),c!==_.current.items&&(_.current.items=c)},[A,ve,d,c]),(0,Te.useEffect)(()=>{if(ge===_.current.activeId)return;if(ge!=null&&_.current.activeId==null){_.current.activeId=ge;return}let ae=setTimeout(()=>{_.current.activeId=ge},50);return()=>clearTimeout(ae)},[ge]),{active:M,activeIndex:f,attributes:D,data:w,rect:I,index:b,newIndex:ve,items:c,isOver:T,isSorting:A,isDragging:G,listeners:V,node:k,overIndex:h,over:q,setNodeRef:se,setActivatorNodeRef:K,setDroppableNodeRef:S,setDraggableNodeRef:U,transform:Y??Le,transition:J()};function J(){if(Y||be&&_.current.newIndex===b)return Ag;if(!(Ue&&!Do(P)||!u)&&(A||ie))return bt.Transition.toString({...u,property:Du})}}function Fg(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function xn(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Bg=[ce.Down,ce.Right,ce.Up,ce.Left],vn=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Bg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ce.Down:o.top<f.top&&i.push(d);break;case ce.Up:o.top>f.top&&i.push(d);break;case ce.Left:o.left>f.left&&i.push(d);break;case ce.Right:o.left<f.left&&i.push(d);break}});let u=dn({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=gr(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,x=f?.node.current;if(x&&p&&d&&f){let h=xr(x).some((L,I)=>s[I]!==L),g=Mu(d,f),v=Ng(d,f),C=h||!g?{x:0,y:0}:{x:v?o.width-p.width:0,y:v?o.height-p.height:0},b={x:p.left,y:p.top};return C.x&&C.y?b:Ha(b,C)}}}};function Mu(e,t){return!xn(e)||!xn(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Ng(e,t){return!xn(e)||!xn(t)||!Mu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var In=require("react");var Tu=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Au(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Tu(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var Eu=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var Ou=e=>{let t=Eu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var vr=require("react");var br=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var va={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Dl(e){return e!=null}function Fu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??va.width,n=e.size??e.height??va.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?br(...i):br("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??va["stroke-width"])*Number(e.size??e.width??va.width)/Number(t.size??t.width??va.width):t.strokeWidth??va["stroke-width"];return["svg",{...Object.entries(va).reduce((f,[p,x])=>(f[o(p)]=x,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&Dl(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&Dl(t.width)&&{[o("width")]:t.width},..."height"in t&&Dl(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,x,m]=f,h=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...x}:x;return m?[p,h,m]:[p,h]})]}function Bu(e,t={}){return Fu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var Nu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var To=require("react");var _g=(0,To.createContext)({});var _u=()=>(0,To.useContext)(_g);var Hu=(0,vr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:x=2,absoluteStrokeWidth:m=!1,nonScalingStroke:h=!1,color:g="currentColor",className:v=""}=_u()??{},C=!!i||Nu(d),[b,w,L=[]]=Bu(c,{color:e??g,width:a??t??p,height:o??t??p,strokeWidth:r??x,absoluteStrokeWidth:n??m,nonScalingStroke:l??h,className:br(v,s),hasA11yProp:C,attributes:d});return(0,vr.createElement)(b,{ref:f,...w},[...L.map(([I,k])=>(0,vr.createElement)(I,k)),...Array.isArray(i)?i:[i]])});function pe(e,t=[],a=[]){let o=typeof e=="string"?Au(e,t,a):e,r=(0,In.forwardRef)(({className:n,...l},s)=>(0,In.createElement)(Hu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=Ou(o.name)),r}var Uu={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Uu.node;var Xa=pe(Uu);var qu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};qu.node;var ft=pe(qu);var Wu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Wu.node;var Ao=pe(Wu);var zu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};zu.node;var Ir=pe(zu);var Vu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Vu.node;var Ia=pe(Vu);var Gu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};Gu.node;var wr=pe(Gu);var Xu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};Xu.node;var Sr=pe(Xu);var Ku={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Ku.node;var na=pe(Ku);var ju={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};ju.node;var yr=pe(ju);var $u={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};$u.node;var Ka=pe($u);var Yu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Yu.node;var Rr=pe(Yu);var Zu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Zu.node;var kr=pe(Zu);var Ju={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};Ju.node;var Pr=pe(Ju);var Qu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Qu.node;var Eo=pe(Qu);var ed={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};ed.node;var Dr=pe(ed);var td={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};td.node;var Mt=pe(td);var ad={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ad.node;var la=pe(ad);var He=require("react");var fm=require("@deepseek-ai/dsh-client-ui-primitives");var hd=j(require("react"),1);var tt=j(require("react"),1);var od=j(require("react"),1),Hg=Object.defineProperty,Tl=(e,t)=>Hg(e,"name",{value:t,configurable:!0});function Ml(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Tl(Ml,"setRef");function rd(...e){return t=>{let a=!1,o=e.map(r=>{let n=Ml(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():Ml(e[r],null)}}}}Tl(rd,"composeRefs");function oe(...e){return od.useCallback(rd(...e),e)}Tl(oe,"useComposedRefs");var Ug=Object.defineProperty,It=(e,t)=>Ug(e,"name",{value:t,configurable:!0});function nt(e){let t=tt.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];r=cd(r),tt.Children.forEach(r,f=>{if(ud(f)){s=!0;let p=f,x="child"in p.props?p.props.child:p.props.children;for(;El(x)&&typeof wn=="function";)x=wn(x._payload);l=qg(p,x),i.push(l?.props?.children)}else i.push(f)}),l?l=tt.cloneElement(l,void 0,i):!s&&tt.Children.count(r)===1&&tt.isValidElement(r)&&(l=r);let u=l?id(l):void 0,c=oe(o,u);if(!l){if(r||r===0)throw new Error(s?Vg(e):zg(e));return r}let d=sd(n,l.props??{});return l.type!==tt.Fragment&&(d.ref=o?c:u),tt.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}It(nt,"createSlot");var nd=nt("Slot"),ld=Symbol.for("radix.slottable");function Al(e){let t=It(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=ld,t}It(Al,"createSlottable");var qg=It((e,t)=>"child"in e.props?tt.isValidElement(t)?tt.cloneElement(t,void 0,e.props.children(t.props.children)):null:tt.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function sd(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=fd(n,r))}return{...e,...a}}It(sd,"mergeProps");function id(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}It(id,"getElementRef");function ud(e){return tt.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ld}It(ud,"isSlottable");var Wg=Symbol.for("react.lazy");function El(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Wg&&"_payload"in e&&dd(e._payload)}It(El,"isLazyComponent");function dd(e){return typeof e=="object"&&e!==null&&"then"in e}It(dd,"isPromiseLike");function cd(e){let t=e;for(;El(t)&&typeof wn=="function";)t=wn(t._payload);return t}It(cd,"useUnwrappedLazy");function fd(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}It(fd,"concatAriaDescribedby");var zg=It(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Vg=It(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),wn=tt[" use ".trim().toString()];function pd(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=pd(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function md(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=pd(e))&&(o&&(o+=" "),o+=t);return o}function re(...e){return md(e)}var gd=require("react/jsx-runtime");function Gg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return re("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var me=hd.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,gd.jsx)(o?nd:"button",{className:Gg({variant:t,size:a,className:e}),ref:n,...r}));me.displayName="Button";var Ur=j(require("react"),1);var ye=j(require("react"),1);var Xg=Object.defineProperty,Oo=(e,t)=>Xg(e,"name",{value:t,configurable:!0}),xd=!!(typeof window<"u"&&window.document&&window.document.createElement);function X(e,t,{checkForDefaultPrevented:a=!0}={}){return Oo(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}Oo(X,"composeEventHandlers");function Kg(e){if(!xd)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}Oo(Kg,"getOwnerWindow");function Ol(e){if(!xd)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}Oo(Ol,"getOwnerDocument");function Cd(e,t=!1){let{activeElement:a}=Ol(e);if(!a?.nodeName)return null;if(Ld(a)&&a.contentDocument)return Cd(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Ol(a).getElementById(o);if(r)return r}}return a}Oo(Cd,"getActiveElement");function Ld(e){return e.tagName==="IFRAME"}Oo(Ld,"isFrame");var At=j(require("react"),1),Fl=require("react/jsx-runtime"),jg=Object.defineProperty,Tt=(e,t)=>jg(e,"name",{value:t,configurable:!0});function $g(e,t){let a=At.createContext(t);a.displayName=e+"Context";let o=Tt(n=>{let{children:l,...s}=n,i=At.useMemo(()=>s,Object.values(s));return(0,Fl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=At.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return Tt(r,"useContext"),[o,r]}Tt($g,"createContext");function We(e,t=[]){let a=[];function o(n,l){let s=At.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=Tt(d=>{let{scope:f,children:p,...x}=d,m=f?.[e]?.[i]||s,h=At.useMemo(()=>x,Object.values(x));return(0,Fl.jsx)(m.Provider,{value:h,children:p})},"Provider");u.displayName=n+"Provider";function c(d,f,p={}){let{optional:x=!1}=p,m=f?.[e]?.[i]||s,h=At.useContext(m);if(h)return h;if(l!==void 0)return l;if(!x)throw new Error(`\`${d}\` must be used within \`${n}\``)}return Tt(c,"useContext"),[u,c]}Tt(o,"createContext");let r=Tt(()=>{let n=a.map(l=>At.createContext(l));return Tt(function(s){let i=s?.[e]||n;return At.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,bd(r,...t)]}Tt(We,"createContextScope");function bd(...e){let t=e[0];if(e.length===1)return t;let a=Tt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return Tt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return At.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}Tt(bd,"composeContextScopes");var Bl=j(require("react"),1);var vd=j(require("react"),1),ue=globalThis?.document?vd.useLayoutEffect:()=>{};var Yg=Object.defineProperty,Zg=(e,t)=>Yg(e,"name",{value:t,configurable:!0}),Jg=Bl[" useId ".trim().toString()]||(()=>{}),Qg=0;function it(e){let[t,a]=Bl.useState(Jg());return ue(()=>{e||a(o=>o??String(Qg++))},[e]),e||(t?`radix-${t}`:"")}Zg(it,"useId");var Et=j(require("react"),1);var Sn=!1;var Ht=j(require("react"),1);var Fo=j(require("react"),1),ex=Object.defineProperty,tx=(e,t)=>ex(e,"name",{value:t,configurable:!0}),Id=Fo[" useEffectEvent ".trim().toString()],wd=Fo[" useInsertionEffect ".trim().toString()];function Nl(e){if(typeof Id=="function")return Id(e);let t=Fo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof wd=="function"?wd(()=>{t.current=e}):ue(()=>{t.current=e}),Fo.useMemo(()=>((...a)=>t.current?.(...a)),[])}tx(Nl,"useEffectEvent");var ax=Object.defineProperty,Mr=(e,t)=>ax(e,"name",{value:t,configurable:!0}),ox=Et[" useInsertionEffect ".trim().toString()]||ue;function Ot({prop:e,defaultProp:t,onChange:a=Mr(()=>{},"onChange"),caller:o}){let[r,n,l]=yd({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Sn){let c=Et.useRef(e!==void 0);Et.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=Et.useCallback(c=>{if(s){let d=Rd(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}Mr(Ot,"useControllableState");function yd({defaultProp:e,onChange:t}){let[a,o]=Et.useState(e),r=Et.useRef(a),n=Et.useRef(t);return ox(()=>{n.current=t},[t]),Et.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Mr(yd,"useUncontrolledState");function Rd(e){return typeof e=="function"}Mr(Rd,"isFunction");var Sd=Symbol("RADIX:SYNC_STATE");function rx(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=Nl(l);if(Sn){let h=Ht.useRef(r!==void 0);Ht.useEffect(()=>{let g=h.current;g!==i&&console.warn(`${s} is changing from ${g?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=Ht.useReducer((h,g)=>{if(g.type===Sd)return{...h,state:g.state};let v=e(h,g);return i&&!Object.is(v.state,h.state)&&u(v.state),v},...c),p=d.state,x=Ht.useRef(p);Ht.useEffect(()=>{x.current!==p&&(x.current=p,i||u(p))},[p,x,i]);let m=Ht.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return Ht.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:Sd,state:r})},[r,d.state,i]),[m,f]}Mr(rx,"useControllableStateReducer");var we=j(require("react"),1);var kd=j(require("react"),1),Pd=j(require("react-dom"),1);var Dd=require("react/jsx-runtime"),nx=Object.defineProperty,lx=(e,t)=>nx(e,"name",{value:t,configurable:!0}),sx=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],le=sx.reduce((e,t)=>{let a=nt(`Primitive.${t}`),o=kd.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Dd.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Tr(e,t){e&&Pd.flushSync(()=>e.dispatchEvent(t))}lx(Tr,"dispatchDiscreteCustomEvent");var Ar=j(require("react"),1),ix=Object.defineProperty,ux=(e,t)=>ix(e,"name",{value:t,configurable:!0}),Md=Ar[" useInsertionEffect ".trim().toString()];function Ke(e){let t=Ar.useRef(e);return typeof Md=="function"?Md(()=>{t.current=e}):ue(()=>{t.current=e}),Ar.useMemo(()=>((...a)=>t.current?.(...a)),[])}ux(Ke,"useCallbackRef");var Ad=require("react/jsx-runtime"),dx=Object.defineProperty,je=(e,t)=>dx(e,"name",{value:t,configurable:!0}),_l="dismissableLayer.update",cx="dismissableLayer.pointerDownOutside",fx="dismissableLayer.focusOutside",Td,Ed=we.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),wa=we.forwardRef(je(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=we.useContext(Ed),[f,p]=we.useState(null),x=f?.ownerDocument??globalThis?.document,[,m]=we.useState({}),h=oe(a,p),g=Array.from(d.layers),[v]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),C=v?g.indexOf(v):-1,b=f?g.indexOf(f):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,L=b>=C,I=we.useRef(!1),k=Od(P=>{l?.(P),i?.(P),P.defaultPrevented||u?.()},{ownerDocument:x,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:I,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:we.useCallback(P=>{if(!(P instanceof Node))return!1;let N=[...d.branches].some(D=>D.contains(P));return L&&!N},[d.branches,L])}),T=Fd(P=>{if(r&&I.current)return;let N=P.target;[...d.branches].some(U=>U.contains(N))||(s?.(P),i?.(P),P.defaultPrevented||u?.())},x),S=f?b===g.length-1:!1,M=Ke(P=>{P.key==="Escape"&&(n?.(P),!P.defaultPrevented&&u&&(P.preventDefault(),u()))});return we.useEffect(()=>{if(S)return x.addEventListener("keydown",M,{capture:!0}),()=>x.removeEventListener("keydown",M,{capture:!0})},[x,S,M]),we.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Td=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Hl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(x.body.style.pointerEvents=Td))}},[f,x,o,d]),we.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Hl())},[f,d]),we.useEffect(()=>{let P=je(()=>m({}),"handleUpdate");return document.addEventListener(_l,P),()=>document.removeEventListener(_l,P)},[]),(0,Ad.jsx)(le.div,{...c,ref:h,style:{pointerEvents:w?L?"auto":"none":void 0,...t.style},onFocusCapture:X(t.onFocusCapture,T.onFocusCapture),onBlurCapture:X(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:X(t.onPointerDownCapture,k.onPointerDownCapture)})},"DismissableLayer"));function Ul(){let e=we.useContext(Ed),[t,a]=we.useState(null);return we.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}je(Ul,"useDismissableLayerSurface");var px=je(()=>!0,"IS_TRUE");function Od(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=px}=t,s=Ke(e),i=we.useRef(!1),u=we.useRef(!1),c=we.useRef(new Map),d=we.useRef(()=>{});return we.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}je(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}je(p,"isOutsideInteractionIntercepted");function x(C){if(!u.current)return;let b=C.target;b instanceof Node&&[...n].some(L=>L.contains(b))||c.current.set(C.type,!0),C.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}je(x,"handleInteractionCapture");function m(C){u.current&&c.current.set(C.type,!1)}je(m,"handleInteractionBubble");let h=je(C=>{if(C.target&&!i.current){let w=function(){a.removeEventListener("click",d.current);let I=p();f(),I||ql(cx,s,L,{discrete:!0})};var b=w;if(je(w,"handleAndDispatchPointerDownOutsideEvent"),!l(C.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let L={originalEvent:C};u.current=!0,r.current=o&&C.button===0,c.current.clear(),!o||C.button!==0?w():(a.removeEventListener("click",d.current),d.current=w,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),g=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let C of g)a.addEventListener(C,x,!0),a.addEventListener(C,m);let v=window.setTimeout(()=>{a.addEventListener("pointerdown",h)},0);return()=>{window.clearTimeout(v),a.removeEventListener("pointerdown",h),a.removeEventListener("click",d.current);for(let C of g)a.removeEventListener(C,x,!0),a.removeEventListener(C,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:je(()=>i.current=!0,"onPointerDownCapture")}}je(Od,"usePointerDownOutside");function Fd(e,t=globalThis?.document){let a=Ke(e),o=we.useRef(!1);return we.useEffect(()=>{let r=je(n=>{n.target&&!o.current&&ql(fx,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:je(()=>o.current=!0,"onFocusCapture"),onBlurCapture:je(()=>o.current=!1,"onBlurCapture")}}je(Fd,"useFocusOutside");function Hl(){let e=new CustomEvent(_l);document.dispatchEvent(e)}je(Hl,"dispatchUpdate");function ql(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?Tr(r,n):r.dispatchEvent(n)}je(ql,"handleAndDispatchCustomEvent");var De=j(require("react"),1);var Xl=require("react/jsx-runtime"),mx=Object.defineProperty,Fe=(e,t)=>mx(e,"name",{value:t,configurable:!0}),Wl="focusScope.autoFocusOnMount",zl="focusScope.autoFocusOnUnmount",Bd={bubbles:!1,cancelable:!0},Bo=De.forwardRef(Fe(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...i}=t,[u,c]=De.useState(null),d=Ke(l),f=Ke(s),p=De.useRef(null),x=oe(a,c),m=De.useRef(n);De.useEffect(()=>{m.current=n});let h=De.useCallback(C=>C?u?.contains(C)?!0:!!m.current?.some(b=>b.contains(C)):!1,[u]),g=De.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;De.useEffect(()=>{if(r){let L=function(S){if(g.paused||!u)return;let M=S.target;h(M)?p.current=M:sa(p.current,{select:!0})},I=function(S){if(g.paused||!u)return;let M=S.relatedTarget;M!==null&&(h(M)||sa(p.current,{select:!0}))},k=function(S){if(document.activeElement===document.body)for(let P of S)P.removedNodes.length>0&&sa(u)};var C=L,b=I,w=k;Fe(L,"handleFocusIn"),Fe(I,"handleFocusOut"),Fe(k,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",I);let T=new MutationObserver(k);return u&&T.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",I),T.disconnect()}}},[r,u,g.paused,h]),De.useEffect(()=>{if(u){Nd.add(g);let C=document.activeElement;if(!u.contains(C)){let w=new CustomEvent(Wl,Bd);u.addEventListener(Wl,d),u.dispatchEvent(w),w.defaultPrevented||(Hd(Vd(Kl(u)),{select:!0}),document.activeElement===C&&sa(u))}return()=>{u.removeEventListener(Wl,d);let w=u.ownerDocument,L=CustomEvent;setTimeout(()=>{let I=new L(zl,Bd);u.addEventListener(zl,f),u.dispatchEvent(I),I.defaultPrevented||sa(C??w.body,{select:!0}),u.removeEventListener(zl,f),Nd.remove(g)},0)}}},[u,d,f,g]);let v=De.useCallback(C=>{if(!o&&!r||g.paused)return;let b=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,w=document.activeElement;if(b&&w){let L=C.currentTarget,[I,k]=Ud(L);I&&k?!C.shiftKey&&w===k?(C.preventDefault(),o&&sa(I,{select:!0})):C.shiftKey&&w===I&&(C.preventDefault(),o&&sa(k,{select:!0})):w===L&&C.preventDefault()}},[o,r,g.paused]);return(0,Xl.jsx)(le.div,{tabIndex:-1,...i,ref:x,onKeyDown:v})},"FocusScope")),_d=De.createContext(null);function Er({registry:e,children:t}){return e?(0,Xl.jsx)(_d.Provider,{value:e,children:t}):t}Fe(Er,"FocusScopeBranchProvider");function Or(){let[e,t]=De.useState([]),a=De.useMemo(()=>({add:Fe(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Fe(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Fe(Or,"useFocusScopeBranchRegistry");function Fr(e){let t=De.useContext(_d);De.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Fe(Fr,"useFocusScopeBranch");function Hd(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(sa(o,{select:t}),document.activeElement!==a)return}Fe(Hd,"focusFirst");function Ud(e){let t=Kl(e),a=Vl(t,e),o=Vl(t.reverse(),e);return[a,o]}Fe(Ud,"getTabbableEdges");function Kl(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Fe(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Fe(Kl,"getTabbableCandidates");function Vl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):qd(o,{upTo:t})))return o}Fe(Vl,"findVisible");function qd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Fe(qd,"isHidden");function Wd(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Fe(Wd,"isSelectableInput");function sa(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Wd(e)&&t&&e.select()}}Fe(sa,"focus");var Nd=zd();function zd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Gl(e,t),e.unshift(t)},remove(t){e=Gl(e,t),e[0]?.resume()}}}Fe(zd,"createFocusScopesStack");function Gl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Fe(Gl,"arrayRemove");function Vd(e){return e.filter(t=>t.tagName!=="A")}Fe(Vd,"removeLinks");var yn=j(require("react"),1),Gd=j(require("react-dom"),1);var Xd=require("react/jsx-runtime"),hx=Object.defineProperty,gx=(e,t)=>hx(e,"name",{value:t,configurable:!0}),Sa=yn.forwardRef(gx(function(t,a){let{container:o,...r}=t,[n,l]=yn.useState(!1);ue(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Gd.createPortal((0,Xd.jsx)(le.div,{...r,ref:a}),s):null},"Portal"));var at=j(require("react"),1);var Kd=j(require("react"),1),xx=Object.defineProperty,ia=(e,t)=>xx(e,"name",{value:t,configurable:!0});function jd(e,t){return Kd.useReducer((a,o)=>t[a][o]??a,e)}ia(jd,"useStateMachine");var Ft=ia(e=>{let{present:t,children:a}=e,o=$d(t),r=typeof a=="function"?a({present:o.isPresent}):at.Children.only(a),n=Yd(o.ref,Zd(r));return typeof a=="function"||o.isPresent?at.cloneElement(r,{ref:n}):null},"Presence");function $d(e){let[t,a]=at.useState(),o=at.useRef(null),r=at.useRef(e),n=at.useRef("none"),l=at.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=jd(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return at.useEffect(()=>{i==="mounted"?(n.current=l.current??No(o.current),l.current=void 0):n.current="none"},[i]),ue(()=>{let c=o.current,d=r.current;if(d!==e){let p=n.current,x=No(c);e?(l.current=x,u("MOUNT")):x==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&p!==x?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),ue(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=ia(x=>{let h=No(o.current).includes(CSS.escape(x.animationName));if(x.target===t&&h&&(u("ANIMATION_END"),!r.current)){let g=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=g)})}},"handleAnimationEnd"),p=ia(x=>{x.target===t&&(n.current=No(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:at.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=No(d)}else o.current=null;a(c)},[])}}ia($d,"usePresence");function jl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ia(jl,"setRef");function Yd(...e){let t=at.useRef(e);return t.current=e,at.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=jl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():jl(o[l],null)}}},[])}ia(Yd,"useStableComposedRefs");function No(e){return e?.animationName||"none"}ia(No,"getAnimationName");function Zd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}ia(Zd,"getElementRef");var Jd=j(require("react"),1),Cx=Object.defineProperty,Yl=(e,t)=>Cx(e,"name",{value:t,configurable:!0}),Rn=0,_o=null;function Lx(e){return ya(),e.children}Yl(Lx,"FocusGuards");function ya(){Jd.useEffect(()=>{_o||(_o={start:$l(),end:$l()});let{start:e,end:t}=_o;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Rn++,()=>{Rn===1&&(_o?.start.remove(),_o?.end.remove(),_o=null),Rn=Math.max(0,Rn-1)}},[])}Yl(ya,"useFocusGuards");function $l(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Yl($l,"createFocusGuard");var pt=function(){return pt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},pt.apply(this,arguments)};function kn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Qd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var An=j(require("react"));var lt=j(require("react"));var ja="right-scroll-bar-position",$a="width-before-scroll-bar",Zl="with-scroll-bars-hidden",Jl="--removed-body-scroll-bar-size";function Pn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var ec=require("react");function tc(e,t){var a=(0,ec.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Dn=j(require("react"));var bx=typeof window<"u"?Dn.useLayoutEffect:Dn.useEffect,ac=new WeakMap;function Ql(e,t){var a=tc(t||null,function(o){return e.forEach(function(r){return Pn(r,o)})});return bx(function(){var o=ac.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Pn(s,null)}),n.forEach(function(s){r.has(s)||Pn(s,l)})}ac.set(a,e)},[e]),a}function vx(e){return e}function Ix(e,t){t===void 0&&(t=vx);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function es(e){e===void 0&&(e={});var t=Ix(null);return t.options=pt({async:!0,ssr:!1},e),t}var oc=j(require("react")),rc=function(e){var t=e.sideCar,a=kn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return oc.createElement(o,pt({},a))};rc.isSideCarExport=!0;function ts(e,t){return e.useMedium(t),rc}var Mn=es();var as=function(){},Br=lt.forwardRef(function(e,t){var a=lt.useRef(null),o=lt.useState({onScrollCapture:as,onWheelCapture:as,onTouchMoveCapture:as}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,x=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,v=g===void 0?"div":g,C=e.gapMode,b=kn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=f,L=Ql([a,t]),I=pt(pt({},b),r);return lt.createElement(lt.Fragment,null,c&&lt.createElement(w,{sideCar:Mn,removeScrollBar:u,shards:d,noRelative:p,noIsolation:x,inert:m,setCallbacks:n,allowPinchZoom:!!h,lockRef:a,gapMode:C}),l?lt.cloneElement(lt.Children.only(s),pt(pt({},I),{ref:L})):lt.createElement(v,pt({},I,{className:i,ref:L}),s))});Br.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Br.classNames={fullWidth:$a,zeroRight:ja};var Pe=j(require("react"));var Uo=j(require("react"));var sc=j(require("react"));var nc;var lc=function(){if(nc)return nc;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function wx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=lc();return t&&e.setAttribute("nonce",t),e}function Sx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function yx(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var os=function(){var e=0,t=null;return{add:function(a){e==0&&(t=wx())&&(Sx(t,a),yx(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var rs=function(){var e=os();return function(t,a){sc.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var Nr=function(){var e=rs(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Rx={left:0,top:0,right:0,gap:0},ns=function(e){return parseInt(e||"",10)||0},kx=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[ns(a),ns(o),ns(r)]},ls=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Rx;var t=kx(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Px=Nr(),Ho="data-scroll-locked",Dx=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Zl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(Ho,`] {
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
  
  .`).concat(ja,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat($a,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(ja," .").concat(ja,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat($a," .").concat($a,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Ho,`] {
    `).concat(Jl,": ").concat(s,`px;
  }
`)},ic=function(){var e=parseInt(document.body.getAttribute(Ho)||"0",10);return isFinite(e)?e:0},Mx=function(){Uo.useEffect(function(){return document.body.setAttribute(Ho,(ic()+1).toString()),function(){var e=ic()-1;e<=0?document.body.removeAttribute(Ho):document.body.setAttribute(Ho,e.toString())}},[])},ss=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Mx();var n=Uo.useMemo(function(){return ls(r)},[r]);return Uo.createElement(Px,{styles:Dx(n,!t,r,a?"":"!important")})};var is=!1;if(typeof window<"u")try{_r=Object.defineProperty({},"passive",{get:function(){return is=!0,!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{is=!1}var _r,Ya=is?{passive:!1}:!1;var Tx=function(e){return e.tagName==="TEXTAREA"},uc=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Tx(e)&&a[t]==="visible")},Ax=function(e){return uc(e,"overflowY")},Ex=function(e){return uc(e,"overflowX")},us=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=dc(e,o);if(r){var n=cc(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Ox=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Fx=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},dc=function(e,t){return e==="v"?Ax(t):Ex(t)},cc=function(e,t){return e==="v"?Ox(t):Fx(t)},Bx=function(e,t){return e==="h"&&t==="rtl"?-1:1},fc=function(e,t,a,o,r){var n=Bx(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var p=cc(e,s),x=p[0],m=p[1],h=p[2],g=m-h-n*x;(x||g)&&dc(e,s)&&(d+=g,f+=x);var v=s.parentNode;s=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var Tn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},pc=function(e){return[e.deltaX,e.deltaY]},mc=function(e){return e&&"current"in e?e.current:e},Nx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},_x=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Hx=0,qo=[];function hc(e){var t=Pe.useRef([]),a=Pe.useRef([0,0]),o=Pe.useRef(),r=Pe.useState(Hx++)[0],n=Pe.useState(Nr)[0],l=Pe.useRef(e);Pe.useEffect(function(){l.current=e},[e]),Pe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=Qd([e.lockRef.current],(e.shards||[]).map(mc),!0).filter(Boolean);return m.forEach(function(h){return h.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=Pe.useCallback(function(m,h){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var g=Tn(m),v=a.current,C="deltaX"in m?m.deltaX:v[0]-g[0],b="deltaY"in m?m.deltaY:v[1]-g[1],w,L=m.target,I=Math.abs(C)>Math.abs(b)?"h":"v";if("touches"in m&&I==="h"&&L.type==="range")return!1;var k=window.getSelection(),T=k&&k.anchorNode,S=T?T===L||T.contains(L):!1;if(S)return!1;var M=us(I,L);if(!M)return!0;if(M?w=I:(w=I==="v"?"h":"v",M=us(I,L)),!M)return!1;if(!o.current&&"changedTouches"in m&&(C||b)&&(o.current=w),!w)return!0;var P=o.current||w;return fc(P,h,m,P==="h"?C:b,!0)},[]),i=Pe.useCallback(function(m){var h=m;if(!(!qo.length||qo[qo.length-1]!==n)){var g="deltaY"in h?pc(h):Tn(h),v=t.current.filter(function(w){return w.name===h.type&&(w.target===h.target||h.target===w.shadowParent)&&Nx(w.delta,g)})[0];if(v&&v.should){h.cancelable&&h.preventDefault();return}if(!v){var C=(l.current.shards||[]).map(mc).filter(Boolean).filter(function(w){return w.contains(h.target)}),b=C.length>0?s(h,C[0]):!l.current.noIsolation;b&&h.cancelable&&h.preventDefault()}}},[]),u=Pe.useCallback(function(m,h,g,v){var C={name:m,delta:h,target:g,should:v,shadowParent:Ux(g)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(b){return b!==C})},1)},[]),c=Pe.useCallback(function(m){a.current=Tn(m),o.current=void 0},[]),d=Pe.useCallback(function(m){u(m.type,pc(m),m.target,s(m,e.lockRef.current))},[]),f=Pe.useCallback(function(m){u(m.type,Tn(m),m.target,s(m,e.lockRef.current))},[]);Pe.useEffect(function(){return qo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ya),document.addEventListener("touchmove",i,Ya),document.addEventListener("touchstart",c,Ya),function(){qo=qo.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,Ya),document.removeEventListener("touchmove",i,Ya),document.removeEventListener("touchstart",c,Ya)}},[]);var p=e.removeScrollBar,x=e.inert;return Pe.createElement(Pe.Fragment,null,x?Pe.createElement(n,{styles:_x(r)}):null,p?Pe.createElement(ss,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ux(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var gc=ts(Mn,hc);var xc=An.forwardRef(function(e,t){return An.createElement(Br,pt({},e,{ref:t,sideCar:gc}))});xc.classNames=Br.classNames;var Za=xc;var qx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Wo=new WeakMap,En=new WeakMap,On={},ds=0,Cc=function(e){return e&&(e.host||Cc(e.parentNode))},Wx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Cc(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},zx=function(e,t,a,o){var r=Wx(t,Array.isArray(e)?e:[e]);On[a]||(On[a]=new WeakMap);var n=On[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(o),x=p!==null&&p!=="false",m=(Wo.get(f)||0)+1,h=(n.get(f)||0)+1;Wo.set(f,m),n.set(f,h),l.push(f),m===1&&x&&En.set(f,!0),h===1&&f.setAttribute(a,"true"),x||f.setAttribute(o,"true")}catch(g){console.error("aria-hidden: cannot operate on ",f,g)}})};return c(t),s.clear(),ds++,function(){l.forEach(function(d){var f=Wo.get(d)-1,p=n.get(d)-1;Wo.set(d,f),n.set(d,p),f||(En.has(d)||d.removeAttribute(o),En.delete(d)),p||d.removeAttribute(a)}),ds--,ds||(Wo=new WeakMap,Wo=new WeakMap,En=new WeakMap,On={})}},zo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||qx(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),zx(o,r,a,"aria-hidden")):function(){return null}};var Be=require("react/jsx-runtime"),Vx=Object.defineProperty,wt=(e,t)=>Vx(e,"name",{value:t,configurable:!0}),fs="Dialog",[Lc,bS]=We(fs),[Gx,Yt]=Lc(fs),bc=wt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=ye.useRef(null),i=ye.useRef(null),{nodes:u,registry:c}=Or(),[d,f]=Ot({prop:o,defaultProp:r??!1,onChange:n,caller:fs}),[p,x]=ye.useState(0),[m,h]=ye.useState(0);return(0,Be.jsx)(Gx,{scope:t,triggerRef:s,contentRef:i,contentId:it(),titleId:it(),descriptionId:it(),titlePresent:p>0,descriptionPresent:m>0,setTitleCount:x,setDescriptionCount:h,open:d,onOpenChange:f,onOpenToggle:ye.useCallback(()=>f(g=>!g),[f]),modal:l,branchNodes:u,branchRegistry:c,children:a})},"Dialog");var vc="DialogPortal",[Xx,Ic]=Lc(vc,{forceMount:void 0}),wc=wt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Yt(vc,t);return(0,Be.jsx)(Xx,{scope:t,forceMount:a,children:ye.Children.map(o,l=>(0,Be.jsx)(Ft,{present:a||n.open,children:(0,Be.jsx)(Sa,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),cs="DialogOverlay",ps=ye.forwardRef(wt(function(t,a){let o=Ic(cs,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Yt(cs,t.__scopeDialog);return l.modal?(0,Be.jsx)(Ft,{present:r||l.open,children:(0,Be.jsx)(jx,{...n,ref:a})}):null},"DialogOverlay")),Kx=nt("DialogOverlay.RemoveScroll"),jx=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=Yt(cs,o),l=Ul(),s=oe(a,l);return(0,Be.jsx)(Za,{as:Kx,allowPinchZoom:!0,shards:ye.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,Be.jsx)(le.div,{"data-state":xs(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),Hr="DialogContent",ms=ye.forwardRef(wt(function(t,a){let o=Ic(Hr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Yt(Hr,t.__scopeDialog);return(0,Be.jsx)(Ft,{present:r||l.open,children:l.modal?(0,Be.jsx)($x,{...n,ref:a}):(0,Be.jsx)(Yx,{...n,ref:a})})},"DialogContent")),$x=ye.forwardRef(wt(function(t,a){let o=Yt(Hr,t.__scopeDialog),r=ye.useRef(null),n=oe(a,o.contentRef,r);return ye.useEffect(()=>{let l=r.current;if(l)return zo(l)},[]),(0,Be.jsx)(Sc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:X(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:X(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:X(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Yx=ye.forwardRef(wt(function(t,a){let o=Yt(Hr,t.__scopeDialog),r=ye.useRef(!1),n=ye.useRef(!1);return(0,Be.jsx)(Sc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Sc=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:i,...u}=t,c=Yt(Hr,o);return ya(),(0,Be.jsx)(Er,{registry:c.branchRegistry,children:(0,Be.jsx)(Bo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Be.jsx)(wa,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Rc(s,c.descriptionId):s,"data-state":xs(c.open),...u,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),hs=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=Yt("DialogTitle",o),{setTitleCount:l}=n;return ue(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Be.jsx)(le.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),gs=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=Yt("DialogDescription",o),{setDescriptionCount:l}=n;return ue(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Be.jsx)(le.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Zx="DialogClose",yc=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=Yt(Zx,o);return(0,Be.jsx)(le.button,{type:"button",...r,ref:a,onClick:X(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Rc(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}wt(Rc,"concatAriaDescribedby");function xs(e){return e?"open":"closed"}wt(xs,"getState");var Pc=require("react"),Cs="dsh-kanban",Dc={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldDueDate:"\u622A\u6B62\u65E5\u671F",today:"\u4ECA\u5929",tomorrow:"\u660E\u5929",nextWeek:"\u4E00\u5468\u540E",clearDate:"\u6E05\u9664\u65E5\u671F",dueToday:"\u4ECA\u5929\u5230\u671F",overdue:"\u5DF2\u903E\u671F",overdueDays:"\u5DF2\u903E\u671F {days} \u5929",shortDate:"{month}\u6708{day}\u65E5",yearDate:"{year}\u5E74{month}\u6708{day}\u65E5",dueDateFilter:"\u6309\u622A\u6B62\u65E5\u671F\u7B5B\u9009",completedColumn:"\u5B8C\u6210\u5217",noCompletedColumn:"\u672A\u8BBE\u7F6E",completedColumnHint:"\u79FB\u5165\u6B64\u5217\u7684\u4EFB\u52A1\u89C6\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u8BA1\u5165\u5230\u671F\u548C\u903E\u671F\u7B5B\u9009\u3002",completed:"\u5DF2\u5B8C\u6210",incomplete:"\u672A\u5B8C\u6210",completionStatus:"\u5B8C\u6210\u72B6\u6001",feedback:"\u53CD\u9988\u4E0E\u5EFA\u8BAE \xB7 GitHub",actDueDate:"\u622A\u6B62\u65E5\u671F {from} \u2192 {to}",actCompletedColumn:"\u5B8C\u6210\u5217 {from} \u2192 {to}",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u52A8\u5DE6\u4FA7\u8C03\u6574\u987A\u5E8F\uFF0C\u540D\u79F0\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLists:"\u770B\u677F\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u70B9\u51FB\u540D\u79F0\u6216\u8272\u70B9\u7F16\u8F91\uFF0C\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLabels:"\u4EFB\u52A1\u6807\u7B7E",noLabelsHint:"\u6682\u65E0\u6807\u7B7E\uFF0C\u5728\u4E0B\u65B9\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u3002",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Qx={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldDueDate:"Due date",today:"Today",tomorrow:"Tomorrow",nextWeek:"In one week",clearDate:"Clear date",dueToday:"Due today",overdue:"Overdue",overdueDays:"Overdue by {days} days",shortDate:"{month}/{day}",yearDate:"{year}/{month}/{day}",dueDateFilter:"Filter by due date",completedColumn:"Completed list",noCompletedColumn:"Not set",completedColumnHint:"Tasks in this list are complete and excluded from due and overdue filters.",completed:"Completed",incomplete:"Incomplete",completionStatus:"Completion status",feedback:"Feedback \xB7 GitHub",actDueDate:"Due date {from} \u2192 {to}",actCompletedColumn:"Completed list {from} \u2192 {to}",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder. Name changes save automatically.",boardLists:"Board lists",newColumnPlaceholder:"New list name",labelEditDesc:"Edit a name or color. Changes save automatically.",boardLabels:"Task labels",noLabelsHint:"No labels yet. Add your first one below.",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ja=null,Ls=null;function Mc(e){let t=e.get("locale");t!==void 0&&(Ja=t,e.effect(()=>t.register(Cs,"zh",Dc),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(Cs,"en",Qx),"dsh-kanban: English dictionary"),Ls=t.bind(Cs))}function ua(e){return Ls?Ls(e):Dc[e]??e}var eC=e=>Ja&&typeof Ja.subscribe=="function"?Ja.subscribe(e):()=>{},kc=()=>Ja&&typeof Ja.getSnapshot=="function"?Ja.getSnapshot():null;function Ne(){return(0,Pc.useSyncExternalStore)(eC,kc,kc),ua}var mt=require("react/jsx-runtime"),Vo=bc;var tC=wc;var Tc=Ur.forwardRef(({className:e,...t},a)=>(0,mt.jsx)(ps,{ref:a,className:re("kanban-portal kanban-dialog-overlay",e),...t}));Tc.displayName=ps.displayName;var Qa=Ur.forwardRef(({className:e,children:t,...a},o)=>{let r=Ne();return(0,mt.jsxs)(tC,{children:[(0,mt.jsx)(Tc,{}),(0,mt.jsxs)(ms,{ref:o,className:re("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,mt.jsxs)(yc,{className:"kanban-dialog-close",children:[(0,mt.jsx)(la,{className:"kanban-dialog-close-icon"}),(0,mt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Qa.displayName=ms.displayName;var eo=({className:e,...t})=>(0,mt.jsx)("div",{className:re("kanban-dialog-header",e),...t});eo.displayName="DialogHeader";var to=({className:e,...t})=>(0,mt.jsx)("div",{className:re("kanban-dialog-body",e),...t});to.displayName="DialogBody";var ao=({className:e,...t})=>(0,mt.jsx)("div",{className:re("kanban-dialog-footer",e),...t});ao.displayName="DialogFooter";var oo=Ur.forwardRef(({className:e,...t},a)=>(0,mt.jsx)(hs,{ref:a,className:re("kanban-dialog-title",e),...t}));oo.displayName=hs.displayName;var qr=Ur.forwardRef(({className:e,...t},a)=>(0,mt.jsx)(gs,{ref:a,className:re("kanban-dialog-description",e),...t}));qr.displayName=gs.displayName;var Bt=j(require("react"),1);var Ra=require("react/jsx-runtime"),Ec="dsh-kanban:card-drawer-width",aC=720,bs=420;function oC(){try{let e=Number(window.localStorage.getItem(Ec));if(Number.isFinite(e)&&e>0)return e}catch{}return aC}function Ac(e){try{window.localStorage.setItem(Ec,String(e))}catch{}}var vs=Bt.forwardRef(({className:e,children:t,id:a,style:o,...r},n)=>{let l=Ne(),s=Bt.useId(),i=a??s,u=`${s}-resize-hint`,[c,d]=Bt.useState(oC),[f,p]=Bt.useState(()=>window.innerWidth),[x,m]=Bt.useState(!1),h=Bt.useRef(null),g=f<=600,v=Math.min(1e3,f-64),C=L=>Math.max(bs,Math.min(v,L)),b=g?f:C(c);Bt.useEffect(()=>{let L=()=>{h.current&&(d(h.current.preferredWidth),h.current=null,m(!1)),p(window.innerWidth)};return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);function w(L,I){let k=h.current;!k||k.pointerId!==L.pointerId||(h.current=null,m(!1),I?d(k.preferredWidth):Ac(k.lastWidth),L.currentTarget.hasPointerCapture(L.pointerId)&&L.currentTarget.releasePointerCapture(L.pointerId))}return(0,Ra.jsxs)(Qa,{...r,ref:n,id:i,className:re("kanban-drawer-content",e),style:{...o,width:b},"data-resizing":x||void 0,children:[t,!g&&(0,Ra.jsxs)(Ra.Fragment,{children:[(0,Ra.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":l("resizeTaskDetails"),"aria-describedby":u,"aria-orientation":"vertical","aria-valuemin":bs,"aria-valuemax":v,"aria-valuenow":b,"aria-controls":i,title:l("resizeTaskDetailsHint"),onPointerDown:L=>{L.button!==0||h.current||(L.preventDefault(),L.currentTarget.focus(),L.currentTarget.setPointerCapture(L.pointerId),h.current={pointerId:L.pointerId,x:L.clientX,width:b,preferredWidth:c,lastWidth:b},m(!0))},onPointerMove:L=>{let I=h.current;if(!I||I.pointerId!==L.pointerId)return;let k=C(I.width+I.x-L.clientX);I.lastWidth=k,d(k)},onPointerUp:L=>w(L,!1),onPointerCancel:L=>w(L,!0),onLostPointerCapture:L=>w(L,!0),onKeyDown:L=>{let I;if(L.key==="ArrowLeft")I=C(b+32);else if(L.key==="ArrowRight")I=C(b-32);else if(L.key==="Home")I=bs;else if(L.key==="End")I=v;else return;L.preventDefault(),d(I),Ac(I)}}),(0,Ra.jsx)("span",{id:u,className:"kanban-sr-only",children:l("resizeTaskDetailsHint")})]})]})});vs.displayName="DrawerContent";var $r=j(require("react"),1);var Gt=j(require("react"),1);var Q=j(require("react"),1);var Ut=j(require("react"),1);var Bn=require("react/jsx-runtime"),Ve=j(require("react"),1);var ka=require("react/jsx-runtime");var rC=Object.defineProperty,ze=(e,t)=>rC(e,"name",{value:t,configurable:!0});function ro(e){let t=e+"CollectionProvider",[a,o]=We(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=ze(m=>{let{scope:h,children:g}=m,v=Ut.useRef(null),C=Ut.useRef(new Map).current;return(0,Bn.jsx)(r,{scope:h,itemMap:C,collectionRef:v,children:g})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=nt(s),u=Ut.forwardRef((m,h)=>{let{scope:g,children:v}=m,C=n(s,g),b=oe(h,C.collectionRef);return(0,Bn.jsx)(i,{ref:b,children:v})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=nt(c),p=Ut.forwardRef((m,h)=>{let{scope:g,children:v,...C}=m,b=Ut.useRef(null),w=oe(h,b),L=n(c,g);return Ut.useEffect(()=>(L.itemMap.set(b,{ref:b,...C}),()=>{L.itemMap.delete(b)})),(0,Bn.jsx)(f,{[d]:"",ref:w,children:v})});p.displayName=c;function x(m){let h=n(e+"CollectionConsumer",m);return Ut.useCallback(()=>{let v=h.collectionRef.current;if(!v)return[];let C=Array.from(v.querySelectorAll(`[${d}]`));return Array.from(h.itemMap.values()).sort((L,I)=>C.indexOf(L.ref.current)-C.indexOf(I.ref.current))},[h.collectionRef,h.itemMap])}return ze(x,"useCollection"),[{Provider:l,Slot:u,ItemSlot:p},x,o]}ze(ro,"createCollection");var Oc=new WeakMap,Ae,St,Fn=(St=class extends Map{constructor(a){super(a);Ni(this,Ae);hl(this,Ae,[...super.keys()]),Oc.set(this,!0)}set(a,o){return Oc.get(this)&&!this.has(a)&&et(this,Ae).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=Is(a),i=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?et(this,Ae).indexOf(o)===i:i===this.size)return this.set(o,r),this;let u=et(this,Ae).filter(d=>d!==o);u.splice(i,0,o);let c=u.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new St(this);return n.insert(a,o,r),n}before(a){let o=et(this,Ae).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=et(this,Ae).indexOf(a);if(n===-1)return this;let l=et(this,Ae).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=et(this,Ae).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=et(this,Ae).indexOf(a);if(n===-1)return this;let l=et(this,Ae).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return hl(this,Ae,[]),super.clear()}delete(a){let o=super.delete(a);return o&&et(this,Ae).splice(et(this,Ae).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=Nn(et(this,Ae),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=Nn(et(this,Ae),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return et(this,Ae).indexOf(a)}keyAt(a){return Nn(et(this,Ae),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new St(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new St(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let i of this)l===0&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let i=this.entryAt(s);s===this.size-1&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new St(o)}toReversed(){let a=new St;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new St(o)}slice(a,o){let r=new St;for(let n of et(this,Ae).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Ae=new WeakMap,ze(St,"OrderedDict"),St);function Nn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Fc(e,t);return a===-1?void 0:e[a]}ze(Nn,"at");function Fc(e,t){let a=e.length,o=Is(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}ze(Fc,"toSafeIndex");function Is(e){return e!==e||e===0?0:Math.trunc(e)}ze(Is,"toSafeInteger");function nC(e){let t=e+"CollectionProvider",[a,o]=We(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let i=ze(({state:L,...I})=>L?(0,ka.jsx)(c,{...I,state:L}):(0,ka.jsx)(u,{...I}),"CollectionProvider");i.displayName=t;let u=ze(L=>{let I=v();return(0,ka.jsx)(c,{...L,state:I})},"CollectionInit");u.displayName=e+"CollectionInit";let c=ze(L=>{let{scope:I,children:k,state:T}=L,S=Ve.useRef(null),[M,P]=Ve.useState(null),N=oe(S,P),[D,U]=T,V=Ve.useRef(new Fn),G=Ve.useCallback(()=>{let q=V.current;return _c(q)||q.sort(_n),q},[]);return Ve.useEffect(()=>{if(!M)return;let q=Hc(()=>{U(K=>{let W=K.toSorted(_n);return W.some(([A],ee)=>K.keyAt(ee)!==A)?W:K})});return q.observe(M,{childList:!0,subtree:!0}),()=>{q.disconnect()}},[M,U]),(0,ka.jsx)(r,{scope:I,collectionElementRef:N,collectionElementRefObject:S,getCollection:G,setCollection:U,registryRef:V,children:(0,ka.jsx)(l,{scope:I,collectionElement:M,collection:D,children:k})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=nt(d),p=Ve.forwardRef((L,I)=>{let{scope:k,children:T}=L,S=n(d,k),M=oe(I,S.collectionElementRef);return(0,ka.jsx)(f,{ref:M,children:T})});p.displayName=d;let x=e+"CollectionItemSlot",m="data-radix-collection-item",h=nt(x),g=Ve.forwardRef((L,I)=>{let{scope:k,children:T,...S}=L,M=Ve.useRef(null),P=n(x,k),{setCollection:N,registryRef:D}=P,U=Ve.useRef(S);Bc(U.current,S)||(U.current=S);let V=U.current,G=Ve.useCallback(W=>{let se=D.current;W?se.set(W,{...U.current,element:W}):M.current&&se.delete(M.current)},[D]),q=oe(I,G,M);ue(()=>{let W=M.current,se=D.current;W&&se.has(W)&&se.set(W,{...V,element:W})},[V,D]);let K=Ve.useRef(null);return Ve.useEffect(()=>{let W=M.current,se=K.current;(se?.element??null)===W&&(!W||se?.itemData===V)||(K.current=W?{element:W,itemData:V}:null,N(A=>{let ee=new Fn(A);return se&&se.element!==W&&ee.delete(se.element),W&&ee.set(W,{...V,element:W}),ee.sort(_n)}))}),Ve.useEffect(()=>()=>{let W=K.current;K.current=null,W&&N(se=>{if(!se.has(W.element))return se;let A=new Fn(se);return A.delete(W.element),A})},[N]),(0,ka.jsx)(h,{[m]:"",ref:q,children:T})});g.displayName=x;function v(){return Ve.useState(new Fn)}ze(v,"useInitCollection");function C(L){let{collection:I}=s(e+"CollectionConsumer",L);return I}ze(C,"useCollection");function b(L){let{getCollection:I}=n(e+"CollectionConsumer",L);return I}return ze(b,"useGetCollection"),[{Provider:i,Slot:p,ItemSlot:g},{createCollectionScope:o,useCollection:C,useGetCollection:b,useInitCollection:v}]}ze(nC,"createCollection");function Bc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}ze(Bc,"shallowEqual");function Nc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}ze(Nc,"isElementPreceding");function _c(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}ze(_c,"isInDocumentOrder");function _n(e,t){return!e[1].element||!t[1].element?0:Nc(e[1].element,t[1].element)?-1:1}ze(_n,"sortByDocumentPosition");function Hc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}ze(Hc,"getChildListObserver");var Hn=j(require("react"),1),iC=require("react/jsx-runtime"),lC=Object.defineProperty,sC=(e,t)=>lC(e,"name",{value:t,configurable:!0}),uC={LTR:"ltr",RTL:"rtl"},dC=Hn.createContext(void 0);function no(e){let t=Hn.useContext(dC);return e||t||uC.LTR}sC(no,"useDirection");var st=j(require("react"),1);var Wc=["top","right","bottom","left"];var Zt=Math.min,qt=Math.max,zr=Math.round,Vr=Math.floor,Jt=e=>({x:e,y:e}),cC={left:"right",right:"left",bottom:"top",top:"bottom"};function ws(e,t,a){return qt(e,Zt(t,a))}function Qt(e,t){return typeof e=="function"?e(t):e}function da(e){return e.split("-")[0]}function lo(e){return e.split("-")[1]}function qn(e){return e==="x"?"y":"x"}function Wn(e){return e==="y"?"height":"width"}function Wt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function zn(e){return qn(Wt(e))}function zc(e,t,a){a===void 0&&(a=!1);let o=lo(e),r=zn(e),n=Wn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Wr(l)),[l,Wr(l)]}function Vc(e){let t=Wr(e);return[Un(e),t,Un(t)]}function Un(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Uc=["left","right"],qc=["right","left"],fC=["top","bottom"],pC=["bottom","top"];function mC(e,t,a){switch(e){case"top":case"bottom":return a?t?qc:Uc:t?Uc:qc;case"left":case"right":return t?fC:pC;default:return[]}}function Gc(e,t,a,o){let r=lo(e),n=mC(da(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(Un)))),n}function Wr(e){let t=da(e);return cC[t]+e.slice(t.length)}function hC(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Ss(e){return typeof e!="number"?hC(e):{top:e,right:e,bottom:e,left:e}}function so(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Xc(e,t,a){let{reference:o,floating:r}=e,n=Wt(t),l=zn(t),s=Wn(l),i=da(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,p;switch(i){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}let x=lo(t);return x&&(p[l]+=f*(x==="end"?1:-1)*(a&&u?-1:1)),p}async function $c(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Qt(t,e),x=Ss(p),h=s[f?d==="floating"?"reference":"floating":d],g=so(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(h)))==null||a?h:h.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),v=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),b=await(n.isElement==null?void 0:n.isElement(C))&&await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1},w=so(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:C,strategy:i}):v);return{top:(g.top-w.top+x.top)/b.y,bottom:(w.bottom-g.bottom+x.bottom)/b.y,left:(g.left-w.left+x.left)/b.x,right:(w.right-g.right+x.right)/b.x}}var gC=50,Yc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:$c},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Xc(u,o,i),f=o,p=0,x={};for(let m=0;m<n.length;m++){let h=n[m];if(!h)continue;let{name:g,fn:v}=h,{x:C,y:b,data:w,reset:L}=await v({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:x,rects:u,platform:s,elements:{reference:e,floating:t}});c=C??c,d=b??d,x[g]={...x[g],...w},L&&p<gC&&(p++,typeof L=="object"&&(L.placement&&(f=L.placement),L.rects&&(u=L.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):L.rects),{x:c,y:d}=Xc(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:x}},Zc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Qt(e,t)||{};if(u==null)return{};let d=Ss(c),f={x:a,y:o},p=zn(r),x=Wn(p),m=await l.getDimensions(u),h=p==="y",g=h?"top":"left",v=h?"bottom":"right",C=h?"clientHeight":"clientWidth",b=n.reference[x]+n.reference[p]-f[p]-n.floating[x],w=f[p]-n.reference[p],L=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),I=L?L[C]:0;(!I||!await(l.isElement==null?void 0:l.isElement(L)))&&(I=s.floating[C]||n.floating[x]);let k=b/2-w/2,T=I/2-m[x]/2-1,S=Zt(d[g],T),M=Zt(d[v],T),P=I-m[x]-M,N=I/2-m[x]/2+k,D=ws(S,N,P),U=!i.arrow&&lo(r)!=null&&N!==D&&n.reference[x]/2-(N<S?S:M)-m[x]/2<0,V=U?N<S?N-S:N-P:0;return{[p]:f[p]+V,data:{[p]:D,centerOffset:N-D-V,...U&&{alignmentOffset:V}},reset:U}}});var Jc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:m=!0,...h}=Qt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let g=da(r),v=Wt(s),C=da(s)===s,b=await(i.isRTL==null?void 0:i.isRTL(u.floating)),w=f||(C||!m?[Wr(s)]:Vc(s)),L=x!=="none";!f&&L&&w.push(...Gc(s,m,x,b));let I=[s,...w],k=await i.detectOverflow(t,h),T=[],S=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&T.push(k[g]),d){let D=zc(r,l,b);T.push(k[D[0]],k[D[1]])}if(S=[...S,{placement:r,overflows:T}],!T.every(D=>D<=0)){var M,P;let D=(((M=n.flip)==null?void 0:M.index)||0)+1,U=I[D];if(U&&(!(d==="alignment"?v!==Wt(U):!1)||S.every(q=>Wt(q.placement)===v?q.overflows[0]>0:!0)))return{data:{index:D,overflows:S},reset:{placement:U}};let V=(P=S.filter(G=>G.overflows[0]<=0).sort((G,q)=>G.overflows[1]-q.overflows[1])[0])==null?void 0:P.placement;if(!V)switch(p){case"bestFit":{var N;let G=(N=S.filter(q=>{if(L){let K=Wt(q.placement);return K===v||K==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(K=>K>0).reduce((K,W)=>K+W,0)]).sort((q,K)=>q[1]-K[1])[0])==null?void 0:N[0];G&&(V=G);break}case"initialPlacement":V=s;break}if(r!==V)return{reset:{placement:V}}}return{}}}};function Kc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function jc(e){return Wc.some(t=>e[t]>=0)}var Qc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Qt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Kc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:jc(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Kc(l,a.floating);return{data:{escapedOffsets:s,escaped:jc(s)}}}default:return{}}}}};var ef=new Set(["left","top"]);async function xC(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=da(a),s=lo(a),i=Wt(a)==="y",u=ef.has(l)?-1:1,c=n&&i?-1:1,d=Qt(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof x=="number"&&(p=s==="end"?x*-1:x),i?{x:p*c,y:f*u}:{x:f*u,y:p*c}}var tf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await xC(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},af=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:v=>{let{x:C,y:b}=v;return{x:C,y:b}}},...u}=Qt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=Wt(r),p=qn(f),x=c[p],m=c[f],h=(v,C)=>ws(C+d[v==="y"?"top":"left"],C,C-d[v==="y"?"bottom":"right"]);l&&(x=h(p,x)),s&&(m=h(f,m));let g=i.fn({...t,[p]:x,[f]:m});return{...g,data:{x:g.x-a,y:g.y-o,enabled:{[p]:l,[f]:s}}}}}},of=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Qt(e,t),f={x:r,y:n},p=Wt(l),x=qn(p),m=f[x],h=f[p],g=Qt(u,t),v=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:(a=g.mainAxis)!=null?a:0,crossAxis:(o=g.crossAxis)!=null?o:0};if(c){let w=x==="y"?"height":"width",L=s.reference[x]-s.floating[w]+v.mainAxis,I=s.reference[x]+s.reference[w]-v.mainAxis;m<L?m=L:m>I&&(m=I)}if(d){var C,b;let w=x==="y"?"width":"height",L=ef.has(da(l)),I=s.reference[p]-s.floating[w]+(L&&((C=i.offset)==null?void 0:C[p])||0)+(L?0:v.crossAxis),k=s.reference[p]+s.reference[w]+(L?0:((b=i.offset)==null?void 0:b[p])||0)-(L?v.crossAxis:0);h<I?h=I:h>k&&(h=k)}return{[x]:m,[p]:h}}}},rf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Qt(e,t),i=await r.detectOverflow(t,s),u=da(a),c=lo(a),d=Wt(a)==="y",{width:f,height:p}=o.floating,x,m;u==="top"||u==="bottom"?(x=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,x=c==="end"?"top":"bottom");let h=p-i.top-i.bottom,g=f-i.left-i.right,v=Zt(p-i[x],h),C=Zt(f-i[m],g),b=t.middlewareData.shift,w=!b,L=v,I=C;b!=null&&b.enabled.x&&(I=g),b!=null&&b.enabled.y&&(L=h),w&&!c&&(d?I=f-2*qt(i.left,i.right):L=p-2*qt(i.top,i.bottom)),await l({...t,availableWidth:I,availableHeight:L});let k=await r.getDimensions(n.floating);return f!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}};function Vn(){return typeof window<"u"}function co(e){return lf(e)?(e.nodeName||"").toLowerCase():"#document"}function ut(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ea(e){var t;return(t=(lf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function lf(e){return Vn()?e instanceof Node||e instanceof ut(e).Node:!1}function zt(e){return Vn()?e instanceof Element||e instanceof ut(e).Element:!1}function ca(e){return Vn()?e instanceof HTMLElement||e instanceof ut(e).HTMLElement:!1}function nf(e){return!Vn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ut(e).ShadowRoot}function Gr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Vt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function sf(e){return/^(table|td|th)$/.test(co(e))}function Xr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var CC=/transform|translate|scale|rotate|perspective|filter/,LC=/paint|layout|strict|content/,io=e=>!!e&&e!=="none",ys;function Gn(e){let t=zt(e)?Vt(e):e;return io(t.transform)||io(t.translate)||io(t.scale)||io(t.rotate)||io(t.perspective)||!Xn()&&(io(t.backdropFilter)||io(t.filter))||CC.test(t.willChange||"")||LC.test(t.contain||"")}function uf(e){let t=Pa(e);for(;ca(t)&&!Go(t);){if(Gn(t))return t;if(Xr(t))return null;t=Pa(t)}return null}function Xn(){return ys==null&&(ys=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),ys}function Go(e){return/^(html|body|#document)$/.test(co(e))}function Vt(e){return ut(e).getComputedStyle(e)}function Kr(e){return zt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Pa(e){if(co(e)==="html")return e;let t=e.assignedSlot||e.parentNode||nf(e)&&e.host||ea(e);return nf(t)?t.host:t}function df(e){let t=Pa(e);return Go(t)?(e.ownerDocument||e).body:ca(t)&&Gr(t)?t:df(t)}function uo(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=df(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=ut(r);if(n){let s=Kn(l);return t.concat(l,l.visualViewport||[],Gr(r)?r:[],s&&a?uo(s):[])}else return t.concat(r,uo(r,[],a))}function Kn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pf(e){let t=Vt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ca(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=zr(a)!==n||zr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function ks(e){return zt(e)?e:e.contextElement}function Xo(e){let t=ks(e);if(!ca(t))return Jt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=pf(t),l=(n?zr(a.width):a.width)/o,s=(n?zr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var bC=Jt(0);function mf(e){let t=ut(e);return!Xn()||!t.visualViewport?bC:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function vC(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===ut(e)}function fo(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=ks(e),l=Jt(1);t&&(o?zt(o)&&(l=Xo(o)):l=Xo(e));let s=vC(n,a,o)?mf(n):Jt(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=ut(n),p=zt(o)?ut(o):o,x=f,m=Kn(x);for(;m&&p!==x;){let h=Xo(m),g=m.getBoundingClientRect(),v=Vt(m),C=g.left+(m.clientLeft+parseFloat(v.paddingLeft))*h.x,b=g.top+(m.clientTop+parseFloat(v.paddingTop))*h.y;i*=h.x,u*=h.y,c*=h.x,d*=h.y,i+=C,u+=b,x=ut(m),m=Kn(x)}}return so({width:c,height:d,x:i,y:u})}function jn(e,t){let a=Kr(e).scrollLeft;return t?t.left+a:fo(ea(e)).left+a}function hf(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-jn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function IC(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=ea(o),s=t?Xr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Jt(1),c=Jt(0),d=ca(o);if((d||!n)&&((co(o)!=="body"||Gr(l))&&(i=Kr(o)),d)){let p=fo(o);u=Xo(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=l&&!d&&!n?hf(l,i):Jt(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function wC(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function SC(e){let t=Kr(e),a=e.ownerDocument.body,o=qt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=qt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+jn(e),l=-t.scrollTop;return Vt(a).direction==="rtl"&&(n+=qt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var yC=25;function RC(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=ut(e),n=ea(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Xn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(jn(n)<=0){let f=n.ownerDocument,p=f.body,x=getComputedStyle(p),m=f.compatMode==="CSS1Compat"&&parseFloat(x.marginLeft)+parseFloat(x.marginRight)||0,h=Math.abs(n.clientWidth-p.clientWidth-m),g=getComputedStyle(n).scrollbarGutter==="stable both-edges"?h/2:h;g<=yC&&(s-=g)}return{width:s,height:i,x:u,y:c}}function kC(e,t){let a=fo(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Xo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function cf(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=RC(e,a,t);else if(t==="document")o=SC(ea(e));else if(zt(t))o=kC(t,a);else{let r=mf(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return so(o)}function PC(e,t){let a=t.get(e);if(a)return a;let o=uo(e,[],!1).filter(s=>zt(s)&&co(s)!=="body"),r=null,n=Vt(e).position==="fixed",l=n?Pa(e):e;for(;zt(l)&&!Go(l);){let s=Vt(l),i=Gn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=Pa(l)}return t.set(e,o),o}function DC(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?Xr(t)?[]:PC(t,this._c):[].concat(a),o],s=cf(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let p=cf(t,l[f],r);i=qt(p.top,i),u=Zt(p.right,u),c=Zt(p.bottom,c),d=qt(p.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function MC(e){let{width:t,height:a}=pf(e);return{width:t,height:a}}function TC(e,t,a){let o=ca(t),r=ea(t),n=a==="fixed",l=fo(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Jt(0);if((o||!n)&&((co(t)!=="body"||Gr(r))&&(s=Kr(t)),o)){let f=fo(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=jn(r));let u=r&&!o&&!n?hf(r,s):Jt(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function Rs(e){return Vt(e).position==="static"}function ff(e,t){if(!ca(e)||Vt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return ea(e)===a&&(a=a.ownerDocument.body),a}function gf(e,t){let a=ut(e);if(Xr(e))return a;if(!ca(e)){let r=Pa(e);for(;r&&!Go(r);){if(zt(r)&&!Rs(r))return r;r=Pa(r)}return a}let o=ff(e,t);for(;o&&sf(o)&&Rs(o);)o=ff(o,t);return o&&Go(o)&&Rs(o)&&!Gn(o)?a:o||uf(e)||a}var AC=async function(e){let t=this.getOffsetParent||gf,a=this.getDimensions,o=await a(e.floating);return{reference:TC(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function EC(e){return Vt(e).direction==="rtl"}var xf={convertOffsetParentRelativeRectToViewportRelativeRect:IC,getDocumentElement:ea,getClippingRect:DC,getOffsetParent:gf,getElementRects:AC,getClientRects:wC,getDimensions:MC,getScale:Xo,isElement:zt,isRTL:EC};function Cf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function OC(e,t,a){let o=null,r,n=ea(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:p,top:x,width:m,height:h}=f;if(c||t(),!m||!h)return;let g=Vr(x),v=Vr(n.clientWidth-(p+m)),C=Vr(n.clientHeight-(x+h)),b=Vr(p),L={rootMargin:-g+"px "+-v+"px "+-C+"px "+-b+"px",threshold:qt(0,Zt(1,d))||1},I=!0;function k(T){let S=T[0].intersectionRatio;if(!Cf(f,e.getBoundingClientRect()))return s();if(S!==d){if(!I)return s();S?s(!1,S):r=setTimeout(()=>{s(!1,1e-7)},1e3)}I=!1}try{o=new IntersectionObserver(k,{...L,root:n.ownerDocument})}catch{o=new IntersectionObserver(k,L)}o.observe(e)}let i=ut(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function Ps(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=ks(e),c=r||n?[...u?uo(u):[],...t?uo(t):[]]:[];c.forEach(g=>{r&&g.addEventListener("scroll",a),n&&g.addEventListener("resize",a)});let d=u&&s?OC(u,a,n):null,f=-1,p=null;l&&(p=new ResizeObserver(g=>{let[v]=g;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var C;(C=p)==null||C.observe(t)})),a()}),u&&!i&&p.observe(u),t&&p.observe(t));let x,m=i?fo(e):null;i&&h();function h(){let g=fo(e);m&&!Cf(m,g)&&a(),m=g,x=requestAnimationFrame(h)}return a(),()=>{var g;c.forEach(v=>{r&&v.removeEventListener("scroll",a),n&&v.removeEventListener("resize",a)}),d?.(),(g=p)==null||g.disconnect(),p=null,i&&cancelAnimationFrame(x)}}var Lf=tf;var bf=af,vf=Jc,If=rf,wf=Qc,Ds=Zc;var Sf=of,Ms=(e,t,a)=>{let o=new Map,r=a??{},n={...xf,...r.platform,_c:o};return Yc(e,t,{...r,platform:n})};var _e=j(require("react"),1),Rf=require("react"),kf=j(require("react-dom"),1),FC=typeof document<"u",BC=function(){},$n=FC?Rf.useLayoutEffect:BC;function Yn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Yn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Yn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Pf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function yf(e,t){let a=Pf(e);return Math.round(t*a)/a}function Ts(e){let t=_e.useRef(e);return $n(()=>{t.current=e}),t}function Df(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=_e.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=_e.useState(o);Yn(f,o)||p(o);let[x,m]=_e.useState(null),[h,g]=_e.useState(null),v=_e.useCallback(q=>{q!==L.current&&(L.current=q,m(q))},[]),C=_e.useCallback(q=>{q!==I.current&&(I.current=q,g(q))},[]),b=n||x,w=l||h,L=_e.useRef(null),I=_e.useRef(null),k=_e.useRef(c),T=i!=null,S=Ts(i),M=Ts(r),P=Ts(u),N=_e.useCallback(()=>{if(!L.current||!I.current)return;let q={placement:t,strategy:a,middleware:f};M.current&&(q.platform=M.current),Ms(L.current,I.current,q).then(K=>{let W={...K,isPositioned:P.current!==!1};D.current&&!Yn(k.current,W)&&(k.current=W,kf.flushSync(()=>{d(W)}))})},[f,t,a,M,P]);$n(()=>{u===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,d(q=>({...q,isPositioned:!1})))},[u]);let D=_e.useRef(!1);$n(()=>(D.current=!0,()=>{D.current=!1}),[]),$n(()=>{if(b&&(L.current=b),w&&(I.current=w),b&&w){if(S.current)return S.current(b,w,N);N()}},[b,w,N,S,T]);let U=_e.useMemo(()=>({reference:L,floating:I,setReference:v,setFloating:C}),[v,C]),V=_e.useMemo(()=>({reference:b,floating:w}),[b,w]),G=_e.useMemo(()=>{let q={position:a,left:0,top:0};if(!V.floating)return q;let K=yf(V.floating,c.x),W=yf(V.floating,c.y);return s?{...q,transform:"translate("+K+"px, "+W+"px)",...Pf(V.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:W}},[a,s,V.floating,c.x,c.y]);return _e.useMemo(()=>({...c,update:N,refs:U,elements:V,floatingStyles:G}),[c,N,U,V,G])}var NC=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?Ds({element:o.current,padding:r}).fn(a):{}:o?Ds({element:o,padding:r}).fn(a):{}}}},Mf=(e,t)=>{let a=Lf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Tf=(e,t)=>{let a=bf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Af=(e,t)=>({fn:Sf(e).fn,options:[e,t]}),Ef=(e,t)=>{let a=vf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Of=(e,t)=>{let a=If(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ff=(e,t)=>{let a=wf(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Bf=(e,t)=>{let a=NC(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Nf=j(require("react"),1);var _C=Object.defineProperty,HC=(e,t)=>_C(e,"name",{value:t,configurable:!0});function As(e){let[t,a]=Nf.useState(void 0);return ue(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,i;if("borderBoxSize"in l){let u=l.borderBoxSize,c=Array.isArray(u)?u[0]:u;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;a({width:s,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}HC(As,"useSize");var Ko=require("react/jsx-runtime"),UC=Object.defineProperty,Da=(e,t)=>UC(e,"name",{value:t,configurable:!0});var _f={Partial:"partial",Always:"always"},Hf={Optimized:"optimized",Always:"always"},Uf="Popper",[qf,fa]=We(Uf),[qC,Wf]=qf(Uf),jo=Da(e=>{let{__scopePopper:t,children:a}=e,[o,r]=st.useState(null),[n,l]=st.useState(void 0);return(0,Ko.jsx)(qC,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),WC="PopperAnchor",$o=st.forwardRef(Da(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Wf(WC,o),s=st.useRef(null),i=l.onAnchorChange,u=st.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=oe(a,u),d=st.useRef(null);st.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Zn(l.placementState),p=f?.[0],x=f?.[1];return r?null:(0,Ko.jsx)(le.div,{"data-radix-popper-side":p,"data-radix-popper-align":x,...n,ref:c})},"PopperAnchor")),zf="PopperContent",[zC,my]=qf(zf),Yo=st.forwardRef(Da(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=_f.Partial,hideWhenDetached:p=!1,updatePositionStrategy:x=Hf.Optimized,onPlaced:m,...h}=t,g=Wf(zf,o),[v,C]=st.useState(null),b=oe(a,C),[w,L]=st.useState(null),I=As(w),k=I?.width??0,T=I?.height??0,S=r+(l!=="center"?"-"+l:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},P=Array.isArray(c)?c:[c],N=P.length>0,D={padding:M,boundary:P.filter(Vf),altBoundary:N},{refs:U,floatingStyles:V,placement:G,isPositioned:q,middlewareData:K}=Df({strategy:"fixed",placement:S,whileElementsMounted:Da((...ge)=>Ps(...ge,{animationFrame:x===Hf.Always}),"whileElementsMounted"),elements:{reference:g.anchor},middleware:[Mf({mainAxis:n+T,alignmentAxis:s}),u&&Tf({mainAxis:!0,crossAxis:!1,...f===_f.Partial?{limiter:Af()}:{},...D}),u&&Ef({...D}),Of({...D,apply:Da(({elements:ge,rects:_,availableWidth:be,availableHeight:ie})=>{let{width:Y,height:J}=_.reference,ae=ge.floating.style;ae.setProperty("--radix-popper-available-width",`${be}px`),ae.setProperty("--radix-popper-available-height",`${ie}px`),ae.setProperty("--radix-popper-anchor-width",`${Y}px`),ae.setProperty("--radix-popper-anchor-height",`${J}px`)},"apply")}),w&&Bf({element:w,padding:i}),VC({arrowWidth:k,arrowHeight:T}),p&&Ff(N?{strategy:"referenceHidden",...D}:{strategy:"referenceHidden",padding:D.padding,altBoundary:D.altBoundary})]}),W=g.setPlacementState;ue(()=>(W(G),()=>{W(void 0)}),[G,W]);let[se,A]=Zn(G),ee=Ke(m);ue(()=>{q&&ee?.()},[q,ee]);let Ue=K.arrow?.x,xe=K.arrow?.y,O=K.arrow?.centerOffset!==0,[Le,ve]=st.useState();return ue(()=>{v&&ve(window.getComputedStyle(v).zIndex)},[v]),(0,Ko.jsx)("div",{ref:U.setFloating,"data-radix-popper-content-wrapper":"",style:{...V,transform:q?V.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Le,"--radix-popper-transform-origin":[K.transformOrigin?.x,K.transformOrigin?.y].join(" "),...K.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Ko.jsx)(zC,{scope:o,placedSide:se,placedAlign:A,onArrowChange:L,arrowX:Ue,arrowY:xe,shouldHideArrow:O,children:(0,Ko.jsx)(le.div,{"data-side":se,"data-align":A,...h,ref:b,style:{...h.style,animation:q?h.style?.animation:"none"}})})})},"PopperContent"));function Vf(e){return e!==null}Da(Vf,"isNotNull");var VC=Da(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Zn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,p=(r.arrow?.y??0)+i/2,x="",m="";return u==="bottom"?(x=l?d:`${f}px`,m=`${-i}px`):u==="top"?(x=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(x=`${-i}px`,m=l?d:`${p}px`):u==="left"&&(x=`${o.floating.width+i}px`,m=l?d:`${p}px`),{data:{x,y:m}}}}),"transformOrigin");function Zn(e){let[t,a="center"]=e.split("-");return[t,a]}Da(Zn,"getSideAndAlignFromPlacement");var $e=j(require("react"),1);var XC=j(require("react"),1),Jn=j(require("react"),1),GC=Object.defineProperty,Fs=(e,t)=>GC(e,"name",{value:t,configurable:!0}),Os=!1;function Gf(){let[e,t]=Jn.useState(Os);return Jn.useEffect(()=>{Os||(Os=!0,t(!0))},[]),e}Fs(Gf,"useIsHydrated");var Xf=XC[" useSyncExternalStore ".trim().toString()];function Kf(){return()=>{}}Fs(Kf,"subscribe");function jf(){return Xf(Kf,()=>!0,()=>!1)}Fs(jf,"useIsHydratedModern");var $f=typeof Xf=="function"?jf:Gf;var Ma=require("react/jsx-runtime"),KC=Object.defineProperty,po=(e,t)=>KC(e,"name",{value:t,configurable:!0}),Bs="rovingFocusGroup.onEntryFocus",jC={bubbles:!1,cancelable:!0},Qn="RovingFocusGroup",[Ns,Zf,$C]=ro(Qn),[YC,_s]=We(Qn,[$C]),Yf={Vertical:"vertical",Horizontal:"horizontal"},ZC={LTR:"ltr",RTL:"rtl"},[JC,QC]=YC(Qn),Jf=$e.forwardRef(po(function(t,a){return(0,Ma.jsx)(Ns.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,Ma.jsx)(Ns.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,Ma.jsx)(eL,{...t,ref:a})})})},"RovingFocusGroup")),eL=$e.forwardRef(po(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,p=$e.useRef(null),x=oe(a,p),m=no(l),[h,g]=Ot({prop:s,defaultProp:i??null,onChange:u,caller:Qn}),[v,C]=$e.useState(!1),b=Ke(c),w=Zf(o),L=$e.useRef(!1),[I,k]=$e.useState(0);return $e.useEffect(()=>{let T=p.current;if(T)return T.addEventListener(Bs,b),()=>T.removeEventListener(Bs,b)},[b]),(0,Ma.jsx)(JC,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:h,onItemFocus:$e.useCallback(T=>g(T),[g]),onItemShiftTab:$e.useCallback(()=>C(!0),[]),onFocusableItemAdd:$e.useCallback(()=>k(T=>T+1),[]),onFocusableItemRemove:$e.useCallback(()=>k(T=>T-1),[]),children:(0,Ma.jsx)(le.div,{tabIndex:v||I===0?-1:0,"data-orientation":r,...f,ref:x,style:{outline:"none",...t.style},onMouseDown:X(t.onMouseDown,()=>{L.current=!0}),onFocus:X(t.onFocus,T=>{let S=!L.current;if(T.target===T.currentTarget&&S&&!v){let M=new CustomEvent(Bs,jC);if(T.currentTarget.dispatchEvent(M),!M.defaultPrevented){let P=w().filter(G=>G.focusable),N=P.find(G=>G.active),D=P.find(G=>G.id===h),V=[N,D,...P].filter(Boolean).map(G=>G.ref.current);Hs(V,d)}}L.current=!1}),onBlur:X(t.onBlur,()=>C(!1))})})},"RovingFocusGroupImpl")),tL="RovingFocusGroupItem",Qf=$e.forwardRef(po(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=it(),c=l||u,d=QC(tL,o),f=d.currentTabStopId===c,p=Zf(o),{onFocusableItemAdd:x,onFocusableItemRemove:m,currentTabStopId:h}=d,g=$f();return ue(()=>{if(!(!g||!r))return x(),()=>m()},[g,r,x,m]),$e.useEffect(()=>{if(!(g||!r))return x(),()=>m()},[g,r,x,m]),(0,Ma.jsx)(Ns.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,Ma.jsx)(le.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:X(t.onMouseDown,v=>{r?d.onItemFocus(c):v.preventDefault()}),onFocus:X(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:X(t.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){d.onItemShiftTab();return}if(v.target!==v.currentTarget)return;let C=tp(v,d.orientation,d.dir);if(C!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let w=p().filter(L=>L.focusable).map(L=>L.ref.current);if(C==="last")w.reverse();else if(C==="prev"||C==="next"){C==="prev"&&w.reverse();let L=w.indexOf(v.currentTarget);w=d.loop?ap(w,L+1):w.slice(L+1)}setTimeout(()=>Hs(w))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:h!=null}):s})})},"RovingFocusGroupItem")),aL={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ep(e,t){return t!==ZC.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}po(ep,"getDirectionAwareKey");function tp(e,t,a){let o=ep(e.key,a);if(!(t===Yf.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===Yf.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return aL[o]}po(tp,"getFocusIntent");function Hs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}po(Hs,"focusFirst");function ap(e,t){return e.map((a,o)=>e[(t+o)%e.length])}po(ap,"wrapArray");var Se=require("react/jsx-runtime"),rL=Object.defineProperty,Re=(e,t)=>rL(e,"name",{value:t,configurable:!0});var Us=["Enter"," "],nL=["ArrowDown","PageUp","Home"],np=["ArrowUp","PageDown","End"],lL=[...nL,...np],Vy={ltr:[...Us,"ArrowRight"],rtl:[...Us,"ArrowLeft"]};var tl="Menu",[qs,sL,iL]=ro(tl),[mo,zs]=We(tl,[iL,fa,_s]),Vs=fa(),lp=_s(),[uL,jr]=mo(tl),[dL,Gs]=mo(tl),sp=Re(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Vs(t),[i,u]=Q.useState(null),c=Q.useRef(!1),d=Ke(n),f=no(r);return Q.useEffect(()=>{let p=Re(()=>{c.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},"handleKeyDown"),x=Re(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),Q.useEffect(()=>{if(!a)return;let p=Re(()=>d(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,d]),(0,Se.jsx)(jo,{...s,children:(0,Se.jsx)(uL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,Se.jsx)(dL,{scope:t,onClose:Q.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),ip=Q.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t,n=Vs(o);return(0,Se.jsx)($o,{...n,...r,ref:a})},"MenuAnchor")),up="MenuPortal",[cL,fL]=mo(up,{forceMount:void 0}),dp=Re(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=jr(up,t);return(0,Se.jsx)(cL,{scope:t,forceMount:a,children:(0,Se.jsx)(Ft,{present:a||n.open,children:(0,Se.jsx)(Sa,{asChild:!0,container:r,children:o})})})},"MenuPortal"),Ta="MenuContent",[pL,cp]=mo(Ta),fp=Q.forwardRef(Re(function(t,a){let o=fL(Ta,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=jr(Ta,t.__scopeMenu),s=Gs(Ta,t.__scopeMenu);return(0,Se.jsx)(qs.Provider,{scope:t.__scopeMenu,children:(0,Se.jsx)(Ft,{present:r||l.open,children:(0,Se.jsx)(qs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,Se.jsx)(mL,{...n,ref:a}):(0,Se.jsx)(hL,{...n,ref:a})})})})},"MenuContent")),mL=Q.forwardRef(Re(function(t,a){let o=jr(Ta,t.__scopeMenu),r=Q.useRef(null),n=oe(a,r);return Q.useEffect(()=>{let l=r.current;if(l)return zo(l)},[]),(0,Se.jsx)(pp,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:X(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),hL=Q.forwardRef(Re(function(t,a){let o=jr(Ta,t.__scopeMenu);return(0,Se.jsx)(pp,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),gL=nt("MenuContent.ScrollLock"),pp=Q.forwardRef(Re(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:x,disableOutsideScroll:m,...h}=t,g=jr(Ta,o),v=Gs(Ta,o),C=Vs(o),b=lp(o),w=sL(o),[L,I]=Q.useState(null),k=Q.useRef(null),[T,S]=Q.useState(null);Fr(T);let{nodes:M,registry:P}=Or(),N=!!(n||m),D=oe(a,k,g.onContentChange,S),U=Q.useRef(0),V=Q.useRef(""),G=Q.useRef(0),q=Q.useRef(null),K=Q.useRef("right"),W=Q.useRef(0),se=Q.useMemo(()=>m?[k,...M.map(O=>({current:O}))]:[],[k,M,m]),A=m?Za:Q.Fragment,ee=m?{as:gL,allowPinchZoom:!0,shards:se}:void 0,Ue=Re(O=>{let Le=V.current+O,ve=w().filter(ae=>!ae.disabled),ge=document.activeElement,_=ve.find(ae=>ae.ref.current===ge)?.textValue,be=ve.map(ae=>ae.textValue),ie=vp(be,Le,_),Y=ve.find(ae=>ae.textValue===ie)?.ref.current;function J(ae){V.current=ae,window.clearTimeout(U.current),ae!==""&&(U.current=window.setTimeout(()=>J(""),1e3))}Re(J,"updateSearch"),J(Le),Y&&setTimeout(()=>Y.focus())},"handleTypeaheadSearch");Q.useEffect(()=>()=>window.clearTimeout(U.current),[]),ya();let xe=Q.useCallback(O=>K.current===q.current?.side&&wp(O,q.current?.area),[]);return(0,Se.jsx)(pL,{scope:o,searchRef:V,onItemEnter:Q.useCallback(O=>{xe(O)&&O.preventDefault()},[xe]),onItemLeave:Q.useCallback(O=>{xe(O)||(k.current?.focus(),I(null))},[xe]),onTriggerLeave:Q.useCallback(O=>{xe(O)&&O.preventDefault()},[xe]),pointerGraceTimerRef:G,onPointerGraceIntentChange:Q.useCallback(O=>{q.current=O},[]),children:(0,Se.jsx)(Er,{registry:N?P:null,children:(0,Se.jsx)(A,{...ee,children:(0,Se.jsx)(Bo,{asChild:!0,trapped:n,branches:M,onMountAutoFocus:X(l,O=>{O.preventDefault(),k.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,Se.jsx)(wa,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:x,children:(0,Se.jsx)(Jf,{asChild:!0,...b,dir:v.dir,orientation:"vertical",loop:r,currentTabStopId:L,onCurrentTabStopIdChange:I,onEntryFocus:X(u,O=>{v.isUsingKeyboardRef.current||O.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,Se.jsx)(Yo,{role:"menu","aria-orientation":"vertical","data-state":xp(g.open),"data-radix-menu-content":"",dir:v.dir,...C,...h,ref:D,style:{outline:"none",...h.style},onKeyDown:X(h.onKeyDown,O=>{let ve=O.target.closest("[data-radix-menu-content]")===O.currentTarget,ge=O.ctrlKey||O.altKey||O.metaKey,_=O.key.length===1;ve&&(O.key==="Tab"&&O.preventDefault(),!ge&&_&&Ue(O.key));let be=k.current;if(O.target!==be||!lL.includes(O.key))return;O.preventDefault();let Y=w().filter(J=>!J.disabled).map(J=>J.ref.current);np.includes(O.key)&&Y.reverse(),Lp(Y)}),onBlur:X(t.onBlur,O=>{O.currentTarget.contains(O.target)||(window.clearTimeout(U.current),V.current="")}),onPointerMove:X(t.onPointerMove,el(O=>{let Le=O.target,ve=W.current!==O.clientX;if(O.currentTarget.contains(Le)&&ve){let ge=O.clientX>W.current?"right":"left";K.current=ge,W.current=O.clientX}}))})})})})})})})},"MenuContentImpl"));var mp=Q.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(le.div,{...r,ref:a})},"MenuLabel")),Ws="MenuItem",op="menu.itemSelect",hp=Q.forwardRef(Re(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Q.useRef(null),s=Gs(Ws,t.__scopeMenu),i=cp(Ws,t.__scopeMenu),u=oe(a,l),c=Q.useRef(!1),d=Re(()=>{let f=l.current;if(!o&&f){let p=new CustomEvent(op,{bubbles:!0,cancelable:!0});f.addEventListener(op,x=>r?.(x),{once:!0}),Tr(f,p),p.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,Se.jsx)(xL,{...n,ref:u,disabled:o,onClick:X(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:X(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:X(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||Us.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),xL=Q.forwardRef(Re(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=cp(Ws,o),i=lp(o),u=Q.useRef(null),c=oe(a,u),[d,f]=Q.useState(!1),[p,x]=Q.useState("");return Q.useEffect(()=>{let m=u.current;m&&x((m.textContent??"").trim())},[l.children]),(0,Se.jsx)(qs.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,Se.jsx)(Qf,{asChild:!0,...i,focusable:!r,children:(0,Se.jsx)(le.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:X(t.onPointerMove,el(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:X(t.onPointerLeave,el(m=>s.onItemLeave(m))),onFocus:X(t.onFocus,()=>f(!0)),onBlur:X(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var CL="MenuRadioGroup",[Gy,Xy]=mo(CL,{value:void 0,onValueChange:Re(()=>{},"onValueChange")});var LL="MenuItemIndicator",[Ky,jy]=mo(LL,{checked:!1});var gp=Q.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(le.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var bL="MenuSub",[$y,Yy]=mo(bL);function xp(e){return e?"open":"closed"}Re(xp,"getOpenState");function Cp(e){return e==="indeterminate"}Re(Cp,"isIndeterminate");function vL(e){return Cp(e)?"indeterminate":e?"checked":"unchecked"}Re(vL,"getCheckedState");function Lp(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Re(Lp,"focusFirst");function bp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Re(bp,"wrapArray");function vp(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=bp(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Re(vp,"getNextMatch");function Ip(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Re(Ip,"isPointInPolygon");function wp(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Ip(a,t)}Re(wp,"isPointerInGraceArea");function el(e){return t=>t.pointerType==="mouse"?e(t):void 0}Re(el,"whenMouse");var ta=require("react/jsx-runtime"),wL=Object.defineProperty,ho=(e,t)=>wL(e,"name",{value:t,configurable:!0}),Xs="DropdownMenu",[SL,pR]=We(Xs,[zs]),go=zs(),[yL,Sp]=SL(Xs),yp=ho(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=go(t),u=Gt.useRef(null),[c,d]=Ot({prop:r,defaultProp:n??!1,onChange:l,caller:Xs});return(0,ta.jsx)(yL,{scope:t,triggerId:it(),triggerRef:u,contentId:it(),open:c,onOpenChange:d,onOpenToggle:Gt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,ta.jsx)(sp,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),RL="DropdownMenuTrigger",Rp=Gt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Sp(RL,o),s=go(o),i=oe(a,l.triggerRef);return(0,ta.jsx)(ip,{asChild:!0,...s,children:(0,ta.jsx)(le.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:X(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:X(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),kp=ho(e=>{let{__scopeDropdownMenu:t,...a}=e,o=go(t);return(0,ta.jsx)(dp,{...o,...a})},"DropdownMenuPortal"),kL="DropdownMenuContent",Ks=Gt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Sp(kL,o),l=go(o),s=Gt.useRef(!1);return(0,ta.jsx)(fp,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:X(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:X(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var js=Gt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=go(o);return(0,ta.jsx)(mp,{...n,...r,ref:a})},"DropdownMenuLabel")),$s=Gt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=go(o);return(0,ta.jsx)(hp,{...n,...r,ref:a})},"DropdownMenuItem"));var Ys=Gt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=go(o);return(0,ta.jsx)(gp,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Zo=require("react/jsx-runtime"),xo=yp,Co=Rp;var Aa=$r.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Zo.jsx)(kp,{children:(0,Zo.jsx)(Ks,{ref:o,sideOffset:t,className:re("kanban-portal kanban-dropdown-content",e),...a})}));Aa.displayName=Ks.displayName;var yt=$r.forwardRef(({className:e,inset:t,...a},o)=>(0,Zo.jsx)($s,{ref:o,className:re("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));yt.displayName=$s.displayName;var DL=$r.forwardRef(({className:e,inset:t,...a},o)=>(0,Zo.jsx)(js,{ref:o,className:re("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));DL.displayName=js.displayName;var ML=$r.forwardRef(({className:e,...t},a)=>(0,Zo.jsx)(Ys,{ref:a,className:re("kanban-dropdown-separator",e),...t}));ML.displayName=Ys.displayName;var Pp=j(require("react"),1);var Dp=require("react/jsx-runtime"),aa=Pp.forwardRef(({className:e,type:t,...a},o)=>(0,Dp.jsx)("input",{type:t,className:re("kanban-input",e),ref:o,...a}));aa.displayName="Input";var Ap=j(require("react"),1);var Mp=j(require("react"),1);var Tp=require("react/jsx-runtime"),TL=Object.defineProperty,AL=(e,t)=>TL(e,"name",{value:t,configurable:!0}),Zs=Mp.forwardRef(AL(function(t,a){return(0,Tp.jsx)(le.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var Ep=require("react/jsx-runtime"),ht=Ap.forwardRef(({className:e,...t},a)=>(0,Ep.jsx)(Zs,{ref:a,className:re("kanban-label",e),...t}));ht.displayName=Zs.displayName;var Oa=j(require("react"),1);var F=j(require("react"),1),ei=j(require("react-dom"),1);var OL=Object.defineProperty,FL=(e,t)=>OL(e,"name",{value:t,configurable:!0});function al(e,[t,a]){return Math.min(a,Math.max(t,e))}FL(al,"clamp");var Op=j(require("react"),1);var Fp=require("react/jsx-runtime"),BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0}),Js=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Bp=Op.forwardRef(NL(function(t,a){return(0,Fp.jsx)(le.span,{...t,ref:a,style:{...Js,...t.style}})},"VisuallyHidden"));var $=require("react/jsx-runtime"),HL=Object.defineProperty,fe=(e,t)=>HL(e,"name",{value:t,configurable:!0}),Np={ItemAligned:"item-aligned",Popper:"popper"},UL={LTR:"ltr",RTL:"rtl"},qL=[" ","Enter","ArrowUp","ArrowDown"],WL=[" ","Enter"],Jo="Select",[rl,nl,zL]=ro(Jo),[bo,GR]=We(Jo,[zL,fa]),ti=fa(),[VL,Ea]=bo(Jo),[GL,XL]=bo(Jo);function Wp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:p,form:x,internal_do_not_use_render:m}=e,h=ti(t),[g,v]=F.useState(null),[C,b]=F.useState(null),[w,L]=F.useState(!1),I=no(u),[k,T]=Ot({prop:o,defaultProp:r??!1,onChange:n,caller:Jo}),[S,M]=Ot({prop:l,defaultProp:s,onChange:i,caller:Jo}),P=F.useRef(null),N=F.useRef(!1),[D,U]=F.useState(null),V=fe(O=>{U({value:O,hasConsumerStoppedPropagation:N.current}),M(O)},"handleUserSelect"),G=F.useRef(S);F.useEffect(()=>{let O=x?g?.ownerDocument.getElementById(x):g?.form;if(O instanceof HTMLFormElement){let Le=fe(()=>M(G.current),"reset");return O.addEventListener("reset",Le),()=>O.removeEventListener("reset",Le)}},[x,g,M]);let q=g?!!x||!!g.closest("form"):!0,[K,W]=F.useState(new Set),se=it(),A=Array.from(K).map(O=>O.props.value).join(";"),ee=F.useCallback(O=>{W(Le=>new Set(Le).add(O))},[]),Ue=F.useCallback(O=>{W(Le=>{let ve=new Set(Le);return ve.delete(O),ve})},[]),xe={required:p,trigger:g,onTriggerChange:v,valueNode:C,onValueNodeChange:b,valueNodeHasChildren:w,onValueNodeHasChildrenChange:L,contentId:se,value:S,onValueChange:M,hasConsumerStoppedPropagationRef:N,userSelection:D,onUserSelect:V,open:k,onOpenChange:T,dir:I,triggerPointerDownPosRef:P,disabled:f,name:c,autoComplete:d,form:x,nativeOptions:K,nativeSelectKey:A,isFormControl:q};return(0,$.jsx)(jo,{...h,children:(0,$.jsx)(VL,{scope:t,...xe,children:(0,$.jsx)(rl.Provider,{scope:t,children:(0,$.jsx)(GL,{scope:t,onNativeOptionAdd:ee,onNativeOptionRemove:Ue,children:Qp(m)?m(xe):a})})})})}fe(Wp,"SelectProvider");var zp=fe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,$.jsx)(Wp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,$.jsxs)($.Fragment,{children:[a,r?(0,$.jsx)(ub,{__scopeSelect:t}):null]})})},"Select"),KL="SelectTrigger",ai=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=ti(o),s=Ea(KL,o),i=s.disabled||r,u=oe(a,s.onTriggerChange),c=nl(o),d=F.useRef("touch"),[f,p,x]=di(h=>{let g=c().filter(b=>!b.disabled),v=g.find(b=>b.value===s.value),C=ci(g,h,v);C!==void 0&&s.onUserSelect(C.value)}),m=fe(h=>{i||(s.onOpenChange(!0),x()),h&&(s.triggerPointerDownPosRef.current={x:Math.round(h.pageX),y:Math.round(h.pageY)})},"handleOpen");return(0,$.jsx)($o,{asChild:!0,...l,children:(0,$.jsx)(le.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Yr(s.value)?"":void 0,...n,ref:u,onClick:X(n.onClick,h=>{h.currentTarget.focus(),d.current!=="mouse"&&m(h)}),onPointerDown:X(n.onPointerDown,h=>{d.current=h.pointerType;let g=h.target;g.hasPointerCapture(h.pointerId)&&g.releasePointerCapture(h.pointerId),h.button===0&&h.ctrlKey===!1&&h.pointerType==="mouse"&&(m(h),h.preventDefault())}),onKeyDown:X(n.onKeyDown,h=>{let g=f.current!=="";!(h.ctrlKey||h.altKey||h.metaKey)&&h.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=h.isPropagationStopped(),p(h.key)),!(g&&h.key===" ")&&qL.includes(h.key)&&(m(),h.preventDefault())})})})},"SelectTrigger")),jL="SelectValue",Vp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=Ea(jL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=oe(a,u.onValueNodeChange);ue(()=>{c(d)},[c,d]);let p=Yr(u.value);return(0,$.jsx)(le.span,{...i,asChild:p?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,$.jsx)(F.Fragment,{children:p?s:l},p?"placeholder":"value")})},"SelectValue")),Gp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,$.jsx)(le.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),$L="SelectPortal",[YL,ZL]=bo($L,{forceMount:void 0}),Xp=fe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,$.jsx)(YL,{scope:e.__scopeSelect,forceMount:a,children:(0,$.jsx)(Sa,{asChild:!0,...o})})},"SelectPortal"),Lo="SelectContent",oi=F.forwardRef(fe(function(t,a){let o=ZL(Lo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=Ea(Lo,t.__scopeSelect),[s,i]=F.useState();return ue(()=>{i(new DocumentFragment)},[]),(0,$.jsx)(Ft,{present:r||l.open,children:({present:u})=>u?(0,$.jsx)(eb,{...n,ref:a}):(0,$.jsx)(JL,{...n,fragment:s})})},"SelectContent")),JL=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?ei.createPortal((0,$.jsx)(Kp,{scope:o,children:(0,$.jsx)(rl.Slot,{scope:o,children:(0,$.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Xt=10,[Kp,vo]=bo(Lo),QL=nt("SelectContent.RemoveScroll"),eb=F.forwardRef(fe(function(t,a){let{__scopeSelect:o}=t,{position:r=Np.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:x,sticky:m,hideWhenDetached:h,avoidCollisions:g,...v}=t,C=Ea(Lo,o),[b,w]=F.useState(null),[L,I]=F.useState(null),k=oe(a,w),[T,S]=F.useState(null),[M,P]=F.useState(null),N=nl(o),[D,U]=F.useState(!1),V=F.useRef(!1),G=F.useRef(!1),q=F.useRef(!1);F.useEffect(()=>{if(b)return zo(b)},[b]),ya();let K=F.useCallback(_=>{let[be,...ie]=N().map(ae=>ae.ref.current),[Y]=ie.slice(-1),J=document.activeElement;for(let ae of _)if(ae===J||(ae?.scrollIntoView({block:"nearest"}),ae===be&&L&&(L.scrollTop=0),ae===Y&&L&&(L.scrollTop=L.scrollHeight),ae?.focus(),document.activeElement!==J))return},[N,L]),W=F.useCallback(()=>K([T,b]),[K,T,b]);F.useEffect(()=>{D&&W()},[D,W]);let{onOpenChange:se,triggerPointerDownPosRef:A}=C;F.useEffect(()=>{if(b){let _={x:0,y:0},be=fe(Y=>{_={x:Math.abs(Math.round(Y.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(Y.pageY)-(A.current?.y??0))}},"handlePointerMove"),ie=fe(Y=>{_.x<=10&&_.y<=10?Y.preventDefault():Y.composedPath().includes(b)||se(!1),document.removeEventListener("pointermove",be),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",be),document.addEventListener("pointerup",ie,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",be),document.removeEventListener("pointerup",ie,{capture:!0})}}},[b,se,A]),F.useEffect(()=>{let _=fe(()=>se(!1),"close");return window.addEventListener("blur",_),window.addEventListener("resize",_),()=>{window.removeEventListener("blur",_),window.removeEventListener("resize",_)}},[se]);let[ee,Ue]=di(_=>{let be=N().filter(J=>!J.disabled),ie=be.find(J=>J.ref.current===document.activeElement),Y=ci(be,_,ie);Y&&setTimeout(()=>Y.ref.current?.focus())}),xe=F.useCallback((_,be,ie)=>{let Y=!G.current;Y&&(G.current=!0);let J=!V.current&&!ie;C.value!==void 0&&C.value===be||J?(S(_),J&&(V.current=!0)):Y&&S(_)},[C.value]),O=F.useCallback(()=>b?.focus(),[b]),Le=F.useCallback((_,be,ie)=>{if(!_)return;let Y=!q.current;Y&&(q.current=!0);let J=!V.current&&!ie;(C.value!==void 0&&C.value===be||J||Y)&&P(_)},[C.value]),ve=r===Np.Popper?_p:tb,ge=ve===_p?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:x,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,$.jsx)(Kp,{scope:o,content:b,viewport:L,onViewportChange:I,itemRefCallback:xe,selectedItem:T,onItemLeave:O,itemTextRefCallback:Le,focusSelectedItem:W,selectedItemText:M,position:r,isPositioned:D,searchRef:ee,children:(0,$.jsx)(Za,{as:QL,allowPinchZoom:!0,children:(0,$.jsx)(Bo,{asChild:!0,trapped:C.open,onMountAutoFocus:_=>{_.preventDefault()},onUnmountAutoFocus:X(n,_=>{C.trigger?.focus({preventScroll:!0}),_.preventDefault()}),children:(0,$.jsx)(wa,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:_=>_.preventDefault(),onDismiss:()=>C.onOpenChange(!1),children:(0,$.jsx)(ve,{role:"listbox",id:C.contentId,"data-state":C.open?"open":"closed",dir:C.dir,onContextMenu:_=>_.preventDefault(),...v,...ge,onPlaced:()=>U(!0),ref:k,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:X(v.onKeyDown,_=>{let be=_.ctrlKey||_.altKey||_.metaKey;if(_.key==="Tab"&&_.preventDefault(),!be&&_.key.length===1&&Ue(_.key),["ArrowUp","ArrowDown","Home","End"].includes(_.key)){let Y=N().filter(J=>!J.disabled).map(J=>J.ref.current);if(["ArrowUp","End"].includes(_.key)&&(Y=Y.slice().reverse()),["ArrowUp","ArrowDown"].includes(_.key)){let J=_.target,ae=Y.indexOf(J);Y=Y.slice(ae+1)}setTimeout(()=>K(Y)),_.preventDefault()}})})})})})})},"SelectContentImpl")),tb=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=Ea(Lo,o),s=vo(Lo,o),[i,u]=F.useState(null),[c,d]=F.useState(null),f=oe(a,d),p=nl(o),x=F.useRef(!1),m=F.useRef(!0),{viewport:h,selectedItem:g,selectedItemText:v,focusSelectedItem:C}=s,b=F.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&h&&g&&v){let k=l.trigger.getBoundingClientRect(),T=c.getBoundingClientRect(),S=l.valueNode.getBoundingClientRect(),M=v.getBoundingClientRect();if(l.dir!==UL.RTL){let ie=M.left-T.left,Y=S.left-ie,J=k.left-Y,ae=k.width+J,y=Math.max(ae,T.width),H=window.innerWidth-Xt,z=al(Y,[Xt,Math.max(Xt,H-y)]);i.style.minWidth=ae+"px",i.style.left=z+"px"}else{let ie=T.right-M.right,Y=window.innerWidth-S.right-ie,J=window.innerWidth-k.right-Y,ae=k.width+J,y=Math.max(ae,T.width),H=window.innerWidth-Xt,z=al(Y,[Xt,Math.max(Xt,H-y)]);i.style.minWidth=ae+"px",i.style.right=z+"px"}let P=p(),N=window.innerHeight-Xt*2,D=h.scrollHeight,U=window.getComputedStyle(c),V=parseInt(U.borderTopWidth,10),G=parseInt(U.paddingTop,10),q=parseInt(U.borderBottomWidth,10),K=parseInt(U.paddingBottom,10),W=V+G+D+K+q,se=Math.min(g.offsetHeight*5,W),A=window.getComputedStyle(h),ee=parseInt(A.paddingTop,10),Ue=parseInt(A.paddingBottom,10),xe=k.top+k.height/2-Xt,O=N-xe,Le=g.offsetHeight/2,ve=g.offsetTop+Le,ge=V+G+ve,_=W-ge;if(ge<=xe){let ie=P.length>0&&g===P[P.length-1].ref.current;i.style.bottom="0px";let Y=c.clientHeight-h.offsetTop-h.offsetHeight,J=Math.max(O,Le+(ie?Ue:0)+Y+q),ae=ge+J;i.style.height=ae+"px"}else{let ie=P.length>0&&g===P[0].ref.current;i.style.top="0px";let J=Math.max(xe,V+h.offsetTop+(ie?ee:0)+Le)+_;i.style.height=J+"px",h.scrollTop=ge-xe+h.offsetTop}i.style.margin=`${Xt}px 0`,i.style.minHeight=se+"px",i.style.maxHeight=N+"px",r?.(),requestAnimationFrame(()=>x.current=!0)}},[p,l.trigger,l.valueNode,i,c,h,g,v,l.dir,r]);ue(()=>b(),[b]);let[w,L]=F.useState();ue(()=>{c&&L(window.getComputedStyle(c).zIndex)},[c]);let I=F.useCallback(k=>{k&&m.current===!0&&(b(),C?.(),m.current=!1)},[b,C]);return(0,$.jsx)(ab,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:x,onScrollButtonChange:I,children:(0,$.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:(0,$.jsx)(le.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),_p=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Xt,...l}=t,s=ti(o);return(0,$.jsx)(Yo,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[ab,ri]=bo(Lo,{}),Hp="SelectViewport",jp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=vo(Hp,o),s=ri(Hp,o),i=oe(a,l.onViewportChange),u=F.useRef(0);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,$.jsx)(rl.Slot,{scope:o,children:(0,$.jsx)(le.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:X(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){let x=Math.abs(u.current-d.scrollTop);if(x>0){let m=window.innerHeight-Xt*2,h=parseFloat(f.style.minHeight),g=parseFloat(f.style.height),v=Math.max(h,g);if(v<m){let C=v+x,b=Math.min(m,C),w=C-b;f.style.height=b+"px",f.style.bottom==="0px"&&(d.scrollTop=w>0?w:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),ob="SelectGroup",[XR,rb]=bo(ob);var nb="SelectLabel",ni=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t,n=rb(nb,o);return(0,$.jsx)(le.div,{id:n.id,...r,ref:a})},"SelectLabel")),Qs="SelectItem",[lb,$p]=bo(Qs),li=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=Ea(Qs,o),u=vo(Qs,o),c=i.value===r,[d,f]=F.useState(l??""),[p,x]=F.useState(!1),m=Ke(b=>u.itemRefCallback?.(b,r,n)),h=oe(a,m),g=it(),v=F.useRef("touch");function C(b){i.hasConsumerStoppedPropagationRef.current=b.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return fe(C,"handleSelect"),(0,$.jsx)(lb,{scope:o,value:r,disabled:n,textId:g,isSelected:c,onItemTextChange:F.useCallback(b=>{f(w=>w||(b?.textContent??"").trim())},[]),children:(0,$.jsx)(rl.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,$.jsx)(le.div,{role:"option","aria-labelledby":g,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:h,onFocus:X(s.onFocus,()=>x(!0)),onBlur:X(s.onBlur,()=>x(!1)),onClick:X(s.onClick,b=>{n||v.current!=="mouse"&&C(b)}),onPointerUp:X(s.onPointerUp,b=>{n||v.current==="mouse"&&C(b)}),onPointerDown:X(s.onPointerDown,b=>{v.current=b.pointerType}),onPointerMove:X(s.onPointerMove,b=>{v.current=b.pointerType,n?u.onItemLeave?.():v.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:X(s.onPointerLeave,b=>{b.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:X(s.onKeyDown,b=>{n||b.target!==b.currentTarget||u.searchRef?.current!==""&&b.key===" "||(WL.includes(b.key)&&C(b),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),ol="SelectItemText",Yp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=Ea(ol,o),i=vo(ol,o),u=$p(ol,o),c=XL(ol,o),[d,f]=F.useState(null),p=Ke(C=>i.itemTextRefCallback?.(C,u.value,u.disabled)),x=oe(a,f,u.onItemTextChange,p),m=d?.textContent,h=F.useMemo(()=>(0,$.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:g,onNativeOptionRemove:v}=c;return ue(()=>(g(h),()=>v(h)),[g,v,h]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(le.span,{id:u.textId,...l,ref:x}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Yr(s.value)?ei.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),sb="SelectItemIndicator",Zp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return $p(sb,o).isSelected?(0,$.jsx)(le.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Up="SelectScrollUpButton",si=F.forwardRef(fe(function(t,a){let o=vo(Up,t.__scopeSelect),r=ri(Up,t.__scopeSelect),[n,l]=F.useState(!1),s=oe(a,r.onScrollButtonChange);return ue(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;fe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,$.jsx)(Jp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),qp="SelectScrollDownButton",ii=F.forwardRef(fe(function(t,a){let o=vo(qp,t.__scopeSelect),r=ri(qp,t.__scopeSelect),[n,l]=F.useState(!1),s=oe(a,r.onScrollButtonChange);return ue(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;fe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,$.jsx)(Jp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Jp=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=vo("SelectScrollButton",o),s=F.useRef(null),i=nl(o),u=F.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return F.useEffect(()=>()=>u(),[u]),ue(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,$.jsx)(le.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:X(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:X(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:X(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),ui=F.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,$.jsx)(le.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var ib="SelectBubbleInput",ub=F.forwardRef(fe(function({__scopeSelect:t,...a},o){let r=Ea(ib,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:x}=r,m=F.useRef(null),h=oe(o,m),g=n??"",v=F.useRef(g),C=F.useRef(f),b=F.useRef(!1),w=Array.from(p).some(L=>(L.props.value??"")==="");return F.useEffect(()=>{let L=m.current;if(!L)return;let I=window.HTMLSelectElement.prototype,T=Object.getOwnPropertyDescriptor(I,"value").set,S=f!==null&&f!==C.current;C.current=f;let M=v.current!==g;v.current=g;let P=S&&M;if(S&&!M&&f.value!==g&&!f.hasConsumerStoppedPropagation&&T){b.current=!0;try{T.call(L,f.value),L.dispatchEvent(new Event("change",{bubbles:!0}))}finally{b.current=!1,T.call(L,g)}return}let N=P&&!f.hasConsumerStoppedPropagation;if(M&&T){let D=new Event("change",{bubbles:N});T.call(L,g),L.dispatchEvent(D)}},[g,f]),(0,$.jsxs)(le.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>{b.current||l(L.target.value)},...a,style:{...Js,...a.style},ref:h,defaultValue:g,children:[Yr(n)&&!w?(0,$.jsx)("option",{value:""}):null,Array.from(p)]},x)},"SelectBubbleInput"));function Qp(e){return typeof e=="function"}fe(Qp,"isFunction");function Yr(e){return e===""||e===void 0}fe(Yr,"shouldShowPlaceholder");function di(e){let t=Ke(e),a=F.useRef(""),o=F.useRef(0),r=F.useCallback(l=>{let s=a.current+l;t(s);function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}fe(i,"updateSearch"),i(s)},[t]),n=F.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return F.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}fe(di,"useTypeaheadSearch");function ci(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=em(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}fe(ci,"findNextItem");function em(e,t){return e.map((a,o)=>e[(t+o)%e.length])}fe(em,"wrapArray");var Ee=require("react/jsx-runtime"),Zr=zp;var Jr=Vp,Qo=Oa.forwardRef(({className:e,children:t,...a},o)=>(0,Ee.jsxs)(ai,{ref:o,className:re("kanban-select-trigger",e),...a,children:[t,(0,Ee.jsx)(Gp,{asChild:!0,children:(0,Ee.jsx)(Ao,{className:"kanban-select-icon"})})]}));Qo.displayName=ai.displayName;var tm=Oa.forwardRef(({className:e,...t},a)=>(0,Ee.jsx)(si,{ref:a,className:re("kanban-select-scroll-button",e),...t,children:(0,Ee.jsx)(Ir,{className:"kanban-select-scroll-icon"})}));tm.displayName=si.displayName;var am=Oa.forwardRef(({className:e,...t},a)=>(0,Ee.jsx)(ii,{ref:a,className:re("kanban-select-scroll-button",e),...t,children:(0,Ee.jsx)(Ao,{className:"kanban-select-scroll-icon"})}));am.displayName=ii.displayName;var er=Oa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Ee.jsx)(Xp,{children:(0,Ee.jsxs)(oi,{ref:r,className:re("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Ee.jsx)(tm,{}),(0,Ee.jsx)(jp,{className:re("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Ee.jsx)(am,{})]})}));er.displayName=oi.displayName;var cb=Oa.forwardRef(({className:e,...t},a)=>(0,Ee.jsx)(ni,{ref:a,className:re("kanban-select-label",e),...t}));cb.displayName=ni.displayName;var pa=Oa.forwardRef(({className:e,children:t,...a},o)=>(0,Ee.jsxs)(li,{ref:o,className:re("kanban-select-item",e),...a,children:[(0,Ee.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Ee.jsx)(Zp,{children:(0,Ee.jsx)(ft,{className:"kanban-select-check"})})}),(0,Ee.jsx)(Yp,{children:t})]}));pa.displayName=li.displayName;var fb=Oa.forwardRef(({className:e,...t},a)=>(0,Ee.jsx)(ui,{ref:a,className:re("kanban-select-separator",e),...t}));fb.displayName=ui.displayName;var om=j(require("react"),1);var rm=require("react/jsx-runtime"),ll=om.forwardRef(({className:e,...t},a)=>(0,rm.jsx)("textarea",{className:re("kanban-textarea",e),ref:a,...t}));ll.displayName="Textarea";var Kt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},sl=["high","medium","low"],nm="var(--dsw-alias-label-tertiary)";function lm(e,t){return t?e.find(a=>a.name===t)?.color??nm:nm}var il=require("react");function Io(e=new Date,t=0){let a=new Date(e);return a.setDate(a.getDate()+t),`${String(a.getFullYear()).padStart(4,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function fi(e,t){let a=o=>{let[r,n,l]=o.split("-").map(Number),s=new Date(0);return s.setUTCFullYear(r,n-1,l),s.getTime()/864e5};return a(t)-a(e)}function sm(e,t,a,o){return t?!e.dueDate||e.columnId===a?!1:t==="today"?e.dueDate===o:e.dueDate<o:!0}function im(e,t,a){let[o,r,n]=e.split("-");return a(o===t.slice(0,4)?"shortDate":"yearDate").replace("{year}",o).replace("{month}",String(Number(r))).replace("{day}",String(Number(n)))}function um(){let[e,t]=(0,il.useState)(()=>Io());return(0,il.useEffect)(()=>{let a,o=()=>{clearTimeout(a);let r=new Date;t(Io(r));let n=new Date(r);n.setHours(24,0,0,0),a=setTimeout(o,n.getTime()-r.getTime()+100)};return o(),window.addEventListener("focus",o),document.addEventListener("visibilitychange",o),()=>{clearTimeout(a),window.removeEventListener("focus",o),document.removeEventListener("visibilitychange",o)}},[]),e}var Ye=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),pi=e=>e==="high"||e==="medium"||e==="low"?Kt[e].label:"";function dm(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&pi(a.priority)||o;return Ye(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ye(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ye(t("actLabelSet"),{to:n}):r!=null&&n==null?Ye(t("actLabelCleared"),{from:r}):Ye(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?pi(r)||r:o,s=n?pi(n)||n:o;return r==null&&n!=null?Ye(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ye(t("actPriorityCleared"),{from:l}):Ye(t("actPriority"),{from:l,to:s})}case"card_due_date_changed":return Ye(t("actDueDate"),{from:r??o,to:n??o});case"board_completed_column_changed":return Ye(t("actCompletedColumn"),{from:a.fromColumn??r??o,to:a.toColumn??n??o});case"card_title_changed":return Ye(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return Ye(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ye(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ye(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ye(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ye(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ye(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ye(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var ul=e=>String(e).padStart(2,"0");function Qr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${ul(t.getMonth()+1)}-${ul(t.getDate())} ${ul(t.getHours())}:${ul(t.getMinutes())}`}var ma=require("react/jsx-runtime");function cm({activities:e}){let t=Ne();if(e.length===0)return(0,ma.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ma.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ma.jsxs)("li",{className:"kanban-activity-item",children:[(0,ma.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ma.jsxs)("p",{className:"kanban-activity-description",children:[(0,ma.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",dm(o,t)]}),(0,ma.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Qr(o.ts),children:Qr(o.ts)})]},o.id)})})}var E=require("react/jsx-runtime");function pm({open:e,error:t,card:a,labels:o,comments:r,activities:n,onOpenChange:l,onSave:s,onAddComment:i,onDelete:u,onChatWithAgent:c}){let d=Ne(),f=(0,He.useId)(),p=(0,He.useRef)(null),x=(0,He.useRef)(null),m=(0,He.useRef)(null),h=(0,He.useRef)(null),[g,v]=(0,He.useState)(!a),[C,b]=(0,He.useState)({id:"",title:"",note:"",label:"",priority:"",dueDate:""}),[w,L]=(0,He.useState)(""),[I,k]=(0,He.useState)(!1),T=(0,He.useRef)(!1),[S,M]=(0,He.useState)(""),[P,N]=(0,He.useState)(null),D=(0,He.useRef)(null),U=(0,He.useRef)(C);(0,He.useEffect)(()=>{if(e){let A={id:a?.id??"",title:a?.title??"",note:a?.note??"",label:a?.label??"",priority:a?.priority??"",dueDate:a?.dueDate??""};U.current=A,b(A),L(""),M(""),N(null),v(!a)}},[e,a]),(0,He.useEffect)(()=>{P&&D.current?.focus()},[P]);let V=!!w.trim()||Object.keys(C).some(A=>C[A]!==U.current[A]),G=A=>{if(!T.current){if(!A&&P){N(null);return}if(!A&&V){N("discard");return}l(A)}},q=async A=>{if(T.current)return!1;T.current=!0,k(!0),M("");try{let ee=await A();return ee===!1&&M(d("actionRetry")),ee!==!1}catch(ee){return M(d("actionFailed")+String(ee instanceof Error?ee.message:ee)),!1}finally{T.current=!1,k(!1)}},K=async A=>{if(m.current?.reportValidity()){if(w.trim()){N(A);return}await q(()=>c(C,A))&&l(!1)}},W=A=>b(ee=>({...ee,...A})),se=async()=>{let A=w.trim();!a||!A||A.length>2e3||await q(()=>i(a.id,A))&&L("")};return(0,E.jsx)(Vo,{open:e,onOpenChange:G,children:(0,E.jsxs)(vs,{"aria-describedby":void 0,onOpenAutoFocus:A=>{p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,A.preventDefault(),x.current?.focus()},onCloseAutoFocus:A=>{p.current?.isConnected&&(A.preventDefault(),p.current.focus())},children:[(0,E.jsxs)(eo,{children:[(0,E.jsx)(oo,{children:d(a?"taskDetails":"addCard")}),a&&(0,E.jsxs)("span",{className:"kanban-field-id",children:[d("fieldId"),": ",a.id]})]}),(0,E.jsxs)(to,{className:"kanban-form-stack",children:[(t||S)&&(0,E.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||S}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(ht,{htmlFor:`${f}-title`,className:"kanban-field-label",children:d("fieldTitle")}),(0,E.jsx)(aa,{ref:x,id:`${f}-title`,value:C.title,placeholder:d("titlePlaceholder"),maxLength:120,disabled:I||!!P,onChange:A=>W({title:A.target.value})})]}),(0,E.jsxs)("div",{className:"kanban-form-row",children:[(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(ht,{htmlFor:`${f}-label`,children:d("fieldLabel")}),(0,E.jsxs)(Zr,{disabled:I||!!P,value:C.label||"__none__",onValueChange:A=>W({label:A==="__none__"?"":A}),children:[(0,E.jsx)(Qo,{id:`${f}-label`,children:(0,E.jsx)(Jr,{placeholder:d("noLabel")})}),(0,E.jsxs)(er,{children:[(0,E.jsx)(pa,{value:"__none__",children:d("noLabel")}),o.map(A=>(0,E.jsx)(pa,{value:A.name,children:A.name},A.name))]})]})]}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(ht,{htmlFor:`${f}-priority`,children:d("fieldPriority")}),(0,E.jsxs)(Zr,{disabled:I||!!P,value:C.priority||"__none__",onValueChange:A=>W({priority:A==="__none__"?"":A}),children:[(0,E.jsx)(Qo,{id:`${f}-priority`,children:(0,E.jsx)(Jr,{placeholder:d("noPriority")})}),(0,E.jsxs)(er,{children:[(0,E.jsx)(pa,{value:"__none__",children:d("noPriority")}),sl.map(A=>{let ee=Kt[A];return(0,E.jsx)(pa,{value:A,children:(0,E.jsxs)("span",{className:"kanban-inline-priority",children:[(0,E.jsx)("span",{className:"kanban-priority-dot",style:{background:ee.color}}),ee.label]})},A)})]})]})]})]}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(ht,{htmlFor:`${f}-due-date`,children:d("fieldDueDate")}),(0,E.jsxs)("div",{className:"kanban-due-date-controls",children:[(0,E.jsx)(aa,{ref:m,id:`${f}-due-date`,type:"date",min:"0001-01-01",max:"9999-12-31",value:C.dueDate,disabled:I||!!P,onChange:A=>W({dueDate:A.target.value})}),(0,E.jsxs)("div",{className:"kanban-date-shortcuts",children:[[["today",0],["tomorrow",1],["nextWeek",7]].map(([A,ee])=>(0,E.jsx)(me,{type:"button",variant:"ghost",size:"sm",disabled:I||!!P,onClick:()=>W({dueDate:Io(new Date,ee)}),children:d(A)},A)),(0,E.jsx)(me,{type:"button",variant:"ghost",size:"sm",disabled:I||!!P||!C.dueDate,onClick:()=>W({dueDate:""}),children:d("clearDate")})]})]})]}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsxs)("div",{className:"kanban-field-label",children:[(0,E.jsx)(ht,{id:`${f}-note-label`,htmlFor:g?`${f}-note`:void 0,children:d("fieldNote")}),(0,E.jsxs)(me,{variant:"ghost",size:"sm",disabled:I||!!P,"aria-controls":`${f}-description`,onClick:()=>{v(!g),g||requestAnimationFrame(()=>h.current?.focus())},children:[g?(0,E.jsx)(ft,{}):(0,E.jsx)(yr,{}),d(g?"finishEditingNote":"editNote")]})]}),(0,E.jsx)("div",{id:`${f}-description`,children:g?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ll,{ref:h,id:`${f}-note`,className:"kanban-markdown-source",value:C.note,placeholder:d("notePlaceholder"),rows:12,maxLength:2e3,disabled:I||!!P,onChange:A=>W({note:A.target.value})}),(0,E.jsxs)("p",{className:"kanban-note-hint",children:[d("markdownEditHint")," ",(0,E.jsxs)("span",{className:"kanban-tabular",children:[C.note.length,"/2000"]})]})]}):(0,E.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${f}-note-label`,children:C.note.trim()?(0,E.jsx)(fm.MarkdownText,{text:C.note,labels:{code:{copyLabel:d("copyCode"),copiedLabel:d("copiedCode")},footnotes:d("footnotes")}}):(0,E.jsx)("p",{className:"kanban-muted-small",children:d("emptyNote")})})})]}),a&&(0,E.jsxs)("div",{className:"kanban-comments-box",children:[(0,E.jsxs)(ht,{htmlFor:`${f}-comment`,children:[d("commentsTitle")," ",(0,E.jsxs)("span",{className:"kanban-tabular",children:["(",r.length,")"]})]}),(0,E.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:r.length===0?(0,E.jsx)("p",{className:"kanban-muted-small",children:d("commentEmpty")}):(0,E.jsx)("ol",{className:"kanban-comment-list",children:r.map(A=>{let ee=A.source==="agent";return(0,E.jsxs)("li",{className:"kanban-comment-item",children:[(0,E.jsxs)("div",{className:"kanban-comment-meta",children:[(0,E.jsx)("span",{className:`kanban-activity-actor ${ee?"is-agent":"is-human"}`,children:d(ee?"actorAgent":"actorHuman")}),(0,E.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:A.createdAt,children:Qr(A.createdAt)})]}),(0,E.jsx)("p",{className:"kanban-comment-content",children:A.content})]},A.id)})})}),(0,E.jsxs)("div",{className:"kanban-comment-composer",children:[(0,E.jsx)(ll,{id:`${f}-comment`,value:w,placeholder:d("commentPlaceholder"),rows:3,maxLength:2e3,disabled:I||!!P,onChange:A=>L(A.target.value),onKeyDown:A=>{(A.metaKey||A.ctrlKey)&&A.key==="Enter"&&(A.preventDefault(),se())}}),(0,E.jsxs)(me,{type:"button",variant:"outline",disabled:I||!!P||!w.trim(),onClick:()=>{se()},children:[(0,E.jsx)(kr,{className:"kanban-icon"}),d("sendComment")]})]})]}),a&&(0,E.jsxs)("div",{className:"kanban-activity-box",children:[(0,E.jsx)(ht,{className:"kanban-muted-small",children:d("activityTitle")}),(0,E.jsx)("div",{className:"kanban-activity-scroll",children:(0,E.jsx)(cm,{activities:n})})]})]}),(0,E.jsx)(ao,{children:P?(0,E.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,E.jsx)("p",{role:"alert",children:d(P==="discard"?"discardChangesDesc":P==="delete"?"deleteCardDesc":"discardCommentDesc")}),(0,E.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,E.jsx)(me,{ref:D,variant:"outline",disabled:I,onClick:()=>N(null),children:d("cancel")}),(0,E.jsx)(me,{variant:"destructive",disabled:I,onClick:async()=>{if(P==="discard"){l(!1);return}if(P==="delete"){a&&u&&await q(()=>u(a))&&l(!1);return}await q(()=>c(C,P))&&l(!1)},children:d(P==="discard"?"discardChanges":P==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,E.jsxs)(E.Fragment,{children:[a&&u&&(0,E.jsxs)(me,{variant:"ghost",className:"kanban-dialog-delete",disabled:I,onClick:()=>N("delete"),children:[(0,E.jsx)(Mt,{className:"kanban-icon"}),d("delete")]}),(0,E.jsxs)(xo,{children:[(0,E.jsx)(Co,{asChild:!0,children:(0,E.jsxs)(me,{variant:"outline",disabled:I||!C.title.trim()&&!C.note.trim(),children:[(0,E.jsx)(na,{className:"kanban-icon"}),d("chatWithAgent")]})}),(0,E.jsxs)(Aa,{align:"end",children:[(0,E.jsx)(yt,{onClick:()=>{K("current")},children:d("chatCurrentSession")}),(0,E.jsx)(yt,{onClick:()=>{K("new")},children:d("chatNewSession")})]})]}),(0,E.jsx)(me,{disabled:I||!C.title.trim(),onClick:async()=>{m.current?.reportValidity()&&await q(()=>s(C))&&(U.current=C,w.trim()||l(!1))},children:d("save")})]})})]})})}var hm=require("react");var mm=require("react/jsx-runtime");function pb({variant:e,className:t}={}){return re("kanban-badge",`kanban-badge--${e??"default"}`,t)}function mi({className:e,variant:t,...a}){return(0,mm.jsx)("div",{className:pb({variant:t,className:e}),...a})}var wo=j(require("react"),1);var So=require("react/jsx-runtime"),hi=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-card",e),...t}));hi.displayName="Card";var mb=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-card-header",e),...t}));mb.displayName="CardHeader";var hb=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-ui-card-title",e),...t}));hb.displayName="CardTitle";var gb=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-card-description",e),...t}));gb.displayName="CardDescription";var gi=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-card-content",e),...t}));gi.displayName="CardContent";var xb=wo.forwardRef(({className:e,...t},a)=>(0,So.jsx)("div",{ref:a,className:re("kanban-card-footer",e),...t}));xb.displayName="CardFooter";var Oe=require("react/jsx-runtime");function xi({card:e,labels:t,completed:a=!1,today:o=Io()}){let r=Ne(),n=e.priority?Kt[e.priority]:null,l=lm(t,e.label),s=a?"completed":e.dueDate===o?"today":e.dueDate&&e.dueDate<o?"overdue":"future",i=e.dueDate?s==="today"?r("dueToday"):s==="overdue"?r("overdueDays").replace("{days}",String(fi(e.dueDate,o))):im(e.dueDate,o,r):"";return(0,Oe.jsx)(hi,{className:"kanban-card",children:(0,Oe.jsxs)(gi,{className:"kanban-sortable-card-content",children:[(e.label||n)&&(0,Oe.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Oe.jsxs)(mi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Oe.jsx)("span",{className:"kanban-label-dot",style:{background:l},"aria-hidden":"true"}),e.label]}),n&&(0,Oe.jsxs)(mi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Oe.jsx)("span",{className:"kanban-label-dot",style:{background:n.color},"aria-hidden":"true"}),n.label]})]}),(0,Oe.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Oe.jsx)("p",{className:"kanban-card-note",children:e.note}),(e.dueDate||e.comments.length>0)&&(0,Oe.jsxs)("div",{className:"kanban-card-status-row",children:[e.dueDate&&(0,Oe.jsxs)("span",{className:`kanban-card-due-date is-${s}`,title:`${r("fieldDueDate")}: ${e.dueDate}${a?` \xB7 ${r("completed")}`:""}`,children:[(0,Oe.jsx)(Xa,{"aria-hidden":"true"}),(0,Oe.jsx)("span",{children:i})]}),e.comments.length>0&&(0,Oe.jsxs)("span",{className:"kanban-card-comment-count",title:`${r("commentsTitle")}: ${e.comments.length}`,"aria-label":`${r("commentsTitle")}: ${e.comments.length}`,children:[(0,Oe.jsx)(na,{"aria-hidden":"true"}),(0,Oe.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})]})})}function gm({card:e,labels:t,completed:a,today:o=Io(),onOpen:r}){let n=Ne(),l=(0,hm.useId)(),{attributes:s,listeners:i,setNodeRef:u,transform:c,transition:d,isDragging:f}=bn({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Oe.jsxs)("div",{ref:u,style:{transform:bt.Transform.toString(c),transition:d},...s,...i,"aria-label":e.title,"aria-describedby":l,onKeyDown:p=>{p.key==="Enter"&&!f?(p.preventDefault(),r(e)):i?.onKeyDown?.(p)},onClick:p=>{p.currentTarget.focus(),r(e)},className:`kanban-sortable-card${f?" is-dragging":""}`,children:[(0,Oe.jsxs)("span",{id:l,className:"kanban-sr-only",children:[n("cardKeyboardHelp"),e.dueDate&&` ${n("fieldDueDate")}: ${e.dueDate}. ${a?n("completed"):e.dueDate===o?n("dueToday"):e.dueDate<o?n("overdueDays").replace("{days}",String(fi(e.dueDate,o))):""}`]}),(0,Oe.jsx)(xi,{card:e,labels:t,completed:a,today:o})]})}var Rt=require("react/jsx-runtime");function xm({column:e,cards:t,totalCount:a,filtered:o,labels:r,completed:n,today:l,onAddCard:s,onOpenCard:i}){let{setNodeRef:u,isOver:c}=mn({id:e.id,data:{type:"column"}}),{active:d,over:f}=Lr(),p=Ne(),x=d?.data.current?.type==="card"&&(c||f?.data.current?.columnId===e.id);return(0,Rt.jsxs)("div",{ref:u,className:`kanban-column${x?" is-over":""}`,children:[(0,Rt.jsxs)("div",{className:"kanban-column-header",children:[(0,Rt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,Rt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,Rt.jsxs)("div",{className:"kanban-column-cards",children:[(0,Rt.jsx)(Ln,{items:t.map(m=>m.id),strategy:Cn,children:t.map(m=>(0,Rt.jsx)(gm,{card:m,labels:r,completed:n,today:l,onOpen:i},m.id))}),t.length===0&&(0,Rt.jsx)("p",{className:"kanban-column-empty",children:p(o?"noMatchingCards":"emptyColumn")})]}),(0,Rt.jsx)("div",{className:"kanban-column-footer",children:(0,Rt.jsxs)(me,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>s(e),children:[(0,Rt.jsx)(Ka,{className:"kanban-icon"}),p("addCard")]})})]})}var dt=require("react");var te=require("react/jsx-runtime");function Cb({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:i,setNodeRef:u,transform:c,transition:d,isDragging:f}=bn({id:e.id,disabled:l}),p=Ne();return(0,te.jsxs)("div",{ref:u,style:{transform:bt.Transform.toString(c),transition:d},className:"kanban-editor-row","data-dragging":f||void 0,children:[(0,te.jsx)("button",{...s,...i,className:"kanban-drag-handle",disabled:l,"aria-label":`${p("dragSort")}: ${e.title}`,children:(0,te.jsx)(wr,{className:"kanban-icon"})}),(0,te.jsx)(aa,{className:"kanban-editor-name","aria-label":`${p("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:x=>a(x.target.value),onBlur:o,onKeyDown:x=>{x.key==="Enter"&&x.target.blur()}}),(0,te.jsx)(me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${p("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,te.jsx)(Mt,{className:"kanban-icon"})})]})}function Cm({open:e,error:t,columns:a,completedColumnId:o,onSetCompletedColumn:r,onOpenChange:n,onReorder:l,onRename:s,onDelete:i,onAdd:u}){let c=Ne(),d=(0,dt.useId)(),f=(0,dt.useId)(),[p,x]=(0,dt.useState)({}),[m,h]=(0,dt.useState)(""),[g,v]=(0,dt.useState)(!1),C=(0,dt.useRef)(!1),[b,w]=(0,dt.useState)(""),[L,I]=(0,dt.useState)(null),k=(0,dt.useRef)(null),T=un(Va(Mo,{activationConstraint:{distance:8}}),Va(ba,{coordinateGetter:vn}));(0,dt.useEffect)(()=>{e&&(x(Object.fromEntries(a.map(D=>[D.id,D.title]))),h(""),w(""),I(null))},[e]),(0,dt.useEffect)(()=>{L&&k.current?.focus()},[L]);let S=async D=>{if(C.current)return!1;C.current=!0,v(!0),w("");try{let U=await D();return U===!1&&w(c("actionRetry")),U!==!1}catch(U){return w(c("actionFailed")+String(U instanceof Error?U.message:U)),!1}finally{C.current=!1,v(!1)}},M=async()=>{let D=m.trim();D&&await S(()=>u(D))&&h("")},P=D=>{let U=(p[D]??"").trim(),V=a.find(G=>G.id===D);V&&U&&U!==V.title&&S(()=>s(D,U))},N=D=>{let{active:U,over:V}=D;V&&U.id!==V.id&&S(()=>l(String(U.id),String(V.id)))};return(0,te.jsx)(Vo,{open:e,onOpenChange:D=>{if(!C.current){if(!D&&L){I(null);return}n(D)}},children:(0,te.jsxs)(Qa,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,te.jsxs)(eo,{children:[(0,te.jsx)(oo,{children:c("columnEdit")}),(0,te.jsx)(qr,{children:c("columnEditDesc")})]}),(0,te.jsxs)(to,{className:"kanban-editor-body",children:[(t||b)&&(0,te.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||b}),(0,te.jsxs)("section",{className:"kanban-editor-section","aria-label":c("boardLists"),children:[(0,te.jsxs)("h3",{className:"kanban-editor-caption",children:[c("boardLists")," ",(0,te.jsx)("span",{children:a.length})]}),(0,te.jsx)(pn,{sensors:T,collisionDetection:lu,onDragEnd:N,children:(0,te.jsx)(Ln,{items:a.map(D=>D.id),strategy:Cn,children:(0,te.jsx)("div",{className:"kanban-editor-list",children:a.map(D=>(0,te.jsx)(Cb,{column:D,value:p[D.id]??D.title,onValueChange:U=>x(V=>({...V,[D.id]:U})),onCommit:()=>P(D.id),onDelete:()=>I(D),disabled:g||!!L,canDelete:a.length>1},D.id))})})})]}),(0,te.jsxs)("div",{className:"kanban-editor-setting",children:[(0,te.jsxs)("div",{className:"kanban-editor-setting-copy",children:[(0,te.jsx)(ht,{htmlFor:d,children:c("completedColumn")}),(0,te.jsx)("p",{id:`${d}-hint`,className:"kanban-muted-small",children:c("completedColumnHint")})]}),(0,te.jsxs)(Zr,{value:o||"__none__",disabled:g||!!L,onValueChange:D=>{S(()=>r(D==="__none__"?null:D))},children:[(0,te.jsx)(Qo,{id:d,"aria-describedby":`${d}-hint`,children:(0,te.jsx)(Jr,{})}),(0,te.jsxs)(er,{children:[(0,te.jsx)(pa,{value:"__none__",children:c("noCompletedColumn")}),a.map(D=>(0,te.jsx)(pa,{value:D.id,children:D.title},D.id))]})]})]})]}),(0,te.jsx)(ao,{children:L?(0,te.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,te.jsx)("p",{role:"alert",children:c("deleteColumnDesc").replace("{column}",L.title)}),(0,te.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,te.jsx)(me,{ref:k,variant:"outline",disabled:g,onClick:()=>I(null),children:c("cancel")}),(0,te.jsx)(me,{variant:"destructive",disabled:g,onClick:async()=>{await S(()=>i(L.id))&&I(null)},children:c("confirmDelete")})]})]}):(0,te.jsxs)("div",{className:"kanban-editor-add",children:[(0,te.jsx)(ht,{htmlFor:f,children:c("newColumnPlaceholder")}),(0,te.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,te.jsx)("span",{className:"kanban-editor-add-icon","aria-hidden":"true",children:(0,te.jsx)(Ka,{className:"kanban-icon"})}),(0,te.jsx)(aa,{id:f,value:m,disabled:g,placeholder:c("newColumnPlaceholder"),"aria-label":c("newColumnPlaceholder"),maxLength:40,onChange:D=>h(D.target.value),onKeyDown:D=>{D.key==="Enter"&&(D.preventDefault(),M())}}),(0,te.jsx)(me,{size:"sm",className:"kanban-editor-add-button",disabled:g||!m.trim(),onClick:()=>{M()},children:c("add")})]})]})})]})})}var ct=require("react");var he=require("react/jsx-runtime");function Lm({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=Ne(),i=(0,ct.useId)(),[u,c]=(0,ct.useState)({}),[d,f]=(0,ct.useState)(""),[p,x]=(0,ct.useState)("#38bdf8"),[m,h]=(0,ct.useState)(!1),g=(0,ct.useRef)(!1),[v,C]=(0,ct.useState)(""),[b,w]=(0,ct.useState)(null),L=(0,ct.useRef)(null);(0,ct.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(S=>[S.name,{name:S.name,color:S.color}]))),f(""),x("#38bdf8"),C(""),w(null))},[e]),(0,ct.useEffect)(()=>{b&&L.current?.focus()},[b]);let I=async S=>{if(g.current)return!1;g.current=!0,h(!0),C("");try{let M=await S();return M===!1&&C(s("actionRetry")),M!==!1}catch(M){return C(s("actionFailed")+String(M instanceof Error?M.message:M)),!1}finally{g.current=!1,h(!1)}},k=async()=>{let S=d.trim();S&&await I(()=>r(S,p))&&f("")},T=S=>{let M=u[S];if(!M)return;let P=a.find(D=>D.name===S),N=M.name.trim();P&&N&&(N!==S||M.color!==P.color)&&I(()=>n(S,N,M.color))};return(0,he.jsx)(Vo,{open:e,onOpenChange:S=>{if(!g.current){if(!S&&b){w(null);return}o(S)}},children:(0,he.jsxs)(Qa,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,he.jsxs)(eo,{children:[(0,he.jsx)(oo,{children:s("labelEdit")}),(0,he.jsx)(qr,{children:s("labelEditDesc")})]}),(0,he.jsxs)(to,{className:"kanban-editor-body",children:[(t||v)&&(0,he.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||v}),(0,he.jsxs)("section",{className:"kanban-editor-section","aria-label":s("boardLabels"),children:[(0,he.jsxs)("h3",{className:"kanban-editor-caption",children:[s("boardLabels")," ",(0,he.jsx)("span",{children:a.length})]}),(0,he.jsxs)("div",{className:"kanban-editor-list",children:[a.length===0&&(0,he.jsxs)("div",{className:"kanban-editor-empty",children:[(0,he.jsx)(Dr,{className:"kanban-icon","aria-hidden":"true"}),(0,he.jsx)("p",{children:s("noLabelsHint")})]}),a.map(S=>{let M=u[S.name]??{name:S.name,color:S.color};return(0,he.jsxs)("div",{className:"kanban-editor-row",children:[(0,he.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${S.name}`,title:`${s("labelColor")}: ${S.name}`,value:M.color,disabled:m||!!b,className:"kanban-color-input",onChange:P=>c(N=>({...N,[S.name]:{...M,color:P.target.value}})),onBlur:()=>T(S.name)}),(0,he.jsx)(aa,{className:"kanban-editor-name","aria-label":`${s("labelName")}: ${S.name}`,value:M.name,disabled:m||!!b,maxLength:20,onChange:P=>c(N=>({...N,[S.name]:{...M,name:P.target.value}})),onBlur:()=>T(S.name),onKeyDown:P=>{P.key==="Enter"&&P.target.blur()}}),(0,he.jsx)(me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${s("deleteLabel")}: ${S.name}`,disabled:m||!!b,onClick:()=>w(S.name),children:(0,he.jsx)(Mt,{className:"kanban-icon"})})]},S.name)})]})]})]}),(0,he.jsx)(ao,{children:b?(0,he.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,he.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",b)}),(0,he.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,he.jsx)(me,{ref:L,variant:"outline",disabled:m,onClick:()=>w(null),children:s("cancel")}),(0,he.jsx)(me,{variant:"destructive",disabled:m,onClick:async()=>{await I(()=>l(b))&&w(null)},children:s("confirmDelete")})]})]}):(0,he.jsxs)("div",{className:"kanban-editor-add",children:[(0,he.jsx)(ht,{htmlFor:i,children:s("newLabelPlaceholder")}),(0,he.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,he.jsx)("input",{type:"color","aria-label":s("newLabelColor"),title:s("newLabelColor"),value:p,disabled:m,className:"kanban-color-input",onChange:S=>x(S.target.value)}),(0,he.jsx)(aa,{id:i,value:d,disabled:m,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:S=>f(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.preventDefault(),k())}}),(0,he.jsx)(me,{size:"sm",className:"kanban-editor-add-button",disabled:m||!d.trim(),onClick:()=>{k()},children:s("add")})]})]})})]})})}var Om=j(require("react"),1);var ne=j(require("react"),1);var Ze=require("react/jsx-runtime"),Lb=Object.defineProperty,Ge=(e,t)=>Lb(e,"name",{value:t,configurable:!0}),[bi,CP]=We("Tooltip",[fa]),vi=fa(),bb="TooltipProvider",vb=700,Ci="tooltip.open",[Ib,Ii]=bi(bb),vm=Ge(e=>{let{__scopeTooltip:t,delayDuration:a=vb,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:n}=e,l=ne.useRef(!0),s=ne.useRef(!1),i=ne.useRef(0);return ne.useEffect(()=>{let u=i.current;return()=>window.clearTimeout(u)},[]),(0,Ze.jsx)(Ib,{scope:t,isOpenDelayedRef:l,delayDuration:a,onOpen:ne.useCallback(()=>{o<=0||(window.clearTimeout(i.current),l.current=!1)},[o]),onClose:ne.useCallback(()=>{o<=0||(window.clearTimeout(i.current),i.current=window.setTimeout(()=>l.current=!0,o))},[o]),isPointerInTransitRef:s,onPointerInTransitChange:ne.useCallback(u=>{s.current=u},[]),disableHoverableContent:r,children:n})},"TooltipProvider"),Li="Tooltip",[wb,tn]=bi(Li),Im=Ge(e=>{let{__scopeTooltip:t,children:a,open:o,defaultOpen:r,onOpenChange:n,disableHoverableContent:l,delayDuration:s}=e,i=Ii(Li,e.__scopeTooltip),u=vi(t),[c,d]=ne.useState(null),[f,p]=ne.useState(void 0),x=it(),m=ne.useRef(0),h=l??i.disableHoverableContent,g=s??i.delayDuration,v=ne.useRef(!1),[C,b]=Ot({prop:o,defaultProp:r??!1,onChange:Ge(S=>{S?(i.onOpen(),document.dispatchEvent(new CustomEvent(Ci))):i.onClose(),n?.(S)},"onChange"),caller:Li}),w=ne.useMemo(()=>C?v.current?"delayed-open":"instant-open":"closed",[C]),L=ne.useCallback(()=>{window.clearTimeout(m.current),m.current=0,v.current=!1,b(!0)},[b]),I=ne.useCallback(()=>{window.clearTimeout(m.current),m.current=0,b(!1)},[b]),k=ne.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{v.current=!0,b(!0),m.current=0},g)},[g,b]);return ne.useEffect(()=>()=>{m.current&&(window.clearTimeout(m.current),m.current=0)},[]),(0,Ze.jsx)(jo,{...u,children:(0,Ze.jsx)(wb,{scope:t,contentId:f??x,setContentId:p,open:C,stateAttribute:w,trigger:c,onTriggerChange:d,onTriggerEnter:ne.useCallback(()=>{i.isOpenDelayedRef.current?k():L()},[i.isOpenDelayedRef,k,L]),onTriggerLeave:ne.useCallback(()=>{h?I():(window.clearTimeout(m.current),m.current=0)},[I,h]),onOpen:L,onClose:I,disableHoverableContent:h,children:a})})},"Tooltip"),bm="TooltipTrigger",wm=ne.forwardRef(Ge(function(t,a){let{__scopeTooltip:o,"aria-describedby":r,...n}=t,l=tn(bm,o),s=Ii(bm,o),i=vi(o),u=ne.useRef(null),c=oe(a,u,l.onTriggerChange),d=ne.useRef(!1),f=ne.useRef(!1),p=ne.useCallback(()=>d.current=!1,[]);return ne.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),(0,Ze.jsx)($o,{asChild:!0,...i,children:(0,Ze.jsx)(le.button,{"aria-describedby":l.open?Em(r,l.contentId):r,"data-state":l.stateAttribute,...n,ref:c,onPointerMove:X(t.onPointerMove,x=>{x.pointerType!=="touch"&&!f.current&&!s.isPointerInTransitRef.current&&(l.onTriggerEnter(),f.current=!0)}),onPointerLeave:X(t.onPointerLeave,()=>{l.onTriggerLeave(),f.current=!1}),onPointerDown:X(t.onPointerDown,()=>{l.open&&l.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:X(t.onFocus,()=>{d.current||l.onOpen()}),onBlur:X(t.onBlur,l.onClose),onClick:X(t.onClick,l.onClose)})})},"TooltipTrigger")),Sm="TooltipPortal",[Sb,yb]=bi(Sm,{forceMount:void 0}),ym=Ge(e=>{let{__scopeTooltip:t,forceMount:a,children:o,container:r}=e,n=tn(Sm,t);return(0,Ze.jsx)(Sb,{scope:t,forceMount:a,children:(0,Ze.jsx)(Ft,{present:a||n.open,children:(0,Ze.jsx)(Sa,{asChild:!0,container:r,children:o})})})},"TooltipPortal"),en="TooltipContent",wi=ne.forwardRef(Ge(function(t,a){let o=yb(en,t.__scopeTooltip),{forceMount:r=o.forceMount,side:n="top",...l}=t,s=tn(en,t.__scopeTooltip);return(0,Ze.jsx)(Ft,{present:r||s.open,children:s.disableHoverableContent?(0,Ze.jsx)(Rm,{side:n,...l,ref:a}):(0,Ze.jsx)(Rb,{side:n,...l,ref:a})})},"TooltipContent")),Rb=ne.forwardRef(Ge(function(t,a){let o=tn(en,t.__scopeTooltip),r=Ii(en,t.__scopeTooltip),n=ne.useRef(null),l=oe(a,n),[s,i]=ne.useState(null),{trigger:u,onClose:c}=o,d=n.current,{onPointerInTransitChange:f}=r,p=ne.useCallback(()=>{i(null),f(!1)},[f]),x=ne.useCallback((m,h)=>{let g=m.currentTarget,v={x:m.clientX,y:m.clientY},C=km(v,g.getBoundingClientRect()),b=Pm(v,C),w=Dm(h.getBoundingClientRect()),L=Tm([...b,...w]);i(L),f(!0)},[f]);return ne.useEffect(()=>()=>p(),[p]),ne.useEffect(()=>{if(u&&d){let m=Ge(g=>x(g,d),"handleTriggerLeave"),h=Ge(g=>x(g,u),"handleContentLeave");return u.addEventListener("pointerleave",m),d.addEventListener("pointerleave",h),()=>{u.removeEventListener("pointerleave",m),d.removeEventListener("pointerleave",h)}}},[u,d,x,p]),ne.useEffect(()=>{if(s){let m=Ge(h=>{let g=h.target,v={x:h.clientX,y:h.clientY},C=u?.contains(g)||d?.contains(g),b=!Mm(v,s);C?p():b&&(p(),c())},"handleTrackPointerGrace");return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[u,d,s,c,p]),(0,Ze.jsx)(Rm,{...t,ref:l})},"TooltipContentHoverable")),kb=Al("TooltipContent"),Rm=ne.forwardRef(Ge(function(t,a){let{__scopeTooltip:o,children:r,"aria-label":n,id:l,onEscapeKeyDown:s,onPointerDownOutside:i,...u}=t,c=tn(en,o),d=vi(o),{onClose:f}=c,[p,x]=ne.useState(null),m=oe(a,x);Fr(p),ne.useEffect(()=>(document.addEventListener(Ci,f),()=>document.removeEventListener(Ci,f)),[f]),ne.useEffect(()=>{if(c.trigger){let g=Ge(v=>{v.target instanceof Node&&v.target.contains(c.trigger)&&f()},"handleScroll");return window.addEventListener("scroll",g,{capture:!0}),()=>window.removeEventListener("scroll",g,{capture:!0})}},[c.trigger,f]);let{setContentId:h}=c;return ue(()=>(h(l),()=>{h(void 0)}),[l,h]),(0,Ze.jsx)(wa,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:g=>g.preventDefault(),onDismiss:f,children:(0,Ze.jsxs)(Yo,{"data-state":c.stateAttribute,role:n?void 0:"tooltip",id:n?void 0:c.contentId,...d,...u,ref:m,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,Ze.jsx)(kb,{children:r}),n?(0,Ze.jsx)(Bp,{id:c.contentId,role:"tooltip",children:n}):null]})})},"TooltipContentImpl"));function km(e,t){let a=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),n=Math.abs(t.left-e.x);switch(Math.min(a,o,r,n)){case n:return"left";case r:return"right";case a:return"top";case o:return"bottom";default:throw new Error("unreachable")}}Ge(km,"getExitSideFromRect");function Pm(e,t,a=5){let o=[];switch(t){case"top":o.push({x:e.x-a,y:e.y+a},{x:e.x+a,y:e.y+a});break;case"bottom":o.push({x:e.x-a,y:e.y-a},{x:e.x+a,y:e.y-a});break;case"left":o.push({x:e.x+a,y:e.y-a},{x:e.x+a,y:e.y+a});break;case"right":o.push({x:e.x-a,y:e.y-a},{x:e.x-a,y:e.y+a});break}return o}Ge(Pm,"getPaddedExitPoints");function Dm(e){let{top:t,right:a,bottom:o,left:r}=e;return[{x:r,y:t},{x:a,y:t},{x:a,y:o},{x:r,y:o}]}Ge(Dm,"getPointsFromRect");function Mm(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}Ge(Mm,"isPointInPolygon");function Tm(e){let t=e.slice();return t.sort((a,o)=>a.x<o.x?-1:a.x>o.x?1:a.y<o.y?-1:a.y>o.y?1:0),Am(t)}Ge(Tm,"getHull");function Am(e){if(e.length<=1)return e.slice();let t=[];for(let o=0;o<e.length;o++){let r=e[o];for(;t.length>=2;){let n=t[t.length-1],l=t[t.length-2];if((n.x-l.x)*(r.y-l.y)>=(n.y-l.y)*(r.x-l.x))t.pop();else break}t.push(r)}t.pop();let a=[];for(let o=e.length-1;o>=0;o--){let r=e[o];for(;a.length>=2;){let n=a[a.length-1],l=a[a.length-2];if((n.x-l.x)*(r.y-l.y)>=(n.y-l.y)*(r.x-l.x))a.pop();else break}a.push(r)}return a.pop(),t.length===1&&a.length===1&&t[0].x===a[0].x&&t[0].y===a[0].y?t:t.concat(a)}Ge(Am,"getHullPresorted");function Em(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}Ge(Em,"concatAriaDescribedby");var Si=require("react/jsx-runtime"),Fm=vm,Bm=Im,Nm=wm,yi=Om.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Si.jsx)(ym,{children:(0,Si.jsx)(wi,{ref:o,sideOffset:t,className:re("kanban-portal kanban-tooltip-content",e),...a})}));yi.displayName=wi.displayName;function dl(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Ri=new Map,ki=0,cl=new Set;function _m(e,t){Ri.set(e,t),ki++;for(let a of cl)a()}function Hm(e){let t=Ri.get(e);if(t==null)return null;Ri.delete(e),ki++;for(let a of cl)a();return t}function Um(e){return cl.add(e),()=>{cl.delete(e)}}function qm(){return ki}function Wm(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(ua("fieldId")+": "+t),a&&n.push(a),r&&n.push(ua("fieldLabel")+": "+r),e.dueDate&&n.push(ua("fieldDueDate")+": "+e.dueDate),e.completed!==void 0&&n.push(ua("completionStatus")+": "+ua(e.completed?"completed":"incomplete")),o&&n.push(o),n.join(`

`)}var B=require("react/jsx-runtime");function zm(e,t,a,o,r){let n=e.find(h=>h.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(h=>h.columnId===n.columnId).findIndex(h=>h.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(h=>h.id!==t),i=s.filter(h=>h.columnId===a),u=o?i.findIndex(h=>h.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],p=i[i.length-1],x=f?d.indexOf(f):p?d.indexOf(p)+1:d.length;return d.splice(x,0,{...n,columnId:a}),{cards:d.every((h,g)=>h.id===e[g]?.id&&h.columnId===e[g]?.columnId)?e:d,toIndex:c}}function Vm(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(y=>y.items):[],l=Array.isArray(n)?n.find(y=>Array.isArray(y.sessionIds)&&y.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=Ne(),[u,c]=(0,Ce.useState)(null),[d,f]=(0,Ce.useState)(""),[p,x]=(0,Ce.useState)([]),[m,h]=(0,Ce.useState)(null),[g,v]=(0,Ce.useState)(null),[C,b]=(0,Ce.useState)(!1),[w,L]=(0,Ce.useState)(!1),[I,k]=(0,Ce.useState)(!1),T=um(),[S,M]=(0,Ce.useState)(""),[P,N]=(0,Ce.useState)(""),[D,U]=(0,Ce.useState)(null),V=(0,Ce.useRef)(null),G=(0,Ce.useRef)(u),q=(0,Ce.useRef)(null),K=(0,Ce.useRef)(s),W=(0,Ce.useRef)(0),se=(0,Ce.useRef)(0);G.current=u,K.current=s;let[A,ee]=(0,Ce.useState)(null),Ue=un(Va(pr,{activationConstraint:{distance:8}}),Va(mr,{activationConstraint:{delay:250,tolerance:5}}),Va(ba,{coordinateGetter:vn})),xe=(0,Ce.useCallback)((y,H,z)=>{K.current!==H||z<se.current||(se.current=z,y&&y.board&&(c({...y.board,completedColumnId:y.board.completedColumnId??null,cards:Array.isArray(y.board.cards)?y.board.cards.map(Z=>({...Z,dueDate:Z.dueDate??null,comments:Array.isArray(Z.comments)?Z.comments:[]})):[],activities:Array.isArray(y.board.activities)?y.board.activities:[]}),f("")),Array.isArray(y&&y.warnings)&&y.warnings.length>0&&x(Z=>[...Z,...y.warnings]))},[]),O=(0,Ce.useCallback)(async(y,H={})=>{let z=++W.current;f("");try{let Z=await dl(y,H,s);return xe(Z,s,z),!0}catch(Z){return f(i("actionFailed")+String(Z&&Z.message||Z)),!1}},[s,xe,i]),Le=(0,Ce.useCallback)(()=>{let y=++W.current;k(!0),dl("get",{},s).then(H=>xe(H,s,y)).catch(H=>f(i("loadFailed")+String(H&&H.message||H))).finally(()=>k(!1))},[s,xe,i]);(0,Ce.useEffect)(()=>{let y=!0,H=++W.current;return c(null),U(null),N(""),M(""),v(null),h(null),f(""),x([]),dl("get",{},s).then(z=>{y&&xe(z,s,H)}).catch(z=>{y&&f(i("loadFailed")+String(z&&z.message||z))}),()=>{y=!1}},[s,xe,i]),(0,Ce.useEffect)(()=>{u&&U(y=>y&&!u.labels.some(H=>H.name===y)?null:y)},[u?.labels]),(0,Ce.useLayoutEffect)(()=>{let y=Ie=>{let de=Ie;for(;de;){let ke=getComputedStyle(de).overflowY;if(ke==="auto"||ke==="scroll")return de;de=de.parentElement}return null},H=()=>{let Ie=V.current;if(!Ie)return;let de=y(Ie.parentElement),ke=Ie.getBoundingClientRect().top+(de?.scrollTop??0),Je=window.innerHeight;if(de){let Nt=de.querySelector("[data-composer-seat]"),kt=Nt?Nt.getBoundingClientRect().top:0;Nt&&Nt.offsetHeight>0&&kt>ke?Je=kt:Je=de.getBoundingClientRect().bottom}ee(Math.max(0,Math.floor(Je-ke)))};H();let z=y(V.current?.parentElement??null),Z=new ResizeObserver(H);if(Z.observe(document.documentElement),z){Z.observe(z);let Ie=z.querySelector("[data-composer-seat]");Ie&&Z.observe(Ie)}return window.addEventListener("resize",H),()=>{Z.disconnect(),window.removeEventListener("resize",H)}},[u!==null]);let ve=(0,Ce.useCallback)(y=>{let H=su(y),z=H.length>0?H:kl(y),Z=gr(z,"id");if(Z==null)return[];if(new Set((u?.columns??[]).map(de=>de.id)).has(String(Z))){let de=(u?.cards??[]).filter(ke=>ke.columnId===Z).map(ke=>ke.id);if(de.length>0){let ke=dn({...y,droppableContainers:y.droppableContainers.filter(Je=>Je.id!==Z&&de.includes(String(Je.id)))});ke.length>0&&(Z=ke[0].id)}}return[{id:Z}]},[u]),ge=y=>{let H=G.current;if(!H||H.cards===y)return;let z={...H,cards:y};G.current=z,c(z)},_=y=>{if(y.active.data.current?.type!=="card")return;let H=G.current,z=H?.cards.find(Z=>Z.id===y.active.id);!z||!H||(q.current=H.cards,h(z))},be=({active:y,over:H})=>{let z=G.current;if(!H||!z||y.data.current?.type!=="card")return;let Z=String(y.id),Ie=z.cards.find(kt=>kt.id===Z),de=z.cards.find(kt=>kt.id===H.id),ke=de?.columnId??(H.data.current?.type==="column"?String(H.id):null);if(!Ie||!ke||Ie.columnId===ke)return;let Je=y.rect.current.translated,Nt=!!(de&&Je&&Je.top+Je.height/2>H.rect.top+H.rect.height/2);ge(zm(z.cards,Z,ke,de?.id??null,Nt).cards)},ie=({active:y,over:H})=>{let z=G.current,Z=q.current;if(q.current=null,!H||!z||y.data.current?.type!=="card"){Z&&ge(Z),h(null);return}let Ie=String(y.id),de=z.cards.find(gt=>gt.id===H.id),ke=de?.columnId??(H.data.current?.type==="column"?String(H.id):null);if(!ke){Z&&ge(Z),h(null);return}let Je=y.rect.current.translated,Nt=!!(de&&Je&&Je.top+Je.height/2>H.rect.top+H.rect.height/2),kt=zm(z.cards,Ie,ke,de?.id??null,Nt);ge(kt.cards),h(null),(!Z||kt.cards.some((gt,oa)=>gt.id!==Z[oa]?.id||gt.columnId!==Z[oa]?.columnId))&&O("moveCard",{id:Ie,columnId:ke,toIndex:kt.toIndex}).then(gt=>{gt||Le()})},Y=()=>{q.current&&ge(q.current),q.current=null,h(null)},J=y=>{if(!g)return Promise.resolve(!1);if(g.card){let H=G.current?.cards.find(Z=>Z.id===g.card.id)??g.card,z={id:H.id};return y.title!==H.title&&(z.title=y.title),y.note!==H.note&&(z.note=y.note),y.label!==(H.label??"")&&(z.label=y.label),y.priority!==(H.priority??"")&&(z.priority=y.priority),y.dueDate!==(H.dueDate??"")&&(z.dueDate=y.dueDate||null),O("updateCard",z)}return O("addCard",{columnId:g.columnId,title:y.title,note:y.note,label:y.label||void 0,priority:y.priority||void 0,dueDate:y.dueDate||null})},ae=(0,Ce.useCallback)(async(y,H)=>{let z=G.current,Z=z?.cards.find(de=>de.id===y.id),Ie=Wm({...y,completed:Z&&z?.completedColumnId?Z.columnId===z.completedColumnId:void 0});if(!Ie)return!1;f("");try{return H==="current"?o?(await o.setDraft(Ie),!0):!1:r?.openWorkspace?(await r.openWorkspace(s,de=>_m(de,Ie)),!0):!1}catch(de){return f(i("actionFailed")+String(de&&de.message||de)),!1}},[o,r,s,i]);return u?(0,B.jsxs)("div",{ref:V,className:"kanban-root kanban-view",style:A!=null?{height:A}:void 0,children:[d&&!g&&!C&&!w&&(0,B.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(P||D!==null||S)&&(0,B.jsxs)("div",{className:"kanban-filter-summary","aria-label":i("clearFilter"),children:[S&&(0,B.jsxs)(me,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${i(S==="today"?"dueToday":"overdue")}`,onClick:()=>M(""),children:[i(S==="today"?"dueToday":"overdue"),(0,B.jsx)(la,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),P&&(0,B.jsxs)(me,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${Kt[P].label}`,onClick:()=>N(""),children:[i("fieldPriority"),": ",Kt[P].label,(0,B.jsx)(la,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),D!==null&&(0,B.jsxs)(me,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${D||i("noLabel")}`,onClick:()=>U(null),children:[i("fieldLabel"),": ",D||i("noLabel"),(0,B.jsx)(la,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),p.length>0&&(0,B.jsxs)("div",{className:"kanban-warning",children:[(0,B.jsxs)("div",{className:"kanban-warning-body",children:[(0,B.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),p.map((y,H)=>(0,B.jsx)("p",{className:"kanban-warning-item",children:y},H))]}),(0,B.jsx)(me,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>x([]),children:i("dismiss")})]}),(0,B.jsxs)(pn,{sensors:Ue,collisionDetection:ve,onDragStart:_,onDragOver:be,onDragEnd:ie,onDragCancel:Y,children:[(0,B.jsxs)("div",{className:"kanban-content",children:[(0,B.jsxs)("div",{className:"kanban-toolbar",children:[(0,B.jsx)(me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:I,onClick:Le,children:(0,B.jsx)(Rr,{className:I?"kanban-animate-spin":void 0})}),(0,B.jsxs)(xo,{children:[(0,B.jsx)(Co,{asChild:!0,children:(0,B.jsx)(me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,B.jsx)(Pr,{className:"kanban-icon"})})}),(0,B.jsxs)(Aa,{align:"start",children:[(0,B.jsxs)(yt,{onClick:()=>{f(""),b(!0)},children:[(0,B.jsx)(Sr,{className:"kanban-icon"}),i("columnEdit")]}),(0,B.jsxs)(yt,{onClick:()=>{f(""),L(!0)},children:[(0,B.jsx)(Eo,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,B.jsxs)(xo,{children:[(0,B.jsx)(Co,{asChild:!0,children:(0,B.jsx)(me,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${P?" is-active":""}`,title:i("priorityFilter"),"aria-label":i("priorityFilter"),"aria-pressed":!!P,children:(0,B.jsx)(Ia,{className:"kanban-icon"})})}),(0,B.jsxs)(Aa,{align:"start",children:[(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":!P,onSelect:()=>N(""),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:!P&&(0,B.jsx)(ft,{className:"kanban-icon"})}),i("all")]}),sl.map(y=>(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":P===y,onSelect:()=>N(y),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:P===y&&(0,B.jsx)(ft,{className:"kanban-icon"})}),(0,B.jsx)("span",{className:"kanban-priority-dot",style:{background:Kt[y].color}}),Kt[y].label]},y))]})]}),(0,B.jsxs)(xo,{children:[(0,B.jsx)(Co,{asChild:!0,children:(0,B.jsx)(me,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${D!==null?" is-active":""}`,title:D===null?i("labelFilter"):`${i("labelFilter")}: ${D||i("noLabel")}`,"aria-label":i("labelFilter"),"aria-pressed":D!==null,children:(0,B.jsx)(Eo,{className:"kanban-icon"})})}),(0,B.jsxs)(Aa,{align:"start",children:[(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":D===null,onSelect:()=>U(null),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:D===null&&(0,B.jsx)(ft,{className:"kanban-icon"})}),i("all")]}),(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":D==="",onSelect:()=>U(""),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:D===""&&(0,B.jsx)(ft,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(y=>(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":D===y.name,onSelect:()=>U(y.name),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:D===y.name&&(0,B.jsx)(ft,{className:"kanban-icon"})}),(0,B.jsx)("span",{className:"kanban-label-dot",style:{background:y.color}}),y.name]},y.name))]})]}),(0,B.jsxs)(xo,{children:[(0,B.jsx)(Co,{asChild:!0,children:(0,B.jsx)(me,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${S?" is-active":""}`,title:i("dueDateFilter"),"aria-label":i("dueDateFilter"),"aria-pressed":!!S,children:(0,B.jsx)(Xa,{className:"kanban-icon"})})}),(0,B.jsx)(Aa,{align:"start",children:["","today","overdue"].map(y=>(0,B.jsxs)(yt,{role:"menuitemradio","aria-checked":S===y,onSelect:()=>M(y),children:[(0,B.jsx)("span",{className:"kanban-filter-check",children:S===y&&(0,B.jsx)(ft,{className:"kanban-icon"})}),i(y==="today"?"dueToday":y==="overdue"?"overdue":"all")]},y))})]}),(0,B.jsx)("div",{className:"kanban-toolbar-divider",role:"separator"}),(0,B.jsx)(Fm,{delayDuration:300,children:(0,B.jsxs)(Bm,{children:[(0,B.jsx)(Nm,{asChild:!0,children:(0,B.jsx)(me,{asChild:!0,variant:"ghost",size:"icon",className:"kanban-toolbar-button",children:(0,B.jsx)("a",{href:"https://github.com/alpacachen/dsh-kanban/issues/new/choose",target:"_blank",rel:"noopener noreferrer","aria-label":i("feedback"),children:(0,B.jsx)(na,{className:"kanban-icon"})})})}),(0,B.jsx)(yi,{side:"right",children:i("feedback")})]})})]}),(0,B.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(y=>{let H=u.cards.filter(z=>z.columnId===y.id&&(!P||z.priority===P)&&(D===null||(z.label??"")===D)&&(z.id===m?.id||sm(z,S,u.completedColumnId,T)));return(0,B.jsx)(xm,{column:y,cards:H,totalCount:u.cards.filter(z=>z.columnId===y.id).length,filtered:!!(P||S)||D!==null,completed:y.id===u.completedColumnId,today:T,labels:u.labels,onAddCard:z=>{f(""),v({card:null,columnId:z.id})},onOpenCard:z=>{f(""),v({card:z,columnId:z.columnId})}},y.id)})})]}),(0,B.jsx)(Su,{children:m?(0,B.jsx)("div",{className:"kanban-drag-preview",children:(0,B.jsx)(xi,{card:m,labels:u.labels,completed:m.columnId===u.completedColumnId,today:T})}):null})]}),(0,B.jsx)(pm,{error:d,open:g!==null,card:g?.card??null,labels:u.labels,comments:g?.card?u.cards.find(y=>y.id===g.card.id)?.comments??[]:[],activities:g?.card?u.activities.filter(y=>y.cardId===g.card.id):[],onOpenChange:y=>{y||v(null)},onSave:J,onAddComment:(y,H)=>O("addComment",{id:y,content:H}),onDelete:y=>O("deleteCard",{id:y.id}),onChatWithAgent:ae}),(0,B.jsx)(Cm,{error:d,open:C,columns:u.columns,completedColumnId:u.completedColumnId,onSetCompletedColumn:y=>O("setCompletedColumn",{columnId:y}),onOpenChange:b,onReorder:(y,H)=>{let z=u.columns.findIndex(Z=>Z.id===H);return z>=0?O("moveColumn",{id:y,toIndex:z}):Promise.resolve(!1)},onRename:(y,H)=>O("renameColumn",{id:y,title:H}),onDelete:y=>O("deleteColumn",{id:y}),onAdd:y=>O("addColumn",{title:y})}),(0,B.jsx)(Lm,{error:d,open:w,labels:u.labels,onOpenChange:L,onAdd:(y,H)=>O("addLabel",{name:y,color:H}),onUpdate:(y,H,z)=>O("updateLabel",{name:y,newName:H,color:z}),onDelete:y=>O("deleteLabel",{name:y})})]}):(0,B.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,B.jsx)("p",{className:"kanban-error",children:d}):(0,B.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var fl=require("react");function Gm({sessionId:e,inputActions:t}){let a=(0,fl.useSyncExternalStore)(Um,qm);return(0,fl.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Hm(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Xm={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){Mc(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>ua("boardTab")},o=>(0,Pi.createElement)(Vm,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,Pi.createElement)(Gm,o)))}};var Km="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Km+"]")){let e=document.createElement("style");e.setAttribute(Km,""),e.textContent=_i,document.head.appendChild(e)}var Db=Xm;
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