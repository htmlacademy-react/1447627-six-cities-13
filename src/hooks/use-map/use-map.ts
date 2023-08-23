import React, {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {TILE_LAYER, COPYRIGHT} from './const.ts';

function useMap(
  mapRef: React.MutableRefObject<HTMLElement | null>
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current === null || isRenderedRef.current) {
      return;
    }

    const instance = new Map(mapRef.current);
    new TileLayer(TILE_LAYER, {attribution: COPYRIGHT}).addTo(instance);

    setMap(instance);
    isRenderedRef.current = true;
  }, [mapRef]);

  return map;
}

export default useMap;
