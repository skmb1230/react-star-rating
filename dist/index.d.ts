import { CSSProperties } from 'react';

export declare function StarRating({ variant, maxStars, currentScore, size, starEmptyColor, emptyOutlineColor, emptyOutlineFillColor, starFillColor, onClick, isClickable, containerStyle, starStyle, }: StarRatingProps): any;

export declare interface StarRatingProps {
    /** 변형 */
    variant?: "fill" | "outline-fill";
    /** 최대 별 개수 */
    maxStars?: number;
    /** 현재 점수 */
    currentScore?: number;
    /** 별 크기 */
    size?: number;
    /** 빈 별 색상 */
    starEmptyColor?: string;
    /**  empty outline 색상 */
    emptyOutlineColor?: string;
    /** empty 별 색상 */
    emptyOutlineFillColor?: string;
    /** 채운 별 색상 */
    starFillColor?: string;
    /** 클릭 이벤트 */
    onClick?: (currentStar: number) => void;
    /** 클릭 가능 여부 */
    isClickable?: boolean;
    /** 컨테이너 스타일 */
    containerStyle?: CSSProperties;
    /** 별 스타일 */
    starStyle?: CSSProperties;
}

export { }
