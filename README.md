![Editor](https://smeskey-github-prod.s3.amazonaws.com/projects/druid/github/druid_new_design_bw_v4.png)

![Page](https://smeskey-github-prod.s3.amazonaws.com/projects/druid/github/marvel-character-browser-v1.png)

Druid is a serverless publishing platform optimized for the modern web using cutting edge technology. Highly inspired by Drupal panels. Druid provides a suite of extensible authoring capabilities. 

* Markdown and HTML content
* Query and refine API datasets
* Upload media assets
* Extend with custom external JavaScript
* Form building and data storage 
* Conditional content display
* Customizable CSS styling
* Page Nesting and Embedding
* Material design styles
* Extensible via plugin architecture
* Authentication and authorization
* Customizable data storage and access restrictions
* Ruesable change detection aware variable definitions

### Micro-Frontend Orchestration

Druid will also be used as an orchestration platform for micro frontends compiled to JavaScript or jypter notebooks. This is an active initative high up on the priority list.

The first part of this is upgrading to Angular v13 which is currently in progress and nearly complete. Once that is done some of the newer webpack features can be utilized to provide module federation capabilities through a v13 compatible module federation webpack integration library.

### Live Demo

In Druid layout, content, and data exist as one forming a multi-dimensional, symbiotic relationship. Content publishers are empowered to layout and design content through a library of open source, extensible plugins. The Druid core provides plugins for arranging, uploading, and styling a diverse range web experiences. The web experiences which the platform supports is dynamic in nature and can be extended by creating custom plugins outside of the platform source code. The foundation of the publishing experience is panel pages. Panel pages are the fundamental entity from which all content is birthed. The delivery of that content rests in the hands of interconnected cloud resources.

The live demo app can be found at the link below.

https://dpxmq1mxvsyda.cloudfront.net/pages/create-panel-page

Saved pages are currently saved to index db.

Demos and recipes for using specific features will follow.

NOTE: The live demo is an early stage alpha at best.

HINT: Live examples below can provide insight into capabilities of platform and implementation.

### Intentions

The well has run dry with sophisticated, powerful modern tools for authoring content across multiple marketing and business outlets. Druid will fill that void providing the new swift army knife of content development.

* Personal blog
* Small personal websites
* One-off landing pages
* Ecommerce website
* Professional business website(s)
* Web applications
* Development prototyping
* Email generation
* PDF generation

### Motivations

This project is inspired by older CMS platforms. Specifically given extensive work history using Drupal and Magento many of the concepts accross each of those platforms have been adapted for the serverless modern web. 

* Drupal | https://www.drupal.org/
* Magento | https://magento.com/
* Modx | https://modx.com/

### Initiatives

* Core/Druid | The core platform providing all the modules for the build and render of panel pages.
* Sparkle | Collection of modules to deliver decentralized, graph integration motivated by collection of various metric categories.
* Druid as a module federation orchestration platform like what kubernetes is to docker but in the micro-frontend world.

### Notable Mentions

This project would not be possible without the previous work of many. Druid uses many other open source projects to deliver a sleek, sophisticated publishing experience. The most noteworthy of those is Angular – https://angular.io/. The foundation for the entire suite is built on top of this modern web building framework developed by Google with global support ecosystem.

One of the primary reasons Angular has been choosen for this project is due to the rich ecosystem of modules developed by community. Many of those projects have been used to optimize development quality, performance, efficiency, and maintainance.

* Angular Material | https://material.angular.io/
* NgRx | https://ngrx.io/
* Formly | https://formly.dev/
* Ngx Markdown | https://www.npmjs.com/package/ngx-markdown
* Angular Split | https://angular-split.github.io/
* ng2 Query Builder | https://zebzhao.github.io/Angular-QueryBuilder/
* Flex Layout | https://github.com/angular/flex-layout
* Ngx Json Viewer | https://www.npmjs.com/package/ngx-json-viewer

In addition to Angular Druid also uses many nodejs projects.

* jsonpath-plus | https://www.npmjs.com/package/jsonpath-plus
* json-rules-engine | https://www.npmjs.com/package/json-rules-engine
* oidc-client | https://www.npmjs.com/package/oidc-client
* numeral | http://numeraljs.com/
* qs | https://www.npmjs.com/package/qs
* css-select | https://www.npmjs.com/package/css-select
* css-json | https://www.npmjs.com/package/cssjson
* deepmerge-json | https://www.npmjs.com/package/deepmerge-json
* js-cookie | https://www.npmjs.com/package/js-cookie
* idb-keyval | https://github.com/jakearchibald/idb-keyval

### Live Examples

Marvel Character Browser

View and search characters in the Marvel universe.

https://dpxmq1mxvsyda.cloudfront.net/dev-test-virtual-list-flex-v1/character/1011334
https://dpxmq1mxvsyda.cloudfront.net/dev-test-virtual-list-flex-v1/character/1011334/manage

![Page](https://smeskey-github-prod.s3.amazonaws.com/projects/druid/github/marvel-character-browser-v1.png)

#

Formly Kitchen Sink

Build forms and save submissions.

NOTE: The initial intention was to use formly for building forms. After much work and frustration this was abandoned. One of the primary reasons of abandoning formly was the way the components were built required a lot of work arounds and hacks to integrate well with panels, and converting panel forms to trimmed down realistic domain objects. The decision to finally abandon formly was made when it seemed nearly impossible to realize repeating nested forms. The successor of the for all intents and purposes dead formly module is the forms module. The intention of the forms module is support all the same features of formly but using an architecture that better aligns with panels drastically simplifying form components, repeating sections, and nested forms even within repeating sections.

https://dpxmq1mxvsyda.cloudfront.net/formly/kitchensink/v1
https://dpxmq1mxvsyda.cloudfront.net/formly/kitchensink/v1/manage

![Page](https://smeskey-github-prod.s3.amazonaws.com/projects/druid/github/demo_kitchen_sink_formly_v1.png)

![idb](https://smeskey-github-prod.s3.amazonaws.com/projects/druid/github/formly_kitchen_sink_v1_idb.png)

#

### Catalog

Catalog of Druid libraries.

https://github.com/ng-druid/platform/wiki/Catalog
