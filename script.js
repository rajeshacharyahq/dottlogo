(()=>{const w=document.querySelector(".dott-wrap"),s=w.querySelector("svg");
const c=document.getElementById("canvasdottlogo"),g=c.getContext("2d");
const vb=s.viewBox.baseVal,W=vb.width||897,H=vb.height||400,LH=282;
const D=([[W/1.165,LH/8.9,"#8ec845",6,.33,.05,.22],
         [W/1.72 ,LH/8.9,"#4b3bb7",2,.33,.05,.22],
         [W/5.9  ,LH/2.03,"#f56a1e",3,.90,.05,.21],
         [W/2.625,LH/1.555,"#bc2430",9,.90,.05,.095]])
.map(([x,y,col,L,a,r,arc])=>({x,y,col,L,a:a*Math.PI,v:0,r:LH*r,arc:LH*arc}));

const R=_=>{const r=s.getBoundingClientRect(),d=devicePixelRatio||1;
c.width=Math.round(r.width*d); c.height=Math.round(r.height*d);
g.setTransform(r.width/W*d,0,0,r.height/H*d,0,0);};

R(); new ResizeObserver(R).observe(w);

let t=performance.now(); (function F(n){
const dt=Math.min(.03,(n-t)/1e3); t=n;
g.clearRect(0,0,W,H);
for(const d of D){d.v+=(-10/d.L)*Math.sin(d.a)*dt; d.a+=d.v*dt;
g.fillStyle=d.col; g.beginPath();
g.arc(d.x+Math.sin(d.a)*d.arc,d.y+Math.cos(d.a)*d.arc,d.r,0,Math.PI*2); g.fill();}
requestAnimationFrame(F)})(t);
})();
