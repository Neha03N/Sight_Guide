(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{232:function(e,t,n){e.exports=n(258)},237:function(e,t,n){},242:function(e,t){},243:function(e,t){},251:function(e,t){},254:function(e,t){},255:function(e,t){},256:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(35),c=n.n(a),o=n(210),i=n.n(o),r=(n(237),n(257),n(230)),s=n(231),l=n.n(s);n(256);const d=e=>{const t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t)},u=()=>{window.speechSynthesis.cancel()};var m=function(){const e=Object(a.useRef)(null),t=Object(a.useRef)(null),[n,o]=Object(a.useState)(null),[i,s]=Object(a.useState)("environment"),m=async a=>{if("undefined"!==typeof e.current&&null!==e.current&&4===e.current.video.readyState){const c=e.current.video,i=e.current.video.videoWidth,r=e.current.video.videoHeight;e.current.video.width=i,e.current.video.height=r,t.current.width=i,t.current.height=r;const s=await a.detect(c);((e,t)=>{let n=!1;e.forEach(e=>{const[a,c,o,i]=e.bbox,r=e.class,s=Math.floor(16777215*Math.random()).toString(16);t.strokeStyle="#"+s,t.font="18px Arial",t.beginPath(),t.fillStyle="#"+s,t.fillText(r,a,c),t.rect(a,c,o,i),t.stroke(),n=!0,d(r)}),n||u()})(s,t.current.getContext("2d"));const l=s.length>0?s[0].class:null;l&&l!==n&&(d(l),o(l))}},h=async t=>{try{console.log("Starting camera with facing mode:",t);const n=await navigator.mediaDevices.enumerateDevices();let a=null;n.forEach(e=>{"videoinput"===e.kind&&e.label.includes("back")&&(a=e.deviceId)});const c={video:{deviceId:a?{exact:a}:void 0,facingMode:t}};if(console.log("Selected Device ID:",a),n.some(e=>"videoinput"===e.kind)){const n=await navigator.mediaDevices.getUserMedia(c);e.current.srcObject=n,console.log("Camera started with facing mode:",t)}else console.error("No camera devices available."),alert("No camera devices available.")}catch(n){console.error("Error accessing camera:",n),alert("Error accessing camera. Please make sure your camera is enabled and try again.")}};return Object(a.useEffect)(()=>{console.log("Running useEffect"),(async()=>{const e=await r.load();console.log("Handpose model loaded."),setInterval(()=>{m(e)},10)})(),h()},[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("button",{className:"login"},"LogIn"),c.a.createElement("div",{className:"navbar-brand"},"Sight Guide")),c.a.createElement(l.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:"90%",maxWidth:"640px",height:"auto",top:"80px"}}),c.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:"90%",maxWidth:"640px",height:"auto",top:"80px"}}),n&&c.a.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",color:"black",padding:"10px 10px",borderRadius:2}},"Detected Object: ",n),c.a.createElement("button",{className:"detect-button",onClick:()=>{const e="user"===i?"environment":"user";s(e),h(e)}},"Switch Camera")))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.bea54896.chunk.js.map