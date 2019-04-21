'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _order = require('../routes/order.route');

var _order2 = _interopRequireDefault(_order);

var _resource = require('../routes/resource.route');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('dotenv').config();

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);

        this.app = (0, _express2.default)();
        this.router = _express2.default.Router();
        this.connectionString = "mongodb+srv://root:root@cluster0-bzgfm.mongodb.net";
        this.databaseName = "stormChallenge";
        this.port = 9000;
    }

    _createClass(Application, [{
        key: 'init',
        value: function init() {
            this.app.use(_bodyParser2.default.urlencoded({ extended: true }));
            this.app.use(_bodyParser2.default.json());
            this.app.use((0, _cors2.default)());
            this.app.use(_express2.default.static('./src/clientApp/dist'), { maxAge: 86400000 });

            this.loadRoutes();
            this.connectDatabase();

            this.app.listen(process.env.PORT || this.port, function () {
                console.log('Server running on http://localhost:' + process.env.PORT + '/');
            });
        }
    }, {
        key: 'loadRoutes',
        value: function loadRoutes() {
            this.app.use('/api', this.router);
            (0, _resource2.default)(this.router);
            (0, _order2.default)(this.router);
        }
    }, {
        key: 'connectDatabase',
        value: function connectDatabase() {
            _mongodb.MongoClient.connect(this.connectionString, { useNewUrlParser: true }, function (err, client) {
                if (!err) {
                    console.log("MongoDB - OK");
                }
            });
        }
    }]);

    return Application;
}();

exports.default = Application;