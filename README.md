# Laboratorio 1 – Mi stack en Docker

Este laboratorio consiste en levantar una **aplicación Node/NestJS** junto con su **base de datos MySQL**, empaquetadas en contenedores Docker y orquestadas mediante **docker-compose**.  

---

## Descripción del trabajo realizado

1. **Creación de imagen de la aplicación**  
   - Se desarrolló un `Dockerfile` que genera una **imagen Docker** de la aplicación.  
   - Esta imagen instala las dependencias, compila el código NestJS y deja lista la app para ejecutarse en producción.

2. **Orquestación con Docker Compose**  
   - Se creó un archivo `docker-compose.yml` que levanta **dos servicios**:
     - **app**: la aplicación NestJS construida a partir del `Dockerfile`.
     - **db**: un contenedor **MySQL 9.4** con persistencia de datos mediante un volumen nombrado.

3. **Actualización para uso de MySQL (antes Postgres)**  
   - El proyecto original estaba configurado para **PostgreSQL**.  

4. **Configuración de variables de entorno (.env)**  
   - Para no exponer credenciales en el repositorio se creó un archivo **`.env`** que sirve como plantilla.  
   - Cada usuario debe crear el archivo `.env` en la carpeta backend-node-docker-lab1 con la sigiente estructura.


---

## Estructura del archivo `.env`

Ejemplo de contenido:

# Puerto expuesto por tu app en el host
APP_PORT=3000
APP_VERSION=1.0.0
# Credenciales MySQL 
MYSQL_HOST=db    
MYSQL_ROOT_PASSWORD=changeme_root
MYSQL_DATABASE=appdb
MYSQL_USER=appuser
MYSQL_PASSWORD=changeme_app