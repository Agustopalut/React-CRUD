import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";

const UserList = () => {
    const [users,setUsers]= useState([]);
    const navigate =useNavigate();
    const getUsers = async () => {
        const response = await axios.get("http://localhost:8080/users");
        // axios sudah ototmati membuat data nya menjadi json;
        setUsers(response.data);
    }

    const deleteusers = async (name,id) => {
        try {
            alert(`berhasil mengahapus ${name}`);
            await axios.delete(`http://localhost:8080/users/${id}`);
            getUsers();//memanggil kembali function getUsers,ketika berhasil update data
        }catch (err) {
            console.log(`error ${err.message}`);
        }
    }
    useEffect(() => {
        getUsers();//dijalankan hanya ketika browser dioad
    },[]);

    return (
        <div className="columns mt-5 is-centered">
            <div clasworldsName="column is-half">
                <h1>CRUD REACT & MYSQL & NODEJS </h1>
                <Link to="/add" className="button is-success">Add New Contact</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>nama</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button className="button is-small is-info" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                                    <button className="button is-small is-danger" onClick={() => deleteusers(user.name,user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default UserList;