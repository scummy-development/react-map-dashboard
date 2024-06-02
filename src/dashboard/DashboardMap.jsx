import { Map, Marker } from 'maplibre-gl';
import { useLayoutEffect, useMemo, useState } from 'react';
import { uid } from 'uid/single';

const useMapLibre = (mapUid) => {
  const [map, setMap] = useState(null);

  useLayoutEffect(() => {
    if (!mapUid) return;

    const _map = new Map({
      container: mapUid, // container id
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=y9MdT6LapD1Xu7crQRIz', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        new Marker().setLngLat([longitude, latitude]).addTo(_map);
        _map.flyTo({
          zoom: 9,
          speed: 1.5,
          curve: 1,
          easing(t) {
            return t;
          },
          center: [longitude, latitude],
        });

        // add a home marker
      },
      (error) => {
        console.error(error);
      },
    );

    setMap(_map);
  }, [mapUid]);

  return map;
};

export const DashboardMap = () => {
  const mapUid = useMemo(() => uid(), []);

  useMapLibre(mapUid);

  return (
    <div className="map-dashboard-map" id={mapUid}>
      <div className="map-dashboard-map__map-entry-point" id=""></div>
    </div>
  );
};
