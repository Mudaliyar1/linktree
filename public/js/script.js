function disclaimerClose(){    //this code is for disclaimer in home page
    let close=document.getElementsByClassName("disclaimerDiv");
    for(let i=0;i<close.length;i++){
        close[i].style.display="none";
    }

    let webBlur=document.getElementsByClassName("webBlur"); //this code is for blur effect of home page
    for(let i=0;i<webBlur.length;i++){
        webBlur[i].style.filter="none";
    }
}

function ham_open(){   // this function is for open hamburger menu 
    // let open=document.getElementsByClassName("mobileNavbar");
    // for(let i=0;i<open.length;i++){
    //     open[i].style.display="block";
    // }

    let scrollDeactive=document.getElementsByClassName("index");  // this code deactivate the scroll of webpage when hamburger menu open
    for(let i=0;i<scrollDeactive.length;i++){
        scrollDeactive[i].style.overflowY="hidden";
    }

    gsap.to('.mobileNavbar',{
        duration:0,
        delay:0,
        onComplete:()=>{
            gsap.set('.mobileNavbar',{display:"block"})
        },
    })

    gsap.from('.mobileLinks a',{        //gsap animations code
        y:-10,
        duration:0.2,
        stagger:1,
        opacity:0,
       
    });
}

function ham_close(){ // this function is for closing hamburger menu
    // let close=document.getElementsByClassName("mobileNavbar");
    // for(let i=0;i<close.length;i++){
    //     close[i].style.display="none";
    // }

    gsap.to('.mobileLinks a',{
        y:10,
        duration:0.2,
        stagger:1,
        opacity:0,
        onComplete:()=>{
            gsap.set('.mobileLinks a',{opacity:1})
        }
    });

    gsap.to('.mobileNavbar',{
        duration:0,
        delay:2.1,
        onComplete:()=>{
            gsap.set('.mobileNavbar',{display:'none'})
        },
    })

    let scrollActive=document.getElementsByClassName("index"); // this code activate the scroll of webpage when hamburger menu close
    for(let i=0;i<scrollActive.length;i++){
        scrollActive[i].style.overflowY="scroll";
    }
}

function darkMode(){ // this function is for activating dark mode
    let darkIcon=document.getElementsByClassName("darkMode");
    for(let i=0;i<darkIcon.length;i++){
        darkIcon[i].style.display="none";
    }

    let lightIcon=document.getElementsByClassName("lightMode"); // this code will replace dark icon with light icon
    for(let i=0;i<lightIcon.length;i++){
        lightIcon[i].style.display="block";
    }

    let nightTheme=document.getElementsByClassName("nightTheme"); // this code will change the theme of webpage to dark mode
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

function lightMode(){ // this function is for activating light mode
    let lightIcon=document.getElementsByClassName("lightMode");
    for(let i=0;i<lightIcon.length;i++){
        lightIcon[i].style.display="none";
    }
    let darkIcon=document.getElementsByClassName("darkMode"); // this code will replace light icon with dark icon
    for(let i=0;i<darkIcon.length;i++){
        darkIcon[i].style.display="block";
    }

    let dayTheme=document.getElementsByClassName("dayTheme"); // this code will change the theme of webpage to light mode
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







// gsap code starts from here

// gsap.from('.indexMainDiv #box1',{
//     x:'-110%',
//     duration:1,
//     scrollTrigger:{
//         trigger:".indexMainDiv #box1",
//         scroller:'body',
//         // markers:true,
//         start:"top px",
//         end:'top 2%',
//         scrub:2
//     }

// });

gsap.from('.indexMainDiv #box2',{
    x:'-500%',
    duration:1,
    borderRadius:'1000%',
    scrollTrigger:{
        trigger:".indexMainDiv #box2",
        scroller:'.index',
        // markers:true,
        start:"top 90%",
        end:'top 20%',
        scrub:1
    }


});
gsap.from('.indexMainDiv #box3',{
    x:'-100%',
    rotateY:'360deg',
    duration:1,
    scrollTrigger:{
        trigger:".indexMainDiv #box3",
        scroller:'body',
        // markers:true,
        start:"top 80%",
        end:'top 20%',
        scrub:2
    }
});
gsap.from('.indexMainDiv #box4',{
    x:'100%',
    duration:1,
    rotateX:'200deg',
    scrollTrigger:{
        trigger:".indexMainDiv #box4",
        scroller:'body',
        // markers:true,
        start:"top 90%",
        end:'top 20%',
        scrub:1
    }
});
gsap.from('.indexMainDiv #box5',{
    x:'-100%',
    duration:1,
    rotate:'360deg',
    borderRadius:'50%',
    scrollTrigger:{
        trigger:".indexMainDiv #box5",
        scroller:'body',
        // markers:true,
        start:"top 90%",
        end:'top 20%',
        scrub:1
    }
});
