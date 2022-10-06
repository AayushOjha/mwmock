import { EHeadingTypes } from '../constants/headerTypes'
import { ICard, IFaq, ILink, IProduct, IReview } from './component'
import { ESectionType, ESectionName } from '../constants/sections'
export interface ISectionHeader {
  id: number | null
  position: number
  section_type: ESectionType
  section_name: ESectionName
  component_type: string | null
  state: 'active'
  heading: string | null
  heading_type: EHeadingTypes | null
  heading_description: string | null
  display_full_description: boolean
}

export interface ISection extends ISectionHeader {
  components: (ICard | IFaq | ILink | IProduct | IReview)[]
}

export interface IEditor {
  sections: ISection[]
}
