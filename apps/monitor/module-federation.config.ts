import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'monitor',
  exposes: {
    './Routes': 'apps/monitor/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
