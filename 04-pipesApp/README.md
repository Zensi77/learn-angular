# Proyecto Angular - Pipes y Integración con PrimeNG

Este proyecto de Angular demuestra el uso de pipes generales y personalizados, junto con la integración de PrimeNG y PrimeFlex para mejorar la experiencia de la interfaz de usuario y el diseño del layout.

## Descripción del Proyecto

Este proyecto en Angular muestra cómo trabajar con:

- **Pipes generales** en Angular para transformar datos en las plantillas.
- **Pipes personalizados** creados para manejar transformaciones de datos específicas.
- **PrimeNG** para un conjunto rico de componentes de UI.
- **PrimeFlex** para una biblioteca de utilidades CSS flexibles para el diseño del layout.

## Pipes Usados en Este Proyecto

### Pipes Generales

1. **`DatePipe`**:

   - **Propósito**: Formatear fechas en diferentes formatos.
   - **Uso**: `{{ myDate | date:'fullDate' }}`
   - **Ejemplo**: Si `myDate = new Date()`, el resultado podría ser algo como `martes, 10 de octubre de 2024`.

2. **`CurrencyPipe`**:

   - **Propósito**: Transforma un número en una cadena con formato de moneda.
   - **Uso**: `{{ precio | currency:'EUR':'symbol':'1.2-2' }}`
   - **Ejemplo**: Muestra algo como `12,34 €` para `precio = 12.34`.

3. **`UpperCasePipe`**:

   - **Propósito**: Convierte una cadena a mayúsculas.
   - **Uso**: `{{ texto | uppercase }}`
   - **Ejemplo**: Si `texto = "hola"`, el resultado será `HOLA`.

4. **`LowerCasePipe`**:
   - **Propósito**: Convierte una cadena a minúsculas.
   - **Uso**: `{{ texto | lowercase }}`
   - **Ejemplo**: Si `texto = "HOLA"`, el resultado será `hola`.

### Pipes Personalizados

1. **`ExponentialPipe`**:

   - **Propósito**: Eleva un número a la potencia indicada.
   - **Uso**: `{{ numero | exponential:exponente }}`
   - **Ejemplo**: Si `numero = 2` y `exponente = 3`, el resultado será `8`.

2. **`CapitalizePipe`**:
   - **Propósito**: Capitaliza la primera letra de cada palabra en una cadena.
   - **Uso**: `{{ frase | capitalize }}`
   - **Ejemplo**: Si `frase = "hola mundo"`, el resultado será `Hola Mundo`.

## Integración con PrimeNG

PrimeNG se utiliza para agregar componentes de UI ricos, como botones, diálogos, tablas, etc. A continuación se detalla cómo instalarlo y utilizarlo.

### Instalación

Ejecuta el siguiente comando para instalar PrimeNG y sus dependencias necesarias:

```bash
npm install primeng primeicons
```

## Documentación

PrimeNG ofrece una amplia gama de componentes fáciles de integrar en aplicaciones Angular. Para obtener detalles sobre su uso, visita la documentación oficial:

- **Documentación de PrimeNG**: [https://primeng.org](https://primeng.org)

## Integración con PrimeFlex

PrimeFlex es una biblioteca de utilidades CSS para diseños responsivos, márgenes, relleno, sistema de cuadrícula, y más.

### Instalación

Ejecuta el siguiente comando para instalar PrimeFlex:

```bash
npm install primeflex
```

## Documentación

PrimeFlex ofrece un conjunto de utilidades para crear layouts flexibles y espaciados de manera sencilla. Para más detalles, visita la documentación oficial:

- Documentación de PrimeFlex: https://www.primefaces.org/primeflex

## Angular.json del proyecto para el uso de las libreriás PrimeNG y PrimeFlex

```json
"styles": [
  "src/styles.css",
  "node_modules/primeng/resources/themes/lara-dark-indigo/theme.css",
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeflex/primeflex.css"
],
```
