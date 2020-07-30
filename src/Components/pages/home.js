import React, { Component } from 'react'
import { Container, Banner, DataSection, Postspace, LinkWorks, DataPost, UserImage, UserName, Category, Categories, Arrows, CardsCategory, CardsWrap, Caixa, CategoryDescriprion, TitleCategory, DescriptionCategory, Breve, Explaination, Extra, Copyright } from './homestyle/styles'
import posts from '../../assets/posts/workposts'
import data from '../../assets/posts/categories'
import '../Images/image1.jpg'



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: data,
            category: data[0]
        }
    }

    componentDidMount() {
        sessionStorage.setItem('capa', 'diversao.png')
        sessionStorage.setItem('perfil', 'avatar.JPG')
    }
    nextcat = () => {
        const newIndex = this.state.category.index + 3;
        this.setState({
            category: data[newIndex]
        })


    }
    prevcat = () => {
        const newIndex = this.state.category.index - 3;
        this.setState({
            category: data[newIndex]
        })
    }
    render() {
        const { categories, category } = this.state;
        return (
            <Container>
                <Banner scr={""}>
                    <div>
                        <h1>Adira já ao seu escritório remoto</h1>
                        <span>Trabalhe </span>
                    </div>
                    {/* <RadioAreas>
                <Radios type="radio"/>
                <Radios type="radio"/>
                <Radios type="radio"/>
                </RadioAreas> */}

                </Banner>

                <DataSection>
                    <h1>Recent Works</h1>
                    <Postspace>
                        {posts.map((post, index) =>

                            <LinkWorks key={index} style={{ backgroundImage: '' }} >
                                <Category>#{post.categories}</Category>
                                <DataPost>
                                    <UserImage scr={""} />
                                    <UserName href={post.link}>{post.auth}</UserName>
                                </DataPost>
                            </LinkWorks>
                        )}
                    </Postspace>
                </DataSection>
                <h1 style={{ padding: "20px 50px" }}>Categories</h1>
                <Categories>

                    <Caixa>
                        <Arrows onClick={() => this.prevcat()} disabled={category.index === 0}></Arrows>
                        <CardsWrap style={{ transform: `translateX(-${category.index * (180 / categories.length - 1)}%)` }} >
                            {categories.map(category =>
                                <CardsCategory key={Math.random()} category={category}>
                                    <CategoryDescriprion>
                                        <TitleCategory>{category.nameCategory}</TitleCategory>
                                        <DescriptionCategory>{category.description}</DescriptionCategory>
                                    </CategoryDescriprion>
                                </CardsCategory>)}

                        </CardsWrap>
                        <Arrows onClick={() => this.nextcat()} disabled={category.index === data.length - 1}></Arrows>

                    </Caixa>

                </Categories>
                <Breve>
                    <Explaination>
                        <p>Esta é a plataforma ideial para manteres em dia o teu negócios mesmo à distância. junta-te a esta familia e põe o teu job a andar..!</p>
                        <span></span>
                    </Explaination>
                </Breve>
                <Extra>

                </Extra>
                <Copyright>
                    <p>Copyright 2020 | Edmilson Balango</p>
                </Copyright>
            </Container>
        );
    }
}

export default Home;