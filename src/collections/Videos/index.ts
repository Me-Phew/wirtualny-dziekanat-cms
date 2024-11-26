import { CollectionConfig } from 'payload';

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: {
    plural: 'Wideo',
    singular: 'Wideo',
  },
  admin: {
    group: 'Media',
  },
  upload: {
    staticDir: '../uploads/',
    mimeTypes: ['video/*'],
  },
  access: {
    read: () => true,
  },
  fields: [],
};
