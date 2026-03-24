(function () {
    // Edita nombres, resumenes y detalles desde este archivo para que se actualicen
    // las tarjetas del catalogo y la vista ampliada de cada imagen.
    function buildItems(prefix, files, defaults, entries) {
        return files.map(function (file, index) {
            var filename = file.split("/").pop();
            var custom = entries[index] || {};
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
                [
                    {
                        name: "ReciclArte | Jardin de color",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Brillo circular",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Relieve creativo",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Textura en vitrina",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Encuentro floral",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Destello artesanal",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Composicion decorativa",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Acabado multicolor",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Coleccion viva",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Inspiracion en relieve",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Juego de texturas",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Decoracion sostenible",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Contraste brillante",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Edicion floral",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Volumen creativo",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Diseno de temporada",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Pieza con identidad",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Arte en reciclaje",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Detalle luminoso",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Linea intervenida",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Color y memoria",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Transformacion util",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Ornamentacion creativa",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Presencia artesanal",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Edicion con relieve",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Composicion organica",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Diseno festivo",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Tonos de hogar",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Estilo reciclado",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Pieza para regalar",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    },
                    {
                        name: "ReciclArte | Escena decorativa",
                        summary: "Pieza decorativa de ReciclArte elaborada a mano desde materiales recuperados, ideal para dar color y personalidad a cualquier espacio."
                    },
                    {
                        name: "ReciclArte | Recuerdo sostenible",
                        summary: "Creacion sostenible con acabados artesanales y relieve visual, pensada para regalar o exhibir como detalle unico."
                    },
                    {
                        name: "ReciclArte | Volumen en color",
                        summary: "Objeto intervenido con enfoque creativo y reutilizacion consciente, perfecto para ambientar mesas, repisas o rincones especiales."
                    },
                    {
                        name: "ReciclArte | Acabado expresivo",
                        summary: "Diseno artesanal de economia circular que combina textura, color y presencia decorativa en una sola pieza."
                    },
                    {
                        name: "ReciclArte | Exhibicion artesanal",
                        summary: "Propuesta ReciclArte hecha a mano para quienes buscan decoracion diferente, sostenible y con identidad visual."
                    }
                ]
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
                [
                    {
                        name: "Personalizada | Mensaje especial",
                        summary: "Detalle personalizado pensado para celebrar momentos importantes con nombres, mensajes o colores elegidos segun la ocasion."
                    },
                    {
                        name: "Personalizada | Recuerdo a medida",
                        summary: "Pieza por encargo con enfoque emotivo, ideal para aniversarios, fechas especiales o regalos con sentido personal."
                    },
                    {
                        name: "Personalizada | Detalle con nombre",
                        summary: "Creacion artesanal adaptable en mensaje y acabado, perfecta para convertir un recuerdo en un obsequio unico."
                    },
                    {
                        name: "Personalizada | Regalo con dedicatoria",
                        summary: "Diseno personalizado con presencia delicada y valor sentimental, pensado para sorprender y acompanar una celebracion."
                    },
                    {
                        name: "Personalizada | Momento para celebrar",
                        summary: "Detalle hecho a mano que puede ajustarse a la historia de quien lo recibe, logrando un regalo mas cercano y especial."
                    },
                    {
                        name: "Personalizada | Diseno por encargo",
                        summary: "Detalle personalizado pensado para celebrar momentos importantes con nombres, mensajes o colores elegidos segun la ocasion."
                    },
                    {
                        name: "Personalizada | Sorpresa personalizada",
                        summary: "Pieza por encargo con enfoque emotivo, ideal para aniversarios, fechas especiales o regalos con sentido personal."
                    },
                    {
                        name: "Personalizada | Emocion hecha detalle",
                        summary: "Creacion artesanal adaptable en mensaje y acabado, perfecta para convertir un recuerdo en un obsequio unico."
                    },
                    {
                        name: "Personalizada | Recuerdo para fecha especial",
                        summary: "Diseno personalizado con presencia delicada y valor sentimental, pensado para sorprender y acompanar una celebracion."
                    },
                    {
                        name: "Personalizada | Edicion para regalar",
                        summary: "Detalle hecho a mano que puede ajustarse a la historia de quien lo recibe, logrando un regalo mas cercano y especial."
                    },
                    {
                        name: "Personalizada | Creacion con identidad",
                        summary: "Detalle personalizado pensado para celebrar momentos importantes con nombres, mensajes o colores elegidos segun la ocasion."
                    }
                ]
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
                [
                    {
                        name: "Inspiracion religiosa | Fe en detalle",
                        summary: "Pieza de inspiracion religiosa elaborada para acompanar espacios de fe, recogimiento y serenidad en el hogar."
                    },
                    {
                        name: "Inspiracion religiosa | Devocion decorativa",
                        summary: "Detalle espiritual con acabados artesanales, pensado para regalar en ocasiones de devocion, agradecimiento o bendicion."
                    },
                    {
                        name: "Inspiracion religiosa | Inspiracion para el hogar",
                        summary: "Creacion decorativa de significado religioso ideal para altares, recordatorios o rincones de oracion."
                    },
                    {
                        name: "Inspiracion religiosa | Presencia espiritual",
                        summary: "Objeto simbolico con presencia serena y mensaje de fe, perfecto para compartir como obsequio especial."
                    },
                    {
                        name: "Inspiracion religiosa | Recuerdo de bendicion",
                        summary: "Pieza artesanal que une belleza decorativa y sentido espiritual para transmitir paz, esperanza y devocion."
                    },
                    {
                        name: "Inspiracion religiosa | Luz de fe",
                        summary: "Pieza de inspiracion religiosa elaborada para acompanar espacios de fe, recogimiento y serenidad en el hogar."
                    },
                    {
                        name: "Inspiracion religiosa | Simbolo de esperanza",
                        summary: "Detalle espiritual con acabados artesanales, pensado para regalar en ocasiones de devocion, agradecimiento o bendicion."
                    },
                    {
                        name: "Inspiracion religiosa | Devocion artesanal",
                        summary: "Creacion decorativa de significado religioso ideal para altares, recordatorios o rincones de oracion."
                    },
                    {
                        name: "Inspiracion religiosa | Detalle para oracion",
                        summary: "Objeto simbolico con presencia serena y mensaje de fe, perfecto para compartir como obsequio especial."
                    },
                    {
                        name: "Inspiracion religiosa | Inspiracion de paz",
                        summary: "Pieza artesanal que une belleza decorativa y sentido espiritual para transmitir paz, esperanza y devocion."
                    },
                    {
                        name: "Inspiracion religiosa | Recuerdo espiritual",
                        summary: "Pieza de inspiracion religiosa elaborada para acompanar espacios de fe, recogimiento y serenidad en el hogar."
                    },
                    {
                        name: "Inspiracion religiosa | Presencia con significado",
                        summary: "Detalle espiritual con acabados artesanales, pensado para regalar en ocasiones de devocion, agradecimiento o bendicion."
                    }
                ]
            )
        }
    };

    window.AMARTR3S_DATA = {
        categories: categories
    };
})();
