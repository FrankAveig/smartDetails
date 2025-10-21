// ============================================
// ANIMACIONES Y EFECTOS DINÁMICOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Asegurar que las animaciones CSS funcionen
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        // Forzar repaint para activar animaciones
        hero.style.animationPlayState = 'running';
        heroContent.style.animationPlayState = 'running';
        
        // Agregar clase para activar animaciones
        hero.classList.add('animations-active');
        heroContent.classList.add('animations-active');
    }
    
    // Crear formas suaves adicionales
    createSoftShapes();
    
    // Crear partículas flotantes
    createFloatingParticles();
    
    // Crear ondas animadas
    createAnimatedWaves();
    
    // Inicializar animación de contadores
    initStatsCounters();
    
    // Inicializar animación de problemas
    initProblemsAnimation();
    
    // Inicializar animación de soluciones
    initSolutionsAnimation();
    
    // Crear formas flotantes para CTA
    createCTAShapes();
    
    // Inicializar menú flotante
    initFloatingNav();
});

// Función para crear partículas flotantes
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear contenedor de partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Crear múltiples partículas
    for (let i = 0; i < 15; i++) {
        createParticle(particlesContainer, i);
    }
}

// Función para crear una partícula individual
function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = `particle particle-${index}`;
    
    // Posición aleatoria
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 4 + 2; // Entre 2px y 6px
    const delay = Math.random() * 5; // Delay aleatorio hasta 5s
    
    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(14, 165, 233, 0.4);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
        animation: particleFloat ${8 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

// Función para crear formas suaves adicionales
function createSoftShapes() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear contenedor de formas suaves
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'soft-shapes-container';
    shapesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 4;
    `;
    
    hero.appendChild(shapesContainer);
    console.log('Soft shapes container creado:', shapesContainer);
    
    // Crear múltiples formas suaves
    for (let i = 0; i < 10; i++) {
        createSoftShape(shapesContainer, i);
    }
    
    console.log('Total de formas suaves creadas:', shapesContainer.children.length);
}

// Función para crear una forma suave individual
function createSoftShape(container, index) {
    const shape = document.createElement('div');
    shape.className = `soft-shape shape-${index}`;
    
    const positions = [
        { top: '10%', left: '70%', size: '220px' },
        { top: '60%', left: '5%', size: '200px' },
        { top: '40%', left: '85%', size: '180px' },
        { top: '80%', left: '60%', size: '190px' },
        { top: '30%', left: '20%', size: '170px' },
        { top: '70%', left: '75%', size: '160px' },
        { top: '15%', left: '40%', size: '150px' },
        { top: '85%', left: '25%', size: '175px' },
        { top: '50%', left: '90%', size: '165px' },
        { top: '25%', left: '10%', size: '185px' }
    ];
    
    const colors = [
        'rgba(14, 165, 233, 0.22)',
        'rgba(6, 182, 212, 0.20)',
        'rgba(20, 184, 166, 0.24)',
        'rgba(2, 132, 199, 0.18)',
        'rgba(14, 165, 233, 0.21)',
        'rgba(6, 182, 212, 0.19)',
        'rgba(20, 184, 166, 0.23)',
        'rgba(14, 165, 233, 0.20)',
        'rgba(2, 132, 199, 0.19)',
        'rgba(6, 182, 212, 0.22)'
    ];
    
    const pos = positions[index];
    const color = colors[index];
    const delay = index * 3; // Delay escalonado
    
    shape.style.cssText = `
        position: absolute;
        top: ${pos.top};
        left: ${pos.left};
        width: ${pos.size};
        height: ${pos.size};
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(30px);
        animation: softShapeFloat ${15 + index * 2}s ease-in-out infinite, shapePulse ${8 + index}s ease-in-out infinite;
        animation-delay: ${delay}s;
        z-index: 3;
    `;
    
    container.appendChild(shape);
    console.log(`Forma suave ${index} creada:`, shape);
}

// Función para crear ondas animadas
function createAnimatedWaves() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear contenedor de ondas
    const wavesContainer = document.createElement('div');
    wavesContainer.className = 'waves-container';
    wavesContainer.style.cssText = `
    display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        pointer-events: none;
        z-index: 2;
        overflow: hidden;
    `;
    
    hero.appendChild(wavesContainer);
    
    // Crear múltiples ondas
    for (let i = 0; i < 3; i++) {
        createWave(wavesContainer, i);
    }
}

// Función para crear una onda individual
function createWave(container, index) {
    const wave = document.createElement('div');
    wave.className = `wave wave-${index}`;
    
    const colors = [
        'rgba(14, 165, 233, 0.08)',
        'rgba(6, 182, 212, 0.06)',
        'rgba(20, 184, 166, 0.05)'
    ];
    
    const delays = [0, 2, 4];
    const durations = [25, 30, 35];
    
    wave.style.cssText = `
        position: absolute;
        bottom: -50px;
        left: -50%;
        width: 200%;
        height: 100%;
        background: linear-gradient(90deg, transparent, ${colors[index]}, transparent);
        border-radius: 50%;
        animation: waveMove ${durations[index]}s ease-in-out infinite;
        animation-delay: ${delays[index]}s;
        transform: translateY(0) rotate(0deg);
    `;
    
    container.appendChild(wave);
}

// ============================================
// ANIMACIÓN DE CONTADORES DE ESTADÍSTICAS
// ============================================

function initStatsCounters() {
    const counters = document.querySelectorAll('.stat-number .number');
    
    // Opciones para el Intersection Observer
    const options = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                // Dejar de observar después de animar
                observer.unobserve(counter);
            }
        });
    }, options);
    
    // Observar cada contador
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            // Asegurar que mostramos el valor exacto al final
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(current);
        }
    }, 16);
}

function formatNumber(num) {
    // Si es decimal (como 4.5), mostrar un decimal
    if (num % 1 !== 0) {
        return num.toFixed(1).replace('.', ',');
    }
    // Si es entero, mostrar sin decimales
    return Math.floor(num).toString();
}

// ============================================
// ANIMACIÓN DE PROBLEMAS
// ============================================

function initProblemsAnimation() {
    const problemCards = document.querySelectorAll('.problem-card');
    
    // Opciones para el Intersection Observer
    const options = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('problem-visible');
                // Dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observar cada tarjeta
    problemCards.forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// ANIMACIÓN DE SOLUCIONES
// ============================================

function initSolutionsAnimation() {
    const solutionCards = document.querySelectorAll('.solution-card');
    
    // Opciones para el Intersection Observer
    const options = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    // Crear el observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('solution-visible');
                // Dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observar cada tarjeta
    solutionCards.forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// FORMAS FLOTANTES PARA CTA
// ============================================

function createCTAShapes() {
    const ctaSection = document.querySelector('.cta-section');
    if (!ctaSection) return;
    
    // Crear contenedor de formas
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'cta-shapes-container';
    shapesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    `;
    
    ctaSection.appendChild(shapesContainer);
    
    // Crear formas flotantes
    for (let i = 0; i < 6; i++) {
        createCTAShape(shapesContainer, i);
    }
}

function createCTAShape(container, index) {
    const shape = document.createElement('div');
    shape.className = `cta-shape cta-shape-${index}`;
    
    const positions = [
        { top: '15%', left: '10%', size: '180px' },
        { top: '60%', left: '80%', size: '160px' },
        { top: '40%', left: '70%', size: '140px' },
        { top: '75%', left: '20%', size: '150px' },
        { top: '25%', left: '85%', size: '130px' },
        { top: '80%', left: '50%', size: '170px' }
    ];
    
    const colors = [
        'rgba(14, 165, 233, 0.20)',
        'rgba(6, 182, 212, 0.18)',
        'rgba(20, 184, 166, 0.22)',
        'rgba(2, 132, 199, 0.16)',
        'rgba(14, 165, 233, 0.19)',
        'rgba(6, 182, 212, 0.17)'
    ];
    
    const pos = positions[index];
    const color = colors[index];
    const delay = index * 2;
    
    shape.style.cssText = `
        position: absolute;
        top: ${pos.top};
        left: ${pos.left};
        width: ${pos.size};
        height: ${pos.size};
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(30px);
        animation: softShapeFloat ${12 + index * 2}s ease-in-out infinite, shapePulse ${6 + index}s ease-in-out infinite;
        animation-delay: ${delay}s;
        z-index: 2;
    `;
    
    container.appendChild(shape);
}

// ============================================
// MENÚ FLOTANTE
// ============================================

function initFloatingNav() {
    const nav = document.querySelector('.floating-nav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !mobileToggle || !navLinks) return;
    
    // Toggle menú móvil
    mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-open');
        mobileToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en enlace
    const navLinkElements = navLinks.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('mobile-open');
            mobileToggle.classList.remove('active');
        });
    });
    
    // Scroll suave para enlaces internos
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Efecto de scroll en el menú
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateX(-50%) translateY(-100px)';
            nav.style.opacity = '0.8';
        } else {
            // Scrolling up
            nav.style.transform = 'translateX(-50%) translateY(0)';
            nav.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Resaltar enlace activo basado en scroll
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = nav.querySelector(`.nav-link[href="#${id}"]`);
                
                // Remover clase activa de todos los enlaces
                navLinkElements.forEach(link => link.classList.remove('active'));
                
                // Agregar clase activa al enlace correspondiente
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Agregar estilos CSS dinámicamente para las formas suaves
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.4;
        }
        50% {
            transform: translateY(-60px) scale(1.5);
            opacity: 0.9;
        }
    }
    
    @keyframes softShapeFloat {
        0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.5;
        }
        50% {
            transform: translateY(-35px) scale(1.15);
            opacity: 0.9;
        }
    }
    
    @keyframes shapePulse {
        0%, 100% {
            filter: blur(30px) brightness(1);
        }
        50% {
            filter: blur(35px) brightness(1.3);
        }
    }
    
    @keyframes waveMove {
        0% {
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0.5;
        }
        50% {
            transform: translateX(25%) translateY(-20px) rotate(2deg);
            opacity: 0.8;
        }
        100% {
            transform: translateX(50%) translateY(0) rotate(0deg);
            opacity: 0.5;
        }
    }
    
    .animations-active {
        animation-play-state: running !important;
    }
    
    .soft-shapes-container {
        animation: fadeIn 3s ease-in-out;
    }
    
    .particles-container {
        animation: fadeIn 2s ease-in-out;
    }
    
    .waves-container {
        animation: fadeIn 4s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

