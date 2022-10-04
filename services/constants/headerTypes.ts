import { typesOfHeading } from '../oldInterfaces/header'

const headingTypes: typesOfHeading[] = [
  // for ui purposes
  { name: 'H1', code: 'h1' },
  { name: 'H2', code: 'h2' },
  { name: 'H3', code: 'h3' },
  { name: 'H4', code: 'h4' },
  { name: 'H5', code: 'h5' },
  { name: 'H6', code: 'h6' },
]

export enum EHeadingTypes {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export default headingTypes
