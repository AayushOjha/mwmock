import { IComponentHeader } from './component'
import { IAction, IImage } from './commonInterfaces'
import { EComponentName, EComponentType } from '../constants/components'

export interface ILink extends IAction {
  position: number
}

export interface ILinks {
  id: number | null
  category_name: string | null
  position: number
  link_id: number | null
  links: ILink[]
}

export interface ILinksComponent extends IComponentHeader {
  component_type: EComponentType.links
  component_name: EComponentName.links
  blocks: ILinks[]
}
