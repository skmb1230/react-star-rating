import React, { useEffect, useState } from "react";

export interface StarRatingProps {
  maxStars?: number; // 최대 별 개수
  currentScore: number; // 현재 점수
  size?: number; // 별 크기
  starEmptyColor?: string; // 빈 별 색상
  starFillColor?: string; // 채운 별 색상
  onClick?: (currentStar: number) => void; // 클릭 이벤트
  isClickable?: boolean; // 클릭 가능 여부
}

export function StarRating({
  maxStars = 5,
  currentScore,
  size = 24,
  starEmptyColor = "#D2D2D2",
  starFillColor = "#FF501B",
  onClick,
  isClickable = true,
}: StarRatingProps) {
  const [fillStar, setFillStar] = useState<number>(currentScore);

  useEffect(() => {
    setFillStar(currentScore);
  }, [currentScore]);

  const handleStar = (index: number) => {
    if (onClick) {
      onClick(index + 1);
    } else {
      setFillStar(index + 1);
    }
  };

  const starSize = size * 0.75;
  const starGap = Math.floor(size / 4);

  const containerStyle = {
    display: "inline-flex",
    gap: `${starGap}px`,
    height: `${size}px`,
    alignItems: "center",
  };

  const starStyle = {
    position: "relative" as "relative",
    width: starSize,
    height: starSize,
    cursor: isClickable ? "pointer" : "default",
  };

  const fillStyle = (fillPercentage: number) => ({
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: `${fillPercentage}%`,
    height: "100%",
    overflow: "hidden",
  });

  return (
    <div style={containerStyle}>
      {Array.from({ length: maxStars }, (_, index) => {
        const fillPercentage = fillStar >= index + 1 ? 100 : fillStar > index ? (fillStar - index) * 100 : 0;

        return (
          <div key={index} style={starStyle} onClick={() => isClickable && handleStar(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width={starSize} height={starSize} viewBox="0 0 42 42">
              <path
                d="M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z"
                fill={starEmptyColor}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z"
                fill={starEmptyColor}
              />
            </svg>
            <div style={fillStyle(fillPercentage)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={starSize} height={starSize} viewBox="0 0 42 42">
                <path
                  d="M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z"
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
