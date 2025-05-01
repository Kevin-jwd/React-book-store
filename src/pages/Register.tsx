import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { Theme } from "../styles/theme";
import { useForm } from "react-hook-form";
import { register as registerAPI } from "../api/auth.api";
import { userAlert } from "../hooks/useAlert";

export interface RegisterProps {
    email: string;
    password: string;
}

function Register() {
    const navigate = useNavigate();
    const showAlert = userAlert();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterProps>({});

    const onSubmit = (data: RegisterProps) => {
        registerAPI(data).then((res) => {
            // 성공
            showAlert("회원가입 성공");
            navigate("/users/login");
        });
    };

    return (
        <>
            <Title size="large">회원가입</Title>
            <RegisterStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText
                            placeholder="이메일"
                            inputType="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="error-text">이메일을 입력해주세요.</p>
                        )}
                    </fieldset>
                    <fieldset>
                        <InputText
                            placeholder="비밀번호"
                            inputType="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p className="error-text">
                                비밀번호를 입력해주세요.
                            </p>
                        )}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            회원가입
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to="/reset">비밀번호 초기화</Link>
                    </div>
                </form>
            </RegisterStyle>
        </>
    );
}

const RegisterStyle = styled.div`
    max-width: ${({ theme }) => (theme as Theme).layout.width.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;
        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    Button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

export default Register;
