import {createGlobalStyle} from 'styled-components';

export const CoreColorStyles = createGlobalStyle`
  :root {
    --color-core-blue990: rgba(14, 15, 52, 1);
    --color-core-blue950: rgba(17, 18, 62, 1);
    --color-core-blue900: rgba(25, 24, 82, 1);
    --color-core-blue800: rgba(33, 30, 102, 1);
    --color-core-blue700: rgba(48, 43, 141, 1);
    --color-core-blue600: rgba(64, 55, 181, 1);
    --color-core-blue500: rgba(79, 67, 221, 1);
    --color-core-blue400: rgba(114, 105, 228, 1);
    --color-core-blue300: rgba(149, 142, 235, 1);
    --color-core-blue200: rgba(185, 180, 241, 1);
    --color-core-blue100: rgba(220, 217, 248, 1);
    --color-core-blue50: rgba(237, 236, 252, 1);
    --color-core-blue10: rgba(246, 246, 253, 1);
    --color-core-red990: rgba(33, 15, 27, 1);
    --color-core-red950: rgba(44, 18, 28, 1);
    --color-core-red900: rgba(64, 24, 31, 1);
    --color-core-red800: rgba(85, 30, 34, 1);
    --color-core-red700: rgba(127, 42, 41, 1);
    --color-core-red600: rgba(168, 54, 47, 1);
    --color-core-red500: rgba(199, 42, 28, 1);
    --color-core-red400: rgba(219, 104, 93, 1);
    --color-core-red300: rgba(228, 142, 134, 1);
    --color-core-red200: rgba(237, 179, 174, 1);
    --color-core-red100: rgba(246, 217, 215, 1);
    --color-core-red50: rgba(250, 236, 235, 1);
    --color-core-red10: rgba(253, 246, 245, 1);
    --color-core-yellow990: rgba(28, 22, 21, 1);
    --color-core-yellow950: rgba(41, 30, 22, 1);
    --color-core-yellow900: rgba(53, 37, 22, 1);
    --color-core-yellow800: rgba(103, 69, 23, 1);
    --color-core-yellow700: rgba(154, 100, 23, 1);
    --color-core-yellow600: rgba(204, 132, 24, 1);
    --color-core-yellow500: rgba(254, 163, 25, 1);
    --color-core-yellow400: rgba(254, 181, 71, 1);
    --color-core-yellow300: rgba(254, 200, 117, 1);
    --color-core-yellow200: rgba(255, 218, 163, 1);
    --color-core-yellow100: rgba(255, 237, 209, 1);
    --color-core-yellow50: rgba(255, 241, 221, 1);
    --color-core-yellow10: rgba(255, 246, 232, 1);
    --color-core-green990: rgba(9, 36, 38, 1);
    --color-core-green950: rgba(11, 46, 43, 1);
    --color-core-green900: rgba(15, 65, 54, 1);
    --color-core-green800: rgba(20, 85, 65, 1);
    --color-core-green700: rgba(28, 125, 86, 1);
    --color-core-green600: rgba(37, 164, 108, 1);
    --color-core-green500: rgba(46, 204, 129, 1);
    --color-core-green400: rgba(88, 214, 154, 1);
    --color-core-green300: rgba(130, 224, 179, 1);
    --color-core-green200: rgba(171, 235, 205, 1);
    --color-core-green100: rgba(213, 245, 230, 1);
    --color-core-green50: rgba(234, 250, 242, 1);
    --color-core-green10: rgba(245, 252, 249, 1);
    --color-core-lime990: rgba(0, 38, 11, 1);
    --color-core-lime950: rgba(0, 38, 11, 1);
    --color-core-lime900: rgba(0, 101, 28, 1);
    --color-core-lime800: rgba(0, 155, 43, 1);
    --color-core-lime700: rgba(5, 213, 63, 1);
    --color-core-lime600: rgba(37, 240, 94, 1);
    --color-core-lime500: rgba(81, 233, 124, 1);
    --color-core-lime400: rgba(116, 237, 150, 1);
    --color-core-lime300: rgba(151, 242, 176, 1);
    --color-core-lime200: rgba(185, 246, 203, 1);
    --color-core-lime100: rgba(220, 251, 229, 1);
    --color-core-lime50: rgba(238, 253, 242, 1);
    --color-core-lime10: rgba(246, 254, 248, 1);
    --color-core-cyan990: rgba(13, 32, 50, 1);
    --color-core-cyan950: rgba(17, 41, 60, 1);
    --color-core-cyan900: rgba(24, 58, 78, 1);
    --color-core-cyan800: rgba(31, 76, 97, 1);
    --color-core-cyan700: rgba(46, 110, 135, 1);
    --color-core-cyan600: rgba(60, 145, 172, 1);
    --color-core-cyan500: rgba(75, 180, 210, 1);
    --color-core-cyan400: rgba(111, 195, 219, 1);
    --color-core-cyan300: rgba(147, 210, 228, 1);
    --color-core-cyan200: rgba(183, 225, 237, 1);
    --color-core-cyan100: rgba(219, 240, 246, 1);
    --color-core-cyan50: rgba(237, 247, 250, 1);
    --color-core-cyan10: rgba(246, 251, 253, 1);
    --color-core-olive990: rgba(25, 31, 41, 1);
    --color-core-olive950: rgba(33, 39, 48, 1);
    --color-core-olive900: rgba(48, 56, 61, 1);
    --color-core-olive800: rgba(64, 72, 74, 1);
    --color-core-olive700: rgba(94, 106, 99, 1);
    --color-core-olive600: rgba(125, 139, 125, 1);
    --color-core-olive500: rgba(156, 172, 151, 1);
    --color-core-olive400: rgba(176, 189, 172, 1);
    --color-core-olive300: rgba(196, 205, 193, 1);
    --color-core-olive200: rgba(215, 222, 213, 1);
    --color-core-olive100: rgba(235, 238, 234, 1);
    --color-core-olive50: rgba(245, 247, 245, 1);
    --color-core-olive10: rgba(250, 251, 250, 1);
    --color-core-gray990: rgba(3, 6, 21, 1);
    --color-core-gray950: rgba(13, 17, 33, 1);
    --color-core-gray900: rgba(23, 28, 44, 1);
    --color-core-gray850: rgba(33, 39, 56, 1);
    --color-core-gray800: rgba(43, 50, 68, 1);
    --color-core-gray750: rgba(53, 61, 80, 1);
    --color-core-gray700: rgba(63, 72, 91, 1);
    --color-core-gray650: rgba(73, 83, 103, 1);
    --color-core-gray600: rgba(83, 94, 115, 1);
    --color-core-gray550: rgba(93, 105, 126, 1);
    --color-core-gray500: rgba(103, 116, 138, 1);
    --color-core-gray450: rgba(118, 130, 150, 1);
    --color-core-gray400: rgba(133, 144, 161, 1);
    --color-core-gray350: rgba(149, 158, 173, 1);
    --color-core-gray300: rgba(164, 172, 185, 1);
    --color-core-gray250: rgba(179, 185, 197, 1);
    --color-core-gray200: rgba(194, 199, 208, 1);
    --color-core-gray150: rgba(209, 213, 220, 1);
    --color-core-gray100: rgba(225, 227, 232, 1);
    --color-core-gray50: rgba(240, 241, 243, 1);
    --color-core-gray10: rgba(247, 248, 249, 1);
    --color-core-white: rgba(255, 255, 255, 1);
    --color-core-cobalt990: rgba(3, 15, 41, 1);
    --color-core-cobalt950: rgba(3, 20, 50, 1);
    --color-core-cobalt900: rgba(2, 24, 60, 1);
    --color-core-cobalt800: rgba(2, 42, 99, 1);
    --color-core-cobalt700: rgba(1, 61, 139, 1);
    --color-core-cobalt600: rgba(1, 79, 178, 1);
    --color-core-cobalt500: rgba(0, 97, 217, 1);
    --color-core-cobalt400: rgba(51, 129, 225, 1);
    --color-core-cobalt300: rgba(102, 160, 232, 1);
    --color-core-cobalt200: rgba(153, 192, 240, 1);
    --color-core-cobalt100: rgba(204, 223, 247, 1);
    --color-core-cobalt50: rgba(229, 239, 251, 1);
    --color-core-cobalt10: rgba(242, 247, 253, 1);
    --color-core-coral990: rgba(24, 8, 26, 1);
    --color-core-coral950: rgba(35, 9, 28, 1);
    --color-core-coral900: rgba(46, 10, 31, 1);
    --color-core-coral800: rgba(88, 14, 40, 1);
    --color-core-coral700: rgba(131, 18, 50, 1);
    --color-core-coral600: rgba(173, 22, 59, 1);
    --color-core-coral500: rgba(216, 26, 69, 1);
    --color-core-coral400: rgba(224, 72, 106, 1);
    --color-core-coral300: rgba(232, 118, 143, 1);
    --color-core-coral200: rgba(239, 163, 181, 1);
    --color-core-coral100: rgba(247, 209, 218, 1);
    --color-core-coral50: rgba(251, 232, 236, 1);
    --color-core-coral10: rgba(253, 244, 246, 1);
  }
`;
