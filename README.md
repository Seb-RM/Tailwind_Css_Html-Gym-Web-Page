# 🏋️‍♂️ Gympage - Gym Web Page

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/gympage)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Complete-success.svg)]()

## 📖 Descripción Breve

Gympage es una aplicación web estática desarrollada exclusivamente con HTML5 semántico y Tailwind CSS v4, aprovechando el enfoque utility-first para crear un diseño responsivo y modular sin necesidad de JavaScript. El proyecto implementa técnicas avanzadas de CSS como Flexbox y Grid para layouts adaptativos, transiciones CSS para interacciones suaves, y un sistema de componentes reutilizables mediante clases utilitarias. Utiliza Boxicons para íconos vectoriales escalables y optimiza el rendimiento mediante la eliminación de dependencias dinámicas, resultando en un bundle ligero y de carga rápida.

Este proyecto sirve como caso de estudio para desarrolladores interesados en la arquitectura de páginas estáticas modernas, demostrando la potencia de Tailwind CSS en la creación de interfaces complejas sin frameworks JavaScript. Está dirigido a equipos de desarrollo que buscan ejemplos prácticos de diseño responsivo, accesibilidad web (con etiquetas ARIA y navegación por teclado), y optimización para motores de búsqueda mediante HTML semántico.

## ✨ Características Principales

- 🎨 **Diseño Responsivo**: Adaptable a dispositivos móviles, tablets y desktops usando Tailwind CSS.
- 🏆 **Secciones Completas**: Incluye hero, misión, valores, precios, testimoniales y FAQ.
- 💳 **Planes de Suscripción**: Presentación interactiva de planes mensuales y anuales con descuentos.
- 🌟 **Elementos Visuales**: Uso de íconos de Boxicons para una interfaz moderna y atractiva.
- 🚀 **Optimización**: Página ligera sin JavaScript, enfocada en rendimiento y accesibilidad.
- 🎯 **UX Enfocada**: Navegación intuitiva y llamadas a la acción claras para conversiones.

## 🖼️ Demo/Vistas Previas

![Vista Previa de Gympage](public/Captura-GymWebPage.png)

La página presenta un diseño limpio con gradientes púrpuras, transiciones suaves y elementos interactivos como botones hover. Incluye un header fijo, secciones scrollables y un footer con redes sociales. Para ver la demo en vivo, abre `index.html` en tu navegador o ejecuta el servidor de desarrollo con Vite. También puedes visitar la [demo en vivo](https://seb-rm.github.io/Tailwind_Css_Html-Gym-Web-Page/).

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 5 | Estructura semántica de la página |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | 4.1.11 | Framework CSS para estilos utilitarios |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | 7.0.0 | Herramienta de desarrollo y build |
| ![A shield-shaped badge with Boxicons logo and text Boxicons-000000 against white background](https://img.shields.io/badge/Boxicons-000000?style=flat&logo=box&logoColor=white) | 2.1.4 | Biblioteca de íconos vectoriales |
| ![A shield-shaped badge with yellow background displaying Prettier logo and text Prettier-F7B93E](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black) | 3.6.2 | Formateador de código |

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/Seb-RM/Tailwind_Css_Html-Gym-Web-Page.git
cd gympage

# Instala dependencias
npm install
```

### Configuración

No se requieren variables de entorno. El proyecto está configurado para desarrollo local.

### Ejecución

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

Abre `http://localhost:5173` en tu navegador para ver la página.

## 📚 Guía de Uso

1. **Navegación**: Usa el menú del header para saltar a secciones específicas (Clases, Inicio, etc.).
2. **Planes de Precios**: Haz clic en "Mensual" o "Anual" para alternar entre opciones de suscripción.
3. **Responsive**: La página se adapta automáticamente al tamaño de pantalla.
4. **Accesibilidad**: Incluye etiquetas ARIA y navegación por teclado.

Para personalizar:

- Edita textos en `index.html`.
- Modifica estilos en `src/style.css` o clases de Tailwind directamente en el HTML.

## ⚙️ Explicación Técnica

### 📁 index.html

- **Propósito**: Archivo principal que define la estructura completa de la página web del gimnasio.
- **Conceptos Clave**: HTML semántico, accesibilidad (ARIA labels), estructura modular con secciones, uso de formularios para toggles (radio buttons para planes de precios).
- **Fragmentos Destacados**:

  ```html
  <!-- Header con navegación responsiva -->
  <header class="py-2 shadow-md">
    <div class="container mx-auto px-2.5 md:flex md:items-center md:justify-between">
      <a class="flex items-center justify-center gap-3">
        <img src="/gympageicon.svg" alt="Logo de Gympage" class="w-14" />
        <h2 class="text-2xl font-bold text-gray-700">Gympage</h2>
      </a>
      <!-- Navegación con hover effects -->
    </div>
  </header>
  ```

- **Flujo de Datos**: Estructura jerárquica desde `<html>` hasta elementos anidados. No hay procesamiento dinámico; todo es estático.
- **API/DOM**: Manipulación visual mediante CSS (Tailwind) para estados hover/focus. Eventos implícitos en enlaces y detalles (FAQ expandibles).

### 📁 src/style.css

- **Propósito**: Archivo de estilos que importa Tailwind CSS y Boxicons para la estilización global.
- **Conceptos Clave**: Importación de frameworks CSS, configuración de utilidades globales.
- **Fragmentos Destacados**:

  ```css
  @import "tailwindcss";
  @import "boxicons/css/boxicons.min.css";
  ```

- **Flujo de Datos**: Aplica estilos a elementos del DOM definidos en `index.html`. No hay JavaScript para manipulación dinámica.
- **API/DOM**: Define clases CSS que afectan layout, colores y animaciones. Boxicons se usan para íconos vectoriales escalables.

### 📁 package.json

- **Propósito**: Archivo de configuración de Node.js que define dependencias, scripts y metadatos del proyecto.
- **Conceptos Clave**: Gestión de dependencias con npm, scripts de automatización (build, dev), configuración de Vite.
- **Fragmentos Destacados**:

  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "@tailwindcss/vite": "^4.1.11",
      "boxicons": "^2.1.4",
      "tailwindcss": "^4.1.11"
    }
  }
  ```

- **Flujo de Datos**: Define cómo se instalan y ejecutan herramientas. Vite procesa archivos para desarrollo/producción.
- **API/DOM**: No interactúa directamente; configura el entorno de build que genera CSS optimizado.

## 🎯 Arquitectura

El proyecto sigue una arquitectura simple de página estática:

- **Estructura de Archivos**:

  ```text
  gympage/
  ├── index.html          # Página principal
  ├── src/
  │   ├── style.css       # Estilos globales
  │   └── images/         # Assets visuales
  ├── public/             # Assets públicos (íconos, capturas)
  ├── package.json        # Configuración de dependencias
  └── vite.config.ts      # Configuración de Vite
  ```

- **Patrones**: Separación de concerns (HTML para estructura, CSS para estilos). No se usan patrones complejos ya que no hay JavaScript.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Para contribuir:

1. Forkea el repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commits descriptivos.
4. Abre un Pull Request con descripción detallada.

**Estándares de Código**:

- Usa Prettier para formateo (`npm run format`).
- Sigue convenciones de Tailwind CSS.
- Asegura responsividad en cambios visuales.
