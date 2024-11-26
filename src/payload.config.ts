import { postgresAdapter } from '@payloadcms/db-postgres';
import {
  HTMLConverterFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';
import { initializeApp } from 'firebase-admin/app';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { collections } from '@/collections';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.PAYLOAD_SECRET) {
  throw new Error('Payload secret is required');
}

export default buildConfig({
  admin: {
    user: collections.find((collection) => collection.slug === 'users')!.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  routes: {
    admin: '/',
  },
  onInit(payload) {
    // Initialize Firebase
    initializeApp();

    payload.logger.info(
      `Payload Admin URL: ${process.env.SERVER_URL}/${payload.getAdminURL()}`,
    );
  },
  serverURL: process.env.SERVER_URL,
  localization: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
  },
  i18n: {
    supportedLanguages: { pl, en },
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  collections: collections,
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      ...rootFeatures,
      HTMLConverterFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  plugins: [],
  telemetry: true,
  custom: {
    enableLogs: process.env.NODE_ENV === 'development',
  },
});
