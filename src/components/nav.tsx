import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


export default function Nav (){
    const navigate = useNavigate();

    const menu  = [
        {
            icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rounded-full" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>,
            menu: 'Home'
        },
        {
            icon: <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rounded-full" fill="#0a035c" stroke="#0a035c"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_favorite [#0a035c0a035c]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2199.000000)" fill="#0a035c"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M22.6446428,2043.90844 C22.4684473,2044.08303 22.3882684,2044.33387 22.4298427,2044.57969 L22.6961156,2046.15397 C22.7792641,2046.64461 22.3942076,2047.04294 21.9586681,2047.04294 C21.8438441,2047.04294 21.7250606,2047.01485 21.6102366,2046.95364 L20.2155204,2046.21015 C20.1066355,2046.15196 19.9868622,2046.12286 19.8670888,2046.12286 C19.7473155,2046.12286 19.628532,2046.15196 19.5186572,2046.21015 L18.1239411,2046.95364 C18.009117,2047.01485 17.8903335,2047.04294 17.7755095,2047.04294 C17.33997,2047.04294 16.9559034,2046.64461 17.038062,2046.15397 L17.3053248,2044.57969 C17.3468991,2044.33387 17.2657304,2044.08303 17.0895348,2043.90844 L15.9610917,2042.79371 C15.5166434,2042.35424 15.7621293,2041.58968 16.375844,2041.49937 L17.9358672,2041.2696 C18.1793734,2041.23449 18.3902141,2041.07896 18.4990989,2040.85521 L19.1959621,2039.42242 C19.333553,2039.14047 19.6008158,2039 19.8670888,2039 C20.1343517,2039 20.4006247,2039.14047 20.5382155,2039.42242 L21.2360686,2040.85521 C21.3449534,2041.07896 21.5548043,2041.23449 21.7993003,2041.2696 L23.3583336,2041.49937 C23.9720483,2041.58968 24.2175342,2042.35424 23.773086,2042.79371 L22.6446428,2043.90844 Z M11.8927571,2050.87478 C11.8779091,2050.87478 11.8650409,2050.87277 11.850193,2050.87277 C11.8363349,2050.87277 11.8224768,2050.87478 11.8086188,2050.87478 C10.7365978,2050.8517 9.87046813,2049.96373 9.87046813,2048.87207 C9.87046813,2047.76536 10.7583747,2046.86535 11.850193,2046.86535 C12.9420113,2046.86535 13.8299179,2047.76536 13.8299179,2048.87207 C13.8299179,2049.96373 12.9637882,2050.8517 11.8927571,2050.87478 L11.8927571,2050.87478 Z M14.8455167,2051.46977 C15.6671025,2050.49852 16.0630475,2049.14699 15.6364168,2047.6851 C15.2434414,2046.33758 14.1248969,2045.27301 12.7717549,2044.96398 C10.1842545,2044.373 7.89074327,2046.35062 7.89074327,2048.87207 C7.89074327,2049.86841 8.26194168,2050.76742 8.85486928,2051.46977 C6.29805462,2052.52732 4.4093971,2054.98354 4.00949268,2057.86319 C3.92634423,2058.46421 4.40048834,2059 4.99836525,2059 C5.48834715,2059 5.90210965,2058.63578 5.97041015,2058.14413 C6.37922334,2055.22736 8.83804161,2052.90257 11.8086188,2052.8815 C11.8224768,2052.8815 11.8363349,2052.88552 11.850193,2052.88552 C11.8650409,2052.88552 11.8779091,2052.8815 11.8927571,2052.8815 C14.8623444,2052.90257 17.3221525,2055.22736 17.7299758,2058.14514 C17.7992662,2058.63578 18.2130287,2059 18.7020207,2059 L18.7030106,2059 C19.3008875,2059 19.7740417,2058.46421 19.6908933,2057.8642 C19.2919787,2054.98354 17.4023314,2052.52932 14.8455167,2051.46977 L14.8455167,2051.46977 Z" id="profile_favorite-[#0a035c0a035c]"> </path> </g> </g> </g> </g></svg>,
            menu: 'Favoris'
        },
        {
            icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjje7hrvcyBW9MUG4mZA0Y35U1VEiRbuJww&usqp=CAU" className="w-10 h-10 object-cover rounded-full" alt="" />,
            menu: 'Profile'
        }
    ];

    function PageRedirect(index: number){
        setIndex(index)
        if (index == 0) {
             navigate('/home')
            }
            else if(index == 1){
                
                navigate( '/favoris')
            }
            else {
                
                navigate( '/profile')
        }
    }
    const [indexMenu, setIndex] = useState(0)
    return <>
              <div className="min-w-max w-96 md:w-1/3  h-16 z-20 backdrop-blur-2xl shadow-2xl shadow-gray-300 bg-white/30  p-2 fixed top-10 left-1/2 -translate-x-1/2 overflow-hidden border border-slate-300 rounded-full flex flex-row gap-5 justify-between">
                {
                    menu.map((item, index) => (
                        <div key={index} className={`w-1/3 backdrop-blur-2xl ${indexMenu === index ? 'bg-white/60' : ''} rounded-full flex flex-row justify-center items-center gap-2 hover:bg-white/60  cursor-pointer`} onClick={()=>  PageRedirect(index) }>
                                {item.icon}
                                
                        <span className="paprika-regular text-xs md:text-sm">{item.menu}</span>
                        </div>
                    ))
                }
               
                
            </div>
    </>
}