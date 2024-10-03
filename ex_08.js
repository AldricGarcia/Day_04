window.onload = function()
{
    let delet = document.getElementById("tag");
    if(delet)
    {
        delet.remove();
    }

    let name = document.getElementById("productName");
    if(name)
    {
        name.textContent = "Samsung 22";
    }

    let text = document.querySelectorAll("p");
    if(text.length > 0)
    {
        text[0].textContent = "Never miss that perfect shot again.";
        text[1].textContent = "Designed to revolutionise video and photography, with beyond cinematic 16K resolution.";
        text[2].textContent = "Get yours now !";
    }

    let price = document.getElementById("price");
    if(price)
    {
        price.textContent = "890 €";
    }

    let picture = document.querySelector("img");
    if(picture)
    {
        picture.src = "Samsung22.png";
    }

    let addText = document.createElement("p");
    if(addText)
    {
        addText.textContent = "In cart : O";
        addText.style.fontWeight = "bold";
        addText.style.fontSize = "15px";
    }

    let addText2 = document.getElementById("addToCart");
    if(addText2)
    {
        addText2.appendChild(addText);
    }

    let click = document.querySelector(".cart-btn");
    let count = 0;

    if (click)
    {
        click.addEventListener("click", function()
        {
            count++;
            addText.textContent = "In cart: " + count;
        });
    }
};