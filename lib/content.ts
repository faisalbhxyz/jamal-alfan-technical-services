import type { City, FaqItem, FieldWorkShot, NavItem, Project, Service } from "@/lib/types";

export const SITE = {
  name: "Jamal Alfan Technical Services Co.",
  shortName: "Jamal Alfan",
  legalName: "Jamal Alfan Technical Services Co.",
  domain: "https://jamalalfantechnicalservicesco.com",
  sloganEn: "You Dream It We Build It",
  sloganAr: "تحلم بها نحن نبنيها",
  email: "mde89408@gmail.com",
  phones: [
    { display: "050 247 1185", e164: "+971502471185", whatsapp: true },
  ],
  city: "Dubai",
  cityAr: "دبي",
  location: "Dubai, UAE",
  locationAr: "دبي، الإمارات العربية المتحدة",
  region: "United Arab Emirates",
  regionAr: "الإمارات العربية المتحدة",
  countryCode: "AE",
  addressCountry: "AE",
  currency: "AED",
  languages: ["ar", "en"] as const,
  localeDefault: "en_AE",
} as const;

export const NAV: NavItem[] = [
  { href: "", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/services", label: { en: "Services", ar: "الخدمات" } },
  { href: "/projects", label: { en: "Projects", ar: "المشاريع" } },
  { href: "/about", label: { en: "About Us", ar: "من نحن" } },
  { href: "/coverage", label: { en: "Service Areas", ar: "مناطق الخدمة" } },
  { href: "/contact", label: { en: "Contact Us", ar: "اتصل بنا" } },
];

export const SERVICES: Service[] = [
  {
    slug: "electrical-works",
    icon: "electrical",
    image: "/images/services/electrical.webp",
    imageAlt: {
      en: "Electrician testing a distribution board with a multimeter",
      ar: "كهربائي يختبر لوحة توزيع بمقياس متعدد",
    },
    title: {
      en: "Electrical Works",
      ar: "الأعمال الكهربائية",
    },
    short: {
      en: "Implementation, installation and maintenance of electrical works.",
      ar: "تنفيذ وتركيب وصيانة الأعمال الكهربائية.",
    },
    description: {
      en: "Safe, code-compliant electrical installation and maintenance for villas, buildings, and commercial interiors. From distribution boards to lighting circuits, we deliver clean workmanship with documented testing.",
      ar: "تنفيذ وصيانة كهربائية آمنة وفق المواصفات للفلل والمباني والديكورات التجارية. من لوحات التوزيع إلى دوائر الإضاءة، نقدم عملاً نظيفاً مع فحوصات موثقة.",
    },
    features: {
      en: [
        "Distribution boards, wiring, and load balancing",
        "Indoor and outdoor lighting systems",
        "Fault finding, repair, and preventive maintenance",
        "Safety testing before handover",
      ],
      ar: [
        "لوحات توزيع وتمديدات وموازنة الأحمال",
        "أنظمة إضاءة داخلية وخارجية",
        "كشف الأعطال والإصلاح والصيانة الوقائية",
        "اختبارات السلامة قبل التسليم",
      ],
    },
    seoTitle: {
      en: "Electrical Works in Dubai, UAE — Villa & Building Electrician",
      ar: "أعمال كهربائية في دبي — كهربائي فلل ومباني",
    },
    seoDescription: {
      en: "Villa and building electrical installation in Dubai, Abu Dhabi, and Sharjah, and across the UAE. Distribution boards, lighting circuits, fault repair, and safety testing before handover.",
      ar: "تمديد وصيانة كهرباء الفلل والمباني في دبي وأبوظبي والشارقة وكل الإمارات. لوحات توزيع، دوائر إضاءة، إصلاح أعطال، واختبار سلامة قبل التسليم.",
    },
    h1: {
      en: "Electrical Works for Villas and Buildings in Dubai, UAE",
      ar: "أعمال كهربائية للفلل والمباني في الإمارات العربية المتحدة",
    },
    intro: {
      en: "Jamal Alfan Technical Services Co. installs, upgrades, and maintains electrical works for villas, apartments, and commercial interiors across Dubai and the UAE. From a new distribution board in Dubai to lighting circuits in a Dubai Marina apartment, we sequence the trade so power is tested before gypsum closes — not after the paint is on the wall.",
      ar: "تنفذ شركة جمال الفان للخدمات الفنية تمديد وتحديث وصيانة الأعمال الكهربائية للفلل والشقق والديكورات التجارية في دبي والإمارات. من لوحة توزيع جديدة في دبي إلى دوائر إضاءة في شقة بدبي مارينا، نرتّب التخصص بحيث تُختبر الكهرباء قبل إغلاق الجبس — لا بعد أن يصبح الدهان على الجدار.",
    },
    sections: [
      {
        heading: {
          en: "Villa electrician work in Dubai, Abu Dhabi, and Sharjah",
          ar: "كهرباء الفلل في دبي وأبوظبي والشارقة",
        },
        body: {
          en: "Dubai villas fail electrically when loads are guessed and boards are left unlabeled. We survey existing circuits, balance phases, and install distribution boards that a future technician can actually read. The same method covers compounds in Dubai Hills, apartments in Dubai Marina, villas in Abu Dhabi and Sharjah, and homes in Jumeirah, Arabian Ranches, Al Barsha, and Mirdif.",
          ar: "تفشل كهرباء الفلل الإمارات عندما تُخمَّن الأحمال وتُترك اللوحات بلا تسمية. نمسح الدوائر القائمة، نوازن الأطوار، ونركب لوحات توزيع يقدر فني لاحق أن يقرأها. نفس الأسلوب يغطي مجمعات دبي هيلز وشقق دبي مارينا وفلل أبوظبي في أبوظبي والشارقة ومنازل جميرا والمرابع العربية والبرشاء ومردف.",
        },
      },
      {
        heading: {
          en: "What a safe electrical handover includes",
          ar: "ماذا يشمل تسليم كهربائي آمن",
        },
        body: {
          en: "Handover is not a switched-on room. We insulation-test, confirm earthing, label breakers in Arabic and English where useful, and walk lighting scenes with you — spots, coves, and outdoor points — so faults are found on our time. Occupied homes stay livable: circuits are isolated in zones, dust is contained, and we work in Arabic and English.",
          ar: "التسليم ليس غرفة تُضاء فقط. نختبر العزل، نؤكد التأريض، نسمّي القواطع بالعربية والإنجليزية عند الحاجة، ونجول مشاهد الإضاءة معكم — السبوت والمخفي والنقاط الخارجية — لتُكتشف الأعطال في وقتنا. المنازل المسكونة تبقى قابلة للعيش: عزل الدوائر حسب المناطق، حصر الغبار، والعمل بالعربية والإنجليزية.",
        },
      },
      {
        heading: {
          en: "Electrical installation sequenced with gypsum and paint",
          ar: "تمديد الكهرباء بتسلسل مع الجبس والدهان",
        },
        body: {
          en: "Lighting points, chandelier boxes, and LED recesses belong in the gypsum drawing, not as afterthoughts. When Jamal Alfan also runs ceiling and painting trades, the electrician and gypsum crew share one plan so you are not chasing two contractors for one majlis. Request a quote with the city, villa type, and photos of the board or room.",
          ar: "نقاط الإضاءة وعلب الثريات وفتحات الليد مكانها في رسم الجبس، لا كفكرة لاحقة. عندما تنفّذ جمال الفان أيضاً الأسقف والدهان، يشارك الكهربائي وطاقم الجبس خطة واحدة حتى لا تطاردوا مقاولين لغرفة مجلس واحدة. اطلبوا عرض سعر مع المرابع العربية ونوع الفيلا وصور اللوحة أو الغرفة.",
        },
      },
    ],
    process: [
      {
        title: { en: "Load survey", ar: "مسح الأحمال" },
        text: {
          en: "We photograph the board, note loads, and confirm indoor, outdoor, and wet-area circuits.",
          ar: "نصور اللوحة، نسجّل الأحمال، ونؤكد دوائر الداخل والخارج والأماكن الرطبة.",
        },
      },
      {
        title: { en: "Written scope", ar: "نطاق مكتوب" },
        text: {
          en: "DB work, wiring, lighting points, and timeline in writing before tools arrive.",
          ar: "أعمال اللوحة والتمديد ونقاط الإضاءة والجدول مكتوباً قبل وصول الأدوات.",
        },
      },
      {
        title: { en: "Protected install", ar: "تركيب محمي" },
        text: {
          en: "Isolated circuits, labeled runs, and coordination with gypsum so walls close once.",
          ar: "دوائر معزولة وتمديدات مسمّاة وتنسيق مع الجبس لتُغلق الجدران مرة واحدة.",
        },
      },
      {
        title: { en: "Test & walkthrough", ar: "فحص وجولة" },
        text: {
          en: "Safety tests, lighting check, then a joint handover of the finished electrical work.",
          ar: "اختبارات سلامة وفحص إضاءة ثم تسليم مشترك للعمل الكهربائي المكتمل.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you handle villa electrical work in Dubai and Abu Dhabi?",
          ar: "هل تنفذون كهرباء الفلل في دبي وأبوظبي؟",
        },
        answer: {
          en: "Yes. We install and maintain distribution boards, lighting circuits, and fault repairs for villas in Dubai, Abu Dhabi, Sharjah, and Ajman, and other UAE cities, with safety testing before handover.",
          ar: "نعم. نركب ونصون لوحات التوزيع ودوائر الإضاءة وإصلاح الأعطال لفلل دبي وأبوظبي والشارقة وعجمان ومدن إماراتية أخرى، مع اختبارات سلامة قبل التسليم.",
        },
      },
      {
        question: {
          en: "Can you rewire an occupied apartment?",
          ar: "هل يمكن إعادة تمديد شقة مسكونة؟",
        },
        answer: {
          en: "Yes. We isolate work by zone, protect floors, and keep essential circuits live where possible so the home stays usable. Share photos of the board and the rooms on WhatsApp to scope the visit.",
          ar: "نعم. نعزل العمل حسب المنطقة، نحمي الأرضيات، ونبقي الدوائر الأساسية حية قدر الإمكان ليبقى المنزل قابلاً للاستخدام. أرسلوا صور اللوحة والغرف عبر واتساب لتحديد الزيارة.",
        },
      },
      {
        question: {
          en: "Do you test electrical work before handover?",
          ar: "هل تختبرون الكهرباء قبل التسليم؟",
        },
        answer: {
          en: "Always. Insulation, earthing, and a lighting walkthrough are part of the job — not an extra. Outstanding items are listed, not left for you to find after we leave.",
          ar: "دائماً. العزل والتأريض وجولة الإضاءة جزء من العمل — ليست إضافة. النواقص تُدرج في قائمة، لا تُترك لتكتشفوها بعد مغادرتنا.",
        },
      },
      {
        question: {
          en: "How do I get an electrical quote in Dubai, UAE?",
          ar: "كيف أحصل على عرض سعر للكهرباء في دبي؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with the city, villa or building type, and photos of the board or space. You can also use the quote form. Typical reply is within 24 hours on working days.",
          ar: "راسلوا أو اتصلوا على 0502471185 عبر واتساب مع المرابع العربية ونوع الفيلا أو المبنى وصور اللوحة أو المساحة. يمكن أيضاً استخدام نموذج عرض السعر. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "electrical works Dubai, UAE",
        "villa electrician Dubai",
        "electrical contractor Dubai Marina",
        "distribution board installation UAE",
        "building electrician Abu Dhabi",
      ],
      ar: [
        "أعمال كهربائية الإمارات",
        "كهربائي فلل دبي",
        "مقاول كهرباء دبي مارينا",
        "تركيب لوحة توزيع",
        "كهربائي مباني أبوظبي",
      ],
    },
  },
  {
    slug: "painting-services",
    icon: "painting",
    image: "/images/services/painting.webp",
    imageAlt: {
      en: "Painters working on a villa exterior and an interior wall",
      ar: "دهانون يعملون على واجهة فيلا وجدار داخلي",
    },
    title: {
      en: "Painting Services",
      ar: "أعمال الدهان",
    },
    short: {
      en: "Building and villa indoor and outdoor painting.",
      ar: "دهان المباني والفلل داخلي وخارجي.",
    },
    description: {
      en: "Interior and exterior painting for villas and buildings, with surface preparation that lasts. We specify coatings for the UAE climate — heat, dust, and humidity — so color stays true and walls stay protected.",
      ar: "دهان داخلي وخارجي للفلل والمباني مع تجهيز أسطح يدوم. نختار الدهانات المناسبة لمناخ الإمارات — الحرارة والغبار والرطوبة — لتحافظ الألوان على رونقها والجدران على حمايتها.",
    },
    features: {
      en: [
        "Villa interiors, facades, and common areas",
        "Surface repair, primer, and premium finishes",
        "Weather-resistant exterior systems",
        "Clean site protection and tidy handover",
      ],
      ar: [
        "داخل الفلل والواجهات والمناطق المشتركة",
        "إصلاح الأسطح والبرايمر والدهانات الفاخرة",
        "أنظمة خارجية مقاومة للعوامل الجوية",
        "حماية الموقع وتسليم نظيف",
      ],
    },
    seoTitle: {
      en: "Villa Painting in Dubai, UAE — Interior & Exterior Painters",
      ar: "دهان فلل في دبي — دهان داخلي وخارجي",
    },
    seoDescription: {
      en: "Interior and exterior villa painting in Dubai, Abu Dhabi, and Sharjah, and across Dubai and the UAE. Climate-ready coatings, surface prep, and a clean handover from Jamal Alfan.",
      ar: "دهان داخلي وخارجي للفلل في دبي وأبوظبي والشارقة وكل الإمارات. دهانات تناسب المناخ، تجهيز أسطح، وتسليم نظيف من جمال الفان.",
    },
    h1: {
      en: "Interior and Exterior Painting for Villas in Dubai, UAE",
      ar: "دهان داخلي وخارجي للفلل في الإمارات العربية المتحدة",
    },
    intro: {
      en: "Painting in the UAE is a climate job, not a colour job. Heat, dust, and coastal humidity in Dubai Marina, Palm Jumeirah, and Abu Dhabi punish cheap systems. Jamal Alfan specifies interior and exterior coatings for villas and buildings so colour stays true after the first summer — and we protect floors and joinery while we work.",
      ar: "الدهان في الإمارات عمل مناخ، لا عمل لون فقط. الحرارة والغبار ورطوبة الساحل في دبي مارينا ونخلة جميرا وأبوظبي تعاقب الأنظمة الرخيصة. تختار جمال الفان دهانات داخلية وخارجية للفلل والمباني لتحافظ الألوان على رونقها بعد أول صيف — مع حماية الأرضيات والنجارة أثناء العمل.",
    },
    sections: [
      {
        heading: {
          en: "Villa painters in Dubai, Abu Dhabi, and Sharjah",
          ar: "دهانو فلل في دبي وأبوظبي وأبوظبي",
        },
        body: {
          en: "We paint villa interiors, facades, stair cores, and common areas in Dubai Hills compounds, Dubai Marina homes, Abu Dhabi and Sharjah villas, and further cities including Jumeirah, Arabian Ranches, Al Barsha, and Mirdif. Exterior systems are chosen for UV and dust; interiors for washability in majlis and family rooms that actually get used.",
          ar: "ندهن داخل الفلل والواجهات وأقفاص السلالم والمناطق المشتركة في مجمعات دبي ومنازل دبي مارينا وفلل أبوظبي والشارقة ومدن أخرى تشمل جميرا والمرابع العربية والبرشاء ومردف. الأنظمة الخارجية تُختار للأشعة والغبار؛ والداخلية لقابلية الغسل في المجالس وغرف العائلة المستخدمة فعلاً.",
        },
      },
      {
        heading: {
          en: "Surface preparation that lasts in Dubai heat",
          ar: "تجهيز أسطح يدوم في حر الإمارات",
        },
        body: {
          en: "Most paint failures here are prep failures: salt, dust, hairline cracks, and skipped primer. We repair, sand, prime, and only then apply finish coats. Gypsum ceilings and new plaster are left to dry before colour — so you are not paying twice after the first sandstorm.",
          ar: "أغلب فشل الدهان هنا فشل تجهيز: أملاح وغبار وشروخ شعرية وبرايمر متجاوز. نصلح ونصنفّر ونضع البرايمر ثم طبقات التشطيب. أسقف الجبس واللياسة الجديدة تُترك لتجف قبل اللون — حتى لا تدفعوا مرتين بعد أول عاصفة غبار.",
        },
      },
      {
        heading: {
          en: "Painting sequenced after electrical and gypsum",
          ar: "الدهان بعد الكهرباء والجبس",
        },
        body: {
          en: "Paint waits for dust. If we also run electrical and gypsum on the same villa, colour goes on after lighting points are set and ceilings are sanded. One crew, one walkthrough, no overlapping footprints on a fresh wall. Send the city and photos for a quote.",
          ar: "الدهان ينتظر الغبار. إذا نفّذنا أيضاً الكهرباء والجبس في نفس الفيلا، يوضع اللون بعد تثبيت نقاط الإضاءة وصنفرة الأسقف. طاقم واحد وجولة واحدة بلا آثار أقدام على جدار جديد. أرسلوا المرابع العربية والصور لعرض السعر.",
        },
      },
    ],
    process: [
      {
        title: { en: "Colour & substrate survey", ar: "مسح اللون والسطح" },
        text: {
          en: "We check walls, facades, and gypsum, then confirm interior and exterior systems for the city climate.",
          ar: "نفحص الجدران والواجهات والجبس، ثم نؤكد أنظمة الداخل والخارج لمناخ المرابع العربية.",
        },
      },
      {
        title: { en: "Written coating spec", ar: "مواصفة دهان مكتوبة" },
        text: {
          en: "Products, sheen, and number of coats in writing — including weather-resistant exteriors.",
          ar: "المنتجات واللمعة وعدد الطبقات مكتوباً — بما فيها الخارج المقاوم للعوامل الجوية.",
        },
      },
      {
        title: { en: "Prep and protected coats", ar: "تجهيز وطبقات محمية" },
        text: {
          en: "Repair, primer, finish coats, with floors and joinery covered in occupied homes.",
          ar: "إصلاح وبرايمر وطبقات تشطيب، مع تغطية الأرضيات والنجارة في المنازل المسكونة.",
        },
      },
      {
        title: { en: "Touch-up walkthrough", ar: "جولة لمسات" },
        text: {
          en: "We walk every room with you, list touch-ups, and leave a tidy site.",
          ar: "نجول كل غرفة معكم، ندرج اللمسات، ونغادر والموقع نظيف.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Are your paints suitable for the UAE climate?",
          ar: "هل دهاناتكم تناسب مناخ الإمارات؟",
        },
        answer: {
          en: "We specify interior and exterior coatings for heat, dust, and coastal humidity — including Dubai Marina, Palm Jumeirah, Abu Dhabi, and Sharjah — so facades and interiors last beyond the first summer.",
          ar: "نختار دهانات داخلية وخارجية للحرارة والغبار ورطوبة الساحل — بما فيها دبي مارينا وأبوظبي والشارقة — لتدوم الواجهات والداخل بعد أول صيف.",
        },
      },
      {
        question: {
          en: "Do you paint occupied villas?",
          ar: "هل تدهنون فللًا مسكونة؟",
        },
        answer: {
          en: "Yes. Floors, furniture, and joinery are protected, rooms are sequenced, and dust is contained so the house stays livable. We work in Arabic and English.",
          ar: "نعم. تُحمى الأرضيات والأثاث والنجارة، وتُرتَّب الغرف، ويُحصر الغبار ليبقى البيت قابلاً للعيش. نعمل بالعربية والإنجليزية.",
        },
      },
      {
        question: {
          en: "Can gypsum ceilings and painting be done together?",
          ar: "هل يمكن تنفيذ أسقف الجبس والدهان معاً؟",
        },
        answer: {
          en: "That is how we sequence the job. Gypsum geometry is set around the lighting plan, then sanded and painted in one handover so you are not coordinating two crews.",
          ar: "هذا هو تسلسل العمل عندنا. هندسة الجبس تُضبط حول خطة الإضاءة، ثم الصنفرة والدهان في تسليم واحد حتى لا تنسّقوا طاقمين.",
        },
      },
      {
        question: {
          en: "How do I get a painting quote in Dubai?",
          ar: "كيف أحصل على عرض سعر للدهان في دبي؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with the city, interior or facade, and photos. The quote form also works. We typically reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المرابع العربية والداخل أو الواجهة والصور. النموذج يعمل أيضاً. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "villa painting Dubai, UAE",
        "interior painter Dubai",
        "exterior painting Dubai Marina",
        "facade painter Abu Dhabi",
        "house painting UAE",
      ],
      ar: [
        "دهان فلل الإمارات",
        "دهان داخلي دبي",
        "دهان خارجي دبي مارينا",
        "دهان واجهات أبوظبي",
        "دهان منازل الإمارات",
      ],
    },
  },
  {
    slug: "interior-decor",
    icon: "interior",
    image: "/images/services/interior.webp",
    imageAlt: {
      en: "Finished living room with tray ceiling, chandelier, and coordinated furnishings",
      ar: "غرفة معيشة مكتملة بسقف صواني وثريا وأثاث منسق",
    },
    title: {
      en: "Interior Decor",
      ar: "الديكور الداخلي",
    },
    short: {
      en: "Room interior decor for villas, apartments, and reception spaces.",
      ar: "ديكور الغرف الداخلي للفلل والشقق ومجالس الاستقبال.",
    },
    description: {
      en: "Complete room interiors that feel considered — lighting, finishes, millwork, and furniture coordination. We turn an empty space into a finished room you can live in, not a mood board.",
      ar: "ديكور داخلي متكامل يُدرس بعناية — الإضاءة والخامات والنجارة وتنسيق الأثاث. نحوّل المساحة الفارغة إلى غرفة جاهزة للعيش، لا مجرد تصور.",
    },
    features: {
      en: [
        "Living rooms, majlis, bedrooms, and receptions",
        "Feature walls, lighting scenes, and joinery",
        "Material selection and on-site finishing",
        "Turnkey styling with your existing pieces",
      ],
      ar: [
        "غرف المعيشة والمجالس وغرف النوم والاستقبال",
        "جدران مميزة ومشاهد إضاءة وأعمال نجارة",
        "اختيار الخامات والتشطيب في الموقع",
        "تنسيق تسليم مفتاح مع قطعكم الحالية",
      ],
    },
    seoTitle: {
      en: "Interior Decor in Dubai, UAE — Villa, Majlis & Reception Fit-Out",
      ar: "ديكور داخلي في دبي — فلل ومجالس وصالات استقبال",
    },
    seoDescription: {
      en: "Complete villa and majlis interior decor in Dubai, Abu Dhabi, and Sharjah, and across the UAE. Lighting, finishes, joinery, and turnkey room fit-outs by Jamal Alfan.",
      ar: "ديكور داخلي متكامل للفلل والمجالس في دبي وأبوظبي والشارقة وكل الإمارات. إضاءة وخامات ونجارة وتشطيب غرف تسليم مفتاح من جمال الفان.",
    },
    h1: {
      en: "Interior Decor for Villas, Majlis, and Receptions in Dubai, UAE",
      ar: "ديكور داخلي للفلل والمجالس وصالات الاستقبال في دبي",
    },
    intro: {
      en: "Interior decor here has to survive how Dubai homes are actually used — majlis traffic, family rooms, and receptions that must look finished, not staged. Jamal Alfan turns an empty villa room into a livable interior: lighting scenes, feature walls, millwork, and furniture coordination, sequenced with gypsum, paint, and electrical so the last trade does not undo the first.",
      ar: "الديكور الداخلي هنا يجب أن يصمد أمام استخدام البيت الإماراتي فعلاً — حركة المجالس وغرف العائلة وصالات الاستقبال التي يلزم أن تبدو مكتملة لا مُعدّة للتصوير. تحوّل جمال الفان غرفة فيلا فارغة إلى ديكور قابل للعيش: مشاهد إضاءة وجدران مميزة ونجارة وتنسيق أثاث، بتسلسل مع الجبس والدهان والكهرباء حتى لا يفسد التخصص الأخير الأول.",
    },
    sections: [
      {
        heading: {
          en: "Majlis and villa interiors in Dubai and Abu Dhabi, and Sharjah",
          ar: "ديكور المجالس والفلل في دبي وأبوظبي والشارقة",
        },
        body: {
          en: "We finish living rooms, majlis, bedrooms, and receptions in Dubai, Abu Dhabi, Sharjah, and Ajman, Jumeirah, and Arabian Ranches. Cove lighting, gypsum trays, and feature walls are specified for sitting, not for a mood board. Waterfront apartments in Sharjah and Dubai Marina get humidity-aware finishes; inland villas get materials that hold colour in heat and dust.",
          ar: "نشطّب غرف المعيشة والمجالس وغرف النوم والاستقبال في دبي وأبوظبي والشارقة وعجمان. الإضاءة المخفية وصواني الجبس والجدران المميزة تُحدد للجلوس، لا للتصور. شقق الساحل في الشارقة ودبي مارينا تأخذ خامات تراعي الرطوبة؛ والفلل الداخلية خامات تثبت اللون في الحرارة والغبار.",
        },
      },
      {
        heading: {
          en: "Fit-out that includes the trades underneath",
          ar: "تشطيب يشمل الحرف التي تحته",
        },
        body: {
          en: "A reception fails when the ceiling crew, electrician, and decorator never share a drawing. We set lighting points before gypsum, paint after dust, and style with your existing pieces so the room is ready to live in. One contractor for decor, gypsum, and electrical means one handover.",
          ar: "تفشل صالة الاستقبال عندما لا يشارك طاقم السقف والكهربائي والمصمّم رسمة واحدة. نثبت نقاط الإضاءة قبل الجبس، والدهان بعد الغبار، والتنسيق مع قطعكم الحالية لتكون الغرفة جاهزة للعيش. مقاول واحد للديكور والجبس والكهرباء يعني تسليماً واحداً.",
        },
      },
      {
        heading: {
          en: "From WhatsApp photo to a finished room",
          ar: "من صورة واتساب إلى غرفة مكتملة",
        },
        body: {
          en: "Send the city, room type, and photos. We confirm materials on site, not only on a screen, and walk the finished interior with you. Arabic and English throughout.",
          ar: "أرسلوا المرابع العربية ونوع الغرفة والصور. نؤكد الخامات في الموقع لا على الشاشة فقط، ونجول الديكور المكتمل معكم. العربية والإنجليزية طوال العمل.",
        },
      },
    ],
    process: [
      {
        title: { en: "Room brief", ar: "موجز الغرفة" },
        text: {
          en: "We walk the space, note lighting, joinery, and how the majlis or reception is used.",
          ar: "نمر على المساحة، نسجّل الإضاءة والنجارة وكيفية استخدام المجلس أو الاستقبال.",
        },
      },
      {
        title: { en: "Material & lighting plan", ar: "خطة خامات وإضاءة" },
        text: {
          en: "Finishes, scenes, and gypsum geometry agreed in writing before site work.",
          ar: "الخامات والمشاهد وهندسة الجبس تُتفق كتابياً قبل العمل في الموقع.",
        },
      },
      {
        title: { en: "On-site finishing", ar: "تشطيب في الموقع" },
        text: {
          en: "Electrical, gypsum, paint, and decor sequenced so trades do not undo each other.",
          ar: "الكهرباء والجبس والدهان والديكور بتسلسل يمنع أن يفسد تخصص تخصصاً آخر.",
        },
      },
      {
        title: { en: "Styling handover", ar: "تسليم التنسيق" },
        text: {
          en: "We set the room with your pieces, walk lighting scenes, and list any remaining items.",
          ar: "نرتّب الغرفة بقطعكم، نجول مشاهد الإضاءة، وندرج أي بنود متبقية.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you decorate majlis and reception rooms in Dubai?",
          ar: "هل تشطّبون المجالس وصالات الاستقبال في دبي؟",
        },
        answer: {
          en: "Yes. Living rooms, majlis, bedrooms, and receptions are core work — with lighting, feature walls, and joinery specified for how Dubai homes are used, in Dubai, Abu Dhabi, Sharjah, and Ajman, and further cities.",
          ar: "نعم. غرف المعيشة والمجالس وغرف النوم والاستقبال عمل أساسي — مع إضاءة وجدران مميزة ونجارة تناسب استخدام البيت الإماراتي، في دبي وأبوظبي والشارقة وعجمان ومدن أخرى.",
        },
      },
      {
        question: {
          en: "Can you work with furniture we already own?",
          ar: "هل تعملون مع أثاث لدينا مسبقاً؟",
        },
        answer: {
          en: "Yes. Turnkey styling can include your existing pieces. We finish the shell — ceiling, walls, lighting — then coordinate so the room does not look like a catalogue that ignores what you already have.",
          ar: "نعم. التنسيق تسليم مفتاح يمكن أن يشمل قطعكم الحالية. نشطّب الغلاف — السقف والجدران والإضاءة — ثم ننسّق حتى لا تبدو الغرفة كتالوجاً يتجاهل ما لديكم.",
        },
      },
      {
        question: {
          en: "Do interior jobs include gypsum and electrical?",
          ar: "هل يشمل الديكور الداخلي الجبس والكهرباء؟",
        },
        answer: {
          en: "They should. Lighting points and ceiling geometry belong in one plan. Jamal Alfan can run electrical, gypsum, paint, and decor as one job so you are not juggling four crews.",
          ar: "ينبغي ذلك. نقاط الإضاءة وهندسة السقف مكانها في خطة واحدة. يمكن لجمال الفان تنفيذ الكهرباء والجبس والدهان والديكور كعمل واحد حتى لا تديروا أربعة طواقم.",
        },
      },
      {
        question: {
          en: "How do I start an interior decor quote?",
          ar: "كيف أبدأ عرض سعر للديكور الداخلي؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with city, room type, and photos, or use the form. Typical reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المرابع العربية ونوع الغرفة والصور، أو استخدموا النموذج. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "interior decor Dubai, UAE",
        "villa interior Dubai",
        "majlis fit-out Dubai Marina",
        "reception interior Abu Dhabi",
        "interior decorator Sharjah",
      ],
      ar: [
        "ديكور داخلي الإمارات",
        "ديكور فلل دبي",
        "تشطيب مجالس دبي مارينا",
        "ديكور استقبال أبوظبي",
        "ديكور داخلي الشارقة",
      ],
    },
  },
  {
    slug: "gypsum-ceiling-works",
    icon: "gypsum",
    image: "/images/services/gypsum.webp",
    imageAlt: {
      en: "Multi-tier gypsum ceiling with cove lighting and a chandelier",
      ar: "سقف جبس متعدد الطبقات بإضاءة مخفية وثريا",
    },
    title: {
      en: "Gypsum & Ceiling Works",
      ar: "أعمال الجبس والأسقف",
    },
    short: {
      en: "Implementation of gypsum decoration and painting works.",
      ar: "تنفيذ أعمال الديكور الجبسي والدهان.",
    },
    description: {
      en: "Gypsum ceilings and wall features with cove lighting, recesses, and clean paint finish. We design the geometry around your lighting plan so the ceiling is the room’s quiet luxury.",
      ar: "أسقف جبس وتفاصيل جدارية مع إضاءة مخفية وفتحات وتشطيب دهان نظيف. نصمم الهندسة حول خطة الإضاءة ليكون السقف فخامة هادئة للغرفة.",
    },
    features: {
      en: [
        "Coffered, cove, and tray ceiling systems",
        "LED recesses, spots, and chandelier points",
        "Wall niches and decorative gypsum details",
        "Leveling, sanding, and paint-ready finish",
      ],
      ar: [
        "أسقف كاسيت ومخفية وصواني",
        "فتحات ليد وسبوت ونقاط الثريات",
        "كوات جدارية وتفاصيل جبس زخرفية",
        "تسوية وصنفرة وتشطيب جاهز للدهان",
      ],
    },
    seoTitle: {
      en: "Gypsum Ceiling Works in Dubai — Cove Lighting & False Ceilings",
      ar: "أسقف جبس في دبي — إضاءة مخفية وأسقف معلقة",
    },
    seoDescription: {
      en: "Gypsum ceilings, cove lighting, and decorative ceiling works for villas and majlis in Dubai, Abu Dhabi, Sharjah, and across the UAE. Paint-ready finish from Jamal Alfan.",
      ar: "أسقف جبس وإضاءة مخفية وأعمال أسقف زخرفية للفلل والمجالس في دبي وأبوظبي والشارقة وكل الإمارات. تشطيب جاهز للدهان من جمال الفان.",
    },
    h1: {
      en: "Gypsum and Ceiling Works for Villas and Majlis in Dubai",
      ar: "أعمال الجبس والأسقف للفلل والمجالس في دبي والإمارات",
    },
    intro: {
      en: "A gypsum ceiling is the quiet luxury of a Dubai majlis — if the geometry follows the lighting plan. Jamal Alfan designs tray, cove, and coffered systems around LED recesses, spots, and chandelier points, then sands to a paint-ready finish. We work villas and apartments in Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and across the UAE.",
      ar: "سقف الجبس هو الفخامة الهادئة لمجلس في دبي — إذا تبعت الهندسة خطة الإضاءة. تصمم جمال الفان أنظمة الصواني والمخفي والكاسيت حول فتحات الليد والسبوت ونقاط الثريات، ثم الصنفرة حتى تشطيب جاهز للدهان. نعمل في فلل وشقق دبي مارينا وجميرا والمرابع العربية وأبوظبي والشارقة وكل الإمارات.",
    },
    sections: [
      {
        heading: {
          en: "False ceilings and cove lighting in Dubai and Abu Dhabi",
          ar: "أسقف معلقة وإضاءة مخفية في دبي وأبوظبي",
        },
        body: {
          en: "We install coffered, cove, and tray ceilings for villa majlis, living rooms, and receptions. Lighting points are set with the electrician — not cut in later. The same crew language covers Dubai Hills compounds, Marina apartments, Abu Dhabi villas, and homes in Jumeirah, Arabian Ranches, Al Barsha, and Mirdif.",
          ar: "نركب أسقف كاسيت ومخفية وصواني لمجالس الفلل وغرف المعيشة والاستقبال. نقاط الإضاءة تُثبت مع الكهربائي — لا تُقطع لاحقاً. نفس لغة الطاقم تغطي مجمعات دبي هيلز وشقق المارينا وفلل أبوظبي ومنازل جميرا والمرابع العربية والبرشاء ومردف.",
        },
      },
      {
        heading: {
          en: "Gypsum that is ready for paint, not another contractor",
          ar: "جبس جاهز للدهان لا لمقاول آخر",
        },
        body: {
          en: "Leveling, taping, and sanding are the job. We hand over paint-ready surfaces, or we paint them ourselves in one sequence so you are not waiting on a second crew to hide joints. Wall niches and decorative details follow the same standard.",
          ar: "التسوية والشريط والصنفرة هي العمل. نسلّم أسطحاً جاهزة للدهان، أو ندهنها بأنفسنا في تسلسل واحد حتى لا تنتظروا طاقماً ثانياً لإخفاء الوصلات. الكوات الجدارية والتفاصيل الزخرفية بنفس المعيار.",
        },
      },
      {
        heading: {
          en: "Ceilings sequenced with electrical and painting",
          ar: "أسقف بتسلسل مع الكهرباء والدهان",
        },
        body: {
          en: "Gypsum closes after wiring. Paint waits for dust. When Jamal Alfan runs all three, the majlis is one handover. Send the city, room photos, and whether you need cove LED or a chandelier point.",
          ar: "الجبس يُغلق بعد التمديد. الدهان ينتظر الغبار. عندما تنفّذ جمال الفان الثلاثة، يكون المجلس تسليماً واحداً. أرسلوا المدينة وصور الغرفة وما إذا كنتم تحتاجون ليد مخفي أو نقطة ثريا.",
        },
      },
    ],
    process: [
      {
        title: { en: "Lighting geometry", ar: "هندسة الإضاءة" },
        text: {
          en: "We mark trays, coves, spots, and chandelier points on the existing ceiling before a board goes up.",
          ar: "نعلّم الصواني والمخفي والسبوت ونقاط الثريات على السقف القائم قبل رفع أي لوح.",
        },
      },
      {
        title: { en: "Frame and board", ar: "هيكل وألواح" },
        text: {
          en: "Levels, recesses, and niches built to the agreed drawing, coordinated with electrical.",
          ar: "المناسيب والفتحات والكوات وفق الرسم المتفق عليه، بالتنسيق مع الكهرباء.",
        },
      },
      {
        title: { en: "Tape, sand, finish", ar: "شريط وصنفرة وتشطيب" },
        text: {
          en: "Joints treated and sanded to a paint-ready surface — or painted in the same job.",
          ar: "معالجة الوصلات والصنفرة حتى سطح جاهز للدهان — أو الدهان في نفس العمل.",
        },
      },
      {
        title: { en: "Lighting check", ar: "فحص الإضاءة" },
        text: {
          en: "We switch scenes with you: cove, spots, and feature points, then list any touch-ups.",
          ar: "نشغّل المشاهد معكم: المخفي والسبوت والنقاط المميزة، ثم ندرج أي لمسات.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you install gypsum ceilings with hidden LED lighting in Dubai?",
          ar: "هل تركّبون أسقف جبس مع إضاءة ليد مخفية في دبي؟",
        },
        answer: {
          en: "Yes. Cove, tray, and coffered systems are designed around LED recesses, spots, and chandelier points so the ceiling and the lighting plan are one drawing.",
          ar: "نعم. أنظمة المخفي والصواني والكاسيت تُصمم حول فتحات الليد والسبوت ونقاط الثريات ليكون السقف وخطة الإضاءة رسمة واحدة.",
        },
      },
      {
        question: {
          en: "Can gypsum and painting be one contract?",
          ar: "هل يمكن أن يكون الجبس والدهان عقداً واحداً؟",
        },
        answer: {
          en: "Yes. We sand to paint-ready and can apply finish coats in the same handover so joints are not someone else’s problem.",
          ar: "نعم. نصنفّر حتى الجاهزية للدهان ويمكن تطبيق طبقات التشطيب في نفس التسليم حتى لا تبقى الوصلات مشكلة طرف آخر.",
        },
      },
      {
        question: {
          en: "Do you work on majlis ceilings in Dubai Marina and Jumeirah?",
          ar: "هل تعملون على أسقف المجالس في دبي مارينا وجميرا؟",
        },
        answer: {
          en: "Yes — villas and apartments in Dubai, Abu Dhabi, Sharjah, Ajman, and other UAE cities. Share room photos and the area to confirm the visit.",
          ar: "نعم — فلل وشقق في دبي وأبوظبي والشارقة وعجمان ومدن إماراتية أخرى. أرسلوا صور الغرفة والمنطقة لتأكيد الزيارة.",
        },
      },
      {
        question: {
          en: "How do I quote gypsum ceiling works in the UAE?",
          ar: "كيف أطلب عرض سعر لأسقف الجبس في الإمارات؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with the area, room type, and ceiling photos. Typical reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المنطقة ونوع الغرفة وصور السقف. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "gypsum ceiling Dubai",
        "false ceiling Dubai Marina",
        "cove lighting Jumeirah",
        "majlis gypsum Abu Dhabi",
        "gypsum board UAE",
      ],
      ar: [
        "أسقف جبس دبي",
        "سقف معلق دبي مارينا",
        "إضاءة مخفية جميرا",
        "جبس مجالس أبوظبي",
        "جبس بورد الإمارات",
      ],
    },
  },
  {
    slug: "tile-bathroom-work",
    icon: "bathroom",
    image: "/images/services/bathroom.webp",
    imageAlt: {
      en: "Modern bathroom with stone tiles, black fixtures, and a glass shower",
      ar: "حمام حديث ببلاط حجري وأدوات سوداء ودش زجاجي",
    },
    title: {
      en: "Tile & Bathroom Work",
      ar: "أعمال البلاط والحمامات",
    },
    short: {
      en: "Tile and bathroom work for new builds and renovations.",
      ar: "أعمال البلاط والحمامات للبناء الجديد والتجديد.",
    },
    description: {
      en: "Precision tiling and complete bathroom fit-outs — waterproofing, levels, grout lines, and fixtures. Wet rooms are unforgiving; our detailing is built so they stay dry and look sharp for years.",
      ar: "بلاط بدقة وتجهيز حمامات كامل — عزل مائي ومستويات وخطوط ترويبة وأدوات صحية. الأماكن الرطبة لا تسامح؛ تفاصيلنا مصممة لتبقى جافة وأنيقة لسنوات.",
    },
    features: {
      en: [
        "Porcelain, marble, and mosaic installations",
        "Waterproofing and wet-area detailing",
        "Vanities, showers, and sanitary ware",
        "Floor leveling and expansion joints",
      ],
      ar: [
        "تركيب بورسلان ورخام وموزاييك",
        "عزل مائي وتفاصيل المناطق الرطبة",
        "مغاسل ودشات وأدوات صحية",
        "تسوية الأرضيات وفواصل التمدد",
      ],
    },
    seoTitle: {
      en: "Bathroom Tiling in Dubai — Waterproofing & Wet-Room Fit-Out",
      ar: "بلاط حمامات في دبي — عزل مائي وتجهيز كامل",
    },
    seoDescription: {
      en: "Precision tiling and bathroom fit-outs for villas in Dubai, Abu Dhabi, Sharjah, and across the UAE. Waterproofing, porcelain, marble, and sanitary ware by Jamal Alfan.",
      ar: "بلاط بدقة وتجهيز حمامات للفلل في دبي وأبوظبي والشارقة وكل الإمارات. عزل مائي وبورسلان ورخام وأدوات صحية من جمال الفان.",
    },
    h1: {
      en: "Tile and Bathroom Work for Villas and Apartments in Dubai",
      ar: "أعمال البلاط والحمامات للفلل والشقق في دبي والإمارات",
    },
    intro: {
      en: "Wet rooms in Dubai villas fail when waterproofing is skipped and falls are guessed. Jamal Alfan details membranes, levels, grout lines, and fixtures before porcelain or marble goes down — then fits vanities, showers, and sanitary ware. New builds and renovations in Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and across the UAE.",
      ar: "حمامات فلل دبي تفشل عندما يُتخطى العزل وتُخمَّن المناسيب. تفصل جمال الفان الأغشية والمستويات وخطوط الترويبة والأدوات قبل وضع البورسلان أو الرخام — ثم تركيب المغاسل والدشات والأدوات الصحية. بناء جديد وتجديد في دبي مارينا وجميرا والمرابع العربية وأبوظبي والشارقة وكل الإمارات.",
    },
    sections: [
      {
        heading: {
          en: "Bathroom tiling in Dubai, Abu Dhabi, and Sharjah",
          ar: "بلاط الحمامات في دبي وأبوظبي والشارقة",
        },
        body: {
          en: "We install large-format porcelain, marble, and mosaic in villa bathrooms, kitchens, and wet rooms. Coastal humidity in Dubai Marina, JBR, and Sharjah needs membranes that actually hold; inland villas in Arabian Ranches and Al Ain still need falls and expansion joints. The method does not change with the emirate — the detailing does.",
          ar: "نركب بورسلان كبير ورخام وموزاييك في حمامات الفلل والمطابخ والأماكن الرطبة. رطوبة الساحل في دبي مارينا وجي بي آر والشارقة تحتاج أغشية تثبت فعلاً؛ وفلل المرابع العربية والعين الداخلية ما زالت تحتاج مناسيب وفواصل تمدد. الطريقة لا تتغير مع الإمارة — التفاصيل تتغير.",
        },
      },
      {
        heading: {
          en: "Waterproofing before a single tile",
          ar: "العزل المائي قبل أول بلاطة",
        },
        body: {
          en: "Showers and floors are waterproofed and checked before tiling. Grout lines are planned, not improvised on the wall. Floor leveling and movement joints are part of the quote so the room stays dry after the first year of use.",
          ar: "تُعزل الدشات والأرضيات وتُفحص قبل البلاط. خطوط الترويبة تُخطط، لا تُرتجل على الجدار. تسوية الأرضية وفواصل الحركة جزء من عرض السعر لتبقى الغرفة جافة بعد أول سنة استخدام.",
        },
      },
      {
        heading: {
          en: "Bathrooms sequenced with plumbing",
          ar: "حمامات بتسلسل مع السباكة",
        },
        body: {
          en: "Fixtures fail when the plumber and tiler never meet. We can run plumbing and tile as one job: pressure-tested supply and drainage, then waterproofing, then porcelain. One walkthrough. Send the area, photos, and whether it is a new wet room or a renovation.",
          ar: "تفشل الأدوات عندما لا يلتقي السباك وبلاط. يمكن تنفيذ السباكة والبلاط كعمل واحد: توريد وصرف مختبر الضغط، ثم العزل، ثم البورسلان. جولة واحدة. أرسلوا المنطقة والصور وما إذا كان مكاناً رطباً جديداً أو تجديداً.",
        },
      },
    ],
    process: [
      {
        title: { en: "Wet-room survey", ar: "مسح المكان الرطب" },
        text: {
          en: "We check falls, existing waterproofing, and fixture positions before anything is demolished or ordered.",
          ar: "نفحص المناسيب والعزل القائم ومواضع الأدوات قبل أي هدم أو طلب خامات.",
        },
      },
      {
        title: { en: "Membrane and levels", ar: "غشاء ومناسيب" },
        text: {
          en: "Waterproofing, floor leveling, and drainage points set and checked while walls are still open.",
          ar: "العزل وتسوية الأرضية ونقاط الصرف تُثبت وتُفحص والجدران ما زالت مفتوحة.",
        },
      },
      {
        title: { en: "Tile and fixtures", ar: "بلاط وأدوات" },
        text: {
          en: "Porcelain, marble, or mosaic, then vanities, showers, and sanitary ware aligned to grout lines.",
          ar: "بورسلان أو رخام أو موزاييك، ثم مغاسل ودشات وأدوات صحية محاذاة لخطوط الترويبة.",
        },
      },
      {
        title: { en: "Dry-room handover", ar: "تسليم غرفة جافة" },
        text: {
          en: "We run water with you, check seals, and list any outstanding items before we leave.",
          ar: "نشغّل المياه معكم، نفحص الإحكام، وندرج أي بنود متبقية قبل المغادرة.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you waterproof bathrooms before tiling in Dubai?",
          ar: "هل تعزلون الحمامات قبل البلاط في دبي؟",
        },
        answer: {
          en: "Yes. Wet rooms in UAE villas fail when waterproofing is skipped. We detail membranes, falls, and grout lines before porcelain or marble goes down.",
          ar: "نعم. حمامات الفلل في الإمارات تفشل عندما يُتخطى العزل. نفصل الأغشية والمناسيب وخطوط الترويبة قبل وضع البورسلان أو الرخام.",
        },
      },
      {
        question: {
          en: "Do you renovate bathrooms in occupied apartments?",
          ar: "هل تجددون حمامات في شقق مسكونة؟",
        },
        answer: {
          en: "Yes. We sequence demolition, plumbing, waterproofing, and tile so the rest of the home stays usable, with dust contained and floors protected.",
          ar: "نعم. نرتّب الهدم والسباكة والعزل والبلاط ليبقى بقية المنزل قابلاً للاستخدام، مع حصر الغبار وحماية الأرضيات.",
        },
      },
      {
        question: {
          en: "Which areas do you cover for bathroom work?",
          ar: "ما المناطق التي تغطونها لأعمال الحمامات؟",
        },
        answer: {
          en: "Dubai, Abu Dhabi, Sharjah, Ajman, and cities across the UAE. Share the area with the brief and we confirm the visit.",
          ar: "دبي وأبوظبي والشارقة وعجمان ومدن الإمارات. اذكروا المنطقة مع الموجز ونؤكد الزيارة.",
        },
      },
      {
        question: {
          en: "How do I get a tiling quote in the UAE?",
          ar: "كيف أحصل على عرض سعر للبلاط في الإمارات؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with area, photos, and new-build or renovation. Typical reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المنطقة والصور والبناء الجديد أو التجديد. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "bathroom tiling Dubai",
        "villa bathroom Jumeirah",
        "waterproofing Dubai Marina",
        "porcelain tile Abu Dhabi",
        "bathroom renovation UAE",
      ],
      ar: [
        "بلاط حمامات دبي",
        "حمامات فلل جميرا",
        "عزل مائي دبي مارينا",
        "بورسلان أبوظبي",
        "تجديد حمامات الإمارات",
      ],
    },
  },
  {
    slug: "plumbing",
    icon: "plumbing",
    image: "/images/services/plumbing.webp",
    imageAlt: {
      en: "Plumber fitting pipes and valves under a kitchen sink",
      ar: "سباك يركب أنابيب وصمامات تحت حوض مطبخ",
    },
    title: {
      en: "Plumbing",
      ar: "أعمال السباكة",
    },
    short: {
      en: "Implementation of plumbing and water installation work.",
      ar: "تنفيذ أعمال السباكة وتركيب المياه.",
    },
    description: {
      en: "Water supply, drainage, and fixture installation for kitchens, bathrooms, and building risers. We pressure-test before closing walls so leaks are found on our time, not yours.",
      ar: "تمديدات مياه وصرف وتركيب أدوات للمطابخ والحمامات وأعمدة المباني. نختبر الضغط قبل إغلاق الجدران ليُكتشف أي تسريب في وقتنا لا وقتكم.",
    },
    features: {
      en: [
        "Hot and cold water distribution",
        "Drainage, vents, and floor traps",
        "Kitchen and bathroom fixture fitting",
        "Leak detection, repair, and upgrades",
      ],
      ar: [
        "توزيع المياه الباردة والساخنة",
        "صرف وتهوية ومصائد أرضية",
        "تركيب أدوات المطابخ والحمامات",
        "كشف التسريب والإصلاح والتحديث",
      ],
    },
    seoTitle: {
      en: "Plumbing in Dubai — Villa Water Supply & Drainage",
      ar: "سباكة في دبي — تمديد مياه وصرف للفلل",
    },
    seoDescription: {
      en: "Plumbing and water installation for villas and buildings in Dubai, Abu Dhabi, Sharjah, and across the UAE. Pressure-tested supply, drainage, and fixture fitting by Jamal Alfan.",
      ar: "سباكة وتمديد مياه للفلل والمباني في دبي وأبوظبي والشارقة وكل الإمارات. توريد مختبر الضغط وصرف وتركيب أدوات من جمال الفان.",
    },
    h1: {
      en: "Plumbing and Water Installation for Villas and Buildings in Dubai",
      ar: "أعمال السباكة وتمديد المياه للفلل والمباني في دبي والإمارات",
    },
    intro: {
      en: "Leaks in Dubai villas are found after the tile is down when nobody pressure-tested the pipework. Jamal Alfan installs hot and cold supply, drainage, vents, and fixtures for kitchens, bathrooms, and building risers — and we test before walls close. Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and across the UAE.",
      ar: "تسريبات فلل دبي تُكتشف بعد البلاط عندما لا يُختبر الضغط. تركّب جمال الفان التوريد البارد والساخن والصرف والتهوية والأدوات للمطابخ والحمامات وأعمدة المباني — ونختبر قبل إغلاق الجدران. دبي مارينا وجميرا والمرابع العربية وأبوظبي والشارقة وكل الإمارات.",
    },
    sections: [
      {
        heading: {
          en: "Villa plumbers in Dubai, Abu Dhabi, and Sharjah",
          ar: "سباكة الفلل في دبي وأبوظبي والشارقة",
        },
        body: {
          en: "We run water distribution and drainage for private villas, apartments, and small commercial interiors. Coastal humidity in Dubai Marina, JBR, and Sharjah makes leak-tight joints non-negotiable; inland heat still punishes poor insulation on hot lines. Coverage includes Jumeirah, Arabian Ranches, Al Barsha, Mirdif, Ajman, and Abu Dhabi.",
          ar: "ننفذ توزيع المياه والصرف للفلل الخاصة والشقق والديكورات التجارية الصغيرة. رطوبة الساحل في دبي مارينا وجي بي آر والشارقة تجعل الوصلات المحكمة غير قابلة للتفاوض؛ وحر الداخل ما زال يعاقب العزل الضعيف على الخطوط الساخنة. التغطية تشمل جميرا والمرابع العربية والبرشاء ومردف وعجمان وأبوظبي.",
        },
      },
      {
        heading: {
          en: "Pressure-tested before the wall closes",
          ar: "اختبار ضغط قبل إغلاق الجدار",
        },
        body: {
          en: "Supply lines are pressure-tested, drainage is checked for falls and vents, and floor traps are set before gypsum or tile. That is how leaks stay on our schedule, not yours. Occupied homes are worked in zones so kitchens and bathrooms are not all down at once.",
          ar: "تُختبر خطوط التوريد بالضغط، ويُفحص الصرف للمناسيب والتهوية، وتُثبت المصائد الأرضية قبل الجبس أو البلاط. هكذا يبقى التسريب في جدولنا لا جدولكم. المنازل المسكونة تُعمل حسب المناطق حتى لا تتوقف المطابخ والحمامات دفعة واحدة.",
        },
      },
      {
        heading: {
          en: "Plumbing with bathroom tiling as one job",
          ar: "سباكة مع بلاط الحمامات كعمل واحد",
        },
        body: {
          en: "Fixture positions belong with the tiler’s layout. When we also do bathrooms, the plumber and tile crew share one drawing: waterproofing after pipework, porcelain after membranes. Send the area, kitchen or bathroom photos, and whether it is a leak repair or a full install.",
          ar: "مواضع الأدوات مكانها مع تخطيط البلاط. عندما ننفذ الحمامات أيضاً، يشارك السباك وطاقم البلاط رسمة واحدة: العزل بعد الأنابيب، البورسلان بعد الأغشية. أرسلوا المنطقة وصور المطبخ أو الحمام وما إذا كان إصلاح تسريب أو تمديداً كاملاً.",
        },
      },
    ],
    process: [
      {
        title: { en: "Pipework survey", ar: "مسح التمديدات" },
        text: {
          en: "We photograph existing supply and drainage, note leaks, and confirm fixture positions.",
          ar: "نصور التوريد والصرف القائم، نسجّل التسريبات، ونؤكد مواضع الأدوات.",
        },
      },
      {
        title: { en: "Written plumbing scope", ar: "نطاق سباكة مكتوب" },
        text: {
          en: "Hot/cold runs, drainage, vents, and timeline in writing before opening walls.",
          ar: "خطوط البارد والساخن والصرف والتهوية والجدول مكتوباً قبل فتح الجدران.",
        },
      },
      {
        title: { en: "Install and pressure test", ar: "تركيب واختبار ضغط" },
        text: {
          en: "Pipework fitted, tested, and left open for inspection before gypsum or tile closes.",
          ar: "تركيب الأنابيب واختبارها وتركها مكشوفة للمعاينة قبل إغلاق الجبس أو البلاط.",
        },
      },
      {
        title: { en: "Fixture handover", ar: "تسليم الأدوات" },
        text: {
          en: "Kitchens and bathrooms fitted, run with you, and outstanding items listed.",
          ar: "تركيب المطابخ والحمامات، التشغيل معكم، وإدراج البنود المتبقية.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you pressure-test plumbing before closing walls?",
          ar: "هل تختبرون ضغط السباكة قبل إغلاق الجدران؟",
        },
        answer: {
          en: "Yes. Supply is pressure-tested and drainage checked for falls and vents before gypsum or tile. Leaks are found on our time, not after handover.",
          ar: "نعم. يُختبر التوريد بالضغط ويُفحص الصرف للمناسيب والتهوية قبل الجبس أو البلاط. التسريبات تُكتشف في وقتنا، لا بعد التسليم.",
        },
      },
      {
        question: {
          en: "Can you repair leaks in an occupied villa in Dubai?",
          ar: "هل تصلحون التسريبات في فيلا مسكونة في دبي؟",
        },
        answer: {
          en: "Yes. We isolate the zone, protect floors, and restore supply as quickly as the repair allows. Share photos and the area on WhatsApp to scope the visit.",
          ar: "نعم. نعزل المنطقة، نحمي الأرضيات، ونعيد التوريد بأسرع ما يسمح به الإصلاح. أرسلوا الصور والمنطقة عبر واتساب لتحديد الزيارة.",
        },
      },
      {
        question: {
          en: "Do you install kitchen and bathroom plumbing in Dubai Marina and Abu Dhabi?",
          ar: "هل تمددون سباكة المطابخ والحمامات في دبي مارينا وأبوظبي؟",
        },
        answer: {
          en: "Yes — villas and apartments in Dubai, Abu Dhabi, Sharjah, Ajman, and other UAE cities, including fixture fitting after tiling when we run both trades.",
          ar: "نعم — فلل وشقق في دبي وأبوظبي والشارقة وعجمان ومدن إماراتية أخرى، بما فيها تركيب الأدوات بعد البلاط عندما ننفذ التخصصين.",
        },
      },
      {
        question: {
          en: "How do I get a plumbing quote in the UAE?",
          ar: "كيف أحصل على عرض سعر للسباكة في الإمارات؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with area, photos, and leak repair or new install. Typical reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المنطقة والصور وإصلاح التسريب أو التمديد الجديد. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "plumbing Dubai",
        "villa plumber Jumeirah",
        "water installation Dubai Marina",
        "drainage Abu Dhabi",
        "leak repair UAE",
      ],
      ar: [
        "سباكة دبي",
        "سباك فلل جميرا",
        "تمديد مياه دبي مارينا",
        "صرف أبوظبي",
        "إصلاح تسريب الإمارات",
      ],
    },
  },
  {
    slug: "interlock",
    icon: "interlock",
    image: "/images/services/interlock.webp",
    imageAlt: {
      en: "Villa courtyard with light square pavers framed by dark interlock borders",
      ar: "ساحة فيلا ببلاط مربع فاتح وإطارات إنترلوك داكنة",
    },
    title: {
      en: "Interlock",
      ar: "الإنترلوك",
    },
    short: {
      en: "Villa driveways, walkways, and outdoor interlock paving.",
      ar: "ممرات الفلل والمشايات وأعمال الإنترلوك الخارجية.",
    },
    description: {
      en: "Interlock paving for villa driveways, walkways, parking, and courtyards. We set falls, compact the base, and lay patterns that hold in UAE heat instead of sinking after the first summer.",
      ar: "أعمال إنترلوك لممرات الفلل والمشايات ومواقف السيارات والساحات. نضبط المناسيب، نرص القاعدة، ونرصف أنماطاً تصمد في حر الإمارات بدل أن تهبط بعد أول صيف.",
    },
    features: {
      en: [
        "Driveways, walkways, parking, and courtyards",
        "Excavation, compacted base, and correct falls",
        "Herringbone, stretcher, and border patterns",
        "Repair of sunken, cracked, or washed-out pavers",
      ],
      ar: [
        "ممرات ومشايات ومواقف وساحات",
        "حفر وقاعدة مرصوصة ومناسيب صحيحة",
        "أنماط متعرجة وطولية وإطارات",
        "إصلاح البلاط الهابط أو المتشقق أو المغسول",
      ],
    },
    seoTitle: {
      en: "Interlock in Dubai, UAE — Villa Driveway & Paving",
      ar: "إنترلوك في دبي — ممرات فلل ورصف خارجي",
    },
    seoDescription: {
      en: "Villa interlock paving in Dubai, Abu Dhabi, and Sharjah, and across the UAE. Driveways, walkways, and courtyards with compacted bases, drainage falls, and a clean handover from Jamal Alfan.",
      ar: "رصف إنترلوك للفلل في دبي وأبوظبي والشارقة وكل الإمارات. ممرات ومشايات وساحات بقاعدة مرصوصة ومناسيب صرف وتسليم نظيف من جمال الفان.",
    },
    h1: {
      en: "Interlock Paving for Villa Driveways and Walkways in Dubai",
      ar: "أعمال الإنترلوك لممرات ومشايات الفلل في دبي والإمارات",
    },
    intro: {
      en: "Interlock in Dubai fails when the sand is guessed and the falls run toward the villa door. Jamal Alfan lays driveways, walkways, parking bays, and courtyards with a compacted base, kerbs, and drainage that actually shed water — then we compact the joints so the pattern stays locked through heat and tyre load. Dubai Marina compounds, Jumeirah villas, Arabian Ranches, Abu Dhabi, Sharjah, and across the UAE.",
      ar: "يفشل الإنترلوك في دبي عندما يُخمَّن الرمل وتجري المناسيب نحو باب الفيلا. ترصف جمال الفان الممرات والمشايات ومواقف السيارات والساحات بقاعدة مرصوصة وأرصفة وصرف يصرف الماء فعلاً — ثم نرص الفواصل ليبقى النمط متماسكاً تحت الحر وحمل الإطارات. مجمعات دبي مارينا وفلل جميرا والمرابع العربية وأبوظبي والشارقة وكل الإمارات.",
    },
    sections: [
      {
        heading: {
          en: "Villa interlock in Dubai, Abu Dhabi, and Sharjah",
          ar: "إنترلوك الفلل في دبي وأبوظبي والشارقة",
        },
        body: {
          en: "We pave private villas, compound driveways, and small commercial yards. Coastal sand in Dubai Marina, Palm Jumeirah, and Sharjah washes poorly compacted joints; inland heat in Arabian Ranches, Dubai Hills, and Al Ain still cooks a thin base. Coverage includes Jumeirah, Al Barsha, Mirdif, Ajman, and Abu Dhabi — same method, local levels.",
          ar: "نرصف الفلل الخاصة وممرات المجمعات والساحات التجارية الصغيرة. رمل الساحل في دبي مارينا ونخلة جميرا والشارقة يغسل الفواصل ضعيفة الرص؛ وحر الداخل في المرابع العربية ودبي هيلز والعين ما زال يطبخ القاعدة الرقيقة. التغطية تشمل جميرا والبرشاء ومردف وعجمان وأبوظبي — نفس الأسلوب ومناسيب محلية.",
        },
      },
      {
        heading: {
          en: "Base, falls, and a pattern that stays locked",
          ar: "قاعدة ومناسيب ونمط يبقى متماسكاً",
        },
        body: {
          en: "Pretty pavers on loose fill sink in a season. We excavate, compact sub-base, set kerbs, and cut falls away from thresholds and garage slabs before a single block is laid. Herringbone takes vehicle load; stretcher and borders finish the edges. Joints are sanded and compacted so tyres do not walk the pattern open.",
          ar: "البلاط الجميل على ردم رخو يهبط في موسم. نحفر، نرص الطبقة التأسيسية، نثبت الأرصفة، ونقطع المناسيب بعيداً عن العتبات وبلاطات الكراج قبل رصف أول قطعة. النمط المتعرج يتحمل حمل المركبات؛ والطولي والإطارات تنهي الحواف. تُرمل الفواصل وتُرص حتى لا تفتح الإطارات النمط.",
        },
      },
      {
        heading: {
          en: "Interlock sequenced with outdoor paint and drainage",
          ar: "إنترلوك بتسلسل مع الدهان الخارجي والصرف",
        },
        body: {
          en: "Driveways look unfinished when the painter and the paver never share a date. When we also run villa painting or plumbing, facade coats wait until cutting dust settles, and surface drains sit in the interlock drawing — not as an afterthought against a kerb. Send the area, photos of the existing paving, and whether it is a new driveway or a repair.",
          ar: "تبدو الممرات ناقصة عندما لا يشارك الدهان والراصف موعداً. عندما ننفذ أيضاً دهان الفيلا أو السباكة، تنتظر طبقات الواجهة حتى يستقر غبار القص، وتجلس مصارف السطح في رسمة الإنترلوك — لا كفكرة لاحقة على الرصيف. أرسلوا المنطقة وصور الرصف القائم وما إذا كان ممراً جديداً أو إصلاحاً.",
        },
      },
    ],
    process: [
      {
        title: { en: "Levels survey", ar: "مسح المناسيب" },
        text: {
          en: "We photograph the plot, check falls toward drains, and note sunken or cracked areas.",
          ar: "نصور القطعة، نفحص المناسيب نحو المصارف، ونسجّل المواضع الهابطة أو المتشققة.",
        },
      },
      {
        title: { en: "Written paving scope", ar: "نطاق رصف مكتوب" },
        text: {
          en: "Area, pattern, kerbs, drainage, and timeline in writing before excavation.",
          ar: "المساحة والنمط والأرصفة والصرف والجدول مكتوباً قبل الحفر.",
        },
      },
      {
        title: { en: "Base and lay", ar: "قاعدة ورصف" },
        text: {
          en: "Compacted base, kerbs, then pavers cut and locked to the agreed pattern.",
          ar: "قاعدة مرصوصة وأرصفة ثم بلاط مقصوص ومقفول وفق النمط المتفق عليه.",
        },
      },
      {
        title: { en: "Compact & handover", ar: "رص وتسليم" },
        text: {
          en: "Joints sanded, surface compacted, then a walkthrough of falls and edges with you.",
          ar: "ترميل الفواصل ورص السطح ثم جولة على المناسيب والحواف معكم.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Do you install villa interlock driveways in Dubai and Abu Dhabi?",
          ar: "هل تركّبون إنترلوك ممرات الفلل في دبي وأبوظبي؟",
        },
        answer: {
          en: "Yes. We pave driveways, walkways, parking, and courtyards for villas in Dubai, Abu Dhabi, Sharjah, Ajman, and other UAE cities, with compacted bases and drainage falls before handover.",
          ar: "نعم. نرصف الممرات والمشايات والمواقف والساحات لفلل دبي وأبوظبي والشارقة وعجمان ومدن إماراتية أخرى، مع قواعد مرصوصة ومناسيب صرف قبل التسليم.",
        },
      },
      {
        question: {
          en: "Can you repair sunken or washed-out interlock?",
          ar: "هل تصلحون الإنترلوك الهابط أو المغسول؟",
        },
        answer: {
          en: "Yes. We lift the failed zone, correct the base and falls, and relay matching pavers so the patch does not read as a different driveway. Share photos and the area on WhatsApp to scope the visit.",
          ar: "نعم. نرفع المنطقة التالفة، نصحح القاعدة والمناسيب، ونعيد الرصف بقطع مطابقة حتى لا يبدو الترقيع ممراً مختلفاً. أرسلوا الصور والمنطقة عبر واتساب لتحديد الزيارة.",
        },
      },
      {
        question: {
          en: "Do you compact interlock joints after laying?",
          ar: "هل ترصّون فواصل الإنترلوك بعد الرصف؟",
        },
        answer: {
          en: "Always. Sanded joints and plate compaction are part of the job — that is what keeps the pattern locked under heat and tyre load, not an extra.",
          ar: "دائماً. ترميل الفواصل والرص بالصفيحة جزء من العمل — هذا ما يبقي النمط مقفولاً تحت الحر وحمل الإطارات، وليست إضافة.",
        },
      },
      {
        question: {
          en: "How do I get an interlock quote in the UAE?",
          ar: "كيف أحصل على عرض سعر للإنترلوك في الإمارات؟",
        },
        answer: {
          en: "WhatsApp or call 050 247 1185 with the city, photos of the driveway or yard, and whether it is new paving or a repair. Typical reply within 24 hours on working days.",
          ar: "واتساب أو اتصال على 0502471185 مع المدينة وصور الممر أو الساحة وما إذا كان رصفاً جديداً أو إصلاحاً. الرد المعتاد خلال 24 ساعة في أيام العمل.",
        },
      },
    ],
    keywords: {
      en: [
        "interlock Dubai",
        "villa interlock driveway Jumeirah",
        "interlock paving Dubai Marina",
        "interlock tiles Abu Dhabi",
        "interlock contractor UAE",
      ],
      ar: [
        "إنترلوك دبي",
        "إنترلوك ممرات فلل جميرا",
        "رصف إنترلوك دبي مارينا",
        "بلاط إنترلوك أبوظبي",
        "مقاول إنترلوك الإمارات",
      ],
    },
  },
];

export const FIELD_WORK: FieldWorkShot[] = [
  {
    slug: "electrical-works",
    image: "/images/field-work/electrical.jpg",
    layout: "featured",
    imageAlt: {
      en: "Electrician in safety gear working on an outdoor distribution box",
      ar: "كهربائي بمعدات السلامة يعمل على صندوق توزيع خارجي",
    },
  },
  {
    slug: "painting-services",
    image: "/images/field-work/painting.jpg",
    layout: "tile",
    imageAlt: {
      en: "Close-up of a paint roller applying a fresh coat to a wall",
      ar: "لقطة قريبة لرول دهان يضع طبقة جديدة على جدار",
    },
  },
  {
    slug: "interior-decor",
    image: "/images/field-work/interior.jpg",
    layout: "tile",
    imageAlt: {
      en: "Completed open-plan living, dining, and kitchen interior",
      ar: "تشطيب داخلي مكتمل لصالة ومعيشة ومطبخ مفتوح",
    },
  },
  {
    slug: "gypsum-ceiling-works",
    image: "/images/field-work/gypsum.jpg",
    layout: "tile",
    imageAlt: {
      en: "On-site gypsum and drywall framing during renovation",
      ar: "أعمال جبس وهياكل جدران في موقع الترميم",
    },
  },
  {
    slug: "tile-bathroom-work",
    image: "/images/field-work/bathroom.jpg",
    layout: "tile",
    imageAlt: {
      en: "Finished modern bathroom with freestanding tub and floating vanity",
      ar: "حمام حديث مكتمل مع بانيو مستقل وخزانة عائمة",
    },
  },
  {
    slug: "interlock",
    image: "/images/field-work/interlock.jpg",
    layout: "half",
    imageAlt: {
      en: "Crew laying interlocking pavers on a villa driveway",
      ar: "طاقم يرصف بلاط الإنترلوك في ممر فيلا",
    },
  },
  {
    slug: "plumbing",
    image: "/images/field-work/plumbing.jpg",
    layout: "half",
    imageAlt: {
      en: "Technicians assembling pipe fittings during a plumbing install",
      ar: "فنيون يركبون وصلات الأنابيب أثناء تمديد السباكة",
    },
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "villa-majlis-ceiling",
    title: {
      en: "Villa Majlis & Cove Lighting",
      ar: "مجلس فيلا وإضاءة مخفية",
    },
    category: "gypsum-ceiling-works",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-majlis.jpg",
    imageAlt: {
      en: "Finished majlis with layered gypsum ceiling and warm lighting",
      ar: "مجلس مكتمل بسقف جبس متعدد الطبقات وإضاءة دافئة",
    },
  },
  {
    slug: "modern-bathroom-suite",
    title: {
      en: "Modern Bathroom Suite",
      ar: "جناح حمام حديث",
    },
    category: "tile-bathroom-work",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-bath.jpg",
    imageAlt: {
      en: "Completed bathroom with large-format tiles and glass shower",
      ar: "حمام مكتمل ببلاط كبير ودش زجاجي",
    },
  },
  {
    slug: "reception-interior",
    title: {
      en: "Reception Interior Fit-Out",
      ar: "تشطيب داخلي لصالة استقبال",
    },
    category: "interior-decor",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-reception.jpg",
    imageAlt: {
      en: "Bright reception interior with custom ceiling and seating",
      ar: "صالة استقبال مضيئة بسقف مخصص ومقاعد",
    },
  },
  {
    slug: "villa-facade-paint",
    title: {
      en: "Villa Exterior Painting",
      ar: "دهان واجهة فيلا",
    },
    category: "painting-services",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-villa.jpg",
    imageAlt: {
      en: "Freshly painted modern villa exterior at dusk",
      ar: "واجهة فيلا حديثة بعد الدهان عند الغروب",
    },
  },
  {
    slug: "building-electrical",
    title: {
      en: "Building Electrical Upgrade",
      ar: "تحديث كهرباء مبنى",
    },
    category: "electrical-works",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-electrical.jpg",
    imageAlt: {
      en: "Organized electrical distribution board after installation",
      ar: "لوحة توزيع كهربائية منظمة بعد التركيب",
    },
  },
  {
    slug: "kitchen-plumbing",
    title: {
      en: "Kitchen Water Installation",
      ar: "تمديد مياه مطبخ",
    },
    category: "plumbing",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-kitchen.jpg",
    imageAlt: {
      en: "Contemporary kitchen with new plumbing fixtures and stone surfaces",
      ar: "مطبخ معاصر بأدوات سباكة جديدة وأسطح حجرية",
    },
  },
  {
    slug: "villa-interlock-driveway",
    title: {
      en: "Villa Interlock Driveway",
      ar: "ممر إنترلوك لفيلا",
    },
    category: "interlock",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات العربية المتحدة" },
    image: "/images/project-interlock.jpg",
    imageAlt: {
      en: "Finished villa courtyard with herringbone interlocking pavers",
      ar: "ساحة فيلا مكتملة ببلاط إنترلوك بنمط متعرج",
    },
  },
];

export const CITIES: City[] = [
  {
    slug: "dubai-marina",
    name: { en: "Dubai Marina", ar: "دبي مارينا" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Apartment and villa electrical, humidity-ready painting, bathrooms, and plumbing for Dubai Marina and the waterfront.",
      ar: "كهرباء شقق وفلل، دهان يتحمل الرطوبة، حمامات وسباكة لدبي مارينا والواجهة البحرية.",
    },
  },
  {
    slug: "downtown-dubai",
    name: { en: "Downtown Dubai", ar: "وسط دبي" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Interior decor, gypsum ceilings, and building services for apartments and commercial interiors in Downtown Dubai.",
      ar: "ديكور داخلي، أسقف جبس، وخدمات مباني لشقق وتشطيبات تجارية في وسط دبي.",
    },
  },
  {
    slug: "jumeirah",
    name: { en: "Jumeirah", ar: "جميرا" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Villa painting, majlis interiors, gypsum, electrical upgrades, and interlock for Jumeirah family homes.",
      ar: "دهان فلل، ديكور مجالس، جبس، تحديث كهرباء، وإنترلوك لمنازل جميرا العائلية.",
    },
  },
  {
    slug: "palm-jumeirah",
    name: { en: "Palm Jumeirah", ar: "نخلة جميرا" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Coastal painting, wet-room waterproofing, and villa finishing on Palm Jumeirah.",
      ar: "دهان ساحلي، عزل أماكن رطبة، وتشطيب فلل في نخلة جميرا.",
    },
  },
  {
    slug: "arabian-ranches",
    name: { en: "Arabian Ranches", ar: "المرابع العربية" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Villa electrical, gypsum majlis ceilings, bathroom tiling, painting, and interlock across Arabian Ranches.",
      ar: "كهرباء فلل، أسقف جبس للمجالس، بلاط حمامات، دهان، وإنترلوك في المرابع العربية.",
    },
  },
  {
    slug: "dubai-hills",
    name: { en: "Dubai Hills", ar: "دبي هيلز" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "New-villa electrical, interiors, gypsum, plumbing, and interlock for Dubai Hills compounds.",
      ar: "كهرباء فلل جديدة، ديكور، جبس، سباكة، وإنترلوك لمجمعات دبي هيلز.",
    },
  },
  {
    slug: "business-bay",
    name: { en: "Business Bay", ar: "الخليج التجاري" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Apartment fit-outs, lighting, painting, and bathrooms for Business Bay residences and offices.",
      ar: "تشطيب شقق، إضاءة، دهان، وحمامات لسكن ومكاتب الخليج التجاري.",
    },
  },
  {
    slug: "al-barsha",
    name: { en: "Al Barsha", ar: "البرشاء" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Villa and building painting, electrical, and plumbing for Al Barsha homes.",
      ar: "دهان وكهرباء وسباكة لفلل ومباني البرشاء.",
    },
  },
  {
    slug: "jvc",
    name: { en: "JVC", ar: "قرية جميرا الدائرية" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Apartment interiors, gypsum, tiling, and electrical works in Jumeirah Village Circle.",
      ar: "ديكور شقق، جبس، بلاط، وكهرباء في قرية جميرا الدائرية.",
    },
  },
  {
    slug: "mirdif",
    name: { en: "Mirdif", ar: "مردف" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Family-villa painting, bathrooms, and electrical maintenance across Mirdif.",
      ar: "دهان فلل عائلية، حمامات، وصيانة كهرباء في مردف.",
    },
  },
  {
    slug: "deira",
    name: { en: "Deira", ar: "ديرة" },
    region: { en: "Dubai", ar: "دبي" },
    blurb: {
      en: "Building electrical, plumbing, and interior painting for Deira apartments and shops.",
      ar: "كهرباء مباني، سباكة، ودهان داخلي لشقق ومحلات ديرة.",
    },
  },
  {
    slug: "abu-dhabi",
    name: { en: "Abu Dhabi", ar: "أبوظبي" },
    region: { en: "Abu Dhabi", ar: "أبوظبي" },
    blurb: {
      en: "Villa and building electrical, painting, gypsum, bathrooms, plumbing, and interlock in Abu Dhabi.",
      ar: "كهرباء ودهان وجبس وحمامات وسباكة وإنترلوك للفلل والمباني في أبوظبي.",
    },
  },
  {
    slug: "sharjah",
    name: { en: "Sharjah", ar: "الشارقة" },
    region: { en: "Sharjah", ar: "الشارقة" },
    blurb: {
      en: "Interior decor, tiling, and building services for Sharjah villas and apartments.",
      ar: "ديكور داخلي، بلاط، وخدمات مباني لفلل وشقق الشارقة.",
    },
  },
  {
    slug: "ajman",
    name: { en: "Ajman", ar: "عجمان" },
    region: { en: "Ajman", ar: "عجمان" },
    blurb: {
      en: "Residential electrical, painting, and plumbing for Ajman homes and buildings.",
      ar: "كهرباء سكنية، دهان، وسباكة لمنازل ومباني عجمان.",
    },
  },
  {
    slug: "ras-al-khaimah",
    name: { en: "Ras Al Khaimah", ar: "رأس الخيمة" },
    region: { en: "Ras Al Khaimah", ar: "رأس الخيمة" },
    blurb: {
      en: "Villa finishing — paint, gypsum, electrical, and wet rooms — in Ras Al Khaimah.",
      ar: "تشطيب فلل — دهان وجبس وكهرباء وأماكن رطبة — في رأس الخيمة.",
    },
  },
  {
    slug: "al-ain",
    name: { en: "Al Ain", ar: "العين" },
    region: { en: "Abu Dhabi", ar: "أبوظبي" },
    blurb: {
      en: "Villa interiors, tiling, and plumbing for Al Ain residences.",
      ar: "ديكور فلل، بلاط، وسباكة لمساكن العين.",
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    question: {
      en: "Which areas in Dubai and the UAE do you cover?",
      ar: "ما المناطق التي تغطونها في دبي والإمارات؟",
    },
    answer: {
      en: "Jamal Alfan Technical Services Co. is based in Dubai. We work across Dubai Marina, Downtown, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, Business Bay, Al Barsha, JVC, Mirdif, and Deira — plus Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Al Ain. Share the community with your brief and we confirm the visit.",
      ar: "مقر شركة جمال الفان للخدمات الفنية في دبي. نعمل في دبي مارينا ووسط دبي وجميرا ونخلة جميرا والمرابع العربية ودبي هيلز والخليج التجاري والبرشاء وقرية جميرا الدائرية ومردف وديرة — بالإضافة إلى أبوظبي والشارقة وعجمان ورأس الخيمة والعين. اذكروا المنطقة مع الموجز ونؤكد الزيارة.",
    },
  },
  {
    question: {
      en: "What technical services do you provide in Dubai?",
      ar: "ما الخدمات الفنية التي تقدمونها في دبي؟",
    },
    answer: {
      en: "Seven core trades under one contractor: electrical works, indoor and outdoor painting, interior decor, gypsum and ceiling works, tile and bathroom work, plumbing, and interlock paving. We implement, install, and maintain for villas, apartments, and buildings in Dubai and the UAE.",
      ar: "سبعة تخصصات تحت مقاول واحد: أعمال كهربائية، دهان داخلي وخارجي، ديكور داخلي، جبس وأسقف، بلاط وحمامات، سباكة، وإنترلوك. ننفذ ونركب ونصون للفلل والشقق والمباني في دبي والإمارات.",
    },
  },
  {
    question: {
      en: "Do you handle villa electrical work in Dubai Marina and Jumeirah?",
      ar: "هل تنفذون أعمال كهرباء الفلل في دبي مارينا وجميرا؟",
    },
    answer: {
      en: "Yes. We install and maintain distribution boards, lighting circuits, and fault repairs for villas and apartments in Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and other UAE cities, with safety testing before handover.",
      ar: "نعم. نركب ونصون لوحات التوزيع ودوائر الإضاءة وإصلاح الأعطال لفلل وشقق دبي مارينا وجميرا والمرابع العربية وأبوظبي والشارقة ومدن إماراتية أخرى، مع اختبارات سلامة قبل التسليم.",
    },
  },
  {
    question: {
      en: "Are your paints suitable for the Dubai climate?",
      ar: "هل دهاناتكم تناسب مناخ دبي؟",
    },
    answer: {
      en: "We specify interior and exterior coatings for heat, dust, and coastal humidity — including Dubai Marina, Palm Jumeirah, Abu Dhabi, and Sharjah — so facades and interiors last beyond the first summer.",
      ar: "نختار دهانات داخلية وخارجية للحرارة والغبار ورطوبة الساحل — بما فيها دبي مارينا ونخلة جميرا وأبوظبي والشارقة — لتدوم الواجهات والداخل بعد أول صيف.",
    },
  },
  {
    question: {
      en: "Can gypsum ceilings and painting be done together?",
      ar: "هل يمكن تنفيذ أسقف الجبس والدهان معاً؟",
    },
    answer: {
      en: "That is how we sequence the job. Gypsum geometry is set around the lighting plan, then sanded and painted in one handover so you are not coordinating two crews.",
      ar: "هذا هو تسلسل العمل عندنا. هندسة الجبس تُضبط حول خطة الإضاءة، ثم الصنفرة والدهان في تسليم واحد حتى لا تنسّقوا طاقمين.",
    },
  },
  {
    question: {
      en: "Do you waterproof bathrooms before tiling?",
      ar: "هل تعزلون الحمامات قبل البلاط؟",
    },
    answer: {
      en: "Yes. Wet rooms in Dubai villas fail when waterproofing is skipped. We detail membranes, falls, and grout lines before porcelain or marble goes down.",
      ar: "نعم. حمامات فلل دبي تفشل عندما يُتخطى العزل. نفصل الأغشية والمناسيب وخطوط الترويبة قبل وضع البورسلان أو الرخام.",
    },
  },
  {
    question: {
      en: "How do I get a quote on WhatsApp?",
      ar: "كيف أحصل على عرض سعر عبر واتساب؟",
    },
    answer: {
      en: "WhatsApp or call 050 247 1185 with the Dubai community or emirate, villa or building type, and photos if you have them. Written requests on the quote form also work. Typical reply is within 24 hours on working days.",
      ar: "راسلوا أو اتصلوا على 0502471185 مع منطقة دبي أو الإمارة ونوع الفيلا أو المبنى والصور إن وُجدت. الطلبات المكتوبة عبر نموذج عرض السعر تعمل أيضاً. الرد المعتاد خلال 24 ساعة في أيام العمل.",
    },
  },
  {
    question: {
      en: "Can you work in an occupied villa or apartment?",
      ar: "هل تعملون في فيلا أو شقة مسكونة؟",
    },
    answer: {
      en: "Yes. Occupied homes stay livable: floors are protected, dust is contained, and trades are sequenced so electrical and plumbing close before paint. We work in Arabic and English.",
      ar: "نعم. المنازل المسكونة تبقى قابلة للعيش: حماية الأرضيات، حصر الغبار، وتسلسل الحرف بحيث تُغلق الكهرباء والسباكة قبل الدهان. نعمل بالعربية والإنجليزية.",
    },
  },
];

export function getWhatsAppPhone(): (typeof SITE.phones)[number] {
  const phone = SITE.phones.find((item) => item.whatsapp);
  if (!phone) {
    throw new Error("WhatsApp number is not configured");
  }
  return phone;
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getProjectsByService(slug: string): Project[] {
  return PROJECTS.filter((project) => project.category === slug);
}

const RELATED_BY_SLUG: Record<string, readonly string[]> = {
  "electrical-works": ["gypsum-ceiling-works", "plumbing", "painting-services"],
  "painting-services": ["gypsum-ceiling-works", "interlock", "electrical-works"],
  "interior-decor": ["gypsum-ceiling-works", "painting-services", "tile-bathroom-work"],
  "gypsum-ceiling-works": ["interior-decor", "electrical-works", "painting-services"],
  "tile-bathroom-work": ["plumbing", "interlock", "interior-decor"],
  plumbing: ["tile-bathroom-work", "interlock", "electrical-works"],
  interlock: ["painting-services", "plumbing", "tile-bathroom-work"],
};

export function getRelatedServices(slug: string): Service[] {
  const slugs = RELATED_BY_SLUG[slug] ?? [];
  return slugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((service): service is Service => Boolean(service));
}

const LEFTOVER_CITY_SLUGS = new Set([
  "riyadh",
  "tabuk",
  "jubail",
  "ahsa",
  "yanbu",
  "jazan",
  "hail",
  "najran",
]);

export function getCoverageCities(): City[] {
  const seen = new Set<string>();
  return CITIES.filter((city) => {
    if (LEFTOVER_CITY_SLUGS.has(city.slug)) {
      return false;
    }
    if (seen.has(city.name.en)) {
      return false;
    }
    seen.add(city.name.en);
    return true;
  });
}
