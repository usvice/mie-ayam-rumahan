const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const orderModal = document.getElementById('orderModal');
const sendOrderButton = document.getElementById('sendOrderButton');

openModalButton.addEventListener('click', () => {
    orderModal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    orderModal.style.display = 'none';
});

sendOrderButton.addEventListener('click', () => {
    const whatsappNumber = "6289529058558"; // Nomor WhatsApp Anda
    const customerName = document.getElementById('customerName').value;
    const orderMessage = document.getElementById('orderMessage').value;

    if (!customerName || !orderMessage) {
        alert('Harap isi semua kolom sebelum melanjutkan!');
        return;
    }

    const message = `Halo, saya ${customerName} ingin memesan: ${orderMessage}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    orderModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
});
