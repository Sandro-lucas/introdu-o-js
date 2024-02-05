function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginResult = document.getElementById("loginResult");

    // Exemplo simples de validação (usuário: "lucas", senha: "123")
    if (username === "lucas" && password === "abc") {
        loginResult.textContent = "Login bem-sucedido!";
        loginResult.style.color = "#4caf50";
        // Redireciona para a segunda tela após o login bem-sucedido
        window.location.href = "../parte2/index.html";
    } else if (username == "" || password == "") {
        loginResult.textContent = "Por favor, preencha todos os campos!";
        loginResult.style.color = "#f44336";
    } else {
        loginResult.textContent = "Seu nome de usuário ou senha está incorreto!";
        loginResult.style.color = "#f44336";
    }
}

// Adiciona um ouvinte de evento ao formulário para chamar a função validateLogin
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário
    validateLogin();
});
