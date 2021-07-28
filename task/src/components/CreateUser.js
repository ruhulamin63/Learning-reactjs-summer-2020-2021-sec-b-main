const CreateUser = ({createCallback})=>{
    return(
        <div>
           <table>
                <tr >
                    <td><label>ID: </label></td>
                    <td><input type="number" name="id" id="id"/></td>
                </tr>
                <tr >
                    <td><label>Name: </label></td>
                    <td><input type="text" name="name" id="name"/></td>
                </tr>
               <tr>
                    <td><label>Dept: </label></td>
                    <td><input type="text" dept="dept" id="dept"/></td>
                </tr>
            </table>
            <button onClick={()=>createCallback()}>Add</button>
        </div> 
    );
}

export default CreateUser;