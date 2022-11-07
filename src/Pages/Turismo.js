import {FaGlasses} from 'react-icons/fa';
function Turismo() {
    return (
        <div className="Informacoes">
            <h1>
                Vamos turistar? <FaGlasses/>
            </h1>
            <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/dicas-praia-dos-carneiros-capa2019-01-820x430.jpg"></img>
            <h4> Praia de carneiros</h4>
            <img className="imagem" src="https://destinosnotaveis.com.br/wp-content/uploads/2020/12/porto-de-galinhas-pe.jpg"></img>
            <h4>Praia de Porto de galinhas</h4>
            <img className="imagem" src="https://www.viajali.com.br/wp-content/uploads/2020/04/praia-do-paiva.jpg"></img>
            <h4>Praia do Paiva</h4>
            <img className="imagem" src="https://www.temporadalivre.com/uploads/editor/pictures/b9ededb69840/content_201806151529085360calhetas3.jpg"></img>
            <h4>Praia de Calhetas</h4>
        </div>
    )
}

export default Turismo;