# Hola FINEDUCOM

---

del grupo.

Estoy haciendo **README** para explicar un poco el funcionamiento y ejecución en _next.js_.

En **Nextjs** el sistema de ruteo se maneja atreves de la carpeta llamada _pages_ cada archivo o carpeta de tomara como un enlace en next. Las imágenes, iconos en svg y favicon, deben estar en la carpeta _public_ que serán los archivos que no cambiarán. Y en la carpeta _styles_ obviamente los estilos 😁.

Para empezar a ejecutar el proyecto en desarrollo debemos iniciar con el comando:

En este caso

```pwsh
pnpm dev
```

En la terminal de windows, mac o linux.

Para descargar las dependencias se hace de la siguiente manera:

```
pnpm add [nombre de la dependencia] [y la vandera: -D o -E]
```

- La bandera -D: para dependencias que se guardaran como dependencias de desarrollo.

- la bandera -E: para descargar las dependencias en la versión exacta.

Aqui un ejemplo de la configuración de las dependencias:

en el archivo **_package.json_**

```json
{
	"name": "web-fineducom",
	"version": "1.0.0",
	"private": true,
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint": "next lint"
	},
	"dependencies": {
		"eslint": "8.31.0",
		"eslint-config-next": "13.1.1",
		"next": "13.1.1",
		"react": "18.2.0",
		"react-dom": "18.2.0"
	},
	"devDependencies": {
		"sass": "1.57.1"
	}
}
```
