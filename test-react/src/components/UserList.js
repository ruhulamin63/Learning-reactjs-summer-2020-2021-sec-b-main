import User from './User';
const UserList=({list,callback})=>{
    /* const users =[
        {id:1,name:'xyz',dept:'SE'},
        {id:2,name:'abc',dept:'CSE'},
        {id:3,name:'pqr',dept:'CIS'},
        {id:4,name:'mno',dept:'CS'},
    ]  */
    console.log(list);
    return(
        <div>
            {
                list.map((user)=>{
                   return <User {...user} deletecallback={callback}/>
                })
            }
            
        </div>
    )
}
export default UserList;