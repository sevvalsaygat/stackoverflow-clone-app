type QuestionFormType = {
  title: string;
  details: string;
  expect: string;
  tag: string;
  rewiew: string;
};

type UpdateQuestionType = {
  title: string;
  details: string;
  expect: string;
}

type LoginFormType = {
  email: string;
  password: string;
};

type SignUpFormType = {
  name: string;
  email: string;
  password: string;
}

type PublicUserType = {
  id: number;
  name: string;
  email: string;
}

type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
}

type AnswerType = {
  id: number;
  content: string;
  user: PublicUserType;
}

type VoteType = {
  id: number;
  user: PublicUserType;
}

type QuestionType = {
  title: string;
  details: string;
  expect: string;
  id: number;
  tag: string;
  owner: PublicUserType;
  votes: VoteType[];
  answers: AnswerType[];
  viewsCount: number;
  createdAt: string;
};
  
export type { QuestionFormType, QuestionType, PublicUserType, UserType, AnswerType, VoteType, LoginFormType, SignUpFormType, UpdateQuestionType };