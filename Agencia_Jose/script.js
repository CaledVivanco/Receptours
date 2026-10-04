// ================= SLIDER PRINCIPAL =================
let index = 0;

function showSlide(i) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  slides.forEach(s => {
    s.classList.remove("active");
    s.querySelector(".text")?.classList.remove("active-text");
  });
  slides[i]?.classList.add("active");
  slides[i]?.querySelector(".text")?.classList.add("active-text");
}

function next() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prev() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

setInterval(next, 5000);
// ================= CATÁLOGO =================
const catalogo = [
  {
    nombre: "Bora Bora",
    categoria: "islas",
    img: "/img/borabeach.jpg",
    descripcion: "Un Paraiso Relajante con playas de ensueño.",
    descripcionExtra: "A tan solo minutos de Cartagena encontrarás este exclusivo Beach Club rodeado de las hermosas Islas del Rosario. Relájate en cabañas frente al mar, disfruta de un cóctel de bienvenida y vive un día de playa como pocos.",
    mapa: "https://maps.google.com/?q=bora+bora",
    tipo: "tour",
    incluye: [
      "Traslado en Lancha Rápida",
      "Cóctel de Bienvenida",
      "Cabana (Cama Playa)",
      "Almuerzo: Plato Típico Cartagenero (Pescado), Pollo a la Plancha o Plato Vegetariano"
    ],
    noIncluye: [
      "Impuesto del muelle",
      "Alimentos y bebidas a la carta",
      "Toallas y Actividades Opcionales (Spa, Snorkel, etc)"
    ],
    horarios: [
      "7:30 am encuentro muelle la bodeguita puerta #3 para Check In",
      "8:15 am (aprox.) zarpe muelle la bodeguita",
      "9:30 am (aprox.) llegada a islas del Rosario y Bora Bora Beach club",
      "3:00 pm (aprox.) salida de vuelta a Cartagena",
      "4:00 pm (aprox) llegada regreso al muelle la bodeguita"
    ]
  },
  {
    nombre: "Isla del Sol",
    categoria: "islas",
    img: "/img/isla-sol.jpg",
    descripcion: "Paraíso con aguas cristalinas.",
    descripcionExtra: "Sumérgete en un paraíso de aguas cristalinas y arena blanca, ideal para desconectarte por un día completo. Piscina con agua de mar, sillas asoleadoras y un delicioso almuerzo te esperan en esta joya de las Islas del Rosario.",
    mapa: "https://maps.google.com/?q=Isla+del+Sol+Cartagena",
    tipo: "tour",
    horarios: [
      "Cita en el muelle: 7:45 a 8:00 am puerta número 4",
      "Embarque: Entre 8:15 a 8:30 am aprox",
      "Regreso: Entre 2:30 a 3:00 pm aprox",
      "Hora de llegada a Cartagena 4:00 a 4:30 pm dependiendo de las condiciones marítimas"
    ],
    opciones: [
      {
        nombre: "Daytour Regular",
        incluye: [
          "Transporte en lancha ida y vuelta",
          "Cóctel de bienvenida",
          "6 Opciones de Almuerzo con bebidas suaves: Almuerzo típico con pescado (estilo bufett), Pechuga a la plancha, Filete de pescado, Bistec criollo, Pastas, Plato vegetariano",
          "Postre típico y Café después del almuerzo",
          "Uso de sillas asoleadoras",
          "Playa y Piscina (con agua de mar)",
          "Ducha con agua de mar filtrada",
          "Servicio de toallas"
        ],
        noIncluye: [
          "Gastos no especificados en el paquete",
          "Impuesto de muelle"
        ]
      },
      {
        nombre: "Daytour Open Bar",
        incluye: [
          "Transporte en lancha ida y vuelta",
          "Cóctel y Mini frito de Bienvenida",
          "Bar abierto de 10:00 am a 2:00 pm",
          "Para adulto: Cervezas nacionales, Gaseosas, Agua, Cócteles seleccionados",
          "Para niños: Agua, gaseosas, limonada natural, jugo de naranja",
          "6 Opciones de Almuerzo con bebidas suaves: Almuerzo típico con pescado (estilo bufett), Pechuga a la plancha, Filete de pescado, Bistec criollo, Pastas, Plato vegetariano",
          "Postre típico y Café después del almuerzo",
          "Uso de sillas asoleadoras",
          "Playa y Piscina (con agua de mar)",
          "Ducha con agua de mar filtrada",
          "Servicio de toalla"
        ],
        noIncluye: [
          "Gastos no especificados en el paquete",
          "Impuesto de muelle"
        ]
      }
    ]
  },
  {
    nombre: "Pao Pao",
    categoria: "islas",
    img: "/img/pao-pao.png",
    descripcion: "Club exclusivo frente al mar.",
    descripcionExtra: "Un club exclusivo frente al mar, decorado por el vuelo constante de más de 100 fragatas alrededor de la isla. Snorkel guiado, actividades de bienestar y juegos para todo el grupo hacen de este lugar una experiencia única.",
    mapa: "https://maps.google.com/?q=Pao+Pao+Cartagena",
    tipo: "tour",
    requisitos: "A partir de 12 años",
    horarios: [
      "Punto de encuentro: Muelle La Bodeguita, Puerta #3",
      "Horario: 7:30 am",
      "Se garantiza la reserva hasta las 8:20 am"
    ],
    incluye: [
      "Transporte en lancha rápida, ida y vuelta",
      "Coctel de bienvenida",
      "5 opciones de almuerzo",
      "Asoleadora",
      "Tour Fragatas - Un breve recorrido que invita a conocer un poco más de cerca a las fragatas y otras especies en su hábitat natural",
      "Snorkel guiado - Exploración en el mar para observar de cerca los arrecifes y la vida marina",
      "Traslado al Oceanario - Salida en lancha desde Pao Pao para conocer la riqueza marina de las Islas del Rosario (entrada no incluida)",
      "Actividades de bienestar - Sesiones de yoga, respiración consciente, sound healing y más",
      "Mundial de Cornhole - Popular juego en el que se lanzan saquitos de tela a un tablero. Una competencia sencilla y divertida con premios",
      "Air hockey y futbolín - Clásicos de integración para compartir"
    ],
    noIncluye: [
      "Tasa portuaria",
      "Seguro",
      "Toallas"
    ]
  },
  {
    nombre: "Isla Palma",
    categoria: "islas",
    img: "/img/isla-palma.jpg",
    descripcion: "Naturaleza y tranquilidad total.",
    descripcionExtra: "Una isla rodeada de naturaleza exuberante y aguas tranquilas, perfecta para quienes buscan calma lejos del ruido de la ciudad. Ideal para caminar entre palmeras, tomar el sol y respirar aire puro frente al mar Caribe.",
    horarios: [
      "Punto de encuentro: Muelle La Bodeguita",
      "Horario: 6:00 AM-4:30 PM",
   
    ],
    mapa: "https://maps.google.com/?q=Isla+Palma",
    tipo: "tour"
  },
  {
    nombre: "Múcura y Tintipán",
    categoria: "islas",
    img: "/img/mucura.png",
    descripcion: "Aguas turquesas y arena blanca.",
    descripcionExtra: "Dos islas hermanas de aguas turquesas y arena blanca que parecen sacadas de una postal. Un recorrido perfecto para los amantes del mar tranquilo, la fotografía y los paisajes que se quedan grabados en la memoria.",
    horarios: [
      "Punto de encuentro: Muelle La Bodeguita",
      "Horario: 6:00 AM-4:30 PM",
     
    ],
    mapa: "https://maps.google.com/?q=Isla+Mucura",
    tipo: "tour"
  },
  {
    nombre: "Playa Blanca",
    categoria: "baru",
    img: "/img/playa-blanca.png",
    descripcion: "La más famosa de Barú.",
    descripcionExtra: "La playa más famosa de Barú, reconocida por su arena blanca y sus aguas de color turquesa. Un día completo de sol, mar y buena comida típica, ideal para quienes visitan Cartagena por primera vez.",
    mapa: "https://maps.google.com/?q=Playa+Blanca+Baru",
    tipo: "tour",
    tituloCompleto: "TOUR PLAYA BLANCA – BARÚ TERRESTRE",
    incluye: [
      "Orientador acompañante",
      "Recogida y retorno al hotel (Bocagrande, Laguito y Castillo grande, centro, manga y paradero de contecar)",
      "Transporte climatizado en bus o vans hasta Barú",
      "Almuerzo típico: Pescado o pollo, arroz con coco, patacón, ensalada y bebida acompañante",
      "Baño en playa blanca Barú"
    ],
    noIncluye: [
      "Snack, Cervezas, Snorkel, Sillas, Carpas, Parasoles y actividades NO especificadas dentro del plan"
    ],
    horarios: [
      "Salidas diarias: 7:00am – Retorno 3:00pm",
      "Circuito de recogida: Bocagrande, Laguito y Castillo grande a partir de las 7:30am",
      "Centro de convenciones 8:00am",
      "Zona norte 7:15am"
    ]
  },
  {
    nombre: "Playa Tranquila",
    categoria: "baru",
    img: "/img/playa-tranquila.png",
    descripcion: "Más calmada y relajante.",
    descripcionExtra: "Una alternativa más calmada y relajante frente a Playa Blanca, ideal para descansar sin tanto movimiento de gente. Sillas asoleadoras, almuerzo típico y transporte cómodo hacen de este plan una gran opción familiar.",
    mapa: "https://maps.google.com/?q=Playa+Tranquila+Baru",
    tipo: "tour",
    tituloCompleto: "TOUR PLAYA TRANQUILA BARÚ EN BUS",
    incluye: [
      "Recogida y retorno al hotel (Bocagrande, Laguito y Castillo grande)",
      "Transporte climatizado en bus o vans hasta Barú",
      "Transporte en lancha de Barú a playa tranquila",
      "Almuerzo Típico",
      "Baño en playa tranquila",
      "Orientador",
      "Sillas asoleadoras y para soles"
    ],
    noIncluye: [
      "Actividades NO especificadas dentro del plan"
    ],
    horarios: [
      "Salidas diarias: 7:30am – Regreso 3:00pm"
    ]
  },
  {
    nombre: "Barú + Rosario",
    categoria: "baru",
    img: "/img/baru-rosario.png",
    descripcion: "Combo de islas top.",
    descripcionExtra: "El combo perfecto para conocer lo mejor de dos mundos en un solo día: el recorrido panorámico por las Islas del Rosario y una tarde de playa en Barú. Snorkel opcional, oceanario y almuerzo incluido completan la experiencia.",
    mapa: "https://maps.google.com/?q=Islas+del+Rosario",
    tipo: "tour",
    tituloCompleto: "ISLAS DEL ROSARIO Y BARÚ ",
    horarios: [
      "Salida todos los días",
      "Recogida en Hoteles de Bocagrande y Laguito de 8:00am a 8:30am",
      "Salida Muelle la Bodeguita de 8:44am a 9:10am"
    ],
    incluye: [
      "Transporte en lancha Rápida (capacidad de 25, 35, 39, 44 personas)",
      "Recorrido panorámico por las ISLAS DEL ROSARIO",
      "Parada en el oceanario (entrada opcional)",
      "Parada para Snorkeling (opcional)",
      "Cóctel de bienvenida",
      "Tiempo de playa en Barú sector playa tranquila o playa blanca",
      "Sillas asoleadoras",
      "Parasoles",
      "Almuerzo: Pescado frito o sudado, Mojarra o pescado a disponibilidad (arroz de coco o blanco, ensalada, patacones, refresco) o Pollo frito o a la plancha, pechuga o pierna pernil, a disponibilidad (arroz de coco o blanco, ensalada, patacones y refresco)"
    ],
    noIncluye: [
      "Retorno al hotel",
      "Impuesto portuario: ",
      "Ingreso al Oceanario ",
      "Servicio de snorkel ",
      "Cervezas, actividades No especificadas"
    ],
    notas: [
      "Las personas que quieran ir solo a playa tranquila deben colocarlo en las observaciones al momento de reservar",
      "Las personas que quieran hacer el recorrido en las islas y no entrar al oceanario o hacer snorkel, deberán esperar que las demás personas terminen sus actividades para llegar a la playa"
    ]
  },
  {
    nombre: "Palmarito",
    categoria: "tierra-bomba",
    img: "/img/palmarito.png",
    descripcion: "Vista espectacular a Cartagena.",
    descripcionExtra: "Ubicado en Tierra Bomba, este club de playa ofrece una vista espectacular de la ciudad amurallada de Cartagena. Piscina, kayaks, tablas de paddle y un rico almuerzo hacen de este pasadía una escapada rápida y refrescante.",
    mapa: "https://maps.google.com/?q=Tierra+Bomba",
    tipo: "tour",
    opciones: [
      {
        nombre: "Pasadía Estándar",
        incluye: [
          "Transporte en lancha ida y regreso (salida desde la playa del Nuevo Hospital de Bocagrande)",
          "Bebida de bienvenida",
          "Almuerzo",
          "Uso de instalaciones",
          "Sillas asoleadoras o kioskos de palma (según disponibilidad)",
          "Piscina",
          "Uso de kayaks y tablas de paddle"
        ],
        noIncluye: ["Toallas ni servicio de spa"],
        horarios: [
          "Horario de salida: 8:00 a.m. a 12:00 p.m. (cada 20 minutos, grupos de 15 personas)",
          "Retorno a Cartagena: 2:30 p.m. a 4:00 p.m.",
          "Requiere reserva previa"
        ],
        notas: ["Prohibido el ingreso de bebidas y alimentos al hotel"]
      },
      {
        nombre: "Pasadía VIP (solo para adultos)",
        incluye: [
          "Transporte en lancha ida y regreso (desde la playa del Nuevo Hospital de Bocagrande)",
          "Bebida de bienvenida (mojito, piña colada en vaso o gin tonic)",
          "Zona reservada con cama asoleadora y toallas (playa o piscina)",
          "Bono consumible de $100.000 para alimentos y bebidas",
          "Servicio de hooka (1 hora)",
          "Uso de instalaciones y 2 piscinas",
          "Uso de kayaks y tablas de paddle"
        ],
        horarios: [
          "Horario de salida: 8:00 a.m. a 12:00 p.m.",
          "Retorno a Cartagena: 2:30 p.m. a 4:00 p.m."
        ],
        notas: ["Prohibido el ingreso de bebidas y alimentos al hotel"]
      }
    ]
  },
  {
    nombre: "Ancestral",
    categoria: "tierra-bomba",
    img: "/img/ancestral.png",
    descripcion: "Experiencia cultural única.",
    descripcionExtra: "Playa Linda te espera con sillas asoleadoras de lujo, buena música y un ambiente relajado frente al mar. Ideal para quienes buscan un plan sencillo pero con mucho estilo, cerca de la ciudad y sin complicaciones.",
    mapa: "https://maps.google.com/?q=Tierra+Bomba",
    tipo: "tour",
  
    tituloCompleto: " Ancestral (Playa Linda)",
    precioNinos: "Niños de 5-10 años $150.000",
    incluye: [
      "Transporte marítimo Ida y Regreso desde el hospital de Bocagrande Cartagena",
      "Bebida de bienvenida",
      "Almuerzo Caribeño (pescado con sopa o pollo, acompañado de arroz de coco, patacones y ensalada de la casa; opción vegetariana especificando al momento de la reserva)",
      "Lujosas Sillas asoleadoras con sombrilla o cama de playa",
      "Acceso y disfrute del lugar",
      "Excelente música y djs casi todos los fines de semana"
    ],
    horarios: [
      "Horarios disponibles: 9:00 am, 10:00 am, 11:00 am y 12:00 del día",
      "Regreso a las 3:00 y 4:00 pm",
      "Nota: el horario de regreso depende de la marea; por vientos puede salir más temprano y no se permite hasta las 4:00 pm"
    ],
    notas: ["No se permite el ingreso de alimentos ni bebidas al Club"]
  },
  {
    nombre: "Fénix Beach",
    categoria: "tierra-bomba",
    img: "/img/fenix.png",
    descripcion: "Beach club top.",
    descripcionExtra: "Uno de los beach clubs más populares cerca de Cartagena, con camas frente al mar y ambiente vibrante todo el día. Perfecto para pasar la jornada entre welcome drinks, buena música y una vista privilegiada al mar.",
    mapa: "https://maps.google.com/?q=Fenix+Beach+Cartagena",
    tipo: "tour",
    opciones: [
      {
        nombre: "Fénix Básico (sin almuerzo)",
        incluye: [
          "Transporte marítimo ida y regreso",
          "Welcome drink",
          "Cama 2ª línea (upgrade en el sitio a 1ª línea con costo adicional)",
          "Acceso total a las instalaciones",
          "Toalla por persona"
        ]
      },
      {
        nombre: "Fénix Beach con Almuerzo",
        incluye: [
          "Transporte marítimo (9:30, 10:30, 11:30 y 1:30)",
          "Welcome drink",
          "Cama 2ª línea (upgrade en el sitio a 1ª línea con costo adicional)",
          "Almuerzo a la carta (un plato fuerte por persona), bebida suave, postre",
          "Acceso total a las instalaciones",
          "Toalla por persona"
        ]
      }
    ]
  },
  {
    nombre: "Top 3 Islas",
    categoria: "tours",
    img: "/img/top3.jpg",
    descripcion: "Las mejores islas.",
    descripcionExtra: "Un recorrido exclusivo para mayores de edad por las tres islas más codiciadas: Pao Pao, Islabela y Bora Bora Beach Club. Guía bilingüe, cócteles de bienvenida en cada parada y espacios reservados solo para tu grupo.",
    mapa: "https://maps.google.com/?q=Islas+Cartagena",
    tipo: "tour",
    requisitos: "Solo para mayores de edad +18",
    incluye: [
      "Transporte en lancha rápida",
      "Guía bilingüe",
      "Tour panorámico por las islas del Rosario",
      "1 Cóctel de bienvenida en cada Isla",
      "Hidratación en la lancha (Agua, Gaseosa)",
      "3 Opciones de almuerzo + bebida (Islabela)",
      "Espacio exclusivo para el tour en cada isla"
    ],
    noIncluye: [
      "Impuesto de muelle + seguro",
      "Toallas",
      "Servicios o consumos adicionales",
      "Espacios preferenciales",
      "Acceso Área VIP de Bora Bora"
    ],
    horarios: [
      "Los pasajeros deben llegar al muelle La Bodeguita a las 8:00am",
      "Salimos todos los días",
      "La hora de Zarpe es a las 8:45am",
      "Se garantiza la reserva hasta las 8:30am",
      "Hora de llegada aproximada al muelle La Bodeguita 4:30pm"
    ]
  },
  {
    nombre: "Tour 5 Islas",
    categoria: "tours",
    img: "/img/5islas.png",
    descripcion: "Recorrido completo.",
    descripcionExtra: "El recorrido más completo para conocer varios rincones de las Islas del Rosario en un solo día de aventura. Oceanario, avioneta sumergida, snorkeling y paradas en playas icónicas hacen de este tour toda una experiencia.",
    mapa: "https://maps.google.com/?q=Islas+del+Rosario",
    tipo: "tour",
    incluye: [
      "Hidratación en el bote - Adultos: 2 cervezas nacionales y 1 botella con agua / Niños: 2 jugos y 1 botella con agua",
      "Oceanario: Show de delfines y especies marinas (ENTRADA INCLUIDA)",
      "Avioneta: Visualiza una avioneta sumergida en el agua con caretas de Snorkel",
      "Snorkeling: Practica snorkeling en zona de aguas cristalinas y foto debajo del agua",
      "Baruch Wave: Bebida de bienvenida y 9 opciones de almuerzo, playa privada con sillas asoleadoras sin costo adicional",
      "Cholón: Tour panorámico por el ambiente fiestero en la isla de la rumba de Cartagena",
      "Bocachica: Cóctel en playa tranquila y tour histórico en el fuerte San Fernando"
    ],
    horarios: [
      "Punto de encuentro: Muelle de la bodeguita puerta #4 a las 7:45 AM"
    ]
  },
  {
    nombre: "4 Islas Terrestre",
    categoria: "tours",
    img: "/img/4islas.png",
    descripcion: "Acceso por tierra.",
    descripcionExtra: "Un recorrido terrestre que combina cultura, playa y naturaleza en un solo día inolvidable por Barú y sus alrededores. Snorkeling en la avioneta hundida, plancton luminoso al atardecer y almuerzo típico completan el plan.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "tour",
    tituloCompleto: "4 ISLAS TERRESTRE",
    incluye: [
      "Transporte en bus climatizado hasta Barú",
      "Islas del Rosario: tour panorámico de las 27 Islas del Rosario con reseña cultural del guía",
      "Snorkeling en la avioneta sumergida: equipo de máscara y snorkel para carretear en la avioneta hundida de Pablo Escobar",
      "Traslado al oceanario o snorkeling en los arrecifes de corales (entrada al oceanario no incluida)",
      "Isla Cholón: 1 hora en la isla para baño de mar y degustación de mariscos frescos",
      "Agua Azul Barú: 1 hora en la isla para baño de mar y degustación de frutas tropicales",
      "Playa Tranquila Barú: almuerzo (pollo, pescado o vegetariano) y tiempo de baño de mar",
      "Actividad de plancton luminoso: a las 6:30pm lancha a la laguna encantada de Barú para apreciar el fenómeno"
    ],
    horarios: [

      "Hora de salida 7:00am a 8:00 am",
      "Hora de regreso 4:00 pm Sin Actividad de Plancton",
      "Hora de regreso 9:00 pm Con Actividad de Plancton"
    ]
  },
  {
    nombre: "Catamarán Bona Vida",
    categoria: "bahia",
    img: "/img/catamaran.png",
    descripcion: "Navegación premium.",
    descripcionExtra: "Navega por la bahía de Cartagena a bordo del catamarán más grande y seguro del Caribe colombiano. Dos horas de recorrido con bebida de cortesía, snacks típicos y una vista privilegiada de la ciudad amurallada.",
    mapa: "https://maps.google.com/?q=Bahia+Cartagena",
    tipo: "tour",
    incluye: [
      "Una bebida de cortesía (vino tinto, vino blanco, cerveza, jugo del día o gaseosa)",
      "Snacks: empanaditas, quibbe y deditos de queso",
      "Impuestos de zarpe",
      "Servicio de bar abordo para compra de bebidas adicionales con o sin alcohol",
      "Navegación estable, tranquila y con mucho confort"
    ],
    horarios: [


      "Hora de llegada 4:30 pm Muelle de la Bodeguita",
      "Hora de zarpe 5:00 pm",
      "Hora de regreso 7:00 pm"
    ],
    notas: ["El ingreso de alimentos y bebidas no está permitido"]
  },
  {
    nombre: "Sunset Catamarán",
    categoria: "bahia",
    img: "/img/sunset.png",
    descripcion: "Atardecer en el mar, ¡Vive un Atardecer Inolvidable por la Bahía a Bordo del Catamarán Flamante!.",
    descripcionExtra: "Vive un atardecer inolvidable navegando por la bahía a bordo del catamarán Flamante, con barra libre incluida. Dos horas de recorrido con la mejor vista del sol cayendo sobre el mar Caribe y la ciudad amurallada.",
    mapa: "https://maps.google.com/?q=Cartagena+sunset",
    tipo: "tour",
    tituloCompleto: "Sunset Flamante ",
  
    horarios: [
      "Todos los Dias ",
      "Entrada a muelle: 4:30pm (Muelle de la Bodeguita)",
      "Zarpe: 5:00pm",
      "Regreso a muelle: 7:00pm (Muelle de la Bodeguita)"
    ],
    incluye: [
      "Barra libre de bebidas seleccionadas (alcohólicas y no alcohólicas)",
      "Dos horas de recorrido con la mejor vista de la bahía",
      "Un delicioso mini pasaboca por persona"
    ],
    noIncluye: ["Tasa portuaria ($20.000)"]
  },
  {
    nombre: "Noche Blanca",
    categoria: "bahia",
    img: "/img/noche.png",
    descripcion: "Fiesta en la bahía.",
    descripcionExtra: "Una fiesta flotante por la bahía de Cartagena con show de baile, DJ en vivo y barra libre nacional. Tres horas de pura rumba con cena tipo buffet, concursos y clases de baile para disfrutar en grande con amigos.",
    mapa: "https://maps.google.com/?q=Cartagena+night",
    tipo: "tour",
    incluye: [
      "Presentación folclórica",
      "Recorrido de 3 horas por la Bahía de Cartagena",
      "Animador",
      "Show de baile",
      "Bebida de bienvenida",
      "Concursos y clases de baile",
      "D.J.",
      "Barra libre nacionales",
      "Cena tipo buffet"
    ],
    noIncluye: ["Impuesto del muelle"],
    horarios: ["Horarios: 8:00 pm - 11:00 pm"]
  },
  {
    nombre: "Cena en Yate",
    categoria: "cenas",
    img: "/img/cena-yate.png",
    descripcion: "Cena romántica.",
    descripcionExtra: "Una cena romántica y elegante navegando por la bahía de Cartagena durante dos horas de recorrido nocturno. Menú de tres tiempos, copas de vino, música a bordo y una vista espectacular de la ciudad iluminada.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "tour",
    incluye: [
      "Cena Menú servido y bebida (Entrada, plato fuerte, postre y dos copas de vino por persona)",
      "Servicio a bordo",
      "Música a bordo",
      "Señal WIFI a bordo"
    ],
    noIncluye: ["Impuesto de muelle"],
    notas: ["Mesa compartida"],
    horarios: [
      "Salidas garantizadas de Martes a Domingo, Muelle de la Bodeguita, Puerta 4",
      "Embarque: 6:30 p.m. Zarpe: 7:00 p.m."
    ],
    menu: {
      primeraEntrada: [
        "Canasticas de plátano con hogao, guacamole y suero costeño",
        "Canastica de coctel típico de camarones"
      ],
      segundaEntrada: ["Ensalada Capresa"],
      platoPrincipal: [
        "Róbalo a la plancha con papas colombianas y verduras salteadas",
        "Baby Beef con papas colombianas y ensalada fresca",
        "Arroz de Mar (camarón, calamar y mejillón)",
        "Pasta Napolitana",
        "Pasta Alfredo con Pollo",
        "Pasta Alfredo con Mariscos"
      ],
      postre: "Postre de la casa"
    }
  },
  {
    nombre: "Cena Fénix",
    categoria: "cenas",
    img: "/img/cena-fenix.png",
    descripcion: "Cena frente al mar.",
    descripcionExtra: "Vive una noche mágica frente al mar con cena a la carta, fogata y DJ en vivo en la Isla Fénix. Un plan ideal para parejas o grupos que buscan algo diferente, con mesa reservada cerca a la fogata.",
    mapa: "https://maps.google.com/?q=Fenix+Beach",
    tipo: "tour",
    tituloCompleto: "Cena en la Isla Fénix - Vive una noche mágica con nuestra Cena en la Isla",
    horarios: [
      "Salidas Cartagena - Fénix: 7:00 PM",
      "Salidas Fénix - Cartagena: 10:00 PM"
    ],
    incluye: [
      "Transporte ida y vuelta (Muelle de la bodeguita)",
      "Welcome Drink",
      "Cena a la carta (1 plato fuerte por persona)",
      "Bebida suave",
      "Postre a la carta",
      "Dj en vivo todas las noches",
      "Fogata",
      "Mesa reservada en restaurante-Bar cerca a la fogata"
    ],
    noIncluye: [
      "Impuestos al muelle ($18.000 por persona)",
      "Decoración especial"
    ],
    notas: ["Las cenas de $295.000 por persona se acomodan cerca a la fogata"]
  },
  {
    nombre: "Sunset en Barú",
    categoria: "cenas",
    img: "/img/sunset-baru.png",
    descripcion: "Atardecer inolvidable.",
    descripcionExtra: "Un atardecer inolvidable en Barú con cóctel de bienvenida, cena frente al mar y opción de ver el plancton luminoso. Camas de playa, piscina y wifi hacen de esta tarde-noche un plan perfecto para desconectarte.",
    mapa: "https://maps.google.com/?q=Baru",
    tipo: "tour",
    tituloCompleto: "Nena Beach Sunset - Atardecer",
    incluye: [
      "Recogida en el hotel",
      "Transporte terrestre",
      "Cóctel de bienvenida (con o sin alcohol)",
      "Cena con 3 opciones: Hamburguesa gourmet con papas a la francesa / Pizza artesanal para dos / Pechuga con papas a la francesa, arroz de coco, ensalada",
      "Café",
      "Cama de playa sujeta a disponibilidad / Cajones de seguridad",
      "Duchas de agua dulce",
      "Wifi",
      "Plancton (opcional)",
      "Uso de piscina"
    ],
    opciones: [
      {
        nombre: "Atardecer con Plancton",
        precio: "consultar"
      },
      {
        nombre: "Atardecer sin Plancton",
        precio: "consultar"
      }
    ],
    horarios: [
      "Salida vía terrestre del atardecer: 1:30pm a 2:00pm",
      "Retorno: 7:45pm a 8:00pm, con o sin plancton",
      "Hospedados en el centro, punto de encuentro Monumento Los Pegasos 1:50 PM"
    ]
  },
  {
    nombre: "City Tour",
    categoria: "city",
    img: "/img/city.png",
    descripcion: "Historia de Cartagena.",
    descripcionExtra: "Recorre la historia viva de Cartagena visitando el Castillo San Felipe, la India Catalina y el centro histórico. Un guía acompañante te contará las anécdotas y leyendas que hacen de esta ciudad un lugar único en el mundo.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "tour",
    tituloCompleto: "City Tour - Entrada Castillo San Felipe",
    horarios: [
      "Horario de Recogida: Tambien Disponible 9:00 AM-1:00 PM, 2:00 PM-6:00 PM",
      "Horario de recogida: Torre del reloj 1:30 PM, Bocagrande 1:50 PM, Laguito 2:00 PM",
      "Duración del tour: 4 horas aprox."
    ],
    incluye: [
      "Transporte en chivas",
      "Guía acompañante",
      "Recorrido por la Bahía de Cartagena (Castillogrande)",
      "Castillo San Felipe",
      "India Catalina",
      "Caminata centro histórico"
    ],
    noIncluye: [
      "Bebidas alcohólicas y no alcohólicas, snacks, memorias fotográficas"
    ]
  },
  
  {
    nombre: "Chiva Rumbera",
    categoria: "city",
    img: "/img/chiva.png",
    descripcion: "Fiesta típica.",
    descripcionExtra: "La fiesta típica cartagenera sobre ruedas: música, baile y buena energía recorriendo la ciudad en una chiva. Termina la noche en una reconocida discoteca, con la opción de regresar directo al hotel si prefieres.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "tour",
    tituloCompleto: "Rumba en Chiva",
    horarios: [
      "Hora de encuentro: 19:00-21:00 dependiendo del hotel (no aplica para hotel zona norte)",
      "Hora de finalización: 23:00 hrs"
    ],
    incluye: [
      "Música",
      "Entrada a discoteca",
      "Guía animador",
      "Recorrido panorámico por la ciudad"
    ],
    notas: [
      "Disfruta de un divertido recorrido en buses rumberos (chivas), termina en una reconocida discoteca de la ciudad",
      "La entrada a la discoteca es opcional; si no desea acceder, el bus lo regresa al hotel"
    ]
  },
  {
    nombre: "Barranquilla",
    categoria: "otras",
    img: "/img/barranquilla.png",
    descripcion: "Tour urbano.",
    descripcionExtra: "Un recorrido urbano por la capital del Atlántico, llena de cultura, ritmo y sabor caribeño. Conoce los monumentos a Shakira, el malecón del río y las famosas Letras de Barranquilla en un solo día de viaje.",
    mapa: "https://maps.google.com/?q=Barranquilla",
    tipo: "tour",
    tituloCompleto: "Exclusivo Tour Barranquilla 2.0: ¡Cultura, Ritmo y Sabor!",
    horarios: [
      "Recogida: 6:50 am",
      "Retorno: 7:00 pm",
      "Zona hotelera (Bocagrande, Laguito, Castillo Grande, Torre del Reloj, Zona Norte)"
    ],
    paradas: [
      "Sombrero Vueltiao",
      "Ventana al Mundo",
      "Monumento Sofía Vergara",
      "Caimán del Río (Malecón)",
      "Monumento Pies Descalzos (Shakira)",
      "Aleta del Tiburón",
      "Restaurante",
      "Centro Comercial El Único",
      "Galería 72, mercado souvenirs",
      "Letras de Barranquilla",
      "Castillo de Salgar",
      "Ventana de los Sueños",
      "Atardecer Muelle 1888"
    ],
    incluye: [
      "Desayuno típico",
      "Almuerzo a la carta (arroz con mariscos, arroz con camarones, pescado frito, pechuga de pollo a la plancha)",
      "Guía acompañante"
    ],
    noIncluye: ["Gastos no especificados"]
  },
  {
    nombre: "Santa Marta",
    categoria: "otras",
    img: "/img/santamarta.png",
    descripcion: "Playas y naturaleza.",
    descripcionExtra: "Un viaje de un día completo entre playas de ensueño y la historia colonial de Santa Marta. Paradas en Barranquilla, tiempo de piscina frente al mar y city tour por el centro histórico incluidos en el recorrido.",
    mapa: "https://maps.google.com/?q=Santa+Marta",
    tipo: "tour",
    opciones: [
      {
        nombre: "Tour Santa Marta Clásico",
        horarios: [
          "Salidas de lunes a domingo",
          "Recogida: 04:00 am",
          "Finalización: 09:00 pm",
          "Recogida en la puerta de los hoteles (Bocagrande, Laguito, Centro Histórico, Getsemaní y Zona Norte)"
        ],
        descripcionExtra: "Paradas en Barranquilla: Caimán del Río, Ventana al Mundo, Monumentos de Shakira, Aleta del Tiburón, Letras de Barranquilla. Desayuno frío a bordo (sándwich doble queso, doble jamón, jugo y fruta o arepa de huevo). Llegada a Santa Marta sector Rodadero para disfrutar de instalaciones de hotel con piscina frente a la playa. Almuerzo típico con pescado, patacón, arroz de coco y ensalada, con opción de pollo o carne a la plancha. City tour Santa Marta: visita Quinta San Pedro Alejandrino (entrada no incluida), estatua del Pibe Valderrama, Bahía, Marina, Parque de los Novios, Catedral, Plaza Bolívar, Calles Coloniales y letras de Santa Marta. Retorno a Cartagena aprox. 9:00pm. Guía acompañante durante todo el recorrido.",
        noIncluye: ["Gastos no especificados"]
      },
      {
        nombre: "Tour Santa Marta VIP",
      
        horarios: [
          "Salidas todos los días",
          "Recogida: 04:00 am",
          "Finalización: 09:00 pm",
          "Recogida en la puerta de los hoteles (Bocagrande, Laguito, Centro Histórico, Getsemaní y Zona Norte)"
        ],
        descripcionExtra: "Paradas en Barranquilla: Caimán del Río, Ventana al Mundo, Monumentos de Shakira, Aleta del Tiburón, Letras de Barranquilla. Desayuno frío a bordo. Llegada a Santa Marta sector Rodadero, desde donde se toma lancha hacia Playa Blanca de Santa Marta para disfrutar de las playas y deportes náuticos (no incluidos). Almuerzo típico con pescado, patacón, arroz de coco y ensalada, con opción de pollo o carne a la plancha en Playa Blanca. City tour Santa Marta: Quinta San Pedro Alejandrino (entrada incluida), estatua del Pibe Valderrama, Bahía, Marina, Parque de los Novios, Catedral, Plaza Bolívar, Calles Coloniales y letras de Santa Marta. Retorno a Cartagena aprox. 9:00pm. Guía acompañante durante todo el recorrido.",
        noIncluye: ["Gastos no especificados"]
      }
    ]
  },
  {
    nombre: "Tayrona",
    categoria: "otras",
    img: "/img/tayrona.png",
    descripcion: "Parque natural.",
    descripcionExtra: "Adéntrate en uno de los parques naturales más impresionantes de Colombia, entre senderos boscosos y playas vírgenes. Camina hasta Cabo San Juan del Guía y disfruta de un almuerzo típico rodeado de naturaleza pura.",
    mapa: "https://maps.google.com/?q=Tayrona",
    tipo: "tour",
    tituloCompleto: "Tour Parque Tayrona - Sector Cabo San Juan",
    horarios: [
      "Salidas Martes y Viernes",
      "Recogida: 04:00 am",
      "Finalización: 09:30 pm"
    ],
    incluye: [
      "Traslado de recogida (Bocagrande, Laguito, Centro Histórico, Getsemaní y Zona Norte) y retorno al hotel",
      "Paso por la ciudad de Barranquilla (sin paradas)",
      "Entradas al Parque Tayrona",
      "Charla educativa sobre la conservación del medio ambiente, en el Parque",
      "Caminata durante 2 horas por senderos boscosos, húmedos y tropicales",
      "Una (1) hidratación (agua)",
      "Paso por las playas de Arrecifes, Arenilla y La Piscina hasta llegar a Cabo San Juan del Guía",
      "Almuerzo en Arenilla: pescado, pollo, carne o vegetariano",
      "Retorno a Cartagena pasando por Santa Marta (sin paradas)",
      "Guía acompañante durante todo el paseo"
    ],
    noIncluye: ["Gastos no especificados"]
  },
  {
    nombre: "Cuatrimotos",
    categoria: "aventura",
    img: "/img/cuatrimoto.png",
    descripcion: "Aventura extrema.",
    descripcionExtra: "Vive la adrenalina de recorrer los alrededores de Cartagena manejando tu propia cuatrimoto todoterreno. Guías bilingües, seguro y almuerzo incluido hacen de esta aventura una de las más emocionantes de la ciudad.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "tour",
    precio: "515.000 COP",
    tituloCompleto: "Tour Cuatrimotos ATV",
    opciones: [
      { nombre: "1 Persona / 1 Moto", precio: "$Consultar" },
      { nombre: "2 Personas / 1 Moto", precio: "Consultar" }
    ],
    horarios: [
      "Horarios: 10am, 1pm, 3:45pm",
      "Recogida 1 hora antes en la iglesia San Pedro"
    ],
    incluye: [
      "Transporte",
      "Almuerzo",
      "Guardia de Seguridad",
      "Guías Bilingües",
      "Seguro"
    ]
  },
  {
    nombre: "Makarela",
    categoria: "botes",
    img: "/img/makarela.png",
    descripcion: "Bote privado.",
    descripcionExtra: "Un bote privado de 28 pies pensado para grupos pequeños que quieren navegar con total comodidad. Audio profesional, cojinería deportiva y capitán incluido para que solo te preocupes por disfrutar el mar.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "1.800.000 COP",
    especificaciones: [
      "Capacidad: 8 personas",
      "Eslora: 28 pies",
      "Motores: 2 Suzuki 115 hp",
      "Audio profesional",
      "Nevera para hielo",
      "Cojinería deportiva",
      "Capitán y asistente"
    ],
    notas: ["Los precios publicados son referencia de temporada baja, pueden variar según la fecha a cotizar"]
  },
  {
    nombre: "Santa María",
    categoria: "botes",
    img: "/img/santamaria.png",
    descripcion: "Experiencia privada.",
    descripcionExtra: "Una experiencia privada en el mar con sonido profesional, ducha de agua dulce y espacio para hasta 8 personas. Ideal para un día de paseo con amigos, con la tranquilidad de un bote bien equipado y asegurado.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "1.820.000 COP",
    tituloCompleto: "Santa María del Mar",
    especificaciones: [
      "Eslora: 29 pies",
      "Motores: 2 Mercury 115 hp",
      "Capacidad: 8 paxs",
      "Sonido JL Audio Marine profesional con Bluetooth",
      "Asoleadoras en consola central",
      "Ducha de agua dulce",
      "Inversor de corriente 110 voltios",
      "Escaleras para bajar al mar",
      "Nevera para hielo",
      "Pólizas de seguro para pasajeros"
    ],
    notas: [
      "Se permite Dj con RX conectada al sonido del bote y al inversor del bote",
      "Los precios publicados son referencia de temporada baja, pueden variar según la fecha a cotizar"
    ]
  },
  {
    nombre: "Recuca",
    categoria: "botes",
    img: "/img/recuca.png",
    descripcion: "Cómodo y seguro.",
    descripcionExtra: "Un bote cómodo y seguro para grupos de hasta 10 personas, con baño interno y buen equipo de música. Perfecto para quienes buscan un paseo por el mar sin sacrificar comodidad ni espacio a bordo.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "2.300.000 COP",
    tituloCompleto: "Bote Recuca",
    especificaciones: [
      "Capacidad: 10 personas",
      "Eslora: 32 pies",
      "Motores: 2 Suzuki 150 hp",
      "Asoleadora",
      "Equipo de música",
      "Baño interno",
      "Nevera para hielo",
      "Capitán y asistente"
    ]
  },
  {
    nombre: "Yate Ámbar II",
    categoria: "yates",
    img: "/img/yate-ambar.png",
    descripcion: "Lujo total.",
    descripcionExtra: "Lujo total en el mar Caribe, con dos cuartos con aire acondicionado, cocina completa y alfombra acuática. Un yate pensado para quienes buscan navegar con el máximo confort y todos los detalles cuidados.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "6.850.000 COP",
    tituloCompleto: "Yate Ámbar II - Características del Ambar II Luxury Yacht",
    especificaciones: [
      "Máximo 8 Personas",
      "Medida: 35 Pies",
      "2 cuartos con aire condicionado",
      "Cocina completa (Nevera, Horno Microondas, estufa eléctrica)",
      "TV",
      "Planta eléctrica",
      "Full sonido",
      "Alfombra Acuática",
      "Baño completo",
      "3 motores Suzuki 300 hp fuera de borda",
      "Capitán y ayudante calificados"
    ],
    opciones: [
      { nombre: "Paseo por la bahía, mínimo 2 horas", precio: "$1.600.000" }
    ],
    notas: ["Los precios publicados son referencia de temporada baja, pueden variar según la fecha a cotizar"]
  },
  {
    nombre: "Yate Azimut",
    categoria: "yates",
    img: "/img/yate-azimut.png",
    descripcion: "VIP.",
    descripcionExtra: "La experiencia VIP por excelencia: un yate de 46 pies con dos camarotes, sala interior y exterior, y solarium en proa. Ideal para grupos que buscan navegar con estilo, espacio y todas las comodidades a bordo.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "11.250.000 COP",
    tituloCompleto: "Azimut 46' Flybridge",
    especificaciones: [
      "Capacidad: 12 personas",
      "Motores CAT 450 hp c/u",
      "2 cuartos",
      "2 baños",
      "Cocina",
      "1 sala de estar en el interior",
      "1 sala de estar en el exterior",
      "1 solarium en proa",
      "1 Flybridge",
      "Toallas nuevas",
      "Chalecos Salvavidas",
      "Aire acondicionado en todos los compartimientos"
    ],
    incluye: [
      "Capitán",
      "1 Ayudante",
      "Combustible",
      "Juguetes acuáticos",
      "Equipo de sonido con bluetooth",
      "Nevera",
      "40 kg de hielo"
    ],
    notas: ["Los precios publicados son referencia de temporada baja, pueden variar según la fecha a cotizar"]
  },
  {
    nombre: "Yate Palladium 46ft",
    categoria: "yates",
    img: "/img/yate-palladium.png",
    descripcion: "Para grupos.",
    descripcionExtra: "Pensado para grupos grandes, este yate de 46 pies ofrece dos camarotes, cocina y sala de estar interior y exterior. Full música, equipo de sonido con bluetooth y toda la comodidad para tu día en el mar.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    precio: "8.130.000 COP",
    especificaciones: [
      "Motores Cummins 670 hp c/u",
      "2 camarotes",
      "2 baños",
      "Cocina",
      "1 sala de estar en el interior - TV",
      "1 sala de estar en el exterior - TV",
      "Toallas nuevas",
      "Chalecos Salvavidas",
      "Aire acondicionado",
      "Solarium en proa"
    ],
    incluye: [
      "Póliza de pasajeros",
      "Capitán",
      "1 Ayudante",
      "Combustible",
      "Full música",
      "Equipo de sonido con bluetooth",
      "Nevera",
      "22 kg de hielo"
    ],
    opciones: [
      { nombre: "Islas del Rosario y Barú", precio: "Consultar" },
      { nombre: "Tour Bahía 2 horas", precio: "Consultar" },
      { nombre: "Tour Bahía 3 horas", precio: "Consultar" },
      { nombre: "Tour Bahía 4 horas", precio: "Consultar" }
    ],
    notas: ["Los precios publicados son referencia de temporada baja, pueden variar según la fecha a cotizar"]
  },
  {
    nombre: "Apartaestudio 805",
    categoria: "alojamiento",
    img: "/img/aparta805.png",
    descripcion: "Moderno.",
    descripcionExtra: "Un apartaestudio moderno en Mirador del Laguito, con vista al lago y acceso a piscina, jacuzzi y gimnasio. Ideal para grupos pequeños que buscan comodidad y ubicación privilegiada durante su estadía en Cartagena.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    tituloCompleto: "Apartaestudio 805 - Mirador del Laguito",
    capacidad: "Capacidad máxima 4 personas",
    incluye: [
      "Cama doble",
      "2 sofá camas",
      "Aire acondicionado",
      "TV Smart 43”",
      "Vista al lago",
      "Cocina equipada",
      "1 baño amplio",
      "Edificio con piscina, jacuzzi, sauna, turco, gym",
      "Parqueadero"
    ],
    notas: [
      "Hay que pagar unas manillas de $10.000 por persona para el ingreso al edificio (cobro directo en recepción)",
      "Tarifa de Aseo $80.000 único pago, no es por noche"
    ]
  },
  {
    nombre: "Torres del Lago 601",
    categoria: "alojamiento",
    img: "/img/torres.png",
    descripcion: "Vista al mar.",
    descripcionExtra: "Un amplio apartamento con vista al mar a media cuadra de la playa, perfecto para grupos de hasta 8 personas. Piscina, gimnasio y parqueadero privado hacen de este lugar una base cómoda para explorar la ciudad.",
    mapa: "https://maps.google.com/?q=Cartagena",
    tipo: "alquiler",
    tituloCompleto: "Apartamento 601 - Torres del Lago",
    capacidad: "Capacidad 8 personas",
    incluye: [
      "2 habitaciones",
      "1 cama king",
      "1 cama sencilla",
      "1 cama doble y una cama sencilla con cama nido",
      "1 hamaca",
      "1 sofá cama",
      "Aire acondicionado en las habitaciones",
      "3 TV",
      "WiFi en todo el apartamento",
      "Cocina equipada",
      "2 baños amplios",
      "Lavadora",
      "Agua caliente",
      "A media cuadra de la playa",
      "Edificio con piscina y gimnasio",
      "Parqueadero privado dentro del edificio"
    ],
    notas: [
      "Se cobra un aseo de $80.000 no por noche, sino por toda la reserva",
      "Se cobran manillas al entrar al edificio de $80.000 por apartamento"
    ]
  },
  {
    nombre: "Isla del Encanto",
    categoria: "alojamiento",
    img: "/img/encanto.png",
    descripcion: "Hospedaje en isla.",
    descripcionExtra: "Un hospedaje único dentro de una isla en Barú, con alimentación completa y transporte incluido desde tu hotel. Ideal para quienes quieren dormir rodeados de mar y despertar frente a las Islas del Rosario.",
    mapa: "https://maps.google.com/?q=Isla+del+Encanto",
    tipo: "alquiler",
    tituloCompleto: "Alojamiento Isla del Encanto (Barú)",
    incluye: [
      "Cóctel de bienvenida",
      "Transporte (lancha o bus climatizado; no es elegible, aplican políticas)",
      "Alimentación completa (día del Check In incluye solo cena; día del Check out incluye desayuno y almuerzo)",
      "Uso de las instalaciones de la isla"
    ],
    horarios: [
      "Recogida en el hotel: 11:00 am",
      "Cita en el Muelle de las Bodeguitas puerta #1: 11:15 - 11:30 am",
      "Hora de salida a la isla: 12:00 pm"
    ],
    notas: ["En caso de no alcanzar los horarios estipulados, se debe coordinar un transporte extraordinario con costo adicional (terrestre)"]
  }
];

const tours    = catalogo.filter(i => i.tipo === "tour");
const alquiler = catalogo.filter(i => i.tipo === "alquiler");

const noticias = [
  { titulo:"Cartagena crece", img:"img/blog1.jpg", descripcion:"El turismo en la ciudad amurallada sigue en aumento, con más visitantes llegando cada mes a descubrir sus playas, su historia y su gente. Cartagena se consolida como uno de los destinos favoritos del Caribe." },
  { titulo:"Nuevos tours",    img:"img/blog2.jpg", descripcion:"Cada temporada llegan más experiencias para descubrir Cartagena y sus alrededores, desde islas paradisíacas hasta recorridos culturales. Una oferta cada vez más variada para todos los gustos y presupuestos." },
  { titulo:"Cultura",         img:"img/blog3.jpg", descripcion:"Explora la biodiversidad y la riqueza cultural que rodea a Cartagena, desde sus manglares hasta sus tradiciones ancestrales. Un destino que combina naturaleza, historia y color en cada rincón." }
];
// ================= UTILIDADES =================
const WA_NUMBER = "+573002459650";

function agruparPorCategoria(data) {
  return data.reduce((acc, item) => {
    if (!acc[item.categoria]) acc[item.categoria] = [];
    acc[item.categoria].push(item);
    return acc;
  }, {});
}

function formatearTitulo(cat) {
  return cat.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const WA_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ── Card genérica ──
function renderCard(item, onClickAttr) {
  const waMsg = encodeURIComponent(`Hola, me interesa: ${item.nombre}`);
  return `
    <div class="tour-card" ${onClickAttr}>
      <img src="${item.img}" alt="${item.nombre}" loading="lazy">
      <span class="card-badge">${formatearTitulo(item.categoria)}</span>
      <div class="overlay-text">
        <h3>${item.nombre}</h3>
        <span>${item.descripcion}</span>
      </div>
      <button class="card-wa"
        onclick="event.stopPropagation();window.open('https://wa.me/${WA_NUMBER}?text=${waMsg}','_blank')"
        aria-label="Reservar por WhatsApp">${WA_SVG}</button>
    </div>`;
}

// ================= NAV — clave ÚNICA = nombre =================
// openTour siempre guarda el NOMBRE como identificador.
// tour-detail.js lo lee con localStorage.getItem("tourSeleccionado").
function openTour(nombre) {
  localStorage.setItem("tourSeleccionado", nombre);
  window.location.href = "tour.html";
}

function openAlquiler(nombre) {
  localStorage.setItem("alquilerSeleccionado", nombre);
  window.location.href = "alquiler-detail.html";
}

function openNoticia(titulo) {
  // Pasamos el título directamente en el enlace (URL) usando ?titulo=
  window.location.href = "noticias-details.html?titulo=" + encodeURIComponent(titulo);
}

// ================= HOME =================
function loadHome() {
  const tourTrack = document.getElementById("tour-track");
  if (tourTrack) {
    // Cada card pasa su propio nombre — sin findIndex, sin índices
    tourTrack.innerHTML = tours.map(t =>
      renderCard(t, `onclick="openTour('${t.nombre}')"`)).join("");
  }

  const rentTrack = document.getElementById("rental-track");
  if (rentTrack) {
    rentTrack.innerHTML = alquiler.map(a =>
      renderCard(a, `onclick="openAlquiler('${a.nombre}')"`)).join("");
  }
  
}

// ================= SLIDER CORE =================
let tourIndex = 0;
let rentIndex = 0;

function getGap() { return 16; }
function getVisibleCards() { return window.innerWidth < 768 ? 1 : 3; }

function updateSlider(id, idx) {
  const track = document.getElementById(id);
  if (!track) return;
  const cards = track.querySelectorAll(".tour-card");
  if (!cards.length) return;
  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${idx * (cardWidth + getGap())}px)`;
}

function nextTour() {
  const track = document.getElementById("tour-track");
  if (!track) return;
  const max = Math.max(0, track.querySelectorAll(".tour-card").length - getVisibleCards());
  tourIndex = tourIndex < max ? tourIndex + 1 : 0;
  updateSlider("tour-track", tourIndex);
}
function prevTour() {
  tourIndex = Math.max(0, tourIndex - 1);
  updateSlider("tour-track", tourIndex);
}
function nextRent() {
  const track = document.getElementById("rental-track");
  if (!track) return;
  const max = Math.max(0, track.querySelectorAll(".tour-card").length - getVisibleCards());
  rentIndex = rentIndex < max ? rentIndex + 1 : 0;
  updateSlider("rental-track", rentIndex);
}
function prevRent() {
  rentIndex = Math.max(0, rentIndex - 1);
  updateSlider("rental-track", rentIndex);
}

setInterval(nextTour, 5000);
setInterval(nextRent, 6000);

// ================= NOTICIAS HOME =================
function loadNoticias() {
  const container = document.getElementById("tema-track");
  if (!container) return;
  container.innerHTML = noticias.map(n => `
    <div class="tour-card" onclick="openNoticia('${n.titulo}')">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy">
      <span class="card-badge">Noticia</span>
      <div class="overlay-text">
        <h3>${n.titulo}</h3>
        <span>${n.descripcion}</span>
      </div>
    </div>`).join("");
  setTimeout(() => updateSlider("tema-track", 0), 100);
}

// ================= PÁGINA NOTICIAS =================
function loadNoticiasPage() {
  const container = document.getElementById("lista-temas");
  if (!container) return;
  container.className = "blog-grid";
  container.innerHTML = noticias.map(n => `
    <div class="tour-card" onclick="openNoticia('${n.titulo}')">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy">
      <span class="card-badge">Noticia</span>
      <div class="overlay-text">
        <h3>${n.titulo}</h3>
        <span>${n.descripcion}</span>
      </div>
    </div>`).join("");
}

// ================= DETALLE NOTICIA =================
function loadNoticiaDetail() {
  // Leemos el parámetro "titulo" directamente desde la URL
  const parametros = new URLSearchParams(window.location.search);
  const titulo = parametros.get("titulo");

  if (!titulo) return; // Si alguien entra sin enlace, no carga nada
  
  const noticia = noticias.find(n => n.titulo === titulo);
  if (!noticia) return;
  
  const el = (id) => document.getElementById(id);
  if (el("titulo-noticia"))   el("titulo-noticia").textContent   = noticia.titulo;
  if (el("imagen-noticia"))  { el("imagen-noticia").src = noticia.img; el("imagen-noticia").alt = noticia.titulo; }
  if (el("contenido-noticia")) el("contenido-noticia").textContent = noticia.descripcion;
}

// ================= FILTROS =================
function renderFiltros(categorias, containerId, filterId) {
  const filterEl = document.getElementById(filterId);
  if (!filterEl) return;
  filterEl.innerHTML = ["todas", ...categorias].map(cat => `
    <button
      class="filter-btn ${cat === "todas" ? "active" : ""}"
      data-cat="${cat}"
      onclick="filtrarCatalogo('${containerId}','${cat}',this)"
    >${cat === "todas" ? "Todas" : formatearTitulo(cat)}</button>`
  ).join("");
}

function filtrarCatalogo(containerId, cat, btn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filterId = btn.closest(".filter-bar").id;
  document.querySelectorAll(`#${filterId} .filter-btn`).forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  container.querySelectorAll(".bloque-categoria").forEach(bloque => {
    bloque.style.display = (cat === "todas" || bloque.dataset.cat === cat) ? "" : "none";
  });
}

// ================= PÁGINA TOURS =================
function loadToursPage() {
  const container = document.getElementById("tours-container");
  if (!container) return;
  const grupos = agruparPorCategoria(tours);
  renderFiltros(Object.keys(grupos), "tours-container", "tours-filter");
  container.innerHTML = Object.entries(grupos).map(([cat, items]) => `
    <section class="bloque-categoria" data-cat="${cat}">
      <h2 class="titulo-categoria">${formatearTitulo(cat)}</h2>
      <div class="grid-categoria">
        ${items.map(item =>
          renderCard(item, `onclick="openTour('${item.nombre}')"`)).join("")}
      </div>
    </section>`).join("");
}

// ================= PÁGINA ALQUILER =================
function loadRentPage() {
  const container = document.getElementById("rental-container");
  if (!container) return;
  const grupos = agruparPorCategoria(alquiler);
  renderFiltros(Object.keys(grupos), "rental-container", "rental-filter");
  container.innerHTML = Object.entries(grupos).map(([cat, items]) => `
    <section class="bloque-categoria" data-cat="${cat}">
      <h2 class="titulo-categoria">${formatearTitulo(cat)}</h2>
      <div class="grid-categoria">
        ${items.map(item =>
          renderCard(item, `onclick="openAlquiler('${item.nombre}')"`)).join("")}
      </div>
    </section>`).join("");
}

// ================= INICIALIZACIÓN =================
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  loadHome();
  loadNoticias();
  loadToursPage();
  loadRentPage();
  loadNoticiasPage();
  loadNoticiaDetail();
});

// ================= WHATSAPP =================
function whatsapp() {
  window.open(`https://wa.me/${WA_NUMBER}?text=Hola,%20quiero%20reservar%20un%20tour%20en%20Cartagena`, "_blank");
}