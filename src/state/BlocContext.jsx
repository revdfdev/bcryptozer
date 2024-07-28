import React, { createContext, useContext } from "react"
import DialogBloc from "./DialogBloc"
import GeneratorBloc from "./GeneratorBloc"
import HasherBloc from "./HasherBloc"
import SnackBarBloc from "./SnackbarBloc"



const HasherContext = createContext(new HasherBloc())
const GeneratorContext = createContext(new GeneratorBloc())
const DialogContext = createContext(new DialogBloc())
const SnackBarContext = createContext(new SnackBarBloc());

export const BlocProvider = ({ children }) => {

    const hasherBloc = new HasherBloc()
    const generatorBloc = new GeneratorBloc();
    const dialogBloc = new DialogBloc();
    const snackBarBloc = new SnackBarBloc()

    return (
        <DialogContext.Provider value={dialogBloc}>
            <SnackBarContext.Provider value={snackBarBloc}>
                <HasherContext.Provider value={hasherBloc}>
                    <GeneratorContext.Provider value={generatorBloc}>
                        {children}
                    </GeneratorContext.Provider>
                </HasherContext.Provider>
            </SnackBarContext.Provider>
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

export const useSnackBar = () => {
    const snackbar = useContext(SnackBarContext)

    return snackbar
}