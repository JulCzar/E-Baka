let modalAtivo = false

function modal(item) {
    if (!modalAtivo) {
        modalAtivo = true
        let foto = item.src
        let nome = item.name
        let descricao = item.parentElement
        let modal = document.getElementById("modal")
        descricao = descricao.textContent
        modal.style = "display: block"
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
    let modal = document.getElementById("modal")
    modal.style = "display: none"
    item.parentElement.parentElement.remove()
}