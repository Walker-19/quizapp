import { ChangeEvent, ChangeEventHandler, EventHandler, FormEvent, MouseEvent, MouseEventHandler, useRef, useState } from "react";
import QuizCard from "./QuizCard";
import { useSessionStorage } from "@uidotdev/usehooks";
import AddDescription from "./AddDescription";
import FormAddQuiz from "./FormAddQuiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";




export default function ModalQuiz (){
    const modal = useRef<HTMLDivElement>(null); // ref du ModalAddQuiz, Pour fermer toutes les boxes
    const [showQuiz, setShow] = useState(false) // Variable pour afficher ou cacher la box d'ajout de quiz


   const handleClose = (e: MouseEvent) => { // Fonction de fermeture des box d'ajout sur le contenur ModalQuiz
        if (modal.current) {
            const target = e.target as Node;
            if (!modal.current.contains(target)) {
               setShow(false)
            }
        }
   }

   const  [valueQ, setValueQ] = useState('')  // Value du champs de saisis du Quiz
   const  [valueDes, setValueDes] = useState('') // Value du champs de saisis du description
   const [questions, setQuestion] = useSessionStorage<string[]>('question', []) // Tableau des questions ajouté

   const handleChange = (e: string) => { // Fonction de modif de la variable du champs de saisie à chaque changements du champs
        setValueQ(e);
   }
  
   const AddQuiz = (e: FormEvent) => { // Enregistrement de la question dans le Tabelau
        e.preventDefault();
            if (valueQ != "") {
                const newQ = [...questions, valueQ];
                setQuestion(newQ);
                setValueQ("");
            }
            // Formatage des données et envois côté serveur
            const form = new FormData(); 
            form.append('question', valueQ);
   }
   const tabContent = ["Description", "Quiz"];
   const [select, setSelect] = useState(0);
   
   const [next, setNext] = useState<boolean>(false)
   const change = (i: number) => {
    if (i === 0) {
        setSelect(i)
    }
    else {
        next ? setSelect(i) : setSelect(0) 
    }

   }

    return <>
            <div className="w-modal rounded-xl min-h-modal absolute bg-white overflow-hidden" onClick={handleClose}>
                   <div className="w-full flex justify-center items-center relative p-5 gap-8">
                   </div>
                   <div className="w-full min-h-96 flex flex-col justify-center items-center overscroll-y-auto">
                        <div className="w-full flex flex-row justify-around">
                            <div className="w-5 h-5 flex justify-center items-center font-bold text-2xl p-5 bg-blue-700 text-white rounded-full">
                                <span>1</span>
                            </div>
                            <div className="w-5 h-5 flex justify-center items-center font-bold text-2xl p-5  bg-white text-black border-2 border-dashed border-blue-700 rounded-full">
                                <span>2</span>
                            </div>
                        </div>
                   { select === 0 ? (<AddDescription modal={modal} id={0} next={() => setSelect(1)} />) :(
                   <div className="w-full ">
                   { showQuiz && (<FormAddQuiz submit={AddQuiz} value={valueQ} valueChange={(e) => handleChange(e.target.value)} box={modal} />)}
                   <div className="w-full flex flex-col items-center md:flex-row md:justify-start absolute top-0 mt-20 md:flex-wrap gap-5 p-5">
                            <div className="w-full flex justify-end">
                                    <button className="w-max px-2 pl-7 py-1 border-2 relative shadow-lg shadow-gray-300 border-slate-200 rounded-full bg-white/60 before:w-8 before:top-0 before:border before:border-slate-300 before:h-8 before:absolute before:rounded-full before:bg-white before:-left-1" onClick={() => setShow(!showQuiz)}>
                                         <FontAwesomeIcon icon={faAdd} className="p-2 border outline outline-4 outline-white border-slate-200 bg-white/60 rounded-full absolute -left-4  top-0" /> Ajouter un Quiz</button>
                            </div>
                        {questions.map((item, index) => (
                            <QuizCard key={index} question={item} />
                        ))}
                    </div>
                   </div>
                   
                   ) }
                   </div>
                   
              
            </div>
    </>
}