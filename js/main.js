/* ==========================================================================
   LOGISTIKA KAFEDRASI — ASOSIY SKRIPT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Tun / Kun rejimi ---------- */
  const themeBtn = document.querySelector('.theme-toggle');
  const applyTheme = (dark) => {
    document.body.classList.toggle('dark', dark);
  };
  // Vaqtga qarab boshlang'ich rejim: 19:00–07:00 oralig'ida tun rejimi
  const hour = new Date().getHours();
  applyTheme(hour >= 19 || hour < 7);
  if (themeBtn){
    themeBtn.addEventListener('click', () => {
      applyTheme(!document.body.classList.contains('dark'));
    });
  }

  /* ---------- Mobil menyu ---------- */
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks){
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    }));
  }

  /* ---------- Faol nav havolasini belgilash ---------- */
  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) a.classList.add('active');
  });

  /* ---------- Sarlavha soyasi scroll bilan ---------- */
  const header = document.querySelector('.site-header');
  if (header){
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-sm)' : 'none';
    });
  }

  /* ---------- Yordamchi funksiyalar ---------- */
  const uzMonths = ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentabr','oktabr','noyabr','dekabr'];
  const formatSana = (iso) => {
    const [y,m,d] = iso.split('-').map(Number);
    return `${d} ${uzMonths[m-1]} ${y}`;
  };
  const qs = (name) => new URLSearchParams(location.search).get(name);
  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));

  /* ================== BOSH SAHIFA: so'nggi 3 ta yangilik ================== */
  const homeNewsGrid = document.querySelector('[data-render="home-news"]');
  if (homeNewsGrid && typeof YANGILIKLAR !== 'undefined'){
    const items = [...YANGILIKLAR].sort((a,b)=> new Date(b.sana)-new Date(a.sana)).slice(0,3);
    homeNewsGrid.innerHTML = items.map(newsCardHTML).join('');
  }

  /* ================== YANGILIKLAR RO'YXATI SAHIFASI ================== */
  const allNewsGrid = document.querySelector('[data-render="all-news"]');
  if (allNewsGrid && typeof YANGILIKLAR !== 'undefined'){
    const items = [...YANGILIKLAR].sort((a,b)=> new Date(b.sana)-new Date(a.sana));
    allNewsGrid.innerHTML = items.map(newsCardHTML).join('');
  }

  function newsCardHTML(n){
    return `
    <article class="news-card reveal">
      <a href="yangilik.html?id=${n.id}" class="news-thumb">
        <img src="${n.image}" alt="${escapeHtml(n.title)}" loading="lazy">
        <span class="news-date">${formatSana(n.sana)}</span>
      </a>
      <div class="news-body">
        <h3><a href="yangilik.html?id=${n.id}">${escapeHtml(n.title)}</a></h3>
        <p>${escapeHtml(n.excerpt)}</p>
        <a class="news-link" href="yangilik.html?id=${n.id}">To'liq o'qish
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>`;
  }

  /* ================== YANGILIK BATAFSIL SAHIFASI ================== */
  const articleWrap = document.querySelector('[data-render="news-article"]');
  if (articleWrap && typeof YANGILIKLAR !== 'undefined'){
    const id = Number(qs('id'));
    const n = YANGILIKLAR.find(x => x.id === id) || YANGILIKLAR[0];
    document.title = n.title + ' — Logistika kafedrasi';
    articleWrap.innerHTML = `
      <a href="yangiliklar.html" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
        Barcha yangiliklarga qaytish
      </a>
      <div class="article-meta">
        <span class="pill">${formatSana(n.sana)}</span>
        <span class="pill">Kafedra yangiliklari</span>
      </div>
      <h1 class="article-title">${escapeHtml(n.title)}</h1>
      <div class="article-cover"><img src="${n.image}" alt="${escapeHtml(n.title)}"></div>
      <div class="article-body">${n.content.map(p => `<p>${escapeHtml(p)}</p>`).join('')}</div>
      <div class="article-gallery">
        ${n.gallery.map(g => `<img src="${g}" alt="${escapeHtml(n.title)}" loading="lazy">`).join('')}
      </div>
    `;
    const relatedGrid = document.querySelector('[data-render="related-news"]');
    if (relatedGrid){
      const related = YANGILIKLAR.filter(x => x.id !== n.id).slice(0,3);
      relatedGrid.innerHTML = related.map(newsCardHTML).join('');
    }
  }

  /* ================== BOSH SAHIFA: o'qituvchilar (mudir + 2 ta) ================== */
  const homeTeachers = document.querySelector('[data-render="home-teachers"]');
  if (homeTeachers && typeof OQITUVCHILAR !== 'undefined'){
    const items = [OQITUVCHILAR.find(t=>t.rol==='mudir'), ...OQITUVCHILAR.filter(t=>t.rol!=='mudir').slice(0,2)];
    homeTeachers.innerHTML = items.map(teacherCardHTML).join('');
  }

  /* ================== O'QITUVCHILAR RO'YXATI SAHIFASI ================== */
  const allTeachers = document.querySelector('[data-render="all-teachers"]');
  if (allTeachers && typeof OQITUVCHILAR !== 'undefined'){
    const mudir = OQITUVCHILAR.find(t => t.rol === 'mudir');
    const rest = OQITUVCHILAR.filter(t => t.rol !== 'mudir');
    const mudirWrap = document.querySelector('[data-render="head-teacher"]');
    if (mudirWrap && mudir) mudirWrap.innerHTML = teacherCardHTML(mudir);
    allTeachers.innerHTML = rest.map(teacherCardHTML).join('');
  }

  function teacherCardHTML(t){
    if (!t) return '';
    return `
    <a href="oqituvchi.html?id=${t.id}" class="teacher-card reveal">
      <div class="teacher-photo">
        <img src="${t.rasm}" alt="${escapeHtml(t.ism)}" loading="lazy">
        ${t.rol === 'mudir' ? '<span class="teacher-tag">Kafedra mudiri</span>' : ''}
      </div>
      <div class="teacher-info">
        <h3>${escapeHtml(t.ism)}</h3>
        <div class="role">${escapeHtml(t.lavozim)}</div>
        <div class="teacher-mini">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><path d="M2 6h20v12H2z"/></svg>${t.email}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2z"/></svg>${t.telefon}</span>
        </div>
      </div>
    </a>`;
  }

  /* ================== O'QITUVCHI BATAFSIL SAHIFASI ================== */
  const teacherDetail = document.querySelector('[data-render="teacher-detail"]');
  if (teacherDetail && typeof OQITUVCHILAR !== 'undefined'){
    const id = Number(qs('id'));
    const t = OQITUVCHILAR.find(x => x.id === id) || OQITUVCHILAR[0];
    document.title = t.ism + ' — Logistika kafedrasi';
    teacherDetail.innerHTML = `
      <div>
        <div class="td-photo"><img src="${t.rasm}" alt="${escapeHtml(t.ism)}"></div>
        <div class="td-card">
          <div class="row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2z"/></svg><div><b>Telefon</b>${t.telefon}</div></div>
          <div class="row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 6l-10 7L2 6"/><path d="M2 6h20v12H2z"/></svg><div><b>Elektron pochta</b>${t.email}</div></div>
          <div class="row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg><div><b>Ish vaqti</b>${t.ishVaqti}</div></div>
        </div>
      </div>
      <div>
        <span class="eyebrow">${t.rol === 'mudir' ? 'Kafedra mudiri' : "O'qituvchi"}</span>
        <h1>${escapeHtml(t.ism)}</h1>
        <p style="color:var(--orange-dark);font-weight:600;margin:8px 0 22px;">${escapeHtml(t.lavozim)}</p>
        <div style="margin-bottom:24px;">${t.fanlar.map(f => `<span class="subject-pill">${escapeHtml(f)}</span>`).join('')}</div>
        <div class="article-body">${t.bio.map(p => `<p>${escapeHtml(p)}</p>`).join('')}</div>
      </div>
    `;
  }

  /* ================== KAFEDRA FAOLIYATI: fanlar ================== */
  const subjectsGrid = document.querySelector('[data-render="subjects"]');
  if (subjectsGrid && typeof FANLAR !== 'undefined'){
    subjectsGrid.innerHTML = FANLAR.map(s => `
      <div class="subject-card reveal">
        <div class="subject-thumb"><img src="${s.image}" alt="${escapeHtml(s.title)}" loading="lazy"></div>
        <div class="subject-body">
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.text)}</p>
        </div>
      </div>`).join('');
  }

  /* ================== KAFEDRA TARIXI ================== */
  const timelineWrap = document.querySelector('[data-render="timeline"]');
  if (timelineWrap && typeof TARIX !== 'undefined'){
    timelineWrap.innerHTML = TARIX.bosqichlar.map((b,i) => `
      <div class="tl-item reveal ${i === TARIX.bosqichlar.length-1 ? 'accent' : ''}">
        <div class="tl-dot">${b.yil}</div>
        <h4>${escapeHtml(b.sarlavha)}</h4>
        <p>${escapeHtml(b.izoh)}</p>
      </div>`).join('');
  }
  const statGrid = document.querySelector('[data-render="stats"]');
  if (statGrid && typeof TARIX !== 'undefined'){
    statGrid.innerHTML = TARIX.statistika.map(s => `
      <div class="stat-card reveal"><strong>${s.son}</strong><span>${escapeHtml(s.izoh)}</span></div>`).join('');
  }

  /* ================== BOSH SAHIFA: yo'nalishlar ================== */
  const dirGrid = document.querySelector('[data-render="directions"]');
  if (dirGrid && typeof YONALISHLAR !== 'undefined'){
    const icons = {
      truck: '<path d="M1 3h13v13H1z"/><path d="M14 8h5l3 4v4h-8V8z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/>',
      warehouse: '<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-8h6v8"/>',
      globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
      chain: '<path d="M9 15l6-6"/><path d="M10.5 5.5l1-1a3.5 3.5 0 0 1 5 5l-1 1"/><path d="M13.5 18.5l-1 1a3.5 3.5 0 0 1-5-5l1-1"/>'
    };
    dirGrid.innerHTML = YONALISHLAR.map(y => `
      <div class="direction-card reveal">
        <div class="direction-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[y.icon]||''}</svg></div>
        <h3>${escapeHtml(y.title)}</h3>
        <p>${escapeHtml(y.text)}</p>
      </div>`).join('');
  }

  /* ---------- Scroll-reveal animatsiya ----------
     Barcha (shu jumladan yuqorida dinamik qo'shilgan) .reveal
     elementlarni ANIMATSIYA TUGAGANDAN SO'NG kuzatuvga olamiz. */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold:.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

});
