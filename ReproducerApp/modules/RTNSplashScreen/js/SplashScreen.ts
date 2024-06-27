import { TurboModuleRegistry } from 'react-native';

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';

export interface Spec extends TurboModule {
  hide(): void;
  show(): void;
}

// eslint-disable-next-line import/no-default-export
export default TurboModuleRegistry.get<Spec>('RTNSplashScreen') as Spec | null;
