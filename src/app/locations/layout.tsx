import { PreservedStateProvider } from '@/providers/preserved-state-provider';
import React from 'react';

export default function LocationsLayout({ children }: React.PropsWithChildren) {
  return <PreservedStateProvider>{children}</PreservedStateProvider>;
}
