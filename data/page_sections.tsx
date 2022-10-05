import { IEditor } from '../services/Interfaces/editor';
import {
  EComponentName,
  EComponentType,
} from '../services/constants/components';

const sections: IEditor = {
  sections: [
    {
      id: 1,
      state: 'active',
      position: 0,
      heading: 'some heading',
      heading_description: '<h1>This is</h1><h2>markup text</h2>',
      heading_type: null,
      display_full_description: false,
      components: [
        {
          id: null,
          position: 0,
          component_type: EComponentType.card,
          component_name: EComponentName.card,
          blocks: [
            {
              id: null,
              position: 0,
              title: 'Title goes here',
              sub_title: null,
              content: null,
              links: { action_name: null, action_link: null },
              images: [],
            },
            {
              id: null,
              position: 1,
              title: 'Title 2 goes here',
              sub_title: 'This card is with sub_title',
              content: null,
              links: { action_name: null, action_link: null },
              images: [],
            },
          ],
        },
        {
          id: null,
          position: 0,
          component_type: EComponentType.faq,
          component_name: EComponentName.faq,
          blocks: [
            {
              id: null,
              position: 0,
              question: 'Here is my question',
              answer: 'There you get the answer',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      state: 'active',
      position: 0,
      heading: 'some heading',
      heading_description: '<h1>This is</h1><h2>markup text</h2>',
      heading_type: null,
      display_full_description: false,
      components: [
        {
          id: null,
          position: 0,
          component_type: EComponentType.faq,
          component_name: EComponentName.faq,
          blocks: [
            {
              id: null,
              position: 0,
              question: 'Here is my question',
              answer: 'There you get the answer',
            },
          ],
        },
        {
          id: null,
          position: 0,
          component_type: EComponentType.faq,
          component_name: EComponentName.faq,
          blocks: [
            {
              id: null,
              position: 0,
              question: 'Here is my question',
              answer: 'There you get the answer',
            },
          ],
        },
      ],
    },
  ],
};

export { sections };
