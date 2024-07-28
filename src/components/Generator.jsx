import React from 'react';
import { useForm } from 'react-hook-form';
import { useGenerator } from '../state/BlocContext';
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

    const onSubmit = (data) => {
        generatorBloc.verifyBcryptText(data.bcryptText, data.plainText)
        reset()
    }

    return (
        <div className="w-full h-full flex flex-col p-8 items-center">
            <form onSubmit={handleSubmit(onSubmit)} autoSave='off' autoComplete='off' autoCorrect='off' autoCapitalize='off' className="w-full h-full flex flex-col items-center">
                <div className='w-full flex flex-col items-center justify-center'>
                    <label className="text-3xl font-bold text-sambucus-500 mb-4">
                        Bcyrpt text
                    </label>
                    <FormInput
                        className="w-full mb-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                        {...register("bcryptText", { required: true })}
                        field={"bcryptText"}
                        register={register}
                        required={true}
                        placeholder="Bcrypt text password"
                        focusColor='sambucus'
                        aria-invalid={errors.bcryptText ? "true" : "false"}
                    />
                    {errors.bcryptText?.type === 'required' && <p className="text-red-500">Bcrypt text is required</p>}
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <label className="text-3xl font-bold text-sambucus-500 mb-4">
                        Plain text password
                    </label>
                    <FormInput
                        className="w-full mb-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                        field={"plainText"}
                        register={register}
                        required={true}
                        placeholder="Plain text password"
                        focusColor='sambucus'
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
                    className="w-full mb-9 ring-offset-brakeLightTrails-700 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
            </form>
        </div>
    )
}