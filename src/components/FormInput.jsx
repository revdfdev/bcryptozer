import classNames from "classnames";
import React from "react";

const FormInput = ({
    focusColor = "brakeLightTrails-600",
    rounded = "none",
    className,
    field,
    register,
    required,
    placeholder
}) => {

    return (
        <input
            placeholder={placeholder}
            className={classNames(
                "w-72 md:w-full max-w-md border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] focus:placeholder:text-slate-500 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]",
                { "focus:bg-brakeLightTrails-200": focusColor === "brakeLightTrails-600" },
                { "focus:bg-appleCrisp-200": focusColor === "appleCrisp-600" },
                { "focus:bg-sambucus-200": focusColor === "bg-sambucus-600" },
                { "focus:bg-mammothMountain-200": focusColor === "bg-mammothMountain-600" },
                // { "focus:bg-yellow-200": focusColor === "yellow" },
                // { "focus:bg-lime-200": focusColor === "lime" },
                // { "focus:bg-cyan-200": focusColor === "cyan" },
                { "rounded-none": rounded === "none" },
                { "rounded-md": rounded === "md" },
                { "rounded-full": rounded === "full" },
                className
            )}
            {...register(field, { required: required })}
        />
    );
};

export default FormInput;