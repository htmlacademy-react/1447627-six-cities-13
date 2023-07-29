import {useEffect, useRef} from 'react';
import {Map, Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Place} from '../../types';

function useMapMarkers(map: Map | null, places: Place[], activePlaceId: string): void {
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map && places?.length) {
      const MarkerIcon = {
        Width: 27,
        Height: 39,
        DefaultTypeUrl: '/img/pin.svg',
        ActiveTypeUrl: '/img/pin-active.svg'
      } as const;

      const defaultCustomIcon = new Icon({
        iconUrl: MarkerIcon.DefaultTypeUrl,
        iconSize: [MarkerIcon.Width, MarkerIcon.Height],
        iconAnchor: [MarkerIcon.Width / 2, MarkerIcon.Height]
      });

      const currentCustomIcon = new Icon({
        iconUrl: MarkerIcon.ActiveTypeUrl,
        iconSize: [MarkerIcon.Width, MarkerIcon.Height],
        iconAnchor: [MarkerIcon.Width / 2, MarkerIcon.Height]
      });

      const markerLayer = layerGroup().addTo(map);

      places.forEach((place) => {
        new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        }, {
          icon: place.id === activePlaceId ? currentCustomIcon : defaultCustomIcon
        }).addTo(markerLayer);
      });

      isRenderedRef.current = true;

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, places, activePlaceId]);
}

export default useMapMarkers;
