import { AxiosResponse } from "axios";
import { WeeklyOffersResponse } from "../types/types";
import apiClient from "./axiosInstance"

export const getWeeklyOffersData = (minDate: string, maxDate: string): Promise<AxiosResponse<WeeklyOffersResponse>> => {
    return apiClient.get<WeeklyOffersResponse>(`offer/?company=${import.meta.env.VITE_COMPANY_ID}&min_date=${minDate}&max_date=${maxDate}`);
};

export const getActivityData = (id: number) => {
    return apiClient.get(`meta-activity/?id__in=${id}`);
};

export const getLocationData = (id: number) => {
    return apiClient.get(`establishment/?id=${id}`);
};

export const getCoachData = (id: number) => {
    return apiClient.get(`associated_coach/?id__in=${id}`);
};