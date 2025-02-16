import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`

export const Banner = styled.div`
  background-color: #301534;
  color: #333;
  height: 30%;
`
export const Modal = styled.div`
  background-color: #ffff;
  color: #333;

  height: 50%;
  width: 40%;
  position: absolute;

  border-radius: 15px;
  border: 1px solid #c7c7c7;
  top: 20%;
  padding: 15px;
  box-shadow: black 0px 0px 25px;
`

export const Star = styled.div`
  width: 2em;
  height: 2em;
  > #axis-x {
    width: 2em;
    height: 0.5em;
    background-color: #b42af2;
  }

  > #axis-y {
    width: 2em;
    height: 0.5em;
    background-color: #b42af2;
    transform: rotate(90deg);
    position: relative;
    bottom: 25%;
    border-radius: 50em;
    /* clip-path: circle(50% at 50% 50%); */
  }
`