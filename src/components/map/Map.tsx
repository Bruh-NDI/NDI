import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
    const [API_KEY] = useState('huCKCWpchitaDlLgxaaV');
    const mapContainer = useRef(null);
    const [viewState] = useState({
        center: [2.213749, 46.227638],
        zoom: 5,
        pitch: 40
    });

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current!,
            style: `https://api.maptiler.com/maps/toner-v2/style.json?key=${API_KEY}`,
            center: viewState.center,
            zoom: viewState.zoom,
            pitch: viewState.pitch
        });

        map.addControl(new maplibregl.ScaleControl(), 'bottom-right');
        map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
        map.addControl(new maplibregl.FullscreenControl(), 'bottom-right');
        map.addControl(new maplibregl.GeolocateControl(), 'bottom-right');

        // put fetch in cache 1h
        fetch('https://raw.githubusercontent.com/cedricr/eutl/main/export/emissions-FR-geo.geojson')
        .then(response => response.json())
        .then(data => {
            // Ajouter les données GeoJSON à la carte
            map.addSource('points', {
                type: 'geojson',
                data: data
            });

            // Ajouter une couche de points à la carte
            map.addLayer({
                id: 'points',
                type: 'circle',
                source: 'points',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#FF0000'
                }
            });

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
    });

    return (
        <div ref={mapContainer}
             // Make the map fit the parent container full
             className="absolute w-full h-full rounded-xl shadow-xl border-2 border-gray-900"
        />
    );
}