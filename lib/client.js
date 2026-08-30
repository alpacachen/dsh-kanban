window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var vp=Object.create;var Pr=Object.defineProperty;var bp=Object.getOwnPropertyDescriptor;var Sp=Object.getOwnPropertyNames;var wp=Object.getPrototypeOf,yp=Object.prototype.hasOwnProperty;var oi=e=>{throw TypeError(e)};var Rp=(e,t)=>{for(var a in t)Pr(e,a,{get:t[a],enumerable:!0})},ri=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Sp(t))!yp.call(e,r)&&r!==a&&Pr(e,r,{get:()=>t[r],enumerable:!(o=bp(t,r))||o.enumerable});return e};var H=(e,t,a)=>(a=e!=null?vp(wp(e)):{},ri(t||!e||!e.__esModule?Pr(a,"default",{value:e,enumerable:!0}):a,e)),Pp=e=>ri(Pr({},"__esModule",{value:!0}),e);var ni=(e,t,a)=>t.has(e)||oi("Cannot "+a);var Ge=(e,t,a)=>(ni(e,t,"read from private field"),a?a.call(e):t.get(e)),li=(e,t,a)=>t.has(e)?oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),zn=(e,t,a,o)=>(ni(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var IC={};Rp(IC,{default:()=>CC});module.exports=Pp(IC);var si=`/*
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
`;var Qs=require("react");var ce=require("react");var S=H(require("react")),Ia=require("react-dom");var be=require("react");function ui(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,be.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Bo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ma(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function kr(e){return"nodeType"in e}function ze(e){var t,a;return e?ma(e)?e:kr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Dr(e){let{Document:t}=ze(e);return e instanceof t}function eo(e){return ma(e)?!1:e instanceof ze(e).HTMLElement}function Kn(e){return e instanceof ze(e).SVGElement}function ga(e){return e?ma(e)?e.document:kr(e)?Dr(e)?e:eo(e)||Kn(e)?e.ownerDocument:document:document:document}var st=Bo?be.useLayoutEffect:be.useEffect;function No(e){let t=(0,be.useRef)(e);return st(()=>{t.current=e}),(0,be.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function di(){let e=(0,be.useRef)(null),t=(0,be.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,be.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function to(e,t){t===void 0&&(t=[e]);let a=(0,be.useRef)(e);return st(()=>{a.current!==e&&(a.current=e)},t),a}function ao(e,t){let a=(0,be.useRef)();return(0,be.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function _o(e){let t=No(e),a=(0,be.useRef)(null),o=(0,be.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Ho(e){let t=(0,be.useRef)();return(0,be.useEffect)(()=>{t.current=e},[e]),t.current}var Xn={};function ha(e,t){return(0,be.useMemo)(()=>{if(t)return t;let a=Xn[e]==null?0:Xn[e]+1;return Xn[e]=a,e+"-"+a},[e,t])}function ci(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var xa=ci(1),La=ci(-1);function Dp(e){return"clientX"in e&&"clientY"in e}function oo(e){if(!e)return!1;let{KeyboardEvent:t}=ze(e.target);return t&&e instanceof t}function Mp(e){if(!e)return!1;let{TouchEvent:t}=ze(e.target);return t&&e instanceof t}function qo(e){if(Mp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Dp(e)?{x:e.clientX,y:e.clientY}:null}var lt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[lt.Translate.toString(e),lt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ii="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function fi(e){return e.matches(ii)?e:e.querySelector(ii)}var Ca=H(require("react")),Ap={display:"none"};function pi(e){let{id:t,value:a}=e;return Ca.default.createElement("div",{id:t,style:Ap},a)}function mi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ca.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function gi(){let[e,t]=(0,Ca.useState)("");return{announce:(0,Ca.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var ki=(0,S.createContext)(null);function Tp(e){let t=(0,S.useContext)(ki);(0,S.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Ep(){let[e]=(0,S.useState)(()=>new Set),t=(0,S.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,S.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Op={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Fp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Bp(e){let{announcements:t=Fp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Op}=e,{announce:n,announcement:l}=gi(),s=ha("DndLiveRegion"),[i,u]=(0,S.useState)(!1);if((0,S.useEffect)(()=>{u(!0)},[]),Tp((0,S.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=S.default.createElement(S.default.Fragment,null,S.default.createElement(pi,{id:o,value:r.draggable}),S.default.createElement(mi,{id:s,announcement:l}));return a?(0,Ia.createPortal)(c,a):c}var Ae;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ae||(Ae={}));function Ar(){}function ro(e,t){return(0,S.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Er(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,S.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var Ct=Object.freeze({x:0,y:0});function ol(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Np(e,t){let a=qo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function rl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function _p(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Zn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function zo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function hi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Di=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=hi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=ol(hi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(rl)},Or=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Zn(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Zn(i),c=r.reduce((f,h,p)=>f+ol(u[p],h),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(rl)};function Hp(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var nl=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Hp(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(_p)};function qp(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Mi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&qp(o,s)){let u=Zn(s).reduce((d,f)=>d+ol(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(rl)};function Up(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ai(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ct}function Wp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Vp=Wp(1);function Ti(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Gp(e,t,a){let o=Ti(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var zp={ignoreTransform:!1};function Sa(e,t){t===void 0&&(t=zp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=ze(e).getComputedStyle(e);u&&(a=Gp(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function xi(e){return Sa(e,{ignoreTransform:!0})}function Xp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Kp(e,t){return t===void 0&&(t=ze(e).getComputedStyle(e)),t.position==="fixed"}function jp(e,t){t===void 0&&(t=ze(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Xo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Dr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!eo(r)||Kn(r)||a.includes(r))return a;let n=ze(e).getComputedStyle(r);return r!==e&&jp(r,n)&&a.push(r),Kp(r,n)?a:o(r.parentNode)}return e?o(e):a}function Ei(e){let[t]=Xo(e,1);return t??null}function jn(e){return!Bo||!e?null:ma(e)?e:kr(e)?Dr(e)||e===ga(e).scrollingElement?window:eo(e)?e:null:null}function Oi(e){return ma(e)?e.scrollX:e.scrollLeft}function Fi(e){return ma(e)?e.scrollY:e.scrollTop}function Qn(e){return{x:Oi(e),y:Fi(e)}}var Ee;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ee||(Ee={}));function Bi(e){return!Bo||!e?!1:e===document.scrollingElement}function Ni(e){let t={x:0,y:0},a=Bi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var $p={x:.2,y:.2};function Yp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=$p);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Ni(e),h={x:0,y:0},p={x:0,y:0},g={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+g.height?(h.y=Ee.Backward,p.y=o*Math.abs((t.top+g.height-n)/g.height)):!c&&i>=t.bottom-g.height&&(h.y=Ee.Forward,p.y=o*Math.abs((t.bottom-g.height-i)/g.height)),!f&&s>=t.right-g.width?(h.x=Ee.Forward,p.x=o*Math.abs((t.right-g.width-s)/g.width)):!d&&l<=t.left+g.width&&(h.x=Ee.Backward,p.x=o*Math.abs((t.left+g.width-l)/g.width)),{direction:h,speed:p}}function Zp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function _i(e){return e.reduce((t,a)=>xa(t,Qn(a)),Ct)}function Qp(e){return e.reduce((t,a)=>t+Oi(a),0)}function Jp(e){return e.reduce((t,a)=>t+Fi(a),0)}function Hi(e,t){if(t===void 0&&(t=Sa),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Ei(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var em=[["x",["left","right"],Qp],["y",["top","bottom"],Jp]],Wo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Xo(a),r=_i(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of em)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},va=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function tm(e){let{EventTarget:t}=ze(e);return e instanceof t?e:ga(e)}function $n(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var pt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(pt||(pt={}));function Li(e){e.preventDefault()}function am(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var qi={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},om=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},oa=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new va(ga(a)),this.windowListeners=new va(ze(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(pt.Resize,this.handleCancel),this.windowListeners.add(pt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(pt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Hi(o),a(Ct)}handleKeyDown(t){if(oo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=qi,coordinateGetter:l=om,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:Ct;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=La(d,c),h={x:0,y:0},{scrollableAncestors:p}=o.current;for(let g of p){let m=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:I,maxScroll:b,minScroll:v}=Ni(g),y=Zp(g),R={x:Math.min(m===re.Right?y.right-y.width/2:y.right,Math.max(m===re.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(m===re.Down?y.bottom-y.height/2:y.bottom,Math.max(m===re.Down?y.top:y.top+y.height/2,d.y))},P=m===re.Right&&!C||m===re.Left&&!L,T=m===re.Down&&!I||m===re.Up&&!x;if(P&&R.x!==d.x){let M=g.scrollLeft+f.x,E=m===re.Right&&M<=b.x||m===re.Left&&M>=v.x;if(E&&!f.y){g.scrollTo({left:M,behavior:s});return}E?h.x=g.scrollLeft-M:h.x=m===re.Right?g.scrollLeft-b.x:g.scrollLeft-v.x,h.x&&g.scrollBy({left:-h.x,behavior:s});break}else if(T&&R.y!==d.y){let M=g.scrollTop+f.y,E=m===re.Down&&M<=b.y||m===re.Up&&M>=v.y;if(E&&!f.x){g.scrollTo({top:M,behavior:s});return}E?h.y=g.scrollTop-M:h.y=m===re.Down?g.scrollTop-b.y:g.scrollTop-v.y,h.y&&g.scrollBy({top:-h.y,behavior:s});break}}this.handleMove(t,xa(La(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};oa.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=qi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Ci(e){return!!(e&&"distance"in e)}function Ii(e){return!!(e&&"delay"in e)}var Vo=class{constructor(t,a,o){var r;o===void 0&&(o=tm(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ga(l),this.documentListeners=new va(this.document),this.listeners=new va(o),this.windowListeners=new va(ze(l)),this.initialCoordinates=(r=qo(n))!=null?r:Ct,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(pt.Resize,this.handleCancel),this.windowListeners.add(pt.DragStart,Li),this.windowListeners.add(pt.VisibilityChange,this.handleCancel),this.windowListeners.add(pt.ContextMenu,Li),this.documentListeners.add(pt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ii(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Ci(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(pt.Click,am,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(pt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=qo(t))!=null?a:Ct,u=La(r,i);if(!o&&s){if(Ci(s)){if(s.tolerance!=null&&$n(u,s.tolerance))return this.handleCancel();if($n(u,s.distance))return this.handleStart()}if(Ii(s)&&$n(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},rm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},ra=class extends Vo{constructor(t){let{event:a}=t,o=ga(a.target);super(t,rm,o)}};ra.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var nm={move:{name:"mousemove"},end:{name:"mouseup"}},Jn;(function(e){e[e.RightClick=2]="RightClick"})(Jn||(Jn={}));var el=class extends Vo{constructor(t){super(t,nm,ga(t.event.target))}};el.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===Jn.RightClick?!1:(o?.({event:a}),!0)}}];var Yn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},tl=class extends Vo{constructor(t){super(t,Yn)}static setup(){return window.addEventListener(Yn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Yn.move.name,t)};function t(){}}};tl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Uo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Uo||(Uo={}));var Tr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Tr||(Tr={}));function lm(e){let{acceleration:t,activator:a=Uo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Tr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=im({delta:d,disabled:!n}),[p,g]=di(),m=(0,S.useRef)({x:0,y:0}),x=(0,S.useRef)({x:0,y:0}),C=(0,S.useMemo)(()=>{switch(a){case Uo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Uo.DraggableRect:return r}},[a,r,i]),L=(0,S.useRef)(null),I=(0,S.useCallback)(()=>{let v=L.current;if(!v)return;let y=m.current.x*x.current.x,R=m.current.y*x.current.y;v.scrollBy(y,R)},[]),b=(0,S.useMemo)(()=>s===Tr.TreeOrder?[...u].reverse():u,[s,u]);(0,S.useEffect)(()=>{if(!n||!u.length||!C){g();return}for(let v of b){if(o?.(v)===!1)continue;let y=u.indexOf(v),R=c[y];if(!R)continue;let{direction:P,speed:T}=Yp(v,R,C,t,f);for(let M of["x","y"])h[M][P[M]]||(T[M]=0,P[M]=0);if(T.x>0||T.y>0){g(),L.current=v,p(I,l),m.current=T,x.current=P;return}}m.current={x:0,y:0},x.current={x:0,y:0},g()},[t,I,o,g,n,l,JSON.stringify(C),JSON.stringify(h),p,u,b,c,JSON.stringify(f)])}var sm={x:{[Ee.Backward]:!1,[Ee.Forward]:!1},y:{[Ee.Backward]:!1,[Ee.Forward]:!1}};function im(e){let{delta:t,disabled:a}=e,o=Ho(t);return ao(r=>{if(a||!o||!r)return sm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ee.Backward]:r.x[Ee.Backward]||n.x===-1,[Ee.Forward]:r.x[Ee.Forward]||n.x===1},y:{[Ee.Backward]:r.y[Ee.Backward]||n.y===-1,[Ee.Forward]:r.y[Ee.Forward]||n.y===1}}},[a,t,o])}function um(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return ao(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function dm(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Go;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Go||(Go={}));var al;(function(e){e.Optimized="optimized"})(al||(al={}));var vi=new Map;function cm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,S.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,S.useRef)(e),d=m(),f=to(d),h=(0,S.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),p=(0,S.useRef)(null),g=ao(x=>{if(d&&!a)return vi;if(!x||x===vi||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let I=L.node.current,b=I?new Wo(i(I),I):null;L.rect.current=b,b&&C.set(L.id,b)}return C}return x},[e,n,a,d,i]);return(0,S.useEffect)(()=>{c.current=e},[e]),(0,S.useEffect)(()=>{d||h()},[a,d]),(0,S.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,S.useEffect)(()=>{d||typeof s!="number"||p.current!==null||(p.current=setTimeout(()=>{h(),p.current=null},s))},[s,d,h,...o]),{droppableRects:g,measureDroppableContainers:h,measuringScheduled:n!=null};function m(){switch(u){case Go.Always:return!1;case Go.BeforeDragging:return a;default:return!a}}}function ll(e,t){return ao(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function fm(e,t){return ll(e,t)}function pm(e){let{callback:t,disabled:a}=e,o=No(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Fr(e){let{callback:t,disabled:a}=e,o=No(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function mm(e){return new Wo(Sa(e),e)}function bi(e,t,a){t===void 0&&(t=mm);let[o,r]=(0,S.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=pm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Fr({callback:n});return st(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function gm(e){let t=ll(e);return Ai(e,t)}var Si=[];function hm(e){let t=(0,S.useRef)(e),a=ao(o=>e?o&&o!==Si&&e&&t.current&&e.parentNode===t.current.parentNode?o:Xo(e):Si,[e]);return(0,S.useEffect)(()=>{t.current=e},[e]),a}function xm(e){let[t,a]=(0,S.useState)(null),o=(0,S.useRef)(e),r=(0,S.useCallback)(n=>{let l=jn(n.target);l&&a(s=>s?(s.set(l,Qn(l)),new Map(s)):null)},[]);return(0,S.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=jn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Qn(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=jn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,S.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>xa(n,l),Ct):_i(e):Ct,[e,t])}function wi(e,t){t===void 0&&(t=[]);let a=(0,S.useRef)(null);return(0,S.useEffect)(()=>{a.current=null},t),(0,S.useEffect)(()=>{let o=e!==Ct;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?La(e,a.current):Ct}function Lm(e){(0,S.useEffect)(()=>{if(!Bo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function Cm(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Ui(e){return(0,S.useMemo)(()=>e?Xp(e):null,[e])}var yi=[];function Im(e,t){t===void 0&&(t=Sa);let[a]=e,o=Ui(a?ze(a):null),[r,n]=(0,S.useState)(yi);function l(){n(()=>e.length?e.map(i=>Bi(i)?o:new Wo(t(i),i)):yi)}let s=Fr({callback:l});return st(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Wi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return eo(t)?t:e}function vm(e){let{measure:t}=e,[a,o]=(0,S.useState)(null),r=(0,S.useCallback)(u=>{for(let{target:c}of u)if(eo(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Fr({callback:r}),l=(0,S.useCallback)(u=>{let c=Wi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=_o(l);return(0,S.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var bm=[{sensor:ra,options:{}},{sensor:oa,options:{}}],Sm={current:{}},Mr={draggable:{measure:xi},droppable:{measure:xi,strategy:Go.WhileDragging,frequency:al.Optimized},dragOverlay:{measure:Sa}},ba=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},wm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ba,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ar},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Mr,measureDroppableContainers:Ar,windowRect:null,measuringScheduled:!1},Vi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ar,draggableNodes:new Map,over:null,measureDroppableContainers:Ar},Ko=(0,S.createContext)(Vi),Gi=(0,S.createContext)(wm);function ym(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ba}}}function Rm(e,t){switch(t.type){case Ae.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ae.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Ae.DragEnd:case Ae.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ae.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ba(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Ae.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new ba(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Ae.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ba(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Pm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,S.useContext)(Ko),n=Ho(o),l=Ho(a?.id);return(0,S.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!oo(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=fi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function zi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function km(e){return(0,S.useMemo)(()=>({draggable:{...Mr.draggable,...e?.draggable},droppable:{...Mr.droppable,...e?.droppable},dragOverlay:{...Mr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Dm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,S.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;st(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ai(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Ei(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Br=(0,S.createContext)({...Ct,scaleX:1,scaleY:1}),aa;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(aa||(aa={}));var Nr=(0,S.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=bm,collisionDetection:d=nl,measuring:f,modifiers:h,...p}=t,g=(0,S.useReducer)(Rm,void 0,ym),[m,x]=g,[C,L]=Ep(),[I,b]=(0,S.useState)(aa.Uninitialized),v=I===aa.Initialized,{draggable:{active:y,nodes:R,translate:P},droppable:{containers:T}}=m,M=y!=null?R.get(y):null,E=(0,S.useRef)({initial:null,translated:null}),B=(0,S.useMemo)(()=>{var Ve;return y!=null?{id:y,data:(Ve=M?.data)!=null?Ve:Sm,rect:E}:null},[y,M]),_=(0,S.useRef)(null),[Y,j]=(0,S.useState)(null),[N,V]=(0,S.useState)(null),G=to(p,Object.values(p)),A=ha("DndDescribedBy",l),Le=(0,S.useMemo)(()=>T.getEnabled(),[T]),X=km(f),{droppableRects:Q,measureDroppableContainers:Ce,measuringScheduled:Re}=cm(Le,{dragging:v,dependencies:[P.x,P.y],config:X.droppable}),ie=um(R,y),Pe=(0,S.useMemo)(()=>N?qo(N):null,[N]),F=Ip(),ee=fm(ie,X.draggable.measure);Dm({activeNode:y!=null?R.get(y):null,config:F.layoutShiftCompensation,initialRect:ee,measure:X.draggable.measure});let K=bi(ie,X.draggable.measure,ee),le=bi(ie?ie.parentElement:null),oe=(0,S.useRef)({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),w=T.getNodeFor((a=oe.current.over)==null?void 0:a.id),k=vm({measure:X.dragOverlay.measure}),O=(o=k.nodeRef.current)!=null?o:ie,W=v?(r=k.rect)!=null?r:K:null,Me=!!(k.nodeRef.current&&k.rect),ue=gm(Me?null:K),ge=Ui(O?ze(O):null),Ie=hm(v?w??ie:null),at=Im(Ie),Ye=zi(h,{transform:{x:P.x-ue.x,y:P.y-ue.y,scaleX:1,scaleY:1},activatorEvent:N,active:B,activeNodeRect:K,containerNodeRect:le,draggingNodeRect:W,over:oe.current.over,overlayNodeRect:k.rect,scrollableAncestors:Ie,scrollableAncestorRects:at,windowRect:ge}),Wn=Pe?xa(Pe,P):null,Ht=xm(Ie),Rr=wi(Ht),mp=wi(Ht,[K]),Za=xa(Ye,Rr),Qa=W?Vp(W,Ye):null,To=B&&Qa?d({active:B,collisionRect:Qa,droppableRects:Q,droppableContainers:Le,pointerCoordinates:Wn}):null,Js=zo(To,"id"),[Qt,ei]=(0,S.useState)(null),gp=Me?Ye:xa(Ye,mp),hp=Up(gp,(n=Qt?.rect)!=null?n:null,K),Vn=(0,S.useRef)(null),ti=(0,S.useCallback)((Ve,ot)=>{let{sensor:rt,options:Jt}=ot;if(_.current==null)return;let ft=R.get(_.current);if(!ft)return;let nt=Ve.nativeEvent,Mt=new rt({active:_.current,activeNode:ft,event:nt,options:Jt,context:oe,onAbort(He){if(!R.get(He))return;let{onDragAbort:At}=G.current,qt={id:He};At?.(qt),C({type:"onDragAbort",event:qt})},onPending(He,ea,At,qt){if(!R.get(He))return;let{onDragPending:Oo}=G.current,ta={id:He,constraint:ea,initialCoordinates:At,offset:qt};Oo?.(ta),C({type:"onDragPending",event:ta})},onStart(He){let ea=_.current;if(ea==null)return;let At=R.get(ea);if(!At)return;let{onDragStart:qt}=G.current,Eo={activatorEvent:nt,active:{id:ea,data:At.data,rect:E}};(0,Ia.unstable_batchedUpdates)(()=>{qt?.(Eo),b(aa.Initializing),x({type:Ae.DragStart,initialCoordinates:He,active:ea}),C({type:"onDragStart",event:Eo}),j(Vn.current),V(nt)})},onMove(He){x({type:Ae.DragMove,coordinates:He})},onEnd:Ja(Ae.DragEnd),onCancel:Ja(Ae.DragCancel)});Vn.current=Mt;function Ja(He){return async function(){let{active:At,collisions:qt,over:Eo,scrollAdjustedTranslate:Oo}=oe.current,ta=null;if(At&&Oo){let{cancelDrop:Fo}=G.current;ta={activatorEvent:nt,active:At,collisions:qt,delta:Oo,over:Eo},He===Ae.DragEnd&&typeof Fo=="function"&&await Promise.resolve(Fo(ta))&&(He=Ae.DragCancel)}_.current=null,(0,Ia.unstable_batchedUpdates)(()=>{x({type:He}),b(aa.Uninitialized),ei(null),j(null),V(null),Vn.current=null;let Fo=He===Ae.DragEnd?"onDragEnd":"onDragCancel";if(ta){let Gn=G.current[Fo];Gn?.(ta),C({type:Fo,event:ta})}})}}},[R]),xp=(0,S.useCallback)((Ve,ot)=>(rt,Jt)=>{let ft=rt.nativeEvent,nt=R.get(Jt);if(_.current!==null||!nt||ft.dndKit||ft.defaultPrevented)return;let Mt={active:nt};Ve(rt,ot.options,Mt)===!0&&(ft.dndKit={capturedBy:ot.sensor},_.current=Jt,ti(rt,ot))},[R,ti]),ai=dm(c,xp);Lm(c),st(()=>{K&&I===aa.Initializing&&b(aa.Initialized)},[K,I]),(0,S.useEffect)(()=>{let{onDragMove:Ve}=G.current,{active:ot,activatorEvent:rt,collisions:Jt,over:ft}=oe.current;if(!ot||!rt)return;let nt={active:ot,activatorEvent:rt,collisions:Jt,delta:{x:Za.x,y:Za.y},over:ft};(0,Ia.unstable_batchedUpdates)(()=>{Ve?.(nt),C({type:"onDragMove",event:nt})})},[Za.x,Za.y]),(0,S.useEffect)(()=>{let{active:Ve,activatorEvent:ot,collisions:rt,droppableContainers:Jt,scrollAdjustedTranslate:ft}=oe.current;if(!Ve||_.current==null||!ot||!ft)return;let{onDragOver:nt}=G.current,Mt=Jt.get(Js),Ja=Mt&&Mt.rect.current?{id:Mt.id,rect:Mt.rect.current,data:Mt.data,disabled:Mt.disabled}:null,He={active:Ve,activatorEvent:ot,collisions:rt,delta:{x:ft.x,y:ft.y},over:Ja};(0,Ia.unstable_batchedUpdates)(()=>{ei(Ja),nt?.(He),C({type:"onDragOver",event:He})})},[Js]),st(()=>{oe.current={activatorEvent:N,active:B,activeNode:ie,collisionRect:Qa,collisions:To,droppableRects:Q,draggableNodes:R,draggingNode:O,draggingNodeRect:W,droppableContainers:T,over:Qt,scrollableAncestors:Ie,scrollAdjustedTranslate:Za},E.current={initial:W,translated:Qa}},[B,ie,To,Qa,R,O,W,Q,T,Qt,Ie,Za]),lm({...F,delta:P,draggingRect:Qa,pointerCoordinates:Wn,scrollableAncestors:Ie,scrollableAncestorRects:at});let Lp=(0,S.useMemo)(()=>({active:B,activeNode:ie,activeNodeRect:K,activatorEvent:N,collisions:To,containerNodeRect:le,dragOverlay:k,draggableNodes:R,droppableContainers:T,droppableRects:Q,over:Qt,measureDroppableContainers:Ce,scrollableAncestors:Ie,scrollableAncestorRects:at,measuringConfiguration:X,measuringScheduled:Re,windowRect:ge}),[B,ie,K,N,To,le,k,R,T,Q,Qt,Ce,Ie,at,X,Re,ge]),Cp=(0,S.useMemo)(()=>({activatorEvent:N,activators:ai,active:B,activeNodeRect:K,ariaDescribedById:{draggable:A},dispatch:x,draggableNodes:R,over:Qt,measureDroppableContainers:Ce}),[N,ai,B,K,x,A,R,Qt,Ce]);return S.default.createElement(ki.Provider,{value:L},S.default.createElement(Ko.Provider,{value:Cp},S.default.createElement(Gi.Provider,{value:Lp},S.default.createElement(Br.Provider,{value:hp},u)),S.default.createElement(Pm,{disabled:s?.restoreFocus===!1})),S.default.createElement(Bp,{...s,hiddenTextDescribedById:A}));function Ip(){let Ve=Y?.autoScrollEnabled===!1,ot=typeof i=="object"?i.enabled===!1:i===!1,rt=v&&!Ve&&!ot;return typeof i=="object"?{...i,enabled:rt}:{enabled:rt}}}),Mm=(0,S.createContext)(null),Ri="button",Am="Draggable";function Xi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ha(Am),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,S.useContext)(Ko),{role:h=Ri,roleDescription:p="draggable",tabIndex:g=0}=r??{},m=i?.id===t,x=(0,S.useContext)(m?Br:Mm),[C,L]=_o(),[I,b]=_o(),v=Cm(l,t),y=to(a);st(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:I,data:y}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,S.useMemo)(()=>({role:h,tabIndex:g,"aria-disabled":o,"aria-pressed":m&&h===Ri?!0:void 0,"aria-roledescription":p,"aria-describedby":c.draggable}),[o,h,g,m,p,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:m,listeners:o?void 0:v,node:C,over:f,setNodeRef:L,setActivatorNodeRef:b,transform:x}}function jo(){return(0,S.useContext)(Gi)}var Tm="Droppable",Em={timeout:25};function _r(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ha(Tm),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,S.useContext)(Ko),c=(0,S.useRef)({disabled:a}),d=(0,S.useRef)(!1),f=(0,S.useRef)(null),h=(0,S.useRef)(null),{disabled:p,updateMeasurementsFor:g,timeout:m}={...Em,...r},x=to(g??o),C=(0,S.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),h.current=null},m)},[m]),L=Fr({callback:C,disabled:p||!l}),I=(0,S.useCallback)((R,P)=>{L&&(P&&(L.unobserve(P),d.current=!1),R&&L.observe(R))},[L]),[b,v]=_o(I),y=to(t);return(0,S.useEffect)(()=>{!L||!b.current||(L.disconnect(),d.current=!1,L.observe(b.current))},[b,L]),(0,S.useEffect)(()=>(s({type:Ae.RegisterDroppable,element:{id:o,key:n,disabled:a,node:b,rect:f,data:y}}),()=>s({type:Ae.UnregisterDroppable,key:n,id:o})),[o]),(0,S.useEffect)(()=>{a!==c.current.disabled&&(s({type:Ae.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:b,over:i,setNodeRef:v}}function Om(e){let{animation:t,children:a}=e,[o,r]=(0,S.useState)(null),[n,l]=(0,S.useState)(null),s=Ho(a);return!a&&!o&&s&&r(s),st(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),S.default.createElement(S.default.Fragment,null,a,o?(0,S.cloneElement)(o,{ref:l}):null)}var Fm={x:0,y:0,scaleX:1,scaleY:1};function Bm(e){let{children:t}=e;return S.default.createElement(Ko.Provider,{value:Vi},S.default.createElement(Br.Provider,{value:Fm},t))}var Nm={position:"fixed",touchAction:"none"},_m=e=>oo(e)?"transform 250ms ease":void 0,Hm=(0,S.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=_m}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Nm,width:s.width,height:s.height,top:s.top,left:s.left,transform:lt.Transform.toString(d),transformOrigin:r&&o?Np(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return S.default.createElement(a,{className:l,style:f,ref:t},n)}),qm=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Um=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:lt.Transform.toString(t)},{transform:lt.Transform.toString(a)}]},Wm={duration:250,easing:"ease",keyframes:Um,sideEffects:qm({styles:{active:{opacity:"0"}}})};function Vm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return No((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Wi(l);if(!u)return;let{transform:c}=ze(l).getComputedStyle(l),d=Ti(c);if(!d)return;let f=typeof t=="function"?t:Gm(t);return Hi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function Gm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Wm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[p]=h,g=h[h.length-1];if(JSON.stringify(p)===JSON.stringify(g))return;let m=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{m?.(),C()}})}}var Pi=0;function zm(e){return(0,S.useMemo)(()=>{if(e!=null)return Pi++,Pi},[e])}var Ki=S.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:p,droppableContainers:g,dragOverlay:m,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:I,windowRect:b}=jo(),v=(0,S.useContext)(Br),y=zm(d?.id),R=zi(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:L,scrollableAncestorRects:I,transform:v,windowRect:b}),P=ll(f),T=Vm({config:o,draggableNodes:p,droppableContainers:g,measuringConfiguration:C}),M=P?m.setRef:void 0;return S.default.createElement(Bm,null,S.default.createElement(Om,{animation:T},d&&y?S.default.createElement(Hm,{key:y,id:d.id,ref:M,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var Se=H(require("react"));function ji(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Xm(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Hr(e){return e!==null&&e>=0}function Km(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function jm(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var $i=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=ji(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var qr={scaleX:1,scaleY:1},Wr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...qr}:null}let i=$m(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...qr}:r<a&&r>=l?{x:0,y:s.height+i,...qr}:{x:0,y:0,...qr}};function $m(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Yi="Sortable",Zi=Se.default.createContext({activeIndex:-1,containerId:Yi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:$i,disabled:{draggable:!1,droppable:!1}});function Vr(e){let{children:t,id:a,items:o,strategy:r=$i,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=jo(),d=ha(Yi,a),f=s.rect!==null,h=(0,Se.useMemo)(()=>o.map(v=>typeof v=="object"&&"id"in v?v.id:v),[o]),p=l!=null,g=l?h.indexOf(l.id):-1,m=u?h.indexOf(u.id):-1,x=(0,Se.useRef)(h),C=!Km(h,x.current),L=m!==-1&&g===-1||C,I=jm(n);st(()=>{C&&p&&c(h)},[C,h,p,c]),(0,Se.useEffect)(()=>{x.current=h},[h]);let b=(0,Se.useMemo)(()=>({activeIndex:g,containerId:d,disabled:I,disableTransforms:L,items:h,overIndex:m,useDragOverlay:f,sortedRects:Xm(h,i),strategy:r}),[g,d,I.draggable,I.droppable,L,h,m,i,f,r]);return Se.default.createElement(Zi.Provider,{value:b},t)}var Ym=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return ji(a,o,r).indexOf(t)},Zm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Qm={duration:200,easing:"ease"},Qi="transform",Jm=lt.Transition.toString({property:Qi,duration:0,easing:"linear"}),eg={roleDescription:"sortable"};function tg(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Se.useState)(null),s=(0,Se.useRef)(a);return st(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Sa(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Se.useEffect)(()=>{n&&l(null)},[n]),n}function Gr(e){let{animateLayoutChanges:t=Zm,attributes:a,disabled:o,data:r,getNewIndex:n=Ym,id:l,strategy:s,resizeObserverConfig:i,transition:u=Qm}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:p,sortedRects:g,overIndex:m,useDragOverlay:x,strategy:C}=(0,Se.useContext)(Zi),L=ag(o,h),I=c.indexOf(l),b=(0,Se.useMemo)(()=>({sortable:{containerId:d,index:I,items:c},...r}),[d,r,I,c]),v=(0,Se.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:P,setNodeRef:T}=_r({id:l,data:b,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:v,...i}}),{active:M,activatorEvent:E,activeNodeRect:B,attributes:_,setNodeRef:Y,listeners:j,isDragging:N,over:V,setActivatorNodeRef:G,transform:A}=Xi({id:l,data:b,attributes:{...eg,...a},disabled:L.draggable}),Le=ui(T,Y),X=!!M,Q=X&&!p&&Hr(f)&&Hr(m),Ce=!x&&N,Re=Ce&&Q?A:null,Pe=Q?Re??(s??C)({rects:g,activeNodeRect:B,activeIndex:f,overIndex:m,index:I}):null,F=Hr(f)&&Hr(m)?n({id:l,items:c,activeIndex:f,overIndex:m}):I,ee=M?.id,K=(0,Se.useRef)({activeId:ee,items:c,newIndex:F,containerId:d}),le=c!==K.current.items,oe=t({active:M,containerId:d,isDragging:N,isSorting:X,id:l,index:I,items:c,newIndex:K.current.newIndex,previousItems:K.current.items,previousContainerId:K.current.containerId,transition:u,wasDragging:K.current.activeId!=null}),w=tg({disabled:!oe,index:I,node:R,rect:y});return(0,Se.useEffect)(()=>{X&&K.current.newIndex!==F&&(K.current.newIndex=F),d!==K.current.containerId&&(K.current.containerId=d),c!==K.current.items&&(K.current.items=c)},[X,F,d,c]),(0,Se.useEffect)(()=>{if(ee===K.current.activeId)return;if(ee!=null&&K.current.activeId==null){K.current.activeId=ee;return}let O=setTimeout(()=>{K.current.activeId=ee},50);return()=>clearTimeout(O)},[ee]),{active:M,activeIndex:f,attributes:_,data:b,rect:y,index:I,newIndex:F,items:c,isOver:P,isSorting:X,isDragging:N,listeners:j,node:R,overIndex:m,over:V,setNodeRef:Le,setActivatorNodeRef:G,setDroppableNodeRef:T,setDraggableNodeRef:Y,transform:w??Pe,transition:k()};function k(){if(w||le&&K.current.newIndex===I)return Jm;if(!(Ce&&!oo(E)||!u)&&(X||oe))return lt.Transition.toString({...u,property:Qi})}}function ag(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Ur(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var og=[re.Down,re.Right,re.Up,re.Left],zr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(og.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=Or({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=zo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,p=f?.node.current;if(p&&h&&d&&f){let m=Xo(p).some((v,y)=>s[y]!==v),x=Ji(d,f),C=rg(d,f),L=m||!x?{x:0,y:0}:{x:C?o.width-h.width:0,y:C?o.height-h.height:0},I={x:h.left,y:h.top};return L.x&&L.y?I:La(I,L)}}}};function Ji(e,t){return!Ur(e)||!Ur(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function rg(e,t){return!Ur(e)||!Ur(t)||!Ji(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var jr=require("react");var Xr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var eu=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var tu=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var sl=e=>{let t=tu(e);return t.charAt(0).toUpperCase()+t.slice(1)};var $o=require("react");var Kr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var au=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var no=require("react");var ng=(0,no.createContext)({});var ou=()=>(0,no.useContext)(ng);var ru=(0,$o.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:h=""}=ou()??{},p=o??d?Number(a??c)*24/Number(t??u):a??c;return(0,$o.createElement)("svg",{ref:i,...Kr,width:t??u??Kr.width,height:t??u??Kr.height,stroke:e??f,strokeWidth:p,className:Xr("lucide",h,r),...!n&&!au(s)&&{"aria-hidden":"true"},...s},[...l.map(([g,m])=>(0,$o.createElement)(g,m)),...Array.isArray(n)?n:[n]])});var me=(e,t)=>{let a=(0,jr.forwardRef)(({className:o,...r},n)=>(0,jr.createElement)(ru,{ref:n,iconNode:t,className:Xr(`lucide-${eu(sl(e))}`,`lucide-${e}`,o),...r}));return a.displayName=sl(e),a};var lg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],na=me("check",lg);var sg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lo=me("chevron-down",sg);var ig=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Yo=me("chevron-up",ig);var ug=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],la=me("funnel",ug);var dg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Zo=me("grip-vertical",dg);var cg=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Qo=me("list",cg);var fg=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Jo=me("message-square",fg);var pg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ut=me("plus",pg);var mg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],er=me("refresh-cw",mg);var gg=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],tr=me("settings-2",gg);var hg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ar=me("tag",hg);var xg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wt=me("trash-2",xg);var Lg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],or=me("x",Lg);var wr=require("react");var gu=H(require("react"),1);var qe=H(require("react"),1);var nu=H(require("react"),1),Cg=Object.defineProperty,ul=(e,t)=>Cg(e,"name",{value:t,configurable:!0});function il(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ul(il,"setRef");function lu(...e){return t=>{let a=!1,o=e.map(r=>{let n=il(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():il(e[r],null)}}}}ul(lu,"composeRefs");function J(...e){return nu.useCallback(lu(...e),e)}ul(J,"useComposedRefs");var Ig=Object.defineProperty,It=(e,t)=>Ig(e,"name",{value:t,configurable:!0});function Xe(e){let t=qe.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];dl(r)&&typeof $r=="function"&&(r=$r(r._payload)),qe.Children.forEach(r,f=>{if(cu(f)){s=!0;let h=f,p="child"in h.props?h.props.child:h.props.children;dl(p)&&typeof $r=="function"&&(p=$r(p._payload)),l=bg(h,p),i.push(l?.props?.children)}else i.push(f)}),l?l=qe.cloneElement(l,void 0,i):!s&&qe.Children.count(r)===1&&qe.isValidElement(r)&&(l=r);let u=l?du(l):void 0,c=J(o,u);if(!l){if(r||r===0)throw new Error(s?yg(e):wg(e));return r}let d=uu(n,l.props??{});return l.type!==qe.Fragment&&(d.ref=o?c:u),qe.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}It(Xe,"createSlot");var su=Xe("Slot"),iu=Symbol.for("radix.slottable");function vg(e){let t=It(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=iu,t}It(vg,"createSlottable");var bg=It((e,t)=>{if("child"in e.props){let a=e.props.child;return qe.isValidElement(a)?qe.cloneElement(a,void 0,e.props.children(a.props.children)):null}return qe.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function uu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}It(uu,"mergeProps");function du(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}It(du,"getElementRef");function cu(e){return qe.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===iu}It(cu,"isSlottable");var Sg=Symbol.for("react.lazy");function dl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Sg&&"_payload"in e&&fu(e._payload)}It(dl,"isLazyComponent");function fu(e){return typeof e=="object"&&e!==null&&"then"in e}It(fu,"isPromiseLike");var wg=It(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),yg=It(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),$r=qe[" use ".trim().toString()];function pu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=pu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function mu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=pu(e))&&(o&&(o+=" "),o+=t);return o}function te(...e){return mu(e)}var hu=require("react/jsx-runtime");function Rg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return te("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Oe=gu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,hu.jsx)(o?su:"button",{className:Rg({variant:t,size:a,className:e}),ref:n,...r}));Oe.displayName="Button";var dr=H(require("react"),1);var xe=H(require("react"),1);var Pg=Object.defineProperty,so=(e,t)=>Pg(e,"name",{value:t,configurable:!0}),xu=!!(typeof window<"u"&&window.document&&window.document.createElement);function q(e,t,{checkForDefaultPrevented:a=!0}={}){return so(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}so(q,"composeEventHandlers");function kg(e){if(!xu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}so(kg,"getOwnerWindow");function cl(e){if(!xu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}so(cl,"getOwnerDocument");function Lu(e,t=!1){let{activeElement:a}=cl(e);if(!a?.nodeName)return null;if(Cu(a)&&a.contentDocument)return Lu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=cl(a).getElementById(o);if(r)return r}}return a}so(Lu,"getActiveElement");function Cu(e){return e.tagName==="IFRAME"}so(Cu,"isFrame");var gt=H(require("react"),1),fl=require("react/jsx-runtime"),Dg=Object.defineProperty,mt=(e,t)=>Dg(e,"name",{value:t,configurable:!0});function Mg(e,t){let a=gt.createContext(t);a.displayName=e+"Context";let o=mt(n=>{let{children:l,...s}=n,i=gt.useMemo(()=>s,Object.values(s));return(0,fl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=gt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return mt(r,"useContext"),[o,r]}mt(Mg,"createContext");function Ue(e,t=[]){let a=[];function o(n,l){let s=gt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=mt(d=>{let{scope:f,children:h,...p}=d,g=f?.[e]?.[i]||s,m=gt.useMemo(()=>p,Object.values(p));return(0,fl.jsx)(g.Provider,{value:m,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:p=!1}=h,g=f?.[e]?.[i]||s,m=gt.useContext(g);if(m)return m;if(l!==void 0)return l;if(!p)throw new Error(`\`${d}\` must be used within \`${n}\``)}return mt(c,"useContext"),[u,c]}mt(o,"createContext");let r=mt(()=>{let n=a.map(l=>gt.createContext(l));return mt(function(s){let i=s?.[e]||n;return gt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Iu(r,...t)]}mt(Ue,"createContextScope");function Iu(...e){let t=e[0];if(e.length===1)return t;let a=mt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return mt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return gt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}mt(Iu,"composeContextScopes");var pl=H(require("react"),1);var vu=H(require("react"),1),se=globalThis?.document?vu.useLayoutEffect:()=>{};var Ag=Object.defineProperty,Tg=(e,t)=>Ag(e,"name",{value:t,configurable:!0}),Eg=pl[" useId ".trim().toString()]||(()=>{}),Og=0;function it(e){let[t,a]=pl.useState(Eg());return se(()=>{e||a(o=>o??String(Og++))},[e]),e||(t?`radix-${t}`:"")}Tg(it,"useId");var ht=H(require("react"),1);var Yr=!1;var vt=H(require("react"),1);var io=H(require("react"),1),Fg=Object.defineProperty,Bg=(e,t)=>Fg(e,"name",{value:t,configurable:!0}),bu=io[" useEffectEvent ".trim().toString()],Su=io[" useInsertionEffect ".trim().toString()];function ml(e){if(typeof bu=="function")return bu(e);let t=io.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Su=="function"?Su(()=>{t.current=e}):se(()=>{t.current=e}),io.useMemo(()=>((...a)=>t.current?.(...a)),[])}Bg(ml,"useEffectEvent");var Ng=Object.defineProperty,rr=(e,t)=>Ng(e,"name",{value:t,configurable:!0}),_g=ht[" useInsertionEffect ".trim().toString()]||se;function Tt({prop:e,defaultProp:t,onChange:a=rr(()=>{},"onChange"),caller:o}){let[r,n,l]=yu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Yr){let c=ht.useRef(e!==void 0);ht.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=ht.useCallback(c=>{if(s){let d=Ru(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}rr(Tt,"useControllableState");function yu({defaultProp:e,onChange:t}){let[a,o]=ht.useState(e),r=ht.useRef(a),n=ht.useRef(t);return _g(()=>{n.current=t},[t]),ht.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}rr(yu,"useUncontrolledState");function Ru(e){return typeof e=="function"}rr(Ru,"isFunction");var wu=Symbol("RADIX:SYNC_STATE");function Hg(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=ml(l);if(Yr){let m=vt.useRef(r!==void 0);vt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=vt.useReducer((m,x)=>{if(x.type===wu)return{...m,state:x.state};let C=e(m,x);return i&&!Object.is(C.state,m.state)&&u(C.state),C},...c),h=d.state,p=vt.useRef(h);vt.useEffect(()=>{p.current!==h&&(p.current=h,i||u(h))},[h,p,i]);let g=vt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return vt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:wu,state:r})},[r,d.state,i]),[g,f]}rr(Hg,"useControllableStateReducer");var de=H(require("react"),1);var Pu=H(require("react"),1),ku=H(require("react-dom"),1);var Du=require("react/jsx-runtime"),qg=Object.defineProperty,Ug=(e,t)=>qg(e,"name",{value:t,configurable:!0}),Wg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ae=Wg.reduce((e,t)=>{let a=Xe(`Primitive.${t}`),o=Pu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Du.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function nr(e,t){e&&ku.flushSync(()=>e.dispatchEvent(t))}Ug(nr,"dispatchDiscreteCustomEvent");var uo=H(require("react"),1),Vg=Object.defineProperty,Gg=(e,t)=>Vg(e,"name",{value:t,configurable:!0});function Fe(e){let t=uo.useRef(e);return uo.useEffect(()=>{t.current=e}),uo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Gg(Fe,"useCallbackRef");var Au=require("react/jsx-runtime"),zg=Object.defineProperty,Be=(e,t)=>zg(e,"name",{value:t,configurable:!0}),gl="dismissableLayer.update",Xg="dismissableLayer.pointerDownOutside",Kg="dismissableLayer.focusOutside",Mu,Tu=de.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),co=de.forwardRef(Be(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=de.useContext(Tu),[f,h]=de.useState(null),p=f?.ownerDocument??globalThis?.document,[,g]=de.useState({}),m=J(a,h),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,I=f?x.indexOf(f):-1,b=d.layersWithOutsidePointerEventsDisabled.size>0,v=I>=L,y=de.useRef(!1),R=Eu(E=>{l?.(E),i?.(E),E.defaultPrevented||u?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:de.useCallback(E=>{if(!(E instanceof Node))return!1;let B=[...d.branches].some(_=>_.contains(E));return v&&!B},[d.branches,v])}),P=Ou(E=>{if(r&&y.current)return;let B=E.target;[...d.branches].some(Y=>Y.contains(B))||(s?.(E),i?.(E),E.defaultPrevented||u?.())},p),T=f?I===x.length-1:!1,M=Fe(E=>{E.key==="Escape"&&(n?.(E),!E.defaultPrevented&&u&&(E.preventDefault(),u()))});return de.useEffect(()=>{if(T)return p.addEventListener("keydown",M,{capture:!0}),()=>p.removeEventListener("keydown",M,{capture:!0})},[p,T,M]),de.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Mu=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),hl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=Mu))}},[f,p,o,d]),de.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),hl())},[f,d]),de.useEffect(()=>{let E=Be(()=>g({}),"handleUpdate");return document.addEventListener(gl,E),()=>document.removeEventListener(gl,E)},[]),(0,Au.jsx)(ae.div,{...c,ref:m,style:{pointerEvents:b?v?"auto":"none":void 0,...t.style},onFocusCapture:q(t.onFocusCapture,P.onFocusCapture),onBlurCapture:q(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:q(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function xl(){let e=de.useContext(Tu),[t,a]=de.useState(null);return de.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Be(xl,"useDismissableLayerSurface");var jg=Be(()=>!0,"IS_TRUE");function Eu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=jg}=t,s=Fe(e),i=de.useRef(!1),u=de.useRef(!1),c=de.useRef(new Map),d=de.useRef(()=>{});return de.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Be(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Be(h,"isOutsideInteractionIntercepted");function p(L){if(!u.current)return;let I=L.target;I instanceof Node&&[...n].some(v=>v.contains(I))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Be(p,"handleInteractionCapture");function g(L){u.current&&c.current.set(L.type,!1)}Be(g,"handleInteractionBubble");let m=Be(L=>{if(L.target&&!i.current){let b=function(){a.removeEventListener("click",d.current);let y=h();f(),y||Ll(Xg,s,v,{discrete:!0})};var I=b;if(Be(b,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let v={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?b():(a.removeEventListener("click",d.current),d.current=b,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,p,!0),a.addEventListener(L,g);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,p,!0),a.removeEventListener(L,g)}},[a,s,o,r,n,l]),{onPointerDownCapture:Be(()=>i.current=!0,"onPointerDownCapture")}}Be(Eu,"usePointerDownOutside");function Ou(e,t=globalThis?.document){let a=Fe(e),o=de.useRef(!1);return de.useEffect(()=>{let r=Be(n=>{n.target&&!o.current&&Ll(Kg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Be(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Be(()=>o.current=!1,"onBlurCapture")}}Be(Ou,"useFocusOutside");function hl(){let e=new CustomEvent(gl);document.dispatchEvent(e)}Be(hl,"dispatchUpdate");function Ll(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?nr(r,n):r.dispatchEvent(n)}Be(Ll,"handleAndDispatchCustomEvent");var xt=H(require("react"),1);var Nu=require("react/jsx-runtime"),$g=Object.defineProperty,Ze=(e,t)=>$g(e,"name",{value:t,configurable:!0}),Cl="focusScope.autoFocusOnMount",Il="focusScope.autoFocusOnUnmount",Fu={bubbles:!1,cancelable:!0},fo=xt.forwardRef(Ze(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=xt.useState(null),c=Fe(n),d=Fe(l),f=xt.useRef(null),h=J(a,u),p=xt.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;xt.useEffect(()=>{if(r){let L=function(y){if(p.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Vt(f.current,{select:!0})},I=function(y){if(p.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Vt(f.current,{select:!0}))},b=function(y){if(document.activeElement===document.body)for(let P of y)P.removedNodes.length>0&&Vt(i)};var m=L,x=I,C=b;Ze(L,"handleFocusIn"),Ze(I,"handleFocusOut"),Ze(b,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",I);let v=new MutationObserver(b);return i&&v.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",I),v.disconnect()}}},[r,i,p.paused]),xt.useEffect(()=>{if(i){Bu.add(p);let m=document.activeElement;if(!i.contains(m)){let C=new CustomEvent(Cl,Fu);i.addEventListener(Cl,c),i.dispatchEvent(C),C.defaultPrevented||(_u(Vu(Sl(i)),{select:!0}),document.activeElement===m&&Vt(i))}return()=>{i.removeEventListener(Cl,c),setTimeout(()=>{let C=new CustomEvent(Il,Fu);i.addEventListener(Il,d),i.dispatchEvent(C),C.defaultPrevented||Vt(m??document.body,{select:!0}),i.removeEventListener(Il,d),Bu.remove(p)},0)}}},[i,c,d,p]);let g=xt.useCallback(m=>{if(!o&&!r||p.paused)return;let x=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,C=document.activeElement;if(x&&C){let L=m.currentTarget,[I,b]=Hu(L);I&&b?!m.shiftKey&&C===b?(m.preventDefault(),o&&Vt(I,{select:!0})):m.shiftKey&&C===I&&(m.preventDefault(),o&&Vt(b,{select:!0})):C===L&&m.preventDefault()}},[o,r,p.paused]);return(0,Nu.jsx)(ae.div,{tabIndex:-1,...s,ref:h,onKeyDown:g})},"FocusScope"));function _u(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Vt(o,{select:t}),document.activeElement!==a)return}Ze(_u,"focusFirst");function Hu(e){let t=Sl(e),a=vl(t,e),o=vl(t.reverse(),e);return[a,o]}Ze(Hu,"getTabbableEdges");function Sl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ze(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Ze(Sl,"getTabbableCandidates");function vl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):qu(o,{upTo:t})))return o}Ze(vl,"findVisible");function qu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ze(qu,"isHidden");function Uu(e){return e instanceof HTMLInputElement&&"select"in e}Ze(Uu,"isSelectableInput");function Vt(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Uu(e)&&t&&e.select()}}Ze(Vt,"focus");var Bu=Wu();function Wu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=bl(e,t),e.unshift(t)},remove(t){e=bl(e,t),e[0]?.resume()}}}Ze(Wu,"createFocusScopesStack");function bl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ze(bl,"arrayRemove");function Vu(e){return e.filter(t=>t.tagName!=="A")}Ze(Vu,"removeLinks");var Zr=H(require("react"),1),Gu=H(require("react-dom"),1);var zu=require("react/jsx-runtime"),Yg=Object.defineProperty,Zg=(e,t)=>Yg(e,"name",{value:t,configurable:!0}),po=Zr.forwardRef(Zg(function(t,a){let{container:o,...r}=t,[n,l]=Zr.useState(!1);se(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Gu.createPortal((0,zu.jsx)(ae.div,{...r,ref:a}),s):null},"Portal"));var We=H(require("react"),1);var Xu=H(require("react"),1),Qg=Object.defineProperty,Gt=(e,t)=>Qg(e,"name",{value:t,configurable:!0});function Ku(e,t){return Xu.useReducer((a,o)=>t[a][o]??a,e)}Gt(Ku,"useStateMachine");var zt=Gt(e=>{let{present:t,children:a}=e,o=ju(t),r=typeof a=="function"?a({present:o.isPresent}):We.Children.only(a),n=$u(o.ref,Yu(r));return typeof a=="function"||o.isPresent?We.cloneElement(r,{ref:n}):null},"Presence");function ju(e){let[t,a]=We.useState(),o=We.useRef(null),r=We.useRef(e),n=We.useRef("none"),l=We.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=Ku(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return We.useEffect(()=>{i==="mounted"?(n.current=l.current??mo(o.current),l.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,p=mo(c);e?(l.current=p,u("MOUNT")):p==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Gt(p=>{let m=mo(o.current).includes(CSS.escape(p.animationName));if(p.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),h=Gt(p=>{p.target===t&&(n.current=mo(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:We.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=mo(d)}else o.current=null;a(c)},[])}}Gt(ju,"usePresence");function wl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Gt(wl,"setRef");function $u(...e){let t=We.useRef(e);return t.current=e,We.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=wl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():wl(o[l],null)}}},[])}Gt($u,"useStableComposedRefs");function mo(e){return e?.animationName||"none"}Gt(mo,"getAnimationName");function Yu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Gt(Yu,"getElementRef");var Zu=H(require("react"),1),Jg=Object.defineProperty,Rl=(e,t)=>Jg(e,"name",{value:t,configurable:!0}),Qr=0,go=null;function eh(e){return sa(),e.children}Rl(eh,"FocusGuards");function sa(){Zu.useEffect(()=>{go||(go={start:yl(),end:yl()});let{start:e,end:t}=go;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Qr++,()=>{Qr===1&&(go?.start.remove(),go?.end.remove(),go=null),Qr=Math.max(0,Qr-1)}},[])}Rl(sa,"useFocusGuards");function yl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Rl(yl,"createFocusGuard");var et=function(){return et=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},et.apply(this,arguments)};function Jr(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Qu(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var rn=H(require("react"));var Ke=H(require("react"));var wa="right-scroll-bar-position",ya="width-before-scroll-bar",Pl="with-scroll-bars-hidden",kl="--removed-body-scroll-bar-size";function en(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Ju=require("react");function ed(e,t){var a=(0,Ju.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var tn=H(require("react"));var th=typeof window<"u"?tn.useLayoutEffect:tn.useEffect,td=new WeakMap;function Dl(e,t){var a=ed(t||null,function(o){return e.forEach(function(r){return en(r,o)})});return th(function(){var o=td.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||en(s,null)}),n.forEach(function(s){r.has(s)||en(s,l)})}td.set(a,e)},[e]),a}function ah(e){return e}function oh(e,t){t===void 0&&(t=ah);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Ml(e){e===void 0&&(e={});var t=oh(null);return t.options=et({async:!0,ssr:!1},e),t}var ad=H(require("react")),od=function(e){var t=e.sideCar,a=Jr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return ad.createElement(o,et({},a))};od.isSideCarExport=!0;function Al(e,t){return e.useMedium(t),od}var an=Ml();var Tl=function(){},lr=Ke.forwardRef(function(e,t){var a=Ke.useRef(null),o=Ke.useState({onScrollCapture:Tl,onWheelCapture:Tl,onTouchMoveCapture:Tl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,p=e.noIsolation,g=e.inert,m=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,I=Jr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=f,v=Dl([a,t]),y=et(et({},I),r);return Ke.createElement(Ke.Fragment,null,c&&Ke.createElement(b,{sideCar:an,removeScrollBar:u,shards:d,noRelative:h,noIsolation:p,inert:g,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:L}),l?Ke.cloneElement(Ke.Children.only(s),et(et({},y),{ref:v})):Ke.createElement(C,et({},y,{className:i,ref:v}),s))});lr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};lr.classNames={fullWidth:ya,zeroRight:wa};var he=H(require("react"));var xo=H(require("react"));var ld=H(require("react"));var rd;var nd=function(){if(rd)return rd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function rh(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=nd();return t&&e.setAttribute("nonce",t),e}function nh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function lh(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var El=function(){var e=0,t=null;return{add:function(a){e==0&&(t=rh())&&(nh(t,a),lh(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Ol=function(){var e=El();return function(t,a){ld.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var sr=function(){var e=Ol(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var sh={left:0,top:0,right:0,gap:0},Fl=function(e){return parseInt(e||"",10)||0},ih=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Fl(a),Fl(o),Fl(r)]},Bl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return sh;var t=ih(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var uh=sr(),ho="data-scroll-locked",dh=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Pl,` {
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
    `).concat(kl,": ").concat(s,`px;
  }
`)},sd=function(){var e=parseInt(document.body.getAttribute(ho)||"0",10);return isFinite(e)?e:0},ch=function(){xo.useEffect(function(){return document.body.setAttribute(ho,(sd()+1).toString()),function(){var e=sd()-1;e<=0?document.body.removeAttribute(ho):document.body.setAttribute(ho,e.toString())}},[])},Nl=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;ch();var n=xo.useMemo(function(){return Bl(r)},[r]);return xo.createElement(uh,{styles:dh(n,!t,r,a?"":"!important")})};var _l=!1;if(typeof window<"u")try{ir=Object.defineProperty({},"passive",{get:function(){return _l=!0,!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{_l=!1}var ir,Ra=_l?{passive:!1}:!1;var fh=function(e){return e.tagName==="TEXTAREA"},id=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!fh(e)&&a[t]==="visible")},ph=function(e){return id(e,"overflowY")},mh=function(e){return id(e,"overflowX")},Hl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=ud(e,o);if(r){var n=dd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},gh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},hh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},ud=function(e,t){return e==="v"?ph(t):mh(t)},dd=function(e,t){return e==="v"?gh(t):hh(t)},xh=function(e,t){return e==="h"&&t==="rtl"?-1:1},cd=function(e,t,a,o,r){var n=xh(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var h=dd(e,s),p=h[0],g=h[1],m=h[2],x=g-m-n*p;(p||x)&&ud(e,s)&&(d+=x,f+=p);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var on=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},fd=function(e){return[e.deltaX,e.deltaY]},pd=function(e){return e&&"current"in e?e.current:e},Lh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ch=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ih=0,Lo=[];function md(e){var t=he.useRef([]),a=he.useRef([0,0]),o=he.useRef(),r=he.useState(Ih++)[0],n=he.useState(sr)[0],l=he.useRef(e);he.useEffect(function(){l.current=e},[e]),he.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var g=Qu([e.lockRef.current],(e.shards||[]).map(pd),!0).filter(Boolean);return g.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),g.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=he.useCallback(function(g,m){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!l.current.allowPinchZoom;var x=on(g),C=a.current,L="deltaX"in g?g.deltaX:C[0]-x[0],I="deltaY"in g?g.deltaY:C[1]-x[1],b,v=g.target,y=Math.abs(L)>Math.abs(I)?"h":"v";if("touches"in g&&y==="h"&&v.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,T=P?P===v||P.contains(v):!1;if(T)return!1;var M=Hl(y,v);if(!M)return!0;if(M?b=y:(b=y==="v"?"h":"v",M=Hl(y,v)),!M)return!1;if(!o.current&&"changedTouches"in g&&(L||I)&&(o.current=b),!b)return!0;var E=o.current||b;return cd(E,m,g,E==="h"?L:I,!0)},[]),i=he.useCallback(function(g){var m=g;if(!(!Lo.length||Lo[Lo.length-1]!==n)){var x="deltaY"in m?fd(m):on(m),C=t.current.filter(function(b){return b.name===m.type&&(b.target===m.target||m.target===b.shadowParent)&&Lh(b.delta,x)})[0];if(C&&C.should){m.cancelable&&m.preventDefault();return}if(!C){var L=(l.current.shards||[]).map(pd).filter(Boolean).filter(function(b){return b.contains(m.target)}),I=L.length>0?s(m,L[0]):!l.current.noIsolation;I&&m.cancelable&&m.preventDefault()}}},[]),u=he.useCallback(function(g,m,x,C){var L={name:g,delta:m,target:x,should:C,shadowParent:vh(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(I){return I!==L})},1)},[]),c=he.useCallback(function(g){a.current=on(g),o.current=void 0},[]),d=he.useCallback(function(g){u(g.type,fd(g),g.target,s(g,e.lockRef.current))},[]),f=he.useCallback(function(g){u(g.type,on(g),g.target,s(g,e.lockRef.current))},[]);he.useEffect(function(){return Lo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ra),document.addEventListener("touchmove",i,Ra),document.addEventListener("touchstart",c,Ra),function(){Lo=Lo.filter(function(g){return g!==n}),document.removeEventListener("wheel",i,Ra),document.removeEventListener("touchmove",i,Ra),document.removeEventListener("touchstart",c,Ra)}},[]);var h=e.removeScrollBar,p=e.inert;return he.createElement(he.Fragment,null,p?he.createElement(n,{styles:Ch(r)}):null,h?he.createElement(Nl,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function vh(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var gd=Al(an,md);var hd=rn.forwardRef(function(e,t){return rn.createElement(lr,et({},e,{ref:t,sideCar:gd}))});hd.classNames=lr.classNames;var Pa=hd;var bh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Co=new WeakMap,nn=new WeakMap,ln={},ql=0,xd=function(e){return e&&(e.host||xd(e.parentNode))},Sh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=xd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},wh=function(e,t,a,o){var r=Sh(t,Array.isArray(e)?e:[e]);ln[a]||(ln[a]=new WeakMap);var n=ln[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var h=f.getAttribute(o),p=h!==null&&h!=="false",g=(Co.get(f)||0)+1,m=(n.get(f)||0)+1;Co.set(f,g),n.set(f,m),l.push(f),g===1&&p&&nn.set(f,!0),m===1&&f.setAttribute(a,"true"),p||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),ql++,function(){l.forEach(function(d){var f=Co.get(d)-1,h=n.get(d)-1;Co.set(d,f),n.set(d,h),f||(nn.has(d)||d.removeAttribute(o),nn.delete(d)),h||d.removeAttribute(a)}),ql--,ql||(Co=new WeakMap,Co=new WeakMap,nn=new WeakMap,ln={})}},Io=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||bh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),wh(o,r,a,"aria-hidden")):function(){return null}};var ve=require("react/jsx-runtime"),yh=Object.defineProperty,Lt=(e,t)=>yh(e,"name",{value:t,configurable:!0}),Wl="Dialog",[Ld,zb]=Ue(Wl),[Rh,Et]=Ld(Wl),Cd=Lt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=xe.useRef(null),i=xe.useRef(null),[u,c]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:Wl}),[d,f]=xe.useState(0),[h,p]=xe.useState(0);return(0,ve.jsx)(Rh,{scope:t,triggerRef:s,contentRef:i,contentId:it(),titleId:it(),descriptionId:it(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:p,open:u,onOpenChange:c,onOpenToggle:xe.useCallback(()=>c(g=>!g),[c]),modal:l,children:a})},"Dialog");var Id="DialogPortal",[Ph,vd]=Ld(Id,{forceMount:void 0}),bd=Lt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Et(Id,t);return(0,ve.jsx)(Ph,{scope:t,forceMount:a,children:xe.Children.map(o,l=>(0,ve.jsx)(zt,{present:a||n.open,children:(0,ve.jsx)(po,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Ul="DialogOverlay",Vl=xe.forwardRef(Lt(function(t,a){let o=vd(Ul,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(Ul,t.__scopeDialog);return l.modal?(0,ve.jsx)(zt,{present:r||l.open,children:(0,ve.jsx)(Dh,{...n,ref:a})}):null},"DialogOverlay")),kh=Xe("DialogOverlay.RemoveScroll"),Dh=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Ul,o),l=xl(),s=J(a,l);return(0,ve.jsx)(Pa,{as:kh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,ve.jsx)(ae.div,{"data-state":Kl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),ur="DialogContent",Gl=xe.forwardRef(Lt(function(t,a){let o=vd(ur,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(ur,t.__scopeDialog);return(0,ve.jsx)(zt,{present:r||l.open,children:l.modal?(0,ve.jsx)(Mh,{...n,ref:a}):(0,ve.jsx)(Ah,{...n,ref:a})})},"DialogContent")),Mh=xe.forwardRef(Lt(function(t,a){let o=Et(ur,t.__scopeDialog),r=xe.useRef(null),n=J(a,o.contentRef,r);return xe.useEffect(()=>{let l=r.current;if(l)return Io(l)},[]),(0,ve.jsx)(Sd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Ah=xe.forwardRef(Lt(function(t,a){let o=Et(ur,t.__scopeDialog),r=xe.useRef(!1),n=xe.useRef(!1);return(0,ve.jsx)(Sd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Sd=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Et(ur,o);return sa(),(0,ve.jsx)(ve.Fragment,{children:(0,ve.jsx)(fo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,ve.jsx)(co,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Kl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Th="DialogTitle",zl=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Th,o),{setTitleCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,ve.jsx)(ae.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Eh="DialogDescription",Xl=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Eh,o),{setDescriptionCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,ve.jsx)(ae.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Oh="DialogClose",wd=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Oh,o);return(0,ve.jsx)(ae.button,{type:"button",...r,ref:a,onClick:q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Kl(e){return e?"open":"closed"}Lt(Kl,"getState");var Rd=require("react"),jl="dsh-kanban",Pd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Bh={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},ka=null,$l=null;function kd(e){let t=e.get("locale");if(t!==void 0){ka=t;try{t.register(jl,"zh",Pd),t.register(jl,"en",Bh)}catch{}$l=t.bind(jl)}}function vo(e){return $l?$l(e):Pd[e]??e}var Nh=e=>ka&&typeof ka.subscribe=="function"?ka.subscribe(e):()=>{},yd=()=>ka&&typeof ka.getSnapshot=="function"?ka.getSnapshot():null;function Qe(){return(0,Rd.useSyncExternalStore)(Nh,yd,yd),vo}var ut=require("react/jsx-runtime"),bo=Cd;var _h=bd;var Dd=dr.forwardRef(({className:e,...t},a)=>(0,ut.jsx)(Vl,{ref:a,className:te("kanban-portal kanban-dialog-overlay",e),...t}));Dd.displayName=Vl.displayName;var Da=dr.forwardRef(({className:e,children:t,...a},o)=>{let r=Qe();return(0,ut.jsxs)(_h,{children:[(0,ut.jsx)(Dd,{}),(0,ut.jsxs)(Gl,{ref:o,className:te("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,ut.jsxs)(wd,{className:"kanban-dialog-close",children:[(0,ut.jsx)(or,{className:"kanban-dialog-close-icon"}),(0,ut.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Da.displayName=Gl.displayName;var Ma=({className:e,...t})=>(0,ut.jsx)("div",{className:te("kanban-dialog-header",e),...t});Ma.displayName="DialogHeader";var cr=({className:e,...t})=>(0,ut.jsx)("div",{className:te("kanban-dialog-footer",e),...t});cr.displayName="DialogFooter";var Aa=dr.forwardRef(({className:e,...t},a)=>(0,ut.jsx)(zl,{ref:a,className:te("kanban-dialog-title",e),...t}));Aa.displayName=zl.displayName;var fr=dr.forwardRef(({className:e,...t},a)=>(0,ut.jsx)(Xl,{ref:a,className:te("kanban-dialog-description",e),...t}));fr.displayName=Xl.displayName;var Ir=H(require("react"),1);var Pt=H(require("react"),1);var Z=H(require("react"),1);var bt=H(require("react"),1);var sn=require("react/jsx-runtime"),tt=H(require("react"),1);var Ta=require("react/jsx-runtime");var Hh=Object.defineProperty,Ne=(e,t)=>Hh(e,"name",{value:t,configurable:!0});function Ea(e){let t=e+"CollectionProvider",[a,o]=Ue(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Ne(g=>{let{scope:m,children:x}=g,C=bt.useRef(null),L=bt.useRef(new Map).current;return(0,sn.jsx)(r,{scope:m,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Xe(s),u=bt.forwardRef((g,m)=>{let{scope:x,children:C}=g,L=n(s,x),I=J(m,L.collectionRef);return(0,sn.jsx)(i,{ref:I,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Xe(c),h=bt.forwardRef((g,m)=>{let{scope:x,children:C,...L}=g,I=bt.useRef(null),b=J(m,I),v=n(c,x);return bt.useEffect(()=>(v.itemMap.set(I,{ref:I,...L}),()=>{v.itemMap.delete(I)})),(0,sn.jsx)(f,{[d]:"",ref:b,children:C})});h.displayName=c;function p(g){let m=n(e+"CollectionConsumer",g);return bt.useCallback(()=>{let C=m.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((v,y)=>L.indexOf(v.ref.current)-L.indexOf(y.ref.current))},[m.collectionRef,m.itemMap])}return Ne(p,"useCollection"),[{Provider:l,Slot:u,ItemSlot:h},p,o]}Ne(Ea,"createCollection");var Md=new WeakMap,ke,dt,Yl=(dt=class extends Map{constructor(a){super(a);li(this,ke);zn(this,ke,[...super.keys()]),Md.set(this,!0)}set(a,o){return Md.get(this)&&(this.has(a)?Ge(this,ke)[Ge(this,ke).indexOf(a)]=a:Ge(this,ke).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=Ge(this,ke).length,s=Ql(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...Ge(this,ke)],f,h=!1;for(let p=i;p<c;p++)if(i===p){let g=d[p];d[p]===o&&(g=d[p+1]),n&&this.delete(o),f=this.get(g),this.set(o,r)}else{!h&&d[p-1]===o&&(h=!0);let g=d[h?p:p-1],m=f;f=this.get(g),this.delete(g),this.set(g,m)}return this}with(a,o,r){let n=new dt(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,ke).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,ke).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ge(this,ke).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,ke).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return zn(this,ke,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,ke).splice(Ge(this,ke).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=un(Ge(this,ke),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=un(Ge(this,ke),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,ke).indexOf(a)}keyAt(a){return un(Ge(this,ke),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new dt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new dt(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new dt(o)}toReversed(){let a=new dt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new dt(o)}slice(a,o){let r=new dt,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},ke=new WeakMap,Ne(dt,"OrderedDict"),dt);function un(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Ad(e,t);return a===-1?void 0:e[a]}Ne(un,"at");function Ad(e,t){let a=e.length,o=Ql(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Ne(Ad,"toSafeIndex");function Ql(e){return e!==e||e===0?0:Math.trunc(e)}Ne(Ql,"toSafeInteger");function qh(e){let t=e+"CollectionProvider",[a,o]=Ue(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Yl,setItemMap:Ne(()=>{},"setItemMap")}),l=Ne(({state:L,...I})=>L?(0,Ta.jsx)(i,{...I,state:L}):(0,Ta.jsx)(s,{...I}),"CollectionProvider");l.displayName=t;let s=Ne(L=>{let I=m();return(0,Ta.jsx)(i,{...L,state:I})},"CollectionInit");s.displayName=t+"Init";let i=Ne(L=>{let{scope:I,children:b,state:v}=L,y=tt.useRef(null),[R,P]=tt.useState(null),T=J(y,P),[M,E]=v;return tt.useEffect(()=>{if(!R)return;let B=Od(()=>{});return B.observe(R,{childList:!0,subtree:!0}),()=>{B.disconnect()}},[R]),(0,Ta.jsx)(r,{scope:I,itemMap:M,setItemMap:E,collectionRef:T,collectionRefObject:y,collectionElement:R,children:b})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Xe(u),d=tt.forwardRef((L,I)=>{let{scope:b,children:v}=L,y=n(u,b),R=J(I,y.collectionRef);return(0,Ta.jsx)(c,{ref:R,children:v})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",p=Xe(f),g=tt.forwardRef((L,I)=>{let{scope:b,children:v,...y}=L,R=tt.useRef(null),[P,T]=tt.useState(null),M=J(I,R,T),E=n(f,b),{setItemMap:B}=E,_=tt.useRef(y);Td(_.current,y)||(_.current=y);let Y=_.current;return tt.useEffect(()=>{let j=Y;return B(N=>P?N.has(P)?N.set(P,{...j,element:P}).toSorted(Zl):(N.set(P,{...j,element:P}),N.toSorted(Zl)):N),()=>{B(N=>!P||!N.has(P)?N:(N.delete(P),new Yl(N)))}},[P,Y,B]),(0,Ta.jsx)(p,{[h]:"",ref:M,children:v})});g.displayName=f;function m(){return tt.useState(new Yl)}Ne(m,"useInitCollection");function x(L){let{itemMap:I}=n(e+"CollectionConsumer",L);return I}return Ne(x,"useCollection"),[{Provider:l,Slot:d,ItemSlot:g},{createCollectionScope:o,useCollection:x,useInitCollection:m}]}Ne(qh,"createCollection");function Td(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ne(Td,"shallowEqual");function Ed(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ne(Ed,"isElementPreceding");function Zl(e,t){return!e[1].element||!t[1].element?0:Ed(e[1].element,t[1].element)?-1:1}Ne(Zl,"sortByDocumentPosition");function Od(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Ne(Od,"getChildListObserver");var dn=H(require("react"),1),Vh=require("react/jsx-runtime"),Uh=Object.defineProperty,Wh=(e,t)=>Uh(e,"name",{value:t,configurable:!0}),Gh=dn.createContext(void 0);function Oa(e){let t=dn.useContext(Gh);return e||t||"ltr"}Wh(Oa,"useDirection");var je=H(require("react"),1);var Nd=["top","right","bottom","left"];var Ot=Math.min,St=Math.max,mr=Math.round,gr=Math.floor,Ft=e=>({x:e,y:e}),zh={left:"right",right:"left",bottom:"top",top:"bottom"};function Jl(e,t,a){return St(e,Ot(t,a))}function Bt(e,t){return typeof e=="function"?e(t):e}function Xt(e){return e.split("-")[0]}function Fa(e){return e.split("-")[1]}function fn(e){return e==="x"?"y":"x"}function pn(e){return e==="y"?"height":"width"}function wt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function mn(e){return fn(wt(e))}function _d(e,t,a){a===void 0&&(a=!1);let o=Fa(e),r=mn(e),n=pn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=pr(l)),[l,pr(l)]}function Hd(e){let t=pr(e);return[cn(e),t,cn(t)]}function cn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Fd=["left","right"],Bd=["right","left"],Xh=["top","bottom"],Kh=["bottom","top"];function jh(e,t,a){switch(e){case"top":case"bottom":return a?t?Bd:Fd:t?Fd:Bd;case"left":case"right":return t?Xh:Kh;default:return[]}}function qd(e,t,a,o){let r=Fa(e),n=jh(Xt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(cn)))),n}function pr(e){let t=Xt(e);return zh[t]+e.slice(t.length)}function $h(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function es(e){return typeof e!="number"?$h(e):{top:e,right:e,bottom:e,left:e}}function Ba(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Ud(e,t,a){let{reference:o,floating:r}=e,n=wt(t),l=mn(t),s=pn(l),i=Xt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let p=Fa(t);return p&&(h[l]+=f*(p==="end"?1:-1)*(a&&u?-1:1)),h}async function Gd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Bt(t,e),p=es(h),m=s[f?d==="floating"?"reference":"floating":d],x=Ba(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),I=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},b=Ba(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-b.top+p.top)/I.y,bottom:(b.bottom-x.bottom+p.bottom)/I.y,left:(x.left-b.left+p.left)/I.x,right:(b.right-x.right+p.right)/I.x}}var Yh=50,zd=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Gd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Ud(u,o,i),f=o,h=0,p={};for(let g=0;g<n.length;g++){let m=n[g];if(!m)continue;let{name:x,fn:C}=m,{x:L,y:I,data:b,reset:v}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});c=L??c,d=I??d,p[x]={...p[x],...b},v&&h<Yh&&(h++,typeof v=="object"&&(v.placement&&(f=v.placement),v.rects&&(u=v.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):v.rects),{x:c,y:d}=Ud(u,f,i)),g=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:p}},Xd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Bt(e,t)||{};if(u==null)return{};let d=es(c),f={x:a,y:o},h=mn(r),p=pn(h),g=await l.getDimensions(u),m=h==="y",x=m?"top":"left",C=m?"bottom":"right",L=m?"clientHeight":"clientWidth",I=n.reference[p]+n.reference[h]-f[h]-n.floating[p],b=f[h]-n.reference[h],v=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=v?v[L]:0;(!y||!await(l.isElement==null?void 0:l.isElement(v)))&&(y=s.floating[L]||n.floating[p]);let R=I/2-b/2,P=y/2-g[p]/2-1,T=Ot(d[x],P),M=Ot(d[C],P),E=y-g[p]-M,B=y/2-g[p]/2+R,_=Jl(T,B,E),Y=!i.arrow&&Fa(r)!=null&&B!==_&&n.reference[p]/2-(B<T?T:M)-g[p]/2<0,j=Y?B<T?B-T:B-E:0;return{[h]:f[h]+j,data:{[h]:_,centerOffset:B-_-j,...Y&&{alignmentOffset:j}},reset:Y}}});var Kd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Bt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Xt(r),C=wt(s),L=Xt(s)===s,I=await(i.isRTL==null?void 0:i.isRTL(u.floating)),b=f||(L||!g?[pr(s)]:Hd(s)),v=p!=="none";!f&&v&&b.push(...qd(s,g,p,I));let y=[s,...b],R=await i.detectOverflow(t,m),P=[],T=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[x]),d){let _=_d(r,l,I);P.push(R[_[0]],R[_[1]])}if(T=[...T,{placement:r,overflows:P}],!P.every(_=>_<=0)){var M,E;let _=(((M=n.flip)==null?void 0:M.index)||0)+1,Y=y[_];if(Y&&(!(d==="alignment"?C!==wt(Y):!1)||T.every(V=>wt(V.placement)===C?V.overflows[0]>0:!0)))return{data:{index:_,overflows:T},reset:{placement:Y}};let j=(E=T.filter(N=>N.overflows[0]<=0).sort((N,V)=>N.overflows[1]-V.overflows[1])[0])==null?void 0:E.placement;if(!j)switch(h){case"bestFit":{var B;let N=(B=T.filter(V=>{if(v){let G=wt(V.placement);return G===C||G==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(G=>G>0).reduce((G,A)=>G+A,0)]).sort((V,G)=>V[1]-G[1])[0])==null?void 0:B[0];N&&(j=N);break}case"initialPlacement":j=s;break}if(r!==j)return{reset:{placement:j}}}return{}}}};function Wd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Vd(e){return Nd.some(t=>e[t]>=0)}var jd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Bt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Wd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Vd(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Wd(l,a.floating);return{data:{escapedOffsets:s,escaped:Vd(s)}}}default:return{}}}}};var $d=new Set(["left","top"]);async function Zh(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Xt(a),s=Fa(a),i=wt(a)==="y",u=$d.has(l)?-1:1,c=n&&i?-1:1,d=Bt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof p=="number"&&(h=s==="end"?p*-1:p),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var Yd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await Zh(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Zd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:L,y:I}=C;return{x:L,y:I}}},...u}=Bt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=wt(r),h=fn(f),p=c[h],g=c[f],m=(C,L)=>Jl(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);l&&(p=m(h,p)),s&&(g=m(f,g));let x=i.fn({...t,[h]:p,[f]:g});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[h]:l,[f]:s}}}}}},Qd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Bt(e,t),f={x:r,y:n},h=wt(l),p=fn(h),g=f[p],m=f[h],x=Bt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let b=p==="y"?"height":"width",v=s.reference[p]-s.floating[b]+C.mainAxis,y=s.reference[p]+s.reference[b]-C.mainAxis;g<v?g=v:g>y&&(g=y)}if(d){var L,I;let b=p==="y"?"width":"height",v=$d.has(Xt(l)),y=s.reference[h]-s.floating[b]+(v&&((L=i.offset)==null?void 0:L[h])||0)+(v?0:C.crossAxis),R=s.reference[h]+s.reference[b]+(v?0:((I=i.offset)==null?void 0:I[h])||0)-(v?C.crossAxis:0);m<y?m=y:m>R&&(m=R)}return{[p]:g,[h]:m}}}},Jd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Bt(e,t),i=await r.detectOverflow(t,s),u=Xt(a),c=Fa(a),d=wt(a)==="y",{width:f,height:h}=o.floating,p,g;u==="top"||u==="bottom"?(p=u,g=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(g=u,p=c==="end"?"top":"bottom");let m=h-i.top-i.bottom,x=f-i.left-i.right,C=Ot(h-i[p],m),L=Ot(f-i[g],x),I=t.middlewareData.shift,b=!I,v=C,y=L;I!=null&&I.enabled.x&&(y=x),I!=null&&I.enabled.y&&(v=m),b&&!c&&(d?y=f-2*St(i.left,i.right):v=h-2*St(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:v});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function gn(){return typeof window<"u"}function Ha(e){return tc(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nt(e){var t;return(t=(tc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tc(e){return gn()?e instanceof Node||e instanceof Je(e).Node:!1}function yt(e){return gn()?e instanceof Element||e instanceof Je(e).Element:!1}function Kt(e){return gn()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function ec(e){return!gn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}function hr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Rt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function ac(e){return/^(table|td|th)$/.test(Ha(e))}function xr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Qh=/transform|translate|scale|rotate|perspective|filter/,Jh=/paint|layout|strict|content/,Na=e=>!!e&&e!=="none",ts;function hn(e){let t=yt(e)?Rt(e):e;return Na(t.transform)||Na(t.translate)||Na(t.scale)||Na(t.rotate)||Na(t.perspective)||!xn()&&(Na(t.backdropFilter)||Na(t.filter))||Qh.test(t.willChange||"")||Jh.test(t.contain||"")}function oc(e){let t=ia(e);for(;Kt(t)&&!So(t);){if(hn(t))return t;if(xr(t))return null;t=ia(t)}return null}function xn(){return ts==null&&(ts=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),ts}function So(e){return/^(html|body|#document)$/.test(Ha(e))}function Rt(e){return Je(e).getComputedStyle(e)}function Lr(e){return yt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ia(e){if(Ha(e)==="html")return e;let t=e.assignedSlot||e.parentNode||ec(e)&&e.host||Nt(e);return ec(t)?t.host:t}function rc(e){let t=ia(e);return So(t)?(e.ownerDocument||e).body:Kt(t)&&hr(t)?t:rc(t)}function _a(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=rc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Je(r);if(n){let s=Ln(l);return t.concat(l,l.visualViewport||[],hr(r)?r:[],s&&a?_a(s):[])}else return t.concat(r,_a(r,[],a))}function Ln(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sc(e){let t=Rt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Kt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=mr(a)!==n||mr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function os(e){return yt(e)?e:e.contextElement}function wo(e){let t=os(e);if(!Kt(t))return Ft(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=sc(t),l=(n?mr(a.width):a.width)/o,s=(n?mr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var ex=Ft(0);function ic(e){let t=Je(e);return!xn()||!t.visualViewport?ex:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function tx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===Je(e)}function qa(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=os(e),l=Ft(1);t&&(o?yt(o)&&(l=wo(o)):l=wo(e));let s=tx(n,a,o)?ic(n):Ft(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=Je(n),h=yt(o)?Je(o):o,p=f,g=Ln(p);for(;g&&h!==p;){let m=wo(g),x=g.getBoundingClientRect(),C=Rt(g),L=x.left+(g.clientLeft+parseFloat(C.paddingLeft))*m.x,I=x.top+(g.clientTop+parseFloat(C.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=L,u+=I,p=Je(g),g=Ln(p)}}return Ba({width:c,height:d,x:i,y:u})}function Cn(e,t){let a=Lr(e).scrollLeft;return t?t.left+a:qa(Nt(e)).left+a}function uc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Cn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function ax(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Nt(o),s=t?xr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ft(1),c=Ft(0),d=Kt(o);if((d||!n)&&((Ha(o)!=="body"||hr(l))&&(i=Lr(o)),d)){let h=qa(o);u=wo(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=l&&!d&&!n?uc(l,i):Ft(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function ox(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function rx(e){let t=Lr(e),a=e.ownerDocument.body,o=St(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=St(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Cn(e),l=-t.scrollTop;return Rt(a).direction==="rtl"&&(n+=St(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var nx=25;function lx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=Je(e),n=Nt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!xn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(Cn(n)<=0){let f=n.ownerDocument,h=f.body,p=getComputedStyle(h),g=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,m=Math.abs(n.clientWidth-h.clientWidth-g),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=nx&&(s-=x)}return{width:s,height:i,x:u,y:c}}function sx(e,t){let a=qa(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=wo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function nc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=lx(e,a,t);else if(t==="document")o=rx(Nt(e));else if(yt(t))o=sx(t,a);else{let r=ic(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ba(o)}function ix(e,t){let a=t.get(e);if(a)return a;let o=_a(e,[],!1).filter(s=>yt(s)&&Ha(s)!=="body"),r=null,n=Rt(e).position==="fixed",l=n?ia(e):e;for(;yt(l)&&!So(l);){let s=Rt(l),i=hn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=ia(l)}return t.set(e,o),o}function ux(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?xr(t)?[]:ix(t,this._c):[].concat(a),o],s=nc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let h=nc(t,l[f],r);i=St(h.top,i),u=Ot(h.right,u),c=Ot(h.bottom,c),d=St(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function dx(e){let{width:t,height:a}=sc(e);return{width:t,height:a}}function cx(e,t,a){let o=Kt(t),r=Nt(t),n=a==="fixed",l=qa(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Ft(0);if((o||!n)&&((Ha(t)!=="body"||hr(r))&&(s=Lr(t)),o)){let f=qa(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=Cn(r));let u=r&&!o&&!n?uc(r,s):Ft(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function as(e){return Rt(e).position==="static"}function lc(e,t){if(!Kt(e)||Rt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Nt(e)===a&&(a=a.ownerDocument.body),a}function dc(e,t){let a=Je(e);if(xr(e))return a;if(!Kt(e)){let r=ia(e);for(;r&&!So(r);){if(yt(r)&&!as(r))return r;r=ia(r)}return a}let o=lc(e,t);for(;o&&ac(o)&&as(o);)o=lc(o,t);return o&&So(o)&&as(o)&&!hn(o)?a:o||oc(e)||a}var fx=async function(e){let t=this.getOffsetParent||dc,a=this.getDimensions,o=await a(e.floating);return{reference:cx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function px(e){return Rt(e).direction==="rtl"}var cc={convertOffsetParentRelativeRectToViewportRelativeRect:ax,getDocumentElement:Nt,getClippingRect:ux,getOffsetParent:dc,getElementRects:fx,getClientRects:ox,getDimensions:dx,getScale:wo,isElement:yt,isRTL:px};function fc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function mx(e,t,a){let o=null,r,n=Nt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:h,top:p,width:g,height:m}=f;if(c||t(),!g||!m)return;let x=gr(p),C=gr(n.clientWidth-(h+g)),L=gr(n.clientHeight-(p+m)),I=gr(h),v={rootMargin:-x+"px "+-C+"px "+-L+"px "+-I+"px",threshold:St(0,Ot(1,d))||1},y=!0;function R(P){let T=P[0].intersectionRatio;if(!fc(f,e.getBoundingClientRect()))return s();if(T!==d){if(!y)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,v)}o.observe(e)}let i=Je(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function rs(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=os(e),c=r||n?[...u?_a(u):[],...t?_a(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?mx(u,a,n):null,f=-1,h=null;l&&(h=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=h)==null||L.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let p,g=i?qa(e):null;i&&m();function m(){let x=qa(e);g&&!fc(g,x)&&a(),g=x,p=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=h)==null||x.disconnect(),h=null,i&&cancelAnimationFrame(p)}}var pc=Yd;var mc=Zd,gc=Kd,hc=Jd,xc=jd,ns=Xd;var Lc=Qd,ls=(e,t,a)=>{let o=new Map,r=a??{},n={...cc,...r.platform,_c:o};return zd(e,t,{...r,platform:n})};var De=H(require("react"),1),Ic=require("react"),vc=H(require("react-dom"),1),gx=typeof document<"u",hx=function(){},In=gx?Ic.useLayoutEffect:hx;function vn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!vn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!vn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function bc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cc(e,t){let a=bc(e);return Math.round(t*a)/a}function ss(e){let t=De.useRef(e);return In(()=>{t.current=e}),t}function Sc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=De.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=De.useState(o);vn(f,o)||h(o);let[p,g]=De.useState(null),[m,x]=De.useState(null),C=De.useCallback(V=>{V!==v.current&&(v.current=V,g(V))},[]),L=De.useCallback(V=>{V!==y.current&&(y.current=V,x(V))},[]),I=n||p,b=l||m,v=De.useRef(null),y=De.useRef(null),R=De.useRef(c),P=i!=null,T=ss(i),M=ss(r),E=ss(u),B=De.useCallback(()=>{if(!v.current||!y.current)return;let V={placement:t,strategy:a,middleware:f};M.current&&(V.platform=M.current),ls(v.current,y.current,V).then(G=>{let A={...G,isPositioned:E.current!==!1};_.current&&!vn(R.current,A)&&(R.current=A,vc.flushSync(()=>{d(A)}))})},[f,t,a,M,E]);In(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(V=>({...V,isPositioned:!1})))},[u]);let _=De.useRef(!1);In(()=>(_.current=!0,()=>{_.current=!1}),[]),In(()=>{if(I&&(v.current=I),b&&(y.current=b),I&&b){if(T.current)return T.current(I,b,B);B()}},[I,b,B,T,P]);let Y=De.useMemo(()=>({reference:v,floating:y,setReference:C,setFloating:L}),[C,L]),j=De.useMemo(()=>({reference:I,floating:b}),[I,b]),N=De.useMemo(()=>{let V={position:a,left:0,top:0};if(!j.floating)return V;let G=Cc(j.floating,c.x),A=Cc(j.floating,c.y);return s?{...V,transform:"translate("+G+"px, "+A+"px)",...bc(j.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:G,top:A}},[a,s,j.floating,c.x,c.y]);return De.useMemo(()=>({...c,update:B,refs:Y,elements:j,floatingStyles:N}),[c,B,Y,j,N])}var xx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?ns({element:o.current,padding:r}).fn(a):{}:o?ns({element:o,padding:r}).fn(a):{}}}},wc=(e,t)=>{let a=pc(e);return{name:a.name,fn:a.fn,options:[e,t]}},yc=(e,t)=>{let a=mc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Rc=(e,t)=>({fn:Lc(e).fn,options:[e,t]}),Pc=(e,t)=>{let a=gc(e);return{name:a.name,fn:a.fn,options:[e,t]}},kc=(e,t)=>{let a=hc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Dc=(e,t)=>{let a=xc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Mc=(e,t)=>{let a=xx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ac=H(require("react"),1);var Lx=Object.defineProperty,Cx=(e,t)=>Lx(e,"name",{value:t,configurable:!0});function is(e){let[t,a]=Ac.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}Cx(is,"useSize");var yo=require("react/jsx-runtime"),Ix=Object.defineProperty,ua=(e,t)=>Ix(e,"name",{value:t,configurable:!0});var Tc="Popper",[Ec,Ro]=Ue(Tc),[vx,Oc]=Ec(Tc),bx=ua(e=>{let{__scopePopper:t,children:a}=e,[o,r]=je.useState(null),[n,l]=je.useState(void 0);return(0,yo.jsx)(vx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Sx="PopperAnchor",wx=je.forwardRef(ua(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Oc(Sx,o),s=je.useRef(null),i=l.onAnchorChange,u=je.useCallback(g=>{s.current=g,g&&i(g)},[i]),c=J(a,u),d=je.useRef(null);je.useEffect(()=>{if(!r)return;let g=d.current;d.current=r.current,g!==d.current&&i(d.current)});let f=l.placementState&&bn(l.placementState),h=f?.[0],p=f?.[1];return r?null:(0,yo.jsx)(ae.div,{"data-radix-popper-side":h,"data-radix-popper-align":p,...n,ref:c})},"PopperAnchor")),Fc="PopperContent",[yx,OS]=Ec(Fc),Rx=je.forwardRef(ua(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:g,...m}=t,x=Oc(Fc,o),[C,L]=je.useState(null),I=J(a,L),[b,v]=je.useState(null),y=is(b),R=y?.width??0,P=y?.height??0,T=r+(l!=="center"?"-"+l:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},E=Array.isArray(c)?c:[c],B=E.length>0,_={padding:M,boundary:E.filter(Bc),altBoundary:B},{refs:Y,floatingStyles:j,placement:N,isPositioned:V,middlewareData:G}=Sc({strategy:"fixed",placement:T,whileElementsMounted:ua((...ee)=>rs(...ee,{animationFrame:p==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[wc({mainAxis:n+P,alignmentAxis:s}),u&&yc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Rc():void 0,..._}),u&&Pc({..._}),kc({..._,apply:ua(({elements:ee,rects:K,availableWidth:le,availableHeight:oe})=>{let{width:w,height:k}=K.reference,O=ee.floating.style;O.setProperty("--radix-popper-available-width",`${le}px`),O.setProperty("--radix-popper-available-height",`${oe}px`),O.setProperty("--radix-popper-anchor-width",`${w}px`),O.setProperty("--radix-popper-anchor-height",`${k}px`)},"apply")}),b&&Mc({element:b,padding:i}),Px({arrowWidth:R,arrowHeight:P}),h&&Dc({strategy:"referenceHidden",..._,boundary:B?_.boundary:void 0})]}),A=x.setPlacementState;se(()=>(A(N),()=>{A(void 0)}),[N,A]);let[Le,X]=bn(N),Q=Fe(g);se(()=>{V&&Q?.()},[V,Q]);let Ce=G.arrow?.x,Re=G.arrow?.y,ie=G.arrow?.centerOffset!==0,[Pe,F]=je.useState();return se(()=>{C&&F(window.getComputedStyle(C).zIndex)},[C]),(0,yo.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...j,transform:V?j.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Pe,"--radix-popper-transform-origin":[G.transformOrigin?.x,G.transformOrigin?.y].join(" "),...G.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,yo.jsx)(yx,{scope:o,placedSide:Le,placedAlign:X,onArrowChange:v,arrowX:Ce,arrowY:Re,shouldHideArrow:ie,children:(0,yo.jsx)(ae.div,{"data-side":Le,"data-align":X,...m,ref:I,style:{...m.style,animation:V?m.style?.animation:"none"}})})})},"PopperContent"));function Bc(e){return e!==null}ua(Bc,"isNotNull");var Px=ua(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=bn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,h=(r.arrow?.y??0)+i/2,p="",g="";return u==="bottom"?(p=l?d:`${f}px`,g=`${-i}px`):u==="top"?(p=l?d:`${f}px`,g=`${o.floating.height+i}px`):u==="right"?(p=`${-i}px`,g=l?d:`${h}px`):u==="left"&&(p=`${o.floating.width+i}px`,g=l?d:`${h}px`),{data:{x:p,y:g}}}}),"transformOrigin");function bn(e){let[t,a="center"]=e.split("-");return[t,a]}ua(bn,"getSideAndAlignFromPlacement");var Sn=bx,wn=wx,yn=Rx;var _e=H(require("react"),1);var Dx=H(require("react"),1),Rn=H(require("react"),1),kx=Object.defineProperty,ds=(e,t)=>kx(e,"name",{value:t,configurable:!0}),us=!1;function _c(){let[e,t]=Rn.useState(us);return Rn.useEffect(()=>{us||(us=!0,t(!0))},[]),e}ds(_c,"useIsHydrated");var Hc=Dx[" useSyncExternalStore ".trim().toString()];function qc(){return()=>{}}ds(qc,"subscribe");function Uc(){return Hc(qc,()=>!0,()=>!1)}ds(Uc,"useIsHydratedModern");var Wc=typeof Hc=="function"?Uc:_c;var da=require("react/jsx-runtime"),Mx=Object.defineProperty,Ua=(e,t)=>Mx(e,"name",{value:t,configurable:!0}),cs="rovingFocusGroup.onEntryFocus",Ax={bubbles:!1,cancelable:!0},Pn="RovingFocusGroup",[fs,Vc,Tx]=Ea(Pn),[Ex,ps]=Ue(Pn,[Tx]),[Ox,Fx]=Ex(Pn),Bx=_e.forwardRef(Ua(function(t,a){return(0,da.jsx)(fs.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,da.jsx)(fs.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,da.jsx)(Nx,{...t,ref:a})})})},"RovingFocusGroup")),Nx=_e.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=_e.useRef(null),p=J(a,h),g=Oa(l),[m,x]=Tt({prop:s,defaultProp:i??null,onChange:u,caller:Pn}),[C,L]=_e.useState(!1),I=Fe(c),b=Vc(o),v=_e.useRef(!1),[y,R]=_e.useState(0);return _e.useEffect(()=>{let P=h.current;if(P)return P.addEventListener(cs,I),()=>P.removeEventListener(cs,I)},[I]),(0,da.jsx)(Ox,{scope:o,orientation:r,dir:g,loop:n,currentTabStopId:m,onItemFocus:_e.useCallback(P=>x(P),[x]),onItemShiftTab:_e.useCallback(()=>L(!0),[]),onFocusableItemAdd:_e.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:_e.useCallback(()=>R(P=>P-1),[]),children:(0,da.jsx)(ae.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:p,style:{outline:"none",...t.style},onMouseDown:q(t.onMouseDown,()=>{v.current=!0}),onFocus:q(t.onFocus,P=>{let T=!v.current;if(P.target===P.currentTarget&&T&&!C){let M=new CustomEvent(cs,Ax);if(P.currentTarget.dispatchEvent(M),!M.defaultPrevented){let E=b().filter(N=>N.focusable),B=E.find(N=>N.active),_=E.find(N=>N.id===m),j=[B,_,...E].filter(Boolean).map(N=>N.ref.current);ms(j,d)}}v.current=!1}),onBlur:q(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),_x="RovingFocusGroupItem",Hx=_e.forwardRef(Ua(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=it(),c=l||u,d=Fx(_x,o),f=d.currentTabStopId===c,h=Vc(o),{onFocusableItemAdd:p,onFocusableItemRemove:g,currentTabStopId:m}=d,x=Wc();return se(()=>{if(!(!x||!r))return p(),()=>g()},[x,r,p,g]),_e.useEffect(()=>{if(!(x||!r))return p(),()=>g()},[x,r,p,g]),(0,da.jsx)(fs.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,da.jsx)(ae.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:q(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:q(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:q(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=zc(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let b=h().filter(v=>v.focusable).map(v=>v.ref.current);if(L==="last")b.reverse();else if(L==="prev"||L==="next"){L==="prev"&&b.reverse();let v=b.indexOf(C.currentTarget);b=d.loop?Xc(b,v+1):b.slice(v+1)}setTimeout(()=>ms(b))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:m!=null}):s})})},"RovingFocusGroupItem")),qx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Gc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ua(Gc,"getDirectionAwareKey");function zc(e,t,a){let o=Gc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return qx[o]}Ua(zc,"getFocusIntent");function ms(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ua(ms,"focusFirst");function Xc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ua(Xc,"wrapArray");var Kc=Bx,jc=Hx;var fe=require("react/jsx-runtime"),Vx=Object.defineProperty,pe=(e,t)=>Vx(e,"name",{value:t,configurable:!0}),gs=["Enter"," "],Gx=["ArrowDown","PageUp","Home"],Yc=["ArrowUp","PageDown","End"],zx=[...Gx,...Yc],dw={ltr:[...gs,"ArrowRight"],rtl:[...gs,"ArrowLeft"]};var Dn="Menu",[hs,Xx,Kx]=Ea(Dn),[Wa,Ls]=Ue(Dn,[Kx,Ro,ps]),Cs=Ro(),Zc=ps(),[jx,Cr]=Wa(Dn),[$x,Is]=Wa(Dn),Yx=pe(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Cs(t),[i,u]=Z.useState(null),c=Z.useRef(!1),d=Fe(n),f=Oa(r);return Z.useEffect(()=>{let h=pe(()=>{c.current=!0,document.addEventListener("pointerdown",p,{capture:!0,once:!0}),document.addEventListener("pointermove",p,{capture:!0,once:!0})},"handleKeyDown"),p=pe(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",p,{capture:!0}),document.removeEventListener("pointermove",p,{capture:!0})}},[]),Z.useEffect(()=>{if(!a)return;let h=pe(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,fe.jsx)(Sn,{...s,children:(0,fe.jsx)(jx,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,fe.jsx)($x,{scope:t,onClose:Z.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),Zx=Z.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t,n=Cs(o);return(0,fe.jsx)(wn,{...n,...r,ref:a})},"MenuAnchor")),Qc="MenuPortal",[Qx,Jx]=Wa(Qc,{forceMount:void 0}),eL=pe(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Cr(Qc,t);return(0,fe.jsx)(Qx,{scope:t,forceMount:a,children:(0,fe.jsx)(zt,{present:a||n.open,children:(0,fe.jsx)(po,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ca="MenuContent",[tL,Jc]=Wa(ca),aL=Z.forwardRef(pe(function(t,a){let o=Jx(ca,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Cr(ca,t.__scopeMenu),s=Is(ca,t.__scopeMenu);return(0,fe.jsx)(hs.Provider,{scope:t.__scopeMenu,children:(0,fe.jsx)(zt,{present:r||l.open,children:(0,fe.jsx)(hs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,fe.jsx)(oL,{...n,ref:a}):(0,fe.jsx)(rL,{...n,ref:a})})})})},"MenuContent")),oL=Z.forwardRef(pe(function(t,a){let o=Cr(ca,t.__scopeMenu),r=Z.useRef(null),n=J(a,r);return Z.useEffect(()=>{let l=r.current;if(l)return Io(l)},[]),(0,fe.jsx)(ef,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),rL=Z.forwardRef(pe(function(t,a){let o=Cr(ca,t.__scopeMenu);return(0,fe.jsx)(ef,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),nL=Xe("MenuContent.ScrollLock"),ef=Z.forwardRef(pe(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,disableOutsideScroll:g,...m}=t,x=Cr(ca,o),C=Is(ca,o),L=Cs(o),I=Zc(o),b=Xx(o),[v,y]=Z.useState(null),R=Z.useRef(null),P=J(a,R,x.onContentChange),T=Z.useRef(0),M=Z.useRef(""),E=Z.useRef(0),B=Z.useRef(null),_=Z.useRef("right"),Y=Z.useRef(0),j=g?Pa:Z.Fragment,N=g?{as:nL,allowPinchZoom:!0}:void 0,V=pe(A=>{let Le=M.current+A,X=b().filter(F=>!F.disabled),Q=document.activeElement,Ce=X.find(F=>F.ref.current===Q)?.textValue,Re=X.map(F=>F.textValue),ie=nf(Re,Le,Ce),Pe=X.find(F=>F.textValue===ie)?.ref.current;pe((function F(ee){M.current=ee,window.clearTimeout(T.current),ee!==""&&(T.current=window.setTimeout(()=>F(""),1e3))}),"updateSearch")(Le),Pe&&setTimeout(()=>Pe.focus())},"handleTypeaheadSearch");Z.useEffect(()=>()=>window.clearTimeout(T.current),[]),sa();let G=Z.useCallback(A=>_.current===B.current?.side&&sf(A,B.current?.area),[]);return(0,fe.jsx)(tL,{scope:o,searchRef:M,onItemEnter:Z.useCallback(A=>{G(A)&&A.preventDefault()},[G]),onItemLeave:Z.useCallback(A=>{G(A)||(R.current?.focus(),y(null))},[G]),onTriggerLeave:Z.useCallback(A=>{G(A)&&A.preventDefault()},[G]),pointerGraceTimerRef:E,onPointerGraceIntentChange:Z.useCallback(A=>{B.current=A},[]),children:(0,fe.jsx)(j,{...N,children:(0,fe.jsx)(fo,{asChild:!0,trapped:n,onMountAutoFocus:q(l,A=>{A.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,fe.jsx)(co,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,children:(0,fe.jsx)(Kc,{asChild:!0,...I,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:v,onCurrentTabStopIdChange:y,onEntryFocus:q(u,A=>{C.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,fe.jsx)(yn,{role:"menu","aria-orientation":"vertical","data-state":tf(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...m,ref:P,style:{outline:"none",...m.style},onKeyDown:q(m.onKeyDown,A=>{let X=A.target.closest("[data-radix-menu-content]")===A.currentTarget,Q=A.ctrlKey||A.altKey||A.metaKey,Ce=A.key.length===1;X&&(A.key==="Tab"&&A.preventDefault(),!Q&&Ce&&V(A.key));let Re=R.current;if(A.target!==Re||!zx.includes(A.key))return;A.preventDefault();let Pe=b().filter(F=>!F.disabled).map(F=>F.ref.current);Yc.includes(A.key)&&Pe.reverse(),of(Pe)}),onBlur:q(t.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(T.current),M.current="")}),onPointerMove:q(t.onPointerMove,kn(A=>{let Le=A.target,X=Y.current!==A.clientX;if(A.currentTarget.contains(Le)&&X){let Q=A.clientX>Y.current?"right":"left";_.current=Q,Y.current=A.clientX}}))})})})})})})},"MenuContentImpl"));var lL=Z.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,fe.jsx)(ae.div,{...r,ref:a})},"MenuLabel")),xs="MenuItem",$c="menu.itemSelect",sL=Z.forwardRef(pe(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Z.useRef(null),s=Is(xs,t.__scopeMenu),i=Jc(xs,t.__scopeMenu),u=J(a,l),c=Z.useRef(!1),d=pe(()=>{let f=l.current;if(!o&&f){let h=new CustomEvent($c,{bubbles:!0,cancelable:!0});f.addEventListener($c,p=>r?.(p),{once:!0}),nr(f,h),h.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,fe.jsx)(iL,{...n,ref:u,disabled:o,onClick:q(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||gs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),iL=Z.forwardRef(pe(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Jc(xs,o),i=Zc(o),u=Z.useRef(null),c=J(a,u),[d,f]=Z.useState(!1),[h,p]=Z.useState("");return Z.useEffect(()=>{let g=u.current;g&&p((g.textContent??"").trim())},[l.children]),(0,fe.jsx)(hs.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,fe.jsx)(jc,{asChild:!0,...i,focusable:!r,children:(0,fe.jsx)(ae.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:q(t.onPointerMove,kn(g=>{r?s.onItemLeave(g):(s.onItemEnter(g),g.defaultPrevented||g.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:q(t.onPointerLeave,kn(g=>s.onItemLeave(g))),onFocus:q(t.onFocus,()=>f(!0)),onBlur:q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var uL="MenuRadioGroup",[cw,fw]=Wa(uL,{value:void 0,onValueChange:pe(()=>{},"onValueChange")});var dL="MenuItemIndicator",[pw,mw]=Wa(dL,{checked:!1});var cL=Z.forwardRef(pe(function(t,a){let{__scopeMenu:o,...r}=t;return(0,fe.jsx)(ae.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var fL="MenuSub",[gw,hw]=Wa(fL);function tf(e){return e?"open":"closed"}pe(tf,"getOpenState");function af(e){return e==="indeterminate"}pe(af,"isIndeterminate");function pL(e){return af(e)?"indeterminate":e?"checked":"unchecked"}pe(pL,"getCheckedState");function of(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}pe(of,"focusFirst");function rf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}pe(rf,"wrapArray");function nf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=rf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}pe(nf,"getNextMatch");function lf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}pe(lf,"isPointInPolygon");function sf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return lf(a,t)}pe(sf,"isPointerInGraceArea");function kn(e){return t=>t.pointerType==="mouse"?e(t):void 0}pe(kn,"whenMouse");var uf=Yx,df=Zx,cf=eL,ff=aL;var pf=lL,mf=sL;var gf=cL;var _t=require("react/jsx-runtime"),gL=Object.defineProperty,Va=(e,t)=>gL(e,"name",{value:t,configurable:!0}),vs="DropdownMenu",[hL,Ew]=Ue(vs,[Ls]),Ga=Ls(),[xL,hf]=hL(vs),LL=Va(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Ga(t),u=Pt.useRef(null),[c,d]=Tt({prop:r,defaultProp:n??!1,onChange:l,caller:vs});return(0,_t.jsx)(xL,{scope:t,triggerId:it(),triggerRef:u,contentId:it(),open:c,onOpenChange:d,onOpenToggle:Pt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,_t.jsx)(uf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),CL="DropdownMenuTrigger",IL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=hf(CL,o),s=Ga(o),i=J(a,l.triggerRef);return(0,_t.jsx)(df,{asChild:!0,...s,children:(0,_t.jsx)(ae.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:q(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:q(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),vL=Va(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Ga(t);return(0,_t.jsx)(cf,{...o,...a})},"DropdownMenuPortal"),bL="DropdownMenuContent",SL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=hf(bL,o),l=Ga(o),s=Pt.useRef(!1);return(0,_t.jsx)(ff,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:q(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:q(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var wL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,_t.jsx)(pf,{...n,...r,ref:a})},"DropdownMenuLabel")),yL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,_t.jsx)(mf,{...n,...r,ref:a})},"DropdownMenuItem"));var RL=Pt.forwardRef(Va(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ga(o);return(0,_t.jsx)(gf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var xf=LL,Lf=IL,Cf=vL,bs=SL;var Ss=wL,ws=yL;var ys=RL;var Po=require("react/jsx-runtime"),vr=xf,br=Lf;var ko=Ir.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Po.jsx)(Cf,{children:(0,Po.jsx)(bs,{ref:o,sideOffset:t,className:te("kanban-portal kanban-dropdown-content",e),...a})}));ko.displayName=bs.displayName;var jt=Ir.forwardRef(({className:e,inset:t,...a},o)=>(0,Po.jsx)(ws,{ref:o,className:te("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));jt.displayName=ws.displayName;var kL=Ir.forwardRef(({className:e,inset:t,...a},o)=>(0,Po.jsx)(Ss,{ref:o,className:te("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));kL.displayName=Ss.displayName;var DL=Ir.forwardRef(({className:e,...t},a)=>(0,Po.jsx)(ys,{ref:a,className:te("kanban-dropdown-separator",e),...t}));DL.displayName=ys.displayName;var If=H(require("react"),1);var vf=require("react/jsx-runtime"),$t=If.forwardRef(({className:e,type:t,...a},o)=>(0,vf.jsx)("input",{type:t,className:te("kanban-input",e),ref:o,...a}));$t.displayName="Input";var wf=H(require("react"),1);var bf=H(require("react"),1);var Sf=require("react/jsx-runtime"),ML=Object.defineProperty,AL=(e,t)=>ML(e,"name",{value:t,configurable:!0}),TL=bf.forwardRef(AL(function(t,a){return(0,Sf.jsx)(ae.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Rs=TL;var yf=require("react/jsx-runtime"),za=wf.forwardRef(({className:e,...t},a)=>(0,yf.jsx)(Rs,{ref:a,className:te("kanban-label",e),...t}));za.displayName=Rs.displayName;var pa=H(require("react"),1);var D=H(require("react"),1),Ds=H(require("react-dom"),1);var OL=Object.defineProperty,FL=(e,t)=>OL(e,"name",{value:t,configurable:!0});function Mn(e,[t,a]){return Math.min(a,Math.max(t,e))}FL(Mn,"clamp");var An=H(require("react"),1),BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0});function Ps(e){let t=An.useRef({value:e,previous:e});return An.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}NL(Ps,"usePrevious");var _L=H(require("react"),1);var HL=require("react/jsx-runtime");var Rf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var U=require("react/jsx-runtime"),qL=Object.defineProperty,ne=(e,t)=>qL(e,"name",{value:t,configurable:!0}),UL=[" ","Enter","ArrowUp","ArrowDown"],WL=[" ","Enter"],Do="Select",[En,On,VL]=Ea(Do),[Ka,py]=Ue(Do,[VL,Ro]),Ms=Ro(),[GL,fa]=Ka(Do),[zL,XL]=Ka(Do);function Af(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:p,internal_do_not_use_render:g}=e,m=Ms(t),[x,C]=D.useState(null),[L,I]=D.useState(null),[b,v]=D.useState(!1),y=Oa(u),[R,P]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:Do}),[T,M]=Tt({prop:l,defaultProp:s,onChange:i,caller:Do}),E=D.useRef(null),B=D.useRef(T);D.useEffect(()=>{let X=p?x?.ownerDocument.getElementById(p):x?.form;if(X instanceof HTMLFormElement){let Q=ne(()=>M(B.current),"reset");return X.addEventListener("reset",Q),()=>X.removeEventListener("reset",Q)}},[p,x,M]);let _=x?!!p||!!x.closest("form"):!0,[Y,j]=D.useState(new Set),N=it(),V=Array.from(Y).map(X=>X.props.value).join(";"),G=D.useCallback(X=>{j(Q=>new Set(Q).add(X))},[]),A=D.useCallback(X=>{j(Q=>{let Ce=new Set(Q);return Ce.delete(X),Ce})},[]),Le={required:h,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:I,valueNodeHasChildren:b,onValueNodeHasChildrenChange:v,contentId:N,value:T,onValueChange:M,open:R,onOpenChange:P,dir:y,triggerPointerDownPosRef:E,disabled:f,name:c,autoComplete:d,form:p,nativeOptions:Y,nativeSelectKey:V,isFormControl:_};return(0,U.jsx)(Sn,{...m,children:(0,U.jsx)(GL,{scope:t,...Le,children:(0,U.jsx)(En.Provider,{scope:t,children:(0,U.jsx)(zL,{scope:t,onNativeOptionAdd:G,onNativeOptionRemove:A,children:Wf(g)?g(Le):a})})})})}ne(Af,"SelectProvider");var Tf=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,U.jsx)(Af,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,U.jsxs)(U.Fragment,{children:[a,r?(0,U.jsx)(uC,{__scopeSelect:t}):null]})})},"Select"),KL="SelectTrigger",As=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Ms(o),s=fa(KL,o),i=s.disabled||r,u=J(a,s.onTriggerChange),c=On(o),d=D.useRef("touch"),[f,h,p]=Hs(m=>{let x=c().filter(I=>!I.disabled),C=x.find(I=>I.value===s.value),L=qs(x,m,C);L!==void 0&&s.onValueChange(L.value)}),g=ne(m=>{i||(s.onOpenChange(!0),p()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,U.jsx)(wn,{asChild:!0,...l,children:(0,U.jsx)(ae.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Sr(s.value)?"":void 0,...n,ref:u,onClick:q(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&g(m)}),onPointerDown:q(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(g(m),m.preventDefault())}),onKeyDown:q(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&h(m.key),!(x&&m.key===" ")&&UL.includes(m.key)&&(g(),m.preventDefault())})})})},"SelectTrigger")),jL="SelectValue",Ef=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=fa(jL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=J(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let h=Sr(u.value);return(0,U.jsx)(ae.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,U.jsx)(D.Fragment,{children:h?s:l},h?"placeholder":"value")})},"SelectValue")),Of=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,U.jsx)(ae.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),$L="SelectPortal",[YL,ZL]=Ka($L,{forceMount:void 0}),Ff=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,U.jsx)(YL,{scope:e.__scopeSelect,forceMount:a,children:(0,U.jsx)(po,{asChild:!0,...o})})},"SelectPortal"),Xa="SelectContent",Ts=D.forwardRef(ne(function(t,a){let o=ZL(Xa,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=fa(Xa,t.__scopeSelect),[s,i]=D.useState();return se(()=>{i(new DocumentFragment)},[]),(0,U.jsx)(zt,{present:r||l.open,children:({present:u})=>u?(0,U.jsx)(eC,{...n,ref:a}):(0,U.jsx)(QL,{...n,fragment:s})})},"SelectContent")),QL=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ds.createPortal((0,U.jsx)(Bf,{scope:o,children:(0,U.jsx)(En.Slot,{scope:o,children:(0,U.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),kt=10,[Bf,ja]=Ka(Xa),JL=Xe("SelectContent.RemoveScroll"),eC=D.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:g,hideWhenDetached:m,avoidCollisions:x,...C}=t,L=fa(Xa,o),[I,b]=D.useState(null),[v,y]=D.useState(null),R=J(a,b),[P,T]=D.useState(null),[M,E]=D.useState(null),B=On(o),[_,Y]=D.useState(!1),j=D.useRef(!1);D.useEffect(()=>{if(I)return Io(I)},[I]),sa();let N=D.useCallback(F=>{let[ee,...K]=B().map(w=>w.ref.current),[le]=K.slice(-1),oe=document.activeElement;for(let w of F)if(w===oe||(w?.scrollIntoView({block:"nearest"}),w===ee&&v&&(v.scrollTop=0),w===le&&v&&(v.scrollTop=v.scrollHeight),w?.focus(),document.activeElement!==oe))return},[B,v]),V=D.useCallback(()=>N([P,I]),[N,P,I]);D.useEffect(()=>{_&&V()},[_,V]);let{onOpenChange:G,triggerPointerDownPosRef:A}=L;D.useEffect(()=>{if(I){let F={x:0,y:0},ee=ne(le=>{F={x:Math.abs(Math.round(le.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(le.pageY)-(A.current?.y??0))}},"handlePointerMove"),K=ne(le=>{F.x<=10&&F.y<=10?le.preventDefault():le.composedPath().includes(I)||G(!1),document.removeEventListener("pointermove",ee),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",K,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",K,{capture:!0})}}},[I,G,A]),D.useEffect(()=>{let F=ne(()=>G(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[G]);let[Le,X]=Hs(F=>{let ee=B().filter(oe=>!oe.disabled),K=ee.find(oe=>oe.ref.current===document.activeElement),le=qs(ee,F,K);le&&setTimeout(()=>le.ref.current?.focus())}),Q=D.useCallback((F,ee,K)=>{let le=!j.current&&!K;(L.value!==void 0&&L.value===ee||le)&&(T(F),le&&(j.current=!0))},[L.value]),Ce=D.useCallback(()=>I?.focus(),[I]),Re=D.useCallback((F,ee,K)=>{let le=!j.current&&!K;(L.value!==void 0&&L.value===ee||le)&&E(F)},[L.value]),ie=r==="popper"?Pf:tC,Pe=ie===Pf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:g,hideWhenDetached:m,avoidCollisions:x}:{};return(0,U.jsx)(Bf,{scope:o,content:I,viewport:v,onViewportChange:y,itemRefCallback:Q,selectedItem:P,onItemLeave:Ce,itemTextRefCallback:Re,focusSelectedItem:V,selectedItemText:M,position:r,isPositioned:_,searchRef:Le,children:(0,U.jsx)(Pa,{as:JL,allowPinchZoom:!0,children:(0,U.jsx)(fo,{asChild:!0,trapped:L.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:q(n,F=>{L.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,U.jsx)(co,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,U.jsx)(ie,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:F=>F.preventDefault(),...C,...Pe,onPlaced:()=>Y(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:q(C.onKeyDown,F=>{let ee=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!ee&&F.key.length===1&&X(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let le=B().filter(oe=>!oe.disabled).map(oe=>oe.ref.current);if(["ArrowUp","End"].includes(F.key)&&(le=le.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let oe=F.target,w=le.indexOf(oe);le=le.slice(w+1)}setTimeout(()=>N(le)),F.preventDefault()}})})})})})})},"SelectContentImpl")),tC=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=fa(Xa,o),s=ja(Xa,o),[i,u]=D.useState(null),[c,d]=D.useState(null),f=J(a,d),h=On(o),p=D.useRef(!1),g=D.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=s,I=D.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&m&&x&&C){let R=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),T=l.valueNode.getBoundingClientRect(),M=C.getBoundingClientRect();if(l.dir!=="rtl"){let oe=M.left-P.left,w=T.left-oe,k=R.left-w,O=R.width+k,W=Math.max(O,P.width),Me=window.innerWidth-kt,ue=Mn(w,[kt,Math.max(kt,Me-W)]);i.style.minWidth=O+"px",i.style.left=ue+"px"}else{let oe=P.right-M.right,w=window.innerWidth-T.right-oe,k=window.innerWidth-R.right-w,O=R.width+k,W=Math.max(O,P.width),Me=window.innerWidth-kt,ue=Mn(w,[kt,Math.max(kt,Me-W)]);i.style.minWidth=O+"px",i.style.right=ue+"px"}let E=h(),B=window.innerHeight-kt*2,_=m.scrollHeight,Y=window.getComputedStyle(c),j=parseInt(Y.borderTopWidth,10),N=parseInt(Y.paddingTop,10),V=parseInt(Y.borderBottomWidth,10),G=parseInt(Y.paddingBottom,10),A=j+N+_+G+V,Le=Math.min(x.offsetHeight*5,A),X=window.getComputedStyle(m),Q=parseInt(X.paddingTop,10),Ce=parseInt(X.paddingBottom,10),Re=R.top+R.height/2-kt,ie=B-Re,Pe=x.offsetHeight/2,F=x.offsetTop+Pe,ee=j+N+F,K=A-ee;if(ee<=Re){let oe=E.length>0&&x===E[E.length-1].ref.current;i.style.bottom="0px";let w=c.clientHeight-m.offsetTop-m.offsetHeight,k=Math.max(ie,Pe+(oe?Ce:0)+w+V),O=ee+k;i.style.height=O+"px"}else{let oe=E.length>0&&x===E[0].ref.current;i.style.top="0px";let k=Math.max(Re,j+m.offsetTop+(oe?Q:0)+Pe)+K;i.style.height=k+"px",m.scrollTop=ee-Re+m.offsetTop}i.style.margin=`${kt}px 0`,i.style.minHeight=Le+"px",i.style.maxHeight=B+"px",r?.(),requestAnimationFrame(()=>p.current=!0)}},[h,l.trigger,l.valueNode,i,c,m,x,C,l.dir,r]);se(()=>I(),[I]);let[b,v]=D.useState();se(()=>{c&&v(window.getComputedStyle(c).zIndex)},[c]);let y=D.useCallback(R=>{R&&g.current===!0&&(I(),L?.(),g.current=!1)},[I,L]);return(0,U.jsx)(aC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:p,onScrollButtonChange:y,children:(0,U.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:b},children:(0,U.jsx)(ae.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Pf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=kt,...l}=t,s=Ms(o);return(0,U.jsx)(yn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[aC,Es]=Ka(Xa,{}),kf="SelectViewport",Nf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=ja(kf,o),s=Es(kf,o),i=J(a,l.onViewportChange),u=D.useRef(0);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,U.jsx)(En.Slot,{scope:o,children:(0,U.jsx)(ae.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:q(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){let p=Math.abs(u.current-d.scrollTop);if(p>0){let g=window.innerHeight-kt*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(m,x);if(C<g){let L=C+p,I=Math.min(g,L),b=L-I;f.style.height=I+"px",f.style.bottom==="0px"&&(d.scrollTop=b>0?b:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),oC="SelectGroup",[my,rC]=Ka(oC);var nC="SelectLabel",Os=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=rC(nC,o);return(0,U.jsx)(ae.div,{id:n.id,...r,ref:a})},"SelectLabel")),ks="SelectItem",[lC,_f]=Ka(ks),Fs=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=fa(ks,o),u=ja(ks,o),c=i.value===r,[d,f]=D.useState(l??""),[h,p]=D.useState(!1),g=Fe(I=>u.itemRefCallback?.(I,r,n)),m=J(a,g),x=it(),C=D.useRef("touch"),L=ne(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,U.jsx)(lC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:D.useCallback(I=>{f(b=>b||(I?.textContent??"").trim())},[]),children:(0,U.jsx)(En.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,U.jsx)(ae.div,{role:"option","aria-labelledby":x,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:m,onFocus:q(s.onFocus,()=>p(!0)),onBlur:q(s.onBlur,()=>p(!1)),onClick:q(s.onClick,()=>{C.current!=="mouse"&&L()}),onPointerUp:q(s.onPointerUp,()=>{C.current==="mouse"&&L()}),onPointerDown:q(s.onPointerDown,I=>{C.current=I.pointerType}),onPointerMove:q(s.onPointerMove,I=>{C.current=I.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&I.currentTarget.focus({preventScroll:!0})}),onPointerLeave:q(s.onPointerLeave,I=>{I.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:q(s.onKeyDown,I=>{n||I.target!==I.currentTarget||u.searchRef?.current!==""&&I.key===" "||(WL.includes(I.key)&&L(),I.key===" "&&I.preventDefault())})})})})},"SelectItem")),Tn="SelectItemText",Hf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=fa(Tn,o),i=ja(Tn,o),u=_f(Tn,o),c=XL(Tn,o),[d,f]=D.useState(null),h=Fe(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),p=J(a,f,u.onItemTextChange,h),g=d?.textContent,m=D.useMemo(()=>(0,U.jsx)("option",{value:u.value,disabled:u.disabled,children:g},u.value),[u.disabled,u.value,g]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return se(()=>(x(m),()=>C(m)),[x,C,m]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ae.span,{id:u.textId,...l,ref:p}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Sr(s.value)?Ds.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),sC="SelectItemIndicator",qf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return _f(sC,o).isSelected?(0,U.jsx)(ae.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Df="SelectScrollUpButton",Bs=D.forwardRef(ne(function(t,a){let o=ja(Df,t.__scopeSelect),r=Es(Df,t.__scopeSelect),[n,l]=D.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,U.jsx)(Uf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),Mf="SelectScrollDownButton",Ns=D.forwardRef(ne(function(t,a){let o=ja(Mf,t.__scopeSelect),r=Es(Mf,t.__scopeSelect),[n,l]=D.useState(!1),s=J(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,U.jsx)(Uf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Uf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=ja("SelectScrollButton",o),s=D.useRef(null),i=On(o),u=D.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return D.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,U.jsx)(ae.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:q(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),_s=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,U.jsx)(ae.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var iC="SelectBubbleInput",uC=D.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=fa(iC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,p=D.useRef(null),g=J(o,p),m=n??"",x=Ps(m),C=Array.from(f).some(L=>(L.props.value??"")==="");return D.useEffect(()=>{let L=p.current;if(!L)return;let I=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(I,"value").set;if(x!==m&&v){let y=new Event("change",{bubbles:!0});v.call(L,m),L.dispatchEvent(y)}},[x,m]),(0,U.jsxs)(ae.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>l(L.target.value),...a,style:{...Rf,...a.style},ref:g,defaultValue:m,children:[Sr(n)&&!C?(0,U.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function Wf(e){return typeof e=="function"}ne(Wf,"isFunction");function Sr(e){return e===""||e===void 0}ne(Sr,"shouldShowPlaceholder");function Hs(e){let t=Fe(e),a=D.useRef(""),o=D.useRef(0),r=D.useCallback(l=>{let s=a.current+l;t(s),ne((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=D.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Hs,"useTypeaheadSearch");function qs(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Vf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(qs,"findNextItem");function Vf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Vf,"wrapArray");var we=require("react/jsx-runtime"),Us=Tf;var Ws=Ef,Fn=pa.forwardRef(({className:e,children:t,...a},o)=>(0,we.jsxs)(As,{ref:o,className:te("kanban-select-trigger",e),...a,children:[t,(0,we.jsx)(Of,{asChild:!0,children:(0,we.jsx)(lo,{className:"kanban-select-icon"})})]}));Fn.displayName=As.displayName;var Gf=pa.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Bs,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,we.jsx)(Yo,{className:"kanban-select-scroll-icon"})}));Gf.displayName=Bs.displayName;var zf=pa.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Ns,{ref:a,className:te("kanban-select-scroll-button",e),...t,children:(0,we.jsx)(lo,{className:"kanban-select-scroll-icon"})}));zf.displayName=Ns.displayName;var Bn=pa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,we.jsx)(Ff,{children:(0,we.jsxs)(Ts,{ref:r,className:te("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,we.jsx)(Gf,{}),(0,we.jsx)(Nf,{className:te("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,we.jsx)(zf,{})]})}));Bn.displayName=Ts.displayName;var cC=pa.forwardRef(({className:e,...t},a)=>(0,we.jsx)(Os,{ref:a,className:te("kanban-select-label",e),...t}));cC.displayName=Os.displayName;var Mo=pa.forwardRef(({className:e,children:t,...a},o)=>(0,we.jsxs)(Fs,{ref:o,className:te("kanban-select-item",e),...a,children:[(0,we.jsx)("span",{className:"kanban-select-item-indicator",children:(0,we.jsx)(qf,{children:(0,we.jsx)(na,{className:"kanban-select-check"})})}),(0,we.jsx)(Hf,{children:t})]}));Mo.displayName=Fs.displayName;var fC=pa.forwardRef(({className:e,...t},a)=>(0,we.jsx)(_s,{ref:a,className:te("kanban-select-separator",e),...t}));fC.displayName=_s.displayName;var Xf=H(require("react"),1);var Kf=require("react/jsx-runtime"),Vs=Xf.forwardRef(({className:e,...t},a)=>(0,Kf.jsx)("textarea",{className:te("kanban-textarea",e),ref:a,...t}));Vs.displayName="Textarea";var Yt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},Nn=["high","medium","low"],jf="#94a3b8";function $f(e,t){return t?e.find(a=>a.name===t)?.color??jf:jf}var $e=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Gs=e=>e==="high"||e==="medium"||e==="low"?Yt[e].label:"";function Yf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Gs(a.priority)||o;return $e(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return $e(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?$e(t("actLabelSet"),{to:n}):r!=null&&n==null?$e(t("actLabelCleared"),{from:r}):$e(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Gs(r)||r:o,s=n?Gs(n)||n:o;return r==null&&n!=null?$e(t("actPrioritySet"),{to:s}):r!=null&&n==null?$e(t("actPriorityCleared"),{from:l}):$e(t("actPriority"),{from:l,to:s})}case"card_title_changed":return $e(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_deleted":return t("actDeleted");case"column_added":return $e(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return $e(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return $e(t("actColumnDeleted"),{column:a.column??""});case"label_added":return $e(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return $e(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return $e(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return $e(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var _n=e=>String(e).padStart(2,"0");function zs(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${_n(t.getMonth()+1)}-${_n(t.getDate())} ${_n(t.getHours())}:${_n(t.getMinutes())}`}var Zt=require("react/jsx-runtime");function Zf({activities:e}){let t=Qe();if(e.length===0)return(0,Zt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Zt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Zt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Zt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Zt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Zt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Yf(o,t)]}),(0,Zt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:zs(o.ts),children:zs(o.ts)})]},o.id)})})}var z=require("react/jsx-runtime");function Qf({open:e,card:t,labels:a,activities:o,onOpenChange:r,onSave:n,onDelete:l,onChatWithAgent:s}){let i=Qe(),[u,c]=(0,wr.useState)({id:"",title:"",note:"",label:"",priority:""}),[d,f]=(0,wr.useState)(!1);(0,wr.useEffect)(()=>{e&&c({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let h=p=>c(g=>({...g,...p}));return(0,z.jsx)(bo,{open:e,onOpenChange:r,children:(0,z.jsxs)(Da,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:p=>p.preventDefault(),children:[(0,z.jsx)(Ma,{children:(0,z.jsx)(Aa,{className:"kanban-sr-only",children:i(t?"editCard":"addCard")})}),(0,z.jsxs)("div",{className:"kanban-form-stack",children:[(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsxs)(za,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,z.jsx)("span",{children:i("fieldTitle")}),t&&(0,z.jsxs)("span",{className:"kanban-field-id",children:[i("fieldId"),": ",t.id]})]}),(0,z.jsx)($t,{id:"card-title",value:u.title,placeholder:i("titlePlaceholder"),onChange:p=>h({title:p.target.value})})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(za,{children:i("fieldLabel")}),(0,z.jsxs)(Us,{value:u.label||"__none__",onValueChange:p=>h({label:p==="__none__"?"":p}),children:[(0,z.jsx)(Fn,{children:(0,z.jsx)(Ws,{placeholder:i("noLabel")})}),(0,z.jsxs)(Bn,{children:[(0,z.jsx)(Mo,{value:"__none__",children:i("noLabel")}),a.map(p=>(0,z.jsx)(Mo,{value:p.name,children:p.name},p.name))]})]})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(za,{children:i("fieldPriority")}),(0,z.jsxs)(Us,{value:u.priority||"__none__",onValueChange:p=>h({priority:p==="__none__"?"":p}),children:[(0,z.jsx)(Fn,{children:(0,z.jsx)(Ws,{placeholder:i("noPriority")})}),(0,z.jsxs)(Bn,{children:[(0,z.jsx)(Mo,{value:"__none__",children:i("noPriority")}),Nn.map(p=>{let g=Yt[p];return(0,z.jsx)(Mo,{value:p,children:(0,z.jsxs)("span",{className:"kanban-inline-priority",children:[(0,z.jsx)("span",{className:"kanban-priority-dot",style:{background:g.color}}),g.label]})},p)})]})]})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(za,{htmlFor:"card-note",children:i("fieldNote")}),(0,z.jsx)(Vs,{id:"card-note",value:u.note,placeholder:i("notePlaceholder"),rows:5,onChange:p=>h({note:p.target.value})})]}),t&&(0,z.jsxs)("div",{className:"kanban-activity-box",children:[(0,z.jsx)(za,{className:"kanban-muted-small",children:i("activityTitle")}),(0,z.jsx)("div",{className:"kanban-activity-scroll",children:(0,z.jsx)(Zf,{activities:o})})]})]}),(0,z.jsxs)(cr,{children:[t&&l&&(0,z.jsxs)(Oe,{variant:"outline",className:"kanban-dialog-delete",disabled:d,onClick:async()=>{f(!0);let p=await l(t);f(!1),p!==!1&&r(!1)},children:[(0,z.jsx)(Wt,{className:"kanban-icon"}),i("delete")]}),(0,z.jsxs)(vr,{children:[(0,z.jsx)(br,{asChild:!0,children:(0,z.jsxs)(Oe,{variant:"outline",disabled:!u.title.trim()&&!u.note.trim(),children:[(0,z.jsx)(Jo,{className:"kanban-icon"}),i("chatWithAgent")]})}),(0,z.jsxs)(ko,{align:"end",children:[(0,z.jsx)(jt,{onClick:()=>{s(u,"current"),r(!1)},children:i("chatCurrentSession")}),(0,z.jsx)(jt,{onClick:()=>{s(u,"new"),r(!1)},children:i("chatNewSession")})]})]}),(0,z.jsx)(Oe,{variant:"outline",disabled:d||!u.title.trim(),onClick:async()=>{f(!0);let p=await n(u);f(!1),p!==!1&&r(!1)},children:i("save")})]})]})})}var Jf=require("react/jsx-runtime");function pC({variant:e,className:t}={}){return te("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Xs({className:e,variant:t,...a}){return(0,Jf.jsx)("div",{className:pC({variant:t,className:e}),...a})}var $a=H(require("react"),1);var Ya=require("react/jsx-runtime"),Ks=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-card",e),...t}));Ks.displayName="Card";var mC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-card-header",e),...t}));mC.displayName="CardHeader";var gC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-ui-card-title",e),...t}));gC.displayName="CardTitle";var hC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-card-description",e),...t}));hC.displayName="CardDescription";var js=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-card-content",e),...t}));js.displayName="CardContent";var xC=$a.forwardRef(({className:e,...t},a)=>(0,Ya.jsx)("div",{ref:a,className:te("kanban-card-footer",e),...t}));xC.displayName="CardFooter";var Dt=require("react/jsx-runtime");function $s({card:e,labels:t}){let a=e.priority?Yt[e.priority]:null,o=$f(t,e.label);return(0,Dt.jsx)(Ks,{className:"kanban-card",children:(0,Dt.jsxs)(js,{className:"kanban-sortable-card-content",children:[(e.label||a)&&(0,Dt.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Dt.jsx)(Xs,{variant:"secondary",className:"kanban-card-badge",style:{background:o,color:"#0b1220"},children:e.label}),a&&(0,Dt.jsx)(Xs,{variant:"secondary",className:"kanban-card-badge",style:{background:a.color,color:"#0b1220"},children:a.label})]}),(0,Dt.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Dt.jsx)("p",{className:"kanban-card-note",children:e.note})]})})}function ep({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=Gr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,Dt.jsx)("div",{ref:n,style:{transform:lt.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,Dt.jsx)($s,{card:e,labels:t})})}var ct=require("react/jsx-runtime");function tp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=_r({id:e.id,data:{type:"column"}}),{active:s,over:i}=jo(),u=Qe(),c=s?.data.current?.type==="card"&&(l||i?.data.current?.columnId===e.id);return(0,ct.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ct.jsxs)("div",{className:"kanban-column-header",children:[(0,ct.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ct.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ct.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,ct.jsx)(Vr,{items:t.map(d=>d.id),strategy:Wr,children:t.map(d=>(0,ct.jsx)(ep,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ct.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ct.jsx)("div",{className:"kanban-column-footer",children:(0,ct.jsxs)(Oe,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ct.jsx)(Ut,{className:"kanban-icon"}),u("addCard")]})})]})}var yr=require("react");var ye=require("react/jsx-runtime");function LC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=Gr({id:e.id}),d=Qe();return(0,ye.jsxs)("div",{ref:i,style:{transform:lt.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,ye.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,ye.jsx)(Zo,{className:"kanban-icon"})}),(0,ye.jsx)($t,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,ye.jsx)(Oe,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,ye.jsx)(Wt,{className:"kanban-icon"})})]})}function ap({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=Qe(),[i,u]=(0,yr.useState)({}),[c,d]=(0,yr.useState)(""),f=Er(ro(ra,{activationConstraint:{distance:8}}),ro(oa,{coordinateGetter:zr}));(0,yr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(g=>[g.id,g.title]))),d(""))},[e]);let h=g=>{let m=(i[g]??"").trim(),x=t.find(C=>C.id===g);x&&m&&m!==x.title&&r(g,m)},p=g=>{let{active:m,over:x}=g;x&&m.id!==x.id&&o(String(m.id),String(x.id))};return(0,ye.jsx)(bo,{open:e,onOpenChange:a,children:(0,ye.jsxs)(Da,{className:"kanban-dialog-medium",children:[(0,ye.jsxs)(Ma,{children:[(0,ye.jsx)(Aa,{children:s("columnEdit")}),(0,ye.jsx)(fr,{children:s("columnEditDesc")})]}),(0,ye.jsx)(Nr,{sensors:f,collisionDetection:Di,onDragEnd:p,children:(0,ye.jsx)(Vr,{items:t.map(g=>g.id),strategy:Wr,children:(0,ye.jsx)("div",{className:"kanban-sortable-list",children:t.map(g=>(0,ye.jsx)(LC,{column:g,value:i[g.id]??g.title,onValueChange:m=>u(x=>({...x,[g.id]:m})),onCommit:()=>h(g.id),onDelete:()=>n(g.id),canDelete:t.length>1},g.id))})})}),(0,ye.jsxs)("div",{className:"kanban-sortable-row",children:[(0,ye.jsx)($t,{value:c,placeholder:s("newColumnPlaceholder"),onChange:g=>d(g.target.value),onKeyDown:g=>{g.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,ye.jsxs)(Oe,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,ye.jsx)(Ut,{className:"kanban-icon"}),s("add")]})]})]})})}var Ao=require("react");var Te=require("react/jsx-runtime");function op({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=Qe(),[s,i]=(0,Ao.useState)({}),[u,c]=(0,Ao.useState)(""),[d,f]=(0,Ao.useState)("#38bdf8");(0,Ao.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(p=>[p.name,{name:p.name,color:p.color}]))),c(""),f("#38bdf8"))},[e]);let h=p=>{let g=s[p];if(!g)return;let m=t.find(C=>C.name===p),x=g.name.trim();m&&x&&(x!==p||g.color!==m.color)&&r(p,x,g.color)};return(0,Te.jsx)(bo,{open:e,onOpenChange:a,children:(0,Te.jsxs)(Da,{className:"kanban-dialog-medium",children:[(0,Te.jsxs)(Ma,{children:[(0,Te.jsx)(Aa,{children:l("labelEdit")}),(0,Te.jsx)(fr,{children:l("labelEditDesc")})]}),(0,Te.jsx)("div",{className:"kanban-label-list",children:t.map(p=>{let g=s[p.name]??{name:p.name,color:p.color};return(0,Te.jsxs)("div",{className:"kanban-label-row",children:[(0,Te.jsx)("input",{type:"color",value:g.color,className:"kanban-color-input",onChange:m=>i(x=>({...x,[p.name]:{...g,color:m.target.value}})),onBlur:()=>h(p.name)}),(0,Te.jsx)($t,{value:g.name,onChange:m=>i(x=>({...x,[p.name]:{...g,name:m.target.value}})),onBlur:()=>h(p.name),onKeyDown:m=>{m.key==="Enter"&&m.target.blur()}}),(0,Te.jsx)(Oe,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(p.name),children:(0,Te.jsx)(Wt,{className:"kanban-icon"})})]},p.name)})}),(0,Te.jsx)(cr,{className:"kanban-dialog-footer-layout",children:(0,Te.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Te.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:p=>f(p.target.value)}),(0,Te.jsx)($t,{value:u,placeholder:l("newLabelPlaceholder"),onChange:p=>c(p.target.value),onKeyDown:p=>{p.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Te.jsxs)(Oe,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Te.jsx)(Ut,{className:"kanban-icon"}),l("add")]})]})})]})})}function Hn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Ys=new Map,Zs=0,qn=new Set;function rp(e,t){Ys.set(e,t),Zs++;for(let a of qn)a()}function np(e){let t=Ys.get(e);if(t==null)return null;Ys.delete(e),Zs++;for(let a of qn)a();return t}function lp(e){return qn.add(e),()=>{qn.delete(e)}}function sp(){return Zs}function ip(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(vo("fieldId")+": "+t),a&&n.push(a),r&&n.push(vo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var $=require("react/jsx-runtime");function up(e,t,a,o,r){let n=e.find(m=>m.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(m=>m.columnId===n.columnId).findIndex(m=>m.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(m=>m.id!==t),i=s.filter(m=>m.columnId===a),u=o?i.findIndex(m=>m.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],h=i[i.length-1],p=f?d.indexOf(f):h?d.indexOf(h)+1:d.length;return d.splice(p,0,{...n,columnId:a}),{cards:d.every((m,x)=>m.id===e[x]?.id&&m.columnId===e[x]?.columnId)?e:d,toIndex:c}}function dp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,l=a?a(w=>w.items):[],s=a?a(w=>w.recentWorkspaceId):void 0,i=Array.isArray(l)?l.find(w=>Array.isArray(w.sessionIds)&&w.sessionIds.includes(t)):void 0,u=i?i.workspaceId:s||"default",c=Qe(),[d,f]=(0,ce.useState)(null),[h,p]=(0,ce.useState)(""),[g,m]=(0,ce.useState)([]),[x,C]=(0,ce.useState)(null),[L,I]=(0,ce.useState)(null),[b,v]=(0,ce.useState)(!1),[y,R]=(0,ce.useState)(!1),[P,T]=(0,ce.useState)(!1),[M,E]=(0,ce.useState)(""),B=(0,ce.useRef)(null),_=(0,ce.useRef)(d),Y=(0,ce.useRef)(null),j=(0,ce.useRef)(u),N=(0,ce.useRef)(0),V=(0,ce.useRef)(0);_.current=d,j.current=u;let[G,A]=(0,ce.useState)(null),Le=Er(ro(ra,{activationConstraint:{distance:8}}),ro(oa,{coordinateGetter:zr})),X=(0,ce.useCallback)((w,k,O)=>{j.current!==k||O<V.current||(V.current=O,w&&w.board&&(f({...w.board,activities:Array.isArray(w.board.activities)?w.board.activities:[]}),p("")),Array.isArray(w&&w.warnings)&&w.warnings.length>0&&m(W=>[...W,...w.warnings]))},[]),Q=(0,ce.useCallback)(async(w,k={})=>{let O=++N.current;try{let W=await Hn(w,k,u);return X(W,u,O),!0}catch(W){return p(c("actionFailed")+String(W&&W.message||W)),!1}},[u,X,c]),Ce=(0,ce.useCallback)(()=>{let w=++N.current;T(!0),Hn("get",{},u).then(k=>X(k,u,w)).catch(k=>p(c("loadFailed")+String(k&&k.message||k))).finally(()=>T(!1))},[u,X,c]);(0,ce.useEffect)(()=>{let w=!0,k=++N.current;return f(null),I(null),C(null),p(""),m([]),Hn("get",{},u).then(O=>{w&&X(O,u,k)}).catch(O=>{w&&p(c("loadFailed")+String(O&&O.message||O))}),()=>{w=!1}},[u,X,c]),(0,ce.useLayoutEffect)(()=>{let w=Me=>{let ue=Me;for(;ue;){let ge=getComputedStyle(ue).overflowY;if(ge==="auto"||ge==="scroll")return ue;ue=ue.parentElement}return null},k=()=>{let Me=B.current;if(!Me)return;let ue=Me.getBoundingClientRect().top,ge=w(Me.parentElement),Ie=window.innerHeight;if(ge){let at=ge.querySelector("[data-composer-seat]"),Ye=at?at.getBoundingClientRect().top:0;at&&at.offsetHeight>0&&Ye>ue?Ie=Ye:Ie=ge.getBoundingClientRect().bottom}A(Math.max(0,Math.floor(Ie-ue)))};k();let O=w(B.current?.parentElement??null),W=new ResizeObserver(k);return W.observe(document.documentElement),O&&W.observe(O),window.addEventListener("resize",k),()=>{W.disconnect(),window.removeEventListener("resize",k)}},[d!==null]);let Re=(0,ce.useCallback)(w=>{let k=Mi(w),O=k.length>0?k:nl(w),W=zo(O,"id");if(W==null)return[];if(new Set((d?.columns??[]).map(ue=>ue.id)).has(String(W))){let ue=(d?.cards??[]).filter(ge=>ge.columnId===W).map(ge=>ge.id);if(ue.length>0){let ge=Or({...w,droppableContainers:w.droppableContainers.filter(Ie=>Ie.id!==W&&ue.includes(String(Ie.id)))});ge.length>0&&(W=ge[0].id)}}return[{id:W}]},[d]),ie=w=>{let k=_.current;if(!k||k.cards===w)return;let O={...k,cards:w};_.current=O,f(O)},Pe=w=>{if(w.active.data.current?.type!=="card")return;let k=_.current,O=k?.cards.find(W=>W.id===w.active.id);!O||!k||(Y.current=k.cards,C(O))},F=({active:w,over:k})=>{let O=_.current;if(!k||!O||w.data.current?.type!=="card")return;let W=String(w.id),Me=O.cards.find(Ye=>Ye.id===W),ue=O.cards.find(Ye=>Ye.id===k.id),ge=ue?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!Me||!ge||Me.columnId===ge)return;let Ie=w.rect.current.translated,at=!!(ue&&Ie&&Ie.top+Ie.height/2>k.rect.top+k.rect.height/2);ie(up(O.cards,W,ge,ue?.id??null,at).cards)},ee=({active:w,over:k})=>{let O=_.current,W=Y.current;if(Y.current=null,!k||!O||w.data.current?.type!=="card"){W&&ie(W),C(null);return}let Me=String(w.id),ue=O.cards.find(Ht=>Ht.id===k.id),ge=ue?.columnId??(k.data.current?.type==="column"?String(k.id):null);if(!ge){W&&ie(W),C(null);return}let Ie=w.rect.current.translated,at=!!(ue&&Ie&&Ie.top+Ie.height/2>k.rect.top+k.rect.height/2),Ye=up(O.cards,Me,ge,ue?.id??null,at);ie(Ye.cards),C(null),(!W||Ye.cards.some((Ht,Rr)=>Ht.id!==W[Rr]?.id||Ht.columnId!==W[Rr]?.columnId))&&Q("moveCard",{id:Me,columnId:ge,toIndex:Ye.toIndex}).then(Ht=>{Ht||Ce()})},K=()=>{Y.current&&ie(Y.current),Y.current=null,C(null)},le=w=>{if(!L)return Promise.resolve(!1);if(L.card){let k={id:L.card.id};return w.title!==L.card.title&&(k.title=w.title),w.note!==L.card.note&&(k.note=w.note),w.label!==(L.card.label??"")&&(k.label=w.label),w.priority!==(L.card.priority??"")&&(k.priority=w.priority),Q("updateCard",k)}return Q("addCard",{columnId:L.columnId,title:w.title,note:w.note,label:w.label||void 0,priority:w.priority||void 0})},oe=(0,ce.useCallback)((w,k)=>{let O=ip(w);if(O){if(k==="current"){o?.setDraft(O);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(W=>{W&&(rp(W,O),n.open(W))}).catch(W=>p(c("actionFailed")+String(W&&W.message||W)))}},[o,r,n,u,c]);return d?(0,$.jsxs)("div",{ref:B,className:"kanban-root kanban-view",style:G!=null?{height:G}:void 0,children:[h&&(0,$.jsx)("p",{className:"kanban-error",children:h}),g.length>0&&(0,$.jsxs)("div",{className:"kanban-warning",children:[(0,$.jsxs)("div",{className:"kanban-warning-body",children:[(0,$.jsx)("p",{className:"kanban-warning-title",children:c("warnings")}),g.map((w,k)=>(0,$.jsx)("p",{className:"kanban-warning-item",children:w},k))]}),(0,$.jsx)(Oe,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>m([]),children:c("dismiss")})]}),(0,$.jsxs)(Nr,{sensors:Le,collisionDetection:Re,onDragStart:Pe,onDragOver:F,onDragEnd:ee,onDragCancel:K,children:[(0,$.jsxs)("div",{className:"kanban-content",children:[(0,$.jsxs)("div",{className:"kanban-toolbar",children:[(0,$.jsx)(Oe,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:Ce,children:(0,$.jsx)(er,{className:P?"kanban-animate-spin":void 0})}),(0,$.jsxs)(vr,{children:[(0,$.jsx)(br,{asChild:!0,children:(0,$.jsx)(Oe,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("settings"),children:(0,$.jsx)(tr,{className:"kanban-icon"})})}),(0,$.jsxs)(ko,{align:"start",children:[(0,$.jsxs)(jt,{onClick:()=>v(!0),children:[(0,$.jsx)(Qo,{className:"kanban-icon"}),c("columnEdit")]}),(0,$.jsxs)(jt,{onClick:()=>R(!0),children:[(0,$.jsx)(ar,{className:"kanban-icon"}),c("labelEdit")]})]})]}),(0,$.jsxs)(vr,{children:[(0,$.jsx)(br,{asChild:!0,children:(0,$.jsx)(Oe,{variant:M?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:c("priorityFilter"),children:(0,$.jsx)(la,{className:"kanban-icon"})})}),(0,$.jsxs)(ko,{align:"start",children:[(0,$.jsxs)(jt,{onClick:()=>E(""),children:[(0,$.jsx)("span",{className:"kanban-filter-check",children:!M&&(0,$.jsx)(na,{className:"kanban-icon"})}),c("all")]}),Nn.map(w=>(0,$.jsxs)(jt,{onClick:()=>E(w),children:[(0,$.jsx)("span",{className:"kanban-filter-check",children:M===w&&(0,$.jsx)(na,{className:"kanban-icon"})}),(0,$.jsx)("span",{className:"kanban-priority-dot",style:{background:Yt[w].color}}),Yt[w].label]},w))]})]})]}),(0,$.jsx)("div",{className:"kanban-board-scroll",children:d.columns.map(w=>{let k=d.cards.filter(O=>O.columnId===w.id&&(!M||O.priority===M));return(0,$.jsx)(tp,{column:w,cards:k,labels:d.labels,onAddCard:O=>I({card:null,columnId:O.id}),onOpenCard:O=>I({card:O,columnId:O.columnId})},w.id)})})]}),(0,$.jsx)(Ki,{children:x?(0,$.jsx)("div",{className:"kanban-drag-preview",children:(0,$.jsx)($s,{card:x,labels:d.labels})}):null})]}),(0,$.jsx)(Qf,{open:L!==null,card:L?.card??null,labels:d.labels,activities:L?.card?d.activities.filter(w=>w.cardId===L.card.id):[],onOpenChange:w=>{w||I(null)},onSave:le,onDelete:w=>Q("deleteCard",{id:w.id}),onChatWithAgent:oe}),(0,$.jsx)(ap,{open:b,columns:d.columns,onOpenChange:v,onReorder:(w,k)=>{let O=d.columns.findIndex(W=>W.id===k);O>=0&&Q("moveColumn",{id:w,toIndex:O})},onRename:(w,k)=>Q("renameColumn",{id:w,title:k}),onDelete:w=>Q("deleteColumn",{id:w}),onAdd:w=>Q("addColumn",{title:w})}),(0,$.jsx)(op,{open:y,labels:d.labels,onOpenChange:R,onAdd:(w,k)=>Q("addLabel",{name:w,color:k}),onUpdate:(w,k,O)=>Q("updateLabel",{name:w,newName:k,color:O}),onDelete:w=>Q("deleteLabel",{name:w})})]}):(0,$.jsx)("div",{className:"kanban-root kanban-loading",children:h?(0,$.jsx)("p",{className:"kanban-error",children:h}):(0,$.jsx)("p",{className:"kanban-muted-text",children:c("loading")})})}var Un=require("react");function cp({sessionId:e,inputActions:t}){let a=(0,Un.useSyncExternalStore)(lp,sp);return(0,Un.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=np(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var fp={name:"dsh-kanban",inject:["slots","locale"],apply(e){kd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>vo("boardTab")},r=>(0,Qs.createElement)(dp,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,Qs.createElement)(cp,r)))}};var pp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+pp+"]")){let e=document.createElement("style");e.setAttribute(pp,""),e.textContent=si,document.head.appendChild(e)}var CC=fp;
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