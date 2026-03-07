/* Paulo Soares - Terminal Script
    Finalidade: Estética e Interatividade de Console
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensagem para Recrutadores no Console (F12)
    console.log(
        "%c[!] SYSTEM CHECK: INTEGRITY VERIFIED", 
        "color: #00ff41; font-weight: bold; font-size: 16px; background: #0d0d0d; padding: 5px;"
    );
    console.log(
        "%cUsuário autenticado: soarespaullo@zer0-day\nStatus: Pronto para novos desafios :)\n\nSe você está analisando este código, vamos conversar sobre segurança!", 
        "color: #94a3b8; font-family: monospace;"
    );

    // 2. Log de 'Uptime' (Simulação de log de servidor no console)
    const loginTime = new Date().toLocaleString('pt-BR');
    console.log(`[i] Sessão iniciada em: ${loginTime}`);
});

/* Dica: Se quiser adicionar algum efeito de digitação 
   no futuro, este é o lugar!
*/