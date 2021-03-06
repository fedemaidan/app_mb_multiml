"use strict";
var Emitter = io.socket.emitter.Emitter;
var IO = io.socket.client.IO;
var Socket = io.socket.client.Socket;
var Ack = io.socket.client.Ack;
var JSONObject = org.json.JSONObject;
var JSONArray = org.json.JSONArray;
var JSONException = org.json.JSONException;
var SocketIO = (function () {
    function SocketIO() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        switch (args.length) {
            case 2:
                var opts = new IO.Options();
                Object.assign(opts, args[1]);
                this.socket = IO.socket(args[0], opts);
                break;
            case 3:
                this.instance = args.pop();
                break;
        }
    }
    SocketIO.prototype.on = function (event, callback) {
        this.socket.on(event, new Emitter.Listener({
            call: function (args) {
                var payload = Array.prototype.slice.call(args);
                var ack = payload.pop();
                if (ack && !(ack.getClass().getName().indexOf('io.socket.client.Socket') === 0 && ack.call)) {
                    payload.push(ack);
                    ack = null;
                }
                payload = payload.map(SocketIO.deserialize);
                if (ack) {
                    var _ack_1 = ack;
                    ack = function () {
                        var args = Array.prototype.slice.call(arguments).map(SocketIO.serialize);
                        _ack_1.call(args);
                    };
                    payload.push(ack);
                }
                callback.apply(null, payload);
            }
        }));
    };
    SocketIO.prototype.connect = function () {
        this.socket.connect();
    };
    SocketIO.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!args) {
            return console.error('Emit Failed: No arguments');
        }
        var event = args[0];
        var payload = Array.prototype.slice.call(args, 1);
        var ack = payload.pop();
        if (ack && typeof ack !== 'function') {
            payload.push(ack);
            ack = null;
        }
        payload = payload.map(SocketIO.serialize);
        if (ack) {
            payload.push(new Ack({
                call: function (args) {
                    args = Array.prototype.slice.call(args).map(SocketIO.deserialize);
                    ack.apply(null, args);
                },
            }));
        }
        this.socket.emit(event, payload);
    };
    SocketIO.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    Object.defineProperty(SocketIO.prototype, "instance", {
        get: function () {
            return this.socket;
        },
        set: function (instance) {
            this.socket = instance;
        },
        enumerable: true,
        configurable: true
    });
    SocketIO.prototype.joinNamespace = function (nsp) {
        if (this.socket.connected()) {
            var manager = this.socket.io();
            this.socket = manager.socket(nsp);
            this.socket.connect();
        }
        else {
            var manager = this.socket.io();
            this.socket = manager.socket(nsp);
        }
    };
    SocketIO.prototype.leaveNamespace = function () {
    };
    SocketIO.serialize = function (value) {
        var store;
        switch (typeof value) {
            case 'string':
            case 'boolean':
            case 'number':
                return value;
            case 'object':
                if (!value) {
                    return null;
                }
                if (value instanceof Date) {
                    return value.toJSON();
                }
                if (Array.isArray(value)) {
                    store = new JSONArray();
                    value.forEach(function (item) {
                        store.put(item);
                    });
                    return store;
                }
                store = new JSONObject();
                Object.keys(value).forEach(function (key) {
                    var item = value[key];
                    store.put(key, SocketIO.serialize(item));
                });
                return store;
            default: return null;
        }
    };
    SocketIO.deserialize = function (value) {
        if (value === null || typeof value !== 'object') {
            return value;
        }
        var store;
        switch (value.getClass().getName()) {
            case 'java.lang.String':
                return String(value);
            case 'java.lang.Boolean':
                return Boolean(value);
            case 'java.lang.Integer':
            case 'java.lang.Long':
            case 'java.lang.Double':
            case 'java.lang.Short':
                return Number(value);
            case 'org.json.JSONArray':
                store = new Array();
                for (var i_1 = 0; i_1 < value.length(); i_1++) {
                    store[i_1] = SocketIO.deserialize(value.get(i_1));
                }
                break;
            case 'org.json.JSONObject':
                store = new Object();
                var i = value.keys();
                while (i.hasNext()) {
                    var key = i.next();
                    store[key] = SocketIO.deserialize(value.get(key));
                }
                break;
            default:
                store = null;
        }
        return store;
    };
    return SocketIO;
}());
exports.SocketIO = SocketIO;
//# sourceMappingURL=socketio.js.map