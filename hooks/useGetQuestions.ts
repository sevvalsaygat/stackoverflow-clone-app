import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { QuestionType } from '@types';

export default function useGetQuestions(props?: Record<string, any>, params = {}): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetQuestions'],
    () => axios.get('/questions', { params: params }).then((res) => res.data as QuestionType[]),
    props,
  );
}
