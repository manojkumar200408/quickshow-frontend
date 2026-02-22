import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ padding: 40 }}>
      <h2>🎛️ Admin Dashboard</h2>

      <div style={{ marginTop: 20 }}>
        <Link to="/admin/add-movie">
          <button>Add Movie</button>
        </Link>
        <br /><br />
        <Link to="/admin/manage-movies">
          <button>Manage Movies</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
