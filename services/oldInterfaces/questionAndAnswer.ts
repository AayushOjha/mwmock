import { IHeader, ESectionTypes, ESectionNames } from './header'

export interface IQuestionAndAnswerUnit {
  id: number | null
  position: number
  question: string | null
  answer: string | null
}
export interface IQuestionAndAnswer extends IHeader {
  component_type: ESectionTypes.question_and_answers
  components: IQuestionAndAnswerUnit[]
}

export const emptyQuestionAndAnswer: IQuestionAndAnswer = {
  id: null,
  component_type: 'question_and_answers',
  name: ESectionNames.question_and_answers,
  state: 'active',
  position: 0,
  heading: null,
  heading_type: null,
  heading_description: null,
  display_full_description: false,
  components: [{ id: null, position: 0, question: null, answer: null }],
}
