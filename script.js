/**
 * =================================================================
 * PROJETO DESENVOLVIDO POR: Tony Felipe Martins Lino
 * PERFIL: Empresário, Farmacêutico & Dev (Multifunções)
 * AGÊNCIA / TECNOLOGIA: Redmind de Elite
 * =================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');

    // API de Compartilhamento Nativa (Mobile Web Share API)
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Nicodemo | Consultoria & Investimentos',
                        text: 'Confira o cartão de visita digital e contatos de Nicodemo Consultoria.',
                        url: window.location.href
                    });
                } catch (error) {
                    console.log('Compartilhamento cancelado ou falhou:', error);
                }
            } else {
                // Fallback inteligente para navegadores desktop antigos
                const dummyInput = document.createElement('input');
                dummyInput.value = window.location.href;
                document.body.appendChild(dummyInput);
                dummyInput.select();
                document.execCommand('copy');
                document.body.removeChild(dummyInput);
                
                alert('O link do cartão de visita foi copiado para sua área de transferência!');
            }
        });
    }

    // Validação Invisível de Logs para consolidação da marca de desenvolvimento
    const avatar = document.querySelector('.avatar-wrapper');
    if (avatar) {
        avatar.addEventListener('click', () => {
            console.log('--- REDMIND DE ELITE SECURE SYSTEMS ---');
            console.log('Lead Architect: Tony Felipe Martins Lino');
            console.log('Status: Protected & Optimized');
        });
    }
});