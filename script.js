function validateForm() {
    var inputValue = document.getElementById("inputBox").value;
    var masterCardPrefix = [51,52,53,54,55,22,23,24,25,26,27];
    var maestroPrefix = [5018,5020,5033,5038];
    var isMatch = false;


    if (inputValue.indexOf("4") == 0) {
        changeCardImage("visa");
        return;
    }


    for(var i=0; i<masterCardPrefix.length; i++)
    {
        if(inputValue.indexOf(masterCardPrefix[i])== 0)
        {
            isMatch = true;
            changeCardImage("mastercard");
            return;
        }

    }

    if (isMatch) return;

    for(var i=0; i<maestroPrefix.length; i++)
    {
        if(inputValue.indexOf(maestroPrefix[i])== 0)
        {
            isMatch = true;
            changeCardImage("maestro");
            return;
        }

    }

    if (!isMatch) changeCardImage("card");

}

function changeCardImage(card) {
    switch (card){
        case "visa":
            document.getElementById("idIcon").style.backgroundPosition="-44px 0";
            return;
        case "maestro":
            document.getElementById("idIcon").style.backgroundPosition="-88px 0";
            return;
        case "mastercard":
            document.getElementById("idIcon").style.backgroundPosition="0 0";
            return;
        case "card":
            document.getElementById("idIcon").style.backgroundPosition="-132px 0";
            return;
    }
}
