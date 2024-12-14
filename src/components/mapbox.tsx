'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  coordinates?: [number, number];
}

export const MapboxMap = ({
  className,
}: React.HTMLProps<HTMLDivElement> & MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_TOKEN!;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      // center: coordinates, // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: GeolocationPosition) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      // setLocation({ lat, lng, located: true });

      mapRef.current!.setCenter({
        lat,
        lng,
      });
    }

    function error() {
      console.log('Unable to retrieve your location');
    }
  });

  return (
    <div className={`${className} w-full fixed top-0 bottom-0 -z-10 `}>
      <div ref={mapContainerRef} className="w-full h-full"></div>
    </div>
  );
};
