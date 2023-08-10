import {useEffect, useRef} from 'react';
import {Map} from 'leaflet';
import {Location} from '../../types';

function useMapView(map: Map | null, location: Location) {
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: location.latitude,
        lng: location.longitude,
      }, location.zoom);
    }
  }, [map, location]);

  isRenderedRef.current = true;
}

export default useMapView;
