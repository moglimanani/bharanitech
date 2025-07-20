-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 20, 2025 at 05:49 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baranitech`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `username`, `email`, `subject`, `message`, `phone`, `occupation`, `dob`, `created_at`, `updated_at`) VALUES
(1, 'moglimani', 'moglimani@gmail.com', 'asdsaasdas', 'sdsdsd sdf sdfsd', '9500953059', 'dsd', '1982-07-09', '2025-07-20 09:54:53', '2025-07-20 09:54:53'),
(2, 'test', 'moglimani@gmail.com', 'asdsaasdas', 'sdsd fsd sdf sd', '9345218915', 'dsd', '1987-07-01', '2025-07-20 09:55:47', '2025-07-20 09:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`photos`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `title`, `description`, `photos`, `created_at`, `updated_at`) VALUES
(2, 'Opening ceremony of baranitech', NULL, '[\"photos\\/ZSPN2xiCTTbMDwmEjwzinJ6avdgqMQUQfo23wMt0.jpg\",\"photos\\/dFCcwNLeD64WOYWmeQVQ81PbVXWg7vYZ8BCWqw6f.jpg\"]', '2025-07-12 08:29:22', '2025-07-12 08:30:10'),
(3, 'dsd', 'dfgdf', '[\"photos\\/7nI4gHRZ3l0gidATk0nD5fm4WbPzdRyWZIuIJ1Ix.jpg\",\"photos\\/JMmrezt49XMQU8gMorItpMAkpx5ZYxHp3Kfp6GVH.jpg\"]', '2025-07-12 09:11:59', '2025-07-12 09:11:59'),
(4, NULL, NULL, '[\"photos\\/zttpIt994JzrgmIOqIxq5R8RSbeNMmftaS9MqN7r.jpg\",\"photos\\/Ongdcm9jLO6BPLM5hEIMgEnutjssJSFWp0WqP0WV.jpg\"]', '2025-07-17 21:21:19', '2025-07-17 21:21:19'),
(5, NULL, NULL, '[\"photos\\/oPcR1rnMvUrlUzUhF2y1etExYyPuGNIslrIwGWeH.png\",\"photos\\/iIqwujOhdcWyXjaJZ83GVoLLlZ3g2r8P6Ej8NKLr.jpg\",\"photos\\/Qj5HTNL185t4Gs1PDuTHINc7DcC8frY3ck3Xym6T.jpg\"]', '2025-07-17 21:22:34', '2025-07-17 21:22:34'),
(6, 'test222222', NULL, '[\"photos\\/A2W1hrlKkCV99RGu498P7bLsks1aqhk6lcQ3yiGP.png\",\"photos\\/qmBg29GPPPObvrZhXs5w4AGfsd7uF17WLSvAlofP.jpg\",\"photos\\/1TujpabVZZf2ynxrerf8y1dVeyDf9C0OuiiqxVw9.jpg\"]', '2025-07-17 21:22:52', '2025-07-17 22:24:09'),
(7, 'dfsd', 'sd', '[\"photos\\/Vskg5uIHUNbErtpU2WcMNLEO2MrAcjdOBNMcyyKL.png\",\"photos\\/m45saIcWmUgdabWIFtgU8m98D0kvqtxgDCfV1p4e.jpg\",\"photos\\/n6NA6kwuCATj4c1w17KxKu4h1QliGr1YtQgMLzQO.jpg\"]', '2025-07-17 21:23:31', '2025-07-17 21:23:31'),
(8, 'sdfsd', NULL, '[\"photos\\/igT0tg6LUqieApq9lD28JsaQRCGrXLnpjsuGibCj.png\"]', '2025-07-17 22:03:26', '2025-07-17 22:03:26'),
(9, 'dsd', NULL, '[\"photos\\/XpdbeLbx451Q86vR13l4QYvJSGlL0ChdP57akmH2.jpg\",\"photos\\/oUvj6nphyDe6Weto2WyM4YGpKirbs3vwTeR5TRxP.png\",\"photos\\/zlpTRrRZyE0qBwQ1Jq7vAJOI0tfJxInl0b3TUYde.jpg\",\"photos\\/7iuljLBaWHgBe5vPLcG8KBGYTQaesKCR14Y2kf13.jpg\"]', '2025-07-17 22:04:25', '2025-07-17 22:04:25'),
(10, 'sdsfdfsdf', NULL, '[\"photos\\/BY5KJ4JX3ay9oTLxDq6isrY2d3RjrdgoAiU6Xw0Y.png\"]', '2025-07-17 22:09:36', '2025-07-17 22:20:06');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` bigint(20) UNSIGNED NOT NULL,
  `total_vacancy` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `type`, `total_vacancy`, `city`, `state`, `country`, `company`, `description`, `title`, `created_at`, `updated_at`, `salary`) VALUES
(2, 3, 125, 'Mangadu', 'Tamil Nadu', 'India', 'CTS', 'Where does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Suppport Engineer', '2025-07-12 08:53:17', '2025-07-12 08:53:40', 1000.00),
(3, 5, 90, 'Mangadu', 'Tamil Nadu', 'India', 'TCS', 'Where does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Tester', '2025-07-12 08:55:06', '2025-07-12 08:55:06', 2000.00),
(4, 3, 30, 'Mangadu', 'Tamil Nadu', 'India', 'moglidevelopers', 'studentnotes.in@gmail.com', 'New job', '2025-07-12 09:03:10', '2025-07-12 09:03:10', 3000.00),
(5, 1, 3, 'Mangadu', 'Tamil Nadu', 'India', NULL, 'sdfs', 'sdfsdf', '2025-07-17 22:33:15', '2025-07-17 22:33:15', 3333.00),
(6, 1, 90, 'Mangadu', 'Tamil Nadu', 'India', 'moglidevelopers', 'sdfsdf', 'new job', '2025-07-17 22:42:41', '2025-07-17 22:42:41', 44444.00);

-- --------------------------------------------------------

--
-- Table structure for table `job_candidates`
--

CREATE TABLE `job_candidates` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `job_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `type` bigint(20) UNSIGNED DEFAULT NULL,
  `min_salary` decimal(10,2) DEFAULT NULL,
  `max_salary` decimal(10,2) DEFAULT NULL,
  `experience` decimal(5,2) DEFAULT NULL,
  `skills` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_candidates`
--

INSERT INTO `job_candidates` (`id`, `first_name`, `last_name`, `email`, `phone`, `job_id`, `created_at`, `updated_at`, `occupation`, `age`, `address`, `city`, `state`, `country`, `type`, `min_salary`, `max_salary`, `experience`, `skills`) VALUES
(8, 'Manimaran', 'U', 'mani@gmail.com', '09500953059', 2, '2025-07-12 08:56:44', '2025-07-12 08:56:44', 'SOftware engineer', 18, 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', NULL, NULL, NULL, NULL, NULL),
(9, 'sdfs', 'sdfsdf', 'sdfsdf@sdfsd.sdfsd', '9500953059', 2, '2025-07-20 08:03:02', '2025-07-20 08:03:02', 'sdfsdf', 18, NULL, 'sdfsdf', 'sdfsdf', 'dsf', NULL, NULL, NULL, NULL, NULL),
(10, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 2, '2025-07-20 08:03:30', '2025-07-20 08:03:30', 'softwawre engineer', 18, NULL, 'pondicherry', 'Puducherry', 'India', NULL, NULL, NULL, NULL, NULL),
(11, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 2, '2025-07-20 08:29:37', '2025-07-20 08:29:37', 'softwawre engineer', 18, 'no:31; j-block;', 'pondicherry', 'Puducherry', 'India', NULL, NULL, NULL, NULL, NULL),
(12, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 2, '2025-07-20 08:57:23', '2025-07-20 08:57:23', 'softwawre engineer', 18, 'no:31; j-block;', 'pondicherry', 'Puducherry', 'India', NULL, 3.00, 5.00, 0.00, 'fsdfsd'),
(13, 'sethu', 'rathina,', 'sethu@gmail.com', '09500953059', 2, '2025-07-20 08:58:34', '2025-07-20 08:58:34', 'softwawre engineer', 18, 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', NULL, 200000.00, 200000.00, 20.00, 'Javascript,. jquery'),
(14, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 2, '2025-07-20 09:04:47', '2025-07-20 09:04:47', 'asdasds', 18, 'no:31; j-block;', 'pondicherry', 'Puducherry', 'India', NULL, 0.00, 0.00, 0.00, 'ssdfsa'),
(15, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 3, '2025-07-20 09:28:14', '2025-07-20 09:28:14', 'dsd', 18, 'no:31; j-block;', 'pondicherry', 'Puducherry', 'India', NULL, 0.00, 0.00, 0.00, 'asdfdasd'),
(16, 'EZHUMALAI', 'PAZHANISAMY', 'studentnotes.in@gmail.com', '09952623908', 3, '2025-07-20 09:47:36', '2025-07-20 09:47:36', 'dsd', 18, '47, capseen street, Ariyankuppam, Pondicherry', 'Ariyankuppam', 'Puducherry', 'India', NULL, 20.00, 28.00, 2.00, 'asdfasd'),
(17, 'Mani', 'Maran', 'moglimani@gmail.com', '09500953059', 3, '2025-07-20 09:48:27', '2025-07-20 09:48:27', 'dsd', 18, 'no:31; j-block;', 'pondicherry', 'Puducherry', 'India', NULL, 2.00, 3.00, 1.00, 'sdfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `job_categories`
--

CREATE TABLE `job_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_categories`
--

INSERT INTO `job_categories` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'T&C Engineering', NULL, NULL),
(2, 'Protection Engineering', NULL, NULL),
(3, 'SCADA Engineering', NULL, NULL),
(4, 'Supervisor', NULL, NULL),
(5, 'Maintainance Engineer', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login_users`
--

CREATE TABLE `login_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login_users`
--

INSERT INTO `login_users` (`id`, `username`, `email`, `phone`, `password`, `created_at`, `updated_at`) VALUES
(1, 'test123', 'test@gmail.com', '9500953059', '$2y$12$twOAIGwDgTd76YGFiYhnruvFhXNkuehTAw3d4vYnO2EeOty3SI/Ne', '2025-07-11 21:50:22', '2025-07-11 21:50:22'),
(2, 'test1234', 'test123@gmail.com', '9500953059', '$2y$12$rL268/mo4We.wI3VSiTXaelw6FG7DckKlJcKvfWhcpzkaLtUfzWqq', '2025-07-11 21:52:13', '2025-07-11 21:52:13');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2025_04_30_035928_loggin-user-table', 1),
(2, '2025_05_03_111111_create_youtube_categorys_table', 1),
(3, '2025_05_04_111253_youtube_urls', 1),
(4, '2025_05_05_063050_create_cache_table', 1),
(5, '2025_05_05_124918_create_job_categories_table', 1),
(6, '2025_05_05_125042_create_jobs_table', 1),
(7, '2025_05_06_025729_create_training_categories_table', 1),
(8, '2025_05_06_025737_create_trainings_table', 1),
(9, '2025_05_06_040422_create_register_trainings_table', 1),
(10, '2025_05_06_042614_create_galleries_table', 1),
(11, '2025_05_15_154955_create_contacts_table', 1),
(12, '2025_06_10_165609_add_photos_column_to_galleries_table', 1),
(13, '2025_07_09_020646_create_job_candidates_table', 1),
(14, '2025_07_09_033127_add_salary_to_jobs_table', 1),
(15, '2025_07_20_140522_add_salary_experience_to_job_candidate_table', 2),
(16, '2025_07_20_142127_modify_salary_columns_in_job_candidates_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `register_trainings`
--

CREATE TABLE `register_trainings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_occupation` varchar(255) NOT NULL,
  `user_age` int(11) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_address` text NOT NULL,
  `user_city` varchar(255) NOT NULL,
  `user_state` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `requirements` text DEFAULT NULL,
  `training_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `register_trainings`
--

INSERT INTO `register_trainings` (`id`, `user_name`, `user_occupation`, `user_age`, `user_phone`, `user_address`, `user_city`, `user_state`, `user_country`, `user_email`, `requirements`, `training_id`, `created_at`, `updated_at`) VALUES
(1, 'Sethu', 'software engineer', 20, '09500953059', 'mangadu', 'chennai', 'Tamil Nadu', 'India', 'sethu@gmail.com', 'Need support in weekends', 2, '2025-07-12 08:47:57', '2025-07-12 08:47:57'),
(2, 'Siva', 'sdfsd', 20, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'asdas', 1, '2025-07-20 09:34:23', '2025-07-20 09:34:23'),
(3, 'Mud\\s991433', 'sdfsd', 20, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'asads', 1, '2025-07-20 09:36:15', '2025-07-20 09:36:15'),
(4, 'gaurav', 'webd eveloper', 314, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'sdfsdf', 2, '2025-07-20 09:36:50', '2025-07-20 09:36:50'),
(5, 'qqqq', 'webd eveloper', 33, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'sdfsd', 2, '2025-07-20 09:37:46', '2025-07-20 09:37:46'),
(6, 'sssss', 'sdfsd', 333, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'sasda', 2, '2025-07-20 09:38:29', '2025-07-20 09:38:29'),
(7, 'ssSSS', 'sdsdf', 33, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'ss', 2, '2025-07-20 09:40:12', '2025-07-20 09:40:12'),
(8, 'sdfsd', 'sdfsd', 33, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'sdsdfs@sdfsd.sdfs', 'xsd', 2, '2025-07-20 09:42:34', '2025-07-20 09:42:34'),
(9, 'Mud\\s991433', 'asas', 39, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'sdfs', 2, '2025-07-20 09:44:53', '2025-07-20 09:44:53'),
(10, 'Mud\\s991433', 'sdfsd', 30, '09952623908', '47, capseen street, Ariyankuppam, Pondicherry', 'Ariyankuppam', 'Puducherry', 'India', 'studentnotes.in@gmail.com', 'dsd', 2, '2025-07-20 09:45:54', '2025-07-20 09:45:54'),
(11, 'Mud\\s991433', 'sdfsd', 33, '09952623908', '47, capseen street, Ariyankuppam, Pondicherry', 'Ariyankuppam', 'Puducherry', 'India', 'studentnotes.in@gmail.com', 'dd', 2, '2025-07-20 09:46:27', '2025-07-20 09:46:27'),
(12, 'Mud\\s991433', 'sdfsd', 30, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'asdas', 2, '2025-07-20 09:47:03', '2025-07-20 09:47:03'),
(13, 'Mud\\s991433', 'webd eveloper', 30, '09500953059', 'No:6, Muthuswamy Avenue Anexe', 'Mangadu', 'Tamil Nadu', 'India', 'moglimani@gmail.com', 'sadas', 2, '2025-07-20 09:50:07', '2025-07-20 09:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `type` bigint(20) UNSIGNED NOT NULL,
  `classification` tinyint(4) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `total_hours` decimal(5,2) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `table_of_contents` text DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trainings`
--

INSERT INTO `trainings` (`id`, `title`, `description`, `type`, `classification`, `startdate`, `enddate`, `location`, `total_hours`, `city`, `state`, `country`, `table_of_contents`, `total_price`, `created_at`, `updated_at`) VALUES
(1, 'Generator production', 'Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n\n1914 translation by H. Rackham\n\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"', 3, 0, '2025-07-18', '2025-07-19', 'No:6, Muthuswamy Avenue Anexe', 20.00, 'Mangadu', 'Tamil Nadu', 'India', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 100.00, '2025-07-12 08:44:15', '2025-07-12 08:44:15'),
(2, 'Production support', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 4, 1, '2025-07-18', '2025-07-24', NULL, 100.00, NULL, NULL, NULL, 'Where does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 300.00, '2025-07-12 08:46:34', '2025-07-12 08:48:51'),
(3, 'Simple training', 'test data', 4, 1, '2025-07-24', '2025-07-24', NULL, 30.00, NULL, NULL, NULL, 'test data', 40.00, '2025-07-12 08:50:50', '2025-07-12 08:50:50');

-- --------------------------------------------------------

--
-- Table structure for table `training_categories`
--

CREATE TABLE `training_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `training_categories`
--

INSERT INTO `training_categories` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Module - Basic', 'Module - Basic', '2025-07-11 11:07:32', '2025-07-11 11:07:32'),
(2, 'Module - intermediate-stage-1', 'Module - intermediate-stage-1', '2025-07-11 11:07:32', '2025-07-11 11:07:32'),
(3, 'Module - intermediate-stage-2', 'Module - intermediate-stage-2', '2025-07-11 11:07:32', '2025-07-11 11:07:32'),
(4, 'Module - advance-stage-1', 'Module - advance-stage-1', '2025-07-11 11:07:32', '2025-07-11 11:07:32'),
(5, 'Module - advance-stage-2', 'Module - advance-stage-2', '2025-07-11 11:07:32', '2025-07-11 11:07:32');

-- --------------------------------------------------------

--
-- Table structure for table `youtube_categorys`
--

CREATE TABLE `youtube_categorys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 = Protection relay testing, 1 = Equipment testing',
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `youtube_categorys`
--

INSERT INTO `youtube_categorys` (`id`, `category`, `title`, `created_at`, `updated_at`) VALUES
(1, 0, 'Motor relay testing', NULL, NULL),
(2, 0, 'Feeder Relay Testing', NULL, NULL),
(3, 0, 'Generator Relay Testing', NULL, NULL),
(4, 0, 'Line Distance relay testing', NULL, NULL),
(5, 0, 'Bus bar relay testing', NULL, NULL),
(6, 1, 'Motor testing', NULL, NULL),
(7, 1, 'CB testing', NULL, NULL),
(8, 1, 'CT testing', NULL, NULL),
(9, 1, 'VT testing', NULL, NULL),
(10, 1, 'Transformer testing', NULL, NULL),
(11, 1, 'Generator testing', NULL, NULL),
(12, 1, 'Isolator testing', NULL, NULL),
(13, 1, 'Cable testing', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `youtube_urls`
--

CREATE TABLE `youtube_urls` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(2048) NOT NULL,
  `description` text DEFAULT NULL,
  `language` text NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `youtube_urls`
--

INSERT INTO `youtube_urls` (`id`, `type`, `title`, `url`, `description`, `language`, `created_at`, `updated_at`) VALUES
(1, 10, 'Equpment testing', 'https://www.youtube.com/embed/DahqK9zAuNc', '<div>In this section is related with transformer stability test </div>\nhow to do <b>transformer stability test</b> and what all the procedure has to follow for doing this transformer stability condition.<\nif you want to have online class Regarding Electrical  Testing and commissioning', '0', '2025-07-12 08:38:58', '2025-07-12 08:38:58'),
(2, 3, 'test', 'https://www.youtube.com/embed/773tiL1yoXU', 'test description', '1', '2025-07-18 00:49:54', '2025-07-18 00:49:54'),
(3, 7, 'test', 'https://www.youtube.com/embed/pZT2x5OIGdQ', 'rest', '0', '2025-07-18 00:54:20', '2025-07-18 00:54:20'),
(4, 3, 'test', 'https://www.youtube.com/embed/0vpuhx9FULw', 'test', '0', '2025-07-18 00:54:47', '2025-07-18 00:54:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_type_foreign` (`type`);

--
-- Indexes for table `job_candidates`
--
ALTER TABLE `job_candidates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_candidates_job_id_foreign` (`job_id`),
  ADD KEY `job_candidates_type_foreign` (`type`);

--
-- Indexes for table `job_categories`
--
ALTER TABLE `job_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_users`
--
ALTER TABLE `login_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login_users_email_unique` (`email`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register_trainings`
--
ALTER TABLE `register_trainings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `register_trainings_training_id_foreign` (`training_id`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trainings_type_foreign` (`type`);

--
-- Indexes for table `training_categories`
--
ALTER TABLE `training_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `youtube_categorys`
--
ALTER TABLE `youtube_categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `youtube_urls`
--
ALTER TABLE `youtube_urls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `youtube_urls_url_unique` (`url`) USING HASH,
  ADD KEY `youtube_urls_type_foreign` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job_candidates`
--
ALTER TABLE `job_candidates`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `job_categories`
--
ALTER TABLE `job_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `login_users`
--
ALTER TABLE `login_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `register_trainings`
--
ALTER TABLE `register_trainings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `training_categories`
--
ALTER TABLE `training_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `youtube_categorys`
--
ALTER TABLE `youtube_categorys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `youtube_urls`
--
ALTER TABLE `youtube_urls`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_type_foreign` FOREIGN KEY (`type`) REFERENCES `job_categories` (`id`);

--
-- Constraints for table `job_candidates`
--
ALTER TABLE `job_candidates`
  ADD CONSTRAINT `job_candidates_job_id_foreign` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `job_candidates_type_foreign` FOREIGN KEY (`type`) REFERENCES `job_categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `register_trainings`
--
ALTER TABLE `register_trainings`
  ADD CONSTRAINT `register_trainings_training_id_foreign` FOREIGN KEY (`training_id`) REFERENCES `trainings` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `trainings`
--
ALTER TABLE `trainings`
  ADD CONSTRAINT `trainings_type_foreign` FOREIGN KEY (`type`) REFERENCES `training_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `youtube_urls`
--
ALTER TABLE `youtube_urls`
  ADD CONSTRAINT `youtube_urls_type_foreign` FOREIGN KEY (`type`) REFERENCES `youtube_categorys` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
