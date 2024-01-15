import styled from "styled-components";

function ConteudoHeavy() {
  return (
    <StyledHeavy>
      <h2>Heavy Metal</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam error
        magnam reiciendis explicabo aliquam in eaque. Ea nam asperiores
        similique.
      </p>
    </StyledHeavy>
  );
}

const StyledHeavy = styled.section`
  padding: 2rem;
  border: 1rem solid black;
  width: 100%;
`;

export default ConteudoHeavy;
