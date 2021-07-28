import {useState} from 'react'; 
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import {users} from './usersData';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  /* const users =[
    {id:1,name:'xyz',dept:'SE'},
    {id:2,name:'abc',dept:'CSE'},
    {id:3,name:'pqr',dept:'CIS'},
    {id:4,name:'mno',dept:'CS'}
];  */
const[myUser,setUsers]=useState(users);
const deleteCallback=(id)=>{
  //console.log('Deleted'+id );
  const data =myUser.filter((user)=>user.id !== id);
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
            <AddUser status='add'/>
        </Route>
        <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route>
        <Route path='*'>
          <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
