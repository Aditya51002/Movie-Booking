const Success = ({ user }) => {
  return (
    <div>
      <h2>Login Successful</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Roll Number:</strong> {user.roll}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Success;
