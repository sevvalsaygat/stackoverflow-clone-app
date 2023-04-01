import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';

export default function useGetAllQuestions(
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetAllQuestions'],
    () => axios.get('/api_all_questions').then((res) => res.data),
    props
  );
}
