const container = document.getElementById("container");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho)
    const dados = await resposta.json()
    return dados;
}

const acha_cookie = (chave) => {
    const linha_de_cookies = document.cookie.split(";");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(`${chave}=`));
    return procurado.split
}

const manipulaClick = (e) => {
    const id = e.currentTarget.dataset.id;
    const nome = e.currentTarget.dataset.nome;

    document.cookie = `id=${id}`;
    document.cookie = `nome=${nome}`;

    window.location = `detalhes.html?id=${id}`;
}

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    const link = document.createElement("a");
    const span_id = document.createElement("span")

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes
    cartao.appendChild(descri);

    /*link.innerHTML = "Saiba mais..."
    link.href = `detalhes.html?id=${atleta.id}&altura=${atleta.altura}`
    cartao.appendChild(link);*/

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.nacimento = atleta.nascimento;

    container.appendChild(cartao);
}

pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    ( variavel ) => {
        variavel.forEach((atleta) => montaCard(atleta))
    console.log("Isso imprime depois")
    }
)

console.log("Isso imprime antes");


