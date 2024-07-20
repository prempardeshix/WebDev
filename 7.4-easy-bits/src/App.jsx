import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom } from "./store/network";
import { messageAtom } from "./store/message";
import { notificationAtom } from "./store/notification";
import { jobsAtom } from "./store/jobs";
import { totalSelector } from "./selectors";

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  );
}

function MainApp() {
  const [network, setNetwork] = useRecoilState(networkAtom);
  const [message, setMessage] = useRecoilState(messageAtom);
  const [notification, setNotification] = useRecoilState(notificationAtom);
  const [jobs, setJobs] = useRecoilState(jobsAtom);

  const total = useRecoilValue(totalSelector);
  return (
    <>
      <button>Home</button>
      <button>My Network({network >= 100 ? "99+" : network})</button>
      <button>Messaging({message >= 100 ? "99+" : message})</button>
      <button>
        Notifications({notification >= 100 ? "99+" : notification})
      </button>
      <button>Jobs({jobs >= 100 ? "99+" : jobs})</button>
      <button
      // onClick={() => {
      //   setMessage((i) => i + 1);
      // }}
      >
        Me ({total})
      </button>
    </>
  );
}
export default App;
