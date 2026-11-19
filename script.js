(()=>{
'use strict';
const WA='994503137999',MENU_URL='https://armood.clopos.menu/en/1/products';
/* Соцсети: добавьте ТОЛЬКО подтверждённые ссылки, например instagram:'https://instagram.com/...' */
const SOCIAL={instagram:'https://www.instagram.com/armoodbaku.az/',facebook:''};
/* Меню: заполняйте только реальными данными из актуального меню. Формат: {cat:'breakfast',name:'...',desc:'...',price:'12.00',img:'assets/photos/menu/x.jpg'} */
const MENU=[];
const CATS=['breakfast','starters','soups','salads','hot','sides','pasta','grill','national','burgers','desserts','sushi','coffee','drinks'];
const T={
az:{n_about:'Haqqımızda',n_menu:'Menyu',n_gallery:'Qalereya',n_events:'Tədbirlər',n_ratings:'Reytinqlər',n_contact:'Əlaqə',
h_eyebrow:'Bakıxanov · 2020-dən',h_title:'Zərif məkan, Azərbaycan qonaqpərvərliyi',h_text:'Səhər yeməyi, nahar və şam yeməyi, canlı musiqi və unudulmaz tədbirlər üçün ARMOOD BAKU.',
b_reserve:'Masa sifariş et',b_menu:'Menyuya bax',a_title:'ARMOOD hekayəsi',
a_p1:'ARMOOD BAKU 2020-ci ildən Bakıxanovda qonaqlarını qəbul edir. Burada səhər yeməyi, nahar və şam yeməyi təqdim olunur.',
a_p2:'Menyuda Azərbaycan mətbəxi, həmçinin Avropa və digər mətbəxlər var. Canlı musiqi, banketlər və ailə şənlikləri üçün əlverişli məkandır.',
c1:'Səhər yeməyi',c2:'Nahar və şam yeməyi',c3:'Azərbaycan mətbəxi',c4:'Canlı musiqi',c5:'Tədbirlər',
m_title:'Menyu',m_note:'Qiymətlər və yeməklər həmişə aktual onlayn menyuda göstərilir.',m_live:'Aktual menyunu aç',m_open:'Kateqoriyaya bax',
cat:{breakfast:'Səhər yeməyi',starters:'Qəlyanaltılar',soups:'Şorbalar',salads:'Salatlar',hot:'İsti yeməklər',sides:'Qarnirlər',pasta:'Pasta',grill:'Mangal',national:'Milli mətbəx',burgers:'Burger və pizza',desserts:'Desertlər',sushi:'Suşi',coffee:'Qəhvə və çay',drinks:'İçkilər'},
g_title:'Qalereya',g_note:'Rəsmi fotoşəkillər assets/photos qovluğuna əlavə olunur.',g_ph:'Foto əlavə edin',
e_title:'Banketlər və tədbirlər',e1:'Ad günləri',e2:'Toy mərasimləri',e3:'Ailə şənlikləri',e4:'Korporativ tədbirlər',e5:'Banketlər',e6:'Xüsusi hadisələr',e_call:'Restoranla əlaqə',
r_title:'Reytinqlər',r_t:'4 rəy',r_w:'102 qiymət',r_go:'Mənbəyə keç',r_note:'Hər platformanın reytinqi ayrıca göstərilir və birləşdirilmir.',
f_title:'Masa sifarişi',f_name:'Ad',f_phone:'Telefon',f_date:'Tarix',f_time:'Saat',f_guests:'Qonaq sayı',f_wish:'Əlavə xahişlər',f_send:'WhatsApp ilə göndər',
f_note:'WhatsApp vasitəsilə sorğu avtomatik təsdiq demək deyil. Rezervasiyanı restoran təsdiqləməlidir.',f_err:'Zəhmət olmasa, bütün vacib sahələri doldurun.',
wa:'Salam! Masa sifariş etmək istəyirəm.',k_title:'Bizi tapın',k_addr:'Ünvan',k_tel:'Telefon',k_hours:'İş saatları',k_hrs:'Hər gün 09:00 – 23:30',k_call:'Zəng et',
wn:'Ad',wp:'Telefon',wd:'Tarix',wt:'Saat',wg:'Qonaq sayı',ww:'Xahiş'},
ru:{n_about:'О нас',n_menu:'Меню',n_gallery:'Галерея',n_events:'Мероприятия',n_ratings:'Рейтинги',n_contact:'Контакты',
h_eyebrow:'Бакиханов · с 2020 года',h_title:'Изысканное место и азербайджанское гостеприимство',h_text:'ARMOOD BAKU — завтраки, обеды и ужины, живая музыка и незабываемые события.',
b_reserve:'Забронировать столик',b_menu:'Посмотреть меню',a_title:'История ARMOOD',
a_p1:'ARMOOD BAKU принимает гостей в Бакиханове с 2020 года. Здесь подают завтраки, обеды и ужины.',
a_p2:'В меню — азербайджанская кухня, а также европейская и другие кухни. Живая музыка, банкеты и семейные праздники.',
c1:'Завтраки',c2:'Обеды и ужины',c3:'Азербайджанская кухня',c4:'Живая музыка',c5:'Мероприятия',
m_title:'Меню',m_note:'Блюда и цены всегда указаны в актуальном онлайн-меню ресторана.',m_live:'Открыть актуальное меню',m_open:'Смотреть категорию',
cat:{breakfast:'Завтраки',starters:'Закуски',soups:'Супы',salads:'Салаты',hot:'Горячие блюда',sides:'Гарниры',pasta:'Паста',grill:'Мангал',national:'Национальная кухня',burgers:'Бургеры и пицца',desserts:'Десерты',sushi:'Суши',coffee:'Кофе и чай',drinks:'Напитки'},
g_title:'Галерея',g_note:'Официальные фотографии добавляются в папку assets/photos.',g_ph:'Загрузите фото',
e_title:'Банкеты и мероприятия',e1:'Дни рождения',e2:'Свадебные мероприятия',e3:'Семейные праздники',e4:'Корпоративы',e5:'Банкеты',e6:'Особые события',e_call:'Связаться с рестораном',
r_title:'Рейтинги',r_t:'4 отзыва',r_w:'102 оценки',r_go:'Перейти к источнику',r_note:'Рейтинг каждой платформы показан отдельно и не объединяется.',
f_title:'Бронирование столика',f_name:'Имя',f_phone:'Телефон',f_date:'Дата',f_time:'Время',f_guests:'Количество гостей',f_wish:'Дополнительные пожелания',f_send:'Отправить через WhatsApp',
f_note:'Заявка через WhatsApp не означает автоматического подтверждения. Бронь должен подтвердить ресторан.',f_err:'Пожалуйста, заполните все обязательные поля.',
wa:'Здравствуйте! Хочу забронировать столик.',k_title:'Как нас найти',k_addr:'Адрес',k_tel:'Телефоны',k_hours:'График работы',k_hrs:'Ежедневно 09:00 – 23:30',k_call:'Позвонить',
wn:'Имя',wp:'Телефон',wd:'Дата',wt:'Время',wg:'Гостей',ww:'Пожелания'},
en:{n_about:'About',n_menu:'Menu',n_gallery:'Gallery',n_events:'Events',n_ratings:'Ratings',n_contact:'Contact',
h_eyebrow:'Bakıxanov · Since 2020',h_title:'Refined dining, Azerbaijani hospitality',h_text:'ARMOOD BAKU — breakfast, lunch and dinner, live music and unforgettable events.',
b_reserve:'Book a table',b_menu:'View menu',a_title:'The ARMOOD story',
a_p1:'ARMOOD BAKU has welcomed guests in Bakıxanov since 2020, serving breakfast, lunch and dinner.',
a_p2:'The menu features Azerbaijani cuisine alongside European and other cuisines, with live music, banquets and family celebrations.',
c1:'Breakfast',c2:'Lunch & dinner',c3:'Azerbaijani cuisine',c4:'Live music',c5:'Events',
m_title:'Menu',m_note:'Dishes and prices are always shown in the restaurant’s current online menu.',m_live:'Open current menu',m_open:'View category',
cat:{breakfast:'Breakfast',starters:'Starters',soups:'Soups',salads:'Salads',hot:'Main dishes',sides:'Sides',pasta:'Pasta',grill:'Grill',national:'National cuisine',burgers:'Burgers & pizza',desserts:'Desserts',sushi:'Sushi',coffee:'Coffee & tea',drinks:'Drinks'},
g_title:'Gallery',g_note:'Official photos are added to the assets/photos folder.',g_ph:'Add photo',
e_title:'Banquets & events',e1:'Birthdays',e2:'Weddings',e3:'Family celebrations',e4:'Corporate events',e5:'Banquets',e6:'Special occasions',e_call:'Contact the restaurant',
r_title:'Ratings',r_t:'4 reviews',r_w:'102 ratings',r_go:'Go to source',r_note:'Each platform’s rating is shown separately and is not combined.',
f_title:'Table reservation',f_name:'Name',f_phone:'Phone',f_date:'Date',f_time:'Time',f_guests:'Guests',f_wish:'Additional requests',f_send:'Send via WhatsApp',
f_note:'A WhatsApp request is not an automatic confirmation. The restaurant must confirm your booking.',f_err:'Please fill in all required fields.',
wa:'Hello! I would like to book a table.',k_title:'Find us',k_addr:'Address',k_tel:'Phone',k_hours:'Opening hours',k_hrs:'Daily 09:00 – 23:30',k_call:'Call now',
wn:'Name',wp:'Phone',wd:'Date',wt:'Time',wg:'Guests',ww:'Requests'}};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let lang='az',cat=CATS[0];
try{const s=localStorage.getItem('lang');if(T[s])lang=s}catch(e){}
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* photos: expected files in assets/photos; missing ones show an upload placeholder */
const PHOTOS=['hero','about','g1','g2','g3','g4','g5','g6','g7','g8'];
function photo(el,name,label){
  const img=new Image();img.alt=label||'ARMOOD BAKU';img.loading=name==='hero'?'eager':'lazy';img.decoding='async';
  img.onerror=()=>{const f=el.closest('figure');if(f)f.remove();else el.classList.remove('empty')};
  img.onerror=()=>{if(!img.dataset.f&&!name.includes('/')){img.dataset.f=1;img.src=name+'.jpg'}};
  img.onload=()=>{el.classList.remove('empty');el.prepend(img)};
  el.classList.add('empty');el.dataset.t=label||'';
  img.src=name.includes('/')?name:`assets/photos/${name}.jpg`;
}
function render(){
  const d=T[lang];document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(e=>e.textContent=e.dataset.i18n==='c_des'?d.cat.desserts:d[e.dataset.i18n]);
  $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===lang));
  {const s=[1,2,3,4,5].map(i=>`<span>${d['c'+i]}</span>`).join('');$('#mqt').innerHTML=s+s+s+s}
  $('#tabs').innerHTML=CATS.map(c=>`<button role="tab" data-c="${c}" class="${c===cat?'on':''}" aria-selected="${c===cat}">${d.cat[c]}</button>`).join('');
  cards();
  
  const s=Object.entries(SOCIAL).filter(([,v])=>v).map(([k,v])=>`<a class="link" target="_blank" rel="noopener" href="${v}">${k[0].toUpperCase()+k.slice(1)}</a>`).join(' · ');
  $('#social').innerHTML=s;
  try{localStorage.setItem('lang',lang)}catch(e){}
}
function cards(){
  const d=T[lang],items=MENU.filter(m=>m.cat===cat),box=$('#cards');
  if(!items.length){box.innerHTML=`<article class="card glass" style="grid-column:1/-1;text-align:center"><div class="t"><h3>${d.cat[cat]}</h3><p style="margin:10px 0 18px">${d.m_note}</p><a class="btn ghost" target="_blank" rel="noopener" href="${MENU_URL}">${d.m_open}</a></div></article>`;return}
  box.innerHTML=items.map((m,i)=>`<article class="card" style="animation-delay:${i*60}ms"><div class="ph" data-m="${m.img||''}" data-t="${m.name}"></div><div class="t"><h3>${m.name}</h3><p>${m.desc||''}</p><em>${m.price} AZN</em></div></article>`).join('');
  $$('[data-m]',box).forEach(p=>p.dataset.m&&photo(p,p.dataset.m,p.dataset.t));
}
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;render()});
$$('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.l;render()});

/* photos */
$$('[data-photo]').forEach(p=>photo(p,p.dataset.photo,''));
$$('.hero .ph').forEach(p=>photo(p,'hero',''));$$('.frame .ph').forEach(p=>photo(p,'about',''));
/* nav */
const burger=$('#burger'),nav=$('#nav');
const tog=o=>{nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
burger.onclick=()=>tog(!nav.classList.contains('open'));$$('#nav a').forEach(a=>a.onclick=()=>tog(false));
const hd=$('#top');addEventListener('scroll',()=>{hd.classList.toggle('sc',scrollY>40);
  if(!reduce)$$('.par').forEach(p=>{const r=p.parentNode.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const i=$('img',p);if(i)i.style.transform=`translateY(${(r.top-innerHeight/2)*-.06}px)`}})},{passive:true});

/* reveal + loader */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
addEventListener('load',()=>setTimeout(()=>{$('#loader').classList.add('off');$$('.hero .rv').forEach((e,i)=>setTimeout(()=>e.classList.add('in'),i*150))},reduce?0:1300));

/* reservation → WhatsApp */
const f=$('#form');f.date.min=new Date().toISOString().slice(0,10);
f.addEventListener('submit',e=>{e.preventDefault();const d=T[lang],v=Object.fromEntries(new FormData(f));
  if(!v.name.trim()||!v.phone.trim()||!v.date||!v.time||!(+v.guests>0)){$('#err').textContent=d.f_err;return}
  $('#err').textContent='';
  const msg=`${d.wa}\n${d.wn}: ${v.name}\n${d.wp}: ${v.phone}\n${d.wd}: ${v.date}\n${d.wt}: ${v.time}\n${d.wg}: ${v.guests}${v.wish?`\n${d.ww}: ${v.wish}`:''}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank','noopener');
});
render();
const bar=$('#bar');addEventListener('scroll',()=>{bar.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`},{passive:true});
document.addEventListener('pointermove',e=>{const g=e.target.closest&&e.target.closest('.glass,.card');if(g){const r=g.getBoundingClientRect();g.style.setProperty('--x',e.clientX-r.left+'px');g.style.setProperty('--y',e.clientY-r.top+'px')}},{passive:true});
if(!reduce){const c=$('#dust'),x=c.getContext('2d');let w,h,P=[],vis=true;const rs=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight};rs();addEventListener('resize',rs);
for(let i=0;i<(innerWidth<700?25:55);i++)P.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.4,v:Math.random()*.35+.1,a:Math.random()*6});
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);
(function f(){if(vis){x.clearRect(0,0,w,h);for(const p of P){p.y-=p.v;p.x+=Math.sin(p.y/60)*.3;p.a+=.02;if(p.y<-5){p.y=h+5;p.x=Math.random()*w}x.beginPath();x.fillStyle=`rgba(240,217,160,${.2+.5*Math.abs(Math.sin(p.a))})`;x.arc(p.x,p.y,p.r,0,7);x.fill()}}requestAnimationFrame(f)})()}
})();
