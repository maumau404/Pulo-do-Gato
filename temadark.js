// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById('botao-dark');
    const meuBody = document.body;
    
    // 1. VERIFICAÇÃO AO CARREGAR: O tema dark já estava salvo antes?
    const temaSalvo = localStorage.getItem('temaEscuro');

    if (temaSalvo === 'ativo') {
        meuBody.classList.add('dark-mode');
        if (botao) botao.checked = true;
    }

    // 2. Ouvinte de clique para colocar ou tirar a classe "dark-mode"
    if (botao) {
        botao.addEventListener('change', () => {
            if (botao.checked) {
                meuBody.classList.add('dark-mode');
                localStorage.setItem('temaEscuro', 'ativo'); // Salva na memória do navegador
            } else {
                meuBody.classList.remove('dark-mode');
                localStorage.setItem('temaEscuro', 'inativo'); // Salva na memória do navegador
            }
        });
    }
});