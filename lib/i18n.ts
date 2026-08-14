import type { Locale } from "@/lib/types";
import { SITE } from "@/lib/content";

export const dictionaries = {
  en: {
    meta: {
      homeTitle: "Technical Services in Dubai, UAE | Electrical, Painting, Gypsum & Plumbing",
      homeDescription:
        "Jamal Alfan Technical Services Co. — electrical works, villa painting, interior decor, gypsum ceilings, bathroom tiling, and plumbing in Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and across the UAE. You dream it, we build it.",
      servicesTitle: "Technical Services in Dubai | Electrical, Painting, Interiors & Plumbing",
      servicesDescription:
        "Hire one Dubai contractor for electrical works, painting, interior decor, gypsum ceilings, tile and bathroom work, and plumbing — villas and buildings in Dubai, Abu Dhabi, and Sharjah, and across the UAE.",
      projectsTitle: "Dubai Villa & Building Projects | Jamal Alfan",
      projectsDescription:
        "Selected villa majlis, bathroom, ceiling, painting, electrical, and plumbing projects by Jamal Alfan Technical Services Co. across Dubai and the UAE.",
      aboutTitle: "About Jamal Alfan | Technical Contractor in Dubai, UAE",
      aboutDescription:
        "Jamal Alfan Technical Services Co. is a Dubai technical contractor for villa and building finishing — electrical, paint, gypsum, interiors, bathrooms, and plumbing across the UAE.",
      contactTitle: "Contact Jamal Alfan | Quote in Dubai, UAE",
      contactDescription:
        "Call 054 458 2595 or 050 247 1185, WhatsApp a villa or building brief, or request a quote. Jamal Alfan Technical Services Co. serves Dubai, Abu Dhabi, Sharjah, and the wider UAE.",
      quoteTitle: "Request a Quote | Technical Services Dubai, UAE",
      quoteDescription:
        "Get a quote for electrical, painting, gypsum, bathrooms, or plumbing on your villa or building in Dubai, UAE. Jamal Alfan replies within 24 hours on working days.",
      coverageTitle: "Service Areas in Dubai & UAE | Marina, Jumeirah, Abu Dhabi & More",
      coverageDescription:
        "Jamal Alfan Technical Services Co. covers Dubai Marina, Downtown, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, Abu Dhabi, Sharjah, Ajman, and Al Ain for electrical, painting, interiors, gypsum, tiling, and plumbing.",
    },
    topbar: {
      call: "Call",
      email: "Email",
    },
    nav: {
      quote: "Get A Quote",
      menu: "Open menu",
      close: "Close menu",
      language: "العربية",
    },
    hero: {
      eyebrow: "Technical services · Dubai, UAE",
      line1: "You Dream It",
      line2: "We Build It",
      body: "Electrical, painting, interiors, gypsum ceilings, bathrooms, and plumbing for villas and buildings in Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, and Sharjah — finished to a standard you can live with, not just photograph.",
      ctaQuote: "Get A Quote",
      ctaCall: "Call Now",
      ctaWhatsapp: "WhatsApp",
      ctaServices: "View Services",
    },
    stats: {
      years: { value: "10+", label: "Years of site work" },
      trades: { value: "6", label: "Core trades on one team" },
      handover: { value: "100%", label: "Handover with walkthrough" },
      response: { value: "24h", label: "Quote response target" },
    },
    services: {
      eyebrow: "Our Services",
      titleBefore: "Services That Fit",
      titleAccent: "Your Needs",
      body: "Six trades, one contractor. We implement, install, and maintain electrical, painting, interiors, gypsum, bathrooms, and plumbing that turn a villa or building in Dubai, UAE into a finished home or workplace.",
      learnMore: "Learn more",
      viewAll: "All services",
    },
    why: {
      eyebrow: "Why Alfan",
      titleBefore: "Built like a",
      titleAccent: "trade company",
      body: "Not a marketplace of random crews. One team, one standard, one number to call when something needs finishing properly.",
      items: [
        {
          title: "One point of contact",
          text: "Electrical, paint, gypsum, tile, and plumbing coordinated so trades do not undo each other.",
        },
        {
          title: "Site-ready detailing",
          text: "Waterproofing, load, lighting points, and levels are decided before the pretty layer goes on.",
        },
        {
          title: "Clean handover",
          text: "We walk the room with you. Outstanding items are listed, not left for you to discover later.",
        },
        {
          title: "UAE-ready materials",
          text: "Coatings, fixtures, and methods specified for heat, dust, and wet rooms — not catalogue photos.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      titleBefore: "From brief to",
      titleAccent: "handover",
      steps: [
        {
          n: "01",
          title: "Site visit & brief",
          text: "We walk the space, confirm scope, and photograph existing conditions.",
        },
        {
          n: "02",
          title: "Clear proposal",
          text: "Scope, materials, and timeline in writing — so there is nothing fuzzy on day one.",
        },
        {
          n: "03",
          title: "Protected execution",
          text: "Floors covered, sequencing planned, daily progress you can actually see.",
        },
        {
          n: "04",
          title: "Test & walkthrough",
          text: "Pressure tests, lighting checks, paint touch-ups, then a joint handover.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      titleBefore: "Work that",
      titleAccent: "holds up",
      body: "A sample of interiors, wet rooms, and building services we complete for private and commercial clients in Dubai, UAE.",
      viewAll: "All projects",
    },
    fieldWork: {
      eyebrow: "Field Work",
      titleBefore: "On-site work",
      titleAccent: "for every trade",
      body: "Electrical, painting, interiors, gypsum, bathrooms, and plumbing photographed as the crew actually does the job — not catalogue rooms from another climate.",
    },
    cta: {
      eyebrow: "Contact Us",
      title: "Have a Project in Dubai, UAE?",
      body: "Send the brief, the photos, or just the city and address. We will tell you what the job actually needs.",
      button: "Request a Quote",
      call: "Call 054 458 2595",
      whatsapp: "WhatsApp 054 458 2595",
    },
    about: {
      eyebrow: "The company",
      titleBefore: "Jamal Alfan",
      titleAccent: "Technical Services",
      lead: "We finish the trades that make a building livable — power, water, paint, gypsum, tile, and interior decor — with the same care on a villa bedroom as on a reception hall.",
      p1: "Jamal Alfan Technical Services Co. works across Dubai and the UAE on villas, apartments, and commercial interiors in Dubai Marina, Downtown Dubai, Jumeirah, Arabian Ranches, Abu Dhabi, and Sharjah, and further cities. The flyer promise is the operating rule: you dream it, we build it — which means we take a sketch, a WhatsApp photo, or an architect’s set and turn it into installed work.",
      p2: "Our crews cover six core services so you are not juggling five contractors for one floor. Electrical and plumbing go in before gypsum closes. Paint waits for dust to settle. Bathrooms are waterproofed before a single tile is set.",
      valuesTitle: "How we measure a good job",
      values: [
        { title: "Sequence", text: "The right trade on the right day. No repainting because plumbing ran late." },
        { title: "Finish", text: "Straight grout, even sheen, silent switches, dry walls after the first shower." },
        { title: "Respect", text: "Occupied homes stay livable. Tools leave, dust leaves, the room stays yours." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleBefore: "Talk to",
      titleAccent: "the site team",
      body: "Call, WhatsApp, or send the form. Include photos if you have them — it shortens the first visit.",
      phones: "Phone numbers",
      whatsapp: "WhatsApp",
      email: "Email",
      region: "Location",
      regionValue: "Dubai, UAE",
      hours: "Typical response",
      hoursValue: "Within 24 hours on working days",
    },
    quote: {
      eyebrow: "Quote",
      titleBefore: "Tell us the",
      titleAccent: "job",
      name: "Full name",
      phone: "Phone",
      email: "Email",
      service: "Service needed",
      servicePlaceholder: "Select a service",
      message: "Project details",
      messagePlaceholder: "Villa / building, city, and what you need finished…",
      submit: "Send request",
      sending: "Sending…",
      successTitle: "Request received",
      successBody: "We will contact you shortly. You can also continue the conversation on WhatsApp.",
      successWhatsapp: "Open WhatsApp",
      error: "Please check the fields and try again.",
      another: "Send another request",
    },
    form: {
      required: "This field is required.",
      invalidPhone: "Enter a valid UAE mobile number.",
      invalidEmail: "Enter a valid email address.",
    },
    footer: {
      blurb: "Electrical, painting, interiors, gypsum, bathrooms, and plumbing across Dubai and the UAE — implemented as one job, not six arguments.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      areas: "Service areas",
      rights: "All rights reserved.",
    },
    servicePage: {
      related: "Related projects",
      relatedServices: "Related services",
      cta: "Request this service",
      ctaWhatsapp: "WhatsApp this job",
      ctaCall: "Call now",
      features: "What we deliver",
      processTitle: "How we deliver this trade",
      citiesTitle: "Cities we cover in Dubai, UAE",
      faqTitle: "Questions about this service",
      quoteTitle: "Get a quote for this service",
      quoteBody:
        "Share the city, villa or building type, and photos if you have them. We reply within 24 hours on working days.",
      localEyebrow: "Dubai, UAE",
      localTitleBefore: "This trade across",
      localTitleAccent: "the UAE",
      localBody:
        "We deliver this service for villas, apartments, and buildings in Dubai Marina, Downtown Dubai, Jumeirah, Arabian Ranches, Abu Dhabi, and Sharjah, and cities across Dubai and the UAE — one crew, one handover.",
    },
    areas: {
      eyebrow: "UAE coverage",
      titleBefore: "Technical services across",
      titleAccent: "Dubai & the UAE",
      body: "Based in Dubai — from Dubai Marina and Jumeirah to Arabian Ranches, Abu Dhabi, and Sharjah — we finish electrical, paint, gypsum, bathrooms, and plumbing where your villa or building actually is.",
      viewAll: "All service areas",
    },
    faq: {
      eyebrow: "FAQ",
      titleBefore: "Questions we get",
      titleAccent: "in Dubai",
      body: "Straight answers on coverage, trades, climate, and how to book a visit in Dubai, UAE.",
    },
    local: {
      eyebrow: "Local contractor",
      titleBefore: "Built for villas and buildings",
      titleAccent: "in the UAE",
      p1: "Search for an electrician, painter, gypsum crew, tiler, or plumber in Dubai, UAE and you usually get five numbers and no sequence. Jamal Alfan Technical Services Co. is one technical contractor for the finishing trades that make a villa livable: power, water, paint, ceilings, bathrooms, and interior decor.",
      p2: "Whether the site is a Dubai Hills compound, a Dubai Marina apartment, a Jumeirah villa, or a home in Abu Dhabi or Sharjah, the method stays the same. Electrical and plumbing close before gypsum. Waterproofing goes down before tile. Paint waits for dust. You get Arabic and English, WhatsApp updates, and a walkthrough at handover.",
      points: [
        { title: "Villas & majlis", text: "Cove lighting, gypsum trays, feature walls, and reception interiors specified for how Dubai homes are actually used." },
        { title: "Apartments & buildings", text: "Distribution boards, risers, common-area paint, and wet rooms sequenced so occupied floors stay livable." },
        { title: "Climate-ready spec", text: "Coatings and wet-area detailing for heat, dust, and Gulf humidity — not catalogue photos from another climate." },
      ],
    },
    coverage: {
      eyebrow: "Where we work",
      titleBefore: "Cities we serve in",
      titleAccent: "Dubai & the UAE",
      lead: "Jamal Alfan Technical Services Co. is based in Dubai and takes electrical, painting, interior decor, gypsum, bathroom, and plumbing jobs across the UAE. Pick a community for how we typically work there — then send the brief.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you opened does not exist. Return home or browse services.",
      home: "Back home",
    },
    breadcrumbs: {
      home: "Home",
    },
  },
  ar: {
    meta: {
      homeTitle: "خدمات فنية في دبي | كهرباء ودهان وجبس وسباكة للفلل",
      homeDescription:
        "شركة جمال الفان للخدمات الفنية — أعمال كهربائية، دهان فلل، ديكور داخلي، أسقف جبس، بلاط حمامات، وسباكة في دبي وأبوظبي والشارقة وعجمان ومدن الإمارات. تحلم بها، نحن نبنيها.",
      servicesTitle: "خدمات فنية في دبي | كهرباء ودهان وديكور وسباكة",
      servicesDescription:
        "مقاول فني في دبي واحد للأعمال الكهربائية والدهان والديكور الداخلي وأسقف الجبس والبلاط والحمامات والسباكة — فلل ومباني في دبي وأبوظبي والشارقة وكل الإمارات.",
      projectsTitle: "مشاريع فلل ومباني في دبي | جمال الفان",
      projectsDescription:
        "نماذج من مجالس الفلل والحمامات والأسقف والدهان والكهرباء والسباكة لشركة جمال الفان للخدمات الفنية في دبي والإمارات.",
      aboutTitle: "عن جمال الفان | مقاول فني في الإمارات العربية المتحدة",
      aboutDescription:
        "شركة جمال الفان للخدمات الفنية مقاول فني في دبي لتشطيب الفلل والمباني — كهرباء ودهان وجبس وديكور وحمامات وسباكة في أنحاء الإمارات.",
      contactTitle: "تواصل مع جمال الفان | عرض سعر في دبي",
      contactDescription:
        "اتصل على 0544582595 أو 0502471185، أو واتساب موجز الفيلا أو المبنى، أو اطلب عرض سعر. شركة جمال الفان تغطي دبي وأبوظبي والشارقة وكل الإمارات.",
      quoteTitle: "طلب عرض سعر | خدمات فنية في دبي",
      quoteDescription:
        "اطلب عرض سعر للكهرباء أو الدهان أو الجبس أو الحمامات أو السباكة لفيلا أو مبنى في دبي. ترد جمال الفان خلال 24 ساعة في أيام العمل.",
      coverageTitle: "مناطق الخدمة في دبي | دبي، دبي مارينا، أبوظبي والمزيد",
      coverageDescription:
        "تغطي شركة جمال الفان للخدمات الفنية دبي وأبوظبي والشارقة وعجمان والعين ومدن الإمارات — كهرباء ودهان وديكور وجبس وبلاط وسباكة.",
    },
    topbar: {
      call: "اتصال",
      email: "البريد",
    },
    nav: {
      quote: "اطلب عرض سعر",
      menu: "فتح القائمة",
      close: "إغلاق القائمة",
      language: "English",
    },
    hero: {
      eyebrow: "خدمات فنية · دبي، الإمارات العربية المتحدة",
      line1: "تحلم بها",
      line2: "نحن نبنيها",
      body: "كهرباء، دهان، ديكور داخلي، أسقف جبس، حمامات، وسباكة لفلل ومباني دبي وأبوظبي والشارقة وكل الإمارات — تشطيب بمستوى تعيشه يومياً، لا صورة فقط.",
      ctaQuote: "اطلب عرض سعر",
      ctaCall: "اتصل الآن",
      ctaWhatsapp: "واتساب",
      ctaServices: "عرض الخدمات",
    },
    stats: {
      years: { value: "+10", label: "سنوات عمل في المواقع" },
      trades: { value: "6", label: "تخصصات أساسية في فريق واحد" },
      handover: { value: "100%", label: "تسليم مع جولة معاينة" },
      response: { value: "24س", label: "هدف الرد على عرض السعر" },
    },
    services: {
      eyebrow: "خدماتنا",
      titleBefore: "خدمات تناسب",
      titleAccent: "احتياجك",
      body: "ستة تخصصات، مقاول واحد. ننفذ ونركب ونصون الكهرباء والدهان والديكور والجبس والحمامات والسباكة التي تحول فيلا أو مبنى في دبي إلى منزل أو مقر جاهز.",
      learnMore: "اعرف المزيد",
      viewAll: "كل الخدمات",
    },
    why: {
      eyebrow: "لماذا الفان",
      titleBefore: "نعمل كشركة",
      titleAccent: "حِرَف",
      body: "لسنا سوقاً لطواقم عشوائية. فريق واحد، معيار واحد، ورقم واحد عندما يحتاج العمل تشطيباً صحيحاً.",
      items: [
        {
          title: "جهة تواصل واحدة",
          text: "الكهرباء والدهان والجبس والبلاط والسباكة بتنسيق يمنع أن يفسد تخصص تخصصاً آخر.",
        },
        {
          title: "تفاصيل جاهزة للموقع",
          text: "العزل والأحمال ونقاط الإضاءة والمناسيب تُحسم قبل طبقة الجمال.",
        },
        {
          title: "تسليم نظيف",
          text: "نجول الغرفة معكم. النواقص تُدرج في قائمة، لا تُترك لتكتشفوها لاحقاً.",
        },
        {
          title: "خامات تناسب الإمارات",
          text: "دهانات وأدوات وطرق تنفيذ للحرارة والغبار والأماكن الرطبة — لا صور كتالوج.",
        },
      ],
    },
    process: {
      eyebrow: "آلية العمل",
      titleBefore: "من الموجز إلى",
      titleAccent: "التسليم",
      steps: [
        {
          n: "01",
          title: "زيارة ومعاينة",
          text: "نمر على المساحة، نثبت النطاق، ونصور الوضع القائم.",
        },
        {
          n: "02",
          title: "عرض واضح",
          text: "النطاق والخامات والجدول مكتوباً — بلا غموض من اليوم الأول.",
        },
        {
          n: "03",
          title: "تنفيذ محمي",
          text: "حماية الأرضيات، تسلسل مدروس، وتقدم يومي يمكن رؤيته.",
        },
        {
          n: "04",
          title: "فحص وجولة تسليم",
          text: "اختبار ضغط، فحص إضاءة، لمسات دهان، ثم تسليم مشترك.",
        },
      ],
    },
    projects: {
      eyebrow: "المشاريع",
      titleBefore: "أعمال",
      titleAccent: "تصمد",
      body: "عينة من التشطيبات الداخلية والأماكن الرطبة وخدمات المباني لعملاء خاصين وتجاريين في دبي.",
      viewAll: "كل المشاريع",
    },
    fieldWork: {
      eyebrow: "العمل الميداني",
      titleBefore: "أعمال الموقع",
      titleAccent: "لكل تخصص",
      body: "كهرباء ودهان وديكور وجبس وحمامات وسباكة كما ينفّذها الطاقم في الموقع — لا غرف كتالوج من مناخ آخر.",
    },
    cta: {
      eyebrow: "تواصل معنا",
      title: "لديك مشروع في دبي؟",
      body: "أرسل الموجز أو الصور أو المرابع العربية والعنوان فقط. نخبرك بما يحتاجه العمل فعلاً.",
      button: "طلب عرض سعر",
      call: "اتصل 054 458 2595",
      whatsapp: "واتساب 054 458 2595",
    },
    about: {
      eyebrow: "الشركة",
      titleBefore: "جمال الفان",
      titleAccent: "للخدمات الفنية",
      lead: "ننجز الحرف التي تجعل المبنى قابلاً للعيش — الكهرباء والمياه والدهان والجبس والبلاط والديكور — بنفس العناية في غرفة نوم فيلا كما في صالة استقبال.",
      p1: "تعمل شركة جمال الفان للخدمات الفنية في أنحاء الإمارات على الفلل والشقق والديكورات التجارية في دبي وأبوظبي والشارقة وعجمان ومدن أخرى. وعد المطوية هو قاعدة التشغيل: تحلم بها، نحن نبنيها — أي نأخذ رسماً أو صورة واتساب أو مخططاً ونحوله إلى عمل مركّب.",
      p2: "يغطي فريقنا ستة خدمات أساسية حتى لا تدير خمسة مقاولين لطابق واحد. الكهرباء والسباكة قبل إغلاق الجبس. الدهان بعد استقرار الغبار. الحمامات تُعزل قبل وضع أول بلاطة.",
      valuesTitle: "كيف نقيس العمل الجيد",
      values: [
        { title: "التسلسل", text: "التخصص الصحيح في اليوم الصحيح. لا إعادة دهان لأن السباكة تأخرت." },
        { title: "التشطيب", text: "ترويبة مستقيمة، لمعة متساوية، مفاتيح هادئة، وجدران جافة بعد أول استخدام." },
        { title: "الاحترام", text: "المنازل المسكونة تبقى قابلة للعيش. الأدوات تغادر، والغبار يغادر، والغرفة تبقى لكم." },
      ],
    },
    contact: {
      eyebrow: "التواصل",
      titleBefore: "تحدث مع",
      titleAccent: "فريق الموقع",
      body: "اتصل أو واتساب أو أرسل النموذج. أرفق صوراً إن وُجدت — تختصر الزيارة الأولى.",
      phones: "أرقام الهاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      region: "الموقع",
      regionValue: "دبي، الإمارات العربية المتحدة",
      hours: "وقت الرد المعتاد",
      hoursValue: "خلال 24 ساعة في أيام العمل",
    },
    quote: {
      eyebrow: "عرض سعر",
      titleBefore: "صف لنا",
      titleAccent: "العمل",
      name: "الاسم الكامل",
      phone: "الجوال",
      email: "البريد الإلكتروني",
      service: "الخدمة المطلوبة",
      servicePlaceholder: "اختر خدمة",
      message: "تفاصيل المشروع",
      messagePlaceholder: "فيلا / مبنى، منطقة دبي، وما تريد إنجازه…",
      submit: "إرسال الطلب",
      sending: "جاري الإرسال…",
      successTitle: "تم استلام الطلب",
      successBody: "سنتواصل معك قريباً. يمكنك متابعة المحادثة عبر واتساب.",
      successWhatsapp: "فتح واتساب",
      error: "راجع الحقول ثم أعد المحاولة.",
      another: "إرسال طلب آخر",
    },
    form: {
      required: "هذا الحقل مطلوب.",
      invalidPhone: "أدخل رقم جوال إماراتي صحيح.",
      invalidEmail: "أدخل بريداً إلكترونياً صحيحاً.",
    },
    footer: {
      blurb: "كهرباء ودهان وديكور وجبس وحمامات وسباكة في دبي والإمارات — كعمل واحد، لا ستة خلافات.",
      services: "الخدمات",
      company: "الشركة",
      contact: "التواصل",
      areas: "مناطق الخدمة",
      rights: "جميع الحقوق محفوظة.",
    },
    servicePage: {
      related: "مشاريع ذات صلة",
      relatedServices: "خدمات ذات صلة",
      cta: "اطلب هذه الخدمة",
      ctaWhatsapp: "واتساب لهذا العمل",
      ctaCall: "اتصل الآن",
      features: "ماذا نقدم",
      processTitle: "كيف ننفذ هذا التخصص",
      citiesTitle: "مدن نغطيها في دبي",
      faqTitle: "أسئلة عن هذه الخدمة",
      quoteTitle: "اطلب عرض سعر لهذه الخدمة",
      quoteBody:
        "اذكروا منطقة دبي أو الإمارة ونوع الفيلا أو المبنى والصور إن وُجدت. نرد خلال 24 ساعة في أيام العمل.",
      localEyebrow: "الإمارات العربية المتحدة",
      localTitleBefore: "هذا التخصص في",
      localTitleAccent: "أنحاء الإمارات",
      localBody:
        "نقدم هذه الخدمة للفلل والشقق والمباني في دبي وأبوظبي والشارقة وعجمان ومدن الإمارات — طاقم واحد وتسليم واحد.",
    },
    areas: {
      eyebrow: "تغطية الإمارات",
      titleBefore: "خدمات فنية في",
      titleAccent: "الإمارات",
      body: "مقرنا في دبي — من دبي مارينا وجميرا إلى المرابع العربية وأبوظبي والشارقة — ننجز الكهرباء والدهان والجبس والحمامات والسباكة حيث تقع فيلاكم أو مبناكم.",
      viewAll: "كل مناطق الخدمة",
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      titleBefore: "أسئلة تصلنا",
      titleAccent: "من الإمارات",
      body: "إجابات مباشرة عن التغطية والتخصصات والمناخ وكيفية حجز زيارة في دبي.",
    },
    local: {
      eyebrow: "مقاول محلي",
      titleBefore: "مخصص للفلل والمباني",
      titleAccent: "في الإمارات",
      p1: "البحث عن كهربائي أو دهان أو طاقم جبس أو بلاط أو سباك في دبي غالباً يعطي خمسة أرقام بلا تسلسل. شركة جمال الفان للخدمات الفنية مقاول فني واحد لحرف التشطيب التي تجعل الفيلا قابلة للعيش: الكهرباء والمياه والدهان والأسقف والحمامات والديكور.",
      p2: "سواء كان الموقع مجمعاً في دبي هيلز أو شقة في دبي مارينا أو فيلا في جميرا أو منزلاً في أبوظبي أو الشارقة، الطريقة واحدة. الكهرباء والسباكة قبل إغلاق الجبس. العزل قبل البلاط. الدهان بعد الغبار. تتوفر العربية والإنجليزية، تحديثات واتساب، وجولة عند التسليم.",
      points: [
        { title: "فلل ومجالس", text: "إضاءة مخفية وصواني جبس وجدران مميزة وديكور استقبال يناسب استخدام البيت الإماراتي فعلاً." },
        { title: "شقق ومباني", text: "لوحات توزيع وأعمدة ودهان مناطق مشتركة وحمامات بتسلسل يبقي الطوابق المسكونة قابلة للعيش." },
        { title: "مواصفات للمناخ", text: "دهانات وتفاصيل أماكن رطبة للحرارة والغبار ورطوبة الخليج — لا صور كتالوج من مناخ آخر." },
      ],
    },
    coverage: {
      eyebrow: "أين نعمل",
      titleBefore: "مدن نخدمها في",
      titleAccent: "الإمارات",
      lead: "مقر شركة جمال الفان للخدمات الفنية في دبي، الإمارات، وتأخذ أعمال الكهرباء والدهان والديكور والجبس والحمامات والسباكة في دبي والإمارات. اختر مدينة لتعرف أسلوب العمل المعتاد هناك — ثم أرسل الموجز.",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      body: "الصفحة التي فتحتها غير موجودة. عد للرئيسية أو تصفح الخدمات.",
      home: "العودة للرئيسية",
    },
    breadcrumbs: {
      home: "الرئيسية",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale, href: string): string {
  const path = href.startsWith("/") ? href : `/${href}`;
  if (path === "/") {
    return `/${locale}`;
  }
  return `/${locale}${path}`;
}

export function pageUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/\/$/, "");
  return `${SITE.domain}/${locale}${clean}`;
}
