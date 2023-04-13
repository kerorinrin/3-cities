const citySelect = document.getElementById('city-select');
const columns = document.querySelectorAll('.column');

citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value;
    columns.forEach(column => {
        if (selectedCity === 'all') {
            column.style.display = 'flex';
        } else if (column.id === selectedCity) {
            column.style.display = 'block';
        } else {
            column.style.display = 'none';
        }
    });
});