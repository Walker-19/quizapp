import { ChangeEvent, FormEventHandler, MutableRefObject, RefObject } from "react"
import { dataDes } from "./DescriptionData"


type Quiz = {
    value: string,
    submit: FormEventHandler<HTMLFormElement>
    valueChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    box: RefObject<HTMLDivElement>
}

export default function FormAddQuiz(q: Quiz){
    return <>
    
        <div className="w-96 border-2 border-gray-200 p-2 min-h-52 flex gap-4 absolute left-1/2 -translate-x-1/2 z-10 flex-col rounded-lg bg-white shadow-xl shadow-gray-200" ref={q.box}>
                    <div className="w-full border-b border-slate-300">Ajouter un Quiz</div>
                   
                   
                    <form action="" className="w-full flex gap-5 flex-col p-5" onSubmit={(e) => q.submit(e)}>
                        {/* <input type="text" className="w-full border focus:ring-slate-200 focus:outline-none focus:ring-4 border-slate-300 p-2  rounded-md" placeholder="Entrer votre question" /> */}
                        <textarea rows={5} cols={5} value={q.value} placeholder="Entrer la question " name="quiz" className="w-full border focus:ring-slate-200 focus:outline-none focus:ring-4 border-slate-300 p-2  rounded-md" onChange={(e) => q.valueChange(e)}/>
                        <div className="w-full flex justify-center">
                        <button className="bg-black text-white p-2 rounded-md">Enregistrer</button>
                        </div>
                    </form>
                   </div>
    </>
}