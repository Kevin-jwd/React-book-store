import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";

function Register() {
    return (
        <>
            <Title size="large">회원가입</Title>
            <RegisterStyle>
                <form>
                    <fieldset>
                        <InputText placeholder="이메일" />
                    </fieldset>
                    <fieldset>
                        <InputText placeholder="비밀번호" />
                    </fieldset>
                    <fieldset>
                        <Button size="medium" scheme="primary">회원가입</Button>
                    </fieldset>
                </form>
            </RegisterStyle>
        </>
    );
}

const RegisterStyle = styled.div``;

export default Register;
