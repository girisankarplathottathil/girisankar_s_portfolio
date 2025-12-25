interface DotsPatternProps {
  className?: string;
}

const DotsPattern = ({ className = "" }: DotsPatternProps) => {
  return (
    <svg
      width="104"
      height="104"
      viewBox="0 0 104 104"
      className={`dots-pattern ${className}`}
      fill="currentColor"
    >
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + col * 24}
            cy={4 + row * 24}
            r="4"
          />
        ))
      )}
    </svg>
  );
};

export default DotsPattern;
