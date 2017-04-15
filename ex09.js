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

	var len = arr.length;

// slice(beg, end) property create chucks of the array, starting from the position
// "beg" and ending to the position "end", exlcuded.
// If beg = 0 and end = array.length, then it creates a copy of the array. 

	var indexToBeSpliced = 0;

	var upLim = 0;
	var i = 0;	
	var j = 0;	
	
	while (i < len - 1) {

		upLim = 9999999999999999;

//		lenNew = arr.length;

			j = i;
			while (j < len) {

				if (arr[j] < upLim) {

					upLim = arr[j];
					
					indexToBeSpliced = j;
					
//					console.log(upLim, indexToBeSliced);

				}

				j++;

			}

//			console.log("cycle ", i, upLim, indexToBeSpliced);

// The splice(index, num, val2) property removes "num" adjacent elements starting from "index" and
// replace them with val2;
// It returns the removed sub-array, that is the following array [v_{index}, v_{index+1}, v_{index+2}, ..., v_{index + num -1}];
// arrayCopy.splice(indexToBeSliced, 1);

			arr = (arr.splice(i, 0, Number(arr.splice(indexToBeSpliced, 1)))).concat(arr);

//			console.log(arr);

		i++;

	}

//	return outArr;
}

// console.log(sortNumbers([4, 3, 5, 2]));