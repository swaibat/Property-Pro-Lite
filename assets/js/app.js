window.addEventListener('load', function () {
  document.getElementById("loader").classList.remove("loader");
  });
function initMap() {
  // The location of 
  var kampala = {
      lat: 0.347596,
      lng: 32.582520
  };
  // The map, centered at 
  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 9,
          center: kampala
      });
  // The marker, positioned at 
  var marker = new google.maps.Marker({
      position: kampala,
      map: map
  });
}

// delete confirm
function closeDelete(){
  document.querySelector('#delete').classList.remove('visible');
}

function deleteModal(){
  document.querySelector('#delete').classList.add('visible');
}

function closeIn(){
  document.querySelector('#signin').classList.remove('visible');
}

function closeUp(){
  document.querySelector('#signup').classList.remove('visible');
}

function signin(){
  document.querySelector('#signin').classList.add('visible');
}

function signup(){
  document.querySelector('#signup').classList.add('visible');
}

function agents() {
  document.getElementById('user').classList.add('d-none'),
  document.getElementById('agent').classList.remove('d-none');
}

function agents() {
  document.getElementById('user').classList.add('d-none'),
  document.getElementById('agent').classList.remove('d-none');
}

function users() {
  document.getElementById('agent').classList.add('d-none'),
  document.getElementById('user').classList.remove('d-none');
}
// google script
let placeSearch,
  autocomplete;

const componentForm = {
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
};
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: ['geocode'] });
  autocomplete.setFields(['address_component']);
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();

  for (const component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (let i = 0; i < place.address_components.length; i++) {
    const addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      const val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const circle = new google.maps.Circle({ center: geolocation, radius: position.coords.accuracy });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

const mylist = []
// Create a new list item when clicking on the "Add" button
function newElement() {
  var img = document.createElement("IMG");
  var inputValue = document.getElementById("myInput").value;
  document.getElementById("forms").classList.add('product-form');
  var att = document.createAttribute("src");
  document.getElementById('myInput').value = '';
	att.value = inputValue;
  img.setAttributeNode(att);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("results").appendChild(img);
    const mynew = document.getElementById("results").getElementsByTagName("img")
        // console.log(mynew[0].currentSrc) 
        mylist.push(mynew[0].currentSrc)

    console.log(mylist) 
  }
  document.getElementById("results").value = "";
}
