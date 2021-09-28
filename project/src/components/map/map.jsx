import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import offerProp from '../app/offer.prop';
import 'leaflet/dist/leaflet.css';

const CITY_COORDS = [52.38333, 4.9];
const ZOOM = 12;

const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
});

function Map(props) {
  const {offers} = props;
  const container = useRef(null);

  useEffect(() => {
    const map = L.map(container.current, {
      center: CITY_COORDS,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(CITY_COORDS, ZOOM);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(map);

    const offersCoords = offers.map(({ location: { latitude, longitude } }) => [
      latitude,
      longitude,
    ]);

    offersCoords.forEach((item) => {
      L.marker(item, { icon }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [offers]);

  return <div style={{ height: '100%' }} ref={container}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default Map;
