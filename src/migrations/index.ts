import * as migration_20250118_205615 from './20250118_205615';
import * as migration_seed from './seed';

export const migrations = [
  {
    up: migration_20250118_205615.up,
    down: migration_20250118_205615.down,
    name: '20250118_205615',
  },
  {
    up: migration_seed.up,
    name: 'seed',
  },
];
