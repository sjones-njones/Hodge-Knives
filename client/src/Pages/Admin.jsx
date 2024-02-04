import { Link } from 'react-router-dom';

const Admin = () => {
    return (
      <div className="m-4">
        <Link to="/Admin/AdminCurrentInventory"> 
<button type="button" className="w-50 fs-1 m-2 btn btn-warning btn-block">Current Inventory</button> 
        </Link>
<Link to="/Admin/AdminArchiveInventory"> 
<button type="button" className="w-50 fs-1 m-2 btn btn-warning btn-block">Archived Inventory</button> 
        </Link>
<Link to="/Admin/AddProducts"> 
<button type="button" className="w-50 m-2 fs-1 btn btn-warning btn-block">Add New Products</button> 
</Link>

     </div>
        );
};

export default Admin;


