import React, {useEffect, useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map({data}) {
    const mapContainer = useRef(null);

    useEffect(() => {
        if (!data) return;

        const map = new maplibregl.Map({
            container: mapContainer.current!,
            style: `https://api.maptiler.com/maps/toner-v2/style.json?key=huCKCWpchitaDlLgxaaV`,
            center: [2.213749, 46.227638],
            zoom: 5,
            pitch: 40
        });

        map.on('load', () => {
            map.addControl(new maplibregl.ScaleControl({
                maxWidth: 80,
                unit: "metric"
            }), 'bottom-right');
            map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
            map.addControl(new maplibregl.FullscreenControl(), 'bottom-right');
            map.addControl(new maplibregl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true
            }), 'bottom-right');

            // Add the GeoJSON data source
            map.addSource('points', {
                type: 'geojson',
                data: data
            });

            // Add a layer for the points
            map.addLayer({
                id: 'points',
                type: 'circle',
                source: 'points',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#FF0000'
                }
            });

            // Set up event listeners
            map.on('click', 'points', function (e) {
                const properties = e.features![0].properties!;
                new maplibregl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(`
                    <h2 class="text-black font-semibold">${properties.installation_name + ' ' + properties.zip_code}</h2>
                    <span class="text-red-500 font-semibold">${properties.emissions} tonnes d’équivalent CO₂</span>
                `)
                    .addTo(map);
            });

            map.on('mouseenter', 'points', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'points', function () {
                map.getCanvas().style.cursor = '';
            });
        });

        return () => map.remove();
    }, [data]);


    return (
        <div ref={mapContainer}
            // Make the map fit the parent container full
             className="absolute w-full h-full rounded-xl shadow-xl border-2 border-gray-900"
        />
    );
}