const ad_url = "https://api.adviceslip.com/advice";
const button = document.getElementById("butt");
let para = document.getElementById("para");
let id = document.getElementById("id");

let getFunc = () => {
    fetch(ad_url)
.then((response) => {
    return response.json();
})
.then((data) => {
    showData(data);
})
.catch((error) => {
    console.log(error);
})
}

getFunc();

let showData = (data) => {
    console.log(`${data["slip"]["advice"]} with id ${data["slip"]["id"]}`);
    para.innerHTML = `"${data["slip"]["advice"]}"`;
    id.innerHTML = `Advice #${data["slip"]["id"]}`;
}

button.addEventListener('click', () => {
    getFunc();
});

alert("Click on the button for random advice");

