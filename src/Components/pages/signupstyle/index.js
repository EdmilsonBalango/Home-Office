import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;   
    justify-content: center;
    align-items: center;
`

export const FormSignUp = styled.form`
    margin-top: 80px;
    width: 600px;
    min-height: 500px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.18);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: arrive 1.5s;

        h1{
            margin-top: 30px;
            align-self: center;
        }
        h2{
            margin: 30px;
        }

        @keyframes arrive {
            from{
                opacity: 0;
                transform: translateX(-30%);
            }

            to{
                opacity: 1;
                transform: translateX(0);
            }
            
        }
`

export const FieldsSignup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    
        .caixa{
            align-self: center;
            width: 80%;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 15px;
            outline: none;

            
            &:focus{
                height: 45px;
                border: 1px solid #2997ff;
            }


        }
        
        input.Enviar{
            align-self:center;
            margin: 15px 0 15px 0;
            width: 70%;
            height: 40px;
            border-radius: 5px;
            background: #004ea7;
            border: none;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            color: #fff;

            &:hover{
                background: #013b7c;
            }


        }
    
`