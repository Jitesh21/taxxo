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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var HomeComponent = (function () {
    function HomeComponent(fb) {
        this.fb = fb;
        this.Title = 'Taxxo || Your Solutions For Common ERP';
        this.signupform = this.fb.group({
            name: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.required],
            phone: ["", forms_1.Validators.required]
        });
    }
    HomeComponent.prototype.redirect_to_signup = function (event) {
        var name = this.signupform.value.name;
        var email = this.signupform.value.email;
        var phone = this.signupform.value.phone;
        window.location.href = '/signup?name=' + name + '&email=' + email + '&phone=' + phone;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            templateUrl: 'app/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map