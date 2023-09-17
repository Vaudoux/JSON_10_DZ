
import { priceInfo } from "./data.js";

const data = JSON.parse(priceInfo);
console.log(data);

const content = document.querySelector(".content");
    
data.forEach(({ id, name, price, url }) => {
const div = document.createElement("div");
div.classList.add("card");
content.appendChild(div);
div.style.display = 'inline-block';
div.style.margin = '50px';
    
const img = document.createElement("img");
img.classList.add("card-top");
img.src = url;


    
div.appendChild(img);
    
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
div.appendChild(cardBody);
    
const idPara = document.createElement("p");
idPara.classList.add("card-text");
idPara.textContent = `id: ${id}`;
cardBody.appendChild(idPara);
idPara.style.fontSize = '20px';
    
const title = document.createElement("h5");
title.classList.add("card-title");
title.textContent = name;
cardBody.appendChild(title);
title.style.fontSize = '20px';
    
const subtitle = document.createElement("h6");
subtitle.classList.add("card-subtitle");
subtitle.textContent = price;
cardBody.appendChild(subtitle);
subtitle.style.fontSize = '20px';
});