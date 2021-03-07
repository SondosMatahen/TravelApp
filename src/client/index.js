// js files
import { handleSubmit } from './js/app.js'
import { updateUI } from './js/updateUI'

// alert("I EXIST")
// console.log("CHANGE!!");

// sass files
 import './styles/footer.scss'
import './styles/style.scss';

document.getElementById('submit').addEventListener('click', handleSubmit);

export { handleSubmit }
export { updateUI }