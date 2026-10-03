/* ==========================================================================
   ✏️  EDIT ONLY THIS FILE to customise the whole website.
   Everything marked "DUMMY" must be replaced with your real details.
   Dates are ISO strings with the +05:30 (IST) offset.

   MARATHI: translated text lives in the `mr` block at the bottom, mirroring
   the same shape as the English content above it. When the floating
   translate button is set to Marathi, components look here first and fall
   back to the English text if a field is missing.
   ========================================================================== */
const wedding = {
  couple: {
    groom: { first: 'Sagar', full: 'Sagar Telange', marathi: 'सागर' },
    bride: { first: 'Shrutika', full: 'Shrutika Khade', marathi: 'श्रुतिका' },
    hashtag: '#SagarWedsShrutika', // DUMMY hashtag
  },

  // Put your Ballaleshwar Ganpati Temple, Pali photo at public/images/hero-temple.jpg
  hero: {
    image: '/images/animated_image.png',
    shloka: '॥ श्री गणेशाय नमः ॥',
    tagline: 'Our Forever Begins',
    date: '2027-01-02T11:30:00+05:30', // DUMMY main wedding date & time (drives countdown)
    place: 'Pune, Maharashtra',        // DUMMY
  },

  welcome: {
    title: 'Vakratunda Mahakaya',
    blessing:
      'With the divine blessings of Shree Ganesh and our beloved elders, we joyfully invite you to celebrate the beginning of our new journey together. Your presence and blessings will make our wedding truly complete.', // DUMMY text
    shlokaLines: ['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥'],
  },

  journeyIntro: 'Two souls, one destiny. From a chance hello to a lifetime of promises, our story has been written with laughter, chai and the blessings of Bappa. Scroll to walk through our memories.',
  journeyTags: ['Chai Lovers', 'Sunset Chasers', 'Ganpati Devotees'],

  // DUMMY milestones — edit, add or remove freely. Images live in /public/images
  journey: [
    { date: 'June 2019', title: 'The First Hello', image: '/images/g1.svg', short: 'A chance meeting at a friend’s gathering in Pune.', story: 'Neither of us expected that one casual chai would turn into hours of conversation. We still argue over who spoke first.' },
    { date: 'December 2019', title: 'Friends to Best Friends', image: '/images/g2.svg', short: 'Late-night calls and endless walks.', story: 'From sharing playlists to sharing dreams, we found a home in each other’s company.' },
    { date: 'February 2021', title: 'The Big Question', image: '/images/g3.svg', short: 'Under a golden sunset, Sagar asked.', story: 'A quiet hilltop, a nervous smile and a very rehearsed speech that was completely forgotten. She said yes.' },
    { date: 'November 2022', title: 'Families Meet', image: '/images/g4.svg', short: 'Two families, one big celebration.', story: 'Puran poli, laughter and blessings — our families felt like one from the very first lunch.' },
    { date: 'January 2027', title: 'Roka & Engagement', image: '/images/g5.svg', short: 'We made it official with our loved ones.', story: 'Rings, blessings and lots of happy tears. The countdown to forever began.' },
  ],

  profiles: {
    groom: { name: 'Sagar Telange', role: 'The Groom', photo: '/images/groom.svg', bio: 'Calm, curious and quietly funny. A software engineer by day, a trekker and cricket fanatic always.', traits: ['Trekking', 'Cricket', 'Filter Coffee'] }, // DUMMY
    bride: { name: 'Shrutika Khade', role: 'The Bride', photo: '/images/bride.svg', bio: 'Warm-hearted, creative and full of energy. A designer who loves classical music and long road trips.', traits: ['Rangoli', 'Music', 'Travel'] }, // DUMMY
  },

  // DUMMY family — all names fictional
  family: {
    groom: {
      title: 'Family of the Groom',
      parents: { label: 'Parents', people: ['Shri Rajendra Telange', 'Smt. Sunita Telange'] },
      paternal: { label: 'Paternal Grandparents', people: ['Late Shri Dattatray Telange', 'Smt. Kamlabai Telange'] },
      maternal: { label: 'Maternal Grandparents', people: ['Shri Vitthal Jadhav', 'Smt. Sarasvati Jadhav'] },
    },
    bride: {
      title: 'Family of the Bride',
      parents: { label: 'Parents', people: ['Shri Prakash Khade', 'Smt. Manisha Khade'] },
      paternal: { label: 'Paternal Grandparents', people: ['Shri Bhaurao Khade', 'Smt. Indubai Khade'] },
      maternal: { label: 'Maternal Grandparents', people: ['Shri Ramchandra Pawar', 'Smt. Lataben Pawar'] },
    },
  },

  // DUMMY venues, dates & times. mapQuery is used for Google Maps buttons.
  events: [
    { id: 'engagement', icon: '💍', name: 'Engagement', start: '2027-01-01T18:00:00+05:30', end: '2027-01-11T21:00:00+05:30', venue: 'Hotel Sunrise Banquet', address: 'FC Road, Pune 411004', mapQuery: 'River Trail Adventure Camp', note: 'Ring ceremony followed by dinner.' },
    { id: 'mehendi', icon: '🪷', name: 'Mehendi', start: '2027-01-01T16:00:00+05:30', end: '2027-01-12T20:00:00+05:30', venue: 'Khade Farmhouse', address: 'Hinjewadi, Pune 411057', mapQuery: 'River Trail Adventure Camp', note: 'Henna artists, music and games.' },
    { id: 'haldi', icon: '🌼', name: 'Haldi', start: '2027-01-02T10:00:00+05:30', end: '2027-01-12T13:00:00+05:30', venue: 'Telange Residence Lawn', address: 'Kothrud, Pune 411038', mapQuery: 'River Trail Adventure Camp', note: 'Wear yellow & play with turmeric!' },
    { id: 'wedding', icon: '🕉️', name: 'Wedding Ceremony', start: '2027-01-02T11:30:00+05:30', end: '2027-01-14T14:30:00+05:30', venue: 'Shree Ganesh Mangal Karyalay', address: 'Sadashiv Peth, Pune 411030', mapQuery: 'River Trail Adventure Camp', note: 'Traditional Maharashtrian Vivah Vidhi. Muhurat 11:30 AM.' },
    { id: 'reception', icon: '🎉', name: 'Reception', start: '2027-01-02T19:00:00+05:30', end: '2027-01-14T23:00:00+05:30', venue: 'The Grand Regency', address: 'Koregaon Park, Pune 411001', mapQuery: 'River Trail Adventure Camp', note: 'Dinner, dance and celebrations.' },
  ],

  // DUMMY gallery — replace with real photos in /public/images (any ratio). h = visual height hint
  gallery: [
    { src: '/images/g1.svg', alt: 'Moment 1', h: 'tall' }, { src: '/images/g2.svg', alt: 'Moment 2', h: 'short' },
    { src: '/images/g3.svg', alt: 'Moment 3', h: 'mid' }, { src: '/images/g4.svg', alt: 'Moment 4', h: 'tall' },
    { src: '/images/g5.svg', alt: 'Moment 5', h: 'short' }, { src: '/images/g6.svg', alt: 'Moment 6', h: 'mid' },
    { src: '/images/g7.svg', alt: 'Moment 7', h: 'tall' }, { src: '/images/g8.svg', alt: 'Moment 8', h: 'short' },
  ],

  // DUMMY guest information
  info: [
    { icon: '👗', title: 'Dress Code', items: ['Ceremony: Traditional — sarees, kurta-pyjama, dhoti', 'Haldi: Yellow / pastel tones', 'Reception: Indo-western or festive formal', 'Colour palette: Saffron, maroon, gold, ivory'] },
    { icon: '🍛', title: 'Food', items: ['Pure vegetarian Maharashtrian thali at the wedding', 'Puran poli, masale bhaat, amti & modak', 'Live chaat counters at the reception', 'Please inform us of any allergies in RSVP'] },
    { icon: '🚗', title: 'Travel', items: ['Nearest airport: Pune International (PNQ), 12 km', 'Railway: Pune Junction, 4 km', 'Free parking available at all venues', 'Shuttle from hotels — 9:30 AM on 14 Feb'] },
    { icon: '🏨', title: 'Accommodation', items: ['Hotel Sunrise — special guest rate, code TELANGE-KHADE', 'The Grand Regency — 2 km from the venue', 'Contact Mr. Amit (+91 90000 00001) for room bookings'] },
  ],

  // DUMMY contact / RSVP. Set endpoint to a Google Apps Script / Formspree URL to collect responses.
  rsvp: {
    deadline: '15 December 2026',
    endpoint: '', // e.g. 'https://formspree.io/f/xxxxxx'  — leave empty to store locally + WhatsApp option
    whatsapp: '919000000000', // DUMMY (country code + number, no +)
    email: 'rsvp@example.com', // DUMMY
    phone: '+91 90000 00000',  // DUMMY
    maxGuests: 10,
  },

  // ⚠️ DUMMY payment data — REPLACE before publishing. Do NOT use these.
  shagun: {
    note: 'Your presence is our greatest gift. If you wish to bless us, you may use the details below.',
    upiId: 'sagar.shrutika@upi',   // DUMMY
    payee: 'Sagar Telange',         // DUMMY
    phone: '+91 90000 00000',       // DUMMY
    qrImage: '',                    // Optional: '/images/upi-qr.png' — leave empty to show placeholder
    bank: { name: 'Sagar Telange', account: 'XXXX XXXX 0000', ifsc: 'DUMY0000000', bankName: 'Dummy Bank' }, // DUMMY
  },

  thanks: {
    message: 'Thank you for being part of our story. We can’t wait to celebrate with you.',
    families: 'Telange & Khade Families',
  },

  // ── Marathi translations ────────────────────────────────────────────
  // Same shape as above. Add/edit freely; anything left out here just
  // falls back to the English text above, so you don't have to translate
  // everything on day one (dates, names and links usually stay as-is).
  mr: {
    hero: {
      tagline: 'आमच्या सहजीवनाची सुरुवात',
    },
    welcome: {
      title: 'वक्रतुंड महाकाय',
      blessing:
        'श्री गणेशाचा आणि आमच्या वडीलधाऱ्यांच्या आशीर्वादाने, आम्ही आनंदाने आपणास आमच्या नव्या सहजीवनाच्या प्रारंभाचे साक्षीदार होण्यासाठी आमंत्रित करत आहोत. आपली उपस्थिती आणि आशीर्वाद आमच्या विवाहसोहळ्याला खऱ्या अर्थाने पूर्ण करतील.',
    },
    journeyIntro: 'दोन जीव, एक नियती. एका योगायोगाने झालेल्या भेटीपासून ते आयुष्यभराच्या वचनापर्यंत, आमची कहाणी हसू, चहा आणि बाप्पाच्या आशीर्वादाने लिहिली गेली आहे. आमच्या आठवणींतून फिरण्यासाठी स्क्रोल करा.',
    journeyTags: ['चहाप्रेमी', 'सूर्यास्त शोधणारे', 'गणपती भक्त'],
    journey: [
      { title: 'पहिली भेट', short: 'पुण्यातील एका मित्राच्या कार्यक्रमात योगायोगाने झालेली भेट.', story: 'एका साध्या चहावरून तासन्तास गप्पा रंगतील असं आम्हाला दोघांनाही वाटलं नव्हतं. आधी कोण बोललं यावरून आजही आमचा वाद होतो.' },
      { title: 'मित्रांपासून जिवलग मित्रांपर्यंत', short: 'रात्री उशिरापर्यंतचे फोन कॉल्स आणि न संपणाऱ्या फेऱ्या.', story: 'प्लेलिस्ट शेअर करण्यापासून ते स्वप्नं शेअर करण्यापर्यंत, आम्हाला एकमेकांच्या सोबतीत हक्काचं घर सापडलं.' },
      { title: 'मोठा प्रश्न', short: 'सोनेरी सूर्यास्ताच्या साक्षीने सागरने विचारलं.', story: 'एक शांत टेकडी, एक बावरलेलं हसू आणि पूर्णपणे विसरलेलं एक तालीम केलेलं भाषण. तिने होकार दिला.' },
      { title: 'कुटुंबांची भेट', short: 'दोन कुटुंबं, एक मोठा उत्सव.', story: 'पुरणपोळी, हसणं-खिदळणं आणि आशीर्वाद — पहिल्याच जेवणापासून आमची दोन्ही कुटुंबं एक वाटू लागली.' },
      { title: 'रोका व साखरपुडा', short: 'आमच्या प्रियजनांसमोर आम्ही अधिकृतपणे एकत्र आलो.', story: 'अंगठ्या, आशीर्वाद आणि आनंदाश्रू. कायमच्या साथीची उलटगणती सुरू झाली.' },
    ],
    profiles: {
      groom: { role: 'नवरदेव', bio: 'शांत, जिज्ञासू आणि हळूवारपणे विनोदी. दिवसा सॉफ्टवेअर इंजिनिअर, कायम ट्रेकिंग आणि क्रिकेटचा वेडा.', traits: ['ट्रेकिंग', 'क्रिकेट', 'फिल्टर कॉफी'] },
      bride: { role: 'नवरी', bio: 'प्रेमळ, कल्पक आणि उत्साहाने भरलेली. शास्त्रीय संगीत आणि लांब प्रवासांची आवड असलेली डिझायनर.', traits: ['रांगोळी', 'संगीत', 'प्रवास'] },
    },
    events: {
      engagement: { name: 'साखरपुडा', note: 'अंगठी समारंभानंतर स्नेहभोजन.' },
      mehendi: { name: 'मेहंदी', note: 'मेहंदी कलाकार, संगीत आणि खेळ.' },
      haldi: { name: 'हळद', note: 'पिवळे कपडे घाला आणि हळदीचा आनंद लुटा!' },
      wedding: { name: 'विवाह सोहळा', note: 'पारंपरिक महाराष्ट्रीयन विवाह विधी. मुहूर्त सकाळी ११:३०.' },
      reception: { name: 'स्वागत समारंभ', note: 'स्नेहभोजन, नृत्य आणि उत्सव.' },
    },
    info: [
      { title: 'पोशाख संहिता', items: ['विवाह सोहळा: पारंपरिक — साडी, कुर्ता-पायजमा, धोतर', 'हळद: पिवळे / फिकट रंग', 'स्वागत समारंभ: इंडो-वेस्टर्न किंवा उत्सवी औपचारिक', 'रंगसंगती: केशरी, मरून, सोनेरी, आयव्हरी'] },
      { title: 'भोजन', items: ['विवाहसोहळ्यात शुद्ध शाकाहारी महाराष्ट्रीयन ताट', 'पुरणपोळी, मसालेभात, आमटी व मोदक', 'स्वागत समारंभात लाइव्ह चाट काउंटर', 'कृपया आरएसव्हीपीमध्ये कोणत्याही ॲलर्जीची माहिती द्या'] },
      { title: 'प्रवास', items: ['जवळचा विमानतळ: पुणे आंतरराष्ट्रीय (PNQ), १२ किमी', 'रेल्वे स्थानक: पुणे जंक्शन, ४ किमी', 'सर्व ठिकाणी मोफत पार्किंग उपलब्ध', 'हॉटेलवरून शटल — सकाळी ९:३०'] },
      { title: 'निवास व्यवस्था', items: ['हॉटेल सनराइज — विशेष पाहुणे दर, कोड TELANGE-KHADE', 'द ग्रँड रीजन्सी — कार्यक्रमस्थळापासून २ किमी', 'खोली आरक्षणासाठी श्री. अमित (+९१ ९०००० ०००१) यांच्याशी संपर्क साधा'] },
    ],
    shagun: {
      note: 'तुमची उपस्थिती हीच आमच्यासाठी सर्वात मोठी भेट आहे. आशीर्वाद द्यायचे असल्यास खालील तपशील वापरू शकता.',
    },
    thanks: {
      message: 'आमच्या कहाणीचा भाग बनल्याबद्दल धन्यवाद. तुमच्यासोबत साजरा करण्यासाठी आम्ही उत्सुक आहोत.',
    },
  },
}
export default wedding