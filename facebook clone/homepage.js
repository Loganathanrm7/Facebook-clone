                     // settings-menu js-code

// function settingsMenuToggle(){
//     document.getElementsByid("myDiv").classList.toggle("mystyle");
// }

// $("#toggle").click(function() {
//     $(this).toggleClass("on");
//     $("#menu").slideToggle();
//   });

let card = document.querySelector(".card"); //declearing profile card element
let displayPicture = document.querySelector(".display-picture"); //declearing profile picture

displayPicture.addEventListener("click", function() { //on click on profile picture toggle hidden class from css
card.classList.toggle("hidden")});


                                //  darkmode button 
                                
var darkBtn=document.getElementById("dark-btn");
darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
};

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}else{
    localStorage.setItem("theme","light");
}

localStorage.setItem("theme","dark");
localStorage.getItem("theme");