export interface StarRatingProps {
    maxStars?: number;
    currentScore?: number;
    size?: number;
    starEmptyColor?: string;
    starFillColor?: string;
    onClick?: (currentStar: number) => void;
    isClickable?: boolean;
}
export declare function StarRating({ maxStars, currentScore, size, starEmptyColor, starFillColor, onClick, isClickable, }: StarRatingProps): any;
export default StarRating;
