(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1074:function(e,t,n){"use strict";n.r(t);var c=n(394),o=n(390),i=(n(402),n(75)),s={name:"CdCheckboxBlock",components:Object(o.a)({},i.Checkbox.name,i.Checkbox),props:{hideSelectIcon:Boolean},data:function(){return{}}},r=n(745),a=n(19);var l=Object(a.a)(s,(function(){var e,t=this,n=t.$createElement,c=t._self._c||n;return c("el-checkbox",t._g(t._b({class:[t.$style.checkbox,(e={},e[t.$style.hideInput]=t.hideSelectIcon,e)]},"el-checkbox",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),c("div",{class:t.$style.mask},[t._t("mask")],2)],2)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null).exports,u={name:"CdCheckboxPlain",components:{CdIcon:n(469).a},props:{plain:Boolean,checked:Boolean},data:function(){return{}},computed:{type:function(){return this.checked?"checked":"check"},primary:function(){return this.checked&&!this.plain}}},h=n(746);var d=Object(a.a)(u,(function(){var e,t=this.$createElement;return(this._self._c||t)("cd-icon",{class:(e={},e[this.$style.primary]=this.primary,e),attrs:{type:this.type}})}),[],!1,(function(e){this.$style=h.default.locals||h.default}),null,null).exports,p=(n(747),n(388),{name:"CdCheckboxTag",components:Object(o.a)({},i.Checkbox.name,i.Checkbox),props:{num:Number,size:{type:String,default:"mini"}},data:function(){return{}},computed:{countText:function(){return Number.isFinite(this.num)?this.num>999?"999+":"".concat(this.num):""}},methods:{},created:function(){}}),f=n(748);var m={name:"Home",components:{CdCheckboxBlock:l,CdCheckboxPlain:d,CdCheckboxTag:Object(a.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox",e._g(e._b({class:e.$style.checkbox,attrs:{size:e.size,border:""}},"el-checkbox",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.countText?n("span",{class:e.$style.count},[e._v(e._s(e.countText))]):e._e()],2)}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null).exports,CodeFormat:c.default},data:function(){return{checkbox:[],cities:["上海","北京","广州","深圳"],checked:!0,plain:'\n        <cd-checkbox-plain :checked="checked"\n          :plain="false">\n        </cd-checkbox-plain>\n        <cd-checkbox-plain :checked="checked"\n          :plain="true">\n        </cd-checkbox-plain>\n\n        export default {\n          data() {\n            return {\n              checked: true,\n            }\n          }\n        }',tag:'\n        <el-checkbox-group v-model="checkbox">\n          <cd-checkbox-tag v-for="city in cities"\n            :key="city"\n            :label="city"\n            :num="12">\n            {{city}}\n          </cd-checkbox-tag>\n        </el-checkbox-group>\n\n        export default {\n          data() {\n            return {\n              checkbox: [],\n              cities: [\'上海\', \'北京\', \'广州\', \'深圳\'],\n            }\n          }\n        }',custom:'\n        <style lang="scss">\n          .item {\n            position: relative;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            background-color: #00b8d4;\n            color: #fff;\n            width: 60px;\n            height: 60px;\n            cursor: pointer;\n            font-size: 16px;\n            border-radius: 20px;\n            transition: all .3s ease-out;\n            &:hover {\n              box-shadow: 4px 4px 12px #00e5ff;\n            }\n          }\n          .mask {\n            font-size: 30px;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 20px;\n            background-color: rgba(#fff, .8);\n            color: red;\n          }\n        </style>\n        <el-checkbox-group v-model="checkbox">\n          <cd-checkbox-block v-for="city in cities"\n            :key="city"\n            :label="city"\n            :hide-select-icon="false">\n            <template #default>\n              <div class="item">\n                {{ city }}\n              </div>\n            </template>\n            <template v-if="false"\n              #mask>\n              <div class="mask">\n                <i class="el-icon-check"></i>\n              </div>\n            </template>\n          </cd-checkbox-block>\n        </el-checkbox-group>\n        <el-checkbox-group v-model="checkbox">\n          <cd-checkbox-block v-for="city in cities"\n            :key="city"\n            :label="city"\n            :hide-select-icon="true">\n            <template #default>\n              <div class="item">\n                {{ city }}\n              </div>\n            </template>\n            <template v-if="true"\n              #mask>\n              <div class="mask">\n                <i class="el-icon-check"></i>\n              </div>\n            </template>\n          </cd-checkbox-block>\n        </el-checkbox-group>\n\n        export default {\n          data() {\n            return {\n              checkbox: [],\n              cities: [\'上海\', \'北京\', \'广州\', \'深圳\'],\n            }\n          }\n        }'}},computed:{},methods:{click:function(){this.checked=!this.checked}}},x=(n(749),Object(a.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-format",{attrs:{index:0,codeStr:e.plain}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("朴素的Checkbox")]),e._v(" "),n("span",{attrs:{slot:"interpretation"},slot:"interpretation"},[e._v("通过设置<cd-checkbox-plain>的plain来设置基础的checkbox是否朴素,接收一个boolean类型的值")]),e._v(" "),n("cd-checkbox-plain",{attrs:{checked:e.checked,plain:!1}}),e._v(" "),n("cd-checkbox-plain",{attrs:{checked:e.checked,plain:!0}}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.click}},[e._v("\n      切换状态\n    ")])],1),e._v(" "),n("code-format",{attrs:{index:1,codeStr:e.tag}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("带有标签的复选框")]),e._v(" "),n("span",{attrs:{slot:"interpretation"},slot:"interpretation"},[e._v("通过设置<cd-checkbox-tag>的num属性来设置复选框右上角的数字")]),e._v(" "),n("el-checkbox-group",{model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}},e._l(e.cities,(function(t){return n("cd-checkbox-tag",{key:t,attrs:{label:t,num:12}},[e._v("\n        "+e._s(t)+"\n      ")])})),1)],1),e._v(" "),n("code-format",{attrs:{index:2,codeStr:e.custom}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("自定义选中状态")]),e._v(" "),n("span",{attrs:{slot:"interpretation"},slot:"interpretation"},[e._v("\n      hide-select-icon属性控制是否显示选中图标，接收一个Boolean类型的值,<cd-checkbox-block>也支持自定义的模板\n    ")]),e._v(" "),n("el-checkbox-group",{model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}},e._l(e.cities,(function(t){return n("cd-checkbox-block",{key:t,attrs:{label:t,"hide-select-icon":!1},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"item"},[e._v("\n            "+e._s(t)+"\n          ")])]},proxy:!0},null],null,!0)})})),1),e._v(" "),n("el-checkbox-group",{staticStyle:{"margin-top":"10px"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}},e._l(e.cities,(function(t){return n("cd-checkbox-block",{key:t,attrs:{label:t,"hide-select-icon":!0},scopedSlots:e._u([{key:"default",fn:function(){return[n("div",{staticClass:"item"},[e._v("\n            "+e._s(t)+"\n          ")])]},proxy:!0},{key:"mask",fn:function(){return[n("div",{staticClass:"mask"},[n("i",{staticClass:"el-icon-check"})])]},proxy:!0}],null,!0)})})),1)],1)],1)}),[],!1,null,null,null));t.default=x.exports},390:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},394:function(e,t,n){"use strict";n.r(t);n(398),n(401),n(388);var c={name:"Home",mixins:[{data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{showCode:function(e){var t=this;this.$set(this.isShow,e,!this.isShow[e]),this.$nextTick((function(){!0===t.isShow[e]?t.codeParent[e].style.height=+t.codeHeightArr[e]+25+"px":t.codeParent[e].style.height=0}))},getCodesHeight:function(){var e=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var t=document.getElementsByClassName("code-text"),n=e.length,c=0;c<n;c++){var o=e[c].getBoundingClientRect().height+t[c].getBoundingClientRect().height;this.codeHeightArr.push(o),this.isShow.push(!1)}}},mounted:function(){var e=this;this.$nextTick((function(){e.getCodesHeight()}))}}],props:{codeStr:{type:String},index:{type:Number,default:0}},computed:{code:function(){return this.codeStr.replace(/^ {8}/gm,"").trim()}},data:function(){return{}},methods:{},created:function(){}},o=n(19),i=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("h2",[e._t("title")],2),e._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-text"},[e._t("interpretation")],2),e._v(" "),n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"vue"},[e._v(e._s(e.code))])])])]),e._v(" "),n("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(e.index)}}},[n("i",{directives:[{name:"show",rawName:"v-show",value:!e.isShow[e.index],expression:"!isShow[index]"}],staticClass:"el-icon-caret-bottom"}),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.isShow[e.index],expression:"isShow[index]"}],staticClass:"el-icon-caret-top"}),e._v(" "),n("span",{staticClass:"lock-code-word"},[e._v(e._s(!1===e.isShow[e.index]?"显示代码":"隐藏代码"))])])])])}),[],!1,null,null,null);t.default=i.exports},411:function(e,t,n){},412:function(e,t,n){e.exports={icon:"icon_1vEPUh35"}},458:function(e,t,n){"use strict";var c=n(411);n.n(c).a},459:function(e,t,n){"use strict";var c=n(412),o=n.n(c);t.default=o.a},469:function(e,t,n){"use strict";n(402),n(395);var c,o,i=n(396),s=(n(103),n(503),n(504),n(408)),r={name:"CdIconPlaceholder",componentName:"CdIconPlaceholder",components:{},props:{},computed:{}},a=(n(458),n(19)),l=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("i",{staticClass:"cd-icon cd-icon-placeholder"})}),[],!1,null,null,null).exports,u=new Map,h={name:"CdIcon",components:{PlaceholderIcon:l},componentName:"CdIcon",props:{type:String,url:String,viewBox:String,colorful:Boolean,pure:Boolean,colors:Array,prefix:{type:String,default:"cd-icon"}},data:function(){return{loaded:!1,lViewBox:""}},computed:{name:function(){return"#".concat(this.prefix,"-").concat(this.type)},cViewBox:function(){return this.viewBox||this.lViewBox||"0 0 1024 1024"}},watch:{colorful:function(){this.renderColorful()},pure:function(){this.renderColorful()},colors:function(){this.renderColorful()}},methods:{renderColorful:(o=Object(i.a)(regeneratorRuntime.mark((function e(){var t,n,c,o,i,r,a,l=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.colorful){e.next=13;break}return e.next=3,new Promise((function(e){var t=s.a.lang.timer((function(){document.querySelectorAll("symbol".concat(l.name)).length>0&&(e(),clearInterval(t))}),500)}));case 3:if(t=document.querySelectorAll("symbol".concat(this.name))[0],this.lViewBox=t.getAttribute("viewBox"),this.$el.innerHTML=t.innerHTML,this.pure||this.colors&&this.colors.length){e.next=8;break}return e.abrupt("return");case 8:for(n=this.colors,this.pure&&(n=["currentColor"]),c=n[n.length-1],o=this.$el.querySelectorAll("path"),i=0;i<o.length;i+=1)r=n[i],a=o[i],r?a.setAttribute("fill",r):i>n.length-1&&c&&a.setAttribute("fill",c);case 13:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},created:(c=Object(i.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.url||"//at.alicdn.com/t/font_1008061_q4k1k2j35x.js",(n=u.get(t))||(n=s.a.bom.loadScript("https:".concat(t)),u.set(t,n)),e.next=5,n;case 5:return this.loaded=!0,e.next=8,this.renderColorful();case 8:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},d=n(459);var p=Object(a.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.colorful&&e.loaded?n("svg",{class:e.$style.icon,attrs:{viewBox:e.cViewBox,width:"1em",height:"1em",fill:"currentColor",focusable:"false"}}):e.loaded?n("svg",{class:e.$style.icon,attrs:{viewBox:e.cViewBox,focusable:"false",width:"1em",height:"1em",fill:"currentColor"}},[n("use",{attrs:{"xlink:href":e.name}})]):n("placeholder-icon")}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null).exports;t.a=p},548:function(e,t,n){e.exports={checkbox:"checkbox_imDskHeP",hideInput:"hideInput_2PNnBIUs",mask:"mask_1o7ZBgM4"}},549:function(e,t,n){e.exports={primary:"primary_1G5xiShr"}},550:function(e,t,n){e.exports={checkbox:"checkbox_2bGmo2SK",count:"count_1vaK0764"}},551:function(e,t,n){},745:function(e,t,n){"use strict";var c=n(548),o=n.n(c);t.default=o.a},746:function(e,t,n){"use strict";var c=n(549),o=n.n(c);t.default=o.a},747:function(e,t,n){var c=n(68),o=n(5).isFinite;c(c.S,"Number",{isFinite:function(e){return"number"==typeof e&&o(e)}})},748:function(e,t,n){"use strict";var c=n(550),o=n.n(c);t.default=o.a},749:function(e,t,n){"use strict";var c=n(551);n.n(c).a}}]);