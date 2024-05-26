import { faCheckCircle, faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalStorage, useMap, useSessionStorage } from "@uidotdev/usehooks";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useState, useRef, MutableRefObject } from "react";
import { BsSendCheck } from "react-icons/bs";
import { dataDes } from "./DescriptionData";


type Quiz =  {
    question: string
}

export default function QuizCard(quiz: Quiz) {
    
    const [inputlist, setInputlist] = useSessionStorage<string[]>(quiz.question, [])
    const [select_correct, setSelect] = useState<number | null>(null);

   useEffect(() => {
   
   }, [inputlist])
   
    


    const AddLigne = () => {
        const value = [...inputlist]
        value.push('')
        setInputlist(value)
      }
        const formRef = useRef(null)
      const saveResponse = async (e: FormEvent)  => {
          e.preventDefault();
          if (formRef.current) {
              const formdata = new FormData(formRef.current);
              formdata.append('question', quiz.question.trim())
              formdata.append('idDes', dataDes[0]);
              formdata.append('correct', `${select_correct}`)
            //   console.log(formdata)

             await   fetch('http://localhost:3001/addresponse', {
                    method: 'post',
                    body: formdata
                }).then(res => res.json()).then(res => {
                    const {message, error} = res;
                        console.log(res)
                            // message ? console.log(message) : console.log(error);
                })
            }

      } 


      const [disableInput, setDisable] = useState(true)
      const modal = useRef<HTMLDivElement>(null);

      const Supp_response = (id: number) => {
        const update_list = [...inputlist];
         update_list.splice(id, 1)
         setInputlist(update_list)
        };

    const Change_response = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        const update = [...inputlist];
        update[id] = e.target.value;
        
        setInputlist(update);
        
    }
    
    
      
      
    return (
        <>
            <div className="min-w-80 w-modal flex flex-col gap-5 md:flex-row min-h-60 rounded-xl bg-white relative p-4">
                <div className="w-full flex justify-center items-center py-2 bg-bg-question bg-center bg-cover backdrop-blur-3xl text-white shadow-md  rounded-t-xl">
                    <p className="p-2 font-semibold font-mono text-md md:text-xl bg-white/35 backdrop-blur-xl rounded-lg pl-3 flex  flex-wrap">"{quiz.question}"</p>
                </div>
                <div className="w-full h-60 overflow-hidden overflow-y-auto">
                    <form className="w-full h-full flex flex-col gap-4 p-9" onSubmit={(e) => saveResponse(e)}  ref={formRef} >
                       {inputlist.map((item, index) => (
                        <div className="w-full h-max relative  " key={index}>
                            <FontAwesomeIcon  icon={faCheckCircle} className={`absolute text-blue-600 hover:text-green-600 bg-white right-1 -top-2 p-1 cursor-pointer rounded-full text-xl ${select_correct === index ? 'text-green-600' : 'text-slate-600' }`} onClick={() => setSelect(index)} />
                            <FontAwesomeIcon  icon={faMinusCircle} className="absolute -right-7 top-2 p-1 cursor-pointer rounded-full text-xl text-red-500" onClick={() => Supp_response(index)} />
                            <input  className={`w-full p-2 rounded-lg border text-sm font-semibold cursor-pointer focus:outline-none ${select_correct === index ? 'border-green-400' : 'border-slate-400'}`} value={`${item}`} name="response"  readOnly={disableInput} onDoubleClick={() => setDisable(false)} onBlur={()=>setDisable(true)} onChange={(e) => Change_response(index, e)}  />
                        </div>
                       ))}
                        <li className="w-full border-2 list-none rounded-full border-dotted p-2 text-slate-600 text-sm cursor-pointer border-slate-300" onClick={AddLigne}>+ Ajouter une réponse</li>
                        <div className="w-max  bg-gradient-to-l from-blue-500 to-cyan-300  flex p-2 rounded-full flex-row justify-around absolute -bottom-2 -right-2">
                            <button className="w-max h-max p-2  bg-white text-black  text-xl font-bold  rounded-full disabled:text-slate-500 disabled:bg-white/40" type="submit" disabled={select_correct ? false : true}><BsSendCheck /></button>
                        </div>
                    </form>
                  
                </div>
            </div>
        </>
    );
}


