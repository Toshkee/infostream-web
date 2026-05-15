import type { Dictionary } from "../types";

export const mne: Dictionary = {
  meta: {
    home: {
      title: "Infostream — Enterprise IT za institucije koje vode Crnu Goru",
      description:
        "Infostream gradi sisteme za jezgro bankarstva, finansijske registre i usaglašenost za ministarstva, centralnu banku i parlament Crne Gore. 15+ godina. ISO 27001 i 9001 sertifikati.",
    },
    about: {
      title: "O nama — Infostream",
      description:
        "Osnovan 2004. u Podgorici, Infostream gradi i održava ključne finansijske, identitetske i sisteme usaglašenosti od povjerenja crnogorskih nacionalnih institucija.",
    },
    services: {
      title: "Usluge — Infostream",
      description:
        "Finansijski softver, nacionalni registri i enterprise bezbjednost — Infostream gradi kritične sisteme od kojih zavise vlade i finansijske institucije.",
    },
    technologies: {
      title: "Tehnologije — Infostream",
      description:
        "Platforme i tehnološki stekovi koje Infostream koristi: Oracle (Database, APEX, PL/SQL), .NET, Java, TypeScript, Linux, Kubernetes i Bitdefender enterprise bezbjednost.",
    },
  },
  nav: {
    services: "Usluge",
    technologies: "Tehnologije",
    about: "O nama",
    contact: "Kontakt",
  },
  footer: {
    tagline:
      "Kritični finansijski i identitetski sistemi za ministarstva, centralnu banku i parlament Crne Gore. Građeni i održavani u Podgorici od 2004.",
    address: "Podgorica, Crna Gora",
    columns: {
      company: {
        title: "Kompanija",
        links: [
          { label: "O nama", href: "/about" },
          { label: "Karijera", href: "#contact" },
          { label: "Kontakt", href: "#contact" },
        ],
      },
      work: {
        title: "Rad",
        links: [
          { label: "Finansijski softver", href: "/services" },
          { label: "Registri i podaci", href: "/services" },
          { label: "Bezbjednost i usaglašenost", href: "/services" },
        ],
      },
      trust: {
        title: "Povjerenje",
        links: [
          { label: "ISO 27001", href: "/about" },
          { label: "ISO 9001", href: "/about" },
          { label: "Bitdefender partner", href: "/about" },
        ],
      },
    },
    rights: "Sva prava zadržana.",
    privacy: "Privatnost",
    terms: "Uslovi",
  },
  hero: {
    lines: [
      { text: ["Softver koji"], delay: 0 },
      { text: [{ italic: true, text: "pokreće" }, " institucije"], delay: 0.12 },
      { text: ["jedne države."], delay: 0.24 },
    ],
    intro:
      "Već dvadeset godina Infostream gradi i održava ključne finansijske, identitetske i sisteme usaglašenosti od povjerenja crnogorskih ministarstava, Centralne banke i Parlamenta.",
    foundedLabel: "Osnovano",
    foundedValueSuffix: ", Podgorica",
    certifiedLabel: "Sertifikati",
    certifiedValue: "ISO 27001 · ISO 9001",
    partnerLabel: "Partner",
    partnerValue: "Bitdefender Enterprise",
  },
  trustStrip: {
    clients: [
      "Ministarstvo finansija",
      "Centralna banka Crne Gore",
      "Skupština Crne Gore",
      "Ministarstvo unutrašnjih poslova",
      "Poreska uprava",
      "Ministarstvo odbrane",
    ],
  },
  whatWeDo: {
    eyebrow: "Šta gradimo",
    intro:
      "Tri oblasti djelovanja. Svaki sistem građen da izdrži pažnju regulatora, ministarstava finansija i nacionalnih operatera.",
    root: "Infostream d.o.o.",
    seeFullServices: "Pogledajte sve usluge",
    branches: [
      {
        label: "Finansijski softver",
        services: [
          { label: "Jezgro bankarstva", desc: "Upravljanje računima, kliring i poravnanje — obrađuje milione dnevnih transakcija za Centralnu banku Crne Gore." },
          { label: "Trezorski sistem", desc: "Tok državnog novca i trezorske operacije u realnom vremenu za Ministarstvo finansija." },
          { label: "Budžetsko izvještavanje", desc: "Automatizovan tok izvještavanja usklađen sa nacionalnim budžetskim ciklusima i zahtjevima revizije." },
          { label: "Sistem za usaglašavanje", desc: "Automatsko usaglašavanje na kraju dana kroz sve povezane bankarske institucije." },
        ],
      },
      {
        label: "Registri i podaci",
        services: [
          { label: "Poreski registar", desc: "Nacionalna poreska evidencija i praćenje prihoda u realnom vremenu za Poresku upravu." },
          { label: "Penzijska evidencija", desc: "Baza penzijskih prava građana integrisana sa nacionalnim Fondom PIO." },
          { label: "Registar identiteta", desc: "Matična evidencija povezana sa infrastrukturom nacionalnih ličnih dokumenata MUP-a." },
        ],
      },
      {
        label: "Bezbjednost i usaglašenost",
        services: [
          { label: "ISO 27001 / ISO 9001", desc: "Dvostruko sertifikovani sistemi informacione bezbjednosti i upravljanja kvalitetom, godišnja revizija." },
          { label: "Bitdefender Enterprise", desc: "Zaštita krajnjih tačaka, mreže i clouda primijenjena u svim klijent institucijama." },
          { label: "Operativna kontrola", desc: "Monitoring 24/7, odgovor na incidente i izvještavanje za audit." },
        ],
      },
    ],
  },
  cta: {
    eyebrow: "Stupite u kontakt",
    headline: ["Recite nam o ", { italic: true, text: "sistemu" }, " kojem morate vjerovati."],
    intro:
      "Sarađujemo direktno sa ljudima zaduženim za sisteme — bez posrednika u nabavci. Prvi razgovor je uvijek sa inženjerom.",
    contacts: [
      { label: "Email", value: "info@infostream.me", href: "mailto:info@infostream.me" },
      { label: "Telefon", value: "+382 20 000 000", href: "tel:+38220000000" },
    ],
    details: [
      { label: "Lokacija", value: "Rista Dragićevića 4\nPodgorica 81000, Crna Gora" },
      { label: "Registrovano", value: "Infostream d.o.o.\nPIB: 02000000" },
      { label: "Sertifikati", value: "ISO 27001 · ISO 9001\nBitdefender Enterprise" },
    ],
  },
  about: {
    hero: {
      lines: [
        { text: ["Gradimo sisteme"], delay: 0 },
        { text: ["na koje se", " ", { italic: true, text: "Crna Gora" }], delay: 0.12 },
        { text: ["oslanja."], delay: 0.24 },
      ],
      facts: [
        { label: "Osnovano", value: "2004" },
        { label: "Lokacija", value: "Podgorica, Crna Gora" },
        { label: "Sertifikati", value: "ISO 27001 · ISO 9001" },
        { label: "Bezbjednosni partner", value: "Bitdefender Enterprise" },
      ],
    },
    story: {
      stats: [
        { value: "20", label: "Godina rada", sub: "Osnovano 2004, Podgorica" },
        { value: "6", label: "Nacionalnih institucija", sub: "U produkciji, 24/7" },
        { value: "2", label: "ISO sertifikata", sub: "27001 · 9001, godišnja revizija" },
        { value: "1", label: "Tim, jedna lokacija", sub: "Svi inženjeri u Crnoj Gori" },
      ],
      paragraph:
        "Gradimo finansijske i identitetske sisteme od kojih crnogorske institucije zavise svakog dana. Ne prototipove, ne pilote — produkcijske sisteme koji rade u Centralnoj banci, Ministarstvu finansija i Parlamentu, neprekidno, od 2004.",
    },
    values: {
      eyebrow: "Naše vrijednosti",
      intro:
        "Pet principa koji oblikuju svaku arhitektonsku odluku, svaki dogovor sa klijentom i svaku smjenu dežurstva od 2004.",
      root: "Infostream d.o.o.",
      items: [
        { title: "Stvaramo novu vrijednost", body: "Spremni smo da uradimo ono što je potrebno da stvorimo novu vrijednost za sve zainteresovane strane." },
        { title: "Težimo izvrsnosti", body: "Negujemo ekspertizu i timove orijentisane na rješenja. Fokus je na rješenjima, ne na problemima." },
        { title: "Radimo odgovorno", body: "Istovremeno podržavamo uspjeh naših zaposlenih, partnera i klijenata." },
        { title: "Pokrećemo inovacije", body: "Težimo tehnološkim prodorima i inovacijama koje klijenti traže." },
        { title: "Dugotrajni odnosi", body: "Trajna saradnja je ključni dio uspjeha. Cilj nam je da postanemo dugoročni partner od povjerenja." },
      ],
    },
    location: {
      headline: ["Nađite nas u ", { italic: true, text: "Podgorici." }],
      body:
        "Svi naši inženjeri su ovdje. Kada sarađujete sa Infostreamom, sarađujete sa istim timom od početka do kraja — ne sa rotirajućim eksternim saradnicima.",
      addressLabel: "Adresa",
      addressLines: ["Rista Dragićevića 4", "Podgorica, Crna Gora"],
      generalLabel: "Opšte",
      supportLabel: "Podrška",
      phoneLabel: "Telefon",
    },
  },
  services: {
    hero: {
      lines: [
        { text: ["Šta"], delay: 0 },
        { text: [{ italic: true, text: "gradimo" }, "."], delay: 0.12 },
      ],
      intro:
        "Tri oblasti — finansijski softver, nacionalni registri i enterprise bezbjednost — svaka građena prema standardima institucija koje na njih svakodnevno računaju.",
    },
    detail: [
      {
        number: "01",
        title: "Finansijski softver",
        description:
          "Gradimo sisteme u središtu finansijske infrastrukture — jezgro bankarstva, tokove usaglašavanja i platforme za regulatorno izvještavanje. Građeni za audit tragove, obim transakcija i operativne zahtjeve centralnih banaka i ministarstava finansija.",
        capabilities: [
          { name: "Jezgro bankarstva i knjigovodstvo", body: "Višedevizni knjigovodstveni sistemi dizajnirani za neprekidan rad — knjiženje u realnom vremenu, dnevno usaglašavanje i puna istorija revizije." },
          { name: "Usaglašavanje i poravnanje", body: "Automatsko sparivanje fajlova sa transakcijama visokog obima kroz druge strane, klirinške kuće i interne knjige." },
          { name: "Regulatorno izvještavanje", body: "Strukturisano generisanje izvještaja za podnošenje centralnoj banci: bilansi, koeficijenti likvidnosti i prilagođeni regulatorni obrasci." },
          { name: "Anti-prevara i usaglašenost", body: "Kontrole zasnovane na pravilima i pragovima integrisane u tokove plaćanja kako bi se ispunile obaveze AML i KYC." },
        ],
        clients: "Ministarstvo finansija · Centralna banka Crne Gore · Poreska uprava",
      },
      {
        number: "02",
        title: "Registri i podaci",
        description:
          "Nacionalni registri su sistemi evidencije — svaki građanin, svaka transakcija, svaka obaveza. Projektujemo ih i održavamo prema zahtjevima stabilnosti i kontrole pristupa koje javne institucije traže, uključujući međuresornu razmjenu podataka na nivou infrastrukture.",
        capabilities: [
          { name: "Poreski registri i prihodi", body: "Sveobuhvatna poreska administracija: registracija obveznika, praćenje obaveza, utvrđivanje, naplata i upravljanje zaostatkom." },
          { name: "Penzioni i socijalni sistemi", body: "Istorija doprinosa, obračun prava i isplata za nacionalne penzione i socijalne programe." },
          { name: "Identitet i dokumenti", body: "Sigurni registri za nacionalne dokumente, sa obradom biometrijskih podataka i integracijom sa sistemima granične kontrole." },
          { name: "Međuresorska razmjena podataka", body: "Sigurne magistrale servisa i API gatewayi koji omogućavaju ministarstvima da dijele podatke bez dupliranja — jedan izvor istine, kontrolisan pristup." },
        ],
        clients: "Ministarstvo unutrašnjih poslova · Parlament ERP · Ministarstvo odbrane",
      },
      {
        number: "03",
        title: "Bezbjednost i usaglašenost",
        description:
          "Enterprise bezbjednost za organizacije koje ne smiju imati incident. Postavljamo i upravljamo Bitdefender enterprise platformom na krajnjim tačkama, serverima i mrežama — i vodimo ISO 27001 sistem upravljanja koji čuva kontrole dokumentovane, testirane i ažurirane.",
        capabilities: [
          { name: "Bitdefender enterprise primjena", body: "Implementacija u svim slojevima — krajnja tačka, server i mreža — upravljanje politikama, feedovi obavještajnih podataka o prijetnjama i centralizovane kontrolne table." },
          { name: "ISO 27001 upravljanje", body: "Analiza praznina, implementacija kontrola, vođenje registra rizika i priprema za sertifikacione audite trećih strana." },
          { name: "Odgovor na incidente i monitoring", body: "SIEM integracija, trijaža uzbuna i definisani plejbuci za izolaciju i oporavak kada se incident dogodi." },
          { name: "Auditi usaglašenosti", body: "Strukturisane provjere prema GDPR, NIS2 i sektorskim zahtjevima — sa planovima ispravki, ne samo nalazima." },
        ],
        clients: "ISO 27001 sertifikovan · ISO 9001 sertifikovan · Bitdefender partner",
      },
    ],
  },
  tech: {
    hero: {
      lines: [
        { text: ["Platforme iza"], delay: 0 },
        { text: ["sistema koji"], delay: 0.12 },
        { text: [{ italic: true, text: "ne smiju da padnu" }, "."], delay: 0.24 },
      ],
      intro:
        "Dugotrajni tehnološki stekovi, izabrani zbog podrške na decenijskoj skali, audit-grade vidljivosti i velikog broja kvalifikovanih inženjera u regionu. Ne jurimo frameworke — koristimo ih petnaest godina.",
    },
    grid: [
      {
        id: "tech-oracle",
        eyebrow: "T01 — Primarna baza",
        title: "Oracle",
        blurb:
          "Naš sistem evidencije za transakcione i registracione radne zadatke. Tamo gdje audit, izdržljivost i duboki PL/SQL ekosistem nisu opcija, ovo je gdje žive.",
        items: [
          "Oracle Database 19c & 23ai",
          "Oracle APEX",
          "PL/SQL razvoj",
          "Oracle Forms modernizacija",
          "GoldenGate replikacija",
        ],
        imageAlt: "Ilustracija Oracle baze",
      },
      {
        id: "tech-dotnet",
        eyebrow: "T02 — Aplikaciona platforma",
        title: ".NET",
        blurb:
          "C# i .NET runtime pokreću većinu aplikativne logike kroz ministarstva: servise, integracije i dugotrajne API-je ispred Oraclea.",
        items: [
          "C# i .NET 8",
          "ASP.NET Core API-ji",
          "Entity Framework Core",
          "Active Directory integracija",
          "Windows i Linux primjena",
        ],
        imageAlt: "Ilustracija .NET platforme",
      },
      {
        id: "tech-languages",
        eyebrow: "T03 — Jezici i frameworci",
        title: "Dugovječni stekovi",
        blurb:
          "Tamo gdje ne standardizujemo na .NET, standardizujemo na jezike sa preko deset godina produkcijske istorije i velikim regionalnim talentom. Dosadno je odlika.",
        items: [
          "Java / Spring Boot",
          "TypeScript / Node.js",
          "Python za podatke i ETL",
          "React / Next.js",
        ],
        imageAlt: "Ilustracija jezika i frameworka",
      },
      {
        id: "tech-security",
        eyebrow: "T04 — Infrastruktura i bezbjednost",
        title: "Bezbjednost i operacije",
        blurb:
          "Suvereni hosting, ISO 27001 kontrole i Bitdefender na svakom sloju. Vježbe kontinuiteta se izvode, ne obećavaju — svaki sistem ima uvježban put nazad.",
        items: [
          "Bitdefender GravityZone (krajnja tačka + mreža)",
          "Linux (RHEL / Oracle Linux)",
          "Kubernetes i kontejnerizacija",
          "GitLab CI/CD pipeline",
          "Backup, DR i vježbe kontinuiteta",
        ],
        imageAlt: "Ilustracija infrastrukture i bezbjednosti",
      },
    ],
    principles: {
      eyebrow: "Naš standard",
      headline: ["Kako biramo to što ", { italic: true, text: "koristimo" }, "."],
      intro:
        "Četiri pravila koja primjenjujemo na svaku tehnološku odluku — od baze do monitoring steka. Izabrano jednom, zadržano deceniju.",
      root: "Tehnološki standard",
      items: [
        { n: "01", title: "Dosadno tuče novo", body: "Ako stack ima manje od deset godina produkcijske istorije, ne pokrećemo ga za nacionalnu instituciju. Predvidljivost je odlika." },
        { n: "02", title: "Vendor podrška, lokalno popunjivo", body: "Izbjegavamo tehnologije koje se mogu zaposliti samo u dva grada na svijetu. Tim koji održava sistem mora biti zamjenjiv." },
        { n: "03", title: "Audit-grade po defaultu", body: "Svaka komponenta mora proizvoditi dokaze — logove izmjena, tragove pristupa, zapise primjene — koje regulator može pročitati bez prevodioca." },
        { n: "04", title: "Operativno vodimo što gradimo", body: "Ne predajemo sisteme i odlazimo. Tim koji je dizajnirao stack je isti tim koji ga vodi u petnaestoj godini." },
      ],
    },
  },
};
