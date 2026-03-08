/* Paulo Soares - Terminal Script
    Finalidade: Estética, Interatividade de Console e Efeito Typewriter
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensagens de Boas-vindas no Console (F12)
    console.log(
        "%c[!] SYSTEM CHECK: INTEGRITY VERIFIED",
        "color: #00ff41; font-weight: bold; font-size: 16px; background: #0d0d0d; padding: 5px;"
    );

    console.log(
        "%cUsuário autenticado: soarespaullo@zer0-day\nStatus: Pronto para novos desafios :)\n\nSe você está analisando este código, vamos conversar sobre segurança!",
        "color: #94a3b8; font-family: monospace;"
    );

    // 2. Log de 'Uptime'
    const loginTime = new Date().toLocaleString('pt-BR');
    console.log(`[i] Sessão iniciada em: ${loginTime}`);

    // 3. Iniciar Efeito de Digitação no Subtítulo
    const meuSubtitulo = "> SysAdmin | Defesa Cibernética | Forense Digital";
    typeWriter(meuSubtitulo, "typing", 70);

});

/**
 * Função Typewriter (Efeito Máquina de Escrever)
 */
function typeWriter(texto, elementoId, velocidade) {
    let i = 0;
    const elemento = document.getElementById(elementoId);
    
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