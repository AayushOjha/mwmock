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
      components: [],
    },
  ],
};

export { sections };
