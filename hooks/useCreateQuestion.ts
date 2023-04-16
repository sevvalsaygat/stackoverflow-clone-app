import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { QuestionFormType, QuestionType } from '@types';

export default function useCreateQuestion(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios
        .post('/questions', data as QuestionFormType)
        .then((res) => res.data as QuestionType),
    props
  );
}