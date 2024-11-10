/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client';

//Map component Component from library
import { GoogleMap } from '@react-google-maps/api';

//Map's styling
export const defaultMapContainerStyle = {
  width: '100%',
  height: '80vh',
  borderRadius: '15px 0px 0px 15px',
};

// https://www.google.com/maps/place/Mini+hotel+Non-Stop/@50.446168,30.496051,17z/data=!4m9!3m8!1s0x40d4cef4b0c35e11:0xeb7dc02acc427068!5m2!4m1!1i2!8m2!3d50.4457069!4d30.4945147!16s%2Fg%2F11c0xdd8tx?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D
const defaultMapCenter = {
  lat: 50.4457069,
  lng: 30.4945147,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      />
    </div>
  );
};

export { MapComponent };
