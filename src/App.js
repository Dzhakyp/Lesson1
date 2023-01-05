import "./App.css";
import Profile from "./components/Profile";
import user from "./user.json";
import Stat from "./components/stat";
import Friend from "./components/friend";
import Form from "./components/Form";
import Transactions from "./components/transactions";
import Feedback from "./components/feedback";
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stat />
      <Friend />
      <Form />
      <Transactions />
      <Feedback />
    </>
  );
}

export default App;
