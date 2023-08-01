import React, {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import {Place, Location} from '../../types';

type MapProps = {
  additionalClassName?: string;
  location: Location;
  places: Place[];
  activePlaceId?: string;
}

function Map({additionalClassName, location, places, activePlaceId = ''}: MapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  useMapMarkers(map, places, activePlaceId);

  return (
    <section
      className={`map ${additionalClassName || ''}`}
      ref={mapRef}
    />
  );
}

export default Map;
