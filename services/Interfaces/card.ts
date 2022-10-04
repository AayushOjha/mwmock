import { IComponentHeader } from './component'
import { IAction, IImage } from './commonInterfaces'
import { EComponentName, EComponentType } from '../constants/components'

export interface ICard {
  id: number | null
  position: number
  title: string | null
  sub_title: string | null
  content: string | null
  links: IAction
  images: IImage[]
}

export interface ICardComponent extends IComponentHeader {
  component_type: EComponentType.card
  component_name: EComponentName.card
  blocks: ICard[]
}
