import React from 'react'

export default function NavBar() {

    return (
        <nav>
            <div className="flex flex-row px-8 bg-brakeLightTrails-400 w-full h-16 justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold text-sambucus-500">
                        Bcryptesizor
                    </h1>
                </div>
            </div>
        </nav>
    )
}