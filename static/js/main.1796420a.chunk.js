(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(120)},120:function(e,t,n){"use strict";n.r(t);var c=n(112),r=n(113),a=n(118),o=n(117),i=n(56),f=n(11),u=n.n(f),s=n(114),l=n.n(s),d=n(115);n(7),n(218);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,c=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(e){Object(a.a)(n,e);var t=v(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).videoRef=u.a.createRef(),e.canvasRef=u.a.createRef(),e.detectFrame=function(t,n){n.detect(t).then(function(c){e.renderPredictions(c),requestAnimationFrame(function(){e.detectFrame(t,n)})})},e.renderPredictions=function(t){var n=e.canvasRef.current.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);var c="16px sans-serif";n.font=c,n.textBaseline="top",t.forEach(function(e){var t=e.bbox[0],r=e.bbox[1],a=e.bbox[2],o=e.bbox[3];n.strokeStyle="#00FFFF",n.lineWidth=4,n.strokeRect(t,r,a,o),n.fillStyle="#00FFFF";var i=n.measureText(e.class).width,f=parseInt(c,10);n.fillRect(t,r,i+4,f+4)}),t.forEach(function(e){var t=e.bbox[0],c=e.bbox[1];n.fillStyle="#000000",n.fillText(e.class,t,c)})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise(function(t,n){e.videoRef.current.onloadedmetadata=function(){t()}})}),n=d.a();Promise.all([n,t]).then(function(t){e.detectFrame(e.videoRef.current,t[0])}).catch(function(e){console.error(e)})}}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("video",{className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:"2000",height:"1000"}),u.a.createElement("canvas",{className:"size",ref:this.canvasRef,width:"2000",height:"1000"}))}}]),n}(u.a.Component),m=document.getElementById("root");l.a.render(u.a.createElement(h,null),m)},129:function(e,t){},131:function(e,t){},141:function(e,t){},143:function(e,t){},168:function(e,t){},169:function(e,t){},174:function(e,t){},176:function(e,t){},183:function(e,t){},202:function(e,t){},218:function(e,t,n){}},[[119,2,1]]]);
//# sourceMappingURL=main.1796420a.chunk.js.map