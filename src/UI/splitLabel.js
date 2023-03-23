export const label = (value) => {
  return value.split('').map((letter, inx) => {
    return (
      <span key={inx} style={{ transitionDelay: `${inx * 60}ms` }}>
        {letter}
      </span>
    );
  });
};
