import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    
`
export const Boxform = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 5px;
    padding: 10px;

    textarea{
        align-self: center;
        max-width: 80%;
        min-width: 80%;
        max-height: 200px;
        min-height: 200px;
        /* height: 40px; */
        border-radius: 5px;
        border: 1px solid #ddd;
        padding: 10px;
        margin-top: 15px;
        outline: none;

        &:focus{
        border: 1px solid #2997ff;
    }
    }

    div{
        display: flex;
        justify-Content: space-between; 
        align-Items: center; 
        margin-Top: 20px; 
        width: 80%;

        button{
            padding: 10px;
            border: none;
            background-color: #6d6d6d;
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
            outline: none;
            
            &:hover{
                background-color: #525252;
            }
        }
    }
        
    &:focus{
        height: 45px;
        border: 1px solid #2997ff;
    }
    

    select{
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
    strong{
        margin: 20px;
    }
`

export const InputBoxs = styled.input`
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

`


export const SubmitButton = styled.input`
    align-self: center;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    background: #01438f;
    border: none;
    padding: 10px;
    margin-top: 15px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    &:hover{
            background: #004ea7;
        }

`
