import { ICard } from '../services/Interfaces/component';
import { ISection } from '../services/Interfaces/editor';
import { ESectionType, ESectionName } from '../services/constants/sections';

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

const singleSections: ISection = {
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
};

export { singleSections };
