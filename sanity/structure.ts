import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('page').title('Page'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['page'].includes(item.getId()!),
      ),
    ])
