import React, { createContext, useContext } from "react"
import DialogBloc from "./DialogBloc"
import GeneratorBloc from "./GeneratorBloc"
import HasherBloc from "./HasherBloc"



const HasherContext = createContext(new HasherBloc())
const GeneratorContext = createContext(new GeneratorBloc())
const DialogContext = createContext(new DialogBloc())

export const BlocProvider = ({ children }) => {

    const hasherBloc = new HasherBloc()
    const generatorBloc = new GeneratorBloc();
    const dialogBloc = new DialogBloc();

    return (
        <DialogContext.Provider value={dialogBloc}>
            <HasherContext.Provider value={hasherBloc}>
                <GeneratorContext.Provider value={generatorBloc}>
                    {children}
                </GeneratorContext.Provider>
            </HasherContext.Provider>
        </DialogContext.Provider>
    )
}

export const useHasher = () => {

    const hasher = useContext(HasherContext)

    return hasher
}

export const useGenerator = () => {

    const generator = useContext(GeneratorContext)

    return generator
}

export const useDialog = () => {
    const dialog = useContext(DialogContext)

    return dialog
}