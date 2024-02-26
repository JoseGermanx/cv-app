"use client";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const initialState = useMemo(
    () => [
      <TerminalOutput>Terminal en construcción</TerminalOutput>,
      <TerminalOutput>Puedes interactuar, al menos escribiendo un mensaje:</TerminalOutput>,
      <TerminalOutput></TerminalOutput>,
    ],
    []
  );

  const [terminalLineData, setTerminalLineData] = useState(initialState);
  // Terminal has 100% width by default so it should usually be wrapped in a container div

//   const [terminalInputValue, setTerminalInputValue] = useState("");

  useEffect(() => {
    setTerminalLineData(initialState);
  }, [initialState]);

  const onInput = (input: string) => {
    let ld = [...terminalLineData]
    ld.push(<TerminalInput>{input}</TerminalInput>)
    setTerminalLineData(ld)
  }

//   (terminalInput) =>{
//     console.log(`New terminal input received: '${terminalInput}'`)
//     setTerminalLineData([...terminalLineData, <TerminalOutput>{terminalInput}</TerminalOutput>])
//   }


  return (
    <div className="container">
      <Terminal
        name="Bienvenido a la terminal de jgxdev"
        colorMode={ColorMode.Dark}
        onInput={onInput}
        height="50vh"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
