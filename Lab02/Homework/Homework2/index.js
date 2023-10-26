document.addEventListener('DOMContentLoaded', function() {
    // Tạo menu
    const menuItems = ['Project', 'Experience', 'Abilities', 'Projects', 'Contact'];
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    document.body.appendChild(menuContainer);

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.textContent = item;
        menuContainer.appendChild(menuItem);

        menuItem.addEventListener('click', function() {
            // Điều hướng đến phần tương ứng
            const section = document.getElementById(item.toLowerCase());
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
