

prompt("Qué deseas saber?");


opcion=Math.floor((Math.random() * 5) + 1);

if (opcion==1) {
	alert("Si");
}
else if (opcion==2) {
	alert("No");
}
else if (opcion==3) {
	alert("Probablemente");
}
else if (opcion==4) {
	alert("Tal vez");
}
else if (opcion==5) {
	alert("Definitivo");
}

console.log(opcion);
/* Si
No
Probablemente
Tal vez
Definitivo */
