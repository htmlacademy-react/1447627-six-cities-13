import React, {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {Location} from '../../types';
import {TILE_LAYER, COPYRIGHT} from './constants.ts';

function useMap(
  mapRef: React.MutableRefObject<HTMLElement | null>,
  location: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current === null || isRenderedRef.current) {
      return;
    }

    const instance = new Map(mapRef.current, {
      center: {
        lat: location.latitude,
        lng: location.longitude,
      },
      zoom: location.zoom,
    });
    new TileLayer(TILE_LAYER, {attribution: COPYRIGHT}).addTo(instance);

    setMap(instance);
    isRenderedRef.current = true;
  }, [mapRef, location]);

  return map;
}

export default useMap;
