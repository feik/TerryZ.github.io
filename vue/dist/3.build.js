webpackJsonp([3],{109:function(t,e,a){"use strict";e.a={name:"Demo",data:function(){return{btnText:"please select",selectResult:{},singleValue:null,multipleValue:null,selected:"7",renderRow:function(t){var e="";return t&&Object.keys(t).length&&(e="[<b>"+(t.id<10?"0"+t.id:t.id)+"</b>] - "+t.name+" ("+t.desc+")"),e},showFields:[{title:"id",data:"id"},{title:"name",data:"name"},{title:"desc",data:"desc"}],tmpData:[],sample:[{id:1,name:"Chicago Bulls",desc:"芝加哥公牛"},{id:2,name:"Cleveland Cavaliers",desc:"克里夫兰骑士"},{id:3,name:"Detroit Pistons",desc:"底特律活塞"},{id:4,name:"Indiana Pacers",desc:"印第安纳步行者"},{id:5,name:"Milwaukee Bucks",desc:"密尔沃基雄鹿"},{id:6,name:"Brooklyn Nets",desc:"布鲁克林篮网"},{id:7,name:"Boston Celtics",desc:"波士顿凯尔特人"},{id:8,name:"New York Knicks",desc:"纽约尼克斯"},{id:9,name:"Philadelphia 76ers",desc:"费城76人"},{id:10,name:"Toronto Raptors",desc:"多伦多猛龙"},{id:11,name:"Atlanta Hawks",desc:"亚特兰大老鹰"},{id:12,name:"Charlotte Hornets",desc:"夏洛特黄蜂"},{id:13,name:"Miami Heat",desc:"迈阿密热火"},{id:14,name:"Orlando Magic",desc:"奥兰多魔术"},{id:15,name:"Washington Wizards",desc:"华盛顿奇才"},{id:16,name:"Denver Nuggets",desc:"丹佛掘金"},{id:17,name:"Minnesota Timberwolves",desc:"明尼苏达森林狼"},{id:18,name:"Oklahoma City Thunder",desc:"俄克拉荷马雷霆"},{id:19,name:"Portland Trail Blazers",desc:"波特兰开拓者"},{id:20,name:"Utah Jazz",desc:"犹他爵士"},{id:21,name:"Golden State Warriors",desc:"金州勇士"},{id:22,name:"Los Angeles Clippers",desc:"洛杉矶快船"},{id:23,name:"Los Angeles Lakers",desc:"洛杉矶湖人"},{id:24,name:"Phoenix Suns",desc:"菲尼克斯太阳"},{id:25,name:"Sacramento Kings",desc:"萨克拉门托国王"},{id:26,name:"Dallas Mavericks",desc:"达拉斯小牛"},{id:27,name:"Houston Rockets",desc:"休斯顿火箭"},{id:28,name:"Memphis Grizzlies",desc:"孟菲斯灰熊"},{id:29,name:"New Orleans Pelicans",desc:"新奥尔良鹈鹕"},{id:30,name:"San Antonio Spurs",desc:"圣安东尼奥马刺"}],sample1:[{id:1,name:"The People's Republic of China",desc:"中华人民共和国"},{id:2,name:"United States of America",desc:"美利坚合众国"},{id:3,name:"United Kingdom of Great Britain and Northern Ireland",desc:"大不列颠及北爱尔兰联合王国"},{id:4,name:"Japan",desc:"日本"},{id:5,name:"Russian Federation",desc:"俄罗斯联邦"},{id:6,name:"The Federal Republic of Germany",desc:"德意志联邦共和国"},{id:7,name:"French Republic",desc:"法兰西共和国"},{id:8,name:"The Kingdom of Spain",desc:"西班牙王国"},{id:9,name:"Republic of India",desc:"印度共和国"},{id:10,name:"Repubblica Italiana",desc:"意大利共和国"},{id:11,name:"Canada",desc:"加拿大"},{id:12,name:"The Republic of Argentina",desc:"阿根廷共和国"},{id:13,name:"The Kingdom of Sweden",desc:"瑞典王国"},{id:14,name:"The Kingdom of Norway",desc:"挪威王国"},{id:15,name:"The Czech Republic",desc:"捷克共和国"}]}},methods:{regionChange:function(t){console.log(t),this.btnText=t.province||t.city||t.area||t.town?(""+this.getValue(t.province)+this.getValue(t.city)+this.getValue(t.area)+this.getValue(t.town)).trim():"请选择"},getValue:function(t){return t?t.value:""},selectLogs:function(t){t&&(this.selectResult=t)},singleValues:function(t){this.singleValue=t},multipleValues:function(t){this.multipleValue=t},resultFormat:function(t){if(t&&t.data){var e=JSON.parse(t.config.data);if(-1!==Object.keys(e).findIndex(function(t){return"searchKey"===t})){var a=t.data.values.gridResult.list,s=a.find(function(t){return String(t[e.searchKey])===e.searchValue});return{totalRow:t.data.values.totalRow,list:[s]}}return t.data.values.gridResult}}},mounted:function(){SyntaxHighlighter.highlight(),this.tmpData=this.sample}}},138:function(t,e,a){var s=a(139);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(3)("0e12dadf",s,!0,{})},139:function(t,e,a){e=t.exports=a(2)(!1),e.push([t.i,".info-box[data-v-3557864b]{background-color:#f5f5f5;border:0;border-radius:4px;padding:10px}",""])},140:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),a("pre",{staticClass:"brush:bash"},[t._v("        npm i v-selectpage --save\n    ")]),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vSelectPage from 'v-selectpage';\n        Vue.use(vSelectPage, {\n            dataLoad: function(vue, data, params){\n                ...\n            }\n        });\n    ")]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-body"},[a("i18n",{attrs:{path:"selectpage.config"}}),t._v(" "),t._m(0)],1)]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),a("p",[t._v("template")]),t._v(" "),a("script",{staticClass:"brush:html",attrs:{type:"syntaxhighlighter"}},[t._v('\n    <![CDATA[\n        <template>\n            <v-selectpage :data="list" key-field="id" show-field="name" class="form-control">\n            </v-selectpage>\n        </template>\n    ]]>\n    ')]),t._v(" "),a("p",[t._v("script")]),t._v(" "),a("pre",{staticClass:"brush:js"},[t._v("    export default {\n        data(){\n            return {\n                list: [\n                    {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},\n                    {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},\n                    {...}\n                ]\n            }\n        }\n    };\n    ")]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.example"}}),t._v(" "),a("small",[a("i18n",{attrs:{path:"selectpage.demo.desc"}})],1)],1),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.single"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.selectedResults"}})],1),t._v(" "),a("pre",{staticStyle:{border:"0"}},[t._v(t._s(JSON.stringify(t.singleValue,null,4)))]),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.sample,sort:"name desc"},on:{values:t.singleValues}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-selectpage class="form-control" :data="sample" sort="name desc" @values="singleValues">\n        </v-selectpage>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.custom"}})],1),t._v(" "),a("p",[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.$refs.selectpage2.$emit("disabled",!0)}}},[a("i18n",{attrs:{path:"selectpage.demo.btnDisabled"}})],1),t._v(" "),a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.$refs.selectpage2.$emit("disabled",!1)}}},[a("i18n",{attrs:{path:"selectpage.demo.btnEnabled"}})],1)]),t._v(" "),a("p",[a("v-selectpage",{ref:"selectpage2",staticClass:"form-control",attrs:{data:t.sample,"show-field":t.renderRow}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        \x3c!-- control buttons --\x3e\n        <button type="button" @click="$refs.selectpage2.$emit(\'disabled\',true);">Disabled</button>\n        <button type="button" @click="$refs.selectpage2.$emit(\'disabled\',false);">Enabled</button>\n\n        <v-selectpage class="form-control" :data="sample" :show-field="renderRow" ref="selectpage2">\n        </v-selectpage>\n\n        < script >\n        export default {\n            data(){\n                return {\n                    renderRow(row){\n                        let result = \'\';\n                        if(row && Object.keys(row).length)\n                            result = `[<b>${row.id<10?\'0\'+row.id:row.id}</b>] - ${row.name} (${row.desc})`;\n                        return result;\n                    }\n                };\n            }\n        };\n        < /script >\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.nopage"}})],1),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.sample,pagination:!1}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-selectpage class="form-control" :data="sample" :pagination="false" >\n        </v-selectpage>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.modify"}})],1),t._v(" "),a("p",[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.selected="22"}}},[a("i18n",{attrs:{path:"selectpage.demo.btnModify"}})],1)]),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.sample,selected:t.selected}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <button type="button" @click="selected=\'22\'">Modify</button>\n\n        \x3c!-- init by {selected: \'7\'} --\x3e\n        <v-selectpage class="form-control" :data="sample" :selected="selected" ></v-selectpage>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.multiple"}}),t._v(" "),a("small",[a("a",{attrs:{href:"https://codepen.io/terry05/pen/wXNKOK",target:"_blank"}},[a("i18n",{attrs:{path:"common.codePen"}})],1)])],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"common.selectedResults"}})],1),t._v(" "),a("pre",{staticStyle:{border:"0"}},[t._v(t._s(JSON.stringify(t.multipleValue,null,4)))]),t._v(" "),a("p",[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.tmpData=t.sample1.concat()}}},[a("i18n",{attrs:{path:"selectpage.demo.btnChange"}})],1)]),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.tmpData,multiple:!0,"max-select-limit":3,selected:"3,5,7"},on:{values:t.multipleValues}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <button type="button" @click="tmpData=sample1.concat()">Change data source</button>\n\n        <v-selectpage class="form-control"\n                      :data="tmpData"\n                      :multiple="true"\n                      :max-select-limit="3"\n                      selected="3,5,7"\n                      @values="multipleValues" >\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.tbSingle"}})],1),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.sample1,"tb-columns":t.showFields}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n        <![CDATA[\n        <v-selectpage class=\"form-control\" :data=\"sample1\" :tb-columns=\"showFields\">\n        </v-selectpage>\n\n        < script >\n        export default {\n            data(){\n                return {\n                    sample1: [\n                        {id:1 ,name:'The People\\'s Republic of China',desc:'中华人民共和国'},\n                        {id:2 ,name:'United States of America',desc:'美利坚合众国'},\n                        {...}\n                    ],\n                    showFields:[\n                        {title: 'id',data: 'id'},\n                        {title: 'name',data: 'name'},\n                        {title: 'desc',data: 'desc'},\n                    ]\n                }\n            }\n        };\n        < /script >\n        ]]>\n        ")])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.tbMultiple"}})],1),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:t.sample1,multiple:!0,"tb-columns":t.showFields}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-selectpage class="form-control" :data="sample1" :multiple="true" :tb-columns="showFields">\n        </v-selectpage>\n        ]]>\n        ')])]),t._v(" "),a("br"),t._v(" "),a("h4",[a("i18n",{attrs:{path:"selectpage.demo.server"}})],1),t._v(" "),a("p",[a("i18n",{attrs:{path:"selectpage.demo.serverResponse"}}),t._v(":\n        "),a("a",{attrs:{href:"http://www.mocky.io/v2/5b3777a72e0000570036c7a5",target:"_blank"}},[t._v("Server Response")])],1),t._v(" "),a("p",[a("v-selectpage",{staticClass:"form-control",attrs:{data:"www.mocky.io/v2/5b3777a72e0000570036c7a5","key-field":"id","show-field":"name","search-field":"userName",selected:"1","result-format":t.resultFormat}})],1),t._v(" "),a("showcode",[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n        <![CDATA[\n        <v-selectpage class=\"form-control\"\n                      data=\"http://yourserver/load\"\n                      key-field=\"id\"\n                      show-field=\"name\"\n                      search-field=\"userName\"\n                      selected=\"1\"\n                      :result-format=\"resultFormat\">\n        </v-selectpage>\n\n        < script >\n        export default {\n            data(){\n                return {\n                    sample1: [\n                        {id:1 ,name:'The People\\'s Republic of China',desc:'中华人民共和国'},\n                        {id:2 ,name:'United States of America',desc:'美利坚合众国'},\n                        {...}\n                    ],\n                    showFields:[\n                        {title: 'id',data: 'id'},\n                        {title: 'name',data: 'name'},\n                        {title: 'desc',data: 'desc'},\n                    ]\n                }\n            },\n            methods: {\n                resultFormat(resp){\n                    if(resp && resp.data) return resp.data.values.gridResult;\n                }\n            }\n        };\n        < /script >\n        ]]>\n        ")])]),t._v(" "),a("br"),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("Array|String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.data"}})],1),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("key-field")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.keyField"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("id")])]),t._v(" "),a("tr",[a("td",[t._v("show-field")]),t._v(" "),a("td",[t._v("String|Function")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.showField"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("name")])]),t._v(" "),a("tr",[a("td",[t._v("tb-columns")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.tbColumns"}}),t._v(" "),a("pre",{staticClass:"brush:js;gutter: false;"},[t._v("                    [\n                        { title: 'id',data: 'id' },\n                        { title: 'name',data: 'name' },\n                        { title: 'desc',data: function(row){\n                            return row.name + ' ' +row.desc;\n                        }},\n                    ]\n                    ")])],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("sort")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.sort"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("search-field")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.searchField"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("params")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.params"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("result-format")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.resultFormat"}}),t._v(" "),a("pre",{staticClass:"brush:js;gutter: false;"},[t._v("                    {\n                        totalRow: 100,\n                        list:[\n                            {...},\n                            {...},\n                            {...}\n                        ]\n                    }\n                    ")])],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("selected")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.selected"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.title"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("SelectPage")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.placeholder"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("multiple")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.multiple"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("language")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"common.lang.desc"}}),a("br"),t._v(" "),a("ul",[a("li",[a("code",[t._v("cn")]),t._v(" "),a("i18n",{attrs:{path:"common.lang.cn"}})],1),t._v(" "),a("li",[a("code",[t._v("en")]),t._v(" "),a("i18n",{attrs:{path:"common.lang.en"}})],1),t._v(" "),a("li",[a("code",[t._v("jp")]),t._v(" "),a("i18n",{attrs:{path:"common.lang.jp"}})],1)])],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("cn")])]),t._v(" "),a("tr",[a("td",[t._v("page-size")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"page.event.pageSize"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("max-select-limit")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.maxSelectLimit"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("pagination")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.option.pagination"}})],1),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])])])]),t._v(" "),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.events"}})],1),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.param"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("values")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.event.values"}})],1),t._v(" "),a("td",[t._v("Array")])]),t._v(" "),a("tr",[a("td",[t._v("removed")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.event.removed"}})],1),t._v(" "),a("td",[t._v("Array")])])])]),t._v(" "),a("h2",{staticClass:"page-header"},[t._v("API")]),t._v(" "),a("p",[a("i18n",{attrs:{path:"selectpage.api.desc"}})],1),t._v(" "),a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n    <![CDATA[\n        <v-selectpage :data="data" ref="sp" >\n\n        //call api\n        this.$refs.sp.$emit(\'disabled\', true);\n    ]]>\n    ')]),t._v(" "),a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.param"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.api.disabled"}})],1)]),t._v(" "),a("tr",[a("td",[t._v("clear")]),t._v(" "),a("td"),t._v(" "),a("td",[a("i18n",{attrs:{path:"selectpage.api.clear"}})],1)])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("title")]),t._v(" "),a("li",[t._v("language")]),t._v(" "),a("li",[t._v("placeholder")]),t._v(" "),a("li",[t._v("pageSize")]),t._v(" "),a("li",[t._v("dataLoad")])])}],l={render:s,staticRenderFns:n};e.a=l},96:function(t,e,a){"use strict";function s(t){a(138)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(109),l=a(140),i=a(1),r=s,d=i(n.a,l.a,!1,r,"data-v-3557864b",null);e.default=d.exports}});
//# sourceMappingURL=3.build.js.map