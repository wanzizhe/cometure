import createHeading from './heading.js';
import './main.css';
import about from './about.md';
console.log(about, 'about');
const heading = createHeading();
document.body.append(heading);
document.body.innerHTML = about;