window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var Cp=Object.create;var Rr=Object.defineProperty;var vp=Object.getOwnPropertyDescriptor;var Ip=Object.getOwnPropertyNames;var bp=Object.getPrototypeOf,Sp=Object.prototype.hasOwnProperty;var ti=e=>{throw TypeError(e)};var wp=(e,t)=>{for(var a in t)Rr(e,a,{get:t[a],enumerable:!0})},ai=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ip(t))!Sp.call(e,r)&&r!==a&&Rr(e,r,{get:()=>t[r],enumerable:!(o=vp(t,r))||o.enumerable});return e};var H=(e,t,a)=>(a=e!=null?Cp(bp(e)):{},ai(t||!e||!e.__esModule?Rr(a,"default",{value:e,enumerable:!0}):a,e)),yp=e=>ai(Rr({},"__esModule",{value:!0}),e);var oi=(e,t,a)=>t.has(e)||ti("Cannot "+a);var Ue=(e,t,a)=>(oi(e,t,"read from private field"),a?a.call(e):t.get(e)),ri=(e,t,a)=>t.has(e)?ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Vn=(e,t,a,o)=>(oi(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var LC={};wp(LC,{default:()=>xC});module.exports=yp(LC);var ni=`/*
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

.kanban-drag-preview {
  width: 256px;
  transform: rotate(2deg);
  border-color: var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-2);
  box-shadow: var(--dsw-shadow-lv3);
}

.kanban-drag-preview-content {
  padding: 14px;
}

.kanban-drag-preview-title {
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-strong-13);
  font-size: 13.5px;
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
`;var js=require("react");var fe=require("react");var w=H(require("react")),ha=require("react-dom");var Le=require("react");function si(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Le.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Eo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function da(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Pr(e){return"nodeType"in e}function We(e){var t,a;return e?da(e)?e:Pr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function kr(e){let{Document:t}=We(e);return e instanceof t}function Za(e){return da(e)?!1:e instanceof We(e).HTMLElement}function zn(e){return e instanceof We(e).SVGElement}function ca(e){return e?da(e)?e.document:Pr(e)?kr(e)?e:Za(e)||zn(e)?e.ownerDocument:document:document:document}var at=Eo?Le.useLayoutEffect:Le.useEffect;function Oo(e){let t=(0,Le.useRef)(e);return at(()=>{t.current=e}),(0,Le.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ii(){let e=(0,Le.useRef)(null),t=(0,Le.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Le.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Qa(e,t){t===void 0&&(t=[e]);let a=(0,Le.useRef)(e);return at(()=>{a.current!==e&&(a.current=e)},t),a}function Ja(e,t){let a=(0,Le.useRef)();return(0,Le.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Fo(e){let t=Oo(e),a=(0,Le.useRef)(null),o=(0,Le.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Bo(e){let t=(0,Le.useRef)();return(0,Le.useEffect)(()=>{t.current=e},[e]),t.current}var Gn={};function fa(e,t){return(0,Le.useMemo)(()=>{if(t)return t;let a=Gn[e]==null?0:Gn[e]+1;return Gn[e]=a,e+"-"+a},[e,t])}function ui(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var pa=ui(1),ma=ui(-1);function Pp(e){return"clientX"in e&&"clientY"in e}function eo(e){if(!e)return!1;let{KeyboardEvent:t}=We(e.target);return t&&e instanceof t}function kp(e){if(!e)return!1;let{TouchEvent:t}=We(e.target);return t&&e instanceof t}function No(e){if(kp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Pp(e)?{x:e.clientX,y:e.clientY}:null}var tt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[tt.Translate.toString(e),tt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),li="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function di(e){return e.matches(li)?e:e.querySelector(li)}var ga=H(require("react")),Dp={display:"none"};function ci(e){let{id:t,value:a}=e;return ga.default.createElement("div",{id:t,style:Dp},a)}function fi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ga.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function pi(){let[e,t]=(0,ga.useState)("");return{announce:(0,ga.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var Ri=(0,w.createContext)(null);function Mp(e){let t=(0,w.useContext)(Ri);(0,w.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Ap(){let[e]=(0,w.useState)(()=>new Set),t=(0,w.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,w.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Tp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Ep={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Op(e){let{announcements:t=Ep,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Tp}=e,{announce:n,announcement:l}=pi(),s=fa("DndLiveRegion"),[i,u]=(0,w.useState)(!1);if((0,w.useEffect)(()=>{u(!0)},[]),Mp((0,w.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=w.default.createElement(w.default.Fragment,null,w.default.createElement(ci,{id:o,value:r.draggable}),w.default.createElement(fi,{id:s,announcement:l}));return a?(0,ha.createPortal)(c,a):c}var Re;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Re||(Re={}));function Mr(){}function to(e,t){return(0,w.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Tr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var ht=Object.freeze({x:0,y:0});function tl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Fp(e,t){let a=No(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function al(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Bp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function $n(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Wo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function mi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Pi=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=mi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=tl(mi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(al)},Er=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=$n(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=$n(i),c=r.reduce((f,h,p)=>f+tl(u[p],h),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(al)};function Np(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var ol=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Np(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(Bp)};function _p(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var ki=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&_p(o,s)){let u=$n(s).reduce((d,f)=>d+tl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(al)};function Hp(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Di(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ht}function qp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Up=qp(1);function Mi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Wp(e,t,a){let o=Mi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Vp={ignoreTransform:!1};function Ca(e,t){t===void 0&&(t=Vp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=We(e).getComputedStyle(e);u&&(a=Wp(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function gi(e){return Ca(e,{ignoreTransform:!0})}function Gp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function zp(e,t){return t===void 0&&(t=We(e).getComputedStyle(e)),t.position==="fixed"}function Xp(e,t){t===void 0&&(t=We(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Vo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(kr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Za(r)||zn(r)||a.includes(r))return a;let n=We(e).getComputedStyle(r);return r!==e&&Xp(r,n)&&a.push(r),zp(r,n)?a:o(r.parentNode)}return e?o(e):a}function Ai(e){let[t]=Vo(e,1);return t??null}function Xn(e){return!Eo||!e?null:da(e)?e:Pr(e)?kr(e)||e===ca(e).scrollingElement?window:Za(e)?e:null:null}function Ti(e){return da(e)?e.scrollX:e.scrollLeft}function Ei(e){return da(e)?e.scrollY:e.scrollTop}function Yn(e){return{x:Ti(e),y:Ei(e)}}var De;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(De||(De={}));function Oi(e){return!Eo||!e?!1:e===document.scrollingElement}function Fi(e){let t={x:0,y:0},a=Oi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Kp={x:.2,y:.2};function jp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Kp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Fi(e),h={x:0,y:0},p={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(h.y=De.Backward,p.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(h.y=De.Forward,p.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(h.x=De.Forward,p.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(h.x=De.Backward,p.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:h,speed:p}}function $p(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Bi(e){return e.reduce((t,a)=>pa(t,Yn(a)),ht)}function Yp(e){return e.reduce((t,a)=>t+Ti(a),0)}function Zp(e){return e.reduce((t,a)=>t+Ei(a),0)}function Ni(e,t){if(t===void 0&&(t=Ca),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Ai(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Qp=[["x",["left","right"],Yp],["y",["top","bottom"],Zp]],Ho=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Vo(a),r=Bi(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Qp)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},xa=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Jp(e){let{EventTarget:t}=We(e);return e instanceof t?e:ca(e)}function Kn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var it;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(it||(it={}));function hi(e){e.preventDefault()}function em(e){e.stopPropagation()}var ae;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ae||(ae={}));var _i={start:[ae.Space,ae.Enter],cancel:[ae.Esc],end:[ae.Space,ae.Enter,ae.Tab]},tm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ae.Right:return{...a,x:a.x+25};case ae.Left:return{...a,x:a.x-25};case ae.Down:return{...a,y:a.y+25};case ae.Up:return{...a,y:a.y-25}}},Jt=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new xa(ca(a)),this.windowListeners=new xa(We(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(it.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Ni(o),a(ht)}handleKeyDown(t){if(eo(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=_i,coordinateGetter:l=tm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:ht;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=ma(d,c),h={x:0,y:0},{scrollableAncestors:p}=o.current;for(let m of p){let g=t.code,{isTop:L,isRight:C,isLeft:x,isBottom:v,maxScroll:S,minScroll:b}=Fi(m),y=$p(m),R={x:Math.min(g===ae.Right?y.right-y.width/2:y.right,Math.max(g===ae.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(g===ae.Down?y.bottom-y.height/2:y.bottom,Math.max(g===ae.Down?y.top:y.top+y.height/2,d.y))},P=g===ae.Right&&!C||g===ae.Left&&!x,E=g===ae.Down&&!v||g===ae.Up&&!L;if(P&&R.x!==d.x){let T=m.scrollLeft+f.x,O=g===ae.Right&&T<=S.x||g===ae.Left&&T>=b.x;if(O&&!f.y){m.scrollTo({left:T,behavior:s});return}O?h.x=m.scrollLeft-T:h.x=g===ae.Right?m.scrollLeft-S.x:m.scrollLeft-b.x,h.x&&m.scrollBy({left:-h.x,behavior:s});break}else if(E&&R.y!==d.y){let T=m.scrollTop+f.y,O=g===ae.Down&&T<=S.y||g===ae.Up&&T>=b.y;if(O&&!f.x){m.scrollTo({top:T,behavior:s});return}O?h.y=m.scrollTop-T:h.y=g===ae.Down?m.scrollTop-S.y:m.scrollTop-b.y,h.y&&m.scrollBy({top:-h.y,behavior:s});break}}this.handleMove(t,pa(ma(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Jt.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=_i,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function xi(e){return!!(e&&"distance"in e)}function Li(e){return!!(e&&"delay"in e)}var qo=class{constructor(t,a,o){var r;o===void 0&&(o=Jp(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ca(l),this.documentListeners=new xa(this.document),this.listeners=new xa(o),this.windowListeners=new xa(We(l)),this.initialCoordinates=(r=No(n))!=null?r:ht,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.DragStart,hi),this.windowListeners.add(it.VisibilityChange,this.handleCancel),this.windowListeners.add(it.ContextMenu,hi),this.documentListeners.add(it.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Li(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(xi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(it.Click,em,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(it.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=No(t))!=null?a:ht,u=ma(r,i);if(!o&&s){if(xi(s)){if(s.tolerance!=null&&Kn(u,s.tolerance))return this.handleCancel();if(Kn(u,s.distance))return this.handleStart()}if(Li(s)&&Kn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ae.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},am={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},ea=class extends qo{constructor(t){let{event:a}=t,o=ca(a.target);super(t,am,o)}};ea.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var om={move:{name:"mousemove"},end:{name:"mouseup"}},Zn;(function(e){e[e.RightClick=2]="RightClick"})(Zn||(Zn={}));var Qn=class extends qo{constructor(t){super(t,om,ca(t.event.target))}};Qn.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===Zn.RightClick?!1:(o?.({event:a}),!0)}}];var jn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Jn=class extends qo{constructor(t){super(t,jn)}static setup(){return window.addEventListener(jn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(jn.move.name,t)};function t(){}}};Jn.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var _o;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(_o||(_o={}));var Ar;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Ar||(Ar={}));function rm(e){let{acceleration:t,activator:a=_o.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Ar.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=lm({delta:d,disabled:!n}),[p,m]=ii(),g=(0,w.useRef)({x:0,y:0}),L=(0,w.useRef)({x:0,y:0}),C=(0,w.useMemo)(()=>{switch(a){case _o.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case _o.DraggableRect:return r}},[a,r,i]),x=(0,w.useRef)(null),v=(0,w.useCallback)(()=>{let b=x.current;if(!b)return;let y=g.current.x*L.current.x,R=g.current.y*L.current.y;b.scrollBy(y,R)},[]),S=(0,w.useMemo)(()=>s===Ar.TreeOrder?[...u].reverse():u,[s,u]);(0,w.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let b of S){if(o?.(b)===!1)continue;let y=u.indexOf(b),R=c[y];if(!R)continue;let{direction:P,speed:E}=jp(b,R,C,t,f);for(let T of["x","y"])h[T][P[T]]||(E[T]=0,P[T]=0);if(E.x>0||E.y>0){m(),x.current=b,p(v,l),g.current=E,L.current=P;return}}g.current={x:0,y:0},L.current={x:0,y:0},m()},[t,v,o,m,n,l,JSON.stringify(C),JSON.stringify(h),p,u,S,c,JSON.stringify(f)])}var nm={x:{[De.Backward]:!1,[De.Forward]:!1},y:{[De.Backward]:!1,[De.Forward]:!1}};function lm(e){let{delta:t,disabled:a}=e,o=Bo(t);return Ja(r=>{if(a||!o||!r)return nm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[De.Backward]:r.x[De.Backward]||n.x===-1,[De.Forward]:r.x[De.Forward]||n.x===1},y:{[De.Backward]:r.y[De.Backward]||n.y===-1,[De.Forward]:r.y[De.Forward]||n.y===1}}},[a,t,o])}function sm(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Ja(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function im(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Uo;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Uo||(Uo={}));var el;(function(e){e.Optimized="optimized"})(el||(el={}));var Ci=new Map;function um(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,w.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,w.useRef)(e),d=g(),f=Qa(d),h=(0,w.useCallback)(function(L){L===void 0&&(L=[]),!f.current&&l(C=>C===null?L:C.concat(L.filter(x=>!C.includes(x))))},[f]),p=(0,w.useRef)(null),m=Ja(L=>{if(d&&!a)return Ci;if(!L||L===Ci||c.current!==e||n!=null){let C=new Map;for(let x of e){if(!x)continue;if(n&&n.length>0&&!n.includes(x.id)&&x.rect.current){C.set(x.id,x.rect.current);continue}let v=x.node.current,S=v?new Ho(i(v),v):null;x.rect.current=S,S&&C.set(x.id,S)}return C}return L},[e,n,a,d,i]);return(0,w.useEffect)(()=>{c.current=e},[e]),(0,w.useEffect)(()=>{d||h()},[a,d]),(0,w.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,w.useEffect)(()=>{d||typeof s!="number"||p.current!==null||(p.current=setTimeout(()=>{h(),p.current=null},s))},[s,d,h,...o]),{droppableRects:m,measureDroppableContainers:h,measuringScheduled:n!=null};function g(){switch(u){case Uo.Always:return!1;case Uo.BeforeDragging:return a;default:return!a}}}function rl(e,t){return Ja(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function dm(e,t){return rl(e,t)}function cm(e){let{callback:t,disabled:a}=e,o=Oo(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Or(e){let{callback:t,disabled:a}=e,o=Oo(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function fm(e){return new Ho(Ca(e),e)}function vi(e,t,a){t===void 0&&(t=fm);let[o,r]=(0,w.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=cm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Or({callback:n});return at(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function pm(e){let t=rl(e);return Di(e,t)}var Ii=[];function mm(e){let t=(0,w.useRef)(e),a=Ja(o=>e?o&&o!==Ii&&e&&t.current&&e.parentNode===t.current.parentNode?o:Vo(e):Ii,[e]);return(0,w.useEffect)(()=>{t.current=e},[e]),a}function gm(e){let[t,a]=(0,w.useState)(null),o=(0,w.useRef)(e),r=(0,w.useCallback)(n=>{let l=Xn(n.target);l&&a(s=>s?(s.set(l,Yn(l)),new Map(s)):null)},[]);return(0,w.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Xn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Yn(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Xn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,w.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>pa(n,l),ht):Bi(e):ht,[e,t])}function bi(e,t){t===void 0&&(t=[]);let a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{a.current=null},t),(0,w.useEffect)(()=>{let o=e!==ht;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?ma(e,a.current):ht}function hm(e){(0,w.useEffect)(()=>{if(!Eo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function xm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Hi(e){return(0,w.useMemo)(()=>e?Gp(e):null,[e])}var Si=[];function Lm(e,t){t===void 0&&(t=Ca);let[a]=e,o=Hi(a?We(a):null),[r,n]=(0,w.useState)(Si);function l(){n(()=>e.length?e.map(i=>Oi(i)?o:new Ho(t(i),i)):Si)}let s=Or({callback:l});return at(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function qi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Za(t)?t:e}function Cm(e){let{measure:t}=e,[a,o]=(0,w.useState)(null),r=(0,w.useCallback)(u=>{for(let{target:c}of u)if(Za(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Or({callback:r}),l=(0,w.useCallback)(u=>{let c=qi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Fo(l);return(0,w.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var vm=[{sensor:ea,options:{}},{sensor:Jt,options:{}}],Im={current:{}},Dr={draggable:{measure:gi},droppable:{measure:gi,strategy:Uo.WhileDragging,frequency:el.Optimized},dragOverlay:{measure:Ca}},La=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},bm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new La,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Mr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Dr,measureDroppableContainers:Mr,windowRect:null,measuringScheduled:!1},Ui={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Mr,draggableNodes:new Map,over:null,measureDroppableContainers:Mr},Go=(0,w.createContext)(Ui),Wi=(0,w.createContext)(bm);function Sm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new La}}}function wm(e,t){switch(t.type){case Re.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Re.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Re.DragEnd:case Re.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Re.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new La(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Re.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new La(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Re.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new La(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function ym(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,w.useContext)(Go),n=Bo(o),l=Bo(a?.id);return(0,w.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!eo(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=di(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Vi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Rm(e){return(0,w.useMemo)(()=>({draggable:{...Dr.draggable,...e?.draggable},droppable:{...Dr.droppable,...e?.droppable},dragOverlay:{...Dr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Pm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,w.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;at(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Di(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Ai(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Fr=(0,w.createContext)({...ht,scaleX:1,scaleY:1}),Qt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Qt||(Qt={}));var Br=(0,w.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=vm,collisionDetection:d=ol,measuring:f,modifiers:h,...p}=t,m=(0,w.useReducer)(wm,void 0,Sm),[g,L]=m,[C,x]=Ap(),[v,S]=(0,w.useState)(Qt.Uninitialized),b=v===Qt.Initialized,{draggable:{active:y,nodes:R,translate:P},droppable:{containers:E}}=g,T=y!=null?R.get(y):null,O=(0,w.useRef)({initial:null,translated:null}),F=(0,w.useMemo)(()=>{var qe;return y!=null?{id:y,data:(qe=T?.data)!=null?qe:Im,rect:O}:null},[y,T]),_=(0,w.useRef)(null),[Y,K]=(0,w.useState)(null),[N,W]=(0,w.useState)(null),V=Qa(p,Object.values(p)),A=fa("DndDescribedBy",l),re=(0,w.useMemo)(()=>E.getEnabled(),[E]),Z=Rm(f),{droppableRects:ne,measureDroppableContainers:he,measuringScheduled:be}=um(re,{dragging:b,dependencies:[P.x,P.y],config:Z.droppable}),ge=sm(R,y),Se=(0,w.useMemo)(()=>N?No(N):null,[N]),I=Lp(),D=dm(ge,Z.draggable.measure);Pm({activeNode:y!=null?R.get(y):null,config:I.layoutShiftCompensation,initialRect:D,measure:Z.draggable.measure});let k=vi(ge,Z.draggable.measure,D),B=vi(ge?ge.parentElement:null),j=(0,w.useRef)({activatorEvent:null,active:null,activeNode:ge,collisionRect:null,collisions:null,droppableRects:ne,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),z=E.getNodeFor((a=j.current.over)==null?void 0:a.id),te=Cm({measure:Z.dragOverlay.measure}),se=(o=te.nodeRef.current)!=null?o:ge,ke=b?(r=te.rect)!=null?r:k:null,mt=!!(te.nodeRef.current&&te.rect),gt=pm(mt?null:k),Ka=Hi(se?We(se):null),He=mm(b?z??ge:null),wr=Lm(He),yr=Vi(h,{transform:{x:P.x-gt.x,y:P.y-gt.y,scaleX:1,scaleY:1},activatorEvent:N,active:F,activeNodeRect:k,containerNodeRect:B,draggingNodeRect:ke,over:j.current.over,overlayNodeRect:te.rect,scrollableAncestors:He,scrollableAncestorRects:wr,windowRect:Ka}),$s=Se?pa(Se,P):null,Ys=gm(He),cp=bi(Ys),fp=bi(Ys,[k]),ja=pa(yr,cp),$a=ke?Up(ke,yr):null,Do=F&&$a?d({active:F,collisionRect:$a,droppableRects:ne,droppableContainers:re,pointerCoordinates:$s}):null,Zs=Wo(Do,"id"),[jt,Qs]=(0,w.useState)(null),pp=mt?yr:pa(yr,fp),mp=Hp(pp,(n=jt?.rect)!=null?n:null,k),Un=(0,w.useRef)(null),Js=(0,w.useCallback)((qe,Qe)=>{let{sensor:Je,options:$t}=Qe;if(_.current==null)return;let st=R.get(_.current);if(!st)return;let et=qe.nativeEvent,Rt=new Je({active:_.current,activeNode:st,event:et,options:$t,context:j,onAbort(Fe){if(!R.get(Fe))return;let{onDragAbort:Pt}=V.current,Bt={id:Fe};Pt?.(Bt),C({type:"onDragAbort",event:Bt})},onPending(Fe,Yt,Pt,Bt){if(!R.get(Fe))return;let{onDragPending:Ao}=V.current,Zt={id:Fe,constraint:Yt,initialCoordinates:Pt,offset:Bt};Ao?.(Zt),C({type:"onDragPending",event:Zt})},onStart(Fe){let Yt=_.current;if(Yt==null)return;let Pt=R.get(Yt);if(!Pt)return;let{onDragStart:Bt}=V.current,Mo={activatorEvent:et,active:{id:Yt,data:Pt.data,rect:O}};(0,ha.unstable_batchedUpdates)(()=>{Bt?.(Mo),S(Qt.Initializing),L({type:Re.DragStart,initialCoordinates:Fe,active:Yt}),C({type:"onDragStart",event:Mo}),K(Un.current),W(et)})},onMove(Fe){L({type:Re.DragMove,coordinates:Fe})},onEnd:Ya(Re.DragEnd),onCancel:Ya(Re.DragCancel)});Un.current=Rt;function Ya(Fe){return async function(){let{active:Pt,collisions:Bt,over:Mo,scrollAdjustedTranslate:Ao}=j.current,Zt=null;if(Pt&&Ao){let{cancelDrop:To}=V.current;Zt={activatorEvent:et,active:Pt,collisions:Bt,delta:Ao,over:Mo},Fe===Re.DragEnd&&typeof To=="function"&&await Promise.resolve(To(Zt))&&(Fe=Re.DragCancel)}_.current=null,(0,ha.unstable_batchedUpdates)(()=>{L({type:Fe}),S(Qt.Uninitialized),Qs(null),K(null),W(null),Un.current=null;let To=Fe===Re.DragEnd?"onDragEnd":"onDragCancel";if(Zt){let Wn=V.current[To];Wn?.(Zt),C({type:To,event:Zt})}})}}},[R]),gp=(0,w.useCallback)((qe,Qe)=>(Je,$t)=>{let st=Je.nativeEvent,et=R.get($t);if(_.current!==null||!et||st.dndKit||st.defaultPrevented)return;let Rt={active:et};qe(Je,Qe.options,Rt)===!0&&(st.dndKit={capturedBy:Qe.sensor},_.current=$t,Js(Je,Qe))},[R,Js]),ei=im(c,gp);hm(c),at(()=>{k&&v===Qt.Initializing&&S(Qt.Initialized)},[k,v]),(0,w.useEffect)(()=>{let{onDragMove:qe}=V.current,{active:Qe,activatorEvent:Je,collisions:$t,over:st}=j.current;if(!Qe||!Je)return;let et={active:Qe,activatorEvent:Je,collisions:$t,delta:{x:ja.x,y:ja.y},over:st};(0,ha.unstable_batchedUpdates)(()=>{qe?.(et),C({type:"onDragMove",event:et})})},[ja.x,ja.y]),(0,w.useEffect)(()=>{let{active:qe,activatorEvent:Qe,collisions:Je,droppableContainers:$t,scrollAdjustedTranslate:st}=j.current;if(!qe||_.current==null||!Qe||!st)return;let{onDragOver:et}=V.current,Rt=$t.get(Zs),Ya=Rt&&Rt.rect.current?{id:Rt.id,rect:Rt.rect.current,data:Rt.data,disabled:Rt.disabled}:null,Fe={active:qe,activatorEvent:Qe,collisions:Je,delta:{x:st.x,y:st.y},over:Ya};(0,ha.unstable_batchedUpdates)(()=>{Qs(Ya),et?.(Fe),C({type:"onDragOver",event:Fe})})},[Zs]),at(()=>{j.current={activatorEvent:N,active:F,activeNode:ge,collisionRect:$a,collisions:Do,droppableRects:ne,draggableNodes:R,draggingNode:se,draggingNodeRect:ke,droppableContainers:E,over:jt,scrollableAncestors:He,scrollAdjustedTranslate:ja},O.current={initial:ke,translated:$a}},[F,ge,Do,$a,R,se,ke,ne,E,jt,He,ja]),rm({...I,delta:P,draggingRect:$a,pointerCoordinates:$s,scrollableAncestors:He,scrollableAncestorRects:wr});let hp=(0,w.useMemo)(()=>({active:F,activeNode:ge,activeNodeRect:k,activatorEvent:N,collisions:Do,containerNodeRect:B,dragOverlay:te,draggableNodes:R,droppableContainers:E,droppableRects:ne,over:jt,measureDroppableContainers:he,scrollableAncestors:He,scrollableAncestorRects:wr,measuringConfiguration:Z,measuringScheduled:be,windowRect:Ka}),[F,ge,k,N,Do,B,te,R,E,ne,jt,he,He,wr,Z,be,Ka]),xp=(0,w.useMemo)(()=>({activatorEvent:N,activators:ei,active:F,activeNodeRect:k,ariaDescribedById:{draggable:A},dispatch:L,draggableNodes:R,over:jt,measureDroppableContainers:he}),[N,ei,F,k,L,A,R,jt,he]);return w.default.createElement(Ri.Provider,{value:x},w.default.createElement(Go.Provider,{value:xp},w.default.createElement(Wi.Provider,{value:hp},w.default.createElement(Fr.Provider,{value:mp},u)),w.default.createElement(ym,{disabled:s?.restoreFocus===!1})),w.default.createElement(Op,{...s,hiddenTextDescribedById:A}));function Lp(){let qe=Y?.autoScrollEnabled===!1,Qe=typeof i=="object"?i.enabled===!1:i===!1,Je=b&&!qe&&!Qe;return typeof i=="object"?{...i,enabled:Je}:{enabled:Je}}}),km=(0,w.createContext)(null),wi="button",Dm="Draggable";function Gi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=fa(Dm),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,w.useContext)(Go),{role:h=wi,roleDescription:p="draggable",tabIndex:m=0}=r??{},g=i?.id===t,L=(0,w.useContext)(g?Fr:km),[C,x]=Fo(),[v,S]=Fo(),b=xm(l,t),y=Qa(a);at(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:v,data:y}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,w.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":o,"aria-pressed":g&&h===wi?!0:void 0,"aria-roledescription":p,"aria-describedby":c.draggable}),[o,h,m,g,p,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:g,listeners:o?void 0:b,node:C,over:f,setNodeRef:x,setActivatorNodeRef:S,transform:L}}function nl(){return(0,w.useContext)(Wi)}var Mm="Droppable",Am={timeout:25};function Nr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=fa(Mm),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,w.useContext)(Go),c=(0,w.useRef)({disabled:a}),d=(0,w.useRef)(!1),f=(0,w.useRef)(null),h=(0,w.useRef)(null),{disabled:p,updateMeasurementsFor:m,timeout:g}={...Am,...r},L=Qa(m??o),C=(0,w.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(L.current)?L.current:[L.current]),h.current=null},g)},[g]),x=Or({callback:C,disabled:p||!l}),v=(0,w.useCallback)((R,P)=>{x&&(P&&(x.unobserve(P),d.current=!1),R&&x.observe(R))},[x]),[S,b]=Fo(v),y=Qa(t);return(0,w.useEffect)(()=>{!x||!S.current||(x.disconnect(),d.current=!1,x.observe(S.current))},[S,x]),(0,w.useEffect)(()=>(s({type:Re.RegisterDroppable,element:{id:o,key:n,disabled:a,node:S,rect:f,data:y}}),()=>s({type:Re.UnregisterDroppable,key:n,id:o})),[o]),(0,w.useEffect)(()=>{a!==c.current.disabled&&(s({type:Re.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:S,over:i,setNodeRef:b}}function Tm(e){let{animation:t,children:a}=e,[o,r]=(0,w.useState)(null),[n,l]=(0,w.useState)(null),s=Bo(a);return!a&&!o&&s&&r(s),at(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),w.default.createElement(w.default.Fragment,null,a,o?(0,w.cloneElement)(o,{ref:l}):null)}var Em={x:0,y:0,scaleX:1,scaleY:1};function Om(e){let{children:t}=e;return w.default.createElement(Go.Provider,{value:Ui},w.default.createElement(Fr.Provider,{value:Em},t))}var Fm={position:"fixed",touchAction:"none"},Bm=e=>eo(e)?"transform 250ms ease":void 0,Nm=(0,w.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=Bm}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Fm,width:s.width,height:s.height,top:s.top,left:s.left,transform:tt.Transform.toString(d),transformOrigin:r&&o?Fp(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return w.default.createElement(a,{className:l,style:f,ref:t},n)}),_m=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Hm=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:tt.Transform.toString(t)},{transform:tt.Transform.toString(a)}]},qm={duration:250,easing:"ease",keyframes:Hm,sideEffects:_m({styles:{active:{opacity:"0"}}})};function Um(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Oo((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=qi(l);if(!u)return;let{transform:c}=We(l).getComputedStyle(l),d=Mi(c);if(!d)return;let f=typeof t=="function"?t:Wm(t);return Ni(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function Wm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...qm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[p]=h,m=h[h.length-1];if(JSON.stringify(p)===JSON.stringify(m))return;let g=o?.({active:l,dragOverlay:s,...u}),L=s.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{L.onfinish=()=>{g?.(),C()}})}}var yi=0;function Vm(e){return(0,w.useMemo)(()=>{if(e!=null)return yi++,yi},[e])}var zi=w.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:p,droppableContainers:m,dragOverlay:g,over:L,measuringConfiguration:C,scrollableAncestors:x,scrollableAncestorRects:v,windowRect:S}=nl(),b=(0,w.useContext)(Fr),y=Vm(d?.id),R=Vi(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:g.rect,over:L,overlayNodeRect:g.rect,scrollableAncestors:x,scrollableAncestorRects:v,transform:b,windowRect:S}),P=rl(f),E=Um({config:o,draggableNodes:p,droppableContainers:m,measuringConfiguration:C}),T=P?g.setRef:void 0;return w.default.createElement(Om,null,w.default.createElement(Tm,{animation:E},d&&y?w.default.createElement(Nm,{key:y,id:d.id,ref:T,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var Ce=H(require("react"));function Xi(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Gm(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function _r(e){return e!==null&&e>=0}function zm(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Xm(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Ki=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Xi(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Hr={scaleX:1,scaleY:1},Ur=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Hr}:null}let i=Km(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Hr}:r<a&&r>=l?{x:0,y:s.height+i,...Hr}:{x:0,y:0,...Hr}};function Km(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var ji="Sortable",$i=Ce.default.createContext({activeIndex:-1,containerId:ji,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ki,disabled:{draggable:!1,droppable:!1}});function Wr(e){let{children:t,id:a,items:o,strategy:r=Ki,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=nl(),d=fa(ji,a),f=s.rect!==null,h=(0,Ce.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),p=l!=null,m=l?h.indexOf(l.id):-1,g=u?h.indexOf(u.id):-1,L=(0,Ce.useRef)(h),C=!zm(h,L.current),x=g!==-1&&m===-1||C,v=Xm(n);at(()=>{C&&p&&c(h)},[C,h,p,c]),(0,Ce.useEffect)(()=>{L.current=h},[h]);let S=(0,Ce.useMemo)(()=>({activeIndex:m,containerId:d,disabled:v,disableTransforms:x,items:h,overIndex:g,useDragOverlay:f,sortedRects:Gm(h,i),strategy:r}),[m,d,v.draggable,v.droppable,x,h,g,i,f,r]);return Ce.default.createElement($i.Provider,{value:S},t)}var jm=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Xi(a,o,r).indexOf(t)},$m=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Ym={duration:200,easing:"ease"},Yi="transform",Zm=tt.Transition.toString({property:Yi,duration:0,easing:"linear"}),Qm={roleDescription:"sortable"};function Jm(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Ce.useState)(null),s=(0,Ce.useRef)(a);return at(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Ca(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Ce.useEffect)(()=>{n&&l(null)},[n]),n}function Vr(e){let{animateLayoutChanges:t=$m,attributes:a,disabled:o,data:r,getNewIndex:n=jm,id:l,strategy:s,resizeObserverConfig:i,transition:u=Ym}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:p,sortedRects:m,overIndex:g,useDragOverlay:L,strategy:C}=(0,Ce.useContext)($i),x=eg(o,h),v=c.indexOf(l),S=(0,Ce.useMemo)(()=>({sortable:{containerId:d,index:v,items:c},...r}),[d,r,v,c]),b=(0,Ce.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:P,setNodeRef:E}=Nr({id:l,data:S,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:T,activatorEvent:O,activeNodeRect:F,attributes:_,setNodeRef:Y,listeners:K,isDragging:N,over:W,setActivatorNodeRef:V,transform:A}=Gi({id:l,data:S,attributes:{...Qm,...a},disabled:x.draggable}),re=si(E,Y),Z=!!T,ne=Z&&!p&&_r(f)&&_r(g),he=!L&&N,be=he&&ne?A:null,Se=ne?be??(s??C)({rects:m,activeNodeRect:F,activeIndex:f,overIndex:g,index:v}):null,I=_r(f)&&_r(g)?n({id:l,items:c,activeIndex:f,overIndex:g}):v,D=T?.id,k=(0,Ce.useRef)({activeId:D,items:c,newIndex:I,containerId:d}),B=c!==k.current.items,j=t({active:T,containerId:d,isDragging:N,isSorting:Z,id:l,index:v,items:c,newIndex:k.current.newIndex,previousItems:k.current.items,previousContainerId:k.current.containerId,transition:u,wasDragging:k.current.activeId!=null}),z=Jm({disabled:!j,index:v,node:R,rect:y});return(0,Ce.useEffect)(()=>{Z&&k.current.newIndex!==I&&(k.current.newIndex=I),d!==k.current.containerId&&(k.current.containerId=d),c!==k.current.items&&(k.current.items=c)},[Z,I,d,c]),(0,Ce.useEffect)(()=>{if(D===k.current.activeId)return;if(D!=null&&k.current.activeId==null){k.current.activeId=D;return}let se=setTimeout(()=>{k.current.activeId=D},50);return()=>clearTimeout(se)},[D]),{active:T,activeIndex:f,attributes:_,data:S,rect:y,index:v,newIndex:I,items:c,isOver:P,isSorting:Z,isDragging:N,listeners:K,node:R,overIndex:g,over:W,setNodeRef:re,setActivatorNodeRef:V,setDroppableNodeRef:E,setDraggableNodeRef:Y,transform:z??Se,transition:te()};function te(){if(z||B&&k.current.newIndex===v)return Zm;if(!(he&&!eo(O)||!u)&&(Z||j))return tt.Transition.toString({...u,property:Yi})}}function eg(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function qr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var tg=[ae.Down,ae.Right,ae.Up,ae.Left],Gr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(tg.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ae.Down:o.top<f.top&&i.push(d);break;case ae.Up:o.top>f.top&&i.push(d);break;case ae.Left:o.left>f.left&&i.push(d);break;case ae.Right:o.left<f.left&&i.push(d);break}});let u=Er({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Wo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,p=f?.node.current;if(p&&h&&d&&f){let g=Vo(p).some((b,y)=>s[y]!==b),L=Zi(d,f),C=ag(d,f),x=g||!L?{x:0,y:0}:{x:C?o.width-h.width:0,y:C?o.height-h.height:0},v={x:h.left,y:h.top};return x.x&&x.y?v:ma(v,x)}}}};function Zi(e,t){return!qr(e)||!qr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function ag(e,t){return!qr(e)||!qr(t)||!Zi(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Kr=require("react");var zr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var Qi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Ji=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());var ll=e=>{let t=Ji(e);return t.charAt(0).toUpperCase()+t.slice(1)};var zo=require("react");var Xr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var eu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var ao=require("react");var og=(0,ao.createContext)({});var tu=()=>(0,ao.useContext)(og);var au=(0,zo.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>{let{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:h=""}=tu()??{},p=o??d?Number(a??c)*24/Number(t??u):a??c;return(0,zo.createElement)("svg",{ref:i,...Xr,width:t??u??Xr.width,height:t??u??Xr.height,stroke:e??f,strokeWidth:p,className:zr("lucide",h,r),...!n&&!eu(s)&&{"aria-hidden":"true"},...s},[...l.map(([m,g])=>(0,zo.createElement)(m,g)),...Array.isArray(n)?n:[n]])});var ce=(e,t)=>{let a=(0,Kr.forwardRef)(({className:o,...r},n)=>(0,Kr.createElement)(au,{ref:n,iconNode:t,className:zr(`lucide-${Qi(ll(e))}`,`lucide-${e}`,o),...r}));return a.displayName=ll(e),a};var rg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ta=ce("check",rg);var ng=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],oo=ce("chevron-down",ng);var lg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Xo=ce("chevron-up",lg);var sg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aa=ce("funnel",sg);var ig=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Ko=ce("grip-vertical",ig);var ug=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],jo=ce("list",ug);var dg=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],$o=ce("message-square",dg);var cg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nt=ce("plus",cg);var fg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Yo=ce("refresh-cw",fg);var pg=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Zo=ce("settings-2",pg);var mg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Qo=ce("tag",mg);var gg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_t=ce("trash-2",gg);var hg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jo=ce("x",hg);var vr=require("react");var pu=H(require("react"),1);var Be=H(require("react"),1);var ou=H(require("react"),1),xg=Object.defineProperty,il=(e,t)=>xg(e,"name",{value:t,configurable:!0});function sl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}il(sl,"setRef");function ru(...e){return t=>{let a=!1,o=e.map(r=>{let n=sl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():sl(e[r],null)}}}}il(ru,"composeRefs");function Q(...e){return ou.useCallback(ru(...e),e)}il(Q,"useComposedRefs");var Lg=Object.defineProperty,xt=(e,t)=>Lg(e,"name",{value:t,configurable:!0});function Ve(e){let t=Be.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];ul(r)&&typeof jr=="function"&&(r=jr(r._payload)),Be.Children.forEach(r,f=>{if(uu(f)){s=!0;let h=f,p="child"in h.props?h.props.child:h.props.children;ul(p)&&typeof jr=="function"&&(p=jr(p._payload)),l=vg(h,p),i.push(l?.props?.children)}else i.push(f)}),l?l=Be.cloneElement(l,void 0,i):!s&&Be.Children.count(r)===1&&Be.isValidElement(r)&&(l=r);let u=l?iu(l):void 0,c=Q(o,u);if(!l){if(r||r===0)throw new Error(s?Sg(e):bg(e));return r}let d=su(n,l.props??{});return l.type!==Be.Fragment&&(d.ref=o?c:u),Be.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}xt(Ve,"createSlot");var nu=Ve("Slot"),lu=Symbol.for("radix.slottable");function Cg(e){let t=xt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=lu,t}xt(Cg,"createSlottable");var vg=xt((e,t)=>{if("child"in e.props){let a=e.props.child;return Be.isValidElement(a)?Be.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Be.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function su(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}xt(su,"mergeProps");function iu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}xt(iu,"getElementRef");function uu(e){return Be.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===lu}xt(uu,"isSlottable");var Ig=Symbol.for("react.lazy");function ul(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Ig&&"_payload"in e&&du(e._payload)}xt(ul,"isLazyComponent");function du(e){return typeof e=="object"&&e!==null&&"then"in e}xt(du,"isPromiseLike");var bg=xt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Sg=xt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),jr=Be[" use ".trim().toString()];function cu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=cu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function fu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=cu(e))&&(o&&(o+=" "),o+=t);return o}function J(...e){return fu(e)}var mu=require("react/jsx-runtime");function wg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return J("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Me=pu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,mu.jsx)(o?nu:"button",{className:wg({variant:t,size:a,className:e}),ref:n,...r}));Me.displayName="Button";var lr=H(require("react"),1);var me=H(require("react"),1);var yg=Object.defineProperty,ro=(e,t)=>yg(e,"name",{value:t,configurable:!0}),gu=!!(typeof window<"u"&&window.document&&window.document.createElement);function q(e,t,{checkForDefaultPrevented:a=!0}={}){return ro(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}ro(q,"composeEventHandlers");function Rg(e){if(!gu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}ro(Rg,"getOwnerWindow");function dl(e){if(!gu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}ro(dl,"getOwnerDocument");function hu(e,t=!1){let{activeElement:a}=dl(e);if(!a?.nodeName)return null;if(xu(a)&&a.contentDocument)return hu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=dl(a).getElementById(o);if(r)return r}}return a}ro(hu,"getActiveElement");function xu(e){return e.tagName==="IFRAME"}ro(xu,"isFrame");var dt=H(require("react"),1),cl=require("react/jsx-runtime"),Pg=Object.defineProperty,ut=(e,t)=>Pg(e,"name",{value:t,configurable:!0});function kg(e,t){let a=dt.createContext(t);a.displayName=e+"Context";let o=ut(n=>{let{children:l,...s}=n,i=dt.useMemo(()=>s,Object.values(s));return(0,cl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=dt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return ut(r,"useContext"),[o,r]}ut(kg,"createContext");function Ne(e,t=[]){let a=[];function o(n,l){let s=dt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=ut(d=>{let{scope:f,children:h,...p}=d,m=f?.[e]?.[i]||s,g=dt.useMemo(()=>p,Object.values(p));return(0,cl.jsx)(m.Provider,{value:g,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:p=!1}=h,m=f?.[e]?.[i]||s,g=dt.useContext(m);if(g)return g;if(l!==void 0)return l;if(!p)throw new Error(`\`${d}\` must be used within \`${n}\``)}return ut(c,"useContext"),[u,c]}ut(o,"createContext");let r=ut(()=>{let n=a.map(l=>dt.createContext(l));return ut(function(s){let i=s?.[e]||n;return dt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,Lu(r,...t)]}ut(Ne,"createContextScope");function Lu(...e){let t=e[0];if(e.length===1)return t;let a=ut(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return ut(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return dt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}ut(Lu,"composeContextScopes");var fl=H(require("react"),1);var Cu=H(require("react"),1),le=globalThis?.document?Cu.useLayoutEffect:()=>{};var Dg=Object.defineProperty,Mg=(e,t)=>Dg(e,"name",{value:t,configurable:!0}),Ag=fl[" useId ".trim().toString()]||(()=>{}),Tg=0;function ot(e){let[t,a]=fl.useState(Ag());return le(()=>{e||a(o=>o??String(Tg++))},[e]),e||(t?`radix-${t}`:"")}Mg(ot,"useId");var ct=H(require("react"),1);var $r=!1;var Lt=H(require("react"),1);var no=H(require("react"),1),Eg=Object.defineProperty,Og=(e,t)=>Eg(e,"name",{value:t,configurable:!0}),vu=no[" useEffectEvent ".trim().toString()],Iu=no[" useInsertionEffect ".trim().toString()];function pl(e){if(typeof vu=="function")return vu(e);let t=no.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Iu=="function"?Iu(()=>{t.current=e}):le(()=>{t.current=e}),no.useMemo(()=>((...a)=>t.current?.(...a)),[])}Og(pl,"useEffectEvent");var Fg=Object.defineProperty,er=(e,t)=>Fg(e,"name",{value:t,configurable:!0}),Bg=ct[" useInsertionEffect ".trim().toString()]||le;function kt({prop:e,defaultProp:t,onChange:a=er(()=>{},"onChange"),caller:o}){let[r,n,l]=Su({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if($r){let c=ct.useRef(e!==void 0);ct.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=ct.useCallback(c=>{if(s){let d=wu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}er(kt,"useControllableState");function Su({defaultProp:e,onChange:t}){let[a,o]=ct.useState(e),r=ct.useRef(a),n=ct.useRef(t);return Bg(()=>{n.current=t},[t]),ct.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}er(Su,"useUncontrolledState");function wu(e){return typeof e=="function"}er(wu,"isFunction");var bu=Symbol("RADIX:SYNC_STATE");function Ng(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=pl(l);if($r){let g=Lt.useRef(r!==void 0);Lt.useEffect(()=>{let L=g.current;L!==i&&console.warn(`${s} is changing from ${L?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),g.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=Lt.useReducer((g,L)=>{if(L.type===bu)return{...g,state:L.state};let C=e(g,L);return i&&!Object.is(C.state,g.state)&&u(C.state),C},...c),h=d.state,p=Lt.useRef(h);Lt.useEffect(()=>{p.current!==h&&(p.current=h,i||u(h))},[h,p,i]);let m=Lt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return Lt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:bu,state:r})},[r,d.state,i]),[m,f]}er(Ng,"useControllableStateReducer");var ie=H(require("react"),1);var yu=H(require("react"),1),Ru=H(require("react-dom"),1);var Pu=require("react/jsx-runtime"),_g=Object.defineProperty,Hg=(e,t)=>_g(e,"name",{value:t,configurable:!0}),qg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ee=qg.reduce((e,t)=>{let a=Ve(`Primitive.${t}`),o=yu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Pu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function tr(e,t){e&&Ru.flushSync(()=>e.dispatchEvent(t))}Hg(tr,"dispatchDiscreteCustomEvent");var lo=H(require("react"),1),Ug=Object.defineProperty,Wg=(e,t)=>Ug(e,"name",{value:t,configurable:!0});function Ae(e){let t=lo.useRef(e);return lo.useEffect(()=>{t.current=e}),lo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Wg(Ae,"useCallbackRef");var Du=require("react/jsx-runtime"),Vg=Object.defineProperty,Te=(e,t)=>Vg(e,"name",{value:t,configurable:!0}),ml="dismissableLayer.update",Gg="dismissableLayer.pointerDownOutside",zg="dismissableLayer.focusOutside",ku,Mu=ie.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),so=ie.forwardRef(Te(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ie.useContext(Mu),[f,h]=ie.useState(null),p=f?.ownerDocument??globalThis?.document,[,m]=ie.useState({}),g=Q(a,h),L=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),x=C?L.indexOf(C):-1,v=f?L.indexOf(f):-1,S=d.layersWithOutsidePointerEventsDisabled.size>0,b=v>=x,y=ie.useRef(!1),R=Au(O=>{l?.(O),i?.(O),O.defaultPrevented||u?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ie.useCallback(O=>{if(!(O instanceof Node))return!1;let F=[...d.branches].some(_=>_.contains(O));return b&&!F},[d.branches,b])}),P=Tu(O=>{if(r&&y.current)return;let F=O.target;[...d.branches].some(Y=>Y.contains(F))||(s?.(O),i?.(O),O.defaultPrevented||u?.())},p),E=f?v===L.length-1:!1,T=Ae(O=>{O.key==="Escape"&&(n?.(O),!O.defaultPrevented&&u&&(O.preventDefault(),u()))});return ie.useEffect(()=>{if(E)return p.addEventListener("keydown",T,{capture:!0}),()=>p.removeEventListener("keydown",T,{capture:!0})},[p,E,T]),ie.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(ku=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),gl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=ku))}},[f,p,o,d]),ie.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),gl())},[f,d]),ie.useEffect(()=>{let O=Te(()=>m({}),"handleUpdate");return document.addEventListener(ml,O),()=>document.removeEventListener(ml,O)},[]),(0,Du.jsx)(ee.div,{...c,ref:g,style:{pointerEvents:S?b?"auto":"none":void 0,...t.style},onFocusCapture:q(t.onFocusCapture,P.onFocusCapture),onBlurCapture:q(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:q(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function hl(){let e=ie.useContext(Mu),[t,a]=ie.useState(null);return ie.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Te(hl,"useDismissableLayerSurface");var Xg=Te(()=>!0,"IS_TRUE");function Au(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=Xg}=t,s=Ae(e),i=ie.useRef(!1),u=ie.useRef(!1),c=ie.useRef(new Map),d=ie.useRef(()=>{});return ie.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Te(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Te(h,"isOutsideInteractionIntercepted");function p(x){if(!u.current)return;let v=x.target;v instanceof Node&&[...n].some(b=>b.contains(v))||c.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Te(p,"handleInteractionCapture");function m(x){u.current&&c.current.set(x.type,!1)}Te(m,"handleInteractionBubble");let g=Te(x=>{if(x.target&&!i.current){let S=function(){a.removeEventListener("click",d.current);let y=h();f(),y||xl(Gg,s,b,{discrete:!0})};var v=S;if(Te(S,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:x};u.current=!0,r.current=o&&x.button===0,c.current.clear(),!o||x.button!==0?S():(a.removeEventListener("click",d.current),d.current=S,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),L=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let x of L)a.addEventListener(x,p,!0),a.addEventListener(x,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",g)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",g),a.removeEventListener("click",d.current);for(let x of L)a.removeEventListener(x,p,!0),a.removeEventListener(x,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Te(()=>i.current=!0,"onPointerDownCapture")}}Te(Au,"usePointerDownOutside");function Tu(e,t=globalThis?.document){let a=Ae(e),o=ie.useRef(!1);return ie.useEffect(()=>{let r=Te(n=>{n.target&&!o.current&&xl(zg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Te(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Te(()=>o.current=!1,"onBlurCapture")}}Te(Tu,"useFocusOutside");function gl(){let e=new CustomEvent(ml);document.dispatchEvent(e)}Te(gl,"dispatchUpdate");function xl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?tr(r,n):r.dispatchEvent(n)}Te(xl,"handleAndDispatchCustomEvent");var ft=H(require("react"),1);var Fu=require("react/jsx-runtime"),Kg=Object.defineProperty,Ke=(e,t)=>Kg(e,"name",{value:t,configurable:!0}),Ll="focusScope.autoFocusOnMount",Cl="focusScope.autoFocusOnUnmount",Eu={bubbles:!1,cancelable:!0},io=ft.forwardRef(Ke(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=ft.useState(null),c=Ae(n),d=Ae(l),f=ft.useRef(null),h=Q(a,u),p=ft.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ft.useEffect(()=>{if(r){let x=function(y){if(p.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Ht(f.current,{select:!0})},v=function(y){if(p.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Ht(f.current,{select:!0}))},S=function(y){if(document.activeElement===document.body)for(let P of y)P.removedNodes.length>0&&Ht(i)};var g=x,L=v,C=S;Ke(x,"handleFocusIn"),Ke(v,"handleFocusOut"),Ke(S,"handleMutations"),document.addEventListener("focusin",x),document.addEventListener("focusout",v);let b=new MutationObserver(S);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",v),b.disconnect()}}},[r,i,p.paused]),ft.useEffect(()=>{if(i){Ou.add(p);let g=document.activeElement;if(!i.contains(g)){let C=new CustomEvent(Ll,Eu);i.addEventListener(Ll,c),i.dispatchEvent(C),C.defaultPrevented||(Bu(Uu(bl(i)),{select:!0}),document.activeElement===g&&Ht(i))}return()=>{i.removeEventListener(Ll,c),setTimeout(()=>{let C=new CustomEvent(Cl,Eu);i.addEventListener(Cl,d),i.dispatchEvent(C),C.defaultPrevented||Ht(g??document.body,{select:!0}),i.removeEventListener(Cl,d),Ou.remove(p)},0)}}},[i,c,d,p]);let m=ft.useCallback(g=>{if(!o&&!r||p.paused)return;let L=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,C=document.activeElement;if(L&&C){let x=g.currentTarget,[v,S]=Nu(x);v&&S?!g.shiftKey&&C===S?(g.preventDefault(),o&&Ht(v,{select:!0})):g.shiftKey&&C===v&&(g.preventDefault(),o&&Ht(S,{select:!0})):C===x&&g.preventDefault()}},[o,r,p.paused]);return(0,Fu.jsx)(ee.div,{tabIndex:-1,...s,ref:h,onKeyDown:m})},"FocusScope"));function Bu(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Ht(o,{select:t}),document.activeElement!==a)return}Ke(Bu,"focusFirst");function Nu(e){let t=bl(e),a=vl(t,e),o=vl(t.reverse(),e);return[a,o]}Ke(Nu,"getTabbableEdges");function bl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ke(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Ke(bl,"getTabbableCandidates");function vl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):_u(o,{upTo:t})))return o}Ke(vl,"findVisible");function _u(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ke(_u,"isHidden");function Hu(e){return e instanceof HTMLInputElement&&"select"in e}Ke(Hu,"isSelectableInput");function Ht(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Hu(e)&&t&&e.select()}}Ke(Ht,"focus");var Ou=qu();function qu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Il(e,t),e.unshift(t)},remove(t){e=Il(e,t),e[0]?.resume()}}}Ke(qu,"createFocusScopesStack");function Il(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ke(Il,"arrayRemove");function Uu(e){return e.filter(t=>t.tagName!=="A")}Ke(Uu,"removeLinks");var Yr=H(require("react"),1),Wu=H(require("react-dom"),1);var Vu=require("react/jsx-runtime"),jg=Object.defineProperty,$g=(e,t)=>jg(e,"name",{value:t,configurable:!0}),uo=Yr.forwardRef($g(function(t,a){let{container:o,...r}=t,[n,l]=Yr.useState(!1);le(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Wu.createPortal((0,Vu.jsx)(ee.div,{...r,ref:a}),s):null},"Portal"));var _e=H(require("react"),1);var Gu=H(require("react"),1),Yg=Object.defineProperty,qt=(e,t)=>Yg(e,"name",{value:t,configurable:!0});function zu(e,t){return Gu.useReducer((a,o)=>t[a][o]??a,e)}qt(zu,"useStateMachine");var Ut=qt(e=>{let{present:t,children:a}=e,o=Xu(t),r=typeof a=="function"?a({present:o.isPresent}):_e.Children.only(a),n=Ku(o.ref,ju(r));return typeof a=="function"||o.isPresent?_e.cloneElement(r,{ref:n}):null},"Presence");function Xu(e){let[t,a]=_e.useState(),o=_e.useRef(null),r=_e.useRef(e),n=_e.useRef("none"),l=_e.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=zu(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _e.useEffect(()=>{i==="mounted"?(n.current=l.current??co(o.current),l.current=void 0):n.current="none"},[i]),le(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,p=co(c);e?(l.current=p,u("MOUNT")):p==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),le(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=qt(p=>{let g=co(o.current).includes(CSS.escape(p.animationName));if(p.target===t&&g&&(u("ANIMATION_END"),!r.current)){let L=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=L)})}},"handleAnimationEnd"),h=qt(p=>{p.target===t&&(n.current=co(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:_e.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=co(d)}else o.current=null;a(c)},[])}}qt(Xu,"usePresence");function Sl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}qt(Sl,"setRef");function Ku(...e){let t=_e.useRef(e);return t.current=e,_e.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=Sl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():Sl(o[l],null)}}},[])}qt(Ku,"useStableComposedRefs");function co(e){return e?.animationName||"none"}qt(co,"getAnimationName");function ju(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}qt(ju,"getElementRef");var $u=H(require("react"),1),Zg=Object.defineProperty,yl=(e,t)=>Zg(e,"name",{value:t,configurable:!0}),Zr=0,fo=null;function Qg(e){return oa(),e.children}yl(Qg,"FocusGuards");function oa(){$u.useEffect(()=>{fo||(fo={start:wl(),end:wl()});let{start:e,end:t}=fo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Zr++,()=>{Zr===1&&(fo?.start.remove(),fo?.end.remove(),fo=null),Zr=Math.max(0,Zr-1)}},[])}yl(oa,"useFocusGuards");function wl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}yl(wl,"createFocusGuard");var Ye=function(){return Ye=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ye.apply(this,arguments)};function Qr(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function Yu(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var on=H(require("react"));var Ge=H(require("react"));var va="right-scroll-bar-position",Ia="width-before-scroll-bar",Rl="with-scroll-bars-hidden",Pl="--removed-body-scroll-bar-size";function Jr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Zu=require("react");function Qu(e,t){var a=(0,Zu.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var en=H(require("react"));var Jg=typeof window<"u"?en.useLayoutEffect:en.useEffect,Ju=new WeakMap;function kl(e,t){var a=Qu(t||null,function(o){return e.forEach(function(r){return Jr(r,o)})});return Jg(function(){var o=Ju.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Jr(s,null)}),n.forEach(function(s){r.has(s)||Jr(s,l)})}Ju.set(a,e)},[e]),a}function eh(e){return e}function th(e,t){t===void 0&&(t=eh);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Dl(e){e===void 0&&(e={});var t=th(null);return t.options=Ye({async:!0,ssr:!1},e),t}var ed=H(require("react")),td=function(e){var t=e.sideCar,a=Qr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return ed.createElement(o,Ye({},a))};td.isSideCarExport=!0;function Ml(e,t){return e.useMedium(t),td}var tn=Dl();var Al=function(){},ar=Ge.forwardRef(function(e,t){var a=Ge.useRef(null),o=Ge.useState({onScrollCapture:Al,onWheelCapture:Al,onTouchMoveCapture:Al}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,p=e.noIsolation,m=e.inert,g=e.allowPinchZoom,L=e.as,C=L===void 0?"div":L,x=e.gapMode,v=Qr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=f,b=kl([a,t]),y=Ye(Ye({},v),r);return Ge.createElement(Ge.Fragment,null,c&&Ge.createElement(S,{sideCar:tn,removeScrollBar:u,shards:d,noRelative:h,noIsolation:p,inert:m,setCallbacks:n,allowPinchZoom:!!g,lockRef:a,gapMode:x}),l?Ge.cloneElement(Ge.Children.only(s),Ye(Ye({},y),{ref:b})):Ge.createElement(C,Ye({},y,{className:i,ref:b}),s))});ar.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ar.classNames={fullWidth:Ia,zeroRight:va};var pe=H(require("react"));var mo=H(require("react"));var rd=H(require("react"));var ad;var od=function(){if(ad)return ad;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ah(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=od();return t&&e.setAttribute("nonce",t),e}function oh(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function rh(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Tl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=ah())&&(oh(t,a),rh(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var El=function(){var e=Tl();return function(t,a){rd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var or=function(){var e=El(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var nh={left:0,top:0,right:0,gap:0},Ol=function(e){return parseInt(e||"",10)||0},lh=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Ol(a),Ol(o),Ol(r)]},Fl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nh;var t=lh(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var sh=or(),po="data-scroll-locked",ih=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Rl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(po,`] {
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
  
  .`).concat(va,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ia,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(va," .").concat(va,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ia," .").concat(Ia,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(po,`] {
    `).concat(Pl,": ").concat(s,`px;
  }
`)},nd=function(){var e=parseInt(document.body.getAttribute(po)||"0",10);return isFinite(e)?e:0},uh=function(){mo.useEffect(function(){return document.body.setAttribute(po,(nd()+1).toString()),function(){var e=nd()-1;e<=0?document.body.removeAttribute(po):document.body.setAttribute(po,e.toString())}},[])},Bl=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;uh();var n=mo.useMemo(function(){return Fl(r)},[r]);return mo.createElement(sh,{styles:ih(n,!t,r,a?"":"!important")})};var Nl=!1;if(typeof window<"u")try{rr=Object.defineProperty({},"passive",{get:function(){return Nl=!0,!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Nl=!1}var rr,ba=Nl?{passive:!1}:!1;var dh=function(e){return e.tagName==="TEXTAREA"},ld=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!dh(e)&&a[t]==="visible")},ch=function(e){return ld(e,"overflowY")},fh=function(e){return ld(e,"overflowX")},_l=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=sd(e,o);if(r){var n=id(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},ph=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},mh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},sd=function(e,t){return e==="v"?ch(t):fh(t)},id=function(e,t){return e==="v"?ph(t):mh(t)},gh=function(e,t){return e==="h"&&t==="rtl"?-1:1},ud=function(e,t,a,o,r){var n=gh(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var h=id(e,s),p=h[0],m=h[1],g=h[2],L=m-g-n*p;(p||L)&&sd(e,s)&&(d+=L,f+=p);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var an=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},dd=function(e){return[e.deltaX,e.deltaY]},cd=function(e){return e&&"current"in e?e.current:e},hh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xh=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Lh=0,go=[];function fd(e){var t=pe.useRef([]),a=pe.useRef([0,0]),o=pe.useRef(),r=pe.useState(Lh++)[0],n=pe.useState(or)[0],l=pe.useRef(e);pe.useEffect(function(){l.current=e},[e]),pe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=Yu([e.lockRef.current],(e.shards||[]).map(cd),!0).filter(Boolean);return m.forEach(function(g){return g.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=pe.useCallback(function(m,g){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var L=an(m),C=a.current,x="deltaX"in m?m.deltaX:C[0]-L[0],v="deltaY"in m?m.deltaY:C[1]-L[1],S,b=m.target,y=Math.abs(x)>Math.abs(v)?"h":"v";if("touches"in m&&y==="h"&&b.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,E=P?P===b||P.contains(b):!1;if(E)return!1;var T=_l(y,b);if(!T)return!0;if(T?S=y:(S=y==="v"?"h":"v",T=_l(y,b)),!T)return!1;if(!o.current&&"changedTouches"in m&&(x||v)&&(o.current=S),!S)return!0;var O=o.current||S;return ud(O,g,m,O==="h"?x:v,!0)},[]),i=pe.useCallback(function(m){var g=m;if(!(!go.length||go[go.length-1]!==n)){var L="deltaY"in g?dd(g):an(g),C=t.current.filter(function(S){return S.name===g.type&&(S.target===g.target||g.target===S.shadowParent)&&hh(S.delta,L)})[0];if(C&&C.should){g.cancelable&&g.preventDefault();return}if(!C){var x=(l.current.shards||[]).map(cd).filter(Boolean).filter(function(S){return S.contains(g.target)}),v=x.length>0?s(g,x[0]):!l.current.noIsolation;v&&g.cancelable&&g.preventDefault()}}},[]),u=pe.useCallback(function(m,g,L,C){var x={name:m,delta:g,target:L,should:C,shadowParent:Ch(L)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(v){return v!==x})},1)},[]),c=pe.useCallback(function(m){a.current=an(m),o.current=void 0},[]),d=pe.useCallback(function(m){u(m.type,dd(m),m.target,s(m,e.lockRef.current))},[]),f=pe.useCallback(function(m){u(m.type,an(m),m.target,s(m,e.lockRef.current))},[]);pe.useEffect(function(){return go.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,ba),document.addEventListener("touchmove",i,ba),document.addEventListener("touchstart",c,ba),function(){go=go.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,ba),document.removeEventListener("touchmove",i,ba),document.removeEventListener("touchstart",c,ba)}},[]);var h=e.removeScrollBar,p=e.inert;return pe.createElement(pe.Fragment,null,p?pe.createElement(n,{styles:xh(r)}):null,h?pe.createElement(Bl,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ch(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var pd=Ml(tn,fd);var md=on.forwardRef(function(e,t){return on.createElement(ar,Ye({},e,{ref:t,sideCar:pd}))});md.classNames=ar.classNames;var Sa=md;var vh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},ho=new WeakMap,rn=new WeakMap,nn={},Hl=0,gd=function(e){return e&&(e.host||gd(e.parentNode))},Ih=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=gd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},bh=function(e,t,a,o){var r=Ih(t,Array.isArray(e)?e:[e]);nn[a]||(nn[a]=new WeakMap);var n=nn[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var h=f.getAttribute(o),p=h!==null&&h!=="false",m=(ho.get(f)||0)+1,g=(n.get(f)||0)+1;ho.set(f,m),n.set(f,g),l.push(f),m===1&&p&&rn.set(f,!0),g===1&&f.setAttribute(a,"true"),p||f.setAttribute(o,"true")}catch(L){console.error("aria-hidden: cannot operate on ",f,L)}})};return c(t),s.clear(),Hl++,function(){l.forEach(function(d){var f=ho.get(d)-1,h=n.get(d)-1;ho.set(d,f),n.set(d,h),f||(rn.has(d)||d.removeAttribute(o),rn.delete(d)),h||d.removeAttribute(a)}),Hl--,Hl||(ho=new WeakMap,ho=new WeakMap,rn=new WeakMap,nn={})}},xo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||vh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),bh(o,r,a,"aria-hidden")):function(){return null}};var xe=require("react/jsx-runtime"),Sh=Object.defineProperty,pt=(e,t)=>Sh(e,"name",{value:t,configurable:!0}),Ul="Dialog",[hd,Vb]=Ne(Ul),[wh,Dt]=hd(Ul),xd=pt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=me.useRef(null),i=me.useRef(null),[u,c]=kt({prop:o,defaultProp:r??!1,onChange:n,caller:Ul}),[d,f]=me.useState(0),[h,p]=me.useState(0);return(0,xe.jsx)(wh,{scope:t,triggerRef:s,contentRef:i,contentId:ot(),titleId:ot(),descriptionId:ot(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:p,open:u,onOpenChange:c,onOpenToggle:me.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var Ld="DialogPortal",[yh,Cd]=hd(Ld,{forceMount:void 0}),vd=pt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Dt(Ld,t);return(0,xe.jsx)(yh,{scope:t,forceMount:a,children:me.Children.map(o,l=>(0,xe.jsx)(Ut,{present:a||n.open,children:(0,xe.jsx)(uo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),ql="DialogOverlay",Wl=me.forwardRef(pt(function(t,a){let o=Cd(ql,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Dt(ql,t.__scopeDialog);return l.modal?(0,xe.jsx)(Ut,{present:r||l.open,children:(0,xe.jsx)(Ph,{...n,ref:a})}):null},"DialogOverlay")),Rh=Ve("DialogOverlay.RemoveScroll"),Ph=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(ql,o),l=hl(),s=Q(a,l);return(0,xe.jsx)(Sa,{as:Rh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,xe.jsx)(ee.div,{"data-state":Xl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),nr="DialogContent",Vl=me.forwardRef(pt(function(t,a){let o=Cd(nr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Dt(nr,t.__scopeDialog);return(0,xe.jsx)(Ut,{present:r||l.open,children:l.modal?(0,xe.jsx)(kh,{...n,ref:a}):(0,xe.jsx)(Dh,{...n,ref:a})})},"DialogContent")),kh=me.forwardRef(pt(function(t,a){let o=Dt(nr,t.__scopeDialog),r=me.useRef(null),n=Q(a,o.contentRef,r);return me.useEffect(()=>{let l=r.current;if(l)return xo(l)},[]),(0,xe.jsx)(Id,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Dh=me.forwardRef(pt(function(t,a){let o=Dt(nr,t.__scopeDialog),r=me.useRef(!1),n=me.useRef(!1);return(0,xe.jsx)(Id,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Id=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Dt(nr,o);return oa(),(0,xe.jsx)(xe.Fragment,{children:(0,xe.jsx)(io,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,xe.jsx)(so,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Xl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Mh="DialogTitle",Gl=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Mh,o),{setTitleCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,xe.jsx)(ee.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Ah="DialogDescription",zl=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Ah,o),{setDescriptionCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,xe.jsx)(ee.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Th="DialogClose",bd=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Th,o);return(0,xe.jsx)(ee.button,{type:"button",...r,ref:a,onClick:q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Xl(e){return e?"open":"closed"}pt(Xl,"getState");var wd=require("react"),Kl="dsh-kanban",yd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Oh={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},wa=null,jl=null;function Rd(e){let t=e.get("locale");if(t!==void 0){wa=t;try{t.register(Kl,"zh",yd),t.register(Kl,"en",Oh)}catch{}jl=t.bind(Kl)}}function Lo(e){return jl?jl(e):yd[e]??e}var Fh=e=>wa&&typeof wa.subscribe=="function"?wa.subscribe(e):()=>{},Sd=()=>wa&&typeof wa.getSnapshot=="function"?wa.getSnapshot():null;function je(){return(0,wd.useSyncExternalStore)(Fh,Sd,Sd),Lo}var rt=require("react/jsx-runtime"),Co=xd;var Bh=vd;var Pd=lr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(Wl,{ref:a,className:J("kanban-portal kanban-dialog-overlay",e),...t}));Pd.displayName=Wl.displayName;var ya=lr.forwardRef(({className:e,children:t,...a},o)=>{let r=je();return(0,rt.jsxs)(Bh,{children:[(0,rt.jsx)(Pd,{}),(0,rt.jsxs)(Vl,{ref:o,className:J("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,rt.jsxs)(bd,{className:"kanban-dialog-close",children:[(0,rt.jsx)(Jo,{className:"kanban-dialog-close-icon"}),(0,rt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});ya.displayName=Vl.displayName;var Ra=({className:e,...t})=>(0,rt.jsx)("div",{className:J("kanban-dialog-header",e),...t});Ra.displayName="DialogHeader";var sr=({className:e,...t})=>(0,rt.jsx)("div",{className:J("kanban-dialog-footer",e),...t});sr.displayName="DialogFooter";var Pa=lr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(Gl,{ref:a,className:J("kanban-dialog-title",e),...t}));Pa.displayName=Gl.displayName;var ir=lr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(zl,{ref:a,className:J("kanban-dialog-description",e),...t}));ir.displayName=zl.displayName;var hr=H(require("react"),1);var wt=H(require("react"),1);var $=H(require("react"),1);var Ct=H(require("react"),1);var ln=require("react/jsx-runtime"),Ze=H(require("react"),1);var ka=require("react/jsx-runtime");var Nh=Object.defineProperty,Ee=(e,t)=>Nh(e,"name",{value:t,configurable:!0});function Da(e){let t=e+"CollectionProvider",[a,o]=Ne(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Ee(m=>{let{scope:g,children:L}=m,C=Ct.useRef(null),x=Ct.useRef(new Map).current;return(0,ln.jsx)(r,{scope:g,itemMap:x,collectionRef:C,children:L})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Ve(s),u=Ct.forwardRef((m,g)=>{let{scope:L,children:C}=m,x=n(s,L),v=Q(g,x.collectionRef);return(0,ln.jsx)(i,{ref:v,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Ve(c),h=Ct.forwardRef((m,g)=>{let{scope:L,children:C,...x}=m,v=Ct.useRef(null),S=Q(g,v),b=n(c,L);return Ct.useEffect(()=>(b.itemMap.set(v,{ref:v,...x}),()=>{b.itemMap.delete(v)})),(0,ln.jsx)(f,{[d]:"",ref:S,children:C})});h.displayName=c;function p(m){let g=n(e+"CollectionConsumer",m);return Ct.useCallback(()=>{let C=g.collectionRef.current;if(!C)return[];let x=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(g.itemMap.values()).sort((b,y)=>x.indexOf(b.ref.current)-x.indexOf(y.ref.current))},[g.collectionRef,g.itemMap])}return Ee(p,"useCollection"),[{Provider:l,Slot:u,ItemSlot:h},p,o]}Ee(Da,"createCollection");var kd=new WeakMap,we,nt,$l=(nt=class extends Map{constructor(a){super(a);ri(this,we);Vn(this,we,[...super.keys()]),kd.set(this,!0)}set(a,o){return kd.get(this)&&(this.has(a)?Ue(this,we)[Ue(this,we).indexOf(a)]=a:Ue(this,we).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=Ue(this,we).length,s=Zl(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...Ue(this,we)],f,h=!1;for(let p=i;p<c;p++)if(i===p){let m=d[p];d[p]===o&&(m=d[p+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!h&&d[p-1]===o&&(h=!0);let m=d[h?p:p-1],g=f;f=this.get(m),this.delete(m),this.set(m,g)}return this}with(a,o,r){let n=new nt(this);return n.insert(a,o,r),n}before(a){let o=Ue(this,we).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ue(this,we).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ue(this,we).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ue(this,we).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Vn(this,we,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ue(this,we).splice(Ue(this,we).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=sn(Ue(this,we),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=sn(Ue(this,we),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ue(this,we).indexOf(a)}keyAt(a){return sn(Ue(this,we),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new nt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new nt(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new nt(o)}toReversed(){let a=new nt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new nt(o)}slice(a,o){let r=new nt,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},we=new WeakMap,Ee(nt,"OrderedDict"),nt);function sn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Dd(e,t);return a===-1?void 0:e[a]}Ee(sn,"at");function Dd(e,t){let a=e.length,o=Zl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Ee(Dd,"toSafeIndex");function Zl(e){return e!==e||e===0?0:Math.trunc(e)}Ee(Zl,"toSafeInteger");function _h(e){let t=e+"CollectionProvider",[a,o]=Ne(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new $l,setItemMap:Ee(()=>{},"setItemMap")}),l=Ee(({state:x,...v})=>x?(0,ka.jsx)(i,{...v,state:x}):(0,ka.jsx)(s,{...v}),"CollectionProvider");l.displayName=t;let s=Ee(x=>{let v=g();return(0,ka.jsx)(i,{...x,state:v})},"CollectionInit");s.displayName=t+"Init";let i=Ee(x=>{let{scope:v,children:S,state:b}=x,y=Ze.useRef(null),[R,P]=Ze.useState(null),E=Q(y,P),[T,O]=b;return Ze.useEffect(()=>{if(!R)return;let F=Td(()=>{});return F.observe(R,{childList:!0,subtree:!0}),()=>{F.disconnect()}},[R]),(0,ka.jsx)(r,{scope:v,itemMap:T,setItemMap:O,collectionRef:E,collectionRefObject:y,collectionElement:R,children:S})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Ve(u),d=Ze.forwardRef((x,v)=>{let{scope:S,children:b}=x,y=n(u,S),R=Q(v,y.collectionRef);return(0,ka.jsx)(c,{ref:R,children:b})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",p=Ve(f),m=Ze.forwardRef((x,v)=>{let{scope:S,children:b,...y}=x,R=Ze.useRef(null),[P,E]=Ze.useState(null),T=Q(v,R,E),O=n(f,S),{setItemMap:F}=O,_=Ze.useRef(y);Md(_.current,y)||(_.current=y);let Y=_.current;return Ze.useEffect(()=>{let K=Y;return F(N=>P?N.has(P)?N.set(P,{...K,element:P}).toSorted(Yl):(N.set(P,{...K,element:P}),N.toSorted(Yl)):N),()=>{F(N=>!P||!N.has(P)?N:(N.delete(P),new $l(N)))}},[P,Y,F]),(0,ka.jsx)(p,{[h]:"",ref:T,children:b})});m.displayName=f;function g(){return Ze.useState(new $l)}Ee(g,"useInitCollection");function L(x){let{itemMap:v}=n(e+"CollectionConsumer",x);return v}return Ee(L,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:L,useInitCollection:g}]}Ee(_h,"createCollection");function Md(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ee(Md,"shallowEqual");function Ad(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ee(Ad,"isElementPreceding");function Yl(e,t){return!e[1].element||!t[1].element?0:Ad(e[1].element,t[1].element)?-1:1}Ee(Yl,"sortByDocumentPosition");function Td(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Ee(Td,"getChildListObserver");var un=H(require("react"),1),Uh=require("react/jsx-runtime"),Hh=Object.defineProperty,qh=(e,t)=>Hh(e,"name",{value:t,configurable:!0}),Wh=un.createContext(void 0);function Ma(e){let t=un.useContext(Wh);return e||t||"ltr"}qh(Ma,"useDirection");var ze=H(require("react"),1);var Fd=["top","right","bottom","left"];var Mt=Math.min,vt=Math.max,dr=Math.round,cr=Math.floor,At=e=>({x:e,y:e}),Vh={left:"right",right:"left",bottom:"top",top:"bottom"};function Ql(e,t,a){return vt(e,Mt(t,a))}function Tt(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function Aa(e){return e.split("-")[1]}function cn(e){return e==="x"?"y":"x"}function fn(e){return e==="y"?"height":"width"}function It(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function pn(e){return cn(It(e))}function Bd(e,t,a){a===void 0&&(a=!1);let o=Aa(e),r=pn(e),n=fn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=ur(l)),[l,ur(l)]}function Nd(e){let t=ur(e);return[dn(e),t,dn(t)]}function dn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Ed=["left","right"],Od=["right","left"],Gh=["top","bottom"],zh=["bottom","top"];function Xh(e,t,a){switch(e){case"top":case"bottom":return a?t?Od:Ed:t?Ed:Od;case"left":case"right":return t?Gh:zh;default:return[]}}function _d(e,t,a,o){let r=Aa(e),n=Xh(Wt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(dn)))),n}function ur(e){let t=Wt(e);return Vh[t]+e.slice(t.length)}function Kh(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Jl(e){return typeof e!="number"?Kh(e):{top:e,right:e,bottom:e,left:e}}function Ta(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Hd(e,t,a){let{reference:o,floating:r}=e,n=It(t),l=pn(t),s=fn(l),i=Wt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let p=Aa(t);return p&&(h[l]+=f*(p==="end"?1:-1)*(a&&u?-1:1)),h}async function Wd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Tt(t,e),p=Jl(h),g=s[f?d==="floating"?"reference":"floating":d],L=Ta(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(g)))==null||a?g:g.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),v=await(n.isElement==null?void 0:n.isElement(x))&&await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1},S=Ta(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:x,strategy:i}):C);return{top:(L.top-S.top+p.top)/v.y,bottom:(S.bottom-L.bottom+p.bottom)/v.y,left:(L.left-S.left+p.left)/v.x,right:(S.right-L.right+p.right)/v.x}}var jh=50,Vd=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Wd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Hd(u,o,i),f=o,h=0,p={};for(let m=0;m<n.length;m++){let g=n[m];if(!g)continue;let{name:L,fn:C}=g,{x,y:v,data:S,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});c=x??c,d=v??d,p[L]={...p[L],...S},b&&h<jh&&(h++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=Hd(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:p}},Gd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Tt(e,t)||{};if(u==null)return{};let d=Jl(c),f={x:a,y:o},h=pn(r),p=fn(h),m=await l.getDimensions(u),g=h==="y",L=g?"top":"left",C=g?"bottom":"right",x=g?"clientHeight":"clientWidth",v=n.reference[p]+n.reference[h]-f[h]-n.floating[p],S=f[h]-n.reference[h],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=b?b[x]:0;(!y||!await(l.isElement==null?void 0:l.isElement(b)))&&(y=s.floating[x]||n.floating[p]);let R=v/2-S/2,P=y/2-m[p]/2-1,E=Mt(d[L],P),T=Mt(d[C],P),O=y-m[p]-T,F=y/2-m[p]/2+R,_=Ql(E,F,O),Y=!i.arrow&&Aa(r)!=null&&F!==_&&n.reference[p]/2-(F<E?E:T)-m[p]/2<0,K=Y?F<E?F-E:F-O:0;return{[h]:f[h]+K,data:{[h]:_,centerOffset:F-_-K,...Y&&{alignmentOffset:K}},reset:Y}}});var zd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=Tt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let L=Wt(r),C=It(s),x=Wt(s)===s,v=await(i.isRTL==null?void 0:i.isRTL(u.floating)),S=f||(x||!m?[ur(s)]:Nd(s)),b=p!=="none";!f&&b&&S.push(..._d(s,m,p,v));let y=[s,...S],R=await i.detectOverflow(t,g),P=[],E=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[L]),d){let _=Bd(r,l,v);P.push(R[_[0]],R[_[1]])}if(E=[...E,{placement:r,overflows:P}],!P.every(_=>_<=0)){var T,O;let _=(((T=n.flip)==null?void 0:T.index)||0)+1,Y=y[_];if(Y&&(!(d==="alignment"?C!==It(Y):!1)||E.every(W=>It(W.placement)===C?W.overflows[0]>0:!0)))return{data:{index:_,overflows:E},reset:{placement:Y}};let K=(O=E.filter(N=>N.overflows[0]<=0).sort((N,W)=>N.overflows[1]-W.overflows[1])[0])==null?void 0:O.placement;if(!K)switch(h){case"bestFit":{var F;let N=(F=E.filter(W=>{if(b){let V=It(W.placement);return V===C||V==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(V=>V>0).reduce((V,A)=>V+A,0)]).sort((W,V)=>W[1]-V[1])[0])==null?void 0:F[0];N&&(K=N);break}case"initialPlacement":K=s;break}if(r!==K)return{reset:{placement:K}}}return{}}}};function qd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ud(e){return Fd.some(t=>e[t]>=0)}var Xd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Tt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=qd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ud(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=qd(l,a.floating);return{data:{escapedOffsets:s,escaped:Ud(s)}}}default:return{}}}}};var Kd=new Set(["left","top"]);async function $h(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Wt(a),s=Aa(a),i=It(a)==="y",u=Kd.has(l)?-1:1,c=n&&i?-1:1,d=Tt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof p=="number"&&(h=s==="end"?p*-1:p),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var jd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await $h(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},$d=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x,y:v}=C;return{x,y:v}}},...u}=Tt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=It(r),h=cn(f),p=c[h],m=c[f],g=(C,x)=>Ql(x+d[C==="y"?"top":"left"],x,x-d[C==="y"?"bottom":"right"]);l&&(p=g(h,p)),s&&(m=g(f,m));let L=i.fn({...t,[h]:p,[f]:m});return{...L,data:{x:L.x-a,y:L.y-o,enabled:{[h]:l,[f]:s}}}}}},Yd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Tt(e,t),f={x:r,y:n},h=It(l),p=cn(h),m=f[p],g=f[h],L=Tt(u,t),C=typeof L=="number"?{mainAxis:L,crossAxis:0}:{mainAxis:(a=L.mainAxis)!=null?a:0,crossAxis:(o=L.crossAxis)!=null?o:0};if(c){let S=p==="y"?"height":"width",b=s.reference[p]-s.floating[S]+C.mainAxis,y=s.reference[p]+s.reference[S]-C.mainAxis;m<b?m=b:m>y&&(m=y)}if(d){var x,v;let S=p==="y"?"width":"height",b=Kd.has(Wt(l)),y=s.reference[h]-s.floating[S]+(b&&((x=i.offset)==null?void 0:x[h])||0)+(b?0:C.crossAxis),R=s.reference[h]+s.reference[S]+(b?0:((v=i.offset)==null?void 0:v[h])||0)-(b?C.crossAxis:0);g<y?g=y:g>R&&(g=R)}return{[p]:m,[h]:g}}}},Zd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Tt(e,t),i=await r.detectOverflow(t,s),u=Wt(a),c=Aa(a),d=It(a)==="y",{width:f,height:h}=o.floating,p,m;u==="top"||u==="bottom"?(p=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,p=c==="end"?"top":"bottom");let g=h-i.top-i.bottom,L=f-i.left-i.right,C=Mt(h-i[p],g),x=Mt(f-i[m],L),v=t.middlewareData.shift,S=!v,b=C,y=x;v!=null&&v.enabled.x&&(y=L),v!=null&&v.enabled.y&&(b=g),S&&!c&&(d?y=f-2*vt(i.left,i.right):b=h-2*vt(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:b});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function mn(){return typeof window<"u"}function Fa(e){return Jd(e)?(e.nodeName||"").toLowerCase():"#document"}function $e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Et(e){var t;return(t=(Jd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Jd(e){return mn()?e instanceof Node||e instanceof $e(e).Node:!1}function bt(e){return mn()?e instanceof Element||e instanceof $e(e).Element:!1}function Vt(e){return mn()?e instanceof HTMLElement||e instanceof $e(e).HTMLElement:!1}function Qd(e){return!mn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $e(e).ShadowRoot}function fr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=St(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function ec(e){return/^(table|td|th)$/.test(Fa(e))}function pr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Yh=/transform|translate|scale|rotate|perspective|filter/,Zh=/paint|layout|strict|content/,Ea=e=>!!e&&e!=="none",es;function gn(e){let t=bt(e)?St(e):e;return Ea(t.transform)||Ea(t.translate)||Ea(t.scale)||Ea(t.rotate)||Ea(t.perspective)||!hn()&&(Ea(t.backdropFilter)||Ea(t.filter))||Yh.test(t.willChange||"")||Zh.test(t.contain||"")}function tc(e){let t=ra(e);for(;Vt(t)&&!vo(t);){if(gn(t))return t;if(pr(t))return null;t=ra(t)}return null}function hn(){return es==null&&(es=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),es}function vo(e){return/^(html|body|#document)$/.test(Fa(e))}function St(e){return $e(e).getComputedStyle(e)}function mr(e){return bt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ra(e){if(Fa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Qd(e)&&e.host||Et(e);return Qd(t)?t.host:t}function ac(e){let t=ra(e);return vo(t)?(e.ownerDocument||e).body:Vt(t)&&fr(t)?t:ac(t)}function Oa(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=ac(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=$e(r);if(n){let s=xn(l);return t.concat(l,l.visualViewport||[],fr(r)?r:[],s&&a?Oa(s):[])}else return t.concat(r,Oa(r,[],a))}function xn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nc(e){let t=St(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Vt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=dr(a)!==n||dr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function as(e){return bt(e)?e:e.contextElement}function Io(e){let t=as(e);if(!Vt(t))return At(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=nc(t),l=(n?dr(a.width):a.width)/o,s=(n?dr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var Qh=At(0);function lc(e){let t=$e(e);return!hn()||!t.visualViewport?Qh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Jh(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===$e(e)}function Ba(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=as(e),l=At(1);t&&(o?bt(o)&&(l=Io(o)):l=Io(e));let s=Jh(n,a,o)?lc(n):At(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=$e(n),h=bt(o)?$e(o):o,p=f,m=xn(p);for(;m&&h!==p;){let g=Io(m),L=m.getBoundingClientRect(),C=St(m),x=L.left+(m.clientLeft+parseFloat(C.paddingLeft))*g.x,v=L.top+(m.clientTop+parseFloat(C.paddingTop))*g.y;i*=g.x,u*=g.y,c*=g.x,d*=g.y,i+=x,u+=v,p=$e(m),m=xn(p)}}return Ta({width:c,height:d,x:i,y:u})}function Ln(e,t){let a=mr(e).scrollLeft;return t?t.left+a:Ba(Et(e)).left+a}function sc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-Ln(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function ex(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Et(o),s=t?pr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=At(1),c=At(0),d=Vt(o);if((d||!n)&&((Fa(o)!=="body"||fr(l))&&(i=mr(o)),d)){let h=Ba(o);u=Io(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=l&&!d&&!n?sc(l,i):At(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function tx(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ax(e){let t=mr(e),a=e.ownerDocument.body,o=vt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=vt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+Ln(e),l=-t.scrollTop;return St(a).direction==="rtl"&&(n+=vt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var ox=25;function rx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=$e(e),n=Et(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!hn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(Ln(n)<=0){let f=n.ownerDocument,h=f.body,p=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,g=Math.abs(n.clientWidth-h.clientWidth-m),L=getComputedStyle(n).scrollbarGutter==="stable both-edges"?g/2:g;L<=ox&&(s-=L)}return{width:s,height:i,x:u,y:c}}function nx(e,t){let a=Ba(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Io(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function oc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=rx(e,a,t);else if(t==="document")o=ax(Et(e));else if(bt(t))o=nx(t,a);else{let r=lc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ta(o)}function lx(e,t){let a=t.get(e);if(a)return a;let o=Oa(e,[],!1).filter(s=>bt(s)&&Fa(s)!=="body"),r=null,n=St(e).position==="fixed",l=n?ra(e):e;for(;bt(l)&&!vo(l);){let s=St(l),i=gn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=ra(l)}return t.set(e,o),o}function sx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?pr(t)?[]:lx(t,this._c):[].concat(a),o],s=oc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let h=oc(t,l[f],r);i=vt(h.top,i),u=Mt(h.right,u),c=Mt(h.bottom,c),d=vt(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function ix(e){let{width:t,height:a}=nc(e);return{width:t,height:a}}function ux(e,t,a){let o=Vt(t),r=Et(t),n=a==="fixed",l=Ba(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=At(0);if((o||!n)&&((Fa(t)!=="body"||fr(r))&&(s=mr(t)),o)){let f=Ba(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=Ln(r));let u=r&&!o&&!n?sc(r,s):At(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function ts(e){return St(e).position==="static"}function rc(e,t){if(!Vt(e)||St(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Et(e)===a&&(a=a.ownerDocument.body),a}function ic(e,t){let a=$e(e);if(pr(e))return a;if(!Vt(e)){let r=ra(e);for(;r&&!vo(r);){if(bt(r)&&!ts(r))return r;r=ra(r)}return a}let o=rc(e,t);for(;o&&ec(o)&&ts(o);)o=rc(o,t);return o&&vo(o)&&ts(o)&&!gn(o)?a:o||tc(e)||a}var dx=async function(e){let t=this.getOffsetParent||ic,a=this.getDimensions,o=await a(e.floating);return{reference:ux(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function cx(e){return St(e).direction==="rtl"}var uc={convertOffsetParentRelativeRectToViewportRelativeRect:ex,getDocumentElement:Et,getClippingRect:sx,getOffsetParent:ic,getElementRects:dx,getClientRects:tx,getDimensions:ix,getScale:Io,isElement:bt,isRTL:cx};function dc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function fx(e,t,a){let o=null,r,n=Et(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:h,top:p,width:m,height:g}=f;if(c||t(),!m||!g)return;let L=cr(p),C=cr(n.clientWidth-(h+m)),x=cr(n.clientHeight-(p+g)),v=cr(h),b={rootMargin:-L+"px "+-C+"px "+-x+"px "+-v+"px",threshold:vt(0,Mt(1,d))||1},y=!0;function R(P){let E=P[0].intersectionRatio;if(!dc(f,e.getBoundingClientRect()))return s();if(E!==d){if(!y)return s();E?s(!1,E):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(e)}let i=$e(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function os(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=as(e),c=r||n?[...u?Oa(u):[],...t?Oa(t):[]]:[];c.forEach(L=>{r&&L.addEventListener("scroll",a),n&&L.addEventListener("resize",a)});let d=u&&s?fx(u,a,n):null,f=-1,h=null;l&&(h=new ResizeObserver(L=>{let[C]=L;C&&C.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let p,m=i?Ba(e):null;i&&g();function g(){let L=Ba(e);m&&!dc(m,L)&&a(),m=L,p=requestAnimationFrame(g)}return a(),()=>{var L;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(L=h)==null||L.disconnect(),h=null,i&&cancelAnimationFrame(p)}}var cc=jd;var fc=$d,pc=zd,mc=Zd,gc=Xd,rs=Gd;var hc=Yd,ns=(e,t,a)=>{let o=new Map,r=a??{},n={...uc,...r.platform,_c:o};return Vd(e,t,{...r,platform:n})};var ye=H(require("react"),1),Lc=require("react"),Cc=H(require("react-dom"),1),px=typeof document<"u",mx=function(){},Cn=px?Lc.useLayoutEffect:mx;function vn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!vn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!vn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function vc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function xc(e,t){let a=vc(e);return Math.round(t*a)/a}function ls(e){let t=ye.useRef(e);return Cn(()=>{t.current=e}),t}function Ic(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=ye.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=ye.useState(o);vn(f,o)||h(o);let[p,m]=ye.useState(null),[g,L]=ye.useState(null),C=ye.useCallback(W=>{W!==b.current&&(b.current=W,m(W))},[]),x=ye.useCallback(W=>{W!==y.current&&(y.current=W,L(W))},[]),v=n||p,S=l||g,b=ye.useRef(null),y=ye.useRef(null),R=ye.useRef(c),P=i!=null,E=ls(i),T=ls(r),O=ls(u),F=ye.useCallback(()=>{if(!b.current||!y.current)return;let W={placement:t,strategy:a,middleware:f};T.current&&(W.platform=T.current),ns(b.current,y.current,W).then(V=>{let A={...V,isPositioned:O.current!==!1};_.current&&!vn(R.current,A)&&(R.current=A,Cc.flushSync(()=>{d(A)}))})},[f,t,a,T,O]);Cn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(W=>({...W,isPositioned:!1})))},[u]);let _=ye.useRef(!1);Cn(()=>(_.current=!0,()=>{_.current=!1}),[]),Cn(()=>{if(v&&(b.current=v),S&&(y.current=S),v&&S){if(E.current)return E.current(v,S,F);F()}},[v,S,F,E,P]);let Y=ye.useMemo(()=>({reference:b,floating:y,setReference:C,setFloating:x}),[C,x]),K=ye.useMemo(()=>({reference:v,floating:S}),[v,S]),N=ye.useMemo(()=>{let W={position:a,left:0,top:0};if(!K.floating)return W;let V=xc(K.floating,c.x),A=xc(K.floating,c.y);return s?{...W,transform:"translate("+V+"px, "+A+"px)",...vc(K.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:V,top:A}},[a,s,K.floating,c.x,c.y]);return ye.useMemo(()=>({...c,update:F,refs:Y,elements:K,floatingStyles:N}),[c,F,Y,K,N])}var gx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?rs({element:o.current,padding:r}).fn(a):{}:o?rs({element:o,padding:r}).fn(a):{}}}},bc=(e,t)=>{let a=cc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Sc=(e,t)=>{let a=fc(e);return{name:a.name,fn:a.fn,options:[e,t]}},wc=(e,t)=>({fn:hc(e).fn,options:[e,t]}),yc=(e,t)=>{let a=pc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Rc=(e,t)=>{let a=mc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Pc=(e,t)=>{let a=gc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var kc=(e,t)=>{let a=gx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Dc=H(require("react"),1);var hx=Object.defineProperty,xx=(e,t)=>hx(e,"name",{value:t,configurable:!0});function ss(e){let[t,a]=Dc.useState(void 0);return le(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}xx(ss,"useSize");var bo=require("react/jsx-runtime"),Lx=Object.defineProperty,na=(e,t)=>Lx(e,"name",{value:t,configurable:!0});var Mc="Popper",[Ac,So]=Ne(Mc),[Cx,Tc]=Ac(Mc),vx=na(e=>{let{__scopePopper:t,children:a}=e,[o,r]=ze.useState(null),[n,l]=ze.useState(void 0);return(0,bo.jsx)(Cx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Ix="PopperAnchor",bx=ze.forwardRef(na(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Tc(Ix,o),s=ze.useRef(null),i=l.onAnchorChange,u=ze.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=Q(a,u),d=ze.useRef(null);ze.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&In(l.placementState),h=f?.[0],p=f?.[1];return r?null:(0,bo.jsx)(ee.div,{"data-radix-popper-side":h,"data-radix-popper-align":p,...n,ref:c})},"PopperAnchor")),Ec="PopperContent",[Sx,TS]=Ac(Ec),wx=ze.forwardRef(na(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:m,...g}=t,L=Tc(Ec,o),[C,x]=ze.useState(null),v=Q(a,x),[S,b]=ze.useState(null),y=ss(S),R=y?.width??0,P=y?.height??0,E=r+(l!=="center"?"-"+l:""),T=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(c)?c:[c],F=O.length>0,_={padding:T,boundary:O.filter(Oc),altBoundary:F},{refs:Y,floatingStyles:K,placement:N,isPositioned:W,middlewareData:V}=Ic({strategy:"fixed",placement:E,whileElementsMounted:na((...D)=>os(...D,{animationFrame:p==="always"}),"whileElementsMounted"),elements:{reference:L.anchor},middleware:[bc({mainAxis:n+P,alignmentAxis:s}),u&&Sc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?wc():void 0,..._}),u&&yc({..._}),Rc({..._,apply:na(({elements:D,rects:k,availableWidth:B,availableHeight:j})=>{let{width:z,height:te}=k.reference,se=D.floating.style;se.setProperty("--radix-popper-available-width",`${B}px`),se.setProperty("--radix-popper-available-height",`${j}px`),se.setProperty("--radix-popper-anchor-width",`${z}px`),se.setProperty("--radix-popper-anchor-height",`${te}px`)},"apply")}),S&&kc({element:S,padding:i}),yx({arrowWidth:R,arrowHeight:P}),h&&Pc({strategy:"referenceHidden",..._,boundary:F?_.boundary:void 0})]}),A=L.setPlacementState;le(()=>(A(N),()=>{A(void 0)}),[N,A]);let[re,Z]=In(N),ne=Ae(m);le(()=>{W&&ne?.()},[W,ne]);let he=V.arrow?.x,be=V.arrow?.y,ge=V.arrow?.centerOffset!==0,[Se,I]=ze.useState();return le(()=>{C&&I(window.getComputedStyle(C).zIndex)},[C]),(0,bo.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:W?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Se,"--radix-popper-transform-origin":[V.transformOrigin?.x,V.transformOrigin?.y].join(" "),...V.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,bo.jsx)(Sx,{scope:o,placedSide:re,placedAlign:Z,onArrowChange:b,arrowX:he,arrowY:be,shouldHideArrow:ge,children:(0,bo.jsx)(ee.div,{"data-side":re,"data-align":Z,...g,ref:v,style:{...g.style,animation:W?g.style?.animation:"none"}})})})},"PopperContent"));function Oc(e){return e!==null}na(Oc,"isNotNull");var yx=na(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=In(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,h=(r.arrow?.y??0)+i/2,p="",m="";return u==="bottom"?(p=l?d:`${f}px`,m=`${-i}px`):u==="top"?(p=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(p=`${-i}px`,m=l?d:`${h}px`):u==="left"&&(p=`${o.floating.width+i}px`,m=l?d:`${h}px`),{data:{x:p,y:m}}}}),"transformOrigin");function In(e){let[t,a="center"]=e.split("-");return[t,a]}na(In,"getSideAndAlignFromPlacement");var bn=vx,Sn=bx,wn=wx;var Oe=H(require("react"),1);var Px=H(require("react"),1),yn=H(require("react"),1),Rx=Object.defineProperty,us=(e,t)=>Rx(e,"name",{value:t,configurable:!0}),is=!1;function Bc(){let[e,t]=yn.useState(is);return yn.useEffect(()=>{is||(is=!0,t(!0))},[]),e}us(Bc,"useIsHydrated");var Nc=Px[" useSyncExternalStore ".trim().toString()];function _c(){return()=>{}}us(_c,"subscribe");function Hc(){return Nc(_c,()=>!0,()=>!1)}us(Hc,"useIsHydratedModern");var qc=typeof Nc=="function"?Hc:Bc;var la=require("react/jsx-runtime"),kx=Object.defineProperty,Na=(e,t)=>kx(e,"name",{value:t,configurable:!0}),ds="rovingFocusGroup.onEntryFocus",Dx={bubbles:!1,cancelable:!0},Rn="RovingFocusGroup",[cs,Uc,Mx]=Da(Rn),[Ax,fs]=Ne(Rn,[Mx]),[Tx,Ex]=Ax(Rn),Ox=Oe.forwardRef(Na(function(t,a){return(0,la.jsx)(cs.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,la.jsx)(cs.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,la.jsx)(Fx,{...t,ref:a})})})},"RovingFocusGroup")),Fx=Oe.forwardRef(Na(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=Oe.useRef(null),p=Q(a,h),m=Ma(l),[g,L]=kt({prop:s,defaultProp:i??null,onChange:u,caller:Rn}),[C,x]=Oe.useState(!1),v=Ae(c),S=Uc(o),b=Oe.useRef(!1),[y,R]=Oe.useState(0);return Oe.useEffect(()=>{let P=h.current;if(P)return P.addEventListener(ds,v),()=>P.removeEventListener(ds,v)},[v]),(0,la.jsx)(Tx,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:g,onItemFocus:Oe.useCallback(P=>L(P),[L]),onItemShiftTab:Oe.useCallback(()=>x(!0),[]),onFocusableItemAdd:Oe.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:Oe.useCallback(()=>R(P=>P-1),[]),children:(0,la.jsx)(ee.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:p,style:{outline:"none",...t.style},onMouseDown:q(t.onMouseDown,()=>{b.current=!0}),onFocus:q(t.onFocus,P=>{let E=!b.current;if(P.target===P.currentTarget&&E&&!C){let T=new CustomEvent(ds,Dx);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){let O=S().filter(N=>N.focusable),F=O.find(N=>N.active),_=O.find(N=>N.id===g),K=[F,_,...O].filter(Boolean).map(N=>N.ref.current);ps(K,d)}}b.current=!1}),onBlur:q(t.onBlur,()=>x(!1))})})},"RovingFocusGroupImpl")),Bx="RovingFocusGroupItem",Nx=Oe.forwardRef(Na(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=ot(),c=l||u,d=Ex(Bx,o),f=d.currentTabStopId===c,h=Uc(o),{onFocusableItemAdd:p,onFocusableItemRemove:m,currentTabStopId:g}=d,L=qc();return le(()=>{if(!(!L||!r))return p(),()=>m()},[L,r,p,m]),Oe.useEffect(()=>{if(!(L||!r))return p(),()=>m()},[L,r,p,m]),(0,la.jsx)(cs.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,la.jsx)(ee.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:q(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:q(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:q(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let x=Vc(C,d.orientation,d.dir);if(x!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let S=h().filter(b=>b.focusable).map(b=>b.ref.current);if(x==="last")S.reverse();else if(x==="prev"||x==="next"){x==="prev"&&S.reverse();let b=S.indexOf(C.currentTarget);S=d.loop?Gc(S,b+1):S.slice(b+1)}setTimeout(()=>ps(S))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:g!=null}):s})})},"RovingFocusGroupItem")),_x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Wc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Na(Wc,"getDirectionAwareKey");function Vc(e,t,a){let o=Wc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return _x[o]}Na(Vc,"getFocusIntent");function ps(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Na(ps,"focusFirst");function Gc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Na(Gc,"wrapArray");var zc=Ox,Xc=Nx;var ue=require("react/jsx-runtime"),Ux=Object.defineProperty,de=(e,t)=>Ux(e,"name",{value:t,configurable:!0}),ms=["Enter"," "],Wx=["ArrowDown","PageUp","Home"],jc=["ArrowUp","PageDown","End"],Vx=[...Wx,...jc],iw={ltr:[...ms,"ArrowRight"],rtl:[...ms,"ArrowLeft"]};var kn="Menu",[gs,Gx,zx]=Da(kn),[_a,xs]=Ne(kn,[zx,So,fs]),Ls=So(),$c=fs(),[Xx,gr]=_a(kn),[Kx,Cs]=_a(kn),jx=de(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Ls(t),[i,u]=$.useState(null),c=$.useRef(!1),d=Ae(n),f=Ma(r);return $.useEffect(()=>{let h=de(()=>{c.current=!0,document.addEventListener("pointerdown",p,{capture:!0,once:!0}),document.addEventListener("pointermove",p,{capture:!0,once:!0})},"handleKeyDown"),p=de(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",p,{capture:!0}),document.removeEventListener("pointermove",p,{capture:!0})}},[]),$.useEffect(()=>{if(!a)return;let h=de(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,ue.jsx)(bn,{...s,children:(0,ue.jsx)(Xx,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,ue.jsx)(Kx,{scope:t,onClose:$.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),$x=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t,n=Ls(o);return(0,ue.jsx)(Sn,{...n,...r,ref:a})},"MenuAnchor")),Yc="MenuPortal",[Yx,Zx]=_a(Yc,{forceMount:void 0}),Qx=de(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=gr(Yc,t);return(0,ue.jsx)(Yx,{scope:t,forceMount:a,children:(0,ue.jsx)(Ut,{present:a||n.open,children:(0,ue.jsx)(uo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),sa="MenuContent",[Jx,Zc]=_a(sa),eL=$.forwardRef(de(function(t,a){let o=Zx(sa,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=gr(sa,t.__scopeMenu),s=Cs(sa,t.__scopeMenu);return(0,ue.jsx)(gs.Provider,{scope:t.__scopeMenu,children:(0,ue.jsx)(Ut,{present:r||l.open,children:(0,ue.jsx)(gs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,ue.jsx)(tL,{...n,ref:a}):(0,ue.jsx)(aL,{...n,ref:a})})})})},"MenuContent")),tL=$.forwardRef(de(function(t,a){let o=gr(sa,t.__scopeMenu),r=$.useRef(null),n=Q(a,r);return $.useEffect(()=>{let l=r.current;if(l)return xo(l)},[]),(0,ue.jsx)(Qc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),aL=$.forwardRef(de(function(t,a){let o=gr(sa,t.__scopeMenu);return(0,ue.jsx)(Qc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),oL=Ve("MenuContent.ScrollLock"),Qc=$.forwardRef(de(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,disableOutsideScroll:m,...g}=t,L=gr(sa,o),C=Cs(sa,o),x=Ls(o),v=$c(o),S=Gx(o),[b,y]=$.useState(null),R=$.useRef(null),P=Q(a,R,L.onContentChange),E=$.useRef(0),T=$.useRef(""),O=$.useRef(0),F=$.useRef(null),_=$.useRef("right"),Y=$.useRef(0),K=m?Sa:$.Fragment,N=m?{as:oL,allowPinchZoom:!0}:void 0,W=de(A=>{let re=T.current+A,Z=S().filter(I=>!I.disabled),ne=document.activeElement,he=Z.find(I=>I.ref.current===ne)?.textValue,be=Z.map(I=>I.textValue),ge=of(be,re,he),Se=Z.find(I=>I.textValue===ge)?.ref.current;de((function I(D){T.current=D,window.clearTimeout(E.current),D!==""&&(E.current=window.setTimeout(()=>I(""),1e3))}),"updateSearch")(re),Se&&setTimeout(()=>Se.focus())},"handleTypeaheadSearch");$.useEffect(()=>()=>window.clearTimeout(E.current),[]),oa();let V=$.useCallback(A=>_.current===F.current?.side&&nf(A,F.current?.area),[]);return(0,ue.jsx)(Jx,{scope:o,searchRef:T,onItemEnter:$.useCallback(A=>{V(A)&&A.preventDefault()},[V]),onItemLeave:$.useCallback(A=>{V(A)||(R.current?.focus(),y(null))},[V]),onTriggerLeave:$.useCallback(A=>{V(A)&&A.preventDefault()},[V]),pointerGraceTimerRef:O,onPointerGraceIntentChange:$.useCallback(A=>{F.current=A},[]),children:(0,ue.jsx)(K,{...N,children:(0,ue.jsx)(io,{asChild:!0,trapped:n,onMountAutoFocus:q(l,A=>{A.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,ue.jsx)(so,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,children:(0,ue.jsx)(zc,{asChild:!0,...v,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:q(u,A=>{C.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,ue.jsx)(wn,{role:"menu","aria-orientation":"vertical","data-state":Jc(L.open),"data-radix-menu-content":"",dir:C.dir,...x,...g,ref:P,style:{outline:"none",...g.style},onKeyDown:q(g.onKeyDown,A=>{let Z=A.target.closest("[data-radix-menu-content]")===A.currentTarget,ne=A.ctrlKey||A.altKey||A.metaKey,he=A.key.length===1;Z&&(A.key==="Tab"&&A.preventDefault(),!ne&&he&&W(A.key));let be=R.current;if(A.target!==be||!Vx.includes(A.key))return;A.preventDefault();let Se=S().filter(I=>!I.disabled).map(I=>I.ref.current);jc.includes(A.key)&&Se.reverse(),tf(Se)}),onBlur:q(t.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(E.current),T.current="")}),onPointerMove:q(t.onPointerMove,Pn(A=>{let re=A.target,Z=Y.current!==A.clientX;if(A.currentTarget.contains(re)&&Z){let ne=A.clientX>Y.current?"right":"left";_.current=ne,Y.current=A.clientX}}))})})})})})})},"MenuContentImpl"));var rL=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ue.jsx)(ee.div,{...r,ref:a})},"MenuLabel")),hs="MenuItem",Kc="menu.itemSelect",nL=$.forwardRef(de(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=$.useRef(null),s=Cs(hs,t.__scopeMenu),i=Zc(hs,t.__scopeMenu),u=Q(a,l),c=$.useRef(!1),d=de(()=>{let f=l.current;if(!o&&f){let h=new CustomEvent(Kc,{bubbles:!0,cancelable:!0});f.addEventListener(Kc,p=>r?.(p),{once:!0}),tr(f,h),h.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,ue.jsx)(lL,{...n,ref:u,disabled:o,onClick:q(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||ms.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),lL=$.forwardRef(de(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Zc(hs,o),i=$c(o),u=$.useRef(null),c=Q(a,u),[d,f]=$.useState(!1),[h,p]=$.useState("");return $.useEffect(()=>{let m=u.current;m&&p((m.textContent??"").trim())},[l.children]),(0,ue.jsx)(gs.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,ue.jsx)(Xc,{asChild:!0,...i,focusable:!r,children:(0,ue.jsx)(ee.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:q(t.onPointerMove,Pn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:q(t.onPointerLeave,Pn(m=>s.onItemLeave(m))),onFocus:q(t.onFocus,()=>f(!0)),onBlur:q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var sL="MenuRadioGroup",[uw,dw]=_a(sL,{value:void 0,onValueChange:de(()=>{},"onValueChange")});var iL="MenuItemIndicator",[cw,fw]=_a(iL,{checked:!1});var uL=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ue.jsx)(ee.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var dL="MenuSub",[pw,mw]=_a(dL);function Jc(e){return e?"open":"closed"}de(Jc,"getOpenState");function ef(e){return e==="indeterminate"}de(ef,"isIndeterminate");function cL(e){return ef(e)?"indeterminate":e?"checked":"unchecked"}de(cL,"getCheckedState");function tf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}de(tf,"focusFirst");function af(e,t){return e.map((a,o)=>e[(t+o)%e.length])}de(af,"wrapArray");function of(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=af(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}de(of,"getNextMatch");function rf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}de(rf,"isPointInPolygon");function nf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return rf(a,t)}de(nf,"isPointerInGraceArea");function Pn(e){return t=>t.pointerType==="mouse"?e(t):void 0}de(Pn,"whenMouse");var lf=jx,sf=$x,uf=Qx,df=eL;var cf=rL,ff=nL;var pf=uL;var Ot=require("react/jsx-runtime"),pL=Object.defineProperty,Ha=(e,t)=>pL(e,"name",{value:t,configurable:!0}),vs="DropdownMenu",[mL,Aw]=Ne(vs,[xs]),qa=xs(),[gL,mf]=mL(vs),hL=Ha(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=qa(t),u=wt.useRef(null),[c,d]=kt({prop:r,defaultProp:n??!1,onChange:l,caller:vs});return(0,Ot.jsx)(gL,{scope:t,triggerId:ot(),triggerRef:u,contentId:ot(),open:c,onOpenChange:d,onOpenToggle:wt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,Ot.jsx)(lf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),xL="DropdownMenuTrigger",LL=wt.forwardRef(Ha(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=mf(xL,o),s=qa(o),i=Q(a,l.triggerRef);return(0,Ot.jsx)(sf,{asChild:!0,...s,children:(0,Ot.jsx)(ee.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:q(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:q(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),CL=Ha(e=>{let{__scopeDropdownMenu:t,...a}=e,o=qa(t);return(0,Ot.jsx)(uf,{...o,...a})},"DropdownMenuPortal"),vL="DropdownMenuContent",IL=wt.forwardRef(Ha(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=mf(vL,o),l=qa(o),s=wt.useRef(!1);return(0,Ot.jsx)(df,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:q(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:q(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var bL=wt.forwardRef(Ha(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=qa(o);return(0,Ot.jsx)(cf,{...n,...r,ref:a})},"DropdownMenuLabel")),SL=wt.forwardRef(Ha(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=qa(o);return(0,Ot.jsx)(ff,{...n,...r,ref:a})},"DropdownMenuItem"));var wL=wt.forwardRef(Ha(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=qa(o);return(0,Ot.jsx)(pf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var gf=hL,hf=LL,xf=CL,Is=IL;var bs=bL,Ss=SL;var ws=wL;var wo=require("react/jsx-runtime"),xr=gf,Lr=hf;var yo=hr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,wo.jsx)(xf,{children:(0,wo.jsx)(Is,{ref:o,sideOffset:t,className:J("kanban-portal kanban-dropdown-content",e),...a})}));yo.displayName=Is.displayName;var Gt=hr.forwardRef(({className:e,inset:t,...a},o)=>(0,wo.jsx)(Ss,{ref:o,className:J("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Gt.displayName=Ss.displayName;var RL=hr.forwardRef(({className:e,inset:t,...a},o)=>(0,wo.jsx)(bs,{ref:o,className:J("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));RL.displayName=bs.displayName;var PL=hr.forwardRef(({className:e,...t},a)=>(0,wo.jsx)(ws,{ref:a,className:J("kanban-dropdown-separator",e),...t}));PL.displayName=ws.displayName;var Lf=H(require("react"),1);var Cf=require("react/jsx-runtime"),zt=Lf.forwardRef(({className:e,type:t,...a},o)=>(0,Cf.jsx)("input",{type:t,className:J("kanban-input",e),ref:o,...a}));zt.displayName="Input";var bf=H(require("react"),1);var vf=H(require("react"),1);var If=require("react/jsx-runtime"),kL=Object.defineProperty,DL=(e,t)=>kL(e,"name",{value:t,configurable:!0}),ML=vf.forwardRef(DL(function(t,a){return(0,If.jsx)(ee.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),ys=ML;var Sf=require("react/jsx-runtime"),Ua=bf.forwardRef(({className:e,...t},a)=>(0,Sf.jsx)(ys,{ref:a,className:J("kanban-label",e),...t}));Ua.displayName=ys.displayName;var ua=H(require("react"),1);var M=H(require("react"),1),ks=H(require("react-dom"),1);var TL=Object.defineProperty,EL=(e,t)=>TL(e,"name",{value:t,configurable:!0});function Dn(e,[t,a]){return Math.min(a,Math.max(t,e))}EL(Dn,"clamp");var Mn=H(require("react"),1),OL=Object.defineProperty,FL=(e,t)=>OL(e,"name",{value:t,configurable:!0});function Rs(e){let t=Mn.useRef({value:e,previous:e});return Mn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}FL(Rs,"usePrevious");var BL=H(require("react"),1);var NL=require("react/jsx-runtime");var wf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var U=require("react/jsx-runtime"),_L=Object.defineProperty,oe=(e,t)=>_L(e,"name",{value:t,configurable:!0}),HL=[" ","Enter","ArrowUp","ArrowDown"],qL=[" ","Enter"],Ro="Select",[Tn,En,UL]=Da(Ro),[Va,cy]=Ne(Ro,[UL,So]),Ds=So(),[WL,ia]=Va(Ro),[VL,GL]=Va(Ro);function Df(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:p,internal_do_not_use_render:m}=e,g=Ds(t),[L,C]=M.useState(null),[x,v]=M.useState(null),[S,b]=M.useState(!1),y=Ma(u),[R,P]=kt({prop:o,defaultProp:r??!1,onChange:n,caller:Ro}),[E,T]=kt({prop:l,defaultProp:s,onChange:i,caller:Ro}),O=M.useRef(null),F=M.useRef(E);M.useEffect(()=>{let Z=p?L?.ownerDocument.getElementById(p):L?.form;if(Z instanceof HTMLFormElement){let ne=oe(()=>T(F.current),"reset");return Z.addEventListener("reset",ne),()=>Z.removeEventListener("reset",ne)}},[p,L,T]);let _=L?!!p||!!L.closest("form"):!0,[Y,K]=M.useState(new Set),N=ot(),W=Array.from(Y).map(Z=>Z.props.value).join(";"),V=M.useCallback(Z=>{K(ne=>new Set(ne).add(Z))},[]),A=M.useCallback(Z=>{K(ne=>{let he=new Set(ne);return he.delete(Z),he})},[]),re={required:h,trigger:L,onTriggerChange:C,valueNode:x,onValueNodeChange:v,valueNodeHasChildren:S,onValueNodeHasChildrenChange:b,contentId:N,value:E,onValueChange:T,open:R,onOpenChange:P,dir:y,triggerPointerDownPosRef:O,disabled:f,name:c,autoComplete:d,form:p,nativeOptions:Y,nativeSelectKey:W,isFormControl:_};return(0,U.jsx)(bn,{...g,children:(0,U.jsx)(WL,{scope:t,...re,children:(0,U.jsx)(Tn.Provider,{scope:t,children:(0,U.jsx)(VL,{scope:t,onNativeOptionAdd:V,onNativeOptionRemove:A,children:qf(m)?m(re):a})})})})}oe(Df,"SelectProvider");var Mf=oe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,U.jsx)(Df,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,U.jsxs)(U.Fragment,{children:[a,r?(0,U.jsx)(sC,{__scopeSelect:t}):null]})})},"Select"),zL="SelectTrigger",Ms=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Ds(o),s=ia(zL,o),i=s.disabled||r,u=Q(a,s.onTriggerChange),c=En(o),d=M.useRef("touch"),[f,h,p]=_s(g=>{let L=c().filter(v=>!v.disabled),C=L.find(v=>v.value===s.value),x=Hs(L,g,C);x!==void 0&&s.onValueChange(x.value)}),m=oe(g=>{i||(s.onOpenChange(!0),p()),g&&(s.triggerPointerDownPosRef.current={x:Math.round(g.pageX),y:Math.round(g.pageY)})},"handleOpen");return(0,U.jsx)(Sn,{asChild:!0,...l,children:(0,U.jsx)(ee.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Cr(s.value)?"":void 0,...n,ref:u,onClick:q(n.onClick,g=>{g.currentTarget.focus(),d.current!=="mouse"&&m(g)}),onPointerDown:q(n.onPointerDown,g=>{d.current=g.pointerType;let L=g.target;L.hasPointerCapture(g.pointerId)&&L.releasePointerCapture(g.pointerId),g.button===0&&g.ctrlKey===!1&&g.pointerType==="mouse"&&(m(g),g.preventDefault())}),onKeyDown:q(n.onKeyDown,g=>{let L=f.current!=="";!(g.ctrlKey||g.altKey||g.metaKey)&&g.key.length===1&&h(g.key),!(L&&g.key===" ")&&HL.includes(g.key)&&(m(),g.preventDefault())})})})},"SelectTrigger")),XL="SelectValue",Af=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=ia(XL,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=Q(a,u.onValueNodeChange);le(()=>{c(d)},[c,d]);let h=Cr(u.value);return(0,U.jsx)(ee.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,U.jsx)(M.Fragment,{children:h?s:l},h?"placeholder":"value")})},"SelectValue")),Tf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,U.jsx)(ee.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),KL="SelectPortal",[jL,$L]=Va(KL,{forceMount:void 0}),Ef=oe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,U.jsx)(jL,{scope:e.__scopeSelect,forceMount:a,children:(0,U.jsx)(uo,{asChild:!0,...o})})},"SelectPortal"),Wa="SelectContent",As=M.forwardRef(oe(function(t,a){let o=$L(Wa,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=ia(Wa,t.__scopeSelect),[s,i]=M.useState();return le(()=>{i(new DocumentFragment)},[]),(0,U.jsx)(Ut,{present:r||l.open,children:({present:u})=>u?(0,U.jsx)(QL,{...n,ref:a}):(0,U.jsx)(YL,{...n,fragment:s})})},"SelectContent")),YL=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?ks.createPortal((0,U.jsx)(Of,{scope:o,children:(0,U.jsx)(Tn.Slot,{scope:o,children:(0,U.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),yt=10,[Of,Ga]=Va(Wa),ZL=Ve("SelectContent.RemoveScroll"),QL=M.forwardRef(oe(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:m,hideWhenDetached:g,avoidCollisions:L,...C}=t,x=ia(Wa,o),[v,S]=M.useState(null),[b,y]=M.useState(null),R=Q(a,S),[P,E]=M.useState(null),[T,O]=M.useState(null),F=En(o),[_,Y]=M.useState(!1),K=M.useRef(!1);M.useEffect(()=>{if(v)return xo(v)},[v]),oa();let N=M.useCallback(I=>{let[D,...k]=F().map(z=>z.ref.current),[B]=k.slice(-1),j=document.activeElement;for(let z of I)if(z===j||(z?.scrollIntoView({block:"nearest"}),z===D&&b&&(b.scrollTop=0),z===B&&b&&(b.scrollTop=b.scrollHeight),z?.focus(),document.activeElement!==j))return},[F,b]),W=M.useCallback(()=>N([P,v]),[N,P,v]);M.useEffect(()=>{_&&W()},[_,W]);let{onOpenChange:V,triggerPointerDownPosRef:A}=x;M.useEffect(()=>{if(v){let I={x:0,y:0},D=oe(B=>{I={x:Math.abs(Math.round(B.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(B.pageY)-(A.current?.y??0))}},"handlePointerMove"),k=oe(B=>{I.x<=10&&I.y<=10?B.preventDefault():B.composedPath().includes(v)||V(!1),document.removeEventListener("pointermove",D),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",D),document.addEventListener("pointerup",k,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",k,{capture:!0})}}},[v,V,A]),M.useEffect(()=>{let I=oe(()=>V(!1),"close");return window.addEventListener("blur",I),window.addEventListener("resize",I),()=>{window.removeEventListener("blur",I),window.removeEventListener("resize",I)}},[V]);let[re,Z]=_s(I=>{let D=F().filter(j=>!j.disabled),k=D.find(j=>j.ref.current===document.activeElement),B=Hs(D,I,k);B&&setTimeout(()=>B.ref.current?.focus())}),ne=M.useCallback((I,D,k)=>{let B=!K.current&&!k;(x.value!==void 0&&x.value===D||B)&&(E(I),B&&(K.current=!0))},[x.value]),he=M.useCallback(()=>v?.focus(),[v]),be=M.useCallback((I,D,k)=>{let B=!K.current&&!k;(x.value!==void 0&&x.value===D||B)&&O(I)},[x.value]),ge=r==="popper"?yf:JL,Se=ge===yf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:m,hideWhenDetached:g,avoidCollisions:L}:{};return(0,U.jsx)(Of,{scope:o,content:v,viewport:b,onViewportChange:y,itemRefCallback:ne,selectedItem:P,onItemLeave:he,itemTextRefCallback:be,focusSelectedItem:W,selectedItemText:T,position:r,isPositioned:_,searchRef:re,children:(0,U.jsx)(Sa,{as:ZL,allowPinchZoom:!0,children:(0,U.jsx)(io,{asChild:!0,trapped:x.open,onMountAutoFocus:I=>{I.preventDefault()},onUnmountAutoFocus:q(n,I=>{x.trigger?.focus({preventScroll:!0}),I.preventDefault()}),children:(0,U.jsx)(so,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:I=>I.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:(0,U.jsx)(ge,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:I=>I.preventDefault(),...C,...Se,onPlaced:()=>Y(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:q(C.onKeyDown,I=>{let D=I.ctrlKey||I.altKey||I.metaKey;if(I.key==="Tab"&&I.preventDefault(),!D&&I.key.length===1&&Z(I.key),["ArrowUp","ArrowDown","Home","End"].includes(I.key)){let B=F().filter(j=>!j.disabled).map(j=>j.ref.current);if(["ArrowUp","End"].includes(I.key)&&(B=B.slice().reverse()),["ArrowUp","ArrowDown"].includes(I.key)){let j=I.target,z=B.indexOf(j);B=B.slice(z+1)}setTimeout(()=>N(B)),I.preventDefault()}})})})})})})},"SelectContentImpl")),JL=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=ia(Wa,o),s=Ga(Wa,o),[i,u]=M.useState(null),[c,d]=M.useState(null),f=Q(a,d),h=En(o),p=M.useRef(!1),m=M.useRef(!0),{viewport:g,selectedItem:L,selectedItemText:C,focusSelectedItem:x}=s,v=M.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&g&&L&&C){let R=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),E=l.valueNode.getBoundingClientRect(),T=C.getBoundingClientRect();if(l.dir!=="rtl"){let j=T.left-P.left,z=E.left-j,te=R.left-z,se=R.width+te,ke=Math.max(se,P.width),mt=window.innerWidth-yt,gt=Dn(z,[yt,Math.max(yt,mt-ke)]);i.style.minWidth=se+"px",i.style.left=gt+"px"}else{let j=P.right-T.right,z=window.innerWidth-E.right-j,te=window.innerWidth-R.right-z,se=R.width+te,ke=Math.max(se,P.width),mt=window.innerWidth-yt,gt=Dn(z,[yt,Math.max(yt,mt-ke)]);i.style.minWidth=se+"px",i.style.right=gt+"px"}let O=h(),F=window.innerHeight-yt*2,_=g.scrollHeight,Y=window.getComputedStyle(c),K=parseInt(Y.borderTopWidth,10),N=parseInt(Y.paddingTop,10),W=parseInt(Y.borderBottomWidth,10),V=parseInt(Y.paddingBottom,10),A=K+N+_+V+W,re=Math.min(L.offsetHeight*5,A),Z=window.getComputedStyle(g),ne=parseInt(Z.paddingTop,10),he=parseInt(Z.paddingBottom,10),be=R.top+R.height/2-yt,ge=F-be,Se=L.offsetHeight/2,I=L.offsetTop+Se,D=K+N+I,k=A-D;if(D<=be){let j=O.length>0&&L===O[O.length-1].ref.current;i.style.bottom="0px";let z=c.clientHeight-g.offsetTop-g.offsetHeight,te=Math.max(ge,Se+(j?he:0)+z+W),se=D+te;i.style.height=se+"px"}else{let j=O.length>0&&L===O[0].ref.current;i.style.top="0px";let te=Math.max(be,K+g.offsetTop+(j?ne:0)+Se)+k;i.style.height=te+"px",g.scrollTop=D-be+g.offsetTop}i.style.margin=`${yt}px 0`,i.style.minHeight=re+"px",i.style.maxHeight=F+"px",r?.(),requestAnimationFrame(()=>p.current=!0)}},[h,l.trigger,l.valueNode,i,c,g,L,C,l.dir,r]);le(()=>v(),[v]);let[S,b]=M.useState();le(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let y=M.useCallback(R=>{R&&m.current===!0&&(v(),x?.(),m.current=!1)},[v,x]);return(0,U.jsx)(eC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:p,onScrollButtonChange:y,children:(0,U.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:(0,U.jsx)(ee.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),yf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=yt,...l}=t,s=Ds(o);return(0,U.jsx)(wn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[eC,Ts]=Va(Wa,{}),Rf="SelectViewport",Ff=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=Ga(Rf,o),s=Ts(Rf,o),i=Q(a,l.onViewportChange),u=M.useRef(0);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,U.jsx)(Tn.Slot,{scope:o,children:(0,U.jsx)(ee.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:q(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){let p=Math.abs(u.current-d.scrollTop);if(p>0){let m=window.innerHeight-yt*2,g=parseFloat(f.style.minHeight),L=parseFloat(f.style.height),C=Math.max(g,L);if(C<m){let x=C+p,v=Math.min(m,x),S=x-v;f.style.height=v+"px",f.style.bottom==="0px"&&(d.scrollTop=S>0?S:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),tC="SelectGroup",[fy,aC]=Va(tC);var oC="SelectLabel",Es=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t,n=aC(oC,o);return(0,U.jsx)(ee.div,{id:n.id,...r,ref:a})},"SelectLabel")),Ps="SelectItem",[rC,Bf]=Va(Ps),Os=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=ia(Ps,o),u=Ga(Ps,o),c=i.value===r,[d,f]=M.useState(l??""),[h,p]=M.useState(!1),m=Ae(v=>u.itemRefCallback?.(v,r,n)),g=Q(a,m),L=ot(),C=M.useRef("touch"),x=oe(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,U.jsx)(rC,{scope:o,value:r,disabled:n,textId:L,isSelected:c,onItemTextChange:M.useCallback(v=>{f(S=>S||(v?.textContent??"").trim())},[]),children:(0,U.jsx)(Tn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,U.jsx)(ee.div,{role:"option","aria-labelledby":L,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:g,onFocus:q(s.onFocus,()=>p(!0)),onBlur:q(s.onBlur,()=>p(!1)),onClick:q(s.onClick,()=>{C.current!=="mouse"&&x()}),onPointerUp:q(s.onPointerUp,()=>{C.current==="mouse"&&x()}),onPointerDown:q(s.onPointerDown,v=>{C.current=v.pointerType}),onPointerMove:q(s.onPointerMove,v=>{C.current=v.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:q(s.onPointerLeave,v=>{v.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:q(s.onKeyDown,v=>{n||v.target!==v.currentTarget||u.searchRef?.current!==""&&v.key===" "||(qL.includes(v.key)&&x(),v.key===" "&&v.preventDefault())})})})})},"SelectItem")),An="SelectItemText",Nf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=ia(An,o),i=Ga(An,o),u=Bf(An,o),c=GL(An,o),[d,f]=M.useState(null),h=Ae(x=>i.itemTextRefCallback?.(x,u.value,u.disabled)),p=Q(a,f,u.onItemTextChange,h),m=d?.textContent,g=M.useMemo(()=>(0,U.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:L,onNativeOptionRemove:C}=c;return le(()=>(L(g),()=>C(g)),[L,C,g]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ee.span,{id:u.textId,...l,ref:p}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Cr(s.value)?ks.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),nC="SelectItemIndicator",_f=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return Bf(nC,o).isSelected?(0,U.jsx)(ee.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Pf="SelectScrollUpButton",Fs=M.forwardRef(oe(function(t,a){let o=Ga(Pf,t.__scopeSelect),r=Ts(Pf,t.__scopeSelect),[n,l]=M.useState(!1),s=Q(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,U.jsx)(Hf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),kf="SelectScrollDownButton",Bs=M.forwardRef(oe(function(t,a){let o=Ga(kf,t.__scopeSelect),r=Ts(kf,t.__scopeSelect),[n,l]=M.useState(!1),s=Q(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,U.jsx)(Hf,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Hf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=Ga("SelectScrollButton",o),s=M.useRef(null),i=En(o),u=M.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return M.useEffect(()=>()=>u(),[u]),le(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,U.jsx)(ee.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:q(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Ns=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,U.jsx)(ee.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var lC="SelectBubbleInput",sC=M.forwardRef(oe(function({__scopeSelect:t,...a},o){let r=ia(lC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,p=M.useRef(null),m=Q(o,p),g=n??"",L=Rs(g),C=Array.from(f).some(x=>(x.props.value??"")==="");return M.useEffect(()=>{let x=p.current;if(!x)return;let v=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(v,"value").set;if(L!==g&&b){let y=new Event("change",{bubbles:!0});b.call(x,g),x.dispatchEvent(y)}},[L,g]),(0,U.jsxs)(ee.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:x=>l(x.target.value),...a,style:{...wf,...a.style},ref:m,defaultValue:g,children:[Cr(n)&&!C?(0,U.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function qf(e){return typeof e=="function"}oe(qf,"isFunction");function Cr(e){return e===""||e===void 0}oe(Cr,"shouldShowPlaceholder");function _s(e){let t=Ae(e),a=M.useRef(""),o=M.useRef(0),r=M.useCallback(l=>{let s=a.current+l;t(s),oe((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=M.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return M.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}oe(_s,"useTypeaheadSearch");function Hs(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Uf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}oe(Hs,"findNextItem");function Uf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}oe(Uf,"wrapArray");var ve=require("react/jsx-runtime"),qs=Mf;var Us=Af,On=ua.forwardRef(({className:e,children:t,...a},o)=>(0,ve.jsxs)(Ms,{ref:o,className:J("kanban-select-trigger",e),...a,children:[t,(0,ve.jsx)(Tf,{asChild:!0,children:(0,ve.jsx)(oo,{className:"kanban-select-icon"})})]}));On.displayName=Ms.displayName;var Wf=ua.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(Fs,{ref:a,className:J("kanban-select-scroll-button",e),...t,children:(0,ve.jsx)(Xo,{className:"kanban-select-scroll-icon"})}));Wf.displayName=Fs.displayName;var Vf=ua.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(Bs,{ref:a,className:J("kanban-select-scroll-button",e),...t,children:(0,ve.jsx)(oo,{className:"kanban-select-scroll-icon"})}));Vf.displayName=Bs.displayName;var Fn=ua.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,ve.jsx)(Ef,{children:(0,ve.jsxs)(As,{ref:r,className:J("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,ve.jsx)(Wf,{}),(0,ve.jsx)(Ff,{className:J("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,ve.jsx)(Vf,{})]})}));Fn.displayName=As.displayName;var uC=ua.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(Es,{ref:a,className:J("kanban-select-label",e),...t}));uC.displayName=Es.displayName;var Po=ua.forwardRef(({className:e,children:t,...a},o)=>(0,ve.jsxs)(Os,{ref:o,className:J("kanban-select-item",e),...a,children:[(0,ve.jsx)("span",{className:"kanban-select-item-indicator",children:(0,ve.jsx)(_f,{children:(0,ve.jsx)(ta,{className:"kanban-select-check"})})}),(0,ve.jsx)(Nf,{children:t})]}));Po.displayName=Os.displayName;var dC=ua.forwardRef(({className:e,...t},a)=>(0,ve.jsx)(Ns,{ref:a,className:J("kanban-select-separator",e),...t}));dC.displayName=Ns.displayName;var Gf=H(require("react"),1);var zf=require("react/jsx-runtime"),Ws=Gf.forwardRef(({className:e,...t},a)=>(0,zf.jsx)("textarea",{className:J("kanban-textarea",e),ref:a,...t}));Ws.displayName="Textarea";var Xt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},Bn=["high","medium","low"],Xf="#94a3b8";function Kf(e,t){return t?e.find(a=>a.name===t)?.color??Xf:Xf}var Xe=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Vs=e=>e==="high"||e==="medium"||e==="low"?Xt[e].label:"";function jf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Vs(a.priority)||o;return Xe(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Xe(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Xe(t("actLabelSet"),{to:n}):r!=null&&n==null?Xe(t("actLabelCleared"),{from:r}):Xe(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Vs(r)||r:o,s=n?Vs(n)||n:o;return r==null&&n!=null?Xe(t("actPrioritySet"),{to:s}):r!=null&&n==null?Xe(t("actPriorityCleared"),{from:l}):Xe(t("actPriority"),{from:l,to:s})}case"card_title_changed":return Xe(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_deleted":return t("actDeleted");case"column_added":return Xe(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Xe(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Xe(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Xe(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Xe(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Xe(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Xe(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Nn=e=>String(e).padStart(2,"0");function Gs(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Nn(t.getMonth()+1)}-${Nn(t.getDate())} ${Nn(t.getHours())}:${Nn(t.getMinutes())}`}var Kt=require("react/jsx-runtime");function $f({activities:e}){let t=je();if(e.length===0)return(0,Kt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Kt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Kt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Kt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Kt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Kt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",jf(o,t)]}),(0,Kt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:Gs(o.ts),children:Gs(o.ts)})]},o.id)})})}var G=require("react/jsx-runtime");function Yf({open:e,card:t,labels:a,activities:o,onOpenChange:r,onSave:n,onDelete:l,onChatWithAgent:s}){let i=je(),[u,c]=(0,vr.useState)({id:"",title:"",note:"",label:"",priority:""}),[d,f]=(0,vr.useState)(!1);(0,vr.useEffect)(()=>{e&&c({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let h=p=>c(m=>({...m,...p}));return(0,G.jsx)(Co,{open:e,onOpenChange:r,children:(0,G.jsxs)(ya,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:p=>p.preventDefault(),children:[(0,G.jsx)(Ra,{children:(0,G.jsx)(Pa,{className:"kanban-sr-only",children:i(t?"editCard":"addCard")})}),(0,G.jsxs)("div",{className:"kanban-form-stack",children:[(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsxs)(Ua,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,G.jsx)("span",{children:i("fieldTitle")}),t&&(0,G.jsxs)("span",{className:"kanban-field-id",children:[i("fieldId"),": ",t.id]})]}),(0,G.jsx)(zt,{id:"card-title",value:u.title,placeholder:i("titlePlaceholder"),onChange:p=>h({title:p.target.value})})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{children:i("fieldLabel")}),(0,G.jsxs)(qs,{value:u.label||"__none__",onValueChange:p=>h({label:p==="__none__"?"":p}),children:[(0,G.jsx)(On,{children:(0,G.jsx)(Us,{placeholder:i("noLabel")})}),(0,G.jsxs)(Fn,{children:[(0,G.jsx)(Po,{value:"__none__",children:i("noLabel")}),a.map(p=>(0,G.jsx)(Po,{value:p.name,children:p.name},p.name))]})]})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{children:i("fieldPriority")}),(0,G.jsxs)(qs,{value:u.priority||"__none__",onValueChange:p=>h({priority:p==="__none__"?"":p}),children:[(0,G.jsx)(On,{children:(0,G.jsx)(Us,{placeholder:i("noPriority")})}),(0,G.jsxs)(Fn,{children:[(0,G.jsx)(Po,{value:"__none__",children:i("noPriority")}),Bn.map(p=>{let m=Xt[p];return(0,G.jsx)(Po,{value:p,children:(0,G.jsxs)("span",{className:"kanban-inline-priority",children:[(0,G.jsx)("span",{className:"kanban-priority-dot",style:{background:m.color}}),m.label]})},p)})]})]})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{htmlFor:"card-note",children:i("fieldNote")}),(0,G.jsx)(Ws,{id:"card-note",value:u.note,placeholder:i("notePlaceholder"),rows:5,onChange:p=>h({note:p.target.value})})]}),t&&(0,G.jsxs)("div",{className:"kanban-activity-box",children:[(0,G.jsx)(Ua,{className:"kanban-muted-small",children:i("activityTitle")}),(0,G.jsx)("div",{className:"kanban-activity-scroll",children:(0,G.jsx)($f,{activities:o})})]})]}),(0,G.jsxs)(sr,{children:[t&&l&&(0,G.jsxs)(Me,{variant:"outline",className:"kanban-dialog-delete",disabled:d,onClick:async()=>{f(!0);let p=await l(t);f(!1),p!==!1&&r(!1)},children:[(0,G.jsx)(_t,{className:"kanban-icon"}),i("delete")]}),(0,G.jsxs)(xr,{children:[(0,G.jsx)(Lr,{asChild:!0,children:(0,G.jsxs)(Me,{variant:"outline",disabled:!u.title.trim()&&!u.note.trim(),children:[(0,G.jsx)($o,{className:"kanban-icon"}),i("chatWithAgent")]})}),(0,G.jsxs)(yo,{align:"end",children:[(0,G.jsx)(Gt,{onClick:()=>{s(u,"current"),r(!1)},children:i("chatCurrentSession")}),(0,G.jsx)(Gt,{onClick:()=>{s(u,"new"),r(!1)},children:i("chatNewSession")})]})]}),(0,G.jsx)(Me,{variant:"outline",disabled:d||!u.title.trim(),onClick:async()=>{f(!0);let p=await n(u);f(!1),p!==!1&&r(!1)},children:i("save")})]})]})})}var Zf=require("react/jsx-runtime");function cC({variant:e,className:t}={}){return J("kanban-badge",`kanban-badge--${e??"default"}`,t)}function zs({className:e,variant:t,...a}){return(0,Zf.jsx)("div",{className:cC({variant:t,className:e}),...a})}var za=H(require("react"),1);var Xa=require("react/jsx-runtime"),Ir=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-card",e),...t}));Ir.displayName="Card";var fC=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-card-header",e),...t}));fC.displayName="CardHeader";var pC=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-ui-card-title",e),...t}));pC.displayName="CardTitle";var mC=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-card-description",e),...t}));mC.displayName="CardDescription";var br=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-card-content",e),...t}));br.displayName="CardContent";var gC=za.forwardRef(({className:e,...t},a)=>(0,Xa.jsx)("div",{ref:a,className:J("kanban-card-footer",e),...t}));gC.displayName="CardFooter";var Ft=require("react/jsx-runtime");function Qf({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=Vr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}}),u=e.priority?Xt[e.priority]:null,c=Kf(t,e.label);return(0,Ft.jsx)("div",{ref:n,style:{transform:tt.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,Ft.jsx)(Ir,{className:"kanban-card",children:(0,Ft.jsxs)(br,{className:"kanban-sortable-card-content",children:[(e.label||u)&&(0,Ft.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Ft.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:c,color:"#0b1220"},children:e.label}),u&&(0,Ft.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:u.color,color:"#0b1220"},children:u.label})]}),(0,Ft.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Ft.jsx)("p",{className:"kanban-card-note",children:e.note})]})})})}var lt=require("react/jsx-runtime");function Jf({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Nr({id:e.id,data:{type:"column"}}),s=je();return(0,lt.jsxs)("div",{ref:n,className:`kanban-column${l?" is-over":""}`,children:[(0,lt.jsxs)("div",{className:"kanban-column-header",children:[(0,lt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,lt.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,lt.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,lt.jsx)(Wr,{items:t.map(i=>i.id),strategy:Ur,children:t.map(i=>(0,lt.jsx)(Qf,{card:i,labels:a,onOpen:r},i.id))}),t.length===0&&(0,lt.jsx)("p",{className:"kanban-column-empty",children:s("emptyColumn")})]}),(0,lt.jsx)("div",{className:"kanban-column-footer",children:(0,lt.jsxs)(Me,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,lt.jsx)(Nt,{className:"kanban-icon"}),s("addCard")]})})]})}var Sr=require("react");var Ie=require("react/jsx-runtime");function hC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=Vr({id:e.id}),d=je();return(0,Ie.jsxs)("div",{ref:i,style:{transform:tt.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,Ie.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,Ie.jsx)(Ko,{className:"kanban-icon"})}),(0,Ie.jsx)(zt,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,Ie.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,Ie.jsx)(_t,{className:"kanban-icon"})})]})}function ep({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=je(),[i,u]=(0,Sr.useState)({}),[c,d]=(0,Sr.useState)(""),f=Tr(to(ea,{activationConstraint:{distance:8}}),to(Jt,{coordinateGetter:Gr}));(0,Sr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let h=m=>{let g=(i[m]??"").trim(),L=t.find(C=>C.id===m);L&&g&&g!==L.title&&r(m,g)},p=m=>{let{active:g,over:L}=m;L&&g.id!==L.id&&o(String(g.id),String(L.id))};return(0,Ie.jsx)(Co,{open:e,onOpenChange:a,children:(0,Ie.jsxs)(ya,{className:"kanban-dialog-medium",children:[(0,Ie.jsxs)(Ra,{children:[(0,Ie.jsx)(Pa,{children:s("columnEdit")}),(0,Ie.jsx)(ir,{children:s("columnEditDesc")})]}),(0,Ie.jsx)(Br,{sensors:f,collisionDetection:Pi,onDragEnd:p,children:(0,Ie.jsx)(Wr,{items:t.map(m=>m.id),strategy:Ur,children:(0,Ie.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,Ie.jsx)(hC,{column:m,value:i[m.id]??m.title,onValueChange:g=>u(L=>({...L,[m.id]:g})),onCommit:()=>h(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,Ie.jsxs)("div",{className:"kanban-sortable-row",children:[(0,Ie.jsx)(zt,{value:c,placeholder:s("newColumnPlaceholder"),onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,Ie.jsxs)(Me,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,Ie.jsx)(Nt,{className:"kanban-icon"}),s("add")]})]})]})})}var ko=require("react");var Pe=require("react/jsx-runtime");function tp({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=je(),[s,i]=(0,ko.useState)({}),[u,c]=(0,ko.useState)(""),[d,f]=(0,ko.useState)("#38bdf8");(0,ko.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(p=>[p.name,{name:p.name,color:p.color}]))),c(""),f("#38bdf8"))},[e]);let h=p=>{let m=s[p];if(!m)return;let g=t.find(C=>C.name===p),L=m.name.trim();g&&L&&(L!==p||m.color!==g.color)&&r(p,L,m.color)};return(0,Pe.jsx)(Co,{open:e,onOpenChange:a,children:(0,Pe.jsxs)(ya,{className:"kanban-dialog-medium",children:[(0,Pe.jsxs)(Ra,{children:[(0,Pe.jsx)(Pa,{children:l("labelEdit")}),(0,Pe.jsx)(ir,{children:l("labelEditDesc")})]}),(0,Pe.jsx)("div",{className:"kanban-label-list",children:t.map(p=>{let m=s[p.name]??{name:p.name,color:p.color};return(0,Pe.jsxs)("div",{className:"kanban-label-row",children:[(0,Pe.jsx)("input",{type:"color",value:m.color,className:"kanban-color-input",onChange:g=>i(L=>({...L,[p.name]:{...m,color:g.target.value}})),onBlur:()=>h(p.name)}),(0,Pe.jsx)(zt,{value:m.name,onChange:g=>i(L=>({...L,[p.name]:{...m,name:g.target.value}})),onBlur:()=>h(p.name),onKeyDown:g=>{g.key==="Enter"&&g.target.blur()}}),(0,Pe.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(p.name),children:(0,Pe.jsx)(_t,{className:"kanban-icon"})})]},p.name)})}),(0,Pe.jsx)(sr,{className:"kanban-dialog-footer-layout",children:(0,Pe.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Pe.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:p=>f(p.target.value)}),(0,Pe.jsx)(zt,{value:u,placeholder:l("newLabelPlaceholder"),onChange:p=>c(p.target.value),onKeyDown:p=>{p.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Pe.jsxs)(Me,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Pe.jsx)(Nt,{className:"kanban-icon"}),l("add")]})]})})]})})}function _n(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Xs=new Map,Ks=0,Hn=new Set;function ap(e,t){Xs.set(e,t),Ks++;for(let a of Hn)a()}function op(e){let t=Xs.get(e);if(t==null)return null;Xs.delete(e),Ks++;for(let a of Hn)a();return t}function rp(e){return Hn.add(e),()=>{Hn.delete(e)}}function np(){return Ks}function lp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(Lo("fieldId")+": "+t),a&&n.push(a),r&&n.push(Lo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var X=require("react/jsx-runtime");function sp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,l=a?a(I=>I.items):[],s=a?a(I=>I.recentWorkspaceId):void 0,i=Array.isArray(l)?l.find(I=>Array.isArray(I.sessionIds)&&I.sessionIds.includes(t)):void 0,u=i?i.workspaceId:s||"default",c=je(),[d,f]=(0,fe.useState)(null),[h,p]=(0,fe.useState)(""),[m,g]=(0,fe.useState)([]),[L,C]=(0,fe.useState)(null),[x,v]=(0,fe.useState)(null),[S,b]=(0,fe.useState)(!1),[y,R]=(0,fe.useState)(!1),[P,E]=(0,fe.useState)(!1),[T,O]=(0,fe.useState)(""),F=(0,fe.useRef)(null),_=(0,fe.useRef)(u),Y=(0,fe.useRef)(0),K=(0,fe.useRef)(0);_.current=u;let[N,W]=(0,fe.useState)(null),V=Tr(to(ea,{activationConstraint:{distance:8}}),to(Jt,{coordinateGetter:Gr})),A=(0,fe.useCallback)((I,D,k)=>{_.current!==D||k<K.current||(K.current=k,I&&I.board&&(f({...I.board,activities:Array.isArray(I.board.activities)?I.board.activities:[]}),p("")),Array.isArray(I&&I.warnings)&&I.warnings.length>0&&g(B=>[...B,...I.warnings]))},[]),re=(0,fe.useCallback)(async(I,D={})=>{let k=++Y.current;try{let B=await _n(I,D,u);return A(B,u,k),!0}catch(B){return p(c("actionFailed")+String(B&&B.message||B)),!1}},[u,A,c]),Z=(0,fe.useCallback)(()=>{let I=++Y.current;E(!0),_n("get",{},u).then(D=>A(D,u,I)).catch(D=>p(c("loadFailed")+String(D&&D.message||D))).finally(()=>E(!1))},[u,A,c]);(0,fe.useEffect)(()=>{let I=!0,D=++Y.current;return f(null),v(null),C(null),p(""),g([]),_n("get",{},u).then(k=>{I&&A(k,u,D)}).catch(k=>{I&&p(c("loadFailed")+String(k&&k.message||k))}),()=>{I=!1}},[u,A,c]),(0,fe.useLayoutEffect)(()=>{let I=j=>{let z=j;for(;z;){let te=getComputedStyle(z).overflowY;if(te==="auto"||te==="scroll")return z;z=z.parentElement}return null},D=()=>{let j=F.current;if(!j)return;let z=j.getBoundingClientRect().top,te=I(j.parentElement),se=window.innerHeight;if(te){let ke=te.querySelector("[data-composer-seat]"),mt=ke?ke.getBoundingClientRect().top:0;ke&&ke.offsetHeight>0&&mt>z?se=mt:se=te.getBoundingClientRect().bottom}W(Math.max(0,Math.floor(se-z)))};D();let k=I(F.current?.parentElement??null),B=new ResizeObserver(D);return B.observe(document.documentElement),k&&B.observe(k),window.addEventListener("resize",D),()=>{B.disconnect(),window.removeEventListener("resize",D)}},[d!==null]);let ne=(0,fe.useCallback)(I=>{let D=ki(I),k=D.length>0?D:ol(I),B=Wo(k,"id");if(B==null)return[];if(new Set((d?.columns??[]).map(z=>z.id)).has(String(B))){let z=(d?.cards??[]).filter(te=>te.columnId===B).map(te=>te.id);if(z.length>0){let te=Er({...I,droppableContainers:I.droppableContainers.filter(se=>se.id!==B&&z.includes(String(se.id)))});te.length>0&&(B=te[0].id)}}return[{id:B}]},[d]),he=I=>{if(I.active.data.current?.type==="card"){let D=d?.cards.find(k=>k.id===I.active.id);D&&C(D)}},be=I=>{let{active:D,over:k}=I;if(C(null),!k||!d)return;let B=D.data.current?.type,j=k.data.current?.type;if(B==="card")if(j==="card"){let z=d.cards.find(He=>He.id===k.id);if(!z||z.id===D.id)return;let te=d.cards.filter(He=>He.columnId===z.columnId),se=te.findIndex(He=>He.id===z.id),ke=D.rect.current.translated?.top,mt=typeof ke=="number"&&ke>k.rect.top+k.rect.height/2,gt=se>=0?se+(mt?1:0):void 0,Ka=te.findIndex(He=>He.id===D.id);gt!=null&&Ka>=0&&Ka<gt&&gt--,re("moveCard",{id:String(D.id),columnId:z.columnId,toIndex:gt})}else j==="column"&&re("moveCard",{id:String(D.id),columnId:String(k.id)})},ge=I=>{if(!x)return Promise.resolve(!1);if(x.card){let D={id:x.card.id};return I.title!==x.card.title&&(D.title=I.title),I.note!==x.card.note&&(D.note=I.note),I.label!==(x.card.label??"")&&(D.label=I.label),I.priority!==(x.card.priority??"")&&(D.priority=I.priority),re("updateCard",D)}return re("addCard",{columnId:x.columnId,title:I.title,note:I.note,label:I.label||void 0,priority:I.priority||void 0})},Se=(0,fe.useCallback)((I,D)=>{let k=lp(I);if(k){if(D==="current"){o?.setDraft(k);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(B=>{B&&(ap(B,k),n.open(B))}).catch(B=>p(c("actionFailed")+String(B&&B.message||B)))}},[o,r,n,u,c]);return d?(0,X.jsxs)("div",{ref:F,className:"kanban-root kanban-view",style:N!=null?{height:N}:void 0,children:[h&&(0,X.jsx)("p",{className:"kanban-error",children:h}),m.length>0&&(0,X.jsxs)("div",{className:"kanban-warning",children:[(0,X.jsxs)("div",{className:"kanban-warning-body",children:[(0,X.jsx)("p",{className:"kanban-warning-title",children:c("warnings")}),m.map((I,D)=>(0,X.jsx)("p",{className:"kanban-warning-item",children:I},D))]}),(0,X.jsx)(Me,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:c("dismiss")})]}),(0,X.jsxs)(Br,{sensors:V,collisionDetection:ne,onDragStart:he,onDragEnd:be,children:[(0,X.jsxs)("div",{className:"kanban-content",children:[(0,X.jsxs)("div",{className:"kanban-toolbar",children:[(0,X.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:Z,children:(0,X.jsx)(Yo,{className:P?"kanban-animate-spin":void 0})}),(0,X.jsxs)(xr,{children:[(0,X.jsx)(Lr,{asChild:!0,children:(0,X.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("settings"),children:(0,X.jsx)(Zo,{className:"kanban-icon"})})}),(0,X.jsxs)(yo,{align:"start",children:[(0,X.jsxs)(Gt,{onClick:()=>b(!0),children:[(0,X.jsx)(jo,{className:"kanban-icon"}),c("columnEdit")]}),(0,X.jsxs)(Gt,{onClick:()=>R(!0),children:[(0,X.jsx)(Qo,{className:"kanban-icon"}),c("labelEdit")]})]})]}),(0,X.jsxs)(xr,{children:[(0,X.jsx)(Lr,{asChild:!0,children:(0,X.jsx)(Me,{variant:T?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:c("priorityFilter"),children:(0,X.jsx)(aa,{className:"kanban-icon"})})}),(0,X.jsxs)(yo,{align:"start",children:[(0,X.jsxs)(Gt,{onClick:()=>O(""),children:[(0,X.jsx)("span",{className:"kanban-filter-check",children:!T&&(0,X.jsx)(ta,{className:"kanban-icon"})}),c("all")]}),Bn.map(I=>(0,X.jsxs)(Gt,{onClick:()=>O(I),children:[(0,X.jsx)("span",{className:"kanban-filter-check",children:T===I&&(0,X.jsx)(ta,{className:"kanban-icon"})}),(0,X.jsx)("span",{className:"kanban-priority-dot",style:{background:Xt[I].color}}),Xt[I].label]},I))]})]})]}),(0,X.jsx)("div",{className:"kanban-board-scroll",children:d.columns.map(I=>{let D=d.cards.filter(k=>k.columnId===I.id&&(!T||k.priority===T));return(0,X.jsx)(Jf,{column:I,cards:D,labels:d.labels,onAddCard:k=>v({card:null,columnId:k.id}),onOpenCard:k=>v({card:k,columnId:k.columnId})},I.id)})})]}),(0,X.jsx)(zi,{children:L?(0,X.jsx)(Ir,{className:"kanban-drag-preview",children:(0,X.jsx)(br,{className:"kanban-drag-preview-content",children:(0,X.jsx)("p",{className:"kanban-drag-preview-title",children:L.title})})}):null})]}),(0,X.jsx)(Yf,{open:x!==null,card:x?.card??null,labels:d.labels,activities:x?.card?d.activities.filter(I=>I.cardId===x.card.id):[],onOpenChange:I=>{I||v(null)},onSave:ge,onDelete:I=>re("deleteCard",{id:I.id}),onChatWithAgent:Se}),(0,X.jsx)(ep,{open:S,columns:d.columns,onOpenChange:b,onReorder:(I,D)=>{let k=d.columns.findIndex(B=>B.id===D);k>=0&&re("moveColumn",{id:I,toIndex:k})},onRename:(I,D)=>re("renameColumn",{id:I,title:D}),onDelete:I=>re("deleteColumn",{id:I}),onAdd:I=>re("addColumn",{title:I})}),(0,X.jsx)(tp,{open:y,labels:d.labels,onOpenChange:R,onAdd:(I,D)=>re("addLabel",{name:I,color:D}),onUpdate:(I,D,k)=>re("updateLabel",{name:I,newName:D,color:k}),onDelete:I=>re("deleteLabel",{name:I})})]}):(0,X.jsx)("div",{className:"kanban-root kanban-loading",children:h?(0,X.jsx)("p",{className:"kanban-error",children:h}):(0,X.jsx)("p",{className:"kanban-muted-text",children:c("loading")})})}var qn=require("react");function ip({sessionId:e,inputActions:t}){let a=(0,qn.useSyncExternalStore)(rp,np);return(0,qn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=op(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var up={name:"dsh-kanban",inject:["slots","locale"],apply(e){Rd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>Lo("boardTab")},r=>(0,js.createElement)(sp,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,js.createElement)(ip,r)))}};var dp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+dp+"]")){let e=document.createElement("style");e.setAttribute(dp,""),e.textContent=ni,document.head.appendChild(e)}var xC=up;
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