(function () {
    // Edita nombres, resumenes y detalles desde este archivo para que se actualicen
    // las tarjetas del catalogo y la vista ampliada de cada imagen.
    function buildItems(prefix, files, defaults, overrides) {
        return files.map(function (file, index) {
            var filename = file.split("/").pop();
            var custom = overrides[filename] || {};
            var number = String(index + 1).padStart(2, "0");

            return {
                file: file,
                filename: filename,
                name: custom.name || (prefix + " " + number),
                summary: custom.summary || defaults.summary,
                materials: custom.materials || defaults.materials,
                presentation: custom.presentation || defaults.presentation,
                customization: custom.customization || defaults.customization,
                note: custom.note || defaults.note
            };
        });
    }

    var categories = {
        reciclarte: {
            tag: "Categoria 01",
            title: "ReciclArte",
            description:
                "Explora la coleccion completa de ReciclArte. Cada pieza nace desde la economia circular y puede presentarse con una descripcion comercial clara y reutilizable.",
            cover: "images/ReciclArte/Portada.jpeg",
            items: buildItems(
                "ReciclArte",
                [
                    "images/ReciclArte/IMG_0517.JPEG",
                    "images/ReciclArte/IMG_1201.JPEG",
                    "images/ReciclArte/IMG_1319.JPEG",
                    "images/ReciclArte/IMG_1323.JPEG",
                    "images/ReciclArte/IMG_1356.JPEG",
                    "images/ReciclArte/IMG_1390.JPEG",
                    "images/ReciclArte/pic01.jpg",
                    "images/ReciclArte/pic02.jpg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.53 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.54 PM (1).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.54 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM (1).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM (2).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM (3).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM (4).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM (5).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.55 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.56 PM (3).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.56 PM (4).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.56 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM (1).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM (2).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM (3).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM (4).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM (5).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.57 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.58 PM (1).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.59 PM (2).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.59 PM (4).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.11.59 PM.jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.17.38 PM (3).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.17.39 PM (2).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.17.39 PM (3).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.17.39 PM (4).jpeg",
                    "images/ReciclArte/WhatsApp Image 2026-03-20 at 8.17.39 PM.jpeg"
                ],
                {
                    summary: "Pieza de arte sostenible creada desde la transformacion creativa de materiales y acabados hechos a mano.",
                    materials: "Materiales reciclados, elementos intervenidos y acabados artesanales segun el diseno.",
                    presentation: "Ideal para decoracion, regalo especial o coleccion creativa.",
                    customization: "Se puede ajustar color, mensaje, acabado o concepto visual segun el pedido.",
                    note: "Actualizar con medidas, tiempo de entrega y precio final."
                },
                {}
            )
        },
        personalizada: {
            tag: "Categoria 02",
            title: "Linea personalizada",
            description:
                "Esta categoria reune detalles por pedido para momentos especiales. Todo el contenido descriptivo sale de este archivo central para que puedas actualizar una sola vez.",
            cover: "images/Linea personalizada/Portada.jpeg",
            items: buildItems(
                "Linea personalizada",
                [
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.11.56 PM (1).jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.11.56 PM (2).jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.40 PM (2).jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.41 PM (1).jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.41 PM.jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.42 PM.jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.43 PM (1).jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.43 PM.jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.55 PM.jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.17.57 PM.jpeg",
                    "images/Linea personalizada/WhatsApp Image 2026-03-20 at 8.18.00 PM.jpeg"
                ],
                {
                    summary: "Detalle personalizado pensado para celebraciones, mensajes especiales y regalos con identidad.",
                    materials: "Base artesanal, decoracion aplicada a mano y acabados segun el estilo del cliente.",
                    presentation: "Perfecto para aniversarios, fechas especiales, detalles tematicos o recordatorios.",
                    customization: "Permite modificar colores, nombres, frases, empaques y estilo general.",
                    note: "Completar con opciones de tamano, precio y cantidad minima."
                },
                {}
            )
        },
        religiosa: {
            tag: "Categoria 03",
            title: "Inspiracion religiosa",
            description:
                "Aqui se agrupan imagenes y articulos de inspiracion espiritual. Las descripciones se administran desde este mismo archivo para mantener consistencia en todo el catalogo.",
            cover: "images/Inspiracion religiosa/Portada.jpeg",
            items: buildItems(
                "Inspiracion religiosa",
                [
                    "images/Inspiracion religiosa/IMG_0183.JPEG",
                    "images/Inspiracion religiosa/IMG_0524.JPEG",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.11.58 PM (2).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.11.58 PM (3).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.11.58 PM (4).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.11.58 PM.jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.11.59 PM (3).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.17.38 PM (1).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.17.38 PM (2).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.17.38 PM.jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.17.40 PM (1).jpeg",
                    "images/Inspiracion religiosa/WhatsApp Image 2026-03-20 at 8.17.40 PM.jpeg"
                ],
                {
                    summary: "Pieza de inspiracion espiritual pensada para acompanar espacios de fe, recogimiento o regalo simbolico.",
                    materials: "Materiales decorativos y base artesanal segun el formato del articulo.",
                    presentation: "Ideal para hogar, espacios de oracion, recordatorios o detalles de significado especial.",
                    customization: "Se puede adaptar color, mensaje, dedicatoria o acabado decorativo.",
                    note: "Agregar advocacion, tamano, precio y disponibilidad."
                },
                {}
            )
        }
    };

    window.AMARTR3S_DATA = {
        categories: categories
    };
})();
