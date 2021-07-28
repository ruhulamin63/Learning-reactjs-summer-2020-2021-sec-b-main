import {useState} from 'react'; 
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import {users} from './usersData';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
const[myUser,setUsers]=useState(users);
const deleteCallback=(id)=>{
  const data =myUser.filter((user)=>user.id !== id);
  setUsers(data);
}
const addUser = (id,name,dept)=>{
  const data = myUser.concat({id, name, dept});
  setUsers(data);
}

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route path='/userlist'>
          <div >
            <UserList list={myUser} callback={deleteCallback}/>
          </div>
        </Route>
        <Route path='/Create'>
            <CreateUser createCallback={addUser}/>
        </Route>
        <Route path='/edit/:id' children={<EditUser/>}></Route>
        <Route path='*'>
          <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
