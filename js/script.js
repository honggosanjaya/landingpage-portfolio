const home = document.getElementsByClassName('nav-link')[0];
const about = document.getElementsByClassName('nav-link')[1];
const project = document.getElementsByClassName('nav-link')[2];
const capabilities = document.getElementsByClassName('nav-link')[3];
const skills = document.getElementsByClassName('nav-link')[4];
const contact = document.getElementsByClassName('nav-link')[5];

home.onclick = function(){
	home.classList.add('active');
	about.classList.remove('active');
	project.classList.remove('active');
	capabilities.classList.remove('active');
	skills.classList.remove('active');
	contact.classList.remove('active');
}

about.onclick = function(){
	home.classList.remove('active');
	about.classList.add('active');
	project.classList.remove('active');
	capabilities.classList.remove('active');
	skills.classList.remove('active');
	contact.classList.remove('active');
}

project.onclick = function(){
	home.classList.remove('active');
	about.classList.remove('active');
	project.classList.add('active');
	capabilities.classList.remove('active');
	skills.classList.remove('active');
	contact.classList.remove('active');
}

capabilities.onclick = function(){
	home.classList.remove('active');
	about.classList.remove('active');
	project.classList.remove('active');
	capabilities.classList.add('active');
	skills.classList.remove('active');
	contact.classList.remove('active');
}

skills.onclick = function(){
	home.classList.remove('active');
	about.classList.remove('active');
	project.classList.remove('active');
	capabilities.classList.remove('active');
	skills.classList.add('active');
	contact.classList.remove('active');
}

contact.onclick = function(){
	home.classList.remove('active');
	about.classList.remove('active');
	project.classList.remove('active');
	capabilities.classList.remove('active');
	skills.classList.remove('active');
	contact.classList.add('active');
}

const all = document.getElementById('skills__button--all');
const web = document.getElementById('skills__button--webDev');
const design = document.getElementById('skills__button--design');

const card1 = document.getElementById('skills__card--1');
const card2 = document.getElementById('skills__card--2');
const card3 = document.getElementById('skills__card--3');
const card4 = document.getElementById('skills__card--4');
const card5 = document.getElementById('skills__card--5');
const card6 = document.getElementById('skills__card--6');

all.onclick = function(){
	card1.classList.remove('skills__card--hilang');
	card2.classList.remove('skills__card--hilang');
	card3.classList.remove('skills__card--hilang');
	card4.classList.remove('skills__card--hilang');
	card5.classList.remove('skills__card--hilang');
	card6.classList.remove('skills__card--hilang');
}

web.onclick = function(){
	card1.classList.remove('skills__card--hilang');
	card2.classList.remove('skills__card--hilang');
	card3.classList.remove('skills__card--hilang');
	card4.classList.add('skills__card--hilang');
	card5.classList.add('skills__card--hilang');
	card6.classList.add('skills__card--hilang');
}


design.onclick = function(){
	card1.classList.add('skills__card--hilang');
	card2.classList.add('skills__card--hilang');
	card3.classList.add('skills__card--hilang');
	card4.classList.remove('skills__card--hilang');
	card5.classList.remove('skills__card--hilang');
	card6.classList.remove('skills__card--hilang');
}



