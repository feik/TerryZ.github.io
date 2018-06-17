webpackJsonp([6],{56:function(t,e,a){"use strict";function n(t){a(88)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(67),o=a(90),r=a(0),s=n,p=r(i.a,o.a,!1,s,"data-v-1b436ebc",null);e.default=p.exports},67:function(t,e,a){"use strict";e.a={data:function(){for(var t=[],e=0;e<108;e++)t.push(e+1);return{page:{totalRow:21,language:"en",align:"center"},pagePhoto:{totalRow:t.length,language:"en",align:"center"},noInfo:{totalRow:100,align:"left",language:"en",info:!1},noLengthMenu:{totalRow:100,align:"left",language:"en",pageSizeMenu:!1},mini:{totalRow:100,align:"left",info:!1,language:"en",pageSizeMenu:!1},pageMsg:[],arr:t,pageArr:[]}},methods:{pageChange:function(t){this.pageMsg.push(t)},pagePhotoChange:function(t){this.pageArr.splice(0,this.pageArr.length);var e=0,a=0;e=t.pageSize*(t.pageNumber-1),(a=e+t.pageSize)>this.arr.length&&(a=this.arr.length);for(var n=e;n<a;n++)this.pageArr.push(this.arr[n])}},mounted:function(){SyntaxHighlighter.highlight()}}},88:function(t,e,a){var n=a(89);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(2)("0e2d774b",n,!0,{})},89:function(t,e,a){e=t.exports=a(1)(!1),e.push([t.i,"div.photo-wall div.brick[data-v-1b436ebc]{border:1px solid #ddd;border-radius:2px;background-color:#f4f4f4;text-align:center;line-height:100%;float:left;margin:0 10px 10px 0;width:180px;height:130px;font-size:60px;color:#bbb;padding-top:35px}",""])},90:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),a("pre",{staticClass:"brush:bash"},[t._v("            npm i v-page --save\n        ")]),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("            import Vue from 'vue'\n            import vPage from 'v-page';\n            Vue.use(vPage);\n        ")]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),a("p",[t._v("template")]),t._v(" "),a("script",{staticClass:"brush:js",attrs:{type:"syntaxhighlighter"}},[t._v("\n        <![CDATA[\n            <template>\n              \x3c!-- v-bind 'setting' data to config page bar --\x3e\n              \x3c!-- bind event 'page-change' to receive page info change --\x3e\n              <v-page :setting=\"pageSet\" @page-change=\"pageChange\"></v-page>\n            </template>\n        ]]>\n        ")]),t._v(" "),a("p",[t._v("script")]),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("export default {\n    data(){\n        return {\n            pageSet: {\n                totalRow: 0,//required option\n                language: 'en',//default: 'cn'\n                pageSizeMenu: [20,100]//default: [10, 20, 50, 100]\n            }\n        }\n    },\n    methods:{\n        //receive page info change callback\n        pageChange(pInfo){\n            let that = this;\n            console.log(pInfo);//{pageNumber: 1, pageSize: 10}\n            //for example, do some http request, get new data and update totalRow property\n            axios({\n            ...\n            }).then(function(resp){\n                that.totalRow = resp.totalRow;\n            });\n        }\n    }\n};\n        ")]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.example"}})],1),t._v(" "),a("v-page",{attrs:{setting:t.page},on:{"page-change":t.pageChange}}),t._v(" "),a("div",{staticClass:"row text-center"},[a("h3",[a("i18n",{attrs:{path:"page.demo.pageChangeLogs"}})],1),t._v(" "),t._l(t.pageMsg,function(e){return a("div",[t._v(t._s(e))])})],2),t._v(" "),a("h3",[a("i18n",{attrs:{path:"page.demo.gallery"}}),t._v(" "),a("small",[a("a",{attrs:{href:"https://codepen.io/terry05/pen/yjZYLR",target:"_blank"}},[a("i18n",{attrs:{path:"common.codePen"}})],1)])],1),t._v(" "),a("div",{staticClass:"photo-wall"},t._l(t.pageArr,function(e){return a("div",{staticClass:"brick",domProps:{innerHTML:t._s(e)}})})),t._v(" "),a("v-page",{attrs:{setting:t.pagePhoto},on:{"page-change":t.pagePhotoChange}}),a("br"),t._v(" "),a("h3",[a("i18n",{attrs:{path:"page.demo.noLength"}})],1),a("br"),t._v(" "),a("v-page",{attrs:{setting:t.noLengthMenu}}),a("br"),t._v(" "),a("h3",[a("i18n",{attrs:{path:"page.demo.noPageInfo"}})],1),a("br"),t._v(" "),a("v-page",{attrs:{setting:t.noInfo}}),a("br"),t._v(" "),a("h3",[a("i18n",{attrs:{path:"page.demo.mini"}})],1),a("br"),t._v(" "),a("v-page",{attrs:{setting:t.mini}}),a("br"),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("totalRow")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.option.totalRow"}})],1),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("info")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.option.info"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("language")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.option.language"}}),t._v(" "),t._m(0)],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("'cn'")])]),t._v(" "),a("tr",[a("td",[t._v("pageSizeMenu")]),t._v(" "),a("td",[t._v("Array|boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.option.pageSizeMenu"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("[10, 20, 50, 100]")])]),t._v(" "),a("tr",[a("td",[t._v("align")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.option.align"}}),t._v(" "),t._m(1)],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("'right'")])])])]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.events"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.optionalPayload"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("page-change")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.event.pChange"}})],1),t._v(" "),a("td",[a("ul",[a("li",[a("code",[t._v("pageNumber")]),a("br"),a("i18n",{attrs:{path:"page.event.pageNumber"}})],1),t._v(" "),a("li",[a("code",[t._v("pageSize")]),a("br"),a("i18n",{attrs:{path:"page.event.pageSize"}})],1)])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("'cn'")])]),t._v(" "),a("li",[a("code",[t._v("'en'")])]),t._v(" "),a("li",[a("code",[t._v("'jp'")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("'left'")])]),t._v(" "),a("li",[a("code",[t._v("'center'")])]),t._v(" "),a("li",[a("code",[t._v("'right'")])])])}],o={render:n,staticRenderFns:i};e.a=o}});
//# sourceMappingURL=6.build.js.map