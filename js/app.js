$(document).ready(function() {
  class Api {
    constructor() {
      this.url = 'http://www.omdbapi.com/?i=b147d90a&apikey=b147d90a';
    }
  
    bind() {
      var _this = this;
  
      $('#search-by-title-button').on('click', function(e) {
        var title = $('#t').val();
        title ? _this.buscar(title) : void 0;
      });
    }
  
    buscar(title) {
      $('#consola').html('');
      $.get((this.url + '&s=' + encodeURI(title)), function(res) {
        for (var item in res.Search) {
          var peli = res.Search[item];
          console.log(res.Search[item]);
          var poster = '';
          if (peli.Poster !== 'N/A')
            poster = '<img src="' + peli.Poster + '" class="img-rounded"/>';
          $('#consola').append(peli.Title + '</br>' + poster + '</br>');
        }
      });
    }
  }
  var api = null;
  $(function() {
    api = new Api();
    api.bind();
  });
});


// agregando firebase
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDtmYJrR5fbRUsIQxRYcC6zMH1EuRUOoak',
  authDomain: 'mi-primerproyecto-b1ecb.firebaseapp.com',
  databaseURL: 'https://mi-primerproyecto-b1ecb.firebaseio.com',
  projectId: 'mi-primerproyecto-b1ecb',
  storageBucket: 'mi-primerproyecto-b1ecb.appspot.com',
  messagingSenderId: '288667018806'
};
firebase.initializeApp(config);

var $btnGoogle = ('#btnGoogle');
$btnGoogle.on('click', function() {
  authGoogle();
});

function authGoogle() {
  var provider = new firebase.auth.Google.AuthProvider();
  authentication(provider);
};

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};