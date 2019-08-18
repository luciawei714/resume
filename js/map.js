function initMap() {
    var melbourne = {lat: -37.808265, lng: 144.963087};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: melbourne
    });
}