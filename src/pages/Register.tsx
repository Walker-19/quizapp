import { Link, useNavigate } from "react-router-dom";

import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {motion} from 'framer-motion';
import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import Profil from "../components/AddProfile";
import { UserController } from "../Controller/UserController";

export default function Register(){

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        cf_email: '',
        password: '',
        cf_password: '',
        msgPassword: '',
    })
    const [msgEmail, setMsgEmail] = useState<string>("")
    const [msgmdp, setMsgmdp] = useState<string>("")
    const  [next, setNext] = useState(true);

    const refMdp = useRef<HTMLInputElement>(null)
    const refcfMdp = useRef<HTMLInputElement>(null)
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    // Données du formulaire
     const formData = new FormData();



  


    
    const senData = async (e: FormEvent) => {
        e.preventDefault();
       
        
        // console.log(formData, profil)
        // Ajouter l'avatar si disponible
        
        
        const userCtl = new UserController();
       const [user, message ] = await userCtl.register(formData);
    };
    
    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
            setData({
                ...data,
            
                [e.target.name] : e.target.name == "email" ? e.target.value.trim().toLowerCase() : e.target.value
            })
    
        // console.log(data)
    }
  
    const confirmationEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const cf = e.target.value.trim().toLowerCase();
        if (cf !== data.email) {
          setMsgEmail("Votre email n'est pas identique")
        }
        else {

            setMsgEmail(" ")
           
        }
        setData({
            ...data,
            cf_email: cf
        })

    }
    const confirmationPassword = (e: ChangeEvent<HTMLInputElement>) => {
         const cf = e.target.value.trim();
        if (cf !== data.password) {
          setMsgmdp("Votre mot de passe n'est pas identique")
        }
        else {

            setMsgmdp(" ")
           
        }

      setData({
        ...data,
        cf_password: cf
      });
    
      console.log(msgmdp);
    }
    //SHOW password
    function ShowPassword() {
        if (refMdp.current?.contains) {
           refMdp.current.type === "password" ? refMdp.current.type ="text" : refMdp.current.type = "password"
        }  
  }
    //SHOW cfpassword
    function ShowcfPassword() {
        if (refcfMdp.current) {
            refcfMdp.current.type === "password" ? refcfMdp.current.type ="text" : refcfMdp.current.type = "password"
         }
  }


  function checkInput(){
      if (data.password !== "") {
        if (data.email != "") {
            console.log("checkInput")
            setDisable(false);
        }
      
    }
  }



    
    return <>
        { next ? ( <div className="w-full h-screen bg-slate-100 flex flex-row" >
            <motion.h6
            initial={{opacity: 0}}
            animate={{opacity: 1, fontWeight: 900}}
            transition={{delay: 1}}
            className="text-xl font-bold fixed top-4 left-10 coming-soon-regular bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent">QUIZ APP</motion.h6>
             <motion.div
             initial = {{y: -300}}
             animate= {{y: 0}}
             transition={{duration: 0.2, delay: 0.2}}
             
             className="w-1/2 h-screen flex justify-center items-center">
                <form action="" className="w-full h-1/2 px-7" onSubmit={(e) => senData(e)} onMouseEnter={() => checkInput()}>
                    <div className="w-full flex flex-row justify-around ">
                        <label htmlFor="firstname" className="w-1/2 flex justify-center p-5">
                            <input type="text" name="firstname" value={data.firstname} placeholder="Entrer votre prénom" className="w-full text-sm  font-mono p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500 " onChange={(e) => handlechange(e)} />
                        </label>
                        <label htmlFor="lastname" className="w-1/2 flex justify-center  p-5">
                            <input type="text" name="lastname" value={data.lastname} placeholder="Entrer votre prénom" className="w-full text-sm  p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500 " onChange={(e) => handlechange(e)} />
                        </label>
                    </div>
                    <div className="w-full flex flex-row justify-around ">
                        <label htmlFor="email" className="w-1/2 flex justify-center p-5">
                            <input type="text" name="email" placeholder="Entrer votre email" value={data.email} className="w-full text-sm  font-mono p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500" onChange={(e) => handlechange(e)} />
                        </label>
                        <label htmlFor="cf_email" className="w-1/2 flex justify-center flex-col relative  p-5">
                            <input type="text" name="cf_email" placeholder="Confirmer votre email" value={data.cf_email}  className="w-full text-sm  p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500 " onChange={(e) => confirmationEmail (e)} />
                            <span className="text-xs text-red-600 absolute bottom-0">{msgEmail}</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-row justify-around ">
                    <label htmlFor="cf_password" className="w-1/2 relative flex justify-center flex-col  p-5">
                            <FontAwesomeIcon icon={faEye} className="absolute right-7" onClick={ShowPassword}  />
                            <input type="password" name="password" value={data.password} ref={refMdp} className="w-full max-h-14 text-sm  p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500" required onChange={(e) => handlechange(e)} />
                        </label>
                        <label htmlFor="cf_password" className="w-1/2 relative flex justify-center flex-col  p-5">
                        <FontAwesomeIcon icon={faEye} className="absolute right-7" onClick={ShowcfPassword}  />
                            <input type="password" name="cf_password" placeholder="Confirmer votre mot de passe" value={data.cf_password} className="w-full max-h-14 text-sm  p-2 border border-slate-200 rounded-lg focus:outline-none focus:border focus:border-purple-500" ref={refcfMdp}  onChange={(e) => confirmationPassword(e)}/>
                            <span className="text-xs text-red-600 absolute bottom-0">{msgmdp}</span>
                        </label>
                    </div>
                    <div className="w-full flex justify-center items-center mt-5">
                        <button className="w-max h-max p-2 flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full disabled:bg-gradient-to-r disabled:from-blue-300 disabled:to-purple-300 disabled:cursor-not-allowed" disabled={disable} onClick={() => setNext(false)}>
                            <span className="text-md font-bold text-white font-mono">Suivant
                            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                            </span>
                        </button>
                    </div>
                </form>
             </motion.div>
             <motion.div
             initial={{y: 400}}
             animate={{y: 0}}
             transition={{duration: 0.2, delay: 0.2}}
             className="w-1/2  h-screen flex items-center relative bg-white">
                <motion.div
                initial={{x: -200, opacity: 0}}
                animate={{x:0, opacity:1}}
                transition={{delay: 0.5}}
                className="w-full h-1/2 bg-white  bg-bg-3 bg-contain bg-no-repeat bg-center rounded-xl absolute -left-6"></motion.div>
             </motion.div>
             </div>
)

   : <Profil />
}        </>
}