import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Artigo',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'excerpt', title: 'Resumo', type: 'text'}),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}]
    }),
    defineField({name: 'coverImage', title: 'Imagem de capa', type: 'image'}),
    defineField({name: 'publishedAt', type: 'datetime'}),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: ['Sábado', 'Segunda Vinda', 'Estado dos Mortos', 'Santuário']}
    })
  ]
})
