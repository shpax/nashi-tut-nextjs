// /*
// Since the map was loaded on client side,
// we need to make this component client rendered as well else error occurs
// */
// 'use client';

// import { MapProvider } from '@/providers/map-provider';
// //Map component Component from library
// import { GoogleMap } from '@react-google-maps/api';
// import { useEffect, useState } from 'react';

// //Map's styling
// export const defaultMapContainerStyle = {
//   width: '100%',
//   height: '100vh',
//   borderRadius: '15px 0px 0px 15px',
// };

// const defaultMapZoom = 12;

// const defaultMapOptions: google.maps.MapOptions = {
//   zoomControl: false,
//   tilt: 0,
//   gestureHandling: 'auto',
//   mapTypeId: 'roadmap',
//   disableDefaultUI: true,
//   draggable: true,
// };

// export function MapComponent({ className }: { className?: string }) {
//   const [location, setLocation] = useState({
//     lat: 0,
//     lng: 0,
//     located: false,
//   });

//   useEffect(() => {
//     if (navigator.geolocation && location.located === false) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     }

//     function success(position: GeolocationPosition) {
//       const lat = position.coords.latitude;
//       const lng = position.coords.longitude;
//       setLocation({ lat, lng, located: true });
//     }

//     function error() {
//       console.log('Unable to retrieve your location');
//     }
//   });

//   return (
//     <MapProvider>
//       <div className={'w-full fixed top-0 -z-10 ' + className}>
//         <GoogleMap
//           mapContainerStyle={defaultMapContainerStyle}
//           center={location}
//           zoom={defaultMapZoom}
//           options={defaultMapOptions}
//         />
//       </div>
//     </MapProvider>
//   );
// }
