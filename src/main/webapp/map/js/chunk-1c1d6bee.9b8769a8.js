(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c1d6bee"],{"460b":function(t,e,i){"use strict";var o=i("ee27"),n=i("474e"),s=i("c792"),r=i("12a0"),a=i("4a5e"),l=i("03c9"),h=i("71a8"),c={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"},d=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+r["d"],this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,Object(l["a"])(this,Object(n["b"])(c.ELEMENT),this.handleElementChanged,this),Object(l["a"])(this,Object(n["b"])(c.MAP),this.handleMapChanged,this),Object(l["a"])(this,Object(n["b"])(c.OFFSET),this.handleOffsetChanged,this),Object(l["a"])(this,Object(n["b"])(c.POSITION),this.handlePositionChanged,this),Object(l["a"])(this,Object(n["b"])(c.POSITIONING),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:s["a"].TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(c.ELEMENT)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(c.MAP)},e.prototype.getOffset=function(){return this.get(c.OFFSET)},e.prototype.getPosition=function(){return this.get(c.POSITION)},e.prototype.getPositioning=function(){return this.get(c.POSITIONING)},e.prototype.handleElementChanged=function(){Object(a["d"])(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(a["e"])(this.element),Object(l["e"])(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(l["a"])(t,o["a"].POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(c.POSITION)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(c.ELEMENT,t)},e.prototype.setMap=function(t){this.set(c.MAP,t)},e.prototype.setOffset=function(t){this.set(c.OFFSET,t)},e.prototype.setPosition=function(t){this.set(c.POSITION,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),o=this.getRect(i,[Object(a["c"])(i),Object(a["b"])(i)]),n=this.autoPanMargin;if(!Object(h["g"])(e,o)){var s=o[0]-e[0],r=e[2]-o[2],l=o[1]-e[1],c=e[3]-o[3],d=[0,0];if(s<0?d[0]=s-n:r<0&&(d[0]=Math.abs(r)+n),l<0?d[1]=l-n:c<0&&(d[1]=Math.abs(c)+n),0!==d[0]||0!==d[1]){var u=t.getView().getCenter(),p=t.getPixelFromCoordinate(u),m=[p[0]+d[0],p[1]+d[1]];t.getView().animate({center:t.getCoordinateFromPixel(m),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),o=i.left+window.pageXOffset,n=i.top+window.pageYOffset;return[o,n,o+e[0],n+e[1]]},e.prototype.setPositioning=function(t){this.set(c.POSITIONING,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),o=t.getSize();this.updateRenderedPosition(i,o)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,o=this.getOffset(),n=this.getPositioning();this.setVisible(!0);var r=o[0],a=o[1];if(n==s["a"].BOTTOM_RIGHT||n==s["a"].CENTER_RIGHT||n==s["a"].TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var l=Math.round(e[0]-t[0]-r)+"px";this.rendered.right_!=l&&(this.rendered.right_=i.right=l)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),n!=s["a"].BOTTOM_CENTER&&n!=s["a"].CENTER_CENTER&&n!=s["a"].TOP_CENTER||(r-=this.element.offsetWidth/2);var h=Math.round(t[0]+r)+"px";this.rendered.left_!=h&&(this.rendered.left_=i.left=h)}if(n==s["a"].BOTTOM_LEFT||n==s["a"].BOTTOM_CENTER||n==s["a"].BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var c=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=c&&(this.rendered.bottom_=i.bottom=c)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),n!=s["a"].CENTER_LEFT&&n!=s["a"].CENTER_CENTER&&n!=s["a"].CENTER_RIGHT||(a-=this.element.offsetHeight/2);var d=Math.round(t[1]+a)+"px";this.rendered.top_!=d&&(this.rendered.top_=i.top=d)}},e.prototype.getOptions=function(){return this.options},e}(n["a"]);e["a"]=d},"612f":function(t,e,i){for(var o=i("5c07"),n=i("d753"),s=i("7f00"),r=i("4839"),a=i("c84b"),l=i("f03e"),h=i("f3ae"),c=h("iterator"),d=h("toStringTag"),u=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=n(p),g=0;g<m.length;g++){var _,f=m[g],v=p[f],b=r[f],C=b&&b.prototype;if(C&&(C[c]||a(C,c,u),C[d]||a(C,d,f),l[f]=u,v))for(_ in o)C[_]||s(C,_,o[_],!0)}},"74de":function(t,e,i){var o=i("d635"),n=i("2b11");t.exports=function(t,e,i){if(o(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(t))}},8870:function(t,e,i){"use strict";var o=i("ec44"),n=i.n(o);n.a},"93fe":function(t,e,i){"use strict";var o=i("2d2c"),n=i("74de"),s="includes";o(o.P+o.F*i("dd8b")(s),"String",{includes:function(t){return!!~n(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},c792:function(t,e,i){"use strict";e["a"]={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},da54:function(t,e,i){},dbd4:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"left"}},[i("div",{attrs:{id:"map"}}),i("p",[i("span",[t._v("Zoom Value : "+t._s(t.zoomValue)+"  ")]),i("el-button",{attrs:{type:"primary"},on:{click:t.zoomUp}},[t._v("放大")]),i("el-button",{attrs:{type:"primary"},on:{click:t.zoomDowm}},[t._v("缩小")])],1),[i("el-collapse",{attrs:{id:"checkbox-board",accordion:""},on:{change:t.onControlBoardClick},model:{value:t.controlBoardActive,callback:function(e){t.controlBoardActive=e},expression:"controlBoardActive"}},[i("el-collapse-item",{attrs:{name:"1"}},[i("div",{staticStyle:{"background-color":"rgb(0, 0, 0, 0)"}},[i("el-checkbox-group",{model:{value:t.controlList,callback:function(e){t.controlList=e},expression:"controlList"}},[i("el-checkbox",{attrs:{label:"Mouse Position",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Attribution"}}),i("br"),i("el-checkbox",{attrs:{label:"Rotate",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Full Screen",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Overview Map",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Scale Line",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Zoom",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Zoom Slider",checked:""}}),i("br"),i("el-checkbox",{attrs:{label:"Zoom To Extent"}})],1)],1)])],1)]],2)},n=[],s=(i("612f"),i("5fa9")),r=i.n(s),a=(i("ea65"),i("48fb"),i("e0c1"),i("93fe"),i("b06f"),i("a60a")),l=i.n(a),h=i("f4e3"),c=i("35cc"),d=i("0470"),u=i("5810"),p=i("b929"),m=i("ed5e"),g=i("03c9"),_=i("af3d"),f=i("474e"),v=i("6b82"),b="projection",C="coordinateFormat",E=function(t){function e(e){var i=e||{},o=document.createElement("div");o.className=void 0!==i.className?i.className:"ol-mouse-position",t.call(this,{element:o,render:i.render||y,target:i.target}),Object(g["a"])(this,Object(f["b"])(b),this.handleProjectionChanged_,this),i.coordinateFormat&&this.setCoordinateFormat(i.coordinateFormat),i.projection&&this.setProjection(i.projection),this.undefinedHTML_=void 0!==i.undefinedHTML?i.undefinedHTML:"&#160;",this.renderOnMouseOut_=!!this.undefinedHTML_,this.renderedHTML_=o.innerHTML,this.mapProjection_=null,this.transform_=null,this.lastMouseMovePixel_=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleProjectionChanged_=function(){this.transform_=null},e.prototype.getCoordinateFormat=function(){return this.get(C)},e.prototype.getProjection=function(){return this.get(b)},e.prototype.handleMouseMove=function(t){var e=this.getMap();this.lastMouseMovePixel_=e.getEventPixel(t),this.updateHTML_(this.lastMouseMovePixel_)},e.prototype.handleMouseOut=function(t){this.updateHTML_(null),this.lastMouseMovePixel_=null},e.prototype.setMap=function(e){if(t.prototype.setMap.call(this,e),e){var i=e.getViewport();this.listenerKeys.push(Object(g["a"])(i,_["a"].MOUSEMOVE,this.handleMouseMove,this),Object(g["a"])(i,_["a"].TOUCHSTART,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push(Object(g["a"])(i,_["a"].MOUSEOUT,this.handleMouseOut,this),Object(g["a"])(i,_["a"].TOUCHEND,this.handleMouseOut,this))}},e.prototype.setCoordinateFormat=function(t){this.set(C,t)},e.prototype.setProjection=function(t){this.set(b,Object(v["d"])(t))},e.prototype.updateHTML_=function(t){var e=this.undefinedHTML_;if(t&&this.mapProjection_){if(!this.transform_){var i=this.getProjection();this.transform_=i?Object(v["g"])(this.mapProjection_,i):v["h"]}var o=this.getMap(),n=o.getCoordinateFromPixel(t);if(n){this.transform_(n,n);var s=this.getCoordinateFormat();e=s?s(n):n.toString()}}this.renderedHTML_&&e===this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)},e}(p["a"]);function y(t){var e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null}var O=E,T=i("a27c"),M=i("a545"),S=i("12a0"),L=i("4a5e"),w=function(){var t;return function(){if(!t){var e=document.body;e.webkitRequestFullscreen?t="webkitfullscreenchange":e.mozRequestFullScreen?t="mozfullscreenchange":e.msRequestFullscreen?t="MSFullscreenChange":e.requestFullscreen&&(t="fullscreenchange")}return t}}(),P=function(t){function e(e){var i=e||{};t.call(this,{element:document.createElement("div"),target:i.target}),this.cssClassName_=void 0!==i.className?i.className:"ol-full-screen";var o=void 0!==i.label?i.label:"⤢";this.labelNode_="string"===typeof o?document.createTextNode(o):o;var n=void 0!==i.labelActive?i.labelActive:"×";this.labelActiveNode_="string"===typeof n?document.createTextNode(n):n,this.button_=document.createElement("button");var s=i.tipLabel?i.tipLabel:"Toggle full-screen";this.setClassName_(this.button_,N()),this.button_.setAttribute("type","button"),this.button_.title=s,this.button_.appendChild(this.labelNode_),Object(g["a"])(this.button_,_["a"].CLICK,this.handleClick_,this);var r=this.cssClassName_+" "+S["e"]+" "+S["b"]+" "+(R()?"":S["f"]),a=this.element;a.className=r,a.appendChild(this.button_),this.keys_=void 0!==i.keys&&i.keys,this.source_=i.source}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleClick_=function(t){t.preventDefault(),this.handleFullScreen_()},e.prototype.handleFullScreen_=function(){if(R()){var t,e=this.getMap();if(e)if(N())j();else t=this.source_?"string"===typeof this.source_?document.getElementById(this.source_):this.source_:e.getTargetElement(),this.keys_?F(t):x(t)}},e.prototype.handleFullScreenChange_=function(){var t=this.getMap();N()?(this.setClassName_(this.button_,!0),Object(L["f"])(this.labelActiveNode_,this.labelNode_)):(this.setClassName_(this.button_,!1),Object(L["f"])(this.labelNode_,this.labelActiveNode_)),t&&t.updateSize()},e.prototype.setClassName_=function(t,e){var i=this.cssClassName_+"-true",o=this.cssClassName_+"-false",n=e?i:o;t.classList.remove(i),t.classList.remove(o),t.classList.add(n)},e.prototype.setMap=function(e){t.prototype.setMap.call(this,e),e&&this.listenerKeys.push(Object(g["a"])(document,w(),this.handleFullScreenChange_,this))},e}(p["a"]);function R(){var t=document.body;return!!(t.webkitRequestFullscreen||t.mozRequestFullScreen&&document.mozFullScreenEnabled||t.msRequestFullscreen&&document.msFullscreenEnabled||t.requestFullscreen&&document.fullscreenEnabled)}function N(){return!!(document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement)}function x(t){t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()}function F(t){t.mozRequestFullScreenWithKeys?t.mozRequestFullScreenWithKeys():t.webkitRequestFullscreen?t.webkitRequestFullscreen():x(t)}function j(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}var I=P,V=i("333a"),k=i("ee27"),z=i("85aa"),A=i("f440"),H=i("460b"),D=i("c792"),G=i("8524"),U=i("71a8"),Z=.75,B=.1,q=function(t){function e(e){var i=e||{};t.call(this,{element:document.createElement("div"),render:i.render||K,target:i.target}),this.collapsed_=void 0===i.collapsed||i.collapsed,this.collapsible_=void 0===i.collapsible||i.collapsible,this.collapsible_||(this.collapsed_=!1);var o=void 0!==i.className?i.className:"ol-overviewmap",n=void 0!==i.tipLabel?i.tipLabel:"Overview map",s=void 0!==i.collapseLabel?i.collapseLabel:"«";"string"===typeof s?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s):this.collapseLabel_=s;var r=void 0!==i.label?i.label:"»";"string"===typeof r?(this.label_=document.createElement("span"),this.label_.textContent=r):this.label_=r;var a=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_,l=document.createElement("button");l.setAttribute("type","button"),l.title=n,l.appendChild(a),Object(g["a"])(l,_["a"].CLICK,this.handleClick_,this),this.ovmapDiv_=document.createElement("div"),this.ovmapDiv_.className="ol-overviewmap-map",this.ovmap_=new c["a"]({controls:new V["a"],interactions:new V["a"],view:i.view});var h=this.ovmap_;i.layers&&i.layers.forEach(function(t){h.addLayer(t)}.bind(this));var d=document.createElement("div");d.className="ol-overviewmap-box",d.style.boxSizing="border-box",this.boxOverlay_=new H["a"]({position:[0,0],positioning:D["a"].BOTTOM_LEFT,element:d}),this.ovmap_.addOverlay(this.boxOverlay_);var u=o+" "+S["e"]+" "+S["b"]+(this.collapsed_&&this.collapsible_?" "+S["a"]:"")+(this.collapsible_?"":" ol-uncollapsible"),p=this.element;p.className=u,p.appendChild(this.ovmapDiv_),p.appendChild(l);var m=this,f=this.boxOverlay_,v=this.boxOverlay_.getElement(),b=function(t){return{clientX:t.clientX-v.offsetWidth/2,clientY:t.clientY+v.offsetHeight/2}},C=function(t){var e=b(t),i=h.getEventCoordinate(e);f.setPosition(i)},E=function(t){var e=h.getEventCoordinate(t);m.getMap().getView().setCenter(e),window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",E)};v.addEventListener("mousedown",function(){window.addEventListener("mousemove",C),window.addEventListener("mouseup",E)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setMap=function(e){var i=this.getMap();if(e!==i){if(i){var o=i.getView();o&&this.unbindView_(o),this.ovmap_.setTarget(null)}if(t.prototype.setMap.call(this,e),e){this.ovmap_.setTarget(this.ovmapDiv_),this.listenerKeys.push(Object(g["a"])(e,A["a"].PROPERTYCHANGE,this.handleMapPropertyChange_,this)),0===this.ovmap_.getLayers().getLength()&&this.ovmap_.setLayerGroup(e.getLayerGroup());var n=e.getView();n&&(this.bindView_(n),n.isDef()&&(this.ovmap_.updateSize(),this.resetExtent_()))}}},e.prototype.handleMapPropertyChange_=function(t){if(t.key===z["a"].VIEW){var e=t.oldValue;e&&this.unbindView_(e);var i=this.getMap().getView();this.bindView_(i)}},e.prototype.bindView_=function(t){Object(g["a"])(t,Object(f["b"])(G["a"].ROTATION),this.handleRotationChanged_,this)},e.prototype.unbindView_=function(t){Object(g["c"])(t,Object(f["b"])(G["a"].ROTATION),this.handleRotationChanged_,this)},e.prototype.handleRotationChanged_=function(){this.ovmap_.getView().setRotation(this.getMap().getView().getRotation())},e.prototype.validateExtent_=function(){var t=this.getMap(),e=this.ovmap_;if(t.isRendered()&&e.isRendered()){var i=t.getSize(),o=t.getView(),n=o.calculateExtent(i),s=e.getSize(),r=e.getView(),a=r.calculateExtent(s),l=e.getPixelFromCoordinate(Object(U["C"])(n)),h=e.getPixelFromCoordinate(Object(U["w"])(n)),c=Math.abs(l[0]-h[0]),d=Math.abs(l[1]-h[1]),u=s[0],p=s[1];c<u*B||d<p*B||c>u*Z||d>p*Z?this.resetExtent_():Object(U["g"])(a,n)||this.recenter_()}},e.prototype.resetExtent_=function(){if(0!==Z&&0!==B){var t=this.getMap(),e=this.ovmap_,i=t.getSize(),o=t.getView(),n=o.calculateExtent(i),s=e.getView(),r=Math.log(Z/B)/Math.LN2,a=1/(Math.pow(2,r/2)*B);Object(U["J"])(n,a),s.fit(n)}},e.prototype.recenter_=function(){var t=this.getMap(),e=this.ovmap_,i=t.getView(),o=e.getView();o.setCenter(i.getCenter())},e.prototype.updateBox_=function(){var t=this.getMap(),e=this.ovmap_;if(t.isRendered()&&e.isRendered()){var i=t.getSize(),o=t.getView(),n=e.getView(),s=o.getRotation(),r=this.boxOverlay_,a=this.boxOverlay_.getElement(),l=o.calculateExtent(i),h=n.getResolution(),c=Object(U["v"])(l),d=Object(U["D"])(l),u=this.calculateCoordinateRotate_(s,c);r.setPosition(u),a&&(a.style.width=Math.abs((c[0]-d[0])/h)+"px",a.style.height=Math.abs((d[1]-c[1])/h)+"px")}},e.prototype.calculateCoordinateRotate_=function(t,e){var i,o=this.getMap(),n=o.getView(),s=n.getCenter();return s&&(i=[e[0]-s[0],e[1]-s[1]],Object(m["d"])(i,t),Object(m["a"])(i,s)),i},e.prototype.handleClick_=function(t){t.preventDefault(),this.handleToggle_()},e.prototype.handleToggle_=function(){this.element.classList.toggle(S["a"]),this.collapsed_?Object(L["f"])(this.collapseLabel_,this.label_):Object(L["f"])(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_;var t=this.ovmap_;this.collapsed_||t.isRendered()||(t.updateSize(),this.resetExtent_(),Object(g["b"])(t,k["a"].POSTRENDER,function(t){this.updateBox_()},this))},e.prototype.getCollapsible=function(){return this.collapsible_},e.prototype.setCollapsible=function(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),!t&&this.collapsed_&&this.handleToggle_())},e.prototype.setCollapsed=function(t){this.collapsible_&&this.collapsed_!==t&&this.handleToggle_()},e.prototype.getCollapsed=function(){return this.collapsed_},e.prototype.getOverviewMap=function(){return this.ovmap_},e}(p["a"]);function K(t){this.validateExtent_(),this.updateBox_()}var W=q,Y=i("a539"),X=i("b1d9"),J="units",$={DEGREES:"degrees",IMPERIAL:"imperial",NAUTICAL:"nautical",METRIC:"metric",US:"us"},Q=[1,2,5],tt=function(t){function e(e){var i=e||{},o=void 0!==i.className?i.className:"ol-scale-line";t.call(this,{element:document.createElement("div"),render:i.render||et,target:i.target}),this.innerElement_=document.createElement("div"),this.innerElement_.className=o+"-inner",this.element.className=o+" "+S["e"],this.element.appendChild(this.innerElement_),this.viewState_=null,this.minWidth_=void 0!==i.minWidth?i.minWidth:64,this.renderedVisible_=!1,this.renderedWidth_=void 0,this.renderedHTML_="",Object(g["a"])(this,Object(f["b"])(J),this.handleUnitsChanged_,this),this.setUnits(i.units||$.METRIC)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getUnits=function(){return this.get(J)},e.prototype.handleUnitsChanged_=function(){this.updateElement_()},e.prototype.setUnits=function(t){this.set(J,t)},e.prototype.updateElement_=function(){var t=this.viewState_;if(t){var e=t.center,i=t.projection,o=this.getUnits(),n=o==$.DEGREES?X["b"].DEGREES:X["b"].METERS,s=Object(v["e"])(i,t.resolution,e,n);i.getUnits()!=X["b"].DEGREES&&i.getMetersPerUnit()&&n==X["b"].METERS&&(s*=i.getMetersPerUnit());var r=this.minWidth_*s,a="";if(o==$.DEGREES){var l=v["a"][X["b"].DEGREES];i.getUnits()==X["b"].DEGREES?r*=l:s/=l,r<l/60?(a="″",s*=3600):r<l?(a="′",s*=60):a="°"}else o==$.IMPERIAL?r<.9144?(a="in",s/=.0254):r<1609.344?(a="ft",s/=.3048):(a="mi",s/=1609.344):o==$.NAUTICAL?(s/=1852,a="nm"):o==$.METRIC?r<.001?(a="μm",s*=1e6):r<1?(a="mm",s*=1e3):r<1e3?a="m":(a="km",s/=1e3):o==$.US?r<.9144?(a="in",s*=39.37):r<1609.344?(a="ft",s/=.30480061):(a="mi",s/=1609.3472):Object(Y["a"])(!1,33);var h,c,d=3*Math.floor(Math.log(this.minWidth_*s)/Math.log(10));while(1){if(h=Q[(d%3+3)%3]*Math.pow(10,Math.floor(d/3)),c=Math.round(h/s),isNaN(c))return this.element.style.display="none",void(this.renderedVisible_=!1);if(c>=this.minWidth_)break;++d}var u=h+" "+a;this.renderedHTML_!=u&&(this.innerElement_.innerHTML=u,this.renderedHTML_=u),this.renderedWidth_!=c&&(this.innerElement_.style.width=c+"px",this.renderedWidth_=c),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},e}(p["a"]);function et(t){var e=t.frameState;this.viewState_=e?e.viewState:null,this.updateElement_()}var it=tt,ot=i("5a79"),nt=i("a5c2"),st=i("726b"),rt=i("cfac"),at=i("552f"),lt=i("ad3c"),ht=i("a1a8"),ct={VERTICAL:0,HORIZONTAL:1},dt=function(t){function e(e){var i=e||{};t.call(this,{element:document.createElement("div"),render:i.render||ut}),this.dragListenerKeys_=[],this.currentResolution_=void 0,this.direction_=ct.VERTICAL,this.dragging_,this.heightLimit_=0,this.widthLimit_=0,this.previousX_,this.previousY_,this.thumbSize_=null,this.sliderInitialized_=!1,this.duration_=void 0!==i.duration?i.duration:200;var o=void 0!==i.className?i.className:"ol-zoomslider",n=document.createElement("button");n.setAttribute("type","button"),n.className=o+"-thumb "+S["e"];var s=this.element;s.className=o+" "+S["e"]+" "+S["b"],s.appendChild(n),this.dragger_=new ht["a"](s),Object(g["a"])(this.dragger_,lt["a"].POINTERDOWN,this.handleDraggerStart_,this),Object(g["a"])(this.dragger_,lt["a"].POINTERMOVE,this.handleDraggerDrag_,this),Object(g["a"])(this.dragger_,lt["a"].POINTERUP,this.handleDraggerEnd_,this),Object(g["a"])(s,_["a"].CLICK,this.handleContainerClick_,this),Object(g["a"])(n,_["a"].CLICK,rt["b"])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.dragger_.dispose(),t.prototype.disposeInternal.call(this)},e.prototype.setMap=function(e){t.prototype.setMap.call(this,e),e&&e.render()},e.prototype.initSlider_=function(){var t=this.element,e={width:t.offsetWidth,height:t.offsetHeight},i=t.firstElementChild,o=getComputedStyle(i),n=i.offsetWidth+parseFloat(o["marginRight"])+parseFloat(o["marginLeft"]),s=i.offsetHeight+parseFloat(o["marginTop"])+parseFloat(o["marginBottom"]);this.thumbSize_=[n,s],e.width>e.height?(this.direction_=ct.HORIZONTAL,this.widthLimit_=e.width-n):(this.direction_=ct.VERTICAL,this.heightLimit_=e.height-s),this.sliderInitialized_=!0},e.prototype.handleContainerClick_=function(t){var e=this.getMap().getView(),i=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),o=this.getResolutionForPosition_(i);e.animate({resolution:e.constrainResolution(o),duration:this.duration_,easing:st["b"]})},e.prototype.handleDraggerStart_=function(t){if(!this.dragging_&&t.originalEvent.target===this.element.firstElementChild&&(this.getMap().getView().setHint(nt["a"].INTERACTING,1),this.previousX_=t.clientX,this.previousY_=t.clientY,this.dragging_=!0,0===this.dragListenerKeys_.length)){var e=this.handleDraggerDrag_,i=this.handleDraggerEnd_;this.dragListenerKeys_.push(Object(g["a"])(document,_["a"].MOUSEMOVE,e,this),Object(g["a"])(document,lt["a"].POINTERMOVE,e,this),Object(g["a"])(document,_["a"].MOUSEUP,i,this),Object(g["a"])(document,lt["a"].POINTERUP,i,this))}},e.prototype.handleDraggerDrag_=function(t){if(this.dragging_){var e=this.element.firstElementChild,i=t.clientX-this.previousX_+parseFloat(e.style.left),o=t.clientY-this.previousY_+parseFloat(e.style.top),n=this.getRelativePosition_(i,o);this.currentResolution_=this.getResolutionForPosition_(n),this.getMap().getView().setResolution(this.currentResolution_),this.setThumbPosition_(this.currentResolution_),this.previousX_=t.clientX,this.previousY_=t.clientY}},e.prototype.handleDraggerEnd_=function(t){if(this.dragging_){var e=this.getMap().getView();e.setHint(nt["a"].INTERACTING,-1),e.animate({resolution:e.constrainResolution(this.currentResolution_),duration:this.duration_,easing:st["b"]}),this.dragging_=!1,this.previousX_=void 0,this.previousY_=void 0,this.dragListenerKeys_.forEach(g["e"]),this.dragListenerKeys_.length=0}},e.prototype.setThumbPosition_=function(t){var e=this.getPositionForResolution_(t),i=this.element.firstElementChild;this.direction_==ct.HORIZONTAL?i.style.left=this.widthLimit_*e+"px":i.style.top=this.heightLimit_*e+"px"},e.prototype.getRelativePosition_=function(t,e){var i;return i=this.direction_===ct.HORIZONTAL?t/this.widthLimit_:e/this.heightLimit_,Object(at["a"])(i,0,1)},e.prototype.getResolutionForPosition_=function(t){var e=this.getMap().getView().getResolutionForValueFunction();return e(1-t)},e.prototype.getPositionForResolution_=function(t){var e=this.getMap().getView().getValueForResolutionFunction();return 1-e(t)},e}(p["a"]);function ut(t){if(t.frameState){this.sliderInitialized_||this.initSlider_();var e=t.frameState.viewState.resolution;e!==this.currentResolution_&&(this.currentResolution_=e,this.setThumbPosition_(e))}}var pt=dt,mt=function(t){function e(e){var i=e||{};t.call(this,{element:document.createElement("div"),target:i.target}),this.extent=i.extent?i.extent:null;var o=void 0!==i.className?i.className:"ol-zoom-extent",n=void 0!==i.label?i.label:"E",s=void 0!==i.tipLabel?i.tipLabel:"Fit to extent",r=document.createElement("button");r.setAttribute("type","button"),r.title=s,r.appendChild("string"===typeof n?document.createTextNode(n):n),Object(g["a"])(r,_["a"].CLICK,this.handleClick_,this);var a=o+" "+S["e"]+" "+S["b"],l=this.element;l.className=a,l.appendChild(r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleClick_=function(t){t.preventDefault(),this.handleZoomToExtent()},e.prototype.handleZoomToExtent=function(){var t=this.getMap(),e=t.getView(),i=this.extent?this.extent:e.getProjection().getExtent();e.fit(i)},e}(p["a"]),gt=mt,_t=i("43e9"),ft={name:"map-control",watch:{zoomValue:function(t,e){t>28?this.zoomValue=new Number(28):t<0&&(this.zoomValue=new Number(0))},controlList:function(t,e){t!==e&&(t.includes("Mouse Position")&&!e.includes("Mouse Position")?this.map.addControl(this.mapControls.mousePositionControl):!t.includes("Mouse Position")&&e.includes("Mouse Position")&&this.map.removeControl(this.mapControls.mousePositionControl),t.includes("Attribution")&&!e.includes("Attribution")?this.map.addControl(this.mapControls.attributionControl):!t.includes("Attribution")&&e.includes("Attribution")&&this.map.removeControl(this.mapControls.attributionControl),t.includes("Rotate")&&!e.includes("Rotate")?this.map.addControl(this.mapControls.rotateControl):!t.includes("Rotate")&&e.includes("Rotate")&&this.map.removeControl(this.mapControls.rotateControl),t.includes("Full Screen")&&!e.includes("Full Screen")?this.map.addControl(this.mapControls.fullScreenControl):!t.includes("Full Screen")&&e.includes("Full Screen")&&this.map.removeControl(this.mapControls.fullScreenControl),t.includes("Overview Map")&&!e.includes("Overview Map")?(this.map.addControl(this.mapControls.overviewMapControl),l()(this.mapControls.scaleLineControl.element).removeClass("ol-scale-line-left")):!t.includes("Overview Map")&&e.includes("Overview Map")&&(this.map.removeControl(this.mapControls.overviewMapControl),l()(this.mapControls.scaleLineControl.element).addClass("ol-scale-line-left")),t.includes("Scale Line")&&!e.includes("Scale Line")?this.map.addControl(this.mapControls.scaleLineControl):!t.includes("Scale Line")&&e.includes("Scale Line")&&this.map.removeControl(this.mapControls.scaleLineControl),t.includes("Zoom")&&!e.includes("Zoom")?this.map.addControl(this.mapControls.zoomControl):!t.includes("Zoom")&&e.includes("Zoom")&&this.map.removeControl(this.mapControls.zoomControl),t.includes("Zoom Slider")&&!e.includes("Zoom Slider")?this.map.addControl(this.mapControls.zoomSliderControl):!t.includes("Zoom Slider")&&e.includes("Zoom Slider")&&this.map.removeControl(this.mapControls.zoomSliderControl),t.includes("Zoom To Extent")&&!e.includes("Zoom To Extent")?this.map.addControl(this.mapControls.zoomToExtentControl):!t.includes("Zoom To Extent")&&e.includes("Zoom To Extent")&&this.map.removeControl(this.mapControls.zoomToExtentControl))}},data:function(){return{map:{},mapHeight:"",layers:[],view:{},zoomValue:0,mapControls:{mousePositionControl:{},attributionControl:{},rotateControl:{},fullScreenControl:{},overviewMapControl:{},scaleLineControl:{},zoomControl:{},zoomSliderControl:{},zoomToExtentControl:{}},controlList:[],isOverviewMapCollapsed:!0,isFullScreen:!1,controlBoardActive:"1"}},methods:{createCoordinateString:function(t){return"Mouse Position: ( "+Object(m["b"])("EW",t[0],2)+", "+Object(m["b"])("NS",t[1],2)+" )"},preDefine:function(){var t=l()(".content-box").css("height");this.mapHeight=(t.split("px")[0]-38).toString()+"px",l()("#map").css("height",this.mapHeight),this.layers=[new d["a"]({source:new u["a"]})],this.view=new h["a"]({center:[114.353741,30.528813],zoom:4,projection:"EPSG:4326"}),this.mapControls.mousePositionControl=new O({coordinateFormat:this.createCoordinateString,projection:"EPSG:4326",className:"custom-mouse-position"}),this.mapControls.attributionControl=new T["a"],this.mapControls.rotateControl=new M["a"]({className:"ol-rotate",autoHide:!0}),this.mapControls.fullScreenControl=new I({className:"ol-full-screen"}),this.mapControls.overviewMapControl=new W({view:new h["a"]({projection:"EPSG:4326"})}),this.mapControls.scaleLineControl=new it,this.mapControls.zoomControl=new ot["a"],this.mapControls.zoomSliderControl=new pt,this.mapControls.zoomToExtentControl=new gt},createMap:function(){this.map=new c["a"]({controls:Object(_t["a"])({attribution:!1,zoom:!1,rotate:!1}).extend([this.mapControls.mousePositionControl,this.mapControls.rotateControl,this.mapControls.fullScreenControl,this.mapControls.overviewMapControl,this.mapControls.scaleLineControl,this.mapControls.zoomControl,this.mapControls.zoomSliderControl]),target:"map",layers:this.layers,view:this.view}),this.zoomValue=this.map.getView().getZoom()},zoomUp:function(){this.map.getView().setZoom(++this.zoomValue)},zoomDowm:function(){this.map.getView().setZoom(--this.zoomValue)},addListener:function(){var t=this,e=this.mapControls;this.map.on("postrender",function(e){t.zoomValue=r()(e.map.getView().getZoom())}),l()(e.overviewMapControl.element).children("button").click(function(i){t.isOverviewMapCollapsed=!t.isOverviewMapCollapsed,l()(e.scaleLineControl.element).toggleClass("ol-scale-line-right")}),l()(e.fullScreenControl.element).children("button").click(function(e){t.isFullScreen=!t.isFullScreen,l()("#map").css("height",t.isFullScreen?"100%":t.mapHeight)})},addCustomControl:function(){this.map.addControl(new p["a"]({element:l()("#checkbox-board")[0]}))},onControlBoardClick:function(t){var e=this.mapControls.fullScreenControl.element,i=this.mapControls.rotateControl.element;"1"===t?(l()(e).toggleClass("anim-full-screen-left"),l()(i).toggleClass("anim-rotate-left"),l()(e).removeClass("ol-full-screen-right"),l()(i).removeClass("ol-rotate-right"),setTimeout(function(t){l()(e).toggleClass("anim-full-screen-left"),l()(i).toggleClass("anim-rotate-left")},500)):(setTimeout(function(){l()(e).toggleClass("anim-full-screen-right"),l()(i).toggleClass("anim-rotate-right"),l()(e).addClass("ol-full-screen-right"),l()(i).addClass("ol-rotate-right")},300),setTimeout(function(t){l()(e).toggleClass("anim-full-screen-right"),l()(i).toggleClass("anim-rotate-right")},500))}},mounted:function(){this.preDefine(),this.createMap(),this.addCustomControl(),this.addListener()},beforeDestroy:function(){var t=this.map;this.controlList.forEach(function(e){t.removeControl(e)})}},vt=ft,bt=(i("e251"),i("8870"),i("17cc")),Ct=Object(bt["a"])(vt,o,n,!1,null,"33cf394b",null);e["default"]=Ct.exports},dd8b:function(t,e,i){var o=i("f3ae")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[o]=!1,!"/./"[t](e)}catch(n){}}return!0}},e0c1:function(t,e,i){"use strict";var o=i("2d2c"),n=i("0d0d")(!0);o(o.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("68fb")("includes")},e251:function(t,e,i){"use strict";var o=i("da54"),n=i.n(o);n.a},ec44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1c1d6bee.9b8769a8.js.map