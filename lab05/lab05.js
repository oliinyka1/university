function tabSwitch(new_tab, new_content) {
    document.getElementById('content_1').style.display = 'none';
    document.getElementById('content_2').style.display = 'none';
    document.getElementById('content_3').style.display = 'none';
    document.getElementById(new_content).style.display = 'block';    

    document.getElementById('tab_1').className = '';
    document.getElementById('tab_2').className = '';
    document.getElementById('tab_3').className = '';
    document.getElementById(new_tab).className = 'active';          
}

function menuSwitch(menu_item) {
    document.querySelectorAll('.menu_items a').forEach(item => {
        item.classList.remove('active');

        if (item.dataset.originalColor) {
            item.style.backgroundColor = item.dataset.originalColor;
        }
    });

    const currentItem = document.getElementById(menu_item);
    currentItem.classList.add('active');

    if (!currentItem.dataset.originalColor) {
        currentItem.dataset.originalColor = window.getComputedStyle(currentItem).backgroundColor;
    }

    currentItem.style.backgroundColor = "darkgoldenrod";

    const submenu = currentItem.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
        const isVisible = submenu.style.display === 'block';

        submenu.style.display = isVisible ? 'none' : 'block';

        if (isVisible) {
            currentItem.style.backgroundColor = currentItem.dataset.originalColor;
        }
    }

    highlightParent(currentItem);

    document.querySelectorAll('.submenu').forEach(sub => {
        if (sub !== submenu && !sub.contains(currentItem)) {
            sub.style.display = 'none';

            const parentItem = sub.previousElementSibling;
            if (parentItem && parentItem.dataset.originalColor) {
                parentItem.style.backgroundColor = parentItem.dataset.originalColor;
            }
        }
    });
}

function highlightParent(item) {
    let parent = item.closest('.submenu')?.previousElementSibling;
    while (parent) {
        if (!parent.dataset.originalColor) {
            parent.dataset.originalColor = window.getComputedStyle(parent).backgroundColor;
        }
        parent.style.backgroundColor = "darkgoldenrod"; 
        parent = parent.closest('.submenu')?.previousElementSibling; 
    }
}
