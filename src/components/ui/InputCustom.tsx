"use client";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<TFormValues extends FieldValues> = {
    register: UseFormRegister<TFormValues>;
    name: Path<TFormValues>
    placeholder: string;
    type: string;
    errors: any;
}

const InputCustom = <TFormValues extends FieldValues>({ register, placeholder, type, name, errors}: Props<TFormValues>) => {
    return (
        <div className="flex flex-col justify-center items-center m-4 gap-2">
            <input {...register(name as Path<TFormValues>)} placeholder={placeholder} type={type}
            className="p-1 bg-rosa-claro rounded-xl shadow-md shadow-black " />
            {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
        </div>
)}

export default InputCustom;