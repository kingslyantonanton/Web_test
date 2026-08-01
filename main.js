const msg='Hey, Kashish.';let i=0;const t=document.getElementById('typing');(function type(){if(i<msg.length){t.textContent+=msg[i++];setTimeout(type,120)}})();document.getElementById('continueBtn').onclick=()=>{if(music.paused)music.play();document.querySelector('.story').scrollIntoView({behavior:'smooth'});}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.2});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const lastThing=document.getElementById("lastThing");

const ending=document.getElementById("endingText");

lastThing.onclick=()=>{

document.getElementById("paper").style.opacity="0";

document.getElementById("paper").style.transform="translateY(-40px)";

lastThing.style.display="none";

setTimeout(()=>{

ending.classList.add("show");

},700);

}