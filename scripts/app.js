
const platform = new H.service.Platform({
    app_id: 'rcxiTKFgeUPkztA96NRr',
    app_code: 'HcWGPVFc9J_-9W29PCN4-Q'
});

const defaultLayers = platform.createDefaultLayers();
const mapContainer = document.getElementById('ma-container');

const map = new H.Map(
    mapContainer,
    defaultLayers.normal.map
);

window.addEventListener('resize', function(){
    map.getViewPort().resize();
});