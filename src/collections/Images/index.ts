import { CollectionConfig } from 'payload/types';

export const Images: CollectionConfig = {
  slug: 'images',
  labels: {
    plural: 'Zdjęcia',
    singular: 'Zdjęcie',
  },
  admin: {
    group: 'Media',
  },
  upload: {
    staticURL: '/static',
    staticDir: '../uploads/',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Text Alternatywny',
    },
  ],
};
