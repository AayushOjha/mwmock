import { IComponentHeader } from './component'
import { EComponentName, EComponentType } from '../constants/components'

export interface IProduct {
  position: number
  slug: string | null
}

export interface IProductComponent extends IComponentHeader {
  component_type: EComponentType.product
  component_name: EComponentName.product
  blocks: IProduct[]
}
