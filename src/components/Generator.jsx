import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDialog, useGenerator } from '../state/BlocContext';
import Button from './Button';
import FormInput from './FormInput';


export default function Generator() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const generatorBloc = useGenerator();

    const dialogBloc = useDialog();

    const [generatorState, setGeneratorState] = useState({
        isValid: false,
        error: null
    })

    useEffect(() => {
        const subscription = generatorBloc._state.subscribe(state => setGeneratorState(state))
        return () => subscription.unsubscribe();
    }, [generatorBloc])

    const onSubmit = (data) => {
        generatorBloc.verifyBcryptText(data.bcryptText, data.plainText)
    }

    useEffect(() => {
        if (generatorState.isValid && !generatorState.error) {
            dialogBloc.openDialog({
                title: "Bcrypt text verified",
                identifier: "generator",
                data: generatorState?.isValid ? "the password is valid" : "the password is not valid",
            })
            reset();
        }

        if (generatorState.error) {
            dialogBloc.openDialog({
                title: "Error",
                identifier: "error",
                data: generatorState?.error
            })
        }
    }, [generatorState])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col p-8 items-center">
            <div className='w-full flex flex-col items-center justify-center'>
                <label className="text-3xl font-bold text-sambucus-500 mb-4">
                    Bcyrpt text
                </label>
                <FormInput
                    className="w-full mb-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    {...register("bcryptText", { required: true })}
                    field={"bcryptText"}
                    register={register}
                    required={true}
                    aria-invalid={errors.bcryptText ? "true" : "false"}
                />
                {errors.bcryptText?.type === 'required' && <p className="text-red-500">Bcrypt text is required</p>}
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <label className="text-3xl font-bold text-sambucus-500 mb-4">
                    Plain text password
                </label>
                <FormInput
                    className="w-full mb-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    field={"plainText"}
                    register={register}
                    required={true}
                    aria-invalid={errors.plainText ? "true" : "false"}
                />
                {errors.plainText?.type === 'required' && <p className="text-red-500">Plain text is required</p>}
            </div>

            <Button
                color='sambucus'
                rounded='full'
                size='sm'
                type='submit'
                buttonText='Compare'
                className="w-full mb-4 ring-offset-brakeLightTrails-700 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]" />
        </form>
    )
}