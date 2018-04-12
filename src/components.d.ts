/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';


declare global {

  namespace StencilComponents {
    interface CardLink {
      'hasIcon': boolean;
      'headline': string;
      'url': string;
    }
  }

  interface HTMLCardLinkElement extends StencilComponents.CardLink, HTMLStencilElement {}

  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };
  interface HTMLElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  interface ElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'card-link': JSXElements.CardLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface CardLinkAttributes extends HTMLAttributes {
      'hasIcon'?: boolean;
      'headline'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodeBlock {
      'language': string;
    }
  }

  interface HTMLCodeBlockElement extends StencilComponents.CodeBlock, HTMLStencilElement {}

  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-block': JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      'language'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodePreview {
      'markup': string;
    }
  }

  interface HTMLCodePreviewElement extends StencilComponents.CodePreview, HTMLStencilElement {}

  var HTMLCodePreviewElement: {
    prototype: HTMLCodePreviewElement;
    new (): HTMLCodePreviewElement;
  };
  interface HTMLElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  interface ElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-preview': JSXElements.CodePreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface CodePreviewAttributes extends HTMLAttributes {
      'markup'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CtrlDropdown {
      'autoClose': boolean;
      'autoCloseDelay': number;
      'items': any[];
      'onSelect': Function;
      'renderer': Function;
      'setInitial': Function;
    }
  }

  interface HTMLCtrlDropdownElement extends StencilComponents.CtrlDropdown, HTMLStencilElement {}

  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  interface ElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ctrl-dropdown': JSXElements.CtrlDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CtrlDropdownAttributes extends HTMLAttributes {
      'autoClose'?: boolean;
      'autoCloseDelay'?: number;
      'items'?: any[];
      'onSelect'?: Function;
      'renderer'?: Function;
      'setInitial'?: Function;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocLoader {
      'path': string;
    }
  }

  interface HTMLDocLoaderElement extends StencilComponents.DocLoader, HTMLStencilElement {}

  var HTMLDocLoaderElement: {
    prototype: HTMLDocLoaderElement;
    new (): HTMLDocLoaderElement;
  };
  interface HTMLElementTagNameMap {
    'doc-loader': HTMLDocLoaderElement;
  }
  interface ElementTagNameMap {
    'doc-loader': HTMLDocLoaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'doc-loader': JSXElements.DocLoaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DocLoaderAttributes extends HTMLAttributes {
      'onDocLoaded'?: (event: CustomEvent) => void;
      'path'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface IonicDocs {

    }
  }

  interface HTMLIonicDocsElement extends StencilComponents.IonicDocs, HTMLStencilElement {}

  var HTMLIonicDocsElement: {
    prototype: HTMLIonicDocsElement;
    new (): HTMLIonicDocsElement;
  };
  interface HTMLElementTagNameMap {
    'ionic-docs': HTMLIonicDocsElement;
  }
  interface ElementTagNameMap {
    'ionic-docs': HTMLIonicDocsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ionic-docs': JSXElements.IonicDocsAttributes;
    }
  }
  namespace JSXElements {
    export interface IonicDocsAttributes extends HTMLAttributes {
      'onSectionChanged'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NewTabIcon {

    }
  }

  interface HTMLNewTabIconElement extends StencilComponents.NewTabIcon, HTMLStencilElement {}

  var HTMLNewTabIconElement: {
    prototype: HTMLNewTabIconElement;
    new (): HTMLNewTabIconElement;
  };
  interface HTMLElementTagNameMap {
    'new-tab-icon': HTMLNewTabIconElement;
  }
  interface ElementTagNameMap {
    'new-tab-icon': HTMLNewTabIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'new-tab-icon': JSXElements.NewTabIconAttributes;
    }
  }
  namespace JSXElements {
    export interface NewTabIconAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SiteContent {
      'isMenuOpen': boolean;
      'onOverlayClick': () => void;
    }
  }

  interface HTMLSiteContentElement extends StencilComponents.SiteContent, HTMLStencilElement {}

  var HTMLSiteContentElement: {
    prototype: HTMLSiteContentElement;
    new (): HTMLSiteContentElement;
  };
  interface HTMLElementTagNameMap {
    'site-content': HTMLSiteContentElement;
  }
  interface ElementTagNameMap {
    'site-content': HTMLSiteContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'site-content': JSXElements.SiteContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteContentAttributes extends HTMLAttributes {
      'isMenuOpen'?: boolean;
      'onOverlayClick'?: () => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface EcosystemDropdown {

    }
  }

  interface HTMLEcosystemDropdownElement extends StencilComponents.EcosystemDropdown, HTMLStencilElement {}

  var HTMLEcosystemDropdownElement: {
    prototype: HTMLEcosystemDropdownElement;
    new (): HTMLEcosystemDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'ecosystem-dropdown': HTMLEcosystemDropdownElement;
  }
  interface ElementTagNameMap {
    'ecosystem-dropdown': HTMLEcosystemDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ecosystem-dropdown': JSXElements.EcosystemDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface EcosystemDropdownAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface FrameworkDropdown {

    }
  }

  interface HTMLFrameworkDropdownElement extends StencilComponents.FrameworkDropdown, HTMLStencilElement {}

  var HTMLFrameworkDropdownElement: {
    prototype: HTMLFrameworkDropdownElement;
    new (): HTMLFrameworkDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'framework-dropdown': HTMLFrameworkDropdownElement;
  }
  interface ElementTagNameMap {
    'framework-dropdown': HTMLFrameworkDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'framework-dropdown': JSXElements.FrameworkDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface FrameworkDropdownAttributes extends HTMLAttributes {
      'onDocs-section-changed'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SiteHeader {
      'currentSection': string;
      'isMenuOpen': boolean;
      'onToggleClick': () => void;
    }
  }

  interface HTMLSiteHeaderElement extends StencilComponents.SiteHeader, HTMLStencilElement {}

  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'site-header': HTMLSiteHeaderElement;
  }
  interface ElementTagNameMap {
    'site-header': HTMLSiteHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'site-header': JSXElements.SiteHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteHeaderAttributes extends HTMLAttributes {
      'currentSection'?: string;
      'isMenuOpen'?: boolean;
      'onToggleClick'?: () => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SiteMenu {
      'isOpen': boolean;
      'onNavigate': () => void;
    }
  }

  interface HTMLSiteMenuElement extends StencilComponents.SiteMenu, HTMLStencilElement {}

  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    'site-menu': HTMLSiteMenuElement;
  }
  interface ElementTagNameMap {
    'site-menu': HTMLSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'site-menu': JSXElements.SiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteMenuAttributes extends HTMLAttributes {
      'isOpen'?: boolean;
      'onNavigate'?: () => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SitePreviewApp {

    }
  }

  interface HTMLSitePreviewAppElement extends StencilComponents.SitePreviewApp, HTMLStencilElement {}

  var HTMLSitePreviewAppElement: {
    prototype: HTMLSitePreviewAppElement;
    new (): HTMLSitePreviewAppElement;
  };
  interface HTMLElementTagNameMap {
    'site-preview-app': HTMLSitePreviewAppElement;
  }
  interface ElementTagNameMap {
    'site-preview-app': HTMLSitePreviewAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'site-preview-app': JSXElements.SitePreviewAppAttributes;
    }
  }
  namespace JSXElements {
    export interface SitePreviewAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SiteSearch {

    }
  }

  interface HTMLSiteSearchElement extends StencilComponents.SiteSearch, HTMLStencilElement {}

  var HTMLSiteSearchElement: {
    prototype: HTMLSiteSearchElement;
    new (): HTMLSiteSearchElement;
  };
  interface HTMLElementTagNameMap {
    'site-search': HTMLSiteSearchElement;
  }
  interface ElementTagNameMap {
    'site-search': HTMLSiteSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'site-search': JSXElements.SiteSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteSearchAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TabGroup {
      'tabs': string;
    }
  }

  interface HTMLTabGroupElement extends StencilComponents.TabGroup, HTMLStencilElement {}

  var HTMLTabGroupElement: {
    prototype: HTMLTabGroupElement;
    new (): HTMLTabGroupElement;
  };
  interface HTMLElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  interface ElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tab-group': JSXElements.TabGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TabGroupAttributes extends HTMLAttributes {
      'tabs'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TableOfContents {

    }
  }

  interface HTMLTableOfContentsElement extends StencilComponents.TableOfContents, HTMLStencilElement {}

  var HTMLTableOfContentsElement: {
    prototype: HTMLTableOfContentsElement;
    new (): HTMLTableOfContentsElement;
  };
  interface HTMLElementTagNameMap {
    'table-of-contents': HTMLTableOfContentsElement;
  }
  interface ElementTagNameMap {
    'table-of-contents': HTMLTableOfContentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'table-of-contents': JSXElements.TableOfContentsAttributes;
    }
  }
  namespace JSXElements {
    export interface TableOfContentsAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
