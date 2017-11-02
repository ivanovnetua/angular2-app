"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.name = "default name";
        this.counterValue = 0;
        this.counterStep = 1;
    }
    CounterComponent.prototype.increment = function () {
        this.counterValue += this.counterStep;
    };
    // Срабатывает, когда Angular устанавливает значение для input свойства. 
    // Метод может получать объект типа SimpleChange с информацией о новом и старом значениях.
    // Срабатывает до ngOnInit и каждый раз, когда меняется значение input свойства.
    CounterComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
    };
    // Инициализация angular компонента или директивы. Вызывается один раз после того как компонент отобразится.
    CounterComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    // Срабатывает при каждой проверке изменений. Срабатывает часто.
    CounterComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    // Срабатывает после того как Angular внедряет внешнее содержимое в представление компонента.
    // Используется только при работе с компонентами.
    CounterComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    // Срабатывает после каждой проверки внедренного контента в представление компонента
    // срабатывает после ngAfterContentInit и после каждого ngDoCheck
    // Используется только при работе с компонентами.
    CounterComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    // Срабатывает после инициализации представления компонента и дочерних компонентов.
    // Запускается один раз после ngAfterContentChecked
    // Используется только при работе с компонентами.
    CounterComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    // Срабатывает после того как Angular проверит представление компонента и все дочерние компоненты
    // Запускается после ngAfterViewInit и после каждого ngAfterContentChecked
    // Используется только при работе с компонентами.
    CounterComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    // Срабатывает сразу после уничтожения компонента или директивы
    CounterComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        core_1.Input("value"),
        __metadata("design:type", Number)
    ], CounterComponent.prototype, "counterValue", void 0);
    __decorate([
        core_1.Input("step"),
        __metadata("design:type", Number)
    ], CounterComponent.prototype, "counterStep", void 0);
    CounterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "counter",
            templateUrl: "counter.component.html",
            inputs: ["name"]
        })
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map