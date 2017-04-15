/*

    concatArrays

    Ecrire une fonction "concatArrays" qui prend deux tableaux et qui renvoi un tableau avec le contenu des deux tableaux.

    Prototype:
        arr concatArrays(arr1, arr2);

    Exemple:
        concatArrays(["bonjour"], ["ça", "va?", 3, 4]); // ["bonjour", "ça", "va?", 3, 4]

    Fonctions interdites:
        - Array.concat

    La fonction ne doit pas modifier les tableaux initiaux.

*/

function concatArrays(arr1, arr2) {

	var outArr = [];

	var len1 = arr1.length;
	
	var outLen = len1 + arr2.length;

	for (var i = 0; i < outLen; i++) {

		if (i < len1) {

			outArr.push(arr1[i]);

		} else {

			outArr.push(arr2[ i - len1 ]);

		}

	}

	return outArr;

}