import React, {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import useMapView from '../../hooks/use-map-view';
import {Place, Location} from '../../types';

type MapProps = {
  additionalClassName?: string;
  location: Location;
  places: Place[];
  activePlaceId?: string;
}

function Map({additionalClassName, location, places, activePlaceId = ''}: MapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  useMapMarkers(map, places, activePlaceId);
  useMapView(map, location);

  return (
    <section
      className={`map ${additionalClassName || ''}`}
      ref={mapRef}
    />
  );
}

export default Map;
