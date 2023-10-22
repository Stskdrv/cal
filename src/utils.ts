import moment from "moment";
import { ActivityType, CoachType, OfferType } from "./types/types";
import profilePic from './assets/profile.png';
import { HOUR_CELL_HEIGHT } from "./constants";

export const createNumberArray = (num: number) => {
  const numberArray: number[] = [];
  for (let i = 1; i <= num; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

export const calcPosition = (sessionDate: Date) => (
  (sessionDate.getHours() - 2) * HOUR_CELL_HEIGHT + HOUR_CELL_HEIGHT / 2 + sessionDate.getMinutes()
);

export const checkDates = (firstDate: Date, secondDate: Date) => {
  return firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate();
};

export const addDateBy = (date: Date, count: number) => {
  const day = new Date(date);
  return new Date(day.setDate(day.getDate() + count))
};

export const getMonday = () => {
  const today = new Date();

  const first = today.getDate() - today.getDay() + 1;
  return new Date(today.setDate(first));
};

export const extractSessionData = (offer: OfferType, activity: ActivityType, locationName: string, coach: CoachType) => {

  return {
    id: offer.id,
    date: moment(offer.date_start).format("YYYY-MM-DD"),
    time: new Date(offer.date_start).toISOString(),
    duration: offer.duration_minute / 60,
    activity: extractActivityData(activity),
    coach: extractCoachData(coach),
    location: locationName,
  };
};


export const extractActivityData = (activity: ActivityType) => {
  return {
    name: activity.name,
    color: activity.color,
    logo: activity.cover_main
  }
};

export const extractCoachData = (coach: CoachType) => {
  return {
    name: coach.name,
    photo: coach.photo || profilePic,
  }
};

export const convertTime = (dateString: string) => {
  const date = moment.utc(dateString);
  const yearNum = date.year();
  const monthNum = date.month() + 1; // Month is 0-indexed, so I add 1
  const dayNum = date.date();
  const hourNum = date.hour();

  return { yearNum, monthNum, dayNum, hourNum };
}