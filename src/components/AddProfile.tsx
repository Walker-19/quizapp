export default function Profil(){

    return <>
        <div className="w-full h-screen bg-slate-100 flex flex-col justify-center items-center">

                <div className="w-80  h-80 rounded-2xl border-2 flex justify-center items-end border-slate-500">
                    <img src="" alt="" className="w-52 h-52 rounded-full border border-slate-500 mb-5" />
                </div>

            <div className="w-full flex justify-center items-center flex-row">
                    <button className="bg-slate-500 text-white px-3 py-2 rounded-lg ml-10 mt-8  text-sm font-semibold">Ignorer</button>
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-lg ml-10 mt-8 text-sm font-semibold">Ajouter une photo de profil</button>
            </div>
        </div>
    </>
}