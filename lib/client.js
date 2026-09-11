window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var bp=Object.create;var Dr=Object.defineProperty;var Sp=Object.getOwnPropertyDescriptor;var wp=Object.getOwnPropertyNames;var yp=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty;var ri=e=>{throw TypeError(e)};var Pp=(e,t)=>{for(var a in t)Dr(e,a,{get:t[a],enumerable:!0})},ni=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of wp(t))!Rp.call(e,r)&&r!==a&&Dr(e,r,{get:()=>t[r],enumerable:!(o=Sp(t,r))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?bp(yp(e)):{},ni(t||!e||!e.__esModule?Dr(a,"default",{value:e,enumerable:!0}):a,e)),kp=e=>ni(Dr({},"__esModule",{value:!0}),e);var li=(e,t,a)=>t.has(e)||ri("Cannot "+a);var ze=(e,t,a)=>(li(e,t,"read from private field"),a?a.call(e):t.get(e)),si=(e,t,a)=>t.has(e)?ri("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),jn=(e,t,a,o)=>(li(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var bC={};Pp(bC,{default:()=>IC});module.exports=kp(bC);var ii=`/*
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

.kanban-root button,
.kanban-root input,
.kanban-root textarea,
.kanban-portal button,
.kanban-portal input,
.kanban-portal textarea {
  font: inherit;
}

.kanban-root button,
.kanban-portal button {
  color: inherit;
}

.kanban-root svg,
.kanban-portal svg {
  display: block;
  flex-shrink: 0;
}

.kanban-root p,
.kanban-root h3,
.kanban-root ol,
.kanban-portal p,
.kanban-portal h3,
.kanban-portal ol {
  margin: 0;
}

.kanban-root :focus-visible,
.kanban-portal :focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
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
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 16px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: var(--dsw-shadow-lv2);
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

.kanban-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.kanban-scroll::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--dsw-alias-scrollbar-bg-l1);
}

.kanban-scroll::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l1);
}

.kanban-scroll::-webkit-scrollbar-track {
  background: transparent;
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
}

/* Columns and cards */
.kanban-column {
  display: flex;
  width: 288px;
  min-width: 288px;
  min-height: 0;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 16px;
  outline: 2px solid transparent;
  outline-offset: 1px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: var(--dsw-shadow-lv2);
  transition: border-color 150ms ease, outline-color 150ms ease;
}

.kanban-column.is-over {
  border-color: var(--dsw-alias-brand-primary);
  outline-color: var(--dsw-alias-brand-primary);
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
  font-size: 13.5px;
}

.kanban-column-count {
  padding: 2px 6px;
  border-radius: 999px;
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
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv2);
  transition: box-shadow 200ms ease;
}

.kanban-sortable-card:hover .kanban-card {
  box-shadow: var(--dsw-shadow-lv3);
}

.kanban-sortable-card-content {
  padding: 14px;
}

.kanban-card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.kanban-card-badge {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  font: var(--dsw-font-xxs-strong-12);
  font-size: 10.5px;
  line-height: 16px;
}

.kanban-card-title {
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-strong-13);
  font-size: 13.5px;
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
  box-shadow: var(--dsw-shadow-lv3);
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

/* Primitive components */
.kanban-button {
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 8px;
  font: var(--dsw-font-s-strong-14);
  transition: transform 150ms ease, color 150ms ease, background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
}

.kanban-button:active {
  transform: scale(0.97);
}

.kanban-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.kanban-button svg {
  width: 16px;
  height: 16px;
  pointer-events: none;
}

.kanban-button--size-default {
  height: 36px;
  padding: 8px 16px;
}

.kanban-button--size-sm {
  height: 32px;
  padding: 6px 12px;
  border-radius: 6px;
  font: var(--dsw-font-xxs-strong-12);
}

.kanban-button--size-lg {
  height: 40px;
  padding: 8px 32px;
}

.kanban-button--size-icon {
  width: 32px;
  height: 32px;
  padding: 0;
}

.kanban-button--default {
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-button--ghost {
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}

.kanban-button--default:hover {
  background: var(--dsw-alias-button-primary-hover);
}

.kanban-button--destructive {
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-static-neutral-00);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-button--destructive:hover {
  background: var(--dsw-alias-state-error-secondary);
}

.kanban-button--outline {
  border-color: var(--dsw-alias-border-l1);
  background: var(--dsw-alias-bg-base);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-button--outline:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-button--secondary {
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-button--secondary:hover,
.kanban-button--ghost:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.kanban-button--ghost:active {
  background: var(--dsw-alias-button-ghost-active-fill);
}

.kanban-button--link {
  border-color: transparent;
  background: transparent;
  color: var(--dsw-alias-brand-primary);
  text-underline-offset: 4px;
}

.kanban-button--link:hover {
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

.kanban-card-content {
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

.kanban-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 2px 10px;
  font: var(--dsw-font-xxs-strong-12);
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
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  box-shadow: var(--dsw-shadow-lv1);
}

.kanban-input {
  height: 36px;
  padding: 4px 12px;
}

.kanban-textarea {
  min-height: 60px;
  padding: 8px 12px;
  resize: vertical;
}

.kanban-input::placeholder,
.kanban-textarea::placeholder {
  color: var(--dsw-alias-label-secondary);
}

.kanban-input:focus-visible,
.kanban-textarea:focus-visible {
  border-color: var(--dsw-alias-brand-primary);
  outline: none;
  box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary);
}

.kanban-input:disabled,
.kanban-textarea:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.kanban-label {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-strong-14);
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
  z-index: 50;
  inset: 0;
  background: var(--dsw-alias-bg-mask-1);
}

.kanban-dialog-overlay[data-state="open"] {
  animation: kanban-fade-in 150ms ease-out;
}

.kanban-dialog-overlay[data-state="closed"] {
  animation: kanban-fade-out 150ms ease-in;
}

.kanban-dialog-content {
  position: fixed;
  z-index: 50;
  top: 50%;
  left: 50%;
  display: grid;
  width: calc(100% - 32px);
  max-width: 512px;
  gap: 16px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  padding: 24px;
  background: var(--dsw-specific-input-major);
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  box-shadow: var(--dsw-shadow-lv3);
  transform: translate(-50%, -50%);
}

.kanban-dialog-wide {
  max-width: 576px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
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
  top: 16px;
  right: 16px;
  padding: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  cursor: pointer;
  opacity: 0.7;
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
  gap: 6px;
  text-align: center;
}

.kanban-dialog-footer {
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  justify-content: flex-end;
}

.kanban-dialog-title {
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-m-18);
  font-weight: 600;
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
  z-index: 50;
  min-width: 128px;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-inverted);
  border-radius: 8px;
  padding: 4px;
  background: var(--dsw-specific-menu);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv2);
}

.kanban-dropdown-content[data-state="open"] {
  animation: kanban-fade-in 120ms ease-out, kanban-scale-in 120ms ease-out;
}

.kanban-dropdown-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  padding: 6px 8px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: default;
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
  height: 36px;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 6px;
  padding: 8px 12px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  box-shadow: var(--dsw-shadow-lv1);
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
  z-index: 50;
  max-height: 384px;
  min-width: 128px;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-inverted);
  border-radius: 6px;
  background: var(--dsw-specific-menu);
  color: var(--dsw-alias-label-primary);
  box-shadow: var(--dsw-shadow-lv2);
}

.kanban-select-content--popper .kanban-select-viewport--popper {
  min-width: var(--radix-select-trigger-width);
  height: var(--radix-select-trigger-height);
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
  align-items: center;
  border-radius: 4px;
  padding: 6px 32px 6px 8px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  cursor: default;
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
  z-index: 50;
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
  .kanban-root *,
  .kanban-portal * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;var Js=require("react");var fe=require("react");var S=U(require("react")),Ia=require("react-dom");var be=require("react");function di(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,be.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var _o=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ga(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Mr(e){return"nodeType"in e}function Ke(e){var t,a;return e?ga(e)?e:Mr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Ar(e){let{Document:t}=Ke(e);return e instanceof t}function ao(e){return ga(e)?!1:e instanceof Ke(e).HTMLElement}function Yn(e){return e instanceof Ke(e).SVGElement}function ha(e){return e?ga(e)?e.document:Mr(e)?Ar(e)?e:ao(e)||Yn(e)?e.ownerDocument:document:document:document}var it=_o?be.useLayoutEffect:be.useEffect;function Ho(e){let t=(0,be.useRef)(e);return it(()=>{t.current=e}),(0,be.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ci(){let e=(0,be.useRef)(null),t=(0,be.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,be.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function oo(e,t){t===void 0&&(t=[e]);let a=(0,be.useRef)(e);return it(()=>{a.current!==e&&(a.current=e)},t),a}function ro(e,t){let a=(0,be.useRef)();return(0,be.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function qo(e){let t=Ho(e),a=(0,be.useRef)(null),o=(0,be.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Uo(e){let t=(0,be.useRef)();return(0,be.useEffect)(()=>{t.current=e},[e]),t.current}var $n={};function xa(e,t){return(0,be.useMemo)(()=>{if(t)return t;let a=$n[e]==null?0:$n[e]+1;return $n[e]=a,e+"-"+a},[e,t])}function fi(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var La=fi(1),Ca=fi(-1);function Mp(e){return"clientX"in e&&"clientY"in e}function no(e){if(!e)return!1;let{KeyboardEvent:t}=Ke(e.target);return t&&e instanceof t}function Ap(e){if(!e)return!1;let{TouchEvent:t}=Ke(e.target);return t&&e instanceof t}function Wo(e){if(Ap(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Mp(e)?{x:e.clientX,y:e.clientY}:null}var st=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[st.Translate.toString(e),st.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ui="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pi(e){return e.matches(ui)?e:e.querySelector(ui)}var va=U(require("react")),Tp={display:"none"};function mi(e){let{id:t,value:a}=e;return va.default.createElement("div",{id:t,style:Tp},a)}function gi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return va.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function hi(){let[e,t]=(0,va.useState)("");return{announce:(0,va.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Di=(0,S.createContext)(null);function Ep(e){let t=(0,S.useContext)(Di);(0,S.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Op(){let[e]=(0,S.useState)(()=>new Set),t=(0,S.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,S.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Fp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Bp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Np(e){let{announcements:t=Bp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Fp}=e,{announce:n,announcement:l}=hi(),s=xa("DndLiveRegion"),[i,u]=(0,S.useState)(!1);if((0,S.useEffect)(()=>{u(!0)},[]),Ep((0,S.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;t.onDragMove&&n(t.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;n(t.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;n(t.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;n(t.onDragCancel({active:f,over:g}))}}),[n,t])),!i)return null;let c=S.default.createElement(S.default.Fragment,null,S.default.createElement(mi,{id:o,value:r.draggable}),S.default.createElement(gi,{id:s,announcement:l}));return a?(0,Ia.createPortal)(c,a):c}var Ae;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ae||(Ae={}));function Er(){}function lo(e,t){return(0,S.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Fr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,S.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var vt=Object.freeze({x:0,y:0});function ll(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _p(e,t){let a=Wo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function sl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Hp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function el(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Xo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function xi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Mi=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=xi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=ll(xi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(sl)},Br=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=el(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=el(i),c=r.reduce((f,g,h)=>f+ll(u[h],g),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(sl)};function qp(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var il=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=qp(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(Hp)};function Up(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Ai=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Up(o,s)){let u=el(s).reduce((d,f)=>d+ll(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(sl)};function Wp(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ti(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:vt}function Vp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Gp=Vp(1);function Ei(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function zp(e,t,a){let o=Ei(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Kp={ignoreTransform:!1};function wa(e,t){t===void 0&&(t=Kp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ke(e).getComputedStyle(e);u&&(a=zp(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function Li(e){return wa(e,{ignoreTransform:!0})}function Xp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function jp(e,t){return t===void 0&&(t=Ke(e).getComputedStyle(e)),t.position==="fixed"}function $p(e,t){t===void 0&&(t=Ke(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function jo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Ar(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!ao(r)||Yn(r)||a.includes(r))return a;let n=Ke(e).getComputedStyle(r);return r!==e&&$p(r,n)&&a.push(r),jp(r,n)?a:o(r.parentNode)}return e?o(e):a}function Oi(e){let[t]=jo(e,1);return t??null}function Zn(e){return!_o||!e?null:ga(e)?e:Mr(e)?Ar(e)||e===ha(e).scrollingElement?window:ao(e)?e:null:null}function Fi(e){return ga(e)?e.scrollX:e.scrollLeft}function Bi(e){return ga(e)?e.scrollY:e.scrollTop}function tl(e){return{x:Fi(e),y:Bi(e)}}var Oe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Oe||(Oe={}));function Ni(e){return!_o||!e?!1:e===document.scrollingElement}function _i(e){let t={x:0,y:0},a=Ni(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Yp={x:.2,y:.2};function Zp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Yp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=_i(e),g={x:0,y:0},h={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(g.y=Oe.Backward,h.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(g.y=Oe.Forward,h.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(g.x=Oe.Forward,h.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(g.x=Oe.Backward,h.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:g,speed:h}}function Qp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Hi(e){return e.reduce((t,a)=>La(t,tl(a)),vt)}function Jp(e){return e.reduce((t,a)=>t+Fi(a),0)}function em(e){return e.reduce((t,a)=>t+Bi(a),0)}function qi(e,t){if(t===void 0&&(t=wa),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Oi(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var tm=[["x",["left","right"],Jp],["y",["top","bottom"],em]],Go=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=jo(a),r=Hi(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of tm)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},ba=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function am(e){let{EventTarget:t}=Ke(e);return e instanceof t?e:ha(e)}function Qn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var mt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(mt||(mt={}));function Ci(e){e.preventDefault()}function om(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var Ui={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},rm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},oa=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new ba(ha(a)),this.windowListeners=new ba(Ke(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(mt.Resize,this.handleCancel),this.windowListeners.add(mt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(mt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&qi(o),a(vt)}handleKeyDown(t){if(no(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Ui,coordinateGetter:l=rm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:vt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=Ca(d,c),g={x:0,y:0},{scrollableAncestors:h}=o.current;for(let m of h){let p=t.code,{isTop:L,isRight:C,isLeft:x,isBottom:v,maxScroll:I,minScroll:b}=_i(m),y=Qp(m),R={x:Math.min(p===re.Right?y.right-y.width/2:y.right,Math.max(p===re.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(p===re.Down?y.bottom-y.height/2:y.bottom,Math.max(p===re.Down?y.top:y.top+y.height/2,d.y))},P=p===re.Right&&!C||p===re.Left&&!x,T=p===re.Down&&!v||p===re.Up&&!L;if(P&&R.x!==d.x){let M=m.scrollLeft+f.x,E=p===re.Right&&M<=I.x||p===re.Left&&M>=b.x;if(E&&!f.y){m.scrollTo({left:M,behavior:s});return}E?g.x=m.scrollLeft-M:g.x=p===re.Right?m.scrollLeft-I.x:m.scrollLeft-b.x,g.x&&m.scrollBy({left:-g.x,behavior:s});break}else if(T&&R.y!==d.y){let M=m.scrollTop+f.y,E=p===re.Down&&M<=I.y||p===re.Up&&M>=b.y;if(E&&!f.x){m.scrollTo({top:M,behavior:s});return}E?g.y=m.scrollTop-M:g.y=p===re.Down?m.scrollTop-I.y:m.scrollTop-b.y,g.y&&m.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,La(Ca(d,this.referenceCoordinates),g))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};oa.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Ui,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function vi(e){return!!(e&&"distance"in e)}function Ii(e){return!!(e&&"delay"in e)}var zo=class{constructor(t,a,o){var r;o===void 0&&(o=am(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ha(l),this.documentListeners=new ba(this.document),this.listeners=new ba(o),this.windowListeners=new ba(Ke(l)),this.initialCoordinates=(r=Wo(n))!=null?r:vt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(mt.Resize,this.handleCancel),this.windowListeners.add(mt.DragStart,Ci),this.windowListeners.add(mt.VisibilityChange,this.handleCancel),this.windowListeners.add(mt.ContextMenu,Ci),this.documentListeners.add(mt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ii(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(vi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(mt.Click,om,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(mt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Wo(t))!=null?a:vt,u=Ca(r,i);if(!o&&s){if(vi(s)){if(s.tolerance!=null&&Qn(u,s.tolerance))return this.handleCancel();if(Qn(u,s.distance))return this.handleStart()}if(Ii(s)&&Qn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},nm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},ra=class extends zo{constructor(t){let{event:a}=t,o=ha(a.target);super(t,nm,o)}};ra.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var lm={move:{name:"mousemove"},end:{name:"mouseup"}},al;(function(e){e[e.RightClick=2]="RightClick"})(al||(al={}));var ol=class extends zo{constructor(t){super(t,lm,ha(t.event.target))}};ol.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===al.RightClick?!1:(o?.({event:a}),!0)}}];var Jn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},rl=class extends zo{constructor(t){super(t,Jn)}static setup(){return window.addEventListener(Jn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Jn.move.name,t)};function t(){}}};rl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Vo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Vo||(Vo={}));var Or;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Or||(Or={}));function sm(e){let{acceleration:t,activator:a=Vo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Or.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,g=um({delta:d,disabled:!n}),[h,m]=ci(),p=(0,S.useRef)({x:0,y:0}),L=(0,S.useRef)({x:0,y:0}),C=(0,S.useMemo)(()=>{switch(a){case Vo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Vo.DraggableRect:return r}},[a,r,i]),x=(0,S.useRef)(null),v=(0,S.useCallback)(()=>{let b=x.current;if(!b)return;let y=p.current.x*L.current.x,R=p.current.y*L.current.y;b.scrollBy(y,R)},[]),I=(0,S.useMemo)(()=>s===Or.TreeOrder?[...u].reverse():u,[s,u]);(0,S.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let b of I){if(o?.(b)===!1)continue;let y=u.indexOf(b),R=c[y];if(!R)continue;let{direction:P,speed:T}=Zp(b,R,C,t,f);for(let M of["x","y"])g[M][P[M]]||(T[M]=0,P[M]=0);if(T.x>0||T.y>0){m(),x.current=b,h(v,l),p.current=T,L.current=P;return}}p.current={x:0,y:0},L.current={x:0,y:0},m()},[t,v,o,m,n,l,JSON.stringify(C),JSON.stringify(g),h,u,I,c,JSON.stringify(f)])}var im={x:{[Oe.Backward]:!1,[Oe.Forward]:!1},y:{[Oe.Backward]:!1,[Oe.Forward]:!1}};function um(e){let{delta:t,disabled:a}=e,o=Uo(t);return ro(r=>{if(a||!o||!r)return im;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Oe.Backward]:r.x[Oe.Backward]||n.x===-1,[Oe.Forward]:r.x[Oe.Forward]||n.x===1},y:{[Oe.Backward]:r.y[Oe.Backward]||n.y===-1,[Oe.Forward]:r.y[Oe.Forward]||n.y===1}}},[a,t,o])}function dm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return ro(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function cm(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Ko;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ko||(Ko={}));var nl;(function(e){e.Optimized="optimized"})(nl||(nl={}));var bi=new Map;function fm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,S.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,S.useRef)(e),d=p(),f=oo(d),g=(0,S.useCallback)(function(L){L===void 0&&(L=[]),!f.current&&l(C=>C===null?L:C.concat(L.filter(x=>!C.includes(x))))},[f]),h=(0,S.useRef)(null),m=ro(L=>{if(d&&!a)return bi;if(!L||L===bi||c.current!==e||n!=null){let C=new Map;for(let x of e){if(!x)continue;if(n&&n.length>0&&!n.includes(x.id)&&x.rect.current){C.set(x.id,x.rect.current);continue}let v=x.node.current,I=v?new Go(i(v),v):null;x.rect.current=I,I&&C.set(x.id,I)}return C}return L},[e,n,a,d,i]);return(0,S.useEffect)(()=>{c.current=e},[e]),(0,S.useEffect)(()=>{d||g()},[a,d]),(0,S.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,S.useEffect)(()=>{d||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{g(),h.current=null},s))},[s,d,g,...o]),{droppableRects:m,measureDroppableContainers:g,measuringScheduled:n!=null};function p(){switch(u){case Ko.Always:return!1;case Ko.BeforeDragging:return a;default:return!a}}}function ul(e,t){return ro(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function pm(e,t){return ul(e,t)}function mm(e){let{callback:t,disabled:a}=e,o=Ho(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Nr(e){let{callback:t,disabled:a}=e,o=Ho(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function gm(e){return new Go(wa(e),e)}function Si(e,t,a){t===void 0&&(t=gm);let[o,r]=(0,S.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=mm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Nr({callback:n});return it(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function hm(e){let t=ul(e);return Ti(e,t)}var wi=[];function xm(e){let t=(0,S.useRef)(e),a=ro(o=>e?o&&o!==wi&&e&&t.current&&e.parentNode===t.current.parentNode?o:jo(e):wi,[e]);return(0,S.useEffect)(()=>{t.current=e},[e]),a}function Lm(e){let[t,a]=(0,S.useState)(null),o=(0,S.useRef)(e),r=(0,S.useCallback)(n=>{let l=Zn(n.target);l&&a(s=>s?(s.set(l,tl(l)),new Map(s)):null)},[]);return(0,S.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Zn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,tl(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Zn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,S.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>La(n,l),vt):Hi(e):vt,[e,t])}function yi(e,t){t===void 0&&(t=[]);let a=(0,S.useRef)(null);return(0,S.useEffect)(()=>{a.current=null},t),(0,S.useEffect)(()=>{let o=e!==vt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?Ca(e,a.current):vt}function Cm(e){(0,S.useEffect)(()=>{if(!_o)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function vm(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Wi(e){return(0,S.useMemo)(()=>e?Xp(e):null,[e])}var Ri=[];function Im(e,t){t===void 0&&(t=wa);let[a]=e,o=Wi(a?Ke(a):null),[r,n]=(0,S.useState)(Ri);function l(){n(()=>e.length?e.map(i=>Ni(i)?o:new Go(t(i),i)):Ri)}let s=Nr({callback:l});return it(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Vi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return ao(t)?t:e}function bm(e){let{measure:t}=e,[a,o]=(0,S.useState)(null),r=(0,S.useCallback)(u=>{for(let{target:c}of u)if(ao(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Nr({callback:r}),l=(0,S.useCallback)(u=>{let c=Vi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=qo(l);return(0,S.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var Sm=[{sensor:ra,options:{}},{sensor:oa,options:{}}],wm={current:{}},Tr={draggable:{measure:Li},droppable:{measure:Li,strategy:Ko.WhileDragging,frequency:nl.Optimized},dragOverlay:{measure:wa}},Sa=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},ym={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Sa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Er},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Tr,measureDroppableContainers:Er,windowRect:null,measuringScheduled:!1},Gi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Er,draggableNodes:new Map,over:null,measureDroppableContainers:Er},$o=(0,S.createContext)(Gi),zi=(0,S.createContext)(ym);function Rm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Sa}}}function Pm(e,t){switch(t.type){case Ae.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ae.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Ae.DragEnd:case Ae.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ae.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Sa(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Ae.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new Sa(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Ae.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Sa(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function km(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,S.useContext)($o),n=Uo(o),l=Uo(a?.id);return(0,S.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!no(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=pi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Ki(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Dm(e){return(0,S.useMemo)(()=>({draggable:{...Tr.draggable,...e?.draggable},droppable:{...Tr.droppable,...e?.droppable},dragOverlay:{...Tr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Mm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,S.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;it(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ti(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Oi(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var _r=(0,S.createContext)({...vt,scaleX:1,scaleY:1}),aa;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(aa||(aa={}));var Hr=(0,S.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=Sm,collisionDetection:d=il,measuring:f,modifiers:g,...h}=t,m=(0,S.useReducer)(Pm,void 0,Rm),[p,L]=m,[C,x]=Op(),[v,I]=(0,S.useState)(aa.Uninitialized),b=v===aa.Initialized,{draggable:{active:y,nodes:R,translate:P},droppable:{containers:T}}=p,M=y!=null?R.get(y):null,E=(0,S.useRef)({initial:null,translated:null}),N=(0,S.useMemo)(()=>{var Ge;return y!=null?{id:y,data:(Ge=M?.data)!=null?Ge:wm,rect:E}:null},[y,M]),H=(0,S.useRef)(null),[Y,j]=(0,S.useState)(null),[_,G]=(0,S.useState)(null),z=oo(h,Object.values(h)),A=xa("DndDescribedBy",l),Le=(0,S.useMemo)(()=>T.getEnabled(),[T]),K=Dm(f),{droppableRects:Q,measureDroppableContainers:Ce,measuringScheduled:Re}=fm(Le,{dragging:b,dependencies:[P.x,P.y],config:K.droppable}),ie=dm(R,y),Pe=(0,S.useMemo)(()=>_?Wo(_):null,[_]),F=Ip(),ee=pm(ie,K.draggable.measure);Mm({activeNode:y!=null?R.get(y):null,config:F.layoutShiftCompensation,initialRect:ee,measure:K.draggable.measure});let X=Si(ie,K.draggable.measure,ee),le=Si(ie?ie.parentElement:null),oe=(0,S.useRef)({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),w=T.getNodeFor((a=oe.current.over)==null?void 0:a.id),k=bm({measure:K.dragOverlay.measure}),O=(o=k.nodeRef.current)!=null?o:ie,q=b?(r=k.rect)!=null?r:X:null,Me=!!(k.nodeRef.current&&k.rect),ue=hm(Me?null:X),ge=Wi(O?Ke(O):null),ve=xm(b?w??ie:null),ot=Im(ve),Ze=Ki(g,{transform:{x:P.x-ue.x,y:P.y-ue.y,scaleX:1,scaleY:1},activatorEvent:_,active:N,activeNodeRect:X,containerNodeRect:le,draggingNodeRect:q,over:oe.current.over,overlayNodeRect:k.rect,scrollableAncestors:ve,scrollableAncestorRects:ot,windowRect:ge}),zn=Pe?La(Pe,P):null,Ht=Lm(ve),kr=yi(Ht),gp=yi(Ht,[X]),Ja=La(Ze,kr),eo=q?Gp(q,Ze):null,Oo=N&&eo?d({active:N,collisionRect:eo,droppableRects:Q,droppableContainers:Le,pointerCoordinates:zn}):null,ei=Xo(Oo,"id"),[Qt,ti]=(0,S.useState)(null),hp=Me?Ze:La(Ze,gp),xp=Wp(hp,(n=Qt?.rect)!=null?n:null,X),Kn=(0,S.useRef)(null),ai=(0,S.useCallback)((Ge,rt)=>{let{sensor:nt,options:Jt}=rt;if(H.current==null)return;let pt=R.get(H.current);if(!pt)return;let lt=Ge.nativeEvent,Mt=new nt({active:H.current,activeNode:pt,event:lt,options:Jt,context:oe,onAbort(He){if(!R.get(He))return;let{onDragAbort:At}=z.current,qt={id:He};At?.(qt),C({type:"onDragAbort",event:qt})},onPending(He,ea,At,qt){if(!R.get(He))return;let{onDragPending:Bo}=z.current,ta={id:He,constraint:ea,initialCoordinates:At,offset:qt};Bo?.(ta),C({type:"onDragPending",event:ta})},onStart(He){let ea=H.current;if(ea==null)return;let At=R.get(ea);if(!At)return;let{onDragStart:qt}=z.current,Fo={activatorEvent:lt,active:{id:ea,data:At.data,rect:E}};(0,Ia.unstable_batchedUpdates)(()=>{qt?.(Fo),I(aa.Initializing),L({type:Ae.DragStart,initialCoordinates:He,active:ea}),C({type:"onDragStart",event:Fo}),j(Kn.current),G(lt)})},onMove(He){L({type:Ae.DragMove,coordinates:He})},onEnd:to(Ae.DragEnd),onCancel:to(Ae.DragCancel)});Kn.current=Mt;function to(He){return async function(){let{active:At,collisions:qt,over:Fo,scrollAdjustedTranslate:Bo}=oe.current,ta=null;if(At&&Bo){let{cancelDrop:No}=z.current;ta={activatorEvent:lt,active:At,collisions:qt,delta:Bo,over:Fo},He===Ae.DragEnd&&typeof No=="function"&&await Promise.resolve(No(ta))&&(He=Ae.DragCancel)}H.current=null,(0,Ia.unstable_batchedUpdates)(()=>{L({type:He}),I(aa.Uninitialized),ti(null),j(null),G(null),Kn.current=null;let No=He===Ae.DragEnd?"onDragEnd":"onDragCancel";if(ta){let Xn=z.current[No];Xn?.(ta),C({type:No,event:ta})}})}}},[R]),Lp=(0,S.useCallback)((Ge,rt)=>(nt,Jt)=>{let pt=nt.nativeEvent,lt=R.get(Jt);if(H.current!==null||!lt||pt.dndKit||pt.defaultPrevented)return;let Mt={active:lt};Ge(nt,rt.options,Mt)===!0&&(pt.dndKit={capturedBy:rt.sensor},H.current=Jt,ai(nt,rt))},[R,ai]),oi=cm(c,Lp);Cm(c),it(()=>{X&&v===aa.Initializing&&I(aa.Initialized)},[X,v]),(0,S.useEffect)(()=>{let{onDragMove:Ge}=z.current,{active:rt,activatorEvent:nt,collisions:Jt,over:pt}=oe.current;if(!rt||!nt)return;let lt={active:rt,activatorEvent:nt,collisions:Jt,delta:{x:Ja.x,y:Ja.y},over:pt};(0,Ia.unstable_batchedUpdates)(()=>{Ge?.(lt),C({type:"onDragMove",event:lt})})},[Ja.x,Ja.y]),(0,S.useEffect)(()=>{let{active:Ge,activatorEvent:rt,collisions:nt,droppableContainers:Jt,scrollAdjustedTranslate:pt}=oe.current;if(!Ge||H.current==null||!rt||!pt)return;let{onDragOver:lt}=z.current,Mt=Jt.get(ei),to=Mt&&Mt.rect.current?{id:Mt.id,rect:Mt.rect.current,data:Mt.data,disabled:Mt.disabled}:null,He={active:Ge,activatorEvent:rt,collisions:nt,delta:{x:pt.x,y:pt.y},over:to};(0,Ia.unstable_batchedUpdates)(()=>{ti(to),lt?.(He),C({type:"onDragOver",event:He})})},[ei]),it(()=>{oe.current={activatorEvent:_,active:N,activeNode:ie,collisionRect:eo,collisions:Oo,droppableRects:Q,draggableNodes:R,draggingNode:O,draggingNodeRect:q,droppableContainers:T,over:Qt,scrollableAncestors:ve,scrollAdjustedTranslate:Ja},E.current={initial:q,translated:eo}},[N,ie,Oo,eo,R,O,q,Q,T,Qt,ve,Ja]),sm({...F,delta:P,draggingRect:eo,pointerCoordinates:zn,scrollableAncestors:ve,scrollableAncestorRects:ot});let Cp=(0,S.useMemo)(()=>({active:N,activeNode:ie,activeNodeRect:X,activatorEvent:_,collisions:Oo,containerNodeRect:le,dragOverlay:k,draggableNodes:R,droppableContainers:T,droppableRects:Q,over:Qt,measureDroppableContainers:Ce,scrollableAncestors:ve,scrollableAncestorRects:ot,measuringConfiguration:K,measuringScheduled:Re,windowRect:ge}),[N,ie,X,_,Oo,le,k,R,T,Q,Qt,Ce,ve,ot,K,Re,ge]),vp=(0,S.useMemo)(()=>({activatorEvent:_,activators:oi,active:N,activeNodeRect:X,ariaDescribedById:{draggable:A},dispatch:L,draggableNodes:R,over:Qt,measureDroppableContainers:Ce}),[_,oi,N,X,L,A,R,Qt,Ce]);return S.default.createElement(Di.Provider,{value:x},S.default.createElement($o.Provider,{value:vp},S.default.createElement(zi.Provider,{value:Cp},S.default.createElement(_r.Provider,{value:xp},u)),S.default.createElement(km,{disabled:s?.restoreFocus===!1})),S.default.createElement(Np,{...s,hiddenTextDescribedById:A}));function Ip(){let Ge=Y?.autoScrollEnabled===!1,rt=typeof i=="object"?i.enabled===!1:i===!1,nt=b&&!Ge&&!rt;return typeof i=="object"?{...i,enabled:nt}:{enabled:nt}}}),Am=(0,S.createContext)(null),Pi="button",Tm="Draggable";function Xi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=xa(Tm),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,S.useContext)($o),{role:g=Pi,roleDescription:h="draggable",tabIndex:m=0}=r??{},p=i?.id===t,L=(0,S.useContext)(p?_r:Am),[C,x]=qo(),[v,I]=qo(),b=vm(l,t),y=oo(a);it(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:v,data:y}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,S.useMemo)(()=>({role:g,tabIndex:m,"aria-disabled":o,"aria-pressed":p&&g===Pi?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,g,m,p,h,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:p,listeners:o?void 0:b,node:C,over:f,setNodeRef:x,setActivatorNodeRef:I,transform:L}}function Yo(){return(0,S.useContext)(zi)}var Em="Droppable",Om={timeout:25};function qr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=xa(Em),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,S.useContext)($o),c=(0,S.useRef)({disabled:a}),d=(0,S.useRef)(!1),f=(0,S.useRef)(null),g=(0,S.useRef)(null),{disabled:h,updateMeasurementsFor:m,timeout:p}={...Om,...r},L=oo(m??o),C=(0,S.useCallback)(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(L.current)?L.current:[L.current]),g.current=null},p)},[p]),x=Nr({callback:C,disabled:h||!l}),v=(0,S.useCallback)((R,P)=>{x&&(P&&(x.unobserve(P),d.current=!1),R&&x.observe(R))},[x]),[I,b]=qo(v),y=oo(t);return(0,S.useEffect)(()=>{!x||!I.current||(x.disconnect(),d.current=!1,x.observe(I.current))},[I,x]),(0,S.useEffect)(()=>(s({type:Ae.RegisterDroppable,element:{id:o,key:n,disabled:a,node:I,rect:f,data:y}}),()=>s({type:Ae.UnregisterDroppable,key:n,id:o})),[o]),(0,S.useEffect)(()=>{a!==c.current.disabled&&(s({type:Ae.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:I,over:i,setNodeRef:b}}function Fm(e){let{animation:t,children:a}=e,[o,r]=(0,S.useState)(null),[n,l]=(0,S.useState)(null),s=Uo(a);return!a&&!o&&s&&r(s),it(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),S.default.createElement(S.default.Fragment,null,a,o?(0,S.cloneElement)(o,{ref:l}):null)}var Bm={x:0,y:0,scaleX:1,scaleY:1};function Nm(e){let{children:t}=e;return S.default.createElement($o.Provider,{value:Gi},S.default.createElement(_r.Provider,{value:Bm},t))}var _m={position:"fixed",touchAction:"none"},Hm=e=>no(e)?"transform 250ms ease":void 0,qm=(0,S.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=Hm}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={..._m,width:s.width,height:s.height,top:s.top,left:s.left,transform:st.Transform.toString(d),transformOrigin:r&&o?_p(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return S.default.createElement(a,{className:l,style:f,ref:t},n)}),Um=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Wm=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:st.Transform.toString(t)},{transform:st.Transform.toString(a)}]},Vm={duration:250,easing:"ease",keyframes:Wm,sideEffects:Um({styles:{active:{opacity:"0"}}})};function Gm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Ho((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Vi(l);if(!u)return;let{transform:c}=Ke(l).getComputedStyle(l),d=Ei(c);if(!d)return;let f=typeof t=="function"?t:zm(t);return qi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function zm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Vm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},g=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[h]=g,m=g[g.length-1];if(JSON.stringify(h)===JSON.stringify(m))return;let p=o?.({active:l,dragOverlay:s,...u}),L=s.node.animate(g,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{L.onfinish=()=>{p?.(),C()}})}}var ki=0;function Km(e){return(0,S.useMemo)(()=>{if(e!=null)return ki++,ki},[e])}var ji=S.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggableNodes:h,droppableContainers:m,dragOverlay:p,over:L,measuringConfiguration:C,scrollableAncestors:x,scrollableAncestorRects:v,windowRect:I}=Yo(),b=(0,S.useContext)(_r),y=Km(d?.id),R=Ki(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggingNodeRect:p.rect,over:L,overlayNodeRect:p.rect,scrollableAncestors:x,scrollableAncestorRects:v,transform:b,windowRect:I}),P=ul(f),T=Gm({config:o,draggableNodes:h,droppableContainers:m,measuringConfiguration:C}),M=P?p.setRef:void 0;return S.default.createElement(Nm,null,S.default.createElement(Fm,{animation:T},d&&y?S.default.createElement(qm,{key:y,id:d.id,ref:M,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var Se=U(require("react"));function $i(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Xm(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Ur(e){return e!==null&&e>=0}function jm(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function $m(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Yi=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=$i(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Wr={scaleX:1,scaleY:1},Gr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Wr}:null}let i=Ym(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Wr}:r<a&&r>=l?{x:0,y:s.height+i,...Wr}:{x:0,y:0,...Wr}};function Ym(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Zi="Sortable",Qi=Se.default.createContext({activeIndex:-1,containerId:Zi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Yi,disabled:{draggable:!1,droppable:!1}});function zr(e){let{children:t,id:a,items:o,strategy:r=Yi,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=Yo(),d=xa(Zi,a),f=s.rect!==null,g=(0,Se.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),h=l!=null,m=l?g.indexOf(l.id):-1,p=u?g.indexOf(u.id):-1,L=(0,Se.useRef)(g),C=!jm(g,L.current),x=p!==-1&&m===-1||C,v=$m(n);it(()=>{C&&h&&c(g)},[C,g,h,c]),(0,Se.useEffect)(()=>{L.current=g},[g]);let I=(0,Se.useMemo)(()=>({activeIndex:m,containerId:d,disabled:v,disableTransforms:x,items:g,overIndex:p,useDragOverlay:f,sortedRects:Xm(g,i),strategy:r}),[m,d,v.draggable,v.droppable,x,g,p,i,f,r]);return Se.default.createElement(Qi.Provider,{value:I},t)}var Zm=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return $i(a,o,r).indexOf(t)},Qm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Jm={duration:200,easing:"ease"},Ji="transform",eg=st.Transition.toString({property:Ji,duration:0,easing:"linear"}),tg={roleDescription:"sortable"};function ag(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Se.useState)(null),s=(0,Se.useRef)(a);return it(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=wa(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Se.useEffect)(()=>{n&&l(null)},[n]),n}function Kr(e){let{animateLayoutChanges:t=Qm,attributes:a,disabled:o,data:r,getNewIndex:n=Zm,id:l,strategy:s,resizeObserverConfig:i,transition:u=Jm}=e,{items:c,containerId:d,activeIndex:f,disabled:g,disableTransforms:h,sortedRects:m,overIndex:p,useDragOverlay:L,strategy:C}=(0,Se.useContext)(Qi),x=og(o,g),v=c.indexOf(l),I=(0,Se.useMemo)(()=>({sortable:{containerId:d,index:v,items:c},...r}),[d,r,v,c]),b=(0,Se.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:P,setNodeRef:T}=qr({id:l,data:I,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:M,activatorEvent:E,activeNodeRect:N,attributes:H,setNodeRef:Y,listeners:j,isDragging:_,over:G,setActivatorNodeRef:z,transform:A}=Xi({id:l,data:I,attributes:{...tg,...a},disabled:x.draggable}),Le=di(T,Y),K=!!M,Q=K&&!h&&Ur(f)&&Ur(p),Ce=!L&&_,Re=Ce&&Q?A:null,Pe=Q?Re??(s??C)({rects:m,activeNodeRect:N,activeIndex:f,overIndex:p,index:v}):null,F=Ur(f)&&Ur(p)?n({id:l,items:c,activeIndex:f,overIndex:p}):v,ee=M?.id,X=(0,Se.useRef)({activeId:ee,items:c,newIndex:F,containerId:d}),le=c!==X.current.items,oe=t({active:M,containerId:d,isDragging:_,isSorting:K,id:l,index:v,items:c,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:u,wasDragging:X.current.activeId!=null}),w=ag({disabled:!oe,index:v,node:R,rect:y});return(0,Se.useEffect)(()=>{K&&X.current.newIndex!==F&&(X.current.newIndex=F),d!==X.current.containerId&&(X.current.containerId=d),c!==X.current.items&&(X.current.items=c)},[K,F,d,c]),(0,Se.useEffect)(()=>{if(ee===X.current.activeId)return;if(ee!=null&&X.current.activeId==null){X.current.activeId=ee;return}let O=setTimeout(()=>{X.current.activeId=ee},50);return()=>clearTimeout(O)},[ee]),{active:M,activeIndex:f,attributes:H,data:I,rect:y,index:v,newIndex:F,items:c,isOver:P,isSorting:K,isDragging:_,listeners:j,node:R,overIndex:p,over:G,setNodeRef:Le,setActivatorNodeRef:z,setDroppableNodeRef:T,setDraggableNodeRef:Y,transform:w??Pe,transition:k()};function k(){if(w||le&&X.current.newIndex===v)return eg;if(!(Ce&&!no(E)||!u)&&(K||oe))return st.Transition.toString({...u,property:Ji})}}function og(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Vr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var rg=[re.Down,re.Right,re.Up,re.Left],Xr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(rg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=Br({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Xo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),g=f?r.get(f.id):null,h=f?.node.current;if(h&&g&&d&&f){let p=jo(h).some((b,y)=>s[y]!==b),L=eu(d,f),C=ng(d,f),x=p||!L?{x:0,y:0}:{x:C?o.width-g.width:0,y:C?o.height-g.height:0},v={x:g.left,y:g.top};return x.x&&x.y?v:Ca(v,x)}}}};function eu(e,t){return!Vr(e)||!Vr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function ng(e,t){return!Vr(e)||!Vr(t)||!eu(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Yr=require("react");var jr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var tu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var au=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var dl=e=>{let t=au(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Zo=require("react");var $r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var ou=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var so=require("react");var lg=(0,so.createContext)({});var ru=()=>(0,so.useContext)(lg);var nu=(0,Zo.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:g=""}=ru()??{},h=o??d?Number(a??c)*24/Number(t??u):a??c;return(0,Zo.createElement)("svg",{ref:i,...$r,width:t??u??$r.width,height:t??u??$r.height,stroke:e??f,strokeWidth:h,className:jr("lucide",g,r),...!n&&!ou(s)&&{"aria-hidden":"true"},...s},[...l.map(([m,p])=>(0,Zo.createElement)(m,p)),...Array.isArray(n)?n:[n]])});var de=(e,t)=>{let a=(0,Yr.forwardRef)(({className:o,...r},n)=>(0,Yr.createElement)(nu,{ref:n,iconNode:t,className:jr(`lucide-${tu(dl(e))}`,`lucide-${e}`,o),...r}));return a.displayName=dl(e),a};var sg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],na=de("check",sg);var ig=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],io=de("chevron-down",ig);var ug=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Qo=de("chevron-up",ug);var dg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],la=de("funnel",dg);var cg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Jo=de("grip-vertical",cg);var fg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],er=de("list",fg);var pg=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ya=de("message-square",pg);var mg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ut=de("plus",mg);var gg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tr=de("refresh-cw",gg);var hg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ar=de("send",hg);var xg=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],or=de("settings-2",xg);var Lg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],rr=de("tag",Lg);var Cg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wt=de("trash-2",Cg);var vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nr=de("x",vg);var Ya=require("react");var hu=U(require("react"),1);var qe=U(require("react"),1);var lu=U(require("react"),1),Ig=Object.defineProperty,fl=(e,t)=>Ig(e,"name",{value:t,configurable:!0});function cl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}fl(cl,"setRef");function su(...e){return t=>{let a=!1,o=e.map(r=>{let n=cl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():cl(e[r],null)}}}}fl(su,"composeRefs");function J(...e){return lu.useCallback(su(...e),e)}fl(J,"useComposedRefs");var bg=Object.defineProperty,It=(e,t)=>bg(e,"name",{value:t,configurable:!0});function Xe(e){let t=qe.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];pl(r)&&typeof Zr=="function"&&(r=Zr(r._payload)),qe.Children.forEach(r,f=>{if(fu(f)){s=!0;let g=f,h="child"in g.props?g.props.child:g.props.children;pl(h)&&typeof Zr=="function"&&(h=Zr(h._payload)),l=wg(g,h),i.push(l?.props?.children)}else i.push(f)}),l?l=qe.cloneElement(l,void 0,i):!s&&qe.Children.count(r)===1&&qe.isValidElement(r)&&(l=r);let u=l?cu(l):void 0,c=J(o,u);if(!l){if(r||r===0)throw new Error(s?Pg(e):Rg(e));return r}let d=du(n,l.props??{});return l.type!==qe.Fragment&&(d.ref=o?c:u),qe.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}It(Xe,"createSlot");var iu=Xe("Slot"),uu=Symbol.for("radix.slottable");function Sg(e){let t=It(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=uu,t}It(Sg,"createSlottable");var wg=It((e,t)=>{if("child"in e.props){let a=e.props.child;return qe.isValidElement(a)?qe.cloneElement(a,void 0,e.props.children(a.props.children)):null}return qe.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function du(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}It(du,"mergeProps");function cu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}It(cu,"getElementRef");function fu(e){return qe.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===uu}It(fu,"isSlottable");var yg=Symbol.for("react.lazy");function pl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===yg&&"_payload"in e&&pu(e._payload)}It(pl,"isLazyComponent");function pu(e){return typeof e=="object"&&e!==null&&"then"in e}It(pu,"isPromiseLike");var Rg=It(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Pg=It(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Zr=qe[" use ".trim().toString()];function mu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=mu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function gu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=mu(e))&&(o&&(o+=" "),o+=t);return o}function te(...e){return gu(e)}var xu=require("react/jsx-runtime");function kg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return te("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Te=hu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,xu.jsx)(o?iu:"button",{className:kg({variant:t,size:a,className:e}),ref:n,...r}));Te.displayName="Button";var fr=U(require("react"),1);var xe=U(require("react"),1);var Dg=Object.defineProperty,uo=(e,t)=>Dg(e,"name",{value:t,configurable:!0}),Lu=!!(typeof window<"u"&&window.document&&window.document.createElement);function W(e,t,{checkForDefaultPrevented:a=!0}={}){return uo(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}uo(W,"composeEventHandlers");function Mg(e){if(!Lu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}uo(Mg,"getOwnerWindow");function ml(e){if(!Lu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}uo(ml,"getOwnerDocument");function Cu(e,t=!1){let{activeElement:a}=ml(e);if(!a?.nodeName)return null;if(vu(a)&&a.contentDocument)return Cu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=ml(a).getElementById(o);if(r)return r}}return a}uo(Cu,"getActiveElement");function vu(e){return e.tagName==="IFRAME"}uo(vu,"isFrame");var ht=U(require("react"),1),gl=require("react/jsx-runtime"),Ag=Object.defineProperty,gt=(e,t)=>Ag(e,"name",{value:t,configurable:!0});function Tg(e,t){let a=ht.createContext(t);a.displayName=e+"Context";let o=gt(n=>{let{children:l,...s}=n,i=ht.useMemo(()=>s,Object.values(s));return(0,gl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=ht.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return gt(r,"useContext"),[o,r]}gt(Tg,"createContext");function Ue(e,t=[]){let a=[];function o(n,l){let s=ht.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=gt(d=>{let{scope:f,children:g,...h}=d,m=f?.[e]?.[i]||s,p=ht.useMemo(()=>h,Object.values(h));return(0,gl.jsx)(m.Provider,{value:p,children:g})},"Provider");u.displayName=n+"Provider";function c(d,f,g={}){let{optional:h=!1}=g,m=f?.[e]?.[i]||s,p=ht.useContext(m);if(p)return p;if(l!==void 0)return l;if(!h)throw new Error(`\`${d}\` must be used within \`${n}\``)}return gt(c,"useContext"),[u,c]}gt(o,"createContext");let r=gt(()=>{let n=a.map(l=>ht.createContext(l));return gt(function(s){let i=s?.[e]||n;return ht.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Iu(r,...t)]}gt(Ue,"createContextScope");function Iu(...e){let t=e[0];if(e.length===1)return t;let a=gt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return gt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return ht.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}gt(Iu,"composeContextScopes");var hl=U(require("react"),1);var bu=U(require("react"),1),se=globalThis?.document?bu.useLayoutEffect:()=>{};var Eg=Object.defineProperty,Og=(e,t)=>Eg(e,"name",{value:t,configurable:!0}),Fg=hl[" useId ".trim().toString()]||(()=>{}),Bg=0;function ut(e){let[t,a]=hl.useState(Fg());return se(()=>{e||a(o=>o??String(Bg++))},[e]),e||(t?`radix-${t}`:"")}Og(ut,"useId");var xt=U(require("react"),1);var Qr=!1;var bt=U(require("react"),1);var co=U(require("react"),1),Ng=Object.defineProperty,_g=(e,t)=>Ng(e,"name",{value:t,configurable:!0}),Su=co[" useEffectEvent ".trim().toString()],wu=co[" useInsertionEffect ".trim().toString()];function xl(e){if(typeof Su=="function")return Su(e);let t=co.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof wu=="function"?wu(()=>{t.current=e}):se(()=>{t.current=e}),co.useMemo(()=>((...a)=>t.current?.(...a)),[])}_g(xl,"useEffectEvent");var Hg=Object.defineProperty,lr=(e,t)=>Hg(e,"name",{value:t,configurable:!0}),qg=xt[" useInsertionEffect ".trim().toString()]||se;function Tt({prop:e,defaultProp:t,onChange:a=lr(()=>{},"onChange"),caller:o}){let[r,n,l]=Ru({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Qr){let c=xt.useRef(e!==void 0);xt.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=xt.useCallback(c=>{if(s){let d=Pu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}lr(Tt,"useControllableState");function Ru({defaultProp:e,onChange:t}){let[a,o]=xt.useState(e),r=xt.useRef(a),n=xt.useRef(t);return qg(()=>{n.current=t},[t]),xt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}lr(Ru,"useUncontrolledState");function Pu(e){return typeof e=="function"}lr(Pu,"isFunction");var yu=Symbol("RADIX:SYNC_STATE");function Ug(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=xl(l);if(Qr){let p=bt.useRef(r!==void 0);bt.useEffect(()=>{let L=p.current;L!==i&&console.warn(`${s} is changing from ${L?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=bt.useReducer((p,L)=>{if(L.type===yu)return{...p,state:L.state};let C=e(p,L);return i&&!Object.is(C.state,p.state)&&u(C.state),C},...c),g=d.state,h=bt.useRef(g);bt.useEffect(()=>{h.current!==g&&(h.current=g,i||u(g))},[g,h,i]);let m=bt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return bt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:yu,state:r})},[r,d.state,i]),[m,f]}lr(Ug,"useControllableStateReducer");var ce=U(require("react"),1);var ku=U(require("react"),1),Du=U(require("react-dom"),1);var Mu=require("react/jsx-runtime"),Wg=Object.defineProperty,Vg=(e,t)=>Wg(e,"name",{value:t,configurable:!0}),Gg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ae=Gg.reduce((e,t)=>{let a=Xe(`Primitive.${t}`),o=ku.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Mu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function sr(e,t){e&&Du.flushSync(()=>e.dispatchEvent(t))}Vg(sr,"dispatchDiscreteCustomEvent");var fo=U(require("react"),1),zg=Object.defineProperty,Kg=(e,t)=>zg(e,"name",{value:t,configurable:!0});function Fe(e){let t=fo.useRef(e);return fo.useEffect(()=>{t.current=e}),fo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Kg(Fe,"useCallbackRef");var Tu=require("react/jsx-runtime"),Xg=Object.defineProperty,Be=(e,t)=>Xg(e,"name",{value:t,configurable:!0}),Ll="dismissableLayer.update",jg="dismissableLayer.pointerDownOutside",$g="dismissableLayer.focusOutside",Au,Eu=ce.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),po=ce.forwardRef(Be(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ce.useContext(Eu),[f,g]=ce.useState(null),h=f?.ownerDocument??globalThis?.document,[,m]=ce.useState({}),p=J(a,g),L=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),x=C?L.indexOf(C):-1,v=f?L.indexOf(f):-1,I=d.layersWithOutsidePointerEventsDisabled.size>0,b=v>=x,y=ce.useRef(!1),R=Ou(E=>{l?.(E),i?.(E),E.defaultPrevented||u?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ce.useCallback(E=>{if(!(E instanceof Node))return!1;let N=[...d.branches].some(H=>H.contains(E));return b&&!N},[d.branches,b])}),P=Fu(E=>{if(r&&y.current)return;let N=E.target;[...d.branches].some(Y=>Y.contains(N))||(s?.(E),i?.(E),E.defaultPrevented||u?.())},h),T=f?v===L.length-1:!1,M=Fe(E=>{E.key==="Escape"&&(n?.(E),!E.defaultPrevented&&u&&(E.preventDefault(),u()))});return ce.useEffect(()=>{if(T)return h.addEventListener("keydown",M,{capture:!0}),()=>h.removeEventListener("keydown",M,{capture:!0})},[h,T,M]),ce.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Au=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Cl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Au))}},[f,h,o,d]),ce.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Cl())},[f,d]),ce.useEffect(()=>{let E=Be(()=>m({}),"handleUpdate");return document.addEventListener(Ll,E),()=>document.removeEventListener(Ll,E)},[]),(0,Tu.jsx)(ae.div,{...c,ref:p,style:{pointerEvents:I?b?"auto":"none":void 0,...t.style},onFocusCapture:W(t.onFocusCapture,P.onFocusCapture),onBlurCapture:W(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:W(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function vl(){let e=ce.useContext(Eu),[t,a]=ce.useState(null);return ce.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Be(vl,"useDismissableLayerSurface");var Yg=Be(()=>!0,"IS_TRUE");function Ou(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=Yg}=t,s=Fe(e),i=ce.useRef(!1),u=ce.useRef(!1),c=ce.useRef(new Map),d=ce.useRef(()=>{});return ce.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Be(f,"resetOutsideInteraction");function g(){return Array.from(c.current.values()).some(Boolean)}Be(g,"isOutsideInteractionIntercepted");function h(x){if(!u.current)return;let v=x.target;v instanceof Node&&[...n].some(b=>b.contains(v))||c.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Be(h,"handleInteractionCapture");function m(x){u.current&&c.current.set(x.type,!1)}Be(m,"handleInteractionBubble");let p=Be(x=>{if(x.target&&!i.current){let I=function(){a.removeEventListener("click",d.current);let y=g();f(),y||Il(jg,s,b,{discrete:!0})};var v=I;if(Be(I,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:x};u.current=!0,r.current=o&&x.button===0,c.current.clear(),!o||x.button!==0?I():(a.removeEventListener("click",d.current),d.current=I,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),L=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let x of L)a.addEventListener(x,h,!0),a.addEventListener(x,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",p),a.removeEventListener("click",d.current);for(let x of L)a.removeEventListener(x,h,!0),a.removeEventListener(x,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Be(()=>i.current=!0,"onPointerDownCapture")}}Be(Ou,"usePointerDownOutside");function Fu(e,t=globalThis?.document){let a=Fe(e),o=ce.useRef(!1);return ce.useEffect(()=>{let r=Be(n=>{n.target&&!o.current&&Il($g,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Be(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Be(()=>o.current=!1,"onBlurCapture")}}Be(Fu,"useFocusOutside");function Cl(){let e=new CustomEvent(Ll);document.dispatchEvent(e)}Be(Cl,"dispatchUpdate");function Il(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?sr(r,n):r.dispatchEvent(n)}Be(Il,"handleAndDispatchCustomEvent");var Lt=U(require("react"),1);var _u=require("react/jsx-runtime"),Zg=Object.defineProperty,Qe=(e,t)=>Zg(e,"name",{value:t,configurable:!0}),bl="focusScope.autoFocusOnMount",Sl="focusScope.autoFocusOnUnmount",Bu={bubbles:!1,cancelable:!0},mo=Lt.forwardRef(Qe(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=Lt.useState(null),c=Fe(n),d=Fe(l),f=Lt.useRef(null),g=J(a,u),h=Lt.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Lt.useEffect(()=>{if(r){let x=function(y){if(h.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Vt(f.current,{select:!0})},v=function(y){if(h.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Vt(f.current,{select:!0}))},I=function(y){if(document.activeElement===document.body)for(let P of y)P.removedNodes.length>0&&Vt(i)};var p=x,L=v,C=I;Qe(x,"handleFocusIn"),Qe(v,"handleFocusOut"),Qe(I,"handleMutations"),document.addEventListener("focusin",x),document.addEventListener("focusout",v);let b=new MutationObserver(I);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",v),b.disconnect()}}},[r,i,h.paused]),Lt.useEffect(()=>{if(i){Nu.add(h);let p=document.activeElement;if(!i.contains(p)){let C=new CustomEvent(bl,Bu);i.addEventListener(bl,c),i.dispatchEvent(C),C.defaultPrevented||(Hu(Gu(Rl(i)),{select:!0}),document.activeElement===p&&Vt(i))}return()=>{i.removeEventListener(bl,c),setTimeout(()=>{let C=new CustomEvent(Sl,Bu);i.addEventListener(Sl,d),i.dispatchEvent(C),C.defaultPrevented||Vt(p??document.body,{select:!0}),i.removeEventListener(Sl,d),Nu.remove(h)},0)}}},[i,c,d,h]);let m=Lt.useCallback(p=>{if(!o&&!r||h.paused)return;let L=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,C=document.activeElement;if(L&&C){let x=p.currentTarget,[v,I]=qu(x);v&&I?!p.shiftKey&&C===I?(p.preventDefault(),o&&Vt(v,{select:!0})):p.shiftKey&&C===v&&(p.preventDefault(),o&&Vt(I,{select:!0})):C===x&&p.preventDefault()}},[o,r,h.paused]);return(0,_u.jsx)(ae.div,{tabIndex:-1,...s,ref:g,onKeyDown:m})},"FocusScope"));function Hu(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Vt(o,{select:t}),document.activeElement!==a)return}Qe(Hu,"focusFirst");function qu(e){let t=Rl(e),a=wl(t,e),o=wl(t.reverse(),e);return[a,o]}Qe(qu,"getTabbableEdges");function Rl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Qe(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Qe(Rl,"getTabbableCandidates");function wl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Uu(o,{upTo:t})))return o}Qe(wl,"findVisible");function Uu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Qe(Uu,"isHidden");function Wu(e){return e instanceof HTMLInputElement&&"select"in e}Qe(Wu,"isSelectableInput");function Vt(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Wu(e)&&t&&e.select()}}Qe(Vt,"focus");var Nu=Vu();function Vu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=yl(e,t),e.unshift(t)},remove(t){e=yl(e,t),e[0]?.resume()}}}Qe(Vu,"createFocusScopesStack");function yl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Qe(yl,"arrayRemove");function Gu(e){return e.filter(t=>t.tagName!=="A")}Qe(Gu,"removeLinks");var Jr=U(require("react"),1),zu=U(require("react-dom"),1);var Ku=require("react/jsx-runtime"),Qg=Object.defineProperty,Jg=(e,t)=>Qg(e,"name",{value:t,configurable:!0}),go=Jr.forwardRef(Jg(function(t,a){let{container:o,...r}=t,[n,l]=Jr.useState(!1);se(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?zu.createPortal((0,Ku.jsx)(ae.div,{...r,ref:a}),s):null},"Portal"));var We=U(require("react"),1);var Xu=U(require("react"),1),eh=Object.defineProperty,Gt=(e,t)=>eh(e,"name",{value:t,configurable:!0});function ju(e,t){return Xu.useReducer((a,o)=>t[a][o]??a,e)}Gt(ju,"useStateMachine");var zt=Gt(e=>{let{present:t,children:a}=e,o=$u(t),r=typeof a=="function"?a({present:o.isPresent}):We.Children.only(a),n=Yu(o.ref,Zu(r));return typeof a=="function"||o.isPresent?We.cloneElement(r,{ref:n}):null},"Presence");function $u(e){let[t,a]=We.useState(),o=We.useRef(null),r=We.useRef(e),n=We.useRef("none"),l=We.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=ju(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return We.useEffect(()=>{i==="mounted"?(n.current=l.current??ho(o.current),l.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let g=n.current,h=ho(c);e?(l.current=h,u("MOUNT")):h==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&g!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Gt(h=>{let p=ho(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&p&&(u("ANIMATION_END"),!r.current)){let L=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=L)})}},"handleAnimationEnd"),g=Gt(h=>{h.target===t&&(n.current=ho(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:We.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=ho(d)}else o.current=null;a(c)},[])}}Gt($u,"usePresence");function Pl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Gt(Pl,"setRef");function Yu(...e){let t=We.useRef(e);return t.current=e,We.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=Pl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():Pl(o[l],null)}}},[])}Gt(Yu,"useStableComposedRefs");function ho(e){return e?.animationName||"none"}Gt(ho,"getAnimationName");function Zu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Gt(Zu,"getElementRef");var Qu=U(require("react"),1),th=Object.defineProperty,Dl=(e,t)=>th(e,"name",{value:t,configurable:!0}),en=0,xo=null;function ah(e){return sa(),e.children}Dl(ah,"FocusGuards");function sa(){Qu.useEffect(()=>{xo||(xo={start:kl(),end:kl()});let{start:e,end:t}=xo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),en++,()=>{en===1&&(xo?.start.remove(),xo?.end.remove(),xo=null),en=Math.max(0,en-1)}},[])}Dl(sa,"useFocusGuards");function kl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Dl(kl,"createFocusGuard");var et=function(){return et=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},et.apply(this,arguments)};function tn(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Ju(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var ln=U(require("react"));var je=U(require("react"));var Ra="right-scroll-bar-position",Pa="width-before-scroll-bar",Ml="with-scroll-bars-hidden",Al="--removed-body-scroll-bar-size";function an(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var ed=require("react");function td(e,t){var a=(0,ed.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var on=U(require("react"));var oh=typeof window<"u"?on.useLayoutEffect:on.useEffect,ad=new WeakMap;function Tl(e,t){var a=td(t||null,function(o){return e.forEach(function(r){return an(r,o)})});return oh(function(){var o=ad.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||an(s,null)}),n.forEach(function(s){r.has(s)||an(s,l)})}ad.set(a,e)},[e]),a}function rh(e){return e}function nh(e,t){t===void 0&&(t=rh);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function El(e){e===void 0&&(e={});var t=nh(null);return t.options=et({async:!0,ssr:!1},e),t}var od=U(require("react")),rd=function(e){var t=e.sideCar,a=tn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return od.createElement(o,et({},a))};rd.isSideCarExport=!0;function Ol(e,t){return e.useMedium(t),rd}var rn=El();var Fl=function(){},ir=je.forwardRef(function(e,t){var a=je.useRef(null),o=je.useState({onScrollCapture:Fl,onWheelCapture:Fl,onTouchMoveCapture:Fl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,g=e.noRelative,h=e.noIsolation,m=e.inert,p=e.allowPinchZoom,L=e.as,C=L===void 0?"div":L,x=e.gapMode,v=tn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=f,b=Tl([a,t]),y=et(et({},v),r);return je.createElement(je.Fragment,null,c&&je.createElement(I,{sideCar:rn,removeScrollBar:u,shards:d,noRelative:g,noIsolation:h,inert:m,setCallbacks:n,allowPinchZoom:!!p,lockRef:a,gapMode:x}),l?je.cloneElement(je.Children.only(s),et(et({},y),{ref:b})):je.createElement(C,et({},y,{className:i,ref:b}),s))});ir.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ir.classNames={fullWidth:Pa,zeroRight:Ra};var he=U(require("react"));var Co=U(require("react"));var sd=U(require("react"));var nd;var ld=function(){if(nd)return nd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function lh(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ld();return t&&e.setAttribute("nonce",t),e}function sh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ih(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Bl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=lh())&&(sh(t,a),ih(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Nl=function(){var e=Bl();return function(t,a){sd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var ur=function(){var e=Nl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var uh={left:0,top:0,right:0,gap:0},_l=function(e){return parseInt(e||"",10)||0},dh=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[_l(a),_l(o),_l(r)]},Hl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return uh;var t=dh(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var ch=ur(),Lo="data-scroll-locked",fh=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Ml,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(Lo,`] {
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
  
  .`).concat(Ra,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Pa,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ra," .").concat(Ra,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Pa," .").concat(Pa,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Lo,`] {
    `).concat(Al,": ").concat(s,`px;
  }
`)},id=function(){var e=parseInt(document.body.getAttribute(Lo)||"0",10);return isFinite(e)?e:0},ph=function(){Co.useEffect(function(){return document.body.setAttribute(Lo,(id()+1).toString()),function(){var e=id()-1;e<=0?document.body.removeAttribute(Lo):document.body.setAttribute(Lo,e.toString())}},[])},ql=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;ph();var n=Co.useMemo(function(){return Hl(r)},[r]);return Co.createElement(ch,{styles:fh(n,!t,r,a?"":"!important")})};var Ul=!1;if(typeof window<"u")try{dr=Object.defineProperty({},"passive",{get:function(){return Ul=!0,!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ul=!1}var dr,ka=Ul?{passive:!1}:!1;var mh=function(e){return e.tagName==="TEXTAREA"},ud=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!mh(e)&&a[t]==="visible")},gh=function(e){return ud(e,"overflowY")},hh=function(e){return ud(e,"overflowX")},Wl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=dd(e,o);if(r){var n=cd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},xh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Lh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},dd=function(e,t){return e==="v"?gh(t):hh(t)},cd=function(e,t){return e==="v"?xh(t):Lh(t)},Ch=function(e,t){return e==="h"&&t==="rtl"?-1:1},fd=function(e,t,a,o,r){var n=Ch(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var g=cd(e,s),h=g[0],m=g[1],p=g[2],L=m-p-n*h;(h||L)&&dd(e,s)&&(d+=L,f+=h);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var nn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},pd=function(e){return[e.deltaX,e.deltaY]},md=function(e){return e&&"current"in e?e.current:e},vh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ih=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},bh=0,vo=[];function gd(e){var t=he.useRef([]),a=he.useRef([0,0]),o=he.useRef(),r=he.useState(bh++)[0],n=he.useState(ur)[0],l=he.useRef(e);he.useEffect(function(){l.current=e},[e]),he.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=Ju([e.lockRef.current],(e.shards||[]).map(md),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=he.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var L=nn(m),C=a.current,x="deltaX"in m?m.deltaX:C[0]-L[0],v="deltaY"in m?m.deltaY:C[1]-L[1],I,b=m.target,y=Math.abs(x)>Math.abs(v)?"h":"v";if("touches"in m&&y==="h"&&b.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,T=P?P===b||P.contains(b):!1;if(T)return!1;var M=Wl(y,b);if(!M)return!0;if(M?I=y:(I=y==="v"?"h":"v",M=Wl(y,b)),!M)return!1;if(!o.current&&"changedTouches"in m&&(x||v)&&(o.current=I),!I)return!0;var E=o.current||I;return fd(E,p,m,E==="h"?x:v,!0)},[]),i=he.useCallback(function(m){var p=m;if(!(!vo.length||vo[vo.length-1]!==n)){var L="deltaY"in p?pd(p):nn(p),C=t.current.filter(function(I){return I.name===p.type&&(I.target===p.target||p.target===I.shadowParent)&&vh(I.delta,L)})[0];if(C&&C.should){p.cancelable&&p.preventDefault();return}if(!C){var x=(l.current.shards||[]).map(md).filter(Boolean).filter(function(I){return I.contains(p.target)}),v=x.length>0?s(p,x[0]):!l.current.noIsolation;v&&p.cancelable&&p.preventDefault()}}},[]),u=he.useCallback(function(m,p,L,C){var x={name:m,delta:p,target:L,should:C,shadowParent:Sh(L)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(v){return v!==x})},1)},[]),c=he.useCallback(function(m){a.current=nn(m),o.current=void 0},[]),d=he.useCallback(function(m){u(m.type,pd(m),m.target,s(m,e.lockRef.current))},[]),f=he.useCallback(function(m){u(m.type,nn(m),m.target,s(m,e.lockRef.current))},[]);he.useEffect(function(){return vo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,ka),document.addEventListener("touchmove",i,ka),document.addEventListener("touchstart",c,ka),function(){vo=vo.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,ka),document.removeEventListener("touchmove",i,ka),document.removeEventListener("touchstart",c,ka)}},[]);var g=e.removeScrollBar,h=e.inert;return he.createElement(he.Fragment,null,h?he.createElement(n,{styles:Ih(r)}):null,g?he.createElement(ql,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Sh(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var hd=Ol(rn,gd);var xd=ln.forwardRef(function(e,t){return ln.createElement(ir,et({},e,{ref:t,sideCar:hd}))});xd.classNames=ir.classNames;var Da=xd;var wh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Io=new WeakMap,sn=new WeakMap,un={},Vl=0,Ld=function(e){return e&&(e.host||Ld(e.parentNode))},yh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Ld(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Rh=function(e,t,a,o){var r=yh(t,Array.isArray(e)?e:[e]);un[a]||(un[a]=new WeakMap);var n=un[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var g=f.getAttribute(o),h=g!==null&&g!=="false",m=(Io.get(f)||0)+1,p=(n.get(f)||0)+1;Io.set(f,m),n.set(f,p),l.push(f),m===1&&h&&sn.set(f,!0),p===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(L){console.error("aria-hidden: cannot operate on ",f,L)}})};return c(t),s.clear(),Vl++,function(){l.forEach(function(d){var f=Io.get(d)-1,g=n.get(d)-1;Io.set(d,f),n.set(d,g),f||(sn.has(d)||d.removeAttribute(o),sn.delete(d)),g||d.removeAttribute(a)}),Vl--,Vl||(Io=new WeakMap,Io=new WeakMap,sn=new WeakMap,un={})}},bo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||wh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Rh(o,r,a,"aria-hidden")):function(){return null}};var Ie=require("react/jsx-runtime"),Ph=Object.defineProperty,Ct=(e,t)=>Ph(e,"name",{value:t,configurable:!0}),zl="Dialog",[Cd,Yb]=Ue(zl),[kh,Et]=Cd(zl),vd=Ct(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=xe.useRef(null),i=xe.useRef(null),[u,c]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:zl}),[d,f]=xe.useState(0),[g,h]=xe.useState(0);return(0,Ie.jsx)(kh,{scope:t,triggerRef:s,contentRef:i,contentId:ut(),titleId:ut(),descriptionId:ut(),titlePresent:d>0,descriptionPresent:g>0,setTitleCount:f,setDescriptionCount:h,open:u,onOpenChange:c,onOpenToggle:xe.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var Id="DialogPortal",[Dh,bd]=Cd(Id,{forceMount:void 0}),Sd=Ct(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Et(Id,t);return(0,Ie.jsx)(Dh,{scope:t,forceMount:a,children:xe.Children.map(o,l=>(0,Ie.jsx)(zt,{present:a||n.open,children:(0,Ie.jsx)(go,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Gl="DialogOverlay",Kl=xe.forwardRef(Ct(function(t,a){let o=bd(Gl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(Gl,t.__scopeDialog);return l.modal?(0,Ie.jsx)(zt,{present:r||l.open,children:(0,Ie.jsx)(Ah,{...n,ref:a})}):null},"DialogOverlay")),Mh=Xe("DialogOverlay.RemoveScroll"),Ah=xe.forwardRef(Ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Gl,o),l=vl(),s=J(a,l);return(0,Ie.jsx)(Da,{as:Mh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,Ie.jsx)(ae.div,{"data-state":Yl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),cr="DialogContent",Xl=xe.forwardRef(Ct(function(t,a){let o=bd(cr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(cr,t.__scopeDialog);return(0,Ie.jsx)(zt,{present:r||l.open,children:l.modal?(0,Ie.jsx)(Th,{...n,ref:a}):(0,Ie.jsx)(Eh,{...n,ref:a})})},"DialogContent")),Th=xe.forwardRef(Ct(function(t,a){let o=Et(cr,t.__scopeDialog),r=xe.useRef(null),n=J(a,o.contentRef,r);return xe.useEffect(()=>{let l=r.current;if(l)return bo(l)},[]),(0,Ie.jsx)(wd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:W(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:W(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Eh=xe.forwardRef(Ct(function(t,a){let o=Et(cr,t.__scopeDialog),r=xe.useRef(!1),n=xe.useRef(!1);return(0,Ie.jsx)(wd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),wd=xe.forwardRef(Ct(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Et(cr,o);return sa(),(0,Ie.jsx)(Ie.Fragment,{children:(0,Ie.jsx)(mo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Ie.jsx)(po,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Yl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Oh="DialogTitle",jl=xe.forwardRef(Ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Oh,o),{setTitleCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ie.jsx)(ae.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Fh="DialogDescription",$l=xe.forwardRef(Ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Fh,o),{setDescriptionCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ie.jsx)(ae.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Bh="DialogClose",yd=xe.forwardRef(Ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Bh,o);return(0,Ie.jsx)(ae.button,{type:"button",...r,ref:a,onClick:W(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Yl(e){return e?"open":"closed"}Ct(Yl,"getState");var Pd=require("react"),Zl="dsh-kanban",kd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},_h={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Ma=null,Ql=null;function Dd(e){let t=e.get("locale");if(t!==void 0){Ma=t;try{t.register(Zl,"zh",kd),t.register(Zl,"en",_h)}catch{}Ql=t.bind(Zl)}}function So(e){return Ql?Ql(e):kd[e]??e}var Hh=e=>Ma&&typeof Ma.subscribe=="function"?Ma.subscribe(e):()=>{},Rd=()=>Ma&&typeof Ma.getSnapshot=="function"?Ma.getSnapshot():null;function Ve(){return(0,Pd.useSyncExternalStore)(Hh,Rd,Rd),So}var dt=require("react/jsx-runtime"),wo=vd;var qh=Sd;var Md=fr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)(Kl,{ref:a,className:te("kanban-portal kanban-dialog-overlay",e),...t}));Md.displayName=Kl.displayName;var Aa=fr.forwardRef(({className:e,children:t,...a},o)=>{let r=Ve();return(0,dt.jsxs)(qh,{children:[(0,dt.jsx)(Md,{}),(0,dt.jsxs)(Xl,{ref:o,className:te("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,dt.jsxs)(yd,{className:"kanban-dialog-close",children:[(0,dt.jsx)(nr,{className:"kanban-dialog-close-icon"}),(0,dt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Aa.displayName=Xl.displayName;var Ta=({className:e,...t})=>(0,dt.jsx)("div",{className:te("kanban-dialog-header",e),...t});Ta.displayName="DialogHeader";var pr=({className:e,...t})=>(0,dt.jsx)("div",{className:te("kanban-dialog-footer",e),...t});pr.displayName="DialogFooter";var Ea=fr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)(jl,{ref:a,className:te("kanban-dialog-title",e),...t}));Ea.displayName=jl.displayName;var mr=fr.forwardRef(({className:e,...t},a)=>(0,dt.jsx)($l,{ref:a,className:te("kanban-dialog-description",e),...t}));mr.displayName=$l.displayName;var br=U(require("react"),1);var kt=U(require("react"),1);var Z=U(require("react"),1);var St=U(require("react"),1);var dn=require("react/jsx-runtime"),tt=U(require("react"),1);var Oa=require("react/jsx-runtime");var Uh=Object.defineProperty,Ne=(e,t)=>Uh(e,"name",{value:t,configurable:!0});function Fa(e){let t=e+"CollectionProvider",[a,o]=Ue(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Ne(m=>{let{scope:p,children:L}=m,C=St.useRef(null),x=St.useRef(new Map).current;return(0,dn.jsx)(r,{scope:p,itemMap:x,collectionRef:C,children:L})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Xe(s),u=St.forwardRef((m,p)=>{let{scope:L,children:C}=m,x=n(s,L),v=J(p,x.collectionRef);return(0,dn.jsx)(i,{ref:v,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Xe(c),g=St.forwardRef((m,p)=>{let{scope:L,children:C,...x}=m,v=St.useRef(null),I=J(p,v),b=n(c,L);return St.useEffect(()=>(b.itemMap.set(v,{ref:v,...x}),()=>{b.itemMap.delete(v)})),(0,dn.jsx)(f,{[d]:"",ref:I,children:C})});g.displayName=c;function h(m){let p=n(e+"CollectionConsumer",m);return St.useCallback(()=>{let C=p.collectionRef.current;if(!C)return[];let x=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((b,y)=>x.indexOf(b.ref.current)-x.indexOf(y.ref.current))},[p.collectionRef,p.itemMap])}return Ne(h,"useCollection"),[{Provider:l,Slot:u,ItemSlot:g},h,o]}Ne(Fa,"createCollection");var Ad=new WeakMap,ke,ct,Jl=(ct=class extends Map{constructor(a){super(a);si(this,ke);jn(this,ke,[...super.keys()]),Ad.set(this,!0)}set(a,o){return Ad.get(this)&&(this.has(a)?ze(this,ke)[ze(this,ke).indexOf(a)]=a:ze(this,ke).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=ze(this,ke).length,s=ts(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...ze(this,ke)],f,g=!1;for(let h=i;h<c;h++)if(i===h){let m=d[h];d[h]===o&&(m=d[h+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!g&&d[h-1]===o&&(g=!0);let m=d[g?h:h-1],p=f;f=this.get(m),this.delete(m),this.set(m,p)}return this}with(a,o,r){let n=new ct(this);return n.insert(a,o,r),n}before(a){let o=ze(this,ke).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=ze(this,ke).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=ze(this,ke).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=ze(this,ke).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return jn(this,ke,[]),super.clear()}delete(a){let o=super.delete(a);return o&&ze(this,ke).splice(ze(this,ke).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=cn(ze(this,ke),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=cn(ze(this,ke),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return ze(this,ke).indexOf(a)}keyAt(a){return cn(ze(this,ke),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new ct(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new ct(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new ct(o)}toReversed(){let a=new ct;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new ct(o)}slice(a,o){let r=new ct,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},ke=new WeakMap,Ne(ct,"OrderedDict"),ct);function cn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Td(e,t);return a===-1?void 0:e[a]}Ne(cn,"at");function Td(e,t){let a=e.length,o=ts(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Ne(Td,"toSafeIndex");function ts(e){return e!==e||e===0?0:Math.trunc(e)}Ne(ts,"toSafeInteger");function Wh(e){let t=e+"CollectionProvider",[a,o]=Ue(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Jl,setItemMap:Ne(()=>{},"setItemMap")}),l=Ne(({state:x,...v})=>x?(0,Oa.jsx)(i,{...v,state:x}):(0,Oa.jsx)(s,{...v}),"CollectionProvider");l.displayName=t;let s=Ne(x=>{let v=p();return(0,Oa.jsx)(i,{...x,state:v})},"CollectionInit");s.displayName=t+"Init";let i=Ne(x=>{let{scope:v,children:I,state:b}=x,y=tt.useRef(null),[R,P]=tt.useState(null),T=J(y,P),[M,E]=b;return tt.useEffect(()=>{if(!R)return;let N=Fd(()=>{});return N.observe(R,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[R]),(0,Oa.jsx)(r,{scope:v,itemMap:M,setItemMap:E,collectionRef:T,collectionRefObject:y,collectionElement:R,children:I})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Xe(u),d=tt.forwardRef((x,v)=>{let{scope:I,children:b}=x,y=n(u,I),R=J(v,y.collectionRef);return(0,Oa.jsx)(c,{ref:R,children:b})});d.displayName=u;let f=e+"CollectionItemSlot",g="data-radix-collection-item",h=Xe(f),m=tt.forwardRef((x,v)=>{let{scope:I,children:b,...y}=x,R=tt.useRef(null),[P,T]=tt.useState(null),M=J(v,R,T),E=n(f,I),{setItemMap:N}=E,H=tt.useRef(y);Ed(H.current,y)||(H.current=y);let Y=H.current;return tt.useEffect(()=>{let j=Y;return N(_=>P?_.has(P)?_.set(P,{...j,element:P}).toSorted(es):(_.set(P,{...j,element:P}),_.toSorted(es)):_),()=>{N(_=>!P||!_.has(P)?_:(_.delete(P),new Jl(_)))}},[P,Y,N]),(0,Oa.jsx)(h,{[g]:"",ref:M,children:b})});m.displayName=f;function p(){return tt.useState(new Jl)}Ne(p,"useInitCollection");function L(x){let{itemMap:v}=n(e+"CollectionConsumer",x);return v}return Ne(L,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:L,useInitCollection:p}]}Ne(Wh,"createCollection");function Ed(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ne(Ed,"shallowEqual");function Od(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ne(Od,"isElementPreceding");function es(e,t){return!e[1].element||!t[1].element?0:Od(e[1].element,t[1].element)?-1:1}Ne(es,"sortByDocumentPosition");function Fd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Ne(Fd,"getChildListObserver");var fn=U(require("react"),1),zh=require("react/jsx-runtime"),Vh=Object.defineProperty,Gh=(e,t)=>Vh(e,"name",{value:t,configurable:!0}),Kh=fn.createContext(void 0);function Ba(e){let t=fn.useContext(Kh);return e||t||"ltr"}Gh(Ba,"useDirection");var $e=U(require("react"),1);var _d=["top","right","bottom","left"];var Ot=Math.min,wt=Math.max,hr=Math.round,xr=Math.floor,Ft=e=>({x:e,y:e}),Xh={left:"right",right:"left",bottom:"top",top:"bottom"};function as(e,t,a){return wt(e,Ot(t,a))}function Bt(e,t){return typeof e=="function"?e(t):e}function Kt(e){return e.split("-")[0]}function Na(e){return e.split("-")[1]}function mn(e){return e==="x"?"y":"x"}function gn(e){return e==="y"?"height":"width"}function yt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function hn(e){return mn(yt(e))}function Hd(e,t,a){a===void 0&&(a=!1);let o=Na(e),r=hn(e),n=gn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=gr(l)),[l,gr(l)]}function qd(e){let t=gr(e);return[pn(e),t,pn(t)]}function pn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Bd=["left","right"],Nd=["right","left"],jh=["top","bottom"],$h=["bottom","top"];function Yh(e,t,a){switch(e){case"top":case"bottom":return a?t?Nd:Bd:t?Bd:Nd;case"left":case"right":return t?jh:$h;default:return[]}}function Ud(e,t,a,o){let r=Na(e),n=Yh(Kt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(pn)))),n}function gr(e){let t=Kt(e);return Xh[t]+e.slice(t.length)}function Zh(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function os(e){return typeof e!="number"?Zh(e):{top:e,right:e,bottom:e,left:e}}function _a(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Wd(e,t,a){let{reference:o,floating:r}=e,n=yt(t),l=hn(t),s=gn(l),i=Kt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,g;switch(i){case"top":g={x:c,y:o.y-r.height};break;case"bottom":g={x:c,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-r.width,y:d};break;default:g={x:o.x,y:o.y}}let h=Na(t);return h&&(g[l]+=f*(h==="end"?1:-1)*(a&&u?-1:1)),g}async function zd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:g=0}=Bt(t,e),h=os(g),p=s[f?d==="floating"?"reference":"floating":d],L=_a(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(p)))==null||a?p:p.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),v=await(n.isElement==null?void 0:n.isElement(x))&&await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1},I=_a(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:x,strategy:i}):C);return{top:(L.top-I.top+h.top)/v.y,bottom:(I.bottom-L.bottom+h.bottom)/v.y,left:(L.left-I.left+h.left)/v.x,right:(I.right-L.right+h.right)/v.x}}var Qh=50,Kd=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:zd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Wd(u,o,i),f=o,g=0,h={};for(let m=0;m<n.length;m++){let p=n[m];if(!p)continue;let{name:L,fn:C}=p,{x,y:v,data:I,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:u,platform:s,elements:{reference:e,floating:t}});c=x??c,d=v??d,h[L]={...h[L],...I},b&&g<Qh&&(g++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=Wd(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}},Xd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Bt(e,t)||{};if(u==null)return{};let d=os(c),f={x:a,y:o},g=hn(r),h=gn(g),m=await l.getDimensions(u),p=g==="y",L=p?"top":"left",C=p?"bottom":"right",x=p?"clientHeight":"clientWidth",v=n.reference[h]+n.reference[g]-f[g]-n.floating[h],I=f[g]-n.reference[g],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=b?b[x]:0;(!y||!await(l.isElement==null?void 0:l.isElement(b)))&&(y=s.floating[x]||n.floating[h]);let R=v/2-I/2,P=y/2-m[h]/2-1,T=Ot(d[L],P),M=Ot(d[C],P),E=y-m[h]-M,N=y/2-m[h]/2+R,H=as(T,N,E),Y=!i.arrow&&Na(r)!=null&&N!==H&&n.reference[h]/2-(N<T?T:M)-m[h]/2<0,j=Y?N<T?N-T:N-E:0;return{[g]:f[g]+j,data:{[g]:H,centerOffset:N-H-j,...Y&&{alignmentOffset:j}},reset:Y}}});var jd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...p}=Bt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let L=Kt(r),C=yt(s),x=Kt(s)===s,v=await(i.isRTL==null?void 0:i.isRTL(u.floating)),I=f||(x||!m?[gr(s)]:qd(s)),b=h!=="none";!f&&b&&I.push(...Ud(s,m,h,v));let y=[s,...I],R=await i.detectOverflow(t,p),P=[],T=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[L]),d){let H=Hd(r,l,v);P.push(R[H[0]],R[H[1]])}if(T=[...T,{placement:r,overflows:P}],!P.every(H=>H<=0)){var M,E;let H=(((M=n.flip)==null?void 0:M.index)||0)+1,Y=y[H];if(Y&&(!(d==="alignment"?C!==yt(Y):!1)||T.every(G=>yt(G.placement)===C?G.overflows[0]>0:!0)))return{data:{index:H,overflows:T},reset:{placement:Y}};let j=(E=T.filter(_=>_.overflows[0]<=0).sort((_,G)=>_.overflows[1]-G.overflows[1])[0])==null?void 0:E.placement;if(!j)switch(g){case"bestFit":{var N;let _=(N=T.filter(G=>{if(b){let z=yt(G.placement);return z===C||z==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(z=>z>0).reduce((z,A)=>z+A,0)]).sort((G,z)=>G[1]-z[1])[0])==null?void 0:N[0];_&&(j=_);break}case"initialPlacement":j=s;break}if(r!==j)return{reset:{placement:j}}}return{}}}};function Vd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Gd(e){return _d.some(t=>e[t]>=0)}var $d=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Bt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Vd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Gd(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Vd(l,a.floating);return{data:{escapedOffsets:s,escaped:Gd(s)}}}default:return{}}}}};var Yd=new Set(["left","top"]);async function Jh(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Kt(a),s=Na(a),i=yt(a)==="y",u=Yd.has(l)?-1:1,c=n&&i?-1:1,d=Bt(t,e),{mainAxis:f,crossAxis:g,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof h=="number"&&(g=s==="end"?h*-1:h),i?{x:g*c,y:f*u}:{x:f*u,y:g*c}}var Zd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await Jh(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Qd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x,y:v}=C;return{x,y:v}}},...u}=Bt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=yt(r),g=mn(f),h=c[g],m=c[f],p=(C,x)=>as(x+d[C==="y"?"top":"left"],x,x-d[C==="y"?"bottom":"right"]);l&&(h=p(g,h)),s&&(m=p(f,m));let L=i.fn({...t,[g]:h,[f]:m});return{...L,data:{x:L.x-a,y:L.y-o,enabled:{[g]:l,[f]:s}}}}}},Jd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Bt(e,t),f={x:r,y:n},g=yt(l),h=mn(g),m=f[h],p=f[g],L=Bt(u,t),C=typeof L=="number"?{mainAxis:L,crossAxis:0}:{mainAxis:(a=L.mainAxis)!=null?a:0,crossAxis:(o=L.crossAxis)!=null?o:0};if(c){let I=h==="y"?"height":"width",b=s.reference[h]-s.floating[I]+C.mainAxis,y=s.reference[h]+s.reference[I]-C.mainAxis;m<b?m=b:m>y&&(m=y)}if(d){var x,v;let I=h==="y"?"width":"height",b=Yd.has(Kt(l)),y=s.reference[g]-s.floating[I]+(b&&((x=i.offset)==null?void 0:x[g])||0)+(b?0:C.crossAxis),R=s.reference[g]+s.reference[I]+(b?0:((v=i.offset)==null?void 0:v[g])||0)-(b?C.crossAxis:0);p<y?p=y:p>R&&(p=R)}return{[h]:m,[g]:p}}}},ec=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Bt(e,t),i=await r.detectOverflow(t,s),u=Kt(a),c=Na(a),d=yt(a)==="y",{width:f,height:g}=o.floating,h,m;u==="top"||u==="bottom"?(h=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,h=c==="end"?"top":"bottom");let p=g-i.top-i.bottom,L=f-i.left-i.right,C=Ot(g-i[h],p),x=Ot(f-i[m],L),v=t.middlewareData.shift,I=!v,b=C,y=x;v!=null&&v.enabled.x&&(y=L),v!=null&&v.enabled.y&&(b=p),I&&!c&&(d?y=f-2*wt(i.left,i.right):b=g-2*wt(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:b});let R=await r.getDimensions(n.floating);return f!==R.width||g!==R.height?{reset:{rects:!0}}:{}}}};function xn(){return typeof window<"u"}function Ua(e){return ac(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nt(e){var t;return(t=(ac(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ac(e){return xn()?e instanceof Node||e instanceof Je(e).Node:!1}function Rt(e){return xn()?e instanceof Element||e instanceof Je(e).Element:!1}function Xt(e){return xn()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function tc(e){return!xn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}function Lr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Pt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function oc(e){return/^(table|td|th)$/.test(Ua(e))}function Cr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var ex=/transform|translate|scale|rotate|perspective|filter/,tx=/paint|layout|strict|content/,Ha=e=>!!e&&e!=="none",rs;function Ln(e){let t=Rt(e)?Pt(e):e;return Ha(t.transform)||Ha(t.translate)||Ha(t.scale)||Ha(t.rotate)||Ha(t.perspective)||!Cn()&&(Ha(t.backdropFilter)||Ha(t.filter))||ex.test(t.willChange||"")||tx.test(t.contain||"")}function rc(e){let t=ia(e);for(;Xt(t)&&!yo(t);){if(Ln(t))return t;if(Cr(t))return null;t=ia(t)}return null}function Cn(){return rs==null&&(rs=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),rs}function yo(e){return/^(html|body|#document)$/.test(Ua(e))}function Pt(e){return Je(e).getComputedStyle(e)}function vr(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ia(e){if(Ua(e)==="html")return e;let t=e.assignedSlot||e.parentNode||tc(e)&&e.host||Nt(e);return tc(t)?t.host:t}function nc(e){let t=ia(e);return yo(t)?(e.ownerDocument||e).body:Xt(t)&&Lr(t)?t:nc(t)}function qa(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=nc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Je(r);if(n){let s=vn(l);return t.concat(l,l.visualViewport||[],Lr(r)?r:[],s&&a?qa(s):[])}else return t.concat(r,qa(r,[],a))}function vn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ic(e){let t=Pt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Xt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=hr(a)!==n||hr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function ls(e){return Rt(e)?e:e.contextElement}function Ro(e){let t=ls(e);if(!Xt(t))return Ft(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=ic(t),l=(n?hr(a.width):a.width)/o,s=(n?hr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var ax=Ft(0);function uc(e){let t=Je(e);return!Cn()||!t.visualViewport?ax:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ox(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===Je(e)}function Wa(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=ls(e),l=Ft(1);t&&(o?Rt(o)&&(l=Ro(o)):l=Ro(e));let s=ox(n,a,o)?uc(n):Ft(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=Je(n),g=Rt(o)?Je(o):o,h=f,m=vn(h);for(;m&&g!==h;){let p=Ro(m),L=m.getBoundingClientRect(),C=Pt(m),x=L.left+(m.clientLeft+parseFloat(C.paddingLeft))*p.x,v=L.top+(m.clientTop+parseFloat(C.paddingTop))*p.y;i*=p.x,u*=p.y,c*=p.x,d*=p.y,i+=x,u+=v,h=Je(m),m=vn(h)}}return _a({width:c,height:d,x:i,y:u})}function In(e,t){let a=vr(e).scrollLeft;return t?t.left+a:Wa(Nt(e)).left+a}function dc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-In(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function rx(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Nt(o),s=t?Cr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ft(1),c=Ft(0),d=Xt(o);if((d||!n)&&((Ua(o)!=="body"||Lr(l))&&(i=vr(o)),d)){let g=Wa(o);u=Ro(o),c.x=g.x+o.clientLeft,c.y=g.y+o.clientTop}let f=l&&!d&&!n?dc(l,i):Ft(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function nx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function lx(e){let t=vr(e),a=e.ownerDocument.body,o=wt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=wt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+In(e),l=-t.scrollTop;return Pt(a).direction==="rtl"&&(n+=wt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var sx=25;function ix(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=Je(e),n=Nt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Cn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(In(n)<=0){let f=n.ownerDocument,g=f.body,h=getComputedStyle(g),m=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-g.clientWidth-m),L=getComputedStyle(n).scrollbarGutter==="stable both-edges"?p/2:p;L<=sx&&(s-=L)}return{width:s,height:i,x:u,y:c}}function ux(e,t){let a=Wa(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Ro(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function lc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=ix(e,a,t);else if(t==="document")o=lx(Nt(e));else if(Rt(t))o=ux(t,a);else{let r=uc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return _a(o)}function dx(e,t){let a=t.get(e);if(a)return a;let o=qa(e,[],!1).filter(s=>Rt(s)&&Ua(s)!=="body"),r=null,n=Pt(e).position==="fixed",l=n?ia(e):e;for(;Rt(l)&&!yo(l);){let s=Pt(l),i=Ln(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=ia(l)}return t.set(e,o),o}function cx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?Cr(t)?[]:dx(t,this._c):[].concat(a),o],s=lc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let g=lc(t,l[f],r);i=wt(g.top,i),u=Ot(g.right,u),c=Ot(g.bottom,c),d=wt(g.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function fx(e){let{width:t,height:a}=ic(e);return{width:t,height:a}}function px(e,t,a){let o=Xt(t),r=Nt(t),n=a==="fixed",l=Wa(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Ft(0);if((o||!n)&&((Ua(t)!=="body"||Lr(r))&&(s=vr(t)),o)){let f=Wa(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=In(r));let u=r&&!o&&!n?dc(r,s):Ft(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function ns(e){return Pt(e).position==="static"}function sc(e,t){if(!Xt(e)||Pt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Nt(e)===a&&(a=a.ownerDocument.body),a}function cc(e,t){let a=Je(e);if(Cr(e))return a;if(!Xt(e)){let r=ia(e);for(;r&&!yo(r);){if(Rt(r)&&!ns(r))return r;r=ia(r)}return a}let o=sc(e,t);for(;o&&oc(o)&&ns(o);)o=sc(o,t);return o&&yo(o)&&ns(o)&&!Ln(o)?a:o||rc(e)||a}var mx=async function(e){let t=this.getOffsetParent||cc,a=this.getDimensions,o=await a(e.floating);return{reference:px(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function gx(e){return Pt(e).direction==="rtl"}var fc={convertOffsetParentRelativeRectToViewportRelativeRect:rx,getDocumentElement:Nt,getClippingRect:cx,getOffsetParent:cc,getElementRects:mx,getClientRects:nx,getDimensions:fx,getScale:Ro,isElement:Rt,isRTL:gx};function pc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hx(e,t,a){let o=null,r,n=Nt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:g,top:h,width:m,height:p}=f;if(c||t(),!m||!p)return;let L=xr(h),C=xr(n.clientWidth-(g+m)),x=xr(n.clientHeight-(h+p)),v=xr(g),b={rootMargin:-L+"px "+-C+"px "+-x+"px "+-v+"px",threshold:wt(0,Ot(1,d))||1},y=!0;function R(P){let T=P[0].intersectionRatio;if(!pc(f,e.getBoundingClientRect()))return s();if(T!==d){if(!y)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(e)}let i=Je(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function ss(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=ls(e),c=r||n?[...u?qa(u):[],...t?qa(t):[]]:[];c.forEach(L=>{r&&L.addEventListener("scroll",a),n&&L.addEventListener("resize",a)});let d=u&&s?hx(u,a,n):null,f=-1,g=null;l&&(g=new ResizeObserver(L=>{let[C]=L;C&&C.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=g)==null||x.observe(t)})),a()}),u&&!i&&g.observe(u),t&&g.observe(t));let h,m=i?Wa(e):null;i&&p();function p(){let L=Wa(e);m&&!pc(m,L)&&a(),m=L,h=requestAnimationFrame(p)}return a(),()=>{var L;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(L=g)==null||L.disconnect(),g=null,i&&cancelAnimationFrame(h)}}var mc=Zd;var gc=Qd,hc=jd,xc=ec,Lc=$d,is=Xd;var Cc=Jd,us=(e,t,a)=>{let o=new Map,r=a??{},n={...fc,...r.platform,_c:o};return Kd(e,t,{...r,platform:n})};var De=U(require("react"),1),Ic=require("react"),bc=U(require("react-dom"),1),xx=typeof document<"u",Lx=function(){},bn=xx?Ic.useLayoutEffect:Lx;function Sn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!Sn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!Sn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Sc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function vc(e,t){let a=Sc(e);return Math.round(t*a)/a}function ds(e){let t=De.useRef(e);return bn(()=>{t.current=e}),t}function wc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=De.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,g]=De.useState(o);Sn(f,o)||g(o);let[h,m]=De.useState(null),[p,L]=De.useState(null),C=De.useCallback(G=>{G!==b.current&&(b.current=G,m(G))},[]),x=De.useCallback(G=>{G!==y.current&&(y.current=G,L(G))},[]),v=n||h,I=l||p,b=De.useRef(null),y=De.useRef(null),R=De.useRef(c),P=i!=null,T=ds(i),M=ds(r),E=ds(u),N=De.useCallback(()=>{if(!b.current||!y.current)return;let G={placement:t,strategy:a,middleware:f};M.current&&(G.platform=M.current),us(b.current,y.current,G).then(z=>{let A={...z,isPositioned:E.current!==!1};H.current&&!Sn(R.current,A)&&(R.current=A,bc.flushSync(()=>{d(A)}))})},[f,t,a,M,E]);bn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(G=>({...G,isPositioned:!1})))},[u]);let H=De.useRef(!1);bn(()=>(H.current=!0,()=>{H.current=!1}),[]),bn(()=>{if(v&&(b.current=v),I&&(y.current=I),v&&I){if(T.current)return T.current(v,I,N);N()}},[v,I,N,T,P]);let Y=De.useMemo(()=>({reference:b,floating:y,setReference:C,setFloating:x}),[C,x]),j=De.useMemo(()=>({reference:v,floating:I}),[v,I]),_=De.useMemo(()=>{let G={position:a,left:0,top:0};if(!j.floating)return G;let z=vc(j.floating,c.x),A=vc(j.floating,c.y);return s?{...G,transform:"translate("+z+"px, "+A+"px)",...Sc(j.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:z,top:A}},[a,s,j.floating,c.x,c.y]);return De.useMemo(()=>({...c,update:N,refs:Y,elements:j,floatingStyles:_}),[c,N,Y,j,_])}var Cx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?is({element:o.current,padding:r}).fn(a):{}:o?is({element:o,padding:r}).fn(a):{}}}},yc=(e,t)=>{let a=mc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Rc=(e,t)=>{let a=gc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Pc=(e,t)=>({fn:Cc(e).fn,options:[e,t]}),kc=(e,t)=>{let a=hc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Dc=(e,t)=>{let a=xc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Mc=(e,t)=>{let a=Lc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ac=(e,t)=>{let a=Cx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Tc=U(require("react"),1);var vx=Object.defineProperty,Ix=(e,t)=>vx(e,"name",{value:t,configurable:!0});function cs(e){let[t,a]=Tc.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}Ix(cs,"useSize");var Po=require("react/jsx-runtime"),bx=Object.defineProperty,ua=(e,t)=>bx(e,"name",{value:t,configurable:!0});var Ec="Popper",[Oc,ko]=Ue(Ec),[Sx,Fc]=Oc(Ec),wx=ua(e=>{let{__scopePopper:t,children:a}=e,[o,r]=$e.useState(null),[n,l]=$e.useState(void 0);return(0,Po.jsx)(Sx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),yx="PopperAnchor",Rx=$e.forwardRef(ua(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Fc(yx,o),s=$e.useRef(null),i=l.onAnchorChange,u=$e.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=J(a,u),d=$e.useRef(null);$e.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&wn(l.placementState),g=f?.[0],h=f?.[1];return r?null:(0,Po.jsx)(ae.div,{"data-radix-popper-side":g,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),Bc="PopperContent",[Px,HS]=Oc(Bc),kx=$e.forwardRef(ua(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:m,...p}=t,L=Fc(Bc,o),[C,x]=$e.useState(null),v=J(a,x),[I,b]=$e.useState(null),y=cs(I),R=y?.width??0,P=y?.height??0,T=r+(l!=="center"?"-"+l:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},E=Array.isArray(c)?c:[c],N=E.length>0,H={padding:M,boundary:E.filter(Nc),altBoundary:N},{refs:Y,floatingStyles:j,placement:_,isPositioned:G,middlewareData:z}=wc({strategy:"fixed",placement:T,whileElementsMounted:ua((...ee)=>ss(...ee,{animationFrame:h==="always"}),"whileElementsMounted"),elements:{reference:L.anchor},middleware:[yc({mainAxis:n+P,alignmentAxis:s}),u&&Rc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Pc():void 0,...H}),u&&kc({...H}),Dc({...H,apply:ua(({elements:ee,rects:X,availableWidth:le,availableHeight:oe})=>{let{width:w,height:k}=X.reference,O=ee.floating.style;O.setProperty("--radix-popper-available-width",`${le}px`),O.setProperty("--radix-popper-available-height",`${oe}px`),O.setProperty("--radix-popper-anchor-width",`${w}px`),O.setProperty("--radix-popper-anchor-height",`${k}px`)},"apply")}),I&&Ac({element:I,padding:i}),Dx({arrowWidth:R,arrowHeight:P}),g&&Mc({strategy:"referenceHidden",...H,boundary:N?H.boundary:void 0})]}),A=L.setPlacementState;se(()=>(A(_),()=>{A(void 0)}),[_,A]);let[Le,K]=wn(_),Q=Fe(m);se(()=>{G&&Q?.()},[G,Q]);let Ce=z.arrow?.x,Re=z.arrow?.y,ie=z.arrow?.centerOffset!==0,[Pe,F]=$e.useState();return se(()=>{C&&F(window.getComputedStyle(C).zIndex)},[C]),(0,Po.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...j,transform:G?j.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Pe,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Po.jsx)(Px,{scope:o,placedSide:Le,placedAlign:K,onArrowChange:b,arrowX:Ce,arrowY:Re,shouldHideArrow:ie,children:(0,Po.jsx)(ae.div,{"data-side":Le,"data-align":K,...p,ref:v,style:{...p.style,animation:G?p.style?.animation:"none"}})})})},"PopperContent"));function Nc(e){return e!==null}ua(Nc,"isNotNull");var Dx=ua(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=wn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,g=(r.arrow?.y??0)+i/2,h="",m="";return u==="bottom"?(h=l?d:`${f}px`,m=`${-i}px`):u==="top"?(h=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(h=`${-i}px`,m=l?d:`${g}px`):u==="left"&&(h=`${o.floating.width+i}px`,m=l?d:`${g}px`),{data:{x:h,y:m}}}}),"transformOrigin");function wn(e){let[t,a="center"]=e.split("-");return[t,a]}ua(wn,"getSideAndAlignFromPlacement");var yn=wx,Rn=Rx,Pn=kx;var _e=U(require("react"),1);var Ax=U(require("react"),1),kn=U(require("react"),1),Mx=Object.defineProperty,ps=(e,t)=>Mx(e,"name",{value:t,configurable:!0}),fs=!1;function Hc(){let[e,t]=kn.useState(fs);return kn.useEffect(()=>{fs||(fs=!0,t(!0))},[]),e}ps(Hc,"useIsHydrated");var qc=Ax[" useSyncExternalStore ".trim().toString()];function Uc(){return()=>{}}ps(Uc,"subscribe");function Wc(){return qc(Uc,()=>!0,()=>!1)}ps(Wc,"useIsHydratedModern");var Vc=typeof qc=="function"?Wc:Hc;var da=require("react/jsx-runtime"),Tx=Object.defineProperty,Va=(e,t)=>Tx(e,"name",{value:t,configurable:!0}),ms="rovingFocusGroup.onEntryFocus",Ex={bubbles:!1,cancelable:!0},Dn="RovingFocusGroup",[gs,Gc,Ox]=Fa(Dn),[Fx,hs]=Ue(Dn,[Ox]),[Bx,Nx]=Fx(Dn),_x=_e.forwardRef(Va(function(t,a){return(0,da.jsx)(gs.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,da.jsx)(gs.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,da.jsx)(Hx,{...t,ref:a})})})},"RovingFocusGroup")),Hx=_e.forwardRef(Va(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,g=_e.useRef(null),h=J(a,g),m=Ba(l),[p,L]=Tt({prop:s,defaultProp:i??null,onChange:u,caller:Dn}),[C,x]=_e.useState(!1),v=Fe(c),I=Gc(o),b=_e.useRef(!1),[y,R]=_e.useState(0);return _e.useEffect(()=>{let P=g.current;if(P)return P.addEventListener(ms,v),()=>P.removeEventListener(ms,v)},[v]),(0,da.jsx)(Bx,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:p,onItemFocus:_e.useCallback(P=>L(P),[L]),onItemShiftTab:_e.useCallback(()=>x(!0),[]),onFocusableItemAdd:_e.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:_e.useCallback(()=>R(P=>P-1),[]),children:(0,da.jsx)(ae.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:W(t.onMouseDown,()=>{b.current=!0}),onFocus:W(t.onFocus,P=>{let T=!b.current;if(P.target===P.currentTarget&&T&&!C){let M=new CustomEvent(ms,Ex);if(P.currentTarget.dispatchEvent(M),!M.defaultPrevented){let E=I().filter(_=>_.focusable),N=E.find(_=>_.active),H=E.find(_=>_.id===p),j=[N,H,...E].filter(Boolean).map(_=>_.ref.current);xs(j,d)}}b.current=!1}),onBlur:W(t.onBlur,()=>x(!1))})})},"RovingFocusGroupImpl")),qx="RovingFocusGroupItem",Ux=_e.forwardRef(Va(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=ut(),c=l||u,d=Nx(qx,o),f=d.currentTabStopId===c,g=Gc(o),{onFocusableItemAdd:h,onFocusableItemRemove:m,currentTabStopId:p}=d,L=Vc();return se(()=>{if(!(!L||!r))return h(),()=>m()},[L,r,h,m]),_e.useEffect(()=>{if(!(L||!r))return h(),()=>m()},[L,r,h,m]),(0,da.jsx)(gs.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,da.jsx)(ae.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:W(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:W(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:W(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let x=Kc(C,d.orientation,d.dir);if(x!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let I=g().filter(b=>b.focusable).map(b=>b.ref.current);if(x==="last")I.reverse();else if(x==="prev"||x==="next"){x==="prev"&&I.reverse();let b=I.indexOf(C.currentTarget);I=d.loop?Xc(I,b+1):I.slice(b+1)}setTimeout(()=>xs(I))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:p!=null}):s})})},"RovingFocusGroupItem")),Wx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function zc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Va(zc,"getDirectionAwareKey");function Kc(e,t,a){let o=zc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Wx[o]}Va(Kc,"getFocusIntent");function xs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Va(xs,"focusFirst");function Xc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Va(Xc,"wrapArray");var jc=_x,$c=Ux;var pe=require("react/jsx-runtime"),zx=Object.defineProperty,me=(e,t)=>zx(e,"name",{value:t,configurable:!0}),Ls=["Enter"," "],Kx=["ArrowDown","PageUp","Home"],Zc=["ArrowUp","PageDown","End"],Xx=[...Kx,...Zc],gw={ltr:[...Ls,"ArrowRight"],rtl:[...Ls,"ArrowLeft"]};var An="Menu",[Cs,jx,$x]=Fa(An),[Ga,Is]=Ue(An,[$x,ko,hs]),bs=ko(),Qc=hs(),[Yx,Ir]=Ga(An),[Zx,Ss]=Ga(An),Qx=me(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=bs(t),[i,u]=Z.useState(null),c=Z.useRef(!1),d=Fe(n),f=Ba(r);return Z.useEffect(()=>{let g=me(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=me(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),Z.useEffect(()=>{if(!a)return;let g=me(()=>d(!1),"handleBlur");return window.addEventListener("blur",g),()=>window.removeEventListener("blur",g)},[a,d]),(0,pe.jsx)(yn,{...s,children:(0,pe.jsx)(Yx,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,pe.jsx)(Zx,{scope:t,onClose:Z.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),Jx=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t,n=bs(o);return(0,pe.jsx)(Rn,{...n,...r,ref:a})},"MenuAnchor")),Jc="MenuPortal",[eL,tL]=Ga(Jc,{forceMount:void 0}),aL=me(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Ir(Jc,t);return(0,pe.jsx)(eL,{scope:t,forceMount:a,children:(0,pe.jsx)(zt,{present:a||n.open,children:(0,pe.jsx)(go,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ca="MenuContent",[oL,ef]=Ga(ca),rL=Z.forwardRef(me(function(t,a){let o=tL(ca,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Ir(ca,t.__scopeMenu),s=Ss(ca,t.__scopeMenu);return(0,pe.jsx)(Cs.Provider,{scope:t.__scopeMenu,children:(0,pe.jsx)(zt,{present:r||l.open,children:(0,pe.jsx)(Cs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,pe.jsx)(nL,{...n,ref:a}):(0,pe.jsx)(lL,{...n,ref:a})})})})},"MenuContent")),nL=Z.forwardRef(me(function(t,a){let o=Ir(ca,t.__scopeMenu),r=Z.useRef(null),n=J(a,r);return Z.useEffect(()=>{let l=r.current;if(l)return bo(l)},[]),(0,pe.jsx)(tf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),lL=Z.forwardRef(me(function(t,a){let o=Ir(ca,t.__scopeMenu);return(0,pe.jsx)(tf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),sL=Xe("MenuContent.ScrollLock"),tf=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,disableOutsideScroll:m,...p}=t,L=Ir(ca,o),C=Ss(ca,o),x=bs(o),v=Qc(o),I=jx(o),[b,y]=Z.useState(null),R=Z.useRef(null),P=J(a,R,L.onContentChange),T=Z.useRef(0),M=Z.useRef(""),E=Z.useRef(0),N=Z.useRef(null),H=Z.useRef("right"),Y=Z.useRef(0),j=m?Da:Z.Fragment,_=m?{as:sL,allowPinchZoom:!0}:void 0,G=me(A=>{let Le=M.current+A,K=I().filter(F=>!F.disabled),Q=document.activeElement,Ce=K.find(F=>F.ref.current===Q)?.textValue,Re=K.map(F=>F.textValue),ie=lf(Re,Le,Ce),Pe=K.find(F=>F.textValue===ie)?.ref.current;me((function F(ee){M.current=ee,window.clearTimeout(T.current),ee!==""&&(T.current=window.setTimeout(()=>F(""),1e3))}),"updateSearch")(Le),Pe&&setTimeout(()=>Pe.focus())},"handleTypeaheadSearch");Z.useEffect(()=>()=>window.clearTimeout(T.current),[]),sa();let z=Z.useCallback(A=>H.current===N.current?.side&&uf(A,N.current?.area),[]);return(0,pe.jsx)(oL,{scope:o,searchRef:M,onItemEnter:Z.useCallback(A=>{z(A)&&A.preventDefault()},[z]),onItemLeave:Z.useCallback(A=>{z(A)||(R.current?.focus(),y(null))},[z]),onTriggerLeave:Z.useCallback(A=>{z(A)&&A.preventDefault()},[z]),pointerGraceTimerRef:E,onPointerGraceIntentChange:Z.useCallback(A=>{N.current=A},[]),children:(0,pe.jsx)(j,{..._,children:(0,pe.jsx)(mo,{asChild:!0,trapped:n,onMountAutoFocus:W(l,A=>{A.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,pe.jsx)(po,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,children:(0,pe.jsx)(jc,{asChild:!0,...v,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:W(u,A=>{C.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,pe.jsx)(Pn,{role:"menu","aria-orientation":"vertical","data-state":af(L.open),"data-radix-menu-content":"",dir:C.dir,...x,...p,ref:P,style:{outline:"none",...p.style},onKeyDown:W(p.onKeyDown,A=>{let K=A.target.closest("[data-radix-menu-content]")===A.currentTarget,Q=A.ctrlKey||A.altKey||A.metaKey,Ce=A.key.length===1;K&&(A.key==="Tab"&&A.preventDefault(),!Q&&Ce&&G(A.key));let Re=R.current;if(A.target!==Re||!Xx.includes(A.key))return;A.preventDefault();let Pe=I().filter(F=>!F.disabled).map(F=>F.ref.current);Zc.includes(A.key)&&Pe.reverse(),rf(Pe)}),onBlur:W(t.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(T.current),M.current="")}),onPointerMove:W(t.onPointerMove,Mn(A=>{let Le=A.target,K=Y.current!==A.clientX;if(A.currentTarget.contains(Le)&&K){let Q=A.clientX>Y.current?"right":"left";H.current=Q,Y.current=A.clientX}}))})})})})})})},"MenuContentImpl"));var iL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(ae.div,{...r,ref:a})},"MenuLabel")),vs="MenuItem",Yc="menu.itemSelect",uL=Z.forwardRef(me(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Z.useRef(null),s=Ss(vs,t.__scopeMenu),i=ef(vs,t.__scopeMenu),u=J(a,l),c=Z.useRef(!1),d=me(()=>{let f=l.current;if(!o&&f){let g=new CustomEvent(Yc,{bubbles:!0,cancelable:!0});f.addEventListener(Yc,h=>r?.(h),{once:!0}),sr(f,g),g.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,pe.jsx)(dL,{...n,ref:u,disabled:o,onClick:W(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:W(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:W(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||Ls.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),dL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=ef(vs,o),i=Qc(o),u=Z.useRef(null),c=J(a,u),[d,f]=Z.useState(!1),[g,h]=Z.useState("");return Z.useEffect(()=>{let m=u.current;m&&h((m.textContent??"").trim())},[l.children]),(0,pe.jsx)(Cs.ItemSlot,{scope:o,disabled:r,textValue:n??g,children:(0,pe.jsx)($c,{asChild:!0,...i,focusable:!r,children:(0,pe.jsx)(ae.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:W(t.onPointerMove,Mn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:W(t.onPointerLeave,Mn(m=>s.onItemLeave(m))),onFocus:W(t.onFocus,()=>f(!0)),onBlur:W(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var cL="MenuRadioGroup",[hw,xw]=Ga(cL,{value:void 0,onValueChange:me(()=>{},"onValueChange")});var fL="MenuItemIndicator",[Lw,Cw]=Ga(fL,{checked:!1});var pL=Z.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(ae.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var mL="MenuSub",[vw,Iw]=Ga(mL);function af(e){return e?"open":"closed"}me(af,"getOpenState");function of(e){return e==="indeterminate"}me(of,"isIndeterminate");function gL(e){return of(e)?"indeterminate":e?"checked":"unchecked"}me(gL,"getCheckedState");function rf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}me(rf,"focusFirst");function nf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}me(nf,"wrapArray");function lf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=nf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}me(lf,"getNextMatch");function sf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}me(sf,"isPointInPolygon");function uf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return sf(a,t)}me(uf,"isPointerInGraceArea");function Mn(e){return t=>t.pointerType==="mouse"?e(t):void 0}me(Mn,"whenMouse");var df=Qx,cf=Jx,ff=aL,pf=rL;var mf=iL,gf=uL;var hf=pL;var _t=require("react/jsx-runtime"),xL=Object.defineProperty,za=(e,t)=>xL(e,"name",{value:t,configurable:!0}),ws="DropdownMenu",[LL,_w]=Ue(ws,[Is]),Ka=Is(),[CL,xf]=LL(ws),vL=za(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Ka(t),u=kt.useRef(null),[c,d]=Tt({prop:r,defaultProp:n??!1,onChange:l,caller:ws});return(0,_t.jsx)(CL,{scope:t,triggerId:ut(),triggerRef:u,contentId:ut(),open:c,onOpenChange:d,onOpenToggle:kt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,_t.jsx)(df,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),IL="DropdownMenuTrigger",bL=kt.forwardRef(za(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=xf(IL,o),s=Ka(o),i=J(a,l.triggerRef);return(0,_t.jsx)(cf,{asChild:!0,...s,children:(0,_t.jsx)(ae.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:W(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:W(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),SL=za(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Ka(t);return(0,_t.jsx)(ff,{...o,...a})},"DropdownMenuPortal"),wL="DropdownMenuContent",yL=kt.forwardRef(za(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=xf(wL,o),l=Ka(o),s=kt.useRef(!1);return(0,_t.jsx)(pf,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:W(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:W(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var RL=kt.forwardRef(za(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ka(o);return(0,_t.jsx)(mf,{...n,...r,ref:a})},"DropdownMenuLabel")),PL=kt.forwardRef(za(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ka(o);return(0,_t.jsx)(gf,{...n,...r,ref:a})},"DropdownMenuItem"));var kL=kt.forwardRef(za(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ka(o);return(0,_t.jsx)(hf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Lf=vL,Cf=bL,vf=SL,ys=yL;var Rs=RL,Ps=PL;var ks=kL;var Do=require("react/jsx-runtime"),Sr=Lf,wr=Cf;var Mo=br.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Do.jsx)(vf,{children:(0,Do.jsx)(ys,{ref:o,sideOffset:t,className:te("kanban-portal kanban-dropdown-content",e),...a})}));Mo.displayName=ys.displayName;var jt=br.forwardRef(({className:e,inset:t,...a},o)=>(0,Do.jsx)(Ps,{ref:o,className:te("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));jt.displayName=Ps.displayName;var ML=br.forwardRef(({className:e,inset:t,...a},o)=>(0,Do.jsx)(Rs,{ref:o,className:te("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));ML.displayName=Rs.displayName;var AL=br.forwardRef(({className:e,...t},a)=>(0,Do.jsx)(ks,{ref:a,className:te("kanban-dropdown-separator",e),...t}));AL.displayName=ks.displayName;var If=U(require("react"),1);var bf=require("react/jsx-runtime"),$t=If.forwardRef(({className:e,type:t,...a},o)=>(0,bf.jsx)("input",{type:t,className:te("kanban-input",e),ref:o,...a}));$t.displayName="Input";var yf=U(require("react"),1);var Sf=U(require("react"),1);var wf=require("react/jsx-runtime"),TL=Object.defineProperty,EL=(e,t)=>TL(e,"name",{value:t,configurable:!0}),OL=Sf.forwardRef(EL(function(t,a){return(0,wf.jsx)(ae.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Ds=OL;var Rf=require("react/jsx-runtime"),fa=yf.forwardRef(({className:e,...t},a)=>(0,Rf.jsx)(Ds,{ref:a,className:te("kanban-label",e),...t}));fa.displayName=Ds.displayName;var ma=U(require("react"),1);var D=U(require("react"),1),Ts=U(require("react-dom"),1);var BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0});function Tn(e,[t,a]){return Math.min(a,Math.max(t,e))}NL(Tn,"clamp");var En=U(require("react"),1),_L=Object.defineProperty,HL=(e,t)=>_L(e,"name",{value:t,configurable:!0});function Ms(e){let t=En.useRef({value:e,previous:e});return En.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}HL(Ms,"usePrevious");var qL=U(require("react"),1);var UL=require("react/jsx-runtime");var Pf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var V=require("react/jsx-runtime"),WL=Object.defineProperty,ne=(e,t)=>WL(e,"name",{value:t,configurable:!0}),VL=[" ","Enter","ArrowUp","ArrowDown"],GL=[" ","Enter"],Ao="Select",[Fn,Bn,zL]=Fa(Ao),[ja,Ly]=Ue(Ao,[zL,ko]),Es=ko(),[KL,pa]=ja(Ao),[XL,jL]=ja(Ao);function Tf(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:g,form:h,internal_do_not_use_render:m}=e,p=Es(t),[L,C]=D.useState(null),[x,v]=D.useState(null),[I,b]=D.useState(!1),y=Ba(u),[R,P]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:Ao}),[T,M]=Tt({prop:l,defaultProp:s,onChange:i,caller:Ao}),E=D.useRef(null),N=D.useRef(T);D.useEffect(()=>{let K=h?L?.ownerDocument.getElementById(h):L?.form;if(K instanceof HTMLFormElement){let Q=ne(()=>M(N.current),"reset");return K.addEventListener("reset",Q),()=>K.removeEventListener("reset",Q)}},[h,L,M]);let H=L?!!h||!!L.closest("form"):!0,[Y,j]=D.useState(new Set),_=ut(),G=Array.from(Y).map(K=>K.props.value).join(";"),z=D.useCallback(K=>{j(Q=>new Set(Q).add(K))},[]),A=D.useCallback(K=>{j(Q=>{let Ce=new Set(Q);return Ce.delete(K),Ce})},[]),Le={required:g,trigger:L,onTriggerChange:C,valueNode:x,onValueNodeChange:v,valueNodeHasChildren:I,onValueNodeHasChildrenChange:b,contentId:_,value:T,onValueChange:M,open:R,onOpenChange:P,dir:y,triggerPointerDownPosRef:E,disabled:f,name:c,autoComplete:d,form:h,nativeOptions:Y,nativeSelectKey:G,isFormControl:H};return(0,V.jsx)(yn,{...p,children:(0,V.jsx)(KL,{scope:t,...Le,children:(0,V.jsx)(Fn.Provider,{scope:t,children:(0,V.jsx)(XL,{scope:t,onNativeOptionAdd:z,onNativeOptionRemove:A,children:Vf(m)?m(Le):a})})})})}ne(Tf,"SelectProvider");var Ef=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,V.jsx)(Tf,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,V.jsxs)(V.Fragment,{children:[a,r?(0,V.jsx)(cC,{__scopeSelect:t}):null]})})},"Select"),$L="SelectTrigger",Os=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Es(o),s=pa($L,o),i=s.disabled||r,u=J(a,s.onTriggerChange),c=Bn(o),d=D.useRef("touch"),[f,g,h]=Ws(p=>{let L=c().filter(v=>!v.disabled),C=L.find(v=>v.value===s.value),x=Vs(L,p,C);x!==void 0&&s.onValueChange(x.value)}),m=ne(p=>{i||(s.onOpenChange(!0),h()),p&&(s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})},"handleOpen");return(0,V.jsx)(Rn,{asChild:!0,...l,children:(0,V.jsx)(ae.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":yr(s.value)?"":void 0,...n,ref:u,onClick:W(n.onClick,p=>{p.currentTarget.focus(),d.current!=="mouse"&&m(p)}),onPointerDown:W(n.onPointerDown,p=>{d.current=p.pointerType;let L=p.target;L.hasPointerCapture(p.pointerId)&&L.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(m(p),p.preventDefault())}),onKeyDown:W(n.onKeyDown,p=>{let L=f.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&g(p.key),!(L&&p.key===" ")&&VL.includes(p.key)&&(m(),p.preventDefault())})})})},"SelectTrigger")),YL="SelectValue",Of=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=pa(YL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=J(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let g=yr(u.value);return(0,V.jsx)(ae.span,{...i,asChild:g?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,V.jsx)(D.Fragment,{children:g?s:l},g?"placeholder":"value")})},"SelectValue")),Ff=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,V.jsx)(ae.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),ZL="SelectPortal",[QL,JL]=ja(ZL,{forceMount:void 0}),Bf=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,V.jsx)(QL,{scope:e.__scopeSelect,forceMount:a,children:(0,V.jsx)(go,{asChild:!0,...o})})},"SelectPortal"),Xa="SelectContent",Fs=D.forwardRef(ne(function(t,a){let o=JL(Xa,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=pa(Xa,t.__scopeSelect),[s,i]=D.useState();return se(()=>{i(new DocumentFragment)},[]),(0,V.jsx)(zt,{present:r||l.open,children:({present:u})=>u?(0,V.jsx)(aC,{...n,ref:a}):(0,V.jsx)(eC,{...n,fragment:s})})},"SelectContent")),eC=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ts.createPortal((0,V.jsx)(Nf,{scope:o,children:(0,V.jsx)(Fn.Slot,{scope:o,children:(0,V.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Dt=10,[Nf,$a]=ja(Xa),tC=Xe("SelectContent.RemoveScroll"),aC=D.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:m,hideWhenDetached:p,avoidCollisions:L,...C}=t,x=pa(Xa,o),[v,I]=D.useState(null),[b,y]=D.useState(null),R=J(a,I),[P,T]=D.useState(null),[M,E]=D.useState(null),N=Bn(o),[H,Y]=D.useState(!1),j=D.useRef(!1);D.useEffect(()=>{if(v)return bo(v)},[v]),sa();let _=D.useCallback(F=>{let[ee,...X]=N().map(w=>w.ref.current),[le]=X.slice(-1),oe=document.activeElement;for(let w of F)if(w===oe||(w?.scrollIntoView({block:"nearest"}),w===ee&&b&&(b.scrollTop=0),w===le&&b&&(b.scrollTop=b.scrollHeight),w?.focus(),document.activeElement!==oe))return},[N,b]),G=D.useCallback(()=>_([P,v]),[_,P,v]);D.useEffect(()=>{H&&G()},[H,G]);let{onOpenChange:z,triggerPointerDownPosRef:A}=x;D.useEffect(()=>{if(v){let F={x:0,y:0},ee=ne(le=>{F={x:Math.abs(Math.round(le.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(le.pageY)-(A.current?.y??0))}},"handlePointerMove"),X=ne(le=>{F.x<=10&&F.y<=10?le.preventDefault():le.composedPath().includes(v)||z(!1),document.removeEventListener("pointermove",ee),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",X,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",X,{capture:!0})}}},[v,z,A]),D.useEffect(()=>{let F=ne(()=>z(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[z]);let[Le,K]=Ws(F=>{let ee=N().filter(oe=>!oe.disabled),X=ee.find(oe=>oe.ref.current===document.activeElement),le=Vs(ee,F,X);le&&setTimeout(()=>le.ref.current?.focus())}),Q=D.useCallback((F,ee,X)=>{let le=!j.current&&!X;(x.value!==void 0&&x.value===ee||le)&&(T(F),le&&(j.current=!0))},[x.value]),Ce=D.useCallback(()=>v?.focus(),[v]),Re=D.useCallback((F,ee,X)=>{let le=!j.current&&!X;(x.value!==void 0&&x.value===ee||le)&&E(F)},[x.value]),ie=r==="popper"?kf:oC,Pe=ie===kf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:m,hideWhenDetached:p,avoidCollisions:L}:{};return(0,V.jsx)(Nf,{scope:o,content:v,viewport:b,onViewportChange:y,itemRefCallback:Q,selectedItem:P,onItemLeave:Ce,itemTextRefCallback:Re,focusSelectedItem:G,selectedItemText:M,position:r,isPositioned:H,searchRef:Le,children:(0,V.jsx)(Da,{as:tC,allowPinchZoom:!0,children:(0,V.jsx)(mo,{asChild:!0,trapped:x.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:W(n,F=>{x.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,V.jsx)(po,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:(0,V.jsx)(ie,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:F=>F.preventDefault(),...C,...Pe,onPlaced:()=>Y(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:W(C.onKeyDown,F=>{let ee=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!ee&&F.key.length===1&&K(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let le=N().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);if(["ArrowUp","End"].includes(F.key)&&(le=le.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let oe=F.target,w=le.indexOf(oe);le=le.slice(w+1)}setTimeout(()=>_(le)),F.preventDefault()}})})})})})})},"SelectContentImpl")),oC=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=pa(Xa,o),s=$a(Xa,o),[i,u]=D.useState(null),[c,d]=D.useState(null),f=J(a,d),g=Bn(o),h=D.useRef(!1),m=D.useRef(!0),{viewport:p,selectedItem:L,selectedItemText:C,focusSelectedItem:x}=s,v=D.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&p&&L&&C){let R=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),T=l.valueNode.getBoundingClientRect(),M=C.getBoundingClientRect();if(l.dir!=="rtl"){let oe=M.left-P.left,w=T.left-oe,k=R.left-w,O=R.width+k,q=Math.max(O,P.width),Me=window.innerWidth-Dt,ue=Tn(w,[Dt,Math.max(Dt,Me-q)]);i.style.minWidth=O+"px",i.style.left=ue+"px"}else{let oe=P.right-M.right,w=window.innerWidth-T.right-oe,k=window.innerWidth-R.right-w,O=R.width+k,q=Math.max(O,P.width),Me=window.innerWidth-Dt,ue=Tn(w,[Dt,Math.max(Dt,Me-q)]);i.style.minWidth=O+"px",i.style.right=ue+"px"}let E=g(),N=window.innerHeight-Dt*2,H=p.scrollHeight,Y=window.getComputedStyle(c),j=parseInt(Y.borderTopWidth,10),_=parseInt(Y.paddingTop,10),G=parseInt(Y.borderBottomWidth,10),z=parseInt(Y.paddingBottom,10),A=j+_+H+z+G,Le=Math.min(L.offsetHeight*5,A),K=window.getComputedStyle(p),Q=parseInt(K.paddingTop,10),Ce=parseInt(K.paddingBottom,10),Re=R.top+R.height/2-Dt,ie=N-Re,Pe=L.offsetHeight/2,F=L.offsetTop+Pe,ee=j+_+F,X=A-ee;if(ee<=Re){let oe=E.length>0&&L===E[E.length-1].ref.current;i.style.bottom="0px";let w=c.clientHeight-p.offsetTop-p.offsetHeight,k=Math.max(ie,Pe+(oe?Ce:0)+w+G),O=ee+k;i.style.height=O+"px"}else{let oe=E.length>0&&L===E[0].ref.current;i.style.top="0px";let k=Math.max(Re,j+p.offsetTop+(oe?Q:0)+Pe)+X;i.style.height=k+"px",p.scrollTop=ee-Re+p.offsetTop}i.style.margin=`${Dt}px 0`,i.style.minHeight=Le+"px",i.style.maxHeight=N+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[g,l.trigger,l.valueNode,i,c,p,L,C,l.dir,r]);se(()=>v(),[v]);let[I,b]=D.useState();se(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let y=D.useCallback(R=>{R&&m.current===!0&&(v(),x?.(),m.current=!1)},[v,x]);return(0,V.jsx)(rC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:y,children:(0,V.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:I},children:(0,V.jsx)(ae.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),kf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Dt,...l}=t,s=Es(o);return(0,V.jsx)(Pn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[rC,Bs]=ja(Xa,{}),Df="SelectViewport",_f=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=$a(Df,o),s=Bs(Df,o),i=J(a,l.onViewportChange),u=D.useRef(0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,V.jsx)(Fn.Slot,{scope:o,children:(0,V.jsx)(ae.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:W(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:g}=s;if(g?.current&&f){let h=Math.abs(u.current-d.scrollTop);if(h>0){let m=window.innerHeight-Dt*2,p=parseFloat(f.style.minHeight),L=parseFloat(f.style.height),C=Math.max(p,L);if(C<m){let x=C+h,v=Math.min(m,x),I=x-v;f.style.height=v+"px",f.style.bottom==="0px"&&(d.scrollTop=I>0?I:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),nC="SelectGroup",[Cy,lC]=ja(nC);var sC="SelectLabel",Ns=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=lC(sC,o);return(0,V.jsx)(ae.div,{id:n.id,...r,ref:a})},"SelectLabel")),As="SelectItem",[iC,Hf]=ja(As),_s=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=pa(As,o),u=$a(As,o),c=i.value===r,[d,f]=D.useState(l??""),[g,h]=D.useState(!1),m=Fe(v=>u.itemRefCallback?.(v,r,n)),p=J(a,m),L=ut(),C=D.useRef("touch"),x=ne(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,V.jsx)(iC,{scope:o,value:r,disabled:n,textId:L,isSelected:c,onItemTextChange:D.useCallback(v=>{f(I=>I||(v?.textContent??"").trim())},[]),children:(0,V.jsx)(Fn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,V.jsx)(ae.div,{role:"option","aria-labelledby":L,"data-highlighted":g?"":void 0,"aria-selected":c&&g,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:p,onFocus:W(s.onFocus,()=>h(!0)),onBlur:W(s.onBlur,()=>h(!1)),onClick:W(s.onClick,()=>{C.current!=="mouse"&&x()}),onPointerUp:W(s.onPointerUp,()=>{C.current==="mouse"&&x()}),onPointerDown:W(s.onPointerDown,v=>{C.current=v.pointerType}),onPointerMove:W(s.onPointerMove,v=>{C.current=v.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:W(s.onPointerLeave,v=>{v.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:W(s.onKeyDown,v=>{n||v.target!==v.currentTarget||u.searchRef?.current!==""&&v.key===" "||(GL.includes(v.key)&&x(),v.key===" "&&v.preventDefault())})})})})},"SelectItem")),On="SelectItemText",qf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=pa(On,o),i=$a(On,o),u=Hf(On,o),c=jL(On,o),[d,f]=D.useState(null),g=Fe(x=>i.itemTextRefCallback?.(x,u.value,u.disabled)),h=J(a,f,u.onItemTextChange,g),m=d?.textContent,p=D.useMemo(()=>(0,V.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:L,onNativeOptionRemove:C}=c;return se(()=>(L(p),()=>C(p)),[L,C,p]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ae.span,{id:u.textId,...l,ref:h}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!yr(s.value)?Ts.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),uC="SelectItemIndicator",Uf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return Hf(uC,o).isSelected?(0,V.jsx)(ae.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Mf="SelectScrollUpButton",Hs=D.forwardRef(ne(function(t,a){let o=$a(Mf,t.__scopeSelect),r=Bs(Mf,t.__scopeSelect),[n,l]=D.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Wf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),Af="SelectScrollDownButton",qs=D.forwardRef(ne(function(t,a){let o=$a(Af,t.__scopeSelect),r=Bs(Af,t.__scopeSelect),[n,l]=D.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Wf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Wf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=$a("SelectScrollButton",o),s=D.useRef(null),i=Bn(o),u=D.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return D.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,V.jsx)(ae.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:W(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:W(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:W(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Us=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,V.jsx)(ae.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var dC="SelectBubbleInput",cC=D.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=pa(dC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:g}=r,h=D.useRef(null),m=J(o,h),p=n??"",L=Ms(p),C=Array.from(f).some(x=>(x.props.value??"")==="");return D.useEffect(()=>{let x=h.current;if(!x)return;let v=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(v,"value").set;if(L!==p&&b){let y=new Event("change",{bubbles:!0});b.call(x,p),x.dispatchEvent(y)}},[L,p]),(0,V.jsxs)(ae.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:x=>l(x.target.value),...a,style:{...Pf,...a.style},ref:m,defaultValue:p,children:[yr(n)&&!C?(0,V.jsx)("option",{value:""}):null,Array.from(f)]},g)},"SelectBubbleInput"));function Vf(e){return typeof e=="function"}ne(Vf,"isFunction");function yr(e){return e===""||e===void 0}ne(yr,"shouldShowPlaceholder");function Ws(e){let t=Fe(e),a=D.useRef(""),o=D.useRef(0),r=D.useCallback(l=>{let s=a.current+l;t(s),ne((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=D.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Ws,"useTypeaheadSearch");function Vs(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Gf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(Vs,"findNextItem");function Gf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Gf,"wrapArray");var we=require("react/jsx-runtime"),Gs=Ef;var zs=Of,Nn=ma.forwardRef(({className:e,children:t,...a},o)=>(0,we.jsxs)(Os,{ref:o,className:te("kanban-select-trigger",e),...a,children:[t,(0,we.jsx)(Ff,{asChild:!0,children:(0,we.jsx)(io,{className:"kanban-select-icon"})})]}));Nn.displayName=Os.displayName;var zf=ma.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Hs,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,we.jsx)(Qo,{className:"kanban-select-scroll-icon"})}));zf.displayName=Hs.displayName;var Kf=ma.forwardRef(({className:e,...t},a)=>(0,we.jsx)(qs,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,we.jsx)(io,{className:"kanban-select-scroll-icon"})}));Kf.displayName=qs.displayName;var _n=ma.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,we.jsx)(Bf,{children:(0,we.jsxs)(Fs,{ref:r,className:te("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,we.jsx)(zf,{}),(0,we.jsx)(_f,{className:te("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,we.jsx)(Kf,{})]})}));_n.displayName=Fs.displayName;var pC=ma.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Ns,{ref:a,className:te("kanban-select-label",e),...t}));pC.displayName=Ns.displayName;var To=ma.forwardRef(({className:e,children:t,...a},o)=>(0,we.jsxs)(_s,{ref:o,className:te("kanban-select-item",e),...a,children:[(0,we.jsx)("span",{className:"kanban-select-item-indicator",children:(0,we.jsx)(Uf,{children:(0,we.jsx)(na,{className:"kanban-select-check"})})}),(0,we.jsx)(qf,{children:t})]}));To.displayName=_s.displayName;var mC=ma.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Us,{ref:a,className:te("kanban-select-separator",e),...t}));mC.displayName=Us.displayName;var Xf=U(require("react"),1);var jf=require("react/jsx-runtime"),Hn=Xf.forwardRef(({className:e,...t},a)=>(0,jf.jsx)("textarea",{className:te("kanban-textarea",e),ref:a,...t}));Hn.displayName="Textarea";var Yt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},qn=["high","medium","low"],$f="#94a3b8";function Yf(e,t){return t?e.find(a=>a.name===t)?.color??$f:$f}var Ye=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Ks=e=>e==="high"||e==="medium"||e==="low"?Yt[e].label:"";function Zf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Ks(a.priority)||o;return Ye(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ye(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ye(t("actLabelSet"),{to:n}):r!=null&&n==null?Ye(t("actLabelCleared"),{from:r}):Ye(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Ks(r)||r:o,s=n?Ks(n)||n:o;return r==null&&n!=null?Ye(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ye(t("actPriorityCleared"),{from:l}):Ye(t("actPriority"),{from:l,to:s})}case"card_title_changed":return Ye(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return Ye(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ye(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ye(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ye(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ye(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ye(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ye(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Un=e=>String(e).padStart(2,"0");function Rr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Un(t.getMonth()+1)}-${Un(t.getDate())} ${Un(t.getHours())}:${Un(t.getMinutes())}`}var Zt=require("react/jsx-runtime");function Qf({activities:e}){let t=Ve();if(e.length===0)return(0,Zt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Zt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Zt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Zt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Zt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Zt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Zf(o,t)]}),(0,Zt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Rr(o.ts),children:Rr(o.ts)})]},o.id)})})}var B=require("react/jsx-runtime");function Jf({open:e,card:t,labels:a,comments:o,activities:r,onOpenChange:n,onSave:l,onAddComment:s,onDelete:i,onChatWithAgent:u}){let c=Ve(),[d,f]=(0,Ya.useState)({id:"",title:"",note:"",label:"",priority:""}),[g,h]=(0,Ya.useState)(""),[m,p]=(0,Ya.useState)(!1),[L,C]=(0,Ya.useState)(!1);(0,Ya.useEffect)(()=>{e&&(f({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""}),h(""))},[e,t]);let x=I=>f(b=>({...b,...I})),v=async()=>{let I=g.trim();if(!t||!I||I.length>2e3||L)return;C(!0);let b=await s(t.id,I);C(!1),b!==!1&&h("")};return(0,B.jsx)(wo,{open:e,onOpenChange:n,children:(0,B.jsxs)(Aa,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:I=>I.preventDefault(),children:[(0,B.jsx)(Ta,{children:(0,B.jsx)(Ea,{className:"kanban-sr-only",children:c(t?"editCard":"addCard")})}),(0,B.jsxs)("div",{className:"kanban-form-stack",children:[(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsxs)(fa,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,B.jsx)("span",{children:c("fieldTitle")}),t&&(0,B.jsxs)("span",{className:"kanban-field-id",children:[c("fieldId"),": ",t.id]})]}),(0,B.jsx)($t,{id:"card-title",value:d.title,placeholder:c("titlePlaceholder"),maxLength:120,onChange:I=>x({title:I.target.value})})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(fa,{children:c("fieldLabel")}),(0,B.jsxs)(Gs,{value:d.label||"__none__",onValueChange:I=>x({label:I==="__none__"?"":I}),children:[(0,B.jsx)(Nn,{children:(0,B.jsx)(zs,{placeholder:c("noLabel")})}),(0,B.jsxs)(_n,{children:[(0,B.jsx)(To,{value:"__none__",children:c("noLabel")}),a.map(I=>(0,B.jsx)(To,{value:I.name,children:I.name},I.name))]})]})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(fa,{children:c("fieldPriority")}),(0,B.jsxs)(Gs,{value:d.priority||"__none__",onValueChange:I=>x({priority:I==="__none__"?"":I}),children:[(0,B.jsx)(Nn,{children:(0,B.jsx)(zs,{placeholder:c("noPriority")})}),(0,B.jsxs)(_n,{children:[(0,B.jsx)(To,{value:"__none__",children:c("noPriority")}),qn.map(I=>{let b=Yt[I];return(0,B.jsx)(To,{value:I,children:(0,B.jsxs)("span",{className:"kanban-inline-priority",children:[(0,B.jsx)("span",{className:"kanban-priority-dot",style:{background:b.color}}),b.label]})},I)})]})]})]}),(0,B.jsxs)("div",{className:"kanban-form-field",children:[(0,B.jsx)(fa,{htmlFor:"card-note",children:c("fieldNote")}),(0,B.jsx)(Hn,{id:"card-note",value:d.note,placeholder:c("notePlaceholder"),rows:5,maxLength:2e3,onChange:I=>x({note:I.target.value})})]}),t&&(0,B.jsxs)("div",{className:"kanban-comments-box",children:[(0,B.jsxs)(fa,{htmlFor:"card-comment",children:[c("commentsTitle")," ",(0,B.jsxs)("span",{className:"kanban-tabular",children:["(",o.length,")"]})]}),(0,B.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:o.length===0?(0,B.jsx)("p",{className:"kanban-muted-small",children:c("commentEmpty")}):(0,B.jsx)("ol",{className:"kanban-comment-list",children:o.map(I=>{let b=I.source==="agent";return(0,B.jsxs)("li",{className:"kanban-comment-item",children:[(0,B.jsxs)("div",{className:"kanban-comment-meta",children:[(0,B.jsx)("span",{className:`kanban-activity-actor ${b?"is-agent":"is-human"}`,children:c(b?"actorAgent":"actorHuman")}),(0,B.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:I.createdAt,children:Rr(I.createdAt)})]}),(0,B.jsx)("p",{className:"kanban-comment-content",children:I.content})]},I.id)})})}),(0,B.jsxs)("div",{className:"kanban-comment-composer",children:[(0,B.jsx)(Hn,{id:"card-comment",value:g,placeholder:c("commentPlaceholder"),rows:3,maxLength:2e3,disabled:L,onChange:I=>h(I.target.value),onKeyDown:I=>{(I.metaKey||I.ctrlKey)&&I.key==="Enter"&&(I.preventDefault(),v())}}),(0,B.jsxs)(Te,{type:"button",variant:"outline",disabled:L||!g.trim(),onClick:()=>{v()},children:[(0,B.jsx)(ar,{className:"kanban-icon"}),c("sendComment")]})]})]}),t&&(0,B.jsxs)("div",{className:"kanban-activity-box",children:[(0,B.jsx)(fa,{className:"kanban-muted-small",children:c("activityTitle")}),(0,B.jsx)("div",{className:"kanban-activity-scroll",children:(0,B.jsx)(Qf,{activities:r})})]})]}),(0,B.jsxs)(pr,{children:[t&&i&&(0,B.jsxs)(Te,{variant:"outline",className:"kanban-dialog-delete",disabled:m,onClick:async()=>{p(!0);let I=await i(t);p(!1),I!==!1&&n(!1)},children:[(0,B.jsx)(Wt,{className:"kanban-icon"}),c("delete")]}),(0,B.jsxs)(Sr,{children:[(0,B.jsx)(wr,{asChild:!0,children:(0,B.jsxs)(Te,{variant:"outline",disabled:!d.title.trim()&&!d.note.trim(),children:[(0,B.jsx)(ya,{className:"kanban-icon"}),c("chatWithAgent")]})}),(0,B.jsxs)(Mo,{align:"end",children:[(0,B.jsx)(jt,{onClick:()=>{u(d,"current"),n(!1)},children:c("chatCurrentSession")}),(0,B.jsx)(jt,{onClick:()=>{u(d,"new"),n(!1)},children:c("chatNewSession")})]})]}),(0,B.jsx)(Te,{variant:"outline",disabled:m||!d.title.trim(),onClick:async()=>{p(!0);let I=await l(d);p(!1),I!==!1&&n(!1)},children:c("save")})]})]})})}var ep=require("react/jsx-runtime");function gC({variant:e,className:t}={}){return te("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Xs({className:e,variant:t,...a}){return(0,ep.jsx)("div",{className:gC({variant:t,className:e}),...a})}var Za=U(require("react"),1);var Qa=require("react/jsx-runtime"),js=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-card",e),...t}));js.displayName="Card";var hC=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-card-header",e),...t}));hC.displayName="CardHeader";var xC=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-ui-card-title",e),...t}));xC.displayName="CardTitle";var LC=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-card-description",e),...t}));LC.displayName="CardDescription";var $s=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-card-content",e),...t}));$s.displayName="CardContent";var CC=Za.forwardRef(({className:e,...t},a)=>(0,Qa.jsx)("div",{ref:a,className:te("kanban-card-footer",e),...t}));CC.displayName="CardFooter";var at=require("react/jsx-runtime");function Ys({card:e,labels:t}){let a=Ve(),o=e.priority?Yt[e.priority]:null,r=Yf(t,e.label);return(0,at.jsx)(js,{className:"kanban-card",children:(0,at.jsxs)($s,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,at.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,at.jsx)(Xs,{variant:"secondary",className:"kanban-card-badge",style:{background:r,color:"#0b1220"},children:e.label}),o&&(0,at.jsx)(Xs,{variant:"secondary",className:"kanban-card-badge",style:{background:o.color,color:"#0b1220"},children:o.label})]}),(0,at.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,at.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,at.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,at.jsx)(ya,{"aria-hidden":"true"}),(0,at.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function tp({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=Kr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,at.jsx)("div",{ref:n,style:{transform:st.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,at.jsx)(Ys,{card:e,labels:t})})}var ft=require("react/jsx-runtime");function ap({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=qr({id:e.id,data:{type:"column"}}),{active:s,over:i}=Yo(),u=Ve(),c=s?.data.current?.type==="card"&&(l||i?.data.current?.columnId===e.id);return(0,ft.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ft.jsxs)("div",{className:"kanban-column-header",children:[(0,ft.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ft.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ft.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,ft.jsx)(zr,{items:t.map(d=>d.id),strategy:Gr,children:t.map(d=>(0,ft.jsx)(tp,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ft.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ft.jsx)("div",{className:"kanban-column-footer",children:(0,ft.jsxs)(Te,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ft.jsx)(Ut,{className:"kanban-icon"}),u("addCard")]})})]})}var Pr=require("react");var ye=require("react/jsx-runtime");function vC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=Kr({id:e.id}),d=Ve();return(0,ye.jsxs)("div",{ref:i,style:{transform:st.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,ye.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,ye.jsx)(Jo,{className:"kanban-icon"})}),(0,ye.jsx)($t,{value:t,maxLength:40,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,ye.jsx)(Te,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,ye.jsx)(Wt,{className:"kanban-icon"})})]})}function op({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=Ve(),[i,u]=(0,Pr.useState)({}),[c,d]=(0,Pr.useState)(""),f=Fr(lo(ra,{activationConstraint:{distance:8}}),lo(oa,{coordinateGetter:Xr}));(0,Pr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let g=m=>{let p=(i[m]??"").trim(),L=t.find(C=>C.id===m);L&&p&&p!==L.title&&r(m,p)},h=m=>{let{active:p,over:L}=m;L&&p.id!==L.id&&o(String(p.id),String(L.id))};return(0,ye.jsx)(wo,{open:e,onOpenChange:a,children:(0,ye.jsxs)(Aa,{className:"kanban-dialog-medium",children:[(0,ye.jsxs)(Ta,{children:[(0,ye.jsx)(Ea,{children:s("columnEdit")}),(0,ye.jsx)(mr,{children:s("columnEditDesc")})]}),(0,ye.jsx)(Hr,{sensors:f,collisionDetection:Mi,onDragEnd:h,children:(0,ye.jsx)(zr,{items:t.map(m=>m.id),strategy:Gr,children:(0,ye.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,ye.jsx)(vC,{column:m,value:i[m.id]??m.title,onValueChange:p=>u(L=>({...L,[m.id]:p})),onCommit:()=>g(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,ye.jsxs)("div",{className:"kanban-sortable-row",children:[(0,ye.jsx)($t,{value:c,placeholder:s("newColumnPlaceholder"),maxLength:40,onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,ye.jsxs)(Te,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,ye.jsx)(Ut,{className:"kanban-icon"}),s("add")]})]})]})})}var Eo=require("react");var Ee=require("react/jsx-runtime");function rp({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=Ve(),[s,i]=(0,Eo.useState)({}),[u,c]=(0,Eo.useState)(""),[d,f]=(0,Eo.useState)("#38bdf8");(0,Eo.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(h=>[h.name,{name:h.name,color:h.color}]))),c(""),f("#38bdf8"))},[e]);let g=h=>{let m=s[h];if(!m)return;let p=t.find(C=>C.name===h),L=m.name.trim();p&&L&&(L!==h||m.color!==p.color)&&r(h,L,m.color)};return(0,Ee.jsx)(wo,{open:e,onOpenChange:a,children:(0,Ee.jsxs)(Aa,{className:"kanban-dialog-medium",children:[(0,Ee.jsxs)(Ta,{children:[(0,Ee.jsx)(Ea,{children:l("labelEdit")}),(0,Ee.jsx)(mr,{children:l("labelEditDesc")})]}),(0,Ee.jsx)("div",{className:"kanban-label-list",children:t.map(h=>{let m=s[h.name]??{name:h.name,color:h.color};return(0,Ee.jsxs)("div",{className:"kanban-label-row",children:[(0,Ee.jsx)("input",{type:"color",value:m.color,className:"kanban-color-input",onChange:p=>i(L=>({...L,[h.name]:{...m,color:p.target.value}})),onBlur:()=>g(h.name)}),(0,Ee.jsx)($t,{value:m.name,maxLength:20,onChange:p=>i(L=>({...L,[h.name]:{...m,name:p.target.value}})),onBlur:()=>g(h.name),onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,Ee.jsx)(Te,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(h.name),children:(0,Ee.jsx)(Wt,{className:"kanban-icon"})})]},h.name)})}),(0,Ee.jsx)(pr,{className:"kanban-dialog-footer-layout",children:(0,Ee.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Ee.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:h=>f(h.target.value)}),(0,Ee.jsx)($t,{value:u,placeholder:l("newLabelPlaceholder"),maxLength:20,onChange:h=>c(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Ee.jsxs)(Te,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Ee.jsx)(Ut,{className:"kanban-icon"}),l("add")]})]})})]})})}function Wn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Zs=new Map,Qs=0,Vn=new Set;function np(e,t){Zs.set(e,t),Qs++;for(let a of Vn)a()}function lp(e){let t=Zs.get(e);if(t==null)return null;Zs.delete(e),Qs++;for(let a of Vn)a();return t}function sp(e){return Vn.add(e),()=>{Vn.delete(e)}}function ip(){return Qs}function up(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(So("fieldId")+": "+t),a&&n.push(a),r&&n.push(So("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var $=require("react/jsx-runtime");function dp(e,t,a,o,r){let n=e.find(p=>p.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(p=>p.columnId===n.columnId).findIndex(p=>p.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(p=>p.id!==t),i=s.filter(p=>p.columnId===a),u=o?i.findIndex(p=>p.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],g=i[i.length-1],h=f?d.indexOf(f):g?d.indexOf(g)+1:d.length;return d.splice(h,0,{...n,columnId:a}),{cards:d.every((p,L)=>p.id===e[L]?.id&&p.columnId===e[L]?.columnId)?e:d,toIndex:c}}function cp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,l=a?a(w=>w.items):[],s=a?a(w=>w.recentWorkspaceId):void 0,i=Array.isArray(l)?l.find(w=>Array.isArray(w.sessionIds)&&w.sessionIds.includes(t)):void 0,u=i?i.workspaceId:s||"default",c=Ve(),[d,f]=(0,fe.useState)(null),[g,h]=(0,fe.useState)(""),[m,p]=(0,fe.useState)([]),[L,C]=(0,fe.useState)(null),[x,v]=(0,fe.useState)(null),[I,b]=(0,fe.useState)(!1),[y,R]=(0,fe.useState)(!1),[P,T]=(0,fe.useState)(!1),[M,E]=(0,fe.useState)(""),N=(0,fe.useRef)(null),H=(0,fe.useRef)(d),Y=(0,fe.useRef)(null),j=(0,fe.useRef)(u),_=(0,fe.useRef)(0),G=(0,fe.useRef)(0);H.current=d,j.current=u;let[z,A]=(0,fe.useState)(null),Le=Fr(lo(ra,{activationConstraint:{distance:8}}),lo(oa,{coordinateGetter:Xr})),K=(0,fe.useCallback)((w,k,O)=>{j.current!==k||O<G.current||(G.current=O,w&&w.board&&(f({...w.board,cards:Array.isArray(w.board.cards)?w.board.cards.map(q=>({...q,comments:Array.isArray(q.comments)?q.comments:[]})):[],activities:Array.isArray(w.board.activities)?w.board.activities:[]}),h("")),Array.isArray(w&&w.warnings)&&w.warnings.length>0&&p(q=>[...q,...w.warnings]))},[]),Q=(0,fe.useCallback)(async(w,k={})=>{let O=++_.current;try{let q=await Wn(w,k,u);return K(q,u,O),!0}catch(q){return h(c("actionFailed")+String(q&&q.message||q)),!1}},[u,K,c]),Ce=(0,fe.useCallback)(()=>{let w=++_.current;T(!0),Wn("get",{},u).then(k=>K(k,u,w)).catch(k=>h(c("loadFailed")+String(k&&k.message||k))).finally(()=>T(!1))},[u,K,c]);(0,fe.useEffect)(()=>{let w=!0,k=++_.current;return f(null),v(null),C(null),h(""),p([]),Wn("get",{},u).then(O=>{w&&K(O,u,k)}).catch(O=>{w&&h(c("loadFailed")+String(O&&O.message||O))}),()=>{w=!1}},[u,K,c]),(0,fe.useLayoutEffect)(()=>{let w=Me=>{let ue=Me;for(;ue;){let ge=getComputedStyle(ue).overflowY;if(ge==="auto"||ge==="scroll")return ue;ue=ue.parentElement}return null},k=()=>{let Me=N.current;if(!Me)return;let ue=Me.getBoundingClientRect().top,ge=w(Me.parentElement),ve=window.innerHeight;if(ge){let ot=ge.querySelector("[data-composer-seat]"),Ze=ot?ot.getBoundingClientRect().top:0;ot&&ot.offsetHeight>0&&Ze>ue?ve=Ze:ve=ge.getBoundingClientRect().bottom}A(Math.max(0,Math.floor(ve-ue)))};k();let O=w(N.current?.parentElement??null),q=new ResizeObserver(k);return q.observe(document.documentElement),O&&q.observe(O),window.addEventListener("resize",k),()=>{q.disconnect(),window.removeEventListener("resize",k)}},[d!==null]);let Re=(0,fe.useCallback)(w=>{let k=Ai(w),O=k.length>0?k:il(w),q=Xo(O,"id");if(q==null)return[];if(new Set((d?.columns??[]).map(ue=>ue.id)).has(String(q))){let ue=(d?.cards??[]).filter(ge=>ge.columnId===q).map(ge=>ge.id);if(ue.length>0){let ge=Br({...w,droppableContainers:w.droppableContainers.filter(ve=>ve.id!==q&&ue.includes(String(ve.id)))});ge.length>0&&(q=ge[0].id)}}return[{id:q}]},[d]),ie=w=>{let k=H.current;if(!k||k.cards===w)return;let O={...k,cards:w};H.current=O,f(O)},Pe=w=>{if(w.active.data.current?.type!=="card")return;let k=H.current,O=k?.cards.find(q=>q.id===w.active.id);!O||!k||(Y.current=k.cards,C(O))},F=({active:w,over:k})=>{let O=H.current;if(!k||!O||w.data.current?.type!=="card")return;let q=String(w.id),Me=O.cards.find(Ze=>Ze.id===q),ue=O.cards.find(Ze=>Ze.id===k.id),ge=ue?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!Me||!ge||Me.columnId===ge)return;let ve=w.rect.current.translated,ot=!!(ue&&ve&&ve.top+ve.height/2>k.rect.top+k.rect.height/2);ie(dp(O.cards,q,ge,ue?.id??null,ot).cards)},ee=({active:w,over:k})=>{let O=H.current,q=Y.current;if(Y.current=null,!k||!O||w.data.current?.type!=="card"){q&&ie(q),C(null);return}let Me=String(w.id),ue=O.cards.find(Ht=>Ht.id===k.id),ge=ue?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!ge){q&&ie(q),C(null);return}let ve=w.rect.current.translated,ot=!!(ue&&ve&&ve.top+ve.height/2>k.rect.top+k.rect.height/2),Ze=dp(O.cards,Me,ge,ue?.id??null,ot);ie(Ze.cards),C(null),(!q||Ze.cards.some((Ht,kr)=>Ht.id!==q[kr]?.id||Ht.columnId!==q[kr]?.columnId))&&Q("moveCard",{id:Me,columnId:ge,toIndex:Ze.toIndex}).then(Ht=>{Ht||Ce()})},X=()=>{Y.current&&ie(Y.current),Y.current=null,C(null)},le=w=>{if(!x)return Promise.resolve(!1);if(x.card){let k={id:x.card.id};return w.title!==x.card.title&&(k.title=w.title),w.note!==x.card.note&&(k.note=w.note),w.label!==(x.card.label??"")&&(k.label=w.label),w.priority!==(x.card.priority??"")&&(k.priority=w.priority),Q("updateCard",k)}return Q("addCard",{columnId:x.columnId,title:w.title,note:w.note,label:w.label||void 0,priority:w.priority||void 0})},oe=(0,fe.useCallback)((w,k)=>{let O=up(w);if(O){if(k==="current"){o?.setDraft(O);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(q=>{q&&(np(q,O),n.open(q))}).catch(q=>h(c("actionFailed")+String(q&&q.message||q)))}},[o,r,n,u,c]);return d?(0,$.jsxs)("div",{ref:N,className:"kanban-root kanban-view",style:z!=null?{height:z}:void 0,children:[g&&(0,$.jsx)("p",{className:"kanban-error",children:g}),m.length>0&&(0,$.jsxs)("div",{className:"kanban-warning",children:[(0,$.jsxs)("div",{className:"kanban-warning-body",children:[(0,$.jsx)("p",{className:"kanban-warning-title",children:c("warnings")}),m.map((w,k)=>(0,$.jsx)("p",{className:"kanban-warning-item",children:w},k))]}),(0,$.jsx)(Te,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>p([]),children:c("dismiss")})]}),(0,$.jsxs)(Hr,{sensors:Le,collisionDetection:Re,onDragStart:Pe,onDragOver:F,onDragEnd:ee,onDragCancel:X,children:[(0,$.jsxs)("div",{className:"kanban-content",children:[(0,$.jsxs)("div",{className:"kanban-toolbar",children:[(0,$.jsx)(Te,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:Ce,children:(0,$.jsx)(tr,{className:P?"kanban-animate-spin":void 0})}),(0,$.jsxs)(Sr,{children:[(0,$.jsx)(wr,{asChild:!0,children:(0,$.jsx)(Te,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("settings"),children:(0,$.jsx)(or,{className:"kanban-icon"})})}),(0,$.jsxs)(Mo,{align:"start",children:[(0,$.jsxs)(jt,{onClick:()=>b(!0),children:[(0,$.jsx)(er,{className:"kanban-icon"}),c("columnEdit")]}),(0,$.jsxs)(jt,{onClick:()=>R(!0),children:[(0,$.jsx)(rr,{className:"kanban-icon"}),c("labelEdit")]})]})]}),(0,$.jsxs)(Sr,{children:[(0,$.jsx)(wr,{asChild:!0,children:(0,$.jsx)(Te,{variant:M?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:c("priorityFilter"),children:(0,$.jsx)(la,{className:"kanban-icon"})})}),(0,$.jsxs)(Mo,{align:"start",children:[(0,$.jsxs)(jt,{onClick:()=>E(""),children:[(0,$.jsx)("span",{className:"kanban-filter-check",children:!M&&(0,$.jsx)(na,{className:"kanban-icon"})}),c("all")]}),qn.map(w=>(0,$.jsxs)(jt,{onClick:()=>E(w),children:[(0,$.jsx)("span",{className:"kanban-filter-check",children:M===w&&(0,$.jsx)(na,{className:"kanban-icon"})}),(0,$.jsx)("span",{className:"kanban-priority-dot",style:{background:Yt[w].color}}),Yt[w].label]},w))]})]})]}),(0,$.jsx)("div",{className:"kanban-board-scroll",children:d.columns.map(w=>{let k=d.cards.filter(O=>O.columnId===w.id&&(!M||O.priority===M));return(0,$.jsx)(ap,{column:w,cards:k,labels:d.labels,onAddCard:O=>v({card:null,columnId:O.id}),onOpenCard:O=>v({card:O,columnId:O.columnId})},w.id)})})]}),(0,$.jsx)(ji,{children:L?(0,$.jsx)("div",{className:"kanban-drag-preview",children:(0,$.jsx)(Ys,{card:L,labels:d.labels})}):null})]}),(0,$.jsx)(Jf,{open:x!==null,card:x?.card??null,labels:d.labels,comments:x?.card?d.cards.find(w=>w.id===x.card.id)?.comments??[]:[],activities:x?.card?d.activities.filter(w=>w.cardId===x.card.id):[],onOpenChange:w=>{w||v(null)},onSave:le,onAddComment:(w,k)=>Q("addComment",{id:w,content:k}),onDelete:w=>Q("deleteCard",{id:w.id}),onChatWithAgent:oe}),(0,$.jsx)(op,{open:I,columns:d.columns,onOpenChange:b,onReorder:(w,k)=>{let O=d.columns.findIndex(q=>q.id===k);O>=0&&Q("moveColumn",{id:w,toIndex:O})},onRename:(w,k)=>Q("renameColumn",{id:w,title:k}),onDelete:w=>Q("deleteColumn",{id:w}),onAdd:w=>Q("addColumn",{title:w})}),(0,$.jsx)(rp,{open:y,labels:d.labels,onOpenChange:R,onAdd:(w,k)=>Q("addLabel",{name:w,color:k}),onUpdate:(w,k,O)=>Q("updateLabel",{name:w,newName:k,color:O}),onDelete:w=>Q("deleteLabel",{name:w})})]}):(0,$.jsx)("div",{className:"kanban-root kanban-loading",children:g?(0,$.jsx)("p",{className:"kanban-error",children:g}):(0,$.jsx)("p",{className:"kanban-muted-text",children:c("loading")})})}var Gn=require("react");function fp({sessionId:e,inputActions:t}){let a=(0,Gn.useSyncExternalStore)(sp,ip);return(0,Gn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=lp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var pp={name:"dsh-kanban",inject:["slots","locale"],apply(e){Dd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>So("boardTab")},r=>(0,Js.createElement)(cp,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,Js.createElement)(fp,r)))}};var mp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+mp+"]")){let e=document.createElement("style");e.setAttribute(mp,""),e.textContent=ii,document.head.appendChild(e)}var IC=pp;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/defaultAttributes.mjs:
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
lucide-react/dist/esm/icons/trash-2.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.34.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})