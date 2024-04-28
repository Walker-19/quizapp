import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardPub from "../components/cardPub";
import Nav from "../components/nav";
import { faAd, faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import ModalQuiz from "../components/ModalQuiz";
import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import { useLocation } from "react-router-dom";

export default function Home(){

    const location = useLocation();
    const user = location.state;
    console.log(user);
    const [showModal, setModal] = useState(false);

    const Quiz = [
        {
            index : 1,
            desription: "Plongez dans le monde passionnant de la programmation web avec notre quiz interactif ! Que vous soyez un débutant curieux ou un développeur chevronné en quête de défis, ce quiz est conçu pour tester vos connaissances et vous aider à explorer les tenants et aboutissants du développement web.",
            image: "https://img.freepik.com/photos-gratuite/femme-moderne-prenant-selfie_23-2147893976.jpg?t=st=1714315389~exp=1714318989~hmac=0959da3596b699fde2a3da89a3ca9d99d80580bcc62f993cd988a3d44a6c4cac&w=996"
        },
        {
            index : 2,
            desription: "Plongez dans le monde passionnant de la programmation web avec notre quiz interactif ! Que vous soyez un débutant curieux ou un développeur chevronné en quête de défis, ce quiz est conçu pour tester vos connaissances et vous aider à explorer les tenants et aboutissants du développement web.",
            image: "https://img.freepik.com/photos-gratuite/smiley-homme-detente-exterieur_23-2148739334.jpg?t=st=1714316350~exp=1714319950~hmac=d6905da7ad9ccb29d08ea0595f6691fa129b81241fb2eb6bb15ffdbd2f100580&w=740"
        },
        {
            index : 3,
            desription: "Plongez dans le monde passionnant de la programmation web avec notre quiz interactif ! Que vous soyez un débutant curieux ou un développeur chevronné en quête de défis, ce quiz est conçu pour tester vos connaissances et vous aider à explorer les tenants et aboutissants du développement web.",
            image: "https://img.freepik.com/photos-gratuite/portrait-jeune-femme-maquillage-naturel_23-2149084942.jpg?t=st=1714316372~exp=1714319972~hmac=062bc992e7e788fc2501afa4605486db4c4f3daf10553de475ac28d15753eb20&w=740"
        }
    ]

    return(<>
        <div className="w-full h-screen bg-slate-100 relative overflow-hidden">
               <AnimatePresence >

                { showModal && (
                    
                    
                    <motion.div
                    initial= {{scale: 0.9}}
                    animate={{scale: 1}}
                    exit={{scale: 0.9}}
                    transition={{
                        duration: 0.3
                    }}
                    className="w-full px-20 z-40 absolute flex justify-center items-center h-screen bg-transparent ">
                        <FontAwesomeIcon icon={faClose}  className="absolute z-10 top-5  right-14 text-red-500 cursor-pointer text-2xl font-bold"  onClick={() => setModal(!showModal)} />
                        <ModalQuiz />
                    </motion.div>
                       
                       )}
                </AnimatePresence>
            <div className="w-14 h-14 rounded-full bg-black absolute bottom-10 right-28 flex justify-center items-center z-20 cursor-pointer" onClick={() => setModal(!showModal)}>
                <FontAwesomeIcon icon={faAdd} className="text-white text-xl" />
            </div>
          <Nav />

            <div className="w-full h-full bg-gradient-to-br p-10 from-slate-500 to-cyan-600 from-25% to-75% overflow-y-auto overflow-x-hidden">
                <div className="w-full h-72 p-4 relative bg-white/75 rounded-lg backdrop-blur-2xl mt-20">
                    <p className="absolute -top-6 left-0 backdrop-blur-xl bg-white/30 p-3 rounded-t-lg  border-2 border-transparent font-semibold">🔥Les plus populaires</p>
                    <div className="w-full h-full flex flex-row flex-nowrap overflow-x-auto gap-10">
                        {
                            Quiz.map(quiz => (
                                <motion.div
                                initial={{x: -200, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: quiz.index * 0.4}}
                                className="w-max h-max "
                                >
                                    <CardPub  desription={quiz.desription} image={quiz.image} />
                                </motion.div>
                            ))
                        }
                       
                       
                    </div>
                </div>
                <div className="w-full  min-h-56 mt-14  rounded-2xl flex flex-row flex-wrap gap-10">
                    
                </div>
            </div>
        </div>
    </>)
}