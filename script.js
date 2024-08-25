document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle the active class
            item.classList.toggle('active');

            // Get the answer element
            const answer = item.querySelector('.faq-answer');

            // If the item is active, set max-height to the scroll height of the answer
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // If not, collapse the answer
                answer.style.maxHeight = '0';
            }
        });
    });
});
