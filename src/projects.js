import cities_01 from './images/cities_01.jpg';
import cities_02 from './images/cities_02.jpg';
import cities_04 from './images/cities_04.jpg';
import cities_05 from './images/cities_05.jpg';
import cities_06 from './images/cities_06.jpg';


const mainElement = document.getElementById('mainImg');
const gallery01 = document.getElementById('gal_Img_01');
const gallery02 = document.getElementById('gal_Img_02');
const gallery03 = document.getElementById('gal_Img_03');
const gallery04 = document.getElementById('gal_Img_04');

const modalImg01 = document.getElementById('gal_Img_01_Modal');
const modalImg02 = document.getElementById('gal_Img_02_Modal');
const modalImg03 = document.getElementById('gal_Img_03_Modal');
const modalImg04 = document.getElementById('gal_Img_04_Modal');

mainElement.src = cities_04;

gallery01.src = cities_02;
modalImg01.src = cities_02;

gallery02.src = cities_05;
modalImg02.src = cities_05;

gallery03.src = cities_06;
modalImg03.src = cities_06;

gallery04.src = cities_01;
modalImg04.src = cities_01;