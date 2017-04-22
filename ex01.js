/*

    getCharAt

    Ecrire une fonction "getCharAt",
    qui retourne un caractère à une certaine position.

    Prototype:
        str getCharAt(str, position);

    Exemple:
        getCharAt("salut", 4); // "t"

*/

function getCharAt(str, position) {

	var len = str.length;
	var myChar = str[position];

	if (myChar === undefined) {

		return "The position value inserted is not valid.\nPlease choose a proper one.";

	} else {

		return myChar;

	}

}

//console.log(getCharAt("salut", 2), typeof(getCharAt("salut", 2)));