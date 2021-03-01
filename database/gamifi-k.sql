-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-03-2021 a las 16:52:16
-- Versión del servidor: 5.6.34
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gamifi-k`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_alumno`
--

CREATE TABLE `registro_alumno` (
  `nick` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(70) COLLATE utf8_spanish_ci NOT NULL,
  `pwd` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `registro_alumno`
--

INSERT INTO `registro_alumno` (`nick`, `email`, `pwd`, `nombre`, `apellidos`) VALUES
('prova', 'prova@gmail.com', '123', 'prova', '1'),
('prova1', 'prova@gmail.com', '123', 'prova', 'prova');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_profesor`
--

CREATE TABLE `registro_profesor` (
  `nick` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `pwd` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `centro` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro_profesor`
--

INSERT INTO `registro_profesor` (`nick`, `email`, `pwd`, `nombre`, `apellidos`, `centro`) VALUES
('k', 'k@w', 'kff', 'k', 'k', 'k'),
('marti', 'awd@awd.com', '123', 'admin', 'Canela Farre', 'primaria'),
('prova', '123', 'a', 'prova1', 'prova', 'o'),
('provaww', 'prova@gmail.com', '123w', 'prova', 'prova', 'ilerna');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registro_profesor`
--
ALTER TABLE `registro_profesor`
  ADD PRIMARY KEY (`nick`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
