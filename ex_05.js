window.onload = function()
{
    let msgButton = document.querySelector(".cart-btn");
    if(msgButton)
    {
        msgButton.addEventListener("click", function(press)
        {
            press.preventDefault();
            alert("Thanks!");
        });
    }
};