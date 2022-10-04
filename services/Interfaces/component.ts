import { EComponentType, EComponentName } from '../constants/components'

export interface IComponentHeader {
  id: number | null
  position: number
  component_type: EComponentType
  component_name: EComponentName
}
