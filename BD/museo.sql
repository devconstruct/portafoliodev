-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 03-10-2023 a las 03:05:47
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Eventos`
--

CREATE TABLE `Eventos` (
  `ID` int(11) NOT NULL,
  `Nombre_del_Evento` varchar(255) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Descripcion` text,
  `ID_del_Museo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Eventos`
--

INSERT INTO `Eventos` (`ID`, `Nombre_del_Evento`, `Fecha`, `Descripcion`, `ID_del_Museo`) VALUES
(1, 'Exposición Renacentista', '2023-02-15', 'Una exposición que celebra el arte renacentista italiano.', 1),
(2, 'Noche de Gala en el Museo', '2023-03-20', 'Una velada elegante con música en vivo y degustación de vinos en el museo.', 1),
(3, 'Conferencia de Arte Contemporáneo', '2023-04-10', 'Una charla sobre las tendencias actuales en el arte contemporáneo.', 1),
(4, 'Taller de Pintura para Niños', '2023-05-05', 'Un taller de arte divertido y educativo para niños de todas las edades.', 1),
(5, 'Recorrido Histórico del Museo', '2023-06-12', 'Un recorrido guiado que explora la historia del museo y sus tesoros.', 1),
(6, 'Noche de Jazz en el Museo', '2023-07-18', 'Una noche de música de jazz en los jardines del museo.', 2),
(7, 'Exposición de Esculturas Renacentistas', '2023-08-25', 'Una exhibición de esculturas renacentistas destacadas.', 2),
(8, 'Charla sobre la Vida de Leonardo da Vinci', '2023-09-10', 'Una charla informativa sobre la vida y obra de Leonardo da Vinci.', 2),
(9, 'Día de Arte en Familia', '2023-10-02', 'Un día de actividades artísticas para familias en el museo.', 2),
(10, 'Concierto de Música Clásica', '2023-11-15', 'Un concierto en el museo interpretando música clásica.', 3),
(11, 'Exposición de Arte Contemporáneo', '2023-12-20', 'Una exposición que presenta las obras de artistas contemporáneos.', 3),
(12, 'Charla sobre la Pintura al Óleo', '2024-01-08', 'Una charla sobre la técnica de la pintura al óleo y su historia.', 3),
(13, 'Tarde de Arte y Té', '2024-02-12', 'Una tarde de té y actividades artísticas en los jardines del museo.', 3),
(14, 'Exposición de Fósiles', '2024-03-05', 'Una exposición que explora la historia de la vida en la Tierra.', 4),
(15, 'Noche de Cine en el Museo', '2024-04-18', 'Una proyección de películas clásicas relacionadas con el arte.', 4),
(16, 'Charla sobre la Medicina Antigua', '2024-05-10', 'Una charla sobre la historia de la medicina y la farmacia.', 4),
(17, 'Taller de Escultura para Adultos', '2024-06-23', 'Un taller de escultura para adultos que deseen explorar su creatividad.', 4),
(18, 'Concierto de Música Barroca', '2024-07-30', 'Un concierto que presenta música barroca en un entorno histórico.', 5),
(19, 'Exposición de Inventos de Leonardo', '2024-08-14', 'Una muestra de los inventos y diseños de Leonardo da Vinci.', 5),
(20, 'Charla sobre la Ciencia de Leonardo', '2024-09-09', 'Una charla que explora el lado científico de Leonardo da Vinci.', 5),
(21, 'Tarde de Pintura al Aire Libre', '2024-10-05', 'Una tarde de pintura al aire libre en los jardines del museo.', 5),
(22, 'Recorrido Nocturno del Museo', '2024-11-20', 'Un recorrido especial por el museo bajo la luz de la luna.', 6),
(23, 'Exposición de Esculturas de Rodin', '2024-12-12', 'Una exhibición de esculturas del famoso escultor Auguste Rodin.', 6),
(24, 'Charla sobre el Surrealismo', '2025-01-25', 'Una charla que explora el movimiento surrealista en el arte.', 6),
(25, 'Tarde de Dibujo y Café', '2025-02-28', 'Una tarde de dibujo y café en el café del museo.', 6),
(26, 'Concierto de Música Clásica', '2025-03-15', 'Un concierto en el museo interpretando música clásica.', 7),
(27, 'Exposición de Arte Contemporáneo', '2025-04-20', 'Una exposición que presenta las obras de artistas contemporáneos.', 7),
(28, 'Charla sobre la Pintura al Óleo', '2025-05-10', 'Una charla sobre la técnica de la pintura al óleo y su historia.', 7),
(29, 'Tarde de Arte y Té', '2025-06-02', 'Una tarde de té y actividades artísticas en los jardines del museo.', 7),
(30, 'Exposición de Fósiles', '2025-07-08', 'Una exposición que explora la historia de la vida en la Tierra.', 8),
(31, 'Noche de Cine en el Museo', '2025-08-22', 'Una proyección de películas clásicas relacionadas con el arte.', 8),
(32, 'Charla sobre la Medicina Antigua', '2025-09-18', 'Una charla sobre la historia de la medicina y la farmacia.', 8),
(33, 'Taller de Escultura para Adultos', '2025-10-30', 'Un taller de escultura para adultos que deseen explorar su creatividad.', 8),
(34, 'Concierto de Música Barroca', '2025-11-25', 'Un concierto que presenta música barroca en un entorno histórico.', 9),
(35, 'Exposición de Inventos de Leonardo', '2025-12-14', 'Una muestra de los inventos y diseños de Leonardo da Vinci.', 9),
(36, 'Charla sobre la Ciencia de Leonardo', '2026-01-09', 'Una charla que explora el lado científico de Leonardo da Vinci.', 9),
(37, 'Tarde de Pintura al Aire Libre', '2026-02-03', 'Una tarde de pintura al aire libre en los jardines del museo.', 9),
(38, 'Recorrido Nocturno del Museo', '2026-03-17', 'Un recorrido especial por el museo bajo la luz de la luna.', 10),
(39, 'Exposición de Esculturas de Rodin', '2026-04-28', 'Una exhibición de esculturas del famoso escultor Auguste Rodin.', 10),
(40, 'Charla sobre el Surrealismo', '2026-05-20', 'Una charla que explora el movimiento surrealista en el arte.', 10),
(41, 'Tarde de Dibujo y Café', '2026-06-12', 'Una tarde de dibujo y café en el café del museo.', 10),
(42, 'Concierto de Música Clásica', '2026-07-03', 'Un concierto en el museo interpretando música clásica.', 11),
(43, 'Exposición de Arte Contemporáneo', '2026-08-14', 'Una exposición que presenta las obras de artistas contemporáneos.', 11),
(44, 'Charla sobre la Pintura al Óleo', '2026-09-26', 'Una charla sobre la técnica de la pintura al óleo y su historia.', 11),
(45, 'Tarde de Arte y Té', '2026-10-18', 'Una tarde de té y actividades artísticas en los jardines del museo.', 11),
(46, 'Exposición de Fósiles', '2026-11-30', 'Una exposición que explora la historia de la vida en la Tierra.', 12),
(47, 'Noche de Cine en el Museo', '2026-12-22', 'Una proyección de películas clásicas relacionadas con el arte.', 12),
(48, 'Charla sobre la Medicina Antigua', '2027-01-14', 'Una charla sobre la historia de la medicina y la farmacia.', 12),
(49, 'Taller de Escultura para Adultos', '2027-02-27', 'Un taller de escultura para adultos que deseen explorar su creatividad.', 12),
(50, 'Concierto de Música Barroca', '2027-03-11', 'Un concierto que presenta música barroca en un entorno histórico.', 13),
(51, 'Exposición de Inventos de Leonardo', '2027-04-24', 'Una muestra de los inventos y diseños de Leonardo da Vinci.', 13),
(52, 'Charla sobre la Ciencia de Leonardo', '2027-05-17', 'Una charla que explora el lado científico de Leonardo da Vinci.', 13),
(53, 'Tarde de Pintura al Aire Libre', '2027-06-05', 'Una tarde de pintura al aire libre en los jardines del museo.', 13),
(54, 'Recorrido Nocturno del Museo', '2027-07-29', 'Un recorrido especial por el museo bajo la luz de la luna.', 14),
(55, 'Exposición de Esculturas de Rodin', '2027-08-12', 'Una exhibición de esculturas del famoso escultor Auguste Rodin.', 14),
(56, 'Charla sobre el Surrealismo', '2027-09-03', 'Una charla que explora el movimiento surrealista en el arte.', 14),
(57, 'Tarde de Dibujo y Café', '2027-10-27', 'Una tarde de dibujo y café en el café del museo.', 14),
(58, 'Concierto de Música Clásica', '2027-11-18', 'Un concierto en el museo interpretando música clásica.', 15),
(59, 'Exposición de Arte Contemporáneo', '2027-12-09', 'Una exposición que presenta las obras de artistas contemporáneos.', 15),
(60, 'Charla sobre la Pintura al Óleo', '2028-01-22', 'Una charla sobre la técnica de la pintura al óleo y su historia.', 15),
(61, 'Tarde de Arte y Té', '2028-02-14', 'Una tarde de té y actividades artísticas en los jardines del museo.', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Lugares`
--

CREATE TABLE `Lugares` (
  `ID` int(11) NOT NULL,
  `Nombre_del_Lugar` varchar(255) DEFAULT NULL,
  `Descripcion` text,
  `ID_del_Museo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Lugares`
--

INSERT INTO `Lugares` (`ID`, `Nombre_del_Lugar`, `Descripcion`, `ID_del_Museo`) VALUES
(1, 'Sala de Exposiciones Principal', 'La sala principal del museo que albergaba \"La Perla de Florencia\".', 1),
(2, 'Sala de las Antigüedades', 'Una sala llena de antigüedades y artefactos históricos.', 1),
(3, 'Jardines del Museo', 'Los hermosos jardines diseñados por Elena Bianchi en los terrenos del museo.', 1),
(4, 'Oficina de la Directora', 'La oficina privada de Elena Bianchi, la directora del museo.', 1),
(5, 'Sala de Pinturas Renacentistas', 'Una sala dedicada a las obras maestras del Renacimiento italiano.', 1),
(6, 'Sala de Esculturas', 'Una colección de esculturas renombradas de diferentes períodos artísticos.', 1),
(7, 'Sótano del Museo', 'El área de almacenamiento y archivos del museo.', 1),
(8, 'Cafetería del Museo', 'El lugar donde los visitantes pueden disfrutar de una taza de café y pasteles.', 1),
(9, 'Sala de Arte Contemporáneo', 'Una sala dedicada a las obras de arte contemporáneo.', 1),
(10, 'Sala de Reliquias Medievales', 'Una colección de reliquias y arte medieval.', 1),
(11, 'Salón de Recepciones', 'Un espacio utilizado para eventos especiales y recepciones.', 1),
(12, 'Terraza del Museo', 'Una terraza con vista panorámica de Florencia.', 1),
(13, 'Sala de Exposiciones Principal', 'La sala principal del museo que albergaba \"La Perla de Florencia\".', 2),
(14, 'Sala de las Antigüedades', 'Una sala llena de antigüedades y artefactos históricos.', 2),
(15, 'Jardines del Museo', 'Los hermosos jardines diseñados por Elena Bianchi en los terrenos del museo.', 2),
(16, 'Oficina de la Directora', 'La oficina privada de Elena Bianchi, la directora del museo.', 2),
(17, 'Sala de Pinturas Renacentistas', 'Una sala dedicada a las obras maestras del Renacimiento italiano.', 2),
(18, 'Sala de Esculturas', 'Una colección de esculturas renombradas de diferentes períodos artísticos.', 2),
(19, 'Sótano del Museo', 'El área de almacenamiento y archivos del museo.', 2),
(20, 'Cafetería del Museo', 'El lugar donde los visitantes pueden disfrutar de una taza de café y pasteles.', 2),
(21, 'Sala de Arte Contemporáneo', 'Una sala dedicada a las obras de arte contemporáneo.', 2),
(22, 'Sala de Reliquias Medievales', 'Una colección de reliquias y arte medieval.', 2),
(23, 'Salón de Recepciones', 'Un espacio utilizado para eventos especiales y recepciones.', 2),
(24, 'Terraza del Museo', 'Una terraza con vista panorámica de Florencia.', 2),
(25, 'Sala de Exposiciones Principal', 'La sala principal del museo que albergaba \"La Perla de Florencia\".', 3),
(26, 'Sala de las Antigüedades', 'Una sala llena de antigüedades y artefactos históricos.', 3),
(27, 'Jardines del Museo', 'Los hermosos jardines diseñados por Elena Bianchi en los terrenos del museo.', 3),
(28, 'Oficina de la Directora', 'La oficina privada de Elena Bianchi, la directora del museo.', 3),
(29, 'Sala de Pinturas Renacentistas', 'Una sala dedicada a las obras maestras del Renacimiento italiano.', 3),
(30, 'Sala de Esculturas', 'Una colección de esculturas renombradas de diferentes períodos artísticos.', 3),
(31, 'Sótano del Museo', 'El área de almacenamiento y archivos del museo.', 3),
(32, 'Cafetería del Museo', 'El lugar donde los visitantes pueden disfrutar de una taza de café y pasteles.', 3),
(33, 'Sala de Arte Contemporáneo', 'Una sala dedicada a las obras de arte contemporáneo.', 3),
(34, 'Sala de Reliquias Medievales', 'Una colección de reliquias y arte medieval.', 3),
(35, 'Salón de Recepciones', 'Un espacio utilizado para eventos especiales y recepciones.', 3),
(36, 'Terraza del Museo', 'Una terraza con vista panorámica de Florencia.', 3),
(37, 'Sala de Exposiciones Principal', 'La sala principal del museo que albergaba \"La Perla de Florencia\".', 4),
(38, 'Sala de las Antigüedades', 'Una sala llena de antigüedades y artefactos históricos.', 4),
(39, 'Jardines del Museo', 'Los hermosos jardines diseñados por Elena Bianchi en los terrenos del museo.', 4),
(40, 'Oficina de la Directora', 'La oficina privada de Elena Bianchi, la directora del museo.', 4),
(41, 'Sala de Pinturas Renacentistas', 'Una sala dedicada a las obras maestras del Renacimiento italiano.', 4),
(42, 'Sala de Esculturas', 'Una colección de esculturas renombradas de diferentes períodos artísticos.', 4),
(43, 'Sótano del Museo', 'El área de almacenamiento y archivos del museo.', 4),
(44, 'Cafetería del Museo', 'El lugar donde los visitantes pueden disfrutar de una taza de café y pasteles.', 4),
(45, 'Sala de Arte Contemporáneo', 'Una sala dedicada a las obras de arte contemporáneo.', 4),
(46, 'Sala de Reliquias Medievales', 'Una colección de reliquias y arte medieval.', 4),
(47, 'Salón de Recepciones', 'Un espacio utilizado para eventos especiales y recepciones.', 4),
(48, 'Terraza del Museo', 'Una terraza con vista panorámica de Florencia.', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Museos`
--

CREATE TABLE `Museos` (
  `ID` int(11) NOT NULL,
  `Nombre_del_Museo` varchar(255) DEFAULT NULL,
  `Ubicacion` varchar(255) DEFAULT NULL,
  `Descripcion_del_Museo` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Museos`
--

INSERT INTO `Museos` (`ID`, `Nombre_del_Museo`, `Ubicacion`, `Descripcion_del_Museo`) VALUES
(1, 'Museo de Arte Mediceo', 'Florencia, Italia', 'Un templo de la cultura y el arte que alberga una colección de incalculable valor histórico y artístico.'),
(2, 'Galería Uffizi', 'Florencia, Italia', 'Una de las galerías de arte más famosas del mundo, conocida por su impresionante colección renacentista.'),
(3, 'Museo dell\'Opera del Duomo', 'Florencia, Italia', 'Alberga muchas de las obras de arte originales que solían decorar la Catedral de Florencia.'),
(4, 'Palazzo Pitti', 'Florencia, Italia', 'Un majestuoso palacio que alberga varias galerías y museos, incluido el Museo de la Moda.'),
(5, 'Museo Galileo', 'Florencia, Italia', 'Dedicado a la historia de la ciencia y la astronomía, cuenta con una impresionante colección de instrumentos científicos antiguos.'),
(6, 'Museo di San Marco', 'Florencia, Italia', 'Conocido por sus obras de Fra Angelico y su ambiente tranquilo y espiritual.'),
(7, 'Museo Nacional del Bargello', 'Florencia, Italia', 'Un museo dedicado a la escultura renacentista y al arte aplicado.'),
(8, 'Museo Stibbert', 'Florencia, Italia', 'Famoso por su colección de armaduras, armas y trajes históricos.'),
(9, 'Museo Horne', 'Florencia, Italia', 'Un museo en una casa renacentista que alberga una colección de arte y antigüedades.'),
(10, 'Museo de Historia de la Ciencia', 'Florencia, Italia', 'Dedicado a la historia de la ciencia y sus avances.'),
(11, 'Museo del Calcio', 'Florencia, Italia', 'Un museo dedicado al fútbol y la historia del club de fútbol Fiorentina.'),
(12, 'Museo Gucci', 'Florencia, Italia', 'Dedicado a la famosa marca de moda italiana, muestra la historia de la moda de lujo.'),
(13, 'Museo Salvatore Ferragamo', 'Florencia, Italia', 'Dedicado al famoso diseñador de calzado italiano y su legado en la moda.'),
(14, 'Museo Galería de los Oficios', 'Florencia, Italia', 'Un museo dedicado a los artesanos y gremios de la ciudad renacentista.'),
(15, 'Museo Galileo Galilei', 'Florencia, Italia', 'Homenaje al famoso científico y sus contribuciones a la astronomía y la física.'),
(16, 'Museo de Antropología', 'Florencia, Italia', 'Un museo que explora la historia de la humanidad y la antropología cultural.'),
(17, 'Museo de Arte Moderno de Florencia', 'Florencia, Italia', 'Dedicado al arte moderno y contemporáneo en contraste con el arte renacentista de la ciudad.'),
(18, 'Museo Novecento', 'Florencia, Italia', 'Un museo de arte contemporáneo que muestra obras de artistas italianos del siglo XX.'),
(19, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(20, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(21, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(22, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(23, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(24, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(25, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(26, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(27, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(28, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(29, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(30, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(31, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(32, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(33, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(34, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(35, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(36, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(37, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(38, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(39, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(40, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(41, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(42, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(43, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(44, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(45, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(46, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(47, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(48, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(49, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(50, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(51, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(52, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(53, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(54, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(55, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(56, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(57, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(58, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(59, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(60, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(61, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(62, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(63, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(64, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(65, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(66, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(67, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(68, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(69, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(70, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(71, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(72, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(73, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(74, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(75, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(76, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(77, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(78, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(79, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(80, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(81, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(82, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(83, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(84, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(85, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(86, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(87, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(88, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(89, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(90, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(91, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(92, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(93, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(94, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(95, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(96, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(97, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(98, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(99, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(100, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(101, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(102, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(103, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(104, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(105, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(106, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(107, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(108, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(109, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(110, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(111, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(112, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(113, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(114, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(115, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(116, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(117, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(118, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(119, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(120, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(121, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(122, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(123, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(124, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(125, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(126, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(127, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(128, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(129, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(130, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(131, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(132, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(133, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(134, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(135, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(136, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(137, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(138, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(139, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(140, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(141, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(142, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(143, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(144, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(145, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(146, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(147, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(148, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(149, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(150, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(151, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(152, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(153, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(154, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(155, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(156, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(157, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(158, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(159, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(160, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(161, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(162, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(163, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(164, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(165, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(166, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(167, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(168, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(169, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(170, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(171, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(172, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(173, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(174, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(175, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(176, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(177, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(178, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(179, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(180, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(181, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(182, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(183, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(184, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.'),
(185, 'Museo de la Casa de Dante', 'Florencia, Italia', 'Un museo dedicado al famoso poeta Dante Alighieri y su vida en Florencia.'),
(186, 'Museo de la Opera del Duomo', 'Florencia, Italia', 'Alberga esculturas y arte religioso que alguna vez estuvo en la Catedral de Florencia.'),
(187, 'Museo del Bargello', 'Florencia, Italia', 'Un museo de escultura renacentista y arte decorativo.'),
(188, 'Museo de Historia Natural de la Universidad de Florencia', 'Florencia, Italia', 'Dedicado a la historia natural y la biodiversidad.'),
(189, 'Museo Leonardiano', 'Florencia, Italia', 'Un museo dedicado a Leonardo da Vinci y sus invenciones.'),
(190, 'Museo del Deporte', 'Florencia, Italia', 'Dedicado a la historia del deporte en Florencia y sus equipos deportivos.'),
(191, 'Museo de Historia de la Farmacia', 'Florencia, Italia', 'Un museo que muestra la historia de la farmacia y la medicina en la ciudad.'),
(192, 'Museo de la Basílica de Santa Maria Novella', 'Florencia, Italia', 'Un museo que presenta arte sacro y tesoros de la basílica.'),
(193, 'Museo del Palazzo Vecchio', 'Florencia, Italia', 'Un museo en el icónico Palazzo Vecchio, que alberga arte y tesoros históricos.'),
(194, 'Museo de Arte Contemporáneo de Florencia', 'Florencia, Italia', 'Dedicado al arte contemporáneo y las tendencias artísticas actuales.'),
(195, 'Museo Marino Marini', 'Florencia, Italia', 'Dedicado a la obra del escultor italiano Marino Marini.'),
(196, 'Museo del Bigallo', 'Florencia, Italia', 'Un museo ubicado en un antiguo edificio de la Hermandad del Bigallo, que alberga arte sacro y objetos históricos.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Obras_de_Arte`
--

CREATE TABLE `Obras_de_Arte` (
  `ID` int(11) NOT NULL,
  `Nombre_de_la_Obra` varchar(255) DEFAULT NULL,
  `Descripcion` text,
  `Ano_de_Creacion` int(11) DEFAULT NULL,
  `Valor_Historico` decimal(10,2) DEFAULT NULL,
  `Valor_Artistico` decimal(10,2) DEFAULT NULL,
  `ID_del_Museo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Obras_de_Arte`
--

INSERT INTO `Obras_de_Arte` (`ID`, `Nombre_de_la_Obra`, `Descripcion`, `Ano_de_Creacion`, `Valor_Historico`, `Valor_Artistico`, `ID_del_Museo`) VALUES
(1, 'La Mona Lisa', 'Una famosa pintura de Leonardo da Vinci.', 1503, '10000000.00', '5000000.00', 1),
(2, 'La Última Cena', 'Una obra maestra de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.', 1495, '8000000.00', '4500000.00', 1),
(3, 'David', 'Una escultura icónica de Miguel Ángel que representa a David antes de enfrentarse a Goliat.', 1504, '7500000.00', '4000000.00', 2),
(4, 'La Creación de Adán', 'Un fresco en la Capilla Sixtina de Miguel Ángel que representa la creación de Adán.', 1512, '9000000.00', '4700000.00', 2),
(5, 'La Venus de Milo', 'Una antigua escultura griega que representa a Afrodita (Venus) de Milo.', -100, '6000000.00', '3500000.00', 3),
(6, 'El Nacimiento de Venus', 'Una pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus.', 1484, '7000000.00', '3800000.00', 3),
(7, 'La Primavera', 'Otra obra famosa de Sandro Botticelli que representa una alegoría de la primavera.', 1482, '6500000.00', '3600000.00', 4),
(8, 'El Pensador', 'Una escultura de Auguste Rodin que representa a un hombre profundamente pensativo.', 1881, '5000000.00', '2800000.00', 4),
(9, 'La Noche Estrellada', 'Una pintura de Vincent van Gogh que muestra una noche estrellada en un pueblo.', 1889, '5500000.00', '3000000.00', 5),
(10, 'Los Girasoles', 'Una serie de pinturas de Vincent van Gogh que representan girasoles en diferentes estados.', 1888, '5200000.00', '2900000.00', 5),
(11, 'La Persistencia de la Memoria', 'Una pintura surrealista de Salvador Dalí que presenta relojes derretidos en un paisaje extraño.', 1931, '4800000.00', '2600000.00', 6),
(12, 'La Tentación de San Antonio', 'Otra obra famosa de Salvador Dalí que representa la tentación de San Antonio.', 1946, '5100000.00', '2800000.00', 6),
(13, 'Guernica', 'Una pintura de Pablo Picasso que representa los horrores de la Guerra Civil Española.', 1937, '7500000.00', '4000000.00', 7),
(14, 'Les Demoiselles d\'Avignon', 'Una pintura revolucionaria de Pablo Picasso que muestra figuras desnudas de forma abstracta.', 1907, '7200000.00', '3800000.00', 7),
(15, 'La Última Cena', 'Una obra maestra de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.', 1495, '8000000.00', '4500000.00', 8),
(16, 'David', 'Una escultura icónica de Miguel Ángel que representa a David antes de enfrentarse a Goliat.', 1504, '7500000.00', '4000000.00', 8),
(17, 'La Creación de Adán', 'Un fresco en la Capilla Sixtina de Miguel Ángel que representa la creación de Adán.', 1512, '9000000.00', '4700000.00', 9),
(18, 'La Venus de Milo', 'Una antigua escultura griega que representa a Afrodita (Venus) de Milo.', -100, '6000000.00', '3500000.00', 9),
(19, 'El Nacimiento de Venus', 'Una pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus.', 1484, '7000000.00', '3800000.00', 10),
(20, 'La Primavera', 'Otra obra famosa de Sandro Botticelli que representa una alegoría de la primavera.', 1482, '6500000.00', '3600000.00', 10),
(21, 'El Pensador', 'Una escultura de Auguste Rodin que representa a un hombre profundamente pensativo.', 1881, '5000000.00', '2800000.00', 11),
(22, 'La Noche Estrellada', 'Una pintura de Vincent van Gogh que muestra una noche estrellada en un pueblo.', 1889, '5500000.00', '3000000.00', 11),
(23, 'Los Girasoles', 'Una serie de pinturas de Vincent van Gogh que representan girasoles en diferentes estados.', 1888, '5200000.00', '2900000.00', 12),
(24, 'La Persistencia de la Memoria', 'Una pintura surrealista de Salvador Dalí que presenta relojes derretidos en un paisaje extraño.', 1931, '4800000.00', '2600000.00', 12),
(25, 'La Tentación de San Antonio', 'Otra obra famosa de Salvador Dalí que representa la tentación de San Antonio.', 1946, '5100000.00', '2800000.00', 13),
(26, 'Guernica', 'Una pintura de Pablo Picasso que representa los horrores de la Guerra Civil Española.', 1937, '7500000.00', '4000000.00', 13),
(27, 'Les Demoiselles d\'Avignon', 'Una pintura revolucionaria de Pablo Picasso que muestra figuras desnudas de forma abstracta.', 1907, '7200000.00', '3800000.00', 14),
(28, 'La Última Cena', 'Una obra maestra de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.', 1495, '8000000.00', '4500000.00', 14),
(29, 'David', 'Una escultura icónica de Miguel Ángel que representa a David antes de enfrentarse a Goliat.', 1504, '7500000.00', '4000000.00', 15),
(30, 'La Creación de Adán', 'Un fresco en la Capilla Sixtina de Miguel Ángel que representa la creación de Adán.', 1512, '9000000.00', '4700000.00', 15),
(31, 'La Venus de Milo', 'Una antigua escultura griega que representa a Afrodita (Venus) de Milo.', -100, '6000000.00', '3500000.00', 16),
(32, 'El Nacimiento de Venus', 'Una pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus.', 1484, '7000000.00', '3800000.00', 16),
(33, 'La Primavera', 'Otra obra famosa de Sandro Botticelli que representa una alegoría de la primavera.', 1482, '6500000.00', '3600000.00', 17),
(34, 'El Pensador', 'Una escultura de Auguste Rodin que representa a un hombre profundamente pensativo.', 1881, '5000000.00', '2800000.00', 17),
(35, 'La Noche Estrellada', 'Una pintura de Vincent van Gogh que muestra una noche estrellada en un pueblo.', 1889, '5500000.00', '3000000.00', 18),
(36, 'Los Girasoles', 'Una serie de pinturas de Vincent van Gogh que representan girasoles en diferentes estados.', 1888, '5200000.00', '2900000.00', 18),
(37, 'La Persistencia de la Memoria', 'Una pintura surrealista de Salvador Dalí que presenta relojes derretidos en un paisaje extraño.', 1931, '4800000.00', '2600000.00', 19),
(38, 'La Tentación de San Antonio', 'Otra obra famosa de Salvador Dalí que representa la tentación de San Antonio.', 1946, '5100000.00', '2800000.00', 19),
(39, 'Guernica', 'Una pintura de Pablo Picasso que representa los horrores de la Guerra Civil Española.', 1937, '7500000.00', '4000000.00', 20),
(40, 'Les Demoiselles d\'Avignon', 'Una pintura revolucionaria de Pablo Picasso que muestra figuras desnudas de forma abstracta.', 1907, '7200000.00', '3800000.00', 20),
(41, 'La Última Cena', 'Una obra maestra de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.', 1495, '8000000.00', '4500000.00', 21),
(42, 'David', 'Una escultura icónica de Miguel Ángel que representa a David antes de enfrentarse a Goliat.', 1504, '7500000.00', '4000000.00', 21),
(43, 'La Creación de Adán', 'Un fresco en la Capilla Sixtina de Miguel Ángel que representa la creación de Adán.', 1512, '9000000.00', '4700000.00', 22),
(44, 'La Venus de Milo', 'Una antigua escultura griega que representa a Afrodita (Venus) de Milo.', -100, '6000000.00', '3500000.00', 22),
(45, 'El Nacimiento de Venus', 'Una pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus.', 1484, '7000000.00', '3800000.00', 23),
(46, 'La Primavera', 'Otra obra famosa de Sandro Botticelli que representa una alegoría de la primavera.', 1482, '6500000.00', '3600000.00', 23),
(47, 'El Pensador', 'Una escultura de Auguste Rodin que representa a un hombre profundamente pensativo.', 1881, '5000000.00', '2800000.00', 24),
(48, 'La Noche Estrellada', 'Una pintura de Vincent van Gogh que muestra una noche estrellada en un pueblo.', 1889, '5500000.00', '3000000.00', 24),
(49, 'Los Girasoles', 'Una serie de pinturas de Vincent van Gogh que representan girasoles en diferentes estados.', 1888, '5200000.00', '2900000.00', 25),
(50, 'La Persistencia de la Memoria', 'Una pintura surrealista de Salvador Dalí que presenta relojes derretidos en un paisaje extraño.', 1931, '4800000.00', '2600000.00', 25),
(51, 'La Tentación de San Antonio', 'Otra obra famosa de Salvador Dalí que representa la tentación de San Antonio.', 1946, '5100000.00', '2800000.00', 26),
(52, 'Guernica', 'Una pintura de Pablo Picasso que representa los horrores de la Guerra Civil Española.', 1937, '7500000.00', '4000000.00', 26),
(53, 'Les Demoiselles d\'Avignon', 'Una pintura revolucionaria de Pablo Picasso que muestra figuras desnudas de forma abstracta.', 1907, '7200000.00', '3800000.00', 27),
(54, 'La Última Cena', 'Una obra maestra de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.', 1495, '8000000.00', '4500000.00', 27),
(55, 'David', 'Una escultura icónica de Miguel Ángel que representa a David antes de enfrentarse a Goliat.', 1504, '7500000.00', '4000000.00', 28),
(56, 'La Creación de Adán', 'Un fresco en la Capilla Sixtina de Miguel Ángel que representa la creación de Adán.', 1512, '9000000.00', '4700000.00', 28),
(57, 'La Venus de Milo', 'Una antigua escultura griega que representa a Afrodita (Venus) de Milo.', -100, '6000000.00', '3500000.00', 29),
(58, 'El Nacimiento de Venus', 'Una pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus.', 1484, '7000000.00', '3800000.00', 29),
(59, 'La Primavera', 'Otra obra famosa de Sandro Botticelli que representa una alegoría de la primavera.', 1482, '6500000.00', '3600000.00', 30),
(60, 'El Pensador', 'Una escultura de Auguste Rodin que representa a un hombre profundamente pensativo.', 1881, '5000000.00', '2800000.00', 30),
(61, 'La Noche Estrellada', 'Una pintura de Vincent van Gogh que muestra una noche estrellada en un pueblo.', 1889, '5500000.00', '3000000.00', 31),
(62, 'Los Girasoles', 'Una serie de pinturas de Vincent van Gogh que representan girasoles en diferentes estados.', 1888, '5200000.00', '2900000.00', 31),
(63, 'La Persistencia de la Memoria', 'Una pintura surrealista de Salvador Dalí que presenta relojes derretidos en un paisaje extraño.', 1931, '4800000.00', '2600000.00', 32),
(64, 'La Tentación de San Antonio', 'Otra obra famosa de Salvador Dalí que representa la tentación de San Antonio.', 1946, '5100000.00', '2800000.00', 32),
(65, 'Guernica', 'Una pintura de Pablo Picasso que representa los horrores de la Guerra Civil Española.', 1937, '7500000.00', '4000000.00', 33),
(66, 'Les Demoiselles d\'Avignon', 'Una pintura revolucionaria de Pablo Picasso que muestra figuras desnudas de forma abstracta.', 1907, '7200000.00', '3800000.00', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Personajes`
--

CREATE TABLE `Personajes` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL,
  `Ocupacion` varchar(255) DEFAULT NULL,
  `Pasatiempo` varchar(255) DEFAULT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Personajes`
--

INSERT INTO `Personajes` (`ID`, `Nombre`, `Edad`, `Ocupacion`, `Pasatiempo`, `Descripcion`) VALUES
(1, 'Detective Giulia Russo', 38, 'Detective de la policía de Florencia', 'Coleccionar antigüedades', 'Investigadora tenaz apasionada por el arte.'),
(2, 'Alessio Martini', 35, 'Periodista de investigación de arte', 'Fotografía de paisajes', 'Periodista intrépido con ojo agudo para los detalles.'),
(3, 'Francesca Romano', 32, 'Historiadora de Arte', 'Pintura al óleo', 'Experta en el Renacimiento italiano y pintora talentosa.'),
(4, 'Elena Bianchi', 40, 'Directora del Museo de Arte Mediceo', 'Jardinería', 'Líder apasionada y dedicada al museo.'),
(5, 'Leonardo Rossi', 50, 'Director del Museo de Arte Mediceo', 'Escritura de poesía', 'Erudito del Renacimiento con alma poética.'),
(6, 'Isabella Bianchi', 35, 'Conservadora del Museo', 'Tocar el piano', 'Conservadora apasionada y talentosa.'),
(7, 'Antonio Moretti', 45, 'Jefe de Seguridad del Museo', 'Escalada', 'Hombre de acción y adrenalina.'),
(8, 'Marco Bianchi', 40, 'Curador del Museo de Arte Mediceo', 'Cocina gourmet', 'Amante de la gastronomía y la cocina gourmet.'),
(9, 'Maria Russo', 55, 'Abogada de arte', 'Navegar en velero', 'Abogada experimentada con espíritu aventurero.'),
(10, 'Giovanni Romano', 60, 'Coleccionista de arte', 'Coleccionar vinos', 'Coleccionista apasionado de arte y vinos.'),
(11, 'Sofia Martini', 30, 'Asistente de la directora del museo', 'Escritura creativa', 'Escritora creativa en ciernes.'),
(12, 'Alejandro Gomez', 28, 'Guía de museo', 'Escultura', 'Apasionado por la escultura renacentista.'),
(13, 'Roberto Ferrari', 42, 'Restaurador de arte', 'Buceo', 'Experto en restauración de pinturas antiguas.'),
(14, 'Carolina Lopez', 29, 'Arqueóloga', 'Exploración de catacumbas', 'Especialista en la historia subterránea de Florencia.'),
(15, 'Luisa Moretti', 55, 'Restauradora de arte', 'Cocina italiana', 'Restauradora de obras de arte italianas clásicas.'),
(16, 'Paolo Conti', 36, 'Artista callejero', 'Graffiti', 'Creador de arte urbano inspirado en el Renacimiento.'),
(17, 'Valentina Rinaldi', 45, 'Escultora', 'Escultura en madera', 'Esculpe figuras renacentistas con precisión.'),
(18, 'Riccardo Martini', 33, 'Camarógrafo', 'Cine documental', 'Filma documentales sobre la historia del arte.'),
(19, 'Luis Martinez', 48, 'Arqueólogo submarino', 'Buceo arqueológico', 'Explora naufragios históricos en las costas italianas.'),
(20, 'Elena Fiore', 37, 'Diseñadora de moda', 'Diseño renacentista', 'Crea moda inspirada en la era del Renacimiento.'),
(21, 'Claudio Barbieri', 50, 'Maestro de restauración', 'Arte sacro', 'Restaura obras de arte sacro en iglesias antiguas.'),
(22, 'Sergio Caruso', 41, 'Cocinero', 'Cocina toscana', 'Chef experto en la cocina tradicional toscana.'),
(23, 'Lorenzo De Luca', 31, 'Historiador de moda', 'Moda renacentista', 'Investiga la moda de la época renacentista.'),
(24, 'Gabriela Russo', 62, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música del Renacimiento.'),
(25, 'Roberto Monti', 58, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(26, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(27, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(28, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(29, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(30, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(31, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(32, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(33, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(34, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(35, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(36, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(37, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(38, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(39, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(40, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(41, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(42, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(43, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(44, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(45, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(46, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(47, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(48, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(49, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(50, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(51, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(52, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(53, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(54, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(55, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(56, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(57, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(58, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(59, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(60, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(61, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(62, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(63, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(64, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(65, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(66, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(67, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(68, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(69, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(70, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(71, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(72, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(73, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(74, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(75, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(76, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(77, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(78, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(79, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(80, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(81, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(82, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(83, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(84, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(85, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(86, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(87, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(88, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(89, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(90, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(91, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(92, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(93, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(94, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(95, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(96, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(97, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(98, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(99, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(100, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(101, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(102, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(103, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(104, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(105, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(106, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(107, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(108, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(109, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(110, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(111, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(112, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(113, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(114, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(115, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(116, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(117, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(118, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(119, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(120, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(121, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(122, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(123, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(124, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(125, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(126, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(127, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(128, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(129, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(130, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(131, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(132, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(133, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(134, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(135, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(136, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(137, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(138, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(139, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(140, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(141, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(142, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(143, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(144, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(145, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(146, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(147, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(148, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(149, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(150, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(151, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(152, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(153, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(154, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(155, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(156, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(157, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(158, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(159, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(160, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(161, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(162, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(163, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(164, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(165, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(166, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(167, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(168, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(169, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(170, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(171, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(172, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(173, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(174, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(175, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(176, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(177, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(178, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(179, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(180, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(181, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(182, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(183, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(184, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(185, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(186, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(187, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(188, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(189, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(190, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(191, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(192, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(193, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(194, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(195, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(196, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(197, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(198, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(199, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(200, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(201, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(202, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(203, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(204, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(205, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(206, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(207, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(208, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(209, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(210, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(211, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(212, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(213, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(214, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(215, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(216, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.'),
(217, 'Claudia Santoro', 43, 'Historiadora de la danza', 'Danza renacentista', 'Investiga y enseña danzas de la época renacentista.'),
(218, 'Enrique Castillo', 48, 'Diseñador de interiores', 'Diseño de interiores renacentista', 'Crea interiores inspirados en el Renacimiento.'),
(219, 'Marina Bianchi', 34, 'Diseñadora de joyas', 'Creación de joyas renacentistas', 'Diseña joyería inspirada en la época renacentista.'),
(220, 'Alberto Martino', 41, 'Restaurador de esculturas', 'Restauración de esculturas renacentistas', 'Restaura esculturas de la era renacentista.'),
(221, 'Olga Petrova', 55, 'Historiadora de la moda', 'Historia de la moda italiana', 'Investiga la moda italiana a lo largo de la historia.'),
(222, 'Diego Sanchez', 29, 'Tatuador', 'Tatuajes inspirados en el Renacimiento', 'Crea tatuajes basados en obras de arte renacentistas.'),
(223, 'Andrea Rosso', 38, 'Diseñador de muebles', 'Muebles inspirados en el Renacimiento', 'Crea muebles con influencia renacentista.'),
(224, 'Daniela Ferrari', 44, 'Restauradora de vitrales', 'Restauración de vitrales antiguos', 'Restaura vitrales en iglesias históricas.'),
(225, 'Gloria Santoro', 31, 'Historiadora de la gastronomía', 'Gastronomía renacentista', 'Investiga la cocina renacentista y sus ingredientes.'),
(226, 'Mauricio De Angelis', 35, 'Historiador de la ciencia', 'Ciencia renacentista', 'Estudia los avances científicos de la época renacentista.'),
(227, 'Laura Costa', 27, 'Estudiante de arte', 'Dibujo a lápiz', 'Apasionada por el arte y el dibujo.'),
(228, 'Carmen Ramos', 52, 'Fotógrafa', 'Fotografía de arte', 'Captura la esencia de las obras de arte a través de la fotografía.'),
(229, 'Ricardo Silva', 47, 'Restaurador de muebles antiguos', 'Restauración de muebles renacentistas', 'Devuelve la vida a muebles antiguos en mal estado.'),
(230, 'Mariana Ortega', 29, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Conserva y restaura cerámica histórica.'),
(231, 'Diego Morales', 40, 'Historiador del vino', 'Vinos renacentistas', 'Estudia la historia y la producción de vinos en la era renacentista.'),
(232, 'Alicia Vega', 33, 'Artista', 'Pintura al óleo', 'Crea pinturas al óleo inspiradas en el Renacimiento.'),
(233, 'Javier Soto', 38, 'Diseñador gráfico', 'Diseño renacentista', 'Diseña gráficos y logotipos con estilo renacentista.'),
(234, 'Laura Hernandez', 46, 'Historiadora de la literatura', 'Literatura renacentista', 'Investiga las obras literarias de la época renacentista.'),
(235, 'Pedro Suarez', 30, 'Restaurador de instrumentos musicales', 'Instrumentos renacentistas', 'Restaura instrumentos musicales históricos.'),
(236, 'Sandra Mendoza', 53, 'Historiadora de la religión', 'Religión renacentista', 'Estudia la influencia religiosa en la época renacentista.'),
(237, 'Felipe Castro', 37, 'Restaurador de tapices', 'Restauración de tapices antiguos', 'Conserva y restaura tapices históricos.'),
(238, 'Cristina Rios', 29, 'Diseñadora de moda', 'Moda renacentista', 'Crea ropa inspirada en la moda renacentista.'),
(239, 'Jorge Vargas', 45, 'Historiador de la arquitectura', 'Arquitectura renacentista', 'Investiga los edificios y estructuras renacentistas.'),
(240, 'Patricia Molina', 50, 'Restauradora de relojes antiguos', 'Restauración de relojes renacentistas', 'Restaura relojes antiguos de la época renacentista.'),
(241, 'Ramiro Rojas', 34, 'Historiador del teatro', 'Teatro renacentista', 'Estudia las obras de teatro de la época renacentista.'),
(242, 'Sonia Paredes', 41, 'Restauradora de manuscritos antiguos', 'Restauración de manuscritos renacentistas', 'Conserva manuscritos históricos.'),
(243, 'Gustavo Silva', 49, 'Historiador de la filosofía', 'Filosofía renacentista', 'Investiga las ideas filosóficas de la era renacentista.'),
(244, 'Marta Varela', 30, 'Artista de la cerámica', 'Cerámica renacentista', 'Crea cerámica inspirada en el Renacimiento.'),
(245, 'Julio Rivas', 37, 'Diseñador de joyas', 'Creación de joyas renacentistas', 'Diseña joyería con influencia renacentista.'),
(246, 'Adriana Jimenez', 43, 'Historiadora de la música', 'Música renacentista', 'Estudiosa de la música de la época renacentista.'),
(247, 'Roberto Montoya', 55, 'Arqueólogo', 'Excavaciones arqueológicas', 'Dirige excavaciones en sitios arqueológicos antiguos.'),
(248, 'Elena Marchesi', 44, 'Restauradora de libros', 'Restauración de manuscritos', 'Conserva manuscritos antiguos en bibliotecas.'),
(249, 'Federico Romano', 28, 'Guía turístico', 'Recorridos históricos', 'Lleva a los turistas a explorar la historia de Florencia.'),
(250, 'Laura Rossi', 49, 'Historiadora de la arquitectura', 'Arquitectura renacentista', 'Especialista en la arquitectura de la era del Renacimiento.'),
(251, 'Marta De Luca', 39, 'Escritora de historia', 'Escritura de libros', 'Autora de libros sobre la historia de Florencia.'),
(252, 'Raul Hernandez', 37, 'Investigador de arte contemporáneo', 'Arte contemporáneo', 'Estudia el arte contemporáneo en contraste con el Renacimiento.'),
(253, 'Teresa Moretti', 52, 'Restauradora de cerámica', 'Restauración de cerámica renacentista', 'Restaura cerámica antigua en museos.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pistas`
--

CREATE TABLE `Pistas` (
  `ID` int(11) NOT NULL,
  `Descripcion_de_la_Pista` text,
  `ID_del_Museo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Pistas`
--

INSERT INTO `Pistas` (`ID`, `Descripcion_de_la_Pista`, `ID_del_Museo`) VALUES
(1, 'Se ha encontrado un guante blanco en la escena del crimen.', 1),
(2, 'El vigilante nocturno afirma haber escuchado ruidos extraños la noche del robo.', 1),
(3, 'Una huella de pie fue descubierta cerca de la vitrina vacía.', 1),
(4, 'El collar desapareció justo después de que se apagara la alarma de seguridad.', 1),
(5, 'Se encontraron restos de una sustancia pegajosa en la base de la vitrina.', 1),
(6, 'Un visitante del museo reportó haber visto a alguien sospechoso rondando la exposición.', 1),
(7, 'Algunos informes sugieren que el collar podría estar maldito.', 1),
(8, 'La descripción del ladrón coincide con la de un conocido delincuente de arte.', 1),
(9, 'El sistema de cámaras de seguridad se desconectó inexplicablemente durante el robo.', 1),
(10, 'Un empleado del museo está desaparecido desde la noche del robo.', 1),
(11, 'Una nota encriptada fue encontrada en la escena del crimen.', 2),
(12, 'Se ha descubierto un mensaje oculto en una pintura cercana.', 2),
(13, 'Un visitante afirmó haber visto a alguien mirando fijamente el collar antes de su desaparición.', 2),
(14, 'Se encontraron huellas digitales en el cristal de la vitrina.', 2),
(15, 'Un empleado del museo parece nervioso y evita responder preguntas sobre la noche del robo.', 2),
(16, 'Un testigo afirma haber visto a un individuo encapuchado salir del museo esa noche.', 2),
(17, 'El collar es conocido por su historia de traer fortuna y desgracia a sus propietarios.', 2),
(18, 'Un coleccionista de arte sospechoso ha estado investigando el collar en secreto.', 2),
(19, 'La alarma de seguridad fue desactivada con un código específico durante el robo.', 2),
(20, 'Se ha encontrado una nota con pistas en el despacho del director del museo.', 2),
(21, 'Se descubrió una inscripción en latín en la base de la vitrina.', 3),
(22, 'Una pluma de ave exótica fue hallada cerca de la vitrina vacía.', 3),
(23, 'Un visitante afirma haber escuchado una conversación sospechosa cerca de la exposición.', 3),
(24, 'Se encontraron restos de cera de vela en la escena del crimen.', 3),
(25, 'Un empleado del museo parece estar muy interesado en el collar desaparecido.', 3),
(26, 'Un retrato antiguo en la pared parece mirar directamente hacia la vitrina robada.', 3),
(27, 'El collar es conocido por tener un poderoso hechizo de protección contra el mal.', 3),
(28, 'Un coleccionista de arte famoso ha estado preguntando sobre la joya perdida.', 3),
(29, 'Una grabación de seguridad muestra a un individuo ingresando un código de seguridad durante el robo.', 3),
(30, 'Se ha encontrado un libro antiguo sobre maldiciones en el despacho del director.', 3),
(31, 'Se hallaron documentos antiguos relacionados con el collar en el archivo del museo.', 4),
(32, 'Una figura en la sombra fue vista en una pintura que representa el collar.', 4),
(33, 'Se encontraron restos de un líquido misterioso cerca de la vitrina vacía.', 4),
(34, 'Un visitante afirmó haber visto a una persona sospechosa salir rápidamente del museo esa noche.', 4),
(35, 'Un empleado del museo parece estar preocupado por ser interrogado sobre la noche del robo.', 4),
(36, 'Se descubrió un mensaje cifrado en una carta de la época de los Medici.', 4),
(37, 'El collar está asociado con una leyenda de amor y tragedia.', 4),
(38, 'Un coleccionista de arte enigmático ha estado haciendo preguntas sobre la joya desaparecida.', 4),
(39, 'Las luces del museo se apagaron justo antes de que el collar desapareciera.', 4),
(40, 'Se ha encontrado una llave antigua cerca de la vitrina robada.', 4),
(41, 'Un experto en arte ha expresado su creencia en que el collar está maldito.', 5),
(42, 'Una nota encriptada fue encontrada junto a la vitrina vacía.', 5),
(43, 'Un visitante afirmó haber visto a alguien manipulando la alarma de seguridad.', 5),
(44, 'Se encontraron huellas digitales que no coinciden con el personal del museo.', 5),
(45, 'Un empleado del museo parece estar nervioso y evita hablar sobre la noche del robo.', 5),
(46, 'Una sombra sospechosa fue vista en la grabación de seguridad.', 5),
(47, 'El collar es conocido por haber cambiado de dueño varias veces en el pasado.', 5),
(48, 'Un coleccionista de arte famoso ha estado investigando el collar en secreto.', 5),
(49, 'La alarma de seguridad se activó de manera inesperada antes del robo.', 5),
(50, 'Se ha encontrado una página arrancada de un libro antiguo cerca de la vitrina.', 5),
(51, 'Una carta antigua escrita por un Medici menciona el collar perdido.', 6),
(52, 'Un visitante afirmó haber escuchado pasos inusuales cerca de la vitrina robada.', 6),
(53, 'Se encontraron restos de una sustancia extraña en la escena del crimen.', 6),
(54, 'Un empleado del museo parece estar obsesionado con la historia del collar.', 6),
(55, 'Una sombra fugaz fue vista en la grabación de seguridad.', 6),
(56, 'El collar es conocido por haber sido regalado en una boda de la realeza.', 6),
(57, 'Un coleccionista de arte enigmático ha estado haciendo preguntas sobre la joya desaparecida.', 6),
(58, 'La alarma de seguridad se desactivó brevemente durante el robo.', 6),
(59, 'Se ha encontrado una página de diario antiguo que menciona la maldición del collar.', 6),
(60, 'Un experto en arte ha expresado su creencia en que el collar está maldito.', 7),
(61, 'Una pluma de ave exótica fue hallada cerca de la vitrina robada.', 7),
(62, 'Un visitante afirmó haber visto a alguien manipulando la alarma de seguridad.', 7),
(63, 'Se encontraron huellas digitales que no coinciden con el personal del museo.', 7),
(64, 'Un empleado del museo parece estar nervioso y evita hablar sobre la noche del robo.', 7),
(65, 'Una sombra sospechosa fue vista en la grabación de seguridad.', 7),
(66, 'El collar es conocido por haber cambiado de dueño varias veces en el pasado.', 7),
(67, 'Un coleccionista de arte famoso ha estado investigando el collar en secreto.', 7),
(68, 'La alarma de seguridad se activó de manera inesperada antes del robo.', 7),
(69, 'Se ha encontrado una página arrancada de un libro antiguo cerca de la vitrina.', 7),
(70, 'Una carta antigua escrita por un Medici menciona el collar perdido.', 8),
(71, 'Un visitante afirmó haber escuchado pasos inusuales cerca de la vitrina robada.', 8),
(72, 'Se encontraron restos de una sustancia extraña en la escena del crimen.', 8),
(73, 'Un empleado del museo parece estar obsesionado con la historia del collar.', 8),
(74, 'Una sombra fugaz fue vista en la grabación de seguridad.', 8),
(75, 'El collar es conocido por haber sido regalado en una boda de la realeza.', 8),
(76, 'Un coleccionista de arte enigmático ha estado haciendo preguntas sobre la joya desaparecida.', 8),
(77, 'La alarma de seguridad se desactivó brevemente durante el robo.', 8),
(78, 'Se ha encontrado una página de diario antiguo que menciona la maldición del collar.', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Relaciones_entre_Personajes`
--

CREATE TABLE `Relaciones_entre_Personajes` (
  `ID` int(11) NOT NULL,
  `ID_del_Personaje1` int(11) DEFAULT NULL,
  `ID_del_Personaje2` int(11) DEFAULT NULL,
  `Tipo_de_Relacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Relaciones_entre_Personajes`
--

INSERT INTO `Relaciones_entre_Personajes` (`ID`, `ID_del_Personaje1`, `ID_del_Personaje2`, `Tipo_de_Relacion`) VALUES
(1, 1, 2, 'Colegas de trabajo'),
(2, 1, 3, 'Amigos de la infancia'),
(3, 2, 4, 'Compañeros de investigación'),
(4, 3, 5, 'Amigos cercanos'),
(5, 4, 6, 'Rivales en el trabajo'),
(6, 5, 7, 'Vecinos'),
(7, 6, 8, 'Compañeros de estudio'),
(8, 7, 9, 'Parientes lejanos'),
(9, 8, 10, 'Antiguos colegas'),
(10, 9, 11, 'Amigos de la familia'),
(11, 10, 12, 'Socios de negocios'),
(12, 11, 13, 'Vecinos'),
(13, 12, 14, 'Antiguos compañeros de clase'),
(14, 13, 15, 'Compañeros de trabajo'),
(15, 14, 16, 'Amigos cercanos'),
(16, 15, 17, 'Compañeros de investigación'),
(17, 16, 18, 'Amigos de la infancia'),
(18, 17, 19, 'Rivales en el trabajo'),
(19, 18, 20, 'Colegas de trabajo'),
(20, 19, 21, 'Vecinos'),
(21, 20, 22, 'Compañeros de estudio'),
(22, 21, 23, 'Amigos de la familia'),
(23, 22, 24, 'Socios de negocios'),
(24, 23, 25, 'Antiguos colegas'),
(25, 24, 26, 'Vecinos'),
(26, 25, 27, 'Antiguos compañeros de clase'),
(27, 26, 28, 'Amigos cercanos'),
(28, 27, 29, 'Compañeros de trabajo'),
(29, 28, 30, 'Compañeros de investigación'),
(30, 29, 31, 'Amigos de la infancia'),
(31, 30, 32, 'Rivales en el trabajo'),
(32, 31, 33, 'Colegas de trabajo'),
(33, 32, 34, 'Vecinos'),
(34, 33, 35, 'Compañeros de estudio'),
(35, 34, 36, 'Amigos de la familia'),
(36, 35, 37, 'Socios de negocios'),
(37, 36, 38, 'Antiguos colegas'),
(38, 37, 39, 'Vecinos'),
(39, 38, 40, 'Antiguos compañeros de clase'),
(40, 39, 41, 'Amigos cercanos'),
(41, 40, 42, 'Compañeros de trabajo'),
(42, 41, 43, 'Compañeros de investigación'),
(43, 42, 44, 'Amigos de la infancia'),
(44, 43, 45, 'Rivales en el trabajo'),
(45, 44, 46, 'Colegas de trabajo'),
(46, 45, 47, 'Vecinos'),
(47, 46, 48, 'Compañeros de estudio'),
(48, 47, 49, 'Amigos de la familia'),
(49, 48, 50, 'Socios de negocios'),
(50, 49, 51, 'Antiguos colegas'),
(51, 50, 52, 'Vecinos'),
(52, 51, 53, 'Antiguos compañeros de clase'),
(53, 52, 54, 'Amigos cercanos'),
(54, 53, 55, 'Compañeros de trabajo'),
(55, 54, 56, 'Compañeros de investigación'),
(56, 55, 57, 'Amigos de la infancia'),
(57, 56, 58, 'Rivales en el trabajo'),
(58, 57, 59, 'Colegas de trabajo'),
(59, 58, 60, 'Vecinos'),
(60, 59, 61, 'Compañeros de estudio'),
(61, 60, 62, 'Amigos de la familia'),
(62, 61, 63, 'Socios de negocios'),
(63, 62, 64, 'Antiguos colegas'),
(64, 63, 65, 'Vecinos'),
(65, 64, 66, 'Antiguos compañeros de clase'),
(66, 65, 67, 'Amigos cercanos'),
(67, 66, 68, 'Compañeros de trabajo'),
(68, 67, 69, 'Compañeros de investigación'),
(69, 68, 70, 'Amigos de la infancia'),
(70, 69, 71, 'Rivales en el trabajo'),
(71, 70, 72, 'Colegas de trabajo'),
(72, 71, 73, 'Vecinos'),
(73, 72, 74, 'Compañeros de estudio'),
(74, 73, 75, 'Amigos de la familia'),
(75, 74, 76, 'Socios de negocios'),
(76, 75, 77, 'Antiguos colegas'),
(77, 76, 78, 'Vecinos'),
(78, 77, 79, 'Antiguos compañeros de clase'),
(79, 78, 80, 'Amigos cercanos'),
(80, 79, 81, 'Compañeros de trabajo'),
(81, 80, 82, 'Compañeros de investigación'),
(82, 81, 83, 'Amigos de la infancia'),
(83, 82, 84, 'Rivales en el trabajo'),
(84, 83, 85, 'Colegas de trabajo'),
(85, 84, 86, 'Vecinos'),
(86, 85, 87, 'Compañeros de estudio'),
(87, 86, 88, 'Amigos de la familia'),
(88, 87, 89, 'Socios de negocios'),
(89, 88, 90, 'Antiguos colegas'),
(90, 89, 91, 'Vecinos'),
(91, 90, 92, 'Antiguos compañeros de clase'),
(92, 91, 93, 'Amigos cercanos'),
(93, 92, 94, 'Compañeros de trabajo'),
(94, 93, 95, 'Compañeros de investigación'),
(95, 94, 96, 'Amigos de la infancia'),
(96, 95, 97, 'Rivales en el trabajo'),
(97, 96, 98, 'Colegas de trabajo'),
(98, 97, 99, 'Vecinos'),
(99, 98, 100, 'Compañeros de estudio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_del_Museo` (`ID_del_Museo`);

--
-- Indices de la tabla `Lugares`
--
ALTER TABLE `Lugares`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_del_Museo` (`ID_del_Museo`);

--
-- Indices de la tabla `Museos`
--
ALTER TABLE `Museos`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `Obras_de_Arte`
--
ALTER TABLE `Obras_de_Arte`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_del_Museo` (`ID_del_Museo`);

--
-- Indices de la tabla `Personajes`
--
ALTER TABLE `Personajes`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `Pistas`
--
ALTER TABLE `Pistas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_del_Museo` (`ID_del_Museo`);

--
-- Indices de la tabla `Relaciones_entre_Personajes`
--
ALTER TABLE `Relaciones_entre_Personajes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_del_Personaje1` (`ID_del_Personaje1`),
  ADD KEY `ID_del_Personaje2` (`ID_del_Personaje2`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `Lugares`
--
ALTER TABLE `Lugares`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `Museos`
--
ALTER TABLE `Museos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT de la tabla `Obras_de_Arte`
--
ALTER TABLE `Obras_de_Arte`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `Personajes`
--
ALTER TABLE `Personajes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT de la tabla `Pistas`
--
ALTER TABLE `Pistas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `Relaciones_entre_Personajes`
--
ALTER TABLE `Relaciones_entre_Personajes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`ID_del_Museo`) REFERENCES `Museos` (`ID`);

--
-- Filtros para la tabla `Lugares`
--
ALTER TABLE `Lugares`
  ADD CONSTRAINT `lugares_ibfk_1` FOREIGN KEY (`ID_del_Museo`) REFERENCES `Museos` (`ID`);

--
-- Filtros para la tabla `Obras_de_Arte`
--
ALTER TABLE `Obras_de_Arte`
  ADD CONSTRAINT `obras_de_arte_ibfk_1` FOREIGN KEY (`ID_del_Museo`) REFERENCES `Museos` (`ID`);

--
-- Filtros para la tabla `Pistas`
--
ALTER TABLE `Pistas`
  ADD CONSTRAINT `pistas_ibfk_1` FOREIGN KEY (`ID_del_Museo`) REFERENCES `Museos` (`ID`);

--
-- Filtros para la tabla `Relaciones_entre_Personajes`
--
ALTER TABLE `Relaciones_entre_Personajes`
  ADD CONSTRAINT `relaciones_entre_personajes_ibfk_1` FOREIGN KEY (`ID_del_Personaje1`) REFERENCES `Personajes` (`ID`),
  ADD CONSTRAINT `relaciones_entre_personajes_ibfk_2` FOREIGN KEY (`ID_del_Personaje2`) REFERENCES `Personajes` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
