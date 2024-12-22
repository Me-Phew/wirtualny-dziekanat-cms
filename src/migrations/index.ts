import * as migration_20241222_212516 from './20241222_212516';
import * as migration_seed from './seed';

export const migrations = [
  {
    up: migration_20241222_212516.up,
    down: migration_20241222_212516.down,
    name: '20241222_212516',
  },
  {
    up: migration_seed.up,
    name: 'seed',
  },
];
