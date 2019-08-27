// #SKETCHNAME ASCII Codes
var txtMessage;
var txtOutput;
var btnShowASCII;

createUI();
showCodes();

function createUI()
{
    background('PapayaWhip');
    fill(0);
    noStroke();

    // display the main title
    push();
    fill("Tan");
    rect(10, 10, 780, 40);
    fill("Black");
    textSize(25);
    text("ASCII CODES", 10, 39);
    pop();

    text("Type here a messsage", 10, 80);
    txtMessage = createEdit(10, 90, 780, 120);
    txtMessage.text = "I LOVE CODING!";
    txtMessage.onchange = showCodes;

    text("ASCII codes", 10, 230);
    txtOutput = createEdit(10, 240, 781, 345);
    txtOutput.readonly = true;
}

function showCodes()
{
    var msg = txtMessage.text;

    var txt = "Chr\tDec\tHex\tBin\n\n";
    
    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);
        
        // var chr = msg[i];
        var chr = String.fromCharCode(code);
        
        // print only characters in visible ASCII range [32, 127)
        chr = code >= 32 && code < 127 ? chr : ".";

        var line = chr + "\t" + code.toString() + "\t" + code.toString(16).toUpperCase() + "\t" + code.toString(2).padStart(7, "0");

        txt += line + "\n";
    }
    
    txtOutput.text = txt; 
}
