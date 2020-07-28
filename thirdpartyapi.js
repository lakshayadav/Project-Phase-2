/*function initMap(){
    //set up location
let mylocation = {
    lat:43.6650324,
    lng:-79.7794919
};

let mapSpot = document.getElementById('map');

let map = new google.maps.Map(mapSpot,{
    zoom:20,
    center:mylocation
});

let marker = new google.maps.Marker({position:mylocation, map:map});
}*/

let map;
let infoWindow;
let mapSpot = document.getElementById("map");
let mylocation = {
    lat: -34.397,
    lng: 150.644
};

function initMap(){
    
     map = new google.maps.Map(mapSpot,{
        center: {lat: -34.397, lng: 150.644},
        zoom:7
    });

    infoWindow=new google.maps.InfoWindow;

    //try geolocation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let pos= {
                lat: position.coords.latitude,
                lng : position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.')
            infoWindow.open(map);
            map.setCenter(pos);
        }, function(){
            handleLocationError(true,infoWindow,map.getCenter());
        });
    }
        else{
            handleLocationError(false,infoWindow,map.getCenter());

        }
    }

    function handleLocationError(broweserHasGeolocation,infoWindow,pos){
        infoWindow.setPosition(pos);
        infoWindow.setContent(broweserHasGeolocation ? 'Error: The Geolocation service has failed': 'Error: Your browser doesn\'t support geolocation');
        infoWindow.open(map);
    }
