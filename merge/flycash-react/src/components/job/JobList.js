
import '../../black/css/black-dashboard.css';
import JobsTableRow from './JobsTableRow';
const JobsList = ({list, deleteCallback})=>{
   
    return (
      
        <>
        <div>
          
      
        </div>
        <div class="row">
  <div class="col-md-12">
    <div class="card ">
      <div class="card-header">
        <h3 class="card-title"> Job List</h3>
      </div>
      <div class="card-body">
   
               
                    <table class="table tablesorter ">
                        <thead class=" text-primary">
                            <tr>
                                <th>Company Name</th>
                                <th> Job Title</th>
                                <th >Job Location</th>
                                <th >Salary</th>
                                <th align="center">Action</th>
                            </tr>
                        </thead>
                        {
                            list.map((u)=>{
                            return  <JobsTableRow key={u.id} {...u} callback={deleteCallback}/>
                            })
                        }
                    </table>            
      </div>
    </div>
  </div>
  
</div>
</>
        
    );
}

export default JobsList;