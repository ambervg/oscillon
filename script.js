// Hamburger menu 
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Toggle buttons FAQ page
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


document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('inspiration-board');
    const items = Array.from(board.children);
    
    // Function to shuffle the array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle the items
    const shuffledItems = shuffle(items);

    // Remove all items from the board and re-append them in the new order
    board.innerHTML = "";
    shuffledItems.forEach(item => board.appendChild(item));
});

