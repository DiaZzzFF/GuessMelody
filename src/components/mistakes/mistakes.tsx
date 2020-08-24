import * as React from "react";


const Mistakes = (props) => {
  const {count} = props;

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => <div key={`mistakes-${i}`} className="wrong" />)}
    </div>
  );
};


export default Mistakes;
