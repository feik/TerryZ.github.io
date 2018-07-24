webpackJsonp([1],{116:function(t,a,e){"use strict";var s=e(142);a.a={name:"Demo",data:function(){return{alertType:"info",position:"bottomRight",toastType:"info",code:{modal:!1,alert:!1,mask:!1,toast:!1}}},methods:{callModal:function(){var t=this;this.$vDialog.modal(s.a,{width:400,height:250,title:"vDialog Modal",callback:function(a){t.$vDialog.alert("received message: <b>"+a.item+"</b>")},params:{pluginName:"this plugin name is v-dialogs"}})},callAlert:function(){this.$vDialog.alert("This is a Alert dialog, messageType is "+this.alertType,null,{messageType:this.alertType,language:"en"})},callMask:function(){this.$vDialog.mask(null,null,{language:"en",closeTime:3})},callToast:function(){var t=this;this.$vDialog.toast("This is a Toast dialog, messageType is "+this.toastType,null,{messageType:t.toastType,language:"en",closeTime:3,position:t.position})}},mounted:function(){SyntaxHighlighter.highlight()}}},117:function(t,a,e){"use strict";a.a={name:"Modal",props:["params"],data:function(){return{item:"Modal"}},methods:{ok:function(){var t=this;this.$vDialog.close({item:t.item})}}}},140:function(t,a,e){var s=e(141);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(3)("fddec09e",s,!0,{})},141:function(t,a,e){a=t.exports=e(2)(!1),a.push([t.i,"",""])},142:function(t,a,e){"use strict";var s=e(117),o=e(143),n=e(1),i=n(s.a,o.a,!1,null,null,null);a.a=i.exports},143:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"10px"}},[e("p",[t._v("received data: "),e("strong",[t._v(t._s(t.params.pluginName))])]),t._v(" "),e("p",{staticClass:"text-info"},[t._v("select a item to return")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.item=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"Modal"}},[t._v("Modal")]),t._v(" "),e("option",{attrs:{value:"Alert"}},[t._v("Alert")]),t._v(" "),e("option",{attrs:{value:"Mask"}},[t._v("Mask")]),t._v(" "),e("option",{attrs:{value:"Toast"}},[t._v("Toast")])]),t._v(" "),e("p",{staticClass:"pull-right",staticStyle:{"margin-top":"20px"}},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.ok}},[e("i",{staticClass:"fa fa-fw fa-check"}),t._v(" OK")])])])},o=[],n={render:s,staticRenderFns:o};a.a=n},144:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),e("pre",{staticClass:"brush:bash"},[t._v("        npm i v-dialogs --save\n    ")]),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),e("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vDialogs from 'v-dialogs';\n        Vue.use(vDialogs);\n    ")]),t._v(" "),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"dialog.iconTitle"}})],1),t._v(" "),e("p",[e("i18n",{attrs:{path:"dialog.alertIcon"}}),t._v(" "),e("a",{attrs:{href:"http://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free",target:"_blank"}},[t._v("Elegant Themes")])],1),t._v(" "),e("p",[e("i18n",{attrs:{path:"dialog.toastIcon"}}),t._v(" "),e("a",{attrs:{href:"http://www.iconfont.cn",target:"_blank"}},[t._v("IconFont")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.example"}})],1),t._v(" "),e("h4",[t._v("Modal "),e("small",[e("i18n",{attrs:{path:"dialog.demo.modelTitle"}})],1)]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"brush:js"},[t._v("            this.$vDialog.modal(component, options);\n            ")]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.callModal}},[e("i",{staticClass:"fa fa-fw fa-window-maximize"}),t._v(" Open Modal")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.code.modal=!t.code.modal}}},[e("i",{staticClass:"fa fa-fw fa-code"}),t._v(" "),e("i18n",{attrs:{path:"common.showHideCode"}})],1)])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.code.modal,expression:"code.modal"}]},[e("pre",{staticClass:"brush:js"},[t._v("        import myComponent from './myComponent.vue';\n\n        export default {\n            methods: {\n                newUser(){\n                    //open the new user form in Modal\n                    this.$vDialog.modal(myComponent);\n                }\n            }\n        }\n    ")]),t._v(" "),e("h4",[t._v("other practical use case for Modal")]),t._v(" "),e("pre",{staticClass:"brush:js"},[t._v("        //parent component\n        import myComponent from './myComponent.vue';\n        export default {\n            methods: {\n                save(){\n                    this.$vDialog.modal(myComponent, {\n                        width: 500,\n                        height: 450,\n                        messageType: 'success',\n                        //when inner component call $vDialog.close({data}) to close modal\n                        //callback will receive the return data\n                        callback: function(data){\n                            console.log(data);//{userFullName: 'TerryZeng'}\n                        }\n                        //send params to inner component\n                        params: {\n                            userName: 'Terry'\n                        }\n                    });\n                }\n            }\n        };\n\n        //the myComponent.vue\n        export default {\n            props: ['params'],//receive parent parameters\n            methods: {\n                save(){\n                    console.log(this.params.userName);//Terry\n                    let that = this;\n                    this.$vDialog.alert('user info save success', function(){\n                        //close modal and return data\n                        this.$vDialog.close({ userFullName: that.params.userName + 'Zeng'});\n                    }, {messageType: 'success'});\n                }\n            }\n        };\n    ")])]),t._v(" "),e("br"),t._v(" "),e("h4",[t._v("Alert "),e("small",[e("i18n",{attrs:{path:"dialog.demo.alertTitle"}})],1)]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"brush:js"},[t._v("            //the message is support HTML code in Alert, Mask, Toast mode\n            this.$vDialog.alert(message, callback, options);\n            ")]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.alertType,expression:"alertType"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alertType=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"info"}},[t._v("info")]),t._v(" "),e("option",{attrs:{value:"warning"}},[t._v("warning")]),t._v(" "),e("option",{attrs:{value:"error"}},[t._v("error")]),t._v(" "),e("option",{attrs:{value:"success"}},[t._v("success")]),t._v(" "),e("option",{attrs:{value:"confirm"}},[t._v("confirm")])])]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.callAlert}},[e("i",{staticClass:"fa fa-fw fa-warning"}),t._v(" Open Alert")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.code.alert=!t.code.alert}}},[e("i",{staticClass:"fa fa-fw fa-code"}),t._v(" "),e("i18n",{attrs:{path:"common.showHideCode"}})],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.code.alert,expression:"code.alert"}]},[e("pre",{staticClass:"brush:js"},[t._v("        export default {\n            methods: {\n                save(){\n                    this.$vDialog.alert('form data save < b>success< /b>!', function(){\n                        //dialog close callback\n                    }, {\n                        messageType: 'success',\n                        language: 'en'\n                    });\n                }\n            }\n        }\n    ")])]),t._v(" "),e("br"),t._v(" "),e("h4",[t._v("Mask "),e("small",[e("i18n",{attrs:{path:"dialog.demo.maskTitle"}})],1)]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"brush:js"},[t._v("            this.$vDialog.modal(message, callback, options);\n            ")]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.callMask}},[e("i",{staticClass:"fa fa-fw fa-object-ungroup"}),t._v(" Open mask")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.code.mask=!t.code.mask}}},[e("i",{staticClass:"fa fa-fw fa-code"}),t._v(" "),e("i18n",{attrs:{path:"common.showHideCode"}})],1)])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.code.mask,expression:"code.mask"}]},[e("pre",{staticClass:"brush:js"},[t._v("        export default {\n            methods: {\n                save(){\n                    this.$vDialog.mask('form data save success!', function(){\n                        //dialog close callback\n                    }, {\n                        language: 'en'\n                    });\n                }\n            }\n        }\n    ")]),t._v(" "),e("h4",[t._v("other practical use case for Mask")]),t._v(" "),e("pre",{staticClass:"brush:js"},[t._v("        export default {\n            methods: {\n                save(){\n                    let that = this;\n                    //open a full screen mask\n                    //using default text: 'Loading...'\n                    let key = this.$vDialog.mask();\n                    //submit to server side\n                    axios({...}).then(function(resp){\n                        //when submit success, close mask by key\n                        that.$vDialog.close(null, key);\n                    });\n                }\n            }\n        }\n    ")])]),t._v(" "),e("br"),t._v(" "),e("h4",[t._v("Toast "),e("small",[e("i18n",{attrs:{path:"dialog.demo.toastTitle"}})],1)]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("pre",{staticClass:"brush:js"},[t._v("            this.$vDialog.toast(message, callback, options);\n            ")]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.position=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"topLeft"}},[t._v("topLeft")]),t._v(" "),e("option",{attrs:{value:"topCenter"}},[t._v("topCenter")]),t._v(" "),e("option",{attrs:{value:"topRight"}},[t._v("topRight")]),t._v(" "),e("option",{attrs:{value:"bottomLeft"}},[t._v("bottomLeft")]),t._v(" "),e("option",{attrs:{value:"bottomCenter"}},[t._v("bottomCenter")]),t._v(" "),e("option",{attrs:{value:"bottomRight"}},[t._v("bottomRight")])])]),t._v(" "),e("div",{staticClass:"col-md-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.toastType,expression:"toastType"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.toastType=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"info"}},[t._v("info")]),t._v(" "),e("option",{attrs:{value:"warning"}},[t._v("warning")]),t._v(" "),e("option",{attrs:{value:"error"}},[t._v("error")]),t._v(" "),e("option",{attrs:{value:"success"}},[t._v("success")])])]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.callToast}},[e("i",{staticClass:"fa fa-fw fa-paper-plane-o"}),t._v(" Open Toast")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.code.toast=!t.code.toast}}},[e("i",{staticClass:"fa fa-fw fa-code"}),t._v(" "),e("i18n",{attrs:{path:"common.showHideCode"}})],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.code.toast,expression:"code.toast"}]},[e("pre",{staticClass:"brush:js"},[t._v("        export default {\n            methods: {\n                save(){\n                    this.$vDialog.toast('you got a new message!', function(){\n                        //dialog close callback\n                    }, {\n                        messageType: 'warning',\n                        language: 'en',\n                        closeTime: 3 //auto close dialog time(second)\n                    });\n                }\n            }\n        }\n    ")])]),t._v(" "),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),e("table",{staticClass:"table table-bordered table-striped option-table"},[e("thead",[e("tr",[e("th",[e("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.default"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.scope"}})],1)])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("message")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.message"}})],1),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td",[t._v("Alert, Mask, Toast")])]),t._v(" "),e("tr",[e("td",[t._v("messageType")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.messageType"}}),t._v(" "),t._m(0)],1),t._v(" "),e("td",[t._v("'info'")]),t._v(" "),e("td",[t._v("Alert, Toast")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string | boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.title"}})],1),t._v(" "),e("td",[t._v("'vDialog'")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.width"}})],1),t._v(" "),e("td",[t._v("700")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.height"}})],1),t._v(" "),e("td",[t._v("400")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("params")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.params"}})],1),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("dialogCloseButton")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.dialogCloseButton"}})],1),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("dialogMaxButton")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.dialogMaxButton"}})],1),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Modal")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.position"}}),t._v(" "),t._m(1)],1),t._v(" "),e("td",[t._v("'bottomRight'")]),t._v(" "),e("td",[t._v("Toast")])]),t._v(" "),e("tr",[e("td",[t._v("singletonKey")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.singletonKey"}})],1),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td",[t._v("All")])]),t._v(" "),e("tr",[e("td",[t._v("language")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.language"}}),t._v(" "),t._m(2)],1),t._v(" "),e("td",[t._v("400")]),t._v(" "),e("td",[t._v("All")])]),t._v(" "),e("tr",[e("td",[t._v("closeTime")]),t._v(" "),e("td",[t._v("number | boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.closeTime"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Alert,Mask,Toast")])]),t._v(" "),e("tr",[e("td",[t._v("cancelCallback")]),t._v(" "),e("td",[t._v("number | boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"dialog.option.cancelCallback"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Alert")])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("'info'")])]),t._v(" "),e("li",[e("code",[t._v("'warning'")])]),t._v(" "),e("li",[e("code",[t._v("'error'")])]),t._v(" "),e("li",[e("code",[t._v("'success'")])]),t._v(" "),e("li",[e("code",[t._v("'confirm'")]),t._v(" only work on Alert mode")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("'topLeft'")])]),t._v(" "),e("li",[e("code",[t._v("'topCenter'")])]),t._v(" "),e("li",[e("code",[t._v("'topRight'")])]),t._v(" "),e("li",[e("code",[t._v("'bottomLeft'")])]),t._v(" "),e("li",[e("code",[t._v("'bottomCenter'")])]),t._v(" "),e("li",[e("code",[t._v("'bottomRight'")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("'cn'")])]),t._v(" "),e("li",[e("code",[t._v("'en'")])]),t._v(" "),e("li",[e("code",[t._v("'jp'")])])])}],n={render:s,staticRenderFns:o};a.a=n},96:function(t,a,e){"use strict";function s(t){e(140)}Object.defineProperty(a,"__esModule",{value:!0});var o=e(116),n=e(144),i=e(1),l=s,r=i(o.a,n.a,!1,l,"data-v-fd2836b0",null);a.default=r.exports}});
//# sourceMappingURL=1.build.js.map