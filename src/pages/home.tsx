import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardPub from "../components/cardPub";
import Nav from "../components/nav";
import { faAd, faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import ModalQuiz from "../components/ModalQuiz";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home(){

    const location = useLocation();
    const user = location.state;
    console.log(user);
    const [showModal, setModal] = useState(false);

    return(<>
        <div className="w-full h-screen bg-slate-100 relative overflow-hidden">
                { showModal && (
                    <div className="w-full px-20 z-40 absolute flex justify-center items-center h-screen bg-transparent ">
                        <FontAwesomeIcon icon={faClose}  className="absolute z-10 top-5  right-14 text-red-500 cursor-pointer text-2xl font-bold"  onClick={() => setModal(!showModal)} />
                        <ModalQuiz />
                    </div>
                        )}
            <div className="w-14 h-14 rounded-full bg-black absolute bottom-10 right-28 flex justify-center items-center z-20 cursor-pointer" onClick={() => setModal(!showModal)}>
                <FontAwesomeIcon icon={faAdd} className="text-white text-xl" />
            </div>
          <Nav />

            <div className="w-full h-full bg-gradient-to-br p-10 from-cyan-300 to-green-300 overflow-y-auto overflow-x-hidden">
                <div className="w-full h-72 p-4 relative bg-white/75 rounded-lg backdrop-blur-2xl mt-20">
                    <p className="absolute -top-6 left-0 backdrop-blur-xl bg-white/30 p-3 rounded-t-lg  border-2 border-transparent font-semibold">🔥Les plus populaires</p>
                    <div className="w-full h-full flex flex-row flex-nowrap overflow-x-auto gap-10">
                        <CardPub />
                        <CardPub />
                        <CardPub />
                        <CardPub />
                        <CardPub />
                        <CardPub />
                        <CardPub />
                        <CardPub />
                       
                    </div>
                </div>
                <div className="w-full  min-h-56 mt-14  rounded-2xl flex flex-row flex-wrap gap-10">
                    <CardPub />
                    <CardPub />
                    <CardPub />
                    <CardPub />
                    <CardPub />
                    <CardPub />
                </div>
            </div>
        </div>
    </>)
}