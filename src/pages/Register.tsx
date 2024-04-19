import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { json } from "stream/consumers";
import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import Profil from "../components/AddProfile";

export default function Register(){
    const [previewavatar, setAvatar] = useState('')
    const [profil, setProfil] : any =  useState()
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
                const v : string = (await response.text()).valueOf()
                if (v == "champs vide") {
                    
                     // Affiche le message d'alerte lors de l'inscription
                }
                else if ((v == "OK")) {
                        console.log(response.json());
                }
                
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la requête:', error);
        }
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
      if (data.email && data.password !== "") {
        console.log("checkInput")
        setDisable(false);
      
    }
  }



    
    return <>
        { next ? ( <div className="w-full h-screen bg-slate-100 flex flex-row" >
            <h6 className="text-xl font-bold fixed top-4 left-10 coming-soon-regular bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent">QUIZ APP</h6>
             <div className="w-1/2 h-screen flex justify-center items-center">
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
             </div>
             <div className="w-1/2  h-screen flex items-center relative bg-white">
                <div className="w-full h-1/2 bg-white  bg-bg-3 bg-contain bg-no-repeat bg-center rounded-xl absolute -left-6"></div>
             </div>
             </div>
)

   : <Profil />
}        </>
}