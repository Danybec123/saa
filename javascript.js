var jugador1=localStorage.getItem("Tag1")
var jugador2=localStorage.getItem("tag2")
var punto1=0
var punto2=0
document.getElementById("h3").innerHTML=jugador1+":"+"<span id='span'></span>"
document.getElementById("h4").innerHTML=jugador2+":"+"<span id='span2'></span>"
document.getElementById("span").innerHTML=punto1
document.getElementById("span2").innerHTML=punto2
document.getElementById("span3").innerHTML=jugador1
document.getElementById("span4").innerHTML=jugador2
function Palabra(){
    var palabraXD=document.getElementById("inmput").value
    console.log(palabraXD)
    minuscula=palabraXD.toLowerCase()
    console.log(minuscula)
    var priletra=minuscula.charAt(1)
    console.log(priletra)
     var prile=minuscula.length
     console.log(prile)
     var micha=Math.floor(prile/2)
     console.log(micha)
     var letra2=minuscula.charAt(micha)
     console.log(letra2)
     var ultimo=minuscula.charAt(prile-1)
     console.log(ultimo)
     var painicial=minuscula.replace(priletra,"_")
     var painicial=painicial.replace(letra2,"_")
     var painicial=painicial.replace(ultimo,"_")
     console.log(painicial)
     var h3="<h3> "+painicial+" </h3>"
     var input=" <h3> responde >:( <h3><input type='text' id='inmputt'> <button onclick='Respondicion()'>Respondicion</button>"
document.getElementById("div2").innerHTML=h3+input     
document.getElementById("inmput").value=""
}
var Preguntacion="jugador1"
var respondon="jugador2"
var respuesta=""
function Respondicion(){
respuesta=document.getElementById("inmputt").value
var muniscula=respuesta.toLowerCase()
if (muniscula==minuscula) {
    if (respondon=="jugador2") {
    punto2=punto2+1    
    document.getElementById("span2").innerHTML=punto2
    }else{
        punto1=punto1+1    
    document.getElementById("span").innerHTML=punto1
    }   
}
if (respondon=="jugador2") {
    respondon="jugador1"
    Preguntacion="jugador2"
    document.getElementById("span3").innerHTML=jugador2
document.getElementById("span4").innerHTML=jugador1
}
else if (respondon=="jugador1") {
    respondon="jugador2"
    Preguntacion="jugador1"
    document.getElementById("span3").innerHTML=jugador1
document.getElementById("span4").innerHTML=jugador2
}
document.getElementById("div2").innerHTML=""
}
