import React from 'react'

export default function Card({ title, headline, icon, children }) {
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-appleCrisp-500 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="px-4 py-2 text-center flex flex-row items-center space-x-3 p-4 align-middle justify-center">
                {icon}
                <div className="font-bold text-xl mb-2 text-sambucus-500">{title}</div>
            </div>
            <hr className='mb-4 mx-8' />
            <div className="px-6 pt-2 pb-4">
                <p className="text-center text-sambucus-500">{headline}</p>
            </div>
            <div className="px-4 pt-2 pb-2">
                {children}
                {/* <span className="inline-block bg-brakeLightTrails-500 rounded-full px-3 py-1 text-sm font-semibold text-appleCrisp-500 mr-2 mb-2">
                    #card
                </span>
                <span className="inline-block bg-brakeLightTrails-500 rounded-full px-3 py-1 text-sm font-semibold text-appleCrisp-500 mr-2 mb-2">
                    #design
                </span>
                <span className="inline-block bg-brakeLightTrails-500 rounded-full px-3 py-1 text-sm font-semibold text-appleCrisp-500 mr-2 mb-2">
                    #neu
                </span>
                <span className="inline-block bg-brakeLightTrails-500 rounded-full px-3 py-1 text-sm font-semibold text-appleCrisp-500 mr-2 mb-2">
                    #brutalism
                </span> */}
            </div>
        </div>
    )
}
