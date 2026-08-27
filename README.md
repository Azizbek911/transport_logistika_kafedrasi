# Logistika kafedrasi — sayt

## Qanday ochish kerak
`index.html` faylini istalgan brauzerda (Chrome, Edge, Safari, Firefox) ochsangiz bo'ldi.
Eng yaxshi natija uchun butun `logistika-sayt` papkasini biror hostingga
(masalan, GitHub Pages, Netlify, yoki universitet serveriga) joylashtiring —
barcha havolalar nisbiy (relative) yo'l bilan ishlaydi.

## Fayllar tuzilishi
```
logistika-sayt/
├── index.html          — Bosh sahifa
├── yangiliklar.html     — Barcha yangiliklar ro'yxati
├── yangilik.html         — Bitta yangilik (?id= orqali ochiladi)
├── oqituvchilar.html    — Barcha o'qituvchilar ro'yxati
├── oqituvchi.html        — Bitta o'qituvchi (?id= orqali ochiladi)
├── faoliyat.html         — Kafedra faoliyati (fanlar)
├── tarix.html            — Kafedra tarixi
├── css/style.css         — Barcha dizayn (ranglar, shrift, animatsiyalar)
└── js/
    ├── data.js           — BARCHA MATN VA RASMLAR SHU YERDA
    └── main.js           — Sahifalarni dinamik chizadigan skript
```

## Matn va rasmlarni qanday o'zgartirish kerak
**Deyarli barcha narsani faqat bitta faylda — `js/data.js` da — tahrirlaysiz.**
Boshqa hech qaysi HTML faylni qo'lda o'zgartirish shart emas.

- `SITE` — universitet nomi, manzil, telefon, email, ish vaqti
- `YONALISHLAR` — bosh sahifadagi 4 ta yo'nalish kartochkasi
- `YANGILIKLAR` — har bir yangilik: sarlavha, sana, rasm, qisqa va to'liq matn, galereya (3 rasm)
- `OQITUVCHILAR` — har bir o'qituvchi: ism, lavozim, rasm, telefon, email, ish vaqti, fanlar, bio
- `FANLAR` — kafedra faoliyatidagi fanlar va ularning rasmlari
- `TARIX` — tashkil topgan yil, bosqichlar, statistika raqamlari

### Rasmlarni almashtirish
Hozircha barcha rasmlar Unsplash/randomuser.me dan olingan NAMUNA rasmlardir.
`js/data.js` faylida har bir rasm manzili `image`, `rasm` yoki `gallery` deb
nomlangan qatorda turibdi — shu joydagi havolani o'zingizning rasm
manzilingizga (yoki `rasm/foto1.jpg` kabi mahalliy faylga) almashtiring.

### Universitet nomini kiritish
`[ Universitet nomini shu yerga yozing ]` yozuvi `js/data.js` faylidagi
`SITE.universitet` qatorida turibdi — shu joyni tahrirlang, u sayt yuqorisida
va pastida (footer) avtomatik ko'rinadi... (bosh sahifa headerida ham qo'lda
`[ Universitet nomini shu yerga yozing ]` matni bor — uni har bir HTML fayl
ichidagi footer qismida qidirib toping va almashtiring).

## Xususiyatlar
- **To'liq responsiv** — telefon, planshet va kompyuterda ishlaydi
- **Kun / tun rejimi** — yuqori o'ng burchakdagi tugma orqali, vaqtga qarab
  avtomatik boshlanadi (soat 19:00–07:00 tun rejimi)
- **Animatsiyalar** — bosh sahifada yuk mashinasi, kema va samolyot
  harakatlanadigan yo'l chizig'i
- **Yangiliklar** — bosh sahifada 3 ta so'nggi yangilik, ustiga bosilganda
  to'liq matn va rasm galereyasi ochiladi
- **O'qituvchilar** — ustiga bosilganda telefon, email, ish vaqti va to'liq
  ma'lumot ko'rinadi
