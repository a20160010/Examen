nom=prompt("Porfavor, coloque su nombre")
alert("Bienvenido" + nom);
var Correcto
var Incorrecto
Correcto=10
Incorrecto=0
preg1=prompt("1. ¿Cuánta agua hay en la Tierra?\nA. Alrededor de un 41% de la superficie terrestre es agua.\nB. Alrededor de un 51% de la superficie terrestre es agua\nC. Alrededor de un 71% de la superficie terrestre es agua")
if (preg1=="C"){
    preg1=10
}
else{
    preg1=0
}
preg2=prompt("2-¿Qué océano es el más grande?\nA. El Pacífico\nB. El Atlántico\nC. El Índico")
if (preg2=="A"){
    preg2=10
}
else{
    preg2=0
}
preg3=prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\nA. 11 Km\nB. 23 Km\nC. 31 Km")
if (preg3=="A"){
    preg3=10
}
else{
    preg3=0
}
total=preg1+preg2+preg3;
if (total>=30){
    document.write(nom, "Sabes mucho sobre los Oceanos")
}
else if(total>=20){
    document.write("Sabes un poco sobre los Oceanos")
}
else{
    document.write(nom, "No sabes casi nada sobre los Oceanos")
}