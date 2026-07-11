document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');

    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Nicodemo | Consultoria & Investimentos',
                text: 'Atendimento exclusivo em gestão patrimonial e financeira com Cristiane Nicodemos.',
                url: window.location.href
            };

            // Tenta usar o compartilhamento nativo do celular (WhatsApp, Insta, etc)
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Compartilhamento cancelado ou não executado.');
                }
            } else {
                // Fallback para Desktop: Copia o link para o Clipboard
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    
                    // Feedback visual rápido sem inflar o DOM
                    const originalText = shareBtn.innerHTML;
                    shareBtn.innerText = '¡Link Copiado!';
                    shareBtn.style.color = '#2ed573';
                    
                    setTimeout(() => {
                        shareBtn.innerHTML = originalText;
                        shareBtn.style.color = '';
                    }, 2000);
                } catch (err) {
                    console.error('Falha ao copiar link: ', err);
                }
            }
        });
    }
});