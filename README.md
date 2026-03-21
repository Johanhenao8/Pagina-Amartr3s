# AMARTR3S

Sitio estatico para presentar la marca AMARTR3S, sus lineas principales y un catalogo visual por categoria.

## Incluye

- `index.html`: pagina principal con presentacion de la marca.
- `catalogo.html`: vista de catalogo por categoria.
- `assets/js/catalog-data.js`: archivo central para editar nombres, textos y fichas de productos.
- `images/`: imagenes organizadas por linea.

## Publicacion en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `AMARTR3S`.
2. Sube el contenido completo de esta carpeta a la raiz del repositorio.
3. Verifica que `index.html` quede en la raiz.
4. En GitHub abre `Settings > Pages`.
5. En `Build and deployment`, elige `Deploy from a branch`.
6. Selecciona la rama principal y la carpeta `/ (root)`.
7. Guarda y espera a que GitHub publique el sitio.

## Edicion rapida de contenido

La mayor parte del catalogo se actualiza desde:

- `assets/js/catalog-data.js`

Desde ahi puedes cambiar:

- nombres de productos
- resumenes
- materiales
- presentacion
- opciones de personalizacion
- notas editables

## Vista local

Puedes abrir `index.html` directamente en el navegador o levantar un servidor estatico simple, por ejemplo:

```powershell
python -m http.server 8080
```

Luego abre `http://localhost:8080`.
