import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';

export default function useDeleteQuestionById(props?: Record<string, any>): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation((id) => axios.delete(`/questions/${id}`), props);
}
