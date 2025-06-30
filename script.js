const datosContinentes = {
    africa: { 
        nombre: 'África', 
        descripcion: 'África: Tierra de maravillas naturales sin fin.', 
        gradiente: 'linear-gradient(135deg, #ff6b35, #f7931e)', 
        destinos: [{ 
            nombre: 'Kenia (sabana africana con elefantes)', 
            ubicacion: 'Kenia', 
            calificacion: 0, 
            descripcion: 'Famoso por sus elefantes', 
            imagen: 'null/africa1.jpg' },
             { 
                nombre: ' Namibia (árbol quiver bajo cielo estrellado)', 
                ubicacion: 'Botswana', 
                calificacion: 0, 
                descripcion: 'Árbol quiver bajo cielo estrellado.', 
                imagen: 'africa/02.jpg' }, 
                { 
                    nombre: 'Sudáfrica', 
                    ubicacion: 'Sudafrica', 
                    calificacion: 0, 
                    descripcion: 'Es uno de los íconos de Sudáfrica', 
                    imagen: 'africa/03.jpg' }, 
                    { 
                        nombre: 'La Montaña de la Mesa (Table Mountain)', 
                        ubicacion: 'Tanzania', 
                        calificacion: 0, 
                        descripcion: 'Es uno de los íconos de Sudáfrica', 
                        imagen: 'africa/04.jpg' },
                        {
                            nombre: 'Desierto de Namibia', 
                            ubicacion: 'Zimbabwe/Zambia', 
                            calificacion: 0, 
                            descripcion: 'Las dunas de arena roja y salares, incluyendo el famoso Deadvlei.', 
                            imagen: 'africa/05.jpg' }] },
    asia: { 
        nombre: 'Asia', 
        descripcion: '', 
        gradiente: 'linear-gradient(135deg, #e91e63, #f06292)', 
        destinos: [{ 
            nombre: 'Monte Fuji', 
            ubicacion: 'India', 
            calificacion: 0, 
            descripcion: 'Es el pico más alto de la isla de Honshu y de todo Japón', 
            imagen: 'asia/03.jpg' }, 
            { 
                nombre: 'Filipinas', 
                ubicacion: 'Japón', 
                calificacion: 0, 
                descripcion: 'Las Filipinas son un paraíso tropical con una belleza natural impresionante.', 
                imagen: 'asia/02.jpg' }, 
                { 
                    nombre: 'Japón', 
                    ubicacion: 'Camboya', 
                    calificacion: 0, 
                    descripcion: 'El Gran Santuario de Kumano es un santuario sintoísta y un templo budista.', 
                    imagen: 'asia/01.jpg' }, 
                    { 
                        nombre: 'Singapur', 
                        ubicacion: 'Vietnam', 
                        calificacion: 0, 
                        descripcion: 'Marina Bay Sands', 
                        imagen: 'asia/04.jpg' }, 
                        { 
                            nombre: 'Filipinas', 
                            ubicacion: 'China', 
                            calificacion: 0, 
                            descripcion: 'Arrozales en terrazas de las cordilleras de Filipinas', 
                            imagen: 'asia/05.jpg' }] },
    europa: { 
        nombre: 'Europa', 
        descripcion: 'Europa: Cuna de civilizaciones.', 
        gradiente: 'linear-gradient(135deg, #3f51b5, #5c6bc0)', 
        destinos: [{ 
            nombre: 'Normandía, Francia,', 
            ubicacion: 'Noruega', 
            calificacion: 0, 
            descripcion: 'Acantilado de Etretat Aval, rocas y monumento natural del arco.', 
            imagen: 'europa/05.jpg' },
            { 
                nombre: 'Rusia', 
                ubicacion: 'Italia', 
                calificacion: 0, 
                descripcion: 'Moscú, Rusia. Catedral de San Basilio iluminada', 
                imagen: 'europa/02.jpg' }, 
                { 
                    nombre: 'Londres', 
                    ubicacion: 'Grecia', 
                    calificacion: 0, 
                    descripcion: 'Palacio de Westminster con la campana de la torre llamada Big Ben,', 
                    imagen: 'europa/03.jpg' }, 
                    { 
                        nombre: 'París',
                        ubicacion: 'Alemania', 
                        calificacion: 0, 
                        descripcion: 'Torre Eifel', 
                        imagen: 'europa/04.jpg' }, 
                        { 
                        
                        nombre: 'Italia', 
                        ubicacion: 'Francia', 
                        calificacion: 0, 
                        descripcion: 'Catedral de Milán', 
                        imagen: 'europa/01.jpg' }] },

    america: { nombre: 'América', 
        descripcion: 'América: Selvas y ciudades vibrantes.', 
        gradiente: 'linear-gradient(135deg, #4caf50, #66bb6a)', 
        destinos: [{ 
            nombre: 'Panamá', 
            ubicacion: 'Perú', 
            calificacion: 0, 
            descripcion: 'Avenida Balboa', 
            imagen: 'america/01.jpg' }, 
            { 
                nombre: 'Panamá', 
                ubicacion: 'Estados Unidos', 
                calificacion: 0, 
                descripcion: 'Casco Viejo', 
                imagen: 'america/02.jpg' }, 
                { 
                    nombre: 'Guatemala', 
                    ubicacion: 'Brasil', 
                    calificacion: 0, 
                    descripcion: 'Barcos atracados en un lago rodeado de montañas y volcanes',
                    imagen: 'america/03.jpg' }, 
                    { 
                        nombre: 'San Andres', 
                        ubicacion: 'México', 
                        calificacion: 0, 
                        descripcion: 'San Andrés es una maravillosa isla del Caribe ', 
                        imagen: 'america/04.jpg' }, 
                        { 
                            nombre: 'Panamá', 
                            ubicacion: 'Argentina/Chile', 
                            calificacion: 0, 
                            descripcion: 'Puerto de Balboa.',
                             imagen: 'america/05.jpg' }] },
    oceania: { 
        nombre: 'Oceanía', 
        descripcion: 'Oceanía: Paraísos insulares.', 
        gradiente: 'linear-gradient(135deg, #0288d1, #4fc3f7)', 
        destinos: [{ 
            nombre: 'Isla en la Polinesia Francesa', 
            ubicacion: 'Nueva Zelanda', 
            calificacion: 0, 
            descripcion: 'Bora Bora es una pequeña isla del Pacífico Sur al noroeste de Tahití en la Polinesia Francesa',
            imagen: 'oceania/04.jpg' },

            {
                 nombre: 'Nueva Guinea ', 
                 ubicacion: 'Australia', 
                 calificacion: 0, 
                 descripcion: 'segunda isla más grande del mundo y está ubicada al norte de Australia, en Melanesia, en el suroeste del Océano Pacífico', 
                 imagen: 'oceania/02.jpg' }, 
                 { 
                    nombre: 'Nueva Zelanda', 
                    ubicacion: 'Fiyi', 
                    calificacion: 0, 
                    descripcion: 'Es un lago interior de la Isla Sur de Nueva Zelanda', 
                    imagen: 'oceania/03.jpg' }, 
                    { 
                        nombre: 'Nueva Zelanda. ', 
                        ubicacion: 'Australia', 
                        calificacion: 0, 
                        descripcion: 'La Sky Tower es el edificio más alto de Nueva Zelanda. ', 
                        imagen: 'oceania/01.jpg' }, 
                         { 
                            nombre: 'Isla Fiyi', 
                            ubicacion: 'Es famoso por sus paisajes escabrosos, las playas bordeadas de palmeras y los arrecifes de coral ', 
                            calificacion: 0, 
                            descripcion: 'Volcanes activos', 
                            imagen: 'oceania/05.jpg' }] }
};

const contenedorDestinos = document.querySelector('.contenedor-destinos');
const floatingCards = document.querySelector('.floating-cards-container');
const modalDetalle = document.querySelector('#modal-detalle');
const cerrarModal = document.querySelector('#modal-detalle .boton-cerrar');
const modalImagen = document.querySelector('#modal-imagen');
const modalTitulo = document.querySelector('#modal-titulo');
const modalDescripcion = document.querySelector('#modal-descripcion');
const modalRating = document.querySelector('#modal-rating');
const modalLike = document.querySelector('#modal-like');
const modalComentario = document.querySelector('#modal-comentario');
const modalEnviar = document.querySelector('#modal-enviar');
const modalComentarios = document.querySelector('#modal-comentarios');
const iconoBusqueda = document.querySelector('.icono-busqueda');
const modalBuscar = document.querySelector('#modal-buscar');
const campoBusqueda = document.querySelector('#campoBusqueda');
const cerrarModales = document.querySelectorAll('.boton-cerrar');
const seccionHero = document.querySelector('.seccion-hero');
const integrantesBar = document.querySelector('.integrantes-bar');
const enlaceContacto = document.querySelector('a[href="#Contacto"]');
const modalContacto = document.querySelector('#modal-contacto');
const contactoNombre = document.querySelector('#contacto-nombre');
const contactoEmail = document.querySelector('#contacto-email');
const contactoComentario = document.querySelector('#contacto-comentario');
const contactoEnviar = document.querySelector('#contacto-enviar');
const floatingIntegrantesModal = document.querySelector('.floating-integrantes-modal');
const integrantesContenido = document.querySelector('#integrantes-contenido');
const tituloPrincipalLeft = document.querySelector('.titulo-principal-left');
const floatingFavoritesModal = document.querySelector('.floating-favorites-modal');
const ratingModal = document.querySelector('.rating-modal');
const ratingTitulo = document.querySelector('#rating-titulo');
const ratingStars = document.querySelector('#rating-stars');
const ratingClose = document.querySelector('.rating-close');

let continenteActual = 'africa';
let destinoSeleccionado = null;
let destinoCalificando = null;

let integrantes = JSON.parse(localStorage.getItem('integrantes')) || [];
let calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || {};

function renderizarDestinos(continente) {
    contenedorDestinos.innerHTML = '';
    datosContinentes[continente].destinos.forEach((destino, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-destino';
        tarjeta.innerHTML = `
            <h3 class="titulo-tarjeta">${destino.nombre}</h3>
            <div class="imagen-tarjeta" style="background-image: url('${destino.imagen}');"></div>
            <div class="calificacion-tarjeta" data-destino="${destino.nombre}">
                ${renderStars(destino.nombre, calificaciones[destino.nombre] || 0)}
            </div>
            <p class="descripcion-tarjeta">${destino.descripcion}</p>
        `;
        tarjeta.addEventListener('click', (e) => {
            if (!e.target.classList.contains('rating-star')) {
                mostrarModal(destino);
                if (!integrantes.includes(destino.imagen)) {
                    integrantes.push(destino.imagen);
                    localStorage.setItem('integrantes', JSON.stringify(integrantes));
                    renderIntegrantesBar();
                }
            }
        });
        contenedorDestinos.appendChild(tarjeta);
    });
    seccionHero.style.backgroundImage = `url('${datosContinentes[continente].destinos[0].imagen}')`;
    tituloPrincipalLeft.textContent = datosContinentes[continente].nombre;
    agregarListenersEstrellas();
}

function renderStars(destinoNombre, calificacion) {
    let stars = '<div class="rating-stars">';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="rating-star${i <= calificacion ? '' : ' vacia'} rating-star" data-value="${i}" data-destino="${destinoNombre}">★</span>`;
    }
    stars += '</div>';
    return stars;
}

function mostrarModal(destino) {
    destinoSeleccionado = destino;
    modalImagen.style.backgroundImage = `url('${destino.imagen}')`;
    modalTitulo.textContent = destino.nombre;
    modalDescripcion.textContent = destino.descripcion;
    modalRating.innerHTML = renderStars(destino.nombre, calificaciones[destino.nombre] || 0);
    modalLike.textContent = integrantes.includes(destino.imagen) ? 'Quitar Me gusta' : 'Me gusta';
    modalComentarios.innerHTML = '<h3>Comentarios:</h3>' + (destino.comentarios ? destino.comentarios.map(c => `<p>${c}</p>`).join('') : '');
    modalDetalle.style.display = 'block';
}

modalLike.addEventListener('click', () => {
    if (integrantes.includes(destinoSeleccionado.imagen)) {
        integrantes = integrantes.filter(f => f !== destinoSeleccionado.imagen);
        modalLike.textContent = 'Me gusta';
    } else {
        integrantes.push(destinoSeleccionado.imagen);
        modalLike.textContent = 'Quitar Me gusta';
    }
    localStorage.setItem('integrantes', JSON.stringify(integrantes));
    renderIntegrantesBar();
});

modalEnviar.addEventListener('click', () => {
    const comentario = modalComentario.value.trim();
    if (comentario) {
        if (!destinoSeleccionado.comentarios) destinoSeleccionado.comentarios = [];
        destinoSeleccionado.comentarios.push(comentario);
        modalComentarios.innerHTML = '<h3>Comentarios:</h3>' + destinoSeleccionado.comentarios.map(c => `<p>${c}</p>`).join('');
        modalComentario.value = '';
    }
});

cerrarModal.addEventListener('click', () => {
    modalDetalle.style.display = 'none';
});

iconoBusqueda.addEventListener('click', () => {
    modalBuscar.style.display = 'block';
    campoBusqueda.focus();
});

campoBusqueda.addEventListener('input', (e) => {
    renderizarResultadosBusqueda(e.target.value);
});

cerrarModales.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.closest('.modal').style.display = 'none';
        if (boton.closest('#modal-buscar')) {
            campoBusqueda.value = '';
            document.querySelector('#resultadosBusqueda').innerHTML = '';
        }
    });
});

function renderizarResultadosBusqueda(termino) {
    const resultadosBusqueda = document.querySelector('#resultadosBusqueda');
    resultadosBusqueda.innerHTML = '';
    if (!termino) return;

    const resultados = [];
    Object.values(datosContinentes).forEach(continente => {
        continente.destinos.forEach(destino => {
            if (destino.nombre.toLowerCase().includes(termino.toLowerCase())) {
                resultados.push({ ...destino, continente: continente.nombre });
            }
        });
    });

    if (resultados.length === 0) {
        resultadosBusqueda.innerHTML = '<p>No se encontraron destinos.</p>';
        return;
    }

    resultados.forEach(destino => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-destino';
        tarjeta.innerHTML = `
            <h3 class="titulo-tarjeta">${destino.nombre}</h3>
            <div class="imagen-tarjeta" style="background-image: url('${destino.imagen}');"></div>
            <div class="calificacion-tarjeta" data-destino="${destino.nombre}">
                ${renderStars(destino.nombre, calificaciones[destino.nombre] || 0)}
            </div>
            <p class="descripcion-tarjeta">${destino.continente} - ${destino.ubicacion}</p>
            <p class="descripcion-tarjeta">${destino.descripcion}</p>
        `;
        tarjeta.addEventListener('click', (e) => {
            if (!e.target.classList.contains('rating-star')) {
                mostrarModal(destino);
                if (!integrantes.includes(destino.imagen)) {
                    integrantes.push(destino.imagen);
                    localStorage.setItem('integrantes', JSON.stringify(integrantes));
                    renderIntegrantesBar();
                }
            }
        });
        resultadosBusqueda.appendChild(tarjeta);
    });
    agregarListenersEstrellas();
}

const continentes = ['africa', 'asia', 'europa', 'america', 'oceania'];
const iconos = ['🌍', '⛩️', '🏰', '🗽', '🏝️'];
continentes.forEach((continente, index) => {
    const card = document.createElement('div');
    card.className = 'floating-card';
    card.innerHTML = `<span class="floating-card-icon">${iconos[index]}</span>`;
    card.style.background = datosContinentes[continente].gradiente;
    card.addEventListener('click', () => {
        continenteActual = continente;
        seccionHero.style.backgroundImage = `url('${datosContinentes[continente].destinos[0].imagen}')`;
        document.querySelector('.subtitulo').textContent = datosContinentes[continente].descripcion;
        renderizarDestinos(continente);
        card.classList.add('selected');
        setTimeout(() => card.classList.remove('selected'), 500);
    });
    floatingCards.appendChild(card);
});

function renderIntegrantesBar() {
    integrantesBar.innerHTML = '<span>Integrantes</span>';
    integrantesBar.addEventListener('click', () => {
        mostrarModalIntegrantes();
    });
}

function mostrarModalIntegrantes() {
    floatingIntegrantesModal.style.display = 'block';
    integrantesContenido.innerHTML = integrantes.map(i =>
        `<div class="integrante-item">
            <strong>${i.nombre}</strong><br>
            <span>${i.gmail}</span>
        </div>`
    ).join('');
}

enlaceContacto.addEventListener('click', (e) => {
    e.preventDefault();
    modalContacto.style.display = 'block';
});

contactoEnviar.addEventListener('click', () => {
    if (contactoNombre.value.trim() && contactoEmail.value.trim() && contactoComentario.value.trim()) {
        contactoNombre.value = '';
        contactoEmail.value = '';
        contactoComentario.value = '';
        modalContacto.style.display = 'none';
        mostrarNotificacion('Mensaje enviado correctamente');
    } else {
        mostrarNotificacion('Por favor, completa todos los campos');
    }
});

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    document.querySelector('.contenedor-notificaciones').appendChild(notificacion);
    setTimeout(() => notificacion.remove(), 3000);
}

function generarParticulas() {
    const particulas = document.querySelector('.particulas');
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animationDelay = `${Math.random() * 6}s`;
        particulas.appendChild(particula);
    }
}

// Event listener global para abrir el modal de calificación
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('rating-star')) {
        e.stopPropagation(); // Evita que se abra el modal de detalle
        const destinoNombre = e.target.getAttribute('data-destino');
        mostrarModalCalificacion(destinoNombre);
    }
});

// Mostrar el modal de calificación y resaltar las estrellas actuales
function mostrarModalCalificacion(destinoNombre) {
    destinoCalificando = destinoNombre;
    ratingTitulo.textContent = `Califica: ${destinoNombre}`;
    const calificacionActual = calificaciones[destinoNombre] || 0;
    const stars = ratingStars.querySelectorAll('.rating-star');
    stars.forEach((star, index) => {
        const value = index + 1;
        star.className = `rating-star${value <= calificacionActual ? '' : ' vacia'}`;
        star.setAttribute('data-value', value);
        star.setAttribute('data-destino', destinoNombre);
    });
    ratingModal.style.display = 'block';
}

// Event listener para calificar dentro del modal
ratingStars.addEventListener('click', (e) => {
    if (e.target.classList.contains('rating-star')) {
        const value = parseInt(e.target.getAttribute('data-value'));
        calificaciones[destinoCalificando] = value;
        localStorage.setItem('calificaciones', JSON.stringify(calificaciones));
        // Actualizar todas las instancias de este destino
        document.querySelectorAll(`[data-destino="${destinoCalificando}"] .rating-stars`).forEach(el => {
            el.innerHTML = renderStars(destinoCalificando, value);
        });
        ratingModal.style.display = 'none';
        mostrarNotificacion(`Calificación guardada: ${value}/5`);
    }
});

// Cerrar el modal
ratingClose.addEventListener('click', () => {
    ratingModal.style.display = 'none';
});
ratingModal.addEventListener('click', (e) => {
    if (e.target === ratingModal) {
        ratingModal.style.display = 'none';
    }
});

function agregarListenersEstrellas() {
    document.querySelectorAll('.calificacion-tarjeta .rating-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se abra el modal de detalle
            const destinoNombre = star.getAttribute('data-destino');
            const value = parseInt(star.getAttribute('data-value'));
            calificaciones[destinoNombre] = value;
            localStorage.setItem('calificaciones', JSON.stringify(calificaciones));
            // Actualiza todas las instancias de estrellas de ese destino
            document.querySelectorAll(`[data-destino="${destinoNombre}"] .rating-stars`).forEach(el => {
                el.innerHTML = renderStars(destinoNombre, value);
            });
            agregarListenersEstrellas(); // Reasigna los listeners tras el re-render
        });
    });
}

renderizarDestinos(continenteActual);
renderIntegrantesBar();
generarParticulas();