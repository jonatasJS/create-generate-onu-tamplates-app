import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 30px;
`;

export const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Main = styled.form`
  min-height: 100%;
  padding: 4rem 0;
  display: flex;
  gap: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0.8, 0.8);
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  input[type="checkbox"] {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }

  .card {
    background-color: #fff !important;
  }
`;

export const ContentBox = styled.div`
  display: grid;
  gap: 10px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 2rem;
  flex-wrap: wrap;
  max-width: 800px;
  width: 55vw;

  &.activeM label .inputText {
    background-color: rgb(168, 168, 168);
    color: #ffffff;
    border: 1px solid #0070f3;
    font-family: inherit;
    font-size: 1.8rem;
    padding: 3rem 2rem 1rem 2rem;
    border: none;
    border-radius: 2rem;
    width: 100%;
  }
`;

export const GoBackPageBtn = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  align-items: center;
  background-color: #f2f2f2;
  width: 8rem;
  border-radius: 12px;
  box-shadow: #1212121d 0 0 2px 0.5px, inset #1212121d 0 0 3px 0.5px,
    #1212121a 5px 19px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  outline: none;
  padding: 1rem 1.2rem 1rem 0.8rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.1s, -webkit-color 0.2s, box-shadow 0.2s,
    -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: #0070f3 0 0 0 3px, transparent 0 0 0 0;
    color: #0070f3;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Title = styled.h1`
  margin: 0 0 2rem 0;
  /* line-height: 1.15; */
  font-size: 3rem;
  align-items: center;
`;

export const Input = styled.input`
  margin: 1rem;
  padding: 10px 10px;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
`;

export const InputText = styled.input`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 3rem 4.5rem 1rem 2rem;
  border: none;
  border-radius: 2rem;
  background: #eee;
  width: 100%;

  &:focus {
    outline-color: #2196f3;
  }

  &:not(:placeholder-shown) + .label,
  &:focus + .label {
    top: 0.7rem;
    transform: scale(0.75);
  }

  &:focus + .label {
    color: #2196f3;
  }
`;

export const Btn = styled.button`
  padding: 2rem 3rem;
  border: none;
  background: #2196f3;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 2rem;
  width: 54%;
  margin-top: 2rem;
  box-shadow: 0 5px 5px #00000020;

  &:active {
    box-shadow: none;
  }

  &:hover {
    background: #2180f9;
  }
`;

export const Label = styled.span`
  pointer-events: none;

  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #00000070;
  font-weight: 500;
  font-size: 1.8rem;

  transition: all 0.2s;
  transform-origin: left;
`;

export const Inp = styled.label`
  position: relative;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: #00000070;
`;
