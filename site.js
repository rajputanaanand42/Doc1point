// ─── Clinic contact: change these two values once, the whole site updates ───
const CLINIC_PHONE = '+919999999999';        // used for tel: links
const CLINIC_WHATSAPP = '919999999999';      // country code + number, no "+" or spaces
const PHONE_DISPLAY = '+91 99999 99999';

document.documentElement.classList.add('js');

document.querySelectorAll('[data-phone-link]').forEach((a) => { a.href = `tel:${CLINIC_PHONE}`; });
document.querySelectorAll('[data-wa-link]').forEach((a) => { a.href = `https://wa.me/${CLINIC_WHATSAPP}`; });
document.querySelectorAll('[data-phone-text]').forEach((el) => { el.textContent = PHONE_DISPLAY; });

const hindi = {
  pageTitle: 'Doc1Point | सासाराम में डॉक्टर, लैब और दवाइयाँ',
  skip: 'मुख्य सामग्री पर जाएँ',
  navLabel: 'मुख्य नेविगेशन',
  navServices: 'सेवाएँ',
  navDoctors: 'डॉक्टर',
  navVisit: 'समय बुक करें',
  navCabins: 'डॉक्टरों के लिए',
  navFaq: 'सवाल-जवाब',
  callNow: 'अभी कॉल करें',
  call: 'कॉल करें',
  menu: 'मेनू',
  heroPill: 'अब सासाराम, बिहार में खुला',
  heroLine1: 'डॉक्टर, लैब और दवाइयाँ।',
  heroLine2: 'एक ही मुलाक़ात में।',
  heroLead: 'पटना, दिल्ली और वाराणसी के विशेषज्ञ डॉक्टर अब सासाराम में मरीज़ देखते हैं। उसी जगह जाँच करवाएँ और छूट पर दवाइयाँ लें। शहर भर में भागदौड़ की ज़रूरत नहीं।',
  bookVisit: 'समय बुक करें',
  proofLabel: 'Doc1Point क्यों',
  proof1: 'डॉक्टर, लैब और फ़ार्मेसी',
  proof2: 'शहरों से आते हैं हमारे डॉक्टर',
  proof3: 'शहर में अलग-अलग चक्कर',
  heroAlt: 'डेस्क पर एक बुज़ुर्ग मरीज़ से मुस्कुराकर बात करती डॉक्टर',
  floatA1: 'बाहर से आने वाले विशेषज्ञ',
  floatA2: 'पटना · दिल्ली · वाराणसी',
  floatB1: 'क्लिनिक में ही लैब',
  floatB2: 'उसी मुलाक़ात में जाँच',
  floatC1: 'दवाइयों पर छूट',
  floatC2: 'जाने से पहले दवा लें',
  journeyKicker: 'मुलाक़ात कैसे होती है',
  journeyTitle: 'चिंता लेकर आएँ, इलाज की योजना लेकर जाएँ।',
  step1T: 'समय बुक करें',
  step1D: 'कॉल करें या WhatsApp भेजें। आपकी बुकिंग शुरू से आख़िर तक हमारी टीम संभालती है।',
  comfortKicker: 'आपका आराम',
  comfortTitle: 'भीड़ नहीं, सुकून वाला क्लिनिक।',
  comfortIntro: 'आपके आने से लेकर जाने तक, हर बात हमारी टीम संभालती है, ताकि आप सिर्फ़ अपनी सेहत पर ध्यान दें।',
  wait1T: 'आरामदायक प्रतीक्षा क्षेत्र',
  wait1D: 'शांत और रोशन जगह में साफ़, आरामदायक बैठने की व्यवस्था।',
  power1T: 'पावर बैकअप',
  power1D: 'बिजली जाने पर भी क्लिनिक, लैब और रोशनी चालू रहती है।',
  snack1T: 'नाश्ता और पेय',
  snack1D: 'जूस, कोल्ड ड्रिंक और बिस्कुट, थोड़े से शुल्क पर।',
  manage1T: 'सब कुछ हम संभालते हैं',
  manage1D: 'आपकी बुकिंग, आपकी बारी और फ़ॉलो-अप, शुरू से आख़िर तक हमारी टीम संभालती है।',
  free: 'मुफ़्त',
  paid: 'सशुल्क',
  step2T: 'डॉक्टर से मिलें',
  step2D: 'शांत, निजी कमरा और ऐसे डॉक्टर जो ध्यान से सुनते हैं।',
  step3T: 'यहीं जाँच करवाएँ',
  step3D: 'अगर जाँच चाहिए तो लैब कुछ ही क़दम दूर है। दोबारा आने की ज़रूरत नहीं।',
  step4T: 'दवाइयाँ घर ले जाएँ',
  step4D: 'हमारी फ़ार्मेसी से छूट पर पर्चे की दवाइयाँ लें।',
  servicesKicker: 'एक ही छत के नीचे',
  servicesTitle: 'एक अच्छे क्लिनिक में जो होना चाहिए, सब यहाँ।',
  servicesIntro: 'तीन सेवाएँ, जिनके लिए आम तौर पर तीन जगह जाना पड़ता है। Doc1Point में ये सब पास-पास हैं।',
  cabinAlt: 'लकड़ी की मेज़, कुर्सियों और जाँच बिस्तर वाला शांत परामर्श कक्ष',
  consultChip: 'परामर्श',
  consultTitle: 'स्थानीय और बाहर से आने वाले डॉक्टर',
  consultText: 'सासाराम के भरोसेमंद डॉक्टर, और पटना, दिल्ली व वाराणसी से तय दिनों पर आने वाले विशेषज्ञ।',
  labTitle: 'किफ़ायती लैब जाँच',
  labText: 'डॉक्टर ने जो जाँच लिखी है, वह क्लिनिक छोड़े बिना सही दाम पर करवाएँ।',
  labT1: 'मौके पर ही सैंपल',
  labT2: 'रिपोर्ट उसी डॉक्टर को दिखाएँ',
  medTitle: 'दवाइयों पर छूट',
  medText: 'परामर्श के तुरंत बाद हमारी फ़ार्मेसी से छूट पर दवाइयाँ लें।',
  medT1: 'पर्चे की दवाइयों पर छूट',
  medT2: 'अपनी दवाइयों के बारे में पूछें',
  doctorsKicker: 'हमारे डॉक्टर',
  doctorsTitle: 'बड़े शहरों के विशेषज्ञ, आपके अपने शहर में।',
  doctorsText: 'अब विशेषज्ञ को दिखाने के लिए लंबा सफ़र नहीं करना पड़ेगा। पटना, दिल्ली और वाराणसी के डॉक्टर Doc1Point आकर हमारे स्थानीय डॉक्टरों के साथ मरीज़ देखते हैं।',
  citySasaram: 'सासाराम',
  cityPatna: 'पटना',
  cityVaranasi: 'वाराणसी',
  cityDelhi: 'दिल्ली',
  localDoctors: 'स्थानीय डॉक्टर',
  visiting: 'बाहर से आने वाले विशेषज्ञ',
  askSchedule: 'पूछें इस हफ़्ते कौन आ रहे हैं',
  mapCaption: 'डॉक्टर आपके पास आते हैं, आपको उनके पास नहीं जाना पड़ता।',
  visitKicker: 'समय बुक करें',
  visitTitle: 'बताइए आपको क्या चाहिए। बाक़ी हम संभाल लेंगे।',
  visitText: 'कुछ जानकारी भरें और WhatsApp पर हमें भेजें। हमारी टीम डॉक्टर का समय बताकर आपका स्लॉट पक्का करेगी। बात करना चाहें तो सीधे कॉल करें।',
  assure1: 'पहले बुक करने से क्लिनिक में कम इंतज़ार',
  assure2: 'आपकी जानकारी सिर्फ़ हमारी क्लिनिक टीम तक जाती है',
  assure3: 'हिन्दी या अंग्रेज़ी, जो आपको आसान लगे',
  orCall: 'या सीधे कॉल करें',
  formTitle: 'अपॉइंटमेंट का अनुरोध',
  fName: 'मरीज़ का नाम',
  fNeed: 'आपको क्या चाहिए?',
  needConsult: 'डॉक्टर से मिलना',
  needLab: 'लैब जाँच',
  needMed: 'दवाइयाँ',
  fDay: 'कौन सा दिन',
  dToday: 'आज',
  dTomorrow: 'कल',
  dWeek: 'इस हफ़्ते',
  dFlex: 'कोई भी दिन',
  fTime: 'किस समय',
  tMorning: 'सुबह',
  tAfternoon: 'दोपहर',
  tEvening: 'शाम',
  fNote: 'कुछ और बताना चाहें?',
  optional: '(ज़रूरी नहीं)',
  notePh: 'जैसे: किसी ख़ास डॉक्टर से मिलना है',
  formError: 'कृपया मरीज़ का नाम लिखें।',
  sendWa: 'WhatsApp पर भेजें',
  formNote: 'आपका संदेश तैयार होकर WhatsApp खुलेगा। आपके भेजने तक कुछ नहीं जाता।',
  cabinsKicker: 'डॉक्टरों के लिए',
  cabinsTitle: 'आपका अपना क्लिनिक जैसा। बाक़ी सारा काम हमारा।',
  cabinsText: 'घंटे के हिसाब से या पूरे दिन के लिए कक्ष बुक करें और बस मरीज़ देखें। अपॉइंटमेंट से लेकर रिसेप्शन तक, पूरा क्लिनिक हमारी टीम चलाती है और काम के दौरान आपका पूरा ख़्याल रखती है।',
  groupRunT: 'क्लिनिक हम चलाते हैं',
  groupCareT: 'आपका ख़्याल हम रखते हैं',
  perkApptT: 'अपॉइंटमेंट शुरू से आख़िर तक हमारे ज़िम्मे',
  perkApptD: 'हम आपके मरीज़ों की बुकिंग, पुष्टि और पूरी व्यवस्था करते हैं',
  perkPowerT: 'पावर बैकअप',
  perkPowerD: 'बिजली जाने पर भी आपकी OPD चलती रहती है',
  perkTeaT: 'दिन भर चाय और कॉफ़ी',
  perkTeaD: 'जब चाहें, ताज़ा बनी हुई',
  perkHeatT: 'घर का खाना, गरम करके',
  perkHeatD: 'अपना टिफ़िन लाएँ, हमारी पैंट्री उसे गरम कर देगी',
  perkSnackT: 'क्लिनिक में नाश्ता',
  perkSnackD: 'मरीज़ों के बीच कुछ हल्का-फुल्का',
  perkOrderT: 'बाहर से खाना मँगवाना',
  perkOrderD: 'बताइए क्या चाहिए, हम बाहर से मँगवा देंगे',
  planHourT: 'घंटे के हिसाब से',
  planHourD: 'छोटी OPD या कुछ फ़ॉलो-अप के लिए',
  planDayT: 'पूरा दिन',
  planDayD: 'सासाराम में नियमित साप्ताहिक विज़िट के लिए',
  cabinCall: 'कक्ष बुक करने के लिए कॉल करें',
  cabinsNote: 'कॉल पर किराया और खाली समय पूछें।',
  perk1T: 'तुरंत इस्तेमाल के लिए तैयार',
  perk1D: 'मेज़, कुर्सियाँ और जाँच बिस्तर',
  perk2T: 'क्लिनिक में ही लैब और फ़ार्मेसी',
  perk2D: 'मरीज़ों को जाँच और दवा के लिए कहीं और नहीं भेजना पड़ता',
  faqKicker: 'सवाल',
  faqTitle: 'आने से पहले जान लें।',
  faqText: 'जवाब नहीं मिला? कॉल करें, फ़ोन कोई इंसान ही उठाएगा।',
  q1: 'क्या अपॉइंटमेंट ज़रूरी है?',
  a1: 'बिना अपॉइंटमेंट भी आ सकते हैं, लेकिन पहले बुक करने से डॉक्टर का मिलना पक्का होता है और इंतज़ार कम होता है।',
  q2: 'बाहर से आने वाले विशेषज्ञ कब आते हैं?',
  a2: 'पटना, दिल्ली और वाराणसी के विशेषज्ञ तय दिनों पर आते हैं। कॉल या WhatsApp करें, हम इस हफ़्ते का समय बता देंगे।',
  q3: 'क्या यहाँ डॉक्टर को दिखाए बिना लैब जाँच करवा सकते हैं?',
  a3: 'हाँ। अपना पर्चा लाएँ या बताएँ कौन सी जाँच चाहिए। उपलब्धता और दाम जानने के लिए पहले कॉल करें।',
  q4: 'दवाइयों पर कितनी छूट मिलती है?',
  a4: 'छूट दवा पर निर्भर करती है। फ़ार्मेसी काउंटर पर पूछें या पर्चे के साथ कॉल करें।',
  q5: 'मैं डॉक्टर हूँ। कक्ष कैसे बुक करूँ?',
  a5: 'जिन दिनों और घंटों के लिए कक्ष चाहिए, बताने के लिए कॉल करें, घंटे के हिसाब से या पूरे दिन के लिए। बुकिंग के बाद आपके अपॉइंटमेंट हमारी टीम संभालती है, और चाय-कॉफ़ी हमारी ओर से।',
  q6: 'क्या बिजली जाने पर भी क्लिनिक चलता है?',
  a6: 'हाँ। हमारे पास पावर बैकअप है, इसलिए परामर्श, लैब और प्रतीक्षा क्षेत्र चालू रहते हैं।',
  q7: 'क्या इंतज़ार के दौरान कुछ खाने-पीने को मिलेगा?',
  a7: 'हाँ। क्लिनिक में जूस, कोल्ड ड्रिंक और बिस्कुट थोड़े से शुल्क पर मिलते हैं।',
  ctaTitle: 'अच्छा इलाज, आपकी सोच से ज़्यादा पास।',
  ctaText: 'एक क्लिनिक। डॉक्टर, लैब और दवाइयाँ। यहीं सासाराम में।',
  footerText: 'सासाराम, बिहार में एक ही छत के नीचे डॉक्टर, लैब जाँच और दवाइयाँ।',
  footerNav: 'पेज के नीचे का नेविगेशन',
  location: 'सासाराम, बिहार, भारत',
  emergency: 'आपातकाल में 112 पर कॉल करें या नज़दीकी अस्पताल जाएँ।',
};

// ─── Language switch ───
const languageButton = document.querySelector('#language-button');
const englishTitle = document.title;
const attrMap = { 'data-copy': 'textContent', 'data-copy-label': 'aria-label', 'data-copy-alt': 'alt', 'data-copy-ph': 'placeholder' };
const translatable = Object.entries(attrMap).flatMap(([marker, attribute]) =>
  Array.from(document.querySelectorAll(`[${marker}]`), (element) => ({
    element,
    attribute,
    english: attribute === 'textContent' ? element.textContent : element.getAttribute(attribute),
    hindi: hindi[element.getAttribute(marker)],
  })),
);

function setLanguage(lang) {
  const isHindi = lang === 'hi';
  document.documentElement.lang = lang;
  document.title = isHindi ? hindi.pageTitle : englishTitle;
  languageButton.lang = isHindi ? 'en' : 'hi';
  languageButton.textContent = isHindi ? 'English' : 'हिन्दी';
  languageButton.setAttribute('aria-label', isHindi ? 'Read in English' : 'हिन्दी में पढ़ें');
  for (const item of translatable) {
    const text = isHindi && item.hindi ? item.hindi : item.english;
    if (item.attribute === 'textContent') item.element.textContent = text;
    else item.element.setAttribute(item.attribute, text);
  }
}

const LANG_KEY = 'doc1point-language';
try { if (localStorage.getItem(LANG_KEY) === 'hi') setLanguage('hi'); } catch { /* storage blocked */ }
languageButton.addEventListener('click', () => {
  const next = document.documentElement.lang === 'hi' ? 'en' : 'hi';
  setLanguage(next);
  try { localStorage.setItem(LANG_KEY, next); } catch { /* storage blocked */ }
});

// ─── Mobile menu ───
const mobile = matchMedia('(max-width: 860px)');
const nav = document.querySelector('#main-nav');
const menuButton = document.querySelector('#menu-button');
function setMenu(open) {
  menuButton.hidden = !mobile.matches;
  menuButton.setAttribute('aria-expanded', String(open));
  nav.hidden = mobile.matches && !open;
}
setMenu(false);
mobile.addEventListener('change', () => setMenu(false));
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') === 'false'));
nav.addEventListener('click', (e) => { if (mobile.matches && e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); }
});

// ─── Header shadow + active nav link ───
const header = document.querySelector('#site-header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const navLinks = Array.from(nav.querySelectorAll('a'));
const navSections = navLinks.map((a) => document.querySelector(a.getAttribute('href')));
function updateActiveLink() {
  const mark = window.innerHeight * 0.45;
  let active = -1;
  navSections.forEach((s, i) => {
    if (!s) return;
    const r = s.getBoundingClientRect();
    if (r.top <= mark && r.bottom > mark) active = i;
  });
  navLinks.forEach((a, i) => a.classList.toggle('is-active', i === active));
}
updateActiveLink();
window.addEventListener('scroll', updateActiveLink, { passive: true });

// ─── Reveal on scroll ───
const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─── Booking form → WhatsApp ───
const form = document.querySelector('#booking-form');
const nameInput = form.querySelector('#f-name');
const formError = form.querySelector('#form-error');

function selectedText(select) { return select.options[select.selectedIndex].textContent.trim(); }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    formError.hidden = false;
    nameInput.setAttribute('aria-invalid', 'true');
    nameInput.focus();
    return;
  }
  formError.hidden = true;
  nameInput.removeAttribute('aria-invalid');

  const isHindi = document.documentElement.lang === 'hi';
  const need = form.querySelector('input[name="need"]:checked').nextElementSibling.textContent.trim();
  const day = selectedText(form.querySelector('#f-day'));
  const time = selectedText(form.querySelector('#f-time'));
  const note = form.querySelector('#f-note').value.trim();

  const lines = isHindi
    ? ['नमस्ते Doc1Point, मैं समय बुक करना चाहता/चाहती हूँ।', `नाम: ${name}`, `ज़रूरत: ${need}`, `दिन: ${day}, ${time}`]
    : ['Hello Doc1Point, I would like to book a visit.', `Name: ${name}`, `For: ${need}`, `When: ${day}, ${time}`];
  if (note) lines.push(`${isHindi ? 'नोट' : 'Note'}: ${note}`);

  window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim()) { formError.hidden = true; nameInput.removeAttribute('aria-invalid'); }
});

document.querySelector('#year').textContent = new Date().getFullYear();
