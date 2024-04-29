import { ChangeEvent, FormEvent, MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { User } from "../Model/User";
import { dataDes } from "./DescriptionData";
type descrptionProp = {
    modal: MutableRefObject<HTMLDivElement | null>,
   id: number,
    next: MouseEventHandler
}

export default function AddDescription(v: descrptionProp){
    const location = useLocation();
        const user: User | null = location.state;
    
        const [value, setValue] = useState({
            title: '',
            description : ''
        })

        const [disable, setDisable] = useState(true)
        const [next, setNext] = useState(true)
    

        const handleChangeValue = (e: ChangeEvent<HTMLInputElement| HTMLTextAreaElement> ) => {
                setValue(prev => ({
                    ...prev,
                    [e.target.name] : e.target.value
                }))

            }
            
            const fromref = useRef(null);
            const sendForm = async (e: FormEvent<HTMLFormElement>) =>  {
                e.preventDefault();
                value.title.trim()
                value.description.trim()
                if (fromref.current) {
                    const form = new FormData(fromref.current);
                    const id_user : string | null   = user && user.getId() ? user.getId().toString() : null
                    id_user && form.append('id_user', id_user);
                  await  fetch('http://localhost:3001/addDes', {
                        method: 'post',
                        body: form
                    }).then(data => data.json()).then(
                        data => {
                            const {titre, description, id} = data
                            dataDes[0] = id;
                        setNext(false)
                        }
                    )
                }
        }

        useEffect(() => {
          
            setDisable( value.title !== "" && value.description !== "" ?  false : true )
        }, [value.title, value.description])
        

        
    return <>
        <div className="w-modal min-h-52 flex gap-4 z-10 flex-col rounded-lg p-2 bg-white/45 backdrop-blur-lg" ref={v.modal}>
                    <div className="w-full border-slate-300 font-semibold"></div>

                    
                    <form action="" className="w-1/2 flex gap-5 flex-col p-5" onSubmit={(e) => sendForm(e)} ref={fromref}>
                        <label htmlFor="title" className="flex flex-col ">
                            
                            <input type="text" name="title" placeholder="Titre" className={`rounded-lg coming-soon-regular placeholder:pl-5 focus:outline-none border-2 p-2 border-slate-300 ${next ? '' : 'bg-slate-100'}`} value={value.title} onChange={(e) => handleChangeValue(e)} />
                        </label>
                        <label htmlFor="descrption">
                            <span className="font-semibold"></span>
                        <textarea rows={10} cols={10} value={value.description} name="description" placeholder="Ajouter une description" className={`w-full border coming-soon-regular placeholder:p-5  focus:ring-slate-200 focus:outline-none focus:ring-4 border-slate-300 p-2  rounded-md resize-none ${next ? '' : 'bg-slate-100'}`} onChange={(e) => handleChangeValue(e)}/>
                        </label>
                        <div className="w-full flex justify-center">
                        <button className="bg-blend-multiply bg-blue-500 font-semibold text-white p-2 rounded-md disabled:bg-blue-300" disabled={disable} >Enregistrer</button>
                        </div>
                    </form>
                    <div className="w-full flex justify-end">
                        <button className="bg-blend-multiply bg-slate-500 font-semibold text-white p-2 rounded-md disabled:bg-slate-300" disabled={next} onClick={v.next} >Suivant</button>
                    </div>
                   </div>
    </>
}