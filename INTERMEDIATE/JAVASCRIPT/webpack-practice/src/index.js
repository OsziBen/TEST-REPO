import "./styles.css";
import { greeting } from "./greeting.js";

import puppyImage from "./puppy.jpg";
   
const image = document.createElement("img");
image.src = puppyImage;
   
document.body.appendChild(image);


console.log(greeting);
