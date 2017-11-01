"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PHRASES = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир", language: "Russian" },
    { value: "Привіт Світ", language: "Ukrainian" },
    { value: "Hola Mundo", language: "Spanish" },
    { value: "Bonjour le monde", language: "French" },
    { value: "Hallo Welt", language: "German" },
    { value: "Ciao mondo", language: "Italian" },
    { value: "Witaj świecie", language: "Polish" },
    { value: "Hej världen", language: "Swdish" },
    { value: "Pozdravljen, svet", language: "Slovenian" },
    { value: "Прывітанне Сусвет", language: "Belarusian" }
];
var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
        this.phraseList = PHRASES;
    }
    HelloWorldComponent.prototype.onSelect = function (selected) {
        this.selectedPhraseLanguage = selected.language;
    };
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: "hello-list",
            templateUrl: "./hello-world-list.component.html",
            styleUrls: ["./hello-world-list.component.css"]
        })
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=hello-world-list.js.map