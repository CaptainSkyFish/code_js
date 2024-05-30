import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationsAtom,
} from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationsAtom);

  // const totalNotificationsCount = useMemo(() => {
  //   return networkCount + jobsCount + messagingCount + notificationCount;
  // }, [networkCount, jobsCount, messagingCount, notificationCount]);

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>
        Messaging ({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
      <button>
        Notification ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>

      <button>Me ({totalNotificationsCount})</button>
    </div>
  );
}

export default App;
