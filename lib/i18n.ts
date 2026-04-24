export const LOCALES = ["en", "es", "ar"] as const;

export type AppLocale = (typeof LOCALES)[number];

export const LOCALE_SWITCHER_OPTIONS: { locale: AppLocale; label: string }[] = [
  { locale: "en", label: "EN-AU" },
  { locale: "es", label: "ES" },
  { locale: "ar", label: "AR" },
];

export type AppMessages = {
  language: {
    switchLabel: string;
  };
  home: {
    title: string;
    description: string;
  };
  text: {
    lineOne: string;
    lineTwo: string;
  };
  posts: {
    sectionTitle: string;
    sectionMeta: string;
    empty: string;
  };
  slider: {
    statusTail: string;
  };
  display: {
    cardOneBody: string;
    cardOneAccent: string;
    cardTwoTitle: string;
    cardTwoBody: string;
    cardThreeTitleMain: string;
    cardThreeTitleSub: string;
    cardThreeBody: string;
  };
  claim: {
    heroLineOne: string;
    heroLineTwo: string;
    heroBody: string;
    step00: string;
    step01: string;
    dialLineOne: string;
    dialLineTwo: string;
    dialLineThree: string;
    invite: string;
    step10: string;
  };
  dial: {
    title: string;
    optionOneA: string;
    optionOneB: string;
    optionOneC: string;
    optionTwoA: string;
    optionTwoB: string;
    optionTwoC: string;
    optionThreeA: string;
    optionThreeB: string;
  };
  post: {
    dateLabel: string;
  };
};

const MESSAGES: Record<AppLocale, AppMessages> = {
  en: {
    language: {
      switchLabel: "Language",
    },
    home: {
      title: "The Dial",
      description: "An ever evolving canvas you can use with friends.",
    },
    text: {
      lineOne: "a social canvas",
      lineTwo: "where prompts become craft",
    },
    posts: {
      sectionTitle: "POSTS",
      sectionMeta: "WORDS + DATE",
      empty: "No posts found in content/posts.",
    },
    slider: {
      statusTail: "load process sheets and social threads",
    },
    display: {
      cardOneBody:
        "Throwback to a time when the information superhighway would revolutionise the way we shop, socialise and work.",
      cardOneAccent: "A place beyond the elon-gated 'verse.",
      cardTwoTitle: "SEAMLESS TRANSFER",
      cardTwoBody:
        "THE SIMPLEST THREADS CAN TURN SO WILD, WHILE WE HOP FROM NETWORK TO NETWORK",
      cardThreeTitleMain: "REFASHION",
      cardThreeTitleSub: "THE PROCESS",
      cardThreeBody:
        "With each turn of the dial we leapt from leet speak to 140 characters or less and worlds of fractured noise. Who knew exploding the textbox into a simple canvas would...",
    },
    claim: {
      heroLineOne: "SCAN THE DIAL,",
      heroLineTwo: "MAKE IT YOURS",
      heroBody:
        "AN EVER EVOLVING CANVAS YOU CAN USE WITH FRIENDS. SAVE YOUR POSTS FROM NOSTALGIC OLD SOCIAL NETWORKS - EVOLVE, SYNTH & DRAFT ENTIRELY NEW LOOKS WITH THEM.",
      step00: "Download your social archives",
      step01: "Save a record of it all for later",
      dialLineOne: "DIAL IN",
      dialLineTwo: "FOR EARLY",
      dialLineThree: "ACCESS",
      invite: "Invite your friends to a new timeline",
      step10: "Reflect & evolve for new looks",
    },
    dial: {
      title: "THE DIAL",
      optionOneA: "CLAIM GPU",
      optionOneB: "CO-OP",
      optionOneC: "TIME",
      optionTwoA: "RUN AS",
      optionTwoB: "COLAB",
      optionTwoC: "NOTEBOOK",
      optionThreeA: "RUN",
      optionThreeB: "LOCAL",
    },
    post: {
      dateLabel: "Date",
    },
  },
  es: {
    language: {
      switchLabel: "Idioma",
    },
    home: {
      title: "The Dial",
      description:
        "Un lienzo en constante evolucion para crear con tus amistades.",
    },
    text: {
      lineOne: "un lienzo social",
      lineTwo: "donde los prompts se vuelven oficio",
    },
    posts: {
      sectionTitle: "PUBLICACIONES",
      sectionMeta: "TEXTO + FECHA",
      empty: "No se encontraron publicaciones en content/posts.",
    },
    slider: {
      statusTail: "cargar hojas de proceso e hilos sociales",
    },
    display: {
      cardOneBody:
        "Vuelta atras a una epoca en la que la autopista de la informacion iba a revolucionar como compramos, socializamos y trabajamos.",
      cardOneAccent: "Un lugar mas alla del 'verse elon-gated.",
      cardTwoTitle: "TRANSFERENCIA FLUIDA",
      cardTwoBody:
        "LOS HILOS MAS SIMPLES PUEDEN VOLVERSE SALVAJES MIENTRAS SALTAMOS DE RED EN RED",
      cardThreeTitleMain: "REMODELAR",
      cardThreeTitleSub: "EL PROCESO",
      cardThreeBody:
        "Con cada giro del dial pasamos del leet speak a 140 caracteres o menos, y a mundos de ruido fragmentado. Quien iba a pensar que convertir la caja de texto en un lienzo simple...",
    },
    claim: {
      heroLineOne: "ESCANEA EL DIAL,",
      heroLineTwo: "HAZLO TUYO",
      heroBody:
        "UN LIENZO EN CONSTANTE EVOLUCION QUE PUEDES USAR CON TUS AMISTADES. GUARDA TUS POSTS DE REDES NOSTALGICAS Y CREA LOOKS TOTALMENTE NUEVOS.",
      step00: "Descarga tus archivos sociales",
      step01: "Guarda un registro para despues",
      dialLineOne: "ENTRA AL",
      dialLineTwo: "ACCESO",
      dialLineThree: "TEMPRANO",
      invite: "Invita a tus amistades a una nueva timeline",
      step10: "Reflexiona y evoluciona tus nuevos looks",
    },
    dial: {
      title: "THE DIAL",
      optionOneA: "RESERVAR GPU",
      optionOneB: "CO-OP",
      optionOneC: "TIEMPO",
      optionTwoA: "EJECUTAR EN",
      optionTwoB: "COLAB",
      optionTwoC: "NOTEBOOK",
      optionThreeA: "EJECUTAR",
      optionThreeB: "LOCAL",
    },
    post: {
      dateLabel: "Fecha",
    },
  },
  ar: {
    language: {
      switchLabel: "اللغة",
    },
    home: {
      title: "The Dial",
      description: "كانفس اجتماعي بيتطور دايمًا تقدر تستخدمه مع صحابك.",
    },
    text: {
      lineOne: "كانفس اجتماعي",
      lineTwo: "فين الـprompts بتتحول لشغل متقن",
    },
    posts: {
      sectionTitle: "البوستات",
      sectionMeta: "كلام + تاريخ",
      empty: "مفيش بوستات في content/posts.",
    },
    slider: {
      statusTail: "حمّل شيتات البروسيس وثريدات السوشيال",
    },
    display: {
      cardOneBody:
        "نوستالجيا لوقت كان طريق المعلومات السريع هيغير طريقة الشراء والتواصل والشغل.",
      cardOneAccent: "مكان ابعد من عالم الـ elon-gated.",
      cardTwoTitle: "نقل سلس",
      cardTwoBody:
        "ابسط الخيوط ممكن تبقى جامدة جدًا وإحنا بنتنقل من شبكة للتانية",
      cardThreeTitleMain: "إعادة تشكيل",
      cardThreeTitleSub: "البروسيس",
      cardThreeBody:
        "مع كل لفة في الـdial نقلنا من leet speak لـ 140 حرف أو أقل وعوالم مليانة تشويش. مين كان يتخيل إن تحويل التكسيت بوكس لكانفس بسيط ممكن...",
    },
    claim: {
      heroLineOne: "اسكان الـDIAL،",
      heroLineTwo: "وخليه بتاعك",
      heroBody:
        "كانفس بيتطور دايمًا تقدر تستخدمه مع صحابك. احفظ بوستاتك من منصات السوشيال القديمة واطلع ستايلات جديدة خالص.",
      step00: "نزّل أرشيف السوشيال بتاعك",
      step01: "احفظ نسخة مرجعية لكل حاجة",
      dialLineOne: "ادخل",
      dialLineTwo: "بدري",
      dialLineThree: "دلوقتي",
      invite: "اعزم صحابك على تايملاين جديدة",
      step10: "فكّر وطوّر لوكات جديدة",
    },
    dial: {
      title: "THE DIAL",
      optionOneA: "احجز GPU",
      optionOneB: "CO-OP",
      optionOneC: "TIME",
      optionTwoA: "شغّل كـ",
      optionTwoB: "COLAB",
      optionTwoC: "NOTEBOOK",
      optionThreeA: "شغّل",
      optionThreeB: "LOCAL",
    },
    post: {
      dateLabel: "التاريخ",
    },
  },
};

export const normalizeLocale = (locale?: string): AppLocale => {
  if (!locale) {
    return "en";
  }

  if (locale.startsWith("es")) {
    return "es";
  }

  if (locale.startsWith("ar")) {
    return "ar";
  }

  return "en";
};

export const getMessages = (locale?: string): AppMessages =>
  MESSAGES[normalizeLocale(locale)];

export const getLanguageTag = (locale?: string): string => {
  const normalized = normalizeLocale(locale);

  if (normalized === "es") {
    return "es-ES";
  }

  if (normalized === "ar") {
    return "ar-EG";
  }

  return "en-AU";
};
