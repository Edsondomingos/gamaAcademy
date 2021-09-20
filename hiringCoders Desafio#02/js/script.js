//Habilita o formulario de inscrição de clientes
const btLogin = document.getElementById("btLogin");

btLogin.addEventListener('click', (e) => {
    document.getElementById("cliente").style.display="contents";
})

//Adiciona os cleintes no LocalStorage
const ok = document.getElementById("ok");
ok.addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let pais = document.getElementById("pais").value;
    let dados = {
        nome,
        email,
        telefone,
        cpf,
        endereco,
        cidade,
        estado,
        pais
    }     
    
    let convert = JSON.stringify(dados);
    localStorage.setItem(`${nome}`, convert);
    btLogin.innerHTML = nome;
    document.getElementById("sair").style.display="contents";
    document.getElementById("cliente").style.display="none";
       
})

//Adiciona os produtos e quantidade no localStorage
let valorInicial = localStorage.setItem("Total de Produtos",0);
function adds(qtd,id){
    devolta = localStorage.getItem("Total de Produtos");
    let total = parseInt(devolta) + qtd;
    console.log(total);
    localStorage.setItem("Total de Produtos",total);
    let atual = document.getElementById("qtd");
    atual.innerHTML = total;
    nome = document.getElementById(id).name;
    let produtos = [];
    produtos.push(nome);
    localStorage.setItem(total, nome);
}

//Remove os dados do localStorage e Salva os em sessionStorage
sair = document.getElementById("sair");
sair.addEventListener('click', (e) => {
    let passar = localStorage;
    let conv = JSON.stringify(localStorage);
    console.log(conv);
    let guardar = [];
    guardar.push(conv);
    sessionStorage.setItem("ultimo acesso",guardar);
    localStorage.clear();
    e.Default();
    
    
})

