interface IImage {
  name: string;
  path: string;
  alt: string;
}

interface IAction {
  action_name: string | null;
  action_link: string | null;
}
export interface ICard {
  id: number | null;
  position: number;
  title: string | null;
  sub_title: string | null;
  content: string | null;
  action: IAction;
  images: IImage[];
}

export interface IFaq {
  id: number | null;
  position: number;
  question: string | null;
  answer: string | null;
}

interface ISingleLink extends IAction {
  position: number;
}

export interface ILink {
  id: number | null;
  category_name: string | null;
  position: number;
  links: ISingleLink[];
}

export interface IReview {
  position: number;
  slug: string | null;
}

export interface IProduct {
  position: number;
  slug: string | null;
}
