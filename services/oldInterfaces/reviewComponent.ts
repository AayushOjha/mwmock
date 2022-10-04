import { IHeader, ESectionNames, ESectionTypes } from './header'
import { IImage } from './commonInterfaces'
export interface IReviewCard {
  position: number
  customerName: string
  profilePicture: IImage | null
  rating: number
  reviewText: string
  reviewImages: IImage[]
  productName: string
}

export interface IReviewComponent extends IHeader {
  section_type: ESectionTypes.review_section
  reviews: IReviewCard[]
}

export const emptyReviewComponent: IReviewComponent = {
  id: null,
  section_type: ESectionTypes.review_section,
  name: ESectionNames.review_section,
  state: 'active',
  position: 0,
  heading: null,
  heading_type: null,
  heading_description: null,
  display_full_description: false,
  reviews: [
    {
      position: 0,
      customerName: '',
      profilePicture: null,
      rating: 0,
      reviewText: '',
      reviewImages: [],
      productName: '',
    },
  ],
}
