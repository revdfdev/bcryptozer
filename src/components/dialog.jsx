import React, { useEffect, useState } from 'react';
import { useDialog, useSnackBar } from '../state/BlocContext';

export default function Dialog() {


    const dialogBloc = useDialog();

    const snackbarBloc = useSnackBar();

    const [dialogState, setDialogState] = useState({
        isOpen: false,
        dialogData: null,
        error: null
    })

    useEffect(() => {
        const subdscription = dialogBloc._state.subscribe(setDialogState)
        return () => subdscription.unsubscribe();
    }, [dialogBloc])

    // const { title, data } = dialogState?.dialogData;

    const onClose = () => {
        dialogBloc.closeDialog();
    }

    const onCopy = () => {
        navigator.clipboard.writeText(dialogState?.dialogData?.data)
        dialogBloc.closeDialog();
        snackbarBloc.open("Copied to clipboard")
    }


    if (dialogState.isOpen) {
        console.log(dialogState, "dialogState")
        return (
            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="{isOpen}"
            >
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="w-full bg-opacity-35 flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
                        <div className="w-1/2 relative py-4 transform overflow-hidden bg-white transition-all sm:my-8 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
                            <div className="px-8 py-4 bg-white">
                                <div className=" grid place-content-center">
                                    <h2 className="text-2xl font-bold text-center">{dialogState?.dialogData?.title}</h2>
                                    <p className="text-center">{dialogState?.dialogData?.data}</p>
                                    {dialogState?.dialogData?.identifier === "hash" && (
                                        <>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onCopy}
                                            >
                                                Copy
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                        </>
                                    )}
                                    {dialogState?.dialogData?.identifier === "generator" && (
                                        <>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onClose}
                                            >
                                                Ok
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                        </>
                                    )}
                                    {dialogState?.dialogData?.identifier === "error" && (
                                        <>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onClose}
                                            >
                                                Ok
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-black text-white rounded px-4 py-2 mt-4"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }
}