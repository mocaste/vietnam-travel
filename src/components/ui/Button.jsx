import React from 'react';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'md',
                    onClick,
                    className = '',
                    disabled = false,
                    ...props
                }) => {
    const baseClasses = 'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 focus:ring-orange-500 transform hover:scale-105 shadow-xl',
        secondary: 'bg-white text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
        success: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-lg',
        lg: 'px-8 py-4 text-lg rounded-full'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`.trim();

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;