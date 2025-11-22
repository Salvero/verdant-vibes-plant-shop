import React from 'react';
import '../index.css'; // Ensure styles are available if not global

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading,
    className = '',
    ...props
}) => {
    const baseStyles = 'btn';
    const variantStyles = {
        primary: 'btn-primary',
        outline: 'btn-outline',
        ghost: 'btn-ghost', // We might need to add this to CSS
    };

    // We can add size classes if we want, for now using default padding

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
