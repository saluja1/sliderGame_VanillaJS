var gameWidth = 400;
var counter = 2;
function stopSliding(currentSlide, nextSlide, prevSlide){
    var btn = document.getElementById("btn");
    var currentSlide = document.getElementById(currentSlide);
    var prevSlide = document.getElementById(prevSlide);


    var left = window.getComputedStyle(currentSlide).getPropertyValue("left");
    currentSlide.classList.remove("animate");
    currentSlide.style.left = left;

    var width = parseFloat(window.getComputedStyle(currentSlide).getPropertyValue("width"));
    var left1 = parseFloat(window.getComputedStyle(currentSlide).getPropertyValue("left"));
    var left2 = parseFloat(window.getComputedStyle(prevSlide).getPropertyValue("left"));
    var difference = left1 - left2;
    var absDifference = Math.abs(left1 - left2);
    if(difference>width||difference<-width){
        document.getElementById("restart").style.display = "block";
        var scoreStr = "Score:";
        var scoreMinusOne = counter-2;
        var score = scoreStr.concat(scoreMinusOne);
        btn.setAttribute("onclick", "");
        alert(score);
        return false;
        // location.reload();
    }
    var offset = width - absDifference;
    var px = "px";
    var offstring = offset.toString();
    var theWidth = offstring.concat(px);
    
    var str1 = "stopSliding('slider";
    var str2 = counter;
    var str3 = "','slider";
    var str4 = counter+1;
    var str5 = "','slider";
    var str6 = counter-1;
    var str7 = "')";
    var str8 = str1.concat(str2, str3, str4, str5, str6, str7);

    btn.setAttribute("onclick",str8);
    if(difference>0){
        var newleft = left1 + absDifference;
    }else{
        var newleft = left1 - difference;
    }
    var theleft = newleft.toString();
    var newnewleft = theleft.concat(px);
    currentSlide.style.width = theWidth; 
    if(difference<0){
        currentSlide.style.left = newnewleft;
    }
    var nextSlide = document.getElementById(nextSlide);
    var nextDiv = $("<div>");
    nextDiv.prop({id:"slider"+parseFloat(counter+1), class:"slider slider"+parseFloat(counter+1) +" animate"});
    $(".game").append(nextDiv);
    nextSlide.style.width = theWidth;
    nextSlide.style.visibility = "visible";
    gameWidth = gameWidth + absDifference;
    document.documentElement.style.setProperty('--width', gameWidth + "px");
    counter++;
}