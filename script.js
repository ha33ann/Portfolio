
let click = document.querySelector('.click');

let list = document.querySelector('.list');

click.addEventListener("click",()=>{

    list.classList.toggle('newlist');


    if(list.classList.contains('newlist')){

        
        
        const Hassan = document.getElementById("Hassan");
        Hassan.style.transform = "translateY(150px)";
        const info = document.getElementById("info");
        info.style.transform = "translateY(150px)";
        
        const buttons = document.getElementById("buttons");
        buttons.style.transform = "translateY(150px)";
        
        const java = document.getElementById("java");
        java.style.transform = "translateY(150px)";
        

       
        

    }else{

        
        
        const Hassan = document.getElementById("Hassan");
        Hassan.style.transform = "translateY(0px)";
        const info = document.getElementById("info");
        info.style.transform = "translateY(0px)";
        const buttons = document.getElementById("buttons");
        buttons.style.transform = "translateY(0px)";
        
        
        
        const java = document.getElementById("java");
        java.style.transform = "translateY(0px)";
        
        const footer = document.getElementById("footer");
        footer.style.transform = "translateY(0px)";
       
        const list1 = document.getElementById("list1");
        list1.style.transform = "translateY(0px)";
        const list2 = document.getElementById("list2");
        list2.style.transform = "translateY(0px)";
        const list3 = document.getElementById("list3");
        list3.style.transform = "translateY(0px)";
        const list4 = document.getElementById("list4");
        list4.style.transform = "translateY(0px)";
        const list5 = document.getElementById("list5");
        list5.style.transform = "translateY(0px)";
        const list6 = document.getElementById("list6");
        list6.style.transform = "translateY(0px)";
        const list7 = document.getElementById("list7");
        list7.style.transform = "translateY(0px)";
        const list8 = document.getElementById("list8");
        list8.style.transform = "translateY(0px)";
        const list9 = document.getElementById("list9");
        list9.style.transform = "translateY(0px)";
        const list10 = document.getElementById("list10");
        list10.style.transform = "translateY(0px)";
        const list11 = document.getElementById("list11");
        list11.style.transform = "translateY(0px)";
        const list12 = document.getElementById("list12");
        list12.style.transform = "translateY(0px)";

    }


    

});




let link2 = document.querySelector('.links2');

link2.addEventListener("click",()=>{

    const lorem = document.getElementById("lorem");

    
    list.classList.toggle('newlist');
    lorem.style.transform = "translateY(0px)"
        Hassan.style.transform = "translateY(0px)";
        info.style.transform = "translateY(0px)";
        CV.style.transform = "translateY(0px)";
        linkedin.style.transform = "translateY(0px)";
        mail.style.transform = "translateY(0px)";
        java.style.transform = "translateY(0px)";
        buttons.style.transform = "translateY(0px)";
        footer.style.transform = "translateY(0px)";
        Skills.style.transform = "translateY(0px)";
        list1.style.transform = "translateY(0px)";
        list2.style.transform = "translateY(0px)";
        list3.style.transform = "translateY(0px)";
        list4.style.transform = "translateY(0px)";
        list5.style.transform = "translateY(0px)";
        list6.style.transform = "translateY(0px)";
        list7.style.transform = "translateY(0px)";
        list8.style.transform = "translateY(0px)";
        list9.style.transform = "translateY(0px)";
        list10.style.transform = "translateY(0px)";
        list11.style.transform = "translateY(0px)";
        list12.style.transform = "translateY(0px)";
        lorem.scrollIntoView({behavior: "smooth"});

});

let link3 = document.querySelector('.links3');

link3.addEventListener("click",()=>{

    const footer = document.getElementById("footer");

    
    list.classList.toggle('newlist');
    lorem.style.transform = "translateY(0px)"
        Hassan.style.transform = "translateY(0px)";
        info.style.transform = "translateY(0px)";
        CV.style.transform = "translateY(0px)";
        linkedin.style.transform = "translateY(0px)";
        mail.style.transform = "translateY(0px)";
        java.style.transform = "translateY(0px)";
        buttons.style.transform = "translateY(0px)";
        footer.style.transform = "translateY(0px)";
        Skills.style.transform = "translateY(0px)";
        list1.style.transform = "translateY(0px)";
        list2.style.transform = "translateY(0px)";
        list3.style.transform = "translateY(0px)";
        list4.style.transform = "translateY(0px)";
        list5.style.transform = "translateY(0px)";
        list6.style.transform = "translateY(0px)";
        list7.style.transform = "translateY(0px)";
        list8.style.transform = "translateY(0px)";
        list9.style.transform = "translateY(0px)";
        list10.style.transform = "translateY(0px)";
        list11.style.transform = "translateY(0px)";
        list12.style.transform = "translateY(0px)";
        footer.scrollIntoView({behavior: "smooth"});

});


function copy() {
  
    navigator.clipboard.writeText("Hassan_siala@hotmail.com");
    

    

    

  }
  
  

  function linked(){
    window.open("https://www.linkedin.com/in/hassan-s1/");
  }

  function resume(){
    window.open("MittNyaCV.pdf");
  }

  
  let mail = document.querySelector('.mail');
let tooltip = document.querySelector('.tooltiptext');

mail.addEventListener("click",()=>{

    let text = "Copied!";
    navigator.clipboard.writeText(text);
    tooltip.innerHTML = "Copied!";
    setTimeout(function(){ tooltip.innerHTML = "Click here to copy email"; }, 2000);
    setTimeout(function(){
        tooltip.style.opacity = "0";
        setTimeout(function(){
            tooltip.style.opacity = "1";
            
        }, 0);
    }, 1000);
    
});

let mailbutton = document.querySelector('.mailbutton');

mailbutton.addEventListener("click",()=>{

    navigator.clipboard.writeText("Hassan_siala@hotmail.com");
    window.location.href = ("mailto:Hassan_siala@hotmail.com");
    
}
);

document.addEventListener("click",()=>{
    tooltip.style.opacity = "0";
    setTimeout(function(){
        tooltip.style.opacity = "1";
        
    }, 0);
});

let link1 = document.querySelector('.links1');

link1.addEventListener("click",()=>{

    const topofpage = document.getElementById("topofpage");

    
    list.classList.toggle('newlist');
        lorem.style.transform = "translateY(0px)"
        Hassan.style.transform = "translateY(0px)";
        info.style.transform = "translateY(0px)";
        CV.style.transform = "translateY(0px)";
        linkedin.style.transform = "translateY(0px)";
        mail.style.transform = "translateY(0px)";
        java.style.transform = "translateY(0px)";
        buttons.style.transform = "translateY(0px)";
        footer.style.transform = "translateY(0px)";
        Skills.style.transform = "translateY(0px)";
        list1.style.transform = "translateY(0px)";
        list2.style.transform = "translateY(0px)";
        list3.style.transform = "translateY(0px)";
        list4.style.transform = "translateY(0px)";
        list5.style.transform = "translateY(0px)";
        list6.style.transform = "translateY(0px)";
        list7.style.transform = "translateY(0px)";
        list8.style.transform = "translateY(0px)";
        list9.style.transform = "translateY(0px)";
        list10.style.transform = "translateY(0px)";
        list11.style.transform = "translateY(0px)";
        list12.style.transform = "translateY(0px)";
        topofpage.scrollIntoView({behavior: "smooth"});

});
