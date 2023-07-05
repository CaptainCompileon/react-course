import Todo from "./components/Todo";
import {Route, Switch} from "react-router-dom";
import AllMetupsPage from "./pages/AllMetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
       <Layout>
        <Switch>
            <Route path='/' exact>
                <AllMetupsPage />
            </Route>
            <Route path='/new-meetup'>
                <NewMeetupPage />
            </Route>
            <Route path='/favorites'>
                <FavoritesPage />
            </Route>
        </Switch>
       </Layout>
    </div>
  );
}

export default App;
