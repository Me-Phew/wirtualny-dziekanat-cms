import { CollectionConfig } from 'payload/types';

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
    staticURL: '/static',
    staticDir: '../uploads/',
    mimeTypes: ['video/*'],
  },
  access: {
    read: () => true,
  },
  fields: [],
};
