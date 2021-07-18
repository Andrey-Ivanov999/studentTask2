
// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
let bigPicture = document.querySelector('.img-12-max');
const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

function nextFunction() {
    for (pict of images) {
        pict.classList.remove('active-img');
    }
    if (images[count] == images[images.length - 1]) {
        count = -1;
    }
    count++;
    images[count].classList.add('active-img');
    bigPicture.src = images[count].src;

}
// document.querySelector('.next').onclick = nextFunction;
// document.querySelector('.next').addEventListener("touchstart", nextFunction);

function prevFunction() {
    for (pict of images) {
        pict.classList.remove('active-img');
    }
    if (images[count] == images[0]) {
        count = images.length;
    }
    count--;
    images[count].classList.add('active-img');
    bigPicture.src = images[count].src;
}
const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
// document.querySelector('.prev').onclick = prevFunction;
// document.querySelector('.prev').addEventListener("touchstart", prevFunction);



function resetFunction() {
    for (pict of images) {
        pict.classList.remove('active-img');
    }
    count = 0;
    images[0].classList.add('active-img');

}
// document.querySelector('.reset').onclick = resetFunction;
// document.querySelector('.reset').addEventListener("touchstart", resetFunction);

const reset = document.querySelectorAll('.reset');
reset[0].onclick = resetFunction;
// ваше событие здесь!!!
