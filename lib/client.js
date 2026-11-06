window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Km=Object.create;var on=Object.defineProperty;var Xm=Object.getOwnPropertyDescriptor;var $m=Object.getOwnPropertyNames;var jm=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty;var Ei=e=>{throw TypeError(e)};var Zm=(e,t)=>{for(var a in t)on(e,a,{get:t[a],enumerable:!0})},Oi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of $m(t))!Ym.call(e,r)&&r!==a&&on(e,r,{get:()=>t[r],enumerable:!(o=Xm(t,r))||o.enumerable});return e};var J=(e,t,a)=>(a=e!=null?Km(jm(e)):{},Oi(t||!e||!e.__esModule?on(a,"default",{value:e,enumerable:!0}):a,e)),Jm=e=>Oi(on({},"__esModule",{value:!0}),e);var Fi=(e,t,a)=>t.has(e)||Ei("Cannot "+a);var Ye=(e,t,a)=>(Fi(e,t,"read from private field"),a?a.call(e):t.get(e)),Bi=(e,t,a)=>t.has(e)?Ei("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),vs=(e,t,a,o)=>(Fi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var mb={};Zm(mb,{default:()=>pb});module.exports=Jm(mb);var Ni=`/*
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
.kanban-panel {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  padding: 28px clamp(24px, 4vw, 48px) 48px;
}

/* Match DSH entry pages while keeping window chrome outside the content. */
html[data-platform="darwin"] .kanban-panel {
  padding-top: calc(28px + var(--dsh-frame-top-clearance, 0px));
}

.kanban-workspace-trigger {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 8px;
  margin: -4px -6px;
  padding: 4px 6px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.kanban-workspace-trigger:hover:not(:disabled),
.kanban-workspace-trigger[data-state="open"] {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-workspace-trigger:disabled {
  cursor: default;
}

.kanban-workspace-trigger svg {
  width: 18px;
  height: 18px;
  color: var(--dsw-alias-label-secondary);
}

.kanban-workspace-trigger span,
.kanban-workspace-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kanban-workspace-name {
  flex: 1;
}

.kanban-dropdown-content.kanban-workspace-menu {
  width: 280px;
  max-width: calc(100vw - 48px);
}

.kanban-panel-body {
  display: flex;
  min-width: 0;
  min-height: 0;
  flex: 1;
  flex-direction: column;
}

.kanban-panel-header {
  flex-shrink: 0;
  padding: 0 0 8px;
}

.kanban-panel-header h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.kanban-panel-empty {
  padding: 32px 0;
  color: var(--dsw-alias-label-secondary);
}

.kanban-panel-body > .kanban-view {
  height: auto;
  flex: 1;
  padding: 8px 0 0;
}

.kanban-loading {
  display: flex;
  height: 100%;
  min-height: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.kanban-view {
  display: flex;
  height: 100%;
  min-height: 0;
  min-width: 0;
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
  align-items: center;
  gap: 4px;
}

.kanban-toolbar-settings {
  margin-left: auto;
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
  /* Share the board width evenly; the minimum keeps a readable card column and
   * makes .kanban-board-scroll scroll horizontally only when they no longer fit. */
  flex: 1 1 0;
  min-width: 220px;
  min-height: 0;
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
  position: relative;
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
  color: var(--dsw-alias-label-secondary);
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
  text-decoration: none;
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
    min-width: 200px;
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

/* Host previews share z-index 1000 and mount after the drawer. */
.kanban-dialog-content.kanban-drawer-content {
  z-index: 1000;
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

/* Search and actions share one compact row, wrapping when the pane is narrow. */
.kanban-search-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  flex-shrink: 0;
}
.kanban-search-field {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1 1 240px;
  min-width: min(100%, 240px);
  max-width: 420px;
  padding-left: 10px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
}
.kanban-search-field > svg { width: 16px; height: 16px; color: var(--dsw-alias-label-tertiary); }
.kanban-search-field .kanban-input { min-width: 0; flex: 1; border: 0; background: transparent; }
.kanban-search-field input::-webkit-search-cancel-button { display: none; }
.kanban-search-field .kanban-button { width: 28px; height: 28px; margin-right: 3px; }
.kanban-search-match { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); overflow-wrap: anywhere; }

.kanban-images {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  border-radius: 8px;
}
.kanban-images.is-dragging { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 4px; }
.kanban-image-empty {
  padding: 18px 12px;
  border: 1px dashed var(--dsw-alias-border-l2);
  border-radius: 8px;
  color: var(--dsw-alias-label-secondary);
  text-align: center;
}
.kanban-image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
  gap: 10px;
}
.kanban-image-tile {
  display: flex;
  flex-direction: column;
  min-width: 0;
  align-items: stretch;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  overflow: hidden;
}
.kanban-image-tile > .kanban-button { align-self: flex-end; }
.kanban-image-preview {
  position: relative;
  height: 116px;
  background: var(--dsw-alias-bg-layer-2);
  overflow: hidden;
}
.kanban-image-preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
.kanban-image-open { display: block; width: 100%; height: 100%; border: 0; padding: 0; background: transparent; cursor: zoom-in; }
.kanban-image-open:disabled { cursor: default; }
.kanban-image-message {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}
.kanban-image-message > svg { width: 16px; height: 16px; }
.kanban-image-draft-info { display: flex; flex-direction: column; gap: 4px; padding: 6px 8px; overflow-wrap: anywhere; }
.kanban-image-filename { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: var(--dsw-font-xxs-12); }
.kanban-image-draft-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; }
@media (max-width: 600px) {
  .kanban-search-field { flex-basis: 100%; max-width: none; }
  .kanban-image-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;var Ls=require("react");var rn=require("react");var _i=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function qi(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:_i(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var Hi=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var Ui=e=>{let t=Hi(e);return t.charAt(0).toUpperCase()+t.slice(1)};var sr=require("react");var nr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var xa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ws(e){return e!=null}function Wi(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??xa.width,n=e.size??e.height??xa.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],d=t.includeDefaultClasses===!1?nr(...i):nr("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??xa["stroke-width"])*Number(e.size??e.width??xa.width)/Number(t.size??t.width??xa.width):t.strokeWidth??xa["stroke-width"];return["svg",{...Object.entries(xa).reduce((f,[p,h])=>(f[o(p)]=h,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&ws(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&ws(t.width)&&{[o("width")]:t.width},..."height"in t&&ws(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...d&&{[o("class")]:d},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,h,g]=f,m=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...h}:h;return g?[p,m,g]:[p,m]})]}function zi(e,t={}){return Wi(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var Vi=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var yo=require("react");var eg=(0,yo.createContext)({});var Gi=()=>(0,yo.useContext)(eg);var Ki=(0,sr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:d=[],icon:c={node:d,aliases:[],size:24},...u},f)=>{let{size:p=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:m=!1,color:C="currentColor",className:x=""}=Gi()??{},L=!!i||Vi(u),[b,S,I=[]]=zi(c,{color:e??C,width:a??t??p,height:o??t??p,strokeWidth:r??h,absoluteStrokeWidth:n??g,nonScalingStroke:l??m,className:nr(x,s),hasA11yProp:L,attributes:u});return(0,sr.createElement)(b,{ref:f,...S},[...I.map(([k,y])=>(0,sr.createElement)(k,y)),...Array.isArray(i)?i:[i]])});function ne(e,t=[],a=[]){let o=typeof e=="string"?qi(e,t,a):e,r=(0,rn.forwardRef)(({className:n,...l},s)=>(0,rn.createElement)(Ki,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=Ui(o.name)),r}var Xi={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Xi.node;var Ea=ne(Xi);var $i={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$i.node;var at=ne($i);var ji={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};ji.node;var La=ne(ji);var Yi={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Yi.node;var lr=ne(Yi);var Zi={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Zi.node;var Ca=ne(Zi);var Ji={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};Ji.node;var ir=ne(Ji);var Qi={name:"image-plus",size:24,node:[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]};Qi.node;var dr=ne(Qi);var ed={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};ed.node;var ur=ne(ed);var td={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};td.node;var cr=ne(td);var ad={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};ad.node;var aa=ne(ad);var od={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};od.node;var oa=ne(od);var rd={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};rd.node;var ba=ne(rd);var nd={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};nd.node;var fr=ne(nd);var sd={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};sd.node;var Oa=ne(sd);var ld={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};ld.node;var Ia=ne(ld);var id={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};id.node;var pr=ne(id);var dd={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};dd.node;var mr=ne(dd);var ud={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};ud.node;var gr=ne(ud);var cd={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};cd.node;var ko=ne(cd);var fd={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};fd.node;var hr=ne(fd);var pd={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};pd.node;var Dt=ne(pd);var md={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};md.node;var lt=ne(md);var hs=require("react");var be=require("react");var D=J(require("react")),Ua=require("react-dom");var Ee=require("react");function hd(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ee.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var xr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function nn(e){return"nodeType"in e}function ot(e){var t,a;return e?Fa(e)?e:nn(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function sn(e){let{Document:t}=ot(e);return e instanceof t}function Ro(e){return Fa(e)?!1:e instanceof ot(e).HTMLElement}function ys(e){return e instanceof ot(e).SVGElement}function Ba(e){return e?Fa(e)?e.document:nn(e)?sn(e)?e:Ro(e)||ys(e)?e.ownerDocument:document:document:document}var It=xr?Ee.useLayoutEffect:Ee.useEffect;function Lr(e){let t=(0,Ee.useRef)(e);return It(()=>{t.current=e}),(0,Ee.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function xd(){let e=(0,Ee.useRef)(null),t=(0,Ee.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Ee.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Po(e,t){t===void 0&&(t=[e]);let a=(0,Ee.useRef)(e);return It(()=>{a.current!==e&&(a.current=e)},t),a}function Do(e,t){let a=(0,Ee.useRef)();return(0,Ee.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Cr(e){let t=Lr(e),a=(0,Ee.useRef)(null),o=(0,Ee.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function br(e){let t=(0,Ee.useRef)();return(0,Ee.useEffect)(()=>{t.current=e},[e]),t.current}var Ss={};function Na(e,t){return(0,Ee.useMemo)(()=>{if(t)return t;let a=Ss[e]==null?0:Ss[e]+1;return Ss[e]=a,e+"-"+a},[e,t])}function Ld(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,d]of s){let c=n[i];c!=null&&(n[i]=c+e*d)}return n},{...t})}}var _a=Ld(1),qa=Ld(-1);function tg(e){return"clientX"in e&&"clientY"in e}function Mo(e){if(!e)return!1;let{KeyboardEvent:t}=ot(e.target);return t&&e instanceof t}function ag(e){if(!e)return!1;let{TouchEvent:t}=ot(e.target);return t&&e instanceof t}function Ir(e){if(ag(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return tg(e)?{x:e.clientX,y:e.clientY}:null}var bt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[bt.Translate.toString(e),bt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),gd="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Cd(e){return e.matches(gd)?e:e.querySelector(gd)}var Ha=J(require("react")),og={display:"none"};function bd(e){let{id:t,value:a}=e;return Ha.default.createElement("div",{id:t,style:og},a)}function Id(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ha.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function vd(){let[e,t]=(0,Ha.useState)("");return{announce:(0,Ha.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Fd=(0,D.createContext)(null);function rg(e){let t=(0,D.useContext)(Fd);(0,D.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function ng(){let[e]=(0,D.useState)(()=>new Set),t=(0,D.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,D.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var sg={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},lg={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ig(e){let{announcements:t=lg,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=sg}=e,{announce:n,announcement:l}=vd(),s=Na("DndLiveRegion"),[i,d]=(0,D.useState)(!1);if((0,D.useEffect)(()=>{d(!0)},[]),rg((0,D.useMemo)(()=>({onDragStart(u){let{active:f}=u;n(t.onDragStart({active:f}))},onDragMove(u){let{active:f,over:p}=u;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(u){let{active:f,over:p}=u;n(t.onDragOver({active:f,over:p}))},onDragEnd(u){let{active:f,over:p}=u;n(t.onDragEnd({active:f,over:p}))},onDragCancel(u){let{active:f,over:p}=u;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!i)return null;let c=D.default.createElement(D.default.Fragment,null,D.default.createElement(bd,{id:o,value:r.draggable}),D.default.createElement(Id,{id:s,announcement:l}));return a?(0,Ua.createPortal)(c,a):c}var Ue;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ue||(Ue={}));function dn(){}function Va(e,t){return(0,D.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function cn(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,D.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Ft=Object.freeze({x:0,y:0});function Es(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function dg(e,t){let a=Ir(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Os(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function ug(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Ds(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Pr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function wd(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Bd=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=wd(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let d=Es(wd(i),r);n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(Os)},fn=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ds(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let d=Ds(i),c=r.reduce((f,p,h)=>f+Es(d[h],p),0),u=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(Os)};function cg(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,d=e.width*e.height,c=l*s,u=c/(i+d-c);return Number(u.toFixed(4))}return 0}var Fs=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=cg(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(ug)};function fg(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Nd=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&fg(o,s)){let d=Ds(s).reduce((u,f)=>u+Es(o,f),0),c=Number((d/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(Os)};function pg(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function _d(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ft}function mg(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var gg=mg(1);function qd(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function hg(e,t,a){let o=qd(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),d=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,u=n?e.height/n:e.height;return{width:c,height:u,top:d,right:i+c,bottom:d+u,left:i}}var xg={ignoreTransform:!1};function Ga(e,t){t===void 0&&(t=xg);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:d,transformOrigin:c}=ot(e).getComputedStyle(e);d&&(a=hg(a,d,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function Sd(e){return Ga(e,{ignoreTransform:!0})}function Lg(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Cg(e,t){return t===void 0&&(t=ot(e).getComputedStyle(e)),t.position==="fixed"}function bg(e,t){t===void 0&&(t=ot(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Dr(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(sn(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Ro(r)||ys(r)||a.includes(r))return a;let n=ot(e).getComputedStyle(r);return r!==e&&bg(r,n)&&a.push(r),Cg(r,n)?a:o(r.parentNode)}return e?o(e):a}function Hd(e){let[t]=Dr(e,1);return t??null}function ks(e){return!xr||!e?null:Fa(e)?e:nn(e)?sn(e)||e===Ba(e).scrollingElement?window:Ro(e)?e:null:null}function Ud(e){return Fa(e)?e.scrollX:e.scrollLeft}function Wd(e){return Fa(e)?e.scrollY:e.scrollTop}function Ms(e){return{x:Ud(e),y:Wd(e)}}var Ve;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ve||(Ve={}));function zd(e){return!xr||!e?!1:e===document.scrollingElement}function Vd(e){let t={x:0,y:0},a=zd(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Ig={x:.2,y:.2};function vg(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Ig);let{isTop:d,isBottom:c,isLeft:u,isRight:f}=Vd(e),p={x:0,y:0},h={x:0,y:0},g={height:t.height*r.y,width:t.width*r.x};return!d&&n<=t.top+g.height?(p.y=Ve.Backward,h.y=o*Math.abs((t.top+g.height-n)/g.height)):!c&&i>=t.bottom-g.height&&(p.y=Ve.Forward,h.y=o*Math.abs((t.bottom-g.height-i)/g.height)),!f&&s>=t.right-g.width?(p.x=Ve.Forward,h.x=o*Math.abs((t.right-g.width-s)/g.width)):!u&&l<=t.left+g.width&&(p.x=Ve.Backward,h.x=o*Math.abs((t.left+g.width-l)/g.width)),{direction:p,speed:h}}function wg(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Gd(e){return e.reduce((t,a)=>_a(t,Ms(a)),Ft)}function Sg(e){return e.reduce((t,a)=>t+Ud(a),0)}function yg(e){return e.reduce((t,a)=>t+Wd(a),0)}function Kd(e,t){if(t===void 0&&(t=Ga),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Hd(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var kg=[["x",["left","right"],Sg],["y",["top","bottom"],yg]],wr=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Dr(a),r=Gd(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of kg)for(let i of l)Object.defineProperty(this,i,{get:()=>{let d=s(o),c=r[n]-d;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Wa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Rg(e){let{EventTarget:t}=ot(e);return e instanceof t?e:Ba(e)}function Rs(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Mt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Mt||(Mt={}));function yd(e){e.preventDefault()}function Pg(e){e.stopPropagation()}var ce;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ce||(ce={}));var Xd={start:[ce.Space,ce.Enter],cancel:[ce.Esc],end:[ce.Space,ce.Enter,ce.Tab]},Dg=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ce.Right:return{...a,x:a.x+25};case ce.Left:return{...a,x:a.x-25};case ce.Down:return{...a,y:a.y+25};case ce.Up:return{...a,y:a.y-25}}},wa=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Wa(Ba(a)),this.windowListeners=new Wa(ot(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Mt.Resize,this.handleCancel),this.windowListeners.add(Mt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Mt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Kd(o),a(Ft)}handleKeyDown(t){if(Mo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Xd,coordinateGetter:l=Dg,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:d}=o.current,c=d?{x:d.left,y:d.top}:Ft;this.referenceCoordinates||(this.referenceCoordinates=c);let u=l(t,{active:a,context:o.current,currentCoordinates:c});if(u){let f=qa(u,c),p={x:0,y:0},{scrollableAncestors:h}=o.current;for(let g of h){let m=t.code,{isTop:C,isRight:x,isLeft:L,isBottom:b,maxScroll:S,minScroll:I}=Vd(g),k=wg(g),y={x:Math.min(m===ce.Right?k.right-k.width/2:k.right,Math.max(m===ce.Right?k.left:k.left+k.width/2,u.x)),y:Math.min(m===ce.Down?k.bottom-k.height/2:k.bottom,Math.max(m===ce.Down?k.top:k.top+k.height/2,u.y))},E=m===ce.Right&&!x||m===ce.Left&&!L,v=m===ce.Down&&!b||m===ce.Up&&!C;if(E&&y.x!==u.x){let R=g.scrollLeft+f.x,A=m===ce.Right&&R<=S.x||m===ce.Left&&R>=I.x;if(A&&!f.y){g.scrollTo({left:R,behavior:s});return}A?p.x=g.scrollLeft-R:p.x=m===ce.Right?g.scrollLeft-S.x:g.scrollLeft-I.x,p.x&&g.scrollBy({left:-p.x,behavior:s});break}else if(v&&y.y!==u.y){let R=g.scrollTop+f.y,A=m===ce.Down&&R<=S.y||m===ce.Up&&R>=I.y;if(A&&!f.x){g.scrollTo({top:R,behavior:s});return}A?p.y=g.scrollTop-R:p.y=m===ce.Down?g.scrollTop-S.y:g.scrollTop-I.y,p.y&&g.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,_a(qa(u,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};wa.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Xd,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function kd(e){return!!(e&&"distance"in e)}function Rd(e){return!!(e&&"delay"in e)}var Sr=class{constructor(t,a,o){var r;o===void 0&&(o=Rg(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=Ba(l),this.documentListeners=new Wa(this.document),this.listeners=new Wa(o),this.windowListeners=new Wa(ot(l)),this.initialCoordinates=(r=Ir(n))!=null?r:Ft,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Mt.Resize,this.handleCancel),this.windowListeners.add(Mt.DragStart,yd),this.windowListeners.add(Mt.VisibilityChange,this.handleCancel),this.windowListeners.add(Mt.ContextMenu,yd),this.documentListeners.add(Mt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Rd(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(kd(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Mt.Click,Pg,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Mt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Ir(t))!=null?a:Ft,d=qa(r,i);if(!o&&s){if(kd(s)){if(s.tolerance!=null&&Rs(d,s.tolerance))return this.handleCancel();if(Rs(d,s.distance))return this.handleStart()}if(Rd(s)&&Rs(d,s.tolerance))return this.handleCancel();this.handlePending(s,d);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ce.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Mg={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Ao=class extends Sr{constructor(t){let{event:a}=t,o=Ba(a.target);super(t,Mg,o)}};Ao.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Ag={move:{name:"mousemove"},end:{name:"mouseup"}},As;(function(e){e[e.RightClick=2]="RightClick"})(As||(As={}));var yr=class extends Sr{constructor(t){super(t,Ag,Ba(t.event.target))}};yr.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===As.RightClick?!1:(o?.({event:a}),!0)}}];var Ps={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},kr=class extends Sr{constructor(t){super(t,Ps)}static setup(){return window.addEventListener(Ps.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Ps.move.name,t)};function t(){}}};kr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var vr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(vr||(vr={}));var un;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(un||(un={}));function Tg(e){let{acceleration:t,activator:a=vr.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=un.TreeOrder,pointerCoordinates:i,scrollableAncestors:d,scrollableAncestorRects:c,delta:u,threshold:f}=e,p=Og({delta:u,disabled:!n}),[h,g]=xd(),m=(0,D.useRef)({x:0,y:0}),C=(0,D.useRef)({x:0,y:0}),x=(0,D.useMemo)(()=>{switch(a){case vr.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case vr.DraggableRect:return r}},[a,r,i]),L=(0,D.useRef)(null),b=(0,D.useCallback)(()=>{let I=L.current;if(!I)return;let k=m.current.x*C.current.x,y=m.current.y*C.current.y;I.scrollBy(k,y)},[]),S=(0,D.useMemo)(()=>s===un.TreeOrder?[...d].reverse():d,[s,d]);(0,D.useEffect)(()=>{if(!n||!d.length||!x){g();return}for(let I of S){if(o?.(I)===!1)continue;let k=d.indexOf(I),y=c[k];if(!y)continue;let{direction:E,speed:v}=vg(I,y,x,t,f);for(let R of["x","y"])p[R][E[R]]||(v[R]=0,E[R]=0);if(v.x>0||v.y>0){g(),L.current=I,h(b,l),m.current=v,C.current=E;return}}m.current={x:0,y:0},C.current={x:0,y:0},g()},[t,b,o,g,n,l,JSON.stringify(x),JSON.stringify(p),h,d,S,c,JSON.stringify(f)])}var Eg={x:{[Ve.Backward]:!1,[Ve.Forward]:!1},y:{[Ve.Backward]:!1,[Ve.Forward]:!1}};function Og(e){let{delta:t,disabled:a}=e,o=br(t);return Do(r=>{if(a||!o||!r)return Eg;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ve.Backward]:r.x[Ve.Backward]||n.x===-1,[Ve.Forward]:r.x[Ve.Forward]||n.x===1},y:{[Ve.Backward]:r.y[Ve.Backward]||n.y===-1,[Ve.Forward]:r.y[Ve.Forward]||n.y===1}}},[a,t,o])}function Fg(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Do(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Bg(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Rr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Rr||(Rr={}));var Ts;(function(e){e.Optimized="optimized"})(Ts||(Ts={}));var Pd=new Map;function Ng(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,D.useState)(null),{frequency:s,measure:i,strategy:d}=r,c=(0,D.useRef)(e),u=m(),f=Po(u),p=(0,D.useCallback)(function(C){C===void 0&&(C=[]),!f.current&&l(x=>x===null?C:x.concat(C.filter(L=>!x.includes(L))))},[f]),h=(0,D.useRef)(null),g=Do(C=>{if(u&&!a)return Pd;if(!C||C===Pd||c.current!==e||n!=null){let x=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){x.set(L.id,L.rect.current);continue}let b=L.node.current,S=b?new wr(i(b),b):null;L.rect.current=S,S&&x.set(L.id,S)}return x}return C},[e,n,a,u,i]);return(0,D.useEffect)(()=>{c.current=e},[e]),(0,D.useEffect)(()=>{u||p()},[a,u]),(0,D.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,D.useEffect)(()=>{u||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{p(),h.current=null},s))},[s,u,p,...o]),{droppableRects:g,measureDroppableContainers:p,measuringScheduled:n!=null};function m(){switch(d){case Rr.Always:return!1;case Rr.BeforeDragging:return a;default:return!a}}}function Bs(e,t){return Do(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function _g(e,t){return Bs(e,t)}function qg(e){let{callback:t,disabled:a}=e,o=Lr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function pn(e){let{callback:t,disabled:a}=e,o=Lr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Hg(e){return new wr(Ga(e),e)}function Dd(e,t,a){t===void 0&&(t=Hg);let[o,r]=(0,D.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var d;return(d=i??a)!=null?d:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=qg({callback(i){if(e)for(let d of i){let{type:c,target:u}=d;if(c==="childList"&&u instanceof HTMLElement&&u.contains(e)){n();break}}}}),s=pn({callback:n});return It(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Ug(e){let t=Bs(e);return _d(e,t)}var Md=[];function Wg(e){let t=(0,D.useRef)(e),a=Do(o=>e?o&&o!==Md&&e&&t.current&&e.parentNode===t.current.parentNode?o:Dr(e):Md,[e]);return(0,D.useEffect)(()=>{t.current=e},[e]),a}function zg(e){let[t,a]=(0,D.useState)(null),o=(0,D.useRef)(e),r=(0,D.useCallback)(n=>{let l=ks(n.target);l&&a(s=>s?(s.set(l,Ms(l)),new Map(s)):null)},[]);return(0,D.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let d=ks(i);return d?(d.addEventListener("scroll",r,{passive:!0}),[d,Ms(d)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let d=ks(i);d?.removeEventListener("scroll",r)})}},[r,e]),(0,D.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>_a(n,l),Ft):Gd(e):Ft,[e,t])}function Ad(e,t){t===void 0&&(t=[]);let a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current=null},t),(0,D.useEffect)(()=>{let o=e!==Ft;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?qa(e,a.current):Ft}function Vg(e){(0,D.useEffect)(()=>{if(!xr)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Gg(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function $d(e){return(0,D.useMemo)(()=>e?Lg(e):null,[e])}var Td=[];function Kg(e,t){t===void 0&&(t=Ga);let[a]=e,o=$d(a?ot(a):null),[r,n]=(0,D.useState)(Td);function l(){n(()=>e.length?e.map(i=>zd(i)?o:new wr(t(i),i)):Td)}let s=pn({callback:l});return It(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function jd(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Ro(t)?t:e}function Xg(e){let{measure:t}=e,[a,o]=(0,D.useState)(null),r=(0,D.useCallback)(d=>{for(let{target:c}of d)if(Ro(c)){o(u=>{let f=t(c);return u?{...u,width:f.width,height:f.height}:f});break}},[t]),n=pn({callback:r}),l=(0,D.useCallback)(d=>{let c=jd(d);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Cr(l);return(0,D.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var $g=[{sensor:Ao,options:{}},{sensor:wa,options:{}}],jg={current:{}},ln={draggable:{measure:Sd},droppable:{measure:Sd,strategy:Rr.WhileDragging,frequency:Ts.Optimized},dragOverlay:{measure:Ga}},za=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Yg={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new za,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:dn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ln,measureDroppableContainers:dn,windowRect:null,measuringScheduled:!1},Yd={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:dn,draggableNodes:new Map,over:null,measureDroppableContainers:dn},Mr=(0,D.createContext)(Yd),Zd=(0,D.createContext)(Yg);function Zg(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new za}}}function Jg(e,t){switch(t.type){case Ue.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ue.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Ue.DragEnd:case Ue.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ue.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new za(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Ue.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new za(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Ue.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new za(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Qg(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,D.useContext)(Mr),n=br(o),l=br(a?.id);return(0,D.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!Mo(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:d}=s;if(!i.current&&!d.current)return;requestAnimationFrame(()=>{for(let c of[i.current,d.current]){if(!c)continue;let u=Cd(c);if(u){u.focus();break}}})}},[o,t,r,l,n]),null}function Jd(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function eh(e){return(0,D.useMemo)(()=>({draggable:{...ln.draggable,...e?.draggable},droppable:{...ln.droppable,...e?.droppable},dragOverlay:{...ln.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function th(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,D.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;It(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let d=t?.node.current;if(!d||d.isConnected===!1)return;let c=a(d),u=_d(c,o);if(l||(u.x=0),s||(u.y=0),n.current=!0,Math.abs(u.x)>0||Math.abs(u.y)>0){let f=Hd(d);f&&f.scrollBy({top:u.y,left:u.x})}},[t,l,s,o,a])}var mn=(0,D.createContext)({...Ft,scaleX:1,scaleY:1}),va;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(va||(va={}));var gn=(0,D.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:d,sensors:c=$g,collisionDetection:u=Fs,measuring:f,modifiers:p,...h}=t,g=(0,D.useReducer)(Jg,void 0,Zg),[m,C]=g,[x,L]=ng(),[b,S]=(0,D.useState)(va.Uninitialized),I=b===va.Initialized,{draggable:{active:k,nodes:y,translate:E},droppable:{containers:v}}=m,R=k!=null?y.get(k):null,A=(0,D.useRef)({initial:null,translated:null}),q=(0,D.useMemo)(()=>{var tt;return k!=null?{id:k,data:(tt=R?.data)!=null?tt:jg,rect:A}:null},[k,R]),T=(0,D.useRef)(null),[V,W]=(0,D.useState)(null),[P,N]=(0,D.useState)(null),K=Po(h,Object.values(h)),G=Na("DndDescribedBy",l),j=(0,D.useMemo)(()=>v.getEnabled(),[v]),Y=eh(f),{droppableRects:ge,measureDroppableContainers:Ae,measuringScheduled:he}=Ng(j,{dragging:I,dependencies:[E.x,E.y],config:Y.droppable}),U=Fg(y,k),Ie=(0,D.useMemo)(()=>P?Ir(P):null,[P]),Ce=Gm(),xe=_g(U,Y.draggable.measure);th({activeNode:k!=null?y.get(k):null,config:Ce.layoutShiftCompensation,initialRect:xe,measure:Y.draggable.measure});let H=Dd(U,Y.draggable.measure,xe),te=Dd(U?U.parentElement:null),se=(0,D.useRef)({activatorEvent:null,active:null,activeNode:U,collisionRect:null,collisions:null,droppableRects:ge,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:v,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=v.getNodeFor((a=se.current.over)==null?void 0:a.id),w=Xg({measure:Y.dragOverlay.measure}),M=(o=w.nodeRef.current)!=null?o:U,z=I?(r=w.rect)!=null?r:H:null,$=!!(w.nodeRef.current&&w.rect),me=Ug($?null:H),B=$d(M?ot(M):null),X=Wg(I?Z??U:null),He=Kg(X),ca=Jd(p,{transform:{x:E.x-me.x,y:E.y-me.y,scaleX:1,scaleY:1},activatorEvent:P,active:q,activeNodeRect:H,containerNodeRect:te,draggingNodeRect:z,over:se.current.over,overlayNodeRect:w.rect,scrollableAncestors:X,scrollableAncestorRects:He,windowRect:B}),Gt=Ie?_a(Ie,E):null,Cs=zg(X),fa=Ad(Cs),an=Ad(Cs,[H]),vo=_a(ca,fa),wo=z?gg(z,ca):null,tr=q&&wo?u({active:q,collisionRect:wo,droppableRects:ge,droppableContainers:j,pointerCoordinates:Gt}):null,Di=Pr(tr,"id"),[pa,Mi]=(0,D.useState)(null),Hm=$?ca:_a(ca,an),Um=pg(Hm,(n=pa?.rect)!=null?n:null,H),bs=(0,D.useRef)(null),Ai=(0,D.useCallback)((tt,xt)=>{let{sensor:Lt,options:ma}=xt;if(T.current==null)return;let Pt=y.get(T.current);if(!Pt)return;let Ct=tt.nativeEvent,Kt=new Lt({active:T.current,activeNode:Pt,event:Ct,options:ma,context:se,onAbort(je){if(!y.get(je))return;let{onDragAbort:Xt}=K.current,ta={id:je};Xt?.(ta),x({type:"onDragAbort",event:ta})},onPending(je,ga,Xt,ta){if(!y.get(je))return;let{onDragPending:or}=K.current,ha={id:je,constraint:ga,initialCoordinates:Xt,offset:ta};or?.(ha),x({type:"onDragPending",event:ha})},onStart(je){let ga=T.current;if(ga==null)return;let Xt=y.get(ga);if(!Xt)return;let{onDragStart:ta}=K.current,ar={activatorEvent:Ct,active:{id:ga,data:Xt.data,rect:A}};(0,Ua.unstable_batchedUpdates)(()=>{ta?.(ar),S(va.Initializing),C({type:Ue.DragStart,initialCoordinates:je,active:ga}),x({type:"onDragStart",event:ar}),W(bs.current),N(Ct)})},onMove(je){C({type:Ue.DragMove,coordinates:je})},onEnd:So(Ue.DragEnd),onCancel:So(Ue.DragCancel)});bs.current=Kt;function So(je){return async function(){let{active:Xt,collisions:ta,over:ar,scrollAdjustedTranslate:or}=se.current,ha=null;if(Xt&&or){let{cancelDrop:rr}=K.current;ha={activatorEvent:Ct,active:Xt,collisions:ta,delta:or,over:ar},je===Ue.DragEnd&&typeof rr=="function"&&await Promise.resolve(rr(ha))&&(je=Ue.DragCancel)}T.current=null,(0,Ua.unstable_batchedUpdates)(()=>{C({type:je}),S(va.Uninitialized),Mi(null),W(null),N(null),bs.current=null;let rr=je===Ue.DragEnd?"onDragEnd":"onDragCancel";if(ha){let Is=K.current[rr];Is?.(ha),x({type:rr,event:ha})}})}}},[y]),Wm=(0,D.useCallback)((tt,xt)=>(Lt,ma)=>{let Pt=Lt.nativeEvent,Ct=y.get(ma);if(T.current!==null||!Ct||Pt.dndKit||Pt.defaultPrevented)return;let Kt={active:Ct};tt(Lt,xt.options,Kt)===!0&&(Pt.dndKit={capturedBy:xt.sensor},T.current=ma,Ai(Lt,xt))},[y,Ai]),Ti=Bg(c,Wm);Vg(c),It(()=>{H&&b===va.Initializing&&S(va.Initialized)},[H,b]),(0,D.useEffect)(()=>{let{onDragMove:tt}=K.current,{active:xt,activatorEvent:Lt,collisions:ma,over:Pt}=se.current;if(!xt||!Lt)return;let Ct={active:xt,activatorEvent:Lt,collisions:ma,delta:{x:vo.x,y:vo.y},over:Pt};(0,Ua.unstable_batchedUpdates)(()=>{tt?.(Ct),x({type:"onDragMove",event:Ct})})},[vo.x,vo.y]),(0,D.useEffect)(()=>{let{active:tt,activatorEvent:xt,collisions:Lt,droppableContainers:ma,scrollAdjustedTranslate:Pt}=se.current;if(!tt||T.current==null||!xt||!Pt)return;let{onDragOver:Ct}=K.current,Kt=ma.get(Di),So=Kt&&Kt.rect.current?{id:Kt.id,rect:Kt.rect.current,data:Kt.data,disabled:Kt.disabled}:null,je={active:tt,activatorEvent:xt,collisions:Lt,delta:{x:Pt.x,y:Pt.y},over:So};(0,Ua.unstable_batchedUpdates)(()=>{Mi(So),Ct?.(je),x({type:"onDragOver",event:je})})},[Di]),It(()=>{se.current={activatorEvent:P,active:q,activeNode:U,collisionRect:wo,collisions:tr,droppableRects:ge,draggableNodes:y,draggingNode:M,draggingNodeRect:z,droppableContainers:v,over:pa,scrollableAncestors:X,scrollAdjustedTranslate:vo},A.current={initial:z,translated:wo}},[q,U,tr,wo,y,M,z,ge,v,pa,X,vo]),Tg({...Ce,delta:E,draggingRect:wo,pointerCoordinates:Gt,scrollableAncestors:X,scrollableAncestorRects:He});let zm=(0,D.useMemo)(()=>({active:q,activeNode:U,activeNodeRect:H,activatorEvent:P,collisions:tr,containerNodeRect:te,dragOverlay:w,draggableNodes:y,droppableContainers:v,droppableRects:ge,over:pa,measureDroppableContainers:Ae,scrollableAncestors:X,scrollableAncestorRects:He,measuringConfiguration:Y,measuringScheduled:he,windowRect:B}),[q,U,H,P,tr,te,w,y,v,ge,pa,Ae,X,He,Y,he,B]),Vm=(0,D.useMemo)(()=>({activatorEvent:P,activators:Ti,active:q,activeNodeRect:H,ariaDescribedById:{draggable:G},dispatch:C,draggableNodes:y,over:pa,measureDroppableContainers:Ae}),[P,Ti,q,H,C,G,y,pa,Ae]);return D.default.createElement(Fd.Provider,{value:L},D.default.createElement(Mr.Provider,{value:Vm},D.default.createElement(Zd.Provider,{value:zm},D.default.createElement(mn.Provider,{value:Um},d)),D.default.createElement(Qg,{disabled:s?.restoreFocus===!1})),D.default.createElement(ig,{...s,hiddenTextDescribedById:G}));function Gm(){let tt=V?.autoScrollEnabled===!1,xt=typeof i=="object"?i.enabled===!1:i===!1,Lt=I&&!tt&&!xt;return typeof i=="object"?{...i,enabled:Lt}:{enabled:Lt}}}),ah=(0,D.createContext)(null),Ed="button",oh="Draggable";function Qd(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Na(oh),{activators:l,activatorEvent:s,active:i,activeNodeRect:d,ariaDescribedById:c,draggableNodes:u,over:f}=(0,D.useContext)(Mr),{role:p=Ed,roleDescription:h="draggable",tabIndex:g=0}=r??{},m=i?.id===t,C=(0,D.useContext)(m?mn:ah),[x,L]=Cr(),[b,S]=Cr(),I=Gg(l,t),k=Po(a);It(()=>(u.set(t,{id:t,key:n,node:x,activatorNode:b,data:k}),()=>{let E=u.get(t);E&&E.key===n&&u.delete(t)}),[u,t]);let y=(0,D.useMemo)(()=>({role:p,tabIndex:g,"aria-disabled":o,"aria-pressed":m&&p===Ed?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,p,g,m,h,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:d,attributes:y,isDragging:m,listeners:o?void 0:I,node:x,over:f,setNodeRef:L,setActivatorNodeRef:S,transform:C}}function Ar(){return(0,D.useContext)(Zd)}var rh="Droppable",nh={timeout:25};function hn(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Na(rh),{active:l,dispatch:s,over:i,measureDroppableContainers:d}=(0,D.useContext)(Mr),c=(0,D.useRef)({disabled:a}),u=(0,D.useRef)(!1),f=(0,D.useRef)(null),p=(0,D.useRef)(null),{disabled:h,updateMeasurementsFor:g,timeout:m}={...nh,...r},C=Po(g??o),x=(0,D.useCallback)(()=>{if(!u.current){u.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{d(Array.isArray(C.current)?C.current:[C.current]),p.current=null},m)},[m]),L=pn({callback:x,disabled:h||!l}),b=(0,D.useCallback)((y,E)=>{L&&(E&&(L.unobserve(E),u.current=!1),y&&L.observe(y))},[L]),[S,I]=Cr(b),k=Po(t);return(0,D.useEffect)(()=>{!L||!S.current||(L.disconnect(),u.current=!1,L.observe(S.current))},[S,L]),(0,D.useEffect)(()=>(s({type:Ue.RegisterDroppable,element:{id:o,key:n,disabled:a,node:S,rect:f,data:k}}),()=>s({type:Ue.UnregisterDroppable,key:n,id:o})),[o]),(0,D.useEffect)(()=>{a!==c.current.disabled&&(s({type:Ue.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:S,over:i,setNodeRef:I}}function sh(e){let{animation:t,children:a}=e,[o,r]=(0,D.useState)(null),[n,l]=(0,D.useState)(null),s=br(a);return!a&&!o&&s&&r(s),It(()=>{if(!n)return;let i=o?.key,d=o?.props.id;if(i==null||d==null){r(null);return}Promise.resolve(t(d,n)).then(()=>{r(null)})},[t,o,n]),D.default.createElement(D.default.Fragment,null,a,o?(0,D.cloneElement)(o,{ref:l}):null)}var lh={x:0,y:0,scaleX:1,scaleY:1};function ih(e){let{children:t}=e;return D.default.createElement(Mr.Provider,{value:Yd},D.default.createElement(mn.Provider,{value:lh},t))}var dh={position:"fixed",touchAction:"none"},uh=e=>Mo(e)?"transform 250ms ease":void 0,ch=(0,D.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:d,transition:c=uh}=e;if(!s)return null;let u=r?d:{...d,scaleX:1,scaleY:1},f={...dh,width:s.width,height:s.height,top:s.top,left:s.left,transform:bt.Transform.toString(u),transformOrigin:r&&o?dg(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return D.default.createElement(a,{className:l,style:f,ref:t},n)}),fh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,d]of Object.entries(r))a.node.style.setProperty(i,d);l!=null&&l.active&&a.node.classList.remove(l.active)}},ph=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:bt.Transform.toString(t)},{transform:bt.Transform.toString(a)}]},mh={duration:250,easing:"ease",keyframes:ph,sideEffects:fh({styles:{active:{opacity:"0"}}})};function gh(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Lr((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let d=jd(l);if(!d)return;let{transform:c}=ot(l).getComputedStyle(l),u=qd(c);if(!u)return;let f=typeof t=="function"?t:hh(t);return Kd(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:r,transform:u})})}function hh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...mh,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...d}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},u={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...u},p=r({...d,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[h]=p,g=p[p.length-1];if(JSON.stringify(h)===JSON.stringify(g))return;let m=o?.({active:l,dragOverlay:s,...d}),C=s.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(x=>{C.onfinish=()=>{m?.(),x()}})}}var Od=0;function xh(e){return(0,D.useMemo)(()=>{if(e!=null)return Od++,Od},[e])}var eu=D.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:d=999}=e,{activatorEvent:c,active:u,activeNodeRect:f,containerNodeRect:p,draggableNodes:h,droppableContainers:g,dragOverlay:m,over:C,measuringConfiguration:x,scrollableAncestors:L,scrollableAncestorRects:b,windowRect:S}=Ar(),I=(0,D.useContext)(mn),k=xh(u?.id),y=Jd(l,{activatorEvent:c,active:u,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:m.rect,over:C,overlayNodeRect:m.rect,scrollableAncestors:L,scrollableAncestorRects:b,transform:I,windowRect:S}),E=Bs(f),v=gh({config:o,draggableNodes:h,droppableContainers:g,measuringConfiguration:x}),R=E?m.setRef:void 0;return D.default.createElement(ih,null,D.default.createElement(sh,{animation:v},u&&k?D.default.createElement(ch,{key:k,id:u.id,ref:R,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:E,style:{zIndex:d,...r},transform:y},a):null))});var Oe=J(require("react"));function tu(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Lh(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function xn(e){return e!==null&&e>=0}function Ch(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function bh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var au=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=tu(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Ln={scaleX:1,scaleY:1},bn=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let d=n[l];return d?{x:0,y:a<l?d.top+d.height-(s.top+s.height):d.top-s.top,...Ln}:null}let i=Ih(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Ln}:r<a&&r>=l?{x:0,y:s.height+i,...Ln}:{x:0,y:0,...Ln}};function Ih(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var ou="Sortable",ru=Oe.default.createContext({activeIndex:-1,containerId:ou,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:au,disabled:{draggable:!1,droppable:!1}});function In(e){let{children:t,id:a,items:o,strategy:r=au,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:d,measureDroppableContainers:c}=Ar(),u=Na(ou,a),f=s.rect!==null,p=(0,Oe.useMemo)(()=>o.map(I=>typeof I=="object"&&"id"in I?I.id:I),[o]),h=l!=null,g=l?p.indexOf(l.id):-1,m=d?p.indexOf(d.id):-1,C=(0,Oe.useRef)(p),x=!Ch(p,C.current),L=m!==-1&&g===-1||x,b=bh(n);It(()=>{x&&h&&c(p)},[x,p,h,c]),(0,Oe.useEffect)(()=>{C.current=p},[p]);let S=(0,Oe.useMemo)(()=>({activeIndex:g,containerId:u,disabled:b,disableTransforms:L,items:p,overIndex:m,useDragOverlay:f,sortedRects:Lh(p,i),strategy:r}),[g,u,b.draggable,b.droppable,L,p,m,i,f,r]);return Oe.default.createElement(ru.Provider,{value:S},t)}var vh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return tu(a,o,r).indexOf(t)},wh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:d}=e;return!d||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Sh={duration:200,easing:"ease"},nu="transform",yh=bt.Transition.toString({property:nu,duration:0,easing:"linear"}),kh={roleDescription:"sortable"};function Rh(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Oe.useState)(null),s=(0,Oe.useRef)(a);return It(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let d=Ga(o.current,{ignoreTransform:!0}),c={x:i.left-d.left,y:i.top-d.top,scaleX:i.width/d.width,scaleY:i.height/d.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Oe.useEffect)(()=>{n&&l(null)},[n]),n}function vn(e){let{animateLayoutChanges:t=wh,attributes:a,disabled:o,data:r,getNewIndex:n=vh,id:l,strategy:s,resizeObserverConfig:i,transition:d=Sh}=e,{items:c,containerId:u,activeIndex:f,disabled:p,disableTransforms:h,sortedRects:g,overIndex:m,useDragOverlay:C,strategy:x}=(0,Oe.useContext)(ru),L=Ph(o,p),b=c.indexOf(l),S=(0,Oe.useMemo)(()=>({sortable:{containerId:u,index:b,items:c},...r}),[u,r,b,c]),I=(0,Oe.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:k,node:y,isOver:E,setNodeRef:v}=hn({id:l,data:S,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...i}}),{active:R,activatorEvent:A,activeNodeRect:q,attributes:T,setNodeRef:V,listeners:W,isDragging:P,over:N,setActivatorNodeRef:K,transform:G}=Qd({id:l,data:S,attributes:{...kh,...a},disabled:L.draggable}),j=hd(v,V),Y=!!R,ge=Y&&!h&&xn(f)&&xn(m),Ae=!C&&P,he=Ae&&ge?G:null,Ie=ge?he??(s??x)({rects:g,activeNodeRect:q,activeIndex:f,overIndex:m,index:b}):null,Ce=xn(f)&&xn(m)?n({id:l,items:c,activeIndex:f,overIndex:m}):b,xe=R?.id,H=(0,Oe.useRef)({activeId:xe,items:c,newIndex:Ce,containerId:u}),te=c!==H.current.items,se=t({active:R,containerId:u,isDragging:P,isSorting:Y,id:l,index:b,items:c,newIndex:H.current.newIndex,previousItems:H.current.items,previousContainerId:H.current.containerId,transition:d,wasDragging:H.current.activeId!=null}),Z=Rh({disabled:!se,index:b,node:y,rect:k});return(0,Oe.useEffect)(()=>{Y&&H.current.newIndex!==Ce&&(H.current.newIndex=Ce),u!==H.current.containerId&&(H.current.containerId=u),c!==H.current.items&&(H.current.items=c)},[Y,Ce,u,c]),(0,Oe.useEffect)(()=>{if(xe===H.current.activeId)return;if(xe!=null&&H.current.activeId==null){H.current.activeId=xe;return}let M=setTimeout(()=>{H.current.activeId=xe},50);return()=>clearTimeout(M)},[xe]),{active:R,activeIndex:f,attributes:T,data:S,rect:k,index:b,newIndex:Ce,items:c,isOver:E,isSorting:Y,isDragging:P,listeners:W,node:y,overIndex:m,over:N,setNodeRef:j,setActivatorNodeRef:K,setDroppableNodeRef:v,setDraggableNodeRef:V,transform:Z??Ie,transition:w()};function w(){if(Z||te&&H.current.newIndex===b)return yh;if(!(Ae&&!Mo(A)||!d)&&(Y||se))return bt.Transition.toString({...d,property:nu})}}function Ph(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Cn(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Dh=[ce.Down,ce.Right,ce.Up,ce.Left],wn=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Dh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(u=>{if(!u||u!=null&&u.disabled)return;let f=r.get(u.id);if(f)switch(e.code){case ce.Down:o.top<f.top&&i.push(u);break;case ce.Up:o.top>f.top&&i.push(u);break;case ce.Left:o.left>f.left&&i.push(u);break;case ce.Right:o.left<f.left&&i.push(u);break}});let d=fn({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Pr(d,"id");if(c===l?.id&&d.length>1&&(c=d[1].id),c!=null){let u=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,h=f?.node.current;if(h&&p&&u&&f){let m=Dr(h).some((I,k)=>s[k]!==I),C=su(u,f),x=Mh(u,f),L=m||!C?{x:0,y:0}:{x:x?o.width-p.width:0,y:x?o.height-p.height:0},b={x:p.left,y:p.top};return L.x&&L.y?b:qa(b,L)}}}};function su(e,t){return!Cn(e)||!Cn(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Mh(e,t){return!Cn(e)||!Cn(t)||!su(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var we=require("react");var _p=require("@deepseek-ai/dsh-client-ui-primitives");var Cu=J(require("react"),1);var Ze=J(require("react"),1);var lu=J(require("react"),1),Ah=Object.defineProperty,_s=(e,t)=>Ah(e,"name",{value:t,configurable:!0});function Ns(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}_s(Ns,"setRef");function iu(...e){return t=>{let a=!1,o=e.map(r=>{let n=Ns(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():Ns(e[r],null)}}}}_s(iu,"composeRefs");function de(...e){return lu.useCallback(iu(...e),e)}_s(de,"useComposedRefs");var Th=Object.defineProperty,vt=(e,t)=>Th(e,"name",{value:t,configurable:!0});function rt(e){let t=Ze.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];r=gu(r),Ze.Children.forEach(r,f=>{if(pu(f)){s=!0;let p=f,h="child"in p.props?p.props.child:p.props.children;for(;qs(h)&&typeof Sn=="function";)h=Sn(h._payload);l=Oh(p,h),i.push(l?.props?.children)}else i.push(f)}),l?l=Ze.cloneElement(l,void 0,i):!s&&Ze.Children.count(r)===1&&Ze.isValidElement(r)&&(l=r);let d=l?fu(l):void 0,c=de(o,d);if(!l){if(r||r===0)throw new Error(s?Nh(e):Bh(e));return r}let u=cu(n,l.props??{});return l.type!==Ze.Fragment&&(u.ref=o?c:d),Ze.cloneElement(l,u)});return t.displayName=`${e}.Slot`,t}vt(rt,"createSlot");var du=rt("Slot"),uu=Symbol.for("radix.slottable");function Eh(e){let t=vt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=uu,t}vt(Eh,"createSlottable");var Oh=vt((e,t)=>"child"in e.props?Ze.isValidElement(t)?Ze.cloneElement(t,void 0,e.props.children(t.props.children)):null:Ze.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function cu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=hu(n,r))}return{...e,...a}}vt(cu,"mergeProps");function fu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}vt(fu,"getElementRef");function pu(e){return Ze.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===uu}vt(pu,"isSlottable");var Fh=Symbol.for("react.lazy");function qs(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Fh&&"_payload"in e&&mu(e._payload)}vt(qs,"isLazyComponent");function mu(e){return typeof e=="object"&&e!==null&&"then"in e}vt(mu,"isPromiseLike");function gu(e){let t=e;for(;qs(t)&&typeof Sn=="function";)t=Sn(t._payload);return t}vt(gu,"useUnwrappedLazy");function hu(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}vt(hu,"concatAriaDescribedby");var Bh=vt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Nh=vt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Sn=Ze[" use ".trim().toString()];function xu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=xu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Lu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=xu(e))&&(o&&(o+=" "),o+=t);return o}function ie(...e){return Lu(e)}var bu=require("react/jsx-runtime");function _h({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ie("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var le=Cu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,bu.jsx)(o?du:"button",{className:_h({variant:t,size:a,className:e}),ref:n,...r}));le.displayName="Button";var Ur=J(require("react"),1);var ye=J(require("react"),1);var qh=Object.defineProperty,To=(e,t)=>qh(e,"name",{value:t,configurable:!0}),Iu=!!(typeof window<"u"&&window.document&&window.document.createElement);function Q(e,t,{checkForDefaultPrevented:a=!0}={}){return To(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}To(Q,"composeEventHandlers");function Hh(e){if(!Iu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}To(Hh,"getOwnerWindow");function Hs(e){if(!Iu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}To(Hs,"getOwnerDocument");function vu(e,t=!1){let{activeElement:a}=Hs(e);if(!a?.nodeName)return null;if(wu(a)&&a.contentDocument)return vu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Hs(a).getElementById(o);if(r)return r}}return a}To(vu,"getActiveElement");function wu(e){return e.tagName==="IFRAME"}To(wu,"isFrame");var Tt=J(require("react"),1),Us=require("react/jsx-runtime"),Uh=Object.defineProperty,At=(e,t)=>Uh(e,"name",{value:t,configurable:!0});function Wh(e,t){let a=Tt.createContext(t);a.displayName=e+"Context";let o=At(n=>{let{children:l,...s}=n,i=Tt.useMemo(()=>s,Object.values(s));return(0,Us.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=Tt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return At(r,"useContext"),[o,r]}At(Wh,"createContext");function Je(e,t=[]){let a=[];function o(n,l){let s=Tt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let d=At(u=>{let{scope:f,children:p,...h}=u,g=f?.[e]?.[i]||s,m=Tt.useMemo(()=>h,Object.values(h));return(0,Us.jsx)(g.Provider,{value:m,children:p})},"Provider");d.displayName=n+"Provider";function c(u,f,p={}){let{optional:h=!1}=p,g=f?.[e]?.[i]||s,m=Tt.useContext(g);if(m)return m;if(l!==void 0)return l;if(!h)throw new Error(`\`${u}\` must be used within \`${n}\``)}return At(c,"useContext"),[d,c]}At(o,"createContext");let r=At(()=>{let n=a.map(l=>Tt.createContext(l));return At(function(s){let i=s?.[e]||n;return Tt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Su(r,...t)]}At(Je,"createContextScope");function Su(...e){let t=e[0];if(e.length===1)return t;let a=At(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return At(function(n){let l=o.reduce((s,{useScope:i,scopeName:d})=>{let u=i(n)[`__scope${d}`];return{...s,...u}},{});return Tt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}At(Su,"composeContextScopes");var Ws=J(require("react"),1);var yu=J(require("react"),1),pe=globalThis?.document?yu.useLayoutEffect:()=>{};var zh=Object.defineProperty,Vh=(e,t)=>zh(e,"name",{value:t,configurable:!0}),Gh=Ws[" useId ".trim().toString()]||(()=>{}),Kh=0;function wt(e){let[t,a]=Ws.useState(Gh());return pe(()=>{e||a(o=>o??String(Kh++))},[e]),e||(t?`radix-${t}`:"")}Vh(wt,"useId");var Et=J(require("react"),1);var yn=!1;var Bt=J(require("react"),1);var Eo=J(require("react"),1),Xh=Object.defineProperty,$h=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),ku=Eo[" useEffectEvent ".trim().toString()],Ru=Eo[" useInsertionEffect ".trim().toString()];function zs(e){if(typeof ku=="function")return ku(e);let t=Eo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Ru=="function"?Ru(()=>{t.current=e}):pe(()=>{t.current=e}),Eo.useMemo(()=>((...a)=>t.current?.(...a)),[])}$h(zs,"useEffectEvent");var jh=Object.defineProperty,Tr=(e,t)=>jh(e,"name",{value:t,configurable:!0}),Yh=Et[" useInsertionEffect ".trim().toString()]||pe;function $t({prop:e,defaultProp:t,onChange:a=Tr(()=>{},"onChange"),caller:o}){let[r,n,l]=Du({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(yn){let c=Et.useRef(e!==void 0);Et.useEffect(()=>{let u=c.current;u!==s&&console.warn(`${o} is changing from ${u?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let d=Et.useCallback(c=>{if(s){let u=Mu(c)?c(e):c;u!==e&&l.current?.(u)}else n(c)},[s,e,n,l]);return[i,d]}Tr($t,"useControllableState");function Du({defaultProp:e,onChange:t}){let[a,o]=Et.useState(e),r=Et.useRef(a),n=Et.useRef(t);return Yh(()=>{n.current=t},[t]),Et.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Tr(Du,"useUncontrolledState");function Mu(e){return typeof e=="function"}Tr(Mu,"isFunction");var Pu=Symbol("RADIX:SYNC_STATE");function Zh(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,d=zs(l);if(yn){let m=Bt.useRef(r!==void 0);Bt.useEffect(()=>{let C=m.current;C!==i&&console.warn(`${s} is changing from ${C?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[u,f]=Bt.useReducer((m,C)=>{if(C.type===Pu)return{...m,state:C.state};let x=e(m,C);return i&&!Object.is(x.state,m.state)&&d(x.state),x},...c),p=u.state,h=Bt.useRef(p);Bt.useEffect(()=>{h.current!==p&&(h.current=p,i||d(p))},[p,h,i]);let g=Bt.useMemo(()=>r!==void 0?{...u,state:r}:u,[u,r]);return Bt.useEffect(()=>{i&&!Object.is(r,u.state)&&f({type:Pu,state:r})},[r,u.state,i]),[g,f]}Tr(Zh,"useControllableStateReducer");var ve=J(require("react"),1);var Au=J(require("react"),1),Tu=J(require("react-dom"),1);var Eu=require("react/jsx-runtime"),Jh=Object.defineProperty,Qh=(e,t)=>Jh(e,"name",{value:t,configurable:!0}),ex=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ue=ex.reduce((e,t)=>{let a=rt(`Primitive.${t}`),o=Au.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Eu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Er(e,t){e&&Tu.flushSync(()=>e.dispatchEvent(t))}Qh(Er,"dispatchDiscreteCustomEvent");var Or=J(require("react"),1),tx=Object.defineProperty,ax=(e,t)=>tx(e,"name",{value:t,configurable:!0}),Ou=Or[" useInsertionEffect ".trim().toString()];function Ge(e){let t=Or.useRef(e);return typeof Ou=="function"?Ou(()=>{t.current=e}):pe(()=>{t.current=e}),Or.useMemo(()=>((...a)=>t.current?.(...a)),[])}ax(Ge,"useCallbackRef");var Bu=require("react/jsx-runtime"),ox=Object.defineProperty,Ke=(e,t)=>ox(e,"name",{value:t,configurable:!0}),Vs="dismissableLayer.update",rx="dismissableLayer.pointerDownOutside",nx="dismissableLayer.focusOutside",Fu,Nu=ve.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Oo=ve.forwardRef(Ke(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:d,...c}=t,u=ve.useContext(Nu),[f,p]=ve.useState(null),h=f?.ownerDocument??globalThis?.document,[,g]=ve.useState({}),m=de(a,p),C=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),L=x?C.indexOf(x):-1,b=f?C.indexOf(f):-1,S=u.layersWithOutsidePointerEventsDisabled.size>0,I=b>=L,k=ve.useRef(!1),y=_u(A=>{l?.(A),i?.(A),A.defaultPrevented||d?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:k,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:ve.useCallback(A=>{if(!(A instanceof Node))return!1;let q=[...u.branches].some(T=>T.contains(A));return I&&!q},[u.branches,I])}),E=qu(A=>{if(r&&k.current)return;let q=A.target;[...u.branches].some(V=>V.contains(q))||(s?.(A),i?.(A),A.defaultPrevented||d?.())},h),v=f?b===C.length-1:!1,R=Ge(A=>{A.key==="Escape"&&(n?.(A),!A.defaultPrevented&&d&&(A.preventDefault(),d()))});return ve.useEffect(()=>{if(v)return h.addEventListener("keydown",R,{capture:!0}),()=>h.removeEventListener("keydown",R,{capture:!0})},[h,v,R]),ve.useEffect(()=>{if(f)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Fu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Gs(),()=>{o&&(u.layersWithOutsidePointerEventsDisabled.delete(f),u.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Fu))}},[f,h,o,u]),ve.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Gs())},[f,u]),ve.useEffect(()=>{let A=Ke(()=>g({}),"handleUpdate");return document.addEventListener(Vs,A),()=>document.removeEventListener(Vs,A)},[]),(0,Bu.jsx)(ue.div,{...c,ref:m,style:{pointerEvents:S?I?"auto":"none":void 0,...t.style},onFocusCapture:Q(t.onFocusCapture,E.onFocusCapture),onBlurCapture:Q(t.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Q(t.onPointerDownCapture,y.onPointerDownCapture)})},"DismissableLayer"));function Ks(){let e=ve.useContext(Nu),[t,a]=ve.useState(null);return ve.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ke(Ks,"useDismissableLayerSurface");var sx=Ke(()=>!0,"IS_TRUE");function _u(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=sx}=t,s=Ge(e),i=ve.useRef(!1),d=ve.useRef(!1),c=ve.useRef(new Map),u=ve.useRef(()=>{});return ve.useEffect(()=>{function f(){d.current=!1,r.current=!1,c.current.clear()}Ke(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}Ke(p,"isOutsideInteractionIntercepted");function h(L){if(!d.current)return;let b=L.target;b instanceof Node&&[...n].some(I=>I.contains(b))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{d.current&&u.current()},0)}Ke(h,"handleInteractionCapture");function g(L){d.current&&c.current.set(L.type,!1)}Ke(g,"handleInteractionBubble");let m=Ke(L=>{if(L.target&&!i.current){let S=function(){a.removeEventListener("click",u.current);let k=p();f(),k||Xs(rx,s,I,{discrete:!0})};var b=S;if(Ke(S,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",u.current),f(),i.current=!1;return}let I={originalEvent:L};d.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?S():(a.removeEventListener("click",u.current),u.current=S,a.addEventListener("click",u.current,{once:!0}))}else a.removeEventListener("click",u.current),f();i.current=!1},"handlePointerDown"),C=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of C)a.addEventListener(L,h,!0),a.addEventListener(L,g);let x=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(x),a.removeEventListener("pointerdown",m),a.removeEventListener("click",u.current);for(let L of C)a.removeEventListener(L,h,!0),a.removeEventListener(L,g)}},[a,s,o,r,n,l]),{onPointerDownCapture:Ke(()=>i.current=!0,"onPointerDownCapture")}}Ke(_u,"usePointerDownOutside");function qu(e,t=globalThis?.document){let a=Ge(e),o=ve.useRef(!1);return ve.useEffect(()=>{let r=Ke(n=>{n.target&&!o.current&&Xs(nx,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ke(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ke(()=>o.current=!1,"onBlurCapture")}}Ke(qu,"useFocusOutside");function Gs(){let e=new CustomEvent(Vs);document.dispatchEvent(e)}Ke(Gs,"dispatchUpdate");function Xs(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?Er(r,n):r.dispatchEvent(n)}Ke(Xs,"handleAndDispatchCustomEvent");var Te=J(require("react"),1);var Js=require("react/jsx-runtime"),lx=Object.defineProperty,Ne=(e,t)=>lx(e,"name",{value:t,configurable:!0}),$s="focusScope.autoFocusOnMount",js="focusScope.autoFocusOnUnmount",Hu={bubbles:!1,cancelable:!0},Fo=Te.forwardRef(Ne(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...i}=t,[d,c]=Te.useState(null),u=Ge(l),f=Ge(s),p=Te.useRef(null),h=de(a,c),g=Te.useRef(n);Te.useEffect(()=>{g.current=n});let m=Te.useCallback(L=>L?d?.contains(L)?!0:!!g.current?.some(b=>b.contains(L)):!1,[d]),C=Te.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Te.useEffect(()=>{if(r){let I=function(v){if(C.paused||!d)return;let R=v.target;m(R)?p.current=R:ra(p.current,{select:!0})},k=function(v){if(C.paused||!d)return;let R=v.relatedTarget;R!==null&&(m(R)||ra(p.current,{select:!0}))},y=function(v){if(document.activeElement===document.body)for(let A of v)A.removedNodes.length>0&&ra(d)};var L=I,b=k,S=y;Ne(I,"handleFocusIn"),Ne(k,"handleFocusOut"),Ne(y,"handleMutations"),document.addEventListener("focusin",I),document.addEventListener("focusout",k);let E=new MutationObserver(y);return d&&E.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",I),document.removeEventListener("focusout",k),E.disconnect()}}},[r,d,C.paused,m]),Te.useEffect(()=>{if(d){Uu.add(C);let L=document.activeElement;if(!d.contains(L)){let S=new CustomEvent($s,Hu);d.addEventListener($s,u),d.dispatchEvent(S),S.defaultPrevented||(zu($u(el(d)),{select:!0}),document.activeElement===L&&ra(d))}return()=>{d.removeEventListener($s,u);let S=d.ownerDocument,I=CustomEvent;setTimeout(()=>{let k=new I(js,Hu);d.addEventListener(js,f),d.dispatchEvent(k),k.defaultPrevented||ra(L??S.body,{select:!0}),d.removeEventListener(js,f),Uu.remove(C)},0)}}},[d,u,f,C]);let x=Te.useCallback(L=>{if(!o&&!r||C.paused)return;let b=L.key==="Tab"&&!L.altKey&&!L.ctrlKey&&!L.metaKey,S=document.activeElement;if(b&&S){let I=L.currentTarget,[k,y]=Vu(I);k&&y?!L.shiftKey&&S===y?(L.preventDefault(),o&&ra(k,{select:!0})):L.shiftKey&&S===k&&(L.preventDefault(),o&&ra(y,{select:!0})):S===I&&L.preventDefault()}},[o,r,C.paused]);return(0,Js.jsx)(ue.div,{tabIndex:-1,...i,ref:h,onKeyDown:x})},"FocusScope")),Wu=Te.createContext(null);function Fr({registry:e,children:t}){return e?(0,Js.jsx)(Wu.Provider,{value:e,children:t}):t}Ne(Fr,"FocusScopeBranchProvider");function Br(){let[e,t]=Te.useState([]),a=Te.useMemo(()=>({add:Ne(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Ne(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Ne(Br,"useFocusScopeBranchRegistry");function Qs(e){let t=Te.useContext(Wu);Te.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Ne(Qs,"useFocusScopeBranch");function zu(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(ra(o,{select:t}),document.activeElement!==a)return}Ne(zu,"focusFirst");function Vu(e){let t=el(e),a=Ys(t,e),o=Ys(t.reverse(),e);return[a,o]}Ne(Vu,"getTabbableEdges");function el(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ne(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Ne(el,"getTabbableCandidates");function Ys(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Gu(o,{upTo:t})))return o}Ne(Ys,"findVisible");function Gu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ne(Gu,"isHidden");function Ku(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Ne(Ku,"isSelectableInput");function ra(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Ku(e)&&t&&e.select()}}Ne(ra,"focus");var Uu=Xu();function Xu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Zs(e,t),e.unshift(t)},remove(t){e=Zs(e,t),e[0]?.resume()}}}Ne(Xu,"createFocusScopesStack");function Zs(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ne(Zs,"arrayRemove");function $u(e){return e.filter(t=>t.tagName!=="A")}Ne($u,"removeLinks");var kn=J(require("react"),1),ju=J(require("react-dom"),1);var Yu=require("react/jsx-runtime"),ix=Object.defineProperty,dx=(e,t)=>ix(e,"name",{value:t,configurable:!0}),Bo=kn.forwardRef(dx(function(t,a){let{container:o,...r}=t,[n,l]=kn.useState(!1);pe(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?ju.createPortal((0,Yu.jsx)(ue.div,{...r,ref:a}),s):null},"Portal"));var Qe=J(require("react"),1);var Zu=J(require("react"),1),ux=Object.defineProperty,na=(e,t)=>ux(e,"name",{value:t,configurable:!0});function Ju(e,t){return Zu.useReducer((a,o)=>t[a][o]??a,e)}na(Ju,"useStateMachine");var sa=na(e=>{let{present:t,children:a}=e,o=Qu(t),r=typeof a=="function"?a({present:o.isPresent}):Qe.Children.only(a),n=ec(o.ref,tc(r));return typeof a=="function"||o.isPresent?Qe.cloneElement(r,{ref:n}):null},"Presence");function Qu(e){let[t,a]=Qe.useState(),o=Qe.useRef(null),r=Qe.useRef(e),n=Qe.useRef("none"),l=Qe.useRef(void 0),s=e?"mounted":"unmounted",[i,d]=Ju(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Qe.useEffect(()=>{i==="mounted"?(n.current=l.current??No(o.current),l.current=void 0):n.current="none"},[i]),pe(()=>{let c=o.current,u=r.current;if(u!==e){let p=n.current,h=No(c);e?(l.current=h,d("MOUNT")):h==="none"||c?.display==="none"?d("UNMOUNT"):d(u&&p!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),pe(()=>{if(t){let c,u=t.ownerDocument.defaultView??window,f=na(h=>{let m=No(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&m&&(d("ANIMATION_END"),!r.current)){let C=t.style.animationFillMode;t.style.animationFillMode="forwards",c=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},"handleAnimationEnd"),p=na(h=>{h.target===t&&(n.current=No(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{u.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Qe.useCallback(c=>{if(c){let u=getComputedStyle(c);o.current=u,l.current=No(u)}else o.current=null;a(c)},[])}}na(Qu,"usePresence");function tl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}na(tl,"setRef");function ec(...e){let t=Qe.useRef(e);return t.current=e,Qe.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=tl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():tl(o[l],null)}}},[])}na(ec,"useStableComposedRefs");function No(e){return e?.animationName||"none"}na(No,"getAnimationName");function tc(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}na(tc,"getElementRef");var ac=J(require("react"),1),cx=Object.defineProperty,ol=(e,t)=>cx(e,"name",{value:t,configurable:!0}),Rn=0,_o=null;function fx(e){return Sa(),e.children}ol(fx,"FocusGuards");function Sa(){ac.useEffect(()=>{_o||(_o={start:al(),end:al()});let{start:e,end:t}=_o;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Rn++,()=>{Rn===1&&(_o?.start.remove(),_o?.end.remove(),_o=null),Rn=Math.max(0,Rn-1)}},[])}ol(Sa,"useFocusGuards");function al(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}ol(al,"createFocusGuard");var mt=function(){return mt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},mt.apply(this,arguments)};function Pn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function oc(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var En=J(require("react"));var nt=J(require("react"));var Ka="right-scroll-bar-position",Xa="width-before-scroll-bar",rl="with-scroll-bars-hidden",nl="--removed-body-scroll-bar-size";function Dn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var rc=require("react");function nc(e,t){var a=(0,rc.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Mn=J(require("react"));var px=typeof window<"u"?Mn.useLayoutEffect:Mn.useEffect,sc=new WeakMap;function sl(e,t){var a=nc(t||null,function(o){return e.forEach(function(r){return Dn(r,o)})});return px(function(){var o=sc.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Dn(s,null)}),n.forEach(function(s){r.has(s)||Dn(s,l)})}sc.set(a,e)},[e]),a}function mx(e){return e}function gx(e,t){t===void 0&&(t=mx);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},d=function(){return Promise.resolve().then(i)};d(),a={push:function(c){l.push(c),d()},filter:function(c){return l=l.filter(c),a}}}};return r}function ll(e){e===void 0&&(e={});var t=gx(null);return t.options=mt({async:!0,ssr:!1},e),t}var lc=J(require("react")),ic=function(e){var t=e.sideCar,a=Pn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return lc.createElement(o,mt({},a))};ic.isSideCarExport=!0;function il(e,t){return e.useMedium(t),ic}var An=ll();var dl=function(){},Nr=nt.forwardRef(function(e,t){var a=nt.useRef(null),o=nt.useState({onScrollCapture:dl,onWheelCapture:dl,onTouchMoveCapture:dl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,d=e.removeScrollBar,c=e.enabled,u=e.shards,f=e.sideCar,p=e.noRelative,h=e.noIsolation,g=e.inert,m=e.allowPinchZoom,C=e.as,x=C===void 0?"div":C,L=e.gapMode,b=Pn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=f,I=sl([a,t]),k=mt(mt({},b),r);return nt.createElement(nt.Fragment,null,c&&nt.createElement(S,{sideCar:An,removeScrollBar:d,shards:u,noRelative:p,noIsolation:h,inert:g,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:L}),l?nt.cloneElement(nt.Children.only(s),mt(mt({},k),{ref:I})):nt.createElement(x,mt({},k,{className:i,ref:I}),s))});Nr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Nr.classNames={fullWidth:Xa,zeroRight:Ka};var Pe=J(require("react"));var Ho=J(require("react"));var cc=J(require("react"));var dc;var uc=function(){if(dc)return dc;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function hx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=uc();return t&&e.setAttribute("nonce",t),e}function xx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Lx(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ul=function(){var e=0,t=null;return{add:function(a){e==0&&(t=hx())&&(xx(t,a),Lx(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var cl=function(){var e=ul();return function(t,a){cc.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var _r=function(){var e=cl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Cx={left:0,top:0,right:0,gap:0},fl=function(e){return parseInt(e||"",10)||0},bx=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[fl(a),fl(o),fl(r)]},pl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Cx;var t=bx(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Ix=_r(),qo="data-scroll-locked",vx=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(rl,` {
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
  
  .`).concat(Ka,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Xa,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ka," .").concat(Ka,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Xa," .").concat(Xa,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(qo,`] {
    `).concat(nl,": ").concat(s,`px;
  }
`)},fc=function(){var e=parseInt(document.body.getAttribute(qo)||"0",10);return isFinite(e)?e:0},wx=function(){Ho.useEffect(function(){return document.body.setAttribute(qo,(fc()+1).toString()),function(){var e=fc()-1;e<=0?document.body.removeAttribute(qo):document.body.setAttribute(qo,e.toString())}},[])},ml=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;wx();var n=Ho.useMemo(function(){return pl(r)},[r]);return Ho.createElement(Ix,{styles:vx(n,!t,r,a?"":"!important")})};var gl=!1;if(typeof window<"u")try{qr=Object.defineProperty({},"passive",{get:function(){return gl=!0,!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{gl=!1}var qr,$a=gl?{passive:!1}:!1;var Sx=function(e){return e.tagName==="TEXTAREA"},pc=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Sx(e)&&a[t]==="visible")},yx=function(e){return pc(e,"overflowY")},kx=function(e){return pc(e,"overflowX")},hl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=mc(e,o);if(r){var n=gc(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Rx=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Px=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},mc=function(e,t){return e==="v"?yx(t):kx(t)},gc=function(e,t){return e==="v"?Rx(t):Px(t)},Dx=function(e,t){return e==="h"&&t==="rtl"?-1:1},hc=function(e,t,a,o,r){var n=Dx(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),d=!1,c=l>0,u=0,f=0;do{if(!s)break;var p=gc(e,s),h=p[0],g=p[1],m=p[2],C=g-m-n*h;(h||C)&&mc(e,s)&&(u+=C,f+=h);var x=s.parentNode;s=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(u)<1||!r&&l>u)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(d=!0),d};var Tn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},xc=function(e){return[e.deltaX,e.deltaY]},Lc=function(e){return e&&"current"in e?e.current:e},Mx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ax=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Tx=0,Uo=[];function Cc(e){var t=Pe.useRef([]),a=Pe.useRef([0,0]),o=Pe.useRef(),r=Pe.useState(Tx++)[0],n=Pe.useState(_r)[0],l=Pe.useRef(e);Pe.useEffect(function(){l.current=e},[e]),Pe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var g=oc([e.lockRef.current],(e.shards||[]).map(Lc),!0).filter(Boolean);return g.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),g.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=Pe.useCallback(function(g,m){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var C=Tn(g),x=a.current,L="deltaX"in g?g.deltaX:x[0]-C[0],b="deltaY"in g?g.deltaY:x[1]-C[1],S,I=g.target,k=Math.abs(L)>Math.abs(b)?"h":"v";if("touches"in g&&k==="h"&&I.type==="range")return!1;var y=window.getSelection(),E=y&&y.anchorNode,v=E?E===I||E.contains(I):!1;if(v)return!1;var R=hl(k,I);if(!R)return!0;if(R?S=k:(S=k==="v"?"h":"v",R=hl(k,I)),!R)return!1;if(!o.current&&"changedTouches"in g&&(L||b)&&(o.current=S),!S)return!0;var A=o.current||S;return hc(A,m,g,A==="h"?L:b,!0)},[]),i=Pe.useCallback(function(g){var m=g;if(!(!Uo.length||Uo[Uo.length-1]!==n)){var C="deltaY"in m?xc(m):Tn(m),x=t.current.filter(function(S){return S.name===m.type&&(S.target===m.target||m.target===S.shadowParent)&&Mx(S.delta,C)})[0];if(x&&x.should){m.cancelable&&m.preventDefault();return}if(!x){var L=(l.current.shards||[]).map(Lc).filter(Boolean).filter(function(S){return S.contains(m.target)}),b=L.length>0?s(m,L[0]):!l.current.noIsolation;b&&m.cancelable&&m.preventDefault()}}},[]),d=Pe.useCallback(function(g,m,C,x){var L={name:g,delta:m,target:C,should:x,shadowParent:Ex(C)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(b){return b!==L})},1)},[]),c=Pe.useCallback(function(g){a.current=Tn(g),o.current=void 0},[]),u=Pe.useCallback(function(g){d(g.type,xc(g),g.target,s(g,e.lockRef.current))},[]),f=Pe.useCallback(function(g){d(g.type,Tn(g),g.target,s(g,e.lockRef.current))},[]);Pe.useEffect(function(){return Uo.push(n),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:f}),document.addEventListener("wheel",i,$a),document.addEventListener("touchmove",i,$a),document.addEventListener("touchstart",c,$a),function(){Uo=Uo.filter(function(g){return g!==n}),document.removeEventListener("wheel",i,$a),document.removeEventListener("touchmove",i,$a),document.removeEventListener("touchstart",c,$a)}},[]);var p=e.removeScrollBar,h=e.inert;return Pe.createElement(Pe.Fragment,null,h?Pe.createElement(n,{styles:Ax(r)}):null,p?Pe.createElement(ml,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ex(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var bc=il(An,Cc);var Ic=En.forwardRef(function(e,t){return En.createElement(Nr,mt({},e,{ref:t,sideCar:bc}))});Ic.classNames=Nr.classNames;var ja=Ic;var Ox=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Wo=new WeakMap,On=new WeakMap,Fn={},xl=0,vc=function(e){return e&&(e.host||vc(e.parentNode))},Fx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=vc(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Bx=function(e,t,a,o){var r=Fx(t,Array.isArray(e)?e:[e]);Fn[a]||(Fn[a]=new WeakMap);var n=Fn[a],l=[],s=new Set,i=new Set(r),d=function(u){!u||s.has(u)||(s.add(u),d(u.parentNode))};r.forEach(d);var c=function(u){!u||i.has(u)||Array.prototype.forEach.call(u.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(o),h=p!==null&&p!=="false",g=(Wo.get(f)||0)+1,m=(n.get(f)||0)+1;Wo.set(f,g),n.set(f,m),l.push(f),g===1&&h&&On.set(f,!0),m===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(C){console.error("aria-hidden: cannot operate on ",f,C)}})};return c(t),s.clear(),xl++,function(){l.forEach(function(u){var f=Wo.get(u)-1,p=n.get(u)-1;Wo.set(u,f),n.set(u,p),f||(On.has(u)||u.removeAttribute(o),On.delete(u)),p||u.removeAttribute(a)}),xl--,xl||(Wo=new WeakMap,Wo=new WeakMap,On=new WeakMap,Fn={})}},zo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||Ox(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Bx(o,r,a,"aria-hidden")):function(){return null}};var _e=require("react/jsx-runtime"),Nx=Object.defineProperty,St=(e,t)=>Nx(e,"name",{value:t,configurable:!0}),Cl="Dialog",[wc,CS]=Je(Cl),[_x,jt]=wc(Cl),Sc=St(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=ye.useRef(null),i=ye.useRef(null),{nodes:d,registry:c}=Br(),[u,f]=$t({prop:o,defaultProp:r??!1,onChange:n,caller:Cl}),[p,h]=ye.useState(0),[g,m]=ye.useState(0);return(0,_e.jsx)(_x,{scope:t,triggerRef:s,contentRef:i,contentId:wt(),titleId:wt(),descriptionId:wt(),titlePresent:p>0,descriptionPresent:g>0,setTitleCount:h,setDescriptionCount:m,open:u,onOpenChange:f,onOpenToggle:ye.useCallback(()=>f(C=>!C),[f]),modal:l,branchNodes:d,branchRegistry:c,children:a})},"Dialog");var yc="DialogPortal",[qx,kc]=wc(yc,{forceMount:void 0}),Rc=St(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=jt(yc,t);return(0,_e.jsx)(qx,{scope:t,forceMount:a,children:ye.Children.map(o,l=>(0,_e.jsx)(sa,{present:a||n.open,children:(0,_e.jsx)(Bo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Ll="DialogOverlay",bl=ye.forwardRef(St(function(t,a){let o=kc(Ll,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=jt(Ll,t.__scopeDialog);return l.modal?(0,_e.jsx)(sa,{present:r||l.open,children:(0,_e.jsx)(Ux,{...n,ref:a})}):null},"DialogOverlay")),Hx=rt("DialogOverlay.RemoveScroll"),Ux=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=jt(Ll,o),l=Ks(),s=de(a,l);return(0,_e.jsx)(ja,{as:Hx,allowPinchZoom:!0,shards:ye.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,_e.jsx)(ue.div,{"data-state":Sl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),Hr="DialogContent",Il=ye.forwardRef(St(function(t,a){let o=kc(Hr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=jt(Hr,t.__scopeDialog);return(0,_e.jsx)(sa,{present:r||l.open,children:l.modal?(0,_e.jsx)(Wx,{...n,ref:a}):(0,_e.jsx)(zx,{...n,ref:a})})},"DialogContent")),Wx=ye.forwardRef(St(function(t,a){let o=jt(Hr,t.__scopeDialog),r=ye.useRef(null),n=de(a,o.contentRef,r);return ye.useEffect(()=>{let l=r.current;if(l)return zo(l)},[]),(0,_e.jsx)(Pc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:Q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:Q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),zx=ye.forwardRef(St(function(t,a){let o=jt(Hr,t.__scopeDialog),r=ye.useRef(!1),n=ye.useRef(!1);return(0,_e.jsx)(Pc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Pc=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:i,...d}=t,c=jt(Hr,o);return Sa(),(0,_e.jsx)(Fr,{registry:c.branchRegistry,children:(0,_e.jsx)(Fo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,_e.jsx)(Oo,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Mc(s,c.descriptionId):s,"data-state":Sl(c.open),...d,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),vl=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=jt("DialogTitle",o),{setTitleCount:l}=n;return pe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,_e.jsx)(ue.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),wl=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=jt("DialogDescription",o),{setDescriptionCount:l}=n;return pe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,_e.jsx)(ue.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Vx="DialogClose",Dc=ye.forwardRef(St(function(t,a){let{__scopeDialog:o,...r}=t,n=jt(Vx,o);return(0,_e.jsx)(ue.button,{type:"button",...r,ref:a,onClick:Q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Mc(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}St(Mc,"concatAriaDescribedby");function Sl(e){return e?"open":"closed"}St(Sl,"getState");var Tc=require("react"),yl="dsh-kanban",Ec={workspace:"\u5DE5\u4F5C\u533A",selectWorkspace:"\u9009\u62E9\u5DE5\u4F5C\u533A",selectWorkspaceHint:"\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u533A\uFF0C\u67E5\u770B\u548C\u7BA1\u7406\u5B83\u7684\u4EFB\u52A1\u3002",noWorkspaces:"\u6682\u65E0\u5DE5\u4F5C\u533A\uFF0C\u8BF7\u5148\u5728\u5DE6\u4FA7\u6DFB\u52A0\u5DE5\u4F5C\u533A\u3002",loadingWorkspaces:"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026",searchCards:"\u641C\u7D22\u4EFB\u52A1",cardNoLongerExists:"\u8FD9\u5F20\u5361\u7247\u5DF2\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4FEE\u6539\u3002",searchPlaceholder:"\u641C\u7D22\u6807\u9898\u3001\u63CF\u8FF0\u3001\u8BC4\u8BBA\u6216 ID\u2026",clearSearch:"\u6E05\u7A7A\u641C\u7D22",searchResults:"\u627E\u5230 {count} \u5F20\u5361\u7247",matchComment:"\u8BC4\u8BBA\u5339\u914D",matchDescription:"\u63CF\u8FF0\u5339\u914D",images:"\u56FE\u7247",discardImagesDesc:"\u672A\u4E0A\u4F20\u7684\u56FE\u7247\u548C\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u7EE7\u7EED\uFF1F",addImages:"\u6DFB\u52A0\u56FE\u7247",imagesEmpty:"\u7C98\u8D34\u622A\u56FE\u6216\u62D6\u5165\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u6587\u4EF6\u3002",imagesHint:"PNG\u3001JPEG\u3001WebP \xB7 \u6BCF\u5F20\u6700\u591A {size} MiB \xB7 \u6700\u591A {count} \u5F20",imagesSaveHint:"\u56FE\u7247\u6DFB\u52A0\u548C\u79FB\u9664\u540E\u7ACB\u5373\u4FDD\u5B58\u3002",imagesDraftHint:"\u521B\u5EFA\u4EFB\u52A1\u540E\u4E0A\u4F20\uFF0C\u53D6\u6D88\u65B0\u5EFA\u4E0D\u4F1A\u4FDD\u5B58\u56FE\u7247\u3002",imagesUnavailable:"\u6B64\u5DE5\u4F5C\u533A\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u56FE\u7247\u3002\u8BF7\u68C0\u67E5\u5DE5\u4F5C\u533A\u662F\u5426\u53EF\u5199\uFF0C\u4EE5\u53CA DSH \u662F\u5426\u652F\u6301\u56FE\u7247\u3002",imageUploading:"\u6B63\u5728\u4E0A\u4F20\u2026",imagePending:"\u7B49\u5F85\u521B\u5EFA\u4EFB\u52A1",imageLoadFailed:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",loadingImage:"\u52A0\u8F7D\u56FE\u7247\u2026",imageUploadFailed:"\u4E0A\u4F20\u5931\u8D25",imageUploadPartial:"\u4EFB\u52A1\u5DF2\u4FDD\u5B58\uFF0C\u90E8\u5206\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageInvalidType:"\u8BF7\u9009\u62E9 PNG\u3001JPEG \u6216 WebP \u56FE\u7247\u3002",imageTooLarge:"\u56FE\u7247\u4E3A\u7A7A\u6216\u8D85\u8FC7 {size} MiB\u3002",imageTooMany:"\u6BCF\u5F20\u5361\u7247\u6700\u591A\u6DFB\u52A0 {count} \u5F20\u56FE\u7247\u3002",imagePreview:"\u67E5\u770B\u56FE\u7247 {number}",imageRemove:"\u79FB\u9664\u56FE\u7247 {number}",imageRemoveFailed:"\u56FE\u7247\u79FB\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageRemoving:"\u6B63\u5728\u79FB\u9664\u2026",retry:"\u91CD\u8BD5",remove:"\u79FB\u9664",imagesChatHint:"\u6B64\u4EFB\u52A1\u7684 {count} \u5F20\u56FE\u7247\u5DF2\u9644\u5728\u804A\u5929\u8349\u7A3F\u4E2D\u3002",chatImagesUnavailable:"\u5F53\u524D DSH \u65E0\u6CD5\u6DFB\u52A0\u804A\u5929\u56FE\u7247\u9644\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u540E\u91CD\u8BD5\u3002",chatImagesBusy:"\u804A\u5929\u6846\u6B63\u5728\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",actImageAdded:"\u6DFB\u52A0\u4E86\u56FE\u7247",actImageRemoved:"\u79FB\u9664\u4E86\u56FE\u7247",boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldDueDate:"\u622A\u6B62\u65E5\u671F",fieldCompletedDate:"\u5B8C\u6210\u65E5\u671F",completedDateUnknown:"\u672A\u77E5",completedDateUnknownHint:"\u8FD9\u5F20\u5361\u7247\u6CA1\u6709\u5B8C\u6210\u65F6\u95F4\u8BB0\u5F55\u3002",today:"\u4ECA\u5929",tomorrow:"\u660E\u5929",nextWeek:"\u4E00\u5468\u540E",clearDate:"\u6E05\u9664\u65E5\u671F",dueToday:"\u4ECA\u5929\u5230\u671F",overdue:"\u5DF2\u903E\u671F",overdueDays:"\u5DF2\u903E\u671F {days} \u5929",shortDate:"{month}\u6708{day}\u65E5",yearDate:"{year}\u5E74{month}\u6708{day}\u65E5",dueDateFilter:"\u6309\u622A\u6B62\u65E5\u671F\u7B5B\u9009",completedColumn:"\u5B8C\u6210\u5217",noCompletedColumn:"\u672A\u8BBE\u7F6E",completedColumnHint:"\u79FB\u5165\u6B64\u5217\u7684\u4EFB\u52A1\u89C6\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u8BA1\u5165\u5230\u671F\u548C\u903E\u671F\u7B5B\u9009\u3002\u66F4\u6362\u5B8C\u6210\u5217\u540E\uFF0C\u65B0\u5B8C\u6210\u5217\u4E2D\u5DF2\u6709\u5361\u7247\u7684\u5B8C\u6210\u65E5\u671F\u5C06\u663E\u793A\u4E3A\u672A\u77E5\u3002",completed:"\u5DF2\u5B8C\u6210",incomplete:"\u672A\u5B8C\u6210",completionStatus:"\u5B8C\u6210\u72B6\u6001",feedback:"\u53CD\u9988\u4E0E\u5EFA\u8BAE \xB7 GitHub",actDueDate:"\u622A\u6B62\u65E5\u671F {from} \u2192 {to}",actCompletedColumn:"\u5B8C\u6210\u5217 {from} \u2192 {to}",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u521B\u5EFA\u65B0\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u52A8\u5DE6\u4FA7\u8C03\u6574\u987A\u5E8F\uFF0C\u540D\u79F0\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLists:"\u770B\u677F\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u70B9\u51FB\u540D\u79F0\u6216\u8272\u70B9\u7F16\u8F91\uFF0C\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLabels:"\u4EFB\u52A1\u6807\u7B7E",noLabelsHint:"\u6682\u65E0\u6807\u7B7E\uFF0C\u5728\u4E0B\u65B9\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u3002",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Kx={workspace:"Workspace",selectWorkspace:"Select workspace",selectWorkspaceHint:"Select a workspace to view and manage its tasks.",noWorkspaces:"No workspaces yet. Add one in the sidebar first.",loadingWorkspaces:"Loading workspaces\u2026",searchCards:"Search tasks",cardNoLongerExists:"This card was deleted. Changes cannot be saved.",searchPlaceholder:"Search titles, descriptions, comments or IDs\u2026",clearSearch:"Clear search",searchResults:"{count} matching cards",matchComment:"Comment match",matchDescription:"Description match",images:"Images",discardImagesDesc:"Pending images and unsent comments will not be included. Discard them and continue?",addImages:"Add images",imagesEmpty:"Paste a screenshot, drop images here, or choose files.",imagesHint:"PNG, JPEG, WebP \xB7 Up to {size} MiB each \xB7 {count} images per card",imagesSaveHint:"Adding and removing images saves immediately.",imagesDraftHint:"Images upload after the task is created. Canceling saves nothing.",imagesUnavailable:"Images cannot be saved here. Check that the workspace is writable and DSH supports images.",imageUploading:"Uploading\u2026",imagePending:"Waiting for task creation",imageLoadFailed:"Image failed to load",loadingImage:"Loading image\u2026",imageUploadFailed:"Upload failed",imageUploadPartial:"Task saved. Some image uploads failed; retry them below.",imageInvalidType:"Choose a PNG, JPEG or WebP image.",imageTooLarge:"Image is empty or exceeds {size} MiB.",imageTooMany:"A card can have at most {count} images.",imagePreview:"View image {number}",imageRemove:"Remove image {number}",imageRemoveFailed:"Could not remove the image. Try again.",imageRemoving:"Removing\u2026",retry:"Retry",remove:"Remove",imagesChatHint:"The task\u2019s {count} images are attached to this draft.",chatImagesUnavailable:"This DSH cannot add chat image attachments. Please upgrade and retry.",chatImagesBusy:"The composer is sending. Please retry shortly.",actImageAdded:"Added an image",actImageRemoved:"Removed an image",boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldDueDate:"Due date",fieldCompletedDate:"Completed at",completedDateUnknown:"Unknown",completedDateUnknownHint:"No completion time was recorded for this card.",today:"Today",tomorrow:"Tomorrow",nextWeek:"In one week",clearDate:"Clear date",dueToday:"Due today",overdue:"Overdue",overdueDays:"Overdue by {days} days",shortDate:"{month}/{day}",yearDate:"{year}/{month}/{day}",dueDateFilter:"Filter by due date",completedColumn:"Completed list",noCompletedColumn:"Not set",completedColumnHint:"Tasks in this list are complete and excluded from due and overdue filters. Changing this list resets completion dates; cards already in the new list will show an unknown completion date.",completed:"Completed",incomplete:"Incomplete",completionStatus:"Completion status",feedback:"Feedback \xB7 GitHub",actDueDate:"Due date {from} \u2192 {to}",actCompletedColumn:"Completed list {from} \u2192 {to}",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Create new conversation",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder. Name changes save automatically.",boardLists:"Board lists",newColumnPlaceholder:"New list name",labelEditDesc:"Edit a name or color. Changes save automatically.",boardLabels:"Task labels",noLabelsHint:"No labels yet. Add your first one below.",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ya=null,kl=null;function Oc(e){let t=e.get("locale");t!==void 0&&(Ya=t,e.effect(()=>t.register(yl,"zh",Ec),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(yl,"en",Kx),"dsh-kanban: English dictionary"),kl=t.bind(yl))}function it(e){return kl?kl(e):Ec[e]??e}var Xx=e=>Ya&&typeof Ya.subscribe=="function"?Ya.subscribe(e):()=>{},Ac=()=>Ya&&typeof Ya.getSnapshot=="function"?Ya.getSnapshot():null;function ke(){return(0,Tc.useSyncExternalStore)(Xx,Ac,Ac),it}var gt=require("react/jsx-runtime"),Vo=Sc;var $x=Rc;var Fc=Ur.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(bl,{ref:a,className:ie("kanban-portal kanban-dialog-overlay",e),...t}));Fc.displayName=bl.displayName;var Wr=Ur.forwardRef(({className:e,children:t,...a},o)=>{let r=ke();return(0,gt.jsxs)($x,{children:[(0,gt.jsx)(Fc,{}),(0,gt.jsxs)(Il,{ref:o,className:ie("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,gt.jsxs)(Dc,{className:"kanban-dialog-close",children:[(0,gt.jsx)(lt,{className:"kanban-dialog-close-icon"}),(0,gt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Wr.displayName=Il.displayName;var Za=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-header",e),...t});Za.displayName="DialogHeader";var Ja=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-body",e),...t});Ja.displayName="DialogBody";var Qa=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-footer",e),...t});Qa.displayName="DialogFooter";var eo=Ur.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(vl,{ref:a,className:ie("kanban-dialog-title",e),...t}));eo.displayName=vl.displayName;var zr=Ur.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(wl,{ref:a,className:ie("kanban-dialog-description",e),...t}));zr.displayName=wl.displayName;var dt=J(require("react"),1);var Nc=require("react-dom"),_c=require("@deepseek-ai/dsh-client-ui-primitives");var yt=require("react/jsx-runtime"),qc="dsh-kanban:card-drawer-width",jx=720,Rl=420;function Yx(){try{let e=Number(window.localStorage.getItem(qc));if(Number.isFinite(e)&&e>0)return e}catch{}return jx}function Bc(e){try{window.localStorage.setItem(qc,String(e))}catch{}}var Pl=dt.forwardRef(({open:e,onClose:t,title:a,className:o,children:r,id:n,style:l,...s},i)=>{let d=dt.useRef(null);dt.useImperativeHandle(i,()=>d.current,[e]),(0,_c.useModalLayer)(d,e,t);let c=ke(),u=dt.useId(),f=n??u,p=`${u}-resize-hint`,[h,g]=dt.useState(Yx),[m,C]=dt.useState(()=>window.innerWidth),[x,L]=dt.useState(!1),b=dt.useRef(null),S=m<=600,I=Math.min(1e3,m-64),k=v=>Math.max(Rl,Math.min(I,v)),y=S?m:k(h);dt.useEffect(()=>{let v=()=>{b.current&&(g(b.current.preferredWidth),b.current=null,L(!1)),C(window.innerWidth)};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);function E(v,R){let A=b.current;!A||A.pointerId!==v.pointerId||(b.current=null,L(!1),R?g(A.preferredWidth):Bc(A.lastWidth),v.currentTarget.hasPointerCapture(v.pointerId)&&v.currentTarget.releasePointerCapture(v.pointerId))}return e?(0,Nc.createPortal)((0,yt.jsxs)(yt.Fragment,{children:[(0,yt.jsx)("div",{className:"kanban-portal kanban-dialog-overlay","aria-hidden":"true",onClick:t}),(0,yt.jsxs)("div",{...s,ref:d,role:"dialog","aria-modal":"true","aria-label":a,tabIndex:-1,"data-state":"open",id:f,className:ie("kanban-portal kanban-dialog-content kanban-drawer-content",o),style:{...l,width:y},"data-resizing":x||void 0,children:[r,!S&&(0,yt.jsxs)(yt.Fragment,{children:[(0,yt.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":c("resizeTaskDetails"),"aria-describedby":p,"aria-orientation":"vertical","aria-valuemin":Rl,"aria-valuemax":I,"aria-valuenow":y,"aria-controls":f,title:c("resizeTaskDetailsHint"),onPointerDown:v=>{v.button!==0||b.current||(v.preventDefault(),v.currentTarget.focus(),v.currentTarget.setPointerCapture(v.pointerId),b.current={pointerId:v.pointerId,x:v.clientX,width:y,preferredWidth:h,lastWidth:y},L(!0))},onPointerMove:v=>{let R=b.current;if(!R||R.pointerId!==v.pointerId)return;let A=k(R.width+R.x-v.clientX);R.lastWidth=A,g(A)},onPointerUp:v=>E(v,!1),onPointerCancel:v=>E(v,!0),onLostPointerCapture:v=>E(v,!0),onKeyDown:v=>{let R;if(v.key==="ArrowLeft")R=k(y+32);else if(v.key==="ArrowRight")R=k(y-32);else if(v.key==="Home")R=Rl;else if(v.key==="End")R=I;else return;v.preventDefault(),g(R),Bc(R)}}),(0,yt.jsx)("span",{id:p,className:"kanban-sr-only",children:c("resizeTaskDetailsHint")})]}),(0,yt.jsx)("button",{type:"button",className:"kanban-dialog-close","aria-label":c("close"),onClick:t,children:(0,yt.jsx)(lt,{className:"kanban-dialog-close-icon"})})]})]}),document.body):null});Pl.displayName="DrawerContent";var Hc=J(require("react"),1);var Uc=require("react/jsx-runtime"),Ot=Hc.forwardRef(({className:e,type:t,...a},o)=>(0,Uc.jsx)("input",{type:t,className:ie("kanban-input",e),ref:o,...a}));Ot.displayName="Input";var Vc=J(require("react"),1);var Wc=J(require("react"),1);var zc=require("react/jsx-runtime"),Zx=Object.defineProperty,Jx=(e,t)=>Zx(e,"name",{value:t,configurable:!0}),Dl=Wc.forwardRef(Jx(function(t,a){return(0,zc.jsx)(ue.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var Gc=require("react/jsx-runtime"),ut=Vc.forwardRef(({className:e,...t},a)=>(0,Gc.jsx)(Dl,{ref:a,className:ie("kanban-label",e),...t}));ut.displayName=Dl.displayName;var Da=J(require("react"),1);var _=J(require("react"),1),Wl=J(require("react-dom"),1);var eL=Object.defineProperty,tL=(e,t)=>eL(e,"name",{value:t,configurable:!0});function Bn(e,[t,a]){return Math.min(a,Math.max(t,e))}tL(Bn,"clamp");var Nt=J(require("react"),1);var _n=require("react/jsx-runtime"),ze=J(require("react"),1);var ya=require("react/jsx-runtime");var aL=Object.defineProperty,We=(e,t)=>aL(e,"name",{value:t,configurable:!0});function to(e){let t=e+"CollectionProvider",[a,o]=Je(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=We(g=>{let{scope:m,children:C}=g,x=Nt.useRef(null),L=Nt.useRef(new Map).current;return(0,_n.jsx)(r,{scope:m,itemMap:L,collectionRef:x,children:C})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=rt(s),d=Nt.forwardRef((g,m)=>{let{scope:C,children:x}=g,L=n(s,C),b=de(m,L.collectionRef);return(0,_n.jsx)(i,{ref:b,children:x})});d.displayName=s;let c=e+"CollectionItemSlot",u="data-radix-collection-item",f=rt(c),p=Nt.forwardRef((g,m)=>{let{scope:C,children:x,...L}=g,b=Nt.useRef(null),S=de(m,b),I=n(c,C);return Nt.useEffect(()=>(I.itemMap.set(b,{ref:b,...L}),()=>{I.itemMap.delete(b)})),(0,_n.jsx)(f,{[u]:"",ref:S,children:x})});p.displayName=c;function h(g){let m=n(e+"CollectionConsumer",g);return Nt.useCallback(()=>{let x=m.collectionRef.current;if(!x)return[];let L=Array.from(x.querySelectorAll(`[${u}]`));return Array.from(m.itemMap.values()).sort((I,k)=>L.indexOf(I.ref.current)-L.indexOf(k.ref.current))},[m.collectionRef,m.itemMap])}return We(h,"useCollection"),[{Provider:l,Slot:d,ItemSlot:p},h,o]}We(to,"createCollection");var Kc=new WeakMap,Fe,kt,Nn=(kt=class extends Map{constructor(a){super(a);Bi(this,Fe);vs(this,Fe,[...super.keys()]),Kc.set(this,!0)}set(a,o){return Kc.get(this)&&!this.has(a)&&Ye(this,Fe).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=Ml(a),i=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?Ye(this,Fe).indexOf(o)===i:i===this.size)return this.set(o,r),this;let d=Ye(this,Fe).filter(u=>u!==o);d.splice(i,0,o);let c=d.map(u=>[u,u===o?r:this.get(u)]);this.clear();for(let[u,f]of c)this.set(u,f);return this}with(a,o,r){let n=new kt(this);return n.insert(a,o,r),n}before(a){let o=Ye(this,Fe).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ye(this,Fe).indexOf(a);if(n===-1)return this;let l=Ye(this,Fe).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=Ye(this,Fe).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ye(this,Fe).indexOf(a);if(n===-1)return this;let l=Ye(this,Fe).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return vs(this,Fe,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ye(this,Fe).splice(Ye(this,Fe).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=qn(Ye(this,Fe),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=qn(Ye(this,Fe),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ye(this,Fe).indexOf(a)}keyAt(a){return qn(Ye(this,Fe),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new kt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new kt(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let i of this)l===0&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let i=this.entryAt(s);s===this.size-1&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new kt(o)}toReversed(){let a=new kt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new kt(o)}slice(a,o){let r=new kt;for(let n of Ye(this,Fe).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Fe=new WeakMap,We(kt,"OrderedDict"),kt);function qn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Xc(e,t);return a===-1?void 0:e[a]}We(qn,"at");function Xc(e,t){let a=e.length,o=Ml(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}We(Xc,"toSafeIndex");function Ml(e){return e!==e||e===0?0:Math.trunc(e)}We(Ml,"toSafeInteger");function oL(e){let t=e+"CollectionProvider",[a,o]=Je(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let i=We(({state:I,...k})=>I?(0,ya.jsx)(c,{...k,state:I}):(0,ya.jsx)(d,{...k}),"CollectionProvider");i.displayName=t;let d=We(I=>{let k=x();return(0,ya.jsx)(c,{...I,state:k})},"CollectionInit");d.displayName=e+"CollectionInit";let c=We(I=>{let{scope:k,children:y,state:E}=I,v=ze.useRef(null),[R,A]=ze.useState(null),q=de(v,A),[T,V]=E,W=ze.useRef(new Nn),P=ze.useCallback(()=>{let N=W.current;return Yc(N)||N.sort(Hn),N},[]);return ze.useEffect(()=>{if(!R)return;let N=Zc(()=>{V(K=>{let G=K.toSorted(Hn);return G.some(([Y],ge)=>K.keyAt(ge)!==Y)?G:K})});return N.observe(R,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[R,V]),(0,ya.jsx)(r,{scope:k,collectionElementRef:q,collectionElementRefObject:v,getCollection:P,setCollection:V,registryRef:W,children:(0,ya.jsx)(l,{scope:k,collectionElement:R,collection:T,children:y})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let u=e+"CollectionSlot",f=rt(u),p=ze.forwardRef((I,k)=>{let{scope:y,children:E}=I,v=n(u,y),R=de(k,v.collectionElementRef);return(0,ya.jsx)(f,{ref:R,children:E})});p.displayName=u;let h=e+"CollectionItemSlot",g="data-radix-collection-item",m=rt(h),C=ze.forwardRef((I,k)=>{let{scope:y,children:E,...v}=I,R=ze.useRef(null),A=n(h,y),{setCollection:q,registryRef:T}=A,V=ze.useRef(v);$c(V.current,v)||(V.current=v);let W=V.current,P=ze.useCallback(G=>{let j=T.current;G?j.set(G,{...V.current,element:G}):R.current&&j.delete(R.current)},[T]),N=de(k,P,R);pe(()=>{let G=R.current,j=T.current;G&&j.has(G)&&j.set(G,{...W,element:G})},[W,T]);let K=ze.useRef(null);return ze.useEffect(()=>{let G=R.current,j=K.current;(j?.element??null)===G&&(!G||j?.itemData===W)||(K.current=G?{element:G,itemData:W}:null,q(Y=>{let ge=new Nn(Y);return j&&j.element!==G&&ge.delete(j.element),G&&ge.set(G,{...W,element:G}),ge.sort(Hn)}))}),ze.useEffect(()=>()=>{let G=K.current;K.current=null,G&&q(j=>{if(!j.has(G.element))return j;let Y=new Nn(j);return Y.delete(G.element),Y})},[q]),(0,ya.jsx)(m,{[g]:"",ref:N,children:E})});C.displayName=h;function x(){return ze.useState(new Nn)}We(x,"useInitCollection");function L(I){let{collection:k}=s(e+"CollectionConsumer",I);return k}We(L,"useCollection");function b(I){let{getCollection:k}=n(e+"CollectionConsumer",I);return k}return We(b,"useGetCollection"),[{Provider:i,Slot:p,ItemSlot:C},{createCollectionScope:o,useCollection:L,useGetCollection:b,useInitCollection:x}]}We(oL,"createCollection");function $c(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}We($c,"shallowEqual");function jc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}We(jc,"isElementPreceding");function Yc(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}We(Yc,"isInDocumentOrder");function Hn(e,t){return!e[1].element||!t[1].element?0:jc(e[1].element,t[1].element)?-1:1}We(Hn,"sortByDocumentPosition");function Zc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}We(Zc,"getChildListObserver");var Un=J(require("react"),1),sL=require("react/jsx-runtime"),rL=Object.defineProperty,nL=(e,t)=>rL(e,"name",{value:t,configurable:!0}),lL={LTR:"ltr",RTL:"rtl"},iL=Un.createContext(void 0);function ao(e){let t=Un.useContext(iL);return e||t||lL.LTR}nL(ao,"useDirection");var st=J(require("react"),1);var ef=["top","right","bottom","left"];var Yt=Math.min,_t=Math.max,Gr=Math.round,Kr=Math.floor,Zt=e=>({x:e,y:e}),dL={left:"right",right:"left",bottom:"top",top:"bottom"};function Al(e,t,a){return _t(e,Yt(t,a))}function Jt(e,t){return typeof e=="function"?e(t):e}function la(e){return e.split("-")[0]}function oo(e){return e.split("-")[1]}function zn(e){return e==="x"?"y":"x"}function Vn(e){return e==="y"?"height":"width"}function qt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function Gn(e){return zn(qt(e))}function tf(e,t,a){a===void 0&&(a=!1);let o=oo(e),r=Gn(e),n=Vn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Vr(l)),[l,Vr(l)]}function af(e){let t=Vr(e);return[Wn(e),t,Wn(t)]}function Wn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Jc=["left","right"],Qc=["right","left"],uL=["top","bottom"],cL=["bottom","top"];function fL(e,t,a){switch(e){case"top":case"bottom":return a?t?Qc:Jc:t?Jc:Qc;case"left":case"right":return t?uL:cL;default:return[]}}function of(e,t,a,o){let r=oo(e),n=fL(la(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(Wn)))),n}function Vr(e){let t=la(e);return dL[t]+e.slice(t.length)}function pL(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Tl(e){return typeof e!="number"?pL(e):{top:e,right:e,bottom:e,left:e}}function ro(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function rf(e,t,a){let{reference:o,floating:r}=e,n=qt(t),l=Gn(t),s=Vn(l),i=la(t),d=n==="y",c=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,p;switch(i){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-r.width,y:u};break;default:p={x:o.x,y:o.y}}let h=oo(t);return h&&(p[l]+=f*(h==="end"?1:-1)*(a&&d?-1:1)),p}async function lf(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=Jt(t,e),h=Tl(p),m=s[f?u==="floating"?"reference":"floating":u],C=ro(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:d,rootBoundary:c,strategy:i})),x=u==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),b=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},S=ro(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:x,offsetParent:L,strategy:i}):x);return{top:(C.top-S.top+h.top)/b.y,bottom:(S.bottom-C.bottom+h.bottom)/b.y,left:(C.left-S.left+h.left)/b.x,right:(S.right-C.right+h.right)/b.x}}var mL=50,df=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:lf},i=await(l.isRTL==null?void 0:l.isRTL(t)),d=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:u}=rf(d,o,i),f=o,p=0,h={};for(let g=0;g<n.length;g++){let m=n[g];if(!m)continue;let{name:C,fn:x}=m,{x:L,y:b,data:S,reset:I}=await x({x:c,y:u,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:d,platform:s,elements:{reference:e,floating:t}});c=L??c,u=b??u,h[C]={...h[C],...S},I&&p<mL&&(p++,typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(d=I.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):I.rects),{x:c,y:u}=rf(d,f,i)),g=-1)}return{x:c,y:u,placement:f,strategy:r,middlewareData:h}},uf=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:d,padding:c=0}=Jt(e,t)||{};if(d==null)return{};let u=Tl(c),f={x:a,y:o},p=Gn(r),h=Vn(p),g=await l.getDimensions(d),m=p==="y",C=m?"top":"left",x=m?"bottom":"right",L=m?"clientHeight":"clientWidth",b=n.reference[h]+n.reference[p]-f[p]-n.floating[h],S=f[p]-n.reference[p],I=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d)),k=I?I[L]:0;(!k||!await(l.isElement==null?void 0:l.isElement(I)))&&(k=s.floating[L]||n.floating[h]);let y=b/2-S/2,E=k/2-g[h]/2-1,v=Yt(u[C],E),R=Yt(u[x],E),A=k-g[h]-R,q=k/2-g[h]/2+y,T=Al(v,q,A),V=!i.arrow&&oo(r)!=null&&q!==T&&n.reference[h]/2-(q<v?v:R)-g[h]/2<0,W=V?q<v?q-v:q-A:0;return{[p]:f[p]+W,data:{[p]:T,centerOffset:q-T-W,...V&&{alignmentOffset:W}},reset:V}}});var cf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:d}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...m}=Jt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let C=la(r),x=qt(s),L=la(s)===s,b=await(i.isRTL==null?void 0:i.isRTL(d.floating)),S=f||(L||!g?[Vr(s)]:af(s)),I=h!=="none";!f&&I&&S.push(...of(s,g,h,b));let k=[s,...S],y=await i.detectOverflow(t,m),E=[],v=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&E.push(y[C]),u){let T=tf(r,l,b);E.push(y[T[0]],y[T[1]])}if(v=[...v,{placement:r,overflows:E}],!E.every(T=>T<=0)){var R,A;let T=(((R=n.flip)==null?void 0:R.index)||0)+1,V=k[T];if(V&&(!(u==="alignment"?x!==qt(V):!1)||v.every(N=>qt(N.placement)===x?N.overflows[0]>0:!0)))return{data:{index:T,overflows:v},reset:{placement:V}};let W=(A=v.filter(P=>P.overflows[0]<=0).sort((P,N)=>P.overflows[1]-N.overflows[1])[0])==null?void 0:A.placement;if(!W)switch(p){case"bestFit":{var q;let P=(q=v.filter(N=>{if(I){let K=qt(N.placement);return K===x||K==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(K=>K>0).reduce((K,G)=>K+G,0)]).sort((N,K)=>N[1]-K[1])[0])==null?void 0:q[0];P&&(W=P);break}case"initialPlacement":W=s;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function nf(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function sf(e){return ef.some(t=>e[t]>=0)}var ff=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Jt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=nf(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:sf(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=nf(l,a.floating);return{data:{escapedOffsets:s,escaped:sf(s)}}}default:return{}}}}};var pf=new Set(["left","top"]);async function gL(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=la(a),s=oo(a),i=qt(a)==="y",d=pf.has(l)?-1:1,c=n&&i?-1:1,u=Jt(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return s&&typeof h=="number"&&(p=s==="end"?h*-1:h),i?{x:p*c,y:f*d}:{x:f*d,y:p*c}}var mf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await gL(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},gf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:x=>{let{x:L,y:b}=x;return{x:L,y:b}}},...d}=Jt(e,t),c={x:a,y:o},u=await n.detectOverflow(t,d),f=qt(r),p=zn(f),h=c[p],g=c[f],m=(x,L)=>Al(L+u[x==="y"?"top":"left"],L,L-u[x==="y"?"bottom":"right"]);l&&(h=m(p,h)),s&&(g=m(f,g));let C=i.fn({...t,[p]:h,[f]:g});return{...C,data:{x:C.x-a,y:C.y-o,enabled:{[p]:l,[f]:s}}}}}},hf=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:d=0,mainAxis:c=!0,crossAxis:u=!0}=Jt(e,t),f={x:r,y:n},p=qt(l),h=zn(p),g=f[h],m=f[p],C=Jt(d,t),x=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:(a=C.mainAxis)!=null?a:0,crossAxis:(o=C.crossAxis)!=null?o:0};if(c){let S=h==="y"?"height":"width",I=s.reference[h]-s.floating[S]+x.mainAxis,k=s.reference[h]+s.reference[S]-x.mainAxis;g<I?g=I:g>k&&(g=k)}if(u){var L,b;let S=h==="y"?"width":"height",I=pf.has(la(l)),k=s.reference[p]-s.floating[S]+(I&&((L=i.offset)==null?void 0:L[p])||0)+(I?0:x.crossAxis),y=s.reference[p]+s.reference[S]+(I?0:((b=i.offset)==null?void 0:b[p])||0)-(I?x.crossAxis:0);m<k?m=k:m>y&&(m=y)}return{[h]:g,[p]:m}}}},xf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Jt(e,t),i=await r.detectOverflow(t,s),d=la(a),c=oo(a),u=qt(a)==="y",{width:f,height:p}=o.floating,h,g;d==="top"||d==="bottom"?(h=d,g=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(g=d,h=c==="end"?"top":"bottom");let m=p-i.top-i.bottom,C=f-i.left-i.right,x=Yt(p-i[h],m),L=Yt(f-i[g],C),b=t.middlewareData.shift,S=!b,I=x,k=L;b!=null&&b.enabled.x&&(k=C),b!=null&&b.enabled.y&&(I=m),S&&!c&&(u?k=f-2*_t(i.left,i.right):I=p-2*_t(i.top,i.bottom)),await l({...t,availableWidth:k,availableHeight:I});let y=await r.getDimensions(n.floating);return f!==y.width||p!==y.height?{reset:{rects:!0}}:{}}}};function Kn(){return typeof window<"u"}function lo(e){return Cf(e)?(e.nodeName||"").toLowerCase():"#document"}function ct(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qt(e){var t;return(t=(Cf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cf(e){return Kn()?e instanceof Node||e instanceof ct(e).Node:!1}function Ht(e){return Kn()?e instanceof Element||e instanceof ct(e).Element:!1}function ia(e){return Kn()?e instanceof HTMLElement||e instanceof ct(e).HTMLElement:!1}function Lf(e){return!Kn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ct(e).ShadowRoot}function Xr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Ut(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function bf(e){return/^(table|td|th)$/.test(lo(e))}function $r(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var hL=/transform|translate|scale|rotate|perspective|filter/,xL=/paint|layout|strict|content/,no=e=>!!e&&e!=="none",El;function Xn(e){let t=Ht(e)?Ut(e):e;return no(t.transform)||no(t.translate)||no(t.scale)||no(t.rotate)||no(t.perspective)||!$n()&&(no(t.backdropFilter)||no(t.filter))||hL.test(t.willChange||"")||xL.test(t.contain||"")}function If(e){let t=ka(e);for(;ia(t)&&!Go(t);){if(Xn(t))return t;if($r(t))return null;t=ka(t)}return null}function $n(){return El==null&&(El=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),El}function Go(e){return/^(html|body|#document)$/.test(lo(e))}function Ut(e){return ct(e).getComputedStyle(e)}function jr(e){return Ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ka(e){if(lo(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Lf(e)&&e.host||Qt(e);return Lf(t)?t.host:t}function vf(e){let t=ka(e);return Go(t)?(e.ownerDocument||e).body:ia(t)&&Xr(t)?t:vf(t)}function so(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=vf(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=ct(r);if(n){let s=jn(l);return t.concat(l,l.visualViewport||[],Xr(r)?r:[],s&&a?so(s):[])}else return t.concat(r,so(r,[],a))}function jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yf(e){let t=Ut(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ia(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Gr(a)!==n||Gr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function Fl(e){return Ht(e)?e:e.contextElement}function Ko(e){let t=Fl(e);if(!ia(t))return Zt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=yf(t),l=(n?Gr(a.width):a.width)/o,s=(n?Gr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var LL=Zt(0);function kf(e){let t=ct(e);return!$n()||!t.visualViewport?LL:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function CL(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===ct(e)}function io(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=Fl(e),l=Zt(1);t&&(o?Ht(o)&&(l=Ko(o)):l=Ko(e));let s=CL(n,a,o)?kf(n):Zt(0),i=(r.left+s.x)/l.x,d=(r.top+s.y)/l.y,c=r.width/l.x,u=r.height/l.y;if(n&&o){let f=ct(n),p=Ht(o)?ct(o):o,h=f,g=jn(h);for(;g&&p!==h;){let m=Ko(g),C=g.getBoundingClientRect(),x=Ut(g),L=C.left+(g.clientLeft+parseFloat(x.paddingLeft))*m.x,b=C.top+(g.clientTop+parseFloat(x.paddingTop))*m.y;i*=m.x,d*=m.y,c*=m.x,u*=m.y,i+=L,d+=b,h=ct(g),g=jn(h)}}return ro({width:c,height:u,x:i,y:d})}function Yn(e,t){let a=jr(e).scrollLeft;return t?t.left+a:io(Qt(e)).left+a}function Rf(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Yn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function bL(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Qt(o),s=t?$r(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},d=Zt(1),c=Zt(0),u=ia(o);if((u||!n)&&((lo(o)!=="body"||Xr(l))&&(i=jr(o)),u)){let p=io(o);d=Ko(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=l&&!u&&!n?Rf(l,i):Zt(0);return{width:a.width*d.x,height:a.height*d.y,x:a.x*d.x-i.scrollLeft*d.x+c.x+f.x,y:a.y*d.y-i.scrollTop*d.y+c.y+f.y}}function IL(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function vL(e){let t=jr(e),a=e.ownerDocument.body,o=_t(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=_t(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Yn(e),l=-t.scrollTop;return Ut(a).direction==="rtl"&&(n+=_t(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var wL=25;function SL(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=ct(e),n=Qt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,d=0,c=0;if(l){let f=!$n()||t==="fixed";o?f||(d=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(d=l.offsetLeft,c=l.offsetTop))}if(Yn(n)<=0){let f=n.ownerDocument,p=f.body,h=getComputedStyle(p),g=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,m=Math.abs(n.clientWidth-p.clientWidth-g),C=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;C<=wL&&(s-=C)}return{width:s,height:i,x:d,y:c}}function yL(e,t){let a=io(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Ko(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,d=o*n.y;return{width:l,height:s,x:i,y:d}}function wf(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=SL(e,a,t);else if(t==="document")o=vL(Qt(e));else if(Ht(t))o=yL(t,a);else{let r=kf(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return ro(o)}function kL(e,t){let a=t.get(e);if(a)return a;let o=so(e,[],!1).filter(s=>Ht(s)&&lo(s)!=="body"),r=null,n=Ut(e).position==="fixed",l=n?ka(e):e;for(;Ht(l)&&!Go(l);){let s=Ut(l),i=Xn(l),d=r?r.position:n?"fixed":"";!i&&(d==="fixed"||d==="absolute"&&s.position==="static")?o=o.filter(u=>u!==l):r=s,l=ka(l)}return t.set(e,o),o}function RL(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?$r(t)?[]:kL(t,this._c):[].concat(a),o],s=wf(t,l[0],r),i=s.top,d=s.right,c=s.bottom,u=s.left;for(let f=1;f<l.length;f++){let p=wf(t,l[f],r);i=_t(p.top,i),d=Yt(p.right,d),c=Yt(p.bottom,c),u=_t(p.left,u)}return{width:d-u,height:c-i,x:u,y:i}}function PL(e){let{width:t,height:a}=yf(e);return{width:t,height:a}}function DL(e,t,a){let o=ia(t),r=Qt(t),n=a==="fixed",l=io(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Zt(0);if((o||!n)&&((lo(t)!=="body"||Xr(r))&&(s=jr(t)),o)){let f=io(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=Yn(r));let d=r&&!o&&!n?Rf(r,s):Zt(0),c=l.left+s.scrollLeft-i.x-d.x,u=l.top+s.scrollTop-i.y-d.y;return{x:c,y:u,width:l.width,height:l.height}}function Ol(e){return Ut(e).position==="static"}function Sf(e,t){if(!ia(e)||Ut(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Qt(e)===a&&(a=a.ownerDocument.body),a}function Pf(e,t){let a=ct(e);if($r(e))return a;if(!ia(e)){let r=ka(e);for(;r&&!Go(r);){if(Ht(r)&&!Ol(r))return r;r=ka(r)}return a}let o=Sf(e,t);for(;o&&bf(o)&&Ol(o);)o=Sf(o,t);return o&&Go(o)&&Ol(o)&&!Xn(o)?a:o||If(e)||a}var ML=async function(e){let t=this.getOffsetParent||Pf,a=this.getDimensions,o=await a(e.floating);return{reference:DL(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function AL(e){return Ut(e).direction==="rtl"}var Df={convertOffsetParentRelativeRectToViewportRelativeRect:bL,getDocumentElement:Qt,getClippingRect:RL,getOffsetParent:Pf,getElementRects:ML,getClientRects:IL,getDimensions:PL,getScale:Ko,isElement:Ht,isRTL:AL};function Mf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function TL(e,t,a){let o=null,r,n=Qt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),l();let f=e.getBoundingClientRect(),{left:p,top:h,width:g,height:m}=f;if(c||t(),!g||!m)return;let C=Kr(h),x=Kr(n.clientWidth-(p+g)),L=Kr(n.clientHeight-(h+m)),b=Kr(p),I={rootMargin:-C+"px "+-x+"px "+-L+"px "+-b+"px",threshold:_t(0,Yt(1,u))||1},k=!0;function y(E){let v=E[0].intersectionRatio;if(!Mf(f,e.getBoundingClientRect()))return s();if(v!==u){if(!k)return s();v?s(!1,v):r=setTimeout(()=>{s(!1,1e-7)},1e3)}k=!1}try{o=new IntersectionObserver(y,{...I,root:n.ownerDocument})}catch{o=new IntersectionObserver(y,I)}o.observe(e)}let i=ct(e),d=()=>s(a);return i.addEventListener("resize",d),s(!0),()=>{i.removeEventListener("resize",d),l()}}function Bl(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,d=Fl(e),c=r||n?[...d?so(d):[],...t?so(t):[]]:[];c.forEach(C=>{r&&C.addEventListener("scroll",a),n&&C.addEventListener("resize",a)});let u=d&&s?TL(d,a,n):null,f=-1,p=null;l&&(p=new ResizeObserver(C=>{let[x]=C;x&&x.target===d&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=p)==null||L.observe(t)})),a()}),d&&!i&&p.observe(d),t&&p.observe(t));let h,g=i?io(e):null;i&&m();function m(){let C=io(e);g&&!Mf(g,C)&&a(),g=C,h=requestAnimationFrame(m)}return a(),()=>{var C;c.forEach(x=>{r&&x.removeEventListener("scroll",a),n&&x.removeEventListener("resize",a)}),u?.(),(C=p)==null||C.disconnect(),p=null,i&&cancelAnimationFrame(h)}}var Af=mf;var Tf=gf,Ef=cf,Of=xf,Ff=ff,Nl=uf;var Bf=hf,_l=(e,t,a)=>{let o=new Map,r=a??{},n={...Df,...r.platform,_c:o};return df(e,t,{...r,platform:n})};var qe=J(require("react"),1),_f=require("react"),qf=J(require("react-dom"),1),EL=typeof document<"u",OL=function(){},Zn=EL?_f.useLayoutEffect:OL;function Jn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Jn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Jn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Hf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Nf(e,t){let a=Hf(e);return Math.round(t*a)/a}function ql(e){let t=qe.useRef(e);return Zn(()=>{t.current=e}),t}function Uf(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:d}=e,[c,u]=qe.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=qe.useState(o);Jn(f,o)||p(o);let[h,g]=qe.useState(null),[m,C]=qe.useState(null),x=qe.useCallback(N=>{N!==I.current&&(I.current=N,g(N))},[]),L=qe.useCallback(N=>{N!==k.current&&(k.current=N,C(N))},[]),b=n||h,S=l||m,I=qe.useRef(null),k=qe.useRef(null),y=qe.useRef(c),E=i!=null,v=ql(i),R=ql(r),A=ql(d),q=qe.useCallback(()=>{if(!I.current||!k.current)return;let N={placement:t,strategy:a,middleware:f};R.current&&(N.platform=R.current),_l(I.current,k.current,N).then(K=>{let G={...K,isPositioned:A.current!==!1};T.current&&!Jn(y.current,G)&&(y.current=G,qf.flushSync(()=>{u(G)}))})},[f,t,a,R,A]);Zn(()=>{d===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,u(N=>({...N,isPositioned:!1})))},[d]);let T=qe.useRef(!1);Zn(()=>(T.current=!0,()=>{T.current=!1}),[]),Zn(()=>{if(b&&(I.current=b),S&&(k.current=S),b&&S){if(v.current)return v.current(b,S,q);q()}},[b,S,q,v,E]);let V=qe.useMemo(()=>({reference:I,floating:k,setReference:x,setFloating:L}),[x,L]),W=qe.useMemo(()=>({reference:b,floating:S}),[b,S]),P=qe.useMemo(()=>{let N={position:a,left:0,top:0};if(!W.floating)return N;let K=Nf(W.floating,c.x),G=Nf(W.floating,c.y);return s?{...N,transform:"translate("+K+"px, "+G+"px)",...Hf(W.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:G}},[a,s,W.floating,c.x,c.y]);return qe.useMemo(()=>({...c,update:q,refs:V,elements:W,floatingStyles:P}),[c,q,V,W,P])}var FL=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?Nl({element:o.current,padding:r}).fn(a):{}:o?Nl({element:o,padding:r}).fn(a):{}}}},Wf=(e,t)=>{let a=Af(e);return{name:a.name,fn:a.fn,options:[e,t]}},zf=(e,t)=>{let a=Tf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Vf=(e,t)=>({fn:Bf(e).fn,options:[e,t]}),Gf=(e,t)=>{let a=Ef(e);return{name:a.name,fn:a.fn,options:[e,t]}},Kf=(e,t)=>{let a=Of(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Xf=(e,t)=>{let a=Ff(e);return{name:a.name,fn:a.fn,options:[e,t]}};var $f=(e,t)=>{let a=FL(e);return{name:a.name,fn:a.fn,options:[e,t]}};var jf=J(require("react"),1);var BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0});function Hl(e){let[t,a]=jf.useState(void 0);return pe(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,i;if("borderBoxSize"in l){let d=l.borderBoxSize,c=Array.isArray(d)?d[0]:d;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;a({width:s,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}NL(Hl,"useSize");var Xo=require("react/jsx-runtime"),_L=Object.defineProperty,Ra=(e,t)=>_L(e,"name",{value:t,configurable:!0});var Yf={Partial:"partial",Always:"always"},Zf={Optimized:"optimized",Always:"always"},Jf="Popper",[Qf,$o]=Je(Jf),[qL,ep]=Qf(Jf),Qn=Ra(e=>{let{__scopePopper:t,children:a}=e,[o,r]=st.useState(null),[n,l]=st.useState(void 0);return(0,Xo.jsx)(qL,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),HL="PopperAnchor",es=st.forwardRef(Ra(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=ep(HL,o),s=st.useRef(null),i=l.onAnchorChange,d=st.useCallback(g=>{s.current=g,g&&i(g)},[i]),c=de(a,d),u=st.useRef(null);st.useEffect(()=>{if(!r)return;let g=u.current;u.current=r.current,g!==u.current&&i(u.current)});let f=l.placementState&&as(l.placementState),p=f?.[0],h=f?.[1];return r?null:(0,Xo.jsx)(ue.div,{"data-radix-popper-side":p,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),tp="PopperContent",[UL,Cy]=Qf(tp),ts=st.forwardRef(Ra(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:d=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f=Yf.Partial,hideWhenDetached:p=!1,updatePositionStrategy:h=Zf.Optimized,onPlaced:g,...m}=t,C=ep(tp,o),[x,L]=st.useState(null),b=de(a,L),[S,I]=st.useState(null),k=Hl(S),y=k?.width??0,E=k?.height??0,v=r+(l!=="center"?"-"+l:""),R=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},A=Array.isArray(c)?c:[c],q=A.length>0,T={padding:R,boundary:A.filter(ap),altBoundary:q},{refs:V,floatingStyles:W,placement:P,isPositioned:N,middlewareData:K}=Uf({strategy:"fixed",placement:v,whileElementsMounted:Ra((...xe)=>Bl(...xe,{animationFrame:h===Zf.Always}),"whileElementsMounted"),elements:{reference:C.anchor},middleware:[Wf({mainAxis:n+E,alignmentAxis:s}),d&&zf({mainAxis:!0,crossAxis:!1,...f===Yf.Partial?{limiter:Vf()}:{},...T}),d&&Gf({...T}),Kf({...T,apply:Ra(({elements:xe,rects:H,availableWidth:te,availableHeight:se})=>{let{width:Z,height:w}=H.reference,M=xe.floating.style;M.setProperty("--radix-popper-available-width",`${te}px`),M.setProperty("--radix-popper-available-height",`${se}px`),M.setProperty("--radix-popper-anchor-width",`${Z}px`),M.setProperty("--radix-popper-anchor-height",`${w}px`)},"apply")}),S&&$f({element:S,padding:i}),WL({arrowWidth:y,arrowHeight:E}),p&&Xf(q?{strategy:"referenceHidden",...T}:{strategy:"referenceHidden",padding:T.padding,altBoundary:T.altBoundary})]}),G=C.setPlacementState;pe(()=>(G(P),()=>{G(void 0)}),[P,G]);let[j,Y]=as(P),ge=Ge(g);pe(()=>{N&&ge?.()},[N,ge]);let Ae=K.arrow?.x,he=K.arrow?.y,U=K.arrow?.centerOffset!==0,[Ie,Ce]=st.useState();return pe(()=>{x&&Ce(window.getComputedStyle(x).zIndex)},[x]),(0,Xo.jsx)("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:N?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ie,"--radix-popper-transform-origin":[K.transformOrigin?.x,K.transformOrigin?.y].join(" "),...K.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Xo.jsx)(UL,{scope:o,placedSide:j,placedAlign:Y,onArrowChange:I,arrowX:Ae,arrowY:he,shouldHideArrow:U,children:(0,Xo.jsx)(ue.div,{"data-side":j,"data-align":Y,...m,ref:b,style:{...m.style,animation:N?m.style?.animation:"none"}})})})},"PopperContent"));function ap(e){return e!==null}Ra(ap,"isNotNull");var WL=Ra(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[d,c]=as(a),u={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,p=(r.arrow?.y??0)+i/2,h="",g="";return d==="bottom"?(h=l?u:`${f}px`,g=`${-i}px`):d==="top"?(h=l?u:`${f}px`,g=`${o.floating.height+i}px`):d==="right"?(h=`${-i}px`,g=l?u:`${p}px`):d==="left"&&(h=`${o.floating.width+i}px`,g=l?u:`${p}px`),{data:{x:h,y:g}}}}),"transformOrigin");function as(e){let[t,a="center"]=e.split("-");return[t,a]}Ra(as,"getSideAndAlignFromPlacement");var zL=J(require("react"),1);var VL=require("react/jsx-runtime");var rp=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var ee=require("react/jsx-runtime"),KL=Object.defineProperty,fe=(e,t)=>KL(e,"name",{value:t,configurable:!0}),np={ItemAligned:"item-aligned",Popper:"popper"},XL={LTR:"ltr",RTL:"rtl"},$L=[" ","Enter","ArrowUp","ArrowDown"],jL=[" ","Enter"],jo="Select",[rs,ns,YL]=to(jo),[co,Wy]=Je(jo,[YL,$o]),zl=$o(),[ZL,Pa]=co(jo),[JL,QL]=co(jo);function up(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:d,name:c,autoComplete:u,disabled:f,required:p,form:h,internal_do_not_use_render:g}=e,m=zl(t),[C,x]=_.useState(null),[L,b]=_.useState(null),[S,I]=_.useState(!1),k=ao(d),[y,E]=$t({prop:o,defaultProp:r??!1,onChange:n,caller:jo}),[v,R]=$t({prop:l,defaultProp:s,onChange:i,caller:jo}),A=_.useRef(null),q=_.useRef(!1),[T,V]=_.useState(null),W=fe(U=>{V({value:U,hasConsumerStoppedPropagation:q.current}),R(U)},"handleUserSelect"),P=_.useRef(v);_.useEffect(()=>{let U=h?C?.ownerDocument.getElementById(h):C?.form;if(U instanceof HTMLFormElement){let Ie=fe(()=>R(P.current),"reset");return U.addEventListener("reset",Ie),()=>U.removeEventListener("reset",Ie)}},[h,C,R]);let N=C?!!h||!!C.closest("form"):!0,[K,G]=_.useState(new Set),j=wt(),Y=Array.from(K).map(U=>U.props.value).join(";"),ge=_.useCallback(U=>{G(Ie=>new Set(Ie).add(U))},[]),Ae=_.useCallback(U=>{G(Ie=>{let Ce=new Set(Ie);return Ce.delete(U),Ce})},[]),he={required:p,trigger:C,onTriggerChange:x,valueNode:L,onValueNodeChange:b,valueNodeHasChildren:S,onValueNodeHasChildrenChange:I,contentId:j,value:v,onValueChange:R,hasConsumerStoppedPropagationRef:q,userSelection:T,onUserSelect:W,open:y,onOpenChange:E,dir:k,triggerPointerDownPosRef:A,disabled:f,name:c,autoComplete:u,form:h,nativeOptions:K,nativeSelectKey:Y,isFormControl:N};return(0,ee.jsx)(Qn,{...m,children:(0,ee.jsx)(ZL,{scope:t,...he,children:(0,ee.jsx)(rs.Provider,{scope:t,children:(0,ee.jsx)(JL,{scope:t,onNativeOptionAdd:ge,onNativeOptionRemove:Ae,children:Ip(g)?g(he):a})})})})}fe(up,"SelectProvider");var cp=fe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,ee.jsx)(up,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,ee.jsxs)(ee.Fragment,{children:[a,r?(0,ee.jsx)(hC,{__scopeSelect:t}):null]})})},"Select"),eC="SelectTrigger",Vl=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=zl(o),s=Pa(eC,o),i=s.disabled||r,d=de(a,s.onTriggerChange),c=ns(o),u=_.useRef("touch"),[f,p,h]=Jl(m=>{let C=c().filter(b=>!b.disabled),x=C.find(b=>b.value===s.value),L=Ql(C,m,x);L!==void 0&&s.onUserSelect(L.value)}),g=fe(m=>{i||(s.onOpenChange(!0),h()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,ee.jsx)(es,{asChild:!0,...l,children:(0,ee.jsx)(ue.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Yr(s.value)?"":void 0,...n,ref:d,onClick:Q(n.onClick,m=>{m.currentTarget.focus(),u.current!=="mouse"&&g(m)}),onPointerDown:Q(n.onPointerDown,m=>{u.current=m.pointerType;let C=m.target;C.hasPointerCapture(m.pointerId)&&C.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(g(m),m.preventDefault())}),onKeyDown:Q(n.onKeyDown,m=>{let C=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=m.isPropagationStopped(),p(m.key)),!(C&&m.key===" ")&&$L.includes(m.key)&&(g(),m.preventDefault())})})})},"SelectTrigger")),tC="SelectValue",fp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,d=Pa(tC,o),{onValueNodeHasChildrenChange:c}=d,u=l!==void 0,f=de(a,d.onValueNodeChange);pe(()=>{c(u)},[c,u]);let p=Yr(d.value);return(0,ee.jsx)(ue.span,{...i,asChild:p?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,ee.jsx)(_.Fragment,{children:p?s:l},p?"placeholder":"value")})},"SelectValue")),pp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,ee.jsx)(ue.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),aC="SelectPortal",[oC,rC]=co(aC,{forceMount:void 0}),mp=fe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,ee.jsx)(oC,{scope:e.__scopeSelect,forceMount:a,children:(0,ee.jsx)(Bo,{asChild:!0,...o})})},"SelectPortal"),uo="SelectContent",Gl=_.forwardRef(fe(function(t,a){let o=rC(uo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=Pa(uo,t.__scopeSelect),[s,i]=_.useState();return pe(()=>{i(new DocumentFragment)},[]),(0,ee.jsx)(sa,{present:r||l.open,children:({present:d})=>d?(0,ee.jsx)(lC,{...n,ref:a}):(0,ee.jsx)(nC,{...n,fragment:s})})},"SelectContent")),nC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Wl.createPortal((0,ee.jsx)(gp,{scope:o,children:(0,ee.jsx)(rs.Slot,{scope:o,children:(0,ee.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Wt=10,[gp,fo]=co(uo),sC=rt("SelectContent.RemoveScroll"),lC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o}=t,{position:r=np.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:d,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:p,collisionPadding:h,sticky:g,hideWhenDetached:m,avoidCollisions:C,...x}=t,L=Pa(uo,o),[b,S]=_.useState(null),[I,k]=_.useState(null),y=de(a,S),[E,v]=_.useState(null),[R,A]=_.useState(null),q=ns(o),[T,V]=_.useState(!1),W=_.useRef(!1),P=_.useRef(!1),N=_.useRef(!1);_.useEffect(()=>{if(b)return zo(b)},[b]),Sa();let K=_.useCallback(H=>{let[te,...se]=q().map(M=>M.ref.current),[Z]=se.slice(-1),w=document.activeElement;for(let M of H)if(M===w||(M?.scrollIntoView({block:"nearest"}),M===te&&I&&(I.scrollTop=0),M===Z&&I&&(I.scrollTop=I.scrollHeight),M?.focus(),document.activeElement!==w))return},[q,I]),G=_.useCallback(()=>K([E,b]),[K,E,b]);_.useEffect(()=>{T&&G()},[T,G]);let{onOpenChange:j,triggerPointerDownPosRef:Y}=L;_.useEffect(()=>{if(b){let H={x:0,y:0},te=fe(Z=>{H={x:Math.abs(Math.round(Z.pageX)-(Y.current?.x??0)),y:Math.abs(Math.round(Z.pageY)-(Y.current?.y??0))}},"handlePointerMove"),se=fe(Z=>{H.x<=10&&H.y<=10?Z.preventDefault():Z.composedPath().includes(b)||j(!1),document.removeEventListener("pointermove",te),Y.current=null},"handlePointerUp");return Y.current!==null&&(document.addEventListener("pointermove",te),document.addEventListener("pointerup",se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",te),document.removeEventListener("pointerup",se,{capture:!0})}}},[b,j,Y]),_.useEffect(()=>{let H=fe(()=>j(!1),"close");return window.addEventListener("blur",H),window.addEventListener("resize",H),()=>{window.removeEventListener("blur",H),window.removeEventListener("resize",H)}},[j]);let[ge,Ae]=Jl(H=>{let te=q().filter(w=>!w.disabled),se=te.find(w=>w.ref.current===document.activeElement),Z=Ql(te,H,se);Z&&setTimeout(()=>Z.ref.current?.focus())}),he=_.useCallback((H,te,se)=>{let Z=!P.current;Z&&(P.current=!0);let w=!W.current&&!se;L.value!==void 0&&L.value===te||w?(v(H),w&&(W.current=!0)):Z&&v(H)},[L.value]),U=_.useCallback(()=>b?.focus(),[b]),Ie=_.useCallback((H,te,se)=>{if(!H)return;let Z=!N.current;Z&&(N.current=!0);let w=!W.current&&!se;(L.value!==void 0&&L.value===te||w||Z)&&A(H)},[L.value]),Ce=r===np.Popper?sp:iC,xe=Ce===sp?{side:i,sideOffset:d,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:p,collisionPadding:h,sticky:g,hideWhenDetached:m,avoidCollisions:C}:{};return(0,ee.jsx)(gp,{scope:o,content:b,viewport:I,onViewportChange:k,itemRefCallback:he,selectedItem:E,onItemLeave:U,itemTextRefCallback:Ie,focusSelectedItem:G,selectedItemText:R,position:r,isPositioned:T,searchRef:ge,children:(0,ee.jsx)(ja,{as:sC,allowPinchZoom:!0,children:(0,ee.jsx)(Fo,{asChild:!0,trapped:L.open,onMountAutoFocus:H=>{H.preventDefault()},onUnmountAutoFocus:Q(n,H=>{L.trigger?.focus({preventScroll:!0}),H.preventDefault()}),children:(0,ee.jsx)(Oo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:H=>H.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,ee.jsx)(Ce,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:H=>H.preventDefault(),...x,...xe,onPlaced:()=>V(!0),ref:y,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:Q(x.onKeyDown,H=>{let te=H.ctrlKey||H.altKey||H.metaKey;if(H.key==="Tab"&&H.preventDefault(),!te&&H.key.length===1&&Ae(H.key),["ArrowUp","ArrowDown","Home","End"].includes(H.key)){let Z=q().filter(w=>!w.disabled).map(w=>w.ref.current);if(["ArrowUp","End"].includes(H.key)&&(Z=Z.slice().reverse()),["ArrowUp","ArrowDown"].includes(H.key)){let w=H.target,M=Z.indexOf(w);Z=Z.slice(M+1)}setTimeout(()=>K(Z)),H.preventDefault()}})})})})})})},"SelectContentImpl")),iC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=Pa(uo,o),s=fo(uo,o),[i,d]=_.useState(null),[c,u]=_.useState(null),f=de(a,u),p=ns(o),h=_.useRef(!1),g=_.useRef(!0),{viewport:m,selectedItem:C,selectedItemText:x,focusSelectedItem:L}=s,b=_.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&m&&C&&x){let y=l.trigger.getBoundingClientRect(),E=c.getBoundingClientRect(),v=l.valueNode.getBoundingClientRect(),R=x.getBoundingClientRect();if(l.dir!==XL.RTL){let se=R.left-E.left,Z=v.left-se,w=y.left-Z,M=y.width+w,z=Math.max(M,E.width),$=window.innerWidth-Wt,me=Bn(Z,[Wt,Math.max(Wt,$-z)]);i.style.minWidth=M+"px",i.style.left=me+"px"}else{let se=E.right-R.right,Z=window.innerWidth-v.right-se,w=window.innerWidth-y.right-Z,M=y.width+w,z=Math.max(M,E.width),$=window.innerWidth-Wt,me=Bn(Z,[Wt,Math.max(Wt,$-z)]);i.style.minWidth=M+"px",i.style.right=me+"px"}let A=p(),q=window.innerHeight-Wt*2,T=m.scrollHeight,V=window.getComputedStyle(c),W=parseInt(V.borderTopWidth,10),P=parseInt(V.paddingTop,10),N=parseInt(V.borderBottomWidth,10),K=parseInt(V.paddingBottom,10),G=W+P+T+K+N,j=Math.min(C.offsetHeight*5,G),Y=window.getComputedStyle(m),ge=parseInt(Y.paddingTop,10),Ae=parseInt(Y.paddingBottom,10),he=y.top+y.height/2-Wt,U=q-he,Ie=C.offsetHeight/2,Ce=C.offsetTop+Ie,xe=W+P+Ce,H=G-xe;if(xe<=he){let se=A.length>0&&C===A[A.length-1].ref.current;i.style.bottom="0px";let Z=c.clientHeight-m.offsetTop-m.offsetHeight,w=Math.max(U,Ie+(se?Ae:0)+Z+N),M=xe+w;i.style.height=M+"px"}else{let se=A.length>0&&C===A[0].ref.current;i.style.top="0px";let w=Math.max(he,W+m.offsetTop+(se?ge:0)+Ie)+H;i.style.height=w+"px",m.scrollTop=xe-he+m.offsetTop}i.style.margin=`${Wt}px 0`,i.style.minHeight=j+"px",i.style.maxHeight=q+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[p,l.trigger,l.valueNode,i,c,m,C,x,l.dir,r]);pe(()=>b(),[b]);let[S,I]=_.useState();pe(()=>{c&&I(window.getComputedStyle(c).zIndex)},[c]);let k=_.useCallback(y=>{y&&g.current===!0&&(b(),L?.(),g.current=!1)},[b,L]);return(0,ee.jsx)(dC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:k,children:(0,ee.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:(0,ee.jsx)(ue.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),sp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Wt,...l}=t,s=zl(o);return(0,ee.jsx)(ts,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[dC,Kl]=co(uo,{}),lp="SelectViewport",hp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=fo(lp,o),s=Kl(lp,o),i=de(a,l.onViewportChange),d=_.useRef(0);return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,ee.jsx)(rs.Slot,{scope:o,children:(0,ee.jsx)(ue.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:Q(n.onScroll,c=>{let u=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){let h=Math.abs(d.current-u.scrollTop);if(h>0){let g=window.innerHeight-Wt*2,m=parseFloat(f.style.minHeight),C=parseFloat(f.style.height),x=Math.max(m,C);if(x<g){let L=x+h,b=Math.min(g,L),S=L-b;f.style.height=b+"px",f.style.bottom==="0px"&&(u.scrollTop=S>0?S:0,f.style.justifyContent="flex-end")}}}d.current=u.scrollTop})})})]})},"SelectViewport")),uC="SelectGroup",[zy,cC]=co(uC);var fC="SelectLabel",Xl=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t,n=cC(fC,o);return(0,ee.jsx)(ue.div,{id:n.id,...r,ref:a})},"SelectLabel")),Ul="SelectItem",[pC,xp]=co(Ul),$l=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=Pa(Ul,o),d=fo(Ul,o),c=i.value===r,[u,f]=_.useState(l??""),[p,h]=_.useState(!1),g=Ge(b=>d.itemRefCallback?.(b,r,n)),m=de(a,g),C=wt(),x=_.useRef("touch");function L(b){i.hasConsumerStoppedPropagationRef.current=b.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return fe(L,"handleSelect"),(0,ee.jsx)(pC,{scope:o,value:r,disabled:n,textId:C,isSelected:c,onItemTextChange:_.useCallback(b=>{f(S=>S||(b?.textContent??"").trim())},[]),children:(0,ee.jsx)(rs.ItemSlot,{scope:o,value:r,disabled:n,textValue:u,children:(0,ee.jsx)(ue.div,{role:"option","aria-labelledby":C,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:m,onFocus:Q(s.onFocus,()=>h(!0)),onBlur:Q(s.onBlur,()=>h(!1)),onClick:Q(s.onClick,b=>{n||x.current!=="mouse"&&L(b)}),onPointerUp:Q(s.onPointerUp,b=>{n||x.current==="mouse"&&L(b)}),onPointerDown:Q(s.onPointerDown,b=>{x.current=b.pointerType}),onPointerMove:Q(s.onPointerMove,b=>{x.current=b.pointerType,n?d.onItemLeave?.():x.current==="mouse"&&b.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Q(s.onPointerLeave,b=>{b.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:Q(s.onKeyDown,b=>{n||b.target!==b.currentTarget||d.searchRef?.current!==""&&b.key===" "||(jL.includes(b.key)&&L(b),b.key===" "&&b.preventDefault())})})})})},"SelectItem")),os="SelectItemText",Lp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=Pa(os,o),i=fo(os,o),d=xp(os,o),c=QL(os,o),[u,f]=_.useState(null),p=Ge(L=>i.itemTextRefCallback?.(L,d.value,d.disabled)),h=de(a,f,d.onItemTextChange,p),g=u?.textContent,m=_.useMemo(()=>(0,ee.jsx)("option",{value:d.value,disabled:d.disabled,children:g},d.value),[d.disabled,d.value,g]),{onNativeOptionAdd:C,onNativeOptionRemove:x}=c;return pe(()=>(C(m),()=>x(m)),[C,x,m]),(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(ue.span,{id:d.textId,...l,ref:h}),d.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Yr(s.value)?Wl.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),mC="SelectItemIndicator",Cp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return xp(mC,o).isSelected?(0,ee.jsx)(ue.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),ip="SelectScrollUpButton",jl=_.forwardRef(fe(function(t,a){let o=fo(ip,t.__scopeSelect),r=Kl(ip,t.__scopeSelect),[n,l]=_.useState(!1),s=de(a,r.onScrollButtonChange);return pe(()=>{if(o.viewport&&o.isPositioned){let d=function(){let u=c.scrollTop>0;l(u)};var i=d;fe(d,"handleScroll");let c=o.viewport;return d(),c.addEventListener("scroll",d),()=>c.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?(0,ee.jsx)(bp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:d}=o;i&&d&&(i.scrollTop=i.scrollTop-d.offsetHeight)}}):null},"SelectScrollUpButton")),dp="SelectScrollDownButton",Yl=_.forwardRef(fe(function(t,a){let o=fo(dp,t.__scopeSelect),r=Kl(dp,t.__scopeSelect),[n,l]=_.useState(!1),s=de(a,r.onScrollButtonChange);return pe(()=>{if(o.viewport&&o.isPositioned){let d=function(){let u=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<u;l(f)};var i=d;fe(d,"handleScroll");let c=o.viewport;return d(),c.addEventListener("scroll",d),()=>c.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?(0,ee.jsx)(bp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:d}=o;i&&d&&(i.scrollTop=i.scrollTop+d.offsetHeight)}}):null},"SelectScrollDownButton")),bp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=fo("SelectScrollButton",o),s=_.useRef(null),i=ns(o),d=_.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return _.useEffect(()=>()=>d(),[d]),pe(()=>{i().find(u=>u.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,ee.jsx)(ue.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:Q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:Q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:Q(n.onPointerLeave,()=>{d()})})},"SelectScrollButtonImpl")),Zl=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,ee.jsx)(ue.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var gC="SelectBubbleInput",hC=_.forwardRef(fe(function({__scopeSelect:t,...a},o){let r=Pa(gC,t),{value:n,onValueChange:l,required:s,disabled:i,name:d,autoComplete:c,form:u,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:h}=r,g=_.useRef(null),m=de(o,g),C=n??"",x=_.useRef(C),L=_.useRef(f),b=_.useRef(!1),S=Array.from(p).some(I=>(I.props.value??"")==="");return _.useEffect(()=>{let I=g.current;if(!I)return;let k=window.HTMLSelectElement.prototype,E=Object.getOwnPropertyDescriptor(k,"value").set,v=f!==null&&f!==L.current;L.current=f;let R=x.current!==C;x.current=C;let A=v&&R;if(v&&!R&&f.value!==C&&!f.hasConsumerStoppedPropagation&&E){b.current=!0;try{E.call(I,f.value),I.dispatchEvent(new Event("change",{bubbles:!0}))}finally{b.current=!1,E.call(I,C)}return}let q=A&&!f.hasConsumerStoppedPropagation;if(R&&E){let T=new Event("change",{bubbles:q});E.call(I,C),I.dispatchEvent(T)}},[C,f]),(0,ee.jsxs)(ue.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:d,autoComplete:c,disabled:i,form:u,onChange:I=>{b.current||l(I.target.value)},...a,style:{...rp,...a.style},ref:m,defaultValue:C,children:[Yr(n)&&!S?(0,ee.jsx)("option",{value:""}):null,Array.from(p)]},h)},"SelectBubbleInput"));function Ip(e){return typeof e=="function"}fe(Ip,"isFunction");function Yr(e){return e===""||e===void 0}fe(Yr,"shouldShowPlaceholder");function Jl(e){let t=Ge(e),a=_.useRef(""),o=_.useRef(0),r=_.useCallback(l=>{let s=a.current+l;t(s);function i(d){a.current=d,window.clearTimeout(o.current),d!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}fe(i,"updateSearch"),i(s)},[t]),n=_.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return _.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}fe(Jl,"useTypeaheadSearch");function Ql(e,t,a){let r=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=vp(e,Math.max(n,0));r.length===1&&(l=l.filter(d=>d!==a));let i=l.find(d=>d.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}fe(Ql,"findNextItem");function vp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}fe(vp,"wrapArray");var Be=require("react/jsx-runtime"),Zr=cp;var Jr=fp,Yo=Da.forwardRef(({className:e,children:t,...a},o)=>(0,Be.jsxs)(Vl,{ref:o,className:ie("kanban-select-trigger",e),...a,children:[t,(0,Be.jsx)(pp,{asChild:!0,children:(0,Be.jsx)(La,{className:"kanban-select-icon"})})]}));Yo.displayName=Vl.displayName;var wp=Da.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(jl,{ref:a,className:ie("kanban-select-scroll-button",e),...t,children:(0,Be.jsx)(lr,{className:"kanban-select-scroll-icon"})}));wp.displayName=jl.displayName;var Sp=Da.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Yl,{ref:a,className:ie("kanban-select-scroll-button",e),...t,children:(0,Be.jsx)(La,{className:"kanban-select-scroll-icon"})}));Sp.displayName=Yl.displayName;var Zo=Da.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Be.jsx)(mp,{children:(0,Be.jsxs)(Gl,{ref:r,className:ie("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Be.jsx)(wp,{}),(0,Be.jsx)(hp,{className:ie("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Be.jsx)(Sp,{})]})}));Zo.displayName=Gl.displayName;var LC=Da.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Xl,{ref:a,className:ie("kanban-select-label",e),...t}));LC.displayName=Xl.displayName;var da=Da.forwardRef(({className:e,children:t,...a},o)=>(0,Be.jsxs)($l,{ref:o,className:ie("kanban-select-item",e),...a,children:[(0,Be.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Be.jsx)(Cp,{children:(0,Be.jsx)(at,{className:"kanban-select-check"})})}),(0,Be.jsx)(Lp,{children:t})]}));da.displayName=$l.displayName;var CC=Da.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Zl,{ref:a,className:ie("kanban-select-separator",e),...t}));CC.displayName=Zl.displayName;var yp=J(require("react"),1);var kp=require("react/jsx-runtime"),ss=yp.forwardRef(({className:e,...t},a)=>(0,kp.jsx)("textarea",{className:ie("kanban-textarea",e),ref:a,...t}));ss.displayName="Textarea";var zt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},ls=["high","medium","low"],Rp="var(--dsw-alias-label-tertiary)";function Pp(e,t){return t?e.find(a=>a.name===t)?.color??Rp:Rp}var is=require("react");function po(e=new Date,t=0){let a=new Date(e);return a.setDate(a.getDate()+t),`${String(a.getFullYear()).padStart(4,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function ei(e,t){let a=o=>{let[r,n,l]=o.split("-").map(Number),s=new Date(0);return s.setUTCFullYear(r,n-1,l),s.getTime()/864e5};return a(t)-a(e)}function ti(e,t,a,o){return t?!e.dueDate||e.columnId===a?!1:t==="today"?e.dueDate===o:e.dueDate<o:!0}function Dp(e,t,a){let[o,r,n]=e.split("-");return a(o===t.slice(0,4)?"shortDate":"yearDate").replace("{year}",o).replace("{month}",String(Number(r))).replace("{day}",String(Number(n)))}function Mp(){let[e,t]=(0,is.useState)(()=>po());return(0,is.useEffect)(()=>{let a,o=()=>{clearTimeout(a);let r=new Date;t(po(r));let n=new Date(r);n.setHours(24,0,0,0),a=setTimeout(o,n.getTime()-r.getTime()+100)};return o(),window.addEventListener("focus",o),document.addEventListener("visibilitychange",o),()=>{clearTimeout(a),window.removeEventListener("focus",o),document.removeEventListener("visibilitychange",o)}},[]),e}var Xe=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),ai=e=>e==="high"||e==="medium"||e==="low"?zt[e].label:"";function Ap(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&ai(a.priority)||o;return Xe(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Xe(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Xe(t("actLabelSet"),{to:n}):r!=null&&n==null?Xe(t("actLabelCleared"),{from:r}):Xe(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?ai(r)||r:o,s=n?ai(n)||n:o;return r==null&&n!=null?Xe(t("actPrioritySet"),{to:s}):r!=null&&n==null?Xe(t("actPriorityCleared"),{from:l}):Xe(t("actPriority"),{from:l,to:s})}case"card_due_date_changed":return Xe(t("actDueDate"),{from:r??o,to:n??o});case"board_completed_column_changed":return Xe(t("actCompletedColumn"),{from:a.fromColumn??r??o,to:a.toColumn??n??o});case"card_title_changed":return Xe(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_image_added":return t("actImageAdded");case"card_image_removed":return t("actImageRemoved");case"card_deleted":return t("actDeleted");case"column_added":return Xe(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Xe(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Xe(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Xe(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Xe(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Xe(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Xe(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var ds=e=>String(e).padStart(2,"0");function Jo(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${ds(t.getMonth()+1)}-${ds(t.getDate())} ${ds(t.getHours())}:${ds(t.getMinutes())}`}var De=require("react");var Fp=require("@deepseek-ai/dsh-client-ui-primitives");function Qr(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(Tp)}async function Tp(e){let t;try{t=await e.json()}catch{throw new Error(`Kanban request failed (${e.status})`)}if(!e.ok||t.error)throw new Error(t.error||`Kanban request failed (${e.status})`);return t}function us(e,t,a){return"/api/kanban/image?"+new URLSearchParams({workspaceId:e,cardId:t,attachmentId:a})}function Ep(e,t,a,o){return fetch("/api/kanban/image/upload?"+new URLSearchParams({workspaceId:e,cardId:t}),{method:"POST",headers:{"content-type":a.type},body:a,signal:o}).then(Tp)}async function Op(e,t,a,o){let r=[];for(let[n,l]of a.entries()){let s=await fetch(us(e,t,l.attachmentId),{signal:o});if(!s.ok)throw new Error(`Image ${n+1}: HTTP ${s.status}`);let i=await s.blob();if(!i.size||!["image/png","image/jpeg","image/webp"].includes(i.type))throw new Error(`Image ${n+1}: invalid image response`);let d=i.type==="image/jpeg"?"jpg":i.type.slice(6);r.push(new File([i],`${t}-${n+1}.${d}`,{type:i.type}))}return r}var oe=require("react/jsx-runtime");function bC({file:e}){let[t,a]=(0,De.useState)("");return(0,De.useEffect)(()=>{let o=URL.createObjectURL(e);return a(o),()=>URL.revokeObjectURL(o)},[e]),t?(0,oe.jsx)("img",{src:t,alt:""}):null}function IC({src:e,label:t,onOpen:a}){let o=ke(),[r,n]=(0,De.useState)("loading"),[l,s]=(0,De.useState)(0);return(0,oe.jsx)("div",{className:"kanban-image-preview",children:r==="error"?(0,oe.jsxs)("div",{className:"kanban-image-message",role:"status",children:[(0,oe.jsx)("span",{children:o("imageLoadFailed")}),(0,oe.jsxs)(le,{variant:"ghost",size:"sm",onClick:()=>{n("loading"),s(i=>i+1)},children:[(0,oe.jsx)(Ia,{}),o("retry")]})]}):(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("button",{type:"button",className:"kanban-image-open","aria-label":t,disabled:r!=="ready",onClick:a,children:(0,oe.jsx)("img",{src:`${e}&retry=${l}`,alt:t,onLoad:()=>n("ready"),onError:()=>n("error")})}),r==="loading"&&(0,oe.jsxs)("span",{className:"kanban-image-message",role:"status",children:[(0,oe.jsx)(aa,{className:"kanban-animate-spin"}),o("loadingImage")]})]})})}var Bp=(0,De.forwardRef)(function({workspaceId:t,cardId:a,images:o,limits:r,disabled:n,onUpload:l,onRemove:s,onBusyChange:i,onPendingChange:d},c){let u=ke(),f=(0,De.useId)(),p=(0,De.useRef)(null),[h,g]=(0,De.useState)([]),m=(0,De.useRef)([]),C=(0,De.useRef)(0),x=(0,De.useRef)(!0),L=(0,De.useRef)(new AbortController),b=(0,De.useRef)(!1),[S,I]=(0,De.useState)(null),[k,y]=(0,De.useState)(""),[E,v]=(0,De.useState)(!1),[R,A]=(0,De.useState)(null);(0,De.useEffect)(()=>(x.current=!0,L.current=new AbortController,()=>{x.current=!1,L.current.abort()}),[]);let q=P=>{x.current&&(m.current=P,g(P),d(P.length>0))},T=async(P,N=m.current)=>{if(b.current)return!1;b.current=!0,i(!0),y("");let K=!0;try{for(let G of N){if(!x.current)return!1;q(m.current.map(j=>j.key===G.key?{...j,state:"uploading",error:void 0}:j));try{await l(P,G.file,L.current.signal),q(m.current.filter(j=>j.key!==G.key))}catch(j){if(K=!1,!x.current)return!1;q(m.current.map(Y=>Y.key===G.key?{...Y,state:"error",error:String(j instanceof Error?j.message:j)}:Y))}}return K}finally{b.current=!1,x.current&&i(!1)}},V=P=>{if(!r||n||b.current||!P.length)return;if(y(""),o.length+m.current.length+P.length>r.maxImagesPerCard){y(u("imageTooMany").replace("{count}",String(r.maxImagesPerCard)));return}for(let K of P){if(!r.mediaTypes.includes(K.type)){y(u("imageInvalidType"));return}if(!K.size||K.size>r.maxImageBytes){y(u("imageTooLarge").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))));return}}let N=P.map(K=>({key:++C.current,file:K,state:"pending"}));q([...m.current,...N]),a&&T(a,N)};(0,De.useImperativeHandle)(c,()=>({uploadPending:T,addFiles:V}));let W=async P=>{if(!(!a||n||b.current)){b.current=!0,i(!0),I(P.attachmentId),y("");try{if(!await s(a,P.attachmentId))throw new Error(u("imageRemoveFailed"))}catch(N){x.current&&y(String(N instanceof Error?N.message:N))}finally{b.current=!1,x.current&&(I(null),i(!1))}}};return(0,oe.jsxs)("section",{className:`kanban-images${E?" is-dragging":""}`,"aria-labelledby":f,onDragOver:P=>{P.dataTransfer.types.includes("Files")&&(P.preventDefault(),P.stopPropagation(),r&&!n&&v(!0))},onDragLeave:P=>{(!(P.relatedTarget instanceof Node)||!P.currentTarget.contains(P.relatedTarget))&&v(!1)},onDrop:P=>{P.dataTransfer.types.includes("Files")&&(P.preventDefault(),P.stopPropagation(),v(!1),V(Array.from(P.dataTransfer.files)))},children:[(0,oe.jsxs)("div",{className:"kanban-field-label",children:[(0,oe.jsxs)("span",{id:f,children:[u("images")," ",(0,oe.jsxs)("span",{className:"kanban-tabular",children:["(",o.length+h.length,")"]})]}),(0,oe.jsxs)(le,{variant:"ghost",size:"sm",disabled:n||!r,onClick:()=>p.current?.click(),children:[(0,oe.jsx)(dr,{}),u("addImages")]}),(0,oe.jsx)("input",{ref:p,type:"file",accept:r?.mediaTypes.join(",")??"image/png,image/jpeg,image/webp",multiple:!0,hidden:!0,disabled:n||!r,"aria-label":u("addImages"),onChange:P=>{V(Array.from(P.currentTarget.files??[])),P.currentTarget.value=""}})]}),!r&&(0,oe.jsx)("p",{className:"kanban-muted-small",children:u("imagesUnavailable")}),r&&(0,oe.jsx)("p",{className:"kanban-muted-small",children:u("imagesHint").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))).replace("{count}",String(r.maxImagesPerCard))}),k&&(0,oe.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:k}),!o.length&&!h.length&&r&&(0,oe.jsx)("div",{className:"kanban-image-empty",children:u("imagesEmpty")}),(o.length>0||h.length>0)&&(0,oe.jsxs)("div",{className:"kanban-image-grid",children:[o.map((P,N)=>(0,oe.jsxs)("div",{className:"kanban-image-tile",children:[(0,oe.jsx)(IC,{src:us(t,a,P.attachmentId),label:u("imagePreview").replace("{number}",String(N+1)),onOpen:()=>A(P)}),(0,oe.jsxs)(le,{variant:"ghost",size:"sm",disabled:n||S!==null,"aria-label":u("imageRemove").replace("{number}",String(N+1)),onClick:()=>{W(P)},children:[S===P.attachmentId?(0,oe.jsx)(aa,{className:"kanban-animate-spin"}):(0,oe.jsx)(lt,{}),S===P.attachmentId?u("imageRemoving"):u("remove")]})]},P.attachmentId)),h.map(P=>(0,oe.jsxs)("div",{className:"kanban-image-tile",children:[(0,oe.jsx)("div",{className:"kanban-image-preview",children:(0,oe.jsx)(bC,{file:P.file})}),(0,oe.jsxs)("div",{className:"kanban-image-draft-info",children:[(0,oe.jsx)("span",{className:"kanban-image-filename",title:P.file.name,children:P.file.name}),(0,oe.jsx)("span",{role:P.state==="error"?"alert":"status",className:P.state==="error"?"kanban-error":"kanban-muted-small",children:P.state==="uploading"?u("imageUploading"):P.state==="error"?`${u("imageUploadFailed")}: ${P.error}`:u("imagePending")}),(0,oe.jsxs)("div",{className:"kanban-image-draft-actions",children:[P.state==="error"&&a&&(0,oe.jsxs)(le,{size:"sm",variant:"ghost",disabled:n,onClick:()=>{T(a,[P])},children:[(0,oe.jsx)(Ia,{}),u("retry")]}),(0,oe.jsxs)(le,{size:"sm",variant:"ghost",disabled:n,"aria-label":`${u("remove")}: ${P.file.name}`,onClick:()=>q(m.current.filter(N=>N.key!==P.key)),children:[(0,oe.jsx)(lt,{}),u("remove")]})]})]})]},P.key))]}),r&&(0,oe.jsx)("p",{className:"kanban-muted-small",children:u(a?"imagesSaveHint":"imagesDraftHint")}),R&&(0,oe.jsx)(Fp.ImageLightbox,{src:us(t,a,R.attachmentId),alt:u("images"),labels:{dialog:u("images"),close:u("close")},onClose:()=>A(null)})]})});var ua=require("react/jsx-runtime");function Np({activities:e}){let t=ke();if(e.length===0)return(0,ua.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ua.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ua.jsxs)("li",{className:"kanban-activity-item",children:[(0,ua.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ua.jsxs)("p",{className:"kanban-activity-description",children:[(0,ua.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Ap(o,t)]}),(0,ua.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Jo(o.ts),children:Jo(o.ts)})]},o.id)})})}var O=require("react/jsx-runtime");function qp({workspaceId:e="default",imageLimits:t=null,images:a=[],onUploadImage:o,onRemoveImage:r,open:n,error:l,card:s,completed:i,completedAt:d,labels:c,comments:u,activities:f,onOpenChange:p,onSave:h,onAddComment:g,onDelete:m,onChatWithAgent:C}){let x=ke(),L=(0,we.useId)(),b=(0,we.useRef)(null),S=(0,we.useRef)(null),[I,k]=(0,we.useState)(!s),[y,E]=(0,we.useState)({id:"",title:"",note:"",label:"",priority:"",dueDate:""}),[v,R]=(0,we.useState)(""),[A,q]=(0,we.useState)(!1),T=(0,we.useRef)(!1),[V,W]=(0,we.useState)(""),[P,N]=(0,we.useState)(null),K=(0,we.useRef)(null),G=(0,we.useRef)(y),j=(0,we.useRef)(null),[Y,ge]=(0,we.useState)(!1),[Ae,he]=(0,we.useState)(!1),[U,Ie]=(0,we.useState)(0),Ce=(0,we.useRef)(void 0),xe=(0,we.useRef)(!1),H=(0,we.useRef)(void 0),te=A||Y,se=(0,we.useRef)(!0);(0,we.useEffect)(()=>(se.current=!0,()=>{se.current=!1}),[]),(0,we.useLayoutEffect)(()=>{let B=Ce.current;if(Ce.current=n?s?.id??"":void 0,!(B===""&&s&&(xe.current||H.current===s.id))&&n){let X={id:s?.id??"",title:s?.title??"",note:s?.note??"",label:s?.label??"",priority:s?.priority??"",dueDate:s?.dueDate??""};G.current=X,E(X),R(""),W(""),N(null),he(!1),ge(!1),Ie(He=>He+1),H.current=void 0,k(!s)}},[n,s?.id]),(0,we.useEffect)(()=>{P&&K.current?.focus()},[P]);let Z=Ae||!!v.trim()||Object.keys(y).some(B=>y[B]!==G.current[B]),w=B=>{if(!(T.current||Y)){if(!B&&P){N(null);return}if(!B&&Z){N("discard");return}p(B)}},M=async B=>{if(T.current||Y)return!1;T.current=!0,q(!0),W("");try{let X=await B();return X===!1&&W(x("actionRetry")),X!==!1}catch(X){return W(x("actionFailed")+String(X instanceof Error?X.message:X)),!1}finally{T.current=!1,q(!1)}},z=async()=>{if(b.current?.reportValidity()){if(v.trim()||Ae){N("chat");return}await M(()=>C(y))&&p(!1)}},$=B=>E(X=>({...X,...B})),me=async()=>{let B=v.trim();!s||!B||B.length>2e3||await M(()=>g(s.id,B))&&R("")};return(0,O.jsx)(Vo,{open:n,onOpenChange:w,children:(0,O.jsxs)(Pl,{open:n,onClose:()=>w(!1),title:x(s?"taskDetails":"addCard"),"aria-describedby":void 0,onPaste:B=>{let X=Array.from(B.clipboardData.files);X.length&&t&&!te&&!P&&(B.preventDefault(),j.current?.addFiles(X))},children:[(0,O.jsxs)(Za,{children:[(0,O.jsx)(eo,{children:x(s?"taskDetails":"addCard")}),s&&(0,O.jsxs)("span",{className:"kanban-field-id",children:[x("fieldId"),": ",s.id]})]}),(0,O.jsxs)(Ja,{className:"kanban-form-stack",children:[(l||V)&&(0,O.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:l||V}),(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsx)(ut,{htmlFor:`${L}-title`,className:"kanban-field-label",children:x("fieldTitle")}),(0,O.jsx)(Ot,{"data-modal-autofocus":!0,id:`${L}-title`,value:y.title,placeholder:x("titlePlaceholder"),maxLength:120,disabled:te||!!P,onChange:B=>$({title:B.target.value})})]}),(0,O.jsxs)("div",{className:"kanban-form-row",children:[(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsx)(ut,{htmlFor:`${L}-label`,children:x("fieldLabel")}),(0,O.jsxs)(Zr,{disabled:te||!!P,value:y.label||"__none__",onValueChange:B=>$({label:B==="__none__"?"":B}),children:[(0,O.jsx)(Yo,{id:`${L}-label`,children:(0,O.jsx)(Jr,{placeholder:x("noLabel")})}),(0,O.jsxs)(Zo,{children:[(0,O.jsx)(da,{value:"__none__",children:x("noLabel")}),c.map(B=>(0,O.jsx)(da,{value:B.name,children:B.name},B.name))]})]})]}),(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsx)(ut,{htmlFor:`${L}-priority`,children:x("fieldPriority")}),(0,O.jsxs)(Zr,{disabled:te||!!P,value:y.priority||"__none__",onValueChange:B=>$({priority:B==="__none__"?"":B}),children:[(0,O.jsx)(Yo,{id:`${L}-priority`,children:(0,O.jsx)(Jr,{placeholder:x("noPriority")})}),(0,O.jsxs)(Zo,{children:[(0,O.jsx)(da,{value:"__none__",children:x("noPriority")}),ls.map(B=>{let X=zt[B];return(0,O.jsx)(da,{value:B,children:(0,O.jsxs)("span",{className:"kanban-inline-priority",children:[(0,O.jsx)("span",{className:"kanban-priority-dot",style:{background:X.color}}),X.label]})},B)})]})]})]})]}),(0,O.jsxs)("div",{className:s?"kanban-form-row kanban-date-fields":void 0,children:[(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsx)(ut,{htmlFor:`${L}-due-date`,children:x("fieldDueDate")}),(0,O.jsxs)("div",{className:"kanban-due-date-controls",children:[(0,O.jsx)(Ot,{ref:b,id:`${L}-due-date`,type:"date",min:"0001-01-01",max:"9999-12-31",value:y.dueDate,disabled:te||!!P,onChange:B=>$({dueDate:B.target.value})}),(0,O.jsxs)("div",{className:"kanban-date-shortcuts",children:[[["today",0],["tomorrow",1],["nextWeek",7]].map(([B,X])=>(0,O.jsx)(le,{type:"button",variant:"ghost",size:"sm",disabled:te||!!P,onClick:()=>$({dueDate:po(new Date,X)}),children:x(B)},B)),(0,O.jsx)(le,{type:"button",variant:"ghost",size:"sm",disabled:te||!!P||!y.dueDate,onClick:()=>$({dueDate:""}),children:x("clearDate")})]})]})]}),s&&(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsx)(ut,{htmlFor:`${L}-completed-date`,children:x("fieldCompletedDate")}),(0,O.jsx)("output",{id:`${L}-completed-date`,className:"kanban-completed-date","aria-describedby":i&&!d?`${L}-completed-date-hint`:void 0,children:i?d?(0,O.jsx)("time",{dateTime:d,children:Jo(d)}):x("completedDateUnknown"):"\u2014"}),i&&!d&&(0,O.jsx)("p",{id:`${L}-completed-date-hint`,className:"kanban-muted-small",children:x("completedDateUnknownHint")})]})]}),(0,O.jsxs)("div",{className:"kanban-form-field",children:[(0,O.jsxs)("div",{className:"kanban-field-label",children:[(0,O.jsx)(ut,{id:`${L}-note-label`,htmlFor:I?`${L}-note`:void 0,children:x("fieldNote")}),(0,O.jsxs)(le,{variant:"ghost",size:"sm",disabled:te||!!P,"aria-controls":`${L}-description`,onClick:()=>{k(!I),I||requestAnimationFrame(()=>S.current?.focus())},children:[I?(0,O.jsx)(at,{}):(0,O.jsx)(fr,{}),x(I?"finishEditingNote":"editNote")]})]}),(0,O.jsx)("div",{id:`${L}-description`,children:I?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ss,{ref:S,id:`${L}-note`,className:"kanban-markdown-source",value:y.note,placeholder:x("notePlaceholder"),rows:12,maxLength:2e3,disabled:te||!!P,onChange:B=>$({note:B.target.value})}),(0,O.jsxs)("p",{className:"kanban-note-hint",children:[x("markdownEditHint")," ",(0,O.jsxs)("span",{className:"kanban-tabular",children:[y.note.length,"/2000"]})]})]}):(0,O.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${L}-note-label`,children:y.note.trim()?(0,O.jsx)(_p.MarkdownText,{text:y.note,labels:{code:{copyLabel:x("copyCode"),copiedLabel:x("copiedCode")},footnotes:x("footnotes")}}):(0,O.jsx)("p",{className:"kanban-muted-small",children:x("emptyNote")})})})]}),(0,O.jsx)(Bp,{ref:j,workspaceId:e,cardId:y.id||s?.id,images:a,limits:t,disabled:te||!!P,onUpload:o??(async()=>{throw new Error(x("imagesUnavailable"))}),onRemove:r??(async()=>!1),onBusyChange:ge,onPendingChange:B=>{he(B),B||W(X=>X===x("imageUploadPartial")?"":X)}},U),s&&(0,O.jsxs)("div",{className:"kanban-comments-box",children:[(0,O.jsxs)(ut,{htmlFor:`${L}-comment`,children:[x("commentsTitle")," ",(0,O.jsxs)("span",{className:"kanban-tabular",children:["(",u.length,")"]})]}),(0,O.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:u.length===0?(0,O.jsx)("p",{className:"kanban-muted-small",children:x("commentEmpty")}):(0,O.jsx)("ol",{className:"kanban-comment-list",children:u.map(B=>{let X=B.source==="agent";return(0,O.jsxs)("li",{className:"kanban-comment-item",children:[(0,O.jsxs)("div",{className:"kanban-comment-meta",children:[(0,O.jsx)("span",{className:`kanban-activity-actor ${X?"is-agent":"is-human"}`,children:x(X?"actorAgent":"actorHuman")}),(0,O.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:B.createdAt,children:Jo(B.createdAt)})]}),(0,O.jsx)("p",{className:"kanban-comment-content",children:B.content})]},B.id)})})}),(0,O.jsxs)("div",{className:"kanban-comment-composer",children:[(0,O.jsx)(ss,{id:`${L}-comment`,value:v,placeholder:x("commentPlaceholder"),rows:3,maxLength:2e3,disabled:te||!!P,onChange:B=>R(B.target.value),onKeyDown:B=>{(B.metaKey||B.ctrlKey)&&B.key==="Enter"&&(B.preventDefault(),me())}}),(0,O.jsxs)(le,{type:"button",variant:"outline",disabled:te||!!P||!v.trim(),onClick:()=>{me()},children:[(0,O.jsx)(mr,{className:"kanban-icon"}),x("sendComment")]})]})]}),s&&(0,O.jsxs)("div",{className:"kanban-activity-box",children:[(0,O.jsx)(ut,{className:"kanban-muted-small",children:x("activityTitle")}),(0,O.jsx)("div",{className:"kanban-activity-scroll",children:(0,O.jsx)(Np,{activities:f})})]})]}),(0,O.jsx)(Qa,{children:P?(0,O.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,O.jsx)("p",{role:"alert",children:x(P==="discard"?"discardChangesDesc":P==="delete"?"deleteCardDesc":Ae?"discardImagesDesc":"discardCommentDesc")}),(0,O.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,O.jsx)(le,{ref:K,variant:"outline",disabled:te,onClick:()=>N(null),children:x("cancel")}),(0,O.jsx)(le,{variant:"destructive",disabled:te,onClick:async()=>{if(P==="discard"){p(!1);return}if(P==="delete"){s&&m&&await M(()=>m(s))&&p(!1);return}await M(()=>C(y))&&p(!1)},children:x(P==="discard"?"discardChanges":P==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,O.jsxs)(O.Fragment,{children:[s&&m&&(0,O.jsxs)(le,{variant:"ghost",className:"kanban-dialog-delete",disabled:te,onClick:()=>N("delete"),children:[(0,O.jsx)(Dt,{className:"kanban-icon"}),x("delete")]}),(0,O.jsxs)(le,{variant:"outline",disabled:te||!y.title.trim()&&!y.note.trim(),onClick:()=>{z()},children:[(0,O.jsx)(oa,{className:"kanban-icon"}),x("chatWithAgent")]}),(0,O.jsx)(le,{disabled:te||!y.title.trim(),onClick:async()=>{b.current?.reportValidity()&&await M(async()=>{xe.current=!y.id;let B;try{B=await h(y),xe.current&&typeof B=="object"&&(H.current=B.cardId)}finally{xe.current=!1}if(!se.current||B===!1)return!1;let X={...y,...typeof B=="object"?{id:B.cardId}:{}};if(E(X),G.current=X,Ae&&(!X.id||!await j.current?.uploadPending(X.id))){se.current&&W(x("imageUploadPartial"));return}se.current&&!v.trim()&&p(!1)})},children:x("save")})]})})]})})}var Up=require("react");var Hp=require("react/jsx-runtime");function vC({variant:e,className:t}={}){return ie("kanban-badge",`kanban-badge--${e??"default"}`,t)}function oi({className:e,variant:t,...a}){return(0,Hp.jsx)("div",{className:vC({variant:t,className:e}),...a})}var mo=J(require("react"),1);var go=require("react/jsx-runtime"),ri=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-card",e),...t}));ri.displayName="Card";var wC=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-card-header",e),...t}));wC.displayName="CardHeader";var SC=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-ui-card-title",e),...t}));SC.displayName="CardTitle";var yC=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-card-description",e),...t}));yC.displayName="CardDescription";var ni=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-card-content",e),...t}));ni.displayName="CardContent";var kC=mo.forwardRef(({className:e,...t},a)=>(0,go.jsx)("div",{ref:a,className:ie("kanban-card-footer",e),...t}));kC.displayName="CardFooter";var Me=require("react/jsx-runtime");function si({card:e,labels:t,completed:a=!1,today:o=po(),query:r=""}){let n=ke(),l=r.trim().toLowerCase(),s=l&&!e.title.toLowerCase().includes(l)&&!e.note.toLowerCase().includes(l)?e.comments.find(h=>h.content.toLowerCase().includes(l))?.content:void 0,i=s?s.slice(Math.max(0,s.toLowerCase().indexOf(l)-24),s.toLowerCase().indexOf(l)+l.length+70):"",d=e.images?.length??0,c=e.priority?zt[e.priority]:null,u=Pp(t,e.label),f=a?"completed":e.dueDate===o?"today":e.dueDate&&e.dueDate<o?"overdue":"future",p=e.dueDate?f==="today"?n("dueToday"):f==="overdue"?n("overdueDays").replace("{days}",String(ei(e.dueDate,o))):Dp(e.dueDate,o,n):"";return(0,Me.jsx)(ri,{className:"kanban-card",children:(0,Me.jsxs)(ni,{className:"kanban-sortable-card-content",children:[(e.label||c)&&(0,Me.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Me.jsxs)(oi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Me.jsx)("span",{className:"kanban-label-dot",style:{background:u},"aria-hidden":"true"}),e.label]}),c&&(0,Me.jsxs)(oi,{variant:"secondary",className:"kanban-card-badge",children:[(0,Me.jsx)("span",{className:"kanban-label-dot",style:{background:c.color},"aria-hidden":"true"}),c.label]})]}),(0,Me.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Me.jsx)("p",{className:"kanban-card-note",children:e.note}),s&&(0,Me.jsxs)("p",{className:"kanban-search-match",children:[n("matchComment"),": ",i]}),(e.dueDate||e.comments.length>0||d>0)&&(0,Me.jsxs)("div",{className:"kanban-card-status-row",children:[e.dueDate&&(0,Me.jsxs)("span",{className:`kanban-card-due-date is-${f}`,title:`${n("fieldDueDate")}: ${e.dueDate}${a?` \xB7 ${n("completed")}`:""}`,children:[(0,Me.jsx)(Ea,{"aria-hidden":"true"}),(0,Me.jsx)("span",{children:p})]}),d>0&&(0,Me.jsxs)("span",{className:"kanban-card-comment-count","aria-label":`${n("images")}: ${d}`,title:`${n("images")}: ${d}`,children:[(0,Me.jsx)(ur,{"aria-hidden":"true"}),(0,Me.jsx)("span",{className:"kanban-tabular",children:d})]}),e.comments.length>0&&(0,Me.jsxs)("span",{className:"kanban-card-comment-count",title:`${n("commentsTitle")}: ${e.comments.length}`,"aria-label":`${n("commentsTitle")}: ${e.comments.length}`,children:[(0,Me.jsx)(oa,{"aria-hidden":"true"}),(0,Me.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})]})})}function Wp({card:e,labels:t,completed:a,today:o=po(),query:r,onOpen:n}){let l=ke(),s=(0,Up.useId)(),{attributes:i,listeners:d,setNodeRef:c,transform:u,transition:f,isDragging:p}=vn({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Me.jsxs)("div",{ref:c,style:{transform:bt.Transform.toString(u),transition:f},...i,...d,"aria-label":e.title,"aria-describedby":s,onKeyDown:h=>{h.key==="Enter"&&!p?(h.preventDefault(),n(e)):d?.onKeyDown?.(h)},onClick:h=>{h.currentTarget.focus(),n(e)},className:`kanban-sortable-card${p?" is-dragging":""}`,children:[(0,Me.jsxs)("span",{id:s,className:"kanban-sr-only",children:[l("cardKeyboardHelp"),e.dueDate&&` ${l("fieldDueDate")}: ${e.dueDate}. ${a?l("completed"):e.dueDate===o?l("dueToday"):e.dueDate<o?l("overdueDays").replace("{days}",String(ei(e.dueDate,o))):""}`]}),(0,Me.jsx)(si,{card:e,labels:t,completed:a,today:o,query:r})]})}var Rt=require("react/jsx-runtime");function zp({column:e,cards:t,totalCount:a,filtered:o,labels:r,completed:n,today:l,query:s,onAddCard:i,onOpenCard:d}){let{setNodeRef:c,isOver:u}=hn({id:e.id,data:{type:"column"}}),{active:f,over:p}=Ar(),h=ke(),g=f?.data.current?.type==="card"&&(u||p?.data.current?.columnId===e.id);return(0,Rt.jsxs)("div",{ref:c,className:`kanban-column${g?" is-over":""}`,children:[(0,Rt.jsxs)("div",{className:"kanban-column-header",children:[(0,Rt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,Rt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,Rt.jsxs)("div",{className:"kanban-column-cards",children:[(0,Rt.jsx)(In,{items:t.map(m=>m.id),strategy:bn,children:t.map(m=>(0,Rt.jsx)(Wp,{card:m,labels:r,completed:n,today:l,query:s,onOpen:d},m.id))}),t.length===0&&(0,Rt.jsx)("p",{className:"kanban-column-empty",children:h(o?"noMatchingCards":"emptyColumn")})]}),(0,Rt.jsx)("div",{className:"kanban-column-footer",children:(0,Rt.jsxs)(le,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>i(e),children:[(0,Rt.jsx)(Oa,{className:"kanban-icon"}),h("addCard")]})})]})}var ft=require("react");var re=require("react/jsx-runtime");function RC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:i,setNodeRef:d,transform:c,transition:u,isDragging:f}=vn({id:e.id,disabled:l}),p=ke();return(0,re.jsxs)("div",{ref:d,style:{transform:bt.Transform.toString(c),transition:u},className:"kanban-editor-row","data-dragging":f||void 0,children:[(0,re.jsx)("button",{...s,...i,className:"kanban-drag-handle",disabled:l,"aria-label":`${p("dragSort")}: ${e.title}`,children:(0,re.jsx)(ir,{className:"kanban-icon"})}),(0,re.jsx)(Ot,{className:"kanban-editor-name","aria-label":`${p("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:h=>a(h.target.value),onBlur:o,onKeyDown:h=>{h.key==="Enter"&&h.target.blur()}}),(0,re.jsx)(le,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${p("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,re.jsx)(Dt,{className:"kanban-icon"})})]})}function Vp({open:e,error:t,columns:a,completedColumnId:o,onSetCompletedColumn:r,onOpenChange:n,onReorder:l,onRename:s,onDelete:i,onAdd:d}){let c=ke(),u=(0,ft.useId)(),f=(0,ft.useId)(),[p,h]=(0,ft.useState)({}),[g,m]=(0,ft.useState)(""),[C,x]=(0,ft.useState)(!1),L=(0,ft.useRef)(!1),[b,S]=(0,ft.useState)(""),[I,k]=(0,ft.useState)(null),y=(0,ft.useRef)(null),E=cn(Va(Ao,{activationConstraint:{distance:8}}),Va(wa,{coordinateGetter:wn}));(0,ft.useEffect)(()=>{e&&(h(Object.fromEntries(a.map(T=>[T.id,T.title]))),m(""),S(""),k(null))},[e]),(0,ft.useEffect)(()=>{I&&y.current?.focus()},[I]);let v=async T=>{if(L.current)return!1;L.current=!0,x(!0),S("");try{let V=await T();return V===!1&&S(c("actionRetry")),V!==!1}catch(V){return S(c("actionFailed")+String(V instanceof Error?V.message:V)),!1}finally{L.current=!1,x(!1)}},R=async()=>{let T=g.trim();T&&await v(()=>d(T))&&m("")},A=T=>{let V=(p[T]??"").trim(),W=a.find(P=>P.id===T);W&&V&&V!==W.title&&v(()=>s(T,V))},q=T=>{let{active:V,over:W}=T;W&&V.id!==W.id&&v(()=>l(String(V.id),String(W.id)))};return(0,re.jsx)(Vo,{open:e,onOpenChange:T=>{if(!L.current){if(!T&&I){k(null);return}n(T)}},children:(0,re.jsxs)(Wr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,re.jsxs)(Za,{children:[(0,re.jsx)(eo,{children:c("columnEdit")}),(0,re.jsx)(zr,{children:c("columnEditDesc")})]}),(0,re.jsxs)(Ja,{className:"kanban-editor-body",children:[(t||b)&&(0,re.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||b}),(0,re.jsxs)("section",{className:"kanban-editor-section","aria-label":c("boardLists"),children:[(0,re.jsxs)("h3",{className:"kanban-editor-caption",children:[c("boardLists")," ",(0,re.jsx)("span",{children:a.length})]}),(0,re.jsx)(gn,{sensors:E,collisionDetection:Bd,onDragEnd:q,children:(0,re.jsx)(In,{items:a.map(T=>T.id),strategy:bn,children:(0,re.jsx)("div",{className:"kanban-editor-list",children:a.map(T=>(0,re.jsx)(RC,{column:T,value:p[T.id]??T.title,onValueChange:V=>h(W=>({...W,[T.id]:V})),onCommit:()=>A(T.id),onDelete:()=>k(T),disabled:C||!!I,canDelete:a.length>1},T.id))})})})]}),(0,re.jsxs)("div",{className:"kanban-editor-setting",children:[(0,re.jsxs)("div",{className:"kanban-editor-setting-copy",children:[(0,re.jsx)(ut,{htmlFor:u,children:c("completedColumn")}),(0,re.jsx)("p",{id:`${u}-hint`,className:"kanban-muted-small",children:c("completedColumnHint")})]}),(0,re.jsxs)(Zr,{value:o||"__none__",disabled:C||!!I,onValueChange:T=>{v(()=>r(T==="__none__"?null:T))},children:[(0,re.jsx)(Yo,{id:u,"aria-describedby":`${u}-hint`,children:(0,re.jsx)(Jr,{})}),(0,re.jsxs)(Zo,{children:[(0,re.jsx)(da,{value:"__none__",children:c("noCompletedColumn")}),a.map(T=>(0,re.jsx)(da,{value:T.id,children:T.title},T.id))]})]})]})]}),(0,re.jsx)(Qa,{children:I?(0,re.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,re.jsx)("p",{role:"alert",children:c("deleteColumnDesc").replace("{column}",I.title)}),(0,re.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,re.jsx)(le,{ref:y,variant:"outline",disabled:C,onClick:()=>k(null),children:c("cancel")}),(0,re.jsx)(le,{variant:"destructive",disabled:C,onClick:async()=>{await v(()=>i(I.id))&&k(null)},children:c("confirmDelete")})]})]}):(0,re.jsxs)("div",{className:"kanban-editor-add",children:[(0,re.jsx)(ut,{htmlFor:f,children:c("newColumnPlaceholder")}),(0,re.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,re.jsx)("span",{className:"kanban-editor-add-icon","aria-hidden":"true",children:(0,re.jsx)(Oa,{className:"kanban-icon"})}),(0,re.jsx)(Ot,{id:f,value:g,disabled:C,placeholder:c("newColumnPlaceholder"),"aria-label":c("newColumnPlaceholder"),maxLength:40,onChange:T=>m(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.preventDefault(),R())}}),(0,re.jsx)(le,{size:"sm",className:"kanban-editor-add-button",disabled:C||!g.trim(),onClick:()=>{R()},children:c("add")})]})]})})]})})}var pt=require("react");var Le=require("react/jsx-runtime");function Gp({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=ke(),i=(0,pt.useId)(),[d,c]=(0,pt.useState)({}),[u,f]=(0,pt.useState)(""),[p,h]=(0,pt.useState)("#38bdf8"),[g,m]=(0,pt.useState)(!1),C=(0,pt.useRef)(!1),[x,L]=(0,pt.useState)(""),[b,S]=(0,pt.useState)(null),I=(0,pt.useRef)(null);(0,pt.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(v=>[v.name,{name:v.name,color:v.color}]))),f(""),h("#38bdf8"),L(""),S(null))},[e]),(0,pt.useEffect)(()=>{b&&I.current?.focus()},[b]);let k=async v=>{if(C.current)return!1;C.current=!0,m(!0),L("");try{let R=await v();return R===!1&&L(s("actionRetry")),R!==!1}catch(R){return L(s("actionFailed")+String(R instanceof Error?R.message:R)),!1}finally{C.current=!1,m(!1)}},y=async()=>{let v=u.trim();v&&await k(()=>r(v,p))&&f("")},E=v=>{let R=d[v];if(!R)return;let A=a.find(T=>T.name===v),q=R.name.trim();A&&q&&(q!==v||R.color!==A.color)&&k(()=>n(v,q,R.color))};return(0,Le.jsx)(Vo,{open:e,onOpenChange:v=>{if(!C.current){if(!v&&b){S(null);return}o(v)}},children:(0,Le.jsxs)(Wr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,Le.jsxs)(Za,{children:[(0,Le.jsx)(eo,{children:s("labelEdit")}),(0,Le.jsx)(zr,{children:s("labelEditDesc")})]}),(0,Le.jsxs)(Ja,{className:"kanban-editor-body",children:[(t||x)&&(0,Le.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||x}),(0,Le.jsxs)("section",{className:"kanban-editor-section","aria-label":s("boardLabels"),children:[(0,Le.jsxs)("h3",{className:"kanban-editor-caption",children:[s("boardLabels")," ",(0,Le.jsx)("span",{children:a.length})]}),(0,Le.jsxs)("div",{className:"kanban-editor-list",children:[a.length===0&&(0,Le.jsxs)("div",{className:"kanban-editor-empty",children:[(0,Le.jsx)(hr,{className:"kanban-icon","aria-hidden":"true"}),(0,Le.jsx)("p",{children:s("noLabelsHint")})]}),a.map(v=>{let R=d[v.name]??{name:v.name,color:v.color};return(0,Le.jsxs)("div",{className:"kanban-editor-row",children:[(0,Le.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${v.name}`,title:`${s("labelColor")}: ${v.name}`,value:R.color,disabled:g||!!b,className:"kanban-color-input",onChange:A=>c(q=>({...q,[v.name]:{...R,color:A.target.value}})),onBlur:()=>E(v.name)}),(0,Le.jsx)(Ot,{className:"kanban-editor-name","aria-label":`${s("labelName")}: ${v.name}`,value:R.name,disabled:g||!!b,maxLength:20,onChange:A=>c(q=>({...q,[v.name]:{...R,name:A.target.value}})),onBlur:()=>E(v.name),onKeyDown:A=>{A.key==="Enter"&&A.target.blur()}}),(0,Le.jsx)(le,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${s("deleteLabel")}: ${v.name}`,disabled:g||!!b,onClick:()=>S(v.name),children:(0,Le.jsx)(Dt,{className:"kanban-icon"})})]},v.name)})]})]})]}),(0,Le.jsx)(Qa,{children:b?(0,Le.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,Le.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",b)}),(0,Le.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,Le.jsx)(le,{ref:I,variant:"outline",disabled:g,onClick:()=>S(null),children:s("cancel")}),(0,Le.jsx)(le,{variant:"destructive",disabled:g,onClick:async()=>{await k(()=>l(b))&&S(null)},children:s("confirmDelete")})]})]}):(0,Le.jsxs)("div",{className:"kanban-editor-add",children:[(0,Le.jsx)(ut,{htmlFor:i,children:s("newLabelPlaceholder")}),(0,Le.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,Le.jsx)("input",{type:"color","aria-label":s("newLabelColor"),title:s("newLabelColor"),value:p,disabled:g,className:"kanban-color-input",onChange:v=>h(v.target.value)}),(0,Le.jsx)(Ot,{id:i,value:u,disabled:g,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:v=>f(v.target.value),onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),y())}}),(0,Le.jsx)(le,{size:"sm",className:"kanban-editor-add-button",disabled:g||!u.trim(),onClick:()=>{y()},children:s("add")})]})]})})]})})}function li(e,t=""){let a=t.trim().toLowerCase();return a?[e.id,e.title,e.note,...(e.comments||[]).map(o=>o.content)].some(o=>typeof o=="string"&&o.toLowerCase().includes(a)):!0}var tn=J(require("react"),1);var Vt=J(require("react"),1);var ae=J(require("react"),1);var $e=J(require("react"),1);var DC=J(require("react"),1),cs=J(require("react"),1),PC=Object.defineProperty,di=(e,t)=>PC(e,"name",{value:t,configurable:!0}),ii=!1;function Kp(){let[e,t]=cs.useState(ii);return cs.useEffect(()=>{ii||(ii=!0,t(!0))},[]),e}di(Kp,"useIsHydrated");var Xp=DC[" useSyncExternalStore ".trim().toString()];function $p(){return()=>{}}di($p,"subscribe");function jp(){return Xp($p,()=>!0,()=>!1)}di(jp,"useIsHydratedModern");var Yp=typeof Xp=="function"?jp:Kp;var Ma=require("react/jsx-runtime"),MC=Object.defineProperty,ho=(e,t)=>MC(e,"name",{value:t,configurable:!0}),ui="rovingFocusGroup.onEntryFocus",AC={bubbles:!1,cancelable:!0},fs="RovingFocusGroup",[ci,Jp,TC]=to(fs),[EC,fi]=Je(fs,[TC]),Zp={Vertical:"vertical",Horizontal:"horizontal"},OC={LTR:"ltr",RTL:"rtl"},[FC,BC]=EC(fs),Qp=$e.forwardRef(ho(function(t,a){return(0,Ma.jsx)(ci.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,Ma.jsx)(ci.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,Ma.jsx)(NC,{...t,ref:a})})})},"RovingFocusGroup")),NC=$e.forwardRef(ho(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:d,onEntryFocus:c,preventScrollOnEntryFocus:u=!1,...f}=t,p=$e.useRef(null),h=de(a,p),g=ao(l),[m,C]=$t({prop:s,defaultProp:i??null,onChange:d,caller:fs}),[x,L]=$e.useState(!1),b=Ge(c),S=Jp(o),I=$e.useRef(!1),[k,y]=$e.useState(0);return $e.useEffect(()=>{let E=p.current;if(E)return E.addEventListener(ui,b),()=>E.removeEventListener(ui,b)},[b]),(0,Ma.jsx)(FC,{scope:o,orientation:r,dir:g,loop:n,currentTabStopId:m,onItemFocus:$e.useCallback(E=>C(E),[C]),onItemShiftTab:$e.useCallback(()=>L(!0),[]),onFocusableItemAdd:$e.useCallback(()=>y(E=>E+1),[]),onFocusableItemRemove:$e.useCallback(()=>y(E=>E-1),[]),children:(0,Ma.jsx)(ue.div,{tabIndex:x||k===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:Q(t.onMouseDown,()=>{I.current=!0}),onFocus:Q(t.onFocus,E=>{let v=!I.current;if(E.target===E.currentTarget&&v&&!x){let R=new CustomEvent(ui,AC);if(E.currentTarget.dispatchEvent(R),!R.defaultPrevented){let A=S().filter(P=>P.focusable),q=A.find(P=>P.active),T=A.find(P=>P.id===m),W=[q,T,...A].filter(Boolean).map(P=>P.ref.current);pi(W,u)}}I.current=!1}),onBlur:Q(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),_C="RovingFocusGroupItem",em=$e.forwardRef(ho(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,d=wt(),c=l||d,u=BC(_C,o),f=u.currentTabStopId===c,p=Jp(o),{onFocusableItemAdd:h,onFocusableItemRemove:g,currentTabStopId:m}=u,C=Yp();return pe(()=>{if(!(!C||!r))return h(),()=>g()},[C,r,h,g]),$e.useEffect(()=>{if(!(C||!r))return h(),()=>g()},[C,r,h,g]),(0,Ma.jsx)(ci.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,Ma.jsx)(ue.span,{tabIndex:f?0:-1,"data-orientation":u.orientation,...i,ref:a,onMouseDown:Q(t.onMouseDown,x=>{r?u.onItemFocus(c):x.preventDefault()}),onFocus:Q(t.onFocus,()=>u.onItemFocus(c)),onKeyDown:Q(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){u.onItemShiftTab();return}if(x.target!==x.currentTarget)return;let L=am(x,u.orientation,u.dir);if(L!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=p().filter(I=>I.focusable).map(I=>I.ref.current);if(L==="last")S.reverse();else if(L==="prev"||L==="next"){L==="prev"&&S.reverse();let I=S.indexOf(x.currentTarget);S=u.loop?om(S,I+1):S.slice(I+1)}setTimeout(()=>pi(S))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:m!=null}):s})})},"RovingFocusGroupItem")),qC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function tm(e,t){return t!==OC.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}ho(tm,"getDirectionAwareKey");function am(e,t,a){let o=tm(e.key,a);if(!(t===Zp.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===Zp.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return qC[o]}ho(am,"getFocusIntent");function pi(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}ho(pi,"focusFirst");function om(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ho(om,"wrapArray");var Se=require("react/jsx-runtime"),UC=Object.defineProperty,Re=(e,t)=>UC(e,"name",{value:t,configurable:!0});var mi=["Enter"," "],WC=["ArrowDown","PageUp","Home"],nm=["ArrowUp","PageDown","End"],zC=[...WC,...nm],_R={ltr:[...mi,"ArrowRight"],rtl:[...mi,"ArrowLeft"]};var ms="Menu",[gi,VC,GC]=to(ms),[xo,xi]=Je(ms,[GC,$o,fi]),Li=$o(),sm=fi(),[KC,en]=xo(ms),[XC,Ci]=xo(ms),lm=Re(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Li(t),[i,d]=ae.useState(null),c=ae.useRef(!1),u=Ge(n),f=ao(r);return ae.useEffect(()=>{let p=Re(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=Re(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),ae.useEffect(()=>{if(!a)return;let p=Re(()=>u(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,u]),(0,Se.jsx)(Qn,{...s,children:(0,Se.jsx)(KC,{scope:t,open:a,onOpenChange:u,content:i,onContentChange:d,children:(0,Se.jsx)(XC,{scope:t,onClose:ae.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),im=ae.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t,n=Li(o);return(0,Se.jsx)(es,{...n,...r,ref:a})},"MenuAnchor")),dm="MenuPortal",[$C,jC]=xo(dm,{forceMount:void 0}),um=Re(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=en(dm,t);return(0,Se.jsx)($C,{scope:t,forceMount:a,children:(0,Se.jsx)(sa,{present:a||n.open,children:(0,Se.jsx)(Bo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),Aa="MenuContent",[YC,cm]=xo(Aa),fm=ae.forwardRef(Re(function(t,a){let o=jC(Aa,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=en(Aa,t.__scopeMenu),s=Ci(Aa,t.__scopeMenu);return(0,Se.jsx)(gi.Provider,{scope:t.__scopeMenu,children:(0,Se.jsx)(sa,{present:r||l.open,children:(0,Se.jsx)(gi.Slot,{scope:t.__scopeMenu,children:s.modal?(0,Se.jsx)(ZC,{...n,ref:a}):(0,Se.jsx)(JC,{...n,ref:a})})})})},"MenuContent")),ZC=ae.forwardRef(Re(function(t,a){let o=en(Aa,t.__scopeMenu),r=ae.useRef(null),n=de(a,r);return ae.useEffect(()=>{let l=r.current;if(l)return zo(l)},[]),(0,Se.jsx)(pm,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),JC=ae.forwardRef(Re(function(t,a){let o=en(Aa,t.__scopeMenu);return(0,Se.jsx)(pm,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),QC=rt("MenuContent.ScrollLock"),pm=ae.forwardRef(Re(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:d,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:p,onDismiss:h,disableOutsideScroll:g,...m}=t,C=en(Aa,o),x=Ci(Aa,o),L=Li(o),b=sm(o),S=VC(o),[I,k]=ae.useState(null),y=ae.useRef(null),[E,v]=ae.useState(null);Qs(E);let{nodes:R,registry:A}=Br(),q=!!(n||g),T=de(a,y,C.onContentChange,v),V=ae.useRef(0),W=ae.useRef(""),P=ae.useRef(0),N=ae.useRef(null),K=ae.useRef("right"),G=ae.useRef(0),j=ae.useMemo(()=>g?[y,...R.map(U=>({current:U}))]:[],[y,R,g]),Y=g?ja:ae.Fragment,ge=g?{as:QC,allowPinchZoom:!0,shards:j}:void 0,Ae=Re(U=>{let Ie=W.current+U,Ce=S().filter(M=>!M.disabled),xe=document.activeElement,H=Ce.find(M=>M.ref.current===xe)?.textValue,te=Ce.map(M=>M.textValue),se=Im(te,Ie,H),Z=Ce.find(M=>M.textValue===se)?.ref.current;function w(M){W.current=M,window.clearTimeout(V.current),M!==""&&(V.current=window.setTimeout(()=>w(""),1e3))}Re(w,"updateSearch"),w(Ie),Z&&setTimeout(()=>Z.focus())},"handleTypeaheadSearch");ae.useEffect(()=>()=>window.clearTimeout(V.current),[]),Sa();let he=ae.useCallback(U=>K.current===N.current?.side&&wm(U,N.current?.area),[]);return(0,Se.jsx)(YC,{scope:o,searchRef:W,onItemEnter:ae.useCallback(U=>{he(U)&&U.preventDefault()},[he]),onItemLeave:ae.useCallback(U=>{he(U)||(y.current?.focus(),k(null))},[he]),onTriggerLeave:ae.useCallback(U=>{he(U)&&U.preventDefault()},[he]),pointerGraceTimerRef:P,onPointerGraceIntentChange:ae.useCallback(U=>{N.current=U},[]),children:(0,Se.jsx)(Fr,{registry:q?A:null,children:(0,Se.jsx)(Y,{...ge,children:(0,Se.jsx)(Fo,{asChild:!0,trapped:n,branches:R,onMountAutoFocus:Q(l,U=>{U.preventDefault(),y.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,Se.jsx)(Oo,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:p,onDismiss:h,children:(0,Se.jsx)(Qp,{asChild:!0,...b,dir:x.dir,orientation:"vertical",loop:r,currentTabStopId:I,onCurrentTabStopIdChange:k,onEntryFocus:Q(d,U=>{x.isUsingKeyboardRef.current||U.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,Se.jsx)(ts,{role:"menu","aria-orientation":"vertical","data-state":xm(C.open),"data-radix-menu-content":"",dir:x.dir,...L,...m,ref:T,style:{outline:"none",...m.style},onKeyDown:Q(m.onKeyDown,U=>{let Ce=U.target.closest("[data-radix-menu-content]")===U.currentTarget,xe=U.ctrlKey||U.altKey||U.metaKey,H=U.key.length===1;Ce&&(U.key==="Tab"&&U.preventDefault(),!xe&&H&&Ae(U.key));let te=y.current;if(U.target!==te||!zC.includes(U.key))return;U.preventDefault();let Z=S().filter(w=>!w.disabled).map(w=>w.ref.current);nm.includes(U.key)&&Z.reverse(),Cm(Z)}),onBlur:Q(t.onBlur,U=>{U.currentTarget.contains(U.target)||(window.clearTimeout(V.current),W.current="")}),onPointerMove:Q(t.onPointerMove,ps(U=>{let Ie=U.target,Ce=G.current!==U.clientX;if(U.currentTarget.contains(Ie)&&Ce){let xe=U.clientX>G.current?"right":"left";K.current=xe,G.current=U.clientX}}))})})})})})})})},"MenuContentImpl"));var mm=ae.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(ue.div,{...r,ref:a})},"MenuLabel")),hi="MenuItem",rm="menu.itemSelect",gm=ae.forwardRef(Re(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=ae.useRef(null),s=Ci(hi,t.__scopeMenu),i=cm(hi,t.__scopeMenu),d=de(a,l),c=ae.useRef(!1),u=Re(()=>{let f=l.current;if(!o&&f){let p=new CustomEvent(rm,{bubbles:!0,cancelable:!0});f.addEventListener(rm,h=>r?.(h),{once:!0}),Er(f,p),p.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,Se.jsx)(eb,{...n,ref:d,disabled:o,onClick:Q(t.onClick,u),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:Q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:Q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||mi.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),eb=ae.forwardRef(Re(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=cm(hi,o),i=sm(o),d=ae.useRef(null),c=de(a,d),[u,f]=ae.useState(!1),[p,h]=ae.useState("");return ae.useEffect(()=>{let g=d.current;g&&h((g.textContent??"").trim())},[l.children]),(0,Se.jsx)(gi.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,Se.jsx)(em,{asChild:!0,...i,focusable:!r,children:(0,Se.jsx)(ue.div,{role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:Q(t.onPointerMove,ps(g=>{r?s.onItemLeave(g):(s.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:Q(t.onPointerLeave,ps(g=>s.onItemLeave(g))),onFocus:Q(t.onFocus,()=>f(!0)),onBlur:Q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var tb="MenuRadioGroup",[qR,HR]=xo(tb,{value:void 0,onValueChange:Re(()=>{},"onValueChange")});var ab="MenuItemIndicator",[UR,WR]=xo(ab,{checked:!1});var hm=ae.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(ue.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var ob="MenuSub",[zR,VR]=xo(ob);function xm(e){return e?"open":"closed"}Re(xm,"getOpenState");function Lm(e){return e==="indeterminate"}Re(Lm,"isIndeterminate");function rb(e){return Lm(e)?"indeterminate":e?"checked":"unchecked"}Re(rb,"getCheckedState");function Cm(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Re(Cm,"focusFirst");function bm(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Re(bm,"wrapArray");function Im(e,t,a){let r=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=bm(e,Math.max(n,0));r.length===1&&(l=l.filter(d=>d!==a));let i=l.find(d=>d.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Re(Im,"getNextMatch");function vm(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],d=s.x,c=s.y,u=i.x,f=i.y;c>o!=f>o&&a<(u-d)*(o-c)/(f-c)+d&&(r=!r)}return r}Re(vm,"isPointInPolygon");function wm(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return vm(a,t)}Re(wm,"isPointerInGraceArea");function ps(e){return t=>t.pointerType==="mouse"?e(t):void 0}Re(ps,"whenMouse");var ea=require("react/jsx-runtime"),sb=Object.defineProperty,Lo=(e,t)=>sb(e,"name",{value:t,configurable:!0}),bi="DropdownMenu",[lb,lP]=Je(bi,[xi]),Co=xi(),[ib,Sm]=lb(bi),ym=Lo(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Co(t),d=Vt.useRef(null),[c,u]=$t({prop:r,defaultProp:n??!1,onChange:l,caller:bi});return(0,ea.jsx)(ib,{scope:t,triggerId:wt(),triggerRef:d,contentId:wt(),open:c,onOpenChange:u,onOpenToggle:Vt.useCallback(()=>u(f=>!f),[u]),modal:s,children:(0,ea.jsx)(lm,{...i,open:c,onOpenChange:u,dir:o,modal:s,children:a})})},"DropdownMenu"),db="DropdownMenuTrigger",km=Vt.forwardRef(Lo(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Sm(db,o),s=Co(o),i=de(a,l.triggerRef);return(0,ea.jsx)(im,{asChild:!0,...s,children:(0,ea.jsx)(ue.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:Q(t.onPointerDown,d=>{!r&&d.button===0&&d.ctrlKey===!1&&(l.onOpenToggle(),l.open||d.preventDefault())}),onKeyDown:Q(t.onKeyDown,d=>{r||(["Enter"," "].includes(d.key)&&l.onOpenToggle(),d.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})},"DropdownMenuTrigger")),Rm=Lo(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Co(t);return(0,ea.jsx)(um,{...o,...a})},"DropdownMenuPortal"),ub="DropdownMenuContent",Ii=Vt.forwardRef(Lo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Sm(ub,o),l=Co(o),s=Vt.useRef(!1);return(0,ea.jsx)(fm,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:Q(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:Q(t.onInteractOutside,i=>{let d=i.detail.originalEvent,c=d.button===0&&d.ctrlKey===!0,u=d.button===2||c;(!n.modal||u)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var vi=Vt.forwardRef(Lo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,ea.jsx)(mm,{...n,...r,ref:a})},"DropdownMenuLabel")),wi=Vt.forwardRef(Lo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,ea.jsx)(gm,{...n,...r,ref:a})},"DropdownMenuItem"));var Si=Vt.forwardRef(Lo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Co(o);return(0,ea.jsx)(hm,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Qo=require("react/jsx-runtime"),bo=ym,Io=km;var Ta=tn.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Qo.jsx)(Rm,{children:(0,Qo.jsx)(Ii,{ref:o,sideOffset:t,className:ie("kanban-portal kanban-dropdown-content",e),...a})}));Ta.displayName=Ii.displayName;var ht=tn.forwardRef(({className:e,inset:t,...a},o)=>(0,Qo.jsx)(wi,{ref:o,className:ie("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));ht.displayName=wi.displayName;var fb=tn.forwardRef(({className:e,inset:t,...a},o)=>(0,Qo.jsx)(vi,{ref:o,className:ie("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));fb.displayName=vi.displayName;var yi=tn.forwardRef(({className:e,...t},a)=>(0,Qo.jsx)(Si,{ref:a,className:ie("kanban-dropdown-separator",e),...t}));yi.displayName=Si.displayName;function Pm(e,t,a,o){if(a.files.length){if(!o?.createDrafts||!o.releaseDraftAttachments||!t.addAttachments)throw new Error(it("chatImagesUnavailable"));let r=o.createDrafts(e,a.files,!0);try{if(!t.addAttachments(r.map(n=>n.id)))throw new Error(it("chatImagesBusy"))}catch(n){throw o.releaseDraftAttachments(r),n}}t.setDraft(a.text)}var ki=new Map,Ri=0,gs=new Set;function Dm(e,t,a=[]){ki.set(e,{text:t,files:a}),Ri++;for(let o of gs)o()}function Mm(e){let t=ki.get(e);if(t==null)return null;ki.delete(e),Ri++;for(let a of gs)a();return t}function Am(e){return gs.add(e),()=>{gs.delete(e)}}function Tm(){return Ri}function Em(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(it("fieldId")+": "+t),a&&n.push(a),r&&n.push(it("fieldLabel")+": "+r),e.dueDate&&n.push(it("fieldDueDate")+": "+e.dueDate),e.completed!==void 0&&n.push(it("completionStatus")+": "+it(e.completed?"completed":"incomplete")),e.completed&&n.push(it("fieldCompletedDate")+": "+(e.completedAt||it("completedDateUnknown"))),o&&n.push(o),e.imageCount&&n.push(it("imagesChatHint").replace("{count}",String(e.imageCount))),n.join(`

`)}var F=require("react/jsx-runtime");function Om(e,t,a,o,r){let n=e.find(m=>m.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(m=>m.columnId===n.columnId).findIndex(m=>m.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(m=>m.id!==t),i=s.filter(m=>m.columnId===a),d=o?i.findIndex(m=>m.id===o):-1,c=d<0?i.length:d+(r?1:0),u=[...s],f=i[c],p=i[i.length-1],h=f?u.indexOf(f):p?u.indexOf(p)+1:u.length;return u.splice(h,0,{...n,columnId:a}),{cards:u.every((m,C)=>m.id===e[C]?.id&&m.columnId===e[C]?.columnId)?e:u,toIndex:c}}function Fm({workspaceId:e,onCreateConversation:t}){let a=ke(),[o,r]=(0,be.useState)(null),[n,l]=(0,be.useState)(null),[s,i]=(0,be.useState)(""),[d,c]=(0,be.useState)(""),[u,f]=(0,be.useState)([]),[p,h]=(0,be.useState)(null),[g,m]=(0,be.useState)(null),[C,x]=(0,be.useState)(!1),[L,b]=(0,be.useState)(!1),[S,I]=(0,be.useState)(!1),k=Mp(),[y,E]=(0,be.useState)(""),[v,R]=(0,be.useState)(""),[A,q]=(0,be.useState)(null),T=(0,be.useRef)(o),V=(0,be.useRef)(null),W=(0,be.useRef)(e),P=(0,be.useRef)(null);(0,be.useEffect)(()=>()=>{P.current?.abort()},[e]);let N=(0,be.useRef)(0),K=(0,be.useRef)(0);T.current=o,W.current=e;let G=cn(Va(yr,{activationConstraint:{distance:8}}),Va(kr,{activationConstraint:{delay:250,tolerance:5}}),Va(wa,{coordinateGetter:wn})),j=(0,be.useCallback)((w,M,z)=>{W.current!==M||z<K.current||(K.current=z,w&&w.board&&(r({...w.board,completedColumnId:w.board.completedColumnId??null,cards:Array.isArray(w.board.cards)?w.board.cards.map($=>({...$,dueDate:$.dueDate??null,completedAt:$.completedAt??null,comments:Array.isArray($.comments)?$.comments:[],images:Array.isArray($.images)?$.images:[]})):[],activities:Array.isArray(w.board.activities)?w.board.activities:[]}),c("")),w&&"imageLimits"in w&&l(w.persisted===!1?null:w.imageLimits??null),Array.isArray(w&&w.warnings)&&w.warnings.length>0&&f($=>[...$,...w.warnings]))},[]),Y=(0,be.useCallback)(async(w,M={})=>{let z=++N.current;c("");try{let $=await Qr(w,M,e);return j($,e,z),!0}catch($){return c(a("actionFailed")+String($&&$.message||$)),!1}},[e,j,a]),ge=(0,be.useCallback)(()=>{let w=++N.current;I(!0),Qr("get",{},e).then(M=>j(M,e,w)).catch(M=>{W.current===e&&c(a("loadFailed")+String(M&&M.message||M))}).finally(()=>{W.current===e&&I(!1)})},[e,j,a]);(0,be.useEffect)(()=>{let w=!0,M=++N.current;return r(null),l(null),i(""),q(null),R(""),E(""),m(null),h(null),c(""),f([]),Qr("get",{},e).then(z=>{w&&j(z,e,M)}).catch(z=>{w&&c(a("loadFailed")+String(z&&z.message||z))}),()=>{w=!1}},[e,j,a]),(0,be.useEffect)(()=>{o&&q(w=>w&&!o.labels.some(M=>M.name===w)?null:w)},[o?.labels]);let Ae=(0,be.useCallback)(w=>{let M=Nd(w),z=M.length>0?M:Fs(w),$=Pr(z,"id");if($==null)return[];if(new Set((o?.columns??[]).map(B=>B.id)).has(String($))){let B=(o?.cards??[]).filter(X=>X.columnId===$).map(X=>X.id);if(B.length>0){let X=fn({...w,droppableContainers:w.droppableContainers.filter(He=>He.id!==$&&B.includes(String(He.id)))});X.length>0&&($=X[0].id)}}return[{id:$}]},[o]),he=w=>{let M=T.current;if(!M||M.cards===w)return;let z={...M,cards:w};T.current=z,r(z)},U=w=>{if(w.active.data.current?.type!=="card")return;let M=T.current,z=M?.cards.find($=>$.id===w.active.id);!z||!M||(V.current=M.cards,h(z))},Ie=({active:w,over:M})=>{let z=T.current;if(!M||!z||w.data.current?.type!=="card")return;let $=String(w.id),me=z.cards.find(Gt=>Gt.id===$),B=z.cards.find(Gt=>Gt.id===M.id),X=B?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!me||!X||me.columnId===X)return;let He=w.rect.current.translated,ca=!!(B&&He&&He.top+He.height/2>M.rect.top+M.rect.height/2);he(Om(z.cards,$,X,B?.id??null,ca).cards)},Ce=({active:w,over:M})=>{let z=T.current,$=V.current;if(V.current=null,!M||!z||w.data.current?.type!=="card"){$&&he($),h(null);return}let me=String(w.id),B=z.cards.find(fa=>fa.id===M.id),X=B?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!X){$&&he($),h(null);return}let He=w.rect.current.translated,ca=!!(B&&He&&He.top+He.height/2>M.rect.top+M.rect.height/2),Gt=Om(z.cards,me,X,B?.id??null,ca);he(Gt.cards),h(null),(!$||Gt.cards.some((fa,an)=>fa.id!==$[an]?.id||fa.columnId!==$[an]?.columnId))&&Y("moveCard",{id:me,columnId:X,toIndex:Gt.toIndex}).then(fa=>{fa||ge()})},xe=()=>{V.current&&he(V.current),V.current=null,h(null)},H=async w=>{if(!g)return!1;let M=T.current?.cards.find(X=>X.id===(w.id||g.card?.id));if((w.id||g.card?.id)&&!M)throw new Error(a("cardNoLongerExists"));let z=M?{id:M.id}:{columnId:g.columnId,title:w.title,note:w.note,label:w.label||void 0,priority:w.priority||void 0,dueDate:w.dueDate||null};M&&(w.title!==M.title&&(z.title=w.title),w.note!==M.note&&(z.note=w.note),w.label!==(M.label??"")&&(z.label=w.label),w.priority!==(M.priority??"")&&(z.priority=w.priority),w.dueDate!==(M.dueDate??"")&&(z.dueDate=w.dueDate||null));let $=++N.current;c("");let me=await Qr(M?"updateCard":"addCard",z,e);if(j(me,e,$),W.current!==e)return!1;let B=M?.id??me.cardId;if(!B)return!0;if(!M){let X=me.board?.cards.find(He=>He.id===B);X&&m({card:X,columnId:X.columnId})}return{cardId:B}},te=async(w,M,z)=>{let $=++N.current,me=await Ep(e,w,M,z);if(me.persisted===!1)throw new Error(a("actionRetry"));j(me,e,$)},se=(0,be.useCallback)(async w=>{let M=T.current,z=M?.cards.find(me=>me.id===w.id),$=Em({...w,imageCount:z?.images?.length,completedAt:z?.completedAt,completed:z&&M?.completedColumnId?z.columnId===M.completedColumnId:void 0});if(!$)return!1;c("");try{P.current?.abort();let me=new AbortController;P.current=me;let B=await Op(e,z?.id??"",z?.images??[],AbortSignal.any([me.signal,AbortSignal.timeout(3e4)]));return me.signal.aborted?!1:await t(e,{text:$,files:B},me.signal)}catch(me){return c(a("actionFailed")+String(me&&me.message||me)),!1}},[t,e,a]);if(!o)return(0,F.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,F.jsxs)("div",{role:"alert",children:[(0,F.jsx)("p",{className:"kanban-error",children:d}),(0,F.jsx)(le,{variant:"outline",onClick:ge,disabled:S,children:a("retry")})]}):(0,F.jsx)("p",{className:"kanban-muted-text",children:a("loading")})});let Z=o.cards.find(w=>w.id===g?.card?.id);return(0,F.jsxs)("div",{className:"kanban-root kanban-view",children:[d&&!g&&!C&&!L&&(0,F.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(0,F.jsxs)("div",{className:"kanban-search-row",children:[(0,F.jsxs)("div",{className:"kanban-search-field",children:[(0,F.jsx)(pr,{"aria-hidden":"true"}),(0,F.jsx)(Ot,{type:"search","aria-label":a("searchCards"),placeholder:a("searchPlaceholder"),maxLength:200,value:s,onChange:w=>i(w.target.value)}),s&&(0,F.jsx)(le,{variant:"ghost",size:"icon","aria-label":a("clearSearch"),onClick:()=>i(""),children:(0,F.jsx)(lt,{})})]}),(0,F.jsxs)("div",{className:"kanban-toolbar",children:[(0,F.jsxs)(bo,{children:[(0,F.jsx)(Io,{asChild:!0,children:(0,F.jsx)(le,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${v?" is-active":""}`,title:a("priorityFilter"),"aria-label":a("priorityFilter"),"aria-pressed":!!v,children:(0,F.jsx)(Ca,{className:"kanban-icon"})})}),(0,F.jsxs)(Ta,{align:"start",children:[(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":!v,onSelect:()=>R(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:!v&&(0,F.jsx)(at,{className:"kanban-icon"})}),a("all")]}),ls.map(w=>(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":v===w,onSelect:()=>R(w),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:v===w&&(0,F.jsx)(at,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-priority-dot",style:{background:zt[w].color}}),zt[w].label]},w))]})]}),(0,F.jsxs)(bo,{children:[(0,F.jsx)(Io,{asChild:!0,children:(0,F.jsx)(le,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${A!==null?" is-active":""}`,title:A===null?a("labelFilter"):`${a("labelFilter")}: ${A||a("noLabel")}`,"aria-label":a("labelFilter"),"aria-pressed":A!==null,children:(0,F.jsx)(ko,{className:"kanban-icon"})})}),(0,F.jsxs)(Ta,{align:"start",children:[(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":A===null,onSelect:()=>q(null),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:A===null&&(0,F.jsx)(at,{className:"kanban-icon"})}),a("all")]}),(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":A==="",onSelect:()=>q(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:A===""&&(0,F.jsx)(at,{className:"kanban-icon"})}),a("noLabel")]}),o.labels.map(w=>(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":A===w.name,onSelect:()=>q(w.name),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:A===w.name&&(0,F.jsx)(at,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-label-dot",style:{background:w.color}}),w.name]},w.name))]})]}),(0,F.jsxs)(bo,{children:[(0,F.jsx)(Io,{asChild:!0,children:(0,F.jsx)(le,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${y?" is-active":""}`,title:a("dueDateFilter"),"aria-label":a("dueDateFilter"),"aria-pressed":!!y,children:(0,F.jsx)(Ea,{className:"kanban-icon"})})}),(0,F.jsx)(Ta,{align:"start",children:["","today","overdue"].map(w=>(0,F.jsxs)(ht,{role:"menuitemradio","aria-checked":y===w,onSelect:()=>E(w),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:y===w&&(0,F.jsx)(at,{className:"kanban-icon"})}),a(w==="today"?"dueToday":w==="overdue"?"overdue":"all")]},w))})]})]}),(0,F.jsxs)(bo,{children:[(0,F.jsx)(Io,{asChild:!0,children:(0,F.jsx)(le,{variant:"ghost",size:"icon",className:"kanban-toolbar-button kanban-toolbar-settings",title:a("settings"),"aria-label":a("settings"),children:(0,F.jsx)(gr,{className:"kanban-icon"})})}),(0,F.jsxs)(Ta,{align:"end",children:[(0,F.jsxs)(ht,{disabled:S,onSelect:ge,children:[(0,F.jsx)(Ia,{className:S?"kanban-animate-spin":void 0}),a("refresh")]}),(0,F.jsxs)(ht,{onClick:()=>{c(""),x(!0)},children:[(0,F.jsx)(cr,{className:"kanban-icon"}),a("columnEdit")]}),(0,F.jsxs)(ht,{onClick:()=>{c(""),b(!0)},children:[(0,F.jsx)(ko,{className:"kanban-icon"}),a("labelEdit")]}),(0,F.jsx)(yi,{}),(0,F.jsx)(ht,{asChild:!0,children:(0,F.jsxs)("a",{href:"https://github.com/alpacachen/dsh-kanban/issues/new/choose",target:"_blank",rel:"noopener noreferrer",children:[(0,F.jsx)(oa,{className:"kanban-icon"}),a("feedback")]})})]})]})]}),(s.trim()||v||A!==null||y)&&(0,F.jsxs)("div",{className:"kanban-filter-summary","aria-label":a("clearFilter"),children:[s.trim()&&(0,F.jsx)("span",{className:"kanban-muted-small",role:"status",children:a("searchResults").replace("{count}",String(o.cards.filter(w=>li(w,s)&&(!v||w.priority===v)&&(A===null||(w.label??"")===A)&&ti(w,y,o.completedColumnId,k)).length))}),y&&(0,F.jsxs)(le,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${a(y==="today"?"dueToday":"overdue")}`,onClick:()=>E(""),children:[a(y==="today"?"dueToday":"overdue"),(0,F.jsx)(lt,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),v&&(0,F.jsxs)(le,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${zt[v].label}`,onClick:()=>R(""),children:[a("fieldPriority"),": ",zt[v].label,(0,F.jsx)(lt,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),A!==null&&(0,F.jsxs)(le,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${A||a("noLabel")}`,onClick:()=>q(null),children:[a("fieldLabel"),": ",A||a("noLabel"),(0,F.jsx)(lt,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),u.length>0&&(0,F.jsxs)("div",{className:"kanban-warning",children:[(0,F.jsxs)("div",{className:"kanban-warning-body",children:[(0,F.jsx)("p",{className:"kanban-warning-title",children:a("warnings")}),u.map((w,M)=>(0,F.jsx)("p",{className:"kanban-warning-item",children:w},M))]}),(0,F.jsx)(le,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>f([]),children:a("dismiss")})]}),(0,F.jsxs)(gn,{sensors:G,collisionDetection:Ae,onDragStart:U,onDragOver:Ie,onDragEnd:Ce,onDragCancel:xe,children:[(0,F.jsx)("div",{className:"kanban-content",children:(0,F.jsx)("div",{className:"kanban-board-scroll",children:o.columns.map(w=>{let M=o.cards.filter(z=>z.columnId===w.id&&li(z,s)&&(!v||z.priority===v)&&(A===null||(z.label??"")===A)&&(z.id===p?.id||ti(z,y,o.completedColumnId,k)));return(0,F.jsx)(zp,{column:w,cards:M,totalCount:o.cards.filter(z=>z.columnId===w.id).length,filtered:!!(v||y||s.trim())||A!==null,completed:w.id===o.completedColumnId,today:k,labels:o.labels,query:s,onAddCard:z=>{c(""),m({card:null,columnId:z.id})},onOpenCard:z=>{c(""),m({card:z,columnId:z.columnId})}},w.id)})})}),(0,F.jsx)(eu,{children:p?(0,F.jsx)("div",{className:"kanban-drag-preview",children:(0,F.jsx)(si,{card:p,labels:o.labels,completed:p.columnId===o.completedColumnId,today:k})}):null})]}),(0,F.jsx)(qp,{workspaceId:e,imageLimits:n,images:Z?.images??[],onUploadImage:te,onRemoveImage:(w,M)=>Y("removeImage",{id:w,attachmentId:M}),error:d,open:g!==null,card:g?.card??null,labels:o.labels,completed:!!(Z&&Z.columnId===o.completedColumnId),completedAt:Z?.completedAt??null,comments:Z?.comments??[],activities:g?.card?o.activities.filter(w=>w.cardId===g.card.id):[],onOpenChange:w=>{w||m(null)},onSave:H,onAddComment:(w,M)=>Y("addComment",{id:w,content:M}),onDelete:w=>Y("deleteCard",{id:w.id}),onChatWithAgent:se},e),(0,F.jsx)(Vp,{error:d,open:C,columns:o.columns,completedColumnId:o.completedColumnId,onSetCompletedColumn:w=>Y("setCompletedColumn",{columnId:w}),onOpenChange:x,onReorder:(w,M)=>{let z=o.columns.findIndex($=>$.id===M);return z>=0?Y("moveColumn",{id:w,toIndex:z}):Promise.resolve(!1)},onRename:(w,M)=>Y("renameColumn",{id:w,title:M}),onDelete:w=>Y("deleteColumn",{id:w}),onAdd:w=>Y("addColumn",{title:w})}),(0,F.jsx)(Gp,{error:d,open:L,labels:o.labels,onOpenChange:b,onAdd:(w,M)=>Y("addLabel",{name:w,color:M}),onUpdate:(w,M,z)=>Y("updateLabel",{name:w,newName:M,color:z}),onDelete:w=>Y("deleteLabel",{name:w})})]})}var et=require("react/jsx-runtime"),Pi="dsh-kanban:workspace";function Bm({useWorkspaces:e,useSessions:t,onCreateConversation:a}){let o=ke(),{items:r,phase:n,state:l,error:s}=e(p=>p),i=t(p=>Object.values(p.byId).find(h=>(h.retainedBy.mainView??0)>0)?.id),[d,c]=(0,hs.useState)(()=>{try{return localStorage.getItem(Pi)??""}catch{return""}}),u=r.find(p=>p.workspaceId===d)??r.find(p=>i&&p.sessionIds.includes(i))??(r.length===1?r[0]:void 0),f=u?.workspaceId??"";return(0,hs.useEffect)(()=>{if(n==="ready"){c(f);try{f?localStorage.setItem(Pi,f):localStorage.removeItem(Pi)}catch{}}},[f,n]),(0,et.jsx)("section",{className:"kanban-root kanban-panel","aria-label":o("boardTab"),children:(0,et.jsxs)("div",{className:"kanban-panel-body",children:[(0,et.jsx)("header",{className:"kanban-panel-header",children:(0,et.jsx)("h1",{children:(0,et.jsxs)(bo,{children:[(0,et.jsx)(Io,{asChild:!0,children:(0,et.jsxs)("button",{type:"button",className:"kanban-workspace-trigger",disabled:!r.length,"aria-label":`${o("selectWorkspace")}: ${u?.title??o("boardTab")}`,title:u?.title,children:[(0,et.jsx)("span",{children:u?.title??o("selectWorkspace")}),(0,et.jsx)(La,{"aria-hidden":"true"})]})}),(0,et.jsx)(Ta,{align:"start",className:"kanban-workspace-menu",children:r.map(p=>(0,et.jsxs)(ht,{"aria-current":f===p.workspaceId?"page":void 0,title:p.title,onSelect:()=>c(p.workspaceId),children:[(0,et.jsx)("span",{className:"kanban-workspace-name",children:p.title}),f===p.workspaceId&&(0,et.jsx)(at,{"aria-hidden":"true",className:"kanban-icon"})]},p.workspaceId))})]})})}),u?(0,et.jsx)(Fm,{workspaceId:u.workspaceId,onCreateConversation:a},f):(0,et.jsx)("div",{className:"kanban-panel-empty",role:l==="error"?"alert":"status",children:l==="error"?`${o("loadFailed")}${s?.message??""}`:o(n!=="ready"?"loadingWorkspaces":r.length?"selectWorkspaceHint":"noWorkspaces")})]})})}var er=require("react");var xs=require("react/jsx-runtime");function Nm({sessionId:e,inputActions:t,attachmentDrafts:a}){let o=(0,er.useSyncExternalStore)(Am,Tm),[r,n]=(0,er.useState)(null),l=ke(),s=i=>{try{Pm(e,t,i,a),n(null)}catch(d){n({sessionId:e,draft:i,message:String(d instanceof Error?d.message:d)})}};return(0,er.useEffect)(()=>{if(!e||!t?.setDraft)return;let i=Mm(e);i&&s(i)},[o,e,t,a]),!r||r.sessionId!==e?null:(0,xs.jsxs)("div",{role:"alert",className:"kanban-dialog-error",children:[l("actionFailed"),r.message,(0,xs.jsx)(le,{variant:"ghost",size:"sm",onClick:()=>s(r.draft),children:l("retry")})]})}var _m={name:"dsh-kanban",inject:["slots","locale","layout","sessions","uiWorkspace","conversation"],apply(e){Oc(e);let t=e.get("slots");if(t===void 0)return;let a=e.uiWorkspace,o=e.sessions,r=e.layout,n=new AbortController,l=e.get("conversation"),s=async(i,d,c)=>{if(d.files.length&&(!l?.createDrafts||!l.releaseDraftAttachments))throw new Error(it("chatImagesUnavailable"));let u=AbortSignal.any([c,n.signal,r.beginNavigation()]);if(u.aborted)return!1;let f=await o.create({workspaceId:i});return u.aborted?!1:(Dm(f,d.text,d.files),a.openSession(f),!0)};t.inject("main",()=>t.register({name:"main",key:"kanban"},i=>(0,Ls.createElement)(Bm,{...i,onCreateConversation:s}))),t.inject("sidebar.panellist",()=>t.register({name:"sidebar.panellist",id:"kanban",order:30,label:()=>it("boardTab")},({size:i})=>(0,Ls.createElement)(ba,{size:i,strokeWidth:1.5}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},i=>(0,Ls.createElement)(Nm,{...i,attachmentDrafts:l}))),e.effect(()=>()=>{n.abort(),r.panelInfo.getSnapshot().activePanelId==="kanban"&&r.selectPanel(null)})}};var qm="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+qm+"]")){let e=document.createElement("style");e.setAttribute(qm,""),e.textContent=Ni,document.head.appendChild(e)}var pb=_m;
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
lucide-react/dist/esm/icons/image-plus.mjs:
lucide-react/dist/esm/icons/image.mjs:
lucide-react/dist/esm/icons/list.mjs:
lucide-react/dist/esm/icons/loader-circle.mjs:
lucide-react/dist/esm/icons/message-square.mjs:
lucide-react/dist/esm/icons/panels-top-left.mjs:
lucide-react/dist/esm/icons/pencil.mjs:
lucide-react/dist/esm/icons/plus.mjs:
lucide-react/dist/esm/icons/refresh-cw.mjs:
lucide-react/dist/esm/icons/search.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/settings-2.mjs:
lucide-react/dist/esm/icons/tag.mjs:
lucide-react/dist/esm/icons/tags.mjs:
lucide-react/dist/esm/icons/trash.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.66.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})