; (function (namespace, undefined) {
    namespace.bounce = function (selector) {
        let keyframeset = [{
            "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "transform": "translate3d(0,0,0)",
            "offset": 0
        }, {
            "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "transform": "translate3d(0,0,0)",
            "offset": 0.2
        }, {
            "animation-timing-function": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            "transform": "translate3d(0, -30px, 0)",
            "offset": 0.4
        }, {
            "animation-timing-function": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            "transform": "translate3d(0, -30px, 0)",
            "offset": 0.43
        }, {
            "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "transform": "translate3d(0,0,0)",
            "offset": 0.53
        }, {
            "animation-timing-function": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            "transform": "translate3d(0, -15px, 0)",
            "offset": 0.7
        }, {
            "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "transform": "translate3d(0,0,0)",
            "offset": 0.8
        }, {
            "transform": "translate3d(0,-4px,0)",
            "offset": 0.9
        }, {
            "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "transform": "translate3d(0,0,0)",
            "offset": 1
        }];
        namespace._animate(selector, keyframeset);
    }
})(window.animate = window.animate || {});
