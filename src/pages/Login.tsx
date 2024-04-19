import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { FormEvent, InputHTMLAttributes, useRef, useState } from "react";
import { User } from "../Model/User";
import Toast from "../components/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function Login(){

    const reform = useRef(null);    
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState<string>()
    const navigate = useNavigate()
    const refMdp = useRef<HTMLInputElement>(null)

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
   function ShowPassword() {
         if (refMdp.current) {
            refMdp.current.type === "password" ? refMdp.current.type ="text" : refMdp.current.type = "password"
         }
   }


    
    return <>
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center bg-slate-100">
            <div className="w-1/2 h-screen flex justify-center items-center">
            <form action="" className="w-box-login min-h-80 backdrop-blur-lg flex flex-col gap-8  p-10 rounded-xl" ref={reform} onSubmit={(e) => submiForm(e)} encType="multipart/form-data">
                <h4 className="font-bold text-2xl text-center bg-transparent border-slate-400 px-2 py-1 rounded-lg z-10"><span className="text-transparent  bg-clip-text bg-gradient-to-br from-yellow-300 to-red-400">Quiz</span> <span className="text-transparent bg-clip-text  bg-gradient-to-br from-purple-400 to-blue-400">App</span></h4>
                        <p className="text-xs text-red-600 font-medium text-center">{message ? message : ""}</p>
                        <label htmlFor="email" className="relative">
                            <span className="font-bold font-mono">Email: <span className="text-lg text-red-500">*</span></span>
                            <input type="email" name="email" className="w-full p-2 rounded-lg border border-slate-200 focus:outline-none focus:border focus:border-cyan-200" required />
                        </label>
                        <label htmlFor="password" className="relative">
                            <FontAwesomeIcon icon={faEye} className="absolute top-10 right-4" onClick={ShowPassword}  />
                            <span className="font-bold font-mono">Mot de passe: <span className="text-lg text-red-500">*</span></span>
                            <input type="password" name="password" ref={refMdp} className="w-full p-2 rounded-lg border border-slate-200 focus:outline-none focus:border focus:border-cyan-200" required />
                        </label>
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
            <div className="w-1/2 h-screen bg-white relative hidden md:flex">
                <div className="w-full h-full bg-bg-login bg-center bg-contain bg-no-repeat bg-white rounded-l-2xl absolute -left-10"></div>
            </div>
               


                                       
            </div>
    </>
}