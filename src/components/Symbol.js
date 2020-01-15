import React from "react";

const Symbol = props => {
  
  let Gfx = props => {
    return (
      <svg
        viewBox="0 0 100 100"
        fill={props.colour}
        stroke="grey"
        strokeWidth={2}
      >
        <polygon points={props.points} />
      </svg>
    );
  }

  switch (props.type) {
    case 0:
      return (
        <Gfx
          points="0,15 15,15 15,0 85,0 85,15 100,15 100,85 85,85 85,100 15,100 15,85 0,85"
          colour="turquoise"
        />
      );

    case 1:
      return <Gfx points="50,0 0,100 100,100" colour="yellow" />;

    case 2:
      return <Gfx points="50,0 100,50 50,100 0,50" colour="red" />;

    case 3:
      return (
        <Gfx
          points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
          colour="green"
        />
      );

    default:
      return <></>;
  }
}

export default Symbol;
