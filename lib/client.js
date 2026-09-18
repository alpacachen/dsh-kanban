window.__ModuleLoader__.load({
  id: "@alpacachen/dsh-kanban",
  factory: function (require) {
    var module = { exports: {} }
    var exports = module.exports
"use strict";var qp=Object.create;var Mr=Object.defineProperty;var Up=Object.getOwnPropertyDescriptor;var Vp=Object.getOwnPropertyNames;var Wp=Object.getPrototypeOf,Gp=Object.prototype.hasOwnProperty;var oi=e=>{throw TypeError(e)};var zp=(e,t)=>{for(var a in t)Mr(e,a,{get:t[a],enumerable:!0})},ri=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Vp(t))!Gp.call(e,r)&&r!==a&&Mr(e,r,{get:()=>t[r],enumerable:!(o=Up(t,r))||o.enumerable});return e};var U=(e,t,a)=>(a=e!=null?qp(Wp(e)):{},ri(t||!e||!e.__esModule?Mr(a,"default",{value:e,enumerable:!0}):a,e)),Xp=e=>ri(Mr({},"__esModule",{value:!0}),e);var ni=(e,t,a)=>t.has(e)||oi("Cannot "+a);var Ge=(e,t,a)=>(ni(e,t,"read from private field"),a?a.call(e):t.get(e)),li=(e,t,a)=>t.has(e)?oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Xn=(e,t,a,o)=>(ni(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a);var RC={};zp(RC,{default:()=>yC});module.exports=Xp(RC);var si=`/*
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
`;var Zs=require("react");var fe=require("react");var w=U(require("react")),Ia=require("react-dom");var ve=require("react");function ui(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,ve.useMemo)(()=>o=>{t.forEach(r=>r(o))},t)}var Ho=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ma(e){let t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Ar(e){return"nodeType"in e}function ze(e){var t,a;return e?ma(e)?e:Ar(e)&&(t=(a=e.ownerDocument)==null?void 0:a.defaultView)!=null?t:window:window}function Tr(e){let{Document:t}=ze(e);return e instanceof t}function to(e){return ma(e)?!1:e instanceof ze(e).HTMLElement}function jn(e){return e instanceof ze(e).SVGElement}function ha(e){return e?ma(e)?e.document:Ar(e)?Tr(e)?e:to(e)||jn(e)?e.ownerDocument:document:document:document}var nt=Ho?ve.useLayoutEffect:ve.useEffect;function qo(e){let t=(0,ve.useRef)(e);return nt(()=>{t.current=e}),(0,ve.useCallback)(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function di(){let e=(0,ve.useRef)(null),t=(0,ve.useCallback)((o,r)=>{e.current=setInterval(o,r)},[]),a=(0,ve.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,a]}function ao(e,t){t===void 0&&(t=[e]);let a=(0,ve.useRef)(e);return nt(()=>{a.current!==e&&(a.current=e)},t),a}function oo(e,t){let a=(0,ve.useRef)();return(0,ve.useMemo)(()=>{let o=e(a.current);return a.current=o,o},[...t])}function Uo(e){let t=qo(e),a=(0,ve.useRef)(null),o=(0,ve.useCallback)(r=>{r!==a.current&&t?.(r,a.current),a.current=r},[]);return[a,o]}function Vo(e){let t=(0,ve.useRef)();return(0,ve.useEffect)(()=>{t.current=e},[e]),t.current}var Kn={};function ga(e,t){return(0,ve.useMemo)(()=>{if(t)return t;let a=Kn[e]==null?0:Kn[e]+1;return Kn[e]=a,e+"-"+a},[e,t])}function ci(e){return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return o.reduce((n,l)=>{let s=Object.entries(l);for(let[i,u]of s){let c=n[i];c!=null&&(n[i]=c+e*u)}return n},{...t})}}var xa=ci(1),La=ci(-1);function jp(e){return"clientX"in e&&"clientY"in e}function ro(e){if(!e)return!1;let{KeyboardEvent:t}=ze(e.target);return t&&e instanceof t}function $p(e){if(!e)return!1;let{TouchEvent:t}=ze(e.target);return t&&e instanceof t}function Wo(e){if($p(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:a}=e.touches[0];return{x:t,y:a}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:a}=e.changedTouches[0];return{x:t,y:a}}}return jp(e)?{x:e.clientX,y:e.clientY}:null}var rt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:a}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(a?Math.round(a):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:a}=e;return"scaleX("+t+") scaleY("+a+")"}},Transform:{toString(e){if(e)return[rt.Translate.toString(e),rt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:a,easing:o}=e;return t+" "+a+"ms "+o}}}),ii="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function fi(e){return e.matches(ii)?e:e.querySelector(ii)}var Ca=U(require("react")),Yp={display:"none"};function pi(e){let{id:t,value:a}=e;return Ca.default.createElement("div",{id:t,style:Yp},a)}function mi(e){let{id:t,announcement:a,ariaLiveType:o="assertive"}=e,r={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ca.default.createElement("div",{id:t,style:r,role:"status","aria-live":o,"aria-atomic":!0},a)}function hi(){let[e,t]=(0,Ca.useState)("");return{announce:(0,Ca.useCallback)(o=>{o!=null&&t(o)},[]),announcement:e}}var ki=(0,w.createContext)(null);function Zp(e){let t=(0,w.useContext)(ki);(0,w.useEffect)(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Qp(){let[e]=(0,w.useState)(()=>new Set),t=(0,w.useCallback)(o=>(e.add(o),()=>e.delete(o)),[e]);return[(0,w.useCallback)(o=>{let{type:r,event:n}=o;e.forEach(l=>{var s;return(s=l[r])==null?void 0:s.call(l,n)})},[e]),t]}var Jp={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},em={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was moved over droppable area "+a.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:a}=e;return a?"Draggable item "+t.id+" was dropped over droppable area "+a.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function tm(e){let{announcements:t=em,container:a,hiddenTextDescribedById:o,screenReaderInstructions:r=Jp}=e,{announce:n,announcement:l}=hi(),s=ga("DndLiveRegion"),[i,u]=(0,w.useState)(!1);if((0,w.useEffect)(()=>{u(!0)},[]),Zp((0,w.useMemo)(()=>({onDragStart(d){let{active:f}=d;n(t.onDragStart({active:f}))},onDragMove(d){let{active:f,over:h}=d;t.onDragMove&&n(t.onDragMove({active:f,over:h}))},onDragOver(d){let{active:f,over:h}=d;n(t.onDragOver({active:f,over:h}))},onDragEnd(d){let{active:f,over:h}=d;n(t.onDragEnd({active:f,over:h}))},onDragCancel(d){let{active:f,over:h}=d;n(t.onDragCancel({active:f,over:h}))}}),[n,t])),!i)return null;let c=w.default.createElement(w.default.Fragment,null,w.default.createElement(pi,{id:o,value:r.draggable}),w.default.createElement(mi,{id:s,announcement:l}));return a?(0,Ia.createPortal)(c,a):c}var Me;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Me||(Me={}));function Or(){}function no(e,t){return(0,w.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Br(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.useMemo)(()=>[...t].filter(o=>o!=null),[...t])}var It=Object.freeze({x:0,y:0});function rl(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function am(e,t){let a=Wo(e);if(!a)return"0 0";let o={x:(a.x-t.left)/t.width*100,y:(a.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function nl(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return a-o}function om(e,t){let{data:{value:a}}=e,{data:{value:o}}=t;return o-a}function Qn(e){let{left:t,top:a,height:o,width:r}=e;return[{x:t,y:a},{x:t+r,y:a},{x:t,y:a+o},{x:t+r,y:a+o}]}function jo(e,t){if(!e||e.length===0)return null;let[a]=e;return t?a[t]:a}function gi(e,t,a){return t===void 0&&(t=e.left),a===void 0&&(a=e.top),{x:t+e.width*.5,y:a+e.height*.5}}var Di=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=gi(t,t.left,t.top),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=rl(gi(i),r);n.push({id:s,data:{droppableContainer:l,value:u}})}}return n.sort(nl)},Nr=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=Qn(t),n=[];for(let l of o){let{id:s}=l,i=a.get(s);if(i){let u=Qn(i),c=r.reduce((f,h,g)=>f+rl(u[g],h),0),d=Number((c/4).toFixed(4));n.push({id:s,data:{droppableContainer:l,value:d}})}}return n.sort(nl)};function rm(e,t){let a=Math.max(t.top,e.top),o=Math.max(t.left,e.left),r=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),l=r-o,s=n-a;if(o<r&&a<n){let i=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(i+u-c);return Number(d.toFixed(4))}return 0}var ll=e=>{let{collisionRect:t,droppableRects:a,droppableContainers:o}=e,r=[];for(let n of o){let{id:l}=n,s=a.get(l);if(s){let i=rm(s,t);i>0&&r.push({id:l,data:{droppableContainer:n,value:i}})}}return r.sort(om)};function nm(e,t){let{top:a,left:o,bottom:r,right:n}=t;return a<=e.y&&e.y<=r&&o<=e.x&&e.x<=n}var Mi=e=>{let{droppableContainers:t,droppableRects:a,pointerCoordinates:o}=e;if(!o)return[];let r=[];for(let n of t){let{id:l}=n,s=a.get(l);if(s&&nm(o,s)){let u=Qn(s).reduce((d,f)=>d+rl(o,f),0),c=Number((u/4).toFixed(4));r.push({id:l,data:{droppableContainer:n,value:c}})}}return r.sort(nl)};function lm(e,t,a){return{...e,scaleX:t&&a?t.width/a.width:1,scaleY:t&&a?t.height/a.height:1}}function Ai(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:It}function sm(e){return function(a){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return r.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...a})}}var im=sm(1);function Ti(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function um(e,t,a){let o=Ti(t);if(!o)return e;let{scaleX:r,scaleY:n,x:l,y:s}=o,i=e.left-l-(1-r)*parseFloat(a),u=e.top-s-(1-n)*parseFloat(a.slice(a.indexOf(" ")+1)),c=r?e.width/r:e.width,d=n?e.height/n:e.height;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i}}var dm={ignoreTransform:!1};function Sa(e,t){t===void 0&&(t=dm);let a=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:u,transformOrigin:c}=ze(e).getComputedStyle(e);u&&(a=um(a,u,c))}let{top:o,left:r,width:n,height:l,bottom:s,right:i}=a;return{top:o,left:r,width:n,height:l,bottom:s,right:i}}function xi(e){return Sa(e,{ignoreTransform:!0})}function cm(e){let t=e.innerWidth,a=e.innerHeight;return{top:0,left:0,right:t,bottom:a,width:t,height:a}}function fm(e,t){return t===void 0&&(t=ze(e).getComputedStyle(e)),t.position==="fixed"}function pm(e,t){t===void 0&&(t=ze(e).getComputedStyle(e));let a=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(r=>{let n=t[r];return typeof n=="string"?a.test(n):!1})}function $o(e,t){let a=[];function o(r){if(t!=null&&a.length>=t||!r)return a;if(Tr(r)&&r.scrollingElement!=null&&!a.includes(r.scrollingElement))return a.push(r.scrollingElement),a;if(!to(r)||jn(r)||a.includes(r))return a;let n=ze(e).getComputedStyle(r);return r!==e&&pm(r,n)&&a.push(r),fm(r,n)?a:o(r.parentNode)}return e?o(e):a}function Ei(e){let[t]=$o(e,1);return t??null}function $n(e){return!Ho||!e?null:ma(e)?e:Ar(e)?Tr(e)||e===ha(e).scrollingElement?window:to(e)?e:null:null}function Oi(e){return ma(e)?e.scrollX:e.scrollLeft}function Fi(e){return ma(e)?e.scrollY:e.scrollTop}function Jn(e){return{x:Oi(e),y:Fi(e)}}var Ee;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ee||(Ee={}));function Bi(e){return!Ho||!e?!1:e===document.scrollingElement}function Ni(e){let t={x:0,y:0},a=Bi(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-a.width,y:e.scrollHeight-a.height},r=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,s=e.scrollLeft>=o.x;return{isTop:r,isLeft:n,isBottom:l,isRight:s,maxScroll:o,minScroll:t}}var mm={x:.2,y:.2};function hm(e,t,a,o,r){let{top:n,left:l,right:s,bottom:i}=a;o===void 0&&(o=10),r===void 0&&(r=mm);let{isTop:u,isBottom:c,isLeft:d,isRight:f}=Ni(e),h={x:0,y:0},g={x:0,y:0},m={height:t.height*r.y,width:t.width*r.x};return!u&&n<=t.top+m.height?(h.y=Ee.Backward,g.y=o*Math.abs((t.top+m.height-n)/m.height)):!c&&i>=t.bottom-m.height&&(h.y=Ee.Forward,g.y=o*Math.abs((t.bottom-m.height-i)/m.height)),!f&&s>=t.right-m.width?(h.x=Ee.Forward,g.x=o*Math.abs((t.right-m.width-s)/m.width)):!d&&l<=t.left+m.width&&(h.x=Ee.Backward,g.x=o*Math.abs((t.left+m.width-l)/m.width)),{direction:h,speed:g}}function gm(e){if(e===document.scrollingElement){let{innerWidth:n,innerHeight:l}=window;return{top:0,left:0,right:n,bottom:l,width:n,height:l}}let{top:t,left:a,right:o,bottom:r}=e.getBoundingClientRect();return{top:t,left:a,right:o,bottom:r,width:e.clientWidth,height:e.clientHeight}}function _i(e){return e.reduce((t,a)=>xa(t,Jn(a)),It)}function xm(e){return e.reduce((t,a)=>t+Oi(a),0)}function Lm(e){return e.reduce((t,a)=>t+Fi(a),0)}function Hi(e,t){if(t===void 0&&(t=Sa),!e)return;let{top:a,left:o,bottom:r,right:n}=t(e);Ei(e)&&(r<=0||n<=0||a>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}var Cm=[["x",["left","right"],xm],["y",["top","bottom"],Lm]],zo=class{constructor(t,a){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let o=$o(a),r=_i(o);this.rect={...t},this.width=t.width,this.height=t.height;for(let[n,l,s]of Cm)for(let i of l)Object.defineProperty(this,i,{get:()=>{let u=s(o),c=r[n]-u;return this.rect[i]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},va=class{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(a=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...a)})},this.target=t}add(t,a,o){var r;(r=this.target)==null||r.addEventListener(t,a,o),this.listeners.push([t,a,o])}};function Im(e){let{EventTarget:t}=ze(e);return e instanceof t?e:ha(e)}function Yn(e,t){let a=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(a**2+o**2)>t:"x"in t&&"y"in t?a>t.x&&o>t.y:"x"in t?a>t.x:"y"in t?o>t.y:!1}var ft;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ft||(ft={}));function Li(e){e.preventDefault()}function vm(e){e.stopPropagation()}var ae;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ae||(ae={}));var qi={start:[ae.Space,ae.Enter],cancel:[ae.Esc],end:[ae.Space,ae.Enter,ae.Tab]},bm=(e,t)=>{let{currentCoordinates:a}=t;switch(e.code){case ae.Right:return{...a,x:a.x+25};case ae.Left:return{...a,x:a.x-25};case ae.Down:return{...a,y:a.y+25};case ae.Up:return{...a,y:a.y-25}}},ta=class{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;let{event:{target:a}}=t;this.props=t,this.listeners=new va(ha(a)),this.windowListeners=new va(ze(a)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ft.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:t,onStart:a}=this.props,o=t.node.current;o&&Hi(o),a(It)}handleKeyDown(t){if(ro(t)){let{active:a,context:o,options:r}=this.props,{keyboardCodes:n=qi,coordinateGetter:l=bm,scrollBehavior:s="smooth"}=r,{code:i}=t;if(n.end.includes(i)){this.handleEnd(t);return}if(n.cancel.includes(i)){this.handleCancel(t);return}let{collisionRect:u}=o.current,c=u?{x:u.left,y:u.top}:It;this.referenceCoordinates||(this.referenceCoordinates=c);let d=l(t,{active:a,context:o.current,currentCoordinates:c});if(d){let f=La(d,c),h={x:0,y:0},{scrollableAncestors:g}=o.current;for(let m of g){let p=t.code,{isTop:x,isRight:C,isLeft:L,isBottom:I,maxScroll:v,minScroll:b}=Ni(m),y=gm(m),R={x:Math.min(p===ae.Right?y.right-y.width/2:y.right,Math.max(p===ae.Right?y.left:y.left+y.width/2,d.x)),y:Math.min(p===ae.Down?y.bottom-y.height/2:y.bottom,Math.max(p===ae.Down?y.top:y.top+y.height/2,d.y))},k=p===ae.Right&&!C||p===ae.Left&&!L,O=p===ae.Down&&!I||p===ae.Up&&!x;if(k&&R.x!==d.x){let E=m.scrollLeft+f.x,T=p===ae.Right&&E<=v.x||p===ae.Left&&E>=b.x;if(T&&!f.y){m.scrollTo({left:E,behavior:s});return}T?h.x=m.scrollLeft-E:h.x=p===ae.Right?m.scrollLeft-v.x:m.scrollLeft-b.x,h.x&&m.scrollBy({left:-h.x,behavior:s});break}else if(O&&R.y!==d.y){let E=m.scrollTop+f.y,T=p===ae.Down&&E<=v.y||p===ae.Up&&E>=b.y;if(T&&!f.x){m.scrollTo({top:E,behavior:s});return}T?h.y=m.scrollTop-E:h.y=p===ae.Down?m.scrollTop-v.y:m.scrollTop-b.y,h.y&&m.scrollBy({top:-h.y,behavior:s});break}}this.handleMove(t,xa(La(d,this.referenceCoordinates),h))}}}handleMove(t,a){let{onMove:o}=this.props;t.preventDefault(),o(a)}handleEnd(t){let{onEnd:a}=this.props;t.preventDefault(),this.detach(),a()}handleCancel(t){let{onCancel:a}=this.props;t.preventDefault(),this.detach(),a()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ta.activators=[{eventName:"onKeyDown",handler:(e,t,a)=>{let{keyboardCodes:o=qi,onActivation:r}=t,{active:n}=a,{code:l}=e.nativeEvent;if(o.start.includes(l)){let s=n.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),r?.({event:e.nativeEvent}),!0)}return!1}}];function Ci(e){return!!(e&&"distance"in e)}function Ii(e){return!!(e&&"delay"in e)}var Xo=class{constructor(t,a,o){var r;o===void 0&&(o=Im(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=a;let{event:n}=t,{target:l}=n;this.props=t,this.events=a,this.document=ha(l),this.documentListeners=new va(this.document),this.listeners=new va(o),this.windowListeners=new va(ze(l)),this.initialCoordinates=(r=Wo(n))!=null?r:It,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:t,props:{options:{activationConstraint:a,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(ft.Resize,this.handleCancel),this.windowListeners.add(ft.DragStart,Li),this.windowListeners.add(ft.VisibilityChange,this.handleCancel),this.windowListeners.add(ft.ContextMenu,Li),this.documentListeners.add(ft.Keydown,this.handleKeydown),a){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ii(a)){this.timeoutId=setTimeout(this.handleStart,a.delay),this.handlePending(a);return}if(Ci(a)){this.handlePending(a);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,a){let{active:o,onPending:r}=this.props;r(o,t,this.initialCoordinates,a)}handleStart(){let{initialCoordinates:t}=this,{onStart:a}=this.props;t&&(this.activated=!0,this.documentListeners.add(ft.Click,vm,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ft.SelectionChange,this.removeTextSelection),a(t))}handleMove(t){var a;let{activated:o,initialCoordinates:r,props:n}=this,{onMove:l,options:{activationConstraint:s}}=n;if(!r)return;let i=(a=Wo(t))!=null?a:It,u=La(r,i);if(!o&&s){if(Ci(s)){if(s.tolerance!=null&&Yn(u,s.tolerance))return this.handleCancel();if(Yn(u,s.distance))return this.handleStart()}if(Ii(s)&&Yn(u,s.tolerance))return this.handleCancel();this.handlePending(s,u);return}t.cancelable&&t.preventDefault(),l(i)}handleEnd(){let{onAbort:t,onEnd:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleCancel(){let{onAbort:t,onCancel:a}=this.props;this.detach(),this.activated||t(this.props.active),a()}handleKeydown(t){t.code===ae.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}},Sm={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}},aa=class extends Xo{constructor(t){let{event:a}=t,o=ha(a.target);super(t,Sm,o)}};aa.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return!a.isPrimary||a.button!==0?!1:(o?.({event:a}),!0)}}];var wm={move:{name:"mousemove"},end:{name:"mouseup"}},el;(function(e){e[e.RightClick=2]="RightClick"})(el||(el={}));var tl=class extends Xo{constructor(t){super(t,wm,ha(t.event.target))}};tl.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t;return a.button===el.RightClick?!1:(o?.({event:a}),!0)}}];var Zn={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}},al=class extends Xo{constructor(t){super(t,Zn)}static setup(){return window.addEventListener(Zn.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Zn.move.name,t)};function t(){}}};al.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:a}=e,{onActivation:o}=t,{touches:r}=a;return r.length>1?!1:(o?.({event:a}),!0)}}];var Go;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Go||(Go={}));var Fr;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Fr||(Fr={}));function ym(e){let{acceleration:t,activator:a=Go.Pointer,canScroll:o,draggingRect:r,enabled:n,interval:l=5,order:s=Fr.TreeOrder,pointerCoordinates:i,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:f}=e,h=Pm({delta:d,disabled:!n}),[g,m]=di(),p=(0,w.useRef)({x:0,y:0}),x=(0,w.useRef)({x:0,y:0}),C=(0,w.useMemo)(()=>{switch(a){case Go.Pointer:return i?{top:i.y,bottom:i.y,left:i.x,right:i.x}:null;case Go.DraggableRect:return r}},[a,r,i]),L=(0,w.useRef)(null),I=(0,w.useCallback)(()=>{let b=L.current;if(!b)return;let y=p.current.x*x.current.x,R=p.current.y*x.current.y;b.scrollBy(y,R)},[]),v=(0,w.useMemo)(()=>s===Fr.TreeOrder?[...u].reverse():u,[s,u]);(0,w.useEffect)(()=>{if(!n||!u.length||!C){m();return}for(let b of v){if(o?.(b)===!1)continue;let y=u.indexOf(b),R=c[y];if(!R)continue;let{direction:k,speed:O}=hm(b,R,C,t,f);for(let E of["x","y"])h[E][k[E]]||(O[E]=0,k[E]=0);if(O.x>0||O.y>0){m(),L.current=b,g(I,l),p.current=O,x.current=k;return}}p.current={x:0,y:0},x.current={x:0,y:0},m()},[t,I,o,m,n,l,JSON.stringify(C),JSON.stringify(h),g,u,v,c,JSON.stringify(f)])}var Rm={x:{[Ee.Backward]:!1,[Ee.Forward]:!1},y:{[Ee.Backward]:!1,[Ee.Forward]:!1}};function Pm(e){let{delta:t,disabled:a}=e,o=Vo(t);return oo(r=>{if(a||!o||!r)return Rm;let n={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[Ee.Backward]:r.x[Ee.Backward]||n.x===-1,[Ee.Forward]:r.x[Ee.Forward]||n.x===1},y:{[Ee.Backward]:r.y[Ee.Backward]||n.y===-1,[Ee.Forward]:r.y[Ee.Forward]||n.y===1}}},[a,t,o])}function km(e,t){let a=t!=null?e.get(t):void 0,o=a?a.node.current:null;return oo(r=>{var n;return t==null?null:(n=o??r)!=null?n:null},[o,t])}function Dm(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{sensor:r}=o,n=r.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...a,...n]},[]),[e,t])}var Ko;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Ko||(Ko={}));var ol;(function(e){e.Optimized="optimized"})(ol||(ol={}));var vi=new Map;function Mm(e,t){let{dragging:a,dependencies:o,config:r}=t,[n,l]=(0,w.useState)(null),{frequency:s,measure:i,strategy:u}=r,c=(0,w.useRef)(e),d=p(),f=ao(d),h=(0,w.useCallback)(function(x){x===void 0&&(x=[]),!f.current&&l(C=>C===null?x:C.concat(x.filter(L=>!C.includes(L))))},[f]),g=(0,w.useRef)(null),m=oo(x=>{if(d&&!a)return vi;if(!x||x===vi||c.current!==e||n!=null){let C=new Map;for(let L of e){if(!L)continue;if(n&&n.length>0&&!n.includes(L.id)&&L.rect.current){C.set(L.id,L.rect.current);continue}let I=L.node.current,v=I?new zo(i(I),I):null;L.rect.current=v,v&&C.set(L.id,v)}return C}return x},[e,n,a,d,i]);return(0,w.useEffect)(()=>{c.current=e},[e]),(0,w.useEffect)(()=>{d||h()},[a,d]),(0,w.useEffect)(()=>{n&&n.length>0&&l(null)},[JSON.stringify(n)]),(0,w.useEffect)(()=>{d||typeof s!="number"||g.current!==null||(g.current=setTimeout(()=>{h(),g.current=null},s))},[s,d,h,...o]),{droppableRects:m,measureDroppableContainers:h,measuringScheduled:n!=null};function p(){switch(u){case Ko.Always:return!1;case Ko.BeforeDragging:return a;default:return!a}}}function sl(e,t){return oo(a=>e?a||(typeof t=="function"?t(e):e):null,[t,e])}function Am(e,t){return sl(e,t)}function Tm(e){let{callback:t,disabled:a}=e,o=qo(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.MutationObserver>"u")return;let{MutationObserver:n}=window;return new n(o)},[o,a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function _r(e){let{callback:t,disabled:a}=e,o=qo(t),r=(0,w.useMemo)(()=>{if(a||typeof window>"u"||typeof window.ResizeObserver>"u")return;let{ResizeObserver:n}=window;return new n(o)},[a]);return(0,w.useEffect)(()=>()=>r?.disconnect(),[r]),r}function Em(e){return new zo(Sa(e),e)}function bi(e,t,a){t===void 0&&(t=Em);let[o,r]=(0,w.useState)(null);function n(){r(i=>{if(!e)return null;if(e.isConnected===!1){var u;return(u=i??a)!=null?u:null}let c=t(e);return JSON.stringify(i)===JSON.stringify(c)?i:c})}let l=Tm({callback(i){if(e)for(let u of i){let{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){n();break}}}}),s=_r({callback:n});return nt(()=>{n(),e?(s?.observe(e),l?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),l?.disconnect())},[e]),o}function Om(e){let t=sl(e);return Ai(e,t)}var Si=[];function Fm(e){let t=(0,w.useRef)(e),a=oo(o=>e?o&&o!==Si&&e&&t.current&&e.parentNode===t.current.parentNode?o:$o(e):Si,[e]);return(0,w.useEffect)(()=>{t.current=e},[e]),a}function Bm(e){let[t,a]=(0,w.useState)(null),o=(0,w.useRef)(e),r=(0,w.useCallback)(n=>{let l=$n(n.target);l&&a(s=>s?(s.set(l,Jn(l)),new Map(s)):null)},[]);return(0,w.useEffect)(()=>{let n=o.current;if(e!==n){l(n);let s=e.map(i=>{let u=$n(i);return u?(u.addEventListener("scroll",r,{passive:!0}),[u,Jn(u)]):null}).filter(i=>i!=null);a(s.length?new Map(s):null),o.current=e}return()=>{l(e),l(n)};function l(s){s.forEach(i=>{let u=$n(i);u?.removeEventListener("scroll",r)})}},[r,e]),(0,w.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((n,l)=>xa(n,l),It):_i(e):It,[e,t])}function wi(e,t){t===void 0&&(t=[]);let a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{a.current=null},t),(0,w.useEffect)(()=>{let o=e!==It;o&&!a.current&&(a.current=e),!o&&a.current&&(a.current=null)},[e]),a.current?La(e,a.current):It}function Nm(e){(0,w.useEffect)(()=>{if(!Ho)return;let t=e.map(a=>{let{sensor:o}=a;return o.setup==null?void 0:o.setup()});return()=>{for(let a of t)a?.()}},e.map(t=>{let{sensor:a}=t;return a}))}function _m(e,t){return(0,w.useMemo)(()=>e.reduce((a,o)=>{let{eventName:r,handler:n}=o;return a[r]=l=>{n(l,t)},a},{}),[e,t])}function Ui(e){return(0,w.useMemo)(()=>e?cm(e):null,[e])}var yi=[];function Hm(e,t){t===void 0&&(t=Sa);let[a]=e,o=Ui(a?ze(a):null),[r,n]=(0,w.useState)(yi);function l(){n(()=>e.length?e.map(i=>Bi(i)?o:new zo(t(i),i)):yi)}let s=_r({callback:l});return nt(()=>{s?.disconnect(),l(),e.forEach(i=>s?.observe(i))},[e]),r}function Vi(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return to(t)?t:e}function qm(e){let{measure:t}=e,[a,o]=(0,w.useState)(null),r=(0,w.useCallback)(u=>{for(let{target:c}of u)if(to(c)){o(d=>{let f=t(c);return d?{...d,width:f.width,height:f.height}:f});break}},[t]),n=_r({callback:r}),l=(0,w.useCallback)(u=>{let c=Vi(u);n?.disconnect(),c&&n?.observe(c),o(c?t(c):null)},[t,n]),[s,i]=Uo(l);return(0,w.useMemo)(()=>({nodeRef:s,rect:a,setRef:i}),[a,s,i])}var Um=[{sensor:aa,options:{}},{sensor:ta,options:{}}],Vm={current:{}},Er={draggable:{measure:xi},droppable:{measure:xi,strategy:Ko.WhileDragging,frequency:ol.Optimized},dragOverlay:{measure:Sa}},ba=class extends Map{get(t){var a;return t!=null&&(a=super.get(t))!=null?a:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:a}=t;return!a})}getNodeFor(t){var a,o;return(a=(o=this.get(t))==null?void 0:o.node.current)!=null?a:void 0}},Wm={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ba,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Or},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Er,measureDroppableContainers:Or,windowRect:null,measuringScheduled:!1},Wi={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Or,draggableNodes:new Map,over:null,measureDroppableContainers:Or},Yo=(0,w.createContext)(Wi),Gi=(0,w.createContext)(Wm);function Gm(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ba}}}function zm(e,t){switch(t.type){case Me.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Me.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Me.DragEnd:case Me.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Me.RegisterDroppable:{let{element:a}=t,{id:o}=a,r=new ba(e.droppable.containers);return r.set(o,a),{...e,droppable:{...e.droppable,containers:r}}}case Me.SetDroppableDisabled:{let{id:a,key:o,disabled:r}=t,n=e.droppable.containers.get(a);if(!n||o!==n.key)return e;let l=new ba(e.droppable.containers);return l.set(a,{...n,disabled:r}),{...e,droppable:{...e.droppable,containers:l}}}case Me.UnregisterDroppable:{let{id:a,key:o}=t,r=e.droppable.containers.get(a);if(!r||o!==r.key)return e;let n=new ba(e.droppable.containers);return n.delete(a),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function Xm(e){let{disabled:t}=e,{active:a,activatorEvent:o,draggableNodes:r}=(0,w.useContext)(Yo),n=Vo(o),l=Vo(a?.id);return(0,w.useEffect)(()=>{if(!t&&!o&&n&&l!=null){if(!ro(n)||document.activeElement===n.target)return;let s=r.get(l);if(!s)return;let{activatorNode:i,node:u}=s;if(!i.current&&!u.current)return;requestAnimationFrame(()=>{for(let c of[i.current,u.current]){if(!c)continue;let d=fi(c);if(d){d.focus();break}}})}},[o,t,r,l,n]),null}function zi(e,t){let{transform:a,...o}=t;return e!=null&&e.length?e.reduce((r,n)=>n({transform:r,...o}),a):a}function Km(e){return(0,w.useMemo)(()=>({draggable:{...Er.draggable,...e?.draggable},droppable:{...Er.droppable,...e?.droppable},dragOverlay:{...Er.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function jm(e){let{activeNode:t,measure:a,initialRect:o,config:r=!0}=e,n=(0,w.useRef)(!1),{x:l,y:s}=typeof r=="boolean"?{x:r,y:r}:r;nt(()=>{if(!l&&!s||!t){n.current=!1;return}if(n.current||!o)return;let u=t?.node.current;if(!u||u.isConnected===!1)return;let c=a(u),d=Ai(c,o);if(l||(d.x=0),s||(d.y=0),n.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){let f=Ei(u);f&&f.scrollBy({top:d.y,left:d.x})}},[t,l,s,o,a])}var Hr=(0,w.createContext)({...It,scaleX:1,scaleY:1}),ea;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(ea||(ea={}));var qr=(0,w.memo)(function(t){var a,o,r,n;let{id:l,accessibility:s,autoScroll:i=!0,children:u,sensors:c=Um,collisionDetection:d=ll,measuring:f,modifiers:h,...g}=t,m=(0,w.useReducer)(zm,void 0,Gm),[p,x]=m,[C,L]=Qp(),[I,v]=(0,w.useState)(ea.Uninitialized),b=I===ea.Initialized,{draggable:{active:y,nodes:R,translate:k},droppable:{containers:O}}=p,E=y!=null?R.get(y):null,T=(0,w.useRef)({initial:null,translated:null}),B=(0,w.useMemo)(()=>{var We;return y!=null?{id:y,data:(We=E?.data)!=null?We:Vm,rect:T}:null},[y,E]),q=(0,w.useRef)(null),[Z,K]=(0,w.useState)(null),[H,G]=(0,w.useState)(null),z=ao(g,Object.values(g)),M=ga("DndDescribedBy",l),re=(0,w.useMemo)(()=>O.getEnabled(),[O]),$=Km(f),{droppableRects:se,measureDroppableContainers:he,measuringScheduled:ye}=Mm(re,{dragging:b,dependencies:[k.x,k.y],config:$.droppable}),Le=km(R,y),Re=(0,w.useMemo)(()=>H?Wo(H):null,[H]),F=Hp(),J=Am(Le,$.draggable.measure);jm({activeNode:y!=null?R.get(y):null,config:F.layoutShiftCompensation,initialRect:J,measure:$.draggable.measure});let X=bi(Le,$.draggable.measure,J),S=bi(Le?Le.parentElement:null),P=(0,w.useRef)({activatorEvent:null,active:null,activeNode:Le,collisionRect:null,collisions:null,droppableRects:se,draggableNodes:R,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),A=O.getNodeFor((a=P.current.over)==null?void 0:a.id),N=qm({measure:$.dragOverlay.measure}),ne=(o=N.nodeRef.current)!=null?o:Le,le=b?(r=N.rect)!=null?r:X:null,ue=!!(N.nodeRef.current&&N.rect),Ie=Om(ue?null:X),dt=Ui(ne?ze(ne):null),De=Fm(b?A??Le:null),Eo=Hm(De),Ct=zi(h,{transform:{x:k.x-Ie.x,y:k.y-Ie.y,scaleX:1,scaleY:1},activatorEvent:H,active:B,activeNodeRect:X,containerNodeRect:S,draggingNodeRect:le,over:P.current.over,overlayNodeRect:N.rect,scrollableAncestors:De,scrollableAncestorRects:Eo,windowRect:dt}),Oo=Re?xa(Re,k):null,Qs=Bm(De),Tp=wi(Qs),Ep=wi(Qs,[X]),Qa=xa(Ct,Tp),Ja=le?im(le,Ct):null,Fo=B&&Ja?d({active:B,collisionRect:Ja,droppableRects:se,droppableContainers:re,pointerCoordinates:Oo}):null,Js=jo(Fo,"id"),[Yt,ei]=(0,w.useState)(null),Op=ue?Ct:xa(Ct,Ep),Fp=lm(Op,(n=Yt?.rect)!=null?n:null,X),Gn=(0,w.useRef)(null),ti=(0,w.useCallback)((We,tt)=>{let{sensor:at,options:Zt}=tt;if(q.current==null)return;let ct=R.get(q.current);if(!ct)return;let ot=We.nativeEvent,Mt=new at({active:q.current,activeNode:ct,event:ot,options:Zt,context:P,onAbort(_e){if(!R.get(_e))return;let{onDragAbort:At}=z.current,Ht={id:_e};At?.(Ht),C({type:"onDragAbort",event:Ht})},onPending(_e,Qt,At,Ht){if(!R.get(_e))return;let{onDragPending:No}=z.current,Jt={id:_e,constraint:Qt,initialCoordinates:At,offset:Ht};No?.(Jt),C({type:"onDragPending",event:Jt})},onStart(_e){let Qt=q.current;if(Qt==null)return;let At=R.get(Qt);if(!At)return;let{onDragStart:Ht}=z.current,Bo={activatorEvent:ot,active:{id:Qt,data:At.data,rect:T}};(0,Ia.unstable_batchedUpdates)(()=>{Ht?.(Bo),v(ea.Initializing),x({type:Me.DragStart,initialCoordinates:_e,active:Qt}),C({type:"onDragStart",event:Bo}),K(Gn.current),G(ot)})},onMove(_e){x({type:Me.DragMove,coordinates:_e})},onEnd:eo(Me.DragEnd),onCancel:eo(Me.DragCancel)});Gn.current=Mt;function eo(_e){return async function(){let{active:At,collisions:Ht,over:Bo,scrollAdjustedTranslate:No}=P.current,Jt=null;if(At&&No){let{cancelDrop:_o}=z.current;Jt={activatorEvent:ot,active:At,collisions:Ht,delta:No,over:Bo},_e===Me.DragEnd&&typeof _o=="function"&&await Promise.resolve(_o(Jt))&&(_e=Me.DragCancel)}q.current=null,(0,Ia.unstable_batchedUpdates)(()=>{x({type:_e}),v(ea.Uninitialized),ei(null),K(null),G(null),Gn.current=null;let _o=_e===Me.DragEnd?"onDragEnd":"onDragCancel";if(Jt){let zn=z.current[_o];zn?.(Jt),C({type:_o,event:Jt})}})}}},[R]),Bp=(0,w.useCallback)((We,tt)=>(at,Zt)=>{let ct=at.nativeEvent,ot=R.get(Zt);if(q.current!==null||!ot||ct.dndKit||ct.defaultPrevented)return;let Mt={active:ot};We(at,tt.options,Mt)===!0&&(ct.dndKit={capturedBy:tt.sensor},q.current=Zt,ti(at,tt))},[R,ti]),ai=Dm(c,Bp);Nm(c),nt(()=>{X&&I===ea.Initializing&&v(ea.Initialized)},[X,I]),(0,w.useEffect)(()=>{let{onDragMove:We}=z.current,{active:tt,activatorEvent:at,collisions:Zt,over:ct}=P.current;if(!tt||!at)return;let ot={active:tt,activatorEvent:at,collisions:Zt,delta:{x:Qa.x,y:Qa.y},over:ct};(0,Ia.unstable_batchedUpdates)(()=>{We?.(ot),C({type:"onDragMove",event:ot})})},[Qa.x,Qa.y]),(0,w.useEffect)(()=>{let{active:We,activatorEvent:tt,collisions:at,droppableContainers:Zt,scrollAdjustedTranslate:ct}=P.current;if(!We||q.current==null||!tt||!ct)return;let{onDragOver:ot}=z.current,Mt=Zt.get(Js),eo=Mt&&Mt.rect.current?{id:Mt.id,rect:Mt.rect.current,data:Mt.data,disabled:Mt.disabled}:null,_e={active:We,activatorEvent:tt,collisions:at,delta:{x:ct.x,y:ct.y},over:eo};(0,Ia.unstable_batchedUpdates)(()=>{ei(eo),ot?.(_e),C({type:"onDragOver",event:_e})})},[Js]),nt(()=>{P.current={activatorEvent:H,active:B,activeNode:Le,collisionRect:Ja,collisions:Fo,droppableRects:se,draggableNodes:R,draggingNode:ne,draggingNodeRect:le,droppableContainers:O,over:Yt,scrollableAncestors:De,scrollAdjustedTranslate:Qa},T.current={initial:le,translated:Ja}},[B,Le,Fo,Ja,R,ne,le,se,O,Yt,De,Qa]),ym({...F,delta:k,draggingRect:Ja,pointerCoordinates:Oo,scrollableAncestors:De,scrollableAncestorRects:Eo});let Np=(0,w.useMemo)(()=>({active:B,activeNode:Le,activeNodeRect:X,activatorEvent:H,collisions:Fo,containerNodeRect:S,dragOverlay:N,draggableNodes:R,droppableContainers:O,droppableRects:se,over:Yt,measureDroppableContainers:he,scrollableAncestors:De,scrollableAncestorRects:Eo,measuringConfiguration:$,measuringScheduled:ye,windowRect:dt}),[B,Le,X,H,Fo,S,N,R,O,se,Yt,he,De,Eo,$,ye,dt]),_p=(0,w.useMemo)(()=>({activatorEvent:H,activators:ai,active:B,activeNodeRect:X,ariaDescribedById:{draggable:M},dispatch:x,draggableNodes:R,over:Yt,measureDroppableContainers:he}),[H,ai,B,X,x,M,R,Yt,he]);return w.default.createElement(ki.Provider,{value:L},w.default.createElement(Yo.Provider,{value:_p},w.default.createElement(Gi.Provider,{value:Np},w.default.createElement(Hr.Provider,{value:Fp},u)),w.default.createElement(Xm,{disabled:s?.restoreFocus===!1})),w.default.createElement(tm,{...s,hiddenTextDescribedById:M}));function Hp(){let We=Z?.autoScrollEnabled===!1,tt=typeof i=="object"?i.enabled===!1:i===!1,at=b&&!We&&!tt;return typeof i=="object"?{...i,enabled:at}:{enabled:at}}}),$m=(0,w.createContext)(null),Ri="button",Ym="Draggable";function Xi(e){let{id:t,data:a,disabled:o=!1,attributes:r}=e,n=ga(Ym),{activators:l,activatorEvent:s,active:i,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:f}=(0,w.useContext)(Yo),{role:h=Ri,roleDescription:g="draggable",tabIndex:m=0}=r??{},p=i?.id===t,x=(0,w.useContext)(p?Hr:$m),[C,L]=Uo(),[I,v]=Uo(),b=_m(l,t),y=ao(a);nt(()=>(d.set(t,{id:t,key:n,node:C,activatorNode:I,data:y}),()=>{let k=d.get(t);k&&k.key===n&&d.delete(t)}),[d,t]);let R=(0,w.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":o,"aria-pressed":p&&h===Ri?!0:void 0,"aria-roledescription":g,"aria-describedby":c.draggable}),[o,h,m,p,g,c.draggable]);return{active:i,activatorEvent:s,activeNodeRect:u,attributes:R,isDragging:p,listeners:o?void 0:b,node:C,over:f,setNodeRef:L,setActivatorNodeRef:v,transform:x}}function Zo(){return(0,w.useContext)(Gi)}var Zm="Droppable",Qm={timeout:25};function Ur(e){let{data:t,disabled:a=!1,id:o,resizeObserverConfig:r}=e,n=ga(Zm),{active:l,dispatch:s,over:i,measureDroppableContainers:u}=(0,w.useContext)(Yo),c=(0,w.useRef)({disabled:a}),d=(0,w.useRef)(!1),f=(0,w.useRef)(null),h=(0,w.useRef)(null),{disabled:g,updateMeasurementsFor:m,timeout:p}={...Qm,...r},x=ao(m??o),C=(0,w.useCallback)(()=>{if(!d.current){d.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),h.current=null},p)},[p]),L=_r({callback:C,disabled:g||!l}),I=(0,w.useCallback)((R,k)=>{L&&(k&&(L.unobserve(k),d.current=!1),R&&L.observe(R))},[L]),[v,b]=Uo(I),y=ao(t);return(0,w.useEffect)(()=>{!L||!v.current||(L.disconnect(),d.current=!1,L.observe(v.current))},[v,L]),(0,w.useEffect)(()=>(s({type:Me.RegisterDroppable,element:{id:o,key:n,disabled:a,node:v,rect:f,data:y}}),()=>s({type:Me.UnregisterDroppable,key:n,id:o})),[o]),(0,w.useEffect)(()=>{a!==c.current.disabled&&(s({type:Me.SetDroppableDisabled,id:o,key:n,disabled:a}),c.current.disabled=a)},[o,n,a,s]),{active:l,rect:f,isOver:i?.id===o,node:v,over:i,setNodeRef:b}}function Jm(e){let{animation:t,children:a}=e,[o,r]=(0,w.useState)(null),[n,l]=(0,w.useState)(null),s=Vo(a);return!a&&!o&&s&&r(s),nt(()=>{if(!n)return;let i=o?.key,u=o?.props.id;if(i==null||u==null){r(null);return}Promise.resolve(t(u,n)).then(()=>{r(null)})},[t,o,n]),w.default.createElement(w.default.Fragment,null,a,o?(0,w.cloneElement)(o,{ref:l}):null)}var eh={x:0,y:0,scaleX:1,scaleY:1};function th(e){let{children:t}=e;return w.default.createElement(Yo.Provider,{value:Wi},w.default.createElement(Hr.Provider,{value:eh},t))}var ah={position:"fixed",touchAction:"none"},oh=e=>ro(e)?"transform 250ms ease":void 0,rh=(0,w.forwardRef)((e,t)=>{let{as:a,activatorEvent:o,adjustScale:r,children:n,className:l,rect:s,style:i,transform:u,transition:c=oh}=e;if(!s)return null;let d=r?u:{...u,scaleX:1,scaleY:1},f={...ah,width:s.width,height:s.height,top:s.top,left:s.left,transform:rt.Transform.toString(d),transformOrigin:r&&o?am(o,s):void 0,transition:typeof c=="function"?c(o):c,...i};return w.default.createElement(a,{className:l,style:f,ref:t},n)}),nh=e=>t=>{let{active:a,dragOverlay:o}=t,r={},{styles:n,className:l}=e;if(n!=null&&n.active)for(let[s,i]of Object.entries(n.active))i!==void 0&&(r[s]=a.node.style.getPropertyValue(s),a.node.style.setProperty(s,i));if(n!=null&&n.dragOverlay)for(let[s,i]of Object.entries(n.dragOverlay))i!==void 0&&o.node.style.setProperty(s,i);return l!=null&&l.active&&a.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(let[i,u]of Object.entries(r))a.node.style.setProperty(i,u);l!=null&&l.active&&a.node.classList.remove(l.active)}},lh=e=>{let{transform:{initial:t,final:a}}=e;return[{transform:rt.Transform.toString(t)},{transform:rt.Transform.toString(a)}]},sh={duration:250,easing:"ease",keyframes:lh,sideEffects:nh({styles:{active:{opacity:"0"}}})};function ih(e){let{config:t,draggableNodes:a,droppableContainers:o,measuringConfiguration:r}=e;return qo((n,l)=>{if(t===null)return;let s=a.get(n);if(!s)return;let i=s.node.current;if(!i)return;let u=Vi(l);if(!u)return;let{transform:c}=ze(l).getComputedStyle(l),d=Ti(c);if(!d)return;let f=typeof t=="function"?t:uh(t);return Hi(i,r.draggable.measure),f({active:{id:n,data:s.data,node:i,rect:r.draggable.measure(i)},draggableNodes:a,dragOverlay:{node:l,rect:r.dragOverlay.measure(u)},droppableContainers:o,measuringConfiguration:r,transform:d})})}function uh(e){let{duration:t,easing:a,sideEffects:o,keyframes:r}={...sh,...e};return n=>{let{active:l,dragOverlay:s,transform:i,...u}=n;if(!t)return;let c={x:s.rect.left-l.rect.left,y:s.rect.top-l.rect.top},d={scaleX:i.scaleX!==1?l.rect.width*i.scaleX/s.rect.width:1,scaleY:i.scaleY!==1?l.rect.height*i.scaleY/s.rect.height:1},f={x:i.x-c.x,y:i.y-c.y,...d},h=r({...u,active:l,dragOverlay:s,transform:{initial:i,final:f}}),[g]=h,m=h[h.length-1];if(JSON.stringify(g)===JSON.stringify(m))return;let p=o?.({active:l,dragOverlay:s,...u}),x=s.node.animate(h,{duration:t,easing:a,fill:"forwards"});return new Promise(C=>{x.onfinish=()=>{p?.(),C()}})}}var Pi=0;function dh(e){return(0,w.useMemo)(()=>{if(e!=null)return Pi++,Pi},[e])}var Ki=w.default.memo(e=>{let{adjustScale:t=!1,children:a,dropAnimation:o,style:r,transition:n,modifiers:l,wrapperElement:s="div",className:i,zIndex:u=999}=e,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:p,over:x,measuringConfiguration:C,scrollableAncestors:L,scrollableAncestorRects:I,windowRect:v}=Zo(),b=(0,w.useContext)(Hr),y=dh(d?.id),R=zi(l,{activatorEvent:c,active:d,activeNodeRect:f,containerNodeRect:h,draggingNodeRect:p.rect,over:x,overlayNodeRect:p.rect,scrollableAncestors:L,scrollableAncestorRects:I,transform:b,windowRect:v}),k=sl(f),O=ih({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:C}),E=k?p.setRef:void 0;return w.default.createElement(th,null,w.default.createElement(Jm,{animation:O},d&&y?w.default.createElement(rh,{key:y,id:d.id,ref:E,as:s,activatorEvent:c,adjustScale:t,className:i,transition:n,rect:k,style:{zIndex:u,...r},transform:R},a):null))});var be=U(require("react"));function ji(e,t,a){let o=e.slice();return o.splice(a<0?o.length+a:a,0,o.splice(t,1)[0]),o}function ch(e,t){return e.reduce((a,o,r)=>{let n=t.get(o);return n&&(a[r]=n),a},Array(e.length))}function Vr(e){return e!==null&&e>=0}function fh(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}function ph(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}var $i=e=>{let{rects:t,activeIndex:a,overIndex:o,index:r}=e,n=ji(t,o,a),l=t[r],s=n[r];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}};var Wr={scaleX:1,scaleY:1},zr=e=>{var t;let{activeIndex:a,activeNodeRect:o,index:r,rects:n,overIndex:l}=e,s=(t=n[a])!=null?t:o;if(!s)return null;if(r===a){let u=n[l];return u?{x:0,y:a<l?u.top+u.height-(s.top+s.height):u.top-s.top,...Wr}:null}let i=mh(n,r,a);return r>a&&r<=l?{x:0,y:-s.height-i,...Wr}:r<a&&r>=l?{x:0,y:s.height+i,...Wr}:{x:0,y:0,...Wr}};function mh(e,t,a){let o=e[t],r=e[t-1],n=e[t+1];return o?a<t?r?o.top-(r.top+r.height):n?n.top-(o.top+o.height):0:n?n.top-(o.top+o.height):r?o.top-(r.top+r.height):0:0}var Yi="Sortable",Zi=be.default.createContext({activeIndex:-1,containerId:Yi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:$i,disabled:{draggable:!1,droppable:!1}});function Xr(e){let{children:t,id:a,items:o,strategy:r=$i,disabled:n=!1}=e,{active:l,dragOverlay:s,droppableRects:i,over:u,measureDroppableContainers:c}=Zo(),d=ga(Yi,a),f=s.rect!==null,h=(0,be.useMemo)(()=>o.map(b=>typeof b=="object"&&"id"in b?b.id:b),[o]),g=l!=null,m=l?h.indexOf(l.id):-1,p=u?h.indexOf(u.id):-1,x=(0,be.useRef)(h),C=!fh(h,x.current),L=p!==-1&&m===-1||C,I=ph(n);nt(()=>{C&&g&&c(h)},[C,h,g,c]),(0,be.useEffect)(()=>{x.current=h},[h]);let v=(0,be.useMemo)(()=>({activeIndex:m,containerId:d,disabled:I,disableTransforms:L,items:h,overIndex:p,useDragOverlay:f,sortedRects:ch(h,i),strategy:r}),[m,d,I.draggable,I.droppable,L,h,p,i,f,r]);return be.default.createElement(Zi.Provider,{value:v},t)}var hh=e=>{let{id:t,items:a,activeIndex:o,overIndex:r}=e;return ji(a,o,r).indexOf(t)},gh=e=>{let{containerId:t,isSorting:a,wasDragging:o,index:r,items:n,newIndex:l,previousItems:s,previousContainerId:i,transition:u}=e;return!u||!o||s!==n&&r===l?!1:a?!0:l!==r&&t===i},xh={duration:200,easing:"ease"},Qi="transform",Lh=rt.Transition.toString({property:Qi,duration:0,easing:"linear"}),Ch={roleDescription:"sortable"};function Ih(e){let{disabled:t,index:a,node:o,rect:r}=e,[n,l]=(0,be.useState)(null),s=(0,be.useRef)(a);return nt(()=>{if(!t&&a!==s.current&&o.current){let i=r.current;if(i){let u=Sa(o.current,{ignoreTransform:!0}),c={x:i.left-u.left,y:i.top-u.top,scaleX:i.width/u.width,scaleY:i.height/u.height};(c.x||c.y)&&l(c)}}a!==s.current&&(s.current=a)},[t,a,o,r]),(0,be.useEffect)(()=>{n&&l(null)},[n]),n}function Kr(e){let{animateLayoutChanges:t=gh,attributes:a,disabled:o,data:r,getNewIndex:n=hh,id:l,strategy:s,resizeObserverConfig:i,transition:u=xh}=e,{items:c,containerId:d,activeIndex:f,disabled:h,disableTransforms:g,sortedRects:m,overIndex:p,useDragOverlay:x,strategy:C}=(0,be.useContext)(Zi),L=vh(o,h),I=c.indexOf(l),v=(0,be.useMemo)(()=>({sortable:{containerId:d,index:I,items:c},...r}),[d,r,I,c]),b=(0,be.useMemo)(()=>c.slice(c.indexOf(l)),[c,l]),{rect:y,node:R,isOver:k,setNodeRef:O}=Ur({id:l,data:v,disabled:L.droppable,resizeObserverConfig:{updateMeasurementsFor:b,...i}}),{active:E,activatorEvent:T,activeNodeRect:B,attributes:q,setNodeRef:Z,listeners:K,isDragging:H,over:G,setActivatorNodeRef:z,transform:M}=Xi({id:l,data:v,attributes:{...Ch,...a},disabled:L.draggable}),re=ui(O,Z),$=!!E,se=$&&!g&&Vr(f)&&Vr(p),he=!x&&H,ye=he&&se?M:null,Re=se?ye??(s??C)({rects:m,activeNodeRect:B,activeIndex:f,overIndex:p,index:I}):null,F=Vr(f)&&Vr(p)?n({id:l,items:c,activeIndex:f,overIndex:p}):I,J=E?.id,X=(0,be.useRef)({activeId:J,items:c,newIndex:F,containerId:d}),S=c!==X.current.items,P=t({active:E,containerId:d,isDragging:H,isSorting:$,id:l,index:I,items:c,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:u,wasDragging:X.current.activeId!=null}),A=Ih({disabled:!P,index:I,node:R,rect:y});return(0,be.useEffect)(()=>{$&&X.current.newIndex!==F&&(X.current.newIndex=F),d!==X.current.containerId&&(X.current.containerId=d),c!==X.current.items&&(X.current.items=c)},[$,F,d,c]),(0,be.useEffect)(()=>{if(J===X.current.activeId)return;if(J!=null&&X.current.activeId==null){X.current.activeId=J;return}let ne=setTimeout(()=>{X.current.activeId=J},50);return()=>clearTimeout(ne)},[J]),{active:E,activeIndex:f,attributes:q,data:v,rect:y,index:I,newIndex:F,items:c,isOver:k,isSorting:$,isDragging:H,listeners:K,node:R,overIndex:p,over:G,setNodeRef:re,setActivatorNodeRef:z,setDroppableNodeRef:O,setDraggableNodeRef:Z,transform:A??Re,transition:N()};function N(){if(A||S&&X.current.newIndex===I)return Lh;if(!(he&&!ro(T)||!u)&&($||P))return rt.Transition.toString({...u,property:Qi})}}function vh(e,t){var a,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(a=e?.draggable)!=null?a:t.draggable,droppable:(o=e?.droppable)!=null?o:t.droppable}}function Gr(e){if(!e)return!1;let t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}var bh=[ae.Down,ae.Right,ae.Up,ae.Left],jr=(e,t)=>{let{context:{active:a,collisionRect:o,droppableRects:r,droppableContainers:n,over:l,scrollableAncestors:s}}=t;if(bh.includes(e.code)){if(e.preventDefault(),!a||!o)return;let i=[];n.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;let f=r.get(d.id);if(f)switch(e.code){case ae.Down:o.top<f.top&&i.push(d);break;case ae.Up:o.top>f.top&&i.push(d);break;case ae.Left:o.left>f.left&&i.push(d);break;case ae.Right:o.left<f.left&&i.push(d);break}});let u=Nr({active:a,collisionRect:o,droppableRects:r,droppableContainers:i,pointerCoordinates:null}),c=jo(u,"id");if(c===l?.id&&u.length>1&&(c=u[1].id),c!=null){let d=n.get(a.id),f=n.get(c),h=f?r.get(f.id):null,g=f?.node.current;if(g&&h&&d&&f){let p=$o(g).some((b,y)=>s[y]!==b),x=Ji(d,f),C=Sh(d,f),L=p||!x?{x:0,y:0}:{x:C?o.width-h.width:0,y:C?o.height-h.height:0},I={x:h.left,y:h.top};return L.x&&L.y?I:La(I,L)}}}};function Ji(e,t){return!Gr(e)||!Gr(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Sh(e,t){return!Gr(e)||!Gr(t)||!Ji(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}var $r=require("react");var eu=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function tu(e,t,a=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:eu(e),size:24,node:t,...a.length>0?{aliases:a}:{}}}var au=e=>{let t="",a=!1;for(let o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};var ou=e=>{let t=au(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Jo=require("react");var Qo=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();var oa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function il(e){return e!=null}function ru(e,t={}){let a=t.attributeNames??{},o=f=>a[f]??f,r=e.size??e.width??oa.width,n=e.size??e.height??oa.height,l=e.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],i=t.className?.split(" ").filter(Boolean)??[],u=t.includeDefaultClasses===!1?Qo(...i):Qo("lucide",...s,...i),c=t.absoluteStrokeWidth?Number(t.strokeWidth??oa["stroke-width"])*Number(e.size??e.width??oa.width)/Number(t.size??t.width??oa.width):t.strokeWidth??oa["stroke-width"];return["svg",{...Object.entries(oa).reduce((f,[h,g])=>(f[o(h)]=g,f),{}),..."color"in t&&t.color&&{[o("stroke")]:t.color},..."size"in t&&il(t.size)&&{[o("width")]:t.size,[o("height")]:t.size},..."width"in t&&il(t.width)&&{[o("width")]:t.width},..."height"in t&&il(t.height)&&{[o("height")]:t.height},[o("stroke-width")]:c,...u&&{[o("class")]:u},[o("viewBox")]:`0 0 ${r} ${n}`,...t.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{let[h,g,m]=f,p=t.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...g}:g;return m?[h,p,m]:[h,p]})]}function nu(e,t={}){return ru(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var lu=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var lo=require("react");var wh=(0,lo.createContext)({});var su=()=>(0,lo.useContext)(wh);var iu=(0,Jo.forwardRef)(({color:e,size:t,width:a,height:o,strokeWidth:r,absoluteStrokeWidth:n,nonScalingStroke:l,className:s="",children:i,iconNode:u=[],icon:c={node:u,aliases:[],size:24},...d},f)=>{let{size:h=24,strokeWidth:g=2,absoluteStrokeWidth:m=!1,nonScalingStroke:p=!1,color:x="currentColor",className:C=""}=su()??{},L=!!i||lu(d),[I,v,b=[]]=nu(c,{color:e??x,width:a??t??h,height:o??t??h,strokeWidth:r??g,absoluteStrokeWidth:n??m,nonScalingStroke:l??p,className:Qo(C,s),hasA11yProp:L,attributes:d});return(0,Jo.createElement)(I,{ref:f,...v},[...b.map(([y,R])=>(0,Jo.createElement)(y,R)),...Array.isArray(i)?i:[i]])});function de(e,t=[],a=[]){let o=typeof e=="string"?tu(e,t,a):e,r=(0,$r.forwardRef)(({className:n,...l},s)=>(0,$r.createElement)(iu,{ref:s,icon:o,className:n,...l}));return o.name&&(r.displayName=ou(o.name)),r}var uu={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};uu.node;var ra=de(uu);var du={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};du.node;var so=de(du);var cu={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};cu.node;var er=de(cu);var fu={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};fu.node;var na=de(fu);var pu={name:"grip-vertical",size:24,node:[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]};pu.node;var tr=de(pu);var mu={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};mu.node;var ar=de(mu);var hu={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};hu.node;var wa=de(hu);var gu={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};gu.node;var qt=de(gu);var xu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};xu.node;var or=de(xu);var Lu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Lu.node;var rr=de(Lu);var Cu={name:"settings-2",size:24,node:[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]};Cu.node;var nr=de(Cu);var Iu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Iu.node;var lr=de(Iu);var vu={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};vu.node;var pt=de(vu);var bu={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};bu.node;var sr=de(bu);var $a=require("react");var Eu=U(require("react"),1);var He=U(require("react"),1);var Su=U(require("react"),1),yh=Object.defineProperty,dl=(e,t)=>yh(e,"name",{value:t,configurable:!0});function ul(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}dl(ul,"setRef");function wu(...e){return t=>{let a=!1,o=e.map(r=>{let n=ul(r,t);return!a&&typeof n=="function"&&(a=!0),n});if(a)return()=>{for(let r=0;r<o.length;r++){let n=o[r];typeof n=="function"?n():ul(e[r],null)}}}}dl(wu,"composeRefs");function Q(...e){return Su.useCallback(wu(...e),e)}dl(Q,"useComposedRefs");var Rh=Object.defineProperty,vt=(e,t)=>Rh(e,"name",{value:t,configurable:!0});function Xe(e){let t=He.forwardRef((a,o)=>{let{children:r,...n}=a,l=null,s=!1,i=[];cl(r)&&typeof Yr=="function"&&(r=Yr(r._payload)),He.Children.forEach(r,f=>{if(Du(f)){s=!0;let h=f,g="child"in h.props?h.props.child:h.props.children;cl(g)&&typeof Yr=="function"&&(g=Yr(g._payload)),l=kh(h,g),i.push(l?.props?.children)}else i.push(f)}),l?l=He.cloneElement(l,void 0,i):!s&&He.Children.count(r)===1&&He.isValidElement(r)&&(l=r);let u=l?ku(l):void 0,c=Q(o,u);if(!l){if(r||r===0)throw new Error(s?Ah(e):Mh(e));return r}let d=Pu(n,l.props??{});return l.type!==He.Fragment&&(d.ref=o?c:u),He.cloneElement(l,d)});return t.displayName=`${e}.Slot`,t}vt(Xe,"createSlot");var yu=Xe("Slot"),Ru=Symbol.for("radix.slottable");function Ph(e){let t=vt(a=>"child"in a?a.children(a.child):a.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Ru,t}vt(Ph,"createSlottable");var kh=vt((e,t)=>{if("child"in e.props){let a=e.props.child;return He.isValidElement(a)?He.cloneElement(a,void 0,e.props.children(a.props.children)):null}return He.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Pu(e,t){let a={...t};for(let o in t){let r=e[o],n=t[o];/^on[A-Z]/.test(o)?r&&n?a[o]=(...s)=>{let i=n(...s);return r(...s),i}:r&&(a[o]=r):o==="style"?a[o]={...r,...n}:o==="className"&&(a[o]=[r,n].filter(Boolean).join(" "))}return{...e,...a}}vt(Pu,"mergeProps");function ku(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}vt(ku,"getElementRef");function Du(e){return He.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ru}vt(Du,"isSlottable");var Dh=Symbol.for("react.lazy");function cl(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Dh&&"_payload"in e&&Mu(e._payload)}vt(cl,"isLazyComponent");function Mu(e){return typeof e=="object"&&e!==null&&"then"in e}vt(Mu,"isPromiseLike");var Mh=vt(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Ah=vt(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Yr=He[" use ".trim().toString()];function Au(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=Au(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function Tu(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=Au(e))&&(o&&(o+=" "),o+=t);return o}function ee(...e){return Tu(e)}var Ou=require("react/jsx-runtime");function Th({variant:e="default",size:t="default",className:a}={}){let o=e??"default",r=t??"default";return ee("kanban-button",`kanban-button--${o}`,`kanban-button--size-${r}`,a)}var Ae=Eu.forwardRef(({className:e,variant:t,size:a,asChild:o=!1,...r},n)=>(0,Ou.jsx)(o?yu:"button",{className:Th({variant:t,size:a,className:e}),ref:n,...r}));Ae.displayName="Button";var mr=U(require("react"),1);var xe=U(require("react"),1);var Eh=Object.defineProperty,io=(e,t)=>Eh(e,"name",{value:t,configurable:!0}),Fu=!!(typeof window<"u"&&window.document&&window.document.createElement);function V(e,t,{checkForDefaultPrevented:a=!0}={}){return io(function(r){if(e?.(r),a===!1||!r||!r.defaultPrevented)return t?.(r)},"handleEvent")}io(V,"composeEventHandlers");function Oh(e){if(!Fu)throw new Error("Cannot access window outside of the DOM");return e?.ownerDocument?.defaultView??window}io(Oh,"getOwnerWindow");function fl(e){if(!Fu)throw new Error("Cannot access document outside of the DOM");return e?.ownerDocument??document}io(fl,"getOwnerDocument");function Bu(e,t=!1){let{activeElement:a}=fl(e);if(!a?.nodeName)return null;if(Nu(a)&&a.contentDocument)return Bu(a.contentDocument.body,t);if(t){let o=a.getAttribute("aria-activedescendant");if(o){let r=fl(a).getElementById(o);if(r)return r}}return a}io(Bu,"getActiveElement");function Nu(e){return e.tagName==="IFRAME"}io(Nu,"isFrame");var ht=U(require("react"),1),pl=require("react/jsx-runtime"),Fh=Object.defineProperty,mt=(e,t)=>Fh(e,"name",{value:t,configurable:!0});function Bh(e,t){let a=ht.createContext(t);a.displayName=e+"Context";let o=mt(n=>{let{children:l,...s}=n,i=ht.useMemo(()=>s,Object.values(s));return(0,pl.jsx)(a.Provider,{value:i,children:l})},"Provider");o.displayName=e+"Provider";function r(n,l={}){let{optional:s=!1}=l,i=ht.useContext(a);if(i)return i;if(t!==void 0)return t;if(!s)throw new Error(`\`${n}\` must be used within \`${e}\``)}return mt(r,"useContext"),[o,r]}mt(Bh,"createContext");function qe(e,t=[]){let a=[];function o(n,l){let s=ht.createContext(l);s.displayName=n+"Context";let i=a.length;a=[...a,l];let u=mt(d=>{let{scope:f,children:h,...g}=d,m=f?.[e]?.[i]||s,p=ht.useMemo(()=>g,Object.values(g));return(0,pl.jsx)(m.Provider,{value:p,children:h})},"Provider");u.displayName=n+"Provider";function c(d,f,h={}){let{optional:g=!1}=h,m=f?.[e]?.[i]||s,p=ht.useContext(m);if(p)return p;if(l!==void 0)return l;if(!g)throw new Error(`\`${d}\` must be used within \`${n}\``)}return mt(c,"useContext"),[u,c]}mt(o,"createContext");let r=mt(()=>{let n=a.map(l=>ht.createContext(l));return mt(function(s){let i=s?.[e]||n;return ht.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])},"useScope")},"createScope");return r.scopeName=e,[o,_u(r,...t)]}mt(qe,"createContextScope");function _u(...e){let t=e[0];if(e.length===1)return t;let a=mt(()=>{let o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return mt(function(n){let l=o.reduce((s,{useScope:i,scopeName:u})=>{let d=i(n)[`__scope${u}`];return{...s,...d}},{});return ht.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return a.scopeName=t.scopeName,a}mt(_u,"composeContextScopes");var ml=U(require("react"),1);var Hu=U(require("react"),1),ie=globalThis?.document?Hu.useLayoutEffect:()=>{};var Nh=Object.defineProperty,_h=(e,t)=>Nh(e,"name",{value:t,configurable:!0}),Hh=ml[" useId ".trim().toString()]||(()=>{}),qh=0;function lt(e){let[t,a]=ml.useState(Hh());return ie(()=>{e||a(o=>o??String(qh++))},[e]),e||(t?`radix-${t}`:"")}_h(lt,"useId");var gt=U(require("react"),1);var Zr=!1;var bt=U(require("react"),1);var uo=U(require("react"),1),Uh=Object.defineProperty,Vh=(e,t)=>Uh(e,"name",{value:t,configurable:!0}),qu=uo[" useEffectEvent ".trim().toString()],Uu=uo[" useInsertionEffect ".trim().toString()];function hl(e){if(typeof qu=="function")return qu(e);let t=uo.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Uu=="function"?Uu(()=>{t.current=e}):ie(()=>{t.current=e}),uo.useMemo(()=>((...a)=>t.current?.(...a)),[])}Vh(hl,"useEffectEvent");var Wh=Object.defineProperty,ir=(e,t)=>Wh(e,"name",{value:t,configurable:!0}),Gh=gt[" useInsertionEffect ".trim().toString()]||ie;function Tt({prop:e,defaultProp:t,onChange:a=ir(()=>{},"onChange"),caller:o}){let[r,n,l]=Wu({defaultProp:t,onChange:a}),s=e!==void 0,i=s?e:r;if(Zr){let c=gt.useRef(e!==void 0);gt.useEffect(()=>{let d=c.current;d!==s&&console.warn(`${o} is changing from ${d?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=s},[s,o])}let u=gt.useCallback(c=>{if(s){let d=Gu(c)?c(e):c;d!==e&&l.current?.(d)}else n(c)},[s,e,n,l]);return[i,u]}ir(Tt,"useControllableState");function Wu({defaultProp:e,onChange:t}){let[a,o]=gt.useState(e),r=gt.useRef(a),n=gt.useRef(t);return Gh(()=>{n.current=t},[t]),gt.useEffect(()=>{r.current!==a&&(n.current?.(a),r.current=a)},[a,r]),[a,o,n]}ir(Wu,"useUncontrolledState");function Gu(e){return typeof e=="function"}ir(Gu,"isFunction");var Vu=Symbol("RADIX:SYNC_STATE");function zh(e,t,a,o){let{prop:r,defaultProp:n,onChange:l,caller:s}=t,i=r!==void 0,u=hl(l);if(Zr){let p=bt.useRef(r!==void 0);bt.useEffect(()=>{let x=p.current;x!==i&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=i},[i,s])}let c=[{...a,state:n}];o&&c.push(o);let[d,f]=bt.useReducer((p,x)=>{if(x.type===Vu)return{...p,state:x.state};let C=e(p,x);return i&&!Object.is(C.state,p.state)&&u(C.state),C},...c),h=d.state,g=bt.useRef(h);bt.useEffect(()=>{g.current!==h&&(g.current=h,i||u(h))},[h,g,i]);let m=bt.useMemo(()=>r!==void 0?{...d,state:r}:d,[d,r]);return bt.useEffect(()=>{i&&!Object.is(r,d.state)&&f({type:Vu,state:r})},[r,d.state,i]),[m,f]}ir(zh,"useControllableStateReducer");var ce=U(require("react"),1);var zu=U(require("react"),1),Xu=U(require("react-dom"),1);var Ku=require("react/jsx-runtime"),Xh=Object.defineProperty,Kh=(e,t)=>Xh(e,"name",{value:t,configurable:!0}),jh=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],te=jh.reduce((e,t)=>{let a=Xe(`Primitive.${t}`),o=zu.forwardRef((r,n)=>{let{asChild:l,...s}=r,i=l?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Ku.jsx)(i,{...s,ref:n})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function ur(e,t){e&&Xu.flushSync(()=>e.dispatchEvent(t))}Kh(ur,"dispatchDiscreteCustomEvent");var co=U(require("react"),1),$h=Object.defineProperty,Yh=(e,t)=>$h(e,"name",{value:t,configurable:!0});function Oe(e){let t=co.useRef(e);return co.useEffect(()=>{t.current=e}),co.useMemo(()=>((...a)=>t.current?.(...a)),[])}Yh(Oe,"useCallbackRef");var $u=require("react/jsx-runtime"),Zh=Object.defineProperty,Fe=(e,t)=>Zh(e,"name",{value:t,configurable:!0}),gl="dismissableLayer.update",Qh="dismissableLayer.pointerDownOutside",Jh="dismissableLayer.focusOutside",ju,Yu=ce.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),fo=ce.forwardRef(Fe(function(t,a){let{disableOutsidePointerEvents:o=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:n,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:i,onDismiss:u,...c}=t,d=ce.useContext(Yu),[f,h]=ce.useState(null),g=f?.ownerDocument??globalThis?.document,[,m]=ce.useState({}),p=Q(a,h),x=Array.from(d.layers),[C]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),L=C?x.indexOf(C):-1,I=f?x.indexOf(f):-1,v=d.layersWithOutsidePointerEventsDisabled.size>0,b=I>=L,y=ce.useRef(!1),R=Zu(T=>{l?.(T),i?.(T),T.defaultPrevented||u?.()},{ownerDocument:g,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:y,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:ce.useCallback(T=>{if(!(T instanceof Node))return!1;let B=[...d.branches].some(q=>q.contains(T));return b&&!B},[d.branches,b])}),k=Qu(T=>{if(r&&y.current)return;let B=T.target;[...d.branches].some(Z=>Z.contains(B))||(s?.(T),i?.(T),T.defaultPrevented||u?.())},g),O=f?I===x.length-1:!1,E=Oe(T=>{T.key==="Escape"&&(n?.(T),!T.defaultPrevented&&u&&(T.preventDefault(),u()))});return ce.useEffect(()=>{if(O)return g.addEventListener("keydown",E,{capture:!0}),()=>g.removeEventListener("keydown",E,{capture:!0})},[g,O,E]),ce.useEffect(()=>{if(f)return o&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(ju=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),xl(),()=>{o&&(d.layersWithOutsidePointerEventsDisabled.delete(f),d.layersWithOutsidePointerEventsDisabled.size===0&&(g.body.style.pointerEvents=ju))}},[f,g,o,d]),ce.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),xl())},[f,d]),ce.useEffect(()=>{let T=Fe(()=>m({}),"handleUpdate");return document.addEventListener(gl,T),()=>document.removeEventListener(gl,T)},[]),(0,$u.jsx)(te.div,{...c,ref:p,style:{pointerEvents:v?b?"auto":"none":void 0,...t.style},onFocusCapture:V(t.onFocusCapture,k.onFocusCapture),onBlurCapture:V(t.onBlurCapture,k.onBlurCapture),onPointerDownCapture:V(t.onPointerDownCapture,R.onPointerDownCapture)})},"DismissableLayer"));function Ll(){let e=ce.useContext(Yu),[t,a]=ce.useState(null);return ce.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),a}Fe(Ll,"useDismissableLayerSurface");var eg=Fe(()=>!0,"IS_TRUE");function Zu(e,t){let{ownerDocument:a=globalThis?.document,deferPointerDownOutside:o=!1,isDeferredPointerDownOutsideRef:r,dismissableSurfaces:n,shouldHandlePointerDownOutside:l=eg}=t,s=Oe(e),i=ce.useRef(!1),u=ce.useRef(!1),c=ce.useRef(new Map),d=ce.useRef(()=>{});return ce.useEffect(()=>{function f(){u.current=!1,r.current=!1,c.current.clear()}Fe(f,"resetOutsideInteraction");function h(){return Array.from(c.current.values()).some(Boolean)}Fe(h,"isOutsideInteractionIntercepted");function g(L){if(!u.current)return;let I=L.target;I instanceof Node&&[...n].some(b=>b.contains(I))||c.current.set(L.type,!0),L.type==="click"&&window.setTimeout(()=>{u.current&&d.current()},0)}Fe(g,"handleInteractionCapture");function m(L){u.current&&c.current.set(L.type,!1)}Fe(m,"handleInteractionBubble");let p=Fe(L=>{if(L.target&&!i.current){let v=function(){a.removeEventListener("click",d.current);let y=h();f(),y||Cl(Qh,s,b,{discrete:!0})};var I=v;if(Fe(v,"handleAndDispatchPointerDownOutsideEvent"),!l(L.target)){a.removeEventListener("click",d.current),f(),i.current=!1;return}let b={originalEvent:L};u.current=!0,r.current=o&&L.button===0,c.current.clear(),!o||L.button!==0?v():(a.removeEventListener("click",d.current),d.current=v,a.addEventListener("click",d.current,{once:!0}))}else a.removeEventListener("click",d.current),f();i.current=!1},"handlePointerDown"),x=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(let L of x)a.addEventListener(L,g,!0),a.addEventListener(L,m);let C=window.setTimeout(()=>{a.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(C),a.removeEventListener("pointerdown",p),a.removeEventListener("click",d.current);for(let L of x)a.removeEventListener(L,g,!0),a.removeEventListener(L,m)}},[a,s,o,r,n,l]),{onPointerDownCapture:Fe(()=>i.current=!0,"onPointerDownCapture")}}Fe(Zu,"usePointerDownOutside");function Qu(e,t=globalThis?.document){let a=Oe(e),o=ce.useRef(!1);return ce.useEffect(()=>{let r=Fe(n=>{n.target&&!o.current&&Cl(Jh,a,{originalEvent:n},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,a]),{onFocusCapture:Fe(()=>o.current=!0,"onFocusCapture"),onBlurCapture:Fe(()=>o.current=!1,"onBlurCapture")}}Fe(Qu,"useFocusOutside");function xl(){let e=new CustomEvent(gl);document.dispatchEvent(e)}Fe(xl,"dispatchUpdate");function Cl(e,t,a,{discrete:o}){let r=a.originalEvent.target,n=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t&&r.addEventListener(e,t,{once:!0}),o?ur(r,n):r.dispatchEvent(n)}Fe(Cl,"handleAndDispatchCustomEvent");var xt=U(require("react"),1);var td=require("react/jsx-runtime"),tg=Object.defineProperty,Ye=(e,t)=>tg(e,"name",{value:t,configurable:!0}),Il="focusScope.autoFocusOnMount",vl="focusScope.autoFocusOnUnmount",Ju={bubbles:!1,cancelable:!0},po=xt.forwardRef(Ye(function(t,a){let{loop:o=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:l,...s}=t,[i,u]=xt.useState(null),c=Oe(n),d=Oe(l),f=xt.useRef(null),h=Q(a,u),g=xt.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;xt.useEffect(()=>{if(r){let L=function(y){if(g.paused||!i)return;let R=y.target;i.contains(R)?f.current=R:Ut(f.current,{select:!0})},I=function(y){if(g.paused||!i)return;let R=y.relatedTarget;R!==null&&(i.contains(R)||Ut(f.current,{select:!0}))},v=function(y){if(document.activeElement===document.body)for(let k of y)k.removedNodes.length>0&&Ut(i)};var p=L,x=I,C=v;Ye(L,"handleFocusIn"),Ye(I,"handleFocusOut"),Ye(v,"handleMutations"),document.addEventListener("focusin",L),document.addEventListener("focusout",I);let b=new MutationObserver(v);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",I),b.disconnect()}}},[r,i,g.paused]),xt.useEffect(()=>{if(i){ed.add(g);let p=document.activeElement;if(!i.contains(p)){let C=new CustomEvent(Il,Ju);i.addEventListener(Il,c),i.dispatchEvent(C),C.defaultPrevented||(ad(sd(wl(i)),{select:!0}),document.activeElement===p&&Ut(i))}return()=>{i.removeEventListener(Il,c),setTimeout(()=>{let C=new CustomEvent(vl,Ju);i.addEventListener(vl,d),i.dispatchEvent(C),C.defaultPrevented||Ut(p??document.body,{select:!0}),i.removeEventListener(vl,d),ed.remove(g)},0)}}},[i,c,d,g]);let m=xt.useCallback(p=>{if(!o&&!r||g.paused)return;let x=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,C=document.activeElement;if(x&&C){let L=p.currentTarget,[I,v]=od(L);I&&v?!p.shiftKey&&C===v?(p.preventDefault(),o&&Ut(I,{select:!0})):p.shiftKey&&C===I&&(p.preventDefault(),o&&Ut(v,{select:!0})):C===L&&p.preventDefault()}},[o,r,g.paused]);return(0,td.jsx)(te.div,{tabIndex:-1,...s,ref:h,onKeyDown:m})},"FocusScope"));function ad(e,{select:t=!1}={}){let a=document.activeElement;for(let o of e)if(Ut(o,{select:t}),document.activeElement!==a)return}Ye(ad,"focusFirst");function od(e){let t=wl(e),a=bl(t,e),o=bl(t.reverse(),e);return[a,o]}Ye(od,"getTabbableEdges");function wl(e){let t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:Ye(o=>{let r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}Ye(wl,"getTabbableCandidates");function bl(e,t){let a=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(let o of e)if(!(a?!o.checkVisibility({checkVisibilityCSS:!0}):rd(o,{upTo:t})))return o}Ye(bl,"findVisible");function rd(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}Ye(rd,"isHidden");function nd(e){return e instanceof HTMLInputElement&&"select"in e}Ye(nd,"isSelectableInput");function Ut(e,{select:t=!1}={}){if(e&&e.focus){let a=document.activeElement;e.focus({preventScroll:!0}),e!==a&&nd(e)&&t&&e.select()}}Ye(Ut,"focus");var ed=ld();function ld(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),e=Sl(e,t),e.unshift(t)},remove(t){e=Sl(e,t),e[0]?.resume()}}}Ye(ld,"createFocusScopesStack");function Sl(e,t){let a=[...e],o=a.indexOf(t);return o!==-1&&a.splice(o,1),a}Ye(Sl,"arrayRemove");function sd(e){return e.filter(t=>t.tagName!=="A")}Ye(sd,"removeLinks");var Qr=U(require("react"),1),id=U(require("react-dom"),1);var ud=require("react/jsx-runtime"),ag=Object.defineProperty,og=(e,t)=>ag(e,"name",{value:t,configurable:!0}),mo=Qr.forwardRef(og(function(t,a){let{container:o,...r}=t,[n,l]=Qr.useState(!1);ie(()=>l(!0),[]);let s=o||n&&globalThis?.document?.body;return s?id.createPortal((0,ud.jsx)(te.div,{...r,ref:a}),s):null},"Portal"));var Ue=U(require("react"),1);var dd=U(require("react"),1),rg=Object.defineProperty,Vt=(e,t)=>rg(e,"name",{value:t,configurable:!0});function cd(e,t){return dd.useReducer((a,o)=>t[a][o]??a,e)}Vt(cd,"useStateMachine");var Wt=Vt(e=>{let{present:t,children:a}=e,o=fd(t),r=typeof a=="function"?a({present:o.isPresent}):Ue.Children.only(a),n=pd(o.ref,md(r));return typeof a=="function"||o.isPresent?Ue.cloneElement(r,{ref:n}):null},"Presence");function fd(e){let[t,a]=Ue.useState(),o=Ue.useRef(null),r=Ue.useRef(e),n=Ue.useRef("none"),l=Ue.useRef(void 0),s=e?"mounted":"unmounted",[i,u]=cd(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ue.useEffect(()=>{i==="mounted"?(n.current=l.current??ho(o.current),l.current=void 0):n.current="none"},[i]),ie(()=>{let c=o.current,d=r.current;if(d!==e){let h=n.current,g=ho(c);e?(l.current=g,u("MOUNT")):g==="none"||c?.display==="none"?u("UNMOUNT"):u(d&&h!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),ie(()=>{if(t){let c,d=t.ownerDocument.defaultView??window,f=Vt(g=>{let p=ho(o.current).includes(CSS.escape(g.animationName));if(g.target===t&&p&&(u("ANIMATION_END"),!r.current)){let x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},"handleAnimationEnd"),h=Vt(g=>{g.target===t&&(n.current=ho(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:Ue.useCallback(c=>{if(c){let d=getComputedStyle(c);o.current=d,l.current=ho(d)}else o.current=null;a(c)},[])}}Vt(fd,"usePresence");function yl(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Vt(yl,"setRef");function pd(...e){let t=Ue.useRef(e);return t.current=e,Ue.useCallback(a=>{let o=t.current,r=!1,n=o.map(l=>{let s=yl(l,a);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let l=0;l<n.length;l++){let s=n[l];typeof s=="function"?s():yl(o[l],null)}}},[])}Vt(pd,"useStableComposedRefs");function ho(e){return e?.animationName||"none"}Vt(ho,"getAnimationName");function md(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}Vt(md,"getElementRef");var hd=U(require("react"),1),ng=Object.defineProperty,Pl=(e,t)=>ng(e,"name",{value:t,configurable:!0}),Jr=0,go=null;function lg(e){return la(),e.children}Pl(lg,"FocusGuards");function la(){hd.useEffect(()=>{go||(go={start:Rl(),end:Rl()});let{start:e,end:t}=go;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),Jr++,()=>{Jr===1&&(go?.start.remove(),go?.end.remove(),go=null),Jr=Math.max(0,Jr-1)}},[])}Pl(la,"useFocusGuards");function Rl(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Pl(Rl,"createFocusGuard");var Qe=function(){return Qe=Object.assign||function(t){for(var a,o=1,r=arguments.length;o<r;o++){a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},Qe.apply(this,arguments)};function en(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a}function gd(e,t,a){if(a||arguments.length===2)for(var o=0,r=t.length,n;o<r;o++)(n||!(o in t))&&(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var nn=U(require("react"));var Ke=U(require("react"));var ya="right-scroll-bar-position",Ra="width-before-scroll-bar",kl="with-scroll-bars-hidden",Dl="--removed-body-scroll-bar-size";function tn(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var xd=require("react");function Ld(e,t){var a=(0,xd.useState)(function(){return{value:e,callback:t,facade:{get current(){return a.value},set current(o){var r=a.value;r!==o&&(a.value=o,a.callback(o,r))}}}})[0];return a.callback=t,a.facade}var an=U(require("react"));var sg=typeof window<"u"?an.useLayoutEffect:an.useEffect,Cd=new WeakMap;function Ml(e,t){var a=Ld(t||null,function(o){return e.forEach(function(r){return tn(r,o)})});return sg(function(){var o=Cd.get(a);if(o){var r=new Set(o),n=new Set(e),l=a.current;r.forEach(function(s){n.has(s)||tn(s,null)}),n.forEach(function(s){r.has(s)||tn(s,l)})}Cd.set(a,e)},[e]),a}function ig(e){return e}function ug(e,t){t===void 0&&(t=ig);var a=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:e},useMedium:function(n){var l=t(n,o);return a.push(l),function(){a=a.filter(function(s){return s!==l})}},assignSyncMedium:function(n){for(o=!0;a.length;){var l=a;a=[],l.forEach(n)}a={push:function(s){return n(s)},filter:function(){return a}}},assignMedium:function(n){o=!0;var l=[];if(a.length){var s=a;a=[],s.forEach(n),l=a}var i=function(){var c=l;l=[],c.forEach(n)},u=function(){return Promise.resolve().then(i)};u(),a={push:function(c){l.push(c),u()},filter:function(c){return l=l.filter(c),a}}}};return r}function Al(e){e===void 0&&(e={});var t=ug(null);return t.options=Qe({async:!0,ssr:!1},e),t}var Id=U(require("react")),vd=function(e){var t=e.sideCar,a=en(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return Id.createElement(o,Qe({},a))};vd.isSideCarExport=!0;function Tl(e,t){return e.useMedium(t),vd}var on=Al();var El=function(){},dr=Ke.forwardRef(function(e,t){var a=Ke.useRef(null),o=Ke.useState({onScrollCapture:El,onWheelCapture:El,onTouchMoveCapture:El}),r=o[0],n=o[1],l=e.forwardProps,s=e.children,i=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,h=e.noRelative,g=e.noIsolation,m=e.inert,p=e.allowPinchZoom,x=e.as,C=x===void 0?"div":x,L=e.gapMode,I=en(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),v=f,b=Ml([a,t]),y=Qe(Qe({},I),r);return Ke.createElement(Ke.Fragment,null,c&&Ke.createElement(v,{sideCar:on,removeScrollBar:u,shards:d,noRelative:h,noIsolation:g,inert:m,setCallbacks:n,allowPinchZoom:!!p,lockRef:a,gapMode:L}),l?Ke.cloneElement(Ke.Children.only(s),Qe(Qe({},y),{ref:b})):Ke.createElement(C,Qe({},y,{className:i,ref:b}),s))});dr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};dr.classNames={fullWidth:Ra,zeroRight:ya};var ge=U(require("react"));var Lo=U(require("react"));var wd=U(require("react"));var bd;var Sd=function(){if(bd)return bd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function dg(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Sd();return t&&e.setAttribute("nonce",t),e}function cg(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function fg(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ol=function(){var e=0,t=null;return{add:function(a){e==0&&(t=dg())&&(cg(t,a),fg(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var Fl=function(){var e=Ol();return function(t,a){wd.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}};var cr=function(){var e=Fl(),t=function(a){var o=a.styles,r=a.dynamic;return e(o,r),null};return t};var pg={left:0,top:0,right:0,gap:0},Bl=function(e){return parseInt(e||"",10)||0},mg=function(e){var t=window.getComputedStyle(document.body),a=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Bl(a),Bl(o),Bl(r)]},Nl=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return pg;var t=mg(e),a=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-a+t[2]-t[0])}};var hg=cr(),xo="data-scroll-locked",gg=function(e,t,a,o){var r=e.left,n=e.top,l=e.right,s=e.gap;return a===void 0&&(a="margin"),`
  .`.concat(kl,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(xo,`] {
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
  
  .`).concat(ya,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(Ra,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(ya," .").concat(ya,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ra," .").concat(Ra,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(xo,`] {
    `).concat(Dl,": ").concat(s,`px;
  }
`)},yd=function(){var e=parseInt(document.body.getAttribute(xo)||"0",10);return isFinite(e)?e:0},xg=function(){Lo.useEffect(function(){return document.body.setAttribute(xo,(yd()+1).toString()),function(){var e=yd()-1;e<=0?document.body.removeAttribute(xo):document.body.setAttribute(xo,e.toString())}},[])},_l=function(e){var t=e.noRelative,a=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;xg();var n=Lo.useMemo(function(){return Nl(r)},[r]);return Lo.createElement(hg,{styles:gg(n,!t,r,a?"":"!important")})};var Hl=!1;if(typeof window<"u")try{fr=Object.defineProperty({},"passive",{get:function(){return Hl=!0,!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Hl=!1}var fr,Pa=Hl?{passive:!1}:!1;var Lg=function(e){return e.tagName==="TEXTAREA"},Rd=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return a[t]!=="hidden"&&!(a.overflowY===a.overflowX&&!Lg(e)&&a[t]==="visible")},Cg=function(e){return Rd(e,"overflowY")},Ig=function(e){return Rd(e,"overflowX")},ql=function(e,t){var a=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Pd(e,o);if(r){var n=kd(e,o),l=n[1],s=n[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==a.body);return!1},vg=function(e){var t=e.scrollTop,a=e.scrollHeight,o=e.clientHeight;return[t,a,o]},bg=function(e){var t=e.scrollLeft,a=e.scrollWidth,o=e.clientWidth;return[t,a,o]},Pd=function(e,t){return e==="v"?Cg(t):Ig(t)},kd=function(e,t){return e==="v"?vg(t):bg(t)},Sg=function(e,t){return e==="h"&&t==="rtl"?-1:1},Dd=function(e,t,a,o,r){var n=Sg(e,window.getComputedStyle(t).direction),l=n*o,s=a.target,i=t.contains(s),u=!1,c=l>0,d=0,f=0;do{if(!s)break;var h=kd(e,s),g=h[0],m=h[1],p=h[2],x=m-p-n*g;(g||x)&&Pd(e,s)&&(d+=x,f+=g);var C=s.parentNode;s=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(c&&(r&&Math.abs(d)<1||!r&&l>d)||!c&&(r&&Math.abs(f)<1||!r&&-l>f))&&(u=!0),u};var rn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Md=function(e){return[e.deltaX,e.deltaY]},Ad=function(e){return e&&"current"in e?e.current:e},wg=function(e,t){return e[0]===t[0]&&e[1]===t[1]},yg=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Rg=0,Co=[];function Td(e){var t=ge.useRef([]),a=ge.useRef([0,0]),o=ge.useRef(),r=ge.useState(Rg++)[0],n=ge.useState(cr)[0],l=ge.useRef(e);ge.useEffect(function(){l.current=e},[e]),ge.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var m=gd([e.lockRef.current],(e.shards||[]).map(Ad),!0).filter(Boolean);return m.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),m.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=ge.useCallback(function(m,p){if("touches"in m&&m.touches.length===2||m.type==="wheel"&&m.ctrlKey)return!l.current.allowPinchZoom;var x=rn(m),C=a.current,L="deltaX"in m?m.deltaX:C[0]-x[0],I="deltaY"in m?m.deltaY:C[1]-x[1],v,b=m.target,y=Math.abs(L)>Math.abs(I)?"h":"v";if("touches"in m&&y==="h"&&b.type==="range")return!1;var R=window.getSelection(),k=R&&R.anchorNode,O=k?k===b||k.contains(b):!1;if(O)return!1;var E=ql(y,b);if(!E)return!0;if(E?v=y:(v=y==="v"?"h":"v",E=ql(y,b)),!E)return!1;if(!o.current&&"changedTouches"in m&&(L||I)&&(o.current=v),!v)return!0;var T=o.current||v;return Dd(T,p,m,T==="h"?L:I,!0)},[]),i=ge.useCallback(function(m){var p=m;if(!(!Co.length||Co[Co.length-1]!==n)){var x="deltaY"in p?Md(p):rn(p),C=t.current.filter(function(v){return v.name===p.type&&(v.target===p.target||p.target===v.shadowParent)&&wg(v.delta,x)})[0];if(C&&C.should){p.cancelable&&p.preventDefault();return}if(!C){var L=(l.current.shards||[]).map(Ad).filter(Boolean).filter(function(v){return v.contains(p.target)}),I=L.length>0?s(p,L[0]):!l.current.noIsolation;I&&p.cancelable&&p.preventDefault()}}},[]),u=ge.useCallback(function(m,p,x,C){var L={name:m,delta:p,target:x,should:C,shadowParent:Pg(x)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(I){return I!==L})},1)},[]),c=ge.useCallback(function(m){a.current=rn(m),o.current=void 0},[]),d=ge.useCallback(function(m){u(m.type,Md(m),m.target,s(m,e.lockRef.current))},[]),f=ge.useCallback(function(m){u(m.type,rn(m),m.target,s(m,e.lockRef.current))},[]);ge.useEffect(function(){return Co.push(n),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",i,Pa),document.addEventListener("touchmove",i,Pa),document.addEventListener("touchstart",c,Pa),function(){Co=Co.filter(function(m){return m!==n}),document.removeEventListener("wheel",i,Pa),document.removeEventListener("touchmove",i,Pa),document.removeEventListener("touchstart",c,Pa)}},[]);var h=e.removeScrollBar,g=e.inert;return ge.createElement(ge.Fragment,null,g?ge.createElement(n,{styles:yg(r)}):null,h?ge.createElement(_l,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Pg(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ed=Tl(on,Td);var Od=nn.forwardRef(function(e,t){return nn.createElement(dr,Qe({},e,{ref:t,sideCar:Ed}))});Od.classNames=dr.classNames;var ka=Od;var kg=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Io=new WeakMap,ln=new WeakMap,sn={},Ul=0,Fd=function(e){return e&&(e.host||Fd(e.parentNode))},Dg=function(e,t){return t.map(function(a){if(e.contains(a))return a;var o=Fd(a);return o&&e.contains(o)?o:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},Mg=function(e,t,a,o){var r=Dg(t,Array.isArray(e)?e:[e]);sn[a]||(sn[a]=new WeakMap);var n=sn[a],l=[],s=new Set,i=new Set(r),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};r.forEach(u);var c=function(d){!d||i.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var h=f.getAttribute(o),g=h!==null&&h!=="false",m=(Io.get(f)||0)+1,p=(n.get(f)||0)+1;Io.set(f,m),n.set(f,p),l.push(f),m===1&&g&&ln.set(f,!0),p===1&&f.setAttribute(a,"true"),g||f.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",f,x)}})};return c(t),s.clear(),Ul++,function(){l.forEach(function(d){var f=Io.get(d)-1,h=n.get(d)-1;Io.set(d,f),n.set(d,h),f||(ln.has(d)||d.removeAttribute(o),ln.delete(d)),h||d.removeAttribute(a)}),Ul--,Ul||(Io=new WeakMap,Io=new WeakMap,ln=new WeakMap,sn={})}},vo=function(e,t,a){a===void 0&&(a="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=t||kg(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),Mg(o,r,a,"aria-hidden")):function(){return null}};var Ce=require("react/jsx-runtime"),Ag=Object.defineProperty,Lt=(e,t)=>Ag(e,"name",{value:t,configurable:!0}),Wl="Dialog",[Bd,lS]=qe(Wl),[Tg,Et]=Bd(Wl),Nd=Lt(e=>{let{__scopeDialog:t,children:a,open:o,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,s=xe.useRef(null),i=xe.useRef(null),[u,c]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:Wl}),[d,f]=xe.useState(0),[h,g]=xe.useState(0);return(0,Ce.jsx)(Tg,{scope:t,triggerRef:s,contentRef:i,contentId:lt(),titleId:lt(),descriptionId:lt(),titlePresent:d>0,descriptionPresent:h>0,setTitleCount:f,setDescriptionCount:g,open:u,onOpenChange:c,onOpenToggle:xe.useCallback(()=>c(m=>!m),[c]),modal:l,children:a})},"Dialog");var _d="DialogPortal",[Eg,Hd]=Bd(_d,{forceMount:void 0}),qd=Lt(e=>{let{__scopeDialog:t,forceMount:a,children:o,container:r}=e,n=Et(_d,t);return(0,Ce.jsx)(Eg,{scope:t,forceMount:a,children:xe.Children.map(o,l=>(0,Ce.jsx)(Wt,{present:a||n.open,children:(0,Ce.jsx)(mo,{asChild:!0,container:r,children:l})}))})},"DialogPortal"),Vl="DialogOverlay",Gl=xe.forwardRef(Lt(function(t,a){let o=Hd(Vl,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(Vl,t.__scopeDialog);return l.modal?(0,Ce.jsx)(Wt,{present:r||l.open,children:(0,Ce.jsx)(Fg,{...n,ref:a})}):null},"DialogOverlay")),Og=Xe("DialogOverlay.RemoveScroll"),Fg=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Vl,o),l=Ll(),s=Q(a,l);return(0,Ce.jsx)(ka,{as:Og,allowPinchZoom:!0,shards:[n.contentRef],children:(0,Ce.jsx)(te.div,{"data-state":jl(n.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})},"DialogOverlayImpl")),pr="DialogContent",zl=xe.forwardRef(Lt(function(t,a){let o=Hd(pr,t.__scopeDialog),{forceMount:r=o.forceMount,...n}=t,l=Et(pr,t.__scopeDialog);return(0,Ce.jsx)(Wt,{present:r||l.open,children:l.modal?(0,Ce.jsx)(Bg,{...n,ref:a}):(0,Ce.jsx)(Ng,{...n,ref:a})})},"DialogContent")),Bg=xe.forwardRef(Lt(function(t,a){let o=Et(pr,t.__scopeDialog),r=xe.useRef(null),n=Q(a,o.contentRef,r);return xe.useEffect(()=>{let l=r.current;if(l)return vo(l)},[]),(0,Ce.jsx)(Ud,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,onCloseAutoFocus:V(t.onCloseAutoFocus,l=>{l.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:V(t.onPointerDownOutside,l=>{let s=l.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&l.preventDefault()}),onFocusOutside:V(t.onFocusOutside,l=>l.preventDefault())})},"DialogContentModal")),Ng=xe.forwardRef(Lt(function(t,a){let o=Et(pr,t.__scopeDialog),r=xe.useRef(!1),n=xe.useRef(!1);return(0,Ce.jsx)(Ud,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{t.onCloseAutoFocus?.(l),l.defaultPrevented||(r.current||o.triggerRef.current?.focus(),l.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:l=>{t.onInteractOutside?.(l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(n.current=!0));let s=l.target;o.triggerRef.current?.contains(s)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&n.current&&l.preventDefault()}})},"DialogContentNonModal")),Ud=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:l,...s}=t,i=Et(pr,o);return la(),(0,Ce.jsx)(Ce.Fragment,{children:(0,Ce.jsx)(po,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,Ce.jsx)(fo,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionPresent?i.descriptionId:void 0,"aria-labelledby":i.titlePresent?i.titleId:void 0,"data-state":jl(i.open),...s,ref:a,deferPointerDownOutside:!0,onDismiss:()=>i.onOpenChange(!1)})})})},"DialogContentImpl")),_g="DialogTitle",Xl=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(_g,o),{setTitleCount:l}=n;return ie(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ce.jsx)(te.h2,{id:n.titleId,...r,ref:a})},"DialogTitle")),Hg="DialogDescription",Kl=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(Hg,o),{setDescriptionCount:l}=n;return ie(()=>(l(s=>s+1),()=>l(s=>s-1)),[l]),(0,Ce.jsx)(te.p,{id:n.descriptionId,...r,ref:a})},"DialogDescription")),qg="DialogClose",Vd=xe.forwardRef(Lt(function(t,a){let{__scopeDialog:o,...r}=t,n=Et(qg,o);return(0,Ce.jsx)(te.button,{type:"button",...r,ref:a,onClick:V(t.onClick,()=>n.onOpenChange(!1))})},"DialogClose"));function jl(e){return e?"open":"closed"}Lt(jl,"getState");var Gd=require("react"),$l="dsh-kanban",zd={boardTab:"\u770B\u677F",loading:"\u770B\u677F\u52A0\u8F7D\u4E2D\u2026",loadFailed:"\u770B\u677F\u52A0\u8F7D\u5931\u8D25\uFF1A",actionFailed:"\u64CD\u4F5C\u5931\u8D25\uFF1A",refresh:"\u5237\u65B0\u770B\u677F",settings:"\u8BBE\u7F6E",columnEdit:"\u5217\u7F16\u8F91",labelEdit:"\u6807\u7B7E\u7F16\u8F91",emptyColumn:"\u6682\u65E0\u5361\u7247",addCard:"\u6DFB\u52A0\u5361\u7247",dragSort:"\u62D6\u62FD\u6392\u5E8F",editCard:"\u7F16\u8F91\u5361\u7247",fieldTitle:"\u6807\u9898",fieldId:"\u4EFB\u52A1 ID",titlePlaceholder:"\u5361\u7247\u6807\u9898",fieldLabel:"\u6807\u7B7E",noLabel:"\u65E0\u6807\u7B7E",fieldPriority:"\u4F18\u5148\u7EA7",noPriority:"\u65E0\u4F18\u5148\u7EA7",fieldNote:"\u5907\u6CE8",notePlaceholder:"\u5907\u6CE8\uFF08\u53EF\u9009\uFF09",commentsTitle:"\u8BC4\u8BBA",commentEmpty:"\u6682\u65E0\u8BC4\u8BBA",commentPlaceholder:"\u6DFB\u52A0\u8BC4\u8BBA\u2026",sendComment:"\u53D1\u9001\u8BC4\u8BBA",cancel:"\u53D6\u6D88",save:"\u4FDD\u5B58",chatWithAgent:"\u4E0E agent \u804A\u4E00\u804A",chatCurrentSession:"\u5F53\u524D\u5BF9\u8BDD",chatNewSession:"\u65B0\u5EFA\u5BF9\u8BDD",delete:"\u5220\u9664",add:"\u6DFB\u52A0",close:"\u5173\u95ED",columnEditDesc:"\u62D6\u62FD\u8C03\u6574\u5217\u7684\u987A\u5E8F\uFF0C\u6216\u91CD\u547D\u540D\u3001\u5220\u9664\u3001\u65B0\u589E\u5217\u8868",newColumnPlaceholder:"\u65B0\u5217\u8868\u540D\u79F0",labelEditDesc:"\u521B\u5EFA\u3001\u5220\u9664\u6216\u4FEE\u6539\u6807\u7B7E\uFF0C\u989C\u8272\u4E0E\u6807\u7B7E\u7ED1\u5B9A",newLabelPlaceholder:"\u65B0\u6807\u7B7E\u540D\u79F0",priorityFilter:"\u6309\u4F18\u5148\u7EA7\u7B5B\u9009",all:"\u5168\u90E8",warnings:"\u6570\u636E\u63D0\u793A",dismiss:"\u77E5\u9053\u4E86",activityTitle:"\u6D3B\u52A8\u8BB0\u5F55",activityEmpty:"\u6682\u65E0\u6D3B\u52A8\u8BB0\u5F55",actorHuman:"\u4F60",actorAgent:"Agent",actCreated:"\u521B\u5EFA\u4E8E\u300C{column}\u300D\uFF0C\u6807\u7B7E {label}\uFF0C\u4F18\u5148\u7EA7 {priority}",actMoved:"\u4ECE\u300C{from}\u300D\u79FB\u5230\u300C{to}\u300D",actLabel:"\u6807\u7B7E {from} \u2192 {to}",actLabelSet:"\u8BBE\u7F6E\u6807\u7B7E {to}",actLabelCleared:"\u6E05\u9664\u6807\u7B7E {from}",actPriority:"\u4F18\u5148\u7EA7 {from} \u2192 {to}",actPrioritySet:"\u8BBE\u7F6E\u4F18\u5148\u7EA7 {to}",actPriorityCleared:"\u6E05\u9664\u4F18\u5148\u7EA7 {from}",actTitle:'\u6807\u9898 "{from}" \u2192 "{to}"',actNote:"\u66F4\u65B0\u4E86\u5907\u6CE8",actComment:"\u6DFB\u52A0\u4E86\u8BC4\u8BBA",actDeleted:"\u5220\u9664\u4E86\u5361\u7247",actColumnAdded:"\u65B0\u589E\u5217\u8868\u300C{column}\u300D",actColumnRenamed:"\u5217\u8868\u300C{from}\u300D\u2192\u300C{to}\u300D",actColumnDeleted:"\u5220\u9664\u4E86\u5217\u8868\u300C{column}\u300D",actLabelAdded:"\u65B0\u589E\u6807\u7B7E\u300C{label}\u300D",actLabelRenamed:"\u6807\u7B7E\u300C{from}\u300D\u2192\u300C{to}\u300D",actLabelDeleted:"\u5220\u9664\u4E86\u6807\u7B7E\u300C{label}\u300D",actLabelColor:"\u6807\u7B7E\u300C{label}\u300D\u6539\u8272 {from} \u2192 {to}",noValue:"\u65E0"},Vg={boardTab:"Board",loading:"Loading board\u2026",loadFailed:"Failed to load board: ",actionFailed:"Action failed: ",refresh:"Refresh board",settings:"Settings",columnEdit:"Edit lists",labelEdit:"Edit labels",emptyColumn:"No cards",addCard:"Add card",dragSort:"Drag to reorder",editCard:"Edit card",fieldTitle:"Title",fieldId:"Task ID",titlePlaceholder:"Card title",fieldLabel:"Label",noLabel:"No label",fieldPriority:"Priority",noPriority:"No priority",fieldNote:"Note",notePlaceholder:"Note (optional)",commentsTitle:"Comments",commentEmpty:"No comments yet",commentPlaceholder:"Add a comment\u2026",sendComment:"Send comment",cancel:"Cancel",save:"Save",chatWithAgent:"Chat with agent",chatCurrentSession:"Current session",chatNewSession:"New session",delete:"Delete",add:"Add",close:"Close",columnEditDesc:"Drag to reorder lists, or rename, delete and add lists",newColumnPlaceholder:"New list name",labelEditDesc:"Create, delete or edit labels; color is bound to the label",newLabelPlaceholder:"New label name",priorityFilter:"Filter by priority",all:"All",warnings:"Data notice",dismiss:"Got it",activityTitle:"Activity",activityEmpty:"No activity yet",actorHuman:"You",actorAgent:"Agent",actCreated:'Created in "{column}" with label {label}, priority {priority}',actMoved:'Moved from "{from}" to "{to}"',actLabel:"Label {from} \u2192 {to}",actLabelSet:"Set label {to}",actLabelCleared:"Cleared label {from}",actPriority:"Priority {from} \u2192 {to}",actPrioritySet:"Set priority {to}",actPriorityCleared:"Cleared priority {from}",actTitle:'Title "{from}" \u2192 "{to}"',actNote:"Updated the note",actComment:"Added a comment",actDeleted:"Deleted the card",actColumnAdded:'Added list "{column}"',actColumnRenamed:'List "{from}" \u2192 "{to}"',actColumnDeleted:'Deleted list "{column}"',actLabelAdded:'Added label "{label}"',actLabelRenamed:'Label "{from}" \u2192 "{to}"',actLabelDeleted:'Deleted label "{label}"',actLabelColor:'Label "{label}" color {from} \u2192 {to}',noValue:"None"},Da=null,Yl=null;function Xd(e){let t=e.get("locale");if(t!==void 0){Da=t;try{t.register($l,"zh",zd),t.register($l,"en",Vg)}catch{}Yl=t.bind($l)}}function bo(e){return Yl?Yl(e):zd[e]??e}var Wg=e=>Da&&typeof Da.subscribe=="function"?Da.subscribe(e):()=>{},Wd=()=>Da&&typeof Da.getSnapshot=="function"?Da.getSnapshot():null;function Ve(){return(0,Gd.useSyncExternalStore)(Wg,Wd,Wd),bo}var st=require("react/jsx-runtime"),So=Nd;var Gg=qd;var Kd=mr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Gl,{ref:a,className:ee("kanban-portal kanban-dialog-overlay",e),...t}));Kd.displayName=Gl.displayName;var Ma=mr.forwardRef(({className:e,children:t,...a},o)=>{let r=Ve();return(0,st.jsxs)(Gg,{children:[(0,st.jsx)(Kd,{}),(0,st.jsxs)(zl,{ref:o,className:ee("kanban-portal kanban-dialog-content",e),...a,children:[t,(0,st.jsxs)(Vd,{className:"kanban-dialog-close",children:[(0,st.jsx)(sr,{className:"kanban-dialog-close-icon"}),(0,st.jsx)("span",{className:"kanban-sr-only",children:r("close")})]})]})]})});Ma.displayName=zl.displayName;var Aa=({className:e,...t})=>(0,st.jsx)("div",{className:ee("kanban-dialog-header",e),...t});Aa.displayName="DialogHeader";var hr=({className:e,...t})=>(0,st.jsx)("div",{className:ee("kanban-dialog-footer",e),...t});hr.displayName="DialogFooter";var Ta=mr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Xl,{ref:a,className:ee("kanban-dialog-title",e),...t}));Ta.displayName=Xl.displayName;var gr=mr.forwardRef(({className:e,...t},a)=>(0,st.jsx)(Kl,{ref:a,className:ee("kanban-dialog-description",e),...t}));gr.displayName=Kl.displayName;var wr=U(require("react"),1);var kt=U(require("react"),1);var Y=U(require("react"),1);var St=U(require("react"),1);var un=require("react/jsx-runtime"),Je=U(require("react"),1);var Ea=require("react/jsx-runtime");var zg=Object.defineProperty,Be=(e,t)=>zg(e,"name",{value:t,configurable:!0});function Oa(e){let t=e+"CollectionProvider",[a,o]=qe(t),[r,n]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=Be(m=>{let{scope:p,children:x}=m,C=St.useRef(null),L=St.useRef(new Map).current;return(0,un.jsx)(r,{scope:p,itemMap:L,collectionRef:C,children:x})},"CollectionProvider");l.displayName=t;let s=e+"CollectionSlot",i=Xe(s),u=St.forwardRef((m,p)=>{let{scope:x,children:C}=m,L=n(s,x),I=Q(p,L.collectionRef);return(0,un.jsx)(i,{ref:I,children:C})});u.displayName=s;let c=e+"CollectionItemSlot",d="data-radix-collection-item",f=Xe(c),h=St.forwardRef((m,p)=>{let{scope:x,children:C,...L}=m,I=St.useRef(null),v=Q(p,I),b=n(c,x);return St.useEffect(()=>(b.itemMap.set(I,{ref:I,...L}),()=>{b.itemMap.delete(I)})),(0,un.jsx)(f,{[d]:"",ref:v,children:C})});h.displayName=c;function g(m){let p=n(e+"CollectionConsumer",m);return St.useCallback(()=>{let C=p.collectionRef.current;if(!C)return[];let L=Array.from(C.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((b,y)=>L.indexOf(b.ref.current)-L.indexOf(y.ref.current))},[p.collectionRef,p.itemMap])}return Be(g,"useCollection"),[{Provider:l,Slot:u,ItemSlot:h},g,o]}Be(Oa,"createCollection");var jd=new WeakMap,Pe,it,Zl=(it=class extends Map{constructor(a){super(a);li(this,Pe);Xn(this,Pe,[...super.keys()]),jd.set(this,!0)}set(a,o){return jd.get(this)&&(this.has(a)?Ge(this,Pe)[Ge(this,Pe).indexOf(a)]=a:Ge(this,Pe).push(a)),super.set(a,o),this}insert(a,o,r){let n=this.has(o),l=Ge(this,Pe).length,s=Jl(a),i=s>=0?s:l+s,u=i<0||i>=l?-1:i;if(u===this.size||n&&u===this.size-1||u===-1)return this.set(o,r),this;let c=this.size+(n?0:1);s<0&&i++;let d=[...Ge(this,Pe)],f,h=!1;for(let g=i;g<c;g++)if(i===g){let m=d[g];d[g]===o&&(m=d[g+1]),n&&this.delete(o),f=this.get(m),this.set(o,r)}else{!h&&d[g-1]===o&&(h=!0);let m=d[h?g:g-1],p=f;f=this.get(m),this.delete(m),this.set(m,p)}return this}with(a,o,r){let n=new it(this);return n.insert(a,o,r),n}before(a){let o=Ge(this,Pe).indexOf(a)-1;if(!(o<0))return this.entryAt(o)}setBefore(a,o,r){let n=Ge(this,Pe).indexOf(a);return n===-1?this:this.insert(n,o,r)}after(a){let o=Ge(this,Pe).indexOf(a);if(o=o===-1||o===this.size-1?-1:o+1,o!==-1)return this.entryAt(o)}setAfter(a,o,r){let n=Ge(this,Pe).indexOf(a);return n===-1?this:this.insert(n+1,o,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Xn(this,Pe,[]),super.clear()}delete(a){let o=super.delete(a);return o&&Ge(this,Pe).splice(Ge(this,Pe).indexOf(a),1),o}deleteAt(a){let o=this.keyAt(a);return o!==void 0?this.delete(o):!1}at(a){let o=dn(Ge(this,Pe),a);if(o!==void 0)return this.get(o)}entryAt(a){let o=dn(Ge(this,Pe),a);if(o!==void 0)return[o,this.get(o)]}indexOf(a){return Ge(this,Pe).indexOf(a)}keyAt(a){return dn(Ge(this,Pe),a)}from(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.at(n)}keyFrom(a,o){let r=this.indexOf(a);if(r===-1)return;let n=r+o;return n<0&&(n=0),n>=this.size&&(n=this.size-1),this.keyAt(n)}find(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return n;r++}}findIndex(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return r;r++}return-1}filter(a,o){let r=[],n=0;for(let l of this)Reflect.apply(a,o,[l,n,this])&&r.push(l),n++;return new it(r)}map(a,o){let r=[],n=0;for(let l of this)r.push([l[0],Reflect.apply(a,o,[l,n,this])]),n++;return new it(r)}reduce(...a){let[o,r]=a,n=0,l=r??this.at(0);for(let s of this)n===0&&a.length===1?l=s:l=Reflect.apply(o,this,[l,s,n,this]),n++;return l}reduceRight(...a){let[o,r]=a,n=r??this.at(-1);for(let l=this.size-1;l>=0;l--){let s=this.at(l);l===this.size-1&&a.length===1?n=s:n=Reflect.apply(o,this,[n,s,l,this])}return n}toSorted(a){let o=[...this.entries()].sort(a);return new it(o)}toReversed(){let a=new it;for(let o=this.size-1;o>=0;o--){let r=this.keyAt(o),n=this.get(r);a.set(r,n)}return a}toSpliced(...a){let o=[...this.entries()];return o.splice(...a),new it(o)}slice(a,o){let r=new it,n=this.size-1;if(a===void 0)return r;a<0&&(a=a+this.size),o!==void 0&&o>0&&(n=o-1);for(let l=a;l<=n;l++){let s=this.keyAt(l),i=this.get(s);r.set(s,i)}return r}every(a,o){let r=0;for(let n of this){if(!Reflect.apply(a,o,[n,r,this]))return!1;r++}return!0}some(a,o){let r=0;for(let n of this){if(Reflect.apply(a,o,[n,r,this]))return!0;r++}return!1}},Pe=new WeakMap,Be(it,"OrderedDict"),it);function dn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let a=$d(e,t);return a===-1?void 0:e[a]}Be(dn,"at");function $d(e,t){let a=e.length,o=Jl(t),r=o>=0?o:a+o;return r<0||r>=a?-1:r}Be($d,"toSafeIndex");function Jl(e){return e!==e||e===0?0:Math.trunc(e)}Be(Jl,"toSafeInteger");function Xg(e){let t=e+"CollectionProvider",[a,o]=qe(t),[r,n]=a(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Zl,setItemMap:Be(()=>{},"setItemMap")}),l=Be(({state:L,...I})=>L?(0,Ea.jsx)(i,{...I,state:L}):(0,Ea.jsx)(s,{...I}),"CollectionProvider");l.displayName=t;let s=Be(L=>{let I=p();return(0,Ea.jsx)(i,{...L,state:I})},"CollectionInit");s.displayName=t+"Init";let i=Be(L=>{let{scope:I,children:v,state:b}=L,y=Je.useRef(null),[R,k]=Je.useState(null),O=Q(y,k),[E,T]=b;return Je.useEffect(()=>{if(!R)return;let B=Qd(()=>{});return B.observe(R,{childList:!0,subtree:!0}),()=>{B.disconnect()}},[R]),(0,Ea.jsx)(r,{scope:I,itemMap:E,setItemMap:T,collectionRef:O,collectionRefObject:y,collectionElement:R,children:v})},"CollectionProviderImpl");i.displayName=t+"Impl";let u=e+"CollectionSlot",c=Xe(u),d=Je.forwardRef((L,I)=>{let{scope:v,children:b}=L,y=n(u,v),R=Q(I,y.collectionRef);return(0,Ea.jsx)(c,{ref:R,children:b})});d.displayName=u;let f=e+"CollectionItemSlot",h="data-radix-collection-item",g=Xe(f),m=Je.forwardRef((L,I)=>{let{scope:v,children:b,...y}=L,R=Je.useRef(null),[k,O]=Je.useState(null),E=Q(I,R,O),T=n(f,v),{setItemMap:B}=T,q=Je.useRef(y);Yd(q.current,y)||(q.current=y);let Z=q.current;return Je.useEffect(()=>{let K=Z;return B(H=>k?H.has(k)?H.set(k,{...K,element:k}).toSorted(Ql):(H.set(k,{...K,element:k}),H.toSorted(Ql)):H),()=>{B(H=>!k||!H.has(k)?H:(H.delete(k),new Zl(H)))}},[k,Z,B]),(0,Ea.jsx)(g,{[h]:"",ref:E,children:b})});m.displayName=f;function p(){return Je.useState(new Zl)}Be(p,"useInitCollection");function x(L){let{itemMap:I}=n(e+"CollectionConsumer",L);return I}return Be(x,"useCollection"),[{Provider:l,Slot:d,ItemSlot:m},{createCollectionScope:o,useCollection:x,useInitCollection:p}]}Be(Xg,"createCollection");function Yd(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;let a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let r of a)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}Be(Yd,"shallowEqual");function Zd(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}Be(Zd,"isElementPreceding");function Ql(e,t){return!e[1].element||!t[1].element?0:Zd(e[1].element,t[1].element)?-1:1}Be(Ql,"sortByDocumentPosition");function Qd(e){return new MutationObserver(a=>{for(let o of a)if(o.type==="childList"){e();return}})}Be(Qd,"getChildListObserver");var cn=U(require("react"),1),$g=require("react/jsx-runtime"),Kg=Object.defineProperty,jg=(e,t)=>Kg(e,"name",{value:t,configurable:!0}),Yg=cn.createContext(void 0);function Fa(e){let t=cn.useContext(Yg);return e||t||"ltr"}jg(Fa,"useDirection");var je=U(require("react"),1);var tc=["top","right","bottom","left"];var Ot=Math.min,wt=Math.max,Lr=Math.round,Cr=Math.floor,Ft=e=>({x:e,y:e}),Zg={left:"right",right:"left",bottom:"top",top:"bottom"};function es(e,t,a){return wt(e,Ot(t,a))}function Bt(e,t){return typeof e=="function"?e(t):e}function Gt(e){return e.split("-")[0]}function Ba(e){return e.split("-")[1]}function pn(e){return e==="x"?"y":"x"}function mn(e){return e==="y"?"height":"width"}function yt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function hn(e){return pn(yt(e))}function ac(e,t,a){a===void 0&&(a=!1);let o=Ba(e),r=hn(e),n=mn(r),l=r==="x"?o===(a?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=xr(l)),[l,xr(l)]}function oc(e){let t=xr(e);return[fn(e),t,fn(t)]}function fn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Jd=["left","right"],ec=["right","left"],Qg=["top","bottom"],Jg=["bottom","top"];function ex(e,t,a){switch(e){case"top":case"bottom":return a?t?ec:Jd:t?Jd:ec;case"left":case"right":return t?Qg:Jg;default:return[]}}function rc(e,t,a,o){let r=Ba(e),n=ex(Gt(e),a==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(fn)))),n}function xr(e){let t=Gt(e);return Zg[t]+e.slice(t.length)}function tx(e){var t,a,o,r;return{top:(t=e.top)!=null?t:0,right:(a=e.right)!=null?a:0,bottom:(o=e.bottom)!=null?o:0,left:(r=e.left)!=null?r:0}}function ts(e){return typeof e!="number"?tx(e):{top:e,right:e,bottom:e,left:e}}function Na(e){let{x:t,y:a,width:o,height:r}=e;return{width:o,height:r,top:a,left:t,right:t+o,bottom:a+r,x:t,y:a}}function nc(e,t,a){let{reference:o,floating:r}=e,n=yt(t),l=hn(t),s=mn(l),i=Gt(t),u=n==="y",c=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2,h;switch(i){case"top":h={x:c,y:o.y-r.height};break;case"bottom":h={x:c,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-r.width,y:d};break;default:h={x:o.x,y:o.y}}let g=Ba(t);return g&&(h[l]+=f*(g==="end"?1:-1)*(a&&u?-1:1)),h}async function ic(e,t){var a;t===void 0&&(t={});let{x:o,y:r,platform:n,rects:l,elements:s,strategy:i}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Bt(t,e),g=ts(h),p=s[f?d==="floating"?"reference":"floating":d],x=Na(await n.getClippingRect({element:(a=await(n.isElement==null?void 0:n.isElement(p)))==null||a?p:p.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:i})),C=d==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(s.floating)),I=await(n.isElement==null?void 0:n.isElement(L))&&await(n.getScale==null?void 0:n.getScale(L))||{x:1,y:1},v=Na(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:C,offsetParent:L,strategy:i}):C);return{top:(x.top-v.top+g.top)/I.y,bottom:(v.bottom-x.bottom+g.bottom)/I.y,left:(x.left-v.left+g.left)/I.x,right:(v.right-x.right+g.right)/I.x}}var ax=50,uc=async(e,t,a)=>{let{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=a,s=l.detectOverflow?l:{...l,detectOverflow:ic},i=await(l.isRTL==null?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:c,y:d}=nc(u,o,i),f=o,h=0,g={};for(let m=0;m<n.length;m++){let p=n[m];if(!p)continue;let{name:x,fn:C}=p,{x:L,y:I,data:v,reset:b}=await C({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});c=L??c,d=I??d,g[x]={...g[x],...v},b&&h<ax&&(h++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(u=b.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:c,y:d}=nc(u,f,i)),m=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:g}},dc=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:o,placement:r,rects:n,platform:l,elements:s,middlewareData:i}=t,{element:u,padding:c=0}=Bt(e,t)||{};if(u==null)return{};let d=ts(c),f={x:a,y:o},h=hn(r),g=mn(h),m=await l.getDimensions(u),p=h==="y",x=p?"top":"left",C=p?"bottom":"right",L=p?"clientHeight":"clientWidth",I=n.reference[g]+n.reference[h]-f[h]-n.floating[g],v=f[h]-n.reference[h],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u)),y=b?b[L]:0;(!y||!await(l.isElement==null?void 0:l.isElement(b)))&&(y=s.floating[L]||n.floating[g]);let R=I/2-v/2,k=y/2-m[g]/2-1,O=Ot(d[x],k),E=Ot(d[C],k),T=y-m[g]-E,B=y/2-m[g]/2+R,q=es(O,B,T),Z=!i.arrow&&Ba(r)!=null&&B!==q&&n.reference[g]/2-(B<O?O:E)-m[g]/2<0,K=Z?B<O?B-O:B-T:0;return{[h]:f[h]+K,data:{[h]:q,centerOffset:B-q-K,...Z&&{alignmentOffset:K}},reset:Z}}});var cc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var a,o;let{placement:r,middlewareData:n,rects:l,initialPlacement:s,platform:i,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...p}=Bt(e,t);if((a=n.arrow)!=null&&a.alignmentOffset)return{};let x=Gt(r),C=yt(s),L=Gt(s)===s,I=await(i.isRTL==null?void 0:i.isRTL(u.floating)),v=f||(L||!m?[xr(s)]:oc(s)),b=g!=="none";!f&&b&&v.push(...rc(s,m,g,I));let y=[s,...v],R=await i.detectOverflow(t,p),k=[],O=((o=n.flip)==null?void 0:o.overflows)||[];if(c&&k.push(R[x]),d){let q=ac(r,l,I);k.push(R[q[0]],R[q[1]])}if(O=[...O,{placement:r,overflows:k}],!k.every(q=>q<=0)){var E,T;let q=(((E=n.flip)==null?void 0:E.index)||0)+1,Z=y[q];if(Z&&(!(d==="alignment"?C!==yt(Z):!1)||O.every(G=>yt(G.placement)===C?G.overflows[0]>0:!0)))return{data:{index:q,overflows:O},reset:{placement:Z}};let K=(T=O.filter(H=>H.overflows[0]<=0).sort((H,G)=>H.overflows[1]-G.overflows[1])[0])==null?void 0:T.placement;if(!K)switch(h){case"bestFit":{var B;let H=(B=O.filter(G=>{if(b){let z=yt(G.placement);return z===C||z==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(z=>z>0).reduce((z,M)=>z+M,0)]).sort((G,z)=>G[1]-z[1])[0])==null?void 0:B[0];H&&(K=H);break}case"initialPlacement":K=s;break}if(r!==K)return{reset:{placement:K}}}return{}}}};function lc(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function sc(e){return tc.some(t=>e[t]>=0)}var fc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:a,platform:o}=t,{strategy:r="referenceHidden",...n}=Bt(e,t);switch(r){case"referenceHidden":{let l=await o.detectOverflow(t,{...n,elementContext:"reference"}),s=lc(l,a.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:sc(s)}}}case"escaped":{let l=await o.detectOverflow(t,{...n,altBoundary:!0}),s=lc(l,a.floating);return{data:{escapedOffsets:s,escaped:sc(s)}}}default:return{}}}}};var pc=new Set(["left","top"]);async function ox(e,t){let{placement:a,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=Gt(a),s=Ba(a),i=yt(a)==="y",u=pc.has(l)?-1:1,c=n&&i?-1:1,d=Bt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(h=s==="end"?g*-1:g),i?{x:h*c,y:f*u}:{x:f*u,y:h*c}}var mc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var a,o;let{x:r,y:n,placement:l,middlewareData:s}=t,i=await ox(t,e);return l===((a=s.offset)==null?void 0:a.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+i.x,y:n+i.y,data:{...i,placement:l}}}}},hc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:a,y:o,placement:r,platform:n}=t,{mainAxis:l=!0,crossAxis:s=!1,limiter:i={fn:C=>{let{x:L,y:I}=C;return{x:L,y:I}}},...u}=Bt(e,t),c={x:a,y:o},d=await n.detectOverflow(t,u),f=yt(r),h=pn(f),g=c[h],m=c[f],p=(C,L)=>es(L+d[C==="y"?"top":"left"],L,L-d[C==="y"?"bottom":"right"]);l&&(g=p(h,g)),s&&(m=p(f,m));let x=i.fn({...t,[h]:g,[f]:m});return{...x,data:{x:x.x-a,y:x.y-o,enabled:{[h]:l,[f]:s}}}}}},gc=function(e){return e===void 0&&(e={}),{options:e,fn(t){var a,o;let{x:r,y:n,placement:l,rects:s,middlewareData:i}=t,{offset:u=0,mainAxis:c=!0,crossAxis:d=!0}=Bt(e,t),f={x:r,y:n},h=yt(l),g=pn(h),m=f[g],p=f[h],x=Bt(u,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:(a=x.mainAxis)!=null?a:0,crossAxis:(o=x.crossAxis)!=null?o:0};if(c){let v=g==="y"?"height":"width",b=s.reference[g]-s.floating[v]+C.mainAxis,y=s.reference[g]+s.reference[v]-C.mainAxis;m<b?m=b:m>y&&(m=y)}if(d){var L,I;let v=g==="y"?"width":"height",b=pc.has(Gt(l)),y=s.reference[h]-s.floating[v]+(b&&((L=i.offset)==null?void 0:L[h])||0)+(b?0:C.crossAxis),R=s.reference[h]+s.reference[v]+(b?0:((I=i.offset)==null?void 0:I[h])||0)-(b?C.crossAxis:0);p<y?p=y:p>R&&(p=R)}return{[g]:m,[h]:p}}}},xc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:a,rects:o,platform:r,elements:n}=t,{apply:l=()=>{},...s}=Bt(e,t),i=await r.detectOverflow(t,s),u=Gt(a),c=Ba(a),d=yt(a)==="y",{width:f,height:h}=o.floating,g,m;u==="top"||u==="bottom"?(g=u,m=c===(await(r.isRTL==null?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=u,g=c==="end"?"top":"bottom");let p=h-i.top-i.bottom,x=f-i.left-i.right,C=Ot(h-i[g],p),L=Ot(f-i[m],x),I=t.middlewareData.shift,v=!I,b=C,y=L;I!=null&&I.enabled.x&&(y=x),I!=null&&I.enabled.y&&(b=p),v&&!c&&(d?y=f-2*wt(i.left,i.right):b=h-2*wt(i.top,i.bottom)),await l({...t,availableWidth:y,availableHeight:b});let R=await r.getDimensions(n.floating);return f!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function gn(){return typeof window<"u"}function qa(e){return Cc(e)?(e.nodeName||"").toLowerCase():"#document"}function Ze(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nt(e){var t;return(t=(Cc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cc(e){return gn()?e instanceof Node||e instanceof Ze(e).Node:!1}function Rt(e){return gn()?e instanceof Element||e instanceof Ze(e).Element:!1}function zt(e){return gn()?e instanceof HTMLElement||e instanceof Ze(e).HTMLElement:!1}function Lc(e){return!gn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ze(e).ShadowRoot}function Ir(e){let{overflow:t,overflowX:a,overflowY:o,display:r}=Pt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+a)&&r!=="inline"&&r!=="contents"}function Ic(e){return/^(table|td|th)$/.test(qa(e))}function vr(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var rx=/transform|translate|scale|rotate|perspective|filter/,nx=/paint|layout|strict|content/,_a=e=>!!e&&e!=="none",as;function xn(e){let t=Rt(e)?Pt(e):e;return _a(t.transform)||_a(t.translate)||_a(t.scale)||_a(t.rotate)||_a(t.perspective)||!Ln()&&(_a(t.backdropFilter)||_a(t.filter))||rx.test(t.willChange||"")||nx.test(t.contain||"")}function vc(e){let t=sa(e);for(;zt(t)&&!wo(t);){if(xn(t))return t;if(vr(t))return null;t=sa(t)}return null}function Ln(){return as==null&&(as=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),as}function wo(e){return/^(html|body|#document)$/.test(qa(e))}function Pt(e){return Ze(e).getComputedStyle(e)}function br(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function sa(e){if(qa(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Lc(e)&&e.host||Nt(e);return Lc(t)?t.host:t}function bc(e){let t=sa(e);return wo(t)?(e.ownerDocument||e).body:zt(t)&&Ir(t)?t:bc(t)}function Ha(e,t,a){var o;t===void 0&&(t=[]),a===void 0&&(a=!0);let r=bc(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Ze(r);if(n){let s=Cn(l);return t.concat(l,l.visualViewport||[],Ir(r)?r:[],s&&a?Ha(s):[])}else return t.concat(r,Ha(r,[],a))}function Cn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yc(e){let t=Pt(e),a=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=zt(e),n=r?e.offsetWidth:a,l=r?e.offsetHeight:o,s=Lr(a)!==n||Lr(o)!==l;return s&&(a=n,o=l),{width:a,height:o,$:s}}function rs(e){return Rt(e)?e:e.contextElement}function yo(e){let t=rs(e);if(!zt(t))return Ft(1);let a=t.getBoundingClientRect(),{width:o,height:r,$:n}=yc(t),l=(n?Lr(a.width):a.width)/o,s=(n?Lr(a.height):a.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var lx=Ft(0);function Rc(e){let t=Ze(e);return!Ln()||!t.visualViewport?lx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sx(e,t,a){return t===void 0&&(t=!1),!!a&&t&&a===Ze(e)}function Ua(e,t,a,o){t===void 0&&(t=!1),a===void 0&&(a=!1);let r=e.getBoundingClientRect(),n=rs(e),l=Ft(1);t&&(o?Rt(o)&&(l=yo(o)):l=yo(e));let s=sx(n,a,o)?Rc(n):Ft(0),i=(r.left+s.x)/l.x,u=(r.top+s.y)/l.y,c=r.width/l.x,d=r.height/l.y;if(n&&o){let f=Ze(n),h=Rt(o)?Ze(o):o,g=f,m=Cn(g);for(;m&&h!==g;){let p=yo(m),x=m.getBoundingClientRect(),C=Pt(m),L=x.left+(m.clientLeft+parseFloat(C.paddingLeft))*p.x,I=x.top+(m.clientTop+parseFloat(C.paddingTop))*p.y;i*=p.x,u*=p.y,c*=p.x,d*=p.y,i+=L,u+=I,g=Ze(m),m=Cn(g)}}return Na({width:c,height:d,x:i,y:u})}function In(e,t){let a=br(e).scrollLeft;return t?t.left+a:Ua(Nt(e)).left+a}function Pc(e,t){let a=e.getBoundingClientRect(),o=a.left+t.scrollLeft-In(e,a),r=a.top+t.scrollTop;return{x:o,y:r}}function ix(e){let{elements:t,rect:a,offsetParent:o,strategy:r}=e,n=r==="fixed",l=Nt(o),s=t?vr(t.floating):!1;if(o===l||s&&n)return a;let i={scrollLeft:0,scrollTop:0},u=Ft(1),c=Ft(0),d=zt(o);if((d||!n)&&((qa(o)!=="body"||Ir(l))&&(i=br(o)),d)){let h=Ua(o);u=yo(o),c.x=h.x+o.clientLeft,c.y=h.y+o.clientTop}let f=l&&!d&&!n?Pc(l,i):Ft(0);return{width:a.width*u.x,height:a.height*u.y,x:a.x*u.x-i.scrollLeft*u.x+c.x+f.x,y:a.y*u.y-i.scrollTop*u.y+c.y+f.y}}function ux(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function dx(e){let t=br(e),a=e.ownerDocument.body,o=wt(e.scrollWidth,e.clientWidth,a.scrollWidth,a.clientWidth),r=wt(e.scrollHeight,e.clientHeight,a.scrollHeight,a.clientHeight),n=-t.scrollLeft+In(e),l=-t.scrollTop;return Pt(a).direction==="rtl"&&(n+=wt(e.clientWidth,a.clientWidth)-o),{width:o,height:r,x:n,y:l}}var cx=25;function fx(e,t,a){a===void 0&&(a="viewport");let o=a==="layoutViewport",r=Ze(e),n=Nt(e),l=r.visualViewport,s=n.clientWidth,i=n.clientHeight,u=0,c=0;if(l){let f=!Ln()||t==="fixed";o?f||(u=-l.offsetLeft,c=-l.offsetTop):(s=l.width,i=l.height,f&&(u=l.offsetLeft,c=l.offsetTop))}if(In(n)<=0){let f=n.ownerDocument,h=f.body,g=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,p=Math.abs(n.clientWidth-h.clientWidth-m),x=getComputedStyle(n).scrollbarGutter==="stable both-edges"?p/2:p;x<=cx&&(s-=x)}return{width:s,height:i,x:u,y:c}}function px(e,t){let a=Ua(e,!0,t==="fixed"),o=a.top+e.clientTop,r=a.left+e.clientLeft,n=yo(e),l=e.clientWidth*n.x,s=e.clientHeight*n.y,i=r*n.x,u=o*n.y;return{width:l,height:s,x:i,y:u}}function Sc(e,t,a){let o;if(t==="viewport"||t==="layoutViewport")o=fx(e,a,t);else if(t==="document")o=dx(Nt(e));else if(Rt(t))o=px(t,a);else{let r=Rc(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Na(o)}function mx(e,t){let a=t.get(e);if(a)return a;let o=Ha(e,[],!1).filter(s=>Rt(s)&&qa(s)!=="body"),r=null,n=Pt(e).position==="fixed",l=n?sa(e):e;for(;Rt(l)&&!wo(l);){let s=Pt(l),i=xn(l),u=r?r.position:n?"fixed":"";!i&&(u==="fixed"||u==="absolute"&&s.position==="static")?o=o.filter(d=>d!==l):r=s,l=sa(l)}return t.set(e,o),o}function hx(e){let{element:t,boundary:a,rootBoundary:o,strategy:r}=e,l=[...a==="clippingAncestors"?vr(t)?[]:mx(t,this._c):[].concat(a),o],s=Sc(t,l[0],r),i=s.top,u=s.right,c=s.bottom,d=s.left;for(let f=1;f<l.length;f++){let h=Sc(t,l[f],r);i=wt(h.top,i),u=Ot(h.right,u),c=Ot(h.bottom,c),d=wt(h.left,d)}return{width:u-d,height:c-i,x:d,y:i}}function gx(e){let{width:t,height:a}=yc(e);return{width:t,height:a}}function xx(e,t,a){let o=zt(t),r=Nt(t),n=a==="fixed",l=Ua(e,!0,n,t),s={scrollLeft:0,scrollTop:0},i=Ft(0);if((o||!n)&&((qa(t)!=="body"||Ir(r))&&(s=br(t)),o)){let f=Ua(t,!0,n,t);i.x=f.x+t.clientLeft,i.y=f.y+t.clientTop}!o&&r&&(i.x=In(r));let u=r&&!o&&!n?Pc(r,s):Ft(0),c=l.left+s.scrollLeft-i.x-u.x,d=l.top+s.scrollTop-i.y-u.y;return{x:c,y:d,width:l.width,height:l.height}}function os(e){return Pt(e).position==="static"}function wc(e,t){if(!zt(e)||Pt(e).position==="fixed")return null;if(t)return t(e);let a=e.offsetParent;return Nt(e)===a&&(a=a.ownerDocument.body),a}function kc(e,t){let a=Ze(e);if(vr(e))return a;if(!zt(e)){let r=sa(e);for(;r&&!wo(r);){if(Rt(r)&&!os(r))return r;r=sa(r)}return a}let o=wc(e,t);for(;o&&Ic(o)&&os(o);)o=wc(o,t);return o&&wo(o)&&os(o)&&!xn(o)?a:o||vc(e)||a}var Lx=async function(e){let t=this.getOffsetParent||kc,a=this.getDimensions,o=await a(e.floating);return{reference:xx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Cx(e){return Pt(e).direction==="rtl"}var Dc={convertOffsetParentRelativeRectToViewportRelativeRect:ix,getDocumentElement:Nt,getClippingRect:hx,getOffsetParent:kc,getElementRects:Lx,getClientRects:ux,getDimensions:gx,getScale:yo,isElement:Rt,isRTL:Cx};function Mc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ix(e,t,a){let o=null,r,n=Nt(e);function l(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function s(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),l();let f=e.getBoundingClientRect(),{left:h,top:g,width:m,height:p}=f;if(c||t(),!m||!p)return;let x=Cr(g),C=Cr(n.clientWidth-(h+m)),L=Cr(n.clientHeight-(g+p)),I=Cr(h),b={rootMargin:-x+"px "+-C+"px "+-L+"px "+-I+"px",threshold:wt(0,Ot(1,d))||1},y=!0;function R(k){let O=k[0].intersectionRatio;if(!Mc(f,e.getBoundingClientRect()))return s();if(O!==d){if(!y)return s();O?s(!1,O):r=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{o=new IntersectionObserver(R,{...b,root:n.ownerDocument})}catch{o=new IntersectionObserver(R,b)}o.observe(e)}let i=Ze(e),u=()=>s(a);return i.addEventListener("resize",u),s(!0),()=>{i.removeEventListener("resize",u),l()}}function ns(e,t,a,o){o===void 0&&(o={});let{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:i=!1}=o,u=rs(e),c=r||n?[...u?Ha(u):[],...t?Ha(t):[]]:[];c.forEach(x=>{r&&x.addEventListener("scroll",a),n&&x.addEventListener("resize",a)});let d=u&&s?Ix(u,a,n):null,f=-1,h=null;l&&(h=new ResizeObserver(x=>{let[C]=x;C&&C.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var L;(L=h)==null||L.observe(t)})),a()}),u&&!i&&h.observe(u),t&&h.observe(t));let g,m=i?Ua(e):null;i&&p();function p(){let x=Ua(e);m&&!Mc(m,x)&&a(),m=x,g=requestAnimationFrame(p)}return a(),()=>{var x;c.forEach(C=>{r&&C.removeEventListener("scroll",a),n&&C.removeEventListener("resize",a)}),d?.(),(x=h)==null||x.disconnect(),h=null,i&&cancelAnimationFrame(g)}}var Ac=mc;var Tc=hc,Ec=cc,Oc=xc,Fc=fc,ls=dc;var Bc=gc,ss=(e,t,a)=>{let o=new Map,r=a??{},n={...Dc,...r.platform,_c:o};return uc(e,t,{...r,platform:n})};var ke=U(require("react"),1),_c=require("react"),Hc=U(require("react-dom"),1),vx=typeof document<"u",bx=function(){},vn=vx?_c.useLayoutEffect:bx;function bn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let a,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==t.length)return!1;for(o=a;o--!==0;)if(!bn(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),a=r.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=a;o--!==0;){let n=r[o];if(!(n==="_owner"&&e.$$typeof)&&!bn(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function qc(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Nc(e,t){let a=qc(e);return Math.round(t*a)/a}function is(e){let t=ke.useRef(e);return vn(()=>{t.current=e}),t}function Uc(e){e===void 0&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:o=[],platform:r,elements:{reference:n,floating:l}={},transform:s=!0,whileElementsMounted:i,open:u}=e,[c,d]=ke.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[f,h]=ke.useState(o);bn(f,o)||h(o);let[g,m]=ke.useState(null),[p,x]=ke.useState(null),C=ke.useCallback(G=>{G!==b.current&&(b.current=G,m(G))},[]),L=ke.useCallback(G=>{G!==y.current&&(y.current=G,x(G))},[]),I=n||g,v=l||p,b=ke.useRef(null),y=ke.useRef(null),R=ke.useRef(c),k=i!=null,O=is(i),E=is(r),T=is(u),B=ke.useCallback(()=>{if(!b.current||!y.current)return;let G={placement:t,strategy:a,middleware:f};E.current&&(G.platform=E.current),ss(b.current,y.current,G).then(z=>{let M={...z,isPositioned:T.current!==!1};q.current&&!bn(R.current,M)&&(R.current=M,Hc.flushSync(()=>{d(M)}))})},[f,t,a,E,T]);vn(()=>{u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(G=>({...G,isPositioned:!1})))},[u]);let q=ke.useRef(!1);vn(()=>(q.current=!0,()=>{q.current=!1}),[]),vn(()=>{if(I&&(b.current=I),v&&(y.current=v),I&&v){if(O.current)return O.current(I,v,B);B()}},[I,v,B,O,k]);let Z=ke.useMemo(()=>({reference:b,floating:y,setReference:C,setFloating:L}),[C,L]),K=ke.useMemo(()=>({reference:I,floating:v}),[I,v]),H=ke.useMemo(()=>{let G={position:a,left:0,top:0};if(!K.floating)return G;let z=Nc(K.floating,c.x),M=Nc(K.floating,c.y);return s?{...G,transform:"translate("+z+"px, "+M+"px)",...qc(K.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:z,top:M}},[a,s,K.floating,c.x,c.y]);return ke.useMemo(()=>({...c,update:B,refs:Z,elements:K,floatingStyles:H}),[c,B,Z,K,H])}var Sx=e=>{function t(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){let{element:o,padding:r}=typeof e=="function"?e(a):e;return o&&t(o)?o.current!=null?ls({element:o.current,padding:r}).fn(a):{}:o?ls({element:o,padding:r}).fn(a):{}}}},Vc=(e,t)=>{let a=Ac(e);return{name:a.name,fn:a.fn,options:[e,t]}},Wc=(e,t)=>{let a=Tc(e);return{name:a.name,fn:a.fn,options:[e,t]}},Gc=(e,t)=>({fn:Bc(e).fn,options:[e,t]}),zc=(e,t)=>{let a=Ec(e);return{name:a.name,fn:a.fn,options:[e,t]}},Xc=(e,t)=>{let a=Oc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var Kc=(e,t)=>{let a=Fc(e);return{name:a.name,fn:a.fn,options:[e,t]}};var jc=(e,t)=>{let a=Sx(e);return{name:a.name,fn:a.fn,options:[e,t]}};var $c=U(require("react"),1);var wx=Object.defineProperty,yx=(e,t)=>wx(e,"name",{value:t,configurable:!0});function us(e){let[t,a]=$c.useState(void 0);return ie(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0],l,s;if("borderBoxSize"in n){let i=n.borderBoxSize,u=Array.isArray(i)?i[0]:i;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;a({width:l,height:s})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else a(void 0)},[e]),t}yx(us,"useSize");var Ro=require("react/jsx-runtime"),Rx=Object.defineProperty,ia=(e,t)=>Rx(e,"name",{value:t,configurable:!0});var Yc="Popper",[Zc,Po]=qe(Yc),[Px,Qc]=Zc(Yc),kx=ia(e=>{let{__scopePopper:t,children:a}=e,[o,r]=je.useState(null),[n,l]=je.useState(void 0);return(0,Ro.jsx)(Px,{scope:t,anchor:o,onAnchorChange:r,placementState:n,setPlacementState:l,children:a})},"Popper"),Dx="PopperAnchor",Mx=je.forwardRef(ia(function(t,a){let{__scopePopper:o,virtualRef:r,...n}=t,l=Qc(Dx,o),s=je.useRef(null),i=l.onAnchorChange,u=je.useCallback(m=>{s.current=m,m&&i(m)},[i]),c=Q(a,u),d=je.useRef(null);je.useEffect(()=>{if(!r)return;let m=d.current;d.current=r.current,m!==d.current&&i(d.current)});let f=l.placementState&&Sn(l.placementState),h=f?.[0],g=f?.[1];return r?null:(0,Ro.jsx)(te.div,{"data-radix-popper-side":h,"data-radix-popper-align":g,...n,ref:c})},"PopperAnchor")),Jc="PopperContent",[Ax,$S]=Zc(Jc),Tx=je.forwardRef(ia(function(t,a){let{__scopePopper:o,side:r="bottom",sideOffset:n=0,align:l="center",alignOffset:s=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:g="optimized",onPlaced:m,...p}=t,x=Qc(Jc,o),[C,L]=je.useState(null),I=Q(a,L),[v,b]=je.useState(null),y=us(v),R=y?.width??0,k=y?.height??0,O=r+(l!=="center"?"-"+l:""),E=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},T=Array.isArray(c)?c:[c],B=T.length>0,q={padding:E,boundary:T.filter(ef),altBoundary:B},{refs:Z,floatingStyles:K,placement:H,isPositioned:G,middlewareData:z}=Uc({strategy:"fixed",placement:O,whileElementsMounted:ia((...J)=>ns(...J,{animationFrame:g==="always"}),"whileElementsMounted"),elements:{reference:x.anchor},middleware:[Vc({mainAxis:n+k,alignmentAxis:s}),u&&Wc({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Gc():void 0,...q}),u&&zc({...q}),Xc({...q,apply:ia(({elements:J,rects:X,availableWidth:S,availableHeight:P})=>{let{width:A,height:N}=X.reference,ne=J.floating.style;ne.setProperty("--radix-popper-available-width",`${S}px`),ne.setProperty("--radix-popper-available-height",`${P}px`),ne.setProperty("--radix-popper-anchor-width",`${A}px`),ne.setProperty("--radix-popper-anchor-height",`${N}px`)},"apply")}),v&&jc({element:v,padding:i}),Ex({arrowWidth:R,arrowHeight:k}),h&&Kc({strategy:"referenceHidden",...q,boundary:B?q.boundary:void 0})]}),M=x.setPlacementState;ie(()=>(M(H),()=>{M(void 0)}),[H,M]);let[re,$]=Sn(H),se=Oe(m);ie(()=>{G&&se?.()},[G,se]);let he=z.arrow?.x,ye=z.arrow?.y,Le=z.arrow?.centerOffset!==0,[Re,F]=je.useState();return ie(()=>{C&&F(window.getComputedStyle(C).zIndex)},[C]),(0,Ro.jsx)("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...K,transform:G?K.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Re,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,Ro.jsx)(Ax,{scope:o,placedSide:re,placedAlign:$,onArrowChange:b,arrowX:he,arrowY:ye,shouldHideArrow:Le,children:(0,Ro.jsx)(te.div,{"data-side":re,"data-align":$,...p,ref:I,style:{...p.style,animation:G?p.style?.animation:"none"}})})})},"PopperContent"));function ef(e){return e!==null}ia(ef,"isNotNull");var Ex=ia(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:o,middlewareData:r}=t,l=r.arrow?.centerOffset!==0,s=l?0:e.arrowWidth,i=l?0:e.arrowHeight,[u,c]=Sn(a),d={start:"0%",center:"50%",end:"100%"}[c],f=(r.arrow?.x??0)+s/2,h=(r.arrow?.y??0)+i/2,g="",m="";return u==="bottom"?(g=l?d:`${f}px`,m=`${-i}px`):u==="top"?(g=l?d:`${f}px`,m=`${o.floating.height+i}px`):u==="right"?(g=`${-i}px`,m=l?d:`${h}px`):u==="left"&&(g=`${o.floating.width+i}px`,m=l?d:`${h}px`),{data:{x:g,y:m}}}}),"transformOrigin");function Sn(e){let[t,a="center"]=e.split("-");return[t,a]}ia(Sn,"getSideAndAlignFromPlacement");var wn=kx,yn=Mx,Rn=Tx;var Ne=U(require("react"),1);var Fx=U(require("react"),1),Pn=U(require("react"),1),Ox=Object.defineProperty,cs=(e,t)=>Ox(e,"name",{value:t,configurable:!0}),ds=!1;function af(){let[e,t]=Pn.useState(ds);return Pn.useEffect(()=>{ds||(ds=!0,t(!0))},[]),e}cs(af,"useIsHydrated");var of=Fx[" useSyncExternalStore ".trim().toString()];function rf(){return()=>{}}cs(rf,"subscribe");function nf(){return of(rf,()=>!0,()=>!1)}cs(nf,"useIsHydratedModern");var lf=typeof of=="function"?nf:af;var ua=require("react/jsx-runtime"),Bx=Object.defineProperty,Va=(e,t)=>Bx(e,"name",{value:t,configurable:!0}),fs="rovingFocusGroup.onEntryFocus",Nx={bubbles:!1,cancelable:!0},kn="RovingFocusGroup",[ps,sf,_x]=Oa(kn),[Hx,ms]=qe(kn,[_x]),[qx,Ux]=Hx(kn),Vx=Ne.forwardRef(Va(function(t,a){return(0,ua.jsx)(ps.Provider,{scope:t.__scopeRovingFocusGroup,children:(0,ua.jsx)(ps.Slot,{scope:t.__scopeRovingFocusGroup,children:(0,ua.jsx)(Wx,{...t,ref:a})})})},"RovingFocusGroup")),Wx=Ne.forwardRef(Va(function(t,a){let{__scopeRovingFocusGroup:o,orientation:r,loop:n=!1,dir:l,currentTabStopId:s,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:u,onEntryFocus:c,preventScrollOnEntryFocus:d=!1,...f}=t,h=Ne.useRef(null),g=Q(a,h),m=Fa(l),[p,x]=Tt({prop:s,defaultProp:i??null,onChange:u,caller:kn}),[C,L]=Ne.useState(!1),I=Oe(c),v=sf(o),b=Ne.useRef(!1),[y,R]=Ne.useState(0);return Ne.useEffect(()=>{let k=h.current;if(k)return k.addEventListener(fs,I),()=>k.removeEventListener(fs,I)},[I]),(0,ua.jsx)(qx,{scope:o,orientation:r,dir:m,loop:n,currentTabStopId:p,onItemFocus:Ne.useCallback(k=>x(k),[x]),onItemShiftTab:Ne.useCallback(()=>L(!0),[]),onFocusableItemAdd:Ne.useCallback(()=>R(k=>k+1),[]),onFocusableItemRemove:Ne.useCallback(()=>R(k=>k-1),[]),children:(0,ua.jsx)(te.div,{tabIndex:C||y===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...t.style},onMouseDown:V(t.onMouseDown,()=>{b.current=!0}),onFocus:V(t.onFocus,k=>{let O=!b.current;if(k.target===k.currentTarget&&O&&!C){let E=new CustomEvent(fs,Nx);if(k.currentTarget.dispatchEvent(E),!E.defaultPrevented){let T=v().filter(H=>H.focusable),B=T.find(H=>H.active),q=T.find(H=>H.id===p),K=[B,q,...T].filter(Boolean).map(H=>H.ref.current);hs(K,d)}}b.current=!1}),onBlur:V(t.onBlur,()=>L(!1))})})},"RovingFocusGroupImpl")),Gx="RovingFocusGroupItem",zx=Ne.forwardRef(Va(function(t,a){let{__scopeRovingFocusGroup:o,focusable:r=!0,active:n=!1,tabStopId:l,children:s,...i}=t,u=lt(),c=l||u,d=Ux(Gx,o),f=d.currentTabStopId===c,h=sf(o),{onFocusableItemAdd:g,onFocusableItemRemove:m,currentTabStopId:p}=d,x=lf();return ie(()=>{if(!(!x||!r))return g(),()=>m()},[x,r,g,m]),Ne.useEffect(()=>{if(!(x||!r))return g(),()=>m()},[x,r,g,m]),(0,ua.jsx)(ps.ItemSlot,{scope:o,id:c,focusable:r,active:n,children:(0,ua.jsx)(te.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:a,onMouseDown:V(t.onMouseDown,C=>{r?d.onItemFocus(c):C.preventDefault()}),onFocus:V(t.onFocus,()=>d.onItemFocus(c)),onKeyDown:V(t.onKeyDown,C=>{if(C.key==="Tab"&&C.shiftKey){d.onItemShiftTab();return}if(C.target!==C.currentTarget)return;let L=df(C,d.orientation,d.dir);if(L!==void 0){if(C.metaKey||C.ctrlKey||C.altKey||C.shiftKey)return;C.preventDefault();let v=h().filter(b=>b.focusable).map(b=>b.ref.current);if(L==="last")v.reverse();else if(L==="prev"||L==="next"){L==="prev"&&v.reverse();let b=v.indexOf(C.currentTarget);v=d.loop?cf(v,b+1):v.slice(b+1)}setTimeout(()=>hs(v))}}),children:typeof s=="function"?s({isCurrentTabStop:f,hasTabStop:p!=null}):s})})},"RovingFocusGroupItem")),Xx={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function uf(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}Va(uf,"getDirectionAwareKey");function df(e,t,a){let o=uf(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Xx[o]}Va(df,"getFocusIntent");function hs(e,t=!1){let a=document.activeElement;for(let o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}Va(hs,"focusFirst");function cf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}Va(cf,"wrapArray");var ff=Vx,pf=zx;var pe=require("react/jsx-runtime"),$x=Object.defineProperty,me=(e,t)=>$x(e,"name",{value:t,configurable:!0}),gs=["Enter"," "],Yx=["ArrowDown","PageUp","Home"],hf=["ArrowUp","PageDown","End"],Zx=[...Yx,...hf],yw={ltr:[...gs,"ArrowRight"],rtl:[...gs,"ArrowLeft"]};var Mn="Menu",[xs,Qx,Jx]=Oa(Mn),[Wa,Cs]=qe(Mn,[Jx,Po,ms]),Is=Po(),gf=ms(),[eL,Sr]=Wa(Mn),[tL,vs]=Wa(Mn),aL=me(e=>{let{__scopeMenu:t,open:a=!1,children:o,dir:r,onOpenChange:n,modal:l=!0}=e,s=Is(t),[i,u]=Y.useState(null),c=Y.useRef(!1),d=Oe(n),f=Fa(r);return Y.useEffect(()=>{let h=me(()=>{c.current=!0,document.addEventListener("pointerdown",g,{capture:!0,once:!0}),document.addEventListener("pointermove",g,{capture:!0,once:!0})},"handleKeyDown"),g=me(()=>c.current=!1,"handlePointer");return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",g,{capture:!0}),document.removeEventListener("pointermove",g,{capture:!0})}},[]),Y.useEffect(()=>{if(!a)return;let h=me(()=>d(!1),"handleBlur");return window.addEventListener("blur",h),()=>window.removeEventListener("blur",h)},[a,d]),(0,pe.jsx)(wn,{...s,children:(0,pe.jsx)(eL,{scope:t,open:a,onOpenChange:d,content:i,onContentChange:u,children:(0,pe.jsx)(tL,{scope:t,onClose:Y.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:c,dir:f,modal:l,children:o})})})},"Menu"),oL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t,n=Is(o);return(0,pe.jsx)(yn,{...n,...r,ref:a})},"MenuAnchor")),xf="MenuPortal",[rL,nL]=Wa(xf,{forceMount:void 0}),lL=me(e=>{let{__scopeMenu:t,forceMount:a,children:o,container:r}=e,n=Sr(xf,t);return(0,pe.jsx)(rL,{scope:t,forceMount:a,children:(0,pe.jsx)(Wt,{present:a||n.open,children:(0,pe.jsx)(mo,{asChild:!0,container:r,children:o})})})},"MenuPortal"),da="MenuContent",[sL,Lf]=Wa(da),iL=Y.forwardRef(me(function(t,a){let o=nL(da,t.__scopeMenu),{forceMount:r=o.forceMount,...n}=t,l=Sr(da,t.__scopeMenu),s=vs(da,t.__scopeMenu);return(0,pe.jsx)(xs.Provider,{scope:t.__scopeMenu,children:(0,pe.jsx)(Wt,{present:r||l.open,children:(0,pe.jsx)(xs.Slot,{scope:t.__scopeMenu,children:s.modal?(0,pe.jsx)(uL,{...n,ref:a}):(0,pe.jsx)(dL,{...n,ref:a})})})})},"MenuContent")),uL=Y.forwardRef(me(function(t,a){let o=Sr(da,t.__scopeMenu),r=Y.useRef(null),n=Q(a,r);return Y.useEffect(()=>{let l=r.current;if(l)return vo(l)},[]),(0,pe.jsx)(Cf,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:V(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentModal")),dL=Y.forwardRef(me(function(t,a){let o=Sr(da,t.__scopeMenu);return(0,pe.jsx)(Cf,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})},"MenuRootContentNonModal")),cL=Xe("MenuContent.ScrollLock"),Cf=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,loop:r=!1,trapFocus:n,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:i,onEntryFocus:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,disableOutsideScroll:m,...p}=t,x=Sr(da,o),C=vs(da,o),L=Is(o),I=gf(o),v=Qx(o),[b,y]=Y.useState(null),R=Y.useRef(null),k=Q(a,R,x.onContentChange),O=Y.useRef(0),E=Y.useRef(""),T=Y.useRef(0),B=Y.useRef(null),q=Y.useRef("right"),Z=Y.useRef(0),K=m?ka:Y.Fragment,H=m?{as:cL,allowPinchZoom:!0}:void 0,G=me(M=>{let re=E.current+M,$=v().filter(F=>!F.disabled),se=document.activeElement,he=$.find(F=>F.ref.current===se)?.textValue,ye=$.map(F=>F.textValue),Le=wf(ye,re,he),Re=$.find(F=>F.textValue===Le)?.ref.current;me((function F(J){E.current=J,window.clearTimeout(O.current),J!==""&&(O.current=window.setTimeout(()=>F(""),1e3))}),"updateSearch")(re),Re&&setTimeout(()=>Re.focus())},"handleTypeaheadSearch");Y.useEffect(()=>()=>window.clearTimeout(O.current),[]),la();let z=Y.useCallback(M=>q.current===B.current?.side&&Rf(M,B.current?.area),[]);return(0,pe.jsx)(sL,{scope:o,searchRef:E,onItemEnter:Y.useCallback(M=>{z(M)&&M.preventDefault()},[z]),onItemLeave:Y.useCallback(M=>{z(M)||(R.current?.focus(),y(null))},[z]),onTriggerLeave:Y.useCallback(M=>{z(M)&&M.preventDefault()},[z]),pointerGraceTimerRef:T,onPointerGraceIntentChange:Y.useCallback(M=>{B.current=M},[]),children:(0,pe.jsx)(K,{...H,children:(0,pe.jsx)(po,{asChild:!0,trapped:n,onMountAutoFocus:V(l,M=>{M.preventDefault(),R.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:s,children:(0,pe.jsx)(fo,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:h,onDismiss:g,children:(0,pe.jsx)(ff,{asChild:!0,...I,dir:C.dir,orientation:"vertical",loop:r,currentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:V(u,M=>{C.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,pe.jsx)(Rn,{role:"menu","aria-orientation":"vertical","data-state":If(x.open),"data-radix-menu-content":"",dir:C.dir,...L,...p,ref:k,style:{outline:"none",...p.style},onKeyDown:V(p.onKeyDown,M=>{let $=M.target.closest("[data-radix-menu-content]")===M.currentTarget,se=M.ctrlKey||M.altKey||M.metaKey,he=M.key.length===1;$&&(M.key==="Tab"&&M.preventDefault(),!se&&he&&G(M.key));let ye=R.current;if(M.target!==ye||!Zx.includes(M.key))return;M.preventDefault();let Re=v().filter(F=>!F.disabled).map(F=>F.ref.current);hf.includes(M.key)&&Re.reverse(),bf(Re)}),onBlur:V(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(O.current),E.current="")}),onPointerMove:V(t.onPointerMove,Dn(M=>{let re=M.target,$=Z.current!==M.clientX;if(M.currentTarget.contains(re)&&$){let se=M.clientX>Z.current?"right":"left";q.current=se,Z.current=M.clientX}}))})})})})})})},"MenuContentImpl"));var fL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(te.div,{...r,ref:a})},"MenuLabel")),Ls="MenuItem",mf="menu.itemSelect",pL=Y.forwardRef(me(function(t,a){let{disabled:o=!1,onSelect:r,...n}=t,l=Y.useRef(null),s=vs(Ls,t.__scopeMenu),i=Lf(Ls,t.__scopeMenu),u=Q(a,l),c=Y.useRef(!1),d=me(()=>{let f=l.current;if(!o&&f){let h=new CustomEvent(mf,{bubbles:!0,cancelable:!0});f.addEventListener(mf,g=>r?.(g),{once:!0}),ur(f,h),h.defaultPrevented?c.current=!1:s.onClose()}},"handleSelect");return(0,pe.jsx)(mL,{...n,ref:u,disabled:o,onClick:V(t.onClick,d),onPointerDown:f=>{t.onPointerDown?.(f),c.current=!0},onPointerUp:V(t.onPointerUp,f=>{c.current||f.currentTarget?.click()}),onKeyDown:V(t.onKeyDown,f=>{o||f.target!==f.currentTarget||i.searchRef.current!==""&&f.key===" "||gs.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})},"MenuItem")),mL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,disabled:r=!1,textValue:n,...l}=t,s=Lf(Ls,o),i=gf(o),u=Y.useRef(null),c=Q(a,u),[d,f]=Y.useState(!1),[h,g]=Y.useState("");return Y.useEffect(()=>{let m=u.current;m&&g((m.textContent??"").trim())},[l.children]),(0,pe.jsx)(xs.ItemSlot,{scope:o,disabled:r,textValue:n??h,children:(0,pe.jsx)(pf,{asChild:!0,...i,focusable:!r,children:(0,pe.jsx)(te.div,{role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...l,ref:c,onPointerMove:V(t.onPointerMove,Dn(m=>{r?s.onItemLeave(m):(s.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:V(t.onPointerLeave,Dn(m=>s.onItemLeave(m))),onFocus:V(t.onFocus,()=>f(!0)),onBlur:V(t.onBlur,()=>f(!1))})})})},"MenuItemImpl"));var hL="MenuRadioGroup",[Rw,Pw]=Wa(hL,{value:void 0,onValueChange:me(()=>{},"onValueChange")});var gL="MenuItemIndicator",[kw,Dw]=Wa(gL,{checked:!1});var xL=Y.forwardRef(me(function(t,a){let{__scopeMenu:o,...r}=t;return(0,pe.jsx)(te.div,{role:"separator","aria-orientation":"horizontal",...r,ref:a})},"MenuSeparator"));var LL="MenuSub",[Mw,Aw]=Wa(LL);function If(e){return e?"open":"closed"}me(If,"getOpenState");function vf(e){return e==="indeterminate"}me(vf,"isIndeterminate");function CL(e){return vf(e)?"indeterminate":e?"checked":"unchecked"}me(CL,"getCheckedState");function bf(e){let t=document.activeElement;for(let a of e)if(a===t||(a.focus(),document.activeElement!==t))return}me(bf,"focusFirst");function Sf(e,t){return e.map((a,o)=>e[(t+o)%e.length])}me(Sf,"wrapArray");function wf(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=Sf(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}me(wf,"getNextMatch");function yf(e,t){let{x:a,y:o}=e,r=!1;for(let n=0,l=t.length-1;n<t.length;l=n++){let s=t[n],i=t[l],u=s.x,c=s.y,d=i.x,f=i.y;c>o!=f>o&&a<(d-u)*(o-c)/(f-c)+u&&(r=!r)}return r}me(yf,"isPointInPolygon");function Rf(e,t){if(!t)return!1;let a={x:e.clientX,y:e.clientY};return yf(a,t)}me(Rf,"isPointerInGraceArea");function Dn(e){return t=>t.pointerType==="mouse"?e(t):void 0}me(Dn,"whenMouse");var Pf=aL,kf=oL,Df=lL,Mf=iL;var Af=fL,Tf=pL;var Ef=xL;var _t=require("react/jsx-runtime"),vL=Object.defineProperty,Ga=(e,t)=>vL(e,"name",{value:t,configurable:!0}),bs="DropdownMenu",[bL,jw]=qe(bs,[Cs]),za=Cs(),[SL,Of]=bL(bs),wL=Ga(e=>{let{__scopeDropdownMenu:t,children:a,dir:o,open:r,defaultOpen:n,onOpenChange:l,modal:s=!0}=e,i=za(t),u=kt.useRef(null),[c,d]=Tt({prop:r,defaultProp:n??!1,onChange:l,caller:bs});return(0,_t.jsx)(SL,{scope:t,triggerId:lt(),triggerRef:u,contentId:lt(),open:c,onOpenChange:d,onOpenToggle:kt.useCallback(()=>d(f=>!f),[d]),modal:s,children:(0,_t.jsx)(Pf,{...i,open:c,onOpenChange:d,dir:o,modal:s,children:a})})},"DropdownMenu"),yL="DropdownMenuTrigger",RL=kt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,disabled:r=!1,...n}=t,l=Of(yL,o),s=za(o),i=Q(a,l.triggerRef);return(0,_t.jsx)(kf,{asChild:!0,...s,children:(0,_t.jsx)(te.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...n,ref:i,onPointerDown:V(t.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(l.onOpenToggle(),l.open||u.preventDefault())}),onKeyDown:V(t.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&l.onOpenToggle(),u.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),PL=Ga(e=>{let{__scopeDropdownMenu:t,...a}=e,o=za(t);return(0,_t.jsx)(Df,{...o,...a})},"DropdownMenuPortal"),kL="DropdownMenuContent",DL=kt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=Of(kL,o),l=za(o),s=kt.useRef(!1);return(0,_t.jsx)(Mf,{id:n.contentId,"aria-labelledby":n.triggerId,...l,...r,ref:a,onCloseAutoFocus:V(t.onCloseAutoFocus,i=>{s.current||n.triggerRef.current?.focus(),s.current=!1,i.preventDefault()}),onInteractOutside:V(t.onInteractOutside,i=>{let u=i.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0,d=u.button===2||c;(!n.modal||d)&&(s.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent"));var ML=kt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,_t.jsx)(Af,{...n,...r,ref:a})},"DropdownMenuLabel")),AL=kt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,_t.jsx)(Tf,{...n,...r,ref:a})},"DropdownMenuItem"));var TL=kt.forwardRef(Ga(function(t,a){let{__scopeDropdownMenu:o,...r}=t,n=za(o);return(0,_t.jsx)(Ef,{...n,...r,ref:a})},"DropdownMenuSeparator"));var Ff=wL,Bf=RL,Nf=PL,Ss=DL;var ws=ML,ys=AL;var Rs=TL;var ko=require("react/jsx-runtime"),yr=Ff,Rr=Bf;var Do=wr.forwardRef(({className:e,sideOffset:t=4,...a},o)=>(0,ko.jsx)(Nf,{children:(0,ko.jsx)(Ss,{ref:o,sideOffset:t,className:ee("kanban-portal kanban-dropdown-content",e),...a})}));Do.displayName=Ss.displayName;var Xt=wr.forwardRef(({className:e,inset:t,...a},o)=>(0,ko.jsx)(ys,{ref:o,className:ee("kanban-dropdown-item",t&&"kanban-dropdown-item--inset",e),...a}));Xt.displayName=ys.displayName;var OL=wr.forwardRef(({className:e,inset:t,...a},o)=>(0,ko.jsx)(ws,{ref:o,className:ee("kanban-dropdown-label",t&&"kanban-dropdown-label--inset",e),...a}));OL.displayName=ws.displayName;var FL=wr.forwardRef(({className:e,...t},a)=>(0,ko.jsx)(Rs,{ref:a,className:ee("kanban-dropdown-separator",e),...t}));FL.displayName=Rs.displayName;var _f=U(require("react"),1);var Hf=require("react/jsx-runtime"),Kt=_f.forwardRef(({className:e,type:t,...a},o)=>(0,Hf.jsx)("input",{type:t,className:ee("kanban-input",e),ref:o,...a}));Kt.displayName="Input";var Vf=U(require("react"),1);var qf=U(require("react"),1);var Uf=require("react/jsx-runtime"),BL=Object.defineProperty,NL=(e,t)=>BL(e,"name",{value:t,configurable:!0}),_L=qf.forwardRef(NL(function(t,a){return(0,Uf.jsx)(te.label,{...t,ref:a,onMouseDown:o=>{o.target.closest("button, input, select, textarea")||(t.onMouseDown?.(o),!o.defaultPrevented&&o.detail>1&&o.preventDefault())}})},"Label")),Ps=_L;var Wf=require("react/jsx-runtime"),ca=Vf.forwardRef(({className:e,...t},a)=>(0,Wf.jsx)(Ps,{ref:a,className:ee("kanban-label",e),...t}));ca.displayName=Ps.displayName;var pa=U(require("react"),1);var D=U(require("react"),1),Ms=U(require("react-dom"),1);var qL=Object.defineProperty,UL=(e,t)=>qL(e,"name",{value:t,configurable:!0});function An(e,[t,a]){return Math.min(a,Math.max(t,e))}UL(An,"clamp");var Tn=U(require("react"),1),VL=Object.defineProperty,WL=(e,t)=>VL(e,"name",{value:t,configurable:!0});function ks(e){let t=Tn.useRef({value:e,previous:e});return Tn.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}WL(ks,"usePrevious");var GL=U(require("react"),1);var zL=require("react/jsx-runtime");var Gf=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"});var W=require("react/jsx-runtime"),XL=Object.defineProperty,oe=(e,t)=>XL(e,"name",{value:t,configurable:!0}),KL=[" ","Enter","ArrowUp","ArrowDown"],jL=[" ","Enter"],Mo="Select",[On,Fn,$L]=Oa(Mo),[Ka,ky]=qe(Mo,[$L,Po]),As=Po(),[YL,fa]=Ka(Mo),[ZL,QL]=Ka(Mo);function $f(e){let{__scopeSelect:t,children:a,open:o,defaultOpen:r,onOpenChange:n,value:l,defaultValue:s,onValueChange:i,dir:u,name:c,autoComplete:d,disabled:f,required:h,form:g,internal_do_not_use_render:m}=e,p=As(t),[x,C]=D.useState(null),[L,I]=D.useState(null),[v,b]=D.useState(!1),y=Fa(u),[R,k]=Tt({prop:o,defaultProp:r??!1,onChange:n,caller:Mo}),[O,E]=Tt({prop:l,defaultProp:s,onChange:i,caller:Mo}),T=D.useRef(null),B=D.useRef(O);D.useEffect(()=>{let $=g?x?.ownerDocument.getElementById(g):x?.form;if($ instanceof HTMLFormElement){let se=oe(()=>E(B.current),"reset");return $.addEventListener("reset",se),()=>$.removeEventListener("reset",se)}},[g,x,E]);let q=x?!!g||!!x.closest("form"):!0,[Z,K]=D.useState(new Set),H=lt(),G=Array.from(Z).map($=>$.props.value).join(";"),z=D.useCallback($=>{K(se=>new Set(se).add($))},[]),M=D.useCallback($=>{K(se=>{let he=new Set(se);return he.delete($),he})},[]),re={required:h,trigger:x,onTriggerChange:C,valueNode:L,onValueNodeChange:I,valueNodeHasChildren:v,onValueNodeHasChildrenChange:b,contentId:H,value:O,onValueChange:E,open:R,onOpenChange:k,dir:y,triggerPointerDownPosRef:T,disabled:f,name:c,autoComplete:d,form:g,nativeOptions:Z,nativeSelectKey:G,isFormControl:q};return(0,W.jsx)(wn,{...p,children:(0,W.jsx)(YL,{scope:t,...re,children:(0,W.jsx)(On.Provider,{scope:t,children:(0,W.jsx)(ZL,{scope:t,onNativeOptionAdd:z,onNativeOptionRemove:M,children:lp(m)?m(re):a})})})})}oe($f,"SelectProvider");var Yf=oe(e=>{let{__scopeSelect:t,children:a,...o}=e;return(0,W.jsx)($f,{__scopeSelect:t,...o,internal_do_not_use_render:({isFormControl:r})=>(0,W.jsxs)(W.Fragment,{children:[a,r?(0,W.jsx)(hC,{__scopeSelect:t}):null]})})},"Select"),JL="SelectTrigger",Ts=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,disabled:r=!1,...n}=t,l=As(o),s=fa(JL,o),i=s.disabled||r,u=Q(a,s.onTriggerChange),c=Fn(o),d=D.useRef("touch"),[f,h,g]=qs(p=>{let x=c().filter(I=>!I.disabled),C=x.find(I=>I.value===s.value),L=Us(x,p,C);L!==void 0&&s.onValueChange(L.value)}),m=oe(p=>{i||(s.onOpenChange(!0),g()),p&&(s.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})},"handleOpen");return(0,W.jsx)(yn,{asChild:!0,...l,children:(0,W.jsx)(te.button,{type:"button",role:"combobox","aria-controls":s.open?s.contentId:void 0,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Pr(s.value)?"":void 0,...n,ref:u,onClick:V(n.onClick,p=>{p.currentTarget.focus(),d.current!=="mouse"&&m(p)}),onPointerDown:V(n.onPointerDown,p=>{d.current=p.pointerType;let x=p.target;x.hasPointerCapture(p.pointerId)&&x.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(m(p),p.preventDefault())}),onKeyDown:V(n.onKeyDown,p=>{let x=f.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&h(p.key),!(x&&p.key===" ")&&KL.includes(p.key)&&(m(),p.preventDefault())})})})},"SelectTrigger")),eC="SelectValue",Zf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,children:l,placeholder:s="",...i}=t,u=fa(eC,o),{onValueNodeHasChildrenChange:c}=u,d=l!==void 0,f=Q(a,u.onValueNodeChange);ie(()=>{c(d)},[c,d]);let h=Pr(u.value);return(0,W.jsx)(te.span,{...i,asChild:h?!1:i.asChild,ref:f,style:{pointerEvents:"none"},children:(0,W.jsx)(D.Fragment,{children:h?s:l},h?"placeholder":"value")})},"SelectValue")),Qf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,...n}=t;return(0,W.jsx)(te.span,{"aria-hidden":!0,...n,ref:a,children:r||"\u25BC"})},"SelectIcon")),tC="SelectPortal",[aC,oC]=Ka(tC,{forceMount:void 0}),Jf=oe(e=>{let{__scopeSelect:t,forceMount:a,...o}=e;return(0,W.jsx)(aC,{scope:e.__scopeSelect,forceMount:a,children:(0,W.jsx)(mo,{asChild:!0,...o})})},"SelectPortal"),Xa="SelectContent",Es=D.forwardRef(oe(function(t,a){let o=oC(Xa,t.__scopeSelect),{forceMount:r=o.forceMount,...n}=t,l=fa(Xa,t.__scopeSelect),[s,i]=D.useState();return ie(()=>{i(new DocumentFragment)},[]),(0,W.jsx)(Wt,{present:r||l.open,children:({present:u})=>u?(0,W.jsx)(lC,{...n,ref:a}):(0,W.jsx)(rC,{...n,fragment:s})})},"SelectContent")),rC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,children:r,fragment:n}=t;return n?Ms.createPortal((0,W.jsx)(ep,{scope:o,children:(0,W.jsx)(On.Slot,{scope:o,children:(0,W.jsx)("div",{ref:a,children:r})})}),n):null},"SelectContentFragment")),Dt=10,[ep,ja]=Ka(Xa),nC=Xe("SelectContent.RemoveScroll"),lC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o}=t,{position:r="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:l,onPointerDownOutside:s,side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:m,hideWhenDetached:p,avoidCollisions:x,...C}=t,L=fa(Xa,o),[I,v]=D.useState(null),[b,y]=D.useState(null),R=Q(a,v),[k,O]=D.useState(null),[E,T]=D.useState(null),B=Fn(o),[q,Z]=D.useState(!1),K=D.useRef(!1);D.useEffect(()=>{if(I)return vo(I)},[I]),la();let H=D.useCallback(F=>{let[J,...X]=B().map(A=>A.ref.current),[S]=X.slice(-1),P=document.activeElement;for(let A of F)if(A===P||(A?.scrollIntoView({block:"nearest"}),A===J&&b&&(b.scrollTop=0),A===S&&b&&(b.scrollTop=b.scrollHeight),A?.focus(),document.activeElement!==P))return},[B,b]),G=D.useCallback(()=>H([k,I]),[H,k,I]);D.useEffect(()=>{q&&G()},[q,G]);let{onOpenChange:z,triggerPointerDownPosRef:M}=L;D.useEffect(()=>{if(I){let F={x:0,y:0},J=oe(S=>{F={x:Math.abs(Math.round(S.pageX)-(M.current?.x??0)),y:Math.abs(Math.round(S.pageY)-(M.current?.y??0))}},"handlePointerMove"),X=oe(S=>{F.x<=10&&F.y<=10?S.preventDefault():S.composedPath().includes(I)||z(!1),document.removeEventListener("pointermove",J),M.current=null},"handlePointerUp");return M.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",X,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",X,{capture:!0})}}},[I,z,M]),D.useEffect(()=>{let F=oe(()=>z(!1),"close");return window.addEventListener("blur",F),window.addEventListener("resize",F),()=>{window.removeEventListener("blur",F),window.removeEventListener("resize",F)}},[z]);let[re,$]=qs(F=>{let J=B().filter(P=>!P.disabled),X=J.find(P=>P.ref.current===document.activeElement),S=Us(J,F,X);S&&setTimeout(()=>S.ref.current?.focus())}),se=D.useCallback((F,J,X)=>{let S=!K.current&&!X;(L.value!==void 0&&L.value===J||S)&&(O(F),S&&(K.current=!0))},[L.value]),he=D.useCallback(()=>I?.focus(),[I]),ye=D.useCallback((F,J,X)=>{let S=!K.current&&!X;(L.value!==void 0&&L.value===J||S)&&T(F)},[L.value]),Le=r==="popper"?zf:sC,Re=Le===zf?{side:i,sideOffset:u,align:c,alignOffset:d,arrowPadding:f,collisionBoundary:h,collisionPadding:g,sticky:m,hideWhenDetached:p,avoidCollisions:x}:{};return(0,W.jsx)(ep,{scope:o,content:I,viewport:b,onViewportChange:y,itemRefCallback:se,selectedItem:k,onItemLeave:he,itemTextRefCallback:ye,focusSelectedItem:G,selectedItemText:E,position:r,isPositioned:q,searchRef:re,children:(0,W.jsx)(ka,{as:nC,allowPinchZoom:!0,children:(0,W.jsx)(po,{asChild:!0,trapped:L.open,onMountAutoFocus:F=>{F.preventDefault()},onUnmountAutoFocus:V(n,F=>{L.trigger?.focus({preventScroll:!0}),F.preventDefault()}),children:(0,W.jsx)(fo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:F=>F.preventDefault(),onDismiss:()=>L.onOpenChange(!1),children:(0,W.jsx)(Le,{role:"listbox",id:L.contentId,"data-state":L.open?"open":"closed",dir:L.dir,onContextMenu:F=>F.preventDefault(),...C,...Re,onPlaced:()=>Z(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...C.style},onKeyDown:V(C.onKeyDown,F=>{let J=F.ctrlKey||F.altKey||F.metaKey;if(F.key==="Tab"&&F.preventDefault(),!J&&F.key.length===1&&$(F.key),["ArrowUp","ArrowDown","Home","End"].includes(F.key)){let S=B().filter(P=>!P.disabled).map(P=>P.ref.current);if(["ArrowUp","End"].includes(F.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(F.key)){let P=F.target,A=S.indexOf(P);S=S.slice(A+1)}setTimeout(()=>H(S)),F.preventDefault()}})})})})})})},"SelectContentImpl")),sC=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,onPlaced:r,...n}=t,l=fa(Xa,o),s=ja(Xa,o),[i,u]=D.useState(null),[c,d]=D.useState(null),f=Q(a,d),h=Fn(o),g=D.useRef(!1),m=D.useRef(!0),{viewport:p,selectedItem:x,selectedItemText:C,focusSelectedItem:L}=s,I=D.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&c&&p&&x&&C){let R=l.trigger.getBoundingClientRect(),k=c.getBoundingClientRect(),O=l.valueNode.getBoundingClientRect(),E=C.getBoundingClientRect();if(l.dir!=="rtl"){let P=E.left-k.left,A=O.left-P,N=R.left-A,ne=R.width+N,le=Math.max(ne,k.width),ue=window.innerWidth-Dt,Ie=An(A,[Dt,Math.max(Dt,ue-le)]);i.style.minWidth=ne+"px",i.style.left=Ie+"px"}else{let P=k.right-E.right,A=window.innerWidth-O.right-P,N=window.innerWidth-R.right-A,ne=R.width+N,le=Math.max(ne,k.width),ue=window.innerWidth-Dt,Ie=An(A,[Dt,Math.max(Dt,ue-le)]);i.style.minWidth=ne+"px",i.style.right=Ie+"px"}let T=h(),B=window.innerHeight-Dt*2,q=p.scrollHeight,Z=window.getComputedStyle(c),K=parseInt(Z.borderTopWidth,10),H=parseInt(Z.paddingTop,10),G=parseInt(Z.borderBottomWidth,10),z=parseInt(Z.paddingBottom,10),M=K+H+q+z+G,re=Math.min(x.offsetHeight*5,M),$=window.getComputedStyle(p),se=parseInt($.paddingTop,10),he=parseInt($.paddingBottom,10),ye=R.top+R.height/2-Dt,Le=B-ye,Re=x.offsetHeight/2,F=x.offsetTop+Re,J=K+H+F,X=M-J;if(J<=ye){let P=T.length>0&&x===T[T.length-1].ref.current;i.style.bottom="0px";let A=c.clientHeight-p.offsetTop-p.offsetHeight,N=Math.max(Le,Re+(P?he:0)+A+G),ne=J+N;i.style.height=ne+"px"}else{let P=T.length>0&&x===T[0].ref.current;i.style.top="0px";let N=Math.max(ye,K+p.offsetTop+(P?se:0)+Re)+X;i.style.height=N+"px",p.scrollTop=J-ye+p.offsetTop}i.style.margin=`${Dt}px 0`,i.style.minHeight=re+"px",i.style.maxHeight=B+"px",r?.(),requestAnimationFrame(()=>g.current=!0)}},[h,l.trigger,l.valueNode,i,c,p,x,C,l.dir,r]);ie(()=>I(),[I]);let[v,b]=D.useState();ie(()=>{c&&b(window.getComputedStyle(c).zIndex)},[c]);let y=D.useCallback(R=>{R&&m.current===!0&&(I(),L?.(),m.current=!1)},[I,L]);return(0,W.jsx)(iC,{scope:o,contentWrapper:i,shouldExpandOnScrollRef:g,onScrollButtonChange:y,children:(0,W.jsx)("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:v},children:(0,W.jsx)(te.div,{...n,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})},"SelectItemAlignedPosition")),zf=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,align:r="start",collisionPadding:n=Dt,...l}=t,s=As(o);return(0,W.jsx)(Rn,{...s,...l,ref:a,align:r,collisionPadding:n,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[iC,Os]=Ka(Xa,{}),Xf="SelectViewport",tp=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,nonce:r,...n}=t,l=ja(Xf,o),s=Os(Xf,o),i=Q(a,l.onViewportChange),u=D.useRef(0);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,W.jsx)(On.Slot,{scope:o,children:(0,W.jsx)(te.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:V(n.onScroll,c=>{let d=c.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){let g=Math.abs(u.current-d.scrollTop);if(g>0){let m=window.innerHeight-Dt*2,p=parseFloat(f.style.minHeight),x=parseFloat(f.style.height),C=Math.max(p,x);if(C<m){let L=C+g,I=Math.min(m,L),v=L-I;f.style.height=I+"px",f.style.bottom==="0px"&&(d.scrollTop=v>0?v:0,f.style.justifyContent="flex-end")}}}u.current=d.scrollTop})})})]})},"SelectViewport")),uC="SelectGroup",[Dy,dC]=Ka(uC);var cC="SelectLabel",Fs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t,n=dC(cC,o);return(0,W.jsx)(te.div,{id:n.id,...r,ref:a})},"SelectLabel")),Ds="SelectItem",[fC,ap]=Ka(Ds),Bs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,value:r,disabled:n=!1,textValue:l,...s}=t,i=fa(Ds,o),u=ja(Ds,o),c=i.value===r,[d,f]=D.useState(l??""),[h,g]=D.useState(!1),m=Oe(I=>u.itemRefCallback?.(I,r,n)),p=Q(a,m),x=lt(),C=D.useRef("touch"),L=oe(()=>{n||(i.onValueChange(r),i.onOpenChange(!1))},"handleSelect");return(0,W.jsx)(fC,{scope:o,value:r,disabled:n,textId:x,isSelected:c,onItemTextChange:D.useCallback(I=>{f(v=>v||(I?.textContent??"").trim())},[]),children:(0,W.jsx)(On.ItemSlot,{scope:o,value:r,disabled:n,textValue:d,children:(0,W.jsx)(te.div,{role:"option","aria-labelledby":x,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...s,ref:p,onFocus:V(s.onFocus,()=>g(!0)),onBlur:V(s.onBlur,()=>g(!1)),onClick:V(s.onClick,()=>{C.current!=="mouse"&&L()}),onPointerUp:V(s.onPointerUp,()=>{C.current==="mouse"&&L()}),onPointerDown:V(s.onPointerDown,I=>{C.current=I.pointerType}),onPointerMove:V(s.onPointerMove,I=>{C.current=I.pointerType,n?u.onItemLeave?.():C.current==="mouse"&&I.currentTarget.focus({preventScroll:!0})}),onPointerLeave:V(s.onPointerLeave,I=>{I.currentTarget===document.activeElement&&u.onItemLeave?.()}),onKeyDown:V(s.onKeyDown,I=>{n||I.target!==I.currentTarget||u.searchRef?.current!==""&&I.key===" "||(jL.includes(I.key)&&L(),I.key===" "&&I.preventDefault())})})})})},"SelectItem")),En="SelectItemText",op=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,className:r,style:n,...l}=t,s=fa(En,o),i=ja(En,o),u=ap(En,o),c=QL(En,o),[d,f]=D.useState(null),h=Oe(L=>i.itemTextRefCallback?.(L,u.value,u.disabled)),g=Q(a,f,u.onItemTextChange,h),m=d?.textContent,p=D.useMemo(()=>(0,W.jsx)("option",{value:u.value,disabled:u.disabled,children:m},u.value),[u.disabled,u.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:C}=c;return ie(()=>(x(p),()=>C(p)),[x,C,p]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(te.span,{id:u.textId,...l,ref:g}),u.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!Pr(s.value)?Ms.createPortal(l.children,s.valueNode):null]})},"SelectItemText")),pC="SelectItemIndicator",rp=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return ap(pC,o).isSelected?(0,W.jsx)(te.span,{"aria-hidden":!0,...r,ref:a}):null},"SelectItemIndicator")),Kf="SelectScrollUpButton",Ns=D.forwardRef(oe(function(t,a){let o=ja(Kf,t.__scopeSelect),r=Os(Kf,t.__scopeSelect),[n,l]=D.useState(!1),s=Q(a,r.onScrollButtonChange);return ie(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollTop>0;l(d)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,W.jsx)(np,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop-u.offsetHeight)}}):null},"SelectScrollUpButton")),jf="SelectScrollDownButton",_s=D.forwardRef(oe(function(t,a){let o=ja(jf,t.__scopeSelect),r=Os(jf,t.__scopeSelect),[n,l]=D.useState(!1),s=Q(a,r.onScrollButtonChange);return ie(()=>{if(o.viewport&&o.isPositioned){let u=function(){let d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;l(f)};var i=u;oe(u,"handleScroll");let c=o.viewport;return u(),c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)}},[o.viewport,o.isPositioned]),n?(0,W.jsx)(np,{...t,ref:s,onAutoScroll:()=>{let{viewport:i,selectedItem:u}=o;i&&u&&(i.scrollTop=i.scrollTop+u.offsetHeight)}}):null},"SelectScrollDownButton")),np=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,onAutoScroll:r,...n}=t,l=ja("SelectScrollButton",o),s=D.useRef(null),i=Fn(o),u=D.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return D.useEffect(()=>()=>u(),[u]),ie(()=>{i().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[i]),(0,W.jsx)(te.div,{"aria-hidden":!0,...n,ref:a,style:{flexShrink:0,...n.style},onPointerDown:V(n.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:V(n.onPointerMove,()=>{l.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:V(n.onPointerLeave,()=>{u()})})},"SelectScrollButtonImpl")),Hs=D.forwardRef(oe(function(t,a){let{__scopeSelect:o,...r}=t;return(0,W.jsx)(te.div,{"aria-hidden":!0,...r,ref:a})},"SelectSeparator"));var mC="SelectBubbleInput",hC=D.forwardRef(oe(function({__scopeSelect:t,...a},o){let r=fa(mC,t),{value:n,onValueChange:l,required:s,disabled:i,name:u,autoComplete:c,form:d}=r,{nativeOptions:f,nativeSelectKey:h}=r,g=D.useRef(null),m=Q(o,g),p=n??"",x=ks(p),C=Array.from(f).some(L=>(L.props.value??"")==="");return D.useEffect(()=>{let L=g.current;if(!L)return;let I=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(I,"value").set;if(x!==p&&b){let y=new Event("change",{bubbles:!0});b.call(L,p),L.dispatchEvent(y)}},[x,p]),(0,W.jsxs)(te.select,{"aria-hidden":!0,required:s,tabIndex:-1,name:u,autoComplete:c,disabled:i,form:d,onChange:L=>l(L.target.value),...a,style:{...Gf,...a.style},ref:m,defaultValue:p,children:[Pr(n)&&!C?(0,W.jsx)("option",{value:""}):null,Array.from(f)]},h)},"SelectBubbleInput"));function lp(e){return typeof e=="function"}oe(lp,"isFunction");function Pr(e){return e===""||e===void 0}oe(Pr,"shouldShowPlaceholder");function qs(e){let t=Oe(e),a=D.useRef(""),o=D.useRef(0),r=D.useCallback(l=>{let s=a.current+l;t(s),oe((function i(u){a.current=u,window.clearTimeout(o.current),u!==""&&(o.current=window.setTimeout(()=>i(""),1e3))}),"updateSearch")(s)},[t]),n=D.useCallback(()=>{a.current="",window.clearTimeout(o.current)},[]);return D.useEffect(()=>()=>window.clearTimeout(o.current),[]),[a,r,n]}oe(qs,"useTypeaheadSearch");function Us(e,t,a){let r=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,n=a?e.indexOf(a):-1,l=sp(e,Math.max(n,0));r.length===1&&(l=l.filter(u=>u!==a));let i=l.find(u=>u.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}oe(Us,"findNextItem");function sp(e,t){return e.map((a,o)=>e[(t+o)%e.length])}oe(sp,"wrapArray");var Se=require("react/jsx-runtime"),Vs=Yf;var Ws=Zf,Bn=pa.forwardRef(({className:e,children:t,...a},o)=>(0,Se.jsxs)(Ts,{ref:o,className:ee("kanban-select-trigger",e),...a,children:[t,(0,Se.jsx)(Qf,{asChild:!0,children:(0,Se.jsx)(so,{className:"kanban-select-icon"})})]}));Bn.displayName=Ts.displayName;var ip=pa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Ns,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Se.jsx)(er,{className:"kanban-select-scroll-icon"})}));ip.displayName=Ns.displayName;var up=pa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(_s,{ref:a,className:ee("kanban-select-scroll-button",e),...t,children:(0,Se.jsx)(so,{className:"kanban-select-scroll-icon"})}));up.displayName=_s.displayName;var Nn=pa.forwardRef(({className:e,children:t,position:a="popper",...o},r)=>(0,Se.jsx)(Jf,{children:(0,Se.jsxs)(Es,{ref:r,className:ee("kanban-portal kanban-select-content",a==="popper"&&"kanban-select-content--popper",e),position:a,...o,children:[(0,Se.jsx)(ip,{}),(0,Se.jsx)(tp,{className:ee("kanban-select-viewport",a==="popper"&&"kanban-select-viewport--popper"),children:t}),(0,Se.jsx)(up,{})]})}));Nn.displayName=Es.displayName;var xC=pa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Fs,{ref:a,className:ee("kanban-select-label",e),...t}));xC.displayName=Fs.displayName;var Ao=pa.forwardRef(({className:e,children:t,...a},o)=>(0,Se.jsxs)(Bs,{ref:o,className:ee("kanban-select-item",e),...a,children:[(0,Se.jsx)("span",{className:"kanban-select-item-indicator",children:(0,Se.jsx)(rp,{children:(0,Se.jsx)(ra,{className:"kanban-select-check"})})}),(0,Se.jsx)(op,{children:t})]}));Ao.displayName=Bs.displayName;var LC=pa.forwardRef(({className:e,...t},a)=>(0,Se.jsx)(Hs,{ref:a,className:ee("kanban-select-separator",e),...t}));LC.displayName=Hs.displayName;var dp=U(require("react"),1);var cp=require("react/jsx-runtime"),_n=dp.forwardRef(({className:e,...t},a)=>(0,cp.jsx)("textarea",{className:ee("kanban-textarea",e),ref:a,...t}));_n.displayName="Textarea";var jt={high:{label:"P0",color:"#f87171"},medium:{label:"P1",color:"#fbbf24"},low:{label:"P2",color:"#38bdf8"}},Hn=["high","medium","low"],fp="#94a3b8";function pp(e,t){return t?e.find(a=>a.name===t)?.color??fp:fp}var $e=(e,t)=>e.replace(/\{(\w+)\}/g,(a,o)=>t[o]??""),Gs=e=>e==="high"||e==="medium"||e==="low"?jt[e].label:"";function mp(e,t){let a=e.meta||{},o=t("noValue"),r=e.from??null,n=e.to??null;switch(e.type){case"card_created":{let l=a.label??o,s=a.priority&&Gs(a.priority)||o;return $e(t("actCreated"),{column:a.column??"",label:l,priority:s})}case"card_moved":return $e(t("actMoved"),{from:r??o,to:n??o});case"card_label_changed":return r==null&&n!=null?$e(t("actLabelSet"),{to:n}):r!=null&&n==null?$e(t("actLabelCleared"),{from:r}):$e(t("actLabel"),{from:r??o,to:n??o});case"card_priority_changed":{let l=r?Gs(r)||r:o,s=n?Gs(n)||n:o;return r==null&&n!=null?$e(t("actPrioritySet"),{to:s}):r!=null&&n==null?$e(t("actPriorityCleared"),{from:l}):$e(t("actPriority"),{from:l,to:s})}case"card_title_changed":return $e(t("actTitle"),{from:r??o,to:n??o});case"card_note_changed":return t("actNote");case"card_comment_added":return t("actComment");case"card_deleted":return t("actDeleted");case"column_added":return $e(t("actColumnAdded"),{column:a.column??""});case"column_renamed":return $e(t("actColumnRenamed"),{from:r??o,to:n??o});case"column_deleted":return $e(t("actColumnDeleted"),{column:a.column??""});case"label_added":return $e(t("actLabelAdded"),{label:a.label??""});case"label_renamed":return $e(t("actLabelRenamed"),{from:r??o,to:n??o});case"label_deleted":return $e(t("actLabelDeleted"),{label:a.label??""});case"label_color_changed":return $e(t("actLabelColor"),{label:a.label??"",from:r??o,to:n??o});default:return e.type}}var qn=e=>String(e).padStart(2,"0");function kr(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.getFullYear()}-${qn(t.getMonth()+1)}-${qn(t.getDate())} ${qn(t.getHours())}:${qn(t.getMinutes())}`}var $t=require("react/jsx-runtime");function hp({activities:e}){let t=Ve();if(e.length===0)return(0,$t.jsx)("p",{className:"kanban-muted-small",children:t("activityEmpty")});let a=[...e].reverse();return(0,$t.jsx)("ol",{className:"kanban-activity-list",children:a.map(o=>{let r=o.source==="agent",n=t(r?"actorAgent":"actorHuman");return(0,$t.jsxs)("li",{className:"kanban-activity-item",children:[(0,$t.jsx)("span",{className:`kanban-activity-dot ${r?"is-agent":"is-human"}`,"aria-hidden":"true"}),(0,$t.jsxs)("p",{className:"kanban-activity-description",children:[(0,$t.jsx)("span",{className:`kanban-activity-actor ${r?"is-agent":"is-human"}`,children:n})," ",mp(o,t)]}),(0,$t.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:o.ts,title:kr(o.ts),children:kr(o.ts)})]},o.id)})})}var _=require("react/jsx-runtime");function gp({open:e,card:t,labels:a,comments:o,activities:r,onOpenChange:n,onSave:l,onAddComment:s,onDelete:i,onChatWithAgent:u}){let c=Ve(),[d,f]=(0,$a.useState)({id:"",title:"",note:"",label:"",priority:""}),[h,g]=(0,$a.useState)(""),[m,p]=(0,$a.useState)(!1),[x,C]=(0,$a.useState)(!1);(0,$a.useEffect)(()=>{e&&(f({id:t?.id??"",title:t?.title??"",note:t?.note??"",label:t?.label??"",priority:t?.priority??""}),g(""))},[e,t]);let L=v=>f(b=>({...b,...v})),I=async()=>{let v=h.trim();if(!t||!v||v.length>2e3||x)return;C(!0);let b=await s(t.id,v);C(!1),b!==!1&&g("")};return(0,_.jsx)(So,{open:e,onOpenChange:n,children:(0,_.jsxs)(Ma,{className:"kanban-dialog-wide","aria-describedby":void 0,onOpenAutoFocus:v=>v.preventDefault(),children:[(0,_.jsx)(Aa,{children:(0,_.jsx)(Ta,{className:"kanban-sr-only",children:c(t?"editCard":"addCard")})}),(0,_.jsxs)("div",{className:"kanban-form-stack",children:[(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsxs)(ca,{htmlFor:"card-title",className:"kanban-field-label",children:[(0,_.jsx)("span",{children:c("fieldTitle")}),t&&(0,_.jsxs)("span",{className:"kanban-field-id",children:[c("fieldId"),": ",t.id]})]}),(0,_.jsx)(Kt,{id:"card-title",value:d.title,placeholder:c("titlePlaceholder"),maxLength:120,onChange:v=>L({title:v.target.value})})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(ca,{children:c("fieldLabel")}),(0,_.jsxs)(Vs,{value:d.label||"__none__",onValueChange:v=>L({label:v==="__none__"?"":v}),children:[(0,_.jsx)(Bn,{children:(0,_.jsx)(Ws,{placeholder:c("noLabel")})}),(0,_.jsxs)(Nn,{children:[(0,_.jsx)(Ao,{value:"__none__",children:c("noLabel")}),a.map(v=>(0,_.jsx)(Ao,{value:v.name,children:v.name},v.name))]})]})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(ca,{children:c("fieldPriority")}),(0,_.jsxs)(Vs,{value:d.priority||"__none__",onValueChange:v=>L({priority:v==="__none__"?"":v}),children:[(0,_.jsx)(Bn,{children:(0,_.jsx)(Ws,{placeholder:c("noPriority")})}),(0,_.jsxs)(Nn,{children:[(0,_.jsx)(Ao,{value:"__none__",children:c("noPriority")}),Hn.map(v=>{let b=jt[v];return(0,_.jsx)(Ao,{value:v,children:(0,_.jsxs)("span",{className:"kanban-inline-priority",children:[(0,_.jsx)("span",{className:"kanban-priority-dot",style:{background:b.color}}),b.label]})},v)})]})]})]}),(0,_.jsxs)("div",{className:"kanban-form-field",children:[(0,_.jsx)(ca,{htmlFor:"card-note",children:c("fieldNote")}),(0,_.jsx)(_n,{id:"card-note",value:d.note,placeholder:c("notePlaceholder"),rows:5,maxLength:2e3,onChange:v=>L({note:v.target.value})})]}),t&&(0,_.jsxs)("div",{className:"kanban-comments-box",children:[(0,_.jsxs)(ca,{htmlFor:"card-comment",children:[c("commentsTitle")," ",(0,_.jsxs)("span",{className:"kanban-tabular",children:["(",o.length,")"]})]}),(0,_.jsx)("div",{className:"kanban-comments-scroll","aria-live":"polite",children:o.length===0?(0,_.jsx)("p",{className:"kanban-muted-small",children:c("commentEmpty")}):(0,_.jsx)("ol",{className:"kanban-comment-list",children:o.map(v=>{let b=v.source==="agent";return(0,_.jsxs)("li",{className:"kanban-comment-item",children:[(0,_.jsxs)("div",{className:"kanban-comment-meta",children:[(0,_.jsx)("span",{className:`kanban-activity-actor ${b?"is-agent":"is-human"}`,children:c(b?"actorAgent":"actorHuman")}),(0,_.jsx)("time",{className:"kanban-activity-time kanban-tabular",dateTime:v.createdAt,children:kr(v.createdAt)})]}),(0,_.jsx)("p",{className:"kanban-comment-content",children:v.content})]},v.id)})})}),(0,_.jsxs)("div",{className:"kanban-comment-composer",children:[(0,_.jsx)(_n,{id:"card-comment",value:h,placeholder:c("commentPlaceholder"),rows:3,maxLength:2e3,disabled:x,onChange:v=>g(v.target.value),onKeyDown:v=>{(v.metaKey||v.ctrlKey)&&v.key==="Enter"&&(v.preventDefault(),I())}}),(0,_.jsxs)(Ae,{type:"button",variant:"outline",disabled:x||!h.trim(),onClick:()=>{I()},children:[(0,_.jsx)(rr,{className:"kanban-icon"}),c("sendComment")]})]})]}),t&&(0,_.jsxs)("div",{className:"kanban-activity-box",children:[(0,_.jsx)(ca,{className:"kanban-muted-small",children:c("activityTitle")}),(0,_.jsx)("div",{className:"kanban-activity-scroll",children:(0,_.jsx)(hp,{activities:r})})]})]}),(0,_.jsxs)(hr,{children:[t&&i&&(0,_.jsxs)(Ae,{variant:"outline",className:"kanban-dialog-delete",disabled:m,onClick:async()=>{p(!0);let v=await i(t);p(!1),v!==!1&&n(!1)},children:[(0,_.jsx)(pt,{className:"kanban-icon"}),c("delete")]}),(0,_.jsxs)(yr,{children:[(0,_.jsx)(Rr,{asChild:!0,children:(0,_.jsxs)(Ae,{variant:"outline",disabled:!d.title.trim()&&!d.note.trim(),children:[(0,_.jsx)(wa,{className:"kanban-icon"}),c("chatWithAgent")]})}),(0,_.jsxs)(Do,{align:"end",children:[(0,_.jsx)(Xt,{onClick:()=>{u(d,"current"),n(!1)},children:c("chatCurrentSession")}),(0,_.jsx)(Xt,{onClick:()=>{u(d,"new"),n(!1)},children:c("chatNewSession")})]})]}),(0,_.jsx)(Ae,{variant:"outline",disabled:m||!d.title.trim(),onClick:async()=>{p(!0);let v=await l(d);p(!1),v!==!1&&n(!1)},children:c("save")})]})]})})}var xp=require("react/jsx-runtime");function CC({variant:e,className:t}={}){return ee("kanban-badge",`kanban-badge--${e??"default"}`,t)}function zs({className:e,variant:t,...a}){return(0,xp.jsx)("div",{className:CC({variant:t,className:e}),...a})}var Ya=U(require("react"),1);var Za=require("react/jsx-runtime"),Xs=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-card",e),...t}));Xs.displayName="Card";var IC=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-card-header",e),...t}));IC.displayName="CardHeader";var vC=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-ui-card-title",e),...t}));vC.displayName="CardTitle";var bC=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-card-description",e),...t}));bC.displayName="CardDescription";var Ks=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-card-content",e),...t}));Ks.displayName="CardContent";var SC=Ya.forwardRef(({className:e,...t},a)=>(0,Za.jsx)("div",{ref:a,className:ee("kanban-card-footer",e),...t}));SC.displayName="CardFooter";var et=require("react/jsx-runtime");function js({card:e,labels:t}){let a=Ve(),o=e.priority?jt[e.priority]:null,r=pp(t,e.label);return(0,et.jsx)(Xs,{className:"kanban-card",children:(0,et.jsxs)(Ks,{className:"kanban-sortable-card-content",children:[(e.label||o)&&(0,et.jsxs)("div",{className:"kanban-card-meta",children:[e.label&&(0,et.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:r,color:"#0b1220"},children:e.label}),o&&(0,et.jsx)(zs,{variant:"secondary",className:"kanban-card-badge",style:{background:o.color,color:"#0b1220"},children:o.label})]}),(0,et.jsx)("p",{className:"kanban-card-title",children:e.title}),e.note&&(0,et.jsx)("p",{className:"kanban-card-note",children:e.note}),e.comments.length>0&&(0,et.jsxs)("span",{className:"kanban-card-comment-count",title:`${a("commentsTitle")}: ${e.comments.length}`,"aria-label":`${a("commentsTitle")}: ${e.comments.length}`,children:[(0,et.jsx)(wa,{"aria-hidden":"true"}),(0,et.jsx)("span",{className:"kanban-tabular",children:e.comments.length})]})]})})}function Lp({card:e,labels:t,onOpen:a}){let{attributes:o,listeners:r,setNodeRef:n,transform:l,transition:s,isDragging:i}=Kr({id:e.id,data:{type:"card",cardId:e.id,columnId:e.columnId}});return(0,et.jsx)("div",{ref:n,style:{transform:rt.Transform.toString(l),transition:s},...o,...r,onClick:()=>a(e),className:`kanban-sortable-card${i?" is-dragging":""}`,children:(0,et.jsx)(js,{card:e,labels:t})})}var ut=require("react/jsx-runtime");function Cp({column:e,cards:t,labels:a,onAddCard:o,onOpenCard:r}){let{setNodeRef:n,isOver:l}=Ur({id:e.id,data:{type:"column"}}),{active:s,over:i}=Zo(),u=Ve(),c=s?.data.current?.type==="card"&&(l||i?.data.current?.columnId===e.id);return(0,ut.jsxs)("div",{ref:n,className:`kanban-column${c?" is-over":""}`,children:[(0,ut.jsxs)("div",{className:"kanban-column-header",children:[(0,ut.jsx)("h3",{className:"kanban-column-title",children:e.title}),(0,ut.jsx)("span",{className:"kanban-column-count",children:t.length})]}),(0,ut.jsxs)("div",{className:"kanban-column-cards kan-scroll",children:[(0,ut.jsx)(Xr,{items:t.map(d=>d.id),strategy:zr,children:t.map(d=>(0,ut.jsx)(Lp,{card:d,labels:a,onOpen:r},d.id))}),t.length===0&&(0,ut.jsx)("p",{className:"kanban-column-empty",children:u("emptyColumn")})]}),(0,ut.jsx)("div",{className:"kanban-column-footer",children:(0,ut.jsxs)(Ae,{variant:"ghost",size:"sm",className:"kanban-add-card",onClick:()=>o(e),children:[(0,ut.jsx)(qt,{className:"kanban-icon"}),u("addCard")]})})]})}var Dr=require("react");var we=require("react/jsx-runtime");function wC({column:e,value:t,onValueChange:a,onCommit:o,onDelete:r,canDelete:n}){let{attributes:l,listeners:s,setNodeRef:i,transform:u,transition:c}=Kr({id:e.id}),d=Ve();return(0,we.jsxs)("div",{ref:i,style:{transform:rt.Transform.toString(u),transition:c},className:"kanban-sortable-row",children:[(0,we.jsx)("button",{...l,...s,className:"kanban-drag-handle","aria-label":d("dragSort"),children:(0,we.jsx)(tr,{className:"kanban-icon"})}),(0,we.jsx)(Kt,{value:t,maxLength:40,onChange:f=>a(f.target.value),onBlur:o,onKeyDown:f=>{f.key==="Enter"&&f.target.blur()}}),(0,we.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button","aria-label":d("delete"),disabled:!n,onClick:r,children:(0,we.jsx)(pt,{className:"kanban-icon"})})]})}function Ip({open:e,columns:t,onOpenChange:a,onReorder:o,onRename:r,onDelete:n,onAdd:l}){let s=Ve(),[i,u]=(0,Dr.useState)({}),[c,d]=(0,Dr.useState)(""),f=Br(no(aa,{activationConstraint:{distance:8}}),no(ta,{coordinateGetter:jr}));(0,Dr.useEffect)(()=>{e&&(u(Object.fromEntries(t.map(m=>[m.id,m.title]))),d(""))},[e]);let h=m=>{let p=(i[m]??"").trim(),x=t.find(C=>C.id===m);x&&p&&p!==x.title&&r(m,p)},g=m=>{let{active:p,over:x}=m;x&&p.id!==x.id&&o(String(p.id),String(x.id))};return(0,we.jsx)(So,{open:e,onOpenChange:a,children:(0,we.jsxs)(Ma,{className:"kanban-dialog-medium",children:[(0,we.jsxs)(Aa,{children:[(0,we.jsx)(Ta,{children:s("columnEdit")}),(0,we.jsx)(gr,{children:s("columnEditDesc")})]}),(0,we.jsx)(qr,{sensors:f,collisionDetection:Di,onDragEnd:g,children:(0,we.jsx)(Xr,{items:t.map(m=>m.id),strategy:zr,children:(0,we.jsx)("div",{className:"kanban-sortable-list",children:t.map(m=>(0,we.jsx)(wC,{column:m,value:i[m.id]??m.title,onValueChange:p=>u(x=>({...x,[m.id]:p})),onCommit:()=>h(m.id),onDelete:()=>n(m.id),canDelete:t.length>1},m.id))})})}),(0,we.jsxs)("div",{className:"kanban-sortable-row",children:[(0,we.jsx)(Kt,{value:c,placeholder:s("newColumnPlaceholder"),maxLength:40,onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&c.trim()&&(l(c.trim()),d(""))}}),(0,we.jsxs)(Ae,{size:"sm",onClick:()=>{c.trim()&&(l(c.trim()),d(""))},children:[(0,we.jsx)(qt,{className:"kanban-icon"}),s("add")]})]})]})})}var To=require("react");var Te=require("react/jsx-runtime");function vp({open:e,labels:t,onOpenChange:a,onAdd:o,onUpdate:r,onDelete:n}){let l=Ve(),[s,i]=(0,To.useState)({}),[u,c]=(0,To.useState)(""),[d,f]=(0,To.useState)("#38bdf8");(0,To.useEffect)(()=>{e&&(i(Object.fromEntries(t.map(g=>[g.name,{name:g.name,color:g.color}]))),c(""),f("#38bdf8"))},[e]);let h=g=>{let m=s[g];if(!m)return;let p=t.find(C=>C.name===g),x=m.name.trim();p&&x&&(x!==g||m.color!==p.color)&&r(g,x,m.color)};return(0,Te.jsx)(So,{open:e,onOpenChange:a,children:(0,Te.jsxs)(Ma,{className:"kanban-dialog-medium",children:[(0,Te.jsxs)(Aa,{children:[(0,Te.jsx)(Ta,{children:l("labelEdit")}),(0,Te.jsx)(gr,{children:l("labelEditDesc")})]}),(0,Te.jsx)("div",{className:"kanban-label-list",children:t.map(g=>{let m=s[g.name]??{name:g.name,color:g.color};return(0,Te.jsxs)("div",{className:"kanban-label-row",children:[(0,Te.jsx)("input",{type:"color",value:m.color,className:"kanban-color-input",onChange:p=>i(x=>({...x,[g.name]:{...m,color:p.target.value}})),onBlur:()=>h(g.name)}),(0,Te.jsx)(Kt,{value:m.name,maxLength:20,onChange:p=>i(x=>({...x,[g.name]:{...m,name:p.target.value}})),onBlur:()=>h(g.name),onKeyDown:p=>{p.key==="Enter"&&p.target.blur()}}),(0,Te.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-icon-button kanban-danger-button",onClick:()=>n(g.name),children:(0,Te.jsx)(pt,{className:"kanban-icon"})})]},g.name)})}),(0,Te.jsx)(hr,{className:"kanban-dialog-footer-layout",children:(0,Te.jsxs)("div",{className:"kanban-label-add-row",children:[(0,Te.jsx)("input",{type:"color",value:d,className:"kanban-color-input",onChange:g=>f(g.target.value)}),(0,Te.jsx)(Kt,{value:u,placeholder:l("newLabelPlaceholder"),maxLength:20,onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&u.trim()&&(o(u.trim(),d),c(""))}}),(0,Te.jsxs)(Ae,{size:"sm",onClick:()=>{u.trim()&&(o(u.trim(),d),c(""))},children:[(0,Te.jsx)(qt,{className:"kanban-icon"}),l("add")]})]})})]})})}function Un(e,t={},a="default"){return fetch("/api/kanban",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({method:e,args:{...t,workspaceId:a}})}).then(async o=>{let r;try{r=await o.json()}catch{throw new Error(`Kanban request failed (${o.status})`)}if(!o.ok||r.error)throw new Error(r.error||`Kanban request failed (${o.status})`);return r})}var $s=new Map,Ys=0,Vn=new Set;function bp(e,t){$s.set(e,t),Ys++;for(let a of Vn)a()}function Sp(e){let t=$s.get(e);if(t==null)return null;$s.delete(e),Ys++;for(let a of Vn)a();return t}function wp(e){return Vn.add(e),()=>{Vn.delete(e)}}function yp(){return Ys}function Rp(e){let t=(e.id??"").trim(),a=(e.title??"").trim(),o=(e.note??"").trim(),r=(e.label??"").trim(),n=[];return t&&n.push(bo("fieldId")+": "+t),a&&n.push(a),r&&n.push(bo("fieldLabel")+": "+r),o&&n.push(o),n.join(`

`)}var j=require("react/jsx-runtime");function Pp(e,t,a,o,r){let n=e.find(p=>p.id===t);if(!n)return{cards:e,toIndex:-1};let l=e.filter(p=>p.columnId===n.columnId).findIndex(p=>p.id===t);if(o===t&&n.columnId===a)return{cards:e,toIndex:l};let s=e.filter(p=>p.id!==t),i=s.filter(p=>p.columnId===a),u=o?i.findIndex(p=>p.id===o):-1,c=u<0?i.length:u+(r?1:0),d=[...s],f=i[c],h=i[i.length-1],g=f?d.indexOf(f):h?d.indexOf(h)+1:d.length;return d.splice(g,0,{...n,columnId:a}),{cards:d.every((p,x)=>p.id===e[x]?.id&&p.columnId===e[x]?.columnId)?e:d,toIndex:c}}function kp(e){let{sessionId:t}=e,a=e.useWorkspaces,o=e.inputActions,r=e.uiWorkspace,n=a?a(S=>S.items):[],l=Array.isArray(n)?n.find(S=>Array.isArray(S.sessionIds)&&S.sessionIds.includes(t)):void 0,s=l?l.workspaceId:"default",i=Ve(),[u,c]=(0,fe.useState)(null),[d,f]=(0,fe.useState)(""),[h,g]=(0,fe.useState)([]),[m,p]=(0,fe.useState)(null),[x,C]=(0,fe.useState)(null),[L,I]=(0,fe.useState)(!1),[v,b]=(0,fe.useState)(!1),[y,R]=(0,fe.useState)(!1),[k,O]=(0,fe.useState)(""),E=(0,fe.useRef)(null),T=(0,fe.useRef)(u),B=(0,fe.useRef)(null),q=(0,fe.useRef)(s),Z=(0,fe.useRef)(0),K=(0,fe.useRef)(0);T.current=u,q.current=s;let[H,G]=(0,fe.useState)(null),z=Br(no(aa,{activationConstraint:{distance:8}}),no(ta,{coordinateGetter:jr})),M=(0,fe.useCallback)((S,P,A)=>{q.current!==P||A<K.current||(K.current=A,S&&S.board&&(c({...S.board,cards:Array.isArray(S.board.cards)?S.board.cards.map(N=>({...N,comments:Array.isArray(N.comments)?N.comments:[]})):[],activities:Array.isArray(S.board.activities)?S.board.activities:[]}),f("")),Array.isArray(S&&S.warnings)&&S.warnings.length>0&&g(N=>[...N,...S.warnings]))},[]),re=(0,fe.useCallback)(async(S,P={})=>{let A=++Z.current;try{let N=await Un(S,P,s);return M(N,s,A),!0}catch(N){return f(i("actionFailed")+String(N&&N.message||N)),!1}},[s,M,i]),$=(0,fe.useCallback)(()=>{let S=++Z.current;R(!0),Un("get",{},s).then(P=>M(P,s,S)).catch(P=>f(i("loadFailed")+String(P&&P.message||P))).finally(()=>R(!1))},[s,M,i]);(0,fe.useEffect)(()=>{let S=!0,P=++Z.current;return c(null),C(null),p(null),f(""),g([]),Un("get",{},s).then(A=>{S&&M(A,s,P)}).catch(A=>{S&&f(i("loadFailed")+String(A&&A.message||A))}),()=>{S=!1}},[s,M,i]),(0,fe.useLayoutEffect)(()=>{let S=ne=>{let le=ne;for(;le;){let ue=getComputedStyle(le).overflowY;if(ue==="auto"||ue==="scroll")return le;le=le.parentElement}return null},P=()=>{let ne=E.current;if(!ne)return;let le=ne.getBoundingClientRect().top,ue=S(ne.parentElement),Ie=window.innerHeight;if(ue){let dt=ue.querySelector("[data-composer-seat]"),De=dt?dt.getBoundingClientRect().top:0;dt&&dt.offsetHeight>0&&De>le?Ie=De:Ie=ue.getBoundingClientRect().bottom}G(Math.max(0,Math.floor(Ie-le)))};P();let A=S(E.current?.parentElement??null),N=new ResizeObserver(P);return N.observe(document.documentElement),A&&N.observe(A),window.addEventListener("resize",P),()=>{N.disconnect(),window.removeEventListener("resize",P)}},[u!==null]);let se=(0,fe.useCallback)(S=>{let P=Mi(S),A=P.length>0?P:ll(S),N=jo(A,"id");if(N==null)return[];if(new Set((u?.columns??[]).map(le=>le.id)).has(String(N))){let le=(u?.cards??[]).filter(ue=>ue.columnId===N).map(ue=>ue.id);if(le.length>0){let ue=Nr({...S,droppableContainers:S.droppableContainers.filter(Ie=>Ie.id!==N&&le.includes(String(Ie.id)))});ue.length>0&&(N=ue[0].id)}}return[{id:N}]},[u]),he=S=>{let P=T.current;if(!P||P.cards===S)return;let A={...P,cards:S};T.current=A,c(A)},ye=S=>{if(S.active.data.current?.type!=="card")return;let P=T.current,A=P?.cards.find(N=>N.id===S.active.id);!A||!P||(B.current=P.cards,p(A))},Le=({active:S,over:P})=>{let A=T.current;if(!P||!A||S.data.current?.type!=="card")return;let N=String(S.id),ne=A.cards.find(De=>De.id===N),le=A.cards.find(De=>De.id===P.id),ue=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!ne||!ue||ne.columnId===ue)return;let Ie=S.rect.current.translated,dt=!!(le&&Ie&&Ie.top+Ie.height/2>P.rect.top+P.rect.height/2);he(Pp(A.cards,N,ue,le?.id??null,dt).cards)},Re=({active:S,over:P})=>{let A=T.current,N=B.current;if(B.current=null,!P||!A||S.data.current?.type!=="card"){N&&he(N),p(null);return}let ne=String(S.id),le=A.cards.find(Ct=>Ct.id===P.id),ue=le?.columnId??(P.data.current?.type==="column"?String(P.id):null);if(!ue){N&&he(N),p(null);return}let Ie=S.rect.current.translated,dt=!!(le&&Ie&&Ie.top+Ie.height/2>P.rect.top+P.rect.height/2),De=Pp(A.cards,ne,ue,le?.id??null,dt);he(De.cards),p(null),(!N||De.cards.some((Ct,Oo)=>Ct.id!==N[Oo]?.id||Ct.columnId!==N[Oo]?.columnId))&&re("moveCard",{id:ne,columnId:ue,toIndex:De.toIndex}).then(Ct=>{Ct||$()})},F=()=>{B.current&&he(B.current),B.current=null,p(null)},J=S=>{if(!x)return Promise.resolve(!1);if(x.card){let P={id:x.card.id};return S.title!==x.card.title&&(P.title=S.title),S.note!==x.card.note&&(P.note=S.note),S.label!==(x.card.label??"")&&(P.label=S.label),S.priority!==(x.card.priority??"")&&(P.priority=S.priority),re("updateCard",P)}return re("addCard",{columnId:x.columnId,title:S.title,note:S.note,label:S.label||void 0,priority:S.priority||void 0})},X=(0,fe.useCallback)((S,P)=>{let A=Rp(S);if(A){if(P==="current"){o?.setDraft(A);return}r?.openWorkspace&&r.openWorkspace(s,N=>bp(N,A)).catch(N=>f(i("actionFailed")+String(N&&N.message||N)))}},[o,r,s,i]);return u?(0,j.jsxs)("div",{ref:E,className:"kanban-root kanban-view",style:H!=null?{height:H}:void 0,children:[d&&(0,j.jsx)("p",{className:"kanban-error",children:d}),h.length>0&&(0,j.jsxs)("div",{className:"kanban-warning",children:[(0,j.jsxs)("div",{className:"kanban-warning-body",children:[(0,j.jsx)("p",{className:"kanban-warning-title",children:i("warnings")}),h.map((S,P)=>(0,j.jsx)("p",{className:"kanban-warning-item",children:S},P))]}),(0,j.jsx)(Ae,{variant:"ghost",size:"sm",className:"kanban-warning-dismiss",onClick:()=>g([]),children:i("dismiss")})]}),(0,j.jsxs)(qr,{sensors:z,collisionDetection:se,onDragStart:ye,onDragOver:Le,onDragEnd:Re,onDragCancel:F,children:[(0,j.jsxs)("div",{className:"kanban-content",children:[(0,j.jsxs)("div",{className:"kanban-toolbar",children:[(0,j.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("refresh"),"aria-label":i("refresh"),disabled:y,onClick:$,children:(0,j.jsx)(or,{className:y?"kanban-animate-spin":void 0})}),(0,j.jsxs)(yr,{children:[(0,j.jsx)(Rr,{asChild:!0,children:(0,j.jsx)(Ae,{variant:"ghost",size:"icon",className:"kanban-toolbar-button",title:i("settings"),children:(0,j.jsx)(nr,{className:"kanban-icon"})})}),(0,j.jsxs)(Do,{align:"start",children:[(0,j.jsxs)(Xt,{onClick:()=>I(!0),children:[(0,j.jsx)(ar,{className:"kanban-icon"}),i("columnEdit")]}),(0,j.jsxs)(Xt,{onClick:()=>b(!0),children:[(0,j.jsx)(lr,{className:"kanban-icon"}),i("labelEdit")]})]})]}),(0,j.jsxs)(yr,{children:[(0,j.jsx)(Rr,{asChild:!0,children:(0,j.jsx)(Ae,{variant:k?"secondary":"ghost",size:"icon",className:"kanban-toolbar-button",title:i("priorityFilter"),children:(0,j.jsx)(na,{className:"kanban-icon"})})}),(0,j.jsxs)(Do,{align:"start",children:[(0,j.jsxs)(Xt,{onClick:()=>O(""),children:[(0,j.jsx)("span",{className:"kanban-filter-check",children:!k&&(0,j.jsx)(ra,{className:"kanban-icon"})}),i("all")]}),Hn.map(S=>(0,j.jsxs)(Xt,{onClick:()=>O(S),children:[(0,j.jsx)("span",{className:"kanban-filter-check",children:k===S&&(0,j.jsx)(ra,{className:"kanban-icon"})}),(0,j.jsx)("span",{className:"kanban-priority-dot",style:{background:jt[S].color}}),jt[S].label]},S))]})]})]}),(0,j.jsx)("div",{className:"kanban-board-scroll",children:u.columns.map(S=>{let P=u.cards.filter(A=>A.columnId===S.id&&(!k||A.priority===k));return(0,j.jsx)(Cp,{column:S,cards:P,labels:u.labels,onAddCard:A=>C({card:null,columnId:A.id}),onOpenCard:A=>C({card:A,columnId:A.columnId})},S.id)})})]}),(0,j.jsx)(Ki,{children:m?(0,j.jsx)("div",{className:"kanban-drag-preview",children:(0,j.jsx)(js,{card:m,labels:u.labels})}):null})]}),(0,j.jsx)(gp,{open:x!==null,card:x?.card??null,labels:u.labels,comments:x?.card?u.cards.find(S=>S.id===x.card.id)?.comments??[]:[],activities:x?.card?u.activities.filter(S=>S.cardId===x.card.id):[],onOpenChange:S=>{S||C(null)},onSave:J,onAddComment:(S,P)=>re("addComment",{id:S,content:P}),onDelete:S=>re("deleteCard",{id:S.id}),onChatWithAgent:X}),(0,j.jsx)(Ip,{open:L,columns:u.columns,onOpenChange:I,onReorder:(S,P)=>{let A=u.columns.findIndex(N=>N.id===P);A>=0&&re("moveColumn",{id:S,toIndex:A})},onRename:(S,P)=>re("renameColumn",{id:S,title:P}),onDelete:S=>re("deleteColumn",{id:S}),onAdd:S=>re("addColumn",{title:S})}),(0,j.jsx)(vp,{open:v,labels:u.labels,onOpenChange:b,onAdd:(S,P)=>re("addLabel",{name:S,color:P}),onUpdate:(S,P,A)=>re("updateLabel",{name:S,newName:P,color:A}),onDelete:S=>re("deleteLabel",{name:S})})]}):(0,j.jsx)("div",{className:"kanban-root kanban-loading",children:d?(0,j.jsx)("p",{className:"kanban-error",children:d}):(0,j.jsx)("p",{className:"kanban-muted-text",children:i("loading")})})}var Wn=require("react");function Dp({sessionId:e,inputActions:t}){let a=(0,Wn.useSyncExternalStore)(wp,yp);return(0,Wn.useEffect)(()=>{if(!e||!t?.setDraft)return;let o=Sp(e);o!=null&&t.setDraft(o)},[a,e,t]),null}var Mp={name:"dsh-kanban",inject:["slots","locale","uiWorkspace"],apply(e){Xd(e);let t=e.get("slots");if(t===void 0)return;let a=e.get("uiWorkspace");t.inject("conversation.view",()=>t.register({name:"conversation.view",id:"kanban",order:20,label:()=>bo("boardTab")},o=>(0,Zs.createElement)(kp,{...o,uiWorkspace:a}))),t.inject("conversation.input.dock",()=>t.register({name:"conversation.input.dock",id:"kanban-chat-draft",order:100},o=>(0,Zs.createElement)(Dp,o)))}};var Ap="data-dsh-kanban-style";if(typeof document<"u"&&!document.querySelector("style["+Ap+"]")){let e=document.createElement("style");e.setAttribute(Ap,""),e.textContent=si,document.head.appendChild(e)}var yC=Mp;
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
   * @license lucide-react v1.46.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

    return (module.exports && module.exports.default) || module.exports
  },
})