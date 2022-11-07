function Trabalhe() {
    return (
        <div className="ajuda">
            <center>
                <div className="Forms">
                    <form action="/pagina-processa-dados-do-form" method="post">
                    <h2>Você precisa de ajuda?</h2>
                        <div>
                            <label className="inputumlabel" for="nome">Nome:</label>
                            <  input type="text" id="nome" name="usuario_nome" className="inputum" />
                        </div>
                        <div>
                            <label className="inputdoislabel"for="email">E-mail:</label>
                            <input type="email" id="email" name="usuario_email" className="inputdois"/>
                        </div>
                        <div>
                            <label className="inputlabel" for="msg">Mensagem:</label>
                            <textarea id="msg" name="usuario_msg" className="inputtres"></textarea>
                        </div>

                        <div class="button">
                            <button type="submit">Enviar sua mensagem</button>
                        </div>
                    </form>

                </div>
            </center>
        </div>

    )
}

export default Trabalhe;