import styled from "styled-components";

function ConteudoClassic() {
  return (
    <StyleClassic>
      <h2>Classic rock</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sint natus
        officia!
      </p>
    </StyleClassic>
  );
}

const StyleClassic = styled.section`
  padding: 2rem;
  border: 1rem solid black;
  width: 100%;
`;

export default ConteudoClassic;
