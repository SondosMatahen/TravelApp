// js files
import { handleSubmit } from './js/app.js'
import { updateUI } from './js/updateUI'

// console.log(checkForURL);

// alert("I EXIST")
// console.log("CHANGE!!");

// sass files
// import './styles/resets.scss'
// import './styles/base.scss'
 import './styles/footer.scss'
// import './styles/header.scss'
import './styles/style.scss';

document.getElementById('submit').addEventListener('click', handleSubmit);

export { handleSubmit }
export { updateUI }