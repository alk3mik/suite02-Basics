/*

    *Insert at*

    Ecrire une fonction "insertAt", qui insert une occurrence à un certain index d'un tableau.

    Prototype:
        arr insertAt(arr, occurence, position);

    Exemple:
        insertAt(["Bonjour", "va?"], "ça", 1); // ["Bonjour", "ça", "va?"]

*/

function insertAt(arr, occurence, position) {

	var bkpArr = [];
	var len = arr.length;
	var i = 0;

	i = len;
	while (i > position) {
		bkpArr.push(arr.pop());
		i--;
	}

	arr.push(occurence);

	i = len - 1 - position;
	while (i >= 0) {
		arr.push(bkpArr[i]);
		i--;
	}

	return arr;

}
/*
var myArr = [4, "pippo", 8, 666];
console.log(myArr);
var res = insertAt(myArr, "pizza", 1);
console.log(myArr);
console.log(res);
*/