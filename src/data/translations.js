// All translatable UI strings.
// Import `useLanguage` and call `t('key')` in any component.

const translations = {
  // ── Navigation ──
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.about': { en: 'About', bn: 'আমাদের সম্পর্কে' },
  'nav.ourWork': { en: 'Our Work', bn: 'আমাদের কার্যক্রম' },
  'nav.gallery': { en: 'Gallery', bn: 'গ্যালারি' },
  'nav.supportUs': { en: 'Support Us', bn: 'সহায়তা করুন' },
  'nav.contact': { en: 'Contact', bn: 'যোগাযোগ' },

  // ── Home Page ──
  'home.badge': { en: 'Since 2019 · Volunteer Initiative', bn: '২০১৯ থেকে · একটি স্বেচ্ছাসেবী উদ্যোগ' },
  'home.heroTitle1': { en: 'Turning kindness from abroad into', bn: 'প্রবাসীদের ভালোবাসাকে পৌঁছে দিচ্ছি' },
  'home.heroTitle2': { en: 'real help at home', bn: 'দেশের মানুষের দোরগোড়ায়' },
  'home.heroCta1': { en: 'Support Us', bn: 'সহায়তা করুন' },
  'home.heroCta2': { en: 'See Our Work', bn: 'কার্যক্রম দেখুন' },
  'home.totalDistributed': { en: 'distributed to those in need', bn: 'অসহায় মানুষদের মাঝে বিতরণ করা হয়েছে' },
  'home.whoWeAre.eyebrow': { en: 'Who we are', bn: 'আমাদের পরিচয়' },
  'home.whoWeAre.title': { en: 'A bridge between generosity and need', bn: 'সহমর্মিতা ও প্রয়োজনের মাঝে এক বিশ্বস্ত সেতুবন্ধন' },
  'home.whoWeAre.subtitle': {
    en: 'We are neighbours helping neighbours — collecting funds from friends living abroad and delivering direct aid to families across Bangladesh, with full transparency.',
    bn: 'আমরা প্রতিবেশীর সাহায্যে প্রতিবেশী — প্রবাসে থাকা বন্ধুদের কাছ থেকে অনুদান সংগ্রহ করে সম্পূর্ণ স্বচ্ছতার সাথে বাংলাদেশের বিভিন্ন অসহায় পরিবারের কাছে সরাসরি পৌঁছে দিই।',
  },
  'home.collect.title': { en: 'We Collect', bn: 'অনুদান সংগ্রহ' },
  'home.collect.desc': {
    en: 'Friends and well-wishers abroad contribute what they can, big or small.',
    bn: 'প্রবাসে থাকা বন্ধু ও শুভাকাঙ্ক্ষীরা তাদের সামর্থ্য অনুযায়ী ছোট-বড় অনুদান পাঠান।',
  },
  'home.deliver.title': { en: 'We Deliver', bn: 'সহায়তা প্রদান' },
  'home.deliver.desc': {
    en: 'Volunteers reach families directly — food, medicine, and support.',
    bn: 'আমাদের স্বেচ্ছাসেবীরা সরাসরি পরিবারগুলোর কাছে খাবার, ওষুধ এবং অন্যান্য সহায়তা পৌঁছে দেন।',
  },
  'home.report.title': { en: 'We Report', bn: 'স্বচ্ছ জবাবদিহিতা' },
  'home.report.desc': {
    en: 'Every amount raised and spent is shared openly with our community.',
    bn: 'সংগৃহীত প্রতিটি টাকার আয়-ব্যয়ের হিসাব আমাদের কমিউনিটির সাথে খোলামেলা প্রকাশ করা হয়।',
  },
  'home.impact.eyebrow': { en: 'Our Impact', bn: 'আমাদের প্রভাব' },
  'home.impact.title': { en: 'The difference, in numbers', bn: 'আমাদের কাজের পরিসংখ্যান' },
  'home.stories.eyebrow': { en: 'Recent Work', bn: 'সাম্প্রতিক কার্যক্রম' },
  'home.stories.title': { en: 'Stories from the ground', bn: 'মাঠ পর্যায়ের কিছু চিত্র' },
  'home.stories.subtitle': {
    en: 'A few of the moments your support made possible.',
    bn: 'আপনাদের ভালোবাসায় ও সহায়তায় সম্ভব হওয়া কিছু সুন্দর মুহূর্ত।',
  },
  'home.stories.cta': { en: 'Explore all our work →', bn: 'আমাদের সব কার্যক্রম দেখুন →' },
  'home.cta.title': { en: 'Be part of the next story', bn: 'আমাদের এই মহতী উদ্যোগের অংশ হোন' },
  'home.cta.desc': {
    en: 'Whether you give, volunteer, or simply share our mission — you help a family in need.',
    bn: 'আপনার একটি ছোট দান, স্বেচ্ছাশ্রম, কিংবা আমাদের বার্তাটি শেয়ার করার মাধ্যমেও আপনি একটি অসহায় পরিবারের পাশে দাঁড়াতে পারেন।',
  },
  'home.cta.btn1': { en: 'Support Us', bn: 'সহায়তা করুন' },
  'home.cta.btn2': { en: 'Contact Us', bn: 'যোগাযোগ করুন' },

  // ── About Page ──
  'about.badge': { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
  'about.heroTitle1': { en: 'Our', bn: 'আমাদের' },
  'about.heroTitle2': { en: 'Story', bn: 'গল্প' },
  'about.heroLead': {
    en: 'Born from a simple idea — that friends abroad can change lives at home.',
    bn: 'একটি সহজ ভাবনা থেকে আমাদের শুরু — প্রবাসে থাকা বন্ধুদের একটু সাহায্যে দেশের মানুষের জীবন বদলে দেওয়া সম্ভব।',
  },
  'about.origin.eyebrow': { en: 'How it started', bn: 'যেভাবে শুরু' },
  'about.origin.title': { en: 'From a small gathering to a movement', bn: 'একটি ছোট্ট উদ্যোগ থেকে ব্যাপক কার্যক্রমে' },
  'about.origin.p1': {
    en: 'In 2019, a group of young people from Daganbhuiyan, Feni got together with a simple idea: their friends working abroad wanted to help people back home, but didn\'t know how to ensure their money reached those who truly needed it.',
    bn: '২০১৯ সালে, ফেনীর দাগনভূঁইয়ার একদল তরুণ একটি সহজ উদ্দেশ্য নিয়ে একত্রিত হয়: প্রবাসে থাকা তাদের বন্ধুরা দেশের মানুষকে সাহায্য করতে চাইতো, কিন্তু তারা বুঝতে পারতো না কীভাবে তাদের পাঠানো অর্থ প্রকৃত অভাবীদের কাছে নিরাপদে পৌঁছাবে।',
  },
  'about.origin.p2': {
    en: 'Service for Humanity became that trusted bridge — volunteers on the ground who personally identify people in need, deliver help directly, and report back with full transparency.',
    bn: 'সার্ভিস ফর হিউম্যানিটি সেই বিশ্বস্ত সেতুবন্ধন হয়ে ওঠে — যেখানে মাঠ পর্যায়ের স্বেচ্ছাসেবীরা নিজ দায়িত্বে অসহায় মানুষদের খুঁজে বের করেন, সরাসরি সাহায্য পৌঁছে দেন এবং সম্পূর্ণ স্বচ্ছতার সাথে তার হিসাব প্রদান করেন।',
  },
  'about.vision.eyebrow': { en: 'Vision & Mission', bn: 'লক্ষ্য ও উদ্দেশ্য' },
  'about.vision.title': { en: 'What drives us', bn: 'আমাদের চালিকা শক্তি' },
  'about.vision.label': { en: 'Our Vision', bn: 'আমাদের লক্ষ্য' },
  'about.vision.text': {
    en: 'A community where no one suffers alone — where generosity flows freely from those who can to those who need.',
    bn: 'এমন একটি সমাজ গড়ে তোলা যেখানে কেউ একাকী কষ্টে ভুগবে না — যেখানে সামর্থ্যবানদের সাহায্য সহজেই পৌঁছে যাবে অসহায়দের কাছে।',
  },
  'about.mission.label': { en: 'Our Mission', bn: 'আমাদের উদ্দেশ্য' },
  'about.mission.text': {
    en: 'To collect contributions from friends abroad and deliver direct, transparent help to families in Daganbhuiyan and beyond — covering medical emergencies, food support, education, and community well-being.',
    bn: 'প্রবাসী বন্ধুদের কাছ থেকে প্রাপ্ত অনুদান দিয়ে দাগনভূঁইয়া ও এর বাইরের পরিবারগুলোকে সরাসরি ও স্বচ্ছভাবে সহায়তা করা — যার মধ্যে রয়েছে জরুরি চিকিৎসা, খাদ্য সহায়তা, শিক্ষা এবং সামাজিক কল্যাণ।',
  },
  'about.values.eyebrow': { en: 'Core Values', bn: 'মূলনীতি' },
  'about.values.title': { en: 'What we stand for', bn: 'আমাদের মূল আদর্শ' },
  'about.howWeWork.eyebrow': { en: 'How We Work', bn: 'কাজের পদ্ধতি' },
  'about.howWeWork.title': { en: 'Simple. Direct. Transparent.', bn: 'সহজ। সরাসরি। স্বচ্ছ।' },
  'about.timeline.eyebrow': { en: 'Our Journey', bn: 'আমাদের পথচলা' },
  'about.timeline.title': { en: 'Key milestones', bn: 'গুরুত্বপূর্ণ অর্জনসমূহ' },

  // ── Our Work Page ──
  'work.badge': { en: 'Our Work', bn: 'আমাদের কার্যক্রম' },
  'work.heroTitle1': { en: 'Where your support', bn: 'আপনার সাহায্য' },
  'work.heroTitle2': { en: 'goes', bn: 'যেখানে পৌঁছায়' },
  'work.heroLead': {
    en: 'Real projects, real places, real people. Here is a closer look at the work made possible by our supporters.',
    bn: 'বাস্তব উদ্যোগ, পরিচিত জায়গা আর চেনা মানুষ। আমাদের শুভাকাঙ্ক্ষীদের সহায়তায় বাস্তবায়িত কাজগুলোর একটি চিত্র এখানে তুলে ধরা হলো।',
  },
  'work.stories.eyebrow': { en: 'Case Studies', bn: 'কাজের উদাহরণ' },
  'work.stories.title': { en: 'Our Stories', bn: 'আমাদের সফলতার গল্প' },
  'work.filter.all': { en: 'All', bn: 'সব' },
  'work.filter.medical': { en: 'Medical', bn: 'চিকিৎসা' },
  'work.filter.food': { en: 'Food & Grocery', bn: 'খাদ্য ও মুদি' },
  'work.filter.marriage': { en: 'Marriage Support', bn: 'বিবাহ সহায়তা' },
  'work.filter.sports': { en: 'Sports', bn: 'খেলাধুলা' },
  'work.filter.blood': { en: 'Blood Donation', bn: 'রক্তদান' },
  'work.filter.crisis': { en: 'Crisis Response', bn: 'জরুরি পরিস্থিতি' },

  // ── Gallery Page ──
  'gallery.badge': { en: 'Gallery', bn: 'গ্যালারি' },
  'gallery.heroTitle1': { en: 'Moments from', bn: 'কার্যক্রমের কিছু' },
  'gallery.heroTitle2': { en: 'the field', bn: 'চিত্র' },
  'gallery.heroLead': {
    en: 'Photographs from our events and activities across the community.',
    bn: 'সমাজের নানা স্তরে আয়োজিত আমাদের বিভিন্ন ইভেন্ট ও কার্যক্রমের আলোকচিত্র।',
  },

  // ── Support Us Page ──
  'support.badge': { en: 'Support Us', bn: 'সহায়তা করুন' },
  'support.heroTitle1': { en: 'Support our', bn: 'আমাদের পাশে' },
  'support.heroTitle2': { en: 'mission', bn: 'দাঁড়ান' },
  'support.heroLead': {
    en: 'Every contribution, no matter how small, directly helps a family in need.',
    bn: 'আপনার যেকোনো অনুদান, তা যত ছোটই হোক না কেন, সরাসরি একটি অসহায় পরিবারের উপকারে আসে।',
  },
  'support.total.label': { en: 'Total Distributed So Far', bn: 'এ পর্যন্ত মোট বিতরণের পরিমাণ' },
  'support.how.eyebrow': { en: 'How to Donate', bn: 'কীভাবে অনুদান দেবেন' },
  'support.how.title': { en: 'Choose your preferred method', bn: 'আপনার সুবিধাজনক মাধ্যমটি বেছে নিন' },
  'support.bkash.title': { en: 'bKash', bn: 'বিকাশ' },
  'support.bkash.desc': {
    en: 'Send your contribution via bKash mobile banking.',
    bn: 'বিকাশ মোবাইল ব্যাংকিংয়ের মাধ্যমে আপনার অনুদান পাঠান।',
  },
  'support.nagad.title': { en: 'Nagad', bn: 'নগদ' },
  'support.nagad.desc': {
    en: 'Send your contribution via Nagad mobile banking.',
    bn: 'নগদ মোবাইল ব্যাংকিংয়ের মাধ্যমে আপনার অনুদান পাঠান।',
  },
  'support.bank.title': { en: 'Bank Transfer', bn: 'ব্যাংক ট্রান্সফার' },
  'support.bank.desc': {
    en: 'Transfer directly to our bank account.',
    bn: 'সরাসরি আমাদের ব্যাংক অ্যাকাউন্টে অনুদান পাঠান।',
  },
  'support.where.eyebrow': { en: 'Where It Goes', bn: 'কোথায় ব্যয় হয়' },
  'support.where.title': { en: 'Your money makes a difference', bn: 'আপনার অর্থে আসে পরিবর্তন' },
  'support.trust.title': { en: 'Our Promise', bn: 'আমাদের প্রতিশ্রুতি' },
  'support.trust.text': {
    en: 'Every taka you contribute is tracked, reported, and delivered directly to those who need it most. We share regular updates through our Facebook page so you can see exactly where your generosity goes.',
    bn: 'আপনার দেওয়া প্রতিটি টাকার হিসাব রাখা হয় এবং সরাসরি প্রকৃত অভাবীদের কাছে তা পৌঁছে দেওয়া হয়। আমরা আমাদের ফেসবুক পেজের মাধ্যমে নিয়মিত আপডেট জানাই, যাতে আপনি নিশ্চিন্ত থাকতে পারেন যে আপনার সাহায্য সঠিক জায়গায় পৌঁছেছে।',
  },
  'support.copy': { en: 'Copy Number', bn: 'নম্বর কপি করুন' },
  'support.copied': { en: 'Copied!', bn: 'কপি হয়েছে!' },

  // ── Contact Page ──
  'contact.badge': { en: 'Contact', bn: 'যোগাযোগ' },
  'contact.heroTitle1': { en: 'Get in', bn: 'যোগাযোগ' },
  'contact.heroTitle2': { en: 'touch', bn: 'করুন' },
  'contact.heroLead': {
    en: 'Have a question, want to volunteer, or simply want to say hello? Reach out to us.',
    bn: 'কোনো প্রশ্ন আছে, স্বেচ্ছাসেবী হতে চান, বা শুধু কথা বলতে চান? আমাদের সাথে যোগাযোগ করুন।',
  },
  'contact.volunteer.title': { en: 'Become a Volunteer', bn: 'স্বেচ্ছাসেবী হোন' },
  'contact.volunteer.desc': {
    en: 'We are always looking for helping hands — from field volunteers to people who can spread the word. Reach out and we will get back to you.',
    bn: 'আমরা সবসময় সাহায্যের হাত খুঁজছি — মাঠ পর্যায়ের কর্মী থেকে শুরু করে যারা আমাদের বার্তা সবার মাঝে ছড়িয়ে দিতে পারেন। আমাদের সাথে যোগাযোগ করুন।',
  },
  'contact.form.title': { en: 'Send us a message', bn: 'আমাদের বার্তা পাঠান' },
  'contact.form.name': { en: 'Name', bn: 'নাম' },
  'contact.form.namePh': { en: 'Your name', bn: 'আপনার নাম' },
  'contact.form.email': { en: 'Email', bn: 'ইমেইল' },
  'contact.form.emailPh': { en: 'you@example.com', bn: 'you@example.com' },
  'contact.form.interest': { en: 'I want to', bn: 'আমি চাই' },
  'contact.form.volunteer': { en: 'Volunteer', bn: 'স্বেচ্ছাসেবী হতে' },
  'contact.form.donate': { en: 'Donate', bn: 'অনুদান দিতে' },
  'contact.form.partner': { en: 'Partner with you', bn: 'সহযোগী হিসেবে কাজ করতে' },
  'contact.form.other': { en: 'Something else', bn: 'অন্য কিছু' },
  'contact.form.message': { en: 'Message', bn: 'বার্তা' },
  'contact.form.messagePh': { en: 'Tell us how you\'d like to help…', bn: 'আমাদের জানান আপনি কীভাবে সাহায্য করতে চান…' },
  'contact.form.submit': { en: 'Send Message', bn: 'বার্তা পাঠান' },
  'contact.form.success.title': { en: 'Thank you!', bn: 'ধন্যবাদ!' },
  'contact.form.success.text': {
    en: 'Your message has been received. We will get back to you soon.',
    bn: 'আমরা আপনার বার্তা পেয়েছি। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।',
  },
  'contact.facebook.title': { en: 'Follow us on Facebook', bn: 'ফেসবুকে আমাদের সাথে যুক্ত থাকুন' },
  'contact.facebook.desc': {
    en: 'Stay updated with our latest activities and events.',
    bn: 'আমাদের সর্বশেষ কার্যক্রম ও ইভেন্ট সম্পর্কে আপডেট পেতে ফেসবুকে আমাদের সাথে থাকুন।',
  },

  // ── Footer ──
  'footer.explore': { en: 'Explore', bn: 'এক্সপ্লোর' },
  'footer.contact': { en: 'Contact', bn: 'যোগাযোগ' },
  'footer.follow': { en: 'Follow', bn: 'ফলো করুন' },
  'footer.copyright': {
    en: 'A volunteer initiative.',
    bn: 'একটি স্বেচ্ছাসেবী উদ্যোগ।',
  },

  // ── Language Toggle ──
  'lang.switch': { en: 'বাংলা', bn: 'English' },
}

export default translations
