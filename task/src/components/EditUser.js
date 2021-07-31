import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

    const EditUser = ({ list, callback }) => {

        const { id } = useParams();

        const [user, setUser] = useState({ id: "", name: "", dept: "" });

        const onInputChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const loadUser = () => {
        const result = list.map((user) => user);
        setUser(result[id - 1]);
    };
    
    const history = useHistory(); 

    const fromSubmit = (e) => {
        e.preventDefault();
        list = list.filter((myuser) => myuser.id !== user.id);
        list.push(user);
        callback(list);

        history.push("/UserList");

        console.log(list);
    };

    useEffect(() => {
        loadUser();
    }, []);   

  return (
    <form onSubmit={fromSubmit}>
        <div className="main">
            <div className="container">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={user.id} onChange={onInputChange}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={user.name} onChange={onInputChange}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" name="dept" value={user.dept} onChange={onInputChange}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>    
                </table>
            </div>
        </div>
    </form>
  );
};

export default EditUser;