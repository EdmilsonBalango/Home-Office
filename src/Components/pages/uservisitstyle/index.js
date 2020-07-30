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
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 400px;
    background-color: radial-gradient(#4f547c, #232335);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    

`
export const PictureUser = styled.span`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 250px;
    height: 250px;
    background-color: #ddd;
    border-radius: 100%;
    border:  3px solid #444;

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
export const SociaNetworks = styled.div`
    width: 60%;
    min-height: 80px;
    margin-top: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    display: flex;
    padding: 40px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }

`