// Função para validar o login
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginResult = document.getElementById("loginResult");
  
    // Verifica se o nome de usuário e a senha estão corretos
    if (username === "lucas" && password === "abc") {
      loginResult.textContent = "Login bem-sucedido!";
      loginResult.style.color = "#4caf50"; // Verde para sucesso
      // Redireciona para outra página após o login bem-sucedido
      window.location.href = "parte2/index.html";
    } else if (username == "" || password == "") {
      loginResult.textContent = "Por favor, preencha todos os campos!";
      loginResult.style.color = "#f44336"; // Vermelho para erro
    } else {
      loginResult.textContent = "Seu nome de usuário ou senha está incorreto!";
      loginResult.style.color = "#f44336"; // Vermelho para erro
    }
  }
  
  // Adiciona um ouvinte de evento ao formulário para chamar a função validateLogin
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    validateLogin(); // Chama a função para validar o login
  });
  