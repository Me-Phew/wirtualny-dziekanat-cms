import adminsAndUser from '../../access/adminsAndUser';
import { CollectionConfig } from 'payload/types';

export const StudentProfilePictures: CollectionConfig = {
  slug: 'studentProfilePictures',
  labels: {
    plural: 'Zdjęcia profilowe studentów',
    singular: 'Zdjęcie profilowe studenta',
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
    read: adminsAndUser,
  },
  fields: [],
};
