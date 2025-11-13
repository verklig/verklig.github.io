let titleText = [ "B", "BL", "BLA", "BLAS", "BLAST", "BLASTG", "BLASTGA", "BLASTGAN", "BLASTGANG", "BLASTGANG", "BLASTGANG" ];
let x = 0;

if (document.addEventListener)
{
    document.addEventListener("DOMContentLoaded", function()
	{
        loaded();
    });
}
else if (document.attachEvent) 
{
    document.attachEvent("onreadystatechange", function() 
	{
        loaded();
    });
}

function loaded()
{
	setInterval(loop, 450);
}

function loop()
{
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}