import styled from 'styled-components';
// Overlay
export const Overlay = styled.div`
top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;


  .modalWrapper {
    z-index: 3;
  position: relative;
  width: 400px;
  height: 400px;
  padding: 40px;
  background-color: beige;
  }
    

  .iconClose {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
}
`