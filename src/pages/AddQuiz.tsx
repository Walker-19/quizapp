import { useSessionStorage } from "@uidotdev/usehooks";
import Picture from "../components/Picture";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState, FormEvent, useRef } from "react";
import FormAddQuiz from "../components/FormAddQuiz";
import {AnimatePresence} from 'framer-motion'
import QuizCard from "../components/QuizCard";

export default function AddQuiz(){
    const modal = useRef<HTMLDivElement>(null); // ref du ModalAddQuiz, Pour fermer toutes les boxes
    const [showQuiz, setShow] = useState(false) // Variable pour afficher ou cacher la box d'ajout de quiz
    const [questions, setQuestion] = useSessionStorage<string[]>('question', []) // Tableau des QUIZ ajouté
    const  [valueQ, setValueQ] = useState('')  // Value du champs de saisis du Quiz

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { // Fonction de fermeture des box d'ajout sur le contenur ModalQuiz
        if (modal.current) {
            const target = e.target as Node;
            if (!modal.current.contains(target)) {
               setShow(false)
            }
        }
   }

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
    return (<>

            <div className="w-full h-screen py-4 px-2 bg-gradient-to-r from-blue-400 to-cyan-600 overflow-hidden" onClick={(e) => handleClose(e)} >
                    <div className="w-full min-h-40  bg-white rounded-xl">
                        <div className="w-full flex flex-row items-center p-3">
                            <Picture src="https://img.freepik.com/photos-gratuite/smiley-homme-detente-exterieur_23-2148739334.jpg?t=st=1714316350~exp=1714319950~hmac=d6905da7ad9ccb29d08ea0595f6691fa129b81241fb2eb6bb15ffdbd2f100580&w=740" />
                            <span className="ml-3 text-sm font-bold font-mono tracking-widest" >Willson</span>
                        </div>

                        <div className="w-full p-5 flex flex-col gap-4">
                            <form action="" className="flex flex-col gap-6">
                                <label htmlFor="title">
                                    <input type="text" className="w-full p-2 border border-slate-300 rounded-2xl placeholder:px-3 focus:outline-none focus:ring-2 focus:border-spacing-3 focus:ring-slate-200 font-mono" placeholder="Titre" />
                                </label>
                                <label htmlFor="Description">
                                    <textarea name="" id="" cols={20} rows={5} className="w-full p-2 border border-slate-300 rounded-2xl placeholder:px-3 focus:outline-none focus:ring-2 focus:border-spacing-3 focus:ring-slate-200 font-mono" placeholder="Description"></textarea>
                                </label>
                            </form>
                        </div>
                    </div>

                    <div className="w-full relative py-3 pr-4 flex justify-end">
                        <div className="w-max px-2 py-1 flex flex-row items-center bg-white rounded-lg cursor-pointer " onClick={() => setShow(!showQuiz)}>
                            <span className="text-sm font-mono font-bold mr-2">Ajouter un Quiz</span>
                    <MdOutlineAddCircle  className="text-black text-3xl " />
                        </div>
                    </div>
                    <div className="w-full bg-white/30 backdrop-blur-2xl p-5 rounded overflow-y-auto">
                        <AnimatePresence >

                        {showQuiz && (
                            <FormAddQuiz box={modal} valueChange={(e) => handleChange(e.target.value)} submit={AddQuiz}  value={valueQ} />
                        )}
                        </AnimatePresence>
                        
                        {
                            questions.map(quiz => (
                                <QuizCard question={quiz} />
                            ))
                        }
                        
                    </div>

            </div>
    </>)
}