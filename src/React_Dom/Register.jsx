import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [users, setUser] = useState({
        name: '',
        EmailId: '',
        Password: ''
    });

    const navigate = useNavigate();
    const handleSubmitForm = (e) => {e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(users));
        navigate('/');
    };

    return (
        <div>
            <div>Register</div>
            <div>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <label>Name
                            <input type="text" value={users.name} onChange={(e) => setUser({ ...users, name: e.target.value })} />
                        </label>
                        <label>Email
                            <input type="text" value={users.EmailId} onChange={(e) => setUser({ ...users, EmailId: e.target.value })} />
                        </label>
                        <label>Password
                            <input type="password" value={users.Password} onChange={(e) => setUser({ ...users, Password: e.target.value })} />
                        </label>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};