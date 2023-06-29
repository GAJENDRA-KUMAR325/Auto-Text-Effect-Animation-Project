const containerEl = document.querySelector(".container");
const carreires = ["Youtuber","Web Develpoer","Freelancer","Instructer"];
let carrerIndex =0;
let characterIndex = 0;
updateText();
function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I am a ${carreires[carrerIndex].slice(0,characterIndex)}</h1>`;
    if(characterIndex==carreires[carrerIndex].length)
    {
        carrerIndex++;
        if(carrerIndex==carreires.length)
        {
            carrerIndex=0;
        }
        characterIndex = 0;
    }
    setTimeout(updateText,400)
}