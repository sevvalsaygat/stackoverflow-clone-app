import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';

export default function useAskQuestion(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios.post('/api_ask_question', data).then((res) => res.data),
    props
  );
}
