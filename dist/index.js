'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @providesModule MeasureMeHOC
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/


exports.default = function (ComposedComponent) {
    return function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.state = {};
            _this.measure = function (_ref) {
                var _ref$nativeEvent = _ref.nativeEvent;
                _ref$nativeEvent = _ref$nativeEvent === undefined ? {} : _ref$nativeEvent;
                var _ref$nativeEvent$layo = _ref$nativeEvent.layout;
                _ref$nativeEvent$layo = _ref$nativeEvent$layo === undefined ? {} : _ref$nativeEvent$layo;
                var _ref$nativeEvent$layo2 = _ref$nativeEvent$layo.width,
                    width = _ref$nativeEvent$layo2 === undefined ? 0 : _ref$nativeEvent$layo2,
                    _ref$nativeEvent$layo3 = _ref$nativeEvent$layo.height,
                    height = _ref$nativeEvent$layo3 === undefined ? 0 : _ref$nativeEvent$layo3;
                return _this.setState({ width: width, height: height, initialRender: true });
            };
            return _this;
        }

        _createClass(_class, [{
            key: 'render',
            value: function render() {
                return this.state.initialRender ? _react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state, {
                    onLayout: this.measure
                })) : _react2.default.createElement(_reactNative.View, { style: this.props.style, onLayout: this.measure });
            }
        }]);

        return _class;
    }(_react.Component);
};
