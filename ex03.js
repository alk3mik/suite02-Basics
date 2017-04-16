/*

    copyArray

    Ecrire une fonction "copyArray",
    qui prend en paramètre un tableau,
    et retourne une copie de ce tableau.

    Prototype:
        arr copyArray(arr);

    Exemple:
        copyArray(["bonjour", 4, 5]); // ["bonjour", 4, 5]

*/

function copyArray(arr) {

	var arrayCopy = [];
	var len = arr.length;

	var i = 0;
	while (i < len) {

		arrayCopy.push(arr[i]);

		i++;

	}

// The above "deep-copy" (term taken from Python language) could be
// also be performed with the use of *slice(beg, end)* method by
// setting beg = 0 and end = array.length. If *beg* and *end* are omitted,
// by default they are equal to 0 and array.length, like this:
// arrayCopy = arr.slice();
	
	return arrayCopy;

}
/* Tests:
arr = ["bonjour", 4, 5];
console.log(arr);
var arrayCopy = copyArray(arr);
console.log(arrayCopy);
arrayCopy.splice(2, 1, "tutturutu");
console.log(arr);
console.log(arrayCopy);
*/