window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var gp=Object.create;var Sr=Object.defineProperty;var hp=Object.getOwnPropertyDescriptor;var xp=Object.getOwnPropertyNames;var vp=Object.getPrototypeOf,Cp=Object.prototype.hasOwnProperty;var Js=e=>{throw TypeError(e)};var Lp=(e,t)=>{for(var a in t)Sr(e,a,{get:t[a],enumerable:!0})},Qs=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of xp(t))!Cp.call(e,r)&&r!==a&&Sr(e,r,{get:()=>t[r],enumerable:!(o=hp(t,r))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?gp(vp(e)):{},Qs(t||!e||!e.__esModule?Sr(a,"default",{value:e,enumerable:!0}):a,e)),bp=e=>Qs(Sr({},"__esModule",{value:!0}),e);var ei=(e,t,a)=>t.has(e)||Js("Cannot "+a);var He=(e,t,a)=>(ei(e,t,"read from private field"),a?a.call(e):t.get(e)),ti=(e,t,a)=>t.has(e)?Js("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Vn=(e,t,a,o)=>(ei(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var mC={};Lp(mC,{default:()=>pC});module.exports=bp(mC);var ai=`/*
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
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
}

.kanban-activity-scroll {
  max-height: 192px;
  overflow-y: auto;
  padding-right: 4px;
}

.kanban-activity-list {
  position: relative;
  display: grid;
  gap: 14px;
  padding-left: 16px;
  border-left: 1px solid var(--dsw-alias-border-l2);
}

.kanban-activity-item {
  position: relative;
}

.kanban-activity-dot {
  position: absolute;
  top: 6px;
  left: -21px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.kanban-activity-dot.is-agent {
  background: var(--dsw-alias-state-business-primary);
}

.kanban-activity-dot.is-human {
  background: var(--dsw-alias-state-success-primary);
}

.kanban-activity-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--dsw-alias-label-secondary);
  font: var(--dsw-font-xxxs-11);
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
  margin-top: 4px;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
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
`;var zs=require("react");var ge=require("react");var w=U(require("react")),pa=require("react-dom");var Ce=require("react");function ri(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ce.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Mo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sa(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function yr(e){return"nodeType"in e}function Ue(e){var t,a;return e?sa(e)?e:yr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Rr(e){let{Document:t}=Ue(e);return e instanceof t}function $a(e){return sa(e)?!1:e instanceof Ue(e).HTMLElement}function Gn(e){return e instanceof Ue(e).SVGElement}function ia(e){return e?sa(e)?e.document:yr(e)?Rr(e)?e:$a(e)||Gn(e)?e.ownerDocument:document:document:document}var et=Mo?Ce.useLayoutEffect:Ce.useEffect;function Ao(e){let t=(0,Ce.useRef)(e);return et(()=>{t.current=e}),(0,Ce.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ni(){let e=(0,Ce.useRef)(null),t=(0,Ce.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,Ce.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Ya(e,t){t===void 0&&(t=[e]);let a=(0,Ce.useRef)(e);return et(()=>{a.current!==e&&(a.current=e)},t),a}function Za(e,t){let a=(0,Ce.useRef)();return(0,Ce.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function To(e){let t=Ao(e),a=(0,Ce.useRef)(null),o=(0,Ce.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Eo(e){let t=(0,Ce.useRef)();return(0,Ce.useEffect)(()=>{t.current=e},[e]),t.current}var Wn={};function ua(e,t){return(0,Ce.useMemo)(()=>{if(t)return t;let a=Wn[e]==null?0:Wn[e]+1;return Wn[e]=a,e+"-"+a},[e,t])}function li(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var da=li(1),ca=li(-1);function wp(e){return"clientX"in e&&"clientY"in e}function Ja(e){if(!e)return!1;let{KeyboardEvent:t}=Ue(e.target);return t&&e instanceof t}function Sp(e){if(!e)return!1;let{TouchEvent:t}=Ue(e.target);return t&&e instanceof t}function Oo(e){if(Sp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return wp(e)?{x:e.clientX,y:e.clientY}:null}var Qe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[Qe.Translate.toString(e),Qe.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),oi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function si(e){return e.matches(oi)?e:e.querySelector(oi)}var fa=U(require("react")),yp={display:"none"};function ii(e){let{id:t,value:a}=e;return fa.default.createElement("div",{id:t,style:yp},a)}function ui(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return fa.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function di(){let[e,t]=(0,fa.useState)("");return{announce:(0,fa.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var wi=(0,w.createContext)(null);function Rp(e){let t=(0,w.useContext)(wi);(0,w.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Pp(){let[e]=(0,w.useState)(()=>new Set),t=(0,w.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,w.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var kp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Dp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Mp(e){let{announcements:t=Dp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=kp}=e,{announce:n,announcement:l}=di(),s=ua("DndLiveRegion"),[i,u]=(0,w.useState)(!1);if((0,w.useEffect)(()=>{u(!0)},[]),Rp((0,w.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;t.onDragMove&&n(t.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;n(t.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;n(t.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;n(t.onDragCancel({active:f,over:g}))}}),[n,t])),!i)return null;let c=w.default.createElement(w.default.Fragment,null,w.default.createElement(ii,{id:o,value:r.draggable}),w.default.createElement(ui,{id:s,announcement:l}));return a?(0,pa.createPortal)(c,a):c}var Re;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Re||(Re={}));function kr(){}function Qa(e,t){return(0,w.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Mr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var pt=Object.freeze({x:0,y:0});function el(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Ap(e,t){let a=Oo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function tl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Tp(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function jn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Ho(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function ci(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Si=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=ci(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=el(ci(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(tl)},Ar=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=jn(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=jn(i),c=r.reduce((f,g,h)=>f+el(u[h],g),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(tl)};function Ep(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var al=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Ep(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(Tp)};function Op(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var yi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Op(o,s)){let u=jn(s).reduce((d,f)=>d+el(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(tl)};function Fp(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ri(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:pt}function Bp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Np=Bp(1);function Pi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function _p(e,t,a){let o=Pi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var Hp={ignoreTransform:!1};function ha(e,t){t===void 0&&(t=Hp);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ue(e).getComputedStyle(e);u&&(a=_p(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function fi(e){return ha(e,{ignoreTransform:!0})}function Up(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function qp(e,t){return t===void 0&&(t=Ue(e).getComputedStyle(e)),t.position==="fixed"}function Vp(e,t){t===void 0&&(t=Ue(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function Uo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Rr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!$a(r)||Gn(r)||a.includes(r))return a;let n=Ue(e).getComputedStyle(r);return r!==e&&Vp(r,n)&&a.push(r),qp(r,n)?a:o(r.parentNode)}return e?o(e):a}function ki(e){let[t]=Uo(e,1);return t??null}function zn(e){return!Mo||!e?null:sa(e)?e:yr(e)?Rr(e)||e===ia(e).scrollingElement?window:$a(e)?e:null:null}function Di(e){return sa(e)?e.scrollX:e.scrollLeft}function Mi(e){return sa(e)?e.scrollY:e.scrollTop}function $n(e){return{x:Di(e),y:Mi(e)}}var ke;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(ke||(ke={}));function Ai(e){return!Mo||!e?!1:e===document.scrollingElement}function Ti(e){let t={x:0,y:0},a=Ai(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Wp={x:.2,y:.2};function Gp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Wp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Ti(e),g={x:0,y:0},h={x:0,y:0},p={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+p.height?(g.y=ke.Backward,h.y=o*Math.abs((t.top+p.height-n)/p.height)):!c&&i>=t.bottom-p.height&&(g.y=ke.Forward,h.y=o*Math.abs((t.bottom-p.height-i)/p.height)),!f&&s>=t.right-p.width?(g.x=ke.Forward,h.x=o*Math.abs((t.right-p.width-s)/p.width)):!d&&l<=t.left+p.width&&(g.x=ke.Backward,h.x=o*Math.abs((t.left+p.width-l)/p.width)),{direction:g,speed:h}}function zp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Ei(e){return e.reduce((t,a)=>da(t,$n(a)),pt)}function Kp(e){return e.reduce((t,a)=>t+Di(a),0)}function Xp(e){return e.reduce((t,a)=>t+Mi(a),0)}function Oi(e,t){if(t===void 0&&(t=ha),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);ki(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var jp=[["x",["left","right"],Kp],["y",["top","bottom"],Xp]],Bo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=Uo(a),r=Ei(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of jp)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},ma=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function $p(e){let{EventTarget:t}=Ue(e);return e instanceof t?e:ia(e)}function Kn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var lt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(lt||(lt={}));function pi(e){e.preventDefault()}function Yp(e){e.stopPropagation()}var re;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(re||(re={}));var Fi={start:[re.Space,re.Enter],cancel:[re.Esc],end:[re.Space,re.Enter,re.Tab]},Zp=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case re.Right:return{...a,x:a.x+25};case re.Left:return{...a,x:a.x-25};case re.Down:return{...a,y:a.y+25};case re.Up:return{...a,y:a.y-25}}},Zt=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new ma(ia(a)),this.windowListeners=new ma(Ue(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(lt.Resize,this.handleCancel),this.windowListeners.add(lt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(lt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Oi(o),a(pt)}handleKeyDown(t){if(Ja(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Fi,coordinateGetter:l=Zp,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:pt;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=ca(d,c),g={x:0,y:0},{scrollableAncestors:h}=o.current;for(let p of h){let m=t.code,{isTop:x,isRight:C,isLeft:v,isBottom:L,maxScroll:I,minScroll:b}=Ti(p),S=zp(p),y={x:Math.min(m===re.Right?S.right-S.width/2:S.right,Math.max(m===re.Right?S.left:S.left+S.width/2,d.x)),y:Math.min(m===re.Down?S.bottom-S.height/2:S.bottom,Math.max(m===re.Down?S.top:S.top+S.height/2,d.y))},P=m===re.Right&&!C||m===re.Left&&!v,T=m===re.Down&&!L||m===re.Up&&!x;if(P&&y.x!==d.x){let M=p.scrollLeft+f.x,E=m===re.Right&&M<=I.x||m===re.Left&&M>=b.x;if(E&&!f.y){p.scrollTo({left:M,behavior:s});return}E?g.x=p.scrollLeft-M:g.x=m===re.Right?p.scrollLeft-I.x:p.scrollLeft-b.x,g.x&&p.scrollBy({left:-g.x,behavior:s});break}else if(T&&y.y!==d.y){let M=p.scrollTop+f.y,E=m===re.Down&&M<=I.y||m===re.Up&&M>=b.y;if(E&&!f.x){p.scrollTo({top:M,behavior:s});return}E?g.y=p.scrollTop-M:g.y=m===re.Down?p.scrollTop-I.y:p.scrollTop-b.y,g.y&&p.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,da(ca(d,this.referenceCoordinates),g))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Zt.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Fi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function mi(e){return!!(e&&"distance"in e)}function gi(e){return!!(e&&"delay"in e)}var No=class{constructor(t,a,o){var r;o===void 0&&(o=$p(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ia(l),this.documentListeners=new ma(this.document),this.listeners=new ma(o),this.windowListeners=new ma(Ue(l)),this.initialCoordinates=(r=Oo(n))!=null?r:pt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(lt.Resize,this.handleCancel),this.windowListeners.add(lt.DragStart,pi),this.windowListeners.add(lt.VisibilityChange,this.handleCancel),this.windowListeners.add(lt.ContextMenu,pi),this.documentListeners.add(lt.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(gi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(mi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(lt.Click,Yp,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(lt.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Oo(t))!=null?a:pt,u=ca(r,i);if(!o&&s){if(mi(s)){if(s.tolerance!=null&&Kn(u,s.tolerance))return this.handleCancel();if(Kn(u,s.distance))return this.handleStart()}if(gi(s)&&Kn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===re.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Jp={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},Jt=class extends No{constructor(t){let{event:a}=t,o=ia(a.target);super(t,Jp,o)}};Jt.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Qp={move:{name:"mousemove"},end:{name:"mouseup"}},Yn;(function(e){e[e.RightClick=2]="RightClick"})(Yn||(Yn={}));var Zn=class extends No{constructor(t){super(t,Qp,ia(t.event.target))}};Zn.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===Yn.RightClick?!1:(o?.({event:a}),!0)}}];var Xn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Jn=class extends No{constructor(t){super(t,Xn)}static setup(){return window.addEventListener(Xn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Xn.move.name,t)};function t(){}}};Jn.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Fo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Fo||(Fo={}));var Dr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Dr||(Dr={}));function em(e){let{acceleration:t,activator:a=Fo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Dr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,g=am({delta:d,disabled:!n}),[h,p]=ni(),m=(0,w.useRef)({x:0,y:0}),x=(0,w.useRef)({x:0,y:0}),C=(0,w.useMemo)(()=>{switch(a){case Fo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Fo.DraggableRect:return r}},[a,r,i]),v=(0,w.useRef)(null),L=(0,w.useCallback)(()=>{let b=v.current;if(!b)return;let S=m.current.x*x.current.x,y=m.current.y*x.current.y;b.scrollBy(S,y)},[]),I=(0,w.useMemo)(()=>s===Dr.TreeOrder?[...u].reverse():u,[s,u]);(0,w.useEffect)(()=>{if(!n||!u.length||!C){p();return}for(let b of I){if(o?.(b)===!1)continue;let S=u.indexOf(b),y=c[S];if(!y)continue;let{direction:P,speed:T}=Gp(b,y,C,t,f);for(let M of["x","y"])g[M][P[M]]||(T[M]=0,P[M]=0);if(T.x>0||T.y>0){p(),v.current=b,h(L,l),m.current=T,x.current=P;return}}m.current={x:0,y:0},x.current={x:0,y:0},p()},[t,L,o,p,n,l,JSON.stringify(C),JSON.stringify(g),h,u,I,c,JSON.stringify(f)])}var tm={x:{[ke.Backward]:!1,[ke.Forward]:!1},y:{[ke.Backward]:!1,[ke.Forward]:!1}};function am(e){let{delta:t,disabled:a}=e,o=Eo(t);return Za(r=>{if(a||!o||!r)return tm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[ke.Backward]:r.x[ke.Backward]||n.x===-1,[ke.Forward]:r.x[ke.Forward]||n.x===1},y:{[ke.Backward]:r.y[ke.Backward]||n.y===-1,[ke.Forward]:r.y[ke.Forward]||n.y===1}}},[a,t,o])}function om(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Za(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function rm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var _o;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(_o||(_o={}));var Qn;(function(e){e.Optimized="optimized"})(Qn||(Qn={}));var hi=new Map;function nm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,w.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,w.useRef)(e),d=m(),f=Ya(d),g=(0,w.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(v=>!C.includes(v))))},[f]),h=(0,w.useRef)(null),p=Za(x=>{if(d&&!a)return hi;if(!x||x===hi||c.current!==e||n!=null){let C=new Map;for(let v of e){if(!v)continue;if(n&&n.length>0&&!n.includes(v.id)&&v.rect.current){C.set(v.id,v.rect.current);continue}let L=v.node.current,I=L?new Bo(i(L),L):null;v.rect.current=I,I&&C.set(v.id,I)}return C}return x},[e,n,a,d,i]);return(0,w.useEffect)(()=>{c.current=e},[e]),(0,w.useEffect)(()=>{d||g()},[a,d]),(0,w.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,w.useEffect)(()=>{d||typeof s!="number"||h.current!==null||(h.current=setTimeout(()=>{g(),h.current=null},s))},[s,d,g,...o]),{droppableRects:p,measureDroppableContainers:g,measuringScheduled:n!=null};function m(){switch(u){case _o.Always:return!1;case _o.BeforeDragging:return a;default:return!a}}}function ol(e,t){return Za(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function lm(e,t){return ol(e,t)}function sm(e){let{callback:t,disabled:a}=e,o=Ao(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Tr(e){let{callback:t,disabled:a}=e,o=Ao(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function im(e){return new Bo(ha(e),e)}function xi(e,t,a){t===void 0&&(t=im);let[o,r]=(0,w.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=sm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Tr({callback:n});return et(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function um(e){let t=ol(e);return Ri(e,t)}var vi=[];function dm(e){let t=(0,w.useRef)(e),a=Za(o=>e?o&&o!==vi&&e&&t.current&&e.parentNode===t.current.parentNode?o:Uo(e):vi,[e]);return(0,w.useEffect)(()=>{t.current=e},[e]),a}function cm(e){let[t,a]=(0,w.useState)(null),o=(0,w.useRef)(e),r=(0,w.useCallback)(n=>{let l=zn(n.target);l&&a(s=>s?(s.set(l,$n(l)),new Map(s)):null)},[]);return(0,w.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=zn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,$n(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=zn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,w.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>da(n,l),pt):Ei(e):pt,[e,t])}function Ci(e,t){t===void 0&&(t=[]);let a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{a.current=null},t),(0,w.useEffect)(()=>{let o=e!==pt;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?ca(e,a.current):pt}function fm(e){(0,w.useEffect)(()=>{if(!Mo)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function pm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Bi(e){return(0,w.useMemo)(()=>e?Up(e):null,[e])}var Li=[];function mm(e,t){t===void 0&&(t=ha);let[a]=e,o=Bi(a?Ue(a):null),[r,n]=(0,w.useState)(Li);function l(){n(()=>e.length?e.map(i=>Ai(i)?o:new Bo(t(i),i)):Li)}let s=Tr({callback:l});return et(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Ni(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return $a(t)?t:e}function gm(e){let{measure:t}=e,[a,o]=(0,w.useState)(null),r=(0,w.useCallback)(u=>{for(let{target:c}of u)if($a(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Tr({callback:r}),l=(0,w.useCallback)(u=>{let c=Ni(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=To(l);return(0,w.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var hm=[{sensor:Jt,options:{}},{sensor:Zt,options:{}}],xm={current:{}},Pr={draggable:{measure:fi},droppable:{measure:fi,strategy:_o.WhileDragging,frequency:Qn.Optimized},dragOverlay:{measure:ha}},ga=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},vm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ga,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:kr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Pr,measureDroppableContainers:kr,windowRect:null,measuringScheduled:!1},_i={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:kr,draggableNodes:new Map,over:null,measureDroppableContainers:kr},qo=(0,w.createContext)(_i),Hi=(0,w.createContext)(vm);function Cm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ga}}}function Lm(e,t){switch(t.type){case Re.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Re.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Re.DragEnd:case Re.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Re.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ga(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Re.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new ga(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Re.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ga(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function bm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,w.useContext)(qo),n=Eo(o),l=Eo(a?.id);return(0,w.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!Ja(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=si(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Ui(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Im(e){return(0,w.useMemo)(()=>({draggable:{...Pr.draggable,...e?.draggable},droppable:{...Pr.droppable,...e?.droppable},dragOverlay:{...Pr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function wm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,w.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;et(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ri(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=ki(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Er=(0,w.createContext)({...pt,scaleX:1,scaleY:1}),Yt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Yt||(Yt={}));var Or=(0,w.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=hm,collisionDetection:d=al,measuring:f,modifiers:g,...h}=t,p=(0,w.useReducer)(Lm,void 0,Cm),[m,x]=p,[C,v]=Pp(),[L,I]=(0,w.useState)(Yt.Uninitialized),b=L===Yt.Initialized,{draggable:{active:S,nodes:y,translate:P},droppable:{containers:T}}=m,M=S!=null?y.get(S):null,E=(0,w.useRef)({initial:null,translated:null}),N=(0,w.useMemo)(()=>{var _e;return S!=null?{id:S,data:(_e=M?.data)!=null?_e:xm,rect:E}:null},[S,M]),H=(0,w.useRef)(null),[Q,$]=(0,w.useState)(null),[O,_]=(0,w.useState)(null),G=Ya(h,Object.values(h)),A=ua("DndDescribedBy",l),me=(0,w.useMemo)(()=>T.getEnabled(),[T]),J=Im(f),{droppableRects:le,measureDroppableContainers:he,measuringScheduled:R}=nm(me,{dragging:b,dependencies:[P.x,P.y],config:J.droppable}),F=om(y,S),W=(0,w.useMemo)(()=>O?Oo(O):null,[O]),k=mp(),X=lm(F,J.draggable.measure);wm({activeNode:S!=null?y.get(S):null,config:k.layoutShiftCompensation,initialRect:X,measure:J.draggable.measure});let B=xi(F,J.draggable.measure,X),j=xi(F?F.parentElement:null),Y=(0,w.useRef)({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:le,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),te=T.getNodeFor((a=Y.current.over)==null?void 0:a.id),xe=gm({measure:J.dragOverlay.measure}),ye=(o=xe.nodeRef.current)!=null?o:F,wt=b?(r=xe.rect)!=null?r:B:null,Ga=!!(xe.nodeRef.current&&xe.rect),za=um(Ga?null:B),Hn=Bi(ye?Ue(ye):null),zt=dm(b?te??F:null),Ir=mm(zt),wr=Ui(g,{transform:{x:P.x-za.x,y:P.y-za.y,scaleX:1,scaleY:1},activatorEvent:O,active:N,activeNodeRect:B,containerNodeRect:j,draggingNodeRect:wt,over:Y.current.over,overlayNodeRect:xe.rect,scrollableAncestors:zt,scrollableAncestorRects:Ir,windowRect:Hn}),Ks=W?da(W,P):null,Xs=cm(zt),sp=Ci(Xs),ip=Ci(Xs,[B]),Ka=da(wr,sp),Xa=wt?Np(wt,wr):null,Ro=N&&Xa?d({active:N,collisionRect:Xa,droppableRects:le,droppableContainers:me,pointerCoordinates:Ks}):null,js=Ho(Ro,"id"),[Kt,$s]=(0,w.useState)(null),up=Ga?wr:da(wr,ip),dp=Fp(up,(n=Kt?.rect)!=null?n:null,B),Un=(0,w.useRef)(null),Ys=(0,w.useCallback)((_e,Ye)=>{let{sensor:Ze,options:Xt}=Ye;if(H.current==null)return;let nt=y.get(H.current);if(!nt)return;let Je=_e.nativeEvent,St=new Ze({active:H.current,activeNode:nt,event:Je,options:Xt,context:Y,onAbort(Oe){if(!y.get(Oe))return;let{onDragAbort:yt}=G.current,Ot={id:Oe};yt?.(Ot),C({type:"onDragAbort",event:Ot})},onPending(Oe,jt,yt,Ot){if(!y.get(Oe))return;let{onDragPending:ko}=G.current,$t={id:Oe,constraint:jt,initialCoordinates:yt,offset:Ot};ko?.($t),C({type:"onDragPending",event:$t})},onStart(Oe){let jt=H.current;if(jt==null)return;let yt=y.get(jt);if(!yt)return;let{onDragStart:Ot}=G.current,Po={activatorEvent:Je,active:{id:jt,data:yt.data,rect:E}};(0,pa.unstable_batchedUpdates)(()=>{Ot?.(Po),I(Yt.Initializing),x({type:Re.DragStart,initialCoordinates:Oe,active:jt}),C({type:"onDragStart",event:Po}),$(Un.current),_(Je)})},onMove(Oe){x({type:Re.DragMove,coordinates:Oe})},onEnd:ja(Re.DragEnd),onCancel:ja(Re.DragCancel)});Un.current=St;function ja(Oe){return async function(){let{active:yt,collisions:Ot,over:Po,scrollAdjustedTranslate:ko}=Y.current,$t=null;if(yt&&ko){let{cancelDrop:Do}=G.current;$t={activatorEvent:Je,active:yt,collisions:Ot,delta:ko,over:Po},Oe===Re.DragEnd&&typeof Do=="function"&&await Promise.resolve(Do($t))&&(Oe=Re.DragCancel)}H.current=null,(0,pa.unstable_batchedUpdates)(()=>{x({type:Oe}),I(Yt.Uninitialized),$s(null),$(null),_(null),Un.current=null;let Do=Oe===Re.DragEnd?"onDragEnd":"onDragCancel";if($t){let qn=G.current[Do];qn?.($t),C({type:Do,event:$t})}})}}},[y]),cp=(0,w.useCallback)((_e,Ye)=>(Ze,Xt)=>{let nt=Ze.nativeEvent,Je=y.get(Xt);if(H.current!==null||!Je||nt.dndKit||nt.defaultPrevented)return;let St={active:Je};_e(Ze,Ye.options,St)===!0&&(nt.dndKit={capturedBy:Ye.sensor},H.current=Xt,Ys(Ze,Ye))},[y,Ys]),Zs=rm(c,cp);fm(c),et(()=>{B&&L===Yt.Initializing&&I(Yt.Initialized)},[B,L]),(0,w.useEffect)(()=>{let{onDragMove:_e}=G.current,{active:Ye,activatorEvent:Ze,collisions:Xt,over:nt}=Y.current;if(!Ye||!Ze)return;let Je={active:Ye,activatorEvent:Ze,collisions:Xt,delta:{x:Ka.x,y:Ka.y},over:nt};(0,pa.unstable_batchedUpdates)(()=>{_e?.(Je),C({type:"onDragMove",event:Je})})},[Ka.x,Ka.y]),(0,w.useEffect)(()=>{let{active:_e,activatorEvent:Ye,collisions:Ze,droppableContainers:Xt,scrollAdjustedTranslate:nt}=Y.current;if(!_e||H.current==null||!Ye||!nt)return;let{onDragOver:Je}=G.current,St=Xt.get(js),ja=St&&St.rect.current?{id:St.id,rect:St.rect.current,data:St.data,disabled:St.disabled}:null,Oe={active:_e,activatorEvent:Ye,collisions:Ze,delta:{x:nt.x,y:nt.y},over:ja};(0,pa.unstable_batchedUpdates)(()=>{$s(ja),Je?.(Oe),C({type:"onDragOver",event:Oe})})},[js]),et(()=>{Y.current={activatorEvent:O,active:N,activeNode:F,collisionRect:Xa,collisions:Ro,droppableRects:le,draggableNodes:y,draggingNode:ye,draggingNodeRect:wt,droppableContainers:T,over:Kt,scrollableAncestors:zt,scrollAdjustedTranslate:Ka},E.current={initial:wt,translated:Xa}},[N,F,Ro,Xa,y,ye,wt,le,T,Kt,zt,Ka]),em({...k,delta:P,draggingRect:Xa,pointerCoordinates:Ks,scrollableAncestors:zt,scrollableAncestorRects:Ir});let fp=(0,w.useMemo)(()=>({active:N,activeNode:F,activeNodeRect:B,activatorEvent:O,collisions:Ro,containerNodeRect:j,dragOverlay:xe,draggableNodes:y,droppableContainers:T,droppableRects:le,over:Kt,measureDroppableContainers:he,scrollableAncestors:zt,scrollableAncestorRects:Ir,measuringConfiguration:J,measuringScheduled:R,windowRect:Hn}),[N,F,B,O,Ro,j,xe,y,T,le,Kt,he,zt,Ir,J,R,Hn]),pp=(0,w.useMemo)(()=>({activatorEvent:O,activators:Zs,active:N,activeNodeRect:B,ariaDescribedById:{draggable:A},dispatch:x,draggableNodes:y,over:Kt,measureDroppableContainers:he}),[O,Zs,N,B,x,A,y,Kt,he]);return w.default.createElement(wi.Provider,{value:v},w.default.createElement(qo.Provider,{value:pp},w.default.createElement(Hi.Provider,{value:fp},w.default.createElement(Er.Provider,{value:dp},u)),w.default.createElement(bm,{disabled:s?.restoreFocus===!1})),w.default.createElement(Mp,{...s,hiddenTextDescribedById:A}));function mp(){let _e=Q?.autoScrollEnabled===!1,Ye=typeof i=="object"?i.enabled===!1:i===!1,Ze=b&&!_e&&!Ye;return typeof i=="object"?{...i,enabled:Ze}:{enabled:Ze}}}),Sm=(0,w.createContext)(null),bi="button",ym="Draggable";function qi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ua(ym),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,w.useContext)(qo),{role:g=bi,roleDescription:h="draggable",tabIndex:p=0}=r??{},m=i?.id===t,x=(0,w.useContext)(m?Er:Sm),[C,v]=To(),[L,I]=To(),b=pm(l,t),S=Ya(a);et(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:L,data:S}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let y=(0,w.useMemo)(()=>({role:g,tabIndex:p,"aria-disabled":o,"aria-pressed":m&&g===bi?!0:void 0,"aria-roledescription":h,"aria-describedby":c.draggable}),[o,g,p,m,h,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:y,isDragging:m,listeners:o?void 0:b,node:C,over:f,setNodeRef:v,setActivatorNodeRef:I,transform:x}}function rl(){return(0,w.useContext)(Hi)}var Rm="Droppable",Pm={timeout:25};function Fr(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ua(Rm),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,w.useContext)(qo),c=(0,w.useRef)({disabled:a}),d=(0,w.useRef)(!1),f=(0,w.useRef)(null),g=(0,w.useRef)(null),{disabled:h,updateMeasurementsFor:p,timeout:m}={...Pm,...r},x=Ya(p??o),C=(0,w.useCallback)(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),g.current=null},m)},[m]),v=Tr({callback:C,disabled:h||!l}),L=(0,w.useCallback)((y,P)=>{v&&(P&&(v.unobserve(P),d.current=!1),y&&v.observe(y))},[v]),[I,b]=To(L),S=Ya(t);return(0,w.useEffect)(()=>{!v||!I.current||(v.disconnect(),d.current=!1,v.observe(I.current))},[I,v]),(0,w.useEffect)(()=>(s({type:Re.RegisterDroppable,element:{id:o,key:n,disabled:a,node:I,rect:f,data:S}}),()=>s({type:Re.UnregisterDroppable,key:n,id:o})),[o]),(0,w.useEffect)(()=>{a!==c.current.disabled&&(s({type:Re.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:I,over:i,setNodeRef:b}}function km(e){let{animation:t,children:a}=e,[o,r]=(0,w.useState)(null),[n,l]=(0,w.useState)(null),s=Eo(a);return!a&&!o&&s&&r(s),et(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),w.default.createElement(w.default.Fragment,null,a,o?(0,w.cloneElement)(o,{ref:l}):null)}var Dm={x:0,y:0,scaleX:1,scaleY:1};function Mm(e){let{children:t}=e;return w.default.createElement(qo.Provider,{value:_i},w.default.createElement(Er.Provider,{value:Dm},t))}var Am={position:"fixed",touchAction:"none"},Tm=e=>Ja(e)?"transform 250ms ease":void 0,Em=(0,w.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=Tm}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Am,width:s.width,height:s.height,top:s.top,left:s.left,transform:Qe.Transform.toString(d),transformOrigin:r&&o?Ap(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return w.default.createElement(a,{className:l,style:f,ref:t},n)}),Om=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Fm=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:Qe.Transform.toString(t)},{transform:Qe.Transform.toString(a)}]},Bm={duration:250,easing:"ease",keyframes:Fm,sideEffects:Om({styles:{active:{opacity:"0"}}})};function Nm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return Ao((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Ni(l);if(!u)return;let{transform:c}=Ue(l).getComputedStyle(l),d=Pi(c);if(!d)return;let f=typeof t=="function"?t:_m(t);return Oi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function _m(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Bm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},g=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[h]=g,p=g[g.length-1];if(JSON.stringify(h)===JSON.stringify(p))return;let m=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(g,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{m?.(),C()}})}}var Ii=0;function Hm(e){return(0,w.useMemo)(()=>{if(e!=null)return Ii++,Ii},[e])}var Vi=w.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggableNodes:h,droppableContainers:p,dragOverlay:m,over:x,measuringConfiguration:C,scrollableAncestors:v,scrollableAncestorRects:L,windowRect:I}=rl(),b=(0,w.useContext)(Er),S=Hm(d?.id),y=Ui(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:g,draggingNodeRect:m.rect,over:x,overlayNodeRect:m.rect,scrollableAncestors:v,scrollableAncestorRects:L,transform:b,windowRect:I}),P=ol(f),T=Nm({config:o,draggableNodes:h,droppableContainers:p,measuringConfiguration:C}),M=P?m.setRef:void 0;return w.default.createElement(Mm,null,w.default.createElement(km,{animation:T},d&&S?w.default.createElement(Em,{key:S,id:d.id,ref:M,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:y},a):null))});var Le=U(require("react"));function Wi(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Um(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Br(e){return e!==null&&e>=0}function qm(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function Vm(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Gi=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Wi(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Nr={scaleX:1,scaleY:1},Hr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Nr}:null}let i=Wm(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Nr}:r<a&&r>=l?{x:0,y:s.height+i,...Nr}:{x:0,y:0,...Nr}};function Wm(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var zi="Sortable",Ki=Le.default.createContext({activeIndex:-1,containerId:zi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Gi,disabled:{draggable:!1,droppable:!1}});function Ur(e){let{children:t,id:a,items:o,strategy:r=Gi,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=rl(),d=ua(zi,a),f=s.rect!==null,g=(0,Le.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),h=l!=null,p=l?g.indexOf(l.id):-1,m=u?g.indexOf(u.id):-1,x=(0,Le.useRef)(g),C=!qm(g,x.current),v=m!==-1&&p===-1||C,L=Vm(n);et(()=>{C&&h&&c(g)},[C,g,h,c]),(0,Le.useEffect)(()=>{x.current=g},[g]);let I=(0,Le.useMemo)(()=>({activeIndex:p,containerId:d,disabled:L,disableTransforms:v,items:g,overIndex:m,useDragOverlay:f,sortedRects:Um(g,i),strategy:r}),[p,d,L.draggable,L.droppable,v,g,m,i,f,r]);return Le.default.createElement(Ki.Provider,{value:I},t)}var Gm=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Wi(a,o,r).indexOf(t)},zm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},Km={duration:200,easing:"ease"},Xi="transform",Xm=Qe.Transition.toString({property:Xi,duration:0,easing:"linear"}),jm={roleDescription:"sortable"};function $m(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Le.useState)(null),s=(0,Le.useRef)(a);return et(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=ha(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Le.useEffect)(()=>{n&&l(null)},[n]),n}function qr(e){let{animateLayoutChanges:t=zm,attributes:a,disabled:o,data:r,getNewIndex:n=Gm,id:l,strategy:s,resizeObserverConfig:i,transition:u=Km}=e,{items:c,containerId:d,activeIndex:f,disabled:g,disableTransforms:h,sortedRects:p,overIndex:m,useDragOverlay:x,strategy:C}=(0,Le.useContext)(Ki),v=Ym(o,g),L=c.indexOf(l),I=(0,Le.useMemo)(()=>({sortable:{containerId:d,index:L,items:c},...r}),[d,r,L,c]),b=(0,Le.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:S,node:y,isOver:P,setNodeRef:T}=Fr({id:l,data:I,disabled:v.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:M,activatorEvent:E,activeNodeRect:N,attributes:H,setNodeRef:Q,listeners:$,isDragging:O,over:_,setActivatorNodeRef:G,transform:A}=qi({id:l,data:I,attributes:{...jm,...a},disabled:v.draggable}),me=ri(T,Q),J=!!M,le=J&&!h&&Br(f)&&Br(m),he=!x&&O,R=he&&le?A:null,W=le?R??(s??C)({rects:p,activeNodeRect:N,activeIndex:f,overIndex:m,index:L}):null,k=Br(f)&&Br(m)?n({id:l,items:c,activeIndex:f,overIndex:m}):L,X=M?.id,B=(0,Le.useRef)({activeId:X,items:c,newIndex:k,containerId:d}),j=c!==B.current.items,Y=t({active:M,containerId:d,isDragging:O,isSorting:J,id:l,index:L,items:c,newIndex:B.current.newIndex,previousItems:B.current.items,previousContainerId:B.current.containerId,transition:u,wasDragging:B.current.activeId!=null}),te=$m({disabled:!Y,index:L,node:y,rect:S});return(0,Le.useEffect)(()=>{J&&B.current.newIndex!==k&&(B.current.newIndex=k),d!==B.current.containerId&&(B.current.containerId=d),c!==B.current.items&&(B.current.items=c)},[J,k,d,c]),(0,Le.useEffect)(()=>{if(X===B.current.activeId)return;if(X&&!B.current.activeId){B.current.activeId=X;return}let ye=setTimeout(()=>{B.current.activeId=X},50);return()=>clearTimeout(ye)},[X]),{active:M,activeIndex:f,attributes:H,data:I,rect:S,index:L,newIndex:k,items:c,isOver:P,isSorting:J,isDragging:O,listeners:$,node:y,overIndex:m,over:_,setNodeRef:me,setActivatorNodeRef:G,setDroppableNodeRef:T,setDraggableNodeRef:Q,transform:te??W,transition:xe()};function xe(){if(te||j&&B.current.newIndex===L)return Xm;if(!(he&&!Ja(E)||!u)&&(J||Y))return Qe.Transition.toString({...u,property:Xi})}}function Ym(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function _r(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Zm=[re.Down,re.Right,re.Up,re.Left],Vr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Zm.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case re.Down:o.top<f.top&&i.push(d);break;case re.Up:o.top>f.top&&i.push(d);break;case re.Left:o.left>f.left&&i.push(d);break;case re.Right:o.left<f.left&&i.push(d);break}});let u=Ar({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Ho(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),g=f?r.get(f.id):null,h=f?.node.current;if(h&&g&&d&&f){let m=Uo(h).some((b,S)=>s[S]!==b),x=ji(d,f),C=Jm(d,f),v=m||!x?{x:0,y:0}:{x:C?o.width-g.width:0,y:C?o.height-g.height:0},L={x:g.left,y:g.top};return v.x&&v.y?L:ca(L,v)}}}};function ji(e,t){return!_r(e)||!_r(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Jm(e,t){return!_r(e)||!_r(t)||!ji(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var Gr=require("react");var $i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var Vo=require("react");var Yi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Zi=(0,Vo.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>(0,Vo.createElement)("svg",{ref:i,...Yi,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:Wr("lucide",r),...s},[...l.map(([u,c])=>(0,Vo.createElement)(u,c)),...Array.isArray(n)?n:[n]]));var ie=(e,t)=>{let a=(0,Gr.forwardRef)(({className:o,...r},n)=>(0,Gr.createElement)(Zi,{ref:n,iconNode:t,className:Wr(`lucide-${$i(e)}`,o),...r}));return a.displayName=`${e}`,a};var Qm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qt=ie("Check",Qm);var eg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],eo=ie("ChevronDown",eg);var tg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Wo=ie("ChevronUp",tg);var ag=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Go=ie("Clock",ag);var og=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],zo=ie("Filter",og);var rg=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Ko=ie("GripVertical",rg);var ng=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Xo=ie("List",ng);var lg=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],jo=ie("MessageSquare",lg);var sg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ft=ie("Plus",sg);var ig=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$o=ie("RefreshCw",ig);var ug=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Yo=ie("Settings2",ug);var dg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Zo=ie("Tag",dg);var cg=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Bt=ie("Trash2",cg);var fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jo=ie("X",fg);var Fn=require("react");var iu=U(require("react"),1);var Fe=U(require("react"),1);var Ji=U(require("react"),1),pg=Object.defineProperty,ll=(e,t)=>pg(e,"name",{value:t,configurable:!0});function nl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ll(nl,"setRef");function Qi(...e){return t=>{let a=!1,o=e.map(r=>{let n=nl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():nl(e[r],null)}}}}ll(Qi,"composeRefs");function ee(...e){return Ji.useCallback(Qi(...e),e)}ll(ee,"useComposedRefs");var mg=Object.defineProperty,mt=(e,t)=>mg(e,"name",{value:t,configurable:!0});function qe(e){let t=Fe.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];sl(r)&&typeof zr=="function"&&(r=zr(r._payload)),Fe.Children.forEach(r,f=>{if(ru(f)){s=!0;let g=f,h="child"in g.props?g.props.child:g.props.children;sl(h)&&typeof zr=="function"&&(h=zr(h._payload)),l=hg(g,h),i.push(l?.props?.children)}else i.push(f)}),l?l=Fe.cloneElement(l,void 0,i):!s&&Fe.Children.count(r)===1&&Fe.isValidElement(r)&&(l=r);let u=l?ou(l):void 0,c=ee(o,u);if(!l){if(r||r===0)throw new Error(s?Cg(e):vg(e));return r}let d=au(n,l.props??{});return l.type!==Fe.Fragment&&(d.ref=o?c:u),Fe.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}mt(qe,"createSlot");var eu=qe("Slot"),tu=Symbol.for("radix.slottable");function gg(e){let t=mt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=tu,t}mt(gg,"createSlottable");var hg=mt((e,t)=>{if("child"in e.props){let a=e.props.child;return Fe.isValidElement(a)?Fe.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Fe.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function au(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}mt(au,"mergeProps");function ou(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}mt(ou,"getElementRef");function ru(e){return Fe.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===tu}mt(ru,"isSlottable");var xg=Symbol.for("react.lazy");function sl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===xg&&"_payload"in e&&nu(e._payload)}mt(sl,"isLazyComponent");function nu(e){return typeof e=="object"&&e!==null&&"then"in e}mt(nu,"isPromiseLike");var vg=mt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Cg=mt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),zr=Fe[" use ".trim().toString()];function lu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=lu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function su(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=lu(e))&&(o&&(o+=" "),o+=t);return o}function ae(...e){return su(e)}var uu=require("react/jsx-runtime");function Lg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ae("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var De=iu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,uu.jsx)(o?eu:"button",{className:Lg({variant:t,size:a,className:e}),ref:n,...r}));De.displayName="Button";var nr=U(require("react"),1);var pe=U(require("react"),1);var bg=Object.defineProperty,to=(e,t)=>bg(e,"name",{value:t,configurable:!0}),du=!!(typeof window<"u"&&window.document&&window.document.createElement);function q(e,t,{checkForDefaultPrevented:a=!0}={}){return to(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}to(q,"composeEventHandlers");function Ig(e){if(!du)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}to(Ig,"getOwnerWindow");function il(e){if(!du)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}to(il,"getOwnerDocument");function cu(e,t=!1){let{activeElement:a}=il(e);if(!a?.nodeName)return null;if(fu(a)&&a.contentDocument)return cu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=il(a).getElementById(o);if(r)return r}}return a}to(cu,"getActiveElement");function fu(e){return e.tagName==="IFRAME"}to(fu,"isFrame");var it=U(require("react"),1),ul=require("react/jsx-runtime"),wg=Object.defineProperty,st=(e,t)=>wg(e,"name",{value:t,configurable:!0});function Sg(e,t){let a=it.createContext(t);a.displayName=e+"Context";let o=st(n=>{let{children:l,...s}=n,i=it.useMemo(()=>s,Object.values(s));return(0,ul.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=it.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return st(r,"useContext"),[o,r]}st(Sg,"createContext");function Be(e,t=[]){let a=[];function o(n,l){let s=it.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=st(d=>{let{scope:f,children:g,...h}=d,p=f?.[e]?.[i]||s,m=it.useMemo(()=>h,Object.values(h));return(0,ul.jsx)(p.Provider,{value:m,children:g})},"Provider");u.displayName=n+"Provider";function c(d,f,g={}){let{optional:h=!1}=g,p=f?.[e]?.[i]||s,m=it.useContext(p);if(m)return m;if(l!==void 0)return l;if(!h)throw new Error(`\`${d}\` must be used within \`${n}\``)}return st(c,"useContext"),[u,c]}st(o,"createContext");let r=st(()=>{let n=a.map(l=>it.createContext(l));return st(function(s){let i=s?.[e]||n;return it.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,pu(r,...t)]}st(Be,"createContextScope");function pu(...e){let t=e[0];if(e.length===1)return t;let a=st(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return st(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return it.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}st(pu,"composeContextScopes");var dl=U(require("react"),1);var mu=U(require("react"),1),se=globalThis?.document?mu.useLayoutEffect:()=>{};var yg=Object.defineProperty,Rg=(e,t)=>yg(e,"name",{value:t,configurable:!0}),Pg=dl[" useId ".trim().toString()]||(()=>{}),kg=0;function tt(e){let[t,a]=dl.useState(Pg());return se(()=>{e||a(o=>o??String(kg++))},[e]),e||(t?`radix-${t}`:"")}Rg(tt,"useId");var ut=U(require("react"),1);var Kr=!1;var gt=U(require("react"),1);var ao=U(require("react"),1),Dg=Object.defineProperty,Mg=(e,t)=>Dg(e,"name",{value:t,configurable:!0}),gu=ao[" useEffectEvent ".trim().toString()],hu=ao[" useInsertionEffect ".trim().toString()];function cl(e){if(typeof gu=="function")return gu(e);let t=ao.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof hu=="function"?hu(()=>{t.current=e}):se(()=>{t.current=e}),ao.useMemo(()=>((...a)=>t.current?.(...a)),[])}Mg(cl,"useEffectEvent");var Ag=Object.defineProperty,Qo=(e,t)=>Ag(e,"name",{value:t,configurable:!0}),Tg=ut[" useInsertionEffect ".trim().toString()]||se;function Rt({prop:e,defaultProp:t,onChange:a=Qo(()=>{},"onChange"),caller:o}){let[r,n,l]=vu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Kr){let c=ut.useRef(e!==void 0);ut.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=ut.useCallback(c=>{if(s){let d=Cu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}Qo(Rt,"useControllableState");function vu({defaultProp:e,onChange:t}){let[a,o]=ut.useState(e),r=ut.useRef(a),n=ut.useRef(t);return Tg(()=>{n.current=t},[t]),ut.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Qo(vu,"useUncontrolledState");function Cu(e){return typeof e=="function"}Qo(Cu,"isFunction");var xu=Symbol("RADIX:SYNC_STATE");function Eg(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=cl(l);if(Kr){let m=gt.useRef(r!==void 0);gt.useEffect(()=>{let x=m.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=gt.useReducer((m,x)=>{if(x.type===xu)return{...m,state:x.state};let C=e(m,x);return i&&!Object.is(C.state,m.state)&&u(C.state),C},...c),g=d.state,h=gt.useRef(g);gt.useEffect(()=>{h.current!==g&&(h.current=g,i||u(g))},[g,h,i]);let p=gt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return gt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:xu,state:r})},[r,d.state,i]),[p,f]}Qo(Eg,"useControllableStateReducer");var ue=U(require("react"),1);var Lu=U(require("react"),1),bu=U(require("react-dom"),1);var Iu=require("react/jsx-runtime"),Og=Object.defineProperty,Fg=(e,t)=>Og(e,"name",{value:t,configurable:!0}),Bg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],oe=Bg.reduce((e,t)=>{let a=qe(`Primitive.${t}`),o=Lu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Iu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function er(e,t){e&&bu.flushSync(()=>e.dispatchEvent(t))}Fg(er,"dispatchDiscreteCustomEvent");var oo=U(require("react"),1),Ng=Object.defineProperty,_g=(e,t)=>Ng(e,"name",{value:t,configurable:!0});function Me(e){let t=oo.useRef(e);return oo.useEffect(()=>{t.current=e}),oo.useMemo(()=>((...a)=>t.current?.(...a)),[])}_g(Me,"useCallbackRef");var Su=require("react/jsx-runtime"),Hg=Object.defineProperty,Ae=(e,t)=>Hg(e,"name",{value:t,configurable:!0}),fl="dismissableLayer.update",Ug="dismissableLayer.pointerDownOutside",qg="dismissableLayer.focusOutside",wu,yu=ue.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ro=ue.forwardRef(Ae(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ue.useContext(yu),[f,g]=ue.useState(null),h=f?.ownerDocument??globalThis?.document,[,p]=ue.useState({}),m=ee(a,g),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=C?x.indexOf(C):-1,L=f?x.indexOf(f):-1,I=d.layersWithOutsidePointerEventsDisabled.size>0,b=L>=v,S=ue.useRef(!1),y=Ru(E=>{l?.(E),i?.(E),E.defaultPrevented||u?.()},{ownerDocument:h,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:S,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ue.useCallback(E=>{if(!(E instanceof Node))return!1;let N=[...d.branches].some(H=>H.contains(E));return b&&!N},[d.branches,b])}),P=Pu(E=>{if(r&&S.current)return;let N=E.target;[...d.branches].some(Q=>Q.contains(N))||(s?.(E),i?.(E),E.defaultPrevented||u?.())},h),T=f?L===x.length-1:!1,M=Me(E=>{E.key==="Escape"&&(n?.(E),!E.defaultPrevented&&u&&(E.preventDefault(),u()))});return ue.useEffect(()=>{if(T)return h.addEventListener("keydown",M,{capture:!0}),()=>h.removeEventListener("keydown",M,{capture:!0})},[h,T,M]),ue.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(wu=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),pl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(h.body.style.pointerEvents=wu))}},[f,h,o,d]),ue.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),pl())},[f,d]),ue.useEffect(()=>{let E=Ae(()=>p({}),"handleUpdate");return document.addEventListener(fl,E),()=>document.removeEventListener(fl,E)},[]),(0,Su.jsx)(oe.div,{...c,ref:m,style:{pointerEvents:I?b?"auto":"none":void 0,...t.style},onFocusCapture:q(t.onFocusCapture,P.onFocusCapture),onBlurCapture:q(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:q(t.onPointerDownCapture,y.onPointerDownCapture)})},"DismissableLayer"));function ml(){let e=ue.useContext(yu),[t,a]=ue.useState(null);return ue.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Ae(ml,"useDismissableLayerSurface");var Vg=Ae(()=>!0,"IS_TRUE");function Ru(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=Vg}=t,s=Me(e),i=ue.useRef(!1),u=ue.useRef(!1),c=ue.useRef(new Map),d=ue.useRef(()=>{});return ue.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Ae(f,"resetOutsideInteraction");function g(){return Array.from(c.current.values()).some(Boolean)}Ae(g,"isOutsideInteractionIntercepted");function h(v){if(!u.current)return;let L=v.target;L instanceof Node&&[...n].some(b=>b.contains(L))||c.current.set(v.type,!0),v.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Ae(h,"handleInteractionCapture");function p(v){u.current&&c.current.set(v.type,!1)}Ae(p,"handleInteractionBubble");let m=Ae(v=>{if(v.target&&!i.current){let I=function(){a.removeEventListener("click",d.current);let S=g();f(),S||gl(Ug,s,b,{discrete:!0})};var L=I;if(Ae(I,"handleAndDispatchPointerDownOutsideEvent"),!l(v.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:v};u.current=!0,r.current=o&&v.button===0,c.current.clear(),!o||v.button!==0?I():(a.removeEventListener("click",d.current),d.current=I,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let v of x)a.addEventListener(v,h,!0),a.addEventListener(v,p);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",m),a.removeEventListener("click",d.current);for(let v of x)a.removeEventListener(v,h,!0),a.removeEventListener(v,p)}},[a,s,o,r,n,l]),{onPointerDownCapture:Ae(()=>i.current=!0,"onPointerDownCapture")}}Ae(Ru,"usePointerDownOutside");function Pu(e,t=globalThis?.document){let a=Me(e),o=ue.useRef(!1);return ue.useEffect(()=>{let r=Ae(n=>{n.target&&!o.current&&gl(qg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Ae(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Ae(()=>o.current=!1,"onBlurCapture")}}Ae(Pu,"useFocusOutside");function pl(){let e=new CustomEvent(fl);document.dispatchEvent(e)}Ae(pl,"dispatchUpdate");function gl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?er(r,n):r.dispatchEvent(n)}Ae(gl,"handleAndDispatchCustomEvent");var dt=U(require("react"),1);var Mu=require("react/jsx-runtime"),Wg=Object.defineProperty,ze=(e,t)=>Wg(e,"name",{value:t,configurable:!0}),hl="focusScope.autoFocusOnMount",xl="focusScope.autoFocusOnUnmount",ku={bubbles:!1,cancelable:!0},no=dt.forwardRef(ze(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=dt.useState(null),c=Me(n),d=Me(l),f=dt.useRef(null),g=ee(a,u),h=dt.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;dt.useEffect(()=>{if(r){let v=function(S){if(h.paused||!i)return;let y=S.target;i.contains(y)?f.current=y:Nt(f.current,{select:!0})},L=function(S){if(h.paused||!i)return;let y=S.relatedTarget;y!==null&&(i.contains(y)||Nt(f.current,{select:!0}))},I=function(S){if(document.activeElement===document.body)for(let P of S)P.removedNodes.length>0&&Nt(i)};var m=v,x=L,C=I;ze(v,"handleFocusIn"),ze(L,"handleFocusOut"),ze(I,"handleMutations"),document.addEventListener("focusin",v),document.addEventListener("focusout",L);let b=new MutationObserver(I);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",L),b.disconnect()}}},[r,i,h.paused]),dt.useEffect(()=>{if(i){Du.add(h);let m=document.activeElement;if(!i.contains(m)){let C=new CustomEvent(hl,ku);i.addEventListener(hl,c),i.dispatchEvent(C),C.defaultPrevented||(Au(Bu(Ll(i)),{select:!0}),document.activeElement===m&&Nt(i))}return()=>{i.removeEventListener(hl,c),setTimeout(()=>{let C=new CustomEvent(xl,ku);i.addEventListener(xl,d),i.dispatchEvent(C),C.defaultPrevented||Nt(m??document.body,{select:!0}),i.removeEventListener(xl,d),Du.remove(h)},0)}}},[i,c,d,h]);let p=dt.useCallback(m=>{if(!o&&!r||h.paused)return;let x=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,C=document.activeElement;if(x&&C){let v=m.currentTarget,[L,I]=Tu(v);L&&I?!m.shiftKey&&C===I?(m.preventDefault(),o&&Nt(L,{select:!0})):m.shiftKey&&C===L&&(m.preventDefault(),o&&Nt(I,{select:!0})):C===v&&m.preventDefault()}},[o,r,h.paused]);return(0,Mu.jsx)(oe.div,{tabIndex:-1,...s,ref:g,onKeyDown:p})},"FocusScope"));function Au(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Nt(o,{select:t}),document.activeElement!==a)return}ze(Au,"focusFirst");function Tu(e){let t=Ll(e),a=vl(t,e),o=vl(t.reverse(),e);return[a,o]}ze(Tu,"getTabbableEdges");function Ll(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ze(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}ze(Ll,"getTabbableCandidates");function vl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Eu(o,{upTo:t})))return o}ze(vl,"findVisible");function Eu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}ze(Eu,"isHidden");function Ou(e){return e instanceof HTMLInputElement&&"select"in e}ze(Ou,"isSelectableInput");function Nt(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Ou(e)&&t&&e.select()}}ze(Nt,"focus");var Du=Fu();function Fu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Cl(e,t),e.unshift(t)},remove(t){e=Cl(e,t),e[0]?.resume()}}}ze(Fu,"createFocusScopesStack");function Cl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}ze(Cl,"arrayRemove");function Bu(e){return e.filter(t=>t.tagName!=="A")}ze(Bu,"removeLinks");var Xr=U(require("react"),1),Nu=U(require("react-dom"),1);var _u=require("react/jsx-runtime"),Gg=Object.defineProperty,zg=(e,t)=>Gg(e,"name",{value:t,configurable:!0}),lo=Xr.forwardRef(zg(function(t,a){let{container:o,...r}=t,[n,l]=Xr.useState(!1);se(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Nu.createPortal((0,_u.jsx)(oe.div,{...r,ref:a}),s):null},"Portal"));var Ne=U(require("react"),1);var Hu=U(require("react"),1),Kg=Object.defineProperty,_t=(e,t)=>Kg(e,"name",{value:t,configurable:!0});function Uu(e,t){return Hu.useReducer((a,o)=>t[a][o]??a,e)}_t(Uu,"useStateMachine");var Ht=_t(e=>{let{present:t,children:a}=e,o=qu(t),r=typeof a=="function"?a({present:o.isPresent}):Ne.Children.only(a),n=Vu(o.ref,Wu(r));return typeof a=="function"||o.isPresent?Ne.cloneElement(r,{ref:n}):null},"Presence");function qu(e){let[t,a]=Ne.useState(),o=Ne.useRef(null),r=Ne.useRef(e),n=Ne.useRef("none"),l=Ne.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=Uu(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ne.useEffect(()=>{i==="mounted"?(n.current=l.current??so(o.current),l.current=void 0):n.current="none"},[i]),se(()=>{let c=o.current,d=r.current;if(d!==e){let g=n.current,h=so(c);e?(l.current=h,u("MOUNT")):h==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&g!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),se(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=_t(h=>{let m=so(o.current).includes(CSS.escape(h.animationName));if(h.target===t&&m&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),g=_t(h=>{h.target===t&&(n.current=so(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ne.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=so(d)}else o.current=null;a(c)},[])}}_t(qu,"usePresence");function bl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}_t(bl,"setRef");function Vu(...e){let t=Ne.useRef(e);return t.current=e,Ne.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=bl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():bl(o[l],null)}}},[])}_t(Vu,"useStableComposedRefs");function so(e){return e?.animationName||"none"}_t(so,"getAnimationName");function Wu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}_t(Wu,"getElementRef");var Gu=U(require("react"),1),Xg=Object.defineProperty,wl=(e,t)=>Xg(e,"name",{value:t,configurable:!0}),jr=0,io=null;function jg(e){return ea(),e.children}wl(jg,"FocusGuards");function ea(){Gu.useEffect(()=>{io||(io={start:Il(),end:Il()});let{start:e,end:t}=io;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),jr++,()=>{jr===1&&(io?.start.remove(),io?.end.remove(),io=null),jr=Math.max(0,jr-1)}},[])}wl(ea,"useFocusGuards");function Il(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}wl(Il,"createFocusGuard");var je=function(){return je=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},je.apply(this,arguments)};function $r(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function zu(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var en=U(require("react"));var Ve=U(require("react"));var xa="right-scroll-bar-position",va="width-before-scroll-bar",Sl="with-scroll-bars-hidden",yl="--removed-body-scroll-bar-size";function Yr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Ku=require("react");function Xu(e,t){var a=(0,Ku.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Zr=U(require("react"));var $g=typeof window<"u"?Zr.useLayoutEffect:Zr.useEffect,ju=new WeakMap;function Rl(e,t){var a=Xu(t||null,function(o){return e.forEach(function(r){return Yr(r,o)})});return $g(function(){var o=ju.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Yr(s,null)}),n.forEach(function(s){r.has(s)||Yr(s,l)})}ju.set(a,e)},[e]),a}function Yg(e){return e}function Zg(e,t){t===void 0&&(t=Yg);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Pl(e){e===void 0&&(e={});var t=Zg(null);return t.options=je({async:!0,ssr:!1},e),t}var $u=U(require("react")),Yu=function(e){var t=e.sideCar,a=$r(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return $u.createElement(o,je({},a))};Yu.isSideCarExport=!0;function kl(e,t){return e.useMedium(t),Yu}var Jr=Pl();var Dl=function(){},tr=Ve.forwardRef(function(e,t){var a=Ve.useRef(null),o=Ve.useState({onScrollCapture:Dl,onWheelCapture:Dl,onTouchMoveCapture:Dl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,g=e.noRelative,h=e.noIsolation,p=e.inert,m=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,v=e.gapMode,L=$r(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=f,b=Rl([a,t]),S=je(je({},L),r);return Ve.createElement(Ve.Fragment,null,c&&Ve.createElement(I,{sideCar:Jr,removeScrollBar:u,shards:d,noRelative:g,noIsolation:h,inert:p,setCallbacks:n,allowPinchZoom:!!m,lockRef:a,gapMode:v}),l?Ve.cloneElement(Ve.Children.only(s),je(je({},S),{ref:b})):Ve.createElement(C,je({},S,{className:i,ref:b}),s))});tr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};tr.classNames={fullWidth:va,zeroRight:xa};var fe=U(require("react"));var co=U(require("react"));var Qu=U(require("react"));var Zu;var Ju=function(){if(Zu)return Zu;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Jg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ju();return t&&e.setAttribute("nonce",t),e}function Qg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function eh(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ml=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Jg())&&(Qg(t,a),eh(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Al=function(){var e=Ml();return function(t,a){Qu.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var ar=function(){var e=Al(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var th={left:0,top:0,right:0,gap:0},Tl=function(e){return parseInt(e||"",10)||0},ah=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Tl(a),Tl(o),Tl(r)]},El=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return th;var t=ah(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var oh=ar(),uo="data-scroll-locked",rh=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(Sl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(uo,`] {
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
  
  .`).concat(xa,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(va,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(xa," .").concat(xa,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(va," .").concat(va,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(uo,`] {
    `).concat(yl,": ").concat(s,`px;
  }
`)},ed=function(){var e=parseInt(document.body.getAttribute(uo)||"0",10);return isFinite(e)?e:0},nh=function(){co.useEffect(function(){return document.body.setAttribute(uo,(ed()+1).toString()),function(){var e=ed()-1;e<=0?document.body.removeAttribute(uo):document.body.setAttribute(uo,e.toString())}},[])},Ol=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;nh();var n=co.useMemo(function(){return El(r)},[r]);return co.createElement(oh,{styles:rh(n,!t,r,a?"":"!important")})};var Fl=!1;if(typeof window<"u")try{or=Object.defineProperty({},"passive",{get:function(){return Fl=!0,!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Fl=!1}var or,Ca=Fl?{passive:!1}:!1;var lh=function(e){return e.tagName==="TEXTAREA"},td=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!lh(e)&&a[t]==="visible")},sh=function(e){return td(e,"overflowY")},ih=function(e){return td(e,"overflowX")},Bl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=ad(e,o);if(r){var n=od(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},uh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},dh=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},ad=function(e,t){return e==="v"?sh(t):ih(t)},od=function(e,t){return e==="v"?uh(t):dh(t)},ch=function(e,t){return e==="h"&&t==="rtl"?-1:1},rd=function(e,t,a,o,r){var n=ch(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var g=od(e,s),h=g[0],p=g[1],m=g[2],x=p-m-n*h;(h||x)&&ad(e,s)&&(d+=x,f+=h);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var Qr=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nd=function(e){return[e.deltaX,e.deltaY]},ld=function(e){return e&&"current"in e?e.current:e},fh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ph=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},mh=0,fo=[];function sd(e){var t=fe.useRef([]),a=fe.useRef([0,0]),o=fe.useRef(),r=fe.useState(mh++)[0],n=fe.useState(ar)[0],l=fe.useRef(e);fe.useEffect(function(){l.current=e},[e]),fe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var p=zu([e.lockRef.current],(e.shards||[]).map(ld),!0).filter(Boolean);return p.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),p.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=fe.useCallback(function(p,m){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!l.current.allowPinchZoom;var x=Qr(p),C=a.current,v="deltaX"in p?p.deltaX:C[0]-x[0],L="deltaY"in p?p.deltaY:C[1]-x[1],I,b=p.target,S=Math.abs(v)>Math.abs(L)?"h":"v";if("touches"in p&&S==="h"&&b.type==="range")return!1;var y=window.getSelection(),P=y&&y.anchorNode,T=P?P===b||P.contains(b):!1;if(T)return!1;var M=Bl(S,b);if(!M)return!0;if(M?I=S:(I=S==="v"?"h":"v",M=Bl(S,b)),!M)return!1;if(!o.current&&"changedTouches"in p&&(v||L)&&(o.current=I),!I)return!0;var E=o.current||I;return rd(E,m,p,E==="h"?v:L,!0)},[]),i=fe.useCallback(function(p){var m=p;if(!(!fo.length||fo[fo.length-1]!==n)){var x="deltaY"in m?nd(m):Qr(m),C=t.current.filter(function(I){return I.name===m.type&&(I.target===m.target||m.target===I.shadowParent)&&fh(I.delta,x)})[0];if(C&&C.should){m.cancelable&&m.preventDefault();return}if(!C){var v=(l.current.shards||[]).map(ld).filter(Boolean).filter(function(I){return I.contains(m.target)}),L=v.length>0?s(m,v[0]):!l.current.noIsolation;L&&m.cancelable&&m.preventDefault()}}},[]),u=fe.useCallback(function(p,m,x,C){var v={name:p,delta:m,target:x,should:C,shadowParent:gh(x)};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(L){return L!==v})},1)},[]),c=fe.useCallback(function(p){a.current=Qr(p),o.current=void 0},[]),d=fe.useCallback(function(p){u(p.type,nd(p),p.target,s(p,e.lockRef.current))},[]),f=fe.useCallback(function(p){u(p.type,Qr(p),p.target,s(p,e.lockRef.current))},[]);fe.useEffect(function(){return fo.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Ca),document.addEventListener("touchmove",i,Ca),document.addEventListener("touchstart",c,Ca),function(){fo=fo.filter(function(p){return p!==n}),document.removeEventListener("wheel",i,Ca),document.removeEventListener("touchmove",i,Ca),document.removeEventListener("touchstart",c,Ca)}},[]);var g=e.removeScrollBar,h=e.inert;return fe.createElement(fe.Fragment,null,h?fe.createElement(n,{styles:ph(r)}):null,g?fe.createElement(Ol,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function gh(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var id=kl(Jr,sd);var ud=en.forwardRef(function(e,t){return en.createElement(tr,je({},e,{ref:t,sideCar:id}))});ud.classNames=tr.classNames;var La=ud;var hh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},po=new WeakMap,tn=new WeakMap,an={},Nl=0,dd=function(e){return e&&(e.host||dd(e.parentNode))},xh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=dd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},vh=function(e,t,a,o){var r=xh(t,Array.isArray(e)?e:[e]);an[a]||(an[a]=new WeakMap);var n=an[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var g=f.getAttribute(o),h=g!==null&&g!=="false",p=(po.get(f)||0)+1,m=(n.get(f)||0)+1;po.set(f,p),n.set(f,m),l.push(f),p===1&&h&&tn.set(f,!0),m===1&&f.setAttribute(a,"true"),h||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),Nl++,function(){l.forEach(function(d){var f=po.get(d)-1,g=n.get(d)-1;po.set(d,f),n.set(d,g),f||(tn.has(d)||d.removeAttribute(o),tn.delete(d)),g||d.removeAttribute(a)}),Nl--,Nl||(po=new WeakMap,po=new WeakMap,tn=new WeakMap,an={})}},mo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||hh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),vh(o,r,a,"aria-hidden")):function(){return null}};var ve=require("react/jsx-runtime"),Ch=Object.defineProperty,ct=(e,t)=>Ch(e,"name",{value:t,configurable:!0}),Hl="Dialog",[cd,TI]=Be(Hl),[Lh,Pt]=cd(Hl),fd=ct(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=pe.useRef(null),i=pe.useRef(null),[u,c]=Rt({prop:o,defaultProp:r??!1,onChange:n,caller:Hl}),[d,f]=pe.useState(0),[g,h]=pe.useState(0);return(0,ve.jsx)(Lh,{scope:t,triggerRef:s,contentRef:i,contentId:tt(),titleId:tt(),descriptionId:tt(),titlePresent:d>0,descriptionPresent:g>0,setTitleCount:f,setDescriptionCount:h,open:u,onOpenChange:c,onOpenToggle:pe.useCallback(()=>c(p=>!p),[c]),modal:l,children:a})},"Dialog");var pd="DialogPortal",[bh,md]=cd(pd,{forceMount:void 0}),gd=ct(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Pt(pd,t);return(0,ve.jsx)(bh,{scope:t,forceMount:a,children:pe.Children.map(o,l=>(0,ve.jsx)(Ht,{present:a||n.open,children:(0,ve.jsx)(lo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),_l="DialogOverlay",Ul=pe.forwardRef(ct(function(t,a){let o=md(_l,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Pt(_l,t.__scopeDialog);return l.modal?(0,ve.jsx)(Ht,{present:r||l.open,children:(0,ve.jsx)(wh,{...n,ref:a})}):null},"DialogOverlay")),Ih=qe("DialogOverlay.RemoveScroll"),wh=pe.forwardRef(ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(_l,o),l=ml(),s=ee(a,l);return(0,ve.jsx)(La,{as:Ih,allowPinchZoom:!0,shards:[n.contentRef],children:(0,ve.jsx)(oe.div,{"data-state":Gl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),rr="DialogContent",ql=pe.forwardRef(ct(function(t,a){let o=md(rr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Pt(rr,t.__scopeDialog);return(0,ve.jsx)(Ht,{present:r||l.open,children:l.modal?(0,ve.jsx)(Sh,{...n,ref:a}):(0,ve.jsx)(yh,{...n,ref:a})})},"DialogContent")),Sh=pe.forwardRef(ct(function(t,a){let o=Pt(rr,t.__scopeDialog),r=pe.useRef(null),n=ee(a,o.contentRef,r);return pe.useEffect(()=>{let l=r.current;if(l)return mo(l)},[]),(0,ve.jsx)(hd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:q(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:q(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),yh=pe.forwardRef(ct(function(t,a){let o=Pt(rr,t.__scopeDialog),r=pe.useRef(!1),n=pe.useRef(!1);return(0,ve.jsx)(hd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),hd=pe.forwardRef(ct(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Pt(rr,o);return ea(),(0,ve.jsx)(ve.Fragment,{children:(0,ve.jsx)(no,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,ve.jsx)(ro,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Gl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Rh="DialogTitle",Vl=pe.forwardRef(ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(Rh,o),{setTitleCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,ve.jsx)(oe.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Ph="DialogDescription",Wl=pe.forwardRef(ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(Ph,o),{setDescriptionCount:l}=n;return se(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,ve.jsx)(oe.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),kh="DialogClose",xd=pe.forwardRef(ct(function(t,a){let{__scopeDialog:o,...r}=t,n=Pt(kh,o);return(0,ve.jsx)(oe.button,{type:"button",...r,ref:a,onClick:q(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Gl(e){return e?"open":"closed"}ct(Gl,"getState");var Cd=require("react"),zl="dsh-kanban",Ld={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Mh={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},ba=null,Kl=null;function bd(e){let t=e.get("locale");if(t!==void 0){ba=t;try{t.register(zl,"zh",Ld),t.register(zl,"en",Mh)}catch{}Kl=t.bind(zl)}}function go(e){return Kl?Kl(e):Ld[e]??e}var Ah=e=>ba&&typeof ba.subscribe=="function"?ba.subscribe(e):()=>{},vd=()=>ba&&typeof ba.getSnapshot=="function"?ba.getSnapshot():null;function Ke(){return(0,Cd.useSyncExternalStore)(Ah,vd,vd),go}var at=require("react/jsx-runtime"),ho=fd;var Th=gd;var Id=nr.forwardRef(({className:e,...t},a)=>(0,at.jsx)(Ul,{ref:a,className:ae("kanban-portal kanban-dialog-overlay",e),...t}));Id.displayName=Ul.displayName;var Ia=nr.forwardRef(({className:e,children:t,...a},o)=>{let r=Ke();return(0,at.jsxs)(Th,{children:[(0,at.jsx)(Id,{}),(0,at.jsxs)(ql,{ref:o,className:ae("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,at.jsxs)(xd,{className:"kanban-dialog-close",children:[(0,at.jsx)(Jo,{className:"kanban-dialog-close-icon"}),(0,at.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Ia.displayName=ql.displayName;var wa=({className:e,...t})=>(0,at.jsx)("div",{className:ae("kanban-dialog-header",e),...t});wa.displayName="DialogHeader";var lr=({className:e,...t})=>(0,at.jsx)("div",{className:ae("kanban-dialog-footer",e),...t});lr.displayName="DialogFooter";var Sa=nr.forwardRef(({className:e,...t},a)=>(0,at.jsx)(Vl,{ref:a,className:ae("kanban-dialog-title",e),...t}));Sa.displayName=Vl.displayName;var sr=nr.forwardRef(({className:e,...t},a)=>(0,at.jsx)(Wl,{ref:a,className:ae("kanban-dialog-description",e),...t}));sr.displayName=Wl.displayName;var gr=U(require("react"),1);var bt=U(require("react"),1);var Z=U(require("react"),1);var ht=U(require("react"),1);var on=require("react/jsx-runtime"),$e=U(require("react"),1);var ya=require("react/jsx-runtime");var Eh=Object.defineProperty,Te=(e,t)=>Eh(e,"name",{value:t,configurable:!0});function Ra(e){let t=e+"CollectionProvider",[a,o]=Be(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Te(p=>{let{scope:m,children:x}=p,C=ht.useRef(null),v=ht.useRef(new Map).current;return(0,on.jsx)(r,{scope:m,itemMap:v,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=qe(s),u=ht.forwardRef((p,m)=>{let{scope:x,children:C}=p,v=n(s,x),L=ee(m,v.collectionRef);return(0,on.jsx)(i,{ref:L,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=qe(c),g=ht.forwardRef((p,m)=>{let{scope:x,children:C,...v}=p,L=ht.useRef(null),I=ee(m,L),b=n(c,x);return ht.useEffect(()=>(b.itemMap.set(L,{ref:L,...v}),()=>{b.itemMap.delete(L)})),(0,on.jsx)(f,{[d]:"",ref:I,children:C})});g.displayName=c;function h(p){let m=n(e+"CollectionConsumer",p);return ht.useCallback(()=>{let C=m.collectionRef.current;if(!C)return[];let v=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(m.itemMap.values()).sort((b,S)=>v.indexOf(b.ref.current)-v.indexOf(S.ref.current))},[m.collectionRef,m.itemMap])}return Te(h,"useCollection"),[{Provider:l,Slot:u,ItemSlot:g},h,o]}Te(Ra,"createCollection");var wd=new WeakMap,we,ot,Xl=(ot=class extends Map{constructor(a){super(a);ti(this,we);Vn(this,we,[...super.keys()]),wd.set(this,!0)}set(a,o){return wd.get(this)&&(this.has(a)?He(this,we)[He(this,we).indexOf(a)]=a:He(this,we).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=He(this,we).length,s=$l(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...He(this,we)],f,g=!1;for(let h=i;h<c;h++)if(i===h){let p=d[h];d[h]===o&&(p=d[h+1]),n&&this.delete(o),f=this.get(p),this.set(o,r)}else{!g&&d[h-1]===o&&(g=!0);let p=d[g?h:h-1],m=f;f=this.get(p),this.delete(p),this.set(p,m)}return this}with(a,o,r){let n=new ot(this);return n.insert(a,o,r),n}before(a){let o=He(this,we).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=He(this,we).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=He(this,we).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=He(this,we).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Vn(this,we,[]),super.clear()}delete(a){let o=super.delete(a);return o&&He(this,we).splice(He(this,we).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=rn(He(this,we),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=rn(He(this,we),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return He(this,we).indexOf(a)}keyAt(a){return rn(He(this,we),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new ot(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new ot(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new ot(o)}toReversed(){let a=new ot;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new ot(o)}slice(a,o){let r=new ot,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},we=new WeakMap,Te(ot,"OrderedDict"),ot);function rn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Sd(e,t);return a===-1?void 0:e[a]}Te(rn,"at");function Sd(e,t){let a=e.length,o=$l(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Te(Sd,"toSafeIndex");function $l(e){return e!==e||e===0?0:Math.trunc(e)}Te($l,"toSafeInteger");function Oh(e){let t=e+"CollectionProvider",[a,o]=Be(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Xl,setItemMap:Te(()=>{},"setItemMap")}),l=Te(({state:v,...L})=>v?(0,ya.jsx)(i,{...L,state:v}):(0,ya.jsx)(s,{...L}),"CollectionProvider");l.displayName=t;let s=Te(v=>{let L=m();return(0,ya.jsx)(i,{...v,state:L})},"CollectionInit");s.displayName=t+"Init";let i=Te(v=>{let{scope:L,children:I,state:b}=v,S=$e.useRef(null),[y,P]=$e.useState(null),T=ee(S,P),[M,E]=b;return $e.useEffect(()=>{if(!y)return;let N=Pd(()=>{});return N.observe(y,{childList:!0,subtree:!0}),()=>{N.disconnect()}},[y]),(0,ya.jsx)(r,{scope:L,itemMap:M,setItemMap:E,collectionRef:T,collectionRefObject:S,collectionElement:y,children:I})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=qe(u),d=$e.forwardRef((v,L)=>{let{scope:I,children:b}=v,S=n(u,I),y=ee(L,S.collectionRef);return(0,ya.jsx)(c,{ref:y,children:b})});d.displayName=u;let f=e+"CollectionItemSlot",g="data-radix-collection-item",h=qe(f),p=$e.forwardRef((v,L)=>{let{scope:I,children:b,...S}=v,y=$e.useRef(null),[P,T]=$e.useState(null),M=ee(L,y,T),E=n(f,I),{setItemMap:N}=E,H=$e.useRef(S);yd(H.current,S)||(H.current=S);let Q=H.current;return $e.useEffect(()=>{let $=Q;return N(O=>P?O.has(P)?O.set(P,{...$,element:P}).toSorted(jl):(O.set(P,{...$,element:P}),O.toSorted(jl)):O),()=>{N(O=>!P||!O.has(P)?O:(O.delete(P),new Xl(O)))}},[P,Q,N]),(0,ya.jsx)(h,{[g]:"",ref:M,children:b})});p.displayName=f;function m(){return $e.useState(new Xl)}Te(m,"useInitCollection");function x(v){let{itemMap:L}=n(e+"CollectionConsumer",v);return L}return Te(x,"useCollection"),[{Provider:l,Slot:d,ItemSlot:p},{createCollectionScope:o,useCollection:x,useInitCollection:m}]}Te(Oh,"createCollection");function yd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Te(yd,"shallowEqual");function Rd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Te(Rd,"isElementPreceding");function jl(e,t){return!e[1].element||!t[1].element?0:Rd(e[1].element,t[1].element)?-1:1}Te(jl,"sortByDocumentPosition");function Pd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Te(Pd,"getChildListObserver");var nn=U(require("react"),1),Nh=require("react/jsx-runtime"),Fh=Object.defineProperty,Bh=(e,t)=>Fh(e,"name",{value:t,configurable:!0}),_h=nn.createContext(void 0);function Pa(e){let t=nn.useContext(_h);return e||t||"ltr"}Bh(Pa,"useDirection");var We=U(require("react"),1);var Md=["top","right","bottom","left"];var kt=Math.min,xt=Math.max,ur=Math.round,dr=Math.floor,Dt=e=>({x:e,y:e}),Hh={left:"right",right:"left",bottom:"top",top:"bottom"};function Yl(e,t,a){return xt(e,kt(t,a))}function Mt(e,t){return typeof e=="function"?e(t):e}function Ut(e){return e.split("-")[0]}function ka(e){return e.split("-")[1]}function sn(e){return e==="x"?"y":"x"}function un(e){return e==="y"?"height":"width"}function vt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function dn(e){return sn(vt(e))}function Ad(e,t,a){a===void 0&&(a=!1);let o=ka(e),r=dn(e),n=un(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=ir(l)),[l,ir(l)]}function Td(e){let t=ir(e);return[ln(e),t,ln(t)]}function ln(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var kd=["left","right"],Dd=["right","left"],Uh=["top","bottom"],qh=["bottom","top"];function Vh(e,t,a){switch(e){case"top":case"bottom":return a?t?Dd:kd:t?kd:Dd;case"left":case"right":return t?Uh:qh;default:return[]}}function Ed(e,t,a,o){let r=ka(e),n=Vh(Ut(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(ln)))),n}function ir(e){let t=Ut(e);return Hh[t]+e.slice(t.length)}function Wh(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Zl(e){return typeof e!="number"?Wh(e):{top:e,right:e,bottom:e,left:e}}function Da(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Od(e,t,a){let{reference:o,floating:r}=e,n=vt(t),l=dn(t),s=un(l),i=Ut(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,g;switch(i){case"top":g={x:c,y:o.y-r.height};break;case"bottom":g={x:c,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-r.width,y:d};break;default:g={x:o.x,y:o.y}}let h=ka(t);return h&&(g[l]+=f*(h==="end"?1:-1)*(a&&u?-1:1)),g}async function Nd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:g=0}=Mt(t,e),h=Zl(g),m=s[f?d==="floating"?"reference":"floating":d],x=Da(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(m)))==null||a?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),L=await(n.isElement==null?void 0:n.isElement(v))&&await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1},I=Da(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:v,strategy:i}):C);return{top:(x.top-I.top+h.top)/L.y,bottom:(I.bottom-x.bottom+h.bottom)/L.y,left:(x.left-I.left+h.left)/L.x,right:(I.right-x.right+h.right)/L.x}}var Gh=50,_d=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Nd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Od(u,o,i),f=o,g=0,h={};for(let p=0;p<n.length;p++){let m=n[p];if(!m)continue;let{name:x,fn:C}=m,{x:v,y:L,data:I,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:u,platform:s,elements:{reference:e,floating:t}});c=v??c,d=L??d,h[x]={...h[x],...I},b&&g<Gh&&(g++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=Od(u,f,i)),p=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}},Hd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Mt(e,t)||{};if(u==null)return{};let d=Zl(c),f={x:a,y:o},g=dn(r),h=un(g),p=await l.getDimensions(u),m=g==="y",x=m?"top":"left",C=m?"bottom":"right",v=m?"clientHeight":"clientWidth",L=n.reference[h]+n.reference[g]-f[g]-n.floating[h],I=f[g]-n.reference[g],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),S=b?b[v]:0;(!S||!await(l.isElement==null?void 0:l.isElement(b)))&&(S=s.floating[v]||n.floating[h]);let y=L/2-I/2,P=S/2-p[h]/2-1,T=kt(d[x],P),M=kt(d[C],P),E=S-p[h]-M,N=S/2-p[h]/2+y,H=Yl(T,N,E),Q=!i.arrow&&ka(r)!=null&&N!==H&&n.reference[h]/2-(N<T?T:M)-p[h]/2<0,$=Q?N<T?N-T:N-E:0;return{[g]:f[g]+$,data:{[g]:H,centerOffset:N-H-$,...Q&&{alignmentOffset:$}},reset:Q}}});var Ud=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...m}=Mt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Ut(r),C=vt(s),v=Ut(s)===s,L=await(i.isRTL==null?void 0:i.isRTL(u.floating)),I=f||(v||!p?[ir(s)]:Td(s)),b=h!=="none";!f&&b&&I.push(...Ed(s,p,h,L));let S=[s,...I],y=await i.detectOverflow(t,m),P=[],T=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(y[x]),d){let H=Ad(r,l,L);P.push(y[H[0]],y[H[1]])}if(T=[...T,{placement:r,overflows:P}],!P.every(H=>H<=0)){var M,E;let H=(((M=n.flip)==null?void 0:M.index)||0)+1,Q=S[H];if(Q&&(!(d==="alignment"?C!==vt(Q):!1)||T.every(_=>vt(_.placement)===C?_.overflows[0]>0:!0)))return{data:{index:H,overflows:T},reset:{placement:Q}};let $=(E=T.filter(O=>O.overflows[0]<=0).sort((O,_)=>O.overflows[1]-_.overflows[1])[0])==null?void 0:E.placement;if(!$)switch(g){case"bestFit":{var N;let O=(N=T.filter(_=>{if(b){let G=vt(_.placement);return G===C||G==="y"}return!0}).map(_=>[_.placement,_.overflows.filter(G=>G>0).reduce((G,A)=>G+A,0)]).sort((_,G)=>_[1]-G[1])[0])==null?void 0:N[0];O&&($=O);break}case"initialPlacement":$=s;break}if(r!==$)return{reset:{placement:$}}}return{}}}};function Fd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Bd(e){return Md.some(t=>e[t]>=0)}var qd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Mt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Fd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Bd(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Fd(l,a.floating);return{data:{escapedOffsets:s,escaped:Bd(s)}}}default:return{}}}}};var Vd=new Set(["left","top"]);async function zh(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Ut(a),s=ka(a),i=vt(a)==="y",u=Vd.has(l)?-1:1,c=n&&i?-1:1,d=Mt(t,e),{mainAxis:f,crossAxis:g,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof h=="number"&&(g=s==="end"?h*-1:h),i?{x:g*c,y:f*u}:{x:f*u,y:g*c}}var Wd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await zh(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Gd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:v,y:L}=C;return{x:v,y:L}}},...u}=Mt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=vt(r),g=sn(f),h=c[g],p=c[f],m=(C,v)=>Yl(v+d[C==="y"?"top":"left"],v,v-d[C==="y"?"bottom":"right"]);l&&(h=m(g,h)),s&&(p=m(f,p));let x=i.fn({...t,[g]:h,[f]:p});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[g]:l,[f]:s}}}}}},zd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Mt(e,t),f={x:r,y:n},g=vt(l),h=sn(g),p=f[h],m=f[g],x=Mt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let I=h==="y"?"height":"width",b=s.reference[h]-s.floating[I]+C.mainAxis,S=s.reference[h]+s.reference[I]-C.mainAxis;p<b?p=b:p>S&&(p=S)}if(d){var v,L;let I=h==="y"?"width":"height",b=Vd.has(Ut(l)),S=s.reference[g]-s.floating[I]+(b&&((v=i.offset)==null?void 0:v[g])||0)+(b?0:C.crossAxis),y=s.reference[g]+s.reference[I]+(b?0:((L=i.offset)==null?void 0:L[g])||0)-(b?C.crossAxis:0);m<S?m=S:m>y&&(m=y)}return{[h]:p,[g]:m}}}},Kd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Mt(e,t),i=await r.detectOverflow(t,s),u=Ut(a),c=ka(a),d=vt(a)==="y",{width:f,height:g}=o.floating,h,p;u==="top"||u==="bottom"?(h=u,p=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(p=u,h=c==="end"?"top":"bottom");let m=g-i.top-i.bottom,x=f-i.left-i.right,C=kt(g-i[h],m),v=kt(f-i[p],x),L=t.middlewareData.shift,I=!L,b=C,S=v;L!=null&&L.enabled.x&&(S=x),L!=null&&L.enabled.y&&(b=m),I&&!c&&(d?S=f-2*xt(i.left,i.right):b=g-2*xt(i.top,i.bottom)),await l({...t,availableWidth:S,availableHeight:b});let y=await r.getDimensions(n.floating);return f!==y.width||g!==y.height?{reset:{rects:!0}}:{}}}};function cn(){return typeof window<"u"}function Ta(e){return jd(e)?(e.nodeName||"").toLowerCase():"#document"}function Xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function At(e){var t;return(t=(jd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function jd(e){return cn()?e instanceof Node||e instanceof Xe(e).Node:!1}function Ct(e){return cn()?e instanceof Element||e instanceof Xe(e).Element:!1}function qt(e){return cn()?e instanceof HTMLElement||e instanceof Xe(e).HTMLElement:!1}function Xd(e){return!cn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Xe(e).ShadowRoot}function cr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Lt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function $d(e){return/^(table|td|th)$/.test(Ta(e))}function fr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Kh=/transform|translate|scale|rotate|perspective|filter/,Xh=/paint|layout|strict|content/,Ma=e=>!!e&&e!=="none",Jl;function fn(e){let t=Ct(e)?Lt(e):e;return Ma(t.transform)||Ma(t.translate)||Ma(t.scale)||Ma(t.rotate)||Ma(t.perspective)||!pn()&&(Ma(t.backdropFilter)||Ma(t.filter))||Kh.test(t.willChange||"")||Xh.test(t.contain||"")}function Yd(e){let t=ta(e);for(;qt(t)&&!xo(t);){if(fn(t))return t;if(fr(t))return null;t=ta(t)}return null}function pn(){return Jl==null&&(Jl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Jl}function xo(e){return/^(html|body|#document)$/.test(Ta(e))}function Lt(e){return Xe(e).getComputedStyle(e)}function pr(e){return Ct(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ta(e){if(Ta(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Xd(e)&&e.host||At(e);return Xd(t)?t.host:t}function Zd(e){let t=ta(e);return xo(t)?(e.ownerDocument||e).body:qt(t)&&cr(t)?t:Zd(t)}function Aa(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=Zd(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Xe(r);if(n){let s=mn(l);return t.concat(l,l.visualViewport||[],cr(r)?r:[],s&&a?Aa(s):[])}else return t.concat(r,Aa(r,[],a))}function mn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ec(e){let t=Lt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=qt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=ur(a)!==n||ur(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function es(e){return Ct(e)?e:e.contextElement}function vo(e){let t=es(e);if(!qt(t))return Dt(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=ec(t),l=(n?ur(a.width):a.width)/o,s=(n?ur(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var jh=Dt(0);function tc(e){let t=Xe(e);return!pn()||!t.visualViewport?jh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $h(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===Xe(e)}function Ea(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=es(e),l=Dt(1);t&&(o?Ct(o)&&(l=vo(o)):l=vo(e));let s=$h(n,a,o)?tc(n):Dt(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=Xe(n),g=Ct(o)?Xe(o):o,h=f,p=mn(h);for(;p&&g!==h;){let m=vo(p),x=p.getBoundingClientRect(),C=Lt(p),v=x.left+(p.clientLeft+parseFloat(C.paddingLeft))*m.x,L=x.top+(p.clientTop+parseFloat(C.paddingTop))*m.y;i*=m.x,u*=m.y,c*=m.x,d*=m.y,i+=v,u+=L,h=Xe(p),p=mn(h)}}return Da({width:c,height:d,x:i,y:u})}function gn(e,t){let a=pr(e).scrollLeft;return t?t.left+a:Ea(At(e)).left+a}function ac(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-gn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function Yh(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=At(o),s=t?fr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Dt(1),c=Dt(0),d=qt(o);if((d||!n)&&((Ta(o)!=="body"||cr(l))&&(i=pr(o)),d)){let g=Ea(o);u=vo(o),c.x=g.x+o.clientLeft,c.y=g.y+o.clientTop}let f=l&&!d&&!n?ac(l,i):Dt(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function Zh(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Jh(e){let t=pr(e),a=e.ownerDocument.body,o=xt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=xt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+gn(e),l=-t.scrollTop;return Lt(a).direction==="rtl"&&(n+=xt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var Qh=25;function ex(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=Xe(e),n=At(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!pn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(gn(n)<=0){let f=n.ownerDocument,g=f.body,h=getComputedStyle(g),p=f.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,m=Math.abs(n.clientWidth-g.clientWidth-p),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?m/2:m;x<=Qh&&(s-=x)}return{width:s,height:i,x:u,y:c}}function tx(e,t){let a=Ea(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=vo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function Jd(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=ex(e,a,t);else if(t==="document")o=Jh(At(e));else if(Ct(t))o=tx(t,a);else{let r=tc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Da(o)}function ax(e,t){let a=t.get(e);if(a)return a;let o=Aa(e,[],!1).filter(s=>Ct(s)&&Ta(s)!=="body"),r=null,n=Lt(e).position==="fixed",l=n?ta(e):e;for(;Ct(l)&&!xo(l);){let s=Lt(l),i=fn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=ta(l)}return t.set(e,o),o}function ox(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?fr(t)?[]:ax(t,this._c):[].concat(a),o],s=Jd(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let g=Jd(t,l[f],r);i=xt(g.top,i),u=kt(g.right,u),c=kt(g.bottom,c),d=xt(g.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function rx(e){let{width:t,height:a}=ec(e);return{width:t,height:a}}function nx(e,t,a){let o=qt(t),r=At(t),n=a==="fixed",l=Ea(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Dt(0);if((o||!n)&&((Ta(t)!=="body"||cr(r))&&(s=pr(t)),o)){let f=Ea(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=gn(r));let u=r&&!o&&!n?ac(r,s):Dt(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function Ql(e){return Lt(e).position==="static"}function Qd(e,t){if(!qt(e)||Lt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return At(e)===a&&(a=a.ownerDocument.body),a}function oc(e,t){let a=Xe(e);if(fr(e))return a;if(!qt(e)){let r=ta(e);for(;r&&!xo(r);){if(Ct(r)&&!Ql(r))return r;r=ta(r)}return a}let o=Qd(e,t);for(;o&&$d(o)&&Ql(o);)o=Qd(o,t);return o&&xo(o)&&Ql(o)&&!fn(o)?a:o||Yd(e)||a}var lx=async function(e){let t=this.getOffsetParent||oc,a=this.getDimensions,o=await a(e.floating);return{reference:nx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function sx(e){return Lt(e).direction==="rtl"}var rc={convertOffsetParentRelativeRectToViewportRelativeRect:Yh,getDocumentElement:At,getClippingRect:ox,getOffsetParent:oc,getElementRects:lx,getClientRects:Zh,getDimensions:rx,getScale:vo,isElement:Ct,isRTL:sx};function nc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ix(e,t,a){let o=null,r,n=At(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:g,top:h,width:p,height:m}=f;if(c||t(),!p||!m)return;let x=dr(h),C=dr(n.clientWidth-(g+p)),v=dr(n.clientHeight-(h+m)),L=dr(g),b={rootMargin:-x+"px "+-C+"px "+-v+"px "+-L+"px",threshold:xt(0,kt(1,d))||1},S=!0;function y(P){let T=P[0].intersectionRatio;if(!nc(f,e.getBoundingClientRect()))return s();if(T!==d){if(!S)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}S=!1}try{o=new IntersectionObserver(y,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(y,b)}o.observe(e)}let i=Xe(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function ts(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=es(e),c=r||n?[...u?Aa(u):[],...t?Aa(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?ix(u,a,n):null,f=-1,g=null;l&&(g=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=g)==null||v.observe(t)})),a()}),u&&!i&&g.observe(u),t&&g.observe(t));let h,p=i?Ea(e):null;i&&m();function m(){let x=Ea(e);p&&!nc(p,x)&&a(),p=x,h=requestAnimationFrame(m)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=g)==null||x.disconnect(),g=null,i&&cancelAnimationFrame(h)}}var lc=Wd;var sc=Gd,ic=Ud,uc=Kd,dc=qd,as=Hd;var cc=zd,os=(e,t,a)=>{let o=new Map,r=a??{},n={...rc,...r.platform,_c:o};return _d(e,t,{...r,platform:n})};var Se=U(require("react"),1),pc=require("react"),mc=U(require("react-dom"),1),ux=typeof document<"u",dx=function(){},hn=ux?pc.useLayoutEffect:dx;function xn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!xn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!xn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function gc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function fc(e,t){let a=gc(e);return Math.round(t*a)/a}function rs(e){let t=Se.useRef(e);return hn(()=>{t.current=e}),t}function hc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=Se.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,g]=Se.useState(o);xn(f,o)||g(o);let[h,p]=Se.useState(null),[m,x]=Se.useState(null),C=Se.useCallback(_=>{_!==b.current&&(b.current=_,p(_))},[]),v=Se.useCallback(_=>{_!==S.current&&(S.current=_,x(_))},[]),L=n||h,I=l||m,b=Se.useRef(null),S=Se.useRef(null),y=Se.useRef(c),P=i!=null,T=rs(i),M=rs(r),E=rs(u),N=Se.useCallback(()=>{if(!b.current||!S.current)return;let _={placement:t,strategy:a,middleware:f};M.current&&(_.platform=M.current),os(b.current,S.current,_).then(G=>{let A={...G,isPositioned:E.current!==!1};H.current&&!xn(y.current,A)&&(y.current=A,mc.flushSync(()=>{d(A)}))})},[f,t,a,M,E]);hn(()=>{u===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,d(_=>({..._,isPositioned:!1})))},[u]);let H=Se.useRef(!1);hn(()=>(H.current=!0,()=>{H.current=!1}),[]),hn(()=>{if(L&&(b.current=L),I&&(S.current=I),L&&I){if(T.current)return T.current(L,I,N);N()}},[L,I,N,T,P]);let Q=Se.useMemo(()=>({reference:b,floating:S,setReference:C,setFloating:v}),[C,v]),$=Se.useMemo(()=>({reference:L,floating:I}),[L,I]),O=Se.useMemo(()=>{let _={position:a,left:0,top:0};if(!$.floating)return _;let G=fc($.floating,c.x),A=fc($.floating,c.y);return s?{..._,transform:"translate("+G+"px, "+A+"px)",...gc($.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:G,top:A}},[a,s,$.floating,c.x,c.y]);return Se.useMemo(()=>({...c,update:N,refs:Q,elements:$,floatingStyles:O}),[c,N,Q,$,O])}var cx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?as({element:o.current,padding:r}).fn(a):{}:o?as({element:o,padding:r}).fn(a):{}}}},xc=(e,t)=>{let a=lc(e);return{name:a.name,fn:a.fn,options:[e,t]}},vc=(e,t)=>{let a=sc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Cc=(e,t)=>({fn:cc(e).fn,options:[e,t]}),Lc=(e,t)=>{let a=ic(e);return{name:a.name,fn:a.fn,options:[e,t]}},bc=(e,t)=>{let a=uc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ic=(e,t)=>{let a=dc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var wc=(e,t)=>{let a=cx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Sc=U(require("react"),1);var fx=Object.defineProperty,px=(e,t)=>fx(e,"name",{value:t,configurable:!0});function ns(e){let[t,a]=Sc.useState(void 0);return se(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}px(ns,"useSize");var Co=require("react/jsx-runtime"),mx=Object.defineProperty,aa=(e,t)=>mx(e,"name",{value:t,configurable:!0});var yc="Popper",[Rc,Lo]=Be(yc),[gx,Pc]=Rc(yc),hx=aa(e=>{let{__scopePopper:t,children:a}=e,[o,r]=We.useState(null),[n,l]=We.useState(void 0);return(0,Co.jsx)(gx,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),xx="PopperAnchor",vx=We.forwardRef(aa(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Pc(xx,o),s=We.useRef(null),i=l.onAnchorChange,u=We.useCallback(p=>{s.current=p,p&&i(p)},[i]),c=ee(a,u),d=We.useRef(null);We.useEffect(()=>{if(!r)return;let p=d.current;d.current=r.current,p!==d.current&&i(d.current)});let f=l.placementState&&vn(l.placementState),g=f?.[0],h=f?.[1];return r?null:(0,Co.jsx)(oe.div,{"data-radix-popper-side":g,"data-radix-popper-align":h,...n,ref:c})},"PopperAnchor")),kc="PopperContent",[Cx,bw]=Rc(kc),Lx=We.forwardRef(aa(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:g=!1,updatePositionStrategy:h="optimized",onPlaced:p,...m}=t,x=Pc(kc,o),[C,v]=We.useState(null),L=ee(a,v),[I,b]=We.useState(null),S=ns(I),y=S?.width??0,P=S?.height??0,T=r+(l!=="center"?"-"+l:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},E=Array.isArray(c)?c:[c],N=E.length>0,H={padding:M,boundary:E.filter(Dc),altBoundary:N},{refs:Q,floatingStyles:$,placement:O,isPositioned:_,middlewareData:G}=hc({strategy:"fixed",placement:T,whileElementsMounted:aa((...X)=>ts(...X,{animationFrame:h==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[xc({mainAxis:n+P,alignmentAxis:s}),u&&vc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Cc():void 0,...H}),u&&Lc({...H}),bc({...H,apply:aa(({elements:X,rects:B,availableWidth:j,availableHeight:Y})=>{let{width:te,height:xe}=B.reference,ye=X.floating.style;ye.setProperty("--radix-popper-available-width",`${j}px`),ye.setProperty("--radix-popper-available-height",`${Y}px`),ye.setProperty("--radix-popper-anchor-width",`${te}px`),ye.setProperty("--radix-popper-anchor-height",`${xe}px`)},"apply")}),I&&wc({element:I,padding:i}),bx({arrowWidth:y,arrowHeight:P}),g&&Ic({strategy:"referenceHidden",...H,boundary:N?H.boundary:void 0})]}),A=x.setPlacementState;se(()=>(A(O),()=>{A(void 0)}),[O,A]);let[me,J]=vn(O),le=Me(p);se(()=>{_&&le?.()},[_,le]);let he=G.arrow?.x,R=G.arrow?.y,F=G.arrow?.centerOffset!==0,[W,k]=We.useState();return se(()=>{C&&k(window.getComputedStyle(C).zIndex)},[C]),(0,Co.jsx)("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:_?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:W,"--radix-popper-transform-origin":[G.transformOrigin?.x,G.transformOrigin?.y].join(" "),...G.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Co.jsx)(Cx,{scope:o,placedSide:me,placedAlign:J,onArrowChange:b,arrowX:he,arrowY:R,shouldHideArrow:F,children:(0,Co.jsx)(oe.div,{"data-side":me,"data-align":J,...m,ref:L,style:{...m.style,animation:_?m.style?.animation:"none"}})})})},"PopperContent"));function Dc(e){return e!==null}aa(Dc,"isNotNull");var bx=aa(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=vn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,g=(r.arrow?.y??0)+i/2,h="",p="";return u==="bottom"?(h=l?d:`${f}px`,p=`${-i}px`):u==="top"?(h=l?d:`${f}px`,p=`${o.floating.height+i}px`):u==="right"?(h=`${-i}px`,p=l?d:`${g}px`):u==="left"&&(h=`${o.floating.width+i}px`,p=l?d:`${g}px`),{data:{x:h,y:p}}}}),"transformOrigin");function vn(e){let[t,a="center"]=e.split("-");return[t,a]}aa(vn,"getSideAndAlignFromPlacement");var Cn=hx,Ln=vx,bn=Lx;var Ee=U(require("react"),1);var wx=U(require("react"),1),In=U(require("react"),1),Ix=Object.defineProperty,ss=(e,t)=>Ix(e,"name",{value:t,configurable:!0}),ls=!1;function Ac(){let[e,t]=In.useState(ls);return In.useEffect(()=>{ls||(ls=!0,t(!0))},[]),e}ss(Ac,"useIsHydrated");var Tc=wx[" useSyncExternalStore ".trim().toString()];function Ec(){return()=>{}}ss(Ec,"subscribe");function Oc(){return Tc(Ec,()=>!0,()=>!1)}ss(Oc,"useIsHydratedModern");var Fc=typeof Tc=="function"?Oc:Ac;var oa=require("react/jsx-runtime"),Sx=Object.defineProperty,Oa=(e,t)=>Sx(e,"name",{value:t,configurable:!0}),is="rovingFocusGroup.onEntryFocus",yx={bubbles:!1,cancelable:!0},wn="RovingFocusGroup",[us,Bc,Rx]=Ra(wn),[Px,ds]=Be(wn,[Rx]),[kx,Dx]=Px(wn),Mx=Ee.forwardRef(Oa(function(t,a){return(0,oa.jsx)(us.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,oa.jsx)(us.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,oa.jsx)(Ax,{...t,ref:a})})})},"RovingFocusGroup")),Ax=Ee.forwardRef(Oa(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,g=Ee.useRef(null),h=ee(a,g),p=Pa(l),[m,x]=Rt({prop:s,defaultProp:i??null,onChange:u,caller:wn}),[C,v]=Ee.useState(!1),L=Me(c),I=Bc(o),b=Ee.useRef(!1),[S,y]=Ee.useState(0);return Ee.useEffect(()=>{let P=g.current;if(P)return P.addEventListener(is,L),()=>P.removeEventListener(is,L)},[L]),(0,oa.jsx)(kx,{scope:o,orientation:r,dir:p,loop:n,currentTabStopId:m,onItemFocus:Ee.useCallback(P=>x(P),[x]),onItemShiftTab:Ee.useCallback(()=>v(!0),[]),onFocusableItemAdd:Ee.useCallback(()=>y(P=>P+1),[]),onFocusableItemRemove:Ee.useCallback(()=>y(P=>P-1),[]),children:(0,oa.jsx)(oe.div,{tabIndex:C||S===0?-1:0,"data-orientation":r,...f,ref:h,style:{outline:"none",...t.style},onMouseDown:q(t.onMouseDown,()=>{b.current=!0}),onFocus:q(t.onFocus,P=>{let T=!b.current;if(P.target===P.currentTarget&&T&&!C){let M=new CustomEvent(is,yx);if(P.currentTarget.dispatchEvent(M),!M.defaultPrevented){let E=I().filter(O=>O.focusable),N=E.find(O=>O.active),H=E.find(O=>O.id===m),$=[N,H,...E].filter(Boolean).map(O=>O.ref.current);cs($,d)}}b.current=!1}),onBlur:q(t.onBlur,()=>v(!1))})})},"RovingFocusGroupImpl")),Tx="RovingFocusGroupItem",Ex=Ee.forwardRef(Oa(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=tt(),c=l||u,d=Dx(Tx,o),f=d.currentTabStopId===c,g=Bc(o),{onFocusableItemAdd:h,onFocusableItemRemove:p,currentTabStopId:m}=d,x=Fc();return se(()=>{if(!(!x||!r))return h(),()=>p()},[x,r,h,p]),Ee.useEffect(()=>{if(!(x||!r))return h(),()=>p()},[x,r,h,p]),(0,oa.jsx)(us.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,oa.jsx)(oe.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:q(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:q(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:q(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let v=_c(C,d.orientation,d.dir);if(v!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let I=g().filter(b=>b.focusable).map(b=>b.ref.current);if(v==="last")I.reverse();else if(v==="prev"||v==="next"){v==="prev"&&I.reverse();let b=I.indexOf(C.currentTarget);I=d.loop?Hc(I,b+1):I.slice(b+1)}setTimeout(()=>cs(I))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:m!=null}):s})})},"RovingFocusGroupItem")),Ox={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Oa(Nc,"getDirectionAwareKey");function _c(e,t,a){let o=Nc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ox[o]}Oa(_c,"getFocusIntent");function cs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Oa(cs,"focusFirst");function Hc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Oa(Hc,"wrapArray");var Uc=Mx,qc=Ex;var de=require("react/jsx-runtime"),Nx=Object.defineProperty,ce=(e,t)=>Nx(e,"name",{value:t,configurable:!0}),fs=["Enter"," "],_x=["ArrowDown","PageUp","Home"],Wc=["ArrowUp","PageDown","End"],Hx=[..._x,...Wc],Zw={ltr:[...fs,"ArrowRight"],rtl:[...fs,"ArrowLeft"]};var yn="Menu",[ps,Ux,qx]=Ra(yn),[Fa,gs]=Be(yn,[qx,Lo,ds]),hs=Lo(),Gc=ds(),[Vx,mr]=Fa(yn),[Wx,xs]=Fa(yn),Gx=ce(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=hs(t),[i,u]=Z.useState(null),c=Z.useRef(!1),d=Me(n),f=Pa(r);return Z.useEffect(()=>{let g=ce(()=>{c.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},"handleKeyDown"),h=ce(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),Z.useEffect(()=>{if(!a)return;let g=ce(()=>d(!1),"handleBlur");return window.addEventListener("blur",g),()=>window.removeEventListener("blur",g)},[a,d]),(0,de.jsx)(Cn,{...s,children:(0,de.jsx)(Vx,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,de.jsx)(Wx,{scope:t,onClose:Z.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),zx=Z.forwardRef(ce(function(t,a){let{__scopeMenu:o,...r}=t,n=hs(o);return(0,de.jsx)(Ln,{...n,...r,ref:a})},"MenuAnchor")),zc="MenuPortal",[Kx,Xx]=Fa(zc,{forceMount:void 0}),jx=ce(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=mr(zc,t);return(0,de.jsx)(Kx,{scope:t,forceMount:a,children:(0,de.jsx)(Ht,{present:a||n.open,children:(0,de.jsx)(lo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),ra="MenuContent",[$x,Kc]=Fa(ra),Yx=Z.forwardRef(ce(function(t,a){let o=Xx(ra,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=mr(ra,t.__scopeMenu),s=xs(ra,t.__scopeMenu);return(0,de.jsx)(ps.Provider,{scope:t.__scopeMenu,children:(0,de.jsx)(Ht,{present:r||l.open,children:(0,de.jsx)(ps.Slot,{scope:t.__scopeMenu,children:s.modal?(0,de.jsx)(Zx,{...n,ref:a}):(0,de.jsx)(Jx,{...n,ref:a})})})})},"MenuContent")),Zx=Z.forwardRef(ce(function(t,a){let o=mr(ra,t.__scopeMenu),r=Z.useRef(null),n=ee(a,r);return Z.useEffect(()=>{let l=r.current;if(l)return mo(l)},[]),(0,de.jsx)(Xc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:q(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),Jx=Z.forwardRef(ce(function(t,a){let o=mr(ra,t.__scopeMenu);return(0,de.jsx)(Xc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),Qx=qe("MenuContent.ScrollLock"),Xc=Z.forwardRef(ce(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,disableOutsideScroll:p,...m}=t,x=mr(ra,o),C=xs(ra,o),v=hs(o),L=Gc(o),I=Ux(o),[b,S]=Z.useState(null),y=Z.useRef(null),P=ee(a,y,x.onContentChange),T=Z.useRef(0),M=Z.useRef(""),E=Z.useRef(0),N=Z.useRef(null),H=Z.useRef("right"),Q=Z.useRef(0),$=p?La:Z.Fragment,O=p?{as:Qx,allowPinchZoom:!0}:void 0,_=ce(A=>{let me=M.current+A,J=I().filter(k=>!k.disabled),le=document.activeElement,he=J.find(k=>k.ref.current===le)?.textValue,R=J.map(k=>k.textValue),F=Jc(R,me,he),W=J.find(k=>k.textValue===F)?.ref.current;ce((function k(X){M.current=X,window.clearTimeout(T.current),X!==""&&(T.current=window.setTimeout(()=>k(""),1e3))}),"updateSearch")(me),W&&setTimeout(()=>W.focus())},"handleTypeaheadSearch");Z.useEffect(()=>()=>window.clearTimeout(T.current),[]),ea();let G=Z.useCallback(A=>H.current===N.current?.side&&ef(A,N.current?.area),[]);return(0,de.jsx)($x,{scope:o,searchRef:M,onItemEnter:Z.useCallback(A=>{G(A)&&A.preventDefault()},[G]),onItemLeave:Z.useCallback(A=>{G(A)||(y.current?.focus(),S(null))},[G]),onTriggerLeave:Z.useCallback(A=>{G(A)&&A.preventDefault()},[G]),pointerGraceTimerRef:E,onPointerGraceIntentChange:Z.useCallback(A=>{N.current=A},[]),children:(0,de.jsx)($,{...O,children:(0,de.jsx)(no,{asChild:!0,trapped:n,onMountAutoFocus:q(l,A=>{A.preventDefault(),y.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,de.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:g,onDismiss:h,children:(0,de.jsx)(Uc,{asChild:!0,...L,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:S,onEntryFocus:q(u,A=>{C.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,de.jsx)(bn,{role:"menu","aria-orientation":"vertical","data-state":jc(x.open),"data-radix-menu-content":"",dir:C.dir,...v,...m,ref:P,style:{outline:"none",...m.style},onKeyDown:q(m.onKeyDown,A=>{let J=A.target.closest("[data-radix-menu-content]")===A.currentTarget,le=A.ctrlKey||A.altKey||A.metaKey,he=A.key.length===1;J&&(A.key==="Tab"&&A.preventDefault(),!le&&he&&_(A.key));let R=y.current;if(A.target!==R||!Hx.includes(A.key))return;A.preventDefault();let W=I().filter(k=>!k.disabled).map(k=>k.ref.current);Wc.includes(A.key)&&W.reverse(),Yc(W)}),onBlur:q(t.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(T.current),M.current="")}),onPointerMove:q(t.onPointerMove,Sn(A=>{let me=A.target,J=Q.current!==A.clientX;if(A.currentTarget.contains(me)&&J){let le=A.clientX>Q.current?"right":"left";H.current=le,Q.current=A.clientX}}))})})})})})})},"MenuContentImpl"));var ev=Z.forwardRef(ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,de.jsx)(oe.div,{...r,ref:a})},"MenuLabel")),ms="MenuItem",Vc="menu.itemSelect",tv=Z.forwardRef(ce(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Z.useRef(null),s=xs(ms,t.__scopeMenu),i=Kc(ms,t.__scopeMenu),u=ee(a,l),c=Z.useRef(!1),d=ce(()=>{let f=l.current;if(!o&&f){let g=new CustomEvent(Vc,{bubbles:!0,cancelable:!0});f.addEventListener(Vc,h=>r?.(h),{once:!0}),er(f,g),g.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,de.jsx)(av,{...n,ref:u,disabled:o,onClick:q(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:q(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:q(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||fs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),av=Z.forwardRef(ce(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Kc(ms,o),i=Gc(o),u=Z.useRef(null),c=ee(a,u),[d,f]=Z.useState(!1),[g,h]=Z.useState("");return Z.useEffect(()=>{let p=u.current;p&&h((p.textContent??"").trim())},[l.children]),(0,de.jsx)(ps.ItemSlot,{scope:o,disabled:r,textValue:n??g,children:(0,de.jsx)(qc,{asChild:!0,...i,focusable:!r,children:(0,de.jsx)(oe.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:q(t.onPointerMove,Sn(p=>{r?s.onItemLeave(p):(s.onItemEnter(p),p.defaultPrevented||p.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:q(t.onPointerLeave,Sn(p=>s.onItemLeave(p))),onFocus:q(t.onFocus,()=>f(!0)),onBlur:q(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var ov="MenuRadioGroup",[Jw,Qw]=Fa(ov,{value:void 0,onValueChange:ce(()=>{},"onValueChange")});var rv="MenuItemIndicator",[eS,tS]=Fa(rv,{checked:!1});var nv=Z.forwardRef(ce(function(t,a){let{__scopeMenu:o,...r}=t;return(0,de.jsx)(oe.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var lv="MenuSub",[aS,oS]=Fa(lv);function jc(e){return e?"open":"closed"}ce(jc,"getOpenState");function $c(e){return e==="indeterminate"}ce($c,"isIndeterminate");function sv(e){return $c(e)?"indeterminate":e?"checked":"unchecked"}ce(sv,"getCheckedState");function Yc(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}ce(Yc,"focusFirst");function Zc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ce(Zc,"wrapArray");function Jc(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Zc(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ce(Jc,"getNextMatch");function Qc(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}ce(Qc,"isPointInPolygon");function ef(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Qc(a,t)}ce(ef,"isPointerInGraceArea");function Sn(e){return t=>t.pointerType==="mouse"?e(t):void 0}ce(Sn,"whenMouse");var tf=Gx,af=zx,of=jx,rf=Yx;var nf=ev,lf=tv;var sf=nv;var Tt=require("react/jsx-runtime"),uv=Object.defineProperty,Ba=(e,t)=>uv(e,"name",{value:t,configurable:!0}),vs="DropdownMenu",[dv,LS]=Be(vs,[gs]),Na=gs(),[cv,uf]=dv(vs),fv=Ba(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Na(t),u=bt.useRef(null),[c,d]=Rt({prop:r,defaultProp:n??!1,onChange:l,caller:vs});return(0,Tt.jsx)(cv,{scope:t,triggerId:tt(),triggerRef:u,contentId:tt(),open:c,onOpenChange:d,onOpenToggle:bt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,Tt.jsx)(tf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),pv="DropdownMenuTrigger",mv=bt.forwardRef(Ba(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=uf(pv,o),s=Na(o),i=ee(a,l.triggerRef);return(0,Tt.jsx)(af,{asChild:!0,...s,children:(0,Tt.jsx)(oe.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:q(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:q(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),gv=Ba(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Na(t);return(0,Tt.jsx)(of,{...o,...a})},"DropdownMenuPortal"),hv="DropdownMenuContent",xv=bt.forwardRef(Ba(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=uf(hv,o),l=Na(o),s=bt.useRef(!1);return(0,Tt.jsx)(rf,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:q(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:q(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var vv=bt.forwardRef(Ba(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Na(o);return(0,Tt.jsx)(nf,{...n,...r,ref:a})},"DropdownMenuLabel")),Cv=bt.forwardRef(Ba(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Na(o);return(0,Tt.jsx)(lf,{...n,...r,ref:a})},"DropdownMenuItem"));var Lv=bt.forwardRef(Ba(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Na(o);return(0,Tt.jsx)(sf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var df=fv,cf=mv,ff=gv,Cs=xv;var Ls=vv,bs=Cv;var Is=Lv;var bo=require("react/jsx-runtime"),hr=df,xr=cf;var Io=gr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,bo.jsx)(ff,{children:(0,bo.jsx)(Cs,{ref:o,sideOffset:t,className:ae("kanban-portal kanban-dropdown-content",e),...a})}));Io.displayName=Cs.displayName;var Vt=gr.forwardRef(({className:e,inset:t,...a},o)=>(0,bo.jsx)(bs,{ref:o,className:ae("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Vt.displayName=bs.displayName;var Iv=gr.forwardRef(({className:e,inset:t,...a},o)=>(0,bo.jsx)(Ls,{ref:o,className:ae("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));Iv.displayName=Ls.displayName;var wv=gr.forwardRef(({className:e,...t},a)=>(0,bo.jsx)(Is,{ref:a,className:ae("kanban-dropdown-separator",e),...t}));wv.displayName=Is.displayName;var pf=U(require("react"),1);var mf=require("react/jsx-runtime"),Wt=pf.forwardRef(({className:e,type:t,...a},o)=>(0,mf.jsx)("input",{type:t,className:ae("kanban-input",e),ref:o,...a}));Wt.displayName="Input";var xf=U(require("react"),1);var gf=U(require("react"),1);var hf=require("react/jsx-runtime"),Sv=Object.defineProperty,yv=(e,t)=>Sv(e,"name",{value:t,configurable:!0}),Rv=gf.forwardRef(yv(function(t,a){return(0,hf.jsx)(oe.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),ws=Rv;var vf=require("react/jsx-runtime"),_a=xf.forwardRef(({className:e,...t},a)=>(0,vf.jsx)(ws,{ref:a,className:ae("kanban-label",e),...t}));_a.displayName=ws.displayName;var la=U(require("react"),1);var D=U(require("react"),1),Rs=U(require("react-dom"),1);var kv=Object.defineProperty,Dv=(e,t)=>kv(e,"name",{value:t,configurable:!0});function Rn(e,[t,a]){return Math.min(a,Math.max(t,e))}Dv(Rn,"clamp");var Pn=U(require("react"),1),Mv=Object.defineProperty,Av=(e,t)=>Mv(e,"name",{value:t,configurable:!0});function Ss(e){let t=Pn.useRef({value:e,previous:e});return Pn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}Av(Ss,"usePrevious");var Tv=U(require("react"),1);var Ev=require("react/jsx-runtime");var Cf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var V=require("react/jsx-runtime"),Ov=Object.defineProperty,ne=(e,t)=>Ov(e,"name",{value:t,configurable:!0}),Fv=[" ","Enter","ArrowUp","ArrowDown"],Bv=[" ","Enter"],wo="Select",[Dn,Mn,Nv]=Ra(wo),[Ua,ey]=Be(wo,[Nv,Lo]),Ps=Lo(),[_v,na]=Ua(wo),[Hv,Uv]=Ua(wo);function Sf(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:g,form:h,internal_do_not_use_render:p}=e,m=Ps(t),[x,C]=D.useState(null),[v,L]=D.useState(null),[I,b]=D.useState(!1),S=Pa(u),[y,P]=Rt({prop:o,defaultProp:r??!1,onChange:n,caller:wo}),[T,M]=Rt({prop:l,defaultProp:s,onChange:i,caller:wo}),E=D.useRef(null),N=D.useRef(T);D.useEffect(()=>{let J=h?x?.ownerDocument.getElementById(h):x?.form;if(J instanceof HTMLFormElement){let le=ne(()=>M(N.current),"reset");return J.addEventListener("reset",le),()=>J.removeEventListener("reset",le)}},[h,x,M]);let H=x?!!h||!!x.closest("form"):!0,[Q,$]=D.useState(new Set),O=tt(),_=Array.from(Q).map(J=>J.props.value).join(";"),G=D.useCallback(J=>{$(le=>new Set(le).add(J))},[]),A=D.useCallback(J=>{$(le=>{let he=new Set(le);return he.delete(J),he})},[]),me={required:g,trigger:x,onTriggerChange:C,valueNode:v,onValueNodeChange:L,valueNodeHasChildren:I,onValueNodeHasChildrenChange:b,contentId:O,value:T,onValueChange:M,open:y,onOpenChange:P,dir:S,triggerPointerDownPosRef:E,disabled:f,name:c,autoComplete:d,form:h,nativeOptions:Q,nativeSelectKey:_,isFormControl:H};return(0,V.jsx)(Cn,{...m,children:(0,V.jsx)(_v,{scope:t,...me,children:(0,V.jsx)(Dn.Provider,{scope:t,children:(0,V.jsx)(Hv,{scope:t,onNativeOptionAdd:G,onNativeOptionRemove:A,children:Ff(p)?p(me):a})})})})}ne(Sf,"SelectProvider");var yf=ne(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,V.jsx)(Sf,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,V.jsxs)(V.Fragment,{children:[a,r?(0,V.jsx)(oC,{__scopeSelect:t}):null]})})},"Select"),qv="SelectTrigger",ks=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Ps(o),s=na(qv,o),i=s.disabled||r,u=ee(a,s.onTriggerChange),c=Mn(o),d=D.useRef("touch"),[f,g,h]=Bs(m=>{let x=c().filter(L=>!L.disabled),C=x.find(L=>L.value===s.value),v=Ns(x,m,C);v!==void 0&&s.onValueChange(v.value)}),p=ne(m=>{i||(s.onOpenChange(!0),h()),m&&(s.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)})},"handleOpen");return(0,V.jsx)(Ln,{asChild:!0,...l,children:(0,V.jsx)(oe.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":vr(s.value)?"":void 0,...n,ref:u,onClick:q(n.onClick,m=>{m.currentTarget.focus(),d.current!=="mouse"&&p(m)}),onPointerDown:q(n.onPointerDown,m=>{d.current=m.pointerType;let x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&m.pointerType==="mouse"&&(p(m),m.preventDefault())}),onKeyDown:q(n.onKeyDown,m=>{let x=f.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&g(m.key),!(x&&m.key===" ")&&Fv.includes(m.key)&&(p(),m.preventDefault())})})})},"SelectTrigger")),Vv="SelectValue",Rf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=na(Vv,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=ee(a,u.onValueNodeChange);se(()=>{c(d)},[c,d]);let g=vr(u.value);return(0,V.jsx)(oe.span,{...i,asChild:g?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,V.jsx)(D.Fragment,{children:g?s:l},g?"placeholder":"value")})},"SelectValue")),Pf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,V.jsx)(oe.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),Wv="SelectPortal",[Gv,zv]=Ua(Wv,{forceMount:void 0}),kf=ne(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,V.jsx)(Gv,{scope:e.__scopeSelect,forceMount:a,children:(0,V.jsx)(lo,{asChild:!0,...o})})},"SelectPortal"),Ha="SelectContent",Ds=D.forwardRef(ne(function(t,a){let o=zv(Ha,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=na(Ha,t.__scopeSelect),[s,i]=D.useState();return se(()=>{i(new DocumentFragment)},[]),(0,V.jsx)(Ht,{present:r||l.open,children:({present:u})=>u?(0,V.jsx)(jv,{...n,ref:a}):(0,V.jsx)(Kv,{...n,fragment:s})})},"SelectContent")),Kv=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Rs.createPortal((0,V.jsx)(Df,{scope:o,children:(0,V.jsx)(Dn.Slot,{scope:o,children:(0,V.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),It=10,[Df,qa]=Ua(Ha),Xv=qe("SelectContent.RemoveScroll"),jv=D.forwardRef(ne(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:p,hideWhenDetached:m,avoidCollisions:x,...C}=t,v=na(Ha,o),[L,I]=D.useState(null),[b,S]=D.useState(null),y=ee(a,I),[P,T]=D.useState(null),[M,E]=D.useState(null),N=Mn(o),[H,Q]=D.useState(!1),$=D.useRef(!1);D.useEffect(()=>{if(L)return mo(L)},[L]),ea();let O=D.useCallback(k=>{let[X,...B]=N().map(te=>te.ref.current),[j]=B.slice(-1),Y=document.activeElement;for(let te of k)if(te===Y||(te?.scrollIntoView({block:"nearest"}),te===X&&b&&(b.scrollTop=0),te===j&&b&&(b.scrollTop=b.scrollHeight),te?.focus(),document.activeElement!==Y))return},[N,b]),_=D.useCallback(()=>O([P,L]),[O,P,L]);D.useEffect(()=>{H&&_()},[H,_]);let{onOpenChange:G,triggerPointerDownPosRef:A}=v;D.useEffect(()=>{if(L){let k={x:0,y:0},X=ne(j=>{k={x:Math.abs(Math.round(j.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(j.pageY)-(A.current?.y??0))}},"handlePointerMove"),B=ne(j=>{k.x<=10&&k.y<=10?j.preventDefault():j.composedPath().includes(L)||G(!1),document.removeEventListener("pointermove",X),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",X),document.addEventListener("pointerup",B,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",B,{capture:!0})}}},[L,G,A]),D.useEffect(()=>{let k=ne(()=>G(!1),"close");return window.addEventListener("blur",k),window.addEventListener("resize",k),()=>{window.removeEventListener("blur",k),window.removeEventListener("resize",k)}},[G]);let[me,J]=Bs(k=>{let X=N().filter(Y=>!Y.disabled),B=X.find(Y=>Y.ref.current===document.activeElement),j=Ns(X,k,B);j&&setTimeout(()=>j.ref.current?.focus())}),le=D.useCallback((k,X,B)=>{let j=!$.current&&!B;(v.value!==void 0&&v.value===X||j)&&(T(k),j&&($.current=!0))},[v.value]),he=D.useCallback(()=>L?.focus(),[L]),R=D.useCallback((k,X,B)=>{let j=!$.current&&!B;(v.value!==void 0&&v.value===X||j)&&E(k)},[v.value]),F=r==="popper"?Lf:$v,W=F===Lf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:g,collisionPadding:h,sticky:p,hideWhenDetached:m,avoidCollisions:x}:{};return(0,V.jsx)(Df,{scope:o,content:L,viewport:b,onViewportChange:S,itemRefCallback:le,selectedItem:P,onItemLeave:he,itemTextRefCallback:R,focusSelectedItem:_,selectedItemText:M,position:r,isPositioned:H,searchRef:me,children:(0,V.jsx)(La,{as:Xv,allowPinchZoom:!0,children:(0,V.jsx)(no,{asChild:!0,trapped:v.open,onMountAutoFocus:k=>{k.preventDefault()},onUnmountAutoFocus:q(n,k=>{v.trigger?.focus({preventScroll:!0}),k.preventDefault()}),children:(0,V.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:k=>k.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,V.jsx)(F,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed",dir:v.dir,onContextMenu:k=>k.preventDefault(),...C,...W,onPlaced:()=>Q(!0),ref:y,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:q(C.onKeyDown,k=>{let X=k.ctrlKey||k.altKey||k.metaKey;if(k.key==="Tab"&&k.preventDefault(),!X&&k.key.length===1&&J(k.key),["ArrowUp","ArrowDown","Home","End"].includes(k.key)){let j=N().filter(Y=>!Y.disabled).map(Y=>Y.ref.current);if(["ArrowUp","End"].includes(k.key)&&(j=j.slice().reverse()),["ArrowUp","ArrowDown"].includes(k.key)){let Y=k.target,te=j.indexOf(Y);j=j.slice(te+1)}setTimeout(()=>O(j)),k.preventDefault()}})})})})})})},"SelectContentImpl")),$v=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=na(Ha,o),s=qa(Ha,o),[i,u]=D.useState(null),[c,d]=D.useState(null),f=ee(a,d),g=Mn(o),h=D.useRef(!1),p=D.useRef(!0),{viewport:m,selectedItem:x,selectedItemText:C,focusSelectedItem:v}=s,L=D.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&m&&x&&C){let y=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),T=l.valueNode.getBoundingClientRect(),M=C.getBoundingClientRect();if(l.dir!=="rtl"){let Y=M.left-P.left,te=T.left-Y,xe=y.left-te,ye=y.width+xe,wt=Math.max(ye,P.width),Ga=window.innerWidth-It,za=Rn(te,[It,Math.max(It,Ga-wt)]);i.style.minWidth=ye+"px",i.style.left=za+"px"}else{let Y=P.right-M.right,te=window.innerWidth-T.right-Y,xe=window.innerWidth-y.right-te,ye=y.width+xe,wt=Math.max(ye,P.width),Ga=window.innerWidth-It,za=Rn(te,[It,Math.max(It,Ga-wt)]);i.style.minWidth=ye+"px",i.style.right=za+"px"}let E=g(),N=window.innerHeight-It*2,H=m.scrollHeight,Q=window.getComputedStyle(c),$=parseInt(Q.borderTopWidth,10),O=parseInt(Q.paddingTop,10),_=parseInt(Q.borderBottomWidth,10),G=parseInt(Q.paddingBottom,10),A=$+O+H+G+_,me=Math.min(x.offsetHeight*5,A),J=window.getComputedStyle(m),le=parseInt(J.paddingTop,10),he=parseInt(J.paddingBottom,10),R=y.top+y.height/2-It,F=N-R,W=x.offsetHeight/2,k=x.offsetTop+W,X=$+O+k,B=A-X;if(X<=R){let Y=E.length>0&&x===E[E.length-1].ref.current;i.style.bottom="0px";let te=c.clientHeight-m.offsetTop-m.offsetHeight,xe=Math.max(F,W+(Y?he:0)+te+_),ye=X+xe;i.style.height=ye+"px"}else{let Y=E.length>0&&x===E[0].ref.current;i.style.top="0px";let xe=Math.max(R,$+m.offsetTop+(Y?le:0)+W)+B;i.style.height=xe+"px",m.scrollTop=X-R+m.offsetTop}i.style.margin=`${It}px 0`,i.style.minHeight=me+"px",i.style.maxHeight=N+"px",r?.(),requestAnimationFrame(()=>h.current=!0)}},[g,l.trigger,l.valueNode,i,c,m,x,C,l.dir,r]);se(()=>L(),[L]);let[I,b]=D.useState();se(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let S=D.useCallback(y=>{y&&p.current===!0&&(L(),v?.(),p.current=!1)},[L,v]);return(0,V.jsx)(Yv,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:h,onScrollButtonChange:S,children:(0,V.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:I},children:(0,V.jsx)(oe.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Lf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=It,...l}=t,s=Ps(o);return(0,V.jsx)(bn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[Yv,Ms]=Ua(Ha,{}),bf="SelectViewport",Mf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=qa(bf,o),s=Ms(bf,o),i=ee(a,l.onViewportChange),u=D.useRef(0);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,V.jsx)(Dn.Slot,{scope:o,children:(0,V.jsx)(oe.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:q(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:g}=s;if(g?.current&&f){let h=Math.abs(u.current-d.scrollTop);if(h>0){let p=window.innerHeight-It*2,m=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(m,x);if(C<p){let v=C+h,L=Math.min(p,v),I=v-L;f.style.height=L+"px",f.style.bottom==="0px"&&(d.scrollTop=I>0?I:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),Zv="SelectGroup",[ty,Jv]=Ua(Zv);var Qv="SelectLabel",As=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t,n=Jv(Qv,o);return(0,V.jsx)(oe.div,{id:n.id,...r,ref:a})},"SelectLabel")),ys="SelectItem",[eC,Af]=Ua(ys),Ts=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=na(ys,o),u=qa(ys,o),c=i.value===r,[d,f]=D.useState(l??""),[g,h]=D.useState(!1),p=Me(L=>u.itemRefCallback?.(L,r,n)),m=ee(a,p),x=tt(),C=D.useRef("touch"),v=ne(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,V.jsx)(eC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:D.useCallback(L=>{f(I=>I||(L?.textContent??"").trim())},[]),children:(0,V.jsx)(Dn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,V.jsx)(oe.div,{role:"option","aria-labelledby":x,"data-highlighted":g?"":void 0,"aria-selected":c&&g,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:m,onFocus:q(s.onFocus,()=>h(!0)),onBlur:q(s.onBlur,()=>h(!1)),onClick:q(s.onClick,()=>{C.current!=="mouse"&&v()}),onPointerUp:q(s.onPointerUp,()=>{C.current==="mouse"&&v()}),onPointerDown:q(s.onPointerDown,L=>{C.current=L.pointerType}),onPointerMove:q(s.onPointerMove,L=>{C.current=L.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&L.currentTarget.focus({preventScroll:!0})}),onPointerLeave:q(s.onPointerLeave,L=>{L.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:q(s.onKeyDown,L=>{n||L.target!==L.currentTarget||u.searchRef?.current!==""&&L.key===" "||(Bv.includes(L.key)&&v(),L.key===" "&&L.preventDefault())})})})})},"SelectItem")),kn="SelectItemText",Tf=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=na(kn,o),i=qa(kn,o),u=Af(kn,o),c=Uv(kn,o),[d,f]=D.useState(null),g=Me(v=>i.itemTextRefCallback?.(v,u.value,u.disabled)),h=ee(a,f,u.onItemTextChange,g),p=d?.textContent,m=D.useMemo(()=>(0,V.jsx)("option",{value:u.value,disabled:u.disabled,children:p},u.value),[u.disabled,u.value,p]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return se(()=>(x(m),()=>C(m)),[x,C,m]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(oe.span,{id:u.textId,...l,ref:h}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!vr(s.value)?Rs.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),tC="SelectItemIndicator",Ef=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return Af(tC,o).isSelected?(0,V.jsx)(oe.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),If="SelectScrollUpButton",Es=D.forwardRef(ne(function(t,a){let o=qa(If,t.__scopeSelect),r=Ms(If,t.__scopeSelect),[n,l]=D.useState(!1),s=ee(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Of,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),wf="SelectScrollDownButton",Os=D.forwardRef(ne(function(t,a){let o=qa(wf,t.__scopeSelect),r=Ms(wf,t.__scopeSelect),[n,l]=D.useState(!1),s=ee(a,r.onScrollButtonChange);return se(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;ne(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,V.jsx)(Of,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Of=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=qa("SelectScrollButton",o),s=D.useRef(null),i=Mn(o),u=D.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return D.useEffect(()=>()=>u(),[u]),se(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,V.jsx)(oe.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:q(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:q(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:q(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Fs=D.forwardRef(ne(function(t,a){let{__scopeSelect:o,...r}=t;return(0,V.jsx)(oe.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var aC="SelectBubbleInput",oC=D.forwardRef(ne(function({__scopeSelect:t,...a},o){let r=na(aC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:g}=r,h=D.useRef(null),p=ee(o,h),m=n??"",x=Ss(m),C=Array.from(f).some(v=>(v.props.value??"")==="");return D.useEffect(()=>{let v=h.current;if(!v)return;let L=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(L,"value").set;if(x!==m&&b){let S=new Event("change",{bubbles:!0});b.call(v,m),v.dispatchEvent(S)}},[x,m]),(0,V.jsxs)(oe.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:v=>l(v.target.value),...a,style:{...Cf,...a.style},ref:p,defaultValue:m,children:[vr(n)&&!C?(0,V.jsx)("option",{value:""}):null,Array.from(f)]},g)},"SelectBubbleInput"));function Ff(e){return typeof e=="function"}ne(Ff,"isFunction");function vr(e){return e===""||e===void 0}ne(vr,"shouldShowPlaceholder");function Bs(e){let t=Me(e),a=D.useRef(""),o=D.useRef(0),r=D.useCallback(l=>{let s=a.current+l;t(s),ne((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=D.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}ne(Bs,"useTypeaheadSearch");function Ns(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Bf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}ne(Ns,"findNextItem");function Bf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}ne(Bf,"wrapArray");var be=require("react/jsx-runtime"),_s=yf;var Hs=Rf,An=la.forwardRef(({className:e,children:t,...a},o)=>(0,be.jsxs)(ks,{ref:o,className:ae("kanban-select-trigger",e),...a,children:[t,(0,be.jsx)(Pf,{asChild:!0,children:(0,be.jsx)(eo,{className:"kanban-select-icon"})})]}));An.displayName=ks.displayName;var Nf=la.forwardRef(({className:e,...t},a)=>(0,be.jsx)(Es,{ref:a,className:ae("kanban-select-scroll-button",e),...t,children:(0,be.jsx)(Wo,{className:"kanban-select-scroll-icon"})}));Nf.displayName=Es.displayName;var _f=la.forwardRef(({className:e,...t},a)=>(0,be.jsx)(Os,{ref:a,className:ae("kanban-select-scroll-button",e),...t,children:(0,be.jsx)(eo,{className:"kanban-select-scroll-icon"})}));_f.displayName=Os.displayName;var Tn=la.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,be.jsx)(kf,{children:(0,be.jsxs)(Ds,{ref:r,className:ae("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,be.jsx)(Nf,{}),(0,be.jsx)(Mf,{className:ae("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,be.jsx)(_f,{})]})}));Tn.displayName=Ds.displayName;var nC=la.forwardRef(({className:e,...t},a)=>(0,be.jsx)(As,{ref:a,className:ae("kanban-select-label",e),...t}));nC.displayName=As.displayName;var So=la.forwardRef(({className:e,children:t,...a},o)=>(0,be.jsxs)(Ts,{ref:o,className:ae("kanban-select-item",e),...a,children:[(0,be.jsx)("span",{className:"kanban-select-item-indicator",children:(0,be.jsx)(Ef,{children:(0,be.jsx)(Qt,{className:"kanban-select-check"})})}),(0,be.jsx)(Tf,{children:t})]}));So.displayName=Ts.displayName;var lC=la.forwardRef(({className:e,...t},a)=>(0,be.jsx)(Fs,{ref:a,className:ae("kanban-select-separator",e),...t}));lC.displayName=Fs.displayName;var Hf=U(require("react"),1);var Uf=require("react/jsx-runtime"),Us=Hf.forwardRef(({className:e,...t},a)=>(0,Uf.jsx)("textarea",{className:ae("kanban-textarea",e),ref:a,...t}));Us.displayName="Textarea";var Gt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},En=["high","medium","low"],qf="#94a3b8";function Vf(e,t){return t?e.find(a=>a.name===t)?.color??qf:qf}var Ge=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),qs=e=>e==="high"||e==="medium"||e==="low"?Gt[e].label:"";function Wf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&qs(a.priority)||o;return Ge(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ge(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ge(t("actLabelSet"),{to:n}):r!=null&&n==null?Ge(t("actLabelCleared"),{from:r}):Ge(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?qs(r)||r:o,s=n?qs(n)||n:o;return r==null&&n!=null?Ge(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ge(t("actPriorityCleared"),{from:l}):Ge(t("actPriority"),{from:l,to:s})}case"card_title_changed":return Ge(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_deleted":return t("actDeleted");case"column_added":return Ge(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ge(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ge(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ge(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ge(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ge(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ge(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var On=e=>String(e).padStart(2,"0");function Gf(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${On(t.getMonth()+1)}-${On(t.getDate())} ${On(t.getHours())}:${On(t.getMinutes())}`}var ft=require("react/jsx-runtime");function zf({activities:e}){let t=Ke();if(e.length===0)return(0,ft.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,ft.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent";return(0,ft.jsxs)("li",{className:"kanban-activity-item",children:[(0,ft.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`}),(0,ft.jsxs)("div",{className:"kanban-activity-meta",children:[(0,ft.jsx)(Go,{className:"kanban-tiny-icon"}),(0,ft.jsx)("time",{className:"kanban-tabular",children:Gf(o.ts)}),(0,ft.jsx)("span",{children:"\xB7"}),(0,ft.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:t(r?"actorAgent":"actorHuman")})]}),(0,ft.jsx)("p",{className:"kanban-activity-description",children:Wf(o,t)})]},o.id)})})}var z=require("react/jsx-runtime");function Kf({open:e,card:t,labels:a,activities:o,onOpenChange:r,onSave:n,onDelete:l,onChatWithAgent:s}){let i=Ke(),[u,c]=(0,Fn.useState)({id:"",title:"",note:"",label:"",priority:""});(0,Fn.useEffect)(()=>{e&&c({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let d=f=>c(g=>({...g,...f}));return(0,z.jsx)(ho,{open:e,onOpenChange:r,children:(0,z.jsxs)(Ia,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:f=>f.preventDefault(),children:[(0,z.jsx)(wa,{children:(0,z.jsx)(Sa,{className:"kanban-sr-only",children:i(t?"editCard":"addCard")})}),(0,z.jsxs)("div",{className:"kanban-form-stack",children:[(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsxs)(_a,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,z.jsx)("span",{children:i("fieldTitle")}),t&&(0,z.jsxs)("span",{className:"kanban-field-id",children:[i("fieldId"),": ",t.id]})]}),(0,z.jsx)(Wt,{id:"card-title",value:u.title,placeholder:i("titlePlaceholder"),onChange:f=>d({title:f.target.value})})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(_a,{children:i("fieldLabel")}),(0,z.jsxs)(_s,{value:u.label||"__none__",onValueChange:f=>d({label:f==="__none__"?"":f}),children:[(0,z.jsx)(An,{children:(0,z.jsx)(Hs,{placeholder:i("noLabel")})}),(0,z.jsxs)(Tn,{children:[(0,z.jsx)(So,{value:"__none__",children:i("noLabel")}),a.map(f=>(0,z.jsx)(So,{value:f.name,children:f.name},f.name))]})]})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(_a,{children:i("fieldPriority")}),(0,z.jsxs)(_s,{value:u.priority||"__none__",onValueChange:f=>d({priority:f==="__none__"?"":f}),children:[(0,z.jsx)(An,{children:(0,z.jsx)(Hs,{placeholder:i("noPriority")})}),(0,z.jsxs)(Tn,{children:[(0,z.jsx)(So,{value:"__none__",children:i("noPriority")}),En.map(f=>{let g=Gt[f];return(0,z.jsx)(So,{value:f,children:(0,z.jsxs)("span",{className:"kanban-inline-priority",children:[(0,z.jsx)("span",{className:"kanban-priority-dot",style:{background:g.color}}),g.label]})},f)})]})]})]}),(0,z.jsxs)("div",{className:"kanban-form-field",children:[(0,z.jsx)(_a,{htmlFor:"card-note",children:i("fieldNote")}),(0,z.jsx)(Us,{id:"card-note",value:u.note,placeholder:i("notePlaceholder"),rows:5,onChange:f=>d({note:f.target.value})})]}),t&&(0,z.jsxs)("div",{className:"kanban-activity-box",children:[(0,z.jsx)(_a,{className:"kanban-muted-small",children:i("activityTitle")}),(0,z.jsx)("div",{className:"kanban-activity-scroll",children:(0,z.jsx)(zf,{activities:o})})]})]}),(0,z.jsxs)(lr,{children:[t&&l&&(0,z.jsxs)(De,{variant:"outline",className:"kanban-dialog-delete",onClick:()=>{l(t),r(!1)},children:[(0,z.jsx)(Bt,{className:"kanban-icon"}),i("delete")]}),(0,z.jsxs)(hr,{children:[(0,z.jsx)(xr,{asChild:!0,children:(0,z.jsxs)(De,{variant:"outline",disabled:!u.title.trim()&&!u.note.trim(),children:[(0,z.jsx)(jo,{className:"kanban-icon"}),i("chatWithAgent")]})}),(0,z.jsxs)(Io,{align:"end",children:[(0,z.jsx)(Vt,{onClick:()=>{s(u,"current"),r(!1)},children:i("chatCurrentSession")}),(0,z.jsx)(Vt,{onClick:()=>{s(u,"new"),r(!1)},children:i("chatNewSession")})]})]}),(0,z.jsx)(De,{variant:"outline",disabled:!u.title.trim(),onClick:()=>{n(u),r(!1)},children:i("save")})]})]})})}var Xf=require("react/jsx-runtime");function sC({variant:e,className:t}={}){return ae("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Vs({className:e,variant:t,...a}){return(0,Xf.jsx)("div",{className:sC({variant:t,className:e}),...a})}var Va=U(require("react"),1);var Wa=require("react/jsx-runtime"),Cr=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-card",e),...t}));Cr.displayName="Card";var iC=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-card-header",e),...t}));iC.displayName="CardHeader";var uC=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-ui-card-title",e),...t}));uC.displayName="CardTitle";var dC=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-card-description",e),...t}));dC.displayName="CardDescription";var Lr=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-card-content",e),...t}));Lr.displayName="CardContent";var cC=Va.forwardRef(({className:e,...t},a)=>(0,Wa.jsx)("div",{ref:a,className:ae("kanban-card-footer",e),...t}));cC.displayName="CardFooter";var Et=require("react/jsx-runtime");function jf({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=qr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}}),u=e.priority?Gt[e.priority]:null,c=Vf(t,e.label);return(0,Et.jsx)("div",{ref:n,style:{transform:Qe.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,Et.jsx)(Cr,{className:"kanban-card",children:(0,Et.jsxs)(Lr,{className:"kanban-sortable-card-content",children:[(e.label||u)&&(0,Et.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Et.jsx)(Vs,{variant:"secondary",className:"kanban-card-badge",style:{background:c,color:"#0b1220"},children:e.label}),u&&(0,Et.jsx)(Vs,{variant:"secondary",className:"kanban-card-badge",style:{background:u.color,color:"#0b1220"},children:u.label})]}),(0,Et.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Et.jsx)("p",{className:"kanban-card-note",children:e.note})]})})})}var rt=require("react/jsx-runtime");function $f({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Fr({id:e.id,data:{type:"column"}}),s=Ke();return(0,rt.jsxs)("div",{ref:n,className:`kanban-column${l?" is-over":""}`,children:[(0,rt.jsxs)("div",{className:"kanban-column-header",children:[(0,rt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,rt.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,rt.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,rt.jsx)(Ur,{items:t.map(i=>i.id),strategy:Hr,children:t.map(i=>(0,rt.jsx)(jf,{card:i,labels:a,onOpen:r},i.id))}),t.length===0&&(0,rt.jsx)("p",{className:"kanban-column-empty",children:s("emptyColumn")})]}),(0,rt.jsx)("div",{className:"kanban-column-footer",children:(0,rt.jsxs)(De,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,rt.jsx)(Ft,{className:"kanban-icon"}),s("addCard")]})})]})}var br=require("react");var Ie=require("react/jsx-runtime");function fC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=qr({id:e.id}),d=Ke();return(0,Ie.jsxs)("div",{ref:i,style:{transform:Qe.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,Ie.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,Ie.jsx)(Ko,{className:"kanban-icon"})}),(0,Ie.jsx)(Wt,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,Ie.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,Ie.jsx)(Bt,{className:"kanban-icon"})})]})}function Yf({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=Ke(),[i,u]=(0,br.useState)({}),[c,d]=(0,br.useState)(""),f=Mr(Qa(Jt,{activationConstraint:{distance:8}}),Qa(Zt,{coordinateGetter:Vr}));(0,br.useEffect)(()=>{e&&u(Object.fromEntries(t.map(p=>[p.id,p.title])))},[e,t]);let g=p=>{let m=(i[p]??"").trim(),x=t.find(C=>C.id===p);x&&m&&m!==x.title&&r(p,m)},h=p=>{let{active:m,over:x}=p;x&&m.id!==x.id&&o(String(m.id),String(x.id))};return(0,Ie.jsx)(ho,{open:e,onOpenChange:a,children:(0,Ie.jsxs)(Ia,{className:"kanban-dialog-medium",children:[(0,Ie.jsxs)(wa,{children:[(0,Ie.jsx)(Sa,{children:s("columnEdit")}),(0,Ie.jsx)(sr,{children:s("columnEditDesc")})]}),(0,Ie.jsx)(Or,{sensors:f,collisionDetection:Si,onDragEnd:h,children:(0,Ie.jsx)(Ur,{items:t.map(p=>p.id),strategy:Hr,children:(0,Ie.jsx)("div",{className:"kanban-sortable-list",children:t.map(p=>(0,Ie.jsx)(fC,{column:p,value:i[p.id]??p.title,onValueChange:m=>u(x=>({...x,[p.id]:m})),onCommit:()=>g(p.id),onDelete:()=>n(p.id),canDelete:t.length>1},p.id))})})}),(0,Ie.jsxs)("div",{className:"kanban-sortable-row",children:[(0,Ie.jsx)(Wt,{value:c,placeholder:s("newColumnPlaceholder"),onChange:p=>d(p.target.value),onKeyDown:p=>{p.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,Ie.jsxs)(De,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,Ie.jsx)(Ft,{className:"kanban-icon"}),s("add")]})]})]})})}var yo=require("react");var Pe=require("react/jsx-runtime");function Zf({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=Ke(),[s,i]=(0,yo.useState)({}),[u,c]=(0,yo.useState)(""),[d,f]=(0,yo.useState)("#38bdf8");(0,yo.useEffect)(()=>{e&&i(Object.fromEntries(t.map(h=>[h.name,{name:h.name,color:h.color}])))},[e,t]);let g=h=>{let p=s[h];if(!p)return;let m=t.find(C=>C.name===h),x=p.name.trim();m&&x&&(x!==h||p.color!==m.color)&&r(h,x,p.color)};return(0,Pe.jsx)(ho,{open:e,onOpenChange:a,children:(0,Pe.jsxs)(Ia,{className:"kanban-dialog-medium",children:[(0,Pe.jsxs)(wa,{children:[(0,Pe.jsx)(Sa,{children:l("labelEdit")}),(0,Pe.jsx)(sr,{children:l("labelEditDesc")})]}),(0,Pe.jsx)("div",{className:"kanban-label-list",children:t.map(h=>{let p=s[h.name]??{name:h.name,color:h.color};return(0,Pe.jsxs)("div",{className:"kanban-label-row",children:[(0,Pe.jsx)("input",{type:"color",value:p.color,className:"kanban-color-input",onChange:m=>i(x=>({...x,[h.name]:{...p,color:m.target.value}})),onBlur:()=>g(h.name)}),(0,Pe.jsx)(Wt,{value:p.name,onChange:m=>i(x=>({...x,[h.name]:{...p,name:m.target.value}})),onBlur:()=>g(h.name),onKeyDown:m=>{m.key==="Enter"&&m.target.blur()}}),(0,Pe.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(h.name),children:(0,Pe.jsx)(Bt,{className:"kanban-icon"})})]},h.name)})}),(0,Pe.jsx)(lr,{className:"kanban-dialog-footer-layout",children:(0,Pe.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Pe.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:h=>f(h.target.value)}),(0,Pe.jsx)(Wt,{value:u,placeholder:l("newLabelPlaceholder"),onChange:h=>c(h.target.value),onKeyDown:h=>{h.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Pe.jsxs)(De,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Pe.jsx)(Ft,{className:"kanban-icon"}),l("add")]})]})})]})})}function Bn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(o=>o.json())}var Ws=new Map,Gs=0,Nn=new Set;function Jf(e,t){Ws.set(e,t),Gs++;for(let a of Nn)a()}function Qf(e){let t=Ws.get(e);if(t==null)return null;Ws.delete(e),Gs++;for(let a of Nn)a();return t}function ep(e){return Nn.add(e),()=>{Nn.delete(e)}}function tp(){return Gs}function ap(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(go("fieldId")+": "+t),a&&n.push(a),r&&n.push(go("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var K=require("react/jsx-runtime");function op(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,l=a?a(R=>R.items):[],s=a?a(R=>R.recentWorkspaceId):void 0,i=Array.isArray(l)?l.find(R=>Array.isArray(R.sessionIds)&&R.sessionIds.includes(t)):void 0,u=i?i.workspaceId:s||"default",c=Ke(),[d,f]=(0,ge.useState)(null),[g,h]=(0,ge.useState)(""),[p,m]=(0,ge.useState)([]),[x,C]=(0,ge.useState)(null),[v,L]=(0,ge.useState)(null),[I,b]=(0,ge.useState)(!1),[S,y]=(0,ge.useState)(!1),[P,T]=(0,ge.useState)(!1),[M,E]=(0,ge.useState)(""),N=(0,ge.useRef)(null),[H,Q]=(0,ge.useState)(null),$=Mr(Qa(Jt,{activationConstraint:{distance:8}}),Qa(Zt,{coordinateGetter:Vr})),O=(0,ge.useCallback)(R=>{R&&R.board&&(f({...R.board,activities:Array.isArray(R.board.activities)?R.board.activities:[]}),h("")),Array.isArray(R&&R.warnings)&&R.warnings.length>0&&m(F=>[...F,...R.warnings])},[]),_=(0,ge.useCallback)((R,F={})=>{Bn(R,F,u).then(O).catch(W=>h(c("actionFailed")+String(W&&W.message||W)))},[u,O]),G=(0,ge.useCallback)(()=>{T(!0),Bn("get",{},u).then(O).catch(R=>h(c("loadFailed")+String(R&&R.message||R))).finally(()=>T(!1))},[u,O,c]);(0,ge.useEffect)(()=>{let R=!0;return Bn("get",{},u).then(F=>{R&&O(F)}).catch(F=>{R&&h(c("loadFailed")+String(F&&F.message||F))}),()=>{R=!1}},[u,O]),(0,ge.useLayoutEffect)(()=>{let R=X=>{let B=X;for(;B;){let j=getComputedStyle(B).overflowY;if(j==="auto"||j==="scroll")return B;B=B.parentElement}return null},F=()=>{let X=N.current;if(!X)return;let B=X.getBoundingClientRect().top,j=R(X.parentElement),Y=window.innerHeight;if(j){let te=j.querySelector("[data-composer-seat]"),xe=te?te.getBoundingClientRect().top:0;te&&te.offsetHeight>0&&xe>B?Y=xe:Y=j.getBoundingClientRect().bottom}Q(Math.max(0,Math.floor(Y-B)))};F();let W=R(N.current?.parentElement??null),k=new ResizeObserver(F);return k.observe(document.documentElement),W&&k.observe(W),window.addEventListener("resize",F),()=>{k.disconnect(),window.removeEventListener("resize",F)}},[d!==null]);let A=(0,ge.useCallback)(R=>{let F=yi(R),W=F.length>0?F:al(R),k=Ho(W,"id");if(k==null)return[];if(new Set((d?.columns??[]).map(B=>B.id)).has(String(k))){let B=(d?.cards??[]).filter(j=>j.columnId===k).map(j=>j.id);if(B.length>0){let j=Ar({...R,droppableContainers:R.droppableContainers.filter(Y=>Y.id!==k&&B.includes(String(Y.id)))});j.length>0&&(k=j[0].id)}}return[{id:k}]},[d]),me=R=>{if(R.active.data.current?.type==="card"){let F=d?.cards.find(W=>W.id===R.active.id);F&&C(F)}},J=R=>{let{active:F,over:W}=R;if(C(null),!W||!d)return;let k=F.data.current?.type,X=W.data.current?.type;if(k==="card")if(X==="card"){let B=d.cards.find(te=>te.id===W.id);if(!B||B.id===F.id)return;let Y=d.cards.filter(te=>te.columnId===B.columnId).findIndex(te=>te.id===B.id);_("moveCard",{id:String(F.id),columnId:B.columnId,toIndex:Y>=0?Y:void 0})}else X==="column"&&_("moveCard",{id:String(F.id),columnId:String(W.id)})},le=R=>{if(!v)return;let F={title:R.title,note:R.note,label:R.label||void 0,priority:R.priority||void 0};v.card?_("updateCard",{id:v.card.id,...F}):_("addCard",{columnId:v.columnId,...F})},he=(0,ge.useCallback)((R,F)=>{let W=ap(R);if(W){if(F==="current"){o?.setDraft(W);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(k=>{k&&(Jf(k,W),n.open(k))}).catch(k=>h(c("actionFailed")+String(k&&k.message||k)))}},[o,r,n,u,c]);return d?(0,K.jsxs)("div",{ref:N,className:"kanban-root kanban-view",style:H!=null?{height:H}:void 0,children:[g&&(0,K.jsx)("p",{className:"kanban-error",children:g}),p.length>0&&(0,K.jsxs)("div",{className:"kanban-warning",children:[(0,K.jsxs)("div",{className:"kanban-warning-body",children:[(0,K.jsx)("p",{className:"kanban-warning-title",children:c("warnings")}),p.map((R,F)=>(0,K.jsx)("p",{className:"kanban-warning-item",children:R},F))]}),(0,K.jsx)(De,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>m([]),children:c("dismiss")})]}),(0,K.jsxs)(Or,{sensors:$,collisionDetection:A,onDragStart:me,onDragEnd:J,children:[(0,K.jsxs)("div",{className:"kanban-content",children:[(0,K.jsxs)("div",{className:"kanban-toolbar",children:[(0,K.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:G,children:(0,K.jsx)($o,{className:P?"kanban-animate-spin":void 0})}),(0,K.jsxs)(hr,{children:[(0,K.jsx)(xr,{asChild:!0,children:(0,K.jsx)(De,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("settings"),children:(0,K.jsx)(Yo,{className:"kanban-icon"})})}),(0,K.jsxs)(Io,{align:"start",children:[(0,K.jsxs)(Vt,{onClick:()=>b(!0),children:[(0,K.jsx)(Xo,{className:"kanban-icon"}),c("columnEdit")]}),(0,K.jsxs)(Vt,{onClick:()=>y(!0),children:[(0,K.jsx)(Zo,{className:"kanban-icon"}),c("labelEdit")]})]})]}),(0,K.jsxs)(hr,{children:[(0,K.jsx)(xr,{asChild:!0,children:(0,K.jsx)(De,{variant:M?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:c("priorityFilter"),children:(0,K.jsx)(zo,{className:"kanban-icon"})})}),(0,K.jsxs)(Io,{align:"start",children:[(0,K.jsxs)(Vt,{onClick:()=>E(""),children:[(0,K.jsx)("span",{className:"kanban-filter-check",children:!M&&(0,K.jsx)(Qt,{className:"kanban-icon"})}),c("all")]}),En.map(R=>(0,K.jsxs)(Vt,{onClick:()=>E(R),children:[(0,K.jsx)("span",{className:"kanban-filter-check",children:M===R&&(0,K.jsx)(Qt,{className:"kanban-icon"})}),(0,K.jsx)("span",{className:"kanban-priority-dot",style:{background:Gt[R].color}}),Gt[R].label]},R))]})]})]}),(0,K.jsx)("div",{className:"kanban-board-scroll",children:d.columns.map(R=>{let F=d.cards.filter(W=>W.columnId===R.id&&(!M||W.priority===M));return(0,K.jsx)($f,{column:R,cards:F,labels:d.labels,onAddCard:W=>L({card:null,columnId:W.id}),onOpenCard:W=>L({card:W,columnId:W.columnId})},R.id)})})]}),(0,K.jsx)(Vi,{children:x?(0,K.jsx)(Cr,{className:"kanban-drag-preview",children:(0,K.jsx)(Lr,{className:"kanban-drag-preview-content",children:(0,K.jsx)("p",{className:"kanban-drag-preview-title",children:x.title})})}):null})]}),(0,K.jsx)(Kf,{open:v!==null,card:v?.card??null,labels:d.labels,activities:v?.card?d.activities.filter(R=>R.cardId===v.card.id):[],onOpenChange:R=>{R||L(null)},onSave:le,onDelete:R=>_("deleteCard",{id:R.id}),onChatWithAgent:he}),(0,K.jsx)(Yf,{open:I,columns:d.columns,onOpenChange:b,onReorder:(R,F)=>{let W=d.columns.findIndex(k=>k.id===F);W>=0&&_("moveColumn",{id:R,toIndex:W})},onRename:(R,F)=>_("renameColumn",{id:R,title:F}),onDelete:R=>_("deleteColumn",{id:R}),onAdd:R=>_("addColumn",{title:R})}),(0,K.jsx)(Zf,{open:S,labels:d.labels,onOpenChange:y,onAdd:(R,F)=>_("addLabel",{name:R,color:F}),onUpdate:(R,F,W)=>_("updateLabel",{name:R,newName:F,color:W}),onDelete:R=>_("deleteLabel",{name:R})})]}):(0,K.jsx)("div",{className:"kanban-root kanban-loading",children:g?(0,K.jsx)("p",{className:"kanban-error",children:g}):(0,K.jsx)("p",{className:"kanban-muted-text",children:c("loading")})})}var _n=require("react");function rp({sessionId:e,inputActions:t}){let a=(0,_n.useSyncExternalStore)(ep,tp);return(0,_n.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Qf(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var np={name:"dsh-kanban",inject:["slots","locale"],apply(e){bd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>go("boardTab")},r=>(0,zs.createElement)(op,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,zs.createElement)(rp,r)))}};var lp="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+lp+"]")){let e=document.createElement("style");e.setAttribute(lp,""),e.textContent=ai,document.head.appendChild(e)}var pC=np;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/filter.js:
lucide-react/dist/esm/icons/grip-vertical.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/settings-2.js:
lucide-react/dist/esm/icons/tag.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})