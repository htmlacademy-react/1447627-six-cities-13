import {useEffect, useRef} from 'react';
import {Map, Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapMarkersData} from '../../types';

const MarkerIcon = {
  Width: 27,
  Height: 39,
  DefaultTypeUrl: '/img/pin.svg',
  ActiveTypeUrl: '/img/pin-active.svg'
} as const;

function createIcon(url: string) {
  return new Icon({
    iconUrl: url,
    iconSize: [MarkerIcon.Width, MarkerIcon.Height],
    iconAnchor: [MarkerIcon.Width / 2, MarkerIcon.Height]
  });
}

function useMapMarkers(map: Map | null, markers: MapMarkersData, activePlaceId: string): void {
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map && markers?.length) {
      const markerLayer = layerGroup().addTo(map);

      markers.forEach((marker) => {
        new Marker(marker.coordinates, {
          icon: marker.id === activePlaceId
            ? createIcon(MarkerIcon.ActiveTypeUrl)
            : createIcon(MarkerIcon.DefaultTypeUrl)
        }).addTo(markerLayer);
      });

      isRenderedRef.current = true;

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, markers, activePlaceId]);
}

export default useMapMarkers;
