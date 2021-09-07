//import "../../../black/css/black-dashboard.css";
import '../../../App.css';

const StatementsTableRow = ({phone,transaction_type,date,amount,balance})=>{
  
    return (

        <tbody>
          <tr>
          
            <th>{phone}</th>
            <th>{transaction_type}</th>
            <th className="text-center">{amount}</th>
            <th className="text-center hideb">{balance}</th>
            <th className="text-center">{date}</th>
          </tr>
          
          
          </tbody>
            // <tbody>
            //   <tr>
            //     <td >{name}</td>
            //     <td >{title}</td>
            //     <td >{location}</td>
            //     <td >{salary}</td>
            //     <button class="btn btn-fill btn-primary" onClick={()=>callback(id)}>Delete</button>|         
            //     <Link to={`/job/edit/${id}`}>
            //     <button  class="btn btn-fill btn-primary">Edit</button>
            //    </Link>
            //   </tr>
            // </tbody>
    );
}

export default StatementsTableRow;