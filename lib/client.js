window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Um=Object.create;var ln=Object.defineProperty;var qm=Object.getOwnPropertyDescriptor;var zm=Object.getOwnPropertyNames;var Wm=Object.getPrototypeOf,Vm=Object.prototype.hasOwnProperty;var Ti=e=>{throw TypeError(e)};var Gm=(e,t)=>{for(var a in t)ln(e,a,{get:t[a],enumerable:!0})},Ei=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of zm(t))!Vm.call(e,r)&&r!==a&&ln(e,r,{get:()=>t[r],enumerable:!(o=qm(t,r))||o.enumerable});return e};var J=(e,t,a)=>(a=e!=null?Um(Wm(e)):{},Ei(t||!e||!e.__esModule?ln(a,"default",{value:e,enumerable:!0}):a,e)),Xm=e=>Ei(ln({},"__esModule",{value:!0}),e);var Fi=(e,t,a)=>t.has(e)||Ti("Cannot "+a);var et=(e,t,a)=>(Fi(e,t,"read from private field"),a?a.call(e):t.get(e)),Oi=(e,t,a)=>t.has(e)?Ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),ws=(e,t,a,o)=>(Fi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var iL={};Gm(iL,{default:()=>lL});module.exports=Xm(iL);var Bi=`/*
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
`;var Di=require("react");var be=require("react");var D=J(require("react")),Va=require("react-dom");var _e=require("react");function _i(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,_e.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var dr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _a(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function un(e){return"nodeType"in e}function st(e){var t,a;return e?_a(e)?e:un(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function dn(e){let{Document:t}=st(e);return e instanceof t}function Do(e){return _a(e)?!1:e instanceof st(e).HTMLElement}function ys(e){return e instanceof st(e).SVGElement}function Ha(e){return e?_a(e)?e.document:un(e)?dn(e)?e:Do(e)||ys(e)?e.ownerDocument:document:document:document}var kt=dr?_e.useLayoutEffect:_e.useEffect;function cr(e){let t=(0,_e.useRef)(e);return kt(()=>{t.current=e}),(0,_e.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function Hi(){let e=(0,_e.useRef)(null),t=(0,_e.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,_e.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Mo(e,t){t===void 0&&(t=[e]);let a=(0,_e.useRef)(e);return kt(()=>{a.current!==e&&(a.current=e)},t),a}function Ao(e,t){let a=(0,_e.useRef)();return(0,_e.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function fr(e){let t=cr(e),a=(0,_e.useRef)(null),o=(0,_e.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function pr(e){let t=(0,_e.useRef)();return(0,_e.useEffect)(()=>{t.current=e},[e]),t.current}var Ss={};function Ua(e,t){return(0,_e.useMemo)(()=>{if(t)return t;let a=Ss[e]==null?0:Ss[e]+1;return Ss[e]=a,e+"-"+a},[e,t])}function Ui(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[u,i]of s){let c=n[u];c!=null&&(n[u]=c+e*i)}return n},{...t})}}var qa=Ui(1),za=Ui(-1);function $m(e){return"clientX"in e&&"clientY"in e}function To(e){if(!e)return!1;let{KeyboardEvent:t}=st(e.target);return t&&e instanceof t}function jm(e){if(!e)return!1;let{TouchEvent:t}=st(e.target);return t&&e instanceof t}function mr(e){if(jm(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return $m(e)?{x:e.clientX,y:e.clientY}:null}var yt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[yt.Translate.toString(e),yt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),Ni="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function qi(e){return e.matches(Ni)?e:e.querySelector(Ni)}var Wa=J(require("react")),Ym={display:"none"};function zi(e){let{id:t,value:a}=e;return Wa.default.createElement("div",{id:t,style:Ym},a)}function Wi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Wa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Vi(){let[e,t]=(0,Wa.useState)("");return{announce:(0,Wa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var ou=(0,D.createContext)(null);function Zm(e){let t=(0,D.useContext)(ou);(0,D.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Jm(){let[e]=(0,D.useState)(()=>new Set),t=(0,D.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,D.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Qm={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},eg={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function tg(e){let{announcements:t=eg,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Qm}=e,{announce:n,announcement:l}=Vi(),s=Ua("DndLiveRegion"),[u,i]=(0,D.useState)(!1);if((0,D.useEffect)(()=>{i(!0)},[]),Zm((0,D.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;t.onDragMove&&n(t.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;n(t.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;n(t.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;n(t.onDragCancel({active:f,over:p}))}}),[n,t])),!u)return null;let c=D.default.createElement(D.default.Fragment,null,D.default.createElement(zi,{id:o,value:r.draggable}),D.default.createElement(Wi,{id:s,announcement:l}));return a?(0,Va.createPortal)(c,a):c}var Ge;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ge||(Ge={}));function fn(){}function Ka(e,t){return(0,D.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function mn(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,D.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Wt=Object.freeze({x:0,y:0});function Es(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ag(e,t){let a=mr(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Fs(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function og(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Ds(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function vr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Gi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var ru=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Gi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,u=a.get(s);if(u){let i=Es(Gi(u),r);n.push({id:s,data:{droppableContainer:l,value:i}})}}return n.sort(Fs)},gn=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ds(t),n=[];for(let l of o){let{id:s}=l,u=a.get(s);if(u){let i=Ds(u),c=r.reduce((f,p,h)=>f+Es(i[h],p),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(Fs)};function rg(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let u=t.width*t.height,i=e.width*e.height,c=l*s,d=c/(u+i-c);return Number(d.toFixed(4))}return 0}var Os=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let u=rg(s,t);u>0&&r.push({id:l,data:{droppableContainer:n,value:u}})}}return r.sort(og)};function ng(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var nu=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&ng(o,s)){let i=Ds(s).reduce((d,f)=>d+Es(o,f),0),c=Number((i/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(Fs)};function sg(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function su(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Wt}function lg(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var ig=lg(1);function lu(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function ug(e,t,a){let o=lu(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,u=e.left-l-(1-r)*parseFloat(a),i=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:i,right:u+c,bottom:i+d,left:u}}var dg={ignoreTransform:!1};function $a(e,t){t===void 0&&(t=dg);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:i,transformOrigin:c}=st(e).getComputedStyle(e);i&&(a=ug(a,i,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:u}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:u}}function Xi(e){return $a(e,{ignoreTransform:!0})}function cg(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function fg(e,t){return t===void 0&&(t=st(e).getComputedStyle(e)),t.position==="fixed"}function pg(e,t){t===void 0&&(t=st(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Ir(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(dn(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Do(r)||ys(r)||a.includes(r))return a;let n=st(e).getComputedStyle(r);return r!==e&&pg(r,n)&&a.push(r),fg(r,n)?a:o(r.parentNode)}return e?o(e):a}function iu(e){let[t]=Ir(e,1);return t??null}function ks(e){return!dr||!e?null:_a(e)?e:un(e)?dn(e)||e===Ha(e).scrollingElement?window:Do(e)?e:null:null}function uu(e){return _a(e)?e.scrollX:e.scrollLeft}function du(e){return _a(e)?e.scrollY:e.scrollTop}function Ms(e){return{x:uu(e),y:du(e)}}var $e;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})($e||($e={}));function cu(e){return!dr||!e?!1:e===document.scrollingElement}function fu(e){let t={x:0,y:0},a=cu(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var mg={x:.2,y:.2};function gg(e,t,a,o,r){let{top:n,left:l,right:s,bottom:u}=a;o===void 0&&(o=10),r===void 0&&(r=mg);let{isTop:i,isBottom:c,isLeft:d,isRight:f}=fu(e),p={x:0,y:0},h={x:0,y:0},g={height:t.height*r.y,width:t.width*r.x};return!i&&n<=t.top+g.height?(p.y=$e.Backward,h.y=o*Math.abs((t.top+g.height-n)/g.height)):!c&&u>=t.bottom-g.height&&(p.y=$e.Forward,h.y=o*Math.abs((t.bottom-g.height-u)/g.height)),!f&&s>=t.right-g.width?(p.x=$e.Forward,h.x=o*Math.abs((t.right-g.width-s)/g.width)):!d&&l<=t.left+g.width&&(p.x=$e.Backward,h.x=o*Math.abs((t.left+g.width-l)/g.width)),{direction:p,speed:h}}function hg(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function pu(e){return e.reduce((t,a)=>qa(t,Ms(a)),Wt)}function xg(e){return e.reduce((t,a)=>t+uu(a),0)}function bg(e){return e.reduce((t,a)=>t+du(a),0)}function mu(e,t){if(t===void 0&&(t=$a),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);iu(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Cg=[["x",["left","right"],xg],["y",["top","bottom"],bg]],hr=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Ir(a),r=pu(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Cg)for(let u of l)Object.defineProperty(this,u,{get:()=>{let i=s(o),c=r[n]-i;return this.rect[u]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Ga=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Lg(e){let{EventTarget:t}=st(e);return e instanceof t?e:Ha(e)}function Rs(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Ot;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ot||(Ot={}));function Ki(e){e.preventDefault()}function vg(e){e.stopPropagation()}var ge;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ge||(ge={}));var gu={start:[ge.Space,ge.Enter],cancel:[ge.Esc],end:[ge.Space,ge.Enter,ge.Tab]},Ig=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ge.Right:return{...a,x:a.x+25};case ge.Left:return{...a,x:a.x-25};case ge.Down:return{...a,y:a.y+25};case ge.Up:return{...a,y:a.y-25}}},ya=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Ga(Ha(a)),this.windowListeners=new Ga(st(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ot.Resize,this.handleCancel),this.windowListeners.add(Ot.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ot.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&mu(o),a(Wt)}handleKeyDown(t){if(To(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=gu,coordinateGetter:l=Ig,scrollBehavior:s="smooth"}=r,{code:u}=t;if(n.end.includes(u)){this.handleEnd(t);return}if(n.cancel.includes(u)){this.handleCancel(t);return}let{collisionRect:i}=o.current,c=i?{x:i.left,y:i.top}:Wt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=za(d,c),p={x:0,y:0},{scrollableAncestors:h}=o.current;for(let g of h){let m=t.code,{isTop:C,isRight:x,isLeft:b,isBottom:L,maxScroll:w,minScroll:v}=fu(g),S=hg(g),y={x:Math.min(m===ge.Right?S.right-S.width/2:S.right,Math.max(m===ge.Right?S.left:S.left+S.width/2,d.x)),y:Math.min(m===ge.Down?S.bottom-S.height/2:S.bottom,Math.max(m===ge.Down?S.top:S.top+S.height/2,d.y))},A=m===ge.Right&&!x||m===ge.Left&&!b,I=m===ge.Down&&!L||m===ge.Up&&!C;if(A&&y.x!==d.x){let P=g.scrollLeft+f.x,T=m===ge.Right&&P<=w.x||m===ge.Left&&P>=v.x;if(T&&!f.y){g.scrollTo({left:P,behavior:s});return}T?p.x=g.scrollLeft-P:p.x=m===ge.Right?g.scrollLeft-w.x:g.scrollLeft-v.x,p.x&&g.scrollBy({left:-p.x,behavior:s});break}else if(I&&y.y!==d.y){let P=g.scrollTop+f.y,T=m===ge.Down&&P<=w.y||m===ge.Up&&P>=v.y;if(T&&!f.x){g.scrollTo({top:P,behavior:s});return}T?p.y=g.scrollTop-P:p.y=m===ge.Down?g.scrollTop-w.y:g.scrollTop-v.y,p.y&&g.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,qa(za(d,this.referenceCoordinates),p))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ya.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=gu,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function $i(e){return!!(e&&"distance"in e)}function ji(e){return!!(e&&"delay"in e)}var xr=class{constructor(t,a,o){var r;o===void 0&&(o=Lg(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=Ha(l),this.documentListeners=new Ga(this.document),this.listeners=new Ga(o),this.windowListeners=new Ga(st(l)),this.initialCoordinates=(r=mr(n))!=null?r:Wt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Ot.Resize,this.handleCancel),this.windowListeners.add(Ot.DragStart,Ki),this.windowListeners.add(Ot.VisibilityChange,this.handleCancel),this.windowListeners.add(Ot.ContextMenu,Ki),this.documentListeners.add(Ot.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ji(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if($i(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Ot.Click,vg,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ot.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let u=(a=mr(t))!=null?a:Wt,i=za(r,u);if(!o&&s){if($i(s)){if(s.tolerance!=null&&Rs(i,s.tolerance))return this.handleCancel();if(Rs(i,s.distance))return this.handleStart()}if(ji(s)&&Rs(i,s.tolerance))return this.handleCancel();this.handlePending(s,i);return}t.cancelable&&t.preventDefault(),l(u)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ge.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},wg={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Eo=class extends xr{constructor(t){let{event:a}=t,o=Ha(a.target);super(t,wg,o)}};Eo.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Sg={move:{name:"mousemove"},end:{name:"mouseup"}},As;(function(e){e[e.RightClick=2]="RightClick"})(As||(As={}));var br=class extends xr{constructor(t){super(t,Sg,Ha(t.event.target))}};br.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===As.RightClick?!1:(o?.({event:a}),!0)}}];var Ps={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Cr=class extends xr{constructor(t){super(t,Ps)}static setup(){return window.addEventListener(Ps.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Ps.move.name,t)};function t(){}}};Cr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var gr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(gr||(gr={}));var pn;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(pn||(pn={}));function yg(e){let{acceleration:t,activator:a=gr.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=pn.TreeOrder,pointerCoordinates:u,scrollableAncestors:i,scrollableAncestorRects:c,delta:d,threshold:f}=e,p=Rg({delta:d,disabled:!n}),[h,g]=Hi(),m=(0,D.useRef)({x:0,y:0}),C=(0,D.useRef)({x:0,y:0}),x=(0,D.useMemo)(()=>{switch(a){case gr.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case gr.DraggableRect:return r}},[a,r,u]),b=(0,D.useRef)(null),L=(0,D.useCallback)(()=>{let v=b.current;if(!v)return;let S=m.current.x*C.current.x,y=m.current.y*C.current.y;v.scrollBy(S,y)},[]),w=(0,D.useMemo)(()=>s===pn.TreeOrder?[...i].reverse():i,[s,i]);(0,D.useEffect)(()=>{if(!n||!i.length||!x){g();return}for(let v of w){if(o?.(v)===!1)continue;let S=i.indexOf(v),y=c[S];if(!y)continue;let{direction:A,speed:I}=gg(v,y,x,t,f);for(let P of["x","y"])p[P][A[P]]||(I[P]=0,A[P]=0);if(I.x>0||I.y>0){g(),b.current=v,h(L,l),m.current=I,C.current=A;return}}m.current={x:0,y:0},C.current={x:0,y:0},g()},[t,L,o,g,n,l,JSON.stringify(x),JSON.stringify(p),h,i,w,c,JSON.stringify(f)])}var kg={x:{[$e.Backward]:!1,[$e.Forward]:!1},y:{[$e.Backward]:!1,[$e.Forward]:!1}};function Rg(e){let{delta:t,disabled:a}=e,o=pr(t);return Ao(r=>{if(a||!o||!r)return kg;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[$e.Backward]:r.x[$e.Backward]||n.x===-1,[$e.Forward]:r.x[$e.Forward]||n.x===1},y:{[$e.Backward]:r.y[$e.Backward]||n.y===-1,[$e.Forward]:r.y[$e.Forward]||n.y===1}}},[a,t,o])}function Pg(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Ao(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Dg(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Lr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Lr||(Lr={}));var Ts;(function(e){e.Optimized="optimized"})(Ts||(Ts={}));var Yi=new Map;function Mg(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,D.useState)(null),{frequency:s,measure:u,strategy:i}=r,c=(0,D.useRef)(e),d=m(),f=Mo(d),p=(0,D.useCallback)(function(C){C===void 0&&(C=[]),!f.current&&l(x=>x===null?C:x.concat(C.filter(b=>!x.includes(b))))},[f]),h=(0,D.useRef)(null),g=Ao(C=>{if(d&&!a)return Yi;if(!C||C===Yi||c.current!==e||n!=null){let x=new Map;for(let b of e){if(!b)continue;if(n&&n.length>0&&!n.includes(b.id)&&b.rect.current){x.set(b.id,b.rect.current);continue}let L=b.node.current,w=L?new hr(u(L),L):null;b.rect.current=w,w&&x.set(b.id,w)}return x}return C},[e,n,a,d,u]);return(0,D.useEffect)(()=>{c.current=e},[e]),(0,D.useEffect)(()=>{d||p()},[a,d]),(0,D.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,D.useEffect)(()=>{d||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{p(),h.current=null},s))},[s,d,p,...o]),{droppableRects:g,measureDroppableContainers:p,measuringScheduled:n!=null};function m(){switch(i){case Lr.Always:return!1;case Lr.BeforeDragging:return a;default:return!a}}}function Bs(e,t){return Ao(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Ag(e,t){return Bs(e,t)}function Tg(e){let{callback:t,disabled:a}=e,o=cr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function hn(e){let{callback:t,disabled:a}=e,o=cr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Eg(e){return new hr($a(e),e)}function Zi(e,t,a){t===void 0&&(t=Eg);let[o,r]=(0,D.useState)(null);function n(){r(u=>{if(!e)return null;if(e.isConnected===!1){var i;return(i=u??a)!=null?i:null}let c=t(e);return JSON.stringify(u)===JSON.stringify(c)?u:c})}let l=Tg({callback(u){if(e)for(let i of u){let{type:c,target:d}=i;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=hn({callback:n});return kt(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Fg(e){let t=Bs(e);return su(e,t)}var Ji=[];function Og(e){let t=(0,D.useRef)(e),a=Ao(o=>e?o&&o!==Ji&&e&&t.current&&e.parentNode===t.current.parentNode?o:Ir(e):Ji,[e]);return(0,D.useEffect)(()=>{t.current=e},[e]),a}function Bg(e){let[t,a]=(0,D.useState)(null),o=(0,D.useRef)(e),r=(0,D.useCallback)(n=>{let l=ks(n.target);l&&a(s=>s?(s.set(l,Ms(l)),new Map(s)):null)},[]);return(0,D.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(u=>{let i=ks(u);return i?(i.addEventListener("scroll",r,{passive:!0}),[i,Ms(i)]):null}).filter(u=>u!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(u=>{let i=ks(u);i?.removeEventListener("scroll",r)})}},[r,e]),(0,D.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>qa(n,l),Wt):pu(e):Wt,[e,t])}function Qi(e,t){t===void 0&&(t=[]);let a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current=null},t),(0,D.useEffect)(()=>{let o=e!==Wt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?za(e,a.current):Wt}function Ng(e){(0,D.useEffect)(()=>{if(!dr)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function _g(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function hu(e){return(0,D.useMemo)(()=>e?cg(e):null,[e])}var eu=[];function Hg(e,t){t===void 0&&(t=$a);let[a]=e,o=hu(a?st(a):null),[r,n]=(0,D.useState)(eu);function l(){n(()=>e.length?e.map(u=>cu(u)?o:new hr(t(u),u)):eu)}let s=hn({callback:l});return kt(()=>{s?.disconnect(),l(),e.forEach(u=>s?.observe(u))},[e]),r}function xu(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Do(t)?t:e}function Ug(e){let{measure:t}=e,[a,o]=(0,D.useState)(null),r=(0,D.useCallback)(i=>{for(let{target:c}of i)if(Do(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=hn({callback:r}),l=(0,D.useCallback)(i=>{let c=xu(i);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,u]=fr(l);return(0,D.useMemo)(()=>({nodeRef:s,rect:a,setRef:u}),[a,s,u])}var qg=[{sensor:Eo,options:{}},{sensor:ya,options:{}}],zg={current:{}},cn={draggable:{measure:Xi},droppable:{measure:Xi,strategy:Lr.WhileDragging,frequency:Ts.Optimized},dragOverlay:{measure:$a}},Xa=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Wg={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Xa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:fn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:cn,measureDroppableContainers:fn,windowRect:null,measuringScheduled:!1},bu={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:fn,draggableNodes:new Map,over:null,measureDroppableContainers:fn},wr=(0,D.createContext)(bu),Cu=(0,D.createContext)(Wg);function Vg(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Xa}}}function Gg(e,t){switch(t.type){case Ge.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ge.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Ge.DragEnd:case Ge.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ge.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Xa(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Ge.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new Xa(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Ge.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Xa(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Xg(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,D.useContext)(wr),n=pr(o),l=pr(a?.id);return(0,D.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!To(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:u,node:i}=s;if(!u.current&&!i.current)return;requestAnimationFrame(()=>{for(let c of[u.current,i.current]){if(!c)continue;let d=qi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Lu(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Kg(e){return(0,D.useMemo)(()=>({draggable:{...cn.draggable,...e?.draggable},droppable:{...cn.droppable,...e?.droppable},dragOverlay:{...cn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function $g(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,D.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;kt(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let i=t?.node.current;if(!i||i.isConnected===!1)return;let c=a(i),d=su(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=iu(i);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var xn=(0,D.createContext)({...Wt,scaleX:1,scaleY:1}),Sa;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Sa||(Sa={}));var bn=(0,D.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:u=!0,children:i,sensors:c=qg,collisionDetection:d=Os,measuring:f,modifiers:p,...h}=t,g=(0,D.useReducer)(Gg,void 0,Vg),[m,C]=g,[x,b]=Jm(),[L,w]=(0,D.useState)(Sa.Uninitialized),v=L===Sa.Initialized,{draggable:{active:S,nodes:y,translate:A},droppable:{containers:I}}=m,P=S!=null?y.get(S):null,T=(0,D.useRef)({initial:null,translated:null}),U=(0,D.useMemo)(()=>{var nt;return S!=null?{id:S,data:(nt=P?.data)!=null?nt:zg,rect:T}:null},[S,P]),M=(0,D.useRef)(null),[q,V]=(0,D.useState)(null),[R,B]=(0,D.useState)(null),_=Mo(h,Object.values(h)),G=Ua("DndDescribedBy",l),ee=(0,D.useMemo)(()=>I.getEnabled(),[I]),$=Kg(f),{droppableRects:me,measureDroppableContainers:Te,measuringScheduled:Se}=Mg(ee,{dragging:v,dependencies:[A.x,A.y],config:$.droppable}),H=Pg(y,S),ye=(0,D.useMemo)(()=>R?mr(R):null,[R]),we=Hm(),Ce=Ag(H,$.draggable.measure);$g({activeNode:S!=null?y.get(S):null,config:we.layoutShiftCompensation,initialRect:Ce,measure:$.draggable.measure});let N=Zi(H,$.draggable.measure,Ce),j=Zi(H?H.parentElement:null),Y=(0,D.useRef)({activatorEvent:null,active:null,activeNode:H,collisionRect:null,collisions:null,droppableRects:me,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ae=I.getNodeFor((a=Y.current.over)==null?void 0:a.id),oe=Ug({measure:$.dragOverlay.measure}),Z=(o=oe.nodeRef.current)!=null?o:H,dt=v?(r=oe.rect)!=null?r:N:null,rt=!!(oe.nodeRef.current&&oe.rect),qt=Fg(rt?null:N),W=hu(Z?st(Z):null),ue=Og(v?ae??H:null),Ca=Hg(ue),Ro=Lu(p,{transform:{x:A.x-qt.x,y:A.y-qt.y,scaleX:1,scaleY:1},activatorEvent:R,active:U,activeNodeRect:N,containerNodeRect:j,draggingNodeRect:dt,over:Y.current.over,overlayNodeRect:oe.rect,scrollableAncestors:ue,scrollableAncestorRects:Ca,windowRect:W}),La=ye?qa(ye,A):null,k=Bg(ue),z=Qi(k),X=Qi(k,[N]),K=qa(Ro,z),Le=dt?ig(dt,Ro):null,le=U&&Le?d({active:U,collisionRect:Le,droppableRects:me,droppableContainers:ee,pointerCoordinates:La}):null,ve=vr(le,"id"),[Pe,zt]=(0,D.useState)(null),Et=rt?Ro:qa(Ro,X),Mi=sg(Et,(n=Pe?.rect)!=null?n:null,N),Qt=(0,D.useRef)(null),sr=(0,D.useCallback)((nt,It)=>{let{sensor:wt,options:va}=It;if(M.current==null)return;let Ft=y.get(M.current);if(!Ft)return;let St=nt.nativeEvent,ea=new wt({active:M.current,activeNode:Ft,event:St,options:va,context:Y,onAbort(Qe){if(!y.get(Qe))return;let{onDragAbort:ta}=_.current,ua={id:Qe};ta?.(ua),x({type:"onDragAbort",event:ua})},onPending(Qe,Ia,ta,ua){if(!y.get(Qe))return;let{onDragPending:ir}=_.current,wa={id:Qe,constraint:Ia,initialCoordinates:ta,offset:ua};ir?.(wa),x({type:"onDragPending",event:wa})},onStart(Qe){let Ia=M.current;if(Ia==null)return;let ta=y.get(Ia);if(!ta)return;let{onDragStart:ua}=_.current,lr={activatorEvent:St,active:{id:Ia,data:ta.data,rect:T}};(0,Va.unstable_batchedUpdates)(()=>{ua?.(lr),w(Sa.Initializing),C({type:Ge.DragStart,initialCoordinates:Qe,active:Ia}),x({type:"onDragStart",event:lr}),V(Qt.current),B(St)})},onMove(Qe){C({type:Ge.DragMove,coordinates:Qe})},onEnd:Po(Ge.DragEnd),onCancel:Po(Ge.DragCancel)});Qt.current=ea;function Po(Qe){return async function(){let{active:ta,collisions:ua,over:lr,scrollAdjustedTranslate:ir}=Y.current,wa=null;if(ta&&ir){let{cancelDrop:ur}=_.current;wa={activatorEvent:St,active:ta,collisions:ua,delta:ir,over:lr},Qe===Ge.DragEnd&&typeof ur=="function"&&await Promise.resolve(ur(wa))&&(Qe=Ge.DragCancel)}M.current=null,(0,Va.unstable_batchedUpdates)(()=>{C({type:Qe}),w(Sa.Uninitialized),zt(null),V(null),B(null),Qt.current=null;let ur=Qe===Ge.DragEnd?"onDragEnd":"onDragCancel";if(wa){let Is=_.current[ur];Is?.(wa),x({type:ur,event:wa})}})}}},[y]),Bm=(0,D.useCallback)((nt,It)=>(wt,va)=>{let Ft=wt.nativeEvent,St=y.get(va);if(M.current!==null||!St||Ft.dndKit||Ft.defaultPrevented)return;let ea={active:St};nt(wt,It.options,ea)===!0&&(Ft.dndKit={capturedBy:It.sensor},M.current=va,sr(wt,It))},[y,sr]),Ai=Dg(c,Bm);Ng(c),kt(()=>{N&&L===Sa.Initializing&&w(Sa.Initialized)},[N,L]),(0,D.useEffect)(()=>{let{onDragMove:nt}=_.current,{active:It,activatorEvent:wt,collisions:va,over:Ft}=Y.current;if(!It||!wt)return;let St={active:It,activatorEvent:wt,collisions:va,delta:{x:K.x,y:K.y},over:Ft};(0,Va.unstable_batchedUpdates)(()=>{nt?.(St),x({type:"onDragMove",event:St})})},[K.x,K.y]),(0,D.useEffect)(()=>{let{active:nt,activatorEvent:It,collisions:wt,droppableContainers:va,scrollAdjustedTranslate:Ft}=Y.current;if(!nt||M.current==null||!It||!Ft)return;let{onDragOver:St}=_.current,ea=va.get(ve),Po=ea&&ea.rect.current?{id:ea.id,rect:ea.rect.current,data:ea.data,disabled:ea.disabled}:null,Qe={active:nt,activatorEvent:It,collisions:wt,delta:{x:Ft.x,y:Ft.y},over:Po};(0,Va.unstable_batchedUpdates)(()=>{zt(Po),St?.(Qe),x({type:"onDragOver",event:Qe})})},[ve]),kt(()=>{Y.current={activatorEvent:R,active:U,activeNode:H,collisionRect:Le,collisions:le,droppableRects:me,draggableNodes:y,draggingNode:Z,draggingNodeRect:dt,droppableContainers:I,over:Pe,scrollableAncestors:ue,scrollAdjustedTranslate:K},T.current={initial:dt,translated:Le}},[U,H,le,Le,y,Z,dt,me,I,Pe,ue,K]),yg({...we,delta:A,draggingRect:Le,pointerCoordinates:La,scrollableAncestors:ue,scrollableAncestorRects:Ca});let Nm=(0,D.useMemo)(()=>({active:U,activeNode:H,activeNodeRect:N,activatorEvent:R,collisions:le,containerNodeRect:j,dragOverlay:oe,draggableNodes:y,droppableContainers:I,droppableRects:me,over:Pe,measureDroppableContainers:Te,scrollableAncestors:ue,scrollableAncestorRects:Ca,measuringConfiguration:$,measuringScheduled:Se,windowRect:W}),[U,H,N,R,le,j,oe,y,I,me,Pe,Te,ue,Ca,$,Se,W]),_m=(0,D.useMemo)(()=>({activatorEvent:R,activators:Ai,active:U,activeNodeRect:N,ariaDescribedById:{draggable:G},dispatch:C,draggableNodes:y,over:Pe,measureDroppableContainers:Te}),[R,Ai,U,N,C,G,y,Pe,Te]);return D.default.createElement(ou.Provider,{value:b},D.default.createElement(wr.Provider,{value:_m},D.default.createElement(Cu.Provider,{value:Nm},D.default.createElement(xn.Provider,{value:Mi},i)),D.default.createElement(Xg,{disabled:s?.restoreFocus===!1})),D.default.createElement(tg,{...s,hiddenTextDescribedById:G}));function Hm(){let nt=q?.autoScrollEnabled===!1,It=typeof u=="object"?u.enabled===!1:u===!1,wt=v&&!nt&&!It;return typeof u=="object"?{...u,enabled:wt}:{enabled:wt}}}),jg=(0,D.createContext)(null),tu="button",Yg="Draggable";function vu(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Ua(Yg),{activators:l,activatorEvent:s,active:u,activeNodeRect:i,ariaDescribedById:c,draggableNodes:d,over:f}=(0,D.useContext)(wr),{role:p=tu,roleDescription:h="draggable",tabIndex:g=0}=r??{},m=u?.id===t,C=(0,D.useContext)(m?xn:jg),[x,b]=fr(),[L,w]=fr(),v=_g(l,t),S=Mo(a);kt(()=>(d.set(t,{id:t,key:n,node:x,activatorNode:L,data:S}),()=>{let A=d.get(t);A&&A.key===n&&d.delete(t)}),[d,t]);let y=(0,D.useMemo)(()=>({role:p,tabIndex:g,"aria-disabled":o,"aria-pressed":m&&p===tu?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,p,g,m,h,c.draggable]);return{active:u,activatorEvent:s,activeNodeRect:i,attributes:y,isDragging:m,listeners:o?void 0:v,node:x,over:f,setNodeRef:b,setActivatorNodeRef:w,transform:C}}function Sr(){return(0,D.useContext)(Cu)}var Zg="Droppable",Jg={timeout:25};function Cn(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Ua(Zg),{active:l,dispatch:s,over:u,measureDroppableContainers:i}=(0,D.useContext)(wr),c=(0,D.useRef)({disabled:a}),d=(0,D.useRef)(!1),f=(0,D.useRef)(null),p=(0,D.useRef)(null),{disabled:h,updateMeasurementsFor:g,timeout:m}={...Jg,...r},C=Mo(g??o),x=(0,D.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{i(Array.isArray(C.current)?C.current:[C.current]),p.current=null},m)},[m]),b=hn({callback:x,disabled:h||!l}),L=(0,D.useCallback)((y,A)=>{b&&(A&&(b.unobserve(A),d.current=!1),y&&b.observe(y))},[b]),[w,v]=fr(L),S=Mo(t);return(0,D.useEffect)(()=>{!b||!w.current||(b.disconnect(),d.current=!1,b.observe(w.current))},[w,b]),(0,D.useEffect)(()=>(s({type:Ge.RegisterDroppable,element:{id:o,key:n,disabled:a,node:w,rect:f,data:S}}),()=>s({type:Ge.UnregisterDroppable,key:n,id:o})),[o]),(0,D.useEffect)(()=>{a!==c.current.disabled&&(s({type:Ge.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:u?.id===o,node:w,over:u,setNodeRef:v}}function Qg(e){let{animation:t,children:a}=e,[o,r]=(0,D.useState)(null),[n,l]=(0,D.useState)(null),s=pr(a);return!a&&!o&&s&&r(s),kt(()=>{if(!n)return;let u=o?.key,i=o?.props.id;if(u==null||i==null){r(null);return}Promise.resolve(t(i,n)).then(()=>{r(null)})},[t,o,n]),D.default.createElement(D.default.Fragment,null,a,o?(0,D.cloneElement)(o,{ref:l}):null)}var eh={x:0,y:0,scaleX:1,scaleY:1};function th(e){let{children:t}=e;return D.default.createElement(wr.Provider,{value:bu},D.default.createElement(xn.Provider,{value:eh},t))}var ah={position:"fixed",touchAction:"none"},oh=e=>To(e)?"transform 250ms ease":void 0,rh=(0,D.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:u,transform:i,transition:c=oh}=e;if(!s)return null;let d=r?i:{...i,scaleX:1,scaleY:1},f={...ah,width:s.width,height:s.height,top:s.top,left:s.left,transform:yt.Transform.toString(d),transformOrigin:r&&o?ag(o,s):void 0,transition:typeof c=="function"?c(o):c,...u};return D.default.createElement(a,{className:l,style:f,ref:t},n)}),nh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,u]of Object.entries(n.active))u!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,u));if(n!=null&&n.dragOverlay)for(let[s,u]of Object.entries(n.dragOverlay))u!==void 0&&o.node.style.setProperty(s,u);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[u,i]of Object.entries(r))a.node.style.setProperty(u,i);l!=null&&l.active&&a.node.classList.remove(l.active)}},sh=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:yt.Transform.toString(t)},{transform:yt.Transform.toString(a)}]},lh={duration:250,easing:"ease",keyframes:sh,sideEffects:nh({styles:{active:{opacity:"0"}}})};function ih(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return cr((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let u=s.node.current;if(!u)return;let i=xu(l);if(!i)return;let{transform:c}=st(l).getComputedStyle(l),d=lu(c);if(!d)return;let f=typeof t=="function"?t:uh(t);return mu(u,r.draggable.measure),f({active:{id:n,data:s.data,node:u,rect:r.draggable.measure(u)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(i)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function uh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...lh,...e};return n=>{let{active:l,dragOverlay:s,transform:u,...i}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:u.scaleX!==1?l.rect.width*u.scaleX/s.rect.width:1,scaleY:u.scaleY!==1?l.rect.height*u.scaleY/s.rect.height:1},f={x:u.x-c.x,y:u.y-c.y,...d},p=r({...i,active:l,dragOverlay:s,transform:{initial:u,final:f}}),[h]=p,g=p[p.length-1];if(JSON.stringify(h)===JSON.stringify(g))return;let m=o?.({active:l,dragOverlay:s,...i}),C=s.node.animate(p,{duration:t,easing:a,fill:"forwards"});return new Promise(x=>{C.onfinish=()=>{m?.(),x()}})}}var au=0;function dh(e){return(0,D.useMemo)(()=>{if(e!=null)return au++,au},[e])}var Iu=D.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:u,zIndex:i=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:h,droppableContainers:g,dragOverlay:m,over:C,measuringConfiguration:x,scrollableAncestors:b,scrollableAncestorRects:L,windowRect:w}=Sr(),v=(0,D.useContext)(xn),S=dh(d?.id),y=Lu(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:m.rect,over:C,overlayNodeRect:m.rect,scrollableAncestors:b,scrollableAncestorRects:L,transform:v,windowRect:w}),A=Bs(f),I=ih({config:o,draggableNodes:h,droppableContainers:g,measuringConfiguration:x}),P=A?m.setRef:void 0;return D.default.createElement(th,null,D.default.createElement(Qg,{animation:I},d&&S?D.default.createElement(rh,{key:S,id:d.id,ref:P,as:s,activatorEvent:c,adjustScale:t,className:u,transition:n,rect:A,style:{zIndex:i,...r},transform:y},a):null))});var He=J(require("react"));function wu(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function ch(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Ln(e){return e!==null&&e>=0}function fh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function ph(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Su=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=wu(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var vn={scaleX:1,scaleY:1},wn=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let i=n[l];return i?{x:0,y:a<l?i.top+i.height-(s.top+s.height):i.top-s.top,...vn}:null}let u=mh(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-u,...vn}:r<a&&r>=l?{x:0,y:s.height+u,...vn}:{x:0,y:0,...vn}};function mh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var yu="Sortable",ku=He.default.createContext({activeIndex:-1,containerId:yu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Su,disabled:{draggable:!1,droppable:!1}});function Sn(e){let{children:t,id:a,items:o,strategy:r=Su,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:u,over:i,measureDroppableContainers:c}=Sr(),d=Ua(yu,a),f=s.rect!==null,p=(0,He.useMemo)(()=>o.map(v=>typeof v=="object"&&"id"in v?v.id:v),[o]),h=l!=null,g=l?p.indexOf(l.id):-1,m=i?p.indexOf(i.id):-1,C=(0,He.useRef)(p),x=!fh(p,C.current),b=m!==-1&&g===-1||x,L=ph(n);kt(()=>{x&&h&&c(p)},[x,p,h,c]),(0,He.useEffect)(()=>{C.current=p},[p]);let w=(0,He.useMemo)(()=>({activeIndex:g,containerId:d,disabled:L,disableTransforms:b,items:p,overIndex:m,useDragOverlay:f,sortedRects:ch(p,u),strategy:r}),[g,d,L.draggable,L.droppable,b,p,m,u,f,r]);return He.default.createElement(ku.Provider,{value:w},t)}var gh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return wu(a,o,r).indexOf(t)},hh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:u,transition:i}=e;return!i||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===u},xh={duration:200,easing:"ease"},Ru="transform",bh=yt.Transition.toString({property:Ru,duration:0,easing:"linear"}),Ch={roleDescription:"sortable"};function Lh(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,He.useState)(null),s=(0,He.useRef)(a);return kt(()=>{if(!t&&a!==s.current&&o.current){let u=r.current;if(u){let i=$a(o.current,{ignoreTransform:!0}),c={x:u.left-i.left,y:u.top-i.top,scaleX:u.width/i.width,scaleY:u.height/i.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,He.useEffect)(()=>{n&&l(null)},[n]),n}function yn(e){let{animateLayoutChanges:t=hh,attributes:a,disabled:o,data:r,getNewIndex:n=gh,id:l,strategy:s,resizeObserverConfig:u,transition:i=xh}=e,{items:c,containerId:d,activeIndex:f,disabled:p,disableTransforms:h,sortedRects:g,overIndex:m,useDragOverlay:C,strategy:x}=(0,He.useContext)(ku),b=vh(o,p),L=c.indexOf(l),w=(0,He.useMemo)(()=>({sortable:{containerId:d,index:L,items:c},...r}),[d,r,L,c]),v=(0,He.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:S,node:y,isOver:A,setNodeRef:I}=Cn({id:l,data:w,disabled:b.droppable,resizeObserverConfig:{updateMeasurementsFor:v,...u}}),{active:P,activatorEvent:T,activeNodeRect:U,attributes:M,setNodeRef:q,listeners:V,isDragging:R,over:B,setActivatorNodeRef:_,transform:G}=vu({id:l,data:w,attributes:{...Ch,...a},disabled:b.draggable}),ee=_i(I,q),$=!!P,me=$&&!h&&Ln(f)&&Ln(m),Te=!C&&R,Se=Te&&me?G:null,ye=me?Se??(s??x)({rects:g,activeNodeRect:U,activeIndex:f,overIndex:m,index:L}):null,we=Ln(f)&&Ln(m)?n({id:l,items:c,activeIndex:f,overIndex:m}):L,Ce=P?.id,N=(0,He.useRef)({activeId:Ce,items:c,newIndex:we,containerId:d}),j=c!==N.current.items,Y=t({active:P,containerId:d,isDragging:R,isSorting:$,id:l,index:L,items:c,newIndex:N.current.newIndex,previousItems:N.current.items,previousContainerId:N.current.containerId,transition:i,wasDragging:N.current.activeId!=null}),ae=Lh({disabled:!Y,index:L,node:y,rect:S});return(0,He.useEffect)(()=>{$&&N.current.newIndex!==we&&(N.current.newIndex=we),d!==N.current.containerId&&(N.current.containerId=d),c!==N.current.items&&(N.current.items=c)},[$,we,d,c]),(0,He.useEffect)(()=>{if(Ce===N.current.activeId)return;if(Ce!=null&&N.current.activeId==null){N.current.activeId=Ce;return}let Z=setTimeout(()=>{N.current.activeId=Ce},50);return()=>clearTimeout(Z)},[Ce]),{active:P,activeIndex:f,attributes:M,data:w,rect:S,index:L,newIndex:we,items:c,isOver:A,isSorting:$,isDragging:R,listeners:V,node:y,overIndex:m,over:B,setNodeRef:ee,setActivatorNodeRef:_,setDroppableNodeRef:I,setDraggableNodeRef:q,transform:ae??ye,transition:oe()};function oe(){if(ae||j&&N.current.newIndex===L)return bh;if(!(Te&&!To(T)||!i)&&($||Y))return yt.Transition.toString({...i,property:Ru})}}function vh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function In(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Ih=[ge.Down,ge.Right,ge.Up,ge.Left],kn=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Ih.includes(e.code)){if(e.preventDefault(),!a||!o)return;let u=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ge.Down:o.top<f.top&&u.push(d);break;case ge.Up:o.top>f.top&&u.push(d);break;case ge.Left:o.left>f.left&&u.push(d);break;case ge.Right:o.left<f.left&&u.push(d);break}});let i=gn({active:a,collisionRect:o,droppableRects:r,droppableContainers:u,pointerCoordinates:null}),c=vr(i,"id");if(c===l?.id&&i.length>1&&(c=i[1].id),c!=null){let d=n.get(a.id),f=n.get(c),p=f?r.get(f.id):null,h=f?.node.current;if(h&&p&&d&&f){let m=Ir(h).some((v,S)=>s[S]!==v),C=Pu(d,f),x=wh(d,f),b=m||!C?{x:0,y:0}:{x:x?o.width-p.width:0,y:x?o.height-p.height:0},L={x:p.left,y:p.top};return b.x&&b.y?L:za(L,b)}}}};function Pu(e,t){return!In(e)||!In(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function wh(e,t){return!In(e)||!In(t)||!Pu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Rn=require("react");var Du=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Mu(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Du(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var Au=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var Tu=e=>{let t=Au(e);return t.charAt(0).toUpperCase()+t.slice(1)};var kr=require("react");var yr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ns(e){return e!=null}function Eu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??ka.width,n=e.size??e.height??ka.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],u=t.className?.split(" ").filter(Boolean)??[],i=t.includeDefaultClasses===!1?yr(...u):yr("lucide",...s,...u),c=t.absoluteStrokeWidth?Number(t.strokeWidth??ka["stroke-width"])*Number(e.size??e.width??ka.width)/Number(t.size??t.width??ka.width):t.strokeWidth??ka["stroke-width"];return["svg",{...Object.entries(ka).reduce((f,[p,h])=>(f[o(p)]=h,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&Ns(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&Ns(t.width)&&{[o("width")]:t.width},..."height"in t&&Ns(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...i&&{[o("class")]:i},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[p,h,g]=f,m=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...h}:h;return g?[p,m,g]:[p,m]})]}function Fu(e,t={}){return Eu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var Ou=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Fo=require("react");var Sh=(0,Fo.createContext)({});var Bu=()=>(0,Fo.useContext)(Sh);var Nu=(0,kr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:u,iconNode:i=[],icon:c={node:i,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:m=!1,color:C="currentColor",className:x=""}=Bu()??{},b=!!u||Ou(d),[L,w,v=[]]=Fu(c,{color:e??C,width:a??t??p,height:o??t??p,strokeWidth:r??h,absoluteStrokeWidth:n??g,nonScalingStroke:l??m,className:yr(x,s),hasA11yProp:b,attributes:d});return(0,kr.createElement)(L,{ref:f,...w},[...v.map(([S,y])=>(0,kr.createElement)(S,y)),...Array.isArray(u)?u:[u]])});function ie(e,t=[],a=[]){let o=typeof e=="string"?Mu(e,t,a):e,r=(0,Rn.forwardRef)(({className:n,...l},s)=>(0,Rn.createElement)(Nu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=Tu(o.name)),r}var _u={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};_u.node;var ja=ie(_u);var Hu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Hu.node;var bt=ie(Hu);var Uu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Uu.node;var Oo=ie(Uu);var qu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};qu.node;var Rr=ie(qu);var zu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};zu.node;var Ra=ie(zu);var Wu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};Wu.node;var Pr=ie(Wu);var Vu={name:"image-plus",size:24,node:[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]};Vu.node;var Dr=ie(Vu);var Gu={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};Gu.node;var Mr=ie(Gu);var Xu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};Xu.node;var Ar=ie(Xu);var Ku={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Ku.node;var da=ie(Ku);var $u={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};$u.node;var ca=ie($u);var ju={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};ju.node;var Tr=ie(ju);var Yu={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Yu.node;var Ya=ie(Yu);var Zu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Zu.node;var Pa=ie(Zu);var Ju={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Ju.node;var Er=ie(Ju);var Qu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Qu.node;var Fr=ie(Qu);var ed={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};ed.node;var Or=ie(ed);var td={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};td.node;var Bo=ie(td);var ad={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};ad.node;var Br=ie(ad);var od={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};od.node;var Bt=ie(od);var rd={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};rd.node;var ct=ie(rd);var Ae=require("react");var bm=require("@deepseek-ai/dsh-client-ui-primitives");var xd=J(require("react"),1);var tt=J(require("react"),1);var nd=J(require("react"),1),yh=Object.defineProperty,Hs=(e,t)=>yh(e,"name",{value:t,configurable:!0});function _s(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Hs(_s,"setRef");function sd(...e){return t=>{let a=!1,o=e.map(r=>{let n=_s(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():_s(e[r],null)}}}}Hs(sd,"composeRefs");function fe(...e){return nd.useCallback(sd(...e),e)}Hs(fe,"useComposedRefs");var kh=Object.defineProperty,Rt=(e,t)=>kh(e,"name",{value:t,configurable:!0});function lt(e){let t=tt.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,u=[];r=pd(r),tt.Children.forEach(r,f=>{if(cd(f)){s=!0;let p=f,h="child"in p.props?p.props.child:p.props.children;for(;Us(h)&&typeof Pn=="function";)h=Pn(h._payload);l=Ph(p,h),u.push(l?.props?.children)}else u.push(f)}),l?l=tt.cloneElement(l,void 0,u):!s&&tt.Children.count(r)===1&&tt.isValidElement(r)&&(l=r);let i=l?dd(l):void 0,c=fe(o,i);if(!l){if(r||r===0)throw new Error(s?Ah(e):Mh(e));return r}let d=ud(n,l.props??{});return l.type!==tt.Fragment&&(d.ref=o?c:i),tt.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}Rt(lt,"createSlot");var ld=lt("Slot"),id=Symbol.for("radix.slottable");function Rh(e){let t=Rt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=id,t}Rt(Rh,"createSlottable");var Ph=Rt((e,t)=>"child"in e.props?tt.isValidElement(t)?tt.cloneElement(t,void 0,e.props.children(t.props.children)):null:tt.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function ud(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let u=n(...s);return r(...s),u}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=md(n,r))}return{...e,...a}}Rt(ud,"mergeProps");function dd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Rt(dd,"getElementRef");function cd(e){return tt.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===id}Rt(cd,"isSlottable");var Dh=Symbol.for("react.lazy");function Us(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Dh&&"_payload"in e&&fd(e._payload)}Rt(Us,"isLazyComponent");function fd(e){return typeof e=="object"&&e!==null&&"then"in e}Rt(fd,"isPromiseLike");function pd(e){let t=e;for(;Us(t)&&typeof Pn=="function";)t=Pn(t._payload);return t}Rt(pd,"useUnwrappedLazy");function md(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}Rt(md,"concatAriaDescribedby");var Mh=Rt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Ah=Rt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Pn=tt[" use ".trim().toString()];function gd(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=gd(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function hd(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=gd(e))&&(o&&(o+=" "),o+=t);return o}function de(...e){return hd(e)}var bd=require("react/jsx-runtime");function Th({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return de("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var ce=xd.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,bd.jsx)(o?ld:"button",{className:Th({variant:t,size:a,className:e}),ref:n,...r}));ce.displayName="Button";var Xr=J(require("react"),1);var De=J(require("react"),1);var Eh=Object.defineProperty,No=(e,t)=>Eh(e,"name",{value:t,configurable:!0}),Cd=!!(typeof window<"u"&&window.document&&window.document.createElement);function Q(e,t,{checkForDefaultPrevented:a=!0}={}){return No(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}No(Q,"composeEventHandlers");function Fh(e){if(!Cd)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}No(Fh,"getOwnerWindow");function qs(e){if(!Cd)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}No(qs,"getOwnerDocument");function Ld(e,t=!1){let{activeElement:a}=qs(e);if(!a?.nodeName)return null;if(vd(a)&&a.contentDocument)return Ld(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=qs(a).getElementById(o);if(r)return r}}return a}No(Ld,"getActiveElement");function vd(e){return e.tagName==="IFRAME"}No(vd,"isFrame");var _t=J(require("react"),1),zs=require("react/jsx-runtime"),Oh=Object.defineProperty,Nt=(e,t)=>Oh(e,"name",{value:t,configurable:!0});function Bh(e,t){let a=_t.createContext(t);a.displayName=e+"Context";let o=Nt(n=>{let{children:l,...s}=n,u=_t.useMemo(()=>s,Object.values(s));return(0,zs.jsx)(a.Provider,{value:u,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,u=_t.useContext(a);if(u)return u;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return Nt(r,"useContext"),[o,r]}Nt(Bh,"createContext");function at(e,t=[]){let a=[];function o(n,l){let s=_t.createContext(l);s.displayName=n+"Context";let u=a.length;a=[...a,l];let i=Nt(d=>{let{scope:f,children:p,...h}=d,g=f?.[e]?.[u]||s,m=_t.useMemo(()=>h,Object.values(h));return(0,zs.jsx)(g.Provider,{value:m,children:p})},"Provider");i.displayName=n+"Provider";function c(d,f,p={}){let{optional:h=!1}=p,g=f?.[e]?.[u]||s,m=_t.useContext(g);if(m)return m;if(l!==void 0)return l;if(!h)throw new Error(`\`${d}\` must be used within \`${n}\``)}return Nt(c,"useContext"),[i,c]}Nt(o,"createContext");let r=Nt(()=>{let n=a.map(l=>_t.createContext(l));return Nt(function(s){let u=s?.[e]||n;return _t.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])},"useScope")},"createScope");return r.scopeName=e,[o,Id(r,...t)]}Nt(at,"createContextScope");function Id(...e){let t=e[0];if(e.length===1)return t;let a=Nt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return Nt(function(n){let l=o.reduce((s,{useScope:u,scopeName:i})=>{let d=u(n)[`__scope${i}`];return{...s,...d}},{});return _t.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}Nt(Id,"composeContextScopes");var Ws=J(require("react"),1);var wd=J(require("react"),1),xe=globalThis?.document?wd.useLayoutEffect:()=>{};var Nh=Object.defineProperty,_h=(e,t)=>Nh(e,"name",{value:t,configurable:!0}),Hh=Ws[" useId ".trim().toString()]||(()=>{}),Uh=0;function Pt(e){let[t,a]=Ws.useState(Hh());return xe(()=>{e||a(o=>o??String(Uh++))},[e]),e||(t?`radix-${t}`:"")}_h(Pt,"useId");var Ht=J(require("react"),1);var Dn=!1;var Vt=J(require("react"),1);var _o=J(require("react"),1),qh=Object.defineProperty,zh=(e,t)=>qh(e,"name",{value:t,configurable:!0}),Sd=_o[" useEffectEvent ".trim().toString()],yd=_o[" useInsertionEffect ".trim().toString()];function Vs(e){if(typeof Sd=="function")return Sd(e);let t=_o.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof yd=="function"?yd(()=>{t.current=e}):xe(()=>{t.current=e}),_o.useMemo(()=>((...a)=>t.current?.(...a)),[])}zh(Vs,"useEffectEvent");var Wh=Object.defineProperty,Nr=(e,t)=>Wh(e,"name",{value:t,configurable:!0}),Vh=Ht[" useInsertionEffect ".trim().toString()]||xe;function aa({prop:e,defaultProp:t,onChange:a=Nr(()=>{},"onChange"),caller:o}){let[r,n,l]=Rd({defaultProp:t,onChange:a}),s=e!==void 0,u=s?e:r;if(Dn){let c=Ht.useRef(e!==void 0);Ht.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let i=Ht.useCallback(c=>{if(s){let d=Pd(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[u,i]}Nr(aa,"useControllableState");function Rd({defaultProp:e,onChange:t}){let[a,o]=Ht.useState(e),r=Ht.useRef(a),n=Ht.useRef(t);return Vh(()=>{n.current=t},[t]),Ht.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Nr(Rd,"useUncontrolledState");function Pd(e){return typeof e=="function"}Nr(Pd,"isFunction");var kd=Symbol("RADIX:SYNC_STATE");function Gh(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,u=r!==void 0,i=Vs(l);if(Dn){let m=Vt.useRef(r!==void 0);Vt.useEffect(()=>{let C=m.current;C!==u&&console.warn(`${s} is changing from ${C?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=u},[u,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=Vt.useReducer((m,C)=>{if(C.type===kd)return{...m,state:C.state};let x=e(m,C);return u&&!Object.is(x.state,m.state)&&i(x.state),x},...c),p=d.state,h=Vt.useRef(p);Vt.useEffect(()=>{h.current!==p&&(h.current=p,u||i(p))},[p,h,u]);let g=Vt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return Vt.useEffect(()=>{u&&!Object.is(r,d.state)&&f({type:kd,state:r})},[r,d.state,u]),[g,f]}Nr(Gh,"useControllableStateReducer");var ke=J(require("react"),1);var Dd=J(require("react"),1),Md=J(require("react-dom"),1);var Ad=require("react/jsx-runtime"),Xh=Object.defineProperty,Kh=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),$h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],pe=$h.reduce((e,t)=>{let a=lt(`Primitive.${t}`),o=Dd.forwardRef((r,n)=>{let{asChild:l,...s}=r,u=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Ad.jsx)(u,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function _r(e,t){e&&Md.flushSync(()=>e.dispatchEvent(t))}Kh(_r,"dispatchDiscreteCustomEvent");var Hr=J(require("react"),1),jh=Object.defineProperty,Yh=(e,t)=>jh(e,"name",{value:t,configurable:!0}),Td=Hr[" useInsertionEffect ".trim().toString()];function je(e){let t=Hr.useRef(e);return typeof Td=="function"?Td(()=>{t.current=e}):xe(()=>{t.current=e}),Hr.useMemo(()=>((...a)=>t.current?.(...a)),[])}Yh(je,"useCallbackRef");var Fd=require("react/jsx-runtime"),Zh=Object.defineProperty,Ye=(e,t)=>Zh(e,"name",{value:t,configurable:!0}),Gs="dismissableLayer.update",Jh="dismissableLayer.pointerDownOutside",Qh="dismissableLayer.focusOutside",Ed,Od=ke.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Ho=ke.forwardRef(Ye(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:u,onDismiss:i,...c}=t,d=ke.useContext(Od),[f,p]=ke.useState(null),h=f?.ownerDocument??globalThis?.document,[,g]=ke.useState({}),m=fe(a,p),C=Array.from(d.layers),[x]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=x?C.indexOf(x):-1,L=f?C.indexOf(f):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,v=L>=b,S=ke.useRef(!1),y=Bd(T=>{l?.(T),u?.(T),T.defaultPrevented||i?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:S,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ke.useCallback(T=>{if(!(T instanceof Node))return!1;let U=[...d.branches].some(M=>M.contains(T));return v&&!U},[d.branches,v])}),A=Nd(T=>{if(r&&S.current)return;let U=T.target;[...d.branches].some(q=>q.contains(U))||(s?.(T),u?.(T),T.defaultPrevented||i?.())},h),I=f?L===C.length-1:!1,P=je(T=>{T.key==="Escape"&&(n?.(T),!T.defaultPrevented&&i&&(T.preventDefault(),i()))});return ke.useEffect(()=>{if(I)return h.addEventListener("keydown",P,{capture:!0}),()=>h.removeEventListener("keydown",P,{capture:!0})},[h,I,P]),ke.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Ed=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Xs(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Ed))}},[f,h,o,d]),ke.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Xs())},[f,d]),ke.useEffect(()=>{let T=Ye(()=>g({}),"handleUpdate");return document.addEventListener(Gs,T),()=>document.removeEventListener(Gs,T)},[]),(0,Fd.jsx)(pe.div,{...c,ref:m,style:{pointerEvents:w?v?"auto":"none":void 0,...t.style},onFocusCapture:Q(t.onFocusCapture,A.onFocusCapture),onBlurCapture:Q(t.onBlurCapture,A.onBlurCapture),onPointerDownCapture:Q(t.onPointerDownCapture,y.onPointerDownCapture)})},"DismissableLayer"));function Ks(){let e=ke.useContext(Od),[t,a]=ke.useState(null);return ke.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ye(Ks,"useDismissableLayerSurface");var ex=Ye(()=>!0,"IS_TRUE");function Bd(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=ex}=t,s=je(e),u=ke.useRef(!1),i=ke.useRef(!1),c=ke.useRef(new Map),d=ke.useRef(()=>{});return ke.useEffect(()=>{function f(){i.current=!1,r.current=!1,c.current.clear()}Ye(f,"resetOutsideInteraction");function p(){return Array.from(c.current.values()).some(Boolean)}Ye(p,"isOutsideInteractionIntercepted");function h(b){if(!i.current)return;let L=b.target;L instanceof Node&&[...n].some(v=>v.contains(L))||c.current.set(b.type,!0),b.type==="click"&&window.setTimeout(()=>{i.current&&d.current()},0)}Ye(h,"handleInteractionCapture");function g(b){i.current&&c.current.set(b.type,!1)}Ye(g,"handleInteractionBubble");let m=Ye(b=>{if(b.target&&!u.current){let w=function(){a.removeEventListener("click",d.current);let S=p();f(),S||$s(Jh,s,v,{discrete:!0})};var L=w;if(Ye(w,"handleAndDispatchPointerDownOutsideEvent"),!l(b.target)){a.removeEventListener("click",d.current),f(),u.current=!1;return}let v={originalEvent:b};i.current=!0,r.current=o&&b.button===0,c.current.clear(),!o||b.button!==0?w():(a.removeEventListener("click",d.current),d.current=w,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();u.current=!1},"handlePointerDown"),C=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let b of C)a.addEventListener(b,h,!0),a.addEventListener(b,g);let x=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(x),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let b of C)a.removeEventListener(b,h,!0),a.removeEventListener(b,g)}},[a,s,o,r,n,l]),{onPointerDownCapture:Ye(()=>u.current=!0,"onPointerDownCapture")}}Ye(Bd,"usePointerDownOutside");function Nd(e,t=globalThis?.document){let a=je(e),o=ke.useRef(!1);return ke.useEffect(()=>{let r=Ye(n=>{n.target&&!o.current&&$s(Qh,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ye(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ye(()=>o.current=!1,"onBlurCapture")}}Ye(Nd,"useFocusOutside");function Xs(){let e=new CustomEvent(Gs);document.dispatchEvent(e)}Ye(Xs,"dispatchUpdate");function $s(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?_r(r,n):r.dispatchEvent(n)}Ye($s,"handleAndDispatchCustomEvent");var Ne=J(require("react"),1);var Qs=require("react/jsx-runtime"),tx=Object.defineProperty,ze=(e,t)=>tx(e,"name",{value:t,configurable:!0}),js="focusScope.autoFocusOnMount",Ys="focusScope.autoFocusOnUnmount",_d={bubbles:!1,cancelable:!0},Uo=Ne.forwardRef(ze(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...u}=t,[i,c]=Ne.useState(null),d=je(l),f=je(s),p=Ne.useRef(null),h=fe(a,c),g=Ne.useRef(n);Ne.useEffect(()=>{g.current=n});let m=Ne.useCallback(b=>b?i?.contains(b)?!0:!!g.current?.some(L=>L.contains(b)):!1,[i]),C=Ne.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Ne.useEffect(()=>{if(r){let v=function(I){if(C.paused||!i)return;let P=I.target;m(P)?p.current=P:fa(p.current,{select:!0})},S=function(I){if(C.paused||!i)return;let P=I.relatedTarget;P!==null&&(m(P)||fa(p.current,{select:!0}))},y=function(I){if(document.activeElement===document.body)for(let T of I)T.removedNodes.length>0&&fa(i)};var b=v,L=S,w=y;ze(v,"handleFocusIn"),ze(S,"handleFocusOut"),ze(y,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",S);let A=new MutationObserver(y);return i&&A.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",S),A.disconnect()}}},[r,i,C.paused,m]),Ne.useEffect(()=>{if(i){Hd.add(C);let b=document.activeElement;if(!i.contains(b)){let w=new CustomEvent(js,_d);i.addEventListener(js,d),i.dispatchEvent(w),w.defaultPrevented||(qd(Xd(tl(i)),{select:!0}),document.activeElement===b&&fa(i))}return()=>{i.removeEventListener(js,d);let w=i.ownerDocument,v=CustomEvent;setTimeout(()=>{let S=new v(Ys,_d);i.addEventListener(Ys,f),i.dispatchEvent(S),S.defaultPrevented||fa(b??w.body,{select:!0}),i.removeEventListener(Ys,f),Hd.remove(C)},0)}}},[i,d,f,C]);let x=Ne.useCallback(b=>{if(!o&&!r||C.paused)return;let L=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,w=document.activeElement;if(L&&w){let v=b.currentTarget,[S,y]=zd(v);S&&y?!b.shiftKey&&w===y?(b.preventDefault(),o&&fa(S,{select:!0})):b.shiftKey&&w===S&&(b.preventDefault(),o&&fa(y,{select:!0})):w===v&&b.preventDefault()}},[o,r,C.paused]);return(0,Qs.jsx)(pe.div,{tabIndex:-1,...u,ref:h,onKeyDown:x})},"FocusScope")),Ud=Ne.createContext(null);function Ur({registry:e,children:t}){return e?(0,Qs.jsx)(Ud.Provider,{value:e,children:t}):t}ze(Ur,"FocusScopeBranchProvider");function qr(){let[e,t]=Ne.useState([]),a=Ne.useMemo(()=>({add:ze(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:ze(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}ze(qr,"useFocusScopeBranchRegistry");function el(e){let t=Ne.useContext(Ud);Ne.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}ze(el,"useFocusScopeBranch");function qd(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(fa(o,{select:t}),document.activeElement!==a)return}ze(qd,"focusFirst");function zd(e){let t=tl(e),a=Zs(t,e),o=Zs(t.reverse(),e);return[a,o]}ze(zd,"getTabbableEdges");function tl(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ze(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}ze(tl,"getTabbableCandidates");function Zs(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Wd(o,{upTo:t})))return o}ze(Zs,"findVisible");function Wd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}ze(Wd,"isHidden");function Vd(e){return e.tagName==="INPUT"&&typeof e.select=="function"}ze(Vd,"isSelectableInput");function fa(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Vd(e)&&t&&e.select()}}ze(fa,"focus");var Hd=Gd();function Gd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Js(e,t),e.unshift(t)},remove(t){e=Js(e,t),e[0]?.resume()}}}ze(Gd,"createFocusScopesStack");function Js(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}ze(Js,"arrayRemove");function Xd(e){return e.filter(t=>t.tagName!=="A")}ze(Xd,"removeLinks");var Mn=J(require("react"),1),Kd=J(require("react-dom"),1);var $d=require("react/jsx-runtime"),ax=Object.defineProperty,ox=(e,t)=>ax(e,"name",{value:t,configurable:!0}),qo=Mn.forwardRef(ox(function(t,a){let{container:o,...r}=t,[n,l]=Mn.useState(!1);xe(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Kd.createPortal((0,$d.jsx)(pe.div,{...r,ref:a}),s):null},"Portal"));var ot=J(require("react"),1);var jd=J(require("react"),1),rx=Object.defineProperty,pa=(e,t)=>rx(e,"name",{value:t,configurable:!0});function Yd(e,t){return jd.useReducer((a,o)=>t[a][o]??a,e)}pa(Yd,"useStateMachine");var ma=pa(e=>{let{present:t,children:a}=e,o=Zd(t),r=typeof a=="function"?a({present:o.isPresent}):ot.Children.only(a),n=Jd(o.ref,Qd(r));return typeof a=="function"||o.isPresent?ot.cloneElement(r,{ref:n}):null},"Presence");function Zd(e){let[t,a]=ot.useState(),o=ot.useRef(null),r=ot.useRef(e),n=ot.useRef("none"),l=ot.useRef(void 0),s=e?"mounted":"unmounted",[u,i]=Yd(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return ot.useEffect(()=>{u==="mounted"?(n.current=l.current??zo(o.current),l.current=void 0):n.current="none"},[u]),xe(()=>{let c=o.current,d=r.current;if(d!==e){let p=n.current,h=zo(c);e?(l.current=h,i("MOUNT")):h==="none"||c?.display==="none"?i("UNMOUNT"):i(d&&p!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,i]),xe(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=pa(h=>{let m=zo(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&m&&(i("ANIMATION_END"),!r.current)){let C=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},"handleAnimationEnd"),p=pa(h=>{h.target===t&&(n.current=zo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:ot.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=zo(d)}else o.current=null;a(c)},[])}}pa(Zd,"usePresence");function al(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}pa(al,"setRef");function Jd(...e){let t=ot.useRef(e);return t.current=e,ot.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=al(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():al(o[l],null)}}},[])}pa(Jd,"useStableComposedRefs");function zo(e){return e?.animationName||"none"}pa(zo,"getAnimationName");function Qd(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}pa(Qd,"getElementRef");var ec=J(require("react"),1),nx=Object.defineProperty,rl=(e,t)=>nx(e,"name",{value:t,configurable:!0}),An=0,Wo=null;function sx(e){return Da(),e.children}rl(sx,"FocusGuards");function Da(){ec.useEffect(()=>{Wo||(Wo={start:ol(),end:ol()});let{start:e,end:t}=Wo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),An++,()=>{An===1&&(Wo?.start.remove(),Wo?.end.remove(),Wo=null),An=Math.max(0,An-1)}},[])}rl(Da,"useFocusGuards");function ol(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}rl(ol,"createFocusGuard");var Ct=function(){return Ct=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ct.apply(this,arguments)};function Tn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function tc(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var Nn=J(require("react"));var it=J(require("react"));var Za="right-scroll-bar-position",Ja="width-before-scroll-bar",nl="with-scroll-bars-hidden",sl="--removed-body-scroll-bar-size";function En(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var ac=require("react");function oc(e,t){var a=(0,ac.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Fn=J(require("react"));var lx=typeof window<"u"?Fn.useLayoutEffect:Fn.useEffect,rc=new WeakMap;function ll(e,t){var a=oc(t||null,function(o){return e.forEach(function(r){return En(r,o)})});return lx(function(){var o=rc.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||En(s,null)}),n.forEach(function(s){r.has(s)||En(s,l)})}rc.set(a,e)},[e]),a}function ix(e){return e}function ux(e,t){t===void 0&&(t=ix);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var u=function(){var c=l;l=[],c.forEach(n)},i=function(){return Promise.resolve().then(u)};i(),a={push:function(c){l.push(c),i()},filter:function(c){return l=l.filter(c),a}}}};return r}function il(e){e===void 0&&(e={});var t=ux(null);return t.options=Ct({async:!0,ssr:!1},e),t}var nc=J(require("react")),sc=function(e){var t=e.sideCar,a=Tn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return nc.createElement(o,Ct({},a))};sc.isSideCarExport=!0;function ul(e,t){return e.useMedium(t),sc}var On=il();var dl=function(){},zr=it.forwardRef(function(e,t){var a=it.useRef(null),o=it.useState({onScrollCapture:dl,onWheelCapture:dl,onTouchMoveCapture:dl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,u=e.className,i=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,h=e.noIsolation,g=e.inert,m=e.allowPinchZoom,C=e.as,x=C===void 0?"div":C,b=e.gapMode,L=Tn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=f,v=ll([a,t]),S=Ct(Ct({},L),r);return it.createElement(it.Fragment,null,c&&it.createElement(w,{sideCar:On,removeScrollBar:i,shards:d,noRelative:p,noIsolation:h,inert:g,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:b}),l?it.cloneElement(it.Children.only(s),Ct(Ct({},S),{ref:v})):it.createElement(x,Ct({},S,{className:u,ref:v}),s))});zr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};zr.classNames={fullWidth:Ja,zeroRight:Za};var Ee=J(require("react"));var Go=J(require("react"));var uc=J(require("react"));var lc;var ic=function(){if(lc)return lc;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function dx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ic();return t&&e.setAttribute("nonce",t),e}function cx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function fx(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var cl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=dx())&&(cx(t,a),fx(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var fl=function(){var e=cl();return function(t,a){uc.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var Wr=function(){var e=fl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var px={left:0,top:0,right:0,gap:0},pl=function(e){return parseInt(e||"",10)||0},mx=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[pl(a),pl(o),pl(r)]},ml=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return px;var t=mx(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var gx=Wr(),Vo="data-scroll-locked",hx=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(nl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(Vo,`] {
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
  
  .`).concat(Za,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ja,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Za," .").concat(Za,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ja," .").concat(Ja,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Vo,`] {
    `).concat(sl,": ").concat(s,`px;
  }
`)},dc=function(){var e=parseInt(document.body.getAttribute(Vo)||"0",10);return isFinite(e)?e:0},xx=function(){Go.useEffect(function(){return document.body.setAttribute(Vo,(dc()+1).toString()),function(){var e=dc()-1;e<=0?document.body.removeAttribute(Vo):document.body.setAttribute(Vo,e.toString())}},[])},gl=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;xx();var n=Go.useMemo(function(){return ml(r)},[r]);return Go.createElement(gx,{styles:hx(n,!t,r,a?"":"!important")})};var hl=!1;if(typeof window<"u")try{Vr=Object.defineProperty({},"passive",{get:function(){return hl=!0,!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{hl=!1}var Vr,Qa=hl?{passive:!1}:!1;var bx=function(e){return e.tagName==="TEXTAREA"},cc=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!bx(e)&&a[t]==="visible")},Cx=function(e){return cc(e,"overflowY")},Lx=function(e){return cc(e,"overflowX")},xl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=fc(e,o);if(r){var n=pc(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},vx=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Ix=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},fc=function(e,t){return e==="v"?Cx(t):Lx(t)},pc=function(e,t){return e==="v"?vx(t):Ix(t)},wx=function(e,t){return e==="h"&&t==="rtl"?-1:1},mc=function(e,t,a,o,r){var n=wx(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,u=t.contains(s),i=!1,c=l>0,d=0,f=0;do{if(!s)break;var p=pc(e,s),h=p[0],g=p[1],m=p[2],C=g-m-n*h;(h||C)&&fc(e,s)&&(d+=C,f+=h);var x=s.parentNode;s=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(i=!0),i};var Bn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gc=function(e){return[e.deltaX,e.deltaY]},hc=function(e){return e&&"current"in e?e.current:e},Sx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},yx=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},kx=0,Xo=[];function xc(e){var t=Ee.useRef([]),a=Ee.useRef([0,0]),o=Ee.useRef(),r=Ee.useState(kx++)[0],n=Ee.useState(Wr)[0],l=Ee.useRef(e);Ee.useEffect(function(){l.current=e},[e]),Ee.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var g=tc([e.lockRef.current],(e.shards||[]).map(hc),!0).filter(Boolean);return g.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),g.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=Ee.useCallback(function(g,m){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var C=Bn(g),x=a.current,b="deltaX"in g?g.deltaX:x[0]-C[0],L="deltaY"in g?g.deltaY:x[1]-C[1],w,v=g.target,S=Math.abs(b)>Math.abs(L)?"h":"v";if("touches"in g&&S==="h"&&v.type==="range")return!1;var y=window.getSelection(),A=y&&y.anchorNode,I=A?A===v||A.contains(v):!1;if(I)return!1;var P=xl(S,v);if(!P)return!0;if(P?w=S:(w=S==="v"?"h":"v",P=xl(S,v)),!P)return!1;if(!o.current&&"changedTouches"in g&&(b||L)&&(o.current=w),!w)return!0;var T=o.current||w;return mc(T,m,g,T==="h"?b:L,!0)},[]),u=Ee.useCallback(function(g){var m=g;if(!(!Xo.length||Xo[Xo.length-1]!==n)){var C="deltaY"in m?gc(m):Bn(m),x=t.current.filter(function(w){return w.name===m.type&&(w.target===m.target||m.target===w.shadowParent)&&Sx(w.delta,C)})[0];if(x&&x.should){m.cancelable&&m.preventDefault();return}if(!x){var b=(l.current.shards||[]).map(hc).filter(Boolean).filter(function(w){return w.contains(m.target)}),L=b.length>0?s(m,b[0]):!l.current.noIsolation;L&&m.cancelable&&m.preventDefault()}}},[]),i=Ee.useCallback(function(g,m,C,x){var b={name:g,delta:m,target:C,should:x,shadowParent:Rx(C)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(L){return L!==b})},1)},[]),c=Ee.useCallback(function(g){a.current=Bn(g),o.current=void 0},[]),d=Ee.useCallback(function(g){i(g.type,gc(g),g.target,s(g,e.lockRef.current))},[]),f=Ee.useCallback(function(g){i(g.type,Bn(g),g.target,s(g,e.lockRef.current))},[]);Ee.useEffect(function(){return Xo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",u,Qa),document.addEventListener("touchmove",u,Qa),document.addEventListener("touchstart",c,Qa),function(){Xo=Xo.filter(function(g){return g!==n}),document.removeEventListener("wheel",u,Qa),document.removeEventListener("touchmove",u,Qa),document.removeEventListener("touchstart",c,Qa)}},[]);var p=e.removeScrollBar,h=e.inert;return Ee.createElement(Ee.Fragment,null,h?Ee.createElement(n,{styles:yx(r)}):null,p?Ee.createElement(gl,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Rx(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var bc=ul(On,xc);var Cc=Nn.forwardRef(function(e,t){return Nn.createElement(zr,Ct({},e,{ref:t,sideCar:bc}))});Cc.classNames=zr.classNames;var eo=Cc;var Px=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ko=new WeakMap,_n=new WeakMap,Hn={},bl=0,Lc=function(e){return e&&(e.host||Lc(e.parentNode))},Dx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Lc(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Mx=function(e,t,a,o){var r=Dx(t,Array.isArray(e)?e:[e]);Hn[a]||(Hn[a]=new WeakMap);var n=Hn[a],l=[],s=new Set,u=new Set(r),i=function(d){!d||s.has(d)||(s.add(d),i(d.parentNode))};r.forEach(i);var c=function(d){!d||u.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(o),h=p!==null&&p!=="false",g=(Ko.get(f)||0)+1,m=(n.get(f)||0)+1;Ko.set(f,g),n.set(f,m),l.push(f),g===1&&h&&_n.set(f,!0),m===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(C){console.error("aria-hidden: cannot operate on ",f,C)}})};return c(t),s.clear(),bl++,function(){l.forEach(function(d){var f=Ko.get(d)-1,p=n.get(d)-1;Ko.set(d,f),n.set(d,p),f||(_n.has(d)||d.removeAttribute(o),_n.delete(d)),p||d.removeAttribute(a)}),bl--,bl||(Ko=new WeakMap,Ko=new WeakMap,_n=new WeakMap,Hn={})}},$o=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||Px(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Mx(o,r,a,"aria-hidden")):function(){return null}};var We=require("react/jsx-runtime"),Ax=Object.defineProperty,Dt=(e,t)=>Ax(e,"name",{value:t,configurable:!0}),Ll="Dialog",[vc,dS]=at(Ll),[Tx,oa]=vc(Ll),Ic=Dt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=De.useRef(null),u=De.useRef(null),{nodes:i,registry:c}=qr(),[d,f]=aa({prop:o,defaultProp:r??!1,onChange:n,caller:Ll}),[p,h]=De.useState(0),[g,m]=De.useState(0);return(0,We.jsx)(Tx,{scope:t,triggerRef:s,contentRef:u,contentId:Pt(),titleId:Pt(),descriptionId:Pt(),titlePresent:p>0,descriptionPresent:g>0,setTitleCount:h,setDescriptionCount:m,open:d,onOpenChange:f,onOpenToggle:De.useCallback(()=>f(C=>!C),[f]),modal:l,branchNodes:i,branchRegistry:c,children:a})},"Dialog");var wc="DialogPortal",[Ex,Sc]=vc(wc,{forceMount:void 0}),yc=Dt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=oa(wc,t);return(0,We.jsx)(Ex,{scope:t,forceMount:a,children:De.Children.map(o,l=>(0,We.jsx)(ma,{present:a||n.open,children:(0,We.jsx)(qo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Cl="DialogOverlay",vl=De.forwardRef(Dt(function(t,a){let o=Sc(Cl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=oa(Cl,t.__scopeDialog);return l.modal?(0,We.jsx)(ma,{present:r||l.open,children:(0,We.jsx)(Ox,{...n,ref:a})}):null},"DialogOverlay")),Fx=lt("DialogOverlay.RemoveScroll"),Ox=De.forwardRef(Dt(function(t,a){let{__scopeDialog:o,...r}=t,n=oa(Cl,o),l=Ks(),s=fe(a,l);return(0,We.jsx)(eo,{as:Fx,allowPinchZoom:!0,shards:De.useMemo(()=>[n.contentRef,...n.branchNodes.map(u=>({current:u}))],[n.contentRef,n.branchNodes]),children:(0,We.jsx)(pe.div,{"data-state":yl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),Gr="DialogContent",Il=De.forwardRef(Dt(function(t,a){let o=Sc(Gr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=oa(Gr,t.__scopeDialog);return(0,We.jsx)(ma,{present:r||l.open,children:l.modal?(0,We.jsx)(Bx,{...n,ref:a}):(0,We.jsx)(Nx,{...n,ref:a})})},"DialogContent")),Bx=De.forwardRef(Dt(function(t,a){let o=oa(Gr,t.__scopeDialog),r=De.useRef(null),n=fe(a,o.contentRef,r);return De.useEffect(()=>{let l=r.current;if(l)return $o(l)},[]),(0,We.jsx)(kc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:Q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:Q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,u=s.button===0&&s.ctrlKey===!0;(s.button===2||u)&&l.preventDefault()}),onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Nx=De.forwardRef(Dt(function(t,a){let o=oa(Gr,t.__scopeDialog),r=De.useRef(!1),n=De.useRef(!1);return(0,We.jsx)(kc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),kc=De.forwardRef(Dt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:u,...i}=t,c=oa(Gr,o);return Da(),(0,We.jsx)(Ur,{registry:c.branchRegistry,children:(0,We.jsx)(Uo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,We.jsx)(Ho,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Pc(s,c.descriptionId):s,"data-state":yl(c.open),...i,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:u})})})},"DialogContentImpl")),wl=De.forwardRef(Dt(function(t,a){let{__scopeDialog:o,...r}=t,n=oa("DialogTitle",o),{setTitleCount:l}=n;return xe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,We.jsx)(pe.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Sl=De.forwardRef(Dt(function(t,a){let{__scopeDialog:o,...r}=t,n=oa("DialogDescription",o),{setDescriptionCount:l}=n;return xe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,We.jsx)(pe.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),_x="DialogClose",Rc=De.forwardRef(Dt(function(t,a){let{__scopeDialog:o,...r}=t,n=oa(_x,o);return(0,We.jsx)(pe.button,{type:"button",...r,ref:a,onClick:Q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Pc(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}Dt(Pc,"concatAriaDescribedby");function yl(e){return e?"open":"closed"}Dt(yl,"getState");var Mc=require("react"),kl="dsh-kanban",Ac={searchCards:"\u641C\u7D22\u4EFB\u52A1",cardNoLongerExists:"\u8FD9\u5F20\u5361\u7247\u5DF2\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4FEE\u6539\u3002",searchPlaceholder:"\u641C\u7D22\u6807\u9898\u3001\u63CF\u8FF0\u3001\u8BC4\u8BBA\u6216 ID\u2026",clearSearch:"\u6E05\u7A7A\u641C\u7D22",searchResults:"\u627E\u5230 {count} \u5F20\u5361\u7247",matchComment:"\u8BC4\u8BBA\u5339\u914D",matchDescription:"\u63CF\u8FF0\u5339\u914D",images:"\u56FE\u7247",discardImagesDesc:"\u672A\u4E0A\u4F20\u7684\u56FE\u7247\u548C\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u7EE7\u7EED\uFF1F",addImages:"\u6DFB\u52A0\u56FE\u7247",imagesEmpty:"\u7C98\u8D34\u622A\u56FE\u6216\u62D6\u5165\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u6587\u4EF6\u3002",imagesHint:"PNG\u3001JPEG\u3001WebP \xB7 \u6BCF\u5F20\u6700\u591A {size} MiB \xB7 \u6700\u591A {count} \u5F20",imagesSaveHint:"\u56FE\u7247\u6DFB\u52A0\u548C\u79FB\u9664\u540E\u7ACB\u5373\u4FDD\u5B58\u3002",imagesDraftHint:"\u521B\u5EFA\u4EFB\u52A1\u540E\u4E0A\u4F20\uFF0C\u53D6\u6D88\u65B0\u5EFA\u4E0D\u4F1A\u4FDD\u5B58\u56FE\u7247\u3002",imagesUnavailable:"\u6B64\u5DE5\u4F5C\u533A\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u56FE\u7247\u3002\u8BF7\u68C0\u67E5\u5DE5\u4F5C\u533A\u662F\u5426\u53EF\u5199\uFF0C\u4EE5\u53CA DSH \u662F\u5426\u652F\u6301\u56FE\u7247\u3002",imageUploading:"\u6B63\u5728\u4E0A\u4F20\u2026",imagePending:"\u7B49\u5F85\u521B\u5EFA\u4EFB\u52A1",imageLoadFailed:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",loadingImage:"\u52A0\u8F7D\u56FE\u7247\u2026",imageUploadFailed:"\u4E0A\u4F20\u5931\u8D25",imageUploadPartial:"\u4EFB\u52A1\u5DF2\u4FDD\u5B58\uFF0C\u90E8\u5206\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageInvalidType:"\u8BF7\u9009\u62E9 PNG\u3001JPEG \u6216 WebP \u56FE\u7247\u3002",imageTooLarge:"\u56FE\u7247\u4E3A\u7A7A\u6216\u8D85\u8FC7 {size} MiB\u3002",imageTooMany:"\u6BCF\u5F20\u5361\u7247\u6700\u591A\u6DFB\u52A0 {count} \u5F20\u56FE\u7247\u3002",imagePreview:"\u67E5\u770B\u56FE\u7247 {number}",imageRemove:"\u79FB\u9664\u56FE\u7247 {number}",imageRemoveFailed:"\u56FE\u7247\u79FB\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageRemoving:"\u6B63\u5728\u79FB\u9664\u2026",retry:"\u91CD\u8BD5",remove:"\u79FB\u9664",imagesChatHint:"\u6B64\u4EFB\u52A1\u7684 {count} \u5F20\u56FE\u7247\u5DF2\u9644\u5728\u804A\u5929\u8349\u7A3F\u4E2D\u3002",chatImagesUnavailable:"\u5F53\u524D DSH \u65E0\u6CD5\u6DFB\u52A0\u804A\u5929\u56FE\u7247\u9644\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u540E\u91CD\u8BD5\u3002",chatImagesBusy:"\u804A\u5929\u6846\u6B63\u5728\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",actImageAdded:"\u6DFB\u52A0\u4E86\u56FE\u7247",actImageRemoved:"\u79FB\u9664\u4E86\u56FE\u7247",boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldDueDate:"\u622A\u6B62\u65E5\u671F",fieldCompletedDate:"\u5B8C\u6210\u65E5\u671F",completedDateUnknown:"\u672A\u77E5",completedDateUnknownHint:"\u8FD9\u5F20\u5361\u7247\u6CA1\u6709\u5B8C\u6210\u65F6\u95F4\u8BB0\u5F55\u3002",today:"\u4ECA\u5929",tomorrow:"\u660E\u5929",nextWeek:"\u4E00\u5468\u540E",clearDate:"\u6E05\u9664\u65E5\u671F",dueToday:"\u4ECA\u5929\u5230\u671F",overdue:"\u5DF2\u903E\u671F",overdueDays:"\u5DF2\u903E\u671F {days} \u5929",shortDate:"{month}\u6708{day}\u65E5",yearDate:"{year}\u5E74{month}\u6708{day}\u65E5",dueDateFilter:"\u6309\u622A\u6B62\u65E5\u671F\u7B5B\u9009",completedColumn:"\u5B8C\u6210\u5217",noCompletedColumn:"\u672A\u8BBE\u7F6E",completedColumnHint:"\u79FB\u5165\u6B64\u5217\u7684\u4EFB\u52A1\u89C6\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u8BA1\u5165\u5230\u671F\u548C\u903E\u671F\u7B5B\u9009\u3002\u66F4\u6362\u5B8C\u6210\u5217\u540E\uFF0C\u65B0\u5B8C\u6210\u5217\u4E2D\u5DF2\u6709\u5361\u7247\u7684\u5B8C\u6210\u65E5\u671F\u5C06\u663E\u793A\u4E3A\u672A\u77E5\u3002",completed:"\u5DF2\u5B8C\u6210",incomplete:"\u672A\u5B8C\u6210",completionStatus:"\u5B8C\u6210\u72B6\u6001",feedback:"\u53CD\u9988\u4E0E\u5EFA\u8BAE \xB7 GitHub",actDueDate:"\u622A\u6B62\u65E5\u671F {from} \u2192 {to}",actCompletedColumn:"\u5B8C\u6210\u5217 {from} \u2192 {to}",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u52A8\u5DE6\u4FA7\u8C03\u6574\u987A\u5E8F\uFF0C\u540D\u79F0\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLists:"\u770B\u677F\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u70B9\u51FB\u540D\u79F0\u6216\u8272\u70B9\u7F16\u8F91\uFF0C\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLabels:"\u4EFB\u52A1\u6807\u7B7E",noLabelsHint:"\u6682\u65E0\u6807\u7B7E\uFF0C\u5728\u4E0B\u65B9\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u3002",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Ux={searchCards:"Search tasks",cardNoLongerExists:"This card was deleted. Changes cannot be saved.",searchPlaceholder:"Search titles, descriptions, comments or IDs\u2026",clearSearch:"Clear search",searchResults:"{count} matching cards",matchComment:"Comment match",matchDescription:"Description match",images:"Images",discardImagesDesc:"Pending images and unsent comments will not be included. Discard them and continue?",addImages:"Add images",imagesEmpty:"Paste a screenshot, drop images here, or choose files.",imagesHint:"PNG, JPEG, WebP \xB7 Up to {size} MiB each \xB7 {count} images per card",imagesSaveHint:"Adding and removing images saves immediately.",imagesDraftHint:"Images upload after the task is created. Canceling saves nothing.",imagesUnavailable:"Images cannot be saved here. Check that the workspace is writable and DSH supports images.",imageUploading:"Uploading\u2026",imagePending:"Waiting for task creation",imageLoadFailed:"Image failed to load",loadingImage:"Loading image\u2026",imageUploadFailed:"Upload failed",imageUploadPartial:"Task saved. Some image uploads failed; retry them below.",imageInvalidType:"Choose a PNG, JPEG or WebP image.",imageTooLarge:"Image is empty or exceeds {size} MiB.",imageTooMany:"A card can have at most {count} images.",imagePreview:"View image {number}",imageRemove:"Remove image {number}",imageRemoveFailed:"Could not remove the image. Try again.",imageRemoving:"Removing\u2026",retry:"Retry",remove:"Remove",imagesChatHint:"The task\u2019s {count} images are attached to this draft.",chatImagesUnavailable:"This DSH cannot add chat image attachments. Please upgrade and retry.",chatImagesBusy:"The composer is sending. Please retry shortly.",actImageAdded:"Added an image",actImageRemoved:"Removed an image",boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldDueDate:"Due date",fieldCompletedDate:"Completed at",completedDateUnknown:"Unknown",completedDateUnknownHint:"No completion time was recorded for this card.",today:"Today",tomorrow:"Tomorrow",nextWeek:"In one week",clearDate:"Clear date",dueToday:"Due today",overdue:"Overdue",overdueDays:"Overdue by {days} days",shortDate:"{month}/{day}",yearDate:"{year}/{month}/{day}",dueDateFilter:"Filter by due date",completedColumn:"Completed list",noCompletedColumn:"Not set",completedColumnHint:"Tasks in this list are complete and excluded from due and overdue filters. Changing this list resets completion dates; cards already in the new list will show an unknown completion date.",completed:"Completed",incomplete:"Incomplete",completionStatus:"Completion status",feedback:"Feedback \xB7 GitHub",actDueDate:"Due date {from} \u2192 {to}",actCompletedColumn:"Completed list {from} \u2192 {to}",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder. Name changes save automatically.",boardLists:"Board lists",newColumnPlaceholder:"New list name",labelEditDesc:"Edit a name or color. Changes save automatically.",boardLabels:"Task labels",noLabelsHint:"No labels yet. Add your first one below.",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},to=null,Rl=null;function Tc(e){let t=e.get("locale");t!==void 0&&(to=t,e.effect(()=>t.register(kl,"zh",Ac),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(kl,"en",Ux),"dsh-kanban: English dictionary"),Rl=t.bind(kl))}function Lt(e){return Rl?Rl(e):Ac[e]??e}var qx=e=>to&&typeof to.subscribe=="function"?to.subscribe(e):()=>{},Dc=()=>to&&typeof to.getSnapshot=="function"?to.getSnapshot():null;function Fe(){return(0,Mc.useSyncExternalStore)(qx,Dc,Dc),Lt}var vt=require("react/jsx-runtime"),jo=Ic;var zx=yc;var Ec=Xr.forwardRef(({className:e,...t},a)=>(0,vt.jsx)(vl,{ref:a,className:de("kanban-portal kanban-dialog-overlay",e),...t}));Ec.displayName=vl.displayName;var Kr=Xr.forwardRef(({className:e,children:t,...a},o)=>{let r=Fe();return(0,vt.jsxs)(zx,{children:[(0,vt.jsx)(Ec,{}),(0,vt.jsxs)(Il,{ref:o,className:de("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,vt.jsxs)(Rc,{className:"kanban-dialog-close",children:[(0,vt.jsx)(ct,{className:"kanban-dialog-close-icon"}),(0,vt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Kr.displayName=Il.displayName;var ao=({className:e,...t})=>(0,vt.jsx)("div",{className:de("kanban-dialog-header",e),...t});ao.displayName="DialogHeader";var oo=({className:e,...t})=>(0,vt.jsx)("div",{className:de("kanban-dialog-body",e),...t});oo.displayName="DialogBody";var ro=({className:e,...t})=>(0,vt.jsx)("div",{className:de("kanban-dialog-footer",e),...t});ro.displayName="DialogFooter";var no=Xr.forwardRef(({className:e,...t},a)=>(0,vt.jsx)(wl,{ref:a,className:de("kanban-dialog-title",e),...t}));no.displayName=wl.displayName;var $r=Xr.forwardRef(({className:e,...t},a)=>(0,vt.jsx)(Sl,{ref:a,className:de("kanban-dialog-description",e),...t}));$r.displayName=Sl.displayName;var ft=J(require("react"),1);var Oc=require("react-dom"),Bc=require("@deepseek-ai/dsh-client-ui-primitives");var Mt=require("react/jsx-runtime"),Nc="dsh-kanban:card-drawer-width",Wx=720,Pl=420;function Vx(){try{let e=Number(window.localStorage.getItem(Nc));if(Number.isFinite(e)&&e>0)return e}catch{}return Wx}function Fc(e){try{window.localStorage.setItem(Nc,String(e))}catch{}}var Dl=ft.forwardRef(({open:e,onClose:t,title:a,className:o,children:r,id:n,style:l,...s},u)=>{let i=ft.useRef(null);ft.useImperativeHandle(u,()=>i.current,[e]),(0,Bc.useModalLayer)(i,e,t);let c=Fe(),d=ft.useId(),f=n??d,p=`${d}-resize-hint`,[h,g]=ft.useState(Vx),[m,C]=ft.useState(()=>window.innerWidth),[x,b]=ft.useState(!1),L=ft.useRef(null),w=m<=600,v=Math.min(1e3,m-64),S=I=>Math.max(Pl,Math.min(v,I)),y=w?m:S(h);ft.useEffect(()=>{let I=()=>{L.current&&(g(L.current.preferredWidth),L.current=null,b(!1)),C(window.innerWidth)};return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);function A(I,P){let T=L.current;!T||T.pointerId!==I.pointerId||(L.current=null,b(!1),P?g(T.preferredWidth):Fc(T.lastWidth),I.currentTarget.hasPointerCapture(I.pointerId)&&I.currentTarget.releasePointerCapture(I.pointerId))}return e?(0,Oc.createPortal)((0,Mt.jsxs)(Mt.Fragment,{children:[(0,Mt.jsx)("div",{className:"kanban-portal kanban-dialog-overlay","aria-hidden":"true",onClick:t}),(0,Mt.jsxs)("div",{...s,ref:i,role:"dialog","aria-modal":"true","aria-label":a,tabIndex:-1,"data-state":"open",id:f,className:de("kanban-portal kanban-dialog-content kanban-drawer-content",o),style:{...l,width:y},"data-resizing":x||void 0,children:[r,!w&&(0,Mt.jsxs)(Mt.Fragment,{children:[(0,Mt.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":c("resizeTaskDetails"),"aria-describedby":p,"aria-orientation":"vertical","aria-valuemin":Pl,"aria-valuemax":v,"aria-valuenow":y,"aria-controls":f,title:c("resizeTaskDetailsHint"),onPointerDown:I=>{I.button!==0||L.current||(I.preventDefault(),I.currentTarget.focus(),I.currentTarget.setPointerCapture(I.pointerId),L.current={pointerId:I.pointerId,x:I.clientX,width:y,preferredWidth:h,lastWidth:y},b(!0))},onPointerMove:I=>{let P=L.current;if(!P||P.pointerId!==I.pointerId)return;let T=S(P.width+P.x-I.clientX);P.lastWidth=T,g(T)},onPointerUp:I=>A(I,!1),onPointerCancel:I=>A(I,!0),onLostPointerCapture:I=>A(I,!0),onKeyDown:I=>{let P;if(I.key==="ArrowLeft")P=S(y+32);else if(I.key==="ArrowRight")P=S(y-32);else if(I.key==="Home")P=Pl;else if(I.key==="End")P=v;else return;I.preventDefault(),g(P),Fc(P)}}),(0,Mt.jsx)("span",{id:p,className:"kanban-sr-only",children:c("resizeTaskDetailsHint")})]}),(0,Mt.jsx)("button",{type:"button",className:"kanban-dialog-close","aria-label":c("close"),onClick:t,children:(0,Mt.jsx)(ct,{className:"kanban-dialog-close-icon"})})]})]}),document.body):null});Dl.displayName="DrawerContent";var an=J(require("react"),1);var Yt=J(require("react"),1);var re=J(require("react"),1);var Gt=J(require("react"),1);var qn=require("react/jsx-runtime"),Ke=J(require("react"),1);var Ma=require("react/jsx-runtime");var Gx=Object.defineProperty,Xe=(e,t)=>Gx(e,"name",{value:t,configurable:!0});function so(e){let t=e+"CollectionProvider",[a,o]=at(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Xe(g=>{let{scope:m,children:C}=g,x=Gt.useRef(null),b=Gt.useRef(new Map).current;return(0,qn.jsx)(r,{scope:m,itemMap:b,collectionRef:x,children:C})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",u=lt(s),i=Gt.forwardRef((g,m)=>{let{scope:C,children:x}=g,b=n(s,C),L=fe(m,b.collectionRef);return(0,qn.jsx)(u,{ref:L,children:x})});i.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=lt(c),p=Gt.forwardRef((g,m)=>{let{scope:C,children:x,...b}=g,L=Gt.useRef(null),w=fe(m,L),v=n(c,C);return Gt.useEffect(()=>(v.itemMap.set(L,{ref:L,...b}),()=>{v.itemMap.delete(L)})),(0,qn.jsx)(f,{[d]:"",ref:w,children:x})});p.displayName=c;function h(g){let m=n(e+"CollectionConsumer",g);return Gt.useCallback(()=>{let x=m.collectionRef.current;if(!x)return[];let b=Array.from(x.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((v,S)=>b.indexOf(v.ref.current)-b.indexOf(S.ref.current))},[m.collectionRef,m.itemMap])}return Xe(h,"useCollection"),[{Provider:l,Slot:i,ItemSlot:p},h,o]}Xe(so,"createCollection");var _c=new WeakMap,Ue,At,Un=(At=class extends Map{constructor(a){super(a);Oi(this,Ue);ws(this,Ue,[...super.keys()]),_c.set(this,!0)}set(a,o){return _c.get(this)&&!this.has(a)&&et(this,Ue).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=Ml(a),u=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?et(this,Ue).indexOf(o)===u:u===this.size)return this.set(o,r),this;let i=et(this,Ue).filter(d=>d!==o);i.splice(u,0,o);let c=i.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new At(this);return n.insert(a,o,r),n}before(a){let o=et(this,Ue).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=et(this,Ue).indexOf(a);if(n===-1)return this;let l=et(this,Ue).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=et(this,Ue).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=et(this,Ue).indexOf(a);if(n===-1)return this;let l=et(this,Ue).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return ws(this,Ue,[]),super.clear()}delete(a){let o=super.delete(a);return o&&et(this,Ue).splice(et(this,Ue).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=zn(et(this,Ue),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=zn(et(this,Ue),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return et(this,Ue).indexOf(a)}keyAt(a){return zn(et(this,Ue),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new At(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new At(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let u of this)l===0&&!n?s=u:s=Reflect.apply(o,this,[s,u,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let u=this.entryAt(s);s===this.size-1&&!n?l=u:l=Reflect.apply(o,this,[l,u,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new At(o)}toReversed(){let a=new At;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new At(o)}slice(a,o){let r=new At;for(let n of et(this,Ue).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Ue=new WeakMap,Xe(At,"OrderedDict"),At);function zn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Hc(e,t);return a===-1?void 0:e[a]}Xe(zn,"at");function Hc(e,t){let a=e.length,o=Ml(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Xe(Hc,"toSafeIndex");function Ml(e){return e!==e||e===0?0:Math.trunc(e)}Xe(Ml,"toSafeInteger");function Xx(e){let t=e+"CollectionProvider",[a,o]=at(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let u=Xe(({state:v,...S})=>v?(0,Ma.jsx)(c,{...S,state:v}):(0,Ma.jsx)(i,{...S}),"CollectionProvider");u.displayName=t;let i=Xe(v=>{let S=x();return(0,Ma.jsx)(c,{...v,state:S})},"CollectionInit");i.displayName=e+"CollectionInit";let c=Xe(v=>{let{scope:S,children:y,state:A}=v,I=Ke.useRef(null),[P,T]=Ke.useState(null),U=fe(I,T),[M,q]=A,V=Ke.useRef(new Un),R=Ke.useCallback(()=>{let B=V.current;return zc(B)||B.sort(Wn),B},[]);return Ke.useEffect(()=>{if(!P)return;let B=Wc(()=>{q(_=>{let G=_.toSorted(Wn);return G.some(([$],me)=>_.keyAt(me)!==$)?G:_})});return B.observe(P,{childList:!0,subtree:!0}),()=>{B.disconnect()}},[P,q]),(0,Ma.jsx)(r,{scope:S,collectionElementRef:U,collectionElementRefObject:I,getCollection:R,setCollection:q,registryRef:V,children:(0,Ma.jsx)(l,{scope:S,collectionElement:P,collection:M,children:y})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=lt(d),p=Ke.forwardRef((v,S)=>{let{scope:y,children:A}=v,I=n(d,y),P=fe(S,I.collectionElementRef);return(0,Ma.jsx)(f,{ref:P,children:A})});p.displayName=d;let h=e+"CollectionItemSlot",g="data-radix-collection-item",m=lt(h),C=Ke.forwardRef((v,S)=>{let{scope:y,children:A,...I}=v,P=Ke.useRef(null),T=n(h,y),{setCollection:U,registryRef:M}=T,q=Ke.useRef(I);Uc(q.current,I)||(q.current=I);let V=q.current,R=Ke.useCallback(G=>{let ee=M.current;G?ee.set(G,{...q.current,element:G}):P.current&&ee.delete(P.current)},[M]),B=fe(S,R,P);xe(()=>{let G=P.current,ee=M.current;G&&ee.has(G)&&ee.set(G,{...V,element:G})},[V,M]);let _=Ke.useRef(null);return Ke.useEffect(()=>{let G=P.current,ee=_.current;(ee?.element??null)===G&&(!G||ee?.itemData===V)||(_.current=G?{element:G,itemData:V}:null,U($=>{let me=new Un($);return ee&&ee.element!==G&&me.delete(ee.element),G&&me.set(G,{...V,element:G}),me.sort(Wn)}))}),Ke.useEffect(()=>()=>{let G=_.current;_.current=null,G&&U(ee=>{if(!ee.has(G.element))return ee;let $=new Un(ee);return $.delete(G.element),$})},[U]),(0,Ma.jsx)(m,{[g]:"",ref:B,children:A})});C.displayName=h;function x(){return Ke.useState(new Un)}Xe(x,"useInitCollection");function b(v){let{collection:S}=s(e+"CollectionConsumer",v);return S}Xe(b,"useCollection");function L(v){let{getCollection:S}=n(e+"CollectionConsumer",v);return S}return Xe(L,"useGetCollection"),[{Provider:u,Slot:p,ItemSlot:C},{createCollectionScope:o,useCollection:b,useGetCollection:L,useInitCollection:x}]}Xe(Xx,"createCollection");function Uc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Xe(Uc,"shallowEqual");function qc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Xe(qc,"isElementPreceding");function zc(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}Xe(zc,"isInDocumentOrder");function Wn(e,t){return!e[1].element||!t[1].element?0:qc(e[1].element,t[1].element)?-1:1}Xe(Wn,"sortByDocumentPosition");function Wc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Xe(Wc,"getChildListObserver");var Vn=J(require("react"),1),jx=require("react/jsx-runtime"),Kx=Object.defineProperty,$x=(e,t)=>Kx(e,"name",{value:t,configurable:!0}),Yx={LTR:"ltr",RTL:"rtl"},Zx=Vn.createContext(void 0);function lo(e){let t=Vn.useContext(Zx);return e||t||Yx.LTR}$x(lo,"useDirection");var ut=J(require("react"),1);var Xc=["top","right","bottom","left"];var ra=Math.min,Xt=Math.max,Yr=Math.round,Zr=Math.floor,na=e=>({x:e,y:e}),Jx={left:"right",right:"left",bottom:"top",top:"bottom"};function Al(e,t,a){return Xt(e,ra(t,a))}function sa(e,t){return typeof e=="function"?e(t):e}function ga(e){return e.split("-")[0]}function io(e){return e.split("-")[1]}function Xn(e){return e==="x"?"y":"x"}function Kn(e){return e==="y"?"height":"width"}function Kt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function $n(e){return Xn(Kt(e))}function Kc(e,t,a){a===void 0&&(a=!1);let o=io(e),r=$n(e),n=Kn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=jr(l)),[l,jr(l)]}function $c(e){let t=jr(e);return[Gn(e),t,Gn(t)]}function Gn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Vc=["left","right"],Gc=["right","left"],Qx=["top","bottom"],eb=["bottom","top"];function tb(e,t,a){switch(e){case"top":case"bottom":return a?t?Gc:Vc:t?Vc:Gc;case"left":case"right":return t?Qx:eb;default:return[]}}function jc(e,t,a,o){let r=io(e),n=tb(ga(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(Gn)))),n}function jr(e){let t=ga(e);return Jx[t]+e.slice(t.length)}function ab(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Tl(e){return typeof e!="number"?ab(e):{top:e,right:e,bottom:e,left:e}}function uo(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Yc(e,t,a){let{reference:o,floating:r}=e,n=Kt(t),l=$n(t),s=Kn(l),u=ga(t),i=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,p;switch(u){case"top":p={x:c,y:o.y-r.height};break;case"bottom":p={x:c,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}let h=io(t);return h&&(p[l]+=f*(h==="end"?1:-1)*(a&&i?-1:1)),p}async function Qc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:u}=e,{boundary:i="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=sa(t,e),h=Tl(p),m=s[f?d==="floating"?"reference":"floating":d],C=uo(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:i,rootBoundary:c,strategy:u})),x=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,b=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),L=await(n.isElement==null?void 0:n.isElement(b))&&await(n.getScale==null?void 0:n.getScale(b))||{x:1,y:1},w=uo(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:x,offsetParent:b,strategy:u}):x);return{top:(C.top-w.top+h.top)/L.y,bottom:(w.bottom-C.bottom+h.bottom)/L.y,left:(C.left-w.left+h.left)/L.x,right:(w.right-C.right+h.right)/L.x}}var ob=50,ef=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Qc},u=await(l.isRTL==null?void 0:l.isRTL(t)),i=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Yc(i,o,u),f=o,p=0,h={};for(let g=0;g<n.length;g++){let m=n[g];if(!m)continue;let{name:C,fn:x}=m,{x:b,y:L,data:w,reset:v}=await x({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:i,platform:s,elements:{reference:e,floating:t}});c=b??c,d=L??d,h[C]={...h[C],...w},v&&p<ob&&(p++,typeof v=="object"&&(v.placement&&(f=v.placement),v.rects&&(i=v.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),{x:c,y:d}=Yc(i,f,u)),g=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}},tf=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:u}=t,{element:i,padding:c=0}=sa(e,t)||{};if(i==null)return{};let d=Tl(c),f={x:a,y:o},p=$n(r),h=Kn(p),g=await l.getDimensions(i),m=p==="y",C=m?"top":"left",x=m?"bottom":"right",b=m?"clientHeight":"clientWidth",L=n.reference[h]+n.reference[p]-f[p]-n.floating[h],w=f[p]-n.reference[p],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(i)),S=v?v[b]:0;(!S||!await(l.isElement==null?void 0:l.isElement(v)))&&(S=s.floating[b]||n.floating[h]);let y=L/2-w/2,A=S/2-g[h]/2-1,I=ra(d[C],A),P=ra(d[x],A),T=S-g[h]-P,U=S/2-g[h]/2+y,M=Al(I,U,T),q=!u.arrow&&io(r)!=null&&U!==M&&n.reference[h]/2-(U<I?I:P)-g[h]/2<0,V=q?U<I?U-I:U-T:0;return{[p]:f[p]+V,data:{[p]:M,centerOffset:U-M-V,...q&&{alignmentOffset:V}},reset:q}}});var af=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:u,elements:i}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...m}=sa(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let C=ga(r),x=Kt(s),b=ga(s)===s,L=await(u.isRTL==null?void 0:u.isRTL(i.floating)),w=f||(b||!g?[jr(s)]:$c(s)),v=h!=="none";!f&&v&&w.push(...jc(s,g,h,L));let S=[s,...w],y=await u.detectOverflow(t,m),A=[],I=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&A.push(y[C]),d){let M=Kc(r,l,L);A.push(y[M[0]],y[M[1]])}if(I=[...I,{placement:r,overflows:A}],!A.every(M=>M<=0)){var P,T;let M=(((P=n.flip)==null?void 0:P.index)||0)+1,q=S[M];if(q&&(!(d==="alignment"?x!==Kt(q):!1)||I.every(B=>Kt(B.placement)===x?B.overflows[0]>0:!0)))return{data:{index:M,overflows:I},reset:{placement:q}};let V=(T=I.filter(R=>R.overflows[0]<=0).sort((R,B)=>R.overflows[1]-B.overflows[1])[0])==null?void 0:T.placement;if(!V)switch(p){case"bestFit":{var U;let R=(U=I.filter(B=>{if(v){let _=Kt(B.placement);return _===x||_==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(_=>_>0).reduce((_,G)=>_+G,0)]).sort((B,_)=>B[1]-_[1])[0])==null?void 0:U[0];R&&(V=R);break}case"initialPlacement":V=s;break}if(r!==V)return{reset:{placement:V}}}return{}}}};function Zc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Jc(e){return Xc.some(t=>e[t]>=0)}var of=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=sa(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Zc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Jc(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Zc(l,a.floating);return{data:{escapedOffsets:s,escaped:Jc(s)}}}default:return{}}}}};var rf=new Set(["left","top"]);async function rb(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=ga(a),s=io(a),u=Kt(a)==="y",i=rf.has(l)?-1:1,c=n&&u?-1:1,d=sa(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof h=="number"&&(p=s==="end"?h*-1:h),u?{x:p*c,y:f*i}:{x:f*i,y:p*c}}var nf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,u=await rb(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+u.x,y:n+u.y,data:{...u,placement:l}}}}},sf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:u={fn:x=>{let{x:b,y:L}=x;return{x:b,y:L}}},...i}=sa(e,t),c={x:a,y:o},d=await n.detectOverflow(t,i),f=Kt(r),p=Xn(f),h=c[p],g=c[f],m=(x,b)=>Al(b+d[x==="y"?"top":"left"],b,b-d[x==="y"?"bottom":"right"]);l&&(h=m(p,h)),s&&(g=m(f,g));let C=u.fn({...t,[p]:h,[f]:g});return{...C,data:{x:C.x-a,y:C.y-o,enabled:{[p]:l,[f]:s}}}}}},lf=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:u}=t,{offset:i=0,mainAxis:c=!0,crossAxis:d=!0}=sa(e,t),f={x:r,y:n},p=Kt(l),h=Xn(p),g=f[h],m=f[p],C=sa(i,t),x=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:(a=C.mainAxis)!=null?a:0,crossAxis:(o=C.crossAxis)!=null?o:0};if(c){let w=h==="y"?"height":"width",v=s.reference[h]-s.floating[w]+x.mainAxis,S=s.reference[h]+s.reference[w]-x.mainAxis;g<v?g=v:g>S&&(g=S)}if(d){var b,L;let w=h==="y"?"width":"height",v=rf.has(ga(l)),S=s.reference[p]-s.floating[w]+(v&&((b=u.offset)==null?void 0:b[p])||0)+(v?0:x.crossAxis),y=s.reference[p]+s.reference[w]+(v?0:((L=u.offset)==null?void 0:L[p])||0)-(v?x.crossAxis:0);m<S?m=S:m>y&&(m=y)}return{[h]:g,[p]:m}}}},uf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=sa(e,t),u=await r.detectOverflow(t,s),i=ga(a),c=io(a),d=Kt(a)==="y",{width:f,height:p}=o.floating,h,g;i==="top"||i==="bottom"?(h=i,g=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(g=i,h=c==="end"?"top":"bottom");let m=p-u.top-u.bottom,C=f-u.left-u.right,x=ra(p-u[h],m),b=ra(f-u[g],C),L=t.middlewareData.shift,w=!L,v=x,S=b;L!=null&&L.enabled.x&&(S=C),L!=null&&L.enabled.y&&(v=m),w&&!c&&(d?S=f-2*Xt(u.left,u.right):v=p-2*Xt(u.top,u.bottom)),await l({...t,availableWidth:S,availableHeight:v});let y=await r.getDimensions(n.floating);return f!==y.width||p!==y.height?{reset:{rects:!0}}:{}}}};function jn(){return typeof window<"u"}function po(e){return cf(e)?(e.nodeName||"").toLowerCase():"#document"}function pt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function la(e){var t;return(t=(cf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function cf(e){return jn()?e instanceof Node||e instanceof pt(e).Node:!1}function $t(e){return jn()?e instanceof Element||e instanceof pt(e).Element:!1}function ha(e){return jn()?e instanceof HTMLElement||e instanceof pt(e).HTMLElement:!1}function df(e){return!jn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pt(e).ShadowRoot}function Jr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=jt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function ff(e){return/^(table|td|th)$/.test(po(e))}function Qr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var nb=/transform|translate|scale|rotate|perspective|filter/,sb=/paint|layout|strict|content/,co=e=>!!e&&e!=="none",El;function Yn(e){let t=$t(e)?jt(e):e;return co(t.transform)||co(t.translate)||co(t.scale)||co(t.rotate)||co(t.perspective)||!Zn()&&(co(t.backdropFilter)||co(t.filter))||nb.test(t.willChange||"")||sb.test(t.contain||"")}function pf(e){let t=Aa(e);for(;ha(t)&&!Yo(t);){if(Yn(t))return t;if(Qr(t))return null;t=Aa(t)}return null}function Zn(){return El==null&&(El=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),El}function Yo(e){return/^(html|body|#document)$/.test(po(e))}function jt(e){return pt(e).getComputedStyle(e)}function en(e){return $t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Aa(e){if(po(e)==="html")return e;let t=e.assignedSlot||e.parentNode||df(e)&&e.host||la(e);return df(t)?t.host:t}function mf(e){let t=Aa(e);return Yo(t)?(e.ownerDocument||e).body:ha(t)&&Jr(t)?t:mf(t)}function fo(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=mf(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=pt(r);if(n){let s=Jn(l);return t.concat(l,l.visualViewport||[],Jr(r)?r:[],s&&a?fo(s):[])}else return t.concat(r,fo(r,[],a))}function Jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xf(e){let t=jt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ha(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Yr(a)!==n||Yr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function Ol(e){return $t(e)?e:e.contextElement}function Zo(e){let t=Ol(e);if(!ha(t))return na(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=xf(t),l=(n?Yr(a.width):a.width)/o,s=(n?Yr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var lb=na(0);function bf(e){let t=pt(e);return!Zn()||!t.visualViewport?lb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ib(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===pt(e)}function mo(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=Ol(e),l=na(1);t&&(o?$t(o)&&(l=Zo(o)):l=Zo(e));let s=ib(n,a,o)?bf(n):na(0),u=(r.left+s.x)/l.x,i=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=pt(n),p=$t(o)?pt(o):o,h=f,g=Jn(h);for(;g&&p!==h;){let m=Zo(g),C=g.getBoundingClientRect(),x=jt(g),b=C.left+(g.clientLeft+parseFloat(x.paddingLeft))*m.x,L=C.top+(g.clientTop+parseFloat(x.paddingTop))*m.y;u*=m.x,i*=m.y,c*=m.x,d*=m.y,u+=b,i+=L,h=pt(g),g=Jn(h)}}return uo({width:c,height:d,x:u,y:i})}function Qn(e,t){let a=en(e).scrollLeft;return t?t.left+a:mo(la(e)).left+a}function Cf(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Qn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function ub(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=la(o),s=t?Qr(t.floating):!1;if(o===l||s&&n)return a;let u={scrollLeft:0,scrollTop:0},i=na(1),c=na(0),d=ha(o);if((d||!n)&&((po(o)!=="body"||Jr(l))&&(u=en(o)),d)){let p=mo(o);i=Zo(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}let f=l&&!d&&!n?Cf(l,u):na(0);return{width:a.width*i.x,height:a.height*i.y,x:a.x*i.x-u.scrollLeft*i.x+c.x+f.x,y:a.y*i.y-u.scrollTop*i.y+c.y+f.y}}function db(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function cb(e){let t=en(e),a=e.ownerDocument.body,o=Xt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Xt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Qn(e),l=-t.scrollTop;return jt(a).direction==="rtl"&&(n+=Xt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var fb=25;function pb(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=pt(e),n=la(e),l=r.visualViewport,s=n.clientWidth,u=n.clientHeight,i=0,c=0;if(l){let f=!Zn()||t==="fixed";o?f||(i=-l.offsetLeft,c=-l.offsetTop):(s=l.width,u=l.height,f&&(i=l.offsetLeft,c=l.offsetTop))}if(Qn(n)<=0){let f=n.ownerDocument,p=f.body,h=getComputedStyle(p),g=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,m=Math.abs(n.clientWidth-p.clientWidth-g),C=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;C<=fb&&(s-=C)}return{width:s,height:u,x:i,y:c}}function mb(e,t){let a=mo(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Zo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,u=r*n.x,i=o*n.y;return{width:l,height:s,x:u,y:i}}function gf(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=pb(e,a,t);else if(t==="document")o=cb(la(e));else if($t(t))o=mb(t,a);else{let r=bf(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return uo(o)}function gb(e,t){let a=t.get(e);if(a)return a;let o=fo(e,[],!1).filter(s=>$t(s)&&po(s)!=="body"),r=null,n=jt(e).position==="fixed",l=n?Aa(e):e;for(;$t(l)&&!Yo(l);){let s=jt(l),u=Yn(l),i=r?r.position:n?"fixed":"";!u&&(i==="fixed"||i==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=Aa(l)}return t.set(e,o),o}function hb(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?Qr(t)?[]:gb(t,this._c):[].concat(a),o],s=gf(t,l[0],r),u=s.top,i=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let p=gf(t,l[f],r);u=Xt(p.top,u),i=ra(p.right,i),c=ra(p.bottom,c),d=Xt(p.left,d)}return{width:i-d,height:c-u,x:d,y:u}}function xb(e){let{width:t,height:a}=xf(e);return{width:t,height:a}}function bb(e,t,a){let o=ha(t),r=la(t),n=a==="fixed",l=mo(e,!0,n,t),s={scrollLeft:0,scrollTop:0},u=na(0);if((o||!n)&&((po(t)!=="body"||Jr(r))&&(s=en(t)),o)){let f=mo(t,!0,n,t);u.x=f.x+t.clientLeft,u.y=f.y+t.clientTop}!o&&r&&(u.x=Qn(r));let i=r&&!o&&!n?Cf(r,s):na(0),c=l.left+s.scrollLeft-u.x-i.x,d=l.top+s.scrollTop-u.y-i.y;return{x:c,y:d,width:l.width,height:l.height}}function Fl(e){return jt(e).position==="static"}function hf(e,t){if(!ha(e)||jt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return la(e)===a&&(a=a.ownerDocument.body),a}function Lf(e,t){let a=pt(e);if(Qr(e))return a;if(!ha(e)){let r=Aa(e);for(;r&&!Yo(r);){if($t(r)&&!Fl(r))return r;r=Aa(r)}return a}let o=hf(e,t);for(;o&&ff(o)&&Fl(o);)o=hf(o,t);return o&&Yo(o)&&Fl(o)&&!Yn(o)?a:o||pf(e)||a}var Cb=async function(e){let t=this.getOffsetParent||Lf,a=this.getDimensions,o=await a(e.floating);return{reference:bb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Lb(e){return jt(e).direction==="rtl"}var vf={convertOffsetParentRelativeRectToViewportRelativeRect:ub,getDocumentElement:la,getClippingRect:hb,getOffsetParent:Lf,getElementRects:Cb,getClientRects:db,getDimensions:xb,getScale:Zo,isElement:$t,isRTL:Lb};function If(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vb(e,t,a){let o=null,r,n=la(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:p,top:h,width:g,height:m}=f;if(c||t(),!g||!m)return;let C=Zr(h),x=Zr(n.clientWidth-(p+g)),b=Zr(n.clientHeight-(h+m)),L=Zr(p),v={rootMargin:-C+"px "+-x+"px "+-b+"px "+-L+"px",threshold:Xt(0,ra(1,d))||1},S=!0;function y(A){let I=A[0].intersectionRatio;if(!If(f,e.getBoundingClientRect()))return s();if(I!==d){if(!S)return s();I?s(!1,I):r=setTimeout(()=>{s(!1,1e-7)},1e3)}S=!1}try{o=new IntersectionObserver(y,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(y,v)}o.observe(e)}let u=pt(e),i=()=>s(a);return u.addEventListener("resize",i),s(!0),()=>{u.removeEventListener("resize",i),l()}}function Bl(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,i=Ol(e),c=r||n?[...i?fo(i):[],...t?fo(t):[]]:[];c.forEach(C=>{r&&C.addEventListener("scroll",a),n&&C.addEventListener("resize",a)});let d=i&&s?vb(i,a,n):null,f=-1,p=null;l&&(p=new ResizeObserver(C=>{let[x]=C;x&&x.target===i&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(t)})),a()}),i&&!u&&p.observe(i),t&&p.observe(t));let h,g=u?mo(e):null;u&&m();function m(){let C=mo(e);g&&!If(g,C)&&a(),g=C,h=requestAnimationFrame(m)}return a(),()=>{var C;c.forEach(x=>{r&&x.removeEventListener("scroll",a),n&&x.removeEventListener("resize",a)}),d?.(),(C=p)==null||C.disconnect(),p=null,u&&cancelAnimationFrame(h)}}var wf=nf;var Sf=sf,yf=af,kf=uf,Rf=of,Nl=tf;var Pf=lf,_l=(e,t,a)=>{let o=new Map,r=a??{},n={...vf,...r.platform,_c:o};return ef(e,t,{...r,platform:n})};var Ve=J(require("react"),1),Mf=require("react"),Af=J(require("react-dom"),1),Ib=typeof document<"u",wb=function(){},es=Ib?Mf.useLayoutEffect:wb;function ts(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!ts(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!ts(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Tf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Df(e,t){let a=Tf(e);return Math.round(t*a)/a}function Hl(e){let t=Ve.useRef(e);return es(()=>{t.current=e}),t}function Ef(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:u,open:i}=e,[c,d]=Ve.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=Ve.useState(o);ts(f,o)||p(o);let[h,g]=Ve.useState(null),[m,C]=Ve.useState(null),x=Ve.useCallback(B=>{B!==v.current&&(v.current=B,g(B))},[]),b=Ve.useCallback(B=>{B!==S.current&&(S.current=B,C(B))},[]),L=n||h,w=l||m,v=Ve.useRef(null),S=Ve.useRef(null),y=Ve.useRef(c),A=u!=null,I=Hl(u),P=Hl(r),T=Hl(i),U=Ve.useCallback(()=>{if(!v.current||!S.current)return;let B={placement:t,strategy:a,middleware:f};P.current&&(B.platform=P.current),_l(v.current,S.current,B).then(_=>{let G={..._,isPositioned:T.current!==!1};M.current&&!ts(y.current,G)&&(y.current=G,Af.flushSync(()=>{d(G)}))})},[f,t,a,P,T]);es(()=>{i===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,d(B=>({...B,isPositioned:!1})))},[i]);let M=Ve.useRef(!1);es(()=>(M.current=!0,()=>{M.current=!1}),[]),es(()=>{if(L&&(v.current=L),w&&(S.current=w),L&&w){if(I.current)return I.current(L,w,U);U()}},[L,w,U,I,A]);let q=Ve.useMemo(()=>({reference:v,floating:S,setReference:x,setFloating:b}),[x,b]),V=Ve.useMemo(()=>({reference:L,floating:w}),[L,w]),R=Ve.useMemo(()=>{let B={position:a,left:0,top:0};if(!V.floating)return B;let _=Df(V.floating,c.x),G=Df(V.floating,c.y);return s?{...B,transform:"translate("+_+"px, "+G+"px)",...Tf(V.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:_,top:G}},[a,s,V.floating,c.x,c.y]);return Ve.useMemo(()=>({...c,update:U,refs:q,elements:V,floatingStyles:R}),[c,U,q,V,R])}var Sb=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?Nl({element:o.current,padding:r}).fn(a):{}:o?Nl({element:o,padding:r}).fn(a):{}}}},Ff=(e,t)=>{let a=wf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Of=(e,t)=>{let a=Sf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Bf=(e,t)=>({fn:Pf(e).fn,options:[e,t]}),Nf=(e,t)=>{let a=yf(e);return{name:a.name,fn:a.fn,options:[e,t]}},_f=(e,t)=>{let a=kf(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Hf=(e,t)=>{let a=Rf(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Uf=(e,t)=>{let a=Sb(e);return{name:a.name,fn:a.fn,options:[e,t]}};var qf=J(require("react"),1);var yb=Object.defineProperty,kb=(e,t)=>yb(e,"name",{value:t,configurable:!0});function Ul(e){let[t,a]=qf.useState(void 0);return xe(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,u;if("borderBoxSize"in l){let i=l.borderBoxSize,c=Array.isArray(i)?i[0]:i;s=c.inlineSize,u=c.blockSize}else s=e.offsetWidth,u=e.offsetHeight;a({width:s,height:u})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}kb(Ul,"useSize");var Jo=require("react/jsx-runtime"),Rb=Object.defineProperty,Ta=(e,t)=>Rb(e,"name",{value:t,configurable:!0});var zf={Partial:"partial",Always:"always"},Wf={Optimized:"optimized",Always:"always"},Vf="Popper",[Gf,Qo]=at(Vf),[Pb,Xf]=Gf(Vf),as=Ta(e=>{let{__scopePopper:t,children:a}=e,[o,r]=ut.useState(null),[n,l]=ut.useState(void 0);return(0,Jo.jsx)(Pb,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Db="PopperAnchor",os=ut.forwardRef(Ta(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Xf(Db,o),s=ut.useRef(null),u=l.onAnchorChange,i=ut.useCallback(g=>{s.current=g,g&&u(g)},[u]),c=fe(a,i),d=ut.useRef(null);ut.useEffect(()=>{if(!r)return;let g=d.current;d.current=r.current,g!==d.current&&u(d.current)});let f=l.placementState&&ns(l.placementState),p=f?.[0],h=f?.[1];return r?null:(0,Jo.jsx)(pe.div,{"data-radix-popper-side":p,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),Kf="PopperContent",[Mb,ry]=Gf(Kf),rs=ut.forwardRef(Ta(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:u=0,avoidCollisions:i=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=zf.Partial,hideWhenDetached:p=!1,updatePositionStrategy:h=Wf.Optimized,onPlaced:g,...m}=t,C=Xf(Kf,o),[x,b]=ut.useState(null),L=fe(a,b),[w,v]=ut.useState(null),S=Ul(w),y=S?.width??0,A=S?.height??0,I=r+(l!=="center"?"-"+l:""),P=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},T=Array.isArray(c)?c:[c],U=T.length>0,M={padding:P,boundary:T.filter($f),altBoundary:U},{refs:q,floatingStyles:V,placement:R,isPositioned:B,middlewareData:_}=Ef({strategy:"fixed",placement:I,whileElementsMounted:Ta((...Ce)=>Bl(...Ce,{animationFrame:h===Wf.Always}),"whileElementsMounted"),elements:{reference:C.anchor},middleware:[Ff({mainAxis:n+A,alignmentAxis:s}),i&&Of({mainAxis:!0,crossAxis:!1,...f===zf.Partial?{limiter:Bf()}:{},...M}),i&&Nf({...M}),_f({...M,apply:Ta(({elements:Ce,rects:N,availableWidth:j,availableHeight:Y})=>{let{width:ae,height:oe}=N.reference,Z=Ce.floating.style;Z.setProperty("--radix-popper-available-width",`${j}px`),Z.setProperty("--radix-popper-available-height",`${Y}px`),Z.setProperty("--radix-popper-anchor-width",`${ae}px`),Z.setProperty("--radix-popper-anchor-height",`${oe}px`)},"apply")}),w&&Uf({element:w,padding:u}),Ab({arrowWidth:y,arrowHeight:A}),p&&Hf(U?{strategy:"referenceHidden",...M}:{strategy:"referenceHidden",padding:M.padding,altBoundary:M.altBoundary})]}),G=C.setPlacementState;xe(()=>(G(R),()=>{G(void 0)}),[R,G]);let[ee,$]=ns(R),me=je(g);xe(()=>{B&&me?.()},[B,me]);let Te=_.arrow?.x,Se=_.arrow?.y,H=_.arrow?.centerOffset!==0,[ye,we]=ut.useState();return xe(()=>{x&&we(window.getComputedStyle(x).zIndex)},[x]),(0,Jo.jsx)("div",{ref:q.setFloating,"data-radix-popper-content-wrapper":"",style:{...V,transform:B?V.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ye,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Jo.jsx)(Mb,{scope:o,placedSide:ee,placedAlign:$,onArrowChange:v,arrowX:Te,arrowY:Se,shouldHideArrow:H,children:(0,Jo.jsx)(pe.div,{"data-side":ee,"data-align":$,...m,ref:L,style:{...m.style,animation:B?m.style?.animation:"none"}})})})},"PopperContent"));function $f(e){return e!==null}Ta($f,"isNotNull");var Ab=Ta(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[i,c]=ns(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,p=(r.arrow?.y??0)+u/2,h="",g="";return i==="bottom"?(h=l?d:`${f}px`,g=`${-u}px`):i==="top"?(h=l?d:`${f}px`,g=`${o.floating.height+u}px`):i==="right"?(h=`${-u}px`,g=l?d:`${p}px`):i==="left"&&(h=`${o.floating.width+u}px`,g=l?d:`${p}px`),{data:{x:h,y:g}}}}),"transformOrigin");function ns(e){let[t,a="center"]=e.split("-");return[t,a]}Ta(ns,"getSideAndAlignFromPlacement");var Ze=J(require("react"),1);var Eb=J(require("react"),1),ss=J(require("react"),1),Tb=Object.defineProperty,zl=(e,t)=>Tb(e,"name",{value:t,configurable:!0}),ql=!1;function Yf(){let[e,t]=ss.useState(ql);return ss.useEffect(()=>{ql||(ql=!0,t(!0))},[]),e}zl(Yf,"useIsHydrated");var Zf=Eb[" useSyncExternalStore ".trim().toString()];function Jf(){return()=>{}}zl(Jf,"subscribe");function Qf(){return Zf(Jf,()=>!0,()=>!1)}zl(Qf,"useIsHydratedModern");var ep=typeof Zf=="function"?Qf:Yf;var Ea=require("react/jsx-runtime"),Fb=Object.defineProperty,go=(e,t)=>Fb(e,"name",{value:t,configurable:!0}),Wl="rovingFocusGroup.onEntryFocus",Ob={bubbles:!1,cancelable:!0},ls="RovingFocusGroup",[Vl,ap,Bb]=so(ls),[Nb,Gl]=at(ls,[Bb]),tp={Vertical:"vertical",Horizontal:"horizontal"},_b={LTR:"ltr",RTL:"rtl"},[Hb,Ub]=Nb(ls),op=Ze.forwardRef(go(function(t,a){return(0,Ea.jsx)(Vl.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,Ea.jsx)(Vl.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,Ea.jsx)(qb,{...t,ref:a})})})},"RovingFocusGroup")),qb=Ze.forwardRef(go(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:i,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,p=Ze.useRef(null),h=fe(a,p),g=lo(l),[m,C]=aa({prop:s,defaultProp:u??null,onChange:i,caller:ls}),[x,b]=Ze.useState(!1),L=je(c),w=ap(o),v=Ze.useRef(!1),[S,y]=Ze.useState(0);return Ze.useEffect(()=>{let A=p.current;if(A)return A.addEventListener(Wl,L),()=>A.removeEventListener(Wl,L)},[L]),(0,Ea.jsx)(Hb,{scope:o,orientation:r,dir:g,loop:n,currentTabStopId:m,onItemFocus:Ze.useCallback(A=>C(A),[C]),onItemShiftTab:Ze.useCallback(()=>b(!0),[]),onFocusableItemAdd:Ze.useCallback(()=>y(A=>A+1),[]),onFocusableItemRemove:Ze.useCallback(()=>y(A=>A-1),[]),children:(0,Ea.jsx)(pe.div,{tabIndex:x||S===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:Q(t.onMouseDown,()=>{v.current=!0}),onFocus:Q(t.onFocus,A=>{let I=!v.current;if(A.target===A.currentTarget&&I&&!x){let P=new CustomEvent(Wl,Ob);if(A.currentTarget.dispatchEvent(P),!P.defaultPrevented){let T=w().filter(R=>R.focusable),U=T.find(R=>R.active),M=T.find(R=>R.id===m),V=[U,M,...T].filter(Boolean).map(R=>R.ref.current);Xl(V,d)}}v.current=!1}),onBlur:Q(t.onBlur,()=>b(!1))})})},"RovingFocusGroupImpl")),zb="RovingFocusGroupItem",rp=Ze.forwardRef(go(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...u}=t,i=Pt(),c=l||i,d=Ub(zb,o),f=d.currentTabStopId===c,p=ap(o),{onFocusableItemAdd:h,onFocusableItemRemove:g,currentTabStopId:m}=d,C=ep();return xe(()=>{if(!(!C||!r))return h(),()=>g()},[C,r,h,g]),Ze.useEffect(()=>{if(!(C||!r))return h(),()=>g()},[C,r,h,g]),(0,Ea.jsx)(Vl.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,Ea.jsx)(pe.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...u,ref:a,onMouseDown:Q(t.onMouseDown,x=>{r?d.onItemFocus(c):x.preventDefault()}),onFocus:Q(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:Q(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){d.onItemShiftTab();return}if(x.target!==x.currentTarget)return;let b=sp(x,d.orientation,d.dir);if(b!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let w=p().filter(v=>v.focusable).map(v=>v.ref.current);if(b==="last")w.reverse();else if(b==="prev"||b==="next"){b==="prev"&&w.reverse();let v=w.indexOf(x.currentTarget);w=d.loop?lp(w,v+1):w.slice(v+1)}setTimeout(()=>Xl(w))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:m!=null}):s})})},"RovingFocusGroupItem")),Wb={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function np(e,t){return t!==_b.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}go(np,"getDirectionAwareKey");function sp(e,t,a){let o=np(e.key,a);if(!(t===tp.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===tp.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return Wb[o]}go(sp,"getFocusIntent");function Xl(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}go(Xl,"focusFirst");function lp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}go(lp,"wrapArray");var Re=require("react/jsx-runtime"),Xb=Object.defineProperty,Me=(e,t)=>Xb(e,"name",{value:t,configurable:!0});var Kl=["Enter"," "],Kb=["ArrowDown","PageUp","Home"],up=["ArrowUp","PageDown","End"],$b=[...Kb,...up],Fy={ltr:[...Kl,"ArrowRight"],rtl:[...Kl,"ArrowLeft"]};var us="Menu",[$l,jb,Yb]=so(us),[ho,Yl]=at(us,[Yb,Qo,Gl]),Zl=Qo(),dp=Gl(),[Zb,tn]=ho(us),[Jb,Jl]=ho(us),cp=Me(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Zl(t),[u,i]=re.useState(null),c=re.useRef(!1),d=je(n),f=lo(r);return re.useEffect(()=>{let p=Me(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=Me(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",p,{capture:!0}),()=>{document.removeEventListener("keydown",p,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),re.useEffect(()=>{if(!a)return;let p=Me(()=>d(!1),"handleBlur");return window.addEventListener("blur",p),()=>window.removeEventListener("blur",p)},[a,d]),(0,Re.jsx)(as,{...s,children:(0,Re.jsx)(Zb,{scope:t,open:a,onOpenChange:d,content:u,onContentChange:i,children:(0,Re.jsx)(Jb,{scope:t,onClose:re.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),fp=re.forwardRef(Me(function(t,a){let{__scopeMenu:o,...r}=t,n=Zl(o);return(0,Re.jsx)(os,{...n,...r,ref:a})},"MenuAnchor")),pp="MenuPortal",[Qb,eC]=ho(pp,{forceMount:void 0}),mp=Me(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=tn(pp,t);return(0,Re.jsx)(Qb,{scope:t,forceMount:a,children:(0,Re.jsx)(ma,{present:a||n.open,children:(0,Re.jsx)(qo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),Fa="MenuContent",[tC,gp]=ho(Fa),hp=re.forwardRef(Me(function(t,a){let o=eC(Fa,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=tn(Fa,t.__scopeMenu),s=Jl(Fa,t.__scopeMenu);return(0,Re.jsx)($l.Provider,{scope:t.__scopeMenu,children:(0,Re.jsx)(ma,{present:r||l.open,children:(0,Re.jsx)($l.Slot,{scope:t.__scopeMenu,children:s.modal?(0,Re.jsx)(aC,{...n,ref:a}):(0,Re.jsx)(oC,{...n,ref:a})})})})},"MenuContent")),aC=re.forwardRef(Me(function(t,a){let o=tn(Fa,t.__scopeMenu),r=re.useRef(null),n=fe(a,r);return re.useEffect(()=>{let l=r.current;if(l)return $o(l)},[]),(0,Re.jsx)(xp,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),oC=re.forwardRef(Me(function(t,a){let o=tn(Fa,t.__scopeMenu);return(0,Re.jsx)(xp,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),rC=lt("MenuContent.ScrollLock"),xp=re.forwardRef(Me(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:u,onEntryFocus:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:h,disableOutsideScroll:g,...m}=t,C=tn(Fa,o),x=Jl(Fa,o),b=Zl(o),L=dp(o),w=jb(o),[v,S]=re.useState(null),y=re.useRef(null),[A,I]=re.useState(null);el(A);let{nodes:P,registry:T}=qr(),U=!!(n||g),M=fe(a,y,C.onContentChange,I),q=re.useRef(0),V=re.useRef(""),R=re.useRef(0),B=re.useRef(null),_=re.useRef("right"),G=re.useRef(0),ee=re.useMemo(()=>g?[y,...P.map(H=>({current:H}))]:[],[y,P,g]),$=g?eo:re.Fragment,me=g?{as:rC,allowPinchZoom:!0,shards:ee}:void 0,Te=Me(H=>{let ye=V.current+H,we=w().filter(Z=>!Z.disabled),Ce=document.activeElement,N=we.find(Z=>Z.ref.current===Ce)?.textValue,j=we.map(Z=>Z.textValue),Y=yp(j,ye,N),ae=we.find(Z=>Z.textValue===Y)?.ref.current;function oe(Z){V.current=Z,window.clearTimeout(q.current),Z!==""&&(q.current=window.setTimeout(()=>oe(""),1e3))}Me(oe,"updateSearch"),oe(ye),ae&&setTimeout(()=>ae.focus())},"handleTypeaheadSearch");re.useEffect(()=>()=>window.clearTimeout(q.current),[]),Da();let Se=re.useCallback(H=>_.current===B.current?.side&&Rp(H,B.current?.area),[]);return(0,Re.jsx)(tC,{scope:o,searchRef:V,onItemEnter:re.useCallback(H=>{Se(H)&&H.preventDefault()},[Se]),onItemLeave:re.useCallback(H=>{Se(H)||(y.current?.focus(),S(null))},[Se]),onTriggerLeave:re.useCallback(H=>{Se(H)&&H.preventDefault()},[Se]),pointerGraceTimerRef:R,onPointerGraceIntentChange:re.useCallback(H=>{B.current=H},[]),children:(0,Re.jsx)(Ur,{registry:U?T:null,children:(0,Re.jsx)($,{...me,children:(0,Re.jsx)(Uo,{asChild:!0,trapped:n,branches:P,onMountAutoFocus:Q(l,H=>{H.preventDefault(),y.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,Re.jsx)(Ho,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:h,children:(0,Re.jsx)(op,{asChild:!0,...L,dir:x.dir,orientation:"vertical",loop:r,currentTabStopId:v,onCurrentTabStopIdChange:S,onEntryFocus:Q(i,H=>{x.isUsingKeyboardRef.current||H.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,Re.jsx)(rs,{role:"menu","aria-orientation":"vertical","data-state":vp(C.open),"data-radix-menu-content":"",dir:x.dir,...b,...m,ref:M,style:{outline:"none",...m.style},onKeyDown:Q(m.onKeyDown,H=>{let we=H.target.closest("[data-radix-menu-content]")===H.currentTarget,Ce=H.ctrlKey||H.altKey||H.metaKey,N=H.key.length===1;we&&(H.key==="Tab"&&H.preventDefault(),!Ce&&N&&Te(H.key));let j=y.current;if(H.target!==j||!$b.includes(H.key))return;H.preventDefault();let ae=w().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);up.includes(H.key)&&ae.reverse(),wp(ae)}),onBlur:Q(t.onBlur,H=>{H.currentTarget.contains(H.target)||(window.clearTimeout(q.current),V.current="")}),onPointerMove:Q(t.onPointerMove,is(H=>{let ye=H.target,we=G.current!==H.clientX;if(H.currentTarget.contains(ye)&&we){let Ce=H.clientX>G.current?"right":"left";_.current=Ce,G.current=H.clientX}}))})})})})})})})},"MenuContentImpl"));var bp=re.forwardRef(Me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Re.jsx)(pe.div,{...r,ref:a})},"MenuLabel")),jl="MenuItem",ip="menu.itemSelect",Cp=re.forwardRef(Me(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=re.useRef(null),s=Jl(jl,t.__scopeMenu),u=gp(jl,t.__scopeMenu),i=fe(a,l),c=re.useRef(!1),d=Me(()=>{let f=l.current;if(!o&&f){let p=new CustomEvent(ip,{bubbles:!0,cancelable:!0});f.addEventListener(ip,h=>r?.(h),{once:!0}),_r(f,p),p.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,Re.jsx)(nC,{...n,ref:i,disabled:o,onClick:Q(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:Q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:Q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||u.searchRef.current!==""&&f.key===" "||Kl.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),nC=re.forwardRef(Me(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=gp(jl,o),u=dp(o),i=re.useRef(null),c=fe(a,i),[d,f]=re.useState(!1),[p,h]=re.useState("");return re.useEffect(()=>{let g=i.current;g&&h((g.textContent??"").trim())},[l.children]),(0,Re.jsx)($l.ItemSlot,{scope:o,disabled:r,textValue:n??p,children:(0,Re.jsx)(rp,{asChild:!0,...u,focusable:!r,children:(0,Re.jsx)(pe.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:Q(t.onPointerMove,is(g=>{r?s.onItemLeave(g):(s.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:Q(t.onPointerLeave,is(g=>s.onItemLeave(g))),onFocus:Q(t.onFocus,()=>f(!0)),onBlur:Q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var sC="MenuRadioGroup",[Oy,By]=ho(sC,{value:void 0,onValueChange:Me(()=>{},"onValueChange")});var lC="MenuItemIndicator",[Ny,_y]=ho(lC,{checked:!1});var Lp=re.forwardRef(Me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Re.jsx)(pe.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var iC="MenuSub",[Hy,Uy]=ho(iC);function vp(e){return e?"open":"closed"}Me(vp,"getOpenState");function Ip(e){return e==="indeterminate"}Me(Ip,"isIndeterminate");function uC(e){return Ip(e)?"indeterminate":e?"checked":"unchecked"}Me(uC,"getCheckedState");function wp(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Me(wp,"focusFirst");function Sp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Me(Sp,"wrapArray");function yp(e,t,a){let r=t.length>1&&Array.from(t).every(i=>i===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Sp(e,Math.max(n,0));r.length===1&&(l=l.filter(i=>i!==a));let u=l.find(i=>i.toLowerCase().startsWith(r.toLowerCase()));return u!==a?u:void 0}Me(yp,"getNextMatch");function kp(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],u=t[l],i=s.x,c=s.y,d=u.x,f=u.y;c>o!=f>o&&a<(d-i)*(o-c)/(f-c)+i&&(r=!r)}return r}Me(kp,"isPointInPolygon");function Rp(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return kp(a,t)}Me(Rp,"isPointerInGraceArea");function is(e){return t=>t.pointerType==="mouse"?e(t):void 0}Me(is,"whenMouse");var ia=require("react/jsx-runtime"),cC=Object.defineProperty,xo=(e,t)=>cC(e,"name",{value:t,configurable:!0}),Ql="DropdownMenu",[fC,ok]=at(Ql,[Yl]),bo=Yl(),[pC,Pp]=fC(Ql),Dp=xo(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,u=bo(t),i=Yt.useRef(null),[c,d]=aa({prop:r,defaultProp:n??!1,onChange:l,caller:Ql});return(0,ia.jsx)(pC,{scope:t,triggerId:Pt(),triggerRef:i,contentId:Pt(),open:c,onOpenChange:d,onOpenToggle:Yt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,ia.jsx)(cp,{...u,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),mC="DropdownMenuTrigger",Mp=Yt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Pp(mC,o),s=bo(o),u=fe(a,l.triggerRef);return(0,ia.jsx)(fp,{asChild:!0,...s,children:(0,ia.jsx)(pe.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:u,onPointerDown:Q(t.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(l.onOpenToggle(),l.open||i.preventDefault())}),onKeyDown:Q(t.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&l.onOpenToggle(),i.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})})},"DropdownMenuTrigger")),Ap=xo(e=>{let{__scopeDropdownMenu:t,...a}=e,o=bo(t);return(0,ia.jsx)(mp,{...o,...a})},"DropdownMenuPortal"),gC="DropdownMenuContent",ei=Yt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Pp(gC,o),l=bo(o),s=Yt.useRef(!1);return(0,ia.jsx)(hp,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:Q(t.onCloseAutoFocus,u=>{s.current||n.triggerRef.current?.focus(),s.current=!1,u.preventDefault()}),onInteractOutside:Q(t.onInteractOutside,u=>{let i=u.detail.originalEvent,c=i.button===0&&i.ctrlKey===!0,d=i.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var ti=Yt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=bo(o);return(0,ia.jsx)(bp,{...n,...r,ref:a})},"DropdownMenuLabel")),ai=Yt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=bo(o);return(0,ia.jsx)(Cp,{...n,...r,ref:a})},"DropdownMenuItem"));var oi=Yt.forwardRef(xo(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=bo(o);return(0,ia.jsx)(Lp,{...n,...r,ref:a})},"DropdownMenuSeparator"));var er=require("react/jsx-runtime"),Co=Dp,Lo=Mp;var Oa=an.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,er.jsx)(Ap,{children:(0,er.jsx)(ei,{ref:o,sideOffset:t,className:de("kanban-portal kanban-dropdown-content",e),...a})}));Oa.displayName=ei.displayName;var mt=an.forwardRef(({className:e,inset:t,...a},o)=>(0,er.jsx)(ai,{ref:o,className:de("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));mt.displayName=ai.displayName;var xC=an.forwardRef(({className:e,inset:t,...a},o)=>(0,er.jsx)(ti,{ref:o,className:de("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));xC.displayName=ti.displayName;var ri=an.forwardRef(({className:e,...t},a)=>(0,er.jsx)(oi,{ref:a,className:de("kanban-dropdown-separator",e),...t}));ri.displayName=oi.displayName;var Tp=J(require("react"),1);var Ep=require("react/jsx-runtime"),Ut=Tp.forwardRef(({className:e,type:t,...a},o)=>(0,Ep.jsx)("input",{type:t,className:de("kanban-input",e),ref:o,...a}));Ut.displayName="Input";var Bp=J(require("react"),1);var Fp=J(require("react"),1);var Op=require("react/jsx-runtime"),bC=Object.defineProperty,CC=(e,t)=>bC(e,"name",{value:t,configurable:!0}),ni=Fp.forwardRef(CC(function(t,a){return(0,Op.jsx)(pe.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var Np=require("react/jsx-runtime"),gt=Bp.forwardRef(({className:e,...t},a)=>(0,Np.jsx)(ni,{ref:a,className:de("kanban-label",e),...t}));gt.displayName=ni.displayName;var Na=J(require("react"),1);var O=J(require("react"),1),li=J(require("react-dom"),1);var vC=Object.defineProperty,IC=(e,t)=>vC(e,"name",{value:t,configurable:!0});function ds(e,[t,a]){return Math.min(a,Math.max(t,e))}IC(ds,"clamp");var wC=J(require("react"),1);var SC=require("react/jsx-runtime");var _p=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var te=require("react/jsx-runtime"),yC=Object.defineProperty,he=(e,t)=>yC(e,"name",{value:t,configurable:!0}),Hp={ItemAligned:"item-aligned",Popper:"popper"},kC={LTR:"ltr",RTL:"rtl"},RC=[" ","Enter","ArrowUp","ArrowDown"],PC=[" ","Enter"],tr="Select",[fs,ps,DC]=so(tr),[Io,Ok]=at(tr,[DC,Qo]),ii=Qo(),[MC,Ba]=Io(tr),[AC,TC]=Io(tr);function Vp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:u,dir:i,name:c,autoComplete:d,disabled:f,required:p,form:h,internal_do_not_use_render:g}=e,m=ii(t),[C,x]=O.useState(null),[b,L]=O.useState(null),[w,v]=O.useState(!1),S=lo(i),[y,A]=aa({prop:o,defaultProp:r??!1,onChange:n,caller:tr}),[I,P]=aa({prop:l,defaultProp:s,onChange:u,caller:tr}),T=O.useRef(null),U=O.useRef(!1),[M,q]=O.useState(null),V=he(H=>{q({value:H,hasConsumerStoppedPropagation:U.current}),P(H)},"handleUserSelect"),R=O.useRef(I);O.useEffect(()=>{let H=h?C?.ownerDocument.getElementById(h):C?.form;if(H instanceof HTMLFormElement){let ye=he(()=>P(R.current),"reset");return H.addEventListener("reset",ye),()=>H.removeEventListener("reset",ye)}},[h,C,P]);let B=C?!!h||!!C.closest("form"):!0,[_,G]=O.useState(new Set),ee=Pt(),$=Array.from(_).map(H=>H.props.value).join(";"),me=O.useCallback(H=>{G(ye=>new Set(ye).add(H))},[]),Te=O.useCallback(H=>{G(ye=>{let we=new Set(ye);return we.delete(H),we})},[]),Se={required:p,trigger:C,onTriggerChange:x,valueNode:b,onValueNodeChange:L,valueNodeHasChildren:w,onValueNodeHasChildrenChange:v,contentId:ee,value:I,onValueChange:P,hasConsumerStoppedPropagationRef:U,userSelection:M,onUserSelect:V,open:y,onOpenChange:A,dir:S,triggerPointerDownPosRef:T,disabled:f,name:c,autoComplete:d,form:h,nativeOptions:_,nativeSelectKey:$,isFormControl:B};return(0,te.jsx)(as,{...m,children:(0,te.jsx)(MC,{scope:t,...Se,children:(0,te.jsx)(fs.Provider,{scope:t,children:(0,te.jsx)(AC,{scope:t,onNativeOptionAdd:me,onNativeOptionRemove:Te,children:tm(g)?g(Se):a})})})})}he(Vp,"SelectProvider");var Gp=he(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,te.jsx)(Vp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,te.jsxs)(te.Fragment,{children:[a,r?(0,te.jsx)(jC,{__scopeSelect:t}):null]})})},"Select"),EC="SelectTrigger",ui=O.forwardRef(he(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=ii(o),s=Ba(EC,o),u=s.disabled||r,i=fe(a,s.onTriggerChange),c=ps(o),d=O.useRef("touch"),[f,p,h]=xi(m=>{let C=c().filter(L=>!L.disabled),x=C.find(L=>L.value===s.value),b=bi(C,m,x);b!==void 0&&s.onUserSelect(b.value)}),g=he(m=>{u||(s.onOpenChange(!0),h()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,te.jsx)(os,{asChild:!0,...l,children:(0,te.jsx)(pe.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":on(s.value)?"":void 0,...n,ref:i,onClick:Q(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&g(m)}),onPointerDown:Q(n.onPointerDown,m=>{d.current=m.pointerType;let C=m.target;C.hasPointerCapture(m.pointerId)&&C.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(g(m),m.preventDefault())}),onKeyDown:Q(n.onKeyDown,m=>{let C=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=m.isPropagationStopped(),p(m.key)),!(C&&m.key===" ")&&RC.includes(m.key)&&(g(),m.preventDefault())})})})},"SelectTrigger")),FC="SelectValue",Xp=O.forwardRef(he(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...u}=t,i=Ba(FC,o),{onValueNodeHasChildrenChange:c}=i,d=l!==void 0,f=fe(a,i.onValueNodeChange);xe(()=>{c(d)},[c,d]);let p=on(i.value);return(0,te.jsx)(pe.span,{...u,asChild:p?!1:u.asChild,ref:f,style:{pointerEvents:"none"},children:(0,te.jsx)(O.Fragment,{children:p?s:l},p?"placeholder":"value")})},"SelectValue")),Kp=O.forwardRef(he(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,te.jsx)(pe.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),OC="SelectPortal",[BC,NC]=Io(OC,{forceMount:void 0}),$p=he(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,te.jsx)(BC,{scope:e.__scopeSelect,forceMount:a,children:(0,te.jsx)(qo,{asChild:!0,...o})})},"SelectPortal"),vo="SelectContent",di=O.forwardRef(he(function(t,a){let o=NC(vo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=Ba(vo,t.__scopeSelect),[s,u]=O.useState();return xe(()=>{u(new DocumentFragment)},[]),(0,te.jsx)(ma,{present:r||l.open,children:({present:i})=>i?(0,te.jsx)(UC,{...n,ref:a}):(0,te.jsx)(_C,{...n,fragment:s})})},"SelectContent")),_C=O.forwardRef(he(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?li.createPortal((0,te.jsx)(jp,{scope:o,children:(0,te.jsx)(fs.Slot,{scope:o,children:(0,te.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Zt=10,[jp,wo]=Io(vo),HC=lt("SelectContent.RemoveScroll"),UC=O.forwardRef(he(function(t,a){let{__scopeSelect:o}=t,{position:r=Hp.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:u,sideOffset:i,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:h,sticky:g,hideWhenDetached:m,avoidCollisions:C,...x}=t,b=Ba(vo,o),[L,w]=O.useState(null),[v,S]=O.useState(null),y=fe(a,w),[A,I]=O.useState(null),[P,T]=O.useState(null),U=ps(o),[M,q]=O.useState(!1),V=O.useRef(!1),R=O.useRef(!1),B=O.useRef(!1);O.useEffect(()=>{if(L)return $o(L)},[L]),Da();let _=O.useCallback(N=>{let[j,...Y]=U().map(Z=>Z.ref.current),[ae]=Y.slice(-1),oe=document.activeElement;for(let Z of N)if(Z===oe||(Z?.scrollIntoView({block:"nearest"}),Z===j&&v&&(v.scrollTop=0),Z===ae&&v&&(v.scrollTop=v.scrollHeight),Z?.focus(),document.activeElement!==oe))return},[U,v]),G=O.useCallback(()=>_([A,L]),[_,A,L]);O.useEffect(()=>{M&&G()},[M,G]);let{onOpenChange:ee,triggerPointerDownPosRef:$}=b;O.useEffect(()=>{if(L){let N={x:0,y:0},j=he(ae=>{N={x:Math.abs(Math.round(ae.pageX)-($.current?.x??0)),y:Math.abs(Math.round(ae.pageY)-($.current?.y??0))}},"handlePointerMove"),Y=he(ae=>{N.x<=10&&N.y<=10?ae.preventDefault():ae.composedPath().includes(L)||ee(!1),document.removeEventListener("pointermove",j),$.current=null},"handlePointerUp");return $.current!==null&&(document.addEventListener("pointermove",j),document.addEventListener("pointerup",Y,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",j),document.removeEventListener("pointerup",Y,{capture:!0})}}},[L,ee,$]),O.useEffect(()=>{let N=he(()=>ee(!1),"close");return window.addEventListener("blur",N),window.addEventListener("resize",N),()=>{window.removeEventListener("blur",N),window.removeEventListener("resize",N)}},[ee]);let[me,Te]=xi(N=>{let j=U().filter(oe=>!oe.disabled),Y=j.find(oe=>oe.ref.current===document.activeElement),ae=bi(j,N,Y);ae&&setTimeout(()=>ae.ref.current?.focus())}),Se=O.useCallback((N,j,Y)=>{let ae=!R.current;ae&&(R.current=!0);let oe=!V.current&&!Y;b.value!==void 0&&b.value===j||oe?(I(N),oe&&(V.current=!0)):ae&&I(N)},[b.value]),H=O.useCallback(()=>L?.focus(),[L]),ye=O.useCallback((N,j,Y)=>{if(!N)return;let ae=!B.current;ae&&(B.current=!0);let oe=!V.current&&!Y;(b.value!==void 0&&b.value===j||oe||ae)&&T(N)},[b.value]),we=r===Hp.Popper?Up:qC,Ce=we===Up?{side:u,sideOffset:i,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:p,collisionPadding:h,sticky:g,hideWhenDetached:m,avoidCollisions:C}:{};return(0,te.jsx)(jp,{scope:o,content:L,viewport:v,onViewportChange:S,itemRefCallback:Se,selectedItem:A,onItemLeave:H,itemTextRefCallback:ye,focusSelectedItem:G,selectedItemText:P,position:r,isPositioned:M,searchRef:me,children:(0,te.jsx)(eo,{as:HC,allowPinchZoom:!0,children:(0,te.jsx)(Uo,{asChild:!0,trapped:b.open,onMountAutoFocus:N=>{N.preventDefault()},onUnmountAutoFocus:Q(n,N=>{b.trigger?.focus({preventScroll:!0}),N.preventDefault()}),children:(0,te.jsx)(Ho,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:N=>N.preventDefault(),onDismiss:()=>b.onOpenChange(!1),children:(0,te.jsx)(we,{role:"listbox",id:b.contentId,"data-state":b.open?"open":"closed",dir:b.dir,onContextMenu:N=>N.preventDefault(),...x,...Ce,onPlaced:()=>q(!0),ref:y,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:Q(x.onKeyDown,N=>{let j=N.ctrlKey||N.altKey||N.metaKey;if(N.key==="Tab"&&N.preventDefault(),!j&&N.key.length===1&&Te(N.key),["ArrowUp","ArrowDown","Home","End"].includes(N.key)){let ae=U().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);if(["ArrowUp","End"].includes(N.key)&&(ae=ae.slice().reverse()),["ArrowUp","ArrowDown"].includes(N.key)){let oe=N.target,Z=ae.indexOf(oe);ae=ae.slice(Z+1)}setTimeout(()=>_(ae)),N.preventDefault()}})})})})})})},"SelectContentImpl")),qC=O.forwardRef(he(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=Ba(vo,o),s=wo(vo,o),[u,i]=O.useState(null),[c,d]=O.useState(null),f=fe(a,d),p=ps(o),h=O.useRef(!1),g=O.useRef(!0),{viewport:m,selectedItem:C,selectedItemText:x,focusSelectedItem:b}=s,L=O.useCallback(()=>{if(l.trigger&&l.valueNode&&u&&c&&m&&C&&x){let y=l.trigger.getBoundingClientRect(),A=c.getBoundingClientRect(),I=l.valueNode.getBoundingClientRect(),P=x.getBoundingClientRect();if(l.dir!==kC.RTL){let Y=P.left-A.left,ae=I.left-Y,oe=y.left-ae,Z=y.width+oe,dt=Math.max(Z,A.width),rt=window.innerWidth-Zt,qt=ds(ae,[Zt,Math.max(Zt,rt-dt)]);u.style.minWidth=Z+"px",u.style.left=qt+"px"}else{let Y=A.right-P.right,ae=window.innerWidth-I.right-Y,oe=window.innerWidth-y.right-ae,Z=y.width+oe,dt=Math.max(Z,A.width),rt=window.innerWidth-Zt,qt=ds(ae,[Zt,Math.max(Zt,rt-dt)]);u.style.minWidth=Z+"px",u.style.right=qt+"px"}let T=p(),U=window.innerHeight-Zt*2,M=m.scrollHeight,q=window.getComputedStyle(c),V=parseInt(q.borderTopWidth,10),R=parseInt(q.paddingTop,10),B=parseInt(q.borderBottomWidth,10),_=parseInt(q.paddingBottom,10),G=V+R+M+_+B,ee=Math.min(C.offsetHeight*5,G),$=window.getComputedStyle(m),me=parseInt($.paddingTop,10),Te=parseInt($.paddingBottom,10),Se=y.top+y.height/2-Zt,H=U-Se,ye=C.offsetHeight/2,we=C.offsetTop+ye,Ce=V+R+we,N=G-Ce;if(Ce<=Se){let Y=T.length>0&&C===T[T.length-1].ref.current;u.style.bottom="0px";let ae=c.clientHeight-m.offsetTop-m.offsetHeight,oe=Math.max(H,ye+(Y?Te:0)+ae+B),Z=Ce+oe;u.style.height=Z+"px"}else{let Y=T.length>0&&C===T[0].ref.current;u.style.top="0px";let oe=Math.max(Se,V+m.offsetTop+(Y?me:0)+ye)+N;u.style.height=oe+"px",m.scrollTop=Ce-Se+m.offsetTop}u.style.margin=`${Zt}px 0`,u.style.minHeight=ee+"px",u.style.maxHeight=U+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[p,l.trigger,l.valueNode,u,c,m,C,x,l.dir,r]);xe(()=>L(),[L]);let[w,v]=O.useState();xe(()=>{c&&v(window.getComputedStyle(c).zIndex)},[c]);let S=O.useCallback(y=>{y&&g.current===!0&&(L(),b?.(),g.current=!1)},[L,b]);return(0,te.jsx)(zC,{scope:o,contentWrapper:u,shouldExpandOnScrollRef:h,onScrollButtonChange:S,children:(0,te.jsx)("div",{ref:i,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:(0,te.jsx)(pe.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Up=O.forwardRef(he(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Zt,...l}=t,s=ii(o);return(0,te.jsx)(rs,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[zC,ci]=Io(vo,{}),qp="SelectViewport",Yp=O.forwardRef(he(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=wo(qp,o),s=ci(qp,o),u=fe(a,l.onViewportChange),i=O.useRef(0);return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,te.jsx)(fs.Slot,{scope:o,children:(0,te.jsx)(pe.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:Q(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:p}=s;if(p?.current&&f){let h=Math.abs(i.current-d.scrollTop);if(h>0){let g=window.innerHeight-Zt*2,m=parseFloat(f.style.minHeight),C=parseFloat(f.style.height),x=Math.max(m,C);if(x<g){let b=x+h,L=Math.min(g,b),w=b-L;f.style.height=L+"px",f.style.bottom==="0px"&&(d.scrollTop=w>0?w:0,f.style.justifyContent="flex-end")}}}i.current=d.scrollTop})})})]})},"SelectViewport")),WC="SelectGroup",[Bk,VC]=Io(WC);var GC="SelectLabel",fi=O.forwardRef(he(function(t,a){let{__scopeSelect:o,...r}=t,n=VC(GC,o);return(0,te.jsx)(pe.div,{id:n.id,...r,ref:a})},"SelectLabel")),si="SelectItem",[XC,Zp]=Io(si),pi=O.forwardRef(he(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,u=Ba(si,o),i=wo(si,o),c=u.value===r,[d,f]=O.useState(l??""),[p,h]=O.useState(!1),g=je(L=>i.itemRefCallback?.(L,r,n)),m=fe(a,g),C=Pt(),x=O.useRef("touch");function b(L){u.hasConsumerStoppedPropagationRef.current=L.isPropagationStopped(),u.onUserSelect(r),u.onOpenChange(!1)}return he(b,"handleSelect"),(0,te.jsx)(XC,{scope:o,value:r,disabled:n,textId:C,isSelected:c,onItemTextChange:O.useCallback(L=>{f(w=>w||(L?.textContent??"").trim())},[]),children:(0,te.jsx)(fs.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,te.jsx)(pe.div,{role:"option","aria-labelledby":C,"data-highlighted":p?"":void 0,"aria-selected":c&&p,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:m,onFocus:Q(s.onFocus,()=>h(!0)),onBlur:Q(s.onBlur,()=>h(!1)),onClick:Q(s.onClick,L=>{n||x.current!=="mouse"&&b(L)}),onPointerUp:Q(s.onPointerUp,L=>{n||x.current==="mouse"&&b(L)}),onPointerDown:Q(s.onPointerDown,L=>{x.current=L.pointerType}),onPointerMove:Q(s.onPointerMove,L=>{x.current=L.pointerType,n?i.onItemLeave?.():x.current==="mouse"&&L.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Q(s.onPointerLeave,L=>{L.currentTarget===document.activeElement&&i.onItemLeave?.()}),onKeyDown:Q(s.onKeyDown,L=>{n||L.target!==L.currentTarget||i.searchRef?.current!==""&&L.key===" "||(PC.includes(L.key)&&b(L),L.key===" "&&L.preventDefault())})})})})},"SelectItem")),cs="SelectItemText",Jp=O.forwardRef(he(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=Ba(cs,o),u=wo(cs,o),i=Zp(cs,o),c=TC(cs,o),[d,f]=O.useState(null),p=je(b=>u.itemTextRefCallback?.(b,i.value,i.disabled)),h=fe(a,f,i.onItemTextChange,p),g=d?.textContent,m=O.useMemo(()=>(0,te.jsx)("option",{value:i.value,disabled:i.disabled,children:g},i.value),[i.disabled,i.value,g]),{onNativeOptionAdd:C,onNativeOptionRemove:x}=c;return xe(()=>(C(m),()=>x(m)),[C,x,m]),(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(pe.span,{id:i.textId,...l,ref:h}),i.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!on(s.value)?li.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),KC="SelectItemIndicator",Qp=O.forwardRef(he(function(t,a){let{__scopeSelect:o,...r}=t;return Zp(KC,o).isSelected?(0,te.jsx)(pe.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),zp="SelectScrollUpButton",mi=O.forwardRef(he(function(t,a){let o=wo(zp,t.__scopeSelect),r=ci(zp,t.__scopeSelect),[n,l]=O.useState(!1),s=fe(a,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){let i=function(){let d=c.scrollTop>0;l(d)};var u=i;he(i,"handleScroll");let c=o.viewport;return i(),c.addEventListener("scroll",i),()=>c.removeEventListener("scroll",i)}},[o.viewport,o.isPositioned]),n?(0,te.jsx)(em,{...t,ref:s,onAutoScroll:()=>{let{viewport:u,selectedItem:i}=o;u&&i&&(u.scrollTop=u.scrollTop-i.offsetHeight)}}):null},"SelectScrollUpButton")),Wp="SelectScrollDownButton",gi=O.forwardRef(he(function(t,a){let o=wo(Wp,t.__scopeSelect),r=ci(Wp,t.__scopeSelect),[n,l]=O.useState(!1),s=fe(a,r.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){let i=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var u=i;he(i,"handleScroll");let c=o.viewport;return i(),c.addEventListener("scroll",i),()=>c.removeEventListener("scroll",i)}},[o.viewport,o.isPositioned]),n?(0,te.jsx)(em,{...t,ref:s,onAutoScroll:()=>{let{viewport:u,selectedItem:i}=o;u&&i&&(u.scrollTop=u.scrollTop+i.offsetHeight)}}):null},"SelectScrollDownButton")),em=O.forwardRef(he(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=wo("SelectScrollButton",o),s=O.useRef(null),u=ps(o),i=O.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return O.useEffect(()=>()=>i(),[i]),xe(()=>{u().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[u]),(0,te.jsx)(pe.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:Q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:Q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:Q(n.onPointerLeave,()=>{i()})})},"SelectScrollButtonImpl")),hi=O.forwardRef(he(function(t,a){let{__scopeSelect:o,...r}=t;return(0,te.jsx)(pe.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var $C="SelectBubbleInput",jC=O.forwardRef(he(function({__scopeSelect:t,...a},o){let r=Ba($C,t),{value:n,onValueChange:l,required:s,disabled:u,name:i,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:p,nativeSelectKey:h}=r,g=O.useRef(null),m=fe(o,g),C=n??"",x=O.useRef(C),b=O.useRef(f),L=O.useRef(!1),w=Array.from(p).some(v=>(v.props.value??"")==="");return O.useEffect(()=>{let v=g.current;if(!v)return;let S=window.HTMLSelectElement.prototype,A=Object.getOwnPropertyDescriptor(S,"value").set,I=f!==null&&f!==b.current;b.current=f;let P=x.current!==C;x.current=C;let T=I&&P;if(I&&!P&&f.value!==C&&!f.hasConsumerStoppedPropagation&&A){L.current=!0;try{A.call(v,f.value),v.dispatchEvent(new Event("change",{bubbles:!0}))}finally{L.current=!1,A.call(v,C)}return}let U=T&&!f.hasConsumerStoppedPropagation;if(P&&A){let M=new Event("change",{bubbles:U});A.call(v,C),v.dispatchEvent(M)}},[C,f]),(0,te.jsxs)(pe.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:i,autoComplete:c,disabled:u,form:d,onChange:v=>{L.current||l(v.target.value)},...a,style:{..._p,...a.style},ref:m,defaultValue:C,children:[on(n)&&!w?(0,te.jsx)("option",{value:""}):null,Array.from(p)]},h)},"SelectBubbleInput"));function tm(e){return typeof e=="function"}he(tm,"isFunction");function on(e){return e===""||e===void 0}he(on,"shouldShowPlaceholder");function xi(e){let t=je(e),a=O.useRef(""),o=O.useRef(0),r=O.useCallback(l=>{let s=a.current+l;t(s);function u(i){a.current=i,window.clearTimeout(o.current),i!==""&&(o.current=window.setTimeout(()=>u(""),1e3))}he(u,"updateSearch"),u(s)},[t]),n=O.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return O.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}he(xi,"useTypeaheadSearch");function bi(e,t,a){let r=t.length>1&&Array.from(t).every(i=>i===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=am(e,Math.max(n,0));r.length===1&&(l=l.filter(i=>i!==a));let u=l.find(i=>i.textValue.toLowerCase().startsWith(r.toLowerCase()));return u!==a?u:void 0}he(bi,"findNextItem");function am(e,t){return e.map((a,o)=>e[(t+o)%e.length])}he(am,"wrapArray");var qe=require("react/jsx-runtime"),rn=Gp;var nn=Xp,ar=Na.forwardRef(({className:e,children:t,...a},o)=>(0,qe.jsxs)(ui,{ref:o,className:de("kanban-select-trigger",e),...a,children:[t,(0,qe.jsx)(Kp,{asChild:!0,children:(0,qe.jsx)(Oo,{className:"kanban-select-icon"})})]}));ar.displayName=ui.displayName;var om=Na.forwardRef(({className:e,...t},a)=>(0,qe.jsx)(mi,{ref:a,className:de("kanban-select-scroll-button",e),...t,children:(0,qe.jsx)(Rr,{className:"kanban-select-scroll-icon"})}));om.displayName=mi.displayName;var rm=Na.forwardRef(({className:e,...t},a)=>(0,qe.jsx)(gi,{ref:a,className:de("kanban-select-scroll-button",e),...t,children:(0,qe.jsx)(Oo,{className:"kanban-select-scroll-icon"})}));rm.displayName=gi.displayName;var or=Na.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,qe.jsx)($p,{children:(0,qe.jsxs)(di,{ref:r,className:de("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,qe.jsx)(om,{}),(0,qe.jsx)(Yp,{className:de("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,qe.jsx)(rm,{})]})}));or.displayName=di.displayName;var ZC=Na.forwardRef(({className:e,...t},a)=>(0,qe.jsx)(fi,{ref:a,className:de("kanban-select-label",e),...t}));ZC.displayName=fi.displayName;var xa=Na.forwardRef(({className:e,children:t,...a},o)=>(0,qe.jsxs)(pi,{ref:o,className:de("kanban-select-item",e),...a,children:[(0,qe.jsx)("span",{className:"kanban-select-item-indicator",children:(0,qe.jsx)(Qp,{children:(0,qe.jsx)(bt,{className:"kanban-select-check"})})}),(0,qe.jsx)(Jp,{children:t})]}));xa.displayName=pi.displayName;var JC=Na.forwardRef(({className:e,...t},a)=>(0,qe.jsx)(hi,{ref:a,className:de("kanban-select-separator",e),...t}));JC.displayName=hi.displayName;var nm=J(require("react"),1);var sm=require("react/jsx-runtime"),ms=nm.forwardRef(({className:e,...t},a)=>(0,sm.jsx)("textarea",{className:de("kanban-textarea",e),ref:a,...t}));ms.displayName="Textarea";var Jt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},gs=["high","medium","low"],lm="var(--dsw-alias-label-tertiary)";function im(e,t){return t?e.find(a=>a.name===t)?.color??lm:lm}var hs=require("react");function So(e=new Date,t=0){let a=new Date(e);return a.setDate(a.getDate()+t),`${String(a.getFullYear()).padStart(4,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function Ci(e,t){let a=o=>{let[r,n,l]=o.split("-").map(Number),s=new Date(0);return s.setUTCFullYear(r,n-1,l),s.getTime()/864e5};return a(t)-a(e)}function Li(e,t,a,o){return t?!e.dueDate||e.columnId===a?!1:t==="today"?e.dueDate===o:e.dueDate<o:!0}function um(e,t,a){let[o,r,n]=e.split("-");return a(o===t.slice(0,4)?"shortDate":"yearDate").replace("{year}",o).replace("{month}",String(Number(r))).replace("{day}",String(Number(n)))}function dm(){let[e,t]=(0,hs.useState)(()=>So());return(0,hs.useEffect)(()=>{let a,o=()=>{clearTimeout(a);let r=new Date;t(So(r));let n=new Date(r);n.setHours(24,0,0,0),a=setTimeout(o,n.getTime()-r.getTime()+100)};return o(),window.addEventListener("focus",o),document.addEventListener("visibilitychange",o),()=>{clearTimeout(a),window.removeEventListener("focus",o),document.removeEventListener("visibilitychange",o)}},[]),e}var Je=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),vi=e=>e==="high"||e==="medium"||e==="low"?Jt[e].label:"";function cm(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&vi(a.priority)||o;return Je(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Je(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Je(t("actLabelSet"),{to:n}):r!=null&&n==null?Je(t("actLabelCleared"),{from:r}):Je(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?vi(r)||r:o,s=n?vi(n)||n:o;return r==null&&n!=null?Je(t("actPrioritySet"),{to:s}):r!=null&&n==null?Je(t("actPriorityCleared"),{from:l}):Je(t("actPriority"),{from:l,to:s})}case"card_due_date_changed":return Je(t("actDueDate"),{from:r??o,to:n??o});case"board_completed_column_changed":return Je(t("actCompletedColumn"),{from:a.fromColumn??r??o,to:a.toColumn??n??o});case"card_title_changed":return Je(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_image_added":return t("actImageAdded");case"card_image_removed":return t("actImageRemoved");case"card_deleted":return t("actDeleted");case"column_added":return Je(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Je(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Je(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Je(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Je(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Je(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Je(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var xs=e=>String(e).padStart(2,"0");function rr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${xs(t.getMonth()+1)}-${xs(t.getDate())} ${xs(t.getHours())}:${xs(t.getMinutes())}`}var Oe=require("react");var gm=require("@deepseek-ai/dsh-client-ui-primitives");function sn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(fm)}async function fm(e){let t;try{t=await e.json()}catch{throw new Error(`Kanban request failed (${e.status})`)}if(!e.ok||t.error)throw new Error(t.error||`Kanban request failed (${e.status})`);return t}function bs(e,t,a){return"/api/kanban/image?"+new URLSearchParams({workspaceId:e,cardId:t,attachmentId:a})}function pm(e,t,a,o){return fetch("/api/kanban/image/upload?"+new URLSearchParams({workspaceId:e,cardId:t}),{method:"POST",headers:{"content-type":a.type},body:a,signal:o}).then(fm)}async function mm(e,t,a,o){let r=[];for(let[n,l]of a.entries()){let s=await fetch(bs(e,t,l.attachmentId),{signal:o});if(!s.ok)throw new Error(`Image ${n+1}: HTTP ${s.status}`);let u=await s.blob();if(!u.size||!["image/png","image/jpeg","image/webp"].includes(u.type))throw new Error(`Image ${n+1}: invalid image response`);let i=u.type==="image/jpeg"?"jpg":u.type.slice(6);r.push(new File([u],`${t}-${n+1}.${i}`,{type:u.type}))}return r}var ne=require("react/jsx-runtime");function QC({file:e}){let[t,a]=(0,Oe.useState)("");return(0,Oe.useEffect)(()=>{let o=URL.createObjectURL(e);return a(o),()=>URL.revokeObjectURL(o)},[e]),t?(0,ne.jsx)("img",{src:t,alt:""}):null}function eL({src:e,label:t,onOpen:a}){let o=Fe(),[r,n]=(0,Oe.useState)("loading"),[l,s]=(0,Oe.useState)(0);return(0,ne.jsx)("div",{className:"kanban-image-preview",children:r==="error"?(0,ne.jsxs)("div",{className:"kanban-image-message",role:"status",children:[(0,ne.jsx)("span",{children:o("imageLoadFailed")}),(0,ne.jsxs)(ce,{variant:"ghost",size:"sm",onClick:()=>{n("loading"),s(u=>u+1)},children:[(0,ne.jsx)(Pa,{}),o("retry")]})]}):(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("button",{type:"button",className:"kanban-image-open","aria-label":t,disabled:r!=="ready",onClick:a,children:(0,ne.jsx)("img",{src:`${e}&retry=${l}`,alt:t,onLoad:()=>n("ready"),onError:()=>n("error")})}),r==="loading"&&(0,ne.jsxs)("span",{className:"kanban-image-message",role:"status",children:[(0,ne.jsx)(da,{className:"kanban-animate-spin"}),o("loadingImage")]})]})})}var hm=(0,Oe.forwardRef)(function({workspaceId:t,cardId:a,images:o,limits:r,disabled:n,onUpload:l,onRemove:s,onBusyChange:u,onPendingChange:i},c){let d=Fe(),f=(0,Oe.useId)(),p=(0,Oe.useRef)(null),[h,g]=(0,Oe.useState)([]),m=(0,Oe.useRef)([]),C=(0,Oe.useRef)(0),x=(0,Oe.useRef)(!0),b=(0,Oe.useRef)(new AbortController),L=(0,Oe.useRef)(!1),[w,v]=(0,Oe.useState)(null),[S,y]=(0,Oe.useState)(""),[A,I]=(0,Oe.useState)(!1),[P,T]=(0,Oe.useState)(null);(0,Oe.useEffect)(()=>(x.current=!0,b.current=new AbortController,()=>{x.current=!1,b.current.abort()}),[]);let U=R=>{x.current&&(m.current=R,g(R),i(R.length>0))},M=async(R,B=m.current)=>{if(L.current)return!1;L.current=!0,u(!0),y("");let _=!0;try{for(let G of B){if(!x.current)return!1;U(m.current.map(ee=>ee.key===G.key?{...ee,state:"uploading",error:void 0}:ee));try{await l(R,G.file,b.current.signal),U(m.current.filter(ee=>ee.key!==G.key))}catch(ee){if(_=!1,!x.current)return!1;U(m.current.map($=>$.key===G.key?{...$,state:"error",error:String(ee instanceof Error?ee.message:ee)}:$))}}return _}finally{L.current=!1,x.current&&u(!1)}},q=R=>{if(!r||n||L.current||!R.length)return;if(y(""),o.length+m.current.length+R.length>r.maxImagesPerCard){y(d("imageTooMany").replace("{count}",String(r.maxImagesPerCard)));return}for(let _ of R){if(!r.mediaTypes.includes(_.type)){y(d("imageInvalidType"));return}if(!_.size||_.size>r.maxImageBytes){y(d("imageTooLarge").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))));return}}let B=R.map(_=>({key:++C.current,file:_,state:"pending"}));U([...m.current,...B]),a&&M(a,B)};(0,Oe.useImperativeHandle)(c,()=>({uploadPending:M,addFiles:q}));let V=async R=>{if(!(!a||n||L.current)){L.current=!0,u(!0),v(R.attachmentId),y("");try{if(!await s(a,R.attachmentId))throw new Error(d("imageRemoveFailed"))}catch(B){x.current&&y(String(B instanceof Error?B.message:B))}finally{L.current=!1,x.current&&(v(null),u(!1))}}};return(0,ne.jsxs)("section",{className:`kanban-images${A?" is-dragging":""}`,"aria-labelledby":f,onDragOver:R=>{R.dataTransfer.types.includes("Files")&&(R.preventDefault(),R.stopPropagation(),r&&!n&&I(!0))},onDragLeave:R=>{(!(R.relatedTarget instanceof Node)||!R.currentTarget.contains(R.relatedTarget))&&I(!1)},onDrop:R=>{R.dataTransfer.types.includes("Files")&&(R.preventDefault(),R.stopPropagation(),I(!1),q(Array.from(R.dataTransfer.files)))},children:[(0,ne.jsxs)("div",{className:"kanban-field-label",children:[(0,ne.jsxs)("span",{id:f,children:[d("images")," ",(0,ne.jsxs)("span",{className:"kanban-tabular",children:["(",o.length+h.length,")"]})]}),(0,ne.jsxs)(ce,{variant:"ghost",size:"sm",disabled:n||!r,onClick:()=>p.current?.click(),children:[(0,ne.jsx)(Dr,{}),d("addImages")]}),(0,ne.jsx)("input",{ref:p,type:"file",accept:r?.mediaTypes.join(",")??"image/png,image/jpeg,image/webp",multiple:!0,hidden:!0,disabled:n||!r,"aria-label":d("addImages"),onChange:R=>{q(Array.from(R.currentTarget.files??[])),R.currentTarget.value=""}})]}),!r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:d("imagesUnavailable")}),r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:d("imagesHint").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))).replace("{count}",String(r.maxImagesPerCard))}),S&&(0,ne.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:S}),!o.length&&!h.length&&r&&(0,ne.jsx)("div",{className:"kanban-image-empty",children:d("imagesEmpty")}),(o.length>0||h.length>0)&&(0,ne.jsxs)("div",{className:"kanban-image-grid",children:[o.map((R,B)=>(0,ne.jsxs)("div",{className:"kanban-image-tile",children:[(0,ne.jsx)(eL,{src:bs(t,a,R.attachmentId),label:d("imagePreview").replace("{number}",String(B+1)),onOpen:()=>T(R)}),(0,ne.jsxs)(ce,{variant:"ghost",size:"sm",disabled:n||w!==null,"aria-label":d("imageRemove").replace("{number}",String(B+1)),onClick:()=>{V(R)},children:[w===R.attachmentId?(0,ne.jsx)(da,{className:"kanban-animate-spin"}):(0,ne.jsx)(ct,{}),w===R.attachmentId?d("imageRemoving"):d("remove")]})]},R.attachmentId)),h.map(R=>(0,ne.jsxs)("div",{className:"kanban-image-tile",children:[(0,ne.jsx)("div",{className:"kanban-image-preview",children:(0,ne.jsx)(QC,{file:R.file})}),(0,ne.jsxs)("div",{className:"kanban-image-draft-info",children:[(0,ne.jsx)("span",{className:"kanban-image-filename",title:R.file.name,children:R.file.name}),(0,ne.jsx)("span",{role:R.state==="error"?"alert":"status",className:R.state==="error"?"kanban-error":"kanban-muted-small",children:R.state==="uploading"?d("imageUploading"):R.state==="error"?`${d("imageUploadFailed")}: ${R.error}`:d("imagePending")}),(0,ne.jsxs)("div",{className:"kanban-image-draft-actions",children:[R.state==="error"&&a&&(0,ne.jsxs)(ce,{size:"sm",variant:"ghost",disabled:n,onClick:()=>{M(a,[R])},children:[(0,ne.jsx)(Pa,{}),d("retry")]}),(0,ne.jsxs)(ce,{size:"sm",variant:"ghost",disabled:n,"aria-label":`${d("remove")}: ${R.file.name}`,onClick:()=>U(m.current.filter(B=>B.key!==R.key)),children:[(0,ne.jsx)(ct,{}),d("remove")]})]})]})]},R.key))]}),r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:d(a?"imagesSaveHint":"imagesDraftHint")}),P&&(0,ne.jsx)(gm.ImageLightbox,{src:bs(t,a,P.attachmentId),alt:d("images"),labels:{dialog:d("images"),close:d("close")},onClose:()=>T(null)})]})});var ba=require("react/jsx-runtime");function xm({activities:e}){let t=Fe();if(e.length===0)return(0,ba.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ba.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ba.jsxs)("li",{className:"kanban-activity-item",children:[(0,ba.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ba.jsxs)("p",{className:"kanban-activity-description",children:[(0,ba.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",cm(o,t)]}),(0,ba.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:rr(o.ts),children:rr(o.ts)})]},o.id)})})}var E=require("react/jsx-runtime");function Cm({workspaceId:e="default",imageLimits:t=null,images:a=[],onUploadImage:o,onRemoveImage:r,open:n,error:l,card:s,completed:u,completedAt:i,labels:c,comments:d,activities:f,onOpenChange:p,onSave:h,onAddComment:g,onDelete:m,onChatWithAgent:C}){let x=Fe(),b=(0,Ae.useId)(),L=(0,Ae.useRef)(null),w=(0,Ae.useRef)(null),[v,S]=(0,Ae.useState)(!s),[y,A]=(0,Ae.useState)({id:"",title:"",note:"",label:"",priority:"",dueDate:""}),[I,P]=(0,Ae.useState)(""),[T,U]=(0,Ae.useState)(!1),M=(0,Ae.useRef)(!1),[q,V]=(0,Ae.useState)(""),[R,B]=(0,Ae.useState)(null),_=(0,Ae.useRef)(null),G=(0,Ae.useRef)(y),ee=(0,Ae.useRef)(null),[$,me]=(0,Ae.useState)(!1),[Te,Se]=(0,Ae.useState)(!1),[H,ye]=(0,Ae.useState)(0),we=(0,Ae.useRef)(void 0),Ce=(0,Ae.useRef)(!1),N=(0,Ae.useRef)(void 0),j=T||$,Y=(0,Ae.useRef)(!0);(0,Ae.useEffect)(()=>(Y.current=!0,()=>{Y.current=!1}),[]),(0,Ae.useEffect)(()=>{let W=we.current;if(we.current=n?s?.id??"":void 0,!(W===""&&s&&(Ce.current||N.current===s.id))&&n){let ue={id:s?.id??"",title:s?.title??"",note:s?.note??"",label:s?.label??"",priority:s?.priority??"",dueDate:s?.dueDate??""};G.current=ue,A(ue),P(""),V(""),B(null),Se(!1),me(!1),ye(Ca=>Ca+1),N.current=void 0,S(!s)}},[n,s?.id]),(0,Ae.useEffect)(()=>{R&&_.current?.focus()},[R]);let ae=Te||!!I.trim()||Object.keys(y).some(W=>y[W]!==G.current[W]),oe=W=>{if(!(M.current||$)){if(!W&&R){B(null);return}if(!W&&ae){B("discard");return}p(W)}},Z=async W=>{if(M.current||$)return!1;M.current=!0,U(!0),V("");try{let ue=await W();return ue===!1&&V(x("actionRetry")),ue!==!1}catch(ue){return V(x("actionFailed")+String(ue instanceof Error?ue.message:ue)),!1}finally{M.current=!1,U(!1)}},dt=async W=>{if(L.current?.reportValidity()){if(I.trim()||Te){B(W);return}await Z(()=>C(y,W))&&p(!1)}},rt=W=>A(ue=>({...ue,...W})),qt=async()=>{let W=I.trim();!s||!W||W.length>2e3||await Z(()=>g(s.id,W))&&P("")};return(0,E.jsx)(jo,{open:n,onOpenChange:oe,children:(0,E.jsxs)(Dl,{open:n,onClose:()=>oe(!1),title:x(s?"taskDetails":"addCard"),"aria-describedby":void 0,onPaste:W=>{let ue=Array.from(W.clipboardData.files);ue.length&&t&&!j&&!R&&(W.preventDefault(),ee.current?.addFiles(ue))},children:[(0,E.jsxs)(ao,{children:[(0,E.jsx)(no,{children:x(s?"taskDetails":"addCard")}),s&&(0,E.jsxs)("span",{className:"kanban-field-id",children:[x("fieldId"),": ",s.id]})]}),(0,E.jsxs)(oo,{className:"kanban-form-stack",children:[(l||q)&&(0,E.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:l||q}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(gt,{htmlFor:`${b}-title`,className:"kanban-field-label",children:x("fieldTitle")}),(0,E.jsx)(Ut,{"data-modal-autofocus":!0,id:`${b}-title`,value:y.title,placeholder:x("titlePlaceholder"),maxLength:120,disabled:j||!!R,onChange:W=>rt({title:W.target.value})})]}),(0,E.jsxs)("div",{className:"kanban-form-row",children:[(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(gt,{htmlFor:`${b}-label`,children:x("fieldLabel")}),(0,E.jsxs)(rn,{disabled:j||!!R,value:y.label||"__none__",onValueChange:W=>rt({label:W==="__none__"?"":W}),children:[(0,E.jsx)(ar,{id:`${b}-label`,children:(0,E.jsx)(nn,{placeholder:x("noLabel")})}),(0,E.jsxs)(or,{children:[(0,E.jsx)(xa,{value:"__none__",children:x("noLabel")}),c.map(W=>(0,E.jsx)(xa,{value:W.name,children:W.name},W.name))]})]})]}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(gt,{htmlFor:`${b}-priority`,children:x("fieldPriority")}),(0,E.jsxs)(rn,{disabled:j||!!R,value:y.priority||"__none__",onValueChange:W=>rt({priority:W==="__none__"?"":W}),children:[(0,E.jsx)(ar,{id:`${b}-priority`,children:(0,E.jsx)(nn,{placeholder:x("noPriority")})}),(0,E.jsxs)(or,{children:[(0,E.jsx)(xa,{value:"__none__",children:x("noPriority")}),gs.map(W=>{let ue=Jt[W];return(0,E.jsx)(xa,{value:W,children:(0,E.jsxs)("span",{className:"kanban-inline-priority",children:[(0,E.jsx)("span",{className:"kanban-priority-dot",style:{background:ue.color}}),ue.label]})},W)})]})]})]})]}),(0,E.jsxs)("div",{className:s?"kanban-form-row kanban-date-fields":void 0,children:[(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(gt,{htmlFor:`${b}-due-date`,children:x("fieldDueDate")}),(0,E.jsxs)("div",{className:"kanban-due-date-controls",children:[(0,E.jsx)(Ut,{ref:L,id:`${b}-due-date`,type:"date",min:"0001-01-01",max:"9999-12-31",value:y.dueDate,disabled:j||!!R,onChange:W=>rt({dueDate:W.target.value})}),(0,E.jsxs)("div",{className:"kanban-date-shortcuts",children:[[["today",0],["tomorrow",1],["nextWeek",7]].map(([W,ue])=>(0,E.jsx)(ce,{type:"button",variant:"ghost",size:"sm",disabled:j||!!R,onClick:()=>rt({dueDate:So(new Date,ue)}),children:x(W)},W)),(0,E.jsx)(ce,{type:"button",variant:"ghost",size:"sm",disabled:j||!!R||!y.dueDate,onClick:()=>rt({dueDate:""}),children:x("clearDate")})]})]})]}),s&&(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsx)(gt,{htmlFor:`${b}-completed-date`,children:x("fieldCompletedDate")}),(0,E.jsx)("output",{id:`${b}-completed-date`,className:"kanban-completed-date","aria-describedby":u&&!i?`${b}-completed-date-hint`:void 0,children:u?i?(0,E.jsx)("time",{dateTime:i,children:rr(i)}):x("completedDateUnknown"):"\u2014"}),u&&!i&&(0,E.jsx)("p",{id:`${b}-completed-date-hint`,className:"kanban-muted-small",children:x("completedDateUnknownHint")})]})]}),(0,E.jsxs)("div",{className:"kanban-form-field",children:[(0,E.jsxs)("div",{className:"kanban-field-label",children:[(0,E.jsx)(gt,{id:`${b}-note-label`,htmlFor:v?`${b}-note`:void 0,children:x("fieldNote")}),(0,E.jsxs)(ce,{variant:"ghost",size:"sm",disabled:j||!!R,"aria-controls":`${b}-description`,onClick:()=>{S(!v),v||requestAnimationFrame(()=>w.current?.focus())},children:[v?(0,E.jsx)(bt,{}):(0,E.jsx)(Tr,{}),x(v?"finishEditingNote":"editNote")]})]}),(0,E.jsx)("div",{id:`${b}-description`,children:v?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ms,{ref:w,id:`${b}-note`,className:"kanban-markdown-source",value:y.note,placeholder:x("notePlaceholder"),rows:12,maxLength:2e3,disabled:j||!!R,onChange:W=>rt({note:W.target.value})}),(0,E.jsxs)("p",{className:"kanban-note-hint",children:[x("markdownEditHint")," ",(0,E.jsxs)("span",{className:"kanban-tabular",children:[y.note.length,"/2000"]})]})]}):(0,E.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${b}-note-label`,children:y.note.trim()?(0,E.jsx)(bm.MarkdownText,{text:y.note,labels:{code:{copyLabel:x("copyCode"),copiedLabel:x("copiedCode")},footnotes:x("footnotes")}}):(0,E.jsx)("p",{className:"kanban-muted-small",children:x("emptyNote")})})})]}),(0,E.jsx)(hm,{ref:ee,workspaceId:e,cardId:y.id||s?.id,images:a,limits:t,disabled:j||!!R,onUpload:o??(async()=>{throw new Error(x("imagesUnavailable"))}),onRemove:r??(async()=>!1),onBusyChange:me,onPendingChange:W=>{Se(W),W||V(ue=>ue===x("imageUploadPartial")?"":ue)}},H),s&&(0,E.jsxs)("div",{className:"kanban-comments-box",children:[(0,E.jsxs)(gt,{htmlFor:`${b}-comment`,children:[x("commentsTitle")," ",(0,E.jsxs)("span",{className:"kanban-tabular",children:["(",d.length,")"]})]}),(0,E.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:d.length===0?(0,E.jsx)("p",{className:"kanban-muted-small",children:x("commentEmpty")}):(0,E.jsx)("ol",{className:"kanban-comment-list",children:d.map(W=>{let ue=W.source==="agent";return(0,E.jsxs)("li",{className:"kanban-comment-item",children:[(0,E.jsxs)("div",{className:"kanban-comment-meta",children:[(0,E.jsx)("span",{className:`kanban-activity-actor ${ue?"is-agent":"is-human"}`,children:x(ue?"actorAgent":"actorHuman")}),(0,E.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:W.createdAt,children:rr(W.createdAt)})]}),(0,E.jsx)("p",{className:"kanban-comment-content",children:W.content})]},W.id)})})}),(0,E.jsxs)("div",{className:"kanban-comment-composer",children:[(0,E.jsx)(ms,{id:`${b}-comment`,value:I,placeholder:x("commentPlaceholder"),rows:3,maxLength:2e3,disabled:j||!!R,onChange:W=>P(W.target.value),onKeyDown:W=>{(W.metaKey||W.ctrlKey)&&W.key==="Enter"&&(W.preventDefault(),qt())}}),(0,E.jsxs)(ce,{type:"button",variant:"outline",disabled:j||!!R||!I.trim(),onClick:()=>{qt()},children:[(0,E.jsx)(Fr,{className:"kanban-icon"}),x("sendComment")]})]})]}),s&&(0,E.jsxs)("div",{className:"kanban-activity-box",children:[(0,E.jsx)(gt,{className:"kanban-muted-small",children:x("activityTitle")}),(0,E.jsx)("div",{className:"kanban-activity-scroll",children:(0,E.jsx)(xm,{activities:f})})]})]}),(0,E.jsx)(ro,{children:R?(0,E.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,E.jsx)("p",{role:"alert",children:x(R==="discard"?"discardChangesDesc":R==="delete"?"deleteCardDesc":Te?"discardImagesDesc":"discardCommentDesc")}),(0,E.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,E.jsx)(ce,{ref:_,variant:"outline",disabled:j,onClick:()=>B(null),children:x("cancel")}),(0,E.jsx)(ce,{variant:"destructive",disabled:j,onClick:async()=>{if(R==="discard"){p(!1);return}if(R==="delete"){s&&m&&await Z(()=>m(s))&&p(!1);return}await Z(()=>C(y,R))&&p(!1)},children:x(R==="discard"?"discardChanges":R==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,E.jsxs)(E.Fragment,{children:[s&&m&&(0,E.jsxs)(ce,{variant:"ghost",className:"kanban-dialog-delete",disabled:j,onClick:()=>B("delete"),children:[(0,E.jsx)(Bt,{className:"kanban-icon"}),x("delete")]}),(0,E.jsxs)(Co,{children:[(0,E.jsx)(Lo,{asChild:!0,children:(0,E.jsxs)(ce,{variant:"outline",disabled:j||!y.title.trim()&&!y.note.trim(),children:[(0,E.jsx)(ca,{className:"kanban-icon"}),x("chatWithAgent")]})}),(0,E.jsxs)(Oa,{align:"end",children:[(0,E.jsx)(mt,{onClick:()=>{dt("current")},children:x("chatCurrentSession")}),(0,E.jsx)(mt,{onClick:()=>{dt("new")},children:x("chatNewSession")})]})]}),(0,E.jsx)(ce,{disabled:j||!y.title.trim(),onClick:async()=>{L.current?.reportValidity()&&await Z(async()=>{Ce.current=!y.id;let W;try{W=await h(y),Ce.current&&typeof W=="object"&&(N.current=W.cardId)}finally{Ce.current=!1}if(!Y.current||W===!1)return!1;let ue={...y,...typeof W=="object"?{id:W.cardId}:{}};if(A(ue),G.current=ue,Te&&(!ue.id||!await ee.current?.uploadPending(ue.id))){Y.current&&V(x("imageUploadPartial"));return}Y.current&&!I.trim()&&p(!1)})},children:x("save")})]})})]})})}var vm=require("react");var Lm=require("react/jsx-runtime");function tL({variant:e,className:t}={}){return de("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Ii({className:e,variant:t,...a}){return(0,Lm.jsx)("div",{className:tL({variant:t,className:e}),...a})}var yo=J(require("react"),1);var ko=require("react/jsx-runtime"),wi=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-card",e),...t}));wi.displayName="Card";var aL=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-card-header",e),...t}));aL.displayName="CardHeader";var oL=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-ui-card-title",e),...t}));oL.displayName="CardTitle";var rL=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-card-description",e),...t}));rL.displayName="CardDescription";var Si=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-card-content",e),...t}));Si.displayName="CardContent";var nL=yo.forwardRef(({className:e,...t},a)=>(0,ko.jsx)("div",{ref:a,className:de("kanban-card-footer",e),...t}));nL.displayName="CardFooter";var Be=require("react/jsx-runtime");function yi({card:e,labels:t,completed:a=!1,today:o=So(),query:r=""}){let n=Fe(),l=r.trim().toLowerCase(),s=l&&!e.title.toLowerCase().includes(l)&&!e.note.toLowerCase().includes(l)?e.comments.find(h=>h.content.toLowerCase().includes(l))?.content:void 0,u=s?s.slice(Math.max(0,s.toLowerCase().indexOf(l)-24),s.toLowerCase().indexOf(l)+l.length+70):"",i=e.images?.length??0,c=e.priority?Jt[e.priority]:null,d=im(t,e.label),f=a?"completed":e.dueDate===o?"today":e.dueDate&&e.dueDate<o?"overdue":"future",p=e.dueDate?f==="today"?n("dueToday"):f==="overdue"?n("overdueDays").replace("{days}",String(Ci(e.dueDate,o))):um(e.dueDate,o,n):"";return(0,Be.jsx)(wi,{className:"kanban-card",children:(0,Be.jsxs)(Si,{className:"kanban-sortable-card-content",children:[(e.label||c)&&(0,Be.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Be.jsxs)(Ii,{variant:"secondary",className:"kanban-card-badge",children:[(0,Be.jsx)("span",{className:"kanban-label-dot",style:{background:d},"aria-hidden":"true"}),e.label]}),c&&(0,Be.jsxs)(Ii,{variant:"secondary",className:"kanban-card-badge",children:[(0,Be.jsx)("span",{className:"kanban-label-dot",style:{background:c.color},"aria-hidden":"true"}),c.label]})]}),(0,Be.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Be.jsx)("p",{className:"kanban-card-note",children:e.note}),s&&(0,Be.jsxs)("p",{className:"kanban-search-match",children:[n("matchComment"),": ",u]}),(e.dueDate||e.comments.length>0||i>0)&&(0,Be.jsxs)("div",{className:"kanban-card-status-row",children:[e.dueDate&&(0,Be.jsxs)("span",{className:`kanban-card-due-date is-${f}`,title:`${n("fieldDueDate")}: ${e.dueDate}${a?` \xB7 ${n("completed")}`:""}`,children:[(0,Be.jsx)(ja,{"aria-hidden":"true"}),(0,Be.jsx)("span",{children:p})]}),i>0&&(0,Be.jsxs)("span",{className:"kanban-card-comment-count","aria-label":`${n("images")}: ${i}`,title:`${n("images")}: ${i}`,children:[(0,Be.jsx)(Mr,{"aria-hidden":"true"}),(0,Be.jsx)("span",{className:"kanban-tabular",children:i})]}),e.comments.length>0&&(0,Be.jsxs)("span",{className:"kanban-card-comment-count",title:`${n("commentsTitle")}: ${e.comments.length}`,"aria-label":`${n("commentsTitle")}: ${e.comments.length}`,children:[(0,Be.jsx)(ca,{"aria-hidden":"true"}),(0,Be.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})]})})}function Im({card:e,labels:t,completed:a,today:o=So(),query:r,onOpen:n}){let l=Fe(),s=(0,vm.useId)(),{attributes:u,listeners:i,setNodeRef:c,transform:d,transition:f,isDragging:p}=yn({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Be.jsxs)("div",{ref:c,style:{transform:yt.Transform.toString(d),transition:f},...u,...i,"aria-label":e.title,"aria-describedby":s,onKeyDown:h=>{h.key==="Enter"&&!p?(h.preventDefault(),n(e)):i?.onKeyDown?.(h)},onClick:h=>{h.currentTarget.focus(),n(e)},className:`kanban-sortable-card${p?" is-dragging":""}`,children:[(0,Be.jsxs)("span",{id:s,className:"kanban-sr-only",children:[l("cardKeyboardHelp"),e.dueDate&&` ${l("fieldDueDate")}: ${e.dueDate}. ${a?l("completed"):e.dueDate===o?l("dueToday"):e.dueDate<o?l("overdueDays").replace("{days}",String(Ci(e.dueDate,o))):""}`]}),(0,Be.jsx)(yi,{card:e,labels:t,completed:a,today:o,query:r})]})}var Tt=require("react/jsx-runtime");function wm({column:e,cards:t,totalCount:a,filtered:o,labels:r,completed:n,today:l,query:s,onAddCard:u,onOpenCard:i}){let{setNodeRef:c,isOver:d}=Cn({id:e.id,data:{type:"column"}}),{active:f,over:p}=Sr(),h=Fe(),g=f?.data.current?.type==="card"&&(d||p?.data.current?.columnId===e.id);return(0,Tt.jsxs)("div",{ref:c,className:`kanban-column${g?" is-over":""}`,children:[(0,Tt.jsxs)("div",{className:"kanban-column-header",children:[(0,Tt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,Tt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,Tt.jsxs)("div",{className:"kanban-column-cards",children:[(0,Tt.jsx)(Sn,{items:t.map(m=>m.id),strategy:wn,children:t.map(m=>(0,Tt.jsx)(Im,{card:m,labels:r,completed:n,today:l,query:s,onOpen:i},m.id))}),t.length===0&&(0,Tt.jsx)("p",{className:"kanban-column-empty",children:h(o?"noMatchingCards":"emptyColumn")})]}),(0,Tt.jsx)("div",{className:"kanban-column-footer",children:(0,Tt.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>u(e),children:[(0,Tt.jsx)(Ya,{className:"kanban-icon"}),h("addCard")]})})]})}var ht=require("react");var se=require("react/jsx-runtime");function sL({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:u,setNodeRef:i,transform:c,transition:d,isDragging:f}=yn({id:e.id,disabled:l}),p=Fe();return(0,se.jsxs)("div",{ref:i,style:{transform:yt.Transform.toString(c),transition:d},className:"kanban-editor-row","data-dragging":f||void 0,children:[(0,se.jsx)("button",{...s,...u,className:"kanban-drag-handle",disabled:l,"aria-label":`${p("dragSort")}: ${e.title}`,children:(0,se.jsx)(Pr,{className:"kanban-icon"})}),(0,se.jsx)(Ut,{className:"kanban-editor-name","aria-label":`${p("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:h=>a(h.target.value),onBlur:o,onKeyDown:h=>{h.key==="Enter"&&h.target.blur()}}),(0,se.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${p("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,se.jsx)(Bt,{className:"kanban-icon"})})]})}function Sm({open:e,error:t,columns:a,completedColumnId:o,onSetCompletedColumn:r,onOpenChange:n,onReorder:l,onRename:s,onDelete:u,onAdd:i}){let c=Fe(),d=(0,ht.useId)(),f=(0,ht.useId)(),[p,h]=(0,ht.useState)({}),[g,m]=(0,ht.useState)(""),[C,x]=(0,ht.useState)(!1),b=(0,ht.useRef)(!1),[L,w]=(0,ht.useState)(""),[v,S]=(0,ht.useState)(null),y=(0,ht.useRef)(null),A=mn(Ka(Eo,{activationConstraint:{distance:8}}),Ka(ya,{coordinateGetter:kn}));(0,ht.useEffect)(()=>{e&&(h(Object.fromEntries(a.map(M=>[M.id,M.title]))),m(""),w(""),S(null))},[e]),(0,ht.useEffect)(()=>{v&&y.current?.focus()},[v]);let I=async M=>{if(b.current)return!1;b.current=!0,x(!0),w("");try{let q=await M();return q===!1&&w(c("actionRetry")),q!==!1}catch(q){return w(c("actionFailed")+String(q instanceof Error?q.message:q)),!1}finally{b.current=!1,x(!1)}},P=async()=>{let M=g.trim();M&&await I(()=>i(M))&&m("")},T=M=>{let q=(p[M]??"").trim(),V=a.find(R=>R.id===M);V&&q&&q!==V.title&&I(()=>s(M,q))},U=M=>{let{active:q,over:V}=M;V&&q.id!==V.id&&I(()=>l(String(q.id),String(V.id)))};return(0,se.jsx)(jo,{open:e,onOpenChange:M=>{if(!b.current){if(!M&&v){S(null);return}n(M)}},children:(0,se.jsxs)(Kr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,se.jsxs)(ao,{children:[(0,se.jsx)(no,{children:c("columnEdit")}),(0,se.jsx)($r,{children:c("columnEditDesc")})]}),(0,se.jsxs)(oo,{className:"kanban-editor-body",children:[(t||L)&&(0,se.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||L}),(0,se.jsxs)("section",{className:"kanban-editor-section","aria-label":c("boardLists"),children:[(0,se.jsxs)("h3",{className:"kanban-editor-caption",children:[c("boardLists")," ",(0,se.jsx)("span",{children:a.length})]}),(0,se.jsx)(bn,{sensors:A,collisionDetection:ru,onDragEnd:U,children:(0,se.jsx)(Sn,{items:a.map(M=>M.id),strategy:wn,children:(0,se.jsx)("div",{className:"kanban-editor-list",children:a.map(M=>(0,se.jsx)(sL,{column:M,value:p[M.id]??M.title,onValueChange:q=>h(V=>({...V,[M.id]:q})),onCommit:()=>T(M.id),onDelete:()=>S(M),disabled:C||!!v,canDelete:a.length>1},M.id))})})})]}),(0,se.jsxs)("div",{className:"kanban-editor-setting",children:[(0,se.jsxs)("div",{className:"kanban-editor-setting-copy",children:[(0,se.jsx)(gt,{htmlFor:d,children:c("completedColumn")}),(0,se.jsx)("p",{id:`${d}-hint`,className:"kanban-muted-small",children:c("completedColumnHint")})]}),(0,se.jsxs)(rn,{value:o||"__none__",disabled:C||!!v,onValueChange:M=>{I(()=>r(M==="__none__"?null:M))},children:[(0,se.jsx)(ar,{id:d,"aria-describedby":`${d}-hint`,children:(0,se.jsx)(nn,{})}),(0,se.jsxs)(or,{children:[(0,se.jsx)(xa,{value:"__none__",children:c("noCompletedColumn")}),a.map(M=>(0,se.jsx)(xa,{value:M.id,children:M.title},M.id))]})]})]})]}),(0,se.jsx)(ro,{children:v?(0,se.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,se.jsx)("p",{role:"alert",children:c("deleteColumnDesc").replace("{column}",v.title)}),(0,se.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,se.jsx)(ce,{ref:y,variant:"outline",disabled:C,onClick:()=>S(null),children:c("cancel")}),(0,se.jsx)(ce,{variant:"destructive",disabled:C,onClick:async()=>{await I(()=>u(v.id))&&S(null)},children:c("confirmDelete")})]})]}):(0,se.jsxs)("div",{className:"kanban-editor-add",children:[(0,se.jsx)(gt,{htmlFor:f,children:c("newColumnPlaceholder")}),(0,se.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,se.jsx)("span",{className:"kanban-editor-add-icon","aria-hidden":"true",children:(0,se.jsx)(Ya,{className:"kanban-icon"})}),(0,se.jsx)(Ut,{id:f,value:g,disabled:C,placeholder:c("newColumnPlaceholder"),"aria-label":c("newColumnPlaceholder"),maxLength:40,onChange:M=>m(M.target.value),onKeyDown:M=>{M.key==="Enter"&&(M.preventDefault(),P())}}),(0,se.jsx)(ce,{size:"sm",className:"kanban-editor-add-button",disabled:C||!g.trim(),onClick:()=>{P()},children:c("add")})]})]})})]})})}var xt=require("react");var Ie=require("react/jsx-runtime");function ym({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=Fe(),u=(0,xt.useId)(),[i,c]=(0,xt.useState)({}),[d,f]=(0,xt.useState)(""),[p,h]=(0,xt.useState)("#38bdf8"),[g,m]=(0,xt.useState)(!1),C=(0,xt.useRef)(!1),[x,b]=(0,xt.useState)(""),[L,w]=(0,xt.useState)(null),v=(0,xt.useRef)(null);(0,xt.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(I=>[I.name,{name:I.name,color:I.color}]))),f(""),h("#38bdf8"),b(""),w(null))},[e]),(0,xt.useEffect)(()=>{L&&v.current?.focus()},[L]);let S=async I=>{if(C.current)return!1;C.current=!0,m(!0),b("");try{let P=await I();return P===!1&&b(s("actionRetry")),P!==!1}catch(P){return b(s("actionFailed")+String(P instanceof Error?P.message:P)),!1}finally{C.current=!1,m(!1)}},y=async()=>{let I=d.trim();I&&await S(()=>r(I,p))&&f("")},A=I=>{let P=i[I];if(!P)return;let T=a.find(M=>M.name===I),U=P.name.trim();T&&U&&(U!==I||P.color!==T.color)&&S(()=>n(I,U,P.color))};return(0,Ie.jsx)(jo,{open:e,onOpenChange:I=>{if(!C.current){if(!I&&L){w(null);return}o(I)}},children:(0,Ie.jsxs)(Kr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,Ie.jsxs)(ao,{children:[(0,Ie.jsx)(no,{children:s("labelEdit")}),(0,Ie.jsx)($r,{children:s("labelEditDesc")})]}),(0,Ie.jsxs)(oo,{className:"kanban-editor-body",children:[(t||x)&&(0,Ie.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||x}),(0,Ie.jsxs)("section",{className:"kanban-editor-section","aria-label":s("boardLabels"),children:[(0,Ie.jsxs)("h3",{className:"kanban-editor-caption",children:[s("boardLabels")," ",(0,Ie.jsx)("span",{children:a.length})]}),(0,Ie.jsxs)("div",{className:"kanban-editor-list",children:[a.length===0&&(0,Ie.jsxs)("div",{className:"kanban-editor-empty",children:[(0,Ie.jsx)(Br,{className:"kanban-icon","aria-hidden":"true"}),(0,Ie.jsx)("p",{children:s("noLabelsHint")})]}),a.map(I=>{let P=i[I.name]??{name:I.name,color:I.color};return(0,Ie.jsxs)("div",{className:"kanban-editor-row",children:[(0,Ie.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${I.name}`,title:`${s("labelColor")}: ${I.name}`,value:P.color,disabled:g||!!L,className:"kanban-color-input",onChange:T=>c(U=>({...U,[I.name]:{...P,color:T.target.value}})),onBlur:()=>A(I.name)}),(0,Ie.jsx)(Ut,{className:"kanban-editor-name","aria-label":`${s("labelName")}: ${I.name}`,value:P.name,disabled:g||!!L,maxLength:20,onChange:T=>c(U=>({...U,[I.name]:{...P,name:T.target.value}})),onBlur:()=>A(I.name),onKeyDown:T=>{T.key==="Enter"&&T.target.blur()}}),(0,Ie.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${s("deleteLabel")}: ${I.name}`,disabled:g||!!L,onClick:()=>w(I.name),children:(0,Ie.jsx)(Bt,{className:"kanban-icon"})})]},I.name)})]})]})]}),(0,Ie.jsx)(ro,{children:L?(0,Ie.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,Ie.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",L)}),(0,Ie.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,Ie.jsx)(ce,{ref:v,variant:"outline",disabled:g,onClick:()=>w(null),children:s("cancel")}),(0,Ie.jsx)(ce,{variant:"destructive",disabled:g,onClick:async()=>{await S(()=>l(L))&&w(null)},children:s("confirmDelete")})]})]}):(0,Ie.jsxs)("div",{className:"kanban-editor-add",children:[(0,Ie.jsx)(gt,{htmlFor:u,children:s("newLabelPlaceholder")}),(0,Ie.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,Ie.jsx)("input",{type:"color","aria-label":s("newLabelColor"),title:s("newLabelColor"),value:p,disabled:g,className:"kanban-color-input",onChange:I=>h(I.target.value)}),(0,Ie.jsx)(Ut,{id:u,value:d,disabled:g,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:I=>f(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.preventDefault(),y())}}),(0,Ie.jsx)(ce,{size:"sm",className:"kanban-editor-add-button",disabled:g||!d.trim(),onClick:()=>{y()},children:s("add")})]})]})})]})})}function ki(e,t=""){let a=t.trim().toLowerCase();return a?[e.id,e.title,e.note,...(e.comments||[]).map(o=>o.content)].some(o=>typeof o=="string"&&o.toLowerCase().includes(a)):!0}function Ls(e,t,a,o){if(a.files.length){if(!o?.createDrafts||!o.releaseDraftAttachments||!t.addAttachments)throw new Error(Lt("chatImagesUnavailable"));let r=o.createDrafts(e,a.files);try{if(!t.addAttachments(r.map(n=>n.id)))throw new Error(Lt("chatImagesBusy"))}catch(n){throw o.releaseDraftAttachments(r),n}}t.setDraft(a.text)}var Ri=new Map,Pi=0,Cs=new Set;function km(e,t,a=[]){Ri.set(e,{text:t,files:a}),Pi++;for(let o of Cs)o()}function Rm(e){let t=Ri.get(e);if(t==null)return null;Ri.delete(e),Pi++;for(let a of Cs)a();return t}function Pm(e){return Cs.add(e),()=>{Cs.delete(e)}}function Dm(){return Pi}function Mm(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Lt("fieldId")+": "+t),a&&n.push(a),r&&n.push(Lt("fieldLabel")+": "+r),e.dueDate&&n.push(Lt("fieldDueDate")+": "+e.dueDate),e.completed!==void 0&&n.push(Lt("completionStatus")+": "+Lt(e.completed?"completed":"incomplete")),e.completed&&n.push(Lt("fieldCompletedDate")+": "+(e.completedAt||Lt("completedDateUnknown"))),o&&n.push(o),e.imageCount&&n.push(Lt("imagesChatHint").replace("{count}",String(e.imageCount))),n.join(`

`)}var F=require("react/jsx-runtime");function Am(e,t,a,o,r){let n=e.find(m=>m.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(m=>m.columnId===n.columnId).findIndex(m=>m.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(m=>m.id!==t),u=s.filter(m=>m.columnId===a),i=o?u.findIndex(m=>m.id===o):-1,c=i<0?u.length:i+(r?1:0),d=[...s],f=u[c],p=u[u.length-1],h=f?d.indexOf(f):p?d.indexOf(p)+1:d.length;return d.splice(h,0,{...n,columnId:a}),{cards:d.every((m,C)=>m.id===e[C]?.id&&m.columnId===e[C]?.columnId)?e:d,toIndex:c}}function Tm(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=e.attachmentDrafts,l=a?a(k=>k.items):[],s=Array.isArray(l)?l.find(k=>Array.isArray(k.sessionIds)&&k.sessionIds.includes(t)):void 0,u=s?s.workspaceId:"default",i=Fe(),[c,d]=(0,be.useState)(null),[f,p]=(0,be.useState)(null),[h,g]=(0,be.useState)(""),[m,C]=(0,be.useState)(""),[x,b]=(0,be.useState)([]),[L,w]=(0,be.useState)(null),[v,S]=(0,be.useState)(null),[y,A]=(0,be.useState)(!1),[I,P]=(0,be.useState)(!1),[T,U]=(0,be.useState)(!1),M=dm(),[q,V]=(0,be.useState)(""),[R,B]=(0,be.useState)(""),[_,G]=(0,be.useState)(null),ee=(0,be.useRef)(null),$=(0,be.useRef)(c),me=(0,be.useRef)(null),Te=(0,be.useRef)(u),Se=(0,be.useRef)(null);(0,be.useEffect)(()=>()=>{Se.current?.abort()},[u,t]);let H=(0,be.useRef)(0),ye=(0,be.useRef)(0);$.current=c,Te.current=u;let[we,Ce]=(0,be.useState)(null),N=mn(Ka(br,{activationConstraint:{distance:8}}),Ka(Cr,{activationConstraint:{delay:250,tolerance:5}}),Ka(ya,{coordinateGetter:kn})),j=(0,be.useCallback)((k,z,X)=>{Te.current!==z||X<ye.current||(ye.current=X,k&&k.board&&(d({...k.board,completedColumnId:k.board.completedColumnId??null,cards:Array.isArray(k.board.cards)?k.board.cards.map(K=>({...K,dueDate:K.dueDate??null,completedAt:K.completedAt??null,comments:Array.isArray(K.comments)?K.comments:[],images:Array.isArray(K.images)?K.images:[]})):[],activities:Array.isArray(k.board.activities)?k.board.activities:[]}),C("")),k&&"imageLimits"in k&&p(k.persisted===!1?null:k.imageLimits??null),Array.isArray(k&&k.warnings)&&k.warnings.length>0&&b(K=>[...K,...k.warnings]))},[]),Y=(0,be.useCallback)(async(k,z={})=>{let X=++H.current;C("");try{let K=await sn(k,z,u);return j(K,u,X),!0}catch(K){return C(i("actionFailed")+String(K&&K.message||K)),!1}},[u,j,i]),ae=(0,be.useCallback)(()=>{let k=++H.current;U(!0),sn("get",{},u).then(z=>j(z,u,k)).catch(z=>C(i("loadFailed")+String(z&&z.message||z))).finally(()=>U(!1))},[u,j,i]);(0,be.useEffect)(()=>{let k=!0,z=++H.current;return d(null),p(null),g(""),G(null),B(""),V(""),S(null),w(null),C(""),b([]),sn("get",{},u).then(X=>{k&&j(X,u,z)}).catch(X=>{k&&C(i("loadFailed")+String(X&&X.message||X))}),()=>{k=!1}},[u,j,i]),(0,be.useEffect)(()=>{c&&G(k=>k&&!c.labels.some(z=>z.name===k)?null:k)},[c?.labels]),(0,be.useLayoutEffect)(()=>{let k=Le=>{let le=Le;for(;le;){let ve=getComputedStyle(le).overflowY;if(ve==="auto"||ve==="scroll")return le;le=le.parentElement}return null},z=()=>{let Le=ee.current;if(!Le)return;let le=k(Le.parentElement),ve=Le.getBoundingClientRect().top+(le?.scrollTop??0),Pe=window.innerHeight;if(le){let zt=le.querySelector("[data-composer-seat]"),Et=zt?zt.getBoundingClientRect().top:0;zt&&zt.offsetHeight>0&&Et>ve?Pe=Et:Pe=le.getBoundingClientRect().bottom}Ce(Math.max(0,Math.floor(Pe-ve)))};z();let X=k(ee.current?.parentElement??null),K=new ResizeObserver(z);if(K.observe(document.documentElement),X){K.observe(X);let Le=X.querySelector("[data-composer-seat]");Le&&K.observe(Le)}return window.addEventListener("resize",z),()=>{K.disconnect(),window.removeEventListener("resize",z)}},[c!==null]);let oe=(0,be.useCallback)(k=>{let z=nu(k),X=z.length>0?z:Os(k),K=vr(X,"id");if(K==null)return[];if(new Set((c?.columns??[]).map(le=>le.id)).has(String(K))){let le=(c?.cards??[]).filter(ve=>ve.columnId===K).map(ve=>ve.id);if(le.length>0){let ve=gn({...k,droppableContainers:k.droppableContainers.filter(Pe=>Pe.id!==K&&le.includes(String(Pe.id)))});ve.length>0&&(K=ve[0].id)}}return[{id:K}]},[c]),Z=k=>{let z=$.current;if(!z||z.cards===k)return;let X={...z,cards:k};$.current=X,d(X)},dt=k=>{if(k.active.data.current?.type!=="card")return;let z=$.current,X=z?.cards.find(K=>K.id===k.active.id);!X||!z||(me.current=z.cards,w(X))},rt=({active:k,over:z})=>{let X=$.current;if(!z||!X||k.data.current?.type!=="card")return;let K=String(k.id),Le=X.cards.find(Et=>Et.id===K),le=X.cards.find(Et=>Et.id===z.id),ve=le?.columnId??(z.data.current?.type==="column"?String(z.id):null);if(!Le||!ve||Le.columnId===ve)return;let Pe=k.rect.current.translated,zt=!!(le&&Pe&&Pe.top+Pe.height/2>z.rect.top+z.rect.height/2);Z(Am(X.cards,K,ve,le?.id??null,zt).cards)},qt=({active:k,over:z})=>{let X=$.current,K=me.current;if(me.current=null,!z||!X||k.data.current?.type!=="card"){K&&Z(K),w(null);return}let Le=String(k.id),le=X.cards.find(Qt=>Qt.id===z.id),ve=le?.columnId??(z.data.current?.type==="column"?String(z.id):null);if(!ve){K&&Z(K),w(null);return}let Pe=k.rect.current.translated,zt=!!(le&&Pe&&Pe.top+Pe.height/2>z.rect.top+z.rect.height/2),Et=Am(X.cards,Le,ve,le?.id??null,zt);Z(Et.cards),w(null),(!K||Et.cards.some((Qt,sr)=>Qt.id!==K[sr]?.id||Qt.columnId!==K[sr]?.columnId))&&Y("moveCard",{id:Le,columnId:ve,toIndex:Et.toIndex}).then(Qt=>{Qt||ae()})},W=()=>{me.current&&Z(me.current),me.current=null,w(null)},ue=async k=>{if(!v)return!1;let z=$.current?.cards.find(ve=>ve.id===(k.id||v.card?.id));if((k.id||v.card?.id)&&!z)throw new Error(i("cardNoLongerExists"));let X=z?{id:z.id}:{columnId:v.columnId,title:k.title,note:k.note,label:k.label||void 0,priority:k.priority||void 0,dueDate:k.dueDate||null};z&&(k.title!==z.title&&(X.title=k.title),k.note!==z.note&&(X.note=k.note),k.label!==(z.label??"")&&(X.label=k.label),k.priority!==(z.priority??"")&&(X.priority=k.priority),k.dueDate!==(z.dueDate??"")&&(X.dueDate=k.dueDate||null));let K=++H.current;C("");let Le=await sn(z?"updateCard":"addCard",X,u);if(j(Le,u,K),Te.current!==u)return!1;let le=z?.id??Le.cardId;if(!le)return!0;if(!z){let ve=Le.board?.cards.find(Pe=>Pe.id===le);ve&&S({card:ve,columnId:ve.columnId})}return{cardId:le}},Ca=async(k,z,X)=>{let K=++H.current,Le=await pm(u,k,z,X);if(Le.persisted===!1)throw new Error(i("actionRetry"));j(Le,u,K)},Ro=(0,be.useCallback)(async(k,z)=>{let X=$.current,K=X?.cards.find(le=>le.id===k.id),Le=Mm({...k,imageCount:K?.images?.length,completedAt:K?.completedAt,completed:K&&X?.completedColumnId?K.columnId===X.completedColumnId:void 0});if(!Le)return!1;C("");try{Se.current?.abort();let le=new AbortController;Se.current=le;let ve=await mm(u,K?.id??"",K?.images??[],AbortSignal.any([le.signal,AbortSignal.timeout(3e4)]));if(le.signal.aborted)return!1;if(ve.length&&(!n?.createDrafts||!n.releaseDraftAttachments))throw new Error(i("chatImagesUnavailable"));return z==="current"?o?(Ls(t,o,{text:Le,files:ve},n),!0):!1:r?.openWorkspace?(await r.openWorkspace(u,Pe=>km(Pe,Le,ve)),!0):!1}catch(le){return C(i("actionFailed")+String(le&&le.message||le)),!1}},[o,r,u,t,n,i]);if(!c)return(0,F.jsx)("div",{className:"kanban-root kanban-loading",children:m?(0,F.jsx)("p",{className:"kanban-error",children:m}):(0,F.jsx)("p",{className:"kanban-muted-text",children:i("loading")})});let La=c.cards.find(k=>k.id===v?.card?.id);return(0,F.jsxs)("div",{ref:ee,className:"kanban-root kanban-view",style:we!=null?{height:we}:void 0,children:[m&&!v&&!y&&!I&&(0,F.jsx)("p",{className:"kanban-error",role:"alert",children:m}),(0,F.jsxs)("div",{className:"kanban-search-row",children:[(0,F.jsxs)("div",{className:"kanban-search-field",children:[(0,F.jsx)(Er,{"aria-hidden":"true"}),(0,F.jsx)(Ut,{type:"search","aria-label":i("searchCards"),placeholder:i("searchPlaceholder"),maxLength:200,value:h,onChange:k=>g(k.target.value)}),h&&(0,F.jsx)(ce,{variant:"ghost",size:"icon","aria-label":i("clearSearch"),onClick:()=>g(""),children:(0,F.jsx)(ct,{})})]}),(0,F.jsxs)("div",{className:"kanban-toolbar",children:[(0,F.jsxs)(Co,{children:[(0,F.jsx)(Lo,{asChild:!0,children:(0,F.jsx)(ce,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${R?" is-active":""}`,title:i("priorityFilter"),"aria-label":i("priorityFilter"),"aria-pressed":!!R,children:(0,F.jsx)(Ra,{className:"kanban-icon"})})}),(0,F.jsxs)(Oa,{align:"start",children:[(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":!R,onSelect:()=>B(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:!R&&(0,F.jsx)(bt,{className:"kanban-icon"})}),i("all")]}),gs.map(k=>(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":R===k,onSelect:()=>B(k),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:R===k&&(0,F.jsx)(bt,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-priority-dot",style:{background:Jt[k].color}}),Jt[k].label]},k))]})]}),(0,F.jsxs)(Co,{children:[(0,F.jsx)(Lo,{asChild:!0,children:(0,F.jsx)(ce,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${_!==null?" is-active":""}`,title:_===null?i("labelFilter"):`${i("labelFilter")}: ${_||i("noLabel")}`,"aria-label":i("labelFilter"),"aria-pressed":_!==null,children:(0,F.jsx)(Bo,{className:"kanban-icon"})})}),(0,F.jsxs)(Oa,{align:"start",children:[(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":_===null,onSelect:()=>G(null),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:_===null&&(0,F.jsx)(bt,{className:"kanban-icon"})}),i("all")]}),(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":_==="",onSelect:()=>G(""),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:_===""&&(0,F.jsx)(bt,{className:"kanban-icon"})}),i("noLabel")]}),c.labels.map(k=>(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":_===k.name,onSelect:()=>G(k.name),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:_===k.name&&(0,F.jsx)(bt,{className:"kanban-icon"})}),(0,F.jsx)("span",{className:"kanban-label-dot",style:{background:k.color}}),k.name]},k.name))]})]}),(0,F.jsxs)(Co,{children:[(0,F.jsx)(Lo,{asChild:!0,children:(0,F.jsx)(ce,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${q?" is-active":""}`,title:i("dueDateFilter"),"aria-label":i("dueDateFilter"),"aria-pressed":!!q,children:(0,F.jsx)(ja,{className:"kanban-icon"})})}),(0,F.jsx)(Oa,{align:"start",children:["","today","overdue"].map(k=>(0,F.jsxs)(mt,{role:"menuitemradio","aria-checked":q===k,onSelect:()=>V(k),children:[(0,F.jsx)("span",{className:"kanban-filter-check",children:q===k&&(0,F.jsx)(bt,{className:"kanban-icon"})}),i(k==="today"?"dueToday":k==="overdue"?"overdue":"all")]},k))})]})]}),(0,F.jsxs)(Co,{children:[(0,F.jsx)(Lo,{asChild:!0,children:(0,F.jsx)(ce,{variant:"ghost",size:"icon",className:"kanban-toolbar-button kanban-toolbar-settings",title:i("settings"),"aria-label":i("settings"),children:(0,F.jsx)(Or,{className:"kanban-icon"})})}),(0,F.jsxs)(Oa,{align:"end",children:[(0,F.jsxs)(mt,{disabled:T,onSelect:ae,children:[(0,F.jsx)(Pa,{className:T?"kanban-animate-spin":void 0}),i("refresh")]}),(0,F.jsxs)(mt,{onClick:()=>{C(""),A(!0)},children:[(0,F.jsx)(Ar,{className:"kanban-icon"}),i("columnEdit")]}),(0,F.jsxs)(mt,{onClick:()=>{C(""),P(!0)},children:[(0,F.jsx)(Bo,{className:"kanban-icon"}),i("labelEdit")]}),(0,F.jsx)(ri,{}),(0,F.jsx)(mt,{asChild:!0,children:(0,F.jsxs)("a",{href:"https://github.com/alpacachen/dsh-kanban/issues/new/choose",target:"_blank",rel:"noopener noreferrer",children:[(0,F.jsx)(ca,{className:"kanban-icon"}),i("feedback")]})})]})]})]}),(h.trim()||R||_!==null||q)&&(0,F.jsxs)("div",{className:"kanban-filter-summary","aria-label":i("clearFilter"),children:[h.trim()&&(0,F.jsx)("span",{className:"kanban-muted-small",role:"status",children:i("searchResults").replace("{count}",String(c.cards.filter(k=>ki(k,h)&&(!R||k.priority===R)&&(_===null||(k.label??"")===_)&&Li(k,q,c.completedColumnId,M)).length))}),q&&(0,F.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${i(q==="today"?"dueToday":"overdue")}`,onClick:()=>V(""),children:[i(q==="today"?"dueToday":"overdue"),(0,F.jsx)(ct,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),R&&(0,F.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${Jt[R].label}`,onClick:()=>B(""),children:[i("fieldPriority"),": ",Jt[R].label,(0,F.jsx)(ct,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),_!==null&&(0,F.jsxs)(ce,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${i("clearFilter")}: ${_||i("noLabel")}`,onClick:()=>G(null),children:[i("fieldLabel"),": ",_||i("noLabel"),(0,F.jsx)(ct,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),x.length>0&&(0,F.jsxs)("div",{className:"kanban-warning",children:[(0,F.jsxs)("div",{className:"kanban-warning-body",children:[(0,F.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),x.map((k,z)=>(0,F.jsx)("p",{className:"kanban-warning-item",children:k},z))]}),(0,F.jsx)(ce,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>b([]),children:i("dismiss")})]}),(0,F.jsxs)(bn,{sensors:N,collisionDetection:oe,onDragStart:dt,onDragOver:rt,onDragEnd:qt,onDragCancel:W,children:[(0,F.jsx)("div",{className:"kanban-content",children:(0,F.jsx)("div",{className:"kanban-board-scroll",children:c.columns.map(k=>{let z=c.cards.filter(X=>X.columnId===k.id&&ki(X,h)&&(!R||X.priority===R)&&(_===null||(X.label??"")===_)&&(X.id===L?.id||Li(X,q,c.completedColumnId,M)));return(0,F.jsx)(wm,{column:k,cards:z,totalCount:c.cards.filter(X=>X.columnId===k.id).length,filtered:!!(R||q||h.trim())||_!==null,completed:k.id===c.completedColumnId,today:M,labels:c.labels,query:h,onAddCard:X=>{C(""),S({card:null,columnId:X.id})},onOpenCard:X=>{C(""),S({card:X,columnId:X.columnId})}},k.id)})})}),(0,F.jsx)(Iu,{children:L?(0,F.jsx)("div",{className:"kanban-drag-preview",children:(0,F.jsx)(yi,{card:L,labels:c.labels,completed:L.columnId===c.completedColumnId,today:M})}):null})]}),(0,F.jsx)(Cm,{workspaceId:u,imageLimits:f,images:La?.images??[],onUploadImage:Ca,onRemoveImage:(k,z)=>Y("removeImage",{id:k,attachmentId:z}),error:m,open:v!==null,card:v?.card??null,labels:c.labels,completed:!!(La&&La.columnId===c.completedColumnId),completedAt:La?.completedAt??null,comments:La?.comments??[],activities:v?.card?c.activities.filter(k=>k.cardId===v.card.id):[],onOpenChange:k=>{k||S(null)},onSave:ue,onAddComment:(k,z)=>Y("addComment",{id:k,content:z}),onDelete:k=>Y("deleteCard",{id:k.id}),onChatWithAgent:Ro},u),(0,F.jsx)(Sm,{error:m,open:y,columns:c.columns,completedColumnId:c.completedColumnId,onSetCompletedColumn:k=>Y("setCompletedColumn",{columnId:k}),onOpenChange:A,onReorder:(k,z)=>{let X=c.columns.findIndex(K=>K.id===z);return X>=0?Y("moveColumn",{id:k,toIndex:X}):Promise.resolve(!1)},onRename:(k,z)=>Y("renameColumn",{id:k,title:z}),onDelete:k=>Y("deleteColumn",{id:k}),onAdd:k=>Y("addColumn",{title:k})}),(0,F.jsx)(ym,{error:m,open:I,labels:c.labels,onOpenChange:P,onAdd:(k,z)=>Y("addLabel",{name:k,color:z}),onUpdate:(k,z,X)=>Y("updateLabel",{name:k,newName:z,color:X}),onDelete:k=>Y("deleteLabel",{name:k})})]})}var nr=require("react");var vs=require("react/jsx-runtime");function Em({sessionId:e,inputActions:t,attachmentDrafts:a}){let o=(0,nr.useSyncExternalStore)(Pm,Dm),[r,n]=(0,nr.useState)(null),l=Fe(),s=u=>{try{Ls(e,t,u,a),n(null)}catch(i){n({sessionId:e,draft:u,message:String(i instanceof Error?i.message:i)})}};return(0,nr.useEffect)(()=>{if(!e||!t?.setDraft)return;let u=Rm(e);u&&s(u)},[o,e,t,a]),!r||r.sessionId!==e?null:(0,vs.jsxs)("div",{role:"alert",className:"kanban-dialog-error",children:[l("actionFailed"),r.message,(0,vs.jsx)(ce,{variant:"ghost",size:"sm",onClick:()=>s(r.draft),children:l("retry")})]})}var Fm={name:"dsh-kanban",inject:["slots","locale","uiWorkspace","conversation"],apply(e){Tc(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace"),o=e.get("conversation");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Lt("boardTab")},r=>(0,Di.createElement)(Tm,{...r,uiWorkspace:a,attachmentDrafts:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,Di.createElement)(Em,{...r,attachmentDrafts:o})))}};var Om="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Om+"]")){let e=document.createElement("style");e.setAttribute(Om,""),e.textContent=Bi,document.head.appendChild(e)}var lL=Fm;
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
   * @license lucide-react v1.59.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})