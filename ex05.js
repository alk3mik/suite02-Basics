/*

    Search in Array

    Ecrire une fonction "searchOcc", qui nous renvoi l'index d'une occurrence dans un tableau.
    Si l'occurrence est introuvable dans le tableau, renvoyer -1;

    Prototype:
        nbr searchOcc(arr, occurence);

    Exemples:
        searchOcc(["Salut", "ça", "va", "?"], "va"); // 2
        searchOcc(["Salut", "ça", "va", "?"], "Ahahahah"); // -1

    Fonctions interdites:
        - Array.indexOf

*/

function searchOcc(arr, occurrence) {

    var len = arr.length;

    var i = 0;

    while (i < len) {

        if (arr[i] === occurrence) {

            return i;

        }

        i++;
    
    }

    return -1;

}