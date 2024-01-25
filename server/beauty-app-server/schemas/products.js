import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        lists: [
          {title: 'Body lotion', value: 'bodylotion'},
          {title: 'Face wash', value: 'facewash'},
          {title: 'Perfumes', value: 'perfumes'},
          {title: 'Mouth Cleanser', value: 'mouthcleanser'},
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bgImage',
      title: 'BG image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    defineField({
      name: 'description',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),

    defineField({
      name: 'price',
      title: 'price',
      type: 'number',
      description: 'The price of the product is USD',
      validation: (Rule) => Rule.required().positive(),
      options: {
        format: 'currency',
      },
    }),
  ],
})
