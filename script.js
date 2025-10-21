let indice=0
const saida=document.getElementById("saida")
const cookie=document.querySelector(".cookie") 
const whey=document.querySelector(".whey")
function contador(){
    indice++
    saida.innerHTML=indice
    cookie.animationDelay="2s"
    if(indice===2){
    cookie.style.transform="scale(1.1)"
    saida.style.marginTop="1px"
    }
    else if(indice===5){
    cookie.style.transform="scale(1.2)"
    saida.style.marginTop="2px"
    }
    else if(indice===8){
        cookie.style.transform="scale(1.3)"
        saida.style.marginTop="5px"
    }
    else if(indice===10){
        cookie.style.transform="scale(1.5)"
        saida.style.marginTop="8px"
        setTimeout(() => {
            saida.style.color="black"
            cookie.style.display="none"
            whey.style.display="block"
            document.body.style.backgroundColor="#343e72"
        }, 1000);
    }
    else if(indice===20){
        document.body.style.backgroundColor="#475497ff"
        setTimeout(() => {
            whey.style.transform="translatex(-300px)"
        }, 1000);
    }
    else if(indice===30){
        document.body.style.backgroundColor="#5062bbff"
        setTimeout(() => {
            whey.style.transform="translatex(300px)"
        }, 1000);
    }
    else if(indice===50){
        document.body.style.backgroundColor="#5a6fd8ff"
        setTimeout(() => {
            whey.style.transform="translate(0)"
        }, 1000);
    }
}
