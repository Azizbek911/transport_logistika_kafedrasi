const teachers = [
  { id: 1,  e: "М", img: "./images/teachers/mamayev.jpg",         name: "Mamayev G'ulom Ibroximovich",           title: "Kafedra mudiri",    deg: "t.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 2,  e: "А", img: "./images/teachers/abdunazarov.jpg",     name: "Abdunazarov Jamshid Nurmuxammatovich",  title: "Professor",         deg: "t.f.d (DSc)",   subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 3,  e: "Д", img: "./images/teachers/djiyanboyev.jpg",     name: "Djiyanboyev Sirojiddin Valiyevich",     title: "Professor v.b.",    deg: "t.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 4,  e: "Р", img: "./images/teachers/raxmatullaev.jpg",    name: "Raxmatullaev Mustafaqul XXX",           title: "Dotsent",           deg: "t.f.n.",        subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 5,  e: "К", img: "./images/teachers/qarshiboyev.jpg",     name: "Qarshiboyev Sharof Egamnazarovich",     title: "Professor v.b.",    deg: "p.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 6,  e: "Х", img: "./images/teachers/xoshimova.jpg",       name: "Xoshimova Shoira Safarovna",            title: "Dotsent",           deg: "p.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 7,  e: "К", img: "./images/teachers/qosimov.jpg",         name: "Qosimov Sunnat Xotamovich",             title: "Dotsent",           deg: "i.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 8,  e: "А", img: "./images/teachers/axmedov.jpg",         name: "Axmedov Zoxid Sobirovich",              title: "Dotsent v.b.",      deg: "i.f.f.d (PhD)", subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 9,  e: "Т", img: "./images/teachers/tagayev.jpg",         name: "Tagayev Xolmurod Sultonovich",          title: "Dotsent",           deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 10, e: "И", img: "./images/teachers/isroilov.jpg",        name: "Isroilov Fozil Ismoilovich",            title: "Katta o'qituvchi",  deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 11, e: "Х", img: "./images/teachers/hamdamova.jpg",       name: "Hamdamova Shoxista Zoxirovna",          title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 12, e: "Н", img: "./images/teachers/nishonov.jpg",        name: "Nishonov Azizbek Orziqul o'g'li",      title: "Katta o'qituvchi",  deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 13, e: "А", img: "./images/teachers/almamatov.jpg",       name: "Almamatov Mardon Isomitdin o'g'li",    title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 14, e: "О", img: "./images/teachers/olimova.jpg",         name: "Olimova Shahlo Pardaboy qizi",          title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 15, e: "Б", img: "./images/teachers/baratov.jpg",         name: "Baratov Ilhom Iskandar o'g'li",        title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 16, e: "П", img: "./images/teachers/pulatov.jpg",         name: "Pulatov Suhrob G'olib o'g'li",         title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 17, e: "К", img: "./images/teachers/kuchimova.jpg",       name: "Kuchimova Dilnoza Ibragim qizi",        title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 18, e: "И", img: "./images/teachers/ilxomov.jpg",         name: "Ilxomov Sardor Sobir o'g'li",          title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
  { id: 19, e: "Т", img: "./images/teachers/turatov.jpg",         name: "Turatov Bekzod Ravshan o'g'li",        title: "Assistent",         deg: "",              subj: "", exp: "", ph: "", em: "", tg: "", fb: "", art: "", edu: "", bio: "" },
];

function tcard(t, oc) {
  const avatar = t.img
    ? `<img src="${t.img}" alt="${t.name}"
         style="width:84px;height:84px;border-radius:50%;object-fit:cover;
                border:3px solid rgba(200,164,74,.25);margin:0 auto 13px;display:block;"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="tav" style="display:none">${t.e}</div>`
    : `<div class="tav">${t.e}</div>`;

  return `<div class="tcard" onclick="${oc}">
    ${avatar}
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

function renderGrid(id, lim) {
  const el = document.getElementById(id); if (!el) return;
  const list = lim ? teachers.slice(0, lim) : teachers;
  el.innerHTML = list.map(t => tcard(t, `showProfile(${t.id})`)).join('');
}

function showProfile(id) {
  const t = teachers.find(x => x.id === id); if (!t) return;

  const pbavHTML = t.img
    ? `<img src="${t.img}" alt="${t.name}"
         style="width:126px;height:126px;border-radius:19px;object-fit:cover;
                border:3px solid rgba(200,164,74,.3);position:relative;z-index:1;flex-shrink:0;"
         onerror="this.outerHTML='<div class=pbav>${t.e}</div>';">`
    : `<div class="pbav">${t.e}</div>`;

  document.getElementById('profileBanner').innerHTML = `
    <svg class="pbg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="310" cy="150" r="130" stroke="rgba(200,164,74,1)" stroke-width="1.2"/>
      <circle cx="310" cy="150" r="90" stroke="rgba(200,164,74,.7)" stroke-width="1.2"/>
      <circle cx="310" cy="150" r="48" stroke="rgba(200,164,74,.4)" stroke-width="1.2"/>
      <line x1="180" y1="150" x2="440" y2="150" stroke="rgba(200,164,74,.25)" stroke-width="1"/>
      <line x1="310" y1="20" x2="310" y2="280" stroke="rgba(200,164,74,.25)" stroke-width="1"/>
    </svg>
    ${pbavHTML}
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

  document.getElementById('profileBody').innerHTML = `
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

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
  const pg = document.getElementById('page-' + name); if (pg) pg.classList.add('active');
  const nav = document.getElementById('nav-' + name); if (nav) nav.classList.add('active');
  window.scrollTo(0, 0);
  document.getElementById('navLinks').classList.remove('open');
  injectFooters();
}

function toggleBurger() { document.getElementById('navLinks').classList.toggle('open'); }

function toggleTheme() {
  const h = document.documentElement;
  h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  localStorage.setItem('theme', h.getAttribute('data-theme'));
}
(function () { const s = localStorage.getItem('theme'); if (s) document.documentElement.setAttribute('data-theme', s); })();

const fids = ['homeFooter', 'newsFooter', 'historyFooter', 'teachersFooter', 'profileFooter', 'activitiesFooter'];
function injectFooters() {
  fids.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.innerHTML.trim() === '') {
      el.appendChild(document.getElementById('ftpl').content.cloneNode(true));
    }
  });
}

function openModal() { document.getElementById('contactModal').classList.add('open'); }
function closeModal() { document.getElementById('contactModal').classList.remove('open'); }
document.getElementById('contactModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

renderGrid('homeTeachersGrid', 3);
renderGrid('allTeachersGrid');
injectFooters();