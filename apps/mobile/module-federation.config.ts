import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'mobile',
  exposes: {
    './Routes': 'apps/mobile/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
