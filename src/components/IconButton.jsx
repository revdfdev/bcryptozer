import classNames from "classnames";
import React from 'react';

const IconButton = ({
    size = "sm",
    rounded = "none",
    icon,
    focusColor = "brakeLightTrails-600",
    color = "cyan",
    disabled = false,
    className,
}) => {
    return (
        <button
            className={classNames(
                "border-black border-2",
                { "focus:bg-brakeLightTrails-200": focusColor === "brakeLightTrails-600" },
                { "focus:bg-appleCrisp-200": focusColor === "appleCrisp-600" },
                { "focus:bg-sambucus-200": focusColor === "bg-sambucus-600" },
                { "focus:bg-mammothMountain-200": focusColor === "bg-mammothMountain-600" },
                {
                    "w-10 h-10 p-2 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":
                        size === "sm",
                },
                {
                    "w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]":
                        size === "md",
                },
                {
                    "w-24 h-24 p-9 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]":
                        size === "lg",
                },
                { "rounded-none": rounded === "none" },
                { "rounded-md": rounded === "md" },
                { "rounded-full": rounded === "full" },
                {
                    "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
                        disabled,
                },
                className
            )}
            disabled={disabled}
        >
            {icon}
        </button>
    );
};

export default IconButton;