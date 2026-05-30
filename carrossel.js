const container = document.querySelector('.container_cards');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Calcula o tamanho de um card + o espaço (gap) para rolar certinho
const getScrollStep = () => {
    const card = document.querySelector('.cards');
    return card.offsetWidth + 20; // 20 é o valor do gap em pixels
};

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
});
