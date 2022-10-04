import { IComponentHeader } from './component'
import { EComponentName, EComponentType } from '../constants/components'

export interface IFaq {
  id: number | null
  position: number
  question: string | null
  answer: string | null
}

export interface IFaqComponent extends IComponentHeader {
  component_type: EComponentType.faq
  component_name: EComponentName.faq
  blocks: IFaq[]
}
