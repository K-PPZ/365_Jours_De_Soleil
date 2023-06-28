let articles_meteo = document.getElementById("articles_meteo");

const meteo = [
    {
        day: "lun",
        date: "20",
        img: "img/img_meteo/chance-storm.png",
        bestnum: "14°",
        low_num: "6°",
    },

    {
        day: "mar",
        date: "21",
        img: "img/img_meteo/smoke.png",
        bestnum: "8°",
        low_num: "1°",
    },

    {
        day: "mer",
        date: "22",
        img: "img/img_meteo/blizzard.png",
        bestnum: "6°",
        low_num: "-6°",
    },

    {
        day: "jeu",
        date: "23",
        img: "img/img_meteo/snow.png",
        bestnum: "4°",
        low_num: "-2°",
    },

    {
        day: "ven",
        date: "24",
        img: "img/img_meteo/hazy.png",
        bestnum: "14°",
        low_num: "10°",
    },

    {
        day: "sam",
        date: "25",
        img: "img/img_meteo/thunder-storm.png",
        bestnum: "16°",
        low_num: "12°",
    },

    {
        day: "dim",
        date: "26",
        img: "img/img_meteo/fog.png",
        bestnum: "8°",
        low_num: "5°",
    },

    {
        day: "lun",
        date: "27",
        img: "img/img_meteo/wind.png",
        bestnum: "4°",
        low_num: "-3°",
    }
];

for (let i = 0; i < 8; i++) {
    let new_article = document.createElement("article");
    new_article.id = i;
    articles_meteo.appendChild(new_article);

    let new_h3 = document.createElement("h3");
    new_h3.innerText = meteo[i].day;
    new_article.appendChild(new_h3);

    let new_p = document.createElement("p");
    new_p.innerText = meteo[i].date;
    new_article.appendChild(new_p);

    let new_img = document.createElement("img");
    new_img.src = meteo[i].img;
    new_article.appendChild(new_img);

    let new_p_num = document.createElement("p");

    let new_span_best_num = document.createElement("span");
    new_span_best_num.classList.add("best_num");
    new_span_best_num.innerText = meteo[i].bestnum;
    new_p_num.appendChild(new_span_best_num);

    let new_span_separateur = document.createElement("span");
    new_span_separateur.innerText = " | ";
    new_p_num.appendChild(new_span_separateur);

    let new_span_low_num = document.createElement("span");
    new_span_low_num.classList.add("low_num");
    new_span_low_num.innerText = meteo[i].low_num;
    new_p_num.appendChild(new_span_low_num);

    new_article.appendChild(new_p_num);
}