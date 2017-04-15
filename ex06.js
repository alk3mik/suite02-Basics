/*

    getValuesByType

    Ecrire une fonction "getValuesByType",
    qui donne un tableau avec uniquement les valeurs d'un type en particulier depuis un autre tableau.

    Prototype:
        arr getValuesByType(arr, type);

    Exemple:
        getValuesByType(["toto", 4, 5], "number"); // [4, 5]

    Attention, la fonction ne doit pas modifier le tableau modèle.

*/

function getValuesByType(arr, type) {

	var outArray = [];

	var i = 0;

	var len = arr.length;

	while (i < len) {

		if (typeof(arr[i]) === type) {

			outArray.push(arr[i]);
		
		}

		i++;
	
	}

	return outArray;

}