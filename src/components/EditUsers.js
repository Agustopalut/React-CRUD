import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
const EditUsers = () => {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [gender,setGender] = useState("male");
	const navigate = useNavigate();
    const {id} = useParams();//menangkap id dari parameter menggunakan react-router-dom
	const updateusers = async (e)=> {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:8080/users/${id}`,{
				name,
				email,
				gender
			});
			// axios tak perlu mengirim body,karena sudah dibuat kan
			navigate("/");//ketika berhasil,makak otomatis redirect ke halaman home;
		}catch (error) {
			console.log("error :",error.message)
		}
		
	}

    const getUsersById = async () => {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        const {name,email,gender} = response.data;

        setName(name)
        setEmail(email)
        setGender(gender)
    }

    useEffect(() => {
        getUsersById();
    },[])
	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateusers}>
					<div className="field">
						<label for="name">Name : </label>
						<div className="control">
							<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="masukkan nama anda.." />
						</div>
					</div>
					<div className="field">
						<label for="email">email : </label>
						<div className="control">
							<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="masukkan email anda.." />
						</div>
					</div>
					<div className="field">
						<label for="gender">Gender : </label>
						<div className="control">
							<div className="select is-fullwidth">
								<select value={gender} onChange={(e) => setGender(e.target.value)}>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<button type="submit" className="button is-success">Save</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditUsers;