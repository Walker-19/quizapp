import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faArrowRightArrowLeft, faHeadSideCough, faHeartCrack, faHeartPulse, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardPub(){
    const [isFavoris, setFavoris] = useState(false);
    const navigate = useNavigate();


    const navigateSingleQuiz = () => {
            navigate('/home/quiz')
    }

    return <>
            <div className="min-w-80 w-80 h-64 rounded-lg bg-white relative px-3 py-3 cursor-pointer hover:bg-white/30 hover:backdrop-blur-lg hover:border-2 transition-all hover:border-slate-200" >
                <div className="w-full flex flex-row justify-between relative">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjje7hrvcyBW9MUG4mZA0Y35U1VEiRbuJww&usqp=CAU" className="w-14 h-14 object-cover rounded-full  border-4" alt="" />
                        {/* <FontAwesomeIcon icon={faHeart} className={`cursor-pointer text-xl absolute ${isFavoris ? 'text-red-600' : 'text-black'} -top-5 -right-4 rounded-full p-4 backdrop-blur-xl`} onClick={()=> setFavoris(!isFavoris)}  /> */}
                     { isFavoris ? (  
                                         <FontAwesomeIcon icon={faHeartPulse} className="cursor-pointer text-xl absolute -top-5 -right-4 rounded-full p-4 backdrop-blur-xl text-red-600" />

                                ): ( 
                                    <FontAwesomeIcon icon={faHeart} className="cursor-pointer text-xl absolute text-black -top-5 -right-4 rounded-full p-4 backdrop-blur-xl" onClick={()=> setFavoris(!isFavoris)}  />
                                )}
                </div>
                <div className="w-full h-max relative py-2">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                        <p className="ojuju-500 tracking-wider line-clamp-4 text-sm">
                        Plongez dans le monde passionnant de la programmation web avec notre quiz interactif ! Que vous soyez un débutant curieux ou un développeur chevronné en quête de défis, ce quiz est conçu pour tester vos connaissances et vous aider à explorer les tenants et aboutissants du développement web.
                            </p>
                        <FontAwesomeIcon icon={faQuoteRight} className="absolute right-1" />
                </div>
                    <div className="w-full flex justify-center px-10">
                        <button className="w-40  absolute bottom-3 bg-black text-white font-semibold py-2 px-4 rounded-2xl group" onClick={() => navigateSingleQuiz()}>
                           <span className="font-bold text-start">Commencer</span>
                            <FontAwesomeIcon icon={faArrowRight} className="absolute p-2 rounded-full bg-slate-200 duration-300 top-1/2 -translate-y-1/2 right-0 group-hover:-rotate-45 group-hover:right-1 group-hover:top-5 transition-all  text-black" />
                            </button>
                    </div>             
            </div>
    </>
}