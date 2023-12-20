import { CollectionConfig } from 'payload/types';
/** @type {import('payload/types').CollectionConfig} */

const Registrasi: CollectionConfig = {
  slug: 'registrasi',
  admin: {
    useAsTitle: 'username',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
        name: 'nama',
        type: 'text',
        required: true,
    },
    {
        name: 'email',
        type: 'text',
        required: true,
    },
    {
        name: 'asal_sekolah',
        type: 'text',
        required: true,
    },
    {
        name: 'status',
        type: 'select',
        options: [
            {
                value: 'waiting',
                label: 'waiting',
            },
            {
                value: 'rejected',
                label: 'rejected',
            },
            {
                value: 'accept',
                label: 'accept',
            },
        ],
        defaultValue: 'waiting',
        admin: {
            position: 'sidebar',
        },
    },
    {
        name: 'publishedDate',
        type: 'date',
        label: 'Tanggal_Pendaftaran',
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'd MMM yyy h:mm:ss a',
            },
        },
    },
],
};

export default Registrasi
