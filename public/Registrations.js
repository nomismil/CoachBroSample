"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Navbar = _interopRequireDefault(require("./Navbar.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Registrations = /*#__PURE__*/function (_React$Component) {
  _inherits(Registrations, _React$Component);
  var _super = _createSuper(Registrations);
  function Registrations() {
    var _this;
    _classCallCheck(this, Registrations);
    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Registrations, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _member;
      e.preventDefault();
      var form = document.forms.register;
      var member = (_member = {
        username: form.username.value,
        password: form.password.value,
        accountType: form.accountType.value,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        gender: form.gender.value,
        contact: form.contact.value
      }, _defineProperty(_member, "username", form.username.value), _defineProperty(_member, "address", form.address.value), _defineProperty(_member, "dob", form.dob.value), _member);
      this.props.addMember({
        firstName: member.firstName,
        lastName: member.lastName,
        accountType: member.accountType,
        email: member.email,
        gender: member.gender,
        contactNo: member.contact,
        username: member.username,
        password: member.password,
        address: member.address,
        dob: member.dob
      });
      form.username.value = "";
      form.password.value = "";
      form.accountType.value = "";
      form.firstName.value = "";
      form.lastName.value = "";
      form.email.value = "";
      form.gender.value = "";
      form.contact.value = "";
      form.address.value = "";
      form.dob.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "login"
      }, /*#__PURE__*/React.createElement("div", {
        className: "auth-form-container"
      }, /*#__PURE__*/React.createElement("h3", null, "New Member Registrations"), /*#__PURE__*/React.createElement("form", {
        name: "register",
        className: "login-form",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", null, "First Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "First Name",
        name: "firstName"
      }), /*#__PURE__*/React.createElement("label", null, "Last Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Last Name",
        name: "lastName"
      }), /*#__PURE__*/React.createElement("label", null, "Account Type:"), /*#__PURE__*/React.createElement("select", {
        name: "accountType"
      }, /*#__PURE__*/React.createElement("option", null, "Ordinary"), /*#__PURE__*/React.createElement("option", null, "Trainer")), /*#__PURE__*/React.createElement("label", null, "Email:"), /*#__PURE__*/React.createElement("input", {
        type: "email",
        placeholder: "Email",
        name: "email"
      }), /*#__PURE__*/React.createElement("label", null, "Gender:"), /*#__PURE__*/React.createElement("select", {
        name: "gender"
      }, /*#__PURE__*/React.createElement("option", null, "Female"), /*#__PURE__*/React.createElement("option", null, "Male")), /*#__PURE__*/React.createElement("label", null, "Contact Number:"), /*#__PURE__*/React.createElement("input", {
        type: "number",
        placeholder: "Contact",
        name: "contact"
      }), /*#__PURE__*/React.createElement("label", null, "Username:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Username",
        name: "username"
      }), /*#__PURE__*/React.createElement("label", null, "Address:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Address",
        name: "address"
      }), /*#__PURE__*/React.createElement("label", null, "DOB:"), /*#__PURE__*/React.createElement("input", {
        type: "date",
        placeholder: "DOB",
        name: "dob"
      }), /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("input", {
        type: "password",
        placeholder: "********",
        name: "password"
      }), /*#__PURE__*/React.createElement("button", {
        className: "loginButton",
        onSubmit: this.handleSubmit
      }, "Register")), /*#__PURE__*/React.createElement("a", {
        href: "/#/login"
      }, /*#__PURE__*/React.createElement("button", {
        className: "login-register-link-btn"
      }, "Already have an account? Login here.")))));
    }
  }]);
  return Registrations;
}(React.Component);
var _default = Registrations;
exports.default = _default;