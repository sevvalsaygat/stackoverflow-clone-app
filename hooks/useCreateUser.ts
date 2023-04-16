import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { QuestionFormType, QuestionType, SignUpFormType, UserType } from '@types';

export default function useCreateUser(
  props= {}
) {
  const axios = useAxios();

  return useMutation(
    (data: SignUpFormType) =>
      axios
        .post('/users', data)
        .then((res) => res.data as UserType),
    props
  );
}