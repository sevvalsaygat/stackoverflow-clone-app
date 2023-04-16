import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { QuestionType } from '@types';

export default function useGetQuestionById(
  id: string,
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetToDoById'],
    () => axios.get(`/questions/${id}`).then((res) => res.data as QuestionType),
    props
  );
}