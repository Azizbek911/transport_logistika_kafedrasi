/* ==========================================================================
   LOGISTIKA KAFEDRASI — MA'LUMOTLAR BAZASI
   Barcha matn va rasmlarni shu faylda o'zgartirishingiz mumkin.
   Rasmlar hozircha namuna (Unsplash/Picsum) — keyinchalik almashtiring.
   ========================================================================== */

const SITE = {
  universitet: "Jizzax Politexnika Instituti",
  kafedra: "Transport Logistika kafedrasi",
  manzil: "Jizzakh city, 130100 Islom Karimov shox ko’chasi 4 uy, A bino birinchi qavat",
  telefon: "+998 99 567 17 46",
  email: "dgpi-info@edu.uz",
  ishVaqti: "Dushanba – Shanba, 08:00 – 18:00",
  tashkilYili: 2015,
};

/* ---------------- LOGISTIKA YO'NALISHLARI (bosh sahifa uchun) ---------------- */
const YONALISHLAR = [
  {
    icon: "truck",
    title: "Transport logistikasi",
    text: "Yuklarni avtomobil, temir yo'l, dengiz va havo transportida tejamkor va tezkor tashish usullari."
  },
  {
    icon: "warehouse",
    title: "Ombor logistikasi",
    text: "Ombor xo'jaligini yuritish, zaxiralarni boshqarish va yuklarni saqlash jarayonlarini optimallashtirish."
  },
];

/* ---------------------------------- YANGILIKLAR ---------------------------------- */
const YANGILIKLAR = [
  {
    id: 1,
    sana: "2026-05-14",
    title: "Kafedra talabalari xalqaro logistika olimpiadasida g'olib bo'ldi",
    excerpt: "Toshkentda o'tkazilgan «Young Logistics Challenge» xalqaro olimpiadasida kafedramiz talabalari jamoasi 1-o'rinni qo'lga kiritdi.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
    ],
    content: [
      "2026-yil 14-may kuni Toshkent shahrida 12 ta davlat talabalari ishtirokida o'tkazilgan «Young Logistics Challenge» xalqaro olimpiadasida kafedramiz talabalaridan tashkil topgan jamoa g'alaba qozondi.",
      "Musobaqa davomida talabalar real ish sharoitida ta'minot zanjirini loyihalash, xarajatlarni optimallashtirish va bojxona jarayonlarini modellashtirish bo'yicha topshiriqlarni bajarishdi. Xalqaro hakamlar hay'ati jamoamiz taqdim etgan yechimni eng amaliy va innovatsion loyiha sifatida baholadi.",
      "Kafedra mudiri musobaqa g'oliblarini tabrikladi va bunday yutuqlar kafedraning xalqaro ta'lim standartlariga muvofiq faoliyat yuritayotganining yaqqol isboti ekanligini ta'kidladi. Kelgusida talabalarni shunga o'xshash tanlovlarda qatnashtirish kafedraning ustuvor yo'nalishlaridan biri bo'lib qolishi ta'kidlandi."
    ]
  },
  {
    id: 2,
    sana: "2026-03-02",
    title: "Yangi o'quv yili uchun zamonaviy logistika markazi ochildi",
    excerpt: "Kafedra qoshida talabalar amaliy mashg'ulot o'tkazadigan «Smart Logistics Lab» zamonaviy o'quv markazi o'z faoliyatini boshladi.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80"
    ],
    content: [
      "Kafedra tarkibida talabalar uchun zamonaviy jihozlar bilan ta'minlangan «Smart Logistics Lab» amaliy markazi ishga tushirildi.",
      "Markazda ombor boshqaruvi tizimlari (WMS), yuk tashishni rejalashtirish dasturlari va simulyatsion o'quv stendlari o'rnatilgan. Bu talabalarga nazariy bilimlarni real ishlab chiqarish sharoitiga yaqin muhitda mustahkamlash imkonini beradi.",
      "Markaz haftaning barcha ish kunlarida talabalar uchun ochiq bo'lib, amaliy mashg'ulotlar jadval asosida o'tkaziladi."
    ]
  },
  {
    id: 3,
    sana: "2026-02-18",
    title: "Professor-o'qituvchilar yirik logistika korxonalarida amaliyot o'tashdi",
    excerpt: "Kafedra professor-o'qituvchilari malaka oshirish maqsadida yetakchi transport-logistika kompaniyalarida amaliyotdan o'tishdi.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
    ],
    content: [
      "Kafedra professor-o'qituvchilari uchun yil boshida yirik transport-logistika kompaniyalari bilan hamkorlikda amaliy malaka oshirish dasturi tashkil etildi.",
      "Dastur davomida o'qituvchilar zamonaviy ombor komplekslari, konteyner terminallari va logistika markazlarining ish jarayoni bilan bevosita tanishishdi. Olingan tajriba o'quv dasturlariga yangi amaliy mavzular sifatida kiritiladi.",
      "Bunday tashriflar har o'quv yilida muntazam tashkil etilib boriladi, bu esa o'qitish sifatini bevosita bozor talablariga moslashtirishga xizmat qiladi."
    ]
  },
  {
    id: 4,
    sana: "2026-01-25",
    title: "Xalqaro hamkor universitet bilan memorandum imzolandi",
    excerpt: "Kafedra xorijiy oliy ta'lim muassasasi bilan talabalar almashinuvi va qo'shma ilmiy loyihalar yuzasidan memorandum imzoladi.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
    ],
    content: [
      "2026-yil 25-yanvar kuni kafedra rahbariyati xorijiy hamkor universitet vakillari bilan uchrashuv o'tkazdi.",
      "Uchrashuv yakunida ikki ta'lim muassasasi o'rtasida talabalar va professor-o'qituvchilar almashinuvi, qo'shma ilmiy tadqiqotlar hamda amaliyot dasturlari bo'yicha memorandum imzolandi.",
      "Hujjatga ko'ra, kelgusi o'quv yilidan boshlab eng faol talabalar xorijda qisqa muddatli o'quv kurslarida qatnashish imkoniyatiga ega bo'lishadi."
    ]
  },
  {
    id: 5,
    sana: "2025-12-10",
    title: "Bitiruvchilar uchun «Karyera kuni» tashkil etildi",
    excerpt: "Kafedra bitiruvchi talabalarini ish beruvchilar bilan bevosita bog'lash maqsadida yillik «Karyera kuni» tadbirini o'tkazdi.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
    ],
    content: [
      "Har yili an'anaviy tarzda o'tkaziladigan «Karyera kuni» tadbiri doirasida 20 dan ortiq transport va logistika kompaniyalari vakillari kafedraga tashrif buyurishdi.",
      "Tadbir davomida bitiruvchi talabalar potentsial ish beruvchilar bilan bevosita suhbatlashish, o'z rezyumelarini taqdim etish va bo'sh ish o'rinlari haqida ma'lumot olish imkoniyatiga ega bo'lishdi.",
      "Natijada bitiruvchilarning 60 foizdan ortig'i tadbir yakunidan so'ng bir necha oy ichida ishga joylashdi."
    ]
  }
];

/* ---------------------------------- O'QITUVCHILAR ---------------------------------- */
const OQITUVCHILAR = [
  {
    id: 1,
    ism: "G‘ulom Ibroximovich Mamayev",
    lavozim: "Kafedra mudiri, dotsent",
    rol: "mudir",
    ilmiyDaraja: "t.f.f.d (PhD)",
    rasm: "./js/pics/teachers/mudir.jpg",
    telefon: "+998 93 302 17 46",
    email: "mavjud emas",
    ishVaqti: "Dushanba - Shanba 8:00 17:00",
    fanlar: [],
    bio: [
  "2002–2003-yillarda Baxmal tumani “Balli-Yusuf” fermer xo‘jaligida ishchi bo‘lib faoliyat yuritgan.",
  "2003–2007-yillarda Jizzax politexnika institutida tahsil olgan. 2007–2008-yillarda Jizzax politexnika institutining “Transport vositalarini ishlatish” kafedrasida kabinet mudiri lavozimida faoliyat yuritgan.",
  "2008–2010-yillarda Toshkent avtomobil yo‘llari institutida magistratura bosqichida tahsil olgan. 2010–2011-yillarda Jizzax politexnika institutining “Transport vositalarini ishlatish” kafedrasida assistent, 2011–2012-yillarda “Avtomobil yo‘llari va harakat xavfsizligi” kafedrasida assistent lavozimlarida ishlagan.",
  "2012–2014-yillarda Jizzax politexnika institutining “Avtomobil yo‘llari” kafedrasida, 2014–2015-yillarda esa “Transport vositalarini ishlatish” kafedrasida assistent sifatida faoliyat yuritgan.",
  "2016–2022-yillarda Jizzax politexnika institutining “Transport vositalari muhandisligi” kafedrasida katta o‘qituvchi lavozimida faoliyat olib borgan.",
  "2022-yildan hozirgi vaqtgacha Jizzax politexnika institutining “Transport logistikasi” kafedrasi mudiri lavozimida ishlab kelmoqda."
    ]
  },

  {
    id: 2,
    ism: "Jamshid Nurmuxammatovich Abdunazarov",
    lavozim: "Professor",
    rol: "oqituvchi",
    ilmiyDaraja: "t.f.d (DSc)",
    rasm: "./js/pics/teachers/Jamshid_Nurmuxammatovich_Abdunazarov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2005–2009 yy. — Jizzax politexnika instituti talabasi",
      "2009–2011 yy. — Toshkent avtomobil yo‘llar instituti magistranti",
      "2010–2011 yy. — Sog‘liqni saqlash vazirligi qoshidagi UzMEDInfo markazi o‘qituvchisi",
      "2011–2012 yy. — Jizzax politexnika instituti Transport vositalarini ishlatish kafedrasi assistenti",
      "2012–2015 yy. — Moskva avtomobil yo‘llar davlat texnika universiteti aspiranti",
      "2012–2014 yy. — Moskva avtomobil yo‘llar davlat texnika universiteti Avtomobil yo‘llar loyihasi va qidiruvi kafedrasi kichik ilmiy xodimi",
      "2015–2016 yy. — Jizzax politexnika institutining Yer usti transport tizimi kafedrasi katta o‘qituvchisi",
      "2016–2020 yy. — Jizzax politexnika institutining Yer usti transport tizimi kafedrasi dotsenti",
      "2018–2022 yy. — Jizzax politexnika instituti Ilmiy tadqiqot va ilmiy-pedagogik kadrlar tayyorlash bo‘limi boshlig‘i",
      "2022–2024 yy. — Jizzax politexnika instituti xalqaro hamkorlik bo‘yicha prorektori (ichki o‘rindoshlik asosida Transport logistikasi kafedrasi professori v.b.)",
      "2024–h.v. — Jizzax politexnika instituti ilmiy ishlar va innovatsiyalar bo‘yicha prorektori (ichki o‘rindoshlik asosida Transport logistikasi kafedrasi professori)"]
  },

  {
    id: 3,
    ism: "Sirojiddin Valiyevich Djiyanboyev",
    lavozim: "Professor v.b.",
    rol: "oqituvchi",
    ilmiyDaraja: "t.f.f.d (PhD)",
    rasm: "./js/pics/teachers/Sirojiddin_Valiyevich_Djiyanboyev.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
  "2004-2005 yy. - Jizzax viloyati Zarbdor tumani Nurafshon jamoa xo'jaligi mashina-traktorlarga yonilg'i quyish shoxobchasi dispetcheri",
  "2005-2009 yy. - Jizzax politexnika instituti talabasi",
  "2009-2011 yy. - Toshkent avtomobil yo'llari instituti magistranti",
  "2011-2012 yy. - Jizzax politexnika instituti Yer usti transport vositalari va tizimlari kafedrasi katta laboranti",
  "2012-2015 yy. - Jizzax politexnika institutining Yer usti transport vositalari va tizimlari kafedrasi assistenti",
  "2015-2017 yy. - O'zbekiston Fanlar akademiyasi Umumiy va noorganik kimyo instituti neft kimyosi laboratoriyasi katta ilmiy xodim-izlanuvchisi",
  "2017-2018 yy. - Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi bosh mutaxassisi",
  "2018-2022 yy. - Jizzax politexnika instituti Transport logistikasi kafedrasi mudiri",
  "2022 y. - h.v. - Jizzax politexnika instituti Transport fakulteti dekani",
  "2022 y. - h.v. - Jizzax politexnika instituti Transport logistikasi kafedrasi dotsenti"
]
  },

  {
    id: 4,
    ism: "Mustafaqul Xamrakulovich Raxmatullaev",
    lavozim: "Dotsent",
    rol: "oqituvchi",
    ilmiyDaraja: "t.f.n.",
    rasm: "./js/pics/teachers/Mustafaqul_Xamrakulovich_Raxmatullaev.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      '1972-1977 yy. - Toshkent politexnika instituti talabasi',
      "1977-1987 yy. - O'rta Osiyo qishloq xo'jaligini elektrofikatsiyalash va mexanlash instituti kichik ilmiy xodimlari",
      "1987-1990 yy. - Toshkent politexnika instituti Jizzax filiali Umumtexnika fanlari kafedrasi yordamchisi",
      "1990-1991 yy. - Jizzax shahar partiya qo'mitasi bo'lim boshligi",
      "1991-1992 yy. - Toshkent arxitektura qurilish instituti Jizzax filiali Umumtexnika fanlari kafedrasi katta o'quvchisi",
      "1992-1992 yy. - Toshkent avtomobil yo'llari instituti Jizzax filiali Umumtexnika fakulteti dekani",
      "1992-1993 yy. - Jizzax politexnika instituti Avtomobil xo'jaligi kafedrasi dotsenti",
      "1993-1996 yy. - Jizzax politexnika instituti Avtomexanika fakulteti dekani",
      "1997-2004 yy. - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi rahbari",
      "2004-2005 yy. - Jizzax politexnika instituti Transport vositalarini ishga tushirish kafedrasi dotsentri",
      "2005-2006 yy. - Jizzax politexnika instituti Umummuhandislik fanlari kafedrasi rahbari",
      "2006-2009 yy. - Jizzax politexnika instituti Avtotransport fakulteti dekani",
      "2011-2012 yy. - Jizzax politexnika instituti Texnik ekspluatatsiya va xo'jalik bo'limining muhandisi",
      "2012-2014 yy. - Jizzax politexnika institutining Umummuhandislik fanlari, metrologiya va standartlash kafedrasi katta o'quvchisi",
      "2014-2015 yy. - Jizzax politexnika institutining Transport vositalarini ishga tushirish kafedrasi dotsentri",
      "2015-2018 yy. - Jizzax politexnika institutining Erusti transport tizimlari tizimi dotsenti",
      "2018 y.- 2019y - Jizzax politexnika institutining Logistika va servis kafedrasi dotsentri",
      "2019y – x.p. Jizzax politexnika institutining Transport logistikasi kafedrasi dotsentri"
    ]
  },

  {
    id: 5,
    ism: "Sharof Egamnazarovich Qarshiboyev",
    lavozim: "Professor v.b.",
    rol: "oqituvchi",
    ilmiyDaraja: "p.f.f.d (PhD)",
    rasm: "./js/pics/teachers/Sharof_Egamnazarovich_Qarshiboyev.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2007-2011 yy Jizzax tuman 57-ixtisoslashgan maktab internatida matematika fani o'quvchisi",
      "2011-2013 yy Toshkent avtomobil yo'llari instituti magistranti",
      "2013- 2016 yy Jizzax politexnika institutining “Transport vositlarini ishlash” kafedrasi yordamchisi",
      "2016-2017 yy Jizzax politexnika institutining “Er usti transport tizimlari” kafedrasi katta o‘quvchisi",
      "2017 -2018 yil Jizzax politexnikaining “Logistika va servis” kafedrasi katta oʻquvchi instituti",
      "2018 – 2020 yy Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi bosh ishlari",
      "2020-2021 yy Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi boshligi, Transport logistikasi kafedrasi dotsent vazifalarini boshqaruvchisi",
      "2022-2024 yillar. Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi boshligi, Transport logistikasi kafedrasi dotsentri",
      "2024-h.v. Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi boshligi, Transport logistikasi kafedrasi professor vazifalarini boshqarishi",
    ]
  },

  {
    id: 6,
    ism: "Shoira Safarovna Xoshimova",
    lavozim: "Dotsent",
    rol: "oqituvchi",
    ilmiyDaraja: "p.f.f.d (PhD)",
    rasm: "./js/pics/teachers/Shoira_Safarovna_Xoshimova.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2004 - 2010 yy. -Jizzax shaxar 32-maktab internat hisobchisi.",
      "2010 - 2014 yy.- Jizzax politexnika instituti talabasi",
      "2014 - 2016 yy. - Jizzax politexnika instituti Er usti transport vositalari va tizimlar magistranti",
      "2016 - 2017 yy. - Jizzax politexnika instituti Er usti transport tizimlari bo'limlari yordamchisi",
      "2017 - 2019 yy. - Jizzax politexnika institutining Logistika va servis kafedrasi yordamchisi",
      "2019 - 2024 yy- Jizzax politexnika instituti Ta'lim sifatini nazorat qilish bo'limi bosh ishlarii, Transport logistikasi kafedrasi katta o'qituvchi",
      "2024 yil - h.v. Jizzax politexnika institutining Transport logistikasi kafedrasi dotsentri, Ta'lim sifatni nazorat qilish bo'limi bosh ishlarii"
    ]
  },

  {
    id: 7,
    ism: "Sunnat Xotamovich Qosimov",
    lavozim: "Dotsent",
    rol: "oqituvchi",
    ilmiyDaraja: "i.f.f.d (PhD)",
    rasm: "./js/pics/teachers/Sunnat_Xotamovich_Qosimov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2006-2010 yy. - Jizzax politexnika instituti talabasi.",
      "2010-2012 yy. - Jizzax viloyati Jizzax tumani Ijtimoiy ishlab chiqaruvchi kolleji o'quvchisi",
      "2012-2014 yy. - Toshkent avtomobil yo'llari instituti magistranti",
      "2014-2015 yy. - Jizzax politexnika institutining “Avtotransport” fakulteti dispetcheri",
      "2015-2017 yy. - Jizzax politexnika institutining “Avtotransport” fakultet dekan rahbari va “Er usti transport tizimlari” kafedrasi yordamchisi",
      "2017-2017 yy. - Jizzax politexnika institutining “Avtotransport” fakulteti “Er usti transport tizimlari” kafedrasi yordamchisi",
      "2017-2018 yy. - Jzzax politexnika institutining “Servis” fakulteti “Logistika va servis” kafedrasi yordamchisi",
      "2018-2022 yillar. yy. - Jizzax politexnika institutining “Servis” fakulteti “Logistika va servis” kafedrasi katta oʻquvchisi",
      "2022 y. h.v. - Jizzax politexnika institutining “Transport logistikasi” kafedrasi dotsenti"
    ]
  },

  {
    id: 8,
    ism: "Zoxid Sobirovich Axmedov",
    lavozim: "Dotsent v.b.",
    rol: "oqituvchi",
    ilmiyDaraja: "i.f.f.d (PhD)",
    rasm: "./js/pics/teachers/Zoxid_Sobirovich_Axmedov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2007-2011yy. - Jizzax politexnika instituti talabasi",
      "2013-2014 yil. - Jizzax politexnika instituti O'zbekiston tarixi va ijtimoiy fanlar kafedrasi kabinet rahbari",
      "2014-2015yy. - Jizzax politexnika instituti Avtomobil va avtomobil xo'jaligi magistrlar.",
      "2015-2016 yil. - Jizzax politexnika instituti Er usti transport tizimlari kafedrasi yordamchi.",
      "2017 y.-h.v. - Jizzax politexnika instituti Transport logistikasi kafedrasi"
    ]
  },

  {
    id: 9,
    ism: "Xolmurod Sultonovich Tagayev",
    lavozim: "Dotsent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Xolmurod_Sultonovich_Tagayev.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2008-2009 yy - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi katta laboranti",
      "2009-2011 yy - Toshkent avtomobil yo'llari instituti magistri",
      "2012-2014 yy - Jizzax politexnika institutining avtomobil yo'llari kafedrasi yordamchisi",
      "2014-2015 yy - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi yordamchisi",
      "2015-2017 yy - Jizzax politexnika instituti yerusti transport tizimi kafedrasi yordamchisi",
      "2017y.-h.v - Jizzax politexnika instituti transport logistikasi kafedrasi katta o'qituvchi",
      "2024y.-h.v - Jizzax politexnika instituti transport logistikasi kafedrasi dotsent"
    ]
  },

  {
    id: 10,
    ism: "Fozil Ismoilovich Isroilov",
    lavozim: "Katta o‘qituvchi",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Fozil_Ismoilovich_Isroilov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "1994-1996 yy. - Jizzax politexnika instituti avtomobil xo'jaligi kafedrasi laboranti",
      "1996-1998 yy. - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi yordamchisi",
      "1998-2009 yy. - Jizzax transport aloqa kasb-xunar kolleji o'quvchisi",
      "2009-2013 yy. - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi katta o'quvchisi",
      "2013-2014 yy. - Jizzax politexnika institutining transport vositalarini ishga tushirish kafedrasi yordamchisi",
      "2013-2015 yy. - Jizzax politexnika instituti transport vositalarini ishga tushirish kafedrasi katta o'quvchisi",
      "2015-2017 yy. - Jizzax politexnika institutining erusti transport tizimiikfedrasi katta o'quvchisi",
      "2015-2018 yy. - Jizzax politexnika institutining logistika va servis kafedrasi rahbari",
      "2018 yil y.-h.v . - Jizzax politexnika institutining transport logistikasi fedrasi katta o'quvchi"
    ]
  },

  {
    id: 11,
    ism: "Shoxista Zoxirovna Hamdamova",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Shoxista_Zoxirovna_Hamdamova.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2006 - 2007 y VO “Mirzacho‘l” birlashmasiga qarashli “Sug‘orish tarmoqlari” boshqarmasi",
      "2007 – 2013 y	“Xovos – Zomin ” irrigatsiya tizimlari boshqarmasi",
      "2013 y- 2017 y	Jizzax politexnika instituti talabasi",
      "2016 y – 2018y	Jizzax politexnika instituti “Yer usti transport   tizimlari ” kafedrasi  laboranti",
      "2017 y- 2019 Jizzax politexnika instituti magistranti.",
      "2019 yil 3-sentabrdan Jizzax politexnika instituti “Transport logistikasi” kafedrasi assistenti"
    ]
  },

  {
    id: 12,
    ism: "Azizbek Orziqul o‘g‘li Nishonov",
    lavozim: "Katta o‘qituvchi",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Azizbek_Orziqul_ogli_Nishonov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2015-2019 йй. - Жиззах политехника институти талабаси",
      "2017 й. – 2019 й. - ҚК “Фарго тезкор почта” хизмати ходими",
      "2019 й. – 2019 й. - Республика йўл жамғармаси ҳузуридаги Ислом тараққиёти банки иштирокидаги “М-39 “Тошкент-Термиз” автойўлини реконструксия қилиш” лойиҳасини амалга ошириш гуруҳида таржимон",
      "2019 й. – 2020 й. Республика йўл жамғармаси ҳузуридаги Осиё тараққиёти банки иштирокидаги “Ҳудудий   автомобил йўлларини ривожлантириш” лойиҳасини амалга ошириш гуруҳида таржимон",
      "2019 й. – 2021 й. - Тошкент давлат транспорт университети магистранти",
      "2020 й. – ҳ.в. – Жиззах политехника институти “Транспорт логистикаси” кафедраси ассистенти",
      "2023 й. – ҳ.в. – Жиззах политехника институти “Хорижий ОТМлар билан қўшма таълим дастурларини мувофиқлаштириш бўлими бошлиғи”.",
      "2024 й. – ҳ.в. – Тошкент давлат транспорт университети таянч докторанти."
    ]
  },

  {
    id: 13,
    ism: "Mardon Isomitdin o‘g‘li Almamatov",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Mardon_Isomitdin_ogli_Almamatov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2016 -2020 y. - Jizzax politexnika instituti talabasi (Tashishlarni tashkil etish va transport logistikasi)",
      "2020 -2022 y.- Jizzax politexnika instituti magistranti (Intellektual transport tizimlari)",
      "2021 y- h.v- Jizzax politexnika instituti Transport logistikasi yordamchisi",
      "2022-2023 y- Jizzax politexnika instituti T.S.N.Q bo'limi bosh ishlari",
    ]
  },

  {
    id: 14,
    ism: "Shahlo Pardaboy qizi Olimova",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "https://randomuser.me/api/portraits/women/68.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2015-2019 yil. – Jizzax politexnika instituti, “Avtotransport” fakulteti bakalavriyat talabasi",
      "2019-2021 yy. - Jizzax politexnika instituti, “Avtotransport” fakulteti magistratura talabasi",
      "2021-2025 yy. - Jizzax politexnika instituti, “Transport logistikasi” kafedrasi yordamchisi"
    ]
  },

  {
    id: 15,
    ism: "Ilhom Iskandar o‘g‘li Baratov",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Ilhom_Iskandar_ogli_Baratov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2015-2019 yil. – Jizzax politexnika instituti, “Avtotransport” fakulteti bakalavriyat talabasi",
      "2019-2021 yy. - Jizzax politexnika instituti, “Avtotransport” fakulteti magistratura talabasi",
      "2021-2025 yy. - Jizzax politexnika instituti, “Transport logistikasi” kafedrasi boshqaruvi"
    ]
  },

  {
    id: 16,
    ism: "Suhrob G‘olib o‘g‘li Pulatov",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "https://randomuser.me/api/portraits/men/42.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2017-2021-yillar Jizzax politexnika instituti talabasi",
      "2021-2023-yillar Jizzax politexnika instituti magistratura talabasi",
      "2022-yil Jizzax politexnika instituti Ilmiy yuk va ilmiy pedagogik kadrlar tayyorlash bo'limi muhandisi",
      "2022-2023-yillar Jizzax politexnika instituti Xalqaro qismini bo'limi uslubchisi",
      "2023-yildan h.v. gacha Jizzax politexnika instituti yordamchisi."
    ]
  },

  {
    id: 17,
    ism: "Dilnoza Ibragim qizi Kuchimova",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Dilnoza_Ibragim_qizi_Kuchimova.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2013-2017y. Jizzax politexnika instituti talabasi",
      "2017 y.-h.v Jizzax politexnika instituti “Logistika va servis ” kafedrasi kabinet rahbari",
      "2019-y. Tug'ruq tatili",
      "2019y.- Jizzax politexnika instituti Transport vositalarisri muhandisligi kafedrasi magistriri",
      "2020-2025 y. Jizzax politexnika instituti “Transport logistikasi” kafedrasi kabinet rahbari",
      "2021-y . h.v Jizzax politexnika instituti “Transport logistikasi ” kafedrasi yordamchisi"
    ]
  },

  {
    id: 18,
    ism: "Sardor Sobir o‘g‘li Ilxomov",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Sardor_Sobir_ogli_Ilxomov.jpg",
    telefon: "+998 97 333 55 98",
    email: "sardor.uz93@gmail.com",
    ishVaqti: "Dushanba - Shanba 8:30 16:00",
    fanlar: [],
    bio: [
      "2012-2013y – Toshkent shahar, “Novofarma Plyus” OAJ,  1.0 shtat birligida Axborot texnologiyalari bo’limi menedjeri.",
      "2012-2013y – Toshkent shahar, “Novofarma Plyus” OAJ, 0.5 shtat birligida Ta’minot logistikasi bo‘limi menedjeri.",
      "2013 – 2017y     – Jizzax politexnika instituti, “Avtotransport” fakulteti talabasi.",
      "2017 – 2019y  – Jizzax politexnika instituti, “Avtotransport” fakulteti “Yer usti transport tizimlari” kafedrasi magistranti.",
      "2017 - 2019y – Jizzax politexnika instituti, “Axborot texnologiyalari markazi”, 0.5 shtat birligida tarmoq administratori.",
      "2019 – 2023y - Jizzax politexnika instituti, ”Axborot texnologiyalari markazi”, “Axborot tizimlarini joriy etish” bo‘limi boshlig‘i",
      "2022 – 2023y - Jizzax politexnika instituti, “Transport vositalari muhandisligi” kafedrasi 0.5 shtat birligida assistent.",
      "2023 – 2025y - Jizzax politexnika instituti, “Transport vositalari muhandisligi” kafedrasi 0.25 shtat birligida assistent.",
      "2022y – h.v. – Toshkent davlat transport universiteti, “Transport logistikasi” kafedrasi tayanch doktoranti.",
      "2025y– h.v. - Jizzax politexnika instituti, “Transport logistikasi” kafedrasi 0.5 shtat birligida assistent."
    ]
  },

  {
    id: 19,
    ism: "Bekzod Ravshan o‘g‘li Turatov",
    lavozim: "Assistent",
    rol: "oqituvchi",
    ilmiyDaraja: "",
    rasm: "./js/pics/teachers/Bekzod_Ravshan_ogli_Turatov.jpg",
    telefon: "mavjud emas",
    email: "mavjud emas",
    ishVaqti: "mavjud emas",
    fanlar: [],
    bio: [
      "2010-2013 y –JDPI qoshidagi Akademik Litsey o’quvchisi.",
      "2015-2019 y Jizzax Politexnika instituti Avtotransport fakulteti, Yer usti tranportlari va ularni explatatsiya qilish yo’nalishi talabasi.",
      "2019-2021 y TDTU talabasi",
      "2020-2021y O’zbekiston Respublikasi Transport Vazirligi huzuridagi, Transport va Logistika muommolarini o’rganish markazida Yetakchi mutaxasis.",
      "2021 yil 06-sentabrdan Jizzax Politexnika institutida asistent O’qituvchi",
    ]
  }
];

/* ---------------------------------- FANLAR (Kafedra faoliyati) ---------------------------------- */
const FANLAR = [
  {
    title: "Transport logistikasi",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=700&q=80",
    text: "Yuklarni avtomobil, temir yo'l, dengiz va havo transportida rejalashtirish, marshrutlarni optimallashtirish va tashish xarajatlarini kamaytirish usullari o'rgatiladi."
  },
  {
    title: "Ombor xo'jaligini boshqarish",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80",
    text: "Zamonaviy ombor tizimlari, zaxiralarni boshqarish, WMS dasturlari va ombor jarayonlarini avtomatlashtirish bo'yicha bilim va ko'nikmalar shakllantiriladi."
  },
  {
    title: "Xalqaro yuk tashish va ekspeditorlik",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=700&q=80",
    text: "Chegaralararo yuk tashish, bojxona rasmiylashtiruvi, xalqaro savdo shartnomalari va ekspeditorlik xizmatlari asoslari o'rgatiladi."
  },
  {
    title: "Ta'minot zanjiri menejmenti",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
    text: "Xomashyodan tayyor mahsulotgacha bo'lgan barcha jarayonlarni strategik rejalashtirish, hamkorlar bilan integratsiya va risklarni boshqarish."
  },
  {
    title: "Logistika iqtisodiyoti va moliyasi",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80",
    text: "Logistik xarajatlarni hisoblash, investitsiya samaradorligini baholash va logistika loyihalarini moliyalashtirish usullari."
  },
  {
    title: "Raqamli logistika va IT tizimlari",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=700&q=80",
    text: "ERP, WMS, TMS tizimlari, katta ma'lumotlar tahlili va sun'iy intellektning zamonaviy logistikada qo'llanilishi o'rgatiladi."
  }
];

/* ---------------------------------- KAFEDRA TARIXI ---------------------------------- */
const TARIX = {
  boshlanish: 2016,

  mudirTarixi: [
    {
      yil: "Ma'lumot berilmagan",
      ism: "G'ulom Ibroximovich Mamayev",
      izoh: "Transport logistikasi kafedrasi mudiri"
    }
  ],

  bosqichlar: [
    {
      yil: "2016",
      sarlavha: "«Logistika va servis» kafedrasi tashkil etildi",
      izoh:
        "«Yer usti transport tizimlari» kafedrasi negizida 5620100 — Tashishlarni tashkil etish va transport logistikasi (avtomobil transporti) hamda 5610100 — Xizmatlar sohasi (avtomobil transporti) yo'nalishlarini o'z ichiga olgan «Logistika va servis» kafedrasi alohida kafedra sifatida faoliyat boshladi."
    },

    {
      yil: 2017,
      sarlavha: "Kafedra faoliyati shakllandi",
      izoh:
        "Kafedra «Yer usti transport tizimlari» kafedrasi negizida shakllanib, transport va logistika yo'nalishlarida mutaxassislar tayyorlash faoliyatini yo'lga qo'ydi."
    },

    {
      yil: "2019",
      sarlavha: "Mashinasozlik yo'nalishi ochildi",
      izoh:
        "Kafedrada 5320200 — Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishni jihozlash va avtomatlashtirish bakalavriat ta'lim yo'nalishi ochildi."
    },

    {
      yil: "2020",
      sarlavha: "«Transport logistikasi» nomi berildi",
      izoh:
        "2020–2021-o'quv yillarida kafedraning nomi «Transport logistikasi» deb o'zgartirildi."
    },

    {
      yil: "2021",
      sarlavha: "Magistratura mutaxassisligi ochildi",
      izoh:
        "70711601 — Intellektual transport tizimlari (avtomobil transporti) magistratura mutaxassisligi ochildi."
    },

    {
      yil: "2021",
      sarlavha: "Xalqaro stajirovka",
      izoh:
        "Kafedra dotsenti Abdunazarov Jamshid Nurmuhammadovich Faculty Enrichment Program doirasida AQShning UW–Milwaukee universitetida 2021-yil 23-avgustdan 31-dekabrgacha stajirovka o'tadi."
    },

    {
      yil: "2022",
      sarlavha: "Professor-o'qituvchilar jamoasi",
      izoh:
        "Kafedrada 25 nafar professor-o'qituvchi faoliyat yuritdi: 8 nafar dotsent, 5 nafar katta o'qituvchi va 12 nafar assistent."
    },

    {
      yil: "2022",
      sarlavha: "Xalqaro yozgi maktab",
      izoh:
        "Kafedra o'qituvchisi Nishonov Aziz Oqziqul o'g'li Rossiyaning Moskva shahridagi MADI institutida «Международная летняя школа «Дорога #1»» xalqaro yozgi maktab dasturida malaka oshirdi."
    },

    {
      yil: "2022",
      sarlavha: "INTRAS xalqaro loyihasi",
      izoh:
        "Kafedra professor-o'qituvchilari INTRAS — O'zbekistonda axborot-kommunikatsiya texnologiyalariga asoslangan Intellektual transport tizimlari bo'yicha yangi magistratura dasturini yaratish loyihasida ishtirok etdilar."
    },

    {
      yil: "2022",
      sarlavha: "Ilmiy va mahalliy loyihalar",
      izoh:
        "Kafedra professor-o'qituvchilari mahalliy loyihalarda ham faol ishtirok etdi. Jumladan, «Samarqand aglomeratsiyasi uchun yo'lovchilar oqimini o'rganish» loyihasi yutib olindi."
    },

    {
      yil: "2022",
      sarlavha: "Sportdagi yutuqlar",
      izoh:
        "Kafedra o'qituvchilari Jizzax Politexnika Instituti rektori tashabbusi bilan o'tkaziladigan futbol bo'yicha «Rektor kubogi» musobaqasida ketma-ket ikki marta kubok sohibiga aylandi."
    }
  ],

  statistika: [
    {
      son: "2017",
      izoh: "faoliyat boshlangan davr"
    },
    {
      son: "305",
      izoh: "talaba va magistr"
    },
    {
      son: "25",
      izoh: "professor-o'qituvchi"
    },
    {
      son: "3",
      izoh: "bakalavriat yo'nalishi"
    },
    {
      son: "1",
      izoh: "magistratura mutaxassisligi"
    },
    {
      son: "2",
      izoh: "ketma-ket «Rektor kubogi»"
    }
  ]
};