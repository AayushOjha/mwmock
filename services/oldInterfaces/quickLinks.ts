import { IHeader, ESectionNames, ESectionTypes } from './header'
import { IAction } from './commonInterfaces'

export interface ILink extends IAction {
  position: number
}

export interface ILinkCard {
  id: number | null
  category_name: string | null
  position: number
  link_id: number | null
  links: ILink[]
}

export interface IQuickLinks extends IHeader {
  section_type: ESectionTypes.quick_links
  name: ESectionNames.quick_links
  components: ILinkCard[]
}

export const emptyQuickLinks: IQuickLinks = {
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
      position: 0,
      category_name: null,
      link_id: null,
      links: [
        {
          position: 0,
          action_name: null,
          action_link: null,
        },
      ],
    },
  ],
}
