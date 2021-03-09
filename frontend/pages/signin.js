import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/signin';
import SignUp from '../components/Signup';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function Signin() {
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyles>
  );
}
