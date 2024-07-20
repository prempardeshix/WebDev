import { selector } from "recoil";
import { networkAtom } from "./store/network";
import { messageAtom } from "./store/message";
import { notificationAtom } from "./store/notification";
import { jobsAtom } from "./store/jobs";

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    const notification = get(notificationAtom);
    const jobs = get(jobsAtom);
    const message = get(messageAtom);
    return network + notification + jobs + message;
  },
});
