'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var cn = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Loader = function () {
    return (jsxRuntime.jsxs("div", __assign({ className: "lds-ring" }, { children: [jsxRuntime.jsx("div", {}, void 0), jsxRuntime.jsx("div", {}, void 0), jsxRuntime.jsx("div", {}, void 0), jsxRuntime.jsx("div", {}, void 0)] }), void 0));
};

var useRipple = function () {
    var _a = react.useState([]), ripplePosition = _a[0], setRipplePosition = _a[1];
    var applyRippleEffect = function (event) {
        var pageX = event.pageX, pageY = event.pageY, currentTarget = event.currentTarget;
        var rippleContainer = currentTarget.getBoundingClientRect();
        var size = rippleContainer.width > rippleContainer.height
            ? rippleContainer.width
            : rippleContainer.height;
        var x = pageX - rippleContainer.x - size / 2;
        var y = pageY - rippleContainer.y - size / 2;
        setRipplePosition([{
                x: x,
                y: y,
                size: size,
            }]);
    };
    react.useLayoutEffect(function () {
        var isRippleEffect = ripplePosition.length;
        var RippleTime = 800;
        var bounce = null;
        if (!isRippleEffect)
            clearTimeout(bounce);
        bounce = setTimeout(function () {
            setRipplePosition([]);
            clearTimeout(bounce);
        }, RippleTime * 2);
        return function () { return clearTimeout(bounce); };
    }, [ripplePosition.length]);
    return {
        applyRippleEffect: applyRippleEffect,
        ripplePosition: ripplePosition,
    };
};

var RippleContainer = function (_a) {
    var ripples = _a.ripples;
    return (jsxRuntime.jsx("div", __assign({ className: "absolute inset-0 z-10" }, { children: ripples.length > 0 &&
            ripples.map(function (ripple, index) {
                return (jsxRuntime.jsx("span", { className: "absolute bg-currentColor rounded-full my-scale-0 animate-ripple", style: {
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                    } }, index));
            }) }), void 0));
};

var useRippleHover = function (ref) {
    var applyRippleHover = function (event) {
        var pageX = event.pageX, pageY = event.pageY;
        var x = pageX - ref.current.offsetLeft;
        var y = pageY - ref.current.offsetTop;
        ref.current.style.setProperty('--x', x + 'px');
        ref.current.style.setProperty('--y', y + 'px');
    };
    return {
        applyRippleHover: applyRippleHover,
    };
};

var RippleHover = function (_a) {
    var color = _a.color;
    var colors = {
        primary: 'bg-primary-200',
        secondary: 'bg-dark-300',
        gray: 'bg-gray-300',
        success: 'bg-success-400',
        error: 'bg-error-400',
    };
    var classes = cn__default['default']('absolute top-0 left-0 w-full h-full rounded-full ripple-hover', colors[color]);
    return (jsxRuntime.jsx("div", { className: classes }, void 0));
};

var useMergedRef = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return react.useCallback(function (element) {
        for (var i = 0; i < refs.length; i++) {
            var ref = refs[i];
            if (typeof ref === 'function')
                ref(element);
            else if (ref && typeof ref === 'object') {
                ref.current = element;
            }
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs);
};

var Button = react.forwardRef(function (props, innerRef) {
    var _a;
    var children = props.children, className = props.className, addonLeft = props.addonLeft, addonRight = props.addonRight, _b = props.color, color = _b === void 0 ? 'primary' : _b, outline = props.outline, _c = props.size, size = _c === void 0 ? 'medium' : _c, loading = props.loading, disabled = props.disabled, onClick = props.onClick, onMouseLeave = props.onMouseLeave, href = props.href, id = props.id, title = props.title, role = props.role, onBlur = props.onBlur, onFocus = props.onFocus, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, onMouseEnter = props.onMouseEnter, type = props.type;
    var rootClasses = 'relative flex justify-center items-center rounded-md overflow-hidden ripple-hover__container focus:outline-none focus:ring ';
    var colors = {
        primary: 'bg-primary-500 border border-primary-500 text-black ring-offset-1 ring-primary-300',
        secondary: 'bg-dark-500 border text-white border-dark-500 dark:bg-light-500 dark:text-black dark:border-light-500 ring-offset-1 ring-dark-300',
        gray: 'bg-gray-100 border text-black border-gray-100 ring-offset-1 ring-gray-300',
        success: 'bg-success-500 border border-success-500 text-white ring-offset-1 ring-success-500',
        error: 'bg-error-500 border border-error-500 text-white ring-offset-1 ring-error-500',
        ghost: 'bg-transparent color-black',
    };
    var outlineColors = {
        primary: 'bg-white border-primary-500 text-black',
        secondary: 'bg-white border-dark-500 text-black dark:bg-dark-500 dark:text-white dark:border-light-500',
        gray: 'bg-white border-gray-100 text-dark',
        success: 'bg-white border-success text-success',
        danger: 'bg-white border-danger text-danger',
    };
    var sizes = {
        small: 'py-1 px-2',
        medium: 'py-2 px-4',
        large: 'py-4 px-8',
        block: 'w-full h-full',
    };
    var defaultRef = react.useRef(null);
    var mergedRefs = useMergedRef(innerRef, defaultRef);
    var Tag = href ? 'a' : 'button';
    var classes = cn__default['default']('button', className, rootClasses, sizes[size], (_a = {},
        _a[' opacity-70 cursor-not-allowed'] = disabled,
        _a[colors[color]] = !outline,
        _a[outlineColors[color]] = outline,
        _a));
    var _d = useRipple(), applyRippleEffect = _d.applyRippleEffect, ripplePosition = _d.ripplePosition;
    var applyRippleHover = useRippleHover(defaultRef).applyRippleHover;
    var handleClick = function (event) {
        applyRippleEffect(event);
        if (onClick)
            onClick();
    };
    var handleMouseEnter = function (event) {
        applyRippleHover(event);
        if (onMouseEnter)
            onMouseEnter();
    };
    return (jsxRuntime.jsxs(Tag, __assign({ ref: mergedRefs, href: href, title: title, role: role, id: id, type: type, className: classes, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: onMouseLeave, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onBlur: onBlur, onFocus: onFocus }, { children: [!loading && addonLeft && (jsxRuntime.jsx("span", __assign({ className: "z-10 mx-1 mr-2" }, { children: addonLeft }), void 0)), !disabled && jsxRuntime.jsx(RippleHover, { color: color }, void 0), !disabled && jsxRuntime.jsx(RippleContainer, { ripples: ripplePosition }, void 0), !loading && (jsxRuntime.jsx("span", __assign({ className: "z-10" }, { children: children }), void 0)), loading && jsxRuntime.jsx(Loader, {}, void 0), !loading && addonRight && (jsxRuntime.jsx("span", __assign({ className: "z-10 mx-1 ml-2" }, { children: addonRight }), void 0))] }), void 0));
});

exports.Button = Button;
//# sourceMappingURL=index.js.map
