import { MapComponent } from '@/components/map';
import { MapProvider } from '@/providers/map-provider';

export default function Page() {
  return (
    <MapProvider>
      <MapComponent />
    </MapProvider>
  );
}
