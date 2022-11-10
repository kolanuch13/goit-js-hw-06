const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageList = document.querySelector(`.gallery`)

// const louvre = images.map(opt => {
//   const image = document.createElement("img");
//   image.src = opt.url;
//   image.alt = opt.alt; 
//   return image; 
// })  

// imageList.append(...louvre)
const louvre = images.map(image => image);
console.log(louvre);

const adress = images.map(image => image.url);
console.log(adress);

const desript = images.map(image => image.alt);
console.log(desript);

const markup = images
  .map(image => `
  <li class="gallery-item">
  <img class="gallery-item-image" src="${image.url}" alt="${image.alt}">
  </li>`)
  .join("");

imageList.insertAdjacentHTML("beforeend", markup);