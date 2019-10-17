-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2019 at 07:22 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `address`) VALUES
(1, 'Sileas Merigot', '55452 Northview Center'),
(2, 'Augustine Rowdell', '64 Granby Plaza'),
(3, 'Doe Lampen', '72848 Crowley Place'),
(4, 'Ynez Frie', '3349 Novick Terrace'),
(5, 'Herold McKerlie', '91 Jackson Hill'),
(6, 'Otis Mallett', '23 Golf Course Avenue'),
(7, 'Celinka Hillatt', '5 Northland Park'),
(8, 'Dimitri Colbourne', '4812 Menomonie Hill'),
(9, 'Darby Van Baaren', '75277 Pleasure Plaza'),
(10, 'Harriott Leates', '488 Continental Hill'),
(11, 'Rouvin De Bruyn', '129 Coleman Hill'),
(12, 'Aguste Duchenne', '214 Jana Place'),
(13, 'Lanny Agostini', '98 Golden Leaf Court'),
(14, 'Marys Shemwell', '74 Thompson Way'),
(15, 'Bambie Farland', '3 Helena Way'),
(16, 'Adoree Tattoo', '3391 Clarendon Lane'),
(17, 'Nadiya Dinsell', '6929 Pennsylvania Court'),
(18, 'Hugibert Brocket', '00 Eagan Junction'),
(19, 'Maurene Ducker', '08744 Elmside Plaza'),
(20, 'Clayson Bayly', '058 Service Center'),
(21, 'Hollis Normington', '9017 La Follette Point'),
(22, 'Tammi Pestridge', '9 Kings Parkway'),
(23, 'Dorisa Feldhammer', '0 West Place'),
(24, 'Zuzana Ganiford', '319 Acker Circle'),
(25, 'Andre Karsh', '79358 Katie Junction');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
