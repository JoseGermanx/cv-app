
'use client'
import React, {useState, useMemo, useEffect} from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const TerminalController = (props = {}) => {

    const initialState = useMemo(
        () => [
          <TerminalOutput>Ingresa un comando</TerminalOutput>,
          <TerminalOutput></TerminalOutput>
        ],
        []
      )

  const [terminalLineData, setTerminalLineData] = useState(initialState);
  // Terminal has 100% width by default so it should usually be wrapped in a container div

  useEffect(() => {
    setTerminalLineData(initialState)
  }, [initialState])

  
  return (
    <div className="container">
      <Terminal name='Bienvenido a la terminal de jgxdev' colorMode={ ColorMode.Dark}  onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }>
        { terminalLineData }
      </Terminal>
    </div>
  )
};

export default TerminalController;