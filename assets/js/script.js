/* Paulo Soares - Terminal Script
    Finalidade: Estética, Interatividade, Typewriter e Giro Automático
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensagens de Console (Integridade do Sistema)
    console.log("%c[!] SYSTEM CHECK: INTEGRITY VERIFIED", "color: #00ff41; font-weight: bold; font-size: 16px; background: #0d0d0d; padding: 5px;");
    console.log("%cUsuário: soarespaullo@zer0-day\nStatus: Pronto para novos desafios.", "color: #94a3b8; font-family: monospace;");

    // 2. Iniciar Efeito Typewriter
    const meuSubtitulo = ">_ SysAdmin | Defesa Cibernética | Forense Digital";
    typeWriter(meuSubtitulo, "typing", 70);

    // 3. Lógica da Foto de Perfil (Giro com retorno automático)
    const profileFlip = document.querySelector('.profile-flip');
    if (profileFlip) {
        profileFlip.addEventListener('click', function() {
            // Se já estiver virada, ignora o clique para não resetar o timer no meio
            if (this.classList.contains('flipped')) return;

            // Adiciona a classe que faz girar
            this.classList.add('flipped');

            // Retorna ao normal automaticamente após 2500ms (2.5 segundos)
            setTimeout(() => {
                this.classList.remove('flipped');
            }, 2500);
        });
    }
});

/**
 * Função Typewriter (Efeito Máquina de Escrever)
 */
function typeWriter(texto, elementoId, velocidade) {
    let i = 0;
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        }
    }
    digitar();
}

/**
 * Gerenciamento da Seção de Certificados (achievements.log)
 * Alterna a visibilidade dos certificados extras
 */
function toggleCerts() {
    const extra = document.getElementById('more-certs');
    const btn = document.getElementById('toggle-btn');

    if (extra.style.display === "block") {
        extra.style.display = "none";
        btn.innerText = "[ tail -f achievements.log ]";
    } else {
        extra.style.display = "block";
        btn.innerText = "[ :q (quit_log) ]";
    }
}