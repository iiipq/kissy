/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Aug 20 17:44
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/shim
*/

/**
 * @ignore
 * create iframe shim for flash/select/office plugin
 * @author yiminghe@gmail.com
 */
KISSY.add("component/extension/shim", function (S) {
    var ie6 = S.UA.ie === 6;

    var shimTpl = "<" + "iframe style='position: absolute;" +
        "border: none;" +
        // consider border
        // bug fix: 2012-11-07
        "width: " + (ie6 ? "expression(this.parentNode.clientWidth)" : "100%") + ";" +
        "top: 0;" +
        "opacity: 0;" +
        "filter: alpha(opacity=0);" +
        "left: 0;" +
        "z-index: -1;" +
        "height: " + (ie6 ? "expression(this.parentNode.clientHeight)" : "100%") + ";" + "'/>";

    function Shim() {
    }

    Shim.ATTRS = {
        /**
         * whether create shim
         * @cfg {Boolean} shim
         */
        /**
         * @ignore
         */
        shim: {
            // default shim for ie6
            // prevent select coming out of div
            value: ie6
        }
    };

    Shim.prototype.__createDom = function () {
        if (this.get('shim')) {
            this.get('el').prepend(shimTpl);
        }
    };

    return Shim;
});

