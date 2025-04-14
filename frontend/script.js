document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    // Simulando "banco de dados"
    const usuariosCadastrados = [
        { email: 'teste@email.com', senha: '123456' },
        { email: 'samuel@email.com', senha: 'senhaforte' }
    ];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validações iniciais
        if (!usuario || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!emailRegex.test(usuario)) {
            alert('Insira um e-mail válido.');
            return;
        }

        // Verificando se o usuário existe no "banco de dados"
        const usuarioEncontrado = usuariosCadastrados.find(u => u.email === usuario && u.senha === senha);

        if (usuarioEncontrado) {
            alert('Login bem-sucedido!');
            console.log('Usuário logado:', usuarioEncontrado);
            // Aqui você pode redirecionar ou iniciar a sessão
        } else {
            alert('E-mail ou senha incorretos!');
        }
    });
});
