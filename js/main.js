let previousEL = document.querySelector(".previous");

let nextEL = document.querySelector(".next");

let liEL = document.querySelectorAll(".ul_images > li");

console.log(liEL);

let tab_for_liEL = [...liEL];

let long = tab_for_liEL.length;

let long_for_previous = tab_for_liEL.length

let licznik = 0;

// for (let i = 0; i < tab_for_liEL.length; i++) {


    nextEL.addEventListener("click", function(){
        licznik++;       
        if (licznik == long)
        {
            liEL[licznik-1].style.display = "none";
            liEL[0].style.display = "";
            licznik = 0;
        }
        else
        {  
            liEL[licznik-1].style.display = "none";
            liEL[licznik].style.display = "inline";
            console.log(licznik);
        }
    })

    previousEL.addEventListener("click", function(){
        liEL[licznik].style.display = "none";
            liEL[long_for_previous-1].style.display = "inline";
            long_for_previous--;
            licznik = long_for_previous;

            if (long_for_previous == 0)
            {
                long_for_previous = liEL.length;
            }
    })
// }