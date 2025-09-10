# CyberSecure Pro - Landing Page

Landing page profesional para servicios de ciberseguridad, diseñada con un enfoque en la seriedad y profesionalismo del sector.

## 🚀 Características

- **Diseño profesional**: Colores oscuros y tipografía seria, ideal para ciberseguridad
- **Responsive**: Adaptable a todos los dispositivos
- **Optimizado**: Carga rápida y rendimiento optimizado
- **Formulario de contacto**: Integrado con Formspree para recibir consultas
- **CI/CD**: Despliegue automático con GitHub Actions

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework CSS**: Bootstrap 5
- **Iconos**: Font Awesome
- **Fuentes**: Google Fonts (Inter)
- **Despliegue**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Estructura del Proyecto

```
cybersecurity-landing/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── dev-ci.yml
├── index.html
├── README.md
└── CNAME (cuando configures dominio)
```

## 🚦 Flujo de Trabajo

### Ramas
- **dev**: Desarrollo y pruebas
- **main/production**: Producción (GitHub Pages)

### Proceso de Desarrollo
1. Desarrolla en la rama `dev`
2. Haz push y verifica que pasen los tests de CI
3. Crea Pull Request hacia `main`
4. Una vez aprobado, se despliega automáticamente

## ⚙️ Configuración

### 1. Configurar Formspree (Formulario de Contacto)

1. Ve a [Formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Obtén tu endpoint de formulario
4. Reemplaza `YOUR_FORM_ID` en `index.html` línea 183:

```html
<form class="contact-form" action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

### 2. Configurar GitHub Pages

1. Ve a Settings > Pages en tu repositorio
2. Selecciona "Deploy from a branch"
3. Elige la rama `gh-pages` (se crea automáticamente)
4. Guarda la configuración

### 3. Configurar Dominio Personalizado

1. Crea un archivo `CNAME` en la raíz del proyecto:
```
tudominio.com
```

2. En tu proveedor de DNS, configura:
   - Tipo A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - O Tipo CNAME: `tu-usuario.github.io`

## 🎨 Personalización

### Colores
Los colores están definidos en CSS variables en `assets/css/style.css`:

```css
:root {
    --primary-color: #1e40af;
    --primary-dark: #1e3a8a;
    --dark-bg: #0f172a;
    --darker-bg: #020617;
    --light-text: #f8fafc;
    --gray-text: #94a3b8;
}
```

### Contenido
Modifica el contenido en `index.html`:
- Nombre de la empresa (línea 20)
- Servicios ofrecidos (sección servicios)
- Información de contacto
- Estadísticas y testimonios

### Estilos
Personaliza los estilos en `assets/css/style.css`:
- Tipografía
- Espaciado
- Animaciones
- Colores y gradientes

## 🔧 Comandos de Desarrollo

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]
cd cybersecurity-landing

# Crear rama de desarrollo
git checkout -b dev

# Hacer cambios y commit
git add .
git commit -m "feat: descripción del cambio"
git push origin dev

# Crear Pull Request hacia main
```

## 📊 Características Técnicas

- **Performance**: Optimizado para carga rápida
- **SEO**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple estándares WCAG
- **Seguridad**: Validación de formularios y sanitización
- **Cross-browser**: Compatible con navegadores modernos

## 🛡️ Seguridad

- Validación de formularios en frontend y backend
- Headers de seguridad configurados
- No hay dependencias con vulnerabilidades conocidas
- Código auditado automáticamente en CI/CD

## 📈 SEO y Analytics

Para añadir Google Analytics, inserta antes del `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un Issue en GitHub
- Contacta al equipo de desarrollo

---

**Desarrollado con ❤️ para profesionales de ciberseguridad**
