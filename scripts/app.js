
const platform = new H.service.Platform({
    app_id: 'rcxiTKFgeUPkztA96NRr',
    app_code: 'HcWGPVFc9J_-9W29PCN4-Q'
});

const defaultLayers = platform.createDefaultLayers();
const mapContainer = document.getElementById('map-container');

const coordinates = {
    lat: 52.530974,
    lng: 13.384944
};

const mapOptions = {
    center: coordinates,
    zoom: 14
};

const map = new H.Map(
    mapContainer,
    defaultLayers.normal.map,
    mapOptions
);

map.setBaseLayer(defaultLayers.satellite.traffic);

window.addEventListener('resize', function(){
    map.getViewPort().resize();
});

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

const iconUrl = './images/marker-gelato.svg';

const iconOptions = {
    size: new H.math.Size(26,34),
    anchor: new H.math.Point(14,34)
};

const markerOptions = {
    icon: new H.map.Icon(iconUrl, iconOptions)
};

const marker = new H.map.Marker(coordinates, markerOptions);

map.addObject(marker);
