webpackJsonp([4],{111:function(t,e,a){"use strict";e.a={name:"Demo",data:function(){return{selected:{province:"350000",city:"350100",area:"350104",town:"350104008"},btnText:"please select",selectResult:{}}},methods:{regionChange:function(t){console.log(t),this.btnText=t.province||t.city||t.area||t.town?(""+this.getValue(t.province)+this.getValue(t.city)+this.getValue(t.area)+this.getValue(t.town)).trim():"请选择"},getValue:function(t){return t?t.value:""},selectLogs:function(t){t&&(this.selectResult=t)}},mounted:function(){SyntaxHighlighter.highlight()}}},139:function(t,e,a){var n=a(140);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(3)("d80dfb00",n,!0,{})},140:function(t,e,a){e=t.exports=a(2)(!1),e.push([t.i,".info-box[data-v-58ade0d9]{background-color:#f5f5f5;border:0;border-radius:4px;padding:10px}",""])},141:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),a("pre",{staticClass:"brush:bash"},[t._v("        npm i v-region --save\n    ")]),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vRegion from 'v-region';\n        Vue.use(vRegion);\n    ")]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),a("p",[t._v("template")]),t._v(" "),a("script",{staticClass:"brush:js",attrs:{type:"syntaxhighlighter"}},[t._v('\n    <![CDATA[\n        <template>\n            <v-region @values="regionChange" class="form-control"></v-region>\n        </template>\n    ]]>\n    ')]),t._v(" "),a("p",[t._v("script")]),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("    export default {\n        methods:{\n            //receive selected region data\n            regionChange(data){\n                console.log(data);\n            }\n        }\n    };\n    ")]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.example"}}),t._v(" "),a("small",[a("i18n",{attrs:{path:"region.demo.desc"}})],1)],1),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.province"}})],1),t._v(" "),a("v-region",{staticClass:"form-control",attrs:{city:!1,area:!1}}),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :city="false" :area="false" class="form-control"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.city"}})],1),t._v(" "),a("v-region",{staticClass:"form-control",attrs:{area:!1}}),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :area="false" class="form-control"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.city"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.area"}})],1),t._v(" "),a("v-region",{staticClass:"form-control"}),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region class="form-control"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.city"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.area"}}),t._v("、"),a("i18n",{attrs:{path:"region.demo.town"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"region.demo.selected"}}),t._v(": ")],1),t._v(" "),a("pre",{staticStyle:{border:"0"}},[t._v(t._s(JSON.stringify(t.selectResult,null,4)))]),t._v(" "),a("v-region",{staticClass:"form-control",attrs:{town:!0},on:{values:t.selectLogs}}),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :town="true" @values="selectLogs" class="form-control"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.init"}})],1),t._v(" "),a("v-region",{staticClass:"form-control",attrs:{town:!0,selected:t.selected}}),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :town="true" :selected="selected" class="form-control"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.text"}})],1),t._v(" "),a("p",{staticClass:"info-box"},[a("v-region",{attrs:{town:!0,text:!0,selected:t.selected}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :town="true" :text="true" :selected="selected"></v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"region.demo.dropdown"}}),t._v(" "),a("small",[a("a",{attrs:{href:"https://codepen.io/terry05/pen/ERNvzJ",target:"_blank"}},[a("i18n",{attrs:{path:"common.codePen"}})],1)])],1),t._v(" "),a("v-region",{staticClass:"form-control",attrs:{town:!0,ui:!0},on:{values:t.regionChange}},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v("\n            "+t._s(t.btnText)+" "),a("i",{staticClass:"fa fa-fw fa-caret-down"})])]),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-region :town="true" :ui="true" @values="regionChange" class="form-control">\n            <button type="button" class="btn btn-default">\n                ｛｛btnText｝｝ <i class="fa fa-fw fa-caret-down"></i>\n            </button>\n        </v-region>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blank")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.blank"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("city")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.city"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("area")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.area"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("town")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.town"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("ui")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.ui"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.search"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("selected")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.selected"}}),a("br"),t._v(" "),t._m(0),t._v(" "),a("i18n",{attrs:{path:"common.example"}}),t._v(": "),a("br"),t._v(" "),a("code",[t._v("{province:'350000',city:'350100',area:'350103',town:'350103012'}")])],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.option.text"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])])])]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.events"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.param"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("values")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"region.event.values"}})],1),t._v(" "),t._m(1)])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("province")]),t._v(" province code")]),t._v(" "),a("li",[a("code",[t._v("city")]),t._v(" city code")]),t._v(" "),a("li",[a("code",[t._v("area")]),t._v(" area code")]),t._v(" "),a("li",[a("code",[t._v("town")]),t._v(" town code")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("pre",{staticClass:"brush:js"},[t._v("                    {\n                        province:{key:'',value:''},\n                        city:{key:'',value:''},\n                        area:{key:'',value:''},\n                        town:{key:'',value:''}\n                    }\n                ")])])}],r={render:n,staticRenderFns:s};e.a=r},96:function(t,e,a){"use strict";function n(t){a(139)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(111),r=a(141),o=a(1),i=n,v=o(s.a,r.a,!1,i,"data-v-58ade0d9",null);e.default=v.exports}});
//# sourceMappingURL=4.build.js.map