window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Ym=Object.create;var sn=Object.defineProperty;var Zm=Object.getOwnPropertyDescriptor;var Jm=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,eg=Object.prototype.hasOwnProperty;var Oi=e=>{throw TypeError(e)};var tg=(e,t)=>{for(var a in t)sn(e,a,{get:t[a],enumerable:!0})},Bi=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Jm(t))!eg.call(e,r)&&r!==a&&sn(e,r,{get:()=>t[r],enumerable:!(o=Zm(t,r))||o.enumerable});return e};var J=(e,t,a)=>(a=e!=null?Ym(Qm(e)):{},Bi(t||!e||!e.__esModule?sn(a,"default",{value:e,enumerable:!0}):a,e)),ag=e=>Bi(sn({},"__esModule",{value:!0}),e);var Ni=(e,t,a)=>t.has(e)||Oi("Cannot "+a);var Ze=(e,t,a)=>(Ni(e,t,"read from private field"),a?a.call(e):t.get(e)),_i=(e,t,a)=>t.has(e)?Oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Ss=(e,t,a,o)=>(Ni(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var bL={};tg(bL,{default:()=>xL});module.exports=ag(bL);var Hi=`/*
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
  container-type: inline-size;
}

.kanban-workspaces {
  display: flex;
  width: 164px;
  min-height: 0;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  padding: 16px 8px;
  border-right: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-module-platform);
}

.kanban-workspaces-heading {
  padding: 2px 8px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxs-12);
}

.kanban-workspaces-header {
  display: flex;
  height: 28px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
}

.kanban-workspaces-toggle {
  width: 28px;
  height: 28px;
}

.kanban-workspaces[data-collapsed="true"] {
  width: 56px;
  padding-inline: 6px;
}

.kanban-workspaces[data-collapsed="true"] .kanban-workspaces-header,
.kanban-workspaces[data-collapsed="true"] .kanban-workspace-button {
  justify-content: center;
}

.kanban-workspaces[data-collapsed="true"] .kanban-workspaces-heading,
.kanban-workspaces[data-collapsed="true"] .kanban-workspace-name {
  display: none;
}

.kanban-workspaces-list {
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  scrollbar-width: thin;
}

.kanban-workspace-button {
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  justify-content: flex-start;
  gap: 8px;
  padding: 6px;
  border-radius: 8px;
}

.kanban-workspace-button[aria-current="page"] {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-workspace-icon {
  display: grid;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 7px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font-weight: 500;
}

.kanban-workspace-button[aria-current="page"] .kanban-workspace-icon {
  background: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary-foreground);
}

.kanban-workspace-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  padding: 16px 20px 8px;
}

.kanban-panel-header h1 {
  margin: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.kanban-panel-empty {
  padding: 32px 20px;
  color: var(--dsw-alias-label-secondary);
}

.kanban-panel-body > .kanban-view {
  height: auto;
  flex: 1;
  padding: 8px 20px 16px;
}

@container (max-width: 720px) {
  .kanban-workspace-button {
    height: 44px;
  }
  .kanban-panel-header {
    padding-inline: 12px;
  }
  .kanban-panel-body > .kanban-view {
    padding-inline: 12px;
  }
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
`;var Ls=require("react");var ln=require("react");var Ui=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function qi(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Ui(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var Wi=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var zi=e=>{let t=Wi(e);return t.charAt(0).toUpperCase()+t.slice(1)};var nr=require("react");var rr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var xa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ys(e){return e!=null}function Vi(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??xa.width,n=e.size??e.height??xa.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],d=t.includeDefaultClasses===!1?rr(...i):rr("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??xa["stroke-width"])*Number(e.size??e.width??xa.width)/Number(t.size??t.width??xa.width):t.strokeWidth??xa["stroke-width"];return["svg",{...Object.entries(xa).reduce((f,[m,h])=>(f[o(m)]=h,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&ys(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&ys(t.width)&&{[o("width")]:t.width},..."height"in t&&ys(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...d&&{[o("class")]:d},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[m,h,g]=f,p=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...h}:h;return g?[m,p,g]:[m,p]})]}function Gi(e,t={}){return Vi(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var Ki=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Io=require("react");var rg=(0,Io.createContext)({});var Xi=()=>(0,Io.useContext)(rg);var ji=(0,nr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:d=[],icon:c={node:d,aliases:[],size:24},...u},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:p=!1,color:C="currentColor",className:x=""}=Xi()??{},b=!!i||Ki(u),[L,S,v=[]]=Gi(c,{color:e??C,width:a??t??m,height:o??t??m,strokeWidth:r??h,absoluteStrokeWidth:n??g,nonScalingStroke:l??p,className:rr(x,s),hasA11yProp:b,attributes:u});return(0,nr.createElement)(L,{ref:f,...S},[...v.map(([k,y])=>(0,nr.createElement)(k,y)),...Array.isArray(i)?i:[i]])});function te(e,t=[],a=[]){let o=typeof e=="string"?qi(e,t,a):e,r=(0,ln.forwardRef)(({className:n,...l},s)=>(0,ln.createElement)(ji,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=zi(o.name)),r}var $i={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};$i.node;var Aa=te($i);var Yi={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Yi.node;var pt=te(Yi);var Zi={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Zi.node;var wo=te(Zi);var Ji={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Ji.node;var sr=te(Ji);var Qi={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Qi.node;var lr=te(Qi);var ed={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};ed.node;var ir=te(ed);var td={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};td.node;var ba=te(td);var ad={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};ad.node;var dr=te(ad);var od={name:"image-plus",size:24,node:[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]};od.node;var ur=te(od);var rd={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};rd.node;var cr=te(rd);var nd={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};nd.node;var fr=te(nd);var sd={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};sd.node;var aa=te(sd);var ld={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};ld.node;var oa=te(ld);var id={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};id.node;var Ca=te(id);var dd={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};dd.node;var pr=te(dd);var ud={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};ud.node;var Ta=te(ud);var cd={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};cd.node;var La=te(cd);var fd={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};fd.node;var mr=te(fd);var pd={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};pd.node;var gr=te(pd);var md={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};md.node;var hr=te(md);var gd={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};gd.node;var So=te(gd);var hd={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};hd.node;var xr=te(hd);var xd={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};xd.node;var Pt=te(xd);var bd={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};bd.node;var st=te(bd);var bo=require("react");var Le=require("react");var D=J(require("react")),Ha=require("react-dom");var Ee=require("react");function Ld(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ee.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var br=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ea(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function dn(e){return"nodeType"in e}function at(e){var t,a;return e?Ea(e)?e:dn(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function un(e){let{Document:t}=at(e);return e instanceof t}function yo(e){return Ea(e)?!1:e instanceof at(e).HTMLElement}function Rs(e){return e instanceof at(e).SVGElement}function Fa(e){return e?Ea(e)?e.document:dn(e)?un(e)?e:yo(e)||Rs(e)?e.ownerDocument:document:document:document}var Lt=br?Ee.useLayoutEffect:Ee.useEffect;function Cr(e){let t=(0,Ee.useRef)(e);return Lt(()=>{t.current=e}),(0,Ee.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function vd(){let e=(0,Ee.useRef)(null),t=(0,Ee.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Ee.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function ko(e,t){t===void 0&&(t=[e]);let a=(0,Ee.useRef)(e);return Lt(()=>{a.current!==e&&(a.current=e)},t),a}function Ro(e,t){let a=(0,Ee.useRef)();return(0,Ee.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Lr(e){let t=Cr(e),a=(0,Ee.useRef)(null),o=(0,Ee.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function vr(e){let t=(0,Ee.useRef)();return(0,Ee.useEffect)(()=>{t.current=e},[e]),t.current}var ks={};function Oa(e,t){return(0,Ee.useMemo)(()=>{if(t)return t;let a=ks[e]==null?0:ks[e]+1;return ks[e]=a,e+"-"+a},[e,t])}function Id(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,d]of s){let c=n[i];c!=null&&(n[i]=c+e*d)}return n},{...t})}}var Ba=Id(1),Na=Id(-1);function ng(e){return"clientX"in e&&"clientY"in e}function Po(e){if(!e)return!1;let{KeyboardEvent:t}=at(e.target);return t&&e instanceof t}function sg(e){if(!e)return!1;let{TouchEvent:t}=at(e.target);return t&&e instanceof t}function Ir(e){if(sg(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return ng(e)?{x:e.clientX,y:e.clientY}:null}var Ct=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[Ct.Translate.toString(e),Ct.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),Cd="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function wd(e){return e.matches(Cd)?e:e.querySelector(Cd)}var _a=J(require("react")),lg={display:"none"};function Sd(e){let{id:t,value:a}=e;return _a.default.createElement("div",{id:t,style:lg},a)}function yd(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return _a.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function kd(){let[e,t]=(0,_a.useState)("");return{announce:(0,_a.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Hd=(0,D.createContext)(null);function ig(e){let t=(0,D.useContext)(Hd);(0,D.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function dg(){let[e]=(0,D.useState)(()=>new Set),t=(0,D.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,D.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var ug={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},cg={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function fg(e){let{announcements:t=cg,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=ug}=e,{announce:n,announcement:l}=kd(),s=Oa("DndLiveRegion"),[i,d]=(0,D.useState)(!1);if((0,D.useEffect)(()=>{d(!0)},[]),ig((0,D.useMemo)(()=>({onDragStart(u){let{active:f}=u;n(t.onDragStart({active:f}))},onDragMove(u){let{active:f,over:m}=u;t.onDragMove&&n(t.onDragMove({active:f,over:m}))},onDragOver(u){let{active:f,over:m}=u;n(t.onDragOver({active:f,over:m}))},onDragEnd(u){let{active:f,over:m}=u;n(t.onDragEnd({active:f,over:m}))},onDragCancel(u){let{active:f,over:m}=u;n(t.onDragCancel({active:f,over:m}))}}),[n,t])),!i)return null;let c=D.default.createElement(D.default.Fragment,null,D.default.createElement(Sd,{id:o,value:r.draggable}),D.default.createElement(yd,{id:s,announcement:l}));return a?(0,Ha.createPortal)(c,a):c}var qe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(qe||(qe={}));function fn(){}function Wa(e,t){return(0,D.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function mn(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,D.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Ot=Object.freeze({x:0,y:0});function Os(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function pg(e,t){let a=Ir(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function Bs(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function mg(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function As(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Dr(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Rd(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Ud=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Rd(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let d=Os(Rd(i),r);n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(Bs)},gn=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=As(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let d=As(i),c=r.reduce((f,m,h)=>f+Os(d[h],m),0),u=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(Bs)};function gg(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,d=e.width*e.height,c=l*s,u=c/(i+d-c);return Number(u.toFixed(4))}return 0}var Ns=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=gg(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(mg)};function hg(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var qd=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&hg(o,s)){let d=As(s).reduce((u,f)=>u+Os(o,f),0),c=Number((d/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(Bs)};function xg(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Wd(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ot}function bg(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Cg=bg(1);function zd(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Lg(e,t,a){let o=zd(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),d=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,u=n?e.height/n:e.height;return{width:c,height:u,top:d,right:i+c,bottom:d+u,left:i}}var vg={ignoreTransform:!1};function za(e,t){t===void 0&&(t=vg);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:d,transformOrigin:c}=at(e).getComputedStyle(e);d&&(a=Lg(a,d,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function Pd(e){return za(e,{ignoreTransform:!0})}function Ig(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function wg(e,t){return t===void 0&&(t=at(e).getComputedStyle(e)),t.position==="fixed"}function Sg(e,t){t===void 0&&(t=at(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Mr(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(un(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!yo(r)||Rs(r)||a.includes(r))return a;let n=at(e).getComputedStyle(r);return r!==e&&Sg(r,n)&&a.push(r),wg(r,n)?a:o(r.parentNode)}return e?o(e):a}function Vd(e){let[t]=Mr(e,1);return t??null}function Ps(e){return!br||!e?null:Ea(e)?e:dn(e)?un(e)||e===Fa(e).scrollingElement?window:yo(e)?e:null:null}function Gd(e){return Ea(e)?e.scrollX:e.scrollLeft}function Kd(e){return Ea(e)?e.scrollY:e.scrollTop}function Ts(e){return{x:Gd(e),y:Kd(e)}}var Ve;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ve||(Ve={}));function Xd(e){return!br||!e?!1:e===document.scrollingElement}function jd(e){let t={x:0,y:0},a=Xd(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var yg={x:.2,y:.2};function kg(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=yg);let{isTop:d,isBottom:c,isLeft:u,isRight:f}=jd(e),m={x:0,y:0},h={x:0,y:0},g={height:t.height*r.y,width:t.width*r.x};return!d&&n<=t.top+g.height?(m.y=Ve.Backward,h.y=o*Math.abs((t.top+g.height-n)/g.height)):!c&&i>=t.bottom-g.height&&(m.y=Ve.Forward,h.y=o*Math.abs((t.bottom-g.height-i)/g.height)),!f&&s>=t.right-g.width?(m.x=Ve.Forward,h.x=o*Math.abs((t.right-g.width-s)/g.width)):!u&&l<=t.left+g.width&&(m.x=Ve.Backward,h.x=o*Math.abs((t.left+g.width-l)/g.width)),{direction:m,speed:h}}function Rg(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function $d(e){return e.reduce((t,a)=>Ba(t,Ts(a)),Ot)}function Pg(e){return e.reduce((t,a)=>t+Gd(a),0)}function Dg(e){return e.reduce((t,a)=>t+Kd(a),0)}function Yd(e,t){if(t===void 0&&(t=za),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Vd(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Mg=[["x",["left","right"],Pg],["y",["top","bottom"],Dg]],Sr=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Mr(a),r=$d(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Mg)for(let i of l)Object.defineProperty(this,i,{get:()=>{let d=s(o),c=r[n]-d;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Ua=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Ag(e){let{EventTarget:t}=at(e);return e instanceof t?e:Fa(e)}function Ds(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var Dt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Dt||(Dt={}));function Dd(e){e.preventDefault()}function Tg(e){e.stopPropagation()}var ce;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ce||(ce={}));var Zd={start:[ce.Space,ce.Enter],cancel:[ce.Esc],end:[ce.Space,ce.Enter,ce.Tab]},Eg=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ce.Right:return{...a,x:a.x+25};case ce.Left:return{...a,x:a.x-25};case ce.Down:return{...a,y:a.y+25};case ce.Up:return{...a,y:a.y-25}}},Ia=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new Ua(Fa(a)),this.windowListeners=new Ua(at(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Dt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Yd(o),a(Ot)}handleKeyDown(t){if(Po(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Zd,coordinateGetter:l=Eg,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:d}=o.current,c=d?{x:d.left,y:d.top}:Ot;this.referenceCoordinates||(this.referenceCoordinates=c);let u=l(t,{active:a,context:o.current,currentCoordinates:c});if(u){let f=Na(u,c),m={x:0,y:0},{scrollableAncestors:h}=o.current;for(let g of h){let p=t.code,{isTop:C,isRight:x,isLeft:b,isBottom:L,maxScroll:S,minScroll:v}=jd(g),k=Rg(g),y={x:Math.min(p===ce.Right?k.right-k.width/2:k.right,Math.max(p===ce.Right?k.left:k.left+k.width/2,u.x)),y:Math.min(p===ce.Down?k.bottom-k.height/2:k.bottom,Math.max(p===ce.Down?k.top:k.top+k.height/2,u.y))},E=p===ce.Right&&!x||p===ce.Left&&!b,I=p===ce.Down&&!L||p===ce.Up&&!C;if(E&&y.x!==u.x){let R=g.scrollLeft+f.x,A=p===ce.Right&&R<=S.x||p===ce.Left&&R>=v.x;if(A&&!f.y){g.scrollTo({left:R,behavior:s});return}A?m.x=g.scrollLeft-R:m.x=p===ce.Right?g.scrollLeft-S.x:g.scrollLeft-v.x,m.x&&g.scrollBy({left:-m.x,behavior:s});break}else if(I&&y.y!==u.y){let R=g.scrollTop+f.y,A=p===ce.Down&&R<=S.y||p===ce.Up&&R>=v.y;if(A&&!f.x){g.scrollTo({top:R,behavior:s});return}A?m.y=g.scrollTop-R:m.y=p===ce.Down?g.scrollTop-S.y:g.scrollTop-v.y,m.y&&g.scrollBy({top:-m.y,behavior:s});break}}this.handleMove(t,Ba(Na(u,this.referenceCoordinates),m))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Ia.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Zd,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Md(e){return!!(e&&"distance"in e)}function Ad(e){return!!(e&&"delay"in e)}var yr=class{constructor(t,a,o){var r;o===void 0&&(o=Ag(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=Fa(l),this.documentListeners=new Ua(this.document),this.listeners=new Ua(o),this.windowListeners=new Ua(at(l)),this.initialCoordinates=(r=Ir(n))!=null?r:Ot,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.DragStart,Dd),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),this.windowListeners.add(Dt.ContextMenu,Dd),this.documentListeners.add(Dt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ad(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Md(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(Dt.Click,Tg,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Dt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Ir(t))!=null?a:Ot,d=Na(r,i);if(!o&&s){if(Md(s)){if(s.tolerance!=null&&Ds(d,s.tolerance))return this.handleCancel();if(Ds(d,s.distance))return this.handleStart()}if(Ad(s)&&Ds(d,s.tolerance))return this.handleCancel();this.handlePending(s,d);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ce.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Fg={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Do=class extends yr{constructor(t){let{event:a}=t,o=Fa(a.target);super(t,Fg,o)}};Do.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Og={move:{name:"mousemove"},end:{name:"mouseup"}},Es;(function(e){e[e.RightClick=2]="RightClick"})(Es||(Es={}));var kr=class extends yr{constructor(t){super(t,Og,Fa(t.event.target))}};kr.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===Es.RightClick?!1:(o?.({event:a}),!0)}}];var Ms={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Rr=class extends yr{constructor(t){super(t,Ms)}static setup(){return window.addEventListener(Ms.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Ms.move.name,t)};function t(){}}};Rr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var wr;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(wr||(wr={}));var pn;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(pn||(pn={}));function Bg(e){let{acceleration:t,activator:a=wr.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=pn.TreeOrder,pointerCoordinates:i,scrollableAncestors:d,scrollableAncestorRects:c,delta:u,threshold:f}=e,m=_g({delta:u,disabled:!n}),[h,g]=vd(),p=(0,D.useRef)({x:0,y:0}),C=(0,D.useRef)({x:0,y:0}),x=(0,D.useMemo)(()=>{switch(a){case wr.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case wr.DraggableRect:return r}},[a,r,i]),b=(0,D.useRef)(null),L=(0,D.useCallback)(()=>{let v=b.current;if(!v)return;let k=p.current.x*C.current.x,y=p.current.y*C.current.y;v.scrollBy(k,y)},[]),S=(0,D.useMemo)(()=>s===pn.TreeOrder?[...d].reverse():d,[s,d]);(0,D.useEffect)(()=>{if(!n||!d.length||!x){g();return}for(let v of S){if(o?.(v)===!1)continue;let k=d.indexOf(v),y=c[k];if(!y)continue;let{direction:E,speed:I}=kg(v,y,x,t,f);for(let R of["x","y"])m[R][E[R]]||(I[R]=0,E[R]=0);if(I.x>0||I.y>0){g(),b.current=v,h(L,l),p.current=I,C.current=E;return}}p.current={x:0,y:0},C.current={x:0,y:0},g()},[t,L,o,g,n,l,JSON.stringify(x),JSON.stringify(m),h,d,S,c,JSON.stringify(f)])}var Ng={x:{[Ve.Backward]:!1,[Ve.Forward]:!1},y:{[Ve.Backward]:!1,[Ve.Forward]:!1}};function _g(e){let{delta:t,disabled:a}=e,o=vr(t);return Ro(r=>{if(a||!o||!r)return Ng;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ve.Backward]:r.x[Ve.Backward]||n.x===-1,[Ve.Forward]:r.x[Ve.Forward]||n.x===1},y:{[Ve.Backward]:r.y[Ve.Backward]||n.y===-1,[Ve.Forward]:r.y[Ve.Forward]||n.y===1}}},[a,t,o])}function Hg(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Ro(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Ug(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Pr;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Pr||(Pr={}));var Fs;(function(e){e.Optimized="optimized"})(Fs||(Fs={}));var Td=new Map;function qg(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,D.useState)(null),{frequency:s,measure:i,strategy:d}=r,c=(0,D.useRef)(e),u=p(),f=ko(u),m=(0,D.useCallback)(function(C){C===void 0&&(C=[]),!f.current&&l(x=>x===null?C:x.concat(C.filter(b=>!x.includes(b))))},[f]),h=(0,D.useRef)(null),g=Ro(C=>{if(u&&!a)return Td;if(!C||C===Td||c.current!==e||n!=null){let x=new Map;for(let b of e){if(!b)continue;if(n&&n.length>0&&!n.includes(b.id)&&b.rect.current){x.set(b.id,b.rect.current);continue}let L=b.node.current,S=L?new Sr(i(L),L):null;b.rect.current=S,S&&x.set(b.id,S)}return x}return C},[e,n,a,u,i]);return(0,D.useEffect)(()=>{c.current=e},[e]),(0,D.useEffect)(()=>{u||m()},[a,u]),(0,D.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,D.useEffect)(()=>{u||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{m(),h.current=null},s))},[s,u,m,...o]),{droppableRects:g,measureDroppableContainers:m,measuringScheduled:n!=null};function p(){switch(d){case Pr.Always:return!1;case Pr.BeforeDragging:return a;default:return!a}}}function _s(e,t){return Ro(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Wg(e,t){return _s(e,t)}function zg(e){let{callback:t,disabled:a}=e,o=Cr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function hn(e){let{callback:t,disabled:a}=e,o=Cr(t),r=(0,D.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,D.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Vg(e){return new Sr(za(e),e)}function Ed(e,t,a){t===void 0&&(t=Vg);let[o,r]=(0,D.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var d;return(d=i??a)!=null?d:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=zg({callback(i){if(e)for(let d of i){let{type:c,target:u}=d;if(c==="childList"&&u instanceof HTMLElement&&u.contains(e)){n();break}}}}),s=hn({callback:n});return Lt(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Gg(e){let t=_s(e);return Wd(e,t)}var Fd=[];function Kg(e){let t=(0,D.useRef)(e),a=Ro(o=>e?o&&o!==Fd&&e&&t.current&&e.parentNode===t.current.parentNode?o:Mr(e):Fd,[e]);return(0,D.useEffect)(()=>{t.current=e},[e]),a}function Xg(e){let[t,a]=(0,D.useState)(null),o=(0,D.useRef)(e),r=(0,D.useCallback)(n=>{let l=Ps(n.target);l&&a(s=>s?(s.set(l,Ts(l)),new Map(s)):null)},[]);return(0,D.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let d=Ps(i);return d?(d.addEventListener("scroll",r,{passive:!0}),[d,Ts(d)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let d=Ps(i);d?.removeEventListener("scroll",r)})}},[r,e]),(0,D.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>Ba(n,l),Ot):$d(e):Ot,[e,t])}function Od(e,t){t===void 0&&(t=[]);let a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current=null},t),(0,D.useEffect)(()=>{let o=e!==Ot;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?Na(e,a.current):Ot}function jg(e){(0,D.useEffect)(()=>{if(!br)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function $g(e,t){return(0,D.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Jd(e){return(0,D.useMemo)(()=>e?Ig(e):null,[e])}var Bd=[];function Yg(e,t){t===void 0&&(t=za);let[a]=e,o=Jd(a?at(a):null),[r,n]=(0,D.useState)(Bd);function l(){n(()=>e.length?e.map(i=>Xd(i)?o:new Sr(t(i),i)):Bd)}let s=hn({callback:l});return Lt(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Qd(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return yo(t)?t:e}function Zg(e){let{measure:t}=e,[a,o]=(0,D.useState)(null),r=(0,D.useCallback)(d=>{for(let{target:c}of d)if(yo(c)){o(u=>{let f=t(c);return u?{...u,width:f.width,height:f.height}:f});break}},[t]),n=hn({callback:r}),l=(0,D.useCallback)(d=>{let c=Qd(d);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Lr(l);return(0,D.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var Jg=[{sensor:Do,options:{}},{sensor:Ia,options:{}}],Qg={current:{}},cn={draggable:{measure:Pd},droppable:{measure:Pd,strategy:Pr.WhileDragging,frequency:Fs.Optimized},dragOverlay:{measure:za}},qa=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},eh={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new qa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:fn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:cn,measureDroppableContainers:fn,windowRect:null,measuringScheduled:!1},eu={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:fn,draggableNodes:new Map,over:null,measureDroppableContainers:fn},Ar=(0,D.createContext)(eu),tu=(0,D.createContext)(eh);function th(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new qa}}}function ah(e,t){switch(t.type){case qe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case qe.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case qe.DragEnd:case qe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case qe.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new qa(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case qe.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new qa(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case qe.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new qa(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function oh(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,D.useContext)(Ar),n=vr(o),l=vr(a?.id);return(0,D.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!Po(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:d}=s;if(!i.current&&!d.current)return;requestAnimationFrame(()=>{for(let c of[i.current,d.current]){if(!c)continue;let u=wd(c);if(u){u.focus();break}}})}},[o,t,r,l,n]),null}function au(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function rh(e){return(0,D.useMemo)(()=>({draggable:{...cn.draggable,...e?.draggable},droppable:{...cn.droppable,...e?.droppable},dragOverlay:{...cn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function nh(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,D.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;Lt(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let d=t?.node.current;if(!d||d.isConnected===!1)return;let c=a(d),u=Wd(c,o);if(l||(u.x=0),s||(u.y=0),n.current=!0,Math.abs(u.x)>0||Math.abs(u.y)>0){let f=Vd(d);f&&f.scrollBy({top:u.y,left:u.x})}},[t,l,s,o,a])}var xn=(0,D.createContext)({...Ot,scaleX:1,scaleY:1}),va;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(va||(va={}));var bn=(0,D.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:d,sensors:c=Jg,collisionDetection:u=Ns,measuring:f,modifiers:m,...h}=t,g=(0,D.useReducer)(ah,void 0,th),[p,C]=g,[x,b]=dg(),[L,S]=(0,D.useState)(va.Uninitialized),v=L===va.Initialized,{draggable:{active:k,nodes:y,translate:E},droppable:{containers:I}}=p,R=k!=null?y.get(k):null,A=(0,D.useRef)({initial:null,translated:null}),H=(0,D.useMemo)(()=>{var tt;return k!=null?{id:k,data:(tt=R?.data)!=null?tt:Qg,rect:A}:null},[k,R]),T=(0,D.useRef)(null),[V,W]=(0,D.useState)(null),[P,N]=(0,D.useState)(null),K=ko(h,Object.values(h)),G=Oa("DndDescribedBy",l),$=(0,D.useMemo)(()=>I.getEnabled(),[I]),Y=rh(f),{droppableRects:ge,measureDroppableContainers:Ae,measuringScheduled:he}=qg($,{dragging:v,dependencies:[E.x,E.y],config:Y.droppable}),q=Hg(y,k),ve=(0,D.useMemo)(()=>P?Ir(P):null,[P]),Ce=$m(),xe=Wg(q,Y.draggable.measure);nh({activeNode:k!=null?y.get(k):null,config:Ce.layoutShiftCompensation,initialRect:xe,measure:Y.draggable.measure});let U=Ed(q,Y.draggable.measure,xe),ae=Ed(q?q.parentElement:null),le=(0,D.useRef)({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:ge,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=I.getNodeFor((a=le.current.over)==null?void 0:a.id),w=Zg({measure:Y.dragOverlay.measure}),M=(o=w.nodeRef.current)!=null?o:q,z=v?(r=w.rect)!=null?r:U:null,j=!!(w.nodeRef.current&&w.rect),me=Gg(j?null:U),B=Jd(M?at(M):null),X=Kg(v?Z??q:null),Ue=Yg(X),ca=au(m,{transform:{x:E.x-me.x,y:E.y-me.y,scaleX:1,scaleY:1},activatorEvent:P,active:H,activeNodeRect:U,containerNodeRect:ae,draggingNodeRect:z,over:le.current.over,overlayNodeRect:w.rect,scrollableAncestors:X,scrollableAncestorRects:Ue,windowRect:B}),Gt=ve?Ba(ve,E):null,vs=Xg(X),fa=Od(vs),nn=Od(vs,[U]),Co=Ba(ca,fa),Lo=z?Cg(z,ca):null,er=H&&Lo?u({active:H,collisionRect:Lo,droppableRects:ge,droppableContainers:$,pointerCoordinates:Gt}):null,Ai=Dr(er,"id"),[pa,Ti]=(0,D.useState)(null),Vm=j?ca:Ba(ca,nn),Gm=xg(Vm,(n=pa?.rect)!=null?n:null,U),Is=(0,D.useRef)(null),Ei=(0,D.useCallback)((tt,ht)=>{let{sensor:xt,options:ma}=ht;if(T.current==null)return;let Rt=y.get(T.current);if(!Rt)return;let bt=tt.nativeEvent,Kt=new xt({active:T.current,activeNode:Rt,event:bt,options:ma,context:le,onAbort(Ye){if(!y.get(Ye))return;let{onDragAbort:Xt}=K.current,ta={id:Ye};Xt?.(ta),x({type:"onDragAbort",event:ta})},onPending(Ye,ga,Xt,ta){if(!y.get(Ye))return;let{onDragPending:ar}=K.current,ha={id:Ye,constraint:ga,initialCoordinates:Xt,offset:ta};ar?.(ha),x({type:"onDragPending",event:ha})},onStart(Ye){let ga=T.current;if(ga==null)return;let Xt=y.get(ga);if(!Xt)return;let{onDragStart:ta}=K.current,tr={activatorEvent:bt,active:{id:ga,data:Xt.data,rect:A}};(0,Ha.unstable_batchedUpdates)(()=>{ta?.(tr),S(va.Initializing),C({type:qe.DragStart,initialCoordinates:Ye,active:ga}),x({type:"onDragStart",event:tr}),W(Is.current),N(bt)})},onMove(Ye){C({type:qe.DragMove,coordinates:Ye})},onEnd:vo(qe.DragEnd),onCancel:vo(qe.DragCancel)});Is.current=Kt;function vo(Ye){return async function(){let{active:Xt,collisions:ta,over:tr,scrollAdjustedTranslate:ar}=le.current,ha=null;if(Xt&&ar){let{cancelDrop:or}=K.current;ha={activatorEvent:bt,active:Xt,collisions:ta,delta:ar,over:tr},Ye===qe.DragEnd&&typeof or=="function"&&await Promise.resolve(or(ha))&&(Ye=qe.DragCancel)}T.current=null,(0,Ha.unstable_batchedUpdates)(()=>{C({type:Ye}),S(va.Uninitialized),Ti(null),W(null),N(null),Is.current=null;let or=Ye===qe.DragEnd?"onDragEnd":"onDragCancel";if(ha){let ws=K.current[or];ws?.(ha),x({type:or,event:ha})}})}}},[y]),Km=(0,D.useCallback)((tt,ht)=>(xt,ma)=>{let Rt=xt.nativeEvent,bt=y.get(ma);if(T.current!==null||!bt||Rt.dndKit||Rt.defaultPrevented)return;let Kt={active:bt};tt(xt,ht.options,Kt)===!0&&(Rt.dndKit={capturedBy:ht.sensor},T.current=ma,Ei(xt,ht))},[y,Ei]),Fi=Ug(c,Km);jg(c),Lt(()=>{U&&L===va.Initializing&&S(va.Initialized)},[U,L]),(0,D.useEffect)(()=>{let{onDragMove:tt}=K.current,{active:ht,activatorEvent:xt,collisions:ma,over:Rt}=le.current;if(!ht||!xt)return;let bt={active:ht,activatorEvent:xt,collisions:ma,delta:{x:Co.x,y:Co.y},over:Rt};(0,Ha.unstable_batchedUpdates)(()=>{tt?.(bt),x({type:"onDragMove",event:bt})})},[Co.x,Co.y]),(0,D.useEffect)(()=>{let{active:tt,activatorEvent:ht,collisions:xt,droppableContainers:ma,scrollAdjustedTranslate:Rt}=le.current;if(!tt||T.current==null||!ht||!Rt)return;let{onDragOver:bt}=K.current,Kt=ma.get(Ai),vo=Kt&&Kt.rect.current?{id:Kt.id,rect:Kt.rect.current,data:Kt.data,disabled:Kt.disabled}:null,Ye={active:tt,activatorEvent:ht,collisions:xt,delta:{x:Rt.x,y:Rt.y},over:vo};(0,Ha.unstable_batchedUpdates)(()=>{Ti(vo),bt?.(Ye),x({type:"onDragOver",event:Ye})})},[Ai]),Lt(()=>{le.current={activatorEvent:P,active:H,activeNode:q,collisionRect:Lo,collisions:er,droppableRects:ge,draggableNodes:y,draggingNode:M,draggingNodeRect:z,droppableContainers:I,over:pa,scrollableAncestors:X,scrollAdjustedTranslate:Co},A.current={initial:z,translated:Lo}},[H,q,er,Lo,y,M,z,ge,I,pa,X,Co]),Bg({...Ce,delta:E,draggingRect:Lo,pointerCoordinates:Gt,scrollableAncestors:X,scrollableAncestorRects:Ue});let Xm=(0,D.useMemo)(()=>({active:H,activeNode:q,activeNodeRect:U,activatorEvent:P,collisions:er,containerNodeRect:ae,dragOverlay:w,draggableNodes:y,droppableContainers:I,droppableRects:ge,over:pa,measureDroppableContainers:Ae,scrollableAncestors:X,scrollableAncestorRects:Ue,measuringConfiguration:Y,measuringScheduled:he,windowRect:B}),[H,q,U,P,er,ae,w,y,I,ge,pa,Ae,X,Ue,Y,he,B]),jm=(0,D.useMemo)(()=>({activatorEvent:P,activators:Fi,active:H,activeNodeRect:U,ariaDescribedById:{draggable:G},dispatch:C,draggableNodes:y,over:pa,measureDroppableContainers:Ae}),[P,Fi,H,U,C,G,y,pa,Ae]);return D.default.createElement(Hd.Provider,{value:b},D.default.createElement(Ar.Provider,{value:jm},D.default.createElement(tu.Provider,{value:Xm},D.default.createElement(xn.Provider,{value:Gm},d)),D.default.createElement(oh,{disabled:s?.restoreFocus===!1})),D.default.createElement(fg,{...s,hiddenTextDescribedById:G}));function $m(){let tt=V?.autoScrollEnabled===!1,ht=typeof i=="object"?i.enabled===!1:i===!1,xt=v&&!tt&&!ht;return typeof i=="object"?{...i,enabled:xt}:{enabled:xt}}}),sh=(0,D.createContext)(null),Nd="button",lh="Draggable";function ou(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Oa(lh),{activators:l,activatorEvent:s,active:i,activeNodeRect:d,ariaDescribedById:c,draggableNodes:u,over:f}=(0,D.useContext)(Ar),{role:m=Nd,roleDescription:h="draggable",tabIndex:g=0}=r??{},p=i?.id===t,C=(0,D.useContext)(p?xn:sh),[x,b]=Lr(),[L,S]=Lr(),v=$g(l,t),k=ko(a);Lt(()=>(u.set(t,{id:t,key:n,node:x,activatorNode:L,data:k}),()=>{let E=u.get(t);E&&E.key===n&&u.delete(t)}),[u,t]);let y=(0,D.useMemo)(()=>({role:m,tabIndex:g,"aria-disabled":o,"aria-pressed":p&&m===Nd?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,m,g,p,h,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:d,attributes:y,isDragging:p,listeners:o?void 0:v,node:x,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:C}}function Tr(){return(0,D.useContext)(tu)}var ih="Droppable",dh={timeout:25};function Cn(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Oa(ih),{active:l,dispatch:s,over:i,measureDroppableContainers:d}=(0,D.useContext)(Ar),c=(0,D.useRef)({disabled:a}),u=(0,D.useRef)(!1),f=(0,D.useRef)(null),m=(0,D.useRef)(null),{disabled:h,updateMeasurementsFor:g,timeout:p}={...dh,...r},C=ko(g??o),x=(0,D.useCallback)(()=>{if(!u.current){u.current=!0;return}m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{d(Array.isArray(C.current)?C.current:[C.current]),m.current=null},p)},[p]),b=hn({callback:x,disabled:h||!l}),L=(0,D.useCallback)((y,E)=>{b&&(E&&(b.unobserve(E),u.current=!1),y&&b.observe(y))},[b]),[S,v]=Lr(L),k=ko(t);return(0,D.useEffect)(()=>{!b||!S.current||(b.disconnect(),u.current=!1,b.observe(S.current))},[S,b]),(0,D.useEffect)(()=>(s({type:qe.RegisterDroppable,element:{id:o,key:n,disabled:a,node:S,rect:f,data:k}}),()=>s({type:qe.UnregisterDroppable,key:n,id:o})),[o]),(0,D.useEffect)(()=>{a!==c.current.disabled&&(s({type:qe.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:S,over:i,setNodeRef:v}}function uh(e){let{animation:t,children:a}=e,[o,r]=(0,D.useState)(null),[n,l]=(0,D.useState)(null),s=vr(a);return!a&&!o&&s&&r(s),Lt(()=>{if(!n)return;let i=o?.key,d=o?.props.id;if(i==null||d==null){r(null);return}Promise.resolve(t(d,n)).then(()=>{r(null)})},[t,o,n]),D.default.createElement(D.default.Fragment,null,a,o?(0,D.cloneElement)(o,{ref:l}):null)}var ch={x:0,y:0,scaleX:1,scaleY:1};function fh(e){let{children:t}=e;return D.default.createElement(Ar.Provider,{value:eu},D.default.createElement(xn.Provider,{value:ch},t))}var ph={position:"fixed",touchAction:"none"},mh=e=>Po(e)?"transform 250ms ease":void 0,gh=(0,D.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:d,transition:c=mh}=e;if(!s)return null;let u=r?d:{...d,scaleX:1,scaleY:1},f={...ph,width:s.width,height:s.height,top:s.top,left:s.left,transform:Ct.Transform.toString(u),transformOrigin:r&&o?pg(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return D.default.createElement(a,{className:l,style:f,ref:t},n)}),hh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,d]of Object.entries(r))a.node.style.setProperty(i,d);l!=null&&l.active&&a.node.classList.remove(l.active)}},xh=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:Ct.Transform.toString(t)},{transform:Ct.Transform.toString(a)}]},bh={duration:250,easing:"ease",keyframes:xh,sideEffects:hh({styles:{active:{opacity:"0"}}})};function Ch(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Cr((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let d=Qd(l);if(!d)return;let{transform:c}=at(l).getComputedStyle(l),u=zd(c);if(!u)return;let f=typeof t=="function"?t:Lh(t);return Yd(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:r,transform:u})})}function Lh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...bh,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...d}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},u={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...u},m=r({...d,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[h]=m,g=m[m.length-1];if(JSON.stringify(h)===JSON.stringify(g))return;let p=o?.({active:l,dragOverlay:s,...d}),C=s.node.animate(m,{duration:t,easing:a,fill:"forwards"});return new Promise(x=>{C.onfinish=()=>{p?.(),x()}})}}var _d=0;function vh(e){return(0,D.useMemo)(()=>{if(e!=null)return _d++,_d},[e])}var ru=D.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:d=999}=e,{activatorEvent:c,active:u,activeNodeRect:f,containerNodeRect:m,draggableNodes:h,droppableContainers:g,dragOverlay:p,over:C,measuringConfiguration:x,scrollableAncestors:b,scrollableAncestorRects:L,windowRect:S}=Tr(),v=(0,D.useContext)(xn),k=vh(u?.id),y=au(l,{activatorEvent:c,active:u,activeNodeRect:f,containerNodeRect:m,draggingNodeRect:p.rect,over:C,overlayNodeRect:p.rect,scrollableAncestors:b,scrollableAncestorRects:L,transform:v,windowRect:S}),E=_s(f),I=Ch({config:o,draggableNodes:h,droppableContainers:g,measuringConfiguration:x}),R=E?p.setRef:void 0;return D.default.createElement(fh,null,D.default.createElement(uh,{animation:I},u&&k?D.default.createElement(gh,{key:k,id:u.id,ref:R,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:E,style:{zIndex:d,...r},transform:y},a):null))});var Fe=J(require("react"));function nu(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Ih(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Ln(e){return e!==null&&e>=0}function wh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Sh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var su=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=nu(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var vn={scaleX:1,scaleY:1},wn=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let d=n[l];return d?{x:0,y:a<l?d.top+d.height-(s.top+s.height):d.top-s.top,...vn}:null}let i=yh(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...vn}:r<a&&r>=l?{x:0,y:s.height+i,...vn}:{x:0,y:0,...vn}};function yh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var lu="Sortable",iu=Fe.default.createContext({activeIndex:-1,containerId:lu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:su,disabled:{draggable:!1,droppable:!1}});function Sn(e){let{children:t,id:a,items:o,strategy:r=su,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:d,measureDroppableContainers:c}=Tr(),u=Oa(lu,a),f=s.rect!==null,m=(0,Fe.useMemo)(()=>o.map(v=>typeof v=="object"&&"id"in v?v.id:v),[o]),h=l!=null,g=l?m.indexOf(l.id):-1,p=d?m.indexOf(d.id):-1,C=(0,Fe.useRef)(m),x=!wh(m,C.current),b=p!==-1&&g===-1||x,L=Sh(n);Lt(()=>{x&&h&&c(m)},[x,m,h,c]),(0,Fe.useEffect)(()=>{C.current=m},[m]);let S=(0,Fe.useMemo)(()=>({activeIndex:g,containerId:u,disabled:L,disableTransforms:b,items:m,overIndex:p,useDragOverlay:f,sortedRects:Ih(m,i),strategy:r}),[g,u,L.draggable,L.droppable,b,m,p,i,f,r]);return Fe.default.createElement(iu.Provider,{value:S},t)}var kh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return nu(a,o,r).indexOf(t)},Rh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:d}=e;return!d||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Ph={duration:200,easing:"ease"},du="transform",Dh=Ct.Transition.toString({property:du,duration:0,easing:"linear"}),Mh={roleDescription:"sortable"};function Ah(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Fe.useState)(null),s=(0,Fe.useRef)(a);return Lt(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let d=za(o.current,{ignoreTransform:!0}),c={x:i.left-d.left,y:i.top-d.top,scaleX:i.width/d.width,scaleY:i.height/d.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Fe.useEffect)(()=>{n&&l(null)},[n]),n}function yn(e){let{animateLayoutChanges:t=Rh,attributes:a,disabled:o,data:r,getNewIndex:n=kh,id:l,strategy:s,resizeObserverConfig:i,transition:d=Ph}=e,{items:c,containerId:u,activeIndex:f,disabled:m,disableTransforms:h,sortedRects:g,overIndex:p,useDragOverlay:C,strategy:x}=(0,Fe.useContext)(iu),b=Th(o,m),L=c.indexOf(l),S=(0,Fe.useMemo)(()=>({sortable:{containerId:u,index:L,items:c},...r}),[u,r,L,c]),v=(0,Fe.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:k,node:y,isOver:E,setNodeRef:I}=Cn({id:l,data:S,disabled:b.droppable,resizeObserverConfig:{updateMeasurementsFor:v,...i}}),{active:R,activatorEvent:A,activeNodeRect:H,attributes:T,setNodeRef:V,listeners:W,isDragging:P,over:N,setActivatorNodeRef:K,transform:G}=ou({id:l,data:S,attributes:{...Mh,...a},disabled:b.draggable}),$=Ld(I,V),Y=!!R,ge=Y&&!h&&Ln(f)&&Ln(p),Ae=!C&&P,he=Ae&&ge?G:null,ve=ge?he??(s??x)({rects:g,activeNodeRect:H,activeIndex:f,overIndex:p,index:L}):null,Ce=Ln(f)&&Ln(p)?n({id:l,items:c,activeIndex:f,overIndex:p}):L,xe=R?.id,U=(0,Fe.useRef)({activeId:xe,items:c,newIndex:Ce,containerId:u}),ae=c!==U.current.items,le=t({active:R,containerId:u,isDragging:P,isSorting:Y,id:l,index:L,items:c,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:U.current.activeId!=null}),Z=Ah({disabled:!le,index:L,node:y,rect:k});return(0,Fe.useEffect)(()=>{Y&&U.current.newIndex!==Ce&&(U.current.newIndex=Ce),u!==U.current.containerId&&(U.current.containerId=u),c!==U.current.items&&(U.current.items=c)},[Y,Ce,u,c]),(0,Fe.useEffect)(()=>{if(xe===U.current.activeId)return;if(xe!=null&&U.current.activeId==null){U.current.activeId=xe;return}let M=setTimeout(()=>{U.current.activeId=xe},50);return()=>clearTimeout(M)},[xe]),{active:R,activeIndex:f,attributes:T,data:S,rect:k,index:L,newIndex:Ce,items:c,isOver:E,isSorting:Y,isDragging:P,listeners:W,node:y,overIndex:p,over:N,setNodeRef:$,setActivatorNodeRef:K,setDroppableNodeRef:I,setDraggableNodeRef:V,transform:Z??ve,transition:w()};function w(){if(Z||ae&&U.current.newIndex===L)return Dh;if(!(Ae&&!Po(A)||!d)&&(Y||le))return Ct.Transition.toString({...d,property:du})}}function Th(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function In(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Eh=[ce.Down,ce.Right,ce.Up,ce.Left],kn=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Eh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(u=>{if(!u||u!=null&&u.disabled)return;let f=r.get(u.id);if(f)switch(e.code){case ce.Down:o.top<f.top&&i.push(u);break;case ce.Up:o.top>f.top&&i.push(u);break;case ce.Left:o.left>f.left&&i.push(u);break;case ce.Right:o.left<f.left&&i.push(u);break}});let d=gn({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Dr(d,"id");if(c===l?.id&&d.length>1&&(c=d[1].id),c!=null){let u=n.get(a.id),f=n.get(c),m=f?r.get(f.id):null,h=f?.node.current;if(h&&m&&u&&f){let p=Mr(h).some((v,k)=>s[k]!==v),C=uu(u,f),x=Fh(u,f),b=p||!C?{x:0,y:0}:{x:x?o.width-m.width:0,y:x?o.height-m.height:0},L={x:m.left,y:m.top};return b.x&&b.y?L:Na(L,b)}}}};function uu(e,t){return!In(e)||!In(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Fh(e,t){return!In(e)||!In(t)||!uu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var we=require("react");var Wp=require("@deepseek-ai/dsh-client-ui-primitives");var wu=J(require("react"),1);var Je=J(require("react"),1);var cu=J(require("react"),1),Oh=Object.defineProperty,Us=(e,t)=>Oh(e,"name",{value:t,configurable:!0});function Hs(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Us(Hs,"setRef");function fu(...e){return t=>{let a=!1,o=e.map(r=>{let n=Hs(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():Hs(e[r],null)}}}}Us(fu,"composeRefs");function de(...e){return cu.useCallback(fu(...e),e)}Us(de,"useComposedRefs");var Bh=Object.defineProperty,vt=(e,t)=>Bh(e,"name",{value:t,configurable:!0});function ot(e){let t=Je.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];r=Cu(r),Je.Children.forEach(r,f=>{if(xu(f)){s=!0;let m=f,h="child"in m.props?m.props.child:m.props.children;for(;qs(h)&&typeof Rn=="function";)h=Rn(h._payload);l=_h(m,h),i.push(l?.props?.children)}else i.push(f)}),l?l=Je.cloneElement(l,void 0,i):!s&&Je.Children.count(r)===1&&Je.isValidElement(r)&&(l=r);let d=l?hu(l):void 0,c=de(o,d);if(!l){if(r||r===0)throw new Error(s?qh(e):Uh(e));return r}let u=gu(n,l.props??{});return l.type!==Je.Fragment&&(u.ref=o?c:d),Je.cloneElement(l,u)});return t.displayName=`${e}.Slot`,t}vt(ot,"createSlot");var pu=ot("Slot"),mu=Symbol.for("radix.slottable");function Nh(e){let t=vt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=mu,t}vt(Nh,"createSlottable");var _h=vt((e,t)=>"child"in e.props?Je.isValidElement(t)?Je.cloneElement(t,void 0,e.props.children(t.props.children)):null:Je.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function gu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=Lu(n,r))}return{...e,...a}}vt(gu,"mergeProps");function hu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}vt(hu,"getElementRef");function xu(e){return Je.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===mu}vt(xu,"isSlottable");var Hh=Symbol.for("react.lazy");function qs(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Hh&&"_payload"in e&&bu(e._payload)}vt(qs,"isLazyComponent");function bu(e){return typeof e=="object"&&e!==null&&"then"in e}vt(bu,"isPromiseLike");function Cu(e){let t=e;for(;qs(t)&&typeof Rn=="function";)t=Rn(t._payload);return t}vt(Cu,"useUnwrappedLazy");function Lu(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}vt(Lu,"concatAriaDescribedby");var Uh=vt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),qh=vt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Rn=Je[" use ".trim().toString()];function vu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=vu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Iu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=vu(e))&&(o&&(o+=" "),o+=t);return o}function ie(...e){return Iu(e)}var Su=require("react/jsx-runtime");function Wh({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ie("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var re=wu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Su.jsx)(o?pu:"button",{className:Wh({variant:t,size:a,className:e}),ref:n,...r}));re.displayName="Button";var Wr=J(require("react"),1);var ye=J(require("react"),1);var zh=Object.defineProperty,Mo=(e,t)=>zh(e,"name",{value:t,configurable:!0}),yu=!!(typeof window<"u"&&window.document&&window.document.createElement);function Q(e,t,{checkForDefaultPrevented:a=!0}={}){return Mo(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}Mo(Q,"composeEventHandlers");function Vh(e){if(!yu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}Mo(Vh,"getOwnerWindow");function Ws(e){if(!yu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}Mo(Ws,"getOwnerDocument");function ku(e,t=!1){let{activeElement:a}=Ws(e);if(!a?.nodeName)return null;if(Ru(a)&&a.contentDocument)return ku(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=Ws(a).getElementById(o);if(r)return r}}return a}Mo(ku,"getActiveElement");function Ru(e){return e.tagName==="IFRAME"}Mo(Ru,"isFrame");var At=J(require("react"),1),zs=require("react/jsx-runtime"),Gh=Object.defineProperty,Mt=(e,t)=>Gh(e,"name",{value:t,configurable:!0});function Kh(e,t){let a=At.createContext(t);a.displayName=e+"Context";let o=Mt(n=>{let{children:l,...s}=n,i=At.useMemo(()=>s,Object.values(s));return(0,zs.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=At.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return Mt(r,"useContext"),[o,r]}Mt(Kh,"createContext");function Qe(e,t=[]){let a=[];function o(n,l){let s=At.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let d=Mt(u=>{let{scope:f,children:m,...h}=u,g=f?.[e]?.[i]||s,p=At.useMemo(()=>h,Object.values(h));return(0,zs.jsx)(g.Provider,{value:p,children:m})},"Provider");d.displayName=n+"Provider";function c(u,f,m={}){let{optional:h=!1}=m,g=f?.[e]?.[i]||s,p=At.useContext(g);if(p)return p;if(l!==void 0)return l;if(!h)throw new Error(`\`${u}\` must be used within \`${n}\``)}return Mt(c,"useContext"),[d,c]}Mt(o,"createContext");let r=Mt(()=>{let n=a.map(l=>At.createContext(l));return Mt(function(s){let i=s?.[e]||n;return At.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Pu(r,...t)]}Mt(Qe,"createContextScope");function Pu(...e){let t=e[0];if(e.length===1)return t;let a=Mt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return Mt(function(n){let l=o.reduce((s,{useScope:i,scopeName:d})=>{let u=i(n)[`__scope${d}`];return{...s,...u}},{});return At.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}Mt(Pu,"composeContextScopes");var Vs=J(require("react"),1);var Du=J(require("react"),1),pe=globalThis?.document?Du.useLayoutEffect:()=>{};var Xh=Object.defineProperty,jh=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),$h=Vs[" useId ".trim().toString()]||(()=>{}),Yh=0;function It(e){let[t,a]=Vs.useState($h());return pe(()=>{e||a(o=>o??String(Yh++))},[e]),e||(t?`radix-${t}`:"")}jh(It,"useId");var Tt=J(require("react"),1);var Pn=!1;var Bt=J(require("react"),1);var Ao=J(require("react"),1),Zh=Object.defineProperty,Jh=(e,t)=>Zh(e,"name",{value:t,configurable:!0}),Mu=Ao[" useEffectEvent ".trim().toString()],Au=Ao[" useInsertionEffect ".trim().toString()];function Gs(e){if(typeof Mu=="function")return Mu(e);let t=Ao.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Au=="function"?Au(()=>{t.current=e}):pe(()=>{t.current=e}),Ao.useMemo(()=>((...a)=>t.current?.(...a)),[])}Jh(Gs,"useEffectEvent");var Qh=Object.defineProperty,Er=(e,t)=>Qh(e,"name",{value:t,configurable:!0}),ex=Tt[" useInsertionEffect ".trim().toString()]||pe;function jt({prop:e,defaultProp:t,onChange:a=Er(()=>{},"onChange"),caller:o}){let[r,n,l]=Eu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Pn){let c=Tt.useRef(e!==void 0);Tt.useEffect(()=>{let u=c.current;u!==s&&console.warn(`${o} is changing from ${u?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let d=Tt.useCallback(c=>{if(s){let u=Fu(c)?c(e):c;u!==e&&l.current?.(u)}else n(c)},[s,e,n,l]);return[i,d]}Er(jt,"useControllableState");function Eu({defaultProp:e,onChange:t}){let[a,o]=Tt.useState(e),r=Tt.useRef(a),n=Tt.useRef(t);return ex(()=>{n.current=t},[t]),Tt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Er(Eu,"useUncontrolledState");function Fu(e){return typeof e=="function"}Er(Fu,"isFunction");var Tu=Symbol("RADIX:SYNC_STATE");function tx(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,d=Gs(l);if(Pn){let p=Bt.useRef(r!==void 0);Bt.useEffect(()=>{let C=p.current;C!==i&&console.warn(`${s} is changing from ${C?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[u,f]=Bt.useReducer((p,C)=>{if(C.type===Tu)return{...p,state:C.state};let x=e(p,C);return i&&!Object.is(x.state,p.state)&&d(x.state),x},...c),m=u.state,h=Bt.useRef(m);Bt.useEffect(()=>{h.current!==m&&(h.current=m,i||d(m))},[m,h,i]);let g=Bt.useMemo(()=>r!==void 0?{...u,state:r}:u,[u,r]);return Bt.useEffect(()=>{i&&!Object.is(r,u.state)&&f({type:Tu,state:r})},[r,u.state,i]),[g,f]}Er(tx,"useControllableStateReducer");var Ie=J(require("react"),1);var Ou=J(require("react"),1),Bu=J(require("react-dom"),1);var Nu=require("react/jsx-runtime"),ax=Object.defineProperty,ox=(e,t)=>ax(e,"name",{value:t,configurable:!0}),rx=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ue=rx.reduce((e,t)=>{let a=ot(`Primitive.${t}`),o=Ou.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Nu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Fr(e,t){e&&Bu.flushSync(()=>e.dispatchEvent(t))}ox(Fr,"dispatchDiscreteCustomEvent");var Or=J(require("react"),1),nx=Object.defineProperty,sx=(e,t)=>nx(e,"name",{value:t,configurable:!0}),_u=Or[" useInsertionEffect ".trim().toString()];function Ge(e){let t=Or.useRef(e);return typeof _u=="function"?_u(()=>{t.current=e}):pe(()=>{t.current=e}),Or.useMemo(()=>((...a)=>t.current?.(...a)),[])}sx(Ge,"useCallbackRef");var Uu=require("react/jsx-runtime"),lx=Object.defineProperty,Ke=(e,t)=>lx(e,"name",{value:t,configurable:!0}),Ks="dismissableLayer.update",ix="dismissableLayer.pointerDownOutside",dx="dismissableLayer.focusOutside",Hu,qu=Ie.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),To=Ie.forwardRef(Ke(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:d,...c}=t,u=Ie.useContext(qu),[f,m]=Ie.useState(null),h=f?.ownerDocument??globalThis?.document,[,g]=Ie.useState({}),p=de(a,m),C=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=x?C.indexOf(x):-1,L=f?C.indexOf(f):-1,S=u.layersWithOutsidePointerEventsDisabled.size>0,v=L>=b,k=Ie.useRef(!1),y=Wu(A=>{l?.(A),i?.(A),A.defaultPrevented||d?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:k,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:Ie.useCallback(A=>{if(!(A instanceof Node))return!1;let H=[...u.branches].some(T=>T.contains(A));return v&&!H},[u.branches,v])}),E=zu(A=>{if(r&&k.current)return;let H=A.target;[...u.branches].some(V=>V.contains(H))||(s?.(A),i?.(A),A.defaultPrevented||d?.())},h),I=f?L===C.length-1:!1,R=Ge(A=>{A.key==="Escape"&&(n?.(A),!A.defaultPrevented&&d&&(A.preventDefault(),d()))});return Ie.useEffect(()=>{if(I)return h.addEventListener("keydown",R,{capture:!0}),()=>h.removeEventListener("keydown",R,{capture:!0})},[h,I,R]),Ie.useEffect(()=>{if(f)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Hu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),Xs(),()=>{o&&(u.layersWithOutsidePointerEventsDisabled.delete(f),u.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Hu))}},[f,h,o,u]),Ie.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),Xs())},[f,u]),Ie.useEffect(()=>{let A=Ke(()=>g({}),"handleUpdate");return document.addEventListener(Ks,A),()=>document.removeEventListener(Ks,A)},[]),(0,Uu.jsx)(ue.div,{...c,ref:p,style:{pointerEvents:S?v?"auto":"none":void 0,...t.style},onFocusCapture:Q(t.onFocusCapture,E.onFocusCapture),onBlurCapture:Q(t.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Q(t.onPointerDownCapture,y.onPointerDownCapture)})},"DismissableLayer"));function js(){let e=Ie.useContext(qu),[t,a]=Ie.useState(null);return Ie.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ke(js,"useDismissableLayerSurface");var ux=Ke(()=>!0,"IS_TRUE");function Wu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=ux}=t,s=Ge(e),i=Ie.useRef(!1),d=Ie.useRef(!1),c=Ie.useRef(new Map),u=Ie.useRef(()=>{});return Ie.useEffect(()=>{function f(){d.current=!1,r.current=!1,c.current.clear()}Ke(f,"resetOutsideInteraction");function m(){return Array.from(c.current.values()).some(Boolean)}Ke(m,"isOutsideInteractionIntercepted");function h(b){if(!d.current)return;let L=b.target;L instanceof Node&&[...n].some(v=>v.contains(L))||c.current.set(b.type,!0),b.type==="click"&&window.setTimeout(()=>{d.current&&u.current()},0)}Ke(h,"handleInteractionCapture");function g(b){d.current&&c.current.set(b.type,!1)}Ke(g,"handleInteractionBubble");let p=Ke(b=>{if(b.target&&!i.current){let S=function(){a.removeEventListener("click",u.current);let k=m();f(),k||$s(ix,s,v,{discrete:!0})};var L=S;if(Ke(S,"handleAndDispatchPointerDownOutsideEvent"),!l(b.target)){a.removeEventListener("click",u.current),f(),i.current=!1;return}let v={originalEvent:b};d.current=!0,r.current=o&&b.button===0,c.current.clear(),!o||b.button!==0?S():(a.removeEventListener("click",u.current),u.current=S,a.addEventListener("click",u.current,{once:!0}))}else a.removeEventListener("click",u.current),f();i.current=!1},"handlePointerDown"),C=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let b of C)a.addEventListener(b,h,!0),a.addEventListener(b,g);let x=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(x),a.removeEventListener("pointerdown",p),a.removeEventListener("click",u.current);for(let b of C)a.removeEventListener(b,h,!0),a.removeEventListener(b,g)}},[a,s,o,r,n,l]),{onPointerDownCapture:Ke(()=>i.current=!0,"onPointerDownCapture")}}Ke(Wu,"usePointerDownOutside");function zu(e,t=globalThis?.document){let a=Ge(e),o=Ie.useRef(!1);return Ie.useEffect(()=>{let r=Ke(n=>{n.target&&!o.current&&$s(dx,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ke(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ke(()=>o.current=!1,"onBlurCapture")}}Ke(zu,"useFocusOutside");function Xs(){let e=new CustomEvent(Ks);document.dispatchEvent(e)}Ke(Xs,"dispatchUpdate");function $s(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?Fr(r,n):r.dispatchEvent(n)}Ke($s,"handleAndDispatchCustomEvent");var Te=J(require("react"),1);var el=require("react/jsx-runtime"),cx=Object.defineProperty,Ne=(e,t)=>cx(e,"name",{value:t,configurable:!0}),Ys="focusScope.autoFocusOnMount",Zs="focusScope.autoFocusOnUnmount",Vu={bubbles:!1,cancelable:!0},Eo=Te.forwardRef(Ne(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:l,onUnmountAutoFocus:s,...i}=t,[d,c]=Te.useState(null),u=Ge(l),f=Ge(s),m=Te.useRef(null),h=de(a,c),g=Te.useRef(n);Te.useEffect(()=>{g.current=n});let p=Te.useCallback(b=>b?d?.contains(b)?!0:!!g.current?.some(L=>L.contains(b)):!1,[d]),C=Te.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Te.useEffect(()=>{if(r){let v=function(I){if(C.paused||!d)return;let R=I.target;p(R)?m.current=R:ra(m.current,{select:!0})},k=function(I){if(C.paused||!d)return;let R=I.relatedTarget;R!==null&&(p(R)||ra(m.current,{select:!0}))},y=function(I){if(document.activeElement===document.body)for(let A of I)A.removedNodes.length>0&&ra(d)};var b=v,L=k,S=y;Ne(v,"handleFocusIn"),Ne(k,"handleFocusOut"),Ne(y,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",k);let E=new MutationObserver(y);return d&&E.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",k),E.disconnect()}}},[r,d,C.paused,p]),Te.useEffect(()=>{if(d){Gu.add(C);let b=document.activeElement;if(!d.contains(b)){let S=new CustomEvent(Ys,Vu);d.addEventListener(Ys,u),d.dispatchEvent(S),S.defaultPrevented||(Xu(Ju(al(d)),{select:!0}),document.activeElement===b&&ra(d))}return()=>{d.removeEventListener(Ys,u);let S=d.ownerDocument,v=CustomEvent;setTimeout(()=>{let k=new v(Zs,Vu);d.addEventListener(Zs,f),d.dispatchEvent(k),k.defaultPrevented||ra(b??S.body,{select:!0}),d.removeEventListener(Zs,f),Gu.remove(C)},0)}}},[d,u,f,C]);let x=Te.useCallback(b=>{if(!o&&!r||C.paused)return;let L=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,S=document.activeElement;if(L&&S){let v=b.currentTarget,[k,y]=ju(v);k&&y?!b.shiftKey&&S===y?(b.preventDefault(),o&&ra(k,{select:!0})):b.shiftKey&&S===k&&(b.preventDefault(),o&&ra(y,{select:!0})):S===v&&b.preventDefault()}},[o,r,C.paused]);return(0,el.jsx)(ue.div,{tabIndex:-1,...i,ref:h,onKeyDown:x})},"FocusScope")),Ku=Te.createContext(null);function Br({registry:e,children:t}){return e?(0,el.jsx)(Ku.Provider,{value:e,children:t}):t}Ne(Br,"FocusScopeBranchProvider");function Nr(){let[e,t]=Te.useState([]),a=Te.useMemo(()=>({add:Ne(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Ne(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Ne(Nr,"useFocusScopeBranchRegistry");function tl(e){let t=Te.useContext(Ku);Te.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Ne(tl,"useFocusScopeBranch");function Xu(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(ra(o,{select:t}),document.activeElement!==a)return}Ne(Xu,"focusFirst");function ju(e){let t=al(e),a=Js(t,e),o=Js(t.reverse(),e);return[a,o]}Ne(ju,"getTabbableEdges");function al(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ne(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Ne(al,"getTabbableCandidates");function Js(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):$u(o,{upTo:t})))return o}Ne(Js,"findVisible");function $u(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ne($u,"isHidden");function Yu(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Ne(Yu,"isSelectableInput");function ra(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&Yu(e)&&t&&e.select()}}Ne(ra,"focus");var Gu=Zu();function Zu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Qs(e,t),e.unshift(t)},remove(t){e=Qs(e,t),e[0]?.resume()}}}Ne(Zu,"createFocusScopesStack");function Qs(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ne(Qs,"arrayRemove");function Ju(e){return e.filter(t=>t.tagName!=="A")}Ne(Ju,"removeLinks");var Dn=J(require("react"),1),Qu=J(require("react-dom"),1);var ec=require("react/jsx-runtime"),fx=Object.defineProperty,px=(e,t)=>fx(e,"name",{value:t,configurable:!0}),Fo=Dn.forwardRef(px(function(t,a){let{container:o,...r}=t,[n,l]=Dn.useState(!1);pe(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Qu.createPortal((0,ec.jsx)(ue.div,{...r,ref:a}),s):null},"Portal"));var et=J(require("react"),1);var tc=J(require("react"),1),mx=Object.defineProperty,na=(e,t)=>mx(e,"name",{value:t,configurable:!0});function ac(e,t){return tc.useReducer((a,o)=>t[a][o]??a,e)}na(ac,"useStateMachine");var sa=na(e=>{let{present:t,children:a}=e,o=oc(t),r=typeof a=="function"?a({present:o.isPresent}):et.Children.only(a),n=rc(o.ref,nc(r));return typeof a=="function"||o.isPresent?et.cloneElement(r,{ref:n}):null},"Presence");function oc(e){let[t,a]=et.useState(),o=et.useRef(null),r=et.useRef(e),n=et.useRef("none"),l=et.useRef(void 0),s=e?"mounted":"unmounted",[i,d]=ac(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return et.useEffect(()=>{i==="mounted"?(n.current=l.current??Oo(o.current),l.current=void 0):n.current="none"},[i]),pe(()=>{let c=o.current,u=r.current;if(u!==e){let m=n.current,h=Oo(c);e?(l.current=h,d("MOUNT")):h==="none"||c?.display==="none"?d("UNMOUNT"):d(u&&m!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),pe(()=>{if(t){let c,u=t.ownerDocument.defaultView??window,f=na(h=>{let p=Oo(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&p&&(d("ANIMATION_END"),!r.current)){let C=t.style.animationFillMode;t.style.animationFillMode="forwards",c=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=C)})}},"handleAnimationEnd"),m=na(h=>{h.target===t&&(n.current=Oo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{u.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:et.useCallback(c=>{if(c){let u=getComputedStyle(c);o.current=u,l.current=Oo(u)}else o.current=null;a(c)},[])}}na(oc,"usePresence");function ol(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}na(ol,"setRef");function rc(...e){let t=et.useRef(e);return t.current=e,et.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=ol(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():ol(o[l],null)}}},[])}na(rc,"useStableComposedRefs");function Oo(e){return e?.animationName||"none"}na(Oo,"getAnimationName");function nc(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}na(nc,"getElementRef");var sc=J(require("react"),1),gx=Object.defineProperty,nl=(e,t)=>gx(e,"name",{value:t,configurable:!0}),Mn=0,Bo=null;function hx(e){return wa(),e.children}nl(hx,"FocusGuards");function wa(){sc.useEffect(()=>{Bo||(Bo={start:rl(),end:rl()});let{start:e,end:t}=Bo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Mn++,()=>{Mn===1&&(Bo?.start.remove(),Bo?.end.remove(),Bo=null),Mn=Math.max(0,Mn-1)}},[])}nl(wa,"useFocusGuards");function rl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}nl(rl,"createFocusGuard");var mt=function(){return mt=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},mt.apply(this,arguments)};function An(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function lc(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var Bn=J(require("react"));var rt=J(require("react"));var Va="right-scroll-bar-position",Ga="width-before-scroll-bar",sl="with-scroll-bars-hidden",ll="--removed-body-scroll-bar-size";function Tn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var ic=require("react");function dc(e,t){var a=(0,ic.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var En=J(require("react"));var xx=typeof window<"u"?En.useLayoutEffect:En.useEffect,uc=new WeakMap;function il(e,t){var a=dc(t||null,function(o){return e.forEach(function(r){return Tn(r,o)})});return xx(function(){var o=uc.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Tn(s,null)}),n.forEach(function(s){r.has(s)||Tn(s,l)})}uc.set(a,e)},[e]),a}function bx(e){return e}function Cx(e,t){t===void 0&&(t=bx);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},d=function(){return Promise.resolve().then(i)};d(),a={push:function(c){l.push(c),d()},filter:function(c){return l=l.filter(c),a}}}};return r}function dl(e){e===void 0&&(e={});var t=Cx(null);return t.options=mt({async:!0,ssr:!1},e),t}var cc=J(require("react")),fc=function(e){var t=e.sideCar,a=An(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return cc.createElement(o,mt({},a))};fc.isSideCarExport=!0;function ul(e,t){return e.useMedium(t),fc}var Fn=dl();var cl=function(){},_r=rt.forwardRef(function(e,t){var a=rt.useRef(null),o=rt.useState({onScrollCapture:cl,onWheelCapture:cl,onTouchMoveCapture:cl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,d=e.removeScrollBar,c=e.enabled,u=e.shards,f=e.sideCar,m=e.noRelative,h=e.noIsolation,g=e.inert,p=e.allowPinchZoom,C=e.as,x=C===void 0?"div":C,b=e.gapMode,L=An(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=f,v=il([a,t]),k=mt(mt({},L),r);return rt.createElement(rt.Fragment,null,c&&rt.createElement(S,{sideCar:Fn,removeScrollBar:d,shards:u,noRelative:m,noIsolation:h,inert:g,setCallbacks:n,allowPinchZoom:!!p,lockRef:a,gapMode:b}),l?rt.cloneElement(rt.Children.only(s),mt(mt({},k),{ref:v})):rt.createElement(x,mt({},k,{className:i,ref:v}),s))});_r.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};_r.classNames={fullWidth:Ga,zeroRight:Va};var Pe=J(require("react"));var _o=J(require("react"));var gc=J(require("react"));var pc;var mc=function(){if(pc)return pc;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Lx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mc();return t&&e.setAttribute("nonce",t),e}function vx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ix(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var fl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Lx())&&(vx(t,a),Ix(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var pl=function(){var e=fl();return function(t,a){gc.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var Hr=function(){var e=pl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var wx={left:0,top:0,right:0,gap:0},ml=function(e){return parseInt(e||"",10)||0},Sx=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[ml(a),ml(o),ml(r)]},gl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return wx;var t=Sx(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var yx=Hr(),No="data-scroll-locked",kx=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(sl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(No,`] {
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
  
  .`).concat(Va,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ga,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Va," .").concat(Va,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ga," .").concat(Ga,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(No,`] {
    `).concat(ll,": ").concat(s,`px;
  }
`)},hc=function(){var e=parseInt(document.body.getAttribute(No)||"0",10);return isFinite(e)?e:0},Rx=function(){_o.useEffect(function(){return document.body.setAttribute(No,(hc()+1).toString()),function(){var e=hc()-1;e<=0?document.body.removeAttribute(No):document.body.setAttribute(No,e.toString())}},[])},hl=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Rx();var n=_o.useMemo(function(){return gl(r)},[r]);return _o.createElement(yx,{styles:kx(n,!t,r,a?"":"!important")})};var xl=!1;if(typeof window<"u")try{Ur=Object.defineProperty({},"passive",{get:function(){return xl=!0,!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{xl=!1}var Ur,Ka=xl?{passive:!1}:!1;var Px=function(e){return e.tagName==="TEXTAREA"},xc=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Px(e)&&a[t]==="visible")},Dx=function(e){return xc(e,"overflowY")},Mx=function(e){return xc(e,"overflowX")},bl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=bc(e,o);if(r){var n=Cc(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Ax=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Tx=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},bc=function(e,t){return e==="v"?Dx(t):Mx(t)},Cc=function(e,t){return e==="v"?Ax(t):Tx(t)},Ex=function(e,t){return e==="h"&&t==="rtl"?-1:1},Lc=function(e,t,a,o,r){var n=Ex(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),d=!1,c=l>0,u=0,f=0;do{if(!s)break;var m=Cc(e,s),h=m[0],g=m[1],p=m[2],C=g-p-n*h;(h||C)&&bc(e,s)&&(u+=C,f+=h);var x=s.parentNode;s=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(u)<1||!r&&l>u)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(d=!0),d};var On=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},vc=function(e){return[e.deltaX,e.deltaY]},Ic=function(e){return e&&"current"in e?e.current:e},Fx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ox=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Bx=0,Ho=[];function wc(e){var t=Pe.useRef([]),a=Pe.useRef([0,0]),o=Pe.useRef(),r=Pe.useState(Bx++)[0],n=Pe.useState(Hr)[0],l=Pe.useRef(e);Pe.useEffect(function(){l.current=e},[e]),Pe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var g=lc([e.lockRef.current],(e.shards||[]).map(Ic),!0).filter(Boolean);return g.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),g.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=Pe.useCallback(function(g,p){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var C=On(g),x=a.current,b="deltaX"in g?g.deltaX:x[0]-C[0],L="deltaY"in g?g.deltaY:x[1]-C[1],S,v=g.target,k=Math.abs(b)>Math.abs(L)?"h":"v";if("touches"in g&&k==="h"&&v.type==="range")return!1;var y=window.getSelection(),E=y&&y.anchorNode,I=E?E===v||E.contains(v):!1;if(I)return!1;var R=bl(k,v);if(!R)return!0;if(R?S=k:(S=k==="v"?"h":"v",R=bl(k,v)),!R)return!1;if(!o.current&&"changedTouches"in g&&(b||L)&&(o.current=S),!S)return!0;var A=o.current||S;return Lc(A,p,g,A==="h"?b:L,!0)},[]),i=Pe.useCallback(function(g){var p=g;if(!(!Ho.length||Ho[Ho.length-1]!==n)){var C="deltaY"in p?vc(p):On(p),x=t.current.filter(function(S){return S.name===p.type&&(S.target===p.target||p.target===S.shadowParent)&&Fx(S.delta,C)})[0];if(x&&x.should){p.cancelable&&p.preventDefault();return}if(!x){var b=(l.current.shards||[]).map(Ic).filter(Boolean).filter(function(S){return S.contains(p.target)}),L=b.length>0?s(p,b[0]):!l.current.noIsolation;L&&p.cancelable&&p.preventDefault()}}},[]),d=Pe.useCallback(function(g,p,C,x){var b={name:g,delta:p,target:C,should:x,shadowParent:Nx(C)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(L){return L!==b})},1)},[]),c=Pe.useCallback(function(g){a.current=On(g),o.current=void 0},[]),u=Pe.useCallback(function(g){d(g.type,vc(g),g.target,s(g,e.lockRef.current))},[]),f=Pe.useCallback(function(g){d(g.type,On(g),g.target,s(g,e.lockRef.current))},[]);Pe.useEffect(function(){return Ho.push(n),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ka),document.addEventListener("touchmove",i,Ka),document.addEventListener("touchstart",c,Ka),function(){Ho=Ho.filter(function(g){return g!==n}),document.removeEventListener("wheel",i,Ka),document.removeEventListener("touchmove",i,Ka),document.removeEventListener("touchstart",c,Ka)}},[]);var m=e.removeScrollBar,h=e.inert;return Pe.createElement(Pe.Fragment,null,h?Pe.createElement(n,{styles:Ox(r)}):null,m?Pe.createElement(hl,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Nx(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Sc=ul(Fn,wc);var yc=Bn.forwardRef(function(e,t){return Bn.createElement(_r,mt({},e,{ref:t,sideCar:Sc}))});yc.classNames=_r.classNames;var Xa=yc;var _x=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Uo=new WeakMap,Nn=new WeakMap,_n={},Cl=0,kc=function(e){return e&&(e.host||kc(e.parentNode))},Hx=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=kc(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Ux=function(e,t,a,o){var r=Hx(t,Array.isArray(e)?e:[e]);_n[a]||(_n[a]=new WeakMap);var n=_n[a],l=[],s=new Set,i=new Set(r),d=function(u){!u||s.has(u)||(s.add(u),d(u.parentNode))};r.forEach(d);var c=function(u){!u||i.has(u)||Array.prototype.forEach.call(u.children,function(f){if(s.has(f))c(f);else try{var m=f.getAttribute(o),h=m!==null&&m!=="false",g=(Uo.get(f)||0)+1,p=(n.get(f)||0)+1;Uo.set(f,g),n.set(f,p),l.push(f),g===1&&h&&Nn.set(f,!0),p===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(C){console.error("aria-hidden: cannot operate on ",f,C)}})};return c(t),s.clear(),Cl++,function(){l.forEach(function(u){var f=Uo.get(u)-1,m=n.get(u)-1;Uo.set(u,f),n.set(u,m),f||(Nn.has(u)||u.removeAttribute(o),Nn.delete(u)),m||u.removeAttribute(a)}),Cl--,Cl||(Uo=new WeakMap,Uo=new WeakMap,Nn=new WeakMap,_n={})}},qo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||_x(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Ux(o,r,a,"aria-hidden")):function(){return null}};var _e=require("react/jsx-runtime"),qx=Object.defineProperty,wt=(e,t)=>qx(e,"name",{value:t,configurable:!0}),vl="Dialog",[Rc,DS]=Qe(vl),[Wx,$t]=Rc(vl),Pc=wt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=ye.useRef(null),i=ye.useRef(null),{nodes:d,registry:c}=Nr(),[u,f]=jt({prop:o,defaultProp:r??!1,onChange:n,caller:vl}),[m,h]=ye.useState(0),[g,p]=ye.useState(0);return(0,_e.jsx)(Wx,{scope:t,triggerRef:s,contentRef:i,contentId:It(),titleId:It(),descriptionId:It(),titlePresent:m>0,descriptionPresent:g>0,setTitleCount:h,setDescriptionCount:p,open:u,onOpenChange:f,onOpenToggle:ye.useCallback(()=>f(C=>!C),[f]),modal:l,branchNodes:d,branchRegistry:c,children:a})},"Dialog");var Dc="DialogPortal",[zx,Mc]=Rc(Dc,{forceMount:void 0}),Ac=wt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=$t(Dc,t);return(0,_e.jsx)(zx,{scope:t,forceMount:a,children:ye.Children.map(o,l=>(0,_e.jsx)(sa,{present:a||n.open,children:(0,_e.jsx)(Fo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Ll="DialogOverlay",Il=ye.forwardRef(wt(function(t,a){let o=Mc(Ll,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=$t(Ll,t.__scopeDialog);return l.modal?(0,_e.jsx)(sa,{present:r||l.open,children:(0,_e.jsx)(Gx,{...n,ref:a})}):null},"DialogOverlay")),Vx=ot("DialogOverlay.RemoveScroll"),Gx=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=$t(Ll,o),l=js(),s=de(a,l);return(0,_e.jsx)(Xa,{as:Vx,allowPinchZoom:!0,shards:ye.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,_e.jsx)(ue.div,{"data-state":kl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),qr="DialogContent",wl=ye.forwardRef(wt(function(t,a){let o=Mc(qr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=$t(qr,t.__scopeDialog);return(0,_e.jsx)(sa,{present:r||l.open,children:l.modal?(0,_e.jsx)(Kx,{...n,ref:a}):(0,_e.jsx)(Xx,{...n,ref:a})})},"DialogContent")),Kx=ye.forwardRef(wt(function(t,a){let o=$t(qr,t.__scopeDialog),r=ye.useRef(null),n=de(a,o.contentRef,r);return ye.useEffect(()=>{let l=r.current;if(l)return qo(l)},[]),(0,_e.jsx)(Tc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:Q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:Q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Xx=ye.forwardRef(wt(function(t,a){let o=$t(qr,t.__scopeDialog),r=ye.useRef(!1),n=ye.useRef(!1);return(0,_e.jsx)(Tc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Tc=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,"aria-describedby":s,children:i,...d}=t,c=$t(qr,o);return wa(),(0,_e.jsx)(Br,{registry:c.branchRegistry,children:(0,_e.jsx)(Eo,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,_e.jsx)(To,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?Fc(s,c.descriptionId):s,"data-state":kl(c.open),...d,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),Sl=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=$t("DialogTitle",o),{setTitleCount:l}=n;return pe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,_e.jsx)(ue.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),yl=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=$t("DialogDescription",o),{setDescriptionCount:l}=n;return pe(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,_e.jsx)(ue.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),jx="DialogClose",Ec=ye.forwardRef(wt(function(t,a){let{__scopeDialog:o,...r}=t,n=$t(jx,o);return(0,_e.jsx)(ue.button,{type:"button",...r,ref:a,onClick:Q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Fc(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}wt(Fc,"concatAriaDescribedby");function kl(e){return e?"open":"closed"}wt(kl,"getState");var Bc=require("react"),Rl="dsh-kanban",Nc={expandWorkspaces:"\u5C55\u5F00\u5DE5\u4F5C\u533A\u5217\u8868",collapseWorkspaces:"\u6298\u53E0\u5DE5\u4F5C\u533A\u5217\u8868",workspace:"\u5DE5\u4F5C\u533A",selectWorkspace:"\u9009\u62E9\u5DE5\u4F5C\u533A",selectWorkspaceHint:"\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u533A\uFF0C\u67E5\u770B\u548C\u7BA1\u7406\u5B83\u7684\u4EFB\u52A1\u3002",noWorkspaces:"\u6682\u65E0\u5DE5\u4F5C\u533A\uFF0C\u8BF7\u5148\u5728\u5DE6\u4FA7\u6DFB\u52A0\u5DE5\u4F5C\u533A\u3002",loadingWorkspaces:"\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026",searchCards:"\u641C\u7D22\u4EFB\u52A1",cardNoLongerExists:"\u8FD9\u5F20\u5361\u7247\u5DF2\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u4FEE\u6539\u3002",searchPlaceholder:"\u641C\u7D22\u6807\u9898\u3001\u63CF\u8FF0\u3001\u8BC4\u8BBA\u6216 ID\u2026",clearSearch:"\u6E05\u7A7A\u641C\u7D22",searchResults:"\u627E\u5230 {count} \u5F20\u5361\u7247",matchComment:"\u8BC4\u8BBA\u5339\u914D",matchDescription:"\u63CF\u8FF0\u5339\u914D",images:"\u56FE\u7247",discardImagesDesc:"\u672A\u4E0A\u4F20\u7684\u56FE\u7247\u548C\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u7EE7\u7EED\uFF1F",addImages:"\u6DFB\u52A0\u56FE\u7247",imagesEmpty:"\u7C98\u8D34\u622A\u56FE\u6216\u62D6\u5165\u56FE\u7247\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u6587\u4EF6\u3002",imagesHint:"PNG\u3001JPEG\u3001WebP \xB7 \u6BCF\u5F20\u6700\u591A {size} MiB \xB7 \u6700\u591A {count} \u5F20",imagesSaveHint:"\u56FE\u7247\u6DFB\u52A0\u548C\u79FB\u9664\u540E\u7ACB\u5373\u4FDD\u5B58\u3002",imagesDraftHint:"\u521B\u5EFA\u4EFB\u52A1\u540E\u4E0A\u4F20\uFF0C\u53D6\u6D88\u65B0\u5EFA\u4E0D\u4F1A\u4FDD\u5B58\u56FE\u7247\u3002",imagesUnavailable:"\u6B64\u5DE5\u4F5C\u533A\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u56FE\u7247\u3002\u8BF7\u68C0\u67E5\u5DE5\u4F5C\u533A\u662F\u5426\u53EF\u5199\uFF0C\u4EE5\u53CA DSH \u662F\u5426\u652F\u6301\u56FE\u7247\u3002",imageUploading:"\u6B63\u5728\u4E0A\u4F20\u2026",imagePending:"\u7B49\u5F85\u521B\u5EFA\u4EFB\u52A1",imageLoadFailed:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",loadingImage:"\u52A0\u8F7D\u56FE\u7247\u2026",imageUploadFailed:"\u4E0A\u4F20\u5931\u8D25",imageUploadPartial:"\u4EFB\u52A1\u5DF2\u4FDD\u5B58\uFF0C\u90E8\u5206\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageInvalidType:"\u8BF7\u9009\u62E9 PNG\u3001JPEG \u6216 WebP \u56FE\u7247\u3002",imageTooLarge:"\u56FE\u7247\u4E3A\u7A7A\u6216\u8D85\u8FC7 {size} MiB\u3002",imageTooMany:"\u6BCF\u5F20\u5361\u7247\u6700\u591A\u6DFB\u52A0 {count} \u5F20\u56FE\u7247\u3002",imagePreview:"\u67E5\u770B\u56FE\u7247 {number}",imageRemove:"\u79FB\u9664\u56FE\u7247 {number}",imageRemoveFailed:"\u56FE\u7247\u79FB\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",imageRemoving:"\u6B63\u5728\u79FB\u9664\u2026",retry:"\u91CD\u8BD5",remove:"\u79FB\u9664",imagesChatHint:"\u6B64\u4EFB\u52A1\u7684 {count} \u5F20\u56FE\u7247\u5DF2\u9644\u5728\u804A\u5929\u8349\u7A3F\u4E2D\u3002",chatImagesUnavailable:"\u5F53\u524D DSH \u65E0\u6CD5\u6DFB\u52A0\u804A\u5929\u56FE\u7247\u9644\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u540E\u91CD\u8BD5\u3002",chatImagesBusy:"\u804A\u5929\u6846\u6B63\u5728\u53D1\u9001\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",actImageAdded:"\u6DFB\u52A0\u4E86\u56FE\u7247",actImageRemoved:"\u79FB\u9664\u4E86\u56FE\u7247",boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",actionRetry:"\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002",confirmDelete:"\u786E\u8BA4\u5220\u9664",discardChanges:"\u653E\u5F03\u4FEE\u6539",discardCommentDesc:"\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u5E26\u5165\u5BF9\u8BDD\uFF0C\u786E\u5B9A\u653E\u5F03\u8BC4\u8BBA\u5E76\u7EE7\u7EED\uFF1F",discardAndContinue:"\u653E\u5F03\u5E76\u7EE7\u7EED",discardChangesDesc:"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u6216\u672A\u53D1\u9001\u7684\u8BC4\u8BBA\uFF0C\u786E\u5B9A\u653E\u5F03\u5E76\u5173\u95ED\uFF1F",deleteCardDesc:"\u5220\u9664\u6B64\u5361\u7247\u53CA\u5176\u8BC4\u8BBA\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",deleteColumnDesc:"\u5220\u9664\u5217\u8868\u300C{column}\u300D\uFF1F\u5361\u7247\u5C06\u79FB\u5230\u5269\u4F59\u7684\u7B2C\u4E00\u5217\u3002",deleteLabelDesc:"\u5220\u9664\u6807\u7B7E\u300C{label}\u300D\uFF1F\u6B64\u6807\u7B7E\u5C06\u4ECE\u6240\u6709\u5361\u7247\u4E2D\u79FB\u9664\u3002",clearFilter:"\u6E05\u9664\u7B5B\u9009",noMatchingCards:"\u65E0\u5339\u914D\u5361\u7247",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",taskDetails:"\u4EFB\u52A1\u8BE6\u60C5",resizeTaskDetails:"\u8C03\u6574\u4EFB\u52A1\u8BE6\u60C5\u5BBD\u5EA6",resizeTaskDetailsHint:"\u62D6\u52A8\u6216\u4F7F\u7528\u5DE6\u53F3\u65B9\u5411\u952E\u8C03\u6574\u5BBD\u5EA6\uFF0CHome \u6700\u7A84\uFF0CEnd \u6700\u5BBD\u3002",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldDueDate:"\u622A\u6B62\u65E5\u671F",fieldCompletedDate:"\u5B8C\u6210\u65E5\u671F",completedDateUnknown:"\u672A\u77E5",completedDateUnknownHint:"\u8FD9\u5F20\u5361\u7247\u6CA1\u6709\u5B8C\u6210\u65F6\u95F4\u8BB0\u5F55\u3002",today:"\u4ECA\u5929",tomorrow:"\u660E\u5929",nextWeek:"\u4E00\u5468\u540E",clearDate:"\u6E05\u9664\u65E5\u671F",dueToday:"\u4ECA\u5929\u5230\u671F",overdue:"\u5DF2\u903E\u671F",overdueDays:"\u5DF2\u903E\u671F {days} \u5929",shortDate:"{month}\u6708{day}\u65E5",yearDate:"{year}\u5E74{month}\u6708{day}\u65E5",dueDateFilter:"\u6309\u622A\u6B62\u65E5\u671F\u7B5B\u9009",completedColumn:"\u5B8C\u6210\u5217",noCompletedColumn:"\u672A\u8BBE\u7F6E",completedColumnHint:"\u79FB\u5165\u6B64\u5217\u7684\u4EFB\u52A1\u89C6\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u4E0D\u8BA1\u5165\u5230\u671F\u548C\u903E\u671F\u7B5B\u9009\u3002\u66F4\u6362\u5B8C\u6210\u5217\u540E\uFF0C\u65B0\u5B8C\u6210\u5217\u4E2D\u5DF2\u6709\u5361\u7247\u7684\u5B8C\u6210\u65E5\u671F\u5C06\u663E\u793A\u4E3A\u672A\u77E5\u3002",completed:"\u5DF2\u5B8C\u6210",incomplete:"\u672A\u5B8C\u6210",completionStatus:"\u5B8C\u6210\u72B6\u6001",feedback:"\u53CD\u9988\u4E0E\u5EFA\u8BAE \xB7 GitHub",actDueDate:"\u622A\u6B62\u65E5\u671F {from} \u2192 {to}",actCompletedColumn:"\u5B8C\u6210\u5217 {from} \u2192 {to}",fieldNote:"\u63CF\u8FF0",notePlaceholder:"\u4F7F\u7528 Markdown \u63CF\u8FF0\u4EFB\u52A1\u2026",editNote:"\u7F16\u8F91",finishEditingNote:"\u5B8C\u6210\u7F16\u8F91",markdownEditHint:"Markdown \u539F\u6587 \xB7 \u70B9\u51FB\u4FDD\u5B58\u540E\u751F\u6548",emptyNote:"\u6682\u65E0\u63CF\u8FF0\uFF0C\u70B9\u51FB\u7F16\u8F91\u6DFB\u52A0\u3002",copyCode:"\u590D\u5236\u4EE3\u7801",copiedCode:"\u5DF2\u590D\u5236",footnotes:"\u811A\u6CE8",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u521B\u5EFA\u65B0\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u52A8\u5DE6\u4FA7\u8C03\u6574\u987A\u5E8F\uFF0C\u540D\u79F0\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLists:"\u770B\u677F\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u70B9\u51FB\u540D\u79F0\u6216\u8272\u70B9\u7F16\u8F91\uFF0C\u4FEE\u6539\u540E\u81EA\u52A8\u4FDD\u5B58\u3002",boardLabels:"\u4EFB\u52A1\u6807\u7B7E",noLabelsHint:"\u6682\u65E0\u6807\u7B7E\uFF0C\u5728\u4E0B\u65B9\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u3002",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Yx={expandWorkspaces:"Expand workspaces",collapseWorkspaces:"Collapse workspaces",workspace:"Workspace",selectWorkspace:"Select workspace",selectWorkspaceHint:"Select a workspace to view and manage its tasks.",noWorkspaces:"No workspaces yet. Add one in the sidebar first.",loadingWorkspaces:"Loading workspaces\u2026",searchCards:"Search tasks",cardNoLongerExists:"This card was deleted. Changes cannot be saved.",searchPlaceholder:"Search titles, descriptions, comments or IDs\u2026",clearSearch:"Clear search",searchResults:"{count} matching cards",matchComment:"Comment match",matchDescription:"Description match",images:"Images",discardImagesDesc:"Pending images and unsent comments will not be included. Discard them and continue?",addImages:"Add images",imagesEmpty:"Paste a screenshot, drop images here, or choose files.",imagesHint:"PNG, JPEG, WebP \xB7 Up to {size} MiB each \xB7 {count} images per card",imagesSaveHint:"Adding and removing images saves immediately.",imagesDraftHint:"Images upload after the task is created. Canceling saves nothing.",imagesUnavailable:"Images cannot be saved here. Check that the workspace is writable and DSH supports images.",imageUploading:"Uploading\u2026",imagePending:"Waiting for task creation",imageLoadFailed:"Image failed to load",loadingImage:"Loading image\u2026",imageUploadFailed:"Upload failed",imageUploadPartial:"Task saved. Some image uploads failed; retry them below.",imageInvalidType:"Choose a PNG, JPEG or WebP image.",imageTooLarge:"Image is empty or exceeds {size} MiB.",imageTooMany:"A card can have at most {count} images.",imagePreview:"View image {number}",imageRemove:"Remove image {number}",imageRemoveFailed:"Could not remove the image. Try again.",imageRemoving:"Removing\u2026",retry:"Retry",remove:"Remove",imagesChatHint:"The task\u2019s {count} images are attached to this draft.",chatImagesUnavailable:"This DSH cannot add chat image attachments. Please upgrade and retry.",chatImagesBusy:"The composer is sending. Please retry shortly.",actImageAdded:"Added an image",actImageRemoved:"Removed an image",boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",actionRetry:"The action did not complete. Please try again.",confirmDelete:"Confirm delete",discardChanges:"Discard changes",discardCommentDesc:"Unsent comments are not copied to chat. Discard the comment and continue?",discardAndContinue:"Discard and continue",discardChangesDesc:"Discard unsaved changes or unsent comments and close?",deleteCardDesc:"Delete this card and its comments? This cannot be undone.",deleteColumnDesc:'Delete list "{column}"? Its cards will move to the first remaining list.',deleteLabelDesc:'Delete label "{label}"? It will be removed from all cards.',clearFilter:"Clear filter",noMatchingCards:"No matching cards",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",taskDetails:"Task details",resizeTaskDetails:"Resize task details",resizeTaskDetailsHint:"Drag or use Left/Right to resize; Home for minimum, End for maximum.",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldDueDate:"Due date",fieldCompletedDate:"Completed at",completedDateUnknown:"Unknown",completedDateUnknownHint:"No completion time was recorded for this card.",today:"Today",tomorrow:"Tomorrow",nextWeek:"In one week",clearDate:"Clear date",dueToday:"Due today",overdue:"Overdue",overdueDays:"Overdue by {days} days",shortDate:"{month}/{day}",yearDate:"{year}/{month}/{day}",dueDateFilter:"Filter by due date",completedColumn:"Completed list",noCompletedColumn:"Not set",completedColumnHint:"Tasks in this list are complete and excluded from due and overdue filters. Changing this list resets completion dates; cards already in the new list will show an unknown completion date.",completed:"Completed",incomplete:"Incomplete",completionStatus:"Completion status",feedback:"Feedback \xB7 GitHub",actDueDate:"Due date {from} \u2192 {to}",actCompletedColumn:"Completed list {from} \u2192 {to}",fieldNote:"Description",notePlaceholder:"Describe the task in Markdown\u2026",editNote:"Edit",finishEditingNote:"Done editing",markdownEditHint:"Markdown source \xB7 Apply changes with Save",emptyNote:"No description yet. Select Edit to add one.",copyCode:"Copy code",copiedCode:"Copied",footnotes:"Footnotes",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Create new conversation",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder. Name changes save automatically.",boardLists:"Board lists",newColumnPlaceholder:"New list name",labelEditDesc:"Edit a name or color. Changes save automatically.",boardLabels:"Task labels",noLabelsHint:"No labels yet. Add your first one below.",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},ja=null,Pl=null;function _c(e){let t=e.get("locale");t!==void 0&&(ja=t,e.effect(()=>t.register(Rl,"zh",Nc),"dsh-kanban: Chinese dictionary"),e.effect(()=>t.register(Rl,"en",Yx),"dsh-kanban: English dictionary"),Pl=t.bind(Rl))}function lt(e){return Pl?Pl(e):Nc[e]??e}var Zx=e=>ja&&typeof ja.subscribe=="function"?ja.subscribe(e):()=>{},Oc=()=>ja&&typeof ja.getSnapshot=="function"?ja.getSnapshot():null;function ke(){return(0,Bc.useSyncExternalStore)(Zx,Oc,Oc),lt}var gt=require("react/jsx-runtime"),Wo=Pc;var Jx=Ac;var Hc=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(Il,{ref:a,className:ie("kanban-portal kanban-dialog-overlay",e),...t}));Hc.displayName=Il.displayName;var zr=Wr.forwardRef(({className:e,children:t,...a},o)=>{let r=ke();return(0,gt.jsxs)(Jx,{children:[(0,gt.jsx)(Hc,{}),(0,gt.jsxs)(wl,{ref:o,className:ie("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,gt.jsxs)(Ec,{className:"kanban-dialog-close",children:[(0,gt.jsx)(st,{className:"kanban-dialog-close-icon"}),(0,gt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});zr.displayName=wl.displayName;var $a=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-header",e),...t});$a.displayName="DialogHeader";var Ya=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-body",e),...t});Ya.displayName="DialogBody";var Za=({className:e,...t})=>(0,gt.jsx)("div",{className:ie("kanban-dialog-footer",e),...t});Za.displayName="DialogFooter";var Ja=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(Sl,{ref:a,className:ie("kanban-dialog-title",e),...t}));Ja.displayName=Sl.displayName;var Vr=Wr.forwardRef(({className:e,...t},a)=>(0,gt.jsx)(yl,{ref:a,className:ie("kanban-dialog-description",e),...t}));Vr.displayName=yl.displayName;var it=J(require("react"),1);var qc=require("react-dom"),Wc=require("@deepseek-ai/dsh-client-ui-primitives");var St=require("react/jsx-runtime"),zc="dsh-kanban:card-drawer-width",Qx=720,Dl=420;function eb(){try{let e=Number(window.localStorage.getItem(zc));if(Number.isFinite(e)&&e>0)return e}catch{}return Qx}function Uc(e){try{window.localStorage.setItem(zc,String(e))}catch{}}var Ml=it.forwardRef(({open:e,onClose:t,title:a,className:o,children:r,id:n,style:l,...s},i)=>{let d=it.useRef(null);it.useImperativeHandle(i,()=>d.current,[e]),(0,Wc.useModalLayer)(d,e,t);let c=ke(),u=it.useId(),f=n??u,m=`${u}-resize-hint`,[h,g]=it.useState(eb),[p,C]=it.useState(()=>window.innerWidth),[x,b]=it.useState(!1),L=it.useRef(null),S=p<=600,v=Math.min(1e3,p-64),k=I=>Math.max(Dl,Math.min(v,I)),y=S?p:k(h);it.useEffect(()=>{let I=()=>{L.current&&(g(L.current.preferredWidth),L.current=null,b(!1)),C(window.innerWidth)};return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);function E(I,R){let A=L.current;!A||A.pointerId!==I.pointerId||(L.current=null,b(!1),R?g(A.preferredWidth):Uc(A.lastWidth),I.currentTarget.hasPointerCapture(I.pointerId)&&I.currentTarget.releasePointerCapture(I.pointerId))}return e?(0,qc.createPortal)((0,St.jsxs)(St.Fragment,{children:[(0,St.jsx)("div",{className:"kanban-portal kanban-dialog-overlay","aria-hidden":"true",onClick:t}),(0,St.jsxs)("div",{...s,ref:d,role:"dialog","aria-modal":"true","aria-label":a,tabIndex:-1,"data-state":"open",id:f,className:ie("kanban-portal kanban-dialog-content kanban-drawer-content",o),style:{...l,width:y},"data-resizing":x||void 0,children:[r,!S&&(0,St.jsxs)(St.Fragment,{children:[(0,St.jsx)("div",{className:"kanban-drawer-resize",role:"separator",tabIndex:0,"aria-label":c("resizeTaskDetails"),"aria-describedby":m,"aria-orientation":"vertical","aria-valuemin":Dl,"aria-valuemax":v,"aria-valuenow":y,"aria-controls":f,title:c("resizeTaskDetailsHint"),onPointerDown:I=>{I.button!==0||L.current||(I.preventDefault(),I.currentTarget.focus(),I.currentTarget.setPointerCapture(I.pointerId),L.current={pointerId:I.pointerId,x:I.clientX,width:y,preferredWidth:h,lastWidth:y},b(!0))},onPointerMove:I=>{let R=L.current;if(!R||R.pointerId!==I.pointerId)return;let A=k(R.width+R.x-I.clientX);R.lastWidth=A,g(A)},onPointerUp:I=>E(I,!1),onPointerCancel:I=>E(I,!0),onLostPointerCapture:I=>E(I,!0),onKeyDown:I=>{let R;if(I.key==="ArrowLeft")R=k(y+32);else if(I.key==="ArrowRight")R=k(y-32);else if(I.key==="Home")R=Dl;else if(I.key==="End")R=v;else return;I.preventDefault(),g(R),Uc(R)}}),(0,St.jsx)("span",{id:m,className:"kanban-sr-only",children:c("resizeTaskDetailsHint")})]}),(0,St.jsx)("button",{type:"button",className:"kanban-dialog-close","aria-label":c("close"),onClick:t,children:(0,St.jsx)(st,{className:"kanban-dialog-close-icon"})})]})]}),document.body):null});Ml.displayName="DrawerContent";var Vc=J(require("react"),1);var Gc=require("react/jsx-runtime"),Et=Vc.forwardRef(({className:e,type:t,...a},o)=>(0,Gc.jsx)("input",{type:t,className:ie("kanban-input",e),ref:o,...a}));Et.displayName="Input";var jc=J(require("react"),1);var Kc=J(require("react"),1);var Xc=require("react/jsx-runtime"),tb=Object.defineProperty,ab=(e,t)=>tb(e,"name",{value:t,configurable:!0}),Al=Kc.forwardRef(ab(function(t,a){return(0,Xc.jsx)(ue.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var $c=require("react/jsx-runtime"),dt=jc.forwardRef(({className:e,...t},a)=>(0,$c.jsx)(Al,{ref:a,className:ie("kanban-label",e),...t}));dt.displayName=Al.displayName;var Pa=J(require("react"),1);var _=J(require("react"),1),Vl=J(require("react-dom"),1);var rb=Object.defineProperty,nb=(e,t)=>rb(e,"name",{value:t,configurable:!0});function Hn(e,[t,a]){return Math.min(a,Math.max(t,e))}nb(Hn,"clamp");var Nt=J(require("react"),1);var qn=require("react/jsx-runtime"),ze=J(require("react"),1);var Sa=require("react/jsx-runtime");var sb=Object.defineProperty,We=(e,t)=>sb(e,"name",{value:t,configurable:!0});function Qa(e){let t=e+"CollectionProvider",[a,o]=Qe(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=We(g=>{let{scope:p,children:C}=g,x=Nt.useRef(null),b=Nt.useRef(new Map).current;return(0,qn.jsx)(r,{scope:p,itemMap:b,collectionRef:x,children:C})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=ot(s),d=Nt.forwardRef((g,p)=>{let{scope:C,children:x}=g,b=n(s,C),L=de(p,b.collectionRef);return(0,qn.jsx)(i,{ref:L,children:x})});d.displayName=s;let c=e+"CollectionItemSlot",u="data-radix-collection-item",f=ot(c),m=Nt.forwardRef((g,p)=>{let{scope:C,children:x,...b}=g,L=Nt.useRef(null),S=de(p,L),v=n(c,C);return Nt.useEffect(()=>(v.itemMap.set(L,{ref:L,...b}),()=>{v.itemMap.delete(L)})),(0,qn.jsx)(f,{[u]:"",ref:S,children:x})});m.displayName=c;function h(g){let p=n(e+"CollectionConsumer",g);return Nt.useCallback(()=>{let x=p.collectionRef.current;if(!x)return[];let b=Array.from(x.querySelectorAll(`[${u}]`));return Array.from(p.itemMap.values()).sort((v,k)=>b.indexOf(v.ref.current)-b.indexOf(k.ref.current))},[p.collectionRef,p.itemMap])}return We(h,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},h,o]}We(Qa,"createCollection");var Yc=new WeakMap,Oe,yt,Un=(yt=class extends Map{constructor(a){super(a);_i(this,Oe);Ss(this,Oe,[...super.keys()]),Yc.set(this,!0)}set(a,o){return Yc.get(this)&&!this.has(a)&&Ze(this,Oe).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=n?this.size:this.size+1,s=Tl(a),i=s>=0?Math.min(s,l-1):Math.max(l+s,0);if(n?Ze(this,Oe).indexOf(o)===i:i===this.size)return this.set(o,r),this;let d=Ze(this,Oe).filter(u=>u!==o);d.splice(i,0,o);let c=d.map(u=>[u,u===o?r:this.get(u)]);this.clear();for(let[u,f]of c)this.set(u,f);return this}with(a,o,r){let n=new yt(this);return n.insert(a,o,r),n}before(a){let o=Ze(this,Oe).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ze(this,Oe).indexOf(a);if(n===-1)return this;let l=Ze(this,Oe).indexOf(o),s=l!==-1&&l<n?n-1:n;return this.insert(s,o,r)}after(a){let o=Ze(this,Oe).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ze(this,Oe).indexOf(a);if(n===-1)return this;let l=Ze(this,Oe).indexOf(o),s=l!==-1&&l<=n?n:n+1;return this.insert(s,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Ss(this,Oe,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ze(this,Oe).splice(Ze(this,Oe).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=Wn(Ze(this,Oe),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=Wn(Ze(this,Oe),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ze(this,Oe).indexOf(a)}keyAt(a){return Wn(Ze(this,Oe),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new yt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new yt(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=0,s=r;for(let i of this)l===0&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this]),l++;return s}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let l=r;for(let s=this.size-1;s>=0;s--){let i=this.entryAt(s);s===this.size-1&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this])}return l}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new yt(o)}toReversed(){let a=new yt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new yt(o)}slice(a,o){let r=new yt;for(let n of Ze(this,Oe).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Oe=new WeakMap,We(yt,"OrderedDict"),yt);function Wn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Zc(e,t);return a===-1?void 0:e[a]}We(Wn,"at");function Zc(e,t){let a=e.length,o=Tl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}We(Zc,"toSafeIndex");function Tl(e){return e!==e||e===0?0:Math.trunc(e)}We(Tl,"toSafeInteger");function lb(e){let t=e+"CollectionProvider",[a,o]=Qe(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[l,s]=a(t);l.displayName=e+"CollectionStatefulContextProvider";let i=We(({state:v,...k})=>v?(0,Sa.jsx)(c,{...k,state:v}):(0,Sa.jsx)(d,{...k}),"CollectionProvider");i.displayName=t;let d=We(v=>{let k=x();return(0,Sa.jsx)(c,{...v,state:k})},"CollectionInit");d.displayName=e+"CollectionInit";let c=We(v=>{let{scope:k,children:y,state:E}=v,I=ze.useRef(null),[R,A]=ze.useState(null),H=de(I,A),[T,V]=E,W=ze.useRef(new Un),P=ze.useCallback(()=>{let N=W.current;return ef(N)||N.sort(zn),N},[]);return ze.useEffect(()=>{if(!R)return;let N=tf(()=>{V(K=>{let G=K.toSorted(zn);return G.some(([Y],ge)=>K.keyAt(ge)!==Y)?G:K})});return N.observe(R,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[R,V]),(0,Sa.jsx)(r,{scope:k,collectionElementRef:H,collectionElementRefObject:I,getCollection:P,setCollection:V,registryRef:W,children:(0,Sa.jsx)(l,{scope:k,collectionElement:R,collection:T,children:y})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let u=e+"CollectionSlot",f=ot(u),m=ze.forwardRef((v,k)=>{let{scope:y,children:E}=v,I=n(u,y),R=de(k,I.collectionElementRef);return(0,Sa.jsx)(f,{ref:R,children:E})});m.displayName=u;let h=e+"CollectionItemSlot",g="data-radix-collection-item",p=ot(h),C=ze.forwardRef((v,k)=>{let{scope:y,children:E,...I}=v,R=ze.useRef(null),A=n(h,y),{setCollection:H,registryRef:T}=A,V=ze.useRef(I);Jc(V.current,I)||(V.current=I);let W=V.current,P=ze.useCallback(G=>{let $=T.current;G?$.set(G,{...V.current,element:G}):R.current&&$.delete(R.current)},[T]),N=de(k,P,R);pe(()=>{let G=R.current,$=T.current;G&&$.has(G)&&$.set(G,{...W,element:G})},[W,T]);let K=ze.useRef(null);return ze.useEffect(()=>{let G=R.current,$=K.current;($?.element??null)===G&&(!G||$?.itemData===W)||(K.current=G?{element:G,itemData:W}:null,H(Y=>{let ge=new Un(Y);return $&&$.element!==G&&ge.delete($.element),G&&ge.set(G,{...W,element:G}),ge.sort(zn)}))}),ze.useEffect(()=>()=>{let G=K.current;K.current=null,G&&H($=>{if(!$.has(G.element))return $;let Y=new Un($);return Y.delete(G.element),Y})},[H]),(0,Sa.jsx)(p,{[g]:"",ref:N,children:E})});C.displayName=h;function x(){return ze.useState(new Un)}We(x,"useInitCollection");function b(v){let{collection:k}=s(e+"CollectionConsumer",v);return k}We(b,"useCollection");function L(v){let{getCollection:k}=n(e+"CollectionConsumer",v);return k}return We(L,"useGetCollection"),[{Provider:i,Slot:m,ItemSlot:C},{createCollectionScope:o,useCollection:b,useGetCollection:L,useInitCollection:x}]}We(lb,"createCollection");function Jc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}We(Jc,"shallowEqual");function Qc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}We(Qc,"isElementPreceding");function ef(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}We(ef,"isInDocumentOrder");function zn(e,t){return!e[1].element||!t[1].element?0:Qc(e[1].element,t[1].element)?-1:1}We(zn,"sortByDocumentPosition");function tf(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}We(tf,"getChildListObserver");var Vn=J(require("react"),1),ub=require("react/jsx-runtime"),ib=Object.defineProperty,db=(e,t)=>ib(e,"name",{value:t,configurable:!0}),cb={LTR:"ltr",RTL:"rtl"},fb=Vn.createContext(void 0);function eo(e){let t=Vn.useContext(fb);return e||t||cb.LTR}db(eo,"useDirection");var nt=J(require("react"),1);var rf=["top","right","bottom","left"];var Yt=Math.min,_t=Math.max,Kr=Math.round,Xr=Math.floor,Zt=e=>({x:e,y:e}),pb={left:"right",right:"left",bottom:"top",top:"bottom"};function El(e,t,a){return _t(e,Yt(t,a))}function Jt(e,t){return typeof e=="function"?e(t):e}function la(e){return e.split("-")[0]}function to(e){return e.split("-")[1]}function Kn(e){return e==="x"?"y":"x"}function Xn(e){return e==="y"?"height":"width"}function Ht(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function jn(e){return Kn(Ht(e))}function nf(e,t,a){a===void 0&&(a=!1);let o=to(e),r=jn(e),n=Xn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Gr(l)),[l,Gr(l)]}function sf(e){let t=Gr(e);return[Gn(e),t,Gn(t)]}function Gn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var af=["left","right"],of=["right","left"],mb=["top","bottom"],gb=["bottom","top"];function hb(e,t,a){switch(e){case"top":case"bottom":return a?t?of:af:t?af:of;case"left":case"right":return t?mb:gb;default:return[]}}function lf(e,t,a,o){let r=to(e),n=hb(la(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(Gn)))),n}function Gr(e){let t=la(e);return pb[t]+e.slice(t.length)}function xb(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Fl(e){return typeof e!="number"?xb(e):{top:e,right:e,bottom:e,left:e}}function ao(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function df(e,t,a){let{reference:o,floating:r}=e,n=Ht(t),l=jn(t),s=Xn(l),i=la(t),d=n==="y",c=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,m;switch(i){case"top":m={x:c,y:o.y-r.height};break;case"bottom":m={x:c,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:u};break;case"left":m={x:o.x-r.width,y:u};break;default:m={x:o.x,y:o.y}}let h=to(t);return h&&(m[l]+=f*(h==="end"?1:-1)*(a&&d?-1:1)),m}async function ff(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=Jt(t,e),h=Fl(m),p=s[f?u==="floating"?"reference":"floating":u],C=ao(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(p)))==null||a?p:p.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:d,rootBoundary:c,strategy:i})),x=u==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,b=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),L=await(n.isElement==null?void 0:n.isElement(b))&&await(n.getScale==null?void 0:n.getScale(b))||{x:1,y:1},S=ao(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:x,offsetParent:b,strategy:i}):x);return{top:(C.top-S.top+h.top)/L.y,bottom:(S.bottom-C.bottom+h.bottom)/L.y,left:(C.left-S.left+h.left)/L.x,right:(S.right-C.right+h.right)/L.x}}var bb=50,pf=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:ff},i=await(l.isRTL==null?void 0:l.isRTL(t)),d=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:u}=df(d,o,i),f=o,m=0,h={};for(let g=0;g<n.length;g++){let p=n[g];if(!p)continue;let{name:C,fn:x}=p,{x:b,y:L,data:S,reset:v}=await x({x:c,y:u,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:d,platform:s,elements:{reference:e,floating:t}});c=b??c,u=L??u,h[C]={...h[C],...S},v&&m<bb&&(m++,typeof v=="object"&&(v.placement&&(f=v.placement),v.rects&&(d=v.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),{x:c,y:u}=df(d,f,i)),g=-1)}return{x:c,y:u,placement:f,strategy:r,middlewareData:h}},mf=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:d,padding:c=0}=Jt(e,t)||{};if(d==null)return{};let u=Fl(c),f={x:a,y:o},m=jn(r),h=Xn(m),g=await l.getDimensions(d),p=m==="y",C=p?"top":"left",x=p?"bottom":"right",b=p?"clientHeight":"clientWidth",L=n.reference[h]+n.reference[m]-f[m]-n.floating[h],S=f[m]-n.reference[m],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d)),k=v?v[b]:0;(!k||!await(l.isElement==null?void 0:l.isElement(v)))&&(k=s.floating[b]||n.floating[h]);let y=L/2-S/2,E=k/2-g[h]/2-1,I=Yt(u[C],E),R=Yt(u[x],E),A=k-g[h]-R,H=k/2-g[h]/2+y,T=El(I,H,A),V=!i.arrow&&to(r)!=null&&H!==T&&n.reference[h]/2-(H<I?I:R)-g[h]/2<0,W=V?H<I?H-I:H-A:0;return{[m]:f[m]+W,data:{[m]:T,centerOffset:H-T-W,...V&&{alignmentOffset:W}},reset:V}}});var gf=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:d}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...p}=Jt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let C=la(r),x=Ht(s),b=la(s)===s,L=await(i.isRTL==null?void 0:i.isRTL(d.floating)),S=f||(b||!g?[Gr(s)]:sf(s)),v=h!=="none";!f&&v&&S.push(...lf(s,g,h,L));let k=[s,...S],y=await i.detectOverflow(t,p),E=[],I=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&E.push(y[C]),u){let T=nf(r,l,L);E.push(y[T[0]],y[T[1]])}if(I=[...I,{placement:r,overflows:E}],!E.every(T=>T<=0)){var R,A;let T=(((R=n.flip)==null?void 0:R.index)||0)+1,V=k[T];if(V&&(!(u==="alignment"?x!==Ht(V):!1)||I.every(N=>Ht(N.placement)===x?N.overflows[0]>0:!0)))return{data:{index:T,overflows:I},reset:{placement:V}};let W=(A=I.filter(P=>P.overflows[0]<=0).sort((P,N)=>P.overflows[1]-N.overflows[1])[0])==null?void 0:A.placement;if(!W)switch(m){case"bestFit":{var H;let P=(H=I.filter(N=>{if(v){let K=Ht(N.placement);return K===x||K==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(K=>K>0).reduce((K,G)=>K+G,0)]).sort((N,K)=>N[1]-K[1])[0])==null?void 0:H[0];P&&(W=P);break}case"initialPlacement":W=s;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function uf(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function cf(e){return rf.some(t=>e[t]>=0)}var hf=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Jt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=uf(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:cf(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=uf(l,a.floating);return{data:{escapedOffsets:s,escaped:cf(s)}}}default:return{}}}}};var xf=new Set(["left","top"]);async function Cb(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=la(a),s=to(a),i=Ht(a)==="y",d=xf.has(l)?-1:1,c=n&&i?-1:1,u=Jt(t,e),{mainAxis:f,crossAxis:m,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return s&&typeof h=="number"&&(m=s==="end"?h*-1:h),i?{x:m*c,y:f*d}:{x:f*d,y:m*c}}var bf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await Cb(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Cf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:x=>{let{x:b,y:L}=x;return{x:b,y:L}}},...d}=Jt(e,t),c={x:a,y:o},u=await n.detectOverflow(t,d),f=Ht(r),m=Kn(f),h=c[m],g=c[f],p=(x,b)=>El(b+u[x==="y"?"top":"left"],b,b-u[x==="y"?"bottom":"right"]);l&&(h=p(m,h)),s&&(g=p(f,g));let C=i.fn({...t,[m]:h,[f]:g});return{...C,data:{x:C.x-a,y:C.y-o,enabled:{[m]:l,[f]:s}}}}}},Lf=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:d=0,mainAxis:c=!0,crossAxis:u=!0}=Jt(e,t),f={x:r,y:n},m=Ht(l),h=Kn(m),g=f[h],p=f[m],C=Jt(d,t),x=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:(a=C.mainAxis)!=null?a:0,crossAxis:(o=C.crossAxis)!=null?o:0};if(c){let S=h==="y"?"height":"width",v=s.reference[h]-s.floating[S]+x.mainAxis,k=s.reference[h]+s.reference[S]-x.mainAxis;g<v?g=v:g>k&&(g=k)}if(u){var b,L;let S=h==="y"?"width":"height",v=xf.has(la(l)),k=s.reference[m]-s.floating[S]+(v&&((b=i.offset)==null?void 0:b[m])||0)+(v?0:x.crossAxis),y=s.reference[m]+s.reference[S]+(v?0:((L=i.offset)==null?void 0:L[m])||0)-(v?x.crossAxis:0);p<k?p=k:p>y&&(p=y)}return{[h]:g,[m]:p}}}},vf=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Jt(e,t),i=await r.detectOverflow(t,s),d=la(a),c=to(a),u=Ht(a)==="y",{width:f,height:m}=o.floating,h,g;d==="top"||d==="bottom"?(h=d,g=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(g=d,h=c==="end"?"top":"bottom");let p=m-i.top-i.bottom,C=f-i.left-i.right,x=Yt(m-i[h],p),b=Yt(f-i[g],C),L=t.middlewareData.shift,S=!L,v=x,k=b;L!=null&&L.enabled.x&&(k=C),L!=null&&L.enabled.y&&(v=p),S&&!c&&(u?k=f-2*_t(i.left,i.right):v=m-2*_t(i.top,i.bottom)),await l({...t,availableWidth:k,availableHeight:v});let y=await r.getDimensions(n.floating);return f!==y.width||m!==y.height?{reset:{rects:!0}}:{}}}};function $n(){return typeof window<"u"}function no(e){return wf(e)?(e.nodeName||"").toLowerCase():"#document"}function ut(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qt(e){var t;return(t=(wf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wf(e){return $n()?e instanceof Node||e instanceof ut(e).Node:!1}function Ut(e){return $n()?e instanceof Element||e instanceof ut(e).Element:!1}function ia(e){return $n()?e instanceof HTMLElement||e instanceof ut(e).HTMLElement:!1}function If(e){return!$n()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ut(e).ShadowRoot}function jr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=qt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function Sf(e){return/^(table|td|th)$/.test(no(e))}function $r(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Lb=/transform|translate|scale|rotate|perspective|filter/,vb=/paint|layout|strict|content/,oo=e=>!!e&&e!=="none",Ol;function Yn(e){let t=Ut(e)?qt(e):e;return oo(t.transform)||oo(t.translate)||oo(t.scale)||oo(t.rotate)||oo(t.perspective)||!Zn()&&(oo(t.backdropFilter)||oo(t.filter))||Lb.test(t.willChange||"")||vb.test(t.contain||"")}function yf(e){let t=ya(e);for(;ia(t)&&!zo(t);){if(Yn(t))return t;if($r(t))return null;t=ya(t)}return null}function Zn(){return Ol==null&&(Ol=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Ol}function zo(e){return/^(html|body|#document)$/.test(no(e))}function qt(e){return ut(e).getComputedStyle(e)}function Yr(e){return Ut(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ya(e){if(no(e)==="html")return e;let t=e.assignedSlot||e.parentNode||If(e)&&e.host||Qt(e);return If(t)?t.host:t}function kf(e){let t=ya(e);return zo(t)?(e.ownerDocument||e).body:ia(t)&&jr(t)?t:kf(t)}function ro(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=kf(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=ut(r);if(n){let s=Jn(l);return t.concat(l,l.visualViewport||[],jr(r)?r:[],s&&a?ro(s):[])}else return t.concat(r,ro(r,[],a))}function Jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Df(e){let t=qt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ia(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Kr(a)!==n||Kr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function Nl(e){return Ut(e)?e:e.contextElement}function Vo(e){let t=Nl(e);if(!ia(t))return Zt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Df(t),l=(n?Kr(a.width):a.width)/o,s=(n?Kr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var Ib=Zt(0);function Mf(e){let t=ut(e);return!Zn()||!t.visualViewport?Ib:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function wb(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===ut(e)}function so(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=Nl(e),l=Zt(1);t&&(o?Ut(o)&&(l=Vo(o)):l=Vo(e));let s=wb(n,a,o)?Mf(n):Zt(0),i=(r.left+s.x)/l.x,d=(r.top+s.y)/l.y,c=r.width/l.x,u=r.height/l.y;if(n&&o){let f=ut(n),m=Ut(o)?ut(o):o,h=f,g=Jn(h);for(;g&&m!==h;){let p=Vo(g),C=g.getBoundingClientRect(),x=qt(g),b=C.left+(g.clientLeft+parseFloat(x.paddingLeft))*p.x,L=C.top+(g.clientTop+parseFloat(x.paddingTop))*p.y;i*=p.x,d*=p.y,c*=p.x,u*=p.y,i+=b,d+=L,h=ut(g),g=Jn(h)}}return ao({width:c,height:u,x:i,y:d})}function Qn(e,t){let a=Yr(e).scrollLeft;return t?t.left+a:so(Qt(e)).left+a}function Af(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Qn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Sb(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Qt(o),s=t?$r(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},d=Zt(1),c=Zt(0),u=ia(o);if((u||!n)&&((no(o)!=="body"||jr(l))&&(i=Yr(o)),u)){let m=so(o);d=Vo(o),c.x=m.x+o.clientLeft,c.y=m.y+o.clientTop}let f=l&&!u&&!n?Af(l,i):Zt(0);return{width:a.width*d.x,height:a.height*d.y,x:a.x*d.x-i.scrollLeft*d.x+c.x+f.x,y:a.y*d.y-i.scrollTop*d.y+c.y+f.y}}function yb(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function kb(e){let t=Yr(e),a=e.ownerDocument.body,o=_t(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=_t(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Qn(e),l=-t.scrollTop;return qt(a).direction==="rtl"&&(n+=_t(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var Rb=25;function Pb(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=ut(e),n=Qt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,d=0,c=0;if(l){let f=!Zn()||t==="fixed";o?f||(d=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(d=l.offsetLeft,c=l.offsetTop))}if(Qn(n)<=0){let f=n.ownerDocument,m=f.body,h=getComputedStyle(m),g=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-m.clientWidth-g),C=getComputedStyle(n).scrollbarGutter==="stable both-edges"?p/2:p;C<=Rb&&(s-=C)}return{width:s,height:i,x:d,y:c}}function Db(e,t){let a=so(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Vo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,d=o*n.y;return{width:l,height:s,x:i,y:d}}function Rf(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Pb(e,a,t);else if(t==="document")o=kb(Qt(e));else if(Ut(t))o=Db(t,a);else{let r=Mf(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return ao(o)}function Mb(e,t){let a=t.get(e);if(a)return a;let o=ro(e,[],!1).filter(s=>Ut(s)&&no(s)!=="body"),r=null,n=qt(e).position==="fixed",l=n?ya(e):e;for(;Ut(l)&&!zo(l);){let s=qt(l),i=Yn(l),d=r?r.position:n?"fixed":"";!i&&(d==="fixed"||d==="absolute"&&s.position==="static")?o=o.filter(u=>u!==l):r=s,l=ya(l)}return t.set(e,o),o}function Ab(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?$r(t)?[]:Mb(t,this._c):[].concat(a),o],s=Rf(t,l[0],r),i=s.top,d=s.right,c=s.bottom,u=s.left;for(let f=1;f<l.length;f++){let m=Rf(t,l[f],r);i=_t(m.top,i),d=Yt(m.right,d),c=Yt(m.bottom,c),u=_t(m.left,u)}return{width:d-u,height:c-i,x:u,y:i}}function Tb(e){let{width:t,height:a}=Df(e);return{width:t,height:a}}function Eb(e,t,a){let o=ia(t),r=Qt(t),n=a==="fixed",l=so(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Zt(0);if((o||!n)&&((no(t)!=="body"||jr(r))&&(s=Yr(t)),o)){let f=so(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=Qn(r));let d=r&&!o&&!n?Af(r,s):Zt(0),c=l.left+s.scrollLeft-i.x-d.x,u=l.top+s.scrollTop-i.y-d.y;return{x:c,y:u,width:l.width,height:l.height}}function Bl(e){return qt(e).position==="static"}function Pf(e,t){if(!ia(e)||qt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Qt(e)===a&&(a=a.ownerDocument.body),a}function Tf(e,t){let a=ut(e);if($r(e))return a;if(!ia(e)){let r=ya(e);for(;r&&!zo(r);){if(Ut(r)&&!Bl(r))return r;r=ya(r)}return a}let o=Pf(e,t);for(;o&&Sf(o)&&Bl(o);)o=Pf(o,t);return o&&zo(o)&&Bl(o)&&!Yn(o)?a:o||yf(e)||a}var Fb=async function(e){let t=this.getOffsetParent||Tf,a=this.getDimensions,o=await a(e.floating);return{reference:Eb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ob(e){return qt(e).direction==="rtl"}var Ef={convertOffsetParentRelativeRectToViewportRelativeRect:Sb,getDocumentElement:Qt,getClippingRect:Ab,getOffsetParent:Tf,getElementRects:Fb,getClientRects:yb,getDimensions:Tb,getScale:Vo,isElement:Ut,isRTL:Ob};function Ff(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Bb(e,t,a){let o=null,r,n=Qt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),l();let f=e.getBoundingClientRect(),{left:m,top:h,width:g,height:p}=f;if(c||t(),!g||!p)return;let C=Xr(h),x=Xr(n.clientWidth-(m+g)),b=Xr(n.clientHeight-(h+p)),L=Xr(m),v={rootMargin:-C+"px "+-x+"px "+-b+"px "+-L+"px",threshold:_t(0,Yt(1,u))||1},k=!0;function y(E){let I=E[0].intersectionRatio;if(!Ff(f,e.getBoundingClientRect()))return s();if(I!==u){if(!k)return s();I?s(!1,I):r=setTimeout(()=>{s(!1,1e-7)},1e3)}k=!1}try{o=new IntersectionObserver(y,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(y,v)}o.observe(e)}let i=ut(e),d=()=>s(a);return i.addEventListener("resize",d),s(!0),()=>{i.removeEventListener("resize",d),l()}}function _l(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,d=Nl(e),c=r||n?[...d?ro(d):[],...t?ro(t):[]]:[];c.forEach(C=>{r&&C.addEventListener("scroll",a),n&&C.addEventListener("resize",a)});let u=d&&s?Bb(d,a,n):null,f=-1,m=null;l&&(m=new ResizeObserver(C=>{let[x]=C;x&&x.target===d&&m&&t&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),a()}),d&&!i&&m.observe(d),t&&m.observe(t));let h,g=i?so(e):null;i&&p();function p(){let C=so(e);g&&!Ff(g,C)&&a(),g=C,h=requestAnimationFrame(p)}return a(),()=>{var C;c.forEach(x=>{r&&x.removeEventListener("scroll",a),n&&x.removeEventListener("resize",a)}),u?.(),(C=m)==null||C.disconnect(),m=null,i&&cancelAnimationFrame(h)}}var Of=bf;var Bf=Cf,Nf=gf,_f=vf,Hf=hf,Hl=mf;var Uf=Lf,Ul=(e,t,a)=>{let o=new Map,r=a??{},n={...Ef,...r.platform,_c:o};return pf(e,t,{...r,platform:n})};var He=J(require("react"),1),Wf=require("react"),zf=J(require("react-dom"),1),Nb=typeof document<"u",_b=function(){},es=Nb?Wf.useLayoutEffect:_b;function ts(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!ts(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!ts(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Vf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function qf(e,t){let a=Vf(e);return Math.round(t*a)/a}function ql(e){let t=He.useRef(e);return es(()=>{t.current=e}),t}function Gf(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:d}=e,[c,u]=He.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,m]=He.useState(o);ts(f,o)||m(o);let[h,g]=He.useState(null),[p,C]=He.useState(null),x=He.useCallback(N=>{N!==v.current&&(v.current=N,g(N))},[]),b=He.useCallback(N=>{N!==k.current&&(k.current=N,C(N))},[]),L=n||h,S=l||p,v=He.useRef(null),k=He.useRef(null),y=He.useRef(c),E=i!=null,I=ql(i),R=ql(r),A=ql(d),H=He.useCallback(()=>{if(!v.current||!k.current)return;let N={placement:t,strategy:a,middleware:f};R.current&&(N.platform=R.current),Ul(v.current,k.current,N).then(K=>{let G={...K,isPositioned:A.current!==!1};T.current&&!ts(y.current,G)&&(y.current=G,zf.flushSync(()=>{u(G)}))})},[f,t,a,R,A]);es(()=>{d===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,u(N=>({...N,isPositioned:!1})))},[d]);let T=He.useRef(!1);es(()=>(T.current=!0,()=>{T.current=!1}),[]),es(()=>{if(L&&(v.current=L),S&&(k.current=S),L&&S){if(I.current)return I.current(L,S,H);H()}},[L,S,H,I,E]);let V=He.useMemo(()=>({reference:v,floating:k,setReference:x,setFloating:b}),[x,b]),W=He.useMemo(()=>({reference:L,floating:S}),[L,S]),P=He.useMemo(()=>{let N={position:a,left:0,top:0};if(!W.floating)return N;let K=qf(W.floating,c.x),G=qf(W.floating,c.y);return s?{...N,transform:"translate("+K+"px, "+G+"px)",...Vf(W.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:G}},[a,s,W.floating,c.x,c.y]);return He.useMemo(()=>({...c,update:H,refs:V,elements:W,floatingStyles:P}),[c,H,V,W,P])}var Hb=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?Hl({element:o.current,padding:r}).fn(a):{}:o?Hl({element:o,padding:r}).fn(a):{}}}},Kf=(e,t)=>{let a=Of(e);return{name:a.name,fn:a.fn,options:[e,t]}},Xf=(e,t)=>{let a=Bf(e);return{name:a.name,fn:a.fn,options:[e,t]}},jf=(e,t)=>({fn:Uf(e).fn,options:[e,t]}),$f=(e,t)=>{let a=Nf(e);return{name:a.name,fn:a.fn,options:[e,t]}},Yf=(e,t)=>{let a=_f(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Zf=(e,t)=>{let a=Hf(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Jf=(e,t)=>{let a=Hb(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Qf=J(require("react"),1);var Ub=Object.defineProperty,qb=(e,t)=>Ub(e,"name",{value:t,configurable:!0});function Wl(e){let[t,a]=Qf.useState(void 0);return pe(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let l=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let s,i;if("borderBoxSize"in l){let d=l.borderBoxSize,c=Array.isArray(d)?d[0]:d;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;a({width:s,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}qb(Wl,"useSize");var Go=require("react/jsx-runtime"),Wb=Object.defineProperty,ka=(e,t)=>Wb(e,"name",{value:t,configurable:!0});var ep={Partial:"partial",Always:"always"},tp={Optimized:"optimized",Always:"always"},ap="Popper",[op,Ko]=Qe(ap),[zb,rp]=op(ap),as=ka(e=>{let{__scopePopper:t,children:a}=e,[o,r]=nt.useState(null),[n,l]=nt.useState(void 0);return(0,Go.jsx)(zb,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Vb="PopperAnchor",os=nt.forwardRef(ka(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=rp(Vb,o),s=nt.useRef(null),i=l.onAnchorChange,d=nt.useCallback(g=>{s.current=g,g&&i(g)},[i]),c=de(a,d),u=nt.useRef(null);nt.useEffect(()=>{if(!r)return;let g=u.current;u.current=r.current,g!==u.current&&i(u.current)});let f=l.placementState&&ns(l.placementState),m=f?.[0],h=f?.[1];return r?null:(0,Go.jsx)(ue.div,{"data-radix-popper-side":m,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),np="PopperContent",[Gb,Dy]=op(np),rs=nt.forwardRef(ka(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:d=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f=ep.Partial,hideWhenDetached:m=!1,updatePositionStrategy:h=tp.Optimized,onPlaced:g,...p}=t,C=rp(np,o),[x,b]=nt.useState(null),L=de(a,b),[S,v]=nt.useState(null),k=Wl(S),y=k?.width??0,E=k?.height??0,I=r+(l!=="center"?"-"+l:""),R=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},A=Array.isArray(c)?c:[c],H=A.length>0,T={padding:R,boundary:A.filter(sp),altBoundary:H},{refs:V,floatingStyles:W,placement:P,isPositioned:N,middlewareData:K}=Gf({strategy:"fixed",placement:I,whileElementsMounted:ka((...xe)=>_l(...xe,{animationFrame:h===tp.Always}),"whileElementsMounted"),elements:{reference:C.anchor},middleware:[Kf({mainAxis:n+E,alignmentAxis:s}),d&&Xf({mainAxis:!0,crossAxis:!1,...f===ep.Partial?{limiter:jf()}:{},...T}),d&&$f({...T}),Yf({...T,apply:ka(({elements:xe,rects:U,availableWidth:ae,availableHeight:le})=>{let{width:Z,height:w}=U.reference,M=xe.floating.style;M.setProperty("--radix-popper-available-width",`${ae}px`),M.setProperty("--radix-popper-available-height",`${le}px`),M.setProperty("--radix-popper-anchor-width",`${Z}px`),M.setProperty("--radix-popper-anchor-height",`${w}px`)},"apply")}),S&&Jf({element:S,padding:i}),Kb({arrowWidth:y,arrowHeight:E}),m&&Zf(H?{strategy:"referenceHidden",...T}:{strategy:"referenceHidden",padding:T.padding,altBoundary:T.altBoundary})]}),G=C.setPlacementState;pe(()=>(G(P),()=>{G(void 0)}),[P,G]);let[$,Y]=ns(P),ge=Ge(g);pe(()=>{N&&ge?.()},[N,ge]);let Ae=K.arrow?.x,he=K.arrow?.y,q=K.arrow?.centerOffset!==0,[ve,Ce]=nt.useState();return pe(()=>{x&&Ce(window.getComputedStyle(x).zIndex)},[x]),(0,Go.jsx)("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:N?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[K.transformOrigin?.x,K.transformOrigin?.y].join(" "),...K.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Go.jsx)(Gb,{scope:o,placedSide:$,placedAlign:Y,onArrowChange:v,arrowX:Ae,arrowY:he,shouldHideArrow:q,children:(0,Go.jsx)(ue.div,{"data-side":$,"data-align":Y,...p,ref:L,style:{...p.style,animation:N?p.style?.animation:"none"}})})})},"PopperContent"));function sp(e){return e!==null}ka(sp,"isNotNull");var Kb=ka(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[d,c]=ns(a),u={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,m=(r.arrow?.y??0)+i/2,h="",g="";return d==="bottom"?(h=l?u:`${f}px`,g=`${-i}px`):d==="top"?(h=l?u:`${f}px`,g=`${o.floating.height+i}px`):d==="right"?(h=`${-i}px`,g=l?u:`${m}px`):d==="left"&&(h=`${o.floating.width+i}px`,g=l?u:`${m}px`),{data:{x:h,y:g}}}}),"transformOrigin");function ns(e){let[t,a="center"]=e.split("-");return[t,a]}ka(ns,"getSideAndAlignFromPlacement");var Xb=J(require("react"),1);var jb=require("react/jsx-runtime");var ip=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var ee=require("react/jsx-runtime"),Yb=Object.defineProperty,fe=(e,t)=>Yb(e,"name",{value:t,configurable:!0}),dp={ItemAligned:"item-aligned",Popper:"popper"},Zb={LTR:"ltr",RTL:"rtl"},Jb=[" ","Enter","ArrowUp","ArrowDown"],Qb=[" ","Enter"],Xo="Select",[ls,is,eC]=Qa(Xo),[io,Jy]=Qe(Xo,[eC,Ko]),Gl=Ko(),[tC,Ra]=io(Xo),[aC,oC]=io(Xo);function mp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:d,name:c,autoComplete:u,disabled:f,required:m,form:h,internal_do_not_use_render:g}=e,p=Gl(t),[C,x]=_.useState(null),[b,L]=_.useState(null),[S,v]=_.useState(!1),k=eo(d),[y,E]=jt({prop:o,defaultProp:r??!1,onChange:n,caller:Xo}),[I,R]=jt({prop:l,defaultProp:s,onChange:i,caller:Xo}),A=_.useRef(null),H=_.useRef(!1),[T,V]=_.useState(null),W=fe(q=>{V({value:q,hasConsumerStoppedPropagation:H.current}),R(q)},"handleUserSelect"),P=_.useRef(I);_.useEffect(()=>{let q=h?C?.ownerDocument.getElementById(h):C?.form;if(q instanceof HTMLFormElement){let ve=fe(()=>R(P.current),"reset");return q.addEventListener("reset",ve),()=>q.removeEventListener("reset",ve)}},[h,C,R]);let N=C?!!h||!!C.closest("form"):!0,[K,G]=_.useState(new Set),$=It(),Y=Array.from(K).map(q=>q.props.value).join(";"),ge=_.useCallback(q=>{G(ve=>new Set(ve).add(q))},[]),Ae=_.useCallback(q=>{G(ve=>{let Ce=new Set(ve);return Ce.delete(q),Ce})},[]),he={required:m,trigger:C,onTriggerChange:x,valueNode:b,onValueNodeChange:L,valueNodeHasChildren:S,onValueNodeHasChildrenChange:v,contentId:$,value:I,onValueChange:R,hasConsumerStoppedPropagationRef:H,userSelection:T,onUserSelect:W,open:y,onOpenChange:E,dir:k,triggerPointerDownPosRef:A,disabled:f,name:c,autoComplete:u,form:h,nativeOptions:K,nativeSelectKey:Y,isFormControl:N};return(0,ee.jsx)(as,{...p,children:(0,ee.jsx)(tC,{scope:t,...he,children:(0,ee.jsx)(ls.Provider,{scope:t,children:(0,ee.jsx)(aC,{scope:t,onNativeOptionAdd:ge,onNativeOptionRemove:Ae,children:yp(g)?g(he):a})})})})}fe(mp,"SelectProvider");var gp=fe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,ee.jsx)(mp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,ee.jsxs)(ee.Fragment,{children:[a,r?(0,ee.jsx)(LC,{__scopeSelect:t}):null]})})},"Select"),rC="SelectTrigger",Kl=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Gl(o),s=Ra(rC,o),i=s.disabled||r,d=de(a,s.onTriggerChange),c=is(o),u=_.useRef("touch"),[f,m,h]=ei(p=>{let C=c().filter(L=>!L.disabled),x=C.find(L=>L.value===s.value),b=ti(C,p,x);b!==void 0&&s.onUserSelect(b.value)}),g=fe(p=>{i||(s.onOpenChange(!0),h()),p&&(s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})},"handleOpen");return(0,ee.jsx)(os,{asChild:!0,...l,children:(0,ee.jsx)(ue.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Zr(s.value)?"":void 0,...n,ref:d,onClick:Q(n.onClick,p=>{p.currentTarget.focus(),u.current!=="mouse"&&g(p)}),onPointerDown:Q(n.onPointerDown,p=>{u.current=p.pointerType;let C=p.target;C.hasPointerCapture(p.pointerId)&&C.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(g(p),p.preventDefault())}),onKeyDown:Q(n.onKeyDown,p=>{let C=f.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&(s.hasConsumerStoppedPropagationRef.current=p.isPropagationStopped(),m(p.key)),!(C&&p.key===" ")&&Jb.includes(p.key)&&(g(),p.preventDefault())})})})},"SelectTrigger")),nC="SelectValue",hp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,d=Ra(nC,o),{onValueNodeHasChildrenChange:c}=d,u=l!==void 0,f=de(a,d.onValueNodeChange);pe(()=>{c(u)},[c,u]);let m=Zr(d.value);return(0,ee.jsx)(ue.span,{...i,asChild:m?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,ee.jsx)(_.Fragment,{children:m?s:l},m?"placeholder":"value")})},"SelectValue")),xp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,ee.jsx)(ue.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),sC="SelectPortal",[lC,iC]=io(sC,{forceMount:void 0}),bp=fe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,ee.jsx)(lC,{scope:e.__scopeSelect,forceMount:a,children:(0,ee.jsx)(Fo,{asChild:!0,...o})})},"SelectPortal"),lo="SelectContent",Xl=_.forwardRef(fe(function(t,a){let o=iC(lo,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=Ra(lo,t.__scopeSelect),[s,i]=_.useState();return pe(()=>{i(new DocumentFragment)},[]),(0,ee.jsx)(sa,{present:r||l.open,children:({present:d})=>d?(0,ee.jsx)(cC,{...n,ref:a}):(0,ee.jsx)(dC,{...n,fragment:s})})},"SelectContent")),dC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Vl.createPortal((0,ee.jsx)(Cp,{scope:o,children:(0,ee.jsx)(ls.Slot,{scope:o,children:(0,ee.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Wt=10,[Cp,uo]=io(lo),uC=ot("SelectContent.RemoveScroll"),cC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o}=t,{position:r=dp.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:d,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:m,collisionPadding:h,sticky:g,hideWhenDetached:p,avoidCollisions:C,...x}=t,b=Ra(lo,o),[L,S]=_.useState(null),[v,k]=_.useState(null),y=de(a,S),[E,I]=_.useState(null),[R,A]=_.useState(null),H=is(o),[T,V]=_.useState(!1),W=_.useRef(!1),P=_.useRef(!1),N=_.useRef(!1);_.useEffect(()=>{if(L)return qo(L)},[L]),wa();let K=_.useCallback(U=>{let[ae,...le]=H().map(M=>M.ref.current),[Z]=le.slice(-1),w=document.activeElement;for(let M of U)if(M===w||(M?.scrollIntoView({block:"nearest"}),M===ae&&v&&(v.scrollTop=0),M===Z&&v&&(v.scrollTop=v.scrollHeight),M?.focus(),document.activeElement!==w))return},[H,v]),G=_.useCallback(()=>K([E,L]),[K,E,L]);_.useEffect(()=>{T&&G()},[T,G]);let{onOpenChange:$,triggerPointerDownPosRef:Y}=b;_.useEffect(()=>{if(L){let U={x:0,y:0},ae=fe(Z=>{U={x:Math.abs(Math.round(Z.pageX)-(Y.current?.x??0)),y:Math.abs(Math.round(Z.pageY)-(Y.current?.y??0))}},"handlePointerMove"),le=fe(Z=>{U.x<=10&&U.y<=10?Z.preventDefault():Z.composedPath().includes(L)||$(!1),document.removeEventListener("pointermove",ae),Y.current=null},"handlePointerUp");return Y.current!==null&&(document.addEventListener("pointermove",ae),document.addEventListener("pointerup",le,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ae),document.removeEventListener("pointerup",le,{capture:!0})}}},[L,$,Y]),_.useEffect(()=>{let U=fe(()=>$(!1),"close");return window.addEventListener("blur",U),window.addEventListener("resize",U),()=>{window.removeEventListener("blur",U),window.removeEventListener("resize",U)}},[$]);let[ge,Ae]=ei(U=>{let ae=H().filter(w=>!w.disabled),le=ae.find(w=>w.ref.current===document.activeElement),Z=ti(ae,U,le);Z&&setTimeout(()=>Z.ref.current?.focus())}),he=_.useCallback((U,ae,le)=>{let Z=!P.current;Z&&(P.current=!0);let w=!W.current&&!le;b.value!==void 0&&b.value===ae||w?(I(U),w&&(W.current=!0)):Z&&I(U)},[b.value]),q=_.useCallback(()=>L?.focus(),[L]),ve=_.useCallback((U,ae,le)=>{if(!U)return;let Z=!N.current;Z&&(N.current=!0);let w=!W.current&&!le;(b.value!==void 0&&b.value===ae||w||Z)&&A(U)},[b.value]),Ce=r===dp.Popper?up:fC,xe=Ce===up?{side:i,sideOffset:d,align:c,alignOffset:u,arrowPadding:f,collisionBoundary:m,collisionPadding:h,sticky:g,hideWhenDetached:p,avoidCollisions:C}:{};return(0,ee.jsx)(Cp,{scope:o,content:L,viewport:v,onViewportChange:k,itemRefCallback:he,selectedItem:E,onItemLeave:q,itemTextRefCallback:ve,focusSelectedItem:G,selectedItemText:R,position:r,isPositioned:T,searchRef:ge,children:(0,ee.jsx)(Xa,{as:uC,allowPinchZoom:!0,children:(0,ee.jsx)(Eo,{asChild:!0,trapped:b.open,onMountAutoFocus:U=>{U.preventDefault()},onUnmountAutoFocus:Q(n,U=>{b.trigger?.focus({preventScroll:!0}),U.preventDefault()}),children:(0,ee.jsx)(To,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:U=>U.preventDefault(),onDismiss:()=>b.onOpenChange(!1),children:(0,ee.jsx)(Ce,{role:"listbox",id:b.contentId,"data-state":b.open?"open":"closed",dir:b.dir,onContextMenu:U=>U.preventDefault(),...x,...xe,onPlaced:()=>V(!0),ref:y,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:Q(x.onKeyDown,U=>{let ae=U.ctrlKey||U.altKey||U.metaKey;if(U.key==="Tab"&&U.preventDefault(),!ae&&U.key.length===1&&Ae(U.key),["ArrowUp","ArrowDown","Home","End"].includes(U.key)){let Z=H().filter(w=>!w.disabled).map(w=>w.ref.current);if(["ArrowUp","End"].includes(U.key)&&(Z=Z.slice().reverse()),["ArrowUp","ArrowDown"].includes(U.key)){let w=U.target,M=Z.indexOf(w);Z=Z.slice(M+1)}setTimeout(()=>K(Z)),U.preventDefault()}})})})})})})},"SelectContentImpl")),fC=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=Ra(lo,o),s=uo(lo,o),[i,d]=_.useState(null),[c,u]=_.useState(null),f=de(a,u),m=is(o),h=_.useRef(!1),g=_.useRef(!0),{viewport:p,selectedItem:C,selectedItemText:x,focusSelectedItem:b}=s,L=_.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&p&&C&&x){let y=l.trigger.getBoundingClientRect(),E=c.getBoundingClientRect(),I=l.valueNode.getBoundingClientRect(),R=x.getBoundingClientRect();if(l.dir!==Zb.RTL){let le=R.left-E.left,Z=I.left-le,w=y.left-Z,M=y.width+w,z=Math.max(M,E.width),j=window.innerWidth-Wt,me=Hn(Z,[Wt,Math.max(Wt,j-z)]);i.style.minWidth=M+"px",i.style.left=me+"px"}else{let le=E.right-R.right,Z=window.innerWidth-I.right-le,w=window.innerWidth-y.right-Z,M=y.width+w,z=Math.max(M,E.width),j=window.innerWidth-Wt,me=Hn(Z,[Wt,Math.max(Wt,j-z)]);i.style.minWidth=M+"px",i.style.right=me+"px"}let A=m(),H=window.innerHeight-Wt*2,T=p.scrollHeight,V=window.getComputedStyle(c),W=parseInt(V.borderTopWidth,10),P=parseInt(V.paddingTop,10),N=parseInt(V.borderBottomWidth,10),K=parseInt(V.paddingBottom,10),G=W+P+T+K+N,$=Math.min(C.offsetHeight*5,G),Y=window.getComputedStyle(p),ge=parseInt(Y.paddingTop,10),Ae=parseInt(Y.paddingBottom,10),he=y.top+y.height/2-Wt,q=H-he,ve=C.offsetHeight/2,Ce=C.offsetTop+ve,xe=W+P+Ce,U=G-xe;if(xe<=he){let le=A.length>0&&C===A[A.length-1].ref.current;i.style.bottom="0px";let Z=c.clientHeight-p.offsetTop-p.offsetHeight,w=Math.max(q,ve+(le?Ae:0)+Z+N),M=xe+w;i.style.height=M+"px"}else{let le=A.length>0&&C===A[0].ref.current;i.style.top="0px";let w=Math.max(he,W+p.offsetTop+(le?ge:0)+ve)+U;i.style.height=w+"px",p.scrollTop=xe-he+p.offsetTop}i.style.margin=`${Wt}px 0`,i.style.minHeight=$+"px",i.style.maxHeight=H+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[m,l.trigger,l.valueNode,i,c,p,C,x,l.dir,r]);pe(()=>L(),[L]);let[S,v]=_.useState();pe(()=>{c&&v(window.getComputedStyle(c).zIndex)},[c]);let k=_.useCallback(y=>{y&&g.current===!0&&(L(),b?.(),g.current=!1)},[L,b]);return(0,ee.jsx)(pC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:k,children:(0,ee.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:(0,ee.jsx)(ue.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),up=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Wt,...l}=t,s=Gl(o);return(0,ee.jsx)(rs,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[pC,jl]=io(lo,{}),cp="SelectViewport",Lp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=uo(cp,o),s=jl(cp,o),i=de(a,l.onViewportChange),d=_.useRef(0);return(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,ee.jsx)(ls.Slot,{scope:o,children:(0,ee.jsx)(ue.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:Q(n.onScroll,c=>{let u=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:m}=s;if(m?.current&&f){let h=Math.abs(d.current-u.scrollTop);if(h>0){let g=window.innerHeight-Wt*2,p=parseFloat(f.style.minHeight),C=parseFloat(f.style.height),x=Math.max(p,C);if(x<g){let b=x+h,L=Math.min(g,b),S=b-L;f.style.height=L+"px",f.style.bottom==="0px"&&(u.scrollTop=S>0?S:0,f.style.justifyContent="flex-end")}}}d.current=u.scrollTop})})})]})},"SelectViewport")),mC="SelectGroup",[Qy,gC]=io(mC);var hC="SelectLabel",$l=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t,n=gC(hC,o);return(0,ee.jsx)(ue.div,{id:n.id,...r,ref:a})},"SelectLabel")),zl="SelectItem",[xC,vp]=io(zl),Yl=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=Ra(zl,o),d=uo(zl,o),c=i.value===r,[u,f]=_.useState(l??""),[m,h]=_.useState(!1),g=Ge(L=>d.itemRefCallback?.(L,r,n)),p=de(a,g),C=It(),x=_.useRef("touch");function b(L){i.hasConsumerStoppedPropagationRef.current=L.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return fe(b,"handleSelect"),(0,ee.jsx)(xC,{scope:o,value:r,disabled:n,textId:C,isSelected:c,onItemTextChange:_.useCallback(L=>{f(S=>S||(L?.textContent??"").trim())},[]),children:(0,ee.jsx)(ls.ItemSlot,{scope:o,value:r,disabled:n,textValue:u,children:(0,ee.jsx)(ue.div,{role:"option","aria-labelledby":C,"data-highlighted":m?"":void 0,"aria-selected":c&&m,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:p,onFocus:Q(s.onFocus,()=>h(!0)),onBlur:Q(s.onBlur,()=>h(!1)),onClick:Q(s.onClick,L=>{n||x.current!=="mouse"&&b(L)}),onPointerUp:Q(s.onPointerUp,L=>{n||x.current==="mouse"&&b(L)}),onPointerDown:Q(s.onPointerDown,L=>{x.current=L.pointerType}),onPointerMove:Q(s.onPointerMove,L=>{x.current=L.pointerType,n?d.onItemLeave?.():x.current==="mouse"&&L.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Q(s.onPointerLeave,L=>{L.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:Q(s.onKeyDown,L=>{n||L.target!==L.currentTarget||d.searchRef?.current!==""&&L.key===" "||(Qb.includes(L.key)&&b(L),L.key===" "&&L.preventDefault())})})})})},"SelectItem")),ss="SelectItemText",Ip=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=Ra(ss,o),i=uo(ss,o),d=vp(ss,o),c=oC(ss,o),[u,f]=_.useState(null),m=Ge(b=>i.itemTextRefCallback?.(b,d.value,d.disabled)),h=de(a,f,d.onItemTextChange,m),g=u?.textContent,p=_.useMemo(()=>(0,ee.jsx)("option",{value:d.value,disabled:d.disabled,children:g},d.value),[d.disabled,d.value,g]),{onNativeOptionAdd:C,onNativeOptionRemove:x}=c;return pe(()=>(C(p),()=>x(p)),[C,x,p]),(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)(ue.span,{id:d.textId,...l,ref:h}),d.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Zr(s.value)?Vl.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),bC="SelectItemIndicator",wp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return vp(bC,o).isSelected?(0,ee.jsx)(ue.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),fp="SelectScrollUpButton",Zl=_.forwardRef(fe(function(t,a){let o=uo(fp,t.__scopeSelect),r=jl(fp,t.__scopeSelect),[n,l]=_.useState(!1),s=de(a,r.onScrollButtonChange);return pe(()=>{if(o.viewport&&o.isPositioned){let d=function(){let u=c.scrollTop>0;l(u)};var i=d;fe(d,"handleScroll");let c=o.viewport;return d(),c.addEventListener("scroll",d),()=>c.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?(0,ee.jsx)(Sp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:d}=o;i&&d&&(i.scrollTop=i.scrollTop-d.offsetHeight)}}):null},"SelectScrollUpButton")),pp="SelectScrollDownButton",Jl=_.forwardRef(fe(function(t,a){let o=uo(pp,t.__scopeSelect),r=jl(pp,t.__scopeSelect),[n,l]=_.useState(!1),s=de(a,r.onScrollButtonChange);return pe(()=>{if(o.viewport&&o.isPositioned){let d=function(){let u=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<u;l(f)};var i=d;fe(d,"handleScroll");let c=o.viewport;return d(),c.addEventListener("scroll",d),()=>c.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?(0,ee.jsx)(Sp,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:d}=o;i&&d&&(i.scrollTop=i.scrollTop+d.offsetHeight)}}):null},"SelectScrollDownButton")),Sp=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=uo("SelectScrollButton",o),s=_.useRef(null),i=is(o),d=_.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return _.useEffect(()=>()=>d(),[d]),pe(()=>{i().find(u=>u.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,ee.jsx)(ue.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:Q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:Q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:Q(n.onPointerLeave,()=>{d()})})},"SelectScrollButtonImpl")),Ql=_.forwardRef(fe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,ee.jsx)(ue.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var CC="SelectBubbleInput",LC=_.forwardRef(fe(function({__scopeSelect:t,...a},o){let r=Ra(CC,t),{value:n,onValueChange:l,required:s,disabled:i,name:d,autoComplete:c,form:u,userSelection:f}=r,{nativeOptions:m,nativeSelectKey:h}=r,g=_.useRef(null),p=de(o,g),C=n??"",x=_.useRef(C),b=_.useRef(f),L=_.useRef(!1),S=Array.from(m).some(v=>(v.props.value??"")==="");return _.useEffect(()=>{let v=g.current;if(!v)return;let k=window.HTMLSelectElement.prototype,E=Object.getOwnPropertyDescriptor(k,"value").set,I=f!==null&&f!==b.current;b.current=f;let R=x.current!==C;x.current=C;let A=I&&R;if(I&&!R&&f.value!==C&&!f.hasConsumerStoppedPropagation&&E){L.current=!0;try{E.call(v,f.value),v.dispatchEvent(new Event("change",{bubbles:!0}))}finally{L.current=!1,E.call(v,C)}return}let H=A&&!f.hasConsumerStoppedPropagation;if(R&&E){let T=new Event("change",{bubbles:H});E.call(v,C),v.dispatchEvent(T)}},[C,f]),(0,ee.jsxs)(ue.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:d,autoComplete:c,disabled:i,form:u,onChange:v=>{L.current||l(v.target.value)},...a,style:{...ip,...a.style},ref:p,defaultValue:C,children:[Zr(n)&&!S?(0,ee.jsx)("option",{value:""}):null,Array.from(m)]},h)},"SelectBubbleInput"));function yp(e){return typeof e=="function"}fe(yp,"isFunction");function Zr(e){return e===""||e===void 0}fe(Zr,"shouldShowPlaceholder");function ei(e){let t=Ge(e),a=_.useRef(""),o=_.useRef(0),r=_.useCallback(l=>{let s=a.current+l;t(s);function i(d){a.current=d,window.clearTimeout(o.current),d!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}fe(i,"updateSearch"),i(s)},[t]),n=_.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return _.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}fe(ei,"useTypeaheadSearch");function ti(e,t,a){let r=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=kp(e,Math.max(n,0));r.length===1&&(l=l.filter(d=>d!==a));let i=l.find(d=>d.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}fe(ti,"findNextItem");function kp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}fe(kp,"wrapArray");var Be=require("react/jsx-runtime"),Jr=gp;var Qr=hp,jo=Pa.forwardRef(({className:e,children:t,...a},o)=>(0,Be.jsxs)(Kl,{ref:o,className:ie("kanban-select-trigger",e),...a,children:[t,(0,Be.jsx)(xp,{asChild:!0,children:(0,Be.jsx)(wo,{className:"kanban-select-icon"})})]}));jo.displayName=Kl.displayName;var Rp=Pa.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Zl,{ref:a,className:ie("kanban-select-scroll-button",e),...t,children:(0,Be.jsx)(ir,{className:"kanban-select-scroll-icon"})}));Rp.displayName=Zl.displayName;var Pp=Pa.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Jl,{ref:a,className:ie("kanban-select-scroll-button",e),...t,children:(0,Be.jsx)(wo,{className:"kanban-select-scroll-icon"})}));Pp.displayName=Jl.displayName;var $o=Pa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Be.jsx)(bp,{children:(0,Be.jsxs)(Xl,{ref:r,className:ie("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Be.jsx)(Rp,{}),(0,Be.jsx)(Lp,{className:ie("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Be.jsx)(Pp,{})]})}));$o.displayName=Xl.displayName;var IC=Pa.forwardRef(({className:e,...t},a)=>(0,Be.jsx)($l,{ref:a,className:ie("kanban-select-label",e),...t}));IC.displayName=$l.displayName;var da=Pa.forwardRef(({className:e,children:t,...a},o)=>(0,Be.jsxs)(Yl,{ref:o,className:ie("kanban-select-item",e),...a,children:[(0,Be.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Be.jsx)(wp,{children:(0,Be.jsx)(pt,{className:"kanban-select-check"})})}),(0,Be.jsx)(Ip,{children:t})]}));da.displayName=Yl.displayName;var wC=Pa.forwardRef(({className:e,...t},a)=>(0,Be.jsx)(Ql,{ref:a,className:ie("kanban-select-separator",e),...t}));wC.displayName=Ql.displayName;var Dp=J(require("react"),1);var Mp=require("react/jsx-runtime"),ds=Dp.forwardRef(({className:e,...t},a)=>(0,Mp.jsx)("textarea",{className:ie("kanban-textarea",e),ref:a,...t}));ds.displayName="Textarea";var zt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},us=["high","medium","low"],Ap="var(--dsw-alias-label-tertiary)";function Tp(e,t){return t?e.find(a=>a.name===t)?.color??Ap:Ap}var cs=require("react");function co(e=new Date,t=0){let a=new Date(e);return a.setDate(a.getDate()+t),`${String(a.getFullYear()).padStart(4,"0")}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`}function ai(e,t){let a=o=>{let[r,n,l]=o.split("-").map(Number),s=new Date(0);return s.setUTCFullYear(r,n-1,l),s.getTime()/864e5};return a(t)-a(e)}function oi(e,t,a,o){return t?!e.dueDate||e.columnId===a?!1:t==="today"?e.dueDate===o:e.dueDate<o:!0}function Ep(e,t,a){let[o,r,n]=e.split("-");return a(o===t.slice(0,4)?"shortDate":"yearDate").replace("{year}",o).replace("{month}",String(Number(r))).replace("{day}",String(Number(n)))}function Fp(){let[e,t]=(0,cs.useState)(()=>co());return(0,cs.useEffect)(()=>{let a,o=()=>{clearTimeout(a);let r=new Date;t(co(r));let n=new Date(r);n.setHours(24,0,0,0),a=setTimeout(o,n.getTime()-r.getTime()+100)};return o(),window.addEventListener("focus",o),document.addEventListener("visibilitychange",o),()=>{clearTimeout(a),window.removeEventListener("focus",o),document.removeEventListener("visibilitychange",o)}},[]),e}var Xe=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),ri=e=>e==="high"||e==="medium"||e==="low"?zt[e].label:"";function Op(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&ri(a.priority)||o;return Xe(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Xe(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Xe(t("actLabelSet"),{to:n}):r!=null&&n==null?Xe(t("actLabelCleared"),{from:r}):Xe(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?ri(r)||r:o,s=n?ri(n)||n:o;return r==null&&n!=null?Xe(t("actPrioritySet"),{to:s}):r!=null&&n==null?Xe(t("actPriorityCleared"),{from:l}):Xe(t("actPriority"),{from:l,to:s})}case"card_due_date_changed":return Xe(t("actDueDate"),{from:r??o,to:n??o});case"board_completed_column_changed":return Xe(t("actCompletedColumn"),{from:a.fromColumn??r??o,to:a.toColumn??n??o});case"card_title_changed":return Xe(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_image_added":return t("actImageAdded");case"card_image_removed":return t("actImageRemoved");case"card_deleted":return t("actDeleted");case"column_added":return Xe(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Xe(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Xe(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Xe(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Xe(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Xe(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Xe(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var fs=e=>String(e).padStart(2,"0");function Yo(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${fs(t.getMonth()+1)}-${fs(t.getDate())} ${fs(t.getHours())}:${fs(t.getMinutes())}`}var De=require("react");var Hp=require("@deepseek-ai/dsh-client-ui-primitives");function en(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(Bp)}async function Bp(e){let t;try{t=await e.json()}catch{throw new Error(`Kanban request failed (${e.status})`)}if(!e.ok||t.error)throw new Error(t.error||`Kanban request failed (${e.status})`);return t}function ps(e,t,a){return"/api/kanban/image?"+new URLSearchParams({workspaceId:e,cardId:t,attachmentId:a})}function Np(e,t,a,o){return fetch("/api/kanban/image/upload?"+new URLSearchParams({workspaceId:e,cardId:t}),{method:"POST",headers:{"content-type":a.type},body:a,signal:o}).then(Bp)}async function _p(e,t,a,o){let r=[];for(let[n,l]of a.entries()){let s=await fetch(ps(e,t,l.attachmentId),{signal:o});if(!s.ok)throw new Error(`Image ${n+1}: HTTP ${s.status}`);let i=await s.blob();if(!i.size||!["image/png","image/jpeg","image/webp"].includes(i.type))throw new Error(`Image ${n+1}: invalid image response`);let d=i.type==="image/jpeg"?"jpg":i.type.slice(6);r.push(new File([i],`${t}-${n+1}.${d}`,{type:i.type}))}return r}var ne=require("react/jsx-runtime");function SC({file:e}){let[t,a]=(0,De.useState)("");return(0,De.useEffect)(()=>{let o=URL.createObjectURL(e);return a(o),()=>URL.revokeObjectURL(o)},[e]),t?(0,ne.jsx)("img",{src:t,alt:""}):null}function yC({src:e,label:t,onOpen:a}){let o=ke(),[r,n]=(0,De.useState)("loading"),[l,s]=(0,De.useState)(0);return(0,ne.jsx)("div",{className:"kanban-image-preview",children:r==="error"?(0,ne.jsxs)("div",{className:"kanban-image-message",role:"status",children:[(0,ne.jsx)("span",{children:o("imageLoadFailed")}),(0,ne.jsxs)(re,{variant:"ghost",size:"sm",onClick:()=>{n("loading"),s(i=>i+1)},children:[(0,ne.jsx)(La,{}),o("retry")]})]}):(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("button",{type:"button",className:"kanban-image-open","aria-label":t,disabled:r!=="ready",onClick:a,children:(0,ne.jsx)("img",{src:`${e}&retry=${l}`,alt:t,onLoad:()=>n("ready"),onError:()=>n("error")})}),r==="loading"&&(0,ne.jsxs)("span",{className:"kanban-image-message",role:"status",children:[(0,ne.jsx)(aa,{className:"kanban-animate-spin"}),o("loadingImage")]})]})})}var Up=(0,De.forwardRef)(function({workspaceId:t,cardId:a,images:o,limits:r,disabled:n,onUpload:l,onRemove:s,onBusyChange:i,onPendingChange:d},c){let u=ke(),f=(0,De.useId)(),m=(0,De.useRef)(null),[h,g]=(0,De.useState)([]),p=(0,De.useRef)([]),C=(0,De.useRef)(0),x=(0,De.useRef)(!0),b=(0,De.useRef)(new AbortController),L=(0,De.useRef)(!1),[S,v]=(0,De.useState)(null),[k,y]=(0,De.useState)(""),[E,I]=(0,De.useState)(!1),[R,A]=(0,De.useState)(null);(0,De.useEffect)(()=>(x.current=!0,b.current=new AbortController,()=>{x.current=!1,b.current.abort()}),[]);let H=P=>{x.current&&(p.current=P,g(P),d(P.length>0))},T=async(P,N=p.current)=>{if(L.current)return!1;L.current=!0,i(!0),y("");let K=!0;try{for(let G of N){if(!x.current)return!1;H(p.current.map($=>$.key===G.key?{...$,state:"uploading",error:void 0}:$));try{await l(P,G.file,b.current.signal),H(p.current.filter($=>$.key!==G.key))}catch($){if(K=!1,!x.current)return!1;H(p.current.map(Y=>Y.key===G.key?{...Y,state:"error",error:String($ instanceof Error?$.message:$)}:Y))}}return K}finally{L.current=!1,x.current&&i(!1)}},V=P=>{if(!r||n||L.current||!P.length)return;if(y(""),o.length+p.current.length+P.length>r.maxImagesPerCard){y(u("imageTooMany").replace("{count}",String(r.maxImagesPerCard)));return}for(let K of P){if(!r.mediaTypes.includes(K.type)){y(u("imageInvalidType"));return}if(!K.size||K.size>r.maxImageBytes){y(u("imageTooLarge").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))));return}}let N=P.map(K=>({key:++C.current,file:K,state:"pending"}));H([...p.current,...N]),a&&T(a,N)};(0,De.useImperativeHandle)(c,()=>({uploadPending:T,addFiles:V}));let W=async P=>{if(!(!a||n||L.current)){L.current=!0,i(!0),v(P.attachmentId),y("");try{if(!await s(a,P.attachmentId))throw new Error(u("imageRemoveFailed"))}catch(N){x.current&&y(String(N instanceof Error?N.message:N))}finally{L.current=!1,x.current&&(v(null),i(!1))}}};return(0,ne.jsxs)("section",{className:`kanban-images${E?" is-dragging":""}`,"aria-labelledby":f,onDragOver:P=>{P.dataTransfer.types.includes("Files")&&(P.preventDefault(),P.stopPropagation(),r&&!n&&I(!0))},onDragLeave:P=>{(!(P.relatedTarget instanceof Node)||!P.currentTarget.contains(P.relatedTarget))&&I(!1)},onDrop:P=>{P.dataTransfer.types.includes("Files")&&(P.preventDefault(),P.stopPropagation(),I(!1),V(Array.from(P.dataTransfer.files)))},children:[(0,ne.jsxs)("div",{className:"kanban-field-label",children:[(0,ne.jsxs)("span",{id:f,children:[u("images")," ",(0,ne.jsxs)("span",{className:"kanban-tabular",children:["(",o.length+h.length,")"]})]}),(0,ne.jsxs)(re,{variant:"ghost",size:"sm",disabled:n||!r,onClick:()=>m.current?.click(),children:[(0,ne.jsx)(ur,{}),u("addImages")]}),(0,ne.jsx)("input",{ref:m,type:"file",accept:r?.mediaTypes.join(",")??"image/png,image/jpeg,image/webp",multiple:!0,hidden:!0,disabled:n||!r,"aria-label":u("addImages"),onChange:P=>{V(Array.from(P.currentTarget.files??[])),P.currentTarget.value=""}})]}),!r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:u("imagesUnavailable")}),r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:u("imagesHint").replace("{size}",String(Math.floor(r.maxImageBytes/1048576))).replace("{count}",String(r.maxImagesPerCard))}),k&&(0,ne.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:k}),!o.length&&!h.length&&r&&(0,ne.jsx)("div",{className:"kanban-image-empty",children:u("imagesEmpty")}),(o.length>0||h.length>0)&&(0,ne.jsxs)("div",{className:"kanban-image-grid",children:[o.map((P,N)=>(0,ne.jsxs)("div",{className:"kanban-image-tile",children:[(0,ne.jsx)(yC,{src:ps(t,a,P.attachmentId),label:u("imagePreview").replace("{number}",String(N+1)),onOpen:()=>A(P)}),(0,ne.jsxs)(re,{variant:"ghost",size:"sm",disabled:n||S!==null,"aria-label":u("imageRemove").replace("{number}",String(N+1)),onClick:()=>{W(P)},children:[S===P.attachmentId?(0,ne.jsx)(aa,{className:"kanban-animate-spin"}):(0,ne.jsx)(st,{}),S===P.attachmentId?u("imageRemoving"):u("remove")]})]},P.attachmentId)),h.map(P=>(0,ne.jsxs)("div",{className:"kanban-image-tile",children:[(0,ne.jsx)("div",{className:"kanban-image-preview",children:(0,ne.jsx)(SC,{file:P.file})}),(0,ne.jsxs)("div",{className:"kanban-image-draft-info",children:[(0,ne.jsx)("span",{className:"kanban-image-filename",title:P.file.name,children:P.file.name}),(0,ne.jsx)("span",{role:P.state==="error"?"alert":"status",className:P.state==="error"?"kanban-error":"kanban-muted-small",children:P.state==="uploading"?u("imageUploading"):P.state==="error"?`${u("imageUploadFailed")}: ${P.error}`:u("imagePending")}),(0,ne.jsxs)("div",{className:"kanban-image-draft-actions",children:[P.state==="error"&&a&&(0,ne.jsxs)(re,{size:"sm",variant:"ghost",disabled:n,onClick:()=>{T(a,[P])},children:[(0,ne.jsx)(La,{}),u("retry")]}),(0,ne.jsxs)(re,{size:"sm",variant:"ghost",disabled:n,"aria-label":`${u("remove")}: ${P.file.name}`,onClick:()=>H(p.current.filter(N=>N.key!==P.key)),children:[(0,ne.jsx)(st,{}),u("remove")]})]})]})]},P.key))]}),r&&(0,ne.jsx)("p",{className:"kanban-muted-small",children:u(a?"imagesSaveHint":"imagesDraftHint")}),R&&(0,ne.jsx)(Hp.ImageLightbox,{src:ps(t,a,R.attachmentId),alt:u("images"),labels:{dialog:u("images"),close:u("close")},onClose:()=>A(null)})]})});var ua=require("react/jsx-runtime");function qp({activities:e}){let t=ke();if(e.length===0)return(0,ua.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ua.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,ua.jsxs)("li",{className:"kanban-activity-item",children:[(0,ua.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,ua.jsxs)("p",{className:"kanban-activity-description",children:[(0,ua.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Op(o,t)]}),(0,ua.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Yo(o.ts),children:Yo(o.ts)})]},o.id)})})}var F=require("react/jsx-runtime");function zp({workspaceId:e="default",imageLimits:t=null,images:a=[],onUploadImage:o,onRemoveImage:r,open:n,error:l,card:s,completed:i,completedAt:d,labels:c,comments:u,activities:f,onOpenChange:m,onSave:h,onAddComment:g,onDelete:p,onChatWithAgent:C}){let x=ke(),b=(0,we.useId)(),L=(0,we.useRef)(null),S=(0,we.useRef)(null),[v,k]=(0,we.useState)(!s),[y,E]=(0,we.useState)({id:"",title:"",note:"",label:"",priority:"",dueDate:""}),[I,R]=(0,we.useState)(""),[A,H]=(0,we.useState)(!1),T=(0,we.useRef)(!1),[V,W]=(0,we.useState)(""),[P,N]=(0,we.useState)(null),K=(0,we.useRef)(null),G=(0,we.useRef)(y),$=(0,we.useRef)(null),[Y,ge]=(0,we.useState)(!1),[Ae,he]=(0,we.useState)(!1),[q,ve]=(0,we.useState)(0),Ce=(0,we.useRef)(void 0),xe=(0,we.useRef)(!1),U=(0,we.useRef)(void 0),ae=A||Y,le=(0,we.useRef)(!0);(0,we.useEffect)(()=>(le.current=!0,()=>{le.current=!1}),[]),(0,we.useLayoutEffect)(()=>{let B=Ce.current;if(Ce.current=n?s?.id??"":void 0,!(B===""&&s&&(xe.current||U.current===s.id))&&n){let X={id:s?.id??"",title:s?.title??"",note:s?.note??"",label:s?.label??"",priority:s?.priority??"",dueDate:s?.dueDate??""};G.current=X,E(X),R(""),W(""),N(null),he(!1),ge(!1),ve(Ue=>Ue+1),U.current=void 0,k(!s)}},[n,s?.id]),(0,we.useEffect)(()=>{P&&K.current?.focus()},[P]);let Z=Ae||!!I.trim()||Object.keys(y).some(B=>y[B]!==G.current[B]),w=B=>{if(!(T.current||Y)){if(!B&&P){N(null);return}if(!B&&Z){N("discard");return}m(B)}},M=async B=>{if(T.current||Y)return!1;T.current=!0,H(!0),W("");try{let X=await B();return X===!1&&W(x("actionRetry")),X!==!1}catch(X){return W(x("actionFailed")+String(X instanceof Error?X.message:X)),!1}finally{T.current=!1,H(!1)}},z=async()=>{if(L.current?.reportValidity()){if(I.trim()||Ae){N("chat");return}await M(()=>C(y))&&m(!1)}},j=B=>E(X=>({...X,...B})),me=async()=>{let B=I.trim();!s||!B||B.length>2e3||await M(()=>g(s.id,B))&&R("")};return(0,F.jsx)(Wo,{open:n,onOpenChange:w,children:(0,F.jsxs)(Ml,{open:n,onClose:()=>w(!1),title:x(s?"taskDetails":"addCard"),"aria-describedby":void 0,onPaste:B=>{let X=Array.from(B.clipboardData.files);X.length&&t&&!ae&&!P&&(B.preventDefault(),$.current?.addFiles(X))},children:[(0,F.jsxs)($a,{children:[(0,F.jsx)(Ja,{children:x(s?"taskDetails":"addCard")}),s&&(0,F.jsxs)("span",{className:"kanban-field-id",children:[x("fieldId"),": ",s.id]})]}),(0,F.jsxs)(Ya,{className:"kanban-form-stack",children:[(l||V)&&(0,F.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:l||V}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(dt,{htmlFor:`${b}-title`,className:"kanban-field-label",children:x("fieldTitle")}),(0,F.jsx)(Et,{"data-modal-autofocus":!0,id:`${b}-title`,value:y.title,placeholder:x("titlePlaceholder"),maxLength:120,disabled:ae||!!P,onChange:B=>j({title:B.target.value})})]}),(0,F.jsxs)("div",{className:"kanban-form-row",children:[(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(dt,{htmlFor:`${b}-label`,children:x("fieldLabel")}),(0,F.jsxs)(Jr,{disabled:ae||!!P,value:y.label||"__none__",onValueChange:B=>j({label:B==="__none__"?"":B}),children:[(0,F.jsx)(jo,{id:`${b}-label`,children:(0,F.jsx)(Qr,{placeholder:x("noLabel")})}),(0,F.jsxs)($o,{children:[(0,F.jsx)(da,{value:"__none__",children:x("noLabel")}),c.map(B=>(0,F.jsx)(da,{value:B.name,children:B.name},B.name))]})]})]}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(dt,{htmlFor:`${b}-priority`,children:x("fieldPriority")}),(0,F.jsxs)(Jr,{disabled:ae||!!P,value:y.priority||"__none__",onValueChange:B=>j({priority:B==="__none__"?"":B}),children:[(0,F.jsx)(jo,{id:`${b}-priority`,children:(0,F.jsx)(Qr,{placeholder:x("noPriority")})}),(0,F.jsxs)($o,{children:[(0,F.jsx)(da,{value:"__none__",children:x("noPriority")}),us.map(B=>{let X=zt[B];return(0,F.jsx)(da,{value:B,children:(0,F.jsxs)("span",{className:"kanban-inline-priority",children:[(0,F.jsx)("span",{className:"kanban-priority-dot",style:{background:X.color}}),X.label]})},B)})]})]})]})]}),(0,F.jsxs)("div",{className:s?"kanban-form-row kanban-date-fields":void 0,children:[(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(dt,{htmlFor:`${b}-due-date`,children:x("fieldDueDate")}),(0,F.jsxs)("div",{className:"kanban-due-date-controls",children:[(0,F.jsx)(Et,{ref:L,id:`${b}-due-date`,type:"date",min:"0001-01-01",max:"9999-12-31",value:y.dueDate,disabled:ae||!!P,onChange:B=>j({dueDate:B.target.value})}),(0,F.jsxs)("div",{className:"kanban-date-shortcuts",children:[[["today",0],["tomorrow",1],["nextWeek",7]].map(([B,X])=>(0,F.jsx)(re,{type:"button",variant:"ghost",size:"sm",disabled:ae||!!P,onClick:()=>j({dueDate:co(new Date,X)}),children:x(B)},B)),(0,F.jsx)(re,{type:"button",variant:"ghost",size:"sm",disabled:ae||!!P||!y.dueDate,onClick:()=>j({dueDate:""}),children:x("clearDate")})]})]})]}),s&&(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsx)(dt,{htmlFor:`${b}-completed-date`,children:x("fieldCompletedDate")}),(0,F.jsx)("output",{id:`${b}-completed-date`,className:"kanban-completed-date","aria-describedby":i&&!d?`${b}-completed-date-hint`:void 0,children:i?d?(0,F.jsx)("time",{dateTime:d,children:Yo(d)}):x("completedDateUnknown"):"\u2014"}),i&&!d&&(0,F.jsx)("p",{id:`${b}-completed-date-hint`,className:"kanban-muted-small",children:x("completedDateUnknownHint")})]})]}),(0,F.jsxs)("div",{className:"kanban-form-field",children:[(0,F.jsxs)("div",{className:"kanban-field-label",children:[(0,F.jsx)(dt,{id:`${b}-note-label`,htmlFor:v?`${b}-note`:void 0,children:x("fieldNote")}),(0,F.jsxs)(re,{variant:"ghost",size:"sm",disabled:ae||!!P,"aria-controls":`${b}-description`,onClick:()=>{k(!v),v||requestAnimationFrame(()=>S.current?.focus())},children:[v?(0,F.jsx)(pt,{}):(0,F.jsx)(pr,{}),x(v?"finishEditingNote":"editNote")]})]}),(0,F.jsx)("div",{id:`${b}-description`,children:v?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ds,{ref:S,id:`${b}-note`,className:"kanban-markdown-source",value:y.note,placeholder:x("notePlaceholder"),rows:12,maxLength:2e3,disabled:ae||!!P,onChange:B=>j({note:B.target.value})}),(0,F.jsxs)("p",{className:"kanban-note-hint",children:[x("markdownEditHint")," ",(0,F.jsxs)("span",{className:"kanban-tabular",children:[y.note.length,"/2000"]})]})]}):(0,F.jsx)("div",{className:"kanban-markdown-preview",role:"region","aria-labelledby":`${b}-note-label`,children:y.note.trim()?(0,F.jsx)(Wp.MarkdownText,{text:y.note,labels:{code:{copyLabel:x("copyCode"),copiedLabel:x("copiedCode")},footnotes:x("footnotes")}}):(0,F.jsx)("p",{className:"kanban-muted-small",children:x("emptyNote")})})})]}),(0,F.jsx)(Up,{ref:$,workspaceId:e,cardId:y.id||s?.id,images:a,limits:t,disabled:ae||!!P,onUpload:o??(async()=>{throw new Error(x("imagesUnavailable"))}),onRemove:r??(async()=>!1),onBusyChange:ge,onPendingChange:B=>{he(B),B||W(X=>X===x("imageUploadPartial")?"":X)}},q),s&&(0,F.jsxs)("div",{className:"kanban-comments-box",children:[(0,F.jsxs)(dt,{htmlFor:`${b}-comment`,children:[x("commentsTitle")," ",(0,F.jsxs)("span",{className:"kanban-tabular",children:["(",u.length,")"]})]}),(0,F.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:u.length===0?(0,F.jsx)("p",{className:"kanban-muted-small",children:x("commentEmpty")}):(0,F.jsx)("ol",{className:"kanban-comment-list",children:u.map(B=>{let X=B.source==="agent";return(0,F.jsxs)("li",{className:"kanban-comment-item",children:[(0,F.jsxs)("div",{className:"kanban-comment-meta",children:[(0,F.jsx)("span",{className:`kanban-activity-actor ${X?"is-agent":"is-human"}`,children:x(X?"actorAgent":"actorHuman")}),(0,F.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:B.createdAt,children:Yo(B.createdAt)})]}),(0,F.jsx)("p",{className:"kanban-comment-content",children:B.content})]},B.id)})})}),(0,F.jsxs)("div",{className:"kanban-comment-composer",children:[(0,F.jsx)(ds,{id:`${b}-comment`,value:I,placeholder:x("commentPlaceholder"),rows:3,maxLength:2e3,disabled:ae||!!P,onChange:B=>R(B.target.value),onKeyDown:B=>{(B.metaKey||B.ctrlKey)&&B.key==="Enter"&&(B.preventDefault(),me())}}),(0,F.jsxs)(re,{type:"button",variant:"outline",disabled:ae||!!P||!I.trim(),onClick:()=>{me()},children:[(0,F.jsx)(gr,{className:"kanban-icon"}),x("sendComment")]})]})]}),s&&(0,F.jsxs)("div",{className:"kanban-activity-box",children:[(0,F.jsx)(dt,{className:"kanban-muted-small",children:x("activityTitle")}),(0,F.jsx)("div",{className:"kanban-activity-scroll",children:(0,F.jsx)(qp,{activities:f})})]})]}),(0,F.jsx)(Za,{children:P?(0,F.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,F.jsx)("p",{role:"alert",children:x(P==="discard"?"discardChangesDesc":P==="delete"?"deleteCardDesc":Ae?"discardImagesDesc":"discardCommentDesc")}),(0,F.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,F.jsx)(re,{ref:K,variant:"outline",disabled:ae,onClick:()=>N(null),children:x("cancel")}),(0,F.jsx)(re,{variant:"destructive",disabled:ae,onClick:async()=>{if(P==="discard"){m(!1);return}if(P==="delete"){s&&p&&await M(()=>p(s))&&m(!1);return}await M(()=>C(y))&&m(!1)},children:x(P==="discard"?"discardChanges":P==="delete"?"confirmDelete":"discardAndContinue")})]})]}):(0,F.jsxs)(F.Fragment,{children:[s&&p&&(0,F.jsxs)(re,{variant:"ghost",className:"kanban-dialog-delete",disabled:ae,onClick:()=>N("delete"),children:[(0,F.jsx)(Pt,{className:"kanban-icon"}),x("delete")]}),(0,F.jsxs)(re,{variant:"outline",disabled:ae||!y.title.trim()&&!y.note.trim(),onClick:()=>{z()},children:[(0,F.jsx)(oa,{className:"kanban-icon"}),x("chatWithAgent")]}),(0,F.jsx)(re,{disabled:ae||!y.title.trim(),onClick:async()=>{L.current?.reportValidity()&&await M(async()=>{xe.current=!y.id;let B;try{B=await h(y),xe.current&&typeof B=="object"&&(U.current=B.cardId)}finally{xe.current=!1}if(!le.current||B===!1)return!1;let X={...y,...typeof B=="object"?{id:B.cardId}:{}};if(E(X),G.current=X,Ae&&(!X.id||!await $.current?.uploadPending(X.id))){le.current&&W(x("imageUploadPartial"));return}le.current&&!I.trim()&&m(!1)})},children:x("save")})]})})]})})}var Gp=require("react");var Vp=require("react/jsx-runtime");function kC({variant:e,className:t}={}){return ie("kanban-badge",`kanban-badge--${e??"default"}`,t)}function ni({className:e,variant:t,...a}){return(0,Vp.jsx)("div",{className:kC({variant:t,className:e}),...a})}var fo=J(require("react"),1);var po=require("react/jsx-runtime"),si=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-card",e),...t}));si.displayName="Card";var RC=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-card-header",e),...t}));RC.displayName="CardHeader";var PC=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-ui-card-title",e),...t}));PC.displayName="CardTitle";var DC=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-card-description",e),...t}));DC.displayName="CardDescription";var li=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-card-content",e),...t}));li.displayName="CardContent";var MC=fo.forwardRef(({className:e,...t},a)=>(0,po.jsx)("div",{ref:a,className:ie("kanban-card-footer",e),...t}));MC.displayName="CardFooter";var Me=require("react/jsx-runtime");function ii({card:e,labels:t,completed:a=!1,today:o=co(),query:r=""}){let n=ke(),l=r.trim().toLowerCase(),s=l&&!e.title.toLowerCase().includes(l)&&!e.note.toLowerCase().includes(l)?e.comments.find(h=>h.content.toLowerCase().includes(l))?.content:void 0,i=s?s.slice(Math.max(0,s.toLowerCase().indexOf(l)-24),s.toLowerCase().indexOf(l)+l.length+70):"",d=e.images?.length??0,c=e.priority?zt[e.priority]:null,u=Tp(t,e.label),f=a?"completed":e.dueDate===o?"today":e.dueDate&&e.dueDate<o?"overdue":"future",m=e.dueDate?f==="today"?n("dueToday"):f==="overdue"?n("overdueDays").replace("{days}",String(ai(e.dueDate,o))):Ep(e.dueDate,o,n):"";return(0,Me.jsx)(si,{className:"kanban-card",children:(0,Me.jsxs)(li,{className:"kanban-sortable-card-content",children:[(e.label||c)&&(0,Me.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Me.jsxs)(ni,{variant:"secondary",className:"kanban-card-badge",children:[(0,Me.jsx)("span",{className:"kanban-label-dot",style:{background:u},"aria-hidden":"true"}),e.label]}),c&&(0,Me.jsxs)(ni,{variant:"secondary",className:"kanban-card-badge",children:[(0,Me.jsx)("span",{className:"kanban-label-dot",style:{background:c.color},"aria-hidden":"true"}),c.label]})]}),(0,Me.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Me.jsx)("p",{className:"kanban-card-note",children:e.note}),s&&(0,Me.jsxs)("p",{className:"kanban-search-match",children:[n("matchComment"),": ",i]}),(e.dueDate||e.comments.length>0||d>0)&&(0,Me.jsxs)("div",{className:"kanban-card-status-row",children:[e.dueDate&&(0,Me.jsxs)("span",{className:`kanban-card-due-date is-${f}`,title:`${n("fieldDueDate")}: ${e.dueDate}${a?` \xB7 ${n("completed")}`:""}`,children:[(0,Me.jsx)(Aa,{"aria-hidden":"true"}),(0,Me.jsx)("span",{children:m})]}),d>0&&(0,Me.jsxs)("span",{className:"kanban-card-comment-count","aria-label":`${n("images")}: ${d}`,title:`${n("images")}: ${d}`,children:[(0,Me.jsx)(cr,{"aria-hidden":"true"}),(0,Me.jsx)("span",{className:"kanban-tabular",children:d})]}),e.comments.length>0&&(0,Me.jsxs)("span",{className:"kanban-card-comment-count",title:`${n("commentsTitle")}: ${e.comments.length}`,"aria-label":`${n("commentsTitle")}: ${e.comments.length}`,children:[(0,Me.jsx)(oa,{"aria-hidden":"true"}),(0,Me.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})]})})}function Kp({card:e,labels:t,completed:a,today:o=co(),query:r,onOpen:n}){let l=ke(),s=(0,Gp.useId)(),{attributes:i,listeners:d,setNodeRef:c,transform:u,transition:f,isDragging:m}=yn({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Me.jsxs)("div",{ref:c,style:{transform:Ct.Transform.toString(u),transition:f},...i,...d,"aria-label":e.title,"aria-describedby":s,onKeyDown:h=>{h.key==="Enter"&&!m?(h.preventDefault(),n(e)):d?.onKeyDown?.(h)},onClick:h=>{h.currentTarget.focus(),n(e)},className:`kanban-sortable-card${m?" is-dragging":""}`,children:[(0,Me.jsxs)("span",{id:s,className:"kanban-sr-only",children:[l("cardKeyboardHelp"),e.dueDate&&` ${l("fieldDueDate")}: ${e.dueDate}. ${a?l("completed"):e.dueDate===o?l("dueToday"):e.dueDate<o?l("overdueDays").replace("{days}",String(ai(e.dueDate,o))):""}`]}),(0,Me.jsx)(ii,{card:e,labels:t,completed:a,today:o,query:r})]})}var kt=require("react/jsx-runtime");function Xp({column:e,cards:t,totalCount:a,filtered:o,labels:r,completed:n,today:l,query:s,onAddCard:i,onOpenCard:d}){let{setNodeRef:c,isOver:u}=Cn({id:e.id,data:{type:"column"}}),{active:f,over:m}=Tr(),h=ke(),g=f?.data.current?.type==="card"&&(u||m?.data.current?.columnId===e.id);return(0,kt.jsxs)("div",{ref:c,className:`kanban-column${g?" is-over":""}`,children:[(0,kt.jsxs)("div",{className:"kanban-column-header",children:[(0,kt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,kt.jsx)("span",{className:"kanban-column-count",children:o?`${t.length} / ${a}`:t.length})]}),(0,kt.jsxs)("div",{className:"kanban-column-cards",children:[(0,kt.jsx)(Sn,{items:t.map(p=>p.id),strategy:wn,children:t.map(p=>(0,kt.jsx)(Kp,{card:p,labels:r,completed:n,today:l,query:s,onOpen:d},p.id))}),t.length===0&&(0,kt.jsx)("p",{className:"kanban-column-empty",children:h(o?"noMatchingCards":"emptyColumn")})]}),(0,kt.jsx)("div",{className:"kanban-column-footer",children:(0,kt.jsxs)(re,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>i(e),children:[(0,kt.jsx)(Ta,{className:"kanban-icon"}),h("addCard")]})})]})}var ct=require("react");var se=require("react/jsx-runtime");function AC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n,disabled:l}){let{attributes:s,listeners:i,setNodeRef:d,transform:c,transition:u,isDragging:f}=yn({id:e.id,disabled:l}),m=ke();return(0,se.jsxs)("div",{ref:d,style:{transform:Ct.Transform.toString(c),transition:u},className:"kanban-editor-row","data-dragging":f||void 0,children:[(0,se.jsx)("button",{...s,...i,className:"kanban-drag-handle",disabled:l,"aria-label":`${m("dragSort")}: ${e.title}`,children:(0,se.jsx)(dr,{className:"kanban-icon"})}),(0,se.jsx)(Et,{className:"kanban-editor-name","aria-label":`${m("columnName")}: ${e.title}`,value:t,disabled:l,maxLength:40,onChange:h=>a(h.target.value),onBlur:o,onKeyDown:h=>{h.key==="Enter"&&h.target.blur()}}),(0,se.jsx)(re,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${m("delete")}: ${e.title}`,disabled:l||!n,onClick:r,children:(0,se.jsx)(Pt,{className:"kanban-icon"})})]})}function jp({open:e,error:t,columns:a,completedColumnId:o,onSetCompletedColumn:r,onOpenChange:n,onReorder:l,onRename:s,onDelete:i,onAdd:d}){let c=ke(),u=(0,ct.useId)(),f=(0,ct.useId)(),[m,h]=(0,ct.useState)({}),[g,p]=(0,ct.useState)(""),[C,x]=(0,ct.useState)(!1),b=(0,ct.useRef)(!1),[L,S]=(0,ct.useState)(""),[v,k]=(0,ct.useState)(null),y=(0,ct.useRef)(null),E=mn(Wa(Do,{activationConstraint:{distance:8}}),Wa(Ia,{coordinateGetter:kn}));(0,ct.useEffect)(()=>{e&&(h(Object.fromEntries(a.map(T=>[T.id,T.title]))),p(""),S(""),k(null))},[e]),(0,ct.useEffect)(()=>{v&&y.current?.focus()},[v]);let I=async T=>{if(b.current)return!1;b.current=!0,x(!0),S("");try{let V=await T();return V===!1&&S(c("actionRetry")),V!==!1}catch(V){return S(c("actionFailed")+String(V instanceof Error?V.message:V)),!1}finally{b.current=!1,x(!1)}},R=async()=>{let T=g.trim();T&&await I(()=>d(T))&&p("")},A=T=>{let V=(m[T]??"").trim(),W=a.find(P=>P.id===T);W&&V&&V!==W.title&&I(()=>s(T,V))},H=T=>{let{active:V,over:W}=T;W&&V.id!==W.id&&I(()=>l(String(V.id),String(W.id)))};return(0,se.jsx)(Wo,{open:e,onOpenChange:T=>{if(!b.current){if(!T&&v){k(null);return}n(T)}},children:(0,se.jsxs)(zr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,se.jsxs)($a,{children:[(0,se.jsx)(Ja,{children:c("columnEdit")}),(0,se.jsx)(Vr,{children:c("columnEditDesc")})]}),(0,se.jsxs)(Ya,{className:"kanban-editor-body",children:[(t||L)&&(0,se.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||L}),(0,se.jsxs)("section",{className:"kanban-editor-section","aria-label":c("boardLists"),children:[(0,se.jsxs)("h3",{className:"kanban-editor-caption",children:[c("boardLists")," ",(0,se.jsx)("span",{children:a.length})]}),(0,se.jsx)(bn,{sensors:E,collisionDetection:Ud,onDragEnd:H,children:(0,se.jsx)(Sn,{items:a.map(T=>T.id),strategy:wn,children:(0,se.jsx)("div",{className:"kanban-editor-list",children:a.map(T=>(0,se.jsx)(AC,{column:T,value:m[T.id]??T.title,onValueChange:V=>h(W=>({...W,[T.id]:V})),onCommit:()=>A(T.id),onDelete:()=>k(T),disabled:C||!!v,canDelete:a.length>1},T.id))})})})]}),(0,se.jsxs)("div",{className:"kanban-editor-setting",children:[(0,se.jsxs)("div",{className:"kanban-editor-setting-copy",children:[(0,se.jsx)(dt,{htmlFor:u,children:c("completedColumn")}),(0,se.jsx)("p",{id:`${u}-hint`,className:"kanban-muted-small",children:c("completedColumnHint")})]}),(0,se.jsxs)(Jr,{value:o||"__none__",disabled:C||!!v,onValueChange:T=>{I(()=>r(T==="__none__"?null:T))},children:[(0,se.jsx)(jo,{id:u,"aria-describedby":`${u}-hint`,children:(0,se.jsx)(Qr,{})}),(0,se.jsxs)($o,{children:[(0,se.jsx)(da,{value:"__none__",children:c("noCompletedColumn")}),a.map(T=>(0,se.jsx)(da,{value:T.id,children:T.title},T.id))]})]})]})]}),(0,se.jsx)(Za,{children:v?(0,se.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,se.jsx)("p",{role:"alert",children:c("deleteColumnDesc").replace("{column}",v.title)}),(0,se.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,se.jsx)(re,{ref:y,variant:"outline",disabled:C,onClick:()=>k(null),children:c("cancel")}),(0,se.jsx)(re,{variant:"destructive",disabled:C,onClick:async()=>{await I(()=>i(v.id))&&k(null)},children:c("confirmDelete")})]})]}):(0,se.jsxs)("div",{className:"kanban-editor-add",children:[(0,se.jsx)(dt,{htmlFor:f,children:c("newColumnPlaceholder")}),(0,se.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,se.jsx)("span",{className:"kanban-editor-add-icon","aria-hidden":"true",children:(0,se.jsx)(Ta,{className:"kanban-icon"})}),(0,se.jsx)(Et,{id:f,value:g,disabled:C,placeholder:c("newColumnPlaceholder"),"aria-label":c("newColumnPlaceholder"),maxLength:40,onChange:T=>p(T.target.value),onKeyDown:T=>{T.key==="Enter"&&(T.preventDefault(),R())}}),(0,se.jsx)(re,{size:"sm",className:"kanban-editor-add-button",disabled:C||!g.trim(),onClick:()=>{R()},children:c("add")})]})]})})]})})}var ft=require("react");var be=require("react/jsx-runtime");function $p({open:e,error:t,labels:a,onOpenChange:o,onAdd:r,onUpdate:n,onDelete:l}){let s=ke(),i=(0,ft.useId)(),[d,c]=(0,ft.useState)({}),[u,f]=(0,ft.useState)(""),[m,h]=(0,ft.useState)("#38bdf8"),[g,p]=(0,ft.useState)(!1),C=(0,ft.useRef)(!1),[x,b]=(0,ft.useState)(""),[L,S]=(0,ft.useState)(null),v=(0,ft.useRef)(null);(0,ft.useEffect)(()=>{e&&(c(Object.fromEntries(a.map(I=>[I.name,{name:I.name,color:I.color}]))),f(""),h("#38bdf8"),b(""),S(null))},[e]),(0,ft.useEffect)(()=>{L&&v.current?.focus()},[L]);let k=async I=>{if(C.current)return!1;C.current=!0,p(!0),b("");try{let R=await I();return R===!1&&b(s("actionRetry")),R!==!1}catch(R){return b(s("actionFailed")+String(R instanceof Error?R.message:R)),!1}finally{C.current=!1,p(!1)}},y=async()=>{let I=u.trim();I&&await k(()=>r(I,m))&&f("")},E=I=>{let R=d[I];if(!R)return;let A=a.find(T=>T.name===I),H=R.name.trim();A&&H&&(H!==I||R.color!==A.color)&&k(()=>n(I,H,R.color))};return(0,be.jsx)(Wo,{open:e,onOpenChange:I=>{if(!C.current){if(!I&&L){S(null);return}o(I)}},children:(0,be.jsxs)(zr,{className:"kanban-dialog-medium kanban-editor-dialog",children:[(0,be.jsxs)($a,{children:[(0,be.jsx)(Ja,{children:s("labelEdit")}),(0,be.jsx)(Vr,{children:s("labelEditDesc")})]}),(0,be.jsxs)(Ya,{className:"kanban-editor-body",children:[(t||x)&&(0,be.jsx)("p",{className:"kanban-dialog-error",role:"alert",children:t||x}),(0,be.jsxs)("section",{className:"kanban-editor-section","aria-label":s("boardLabels"),children:[(0,be.jsxs)("h3",{className:"kanban-editor-caption",children:[s("boardLabels")," ",(0,be.jsx)("span",{children:a.length})]}),(0,be.jsxs)("div",{className:"kanban-editor-list",children:[a.length===0&&(0,be.jsxs)("div",{className:"kanban-editor-empty",children:[(0,be.jsx)(xr,{className:"kanban-icon","aria-hidden":"true"}),(0,be.jsx)("p",{children:s("noLabelsHint")})]}),a.map(I=>{let R=d[I.name]??{name:I.name,color:I.color};return(0,be.jsxs)("div",{className:"kanban-editor-row",children:[(0,be.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${I.name}`,title:`${s("labelColor")}: ${I.name}`,value:R.color,disabled:g||!!L,className:"kanban-color-input",onChange:A=>c(H=>({...H,[I.name]:{...R,color:A.target.value}})),onBlur:()=>E(I.name)}),(0,be.jsx)(Et,{className:"kanban-editor-name","aria-label":`${s("labelName")}: ${I.name}`,value:R.name,disabled:g||!!L,maxLength:20,onChange:A=>c(H=>({...H,[I.name]:{...R,name:A.target.value}})),onBlur:()=>E(I.name),onKeyDown:A=>{A.key==="Enter"&&A.target.blur()}}),(0,be.jsx)(re,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-editor-delete","aria-label":`${s("deleteLabel")}: ${I.name}`,disabled:g||!!L,onClick:()=>S(I.name),children:(0,be.jsx)(Pt,{className:"kanban-icon"})})]},I.name)})]})]})]}),(0,be.jsx)(Za,{children:L?(0,be.jsxs)("div",{className:"kanban-dialog-confirm",children:[(0,be.jsx)("p",{role:"alert",children:s("deleteLabelDesc").replace("{label}",L)}),(0,be.jsxs)("div",{className:"kanban-confirm-actions",children:[(0,be.jsx)(re,{ref:v,variant:"outline",disabled:g,onClick:()=>S(null),children:s("cancel")}),(0,be.jsx)(re,{variant:"destructive",disabled:g,onClick:async()=>{await k(()=>l(L))&&S(null)},children:s("confirmDelete")})]})]}):(0,be.jsxs)("div",{className:"kanban-editor-add",children:[(0,be.jsx)(dt,{htmlFor:i,children:s("newLabelPlaceholder")}),(0,be.jsxs)("div",{className:"kanban-editor-add-row",children:[(0,be.jsx)("input",{type:"color","aria-label":s("newLabelColor"),title:s("newLabelColor"),value:m,disabled:g,className:"kanban-color-input",onChange:I=>h(I.target.value)}),(0,be.jsx)(Et,{id:i,value:u,disabled:g,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:I=>f(I.target.value),onKeyDown:I=>{I.key==="Enter"&&(I.preventDefault(),y())}}),(0,be.jsx)(re,{size:"sm",className:"kanban-editor-add-button",disabled:g||!u.trim(),onClick:()=>{y()},children:s("add")})]})]})})]})})}function di(e,t=""){let a=t.trim().toLowerCase();return a?[e.id,e.title,e.note,...(e.comments||[]).map(o=>o.content)].some(o=>typeof o=="string"&&o.toLowerCase().includes(a)):!0}var an=J(require("react"),1);var Vt=J(require("react"),1);var oe=J(require("react"),1);var je=J(require("react"),1);var EC=J(require("react"),1),ms=J(require("react"),1),TC=Object.defineProperty,ci=(e,t)=>TC(e,"name",{value:t,configurable:!0}),ui=!1;function Yp(){let[e,t]=ms.useState(ui);return ms.useEffect(()=>{ui||(ui=!0,t(!0))},[]),e}ci(Yp,"useIsHydrated");var Zp=EC[" useSyncExternalStore ".trim().toString()];function Jp(){return()=>{}}ci(Jp,"subscribe");function Qp(){return Zp(Jp,()=>!0,()=>!1)}ci(Qp,"useIsHydratedModern");var em=typeof Zp=="function"?Qp:Yp;var Da=require("react/jsx-runtime"),FC=Object.defineProperty,mo=(e,t)=>FC(e,"name",{value:t,configurable:!0}),fi="rovingFocusGroup.onEntryFocus",OC={bubbles:!1,cancelable:!0},gs="RovingFocusGroup",[pi,am,BC]=Qa(gs),[NC,mi]=Qe(gs,[BC]),tm={Vertical:"vertical",Horizontal:"horizontal"},_C={LTR:"ltr",RTL:"rtl"},[HC,UC]=NC(gs),om=je.forwardRef(mo(function(t,a){return(0,Da.jsx)(pi.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,Da.jsx)(pi.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,Da.jsx)(qC,{...t,ref:a})})})},"RovingFocusGroup")),qC=je.forwardRef(mo(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:d,onEntryFocus:c,preventScrollOnEntryFocus:u=!1,...f}=t,m=je.useRef(null),h=de(a,m),g=eo(l),[p,C]=jt({prop:s,defaultProp:i??null,onChange:d,caller:gs}),[x,b]=je.useState(!1),L=Ge(c),S=am(o),v=je.useRef(!1),[k,y]=je.useState(0);return je.useEffect(()=>{let E=m.current;if(E)return E.addEventListener(fi,L),()=>E.removeEventListener(fi,L)},[L]),(0,Da.jsx)(HC,{scope:o,orientation:r,dir:g,loop:n,currentTabStopId:p,onItemFocus:je.useCallback(E=>C(E),[C]),onItemShiftTab:je.useCallback(()=>b(!0),[]),onFocusableItemAdd:je.useCallback(()=>y(E=>E+1),[]),onFocusableItemRemove:je.useCallback(()=>y(E=>E-1),[]),children:(0,Da.jsx)(ue.div,{tabIndex:x||k===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:Q(t.onMouseDown,()=>{v.current=!0}),onFocus:Q(t.onFocus,E=>{let I=!v.current;if(E.target===E.currentTarget&&I&&!x){let R=new CustomEvent(fi,OC);if(E.currentTarget.dispatchEvent(R),!R.defaultPrevented){let A=S().filter(P=>P.focusable),H=A.find(P=>P.active),T=A.find(P=>P.id===p),W=[H,T,...A].filter(Boolean).map(P=>P.ref.current);gi(W,u)}}v.current=!1}),onBlur:Q(t.onBlur,()=>b(!1))})})},"RovingFocusGroupImpl")),WC="RovingFocusGroupItem",rm=je.forwardRef(mo(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,d=It(),c=l||d,u=UC(WC,o),f=u.currentTabStopId===c,m=am(o),{onFocusableItemAdd:h,onFocusableItemRemove:g,currentTabStopId:p}=u,C=em();return pe(()=>{if(!(!C||!r))return h(),()=>g()},[C,r,h,g]),je.useEffect(()=>{if(!(C||!r))return h(),()=>g()},[C,r,h,g]),(0,Da.jsx)(pi.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,Da.jsx)(ue.span,{tabIndex:f?0:-1,"data-orientation":u.orientation,...i,ref:a,onMouseDown:Q(t.onMouseDown,x=>{r?u.onItemFocus(c):x.preventDefault()}),onFocus:Q(t.onFocus,()=>u.onItemFocus(c)),onKeyDown:Q(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){u.onItemShiftTab();return}if(x.target!==x.currentTarget)return;let b=sm(x,u.orientation,u.dir);if(b!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let S=m().filter(v=>v.focusable).map(v=>v.ref.current);if(b==="last")S.reverse();else if(b==="prev"||b==="next"){b==="prev"&&S.reverse();let v=S.indexOf(x.currentTarget);S=u.loop?lm(S,v+1):S.slice(v+1)}setTimeout(()=>gi(S))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:p!=null}):s})})},"RovingFocusGroupItem")),zC={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function nm(e,t){return t!==_C.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}mo(nm,"getDirectionAwareKey");function sm(e,t,a){let o=nm(e.key,a);if(!(t===tm.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===tm.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return zC[o]}mo(sm,"getFocusIntent");function gi(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}mo(gi,"focusFirst");function lm(e,t){return e.map((a,o)=>e[(t+o)%e.length])}mo(lm,"wrapArray");var Se=require("react/jsx-runtime"),GC=Object.defineProperty,Re=(e,t)=>GC(e,"name",{value:t,configurable:!0});var hi=["Enter"," "],KC=["ArrowDown","PageUp","Home"],dm=["ArrowUp","PageDown","End"],XC=[...KC,...dm],jR={ltr:[...hi,"ArrowRight"],rtl:[...hi,"ArrowLeft"]};var xs="Menu",[xi,jC,$C]=Qa(xs),[go,Ci]=Qe(xs,[$C,Ko,mi]),Li=Ko(),um=mi(),[YC,tn]=go(xs),[ZC,vi]=go(xs),cm=Re(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Li(t),[i,d]=oe.useState(null),c=oe.useRef(!1),u=Ge(n),f=eo(r);return oe.useEffect(()=>{let m=Re(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=Re(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",m,{capture:!0}),()=>{document.removeEventListener("keydown",m,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),oe.useEffect(()=>{if(!a)return;let m=Re(()=>u(!1),"handleBlur");return window.addEventListener("blur",m),()=>window.removeEventListener("blur",m)},[a,u]),(0,Se.jsx)(as,{...s,children:(0,Se.jsx)(YC,{scope:t,open:a,onOpenChange:u,content:i,onContentChange:d,children:(0,Se.jsx)(ZC,{scope:t,onClose:oe.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),fm=oe.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t,n=Li(o);return(0,Se.jsx)(os,{...n,...r,ref:a})},"MenuAnchor")),pm="MenuPortal",[JC,QC]=go(pm,{forceMount:void 0}),mm=Re(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=tn(pm,t);return(0,Se.jsx)(JC,{scope:t,forceMount:a,children:(0,Se.jsx)(sa,{present:a||n.open,children:(0,Se.jsx)(Fo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),Ma="MenuContent",[eL,gm]=go(Ma),hm=oe.forwardRef(Re(function(t,a){let o=QC(Ma,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=tn(Ma,t.__scopeMenu),s=vi(Ma,t.__scopeMenu);return(0,Se.jsx)(xi.Provider,{scope:t.__scopeMenu,children:(0,Se.jsx)(sa,{present:r||l.open,children:(0,Se.jsx)(xi.Slot,{scope:t.__scopeMenu,children:s.modal?(0,Se.jsx)(tL,{...n,ref:a}):(0,Se.jsx)(aL,{...n,ref:a})})})})},"MenuContent")),tL=oe.forwardRef(Re(function(t,a){let o=tn(Ma,t.__scopeMenu),r=oe.useRef(null),n=de(a,r);return oe.useEffect(()=>{let l=r.current;if(l)return qo(l)},[]),(0,Se.jsx)(xm,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:Q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),aL=oe.forwardRef(Re(function(t,a){let o=tn(Ma,t.__scopeMenu);return(0,Se.jsx)(xm,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),oL=ot("MenuContent.ScrollLock"),xm=oe.forwardRef(Re(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:d,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:m,onDismiss:h,disableOutsideScroll:g,...p}=t,C=tn(Ma,o),x=vi(Ma,o),b=Li(o),L=um(o),S=jC(o),[v,k]=oe.useState(null),y=oe.useRef(null),[E,I]=oe.useState(null);tl(E);let{nodes:R,registry:A}=Nr(),H=!!(n||g),T=de(a,y,C.onContentChange,I),V=oe.useRef(0),W=oe.useRef(""),P=oe.useRef(0),N=oe.useRef(null),K=oe.useRef("right"),G=oe.useRef(0),$=oe.useMemo(()=>g?[y,...R.map(q=>({current:q}))]:[],[y,R,g]),Y=g?Xa:oe.Fragment,ge=g?{as:oL,allowPinchZoom:!0,shards:$}:void 0,Ae=Re(q=>{let ve=W.current+q,Ce=S().filter(M=>!M.disabled),xe=document.activeElement,U=Ce.find(M=>M.ref.current===xe)?.textValue,ae=Ce.map(M=>M.textValue),le=ym(ae,ve,U),Z=Ce.find(M=>M.textValue===le)?.ref.current;function w(M){W.current=M,window.clearTimeout(V.current),M!==""&&(V.current=window.setTimeout(()=>w(""),1e3))}Re(w,"updateSearch"),w(ve),Z&&setTimeout(()=>Z.focus())},"handleTypeaheadSearch");oe.useEffect(()=>()=>window.clearTimeout(V.current),[]),wa();let he=oe.useCallback(q=>K.current===N.current?.side&&Rm(q,N.current?.area),[]);return(0,Se.jsx)(eL,{scope:o,searchRef:W,onItemEnter:oe.useCallback(q=>{he(q)&&q.preventDefault()},[he]),onItemLeave:oe.useCallback(q=>{he(q)||(y.current?.focus(),k(null))},[he]),onTriggerLeave:oe.useCallback(q=>{he(q)&&q.preventDefault()},[he]),pointerGraceTimerRef:P,onPointerGraceIntentChange:oe.useCallback(q=>{N.current=q},[]),children:(0,Se.jsx)(Br,{registry:H?A:null,children:(0,Se.jsx)(Y,{...ge,children:(0,Se.jsx)(Eo,{asChild:!0,trapped:n,branches:R,onMountAutoFocus:Q(l,q=>{q.preventDefault(),y.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,Se.jsx)(To,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:m,onDismiss:h,children:(0,Se.jsx)(om,{asChild:!0,...L,dir:x.dir,orientation:"vertical",loop:r,currentTabStopId:v,onCurrentTabStopIdChange:k,onEntryFocus:Q(d,q=>{x.isUsingKeyboardRef.current||q.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,Se.jsx)(rs,{role:"menu","aria-orientation":"vertical","data-state":vm(C.open),"data-radix-menu-content":"",dir:x.dir,...b,...p,ref:T,style:{outline:"none",...p.style},onKeyDown:Q(p.onKeyDown,q=>{let Ce=q.target.closest("[data-radix-menu-content]")===q.currentTarget,xe=q.ctrlKey||q.altKey||q.metaKey,U=q.key.length===1;Ce&&(q.key==="Tab"&&q.preventDefault(),!xe&&U&&Ae(q.key));let ae=y.current;if(q.target!==ae||!XC.includes(q.key))return;q.preventDefault();let Z=S().filter(w=>!w.disabled).map(w=>w.ref.current);dm.includes(q.key)&&Z.reverse(),wm(Z)}),onBlur:Q(t.onBlur,q=>{q.currentTarget.contains(q.target)||(window.clearTimeout(V.current),W.current="")}),onPointerMove:Q(t.onPointerMove,hs(q=>{let ve=q.target,Ce=G.current!==q.clientX;if(q.currentTarget.contains(ve)&&Ce){let xe=q.clientX>G.current?"right":"left";K.current=xe,G.current=q.clientX}}))})})})})})})})},"MenuContentImpl"));var bm=oe.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(ue.div,{...r,ref:a})},"MenuLabel")),bi="MenuItem",im="menu.itemSelect",Cm=oe.forwardRef(Re(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=oe.useRef(null),s=vi(bi,t.__scopeMenu),i=gm(bi,t.__scopeMenu),d=de(a,l),c=oe.useRef(!1),u=Re(()=>{let f=l.current;if(!o&&f){let m=new CustomEvent(im,{bubbles:!0,cancelable:!0});f.addEventListener(im,h=>r?.(h),{once:!0}),Fr(f,m),m.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,Se.jsx)(rL,{...n,ref:d,disabled:o,onClick:Q(t.onClick,u),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:Q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:Q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||hi.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),rL=oe.forwardRef(Re(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=gm(bi,o),i=um(o),d=oe.useRef(null),c=de(a,d),[u,f]=oe.useState(!1),[m,h]=oe.useState("");return oe.useEffect(()=>{let g=d.current;g&&h((g.textContent??"").trim())},[l.children]),(0,Se.jsx)(xi.ItemSlot,{scope:o,disabled:r,textValue:n??m,children:(0,Se.jsx)(rm,{asChild:!0,...i,focusable:!r,children:(0,Se.jsx)(ue.div,{role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:Q(t.onPointerMove,hs(g=>{r?s.onItemLeave(g):(s.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:Q(t.onPointerLeave,hs(g=>s.onItemLeave(g))),onFocus:Q(t.onFocus,()=>f(!0)),onBlur:Q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var nL="MenuRadioGroup",[$R,YR]=go(nL,{value:void 0,onValueChange:Re(()=>{},"onValueChange")});var sL="MenuItemIndicator",[ZR,JR]=go(sL,{checked:!1});var Lm=oe.forwardRef(Re(function(t,a){let{__scopeMenu:o,...r}=t;return(0,Se.jsx)(ue.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var lL="MenuSub",[QR,eP]=go(lL);function vm(e){return e?"open":"closed"}Re(vm,"getOpenState");function Im(e){return e==="indeterminate"}Re(Im,"isIndeterminate");function iL(e){return Im(e)?"indeterminate":e?"checked":"unchecked"}Re(iL,"getCheckedState");function wm(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}Re(wm,"focusFirst");function Sm(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Re(Sm,"wrapArray");function ym(e,t,a){let r=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Sm(e,Math.max(n,0));r.length===1&&(l=l.filter(d=>d!==a));let i=l.find(d=>d.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}Re(ym,"getNextMatch");function km(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],d=s.x,c=s.y,u=i.x,f=i.y;c>o!=f>o&&a<(u-d)*(o-c)/(f-c)+d&&(r=!r)}return r}Re(km,"isPointInPolygon");function Rm(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return km(a,t)}Re(Rm,"isPointerInGraceArea");function hs(e){return t=>t.pointerType==="mouse"?e(t):void 0}Re(hs,"whenMouse");var ea=require("react/jsx-runtime"),uL=Object.defineProperty,ho=(e,t)=>uL(e,"name",{value:t,configurable:!0}),Ii="DropdownMenu",[cL,xP]=Qe(Ii,[Ci]),xo=Ci(),[fL,Pm]=cL(Ii),Dm=ho(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=xo(t),d=Vt.useRef(null),[c,u]=jt({prop:r,defaultProp:n??!1,onChange:l,caller:Ii});return(0,ea.jsx)(fL,{scope:t,triggerId:It(),triggerRef:d,contentId:It(),open:c,onOpenChange:u,onOpenToggle:Vt.useCallback(()=>u(f=>!f),[u]),modal:s,children:(0,ea.jsx)(cm,{...i,open:c,onOpenChange:u,dir:o,modal:s,children:a})})},"DropdownMenu"),pL="DropdownMenuTrigger",Mm=Vt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Pm(pL,o),s=xo(o),i=de(a,l.triggerRef);return(0,ea.jsx)(fm,{asChild:!0,...s,children:(0,ea.jsx)(ue.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:Q(t.onPointerDown,d=>{!r&&d.button===0&&d.ctrlKey===!1&&(l.onOpenToggle(),l.open||d.preventDefault())}),onKeyDown:Q(t.onKeyDown,d=>{r||(["Enter"," "].includes(d.key)&&l.onOpenToggle(),d.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})},"DropdownMenuTrigger")),Am=ho(e=>{let{__scopeDropdownMenu:t,...a}=e,o=xo(t);return(0,ea.jsx)(mm,{...o,...a})},"DropdownMenuPortal"),mL="DropdownMenuContent",wi=Vt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Pm(mL,o),l=xo(o),s=Vt.useRef(!1);return(0,ea.jsx)(hm,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:Q(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:Q(t.onInteractOutside,i=>{let d=i.detail.originalEvent,c=d.button===0&&d.ctrlKey===!0,u=d.button===2||c;(!n.modal||u)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var Si=Vt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=xo(o);return(0,ea.jsx)(bm,{...n,...r,ref:a})},"DropdownMenuLabel")),yi=Vt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=xo(o);return(0,ea.jsx)(Cm,{...n,...r,ref:a})},"DropdownMenuItem"));var ki=Vt.forwardRef(ho(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=xo(o);return(0,ea.jsx)(Lm,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Zo=require("react/jsx-runtime"),on=Dm,rn=Mm;var Jo=an.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Zo.jsx)(Am,{children:(0,Zo.jsx)(wi,{ref:o,sideOffset:t,className:ie("kanban-portal kanban-dropdown-content",e),...a})}));Jo.displayName=wi.displayName;var Ft=an.forwardRef(({className:e,inset:t,...a},o)=>(0,Zo.jsx)(yi,{ref:o,className:ie("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Ft.displayName=yi.displayName;var hL=an.forwardRef(({className:e,inset:t,...a},o)=>(0,Zo.jsx)(Si,{ref:o,className:ie("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));hL.displayName=Si.displayName;var Ri=an.forwardRef(({className:e,...t},a)=>(0,Zo.jsx)(ki,{ref:a,className:ie("kanban-dropdown-separator",e),...t}));Ri.displayName=ki.displayName;function Tm(e,t,a,o){if(a.files.length){if(!o?.createDrafts||!o.releaseDraftAttachments||!t.addAttachments)throw new Error(lt("chatImagesUnavailable"));let r=o.createDrafts(e,a.files);try{if(!t.addAttachments(r.map(n=>n.id)))throw new Error(lt("chatImagesBusy"))}catch(n){throw o.releaseDraftAttachments(r),n}}t.setDraft(a.text)}var Pi=new Map,Di=0,bs=new Set;function Em(e,t,a=[]){Pi.set(e,{text:t,files:a}),Di++;for(let o of bs)o()}function Fm(e){let t=Pi.get(e);if(t==null)return null;Pi.delete(e),Di++;for(let a of bs)a();return t}function Om(e){return bs.add(e),()=>{bs.delete(e)}}function Bm(){return Di}function Nm(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(lt("fieldId")+": "+t),a&&n.push(a),r&&n.push(lt("fieldLabel")+": "+r),e.dueDate&&n.push(lt("fieldDueDate")+": "+e.dueDate),e.completed!==void 0&&n.push(lt("completionStatus")+": "+lt(e.completed?"completed":"incomplete")),e.completed&&n.push(lt("fieldCompletedDate")+": "+(e.completedAt||lt("completedDateUnknown"))),o&&n.push(o),e.imageCount&&n.push(lt("imagesChatHint").replace("{count}",String(e.imageCount))),n.join(`

`)}var O=require("react/jsx-runtime");function _m(e,t,a,o,r){let n=e.find(p=>p.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(p=>p.columnId===n.columnId).findIndex(p=>p.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(p=>p.id!==t),i=s.filter(p=>p.columnId===a),d=o?i.findIndex(p=>p.id===o):-1,c=d<0?i.length:d+(r?1:0),u=[...s],f=i[c],m=i[i.length-1],h=f?u.indexOf(f):m?u.indexOf(m)+1:u.length;return u.splice(h,0,{...n,columnId:a}),{cards:u.every((p,C)=>p.id===e[C]?.id&&p.columnId===e[C]?.columnId)?e:u,toIndex:c}}function Hm({workspaceId:e,onCreateConversation:t}){let a=ke(),[o,r]=(0,Le.useState)(null),[n,l]=(0,Le.useState)(null),[s,i]=(0,Le.useState)(""),[d,c]=(0,Le.useState)(""),[u,f]=(0,Le.useState)([]),[m,h]=(0,Le.useState)(null),[g,p]=(0,Le.useState)(null),[C,x]=(0,Le.useState)(!1),[b,L]=(0,Le.useState)(!1),[S,v]=(0,Le.useState)(!1),k=Fp(),[y,E]=(0,Le.useState)(""),[I,R]=(0,Le.useState)(""),[A,H]=(0,Le.useState)(null),T=(0,Le.useRef)(o),V=(0,Le.useRef)(null),W=(0,Le.useRef)(e),P=(0,Le.useRef)(null);(0,Le.useEffect)(()=>()=>{P.current?.abort()},[e]);let N=(0,Le.useRef)(0),K=(0,Le.useRef)(0);T.current=o,W.current=e;let G=mn(Wa(kr,{activationConstraint:{distance:8}}),Wa(Rr,{activationConstraint:{delay:250,tolerance:5}}),Wa(Ia,{coordinateGetter:kn})),$=(0,Le.useCallback)((w,M,z)=>{W.current!==M||z<K.current||(K.current=z,w&&w.board&&(r({...w.board,completedColumnId:w.board.completedColumnId??null,cards:Array.isArray(w.board.cards)?w.board.cards.map(j=>({...j,dueDate:j.dueDate??null,completedAt:j.completedAt??null,comments:Array.isArray(j.comments)?j.comments:[],images:Array.isArray(j.images)?j.images:[]})):[],activities:Array.isArray(w.board.activities)?w.board.activities:[]}),c("")),w&&"imageLimits"in w&&l(w.persisted===!1?null:w.imageLimits??null),Array.isArray(w&&w.warnings)&&w.warnings.length>0&&f(j=>[...j,...w.warnings]))},[]),Y=(0,Le.useCallback)(async(w,M={})=>{let z=++N.current;c("");try{let j=await en(w,M,e);return $(j,e,z),!0}catch(j){return c(a("actionFailed")+String(j&&j.message||j)),!1}},[e,$,a]),ge=(0,Le.useCallback)(()=>{let w=++N.current;v(!0),en("get",{},e).then(M=>$(M,e,w)).catch(M=>{W.current===e&&c(a("loadFailed")+String(M&&M.message||M))}).finally(()=>{W.current===e&&v(!1)})},[e,$,a]);(0,Le.useEffect)(()=>{let w=!0,M=++N.current;return r(null),l(null),i(""),H(null),R(""),E(""),p(null),h(null),c(""),f([]),en("get",{},e).then(z=>{w&&$(z,e,M)}).catch(z=>{w&&c(a("loadFailed")+String(z&&z.message||z))}),()=>{w=!1}},[e,$,a]),(0,Le.useEffect)(()=>{o&&H(w=>w&&!o.labels.some(M=>M.name===w)?null:w)},[o?.labels]);let Ae=(0,Le.useCallback)(w=>{let M=qd(w),z=M.length>0?M:Ns(w),j=Dr(z,"id");if(j==null)return[];if(new Set((o?.columns??[]).map(B=>B.id)).has(String(j))){let B=(o?.cards??[]).filter(X=>X.columnId===j).map(X=>X.id);if(B.length>0){let X=gn({...w,droppableContainers:w.droppableContainers.filter(Ue=>Ue.id!==j&&B.includes(String(Ue.id)))});X.length>0&&(j=X[0].id)}}return[{id:j}]},[o]),he=w=>{let M=T.current;if(!M||M.cards===w)return;let z={...M,cards:w};T.current=z,r(z)},q=w=>{if(w.active.data.current?.type!=="card")return;let M=T.current,z=M?.cards.find(j=>j.id===w.active.id);!z||!M||(V.current=M.cards,h(z))},ve=({active:w,over:M})=>{let z=T.current;if(!M||!z||w.data.current?.type!=="card")return;let j=String(w.id),me=z.cards.find(Gt=>Gt.id===j),B=z.cards.find(Gt=>Gt.id===M.id),X=B?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!me||!X||me.columnId===X)return;let Ue=w.rect.current.translated,ca=!!(B&&Ue&&Ue.top+Ue.height/2>M.rect.top+M.rect.height/2);he(_m(z.cards,j,X,B?.id??null,ca).cards)},Ce=({active:w,over:M})=>{let z=T.current,j=V.current;if(V.current=null,!M||!z||w.data.current?.type!=="card"){j&&he(j),h(null);return}let me=String(w.id),B=z.cards.find(fa=>fa.id===M.id),X=B?.columnId??(M.data.current?.type==="column"?String(M.id):null);if(!X){j&&he(j),h(null);return}let Ue=w.rect.current.translated,ca=!!(B&&Ue&&Ue.top+Ue.height/2>M.rect.top+M.rect.height/2),Gt=_m(z.cards,me,X,B?.id??null,ca);he(Gt.cards),h(null),(!j||Gt.cards.some((fa,nn)=>fa.id!==j[nn]?.id||fa.columnId!==j[nn]?.columnId))&&Y("moveCard",{id:me,columnId:X,toIndex:Gt.toIndex}).then(fa=>{fa||ge()})},xe=()=>{V.current&&he(V.current),V.current=null,h(null)},U=async w=>{if(!g)return!1;let M=T.current?.cards.find(X=>X.id===(w.id||g.card?.id));if((w.id||g.card?.id)&&!M)throw new Error(a("cardNoLongerExists"));let z=M?{id:M.id}:{columnId:g.columnId,title:w.title,note:w.note,label:w.label||void 0,priority:w.priority||void 0,dueDate:w.dueDate||null};M&&(w.title!==M.title&&(z.title=w.title),w.note!==M.note&&(z.note=w.note),w.label!==(M.label??"")&&(z.label=w.label),w.priority!==(M.priority??"")&&(z.priority=w.priority),w.dueDate!==(M.dueDate??"")&&(z.dueDate=w.dueDate||null));let j=++N.current;c("");let me=await en(M?"updateCard":"addCard",z,e);if($(me,e,j),W.current!==e)return!1;let B=M?.id??me.cardId;if(!B)return!0;if(!M){let X=me.board?.cards.find(Ue=>Ue.id===B);X&&p({card:X,columnId:X.columnId})}return{cardId:B}},ae=async(w,M,z)=>{let j=++N.current,me=await Np(e,w,M,z);if(me.persisted===!1)throw new Error(a("actionRetry"));$(me,e,j)},le=(0,Le.useCallback)(async w=>{let M=T.current,z=M?.cards.find(me=>me.id===w.id),j=Nm({...w,imageCount:z?.images?.length,completedAt:z?.completedAt,completed:z&&M?.completedColumnId?z.columnId===M.completedColumnId:void 0});if(!j)return!1;c("");try{P.current?.abort();let me=new AbortController;P.current=me;let B=await _p(e,z?.id??"",z?.images??[],AbortSignal.any([me.signal,AbortSignal.timeout(3e4)]));return me.signal.aborted?!1:await t(e,{text:j,files:B},me.signal)}catch(me){return c(a("actionFailed")+String(me&&me.message||me)),!1}},[t,e,a]);if(!o)return(0,O.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,O.jsxs)("div",{role:"alert",children:[(0,O.jsx)("p",{className:"kanban-error",children:d}),(0,O.jsx)(re,{variant:"outline",onClick:ge,disabled:S,children:a("retry")})]}):(0,O.jsx)("p",{className:"kanban-muted-text",children:a("loading")})});let Z=o.cards.find(w=>w.id===g?.card?.id);return(0,O.jsxs)("div",{className:"kanban-root kanban-view",children:[d&&!g&&!C&&!b&&(0,O.jsx)("p",{className:"kanban-error",role:"alert",children:d}),(0,O.jsxs)("div",{className:"kanban-search-row",children:[(0,O.jsxs)("div",{className:"kanban-search-field",children:[(0,O.jsx)(mr,{"aria-hidden":"true"}),(0,O.jsx)(Et,{type:"search","aria-label":a("searchCards"),placeholder:a("searchPlaceholder"),maxLength:200,value:s,onChange:w=>i(w.target.value)}),s&&(0,O.jsx)(re,{variant:"ghost",size:"icon","aria-label":a("clearSearch"),onClick:()=>i(""),children:(0,O.jsx)(st,{})})]}),(0,O.jsxs)("div",{className:"kanban-toolbar",children:[(0,O.jsxs)(on,{children:[(0,O.jsx)(rn,{asChild:!0,children:(0,O.jsx)(re,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${I?" is-active":""}`,title:a("priorityFilter"),"aria-label":a("priorityFilter"),"aria-pressed":!!I,children:(0,O.jsx)(ba,{className:"kanban-icon"})})}),(0,O.jsxs)(Jo,{align:"start",children:[(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":!I,onSelect:()=>R(""),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:!I&&(0,O.jsx)(pt,{className:"kanban-icon"})}),a("all")]}),us.map(w=>(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":I===w,onSelect:()=>R(w),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:I===w&&(0,O.jsx)(pt,{className:"kanban-icon"})}),(0,O.jsx)("span",{className:"kanban-priority-dot",style:{background:zt[w].color}}),zt[w].label]},w))]})]}),(0,O.jsxs)(on,{children:[(0,O.jsx)(rn,{asChild:!0,children:(0,O.jsx)(re,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${A!==null?" is-active":""}`,title:A===null?a("labelFilter"):`${a("labelFilter")}: ${A||a("noLabel")}`,"aria-label":a("labelFilter"),"aria-pressed":A!==null,children:(0,O.jsx)(So,{className:"kanban-icon"})})}),(0,O.jsxs)(Jo,{align:"start",children:[(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":A===null,onSelect:()=>H(null),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:A===null&&(0,O.jsx)(pt,{className:"kanban-icon"})}),a("all")]}),(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":A==="",onSelect:()=>H(""),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:A===""&&(0,O.jsx)(pt,{className:"kanban-icon"})}),a("noLabel")]}),o.labels.map(w=>(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":A===w.name,onSelect:()=>H(w.name),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:A===w.name&&(0,O.jsx)(pt,{className:"kanban-icon"})}),(0,O.jsx)("span",{className:"kanban-label-dot",style:{background:w.color}}),w.name]},w.name))]})]}),(0,O.jsxs)(on,{children:[(0,O.jsx)(rn,{asChild:!0,children:(0,O.jsx)(re,{variant:"ghost",size:"icon",className:`kanban-toolbar-button${y?" is-active":""}`,title:a("dueDateFilter"),"aria-label":a("dueDateFilter"),"aria-pressed":!!y,children:(0,O.jsx)(Aa,{className:"kanban-icon"})})}),(0,O.jsx)(Jo,{align:"start",children:["","today","overdue"].map(w=>(0,O.jsxs)(Ft,{role:"menuitemradio","aria-checked":y===w,onSelect:()=>E(w),children:[(0,O.jsx)("span",{className:"kanban-filter-check",children:y===w&&(0,O.jsx)(pt,{className:"kanban-icon"})}),a(w==="today"?"dueToday":w==="overdue"?"overdue":"all")]},w))})]})]}),(0,O.jsxs)(on,{children:[(0,O.jsx)(rn,{asChild:!0,children:(0,O.jsx)(re,{variant:"ghost",size:"icon",className:"kanban-toolbar-button kanban-toolbar-settings",title:a("settings"),"aria-label":a("settings"),children:(0,O.jsx)(hr,{className:"kanban-icon"})})}),(0,O.jsxs)(Jo,{align:"end",children:[(0,O.jsxs)(Ft,{disabled:S,onSelect:ge,children:[(0,O.jsx)(La,{className:S?"kanban-animate-spin":void 0}),a("refresh")]}),(0,O.jsxs)(Ft,{onClick:()=>{c(""),x(!0)},children:[(0,O.jsx)(fr,{className:"kanban-icon"}),a("columnEdit")]}),(0,O.jsxs)(Ft,{onClick:()=>{c(""),L(!0)},children:[(0,O.jsx)(So,{className:"kanban-icon"}),a("labelEdit")]}),(0,O.jsx)(Ri,{}),(0,O.jsx)(Ft,{asChild:!0,children:(0,O.jsxs)("a",{href:"https://github.com/alpacachen/dsh-kanban/issues/new/choose",target:"_blank",rel:"noopener noreferrer",children:[(0,O.jsx)(oa,{className:"kanban-icon"}),a("feedback")]})})]})]})]}),(s.trim()||I||A!==null||y)&&(0,O.jsxs)("div",{className:"kanban-filter-summary","aria-label":a("clearFilter"),children:[s.trim()&&(0,O.jsx)("span",{className:"kanban-muted-small",role:"status",children:a("searchResults").replace("{count}",String(o.cards.filter(w=>di(w,s)&&(!I||w.priority===I)&&(A===null||(w.label??"")===A)&&oi(w,y,o.completedColumnId,k)).length))}),y&&(0,O.jsxs)(re,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${a(y==="today"?"dueToday":"overdue")}`,onClick:()=>E(""),children:[a(y==="today"?"dueToday":"overdue"),(0,O.jsx)(st,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),I&&(0,O.jsxs)(re,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${zt[I].label}`,onClick:()=>R(""),children:[a("fieldPriority"),": ",zt[I].label,(0,O.jsx)(st,{className:"kanban-tiny-icon","aria-hidden":"true"})]}),A!==null&&(0,O.jsxs)(re,{variant:"ghost",size:"sm",className:"kanban-filter-chip","aria-label":`${a("clearFilter")}: ${A||a("noLabel")}`,onClick:()=>H(null),children:[a("fieldLabel"),": ",A||a("noLabel"),(0,O.jsx)(st,{className:"kanban-tiny-icon","aria-hidden":"true"})]})]}),u.length>0&&(0,O.jsxs)("div",{className:"kanban-warning",children:[(0,O.jsxs)("div",{className:"kanban-warning-body",children:[(0,O.jsx)("p",{className:"kanban-warning-title",children:a("warnings")}),u.map((w,M)=>(0,O.jsx)("p",{className:"kanban-warning-item",children:w},M))]}),(0,O.jsx)(re,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>f([]),children:a("dismiss")})]}),(0,O.jsxs)(bn,{sensors:G,collisionDetection:Ae,onDragStart:q,onDragOver:ve,onDragEnd:Ce,onDragCancel:xe,children:[(0,O.jsx)("div",{className:"kanban-content",children:(0,O.jsx)("div",{className:"kanban-board-scroll",children:o.columns.map(w=>{let M=o.cards.filter(z=>z.columnId===w.id&&di(z,s)&&(!I||z.priority===I)&&(A===null||(z.label??"")===A)&&(z.id===m?.id||oi(z,y,o.completedColumnId,k)));return(0,O.jsx)(Xp,{column:w,cards:M,totalCount:o.cards.filter(z=>z.columnId===w.id).length,filtered:!!(I||y||s.trim())||A!==null,completed:w.id===o.completedColumnId,today:k,labels:o.labels,query:s,onAddCard:z=>{c(""),p({card:null,columnId:z.id})},onOpenCard:z=>{c(""),p({card:z,columnId:z.columnId})}},w.id)})})}),(0,O.jsx)(ru,{children:m?(0,O.jsx)("div",{className:"kanban-drag-preview",children:(0,O.jsx)(ii,{card:m,labels:o.labels,completed:m.columnId===o.completedColumnId,today:k})}):null})]}),(0,O.jsx)(zp,{workspaceId:e,imageLimits:n,images:Z?.images??[],onUploadImage:ae,onRemoveImage:(w,M)=>Y("removeImage",{id:w,attachmentId:M}),error:d,open:g!==null,card:g?.card??null,labels:o.labels,completed:!!(Z&&Z.columnId===o.completedColumnId),completedAt:Z?.completedAt??null,comments:Z?.comments??[],activities:g?.card?o.activities.filter(w=>w.cardId===g.card.id):[],onOpenChange:w=>{w||p(null)},onSave:U,onAddComment:(w,M)=>Y("addComment",{id:w,content:M}),onDelete:w=>Y("deleteCard",{id:w.id}),onChatWithAgent:le},e),(0,O.jsx)(jp,{error:d,open:C,columns:o.columns,completedColumnId:o.completedColumnId,onSetCompletedColumn:w=>Y("setCompletedColumn",{columnId:w}),onOpenChange:x,onReorder:(w,M)=>{let z=o.columns.findIndex(j=>j.id===M);return z>=0?Y("moveColumn",{id:w,toIndex:z}):Promise.resolve(!1)},onRename:(w,M)=>Y("renameColumn",{id:w,title:M}),onDelete:w=>Y("deleteColumn",{id:w}),onAdd:w=>Y("addColumn",{title:w})}),(0,O.jsx)($p,{error:d,open:b,labels:o.labels,onOpenChange:L,onAdd:(w,M)=>Y("addLabel",{name:w,color:M}),onUpdate:(w,M,z)=>Y("updateLabel",{name:w,newName:M,color:z}),onDelete:w=>Y("deleteLabel",{name:w})})]})}var $e=require("react/jsx-runtime"),Mi="dsh-kanban:workspace";function Um({useWorkspaces:e,useSessions:t,onCreateConversation:a}){let o=ke(),[r,n]=(0,bo.useState)(!0),l=(0,bo.useId)(),{items:s,phase:i,state:d,error:c}=e(p=>p),u=t(p=>Object.values(p.byId).find(C=>(C.retainedBy.mainView??0)>0)?.id),[f,m]=(0,bo.useState)(()=>{try{return localStorage.getItem(Mi)??""}catch{return""}}),h=s.find(p=>p.workspaceId===f)??s.find(p=>u&&p.sessionIds.includes(u))??(s.length===1?s[0]:void 0),g=h?.workspaceId??"";return(0,bo.useEffect)(()=>{if(i==="ready"){m(g);try{g?localStorage.setItem(Mi,g):localStorage.removeItem(Mi)}catch{}}},[g,i]),(0,$e.jsxs)("section",{className:"kanban-root kanban-panel","aria-label":o("boardTab"),children:[(0,$e.jsxs)("nav",{className:"kanban-workspaces","data-collapsed":r,"aria-label":o("workspace"),children:[(0,$e.jsxs)("div",{className:"kanban-workspaces-header",children:[(0,$e.jsx)("p",{className:"kanban-workspaces-heading",children:o("workspace")}),(0,$e.jsx)(re,{variant:"ghost",size:"icon",className:"kanban-workspaces-toggle","aria-label":o(r?"expandWorkspaces":"collapseWorkspaces"),title:o(r?"expandWorkspaces":"collapseWorkspaces"),"aria-expanded":!r,"aria-controls":l,onClick:()=>n(p=>!p),children:r?(0,$e.jsx)(lr,{}):(0,$e.jsx)(sr,{})})]}),(0,$e.jsx)("div",{id:l,className:"kanban-workspaces-list",children:s.map(p=>(0,$e.jsxs)(re,{variant:"ghost",className:"kanban-workspace-button","aria-label":p.title,title:p.title,"aria-current":g===p.workspaceId?"page":void 0,onClick:()=>m(p.workspaceId),children:[(0,$e.jsx)("span",{className:"kanban-workspace-icon","aria-hidden":"true",children:Array.from(p.title.trim())[0]?.toLocaleUpperCase()||"?"}),(0,$e.jsx)("span",{className:"kanban-workspace-name",children:p.title})]},p.workspaceId))})]}),(0,$e.jsxs)("div",{className:"kanban-panel-body",children:[(0,$e.jsx)("header",{className:"kanban-panel-header",children:(0,$e.jsx)("h1",{title:h?.title,children:h?.title??o("boardTab")})}),h?(0,$e.jsx)(Hm,{workspaceId:h.workspaceId,onCreateConversation:a},g):(0,$e.jsx)("div",{className:"kanban-panel-empty",role:d==="error"?"alert":"status",children:d==="error"?`${o("loadFailed")}${c?.message??""}`:o(i!=="ready"?"loadingWorkspaces":s.length?"selectWorkspaceHint":"noWorkspaces")})]})]})}var Qo=require("react");var Cs=require("react/jsx-runtime");function qm({sessionId:e,inputActions:t,attachmentDrafts:a}){let o=(0,Qo.useSyncExternalStore)(Om,Bm),[r,n]=(0,Qo.useState)(null),l=ke(),s=i=>{try{Tm(e,t,i,a),n(null)}catch(d){n({sessionId:e,draft:i,message:String(d instanceof Error?d.message:d)})}};return(0,Qo.useEffect)(()=>{if(!e||!t?.setDraft)return;let i=Fm(e);i&&s(i)},[o,e,t,a]),!r||r.sessionId!==e?null:(0,Cs.jsxs)("div",{role:"alert",className:"kanban-dialog-error",children:[l("actionFailed"),r.message,(0,Cs.jsx)(re,{variant:"ghost",size:"sm",onClick:()=>s(r.draft),children:l("retry")})]})}var Wm={name:"dsh-kanban",inject:["slots","locale","layout","sessions","uiWorkspace","conversation"],apply(e){_c(e);let t=e.get("slots");if(t===void 0)return;let a=e.uiWorkspace,o=e.sessions,r=e.layout,n=new AbortController,l=e.get("conversation"),s=async(i,d,c)=>{if(d.files.length&&(!l?.createDrafts||!l.releaseDraftAttachments))throw new Error(lt("chatImagesUnavailable"));let u=AbortSignal.any([c,n.signal,r.beginNavigation()]);if(u.aborted)return!1;let f=await o.create({workspaceId:i});return u.aborted?!1:(Em(f,d.text,d.files),a.openSession(f),!0)};t.inject("main",()=>t.register({name:"main",key:"kanban"},i=>(0,Ls.createElement)(Um,{...i,onCreateConversation:s}))),t.inject("sidebar.panellist",()=>t.register({name:"sidebar.panellist",id:"kanban",order:30,label:()=>lt("boardTab")},({size:i})=>(0,Ls.createElement)(Ca,{size:i}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},i=>(0,Ls.createElement)(qm,{...i,attachmentDrafts:l}))),e.effect(()=>()=>{n.abort(),r.panelInfo.getSnapshot().activePanelId==="kanban"&&r.selectPanel(null)})}};var zm="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+zm+"]")){let e=document.createElement("style");e.setAttribute(zm,""),e.textContent=Hi,document.head.appendChild(e)}var xL=Wm;
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
lucide-react/dist/esm/icons/chevron-left.mjs:
lucide-react/dist/esm/icons/chevron-right.mjs:
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
   * @license lucide-react v1.61.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})