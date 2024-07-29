import React from 'react'

export default function NavBar() {

    return (
        <header className="w-full">
            <nav>
                <div className="flex flex-row px-8 bg-brakeLightTrails-900 w-full h-16 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold text-appleCrisp-400">
                            Bcryptozer
                        </h1>
                    </div>
                </div>
            </nav>
        </header>
    )
}