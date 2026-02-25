import { type SchemaTypeDefinition } from 'sanity'

import { profileType } from './profileType'
import { experienceType } from './experienceType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileType, experienceType, projectType],
}
