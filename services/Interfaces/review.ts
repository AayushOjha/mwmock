import { IComponentHeader } from './component'
import { EComponentName, EComponentType } from '../constants/components'

export interface IReview {
  position: number
  slug: string | null
}

export interface IReviewComponent extends IComponentHeader {
  component_type: EComponentType.review
  component_name: EComponentName.review
  blocks: IReview[]
}
