/*

    editStringAt

    Ecrire une fonction "editStringAt",
    qui modifie une chaine de caractère à une certaine position.
    La fonction retourne cette même chaine de caractère avec les modifications attendus.

    Prototype:
        str editStringAt(str, position, char);

    Exemple:
        editStringAt("toto", 3, "a"); // "tota";

*/

function editStringAt(str, position, char) {

	var strA = "";
	var strB = "";
	var outString = "";

	var i = 0;
	
	while (i < position) {
		strA = strA + str[i];
		i++;
	}

	i++;

	while (i < str.length) {

		strB = strB + str[i];
		i++;
	}

	outString = strA + char + strB;
	
	return outString;

}

/*
	The following one will not work because of the 65th
	line.
	Surpri
*/

/*
var str = "supercalifragile";
var position = 3;
var chr = "X";

function editStringAt(str, position, chr) {

	var outStr = "";

	var len = str.length;

	var i = 0;
	
	while (i < len) {
	
		if (i === position) {
			str[i] = chr;
			console.log(str[i], len, chr);
		}
	
		console.log(outStr, outStr.length);

		outStr = outStr + str[i];

		i++;
	
	}

	return outStr;

}
*/