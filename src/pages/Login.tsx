import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { FormEvent, useRef, useState } from "react";
import { User } from "../Model/User";

export default function Login(){

    const reform = useRef(null);    
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState<string>()
    const navigate = useNavigate()

    const submiForm = async (e: FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();
        setLoader(true);
        const formdata = new FormData(e.currentTarget);
        // console.log(formdata)

        await fetch('http://localhost:3001/login', {
            method: 'post',
            body: formdata,
           
        }).then(res => res.json()).then(
            data => {
                setTimeout(() => {
                    setLoader(false)
                }, 500);
                if (data.message) {
                    setMessage(data.message)
                } 
                else {
                        const user: User | null = new User(data);

                        if (user) {
                            navigate('/home', {state: user});
                        }
                    }
                   
                

        }).catch(err => {
            console.log(err)
        })
    }

    
    return <>
            <div className="w-full h-full flex flex-col justify-center items-center bg-white">
                <h4 className="font-bold text-2xl bg-transparent border-slate-400 px-2 py-1 rounded-lg z-10"><span className="text-transparent  bg-clip-text bg-gradient-to-br from-yellow-300 to-red-400">Quiz</span> <span className="text-transparent bg-clip-text  bg-gradient-to-br from-purple-400 to-blue-400">App</span></h4>
                <form action="" className="w-box-login min-h-80 backdrop-blur-lg flex flex-col gap-8 bg-white p-10 rounded-xl shadow-2xl shadow-gray-300" ref={reform} onSubmit={(e) => submiForm(e)} encType="multipart/form-data">
                        <p className="text-xs text-red-600 font-medium text-center">{message ? message : ""}</p>
                        <Input name="email" type="text" change={null} label="Email" value="" />
                    <Input name="password" type="password" change={null} label="Mot de passe" value="" />
                        <div className="w-full flex justify-center items-center">
                            <button className="w-max py-1 px-2 rounded-xl hover:bg-black/90 hover:animate-pulse font-mono bg-black text-white"> 
                                {loader ? (
                                    <svg fill="#0134fe" className="w-10 h-10 rounded-fulll  animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#0134fe"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></g></svg>
                                ): (<span>Connexion</span>) }
                            </button>
                        </div>
                        <Link to={'/register'}>
                        <p className="text-blue-500 text-center text-sm font-normal">crée un nouveau compte </p>
                        </Link>
                </form>

            </div>
    </>
}