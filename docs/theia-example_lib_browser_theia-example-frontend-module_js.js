"use strict";
(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["theia-example_lib_browser_theia-example-frontend-module_js"],{

/***/ "../theia-example/lib/browser/theia-example-contribution.js":
/*!******************************************************************!*\
  !*** ../theia-example/lib/browser/theia-example-contribution.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TheiaExampleMenuContribution = exports.TheiaExampleCommandContribution = exports.TheiaExampleCommand = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.TheiaExampleCommand = {
    id: 'TheiaExample.command',
    label: 'Say Hello'
};
let TheiaExampleCommandContribution = class TheiaExampleCommandContribution {
    registerCommands(registry) {
        registry.registerCommand(exports.TheiaExampleCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
};
exports.TheiaExampleCommandContribution = TheiaExampleCommandContribution;
__decorate([
    (0, inversify_1.inject)(common_1.MessageService),
    __metadata("design:type", common_1.MessageService)
], TheiaExampleCommandContribution.prototype, "messageService", void 0);
exports.TheiaExampleCommandContribution = TheiaExampleCommandContribution = __decorate([
    (0, inversify_1.injectable)()
], TheiaExampleCommandContribution);
let TheiaExampleMenuContribution = class TheiaExampleMenuContribution {
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.TheiaExampleCommand.id,
            label: exports.TheiaExampleCommand.label
        });
    }
};
exports.TheiaExampleMenuContribution = TheiaExampleMenuContribution;
exports.TheiaExampleMenuContribution = TheiaExampleMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], TheiaExampleMenuContribution);


/***/ }),

/***/ "../theia-example/lib/browser/theia-example-frontend-module.js":
/*!*********************************************************************!*\
  !*** ../theia-example/lib/browser/theia-example-frontend-module.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Generated using theia-extension-generator
 */
const theia_example_contribution_1 = __webpack_require__(/*! ./theia-example-contribution */ "../theia-example/lib/browser/theia-example-contribution.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
exports["default"] = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(theia_example_contribution_1.TheiaExampleCommandContribution);
    bind(common_1.MenuContribution).to(theia_example_contribution_1.TheiaExampleMenuContribution);
});


/***/ })

}]);
//# sourceMappingURL=theia-example_lib_browser_theia-example-frontend-module_js.js.map