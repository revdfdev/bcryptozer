import React, { useEffect, useState } from 'react';
import { useDialog } from '../state/BlocContext';

export default function Dialog() {


    const dialogBloc = useDialog();

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
    }

    if (dialogState.isOpen) {
        return (
            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="{shouldShow}"
            >
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
                        <div className="max-w-min py-4 transform overflow-hidden bg-white transition-all sm:my-8 sm:w-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
                            <div className="px-8 py-4 bg-white">
                                <h2 className="text-2xl font-bold mb-4">{dialogState?.dialogData?.title}</h2>
                                <p className="text-xl">{dialogState?.dialogData?.data}</p>
                                {dialogState?.dialogData?.identifier === "hash" ? (
                                    <div className="flex space-x-2 mx-auto w-32">
                                        <button
                                            onClick={onClose}
                                            className="w-24 h-12 hover:text-white active:text-white border-black border-2 p-2.5 hover:bg-sambucus-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-sambucus-300 rounded-full">
                                            Dismiss
                                        </button>
                                        <button
                                            onClick={onCopy}
                                            className="w-24 h-12 hover:text-white active:text-white border-black border-2 p-2.5 hover:bg-sambucus-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-sambucus-300 rounded-full"
                                        >
                                            Copy
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex space-x-2 mx-auto w-32">
                                        <button
                                            onClick={onClose}
                                            className="w-24 h-12 hover:text-white active:text-white border-black border-2 p-2.5 hover:bg-sambucus-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-sambucus-300 rounded-full">
                                            Dismiss
                                        </button>
                                        <button
                                            onClick={onClose}
                                            className="w-24 h-12 hover:text-white active:text-white border-black border-2 p-2.5 hover:bg-sambucus-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-sambucus-300 rounded-full"
                                        >
                                            Ok
                                        </button>
                                    </div>
                                )}
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

// const Dialog = () => {
//     return (
//         <div
//             className={classNames(
//                 "w-72 md:w-80 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center",
//                 { "w-fit": width === "fit" },
//                 { "w-full": width === "full" },
//                 { "w-1/2": width === "1/2" },
//                 { "w-1/3": width === "1/3" },
//                 className
//             )}
//         >
//             <div>
//                 <h1 className="text-2xl mb-4">{message}</h1>
//                 <div className="flex space-x-2 mx-auto w-32">
//                     {cancelButtonText && (
//                         <button className="text-base">{cancelButtonText}</button>
//                     )}
//                     {actionButtonText && (
//                         <Button
//                             buttonText={actionButtonText}
//                             rounded="full"
//                             color={actionButtonColor && actionButtonColor}
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dialog;