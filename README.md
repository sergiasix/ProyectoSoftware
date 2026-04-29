# RailTravel 🚆

Proyecto académico orientado al diseño y desarrollo de una plataforma de gestión de billetes de tren.

---

##  Estado del proyecto
Proyecto funcional (no orientado a producción)

El sistema permite realizar el flujo completo de reserva de viajes, incluyendo gestión de usuarios y persistencia de datos.

---

##  Funcionalidades

###  Implementadas
- Búsqueda de trenes (datos simulados)
- Visualización de resultados
- Selección de asientos
- Creación de reservas
- Cancelación de reservas
- Gestión de usuarios (registro y login)
- Persistencia de datos con base de datos H2
- Generación de códigos QR para reservas
- Validación básica de formularios

### Parcialmente implementadas
- Gestión de sesiones (uso de `localStorage`, no segura)
- Validaciones backend limitadas

### No implementadas
- Integración con APIs reales de trenes
- Autenticación segura (JWT / sesiones reales)
- Base de datos persistente en producción

---

## Arquitectura

El proyecto sigue una arquitectura cliente-servidor:

- **Frontend:** HTML, CSS y JavaScript
- **Backend:** Spring Boot (Java)
- **Base de datos:** H2 (en memoria)

El frontend se comunica con el backend mediante llamadas HTTP a una API REST.

---

## Decisiones técnicas

- Uso de Spring Boot para estructurar el backend de forma escalable
- Desarrollo del frontend sin frameworks para reducir complejidad
- Uso de datos simulados para trenes por limitaciones de APIs externas
- Implementación progresiva de funcionalidades priorizando el flujo principal
- Incorporación de base de datos en fases avanzadas del proyecto

---

## Limitaciones

- Seguridad básica (sin JWT ni control de sesiones real)
- Base de datos en memoria (los datos se pierden al reiniciar)
- Código frontend poco modular
- Validaciones limitadas en backend

---

## Deuda técnica

- Implementar autenticación segura (JWT)
- Mejorar arquitectura frontend (modularidad)
- Añadir validaciones robustas en backend
- Migrar a base de datos persistente (MySQL/PostgreSQL)
- Integrar APIs reales del sector ferroviario

---

## Ejecución del proyecto

### Backend
1. Ejecutar la aplicación Spring Boot
2. El servidor se iniciará en:
http://localhost:8080

### Frontend
Abrir el proyecto desde un servidor local (recomendado XAMPP):
http://localhost/RailTravel/index.html

---

## Base de datos (H2)

Acceso a la consola:
http://localhost:8080/h2-console
Configuración:
- JDBC URL: `jdbc:h2:mem:testdb`
- Usuario: `sa`
- Contraseña: (vacío)

---

## Estado del desarrollo

El proyecto se encuentra aproximadamente en un **80–85% de completitud funcional**, con el flujo principal completamente operativo.

---
## Autor
Sergi Chismol
