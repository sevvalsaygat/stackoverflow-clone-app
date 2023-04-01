import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';

export default function useLogin(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios.post('/api_users_sign_in', data).then((res) => res.data),
    props
  );
}
