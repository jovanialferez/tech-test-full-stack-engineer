import { ApiResponse } from 'apisauce';
import { api } from './client';

export const fetchList = async (type: string): Promise<any[]> => {
  const status = type === 'invited' ? 'new' : 'accepted';
  const result: ApiResponse<any, any> = await api.get('/leads', { status });

  if (result.ok) {
    return result.data;
  } else {
    // @TODO: actual error from server
    return [];
  }
}

export const accept = async (id: number): Promise<boolean> => {
  const result: ApiResponse<any, any> = await api.post(`/leads/${id}/accept`);

  if (result.ok) {
    return true;
  } else {
    // @TODO: process actual error from server
    return false;
  }
}

export const decline = async (id: number): Promise<boolean> => {
  const result: ApiResponse<any, any> = await api.post(`/leads/${id}/decline`);

  if (result.ok) {
    return true;
  } else {
    // @TODO: process actual error from server
    return false;
  }
}