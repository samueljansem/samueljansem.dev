import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    outlined?: boolean;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <StyledButton {...props} type="button">
            {children}
        </StyledButton>
    );
}
