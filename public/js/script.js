function disclaimerClose(){
    let close=document.getElementsByClassName("disclaimerDiv");
    for(let i=0;i<close.length;i++){
        close[i].style.display="none";
    }

    let webBlur=document.getElementsByClassName("webBlur");
    for(let i=0;i<webBlur.length;i++){
        webBlur[i].style.filter="none";
    }
}

function ham_open(){
    let open=document.getElementsByClassName("mobileNavbar");
    for(let i=0;i<open.length;i++){
        open[i].style.display="block";
    }

    
    let scrollDeactive=document.getElementsByClassName("index");
    for(let i=0;i<scrollDeactive.length;i++){
        scrollDeactive[i].style.overflowY="hidden";
    }
}

function ham_close(){
    let close=document.getElementsByClassName("mobileNavbar");
    for(let i=0;i<close.length;i++){
        close[i].style.display="none";
    }

    let scrollActive=document.getElementsByClassName("index");
    for(let i=0;i<scrollActive.length;i++){
        scrollActive[i].style.overflowY="scroll";
    }
}

function darkMode(){
    let darkIcon=document.getElementsByClassName("darkMode");
    for(let i=0;i<darkIcon.length;i++){
        darkIcon[i].style.display="none";
    }

    let lightIcon=document.getElementsByClassName("lightMode");
    for(let i=0;i<lightIcon.length;i++){
        lightIcon[i].style.display="block";
    }

    let nightTheme=document.getElementsByClassName("nightTheme");
    for(let i=0;i<nightTheme.length;i++){
        nightTheme[i].style.backgroundColor="black";
        nightTheme[i].style.color="white";
    }

    let backToTop=document.getElementsByClassName("backToTop");
    for(let i=0;i<backToTop.length;i++){
        backToTop[i].style.backgroundColor="white";
    }

    let backToIcon=document.getElementsByClassName("backTo");
    for(let i=0;i<backToIcon.length;i++){
        backToIcon[i].style.backgroundColor="black";
    }
}

function lightMode(){
    let lightIcon=document.getElementsByClassName("lightMode");
    for(let i=0;i<lightIcon.length;i++){
        lightIcon[i].style.display="none";
    }
    let darkIcon=document.getElementsByClassName("darkMode");
    for(let i=0;i<darkIcon.length;i++){
        darkIcon[i].style.display="block";
    }

    let dayTheme=document.getElementsByClassName("dayTheme");
    for(let i=0;i<dayTheme.length;i++){
        dayTheme[i].style.backgroundColor="white";
        dayTheme[i].style.color="black";
    }

    let backToTop=document.getElementsByClassName("backToTop");
    for(let i=0;i<backToTop.length;i++){
        backToTop[i].style.backgroundColor="black";
    }

    let backToIcon=document.getElementsByClassName("backTo");
    for(let i=0;i<backToIcon.length;i++){
        backToIcon[i].style.backgroundColor="white";
    }
}


