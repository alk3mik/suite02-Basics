/*

    *sortNumbers*

    Ecrire une fonction "sortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void sortNumbers(arr);

    Exemples:
        sortNumbers([4, 3, 5, 2]); // [2, 3, 4, 5]

    Fonctions interdites:
        Array.sort

*/

function sortNumbers(arr) {

	var outArr = [];
	var len = arr.length;
	var arrayCopy = arr.slice(0, len);
	var lenCopy = arrayCopy.length;
	var indexToBeSliced = 0;

	var upLim = 0;	
	var j = 0;
	var i = 0;
	
	while (i < len) {

		upLim = 9999999999999999;

		lenCopy = arrayCopy.length
		
		if (lenCopy > 1) {

			j = 0;
			while (j < lenCopy) {

				if (arr[j] < upLim) {
					upLim = arr[j];
					indexToBeSliced = j;
					console.log(upLim, indexToBeSliced);
				}

				j++;

			}

			console.log("cycle ", i, upLim, indexToBeSliced);

			outArr.push(upLim);

			arrayCopy.splice(indexToBeSliced, 1);

		}

		i++;

	}

	return outArr;
}

console.log(sortNumbers([4, 3, 5, 2]));