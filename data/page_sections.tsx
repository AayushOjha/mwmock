import { IEditor } from '../services/Interfaces/Editor';
import { ESectionNames, ESectionTypes } from '../services/Interfaces/header';
import { CardTypes } from '../services/Interfaces/card';

const sections: IEditor = {
  sections: [
    {
      id: 1,
      section_type: ESectionTypes.basic_card,
      name: ESectionNames.basic_card,
      state: 'active',
      position: 0,
      heading: 'some heading',
      heading_description: '<h1>This is</h1><h2>markup text</h2>',
      heading_type: null,
      display_full_description: false,
      cardType: CardTypes.twoColumn,
      cards: [
        {
          id: 2,
          position: 0,
          title: 'card title',
          images: [],
          links: { action_name: null, action_link: null },
          sub_title: null,
          content: null,
        },
        {
          id: 3,
          position: 0,
          title: 'card 2 title',
          images: [],
          links: { action_name: null, action_link: null },
          sub_title: 'no need',
          content: 'some content',
        },
      ],
    },
  ],
};

export { sections };
