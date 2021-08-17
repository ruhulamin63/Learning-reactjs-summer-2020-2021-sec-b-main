import { Link } from "react-router-dom";
import '../../black/css/black-dashboard.css';


const JobsTableRow = ({id=null,name,title,location,salary, callback})=>{
    return (
            <tbody>
              <tr>
                <td >{name}</td>
                <td >{title}</td>
                <td >{location}</td>
                <td >{salary}</td>
                <button class="btn btn-fill btn-primary" onClick={()=>callback(id)}>Delete</button>|         
                <Link to={`/job/edit/${id}`}>
                <button  class="btn btn-fill btn-primary">Edit</button>
               </Link>
              </tr>
            </tbody>
    );
}

export default JobsTableRow;