$(() => {
    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    iconSize: [29,43]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        49.45480118878082, 53.51478732275671
                    ]
                }
            }
        ]
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoieGtvcmVkZXVzIiwiYSI6ImNrbGtxcmoybzNmMGIydnM4MWs5ZXo5cmMifQ._YIlgXTnQtUtNubeZg81dg';

    if ( $(window).width() > 996 ) {
        centerPosition = [
            49.460774459957214, 53.51445059247407
        ]
    } else {
        centerPosition = [
            49.456751254551605, 53.51467787844254
        ];
    }

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/xkoredeus/cklkrgmef0qsx17mlzyqyo3ga',
        center: centerPosition,
        zoom: 15,
        attributionControl: false
    });

    // add markers to map
    geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
            'url(assets/img/balloon.svg)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

    var elInner = $('.balloon__content');
    $('.marker').append(elInner);
});
