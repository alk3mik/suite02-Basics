/*

    3D array

    Ecrire une fonction "getValuesFrom3DArray", qui va mettre dans un tableau à une dimension chaque valeurs trouvé.

    Prototype:
        arr getValuesFrom3DArray(arr);

    Exemple:
        getValuesFrom3DArray([
            [
                ["Oulala", "ça", "fait"],
                ["beaucoup", "de", "crochets!!!"]
            ],
            [
                ["Pourtant c'est la même chose quasiment !"]
            ]
        ]);
        // ["Oulala", "ça", "fait", "beaucoup", "de", "crochets!!!", "Pourtant c'est la même chose quasiment !"]

*/

function getValuesFrom3DArray(arr) {

    var outArr = [];
    
    var lenI = 0;
    var lenJ = 0;
    var lenK = 0;
    
    var i = 0;
    lenI = arr.length;

    while (i < lenI) {

        var j = 0;
        lenJ = arr[i].length;
        
        while (j < lenJ) {

            var k = 0;
            lenK = arr[i][j].length;

            while (k < lenK) {

                outArr.push(arr[i][j][k]);

                k++;

            }

            j++;

        }

        i++;

    }

    return outArr;
}