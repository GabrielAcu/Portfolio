# 🚀 Portfolio Interactivo

Portfolio personal moderno con animaciones premium, efectos 3D y diseño interactivo.

## ✨ Características

- 🎨 **Diseño Premium**: Tema oscuro con gradientes vibrantes y efectos glassmorphism
- 🌟 **Animaciones Fluidas**: Transiciones suaves y micro-interacciones
- 🎯 **Efectos 3D**: Tarjetas con tilt effect y partículas interactivas
- 📱 **Totalmente Responsive**: Optimizado para móvil, tablet y desktop
- ⚡ **Alto Rendimiento**: Construido con Vite para carga ultra-rápida
- 🎭 **Interactivo**: Elementos que reaccionan al mouse y scroll

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca UI moderna
- **Vite** - Build tool ultra-rápido
- **Framer Motion** - Animaciones profesionales
- **Lucide React** - Iconos modernos
- **Vanilla CSS** - Estilos personalizados con variables CSS

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

## 🎯 Estructura del Proyecto

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Sección hero con animaciones
│   │   ├── Navbar.jsx            # Navegación sticky
│   │   ├── Projects.jsx          # Galería de proyectos
│   │   ├── ProjectCard.jsx       # Tarjeta individual de proyecto
│   │   ├── ProjectModal.jsx      # Modal de detalles
│   │   ├── Skills.jsx            # Visualización de habilidades
│   │   ├── About.jsx             # Timeline y biografía
│   │   ├── Contact.jsx           # Formulario de contacto
│   │   └── ParticleField.jsx     # Sistema de partículas
│   ├── hooks/
│   │   ├── useScrollAnimation.js # Hook para animaciones scroll
│   │   └── useTilt.js            # Hook para efecto 3D tilt
│   ├── App.jsx                   # Componente principal
│   ├── main.jsx                  # Punto de entrada
│   └── index.css                 # Estilos globales y sistema de diseño
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personalización

### Colores
Edita las variables CSS en `src/index.css`:

```css
:root {
  --primary: #8b5cf6;
  --secondary: #3b82f6;
  --accent: #ec4899;
  /* ... más colores */
}
```

### Contenido
Actualiza tu información en los componentes:
- **Hero.jsx**: Nombre, título, descripción
- **Projects.jsx**: Tus proyectos y tecnologías
- **Skills.jsx**: Tus habilidades y niveles
- **About.jsx**: Tu historia y timeline
- **Contact.jsx**: Links sociales y email

## 🚀 Deployment en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Vite
4. ¡Deploy automático en cada push!

### Configuración Manual (opcional)

Si necesitas configuración personalizada, crea `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 📝 Guía de Desarrollo

### Agregar un Nuevo Proyecto

1. Abre `src/components/Projects.jsx`
2. Agrega un objeto al array `projects`:

```javascript
{
  id: 4,
  title: "Mi Nuevo Proyecto",
  description: "Descripción breve",
  longDescription: "Descripción detallada...",
  image: "/ruta/a/imagen.jpg",
  tags: ["React", "Node.js", "MongoDB"],
  status: "completed", // o "wip" para Work in Progress
  github: "https://github.com/tu-usuario/proyecto",
  demo: "https://proyecto-demo.com"
}
```

### Agregar una Nueva Habilidad

1. Abre `src/components/Skills.jsx`
2. Agrega al array correspondiente:

```javascript
{
  name: "Nueva Tecnología",
  level: 75, // 0-100
  icon: IconName // de lucide-react
}
```

## 🎯 Checklist de Personalización

- [ ] Actualizar nombre y título en Hero
- [ ] Agregar tus proyectos
- [ ] Actualizar habilidades y niveles
- [ ] Escribir tu biografía en About
- [ ] Agregar tu timeline personal
- [ ] Configurar links sociales (GitHub, LinkedIn)
- [ ] Agregar tu email de contacto
- [ ] Reemplazar imágenes de proyectos
- [ ] Ajustar colores del tema (opcional)
- [ ] Probar en diferentes dispositivos

## 🐛 Troubleshooting

### El servidor no inicia
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Las animaciones van lentas
- Reduce la cantidad de partículas en `ParticleField.jsx`
- Desactiva algunos efectos en dispositivos móviles

### Errores de build
```bash
# Verifica que todas las dependencias estén instaladas
npm install
# Intenta build nuevamente
npm run build
```

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portfolio.

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, ¡son bienvenidas!

---

**Hecho con ❤️ y mucho ☕**
