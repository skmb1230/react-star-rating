import { CSSProperties } from 'react';

export declare function StarRating({ maxStars, currentScore, size, starEmptyColor, starFillColor, onClick, isClickable, containerStyle, starStyle, }: StarRatingProps): any;

export declare interface StarRatingProps {
    /** 최대 별 개수 */
    maxStars?: number;
    /** 현재 점수 */
    currentScore?: number;
    /** 별 크기 */
    size?: number;
    /** 빈 별 색상 */
    starEmptyColor?: string;
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
