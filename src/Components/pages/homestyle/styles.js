import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 70px;
    /* top: 20vh; */
    display: flex;
    flex-direction: column;
    
`


export const Banner = styled.div`
    background-image: url(${require(`../../Images/image1.jpg`)});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 70vh;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: #fff;
    

`

export const RadioAreas = styled.span`
    display: flex;
    

`

export const Radios = styled.input`
    margin: 3px;
    
`

export const DataSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
`
export const Postspace = styled.div`
    display: flex;
    width: 80%;
    margin: 20px 0 20px 0;
    flex-wrap: wrap;
    justify-content: center;
`

export const LinkWorks = styled.span`
    /* background-image: url(${require("../../Images/image1.jpg")}); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: column;
    min-width: 250px;
    height: 300px;
    background-color: #ddd;
    border-radius: 10px;
    justify-content: center;
    justify-content: space-between;
    margin: 15px;

    
`
export const Category = styled.p`
    padding: 10px;
    font-weight: 500;
    /* background-color: red; */
    color: #fff;
    
`

export const DataPost = styled.span`
    width: 100%;
    height: 27%;
    background-color: #fff;
    display: flex;
    border-radius: 0 0 10px 10px;
    justify-content: center;
    align-items: center;
    
    
`

export const UserImage = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #ddd;
    background-image: url(${require("../../Images/image1.jpg")});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
`
export const UserName = styled.a`
    color: #444;
    font-size: 18px;
    padding: 0 5px;
    font-weight: 500;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
        
    }

`

export const Categories = styled.div`
    /* background-image: url(${require("../../Images/Diversao.png")});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center; */
    background-color: #f1f1f2;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 550px;
    position: relative;
    margin: 0 auto;
    top: 0;
    left: 0;

    
`

export const Caixa = styled.div`
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-Items: center;
    
`

export const CardsWrap = styled.div`
    width: 85%;
    display: flex; 
    position: absolute;
    transition: transform 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`
export const Arrows = styled.button`
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 20pt;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;

    &:hover{
        transform: scale(1.1)
    }

`
export const CardsCategory = styled.div`
     background-image: url(${require("../../Images/image1.jpg")});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    height: 500px;
    width: 300px;
    min-width: 300px;
    margin: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 15px;
    display: flex;
    flex: 1;
    border: none;
    flex-direction: column;
    justify-content: flex-end;

    &:hover{
        transform: scale(0.95)
    }
`

export const CategoryDescriprion = styled.span`
    height: 150px;
    width: 100%;
    background: #fff;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
`
export const TitleCategory = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin: 15px;
`

export const DescriptionCategory = styled.p`
    align-self: center;
    height: 70px;
    margin: auto;
    width: 90%;
    color: #ccc;
`

export const Breve = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    background: #ddd;
`

export const Explaination = styled.div`
    display: flex;
    width: 95%;
    height: 95%;
    justify-content: space-between;
    
    p{
        font-size: 14pt;
        width: 30%;
        align-self: center;
        font-weight: 500;

    }
    span{
        width: 40%;
        height: 100%;
        border-radius: 15px;
        background-image: url(${require("../../Images/image1.jpg")});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
`
export const Extra = styled.div`
    display: flex;
    height: 500px;
    background: #ccc;
`
export const Copyright = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    background: #bbb;

    p{
        font-style: italic;
        font-size: 10px;
    }
`