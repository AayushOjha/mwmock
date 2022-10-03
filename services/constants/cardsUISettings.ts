import { ICardOptionalSettings } from '../Interfaces/card'

const twoColumnCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: false,
    links: true,
    content: true,
    multipleCard: true,
    cardVisiable: true,
  },
}

const threeColumnCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: false,
    links: true,
    content: true,
    multipleCard: true,
    cardVisiable: true,
  },
}

const fourColumnCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: false,
    links: true,
    content: false,
    multipleCard: true,
    cardVisiable: true,
  },
}

const halfSplitCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: false,
    links: true,
    content: true,
    multipleCard: false,
    cardVisiable: true,
  },
}

const tabHighlightCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: false,
    links: true,
    content: true,
    multipleCard: true,
    cardVisiable: true,
  },
}

const imageSliderCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: true,
    sub_title: true,
    links: true,
    content: false,
    multipleCard: true,
    cardVisiable: true,
  },
}

const videoTypeCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: true,
    title: false,
    sub_title: false,
    links: true,
    content: true,
    multipleCard: false,
    cardVisiable: true,
  },
}

const onlyTextCardSetting: ICardOptionalSettings = {
  fieldVisiablity: {
    image: false,
    title: false,
    sub_title: false,
    links: false,
    content: false,
    multipleCard: false,
    cardVisiable: false,
  },
}

export {
  twoColumnCardSetting,
  threeColumnCardSetting,
  fourColumnCardSetting,
  halfSplitCardSetting,
  tabHighlightCardSetting,
  imageSliderCardSetting,
  videoTypeCardSetting,
  onlyTextCardSetting,
}
