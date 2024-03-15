import { zeroLeft } from "./zeroLeftFunction";

export function generateDate(date: Date) {
 return `${zeroLeft(date.getDate())}/${zeroLeft(date.getMonth())}/${date.getFullYear()} ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
}