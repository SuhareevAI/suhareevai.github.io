"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[769],{"./src/shared/ui/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Modal",component:__webpack_require__("./src/shared/ui/Modal/ModalBase.tsx").e,tags:["autodocs"],argTypes:{header:{type:"string",description:"Заголовок модального окна"},children:{description:"Дочерний элемент модального окна"},visible:{type:"boolean",description:"Видимость модального окна"},onClose:{description:"Функция закрытия модального окна"}}};var Primary={args:{header:"Lorem Ipsum",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",visible:!0,onClose:function onClose(){}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: 'Lorem Ipsum',\n    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + \"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown \" + 'printer took a galley of type and scrambled it to make a type specimen book.',\n    visible: true,\n    onClose: () => undefined\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/shared/ui/Modal/ModalBase.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ModalBase});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.Z,options);const Modal_Modal_module=Modal_module.Z&&Modal_module.Z.locals?Modal_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalBase=function ModalBase(_ref){var visible=_ref.visible,header=_ref.header,children=_ref.children,onClose=_ref.onClose;return(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.container,style:{display:visible?"block":"none"},children:(0,jsx_runtime.jsxs)("div",{className:Modal_Modal_module.modal,children:[(0,jsx_runtime.jsxs)("div",{className:Modal_Modal_module.modal__header,children:[(0,jsx_runtime.jsx)("h5",{className:Modal_Modal_module.modal__title,children:header}),(0,jsx_runtime.jsx)("button",{type:"button",className:Modal_Modal_module.modal__close,onClick:onClose,children:(0,jsx_runtime.jsx)("span",{children:"×"})})]}),(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.modal__body,children:(0,jsx_runtime.jsx)("p",{children})})]})})};ModalBase.displayName="ModalBase";try{ModalBase.displayName="ModalBase",ModalBase.__docgenInfo={description:"",displayName:"ModalBase",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/ModalBase.tsx#ModalBase"]={docgenInfo:ModalBase.__docgenInfo,name:"ModalBase",path:"src/shared/ui/Modal/ModalBase.tsx#ModalBase"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'h1{font-size:40px;font-weight:700;margin-bottom:0;margin-top:0;padding-bottom:5px 0}h2{font-size:32px;font-weight:700;margin-bottom:0;margin-top:0;padding-bottom:5px 0}h3{font-size:24px;font-weight:700;margin-bottom:0;margin-top:0;padding-bottom:5px 0}h4{font-size:20px;font-weight:700;margin-bottom:0;margin-top:0;padding-bottom:5px 0}h5{font-size:16px;font-weight:700;margin-bottom:0;margin-top:0;padding-bottom:5px 0}body{font-family:"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.EgkWnkv1pHAmeULyQLRN{background-color:#eee;color:#000}.TKDvi8Av_tvc8sdNCz9A{background-color:#000;color:#fff}.QHKv6uHCL1_fy8B4Kv1j{z-index:1072;position:fixed;top:0;left:0;right:0;bottom:0;text-align:center;transition:opacity .15s linear;background:rgba(128,128,128,.5)}.PtAwtMnRdQYkbBYWrFSW{border:1px solid rgba(208,208,208,.2);flex-direction:column;border-radius:.3em;max-width:500px;background:#fff;box-shadow:0 15px 30px 0 rgba(0,0,0,.25);position:relative;margin:50px auto}.EueyeoGWKA6NkldOdU4u{display:flex;flex-direction:row;justify-content:space-between;padding:16px;border-bottom:1px solid rgba(208,208,208,.2)}.KHq6wLIK3jOgQG4gwZz1{line-height:1.5}.GTGlFXrmY4lkrQOswUgW{padding:5px;font-size:20px;display:flex;border:0;background-color:rgba(0,0,0,0);cursor:pointer;float:right}.loY4j8TczzjVZbCnInbC{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem;text-align:justify}',"",{version:3,sources:["webpack://./src/app/styles/base.sass","webpack://./src/shared/ui/Modal/Modal.module.sass"],names:[],mappings:"AAKA,GACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,oBAAA,CACF,GACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,oBAAA,CACF,GACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,oBAAA,CACF,GACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,oBAAA,CACF,GACE,cAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,oBAAA,CAEF,KACE,+DAAA,CAEF,sBACE,qBAxCY,CAyCZ,UAAA,CAEF,sBACE,qBAAA,CACA,UAAA,CC3CF,sBACE,YAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,iBAAA,CACA,8BAAA,CACA,+BAAA,CAEF,sBACE,qCAAA,CACA,qBAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CACA,wCAAA,CACA,iBAAA,CACA,gBAAA,CAEF,sBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,YAAA,CACA,4CAAA,CAEF,sBACE,eAAA,CAEF,sBACE,WAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,8BAAA,CACA,cAAA,CACA,WAAA,CAEF,sBACE,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA",sourcesContent:['\ufeff$base-color: rgb(238, 238, 238)\n$important-text-color: rgb(176, 105, 105)\n$main-text-color: rgb(0, 0, 0)\n$border-color: rgba(208, 208, 208, 0.2)\n\nh1 \n  font-size: 40px\n  font-weight: 700\n  margin-bottom: 0\n  margin-top: 0\n  padding-bottom: 5px 0\nh2 \n  font-size: 32px\n  font-weight: 700\n  margin-bottom: 0\n  margin-top: 0\n  padding-bottom: 5px 0\nh3 \n  font-size: 24px\n  font-weight: 700\n  margin-bottom: 0\n  margin-top: 0\n  padding-bottom: 5px 0\nh4 \n  font-size: 20px\n  font-weight: 700\n  margin-bottom: 0\n  margin-top: 0\n  padding-bottom: 5px 0\nh5 \n  font-size: 16px\n  font-weight: 700\n  margin-bottom: 0\n  margin-top: 0\n  padding-bottom: 5px 0\n  \nbody\n  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif\n  \n.light\n  background-color: $base-color\n  color: black\n\n.dark\n  background-color: black\n  color: white','@import "src/app/styles/base"\n\n.container\n  z-index: 1072\n  position: fixed\n  top: 0\n  left: 0\n  right: 0\n  bottom: 0\n  text-align: center\n  transition: opacity .15s linear\n  background: rgba(128, 128, 128, 0.5)\n\n.modal\n  border:  1px solid $border-color\n  flex-direction: column\n  border-radius: 0.3em\n  max-width: 500px\n  background: white\n  box-shadow: 0 15px 30px 0 rgba(#000, 0.25)\n  position: relative\n  margin: 50px auto\n  \n.modal__header \n  display: flex\n  flex-direction: row\n  justify-content: space-between\n  padding: 16px\n  border-bottom: 1px solid $border-color\n\n.modal__title \n  line-height: 1.5  \n\n.modal__close \n  padding: 5px\n  font-size: 20px\n  display: flex\n  border: 0\n  background-color: transparent\n  cursor: pointer\n  float: right\n\n.modal__body\n  position: relative\n  -webkit-box-flex: 1\n  -ms-flex: 1 1 auto\n  flex: 1 1 auto\n  padding: 1rem\n  text-align: justify\n  \n  '],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light:"EgkWnkv1pHAmeULyQLRN",dark:"TKDvi8Av_tvc8sdNCz9A",container:"QHKv6uHCL1_fy8B4Kv1j",modal:"PtAwtMnRdQYkbBYWrFSW",modal__header:"EueyeoGWKA6NkldOdU4u",modal__title:"KHq6wLIK3jOgQG4gwZz1",modal__close:"GTGlFXrmY4lkrQOswUgW",modal__body:"loY4j8TczzjVZbCnInbC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);