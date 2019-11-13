let modalAtivo = false

function criaModal(item) {
    if (!modalAtivo) {
        modalAtivo = true
        modal.style.display = "block"
        let foto = item.src
        let nome = item.name
        let descricao = item.parentElement
        descricao = descricao.textContent
        modal.insertAdjacentHTML('beforeend', `
        <div class="content">
            <div id="fechar"><a onclick='fecharModal(this)' href='#'><i class="material-icons">clear</i></a></div>
            <img id="foto" src="${foto}" alt="Foto do membro clicado">
            <div id="nome">${nome}</div>
            <div id="descricao">${descricao}</div>
            <div id="endFloat"></div>
        </div>`)
    }
}

function fecharModal(item){
    modalAtivo = false
    modal.style.display = "none"
    item.parentElement.parentElement.remove()
}