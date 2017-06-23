function validateForm() {
    var inputValue = document.getElementById("inputBox").value;
    var masterCardPrefix = [51,52,53,54,55,22,23,24,25,26,27];
    var maestroPrefix = [5018,5020,5033,5038];
    var isMatch = false;

    if (inputValue.indexOf("4") == 0) {
        changeCardImage("visa")
        return;
    }


    for(var i=0; i<masterCardPrefix.length; i++)
    {
        if(inputValue.indexOf(masterCardPrefix[i])== 0)
        {
            isMatch = true;
            changeCardImage("mastercard")
            return;
        }

    }

    if (isMatch) return;

    for(var i=0; i<maestroPrefix.length; i++)
    {
        if(inputValue.indexOf(maestroPrefix[i])== 0)
        {
            isMatch = true;
            changeCardImage("maestro")
            return;
        }

    }

    if (!isMatch) changeCardImage("card");

}

function changeCardImage(card) {
    var div = document.getElementsByClassName("icon");

    switch (card){
        case "visa":
            div.id = "visa";
            return;
        case "maestro":
            div.id = "maestro";
            return;
        case "mastercard":
            div.id = "mastercard";
            return;
        case "card":
            div.id = "card";
            return;
    }
}
