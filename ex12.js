/*

    *Split*

    Ecrire une fonction "splitStr" qui, d'où son nom,
    sépare une chaine de caractère par une occurence donnée,
    et renvoi un tableau contenant le résultat de la séparation de donnée.

    Prototype:
        arr splitStr(str, occurence);

    Exemples:
        splitStr("Bonjour comment tu vas ? ça va merci.", " ");
        // ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]

    Fonctions interdites:
        - String.split

*/

function splitStr(str, occurence) {

	var outArr = [];
	var arrElement = "";
	var len = str.length;
	var i = 0;

	if (str.search(occurence) === -1) {

		return console.log("The occurence you typed is not present in the string... Please choose a proper one.");
//		return outArr = str;
	
	} else {

		while (i < len) {

			if (str[i] === occurence) {

				outArr.push(arrElement);

				arrElement = "";

			} else {

				arrElement = arrElement + str[i];

			}

			i++;
		}

		outArr.push(arrElement);

		return outArr;
	
	}

}
/*
var resArray = splitStr("pippo e topolino vanno al mare", " ");
console.log(resArray);
*/