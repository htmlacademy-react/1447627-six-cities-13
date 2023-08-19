import React, {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import useMapView from '../../hooks/use-map-view';
import {MapMarkersData, Location} from '../../types';

type MapProps = {
  additionalClassName?: string;
  location: Location;
  markers: MapMarkersData;
  activePlaceId?: string;
}

function Map({additionalClassName, location, markers, activePlaceId = ''}: MapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  useMapMarkers(map, markers, activePlaceId);
  useMapView(map, location);

  return (
    <section
      className={`map ${additionalClassName || ''}`}
      ref={mapRef}
    />
  );
}

export default Map;
