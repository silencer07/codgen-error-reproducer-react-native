import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  hide(): void;
  show(): void;
}

// eslint-disable-next-line import/no-default-export
export default TurboModuleRegistry.get<Spec>('RTNSplashScreen') as Spec | null;
