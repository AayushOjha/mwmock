import { CardTypes } from '../oldInterfaces/card'

interface IcardType {
  name: string
  value: CardTypes
}

export const cardType: IcardType[] = [
  // for ui purposes
  { name: '2 Column', value: CardTypes.twoColumn },
  { name: '3 Column', value: CardTypes.threeColumn },
  { name: '4 Column', value: CardTypes.fourColumn },
  { name: 'Half Split', value: CardTypes.halfSplit },
  { name: 'Image Slider', value: CardTypes.imageSlider },
  { name: 'Tab Highlighter', value: CardTypes.tabHighlight },
  { name: 'Video Card', value: CardTypes.videoType },
  { name: 'Only Text', value: CardTypes.onlyText },
]
