import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useSnackBar } from "../state/BlocContext";

const Snackbar = () => {

    const snakbarBloc = useSnackBar();

    const [snakbarState, setSnackBarState] = useState({
        isOpen: false,
        message: "",
    })


    useEffect(() => {
        const subdscription = snakbarBloc._state.subscribe(setSnackBarState)
        return () => subdscription.unsubscribe();
    }, [snakbarBloc])

    setTimeout(() => {
        snakbarBloc.close();
    }, 8000);


    return (
        <div
            className={classNames(
                "flex items-center bg-appleCrisp-500 text-sm font-bold px-4 py-3 fixed bottom-10 right-5 z-50 border-black border-2 ease-in-out",
                { block: snakbarState.isOpen },
                { hidden: !snakbarState.isOpen }
            )}
            role="alert"
        >
            <HiInformationCircle className="text-2xl mr-2" />
            <p>{snakbarState.message}</p>
        </div>
    );
};

export default Snackbar;