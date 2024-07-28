import React, { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { useHasher } from '../state/BlocContext';
import Button from './Button';
import Input from "./Input";


const initialState = {
    plainText: "",
    saltCount: 10,
}

export default function Hasher() {

    const hashBloc = useHasher();

    const [hasherFormState, setHasherFormState] = useState({
        ...initialState,
    });

    const onIncreaseSaltCount = (e) => {
        e.preventDefault();
        if (hasherFormState.saltCount < 15) {
            setHasherFormState({
                ...hasherFormState,
                saltCount: hasherFormState.saltCount + 1
            })
        }
    }

    const onDecreaseSaltCount = (e) => {
        e.preventDefault();
        if (hasherFormState.saltCount > 1) {
            setHasherFormState({
                ...hasherFormState,
                saltCount: hasherFormState.saltCount - 1
            })
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        hashBloc.hashText(hasherFormState.plainText, hasherFormState.saltCount)
        setHasherFormState({ ...initialState })
    }

    const onChangePlainText = (e) => {
        e.preventDefault();
        setHasherFormState({
            ...hasherFormState,
            plainText: e.target.value
        })
    }

    return (
        <div className="w-full h-full flex flex-col p-8 items-center">
            <div className='w-full flex flex-col items-center justify-center'>
                <label className="text-3xl font-bold text-sambucus-500 mb-2">
                    Plain text password
                </label>
                <Input
                    placeholder="Plain text"
                    type="text"
                    value={hasherFormState.plainText}
                    focusColor='sambucus'
                    className="w-full mb-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    onChange={onChangePlainText}
                />
            </div>

            <div className='w-full flex flex-col justify-evenly items-center'>
                <label className='text-xl font-bold text-sambucus-500 mb-2'>
                    Cost factor
                </label>
                <div className='flex flex-row text-center justify-evenly items-center mb-2 border-black border-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded p-4'>
                    <button onClick={onDecreaseSaltCount} className="w-8 h-8 mb-2 align-middle justify-center items-center">
                        <HiMinus className='text-sambucus-500 w-8 h-8 mb-2' />
                    </button>
                    <Input
                        placeholder="Cost factor"
                        type="number"
                        focusColor='sambucus'
                        value={hasherFormState.saltCount}
                        className="h-8 mx-8 mb-2 align-middle text-center cursor-not-allowed"
                    />
                    <button onClick={onIncreaseSaltCount} className="w-8 h-8 mb-2 align-middle justify-center items-center">
                        <HiPlus className='text-sambucus-500 w-8 h-8 mb-2' />
                    </button>
                </div>
                <Button
                    color='sambucus'
                    rounded='full'
                    size='sm'
                    buttonText='Hash'
                    onClick={onSubmit}
                    className="w-full mb-2 ring-offset-brakeLightTrails-700 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
            </div>
        </div>
    )
}