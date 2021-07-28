import {useState} from 'react'; 
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import {users} from './usersData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [user, setUsers] = useState(users);
  
  const deletecallback = (id) => {
    const data = user.filter((myuser) => myuser.id !== id);
    setUsers(data);
  };
  const updatecallback = (list) => {
    setUsers(list);
  };
  const createcallback = (list) => {
    setUsers(list);
  };

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route path='/userlist'>
          <div >
            <UserList list={user} callback={deletecallback} />
          </div>
        </Route>
        <Route path='/Create'>
            <CreateUser list={user} callback={createcallback} />
        </Route>
        <Route path='/edit/:id'  
            children={<EditUser list={user} callback={updatecallback}/>}>
        </Route>

        <Route path='*'>
          <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
