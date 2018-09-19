"use strict";

exports.__esModule = true;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactSpring = require("react-spring");

var _idx = require("idx");

var _idx2 = _interopRequireDefault(_idx);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var StaggeredReveal = (function(_React$Component) {
  _inherits(StaggeredReveal, _React$Component);

  function StaggeredReveal() {
    _classCallCheck(this, StaggeredReveal);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments)
    );
  }

  StaggeredReveal.prototype.render = function render() {
    var _props = this.props,
      reveal = _props.reveal,
      children = _props.children;

    return React.createElement(
      _reactSpring.Trail,
      {
        from: {
          opacity: 0,
          translateX: 40
        },
        to: {
          opacity: reveal ? 1 : 0,
          translateX: reveal ? 0 : 40
        },
        keys: React.Children.map(children, function(child, index) {
          return index;
        }),
        config: _reactSpring.config.wobbly
      },
      React.Children.map(children, function(child) {
        return function(_ref) {
          var opacity = _ref.opacity,
            translateX = _ref.translateX;

          if (opacity === 0 && translateX === 40) return null;

          var childStyle =
            (0, _idx2.default)(child, function(_) {
              return _.child.props.style;
            }) || {};
          var style = _extends({}, childStyle, {
            opacity: opacity,
            transform: "translateX(" + translateX + "px)"
          });

          return React.cloneElement(
            child,
            _extends({}, child.props, { style: style })
          );
        };
      })
    );
  };

  return StaggeredReveal;
})(React.Component);

StaggeredReveal.defaultProps = {
  reveal: true
};
exports.default = StaggeredReveal;