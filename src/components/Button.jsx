import classNames from "classnames";
import React from 'react';

const Button = ({
    buttonText = "Enabled",
    rounded = "none",
    size = "md",
    color = "brakeLightTrails-600",
    disabled,
    type = "button",
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            className={classNames(
                "border-black border-2",

                {
                    "bg-brakeLightTrails-200 hover:bg-brakeLightTrails-300 active:bg-brakeLightTrails-400":
                        color === "brakeLightTrails-600" && !disabled,
                },
                {
                    "bg-sambucus-200 hover:bg-sambucus-300 active:bg-sambucus-400":
                        color === "sambucus-600" && !disabled,
                },
                {
                    "bg-appleCrisp-200 hover:bg-appleCrisp-300 active:bg-appleCrisp-400":
                        color === "appleCrisp-600" && !disabled,
                },
                {
                    "bg-mammothMountain-200 hover:bg-mammothMountain-300 active:bg-mammothMountain-400":
                        color === "mammothMountain-600" && !disabled,
                },
                { "rounded-none": rounded === "none" },
                { "rounded-md": rounded === "md" },
                { "rounded-full": rounded === "full" },
                { "h-10 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "sm" },
                { "h-12 px-5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]": size === "md" },
                { "h-14 px-5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]": size === "lg" },
                {
                    "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
                        disabled,
                },
                className
            )}
            disabled={disabled}
            {...props}
        >
            {buttonText}
        </button>
    );
};

export default Button;