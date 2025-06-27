const datosContinentes = {
    africa: {
        nombre: 'África',
        descripcion: 'África: Tierra de maravillas naturales sin fin. Desde la vida salvaje hasta las culturas ancestrales. Prepárate para vivir tu aventura.',
        gradiente: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff8c42)',
        destinos: [
            { nombre: 'Parque Nacional Amboseli', ubicacion: 'Kenya', calificacion: 0, descripcion: 'Famoso por sus elefantes y vistas del Monte Kilimanjaro', imagen: './africa/01.jpg' },
            { nombre: 'Safari Africano', ubicacion: 'Botswana', calificacion: 0, descripcion: 'Experiencia de safari premium en el delta del Okavango', imagen: './africa/02.jpg' },
            { nombre: 'Bajo Zambezi', ubicacion: 'Zambia', calificacion: 0, descripcion: 'Safaris acuáticos y terrestres en el valle del Zambezi', imagen: './africa/03.jpg' },
            { nombre: 'Monte Kilimanjaro', ubicacion: 'Tanzania', calificacion: 0, descripcion: 'La montaña más alta de África, una aventura épica', imagen: './africa/04.jpg' },
            { nombre: 'Cataratas Victoria', ubicacion: 'Zimbabwe/Zambia', calificacion: 0, descripcion: 'Una de las cascadas más espectaculares del mundo', imagen: './africa/05.jpg' }
        ]
    },
    asia: {
        nombre: 'Asia',
        descripcion: 'Asia: Continente de contrastes, desde templos milenarios hasta ciudades futuristas. Descubre la diversidad cultural más rica del planeta.',
        gradiente: 'linear-gradient(135deg, #e91e63, #f06292, #ff4081)',
        destinos: [
            { nombre: 'Templos de Angkor', ubicacion: 'Camboya', calificacion: 0, descripcion: 'Complejo de templos más grande del mundo', imagen: './asia/01.jpg' },
            { nombre: 'Monte Fuji', ubicacion: 'Japón', calificacion: 0, descripcion: 'Símbolo sagrado y montaña más emblemática de Japón', imagen: './asia/02.jpg' },
            { nombre: 'Taj Mahal', ubicacion: 'India', calificacion: 0, descripcion: 'Monumento al amor eterno, joya de la arquitectura mogol', imagen: './asia/03.jpg' },
            { nombre: 'Halong Bay', ubicacion: 'Vietnam', calificacion: 0, descripcion: 'Bahía de miles de islotes de piedra caliza', imagen: './asia/04.jpg' },
            { nombre: 'Gran Muralla China', ubicacion: 'China', calificacion: 0, descripcion: 'La construcción humana más larga del mundo', imagen: './asia/05.jpg' }
        ]
    },
    europa: {
        nombre: 'Europa',
        descripcion: 'Europa: Cuna de civilizaciones, arte y cultura. Desde castillos medievales hasta capitales cosmopolitas, cada rincón cuenta una historia.',
        gradiente: 'linear-gradient(135deg, #3f51b5, #5c6bc0, #7986cb)',
        destinos: [
            { nombre: 'Torre Eiffel', ubicacion: 'Francia', calificacion: 0, descripcion: 'Símbolo icónico de París y del romanticismo', imagen: './europa/01.jpg' },
            { nombre: 'Coliseo Romano', ubicacion: 'Italia', calificacion: 0, descripcion: 'Anfiteatro más famoso del mundo romano', imagen: './europa/02.jpg' },
            { nombre: 'Santorini', ubicacion: 'Grecia', calificacion: 0, descripcion: 'Isla volcánica con atardeceres únicos', imagen: './europa/03.jpg' },
            { nombre: 'Neuschwanstein', ubicacion: 'Alemania', calificacion: 0, descripcion: 'El famoso castillo de cuento de hadas de Baviera', imagen: './europa/04.jpg' },
            { nombre: 'Aurora Boreal', ubicacion: 'Noruega', calificacion: 0, descripcion: 'Espectáculo natural de luces en el cielo ártico', imagen: './europa/05.jpg' }
        ]
    },
    america: {
        nombre: 'América',
        descripcion: 'América: Desde las selvas del Amazonas hasta las ciudades vibrantes, un continente de aventuras y diversidad.',
        gradiente: 'linear-gradient(135deg, #4caf50, #66bb6a, #81c784)',
        destinos: [
            { nombre: 'Machu Picchu', ubicacion: 'Perú', calificacion: 0, descripcion: 'Ciudad inca en lo alto de los Andes', imagen: './america/01.jpg' },
            { nombre: 'Gran Cañón', ubicacion: 'Estados Unidos', calificacion: 0, descripcion: 'Maravilla natural con paisajes impresionantes', imagen: './america/02.jpg' },
            { nombre: 'Amazonas', ubicacion: 'Brasil', calificacion: 0, descripcion: 'La selva tropical más grande del mundo', imagen: './america/03.jpg' },
            { nombre: 'Chichén Itzá', ubicacion: 'México', calificacion: 0, descripcion: 'Antigua ciudad maya con pirámides impresionantes', imagen: './america/04.jpg' },
            { nombre: 'Patagonia', ubicacion: 'Argentina/Chile', calificacion: 0, descripcion: 'Paisajes glaciares y montañas espectaculares', imagen: './america/05.jpg' }
        ]
    },
    oceania: {
        nombre: 'Oceanía',
        descripcion: 'Oceanía: Paraísos insulares, arrecifes de coral y culturas únicas en el corazón del Pacífico.',
        gradiente: 'linear-gradient(135deg, #0288d1, #4fc3f7, #81d4fa)',
        destinos: [
            { nombre: 'Gran Barrera de Coral', ubicacion: 'Australia', calificacion: 0, descripcion: 'El mayor sistema de arrecifes de coral del mundo', imagen: './oceania/01.jpg' },
            { nombre: 'Uluru', ubicacion: 'Australia', calificacion: 0, descripcion: 'Formación rocosa sagrada en el desierto australiano', imagen: './oceania/02.jpg' },
            { nombre: 'Islas Fiyi', ubicacion: 'Fiyi', calificacion: 0, descripcion: 'Playas de arena blanca y aguas cristalinas', imagen: './oceania/03.jpg' },
            { nombre: 'Milford Sound', ubicacion: 'Nueva Zelanda', calificacion: 0, descripcion: 'Fiordo espectacular con acantilados y cascadas', imagen: './oceania/04.jpg' },
            { nombre: 'Tongariro', ubicacion: 'Nueva Zelanda', calificacion: 0, descripcion: 'Parque nacional con volcanes activos y paisajes únicos', imagen: './oceania/05.jpg' }
        ]
    }
};

const contenedorDestinos = document.querySelector('.contenedor-destinos');
const floatingCards = document.querySelector('.floating-cards');
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
const favoritesBar = document.querySelector('.favorites-bar');
const enlaceContacto = document.querySelector('a[href="#Contacto"]');
const modalContacto = document.querySelector('#modal-contacto');
const contactoNombre = document.querySelector('#contacto-nombre');
const contactoEmail = document.querySelector('#contacto-email');
const contactoComentario = document.querySelector('#contacto-comentario');
const contactoEnviar = document.querySelector('#contacto-enviar');
const modalFavoritos = document.querySelector('#modal-favoritos');
const favoritosContenido = document.querySelector('#favoritos-contenido');

let continenteActual = 'africa';
let destinoSeleccionado = null;

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || {};

function renderizarDestinos(continente) {
    contenedorDestinos.innerHTML = '';
    datosContinentes[continente].destinos.forEach((destino, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-destino';
        tarjeta.style.animationDelay = `${index * 2}s`;
        tarjeta.innerHTML = `
            <div class="imagen-tarjeta" style="background-image: url('${destino.imagen}');"></div>
            <h3 class="titulo-tarjeta">${destino.nombre}</h3>
            <div class="calificacion-tarjeta" data-destino="${destino.nombre}">
                ${renderStars(destino.nombre, calificaciones[destino.nombre] || 0)}
            </div>
            <p class="descripcion-tarjeta">${destino.descripcion}</p>
        `;
        tarjeta.addEventListener('click', () => {
            mostrarModal(destino);
            if (!favoritos.includes(destino.imagen)) {
                favoritos.push(destino.imagen);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                renderFavorites();
            }
        });
        contenedorDestinos.appendChild(tarjeta);
    });
    seccionHero.style.backgroundImage = `url('${datosContinentes[continente].destinos[0].imagen}')`;
}

function renderStars(destinoNombre, calificacion) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="estrella${i <= calificacion ? '' : '-vacia'} estrella" data-value="${i}" data-destino="${destinoNombre}">★</span>`;
    }
    return stars;
}

function mostrarModal(destino) {
    destinoSeleccionado = destino;
    modalImagen.style.backgroundImage = `url('${destino.imagen}')`;
    modalTitulo.textContent = destino.nombre;
    modalDescripcion.textContent = destino.descripcion;
    modalRating.innerHTML = renderStars(destino.nombre, calificaciones[destino.nombre] || 0);
    modalLike.textContent = favoritos.includes(destino.imagen) ? 'Quitar Me gusta' : 'Me gusta';
    modalComentarios.innerHTML = '<h3>Comentarios:</h3>' + (destino.comentarios ? destino.comentarios.map(c => `<p>${c}</p>`).join('') : '');
    modalDetalle.style.display = 'block';

    const stars = modalRating.querySelectorAll('.estrella');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            calificaciones[destino.nombre] = value;
            localStorage.setItem('calificaciones',视角);
            modalRating.innerHTML = renderStars(destino.nombre, value);
            document.querySelector(`.calificacion-tarjeta[data-destino="${destino.nombre}"]`).innerHTML = renderStars(destino.nombre, value);
        });
    });
}

modalLike.addEventListener('click', () => {
    if (favoritos.includes(destinoSeleccionado.imagen)) {
        favoritos = favoritos.filter(f => f !== destinoSeleccionado.imagen);
        modalLike.textContent = 'Me gusta';
    } else {
        favoritos.push(destinoSeleccionado.imagen);
        modalLike.textContent = 'Quitar Me gusta';
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderFavorites();
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
            <div class="imagen-tarjeta" style="background-image: url('${destino.imagen}');"></div>
            <h3 class="titulo-tarjeta">${destino.nombre}</h3>
            <p class="descripcion-tarjeta">${destino.continente} - ${destino.ubicacion}</p>
            <div class="calificacion-tarjeta" data-destino="${destino.nombre}">
                ${renderStars(destino.nombre, calificaciones[destino.nombre] || 0)}
            </div>
            <p class="descripcion-tarjeta">${destino.descripcion}</p>
        `;
        tarjeta.addEventListener('click', () => {
            mostrarModal(destino);
            if (!favoritos.includes(destino.imagen)) {
                favoritos.push(destino.imagen);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                renderFavorites();
            }
        });
        resultadosBusqueda.appendChild(tarjeta);
    });
}

const continentes = ['africa', 'asia', 'europa', 'america', 'oceania'];
const iconos = ['🌍', '⛩️', '🏰', '🗽', '🏝️'];
continentes.forEach((continente, index) => {
    const card = document.createElement('div');
    card.className = 'floating-card';
    card.innerHTML = `
        <div class="floating-card-content">
            <span class="floating-card-icon">${iconos[index]}</span>
            <h3>${datosContinentes[continente].nombre}</h3>
            <p>${datosContinentes[continente].descripcion}</p>
        </div>
    `;
    card.style.background = datosContinentes[continente].gradiente;
    card.addEventListener('click', () => {
        continenteActual = continente;
        seccionHero.style.backgroundImage = `url('${datosContinentes[continente].destinos[0].imagen}')`;
        document.querySelector('.titulo-principal').textContent = datosContinentes[continente].nombre;
        document.querySelector('.subtitulo').textContent = datosContinentes[continente].descripcion;
        renderizarDestinos(continente);
        card.classList.add('selected');
        setTimeout(() => card.classList.remove('selected'), 500);
    });
    floatingCards.appendChild(card);
});

function renderFavorites() {
    favoritesBar.innerHTML = '';
    favoritos.forEach(img => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.style.backgroundImage = `url(${img})`;
        item.addEventListener('click', () => {
            modalFavoritos.style.display = 'block';
            favoritosContenido.innerHTML = '';
            favoritos.forEach(fav => {
                const favItem = document.createElement('div');
                favItem.className = 'favorito-imagen';
                favItem.style.backgroundImage = `url(${fav})`;
                favoritosContenido.appendChild(favItem);
            });
        });
        favoritesBar.appendChild(item);
    });
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

renderizarDestinos(continenteActual);
renderFavorites();
generarParticulas();