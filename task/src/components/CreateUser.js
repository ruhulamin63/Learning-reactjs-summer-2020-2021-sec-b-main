import { useState } from "react";

const CreateUser = ({ list, callback }) => {

    const [user, setUser] = useState({ id: "", name: "", dept: "" });

    const onInputChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
    };

    const fromSubmit = (e) => {
        e.preventDefault();
        list.push(user);
        callback(list);
        console.log(list);
    };


    return (
        <div className="form">
            <form onSubmit={fromSubmit}>
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
            </form>
        </div>
    );
}

export default CreateUser;