import './less/index.less'


const navLinks = document.querySelectorAll('a');
const headImage = document.querySelector('header img');
const buttons = document.querySelectorAll('.btn');
const midImages = document.querySelector('.img-content:nth-child(2) img');
const midImages2 = document.querySelector('.img-content:nth-child(1) img');
const headerText = document.querySelector('h1');

//navLinks resize + 2 mouseenter, mouseleave
navLinks.forEach(link => link.addEventListener('mouseenter', () => link.style.fontSize = "2rem" ));
navLinks.forEach(link => link.addEventListener('mouseleave', () => link.style.color = "red"));
navLinks.forEach(link => link.preventDefault);

//header image change + 2 mouseover, mouseout
const changeImg = () => {
    headImage.src = "https://dcmp.org/posterimages/series_4.jpg"
}
headImage.addEventListener('mouseover', changeImg);
headImage.addEventListener('mouseout', () => headImage.src = "http://localhost:9000/img/fun-bus.jpg");

//button change text on click + 1 click
buttons.forEach(link => link.addEventListener('click', () => link.textContent = "sorry doesn't work"))
buttons.forEach(link => link.addEventListener('mouseout', () => link.textContent = "Sign Me Up!"));

//doubleclick to change image + 1 dblclick
midImages.addEventListener('dblclick', () => midImages.src = "https://upload.wikimedia.org/wikipedia/en/9/9a/Scooby-gang-1969.jpg");
midImages2.addEventListener('dblclick', () => midImages2.src = "https://www.hollywoodreporter.com/wp-content/uploads/2014/03/les_mousserables.jpg");

// keydown darkmode + 1
function escKey(evt) {
    console.log(evt.key);
    if (evt.key === "Escape") {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#fff";
        document.querySelector('header').style.backgroundColor = "#121212";
        headerText.style.color = "#fff";
        navLinks.forEach(link => link.style.color = "#fff");
    }
}
document,addEventListener('keydown', escKey);

//onload + 1
document.addEventListener('onload', alert('Hello!'));

// scroll + 1
document.addEventListener('scroll', () => headerText.textContent = "Fun...");

//copy + 1
document.addEventListener('copy', () => alert('you are copying'));


