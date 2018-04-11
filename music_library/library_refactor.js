var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
      for (listID in this.playlists) {
      console.log(listID + ': ' + this.playlists[listID].name + ' - ' + this.playlists[listID].tracks.length + ' tracks');
    }
  },
  printTracks: function () {
    for (trackID in this.tracks) {
      console.log(trackID + ": " + this.tracks[trackID].name + " by " + this.tracks[trackID].artist + ' (' + this.tracks[trackID].album + ')' );
    }
  },
  printPlaylist: function(playlistId) {
    console.log(playlistId + ': ' + this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks');
    // assign track array to a local array
    var trackArr = this.playlists[playlistId].tracks;
    // now loop through array
    var that = this;
    trackArr.forEach(function(trackID) {
      console.log(trackID + ": " + that.tracks[trackID].name + " by " + that.tracks[trackID].artist + ' (' + that.tracks[trackID].album + ')' );
    });
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  addTrack: function (name, artist, album) {
    var uidv = this.uid();
    this.tracks[uidv] = { id: uidv, name: name, artist: artist, album: album };
  },
  addPlaylist: function (name) {
    var uidv = this.uid();
    library.playlists[uidv] = {id: uidv, name: name, tracks: []};
  },
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01");

// adds an existing track to an existing playlist

library.addTrackToPlaylist("t01","p01");
console.log(library.playlists.p01);

// adds a track to the library
library.addTrack("Space Oddity", "David Bowie", "Best of 1998");
console.log(library.tracks);

// adds a playlist to the library

library.addPlaylist("Bedroom Jams");
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};