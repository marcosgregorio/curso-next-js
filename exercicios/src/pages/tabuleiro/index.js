import { Container } from "./tabuleiro";
import { useMemo } from "react";

export default function tabuleiro() {
  const table = useMemo(() => {
    const rows = [];
    for (let index = 0; index < 8; index++) {
      rows[index] = (
        <div
          key={index}
          style={
            {
              display: 'flex'
            }}
        >
          <div style={{ background: index % 2 == 0 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 1 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 0 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 1 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 0 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 1 ? "white" : "black", width: "200px", height: "200px" }}></div>
          <div style={{ background: index % 2 == 0 ? "white" : "black", width: "200px", height: "200px" }}></div>
        </div >
      )
    }

    return rows;
  });
  return <Container><div style={{ width: '200px', height: '200px' }}>{table}</div></Container>;
}
