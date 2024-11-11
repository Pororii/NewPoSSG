import { AxiosResponse } from 'axios'

import { SuccessResponse } from '../../interfaces/Interfaces'
import { possgAxios } from '../axiosInstance'

export const postEditInfo = async (
  token: string,
  nickname: string,
  university: string,
  major: string,
  secondMajor: string,
  period: number,
  semesterOff: boolean,
  job: string,
  tags: string[],
): Promise<AxiosResponse<SuccessResponse> | null> => {
  const response = await possgAxios.post(
    'members/edit',
    {
      nickname,
      university,
      major,
      secondMajor,
      period,
      semesterOff,
      job,
      tags,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return response
}
