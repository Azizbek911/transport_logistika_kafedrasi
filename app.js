const teachers = [
  {id:1,e:"А",name:"G'ulom Ibroximovich Mamayev",title:"Professor, Kafedra mudiri",deg:"Iqtisodiyot fanlari doktori",subj:"Logistika strategiyasi, Ta'minot zanjiri boshqaruvi",exp:"20 yil",ph:"+998 90 123-45-67",em:"aliyev@university.uz",tg:"@aliyev_log",fb:"fb.com/aliyev",art:"50+",edu:"ToshDIU, 2003 — Doktorantura",bio:"Professor Aliyev 20 yillik pedagogik faoliyati davomida 3 monografiya va 50 dan ortiq ilmiy maqola nashr etgan. Xalqaro logistika assotsiatsiyasi a'zosi, bir nechta xalqaro konferensiyalar tashkilotchisi."},
  {id:2,e:"К",name:"Karimova Dilnoza Saidovna",title:"Dotsent",deg:"Iqtisodiyot fanlari nomzodi",subj:"Omborxona logistikasi, Inventarizatsiya boshqaruvi",exp:"12 yil",ph:"+998 90 234-56-78",em:"karimova@university.uz",tg:"@karimova_d",fb:"fb.com/karimova",art:"28",edu:"TDIU, 2011 — Nomzodlik dissertatsiyasi",bio:"Zamonaviy omborxona texnologiyalari va inventarizatsiya boshqaruvi sohasining yetakchi mutaxassisi. Germaniyada stajirovka o'tagan."},
  {id:3,e:"Р",name:"Rahimov Jasur Ulugbek o'g'li",title:"Katta o'qituvchi",deg:"Iqtisodiyot magistri",subj:"Transport logistikasi, Multimodal tashish",exp:"7 yil",ph:"+998 90 345-67-89",em:"rahimov@university.uz",tg:"@rahimov_j",fb:"fb.com/rahimov",art:"15",edu:"Westminster Univ. Toshkent, 2017 — MBA",bio:"Transport logistikasi va multimodal tashish sohasida keng tajribaga ega. Bir nechta xalqaro loyihalarda maslahatchi sifatida ishtirok etgan."},
  {id:4,e:"Ю",name:"Yusupova Mohlaroyim Ikromovna",title:"Dotsent",deg:"Texnika fanlari nomzodi",subj:"Raqamli logistika, ERP tizimlari",exp:"10 yil",ph:"+998 90 456-78-90",em:"yusupova@university.uz",tg:"@yusupova_m",fb:"fb.com/yusupova",art:"22",edu:"TATU, 2013 — Nomzodlik",bio:"Raqamli logistika va ERP tizimlarini joriy etish bo'yicha O'zbekistonda ilk mutaxassislardan biri. SAP va Oracle sertifikatiga ega."},
  {id:5,e:"Х",name:"Xolmatov Sherzod Botirovich",title:"Katta o'qituvchi",deg:"Iqtisodiyot magistri",subj:"Xalqaro savdo logistikasi, Bojxona",exp:"8 yil",ph:"+998 90 567-89-01",em:"xolmatov@university.uz",tg:"@xolmatov_sh",fb:"fb.com/xolmatov",art:"18",edu:"Kimyo texnologiya universiteti, 2016",bio:"Xalqaro savdo va bojxona logistikasi sohasida amaliy tajribaga ega mutaxassis. Koreyalik kompaniyalar bilan hamkorlik loyihalarini boshqargan."},
  {id:6,e:"Н",name:"Nazarova Zulfiya Hamidovna",title:"O'qituvchi",deg:"Iqtisodiyot magistri",subj:"Logistika matematikasi, Optimizatsiya",exp:"5 yil",ph:"+998 90 678-90-12",em:"nazarova@university.uz",tg:"@nazarova_z",fb:"fb.com/nazarova",art:"10",edu:"NUUz, 2019 — Magistratura",bio:"Logistika jarayonlarini matematik modellashtirish va optimizatsiya qilish sohasida ilmiy tadqiqotlar olib bormoqda."}
];

function tcard(t,oc){
  return `<div class="tcard" onclick="${oc}">
    <div class="tav">${t.e}</div>
    <div class="tname">${t.name}</div>
    <div class="tpos">${t.title}</div>
    <div class="tsocials">
      <a class="soc" href="https://facebook.com" target="_blank" onclick="event.stopPropagation()" title="Facebook">🔵</a>
      <a class="soc" href="mailto:${t.em}" onclick="event.stopPropagation()" title="Email">📧</a>
      <a class="soc" href="https://t.me/${t.tg}" target="_blank" onclick="event.stopPropagation()" title="Telegram">✈️</a>
      <a class="soc" href="tel:${t.ph}" onclick="event.stopPropagation()" title="Telefon">📞</a>
    </div>
  </div>`;
}

function renderGrid(id,lim){
  const el=document.getElementById(id); if(!el)return;
  const list=lim?teachers.slice(0,lim):teachers;
  el.innerHTML=list.map(t=>tcard(t,`showProfile(${t.id})`)).join('');
}

function showProfile(id){
  const t=teachers.find(x=>x.id===id); if(!t)return;
  document.getElementById('profileBanner').innerHTML=`
    <svg class="pbg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="310" cy="150" r="130" stroke="rgba(200,164,74,1)" stroke-width="1.2"/>
      <circle cx="310" cy="150" r="90" stroke="rgba(200,164,74,.7)" stroke-width="1.2"/>
      <circle cx="310" cy="150" r="48" stroke="rgba(200,164,74,.4)" stroke-width="1.2"/>
      <line x1="180" y1="150" x2="440" y2="150" stroke="rgba(200,164,74,.25)" stroke-width="1"/>
      <line x1="310" y1="20" x2="310" y2="280" stroke="rgba(200,164,74,.25)" stroke-width="1"/>
    </svg>
    <div class="pbav">${t.e}</div>
    <div class="pinfo">
      <h1>${t.name}</h1>
      <div class="prole">🎓 ${t.title} · ${t.deg}</div>
      <p class="pbio">${t.bio}</p>
      <div class="chips">
        <a href="https://facebook.com" target="_blank" class="chip">🔵 Facebook</a>
        <a href="mailto:${t.em}" class="chip">📧 ${t.em}</a>
        <a href="https://t.me/${t.tg}" target="_blank" class="chip">✈️ ${t.tg}</a>
        <a href="tel:${t.ph}" class="chip">📞 ${t.ph}</a>
      </div>
    </div>`;
  document.getElementById('profileBody').innerHTML=`
    <div>
      <div class="icard"><h3>📋 Asosiy ma'lumotlar</h3>
        <div class="ir"><span class="lb">Ilmiy daraja:</span><span class="vl">${t.deg}</span></div>
        <div class="ir"><span class="lb">Lavozim:</span><span class="vl">${t.title}</span></div>
        <div class="ir"><span class="lb">Tajriba:</span><span class="vl">${t.exp}</span></div>
        <div class="ir"><span class="lb">Maqolalar:</span><span class="vl">${t.art} ta</span></div>
        <div class="ir"><span class="lb">Ta'lim:</span><span class="vl">${t.edu}</span></div>
      </div>
      <div class="icard"><h3>📚 O'qitiladigan fanlar</h3><p style="color:var(--sub);font-size:14px;line-height:1.7;">${t.subj}</p></div>
    </div>
    <div>
      <div class="icard"><h3>📬 Aloqa</h3>
        <div class="ir"><span class="lb">Email:</span><a href="mailto:${t.em}" style="color:var(--accent);text-decoration:none;font-size:13.5px;">${t.em}</a></div>
        <div class="ir"><span class="lb">Telegram:</span><a href="https://t.me/${t.tg}" target="_blank" style="color:var(--accent);text-decoration:none;font-size:13.5px;">${t.tg}</a></div>
        <div class="ir"><span class="lb">Telefon:</span><a href="tel:${t.ph}" style="color:var(--accent);text-decoration:none;font-size:13.5px;">${t.ph}</a></div>
        <div class="ir"><span class="lb">Facebook:</span><a href="https://facebook.com" target="_blank" style="color:var(--accent);text-decoration:none;font-size:13.5px;">Sahifaga o'tish →</a></div>
      </div>
      <div class="icard"><h3>⏰ Qabul vaqti</h3>
        <div class="ir"><span class="lb">Dushanba:</span><span class="vl">10:00 – 12:00</span></div>
        <div class="ir"><span class="lb">Chorshanba:</span><span class="vl">14:00 – 16:00</span></div>
        <div class="ir"><span class="lb">Juma:</span><span class="vl">10:00 – 12:00</span></div>
        <p style="color:var(--sub);font-size:12px;margin-top:9px;">* Oldindan belgilash tavsiya etiladi</p>
      </div>
    </div>`;
  showPage('teacher-profile');
}

function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-center a').forEach(a=>a.classList.remove('active'));
  const pg=document.getElementById('page-'+name); if(pg)pg.classList.add('active');
  const nav=document.getElementById('nav-'+name); if(nav)nav.classList.add('active');
  window.scrollTo(0,0);
  document.getElementById('navLinks').classList.remove('open');
  injectFooters();
}
function toggleBurger(){ document.getElementById('navLinks').classList.toggle('open'); }
function toggleTheme(){
  const h=document.documentElement;
  h.setAttribute('data-theme',h.getAttribute('data-theme')==='dark'?'light':'dark');
  localStorage.setItem('theme',h.getAttribute('data-theme'));
}
(function(){const s=localStorage.getItem('theme');if(s)document.documentElement.setAttribute('data-theme',s);})();

const fids=['homeFooter','newsFooter','historyFooter','teachersFooter','profileFooter','activitiesFooter'];
function injectFooters(){
  fids.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.innerHTML.trim()===''){
      el.appendChild(document.getElementById('ftpl').content.cloneNode(true));
    }
  });
}
function openModal(){document.getElementById('contactModal').classList.add('open');}
function closeModal(){document.getElementById('contactModal').classList.remove('open');}
document.getElementById('contactModal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal();});

renderGrid('homeTeachersGrid',3);
renderGrid('allTeachersGrid');
injectFooters();