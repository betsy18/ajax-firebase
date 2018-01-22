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
      $.getJSON((this.url + '&s=' + encodeURI(title)), function(res) {
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