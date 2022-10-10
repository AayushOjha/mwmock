import _ from 'lodash';

import { IEditor } from '../services/Interfaces/editor';
import { ESectionType, ESectionName } from '../services/constants/sections';
import { ICard, IFaq } from '../services/Interfaces/component';

const cardExample: ICard = {
  id: null,
  position: 0,
  title: 'Example',
  sub_title: 'Example sub_title',
  content: null,
  images: [],
  action: { action_name: null, action_link: null },
};

const cardExample2: ICard = { ...cardExample, position: 1, title: 'Example 2' };

const qnaExample: IFaq = {
  id: null,
  position: 0,
  question: 'Where is Answer?',
  answer: 'To which question.',
};

const sections: IEditor = {
  sections: [
    {
      id: 1,
      state: 'active',
      position: 0,
      section_type: ESectionType.card,
      section_name: ESectionName.card,
      component_type: '2',
      heading: 'some heading',
      heading_description: '<h1>This is</h1><h2>markup text</h2>',
      heading_type: null,
      display_full_description: false,
      components: [cardExample, cardExample2],
    },
    {
      id: 1,
      state: 'active',
      position: 1,
      section_type: ESectionType.faq,
      section_name: ESectionName.faq,
      component_type: null,
      heading: 'some heading',
      heading_description: 'This is markup text',
      heading_type: null,
      display_full_description: false,
      components: [qnaExample],
    },
  ],
};

const sections_with_empty_section: IEditor = _.cloneDeep(sections);
sections_with_empty_section.sections.push({
  id: 12,
  position: 2,
  section_type: ESectionType.card,
  section_name: ESectionName.card,
  state: 'active',
  component_type: null,
  heading: 'some heading',
  heading_description: '<h1>This is</h1><h2>markup text</h2>',
  heading_type: null,
  display_full_description: false,
  components: [],
});

export { sections, sections_with_empty_section };
