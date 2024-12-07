# Proyecto Ecommerce - Frontend (MEAN Stack)

## Objetivo del Proyecto

El objetivo de este proyecto es desarrollar el **frontend** de un sitio web de Ecommerce utilizando el **stack MEAN** (MongoDB, Express, Angular y Node.js). Este sitio web permite a los usuarios navegar, registrar cuentas, realizar compras, y a los administradores gestionar productos, usuarios e inventarios. El frontend debe ser completamente funcional y proporcionar una experiencia de usuario agradable y eficiente en dispositivos de escritorio y móviles.

## Requerimientos Técnicos del Frontend

### Estructuración del Proyecto

El frontend del proyecto está basado en Angular y consta de varios componentes esenciales para el funcionamiento del Ecommerce. Los componentes principales son:

- **Página de Inicio (Landing Page):** Una página atractiva que presenta los productos o servicios destacados del Ecommerce.
- **Página de Productos/Servicios:** Muestra todos los productos o servicios disponibles para la compra.
- **Página de Formulario de Ingreso para Clientes:** Un formulario para que los clientes se registren o inicien sesión.
- **Página de Formulario de Ingreso para Administradores:** Un formulario para que los administradores inicien sesión y gestionen el sitio.
- **Página de Registro de Usuarios:** Permite a los usuarios crear una cuenta en el sistema.
- **Panel de Control:** Interfaz para que los administradores gestionen el sitio y vean las métricas importantes.
- **Gestión de Inventarios:** Página para que los administradores gestionen el inventario de productos.
- **Gestión de Usuarios:** Permite a los administradores gestionar las cuentas de los usuarios.
- **Gestión de Órdenes (si aplica):** Interfaz para que los administradores gestionen las órdenes de compra.
- **Detalle del Producto (si aplica):** Página que muestra los detalles de un producto seleccionado por el usuario.
- **Página de Error 404:** Página de error que se muestra cuando un usuario navega a una ruta inexistente.

### Rutas y Navegación

La navegación en la aplicación se ha estructurado de forma que las rutas sean intuitivas y fáciles de seguir:

- Las rutas principales incluyen las páginas de inicio, productos, y formularios de inicio de sesión.
- Las rutas hijas permiten navegar a páginas específicas, como el detalle del producto o las secciones de administración.
- Se ha implementado un sistema de navegación consistente con enlaces visibles en todo momento, para garantizar una experiencia fluida.

### Página de Inicio (Landing Page)

La **Landing Page** ha sido diseñada con un enfoque atractivo y funcional. Algunas de sus características incluyen:

- **Diseño Responsive:** Se adapta a diferentes tamaños de pantalla, incluyendo dispositivos móviles, tabletas y computadoras.
- **Información Destacada:** Se muestran los productos o servicios más populares del Ecommerce.
- **Buena UX/UI:** El diseño se ha trabajado para asegurar una experiencia de usuario intuitiva y fácil de navegar.

### Tecnologías Utilizadas

- **Angular:** Para la creación del frontend, gestionando las rutas y los componentes.
- **HTML5 y CSS3:** Para la estructura y el diseño de las páginas.
- **Bootstrap:** Para la implementación de componentes responsivos y estilos predefinidos que agilizan el desarrollo.
- **JavaScript/TypeScript:** Para la programación de la lógica de la aplicación y la interacción con los componentes de Angular.
- **Node.js:** Aunque principalmente se utiliza en el backend, también se emplea en el entorno de desarrollo del frontend.
- **Git/GitHub:** Para el control de versiones y la colaboración en el proyecto.

## Cómo Ejecutar el Proyecto

Para ejecutar el proyecto en tu máquina local, sigue los siguientes pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/furryPaws-Trabajo-TF300.git
Navegar al directorio del frontend:

cd furryPaws-Trabajo-TF300/Frontend
Instalar las dependencias: Si aún no tienes las dependencias instaladas, usa npm para instalarlas:

npm install
Iniciar la aplicación: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo de Angular:

ng serve
Acceder a la aplicación: Abre tu navegador y visita la siguiente URL para ver la aplicación:

http://localhost:4200
Instrucciones de Entrega
📅 Fecha de entrega:
Viernes 6 de Diciembre de 2024, hasta las 11:59 pm.

⚠️ Nota máxima si se entrega después: 3.5

📥 Instrucciones de Entrega
Enviar el enlace del repositorio de GitHub a entregas.bit@gmail.com.

Consideraciones:
Trabajar en el mismo repositorio del proyecto creado anteriormente.
Mantener los cambios en la rama desarrollo.
Incluir este archivo README.md en el repositorio con la información solicitada.
Asegúrate de que el repositorio contenga todos los archivos necesarios y que el proyecto funcione correctamente en local.
Enlace de Entrega
Una vez que hayas completado tu trabajo, debes enviar el enlace de tu repositorio de GitHub a la siguiente dirección de correo electrónico:
entregas.bit@gmail.com