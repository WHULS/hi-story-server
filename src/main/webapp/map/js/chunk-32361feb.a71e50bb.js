(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32361feb"],{5381:function(e,a,t){"use strict";var r=t("9854"),n=t.n(r);n.a},9854:function(e,a,t){},c437f:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{attrs:{id:"map"}}),[t("div",{attrs:{id:"select-draw-type"}},[t("el-select",{model:{value:e.drawType,callback:function(a){e.drawType=a},expression:"drawType"}},e._l(e.drawTypeArr,function(e){return t("el-option",{key:e,attrs:{value:e,label:e}})}),1)],1)]],2)},n=[],o=(t("ea65"),t("48fb"),t("a60a")),i=t.n(o),c=t("f4e3"),s=t("35cc"),d=t("0470"),w=t("5810"),u=t("b929"),l=t("ed5e"),p=t("f2b0"),f=t("ed14"),h=t("9af2"),m=t("12fb"),y=t("4e71"),g=t("f48d"),v=t("68a9"),S=t("d4e1"),b={name:"map-drawer",watch:{drawType:function(e,a){e!==a&&(this.map.removeInteraction(this.draw),this.addDrawInteraction(e))}},data:function(){return{map:{},view:{},layers:[],drawLayer:{},drawSource:{},draw:{},drawTypeArr:["None","Point","LineString","Polygon","Circle","Square","Box"],drawType:"Box",clickCount:0,boxCoordinates:new Array(2)}},methods:{addDrawInteraction:function(e){var a,t;""!==e&&"None"!==e?(null==this.drawSource&&(this.drawSource=new f["a"]({wrapX:!1}),this.drawLayer.setSource(this.drawSource)),"Square"===e?(e="Circle",a=Object(v["a"])(4)):"Box"===e&&(e="LineString",t=2,a=function(e,a){a||(a=new S["a"](e));var t=e[0],r=e[1];return a.setCoordinates([[t,[t[0],r[1]],r,[r[0],t[1]],t]]),a}),this.draw=new v["b"]({source:this.drawSource,type:e,geometryFunction:a,maxPoints:t}),this.map.addInteraction(this.draw)):(this.drawSource=null,this.drawLayer.setSource(this.drawSource))},preDefineDrawer:function(){this.drawSource=new f["a"]({wrapX:!1}),this.drawLayer=new p["a"]({source:this.drawSource,style:new m["c"]({fill:new y["a"]({color:[255,255,255,.2]}),stroke:new g["a"]({color:"#ffcc33",width:2}),image:new h["a"]({radius:7,fill:new y["a"]({color:"#ffcc33"})})})})},preDefine:function(){this.view=new c["a"]({center:[114,30],zoom:3,projection:"EPSG:4326"}),this.layers=[new d["a"]({source:new w["a"]}),this.drawLayer]},createMap:function(){var e=this,a=this;a.map=new s["a"]({target:"map",view:this.view,layers:this.layers}),a.map.on("click",function(e){var t=Object(l["g"])(e.coordinate,6),r=e.map.getView().getZoom();a.$notify({message:t+", "+r,type:"success"}),a.clickCount++,a.clickCount%2===1?a.boxCoordinates[0]=a.map.getPixelFromCoordinate(e.coordinate):a.boxCoordinates[1]=a.map.getPixelFromCoordinate(e.coordinate)}),a.map.addControl(new u["a"]({element:i()("#select-draw-type")[0]})),a.addDrawInteraction(this.drawType),this.draw.on("drawend",function(t){a.drawSource=null,a.drawLayer.setSource(a.drawSource),a.clickCount=0,a.$confirm("是否下载图片？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=a.boxCoordinates;if(e[0][0]>e[1][0]){var t=e[0][0];e[0][0]=e[1][0],e[1][0]=t}if(e[0][1]>e[1][1]){var r=e[0][1];e[0][1]=e[1][1],e[1][1]=r}var n=a.map.renderer_.canvas_,o=n.getContext("2d"),c=e[0][0],s=e[0][1],d=e[1][0]-e[0][0],w=e[1][1]-e[0][1],u=o.getImageData(c,s,d,w),l=(new Date).getTime(),p=i()('<canvas style="display:none;" id="'+l+'" width="'+d+'" height="'+w+'"></canvas>')[0];p.getContext("2d").putImageData(u,0,0);var f=i()("<a></a>").attr("href",p.toDataURL("image/png")).attr("download",l+".png");a.$message({type:"success",message:"开始下载: ["+l+".png]"}),f[0].click(),i()("#"+l).remove()}).catch(function(a){e.$message({type:"info",message:"已取消下载 ["+a+"]"})})})}},mounted:function(){var e=i()(".content-box").css("height");e=e.split("px")[0].toString()+"px",i()("#map").css("height",e),this.preDefineDrawer(),this.preDefine(),this.createMap()}},x=b,C=(t("5381"),t("17cc")),D=Object(C["a"])(x,r,n,!1,null,"6a4d94b8",null);a["default"]=D.exports}}]);
//# sourceMappingURL=chunk-32361feb.a71e50bb.js.map