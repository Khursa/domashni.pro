;(() => {
    function initMap() {
    let map;
    let mapContainer = document.querySelector('#map');
    let mapCoordinates = {lat: 49.560286, lng: 34.527436};
    let mapOptions = {
        center: mapCoordinates,
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel:  false
    };

    let infoWindowText = document.querySelector('#marker').innerHTML;

    map = new google.maps.Map(mapContainer, mapOptions);

    let marker = new google.maps.Marker({
        position: mapCoordinates,
        map: map,
        icon: "assets/images/marker.png"
    });

    let infowindow = new google.maps.InfoWindow({
        content: infoWindowText
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

        google.maps.event.addDomListener(window, "resize", function() {
            let center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

}

document.addEventListener('DOMContentLoaded', initMap);
})();


