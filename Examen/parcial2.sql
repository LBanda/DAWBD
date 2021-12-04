-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2021 at 10:59 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parcial2`
--

-- --------------------------------------------------------

--
-- Table structure for table `estados`
--

CREATE TABLE `estados` (
  `ID_Estado` int(11) NOT NULL,
  `Tipo_Estado` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `estados`
--

INSERT INTO `estados` (`ID_Estado`, `Tipo_Estado`, `Fecha`) VALUES
(11, 'infección', '2021-12-04 04:41:11'),
(12, 'desorientación', '2021-12-04 04:43:22'),
(13, 'violencia', '2021-12-04 04:43:26'),
(14, 'desmayo', '2021-12-04 04:43:31'),
(15, 'transformación', '2021-12-04 04:43:34');

-- --------------------------------------------------------

--
-- Table structure for table `zombie`
--

CREATE TABLE `zombie` (
  `ID_Zombie` int(11) NOT NULL,
  `Nombre_Zombie` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Estado_Zombie` int(11) NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`ID_Estado`);

--
-- Indexes for table `zombie`
--
ALTER TABLE `zombie`
  ADD PRIMARY KEY (`ID_Zombie`),
  ADD KEY `Estado_Zombie` (`Estado_Zombie`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `estados`
--
ALTER TABLE `estados`
  MODIFY `ID_Estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `zombie`
--
ALTER TABLE `zombie`
  MODIFY `ID_Zombie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zombie`
--
ALTER TABLE `zombie`
  ADD CONSTRAINT `zombie_ibfk_1` FOREIGN KEY (`Estado_Zombie`) REFERENCES `estados` (`ID_Estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
