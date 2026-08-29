window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var mp=Object.create;var yr=Object.defineProperty;var gp=Object.getOwnPropertyDescriptor;var hp=Object.getOwnPropertyNames;var xp=Object.getPrototypeOf,vp=Object.prototype.hasOwnProperty;var Js=e=>{throw TypeError(e)};var Cp=(e,t)=>{for(var a in t)yr(e,a,{get:t[a],enumerable:!0})},Qs=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of hp(t))!vp.call(e,r)&&r!==a&&yr(e,r,{get:()=>t[r],enumerable:!(o=gp(t,r))||o.enumerable});return e};var H=(e,t,a)=>(a=e!=null?mp(xp(e)):{},Qs(t||!e||!e.__esModule?yr(a,"default",{value:e,enumerable:!0}):a,e)),Lp=e=>Qs(yr({},"__esModule",{value:!0}),e);var ei=(e,t,a)=>t.has(e)||Js("Cannot "+a);var qe=(e,t,a)=>(ei(e,t,"read from private field"),a?a.call(e):t.get(e)),ti=(e,t,a)=>t.has(e)?Js("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),qn=(e,t,a,o)=>(ei(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var fC={};Cp(fC,{default:()=>cC});module.exports=Lp(fC);var ai=`/*
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
`;var zs=require("react");var fe=require("react");var S=H(require("react")),ga=require("react-dom");var ve=require("react");function ri(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,ve.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Ao=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ua(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Rr(e){return"nodeType"in e}function Ve(e){var t,a;return e?ua(e)?e:Rr(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Pr(e){let{Document:t}=Ve(e);return e instanceof t}function Ya(e){return ua(e)?!1:e instanceof Ve(e).HTMLElement}function Wn(e){return e instanceof Ve(e).SVGElement}function da(e){return e?ua(e)?e.document:Rr(e)?Pr(e)?e:Ya(e)||Wn(e)?e.ownerDocument:document:document:document}var at=Ao?ve.useLayoutEffect:ve.useEffect;function To(e){let t=(0,ve.useRef)(e);return at(()=>{t.current=e}),(0,ve.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ni(){let e=(0,ve.useRef)(null),t=(0,ve.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,ve.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function Za(e,t){t===void 0&&(t=[e]);let a=(0,ve.useRef)(e);return at(()=>{a.current!==e&&(a.current=e)},t),a}function Ja(e,t){let a=(0,ve.useRef)();return(0,ve.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Eo(e){let t=To(e),a=(0,ve.useRef)(null),o=(0,ve.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Oo(e){let t=(0,ve.useRef)();return(0,ve.useEffect)(()=>{t.current=e},[e]),t.current}var Vn={};function ca(e,t){return(0,ve.useMemo)(()=>{if(t)return t;let a=Vn[e]==null?0:Vn[e]+1;return Vn[e]=a,e+"-"+a},[e,t])}function li(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var fa=li(1),pa=li(-1);function Ip(e){return"clientX"in e&&"clientY"in e}function Qa(e){if(!e)return!1;let{KeyboardEvent:t}=Ve(e.target);return t&&e instanceof t}function wp(e){if(!e)return!1;let{TouchEvent:t}=Ve(e.target);return t&&e instanceof t}function Fo(e){if(wp(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return Ip(e)?{x:e.clientX,y:e.clientY}:null}var tt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[tt.Translate.toString(e),tt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),oi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function si(e){return e.matches(oi)?e:e.querySelector(oi)}var ma=H(require("react")),Sp={display:"none"};function ii(e){let{id:t,value:a}=e;return ma.default.createElement("div",{id:t,style:Sp},a)}function ui(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ma.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function di(){let[e,t]=(0,ma.useState)("");return{announce:(0,ma.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var wi=(0,S.createContext)(null);function yp(e){let t=(0,S.useContext)(wi);(0,S.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Rp(){let[e]=(0,S.useState)(()=>new Set),t=(0,S.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,S.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Pp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},kp={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Dp(e){let{announcements:t=kp,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Pp}=e,{announce:n,announcement:l}=di(),s=ca("DndLiveRegion"),[i,u]=(0,S.useState)(!1);if((0,S.useEffect)(()=>{u(!0)},[]),yp((0,S.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=S.default.createElement(S.default.Fragment,null,S.default.createElement(ii,{id:o,value:r.draggable}),S.default.createElement(ui,{id:s,announcement:l}));return a?(0,ga.createPortal)(c,a):c}var Re;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Re||(Re={}));function Dr(){}function eo(e,t){return(0,S.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Ar(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,S.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var ht=Object.freeze({x:0,y:0});function Qn(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Mp(e,t){let a=Fo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function el(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function Ap(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Xn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function Uo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function ci(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Si=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=ci(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Qn(ci(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(el)},Tr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Xn(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Xn(i),c=r.reduce((f,h,p)=>f+Qn(u[p],h),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(el)};function Tp(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var tl=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=Tp(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(Ap)};function Ep(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var yi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&Ep(o,s)){let u=Xn(s).reduce((d,f)=>d+Qn(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(el)};function Op(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ri(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ht}function Fp(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var Bp=Fp(1);function Pi(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Np(e,t,a){let o=Pi(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var _p={ignoreTransform:!1};function va(e,t){t===void 0&&(t=_p);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=Ve(e).getComputedStyle(e);u&&(a=Np(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function fi(e){return va(e,{ignoreTransform:!0})}function Hp(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function Up(e,t){return t===void 0&&(t=Ve(e).getComputedStyle(e)),t.position==="fixed"}function qp(e,t){t===void 0&&(t=Ve(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function qo(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Pr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!Ya(r)||Wn(r)||a.includes(r))return a;let n=Ve(e).getComputedStyle(r);return r!==e&&qp(r,n)&&a.push(r),Up(r,n)?a:o(r.parentNode)}return e?o(e):a}function ki(e){let[t]=qo(e,1);return t??null}function Gn(e){return!Ao||!e?null:ua(e)?e:Rr(e)?Pr(e)||e===da(e).scrollingElement?window:Ya(e)?e:null:null}function Di(e){return ua(e)?e.scrollX:e.scrollLeft}function Mi(e){return ua(e)?e.scrollY:e.scrollTop}function jn(e){return{x:Di(e),y:Mi(e)}}var De;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(De||(De={}));function Ai(e){return!Ao||!e?!1:e===document.scrollingElement}function Ti(e){let t={x:0,y:0},a=Ai(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var Vp={x:.2,y:.2};function Wp(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=Vp);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Ti(e),h={x:0,y:0},p={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(h.y=De.Backward,p.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(h.y=De.Forward,p.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(h.x=De.Forward,p.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(h.x=De.Backward,p.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:h,speed:p}}function Gp(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function Ei(e){return e.reduce((t,a)=>fa(t,jn(a)),ht)}function zp(e){return e.reduce((t,a)=>t+Di(a),0)}function Kp(e){return e.reduce((t,a)=>t+Mi(a),0)}function Oi(e,t){if(t===void 0&&(t=va),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);ki(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Xp=[["x",["left","right"],zp],["y",["top","bottom"],Kp]],No=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=qo(a),r=Ei(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Xp)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},ha=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function jp(e){let{EventTarget:t}=Ve(e);return e instanceof t?e:da(e)}function zn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var it;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(it||(it={}));function pi(e){e.preventDefault()}function $p(e){e.stopPropagation()}var ae;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ae||(ae={}));var Fi={start:[ae.Space,ae.Enter],cancel:[ae.Esc],end:[ae.Space,ae.Enter,ae.Tab]},Yp=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ae.Right:return{...a,x:a.x+25};case ae.Left:return{...a,x:a.x-25};case ae.Down:return{...a,y:a.y+25};case ae.Up:return{...a,y:a.y-25}}},Qt=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new ha(da(a)),this.windowListeners=new ha(Ve(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(it.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Oi(o),a(ht)}handleKeyDown(t){if(Qa(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=Fi,coordinateGetter:l=Yp,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:ht;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=pa(d,c),h={x:0,y:0},{scrollableAncestors:p}=o.current;for(let m of p){let g=t.code,{isTop:v,isRight:C,isLeft:x,isBottom:L,maxScroll:w,minScroll:I}=Ti(m),y=Gp(m),R={x:Math.min(g===ae.Right?y.right-y.width/2:y.right,Math.max(g===ae.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(g===ae.Down?y.bottom-y.height/2:y.bottom,Math.max(g===ae.Down?y.top:y.top+y.height/2,d.y))},P=g===ae.Right&&!C||g===ae.Left&&!x,E=g===ae.Down&&!L||g===ae.Up&&!v;if(P&&R.x!==d.x){let T=m.scrollLeft+f.x,O=g===ae.Right&&T<=w.x||g===ae.Left&&T>=I.x;if(O&&!f.y){m.scrollTo({left:T,behavior:s});return}O?h.x=m.scrollLeft-T:h.x=g===ae.Right?m.scrollLeft-w.x:m.scrollLeft-I.x,h.x&&m.scrollBy({left:-h.x,behavior:s});break}else if(E&&R.y!==d.y){let T=m.scrollTop+f.y,O=g===ae.Down&&T<=w.y||g===ae.Up&&T>=I.y;if(O&&!f.x){m.scrollTo({top:T,behavior:s});return}O?h.y=m.scrollTop-T:h.y=g===ae.Down?m.scrollTop-w.y:m.scrollTop-I.y,h.y&&m.scrollBy({top:-h.y,behavior:s});break}}this.handleMove(t,fa(pa(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Qt.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=Fi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function mi(e){return!!(e&&"distance"in e)}function gi(e){return!!(e&&"delay"in e)}var _o=class{constructor(t,a,o){var r;o===void 0&&(o=jp(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=da(l),this.documentListeners=new ha(this.document),this.listeners=new ha(o),this.windowListeners=new ha(Ve(l)),this.initialCoordinates=(r=Fo(n))!=null?r:ht,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(it.Resize,this.handleCancel),this.windowListeners.add(it.DragStart,pi),this.windowListeners.add(it.VisibilityChange,this.handleCancel),this.windowListeners.add(it.ContextMenu,pi),this.documentListeners.add(it.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(gi(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(mi(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(it.Click,$p,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(it.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Fo(t))!=null?a:ht,u=pa(r,i);if(!o&&s){if(mi(s)){if(s.tolerance!=null&&zn(u,s.tolerance))return this.handleCancel();if(zn(u,s.distance))return this.handleStart()}if(gi(s)&&zn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ae.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Zp={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},ea=class extends _o{constructor(t){let{event:a}=t,o=da(a.target);super(t,Zp,o)}};ea.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var Jp={move:{name:"mousemove"},end:{name:"mouseup"}},$n;(function(e){e[e.RightClick=2]="RightClick"})($n||($n={}));var Yn=class extends _o{constructor(t){super(t,Jp,da(t.event.target))}};Yn.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===$n.RightClick?!1:(o?.({event:a}),!0)}}];var Kn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},Zn=class extends _o{constructor(t){super(t,Kn)}static setup(){return window.addEventListener(Kn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Kn.move.name,t)};function t(){}}};Zn.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Bo;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Bo||(Bo={}));var Mr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Mr||(Mr={}));function Qp(e){let{acceleration:t,activator:a=Bo.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Mr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=tm({delta:d,disabled:!n}),[p,m]=ni(),g=(0,S.useRef)({x:0,y:0}),v=(0,S.useRef)({x:0,y:0}),C=(0,S.useMemo)(()=>{switch(a){case Bo.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Bo.DraggableRect:return r}},[a,r,i]),x=(0,S.useRef)(null),L=(0,S.useCallback)(()=>{let I=x.current;if(!I)return;let y=g.current.x*v.current.x,R=g.current.y*v.current.y;I.scrollBy(y,R)},[]),w=(0,S.useMemo)(()=>s===Mr.TreeOrder?[...u].reverse():u,[s,u]);(0,S.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let I of w){if(o?.(I)===!1)continue;let y=u.indexOf(I),R=c[y];if(!R)continue;let{direction:P,speed:E}=Wp(I,R,C,t,f);for(let T of["x","y"])h[T][P[T]]||(E[T]=0,P[T]=0);if(E.x>0||E.y>0){m(),x.current=I,p(L,l),g.current=E,v.current=P;return}}g.current={x:0,y:0},v.current={x:0,y:0},m()},[t,L,o,m,n,l,JSON.stringify(C),JSON.stringify(h),p,u,w,c,JSON.stringify(f)])}var em={x:{[De.Backward]:!1,[De.Forward]:!1},y:{[De.Backward]:!1,[De.Forward]:!1}};function tm(e){let{delta:t,disabled:a}=e,o=Oo(t);return Ja(r=>{if(a||!o||!r)return em;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[De.Backward]:r.x[De.Backward]||n.x===-1,[De.Forward]:r.x[De.Forward]||n.x===1},y:{[De.Backward]:r.y[De.Backward]||n.y===-1,[De.Forward]:r.y[De.Forward]||n.y===1}}},[a,t,o])}function am(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return Ja(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function om(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Ho;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ho||(Ho={}));var Jn;(function(e){e.Optimized="optimized"})(Jn||(Jn={}));var hi=new Map;function rm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,S.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,S.useRef)(e),d=g(),f=Za(d),h=(0,S.useCallback)(function(v){v===void 0&&(v=[]),!f.current&&l(C=>C===null?v:C.concat(v.filter(x=>!C.includes(x))))},[f]),p=(0,S.useRef)(null),m=Ja(v=>{if(d&&!a)return hi;if(!v||v===hi||c.current!==e||n!=null){let C=new Map;for(let x of e){if(!x)continue;if(n&&n.length>0&&!n.includes(x.id)&&x.rect.current){C.set(x.id,x.rect.current);continue}let L=x.node.current,w=L?new No(i(L),L):null;x.rect.current=w,w&&C.set(x.id,w)}return C}return v},[e,n,a,d,i]);return(0,S.useEffect)(()=>{c.current=e},[e]),(0,S.useEffect)(()=>{d||h()},[a,d]),(0,S.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,S.useEffect)(()=>{d||typeof s!="number"||p.current!==null||(p.current=setTimeout(()=>{h(),p.current=null},s))},[s,d,h,...o]),{droppableRects:m,measureDroppableContainers:h,measuringScheduled:n!=null};function g(){switch(u){case Ho.Always:return!1;case Ho.BeforeDragging:return a;default:return!a}}}function al(e,t){return Ja(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function nm(e,t){return al(e,t)}function lm(e){let{callback:t,disabled:a}=e,o=To(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Er(e){let{callback:t,disabled:a}=e,o=To(t),r=(0,S.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,S.useEffect)(()=>()=>r?.disconnect(),[r]),r}function sm(e){return new No(va(e),e)}function xi(e,t,a){t===void 0&&(t=sm);let[o,r]=(0,S.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=lm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=Er({callback:n});return at(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function im(e){let t=al(e);return Ri(e,t)}var vi=[];function um(e){let t=(0,S.useRef)(e),a=Ja(o=>e?o&&o!==vi&&e&&t.current&&e.parentNode===t.current.parentNode?o:qo(e):vi,[e]);return(0,S.useEffect)(()=>{t.current=e},[e]),a}function dm(e){let[t,a]=(0,S.useState)(null),o=(0,S.useRef)(e),r=(0,S.useCallback)(n=>{let l=Gn(n.target);l&&a(s=>s?(s.set(l,jn(l)),new Map(s)):null)},[]);return(0,S.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=Gn(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,jn(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=Gn(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,S.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>fa(n,l),ht):Ei(e):ht,[e,t])}function Ci(e,t){t===void 0&&(t=[]);let a=(0,S.useRef)(null);return(0,S.useEffect)(()=>{a.current=null},t),(0,S.useEffect)(()=>{let o=e!==ht;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?pa(e,a.current):ht}function cm(e){(0,S.useEffect)(()=>{if(!Ao)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function fm(e,t){return(0,S.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Bi(e){return(0,S.useMemo)(()=>e?Hp(e):null,[e])}var Li=[];function pm(e,t){t===void 0&&(t=va);let[a]=e,o=Bi(a?Ve(a):null),[r,n]=(0,S.useState)(Li);function l(){n(()=>e.length?e.map(i=>Ai(i)?o:new No(t(i),i)):Li)}let s=Er({callback:l});return at(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Ni(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Ya(t)?t:e}function mm(e){let{measure:t}=e,[a,o]=(0,S.useState)(null),r=(0,S.useCallback)(u=>{for(let{target:c}of u)if(Ya(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=Er({callback:r}),l=(0,S.useCallback)(u=>{let c=Ni(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Eo(l);return(0,S.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var gm=[{sensor:ea,options:{}},{sensor:Qt,options:{}}],hm={current:{}},kr={draggable:{measure:fi},droppable:{measure:fi,strategy:Ho.WhileDragging,frequency:Jn.Optimized},dragOverlay:{measure:va}},xa=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},xm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new xa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Dr},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:kr,measureDroppableContainers:Dr,windowRect:null,measuringScheduled:!1},_i={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Dr,draggableNodes:new Map,over:null,measureDroppableContainers:Dr},Vo=(0,S.createContext)(_i),Hi=(0,S.createContext)(xm);function vm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new xa}}}function Cm(e,t){switch(t.type){case Re.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Re.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Re.DragEnd:case Re.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Re.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new xa(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Re.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new xa(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Re.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new xa(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Lm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,S.useContext)(Vo),n=Oo(o),l=Oo(a?.id);return(0,S.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!Qa(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=si(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function Ui(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function bm(e){return(0,S.useMemo)(()=>({draggable:{...kr.draggable,...e?.draggable},droppable:{...kr.droppable,...e?.droppable},dragOverlay:{...kr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Im(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,S.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;at(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ri(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=ki(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Or=(0,S.createContext)({...ht,scaleX:1,scaleY:1}),Jt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Jt||(Jt={}));var Fr=(0,S.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=gm,collisionDetection:d=tl,measuring:f,modifiers:h,...p}=t,m=(0,S.useReducer)(Cm,void 0,vm),[g,v]=m,[C,x]=Rp(),[L,w]=(0,S.useState)(Jt.Uninitialized),I=L===Jt.Initialized,{draggable:{active:y,nodes:R,translate:P},droppable:{containers:E}}=g,T=y!=null?R.get(y):null,O=(0,S.useRef)({initial:null,translated:null}),F=(0,S.useMemo)(()=>{var Ue;return y!=null?{id:y,data:(Ue=T?.data)!=null?Ue:hm,rect:O}:null},[y,T]),_=(0,S.useRef)(null),[Y,X]=(0,S.useState)(null),[N,V]=(0,S.useState)(null),W=Za(p,Object.values(p)),A=ca("DndDescribedBy",l),re=(0,S.useMemo)(()=>E.getEnabled(),[E]),Z=bm(f),{droppableRects:ne,measureDroppableContainers:he,measuringScheduled:Ie}=rm(re,{dragging:I,dependencies:[P.x,P.y],config:Z.droppable}),ge=am(R,y),we=(0,S.useMemo)(()=>N?Fo(N):null,[N]),b=pp(),D=nm(ge,Z.draggable.measure);Im({activeNode:y!=null?R.get(y):null,config:b.layoutShiftCompensation,initialRect:D,measure:Z.draggable.measure});let k=xi(ge,Z.draggable.measure,D),B=xi(ge?ge.parentElement:null),j=(0,S.useRef)({activatorEvent:null,active:null,activeNode:ge,collisionRect:null,collisions:null,droppableRects:ne,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),z=E.getNodeFor((a=j.current.over)==null?void 0:a.id),te=mm({measure:Z.dragOverlay.measure}),se=(o=te.nodeRef.current)!=null?o:ge,ke=I?(r=te.rect)!=null?r:k:null,mt=!!(te.nodeRef.current&&te.rect),gt=im(mt?null:k),Ka=Bi(se?Ve(se):null),He=um(I?z??ge:null),wr=pm(He),Sr=Ui(h,{transform:{x:P.x-gt.x,y:P.y-gt.y,scaleX:1,scaleY:1},activatorEvent:N,active:F,activeNodeRect:k,containerNodeRect:B,draggingNodeRect:ke,over:j.current.over,overlayNodeRect:te.rect,scrollableAncestors:He,scrollableAncestorRects:wr,windowRect:Ka}),Ks=we?fa(we,P):null,Xs=dm(He),lp=Ci(Xs),sp=Ci(Xs,[k]),Xa=fa(Sr,lp),ja=ke?Bp(ke,Sr):null,Po=F&&ja?d({active:F,collisionRect:ja,droppableRects:ne,droppableContainers:re,pointerCoordinates:Ks}):null,js=Uo(Po,"id"),[jt,$s]=(0,S.useState)(null),ip=mt?Sr:fa(Sr,sp),up=Op(ip,(n=jt?.rect)!=null?n:null,k),Hn=(0,S.useRef)(null),Ys=(0,S.useCallback)((Ue,Je)=>{let{sensor:Qe,options:$t}=Je;if(_.current==null)return;let st=R.get(_.current);if(!st)return;let et=Ue.nativeEvent,Rt=new Qe({active:_.current,activeNode:st,event:et,options:$t,context:j,onAbort(Fe){if(!R.get(Fe))return;let{onDragAbort:Pt}=W.current,Bt={id:Fe};Pt?.(Bt),C({type:"onDragAbort",event:Bt})},onPending(Fe,Yt,Pt,Bt){if(!R.get(Fe))return;let{onDragPending:Do}=W.current,Zt={id:Fe,constraint:Yt,initialCoordinates:Pt,offset:Bt};Do?.(Zt),C({type:"onDragPending",event:Zt})},onStart(Fe){let Yt=_.current;if(Yt==null)return;let Pt=R.get(Yt);if(!Pt)return;let{onDragStart:Bt}=W.current,ko={activatorEvent:et,active:{id:Yt,data:Pt.data,rect:O}};(0,ga.unstable_batchedUpdates)(()=>{Bt?.(ko),w(Jt.Initializing),v({type:Re.DragStart,initialCoordinates:Fe,active:Yt}),C({type:"onDragStart",event:ko}),X(Hn.current),V(et)})},onMove(Fe){v({type:Re.DragMove,coordinates:Fe})},onEnd:$a(Re.DragEnd),onCancel:$a(Re.DragCancel)});Hn.current=Rt;function $a(Fe){return async function(){let{active:Pt,collisions:Bt,over:ko,scrollAdjustedTranslate:Do}=j.current,Zt=null;if(Pt&&Do){let{cancelDrop:Mo}=W.current;Zt={activatorEvent:et,active:Pt,collisions:Bt,delta:Do,over:ko},Fe===Re.DragEnd&&typeof Mo=="function"&&await Promise.resolve(Mo(Zt))&&(Fe=Re.DragCancel)}_.current=null,(0,ga.unstable_batchedUpdates)(()=>{v({type:Fe}),w(Jt.Uninitialized),$s(null),X(null),V(null),Hn.current=null;let Mo=Fe===Re.DragEnd?"onDragEnd":"onDragCancel";if(Zt){let Un=W.current[Mo];Un?.(Zt),C({type:Mo,event:Zt})}})}}},[R]),dp=(0,S.useCallback)((Ue,Je)=>(Qe,$t)=>{let st=Qe.nativeEvent,et=R.get($t);if(_.current!==null||!et||st.dndKit||st.defaultPrevented)return;let Rt={active:et};Ue(Qe,Je.options,Rt)===!0&&(st.dndKit={capturedBy:Je.sensor},_.current=$t,Ys(Qe,Je))},[R,Ys]),Zs=om(c,dp);cm(c),at(()=>{k&&L===Jt.Initializing&&w(Jt.Initialized)},[k,L]),(0,S.useEffect)(()=>{let{onDragMove:Ue}=W.current,{active:Je,activatorEvent:Qe,collisions:$t,over:st}=j.current;if(!Je||!Qe)return;let et={active:Je,activatorEvent:Qe,collisions:$t,delta:{x:Xa.x,y:Xa.y},over:st};(0,ga.unstable_batchedUpdates)(()=>{Ue?.(et),C({type:"onDragMove",event:et})})},[Xa.x,Xa.y]),(0,S.useEffect)(()=>{let{active:Ue,activatorEvent:Je,collisions:Qe,droppableContainers:$t,scrollAdjustedTranslate:st}=j.current;if(!Ue||_.current==null||!Je||!st)return;let{onDragOver:et}=W.current,Rt=$t.get(js),$a=Rt&&Rt.rect.current?{id:Rt.id,rect:Rt.rect.current,data:Rt.data,disabled:Rt.disabled}:null,Fe={active:Ue,activatorEvent:Je,collisions:Qe,delta:{x:st.x,y:st.y},over:$a};(0,ga.unstable_batchedUpdates)(()=>{$s($a),et?.(Fe),C({type:"onDragOver",event:Fe})})},[js]),at(()=>{j.current={activatorEvent:N,active:F,activeNode:ge,collisionRect:ja,collisions:Po,droppableRects:ne,draggableNodes:R,draggingNode:se,draggingNodeRect:ke,droppableContainers:E,over:jt,scrollableAncestors:He,scrollAdjustedTranslate:Xa},O.current={initial:ke,translated:ja}},[F,ge,Po,ja,R,se,ke,ne,E,jt,He,Xa]),Qp({...b,delta:P,draggingRect:ja,pointerCoordinates:Ks,scrollableAncestors:He,scrollableAncestorRects:wr});let cp=(0,S.useMemo)(()=>({active:F,activeNode:ge,activeNodeRect:k,activatorEvent:N,collisions:Po,containerNodeRect:B,dragOverlay:te,draggableNodes:R,droppableContainers:E,droppableRects:ne,over:jt,measureDroppableContainers:he,scrollableAncestors:He,scrollableAncestorRects:wr,measuringConfiguration:Z,measuringScheduled:Ie,windowRect:Ka}),[F,ge,k,N,Po,B,te,R,E,ne,jt,he,He,wr,Z,Ie,Ka]),fp=(0,S.useMemo)(()=>({activatorEvent:N,activators:Zs,active:F,activeNodeRect:k,ariaDescribedById:{draggable:A},dispatch:v,draggableNodes:R,over:jt,measureDroppableContainers:he}),[N,Zs,F,k,v,A,R,jt,he]);return S.default.createElement(wi.Provider,{value:x},S.default.createElement(Vo.Provider,{value:fp},S.default.createElement(Hi.Provider,{value:cp},S.default.createElement(Or.Provider,{value:up},u)),S.default.createElement(Lm,{disabled:s?.restoreFocus===!1})),S.default.createElement(Dp,{...s,hiddenTextDescribedById:A}));function pp(){let Ue=Y?.autoScrollEnabled===!1,Je=typeof i=="object"?i.enabled===!1:i===!1,Qe=I&&!Ue&&!Je;return typeof i=="object"?{...i,enabled:Qe}:{enabled:Qe}}}),wm=(0,S.createContext)(null),bi="button",Sm="Draggable";function qi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ca(Sm),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,S.useContext)(Vo),{role:h=bi,roleDescription:p="draggable",tabIndex:m=0}=r??{},g=i?.id===t,v=(0,S.useContext)(g?Or:wm),[C,x]=Eo(),[L,w]=Eo(),I=fm(l,t),y=Za(a);at(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:L,data:y}),()=>{let P=d.get(t);P&&P.key===n&&d.delete(t)}),[d,t]);let R=(0,S.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":o,"aria-pressed":g&&h===bi?!0:void 0,"aria-roledescription":p,"aria-describedby":c.draggable}),[o,h,m,g,p,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:g,listeners:o?void 0:I,node:C,over:f,setNodeRef:x,setActivatorNodeRef:w,transform:v}}function ol(){return(0,S.useContext)(Hi)}var ym="Droppable",Rm={timeout:25};function Br(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ca(ym),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,S.useContext)(Vo),c=(0,S.useRef)({disabled:a}),d=(0,S.useRef)(!1),f=(0,S.useRef)(null),h=(0,S.useRef)(null),{disabled:p,updateMeasurementsFor:m,timeout:g}={...Rm,...r},v=Za(m??o),C=(0,S.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(v.current)?v.current:[v.current]),h.current=null},g)},[g]),x=Er({callback:C,disabled:p||!l}),L=(0,S.useCallback)((R,P)=>{x&&(P&&(x.unobserve(P),d.current=!1),R&&x.observe(R))},[x]),[w,I]=Eo(L),y=Za(t);return(0,S.useEffect)(()=>{!x||!w.current||(x.disconnect(),d.current=!1,x.observe(w.current))},[w,x]),(0,S.useEffect)(()=>(s({type:Re.RegisterDroppable,element:{id:o,key:n,disabled:a,node:w,rect:f,data:y}}),()=>s({type:Re.UnregisterDroppable,key:n,id:o})),[o]),(0,S.useEffect)(()=>{a!==c.current.disabled&&(s({type:Re.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:w,over:i,setNodeRef:I}}function Pm(e){let{animation:t,children:a}=e,[o,r]=(0,S.useState)(null),[n,l]=(0,S.useState)(null),s=Oo(a);return!a&&!o&&s&&r(s),at(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),S.default.createElement(S.default.Fragment,null,a,o?(0,S.cloneElement)(o,{ref:l}):null)}var km={x:0,y:0,scaleX:1,scaleY:1};function Dm(e){let{children:t}=e;return S.default.createElement(Vo.Provider,{value:_i},S.default.createElement(Or.Provider,{value:km},t))}var Mm={position:"fixed",touchAction:"none"},Am=e=>Qa(e)?"transform 250ms ease":void 0,Tm=(0,S.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=Am}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...Mm,width:s.width,height:s.height,top:s.top,left:s.left,transform:tt.Transform.toString(d),transformOrigin:r&&o?Mp(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return S.default.createElement(a,{className:l,style:f,ref:t},n)}),Em=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},Om=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:tt.Transform.toString(t)},{transform:tt.Transform.toString(a)}]},Fm={duration:250,easing:"ease",keyframes:Om,sideEffects:Em({styles:{active:{opacity:"0"}}})};function Bm(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return To((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Ni(l);if(!u)return;let{transform:c}=Ve(l).getComputedStyle(l),d=Pi(c);if(!d)return;let f=typeof t=="function"?t:Nm(t);return Oi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function Nm(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...Fm,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[p]=h,m=h[h.length-1];if(JSON.stringify(p)===JSON.stringify(m))return;let g=o?.({active:l,dragOverlay:s,...u}),v=s.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{v.onfinish=()=>{g?.(),C()}})}}var Ii=0;function _m(e){return(0,S.useMemo)(()=>{if(e!=null)return Ii++,Ii},[e])}var Vi=S.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:p,droppableContainers:m,dragOverlay:g,over:v,measuringConfiguration:C,scrollableAncestors:x,scrollableAncestorRects:L,windowRect:w}=ol(),I=(0,S.useContext)(Or),y=_m(d?.id),R=Ui(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:g.rect,over:v,overlayNodeRect:g.rect,scrollableAncestors:x,scrollableAncestorRects:L,transform:I,windowRect:w}),P=al(f),E=Bm({config:o,draggableNodes:p,droppableContainers:m,measuringConfiguration:C}),T=P?g.setRef:void 0;return S.default.createElement(Dm,null,S.default.createElement(Pm,{animation:E},d&&y?S.default.createElement(Tm,{key:y,id:d.id,ref:T,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:P,style:{zIndex:u,...r},transform:R},a):null))});var Ce=H(require("react"));function Wi(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function Hm(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Nr(e){return e!==null&&e>=0}function Um(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function qm(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var Gi=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=Wi(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var _r={scaleX:1,scaleY:1},Ur=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,..._r}:null}let i=Vm(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,..._r}:r<a&&r>=l?{x:0,y:s.height+i,..._r}:{x:0,y:0,..._r}};function Vm(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var zi="Sortable",Ki=Ce.default.createContext({activeIndex:-1,containerId:zi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Gi,disabled:{draggable:!1,droppable:!1}});function qr(e){let{children:t,id:a,items:o,strategy:r=Gi,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=ol(),d=ca(zi,a),f=s.rect!==null,h=(0,Ce.useMemo)(()=>o.map(I=>typeof I=="object"&&"id"in I?I.id:I),[o]),p=l!=null,m=l?h.indexOf(l.id):-1,g=u?h.indexOf(u.id):-1,v=(0,Ce.useRef)(h),C=!Um(h,v.current),x=g!==-1&&m===-1||C,L=qm(n);at(()=>{C&&p&&c(h)},[C,h,p,c]),(0,Ce.useEffect)(()=>{v.current=h},[h]);let w=(0,Ce.useMemo)(()=>({activeIndex:m,containerId:d,disabled:L,disableTransforms:x,items:h,overIndex:g,useDragOverlay:f,sortedRects:Hm(h,i),strategy:r}),[m,d,L.draggable,L.droppable,x,h,g,i,f,r]);return Ce.default.createElement(Ki.Provider,{value:w},t)}var Wm=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return Wi(a,o,r).indexOf(t)},Gm=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},zm={duration:200,easing:"ease"},Xi="transform",Km=tt.Transition.toString({property:Xi,duration:0,easing:"linear"}),Xm={roleDescription:"sortable"};function jm(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,Ce.useState)(null),s=(0,Ce.useRef)(a);return at(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=va(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,Ce.useEffect)(()=>{n&&l(null)},[n]),n}function Vr(e){let{animateLayoutChanges:t=Gm,attributes:a,disabled:o,data:r,getNewIndex:n=Wm,id:l,strategy:s,resizeObserverConfig:i,transition:u=zm}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:p,sortedRects:m,overIndex:g,useDragOverlay:v,strategy:C}=(0,Ce.useContext)(Ki),x=$m(o,h),L=c.indexOf(l),w=(0,Ce.useMemo)(()=>({sortable:{containerId:d,index:L,items:c},...r}),[d,r,L,c]),I=(0,Ce.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:P,setNodeRef:E}=Br({id:l,data:w,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...i}}),{active:T,activatorEvent:O,activeNodeRect:F,attributes:_,setNodeRef:Y,listeners:X,isDragging:N,over:V,setActivatorNodeRef:W,transform:A}=qi({id:l,data:w,attributes:{...Xm,...a},disabled:x.draggable}),re=ri(E,Y),Z=!!T,ne=Z&&!p&&Nr(f)&&Nr(g),he=!v&&N,Ie=he&&ne?A:null,we=ne?Ie??(s??C)({rects:m,activeNodeRect:F,activeIndex:f,overIndex:g,index:L}):null,b=Nr(f)&&Nr(g)?n({id:l,items:c,activeIndex:f,overIndex:g}):L,D=T?.id,k=(0,Ce.useRef)({activeId:D,items:c,newIndex:b,containerId:d}),B=c!==k.current.items,j=t({active:T,containerId:d,isDragging:N,isSorting:Z,id:l,index:L,items:c,newIndex:k.current.newIndex,previousItems:k.current.items,previousContainerId:k.current.containerId,transition:u,wasDragging:k.current.activeId!=null}),z=jm({disabled:!j,index:L,node:R,rect:y});return(0,Ce.useEffect)(()=>{Z&&k.current.newIndex!==b&&(k.current.newIndex=b),d!==k.current.containerId&&(k.current.containerId=d),c!==k.current.items&&(k.current.items=c)},[Z,b,d,c]),(0,Ce.useEffect)(()=>{if(D===k.current.activeId)return;if(D&&!k.current.activeId){k.current.activeId=D;return}let se=setTimeout(()=>{k.current.activeId=D},50);return()=>clearTimeout(se)},[D]),{active:T,activeIndex:f,attributes:_,data:w,rect:y,index:L,newIndex:b,items:c,isOver:P,isSorting:Z,isDragging:N,listeners:X,node:R,overIndex:g,over:V,setNodeRef:re,setActivatorNodeRef:W,setDroppableNodeRef:E,setDraggableNodeRef:Y,transform:z??we,transition:te()};function te(){if(z||B&&k.current.newIndex===L)return Km;if(!(he&&!Qa(O)||!u)&&(Z||j))return tt.Transition.toString({...u,property:Xi})}}function $m(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Hr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var Ym=[ae.Down,ae.Right,ae.Up,ae.Left],Wr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(Ym.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ae.Down:o.top<f.top&&i.push(d);break;case ae.Up:o.top>f.top&&i.push(d);break;case ae.Left:o.left>f.left&&i.push(d);break;case ae.Right:o.left<f.left&&i.push(d);break}});let u=Tr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=Uo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,p=f?.node.current;if(p&&h&&d&&f){let g=qo(p).some((I,y)=>s[y]!==I),v=ji(d,f),C=Zm(d,f),x=g||!v?{x:0,y:0}:{x:C?o.width-h.width:0,y:C?o.height-h.height:0},L={x:h.left,y:h.top};return x.x&&x.y?L:pa(L,x)}}}};function ji(e,t){return!Hr(e)||!Hr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Zm(e,t){return!Hr(e)||!Hr(t)||!ji(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var zr=require("react");var $i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gr=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var Wo=require("react");var Yi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Zi=(0,Wo.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:r="",children:n,iconNode:l,...s},i)=>(0,Wo.createElement)("svg",{ref:i,...Yi,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:Gr("lucide",r),...s},[...l.map(([u,c])=>(0,Wo.createElement)(u,c)),...Array.isArray(n)?n:[n]]));var ce=(e,t)=>{let a=(0,zr.forwardRef)(({className:o,...r},n)=>(0,zr.createElement)(Zi,{ref:n,iconNode:t,className:Gr(`lucide-${$i(e)}`,o),...r}));return a.displayName=`${e}`,a};var Jm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ta=ce("Check",Jm);var Qm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],to=ce("ChevronDown",Qm);var eg=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Go=ce("ChevronUp",eg);var tg=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],zo=ce("Filter",tg);var ag=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Ko=ce("GripVertical",ag);var og=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Xo=ce("List",og);var rg=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],jo=ce("MessageSquare",rg);var ng=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nt=ce("Plus",ng);var lg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$o=ce("RefreshCw",lg);var sg=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Yo=ce("Settings2",sg);var ig=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Zo=ce("Tag",ig);var ug=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],_t=ce("Trash2",ug);var dg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jo=ce("X",dg);var Cr=require("react");var iu=H(require("react"),1);var Be=H(require("react"),1);var Ji=H(require("react"),1),cg=Object.defineProperty,nl=(e,t)=>cg(e,"name",{value:t,configurable:!0});function rl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}nl(rl,"setRef");function Qi(...e){return t=>{let a=!1,o=e.map(r=>{let n=rl(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():rl(e[r],null)}}}}nl(Qi,"composeRefs");function J(...e){return Ji.useCallback(Qi(...e),e)}nl(J,"useComposedRefs");var fg=Object.defineProperty,xt=(e,t)=>fg(e,"name",{value:t,configurable:!0});function We(e){let t=Be.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];ll(r)&&typeof Kr=="function"&&(r=Kr(r._payload)),Be.Children.forEach(r,f=>{if(ru(f)){s=!0;let h=f,p="child"in h.props?h.props.child:h.props.children;ll(p)&&typeof Kr=="function"&&(p=Kr(p._payload)),l=mg(h,p),i.push(l?.props?.children)}else i.push(f)}),l?l=Be.cloneElement(l,void 0,i):!s&&Be.Children.count(r)===1&&Be.isValidElement(r)&&(l=r);let u=l?ou(l):void 0,c=J(o,u);if(!l){if(r||r===0)throw new Error(s?xg(e):hg(e));return r}let d=au(n,l.props??{});return l.type!==Be.Fragment&&(d.ref=o?c:u),Be.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}xt(We,"createSlot");var eu=We("Slot"),tu=Symbol.for("radix.slottable");function pg(e){let t=xt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=tu,t}xt(pg,"createSlottable");var mg=xt((e,t)=>{if("child"in e.props){let a=e.props.child;return Be.isValidElement(a)?Be.cloneElement(a,void 0,e.props.children(a.props.children)):null}return Be.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function au(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}xt(au,"mergeProps");function ou(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}xt(ou,"getElementRef");function ru(e){return Be.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===tu}xt(ru,"isSlottable");var gg=Symbol.for("react.lazy");function ll(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===gg&&"_payload"in e&&nu(e._payload)}xt(ll,"isLazyComponent");function nu(e){return typeof e=="object"&&e!==null&&"then"in e}xt(nu,"isPromiseLike");var hg=xt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),xg=xt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Kr=Be[" use ".trim().toString()];function lu(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=lu(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function su(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=lu(e))&&(o&&(o+=" "),o+=t);return o}function Q(...e){return su(e)}var uu=require("react/jsx-runtime");function vg({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return Q("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Me=iu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,uu.jsx)(o?eu:"button",{className:vg({variant:t,size:a,className:e}),ref:n,...r}));Me.displayName="Button";var nr=H(require("react"),1);var me=H(require("react"),1);var Cg=Object.defineProperty,ao=(e,t)=>Cg(e,"name",{value:t,configurable:!0}),du=!!(typeof window<"u"&&window.document&&window.document.createElement);function U(e,t,{checkForDefaultPrevented:a=!0}={}){return ao(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}ao(U,"composeEventHandlers");function Lg(e){if(!du)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}ao(Lg,"getOwnerWindow");function sl(e){if(!du)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}ao(sl,"getOwnerDocument");function cu(e,t=!1){let{activeElement:a}=sl(e);if(!a?.nodeName)return null;if(fu(a)&&a.contentDocument)return cu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=sl(a).getElementById(o);if(r)return r}}return a}ao(cu,"getActiveElement");function fu(e){return e.tagName==="IFRAME"}ao(fu,"isFrame");var dt=H(require("react"),1),il=require("react/jsx-runtime"),bg=Object.defineProperty,ut=(e,t)=>bg(e,"name",{value:t,configurable:!0});function Ig(e,t){let a=dt.createContext(t);a.displayName=e+"Context";let o=ut(n=>{let{children:l,...s}=n,i=dt.useMemo(()=>s,Object.values(s));return(0,il.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=dt.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return ut(r,"useContext"),[o,r]}ut(Ig,"createContext");function Ne(e,t=[]){let a=[];function o(n,l){let s=dt.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=ut(d=>{let{scope:f,children:h,...p}=d,m=f?.[e]?.[i]||s,g=dt.useMemo(()=>p,Object.values(p));return(0,il.jsx)(m.Provider,{value:g,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:p=!1}=h,m=f?.[e]?.[i]||s,g=dt.useContext(m);if(g)return g;if(l!==void 0)return l;if(!p)throw new Error(`\`${d}\` must be used within \`${n}\``)}return ut(c,"useContext"),[u,c]}ut(o,"createContext");let r=ut(()=>{let n=a.map(l=>dt.createContext(l));return ut(function(s){let i=s?.[e]||n;return dt.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,pu(r,...t)]}ut(Ne,"createContextScope");function pu(...e){let t=e[0];if(e.length===1)return t;let a=ut(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return ut(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return dt.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}ut(pu,"composeContextScopes");var ul=H(require("react"),1);var mu=H(require("react"),1),le=globalThis?.document?mu.useLayoutEffect:()=>{};var wg=Object.defineProperty,Sg=(e,t)=>wg(e,"name",{value:t,configurable:!0}),yg=ul[" useId ".trim().toString()]||(()=>{}),Rg=0;function ot(e){let[t,a]=ul.useState(yg());return le(()=>{e||a(o=>o??String(Rg++))},[e]),e||(t?`radix-${t}`:"")}Sg(ot,"useId");var ct=H(require("react"),1);var Xr=!1;var vt=H(require("react"),1);var oo=H(require("react"),1),Pg=Object.defineProperty,kg=(e,t)=>Pg(e,"name",{value:t,configurable:!0}),gu=oo[" useEffectEvent ".trim().toString()],hu=oo[" useInsertionEffect ".trim().toString()];function dl(e){if(typeof gu=="function")return gu(e);let t=oo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof hu=="function"?hu(()=>{t.current=e}):le(()=>{t.current=e}),oo.useMemo(()=>((...a)=>t.current?.(...a)),[])}kg(dl,"useEffectEvent");var Dg=Object.defineProperty,Qo=(e,t)=>Dg(e,"name",{value:t,configurable:!0}),Mg=ct[" useInsertionEffect ".trim().toString()]||le;function kt({prop:e,defaultProp:t,onChange:a=Qo(()=>{},"onChange"),caller:o}){let[r,n,l]=vu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Xr){let c=ct.useRef(e!==void 0);ct.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=ct.useCallback(c=>{if(s){let d=Cu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}Qo(kt,"useControllableState");function vu({defaultProp:e,onChange:t}){let[a,o]=ct.useState(e),r=ct.useRef(a),n=ct.useRef(t);return Mg(()=>{n.current=t},[t]),ct.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}Qo(vu,"useUncontrolledState");function Cu(e){return typeof e=="function"}Qo(Cu,"isFunction");var xu=Symbol("RADIX:SYNC_STATE");function Ag(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=dl(l);if(Xr){let g=vt.useRef(r!==void 0);vt.useEffect(()=>{let v=g.current;v!==i&&console.warn(`${s} is changing from ${v?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),g.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=vt.useReducer((g,v)=>{if(v.type===xu)return{...g,state:v.state};let C=e(g,v);return i&&!Object.is(C.state,g.state)&&u(C.state),C},...c),h=d.state,p=vt.useRef(h);vt.useEffect(()=>{p.current!==h&&(p.current=h,i||u(h))},[h,p,i]);let m=vt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return vt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:xu,state:r})},[r,d.state,i]),[m,f]}Qo(Ag,"useControllableStateReducer");var ie=H(require("react"),1);var Lu=H(require("react"),1),bu=H(require("react-dom"),1);var Iu=require("react/jsx-runtime"),Tg=Object.defineProperty,Eg=(e,t)=>Tg(e,"name",{value:t,configurable:!0}),Og=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ee=Og.reduce((e,t)=>{let a=We(`Primitive.${t}`),o=Lu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Iu.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function er(e,t){e&&bu.flushSync(()=>e.dispatchEvent(t))}Eg(er,"dispatchDiscreteCustomEvent");var ro=H(require("react"),1),Fg=Object.defineProperty,Bg=(e,t)=>Fg(e,"name",{value:t,configurable:!0});function Ae(e){let t=ro.useRef(e);return ro.useEffect(()=>{t.current=e}),ro.useMemo(()=>((...a)=>t.current?.(...a)),[])}Bg(Ae,"useCallbackRef");var Su=require("react/jsx-runtime"),Ng=Object.defineProperty,Te=(e,t)=>Ng(e,"name",{value:t,configurable:!0}),cl="dismissableLayer.update",_g="dismissableLayer.pointerDownOutside",Hg="dismissableLayer.focusOutside",wu,yu=ie.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),no=ie.forwardRef(Te(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ie.useContext(yu),[f,h]=ie.useState(null),p=f?.ownerDocument??globalThis?.document,[,m]=ie.useState({}),g=J(a,h),v=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),x=C?v.indexOf(C):-1,L=f?v.indexOf(f):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,I=L>=x,y=ie.useRef(!1),R=Ru(O=>{l?.(O),i?.(O),O.defaultPrevented||u?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ie.useCallback(O=>{if(!(O instanceof Node))return!1;let F=[...d.branches].some(_=>_.contains(O));return I&&!F},[d.branches,I])}),P=Pu(O=>{if(r&&y.current)return;let F=O.target;[...d.branches].some(Y=>Y.contains(F))||(s?.(O),i?.(O),O.defaultPrevented||u?.())},p),E=f?L===v.length-1:!1,T=Ae(O=>{O.key==="Escape"&&(n?.(O),!O.defaultPrevented&&u&&(O.preventDefault(),u()))});return ie.useEffect(()=>{if(E)return p.addEventListener("keydown",T,{capture:!0}),()=>p.removeEventListener("keydown",T,{capture:!0})},[p,E,T]),ie.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(wu=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),fl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=wu))}},[f,p,o,d]),ie.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),fl())},[f,d]),ie.useEffect(()=>{let O=Te(()=>m({}),"handleUpdate");return document.addEventListener(cl,O),()=>document.removeEventListener(cl,O)},[]),(0,Su.jsx)(ee.div,{...c,ref:g,style:{pointerEvents:w?I?"auto":"none":void 0,...t.style},onFocusCapture:U(t.onFocusCapture,P.onFocusCapture),onBlurCapture:U(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:U(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function pl(){let e=ie.useContext(yu),[t,a]=ie.useState(null);return ie.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Te(pl,"useDismissableLayerSurface");var Ug=Te(()=>!0,"IS_TRUE");function Ru(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=Ug}=t,s=Ae(e),i=ie.useRef(!1),u=ie.useRef(!1),c=ie.useRef(new Map),d=ie.useRef(()=>{});return ie.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Te(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Te(h,"isOutsideInteractionIntercepted");function p(x){if(!u.current)return;let L=x.target;L instanceof Node&&[...n].some(I=>I.contains(L))||c.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Te(p,"handleInteractionCapture");function m(x){u.current&&c.current.set(x.type,!1)}Te(m,"handleInteractionBubble");let g=Te(x=>{if(x.target&&!i.current){let w=function(){a.removeEventListener("click",d.current);let y=h();f(),y||ml(_g,s,I,{discrete:!0})};var L=w;if(Te(w,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let I={originalEvent:x};u.current=!0,r.current=o&&x.button===0,c.current.clear(),!o||x.button!==0?w():(a.removeEventListener("click",d.current),d.current=w,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),v=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let x of v)a.addEventListener(x,p,!0),a.addEventListener(x,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",g)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",g),a.removeEventListener("click",d.current);for(let x of v)a.removeEventListener(x,p,!0),a.removeEventListener(x,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Te(()=>i.current=!0,"onPointerDownCapture")}}Te(Ru,"usePointerDownOutside");function Pu(e,t=globalThis?.document){let a=Ae(e),o=ie.useRef(!1);return ie.useEffect(()=>{let r=Te(n=>{n.target&&!o.current&&ml(Hg,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Te(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Te(()=>o.current=!1,"onBlurCapture")}}Te(Pu,"useFocusOutside");function fl(){let e=new CustomEvent(cl);document.dispatchEvent(e)}Te(fl,"dispatchUpdate");function ml(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?er(r,n):r.dispatchEvent(n)}Te(ml,"handleAndDispatchCustomEvent");var ft=H(require("react"),1);var Mu=require("react/jsx-runtime"),qg=Object.defineProperty,Xe=(e,t)=>qg(e,"name",{value:t,configurable:!0}),gl="focusScope.autoFocusOnMount",hl="focusScope.autoFocusOnUnmount",ku={bubbles:!1,cancelable:!0},lo=ft.forwardRef(Xe(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=ft.useState(null),c=Ae(n),d=Ae(l),f=ft.useRef(null),h=J(a,u),p=ft.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ft.useEffect(()=>{if(r){let x=function(y){if(p.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Ht(f.current,{select:!0})},L=function(y){if(p.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Ht(f.current,{select:!0}))},w=function(y){if(document.activeElement===document.body)for(let P of y)P.removedNodes.length>0&&Ht(i)};var g=x,v=L,C=w;Xe(x,"handleFocusIn"),Xe(L,"handleFocusOut"),Xe(w,"handleMutations"),document.addEventListener("focusin",x),document.addEventListener("focusout",L);let I=new MutationObserver(w);return i&&I.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",L),I.disconnect()}}},[r,i,p.paused]),ft.useEffect(()=>{if(i){Du.add(p);let g=document.activeElement;if(!i.contains(g)){let C=new CustomEvent(gl,ku);i.addEventListener(gl,c),i.dispatchEvent(C),C.defaultPrevented||(Au(Bu(Cl(i)),{select:!0}),document.activeElement===g&&Ht(i))}return()=>{i.removeEventListener(gl,c),setTimeout(()=>{let C=new CustomEvent(hl,ku);i.addEventListener(hl,d),i.dispatchEvent(C),C.defaultPrevented||Ht(g??document.body,{select:!0}),i.removeEventListener(hl,d),Du.remove(p)},0)}}},[i,c,d,p]);let m=ft.useCallback(g=>{if(!o&&!r||p.paused)return;let v=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,C=document.activeElement;if(v&&C){let x=g.currentTarget,[L,w]=Tu(x);L&&w?!g.shiftKey&&C===w?(g.preventDefault(),o&&Ht(L,{select:!0})):g.shiftKey&&C===L&&(g.preventDefault(),o&&Ht(w,{select:!0})):C===x&&g.preventDefault()}},[o,r,p.paused]);return(0,Mu.jsx)(ee.div,{tabIndex:-1,...s,ref:h,onKeyDown:m})},"FocusScope"));function Au(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Ht(o,{select:t}),document.activeElement!==a)return}Xe(Au,"focusFirst");function Tu(e){let t=Cl(e),a=xl(t,e),o=xl(t.reverse(),e);return[a,o]}Xe(Tu,"getTabbableEdges");function Cl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Xe(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Xe(Cl,"getTabbableCandidates");function xl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):Eu(o,{upTo:t})))return o}Xe(xl,"findVisible");function Eu(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Xe(Eu,"isHidden");function Ou(e){return e instanceof HTMLInputElement&&"select"in e}Xe(Ou,"isSelectableInput");function Ht(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&Ou(e)&&t&&e.select()}}Xe(Ht,"focus");var Du=Fu();function Fu(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=vl(e,t),e.unshift(t)},remove(t){e=vl(e,t),e[0]?.resume()}}}Xe(Fu,"createFocusScopesStack");function vl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Xe(vl,"arrayRemove");function Bu(e){return e.filter(t=>t.tagName!=="A")}Xe(Bu,"removeLinks");var jr=H(require("react"),1),Nu=H(require("react-dom"),1);var _u=require("react/jsx-runtime"),Vg=Object.defineProperty,Wg=(e,t)=>Vg(e,"name",{value:t,configurable:!0}),so=jr.forwardRef(Wg(function(t,a){let{container:o,...r}=t,[n,l]=jr.useState(!1);le(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?Nu.createPortal((0,_u.jsx)(ee.div,{...r,ref:a}),s):null},"Portal"));var _e=H(require("react"),1);var Hu=H(require("react"),1),Gg=Object.defineProperty,Ut=(e,t)=>Gg(e,"name",{value:t,configurable:!0});function Uu(e,t){return Hu.useReducer((a,o)=>t[a][o]??a,e)}Ut(Uu,"useStateMachine");var qt=Ut(e=>{let{present:t,children:a}=e,o=qu(t),r=typeof a=="function"?a({present:o.isPresent}):_e.Children.only(a),n=Vu(o.ref,Wu(r));return typeof a=="function"||o.isPresent?_e.cloneElement(r,{ref:n}):null},"Presence");function qu(e){let[t,a]=_e.useState(),o=_e.useRef(null),r=_e.useRef(e),n=_e.useRef("none"),l=_e.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=Uu(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _e.useEffect(()=>{i==="mounted"?(n.current=l.current??io(o.current),l.current=void 0):n.current="none"},[i]),le(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,p=io(c);e?(l.current=p,u("MOUNT")):p==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),le(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Ut(p=>{let g=io(o.current).includes(CSS.escape(p.animationName));if(p.target===t&&g&&(u("ANIMATION_END"),!r.current)){let v=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},"handleAnimationEnd"),h=Ut(p=>{p.target===t&&(n.current=io(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:_e.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=io(d)}else o.current=null;a(c)},[])}}Ut(qu,"usePresence");function Ll(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Ut(Ll,"setRef");function Vu(...e){let t=_e.useRef(e);return t.current=e,_e.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=Ll(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():Ll(o[l],null)}}},[])}Ut(Vu,"useStableComposedRefs");function io(e){return e?.animationName||"none"}Ut(io,"getAnimationName");function Wu(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Ut(Wu,"getElementRef");var Gu=H(require("react"),1),zg=Object.defineProperty,Il=(e,t)=>zg(e,"name",{value:t,configurable:!0}),$r=0,uo=null;function Kg(e){return aa(),e.children}Il(Kg,"FocusGuards");function aa(){Gu.useEffect(()=>{uo||(uo={start:bl(),end:bl()});let{start:e,end:t}=uo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),$r++,()=>{$r===1&&(uo?.start.remove(),uo?.end.remove(),uo=null),$r=Math.max(0,$r-1)}},[])}Il(aa,"useFocusGuards");function bl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Il(bl,"createFocusGuard");var Ye=function(){return Ye=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Ye.apply(this,arguments)};function Yr(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function zu(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var tn=H(require("react"));var Ge=H(require("react"));var Ca="right-scroll-bar-position",La="width-before-scroll-bar",wl="with-scroll-bars-hidden",Sl="--removed-body-scroll-bar-size";function Zr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Ku=require("react");function Xu(e,t){var a=(0,Ku.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var Jr=H(require("react"));var Xg=typeof window<"u"?Jr.useLayoutEffect:Jr.useEffect,ju=new WeakMap;function yl(e,t){var a=Xu(t||null,function(o){return e.forEach(function(r){return Zr(r,o)})});return Xg(function(){var o=ju.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||Zr(s,null)}),n.forEach(function(s){r.has(s)||Zr(s,l)})}ju.set(a,e)},[e]),a}function jg(e){return e}function $g(e,t){t===void 0&&(t=jg);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Rl(e){e===void 0&&(e={});var t=$g(null);return t.options=Ye({async:!0,ssr:!1},e),t}var $u=H(require("react")),Yu=function(e){var t=e.sideCar,a=Yr(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return $u.createElement(o,Ye({},a))};Yu.isSideCarExport=!0;function Pl(e,t){return e.useMedium(t),Yu}var Qr=Rl();var kl=function(){},tr=Ge.forwardRef(function(e,t){var a=Ge.useRef(null),o=Ge.useState({onScrollCapture:kl,onWheelCapture:kl,onTouchMoveCapture:kl}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,p=e.noIsolation,m=e.inert,g=e.allowPinchZoom,v=e.as,C=v===void 0?"div":v,x=e.gapMode,L=Yr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=f,I=yl([a,t]),y=Ye(Ye({},L),r);return Ge.createElement(Ge.Fragment,null,c&&Ge.createElement(w,{sideCar:Qr,removeScrollBar:u,shards:d,noRelative:h,noIsolation:p,inert:m,setCallbacks:n,allowPinchZoom:!!g,lockRef:a,gapMode:x}),l?Ge.cloneElement(Ge.Children.only(s),Ye(Ye({},y),{ref:I})):Ge.createElement(C,Ye({},y,{className:i,ref:I}),s))});tr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};tr.classNames={fullWidth:La,zeroRight:Ca};var pe=H(require("react"));var fo=H(require("react"));var Qu=H(require("react"));var Zu;var Ju=function(){if(Zu)return Zu;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Yg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ju();return t&&e.setAttribute("nonce",t),e}function Zg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Jg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Dl=function(){var e=0,t=null;return{add:function(a){e==0&&(t=Yg())&&(Zg(t,a),Jg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Ml=function(){var e=Dl();return function(t,a){Qu.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var ar=function(){var e=Ml(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var Qg={left:0,top:0,right:0,gap:0},Al=function(e){return parseInt(e||"",10)||0},eh=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Al(a),Al(o),Al(r)]},Tl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Qg;var t=eh(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var th=ar(),co="data-scroll-locked",ah=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(wl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(co,`] {
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
  
  .`).concat(Ca,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(La,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ca," .").concat(Ca,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(La," .").concat(La,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(co,`] {
    `).concat(Sl,": ").concat(s,`px;
  }
`)},ed=function(){var e=parseInt(document.body.getAttribute(co)||"0",10);return isFinite(e)?e:0},oh=function(){fo.useEffect(function(){return document.body.setAttribute(co,(ed()+1).toString()),function(){var e=ed()-1;e<=0?document.body.removeAttribute(co):document.body.setAttribute(co,e.toString())}},[])},El=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;oh();var n=fo.useMemo(function(){return Tl(r)},[r]);return fo.createElement(th,{styles:ah(n,!t,r,a?"":"!important")})};var Ol=!1;if(typeof window<"u")try{or=Object.defineProperty({},"passive",{get:function(){return Ol=!0,!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Ol=!1}var or,ba=Ol?{passive:!1}:!1;var rh=function(e){return e.tagName==="TEXTAREA"},td=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!rh(e)&&a[t]==="visible")},nh=function(e){return td(e,"overflowY")},lh=function(e){return td(e,"overflowX")},Fl=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=ad(e,o);if(r){var n=od(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},sh=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},ih=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},ad=function(e,t){return e==="v"?nh(t):lh(t)},od=function(e,t){return e==="v"?sh(t):ih(t)},uh=function(e,t){return e==="h"&&t==="rtl"?-1:1},rd=function(e,t,a,o,r){var n=uh(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var h=od(e,s),p=h[0],m=h[1],g=h[2],v=m-g-n*p;(p||v)&&ad(e,s)&&(d+=v,f+=p);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var en=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nd=function(e){return[e.deltaX,e.deltaY]},ld=function(e){return e&&"current"in e?e.current:e},dh=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ch=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},fh=0,po=[];function sd(e){var t=pe.useRef([]),a=pe.useRef([0,0]),o=pe.useRef(),r=pe.useState(fh++)[0],n=pe.useState(ar)[0],l=pe.useRef(e);pe.useEffect(function(){l.current=e},[e]),pe.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=zu([e.lockRef.current],(e.shards||[]).map(ld),!0).filter(Boolean);return m.forEach(function(g){return g.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=pe.useCallback(function(m,g){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var v=en(m),C=a.current,x="deltaX"in m?m.deltaX:C[0]-v[0],L="deltaY"in m?m.deltaY:C[1]-v[1],w,I=m.target,y=Math.abs(x)>Math.abs(L)?"h":"v";if("touches"in m&&y==="h"&&I.type==="range")return!1;var R=window.getSelection(),P=R&&R.anchorNode,E=P?P===I||P.contains(I):!1;if(E)return!1;var T=Fl(y,I);if(!T)return!0;if(T?w=y:(w=y==="v"?"h":"v",T=Fl(y,I)),!T)return!1;if(!o.current&&"changedTouches"in m&&(x||L)&&(o.current=w),!w)return!0;var O=o.current||w;return rd(O,g,m,O==="h"?x:L,!0)},[]),i=pe.useCallback(function(m){var g=m;if(!(!po.length||po[po.length-1]!==n)){var v="deltaY"in g?nd(g):en(g),C=t.current.filter(function(w){return w.name===g.type&&(w.target===g.target||g.target===w.shadowParent)&&dh(w.delta,v)})[0];if(C&&C.should){g.cancelable&&g.preventDefault();return}if(!C){var x=(l.current.shards||[]).map(ld).filter(Boolean).filter(function(w){return w.contains(g.target)}),L=x.length>0?s(g,x[0]):!l.current.noIsolation;L&&g.cancelable&&g.preventDefault()}}},[]),u=pe.useCallback(function(m,g,v,C){var x={name:m,delta:g,target:v,should:C,shadowParent:ph(v)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(L){return L!==x})},1)},[]),c=pe.useCallback(function(m){a.current=en(m),o.current=void 0},[]),d=pe.useCallback(function(m){u(m.type,nd(m),m.target,s(m,e.lockRef.current))},[]),f=pe.useCallback(function(m){u(m.type,en(m),m.target,s(m,e.lockRef.current))},[]);pe.useEffect(function(){return po.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,ba),document.addEventListener("touchmove",i,ba),document.addEventListener("touchstart",c,ba),function(){po=po.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,ba),document.removeEventListener("touchmove",i,ba),document.removeEventListener("touchstart",c,ba)}},[]);var h=e.removeScrollBar,p=e.inert;return pe.createElement(pe.Fragment,null,p?pe.createElement(n,{styles:ch(r)}):null,h?pe.createElement(El,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function ph(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var id=Pl(Qr,sd);var ud=tn.forwardRef(function(e,t){return tn.createElement(tr,Ye({},e,{ref:t,sideCar:id}))});ud.classNames=tr.classNames;var Ia=ud;var mh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},mo=new WeakMap,an=new WeakMap,on={},Bl=0,dd=function(e){return e&&(e.host||dd(e.parentNode))},gh=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=dd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},hh=function(e,t,a,o){var r=gh(t,Array.isArray(e)?e:[e]);on[a]||(on[a]=new WeakMap);var n=on[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var h=f.getAttribute(o),p=h!==null&&h!=="false",m=(mo.get(f)||0)+1,g=(n.get(f)||0)+1;mo.set(f,m),n.set(f,g),l.push(f),m===1&&p&&an.set(f,!0),g===1&&f.setAttribute(a,"true"),p||f.setAttribute(o,"true")}catch(v){console.error("aria-hidden: cannot operate on ",f,v)}})};return c(t),s.clear(),Bl++,function(){l.forEach(function(d){var f=mo.get(d)-1,h=n.get(d)-1;mo.set(d,f),n.set(d,h),f||(an.has(d)||d.removeAttribute(o),an.delete(d)),h||d.removeAttribute(a)}),Bl--,Bl||(mo=new WeakMap,mo=new WeakMap,an=new WeakMap,on={})}},go=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||mh(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),hh(o,r,a,"aria-hidden")):function(){return null}};var xe=require("react/jsx-runtime"),xh=Object.defineProperty,pt=(e,t)=>xh(e,"name",{value:t,configurable:!0}),_l="Dialog",[cd,PI]=Ne(_l),[vh,Dt]=cd(_l),fd=pt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=me.useRef(null),i=me.useRef(null),[u,c]=kt({prop:o,defaultProp:r??!1,onChange:n,caller:_l}),[d,f]=me.useState(0),[h,p]=me.useState(0);return(0,xe.jsx)(vh,{scope:t,triggerRef:s,contentRef:i,contentId:ot(),titleId:ot(),descriptionId:ot(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:p,open:u,onOpenChange:c,onOpenToggle:me.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var pd="DialogPortal",[Ch,md]=cd(pd,{forceMount:void 0}),gd=pt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Dt(pd,t);return(0,xe.jsx)(Ch,{scope:t,forceMount:a,children:me.Children.map(o,l=>(0,xe.jsx)(qt,{present:a||n.open,children:(0,xe.jsx)(so,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Nl="DialogOverlay",Hl=me.forwardRef(pt(function(t,a){let o=md(Nl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Dt(Nl,t.__scopeDialog);return l.modal?(0,xe.jsx)(qt,{present:r||l.open,children:(0,xe.jsx)(bh,{...n,ref:a})}):null},"DialogOverlay")),Lh=We("DialogOverlay.RemoveScroll"),bh=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Nl,o),l=pl(),s=J(a,l);return(0,xe.jsx)(Ia,{as:Lh,allowPinchZoom:!0,shards:[n.contentRef],children:(0,xe.jsx)(ee.div,{"data-state":Wl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),rr="DialogContent",Ul=me.forwardRef(pt(function(t,a){let o=md(rr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Dt(rr,t.__scopeDialog);return(0,xe.jsx)(qt,{present:r||l.open,children:l.modal?(0,xe.jsx)(Ih,{...n,ref:a}):(0,xe.jsx)(wh,{...n,ref:a})})},"DialogContent")),Ih=me.forwardRef(pt(function(t,a){let o=Dt(rr,t.__scopeDialog),r=me.useRef(null),n=J(a,o.contentRef,r);return me.useEffect(()=>{let l=r.current;if(l)return go(l)},[]),(0,xe.jsx)(hd,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:U(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:U(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:U(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),wh=me.forwardRef(pt(function(t,a){let o=Dt(rr,t.__scopeDialog),r=me.useRef(!1),n=me.useRef(!1);return(0,xe.jsx)(hd,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),hd=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Dt(rr,o);return aa(),(0,xe.jsx)(xe.Fragment,{children:(0,xe.jsx)(lo,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,xe.jsx)(no,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":Wl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),Sh="DialogTitle",ql=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Sh,o),{setTitleCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,xe.jsx)(ee.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),yh="DialogDescription",Vl=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(yh,o),{setDescriptionCount:l}=n;return le(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,xe.jsx)(ee.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),Rh="DialogClose",xd=me.forwardRef(pt(function(t,a){let{__scopeDialog:o,...r}=t,n=Dt(Rh,o);return(0,xe.jsx)(ee.button,{type:"button",...r,ref:a,onClick:U(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function Wl(e){return e?"open":"closed"}pt(Wl,"getState");var Cd=require("react"),Gl="dsh-kanban",Ld={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},kh={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},wa=null,zl=null;function bd(e){let t=e.get("locale");if(t!==void 0){wa=t;try{t.register(Gl,"zh",Ld),t.register(Gl,"en",kh)}catch{}zl=t.bind(Gl)}}function ho(e){return zl?zl(e):Ld[e]??e}var Dh=e=>wa&&typeof wa.subscribe=="function"?wa.subscribe(e):()=>{},vd=()=>wa&&typeof wa.getSnapshot=="function"?wa.getSnapshot():null;function je(){return(0,Cd.useSyncExternalStore)(Dh,vd,vd),ho}var rt=require("react/jsx-runtime"),xo=fd;var Mh=gd;var Id=nr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(Hl,{ref:a,className:Q("kanban-portal kanban-dialog-overlay",e),...t}));Id.displayName=Hl.displayName;var Sa=nr.forwardRef(({className:e,children:t,...a},o)=>{let r=je();return(0,rt.jsxs)(Mh,{children:[(0,rt.jsx)(Id,{}),(0,rt.jsxs)(Ul,{ref:o,className:Q("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,rt.jsxs)(xd,{className:"kanban-dialog-close",children:[(0,rt.jsx)(Jo,{className:"kanban-dialog-close-icon"}),(0,rt.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Sa.displayName=Ul.displayName;var ya=({className:e,...t})=>(0,rt.jsx)("div",{className:Q("kanban-dialog-header",e),...t});ya.displayName="DialogHeader";var lr=({className:e,...t})=>(0,rt.jsx)("div",{className:Q("kanban-dialog-footer",e),...t});lr.displayName="DialogFooter";var Ra=nr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(ql,{ref:a,className:Q("kanban-dialog-title",e),...t}));Ra.displayName=ql.displayName;var sr=nr.forwardRef(({className:e,...t},a)=>(0,rt.jsx)(Vl,{ref:a,className:Q("kanban-dialog-description",e),...t}));sr.displayName=Vl.displayName;var gr=H(require("react"),1);var St=H(require("react"),1);var $=H(require("react"),1);var Ct=H(require("react"),1);var rn=require("react/jsx-runtime"),Ze=H(require("react"),1);var Pa=require("react/jsx-runtime");var Ah=Object.defineProperty,Ee=(e,t)=>Ah(e,"name",{value:t,configurable:!0});function ka(e){let t=e+"CollectionProvider",[a,o]=Ne(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Ee(m=>{let{scope:g,children:v}=m,C=Ct.useRef(null),x=Ct.useRef(new Map).current;return(0,rn.jsx)(r,{scope:g,itemMap:x,collectionRef:C,children:v})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=We(s),u=Ct.forwardRef((m,g)=>{let{scope:v,children:C}=m,x=n(s,v),L=J(g,x.collectionRef);return(0,rn.jsx)(i,{ref:L,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=We(c),h=Ct.forwardRef((m,g)=>{let{scope:v,children:C,...x}=m,L=Ct.useRef(null),w=J(g,L),I=n(c,v);return Ct.useEffect(()=>(I.itemMap.set(L,{ref:L,...x}),()=>{I.itemMap.delete(L)})),(0,rn.jsx)(f,{[d]:"",ref:w,children:C})});h.displayName=c;function p(m){let g=n(e+"CollectionConsumer",m);return Ct.useCallback(()=>{let C=g.collectionRef.current;if(!C)return[];let x=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(g.itemMap.values()).sort((I,y)=>x.indexOf(I.ref.current)-x.indexOf(y.ref.current))},[g.collectionRef,g.itemMap])}return Ee(p,"useCollection"),[{Provider:l,Slot:u,ItemSlot:h},p,o]}Ee(ka,"createCollection");var wd=new WeakMap,Se,nt,Kl=(nt=class extends Map{constructor(a){super(a);ti(this,Se);qn(this,Se,[...super.keys()]),wd.set(this,!0)}set(a,o){return wd.get(this)&&(this.has(a)?qe(this,Se)[qe(this,Se).indexOf(a)]=a:qe(this,Se).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=qe(this,Se).length,s=jl(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...qe(this,Se)],f,h=!1;for(let p=i;p<c;p++)if(i===p){let m=d[p];d[p]===o&&(m=d[p+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!h&&d[p-1]===o&&(h=!0);let m=d[h?p:p-1],g=f;f=this.get(m),this.delete(m),this.set(m,g)}return this}with(a,o,r){let n=new nt(this);return n.insert(a,o,r),n}before(a){let o=qe(this,Se).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=qe(this,Se).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=qe(this,Se).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=qe(this,Se).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return qn(this,Se,[]),super.clear()}delete(a){let o=super.delete(a);return o&&qe(this,Se).splice(qe(this,Se).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=nn(qe(this,Se),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=nn(qe(this,Se),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return qe(this,Se).indexOf(a)}keyAt(a){return nn(qe(this,Se),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new nt(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new nt(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new nt(o)}toReversed(){let a=new nt;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new nt(o)}slice(a,o){let r=new nt,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Se=new WeakMap,Ee(nt,"OrderedDict"),nt);function nn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=Sd(e,t);return a===-1?void 0:e[a]}Ee(nn,"at");function Sd(e,t){let a=e.length,o=jl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Ee(Sd,"toSafeIndex");function jl(e){return e!==e||e===0?0:Math.trunc(e)}Ee(jl,"toSafeInteger");function Th(e){let t=e+"CollectionProvider",[a,o]=Ne(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Kl,setItemMap:Ee(()=>{},"setItemMap")}),l=Ee(({state:x,...L})=>x?(0,Pa.jsx)(i,{...L,state:x}):(0,Pa.jsx)(s,{...L}),"CollectionProvider");l.displayName=t;let s=Ee(x=>{let L=g();return(0,Pa.jsx)(i,{...x,state:L})},"CollectionInit");s.displayName=t+"Init";let i=Ee(x=>{let{scope:L,children:w,state:I}=x,y=Ze.useRef(null),[R,P]=Ze.useState(null),E=J(y,P),[T,O]=I;return Ze.useEffect(()=>{if(!R)return;let F=Pd(()=>{});return F.observe(R,{childList:!0,subtree:!0}),()=>{F.disconnect()}},[R]),(0,Pa.jsx)(r,{scope:L,itemMap:T,setItemMap:O,collectionRef:E,collectionRefObject:y,collectionElement:R,children:w})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=We(u),d=Ze.forwardRef((x,L)=>{let{scope:w,children:I}=x,y=n(u,w),R=J(L,y.collectionRef);return(0,Pa.jsx)(c,{ref:R,children:I})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",p=We(f),m=Ze.forwardRef((x,L)=>{let{scope:w,children:I,...y}=x,R=Ze.useRef(null),[P,E]=Ze.useState(null),T=J(L,R,E),O=n(f,w),{setItemMap:F}=O,_=Ze.useRef(y);yd(_.current,y)||(_.current=y);let Y=_.current;return Ze.useEffect(()=>{let X=Y;return F(N=>P?N.has(P)?N.set(P,{...X,element:P}).toSorted(Xl):(N.set(P,{...X,element:P}),N.toSorted(Xl)):N),()=>{F(N=>!P||!N.has(P)?N:(N.delete(P),new Kl(N)))}},[P,Y,F]),(0,Pa.jsx)(p,{[h]:"",ref:T,children:I})});m.displayName=f;function g(){return Ze.useState(new Kl)}Ee(g,"useInitCollection");function v(x){let{itemMap:L}=n(e+"CollectionConsumer",x);return L}return Ee(v,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:v,useInitCollection:g}]}Ee(Th,"createCollection");function yd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Ee(yd,"shallowEqual");function Rd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Ee(Rd,"isElementPreceding");function Xl(e,t){return!e[1].element||!t[1].element?0:Rd(e[1].element,t[1].element)?-1:1}Ee(Xl,"sortByDocumentPosition");function Pd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Ee(Pd,"getChildListObserver");var ln=H(require("react"),1),Fh=require("react/jsx-runtime"),Eh=Object.defineProperty,Oh=(e,t)=>Eh(e,"name",{value:t,configurable:!0}),Bh=ln.createContext(void 0);function Da(e){let t=ln.useContext(Bh);return e||t||"ltr"}Oh(Da,"useDirection");var ze=H(require("react"),1);var Md=["top","right","bottom","left"];var Mt=Math.min,Lt=Math.max,ur=Math.round,dr=Math.floor,At=e=>({x:e,y:e}),Nh={left:"right",right:"left",bottom:"top",top:"bottom"};function $l(e,t,a){return Lt(e,Mt(t,a))}function Tt(e,t){return typeof e=="function"?e(t):e}function Vt(e){return e.split("-")[0]}function Ma(e){return e.split("-")[1]}function un(e){return e==="x"?"y":"x"}function dn(e){return e==="y"?"height":"width"}function bt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function cn(e){return un(bt(e))}function Ad(e,t,a){a===void 0&&(a=!1);let o=Ma(e),r=cn(e),n=dn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=ir(l)),[l,ir(l)]}function Td(e){let t=ir(e);return[sn(e),t,sn(t)]}function sn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var kd=["left","right"],Dd=["right","left"],_h=["top","bottom"],Hh=["bottom","top"];function Uh(e,t,a){switch(e){case"top":case"bottom":return a?t?Dd:kd:t?kd:Dd;case"left":case"right":return t?_h:Hh;default:return[]}}function Ed(e,t,a,o){let r=Ma(e),n=Uh(Vt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(sn)))),n}function ir(e){let t=Vt(e);return Nh[t]+e.slice(t.length)}function qh(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function Yl(e){return typeof e!="number"?qh(e):{top:e,right:e,bottom:e,left:e}}function Aa(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function Od(e,t,a){let{reference:o,floating:r}=e,n=bt(t),l=cn(t),s=dn(l),i=Vt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let p=Ma(t);return p&&(h[l]+=f*(p==="end"?1:-1)*(a&&u?-1:1)),h}async function Nd(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Tt(t,e),p=Yl(h),g=s[f?d==="floating"?"reference":"floating":d],v=Aa(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(g)))==null||a?g:g.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),L=await(n.isElement==null?void 0:n.isElement(x))&&await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1},w=Aa(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:x,strategy:i}):C);return{top:(v.top-w.top+p.top)/L.y,bottom:(w.bottom-v.bottom+p.bottom)/L.y,left:(v.left-w.left+p.left)/L.x,right:(w.right-v.right+p.right)/L.x}}var Vh=50,_d=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:Nd},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=Od(u,o,i),f=o,h=0,p={};for(let m=0;m<n.length;m++){let g=n[m];if(!g)continue;let{name:v,fn:C}=g,{x,y:L,data:w,reset:I}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:u,platform:s,elements:{reference:e,floating:t}});c=x??c,d=L??d,p[v]={...p[v],...w},I&&h<Vh&&(h++,typeof I=="object"&&(I.placement&&(f=I.placement),I.rects&&(u=I.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):I.rects),{x:c,y:d}=Od(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:p}},Hd=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Tt(e,t)||{};if(u==null)return{};let d=Yl(c),f={x:a,y:o},h=cn(r),p=dn(h),m=await l.getDimensions(u),g=h==="y",v=g?"top":"left",C=g?"bottom":"right",x=g?"clientHeight":"clientWidth",L=n.reference[p]+n.reference[h]-f[h]-n.floating[p],w=f[h]-n.reference[h],I=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=I?I[x]:0;(!y||!await(l.isElement==null?void 0:l.isElement(I)))&&(y=s.floating[x]||n.floating[p]);let R=L/2-w/2,P=y/2-m[p]/2-1,E=Mt(d[v],P),T=Mt(d[C],P),O=y-m[p]-T,F=y/2-m[p]/2+R,_=$l(E,F,O),Y=!i.arrow&&Ma(r)!=null&&F!==_&&n.reference[p]/2-(F<E?E:T)-m[p]/2<0,X=Y?F<E?F-E:F-O:0;return{[h]:f[h]+X,data:{[h]:_,centerOffset:F-_-X,...Y&&{alignmentOffset:X}},reset:Y}}});var Ud=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=Tt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let v=Vt(r),C=bt(s),x=Vt(s)===s,L=await(i.isRTL==null?void 0:i.isRTL(u.floating)),w=f||(x||!m?[ir(s)]:Td(s)),I=p!=="none";!f&&I&&w.push(...Ed(s,m,p,L));let y=[s,...w],R=await i.detectOverflow(t,g),P=[],E=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&P.push(R[v]),d){let _=Ad(r,l,L);P.push(R[_[0]],R[_[1]])}if(E=[...E,{placement:r,overflows:P}],!P.every(_=>_<=0)){var T,O;let _=(((T=n.flip)==null?void 0:T.index)||0)+1,Y=y[_];if(Y&&(!(d==="alignment"?C!==bt(Y):!1)||E.every(V=>bt(V.placement)===C?V.overflows[0]>0:!0)))return{data:{index:_,overflows:E},reset:{placement:Y}};let X=(O=E.filter(N=>N.overflows[0]<=0).sort((N,V)=>N.overflows[1]-V.overflows[1])[0])==null?void 0:O.placement;if(!X)switch(h){case"bestFit":{var F;let N=(F=E.filter(V=>{if(I){let W=bt(V.placement);return W===C||W==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(W=>W>0).reduce((W,A)=>W+A,0)]).sort((V,W)=>V[1]-W[1])[0])==null?void 0:F[0];N&&(X=N);break}case"initialPlacement":X=s;break}if(r!==X)return{reset:{placement:X}}}return{}}}};function Fd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Bd(e){return Md.some(t=>e[t]>=0)}var qd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Tt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=Fd(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Bd(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=Fd(l,a.floating);return{data:{escapedOffsets:s,escaped:Bd(s)}}}default:return{}}}}};var Vd=new Set(["left","top"]);async function Wh(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Vt(a),s=Ma(a),i=bt(a)==="y",u=Vd.has(l)?-1:1,c=n&&i?-1:1,d=Tt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof p=="number"&&(h=s==="end"?p*-1:p),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var Wd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await Wh(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},Gd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x,y:L}=C;return{x,y:L}}},...u}=Tt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=bt(r),h=un(f),p=c[h],m=c[f],g=(C,x)=>$l(x+d[C==="y"?"top":"left"],x,x-d[C==="y"?"bottom":"right"]);l&&(p=g(h,p)),s&&(m=g(f,m));let v=i.fn({...t,[h]:p,[f]:m});return{...v,data:{x:v.x-a,y:v.y-o,enabled:{[h]:l,[f]:s}}}}}},zd=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Tt(e,t),f={x:r,y:n},h=bt(l),p=un(h),m=f[p],g=f[h],v=Tt(u,t),C=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:(a=v.mainAxis)!=null?a:0,crossAxis:(o=v.crossAxis)!=null?o:0};if(c){let w=p==="y"?"height":"width",I=s.reference[p]-s.floating[w]+C.mainAxis,y=s.reference[p]+s.reference[w]-C.mainAxis;m<I?m=I:m>y&&(m=y)}if(d){var x,L;let w=p==="y"?"width":"height",I=Vd.has(Vt(l)),y=s.reference[h]-s.floating[w]+(I&&((x=i.offset)==null?void 0:x[h])||0)+(I?0:C.crossAxis),R=s.reference[h]+s.reference[w]+(I?0:((L=i.offset)==null?void 0:L[h])||0)-(I?C.crossAxis:0);g<y?g=y:g>R&&(g=R)}return{[p]:m,[h]:g}}}},Kd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Tt(e,t),i=await r.detectOverflow(t,s),u=Vt(a),c=Ma(a),d=bt(a)==="y",{width:f,height:h}=o.floating,p,m;u==="top"||u==="bottom"?(p=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,p=c==="end"?"top":"bottom");let g=h-i.top-i.bottom,v=f-i.left-i.right,C=Mt(h-i[p],g),x=Mt(f-i[m],v),L=t.middlewareData.shift,w=!L,I=C,y=x;L!=null&&L.enabled.x&&(y=v),L!=null&&L.enabled.y&&(I=g),w&&!c&&(d?y=f-2*Lt(i.left,i.right):I=h-2*Lt(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:I});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function fn(){return typeof window<"u"}function Oa(e){return jd(e)?(e.nodeName||"").toLowerCase():"#document"}function $e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Et(e){var t;return(t=(jd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function jd(e){return fn()?e instanceof Node||e instanceof $e(e).Node:!1}function It(e){return fn()?e instanceof Element||e instanceof $e(e).Element:!1}function Wt(e){return fn()?e instanceof HTMLElement||e instanceof $e(e).HTMLElement:!1}function Xd(e){return!fn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $e(e).ShadowRoot}function cr(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=wt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function $d(e){return/^(table|td|th)$/.test(Oa(e))}function fr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var Gh=/transform|translate|scale|rotate|perspective|filter/,zh=/paint|layout|strict|content/,Ta=e=>!!e&&e!=="none",Zl;function pn(e){let t=It(e)?wt(e):e;return Ta(t.transform)||Ta(t.translate)||Ta(t.scale)||Ta(t.rotate)||Ta(t.perspective)||!mn()&&(Ta(t.backdropFilter)||Ta(t.filter))||Gh.test(t.willChange||"")||zh.test(t.contain||"")}function Yd(e){let t=oa(e);for(;Wt(t)&&!vo(t);){if(pn(t))return t;if(fr(t))return null;t=oa(t)}return null}function mn(){return Zl==null&&(Zl=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Zl}function vo(e){return/^(html|body|#document)$/.test(Oa(e))}function wt(e){return $e(e).getComputedStyle(e)}function pr(e){return It(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oa(e){if(Oa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Xd(e)&&e.host||Et(e);return Xd(t)?t.host:t}function Zd(e){let t=oa(e);return vo(t)?(e.ownerDocument||e).body:Wt(t)&&cr(t)?t:Zd(t)}function Ea(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=Zd(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=$e(r);if(n){let s=gn(l);return t.concat(l,l.visualViewport||[],cr(r)?r:[],s&&a?Ea(s):[])}else return t.concat(r,Ea(r,[],a))}function gn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ec(e){let t=wt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=Wt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=ur(a)!==n||ur(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function Ql(e){return It(e)?e:e.contextElement}function Co(e){let t=Ql(e);if(!Wt(t))return At(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=ec(t),l=(n?ur(a.width):a.width)/o,s=(n?ur(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var Kh=At(0);function tc(e){let t=$e(e);return!mn()||!t.visualViewport?Kh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xh(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===$e(e)}function Fa(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=Ql(e),l=At(1);t&&(o?It(o)&&(l=Co(o)):l=Co(e));let s=Xh(n,a,o)?tc(n):At(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=$e(n),h=It(o)?$e(o):o,p=f,m=gn(p);for(;m&&h!==p;){let g=Co(m),v=m.getBoundingClientRect(),C=wt(m),x=v.left+(m.clientLeft+parseFloat(C.paddingLeft))*g.x,L=v.top+(m.clientTop+parseFloat(C.paddingTop))*g.y;i*=g.x,u*=g.y,c*=g.x,d*=g.y,i+=x,u+=L,p=$e(m),m=gn(p)}}return Aa({width:c,height:d,x:i,y:u})}function hn(e,t){let a=pr(e).scrollLeft;return t?t.left+a:Fa(Et(e)).left+a}function ac(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-hn(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function jh(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Et(o),s=t?fr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=At(1),c=At(0),d=Wt(o);if((d||!n)&&((Oa(o)!=="body"||cr(l))&&(i=pr(o)),d)){let h=Fa(o);u=Co(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=l&&!d&&!n?ac(l,i):At(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function $h(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Yh(e){let t=pr(e),a=e.ownerDocument.body,o=Lt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=Lt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+hn(e),l=-t.scrollTop;return wt(a).direction==="rtl"&&(n+=Lt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var Zh=25;function Jh(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=$e(e),n=Et(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!mn()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(hn(n)<=0){let f=n.ownerDocument,h=f.body,p=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,g=Math.abs(n.clientWidth-h.clientWidth-m),v=getComputedStyle(n).scrollbarGutter==="stable both-edges"?g/2:g;v<=Zh&&(s-=v)}return{width:s,height:i,x:u,y:c}}function Qh(e,t){let a=Fa(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=Co(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function Jd(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=Jh(e,a,t);else if(t==="document")o=Yh(Et(e));else if(It(t))o=Qh(t,a);else{let r=tc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Aa(o)}function ex(e,t){let a=t.get(e);if(a)return a;let o=Ea(e,[],!1).filter(s=>It(s)&&Oa(s)!=="body"),r=null,n=wt(e).position==="fixed",l=n?oa(e):e;for(;It(l)&&!vo(l);){let s=wt(l),i=pn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=oa(l)}return t.set(e,o),o}function tx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?fr(t)?[]:ex(t,this._c):[].concat(a),o],s=Jd(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let h=Jd(t,l[f],r);i=Lt(h.top,i),u=Mt(h.right,u),c=Mt(h.bottom,c),d=Lt(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function ax(e){let{width:t,height:a}=ec(e);return{width:t,height:a}}function ox(e,t,a){let o=Wt(t),r=Et(t),n=a==="fixed",l=Fa(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=At(0);if((o||!n)&&((Oa(t)!=="body"||cr(r))&&(s=pr(t)),o)){let f=Fa(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=hn(r));let u=r&&!o&&!n?ac(r,s):At(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function Jl(e){return wt(e).position==="static"}function Qd(e,t){if(!Wt(e)||wt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Et(e)===a&&(a=a.ownerDocument.body),a}function oc(e,t){let a=$e(e);if(fr(e))return a;if(!Wt(e)){let r=oa(e);for(;r&&!vo(r);){if(It(r)&&!Jl(r))return r;r=oa(r)}return a}let o=Qd(e,t);for(;o&&$d(o)&&Jl(o);)o=Qd(o,t);return o&&vo(o)&&Jl(o)&&!pn(o)?a:o||Yd(e)||a}var rx=async function(e){let t=this.getOffsetParent||oc,a=this.getDimensions,o=await a(e.floating);return{reference:ox(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nx(e){return wt(e).direction==="rtl"}var rc={convertOffsetParentRelativeRectToViewportRelativeRect:jh,getDocumentElement:Et,getClippingRect:tx,getOffsetParent:oc,getElementRects:rx,getClientRects:$h,getDimensions:ax,getScale:Co,isElement:It,isRTL:nx};function nc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function lx(e,t,a){let o=null,r,n=Et(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:h,top:p,width:m,height:g}=f;if(c||t(),!m||!g)return;let v=dr(p),C=dr(n.clientWidth-(h+m)),x=dr(n.clientHeight-(p+g)),L=dr(h),I={rootMargin:-v+"px "+-C+"px "+-x+"px "+-L+"px",threshold:Lt(0,Mt(1,d))||1},y=!0;function R(P){let E=P[0].intersectionRatio;if(!nc(f,e.getBoundingClientRect()))return s();if(E!==d){if(!y)return s();E?s(!1,E):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...I,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,I)}o.observe(e)}let i=$e(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function es(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=Ql(e),c=r||n?[...u?Ea(u):[],...t?Ea(t):[]]:[];c.forEach(v=>{r&&v.addEventListener("scroll",a),n&&v.addEventListener("resize",a)});let d=u&&s?lx(u,a,n):null,f=-1,h=null;l&&(h=new ResizeObserver(v=>{let[C]=v;C&&C.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let p,m=i?Fa(e):null;i&&g();function g(){let v=Fa(e);m&&!nc(m,v)&&a(),m=v,p=requestAnimationFrame(g)}return a(),()=>{var v;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(v=h)==null||v.disconnect(),h=null,i&&cancelAnimationFrame(p)}}var lc=Wd;var sc=Gd,ic=Ud,uc=Kd,dc=qd,ts=Hd;var cc=zd,as=(e,t,a)=>{let o=new Map,r=a??{},n={...rc,...r.platform,_c:o};return _d(e,t,{...r,platform:n})};var ye=H(require("react"),1),pc=require("react"),mc=H(require("react-dom"),1),sx=typeof document<"u",ix=function(){},xn=sx?pc.useLayoutEffect:ix;function vn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!vn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!vn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function gc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function fc(e,t){let a=gc(e);return Math.round(t*a)/a}function os(e){let t=ye.useRef(e);return xn(()=>{t.current=e}),t}function hc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=ye.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=ye.useState(o);vn(f,o)||h(o);let[p,m]=ye.useState(null),[g,v]=ye.useState(null),C=ye.useCallback(V=>{V!==I.current&&(I.current=V,m(V))},[]),x=ye.useCallback(V=>{V!==y.current&&(y.current=V,v(V))},[]),L=n||p,w=l||g,I=ye.useRef(null),y=ye.useRef(null),R=ye.useRef(c),P=i!=null,E=os(i),T=os(r),O=os(u),F=ye.useCallback(()=>{if(!I.current||!y.current)return;let V={placement:t,strategy:a,middleware:f};T.current&&(V.platform=T.current),as(I.current,y.current,V).then(W=>{let A={...W,isPositioned:O.current!==!1};_.current&&!vn(R.current,A)&&(R.current=A,mc.flushSync(()=>{d(A)}))})},[f,t,a,T,O]);xn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(V=>({...V,isPositioned:!1})))},[u]);let _=ye.useRef(!1);xn(()=>(_.current=!0,()=>{_.current=!1}),[]),xn(()=>{if(L&&(I.current=L),w&&(y.current=w),L&&w){if(E.current)return E.current(L,w,F);F()}},[L,w,F,E,P]);let Y=ye.useMemo(()=>({reference:I,floating:y,setReference:C,setFloating:x}),[C,x]),X=ye.useMemo(()=>({reference:L,floating:w}),[L,w]),N=ye.useMemo(()=>{let V={position:a,left:0,top:0};if(!X.floating)return V;let W=fc(X.floating,c.x),A=fc(X.floating,c.y);return s?{...V,transform:"translate("+W+"px, "+A+"px)",...gc(X.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:W,top:A}},[a,s,X.floating,c.x,c.y]);return ye.useMemo(()=>({...c,update:F,refs:Y,elements:X,floatingStyles:N}),[c,F,Y,X,N])}var ux=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?ts({element:o.current,padding:r}).fn(a):{}:o?ts({element:o,padding:r}).fn(a):{}}}},xc=(e,t)=>{let a=lc(e);return{name:a.name,fn:a.fn,options:[e,t]}},vc=(e,t)=>{let a=sc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Cc=(e,t)=>({fn:cc(e).fn,options:[e,t]}),Lc=(e,t)=>{let a=ic(e);return{name:a.name,fn:a.fn,options:[e,t]}},bc=(e,t)=>{let a=uc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Ic=(e,t)=>{let a=dc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var wc=(e,t)=>{let a=ux(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Sc=H(require("react"),1);var dx=Object.defineProperty,cx=(e,t)=>dx(e,"name",{value:t,configurable:!0});function rs(e){let[t,a]=Sc.useState(void 0);return le(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}cx(rs,"useSize");var Lo=require("react/jsx-runtime"),fx=Object.defineProperty,ra=(e,t)=>fx(e,"name",{value:t,configurable:!0});var yc="Popper",[Rc,bo]=Ne(yc),[px,Pc]=Rc(yc),mx=ra(e=>{let{__scopePopper:t,children:a}=e,[o,r]=ze.useState(null),[n,l]=ze.useState(void 0);return(0,Lo.jsx)(px,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),gx="PopperAnchor",hx=ze.forwardRef(ra(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Pc(gx,o),s=ze.useRef(null),i=l.onAnchorChange,u=ze.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=J(a,u),d=ze.useRef(null);ze.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Cn(l.placementState),h=f?.[0],p=f?.[1];return r?null:(0,Lo.jsx)(ee.div,{"data-radix-popper-side":h,"data-radix-popper-align":p,...n,ref:c})},"PopperAnchor")),kc="PopperContent",[xx,hw]=Rc(kc),vx=ze.forwardRef(ra(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:m,...g}=t,v=Pc(kc,o),[C,x]=ze.useState(null),L=J(a,x),[w,I]=ze.useState(null),y=rs(w),R=y?.width??0,P=y?.height??0,E=r+(l!=="center"?"-"+l:""),T=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(c)?c:[c],F=O.length>0,_={padding:T,boundary:O.filter(Dc),altBoundary:F},{refs:Y,floatingStyles:X,placement:N,isPositioned:V,middlewareData:W}=hc({strategy:"fixed",placement:E,whileElementsMounted:ra((...D)=>es(...D,{animationFrame:p==="always"}),"whileElementsMounted"),elements:{reference:v.anchor},middleware:[xc({mainAxis:n+P,alignmentAxis:s}),u&&vc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Cc():void 0,..._}),u&&Lc({..._}),bc({..._,apply:ra(({elements:D,rects:k,availableWidth:B,availableHeight:j})=>{let{width:z,height:te}=k.reference,se=D.floating.style;se.setProperty("--radix-popper-available-width",`${B}px`),se.setProperty("--radix-popper-available-height",`${j}px`),se.setProperty("--radix-popper-anchor-width",`${z}px`),se.setProperty("--radix-popper-anchor-height",`${te}px`)},"apply")}),w&&wc({element:w,padding:i}),Cx({arrowWidth:R,arrowHeight:P}),h&&Ic({strategy:"referenceHidden",..._,boundary:F?_.boundary:void 0})]}),A=v.setPlacementState;le(()=>(A(N),()=>{A(void 0)}),[N,A]);let[re,Z]=Cn(N),ne=Ae(m);le(()=>{V&&ne?.()},[V,ne]);let he=W.arrow?.x,Ie=W.arrow?.y,ge=W.arrow?.centerOffset!==0,[we,b]=ze.useState();return le(()=>{C&&b(window.getComputedStyle(C).zIndex)},[C]),(0,Lo.jsx)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:V?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:we,"--radix-popper-transform-origin":[W.transformOrigin?.x,W.transformOrigin?.y].join(" "),...W.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Lo.jsx)(xx,{scope:o,placedSide:re,placedAlign:Z,onArrowChange:I,arrowX:he,arrowY:Ie,shouldHideArrow:ge,children:(0,Lo.jsx)(ee.div,{"data-side":re,"data-align":Z,...g,ref:L,style:{...g.style,animation:V?g.style?.animation:"none"}})})})},"PopperContent"));function Dc(e){return e!==null}ra(Dc,"isNotNull");var Cx=ra(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Cn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,h=(r.arrow?.y??0)+i/2,p="",m="";return u==="bottom"?(p=l?d:`${f}px`,m=`${-i}px`):u==="top"?(p=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(p=`${-i}px`,m=l?d:`${h}px`):u==="left"&&(p=`${o.floating.width+i}px`,m=l?d:`${h}px`),{data:{x:p,y:m}}}}),"transformOrigin");function Cn(e){let[t,a="center"]=e.split("-");return[t,a]}ra(Cn,"getSideAndAlignFromPlacement");var Ln=mx,bn=hx,In=vx;var Oe=H(require("react"),1);var bx=H(require("react"),1),wn=H(require("react"),1),Lx=Object.defineProperty,ls=(e,t)=>Lx(e,"name",{value:t,configurable:!0}),ns=!1;function Ac(){let[e,t]=wn.useState(ns);return wn.useEffect(()=>{ns||(ns=!0,t(!0))},[]),e}ls(Ac,"useIsHydrated");var Tc=bx[" useSyncExternalStore ".trim().toString()];function Ec(){return()=>{}}ls(Ec,"subscribe");function Oc(){return Tc(Ec,()=>!0,()=>!1)}ls(Oc,"useIsHydratedModern");var Fc=typeof Tc=="function"?Oc:Ac;var na=require("react/jsx-runtime"),Ix=Object.defineProperty,Ba=(e,t)=>Ix(e,"name",{value:t,configurable:!0}),ss="rovingFocusGroup.onEntryFocus",wx={bubbles:!1,cancelable:!0},Sn="RovingFocusGroup",[is,Bc,Sx]=ka(Sn),[yx,us]=Ne(Sn,[Sx]),[Rx,Px]=yx(Sn),kx=Oe.forwardRef(Ba(function(t,a){return(0,na.jsx)(is.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,na.jsx)(is.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,na.jsx)(Dx,{...t,ref:a})})})},"RovingFocusGroup")),Dx=Oe.forwardRef(Ba(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=Oe.useRef(null),p=J(a,h),m=Da(l),[g,v]=kt({prop:s,defaultProp:i??null,onChange:u,caller:Sn}),[C,x]=Oe.useState(!1),L=Ae(c),w=Bc(o),I=Oe.useRef(!1),[y,R]=Oe.useState(0);return Oe.useEffect(()=>{let P=h.current;if(P)return P.addEventListener(ss,L),()=>P.removeEventListener(ss,L)},[L]),(0,na.jsx)(Rx,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:g,onItemFocus:Oe.useCallback(P=>v(P),[v]),onItemShiftTab:Oe.useCallback(()=>x(!0),[]),onFocusableItemAdd:Oe.useCallback(()=>R(P=>P+1),[]),onFocusableItemRemove:Oe.useCallback(()=>R(P=>P-1),[]),children:(0,na.jsx)(ee.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:p,style:{outline:"none",...t.style},onMouseDown:U(t.onMouseDown,()=>{I.current=!0}),onFocus:U(t.onFocus,P=>{let E=!I.current;if(P.target===P.currentTarget&&E&&!C){let T=new CustomEvent(ss,wx);if(P.currentTarget.dispatchEvent(T),!T.defaultPrevented){let O=w().filter(N=>N.focusable),F=O.find(N=>N.active),_=O.find(N=>N.id===g),X=[F,_,...O].filter(Boolean).map(N=>N.ref.current);ds(X,d)}}I.current=!1}),onBlur:U(t.onBlur,()=>x(!1))})})},"RovingFocusGroupImpl")),Mx="RovingFocusGroupItem",Ax=Oe.forwardRef(Ba(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=ot(),c=l||u,d=Px(Mx,o),f=d.currentTabStopId===c,h=Bc(o),{onFocusableItemAdd:p,onFocusableItemRemove:m,currentTabStopId:g}=d,v=Fc();return le(()=>{if(!(!v||!r))return p(),()=>m()},[v,r,p,m]),Oe.useEffect(()=>{if(!(v||!r))return p(),()=>m()},[v,r,p,m]),(0,na.jsx)(is.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,na.jsx)(ee.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:U(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:U(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:U(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let x=_c(C,d.orientation,d.dir);if(x!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let w=h().filter(I=>I.focusable).map(I=>I.ref.current);if(x==="last")w.reverse();else if(x==="prev"||x==="next"){x==="prev"&&w.reverse();let I=w.indexOf(C.currentTarget);w=d.loop?Hc(w,I+1):w.slice(I+1)}setTimeout(()=>ds(w))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:g!=null}):s})})},"RovingFocusGroupItem")),Tx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nc(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Ba(Nc,"getDirectionAwareKey");function _c(e,t,a){let o=Nc(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Tx[o]}Ba(_c,"getFocusIntent");function ds(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Ba(ds,"focusFirst");function Hc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Ba(Hc,"wrapArray");var Uc=kx,qc=Ax;var ue=require("react/jsx-runtime"),Fx=Object.defineProperty,de=(e,t)=>Fx(e,"name",{value:t,configurable:!0}),cs=["Enter"," "],Bx=["ArrowDown","PageUp","Home"],Wc=["ArrowUp","PageDown","End"],Nx=[...Bx,...Wc],Kw={ltr:[...cs,"ArrowRight"],rtl:[...cs,"ArrowLeft"]};var Rn="Menu",[fs,_x,Hx]=ka(Rn),[Na,ms]=Ne(Rn,[Hx,bo,us]),gs=bo(),Gc=us(),[Ux,mr]=Na(Rn),[qx,hs]=Na(Rn),Vx=de(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=gs(t),[i,u]=$.useState(null),c=$.useRef(!1),d=Ae(n),f=Da(r);return $.useEffect(()=>{let h=de(()=>{c.current=!0,document.addEventListener("pointerdown",p,{capture:!0,once:!0}),document.addEventListener("pointermove",p,{capture:!0,once:!0})},"handleKeyDown"),p=de(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",p,{capture:!0}),document.removeEventListener("pointermove",p,{capture:!0})}},[]),$.useEffect(()=>{if(!a)return;let h=de(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,ue.jsx)(Ln,{...s,children:(0,ue.jsx)(Ux,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,ue.jsx)(qx,{scope:t,onClose:$.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),Wx=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t,n=gs(o);return(0,ue.jsx)(bn,{...n,...r,ref:a})},"MenuAnchor")),zc="MenuPortal",[Gx,zx]=Na(zc,{forceMount:void 0}),Kx=de(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=mr(zc,t);return(0,ue.jsx)(Gx,{scope:t,forceMount:a,children:(0,ue.jsx)(qt,{present:a||n.open,children:(0,ue.jsx)(so,{asChild:!0,container:r,children:o})})})},"MenuPortal"),la="MenuContent",[Xx,Kc]=Na(la),jx=$.forwardRef(de(function(t,a){let o=zx(la,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=mr(la,t.__scopeMenu),s=hs(la,t.__scopeMenu);return(0,ue.jsx)(fs.Provider,{scope:t.__scopeMenu,children:(0,ue.jsx)(qt,{present:r||l.open,children:(0,ue.jsx)(fs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,ue.jsx)($x,{...n,ref:a}):(0,ue.jsx)(Yx,{...n,ref:a})})})})},"MenuContent")),$x=$.forwardRef(de(function(t,a){let o=mr(la,t.__scopeMenu),r=$.useRef(null),n=J(a,r);return $.useEffect(()=>{let l=r.current;if(l)return go(l)},[]),(0,ue.jsx)(Xc,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:U(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),Yx=$.forwardRef(de(function(t,a){let o=mr(la,t.__scopeMenu);return(0,ue.jsx)(Xc,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),Zx=We("MenuContent.ScrollLock"),Xc=$.forwardRef(de(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,disableOutsideScroll:m,...g}=t,v=mr(la,o),C=hs(la,o),x=gs(o),L=Gc(o),w=_x(o),[I,y]=$.useState(null),R=$.useRef(null),P=J(a,R,v.onContentChange),E=$.useRef(0),T=$.useRef(""),O=$.useRef(0),F=$.useRef(null),_=$.useRef("right"),Y=$.useRef(0),X=m?Ia:$.Fragment,N=m?{as:Zx,allowPinchZoom:!0}:void 0,V=de(A=>{let re=T.current+A,Z=w().filter(b=>!b.disabled),ne=document.activeElement,he=Z.find(b=>b.ref.current===ne)?.textValue,Ie=Z.map(b=>b.textValue),ge=Jc(Ie,re,he),we=Z.find(b=>b.textValue===ge)?.ref.current;de((function b(D){T.current=D,window.clearTimeout(E.current),D!==""&&(E.current=window.setTimeout(()=>b(""),1e3))}),"updateSearch")(re),we&&setTimeout(()=>we.focus())},"handleTypeaheadSearch");$.useEffect(()=>()=>window.clearTimeout(E.current),[]),aa();let W=$.useCallback(A=>_.current===F.current?.side&&ef(A,F.current?.area),[]);return(0,ue.jsx)(Xx,{scope:o,searchRef:T,onItemEnter:$.useCallback(A=>{W(A)&&A.preventDefault()},[W]),onItemLeave:$.useCallback(A=>{W(A)||(R.current?.focus(),y(null))},[W]),onTriggerLeave:$.useCallback(A=>{W(A)&&A.preventDefault()},[W]),pointerGraceTimerRef:O,onPointerGraceIntentChange:$.useCallback(A=>{F.current=A},[]),children:(0,ue.jsx)(X,{...N,children:(0,ue.jsx)(lo,{asChild:!0,trapped:n,onMountAutoFocus:U(l,A=>{A.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,ue.jsx)(no,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:p,children:(0,ue.jsx)(Uc,{asChild:!0,...L,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:I,onCurrentTabStopIdChange:y,onEntryFocus:U(u,A=>{C.isUsingKeyboardRef.current||A.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,ue.jsx)(In,{role:"menu","aria-orientation":"vertical","data-state":jc(v.open),"data-radix-menu-content":"",dir:C.dir,...x,...g,ref:P,style:{outline:"none",...g.style},onKeyDown:U(g.onKeyDown,A=>{let Z=A.target.closest("[data-radix-menu-content]")===A.currentTarget,ne=A.ctrlKey||A.altKey||A.metaKey,he=A.key.length===1;Z&&(A.key==="Tab"&&A.preventDefault(),!ne&&he&&V(A.key));let Ie=R.current;if(A.target!==Ie||!Nx.includes(A.key))return;A.preventDefault();let we=w().filter(b=>!b.disabled).map(b=>b.ref.current);Wc.includes(A.key)&&we.reverse(),Yc(we)}),onBlur:U(t.onBlur,A=>{A.currentTarget.contains(A.target)||(window.clearTimeout(E.current),T.current="")}),onPointerMove:U(t.onPointerMove,yn(A=>{let re=A.target,Z=Y.current!==A.clientX;if(A.currentTarget.contains(re)&&Z){let ne=A.clientX>Y.current?"right":"left";_.current=ne,Y.current=A.clientX}}))})})})})})})},"MenuContentImpl"));var Jx=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ue.jsx)(ee.div,{...r,ref:a})},"MenuLabel")),ps="MenuItem",Vc="menu.itemSelect",Qx=$.forwardRef(de(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=$.useRef(null),s=hs(ps,t.__scopeMenu),i=Kc(ps,t.__scopeMenu),u=J(a,l),c=$.useRef(!1),d=de(()=>{let f=l.current;if(!o&&f){let h=new CustomEvent(Vc,{bubbles:!0,cancelable:!0});f.addEventListener(Vc,p=>r?.(p),{once:!0}),er(f,h),h.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,ue.jsx)(ev,{...n,ref:u,disabled:o,onClick:U(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:U(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:U(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||cs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),ev=$.forwardRef(de(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Kc(ps,o),i=Gc(o),u=$.useRef(null),c=J(a,u),[d,f]=$.useState(!1),[h,p]=$.useState("");return $.useEffect(()=>{let m=u.current;m&&p((m.textContent??"").trim())},[l.children]),(0,ue.jsx)(fs.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,ue.jsx)(qc,{asChild:!0,...i,focusable:!r,children:(0,ue.jsx)(ee.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:U(t.onPointerMove,yn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:U(t.onPointerLeave,yn(m=>s.onItemLeave(m))),onFocus:U(t.onFocus,()=>f(!0)),onBlur:U(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var tv="MenuRadioGroup",[Xw,jw]=Na(tv,{value:void 0,onValueChange:de(()=>{},"onValueChange")});var av="MenuItemIndicator",[$w,Yw]=Na(av,{checked:!1});var ov=$.forwardRef(de(function(t,a){let{__scopeMenu:o,...r}=t;return(0,ue.jsx)(ee.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var rv="MenuSub",[Zw,Jw]=Na(rv);function jc(e){return e?"open":"closed"}de(jc,"getOpenState");function $c(e){return e==="indeterminate"}de($c,"isIndeterminate");function nv(e){return $c(e)?"indeterminate":e?"checked":"unchecked"}de(nv,"getCheckedState");function Yc(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}de(Yc,"focusFirst");function Zc(e,t){return e.map((a,o)=>e[(t+o)%e.length])}de(Zc,"wrapArray");function Jc(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Zc(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}de(Jc,"getNextMatch");function Qc(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}de(Qc,"isPointInPolygon");function ef(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return Qc(a,t)}de(ef,"isPointerInGraceArea");function yn(e){return t=>t.pointerType==="mouse"?e(t):void 0}de(yn,"whenMouse");var tf=Vx,af=Wx,of=Kx,rf=jx;var nf=Jx,lf=Qx;var sf=ov;var Ot=require("react/jsx-runtime"),sv=Object.defineProperty,_a=(e,t)=>sv(e,"name",{value:t,configurable:!0}),xs="DropdownMenu",[iv,gS]=Ne(xs,[ms]),Ha=ms(),[uv,uf]=iv(xs),dv=_a(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=Ha(t),u=St.useRef(null),[c,d]=kt({prop:r,defaultProp:n??!1,onChange:l,caller:xs});return(0,Ot.jsx)(uv,{scope:t,triggerId:ot(),triggerRef:u,contentId:ot(),open:c,onOpenChange:d,onOpenToggle:St.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,Ot.jsx)(tf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),cv="DropdownMenuTrigger",fv=St.forwardRef(_a(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=uf(cv,o),s=Ha(o),i=J(a,l.triggerRef);return(0,Ot.jsx)(af,{asChild:!0,...s,children:(0,Ot.jsx)(ee.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:U(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:U(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),pv=_a(e=>{let{__scopeDropdownMenu:t,...a}=e,o=Ha(t);return(0,Ot.jsx)(of,{...o,...a})},"DropdownMenuPortal"),mv="DropdownMenuContent",gv=St.forwardRef(_a(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=uf(mv,o),l=Ha(o),s=St.useRef(!1);return(0,Ot.jsx)(rf,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:U(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:U(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var hv=St.forwardRef(_a(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ha(o);return(0,Ot.jsx)(nf,{...n,...r,ref:a})},"DropdownMenuLabel")),xv=St.forwardRef(_a(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ha(o);return(0,Ot.jsx)(lf,{...n,...r,ref:a})},"DropdownMenuItem"));var vv=St.forwardRef(_a(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Ha(o);return(0,Ot.jsx)(sf,{...n,...r,ref:a})},"DropdownMenuSeparator"));var df=dv,cf=fv,ff=pv,vs=gv;var Cs=hv,Ls=xv;var bs=vv;var Io=require("react/jsx-runtime"),hr=df,xr=cf;var wo=gr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,Io.jsx)(ff,{children:(0,Io.jsx)(vs,{ref:o,sideOffset:t,className:Q("kanban-portal kanban-dropdown-content",e),...a})}));wo.displayName=vs.displayName;var Gt=gr.forwardRef(({className:e,inset:t,...a},o)=>(0,Io.jsx)(Ls,{ref:o,className:Q("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Gt.displayName=Ls.displayName;var Lv=gr.forwardRef(({className:e,inset:t,...a},o)=>(0,Io.jsx)(Cs,{ref:o,className:Q("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));Lv.displayName=Cs.displayName;var bv=gr.forwardRef(({className:e,...t},a)=>(0,Io.jsx)(bs,{ref:a,className:Q("kanban-dropdown-separator",e),...t}));bv.displayName=bs.displayName;var pf=H(require("react"),1);var mf=require("react/jsx-runtime"),zt=pf.forwardRef(({className:e,type:t,...a},o)=>(0,mf.jsx)("input",{type:t,className:Q("kanban-input",e),ref:o,...a}));zt.displayName="Input";var xf=H(require("react"),1);var gf=H(require("react"),1);var hf=require("react/jsx-runtime"),Iv=Object.defineProperty,wv=(e,t)=>Iv(e,"name",{value:t,configurable:!0}),Sv=gf.forwardRef(wv(function(t,a){return(0,hf.jsx)(ee.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Is=Sv;var vf=require("react/jsx-runtime"),Ua=xf.forwardRef(({className:e,...t},a)=>(0,vf.jsx)(Is,{ref:a,className:Q("kanban-label",e),...t}));Ua.displayName=Is.displayName;var ia=H(require("react"),1);var M=H(require("react"),1),ys=H(require("react-dom"),1);var Rv=Object.defineProperty,Pv=(e,t)=>Rv(e,"name",{value:t,configurable:!0});function Pn(e,[t,a]){return Math.min(a,Math.max(t,e))}Pv(Pn,"clamp");var kn=H(require("react"),1),kv=Object.defineProperty,Dv=(e,t)=>kv(e,"name",{value:t,configurable:!0});function ws(e){let t=kn.useRef({value:e,previous:e});return kn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}Dv(ws,"usePrevious");var Mv=H(require("react"),1);var Av=require("react/jsx-runtime");var Cf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var q=require("react/jsx-runtime"),Tv=Object.defineProperty,oe=(e,t)=>Tv(e,"name",{value:t,configurable:!0}),Ev=[" ","Enter","ArrowUp","ArrowDown"],Ov=[" ","Enter"],So="Select",[Mn,An,Fv]=ka(So),[Va,$S]=Ne(So,[Fv,bo]),Rs=bo(),[Bv,sa]=Va(So),[Nv,_v]=Va(So);function Sf(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:p,internal_do_not_use_render:m}=e,g=Rs(t),[v,C]=M.useState(null),[x,L]=M.useState(null),[w,I]=M.useState(!1),y=Da(u),[R,P]=kt({prop:o,defaultProp:r??!1,onChange:n,caller:So}),[E,T]=kt({prop:l,defaultProp:s,onChange:i,caller:So}),O=M.useRef(null),F=M.useRef(E);M.useEffect(()=>{let Z=p?v?.ownerDocument.getElementById(p):v?.form;if(Z instanceof HTMLFormElement){let ne=oe(()=>T(F.current),"reset");return Z.addEventListener("reset",ne),()=>Z.removeEventListener("reset",ne)}},[p,v,T]);let _=v?!!p||!!v.closest("form"):!0,[Y,X]=M.useState(new Set),N=ot(),V=Array.from(Y).map(Z=>Z.props.value).join(";"),W=M.useCallback(Z=>{X(ne=>new Set(ne).add(Z))},[]),A=M.useCallback(Z=>{X(ne=>{let he=new Set(ne);return he.delete(Z),he})},[]),re={required:h,trigger:v,onTriggerChange:C,valueNode:x,onValueNodeChange:L,valueNodeHasChildren:w,onValueNodeHasChildrenChange:I,contentId:N,value:E,onValueChange:T,open:R,onOpenChange:P,dir:y,triggerPointerDownPosRef:O,disabled:f,name:c,autoComplete:d,form:p,nativeOptions:Y,nativeSelectKey:V,isFormControl:_};return(0,q.jsx)(Ln,{...g,children:(0,q.jsx)(Bv,{scope:t,...re,children:(0,q.jsx)(Mn.Provider,{scope:t,children:(0,q.jsx)(Nv,{scope:t,onNativeOptionAdd:W,onNativeOptionRemove:A,children:Ff(m)?m(re):a})})})})}oe(Sf,"SelectProvider");var yf=oe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,q.jsx)(Sf,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,q.jsxs)(q.Fragment,{children:[a,r?(0,q.jsx)(tC,{__scopeSelect:t}):null]})})},"Select"),Hv="SelectTrigger",Ps=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=Rs(o),s=sa(Hv,o),i=s.disabled||r,u=J(a,s.onTriggerChange),c=An(o),d=M.useRef("touch"),[f,h,p]=Fs(g=>{let v=c().filter(L=>!L.disabled),C=v.find(L=>L.value===s.value),x=Bs(v,g,C);x!==void 0&&s.onValueChange(x.value)}),m=oe(g=>{i||(s.onOpenChange(!0),p()),g&&(s.triggerPointerDownPosRef.current={x:Math.round(g.pageX),y:Math.round(g.pageY)})},"handleOpen");return(0,q.jsx)(bn,{asChild:!0,...l,children:(0,q.jsx)(ee.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":vr(s.value)?"":void 0,...n,ref:u,onClick:U(n.onClick,g=>{g.currentTarget.focus(),d.current!=="mouse"&&m(g)}),onPointerDown:U(n.onPointerDown,g=>{d.current=g.pointerType;let v=g.target;v.hasPointerCapture(g.pointerId)&&v.releasePointerCapture(g.pointerId),g.button===0&&g.ctrlKey===!1&&g.pointerType==="mouse"&&(m(g),g.preventDefault())}),onKeyDown:U(n.onKeyDown,g=>{let v=f.current!=="";!(g.ctrlKey||g.altKey||g.metaKey)&&g.key.length===1&&h(g.key),!(v&&g.key===" ")&&Ev.includes(g.key)&&(m(),g.preventDefault())})})})},"SelectTrigger")),Uv="SelectValue",Rf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=sa(Uv,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=J(a,u.onValueNodeChange);le(()=>{c(d)},[c,d]);let h=vr(u.value);return(0,q.jsx)(ee.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,q.jsx)(M.Fragment,{children:h?s:l},h?"placeholder":"value")})},"SelectValue")),Pf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,q.jsx)(ee.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),qv="SelectPortal",[Vv,Wv]=Va(qv,{forceMount:void 0}),kf=oe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,q.jsx)(Vv,{scope:e.__scopeSelect,forceMount:a,children:(0,q.jsx)(so,{asChild:!0,...o})})},"SelectPortal"),qa="SelectContent",ks=M.forwardRef(oe(function(t,a){let o=Wv(qa,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=sa(qa,t.__scopeSelect),[s,i]=M.useState();return le(()=>{i(new DocumentFragment)},[]),(0,q.jsx)(qt,{present:r||l.open,children:({present:u})=>u?(0,q.jsx)(Kv,{...n,ref:a}):(0,q.jsx)(Gv,{...n,fragment:s})})},"SelectContent")),Gv=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?ys.createPortal((0,q.jsx)(Df,{scope:o,children:(0,q.jsx)(Mn.Slot,{scope:o,children:(0,q.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),yt=10,[Df,Wa]=Va(qa),zv=We("SelectContent.RemoveScroll"),Kv=M.forwardRef(oe(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:m,hideWhenDetached:g,avoidCollisions:v,...C}=t,x=sa(qa,o),[L,w]=M.useState(null),[I,y]=M.useState(null),R=J(a,w),[P,E]=M.useState(null),[T,O]=M.useState(null),F=An(o),[_,Y]=M.useState(!1),X=M.useRef(!1);M.useEffect(()=>{if(L)return go(L)},[L]),aa();let N=M.useCallback(b=>{let[D,...k]=F().map(z=>z.ref.current),[B]=k.slice(-1),j=document.activeElement;for(let z of b)if(z===j||(z?.scrollIntoView({block:"nearest"}),z===D&&I&&(I.scrollTop=0),z===B&&I&&(I.scrollTop=I.scrollHeight),z?.focus(),document.activeElement!==j))return},[F,I]),V=M.useCallback(()=>N([P,L]),[N,P,L]);M.useEffect(()=>{_&&V()},[_,V]);let{onOpenChange:W,triggerPointerDownPosRef:A}=x;M.useEffect(()=>{if(L){let b={x:0,y:0},D=oe(B=>{b={x:Math.abs(Math.round(B.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(B.pageY)-(A.current?.y??0))}},"handlePointerMove"),k=oe(B=>{b.x<=10&&b.y<=10?B.preventDefault():B.composedPath().includes(L)||W(!1),document.removeEventListener("pointermove",D),A.current=null},"handlePointerUp");return A.current!==null&&(document.addEventListener("pointermove",D),document.addEventListener("pointerup",k,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",k,{capture:!0})}}},[L,W,A]),M.useEffect(()=>{let b=oe(()=>W(!1),"close");return window.addEventListener("blur",b),window.addEventListener("resize",b),()=>{window.removeEventListener("blur",b),window.removeEventListener("resize",b)}},[W]);let[re,Z]=Fs(b=>{let D=F().filter(j=>!j.disabled),k=D.find(j=>j.ref.current===document.activeElement),B=Bs(D,b,k);B&&setTimeout(()=>B.ref.current?.focus())}),ne=M.useCallback((b,D,k)=>{let B=!X.current&&!k;(x.value!==void 0&&x.value===D||B)&&(E(b),B&&(X.current=!0))},[x.value]),he=M.useCallback(()=>L?.focus(),[L]),Ie=M.useCallback((b,D,k)=>{let B=!X.current&&!k;(x.value!==void 0&&x.value===D||B)&&O(b)},[x.value]),ge=r==="popper"?Lf:Xv,we=ge===Lf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:p,sticky:m,hideWhenDetached:g,avoidCollisions:v}:{};return(0,q.jsx)(Df,{scope:o,content:L,viewport:I,onViewportChange:y,itemRefCallback:ne,selectedItem:P,onItemLeave:he,itemTextRefCallback:Ie,focusSelectedItem:V,selectedItemText:T,position:r,isPositioned:_,searchRef:re,children:(0,q.jsx)(Ia,{as:zv,allowPinchZoom:!0,children:(0,q.jsx)(lo,{asChild:!0,trapped:x.open,onMountAutoFocus:b=>{b.preventDefault()},onUnmountAutoFocus:U(n,b=>{x.trigger?.focus({preventScroll:!0}),b.preventDefault()}),children:(0,q.jsx)(no,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:b=>b.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:(0,q.jsx)(ge,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:b=>b.preventDefault(),...C,...we,onPlaced:()=>Y(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:U(C.onKeyDown,b=>{let D=b.ctrlKey||b.altKey||b.metaKey;if(b.key==="Tab"&&b.preventDefault(),!D&&b.key.length===1&&Z(b.key),["ArrowUp","ArrowDown","Home","End"].includes(b.key)){let B=F().filter(j=>!j.disabled).map(j=>j.ref.current);if(["ArrowUp","End"].includes(b.key)&&(B=B.slice().reverse()),["ArrowUp","ArrowDown"].includes(b.key)){let j=b.target,z=B.indexOf(j);B=B.slice(z+1)}setTimeout(()=>N(B)),b.preventDefault()}})})})})})})},"SelectContentImpl")),Xv=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=sa(qa,o),s=Wa(qa,o),[i,u]=M.useState(null),[c,d]=M.useState(null),f=J(a,d),h=An(o),p=M.useRef(!1),m=M.useRef(!0),{viewport:g,selectedItem:v,selectedItemText:C,focusSelectedItem:x}=s,L=M.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&g&&v&&C){let R=l.trigger.getBoundingClientRect(),P=c.getBoundingClientRect(),E=l.valueNode.getBoundingClientRect(),T=C.getBoundingClientRect();if(l.dir!=="rtl"){let j=T.left-P.left,z=E.left-j,te=R.left-z,se=R.width+te,ke=Math.max(se,P.width),mt=window.innerWidth-yt,gt=Pn(z,[yt,Math.max(yt,mt-ke)]);i.style.minWidth=se+"px",i.style.left=gt+"px"}else{let j=P.right-T.right,z=window.innerWidth-E.right-j,te=window.innerWidth-R.right-z,se=R.width+te,ke=Math.max(se,P.width),mt=window.innerWidth-yt,gt=Pn(z,[yt,Math.max(yt,mt-ke)]);i.style.minWidth=se+"px",i.style.right=gt+"px"}let O=h(),F=window.innerHeight-yt*2,_=g.scrollHeight,Y=window.getComputedStyle(c),X=parseInt(Y.borderTopWidth,10),N=parseInt(Y.paddingTop,10),V=parseInt(Y.borderBottomWidth,10),W=parseInt(Y.paddingBottom,10),A=X+N+_+W+V,re=Math.min(v.offsetHeight*5,A),Z=window.getComputedStyle(g),ne=parseInt(Z.paddingTop,10),he=parseInt(Z.paddingBottom,10),Ie=R.top+R.height/2-yt,ge=F-Ie,we=v.offsetHeight/2,b=v.offsetTop+we,D=X+N+b,k=A-D;if(D<=Ie){let j=O.length>0&&v===O[O.length-1].ref.current;i.style.bottom="0px";let z=c.clientHeight-g.offsetTop-g.offsetHeight,te=Math.max(ge,we+(j?he:0)+z+V),se=D+te;i.style.height=se+"px"}else{let j=O.length>0&&v===O[0].ref.current;i.style.top="0px";let te=Math.max(Ie,X+g.offsetTop+(j?ne:0)+we)+k;i.style.height=te+"px",g.scrollTop=D-Ie+g.offsetTop}i.style.margin=`${yt}px 0`,i.style.minHeight=re+"px",i.style.maxHeight=F+"px",r?.(),requestAnimationFrame(()=>p.current=!0)}},[h,l.trigger,l.valueNode,i,c,g,v,C,l.dir,r]);le(()=>L(),[L]);let[w,I]=M.useState();le(()=>{c&&I(window.getComputedStyle(c).zIndex)},[c]);let y=M.useCallback(R=>{R&&m.current===!0&&(L(),x?.(),m.current=!1)},[L,x]);return(0,q.jsx)(jv,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:p,onScrollButtonChange:y,children:(0,q.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:w},children:(0,q.jsx)(ee.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),Lf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=yt,...l}=t,s=Rs(o);return(0,q.jsx)(In,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[jv,Ds]=Va(qa,{}),bf="SelectViewport",Mf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=Wa(bf,o),s=Ds(bf,o),i=J(a,l.onViewportChange),u=M.useRef(0);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,q.jsx)(Mn.Slot,{scope:o,children:(0,q.jsx)(ee.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:U(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){let p=Math.abs(u.current-d.scrollTop);if(p>0){let m=window.innerHeight-yt*2,g=parseFloat(f.style.minHeight),v=parseFloat(f.style.height),C=Math.max(g,v);if(C<m){let x=C+p,L=Math.min(m,x),w=x-L;f.style.height=L+"px",f.style.bottom==="0px"&&(d.scrollTop=w>0?w:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),$v="SelectGroup",[YS,Yv]=Va($v);var Zv="SelectLabel",Ms=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t,n=Yv(Zv,o);return(0,q.jsx)(ee.div,{id:n.id,...r,ref:a})},"SelectLabel")),Ss="SelectItem",[Jv,Af]=Va(Ss),As=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=sa(Ss,o),u=Wa(Ss,o),c=i.value===r,[d,f]=M.useState(l??""),[h,p]=M.useState(!1),m=Ae(L=>u.itemRefCallback?.(L,r,n)),g=J(a,m),v=ot(),C=M.useRef("touch"),x=oe(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,q.jsx)(Jv,{scope:o,value:r,disabled:n,textId:v,isSelected:c,onItemTextChange:M.useCallback(L=>{f(w=>w||(L?.textContent??"").trim())},[]),children:(0,q.jsx)(Mn.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,q.jsx)(ee.div,{role:"option","aria-labelledby":v,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:g,onFocus:U(s.onFocus,()=>p(!0)),onBlur:U(s.onBlur,()=>p(!1)),onClick:U(s.onClick,()=>{C.current!=="mouse"&&x()}),onPointerUp:U(s.onPointerUp,()=>{C.current==="mouse"&&x()}),onPointerDown:U(s.onPointerDown,L=>{C.current=L.pointerType}),onPointerMove:U(s.onPointerMove,L=>{C.current=L.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&L.currentTarget.focus({preventScroll:!0})}),onPointerLeave:U(s.onPointerLeave,L=>{L.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:U(s.onKeyDown,L=>{n||L.target!==L.currentTarget||u.searchRef?.current!==""&&L.key===" "||(Ov.includes(L.key)&&x(),L.key===" "&&L.preventDefault())})})})})},"SelectItem")),Dn="SelectItemText",Tf=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=sa(Dn,o),i=Wa(Dn,o),u=Af(Dn,o),c=_v(Dn,o),[d,f]=M.useState(null),h=Ae(x=>i.itemTextRefCallback?.(x,u.value,u.disabled)),p=J(a,f,u.onItemTextChange,h),m=d?.textContent,g=M.useMemo(()=>(0,q.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:C}=c;return le(()=>(v(g),()=>C(g)),[v,C,g]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ee.span,{id:u.textId,...l,ref:p}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!vr(s.value)?ys.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),Qv="SelectItemIndicator",Ef=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return Af(Qv,o).isSelected?(0,q.jsx)(ee.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),If="SelectScrollUpButton",Ts=M.forwardRef(oe(function(t,a){let o=Wa(If,t.__scopeSelect),r=Ds(If,t.__scopeSelect),[n,l]=M.useState(!1),s=J(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,q.jsx)(Of,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),wf="SelectScrollDownButton",Es=M.forwardRef(oe(function(t,a){let o=Wa(wf,t.__scopeSelect),r=Ds(wf,t.__scopeSelect),[n,l]=M.useState(!1),s=J(a,r.onScrollButtonChange);return le(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,q.jsx)(Of,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),Of=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=Wa("SelectScrollButton",o),s=M.useRef(null),i=An(o),u=M.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return M.useEffect(()=>()=>u(),[u]),le(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,q.jsx)(ee.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:U(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:U(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:U(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Os=M.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,q.jsx)(ee.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var eC="SelectBubbleInput",tC=M.forwardRef(oe(function({__scopeSelect:t,...a},o){let r=sa(eC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,p=M.useRef(null),m=J(o,p),g=n??"",v=ws(g),C=Array.from(f).some(x=>(x.props.value??"")==="");return M.useEffect(()=>{let x=p.current;if(!x)return;let L=window.HTMLSelectElement.prototype,I=Object.getOwnPropertyDescriptor(L,"value").set;if(v!==g&&I){let y=new Event("change",{bubbles:!0});I.call(x,g),x.dispatchEvent(y)}},[v,g]),(0,q.jsxs)(ee.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:x=>l(x.target.value),...a,style:{...Cf,...a.style},ref:m,defaultValue:g,children:[vr(n)&&!C?(0,q.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function Ff(e){return typeof e=="function"}oe(Ff,"isFunction");function vr(e){return e===""||e===void 0}oe(vr,"shouldShowPlaceholder");function Fs(e){let t=Ae(e),a=M.useRef(""),o=M.useRef(0),r=M.useCallback(l=>{let s=a.current+l;t(s),oe((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=M.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return M.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}oe(Fs,"useTypeaheadSearch");function Bs(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Bf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}oe(Bs,"findNextItem");function Bf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}oe(Bf,"wrapArray");var Le=require("react/jsx-runtime"),Ns=yf;var _s=Rf,Tn=ia.forwardRef(({className:e,children:t,...a},o)=>(0,Le.jsxs)(Ps,{ref:o,className:Q("kanban-select-trigger",e),...a,children:[t,(0,Le.jsx)(Pf,{asChild:!0,children:(0,Le.jsx)(to,{className:"kanban-select-icon"})})]}));Tn.displayName=Ps.displayName;var Nf=ia.forwardRef(({className:e,...t},a)=>(0,Le.jsx)(Ts,{ref:a,className:Q("kanban-select-scroll-button",e),...t,children:(0,Le.jsx)(Go,{className:"kanban-select-scroll-icon"})}));Nf.displayName=Ts.displayName;var _f=ia.forwardRef(({className:e,...t},a)=>(0,Le.jsx)(Es,{ref:a,className:Q("kanban-select-scroll-button",e),...t,children:(0,Le.jsx)(to,{className:"kanban-select-scroll-icon"})}));_f.displayName=Es.displayName;var En=ia.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Le.jsx)(kf,{children:(0,Le.jsxs)(ks,{ref:r,className:Q("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Le.jsx)(Nf,{}),(0,Le.jsx)(Mf,{className:Q("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Le.jsx)(_f,{})]})}));En.displayName=ks.displayName;var oC=ia.forwardRef(({className:e,...t},a)=>(0,Le.jsx)(Ms,{ref:a,className:Q("kanban-select-label",e),...t}));oC.displayName=Ms.displayName;var yo=ia.forwardRef(({className:e,children:t,...a},o)=>(0,Le.jsxs)(As,{ref:o,className:Q("kanban-select-item",e),...a,children:[(0,Le.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Le.jsx)(Ef,{children:(0,Le.jsx)(ta,{className:"kanban-select-check"})})}),(0,Le.jsx)(Tf,{children:t})]}));yo.displayName=As.displayName;var rC=ia.forwardRef(({className:e,...t},a)=>(0,Le.jsx)(Os,{ref:a,className:Q("kanban-select-separator",e),...t}));rC.displayName=Os.displayName;var Hf=H(require("react"),1);var Uf=require("react/jsx-runtime"),Hs=Hf.forwardRef(({className:e,...t},a)=>(0,Uf.jsx)("textarea",{className:Q("kanban-textarea",e),ref:a,...t}));Hs.displayName="Textarea";var Kt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},On=["high","medium","low"],qf="#94a3b8";function Vf(e,t){return t?e.find(a=>a.name===t)?.color??qf:qf}var Ke=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Us=e=>e==="high"||e==="medium"||e==="low"?Kt[e].label:"";function Wf(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Us(a.priority)||o;return Ke(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return Ke(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?Ke(t("actLabelSet"),{to:n}):r!=null&&n==null?Ke(t("actLabelCleared"),{from:r}):Ke(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Us(r)||r:o,s=n?Us(n)||n:o;return r==null&&n!=null?Ke(t("actPrioritySet"),{to:s}):r!=null&&n==null?Ke(t("actPriorityCleared"),{from:l}):Ke(t("actPriority"),{from:l,to:s})}case"card_title_changed":return Ke(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_deleted":return t("actDeleted");case"column_added":return Ke(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return Ke(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return Ke(t("actColumnDeleted"),{column:a.column??""});case"label_added":return Ke(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return Ke(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return Ke(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return Ke(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var Fn=e=>String(e).padStart(2,"0");function qs(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${Fn(t.getMonth()+1)}-${Fn(t.getDate())} ${Fn(t.getHours())}:${Fn(t.getMinutes())}`}var Xt=require("react/jsx-runtime");function Gf({activities:e}){let t=je();if(e.length===0)return(0,Xt.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,Xt.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,Xt.jsxs)("li",{className:"kanban-activity-item",children:[(0,Xt.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,Xt.jsxs)("p",{className:"kanban-activity-description",children:[(0,Xt.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",Wf(o,t)]}),(0,Xt.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:qs(o.ts),children:qs(o.ts)})]},o.id)})})}var G=require("react/jsx-runtime");function zf({open:e,card:t,labels:a,activities:o,onOpenChange:r,onSave:n,onDelete:l,onChatWithAgent:s}){let i=je(),[u,c]=(0,Cr.useState)({id:"",title:"",note:"",label:"",priority:""}),[d,f]=(0,Cr.useState)(!1);(0,Cr.useEffect)(()=>{e&&c({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""})},[e,t]);let h=p=>c(m=>({...m,...p}));return(0,G.jsx)(xo,{open:e,onOpenChange:r,children:(0,G.jsxs)(Sa,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:p=>p.preventDefault(),children:[(0,G.jsx)(ya,{children:(0,G.jsx)(Ra,{className:"kanban-sr-only",children:i(t?"editCard":"addCard")})}),(0,G.jsxs)("div",{className:"kanban-form-stack",children:[(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsxs)(Ua,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,G.jsx)("span",{children:i("fieldTitle")}),t&&(0,G.jsxs)("span",{className:"kanban-field-id",children:[i("fieldId"),": ",t.id]})]}),(0,G.jsx)(zt,{id:"card-title",value:u.title,placeholder:i("titlePlaceholder"),onChange:p=>h({title:p.target.value})})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{children:i("fieldLabel")}),(0,G.jsxs)(Ns,{value:u.label||"__none__",onValueChange:p=>h({label:p==="__none__"?"":p}),children:[(0,G.jsx)(Tn,{children:(0,G.jsx)(_s,{placeholder:i("noLabel")})}),(0,G.jsxs)(En,{children:[(0,G.jsx)(yo,{value:"__none__",children:i("noLabel")}),a.map(p=>(0,G.jsx)(yo,{value:p.name,children:p.name},p.name))]})]})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{children:i("fieldPriority")}),(0,G.jsxs)(Ns,{value:u.priority||"__none__",onValueChange:p=>h({priority:p==="__none__"?"":p}),children:[(0,G.jsx)(Tn,{children:(0,G.jsx)(_s,{placeholder:i("noPriority")})}),(0,G.jsxs)(En,{children:[(0,G.jsx)(yo,{value:"__none__",children:i("noPriority")}),On.map(p=>{let m=Kt[p];return(0,G.jsx)(yo,{value:p,children:(0,G.jsxs)("span",{className:"kanban-inline-priority",children:[(0,G.jsx)("span",{className:"kanban-priority-dot",style:{background:m.color}}),m.label]})},p)})]})]})]}),(0,G.jsxs)("div",{className:"kanban-form-field",children:[(0,G.jsx)(Ua,{htmlFor:"card-note",children:i("fieldNote")}),(0,G.jsx)(Hs,{id:"card-note",value:u.note,placeholder:i("notePlaceholder"),rows:5,onChange:p=>h({note:p.target.value})})]}),t&&(0,G.jsxs)("div",{className:"kanban-activity-box",children:[(0,G.jsx)(Ua,{className:"kanban-muted-small",children:i("activityTitle")}),(0,G.jsx)("div",{className:"kanban-activity-scroll",children:(0,G.jsx)(Gf,{activities:o})})]})]}),(0,G.jsxs)(lr,{children:[t&&l&&(0,G.jsxs)(Me,{variant:"outline",className:"kanban-dialog-delete",disabled:d,onClick:async()=>{f(!0);let p=await l(t);f(!1),p!==!1&&r(!1)},children:[(0,G.jsx)(_t,{className:"kanban-icon"}),i("delete")]}),(0,G.jsxs)(hr,{children:[(0,G.jsx)(xr,{asChild:!0,children:(0,G.jsxs)(Me,{variant:"outline",disabled:!u.title.trim()&&!u.note.trim(),children:[(0,G.jsx)(jo,{className:"kanban-icon"}),i("chatWithAgent")]})}),(0,G.jsxs)(wo,{align:"end",children:[(0,G.jsx)(Gt,{onClick:()=>{s(u,"current"),r(!1)},children:i("chatCurrentSession")}),(0,G.jsx)(Gt,{onClick:()=>{s(u,"new"),r(!1)},children:i("chatNewSession")})]})]}),(0,G.jsx)(Me,{variant:"outline",disabled:d||!u.title.trim(),onClick:async()=>{f(!0);let p=await n(u);f(!1),p!==!1&&r(!1)},children:i("save")})]})]})})}var Kf=require("react/jsx-runtime");function nC({variant:e,className:t}={}){return Q("kanban-badge",`kanban-badge--${e??"default"}`,t)}function Vs({className:e,variant:t,...a}){return(0,Kf.jsx)("div",{className:nC({variant:t,className:e}),...a})}var Ga=H(require("react"),1);var za=require("react/jsx-runtime"),Lr=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-card",e),...t}));Lr.displayName="Card";var lC=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-card-header",e),...t}));lC.displayName="CardHeader";var sC=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-ui-card-title",e),...t}));sC.displayName="CardTitle";var iC=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-card-description",e),...t}));iC.displayName="CardDescription";var br=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-card-content",e),...t}));br.displayName="CardContent";var uC=Ga.forwardRef(({className:e,...t},a)=>(0,za.jsx)("div",{ref:a,className:Q("kanban-card-footer",e),...t}));uC.displayName="CardFooter";var Ft=require("react/jsx-runtime");function Xf({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=Vr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}}),u=e.priority?Kt[e.priority]:null,c=Vf(t,e.label);return(0,Ft.jsx)("div",{ref:n,style:{transform:tt.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,Ft.jsx)(Lr,{className:"kanban-card",children:(0,Ft.jsxs)(br,{className:"kanban-sortable-card-content",children:[(e.label||u)&&(0,Ft.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,Ft.jsx)(Vs,{variant:"secondary",className:"kanban-card-badge",style:{background:c,color:"#0b1220"},children:e.label}),u&&(0,Ft.jsx)(Vs,{variant:"secondary",className:"kanban-card-badge",style:{background:u.color,color:"#0b1220"},children:u.label})]}),(0,Ft.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,Ft.jsx)("p",{className:"kanban-card-note",children:e.note})]})})})}var lt=require("react/jsx-runtime");function jf({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Br({id:e.id,data:{type:"column"}}),s=je();return(0,lt.jsxs)("div",{ref:n,className:`kanban-column${l?" is-over":""}`,children:[(0,lt.jsxs)("div",{className:"kanban-column-header",children:[(0,lt.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,lt.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,lt.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,lt.jsx)(qr,{items:t.map(i=>i.id),strategy:Ur,children:t.map(i=>(0,lt.jsx)(Xf,{card:i,labels:a,onOpen:r},i.id))}),t.length===0&&(0,lt.jsx)("p",{className:"kanban-column-empty",children:s("emptyColumn")})]}),(0,lt.jsx)("div",{className:"kanban-column-footer",children:(0,lt.jsxs)(Me,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,lt.jsx)(Nt,{className:"kanban-icon"}),s("addCard")]})})]})}var Ir=require("react");var be=require("react/jsx-runtime");function dC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=Vr({id:e.id}),d=je();return(0,be.jsxs)("div",{ref:i,style:{transform:tt.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,be.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,be.jsx)(Ko,{className:"kanban-icon"})}),(0,be.jsx)(zt,{value:t,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,be.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,be.jsx)(_t,{className:"kanban-icon"})})]})}function $f({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=je(),[i,u]=(0,Ir.useState)({}),[c,d]=(0,Ir.useState)(""),f=Ar(eo(ea,{activationConstraint:{distance:8}}),eo(Qt,{coordinateGetter:Wr}));(0,Ir.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let h=m=>{let g=(i[m]??"").trim(),v=t.find(C=>C.id===m);v&&g&&g!==v.title&&r(m,g)},p=m=>{let{active:g,over:v}=m;v&&g.id!==v.id&&o(String(g.id),String(v.id))};return(0,be.jsx)(xo,{open:e,onOpenChange:a,children:(0,be.jsxs)(Sa,{className:"kanban-dialog-medium",children:[(0,be.jsxs)(ya,{children:[(0,be.jsx)(Ra,{children:s("columnEdit")}),(0,be.jsx)(sr,{children:s("columnEditDesc")})]}),(0,be.jsx)(Fr,{sensors:f,collisionDetection:Si,onDragEnd:p,children:(0,be.jsx)(qr,{items:t.map(m=>m.id),strategy:Ur,children:(0,be.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,be.jsx)(dC,{column:m,value:i[m.id]??m.title,onValueChange:g=>u(v=>({...v,[m.id]:g})),onCommit:()=>h(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,be.jsxs)("div",{className:"kanban-sortable-row",children:[(0,be.jsx)(zt,{value:c,placeholder:s("newColumnPlaceholder"),onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,be.jsxs)(Me,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,be.jsx)(Nt,{className:"kanban-icon"}),s("add")]})]})]})})}var Ro=require("react");var Pe=require("react/jsx-runtime");function Yf({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=je(),[s,i]=(0,Ro.useState)({}),[u,c]=(0,Ro.useState)(""),[d,f]=(0,Ro.useState)("#38bdf8");(0,Ro.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(p=>[p.name,{name:p.name,color:p.color}]))),c(""),f("#38bdf8"))},[e]);let h=p=>{let m=s[p];if(!m)return;let g=t.find(C=>C.name===p),v=m.name.trim();g&&v&&(v!==p||m.color!==g.color)&&r(p,v,m.color)};return(0,Pe.jsx)(xo,{open:e,onOpenChange:a,children:(0,Pe.jsxs)(Sa,{className:"kanban-dialog-medium",children:[(0,Pe.jsxs)(ya,{children:[(0,Pe.jsx)(Ra,{children:l("labelEdit")}),(0,Pe.jsx)(sr,{children:l("labelEditDesc")})]}),(0,Pe.jsx)("div",{className:"kanban-label-list",children:t.map(p=>{let m=s[p.name]??{name:p.name,color:p.color};return(0,Pe.jsxs)("div",{className:"kanban-label-row",children:[(0,Pe.jsx)("input",{type:"color",value:m.color,className:"kanban-color-input",onChange:g=>i(v=>({...v,[p.name]:{...m,color:g.target.value}})),onBlur:()=>h(p.name)}),(0,Pe.jsx)(zt,{value:m.name,onChange:g=>i(v=>({...v,[p.name]:{...m,name:g.target.value}})),onBlur:()=>h(p.name),onKeyDown:g=>{g.key==="Enter"&&g.target.blur()}}),(0,Pe.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(p.name),children:(0,Pe.jsx)(_t,{className:"kanban-icon"})})]},p.name)})}),(0,Pe.jsx)(lr,{className:"kanban-dialog-footer-layout",children:(0,Pe.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Pe.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:p=>f(p.target.value)}),(0,Pe.jsx)(zt,{value:u,placeholder:l("newLabelPlaceholder"),onChange:p=>c(p.target.value),onKeyDown:p=>{p.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Pe.jsxs)(Me,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Pe.jsx)(Nt,{className:"kanban-icon"}),l("add")]})]})})]})})}function Bn(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var Ws=new Map,Gs=0,Nn=new Set;function Zf(e,t){Ws.set(e,t),Gs++;for(let a of Nn)a()}function Jf(e){let t=Ws.get(e);if(t==null)return null;Ws.delete(e),Gs++;for(let a of Nn)a();return t}function Qf(e){return Nn.add(e),()=>{Nn.delete(e)}}function ep(){return Gs}function tp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(ho("fieldId")+": "+t),a&&n.push(a),r&&n.push(ho("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var K=require("react/jsx-runtime");function ap(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.workspaces,n=e.sessions,l=a?a(b=>b.items):[],s=a?a(b=>b.recentWorkspaceId):void 0,i=Array.isArray(l)?l.find(b=>Array.isArray(b.sessionIds)&&b.sessionIds.includes(t)):void 0,u=i?i.workspaceId:s||"default",c=je(),[d,f]=(0,fe.useState)(null),[h,p]=(0,fe.useState)(""),[m,g]=(0,fe.useState)([]),[v,C]=(0,fe.useState)(null),[x,L]=(0,fe.useState)(null),[w,I]=(0,fe.useState)(!1),[y,R]=(0,fe.useState)(!1),[P,E]=(0,fe.useState)(!1),[T,O]=(0,fe.useState)(""),F=(0,fe.useRef)(null),_=(0,fe.useRef)(u),Y=(0,fe.useRef)(0),X=(0,fe.useRef)(0);_.current=u;let[N,V]=(0,fe.useState)(null),W=Ar(eo(ea,{activationConstraint:{distance:8}}),eo(Qt,{coordinateGetter:Wr})),A=(0,fe.useCallback)((b,D,k)=>{_.current!==D||k<X.current||(X.current=k,b&&b.board&&(f({...b.board,activities:Array.isArray(b.board.activities)?b.board.activities:[]}),p("")),Array.isArray(b&&b.warnings)&&b.warnings.length>0&&g(B=>[...B,...b.warnings]))},[]),re=(0,fe.useCallback)(async(b,D={})=>{let k=++Y.current;try{let B=await Bn(b,D,u);return A(B,u,k),!0}catch(B){return p(c("actionFailed")+String(B&&B.message||B)),!1}},[u,A,c]),Z=(0,fe.useCallback)(()=>{let b=++Y.current;E(!0),Bn("get",{},u).then(D=>A(D,u,b)).catch(D=>p(c("loadFailed")+String(D&&D.message||D))).finally(()=>E(!1))},[u,A,c]);(0,fe.useEffect)(()=>{let b=!0,D=++Y.current;return f(null),L(null),C(null),p(""),g([]),Bn("get",{},u).then(k=>{b&&A(k,u,D)}).catch(k=>{b&&p(c("loadFailed")+String(k&&k.message||k))}),()=>{b=!1}},[u,A,c]),(0,fe.useLayoutEffect)(()=>{let b=j=>{let z=j;for(;z;){let te=getComputedStyle(z).overflowY;if(te==="auto"||te==="scroll")return z;z=z.parentElement}return null},D=()=>{let j=F.current;if(!j)return;let z=j.getBoundingClientRect().top,te=b(j.parentElement),se=window.innerHeight;if(te){let ke=te.querySelector("[data-composer-seat]"),mt=ke?ke.getBoundingClientRect().top:0;ke&&ke.offsetHeight>0&&mt>z?se=mt:se=te.getBoundingClientRect().bottom}V(Math.max(0,Math.floor(se-z)))};D();let k=b(F.current?.parentElement??null),B=new ResizeObserver(D);return B.observe(document.documentElement),k&&B.observe(k),window.addEventListener("resize",D),()=>{B.disconnect(),window.removeEventListener("resize",D)}},[d!==null]);let ne=(0,fe.useCallback)(b=>{let D=yi(b),k=D.length>0?D:tl(b),B=Uo(k,"id");if(B==null)return[];if(new Set((d?.columns??[]).map(z=>z.id)).has(String(B))){let z=(d?.cards??[]).filter(te=>te.columnId===B).map(te=>te.id);if(z.length>0){let te=Tr({...b,droppableContainers:b.droppableContainers.filter(se=>se.id!==B&&z.includes(String(se.id)))});te.length>0&&(B=te[0].id)}}return[{id:B}]},[d]),he=b=>{if(b.active.data.current?.type==="card"){let D=d?.cards.find(k=>k.id===b.active.id);D&&C(D)}},Ie=b=>{let{active:D,over:k}=b;if(C(null),!k||!d)return;let B=D.data.current?.type,j=k.data.current?.type;if(B==="card")if(j==="card"){let z=d.cards.find(He=>He.id===k.id);if(!z||z.id===D.id)return;let te=d.cards.filter(He=>He.columnId===z.columnId),se=te.findIndex(He=>He.id===z.id),ke=D.rect.current.translated?.top,mt=typeof ke=="number"&&ke>k.rect.top+k.rect.height/2,gt=se>=0?se+(mt?1:0):void 0,Ka=te.findIndex(He=>He.id===D.id);gt!=null&&Ka>=0&&Ka<gt&&gt--,re("moveCard",{id:String(D.id),columnId:z.columnId,toIndex:gt})}else j==="column"&&re("moveCard",{id:String(D.id),columnId:String(k.id)})},ge=b=>{if(!x)return Promise.resolve(!1);if(x.card){let D={id:x.card.id};return b.title!==x.card.title&&(D.title=b.title),b.note!==x.card.note&&(D.note=b.note),b.label!==(x.card.label??"")&&(D.label=b.label),b.priority!==(x.card.priority??"")&&(D.priority=b.priority),re("updateCard",D)}return re("addCard",{columnId:x.columnId,title:b.title,note:b.note,label:b.label||void 0,priority:b.priority||void 0})},we=(0,fe.useCallback)((b,D)=>{let k=tp(b);if(k){if(D==="current"){o?.setDraft(k);return}!r?.connectWorkspace||!n?.open||r.connectWorkspace(u).then(B=>{B&&(Zf(B,k),n.open(B))}).catch(B=>p(c("actionFailed")+String(B&&B.message||B)))}},[o,r,n,u,c]);return d?(0,K.jsxs)("div",{ref:F,className:"kanban-root kanban-view",style:N!=null?{height:N}:void 0,children:[h&&(0,K.jsx)("p",{className:"kanban-error",children:h}),m.length>0&&(0,K.jsxs)("div",{className:"kanban-warning",children:[(0,K.jsxs)("div",{className:"kanban-warning-body",children:[(0,K.jsx)("p",{className:"kanban-warning-title",children:c("warnings")}),m.map((b,D)=>(0,K.jsx)("p",{className:"kanban-warning-item",children:b},D))]}),(0,K.jsx)(Me,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:c("dismiss")})]}),(0,K.jsxs)(Fr,{sensors:W,collisionDetection:ne,onDragStart:he,onDragEnd:Ie,children:[(0,K.jsxs)("div",{className:"kanban-content",children:[(0,K.jsxs)("div",{className:"kanban-toolbar",children:[(0,K.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("refresh"),"aria-label":c("refresh"),disabled:P,onClick:Z,children:(0,K.jsx)($o,{className:P?"kanban-animate-spin":void 0})}),(0,K.jsxs)(hr,{children:[(0,K.jsx)(xr,{asChild:!0,children:(0,K.jsx)(Me,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:c("settings"),children:(0,K.jsx)(Yo,{className:"kanban-icon"})})}),(0,K.jsxs)(wo,{align:"start",children:[(0,K.jsxs)(Gt,{onClick:()=>I(!0),children:[(0,K.jsx)(Xo,{className:"kanban-icon"}),c("columnEdit")]}),(0,K.jsxs)(Gt,{onClick:()=>R(!0),children:[(0,K.jsx)(Zo,{className:"kanban-icon"}),c("labelEdit")]})]})]}),(0,K.jsxs)(hr,{children:[(0,K.jsx)(xr,{asChild:!0,children:(0,K.jsx)(Me,{variant:T?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:c("priorityFilter"),children:(0,K.jsx)(zo,{className:"kanban-icon"})})}),(0,K.jsxs)(wo,{align:"start",children:[(0,K.jsxs)(Gt,{onClick:()=>O(""),children:[(0,K.jsx)("span",{className:"kanban-filter-check",children:!T&&(0,K.jsx)(ta,{className:"kanban-icon"})}),c("all")]}),On.map(b=>(0,K.jsxs)(Gt,{onClick:()=>O(b),children:[(0,K.jsx)("span",{className:"kanban-filter-check",children:T===b&&(0,K.jsx)(ta,{className:"kanban-icon"})}),(0,K.jsx)("span",{className:"kanban-priority-dot",style:{background:Kt[b].color}}),Kt[b].label]},b))]})]})]}),(0,K.jsx)("div",{className:"kanban-board-scroll",children:d.columns.map(b=>{let D=d.cards.filter(k=>k.columnId===b.id&&(!T||k.priority===T));return(0,K.jsx)(jf,{column:b,cards:D,labels:d.labels,onAddCard:k=>L({card:null,columnId:k.id}),onOpenCard:k=>L({card:k,columnId:k.columnId})},b.id)})})]}),(0,K.jsx)(Vi,{children:v?(0,K.jsx)(Lr,{className:"kanban-drag-preview",children:(0,K.jsx)(br,{className:"kanban-drag-preview-content",children:(0,K.jsx)("p",{className:"kanban-drag-preview-title",children:v.title})})}):null})]}),(0,K.jsx)(zf,{open:x!==null,card:x?.card??null,labels:d.labels,activities:x?.card?d.activities.filter(b=>b.cardId===x.card.id):[],onOpenChange:b=>{b||L(null)},onSave:ge,onDelete:b=>re("deleteCard",{id:b.id}),onChatWithAgent:we}),(0,K.jsx)($f,{open:w,columns:d.columns,onOpenChange:I,onReorder:(b,D)=>{let k=d.columns.findIndex(B=>B.id===D);k>=0&&re("moveColumn",{id:b,toIndex:k})},onRename:(b,D)=>re("renameColumn",{id:b,title:D}),onDelete:b=>re("deleteColumn",{id:b}),onAdd:b=>re("addColumn",{title:b})}),(0,K.jsx)(Yf,{open:y,labels:d.labels,onOpenChange:R,onAdd:(b,D)=>re("addLabel",{name:b,color:D}),onUpdate:(b,D,k)=>re("updateLabel",{name:b,newName:D,color:k}),onDelete:b=>re("deleteLabel",{name:b})})]}):(0,K.jsx)("div",{className:"kanban-root kanban-loading",children:h?(0,K.jsx)("p",{className:"kanban-error",children:h}):(0,K.jsx)("p",{className:"kanban-muted-text",children:c("loading")})})}var _n=require("react");function op({sessionId:e,inputActions:t}){let a=(0,_n.useSyncExternalStore)(Qf,ep);return(0,_n.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Jf(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var rp={name:"dsh-kanban",inject:["slots","locale"],apply(e){bd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("workspaces"),o=e.get("sessions");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>ho("boardTab")},r=>(0,zs.createElement)(ap,{...r,workspaces:a,sessions:o}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},r=>(0,zs.createElement)(op,r)))}};var np="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+np+"]")){let e=document.createElement("style");e.setAttribute(np,""),e.textContent=ai,document.head.appendChild(e)}var cC=rp;
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-up.js:
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