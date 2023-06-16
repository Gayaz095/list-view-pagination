import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UserList = () => {
  const { users, loading, error } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice?.(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="text center" style={{ color: "blue", fontSize: "20px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: "blue" }}>User List</h1>
      {users && users.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-center">No users found.</h1>
      )}
      {!error && (
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default UserList;
