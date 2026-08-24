// ========================================
// CADASTRO
// ========================================

function cadastrar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    // Verifica se algum campo esta vazio
    if (nome === "" || email === "" || senha === "") {
        document.getElementById("mensagem").innerText =
            "Preencha todos os campos!"

        return;
    }

    //salva os dados no navegador
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    // Vai para a tela de login
    window.location.href = "login.html";
}

// ========================================
// LOGIN
// ========================================

function entrar() {

    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("senhaLogin").value;

    // Pega os dados salvos
    let emailCadastrado = localStorage.getItem("email");
    let senhaCadastrada = localStorage.getItem("senha");

    // Verifica os dados
    if (
        email === emailCadastrado &&
        senha === senhaCadastrada
    ) {

        // Salva que o usuário está logado
        localStorage.setItem("logado", "true");

        // Vai para a página de boas-vindas
        window.location.href = "bemvindo.html";

    } else {

        document.getElementById("mensagemLogin").innerText =
            "E-mail ou senha incorretos!";
    }
}
// ========================================
// PÁGINA DE BOAS-VINDAS
// ========================================

if (document.getElementById("bemVindo")) {
    let logado = localStorage.getItem("logado");

    //se nao estiver logado, volta para o login
    if (logado !== "true") {

        window.location.href = "login.html";

    } else {
        let nome = localStorage.getItem("nome");

        document.getElementById("bemVindo").innerText = "Bem-vindo, " + nome + "!";
    }
}

// ========================================
// SAIR / LOGOUT
// ========================================

function sair() {

    // Remove apenas o estado de login
    localStorage.removeItem("logado");

    // Volta para o login
    window.location.href = "login.html";
}