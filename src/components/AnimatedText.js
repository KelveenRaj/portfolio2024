import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const AnimatedTextContainer = styled.div`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: white;

  span.yellow {
    color: yellow;
  }

  span.pink {
    color: pink;
  }

  span.blink {
    animation: ${blink} 0.8s infinite;
  }
`;

const AnimatedText = ({ text, fontSize, fontWeight }) => {
  const [currentText, setCurrentText] = useState("");
  const [showBlinkingDot, setShowBlinkingDot] = useState(false);
  const delay = 80;

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(intervalId);
        setShowBlinkingDot(true);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  const renderHighlightedText = () => {
    const highlightRules = [
      { chars: ["'"], className: "yellow" },
      { chars: [".", ",", "!"], className: "pink" },
    ];

    return (
      <>
        {currentText.split("").map((char, i) => {
          for (const rule of highlightRules) {
            if (rule.chars.includes(char)) {
              return (
                <span key={i} className={rule.className}>
                  {char}
                </span>
              );
            }
          }
          return <span key={i}>{char}</span>;
        })}
        {showBlinkingDot && (
          <span className={`blink ${highlightRules[1].className}`}>.</span>
        )}
      </>
    );
  };

  return (
    <AnimatedTextContainer fontSize={fontSize} fontWeight={fontWeight}>
      {renderHighlightedText()}
    </AnimatedTextContainer>
  );
};

export default AnimatedText;
