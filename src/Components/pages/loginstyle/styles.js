import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    /* background-color: #e5ddd5; */
    /* background-image: url(${require("../../Images/Diversao.png")});
    background-position: center center;
    background-size: cover;
    background-repeat: repeat; */
    justify-content: center;
    align-items: center;
    height: 100vh;

    .Erro{
        width: 350px;
        font-weight: 500;
        font-size: 18px;
        border-radius: 10px;
        margin-top: 5px;
        border: 3px solid #e74242;
        background: #d61d1d;
        padding: 10px;
        color: #fff;
        display:flex;
        justify-content: center;
        align-items: center;
        /* display: none; */
        animation: entrada 2s;
  
    }
    @keyframes entrada {

from{
    opacity: 0;
    transform: translateY(80%);

}

to{
    opacity: 1;
    transform: translateY(0)

}

}
    
`

export const Boxlogin = styled.form`
    height: 450px;
    width: 350px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.18);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    opacity: 1;

    strong{
        font-size: 24px;
    }
`

export const Fields = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    input.caixas{
        width: 100%;
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

    input#buttons{
        margin: 15px 0 15px 0;
        width: 100%;
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

    div{
        display: flex;
        a{
            font-style: italic;
            font-size: 12px;
        }
    }

`
