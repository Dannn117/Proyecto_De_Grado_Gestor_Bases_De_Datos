# Sistema Gestor de Bases de Datos (SGBD) - Proyecto de Grado

Este proyecto de grado corresponde al desarrollo de un **prototipo experimental de DDl y DML** diseñado para la **Universidad de Cundinamarca** en Colombia. El prototipo busca brindar a los estudiantes de ingeniería de sistemas y computación un entorno práctico donde puedan aprender y dominar conceptos fundamentales de bases de datos mediante el uso de comandos SQL para realizar operaciones DDL (Data Definition Language) y DML (Data Manipulation Language).

## Descripción del Proyecto
El objetivo principal de este proyecto es proporcionar una herramienta educativa que permita superar la limitación de acceso a sistemas gestores de bases de datos académicos. Con este prototipo, los estudiantes podrán:

- Crear, modificar y eliminar tablas e índices.
- Realizar operaciones de manipulación de datos como insertar, actualizar, eliminar y consultar registros.
- Practicar comandos SQL en un entorno controlado, amigable y seguro.
- Desarrollar competencias necesarias para aplicar los conceptos en escenarios reales.

## Características
- **Soporte para operaciones DDL:** Comandos `CREATE`, `ALTER` y `DROP`.
- **Soporte para operaciones DML:** Comandos `INSERT`, `UPDATE`, `DELETE` y `SELECT`.
- **Interfaz web interactiva:** Un cuadro de texto donde los usuarios ingresan comandos SQL-like.
- **Almacenamiento local:** Los datos se gestionan mediante un archivo JSON, simulando un esquema de base de datos.
- **Backend en Python:** Lógica de procesamiento y ejecución de comandos SQL-like.
- **Frontend con React:** Interfaz moderna y responsiva conectada al backend.

## Tecnologías Utilizadas
- **Python con Flask:** Backend para manejar las solicitudes y ejecutar los comandos SQL-like.
- **React con Vite:** Frontend para la interfaz del usuario.
- **JSON:** Almacenamiento y simulación del diccionario de datos.
- **HTML y CSS:** Diseño y estructura de la interfaz.

## Estructura del Proyecto
- `modulo_ddl_dml/`
  - `models.py`: Contiene las funciones principales para procesar comandos DDL y DML.
- `instance/`
  - `diccionario.json`: Archivo de almacenamiento local que simula la base de datos.
- `frontend/`
  - `DML.jsx`: Archivo que contiene la vista principal para las operaciones DML.
- `app.py`: Punto de entrada del backend en Flask.
- `README.md`: Documentación del proyecto.

## Funcionalidades Principales
1. **Operaciones DDL:**
   - Crear, modificar y eliminar tablas e índices mediante comandos SQL-like.
2. **Operaciones DML:**
   - Insertar nuevos registros.
   - Actualizar registros existentes.
   - Eliminar registros específicos o múltiples.
   - Consultar datos mediante comandos de selección.
3. **Interfaz Interactiva:**
   - Un cuadro de texto único para ingresar comandos SQL-like.
   - Respuestas inmediatas con mensajes de éxito o error.

## Cómo Usar
1. **Instalación:**
   - Clona este repositorio en tu máquina local.
   - Asegúrate de tener Python y Node.js instalados.
   - Instala las dependencias del backend ejecutando `pip install -r requirements.txt`.
   - Instala las dependencias del frontend ejecutando `npm install` en la carpeta `frontend`.
2. **Ejecución:**
   - Inicia el backend con `python app.py`.
   - Inicia el frontend con `npm run dev`.
   - Accede al proyecto en tu navegador en la dirección indicada.
3. **Interacción:**
   - Ingresa comandos SQL-like en el cuadro de texto y visualiza los resultados.

## Ejemplo de Uso
1. Crear una tabla:
   ```sql
   CREATE TABLE estudiantes (id INT, nombre TEXT, edad INT);
   ```
2. Insertar datos:
   ```sql
   INSERT INTO estudiantes (id, nombre, edad) VALUES (1, 'Juan', 20);
   ```
3. Actualizar datos:
   ```sql
   UPDATE estudiantes SET edad = 21 WHERE id = 1;
   ```
4. Eliminar datos:
   ```sql
   DELETE FROM estudiantes WHERE id = 1;
   ```

## Captura de Pantalla
![image](https://github.com/user-attachments/assets/d4feb9cf-fc2b-4db5-9041-c66a44ac9249)

![image](https://github.com/user-attachments/assets/ea4330e2-c95e-4564-af86-11ac52b66556)



## Futuras Mejoras
- Importar modulo TCL 
- Crear un módulo de exportación e importación de datos.
- Ampliar la compatibilidad con otros tipos de datos y operaciones SQL.

## Autor
Este proyecto fue desarrollado por Daniel Eduardo Bautista Diaz como parte del proyecto de grado para la Universidad de Cundinamarca.

---
**Nota:** Este prototipo es una herramienta educativa y no debe ser usado en entornos de producción.
