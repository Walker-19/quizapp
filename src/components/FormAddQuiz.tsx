import { ChangeEvent, FormEventHandler, MutableRefObject, RefObject } from "react"
import { dataDes } from "./DescriptionData"
import { IoSaveOutline } from "react-icons/io5";
import {motion} from 'framer-motion'


type Quiz = {
    value: string,
    submit: FormEventHandler<HTMLFormElement>
    valueChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    box: RefObject<HTMLDivElement>
}

export default function FormAddQuiz(q: Quiz){
    return <>
    
        <motion.div 
            initial={{translateY: -400, opacity:0, translateX: '-50%'}}
            animate={{translateY: 1, opacity:1, translateX: '-50%'}}
            exit={{translateY: 400, opacity:0}}
            transition={{
                duration: 0.2,
                ease: 'linear'
            }}
        className="w-96 border-2 border-gray-200 px-5 pt-11 pb-5 flex  absolute left-1/2  z-10 flex-col rounded-xl bg-white " ref={q.box}>

                   
                   
                    <form action="" className="w-full flex flex-col" onSubmit={(e) => q.submit(e)}>
                        {/* <input type="text" className="w-full border focus:ring-slate-200 focus:outline-none focus:ring-4 border-slate-300 p-2  rounded-md" placeholder="Entrer votre question" /> */}
                        <textarea rows={2} cols={5} value={q.value} placeholder="Entrer la question " name="quiz" className="w-full border focus:ring-slate-200 focus:outline-none focus:ring-4 border-slate-300 p-2  rounded-md" onChange={(e) => q.valueChange(e)}/>
                        <div className="w-full flex justify-center">
                        <button className="bg-black text-white p-2 rounded-md absolute top-0 right-0 ">
                        <IoSaveOutline />
                        </button>
                        </div>
                    </form>
                   </motion.div>
    </>
}