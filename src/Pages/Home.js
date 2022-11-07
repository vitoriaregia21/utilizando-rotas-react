import { GiTowerBridge} from 'react-icons/gi';
function Home (){
    return(
        <div className="HomeSite">
        <img src="https://a.cdn-hotels.com/gdcs/production65/d66/14724f91-e713-45a4-89c2-b5aa6e7a9420.jpg?impolicy=fcrop&w=800&h=533&q=medium"></img>
        <div className="TextoHome">
        <h1> <GiTowerBridge/> Recife antigo</h1>
        <h3>Recife, mais conhecido como Recife Antigo, é um bairro da cidade do Recife, Pernambuco, Brasil que corresponde à parte leste do seu Centro Histórico. Em seu ponto mais oriental, no Porto do Recife, situa-se a Praça Rio Branco – o Marco Zero, margeada pelo encontro dos rios Capibaribe e Beberibe com o Oceano Atlântico.</h3>
        <div><h4 className="DestaqueHome">Além de caminhar sem rumo pelas ruas de paralelepípedos, lembrando sempre de olhar pra cima pra paquerar os prédios históricos, um dia no Recife Antigo inclui um punhado de atrações massa, sem falar nos bons bares e restaurantes. E apesar de ser um dos principais cartões postais recifenses, o bairro não é só pra turista ver: ele também é o maior polo tecnológico e um dos principais centros de lazer e cultura da cidade.</h4>
        </div>
        </div>
        
        </div>
    )
}

export default Home;