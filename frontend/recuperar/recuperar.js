document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recuperarForm');
    const novaSenhaContainer = document.getElementById('novaSenhaContainer');
    const mensagem = document.getElementById('mensagem');
  
    let emailValido = false;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const novaSenha = document.getElementById('novaSenha').value;
      const confirmarSenha = document.getElementById('confirmarSenha').value;
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailValido) {
        if (!emailRegex.test(email)) {
          mensagem.textContent = 'Digite um e-mail válido!';
          return;
        }
  
        // Simulando e-mail encontrado no sistema
        if (email === 'samuel@email.com') {
          mensagem.textContent = '';
          novaSenhaContainer.style.display = 'block';
          emailValido = true;
        } else {
          mensagem.textContent = 'E-mail não encontrado.';
        }
      } else {
        if (novaSenha.length < 6) {
          mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.';
          return;
        }
  
        if (novaSenha !== confirmarSenha) {
          mensagem.textContent = 'As senhas não coincidem!';
          return;
        }
  
        mensagem.style.color = 'green';
        mensagem.textContent = 'Senha redefinida com sucesso!';
        console.log(`E-mail: ${email} | Nova senha: ${novaSenha}`);
        // Aqui você enviaria para o backend
      }
    });
  });