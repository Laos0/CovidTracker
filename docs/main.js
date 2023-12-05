(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sonylao/Documents/MyProjects/CovidTracking/covid-tracking-app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BZxr":
/*!***************************************************************!*\
  !*** ./src/app/views/main/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/covid-data-service/covid-data.service */ "Nxh5");
/* harmony import */ var src_app_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/selection-service/selection.service */ "oWJu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SearchBarComponent_li_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SearchBarComponent_li_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SearchBarComponent_li_9_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { d: a0 }; };
function SearchBarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_li_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const data_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateLocalCovidData(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_li_9_ng_container_2_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchBarComponent_li_9_ng_container_3_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchBarComponent_li_9_ng_container_4_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", data_r8.Province_State && data_r8.Admin2 && data_r8.Country_Region ? _r2 : null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, data_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", data_r8.Province_State && !data_r8.Admin2 && data_r8.Country_Region ? _r4 : null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, data_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !data_r8.Province_State && !data_r8.Admin2 && data_r8.Country_Region ? _r6 : null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, data_r8));
} }
function SearchBarComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const d_r14 = ctx.d;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", d_r14.Province_State, ", ", d_r14.Admin2, ", ", d_r14.Country_Region, "\n");
} }
function SearchBarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const d_r15 = ctx.d;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", d_r15.Province_State, ", ", d_r15.Country_Region, "\n");
} }
function SearchBarComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const d_r16 = ctx.d;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r16.Country_Region, "\n");
} }
class SearchBarComponent {
    constructor(covidService, selectionService) {
        this.covidService = covidService;
        this.selectionService = selectionService;
    }
    ngOnInit() {
        //this.covidService.covidData = this.covidData;
    }
    // This method will keep being fired whenever user changes its value
    getSelectedCovidData(event) {
        if (event.target.value === '') {
            return this.searchResult = [];
        }
        // will need to do filter filter filter three times
        this.searchResult = this.covidService.covidData.filter((data) => {
            // allow user to search by state name, County name, and Region
            return data.Province_State.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
                data.Admin2.toLowerCase().startsWith(event.target.value.toLowerCase()) ||
                data.Country_Region.toLowerCase().startsWith(event.target.value.toLowerCase());
        });
        //console.log(this.searchResult);
        return null;
    }
    updateLocalCovidData(data) {
        this.selectionService.onSearchBarSelect(data);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__["CovidDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_2__["SelectionService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "search-bar-container"], ["type", "text", "placeholder", "Enter state, county or region...", 3, "ngModel", "keyup", "ngModelChange"], ["searchbar", ""], [1, "list"], [4, "ngFor", "ngForOf"], ["usaTmpl", ""], ["countryWithStateTmpl", ""], ["countryWithNoStateTmpl", ""], [1, "searchResult", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search For An Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_5_listener($event) { return ctx.getSelectedCovidData($event); })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_5_listener($event) { return ctx.userInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchBarComponent_li_9_Template, 5, 12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchBarComponent_ng_template_10_Template, 1, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchBarComponent_ng_template_12_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchBarComponent_ng_template_14_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResult);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], styles: [".search-bar-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-bar-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0.5em;\n  width: 500px;\n  margin: 0 auto;\n  padding: 0.5em;\n}\n.list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 0.25em;\n  padding: 5px;\n  width: 500px;\n  height: 110px;\n  overflow: auto;\n  text-align: justify;\n  background-color: #82a8b1;\n  border-radius: 0.5em;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #a1bec5;\n  cursor: pointer;\n}\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDS0E7RUFDSSxrQkFBQTtBQURKO0FBR0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURSO0FBT0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBTEo7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFMUjtBQVNJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBUFI7QUFVSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBUlIiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRm9yIHNhc3MgdmFyaWFibGVzIG9ubHkgXG4qL1xuXG4kcHJpbWFyeTogIzU0NmE3YjtcbiRzZWNvbmRhcnk6ICM2MjkyOWU7XG4kYmxhY2s6ICMzOTNkM2Y7XG4kd2hpdGU6ICNmZGZkZmY7XG4kc2lsdmVyOiAjYzZjNWI5O1xuJG1haW5Gb250OiBzYW5zLXNlcmlmOyIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuXG5cblxuLnNlYXJjaC1iYXItY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlucHV0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAuNWVtOztcbiAgICB9XG59XG5cblxuLy8gY2hhbmdlIHB4IHRvIGVtIHRvIHNjYWxlIHdpdGggbW9iaWxlXG4ubGlzdHtcbiAgICBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAuMjVlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZWNvbmRhcnksIDEwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcblxuICAgIGxpe1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgdXMgdG8gaGlnaGxpZ2h0IHRoZSBzZWFyY2hlZCByZXN1bHRzIGFuZCBjaGFuZ2UgdGhlIGN1cnNvciB0byBhIHBvaW50ZXIgd2hlbiBob3ZlcmVkIG92ZXJcbiAgICBsaTpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkc2Vjb25kYXJ5LCAyMCUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgdWx7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Ji86":
/*!*************************************************************************!*\
  !*** ./src/app/services/user-location-service/user-location.service.ts ***!
  \*************************************************************************/
/*! exports provided: UserLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationService", function() { return UserLocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../covid-data-service/covid-data.service */ "Nxh5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserLocationService {
    constructor(covidService, http) {
        this.covidService = covidService;
        this.http = http;
        this.lat = 37.553;
        this.lng = -122.453;
        // use this to get the county based on lattitude and longititude 
        // api_key is from TomTom: https://developer.tomtom.com/user/me/apps
        this.api_key = "3JNYCpyxBcFRnHiBp15KifGS005qLlim";
        this.url = "https://api.tomtom.com/search/2/reverseGeocode/" + this.lat + "," + this.lng + ".json?key=" + this.api_key;
    }
    // gets me the user's lattitude and longitude using promise instead of observable
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                //reject(err);
                // If user's location is turned off then 
                console.log("LOCATION SERVICE TURNED OFF: TURN ON TO SEE LAT AND LNG");
                //console.log("Location Service is Turned off");
            });
        });
    }
    getGeolocationData(lat, lng) {
        this.updateUrl(lat, lng);
        return this.http.get(this.url);
    }
    updateUrl(lat, lng) {
        this.url = "https://api.tomtom.com/search/2/reverseGeocode/" + lat + "," + lng + ".json?key=" + this.api_key;
    }
}
UserLocationService.ɵfac = function UserLocationService_Factory(t) { return new (t || UserLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__["CovidDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserLocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserLocationService, factory: UserLocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Nxh5":
/*!*******************************************************************!*\
  !*** ./src/app/services/covid-data-service/covid-data.service.ts ***!
  \*******************************************************************/
/*! exports provided: CovidDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidDataService", function() { return CovidDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CovidDataService {
    constructor(http) {
        this.http = http;
        // Turn this into Enum if have time
        // Covid data api source
        this.baseUrl = "https://coronavirus.m.pipedream.net/";
    }
    getCovidStats() {
        const oldDate = localStorage.getItem('sessionTimer');
        if (oldDate) {
            const oldDateToNum = parseInt(oldDate);
            const d1 = new Date(oldDateToNum);
            const d2 = new Date();
            const d1sec = Math.floor(d1.getTime() / 1000);
            const d2sec = Math.floor(d2.getTime() / 1000);
            const seconds = d2sec - d1sec;
            if (seconds >= 10) {
                console.log("Clearing Storage");
                localStorage.clear();
            }
            else {
                console.log("Storage not clearning");
            }
        }
        // retrieving the covid data from api call from localStorage
        const cacheData = localStorage.getItem("covidData");
        if (cacheData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(cacheData));
        }
        else {
            return this.http
                .get(this.baseUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((d) => {
                localStorage.setItem("covidData", JSON.stringify(d));
                const date = Date.now();
                localStorage.setItem('sessionTimer', date.toString());
                return d;
            }));
        }
    }
    get(url, options) {
        return this.http.get(url, options);
    }
    post(url, data, options) {
        return this.http.post(url, data, options);
    }
    put(url, data, options) {
        return this.http.put(url, data, options);
    }
    delete(url, options) {
        return this.http.delete(url, options);
    }
}
CovidDataService.ɵfac = function CovidDataService_Factory(t) { return new (t || CovidDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CovidDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CovidDataService, factory: CovidDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/header/header/header.component */ "eDO3");
/* harmony import */ var _views_main_covid_global_stats_covid_global_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/main/covid-global-stats/covid-global-stats.component */ "yXwW");
/* harmony import */ var _views_main_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/main/search-bar/search-bar.component */ "BZxr");
/* harmony import */ var _views_main_covid_local_stats_covid_local_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/covid-local-stats/covid-local-stats.component */ "zZtX");
/* harmony import */ var _views_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/footer/footer/footer.component */ "bx50");






class AppComponent {
    constructor() {
        this.title = 'covid-tracking-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-covid-global-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-covid-local-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_views_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _views_main_covid_global_stats_covid_global_stats_component__WEBPACK_IMPORTED_MODULE_2__["CovidGlobalStatsComponent"], _views_main_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _views_main_covid_local_stats_covid_local_stats_component__WEBPACK_IMPORTED_MODULE_4__["CovidLocalStatsComponent"], _views_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_main_covid_locations_covid_locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/covid-locations/covid-locations.component */ "xjzv");
/* harmony import */ var _views_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/footer/footer/footer.component */ "bx50");
/* harmony import */ var _views_header_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/header/header/header.component */ "eDO3");
/* harmony import */ var _views_main_covid_global_stats_covid_global_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/main/covid-global-stats/covid-global-stats.component */ "yXwW");
/* harmony import */ var _views_main_covid_local_stats_covid_local_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/main/covid-local-stats/covid-local-stats.component */ "zZtX");
/* harmony import */ var _views_main_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/main/search-bar/search-bar.component */ "BZxr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_main_covid_locations_covid_locations_component__WEBPACK_IMPORTED_MODULE_4__["CovidLocationsComponent"],
        _views_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _views_header_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _views_main_covid_global_stats_covid_global_stats_component__WEBPACK_IMPORTED_MODULE_7__["CovidGlobalStatsComponent"],
        _views_main_covid_local_stats_covid_local_stats_component__WEBPACK_IMPORTED_MODULE_8__["CovidLocalStatsComponent"],
        _views_main_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bx50":
/*!*********************************************************!*\
  !*** ./src/app/views/footer/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2022 SomeDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  background: #393d3f;\n  color: white;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRENJO0VDQUosWUFBQTtFQUNBLGVBQUE7QUFFSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEZvciBzYXNzIHZhcmlhYmxlcyBvbmx5IFxuKi9cblxuJHByaW1hcnk6ICM1NDZhN2I7XG4kc2Vjb25kYXJ5OiAjNjI5MjllO1xuJGJsYWNrOiAjMzkzZDNmO1xuJHdoaXRlOiAjZmRmZGZmO1xuJHNpbHZlcjogI2M2YzViOTtcbiRtYWluRm9udDogc2Fucy1zZXJpZjsiLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5mb290ZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICRibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "eDO3":
/*!*********************************************************!*\
  !*** ./src/app/views/header/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Covid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #393d3f;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: #c6c5b9 1px solid;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fdfdff;\n  font-size: 2em;\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1.3em;\n  transform: rotate(-15deg);\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNFQTtFQUNJLGtCQUFBO0VBQ0EsbUJERUk7RUNESixlQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBRUo7QUFESTtFQUNJLGNERkE7RUNHQSxjQUFBO0VBQ0EsU0FBQTtBQUdSO0FBREk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBR1IiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBGb3Igc2FzcyB2YXJpYWJsZXMgb25seSBcbiovXG5cbiRwcmltYXJ5OiAjNTQ2YTdiO1xuJHNlY29uZGFyeTogIzYyOTI5ZTtcbiRibGFjazogIzM5M2QzZjtcbiR3aGl0ZTogI2ZkZmRmZjtcbiRzaWx2ZXI6ICNjNmM1Yjk7XG4kbWFpbkZvbnQ6IHNhbnMtc2VyaWY7IiwiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogJHNpbHZlciAxcHggc29saWQ7XG4gICAgaDF7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICBcbn1cblxuIl19 */"] });


/***/ }),

/***/ "oWJu":
/*!*****************************************************************!*\
  !*** ./src/app/services/selection-service/selection.service.ts ***!
  \*****************************************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectionService {
    constructor() {
        // when subject publishes, all listeners on the observable will react to 
        this._onSearchBarSelect = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onSearchBarSelect$ = this._onSearchBarSelect.asObservable();
    }
    onSearchBarSelect(data) {
        // publish the data, whoever listens(subscribe) will receive the data
        this._onSearchBarSelect.next(data);
    }
}
SelectionService.ɵfac = function SelectionService_Factory(t) { return new (t || SelectionService)(); };
SelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SelectionService, factory: SelectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xjzv":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/covid-locations/covid-locations.component.ts ***!
  \*************************************************************************/
/*! exports provided: CovidLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidLocationsComponent", function() { return CovidLocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/covid-data-service/covid-data.service */ "Nxh5");


class CovidLocationsComponent {
    //public covidInfos: ICovidInfo[] = [];
    constructor(covidService) {
        this.covidService = covidService;
        this.globalCovid = [];
    }
    ngOnInit() {
    }
    getData() {
        this.covidService.getCovidStats().subscribe({
            next: (resp) => {
                this.globalCovid = resp.summaryStats.global;
                console.log(this.globalCovid);
            },
            error: (e) => { console.error(e); },
            complete: () => { console.log("Data returned completed"); }
        });
    }
}
CovidLocationsComponent.ɵfac = function CovidLocationsComponent_Factory(t) { return new (t || CovidLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_1__["CovidDataService"])); };
CovidLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CovidLocationsComponent, selectors: [["app-covid-locations"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function CovidLocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CovidLocationsComponent_Template_button_click_0_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3ZpZC1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yXwW":
/*!*******************************************************************************!*\
  !*** ./src/app/views/main/covid-global-stats/covid-global-stats.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CovidGlobalStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidGlobalStatsComponent", function() { return CovidGlobalStatsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/covid-data-service/covid-data.service */ "Nxh5");



class CovidGlobalStatsComponent {
    constructor(covidService) {
        this.covidService = covidService;
        this._onDateReturned = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onDateReturned$ = this._onDateReturned.asObservable();
    }
    ngOnInit() {
        this.getData();
    }
    // this method will fetch us all the global stats on covid19
    // under the key global: confirmed, recovered, deaths
    getData() {
        // get request for all covid stats
        this.covidService.getCovidStats().subscribe({
            next: (resp) => {
                this.covidService.covidData = resp.rawData;
                // getting the global stats from object literal
                this.globalConfirmed = resp.summaryStats.global.confirmed;
                this.globalDeaths = resp.summaryStats.global.deaths;
                this.lastUpdatedGlobal = resp.cache.lastUpdated;
                // console.log(this.covidService.covidData);
                // Get the current time
                this.dateNow = new Date();
                this._onDateReturned.next();
            },
            error: (e) => { console.error(e); },
            complete: () => { console.log("Data returned completed from CovoidGlobalStats.component.ts"); }
        });
    }
}
CovidGlobalStatsComponent.ɵfac = function CovidGlobalStatsComponent_Factory(t) { return new (t || CovidGlobalStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_2__["CovidDataService"])); };
CovidGlobalStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CovidGlobalStatsComponent, selectors: [["app-covid-global-stats"]], decls: 15, vars: 3, consts: [[1, "container"], [1, "lastUpdated"], [1, "centerText"], [1, "confirmedCases"], [1, "confirmedDeaths"]], template: function CovidGlobalStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Global Summary Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Confirmed Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last updated: ", ctx.lastUpdatedGlobal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.globalConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.globalDeaths);
    } }, styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #c6c5b9;\n  margin: 50px;\n  padding: 10px;\n  border: 5px solid #393d3f;\n}\n.container[_ngcontent-%COMP%]   .lastUpdated[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.7em;\n}\n.container[_ngcontent-%COMP%]   .confirmedCases[_ngcontent-%COMP%] {\n  border: 5px solid #393d3f;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .confirmedDeaths[_ngcontent-%COMP%] {\n  border: 5px solid #393d3f;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9jb3ZpZC1nbG9iYWwtc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNFQTtFQUNJLGtCQUFBO0VBQ0EseUJESUs7RUNITCxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFESTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBRVI7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNSIiwiZmlsZSI6ImNvdmlkLWdsb2JhbC1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRm9yIHNhc3MgdmFyaWFibGVzIG9ubHkgXG4qL1xuXG4kcHJpbWFyeTogIzU0NmE3YjtcbiRzZWNvbmRhcnk6ICM2MjkyOWU7XG4kYmxhY2s6ICMzOTNkM2Y7XG4kd2hpdGU6ICNmZGZkZmY7XG4kc2lsdmVyOiAjYzZjNWI5O1xuJG1haW5Gb250OiBzYW5zLXNlcmlmOyIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuLmNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNpbHZlcjtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2s7XG4gICAgLmxhc3RVcGRhdGVke1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAuNzBlbTtcbiAgICB9XG4gICBcbiAgICAuY29uZmlybWVkQ2FzZXN7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRibGFjaztcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgLmNvbmZpcm1lZERlYXRoc3tcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZtX":
/*!*****************************************************************************!*\
  !*** ./src/app/views/main/covid-local-stats/covid-local-stats.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CovidLocalStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidLocalStatsComponent", function() { return CovidLocalStatsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/covid-data-service/covid-data.service */ "Nxh5");
/* harmony import */ var src_app_services_user_location_service_user_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-location-service/user-location.service */ "Ji86");
/* harmony import */ var src_app_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/selection-service/selection.service */ "oWJu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CovidLocalStatsComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.county), " ");
} }
function CovidLocalStatsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.state, " ");
} }
function CovidLocalStatsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.region, " ");
} }
class CovidLocalStatsComponent {
    constructor(covidService, userLocationService, selectionService) {
        this.covidService = covidService;
        this.userLocationService = userLocationService;
        this.selectionService = selectionService;
        this._onUserLocation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onUserLocation = this._onUserLocation.asObservable();
    }
    ngOnInit() {
        // get latitude and longitude from user 
        this.getCurrentLocation();
        // not needed, just for practicing purposes and to replace take(#)
        const _unSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // once the _onUserLocation subject publishes/alert its data/non-data then this line gets run
        this.onUserLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_unSub)).subscribe((d) => {
            _unSub.next();
            // fetching all covid data
            this.getLocalStats();
        });
        this.selectionService.onSearchBarSelect$.subscribe((data) => {
            this.state = data.Province_State;
            this.county = data.Admin2;
            this.region = data.Country_Region;
            this.localConfirmed = data.Confirmed;
            this.localDeaths = data.Deaths;
            this.lastUpdated = data.Last_Update;
        });
    }
    getLocalStats() {
        this.covidService.getCovidStats().subscribe({
            next: (resp) => {
                //console.log(resp.rawData);
                // a filter that searches for covid data based on State
                const localCovidData = resp.rawData.filter(obj => {
                    return obj.Province_State === this.state;
                });
                // After filtering, we filter the county within the state to get the revelant covid data
                const LCD = localCovidData.filter(obj => {
                    return obj.Admin2 === this.county;
                });
                this.localConfirmed = LCD[0].Confirmed;
                this.localDeaths = LCD[0].Deaths;
                this.lastUpdated = LCD[0].Last_Update;
                this.region = LCD[0].Country_Region;
                // console.log(localCovidData[0]);
            },
            error: (e) => { console.error(e); },
            complete: () => { console.log("Data returned completed"); }
        });
    }
    // get user's coordinates
    getCurrentLocation() {
        this.userLocationService.getPosition().then(resp => {
            //console.log(`Positon: ${resp.lng} ${resp.lat}`);
            //console.log(resp)
            this.getGeolocationData(resp.lat, resp.lng);
        });
    }
    // this method will call the service to retrieve the county of the user based on its latitude and longitude
    // using TomTom's api 
    getGeolocationData(lat, lng) {
        this.userLocationService.getGeolocationData(lat, lng).subscribe((resp) => {
            this.state = resp.addresses[0].address.countrySubdivisionName;
            this.county = resp.addresses[0].address.countrySecondarySubdivision;
            // this is how you publish/alert on a subject to listeners (observables)
            this._onUserLocation.next();
        });
        ;
    }
}
CovidLocalStatsComponent.ɵfac = function CovidLocalStatsComponent_Factory(t) { return new (t || CovidLocalStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_covid_data_service_covid_data_service__WEBPACK_IMPORTED_MODULE_3__["CovidDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_location_service_user_location_service__WEBPACK_IMPORTED_MODULE_4__["UserLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_selection_service_selection_service__WEBPACK_IMPORTED_MODULE_5__["SelectionService"])); };
CovidLocalStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CovidLocalStatsComponent, selectors: [["app-covid-local-stats"]], decls: 17, vars: 6, consts: [[1, "container"], [1, "lastUpdated"], [1, "centerText"], [4, "ngIf"], [1, "confirmedCases"], [1, "confirmedDeaths"]], template: function CovidLocalStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CovidLocalStatsComponent_span_4_Template, 3, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CovidLocalStatsComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CovidLocalStatsComponent_span_6_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Confirmed Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Confirmed Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Last updated: ", ctx.lastUpdated, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.county);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localDeaths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #c6c5b9;\n  margin: 50px;\n  padding: 10px;\n  border: 5px solid #393d3f;\n}\n.container[_ngcontent-%COMP%]   .lastUpdated[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.7em;\n}\n.container[_ngcontent-%COMP%]   .confirmedCases[_ngcontent-%COMP%] {\n  border: 5px solid #393d3f;\n  margin: 5px;\n}\n.container[_ngcontent-%COMP%]   .confirmedDeaths[_ngcontent-%COMP%] {\n  border: 5px solid #393d3f;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9jb3ZpZC1sb2NhbC1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0VBO0VBQ0ksa0JBQUE7RUFDQSx5QkRJSztFQ0hMLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFFSjtBQURJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUdSO0FBQUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFFUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBQ1IiLCJmaWxlIjoiY292aWQtbG9jYWwtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEZvciBzYXNzIHZhcmlhYmxlcyBvbmx5IFxuKi9cblxuJHByaW1hcnk6ICM1NDZhN2I7XG4kc2Vjb25kYXJ5OiAjNjI5MjllO1xuJGJsYWNrOiAjMzkzZDNmO1xuJHdoaXRlOiAjZmRmZGZmO1xuJHNpbHZlcjogI2M2YzViOTtcbiRtYWluRm9udDogc2Fucy1zZXJpZjsiLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzaWx2ZXI7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgJGJsYWNrO1xuICAgIC5sYXN0VXBkYXRlZHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjcwZW07XG4gICAgfVxuICAgXG4gICAgLmNvbmZpcm1lZENhc2Vze1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cblxuICAgIC5jb25maXJtZWREZWF0aHN7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRibGFjaztcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIFxufSJdfQ== */"] });
function delay(arg0) {
    throw new Error('Function not implemented.');
}
function take(arg0) {
    throw new Error('Function not implemented.');
}
function timeout(arg0) {
    throw new Error('Function not implemented.');
}
function takeuntil() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map