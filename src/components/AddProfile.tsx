import { useState } from "react";

export default function Profil(){
    const [previewavatar, setAvatar] = useState('')
    const [profil, setProfil] : any =  useState()
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
    return <>
        <div className="w-full h-screen bg-slate-100 flex flex-col justify-center items-center">

                <div className="w-80  h-80 rounded-2xl border-2 flex justify-center items-end border-slate-500">
                    <img src={previewavatar} alt="" className="w-52 h-52 rounded-full bg-cover bg-center border border-slate-500 mb-5" />
                </div>

            <form  className="w-full flex justify-center items-center flex-row">
                    <button className="bg-slate-500 text-white px-3 py-2 rounded-lg ml-10 mt-8  text-sm font-semibold">Ignorer</button>
                    <input type="file" className="absolute ml-60 opacity-0 mt-10"  onChange={(e) => handleFileInputChange(e)}/>
                    <button className="bg-blue-500  text-white px-3 border-b-4 border-blue-200/40  py-2 rounded-lg ml-10 mt-8 text-sm font-semibold" >Ajouter une photo de profil</button>
            </form>
        </div>
    </>
}