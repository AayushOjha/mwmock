import { EHeadingTypes } from '../constants/headerTypes';
import { ICardComponent } from './card';
import { IFaqComponent } from './faq';
import { ILinksComponent } from './links';
import { IProductComponent } from './product';
import { IReviewComponent } from './review';

export interface ISectionHeader {
  id: number | null;
  position: number;
  state: 'active';
  heading: string | null;
  heading_type: EHeadingTypes | null;
  heading_description: string | null;
  display_full_description: boolean;
}

export interface ISection extends ISectionHeader {
  components: (
    | ICardComponent
    | IFaqComponent
    | ILinksComponent
    | IProductComponent
    | IReviewComponent
  )[];
}
