


//Converting string into numbers




//Converting string to numbers


document.querySelector(".btn").addEventListener("click",function(){

    const weight=Number(document.querySelector(".top").value);
    const height=Number(document.querySelector(".bottom").value);

    const result=weight/(height*height);

    document.querySelector(".res").innerHTML=result;

    if(result<18.5)
    {

        document.querySelector(".fres h1").innerHTML="Underweight"
        document.querySelector(".fres h1").style.backgroundColor="yellow"
        document.querySelector(".fres img").src="https://toonclips.com/600/cartoon-skinny-98-pound-guy-in-boxers-by-toonaday-56494.jpg"

    }

    else if(result>18.5 && result<=25)
    {
        document.querySelector(".fres h1").innerHTML="Normal Weight"
        document.querySelector(".fres h1").style.backgroundColor="green"
        document.querySelector(".fres img").src="https://www.pngkey.com/png/full/85-850391_file-showing-off-or-flexing-muscles-svg-fitness.png";
        
    }

    else if(result>25)
    {
        document.querySelector(".fres h1").innerHTML="Overweight Weight"
        document.querySelector(".fres h1").style.backgroundColor="red"

        document.querySelector(".fres img").src="https://toonclips.com/600/unfit-cartoon-guy-standing-on-a-groaning-scale-by-toonaday-1222.jpg";
    }

});