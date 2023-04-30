import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { UserType } from '@types';

export default function useGetUsers(props?: Record<string, any>): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(['useGetUsers'], () => axios.get('/users').then((res) => res.data as UserType[]), props);
}
