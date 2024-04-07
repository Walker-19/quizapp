import FavorisCard from "../components/favorisCard";
import Nav from "../components/nav";

export default function Favoris() {

    return <>
            <div className="w-full h-full bg-gradient-to-br p-10 from-cyan-300 to-green-300 overflow-y-auto">
                            <Nav />
            <div className="w-full min-h-56 mt-20 backdrop-blur-xl bg-white/30 rounded-2xl flex flex-row flex-wrap gap-10 justify-around">
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
                    <FavorisCard />
            </div>
            </div>
    </>
}