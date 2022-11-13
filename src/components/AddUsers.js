import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddUsers = () => {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [gender,setGender] = useState("male");
	const navigate = useNavigate()
	const addusers = async (e)=> {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8080/users",{
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
	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={addusers}>
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

export default AddUsers;