const cards = document.querySelectorAll('.card')
const unreadNotifications = document.querySelectorAll('.card_bg')
const unreadCount = document.getElementById('unread_count')
const redPoint = document.querySelectorAll('.red_point')
const boxComment = document.querySelectorAll('.comment')
const markAllRead = document.getElementById('mark_all')
let count = unreadNotifications.length

// Initial unread notifications counter
unreadCount.innerHTML = count

// Removing unread notifications, one by one
markAllRead.addEventListener('click', () => {
    unreadNotifications.forEach(element => {
        element.classList.remove('card_bg')
    });
    redPoint.forEach(element => {
        setTimeout(() => {
            element.classList.remove('red_point')
        }, 200);
    });
    count = 0
    unreadCount.innerHTML = count
})

// Removing unread notifications, all 
unreadNotifications.forEach((item, index) => {
    item.addEventListener('click', function () {
        item.classList.remove('card_bg')
        setTimeout(() => {
            redPoint[index].classList.remove('red_point')
            count--
            if (count >= 0) {
                unreadCount.innerHTML = count
            }
        }, 200);
    })
});

// Showing/hiding comments
cards.forEach((item, index) => {
    item.addEventListener('click', () => {
        let value = index
        let allItems = [0, 1, 2, 3, 4, 5, 6]
        allItems.forEach(element => {
            if (value != element) {
                boxComment[element].classList.remove('show')
                boxComment[element].classList.add('hidden')
            } else {
                boxComment[value].classList.remove('hidden')
                boxComment[value].classList.add('show')
            }
        });
    })
});









