import React, { useEffect } from "react";

const Fetchap = () => {
  const [users, setUsers] = React.useState([]);
  const [filterUsers, setFilterUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
   

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("data", data);
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };6342

    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {clearTimeout(timer);
    };
  }, [searchTerm]);
  return (
    <div style={{ border: "20px" }}>
      <input
        type="text"
        placeholder="By name Search "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {users.filter((user) => {
        if (searchTerm === "") {
          return user;
        } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return user;
        }
      }).map((user) => {
        return (
          < div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Fetchap;
