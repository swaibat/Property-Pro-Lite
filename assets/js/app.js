// google script
var placeSearch, autocomplete;

var componentForm = {
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['geocode']});
  autocomplete.setFields(['address_component']);
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
// modal script
const signupmodal = document.querySelector('#signup-modal'),
  signupButton = document.querySelector('#signup'),
  closeModalButton = document.querySelector('.close-modal'),
  // sinin const
  signinmodal = document.querySelector('#signin-modal'),
  signinButton = document.querySelector('#signin'),
  signinclose = document.querySelector('#close-signin');

signupButton.addEventListener('click', () => {
  signupmodal.classList.add('visible');
});

closeModalButton.addEventListener('click', () => {
  signupmodal.classList.remove('visible');
});

// // login
signinButton.addEventListener('click', () => {
  signinmodal.classList.add('visible');
});
signinclose.addEventListener('click', () => {
  signinmodal.classList.remove('visible');
});
