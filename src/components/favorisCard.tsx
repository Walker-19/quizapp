import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavorisCard (){

    return <>
            <div className="w-72 min-h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                <div className="w-full flex flex-row px-2 py-1 backdrop-blur-2xl bg-gray-200/30 shadow-xl shadow-gray-400">
                    <p className="text-gray-400 text-sm"> <span className="font-bold">Thomas</span> vient de publier un Quiz</p>
                </div>
                <div className="w-full h-full border-t-2 border-l-2 border-r-2 backdrop-blur-lg rounded-md mt-1 shadow-2xl shadow-gray-300 bg-white/30 p-2 border-slate-300 overflow-hidden">
                    <div className="w-full py-1 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjje7hrvcyBW9MUG4mZA0Y35U1VEiRbuJww&usqp=CAU" className="w-12 h-12 object-cover rounded-full" alt="" />
                    </div>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                        <p className="ojuju-500 tracking-wider line-clamp-3 text-sm">
                        Plongez dans le monde passionnant de la programmation web avec notre quiz interactif ! Que vous soyez un débutant curieux ou un développeur chevronné en quête de défis, ce quiz est conçu pour tester vos connaissances et vous aider à explorer les tenants et aboutissants du développement web.
                            </p>
                        <FontAwesomeIcon icon={faQuoteRight} className="absolute right-1" />
                </div>
                <div className="w-full flex justify-center px-10">
                        <button className="w-40  absolute bottom-3 bg-black text-white font-semibold py-2 rounded-2xl">Commencer</button>
                    </div>
            </div>
    </>
}