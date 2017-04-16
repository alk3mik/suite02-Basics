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

	var bkpString = "";
	len = str.length;

	var i = 0;
	while (i < len) {

		if (i < position || i > position) {
			bkpString = bkpString + str[i];
		} else {
			bkpString = bkpString + char;
		}

		i++;
	
	}

	str = bkpString;

	return str;

}
/*
var str = "pippo";
console.log(str);
var result = editStringAt(str, 2, "X");
console.log(result, "*");
console.log(str);
*/