import classes from "./App.module.scss";
import { NightSky } from "./components/background/NightSky";
import PeopleList from "./components/list/PeopleList";

function App() {
  return (
    <div className={classes.appContainer}>
      <NightSky />
      <header>
        <h1>Harry Potter Characters</h1>
      </header>
      <main>
        <PeopleList />
      </main>
    </div>
  );
}

export default App;
