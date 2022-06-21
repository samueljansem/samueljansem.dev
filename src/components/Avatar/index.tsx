import { StyledAvatar, StyledFallback, StyledImage } from './styles';

interface AvatarProps {
    image: string;
    alt?: string;
    fallback: string;
    fallbackDelay?: number;
}

export function Avatar({ image, alt, fallback, fallbackDelay = 500 }: AvatarProps) {
    return (
        <StyledAvatar>
            <StyledImage src={image} alt={alt} />
            <StyledFallback delayMs={fallbackDelay}>{fallback}</StyledFallback>
        </StyledAvatar>
    );
}
