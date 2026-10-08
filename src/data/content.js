// All editable public content for the Service for Humanity website.
// Every text field uses { en: "...", bn: "..." } for bilingual support.
// Use `ct(field)` from LanguageContext to render the current language.

export const org = {
  name: { en: 'Service for Humanity', bn: 'সার্ভিস ফর হিউম্যানিটি' },
  tagline: {
    en: 'Collecting from friends abroad · Serving those in need at home',
    bn: 'প্রবাসী বন্ধুদের কাছ থেকে সংগ্রহ · দেশের অভাবীদের সেবায়',
  },
  mission: {
    en: 'Service for Humanity is a volunteer-run initiative based in Daganbhuiyan, Feni. We gather generous contributions from friends and well-wishers living abroad and turn every taka into direct, visible help for people in need — emergency medical treatment, Ramadan and Eid grocery support, marriage funds, sports for children, blood donation, and help in times of accident or crisis.',
    bn: 'সার্ভিস ফর হিউম্যানিটি দাগনভূঁইয়া, ফেনীতে অবস্থিত একটি স্বেচ্ছাসেবী উদ্যোগ। আমরা প্রবাসে থাকা বন্ধু ও শুভাকাঙ্ক্ষীদের উদার অবদান সংগ্রহ করি এবং প্রতিটি টাকাকে সরাসরি, দৃশ্যমান সাহায্যে রূপান্তরিত করি — জরুরি চিকিৎসা, রমজান ও ঈদের মুদি সহায়তা, বিবাহ তহবিল, শিশুদের খেলাধুলা, রক্তদান এবং দুর্ঘটনা বা সংকটের সময় সাহায্য।',
  },
  founded: 2019,
  email: 'serviceforhumanity@gmail.com',
  phone: '+880 1612-583289',
  address: { en: 'Daganbhuiyan, Feni, Bangladesh', bn: 'দাগনভূঁইয়া, ফেনী, বাংলাদেশ' },
  social: {
    facebook: 'https://www.facebook.com/ServiceForHumanityBD',
  },
  // Payment info for the Support Us page.
  payments: {
    bkash: { number: '01825-745160', type: { en: 'Personal', bn: 'পার্সোনাল' } },
    nagad: { number: '01825-745160', type: { en: 'Personal', bn: 'পার্সোনাল' } },
    bank: {
      name: { en: 'Service for Humanity', bn: 'সার্ভিস ফর হিউম্যানিটি' },
      bankName: { en: 'To be updated', bn: 'আপডেট করা হবে' },
      accountNo: 'XXXXXXXXXX',
      branch: { en: 'To be updated', bn: 'আপডেট করা হবে' },
    },
  },
  // Single total stat shown on the site (update this manually).
  totalDistributed: 910000,
}

// Headline impact numbers shown on the Home page.
export const impact = [
  { icon: '🩺', value: 40, suffix: '+', label: { en: 'Medical cases helped', bn: 'চিকিৎসা সহায়তা' } },
  { icon: '🛒', value: 1200, suffix: '+', label: { en: 'Ramadan/Eid grocery packs', bn: 'রমজান/ঈদ মুদি প্যাক' } },
  { icon: '💍', value: 15, suffix: '+', label: { en: 'Marriage funds supported', bn: 'বিবাহ তহবিল সহায়তা' } },
  { icon: '🩸', value: 6, suffix: '', label: { en: 'Blood donation camps', bn: 'রক্তদান ক্যাম্প' } },
  { icon: '⚽', value: 8, suffix: '', label: { en: 'Kids sports events', bn: 'শিশু ক্রীড়া ইভেন্ট' } },
  { icon: '🌍', value: 8, suffix: '', label: { en: 'Donor countries', bn: 'দাতা দেশ' } },
]

// Core values for the About page.
export const values = [
  {
    icon: '🔍',
    title: { en: 'Transparency', bn: 'স্বচ্ছতা' },
    desc: {
      en: 'Every taka is tracked and reported. Our community always knows where the funds go.',
      bn: 'প্রতিটি টাকার হিসাব রাখা হয় এবং জানানো হয়। আমাদের কমিউনিটি সবসময় জানে টাকা কোথায় যায়।',
    },
  },
  {
    icon: '🤝',
    title: { en: 'Community', bn: 'সম্প্রদায়' },
    desc: {
      en: 'We are neighbours helping neighbours — rooted in Daganbhuiyan, serving our own people.',
      bn: 'আমরা প্রতিবেশী সাহায্য করছি প্রতিবেশীকে — দাগনভূঁইয়ায় শেকড়, নিজের মানুষের সেবায়।',
    },
  },
  {
    icon: '💜',
    title: { en: 'Dignity', bn: 'মর্যাদা' },
    desc: {
      en: 'We deliver help with respect, ensuring every family is treated with honour.',
      bn: 'আমরা সম্মানের সাথে সাহায্য পৌঁছে দিই, নিশ্চিত করি প্রতিটি পরিবার মর্যাদা পায়।',
    },
  },
  {
    icon: '⚡',
    title: { en: 'Direct Action', bn: 'সরাসরি পদক্ষেপ' },
    desc: {
      en: 'No middlemen. Volunteers personally deliver help to those who need it most.',
      bn: 'কোনো মধ্যস্থতাকারী নেই। স্বেচ্ছাসেবীরা ব্যক্তিগতভাবে সবচেয়ে অভাবীদের কাছে সাহায্য পৌঁছে দেয়।',
    },
  },
]

// Timeline milestones for About page.
export const timeline = [
  {
    year: '2019',
    title: { en: 'Founded', bn: 'প্রতিষ্ঠিত' },
    desc: {
      en: 'A group of young people from Daganbhuiyan start collecting funds from friends abroad.',
      bn: 'দাগনভূঁইয়ার কিছু তরুণ প্রবাসী বন্ধুদের কাছ থেকে তহবিল সংগ্রহ শুরু করে।',
    },
  },
  {
    year: '2020',
    title: { en: 'First Medical Aid', bn: 'প্রথম চিকিৎসা সহায়তা' },
    desc: {
      en: 'Funded emergency medical treatment for the first time during the pandemic.',
      bn: 'মহামারির সময় প্রথমবারের মতো জরুরি চিকিৎসা সহায়তা প্রদান।',
    },
  },
  {
    year: '2022',
    title: { en: 'Growing Impact', bn: 'ক্রমবর্ধমান প্রভাব' },
    desc: {
      en: 'Ramadan grocery programs expanded. First blood donation camp organized.',
      bn: 'রমজান মুদি কর্মসূচি সম্প্রসারিত। প্রথম রক্তদান ক্যাম্প আয়োজিত।',
    },
  },
  {
    year: '2024',
    title: { en: 'Community Sports', bn: 'সামাজিক ক্রীড়া' },
    desc: {
      en: 'Launched kids sports events and marriage support programs.',
      bn: 'শিশু ক্রীড়া ইভেন্ট এবং বিবাহ সহায়তা কর্মসূচি চালু।',
    },
  },
  {
    year: '2025',
    title: { en: '৳9 Lakh+ Distributed', bn: '৳৯ লক্ষ+ বিতরণ' },
    desc: {
      en: 'Crossed ৳9,00,000 in total aid distributed to families in need.',
      bn: 'অভাবী পরিবারগুলোকে মোট ৳৯,০০,০০০+ সাহায্য বিতরণের মাইলফলক অতিক্রম।',
    },
  },
]

// Work stories / case studies — each has a `category` for filtering.
export const stories = [
  {
    id: 'child-medical-emergency',
    category: 'medical',
    title: { en: 'Emergency Medical Help for a Child', bn: 'একটি শিশুর জরুরি চিকিৎসা সহায়তা' },
    date: '2022-10-08',
    place: { en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' },
    cover: '/images/events/IMG_0474.PNG',
    summary: {
      en: 'When a child needed urgent treatment their family could not afford, our donors stepped in to cover the medical costs and save a young life.',
      bn: 'যখন একটি শিশুর জরুরি চিকিৎসা প্রয়োজন ছিল যা তার পরিবার বহন করতে পারেনি, আমাদের দাতারা এগিয়ে এসে চিকিৎসা খরচ বহন করে একটি ছোট্ট জীবন বাঁচিয়েছে।',
    },
    body: {
      en: 'One of the most urgent kinds of help we provide is stepping in when a family faces a sudden medical emergency and has no way to pay. When a child in our community needed urgent treatment, contributions from our friends abroad covered the hospital and medicine costs — giving the family relief and the child a chance to recover.',
      bn: 'আমাদের সবচেয়ে জরুরি সাহায্যের একটি হলো যখন একটি পরিবার হঠাৎ চিকিৎসা জরুরি পরিস্থিতির মুখোমুখি হয় এবং অর্থ প্রদানের কোনো উপায় থাকে না। যখন আমাদের কমিউনিটির একটি শিশুর জরুরি চিকিৎসা প্রয়োজন হয়েছিল, প্রবাসী বন্ধুদের অবদান হাসপাতাল ও ওষুধের খরচ বহন করেছে।',
    },
  },
  {
    id: 'ramadan-eid-grocery',
    category: 'food',
    title: { en: 'Ramadan & Eid Grocery Support', bn: 'রমজান ও ঈদ মুদি সহায়তা' },
    date: '2024-03-18',
    place: { en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' },
    cover: '/images/events/IMG_0462.PNG',
    summary: {
      en: 'Every Ramadan and Eid, we distribute grocery and food packs to struggling families so they can observe the holy month and celebrate with dignity.',
      bn: 'প্রতি রমজান ও ঈদে, আমরা অভাবী পরিবারগুলোকে মুদি ও খাদ্য প্যাক বিতরণ করি যাতে তারা সম্মানের সাথে পবিত্র মাস পালন ও উৎসব করতে পারে।',
    },
    body: {
      en: 'A regular part of our work each year is Ramadan and Eid grocery support. We prepare and hand out food packs — rice, oil, lentils, and essentials — to families who are struggling, so no one in our community goes without during the holy month or the celebration of Eid.',
      bn: 'প্রতি বছর আমাদের কাজের একটি নিয়মিত অংশ হলো রমজান ও ঈদ মুদি সহায়তা। আমরা খাদ্য প্যাক — চাল, তেল, ডাল এবং প্রয়োজনীয় দ্রব্য — প্রস্তুত করে অভাবী পরিবারগুলোকে বিতরণ করি।',
    },
  },
  {
    id: 'marriage-support-fund',
    category: 'marriage',
    title: { en: 'Marriage Support Fund', bn: 'বিবাহ সহায়তা তহবিল' },
    date: '2024-02-11',
    place: { en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' },
    cover: '/images/events/IMG_0465.PNG',
    summary: {
      en: 'We help families in financial hardship arrange the marriage of their daughters with dignity and without falling into debt.',
      bn: 'আমরা আর্থিক সংকটে থাকা পরিবারগুলোকে তাদের মেয়েদের সম্মানের সাথে বিবাহের ব্যবস্থা করতে সাহায্য করি।',
    },
    body: {
      en: 'For many families, arranging a marriage brings heavy financial pressure. Through our marriage support fund, we help families in genuine need cover essential costs — so they can celebrate a new beginning with dignity, and without falling into crippling debt.',
      bn: 'অনেক পরিবারের জন্য, বিবাহের আয়োজন ভারী আর্থিক চাপ নিয়ে আসে। আমাদের বিবাহ সহায়তা তহবিলের মাধ্যমে, আমরা প্রকৃত অভাবী পরিবারগুলোকে প্রয়োজনীয় খরচ বহনে সাহায্য করি।',
    },
  },
  {
    id: 'accident-treatment',
    category: 'crisis',
    title: { en: 'Help After an Accident', bn: 'দুর্ঘটনার পর সাহায্য' },
    date: '2023-08-14',
    place: { en: 'Feni Sadar', bn: 'ফেনী সদর' },
    cover: '/images/events/IMG_0470.PNG',
    summary: {
      en: 'When someone was injured in an accident and could not afford proper treatment, we funded their care and supported the family through recovery.',
      bn: 'যখন কেউ দুর্ঘটনায় আহত হয়ে যথাযথ চিকিৎসার সামর্থ্য রাখতো না, আমরা তাদের চিকিৎসার অর্থায়ন করেছি এবং পরিবারকে সুস্থতার পথে সহায়তা করেছি।',
    },
    body: {
      en: 'Accidents can push a family into crisis overnight. When a person in our area was injured and could not afford proper treatment, our donors funded their medical care and stood by the family through the difficult recovery period.',
      bn: 'দুর্ঘটনা রাতারাতি একটি পরিবারকে সংকটে ফেলতে পারে। যখন আমাদের এলাকার একজন ব্যক্তি আহত হয়ে যথাযথ চিকিৎসার সামর্থ্য রাখতো না, আমাদের দাতারা তাদের চিকিৎসার অর্থায়ন করেছে এবং কঠিন সুস্থতার সময়ে পরিবারের পাশে দাঁড়িয়েছে।',
    },
  },
  {
    id: 'kids-sports-event',
    category: 'sports',
    title: { en: 'Sports Events for Children', bn: 'শিশুদের জন্য ক্রীড়া ইভেন্ট' },
    date: '2024-09-30',
    place: { en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' },
    cover: '/images/events/IMG_0468.PNG',
    summary: {
      en: 'We organise sports events to bring joy, health, and a sense of community to the children of our area.',
      bn: 'আমরা আমাদের এলাকার শিশুদের আনন্দ, স্বাস্থ্য এবং সম্প্রদায়ের অনুভূতি দিতে ক্রীড়া ইভেন্ট আয়োজন করি।',
    },
    body: {
      en: 'Beyond immediate needs, we invest in the happiness of our children. We organise sports events that give kids a chance to play, compete, and build friendships — bringing energy and togetherness to the whole community.',
      bn: 'তাৎক্ষণিক প্রয়োজনের বাইরে, আমরা আমাদের শিশুদের সুখে বিনিয়োগ করি। আমরা ক্রীড়া ইভেন্ট আয়োজন করি যা শিশুদের খেলা, প্রতিযোগিতা এবং বন্ধুত্ব গড়ার সুযোগ দেয়।',
    },
  },
  {
    id: 'blood-donation-camp',
    category: 'blood',
    title: { en: 'Blood Donation Camps', bn: 'রক্তদান ক্যাম্প' },
    date: '2024-12-05',
    place: { en: 'Feni', bn: 'ফেনী' },
    cover: '/images/events/IMG_0467.PNG',
    summary: {
      en: 'We arrange blood donation camps to build a ready supply for patients in emergencies and encourage a culture of giving.',
      bn: 'আমরা জরুরি রোগীদের জন্য প্রস্তুত রক্তের সরবরাহ তৈরি এবং দানের সংস্কৃতি উৎসাহিত করতে রক্তদান ক্যাম্প আয়োজন করি।',
    },
    body: {
      en: 'Blood is a gift that saves lives. We organise blood donation camps to build a reliable supply for patients in emergencies, and to encourage a culture of voluntary donation among young people in our community.',
      bn: 'রক্ত একটি উপহার যা জীবন বাঁচায়। আমরা জরুরি রোগীদের জন্য নির্ভরযোগ্য সরবরাহ তৈরি করতে এবং আমাদের কমিউনিটির তরুণদের মধ্যে স্বেচ্ছায় রক্তদানের সংস্কৃতি উৎসাহিত করতে রক্তদান ক্যাম্প আয়োজন করি।',
    },
  },
]

// Photo gallery — references real photos from public/images/events/.
export const gallery = [
  { id: 1,  img: '/images/posts/main-banner.jpg', caption: { en: 'Badminton Tournament', bn: 'ব্যাডমিন্টন টুর্নামেন্ট' } },
  { id: 2,  img: '/images/posts/2026-12-16.jpg', caption: { en: 'Football Tournament', bn: 'ফুটবল টুর্নামেন্ট' } },
  { id: 3,  img: '/images/posts/2026-03-01.jpg', caption: { en: 'Iftar Distribution', bn: 'ইফতার বিতরণ' } },
  { id: 4,  img: '/images/posts/2026-05-04.jpg', caption: { en: 'Medical Support', bn: 'চিকিৎসা সহায়তা' } },
  { id: 5,  img: '/images/posts/2025-10-21.jpg', caption: { en: 'Spinal Surgery Aid', bn: 'মেরুদণ্ডের সার্জারি সহায়তা' } },
  { id: 6,  img: '/images/posts/2024-03-23.jpg', caption: { en: 'Ramadan Aid', bn: 'রমজান সহায়তা' } },
  { id: 7,  img: '/images/posts/2025-04-15.jpg', caption: { en: 'Cash Aid Delivery', bn: 'আর্থিক সহায়তা প্রদান' } },
  { id: 8,  img: '/images/posts/2026-07-21.png', caption: { en: 'Community Gathering', bn: 'সম্প্রদায় সমাবেশ' } },
  { id: 9,  img: '/images/posts/2023-04-08.jpg', caption: { en: 'Grocery Support', bn: 'মুদি সহায়তা' } },
  { id: 10, img: '/images/posts/2025-03-19.jpg', caption: { en: 'Donation Receipt', bn: 'অনুদানের রশিদ' } },
  { id: 11, img: '/images/posts/2026-02-28.jpg', caption: { en: 'Critical Patient Aid', bn: 'মুমুর্ষ রোগীর সহায়তা' } },
  { id: 12, img: '/images/posts/2026-12-16-1.jpg', caption: { en: 'Tournament Champions', bn: 'টুর্নামেন্ট চ্যাম্পিয়ন' } },
  { id: 13, img: '/images/posts/2026-03-01-1.jpg', caption: { en: 'Eid Items', bn: 'ঈদ সামগ্রী' } },
  { id: 14, img: '/images/posts/2023-04-08-1.jpg', caption: { en: 'Relief Work', bn: 'ত্রাণ বিতরণ' } },
  { id: 15, img: '/images/posts/2020-12-17-1.jpg', caption: { en: 'Sports Event', bn: 'ক্রীড়া ইভেন্ট' } },
  { id: 16, img: '/images/events/IMG_0461.PNG', caption: { en: 'Event highlights', bn: 'ইভেন্ট হাইলাইট' } },
]

// Where donations go — shown on Support Us page.
export const fundAreas = [
  { icon: '🩺', label: { en: 'Medical Emergencies', bn: 'জরুরি চিকিৎসা' }, pct: 35 },
  { icon: '🛒', label: { en: 'Food & Grocery Support', bn: 'খাদ্য ও মুদি সহায়তা' }, pct: 30 },
  { icon: '💍', label: { en: 'Marriage Support', bn: 'বিবাহ সহায়তা' }, pct: 15 },
  { icon: '⚽', label: { en: 'Youth & Sports', bn: 'যুব ও ক্রীড়া' }, pct: 10 },
  { icon: '🩸', label: { en: 'Blood Donation Camps', bn: 'রক্তদান ক্যাম্প' }, pct: 5 },
  { icon: '🚑', label: { en: 'Crisis Response', bn: 'জরুরি সাড়া' }, pct: 5 },
]
