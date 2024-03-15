// Question : 40

// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object
//  containing these two pieces of information. Use the function to make three dictionaries representing 
// different albums. Print each return value to show that Objects are storing the album information correctly.
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, 
// add that value to the album’s Object. Make at least one new function call that includes
//  the number of tracks on an album.

// Creating Function of make_album
function make_album(artist: string, albumTitle: string): Record<string, unknown> {
    let Dictionaries = {
        artistName: artist.charAt(0).toUpperCase()+ artist.slice(1),
        AlbumTitle: albumTitle.charAt(0).toUpperCase()+ albumTitle.slice(1),
    };
    return Dictionaries;
}

// making Varables
let album1 = make_album("Rahat Fateh Ali Khan", "Back 2 Love");
let album2 = make_album("Sajjad Ali", "Cinderella");
let album3 = make_album("Alamgir", "Mujahideen-e-Aflak");

// print the album
console.log(album1);
console.log(album2);
console.log(album3);



