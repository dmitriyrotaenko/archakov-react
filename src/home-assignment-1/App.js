import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const App = () => {
  const now = new Date();

  return (
    <>
      <Profile name="Карл Карлович" registeredAt={now} />
      <ProfileClass name="Карл Карлович" registeredAt={now} />
    </>
  );
};

export default App;
