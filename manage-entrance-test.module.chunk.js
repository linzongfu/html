webpackJsonp(["manage-entrance-test.module"],{

/***/ "./src/app/routes/manage-entrance-test/character-test/animal-test/animal-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        {{ 'animal-test' | translate }}\r\n        <small>{{ 'animal-test-small' | translate }}</small>\r\n    </h1>\r\n</div>\r\n<div nz-row style=\"margin-bottom:5px;\">\r\n    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" style=\"float:right;\" (click)='createOrEdit(\"create\")'>\r\n        <i class=\"anticon anticon-plus\"></i>\r\n        <span>{{ 'add-question' | translate }}</span>\r\n    </button>\r\n</div>\r\n<div nz-row>\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <nz-table #nzTable [nzAjaxData]=\"tableData\" [nzShowSizeChanger]=\"true\" [nzLoading]=\"tableLoading\" [nzTotal]=\"tableTotal\"\r\n                [(nzPageIndex)]=\"tablePageIndex\" (nzPageIndexChange)=\"getTableData()\" [(nzPageSize)]=\"tablePageSize\" (nzPageSizeChange)=\"getTableData()\"\r\n                [nzShowTotal]=\"true\">\r\n                <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th>\r\n                            <span>{{ 'actions' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'question' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'index' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'score-5' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'score-4' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'score-3' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'score-2' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th>\r\n                            <span>{{ 'score-1' | translate }}</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let obj of nzTable.data\">\r\n                        <td nz-td>\r\n                            <a (click)=\"createOrEdit('edit',obj)\">\r\n                                <i class=\"anticon anticon-edit\"></i>\r\n                            </a>\r\n                            <span nz-table-divider></span>\r\n                            <a (click)=\"delete(obj.id)\">\r\n                                <i class=\"anticon anticon-delete\"></i>\r\n                            </a>\r\n                        </td>\r\n                        <td nz-td>{{obj.title}}</td>\r\n                        <td nz-td>{{obj.num}}</td>\r\n                        <td nz-td>{{obj.info.A}}</td>\r\n                        <td nz-td>{{obj.info.B}}</td>\r\n                        <td nz-td>{{obj.info.C}}</td>\r\n                        <td nz-td>{{obj.info.D}}</td>\r\n                        <td nz-td>{{obj.info.E}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/animal-test/animal-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_or_edit_animal_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/create-or-edit-animal-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delon_acl__ = __webpack_require__("./node_modules/@delon/acl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnimalTestComponent = /** @class */ (function () {
    function AnimalTestComponent(msg, modal, aclService, router, http, basicConfigurationService, characterTestService) {
        var _this = this;
        this.msg = msg;
        this.modal = modal;
        this.aclService = aclService;
        this.router = router;
        this.http = http;
        this.basicConfigurationService = basicConfigurationService;
        this.characterTestService = characterTestService;
        this.tablePageIndex = 1;
        this.tablePageSize = 5;
        this.tableTotal = 1;
        this.tableData = [];
        this.tableLoading = true;
        this.getTableData = function () {
            _this.tableLoading = true;
            /* this.characterTestService.getAnimalTestsForMaintenance(this.tablePageIndex, this.tablePageSize).subscribe((data: any) => {
                this.tableLoading = false;
                this.tableTotal = data.total;
                this.tableData = data.list;
                for (let i = 0; i < this.tableData.length; i++) {
                    this.tableData[i].info = JSON.parse(this.tableData[i].info);
                }
            }); */
        };
        this.randomUserUrl = 'https://api.randomuser.me/';
    }
    AnimalTestComponent.prototype.ngOnInit = function () {
        this.getTableData();
        /* if (this.aclService.canAbility(1)) {
        } else {
            this.router.navigate(['/welcome']);
        } */
    };
    // 删除
    AnimalTestComponent.prototype.delete = function (id) {
        var _this = this;
        // 配置默认参数
        var options = {
            onOk: function () {
                _this.msg.success('删除id为' + id + '的记录!');
            },
            maskClosable: false,
        };
        // 获取当前语言环境下其他配置参数
        var result = this.basicConfigurationService.getDeleteOptions();
        options['title'] = result['title'];
        options['content'] = result['content'];
        options['okText'] = result['okText'];
        options['cancelText'] = result['cancelText'];
        this.modal.confirm(options);
    };
    // 新增与编辑
    AnimalTestComponent.prototype.createOrEdit = function (operationType, args) {
        if (operationType === 'edit') {
            this.modal.open({
                wrapClassName: 'modal-md',
                content: __WEBPACK_IMPORTED_MODULE_3__create_or_edit_animal_test_component__["a" /* CreateOrEditAnimalTestComponent */],
                footer: false,
                maskClosable: false,
                componentParams: {
                    obj: args
                }
            });
        }
        else if (operationType === 'create') {
            if (this.tableTotal < 30) {
                this.modal.open({
                    wrapClassName: 'modal-md',
                    content: __WEBPACK_IMPORTED_MODULE_3__create_or_edit_animal_test_component__["a" /* CreateOrEditAnimalTestComponent */],
                    footer: false,
                    maskClosable: false,
                    componentParams: {
                        obj: args
                    }
                });
            }
            else {
                var language = this.basicConfigurationService.getCurrentLanguage();
                if (language === 'zh-CN') {
                    this.msg.warning('题库上限至多为30道,请先删除不需要的题目!');
                }
                else if (language === 'en') {
                    this.msg.warning('The upper limit of the question bank is up to 30. Please delete the subject you do not need!');
                }
            }
        }
    };
    AnimalTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'animal-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/animal-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_4__delon_acl__["b" /* ACLService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__delon_theme__["l" /* _HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__core_common_common_service__["a" /* BasicConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_6__core_common_common_service__["b" /* CharacterTestService */]])
    ], AnimalTestComponent);
    return AnimalTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/animal-test/create-or-edit-animal-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"modal-title\">\r\n        <span *ngIf=\"obj\">{{ 'edit' | translate }}</span>\r\n        <span *ngIf=\"!obj\">{{ 'create' | translate }}</span>\r\n    </div>\r\n</div>\r\n<nz-spin [nzTip]=\"'Loading...'\" [nzSpinning]=\"loading\">\r\n    <div nz-row [nzGutter]=\"16\">\r\n        <div nz-col [nzMd]=\"24\">\r\n            <form nz-form [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"question\" nz-form-item-required> {{ 'question' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'question'\" formControlName=\"question\" name=\"question\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"num\" nz-form-item-required> {{ 'index' | translate }}</label>\r\n                        <nz-tooltip *ngIf=\"language=='zh-CN'\" [nzTitle]=\"'\r\n                        5+10+14+18+24+30 = 老虎分数\r\n                        3+6+13+20+22+29 = 孔雀分数\r\n                        2+8+15+17+25+28 = 考拉分数\r\n                        1+7+11+16+21+26 = 猫头鹰分数\r\n                        4+9+12+19+23+27 = 变色龙分数\r\n                        '\">\r\n                            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                        </nz-tooltip>\r\n                        <nz-tooltip *ngIf=\"language=='en'\" [nzTitle]=\"'\r\n                        5+10+14+18+24+30 = tiger\r\n                        3+6+13+20+22+29 = peacock\r\n                        2+8+15+17+25+28 = koala\r\n                        1+7+11+16+21+26 = owl\r\n                        4+9+12+19+23+27 = chameleon\r\n                        '\">\r\n                            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n                        </nz-tooltip>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-select style=\"width: 100%;\" formControlName=\"num\" nzPlaceHolder=\"\">\r\n                            <nz-option *ngFor=\"let option of options\" [nzLabel]=\"option\" [nzValue]=\"option\">\r\n                            </nz-option>\r\n                        </nz-select>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"score-5\" nz-form-item-required> {{ 'score-5' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'score-5'\" formControlName=\"score_5\" name=\"score-5\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"score-4\" nz-form-item-required> {{ 'score-4' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'score-4'\" formControlName=\"score_4\" name=\"score-4\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"score-3\" nz-form-item-required> {{ 'score-3' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'score-3'\" formControlName=\"score_3\" name=\"score-3\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"score-2\" nz-form-item-required> {{ 'score-2' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'score-2'\" formControlName=\"score_2\" name=\"score-2\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"score-1\" nz-form-item-required> {{ 'score-1' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input [nzId]=\"'score-1'\" formControlName=\"score_1\" name=\"score-1\" required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"cancel()\">\r\n                        {{ 'cancel' | translate }}\r\n                    </button>\r\n                    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [disabled]=\"form.invalid || !form.dirty\">\r\n                        {{ 'ok' | translate }}\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nz-spin>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/animal-test/create-or-edit-animal-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrEditAnimalTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateOrEditAnimalTestComponent = /** @class */ (function () {
    function CreateOrEditAnimalTestComponent(subject, fb, characterTestService, basicConfigurationService) {
        this.subject = subject;
        this.fb = fb;
        this.characterTestService = characterTestService;
        this.basicConfigurationService = basicConfigurationService;
        this.options = [];
    }
    CreateOrEditAnimalTestComponent.prototype.initValidator = function () {
        var _this = this;
        this.form = this.fb.group({
            question: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            num: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            score_5: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            score_4: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            score_3: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            score_2: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            score_1: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
        });
        // 产生1-30的序号
        for (var index = 1; index <= 30; index++) {
            this.options.push(index);
        }
        if (this.obj) {
            // 从数组中找到num下标,方便表单赋值
            for (var index = 0; index < this.options.length; index++) {
                if (this.options[index] === this.obj.num) {
                    this.subIndex = index;
                    break;
                }
            }
        }
        else {
            // 编辑状态下,不允许num重复
            this.characterTestService.getAnimalTests().subscribe(function (data) {
                var Data = data.list;
                for (var key in Data) {
                    for (var i = 0; i < _this.options.length; i++) {
                        if (_this.options[i] === Data[key].num) {
                            _this.options.splice(i, 1);
                            break;
                        }
                    }
                }
            });
        }
        this.form.setValue({
            question: this.obj ? this.obj.title : '',
            num: this.obj ? this.options[this.subIndex] : '',
            score_5: this.obj ? this.obj.info.A : '',
            score_4: this.obj ? this.obj.info.B : '',
            score_3: this.obj ? this.obj.info.C : '',
            score_2: this.obj ? this.obj.info.D : '',
            score_1: this.obj ? this.obj.info.E : '',
        });
    };
    CreateOrEditAnimalTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
        this.language = this.basicConfigurationService.getCurrentLanguage();
        this.initValidator();
    };
    CreateOrEditAnimalTestComponent.prototype.cancel = function () {
        this.subject.destroy();
    };
    CreateOrEditAnimalTestComponent.prototype.save = function () {
        // execute save
        // this.CharacterTestService.saveAnimalTest(this.obj);
        this.subject.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateOrEditAnimalTestComponent.prototype, "obj", void 0);
    CreateOrEditAnimalTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-or-edit-animal-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/create-or-edit-animal-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalSubject"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__core_common_common_service__["b" /* CharacterTestService */],
            __WEBPACK_IMPORTED_MODULE_2__core_common_common_service__["a" /* BasicConfigurationService */]])
    ], CreateOrEditAnimalTestComponent);
    return CreateOrEditAnimalTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/color-test/color-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        {{ 'color-test' | translate }}\r\n        <small>{{ 'color-test-small' | translate }}</small>\r\n    </h1>\r\n</div>\r\n<div nz-row style=\"margin-bottom:5px;\">\r\n    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" style=\"float:right;\" (click)=\"createOrEdit()\">\r\n        <i class=\"anticon anticon-plus\"></i>\r\n        <span>{{ 'add-question' | translate }}</span>\r\n    </button>\r\n</div>\r\n<div nz-row>\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <nz-table #nzTable\r\n                [nzAjaxData]=\"tableData\"\r\n                [nzShowSizeChanger]=\"true\"\r\n                [nzLoading]=\"tableLoading\"\r\n                [nzTotal]=\"tableTotal\"\r\n                [(nzPageIndex)]=\"tablePageIndex\"\r\n                (nzPageIndexChange)=\"getTableData()\"\r\n                [(nzPageSize)]=\"tablePageSize\"\r\n                (nzPageSizeChange)=\"getTableData()\"\r\n                [nzShowTotal]=\"true\">\r\n                <thead nz-thead>\r\n                <tr>\r\n                    <th nz-th style=\"width:10%;\"><span>{{ 'actions' | translate }}</span></th>\r\n                    <th nz-th style=\"width:5%;\"><span>{{ 'index' | translate }}</span></th>\r\n                    <th nz-th style=\"width:17%;\"><span>{{ 'question' | translate }}</span></th>\r\n                    <th nz-th style=\"width:17%;\"><span>{{ 'select-A' | translate }}</span></th>\r\n                    <th nz-th style=\"width:17%;\"><span>{{ 'select-B' | translate }}</span></th>\r\n                    <th nz-th style=\"width:17%;\"><span>{{ 'select-C' | translate }}</span></th>\r\n                    <th nz-th style=\"width:17%;\"><span>{{ 'select-D' | translate }}</span></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                <tr nz-tbody-tr *ngFor=\"let obj of nzTable.data\">\r\n                    <td nz-td>\r\n                        <a (click)=\"createOrEdit(obj)\">\r\n                            <i class=\"anticon anticon-edit\"></i>\r\n                        </a>\r\n                        <span nz-table-divider></span>\r\n                        <a (click)=\"delete(obj.id)\">\r\n                            <i class=\"anticon anticon-delete\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td nz-td>{{obj.index}}</td>\r\n                    <td nz-td>{{obj.question}}</td>\r\n                    <td nz-td>{{obj.A}}</td>\r\n                    <td nz-td>{{obj.B}}</td>\r\n                    <td nz-td>{{obj.C}}</td>\r\n                    <td nz-td>{{obj.D}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/color-test/color-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_or_edit_color_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/create-or-edit-color-test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColorTestComponent = /** @class */ (function () {
    function ColorTestComponent(msg, modal, http, basicConfigurationService, characterTestService) {
        var _this = this;
        this.msg = msg;
        this.modal = modal;
        this.http = http;
        this.basicConfigurationService = basicConfigurationService;
        this.characterTestService = characterTestService;
        this.tablePageIndex = 1;
        this.tablePageSize = 5;
        this.tableTotal = 1;
        this.tableData = [];
        this.tableLoading = true;
        this.getTableData = function () {
            _this.tableLoading = true;
            /* this.characterTestService.getColorTests().subscribe((data: any) => {
                this.tableLoading = false;
                this.tableTotal = data.total;
                this.tableData = data.results;
            }); */
        };
        this.randomUserUrl = 'https://api.randomuser.me/';
    }
    ColorTestComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    // 删除
    ColorTestComponent.prototype.delete = function (id) {
        var _this = this;
        // 配置默认参数
        var options = {
            onOk: function () {
                _this.msg.success('删除id为' + id + '的记录!');
            },
            maskClosable: false,
        };
        // 获取当前语言环境下其他配置参数
        var result = this.basicConfigurationService.getDeleteOptions();
        options['title'] = result['title'];
        options['content'] = result['content'];
        options['okText'] = result['okText'];
        options['cancelText'] = result['cancelText'];
        this.modal.confirm(options);
    };
    // 新增与编辑
    ColorTestComponent.prototype.createOrEdit = function (args) {
        this.modal.open({
            wrapClassName: 'modal-md',
            content: __WEBPACK_IMPORTED_MODULE_4__create_or_edit_color_test_component__["a" /* CreateOrEditColorTestComponent */],
            footer: false,
            maskClosable: false,
            componentParams: {
                obj: args
            }
        });
    };
    ColorTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'color-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/color-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_1__delon_theme__["l" /* _HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__["a" /* BasicConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__["b" /* CharacterTestService */]])
    ], ColorTestComponent);
    return ColorTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/color-test/create-or-edit-color-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"modal-title\">\r\n        <span *ngIf=\"obj.id\">{{ 'edit' | translate }}:{{title}}</span>\r\n        <span *ngIf=\"!obj.id\">{{ 'create' | translate }}</span>\r\n    </div>\r\n</div>\r\n<nz-spin [nzTip]=\"'Loading...'\" [nzSpinning]=\"loading\">\r\n    <div nz-row [nzGutter]=\"16\">\r\n        <div nz-col [nzMd]=\"24\">\r\n            <form nz-form #Form=\"ngForm\" (ngSubmit)=\"save()\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"question\" nz-form-item-required> {{ 'question' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                        [nzId]=\"'question'\"\r\n                        [(ngModel)]=\"obj.question\" \r\n                        name=\"question\"\r\n                        required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"index\" nz-form-item-required> {{ 'index' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'index'\"\r\n                            [(ngModel)]=\"obj.index\" \r\n                            name=\"index\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"select-A\" nz-form-item-required> {{ 'select-A' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'select-A'\"\r\n                            [(ngModel)]=\"obj.A\" \r\n                            name=\"select-A\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"select-B\" nz-form-item-required> {{ 'select-B' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'select-B'\"\r\n                            [(ngModel)]=\"obj.B\" \r\n                            name=\"select-B\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"select-C\" nz-form-item-required> {{ 'select-C' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'select-C'\"\r\n                            [(ngModel)]=\"obj.C\" \r\n                            name=\"select-C\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"select-D\" nz-form-item-required> {{ 'select-D' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'select-D'\"\r\n                            [(ngModel)]=\"obj.D\" \r\n                            name=\"select-D\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"cancel()\">\r\n                        {{ 'cancel' | translate }}\r\n                    </button>\r\n                    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [disabled]=\"!Form.form.valid\">\r\n                        {{ 'ok' | translate }}\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nz-spin>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/color-test/create-or-edit-color-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrEditColorTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateOrEditColorTestComponent = /** @class */ (function () {
    function CreateOrEditColorTestComponent(modalHelper, model, subject, fb, msg, characterTestService) {
        this.modalHelper = modalHelper;
        this.model = model;
        this.subject = subject;
        this.fb = fb;
        this.msg = msg;
        this.characterTestService = characterTestService;
    }
    CreateOrEditColorTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.obj) {
            this.obj = {
                'id': '',
                'index': '',
                'question': '',
                'A': '',
                'B': '',
                'C': '',
                'D': ''
            };
        }
        this.title = this.obj.question;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    CreateOrEditColorTestComponent.prototype.cancel = function () {
        this.subject.destroy();
    };
    CreateOrEditColorTestComponent.prototype.save = function () {
        // execute save
        this.msg.info('id=' + this.obj.id);
        this.msg.info('index=' + this.obj.index);
        this.msg.info('question=' + this.obj.question);
        this.msg.info('A=' + this.obj.A);
        this.msg.info('B=' + this.obj.B);
        this.msg.info('C=' + this.obj.C);
        this.msg.info('D=' + this.obj.D);
        this.subject.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateOrEditColorTestComponent.prototype, "obj", void 0);
    CreateOrEditColorTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-or-edit-color-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/create-or-edit-color-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delon_theme__["e" /* ModalHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalSubject"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_4__core_common_common_service__["b" /* CharacterTestService */]])
    ], CreateOrEditColorTestComponent);
    return CreateOrEditColorTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/nine-house-test/create-or-edit-nine-house-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"modal-title\">\r\n        <span *ngIf=\"obj.id\">{{ 'edit' | translate }}:{{title}}</span>\r\n        <span *ngIf=\"!obj.id\">{{ 'create' | translate }}</span>\r\n    </div>\r\n</div>\r\n<nz-spin [nzTip]=\"'Loading...'\" [nzSpinning]=\"loading\">\r\n    <div nz-row [nzGutter]=\"16\">\r\n        <div nz-col [nzMd]=\"24\">\r\n            <form nz-form #Form=\"ngForm\" (ngSubmit)=\"save()\">\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"question\" nz-form-item-required> {{ 'question' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                        [nzId]=\"'question'\"\r\n                        [(ngModel)]=\"obj.question\" \r\n                        name=\"question\"\r\n                        required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-item nz-row>\r\n                    <div nz-form-label>\r\n                        <label for=\"type_number\" nz-form-item-required> {{ 'character-type' | translate }}</label>\r\n                    </div>\r\n                    <div nz-form-control>\r\n                        <nz-input \r\n                            [nzId]=\"'type_number'\"\r\n                            [(ngModel)]=\"obj.type_number\" \r\n                            name=\"type_number\"\r\n                            required>\r\n                        </nz-input>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button nz-button [nzType]=\"'default'\" [nzSize]=\"'large'\" type=\"button\" (click)=\"cancel()\">\r\n                        {{ 'cancel' | translate }}\r\n                    </button>\r\n                    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" type=\"submit\" [disabled]=\"!Form.form.valid\">\r\n                        {{ 'ok' | translate }}\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nz-spin>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/nine-house-test/create-or-edit-nine-house-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrEditNineHouseTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateOrEditNineHouseTestComponent = /** @class */ (function () {
    function CreateOrEditNineHouseTestComponent(modalHelper, model, subject, fb, msg, characterTestService) {
        this.modalHelper = modalHelper;
        this.model = model;
        this.subject = subject;
        this.fb = fb;
        this.msg = msg;
        this.characterTestService = characterTestService;
    }
    CreateOrEditNineHouseTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.obj) {
            this.obj = {
                'id': '',
                'question': '',
                'type_number': ''
            };
        }
        this.title = this.obj.question;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    CreateOrEditNineHouseTestComponent.prototype.cancel = function () {
        this.subject.destroy();
    };
    CreateOrEditNineHouseTestComponent.prototype.save = function () {
        // execute save
        this.subject.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateOrEditNineHouseTestComponent.prototype, "obj", void 0);
    CreateOrEditNineHouseTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-or-edit-nine-house-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/create-or-edit-nine-house-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__delon_theme__["e" /* ModalHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzModalSubject"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_4__core_common_common_service__["b" /* CharacterTestService */]])
    ], CreateOrEditNineHouseTestComponent);
    return CreateOrEditNineHouseTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/nine-house-test/nine-house-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        {{ 'nine-house-test' | translate }}\r\n        <small>{{ 'nine-house-test-small' | translate }}</small>\r\n    </h1>\r\n</div>\r\n<div nz-row style=\"margin-bottom:5px;\">\r\n    <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" style=\"float:right;\" (click)=\"createOrEdit()\">\r\n        <i class=\"anticon anticon-plus\"></i>\r\n        <span>{{ 'add-question' | translate }}</span>\r\n    </button>\r\n</div>\r\n<div nz-row>\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <nz-table #nzTable [nzAjaxData]=\"tableData\" [nzShowSizeChanger]=\"true\" [nzLoading]=\"tableLoading\" [nzTotal]=\"tableTotal\"\r\n                [(nzPageIndex)]=\"tablePageIndex\" (nzPageIndexChange)=\"getTableData()\" [(nzPageSize)]=\"tablePageSize\" (nzPageSizeChange)=\"getTableData()\"\r\n                [nzShowTotal]=\"true\">\r\n                <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th style=\"width:33%;\">\r\n                            <span>{{ 'actions' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th style=\"width:33%;\">\r\n                            <span>{{ 'question' | translate }}</span>\r\n                        </th>\r\n                        <th nz-th style=\"width:33%;\">\r\n                            <span>{{ 'character-type' | translate }}</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let obj of nzTable.data\">\r\n                        <td nz-td>\r\n                            <a (click)=\"createOrEdit(obj)\">\r\n                                <i class=\"anticon anticon-edit\"></i>\r\n                            </a>\r\n                            <span nz-table-divider></span>\r\n                            <a (click)=\"delete(obj.id)\">\r\n                                <i class=\"anticon anticon-delete\"></i>\r\n                            </a>\r\n                        </td>\r\n                        <td nz-td>{{obj.question}}</td>\r\n                        <td nz-td>{{obj.type_number}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/manage-entrance-test/character-test/nine-house-test/nine-house-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NineHouseTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delon_theme__ = __webpack_require__("./node_modules/@delon/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__ = __webpack_require__("./src/app/core/common/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_or_edit_nine_house_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/create-or-edit-nine-house-test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NineHouseTestComponent = /** @class */ (function () {
    function NineHouseTestComponent(msg, modal, http, basicConfigurationService, characterTestService) {
        var _this = this;
        this.msg = msg;
        this.modal = modal;
        this.http = http;
        this.basicConfigurationService = basicConfigurationService;
        this.characterTestService = characterTestService;
        this.tablePageIndex = 1;
        this.tablePageSize = 5;
        this.tableTotal = 1;
        this.tableData = [];
        this.tableLoading = true;
        this.getTableData = function () {
            _this.tableLoading = true;
            /* this.characterTestService.getNineHouseTests().subscribe((data: any) => {
                this.tableLoading = false;
                this.tableTotal = data.total;
                this.tableData = data.results;
            }); */
        };
        this.randomUserUrl = 'https://api.randomuser.me/';
    }
    NineHouseTestComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    // 删除
    NineHouseTestComponent.prototype.delete = function (id) {
        var _this = this;
        // 配置默认参数
        var options = {
            onOk: function () {
                _this.msg.success('删除id为' + id + '的记录!');
            },
            maskClosable: false,
        };
        // 获取当前语言环境下其他配置参数
        var result = this.basicConfigurationService.getDeleteOptions();
        options['title'] = result['title'];
        options['content'] = result['content'];
        options['okText'] = result['okText'];
        options['cancelText'] = result['cancelText'];
        this.modal.confirm(options);
    };
    // 新增与编辑
    NineHouseTestComponent.prototype.createOrEdit = function (args) {
        this.modal.open({
            wrapClassName: 'modal-md',
            content: __WEBPACK_IMPORTED_MODULE_4__create_or_edit_nine_house_test_component__["a" /* CreateOrEditNineHouseTestComponent */],
            footer: false,
            maskClosable: false,
            componentParams: {
                obj: args
            }
        });
    };
    NineHouseTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nine-house-test',
            template: __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/nine-house-test.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzMessageService"],
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["NzModalService"],
            __WEBPACK_IMPORTED_MODULE_1__delon_theme__["l" /* _HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__["a" /* BasicConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_3__core_common_common_service__["b" /* CharacterTestService */]])
    ], NineHouseTestComponent);
    return NineHouseTestComponent;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/manage-entrance-test-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageEntranceTestRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_test_animal_test_animal_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/animal-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_test_color_test_color_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/color-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_test_nine_house_test_nine_house_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/nine-house-test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'animal-test', component: __WEBPACK_IMPORTED_MODULE_2__character_test_animal_test_animal_test_component__["a" /* AnimalTestComponent */] },
    { path: 'color-test', component: __WEBPACK_IMPORTED_MODULE_3__character_test_color_test_color_test_component__["a" /* ColorTestComponent */] },
    { path: 'nine-house-test', component: __WEBPACK_IMPORTED_MODULE_4__character_test_nine_house_test_nine_house_test_component__["a" /* NineHouseTestComponent */] }
];
var ManageEntranceTestRoutingModule = /** @class */ (function () {
    function ManageEntranceTestRoutingModule() {
    }
    ManageEntranceTestRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], ManageEntranceTestRoutingModule);
    return ManageEntranceTestRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/manage-entrance-test/manage-entrance-test.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEntranceTestModule", function() { return ManageEntranceTestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_test_animal_test_animal_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/animal-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_test_color_test_color_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/color-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_test_nine_house_test_nine_house_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/nine-house-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_test_animal_test_create_or_edit_animal_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/animal-test/create-or-edit-animal-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__character_test_color_test_create_or_edit_color_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/color-test/create-or-edit-color-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_test_nine_house_test_create_or_edit_nine_house_test_component__ = __webpack_require__("./src/app/routes/manage-entrance-test/character-test/nine-house-test/create-or-edit-nine-house-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_entrance_test_routing_module__ = __webpack_require__("./src/app/routes/manage-entrance-test/manage-entrance-test-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_utils_module__ = __webpack_require__("./src/app/routes/utils/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var COMPONENTS_NOROUNT = [__WEBPACK_IMPORTED_MODULE_5__character_test_animal_test_create_or_edit_animal_test_component__["a" /* CreateOrEditAnimalTestComponent */], __WEBPACK_IMPORTED_MODULE_6__character_test_color_test_create_or_edit_color_test_component__["a" /* CreateOrEditColorTestComponent */], __WEBPACK_IMPORTED_MODULE_7__character_test_nine_house_test_create_or_edit_nine_house_test_component__["a" /* CreateOrEditNineHouseTestComponent */]];
var ManageEntranceTestModule = /** @class */ (function () {
    function ManageEntranceTestModule() {
    }
    ManageEntranceTestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__manage_entrance_test_routing_module__["a" /* ManageEntranceTestRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__utils_utils_module__["a" /* UtilsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__character_test_animal_test_animal_test_component__["a" /* AnimalTestComponent */],
                __WEBPACK_IMPORTED_MODULE_3__character_test_color_test_color_test_component__["a" /* ColorTestComponent */],
                __WEBPACK_IMPORTED_MODULE_4__character_test_nine_house_test_nine_house_test_component__["a" /* NineHouseTestComponent */]
            ].concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], ManageEntranceTestModule);
    return ManageEntranceTestModule;
}());



/***/ })

});
//# sourceMappingURL=manage-entrance-test.module.chunk.js.map