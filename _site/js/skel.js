/* skel.js v0.2 | (c) n33 | n33.co @n33co | MIT + GPLv2 */
var skel = function () {
    var a = {
        config: {
            prefix: null,
            preloadStyleSheets: !1,
            pollOnce: !1,
            resetCSS: !1,
            normalizeCSS: !1,
            boxModel: null,
            useOrientation: !1,
            noConflict: !1,
            noConflictPrefix: "skel",
            containers: 960,
            grid: {
                collapse: !1,
                gutters: 2
            },
            breakpoints: {
                all: {
                    range: "*",
                    hasStyleSheet: !1
                }
            },
            events: {}
        },
        isLegacyIE: !1,
        stateId: "",
        breakpoints: [],
        events: [],
        plugins: {},
        cache: {
            elements: {},
            states: {}
        },
        locations: {
            head: null,
            body: null
        },
        css: {
            r: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}",
            n: 'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{background:#fff;color:#000;font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\u0081C" "\u0081D" "\u00818" "\u00819"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
            g0: ".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{margin:0;float:left}",
            g1: ".\\31 2u{width:100%}.\\31 1u{width:91.5833333333%}.\\31 0u{width:83.1666666667%}.\\39 u{width:74.75%}.\\38 u{width:66.3333333333%}.\\37 u{width:57.9166666667%}.\\36 u{width:49.5%}.\\35 u{width:41.0833333333%}.\\34 u{width:32.6666666667%}.\\33 u{width:24.25%}.\\32 u{width:15.8333333333%}.\\31 u{width:7.4166666667%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{margin:.5% 0 .5% 1%;float:left}",
            g2: ".\\31 2u{width:100%}.\\31 1u{width:91.5%}.\\31 0u{width:83%}.\\39 u{width:74.5%}.\\38 u{width:66%}.\\37 u{width:57.5%}.\\36 u{width:49%}.\\35 u{width:40.5%}.\\34 u{width:32%}.\\33 u{width:23.5%}.\\32 u{width:15%}.\\31 u{width:6.5%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{margin:1% 0 1% 2%;float:left}",
            g4: ".\\31 2u{width:100%}.\\31 1u{width:91.3333333333%}.\\31 0u{width:82.6666666667%}.\\39 u{width:74%}.\\38 u{width:65.3333333333%}.\\37 u{width:56.6666666667%}.\\36 u{width:48%}.\\35 u{width:39.3333333333%}.\\34 u{width:30.6666666667%}.\\33 u{width:22%}.\\32 u{width:13.3333333333%}.\\31 u{width:4.6666666667%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{margin:2% 0 2% 4%;float:left}",
            g6: ".\\31 2u{width:100%}.\\31 1u{width:91.1666666667%}.\\31 0u{width:82.3333333333%}.\\39 u{width:73.5%}.\\38 u{width:64.6666666667%}.\\37 u{width:55.8333333333%}.\\36 u{width:47%}.\\35 u{width:38.1666666667%}.\\34 u{width:29.3333333333%}.\\33 u{width:20.5%}.\\32 u{width:11.6666666667%}.\\31 u{width:2.8333333333%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{margin:3% 0 3% 6%;float:left}",
            gF: ".flush>.row>.\\31 2u{width:100%!important}.flush>.row>.\\31 1u{width:91.6666666667%!important}.flush>.row>.\\31 0u{width:83.3333333333%!important}.flush>.row>.\\39 u{width:75%!important}.flush>.row>.\\38 u{width:66.6666666667%!important}.flush>.row>.\\37 u{width:58.3333333333%!important}.flush>.row>.\\36 u{width:50%!important}.flush>.row>.\\35 u{width:41.6666666667%!important}.flush>.row>.\\34 u{width:33.3333333333%!important}.flush>.row>.\\33 u{width:25%!important}.flush>.row>.\\32 u{width:16.6666666667%!important}.flush>.row>.\\31 u{width:8.3333333333%!important}.row.flush>.\\31 2u{width:100%!important}.row.flush>.\\31 1u{width:91.6666666667%!important}.row.flush>.\\31 0u{width:83.3333333333%!important}.row.flush>.\\39 u{width:75%!important}.row.flush>.\\38 u{width:66.6666666667%!important}.row.flush>.\\37 u{width:58.3333333333%!important}.row.flush>.\\36 u{width:50%!important}.row.flush>.\\35 u{width:41.6666666667%!important}.row.flush>.\\34 u{width:33.3333333333%!important}.row.flush>.\\33 u{width:25%!important}.row.flush>.\\32 u{width:16.6666666667%!important}.row.flush>.\\31 u{width:8.3333333333%!important}.row.flush>.\\31 u,.row.flush>.\\32 u,.row.flush>.\\33 u,.row.flush>.\\34 u,.row.flush>.\\35 u,.row.flush>.\\36 u,.row.flush>.\\37 u,.row.flush>.\\38 u,.row.flush>.\\39 u,.row.flush>.\\31 0u,.row.flush>.\\31 1u,.row.flush>.\\31 2u,.flush>.row>.\\31 u,.flush>.row>.\\32 u,.flush>.row>.\\33 u,.flush>.row>.\\34 u,.flush>.row>.\\35 u,.flush>.row>.\\36 u,.flush>.row>.\\37 u,.flush>.row>.\\38 u,.flush>.row>.\\39 u,.flush>.row>.\\31 0u,.flush>.row>.\\31 1u,.flush>.row>.\\31 2u{margin:0!important}",
            gR: ".row:after{content:'';display:block;clear:both;height:0}.row>:first-child{margin-left:0}.row:first-child>*{margin-top:0}.row:last-child>*{margin-bottom:0}",
            gCo: ":not(.persistent)>.row,.row:not(.persistent){overflow-x:hidden}:not(.persistent)>.row>.\\31 u,:not(.persistent)>.row>.\\32 u,:not(.persistent)>.row>.\\33 u,:not(.persistent)>.row>.\\34 u,:not(.persistent)>.row>.\\35 u,:not(.persistent)>.row>.\\36 u,:not(.persistent)>.row>.\\37 u,:not(.persistent)>.row>.\\38 u,:not(.persistent)>.row>.\\39 u,:not(.persistent)>.row>.\\31 0u,:not(.persistent)>.row>.\\31 1u,:not(.persistent)>.row>.\\31 2u,.row:not(.persistent)>.\\31 u,.row:not(.persistent)>.\\32 u,.row:not(.persistent)>.\\33 u,.row:not(.persistent)>.\\34 u,.row:not(.persistent)>.\\35 u,.row:not(.persistent)>.\\36 u,.row:not(.persistent)>.\\37 u,.row:not(.persistent)>.\\38 u,.row:not(.persistent)>.\\39 u,.row:not(.persistent)>.\\31 0u,.row:not(.persistent)>.\\31 1u,.row:not(.persistent)>.\\31 2u{float:none!important;width:100%!important;margin:1% 0 1% 0!important}:not(.persistent)>.row>:first-child,.row:not(.persistent)>:first-child{margin-top:0!important}:not(.persistent)>.row:last-child>:last-child,.row:not(.persistent):last-child>:last-child{margin-bottom:0!important}"
        },
        presets: {
            standard: {
                breakpoints: {
                    mobile: {
                        range: "-480",
                        lockViewport: !0,
                        containers: "fluid",
                        grid: {
                            collapse: !0
                        }
                    },
                    desktop: {
                        range: "481-",
                        containers: 1200
                    },
                    "1000px": {
                        range: "481-1200",
                        containers: 960
                    }
                }
            }
        },
        defaults: {
            breakpoint: {
                test: null,
                config: null,
                elements: null
            },
            config_breakpoint: {
                range: "",
                lockViewport: !1,
                hasStyleSheet: !0,
                grid: {}
            }
        },
        DOMReady: null,
        indexOf: null,
        extend: function (d, b) {
            for (var c in b) "object" == typeof b[c] ? ("object" != typeof d[c] && (d[c] = {}), a.extend(d[c], b[c])) : d[c] = b[c]
        },
        getViewportWidth: function () {
            var d, b;
            d = window.innerWidth || document.documentElement.clientWidth;
            b = window.orientation ? Math.abs(window.orientation) : !1;
            screen.width < d && (d = screen.width);
            !1 !== b && (d = a.config.useOrientation ? 90 === b ? screen.height : screen.width : screen.width > screen.height ? screen.height : screen.width);
            return d
        },
        isActive: function (d) {
            return -1 !== a.indexOf(a.stateId, "#" + d)
        },
        bind: function (d, b) {
            a.events[d] || (a.events[d] = []);
            a.events[d].push(b)
        },
        trigger: function (d) {
            if (a.events[d] && 0 != a.events[d].length)
                for (var b in a.events[d]) a.events[d][b]()
        },
        onStateChange: function (d) {
            a.bind("stateChange", d)
        },
        registerLocation: function (d, b) {
            a.locations[d] = b
        },
        cacheElement: function (d, b, c, f) {
            return a.cache.elements[d] = {
                id: d,
                object: b,
                location: c,
                priority: f
            }
        },
        cacheBreakpointElement: function (d, b, c, f, e) {
            var g = a.getCachedElement(b);
            g || (g = a.cacheElement(b, c, f, e));
            a.breakpoints[d] && a.breakpoints[d].elements.push(g);
            return g
        },
        getCachedElement: function (d) {
            return a.cache.elements[d] ? a.cache.elements[d] : null
        },
        detachAllElements: function () {
            var d, b;
            for (d in a.cache.elements)
                if (b = a.cache.elements[d].object, b.parentNode && (!b.parentNode || b.parentNode.tagName))
                    if (b.parentNode.removeChild(b), a.cache.elements[d].onDetach) a.cache.elements[d].onDetach()
        },
        attachElements: function (d) {
            var b = [],
                c = [],
                f, e;
            for (f in d) b[d[f].priority] || (b[d[f].priority] = []), b[d[f].priority].push(d[f]);
            for (f in b)
                if (0 != b[f].length)
                    for (e in b[f])
                        if (d = a.locations[b[f][e].location]) {
                            if (d.appendChild(b[f][e].object), b[f][e].onAttach) b[f][e].onAttach()
                        } else c.push(b[f][e]);
            0 < c.length && a.DOMReady(function () {
                for (var b in c)
                    if (a.locations[c[b].location].appendChild(c[b].object), c[b].onAttach) c[b].onAttach()
            })
        },
        poll: function () {
            var d, b, c = "";
            b = a.getViewportWidth();
            for (d in a.breakpoints) a.breakpoints[d].test(b) && (c += "#" + d);
            "" === c && (c = "#");
            c !== a.stateId && a.changeState(c)
        },
        updateState: function () {
            var d, b, c, f = [],
                e = a.stateId.substring(1).split("#");
            for (b in e)
                if (d = a.breakpoints[e[b]], 0 != d.elements.length)
                    for (c in d.elements) a.cache.states[a.stateId].elements.push(d.elements[c]), f.push(d.elements[c]);
            0 < f.length && a.attachElements(f)
        },
        changeState: function (d) {
            var b, c, f, e;
            a.stateId = d;
            if (a.cache.states[a.stateId]) e = a.cache.states[a.stateId];
            else {
                a.cache.states[a.stateId] = {
                    config: {},
                    elements: []
                };
                e = a.cache.states[a.stateId];
                d = "#" === a.stateId ? [] : a.stateId.substring(1).split("#");
                a.extend(e.config, a.defaults.config_breakpoint);
                for (b in d) a.extend(e.config, a.breakpoints[d[b]].config);
                if (a.config.boxModel) {
                    if (!(c = a.getCachedElement("iBM"))) c = a.cacheElement("iBM", a.newInline("*,*:before,*:after{-moz-@;-webkit-@;-o-@;-ms-@;@}".replace(/@/g, "box-sizing:" + a.config.boxModel + "-box")), "head", 3);
                    e.elements.push(c)
                }
                if (a.config.resetCSS) {
                    if (!(c = a.getCachedElement("iR"))) c = a.cacheElement("iR", a.newInline(a.css.r), "head", 2);
                    e.elements.push(c)
                } else if (a.config.normalizeCSS) {
                    if (!(c = a.getCachedElement("iN"))) c = a.cacheElement("iN", a.newInline(a.css.n), "head", 2);
                    e.elements.push(c)
                }
                if (a.config.prefix) {
                    if (!(c = a.getCachedElement("ssB"))) c = a.cacheElement("ssB", a.newStyleSheet(a.config.prefix + ".css"), "head", 4);
                    e.elements.push(c)
                }
                if (e.config.lockViewport) {
                    if (!(c = a.getCachedElement("mV"))) c = a.cacheElement("mV", a.newMeta("viewport", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"), "head", 1);
                    e.elements.push(c)
                }
                f = parseInt(e.config.containers);
                "string" == typeof e.config.containers && e.config.containers != f ? "%" == e.config.containers.charAt(e.config.containers.length - 1) ? (u = "%", f = Math.min(100, f)) : "px" == e.config.containers.substring(e.config.containers.length - 2) ? u = "px" : "fluid" == e.config.containers ? (u = "%", f = 100) : f = 0 : u = "px";
                0 == f && (f = 960, u = "px");
                if (!(c = a.getCachedElement("iC" + f + u))) c = a.cacheElement("iC" + f + u, a.newInline("." + (a.config.noConflict ? a.config.noConflictPrefix + "-" : "") + "container{width:" + f + u + " !important;margin: 0 auto;}"), "head", 3);
                e.elements.push(c);
                switch (e.config.grid.gutters) {
                case 0:
                    if (!(c = a.getCachedElement("iG0"))) c = a.cacheElement("iG0", a.newInline(a.css.g0 + a.css.gF), "head", 3);
                    e.elements.push(c);
                    break;
                case 1:
                    if (!(c = a.getCachedElement("iG1"))) c = a.cacheElement("iG1", a.newInline(a.css.g1 + a.css.gF), "head", 3);
                    e.elements.push(c);
                    break;
                case 4:
                    if (!(c = a.getCachedElement("iG4"))) c = a.cacheElement("iG4", a.newInline(a.css.g4 + a.css.gF), "head", 3);
                    e.elements.push(c);
                    break;
                case 6:
                    if (!(c = a.getCachedElement("iG6"))) c = a.cacheElement("iG6", a.newInline(a.css.g6 + a.css.gF), "head", 3);
                    e.elements.push(c);
                    break;
                default:
                    if (!(c = a.getCachedElement("iG2"))) c = a.cacheElement("iG2", a.newInline(a.css.g2 + a.css.gF), "head", 3);
                    e.elements.push(c)
                }
                if (e.config.grid.collapse) {
                    if (!(c = a.getCachedElement("iGCo"))) c = a.cacheElement("iGCo", a.newInline(a.css.gR + a.css.gCo), "head", 3)
                } else if (!(c = a.getCachedElement("iGNoCo"))) c = a.cacheElement("iGNoCo", a.newInline(a.css.gR), "head", 3);
                e.elements.push(c);
                if (!(c = a.getCachedElement("iCd" + a.stateId))) {
                    c = [];
                    f = [];
                    for (b in a.breakpoints) - 1 !== a.indexOf(d, b) ? c.push(".not-" + b) : f.push(".only-" + b);
                    c = (0 < c.length ? c.join(",") + "{display:none}" : "") + (0 < f.length ? f.join(",") + "{display:none}" : "");
                    c = a.cacheElement("icD" + a.stateId, a.newInline(c.replace(/\.([0-9])/, ".\\3$1 ")), "head", 3);
                    e.elements.push(c)
                }
                for (b in d) {
                    if (a.breakpoints[d[b]].config.hasStyleSheet && a.config.prefix) {
                        if (!(c = a.getCachedElement("ss" + d[b]))) c = a.cacheElement("ss" + d[b], a.newStyleSheet(a.config.prefix + "-" + d[b] + ".css"), "head", 5);
                        e.elements.push(c)
                    }
                    if (0 < a.breakpoints[d[b]].elements.length)
                        for (c in a.breakpoints[d[b]].elements) e.elements.push(a.breakpoints[d[b]].elements[c])
                }
            }
            a.detachAllElements();
            a.attachElements(e.elements);
            a.DOMReady(function () {
                var a, b;
                if ((a = document.getElementsByClassName("skel-cell-mainContent")) && 0 < a.length)
                    if (a = a[0], e.config.grid.collapse) b = document.createElement("div"), b.innerHTML = "", b.id = "skel-cell-mainContent-placeholder", a.parentNode.insertBefore(b, a.nextSibling), a.parentNode.insertBefore(a, a.parentNode.firstChild);
                    else if (b = document.getElementById("skel-cell-mainContent-placeholder")) a.parentNode.insertBefore(a, b), a.parentNode.removeChild(b)
            });
            a.trigger("stateChange")
        },
        newMeta: function (a, b) {
            var c = document.createElement("meta");
            c.name = a;
            c.content = b;
            return c
        },
        newStyleSheet: function (a) {
            var b = document.createElement("link");
            b.rel = "stylesheet";
            b.type = "text/css";
            b.href = a;
            return b
        },
        newInline: function (d) {
            var b;
            a.isLegacyIE ? (b = document.createElement("span"), b.innerHTML = '&nbsp;<style type="text/css">' + d + "</style>") : (b = document.createElement("style"), b.type = "text/css", b.innerHTML = d);
            return b
        },
        newDiv: function (a) {
            var b = document.createElement("div");
            b.innerHTML = a;
            return b
        },
        registerPlugin: function (d, b) {
            a.plugins[d] = b;
            b._ = this;
            a.initPluginConfig(d, b);
            b.init()
        },
        initPluginConfig: function (d, b) {
            var c;
            c = "_skel_" + d + "_config";
            window[c] ? c = window[c] : (c = document.getElementsByTagName("script"), (c = c[c.length - 1].innerHTML.replace(/^\s+|\s+$/g, "")) && (c = eval("(" + c + ")")));
            "object" == typeof c && (c.preset && b.presets[c.preset] && a.extend(b.config, b.presets[c.preset]), a.extend(b.config, c))
        },
        initConfig: function () {
            function d(b, d) {
                var f;
                "string" != typeof d && (f = function (a) {
                    return !1
                });
                "*" == d ? f = function (a) {
                    return !0
                } : "-" == d.charAt(0) ? (c[b] = parseInt(d.substring(1)), f = function (a) {
                    return a <= c[b]
                }) : "-" == d.charAt(d.length - 1) ? (c[b] = parseInt(d.substring(0, d.length - 1)), f = function (a) {
                    return a >= c[b]
                }) : -1 != a.indexOf(d, "-") ? (d = d.split("-"), c[b] = [parseInt(d[0]), parseInt(d[1])], f = function (a) {
                    return a >= c[b][0] && a <= c[b][1]
                }) : (c[b] = parseInt(d), f = function (a) {
                    return a == c[b]
                });
                return f
            }
            var b, c = [],
                f = [];
            window._skel_config ? b = window._skel_config : (b = document.getElementsByTagName("script"), (b = b[b.length - 1].innerHTML.replace(/^\s+|\s+$/g, "")) && (b = eval("(" + b + ")")));
            "object" == typeof b && (b.preset && a.presets[b.preset] ? (a.config.breakpoints = {}, a.extend(a.config, a.presets[b.preset])) : b.breakpoints && (a.config.breakpoints = {}), a.extend(a.config, b));
            a.extend(a.defaults.config_breakpoint.grid, a.config.grid);
            a.defaults.config_breakpoint.containers = a.config.containers;
            for (k in a.config.breakpoints) "object" != typeof a.config.breakpoints[k] && (a.config.breakpoints[k] = {
                range: a.config.breakpoints[k]
            }), b = {}, a.extend(b, a.defaults.config_breakpoint), a.extend(b, a.config.breakpoints[k]), a.config.breakpoints[k] = b, b = {}, a.extend(b, a.defaults.breakpoint), b.config = a.config.breakpoints[k], b.test = d(k, b.config.range), b.elements = [], a.breakpoints[k] = b, a.config.preloadStyleSheets && b.config.hasStyleSheet && f.push(a.newStyleSheet(a.config.prefix + "-" + k + ".css"));
            for (k in a.config.events) a.bind(k, a.config.events[k]);
            0 < f.length && a.DOMReady(function () {
                var a, b = document.getElementsByTagName("head")[0];
                for (a in f) b.appendChild(f[a]), b.removeChild(f[a])
            })
        },
        initEvents: function () {
            a.config.pollOnce || (window.onresize = function () {
                a.poll()
            }, a.config.useOrientation && (window.onorientationchange = function () {
                a.poll()
            }))
        },
        initNoConflict: function () {
            a.css.gF = a.css.gF.replace(/\.flush>\.row/g, "." + a.config.noConflictPrefix + "-flush>." + a.config.noConflictPrefix + "-row");
            a.css.gR = a.css.gR.replace(/\.row/g, "." + a.config.noConflictPrefix + "-row");
            a.css.gCo = a.css.gCo.replace(/:not\(\.persistent\)>\.row/g, ":not(." + a.config.noConflictPrefix + "-persistent)>." + a.config.noConflictPrefix + "-row")
        },
        init: function () {
            a.isLegacyIE = navigator.userAgent.match(/MSIE ([0-9]+)\./) && 8 >= RegExp.$1 ? !0 : !1;
            (function () {
                var b = window,
                    c = function (a) {
                        e = !1;
                        c.isReady = !1;
                        "function" === typeof a && g.push(a);
                        a = !1;
                        if (!e)
                            if (e = !0, "loading" !== d.readyState && l(), d.addEventListener) d.addEventListener("DOMContentLoaded", h, !1), b.addEventListener("load", h, !1);
                            else if (d.attachEvent) {
                            d.attachEvent("onreadystatechange", h);
                            b.attachEvent("onload", h);
                            try {
                                a = null == b.frameElement
                            } catch (n) {}
                            d.documentElement.doScroll && a && m()
                        }
                    }, d = b.document,
                    e = !1,
                    g = [],
                    h = function () {
                        d.addEventListener ? d.removeEventListener("DOMContentLoaded", h, !1) : d.detachEvent("onreadystatechange", h);
                        l()
                    }, l = function () {
                        if (!c.isReady) {
                            if (!d.body) return setTimeout(l, 1);
                            c.isReady = !0;
                            for (var a in g) g[a]();
                            g = []
                        }
                    }, m = function () {
                        if (!c.isReady) {
                            try {
                                d.documentElement.doScroll("left")
                            } catch (a) {
                                setTimeout(m, 1);
                                return
                            }
                            l()
                        }
                    };
                c.isReady = !1;
                a.DOMReady = c
            })();
            var d = document;
            d.getElementsByClassName || (d.getElementsByClassName = function (a) {
                return d.querySelectorAll ? d.querySelectorAll(("." + a.replace(" ", " .")).replace(/\.([0-9])/, ".\\3$1 ")) : []
            });
            a.indexOf = Array.prototype.indexOf ? function (a, c) {
                return a.indexOf(c)
            } : function (a, c) {
                "string" == typeof a && (a = a.split(""));
                var d = a.length >>> 0,
                    e = Number(c) || 0,
                    e = 0 > e ? Math.ceil(e) : Math.floor(e);
                for (0 > e && (e += d); e < d; e++)
                    if (a instanceof Array && e in a && a[e] === c) return e;
                return -1
            };
            a.initConfig();
            a.config.noConflict && a.initNoConflict();
            a.registerLocation("head", document.getElementsByTagName("head")[0]);
            a.DOMReady(function () {
                a.registerLocation("body", document.getElementsByTagName("body")[0])
            });
            a.initEvents();
            a.poll()
        }
    };
    a.init();
    return a
}();