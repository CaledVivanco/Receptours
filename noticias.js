// ================= NOTICIAS DATA =================
const noticias = [
  {
    titulo: "Cartagena crece en turismo",
    img: "img/blog1.jpg",
    descripcion: "El turismo en Cartagena ha aumentado significativamente en 2026.",
    contenido: "Aquí va el artículo completo de la noticia con mucho más detalle..."
  },
  {
    titulo: "Nuevos tours en el Caribe",
    img: "img/blog2.jpg",
    descripcion: "Se han agregado nuevas experiencias turísticas en las islas.",
    contenido: "Texto completo del artículo explicando los nuevos tours..."
  },
  {
    titulo: "Cultura y patrimonio",
    img: "img/blog3.jpg",
    descripcion: "Cartagena refuerza su identidad cultural.",
    contenido: "Desarrollo completo sobre la cultura y patrimonio..."
  }
];


// ================= ABRIR DETALLE =================
function openNoticia(index) {
  window.location.href = `noticias-details.html?noticia=${index}`;
}


// ================= LISTAR NOTICIAS =================
function loadNoticiasPage() {
  const container = document.getElementById("lista-temas");
  if (!container) return;

  container.innerHTML = noticias.map((n, index) => `
    <div class="tour-card" onclick="openNoticia(${index})">
      <img src="${n.img}" alt="${n.titulo}">
      <div class="overlay-text">
        <h3>${n.titulo}</h3>
        <span>${n.descripcion}</span>
      </div>
    </div>
  `).join("");
}


// ================= DETAIL =================
function loadNoticiaDetail(){
  const tituloGuardado = localStorage.getItem("noticiaSeleccionada");
  if (!tituloGuardado) return;

  const noticia = noticias.find(n => n.titulo === tituloGuardado);
  if (!noticia) return;

  // IDs actualizados para que hagan match exacto con tu HTML
  const title = document.getElementById("titulo-noticia");
  const image = document.getElementById("imagen-noticia");
  const content = document.getElementById("contenido-noticia");

  if (title) title.textContent = noticia.titulo;
  if (image) {
    image.src = noticia.img;
    image.alt = noticia.titulo;
  }
  if (content) content.textContent = noticia.descripcion;
}

  // ================= BOTONES COMPARTIR =================
  const url = encodeURIComponent(window.location.href);
  const texto = encodeURIComponent(noticia.titulo + " - Cartagena Trips");

  const btnWhatsapp = document.getElementById("btn-whatsapp");
  if (btnWhatsapp) {
    btnWhatsapp.onclick = () => {
      window.open(`https://wa.me/?text=${texto}%20${url}`, "_blank");
    };
  }

  const btnFacebook = document.getElementById("btn-facebook");
  if (btnFacebook) {
    btnFacebook.onclick = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    };
  }



// ================= INIT GENERAL =================
document.addEventListener("DOMContentLoaded", () => {
  // funciones globales (solo si existen)
  if (typeof showSlide === "function") showSlide(0);
  if (typeof loadHome === "function") loadHome();
  if (typeof loadNoticias === "function") loadNoticias();
  if (typeof loadToursPage === "function") loadToursPage();
  if (typeof loadRentPage === "function") loadRentPage();

  // noticias
  loadNoticiasPage();
  loadNoticiaDetail();
});