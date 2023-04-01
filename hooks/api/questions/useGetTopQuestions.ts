import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';

export default function useGetTopQuestions(
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetTopQuestions'],
    () => axios.get('/api_top_questions').then((res) => res.data),
    props
  );
}
