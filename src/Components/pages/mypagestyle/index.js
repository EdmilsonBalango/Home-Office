import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 70px;
    justify-content:center;
    align-items: center;
`
export const Tumblr = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 400px;
    /* background: radial-gradient(#4f547c, #232335); */
    display: flex;
    align-items: flex-end;
    /* flex-direction: column; */
    justify-content: space-between;
    padding: 20px;
    
    /* span{
        
        button{
            background: #fff;
            width: 100px;
            border-radius: 3px; 
            height: 40px; 
            border: 1px solid #ddd;
            position: absolute;
            cursor: pointer;
        }
    } */

`


export const TumblrUpdateButton = styled.span`
    height: 40px;
    width: 40px;
    border-radius: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    cursor: pointer;
    /* margin-right: 20px;  */
    

`
export const PictureUser = styled.span`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 250px;
    height: 250px;
    background-color: #ddd;
    border-radius: 100%;
    border:  3px solid #444;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    
    
    span{
        background-Color: #444;
        border-Radius: 50px; 
        height: 50px; 
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #fff;
        color: #fff;
        cursor: pointer;
        /* position: absolute;  */
        margin-right: 40px;
    }

`
export const NameUser = styled.h1`
    font-size: 40px;
`

export const UserRestArea = styled.div`
    width: 60%;
    min-height: 180px;
    margin-top: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */

    i{
        padding: 10px;
        font-size: 15px;
        align-self: center;
    }
    
`
export const GroupDetail = styled.div`
    width: 80%;
    display: flex;
    /* height: 100px; */
    justify-content: space-between;
    
    
`
export const PageDetails = styled.span`
        font-size: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: justify;
        /* border-right: 1px solid #ddd; */

        i{
            font-size: 13px;
        }
`
export const Stars = styled.span`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Button = styled.button`
    margin: 10px;
    margin-right: 20%;
    height: 30px;
    width: 110px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    color: #444;
    
`

export const JobFace = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    /* border: 1px solid #000; */
    padding: 5px;
    margin-top: 25px;

    span{
        display: flex;
        align-items: center;

        p{
            font-size: 18px;
            font-weight: 500;
            margin: 5px;
        }
        button{
            padding-right: 10px;
            padding-left: 10px;
            height: 25px;
            margin: 5px;
            background: #01438f;
            border: none;
            border-radius: 3px;
            color: #fff;
            cursor: pointer;
        }
    }

`
export const ImgCompany = styled.span`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid #ddd;
`

export const WorksAndProjects = styled.div`
    width: 60%;
    margin-top: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Fotos = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
    
`

export const Foto = styled.span`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 300px;
    width: 250px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;
    margin: 5px;  

    &:hover{
        cursor: pointer;
        transform: scale(0.98) 


        /* @keyframes puxer {
            from {
                transform: scale(1)
            }
            to{
                transform: scale(1.1)
            }
            
        } */
    }

`