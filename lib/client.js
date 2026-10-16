window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Jp=Object.create;var Er=Object.defineProperty;var Qp=Object.getOwnPropertyDescriptor;var em=Object.getOwnPropertyNames;var tm=Object.getPrototypeOf,am=Object.prototype.hasOwnProperty;var si=e=>{throw TypeError(e)};var om=(e,t)=>{for(var a in t)Er(e,a,{get:t[a],enumerable:!0})},li=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of em(t))!am.call(e,r)&&r!==a&&Er(e,r,{get:()=>t[r],enumerable:!(o=Qp(t,r))||o.enumerable});return e};var K=(e,t,a)=>(a=e!=null?Jp(tm(e)):{},li(t||!e||!e.__esModule?Er(a,"default",{value:e,enumerable:!0}):a,e)),rm=e=>li(Er({},"__esModule",{value:!0}),e);var ii=(e,t,a)=>t.has(e)||si("Cannot "+a);var Ge=(e,t,a)=>(ii(e,t,"read from private field"),a?a.call(e):t.get(e)),ui=(e,t,a)=>t.has(e)?si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Zn=(e,t,a,o)=>(ii(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var xC={};om(xC,{default:()=>gC});module.exports=rm(xC);var di=`/*
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
`;var ti=require("react");var ie=require("react");var y=K(require("react")),wa=require("react-dom");var we=require("react");function fi(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,we.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Uo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function La(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Or(e){return"nodeType"in e}function Ye(e){var t,a;return e?La(e)?e:Or(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Fr(e){let{Document:t}=Ye(e);return e instanceof t}function ro(e){return La(e)?!1:e instanceof Ye(e).HTMLElement}function Qn(e){return e instanceof Ye(e).SVGElement}function Ca(e){return e?La(e)?e.document:Or(e)?Fr(e)?e:ro(e)||Qn(e)?e.ownerDocument:document:document:document}var ut=Uo?we.useLayoutEffect:we.useEffect;function Vo(e){let t=(0,we.useRef)(e);return ut(()=>{t.current=e}),(0,we.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function pi(){let e=(0,we.useRef)(null),t=(0,we.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,we.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function no(e,t){t===void 0&&(t=[e]);let a=(0,we.useRef)(e);return ut(()=>{a.current!==e&&(a.current=e)},t),a}function so(e,t){let a=(0,we.useRef)();return(0,we.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Wo(e){let t=Vo(e),a=(0,we.useRef)(null),o=(0,we.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Go(e){let t=(0,we.useRef)();return(0,we.useEffect)(()=>{t.current=e},[e]),t.current}var Jn={};function Ia(e,t){return(0,we.useMemo)(()=>{if(t)return t;let a=Jn[e]==null?0:Jn[e]+1;return Jn[e]=a,e+"-"+a},[e,t])}function mi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,s)=>{let l=Object.entries(s);for(let[i,u]of l){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var va=mi(1),ba=mi(-1);function sm(e){return"clientX"in e&&"clientY"in e}function lo(e){if(!e)return!1;let{KeyboardEvent:t}=Ye(e.target);return t&&e instanceof t}function lm(e){if(!e)return!1;let{TouchEvent:t}=Ye(e.target);return t&&e instanceof t}function zo(e){if(lm(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return sm(e)?{x:e.clientX,y:e.clientY}:null}var it=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[it.Translate.toString(e),it.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ci="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function hi(e){return e.matches(ci)?e:e.querySelector(ci)}var Sa=K(require("react")),im={display:"none"};function gi(e){let{id:t,value:a}=e;return Sa.default.createElement("div",{id:t,style:im},a)}function xi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Sa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function Li(){let[e,t]=(0,Sa.useState)("");return{announce:(0,Sa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Ai=(0,y.createContext)(null);function um(e){let t=(0,y.useContext)(Ai);(0,y.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function dm(){let[e]=(0,y.useState)(()=>new Set),t=(0,y.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,y.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(s=>{var l;return(l=s[r])==null?void 0:l.call(s,n)})},[e]),t]}var cm={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},fm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function pm(e){let{announcements:t=fm,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=cm}=e,{announce:n,announcement:s}=Li(),l=Ia("DndLiveRegion"),[i,u]=(0,y.useState)(!1);if((0,y.useEffect)(()=>{u(!0)},[]),um((0,y.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:m}=d;t.onDragMove&&n(t.onDragMove({active:f,over:m}))},onDragOver(d){let{active:f,over:m}=d;n(t.onDragOver({active:f,over:m}))},onDragEnd(d){let{active:f,over:m}=d;n(t.onDragEnd({active:f,over:m}))},onDragCancel(d){let{active:f,over:m}=d;n(t.onDragCancel({active:f,over:m}))}}),[n,t])),!i)return null;let c=y.default.createElement(y.default.Fragment,null,y.default.createElement(gi,{id:o,value:r.draggable}),y.default.createElement(xi,{id:l,announcement:s}));return a?(0,wa.createPortal)(c,a):c}var Oe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Oe||(Oe={}));function Nr(){}function io(e,t){return(0,y.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Hr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,y.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var St=Object.freeze({x:0,y:0});function us(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function mm(e,t){let a=zo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function ds(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function hm(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function os(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Yo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function Ci(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Ti=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Ci(t,t.left,t.top),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=us(Ci(i),r);n.push({id:l,data:{droppableContainer:s,value:u}})}}return n.sort(ds)},qr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=os(t),n=[];for(let s of o){let{id:l}=s,i=a.get(l);if(i){let u=os(i),c=r.reduce((f,m,g)=>f+us(u[g],m),0),d=Number((c/4).toFixed(4));n.push({id:l,data:{droppableContainer:s,value:d}})}}return n.sort(ds)};function gm(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),s=r-o,l=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=s*l,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var cs=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:s}=n,l=a.get(s);if(l){let i=gm(l,t);i>0&&r.push({id:s,data:{droppableContainer:n,value:i}})}}return r.sort(hm)};function xm(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Ei=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:s}=n,l=a.get(s);if(l&&xm(o,l)){let u=os(l).reduce((d,f)=>d+us(o,f),0),c=Number((u/4).toFixed(4));r.push({id:s,data:{droppableContainer:n,value:c}})}}return r.sort(ds)};function Lm(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Oi(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:St}function Cm(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((s,l)=>({...s,top:s.top+e*l.y,bottom:s.bottom+e*l.y,left:s.left+e*l.x,right:s.right+e*l.x}),{...a})}}var Im=Cm(1);function Fi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function vm(e,t,a){let o=Fi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:s,y:l}=o,i=e.left-s-(1-r)*parseFloat(a),u=e.top-l-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var bm={ignoreTransform:!1};function Pa(e,t){t===void 0&&(t=bm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ye(e).getComputedStyle(e);u&&(a=vm(a,u,c))}let{top:o,left:r,width:n,height:s,bottom:l,right:i}=a;return{top:o,left:r,width:n,height:s,bottom:l,right:i}}function Ii(e){return Pa(e,{ignoreTransform:!0})}function Sm(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function wm(e,t){return t===void 0&&(t=Ye(e).getComputedStyle(e)),t.position==="fixed"}function ym(e,t){t===void 0&&(t=Ye(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Zo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Fr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!ro(r)||Qn(r)||a.includes(r))return a;let n=Ye(e).getComputedStyle(r);return r!==e&&ym(r,n)&&a.push(r),wm(r,n)?a:o(r.parentNode)}return e?o(e):a}function Bi(e){let[t]=Zo(e,1);return t??null}function es(e){return!Uo||!e?null:La(e)?e:Or(e)?Fr(e)||e===Ca(e).scrollingElement?window:ro(e)?e:null:null}function Ni(e){return La(e)?e.scrollX:e.scrollLeft}function _i(e){return La(e)?e.scrollY:e.scrollTop}function rs(e){return{x:Ni(e),y:_i(e)}}var _e;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(_e||(_e={}));function Hi(e){return!Uo||!e?!1:e===document.scrollingElement}function qi(e){let t={x:0,y:0},a=Hi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,s=e.scrollTop>=o.y,l=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:s,isRight:l,maxScroll:o,minScroll:t}}var Rm={x:.2,y:.2};function Pm(e,t,a,o,r){let{top:n,left:s,right:l,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Rm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=qi(e),m={x:0,y:0},g={x:0,y:0},p={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+p.height?(m.y=_e.Backward,g.y=o*Math.abs((t.top+p.height-n)/p.height)):!c&&i>=t.bottom-p.height&&(m.y=_e.Forward,g.y=o*Math.abs((t.bottom-p.height-i)/p.height)),!f&&l>=t.right-p.width?(m.x=_e.Forward,g.x=o*Math.abs((t.right-p.width-l)/p.width)):!d&&s<=t.left+p.width&&(m.x=_e.Backward,g.x=o*Math.abs((t.left+p.width-s)/p.width)),{direction:m,speed:g}}function km(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:s}=window;return{top:0,left:0,right:n,bottom:s,width:n,height:s}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Ui(e){return e.reduce((t,a)=>va(t,rs(a)),St)}function Dm(e){return e.reduce((t,a)=>t+Ni(a),0)}function Mm(e){return e.reduce((t,a)=>t+_i(a),0)}function Vi(e,t){if(t===void 0&&(t=Pa),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Bi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Am=[["x",["left","right"],Dm],["y",["top","bottom"],Mm]],Ko=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Zo(a),r=Ui(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,s,l]of Am)for(let i of s)Object.defineProperty(this,i,{get:()=>{let u=l(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},ya=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Tm(e){let{EventTarget:t}=Ye(e);return e instanceof t?e:Ca(e)}function ts(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var xt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(xt||(xt={}));function vi(e){e.preventDefault()}function Em(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var Wi={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},Om=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},na=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new ya(Ca(a)),this.windowListeners=new ya(Ye(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(xt.Resize,this.handleCancel),this.windowListeners.add(xt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(xt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Vi(o),a(St)}handleKeyDown(t){if(lo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Wi,coordinateGetter:s=Om,scrollBehavior:l="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:St;this.referenceCoordinates||(this.referenceCoordinates=c);let d=s(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=ba(d,c),m={x:0,y:0},{scrollableAncestors:g}=o.current;for(let p of g){let h=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:I,maxScroll:w,minScroll:b}=qi(p),v=km(p),R={x:Math.min(h===re.Right?v.right-v.width/2:v.right,Math.max(h===re.Right?v.left:v.left+v.width/2,d.x)),y:Math.min(h===re.Down?v.bottom-v.height/2:v.bottom,Math.max(h===re.Down?v.top:v.top+v.height/2,d.y))},D=h===re.Right&&!C||h===re.Left&&!L,T=h===re.Down&&!I||h===re.Up&&!x;if(D&&R.x!==d.x){let k=p.scrollLeft+f.x,F=h===re.Right&&k<=w.x||h===re.Left&&k>=b.x;if(F&&!f.y){p.scrollTo({left:k,behavior:l});return}F?m.x=p.scrollLeft-k:m.x=h===re.Right?p.scrollLeft-w.x:p.scrollLeft-b.x,m.x&&p.scrollBy({left:-m.x,behavior:l});break}else if(T&&R.y!==d.y){let k=p.scrollTop+f.y,F=h===re.Down&&k<=w.y||h===re.Up&&k>=b.y;if(F&&!f.x){p.scrollTo({top:k,behavior:l});return}F?m.y=p.scrollTop-k:m.y=h===re.Down?p.scrollTop-w.y:p.scrollTop-b.y,m.y&&p.scrollBy({top:-m.y,behavior:l});break}}this.handleMove(t,va(ba(d,this.referenceCoordinates),m))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};na.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Wi,onActivation:r}=t,{active:n}=a,{code:s}=e.nativeEvent;if(o.start.includes(s)){let l=n.activatorNode.current;return l&&e.target!==l?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function bi(e){return!!(e&&"distance"in e)}function Si(e){return!!(e&&"delay"in e)}var jo=class{constructor(t,a,o){var r;o===void 0&&(o=Tm(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:s}=n;this.props=t,this.events=a,this.document=Ca(s),this.documentListeners=new ya(this.document),this.listeners=new ya(o),this.windowListeners=new ya(Ye(s)),this.initialCoordinates=(r=zo(n))!=null?r:St,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(xt.Resize,this.handleCancel),this.windowListeners.add(xt.DragStart,vi),this.windowListeners.add(xt.VisibilityChange,this.handleCancel),this.windowListeners.add(xt.ContextMenu,vi),this.documentListeners.add(xt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Si(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(bi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(xt.Click,Em,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(xt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:s,options:{activationConstraint:l}}=n;if(!r)return;let i=(a=zo(t))!=null?a:St,u=ba(r,i);if(!o&&l){if(bi(l)){if(l.tolerance!=null&&ts(u,l.tolerance))return this.handleCancel();if(ts(u,l.distance))return this.handleStart()}if(Si(l)&&ts(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}t.cancelable&&t.preventDefault(),s(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Fm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},sa=class extends jo{constructor(t){let{event:a}=t,o=Ca(a.target);super(t,Fm,o)}};sa.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Bm={move:{name:"mousemove"},end:{name:"mouseup"}},ns;(function(e){e[e.RightClick=2]="RightClick"})(ns||(ns={}));var ss=class extends jo{constructor(t){super(t,Bm,Ca(t.event.target))}};ss.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===ns.RightClick?!1:(o?.({event:a}),!0)}}];var as={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},ls=class extends jo{constructor(t){super(t,as)}static setup(){return window.addEventListener(as.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(as.move.name,t)};function t(){}}};ls.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Xo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Xo||(Xo={}));var _r;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(_r||(_r={}));function Nm(e){let{acceleration:t,activator:a=Xo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:s=5,order:l=_r.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,m=Hm({delta:d,disabled:!n}),[g,p]=pi(),h=(0,y.useRef)({x:0,y:0}),x=(0,y.useRef)({x:0,y:0}),C=(0,y.useMemo)(()=>{switch(a){case Xo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Xo.DraggableRect:return r}},[a,r,i]),L=(0,y.useRef)(null),I=(0,y.useCallback)(()=>{let b=L.current;if(!b)return;let v=h.current.x*x.current.x,R=h.current.y*x.current.y;b.scrollBy(v,R)},[]),w=(0,y.useMemo)(()=>l===_r.TreeOrder?[...u].reverse():u,[l,u]);(0,y.useEffect)(()=>{if(!n||!u.length||!C){p();return}for(let b of w){if(o?.(b)===!1)continue;let v=u.indexOf(b),R=c[v];if(!R)continue;let{direction:D,speed:T}=Pm(b,R,C,t,f);for(let k of["x","y"])m[k][D[k]]||(T[k]=0,D[k]=0);if(T.x>0||T.y>0){p(),L.current=b,g(I,s),h.current=T,x.current=D;return}}h.current={x:0,y:0},x.current={x:0,y:0},p()},[t,I,o,p,n,s,JSON.stringify(C),JSON.stringify(m),g,u,w,c,JSON.stringify(f)])}var _m={x:{[_e.Backward]:!1,[_e.Forward]:!1},y:{[_e.Backward]:!1,[_e.Forward]:!1}};function Hm(e){let{delta:t,disabled:a}=e,o=Go(t);return so(r=>{if(a||!o||!r)return _m;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[_e.Backward]:r.x[_e.Backward]||n.x===-1,[_e.Forward]:r.x[_e.Forward]||n.x===1},y:{[_e.Backward]:r.y[_e.Backward]||n.y===-1,[_e.Forward]:r.y[_e.Forward]||n.y===1}}},[a,t,o])}function qm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return so(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Um(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(s=>({eventName:s.eventName,handler:t(s.handler,o)}));return[...a,...n]},[]),[e,t])}var $o;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})($o||($o={}));var is;(function(e){e.Optimized="optimized"})(is||(is={}));var wi=new Map;function Vm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,s]=(0,y.useState)(null),{frequency:l,measure:i,strategy:u}=r,c=(0,y.useRef)(e),d=h(),f=no(d),m=(0,y.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&s(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),g=(0,y.useRef)(null),p=so(x=>{if(d&&!a)return wi;if(!x||x===wi||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let I=L.node.current,w=I?new Ko(i(I),I):null;L.rect.current=w,w&&C.set(L.id,w)}return C}return x},[e,n,a,d,i]);return(0,y.useEffect)(()=>{c.current=e},[e]),(0,y.useEffect)(()=>{d||m()},[a,d]),(0,y.useEffect)(()=>{n&&n.length>0&&s(null)},[JSON.stringify(n)]),(0,y.useEffect)(()=>{d||typeof l!="number"||g.current!==null||(g.current=setTimeout(()=>{m(),g.current=null},l))},[l,d,m,...o]),{droppableRects:p,measureDroppableContainers:m,measuringScheduled:n!=null};function h(){switch(u){case $o.Always:return!1;case $o.BeforeDragging:return a;default:return!a}}}function fs(e,t){return so(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Wm(e,t){return fs(e,t)}function Gm(e){let{callback:t,disabled:a}=e,o=Vo(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Ur(e){let{callback:t,disabled:a}=e,o=Vo(t),r=(0,y.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,y.useEffect)(()=>()=>r?.disconnect(),[r]),r}function zm(e){return new Ko(Pa(e),e)}function yi(e,t,a){t===void 0&&(t=zm);let[o,r]=(0,y.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let s=Gm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),l=Ur({callback:n});return ut(()=>{n(),e?(l?.observe(e),s?.observe(document.body,{childList:!0,subtree:!0})):(l?.disconnect(),s?.disconnect())},[e]),o}function Xm(e){let t=fs(e);return Oi(e,t)}var Ri=[];function Km(e){let t=(0,y.useRef)(e),a=so(o=>e?o&&o!==Ri&&e&&t.current&&e.parentNode===t.current.parentNode?o:Zo(e):Ri,[e]);return(0,y.useEffect)(()=>{t.current=e},[e]),a}function jm(e){let[t,a]=(0,y.useState)(null),o=(0,y.useRef)(e),r=(0,y.useCallback)(n=>{let s=es(n.target);s&&a(l=>l?(l.set(s,rs(s)),new Map(l)):null)},[]);return(0,y.useEffect)(()=>{let n=o.current;if(e!==n){s(n);let l=e.map(i=>{let u=es(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,rs(u)]):null}).filter(i=>i!=null);a(l.length?new Map(l):null),o.current=e}return()=>{s(e),s(n)};function s(l){l.forEach(i=>{let u=es(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,y.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,s)=>va(n,s),St):Ui(e):St,[e,t])}function Pi(e,t){t===void 0&&(t=[]);let a=(0,y.useRef)(null);return(0,y.useEffect)(()=>{a.current=null},t),(0,y.useEffect)(()=>{let o=e!==St;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?ba(e,a.current):St}function $m(e){(0,y.useEffect)(()=>{if(!Uo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Ym(e,t){return(0,y.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=s=>{n(s,t)},a},{}),[e,t])}function Gi(e){return(0,y.useMemo)(()=>e?Sm(e):null,[e])}var ki=[];function Zm(e,t){t===void 0&&(t=Pa);let[a]=e,o=Gi(a?Ye(a):null),[r,n]=(0,y.useState)(ki);function s(){n(()=>e.length?e.map(i=>Hi(i)?o:new Ko(t(i),i)):ki)}let l=Ur({callback:s});return ut(()=>{l?.disconnect(),s(),e.forEach(i=>l?.observe(i))},[e]),r}function zi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return ro(t)?t:e}function Jm(e){let{measure:t}=e,[a,o]=(0,y.useState)(null),r=(0,y.useCallback)(u=>{for(let{target:c}of u)if(ro(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Ur({callback:r}),s=(0,y.useCallback)(u=>{let c=zi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[l,i]=Wo(s);return(0,y.useMemo)(()=>({nodeRef:l,rect:a,setRef:i}),[a,l,i])}var Qm=[{sensor:sa,options:{}},{sensor:na,options:{}}],eh={current:{}},Br={draggable:{measure:Ii},droppable:{measure:Ii,strategy:$o.WhileDragging,frequency:is.Optimized},dragOverlay:{measure:Pa}},Ra=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},th={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ra,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Nr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Br,measureDroppableContainers:Nr,windowRect:null,measuringScheduled:!1},Xi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Nr,draggableNodes:new Map,over:null,measureDroppableContainers:Nr},Jo=(0,y.createContext)(Xi),Ki=(0,y.createContext)(th);function ah(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ra}}}function oh(e,t){switch(t.type){case Oe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Oe.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Oe.DragEnd:case Oe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Oe.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Ra(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Oe.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let s=new Ra(e.droppable.containers);return s.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:s}}}case Oe.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Ra(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function rh(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,y.useContext)(Jo),n=Go(o),s=Go(a?.id);return(0,y.useEffect)(()=>{if(!t&&!o&&n&&s!=null){if(!lo(n)||document.activeElement===n.target)return;let l=r.get(s);if(!l)return;let{activatorNode:i,node:u}=l;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=hi(c);if(d){d.focus();break}}})}},[o,t,r,s,n]),null}function ji(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function nh(e){return(0,y.useMemo)(()=>({draggable:{...Br.draggable,...e?.draggable},droppable:{...Br.droppable,...e?.droppable},dragOverlay:{...Br.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function sh(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,y.useRef)(!1),{x:s,y:l}=typeof r=="boolean"?{x:r,y:r}:r;ut(()=>{if(!s&&!l||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Oi(c,o);if(s||(d.x=0),l||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Bi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,s,l,o,a])}var Vr=(0,y.createContext)({...St,scaleX:1,scaleY:1}),ra;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ra||(ra={}));var Wr=(0,y.memo)(function(t){var a,o,r,n;let{id:s,accessibility:l,autoScroll:i=!0,children:u,sensors:c=Qm,collisionDetection:d=cs,measuring:f,modifiers:m,...g}=t,p=(0,y.useReducer)(oh,void 0,ah),[h,x]=p,[C,L]=dm(),[I,w]=(0,y.useState)(ra.Uninitialized),b=I===ra.Initialized,{draggable:{active:v,nodes:R,translate:D},droppable:{containers:T}}=h,k=v!=null?R.get(v):null,F=(0,y.useRef)({initial:null,translated:null}),_=(0,y.useMemo)(()=>{var $e;return v!=null?{id:v,data:($e=k?.data)!=null?$e:eh,rect:F}:null},[v,k]),B=(0,y.useRef)(null),[$,W]=(0,y.useState)(null),[G,H]=(0,y.useState)(null),z=no(g,Object.values(g)),U=Ia("DndDescribedBy",s),ae=(0,y.useMemo)(()=>T.getEnabled(),[T]),Z=nh(f),{droppableRects:Q,measureDroppableContainers:De,measuringScheduled:Le}=Vm(ae,{dragging:b,dependencies:[D.x,D.y],config:Z.droppable}),E=qm(R,v),de=(0,y.useMemo)(()=>G?zo(G):null,[G]),ce=Zp(),fe=Wm(E,Z.draggable.measure);sh({activeNode:v!=null?R.get(v):null,config:ce.layoutShiftCompensation,initialRect:fe,measure:Z.draggable.measure});let O=yi(E,Z.draggable.measure,fe),ue=yi(E?E.parentElement:null),oe=(0,y.useRef)({activatorEvent:null,active:null,activeNode:E,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),S=T.getNodeFor((a=oe.current.over)==null?void 0:a.id),P=Jm({measure:Z.dragOverlay.measure}),M=(o=P.nodeRef.current)!=null?o:E,V=b?(r=P.rect)!=null?r:O:null,Se=!!(P.nodeRef.current&&P.rect),le=Xm(Se?null:O),Ie=Gi(M?Ye(M):null),ve=Km(b?S??E:null),rt=Zm(ve),tt=ji(m,{transform:{x:D.x-le.x,y:D.y-le.y,scaleX:1,scaleY:1},activatorEvent:G,active:_,activeNodeRect:O,containerNodeRect:ue,draggingNodeRect:V,over:oe.current.over,overlayNodeRect:P.rect,scrollableAncestors:ve,scrollableAncestorRects:rt,windowRect:Ie}),jn=de?va(de,D):null,Wt=jm(ve),Tr=Pi(Wt),zp=Pi(Wt,[O]),to=va(tt,Tr),ao=V?Im(V,tt):null,No=_&&ao?d({active:_,collisionRect:ao,droppableRects:Q,droppableContainers:ae,pointerCoordinates:jn}):null,ai=Yo(No,"id"),[ea,oi]=(0,y.useState)(null),Xp=Se?tt:va(tt,zp),Kp=Lm(Xp,(n=ea?.rect)!=null?n:null,O),$n=(0,y.useRef)(null),ri=(0,y.useCallback)(($e,nt)=>{let{sensor:st,options:ta}=nt;if(B.current==null)return;let gt=R.get(B.current);if(!gt)return;let lt=$e.nativeEvent,Ot=new st({active:B.current,activeNode:gt,event:lt,options:ta,context:oe,onAbort(We){if(!R.get(We))return;let{onDragAbort:Ft}=z.current,Gt={id:We};Ft?.(Gt),C({type:"onDragAbort",event:Gt})},onPending(We,aa,Ft,Gt){if(!R.get(We))return;let{onDragPending:Ho}=z.current,oa={id:We,constraint:aa,initialCoordinates:Ft,offset:Gt};Ho?.(oa),C({type:"onDragPending",event:oa})},onStart(We){let aa=B.current;if(aa==null)return;let Ft=R.get(aa);if(!Ft)return;let{onDragStart:Gt}=z.current,_o={activatorEvent:lt,active:{id:aa,data:Ft.data,rect:F}};(0,wa.unstable_batchedUpdates)(()=>{Gt?.(_o),w(ra.Initializing),x({type:Oe.DragStart,initialCoordinates:We,active:aa}),C({type:"onDragStart",event:_o}),W($n.current),H(lt)})},onMove(We){x({type:Oe.DragMove,coordinates:We})},onEnd:oo(Oe.DragEnd),onCancel:oo(Oe.DragCancel)});$n.current=Ot;function oo(We){return async function(){let{active:Ft,collisions:Gt,over:_o,scrollAdjustedTranslate:Ho}=oe.current,oa=null;if(Ft&&Ho){let{cancelDrop:qo}=z.current;oa={activatorEvent:lt,active:Ft,collisions:Gt,delta:Ho,over:_o},We===Oe.DragEnd&&typeof qo=="function"&&await Promise.resolve(qo(oa))&&(We=Oe.DragCancel)}B.current=null,(0,wa.unstable_batchedUpdates)(()=>{x({type:We}),w(ra.Uninitialized),oi(null),W(null),H(null),$n.current=null;let qo=We===Oe.DragEnd?"onDragEnd":"onDragCancel";if(oa){let Yn=z.current[qo];Yn?.(oa),C({type:qo,event:oa})}})}}},[R]),jp=(0,y.useCallback)(($e,nt)=>(st,ta)=>{let gt=st.nativeEvent,lt=R.get(ta);if(B.current!==null||!lt||gt.dndKit||gt.defaultPrevented)return;let Ot={active:lt};$e(st,nt.options,Ot)===!0&&(gt.dndKit={capturedBy:nt.sensor},B.current=ta,ri(st,nt))},[R,ri]),ni=Um(c,jp);$m(c),ut(()=>{O&&I===ra.Initializing&&w(ra.Initialized)},[O,I]),(0,y.useEffect)(()=>{let{onDragMove:$e}=z.current,{active:nt,activatorEvent:st,collisions:ta,over:gt}=oe.current;if(!nt||!st)return;let lt={active:nt,activatorEvent:st,collisions:ta,delta:{x:to.x,y:to.y},over:gt};(0,wa.unstable_batchedUpdates)(()=>{$e?.(lt),C({type:"onDragMove",event:lt})})},[to.x,to.y]),(0,y.useEffect)(()=>{let{active:$e,activatorEvent:nt,collisions:st,droppableContainers:ta,scrollAdjustedTranslate:gt}=oe.current;if(!$e||B.current==null||!nt||!gt)return;let{onDragOver:lt}=z.current,Ot=ta.get(ai),oo=Ot&&Ot.rect.current?{id:Ot.id,rect:Ot.rect.current,data:Ot.data,disabled:Ot.disabled}:null,We={active:$e,activatorEvent:nt,collisions:st,delta:{x:gt.x,y:gt.y},over:oo};(0,wa.unstable_batchedUpdates)(()=>{oi(oo),lt?.(We),C({type:"onDragOver",event:We})})},[ai]),ut(()=>{oe.current={activatorEvent:G,active:_,activeNode:E,collisionRect:ao,collisions:No,droppableRects:Q,draggableNodes:R,draggingNode:M,draggingNodeRect:V,droppableContainers:T,over:ea,scrollableAncestors:ve,scrollAdjustedTranslate:to},F.current={initial:V,translated:ao}},[_,E,No,ao,R,M,V,Q,T,ea,ve,to]),Nm({...ce,delta:D,draggingRect:ao,pointerCoordinates:jn,scrollableAncestors:ve,scrollableAncestorRects:rt});let $p=(0,y.useMemo)(()=>({active:_,activeNode:E,activeNodeRect:O,activatorEvent:G,collisions:No,containerNodeRect:ue,dragOverlay:P,draggableNodes:R,droppableContainers:T,droppableRects:Q,over:ea,measureDroppableContainers:De,scrollableAncestors:ve,scrollableAncestorRects:rt,measuringConfiguration:Z,measuringScheduled:Le,windowRect:Ie}),[_,E,O,G,No,ue,P,R,T,Q,ea,De,ve,rt,Z,Le,Ie]),Yp=(0,y.useMemo)(()=>({activatorEvent:G,activators:ni,active:_,activeNodeRect:O,ariaDescribedById:{draggable:U},dispatch:x,draggableNodes:R,over:ea,measureDroppableContainers:De}),[G,ni,_,O,x,U,R,ea,De]);return y.default.createElement(Ai.Provider,{value:L},y.default.createElement(Jo.Provider,{value:Yp},y.default.createElement(Ki.Provider,{value:$p},y.default.createElement(Vr.Provider,{value:Kp},u)),y.default.createElement(rh,{disabled:l?.restoreFocus===!1})),y.default.createElement(pm,{...l,hiddenTextDescribedById:U}));function Zp(){let $e=$?.autoScrollEnabled===!1,nt=typeof i=="object"?i.enabled===!1:i===!1,st=b&&!$e&&!nt;return typeof i=="object"?{...i,enabled:st}:{enabled:st}}}),lh=(0,y.createContext)(null),Di="button",ih="Draggable";function $i(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=Ia(ih),{activators:s,activatorEvent:l,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,y.useContext)(Jo),{role:m=Di,roleDescription:g="draggable",tabIndex:p=0}=r??{},h=i?.id===t,x=(0,y.useContext)(h?Vr:lh),[C,L]=Wo(),[I,w]=Wo(),b=Ym(s,t),v=no(a);ut(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:I,data:v}),()=>{let D=d.get(t);D&&D.key===n&&d.delete(t)}),[d,t]);let R=(0,y.useMemo)(()=>({role:m,tabIndex:p,"aria-disabled":o,"aria-pressed":h&&m===Di?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,m,p,h,g,c.draggable]);return{active:i,activatorEvent:l,activeNodeRect:u,attributes:R,isDragging:h,listeners:o?void 0:b,node:C,over:f,setNodeRef:L,setActivatorNodeRef:w,transform:x}}function Qo(){return(0,y.useContext)(Ki)}var uh="Droppable",dh={timeout:25};function Gr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=Ia(uh),{active:s,dispatch:l,over:i,measureDroppableContainers:u}=(0,y.useContext)(Jo),c=(0,y.useRef)({disabled:a}),d=(0,y.useRef)(!1),f=(0,y.useRef)(null),m=(0,y.useRef)(null),{disabled:g,updateMeasurementsFor:p,timeout:h}={...dh,...r},x=no(p??o),C=(0,y.useCallback)(()=>{if(!d.current){d.current=!0;return}m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),m.current=null},h)},[h]),L=Ur({callback:C,disabled:g||!s}),I=(0,y.useCallback)((R,D)=>{L&&(D&&(L.unobserve(D),d.current=!1),R&&L.observe(R))},[L]),[w,b]=Wo(I),v=no(t);return(0,y.useEffect)(()=>{!L||!w.current||(L.disconnect(),d.current=!1,L.observe(w.current))},[w,L]),(0,y.useEffect)(()=>(l({type:Oe.RegisterDroppable,element:{id:o,key:n,disabled:a,node:w,rect:f,data:v}}),()=>l({type:Oe.UnregisterDroppable,key:n,id:o})),[o]),(0,y.useEffect)(()=>{a!==c.current.disabled&&(l({type:Oe.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,l]),{active:s,rect:f,isOver:i?.id===o,node:w,over:i,setNodeRef:b}}function ch(e){let{animation:t,children:a}=e,[o,r]=(0,y.useState)(null),[n,s]=(0,y.useState)(null),l=Go(a);return!a&&!o&&l&&r(l),ut(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),y.default.createElement(y.default.Fragment,null,a,o?(0,y.cloneElement)(o,{ref:s}):null)}var fh={x:0,y:0,scaleX:1,scaleY:1};function ph(e){let{children:t}=e;return y.default.createElement(Jo.Provider,{value:Xi},y.default.createElement(Vr.Provider,{value:fh},t))}var mh={position:"fixed",touchAction:"none"},hh=e=>lo(e)?"transform 250ms ease":void 0,gh=(0,y.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:s,rect:l,style:i,transform:u,transition:c=hh}=e;if(!l)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...mh,width:l.width,height:l.height,top:l.top,left:l.left,transform:it.Transform.toString(d),transformOrigin:r&&o?mm(o,l):void 0,transition:typeof c=="function"?c(o):c,...i};return y.default.createElement(a,{className:s,style:f,ref:t},n)}),xh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:s}=e;if(n!=null&&n.active)for(let[l,i]of Object.entries(n.active))i!==void 0&&(r[l]=a.node.style.getPropertyValue(l),a.node.style.setProperty(l,i));if(n!=null&&n.dragOverlay)for(let[l,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(l,i);return s!=null&&s.active&&a.node.classList.add(s.active),s!=null&&s.dragOverlay&&o.node.classList.add(s.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);s!=null&&s.active&&a.node.classList.remove(s.active)}},Lh=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:it.Transform.toString(t)},{transform:it.Transform.toString(a)}]},Ch={duration:250,easing:"ease",keyframes:Lh,sideEffects:xh({styles:{active:{opacity:"0"}}})};function Ih(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Vo((n,s)=>{if(t===null)return;let l=a.get(n);if(!l)return;let i=l.node.current;if(!i)return;let u=zi(s);if(!u)return;let{transform:c}=Ye(s).getComputedStyle(s),d=Fi(c);if(!d)return;let f=typeof t=="function"?t:vh(t);return Vi(i,r.draggable.measure),f({active:{id:n,data:l.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:s,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function vh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Ch,...e};return n=>{let{active:s,dragOverlay:l,transform:i,...u}=n;if(!t)return;let c={x:l.rect.left-s.rect.left,y:l.rect.top-s.rect.top},d={scaleX:i.scaleX!==1?s.rect.width*i.scaleX/l.rect.width:1,scaleY:i.scaleY!==1?s.rect.height*i.scaleY/l.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},m=r({...u,active:s,dragOverlay:l,transform:{initial:i,final:f}}),[g]=m,p=m[m.length-1];if(JSON.stringify(g)===JSON.stringify(p))return;let h=o?.({active:s,dragOverlay:l,...u}),x=l.node.animate(m,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{h?.(),C()}})}}var Mi=0;function bh(e){return(0,y.useMemo)(()=>{if(e!=null)return Mi++,Mi},[e])}var Yi=y.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:s,wrapperElement:l="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:m,draggableNodes:g,droppableContainers:p,dragOverlay:h,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:I,windowRect:w}=Qo(),b=(0,y.useContext)(Vr),v=bh(d?.id),R=ji(s,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:m,draggingNodeRect:h.rect,over:x,overlayNodeRect:h.rect,scrollableAncestors:L,scrollableAncestorRects:I,transform:b,windowRect:w}),D=fs(f),T=Ih({config:o,draggableNodes:g,droppableContainers:p,measuringConfiguration:C}),k=D?h.setRef:void 0;return y.default.createElement(ph,null,y.default.createElement(ch,{animation:T},d&&v?y.default.createElement(gh,{key:v,id:d.id,ref:k,as:l,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:D,style:{zIndex:u,...r},transform:R},a):null))});var ye=K(require("react"));function Zi(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Sh(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function zr(e){return e!==null&&e>=0}function wh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function yh(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Ji=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Zi(t,o,a),s=t[r],l=n[r];return!l||!s?null:{x:l.left-s.left,y:l.top-s.top,scaleX:l.width/s.width,scaleY:l.height/s.height}};var Xr={scaleX:1,scaleY:1},jr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:s}=e,l=(t=n[a])!=null?t:o;if(!l)return null;if(r===a){let u=n[s];return u?{x:0,y:a<s?u.top+u.height-(l.top+l.height):u.top-l.top,...Xr}:null}let i=Rh(n,r,a);return r>a&&r<=s?{x:0,y:-l.height-i,...Xr}:r<a&&r>=s?{x:0,y:l.height+i,...Xr}:{x:0,y:0,...Xr}};function Rh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Qi="Sortable",eu=ye.default.createContext({activeIndex:-1,containerId:Qi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ji,disabled:{draggable:!1,droppable:!1}});function $r(e){let{children:t,id:a,items:o,strategy:r=Ji,disabled:n=!1}=e,{active:s,dragOverlay:l,droppableRects:i,over:u,measureDroppableContainers:c}=Qo(),d=Ia(Qi,a),f=l.rect!==null,m=(0,ye.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),g=s!=null,p=s?m.indexOf(s.id):-1,h=u?m.indexOf(u.id):-1,x=(0,ye.useRef)(m),C=!wh(m,x.current),L=h!==-1&&p===-1||C,I=yh(n);ut(()=>{C&&g&&c(m)},[C,m,g,c]),(0,ye.useEffect)(()=>{x.current=m},[m]);let w=(0,ye.useMemo)(()=>({activeIndex:p,containerId:d,disabled:I,disableTransforms:L,items:m,overIndex:h,useDragOverlay:f,sortedRects:Sh(m,i),strategy:r}),[p,d,I.draggable,I.droppable,L,m,h,i,f,r]);return ye.default.createElement(eu.Provider,{value:w},t)}var Ph=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Zi(a,o,r).indexOf(t)},kh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:s,previousItems:l,previousContainerId:i,transition:u}=e;return!u||!o||l!==n&&r===s?!1:a?!0:s!==r&&t===i},Dh={duration:200,easing:"ease"},tu="transform",Mh=it.Transition.toString({property:tu,duration:0,easing:"linear"}),Ah={roleDescription:"sortable"};function Th(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,s]=(0,ye.useState)(null),l=(0,ye.useRef)(a);return ut(()=>{if(!t&&a!==l.current&&o.current){let i=r.current;if(i){let u=Pa(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&s(c)}}a!==l.current&&(l.current=a)},[t,a,o,r]),(0,ye.useEffect)(()=>{n&&s(null)},[n]),n}function Yr(e){let{animateLayoutChanges:t=kh,attributes:a,disabled:o,data:r,getNewIndex:n=Ph,id:s,strategy:l,resizeObserverConfig:i,transition:u=Dh}=e,{items:c,containerId:d,activeIndex:f,disabled:m,disableTransforms:g,sortedRects:p,overIndex:h,useDragOverlay:x,strategy:C}=(0,ye.useContext)(eu),L=Eh(o,m),I=c.indexOf(s),w=(0,ye.useMemo)(()=>({sortable:{containerId:d,index:I,items:c},...r}),[d,r,I,c]),b=(0,ye.useMemo)(()=>c.slice(c.indexOf(s)),[c,s]),{rect:v,node:R,isOver:D,setNodeRef:T}=Gr({id:s,data:w,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:k,activatorEvent:F,activeNodeRect:_,attributes:B,setNodeRef:$,listeners:W,isDragging:G,over:H,setActivatorNodeRef:z,transform:U}=$i({id:s,data:w,attributes:{...Ah,...a},disabled:L.draggable}),ae=fi(T,$),Z=!!k,Q=Z&&!g&&zr(f)&&zr(h),De=!x&&G,Le=De&&Q?U:null,de=Q?Le??(l??C)({rects:p,activeNodeRect:_,activeIndex:f,overIndex:h,index:I}):null,ce=zr(f)&&zr(h)?n({id:s,items:c,activeIndex:f,overIndex:h}):I,fe=k?.id,O=(0,ye.useRef)({activeId:fe,items:c,newIndex:ce,containerId:d}),ue=c!==O.current.items,oe=t({active:k,containerId:d,isDragging:G,isSorting:Z,id:s,index:I,items:c,newIndex:O.current.newIndex,previousItems:O.current.items,previousContainerId:O.current.containerId,transition:u,wasDragging:O.current.activeId!=null}),S=Th({disabled:!oe,index:I,node:R,rect:v});return(0,ye.useEffect)(()=>{Z&&O.current.newIndex!==ce&&(O.current.newIndex=ce),d!==O.current.containerId&&(O.current.containerId=d),c!==O.current.items&&(O.current.items=c)},[Z,ce,d,c]),(0,ye.useEffect)(()=>{if(fe===O.current.activeId)return;if(fe!=null&&O.current.activeId==null){O.current.activeId=fe;return}let M=setTimeout(()=>{O.current.activeId=fe},50);return()=>clearTimeout(M)},[fe]),{active:k,activeIndex:f,attributes:B,data:w,rect:v,index:I,newIndex:ce,items:c,isOver:D,isSorting:Z,isDragging:G,listeners:W,node:R,overIndex:h,over:H,setNodeRef:ae,setActivatorNodeRef:z,setDroppableNodeRef:T,setDraggableNodeRef:$,transform:S??de,transition:P()};function P(){if(S||ue&&O.current.newIndex===I)return Mh;if(!(De&&!lo(F)||!u)&&(Z||oe))return it.Transition.toString({...u,property:tu})}}function Eh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Kr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Oh=[re.Down,re.Right,re.Up,re.Left],Zr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:s,scrollableAncestors:l}}=t;if(Oh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=qr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Yo(u,"id");if(c===s?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),m=f?r.get(f.id):null,g=f?.node.current;if(g&&m&&d&&f){let h=Zo(g).some((b,v)=>l[v]!==b),x=au(d,f),C=Fh(d,f),L=h||!x?{x:0,y:0}:{x:C?o.width-m.width:0,y:C?o.height-m.height:0},I={x:m.left,y:m.top};return L.x&&L.y?I:ba(I,L)}}}};function au(e,t){return!Kr(e)||!Kr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Fh(e,t){return!Kr(e)||!Kr(t)||!au(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Jr=require("react");var ou=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function ru(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ou(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var nu=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var su=e=>{let t=nu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var tr=require("react");var er=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function ps(e){return e!=null}function lu(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??la.width,n=e.size??e.height??la.height,s=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],l=[...e.name?[`lucide-${e.name}`]:[],...s],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?er(...i):er("lucide",...l,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??la["stroke-width"])*Number(e.size??e.width??la.width)/Number(t.size??t.width??la.width):t.strokeWidth??la["stroke-width"];return["svg",{...Object.entries(la).reduce((f,[m,g])=>(f[o(m)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&ps(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&ps(t.width)&&{[o("width")]:t.width},..."height"in t&&ps(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[m,g,p]=f,h=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return p?[m,h,p]:[m,h]})]}function iu(e,t={}){return lu(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var uu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var uo=require("react");var Bh=(0,uo.createContext)({});var du=()=>(0,uo.useContext)(Bh);var cu=(0,tr.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:s,className:l="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:m=24,strokeWidth:g=2,absoluteStrokeWidth:p=!1,nonScalingStroke:h=!1,color:x="currentColor",className:C=""}=du()??{},L=!!i||uu(d),[I,w,b=[]]=iu(c,{color:e??x,width:a??t??m,height:o??t??m,strokeWidth:r??g,absoluteStrokeWidth:n??p,nonScalingStroke:s??h,className:er(C,l),hasA11yProp:L,attributes:d});return(0,tr.createElement)(I,{ref:f,...w},[...b.map(([v,R])=>(0,tr.createElement)(v,R)),...Array.isArray(i)?i:[i]])});function pe(e,t=[],a=[]){let o=typeof e=="string"?ru(e,t,a):e,r=(0,Jr.forwardRef)(({className:n,...s},l)=>(0,Jr.createElement)(cu,{ref:l,icon:o,className:n,...s}));return o.name&&(r.displayName=su(o.name)),r}var fu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};fu.node;var wt=pe(fu);var pu={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};pu.node;var co=pe(pu);var mu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};mu.node;var ar=pe(mu);var hu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};hu.node;var ia=pe(hu);var gu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};gu.node;var or=pe(gu);var xu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};xu.node;var rr=pe(xu);var Lu={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};Lu.node;var ka=pe(Lu);var Cu={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Cu.node;var zt=pe(Cu);var Iu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Iu.node;var nr=pe(Iu);var vu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};vu.node;var sr=pe(vu);var bu={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};bu.node;var lr=pe(bu);var Su={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Su.node;var fo=pe(Su);var wu={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};wu.node;var Lt=pe(wu);var yu={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yu.node;var ir=pe(yu);var Et=require("react");var _u=K(require("react"),1);var ze=K(require("react"),1);var Ru=K(require("react"),1),Nh=Object.defineProperty,hs=(e,t)=>Nh(e,"name",{value:t,configurable:!0});function ms(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}hs(ms,"setRef");function Pu(...e){return t=>{let a=!1,o=e.map(r=>{let n=ms(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():ms(e[r],null)}}}}hs(Pu,"composeRefs");function J(...e){return Ru.useCallback(Pu(...e),e)}hs(J,"useComposedRefs");var _h=Object.defineProperty,dt=(e,t)=>_h(e,"name",{value:t,configurable:!0});function Ze(e){let t=ze.forwardRef((a,o)=>{let{children:r,...n}=a,s=null,l=!1,i=[];r=Ou(r),ze.Children.forEach(r,f=>{if(Tu(f)){l=!0;let m=f,g="child"in m.props?m.props.child:m.props.children;for(;gs(g)&&typeof Qr=="function";)g=Qr(g._payload);s=qh(m,g),i.push(s?.props?.children)}else i.push(f)}),s?s=ze.cloneElement(s,void 0,i):!l&&ze.Children.count(r)===1&&ze.isValidElement(r)&&(s=r);let u=s?Au(s):void 0,c=J(o,u);if(!s){if(r||r===0)throw new Error(l?Wh(e):Vh(e));return r}let d=Mu(n,s.props??{});return s.type!==ze.Fragment&&(d.ref=o?c:u),ze.cloneElement(s,d)});return t.displayName=`${e}.Slot`,t}dt(Ze,"createSlot");var ku=Ze("Slot"),Du=Symbol.for("radix.slottable");function Hh(e){let t=dt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Du,t}dt(Hh,"createSlottable");var qh=dt((e,t)=>"child"in e.props?ze.isValidElement(t)?ze.cloneElement(t,void 0,e.props.children(t.props.children)):null:ze.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function Mu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...l)=>{let i=n(...l);return r(...l),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"?a[o]=[r,n].filter(Boolean).join(" "):o==="aria-describedby"&&(a[o]=Fu(n,r))}return{...e,...a}}dt(Mu,"mergeProps");function Au(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}dt(Au,"getElementRef");function Tu(e){return ze.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Du}dt(Tu,"isSlottable");var Uh=Symbol.for("react.lazy");function gs(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Uh&&"_payload"in e&&Eu(e._payload)}dt(gs,"isLazyComponent");function Eu(e){return typeof e=="object"&&e!==null&&"then"in e}dt(Eu,"isPromiseLike");function Ou(e){let t=e;for(;gs(t)&&typeof Qr=="function";)t=Qr(t._payload);return t}dt(Ou,"useUnwrappedLazy");function Fu(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}dt(Fu,"concatAriaDescribedby");var Vh=dt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Wh=dt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Qr=ze[" use ".trim().toString()];function Bu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Bu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Nu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Bu(e))&&(o&&(o+=" "),o+=t);return o}function ee(...e){return Nu(e)}var Hu=require("react/jsx-runtime");function Gh({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ee("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Me=_u.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Hu.jsx)(o?ku:"button",{className:Gh({variant:t,size:a,className:e}),ref:n,...r}));Me.displayName="Button";var Lr=K(require("react"),1);var ge=K(require("react"),1);var zh=Object.defineProperty,po=(e,t)=>zh(e,"name",{value:t,configurable:!0}),qu=!!(typeof window<"u"&&window.document&&window.document.createElement);function X(e,t,{checkForDefaultPrevented:a=!0}={}){return po(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}po(X,"composeEventHandlers");function Xh(e){if(!qu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}po(Xh,"getOwnerWindow");function xs(e){if(!qu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}po(xs,"getOwnerDocument");function Uu(e,t=!1){let{activeElement:a}=xs(e);if(!a?.nodeName)return null;if(Vu(a)&&a.contentDocument)return Uu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=xs(a).getElementById(o);if(r)return r}}return a}po(Uu,"getActiveElement");function Vu(e){return e.tagName==="IFRAME"}po(Vu,"isFrame");var It=K(require("react"),1),Ls=require("react/jsx-runtime"),Kh=Object.defineProperty,Ct=(e,t)=>Kh(e,"name",{value:t,configurable:!0});function jh(e,t){let a=It.createContext(t);a.displayName=e+"Context";let o=Ct(n=>{let{children:s,...l}=n,i=It.useMemo(()=>l,Object.values(l));return(0,Ls.jsx)(a.Provider,{value:i,children:s})},"Provider");o.displayName=e+"Provider";function r(n,s={}){let{optional:l=!1}=s,i=It.useContext(a);if(i)return i;if(t!==void 0)return t;if(!l)throw new Error(`\`${n}\` must be used within \`${e}\``)}return Ct(r,"useContext"),[o,r]}Ct(jh,"createContext");function Xe(e,t=[]){let a=[];function o(n,s){let l=It.createContext(s);l.displayName=n+"Context";let i=a.length;a=[...a,s];let u=Ct(d=>{let{scope:f,children:m,...g}=d,p=f?.[e]?.[i]||l,h=It.useMemo(()=>g,Object.values(g));return(0,Ls.jsx)(p.Provider,{value:h,children:m})},"Provider");u.displayName=n+"Provider";function c(d,f,m={}){let{optional:g=!1}=m,p=f?.[e]?.[i]||l,h=It.useContext(p);if(h)return h;if(s!==void 0)return s;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return Ct(c,"useContext"),[u,c]}Ct(o,"createContext");let r=Ct(()=>{let n=a.map(s=>It.createContext(s));return Ct(function(l){let i=l?.[e]||n;return It.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return r.scopeName=e,[o,Wu(r,...t)]}Ct(Xe,"createContextScope");function Wu(...e){let t=e[0];if(e.length===1)return t;let a=Ct(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return Ct(function(n){let s=o.reduce((l,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...l,...d}},{});return It.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}Ct(Wu,"composeContextScopes");var Cs=K(require("react"),1);var Gu=K(require("react"),1),se=globalThis?.document?Gu.useLayoutEffect:()=>{};var $h=Object.defineProperty,Yh=(e,t)=>$h(e,"name",{value:t,configurable:!0}),Zh=Cs[" useId ".trim().toString()]||(()=>{}),Jh=0;function ct(e){let[t,a]=Cs.useState(Zh());return se(()=>{e||a(o=>o??String(Jh++))},[e]),e||(t?`radix-${t}`:"")}Yh(ct,"useId");var vt=K(require("react"),1);var en=!1;var yt=K(require("react"),1);var mo=K(require("react"),1),Qh=Object.defineProperty,eg=(e,t)=>Qh(e,"name",{value:t,configurable:!0}),zu=mo[" useEffectEvent ".trim().toString()],Xu=mo[" useInsertionEffect ".trim().toString()];function Is(e){if(typeof zu=="function")return zu(e);let t=mo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Xu=="function"?Xu(()=>{t.current=e}):se(()=>{t.current=e}),mo.useMemo(()=>((...a)=>t.current?.(...a)),[])}eg(Is,"useEffectEvent");var tg=Object.defineProperty,ur=(e,t)=>tg(e,"name",{value:t,configurable:!0}),ag=vt[" useInsertionEffect ".trim().toString()]||se;function Bt({prop:e,defaultProp:t,onChange:a=ur(()=>{},"onChange"),caller:o}){let[r,n,s]=ju({defaultProp:t,onChange:a}),l=e!==void 0,i=l?e:r;if(en){let c=vt.useRef(e!==void 0);vt.useEffect(()=>{let d=c.current;d!==l&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,o])}let u=vt.useCallback(c=>{if(l){let d=$u(c)?c(e):c;d!==e&&s.current?.(d)}else n(c)},[l,e,n,s]);return[i,u]}ur(Bt,"useControllableState");function ju({defaultProp:e,onChange:t}){let[a,o]=vt.useState(e),r=vt.useRef(a),n=vt.useRef(t);return ag(()=>{n.current=t},[t]),vt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}ur(ju,"useUncontrolledState");function $u(e){return typeof e=="function"}ur($u,"isFunction");var Ku=Symbol("RADIX:SYNC_STATE");function og(e,t,a,o){let{prop:r,defaultProp:n,onChange:s,caller:l}=t,i=r!==void 0,u=Is(s);if(en){let h=yt.useRef(r!==void 0);yt.useEffect(()=>{let x=h.current;x!==i&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=i},[i,l])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=yt.useReducer((h,x)=>{if(x.type===Ku)return{...h,state:x.state};let C=e(h,x);return i&&!Object.is(C.state,h.state)&&u(C.state),C},...c),m=d.state,g=yt.useRef(m);yt.useEffect(()=>{g.current!==m&&(g.current=m,i||u(m))},[m,g,i]);let p=yt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return yt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:Ku,state:r})},[r,d.state,i]),[p,f]}ur(og,"useControllableStateReducer");var me=K(require("react"),1);var Yu=K(require("react"),1),Zu=K(require("react-dom"),1);var Ju=require("react/jsx-runtime"),rg=Object.defineProperty,ng=(e,t)=>rg(e,"name",{value:t,configurable:!0}),sg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],te=sg.reduce((e,t)=>{let a=Ze(`Primitive.${t}`),o=Yu.forwardRef((r,n)=>{let{asChild:s,...l}=r,i=s?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Ju.jsx)(i,{...l,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function dr(e,t){e&&Zu.flushSync(()=>e.dispatchEvent(t))}ng(dr,"dispatchDiscreteCustomEvent");var cr=K(require("react"),1),lg=Object.defineProperty,ig=(e,t)=>lg(e,"name",{value:t,configurable:!0}),Qu=cr[" useInsertionEffect ".trim().toString()];function He(e){let t=cr.useRef(e);return typeof Qu=="function"?Qu(()=>{t.current=e}):se(()=>{t.current=e}),cr.useMemo(()=>((...a)=>t.current?.(...a)),[])}ig(He,"useCallbackRef");var td=require("react/jsx-runtime"),ug=Object.defineProperty,qe=(e,t)=>ug(e,"name",{value:t,configurable:!0}),vs="dismissableLayer.update",dg="dismissableLayer.pointerDownOutside",cg="dismissableLayer.focusOutside",ed,ad=me.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ho=me.forwardRef(qe(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:i,onDismiss:u,...c}=t,d=me.useContext(ad),[f,m]=me.useState(null),g=f?.ownerDocument??globalThis?.document,[,p]=me.useState({}),h=J(a,m),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,I=f?x.indexOf(f):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,b=I>=L,v=me.useRef(!1),R=od(F=>{s?.(F),i?.(F),F.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:v,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:me.useCallback(F=>{if(!(F instanceof Node))return!1;let _=[...d.branches].some(B=>B.contains(F));return b&&!_},[d.branches,b])}),D=rd(F=>{if(r&&v.current)return;let _=F.target;[...d.branches].some($=>$.contains(_))||(l?.(F),i?.(F),F.defaultPrevented||u?.())},g),T=f?I===x.length-1:!1,k=He(F=>{F.key==="Escape"&&(n?.(F),!F.defaultPrevented&&u&&(F.preventDefault(),u()))});return me.useEffect(()=>{if(T)return g.addEventListener("keydown",k,{capture:!0}),()=>g.removeEventListener("keydown",k,{capture:!0})},[g,T,k]),me.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(ed=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),bs(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=ed))}},[f,g,o,d]),me.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),bs())},[f,d]),me.useEffect(()=>{let F=qe(()=>p({}),"handleUpdate");return document.addEventListener(vs,F),()=>document.removeEventListener(vs,F)},[]),(0,td.jsx)(te.div,{...c,ref:h,style:{pointerEvents:w?b?"auto":"none":void 0,...t.style},onFocusCapture:X(t.onFocusCapture,D.onFocusCapture),onBlurCapture:X(t.onBlurCapture,D.onBlurCapture),onPointerDownCapture:X(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function Ss(){let e=me.useContext(ad),[t,a]=me.useState(null);return me.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}qe(Ss,"useDismissableLayerSurface");var fg=qe(()=>!0,"IS_TRUE");function od(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:s=fg}=t,l=He(e),i=me.useRef(!1),u=me.useRef(!1),c=me.useRef(new Map),d=me.useRef(()=>{});return me.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}qe(f,"resetOutsideInteraction");function m(){return Array.from(c.current.values()).some(Boolean)}qe(m,"isOutsideInteractionIntercepted");function g(L){if(!u.current)return;let I=L.target;I instanceof Node&&[...n].some(b=>b.contains(I))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}qe(g,"handleInteractionCapture");function p(L){u.current&&c.current.set(L.type,!1)}qe(p,"handleInteractionBubble");let h=qe(L=>{if(L.target&&!i.current){let w=function(){a.removeEventListener("click",d.current);let v=m();f(),v||ws(dg,l,b,{discrete:!0})};var I=w;if(qe(w,"handleAndDispatchPointerDownOutsideEvent"),!s(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?w():(a.removeEventListener("click",d.current),d.current=w,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,g,!0),a.addEventListener(L,p);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",h)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",h),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,g,!0),a.removeEventListener(L,p)}},[a,l,o,r,n,s]),{onPointerDownCapture:qe(()=>i.current=!0,"onPointerDownCapture")}}qe(od,"usePointerDownOutside");function rd(e,t=globalThis?.document){let a=He(e),o=me.useRef(!1);return me.useEffect(()=>{let r=qe(n=>{n.target&&!o.current&&ws(cg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:qe(()=>o.current=!0,"onFocusCapture"),onBlurCapture:qe(()=>o.current=!1,"onBlurCapture")}}qe(rd,"useFocusOutside");function bs(){let e=new CustomEvent(vs);document.dispatchEvent(e)}qe(bs,"dispatchUpdate");function ws(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?dr(r,n):r.dispatchEvent(n)}qe(ws,"handleAndDispatchCustomEvent");var be=K(require("react"),1);var Ds=require("react/jsx-runtime"),pg=Object.defineProperty,Ae=(e,t)=>pg(e,"name",{value:t,configurable:!0}),ys="focusScope.autoFocusOnMount",Rs="focusScope.autoFocusOnUnmount",nd={bubbles:!1,cancelable:!0},go=be.forwardRef(Ae(function(t,a){let{loop:o=!1,trapped:r=!1,branches:n,onMountAutoFocus:s,onUnmountAutoFocus:l,...i}=t,[u,c]=be.useState(null),d=He(s),f=He(l),m=be.useRef(null),g=J(a,c),p=be.useRef(n);be.useEffect(()=>{p.current=n});let h=be.useCallback(L=>L?u?.contains(L)?!0:!!p.current?.some(I=>I.contains(L)):!1,[u]),x=be.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;be.useEffect(()=>{if(r){let b=function(T){if(x.paused||!u)return;let k=T.target;h(k)?m.current=k:Xt(m.current,{select:!0})},v=function(T){if(x.paused||!u)return;let k=T.relatedTarget;k!==null&&(h(k)||Xt(m.current,{select:!0}))},R=function(T){if(document.activeElement===document.body)for(let F of T)F.removedNodes.length>0&&Xt(u)};var L=b,I=v,w=R;Ae(b,"handleFocusIn"),Ae(v,"handleFocusOut"),Ae(R,"handleMutations"),document.addEventListener("focusin",b),document.addEventListener("focusout",v);let D=new MutationObserver(R);return u&&D.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",v),D.disconnect()}}},[r,u,x.paused,h]),be.useEffect(()=>{if(u){sd.add(x);let L=document.activeElement;if(!u.contains(L)){let w=new CustomEvent(ys,nd);u.addEventListener(ys,d),u.dispatchEvent(w),w.defaultPrevented||(id(pd(As(u)),{select:!0}),document.activeElement===L&&Xt(u))}return()=>{u.removeEventListener(ys,d);let w=u.ownerDocument,b=CustomEvent;setTimeout(()=>{let v=new b(Rs,nd);u.addEventListener(Rs,f),u.dispatchEvent(v),v.defaultPrevented||Xt(L??w.body,{select:!0}),u.removeEventListener(Rs,f),sd.remove(x)},0)}}},[u,d,f,x]);let C=be.useCallback(L=>{if(!o&&!r||x.paused)return;let I=L.key==="Tab"&&!L.altKey&&!L.ctrlKey&&!L.metaKey,w=document.activeElement;if(I&&w){let b=L.currentTarget,[v,R]=ud(b);v&&R?!L.shiftKey&&w===R?(L.preventDefault(),o&&Xt(v,{select:!0})):L.shiftKey&&w===v&&(L.preventDefault(),o&&Xt(R,{select:!0})):w===b&&L.preventDefault()}},[o,r,x.paused]);return(0,Ds.jsx)(te.div,{tabIndex:-1,...i,ref:g,onKeyDown:C})},"FocusScope")),ld=be.createContext(null);function fr({registry:e,children:t}){return e?(0,Ds.jsx)(ld.Provider,{value:e,children:t}):t}Ae(fr,"FocusScopeBranchProvider");function pr(){let[e,t]=be.useState([]),a=be.useMemo(()=>({add:Ae(o=>t(r=>r.includes(o)?r:[...r,o]),"add"),remove:Ae(o=>t(r=>r.filter(n=>n!==o)),"remove")}),[]);return{nodes:e,registry:a}}Ae(pr,"useFocusScopeBranchRegistry");function Ms(e){let t=be.useContext(ld);be.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}Ae(Ms,"useFocusScopeBranch");function id(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Xt(o,{select:t}),document.activeElement!==a)return}Ae(id,"focusFirst");function ud(e){let t=As(e),a=Ps(t,e),o=Ps(t.reverse(),e);return[a,o]}Ae(ud,"getTabbableEdges");function As(e){let t=[],o=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ae(r=>{let n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;o.nextNode();)t.push(o.currentNode);return t}Ae(As,"getTabbableCandidates");function Ps(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):dd(o,{upTo:t})))return o}Ae(Ps,"findVisible");function dd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ae(dd,"isHidden");function cd(e){return e.tagName==="INPUT"&&typeof e.select=="function"}Ae(cd,"isSelectableInput");function Xt(e,{select:t=!1}={}){if(e&&e.focus){let o=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==o&&cd(e)&&t&&e.select()}}Ae(Xt,"focus");var sd=fd();function fd(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=ks(e,t),e.unshift(t)},remove(t){e=ks(e,t),e[0]?.resume()}}}Ae(fd,"createFocusScopesStack");function ks(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ae(ks,"arrayRemove");function pd(e){return e.filter(t=>t.tagName!=="A")}Ae(pd,"removeLinks");var tn=K(require("react"),1),md=K(require("react-dom"),1);var hd=require("react/jsx-runtime"),mg=Object.defineProperty,hg=(e,t)=>mg(e,"name",{value:t,configurable:!0}),xo=tn.forwardRef(hg(function(t,a){let{container:o,...r}=t,[n,s]=tn.useState(!1);se(()=>s(!0),[]);let l=o||n&&globalThis?.document?.body;return l?md.createPortal((0,hd.jsx)(te.div,{...r,ref:a}),l):null},"Portal"));var Ke=K(require("react"),1);var gd=K(require("react"),1),gg=Object.defineProperty,Kt=(e,t)=>gg(e,"name",{value:t,configurable:!0});function xd(e,t){return gd.useReducer((a,o)=>t[a][o]??a,e)}Kt(xd,"useStateMachine");var jt=Kt(e=>{let{present:t,children:a}=e,o=Ld(t),r=typeof a=="function"?a({present:o.isPresent}):Ke.Children.only(a),n=Cd(o.ref,Id(r));return typeof a=="function"||o.isPresent?Ke.cloneElement(r,{ref:n}):null},"Presence");function Ld(e){let[t,a]=Ke.useState(),o=Ke.useRef(null),r=Ke.useRef(e),n=Ke.useRef("none"),s=Ke.useRef(void 0),l=e?"mounted":"unmounted",[i,u]=xd(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ke.useEffect(()=>{i==="mounted"?(n.current=s.current??Lo(o.current),s.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let m=n.current,g=Lo(c);e?(s.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&m!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Kt(g=>{let h=Lo(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&h&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),m=Kt(g=>{g.target===t&&(n.current=Lo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ke.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,s.current=Lo(d)}else o.current=null;a(c)},[])}}Kt(Ld,"usePresence");function Ts(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Kt(Ts,"setRef");function Cd(...e){let t=Ke.useRef(e);return t.current=e,Ke.useCallback(a=>{let o=t.current,r=!1,n=o.map(s=>{let l=Ts(s,a);return!r&&typeof l=="function"&&(r=!0),l});if(r)return()=>{for(let s=0;s<n.length;s++){let l=n[s];typeof l=="function"?l():Ts(o[s],null)}}},[])}Kt(Cd,"useStableComposedRefs");function Lo(e){return e?.animationName||"none"}Kt(Lo,"getAnimationName");function Id(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Kt(Id,"getElementRef");var vd=K(require("react"),1),xg=Object.defineProperty,Os=(e,t)=>xg(e,"name",{value:t,configurable:!0}),an=0,Co=null;function Lg(e){return ua(),e.children}Os(Lg,"FocusGuards");function ua(){vd.useEffect(()=>{Co||(Co={start:Es(),end:Es()});let{start:e,end:t}=Co;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),an++,()=>{an===1&&(Co?.start.remove(),Co?.end.remove(),Co=null),an=Math.max(0,an-1)}},[])}Os(ua,"useFocusGuards");function Es(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Os(Es,"createFocusGuard");var ot=function(){return ot=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},ot.apply(this,arguments)};function on(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function bd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var un=K(require("react"));var Je=K(require("react"));var Da="right-scroll-bar-position",Ma="width-before-scroll-bar",Fs="with-scroll-bars-hidden",Bs="--removed-body-scroll-bar-size";function rn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Sd=require("react");function wd(e,t){var a=(0,Sd.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var nn=K(require("react"));var Cg=typeof window<"u"?nn.useLayoutEffect:nn.useEffect,yd=new WeakMap;function Ns(e,t){var a=wd(t||null,function(o){return e.forEach(function(r){return rn(r,o)})});return Cg(function(){var o=yd.get(a);if(o){var r=new Set(o),n=new Set(e),s=a.current;r.forEach(function(l){n.has(l)||rn(l,null)}),n.forEach(function(l){r.has(l)||rn(l,s)})}yd.set(a,e)},[e]),a}function Ig(e){return e}function vg(e,t){t===void 0&&(t=Ig);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var s=t(n,o);return a.push(s),function(){a=a.filter(function(l){return l!==s})}},assignSyncMedium:function(n){for(o=!0;a.length;){var s=a;a=[],s.forEach(n)}a={push:function(l){return n(l)},filter:function(){return a}}},assignMedium:function(n){o=!0;var s=[];if(a.length){var l=a;a=[],l.forEach(n),s=a}var i=function(){var c=s;s=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),a}}}};return r}function _s(e){e===void 0&&(e={});var t=vg(null);return t.options=ot({async:!0,ssr:!1},e),t}var Rd=K(require("react")),Pd=function(e){var t=e.sideCar,a=on(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return Rd.createElement(o,ot({},a))};Pd.isSideCarExport=!0;function Hs(e,t){return e.useMedium(t),Pd}var sn=_s();var qs=function(){},mr=Je.forwardRef(function(e,t){var a=Je.useRef(null),o=Je.useState({onScrollCapture:qs,onWheelCapture:qs,onTouchMoveCapture:qs}),r=o[0],n=o[1],s=e.forwardProps,l=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,m=e.noRelative,g=e.noIsolation,p=e.inert,h=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,I=on(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=f,b=Ns([a,t]),v=ot(ot({},I),r);return Je.createElement(Je.Fragment,null,c&&Je.createElement(w,{sideCar:sn,removeScrollBar:u,shards:d,noRelative:m,noIsolation:g,inert:p,setCallbacks:n,allowPinchZoom:!!h,lockRef:a,gapMode:L}),s?Je.cloneElement(Je.Children.only(l),ot(ot({},v),{ref:b})):Je.createElement(C,ot({},v,{className:i,ref:b}),l))});mr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};mr.classNames={fullWidth:Ma,zeroRight:Da};var Ce=K(require("react"));var vo=K(require("react"));var Md=K(require("react"));var kd;var Dd=function(){if(kd)return kd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function bg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Dd();return t&&e.setAttribute("nonce",t),e}function Sg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function wg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Us=function(){var e=0,t=null;return{add:function(a){e==0&&(t=bg())&&(Sg(t,a),wg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Vs=function(){var e=Us();return function(t,a){Md.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var hr=function(){var e=Vs(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var yg={left:0,top:0,right:0,gap:0},Ws=function(e){return parseInt(e||"",10)||0},Rg=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Ws(a),Ws(o),Ws(r)]},Gs=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return yg;var t=Rg(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var Pg=hr(),Io="data-scroll-locked",kg=function(e,t,a,o){var r=e.left,n=e.top,s=e.right,l=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Fs,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(l,"px ").concat(o,`;
  }
  body[`).concat(Io,`] {
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
  
  .`).concat(Da,` {
    right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(Ma,` {
    margin-right: `).concat(l,"px ").concat(o,`;
  }
  
  .`).concat(Da," .").concat(Da,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ma," .").concat(Ma,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Io,`] {
    `).concat(Bs,": ").concat(l,`px;
  }
`)},Ad=function(){var e=parseInt(document.body.getAttribute(Io)||"0",10);return isFinite(e)?e:0},Dg=function(){vo.useEffect(function(){return document.body.setAttribute(Io,(Ad()+1).toString()),function(){var e=Ad()-1;e<=0?document.body.removeAttribute(Io):document.body.setAttribute(Io,e.toString())}},[])},zs=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Dg();var n=vo.useMemo(function(){return Gs(r)},[r]);return vo.createElement(Pg,{styles:kg(n,!t,r,a?"":"!important")})};var Xs=!1;if(typeof window<"u")try{gr=Object.defineProperty({},"passive",{get:function(){return Xs=!0,!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Xs=!1}var gr,Aa=Xs?{passive:!1}:!1;var Mg=function(e){return e.tagName==="TEXTAREA"},Td=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Mg(e)&&a[t]==="visible")},Ag=function(e){return Td(e,"overflowY")},Tg=function(e){return Td(e,"overflowX")},Ks=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Ed(e,o);if(r){var n=Od(e,o),s=n[1],l=n[2];if(s>l)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},Eg=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Og=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},Ed=function(e,t){return e==="v"?Ag(t):Tg(t)},Od=function(e,t){return e==="v"?Eg(t):Og(t)},Fg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Fd=function(e,t,a,o,r){var n=Fg(e,window.getComputedStyle(t).direction),s=n*o,l=a.target,i=t.contains(l),u=!1,c=s>0,d=0,f=0;do{if(!l)break;var m=Od(e,l),g=m[0],p=m[1],h=m[2],x=p-h-n*g;(g||x)&&Ed(e,l)&&(d+=x,f+=g);var C=l.parentNode;l=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&l!==document.body||i&&(t.contains(l)||t===l));return(c&&(r&&Math.abs(d)<1||!r&&s>d)||!c&&(r&&Math.abs(f)<1||!r&&-s>f))&&(u=!0),u};var ln=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Bd=function(e){return[e.deltaX,e.deltaY]},Nd=function(e){return e&&"current"in e?e.current:e},Bg=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ng=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},_g=0,bo=[];function _d(e){var t=Ce.useRef([]),a=Ce.useRef([0,0]),o=Ce.useRef(),r=Ce.useState(_g++)[0],n=Ce.useState(hr)[0],s=Ce.useRef(e);Ce.useEffect(function(){s.current=e},[e]),Ce.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var p=bd([e.lockRef.current],(e.shards||[]).map(Nd),!0).filter(Boolean);return p.forEach(function(h){return h.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),p.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var l=Ce.useCallback(function(p,h){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!s.current.allowPinchZoom;var x=ln(p),C=a.current,L="deltaX"in p?p.deltaX:C[0]-x[0],I="deltaY"in p?p.deltaY:C[1]-x[1],w,b=p.target,v=Math.abs(L)>Math.abs(I)?"h":"v";if("touches"in p&&v==="h"&&b.type==="range")return!1;var R=window.getSelection(),D=R&&R.anchorNode,T=D?D===b||D.contains(b):!1;if(T)return!1;var k=Ks(v,b);if(!k)return!0;if(k?w=v:(w=v==="v"?"h":"v",k=Ks(v,b)),!k)return!1;if(!o.current&&"changedTouches"in p&&(L||I)&&(o.current=w),!w)return!0;var F=o.current||w;return Fd(F,h,p,F==="h"?L:I,!0)},[]),i=Ce.useCallback(function(p){var h=p;if(!(!bo.length||bo[bo.length-1]!==n)){var x="deltaY"in h?Bd(h):ln(h),C=t.current.filter(function(w){return w.name===h.type&&(w.target===h.target||h.target===w.shadowParent)&&Bg(w.delta,x)})[0];if(C&&C.should){h.cancelable&&h.preventDefault();return}if(!C){var L=(s.current.shards||[]).map(Nd).filter(Boolean).filter(function(w){return w.contains(h.target)}),I=L.length>0?l(h,L[0]):!s.current.noIsolation;I&&h.cancelable&&h.preventDefault()}}},[]),u=Ce.useCallback(function(p,h,x,C){var L={name:p,delta:h,target:x,should:C,shadowParent:Hg(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(I){return I!==L})},1)},[]),c=Ce.useCallback(function(p){a.current=ln(p),o.current=void 0},[]),d=Ce.useCallback(function(p){u(p.type,Bd(p),p.target,l(p,e.lockRef.current))},[]),f=Ce.useCallback(function(p){u(p.type,ln(p),p.target,l(p,e.lockRef.current))},[]);Ce.useEffect(function(){return bo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Aa),document.addEventListener("touchmove",i,Aa),document.addEventListener("touchstart",c,Aa),function(){bo=bo.filter(function(p){return p!==n}),document.removeEventListener("wheel",i,Aa),document.removeEventListener("touchmove",i,Aa),document.removeEventListener("touchstart",c,Aa)}},[]);var m=e.removeScrollBar,g=e.inert;return Ce.createElement(Ce.Fragment,null,g?Ce.createElement(n,{styles:Ng(r)}):null,m?Ce.createElement(zs,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Hg(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Hd=Hs(sn,_d);var qd=un.forwardRef(function(e,t){return un.createElement(mr,ot({},e,{ref:t,sideCar:Hd}))});qd.classNames=mr.classNames;var Ta=qd;var qg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},So=new WeakMap,dn=new WeakMap,cn={},js=0,Ud=function(e){return e&&(e.host||Ud(e.parentNode))},Ug=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Ud(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Vg=function(e,t,a,o){var r=Ug(t,Array.isArray(e)?e:[e]);cn[a]||(cn[a]=new WeakMap);var n=cn[a],s=[],l=new Set,i=new Set(r),u=function(d){!d||l.has(d)||(l.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))c(f);else try{var m=f.getAttribute(o),g=m!==null&&m!=="false",p=(So.get(f)||0)+1,h=(n.get(f)||0)+1;So.set(f,p),n.set(f,h),s.push(f),p===1&&g&&dn.set(f,!0),h===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),l.clear(),js++,function(){s.forEach(function(d){var f=So.get(d)-1,m=n.get(d)-1;So.set(d,f),n.set(d,m),f||(dn.has(d)||d.removeAttribute(o),dn.delete(d)),m||d.removeAttribute(a)}),js--,js||(So=new WeakMap,So=new WeakMap,dn=new WeakMap,cn={})}},wo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||qg(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Vg(o,r,a,"aria-hidden")):function(){return null}};var Te=require("react/jsx-runtime"),Wg=Object.defineProperty,ft=(e,t)=>Wg(e,"name",{value:t,configurable:!0}),Ys="Dialog",[Vd,Jb]=Xe(Ys),[Gg,Nt]=Vd(Ys),Wd=ft(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:s=!0}=e,l=ge.useRef(null),i=ge.useRef(null),{nodes:u,registry:c}=pr(),[d,f]=Bt({prop:o,defaultProp:r??!1,onChange:n,caller:Ys}),[m,g]=ge.useState(0),[p,h]=ge.useState(0);return(0,Te.jsx)(Gg,{scope:t,triggerRef:l,contentRef:i,contentId:ct(),titleId:ct(),descriptionId:ct(),titlePresent:m>0,descriptionPresent:p>0,setTitleCount:g,setDescriptionCount:h,open:d,onOpenChange:f,onOpenToggle:ge.useCallback(()=>f(x=>!x),[f]),modal:s,branchNodes:u,branchRegistry:c,children:a})},"Dialog");var Gd="DialogPortal",[zg,zd]=Vd(Gd,{forceMount:void 0}),Xd=ft(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Nt(Gd,t);return(0,Te.jsx)(zg,{scope:t,forceMount:a,children:ge.Children.map(o,s=>(0,Te.jsx)(jt,{present:a||n.open,children:(0,Te.jsx)(xo,{asChild:!0,container:r,children:s})}))})},"DialogPortal"),$s="DialogOverlay",Zs=ge.forwardRef(ft(function(t,a){let o=zd($s,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=Nt($s,t.__scopeDialog);return s.modal?(0,Te.jsx)(jt,{present:r||s.open,children:(0,Te.jsx)(Kg,{...n,ref:a})}):null},"DialogOverlay")),Xg=Ze("DialogOverlay.RemoveScroll"),Kg=ge.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt($s,o),s=Ss(),l=J(a,s);return(0,Te.jsx)(Ta,{as:Xg,allowPinchZoom:!0,shards:ge.useMemo(()=>[n.contentRef,...n.branchNodes.map(i=>({current:i}))],[n.contentRef,n.branchNodes]),children:(0,Te.jsx)(te.div,{"data-state":tl(n.open),...r,ref:l,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),xr="DialogContent",Js=ge.forwardRef(ft(function(t,a){let o=zd(xr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,s=Nt(xr,t.__scopeDialog);return(0,Te.jsx)(jt,{present:r||s.open,children:s.modal?(0,Te.jsx)(jg,{...n,ref:a}):(0,Te.jsx)($g,{...n,ref:a})})},"DialogContent")),jg=ge.forwardRef(ft(function(t,a){let o=Nt(xr,t.__scopeDialog),r=ge.useRef(null),n=J(a,o.contentRef,r);return ge.useEffect(()=>{let s=r.current;if(s)return wo(s)},[]),(0,Te.jsx)(Kd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:X(t.onCloseAutoFocus,s=>{s.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:X(t.onPointerDownOutside,s=>{let l=s.detail.originalEvent,i=l.button===0&&l.ctrlKey===!0;(l.button===2||i)&&s.preventDefault()}),onFocusOutside:X(t.onFocusOutside,s=>s.preventDefault())})},"DialogContentModal")),$g=ge.forwardRef(ft(function(t,a){let o=Nt(xr,t.__scopeDialog),r=ge.useRef(!1),n=ge.useRef(!1);return(0,Te.jsx)(Kd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{t.onCloseAutoFocus?.(s),s.defaultPrevented||(r.current||o.triggerRef.current?.focus(),s.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:s=>{t.onInteractOutside?.(s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let l=s.target;o.triggerRef.current?.contains(l)&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&n.current&&s.preventDefault()}})},"DialogContentNonModal")),Kd=ge.forwardRef(ft(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:s,"aria-describedby":l,children:i,...u}=t,c=Nt(xr,o);return ua(),(0,Te.jsx)(fr,{registry:c.branchRegistry,children:(0,Te.jsx)(go,{asChild:!0,loop:!0,trapped:r,branches:c.branchNodes,onMountAutoFocus:n,onUnmountAutoFocus:s,children:(0,Te.jsx)(ho,{role:"dialog",id:c.contentId,"aria-labelledby":c.titlePresent?c.titleId:void 0,"aria-describedby":c.descriptionPresent?$d(l,c.descriptionId):l,"data-state":tl(c.open),...u,ref:a,deferPointerDownOutside:!0,onDismiss:()=>c.onOpenChange(!1),children:i})})})},"DialogContentImpl")),Qs=ge.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt("DialogTitle",o),{setTitleCount:s}=n;return se(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,Te.jsx)(te.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),el=ge.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt("DialogDescription",o),{setDescriptionCount:s}=n;return se(()=>(s(l=>l+1),()=>s(l=>l-1)),[s]),(0,Te.jsx)(te.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Yg="DialogClose",jd=ge.forwardRef(ft(function(t,a){let{__scopeDialog:o,...r}=t,n=Nt(Yg,o);return(0,Te.jsx)(te.button,{type:"button",...r,ref:a,onClick:X(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function $d(...e){let t=new Set;for(let a of e)if(typeof a=="string")for(let o of String(a).trim().split(/\s+/))o&&t.add(o);return t.size>0?Array.from(t).join(" "):void 0}ft($d,"concatAriaDescribedby");function tl(e){return e?"open":"closed"}ft(tl,"getState");var Zd=require("react"),al="dsh-kanban",Jd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",cardKeyboardHelp:"\u6309\u56DE\u8F66\u7F16\u8F91\u5361\u7247\uFF1B\u6309\u7A7A\u683C\u6293\u53D6\u5361\u7247\uFF0C\u7528\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u518D\u6309\u7A7A\u683C\u653E\u4E0B\uFF0C\u6216\u6309 Esc \u53D6\u6D88\u3002",columnName:"\u5217\u8868\u540D\u79F0",labelName:"\u6807\u7B7E\u540D\u79F0",labelColor:"\u6807\u7B7E\u989C\u8272",newLabelColor:"\u65B0\u6807\u7B7E\u989C\u8272",deleteLabel:"\u5220\u9664\u6807\u7B7E",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",labelFilter:"\u6309\u6807\u7B7E\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Jg={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",cardKeyboardHelp:"Press Enter to edit. Press Space to pick up the card, use arrow keys to move, then Space to drop or Escape to cancel.",columnName:"List name",labelName:"Label name",labelColor:"Label color",newLabelColor:"New label color",deleteLabel:"Delete label",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",labelFilter:"Filter by label",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ea=null,ol=null;function Qd(e){let t=e.get("locale");if(t!==void 0){Ea=t;try{t.register(al,"zh",Jd),t.register(al,"en",Jg)}catch{}ol=t.bind(al)}}function yo(e){return ol?ol(e):Jd[e]??e}var Qg=e=>Ea&&typeof Ea.subscribe=="function"?Ea.subscribe(e):()=>{},Yd=()=>Ea&&typeof Ea.getSnapshot=="function"?Ea.getSnapshot():null;function Ue(){return(0,Zd.useSyncExternalStore)(Qg,Yd,Yd),yo}var pt=require("react/jsx-runtime"),Ro=Wd;var ex=Xd;var ec=Lr.forwardRef(({className:e,...t},a)=>(0,pt.jsx)(Zs,{ref:a,className:ee("kanban-portal kanban-dialog-overlay",e),...t}));ec.displayName=Zs.displayName;var Oa=Lr.forwardRef(({className:e,children:t,...a},o)=>{let r=Ue();return(0,pt.jsxs)(ex,{children:[(0,pt.jsx)(ec,{}),(0,pt.jsxs)(Js,{ref:o,className:ee("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,pt.jsxs)(jd,{className:"kanban-dialog-close",children:[(0,pt.jsx)(ir,{className:"kanban-dialog-close-icon"}),(0,pt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Oa.displayName=Js.displayName;var Fa=({className:e,...t})=>(0,pt.jsx)("div",{className:ee("kanban-dialog-header",e),...t});Fa.displayName="DialogHeader";var Cr=({className:e,...t})=>(0,pt.jsx)("div",{className:ee("kanban-dialog-footer",e),...t});Cr.displayName="DialogFooter";var Ba=Lr.forwardRef(({className:e,...t},a)=>(0,pt.jsx)(Qs,{ref:a,className:ee("kanban-dialog-title",e),...t}));Ba.displayName=Qs.displayName;var Ir=Lr.forwardRef(({className:e,...t},a)=>(0,pt.jsx)(el,{ref:a,className:ee("kanban-dialog-description",e),...t}));Ir.displayName=el.displayName;var kr=K(require("react"),1);var At=K(require("react"),1);var Y=K(require("react"),1);var Rt=K(require("react"),1);var pn=require("react/jsx-runtime"),Be=K(require("react"),1);var da=require("react/jsx-runtime");var tx=Object.defineProperty,Fe=(e,t)=>tx(e,"name",{value:t,configurable:!0});function Na(e){let t=e+"CollectionProvider",[a,o]=Xe(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),s=Fe(p=>{let{scope:h,children:x}=p,C=Rt.useRef(null),L=Rt.useRef(new Map).current;return(0,pn.jsx)(r,{scope:h,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");s.displayName=t;let l=e+"CollectionSlot",i=Ze(l),u=Rt.forwardRef((p,h)=>{let{scope:x,children:C}=p,L=n(l,x),I=J(h,L.collectionRef);return(0,pn.jsx)(i,{ref:I,children:C})});u.displayName=l;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Ze(c),m=Rt.forwardRef((p,h)=>{let{scope:x,children:C,...L}=p,I=Rt.useRef(null),w=J(h,I),b=n(c,x);return Rt.useEffect(()=>(b.itemMap.set(I,{ref:I,...L}),()=>{b.itemMap.delete(I)})),(0,pn.jsx)(f,{[d]:"",ref:w,children:C})});m.displayName=c;function g(p){let h=n(e+"CollectionConsumer",p);return Rt.useCallback(()=>{let C=h.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(h.itemMap.values()).sort((b,v)=>L.indexOf(b.ref.current)-L.indexOf(v.ref.current))},[h.collectionRef,h.itemMap])}return Fe(g,"useCollection"),[{Provider:s,Slot:u,ItemSlot:m},g,o]}Fe(Na,"createCollection");var tc=new WeakMap,Re,mt,fn=(mt=class extends Map{constructor(a){super(a);ui(this,Re);Zn(this,Re,[...super.keys()]),tc.set(this,!0)}set(a,o){return tc.get(this)&&!this.has(a)&&Ge(this,Re).push(a),super.set(a,o),this}insert(a,o,r){let n=this.has(o),s=n?this.size:this.size+1,l=rl(a),i=l>=0?Math.min(l,s-1):Math.max(s+l,0);if(n?Ge(this,Re).indexOf(o)===i:i===this.size)return this.set(o,r),this;let u=Ge(this,Re).filter(d=>d!==o);u.splice(i,0,o);let c=u.map(d=>[d,d===o?r:this.get(d)]);this.clear();for(let[d,f]of c)this.set(d,f);return this}with(a,o,r){let n=new mt(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,Re).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,Re).indexOf(a);if(n===-1)return this;let s=Ge(this,Re).indexOf(o),l=s!==-1&&s<n?n-1:n;return this.insert(l,o,r)}after(a){let o=Ge(this,Re).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,Re).indexOf(a);if(n===-1)return this;let s=Ge(this,Re).indexOf(o),l=s!==-1&&s<=n?n:n+1;return this.insert(l,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Zn(this,Re,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,Re).splice(Ge(this,Re).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=mn(Ge(this,Re),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=mn(Ge(this,Re),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,Re).indexOf(a)}keyAt(a){return mn(Ge(this,Re),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let s of this)Reflect.apply(a,o,[s,n,this])&&r.push(s),n++;return new mt(r)}map(a,o){let r=[],n=0;for(let s of this)r.push([s[0],Reflect.apply(a,o,[s,n,this])]),n++;return new mt(r)}reduce(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let s=0,l=r;for(let i of this)s===0&&!n?l=i:l=Reflect.apply(o,this,[l,i,s,this]),s++;return l}reduceRight(...a){let[o,r]=a,n=a.length>1;if(!n&&this.size===0)throw new TypeError("Reduce of empty OrderedDict with no initial value");let s=r;for(let l=this.size-1;l>=0;l--){let i=this.entryAt(l);l===this.size-1&&!n?s=i:s=Reflect.apply(o,this,[s,i,l,this])}return s}sort(a){if(typeof a!="function")throw new TypeError("OrderedDict.sort requires a compare function");let o=[...this.entries()].sort(a);this.clear();for(let[r,n]of o)this.set(r,n);return this}toSorted(a){if(typeof a!="function")throw new TypeError("OrderedDict.toSorted requires a compare function");let o=[...this.entries()].sort(a);return new mt(o)}toReversed(){let a=new mt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new mt(o)}slice(a,o){let r=new mt;for(let n of Ge(this,Re).slice(a,o))r.set(n,this.get(n));return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Re=new WeakMap,Fe(mt,"OrderedDict"),mt);function mn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=ac(e,t);return a===-1?void 0:e[a]}Fe(mn,"at");function ac(e,t){let a=e.length,o=rl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Fe(ac,"toSafeIndex");function rl(e){return e!==e||e===0?0:Math.trunc(e)}Fe(rl,"toSafeInteger");function ax(e){let t=e+"CollectionProvider",[a,o]=Xe(t),[r,n]=a(t);r.displayName=e+"CollectionStableContextProvider";let[s,l]=a(t);s.displayName=e+"CollectionStatefulContextProvider";let i=Fe(({state:b,...v})=>b?(0,da.jsx)(c,{...v,state:b}):(0,da.jsx)(u,{...v}),"CollectionProvider");i.displayName=t;let u=Fe(b=>{let v=C();return(0,da.jsx)(c,{...b,state:v})},"CollectionInit");u.displayName=e+"CollectionInit";let c=Fe(b=>{let{scope:v,children:R,state:D}=b,T=Be.useRef(null),[k,F]=Be.useState(null),_=J(T,F),[B,$]=D,W=Be.useRef(new fn),G=Be.useCallback(()=>{let H=W.current;return nc(H)||H.sort(hn),H},[]);return Be.useEffect(()=>{if(!k)return;let H=sc(()=>{$(z=>{let U=z.toSorted(hn);return U.some(([Z],Q)=>z.keyAt(Q)!==Z)?U:z})});return H.observe(k,{childList:!0,subtree:!0}),()=>{H.disconnect()}},[k,$]),(0,da.jsx)(r,{scope:v,collectionElementRef:_,collectionElementRefObject:T,getCollection:G,setCollection:$,registryRef:W,children:(0,da.jsx)(s,{scope:v,collectionElement:k,collection:B,children:R})})},"CollectionProviderImpl");c.displayName=e+"CollectionProviderImpl";let d=e+"CollectionSlot",f=Ze(d),m=Be.forwardRef((b,v)=>{let{scope:R,children:D}=b,T=n(d,R),k=J(v,T.collectionElementRef);return(0,da.jsx)(f,{ref:k,children:D})});m.displayName=d;let g=e+"CollectionItemSlot",p="data-radix-collection-item",h=Ze(g),x=Be.forwardRef((b,v)=>{let{scope:R,children:D,...T}=b,k=Be.useRef(null),F=n(g,R),{setCollection:_,registryRef:B}=F,$=Be.useRef(T);oc($.current,T)||($.current=T);let W=$.current,G=Be.useCallback(U=>{let ae=B.current;U?ae.set(U,{...$.current,element:U}):k.current&&ae.delete(k.current)},[B]),H=J(v,G,k);se(()=>{let U=k.current,ae=B.current;U&&ae.has(U)&&ae.set(U,{...W,element:U})},[W,B]);let z=Be.useRef(null);return Be.useEffect(()=>{let U=k.current,ae=z.current;(ae?.element??null)===U&&(!U||ae?.itemData===W)||(z.current=U?{element:U,itemData:W}:null,_(Z=>{let Q=new fn(Z);return ae&&ae.element!==U&&Q.delete(ae.element),U&&Q.set(U,{...W,element:U}),Q.sort(hn)}))}),Be.useEffect(()=>()=>{let U=z.current;z.current=null,U&&_(ae=>{if(!ae.has(U.element))return ae;let Z=new fn(ae);return Z.delete(U.element),Z})},[_]),(0,da.jsx)(h,{[p]:"",ref:H,children:D})});x.displayName=g;function C(){return Be.useState(new fn)}Fe(C,"useInitCollection");function L(b){let{collection:v}=l(e+"CollectionConsumer",b);return v}Fe(L,"useCollection");function I(b){let{getCollection:v}=n(e+"CollectionConsumer",b);return v}return Fe(I,"useGetCollection"),[{Provider:i,Slot:m,ItemSlot:x},{createCollectionScope:o,useCollection:L,useGetCollection:I,useInitCollection:C}]}Fe(ax,"createCollection");function oc(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Fe(oc,"shallowEqual");function rc(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Fe(rc,"isElementPreceding");function nc(e){let t;for(let a of e.keys()){if(t){let o=t.compareDocumentPosition(a);if(!(o&Node.DOCUMENT_POSITION_DISCONNECTED)&&o&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=a}return!0}Fe(nc,"isInDocumentOrder");function hn(e,t){return!e[1].element||!t[1].element?0:rc(e[1].element,t[1].element)?-1:1}Fe(hn,"sortByDocumentPosition");function sc(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Fe(sc,"getChildListObserver");var gn=K(require("react"),1),nx=require("react/jsx-runtime"),ox=Object.defineProperty,rx=(e,t)=>ox(e,"name",{value:t,configurable:!0}),sx={LTR:"ltr",RTL:"rtl"},lx=gn.createContext(void 0);function _a(e){let t=gn.useContext(lx);return e||t||sx.LTR}rx(_a,"useDirection");var Qe=K(require("react"),1);var uc=["top","right","bottom","left"];var _t=Math.min,Pt=Math.max,br=Math.round,Sr=Math.floor,Ht=e=>({x:e,y:e}),ix={left:"right",right:"left",bottom:"top",top:"bottom"};function nl(e,t,a){return Pt(e,_t(t,a))}function qt(e,t){return typeof e=="function"?e(t):e}function $t(e){return e.split("-")[0]}function Ha(e){return e.split("-")[1]}function Ln(e){return e==="x"?"y":"x"}function Cn(e){return e==="y"?"height":"width"}function kt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function In(e){return Ln(kt(e))}function dc(e,t,a){a===void 0&&(a=!1);let o=Ha(e),r=In(e),n=Cn(r),s=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=vr(s)),[s,vr(s)]}function cc(e){let t=vr(e);return[xn(e),t,xn(t)]}function xn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var lc=["left","right"],ic=["right","left"],ux=["top","bottom"],dx=["bottom","top"];function cx(e,t,a){switch(e){case"top":case"bottom":return a?t?ic:lc:t?lc:ic;case"left":case"right":return t?ux:dx;default:return[]}}function fc(e,t,a,o){let r=Ha(e),n=cx($t(e),a==="start",o);return r&&(n=n.map(s=>s+"-"+r),t&&(n=n.concat(n.map(xn)))),n}function vr(e){let t=$t(e);return ix[t]+e.slice(t.length)}function fx(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function sl(e){return typeof e!="number"?fx(e):{top:e,right:e,bottom:e,left:e}}function qa(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function pc(e,t,a){let{reference:o,floating:r}=e,n=kt(t),s=In(t),l=Cn(s),i=$t(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[l]/2-r[l]/2,m;switch(i){case"top":m={x:c,y:o.y-r.height};break;case"bottom":m={x:c,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}let g=Ha(t);return g&&(m[s]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),m}async function gc(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:s,elements:l,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=qt(t,e),g=sl(m),h=l[f?d==="floating"?"reference":"floating":d],x=qa(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(h)))==null||a?h:h.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),I=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},w=qa(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-w.top+g.top)/I.y,bottom:(w.bottom-x.bottom+g.bottom)/I.y,left:(x.left-w.left+g.left)/I.x,right:(w.right-x.right+g.right)/I.x}}var px=50,xc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=a,l=s.detectOverflow?s:{...s,detectOverflow:gc},i=await(s.isRTL==null?void 0:s.isRTL(t)),u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=pc(u,o,i),f=o,m=0,g={};for(let p=0;p<n.length;p++){let h=n[p];if(!h)continue;let{name:x,fn:C}=h,{x:L,y:I,data:w,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:l,elements:{reference:e,floating:t}});c=L??c,d=I??d,g[x]={...g[x],...w},b&&m<px&&(m++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=pc(u,f,i)),p=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},Lc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:s,elements:l,middlewareData:i}=t,{element:u,padding:c=0}=qt(e,t)||{};if(u==null)return{};let d=sl(c),f={x:a,y:o},m=In(r),g=Cn(m),p=await s.getDimensions(u),h=m==="y",x=h?"top":"left",C=h?"bottom":"right",L=h?"clientHeight":"clientWidth",I=n.reference[g]+n.reference[m]-f[m]-n.floating[g],w=f[m]-n.reference[m],b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u)),v=b?b[L]:0;(!v||!await(s.isElement==null?void 0:s.isElement(b)))&&(v=l.floating[L]||n.floating[g]);let R=I/2-w/2,D=v/2-p[g]/2-1,T=_t(d[x],D),k=_t(d[C],D),F=v-p[g]-k,_=v/2-p[g]/2+R,B=nl(T,_,F),$=!i.arrow&&Ha(r)!=null&&_!==B&&n.reference[g]/2-(_<T?T:k)-p[g]/2<0,W=$?_<T?_-T:_-F:0;return{[m]:f[m]+W,data:{[m]:B,centerOffset:_-B-W,...$&&{alignmentOffset:W}},reset:$}}});var Cc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:s,initialPlacement:l,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...h}=qt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=$t(r),C=kt(l),L=$t(l)===l,I=await(i.isRTL==null?void 0:i.isRTL(u.floating)),w=f||(L||!p?[vr(l)]:cc(l)),b=g!=="none";!f&&b&&w.push(...fc(l,p,g,I));let v=[l,...w],R=await i.detectOverflow(t,h),D=[],T=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&D.push(R[x]),d){let B=dc(r,s,I);D.push(R[B[0]],R[B[1]])}if(T=[...T,{placement:r,overflows:D}],!D.every(B=>B<=0)){var k,F;let B=(((k=n.flip)==null?void 0:k.index)||0)+1,$=v[B];if($&&(!(d==="alignment"?C!==kt($):!1)||T.every(H=>kt(H.placement)===C?H.overflows[0]>0:!0)))return{data:{index:B,overflows:T},reset:{placement:$}};let W=(F=T.filter(G=>G.overflows[0]<=0).sort((G,H)=>G.overflows[1]-H.overflows[1])[0])==null?void 0:F.placement;if(!W)switch(m){case"bestFit":{var _;let G=(_=T.filter(H=>{if(b){let z=kt(H.placement);return z===C||z==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(z=>z>0).reduce((z,U)=>z+U,0)]).sort((H,z)=>H[1]-z[1])[0])==null?void 0:_[0];G&&(W=G);break}case"initialPlacement":W=l;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function mc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function hc(e){return uc.some(t=>e[t]>=0)}var Ic=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=qt(e,t);switch(r){case"referenceHidden":{let s=await o.detectOverflow(t,{...n,elementContext:"reference"}),l=mc(s,a.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:hc(l)}}}case"escaped":{let s=await o.detectOverflow(t,{...n,altBoundary:!0}),l=mc(s,a.floating);return{data:{escapedOffsets:l,escaped:hc(l)}}}default:return{}}}}};var vc=new Set(["left","top"]);async function mx(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=$t(a),l=Ha(a),i=kt(a)==="y",u=vc.has(s)?-1:1,c=n&&i?-1:1,d=qt(t,e),{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?g*-1:g),i?{x:m*c,y:f*u}:{x:f*u,y:m*c}}var bc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:s,middlewareData:l}=t,i=await mx(t,e);return s===((a=l.offset)==null?void 0:a.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:s}}}}},Sc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:i={fn:C=>{let{x:L,y:I}=C;return{x:L,y:I}}},...u}=qt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=kt(r),m=Ln(f),g=c[m],p=c[f],h=(C,L)=>nl(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);s&&(g=h(m,g)),l&&(p=h(f,p));let x=i.fn({...t,[m]:g,[f]:p});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[m]:s,[f]:l}}}}}},wc=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:s,rects:l,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=qt(e,t),f={x:r,y:n},m=kt(s),g=Ln(m),p=f[g],h=f[m],x=qt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let w=g==="y"?"height":"width",b=l.reference[g]-l.floating[w]+C.mainAxis,v=l.reference[g]+l.reference[w]-C.mainAxis;p<b?p=b:p>v&&(p=v)}if(d){var L,I;let w=g==="y"?"width":"height",b=vc.has($t(s)),v=l.reference[m]-l.floating[w]+(b&&((L=i.offset)==null?void 0:L[m])||0)+(b?0:C.crossAxis),R=l.reference[m]+l.reference[w]+(b?0:((I=i.offset)==null?void 0:I[m])||0)-(b?C.crossAxis:0);h<v?h=v:h>R&&(h=R)}return{[g]:p,[m]:h}}}},yc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:s=()=>{},...l}=qt(e,t),i=await r.detectOverflow(t,l),u=$t(a),c=Ha(a),d=kt(a)==="y",{width:f,height:m}=o.floating,g,p;u==="top"||u==="bottom"?(g=u,p=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(p=u,g=c==="end"?"top":"bottom");let h=m-i.top-i.bottom,x=f-i.left-i.right,C=_t(m-i[g],h),L=_t(f-i[p],x),I=t.middlewareData.shift,w=!I,b=C,v=L;I!=null&&I.enabled.x&&(v=x),I!=null&&I.enabled.y&&(b=h),w&&!c&&(d?v=f-2*Pt(i.left,i.right):b=m-2*Pt(i.top,i.bottom)),await s({...t,availableWidth:v,availableHeight:b});let R=await r.getDimensions(n.floating);return f!==R.width||m!==R.height?{reset:{rects:!0}}:{}}}};function vn(){return typeof window<"u"}function Wa(e){return Pc(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ut(e){var t;return(t=(Pc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Pc(e){return vn()?e instanceof Node||e instanceof at(e).Node:!1}function Dt(e){return vn()?e instanceof Element||e instanceof at(e).Element:!1}function Yt(e){return vn()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function Rc(e){return!vn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}function wr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Mt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function kc(e){return/^(table|td|th)$/.test(Wa(e))}function yr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var hx=/transform|translate|scale|rotate|perspective|filter/,gx=/paint|layout|strict|content/,Ua=e=>!!e&&e!=="none",ll;function bn(e){let t=Dt(e)?Mt(e):e;return Ua(t.transform)||Ua(t.translate)||Ua(t.scale)||Ua(t.rotate)||Ua(t.perspective)||!Sn()&&(Ua(t.backdropFilter)||Ua(t.filter))||hx.test(t.willChange||"")||gx.test(t.contain||"")}function Dc(e){let t=ca(e);for(;Yt(t)&&!Po(t);){if(bn(t))return t;if(yr(t))return null;t=ca(t)}return null}function Sn(){return ll==null&&(ll=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),ll}function Po(e){return/^(html|body|#document)$/.test(Wa(e))}function Mt(e){return at(e).getComputedStyle(e)}function Rr(e){return Dt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ca(e){if(Wa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Rc(e)&&e.host||Ut(e);return Rc(t)?t.host:t}function Mc(e){let t=ca(e);return Po(t)?(e.ownerDocument||e).body:Yt(t)&&wr(t)?t:Mc(t)}function Va(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=Mc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),s=at(r);if(n){let l=wn(s);return t.concat(s,s.visualViewport||[],wr(r)?r:[],l&&a?Va(l):[])}else return t.concat(r,Va(r,[],a))}function wn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ec(e){let t=Mt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Yt(e),n=r?e.offsetWidth:a,s=r?e.offsetHeight:o,l=br(a)!==n||br(o)!==s;return l&&(a=n,o=s),{width:a,height:o,$:l}}function ul(e){return Dt(e)?e:e.contextElement}function ko(e){let t=ul(e);if(!Yt(t))return Ht(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=Ec(t),s=(n?br(a.width):a.width)/o,l=(n?br(a.height):a.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}var xx=Ht(0);function Oc(e){let t=at(e);return!Sn()||!t.visualViewport?xx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Lx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===at(e)}function Ga(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=ul(e),s=Ht(1);t&&(o?Dt(o)&&(s=ko(o)):s=ko(e));let l=Lx(n,a,o)?Oc(n):Ht(0),i=(r.left+l.x)/s.x,u=(r.top+l.y)/s.y,c=r.width/s.x,d=r.height/s.y;if(n&&o){let f=at(n),m=Dt(o)?at(o):o,g=f,p=wn(g);for(;p&&m!==g;){let h=ko(p),x=p.getBoundingClientRect(),C=Mt(p),L=x.left+(p.clientLeft+parseFloat(C.paddingLeft))*h.x,I=x.top+(p.clientTop+parseFloat(C.paddingTop))*h.y;i*=h.x,u*=h.y,c*=h.x,d*=h.y,i+=L,u+=I,g=at(p),p=wn(g)}}return qa({width:c,height:d,x:i,y:u})}function yn(e,t){let a=Rr(e).scrollLeft;return t?t.left+a:Ga(Ut(e)).left+a}function Fc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-yn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Cx(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",s=Ut(o),l=t?yr(t.floating):!1;if(o===s||l&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ht(1),c=Ht(0),d=Yt(o);if((d||!n)&&((Wa(o)!=="body"||wr(s))&&(i=Rr(o)),d)){let m=Ga(o);u=ko(o),c.x=m.x+o.clientLeft,c.y=m.y+o.clientTop}let f=s&&!d&&!n?Fc(s,i):Ht(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function Ix(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function vx(e){let t=Rr(e),a=e.ownerDocument.body,o=Pt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Pt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+yn(e),s=-t.scrollTop;return Mt(a).direction==="rtl"&&(n+=Pt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:s}}var bx=25;function Sx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=at(e),n=Ut(e),s=r.visualViewport,l=n.clientWidth,i=n.clientHeight,u=0,c=0;if(s){let f=!Sn()||t==="fixed";o?f||(u=-s.offsetLeft,c=-s.offsetTop):(l=s.width,i=s.height,f&&(u=s.offsetLeft,c=s.offsetTop))}if(yn(n)<=0){let f=n.ownerDocument,m=f.body,g=getComputedStyle(m),p=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,h=Math.abs(n.clientWidth-m.clientWidth-p),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?h/2:h;x<=bx&&(l-=x)}return{width:l,height:i,x:u,y:c}}function wx(e,t){let a=Ga(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=ko(e),s=e.clientWidth*n.x,l=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:s,height:l,x:i,y:u}}function Ac(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Sx(e,a,t);else if(t==="document")o=vx(Ut(e));else if(Dt(t))o=wx(t,a);else{let r=Oc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return qa(o)}function yx(e,t){let a=t.get(e);if(a)return a;let o=Va(e,[],!1).filter(l=>Dt(l)&&Wa(l)!=="body"),r=null,n=Mt(e).position==="fixed",s=n?ca(e):e;for(;Dt(s)&&!Po(s);){let l=Mt(s),i=bn(s),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&l.position==="static")?o=o.filter(d=>d!==s):r=l,s=ca(s)}return t.set(e,o),o}function Rx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,s=[...a==="clippingAncestors"?yr(t)?[]:yx(t,this._c):[].concat(a),o],l=Ac(t,s[0],r),i=l.top,u=l.right,c=l.bottom,d=l.left;for(let f=1;f<s.length;f++){let m=Ac(t,s[f],r);i=Pt(m.top,i),u=_t(m.right,u),c=_t(m.bottom,c),d=Pt(m.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function Px(e){let{width:t,height:a}=Ec(e);return{width:t,height:a}}function kx(e,t,a){let o=Yt(t),r=Ut(t),n=a==="fixed",s=Ga(e,!0,n,t),l={scrollLeft:0,scrollTop:0},i=Ht(0);if((o||!n)&&((Wa(t)!=="body"||wr(r))&&(l=Rr(t)),o)){let f=Ga(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=yn(r));let u=r&&!o&&!n?Fc(r,l):Ht(0),c=s.left+l.scrollLeft-i.x-u.x,d=s.top+l.scrollTop-i.y-u.y;return{x:c,y:d,width:s.width,height:s.height}}function il(e){return Mt(e).position==="static"}function Tc(e,t){if(!Yt(e)||Mt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Ut(e)===a&&(a=a.ownerDocument.body),a}function Bc(e,t){let a=at(e);if(yr(e))return a;if(!Yt(e)){let r=ca(e);for(;r&&!Po(r);){if(Dt(r)&&!il(r))return r;r=ca(r)}return a}let o=Tc(e,t);for(;o&&kc(o)&&il(o);)o=Tc(o,t);return o&&Po(o)&&il(o)&&!bn(o)?a:o||Dc(e)||a}var Dx=async function(e){let t=this.getOffsetParent||Bc,a=this.getDimensions,o=await a(e.floating);return{reference:kx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Mx(e){return Mt(e).direction==="rtl"}var Nc={convertOffsetParentRelativeRectToViewportRelativeRect:Cx,getDocumentElement:Ut,getClippingRect:Rx,getOffsetParent:Bc,getElementRects:Dx,getClientRects:Ix,getDimensions:Px,getScale:ko,isElement:Dt,isRTL:Mx};function _c(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ax(e,t,a){let o=null,r,n=Ut(e);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),s();let f=e.getBoundingClientRect(),{left:m,top:g,width:p,height:h}=f;if(c||t(),!p||!h)return;let x=Sr(g),C=Sr(n.clientWidth-(m+p)),L=Sr(n.clientHeight-(g+h)),I=Sr(m),b={rootMargin:-x+"px "+-C+"px "+-L+"px "+-I+"px",threshold:Pt(0,_t(1,d))||1},v=!0;function R(D){let T=D[0].intersectionRatio;if(!_c(f,e.getBoundingClientRect()))return l();if(T!==d){if(!v)return l();T?l(!1,T):r=setTimeout(()=>{l(!1,1e-7)},1e3)}v=!1}try{o=new IntersectionObserver(R,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(e)}let i=at(e),u=()=>l(a);return i.addEventListener("resize",u),l(!0),()=>{i.removeEventListener("resize",u),s()}}function dl(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=ul(e),c=r||n?[...u?Va(u):[],...t?Va(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&l?Ax(u,a,n):null,f=-1,m=null;s&&(m=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&m&&t&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=m)==null||L.observe(t)})),a()}),u&&!i&&m.observe(u),t&&m.observe(t));let g,p=i?Ga(e):null;i&&h();function h(){let x=Ga(e);p&&!_c(p,x)&&a(),p=x,g=requestAnimationFrame(h)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=m)==null||x.disconnect(),m=null,i&&cancelAnimationFrame(g)}}var Hc=bc;var qc=Sc,Uc=Cc,Vc=yc,Wc=Ic,cl=Lc;var Gc=wc,fl=(e,t,a)=>{let o=new Map,r=a??{},n={...Nc,...r.platform,_c:o};return xc(e,t,{...r,platform:n})};var Ee=K(require("react"),1),Xc=require("react"),Kc=K(require("react-dom"),1),Tx=typeof document<"u",Ex=function(){},Rn=Tx?Xc.useLayoutEffect:Ex;function Pn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Pn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Pn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function jc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function zc(e,t){let a=jc(e);return Math.round(t*a)/a}function pl(e){let t=Ee.useRef(e);return Rn(()=>{t.current=e}),t}function $c(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:s}={},transform:l=!0,whileElementsMounted:i,open:u}=e,[c,d]=Ee.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,m]=Ee.useState(o);Pn(f,o)||m(o);let[g,p]=Ee.useState(null),[h,x]=Ee.useState(null),C=Ee.useCallback(H=>{H!==b.current&&(b.current=H,p(H))},[]),L=Ee.useCallback(H=>{H!==v.current&&(v.current=H,x(H))},[]),I=n||g,w=s||h,b=Ee.useRef(null),v=Ee.useRef(null),R=Ee.useRef(c),D=i!=null,T=pl(i),k=pl(r),F=pl(u),_=Ee.useCallback(()=>{if(!b.current||!v.current)return;let H={placement:t,strategy:a,middleware:f};k.current&&(H.platform=k.current),fl(b.current,v.current,H).then(z=>{let U={...z,isPositioned:F.current!==!1};B.current&&!Pn(R.current,U)&&(R.current=U,Kc.flushSync(()=>{d(U)}))})},[f,t,a,k,F]);Rn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(H=>({...H,isPositioned:!1})))},[u]);let B=Ee.useRef(!1);Rn(()=>(B.current=!0,()=>{B.current=!1}),[]),Rn(()=>{if(I&&(b.current=I),w&&(v.current=w),I&&w){if(T.current)return T.current(I,w,_);_()}},[I,w,_,T,D]);let $=Ee.useMemo(()=>({reference:b,floating:v,setReference:C,setFloating:L}),[C,L]),W=Ee.useMemo(()=>({reference:I,floating:w}),[I,w]),G=Ee.useMemo(()=>{let H={position:a,left:0,top:0};if(!W.floating)return H;let z=zc(W.floating,c.x),U=zc(W.floating,c.y);return l?{...H,transform:"translate("+z+"px, "+U+"px)",...jc(W.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:z,top:U}},[a,l,W.floating,c.x,c.y]);return Ee.useMemo(()=>({...c,update:_,refs:$,elements:W,floatingStyles:G}),[c,_,$,W,G])}var Ox=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?cl({element:o.current,padding:r}).fn(a):{}:o?cl({element:o,padding:r}).fn(a):{}}}},Yc=(e,t)=>{let a=Hc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Zc=(e,t)=>{let a=qc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Jc=(e,t)=>({fn:Gc(e).fn,options:[e,t]}),Qc=(e,t)=>{let a=Uc(e);return{name:a.name,fn:a.fn,options:[e,t]}},ef=(e,t)=>{let a=Vc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var tf=(e,t)=>{let a=Wc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var af=(e,t)=>{let a=Ox(e);return{name:a.name,fn:a.fn,options:[e,t]}};var of=K(require("react"),1);var Fx=Object.defineProperty,Bx=(e,t)=>Fx(e,"name",{value:t,configurable:!0});function ml(e){let[t,a]=of.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=0,r=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;let s=n[0];window.cancelAnimationFrame(o),o=window.requestAnimationFrame(()=>{let l,i;if("borderBoxSize"in s){let u=s.borderBoxSize,c=Array.isArray(u)?u[0]:u;l=c.inlineSize,i=c.blockSize}else l=e.offsetWidth,i=e.offsetHeight;a({width:l,height:i})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}else a(void 0)},[e]),t}Bx(ml,"useSize");var Do=require("react/jsx-runtime"),Nx=Object.defineProperty,fa=(e,t)=>Nx(e,"name",{value:t,configurable:!0});var rf={Partial:"partial",Always:"always"},nf={Optimized:"optimized",Always:"always"},sf="Popper",[lf,Mo]=Xe(sf),[_x,uf]=lf(sf),kn=fa(e=>{let{__scopePopper:t,children:a}=e,[o,r]=Qe.useState(null),[n,s]=Qe.useState(void 0);return(0,Do.jsx)(_x,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:s,children:a})},"Popper"),Hx="PopperAnchor",Dn=Qe.forwardRef(fa(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,s=uf(Hx,o),l=Qe.useRef(null),i=s.onAnchorChange,u=Qe.useCallback(p=>{l.current=p,p&&i(p)},[i]),c=J(a,u),d=Qe.useRef(null);Qe.useEffect(()=>{if(!r)return;let p=d.current;d.current=r.current,p!==d.current&&i(d.current)});let f=s.placementState&&An(s.placementState),m=f?.[0],g=f?.[1];return r?null:(0,Do.jsx)(te.div,{"data-radix-popper-side":m,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),df="PopperContent",[qx,VS]=lf(df),Mn=Qe.forwardRef(fa(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:s="center",alignOffset:l=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f=rf.Partial,hideWhenDetached:m=!1,updatePositionStrategy:g=nf.Optimized,onPlaced:p,...h}=t,x=uf(df,o),[C,L]=Qe.useState(null),I=J(a,L),[w,b]=Qe.useState(null),v=ml(w),R=v?.width??0,D=v?.height??0,T=r+(s!=="center"?"-"+s:""),k=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},F=Array.isArray(c)?c:[c],_=F.length>0,B={padding:k,boundary:F.filter(cf),altBoundary:_},{refs:$,floatingStyles:W,placement:G,isPositioned:H,middlewareData:z}=$c({strategy:"fixed",placement:T,whileElementsMounted:fa((...fe)=>dl(...fe,{animationFrame:g===nf.Always}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Yc({mainAxis:n+D,alignmentAxis:l}),u&&Zc({mainAxis:!0,crossAxis:!1,...f===rf.Partial?{limiter:Jc()}:{},...B}),u&&Qc({...B}),ef({...B,apply:fa(({elements:fe,rects:O,availableWidth:ue,availableHeight:oe})=>{let{width:S,height:P}=O.reference,M=fe.floating.style;M.setProperty("--radix-popper-available-width",`${ue}px`),M.setProperty("--radix-popper-available-height",`${oe}px`),M.setProperty("--radix-popper-anchor-width",`${S}px`),M.setProperty("--radix-popper-anchor-height",`${P}px`)},"apply")}),w&&af({element:w,padding:i}),Ux({arrowWidth:R,arrowHeight:D}),m&&tf(_?{strategy:"referenceHidden",...B}:{strategy:"referenceHidden",padding:B.padding,altBoundary:B.altBoundary})]}),U=x.setPlacementState;se(()=>(U(G),()=>{U(void 0)}),[G,U]);let[ae,Z]=An(G),Q=He(p);se(()=>{H&&Q?.()},[H,Q]);let De=z.arrow?.x,Le=z.arrow?.y,E=z.arrow?.centerOffset!==0,[de,ce]=Qe.useState();return se(()=>{C&&ce(window.getComputedStyle(C).zIndex)},[C]),(0,Do.jsx)("div",{ref:$.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:H?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Do.jsx)(qx,{scope:o,placedSide:ae,placedAlign:Z,onArrowChange:b,arrowX:De,arrowY:Le,shouldHideArrow:E,children:(0,Do.jsx)(te.div,{"data-side":ae,"data-align":Z,...h,ref:I,style:{...h.style,animation:H?h.style?.animation:"none"}})})})},"PopperContent"));function cf(e){return e!==null}fa(cf,"isNotNull");var Ux=fa(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,s=r.arrow?.centerOffset!==0,l=s?0:e.arrowWidth,i=s?0:e.arrowHeight,[u,c]=An(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+l/2,m=(r.arrow?.y??0)+i/2,g="",p="";return u==="bottom"?(g=s?d:`${f}px`,p=`${-i}px`):u==="top"?(g=s?d:`${f}px`,p=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,p=s?d:`${m}px`):u==="left"&&(g=`${o.floating.width+i}px`,p=s?d:`${m}px`),{data:{x:g,y:p}}}}),"transformOrigin");function An(e){let[t,a="center"]=e.split("-");return[t,a]}fa(An,"getSideAndAlignFromPlacement");var Ve=K(require("react"),1);var Wx=K(require("react"),1),Tn=K(require("react"),1),Vx=Object.defineProperty,gl=(e,t)=>Vx(e,"name",{value:t,configurable:!0}),hl=!1;function pf(){let[e,t]=Tn.useState(hl);return Tn.useEffect(()=>{hl||(hl=!0,t(!0))},[]),e}gl(pf,"useIsHydrated");var mf=Wx[" useSyncExternalStore ".trim().toString()];function hf(){return()=>{}}gl(hf,"subscribe");function gf(){return mf(hf,()=>!0,()=>!1)}gl(gf,"useIsHydratedModern");var xf=typeof mf=="function"?gf:pf;var pa=require("react/jsx-runtime"),Gx=Object.defineProperty,za=(e,t)=>Gx(e,"name",{value:t,configurable:!0}),xl="rovingFocusGroup.onEntryFocus",zx={bubbles:!1,cancelable:!0},En="RovingFocusGroup",[Ll,Cf,Xx]=Na(En),[Kx,Cl]=Xe(En,[Xx]),Lf={Vertical:"vertical",Horizontal:"horizontal"},jx={LTR:"ltr",RTL:"rtl"},[$x,Yx]=Kx(En),If=Ve.forwardRef(za(function(t,a){return(0,pa.jsx)(Ll.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,pa.jsx)(Ll.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,pa.jsx)(Zx,{...t,ref:a})})})},"RovingFocusGroup")),Zx=Ve.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:s,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,m=Ve.useRef(null),g=J(a,m),p=_a(s),[h,x]=Bt({prop:l,defaultProp:i??null,onChange:u,caller:En}),[C,L]=Ve.useState(!1),I=He(c),w=Cf(o),b=Ve.useRef(!1),[v,R]=Ve.useState(0);return Ve.useEffect(()=>{let D=m.current;if(D)return D.addEventListener(xl,I),()=>D.removeEventListener(xl,I)},[I]),(0,pa.jsx)($x,{scope:o,orientation:r,dir:p,loop:n,currentTabStopId:h,onItemFocus:Ve.useCallback(D=>x(D),[x]),onItemShiftTab:Ve.useCallback(()=>L(!0),[]),onFocusableItemAdd:Ve.useCallback(()=>R(D=>D+1),[]),onFocusableItemRemove:Ve.useCallback(()=>R(D=>D-1),[]),children:(0,pa.jsx)(te.div,{tabIndex:C||v===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:X(t.onMouseDown,()=>{b.current=!0}),onFocus:X(t.onFocus,D=>{let T=!b.current;if(D.target===D.currentTarget&&T&&!C){let k=new CustomEvent(xl,zx);if(D.currentTarget.dispatchEvent(k),!k.defaultPrevented){let F=w().filter(G=>G.focusable),_=F.find(G=>G.active),B=F.find(G=>G.id===h),W=[_,B,...F].filter(Boolean).map(G=>G.ref.current);Il(W,d)}}b.current=!1}),onBlur:X(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),Jx="RovingFocusGroupItem",vf=Ve.forwardRef(za(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:s,children:l,...i}=t,u=ct(),c=s||u,d=Yx(Jx,o),f=d.currentTabStopId===c,m=Cf(o),{onFocusableItemAdd:g,onFocusableItemRemove:p,currentTabStopId:h}=d,x=xf();return se(()=>{if(!(!x||!r))return g(),()=>p()},[x,r,g,p]),Ve.useEffect(()=>{if(!(x||!r))return g(),()=>p()},[x,r,g,p]),(0,pa.jsx)(Ll.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,pa.jsx)(te.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:X(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:X(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:X(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=Sf(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let w=m().filter(b=>b.focusable).map(b=>b.ref.current);if(L==="last")w.reverse();else if(L==="prev"||L==="next"){L==="prev"&&w.reverse();let b=w.indexOf(C.currentTarget);w=d.loop?wf(w,b+1):w.slice(b+1)}setTimeout(()=>Il(w))}}),children:typeof l=="function"?l({isCurrentTabStop:f,hasTabStop:h!=null}):l})})},"RovingFocusGroupItem")),Qx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function bf(e,t){return t!==jx.RTL?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}za(bf,"getDirectionAwareKey");function Sf(e,t,a){let o=bf(e.key,a);if(!(t===Lf.Vertical&&["ArrowLeft","ArrowRight"].includes(o))&&!(t===Lf.Horizontal&&["ArrowUp","ArrowDown"].includes(o)))return Qx[o]}za(Sf,"getFocusIntent");function Il(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}za(Il,"focusFirst");function wf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}za(wf,"wrapArray");var he=require("react/jsx-runtime"),aL=Object.defineProperty,xe=(e,t)=>aL(e,"name",{value:t,configurable:!0});var vl=["Enter"," "],oL=["ArrowDown","PageUp","Home"],Rf=["ArrowUp","PageDown","End"],rL=[...oL,...Rf],Lw={ltr:[...vl,"ArrowRight"],rtl:[...vl,"ArrowLeft"]};var Fn="Menu",[bl,nL,sL]=Na(Fn),[Xa,wl]=Xe(Fn,[sL,Mo,Cl]),yl=Mo(),Pf=Cl(),[lL,Pr]=Xa(Fn),[iL,Rl]=Xa(Fn),kf=xe(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:s=!0}=e,l=yl(t),[i,u]=Y.useState(null),c=Y.useRef(!1),d=He(n),f=_a(r);return Y.useEffect(()=>{let m=xe(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=xe(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",m,{capture:!0}),()=>{document.removeEventListener("keydown",m,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),Y.useEffect(()=>{if(!a)return;let m=xe(()=>d(!1),"handleBlur");return window.addEventListener("blur",m),()=>window.removeEventListener("blur",m)},[a,d]),(0,he.jsx)(kn,{...l,children:(0,he.jsx)(lL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,he.jsx)(iL,{scope:t,onClose:Y.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:s,children:o})})})},"Menu"),Df=Y.forwardRef(xe(function(t,a){let{__scopeMenu:o,...r}=t,n=yl(o);return(0,he.jsx)(Dn,{...n,...r,ref:a})},"MenuAnchor")),Mf="MenuPortal",[uL,dL]=Xa(Mf,{forceMount:void 0}),Af=xe(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Pr(Mf,t);return(0,he.jsx)(uL,{scope:t,forceMount:a,children:(0,he.jsx)(jt,{present:a||n.open,children:(0,he.jsx)(xo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ma="MenuContent",[cL,Tf]=Xa(ma),Ef=Y.forwardRef(xe(function(t,a){let o=dL(ma,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,s=Pr(ma,t.__scopeMenu),l=Rl(ma,t.__scopeMenu);return(0,he.jsx)(bl.Provider,{scope:t.__scopeMenu,children:(0,he.jsx)(jt,{present:r||s.open,children:(0,he.jsx)(bl.Slot,{scope:t.__scopeMenu,children:l.modal?(0,he.jsx)(fL,{...n,ref:a}):(0,he.jsx)(pL,{...n,ref:a})})})})},"MenuContent")),fL=Y.forwardRef(xe(function(t,a){let o=Pr(ma,t.__scopeMenu),r=Y.useRef(null),n=J(a,r);return Y.useEffect(()=>{let s=r.current;if(s)return wo(s)},[]),(0,he.jsx)(Of,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:X(t.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),pL=Y.forwardRef(xe(function(t,a){let o=Pr(ma,t.__scopeMenu);return(0,he.jsx)(Of,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),mL=Ze("MenuContent.ScrollLock"),Of=Y.forwardRef(xe(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:m,onDismiss:g,disableOutsideScroll:p,...h}=t,x=Pr(ma,o),C=Rl(ma,o),L=yl(o),I=Pf(o),w=nL(o),[b,v]=Y.useState(null),R=Y.useRef(null),[D,T]=Y.useState(null);Ms(D);let{nodes:k,registry:F}=pr(),_=!!(n||p),B=J(a,R,x.onContentChange,T),$=Y.useRef(0),W=Y.useRef(""),G=Y.useRef(0),H=Y.useRef(null),z=Y.useRef("right"),U=Y.useRef(0),ae=Y.useMemo(()=>p?[R,...k.map(E=>({current:E}))]:[],[R,k,p]),Z=p?Ta:Y.Fragment,Q=p?{as:mL,allowPinchZoom:!0,shards:ae}:void 0,De=xe(E=>{let de=W.current+E,ce=w().filter(M=>!M.disabled),fe=document.activeElement,O=ce.find(M=>M.ref.current===fe)?.textValue,ue=ce.map(M=>M.textValue),oe=Vf(ue,de,O),S=ce.find(M=>M.textValue===oe)?.ref.current;function P(M){W.current=M,window.clearTimeout($.current),M!==""&&($.current=window.setTimeout(()=>P(""),1e3))}xe(P,"updateSearch"),P(de),S&&setTimeout(()=>S.focus())},"handleTypeaheadSearch");Y.useEffect(()=>()=>window.clearTimeout($.current),[]),ua();let Le=Y.useCallback(E=>z.current===H.current?.side&&Gf(E,H.current?.area),[]);return(0,he.jsx)(cL,{scope:o,searchRef:W,onItemEnter:Y.useCallback(E=>{Le(E)&&E.preventDefault()},[Le]),onItemLeave:Y.useCallback(E=>{Le(E)||(R.current?.focus(),v(null))},[Le]),onTriggerLeave:Y.useCallback(E=>{Le(E)&&E.preventDefault()},[Le]),pointerGraceTimerRef:G,onPointerGraceIntentChange:Y.useCallback(E=>{H.current=E},[]),children:(0,he.jsx)(fr,{registry:_?F:null,children:(0,he.jsx)(Z,{...Q,children:(0,he.jsx)(go,{asChild:!0,trapped:n,branches:k,onMountAutoFocus:X(s,E=>{E.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:(0,he.jsx)(ho,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:m,onDismiss:g,children:(0,he.jsx)(If,{asChild:!0,...I,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:v,onEntryFocus:X(u,E=>{C.isUsingKeyboardRef.current||E.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,he.jsx)(Mn,{role:"menu","aria-orientation":"vertical","data-state":_f(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...h,ref:B,style:{outline:"none",...h.style},onKeyDown:X(h.onKeyDown,E=>{let ce=E.target.closest("[data-radix-menu-content]")===E.currentTarget,fe=E.ctrlKey||E.altKey||E.metaKey,O=E.key.length===1;ce&&(E.key==="Tab"&&E.preventDefault(),!fe&&O&&De(E.key));let ue=R.current;if(E.target!==ue||!rL.includes(E.key))return;E.preventDefault();let S=w().filter(P=>!P.disabled).map(P=>P.ref.current);Rf.includes(E.key)&&S.reverse(),qf(S)}),onBlur:X(t.onBlur,E=>{E.currentTarget.contains(E.target)||(window.clearTimeout($.current),W.current="")}),onPointerMove:X(t.onPointerMove,On(E=>{let de=E.target,ce=U.current!==E.clientX;if(E.currentTarget.contains(de)&&ce){let fe=E.clientX>U.current?"right":"left";z.current=fe,U.current=E.clientX}}))})})})})})})})},"MenuContentImpl"));var Ff=Y.forwardRef(xe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,he.jsx)(te.div,{...r,ref:a})},"MenuLabel")),Sl="MenuItem",yf="menu.itemSelect",Bf=Y.forwardRef(xe(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,s=Y.useRef(null),l=Rl(Sl,t.__scopeMenu),i=Tf(Sl,t.__scopeMenu),u=J(a,s),c=Y.useRef(!1),d=xe(()=>{let f=s.current;if(!o&&f){let m=new CustomEvent(yf,{bubbles:!0,cancelable:!0});f.addEventListener(yf,g=>r?.(g),{once:!0}),dr(f,m),m.defaultPrevented?c.current=!1:l.onClose()}},"handleSelect");return(0,he.jsx)(hL,{...n,ref:u,disabled:o,onClick:X(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:X(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:X(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||vl.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),hL=Y.forwardRef(xe(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...s}=t,l=Tf(Sl,o),i=Pf(o),u=Y.useRef(null),c=J(a,u),[d,f]=Y.useState(!1),[m,g]=Y.useState("");return Y.useEffect(()=>{let p=u.current;p&&g((p.textContent??"").trim())},[s.children]),(0,he.jsx)(bl.ItemSlot,{scope:o,disabled:r,textValue:n??m,children:(0,he.jsx)(vf,{asChild:!0,...i,focusable:!r,children:(0,he.jsx)(te.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...s,ref:c,onPointerMove:X(t.onPointerMove,On(p=>{r?l.onItemLeave(p):(l.onItemEnter(p),p.defaultPrevented||p.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:X(t.onPointerLeave,On(p=>l.onItemLeave(p))),onFocus:X(t.onFocus,()=>f(!0)),onBlur:X(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var gL="MenuRadioGroup",[Cw,Iw]=Xa(gL,{value:void 0,onValueChange:xe(()=>{},"onValueChange")});var xL="MenuItemIndicator",[vw,bw]=Xa(xL,{checked:!1});var Nf=Y.forwardRef(xe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,he.jsx)(te.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var LL="MenuSub",[Sw,ww]=Xa(LL);function _f(e){return e?"open":"closed"}xe(_f,"getOpenState");function Hf(e){return e==="indeterminate"}xe(Hf,"isIndeterminate");function CL(e){return Hf(e)?"indeterminate":e?"checked":"unchecked"}xe(CL,"getCheckedState");function qf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}xe(qf,"focusFirst");function Uf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}xe(Uf,"wrapArray");function Vf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=Uf(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}xe(Vf,"getNextMatch");function Wf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let l=t[n],i=t[s],u=l.x,c=l.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}xe(Wf,"isPointInPolygon");function Gf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Wf(a,t)}xe(Gf,"isPointerInGraceArea");function On(e){return t=>t.pointerType==="mouse"?e(t):void 0}xe(On,"whenMouse");var Vt=require("react/jsx-runtime"),vL=Object.defineProperty,Ka=(e,t)=>vL(e,"name",{value:t,configurable:!0}),Pl="DropdownMenu",[bL,Uw]=Xe(Pl,[wl]),ja=wl(),[SL,zf]=bL(Pl),Xf=Ka(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:s,modal:l=!0}=e,i=ja(t),u=At.useRef(null),[c,d]=Bt({prop:r,defaultProp:n??!1,onChange:s,caller:Pl});return(0,Vt.jsx)(SL,{scope:t,triggerId:ct(),triggerRef:u,contentId:ct(),open:c,onOpenChange:d,onOpenToggle:At.useCallback(()=>d(f=>!f),[d]),modal:l,children:(0,Vt.jsx)(kf,{...i,open:c,onOpenChange:d,dir:o,modal:l,children:a})})},"DropdownMenu"),wL="DropdownMenuTrigger",Kf=At.forwardRef(Ka(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,s=zf(wL,o),l=ja(o),i=J(a,s.triggerRef);return(0,Vt.jsx)(Df,{asChild:!0,...l,children:(0,Vt.jsx)(te.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:X(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:X(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),jf=Ka(e=>{let{__scopeDropdownMenu:t,...a}=e,o=ja(t);return(0,Vt.jsx)(Af,{...o,...a})},"DropdownMenuPortal"),yL="DropdownMenuContent",kl=At.forwardRef(Ka(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=zf(yL,o),s=ja(o),l=At.useRef(!1);return(0,Vt.jsx)(Ef,{id:n.contentId,"aria-labelledby":n.triggerId,...s,...r,ref:a,onCloseAutoFocus:X(t.onCloseAutoFocus,i=>{l.current||n.triggerRef.current?.focus(),l.current=!1,i.preventDefault()}),onInteractOutside:X(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(l.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var Dl=At.forwardRef(Ka(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Ff,{...n,...r,ref:a})},"DropdownMenuLabel")),Ml=At.forwardRef(Ka(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Bf,{...n,...r,ref:a})},"DropdownMenuItem"));var Al=At.forwardRef(Ka(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=ja(o);return(0,Vt.jsx)(Nf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Ao=require("react/jsx-runtime"),To=Xf,Eo=Kf;var $a=kr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Ao.jsx)(jf,{children:(0,Ao.jsx)(kl,{ref:o,sideOffset:t,className:ee("kanban-portal kanban-dropdown-content",e),...a})}));$a.displayName=kl.displayName;var bt=kr.forwardRef(({className:e,inset:t,...a},o)=>(0,Ao.jsx)(Ml,{ref:o,className:ee("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));bt.displayName=Ml.displayName;var PL=kr.forwardRef(({className:e,inset:t,...a},o)=>(0,Ao.jsx)(Dl,{ref:o,className:ee("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));PL.displayName=Dl.displayName;var kL=kr.forwardRef(({className:e,...t},a)=>(0,Ao.jsx)(Al,{ref:a,className:ee("kanban-dropdown-separator",e),...t}));kL.displayName=Al.displayName;var $f=K(require("react"),1);var Yf=require("react/jsx-runtime"),Zt=$f.forwardRef(({className:e,type:t,...a},o)=>(0,Yf.jsx)("input",{type:t,className:ee("kanban-input",e),ref:o,...a}));Zt.displayName="Input";var Qf=K(require("react"),1);var Zf=K(require("react"),1);var Jf=require("react/jsx-runtime"),DL=Object.defineProperty,ML=(e,t)=>DL(e,"name",{value:t,configurable:!0}),Tl=Zf.forwardRef(ML(function(t,a){return(0,Jf.jsx)(te.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label"));var ep=require("react/jsx-runtime"),ha=Qf.forwardRef(({className:e,...t},a)=>(0,ep.jsx)(Tl,{ref:a,className:ee("kanban-label",e),...t}));ha.displayName=Tl.displayName;var xa=K(require("react"),1);var A=K(require("react"),1),Ol=K(require("react-dom"),1);var TL=Object.defineProperty,EL=(e,t)=>TL(e,"name",{value:t,configurable:!0});function Bn(e,[t,a]){return Math.min(a,Math.max(t,e))}EL(Bn,"clamp");var OL=K(require("react"),1);var FL=require("react/jsx-runtime");var tp=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var j=require("react/jsx-runtime"),BL=Object.defineProperty,ne=(e,t)=>BL(e,"name",{value:t,configurable:!0}),ap={ItemAligned:"item-aligned",Popper:"popper"},NL={LTR:"ltr",RTL:"rtl"},_L=[" ","Enter","ArrowUp","ArrowDown"],HL=[" ","Enter"],Oo="Select",[_n,Hn,qL]=Na(Oo),[Za,Cy]=Xe(Oo,[qL,Mo]),Fl=Mo(),[UL,ga]=Za(Oo),[VL,WL]=Za(Oo);function lp(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:s,defaultValue:l,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:m,form:g,internal_do_not_use_render:p}=e,h=Fl(t),[x,C]=A.useState(null),[L,I]=A.useState(null),[w,b]=A.useState(!1),v=_a(u),[R,D]=Bt({prop:o,defaultProp:r??!1,onChange:n,caller:Oo}),[T,k]=Bt({prop:s,defaultProp:l,onChange:i,caller:Oo}),F=A.useRef(null),_=A.useRef(!1),[B,$]=A.useState(null),W=ne(E=>{$({value:E,hasConsumerStoppedPropagation:_.current}),k(E)},"handleUserSelect"),G=A.useRef(T);A.useEffect(()=>{let E=g?x?.ownerDocument.getElementById(g):x?.form;if(E instanceof HTMLFormElement){let de=ne(()=>k(G.current),"reset");return E.addEventListener("reset",de),()=>E.removeEventListener("reset",de)}},[g,x,k]);let H=x?!!g||!!x.closest("form"):!0,[z,U]=A.useState(new Set),ae=ct(),Z=Array.from(z).map(E=>E.props.value).join(";"),Q=A.useCallback(E=>{U(de=>new Set(de).add(E))},[]),De=A.useCallback(E=>{U(de=>{let ce=new Set(de);return ce.delete(E),ce})},[]),Le={required:m,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:I,valueNodeHasChildren:w,onValueNodeHasChildrenChange:b,contentId:ae,value:T,onValueChange:k,hasConsumerStoppedPropagationRef:_,userSelection:B,onUserSelect:W,open:R,onOpenChange:D,dir:v,triggerPointerDownPosRef:F,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:z,nativeSelectKey:Z,isFormControl:H};return(0,j.jsx)(kn,{...h,children:(0,j.jsx)(UL,{scope:t,...Le,children:(0,j.jsx)(_n.Provider,{scope:t,children:(0,j.jsx)(VL,{scope:t,onNativeOptionAdd:Q,onNativeOptionRemove:De,children:Lp(p)?p(Le):a})})})})}ne(lp,"SelectProvider");var ip=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,j.jsx)(lp,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,j.jsxs)(j.Fragment,{children:[a,r?(0,j.jsx)(sC,{__scopeSelect:t}):null]})})},"Select"),GL="SelectTrigger",Bl=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,s=Fl(o),l=ga(GL,o),i=l.disabled||r,u=J(a,l.onTriggerChange),c=Hn(o),d=A.useRef("touch"),[f,m,g]=Gl(h=>{let x=c().filter(I=>!I.disabled),C=x.find(I=>I.value===l.value),L=zl(x,h,C);L!==void 0&&l.onUserSelect(L.value)}),p=ne(h=>{i||(l.onOpenChange(!0),g()),h&&(l.triggerPointerDownPosRef.current={x:Math.round(h.pageX),y:Math.round(h.pageY)})},"handleOpen");return(0,j.jsx)(Dn,{asChild:!0,...s,children:(0,j.jsx)(te.button,{type:"button",role:"combobox","aria-controls":l.open?l.contentId:void 0,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Dr(l.value)?"":void 0,...n,ref:u,onClick:X(n.onClick,h=>{h.currentTarget.focus(),d.current!=="mouse"&&p(h)}),onPointerDown:X(n.onPointerDown,h=>{d.current=h.pointerType;let x=h.target;x.hasPointerCapture(h.pointerId)&&x.releasePointerCapture(h.pointerId),h.button===0&&h.ctrlKey===!1&&h.pointerType==="mouse"&&(p(h),h.preventDefault())}),onKeyDown:X(n.onKeyDown,h=>{let x=f.current!=="";!(h.ctrlKey||h.altKey||h.metaKey)&&h.key.length===1&&(l.hasConsumerStoppedPropagationRef.current=h.isPropagationStopped(),m(h.key)),!(x&&h.key===" ")&&_L.includes(h.key)&&(p(),h.preventDefault())})})})},"SelectTrigger")),zL="SelectValue",up=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:s,placeholder:l="",...i}=t,u=ga(zL,o),{onValueNodeHasChildrenChange:c}=u,d=s!==void 0,f=J(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let m=Dr(u.value);return(0,j.jsx)(te.span,{...i,asChild:m?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,j.jsx)(A.Fragment,{children:m?l:s},m?"placeholder":"value")})},"SelectValue")),dp=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,j.jsx)(te.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),XL="SelectPortal",[KL,jL]=Za(XL,{forceMount:void 0}),cp=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,j.jsx)(KL,{scope:e.__scopeSelect,forceMount:a,children:(0,j.jsx)(xo,{asChild:!0,...o})})},"SelectPortal"),Ya="SelectContent",Nl=A.forwardRef(ne(function(t,a){let o=jL(Ya,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,s=ga(Ya,t.__scopeSelect),[l,i]=A.useState();return se(()=>{i(new DocumentFragment)},[]),(0,j.jsx)(jt,{present:r||s.open,children:({present:u})=>u?(0,j.jsx)(ZL,{...n,ref:a}):(0,j.jsx)($L,{...n,fragment:l})})},"SelectContent")),$L=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ol.createPortal((0,j.jsx)(fp,{scope:o,children:(0,j.jsx)(_n.Slot,{scope:o,children:(0,j.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Tt=10,[fp,Ja]=Za(Ya),YL=Ze("SelectContent.RemoveScroll"),ZL=A.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r=ap.ItemAligned,onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:l,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:m,collisionPadding:g,sticky:p,hideWhenDetached:h,avoidCollisions:x,...C}=t,L=ga(Ya,o),[I,w]=A.useState(null),[b,v]=A.useState(null),R=J(a,w),[D,T]=A.useState(null),[k,F]=A.useState(null),_=Hn(o),[B,$]=A.useState(!1),W=A.useRef(!1),G=A.useRef(!1),H=A.useRef(!1);A.useEffect(()=>{if(I)return wo(I)},[I]),ua();let z=A.useCallback(O=>{let[ue,...oe]=_().map(M=>M.ref.current),[S]=oe.slice(-1),P=document.activeElement;for(let M of O)if(M===P||(M?.scrollIntoView({block:"nearest"}),M===ue&&b&&(b.scrollTop=0),M===S&&b&&(b.scrollTop=b.scrollHeight),M?.focus(),document.activeElement!==P))return},[_,b]),U=A.useCallback(()=>z([D,I]),[z,D,I]);A.useEffect(()=>{B&&U()},[B,U]);let{onOpenChange:ae,triggerPointerDownPosRef:Z}=L;A.useEffect(()=>{if(I){let O={x:0,y:0},ue=ne(S=>{O={x:Math.abs(Math.round(S.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(S.pageY)-(Z.current?.y??0))}},"handlePointerMove"),oe=ne(S=>{O.x<=10&&O.y<=10?S.preventDefault():S.composedPath().includes(I)||ae(!1),document.removeEventListener("pointermove",ue),Z.current=null},"handlePointerUp");return Z.current!==null&&(document.addEventListener("pointermove",ue),document.addEventListener("pointerup",oe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",oe,{capture:!0})}}},[I,ae,Z]),A.useEffect(()=>{let O=ne(()=>ae(!1),"close");return window.addEventListener("blur",O),window.addEventListener("resize",O),()=>{window.removeEventListener("blur",O),window.removeEventListener("resize",O)}},[ae]);let[Q,De]=Gl(O=>{let ue=_().filter(P=>!P.disabled),oe=ue.find(P=>P.ref.current===document.activeElement),S=zl(ue,O,oe);S&&setTimeout(()=>S.ref.current?.focus())}),Le=A.useCallback((O,ue,oe)=>{let S=!G.current;S&&(G.current=!0);let P=!W.current&&!oe;L.value!==void 0&&L.value===ue||P?(T(O),P&&(W.current=!0)):S&&T(O)},[L.value]),E=A.useCallback(()=>I?.focus(),[I]),de=A.useCallback((O,ue,oe)=>{if(!O)return;let S=!H.current;S&&(H.current=!0);let P=!W.current&&!oe;(L.value!==void 0&&L.value===ue||P||S)&&F(O)},[L.value]),ce=r===ap.Popper?op:JL,fe=ce===op?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:m,collisionPadding:g,sticky:p,hideWhenDetached:h,avoidCollisions:x}:{};return(0,j.jsx)(fp,{scope:o,content:I,viewport:b,onViewportChange:v,itemRefCallback:Le,selectedItem:D,onItemLeave:E,itemTextRefCallback:de,focusSelectedItem:U,selectedItemText:k,position:r,isPositioned:B,searchRef:Q,children:(0,j.jsx)(Ta,{as:YL,allowPinchZoom:!0,children:(0,j.jsx)(go,{asChild:!0,trapped:L.open,onMountAutoFocus:O=>{O.preventDefault()},onUnmountAutoFocus:X(n,O=>{L.trigger?.focus({preventScroll:!0}),O.preventDefault()}),children:(0,j.jsx)(ho,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:O=>O.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,j.jsx)(ce,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:O=>O.preventDefault(),...C,...fe,onPlaced:()=>$(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:X(C.onKeyDown,O=>{let ue=O.ctrlKey||O.altKey||O.metaKey;if(O.key==="Tab"&&O.preventDefault(),!ue&&O.key.length===1&&De(O.key),["ArrowUp","ArrowDown","Home","End"].includes(O.key)){let S=_().filter(P=>!P.disabled).map(P=>P.ref.current);if(["ArrowUp","End"].includes(O.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(O.key)){let P=O.target,M=S.indexOf(P);S=S.slice(M+1)}setTimeout(()=>z(S)),O.preventDefault()}})})})})})})},"SelectContentImpl")),JL=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,s=ga(Ya,o),l=Ja(Ya,o),[i,u]=A.useState(null),[c,d]=A.useState(null),f=J(a,d),m=Hn(o),g=A.useRef(!1),p=A.useRef(!0),{viewport:h,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=l,I=A.useCallback(()=>{if(s.trigger&&s.valueNode&&i&&c&&h&&x&&C){let R=s.trigger.getBoundingClientRect(),D=c.getBoundingClientRect(),T=s.valueNode.getBoundingClientRect(),k=C.getBoundingClientRect();if(s.dir!==NL.RTL){let oe=k.left-D.left,S=T.left-oe,P=R.left-S,M=R.width+P,V=Math.max(M,D.width),Se=window.innerWidth-Tt,le=Bn(S,[Tt,Math.max(Tt,Se-V)]);i.style.minWidth=M+"px",i.style.left=le+"px"}else{let oe=D.right-k.right,S=window.innerWidth-T.right-oe,P=window.innerWidth-R.right-S,M=R.width+P,V=Math.max(M,D.width),Se=window.innerWidth-Tt,le=Bn(S,[Tt,Math.max(Tt,Se-V)]);i.style.minWidth=M+"px",i.style.right=le+"px"}let F=m(),_=window.innerHeight-Tt*2,B=h.scrollHeight,$=window.getComputedStyle(c),W=parseInt($.borderTopWidth,10),G=parseInt($.paddingTop,10),H=parseInt($.borderBottomWidth,10),z=parseInt($.paddingBottom,10),U=W+G+B+z+H,ae=Math.min(x.offsetHeight*5,U),Z=window.getComputedStyle(h),Q=parseInt(Z.paddingTop,10),De=parseInt(Z.paddingBottom,10),Le=R.top+R.height/2-Tt,E=_-Le,de=x.offsetHeight/2,ce=x.offsetTop+de,fe=W+G+ce,O=U-fe;if(fe<=Le){let oe=F.length>0&&x===F[F.length-1].ref.current;i.style.bottom="0px";let S=c.clientHeight-h.offsetTop-h.offsetHeight,P=Math.max(E,de+(oe?De:0)+S+H),M=fe+P;i.style.height=M+"px"}else{let oe=F.length>0&&x===F[0].ref.current;i.style.top="0px";let P=Math.max(Le,W+h.offsetTop+(oe?Q:0)+de)+O;i.style.height=P+"px",h.scrollTop=fe-Le+h.offsetTop}i.style.margin=`${Tt}px 0`,i.style.minHeight=ae+"px",i.style.maxHeight=_+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[m,s.trigger,s.valueNode,i,c,h,x,C,s.dir,r]);se(()=>I(),[I]);let[w,b]=A.useState();se(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let v=A.useCallback(R=>{R&&p.current===!0&&(I(),L?.(),p.current=!1)},[I,L]);return(0,j.jsx)(QL,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:v,children:(0,j.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:(0,j.jsx)(te.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),op=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Tt,...s}=t,l=Fl(o);return(0,j.jsx)(Mn,{...l,...s,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[QL,_l]=Za(Ya,{}),rp="SelectViewport",pp=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,s=Ja(rp,o),l=_l(rp,o),i=J(a,s.onViewportChange),u=A.useRef(0);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,j.jsx)(_n.Slot,{scope:o,children:(0,j.jsx)(te.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:X(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:m}=l;if(m?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let p=window.innerHeight-Tt*2,h=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(h,x);if(C<p){let L=C+g,I=Math.min(p,L),w=L-I;f.style.height=I+"px",f.style.bottom==="0px"&&(d.scrollTop=w>0?w:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),eC="SelectGroup",[Iy,tC]=Za(eC);var aC="SelectLabel",Hl=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=tC(aC,o);return(0,j.jsx)(te.div,{id:n.id,...r,ref:a})},"SelectLabel")),El="SelectItem",[oC,mp]=Za(El),ql=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:s,...l}=t,i=ga(El,o),u=Ja(El,o),c=i.value===r,[d,f]=A.useState(s??""),[m,g]=A.useState(!1),p=He(I=>u.itemRefCallback?.(I,r,n)),h=J(a,p),x=ct(),C=A.useRef("touch");function L(I){i.hasConsumerStoppedPropagationRef.current=I.isPropagationStopped(),i.onUserSelect(r),i.onOpenChange(!1)}return ne(L,"handleSelect"),(0,j.jsx)(oC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:A.useCallback(I=>{f(w=>w||(I?.textContent??"").trim())},[]),children:(0,j.jsx)(_n.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,j.jsx)(te.div,{role:"option","aria-labelledby":x,"data-highlighted":m?"":void 0,"aria-selected":c&&m,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...l,ref:h,onFocus:X(l.onFocus,()=>g(!0)),onBlur:X(l.onBlur,()=>g(!1)),onClick:X(l.onClick,I=>{n||C.current!=="mouse"&&L(I)}),onPointerUp:X(l.onPointerUp,I=>{n||C.current==="mouse"&&L(I)}),onPointerDown:X(l.onPointerDown,I=>{C.current=I.pointerType}),onPointerMove:X(l.onPointerMove,I=>{C.current=I.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&I.currentTarget.focus({preventScroll:!0})}),onPointerLeave:X(l.onPointerLeave,I=>{I.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:X(l.onKeyDown,I=>{n||I.target!==I.currentTarget||u.searchRef?.current!==""&&I.key===" "||(HL.includes(I.key)&&L(I),I.key===" "&&I.preventDefault())})})})})},"SelectItem")),Nn="SelectItemText",hp=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...s}=t,l=ga(Nn,o),i=Ja(Nn,o),u=mp(Nn,o),c=WL(Nn,o),[d,f]=A.useState(null),m=He(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),g=J(a,f,u.onItemTextChange,m),p=d?.textContent,h=A.useMemo(()=>(0,j.jsx)("option",{value:u.value,disabled:u.disabled,children:p},u.value),[u.disabled,u.value,p]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return se(()=>(x(h),()=>C(h)),[x,C,h]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(te.span,{id:u.textId,...s,ref:g}),u.isSelected&&l.valueNode&&!l.valueNodeHasChildren&&!Dr(l.value)?Ol.createPortal(s.children,l.valueNode):null]})},"SelectItemText")),rC="SelectItemIndicator",gp=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return mp(rC,o).isSelected?(0,j.jsx)(te.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),np="SelectScrollUpButton",Ul=A.forwardRef(ne(function(t,a){let o=Ja(np,t.__scopeSelect),r=_l(np,t.__scopeSelect),[n,s]=A.useState(!1),l=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;s(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,j.jsx)(xp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),sp="SelectScrollDownButton",Vl=A.forwardRef(ne(function(t,a){let o=Ja(sp,t.__scopeSelect),r=_l(sp,t.__scopeSelect),[n,s]=A.useState(!1),l=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;s(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,j.jsx)(xp,{...t,ref:l,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),xp=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,s=Ja("SelectScrollButton",o),l=A.useRef(null),i=Hn(o),u=A.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return A.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,j.jsx)(te.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:X(n.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:X(n.onPointerMove,()=>{s.onItemLeave?.(),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:X(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Wl=A.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,j.jsx)(te.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var nC="SelectBubbleInput",sC=A.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=ga(nC,t),{value:n,onValueChange:s,required:l,disabled:i,name:u,autoComplete:c,form:d,userSelection:f}=r,{nativeOptions:m,nativeSelectKey:g}=r,p=A.useRef(null),h=J(o,p),x=n??"",C=A.useRef(x),L=A.useRef(f),I=A.useRef(!1),w=Array.from(m).some(b=>(b.props.value??"")==="");return A.useEffect(()=>{let b=p.current;if(!b)return;let v=window.HTMLSelectElement.prototype,D=Object.getOwnPropertyDescriptor(v,"value").set,T=f!==null&&f!==L.current;L.current=f;let k=C.current!==x;C.current=x;let F=T&&k;if(T&&!k&&f.value!==x&&!f.hasConsumerStoppedPropagation&&D){I.current=!0;try{D.call(b,f.value),b.dispatchEvent(new Event("change",{bubbles:!0}))}finally{I.current=!1,D.call(b,x)}return}let _=F&&!f.hasConsumerStoppedPropagation;if(k&&D){let B=new Event("change",{bubbles:_});D.call(b,x),b.dispatchEvent(B)}},[x,f]),(0,j.jsxs)(te.select,{"aria-hidden":!0,required:l,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:b=>{I.current||s(b.target.value)},...a,style:{...tp,...a.style},ref:h,defaultValue:x,children:[Dr(n)&&!w?(0,j.jsx)("option",{value:""}):null,Array.from(m)]},g)},"SelectBubbleInput"));function Lp(e){return typeof e=="function"}ne(Lp,"isFunction");function Dr(e){return e===""||e===void 0}ne(Dr,"shouldShowPlaceholder");function Gl(e){let t=He(e),a=A.useRef(""),o=A.useRef(0),r=A.useCallback(s=>{let l=a.current+s;t(l);function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}ne(i,"updateSearch"),i(l)},[t]),n=A.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return A.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Gl,"useTypeaheadSearch");function zl(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,s=Cp(e,Math.max(n,0));r.length===1&&(s=s.filter(u=>u!==a));let i=s.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(zl,"findNextItem");function Cp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Cp,"wrapArray");var Pe=require("react/jsx-runtime"),Xl=ip;var Kl=up,qn=xa.forwardRef(({className:e,children:t,...a},o)=>(0,Pe.jsxs)(Bl,{ref:o,className:ee("kanban-select-trigger",e),...a,children:[t,(0,Pe.jsx)(dp,{asChild:!0,children:(0,Pe.jsx)(co,{className:"kanban-select-icon"})})]}));qn.displayName=Bl.displayName;var Ip=xa.forwardRef(({className:e,...t},a)=>(0,Pe.jsx)(Ul,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Pe.jsx)(ar,{className:"kanban-select-scroll-icon"})}));Ip.displayName=Ul.displayName;var vp=xa.forwardRef(({className:e,...t},a)=>(0,Pe.jsx)(Vl,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Pe.jsx)(co,{className:"kanban-select-scroll-icon"})}));vp.displayName=Vl.displayName;var Un=xa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Pe.jsx)(cp,{children:(0,Pe.jsxs)(Nl,{ref:r,className:ee("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Pe.jsx)(Ip,{}),(0,Pe.jsx)(pp,{className:ee("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Pe.jsx)(vp,{})]})}));Un.displayName=Nl.displayName;var iC=xa.forwardRef(({className:e,...t},a)=>(0,Pe.jsx)(Hl,{ref:a,className:ee("kanban-select-label",e),...t}));iC.displayName=Hl.displayName;var Fo=xa.forwardRef(({className:e,children:t,...a},o)=>(0,Pe.jsxs)(ql,{ref:o,className:ee("kanban-select-item",e),...a,children:[(0,Pe.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Pe.jsx)(gp,{children:(0,Pe.jsx)(wt,{className:"kanban-select-check"})})}),(0,Pe.jsx)(hp,{children:t})]}));Fo.displayName=ql.displayName;var uC=xa.forwardRef(({className:e,...t},a)=>(0,Pe.jsx)(Wl,{ref:a,className:ee("kanban-select-separator",e),...t}));uC.displayName=Wl.displayName;var bp=K(require("react"),1);var Sp=require("react/jsx-runtime"),Vn=bp.forwardRef(({className:e,...t},a)=>(0,Sp.jsx)("textarea",{className:ee("kanban-textarea",e),ref:a,...t}));Vn.displayName="Textarea";var Jt={high:{label:"P0",color:"var(--dsw-alias-state-error-primary)"},medium:{label:"P1",color:"var(--dsw-alias-state-warn-primary)"},low:{label:"P2",color:"var(--dsw-alias-state-business-primary)"}},Wn=["high","medium","low"],wp="var(--dsw-alias-label-tertiary)";function yp(e,t){return t?e.find(a=>a.name===t)?.color??wp:wp}var et=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),jl=e=>e==="high"||e==="medium"||e==="low"?Jt[e].label:"";function Rp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let s=a.label??o,l=a.priority&&jl(a.priority)||o;return et(t("actCreated"),{column:a.column??"",label:s,priority:l})}case"card_moved":return et(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?et(t("actLabelSet"),{to:n}):r!=null&&n==null?et(t("actLabelCleared"),{from:r}):et(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let s=r?jl(r)||r:o,l=n?jl(n)||n:o;return r==null&&n!=null?et(t("actPrioritySet"),{to:l}):r!=null&&n==null?et(t("actPriorityCleared"),{from:s}):et(t("actPriority"),{from:s,to:l})}case"card_title_changed":return et(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return et(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return et(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return et(t("actColumnDeleted"),{column:a.column??""});case"label_added":return et(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return et(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return et(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return et(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Gn=e=>String(e).padStart(2,"0");function Mr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Gn(t.getMonth()+1)}-${Gn(t.getDate())} ${Gn(t.getHours())}:${Gn(t.getMinutes())}`}var Qt=require("react/jsx-runtime");function Pp({activities:e}){let t=Ue();if(e.length===0)return(0,Qt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Qt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Qt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Qt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Qt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Qt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Rp(o,t)]}),(0,Qt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Mr(o.ts),children:Mr(o.ts)})]},o.id)})})}var N=require("react/jsx-runtime");function kp({open:e,card:t,labels:a,comments:o,activities:r,onOpenChange:n,onSave:s,onAddComment:l,onDelete:i,onChatWithAgent:u}){let c=Ue(),d=(0,Et.useId)(),f=(0,Et.useRef)(null),[m,g]=(0,Et.useState)({id:"",title:"",note:"",label:"",priority:""}),[p,h]=(0,Et.useState)(""),[x,C]=(0,Et.useState)(!1),[L,I]=(0,Et.useState)(!1);(0,Et.useEffect)(()=>{e&&(g({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""}),h(""))},[e,t]);let w=v=>g(R=>({...R,...v})),b=async()=>{let v=p.trim();if(!t||!v||v.length>2e3||L)return;I(!0);let R=await l(t.id,v);I(!1),R!==!1&&h("")};return(0,N.jsx)(Ro,{open:e,onOpenChange:n,children:(0,N.jsxs)(Oa,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:()=>{f.current=document.activeElement instanceof HTMLElement?document.activeElement:null},onCloseAutoFocus:v=>{f.current?.isConnected&&(v.preventDefault(),f.current.focus())},children:[(0,N.jsx)(Fa,{children:(0,N.jsx)(Ba,{className:"kanban-sr-only",children:c(t?"editCard":"addCard")})}),(0,N.jsxs)("div",{className:"kanban-form-stack",children:[(0,N.jsxs)("div",{className:"kanban-form-field",children:[(0,N.jsxs)(ha,{htmlFor:`${d}-title`,className:"kanban-field-label",children:[(0,N.jsx)("span",{children:c("fieldTitle")}),t&&(0,N.jsxs)("span",{className:"kanban-field-id",children:[c("fieldId"),": ",t.id]})]}),(0,N.jsx)(Zt,{id:`${d}-title`,value:m.title,placeholder:c("titlePlaceholder"),maxLength:120,onChange:v=>w({title:v.target.value})})]}),(0,N.jsxs)("div",{className:"kanban-form-field",children:[(0,N.jsx)(ha,{htmlFor:`${d}-label`,children:c("fieldLabel")}),(0,N.jsxs)(Xl,{value:m.label||"__none__",onValueChange:v=>w({label:v==="__none__"?"":v}),children:[(0,N.jsx)(qn,{id:`${d}-label`,children:(0,N.jsx)(Kl,{placeholder:c("noLabel")})}),(0,N.jsxs)(Un,{children:[(0,N.jsx)(Fo,{value:"__none__",children:c("noLabel")}),a.map(v=>(0,N.jsx)(Fo,{value:v.name,children:v.name},v.name))]})]})]}),(0,N.jsxs)("div",{className:"kanban-form-field",children:[(0,N.jsx)(ha,{htmlFor:`${d}-priority`,children:c("fieldPriority")}),(0,N.jsxs)(Xl,{value:m.priority||"__none__",onValueChange:v=>w({priority:v==="__none__"?"":v}),children:[(0,N.jsx)(qn,{id:`${d}-priority`,children:(0,N.jsx)(Kl,{placeholder:c("noPriority")})}),(0,N.jsxs)(Un,{children:[(0,N.jsx)(Fo,{value:"__none__",children:c("noPriority")}),Wn.map(v=>{let R=Jt[v];return(0,N.jsx)(Fo,{value:v,children:(0,N.jsxs)("span",{className:"kanban-inline-priority",children:[(0,N.jsx)("span",{className:"kanban-priority-dot",style:{background:R.color}}),R.label]})},v)})]})]})]}),(0,N.jsxs)("div",{className:"kanban-form-field",children:[(0,N.jsx)(ha,{htmlFor:`${d}-note`,children:c("fieldNote")}),(0,N.jsx)(Vn,{id:`${d}-note`,value:m.note,placeholder:c("notePlaceholder"),rows:5,maxLength:2e3,onChange:v=>w({note:v.target.value})})]}),t&&(0,N.jsxs)("div",{className:"kanban-comments-box",children:[(0,N.jsxs)(ha,{htmlFor:`${d}-comment`,children:[c("commentsTitle")," ",(0,N.jsxs)("span",{className:"kanban-tabular",children:["(",o.length,")"]})]}),(0,N.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:o.length===0?(0,N.jsx)("p",{className:"kanban-muted-small",children:c("commentEmpty")}):(0,N.jsx)("ol",{className:"kanban-comment-list",children:o.map(v=>{let R=v.source==="agent";return(0,N.jsxs)("li",{className:"kanban-comment-item",children:[(0,N.jsxs)("div",{className:"kanban-comment-meta",children:[(0,N.jsx)("span",{className:`kanban-activity-actor ${R?"is-agent":"is-human"}`,children:c(R?"actorAgent":"actorHuman")}),(0,N.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:v.createdAt,children:Mr(v.createdAt)})]}),(0,N.jsx)("p",{className:"kanban-comment-content",children:v.content})]},v.id)})})}),(0,N.jsxs)("div",{className:"kanban-comment-composer",children:[(0,N.jsx)(Vn,{id:`${d}-comment`,value:p,placeholder:c("commentPlaceholder"),rows:3,maxLength:2e3,disabled:L,onChange:v=>h(v.target.value),onKeyDown:v=>{(v.metaKey||v.ctrlKey)&&v.key==="Enter"&&(v.preventDefault(),b())}}),(0,N.jsxs)(Me,{type:"button",variant:"outline",disabled:L||!p.trim(),onClick:()=>{b()},children:[(0,N.jsx)(sr,{className:"kanban-icon"}),c("sendComment")]})]})]}),t&&(0,N.jsxs)("div",{className:"kanban-activity-box",children:[(0,N.jsx)(ha,{className:"kanban-muted-small",children:c("activityTitle")}),(0,N.jsx)("div",{className:"kanban-activity-scroll",children:(0,N.jsx)(Pp,{activities:r})})]})]}),(0,N.jsxs)(Cr,{children:[t&&i&&(0,N.jsxs)(Me,{variant:"outline",className:"kanban-dialog-delete",disabled:x,onClick:async()=>{C(!0);let v=await i(t);C(!1),v!==!1&&n(!1)},children:[(0,N.jsx)(Lt,{className:"kanban-icon"}),c("delete")]}),(0,N.jsxs)(To,{children:[(0,N.jsx)(Eo,{asChild:!0,children:(0,N.jsxs)(Me,{variant:"outline",disabled:!m.title.trim()&&!m.note.trim(),children:[(0,N.jsx)(ka,{className:"kanban-icon"}),c("chatWithAgent")]})}),(0,N.jsxs)($a,{align:"end",children:[(0,N.jsx)(bt,{onClick:()=>{u(m,"current"),n(!1)},children:c("chatCurrentSession")}),(0,N.jsx)(bt,{onClick:()=>{u(m,"new"),n(!1)},children:c("chatNewSession")})]})]}),(0,N.jsx)(Me,{variant:"outline",disabled:x||!m.title.trim(),onClick:async()=>{C(!0);let v=await s(m);C(!1),v!==!1&&n(!1)},children:c("save")})]})]})})}var Mp=require("react");var Dp=require("react/jsx-runtime");function dC({variant:e,className:t}={}){return ee("kanban-badge",`kanban-badge--${e??"default"}`,t)}function $l({className:e,variant:t,...a}){return(0,Dp.jsx)("div",{className:dC({variant:t,className:e}),...a})}var Qa=K(require("react"),1);var eo=require("react/jsx-runtime"),Yl=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-card",e),...t}));Yl.displayName="Card";var cC=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-card-header",e),...t}));cC.displayName="CardHeader";var fC=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-ui-card-title",e),...t}));fC.displayName="CardTitle";var pC=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-card-description",e),...t}));pC.displayName="CardDescription";var Zl=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-card-content",e),...t}));Zl.displayName="CardContent";var mC=Qa.forwardRef(({className:e,...t},a)=>(0,eo.jsx)("div",{ref:a,className:ee("kanban-card-footer",e),...t}));mC.displayName="CardFooter";var je=require("react/jsx-runtime");function Jl({card:e,labels:t}){let a=Ue(),o=e.priority?Jt[e.priority]:null,r=yp(t,e.label);return(0,je.jsx)(Yl,{className:"kanban-card",children:(0,je.jsxs)(Zl,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,je.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,je.jsxs)($l,{variant:"secondary",className:"kanban-card-badge",children:[(0,je.jsx)("span",{className:"kanban-label-dot",style:{background:r},"aria-hidden":"true"}),e.label]}),o&&(0,je.jsxs)($l,{variant:"secondary",className:"kanban-card-badge",children:[(0,je.jsx)("span",{className:"kanban-label-dot",style:{background:o.color},"aria-hidden":"true"}),o.label]})]}),(0,je.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,je.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,je.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,je.jsx)(ka,{"aria-hidden":"true"}),(0,je.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function Ap({card:e,labels:t,onOpen:a}){let o=Ue(),r=(0,Mp.useId)(),{attributes:n,listeners:s,setNodeRef:l,transform:i,transition:u,isDragging:c}=Yr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,je.jsxs)("div",{ref:l,style:{transform:it.Transform.toString(i),transition:u},...n,...s,"aria-label":e.title,"aria-describedby":r,onKeyDown:d=>{d.key==="Enter"&&!c?(d.preventDefault(),a(e)):s?.onKeyDown?.(d)},onClick:d=>{d.currentTarget.focus(),a(e)},className:`kanban-sortable-card${c?" is-dragging":""}`,children:[(0,je.jsx)("span",{id:r,className:"kanban-sr-only",children:o("cardKeyboardHelp")}),(0,je.jsx)(Jl,{card:e,labels:t})]})}var ht=require("react/jsx-runtime");function Tp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:s}=Gr({id:e.id,data:{type:"column"}}),{active:l,over:i}=Qo(),u=Ue(),c=l?.data.current?.type==="card"&&(s||i?.data.current?.columnId===e.id);return(0,ht.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ht.jsxs)("div",{className:"kanban-column-header",children:[(0,ht.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ht.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ht.jsxs)("div",{className:"kanban-column-cards",children:[(0,ht.jsx)($r,{items:t.map(d=>d.id),strategy:jr,children:t.map(d=>(0,ht.jsx)(Ap,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ht.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ht.jsx)("div",{className:"kanban-column-footer",children:(0,ht.jsxs)(Me,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ht.jsx)(zt,{className:"kanban-icon"}),u("addCard")]})})]})}var Ar=require("react");var ke=require("react/jsx-runtime");function hC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:s,listeners:l,setNodeRef:i,transform:u,transition:c}=Yr({id:e.id}),d=Ue();return(0,ke.jsxs)("div",{ref:i,style:{transform:it.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,ke.jsx)("button",{...s,...l,className:"kanban-drag-handle","aria-label":`${d("dragSort")}: ${e.title}`,children:(0,ke.jsx)(or,{className:"kanban-icon"})}),(0,ke.jsx)(Zt,{"aria-label":`${d("columnName")}: ${e.title}`,value:t,maxLength:40,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,ke.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${d("delete")}: ${e.title}`,disabled:!n,onClick:r,children:(0,ke.jsx)(Lt,{className:"kanban-icon"})})]})}function Ep({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:s}){let l=Ue(),[i,u]=(0,Ar.useState)({}),[c,d]=(0,Ar.useState)(""),f=Hr(io(sa,{activationConstraint:{distance:8}}),io(na,{coordinateGetter:Zr}));(0,Ar.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(p=>[p.id,p.title]))),d(""))},[e]);let m=p=>{let h=(i[p]??"").trim(),x=t.find(C=>C.id===p);x&&h&&h!==x.title&&r(p,h)},g=p=>{let{active:h,over:x}=p;x&&h.id!==x.id&&o(String(h.id),String(x.id))};return(0,ke.jsx)(Ro,{open:e,onOpenChange:a,children:(0,ke.jsxs)(Oa,{className:"kanban-dialog-medium",children:[(0,ke.jsxs)(Fa,{children:[(0,ke.jsx)(Ba,{children:l("columnEdit")}),(0,ke.jsx)(Ir,{children:l("columnEditDesc")})]}),(0,ke.jsx)(Wr,{sensors:f,collisionDetection:Ti,onDragEnd:g,children:(0,ke.jsx)($r,{items:t.map(p=>p.id),strategy:jr,children:(0,ke.jsx)("div",{className:"kanban-sortable-list",children:t.map(p=>(0,ke.jsx)(hC,{column:p,value:i[p.id]??p.title,onValueChange:h=>u(x=>({...x,[p.id]:h})),onCommit:()=>m(p.id),onDelete:()=>n(p.id),canDelete:t.length>1},p.id))})})}),(0,ke.jsxs)("div",{className:"kanban-sortable-row",children:[(0,ke.jsx)(Zt,{value:c,placeholder:l("newColumnPlaceholder"),"aria-label":l("newColumnPlaceholder"),maxLength:40,onChange:p=>d(p.target.value),onKeyDown:p=>{p.key==="Enter"&&c.trim()&&(s(c.trim()),d(""))}}),(0,ke.jsxs)(Me,{size:"sm",onClick:()=>{c.trim()&&(s(c.trim()),d(""))},children:[(0,ke.jsx)(zt,{className:"kanban-icon"}),l("add")]})]})]})})}var Bo=require("react");var Ne=require("react/jsx-runtime");function Op({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let s=Ue(),[l,i]=(0,Bo.useState)({}),[u,c]=(0,Bo.useState)(""),[d,f]=(0,Bo.useState)("#38bdf8");(0,Bo.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(g=>[g.name,{name:g.name,color:g.color}]))),c(""),f("#38bdf8"))},[e]);let m=g=>{let p=l[g];if(!p)return;let h=t.find(C=>C.name===g),x=p.name.trim();h&&x&&(x!==g||p.color!==h.color)&&r(g,x,p.color)};return(0,Ne.jsx)(Ro,{open:e,onOpenChange:a,children:(0,Ne.jsxs)(Oa,{className:"kanban-dialog-medium",children:[(0,Ne.jsxs)(Fa,{children:[(0,Ne.jsx)(Ba,{children:s("labelEdit")}),(0,Ne.jsx)(Ir,{children:s("labelEditDesc")})]}),(0,Ne.jsx)("div",{className:"kanban-label-list",children:t.map(g=>{let p=l[g.name]??{name:g.name,color:g.color};return(0,Ne.jsxs)("div",{className:"kanban-label-row",children:[(0,Ne.jsx)("input",{type:"color","aria-label":`${s("labelColor")}: ${g.name}`,value:p.color,className:"kanban-color-input",onChange:h=>i(x=>({...x,[g.name]:{...p,color:h.target.value}})),onBlur:()=>m(g.name)}),(0,Ne.jsx)(Zt,{"aria-label":`${s("labelName")}: ${g.name}`,value:p.name,maxLength:20,onChange:h=>i(x=>({...x,[g.name]:{...p,name:h.target.value}})),onBlur:()=>m(g.name),onKeyDown:h=>{h.key==="Enter"&&h.target.blur()}}),(0,Ne.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":`${s("deleteLabel")}: ${g.name}`,onClick:()=>n(g.name),children:(0,Ne.jsx)(Lt,{className:"kanban-icon"})})]},g.name)})}),(0,Ne.jsx)(Cr,{className:"kanban-dialog-footer-layout",children:(0,Ne.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Ne.jsx)("input",{type:"color","aria-label":s("newLabelColor"),value:d,className:"kanban-color-input",onChange:g=>f(g.target.value)}),(0,Ne.jsx)(Zt,{value:u,placeholder:s("newLabelPlaceholder"),"aria-label":s("newLabelPlaceholder"),maxLength:20,onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Ne.jsxs)(Me,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Ne.jsx)(zt,{className:"kanban-icon"}),s("add")]})]})})]})})}function zn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Ql=new Map,ei=0,Xn=new Set;function Fp(e,t){Ql.set(e,t),ei++;for(let a of Xn)a()}function Bp(e){let t=Ql.get(e);if(t==null)return null;Ql.delete(e),ei++;for(let a of Xn)a();return t}function Np(e){return Xn.add(e),()=>{Xn.delete(e)}}function _p(){return ei}function Hp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(yo("fieldId")+": "+t),a&&n.push(a),r&&n.push(yo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var q=require("react/jsx-runtime");function qp(e,t,a,o,r){let n=e.find(h=>h.id===t);if(!n)return{cards:e,toIndex:-1};let s=e.filter(h=>h.columnId===n.columnId).findIndex(h=>h.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:s};let l=e.filter(h=>h.id!==t),i=l.filter(h=>h.columnId===a),u=o?i.findIndex(h=>h.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...l],f=i[c],m=i[i.length-1],g=f?d.indexOf(f):m?d.indexOf(m)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((h,x)=>h.id===e[x]?.id&&h.columnId===e[x]?.columnId)?e:d,toIndex:c}}function Up(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(S=>S.items):[],s=Array.isArray(n)?n.find(S=>Array.isArray(S.sessionIds)&&S.sessionIds.includes(t)):void 0,l=s?s.workspaceId:"default",i=Ue(),[u,c]=(0,ie.useState)(null),[d,f]=(0,ie.useState)(""),[m,g]=(0,ie.useState)([]),[p,h]=(0,ie.useState)(null),[x,C]=(0,ie.useState)(null),[L,I]=(0,ie.useState)(!1),[w,b]=(0,ie.useState)(!1),[v,R]=(0,ie.useState)(!1),[D,T]=(0,ie.useState)(""),[k,F]=(0,ie.useState)(null),_=(0,ie.useRef)(null),B=(0,ie.useRef)(u),$=(0,ie.useRef)(null),W=(0,ie.useRef)(l),G=(0,ie.useRef)(0),H=(0,ie.useRef)(0);B.current=u,W.current=l;let[z,U]=(0,ie.useState)(null),ae=Hr(io(sa,{activationConstraint:{distance:8}}),io(na,{coordinateGetter:Zr})),Z=(0,ie.useCallback)((S,P,M)=>{W.current!==P||M<H.current||(H.current=M,S&&S.board&&(c({...S.board,cards:Array.isArray(S.board.cards)?S.board.cards.map(V=>({...V,comments:Array.isArray(V.comments)?V.comments:[]})):[],activities:Array.isArray(S.board.activities)?S.board.activities:[]}),f("")),Array.isArray(S&&S.warnings)&&S.warnings.length>0&&g(V=>[...V,...S.warnings]))},[]),Q=(0,ie.useCallback)(async(S,P={})=>{let M=++G.current;try{let V=await zn(S,P,l);return Z(V,l,M),!0}catch(V){return f(i("actionFailed")+String(V&&V.message||V)),!1}},[l,Z,i]),De=(0,ie.useCallback)(()=>{let S=++G.current;R(!0),zn("get",{},l).then(P=>Z(P,l,S)).catch(P=>f(i("loadFailed")+String(P&&P.message||P))).finally(()=>R(!1))},[l,Z,i]);(0,ie.useEffect)(()=>{let S=!0,P=++G.current;return c(null),F(null),C(null),h(null),f(""),g([]),zn("get",{},l).then(M=>{S&&Z(M,l,P)}).catch(M=>{S&&f(i("loadFailed")+String(M&&M.message||M))}),()=>{S=!1}},[l,Z,i]),(0,ie.useEffect)(()=>{u&&F(S=>S&&!u.labels.some(P=>P.name===S)?null:S)},[u?.labels]),(0,ie.useLayoutEffect)(()=>{let S=Se=>{let le=Se;for(;le;){let Ie=getComputedStyle(le).overflowY;if(Ie==="auto"||Ie==="scroll")return le;le=le.parentElement}return null},P=()=>{let Se=_.current;if(!Se)return;let le=S(Se.parentElement),Ie=Se.getBoundingClientRect().top+(le?.scrollTop??0),ve=window.innerHeight;if(le){let rt=le.querySelector("[data-composer-seat]"),tt=rt?rt.getBoundingClientRect().top:0;rt&&rt.offsetHeight>0&&tt>Ie?ve=tt:ve=le.getBoundingClientRect().bottom}U(Math.max(0,Math.floor(ve-Ie)))};P();let M=S(_.current?.parentElement??null),V=new ResizeObserver(P);if(V.observe(document.documentElement),M){V.observe(M);let Se=M.querySelector("[data-composer-seat]");Se&&V.observe(Se)}return window.addEventListener("resize",P),()=>{V.disconnect(),window.removeEventListener("resize",P)}},[u!==null]);let Le=(0,ie.useCallback)(S=>{let P=Ei(S),M=P.length>0?P:cs(S),V=Yo(M,"id");if(V==null)return[];if(new Set((u?.columns??[]).map(le=>le.id)).has(String(V))){let le=(u?.cards??[]).filter(Ie=>Ie.columnId===V).map(Ie=>Ie.id);if(le.length>0){let Ie=qr({...S,droppableContainers:S.droppableContainers.filter(ve=>ve.id!==V&&le.includes(String(ve.id)))});Ie.length>0&&(V=Ie[0].id)}}return[{id:V}]},[u]),E=S=>{let P=B.current;if(!P||P.cards===S)return;let M={...P,cards:S};B.current=M,c(M)},de=S=>{if(S.active.data.current?.type!=="card")return;let P=B.current,M=P?.cards.find(V=>V.id===S.active.id);!M||!P||($.current=P.cards,h(M))},ce=({active:S,over:P})=>{let M=B.current;if(!P||!M||S.data.current?.type!=="card")return;let V=String(S.id),Se=M.cards.find(tt=>tt.id===V),le=M.cards.find(tt=>tt.id===P.id),Ie=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!Se||!Ie||Se.columnId===Ie)return;let ve=S.rect.current.translated,rt=!!(le&&ve&&ve.top+ve.height/2>P.rect.top+P.rect.height/2);E(qp(M.cards,V,Ie,le?.id??null,rt).cards)},fe=({active:S,over:P})=>{let M=B.current,V=$.current;if($.current=null,!P||!M||S.data.current?.type!=="card"){V&&E(V),h(null);return}let Se=String(S.id),le=M.cards.find(Wt=>Wt.id===P.id),Ie=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!Ie){V&&E(V),h(null);return}let ve=S.rect.current.translated,rt=!!(le&&ve&&ve.top+ve.height/2>P.rect.top+P.rect.height/2),tt=qp(M.cards,Se,Ie,le?.id??null,rt);E(tt.cards),h(null),(!V||tt.cards.some((Wt,Tr)=>Wt.id!==V[Tr]?.id||Wt.columnId!==V[Tr]?.columnId))&&Q("moveCard",{id:Se,columnId:Ie,toIndex:tt.toIndex}).then(Wt=>{Wt||De()})},O=()=>{$.current&&E($.current),$.current=null,h(null)},ue=S=>{if(!x)return Promise.resolve(!1);if(x.card){let P={id:x.card.id};return S.title!==x.card.title&&(P.title=S.title),S.note!==x.card.note&&(P.note=S.note),S.label!==(x.card.label??"")&&(P.label=S.label),S.priority!==(x.card.priority??"")&&(P.priority=S.priority),Q("updateCard",P)}return Q("addCard",{columnId:x.columnId,title:S.title,note:S.note,label:S.label||void 0,priority:S.priority||void 0})},oe=(0,ie.useCallback)((S,P)=>{let M=Hp(S);if(M){if(P==="current"){o?.setDraft(M);return}r?.openWorkspace&&r.openWorkspace(l,V=>Fp(V,M)).catch(V=>f(i("actionFailed")+String(V&&V.message||V)))}},[o,r,l,i]);return u?(0,q.jsxs)("div",{ref:_,className:"kanban-root kanban-view",style:z!=null?{height:z}:void 0,children:[d&&(0,q.jsx)("p",{className:"kanban-error",children:d}),m.length>0&&(0,q.jsxs)("div",{className:"kanban-warning",children:[(0,q.jsxs)("div",{className:"kanban-warning-body",children:[(0,q.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),m.map((S,P)=>(0,q.jsx)("p",{className:"kanban-warning-item",children:S},P))]}),(0,q.jsx)(Me,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,q.jsxs)(Wr,{sensors:ae,collisionDetection:Le,onDragStart:de,onDragOver:ce,onDragEnd:fe,onDragCancel:O,children:[(0,q.jsxs)("div",{className:"kanban-content",children:[(0,q.jsxs)("div",{className:"kanban-toolbar",children:[(0,q.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:v,onClick:De,children:(0,q.jsx)(nr,{className:v?"kanban-animate-spin":void 0})}),(0,q.jsxs)(To,{children:[(0,q.jsx)(Eo,{asChild:!0,children:(0,q.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,q.jsx)(lr,{className:"kanban-icon"})})}),(0,q.jsxs)($a,{align:"start",children:[(0,q.jsxs)(bt,{onClick:()=>I(!0),children:[(0,q.jsx)(rr,{className:"kanban-icon"}),i("columnEdit")]}),(0,q.jsxs)(bt,{onClick:()=>b(!0),children:[(0,q.jsx)(fo,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,q.jsxs)(To,{children:[(0,q.jsx)(Eo,{asChild:!0,children:(0,q.jsx)(Me,{variant:D?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:i("priorityFilter"),"aria-label":i("priorityFilter"),children:(0,q.jsx)(ia,{className:"kanban-icon"})})}),(0,q.jsxs)($a,{align:"start",children:[(0,q.jsxs)(bt,{onClick:()=>T(""),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:!D&&(0,q.jsx)(wt,{className:"kanban-icon"})}),i("all")]}),Wn.map(S=>(0,q.jsxs)(bt,{onClick:()=>T(S),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:D===S&&(0,q.jsx)(wt,{className:"kanban-icon"})}),(0,q.jsx)("span",{className:"kanban-priority-dot",style:{background:Jt[S].color}}),Jt[S].label]},S))]})]}),(0,q.jsxs)(To,{children:[(0,q.jsx)(Eo,{asChild:!0,children:(0,q.jsx)(Me,{variant:k!==null?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:k===null?i("labelFilter"):`${i("labelFilter")}: ${k||i("noLabel")}`,"aria-label":i("labelFilter"),children:(0,q.jsx)(fo,{className:"kanban-icon"})})}),(0,q.jsxs)($a,{align:"start",children:[(0,q.jsxs)(bt,{role:"menuitemradio","aria-checked":k===null,onSelect:()=>F(null),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:k===null&&(0,q.jsx)(wt,{className:"kanban-icon"})}),i("all")]}),(0,q.jsxs)(bt,{role:"menuitemradio","aria-checked":k==="",onSelect:()=>F(""),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:k===""&&(0,q.jsx)(wt,{className:"kanban-icon"})}),i("noLabel")]}),u.labels.map(S=>(0,q.jsxs)(bt,{role:"menuitemradio","aria-checked":k===S.name,onSelect:()=>F(S.name),children:[(0,q.jsx)("span",{className:"kanban-filter-check",children:k===S.name&&(0,q.jsx)(wt,{className:"kanban-icon"})}),(0,q.jsx)("span",{className:"kanban-label-dot",style:{background:S.color}}),S.name]},S.name))]})]})]}),(0,q.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(S=>{let P=u.cards.filter(M=>M.columnId===S.id&&(!D||M.priority===D)&&(k===null||(M.label??"")===k));return(0,q.jsx)(Tp,{column:S,cards:P,labels:u.labels,onAddCard:M=>C({card:null,columnId:M.id}),onOpenCard:M=>C({card:M,columnId:M.columnId})},S.id)})})]}),(0,q.jsx)(Yi,{children:p?(0,q.jsx)("div",{className:"kanban-drag-preview",children:(0,q.jsx)(Jl,{card:p,labels:u.labels})}):null})]}),(0,q.jsx)(kp,{open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(S=>S.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(S=>S.cardId===x.card.id):[],onOpenChange:S=>{S||C(null)},onSave:ue,onAddComment:(S,P)=>Q("addComment",{id:S,content:P}),onDelete:S=>Q("deleteCard",{id:S.id}),onChatWithAgent:oe}),(0,q.jsx)(Ep,{open:L,columns:u.columns,onOpenChange:I,onReorder:(S,P)=>{let M=u.columns.findIndex(V=>V.id===P);M>=0&&Q("moveColumn",{id:S,toIndex:M})},onRename:(S,P)=>Q("renameColumn",{id:S,title:P}),onDelete:S=>Q("deleteColumn",{id:S}),onAdd:S=>Q("addColumn",{title:S})}),(0,q.jsx)(Op,{open:w,labels:u.labels,onOpenChange:b,onAdd:(S,P)=>Q("addLabel",{name:S,color:P}),onUpdate:(S,P,M)=>Q("updateLabel",{name:S,newName:P,color:M}),onDelete:S=>Q("deleteLabel",{name:S})})]}):(0,q.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,q.jsx)("p",{className:"kanban-error",children:d}):(0,q.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Kn=require("react");function Vp({sessionId:e,inputActions:t}){let a=(0,Kn.useSyncExternalStore)(Np,_p);return(0,Kn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Bp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Wp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){Qd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>yo("boardTab")},o=>(0,ti.createElement)(Up,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,ti.createElement)(Vp,o)))}};var Gp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Gp+"]")){let e=document.createElement("style");e.setAttribute(Gp,""),e.textContent=di,document.head.appendChild(e)}var gC=Wp;
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