var card = document.querySelectorAll(".card")


card.forEach(function(card){
    card.addEventListener("mouseenter", function(){
        card.childNodes[3].style.display = "block"
    })
    card.addEventListener("mouseleave", function(){
        card.childNodes[3].style.display = "none"
    })
    card.addEventListener("mousemove", function(dets){
        card.childNodes[3].style.left = dets.clientX + "px"
    })
})