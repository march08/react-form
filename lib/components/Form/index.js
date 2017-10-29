'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formSerialize = require('form-serialize');

var _formSerialize2 = _interopRequireDefault(_formSerialize);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args)));

    _this.getValues = _this.getValues.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.formSubmit = _this.formSubmit.bind(_this);
    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'getValues',
    value: function getValues() {
      return (0, _formSerialize2.default)(this.form, {
        hash: true
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var _props;

      var values = (0, _formSerialize2.default)(this.form, {
        hash: true
      });

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_props = this.props).onSubmit.apply(_props, [values].concat(args));
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      e.preventDefault();
      this.submit();
    }
  }, {
    key: 'setRef',
    value: function setRef(name) {
      var _this2 = this;

      return function (component) {
        _this2[name] = component;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      return _react2.default.createElement(
        'form',
        { onSubmit: this.formSubmit, noValidate: true, className: (0, _classnames2.default)(className), ref: this.setRef('form') },
        this.props.children
      );
    }
  }]);

  return Form;
}(_react.PureComponent);

Form.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string
};
Form.defaultProps = {
  className: null
};
exports.default = Form;
module.exports = exports['default'];