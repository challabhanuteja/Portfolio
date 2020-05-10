// $('#gform').on('submit', function (e) {
//     $('#gform *').fadeout(2000);
//     $('#gform').prepend('Message sent Succesfully');
// });
function validate(){
    let x = document.getElementsByClassName('input');
    let y = true;
    for (let i = 0; i < x.length; i++) {
        if(x[i].value=='')
        {
            y = false;
        }
    }
    console.log(y);
    if(y){
        printSubmitted();
    }
    else
    {
        printFillCorrectly();
    }
}

function printSubmitted(){
    let x = document.getElementById("succ-response");
    x.style.display = "block";
    let y = document.getElementById("unsucc-response");
    y.style.display = "none";
}
function printFillCorrectly(){
    let x = document.getElementById("unsucc-response");
    x.style.display = "block";
    let y = document.getElementById("succ-response");
    y.style.display = "none";
}
