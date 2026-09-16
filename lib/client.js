window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var bp=Object.create;var kr=Object.defineProperty;var Sp=Object.getOwnPropertyDescriptor;var wp=Object.getOwnPropertyNames;var yp=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty;var oi=e=>{throw TypeError(e)};var Pp=(e,t)=>{for(var a in t)kr(e,a,{get:t[a],enumerable:!0})},ri=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of wp(t))!Rp.call(e,r)&&r!==a&&kr(e,r,{get:()=>t[r],enumerable:!(o=Sp(t,r))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?bp(yp(e)):{},ri(t||!e||!e.__esModule?kr(a,"default",{value:e,enumerable:!0}):a,e)),kp=e=>ri(kr({},"__esModule",{value:!0}),e);var ni=(e,t,a)=>t.has(e)||oi("Cannot "+a);var Ge=(e,t,a)=>(ni(e,t,"read from private field"),a?a.call(e):t.get(e)),li=(e,t,a)=>t.has(e)?oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Xn=(e,t,a,o)=>(ni(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var bC={};Pp(bC,{default:()=>IC});module.exports=kp(bC);var si=`/*
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
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: var(--dsw-shadow-lv2);
  transition: border-color 150ms ease;
}

.kanban-column.is-over {
  border-color: var(--dsw-alias-brand-primary);
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
  box-sizing: border-box;
  position: fixed;
  z-index: 50;
  top: 50%;
  left: 50%;
  display: grid;
  width: calc(100% - 32px);
  max-width: 512px;
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
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
`;var Zs=require("react");var fe=require("react");var w=U(require("react")),Ca=require("react-dom");var Ie=require("react");function ui(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ie.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var _o=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Dr(e){return"nodeType"in e}function ze(e){var t,a;return e?pa(e)?e:Dr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Mr(e){let{Document:t}=ze(e);return e instanceof t}function eo(e){return pa(e)?!1:e instanceof ze(e).HTMLElement}function jn(e){return e instanceof ze(e).SVGElement}function ma(e){return e?pa(e)?e.document:Dr(e)?Mr(e)?e:eo(e)||jn(e)?e.ownerDocument:document:document:document}var nt=_o?Ie.useLayoutEffect:Ie.useEffect;function Ho(e){let t=(0,Ie.useRef)(e);return nt(()=>{t.current=e}),(0,Ie.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function di(){let e=(0,Ie.useRef)(null),t=(0,Ie.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Ie.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function to(e,t){t===void 0&&(t=[e]);let a=(0,Ie.useRef)(e);return nt(()=>{a.current!==e&&(a.current=e)},t),a}function ao(e,t){let a=(0,Ie.useRef)();return(0,Ie.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function qo(e){let t=Ho(e),a=(0,Ie.useRef)(null),o=(0,Ie.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Uo(e){let t=(0,Ie.useRef)();return(0,Ie.useEffect)(()=>{t.current=e},[e]),t.current}var Kn={};function ga(e,t){return(0,Ie.useMemo)(()=>{if(t)return t;let a=Kn[e]==null?0:Kn[e]+1;return Kn[e]=a,e+"-"+a},[e,t])}function ci(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var ha=ci(1),xa=ci(-1);function Mp(e){return"clientX"in e&&"clientY"in e}function oo(e){if(!e)return!1;let{KeyboardEvent:t}=ze(e.target);return t&&e instanceof t}function Ap(e){if(!e)return!1;let{TouchEvent:t}=ze(e.target);return t&&e instanceof t}function Wo(e){if(Ap(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Mp(e)?{x:e.clientX,y:e.clientY}:null}var rt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[rt.Translate.toString(e),rt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ii="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function fi(e){return e.matches(ii)?e:e.querySelector(ii)}var La=U(require("react")),Tp={display:"none"};function pi(e){let{id:t,value:a}=e;return La.default.createElement("div",{id:t,style:Tp},a)}function mi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return La.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function gi(){let[e,t]=(0,La.useState)("");return{announce:(0,La.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var ki=(0,w.createContext)(null);function Ep(e){let t=(0,w.useContext)(ki);(0,w.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Op(){let[e]=(0,w.useState)(()=>new Set),t=(0,w.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,w.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Fp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Bp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Np(e){let{announcements:t=Bp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Fp}=e,{announce:n,announcement:l}=gi(),s=ga("DndLiveRegion"),[i,u]=(0,w.useState)(!1);if((0,w.useEffect)(()=>{u(!0)},[]),Ep((0,w.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;t.onDragMove&&n(t.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;n(t.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;n(t.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;n(t.onDragCancel({active:f,over:g}))}}),[n,t])),!i)return null;let c=w.default.createElement(w.default.Fragment,null,w.default.createElement(pi,{id:o,value:r.draggable}),w.default.createElement(mi,{id:s,announcement:l}));return a?(0,Ca.createPortal)(c,a):c}var Me;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Me||(Me={}));function Tr(){}function ro(e,t){return(0,w.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Or(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Ct=Object.freeze({x:0,y:0});function rl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _p(e,t){let a=Wo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function nl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Hp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Qn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Ko(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function hi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Di=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=hi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=rl(hi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(nl)},Fr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Qn(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Qn(i),c=r.reduce((f,g,h)=>f+rl(u[h],g),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(nl)};function qp(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var ll=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=qp(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(Hp)};function Up(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Mi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Up(o,s)){let u=Qn(s).reduce((d,f)=>d+rl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(nl)};function Wp(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ai(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ct}function Vp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Gp=Vp(1);function Ti(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function zp(e,t,a){let o=Ti(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Xp={ignoreTransform:!1};function ba(e,t){t===void 0&&(t=Xp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=ze(e).getComputedStyle(e);u&&(a=zp(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function xi(e){return ba(e,{ignoreTransform:!0})}function Kp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function jp(e,t){return t===void 0&&(t=ze(e).getComputedStyle(e)),t.position==="fixed"}function $p(e,t){t===void 0&&(t=ze(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function jo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Mr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!eo(r)||jn(r)||a.includes(r))return a;let n=ze(e).getComputedStyle(r);return r!==e&&$p(r,n)&&a.push(r),jp(r,n)?a:o(r.parentNode)}return e?o(e):a}function Ei(e){let[t]=jo(e,1);return t??null}function $n(e){return!_o||!e?null:pa(e)?e:Dr(e)?Mr(e)||e===ma(e).scrollingElement?window:eo(e)?e:null:null}function Oi(e){return pa(e)?e.scrollX:e.scrollLeft}function Fi(e){return pa(e)?e.scrollY:e.scrollTop}function Jn(e){return{x:Oi(e),y:Fi(e)}}var Ee;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ee||(Ee={}));function Bi(e){return!_o||!e?!1:e===document.scrollingElement}function Ni(e){let t={x:0,y:0},a=Bi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Yp={x:.2,y:.2};function Zp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Yp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Ni(e),g={x:0,y:0},h={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(g.y=Ee.Backward,h.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(g.y=Ee.Forward,h.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(g.x=Ee.Forward,h.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(g.x=Ee.Backward,h.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:g,speed:h}}function Qp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function _i(e){return e.reduce((t,a)=>ha(t,Jn(a)),Ct)}function Jp(e){return e.reduce((t,a)=>t+Oi(a),0)}function em(e){return e.reduce((t,a)=>t+Fi(a),0)}function Hi(e,t){if(t===void 0&&(t=ba),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Ei(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var tm=[["x",["left","right"],Jp],["y",["top","bottom"],em]],Go=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=jo(a),r=_i(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of tm)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},va=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function am(e){let{EventTarget:t}=ze(e);return e instanceof t?e:ma(e)}function Yn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var ft;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ft||(ft={}));function Li(e){e.preventDefault()}function om(e){e.stopPropagation()}var ae;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ae||(ae={}));var qi={start:[ae.Space,ae.Enter],cancel:[ae.Esc],end:[ae.Space,ae.Enter,ae.Tab]},rm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ae.Right:return{...a,x:a.x+25};case ae.Left:return{...a,x:a.x-25};case ae.Down:return{...a,y:a.y+25};case ae.Up:return{...a,y:a.y-25}}},ta=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new va(ma(a)),this.windowListeners=new va(ze(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ft.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Hi(o),a(Ct)}handleKeyDown(t){if(oo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=qi,coordinateGetter:l=rm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:Ct;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=xa(d,c),g={x:0,y:0},{scrollableAncestors:h}=o.current;for(let m of h){let p=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:v,maxScroll:I,minScroll:b}=Ni(m),y=Qp(m),R={x:Math.min(p===ae.Right?y.right-y.width/2:y.right,Math.max(p===ae.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(p===ae.Down?y.bottom-y.height/2:y.bottom,Math.max(p===ae.Down?y.top:y.top+y.height/2,d.y))},k=p===ae.Right&&!C||p===ae.Left&&!L,O=p===ae.Down&&!v||p===ae.Up&&!x;if(k&&R.x!==d.x){let E=m.scrollLeft+f.x,T=p===ae.Right&&E<=I.x||p===ae.Left&&E>=b.x;if(T&&!f.y){m.scrollTo({left:E,behavior:s});return}T?g.x=m.scrollLeft-E:g.x=p===ae.Right?m.scrollLeft-I.x:m.scrollLeft-b.x,g.x&&m.scrollBy({left:-g.x,behavior:s});break}else if(O&&R.y!==d.y){let E=m.scrollTop+f.y,T=p===ae.Down&&E<=I.y||p===ae.Up&&E>=b.y;if(T&&!f.x){m.scrollTo({top:E,behavior:s});return}T?g.y=m.scrollTop-E:g.y=p===ae.Down?m.scrollTop-I.y:m.scrollTop-b.y,g.y&&m.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,ha(xa(d,this.referenceCoordinates),g))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ta.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=qi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Ci(e){return!!(e&&"distance"in e)}function vi(e){return!!(e&&"delay"in e)}var zo=class{constructor(t,a,o){var r;o===void 0&&(o=am(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ma(l),this.documentListeners=new va(this.document),this.listeners=new va(o),this.windowListeners=new va(ze(l)),this.initialCoordinates=(r=Wo(n))!=null?r:Ct,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.DragStart,Li),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),this.windowListeners.add(ft.ContextMenu,Li),this.documentListeners.add(ft.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(vi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Ci(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(ft.Click,om,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ft.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Wo(t))!=null?a:Ct,u=xa(r,i);if(!o&&s){if(Ci(s)){if(s.tolerance!=null&&Yn(u,s.tolerance))return this.handleCancel();if(Yn(u,s.distance))return this.handleStart()}if(vi(s)&&Yn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ae.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},nm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},aa=class extends zo{constructor(t){let{event:a}=t,o=ma(a.target);super(t,nm,o)}};aa.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var lm={move:{name:"mousemove"},end:{name:"mouseup"}},el;(function(e){e[e.RightClick=2]="RightClick"})(el||(el={}));var tl=class extends zo{constructor(t){super(t,lm,ma(t.event.target))}};tl.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===el.RightClick?!1:(o?.({event:a}),!0)}}];var Zn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},al=class extends zo{constructor(t){super(t,Zn)}static setup(){return window.addEventListener(Zn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Zn.move.name,t)};function t(){}}};al.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Vo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Vo||(Vo={}));var Er;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Er||(Er={}));function sm(e){let{acceleration:t,activator:a=Vo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Er.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,g=um({delta:d,disabled:!n}),[h,m]=di(),p=(0,w.useRef)({x:0,y:0}),x=(0,w.useRef)({x:0,y:0}),C=(0,w.useMemo)(()=>{switch(a){case Vo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Vo.DraggableRect:return r}},[a,r,i]),L=(0,w.useRef)(null),v=(0,w.useCallback)(()=>{let b=L.current;if(!b)return;let y=p.current.x*x.current.x,R=p.current.y*x.current.y;b.scrollBy(y,R)},[]),I=(0,w.useMemo)(()=>s===Er.TreeOrder?[...u].reverse():u,[s,u]);(0,w.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let b of I){if(o?.(b)===!1)continue;let y=u.indexOf(b),R=c[y];if(!R)continue;let{direction:k,speed:O}=Zp(b,R,C,t,f);for(let E of["x","y"])g[E][k[E]]||(O[E]=0,k[E]=0);if(O.x>0||O.y>0){m(),L.current=b,h(v,l),p.current=O,x.current=k;return}}p.current={x:0,y:0},x.current={x:0,y:0},m()},[t,v,o,m,n,l,JSON.stringify(C),JSON.stringify(g),h,u,I,c,JSON.stringify(f)])}var im={x:{[Ee.Backward]:!1,[Ee.Forward]:!1},y:{[Ee.Backward]:!1,[Ee.Forward]:!1}};function um(e){let{delta:t,disabled:a}=e,o=Uo(t);return ao(r=>{if(a||!o||!r)return im;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ee.Backward]:r.x[Ee.Backward]||n.x===-1,[Ee.Forward]:r.x[Ee.Forward]||n.x===1},y:{[Ee.Backward]:r.y[Ee.Backward]||n.y===-1,[Ee.Forward]:r.y[Ee.Forward]||n.y===1}}},[a,t,o])}function dm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return ao(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function cm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Xo;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Xo||(Xo={}));var ol;(function(e){e.Optimized="optimized"})(ol||(ol={}));var Ii=new Map;function fm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,w.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,w.useRef)(e),d=p(),f=to(d),g=(0,w.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),h=(0,w.useRef)(null),m=ao(x=>{if(d&&!a)return Ii;if(!x||x===Ii||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let v=L.node.current,I=v?new Go(i(v),v):null;L.rect.current=I,I&&C.set(L.id,I)}return C}return x},[e,n,a,d,i]);return(0,w.useEffect)(()=>{c.current=e},[e]),(0,w.useEffect)(()=>{d||g()},[a,d]),(0,w.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,w.useEffect)(()=>{d||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{g(),h.current=null},s))},[s,d,g,...o]),{droppableRects:m,measureDroppableContainers:g,measuringScheduled:n!=null};function p(){switch(u){case Xo.Always:return!1;case Xo.BeforeDragging:return a;default:return!a}}}function sl(e,t){return ao(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function pm(e,t){return sl(e,t)}function mm(e){let{callback:t,disabled:a}=e,o=Ho(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Br(e){let{callback:t,disabled:a}=e,o=Ho(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function gm(e){return new Go(ba(e),e)}function bi(e,t,a){t===void 0&&(t=gm);let[o,r]=(0,w.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=mm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Br({callback:n});return nt(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function hm(e){let t=sl(e);return Ai(e,t)}var Si=[];function xm(e){let t=(0,w.useRef)(e),a=ao(o=>e?o&&o!==Si&&e&&t.current&&e.parentNode===t.current.parentNode?o:jo(e):Si,[e]);return(0,w.useEffect)(()=>{t.current=e},[e]),a}function Lm(e){let[t,a]=(0,w.useState)(null),o=(0,w.useRef)(e),r=(0,w.useCallback)(n=>{let l=$n(n.target);l&&a(s=>s?(s.set(l,Jn(l)),new Map(s)):null)},[]);return(0,w.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=$n(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Jn(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=$n(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,w.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>ha(n,l),Ct):_i(e):Ct,[e,t])}function wi(e,t){t===void 0&&(t=[]);let a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{a.current=null},t),(0,w.useEffect)(()=>{let o=e!==Ct;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?xa(e,a.current):Ct}function Cm(e){(0,w.useEffect)(()=>{if(!_o)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function vm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Ui(e){return(0,w.useMemo)(()=>e?Kp(e):null,[e])}var yi=[];function Im(e,t){t===void 0&&(t=ba);let[a]=e,o=Ui(a?ze(a):null),[r,n]=(0,w.useState)(yi);function l(){n(()=>e.length?e.map(i=>Bi(i)?o:new Go(t(i),i)):yi)}let s=Br({callback:l});return nt(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Wi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return eo(t)?t:e}function bm(e){let{measure:t}=e,[a,o]=(0,w.useState)(null),r=(0,w.useCallback)(u=>{for(let{target:c}of u)if(eo(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Br({callback:r}),l=(0,w.useCallback)(u=>{let c=Wi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=qo(l);return(0,w.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var Sm=[{sensor:aa,options:{}},{sensor:ta,options:{}}],wm={current:{}},Ar={draggable:{measure:xi},droppable:{measure:xi,strategy:Xo.WhileDragging,frequency:ol.Optimized},dragOverlay:{measure:ba}},Ia=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},ym={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ia,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Tr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ar,measureDroppableContainers:Tr,windowRect:null,measuringScheduled:!1},Vi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Tr,draggableNodes:new Map,over:null,measureDroppableContainers:Tr},$o=(0,w.createContext)(Vi),Gi=(0,w.createContext)(ym);function Rm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ia}}}function Pm(e,t){switch(t.type){case Me.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Me.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Me.DragEnd:case Me.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Me.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new Ia(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Me.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new Ia(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Me.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new Ia(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function km(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,w.useContext)($o),n=Uo(o),l=Uo(a?.id);return(0,w.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!oo(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=fi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function zi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Dm(e){return(0,w.useMemo)(()=>({draggable:{...Ar.draggable,...e?.draggable},droppable:{...Ar.droppable,...e?.droppable},dragOverlay:{...Ar.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Mm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,w.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;nt(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ai(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Ei(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Nr=(0,w.createContext)({...Ct,scaleX:1,scaleY:1}),ea;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ea||(ea={}));var _r=(0,w.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=Sm,collisionDetection:d=ll,measuring:f,modifiers:g,...h}=t,m=(0,w.useReducer)(Pm,void 0,Rm),[p,x]=m,[C,L]=Op(),[v,I]=(0,w.useState)(ea.Uninitialized),b=v===ea.Initialized,{draggable:{active:y,nodes:R,translate:k},droppable:{containers:O}}=p,E=y!=null?R.get(y):null,T=(0,w.useRef)({initial:null,translated:null}),B=(0,w.useMemo)(()=>{var Ve;return y!=null?{id:y,data:(Ve=E?.data)!=null?Ve:wm,rect:T}:null},[y,E]),q=(0,w.useRef)(null),[Z,K]=(0,w.useState)(null),[H,G]=(0,w.useState)(null),z=to(h,Object.values(h)),M=ga("DndDescribedBy",l),re=(0,w.useMemo)(()=>O.getEnabled(),[O]),$=Dm(f),{droppableRects:se,measureDroppableContainers:ge,measuringScheduled:ye}=fm(re,{dragging:b,dependencies:[k.x,k.y],config:$.droppable}),Le=dm(R,y),Re=(0,w.useMemo)(()=>H?Wo(H):null,[H]),F=Ip(),J=pm(Le,$.draggable.measure);Mm({activeNode:y!=null?R.get(y):null,config:F.layoutShiftCompensation,initialRect:J,measure:$.draggable.measure});let X=bi(Le,$.draggable.measure,J),S=bi(Le?Le.parentElement:null),P=(0,w.useRef)({activatorEvent:null,active:null,activeNode:Le,collisionRect:null,collisions:null,droppableRects:se,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),A=O.getNodeFor((a=P.current.over)==null?void 0:a.id),N=bm({measure:$.dragOverlay.measure}),ne=(o=N.nodeRef.current)!=null?o:Le,le=b?(r=N.rect)!=null?r:X:null,ue=!!(N.nodeRef.current&&N.rect),ve=hm(ue?null:X),dt=Ui(ne?ze(ne):null),De=xm(b?A??Le:null),To=Im(De),Lt=zi(g,{transform:{x:k.x-ve.x,y:k.y-ve.y,scaleX:1,scaleY:1},activatorEvent:H,active:B,activeNodeRect:X,containerNodeRect:S,draggingNodeRect:le,over:P.current.over,overlayNodeRect:N.rect,scrollableAncestors:De,scrollableAncestorRects:To,windowRect:dt}),Eo=Re?ha(Re,k):null,Qs=Lm(De),mp=wi(Qs),gp=wi(Qs,[X]),Za=ha(Lt,mp),Qa=le?Gp(le,Lt):null,Oo=B&&Qa?d({active:B,collisionRect:Qa,droppableRects:se,droppableContainers:re,pointerCoordinates:Eo}):null,Js=Ko(Oo,"id"),[Yt,ei]=(0,w.useState)(null),hp=ue?Lt:ha(Lt,gp),xp=Wp(hp,(n=Yt?.rect)!=null?n:null,X),Gn=(0,w.useRef)(null),ti=(0,w.useCallback)((Ve,tt)=>{let{sensor:at,options:Zt}=tt;if(q.current==null)return;let ct=R.get(q.current);if(!ct)return;let ot=Ve.nativeEvent,Dt=new at({active:q.current,activeNode:ct,event:ot,options:Zt,context:P,onAbort(_e){if(!R.get(_e))return;let{onDragAbort:Mt}=z.current,_t={id:_e};Mt?.(_t),C({type:"onDragAbort",event:_t})},onPending(_e,Qt,Mt,_t){if(!R.get(_e))return;let{onDragPending:Bo}=z.current,Jt={id:_e,constraint:Qt,initialCoordinates:Mt,offset:_t};Bo?.(Jt),C({type:"onDragPending",event:Jt})},onStart(_e){let Qt=q.current;if(Qt==null)return;let Mt=R.get(Qt);if(!Mt)return;let{onDragStart:_t}=z.current,Fo={activatorEvent:ot,active:{id:Qt,data:Mt.data,rect:T}};(0,Ca.unstable_batchedUpdates)(()=>{_t?.(Fo),I(ea.Initializing),x({type:Me.DragStart,initialCoordinates:_e,active:Qt}),C({type:"onDragStart",event:Fo}),K(Gn.current),G(ot)})},onMove(_e){x({type:Me.DragMove,coordinates:_e})},onEnd:Ja(Me.DragEnd),onCancel:Ja(Me.DragCancel)});Gn.current=Dt;function Ja(_e){return async function(){let{active:Mt,collisions:_t,over:Fo,scrollAdjustedTranslate:Bo}=P.current,Jt=null;if(Mt&&Bo){let{cancelDrop:No}=z.current;Jt={activatorEvent:ot,active:Mt,collisions:_t,delta:Bo,over:Fo},_e===Me.DragEnd&&typeof No=="function"&&await Promise.resolve(No(Jt))&&(_e=Me.DragCancel)}q.current=null,(0,Ca.unstable_batchedUpdates)(()=>{x({type:_e}),I(ea.Uninitialized),ei(null),K(null),G(null),Gn.current=null;let No=_e===Me.DragEnd?"onDragEnd":"onDragCancel";if(Jt){let zn=z.current[No];zn?.(Jt),C({type:No,event:Jt})}})}}},[R]),Lp=(0,w.useCallback)((Ve,tt)=>(at,Zt)=>{let ct=at.nativeEvent,ot=R.get(Zt);if(q.current!==null||!ot||ct.dndKit||ct.defaultPrevented)return;let Dt={active:ot};Ve(at,tt.options,Dt)===!0&&(ct.dndKit={capturedBy:tt.sensor},q.current=Zt,ti(at,tt))},[R,ti]),ai=cm(c,Lp);Cm(c),nt(()=>{X&&v===ea.Initializing&&I(ea.Initialized)},[X,v]),(0,w.useEffect)(()=>{let{onDragMove:Ve}=z.current,{active:tt,activatorEvent:at,collisions:Zt,over:ct}=P.current;if(!tt||!at)return;let ot={active:tt,activatorEvent:at,collisions:Zt,delta:{x:Za.x,y:Za.y},over:ct};(0,Ca.unstable_batchedUpdates)(()=>{Ve?.(ot),C({type:"onDragMove",event:ot})})},[Za.x,Za.y]),(0,w.useEffect)(()=>{let{active:Ve,activatorEvent:tt,collisions:at,droppableContainers:Zt,scrollAdjustedTranslate:ct}=P.current;if(!Ve||q.current==null||!tt||!ct)return;let{onDragOver:ot}=z.current,Dt=Zt.get(Js),Ja=Dt&&Dt.rect.current?{id:Dt.id,rect:Dt.rect.current,data:Dt.data,disabled:Dt.disabled}:null,_e={active:Ve,activatorEvent:tt,collisions:at,delta:{x:ct.x,y:ct.y},over:Ja};(0,Ca.unstable_batchedUpdates)(()=>{ei(Ja),ot?.(_e),C({type:"onDragOver",event:_e})})},[Js]),nt(()=>{P.current={activatorEvent:H,active:B,activeNode:Le,collisionRect:Qa,collisions:Oo,droppableRects:se,draggableNodes:R,draggingNode:ne,draggingNodeRect:le,droppableContainers:O,over:Yt,scrollableAncestors:De,scrollAdjustedTranslate:Za},T.current={initial:le,translated:Qa}},[B,Le,Oo,Qa,R,ne,le,se,O,Yt,De,Za]),sm({...F,delta:k,draggingRect:Qa,pointerCoordinates:Eo,scrollableAncestors:De,scrollableAncestorRects:To});let Cp=(0,w.useMemo)(()=>({active:B,activeNode:Le,activeNodeRect:X,activatorEvent:H,collisions:Oo,containerNodeRect:S,dragOverlay:N,draggableNodes:R,droppableContainers:O,droppableRects:se,over:Yt,measureDroppableContainers:ge,scrollableAncestors:De,scrollableAncestorRects:To,measuringConfiguration:$,measuringScheduled:ye,windowRect:dt}),[B,Le,X,H,Oo,S,N,R,O,se,Yt,ge,De,To,$,ye,dt]),vp=(0,w.useMemo)(()=>({activatorEvent:H,activators:ai,active:B,activeNodeRect:X,ariaDescribedById:{draggable:M},dispatch:x,draggableNodes:R,over:Yt,measureDroppableContainers:ge}),[H,ai,B,X,x,M,R,Yt,ge]);return w.default.createElement(ki.Provider,{value:L},w.default.createElement($o.Provider,{value:vp},w.default.createElement(Gi.Provider,{value:Cp},w.default.createElement(Nr.Provider,{value:xp},u)),w.default.createElement(km,{disabled:s?.restoreFocus===!1})),w.default.createElement(Np,{...s,hiddenTextDescribedById:M}));function Ip(){let Ve=Z?.autoScrollEnabled===!1,tt=typeof i=="object"?i.enabled===!1:i===!1,at=b&&!Ve&&!tt;return typeof i=="object"?{...i,enabled:at}:{enabled:at}}}),Am=(0,w.createContext)(null),Ri="button",Tm="Draggable";function Xi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ga(Tm),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,w.useContext)($o),{role:g=Ri,roleDescription:h="draggable",tabIndex:m=0}=r??{},p=i?.id===t,x=(0,w.useContext)(p?Nr:Am),[C,L]=qo(),[v,I]=qo(),b=vm(l,t),y=to(a);nt(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:v,data:y}),()=>{let k=d.get(t);k&&k.key===n&&d.delete(t)}),[d,t]);let R=(0,w.useMemo)(()=>({role:g,tabIndex:m,"aria-disabled":o,"aria-pressed":p&&g===Ri?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,g,m,p,h,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:p,listeners:o?void 0:b,node:C,over:f,setNodeRef:L,setActivatorNodeRef:I,transform:x}}function Yo(){return(0,w.useContext)(Gi)}var Em="Droppable",Om={timeout:25};function Hr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ga(Em),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,w.useContext)($o),c=(0,w.useRef)({disabled:a}),d=(0,w.useRef)(!1),f=(0,w.useRef)(null),g=(0,w.useRef)(null),{disabled:h,updateMeasurementsFor:m,timeout:p}={...Om,...r},x=to(m??o),C=(0,w.useCallback)(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),g.current=null},p)},[p]),L=Br({callback:C,disabled:h||!l}),v=(0,w.useCallback)((R,k)=>{L&&(k&&(L.unobserve(k),d.current=!1),R&&L.observe(R))},[L]),[I,b]=qo(v),y=to(t);return(0,w.useEffect)(()=>{!L||!I.current||(L.disconnect(),d.current=!1,L.observe(I.current))},[I,L]),(0,w.useEffect)(()=>(s({type:Me.RegisterDroppable,element:{id:o,key:n,disabled:a,node:I,rect:f,data:y}}),()=>s({type:Me.UnregisterDroppable,key:n,id:o})),[o]),(0,w.useEffect)(()=>{a!==c.current.disabled&&(s({type:Me.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:I,over:i,setNodeRef:b}}function Fm(e){let{animation:t,children:a}=e,[o,r]=(0,w.useState)(null),[n,l]=(0,w.useState)(null),s=Uo(a);return!a&&!o&&s&&r(s),nt(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),w.default.createElement(w.default.Fragment,null,a,o?(0,w.cloneElement)(o,{ref:l}):null)}var Bm={x:0,y:0,scaleX:1,scaleY:1};function Nm(e){let{children:t}=e;return w.default.createElement($o.Provider,{value:Vi},w.default.createElement(Nr.Provider,{value:Bm},t))}var _m={position:"fixed",touchAction:"none"},Hm=e=>oo(e)?"transform 250ms ease":void 0,qm=(0,w.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=Hm}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={..._m,width:s.width,height:s.height,top:s.top,left:s.left,transform:rt.Transform.toString(d),transformOrigin:r&&o?_p(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return w.default.createElement(a,{className:l,style:f,ref:t},n)}),Um=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Wm=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:rt.Transform.toString(t)},{transform:rt.Transform.toString(a)}]},Vm={duration:250,easing:"ease",keyframes:Wm,sideEffects:Um({styles:{active:{opacity:"0"}}})};function Gm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Ho((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Wi(l);if(!u)return;let{transform:c}=ze(l).getComputedStyle(l),d=Ti(c);if(!d)return;let f=typeof t=="function"?t:zm(t);return Hi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function zm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Vm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},g=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[h]=g,m=g[g.length-1];if(JSON.stringify(h)===JSON.stringify(m))return;let p=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(g,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{p?.(),C()}})}}var Pi=0;function Xm(e){return(0,w.useMemo)(()=>{if(e!=null)return Pi++,Pi},[e])}var Ki=w.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggableNodes:h,droppableContainers:m,dragOverlay:p,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:v,windowRect:I}=Yo(),b=(0,w.useContext)(Nr),y=Xm(d?.id),R=zi(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggingNodeRect:p.rect,over:x,overlayNodeRect:p.rect,scrollableAncestors:L,scrollableAncestorRects:v,transform:b,windowRect:I}),k=sl(f),O=Gm({config:o,draggableNodes:h,droppableContainers:m,measuringConfiguration:C}),E=k?p.setRef:void 0;return w.default.createElement(Nm,null,w.default.createElement(Fm,{animation:O},d&&y?w.default.createElement(qm,{key:y,id:d.id,ref:E,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:k,style:{zIndex:u,...r},transform:R},a):null))});var be=U(require("react"));function ji(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Km(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function qr(e){return e!==null&&e>=0}function jm(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function $m(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var $i=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=ji(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Ur={scaleX:1,scaleY:1},Vr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Ur}:null}let i=Ym(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Ur}:r<a&&r>=l?{x:0,y:s.height+i,...Ur}:{x:0,y:0,...Ur}};function Ym(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Yi="Sortable",Zi=be.default.createContext({activeIndex:-1,containerId:Yi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:$i,disabled:{draggable:!1,droppable:!1}});function Gr(e){let{children:t,id:a,items:o,strategy:r=$i,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=Yo(),d=ga(Yi,a),f=s.rect!==null,g=(0,be.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),h=l!=null,m=l?g.indexOf(l.id):-1,p=u?g.indexOf(u.id):-1,x=(0,be.useRef)(g),C=!jm(g,x.current),L=p!==-1&&m===-1||C,v=$m(n);nt(()=>{C&&h&&c(g)},[C,g,h,c]),(0,be.useEffect)(()=>{x.current=g},[g]);let I=(0,be.useMemo)(()=>({activeIndex:m,containerId:d,disabled:v,disableTransforms:L,items:g,overIndex:p,useDragOverlay:f,sortedRects:Km(g,i),strategy:r}),[m,d,v.draggable,v.droppable,L,g,p,i,f,r]);return be.default.createElement(Zi.Provider,{value:I},t)}var Zm=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return ji(a,o,r).indexOf(t)},Qm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Jm={duration:200,easing:"ease"},Qi="transform",eg=rt.Transition.toString({property:Qi,duration:0,easing:"linear"}),tg={roleDescription:"sortable"};function ag(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,be.useState)(null),s=(0,be.useRef)(a);return nt(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=ba(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,be.useEffect)(()=>{n&&l(null)},[n]),n}function zr(e){let{animateLayoutChanges:t=Qm,attributes:a,disabled:o,data:r,getNewIndex:n=Zm,id:l,strategy:s,resizeObserverConfig:i,transition:u=Jm}=e,{items:c,containerId:d,activeIndex:f,disabled:g,disableTransforms:h,sortedRects:m,overIndex:p,useDragOverlay:x,strategy:C}=(0,be.useContext)(Zi),L=og(o,g),v=c.indexOf(l),I=(0,be.useMemo)(()=>({sortable:{containerId:d,index:v,items:c},...r}),[d,r,v,c]),b=(0,be.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:k,setNodeRef:O}=Hr({id:l,data:I,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:E,activatorEvent:T,activeNodeRect:B,attributes:q,setNodeRef:Z,listeners:K,isDragging:H,over:G,setActivatorNodeRef:z,transform:M}=Xi({id:l,data:I,attributes:{...tg,...a},disabled:L.draggable}),re=ui(O,Z),$=!!E,se=$&&!h&&qr(f)&&qr(p),ge=!x&&H,ye=ge&&se?M:null,Re=se?ye??(s??C)({rects:m,activeNodeRect:B,activeIndex:f,overIndex:p,index:v}):null,F=qr(f)&&qr(p)?n({id:l,items:c,activeIndex:f,overIndex:p}):v,J=E?.id,X=(0,be.useRef)({activeId:J,items:c,newIndex:F,containerId:d}),S=c!==X.current.items,P=t({active:E,containerId:d,isDragging:H,isSorting:$,id:l,index:v,items:c,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:u,wasDragging:X.current.activeId!=null}),A=ag({disabled:!P,index:v,node:R,rect:y});return(0,be.useEffect)(()=>{$&&X.current.newIndex!==F&&(X.current.newIndex=F),d!==X.current.containerId&&(X.current.containerId=d),c!==X.current.items&&(X.current.items=c)},[$,F,d,c]),(0,be.useEffect)(()=>{if(J===X.current.activeId)return;if(J!=null&&X.current.activeId==null){X.current.activeId=J;return}let ne=setTimeout(()=>{X.current.activeId=J},50);return()=>clearTimeout(ne)},[J]),{active:E,activeIndex:f,attributes:q,data:I,rect:y,index:v,newIndex:F,items:c,isOver:k,isSorting:$,isDragging:H,listeners:K,node:R,overIndex:p,over:G,setNodeRef:re,setActivatorNodeRef:z,setDroppableNodeRef:O,setDraggableNodeRef:Z,transform:A??Re,transition:N()};function N(){if(A||S&&X.current.newIndex===v)return eg;if(!(ge&&!oo(T)||!u)&&($||P))return rt.Transition.toString({...u,property:Qi})}}function og(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Wr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var rg=[ae.Down,ae.Right,ae.Up,ae.Left],Xr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(rg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ae.Down:o.top<f.top&&i.push(d);break;case ae.Up:o.top>f.top&&i.push(d);break;case ae.Left:o.left>f.left&&i.push(d);break;case ae.Right:o.left<f.left&&i.push(d);break}});let u=Fr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Ko(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),g=f?r.get(f.id):null,h=f?.node.current;if(h&&g&&d&&f){let p=jo(h).some((b,y)=>s[y]!==b),x=Ji(d,f),C=ng(d,f),L=p||!x?{x:0,y:0}:{x:C?o.width-g.width:0,y:C?o.height-g.height:0},v={x:g.left,y:g.top};return L.x&&L.y?v:xa(v,L)}}}};function Ji(e,t){return!Wr(e)||!Wr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function ng(e,t){return!Wr(e)||!Wr(t)||!Ji(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var $r=require("react");var Kr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var eu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var tu=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var il=e=>{let t=tu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Zo=require("react");var jr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var au=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var no=require("react");var lg=(0,no.createContext)({});var ou=()=>(0,no.useContext)(lg);var ru=(0,Zo.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:g=""}=ou()??{},h=o??d?Number(a??c)*24/Number(t??u):a??c;return(0,Zo.createElement)("svg",{ref:i,...jr,width:t??u??jr.width,height:t??u??jr.height,stroke:e??f,strokeWidth:h,className:Kr("lucide",g,r),...!n&&!au(s)&&{"aria-hidden":"true"},...s},[...l.map(([m,p])=>(0,Zo.createElement)(m,p)),...Array.isArray(n)?n:[n]])});var de=(e,t)=>{let a=(0,$r.forwardRef)(({className:o,...r},n)=>(0,$r.createElement)(ru,{ref:n,iconNode:t,className:Kr(`lucide-${eu(il(e))}`,`lucide-${e}`,o),...r}));return a.displayName=il(e),a};var sg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oa=de("check",sg);var ig=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lo=de("chevron-down",ig);var ug=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Qo=de("chevron-up",ug);var dg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ra=de("funnel",dg);var cg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Jo=de("grip-vertical",cg);var fg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],er=de("list",fg);var pg=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Sa=de("message-square",pg);var mg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ht=de("plus",mg);var gg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tr=de("refresh-cw",gg);var hg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ar=de("send",hg);var xg=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],or=de("settings-2",xg);var Lg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],rr=de("tag",Lg);var Cg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],qt=de("trash-2",Cg);var vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nr=de("x",vg);var ja=require("react");var gu=U(require("react"),1);var He=U(require("react"),1);var nu=U(require("react"),1),Ig=Object.defineProperty,dl=(e,t)=>Ig(e,"name",{value:t,configurable:!0});function ul(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}dl(ul,"setRef");function lu(...e){return t=>{let a=!1,o=e.map(r=>{let n=ul(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():ul(e[r],null)}}}}dl(lu,"composeRefs");function Q(...e){return nu.useCallback(lu(...e),e)}dl(Q,"useComposedRefs");var bg=Object.defineProperty,vt=(e,t)=>bg(e,"name",{value:t,configurable:!0});function Xe(e){let t=He.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];cl(r)&&typeof Yr=="function"&&(r=Yr(r._payload)),He.Children.forEach(r,f=>{if(cu(f)){s=!0;let g=f,h="child"in g.props?g.props.child:g.props.children;cl(h)&&typeof Yr=="function"&&(h=Yr(h._payload)),l=wg(g,h),i.push(l?.props?.children)}else i.push(f)}),l?l=He.cloneElement(l,void 0,i):!s&&He.Children.count(r)===1&&He.isValidElement(r)&&(l=r);let u=l?du(l):void 0,c=Q(o,u);if(!l){if(r||r===0)throw new Error(s?Pg(e):Rg(e));return r}let d=uu(n,l.props??{});return l.type!==He.Fragment&&(d.ref=o?c:u),He.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}vt(Xe,"createSlot");var su=Xe("Slot"),iu=Symbol.for("radix.slottable");function Sg(e){let t=vt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=iu,t}vt(Sg,"createSlottable");var wg=vt((e,t)=>{if("child"in e.props){let a=e.props.child;return He.isValidElement(a)?He.cloneElement(a,void 0,e.props.children(a.props.children)):null}return He.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function uu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}vt(uu,"mergeProps");function du(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}vt(du,"getElementRef");function cu(e){return He.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===iu}vt(cu,"isSlottable");var yg=Symbol.for("react.lazy");function cl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===yg&&"_payload"in e&&fu(e._payload)}vt(cl,"isLazyComponent");function fu(e){return typeof e=="object"&&e!==null&&"then"in e}vt(fu,"isPromiseLike");var Rg=vt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Pg=vt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Yr=He[" use ".trim().toString()];function pu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=pu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function mu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=pu(e))&&(o&&(o+=" "),o+=t);return o}function ee(...e){return mu(e)}var hu=require("react/jsx-runtime");function kg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ee("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Ae=gu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,hu.jsx)(o?su:"button",{className:kg({variant:t,size:a,className:e}),ref:n,...r}));Ae.displayName="Button";var fr=U(require("react"),1);var xe=U(require("react"),1);var Dg=Object.defineProperty,so=(e,t)=>Dg(e,"name",{value:t,configurable:!0}),xu=!!(typeof window<"u"&&window.document&&window.document.createElement);function W(e,t,{checkForDefaultPrevented:a=!0}={}){return so(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}so(W,"composeEventHandlers");function Mg(e){if(!xu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}so(Mg,"getOwnerWindow");function fl(e){if(!xu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}so(fl,"getOwnerDocument");function Lu(e,t=!1){let{activeElement:a}=fl(e);if(!a?.nodeName)return null;if(Cu(a)&&a.contentDocument)return Lu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=fl(a).getElementById(o);if(r)return r}}return a}so(Lu,"getActiveElement");function Cu(e){return e.tagName==="IFRAME"}so(Cu,"isFrame");var mt=U(require("react"),1),pl=require("react/jsx-runtime"),Ag=Object.defineProperty,pt=(e,t)=>Ag(e,"name",{value:t,configurable:!0});function Tg(e,t){let a=mt.createContext(t);a.displayName=e+"Context";let o=pt(n=>{let{children:l,...s}=n,i=mt.useMemo(()=>s,Object.values(s));return(0,pl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=mt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return pt(r,"useContext"),[o,r]}pt(Tg,"createContext");function qe(e,t=[]){let a=[];function o(n,l){let s=mt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=pt(d=>{let{scope:f,children:g,...h}=d,m=f?.[e]?.[i]||s,p=mt.useMemo(()=>h,Object.values(h));return(0,pl.jsx)(m.Provider,{value:p,children:g})},"Provider");u.displayName=n+"Provider";function c(d,f,g={}){let{optional:h=!1}=g,m=f?.[e]?.[i]||s,p=mt.useContext(m);if(p)return p;if(l!==void 0)return l;if(!h)throw new Error(`\`${d}\` must be used within \`${n}\``)}return pt(c,"useContext"),[u,c]}pt(o,"createContext");let r=pt(()=>{let n=a.map(l=>mt.createContext(l));return pt(function(s){let i=s?.[e]||n;return mt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,vu(r,...t)]}pt(qe,"createContextScope");function vu(...e){let t=e[0];if(e.length===1)return t;let a=pt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return pt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return mt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}pt(vu,"composeContextScopes");var ml=U(require("react"),1);var Iu=U(require("react"),1),ie=globalThis?.document?Iu.useLayoutEffect:()=>{};var Eg=Object.defineProperty,Og=(e,t)=>Eg(e,"name",{value:t,configurable:!0}),Fg=ml[" useId ".trim().toString()]||(()=>{}),Bg=0;function lt(e){let[t,a]=ml.useState(Fg());return ie(()=>{e||a(o=>o??String(Bg++))},[e]),e||(t?`radix-${t}`:"")}Og(lt,"useId");var gt=U(require("react"),1);var Zr=!1;var It=U(require("react"),1);var io=U(require("react"),1),Ng=Object.defineProperty,_g=(e,t)=>Ng(e,"name",{value:t,configurable:!0}),bu=io[" useEffectEvent ".trim().toString()],Su=io[" useInsertionEffect ".trim().toString()];function gl(e){if(typeof bu=="function")return bu(e);let t=io.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Su=="function"?Su(()=>{t.current=e}):ie(()=>{t.current=e}),io.useMemo(()=>((...a)=>t.current?.(...a)),[])}_g(gl,"useEffectEvent");var Hg=Object.defineProperty,lr=(e,t)=>Hg(e,"name",{value:t,configurable:!0}),qg=gt[" useInsertionEffect ".trim().toString()]||ie;function At({prop:e,defaultProp:t,onChange:a=lr(()=>{},"onChange"),caller:o}){let[r,n,l]=yu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Zr){let c=gt.useRef(e!==void 0);gt.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=gt.useCallback(c=>{if(s){let d=Ru(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}lr(At,"useControllableState");function yu({defaultProp:e,onChange:t}){let[a,o]=gt.useState(e),r=gt.useRef(a),n=gt.useRef(t);return qg(()=>{n.current=t},[t]),gt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}lr(yu,"useUncontrolledState");function Ru(e){return typeof e=="function"}lr(Ru,"isFunction");var wu=Symbol("RADIX:SYNC_STATE");function Ug(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=gl(l);if(Zr){let p=It.useRef(r!==void 0);It.useEffect(()=>{let x=p.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=It.useReducer((p,x)=>{if(x.type===wu)return{...p,state:x.state};let C=e(p,x);return i&&!Object.is(C.state,p.state)&&u(C.state),C},...c),g=d.state,h=It.useRef(g);It.useEffect(()=>{h.current!==g&&(h.current=g,i||u(g))},[g,h,i]);let m=It.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return It.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:wu,state:r})},[r,d.state,i]),[m,f]}lr(Ug,"useControllableStateReducer");var ce=U(require("react"),1);var Pu=U(require("react"),1),ku=U(require("react-dom"),1);var Du=require("react/jsx-runtime"),Wg=Object.defineProperty,Vg=(e,t)=>Wg(e,"name",{value:t,configurable:!0}),Gg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],te=Gg.reduce((e,t)=>{let a=Xe(`Primitive.${t}`),o=Pu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Du.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function sr(e,t){e&&ku.flushSync(()=>e.dispatchEvent(t))}Vg(sr,"dispatchDiscreteCustomEvent");var uo=U(require("react"),1),zg=Object.defineProperty,Xg=(e,t)=>zg(e,"name",{value:t,configurable:!0});function Oe(e){let t=uo.useRef(e);return uo.useEffect(()=>{t.current=e}),uo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Xg(Oe,"useCallbackRef");var Au=require("react/jsx-runtime"),Kg=Object.defineProperty,Fe=(e,t)=>Kg(e,"name",{value:t,configurable:!0}),hl="dismissableLayer.update",jg="dismissableLayer.pointerDownOutside",$g="dismissableLayer.focusOutside",Mu,Tu=ce.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),co=ce.forwardRef(Fe(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ce.useContext(Tu),[f,g]=ce.useState(null),h=f?.ownerDocument??globalThis?.document,[,m]=ce.useState({}),p=Q(a,g),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,v=f?x.indexOf(f):-1,I=d.layersWithOutsidePointerEventsDisabled.size>0,b=v>=L,y=ce.useRef(!1),R=Eu(T=>{l?.(T),i?.(T),T.defaultPrevented||u?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ce.useCallback(T=>{if(!(T instanceof Node))return!1;let B=[...d.branches].some(q=>q.contains(T));return b&&!B},[d.branches,b])}),k=Ou(T=>{if(r&&y.current)return;let B=T.target;[...d.branches].some(Z=>Z.contains(B))||(s?.(T),i?.(T),T.defaultPrevented||u?.())},h),O=f?v===x.length-1:!1,E=Oe(T=>{T.key==="Escape"&&(n?.(T),!T.defaultPrevented&&u&&(T.preventDefault(),u()))});return ce.useEffect(()=>{if(O)return h.addEventListener("keydown",E,{capture:!0}),()=>h.removeEventListener("keydown",E,{capture:!0})},[h,O,E]),ce.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Mu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),xl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=Mu))}},[f,h,o,d]),ce.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),xl())},[f,d]),ce.useEffect(()=>{let T=Fe(()=>m({}),"handleUpdate");return document.addEventListener(hl,T),()=>document.removeEventListener(hl,T)},[]),(0,Au.jsx)(te.div,{...c,ref:p,style:{pointerEvents:I?b?"auto":"none":void 0,...t.style},onFocusCapture:W(t.onFocusCapture,k.onFocusCapture),onBlurCapture:W(t.onBlurCapture,k.onBlurCapture),onPointerDownCapture:W(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function Ll(){let e=ce.useContext(Tu),[t,a]=ce.useState(null);return ce.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Fe(Ll,"useDismissableLayerSurface");var Yg=Fe(()=>!0,"IS_TRUE");function Eu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=Yg}=t,s=Oe(e),i=ce.useRef(!1),u=ce.useRef(!1),c=ce.useRef(new Map),d=ce.useRef(()=>{});return ce.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Fe(f,"resetOutsideInteraction");function g(){return Array.from(c.current.values()).some(Boolean)}Fe(g,"isOutsideInteractionIntercepted");function h(L){if(!u.current)return;let v=L.target;v instanceof Node&&[...n].some(b=>b.contains(v))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Fe(h,"handleInteractionCapture");function m(L){u.current&&c.current.set(L.type,!1)}Fe(m,"handleInteractionBubble");let p=Fe(L=>{if(L.target&&!i.current){let I=function(){a.removeEventListener("click",d.current);let y=g();f(),y||Cl(jg,s,b,{discrete:!0})};var v=I;if(Fe(I,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?I():(a.removeEventListener("click",d.current),d.current=I,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,h,!0),a.addEventListener(L,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",p),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,h,!0),a.removeEventListener(L,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Fe(()=>i.current=!0,"onPointerDownCapture")}}Fe(Eu,"usePointerDownOutside");function Ou(e,t=globalThis?.document){let a=Oe(e),o=ce.useRef(!1);return ce.useEffect(()=>{let r=Fe(n=>{n.target&&!o.current&&Cl($g,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Fe(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Fe(()=>o.current=!1,"onBlurCapture")}}Fe(Ou,"useFocusOutside");function xl(){let e=new CustomEvent(hl);document.dispatchEvent(e)}Fe(xl,"dispatchUpdate");function Cl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?sr(r,n):r.dispatchEvent(n)}Fe(Cl,"handleAndDispatchCustomEvent");var ht=U(require("react"),1);var Nu=require("react/jsx-runtime"),Zg=Object.defineProperty,Ye=(e,t)=>Zg(e,"name",{value:t,configurable:!0}),vl="focusScope.autoFocusOnMount",Il="focusScope.autoFocusOnUnmount",Fu={bubbles:!1,cancelable:!0},fo=ht.forwardRef(Ye(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=ht.useState(null),c=Oe(n),d=Oe(l),f=ht.useRef(null),g=Q(a,u),h=ht.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ht.useEffect(()=>{if(r){let L=function(y){if(h.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Ut(f.current,{select:!0})},v=function(y){if(h.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Ut(f.current,{select:!0}))},I=function(y){if(document.activeElement===document.body)for(let k of y)k.removedNodes.length>0&&Ut(i)};var p=L,x=v,C=I;Ye(L,"handleFocusIn"),Ye(v,"handleFocusOut"),Ye(I,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",v);let b=new MutationObserver(I);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",v),b.disconnect()}}},[r,i,h.paused]),ht.useEffect(()=>{if(i){Bu.add(h);let p=document.activeElement;if(!i.contains(p)){let C=new CustomEvent(vl,Fu);i.addEventListener(vl,c),i.dispatchEvent(C),C.defaultPrevented||(_u(Vu(wl(i)),{select:!0}),document.activeElement===p&&Ut(i))}return()=>{i.removeEventListener(vl,c),setTimeout(()=>{let C=new CustomEvent(Il,Fu);i.addEventListener(Il,d),i.dispatchEvent(C),C.defaultPrevented||Ut(p??document.body,{select:!0}),i.removeEventListener(Il,d),Bu.remove(h)},0)}}},[i,c,d,h]);let m=ht.useCallback(p=>{if(!o&&!r||h.paused)return;let x=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,C=document.activeElement;if(x&&C){let L=p.currentTarget,[v,I]=Hu(L);v&&I?!p.shiftKey&&C===I?(p.preventDefault(),o&&Ut(v,{select:!0})):p.shiftKey&&C===v&&(p.preventDefault(),o&&Ut(I,{select:!0})):C===L&&p.preventDefault()}},[o,r,h.paused]);return(0,Nu.jsx)(te.div,{tabIndex:-1,...s,ref:g,onKeyDown:m})},"FocusScope"));function _u(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Ut(o,{select:t}),document.activeElement!==a)return}Ye(_u,"focusFirst");function Hu(e){let t=wl(e),a=bl(t,e),o=bl(t.reverse(),e);return[a,o]}Ye(Hu,"getTabbableEdges");function wl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ye(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Ye(wl,"getTabbableCandidates");function bl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):qu(o,{upTo:t})))return o}Ye(bl,"findVisible");function qu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ye(qu,"isHidden");function Uu(e){return e instanceof HTMLInputElement&&"select"in e}Ye(Uu,"isSelectableInput");function Ut(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Uu(e)&&t&&e.select()}}Ye(Ut,"focus");var Bu=Wu();function Wu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Sl(e,t),e.unshift(t)},remove(t){e=Sl(e,t),e[0]?.resume()}}}Ye(Wu,"createFocusScopesStack");function Sl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ye(Sl,"arrayRemove");function Vu(e){return e.filter(t=>t.tagName!=="A")}Ye(Vu,"removeLinks");var Qr=U(require("react"),1),Gu=U(require("react-dom"),1);var zu=require("react/jsx-runtime"),Qg=Object.defineProperty,Jg=(e,t)=>Qg(e,"name",{value:t,configurable:!0}),po=Qr.forwardRef(Jg(function(t,a){let{container:o,...r}=t,[n,l]=Qr.useState(!1);ie(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Gu.createPortal((0,zu.jsx)(te.div,{...r,ref:a}),s):null},"Portal"));var Ue=U(require("react"),1);var Xu=U(require("react"),1),eh=Object.defineProperty,Wt=(e,t)=>eh(e,"name",{value:t,configurable:!0});function Ku(e,t){return Xu.useReducer((a,o)=>t[a][o]??a,e)}Wt(Ku,"useStateMachine");var Vt=Wt(e=>{let{present:t,children:a}=e,o=ju(t),r=typeof a=="function"?a({present:o.isPresent}):Ue.Children.only(a),n=$u(o.ref,Yu(r));return typeof a=="function"||o.isPresent?Ue.cloneElement(r,{ref:n}):null},"Presence");function ju(e){let[t,a]=Ue.useState(),o=Ue.useRef(null),r=Ue.useRef(e),n=Ue.useRef("none"),l=Ue.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=Ku(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ue.useEffect(()=>{i==="mounted"?(n.current=l.current??mo(o.current),l.current=void 0):n.current="none"},[i]),ie(()=>{let c=o.current,d=r.current;if(d!==e){let g=n.current,h=mo(c);e?(l.current=h,u("MOUNT")):h==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&g!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),ie(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Wt(h=>{let p=mo(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&p&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),g=Wt(h=>{h.target===t&&(n.current=mo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ue.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=mo(d)}else o.current=null;a(c)},[])}}Wt(ju,"usePresence");function yl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Wt(yl,"setRef");function $u(...e){let t=Ue.useRef(e);return t.current=e,Ue.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=yl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():yl(o[l],null)}}},[])}Wt($u,"useStableComposedRefs");function mo(e){return e?.animationName||"none"}Wt(mo,"getAnimationName");function Yu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Wt(Yu,"getElementRef");var Zu=U(require("react"),1),th=Object.defineProperty,Pl=(e,t)=>th(e,"name",{value:t,configurable:!0}),Jr=0,go=null;function ah(e){return na(),e.children}Pl(ah,"FocusGuards");function na(){Zu.useEffect(()=>{go||(go={start:Rl(),end:Rl()});let{start:e,end:t}=go;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Jr++,()=>{Jr===1&&(go?.start.remove(),go?.end.remove(),go=null),Jr=Math.max(0,Jr-1)}},[])}Pl(na,"useFocusGuards");function Rl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Pl(Rl,"createFocusGuard");var Qe=function(){return Qe=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Qe.apply(this,arguments)};function en(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Qu(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var nn=U(require("react"));var Ke=U(require("react"));var wa="right-scroll-bar-position",ya="width-before-scroll-bar",kl="with-scroll-bars-hidden",Dl="--removed-body-scroll-bar-size";function tn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Ju=require("react");function ed(e,t){var a=(0,Ju.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var an=U(require("react"));var oh=typeof window<"u"?an.useLayoutEffect:an.useEffect,td=new WeakMap;function Ml(e,t){var a=ed(t||null,function(o){return e.forEach(function(r){return tn(r,o)})});return oh(function(){var o=td.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||tn(s,null)}),n.forEach(function(s){r.has(s)||tn(s,l)})}td.set(a,e)},[e]),a}function rh(e){return e}function nh(e,t){t===void 0&&(t=rh);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Al(e){e===void 0&&(e={});var t=nh(null);return t.options=Qe({async:!0,ssr:!1},e),t}var ad=U(require("react")),od=function(e){var t=e.sideCar,a=en(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return ad.createElement(o,Qe({},a))};od.isSideCarExport=!0;function Tl(e,t){return e.useMedium(t),od}var on=Al();var El=function(){},ir=Ke.forwardRef(function(e,t){var a=Ke.useRef(null),o=Ke.useState({onScrollCapture:El,onWheelCapture:El,onTouchMoveCapture:El}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,g=e.noRelative,h=e.noIsolation,m=e.inert,p=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,v=en(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=f,b=Ml([a,t]),y=Qe(Qe({},v),r);return Ke.createElement(Ke.Fragment,null,c&&Ke.createElement(I,{sideCar:on,removeScrollBar:u,shards:d,noRelative:g,noIsolation:h,inert:m,setCallbacks:n,allowPinchZoom:!!p,lockRef:a,gapMode:L}),l?Ke.cloneElement(Ke.Children.only(s),Qe(Qe({},y),{ref:b})):Ke.createElement(C,Qe({},y,{className:i,ref:b}),s))});ir.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ir.classNames={fullWidth:ya,zeroRight:wa};var he=U(require("react"));var xo=U(require("react"));var ld=U(require("react"));var rd;var nd=function(){if(rd)return rd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function lh(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=nd();return t&&e.setAttribute("nonce",t),e}function sh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ih(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ol=function(){var e=0,t=null;return{add:function(a){e==0&&(t=lh())&&(sh(t,a),ih(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Fl=function(){var e=Ol();return function(t,a){ld.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var ur=function(){var e=Fl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var uh={left:0,top:0,right:0,gap:0},Bl=function(e){return parseInt(e||"",10)||0},dh=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Bl(a),Bl(o),Bl(r)]},Nl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return uh;var t=dh(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var ch=ur(),ho="data-scroll-locked",fh=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(kl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(ho,`] {
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
  
  .`).concat(wa,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(ya,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(wa," .").concat(wa,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(ya," .").concat(ya,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(ho,`] {
    `).concat(Dl,": ").concat(s,`px;
  }
`)},sd=function(){var e=parseInt(document.body.getAttribute(ho)||"0",10);return isFinite(e)?e:0},ph=function(){xo.useEffect(function(){return document.body.setAttribute(ho,(sd()+1).toString()),function(){var e=sd()-1;e<=0?document.body.removeAttribute(ho):document.body.setAttribute(ho,e.toString())}},[])},_l=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;ph();var n=xo.useMemo(function(){return Nl(r)},[r]);return xo.createElement(ch,{styles:fh(n,!t,r,a?"":"!important")})};var Hl=!1;if(typeof window<"u")try{dr=Object.defineProperty({},"passive",{get:function(){return Hl=!0,!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Hl=!1}var dr,Ra=Hl?{passive:!1}:!1;var mh=function(e){return e.tagName==="TEXTAREA"},id=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!mh(e)&&a[t]==="visible")},gh=function(e){return id(e,"overflowY")},hh=function(e){return id(e,"overflowX")},ql=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=ud(e,o);if(r){var n=dd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},xh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},Lh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},ud=function(e,t){return e==="v"?gh(t):hh(t)},dd=function(e,t){return e==="v"?xh(t):Lh(t)},Ch=function(e,t){return e==="h"&&t==="rtl"?-1:1},cd=function(e,t,a,o,r){var n=Ch(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var g=dd(e,s),h=g[0],m=g[1],p=g[2],x=m-p-n*h;(h||x)&&ud(e,s)&&(d+=x,f+=h);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var rn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},fd=function(e){return[e.deltaX,e.deltaY]},pd=function(e){return e&&"current"in e?e.current:e},vh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ih=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},bh=0,Lo=[];function md(e){var t=he.useRef([]),a=he.useRef([0,0]),o=he.useRef(),r=he.useState(bh++)[0],n=he.useState(ur)[0],l=he.useRef(e);he.useEffect(function(){l.current=e},[e]),he.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=Qu([e.lockRef.current],(e.shards||[]).map(pd),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=he.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var x=rn(m),C=a.current,L="deltaX"in m?m.deltaX:C[0]-x[0],v="deltaY"in m?m.deltaY:C[1]-x[1],I,b=m.target,y=Math.abs(L)>Math.abs(v)?"h":"v";if("touches"in m&&y==="h"&&b.type==="range")return!1;var R=window.getSelection(),k=R&&R.anchorNode,O=k?k===b||k.contains(b):!1;if(O)return!1;var E=ql(y,b);if(!E)return!0;if(E?I=y:(I=y==="v"?"h":"v",E=ql(y,b)),!E)return!1;if(!o.current&&"changedTouches"in m&&(L||v)&&(o.current=I),!I)return!0;var T=o.current||I;return cd(T,p,m,T==="h"?L:v,!0)},[]),i=he.useCallback(function(m){var p=m;if(!(!Lo.length||Lo[Lo.length-1]!==n)){var x="deltaY"in p?fd(p):rn(p),C=t.current.filter(function(I){return I.name===p.type&&(I.target===p.target||p.target===I.shadowParent)&&vh(I.delta,x)})[0];if(C&&C.should){p.cancelable&&p.preventDefault();return}if(!C){var L=(l.current.shards||[]).map(pd).filter(Boolean).filter(function(I){return I.contains(p.target)}),v=L.length>0?s(p,L[0]):!l.current.noIsolation;v&&p.cancelable&&p.preventDefault()}}},[]),u=he.useCallback(function(m,p,x,C){var L={name:m,delta:p,target:x,should:C,shadowParent:Sh(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(v){return v!==L})},1)},[]),c=he.useCallback(function(m){a.current=rn(m),o.current=void 0},[]),d=he.useCallback(function(m){u(m.type,fd(m),m.target,s(m,e.lockRef.current))},[]),f=he.useCallback(function(m){u(m.type,rn(m),m.target,s(m,e.lockRef.current))},[]);he.useEffect(function(){return Lo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ra),document.addEventListener("touchmove",i,Ra),document.addEventListener("touchstart",c,Ra),function(){Lo=Lo.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,Ra),document.removeEventListener("touchmove",i,Ra),document.removeEventListener("touchstart",c,Ra)}},[]);var g=e.removeScrollBar,h=e.inert;return he.createElement(he.Fragment,null,h?he.createElement(n,{styles:Ih(r)}):null,g?he.createElement(_l,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Sh(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var gd=Tl(on,md);var hd=nn.forwardRef(function(e,t){return nn.createElement(ir,Qe({},e,{ref:t,sideCar:gd}))});hd.classNames=ir.classNames;var Pa=hd;var wh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Co=new WeakMap,ln=new WeakMap,sn={},Ul=0,xd=function(e){return e&&(e.host||xd(e.parentNode))},yh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=xd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Rh=function(e,t,a,o){var r=yh(t,Array.isArray(e)?e:[e]);sn[a]||(sn[a]=new WeakMap);var n=sn[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var g=f.getAttribute(o),h=g!==null&&g!=="false",m=(Co.get(f)||0)+1,p=(n.get(f)||0)+1;Co.set(f,m),n.set(f,p),l.push(f),m===1&&h&&ln.set(f,!0),p===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),Ul++,function(){l.forEach(function(d){var f=Co.get(d)-1,g=n.get(d)-1;Co.set(d,f),n.set(d,g),f||(ln.has(d)||d.removeAttribute(o),ln.delete(d)),g||d.removeAttribute(a)}),Ul--,Ul||(Co=new WeakMap,Co=new WeakMap,ln=new WeakMap,sn={})}},vo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||wh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Rh(o,r,a,"aria-hidden")):function(){return null}};var Ce=require("react/jsx-runtime"),Ph=Object.defineProperty,xt=(e,t)=>Ph(e,"name",{value:t,configurable:!0}),Vl="Dialog",[Ld,Yb]=qe(Vl),[kh,Tt]=Ld(Vl),Cd=xt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=xe.useRef(null),i=xe.useRef(null),[u,c]=At({prop:o,defaultProp:r??!1,onChange:n,caller:Vl}),[d,f]=xe.useState(0),[g,h]=xe.useState(0);return(0,Ce.jsx)(kh,{scope:t,triggerRef:s,contentRef:i,contentId:lt(),titleId:lt(),descriptionId:lt(),titlePresent:d>0,descriptionPresent:g>0,setTitleCount:f,setDescriptionCount:h,open:u,onOpenChange:c,onOpenToggle:xe.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var vd="DialogPortal",[Dh,Id]=Ld(vd,{forceMount:void 0}),bd=xt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Tt(vd,t);return(0,Ce.jsx)(Dh,{scope:t,forceMount:a,children:xe.Children.map(o,l=>(0,Ce.jsx)(Vt,{present:a||n.open,children:(0,Ce.jsx)(po,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Wl="DialogOverlay",Gl=xe.forwardRef(xt(function(t,a){let o=Id(Wl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Tt(Wl,t.__scopeDialog);return l.modal?(0,Ce.jsx)(Vt,{present:r||l.open,children:(0,Ce.jsx)(Ah,{...n,ref:a})}):null},"DialogOverlay")),Mh=Xe("DialogOverlay.RemoveScroll"),Ah=xe.forwardRef(xt(function(t,a){let{__scopeDialog:o,...r}=t,n=Tt(Wl,o),l=Ll(),s=Q(a,l);return(0,Ce.jsx)(Pa,{as:Mh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,Ce.jsx)(te.div,{"data-state":jl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),cr="DialogContent",zl=xe.forwardRef(xt(function(t,a){let o=Id(cr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Tt(cr,t.__scopeDialog);return(0,Ce.jsx)(Vt,{present:r||l.open,children:l.modal?(0,Ce.jsx)(Th,{...n,ref:a}):(0,Ce.jsx)(Eh,{...n,ref:a})})},"DialogContent")),Th=xe.forwardRef(xt(function(t,a){let o=Tt(cr,t.__scopeDialog),r=xe.useRef(null),n=Q(a,o.contentRef,r);return xe.useEffect(()=>{let l=r.current;if(l)return vo(l)},[]),(0,Ce.jsx)(Sd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:W(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:W(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Eh=xe.forwardRef(xt(function(t,a){let o=Tt(cr,t.__scopeDialog),r=xe.useRef(!1),n=xe.useRef(!1);return(0,Ce.jsx)(Sd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Sd=xe.forwardRef(xt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Tt(cr,o);return na(),(0,Ce.jsx)(Ce.Fragment,{children:(0,Ce.jsx)(fo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Ce.jsx)(co,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":jl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Oh="DialogTitle",Xl=xe.forwardRef(xt(function(t,a){let{__scopeDialog:o,...r}=t,n=Tt(Oh,o),{setTitleCount:l}=n;return ie(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ce.jsx)(te.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Fh="DialogDescription",Kl=xe.forwardRef(xt(function(t,a){let{__scopeDialog:o,...r}=t,n=Tt(Fh,o),{setDescriptionCount:l}=n;return ie(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ce.jsx)(te.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Bh="DialogClose",wd=xe.forwardRef(xt(function(t,a){let{__scopeDialog:o,...r}=t,n=Tt(Bh,o);return(0,Ce.jsx)(te.button,{type:"button",...r,ref:a,onClick:W(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function jl(e){return e?"open":"closed"}xt(jl,"getState");var Rd=require("react"),$l="dsh-kanban",Pd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},_h={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},ka=null,Yl=null;function kd(e){let t=e.get("locale");if(t!==void 0){ka=t;try{t.register($l,"zh",Pd),t.register($l,"en",_h)}catch{}Yl=t.bind($l)}}function Io(e){return Yl?Yl(e):Pd[e]??e}var Hh=e=>ka&&typeof ka.subscribe=="function"?ka.subscribe(e):()=>{},yd=()=>ka&&typeof ka.getSnapshot=="function"?ka.getSnapshot():null;function We(){return(0,Rd.useSyncExternalStore)(Hh,yd,yd),Io}var st=require("react/jsx-runtime"),bo=Cd;var qh=bd;var Dd=fr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Gl,{ref:a,className:ee("kanban-portal kanban-dialog-overlay",e),...t}));Dd.displayName=Gl.displayName;var Da=fr.forwardRef(({className:e,children:t,...a},o)=>{let r=We();return(0,st.jsxs)(qh,{children:[(0,st.jsx)(Dd,{}),(0,st.jsxs)(zl,{ref:o,className:ee("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,st.jsxs)(wd,{className:"kanban-dialog-close",children:[(0,st.jsx)(nr,{className:"kanban-dialog-close-icon"}),(0,st.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Da.displayName=zl.displayName;var Ma=({className:e,...t})=>(0,st.jsx)("div",{className:ee("kanban-dialog-header",e),...t});Ma.displayName="DialogHeader";var pr=({className:e,...t})=>(0,st.jsx)("div",{className:ee("kanban-dialog-footer",e),...t});pr.displayName="DialogFooter";var Aa=fr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Xl,{ref:a,className:ee("kanban-dialog-title",e),...t}));Aa.displayName=Xl.displayName;var mr=fr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Kl,{ref:a,className:ee("kanban-dialog-description",e),...t}));mr.displayName=Kl.displayName;var br=U(require("react"),1);var Pt=U(require("react"),1);var Y=U(require("react"),1);var bt=U(require("react"),1);var un=require("react/jsx-runtime"),Je=U(require("react"),1);var Ta=require("react/jsx-runtime");var Uh=Object.defineProperty,Be=(e,t)=>Uh(e,"name",{value:t,configurable:!0});function Ea(e){let t=e+"CollectionProvider",[a,o]=qe(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Be(m=>{let{scope:p,children:x}=m,C=bt.useRef(null),L=bt.useRef(new Map).current;return(0,un.jsx)(r,{scope:p,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Xe(s),u=bt.forwardRef((m,p)=>{let{scope:x,children:C}=m,L=n(s,x),v=Q(p,L.collectionRef);return(0,un.jsx)(i,{ref:v,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Xe(c),g=bt.forwardRef((m,p)=>{let{scope:x,children:C,...L}=m,v=bt.useRef(null),I=Q(p,v),b=n(c,x);return bt.useEffect(()=>(b.itemMap.set(v,{ref:v,...L}),()=>{b.itemMap.delete(v)})),(0,un.jsx)(f,{[d]:"",ref:I,children:C})});g.displayName=c;function h(m){let p=n(e+"CollectionConsumer",m);return bt.useCallback(()=>{let C=p.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((b,y)=>L.indexOf(b.ref.current)-L.indexOf(y.ref.current))},[p.collectionRef,p.itemMap])}return Be(h,"useCollection"),[{Provider:l,Slot:u,ItemSlot:g},h,o]}Be(Ea,"createCollection");var Md=new WeakMap,Pe,it,Zl=(it=class extends Map{constructor(a){super(a);li(this,Pe);Xn(this,Pe,[...super.keys()]),Md.set(this,!0)}set(a,o){return Md.get(this)&&(this.has(a)?Ge(this,Pe)[Ge(this,Pe).indexOf(a)]=a:Ge(this,Pe).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=Ge(this,Pe).length,s=Jl(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...Ge(this,Pe)],f,g=!1;for(let h=i;h<c;h++)if(i===h){let m=d[h];d[h]===o&&(m=d[h+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!g&&d[h-1]===o&&(g=!0);let m=d[g?h:h-1],p=f;f=this.get(m),this.delete(m),this.set(m,p)}return this}with(a,o,r){let n=new it(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,Pe).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,Pe).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ge(this,Pe).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,Pe).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Xn(this,Pe,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,Pe).splice(Ge(this,Pe).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=dn(Ge(this,Pe),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=dn(Ge(this,Pe),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,Pe).indexOf(a)}keyAt(a){return dn(Ge(this,Pe),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new it(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new it(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new it(o)}toReversed(){let a=new it;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new it(o)}slice(a,o){let r=new it,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Pe=new WeakMap,Be(it,"OrderedDict"),it);function dn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Ad(e,t);return a===-1?void 0:e[a]}Be(dn,"at");function Ad(e,t){let a=e.length,o=Jl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Be(Ad,"toSafeIndex");function Jl(e){return e!==e||e===0?0:Math.trunc(e)}Be(Jl,"toSafeInteger");function Wh(e){let t=e+"CollectionProvider",[a,o]=qe(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Zl,setItemMap:Be(()=>{},"setItemMap")}),l=Be(({state:L,...v})=>L?(0,Ta.jsx)(i,{...v,state:L}):(0,Ta.jsx)(s,{...v}),"CollectionProvider");l.displayName=t;let s=Be(L=>{let v=p();return(0,Ta.jsx)(i,{...L,state:v})},"CollectionInit");s.displayName=t+"Init";let i=Be(L=>{let{scope:v,children:I,state:b}=L,y=Je.useRef(null),[R,k]=Je.useState(null),O=Q(y,k),[E,T]=b;return Je.useEffect(()=>{if(!R)return;let B=Od(()=>{});return B.observe(R,{childList:!0,subtree:!0}),()=>{B.disconnect()}},[R]),(0,Ta.jsx)(r,{scope:v,itemMap:E,setItemMap:T,collectionRef:O,collectionRefObject:y,collectionElement:R,children:I})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Xe(u),d=Je.forwardRef((L,v)=>{let{scope:I,children:b}=L,y=n(u,I),R=Q(v,y.collectionRef);return(0,Ta.jsx)(c,{ref:R,children:b})});d.displayName=u;let f=e+"CollectionItemSlot",g="data-radix-collection-item",h=Xe(f),m=Je.forwardRef((L,v)=>{let{scope:I,children:b,...y}=L,R=Je.useRef(null),[k,O]=Je.useState(null),E=Q(v,R,O),T=n(f,I),{setItemMap:B}=T,q=Je.useRef(y);Td(q.current,y)||(q.current=y);let Z=q.current;return Je.useEffect(()=>{let K=Z;return B(H=>k?H.has(k)?H.set(k,{...K,element:k}).toSorted(Ql):(H.set(k,{...K,element:k}),H.toSorted(Ql)):H),()=>{B(H=>!k||!H.has(k)?H:(H.delete(k),new Zl(H)))}},[k,Z,B]),(0,Ta.jsx)(h,{[g]:"",ref:E,children:b})});m.displayName=f;function p(){return Je.useState(new Zl)}Be(p,"useInitCollection");function x(L){let{itemMap:v}=n(e+"CollectionConsumer",L);return v}return Be(x,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:x,useInitCollection:p}]}Be(Wh,"createCollection");function Td(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Be(Td,"shallowEqual");function Ed(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Be(Ed,"isElementPreceding");function Ql(e,t){return!e[1].element||!t[1].element?0:Ed(e[1].element,t[1].element)?-1:1}Be(Ql,"sortByDocumentPosition");function Od(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Be(Od,"getChildListObserver");var cn=U(require("react"),1),zh=require("react/jsx-runtime"),Vh=Object.defineProperty,Gh=(e,t)=>Vh(e,"name",{value:t,configurable:!0}),Xh=cn.createContext(void 0);function Oa(e){let t=cn.useContext(Xh);return e||t||"ltr"}Gh(Oa,"useDirection");var je=U(require("react"),1);var Nd=["top","right","bottom","left"];var Et=Math.min,St=Math.max,hr=Math.round,xr=Math.floor,Ot=e=>({x:e,y:e}),Kh={left:"right",right:"left",bottom:"top",top:"bottom"};function es(e,t,a){return St(e,Et(t,a))}function Ft(e,t){return typeof e=="function"?e(t):e}function Gt(e){return e.split("-")[0]}function Fa(e){return e.split("-")[1]}function pn(e){return e==="x"?"y":"x"}function mn(e){return e==="y"?"height":"width"}function wt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function gn(e){return pn(wt(e))}function _d(e,t,a){a===void 0&&(a=!1);let o=Fa(e),r=gn(e),n=mn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=gr(l)),[l,gr(l)]}function Hd(e){let t=gr(e);return[fn(e),t,fn(t)]}function fn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Fd=["left","right"],Bd=["right","left"],jh=["top","bottom"],$h=["bottom","top"];function Yh(e,t,a){switch(e){case"top":case"bottom":return a?t?Bd:Fd:t?Fd:Bd;case"left":case"right":return t?jh:$h;default:return[]}}function qd(e,t,a,o){let r=Fa(e),n=Yh(Gt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(fn)))),n}function gr(e){let t=Gt(e);return Kh[t]+e.slice(t.length)}function Zh(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function ts(e){return typeof e!="number"?Zh(e):{top:e,right:e,bottom:e,left:e}}function Ba(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Ud(e,t,a){let{reference:o,floating:r}=e,n=wt(t),l=gn(t),s=mn(l),i=Gt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,g;switch(i){case"top":g={x:c,y:o.y-r.height};break;case"bottom":g={x:c,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-r.width,y:d};break;default:g={x:o.x,y:o.y}}let h=Fa(t);return h&&(g[l]+=f*(h==="end"?1:-1)*(a&&u?-1:1)),g}async function Gd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:g=0}=Ft(t,e),h=ts(g),p=s[f?d==="floating"?"reference":"floating":d],x=Ba(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(p)))==null||a?p:p.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),v=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},I=Ba(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-I.top+h.top)/v.y,bottom:(I.bottom-x.bottom+h.bottom)/v.y,left:(x.left-I.left+h.left)/v.x,right:(I.right-x.right+h.right)/v.x}}var Qh=50,zd=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Gd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Ud(u,o,i),f=o,g=0,h={};for(let m=0;m<n.length;m++){let p=n[m];if(!p)continue;let{name:x,fn:C}=p,{x:L,y:v,data:I,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:u,platform:s,elements:{reference:e,floating:t}});c=L??c,d=v??d,h[x]={...h[x],...I},b&&g<Qh&&(g++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=Ud(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}},Xd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Ft(e,t)||{};if(u==null)return{};let d=ts(c),f={x:a,y:o},g=gn(r),h=mn(g),m=await l.getDimensions(u),p=g==="y",x=p?"top":"left",C=p?"bottom":"right",L=p?"clientHeight":"clientWidth",v=n.reference[h]+n.reference[g]-f[g]-n.floating[h],I=f[g]-n.reference[g],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=b?b[L]:0;(!y||!await(l.isElement==null?void 0:l.isElement(b)))&&(y=s.floating[L]||n.floating[h]);let R=v/2-I/2,k=y/2-m[h]/2-1,O=Et(d[x],k),E=Et(d[C],k),T=y-m[h]-E,B=y/2-m[h]/2+R,q=es(O,B,T),Z=!i.arrow&&Fa(r)!=null&&B!==q&&n.reference[h]/2-(B<O?O:E)-m[h]/2<0,K=Z?B<O?B-O:B-T:0;return{[g]:f[g]+K,data:{[g]:q,centerOffset:B-q-K,...Z&&{alignmentOffset:K}},reset:Z}}});var Kd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...p}=Ft(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Gt(r),C=wt(s),L=Gt(s)===s,v=await(i.isRTL==null?void 0:i.isRTL(u.floating)),I=f||(L||!m?[gr(s)]:Hd(s)),b=h!=="none";!f&&b&&I.push(...qd(s,m,h,v));let y=[s,...I],R=await i.detectOverflow(t,p),k=[],O=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&k.push(R[x]),d){let q=_d(r,l,v);k.push(R[q[0]],R[q[1]])}if(O=[...O,{placement:r,overflows:k}],!k.every(q=>q<=0)){var E,T;let q=(((E=n.flip)==null?void 0:E.index)||0)+1,Z=y[q];if(Z&&(!(d==="alignment"?C!==wt(Z):!1)||O.every(G=>wt(G.placement)===C?G.overflows[0]>0:!0)))return{data:{index:q,overflows:O},reset:{placement:Z}};let K=(T=O.filter(H=>H.overflows[0]<=0).sort((H,G)=>H.overflows[1]-G.overflows[1])[0])==null?void 0:T.placement;if(!K)switch(g){case"bestFit":{var B;let H=(B=O.filter(G=>{if(b){let z=wt(G.placement);return z===C||z==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(z=>z>0).reduce((z,M)=>z+M,0)]).sort((G,z)=>G[1]-z[1])[0])==null?void 0:B[0];H&&(K=H);break}case"initialPlacement":K=s;break}if(r!==K)return{reset:{placement:K}}}return{}}}};function Wd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Vd(e){return Nd.some(t=>e[t]>=0)}var jd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Ft(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Wd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Vd(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Wd(l,a.floating);return{data:{escapedOffsets:s,escaped:Vd(s)}}}default:return{}}}}};var $d=new Set(["left","top"]);async function Jh(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Gt(a),s=Fa(a),i=wt(a)==="y",u=$d.has(l)?-1:1,c=n&&i?-1:1,d=Ft(t,e),{mainAxis:f,crossAxis:g,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof h=="number"&&(g=s==="end"?h*-1:h),i?{x:g*c,y:f*u}:{x:f*u,y:g*c}}var Yd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await Jh(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Zd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:L,y:v}=C;return{x:L,y:v}}},...u}=Ft(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=wt(r),g=pn(f),h=c[g],m=c[f],p=(C,L)=>es(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);l&&(h=p(g,h)),s&&(m=p(f,m));let x=i.fn({...t,[g]:h,[f]:m});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[g]:l,[f]:s}}}}}},Qd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Ft(e,t),f={x:r,y:n},g=wt(l),h=pn(g),m=f[h],p=f[g],x=Ft(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let I=h==="y"?"height":"width",b=s.reference[h]-s.floating[I]+C.mainAxis,y=s.reference[h]+s.reference[I]-C.mainAxis;m<b?m=b:m>y&&(m=y)}if(d){var L,v;let I=h==="y"?"width":"height",b=$d.has(Gt(l)),y=s.reference[g]-s.floating[I]+(b&&((L=i.offset)==null?void 0:L[g])||0)+(b?0:C.crossAxis),R=s.reference[g]+s.reference[I]+(b?0:((v=i.offset)==null?void 0:v[g])||0)-(b?C.crossAxis:0);p<y?p=y:p>R&&(p=R)}return{[h]:m,[g]:p}}}},Jd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Ft(e,t),i=await r.detectOverflow(t,s),u=Gt(a),c=Fa(a),d=wt(a)==="y",{width:f,height:g}=o.floating,h,m;u==="top"||u==="bottom"?(h=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,h=c==="end"?"top":"bottom");let p=g-i.top-i.bottom,x=f-i.left-i.right,C=Et(g-i[h],p),L=Et(f-i[m],x),v=t.middlewareData.shift,I=!v,b=C,y=L;v!=null&&v.enabled.x&&(y=x),v!=null&&v.enabled.y&&(b=p),I&&!c&&(d?y=f-2*St(i.left,i.right):b=g-2*St(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:b});let R=await r.getDimensions(n.floating);return f!==R.width||g!==R.height?{reset:{rects:!0}}:{}}}};function hn(){return typeof window<"u"}function Ha(e){return tc(e)?(e.nodeName||"").toLowerCase():"#document"}function Ze(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bt(e){var t;return(t=(tc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tc(e){return hn()?e instanceof Node||e instanceof Ze(e).Node:!1}function yt(e){return hn()?e instanceof Element||e instanceof Ze(e).Element:!1}function zt(e){return hn()?e instanceof HTMLElement||e instanceof Ze(e).HTMLElement:!1}function ec(e){return!hn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ze(e).ShadowRoot}function Lr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Rt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function ac(e){return/^(table|td|th)$/.test(Ha(e))}function Cr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var ex=/transform|translate|scale|rotate|perspective|filter/,tx=/paint|layout|strict|content/,Na=e=>!!e&&e!=="none",as;function xn(e){let t=yt(e)?Rt(e):e;return Na(t.transform)||Na(t.translate)||Na(t.scale)||Na(t.rotate)||Na(t.perspective)||!Ln()&&(Na(t.backdropFilter)||Na(t.filter))||ex.test(t.willChange||"")||tx.test(t.contain||"")}function oc(e){let t=la(e);for(;zt(t)&&!So(t);){if(xn(t))return t;if(Cr(t))return null;t=la(t)}return null}function Ln(){return as==null&&(as=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),as}function So(e){return/^(html|body|#document)$/.test(Ha(e))}function Rt(e){return Ze(e).getComputedStyle(e)}function vr(e){return yt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function la(e){if(Ha(e)==="html")return e;let t=e.assignedSlot||e.parentNode||ec(e)&&e.host||Bt(e);return ec(t)?t.host:t}function rc(e){let t=la(e);return So(t)?(e.ownerDocument||e).body:zt(t)&&Lr(t)?t:rc(t)}function _a(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=rc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Ze(r);if(n){let s=Cn(l);return t.concat(l,l.visualViewport||[],Lr(r)?r:[],s&&a?_a(s):[])}else return t.concat(r,_a(r,[],a))}function Cn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sc(e){let t=Rt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=zt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=hr(a)!==n||hr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function rs(e){return yt(e)?e:e.contextElement}function wo(e){let t=rs(e);if(!zt(t))return Ot(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=sc(t),l=(n?hr(a.width):a.width)/o,s=(n?hr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var ax=Ot(0);function ic(e){let t=Ze(e);return!Ln()||!t.visualViewport?ax:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ox(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===Ze(e)}function qa(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=rs(e),l=Ot(1);t&&(o?yt(o)&&(l=wo(o)):l=wo(e));let s=ox(n,a,o)?ic(n):Ot(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=Ze(n),g=yt(o)?Ze(o):o,h=f,m=Cn(h);for(;m&&g!==h;){let p=wo(m),x=m.getBoundingClientRect(),C=Rt(m),L=x.left+(m.clientLeft+parseFloat(C.paddingLeft))*p.x,v=x.top+(m.clientTop+parseFloat(C.paddingTop))*p.y;i*=p.x,u*=p.y,c*=p.x,d*=p.y,i+=L,u+=v,h=Ze(m),m=Cn(h)}}return Ba({width:c,height:d,x:i,y:u})}function vn(e,t){let a=vr(e).scrollLeft;return t?t.left+a:qa(Bt(e)).left+a}function uc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-vn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function rx(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Bt(o),s=t?Cr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ot(1),c=Ot(0),d=zt(o);if((d||!n)&&((Ha(o)!=="body"||Lr(l))&&(i=vr(o)),d)){let g=qa(o);u=wo(o),c.x=g.x+o.clientLeft,c.y=g.y+o.clientTop}let f=l&&!d&&!n?uc(l,i):Ot(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function nx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function lx(e){let t=vr(e),a=e.ownerDocument.body,o=St(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=St(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+vn(e),l=-t.scrollTop;return Rt(a).direction==="rtl"&&(n+=St(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var sx=25;function ix(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=Ze(e),n=Bt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Ln()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(vn(n)<=0){let f=n.ownerDocument,g=f.body,h=getComputedStyle(g),m=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-g.clientWidth-m),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?p/2:p;x<=sx&&(s-=x)}return{width:s,height:i,x:u,y:c}}function ux(e,t){let a=qa(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=wo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function nc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=ix(e,a,t);else if(t==="document")o=lx(Bt(e));else if(yt(t))o=ux(t,a);else{let r=ic(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ba(o)}function dx(e,t){let a=t.get(e);if(a)return a;let o=_a(e,[],!1).filter(s=>yt(s)&&Ha(s)!=="body"),r=null,n=Rt(e).position==="fixed",l=n?la(e):e;for(;yt(l)&&!So(l);){let s=Rt(l),i=xn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=la(l)}return t.set(e,o),o}function cx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?Cr(t)?[]:dx(t,this._c):[].concat(a),o],s=nc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let g=nc(t,l[f],r);i=St(g.top,i),u=Et(g.right,u),c=Et(g.bottom,c),d=St(g.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function fx(e){let{width:t,height:a}=sc(e);return{width:t,height:a}}function px(e,t,a){let o=zt(t),r=Bt(t),n=a==="fixed",l=qa(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Ot(0);if((o||!n)&&((Ha(t)!=="body"||Lr(r))&&(s=vr(t)),o)){let f=qa(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=vn(r));let u=r&&!o&&!n?uc(r,s):Ot(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function os(e){return Rt(e).position==="static"}function lc(e,t){if(!zt(e)||Rt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Bt(e)===a&&(a=a.ownerDocument.body),a}function dc(e,t){let a=Ze(e);if(Cr(e))return a;if(!zt(e)){let r=la(e);for(;r&&!So(r);){if(yt(r)&&!os(r))return r;r=la(r)}return a}let o=lc(e,t);for(;o&&ac(o)&&os(o);)o=lc(o,t);return o&&So(o)&&os(o)&&!xn(o)?a:o||oc(e)||a}var mx=async function(e){let t=this.getOffsetParent||dc,a=this.getDimensions,o=await a(e.floating);return{reference:px(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function gx(e){return Rt(e).direction==="rtl"}var cc={convertOffsetParentRelativeRectToViewportRelativeRect:rx,getDocumentElement:Bt,getClippingRect:cx,getOffsetParent:dc,getElementRects:mx,getClientRects:nx,getDimensions:fx,getScale:wo,isElement:yt,isRTL:gx};function fc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hx(e,t,a){let o=null,r,n=Bt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:g,top:h,width:m,height:p}=f;if(c||t(),!m||!p)return;let x=xr(h),C=xr(n.clientWidth-(g+m)),L=xr(n.clientHeight-(h+p)),v=xr(g),b={rootMargin:-x+"px "+-C+"px "+-L+"px "+-v+"px",threshold:St(0,Et(1,d))||1},y=!0;function R(k){let O=k[0].intersectionRatio;if(!fc(f,e.getBoundingClientRect()))return s();if(O!==d){if(!y)return s();O?s(!1,O):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(e)}let i=Ze(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function ns(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=rs(e),c=r||n?[...u?_a(u):[],...t?_a(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?hx(u,a,n):null,f=-1,g=null;l&&(g=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=g)==null||L.observe(t)})),a()}),u&&!i&&g.observe(u),t&&g.observe(t));let h,m=i?qa(e):null;i&&p();function p(){let x=qa(e);m&&!fc(m,x)&&a(),m=x,h=requestAnimationFrame(p)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=g)==null||x.disconnect(),g=null,i&&cancelAnimationFrame(h)}}var pc=Yd;var mc=Zd,gc=Kd,hc=Jd,xc=jd,ls=Xd;var Lc=Qd,ss=(e,t,a)=>{let o=new Map,r=a??{},n={...cc,...r.platform,_c:o};return zd(e,t,{...r,platform:n})};var ke=U(require("react"),1),vc=require("react"),Ic=U(require("react-dom"),1),xx=typeof document<"u",Lx=function(){},In=xx?vc.useLayoutEffect:Lx;function bn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!bn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!bn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function bc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cc(e,t){let a=bc(e);return Math.round(t*a)/a}function is(e){let t=ke.useRef(e);return In(()=>{t.current=e}),t}function Sc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=ke.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,g]=ke.useState(o);bn(f,o)||g(o);let[h,m]=ke.useState(null),[p,x]=ke.useState(null),C=ke.useCallback(G=>{G!==b.current&&(b.current=G,m(G))},[]),L=ke.useCallback(G=>{G!==y.current&&(y.current=G,x(G))},[]),v=n||h,I=l||p,b=ke.useRef(null),y=ke.useRef(null),R=ke.useRef(c),k=i!=null,O=is(i),E=is(r),T=is(u),B=ke.useCallback(()=>{if(!b.current||!y.current)return;let G={placement:t,strategy:a,middleware:f};E.current&&(G.platform=E.current),ss(b.current,y.current,G).then(z=>{let M={...z,isPositioned:T.current!==!1};q.current&&!bn(R.current,M)&&(R.current=M,Ic.flushSync(()=>{d(M)}))})},[f,t,a,E,T]);In(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(G=>({...G,isPositioned:!1})))},[u]);let q=ke.useRef(!1);In(()=>(q.current=!0,()=>{q.current=!1}),[]),In(()=>{if(v&&(b.current=v),I&&(y.current=I),v&&I){if(O.current)return O.current(v,I,B);B()}},[v,I,B,O,k]);let Z=ke.useMemo(()=>({reference:b,floating:y,setReference:C,setFloating:L}),[C,L]),K=ke.useMemo(()=>({reference:v,floating:I}),[v,I]),H=ke.useMemo(()=>{let G={position:a,left:0,top:0};if(!K.floating)return G;let z=Cc(K.floating,c.x),M=Cc(K.floating,c.y);return s?{...G,transform:"translate("+z+"px, "+M+"px)",...bc(K.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:z,top:M}},[a,s,K.floating,c.x,c.y]);return ke.useMemo(()=>({...c,update:B,refs:Z,elements:K,floatingStyles:H}),[c,B,Z,K,H])}var Cx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?ls({element:o.current,padding:r}).fn(a):{}:o?ls({element:o,padding:r}).fn(a):{}}}},wc=(e,t)=>{let a=pc(e);return{name:a.name,fn:a.fn,options:[e,t]}},yc=(e,t)=>{let a=mc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Rc=(e,t)=>({fn:Lc(e).fn,options:[e,t]}),Pc=(e,t)=>{let a=gc(e);return{name:a.name,fn:a.fn,options:[e,t]}},kc=(e,t)=>{let a=hc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Dc=(e,t)=>{let a=xc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Mc=(e,t)=>{let a=Cx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ac=U(require("react"),1);var vx=Object.defineProperty,Ix=(e,t)=>vx(e,"name",{value:t,configurable:!0});function us(e){let[t,a]=Ac.useState(void 0);return ie(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}Ix(us,"useSize");var yo=require("react/jsx-runtime"),bx=Object.defineProperty,sa=(e,t)=>bx(e,"name",{value:t,configurable:!0});var Tc="Popper",[Ec,Ro]=qe(Tc),[Sx,Oc]=Ec(Tc),wx=sa(e=>{let{__scopePopper:t,children:a}=e,[o,r]=je.useState(null),[n,l]=je.useState(void 0);return(0,yo.jsx)(Sx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),yx="PopperAnchor",Rx=je.forwardRef(sa(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Oc(yx,o),s=je.useRef(null),i=l.onAnchorChange,u=je.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=Q(a,u),d=je.useRef(null);je.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Sn(l.placementState),g=f?.[0],h=f?.[1];return r?null:(0,yo.jsx)(te.div,{"data-radix-popper-side":g,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),Fc="PopperContent",[Px,HS]=Ec(Fc),kx=je.forwardRef(sa(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:m,...p}=t,x=Oc(Fc,o),[C,L]=je.useState(null),v=Q(a,L),[I,b]=je.useState(null),y=us(I),R=y?.width??0,k=y?.height??0,O=r+(l!=="center"?"-"+l:""),E=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},T=Array.isArray(c)?c:[c],B=T.length>0,q={padding:E,boundary:T.filter(Bc),altBoundary:B},{refs:Z,floatingStyles:K,placement:H,isPositioned:G,middlewareData:z}=Sc({strategy:"fixed",placement:O,whileElementsMounted:sa((...J)=>ns(...J,{animationFrame:h==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[wc({mainAxis:n+k,alignmentAxis:s}),u&&yc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Rc():void 0,...q}),u&&Pc({...q}),kc({...q,apply:sa(({elements:J,rects:X,availableWidth:S,availableHeight:P})=>{let{width:A,height:N}=X.reference,ne=J.floating.style;ne.setProperty("--radix-popper-available-width",`${S}px`),ne.setProperty("--radix-popper-available-height",`${P}px`),ne.setProperty("--radix-popper-anchor-width",`${A}px`),ne.setProperty("--radix-popper-anchor-height",`${N}px`)},"apply")}),I&&Mc({element:I,padding:i}),Dx({arrowWidth:R,arrowHeight:k}),g&&Dc({strategy:"referenceHidden",...q,boundary:B?q.boundary:void 0})]}),M=x.setPlacementState;ie(()=>(M(H),()=>{M(void 0)}),[H,M]);let[re,$]=Sn(H),se=Oe(m);ie(()=>{G&&se?.()},[G,se]);let ge=z.arrow?.x,ye=z.arrow?.y,Le=z.arrow?.centerOffset!==0,[Re,F]=je.useState();return ie(()=>{C&&F(window.getComputedStyle(C).zIndex)},[C]),(0,yo.jsx)("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:G?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Re,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,yo.jsx)(Px,{scope:o,placedSide:re,placedAlign:$,onArrowChange:b,arrowX:ge,arrowY:ye,shouldHideArrow:Le,children:(0,yo.jsx)(te.div,{"data-side":re,"data-align":$,...p,ref:v,style:{...p.style,animation:G?p.style?.animation:"none"}})})})},"PopperContent"));function Bc(e){return e!==null}sa(Bc,"isNotNull");var Dx=sa(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Sn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,g=(r.arrow?.y??0)+i/2,h="",m="";return u==="bottom"?(h=l?d:`${f}px`,m=`${-i}px`):u==="top"?(h=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(h=`${-i}px`,m=l?d:`${g}px`):u==="left"&&(h=`${o.floating.width+i}px`,m=l?d:`${g}px`),{data:{x:h,y:m}}}}),"transformOrigin");function Sn(e){let[t,a="center"]=e.split("-");return[t,a]}sa(Sn,"getSideAndAlignFromPlacement");var wn=wx,yn=Rx,Rn=kx;var Ne=U(require("react"),1);var Ax=U(require("react"),1),Pn=U(require("react"),1),Mx=Object.defineProperty,cs=(e,t)=>Mx(e,"name",{value:t,configurable:!0}),ds=!1;function _c(){let[e,t]=Pn.useState(ds);return Pn.useEffect(()=>{ds||(ds=!0,t(!0))},[]),e}cs(_c,"useIsHydrated");var Hc=Ax[" useSyncExternalStore ".trim().toString()];function qc(){return()=>{}}cs(qc,"subscribe");function Uc(){return Hc(qc,()=>!0,()=>!1)}cs(Uc,"useIsHydratedModern");var Wc=typeof Hc=="function"?Uc:_c;var ia=require("react/jsx-runtime"),Tx=Object.defineProperty,Ua=(e,t)=>Tx(e,"name",{value:t,configurable:!0}),fs="rovingFocusGroup.onEntryFocus",Ex={bubbles:!1,cancelable:!0},kn="RovingFocusGroup",[ps,Vc,Ox]=Ea(kn),[Fx,ms]=qe(kn,[Ox]),[Bx,Nx]=Fx(kn),_x=Ne.forwardRef(Ua(function(t,a){return(0,ia.jsx)(ps.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,ia.jsx)(ps.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,ia.jsx)(Hx,{...t,ref:a})})})},"RovingFocusGroup")),Hx=Ne.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,g=Ne.useRef(null),h=Q(a,g),m=Oa(l),[p,x]=At({prop:s,defaultProp:i??null,onChange:u,caller:kn}),[C,L]=Ne.useState(!1),v=Oe(c),I=Vc(o),b=Ne.useRef(!1),[y,R]=Ne.useState(0);return Ne.useEffect(()=>{let k=g.current;if(k)return k.addEventListener(fs,v),()=>k.removeEventListener(fs,v)},[v]),(0,ia.jsx)(Bx,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:p,onItemFocus:Ne.useCallback(k=>x(k),[x]),onItemShiftTab:Ne.useCallback(()=>L(!0),[]),onFocusableItemAdd:Ne.useCallback(()=>R(k=>k+1),[]),onFocusableItemRemove:Ne.useCallback(()=>R(k=>k-1),[]),children:(0,ia.jsx)(te.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:W(t.onMouseDown,()=>{b.current=!0}),onFocus:W(t.onFocus,k=>{let O=!b.current;if(k.target===k.currentTarget&&O&&!C){let E=new CustomEvent(fs,Ex);if(k.currentTarget.dispatchEvent(E),!E.defaultPrevented){let T=I().filter(H=>H.focusable),B=T.find(H=>H.active),q=T.find(H=>H.id===p),K=[B,q,...T].filter(Boolean).map(H=>H.ref.current);gs(K,d)}}b.current=!1}),onBlur:W(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),qx="RovingFocusGroupItem",Ux=Ne.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=lt(),c=l||u,d=Nx(qx,o),f=d.currentTabStopId===c,g=Vc(o),{onFocusableItemAdd:h,onFocusableItemRemove:m,currentTabStopId:p}=d,x=Wc();return ie(()=>{if(!(!x||!r))return h(),()=>m()},[x,r,h,m]),Ne.useEffect(()=>{if(!(x||!r))return h(),()=>m()},[x,r,h,m]),(0,ia.jsx)(ps.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,ia.jsx)(te.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:W(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:W(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:W(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=zc(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let I=g().filter(b=>b.focusable).map(b=>b.ref.current);if(L==="last")I.reverse();else if(L==="prev"||L==="next"){L==="prev"&&I.reverse();let b=I.indexOf(C.currentTarget);I=d.loop?Xc(I,b+1):I.slice(b+1)}setTimeout(()=>gs(I))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:p!=null}):s})})},"RovingFocusGroupItem")),Wx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Gc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ua(Gc,"getDirectionAwareKey");function zc(e,t,a){let o=Gc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Wx[o]}Ua(zc,"getFocusIntent");function gs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ua(gs,"focusFirst");function Xc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ua(Xc,"wrapArray");var Kc=_x,jc=Ux;var pe=require("react/jsx-runtime"),zx=Object.defineProperty,me=(e,t)=>zx(e,"name",{value:t,configurable:!0}),hs=["Enter"," "],Xx=["ArrowDown","PageUp","Home"],Yc=["ArrowUp","PageDown","End"],Kx=[...Xx,...Yc],gw={ltr:[...hs,"ArrowRight"],rtl:[...hs,"ArrowLeft"]};var Mn="Menu",[xs,jx,$x]=Ea(Mn),[Wa,Cs]=qe(Mn,[$x,Ro,ms]),vs=Ro(),Zc=ms(),[Yx,Ir]=Wa(Mn),[Zx,Is]=Wa(Mn),Qx=me(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=vs(t),[i,u]=Y.useState(null),c=Y.useRef(!1),d=Oe(n),f=Oa(r);return Y.useEffect(()=>{let g=me(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=me(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),Y.useEffect(()=>{if(!a)return;let g=me(()=>d(!1),"handleBlur");return window.addEventListener("blur",g),()=>window.removeEventListener("blur",g)},[a,d]),(0,pe.jsx)(wn,{...s,children:(0,pe.jsx)(Yx,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,pe.jsx)(Zx,{scope:t,onClose:Y.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),Jx=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t,n=vs(o);return(0,pe.jsx)(yn,{...n,...r,ref:a})},"MenuAnchor")),Qc="MenuPortal",[eL,tL]=Wa(Qc,{forceMount:void 0}),aL=me(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Ir(Qc,t);return(0,pe.jsx)(eL,{scope:t,forceMount:a,children:(0,pe.jsx)(Vt,{present:a||n.open,children:(0,pe.jsx)(po,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ua="MenuContent",[oL,Jc]=Wa(ua),rL=Y.forwardRef(me(function(t,a){let o=tL(ua,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Ir(ua,t.__scopeMenu),s=Is(ua,t.__scopeMenu);return(0,pe.jsx)(xs.Provider,{scope:t.__scopeMenu,children:(0,pe.jsx)(Vt,{present:r||l.open,children:(0,pe.jsx)(xs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,pe.jsx)(nL,{...n,ref:a}):(0,pe.jsx)(lL,{...n,ref:a})})})})},"MenuContent")),nL=Y.forwardRef(me(function(t,a){let o=Ir(ua,t.__scopeMenu),r=Y.useRef(null),n=Q(a,r);return Y.useEffect(()=>{let l=r.current;if(l)return vo(l)},[]),(0,pe.jsx)(ef,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:W(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),lL=Y.forwardRef(me(function(t,a){let o=Ir(ua,t.__scopeMenu);return(0,pe.jsx)(ef,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),sL=Xe("MenuContent.ScrollLock"),ef=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,disableOutsideScroll:m,...p}=t,x=Ir(ua,o),C=Is(ua,o),L=vs(o),v=Zc(o),I=jx(o),[b,y]=Y.useState(null),R=Y.useRef(null),k=Q(a,R,x.onContentChange),O=Y.useRef(0),E=Y.useRef(""),T=Y.useRef(0),B=Y.useRef(null),q=Y.useRef("right"),Z=Y.useRef(0),K=m?Pa:Y.Fragment,H=m?{as:sL,allowPinchZoom:!0}:void 0,G=me(M=>{let re=E.current+M,$=I().filter(F=>!F.disabled),se=document.activeElement,ge=$.find(F=>F.ref.current===se)?.textValue,ye=$.map(F=>F.textValue),Le=nf(ye,re,ge),Re=$.find(F=>F.textValue===Le)?.ref.current;me((function F(J){E.current=J,window.clearTimeout(O.current),J!==""&&(O.current=window.setTimeout(()=>F(""),1e3))}),"updateSearch")(re),Re&&setTimeout(()=>Re.focus())},"handleTypeaheadSearch");Y.useEffect(()=>()=>window.clearTimeout(O.current),[]),na();let z=Y.useCallback(M=>q.current===B.current?.side&&sf(M,B.current?.area),[]);return(0,pe.jsx)(oL,{scope:o,searchRef:E,onItemEnter:Y.useCallback(M=>{z(M)&&M.preventDefault()},[z]),onItemLeave:Y.useCallback(M=>{z(M)||(R.current?.focus(),y(null))},[z]),onTriggerLeave:Y.useCallback(M=>{z(M)&&M.preventDefault()},[z]),pointerGraceTimerRef:T,onPointerGraceIntentChange:Y.useCallback(M=>{B.current=M},[]),children:(0,pe.jsx)(K,{...H,children:(0,pe.jsx)(fo,{asChild:!0,trapped:n,onMountAutoFocus:W(l,M=>{M.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,pe.jsx)(co,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,children:(0,pe.jsx)(Kc,{asChild:!0,...v,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:W(u,M=>{C.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,pe.jsx)(Rn,{role:"menu","aria-orientation":"vertical","data-state":tf(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...p,ref:k,style:{outline:"none",...p.style},onKeyDown:W(p.onKeyDown,M=>{let $=M.target.closest("[data-radix-menu-content]")===M.currentTarget,se=M.ctrlKey||M.altKey||M.metaKey,ge=M.key.length===1;$&&(M.key==="Tab"&&M.preventDefault(),!se&&ge&&G(M.key));let ye=R.current;if(M.target!==ye||!Kx.includes(M.key))return;M.preventDefault();let Re=I().filter(F=>!F.disabled).map(F=>F.ref.current);Yc.includes(M.key)&&Re.reverse(),of(Re)}),onBlur:W(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(O.current),E.current="")}),onPointerMove:W(t.onPointerMove,Dn(M=>{let re=M.target,$=Z.current!==M.clientX;if(M.currentTarget.contains(re)&&$){let se=M.clientX>Z.current?"right":"left";q.current=se,Z.current=M.clientX}}))})})})})})})},"MenuContentImpl"));var iL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(te.div,{...r,ref:a})},"MenuLabel")),Ls="MenuItem",$c="menu.itemSelect",uL=Y.forwardRef(me(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Y.useRef(null),s=Is(Ls,t.__scopeMenu),i=Jc(Ls,t.__scopeMenu),u=Q(a,l),c=Y.useRef(!1),d=me(()=>{let f=l.current;if(!o&&f){let g=new CustomEvent($c,{bubbles:!0,cancelable:!0});f.addEventListener($c,h=>r?.(h),{once:!0}),sr(f,g),g.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,pe.jsx)(dL,{...n,ref:u,disabled:o,onClick:W(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:W(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:W(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||hs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),dL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Jc(Ls,o),i=Zc(o),u=Y.useRef(null),c=Q(a,u),[d,f]=Y.useState(!1),[g,h]=Y.useState("");return Y.useEffect(()=>{let m=u.current;m&&h((m.textContent??"").trim())},[l.children]),(0,pe.jsx)(xs.ItemSlot,{scope:o,disabled:r,textValue:n??g,children:(0,pe.jsx)(jc,{asChild:!0,...i,focusable:!r,children:(0,pe.jsx)(te.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:W(t.onPointerMove,Dn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:W(t.onPointerLeave,Dn(m=>s.onItemLeave(m))),onFocus:W(t.onFocus,()=>f(!0)),onBlur:W(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var cL="MenuRadioGroup",[hw,xw]=Wa(cL,{value:void 0,onValueChange:me(()=>{},"onValueChange")});var fL="MenuItemIndicator",[Lw,Cw]=Wa(fL,{checked:!1});var pL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(te.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var mL="MenuSub",[vw,Iw]=Wa(mL);function tf(e){return e?"open":"closed"}me(tf,"getOpenState");function af(e){return e==="indeterminate"}me(af,"isIndeterminate");function gL(e){return af(e)?"indeterminate":e?"checked":"unchecked"}me(gL,"getCheckedState");function of(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}me(of,"focusFirst");function rf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}me(rf,"wrapArray");function nf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=rf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}me(nf,"getNextMatch");function lf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}me(lf,"isPointInPolygon");function sf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return lf(a,t)}me(sf,"isPointerInGraceArea");function Dn(e){return t=>t.pointerType==="mouse"?e(t):void 0}me(Dn,"whenMouse");var uf=Qx,df=Jx,cf=aL,ff=rL;var pf=iL,mf=uL;var gf=pL;var Nt=require("react/jsx-runtime"),xL=Object.defineProperty,Va=(e,t)=>xL(e,"name",{value:t,configurable:!0}),bs="DropdownMenu",[LL,_w]=qe(bs,[Cs]),Ga=Cs(),[CL,hf]=LL(bs),vL=Va(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Ga(t),u=Pt.useRef(null),[c,d]=At({prop:r,defaultProp:n??!1,onChange:l,caller:bs});return(0,Nt.jsx)(CL,{scope:t,triggerId:lt(),triggerRef:u,contentId:lt(),open:c,onOpenChange:d,onOpenToggle:Pt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,Nt.jsx)(uf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),IL="DropdownMenuTrigger",bL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=hf(IL,o),s=Ga(o),i=Q(a,l.triggerRef);return(0,Nt.jsx)(df,{asChild:!0,...s,children:(0,Nt.jsx)(te.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:W(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:W(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),SL=Va(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Ga(t);return(0,Nt.jsx)(cf,{...o,...a})},"DropdownMenuPortal"),wL="DropdownMenuContent",yL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=hf(wL,o),l=Ga(o),s=Pt.useRef(!1);return(0,Nt.jsx)(ff,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:W(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:W(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var RL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,Nt.jsx)(pf,{...n,...r,ref:a})},"DropdownMenuLabel")),PL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,Nt.jsx)(mf,{...n,...r,ref:a})},"DropdownMenuItem"));var kL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,Nt.jsx)(gf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var xf=vL,Lf=bL,Cf=SL,Ss=yL;var ws=RL,ys=PL;var Rs=kL;var Po=require("react/jsx-runtime"),Sr=xf,wr=Lf;var ko=br.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Po.jsx)(Cf,{children:(0,Po.jsx)(Ss,{ref:o,sideOffset:t,className:ee("kanban-portal kanban-dropdown-content",e),...a})}));ko.displayName=Ss.displayName;var Xt=br.forwardRef(({className:e,inset:t,...a},o)=>(0,Po.jsx)(ys,{ref:o,className:ee("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Xt.displayName=ys.displayName;var ML=br.forwardRef(({className:e,inset:t,...a},o)=>(0,Po.jsx)(ws,{ref:o,className:ee("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));ML.displayName=ws.displayName;var AL=br.forwardRef(({className:e,...t},a)=>(0,Po.jsx)(Rs,{ref:a,className:ee("kanban-dropdown-separator",e),...t}));AL.displayName=Rs.displayName;var vf=U(require("react"),1);var If=require("react/jsx-runtime"),Kt=vf.forwardRef(({className:e,type:t,...a},o)=>(0,If.jsx)("input",{type:t,className:ee("kanban-input",e),ref:o,...a}));Kt.displayName="Input";var wf=U(require("react"),1);var bf=U(require("react"),1);var Sf=require("react/jsx-runtime"),TL=Object.defineProperty,EL=(e,t)=>TL(e,"name",{value:t,configurable:!0}),OL=bf.forwardRef(EL(function(t,a){return(0,Sf.jsx)(te.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Ps=OL;var yf=require("react/jsx-runtime"),da=wf.forwardRef(({className:e,...t},a)=>(0,yf.jsx)(Ps,{ref:a,className:ee("kanban-label",e),...t}));da.displayName=Ps.displayName;var fa=U(require("react"),1);var D=U(require("react"),1),Ms=U(require("react-dom"),1);var BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0});function An(e,[t,a]){return Math.min(a,Math.max(t,e))}NL(An,"clamp");var Tn=U(require("react"),1),_L=Object.defineProperty,HL=(e,t)=>_L(e,"name",{value:t,configurable:!0});function ks(e){let t=Tn.useRef({value:e,previous:e});return Tn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}HL(ks,"usePrevious");var qL=U(require("react"),1);var UL=require("react/jsx-runtime");var Rf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var V=require("react/jsx-runtime"),WL=Object.defineProperty,oe=(e,t)=>WL(e,"name",{value:t,configurable:!0}),VL=[" ","Enter","ArrowUp","ArrowDown"],GL=[" ","Enter"],Do="Select",[On,Fn,zL]=Ea(Do),[Xa,Ly]=qe(Do,[zL,Ro]),As=Ro(),[XL,ca]=Xa(Do),[KL,jL]=Xa(Do);function Af(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:g,form:h,internal_do_not_use_render:m}=e,p=As(t),[x,C]=D.useState(null),[L,v]=D.useState(null),[I,b]=D.useState(!1),y=Oa(u),[R,k]=At({prop:o,defaultProp:r??!1,onChange:n,caller:Do}),[O,E]=At({prop:l,defaultProp:s,onChange:i,caller:Do}),T=D.useRef(null),B=D.useRef(O);D.useEffect(()=>{let $=h?x?.ownerDocument.getElementById(h):x?.form;if($ instanceof HTMLFormElement){let se=oe(()=>E(B.current),"reset");return $.addEventListener("reset",se),()=>$.removeEventListener("reset",se)}},[h,x,E]);let q=x?!!h||!!x.closest("form"):!0,[Z,K]=D.useState(new Set),H=lt(),G=Array.from(Z).map($=>$.props.value).join(";"),z=D.useCallback($=>{K(se=>new Set(se).add($))},[]),M=D.useCallback($=>{K(se=>{let ge=new Set(se);return ge.delete($),ge})},[]),re={required:g,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:v,valueNodeHasChildren:I,onValueNodeHasChildrenChange:b,contentId:H,value:O,onValueChange:E,open:R,onOpenChange:k,dir:y,triggerPointerDownPosRef:T,disabled:f,name:c,autoComplete:d,form:h,nativeOptions:Z,nativeSelectKey:G,isFormControl:q};return(0,V.jsx)(wn,{...p,children:(0,V.jsx)(XL,{scope:t,...re,children:(0,V.jsx)(On.Provider,{scope:t,children:(0,V.jsx)(KL,{scope:t,onNativeOptionAdd:z,onNativeOptionRemove:M,children:Wf(m)?m(re):a})})})})}oe(Af,"SelectProvider");var Tf=oe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,V.jsx)(Af,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,V.jsxs)(V.Fragment,{children:[a,r?(0,V.jsx)(cC,{__scopeSelect:t}):null]})})},"Select"),$L="SelectTrigger",Ts=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=As(o),s=ca($L,o),i=s.disabled||r,u=Q(a,s.onTriggerChange),c=Fn(o),d=D.useRef("touch"),[f,g,h]=qs(p=>{let x=c().filter(v=>!v.disabled),C=x.find(v=>v.value===s.value),L=Us(x,p,C);L!==void 0&&s.onValueChange(L.value)}),m=oe(p=>{i||(s.onOpenChange(!0),h()),p&&(s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})},"handleOpen");return(0,V.jsx)(yn,{asChild:!0,...l,children:(0,V.jsx)(te.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":yr(s.value)?"":void 0,...n,ref:u,onClick:W(n.onClick,p=>{p.currentTarget.focus(),d.current!=="mouse"&&m(p)}),onPointerDown:W(n.onPointerDown,p=>{d.current=p.pointerType;let x=p.target;x.hasPointerCapture(p.pointerId)&&x.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(m(p),p.preventDefault())}),onKeyDown:W(n.onKeyDown,p=>{let x=f.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&g(p.key),!(x&&p.key===" ")&&VL.includes(p.key)&&(m(),p.preventDefault())})})})},"SelectTrigger")),YL="SelectValue",Ef=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=ca(YL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=Q(a,u.onValueNodeChange);ie(()=>{c(d)},[c,d]);let g=yr(u.value);return(0,V.jsx)(te.span,{...i,asChild:g?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,V.jsx)(D.Fragment,{children:g?s:l},g?"placeholder":"value")})},"SelectValue")),Of=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,V.jsx)(te.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),ZL="SelectPortal",[QL,JL]=Xa(ZL,{forceMount:void 0}),Ff=oe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,V.jsx)(QL,{scope:e.__scopeSelect,forceMount:a,children:(0,V.jsx)(po,{asChild:!0,...o})})},"SelectPortal"),za="SelectContent",Es=D.forwardRef(oe(function(t,a){let o=JL(za,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=ca(za,t.__scopeSelect),[s,i]=D.useState();return ie(()=>{i(new DocumentFragment)},[]),(0,V.jsx)(Vt,{present:r||l.open,children:({present:u})=>u?(0,V.jsx)(aC,{...n,ref:a}):(0,V.jsx)(eC,{...n,fragment:s})})},"SelectContent")),eC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ms.createPortal((0,V.jsx)(Bf,{scope:o,children:(0,V.jsx)(On.Slot,{scope:o,children:(0,V.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),kt=10,[Bf,Ka]=Xa(za),tC=Xe("SelectContent.RemoveScroll"),aC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:m,hideWhenDetached:p,avoidCollisions:x,...C}=t,L=ca(za,o),[v,I]=D.useState(null),[b,y]=D.useState(null),R=Q(a,I),[k,O]=D.useState(null),[E,T]=D.useState(null),B=Fn(o),[q,Z]=D.useState(!1),K=D.useRef(!1);D.useEffect(()=>{if(v)return vo(v)},[v]),na();let H=D.useCallback(F=>{let[J,...X]=B().map(A=>A.ref.current),[S]=X.slice(-1),P=document.activeElement;for(let A of F)if(A===P||(A?.scrollIntoView({block:"nearest"}),A===J&&b&&(b.scrollTop=0),A===S&&b&&(b.scrollTop=b.scrollHeight),A?.focus(),document.activeElement!==P))return},[B,b]),G=D.useCallback(()=>H([k,v]),[H,k,v]);D.useEffect(()=>{q&&G()},[q,G]);let{onOpenChange:z,triggerPointerDownPosRef:M}=L;D.useEffect(()=>{if(v){let F={x:0,y:0},J=oe(S=>{F={x:Math.abs(Math.round(S.pageX)-(M.current?.x??0)),y:Math.abs(Math.round(S.pageY)-(M.current?.y??0))}},"handlePointerMove"),X=oe(S=>{F.x<=10&&F.y<=10?S.preventDefault():S.composedPath().includes(v)||z(!1),document.removeEventListener("pointermove",J),M.current=null},"handlePointerUp");return M.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",X,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",X,{capture:!0})}}},[v,z,M]),D.useEffect(()=>{let F=oe(()=>z(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[z]);let[re,$]=qs(F=>{let J=B().filter(P=>!P.disabled),X=J.find(P=>P.ref.current===document.activeElement),S=Us(J,F,X);S&&setTimeout(()=>S.ref.current?.focus())}),se=D.useCallback((F,J,X)=>{let S=!K.current&&!X;(L.value!==void 0&&L.value===J||S)&&(O(F),S&&(K.current=!0))},[L.value]),ge=D.useCallback(()=>v?.focus(),[v]),ye=D.useCallback((F,J,X)=>{let S=!K.current&&!X;(L.value!==void 0&&L.value===J||S)&&T(F)},[L.value]),Le=r==="popper"?Pf:oC,Re=Le===Pf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:m,hideWhenDetached:p,avoidCollisions:x}:{};return(0,V.jsx)(Bf,{scope:o,content:v,viewport:b,onViewportChange:y,itemRefCallback:se,selectedItem:k,onItemLeave:ge,itemTextRefCallback:ye,focusSelectedItem:G,selectedItemText:E,position:r,isPositioned:q,searchRef:re,children:(0,V.jsx)(Pa,{as:tC,allowPinchZoom:!0,children:(0,V.jsx)(fo,{asChild:!0,trapped:L.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:W(n,F=>{L.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,V.jsx)(co,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,V.jsx)(Le,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:F=>F.preventDefault(),...C,...Re,onPlaced:()=>Z(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:W(C.onKeyDown,F=>{let J=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!J&&F.key.length===1&&$(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let S=B().filter(P=>!P.disabled).map(P=>P.ref.current);if(["ArrowUp","End"].includes(F.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let P=F.target,A=S.indexOf(P);S=S.slice(A+1)}setTimeout(()=>H(S)),F.preventDefault()}})})})})})})},"SelectContentImpl")),oC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=ca(za,o),s=Ka(za,o),[i,u]=D.useState(null),[c,d]=D.useState(null),f=Q(a,d),g=Fn(o),h=D.useRef(!1),m=D.useRef(!0),{viewport:p,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=s,v=D.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&p&&x&&C){let R=l.trigger.getBoundingClientRect(),k=c.getBoundingClientRect(),O=l.valueNode.getBoundingClientRect(),E=C.getBoundingClientRect();if(l.dir!=="rtl"){let P=E.left-k.left,A=O.left-P,N=R.left-A,ne=R.width+N,le=Math.max(ne,k.width),ue=window.innerWidth-kt,ve=An(A,[kt,Math.max(kt,ue-le)]);i.style.minWidth=ne+"px",i.style.left=ve+"px"}else{let P=k.right-E.right,A=window.innerWidth-O.right-P,N=window.innerWidth-R.right-A,ne=R.width+N,le=Math.max(ne,k.width),ue=window.innerWidth-kt,ve=An(A,[kt,Math.max(kt,ue-le)]);i.style.minWidth=ne+"px",i.style.right=ve+"px"}let T=g(),B=window.innerHeight-kt*2,q=p.scrollHeight,Z=window.getComputedStyle(c),K=parseInt(Z.borderTopWidth,10),H=parseInt(Z.paddingTop,10),G=parseInt(Z.borderBottomWidth,10),z=parseInt(Z.paddingBottom,10),M=K+H+q+z+G,re=Math.min(x.offsetHeight*5,M),$=window.getComputedStyle(p),se=parseInt($.paddingTop,10),ge=parseInt($.paddingBottom,10),ye=R.top+R.height/2-kt,Le=B-ye,Re=x.offsetHeight/2,F=x.offsetTop+Re,J=K+H+F,X=M-J;if(J<=ye){let P=T.length>0&&x===T[T.length-1].ref.current;i.style.bottom="0px";let A=c.clientHeight-p.offsetTop-p.offsetHeight,N=Math.max(Le,Re+(P?ge:0)+A+G),ne=J+N;i.style.height=ne+"px"}else{let P=T.length>0&&x===T[0].ref.current;i.style.top="0px";let N=Math.max(ye,K+p.offsetTop+(P?se:0)+Re)+X;i.style.height=N+"px",p.scrollTop=J-ye+p.offsetTop}i.style.margin=`${kt}px 0`,i.style.minHeight=re+"px",i.style.maxHeight=B+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[g,l.trigger,l.valueNode,i,c,p,x,C,l.dir,r]);ie(()=>v(),[v]);let[I,b]=D.useState();ie(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let y=D.useCallback(R=>{R&&m.current===!0&&(v(),L?.(),m.current=!1)},[v,L]);return(0,V.jsx)(rC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:y,children:(0,V.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:I},children:(0,V.jsx)(te.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Pf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=kt,...l}=t,s=As(o);return(0,V.jsx)(Rn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[rC,Os]=Xa(za,{}),kf="SelectViewport",Nf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=Ka(kf,o),s=Os(kf,o),i=Q(a,l.onViewportChange),u=D.useRef(0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,V.jsx)(On.Slot,{scope:o,children:(0,V.jsx)(te.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:W(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:g}=s;if(g?.current&&f){let h=Math.abs(u.current-d.scrollTop);if(h>0){let m=window.innerHeight-kt*2,p=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(p,x);if(C<m){let L=C+h,v=Math.min(m,L),I=L-v;f.style.height=v+"px",f.style.bottom==="0px"&&(d.scrollTop=I>0?I:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),nC="SelectGroup",[Cy,lC]=Xa(nC);var sC="SelectLabel",Fs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t,n=lC(sC,o);return(0,V.jsx)(te.div,{id:n.id,...r,ref:a})},"SelectLabel")),Ds="SelectItem",[iC,_f]=Xa(Ds),Bs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=ca(Ds,o),u=Ka(Ds,o),c=i.value===r,[d,f]=D.useState(l??""),[g,h]=D.useState(!1),m=Oe(v=>u.itemRefCallback?.(v,r,n)),p=Q(a,m),x=lt(),C=D.useRef("touch"),L=oe(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,V.jsx)(iC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:D.useCallback(v=>{f(I=>I||(v?.textContent??"").trim())},[]),children:(0,V.jsx)(On.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,V.jsx)(te.div,{role:"option","aria-labelledby":x,"data-highlighted":g?"":void 0,"aria-selected":c&&g,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:p,onFocus:W(s.onFocus,()=>h(!0)),onBlur:W(s.onBlur,()=>h(!1)),onClick:W(s.onClick,()=>{C.current!=="mouse"&&L()}),onPointerUp:W(s.onPointerUp,()=>{C.current==="mouse"&&L()}),onPointerDown:W(s.onPointerDown,v=>{C.current=v.pointerType}),onPointerMove:W(s.onPointerMove,v=>{C.current=v.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:W(s.onPointerLeave,v=>{v.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:W(s.onKeyDown,v=>{n||v.target!==v.currentTarget||u.searchRef?.current!==""&&v.key===" "||(GL.includes(v.key)&&L(),v.key===" "&&v.preventDefault())})})})})},"SelectItem")),En="SelectItemText",Hf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=ca(En,o),i=Ka(En,o),u=_f(En,o),c=jL(En,o),[d,f]=D.useState(null),g=Oe(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),h=Q(a,f,u.onItemTextChange,g),m=d?.textContent,p=D.useMemo(()=>(0,V.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return ie(()=>(x(p),()=>C(p)),[x,C,p]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(te.span,{id:u.textId,...l,ref:h}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!yr(s.value)?Ms.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),uC="SelectItemIndicator",qf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return _f(uC,o).isSelected?(0,V.jsx)(te.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Df="SelectScrollUpButton",Ns=D.forwardRef(oe(function(t,a){let o=Ka(Df,t.__scopeSelect),r=Os(Df,t.__scopeSelect),[n,l]=D.useState(!1),s=Q(a,r.onScrollButtonChange);return ie(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Uf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),Mf="SelectScrollDownButton",_s=D.forwardRef(oe(function(t,a){let o=Ka(Mf,t.__scopeSelect),r=Os(Mf,t.__scopeSelect),[n,l]=D.useState(!1),s=Q(a,r.onScrollButtonChange);return ie(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Uf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Uf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=Ka("SelectScrollButton",o),s=D.useRef(null),i=Fn(o),u=D.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return D.useEffect(()=>()=>u(),[u]),ie(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,V.jsx)(te.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:W(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:W(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:W(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Hs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,V.jsx)(te.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var dC="SelectBubbleInput",cC=D.forwardRef(oe(function({__scopeSelect:t,...a},o){let r=ca(dC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:g}=r,h=D.useRef(null),m=Q(o,h),p=n??"",x=ks(p),C=Array.from(f).some(L=>(L.props.value??"")==="");return D.useEffect(()=>{let L=h.current;if(!L)return;let v=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(v,"value").set;if(x!==p&&b){let y=new Event("change",{bubbles:!0});b.call(L,p),L.dispatchEvent(y)}},[x,p]),(0,V.jsxs)(te.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>l(L.target.value),...a,style:{...Rf,...a.style},ref:m,defaultValue:p,children:[yr(n)&&!C?(0,V.jsx)("option",{value:""}):null,Array.from(f)]},g)},"SelectBubbleInput"));function Wf(e){return typeof e=="function"}oe(Wf,"isFunction");function yr(e){return e===""||e===void 0}oe(yr,"shouldShowPlaceholder");function qs(e){let t=Oe(e),a=D.useRef(""),o=D.useRef(0),r=D.useCallback(l=>{let s=a.current+l;t(s),oe((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=D.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}oe(qs,"useTypeaheadSearch");function Us(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Vf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}oe(Us,"findNextItem");function Vf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}oe(Vf,"wrapArray");var Se=require("react/jsx-runtime"),Ws=Tf;var Vs=Ef,Bn=fa.forwardRef(({className:e,children:t,...a},o)=>(0,Se.jsxs)(Ts,{ref:o,className:ee("kanban-select-trigger",e),...a,children:[t,(0,Se.jsx)(Of,{asChild:!0,children:(0,Se.jsx)(lo,{className:"kanban-select-icon"})})]}));Bn.displayName=Ts.displayName;var Gf=fa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Ns,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Se.jsx)(Qo,{className:"kanban-select-scroll-icon"})}));Gf.displayName=Ns.displayName;var zf=fa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(_s,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Se.jsx)(lo,{className:"kanban-select-scroll-icon"})}));zf.displayName=_s.displayName;var Nn=fa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Se.jsx)(Ff,{children:(0,Se.jsxs)(Es,{ref:r,className:ee("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Se.jsx)(Gf,{}),(0,Se.jsx)(Nf,{className:ee("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Se.jsx)(zf,{})]})}));Nn.displayName=Es.displayName;var pC=fa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Fs,{ref:a,className:ee("kanban-select-label",e),...t}));pC.displayName=Fs.displayName;var Mo=fa.forwardRef(({className:e,children:t,...a},o)=>(0,Se.jsxs)(Bs,{ref:o,className:ee("kanban-select-item",e),...a,children:[(0,Se.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Se.jsx)(qf,{children:(0,Se.jsx)(oa,{className:"kanban-select-check"})})}),(0,Se.jsx)(Hf,{children:t})]}));Mo.displayName=Bs.displayName;var mC=fa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Hs,{ref:a,className:ee("kanban-select-separator",e),...t}));mC.displayName=Hs.displayName;var Xf=U(require("react"),1);var Kf=require("react/jsx-runtime"),_n=Xf.forwardRef(({className:e,...t},a)=>(0,Kf.jsx)("textarea",{className:ee("kanban-textarea",e),ref:a,...t}));_n.displayName="Textarea";var jt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},Hn=["high","medium","low"],jf="#94a3b8";function $f(e,t){return t?e.find(a=>a.name===t)?.color??jf:jf}var $e=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Gs=e=>e==="high"||e==="medium"||e==="low"?jt[e].label:"";function Yf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Gs(a.priority)||o;return $e(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return $e(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?$e(t("actLabelSet"),{to:n}):r!=null&&n==null?$e(t("actLabelCleared"),{from:r}):$e(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Gs(r)||r:o,s=n?Gs(n)||n:o;return r==null&&n!=null?$e(t("actPrioritySet"),{to:s}):r!=null&&n==null?$e(t("actPriorityCleared"),{from:l}):$e(t("actPriority"),{from:l,to:s})}case"card_title_changed":return $e(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return $e(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return $e(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return $e(t("actColumnDeleted"),{column:a.column??""});case"label_added":return $e(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return $e(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return $e(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return $e(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var qn=e=>String(e).padStart(2,"0");function Rr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${qn(t.getMonth()+1)}-${qn(t.getDate())} ${qn(t.getHours())}:${qn(t.getMinutes())}`}var $t=require("react/jsx-runtime");function Zf({activities:e}){let t=We();if(e.length===0)return(0,$t.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,$t.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,$t.jsxs)("li",{className:"kanban-activity-item",children:[(0,$t.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,$t.jsxs)("p",{className:"kanban-activity-description",children:[(0,$t.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Yf(o,t)]}),(0,$t.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Rr(o.ts),children:Rr(o.ts)})]},o.id)})})}var _=require("react/jsx-runtime");function Qf({open:e,card:t,labels:a,comments:o,activities:r,onOpenChange:n,onSave:l,onAddComment:s,onDelete:i,onChatWithAgent:u}){let c=We(),[d,f]=(0,ja.useState)({id:"",title:"",note:"",label:"",priority:""}),[g,h]=(0,ja.useState)(""),[m,p]=(0,ja.useState)(!1),[x,C]=(0,ja.useState)(!1);(0,ja.useEffect)(()=>{e&&(f({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""}),h(""))},[e,t]);let L=I=>f(b=>({...b,...I})),v=async()=>{let I=g.trim();if(!t||!I||I.length>2e3||x)return;C(!0);let b=await s(t.id,I);C(!1),b!==!1&&h("")};return(0,_.jsx)(bo,{open:e,onOpenChange:n,children:(0,_.jsxs)(Da,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:I=>I.preventDefault(),children:[(0,_.jsx)(Ma,{children:(0,_.jsx)(Aa,{className:"kanban-sr-only",children:c(t?"editCard":"addCard")})}),(0,_.jsxs)("div",{className:"kanban-form-stack",children:[(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsxs)(da,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,_.jsx)("span",{children:c("fieldTitle")}),t&&(0,_.jsxs)("span",{className:"kanban-field-id",children:[c("fieldId"),": ",t.id]})]}),(0,_.jsx)(Kt,{id:"card-title",value:d.title,placeholder:c("titlePlaceholder"),maxLength:120,onChange:I=>L({title:I.target.value})})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(da,{children:c("fieldLabel")}),(0,_.jsxs)(Ws,{value:d.label||"__none__",onValueChange:I=>L({label:I==="__none__"?"":I}),children:[(0,_.jsx)(Bn,{children:(0,_.jsx)(Vs,{placeholder:c("noLabel")})}),(0,_.jsxs)(Nn,{children:[(0,_.jsx)(Mo,{value:"__none__",children:c("noLabel")}),a.map(I=>(0,_.jsx)(Mo,{value:I.name,children:I.name},I.name))]})]})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(da,{children:c("fieldPriority")}),(0,_.jsxs)(Ws,{value:d.priority||"__none__",onValueChange:I=>L({priority:I==="__none__"?"":I}),children:[(0,_.jsx)(Bn,{children:(0,_.jsx)(Vs,{placeholder:c("noPriority")})}),(0,_.jsxs)(Nn,{children:[(0,_.jsx)(Mo,{value:"__none__",children:c("noPriority")}),Hn.map(I=>{let b=jt[I];return(0,_.jsx)(Mo,{value:I,children:(0,_.jsxs)("span",{className:"kanban-inline-priority",children:[(0,_.jsx)("span",{className:"kanban-priority-dot",style:{background:b.color}}),b.label]})},I)})]})]})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(da,{htmlFor:"card-note",children:c("fieldNote")}),(0,_.jsx)(_n,{id:"card-note",value:d.note,placeholder:c("notePlaceholder"),rows:5,maxLength:2e3,onChange:I=>L({note:I.target.value})})]}),t&&(0,_.jsxs)("div",{className:"kanban-comments-box",children:[(0,_.jsxs)(da,{htmlFor:"card-comment",children:[c("commentsTitle")," ",(0,_.jsxs)("span",{className:"kanban-tabular",children:["(",o.length,")"]})]}),(0,_.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:o.length===0?(0,_.jsx)("p",{className:"kanban-muted-small",children:c("commentEmpty")}):(0,_.jsx)("ol",{className:"kanban-comment-list",children:o.map(I=>{let b=I.source==="agent";return(0,_.jsxs)("li",{className:"kanban-comment-item",children:[(0,_.jsxs)("div",{className:"kanban-comment-meta",children:[(0,_.jsx)("span",{className:`kanban-activity-actor ${b?"is-agent":"is-human"}`,children:c(b?"actorAgent":"actorHuman")}),(0,_.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:I.createdAt,children:Rr(I.createdAt)})]}),(0,_.jsx)("p",{className:"kanban-comment-content",children:I.content})]},I.id)})})}),(0,_.jsxs)("div",{className:"kanban-comment-composer",children:[(0,_.jsx)(_n,{id:"card-comment",value:g,placeholder:c("commentPlaceholder"),rows:3,maxLength:2e3,disabled:x,onChange:I=>h(I.target.value),onKeyDown:I=>{(I.metaKey||I.ctrlKey)&&I.key==="Enter"&&(I.preventDefault(),v())}}),(0,_.jsxs)(Ae,{type:"button",variant:"outline",disabled:x||!g.trim(),onClick:()=>{v()},children:[(0,_.jsx)(ar,{className:"kanban-icon"}),c("sendComment")]})]})]}),t&&(0,_.jsxs)("div",{className:"kanban-activity-box",children:[(0,_.jsx)(da,{className:"kanban-muted-small",children:c("activityTitle")}),(0,_.jsx)("div",{className:"kanban-activity-scroll",children:(0,_.jsx)(Zf,{activities:r})})]})]}),(0,_.jsxs)(pr,{children:[t&&i&&(0,_.jsxs)(Ae,{variant:"outline",className:"kanban-dialog-delete",disabled:m,onClick:async()=>{p(!0);let I=await i(t);p(!1),I!==!1&&n(!1)},children:[(0,_.jsx)(qt,{className:"kanban-icon"}),c("delete")]}),(0,_.jsxs)(Sr,{children:[(0,_.jsx)(wr,{asChild:!0,children:(0,_.jsxs)(Ae,{variant:"outline",disabled:!d.title.trim()&&!d.note.trim(),children:[(0,_.jsx)(Sa,{className:"kanban-icon"}),c("chatWithAgent")]})}),(0,_.jsxs)(ko,{align:"end",children:[(0,_.jsx)(Xt,{onClick:()=>{u(d,"current"),n(!1)},children:c("chatCurrentSession")}),(0,_.jsx)(Xt,{onClick:()=>{u(d,"new"),n(!1)},children:c("chatNewSession")})]})]}),(0,_.jsx)(Ae,{variant:"outline",disabled:m||!d.title.trim(),onClick:async()=>{p(!0);let I=await l(d);p(!1),I!==!1&&n(!1)},children:c("save")})]})]})})}var Jf=require("react/jsx-runtime");function gC({variant:e,className:t}={}){return ee("kanban-badge",`kanban-badge--${e??"default"}`,t)}function zs({className:e,variant:t,...a}){return(0,Jf.jsx)("div",{className:gC({variant:t,className:e}),...a})}var $a=U(require("react"),1);var Ya=require("react/jsx-runtime"),Xs=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-card",e),...t}));Xs.displayName="Card";var hC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-card-header",e),...t}));hC.displayName="CardHeader";var xC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-ui-card-title",e),...t}));xC.displayName="CardTitle";var LC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-card-description",e),...t}));LC.displayName="CardDescription";var Ks=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-card-content",e),...t}));Ks.displayName="CardContent";var CC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:ee("kanban-card-footer",e),...t}));CC.displayName="CardFooter";var et=require("react/jsx-runtime");function js({card:e,labels:t}){let a=We(),o=e.priority?jt[e.priority]:null,r=$f(t,e.label);return(0,et.jsx)(Xs,{className:"kanban-card",children:(0,et.jsxs)(Ks,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,et.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,et.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:r,color:"#0b1220"},children:e.label}),o&&(0,et.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:o.color,color:"#0b1220"},children:o.label})]}),(0,et.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,et.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,et.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,et.jsx)(Sa,{"aria-hidden":"true"}),(0,et.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function ep({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=zr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,et.jsx)("div",{ref:n,style:{transform:rt.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,et.jsx)(js,{card:e,labels:t})})}var ut=require("react/jsx-runtime");function tp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Hr({id:e.id,data:{type:"column"}}),{active:s,over:i}=Yo(),u=We(),c=s?.data.current?.type==="card"&&(l||i?.data.current?.columnId===e.id);return(0,ut.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ut.jsxs)("div",{className:"kanban-column-header",children:[(0,ut.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ut.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ut.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,ut.jsx)(Gr,{items:t.map(d=>d.id),strategy:Vr,children:t.map(d=>(0,ut.jsx)(ep,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ut.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ut.jsx)("div",{className:"kanban-column-footer",children:(0,ut.jsxs)(Ae,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ut.jsx)(Ht,{className:"kanban-icon"}),u("addCard")]})})]})}var Pr=require("react");var we=require("react/jsx-runtime");function vC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=zr({id:e.id}),d=We();return(0,we.jsxs)("div",{ref:i,style:{transform:rt.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,we.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,we.jsx)(Jo,{className:"kanban-icon"})}),(0,we.jsx)(Kt,{value:t,maxLength:40,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,we.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,we.jsx)(qt,{className:"kanban-icon"})})]})}function ap({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=We(),[i,u]=(0,Pr.useState)({}),[c,d]=(0,Pr.useState)(""),f=Or(ro(aa,{activationConstraint:{distance:8}}),ro(ta,{coordinateGetter:Xr}));(0,Pr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let g=m=>{let p=(i[m]??"").trim(),x=t.find(C=>C.id===m);x&&p&&p!==x.title&&r(m,p)},h=m=>{let{active:p,over:x}=m;x&&p.id!==x.id&&o(String(p.id),String(x.id))};return(0,we.jsx)(bo,{open:e,onOpenChange:a,children:(0,we.jsxs)(Da,{className:"kanban-dialog-medium",children:[(0,we.jsxs)(Ma,{children:[(0,we.jsx)(Aa,{children:s("columnEdit")}),(0,we.jsx)(mr,{children:s("columnEditDesc")})]}),(0,we.jsx)(_r,{sensors:f,collisionDetection:Di,onDragEnd:h,children:(0,we.jsx)(Gr,{items:t.map(m=>m.id),strategy:Vr,children:(0,we.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,we.jsx)(vC,{column:m,value:i[m.id]??m.title,onValueChange:p=>u(x=>({...x,[m.id]:p})),onCommit:()=>g(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,we.jsxs)("div",{className:"kanban-sortable-row",children:[(0,we.jsx)(Kt,{value:c,placeholder:s("newColumnPlaceholder"),maxLength:40,onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,we.jsxs)(Ae,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,we.jsx)(Ht,{className:"kanban-icon"}),s("add")]})]})]})})}var Ao=require("react");var Te=require("react/jsx-runtime");function op({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=We(),[s,i]=(0,Ao.useState)({}),[u,c]=(0,Ao.useState)(""),[d,f]=(0,Ao.useState)("#38bdf8");(0,Ao.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(h=>[h.name,{name:h.name,color:h.color}]))),c(""),f("#38bdf8"))},[e]);let g=h=>{let m=s[h];if(!m)return;let p=t.find(C=>C.name===h),x=m.name.trim();p&&x&&(x!==h||m.color!==p.color)&&r(h,x,m.color)};return(0,Te.jsx)(bo,{open:e,onOpenChange:a,children:(0,Te.jsxs)(Da,{className:"kanban-dialog-medium",children:[(0,Te.jsxs)(Ma,{children:[(0,Te.jsx)(Aa,{children:l("labelEdit")}),(0,Te.jsx)(mr,{children:l("labelEditDesc")})]}),(0,Te.jsx)("div",{className:"kanban-label-list",children:t.map(h=>{let m=s[h.name]??{name:h.name,color:h.color};return(0,Te.jsxs)("div",{className:"kanban-label-row",children:[(0,Te.jsx)("input",{type:"color",value:m.color,className:"kanban-color-input",onChange:p=>i(x=>({...x,[h.name]:{...m,color:p.target.value}})),onBlur:()=>g(h.name)}),(0,Te.jsx)(Kt,{value:m.name,maxLength:20,onChange:p=>i(x=>({...x,[h.name]:{...m,name:p.target.value}})),onBlur:()=>g(h.name),onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,Te.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(h.name),children:(0,Te.jsx)(qt,{className:"kanban-icon"})})]},h.name)})}),(0,Te.jsx)(pr,{className:"kanban-dialog-footer-layout",children:(0,Te.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Te.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:h=>f(h.target.value)}),(0,Te.jsx)(Kt,{value:u,placeholder:l("newLabelPlaceholder"),maxLength:20,onChange:h=>c(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Te.jsxs)(Ae,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Te.jsx)(Ht,{className:"kanban-icon"}),l("add")]})]})})]})})}function Un(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var $s=new Map,Ys=0,Wn=new Set;function rp(e,t){$s.set(e,t),Ys++;for(let a of Wn)a()}function np(e){let t=$s.get(e);if(t==null)return null;$s.delete(e),Ys++;for(let a of Wn)a();return t}function lp(e){return Wn.add(e),()=>{Wn.delete(e)}}function sp(){return Ys}function ip(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Io("fieldId")+": "+t),a&&n.push(a),r&&n.push(Io("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var j=require("react/jsx-runtime");function up(e,t,a,o,r){let n=e.find(p=>p.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(p=>p.columnId===n.columnId).findIndex(p=>p.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(p=>p.id!==t),i=s.filter(p=>p.columnId===a),u=o?i.findIndex(p=>p.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],g=i[i.length-1],h=f?d.indexOf(f):g?d.indexOf(g)+1:d.length;return d.splice(h,0,{...n,columnId:a}),{cards:d.every((p,x)=>p.id===e[x]?.id&&p.columnId===e[x]?.columnId)?e:d,toIndex:c}}function dp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(S=>S.items):[],l=Array.isArray(n)?n.find(S=>Array.isArray(S.sessionIds)&&S.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=We(),[u,c]=(0,fe.useState)(null),[d,f]=(0,fe.useState)(""),[g,h]=(0,fe.useState)([]),[m,p]=(0,fe.useState)(null),[x,C]=(0,fe.useState)(null),[L,v]=(0,fe.useState)(!1),[I,b]=(0,fe.useState)(!1),[y,R]=(0,fe.useState)(!1),[k,O]=(0,fe.useState)(""),E=(0,fe.useRef)(null),T=(0,fe.useRef)(u),B=(0,fe.useRef)(null),q=(0,fe.useRef)(s),Z=(0,fe.useRef)(0),K=(0,fe.useRef)(0);T.current=u,q.current=s;let[H,G]=(0,fe.useState)(null),z=Or(ro(aa,{activationConstraint:{distance:8}}),ro(ta,{coordinateGetter:Xr})),M=(0,fe.useCallback)((S,P,A)=>{q.current!==P||A<K.current||(K.current=A,S&&S.board&&(c({...S.board,cards:Array.isArray(S.board.cards)?S.board.cards.map(N=>({...N,comments:Array.isArray(N.comments)?N.comments:[]})):[],activities:Array.isArray(S.board.activities)?S.board.activities:[]}),f("")),Array.isArray(S&&S.warnings)&&S.warnings.length>0&&h(N=>[...N,...S.warnings]))},[]),re=(0,fe.useCallback)(async(S,P={})=>{let A=++Z.current;try{let N=await Un(S,P,s);return M(N,s,A),!0}catch(N){return f(i("actionFailed")+String(N&&N.message||N)),!1}},[s,M,i]),$=(0,fe.useCallback)(()=>{let S=++Z.current;R(!0),Un("get",{},s).then(P=>M(P,s,S)).catch(P=>f(i("loadFailed")+String(P&&P.message||P))).finally(()=>R(!1))},[s,M,i]);(0,fe.useEffect)(()=>{let S=!0,P=++Z.current;return c(null),C(null),p(null),f(""),h([]),Un("get",{},s).then(A=>{S&&M(A,s,P)}).catch(A=>{S&&f(i("loadFailed")+String(A&&A.message||A))}),()=>{S=!1}},[s,M,i]),(0,fe.useLayoutEffect)(()=>{let S=ne=>{let le=ne;for(;le;){let ue=getComputedStyle(le).overflowY;if(ue==="auto"||ue==="scroll")return le;le=le.parentElement}return null},P=()=>{let ne=E.current;if(!ne)return;let le=ne.getBoundingClientRect().top,ue=S(ne.parentElement),ve=window.innerHeight;if(ue){let dt=ue.querySelector("[data-composer-seat]"),De=dt?dt.getBoundingClientRect().top:0;dt&&dt.offsetHeight>0&&De>le?ve=De:ve=ue.getBoundingClientRect().bottom}G(Math.max(0,Math.floor(ve-le)))};P();let A=S(E.current?.parentElement??null),N=new ResizeObserver(P);return N.observe(document.documentElement),A&&N.observe(A),window.addEventListener("resize",P),()=>{N.disconnect(),window.removeEventListener("resize",P)}},[u!==null]);let se=(0,fe.useCallback)(S=>{let P=Mi(S),A=P.length>0?P:ll(S),N=Ko(A,"id");if(N==null)return[];if(new Set((u?.columns??[]).map(le=>le.id)).has(String(N))){let le=(u?.cards??[]).filter(ue=>ue.columnId===N).map(ue=>ue.id);if(le.length>0){let ue=Fr({...S,droppableContainers:S.droppableContainers.filter(ve=>ve.id!==N&&le.includes(String(ve.id)))});ue.length>0&&(N=ue[0].id)}}return[{id:N}]},[u]),ge=S=>{let P=T.current;if(!P||P.cards===S)return;let A={...P,cards:S};T.current=A,c(A)},ye=S=>{if(S.active.data.current?.type!=="card")return;let P=T.current,A=P?.cards.find(N=>N.id===S.active.id);!A||!P||(B.current=P.cards,p(A))},Le=({active:S,over:P})=>{let A=T.current;if(!P||!A||S.data.current?.type!=="card")return;let N=String(S.id),ne=A.cards.find(De=>De.id===N),le=A.cards.find(De=>De.id===P.id),ue=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!ne||!ue||ne.columnId===ue)return;let ve=S.rect.current.translated,dt=!!(le&&ve&&ve.top+ve.height/2>P.rect.top+P.rect.height/2);ge(up(A.cards,N,ue,le?.id??null,dt).cards)},Re=({active:S,over:P})=>{let A=T.current,N=B.current;if(B.current=null,!P||!A||S.data.current?.type!=="card"){N&&ge(N),p(null);return}let ne=String(S.id),le=A.cards.find(Lt=>Lt.id===P.id),ue=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!ue){N&&ge(N),p(null);return}let ve=S.rect.current.translated,dt=!!(le&&ve&&ve.top+ve.height/2>P.rect.top+P.rect.height/2),De=up(A.cards,ne,ue,le?.id??null,dt);ge(De.cards),p(null),(!N||De.cards.some((Lt,Eo)=>Lt.id!==N[Eo]?.id||Lt.columnId!==N[Eo]?.columnId))&&re("moveCard",{id:ne,columnId:ue,toIndex:De.toIndex}).then(Lt=>{Lt||$()})},F=()=>{B.current&&ge(B.current),B.current=null,p(null)},J=S=>{if(!x)return Promise.resolve(!1);if(x.card){let P={id:x.card.id};return S.title!==x.card.title&&(P.title=S.title),S.note!==x.card.note&&(P.note=S.note),S.label!==(x.card.label??"")&&(P.label=S.label),S.priority!==(x.card.priority??"")&&(P.priority=S.priority),re("updateCard",P)}return re("addCard",{columnId:x.columnId,title:S.title,note:S.note,label:S.label||void 0,priority:S.priority||void 0})},X=(0,fe.useCallback)((S,P)=>{let A=ip(S);if(A){if(P==="current"){o?.setDraft(A);return}r?.openWorkspace&&r.openWorkspace(s,N=>rp(N,A)).catch(N=>f(i("actionFailed")+String(N&&N.message||N)))}},[o,r,s,i]);return u?(0,j.jsxs)("div",{ref:E,className:"kanban-root kanban-view",style:H!=null?{height:H}:void 0,children:[d&&(0,j.jsx)("p",{className:"kanban-error",children:d}),g.length>0&&(0,j.jsxs)("div",{className:"kanban-warning",children:[(0,j.jsxs)("div",{className:"kanban-warning-body",children:[(0,j.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),g.map((S,P)=>(0,j.jsx)("p",{className:"kanban-warning-item",children:S},P))]}),(0,j.jsx)(Ae,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>h([]),children:i("dismiss")})]}),(0,j.jsxs)(_r,{sensors:z,collisionDetection:se,onDragStart:ye,onDragOver:Le,onDragEnd:Re,onDragCancel:F,children:[(0,j.jsxs)("div",{className:"kanban-content",children:[(0,j.jsxs)("div",{className:"kanban-toolbar",children:[(0,j.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:y,onClick:$,children:(0,j.jsx)(tr,{className:y?"kanban-animate-spin":void 0})}),(0,j.jsxs)(Sr,{children:[(0,j.jsx)(wr,{asChild:!0,children:(0,j.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,j.jsx)(or,{className:"kanban-icon"})})}),(0,j.jsxs)(ko,{align:"start",children:[(0,j.jsxs)(Xt,{onClick:()=>v(!0),children:[(0,j.jsx)(er,{className:"kanban-icon"}),i("columnEdit")]}),(0,j.jsxs)(Xt,{onClick:()=>b(!0),children:[(0,j.jsx)(rr,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,j.jsxs)(Sr,{children:[(0,j.jsx)(wr,{asChild:!0,children:(0,j.jsx)(Ae,{variant:k?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:i("priorityFilter"),children:(0,j.jsx)(ra,{className:"kanban-icon"})})}),(0,j.jsxs)(ko,{align:"start",children:[(0,j.jsxs)(Xt,{onClick:()=>O(""),children:[(0,j.jsx)("span",{className:"kanban-filter-check",children:!k&&(0,j.jsx)(oa,{className:"kanban-icon"})}),i("all")]}),Hn.map(S=>(0,j.jsxs)(Xt,{onClick:()=>O(S),children:[(0,j.jsx)("span",{className:"kanban-filter-check",children:k===S&&(0,j.jsx)(oa,{className:"kanban-icon"})}),(0,j.jsx)("span",{className:"kanban-priority-dot",style:{background:jt[S].color}}),jt[S].label]},S))]})]})]}),(0,j.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(S=>{let P=u.cards.filter(A=>A.columnId===S.id&&(!k||A.priority===k));return(0,j.jsx)(tp,{column:S,cards:P,labels:u.labels,onAddCard:A=>C({card:null,columnId:A.id}),onOpenCard:A=>C({card:A,columnId:A.columnId})},S.id)})})]}),(0,j.jsx)(Ki,{children:m?(0,j.jsx)("div",{className:"kanban-drag-preview",children:(0,j.jsx)(js,{card:m,labels:u.labels})}):null})]}),(0,j.jsx)(Qf,{open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(S=>S.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(S=>S.cardId===x.card.id):[],onOpenChange:S=>{S||C(null)},onSave:J,onAddComment:(S,P)=>re("addComment",{id:S,content:P}),onDelete:S=>re("deleteCard",{id:S.id}),onChatWithAgent:X}),(0,j.jsx)(ap,{open:L,columns:u.columns,onOpenChange:v,onReorder:(S,P)=>{let A=u.columns.findIndex(N=>N.id===P);A>=0&&re("moveColumn",{id:S,toIndex:A})},onRename:(S,P)=>re("renameColumn",{id:S,title:P}),onDelete:S=>re("deleteColumn",{id:S}),onAdd:S=>re("addColumn",{title:S})}),(0,j.jsx)(op,{open:I,labels:u.labels,onOpenChange:b,onAdd:(S,P)=>re("addLabel",{name:S,color:P}),onUpdate:(S,P,A)=>re("updateLabel",{name:S,newName:P,color:A}),onDelete:S=>re("deleteLabel",{name:S})})]}):(0,j.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,j.jsx)("p",{className:"kanban-error",children:d}):(0,j.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Vn=require("react");function cp({sessionId:e,inputActions:t}){let a=(0,Vn.useSyncExternalStore)(lp,sp);return(0,Vn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=np(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var fp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){kd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Io("boardTab")},o=>(0,Zs.createElement)(dp,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,Zs.createElement)(cp,o)))}};var pp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+pp+"]")){let e=document.createElement("style");e.setAttribute(pp,""),e.textContent=si,document.head.appendChild(e)}var IC=fp;
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
   * @license lucide-react v1.38.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})