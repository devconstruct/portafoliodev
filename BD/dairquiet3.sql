-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 05-07-2023 a las 19:02:17
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
-- Base de datos: `dairquiet3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `answer`
--

CREATE TABLE `answer` (
  `id_respuesta` int(11) NOT NULL,
  `id_pregunta` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `respuesta` text,
  `gusta` int(11) DEFAULT NULL,
  `disgusta` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `answer`
--

INSERT INTO `answer` (`id_respuesta`, `id_pregunta`, `id_usuario`, `respuesta`, `gusta`, `disgusta`, `created_at`) VALUES
(3, 9, 13, '<p>hola</p>', NULL, NULL, '2020-01-12 20:35:52'),
(9, 11, 13, '<p>Hola puedes descargarlo desde la pagina de youtube</p>', NULL, NULL, '2020-01-20 03:40:45'),
(10, 14, 13, '<p>hi</p>', NULL, NULL, '2020-01-20 05:11:14'),
(11, 16, 13, '<p>hi</p><p><br></p>', NULL, NULL, '2020-01-20 05:11:49'),
(12, 9, 13, '<p>ok, entiendo</p>', NULL, NULL, '2020-01-20 05:36:38'),
(13, 23, 20, '<p>Hola</p>', NULL, NULL, '2020-01-20 05:41:15'),
(14, 23, 13, '<p>Ya entendi</p>', NULL, NULL, '2020-01-20 05:42:25'),
(15, 22, 20, '<p>Hola que dificultad tienes?</p>', NULL, NULL, '2020-01-20 05:58:31'),
(16, 12, 20, '<p>m</p>', NULL, NULL, '2020-01-20 06:08:24'),
(17, 25, 13, '<p>kia</p>', NULL, NULL, '2020-01-20 21:21:03'),
(18, 26, 20, '<p>sss</p>', NULL, NULL, '2020-01-22 10:23:54'),
(19, 27, 13, '<p>Hola</p>', NULL, NULL, '2020-02-02 08:31:02'),
(20, 19, 13, '<p>j</p>', NULL, NULL, '2020-02-05 08:14:26'),
(21, 19, 13, '<p>Hola soy gregori</p>', NULL, NULL, '2020-02-05 08:15:52'),
(22, 19, 13, '<p>Hola soy el mejor test</p>', NULL, NULL, '2020-02-05 08:16:42'),
(23, 29, 13, '<p>Hola mundo</p>', NULL, NULL, '2020-02-06 19:46:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id_calificaciones` int(11) NOT NULL,
  `id_materias` int(11) DEFAULT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `periodo` int(11) DEFAULT NULL,
  `grado` int(11) DEFAULT NULL,
  `calificaciones` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`id_calificaciones`, `id_materias`, `id_escuela`, `id_matricula`, `periodo`, `grado`, `calificaciones`) VALUES
(5, 4, 34, 28, 1, 1, 3),
(6, 6, 37, 35, 1, 3, 7),
(7, 4, 34, 42, 1, 1, 3),
(8, 4, 34, 42, 2, 1, 4),
(9, 4, 34, 28, 2, 1, 8),
(10, 4, 34, 28, 3, 1, 7),
(11, 4, 34, 28, 4, 1, 7),
(12, 12, 39, 51, 1, 1, 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuarto_sexto`
--

CREATE TABLE `cuarto_sexto` (
  `id_cuartosexto` int(11) NOT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `id_escuela` int(3) DEFAULT NULL,
  `grado` text,
  `bimestre` int(11) DEFAULT NULL,
  `espanol` int(11) DEFAULT NULL,
  `matematicas` int(11) DEFAULT NULL,
  `cien_naturales` int(11) DEFAULT NULL,
  `historia` int(11) DEFAULT NULL,
  `geografia` int(11) DEFAULT NULL,
  `form_civ_etica` int(11) DEFAULT NULL,
  `artes` int(11) DEFAULT NULL,
  `edu_fisica` int(11) DEFAULT NULL,
  `ingles` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuarto_sexto`
--

INSERT INTO `cuarto_sexto` (`id_cuartosexto`, `id_matricula`, `id_escuela`, `grado`, `bimestre`, `espanol`, `matematicas`, `cien_naturales`, `historia`, `geografia`, `form_civ_etica`, `artes`, `edu_fisica`, `ingles`) VALUES
(1, 23, 36, '4', 1, 8, 8, 8, 8, 8, 8, 8, 8, 10),
(2, 50, 45, '5', 1, 7, 8, 7, 6, 7, 6, 7, 6, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuela`
--

CREATE TABLE `escuela` (
  `id_escuela` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `nom_escuela` text,
  `grado` text,
  `grupo` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `escuela`
--

INSERT INTO `escuela` (`id_escuela`, `id_user`, `nom_escuela`, `grado`, `grupo`) VALUES
(34, 13, 'lBenito Juarez', '1', 'A'),
(35, 13, 'Benito Juarez', '2', 'A'),
(36, 13, 'nes', '4', 'B'),
(37, 13, 'cv', '3', 'z'),
(39, 20, 'Ian', '1', 'A'),
(45, 13, 'Test Token', '5', 'A'),
(46, 13, 'Benito Juarez', '2', 'b'),
(47, 20, 'j', '1', 'j');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material_didactico`
--

CREATE TABLE `material_didactico` (
  `id_matdidactico` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_imagen` int(11) DEFAULT NULL,
  `titulo` text,
  `precio` text,
  `empresa` text,
  `descripcion` text,
  `tipo_archivo` text,
  `file` text,
  `gusta` int(11) DEFAULT '0',
  `disgusta` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `material_didactico`
--

INSERT INTO `material_didactico` (`id_matdidactico`, `id_usuario`, `id_imagen`, `titulo`, `precio`, `empresa`, `descripcion`, `tipo_archivo`, `file`, `gusta`, `disgusta`, `created_at`) VALUES
(1, 13, NULL, 'Cronograma', 'Gratis', 'Alfaguara', 'Libro baldor', 'AL', NULL, 1, 5, '2020-01-02 02:26:49'),
(2, 13, NULL, 'Lista de Asistencia', 'Grtis', 'Alfaguara', 'm', 'pp', NULL, 0, 0, '2020-01-04 02:40:14'),
(3, 13, NULL, 'Mapa Mental', 'Gratis', 'Alfaguara', 'k', 'pp', NULL, 1, 0, '2020-01-05 02:41:06'),
(4, 13, NULL, 'Libro Baldor', '150', 'Alfaguara', '', 'pdf', 'file', 0, 0, '2020-01-05 03:05:49'),
(5, 13, NULL, 'Libro Baldor', '150', 'Alfaguara', 'b', 'word', NULL, 0, 1, '2020-01-05 03:09:02'),
(6, 13, NULL, 'Libro Baldor', '150', 'Alfaguara', '', 'word', 'file-1578193932644.jpg', 0, 0, '2020-01-05 03:12:12'),
(7, 13, NULL, 'Lista de grupo', '150', 'Alfaguara', 'b llolol', 'otro', 'file-1578202716507.jpg', 0, 0, '2020-01-05 05:38:36'),
(8, 13, NULL, 'Libro Baldor', '50', 'Alfaguara', '', 'word', 'file-1578290820897.png', 0, 0, '2020-01-06 06:07:00'),
(9, 13, NULL, 'test', 'test', 'test', 'test', 'word', 'file-1578387319767.JPG', 0, 1, '2020-01-07 08:55:19'),
(24, 13, NULL, 'TEST', 'GRATIS', 'FORM', 'DESCUENTO', 'word', 'file-1580443357953.png', 1, 0, '2020-01-31 04:02:37'),
(25, 13, NULL, 'Archivo', 'gratis', 'Archivo', 'kiko', 'word', 'file-1580444413202.png', 0, 0, '2020-01-31 04:20:13'),
(26, 13, NULL, 'Publicacion', 'ARCHIVO', 'SIN', 'PUBLICACION SIN ARCHIVO', 'word', 'Sin_Archivo.png', 0, 0, '2020-01-31 04:38:38'),
(27, 13, NULL, 'Archivo de prueba', 'h', 'h', 'msjsd', 'word', 'file-1580452431481.png', 0, 0, '2020-01-31 06:33:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id_materias` int(11) NOT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `grado` int(11) DEFAULT NULL,
  `materias` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id_materias`, `id_escuela`, `grado`, `materias`) VALUES
(4, 34, 1, 'creed'),
(6, 37, 3, 'Español'),
(7, 37, 3, 'FoCe'),
(8, 37, 3, 'Ingles'),
(9, 37, 3, 'Yuya'),
(10, 37, 3, 'Español 5'),
(11, 35, 2, 'Español'),
(12, 39, 1, 'Español');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

CREATE TABLE `matricula` (
  `id_matricula` int(11) NOT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `mapcurricular` text,
  `apellido_paterno` text,
  `apellido_materno` text,
  `nombres` text,
  `fecha_nacimineto` date DEFAULT NULL,
  `curp` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `matricula`
--

INSERT INTO `matricula` (`id_matricula`, `id_escuela`, `mapcurricular`, `apellido_paterno`, `apellido_materno`, `nombres`, `fecha_nacimineto`, `curp`) VALUES
(8, 34, '20182019', 'tokio', 'tokiotokio', 'bbbbbbb', '2020-01-17', 'IRIZARCURPmmmmm'),
(9, 34, '2019', 'mama', 'mama', 'mama', '2020-01-04', 'IRIZARCURP'),
(13, 34, '2019', 'eh', 'hg', 'hg', '2020-01-17', 'a'),
(16, 34, '20182019', 'Fresa', 'fresa', 'Fresa', '2020-01-16', 'CURPFRESA'),
(17, 35, '20182019', 'andres', 'manuel ', 'lopez', '2020-01-15', 'k'),
(18, 34, '2019', 'celular', 'celular', 'celular', '2020-01-23', 'celularCurpp'),
(19, 36, '2019', 'j', 'j', 'j', '2020-01-25', 'mnm'),
(20, 35, '20182019', 'a', 'a', 'a', '2020-01-04', 'a'),
(21, 37, '20182019', 'a', 'a', 'a', '2020-01-24', 'a'),
(22, 37, '2019', 'b', 'b', 'b', '2020-01-10', 'xc'),
(23, 36, '20182019', 'bBbB', 'b', 'b', '2020-01-03', 'xss'),
(28, 34, '411', 'n', 'n', 'n', '2020-01-17', 'MARCOCURP'),
(33, 34, '20182019', 'i', 'k', 'k', '2020-01-10', 'dsxzcs'),
(34, 35, '2019', 'y', 'y', 'y', '2020-01-10', 'swsxs'),
(35, 37, '411', 'y', 'y', 'y', '2020-01-10', 's'),
(36, 35, '411', 'yy', 'y', 'y', '2009-01-08', 'm '),
(37, 34, '20182019', 'uno', 'dos', 'tres', NULL, NULL),
(38, 34, '2019', 'Antonio', 'jose1', 'jose4', NULL, NULL),
(39, 34, '411', 'hi', 'hi', 'hi', NULL, NULL),
(40, 34, '20182019', NULL, NULL, 'Javier el chicharito', NULL, NULL),
(41, 34, '2019', NULL, NULL, 'Jose jose luis eralez', NULL, NULL),
(42, 34, '411', NULL, NULL, 'Joder ', NULL, NULL),
(43, 34, '20182019', NULL, NULL, 'cv', NULL, NULL),
(44, 34, '20182019', NULL, NULL, 'lenny', NULL, NULL),
(45, 34, '20182019', NULL, NULL, 'd', NULL, NULL),
(46, 34, '20182019', NULL, NULL, 'jd', NULL, NULL),
(47, 34, '20182019', NULL, NULL, 'd', NULL, NULL),
(48, 34, '20182019', NULL, NULL, 'd', NULL, NULL),
(49, 34, '20182019', NULL, NULL, 'd', NULL, NULL),
(50, 45, '20182019', NULL, NULL, 'hola', NULL, NULL),
(51, 39, '411', NULL, NULL, 'a', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newcuarto_sexto`
--

CREATE TABLE `newcuarto_sexto` (
  `idnewcuarto_sexto` int(11) NOT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `grado` text,
  `trimestre` int(11) DEFAULT NULL,
  `espanol` int(11) NOT NULL,
  `matematicas` int(11) NOT NULL,
  `cien_naturales` int(11) NOT NULL,
  `geografia` int(11) NOT NULL,
  `historia` int(11) NOT NULL,
  `form_civ_etica` int(11) NOT NULL,
  `artes` int(11) NOT NULL,
  `edu_socioemocional` int(11) NOT NULL,
  `edu_fisica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `newcuarto_sexto`
--

INSERT INTO `newcuarto_sexto` (`idnewcuarto_sexto`, `id_matricula`, `id_escuela`, `grado`, `trimestre`, `espanol`, `matematicas`, `cien_naturales`, `geografia`, `historia`, `form_civ_etica`, `artes`, `edu_socioemocional`, `edu_fisica`) VALUES
(1, 19, 36, '4', 1, 7, 7, 7, 7, 7, 7, 7, 7, 7),
(2, 19, 36, '4', 2, 7, 6, 7, 6, 7, 6, 7, 6, 7),
(3, 19, 36, '4', 3, 7, 7, 7, 7, 7, 7, 7, 7, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newprimero_segundo`
--

CREATE TABLE `newprimero_segundo` (
  `idnewprimero_segundo` int(11) NOT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `grado` text,
  `trimestre` int(11) DEFAULT NULL,
  `espanol` int(11) NOT NULL,
  `matematicas` int(11) NOT NULL,
  `cono_medio` int(11) NOT NULL,
  `artes` int(11) NOT NULL,
  `edu_socioemocional` int(11) NOT NULL,
  `edu_fisica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `newprimero_segundo`
--

INSERT INTO `newprimero_segundo` (`idnewprimero_segundo`, `id_matricula`, `id_escuela`, `grado`, `trimestre`, `espanol`, `matematicas`, `cono_medio`, `artes`, `edu_socioemocional`, `edu_fisica`) VALUES
(1, 9, 34, '1', 1, 8, 7, 6, 7, 6, 8),
(2, 9, 34, '1', 2, 8, 8, 7, 6, 7, 6),
(3, 9, 34, '1', 3, 9, 8, 7, 6, 5, 7),
(4, 18, 34, '1', 1, 8, 8, 8, 8, 8, 8),
(5, 18, 34, '1', 2, 1, 1, 1, 1, 1, 1),
(6, 18, 34, '1', 3, 2, 2, 2, 2, 2, 2),
(7, 34, 35, '2', 1, 7, 7, 7, 7, 7, 8),
(8, 34, 35, '2', 2, 6, 5, 8, 8, 6, 5),
(9, 34, 35, '2', 3, 7, 8, 7, 9, 8, 0),
(10, 13, 34, '1', 1, 8, 7, 7, 7, 7, 10),
(11, 13, 34, '1', 2, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newtercero`
--

CREATE TABLE `newtercero` (
  `idnewtercero` int(11) NOT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `id_escuela` int(11) DEFAULT NULL,
  `grado` text,
  `trimestre` int(11) DEFAULT NULL,
  `espanol` int(11) NOT NULL,
  `matematicas` int(11) NOT NULL,
  `cien_naturales` int(11) NOT NULL,
  `enti_vivo` int(11) NOT NULL,
  `form_civ_etica` int(11) NOT NULL,
  `artes` int(11) NOT NULL,
  `edu_socioemocional` int(11) NOT NULL,
  `edu_fisica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `newtercero`
--

INSERT INTO `newtercero` (`idnewtercero`, `id_matricula`, `id_escuela`, `grado`, `trimestre`, `espanol`, `matematicas`, `cien_naturales`, `enti_vivo`, `form_civ_etica`, `artes`, `edu_socioemocional`, `edu_fisica`) VALUES
(1, 22, 37, '3', 1, 9, 7, 6, 7, 6, 7, 6, 7),
(2, 22, 37, '3', 2, 7, 0, 7, 7, 7, 7, 7, 7),
(3, 22, 37, '3', 3, 9, 8, 7, 6, 5, 6, 5, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `primero_tercero`
--

CREATE TABLE `primero_tercero` (
  `id_primerotercero` int(11) NOT NULL,
  `id_matricula` int(11) DEFAULT NULL,
  `id_escuela` int(3) DEFAULT NULL,
  `grado` text NOT NULL,
  `bimestre` int(11) DEFAULT NULL,
  `espanol` int(11) DEFAULT NULL,
  `matematicas` int(11) DEFAULT NULL,
  `cono_medio` int(11) DEFAULT NULL,
  `cien_nat_tec` int(11) DEFAULT NULL,
  `his_pais_conv` int(11) DEFAULT NULL,
  `artes` int(11) DEFAULT NULL,
  `edu_socio` int(11) DEFAULT NULL,
  `edu_fisica` int(11) DEFAULT NULL,
  `ingles` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `primero_tercero`
--

INSERT INTO `primero_tercero` (`id_primerotercero`, `id_matricula`, `id_escuela`, `grado`, `bimestre`, `espanol`, `matematicas`, `cono_medio`, `cien_nat_tec`, `his_pais_conv`, `artes`, `edu_socio`, `edu_fisica`, `ingles`) VALUES
(1, 8, 34, '1', 1, 10, 9, 9, 8, 7, 5, 7, 5, 7),
(2, 8, 34, '1', 2, 8, 7, 8, 7, 8, 7, 6, 4, 3),
(3, 8, 34, '1', 4, 4, 6, 5, 7, 6, 5, 4, 5, 8),
(4, 8, 34, '1', 5, 9, 8, 7, 6, 5, 4, 3, 5, 6),
(10, 17, 35, '2', 1, 7, 6, 5, 6, 8, 7, 9, 8, 7),
(11, 21, 37, '3', 1, 9, 9, 9, 9, 9, 9, 9, 9, 10),
(12, 33, 34, '1', 1, 7, 6, 8, 7, 8, 7, 8, 7, 9),
(13, 33, 34, '1', 2, 8, 8, 8, 8, 8, 8, 8, 8, 7),
(14, 33, 34, '1', 4, 8, 7, 6, 7, 6, 7, 6, 7, 6),
(15, 33, 34, '1', 5, 7, 7, 7, 7, 7, 8, 7, 8, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `questions`
--

CREATE TABLE `questions` (
  `id_pregunta` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `titulo` text,
  `descripcion` longtext,
  `gusta` int(11) DEFAULT '0',
  `disgusta` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `questions`
--

INSERT INTO `questions` (`id_pregunta`, `id_usuario`, `titulo`, `descripcion`, `gusta`, `disgusta`, `created_at`) VALUES
(9, 13, 'Mi primera publicación', '<p>Hola saben donde puedo encontrar los avnaces programaticos del año 2019 los habia visto en esta pagina&nbsp;<a href=\"http://www.google.com\" target=\"_blank\">www.google.com</a></p>', 0, 0, '2020-01-12 06:55:58'),
(11, 13, 'Como puedo descargar este video', '<p>Juicio a la Educación</p><p><iframe frameborder=\"0\" src=\"//www.youtube.com/embed/d5nYHIDUsi8\" width=\"640\" height=\"360\" class=\"note-video-clip\"></iframe><br></p>', 0, 0, '2020-01-16 00:25:04'),
(12, 15, 'lm1', 'm', 0, 0, '2020-01-19 02:49:04'),
(13, 13, 'lm2', 'm', 0, 0, '2020-01-19 02:49:17'),
(14, 13, 'lm3', 'm', 0, 0, '2020-01-19 02:49:23'),
(15, 13, 'lm4', 'm', 0, 0, '2020-01-19 02:49:28'),
(16, 13, 'lm5', 'm', 0, 0, '2020-01-19 02:49:42'),
(17, 13, 'lm6', 'm', 0, 0, '2020-01-19 02:49:47'),
(18, 13, 'lm7', 'm', 0, 0, '2020-01-19 02:49:51'),
(19, 19, 'lm8', 'm', 0, 0, '2020-01-19 02:49:55'),
(20, 13, 'lm9', 'm', 0, 0, '2020-01-19 02:49:59'),
(21, 13, 'lm10', 'm', 0, 0, '2020-01-19 02:50:11'),
(22, 13, 'lm11', 'm', 0, 0, '2020-01-19 02:50:16'),
(23, 13, 'lm12', 'm', 0, 0, '2020-01-19 02:50:20'),
(24, 13, 'mmm', '<p>mmmmmm</p>', 0, 0, '2020-01-20 07:41:55'),
(25, 13, 'baby', '<p>nanana</p>', 0, 0, '2020-01-20 07:44:39'),
(26, 13, 'hola prueba sin usuario', '<p>ccccc</p>', 0, 0, '2020-01-22 10:23:31'),
(27, 20, '2da prueba sin usuario', '<p>ninwionowixs</p>', 0, 0, '2020-01-22 10:24:09'),
(28, 20, 'Que hora es en mexico el dia de hoy', '<p>Hola quisiera saber que horario es en diferentes paises poesten</p>', 0, 0, '2020-02-05 08:20:16'),
(29, 13, 'test code', '<p>hola coders</p>', 0, 0, '2020-02-06 19:44:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('fSvAO2t-_63XUu-ZWyP1WrRiCD_5vQSt', 1688625394, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` text,
  `apellido` text,
  `username` text,
  `niveleducativo` text,
  `institucion` text,
  `telefono` text,
  `password` text,
  `profileimage` text,
  `profileimagesecond` text,
  `token` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `username`, `niveleducativo`, `institucion`, `telefono`, `password`, `profileimage`, `profileimagesecond`, `token`) VALUES
(13, 'Antonio', 'Rivera Sandate', 'antonio@hotmail.com', 'nnPrimaria', 'ITESI', NULL, '$2a$10$eDntoHo/XSZ1hsnWMsVSNOKkCm.8jeFPVAIdyG1kNwi.yycedxMD2', 'profileimage-1581019288244.png', 'profileimagesecond-1581019381525.png', 'IgJ97u2K1zcvqj'),
(20, 'test', NULL, 'test@gmail.com', NULL, NULL, NULL, '$2a$10$am6d085rOS1UhIvSQMtBFON.wVcCIDlycslCjB/FtNsiK/Q.1RQDe', 'profilep.png', 'profilesecond.png', 'bC4Efo6siyYGFM'),
(24, 'kiev', NULL, 'kiev@gmail.com', NULL, NULL, NULL, '$2a$10$TRsz8dzsqg1Tj6rV2XUvl.8q7p1oE83EvsZneW1ntZ/GYjrRiAfgi', 'profilep.png', 'profilesecond.png', 'HaJoMJKjoHiN2p'),
(25, 'ANTONIO', NULL, 'riverasandate@gmail.com', NULL, NULL, NULL, '$2a$10$qzSSSDCev815N2b7nYWQKe2qAwkiB1IVCBC1PCd5Viedav4iOw4la', 'profilep.png', 'profilesecond.png', 'dDMJR5cdSVuErW');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id_calificaciones`),
  ADD KEY `id_materias` (`id_materias`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Indices de la tabla `cuarto_sexto`
--
ALTER TABLE `cuarto_sexto`
  ADD PRIMARY KEY (`id_cuartosexto`),
  ADD KEY `id_materia` (`id_matricula`);

--
-- Indices de la tabla `escuela`
--
ALTER TABLE `escuela`
  ADD PRIMARY KEY (`id_escuela`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `material_didactico`
--
ALTER TABLE `material_didactico`
  ADD PRIMARY KEY (`id_matdidactico`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id_materias`),
  ADD KEY `id_escuela` (`id_escuela`);

--
-- Indices de la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`id_matricula`),
  ADD KEY `id_escuela` (`id_escuela`);

--
-- Indices de la tabla `newcuarto_sexto`
--
ALTER TABLE `newcuarto_sexto`
  ADD PRIMARY KEY (`idnewcuarto_sexto`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Indices de la tabla `newprimero_segundo`
--
ALTER TABLE `newprimero_segundo`
  ADD PRIMARY KEY (`idnewprimero_segundo`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Indices de la tabla `newtercero`
--
ALTER TABLE `newtercero`
  ADD PRIMARY KEY (`idnewtercero`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Indices de la tabla `primero_tercero`
--
ALTER TABLE `primero_tercero`
  ADD PRIMARY KEY (`id_primerotercero`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Indices de la tabla `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `answer`
--
ALTER TABLE `answer`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id_calificaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `cuarto_sexto`
--
ALTER TABLE `cuarto_sexto`
  MODIFY `id_cuartosexto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `escuela`
--
ALTER TABLE `escuela`
  MODIFY `id_escuela` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `material_didactico`
--
ALTER TABLE `material_didactico`
  MODIFY `id_matdidactico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id_materias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `matricula`
--
ALTER TABLE `matricula`
  MODIFY `id_matricula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `newcuarto_sexto`
--
ALTER TABLE `newcuarto_sexto`
  MODIFY `idnewcuarto_sexto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `newprimero_segundo`
--
ALTER TABLE `newprimero_segundo`
  MODIFY `idnewprimero_segundo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `newtercero`
--
ALTER TABLE `newtercero`
  MODIFY `idnewtercero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `primero_tercero`
--
ALTER TABLE `primero_tercero`
  MODIFY `id_primerotercero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `questions`
--
ALTER TABLE `questions`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `questions` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`id_materias`) REFERENCES `materias` (`id_materias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `calificaciones_ibfk_2` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuarto_sexto`
--
ALTER TABLE `cuarto_sexto`
  ADD CONSTRAINT `cuarto_sexto_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `escuela`
--
ALTER TABLE `escuela`
  ADD CONSTRAINT `escuela_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `material_didactico`
--
ALTER TABLE `material_didactico`
  ADD CONSTRAINT `material_didactico_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`id_escuela`) REFERENCES `escuela` (`id_escuela`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`id_escuela`) REFERENCES `escuela` (`id_escuela`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `newcuarto_sexto`
--
ALTER TABLE `newcuarto_sexto`
  ADD CONSTRAINT `newcuarto_sexto_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE;

--
-- Filtros para la tabla `newprimero_segundo`
--
ALTER TABLE `newprimero_segundo`
  ADD CONSTRAINT `newprimero_segundo_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `newtercero`
--
ALTER TABLE `newtercero`
  ADD CONSTRAINT `newtercero_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE;

--
-- Filtros para la tabla `primero_tercero`
--
ALTER TABLE `primero_tercero`
  ADD CONSTRAINT `primero_tercero_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
