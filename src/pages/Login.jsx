import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(55,255,255,0.5)
        
        ),
        url("https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const  Wrapper = styled.div`
    width: 40%;   
    padding: 20px;
    backgound-color: white;
`;
const  Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const  Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const  Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const  Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a``;

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>Forget Password?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login