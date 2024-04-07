import { faCheckCircle, faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalStorage, useMap, useSessionStorage } from "@uidotdev/usehooks";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useState, useRef, MutableRefObject } from "react";
import ReactDOM from "react-dom";
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
            <div className="min-w-80 w-96 min-h-48 bg-white border border-slate-300  rounded-xl hover:shadow-lg shadow-gray-200 hover:translate-x-2 hover:-translate-y-3 transition-all relative">
                <div className="w-full text-justify py-2 bg-green-500 text-white shadow-md shadow-gray-300 rounded-t-xl">
                    <p className="text-sm p-2 font-semibold flex flex-wrap">{quiz.question} </p>
                </div>
                <div className="w-full h-full p-4">
                    <form className="w-full h-full flex flex-col gap-5" onSubmit={(e) => saveResponse(e)}  ref={formRef} >
                       {inputlist.map((item, index) => (
                        <div className="w-full h-max relative  " key={index}>
                            <FontAwesomeIcon  icon={faCheckCircle} className={`absolute text-blue-600 hover:text-green-600 bg-white right-1 -top-2 p-1 cursor-pointer rounded-full text-xl ${select_correct === index ? 'text-green-600' : 'text-slate-600' }`} onClick={() => setSelect(index)} />
                            <FontAwesomeIcon  icon={faMinusCircle} className="absolute -right-7 top-2 p-1 cursor-pointer rounded-full text-xl text-red-500" onClick={() => Supp_response(index)} />
                            <input  className={`w-full p-2 rounded-lg border text-sm font-semibold cursor-pointer focus:outline-none ${select_correct === index ? 'border-green-400' : 'border-slate-400'}`} value={`${item}`} name="response"  readOnly={disableInput} onDoubleClick={() => setDisable(false)} onBlur={()=>setDisable(true)} onChange={(e) => Change_response(index, e)}  />
                        </div>
                       ))}
                        <li className="w-full border-2 list-none rounded-full px-10 border-dotted text-slate-600 text-sm cursor-pointer border-slate-300" onClick={AddLigne}>+ Ajouter une réponse</li>
                        <div className="w-full  bg-transparent backdrop-blur-xl flex flex-row justify-around absolute -bottom-5 left-0">
                            <button className="w-max h-max p-2 text-xs bg-gradient-to-tr from-red-500 to-yellow-400 text-white font-bold 4 border-white rounded-xl" type="reset">Supprimer</button>
                            <button className="w-max h-max p-2 text-xs bg-blue-500 text-white font-bold border-4 border-white rounded-xl disabled:bg-blue-300" type="submit" disabled={select_correct ? false : true}>Valider</button>
                        </div>
                    </form>
                  
                </div>
            </div>
        </>
    );
}


