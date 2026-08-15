document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    // Переключение мобильного меню и крестика
    function toggleMenu() {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    burgerBtn.addEventListener('click', toggleMenu);

    // Закрываем меню при клике на любую ссылку
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Закрываем меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Авто-выбор тарифа при клике на карточку
    const selectServiceBtns = document.querySelectorAll('.select-service');
    const serviceSelect = document.getElementById('service');

    selectServiceBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedValue = e.target.getAttribute('data-service');
            if (serviceSelect && selectedValue) {
                serviceSelect.value = selectedValue;
            }
        });
    });

    // Отправка формы в WhatsApp
    const whatsappForm = document.getElementById('whatsappForm');

    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const phoneNumber = "77067067172";

        const name = document.getElementById('name').value.trim();
        const service = document.getElementById('service').value;
        const details = document.getElementById('details').value.trim();

        let message = `Здравствуйте! Меня зовут *${name}*.\n\n`;
        message += `Выбранный тариф/услуга: *${service}*\n`;
        if (details !== '') {
            message += `Детали задачи: ${details}\n`;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});