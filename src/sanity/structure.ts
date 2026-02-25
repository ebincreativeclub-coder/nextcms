import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('profile').title('Profile'),
      S.divider(),
      S.documentTypeListItem('experience').title('Experiences'),
      S.documentTypeListItem('project').title('Projects'),
    ])
