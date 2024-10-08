# 02Bases

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Vamos a hablar sobre despliegues a producción

- http-server -> despliega un servidor web en la carpeta que le indiquemos

```bash
npm install -g http-server
npm uninstall -g http-server
```

- Github Pages o Netlify -> despliega la aplicación en la nube

Importante: en el index.html, en la etiqueta base, poner el nombre del repositorio o un ./ para que funcione en local y en producción

Si no se pone, en producción no funcionará la aplicación

Instalo las siguientes dependencias:

```bash
npm i del-cli --save-dev
npm i copyfiles --save-dev
```

Estas dependencias me permiten borrar archivos y copiar archivos respectivamente, para poder hacer el despliegue a producción de la carpeta /docs, modificando el package.json y ahora para hacer un cd/ci con github actions

```bash
npm run build:github
```
