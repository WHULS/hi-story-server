(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a45661d"],{"0ec8":function(e,t,a){},"612f":function(e,t,a){for(var r=a("5c07"),n=a("d753"),i=a("7f00"),c=a("4839"),o=a("c84b"),s=a("f03e"),l=a("f3ae"),u=l("iterator"),d=l("toStringTag"),f=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},w=n(h),m=0;m<w.length;m++){var S,y=w[m],L=h[y],p=c[y],v=p&&p.prototype;if(v&&(v[u]||o(v,u,f),v[d]||o(v,d,y),s[y]=f,L))for(S in r)v[S]||i(v,S,r[S],!0)}},7277:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"flex-container column"},[a("div",{staticClass:"item one",staticStyle:{transform:"translate(-22.4%,-33.5%) scale(0.33)"},on:{click:function(t){return e.clickChart("1")}}},[a("div",[e._v("1")])]),a("div",{staticClass:"item two",staticStyle:{transform:"translate(-22.4%,0.5%) scale(0.33)"},on:{click:function(t){return e.clickChart("2")}}},[a("div",[e._v("2")])]),a("div",{staticClass:"item three",staticStyle:{transform:"translate(-22.4%,34.5%) scale(0.33)"},on:{click:function(t){return e.clickChart("3")}}},[a("div",[e._v("3")])]),a("main-map",{staticClass:"item active",staticStyle:{transform:"translate(43.7%, 0) scale(1)"},on:{click:function(t){return e.clickChart("4")}}})],1)])},n=[],i=(a("612f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{style:e.MapStyle,attrs:{id:"map"}}),a("div",{staticClass:"map-control"},[a("div",{attrs:{id:"screenshot-btn"}},[a("el-checkbox-group",{model:{value:e.funcCheckList,callback:function(t){e.funcCheckList=t},expression:"funcCheckList"}},[a("el-checkbox",{staticStyle:{"background-color":"white"},attrs:{border:"",label:"截图"},on:{change:e.handleScreenShot}})],1)],1),a("div",{attrs:{id:"drawer-selector"}},[e.isDrawerSelectedShown?a("el-select",{attrs:{filterable:"",placeholder:"绘图工具"},on:{change:e.onSelectDrawerChange},model:{value:e.selectedDrawer,callback:function(t){e.selectedDrawer=t},expression:"selectedDrawer"}},[e._l(e.drawerList,function(e){return a("el-option",{key:e,attrs:{value:e,label:e}})}),a("el-option",{attrs:{value:"",label:""}},[a("el-button",{attrs:{type:"text"},on:{click:e.onExitDraw}},[e._v("退出绘图 "),a("i",{staticClass:"el-icon-circle-close-outline"})])],1)],2):a("el-button",{attrs:{type:"plain"},on:{click:e.olClickDraw}},[e._v("绘图")])],1),a("div",{attrs:{id:"wmts-layer-selector"}},[a("el-select",{attrs:{filterable:""},on:{change:e.onSelectWMTSLayerChange},model:{value:e.selectedWMTSLayer,callback:function(t){e.selectedWMTSLayer=t},expression:"selectedWMTSLayer"}},e._l(e.WMTSLayers,function(e){return a("el-option",{key:e.Identifier,attrs:{value:e.Identifier,label:e.Title}})}),1)],1)])])}),c=[],o=(a("48fb"),a("f4e3")),s=a("35cc"),l=a("0470"),u=a("5810"),d=a("44b8"),f=a("9fac"),h=a("b929"),w=a("43e9"),m=a("f2b0"),S=a("ed14"),y=a("9af2"),L=a("12fb"),p=a("4e71"),v=a("f48d"),g=a("68a9"),C=a("d4e1"),D=a("a60a"),b=a.n(D),k=(a("f3c4"),a("83c5")),M={data:function(){return{map:{},view:{},layers:[],events:[{eventName:"十五岁的李清照到溪亭游玩",time:1098,reignTitle:"元符元年",placeString:"溪亭（章丘附近）",placeCoordinate:[117.53,36.72]},{eventName:"十六岁的李清照随父亲李格非由原籍赴汴京，结识文学上的忘年交晁补之",time:1099,reignTitle:"元符二年",placeString:"汴京（今河南省开封市）",placeCoordinate:[114.35,34.79]}],myChart:{},MapStyle:{width:"100%",height:"100%"},WMTSResults:{},WMTSLayers:[{Title:"",Identifier:""}],selectedWMTSLayer:"加载中...",funcCheckList:[],screenshotLayer:null,drawLayer:null,Drawer:null,isScreenShotCheck:!0,selectedDrawer:"",isDrawerSelectedShown:!1,drawerList:["Point","LineString","Polygon","Circle","Square","Box"]}},methods:{preDefine:function(){this.view=new o["a"]({center:[12175093.67465372,4209022.808896985],zoom:4.5,projection:"EPSG:3857"}),this.layers=[new l["a"]({source:new u["a"],opacity:.7})]},createMap:function(){this.map=new s["a"]({target:"map",view:this.view,layers:this.layers,controls:Object(w["a"])({attribution:!1,zoom:!1})}),this.map.on("click",function(e){console.log("点击坐标：("+e.coordinate.toString()+")"),console.log("地图缩放："+e.map.getView().getZoom())})},addWMTSMap:function(){var e=this,t=new f["a"];fetch("http://gis.sinica.edu.tw/ccts/wmts/1.0.0/WMTSCapabilities.xml").then(function(e){return e.text()}).then(function(a){var r=t.read(a);e.WMTSResults=r;var n=Object(d["b"])(r,{layer:"ad1111",matrixSet:"GoogleMapsCompatible"});e.map.addLayer(new l["a"]({opacity:.9,source:new d["a"](n)}));var i=r.Contents.Layer;e.WMTSLayers=i,e.selectedWMTSLayer="ad1208"})},onSelectWMTSLayerChange:function(e){console.log(e);var t=this.map.getLayers(),a=this.WMTSResults,r=Object(d["b"])(a,{layer:e,matrixSet:"GoogleMapsCompatible"});t.pop(),t.push(new l["a"]({opacity:1,source:new d["a"](r)}))},addControl:function(){this.map.addControl(new h["a"]({element:b()(".map-control")[0]}))},handleScreenShot:function(e){var t=this;if(console.log("当前图层数["+t.map.getLayers().array_.length+"]"),e){t.Drawer&&t.map.removeInteraction(t.Drawer),null!=t.screenshotLayer&&t.map.removeLayer(t.screenshotLayer),t.screenshotLayer=t.getDrawLayer();var a=t.screenshotLayer.getSource();t.Drawer=t.getDrawer("Box",a),t.map.addLayer(t.screenshotLayer),t.map.addInteraction(t.Drawer)}else{t.map.removeInteraction(t.Drawer);var r=t.funcCheckList,n=r.indexOf("截图");-1!=n&&r.splice(n,1),null!=t.screenshotLayer&&t.map.removeLayer(t.screenshotLayer)}},onSelectDrawerChange:function(e){var t=this,a=null!=t.drawLayer;if(console.log(a),null!=t.Drawer&&t.map.removeInteraction(t.Drawer),a){var r=t.drawLayer.getSource();t.Drawer=t.getDrawer(e,r)}else{t.drawLayer=t.getDrawLayer(),t.map.addLayer(t.drawLayer);var n=t.drawLayer.getSource();t.Drawer=t.getDrawer(e,n)}t.map.addInteraction(t.Drawer)},getDrawer:function(e,t){var a,r;return""!==e?-1==this.drawerList.indexOf(e)?console.error("绘图类型 ["+e+"] 不支持"):("Square"===e?(e="Circle",a=Object(g["a"])(4)):"Box"===e&&(e="LineString",r=2,a=function(e,t){t||(t=new C["a"](e));var a=e[0],r=e[1];return t.setCoordinates([[a,[a[0],r[1]],r,[r[0],a[1]],a]]),t}),new g["b"]({source:t,type:e,geometryFunction:a,maxPoints:r})):null},getDrawLayer:function(){var e=new S["a"]({wrapX:!1});return new m["a"]({source:e,style:new L["c"]({fill:new p["a"]({color:[255,255,255,.2]}),stroke:new v["a"]({color:"#ffcc33",width:2}),image:new y["a"]({radius:7,fill:new p["a"]({color:"#ffcc33"})})})})},onExitDraw:function(){var e=this;null!=e.drawLayer&&(e.map.removeLayer(e.drawLayer),e.drawLayer.setSource(null)),null!=e.Drawer&&(e.map.removeInteraction(e.Drawer),e.Drawer=null),e.handleScreenShot(!1),e.isDrawerSelectedShown=!1,e.selectedDrawer=""},olClickDraw:function(){var e=this;e.isDrawerSelectedShown=!0,e.isScreenShotCheck=!1,e.handleScreenShot(!1)}},created:function(){},mounted:function(){var e=this;e.preDefine(),e.createMap(),e.addWMTSMap(),e.addControl()}},T=M,x=(a("ff88"),a("17cc")),W=Object(x["a"])(T,i,c,!1,null,"b162254c",null),_=W.exports,O={components:{MainMap:_},data:function(){return{items:[]}},methods:{_resize:function(){this.$root.charts.forEach(function(e){e.resize()})},init:function(){this.items=document.querySelectorAll(".flex-container .item");for(var e=0;e<this.items.length;e++)this.items[e].dataset.order=e+1},clickChart:function(e){var t=document.querySelector(".flex-container .active"),a=t.dataset.order,r=this.items[e-1];a!==e&&(t.classList.remove("active"),r.classList.add("active"),this._setStyle(r,t))},_setStyle:function(e,t){var a=e.style.transform,r=t.style.transform;e.style.transform=r,t.style.transform=a}},created:function(){console.log(.9*window.innerHeight),k["a"].$on("dashboardResize",function(e){})},mounted:function(){this.init()}},I=O,G=(a("c61f"),Object(x["a"])(I,r,n,!1,null,"16e1e082",null));t["default"]=G.exports},8280:function(e,t,a){},c61f:function(e,t,a){"use strict";var r=a("8280"),n=a.n(r);n.a},ff88:function(e,t,a){"use strict";var r=a("0ec8"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-6a45661d.a41069bc.js.map