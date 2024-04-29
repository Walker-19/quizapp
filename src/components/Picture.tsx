/**
 * 
 * @param {string} src - L'url de la source de l'image
 * 
 * @returns {JSX.Element} Composant JSX representant l'image
 */

export default function Picture({src} : {src: string}): JSX.Element{

    return <>
         <img src={src} className="w-14 h-14 object-cover rounded-full  border-4" alt="" />
    </>
}