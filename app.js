const heading = document.querySelectorAll(".section-heading");
heading.forEach((head)=>{

head.addEventListener("click",()=>{
   
    const paragraph = head.nextElementSibling;
    paragraph.classList.toggle("show");
    

    
    });
    
});

