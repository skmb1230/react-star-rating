import { CSSProperties, useEffect, useState } from "react";

export interface StarRatingProps {
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

export function StarRating({
  variant = "fill",
  maxStars = 5,
  currentScore = 0,
  size = 24,
  starEmptyColor = "#D2D2D2",
  emptyOutlineColor = "#D2D2D2",
  emptyOutlineFillColor = "transparent",
  starFillColor = "#FF501B",
  onClick,
  isClickable = true,
  containerStyle,
  starStyle,
}: StarRatingProps) {
  const [fillStar, setFillStar] = useState(currentScore);

  useEffect(() => {
    setFillStar(currentScore);
  }, [currentScore]);

  const handleStar = (selectIndex: number) => {
    if (!isClickable) {
      return;
    }
    setFillStar(selectIndex + 1);
    onClick?.(selectIndex + 1);
  };

  const starSize = size;
  const starGap = Math.floor(size / 4);
  const outlineColor = variant === "fill" ? starEmptyColor : emptyOutlineColor;
  const emptyFillColor = variant === "fill" ? starEmptyColor : emptyOutlineFillColor;

  const defaultContainerStyle: CSSProperties = {
    display: "inline-flex",
    gap: `${starGap}px`,
    height: `${size}px`,
    alignItems: "center",
  };

  const defaultStarStyle: CSSProperties = {
    position: "relative",
    width: starSize,
    height: starSize,
    cursor: isClickable ? "pointer" : "default",
  };

  const fillStyle = (fillPercentage: number) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: `${fillPercentage}%`,
    height: "100%",
    overflow: "hidden",
  });

  return (
    <div style={{ ...defaultContainerStyle, ...containerStyle }}>
      {Array.from({ length: maxStars }, (_, index) => {
        const fillPercentage = fillStar >= index + 1 ? 100 : fillStar > index ? (fillStar - index) * 100 : 0;

        return (
          <div key={index} style={{ ...defaultStarStyle, ...starStyle }} onClick={() => isClickable && handleStar(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={starSize} height={starSize} viewBox="0 0 42 42">
              <path
                d="M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z"
                fill={emptyFillColor}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z"
                fill={outlineColor}
              />
            </svg>
            <div style={fillStyle(fillPercentage)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={starSize} height={starSize} viewBox="0 0 42 42">
                <path
                  d="M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z"
                  fill={starFillColor}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z"
                  fill={starFillColor}
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
