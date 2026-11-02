document.getElementById('yr').textContent=new Date().getFullYear();
var menu=document.getElementById('menu');
document.getElementById('menuBtn').addEventListener('click',function(){menu.classList.toggle('open')});
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open')})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show')}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
