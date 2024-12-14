'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  center: mapboxgl.LngLatLike;

  markers: mapboxgl.LngLatLike[];
}

// TODO: move out geo
// TODO: move out locations
export const MapboxMap = ({
  className,
  center,
  markers,
}: React.HTMLProps<HTMLDivElement> & MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_TOKEN!;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center, // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    markers.forEach((marker) => {
      new mapboxgl.Marker().setLngLat(marker).addTo(mapRef.current!);
    });
  });

  return (
    <div className={`${className} w-full fixed top-0 bottom-0 -z-10 `}>
      <div ref={mapContainerRef} className="w-full h-full"></div>
    </div>
  );
};
