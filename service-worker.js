if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>d(e,c),l={module:{uri:c},exports:s,require:n};i[c]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/02/17/hello-world/index.html",revision:"bfe9be1ff29224de3194273d1328ce57"},{url:"2020/02/18/deploy/index.html",revision:"4e08fb6739429ad881aaad3aec3895bb"},{url:"2020/02/23/note_1/index.html",revision:"c139d96a4fd72d01761e5d8578e837cb"},{url:"2021/12/05/digital_forensics_2021_12_05/index.html",revision:"aa7e5a862216aa65ab54463eb64c0311"},{url:"2022/03/05/digital_forensics_2022_03_05/index.html",revision:"121888db3421de76fb91627fad432a3a"},{url:"archives/2020/02/index.html",revision:"ebbfabe7268c267e7593a2d727da6bc3"},{url:"archives/2020/index.html",revision:"3e514d5f2fd693fbae071fe6e9dae7f7"},{url:"archives/2021/12/index.html",revision:"6673e3f2af24ecc584927d5eaa80c5f4"},{url:"archives/2021/index.html",revision:"9e4c43925837ea8fde61fa6a5cdf3460"},{url:"archives/2022/03/index.html",revision:"9756d8f77cb89c0b72cf5043e18e4bb8"},{url:"archives/2022/index.html",revision:"1f229a39ad8408403a6bc5aa5632f252"},{url:"archives/index.html",revision:"7fcff1146b591c62f7febd170ef6e803"},{url:"categories/index.html",revision:"e4a82dc86a1068b1f59c6753b40b5e2a"},{url:"categories/教學/index.html",revision:"6d2c11369ca2f6f1fc40ef0d77498951"},{url:"categories/筆記/index.html",revision:"3a44b3d0e9ec66928e5853815a0358e6"},{url:"css/index.css",revision:"c0cd7a635619389cb5649744e99b042e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"cae3eebf3121aedff311f6eea7e76a5e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"c291715561b777d5601df42b8d8fc791"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"1651529f1917b9d4b66fc6093a981df3"},{url:"js/main.js",revision:"06c6a43fd1e82861109b1eee73f8ead7"},{url:"js/tw_cn.js",revision:"66b7ceb1aa8c2e14b8913f2372bd8b1c"},{url:"js/utils.js",revision:"0673a8ee6ec8fe5ac3e009795707377f"},{url:"link/index.html",revision:"7a90378e97572b4c22a12874d71da27b"},{url:"message board/index.html",revision:"1c82603d985993193847401495966c59"},{url:"tags/CI/index.html",revision:"fb3ff857a4cb9aba06f0ec2a971596f8"},{url:"tags/css/index.html",revision:"6fcd867538380767e08aceda3ef0bc6d"},{url:"tags/deploy/index.html",revision:"f78e0c86d4ad0979e8d1fc01dc1f5a19"},{url:"tags/Digital-forensics/index.html",revision:"c28d3bb31932365686ede2c5b31d1220"},{url:"tags/index.html",revision:"5a050c9fe55ff180fc9c105d5083c8a2"},{url:"tags/js/index.html",revision:"e0aaa437365583cdf289d4854c8015bd"},{url:"tags/Linux/index.html",revision:"42d0dbb478f8ecce1bd0d8c7c0ddb338"},{url:"tags/ubuntu/index.html",revision:"27d326cd7be6f0ae711d57654db9da21"},{url:"tags/upgrade/index.html",revision:"cb6844792e75a57a9c59f4b0ce25b11b"}],{})}));
//# sourceMappingURL=service-worker.js.map
