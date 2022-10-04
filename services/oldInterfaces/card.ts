import { IImage, IAction } from './commonInterfaces'
import { IHeader } from './header'
import { EComponentName, EComponentType } from '../constants/components'

export enum CardTypes {
  twoColumn = 'TWO_COLUMN',
  threeColumn = 'THREE_COLUMN',
  fourColumn = 'FOUR_COLUMN',
  halfSplit = 'HALF_SPLIT',
  tabHighlight = 'TAB_HIGHLIGHT',
  imageSlider = 'IMAGE_SLIDER',
  videoType = 'VIDEO_TYPE',
  onlyText = 'ONLY_TEXT',
}
export interface ICard {
  id: number | null
  position: number
  title: string | null
  images: IImage[]
  links: IAction
  sub_title: string | null
  content: string | null
}

export interface ICardOptionalSettings {
  fieldVisiablity: {
    title: boolean
    links: boolean
    sub_title: boolean
    content: boolean
    image: boolean
    multipleCard: boolean
    cardVisiable: boolean
  }
}

export interface ICardSection {
  component_type: EComponentType.basic_card
  name: EComponentName.basic_card
  cardType: CardTypes
  cards: ICard[]
}

export const emptyCardSection: ICardSection = {
  id: null,
  component_type: EComponentType.basic_card,
  name: EComponentName.basic_card,
  state: 'active',
  position: 0,
  heading: null,
  heading_description: null,
  heading_type: null,
  display_full_description: false,
  cardType: CardTypes.twoColumn,
  cards: [
    {
      id: null,
      position: 0,
      title: '',
      images: [],
      links: { action_name: null, action_link: null },
      sub_title: '',
      content: '',
    },
  ],
}

export const emptyCard: ICard = {
  id: null,
  position: 0,
  title: null,
  images: [],
  links: { action_name: null, action_link: null },
  sub_title: null,
  content: null,
}
