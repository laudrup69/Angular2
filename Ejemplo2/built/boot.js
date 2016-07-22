"use strict";
var broser_1 = require('angular2/platform/broser');
var app_component_1 = require('./app.component');
broser_1.bootstrap(app_component_1.AppComponent)
    .then(function (success) { return console.log('Bootstrap successfully!'); })
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=boot.js.map