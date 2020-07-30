import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`

export const UsersContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    flex-wrap: wrap;
    justify-content: center;

`
export const Area = styled.div`
    display: flex;
    flex-wrap: wrap;


`
export const PeopleBox = styled.li`
    height: 260px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
`


export const Profile = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    img{
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 2px solid #bbb;
        background-position: center center;
        background-size: cover;
    }
`

export const Details = styled.span`
    display: flex;
    flex-direction: column;
    height: 35%;
    background: #fff;
    border-radius: 0 0 5px 5px ;
    border-top: 1px solid #ddd;

    span{
        text-align: center;
        strong{
            font-size: 18px;
        }
        p{
            font-style: italic;
        }
    }
`

export const Selected = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    


    button{
        background: #01438f;
        border: none;
        width: 70px;
        height: 25px;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;

        &:hover{
            background: #004ea7;
        }
        

    }
    strong{
        color: green;
    }
`