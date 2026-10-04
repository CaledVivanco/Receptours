// tour-detail.js
// Requiere que main.js (con el array `tours`) se cargue ANTES de este script.
// Lee el nombre guardado por openTour() en main.js

const WA_NUMBER_DETAIL = "+573002459650";

// ── Helpers de render ──
function renderItems(ul, items) {
  if (!ul) return;
  if (!items || !items.length) { ul.innerHTML = ""; return; }
  ul.innerHTML = items.map(i => `<li>${i}</li>`).join("");
}

function renderListaHTML(items) {
  if (!items || !items.length) return "";
  return `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function renderSeccion(titulo, items, claseExtra = "") {
  if (!items || !items.length) return "";
  return `
    <section class="tour-section ${claseExtra}">
      <h2>${titulo}</h2>
      ${renderListaHTML(items)}
    </section>`;
}

function renderOpciones(opciones) {
  if (!opciones || !opciones.length) return "";
  return `
    <section class="tour-section detalle-opciones">
      <h2>Opciones</h2>
      ${opciones.map(op => `
        <div class="opcion-card">
          <h3>${op.nombre}</h3>
          ${op.precio ? `<p class="opcion-precio">${op.precio}</p>` : ""}
          ${op.precioNinos ? `<p class="opcion-precio-ninos">${op.precioNinos}</p>` : ""}
          ${op.descripcionExtra ? `<p>${op.descripcionExtra}</p>` : ""}
          ${op.incluye ? `<h4>Incluye</h4>${renderListaHTML(op.incluye)}` : ""}
          ${op.noIncluye ? `<h4>No incluye</h4>${renderListaHTML(op.noIncluye)}` : ""}
          ${op.horarios ? `<h4>Horarios</h4>${renderListaHTML(op.horarios)}` : ""}
          ${op.notas ? `<h4>Notas</h4>${renderListaHTML(op.notas)}` : ""}
        </div>
      `).join("")}
    </section>`;
}

function renderMenu(menu) {
  if (!menu) return "";
  let html = `<section class="tour-section detalle-menu"><h2>Menú</h2>`;
  if (menu.primeraEntrada) html += `<h3>Primera entrada</h3>${renderListaHTML(menu.primeraEntrada)}`;
  if (menu.segundaEntrada) html += `<h3>Segunda entrada</h3>${renderListaHTML(menu.segundaEntrada)}`;
  if (menu.platoPrincipal) html += `<h3>Plato principal (elegir)</h3>${renderListaHTML(menu.platoPrincipal)}`;
  if (menu.postre) html += `<p><strong>Postre:</strong> ${menu.postre}</p>`;
  html += `</section>`;
  return html;
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("tourSeleccionado");
  const tour   = nombre ? tours.find(t => t.nombre === nombre) : null;

  if (!tour) {
    document.getElementById("title").textContent       = "Tour no encontrado";
    document.getElementById("description").textContent = "Vuelve al catálogo e intenta de nuevo.";
    return;
  }

  document.title = `${tour.nombre} — Cartagena Trips`;

  const hero = document.getElementById("hero");
  if (hero) hero.style.backgroundImage = `url('${tour.img}')`;

  document.getElementById("title").textContent       = tour.tituloCompleto || tour.nombre;
  document.getElementById("description").textContent = tour.descripcionExtra || tour.descripcion;

  // Precio (reemplaza el subtítulo del hero)
  const priceEl = document.getElementById("price");
  if (priceEl) {
    let priceHTML = "";
    if (tour.precio) {
      priceHTML += tour.precio;
      if (tour.precioUSD) priceHTML += ` (${tour.precioUSD})`;
    } else {
      priceHTML = tour.descripcion;
    }
    if (tour.precioNinos) priceHTML += ` · ${tour.precioNinos}`;
    priceEl.textContent = priceHTML;
  }

  // Requisitos (debajo de la descripción, si existen)
  if (tour.requisitos) {
    const descEl = document.getElementById("description");
    const reqP = document.createElement("p");
    reqP.className = "requisitos";
    reqP.textContent = `⚠️ ${tour.requisitos}`;
    descEl.insertAdjacentElement("afterend", reqP);
  }

  // Itinerario / horarios -> #itinerary
  renderItems(document.getElementById("itinerary"), tour.horarios);
  const itinerarySection = document.getElementById("itinerary")?.closest(".tour-section");
  if (itinerarySection && (!tour.horarios || !tour.horarios.length)) {
    itinerarySection.style.display = "none";
  }

  // Incluye -> #includes
  renderItems(document.getElementById("includes"), tour.incluye);
  const includesSection = document.getElementById("includes")?.closest(".tour-section");
  if (includesSection && (!tour.incluye || !tour.incluye.length)) {
    includesSection.style.display = "none";
  }

  // Secciones adicionales: se insertan antes de la sección de Ubicación
  const mapSection = document.getElementById("map")?.closest(".tour-section");
  if (mapSection) {
    let extraHTML = "";
    extraHTML += renderSeccion("No incluye", tour.noIncluye, "detalle-no-incluye");
    extraHTML += renderSeccion("Paradas", tour.paradas, "detalle-paradas");
    extraHTML += renderSeccion("Beneficios", tour.beneficios, "detalle-beneficios");
    extraHTML += renderSeccion("Especificaciones", tour.especificaciones, "detalle-especificaciones");
    extraHTML += renderMenu(tour.menu);
    extraHTML += renderOpciones(tour.opciones);
    extraHTML += renderSeccion("Notas", tour.notas, "detalle-notas");
    if (tour.capacidad) {
      extraHTML += `<section class="tour-section detalle-capacidad"><h2>Capacidad</h2><p>${tour.capacidad}</p></section>`;
    }
    if (extraHTML) {
      mapSection.insertAdjacentHTML("beforebegin", extraHTML);
    }
  }

  // Mapa
  const mapFrame = document.getElementById("map");
  if (mapFrame && tour.mapa) {
    mapFrame.src = tour.mapa.replace(
      "https://maps.google.com/?q=",
      "https://maps.google.com/maps?q="
    ) + "&output=embed";
  }

  // Botón de reserva
  const btn = document.getElementById("reserveBtn");
  if (btn) {
    const msg = encodeURIComponent(`Hola, quiero reservar el tour: ${tour.nombre}`);
    btn.onclick = () => window.open(`https://wa.me/${WA_NUMBER_DETAIL}?text=${msg}`, "_blank");
  }
});