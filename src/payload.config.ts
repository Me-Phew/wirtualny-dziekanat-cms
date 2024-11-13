import path from 'path';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import { collections } from './collections';

export default buildConfig({
  admin: {
    user: collections.find((collection) => collection.slug === 'users')?.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: collections,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  telemetry: false,
  custom: {
    enableLogs: process.env.NODE_ENV === 'development',
  },
});
