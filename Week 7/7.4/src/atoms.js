import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 109,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 4,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 25,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 71,
});

export const totalNotificationsAtom = selector({
  key: "totalNotificationsAtom",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationsAtomCount = get(notificationsAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      messagingAtomCount +
      notificationsAtomCount
    );
  },
});
