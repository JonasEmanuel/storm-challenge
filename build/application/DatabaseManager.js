'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseManager = function () {
    function DatabaseManager() {
        _classCallCheck(this, DatabaseManager);

        this.connection = null;
    }

    _createClass(DatabaseManager, null, [{
        key: 'getConnection',
        value: function getConnection() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (_this.connection) {
                    resolve(_this.connection);
                } else {
                    _mongodb.MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
                        _this.connection = client.db('stormChallenge');
                        resolve(_this.connection);
                    });
                }
            });
        }
    }]);

    return DatabaseManager;
}();

exports.default = DatabaseManager;