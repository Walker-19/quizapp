import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Register(){
    const [previewavatar, setAvatar] = useState('')
    const [profil, setProfil] : any =  useState()
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('') // Affiche le message d'alerte lors de l'inscription
    const navigate = useNavigate();

    const handleFileInputChange = (e: any) => {
        const file = e.target.files[0];
        previewFile(file);
        if(file){
            setProfil(file)
        }
    };

    const previewFile = (file: any) => {
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                setAvatar(reader.result);
            }
            console.log(reader.result)
        };
    };
    
    const senData = async (e: FormEvent) => {
        e.preventDefault();
        const {email, firstname, lastname, password} = data;
        const formData = new FormData();
        formData.append('password', password);
        formData.append('lastname', lastname);
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('avatar', profil);
        // console.log(formData, profil)
        // Ajouter l'avatar si disponible
        
        
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                body: formData // Utiliser formData pour envoyer les données
                
            })

            if (!response) {
                    console.log("la requête a échoué");
            }
            else {
                    const text = (await response.text()).valueOf()
                    if (text== "OK") {
                        navigate('/home')
                    }
                    setError(text);
                
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la requête:', error);
        }
    };
    
    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
    
        // console.log(data)
    }
  

    return <>
            <form action="" className="w-full h-screen flex justify-center items-center flex-col relative " encType="multipart/form-data" onSubmit={(e) => senData(e)}>
            <h4 className="font-bold text-2xl bg-transparent border-slate-400 px-2 py-1 rounded-lg z-10 absolute top-0 animate-pulse "><span className="text-transparent  bg-clip-text bg-gradient-to-br from-yellow-300 to-red-400">Quiz</span> <span className="text-transparent bg-clip-text  bg-gradient-to-br from-purple-400 to-blue-400">App</span></h4>
                <div className="w-32 h-32 absolute top-10 border border-slate-300 rounded-full">
                    <input type="file" className="w-10 h-12 p-5 object-cover absolute cursor-pointer bottom-0 right-3 z-10 border-slate-400 bg-transparent opacity-0" onChange={(e) => handleFileInputChange(e)} />
                    <FontAwesomeIcon icon={faFileImage} className="absolute z-0 -bottom-2 bg-white rounded-full p-2 right-2 text-3xl"  />
                <img src={previewavatar} alt="" className="w-32 h-32 border border-slate-400 shadow-2xl shadow-slate-300  rounded-full z-0"/>
                </div>
                <div className="w-box-login shadow-2xl shadow-gray-300 rounded-xl p-8 flex flex-col mt-3 gap-4">
               { error != '' ? ( <p className="text-red-600 text-sm font-normal text-center py-10">{error}</p>) : ''}
                        <div className="w-full flex flex-row gap-2">
                                <Input name="firstname" label="Firstname" type="text" value={data.firstname} change={(e) => handlechange(e)} />
                                <Input name="lastname" label="Lastaname" type="text" value={data.lastname}  change={(e) => handlechange(e)} />
                        </div>
                        <div className="w-full h-full flex flex-col gap-5">
                        <Input name="email" label="Email" type="text" value={data.email}  change={(e) => handlechange(e)} />
                        <Input name="password" label="Mot de passe" type="password" value={data.password} change={(e) => handlechange(e)}  />

                        <div className="w-full flex justify-center items-center">
                            <button className="w-max px-2 py-1 rounded-xl font-mono hover:bg-black/90 hover:animate-pulse   bg-black text-white">S'inscrire</button>
                        </div>
                    </div>        
                        <Link to={'/'}>
                        <p className="text-center text-blue-500 font-bold text-xs">Vous avez un compte ?</p>
                        </Link>
            </div>  
            </form>
        </>
}