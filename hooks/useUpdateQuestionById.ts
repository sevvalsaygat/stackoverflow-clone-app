import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { UpdateQuestionType, QuestionType } from '@types';

export default function useUpdateQuestionById(
  id: string,
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios
        .patch(`/questions/${id}`, data as UpdateQuestionType)
        .then((res) => res.data as QuestionType),
    props
  );
}
