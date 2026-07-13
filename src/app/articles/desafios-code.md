---
title: 'Desafíos Code: simula entrevistas técnicas con el stack que realmente piden las empresas'
date: '2026-07-13'
---

# Desafíos Code: práctica de entrevistas técnicas en español

Si eres egresado de un bootcamp y empezaste a buscar tu primer trabajo como developer, seguro ya te encontraste con este problema: las plataformas de práctica técnica más populares (LeetCode, HackerRank y CoderPad) están en inglés y te entrenan para resolver algoritmos y estructuras de datos, cuando lo que realmente te preguntarán en una entrevista en Latinoamérica suele ser JavaScript, React, Node.js y SQL.

Por eso desarrollamos **Desafíos Code**, una plataforma en español pensada para practicar con el stack real del mercado, bajo la presión de un cronómetro, tal como ocurre en desafios técnicos que sirven con filtro en procesos de entrevistas.

## El problema

Las plataformas existentes presentan varios inconvenientes para quienes egresan de un bootcamp en español:

- **Idioma:** todo está en inglés, lo que agrega una barrera cognitiva cuando el foco debería estar en el código.
- **Stack poco relevante:** se centran en algoritmos abstractos en lugar de las tecnologías que solicitan la mayoría de las empresas de la región.
- **Sin simulación real:** no incluyen un temporizador estricto ni un análisis posterior que permita entender por qué falló una solución.

**Desafíos Code** aborda estos tres problemas con contenido y retroalimentación en español, categorías organizadas por tecnología y un modo de práctica con cronómetro que finaliza automáticamente el desafío cuando se acaba el tiempo, tal como sucede en una entrevista real.

## Características principales

### Editor real con ejecución instantánea

Cada desafío se resuelve en un editor basado en Monaco (el mismo motor de VS Code) directamente en el navegador.

- JavaScript se ejecuta en un Web Worker aislado.
- SQL utiliza `sql.js` (SQLite compilado a WebAssembly).
- React se ejecuta en un sandbox con sus propias pruebas.

Al presionar **Ejecutar**, los resultados se muestran de inmediato, sin depender de un backend.

### Modo Presión

El editor funciona contra reloj. Cuando el tiempo termina, se bloquea automáticamente y la solución se evalúa exactamente como quedó, replicando la presión de una entrevista técnica.

### Repetición espaciada

Al finalizar un desafío, se muestra un modal de análisis para registrar qué salió mal. Esa información alimenta una cola de revisión que vuelve a presentar esos conceptos en el momento adecuado, favoreciendo la consolidación del aprendizaje en lugar del olvido.

### Varios stacks, una misma experiencia

Actualmente la plataforma permite practicar:

- JavaScript
- SQL
- React
- Java

Cada tecnología cuenta con su propio sistema de evaluación, temporizador, notas y repetición espaciada, manteniendo una experiencia consistente sin importar el stack.

### Niveles alineados al seniority

En lugar de clasificar los desafíos simplemente como "fácil", "medio" o "difícil", están organizados según el nivel esperado en una entrevista:

- Trainee
- Junior
- Semi Senior
- Senior

Esto permite medir con mayor claridad el nivel de preparación antes de enfrentarse a un proceso de selección.

## Un desafío técnico particular

JavaScript, SQL y React se ejecutan completamente del lado del cliente; no existe un backend que ejecute código del usuario. Sin embargo, Java no ofrece esa posibilidad, por lo que fue necesario diseñar una solución segura y económica para compilar y ejecutar código.

La primera alternativa fue utilizar **Piston** (el motor *open source* utilizado por Replit), pero requiere contenedores privilegiados. Finalmente, se desarrolló un microservicio propio en Java puro (JDK, sin frameworks), desplegado en Cloud Run y configurado para escalar a cero.

Cada ejecución se realiza de forma aislada y, cuando nadie utiliza el módulo de Java, el costo operativo es prácticamente nulo.

## Stack y arquitectura

- **Frontend:** Next.js 16 + shadcn/ui
- **Editores:** Monaco (JavaScript, SQL y Java) y Sandpack (React)
- **Base de datos, autenticación y backend:** Supabase
- **Motor de ejecución para Java:** microservicio HTTP en Cloud Run desarrollado en JDK puro y con escalado a cero
- **Despliegue:** Vercel + Cloud Run + Supabase

## Acceso

**Desafíos Code** ya está disponible en:

👉 https://desafioscode.jgxdev.com/

La plataforma ofrece un plan gratuito para practicar entrevistas técnicas.

Si estás buscando tu primer empleo como desarrollador o quieres prepararte para procesos de selección utilizando el stack que realmente se solicita en el mercado, en español y bajo condiciones similares a una entrevista real, puede ser una herramienta útil.