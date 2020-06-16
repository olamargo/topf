
var btnMobile = document.getElementById("menuToggle");
btnMobile.addEventListener("click", function()
{
    var mobileMenu = document.getElementById("mobile_menu");
    mobileMenu.classList.toggle("open");
});

function myFunction() 
{
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none")
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Więcej...";
        moreText.style.display = "none";
    }
    else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Mniej...";
        moreText.style.display = "inline";
    }
};

var form = document.getElementById("form")

form.addEventListener("change", function(){

    for(var i=0; i < form.length; i++)
    {
        if(form[i].type == "radio")
        {
            form[i].labels[0].classList.remove("active");

            if(form[i].checked == true)
            {
                form[i].labels[0].classList.add("active");

            }
        }
    }
});