/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const initialState = useMemo(
    () => [
      <TerminalOutput>
        Puedes solicitar información de José Germán:
      </TerminalOutput>,
      <TerminalOutput>Comandos disponibles:</TerminalOutput>,
      <TerminalOutput>- cv: Descargar el CV de José Germán</TerminalOutput>,
      <TerminalOutput>- nl: Ir a la newsletter</TerminalOutput>,
      <TerminalOutput>
        - stack: Tecnologías con las que trabaja José Germán
      </TerminalOutput>,
      <TerminalOutput>- cert: Ver certificaciones</TerminalOutput>,
      <TerminalOutput>- pl: Ver lenguajes de programación</TerminalOutput>,
      <TerminalOutput>----</TerminalOutput>,
      <TerminalOutput>- clear: Limpiar la terminal</TerminalOutput>,
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
    let ld = [...terminalLineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);

    switch (input.toLocaleLowerCase()) {
      case "":
        break;
      case "hola":
        ld.push(<TerminalOutput>Hola, ¿cómo estás?</TerminalOutput>);
        break;
      case "adios":
        ld.push(<TerminalOutput>Adiós, que tengas un buen día.</TerminalOutput>);
        break;
      case "cv":
        let anchor = document.createElement("a");
        anchor.href = "/cv_jose_martinez.pdf";
        anchor.target = "_blank";
        anchor.download = "cv_jose_martinez.pdf";
        anchor.click();
        ld.push(<TerminalOutput><>CV Descargado con éxito. Acceder: <Link className=" text-yellow-400 underline" href={"/cv_jose_martinez.pdf"} target="_blank">ver CV</Link></></TerminalOutput>);
        break;
      case "nl":
        let nl = document.createElement("a");
        nl.href =
          "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7078460407316635648";
        nl.target = "_blank";
        nl.click();
        ld.push(<TerminalOutput>Newsletter</TerminalOutput>);
        break;
      case "stack":
        ld.push(
          <TerminalOutput>
            Tecnologías con las que trabaja José Germán:
          </TerminalOutput>
        );
        ld.push(<TerminalOutput>Frontend: React, Next.js</TerminalOutput>);
        ld.push(
          <TerminalOutput>
            Backend: Node.js, Express, Nest.js, Spring Boot, flask
          </TerminalOutput>
        );
        ld.push(
          <TerminalOutput>
            Base de datos: MongoDB, MySQL, PostgreSQL
          </TerminalOutput>
        );
        ld.push(<TerminalOutput>Cloud: AWS, Azure</TerminalOutput>);
        ld.push(<TerminalOutput>DevOps: Docker</TerminalOutput>);
        ld.push(<TerminalOutput>Testing: Jest</TerminalOutput>);
        ld.push(<TerminalOutput>Mobile: React Native</TerminalOutput>);
        break;
      case "clear":
        ld = [];
        break;
      case "help":
        ld.push(<TerminalOutput>Comandos disponibles:</TerminalOutput>);
        ld.push(
          <TerminalOutput>- cv: Descargar el CV de José Germán</TerminalOutput>
        );
        ld.push(<TerminalOutput>- nl: Ir a la newsletter</TerminalOutput>);
        ld.push(
          <TerminalOutput>
            - stack: Tecnologías con las que trabaja José Germán
          </TerminalOutput>
        );
        ld.push(<TerminalOutput>- cert: Ver certificaciones</TerminalOutput>);
        ld.push(<TerminalOutput>- pl: Ver lenguajes de programación</TerminalOutput>);
        ld.push(<TerminalOutput>----</TerminalOutput>);
        ld.push(<TerminalOutput>- clear: Limpiar la terminal</TerminalOutput>);
        ld.push(<TerminalOutput></TerminalOutput>);
        break;
      case "cert":
        ld.push(<TerminalOutput>Certificaciones:</TerminalOutput>);
        ld.push(
          <TerminalOutput>- Full Stack Web Developer - PERN</TerminalOutput>
        );
        ld.push(
          <TerminalOutput>- Full Stack Web Developer - MERN</TerminalOutput>
        );
        break;
        case "pl":
        ld.push(<TerminalOutput>JavaScript</TerminalOutput>);
        ld.push(<TerminalOutput>Python</TerminalOutput>);
        ld.push(<TerminalOutput>Java</TerminalOutput>);
        ld.push(<TerminalOutput>SQL</TerminalOutput>);
        ld.push(<TerminalOutput>HTML</TerminalOutput>);
        ld.push(<TerminalOutput>CSS</TerminalOutput>);
        break;
        default:
        ld.push(
          <TerminalOutput>
            Lo siento, no entiendo lo que quieres decir. Escribe "help" para ver
            los comandos disponibles
          </TerminalOutput>
        );
        break;
    }
    setTerminalLineData(ld);
  };

  //   (terminalInput) =>{
  //     console.log(`New terminal input received: '${terminalInput}'`)
  //     setTerminalLineData([...terminalLineData, <TerminalOutput>{terminalInput}</TerminalOutput>])
  //   }

  return (
    <div className="container text-sm">
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">Terminal</h2>
      <Terminal
        name="Bienvenido a la terminal de jgxdev"
        colorMode={ColorMode.Dark}
        onInput={onInput}
        height="60vh"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
