
var floors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

for (i=1 ; i<= floors ; i++)
{
	console.log(" ".repeat((floors-i)) + "#".repeat(i));
}
