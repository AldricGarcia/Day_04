function getRandomColor()
{
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function()
{
    let disco = document.querySelector(".cart-btn");
    if(disco)
    {
        disco.textContent = "CHANGE COLOR";
        disco.addEventListener("click", function()
        {
            let discoRandom = getRandomColor();
            document.body.style.backgroundColor = discoRandom;
        });
    }
};