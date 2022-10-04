import { IEditor } from './Editor'
import { CardTypes } from './card'
import { ESectionNames, ESectionTypes } from './header'

const AvailableComponents: IEditor = {
  //TODO: Instead of using IEditor interface, use [IBasicCard, ITabHeightlighter, ....] speciffically.
  sections: [
    {
      id: null,
      section_type: ESectionTypes.question_and_answers,
      name: ESectionNames.question_and_answers,
      state: 'active',
      position: 0,
      heading: null,
      heading_type: null,
      heading_description: null,
      display_full_description: false,
      components: [{ id: null, position: 0, question: null, answer: null }],
    },
    {
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
    },
    {
      id: null,
      section_type: ESectionTypes.product_section,
      name: ESectionNames.product_section,
      state: 'active',
      position: 0,
      heading: null,
      heading_type: null,
      heading_description: null,
      display_full_description: false,
      show_as_varient: false,
      products: [],
    },
    {
      id: null,
      section_type: ESectionTypes.quick_links,
      name: ESectionNames.quick_links,
      state: 'active',
      position: 0,
      heading: null,
      heading_type: null,
      heading_description: null,
      display_full_description: false,
      components: [
        {
          id: null,
          category_name: null,
          position: 0,
          link_id: null,
          links: [
            {
              position: 0,
              action_name: '',
              action_link: '',
            },
          ],
        },
      ],
    },
    {
      id: null,
      section_type: ESectionTypes.basic_card,
      name: ESectionNames.basic_card,
      state: 'active',
      position: 0,
      heading: null,
      heading_type: null,
      heading_description: null,
      display_full_description: false,
      cardType: CardTypes.twoColumn,
      cards: [
        {
          id: null,
          position: 0,
          title: '',
          sub_title: '',
          content: '',
          images: [],
          links: { action_name: '', action_link: '' },
        },
      ],
    },
  ],
}

export default AvailableComponents
