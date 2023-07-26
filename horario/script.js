function carregar() {
    let mensagem = window.document.getElementById('mensagem')
    let foto = window.document.getElementById('foto') 
    let data = new Date()
    let horario = data.getHours()
    mensagem.innerHTML = `Agora são ${horario} horas.`
    if (horario >= 6 && horario < 12) {
        foto.src = 'img/manha.png'
        document.body.style.background = '#47D101'
    } else if (horario >= 12 && horario < 18) {
        foto.src = 'img/tarde.png'
        document.body.style.background = '#D1A401'
    } else if (horario >= 18 && horario < 24) {
        foto.src = 'img/noite.png'
        document.body.style.background = '#1E2C62'
    } else {
        foto.src = 'img/madrugada.png'
        document.body.style.background = '#2F323E'
    }
}
