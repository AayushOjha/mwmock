export type typesOfHeading =
  | null
  | { name: 'H1'; code: 'h1' }
  | { name: 'H2'; code: 'h2' }
  | { name: 'H3'; code: 'h3' }
  | { name: 'H4'; code: 'h4' }
  | { name: 'H5'; code: 'h5' }
  | { name: 'H6'; code: 'h6' }

export interface IHeader {
  id: number | null
  state: 'active'
  position: number
  heading: string | null
  heading_type: typesOfHeading
  heading_description: string | null
  display_full_description: boolean
}

export interface IHeaderOptionalSettings {
  fieldVisiablity: {
    heading: boolean
    description: boolean
  }
}
