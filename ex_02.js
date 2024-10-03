window.onload = function()
{
    let paragraphs = document.querySelectorAll("p");
    if (paragraphs.length > 0)
    {
        for (let i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].textContent = i;
        }
    }
}