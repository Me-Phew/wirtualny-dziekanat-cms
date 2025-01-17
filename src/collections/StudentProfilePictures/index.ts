import { CollectionConfig } from 'payload';
import adminsAndUser from '../../access/adminsAndUser';

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
    staticDir: '../uploads/',
    mimeTypes: ['image/*'],
  },
  access: {
    read: adminsAndUser,
    create: adminsAndUser,
    update: adminsAndUser,
    delete: adminsAndUser,
  },
  fields: [],
};
