//printPyramid(5,"#");
doPyramid();

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

/*const slider = document.getElementById("range")
    slider.addEventListener("click", function(){
        deletePyramid();
        doPyramid();
})*/

const smb = document.getElementById("form")
    const debug = 5;
    smb.addEventListener("click", function(){
        deletePyramid();
        doPyramid();
})

function getRadioVal(name) {
    var val;
    // get list of radio buttons with specified name
    var radios = document.getElementsByName(name);
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function doPyramid(){

    printPyramid(document.getElementById("range").value,getRadioVal("symbol"));
}

function deletePyramid(){
    var index = 0;
    while (document.getElementById("pyramid").firstChild != null){
      var myNode = document.getElementById("pyramid");
      var child = myNode.firstChild;
           myNode.removeChild(child);
   }

}

function printPyramid(height, symbol) {

    for (var j = 0; j < height; j++) {
        var rez = '';
        for (var i = 0; i < (height - (1+j)); i++)
            rez = rez + String.fromCharCode(160);
        for (i = 0; i < j+2 ; i++)
            rez = rez + symbol;
        var node = document.createElement("P");
        var textnode = document.createTextNode(rez);
        node.appendChild(textnode);
        document.getElementById("pyramid").appendChild(node);

    }

}