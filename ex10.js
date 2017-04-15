/*

    *doubleSortNumbers*

    Ecrire une fonction "doubleSortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void doubleSortNumbers(arr1, arr2);

    Exemples:
        doubleSortNumbers([4, 3, 5, 2], [6, 3, 2]); // [2, 2, 3, 3, 4, 5, 6]

    Fonctions interdites:
        Array.sort

*/

function doubleSortNumbers(arr1, arr2) {

	var outArr = arr1.concat(arr2);

	console.log(outArr);

	sortNumbers(outArr);

	return outArr;

}


function sortNumbers(arr) {

	var len = arr.length;
	var indexToBeSpliced = 0;
	var upLim = 0;
	var i = 0;	
	var j = 0;	
	
	while (i < len - 1) {

		upLim = 9999999999999999;

			j = i;
			while (j < len) {

				if (arr[j] < upLim) {

					upLim = arr[j];
					
					indexToBeSpliced = j;

				}

				j++;

			}

			arr = (arr.splice(i, 0, Number(arr.splice(indexToBeSpliced, 1)))).concat(arr);

		i++;

	}

}

var myArr1 = [4, 3, 5, 2];
var myArr2 = [6, 3, 2];

console.log(doubleSortNumbers(myArr1, myArr2));