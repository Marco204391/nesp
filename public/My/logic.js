/*let figure = document.getElementById('figure')
figure.onmouseover = (event) =>{
    figure.width *=2;
}
figure.onmouseout = (event)  =>{
    figure.width /=2;
}*/
let figure = document.getElementById('figure');



let biggerImage = () =>{
    figure.style.width="100%"
};
let smallerImage = () =>{
    figure.style.width="25%"
};
figure.onmouseover = biggerImage;
figure.onmouseout = smallerImage;