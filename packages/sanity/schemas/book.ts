import {defineField, defineType} from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'Livro',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      initialValue: 'Ellen G. White'
    }),
    defineField({
      name: 'cover',
      title: 'Capa',
      type: 'image',
      options: {hotspot: true}
    }),
    defineField({
      name: 'pdfFile',
      title: 'Arquivo PDF',
      type: 'file',
      description: 'Será enviado pro AWS S3 via plugin'
    }),
    defineField({
      name: 'description',
      title: 'Sinopse',
      type: 'text'
    }),
    defineField({
      name: 'category',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Profecia', value: 'profecia'},
          {title: 'Vida Cristã', value: 'vida-crista'},
          {title: 'Saúde', value: 'saude'},
          {title: 'Família', value: 'familia'},
          {title: 'Meditação', value: 'meditacao'}
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime'
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'cover'
    }
  }
})
