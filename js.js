function checkRoleRegistration(a) {
    if (a.value == "vendor") {
        document.getElementById("company-site").style.display = 'block';
    } else {
        document.getElementById("company-site").style.display = 'none';
    }
}

function validateForm() {
    if (document.querySelector('form').checkValidity()) {
        let popupBg = document.querySelector('.popup__bg');
        let popup = document.querySelector('.popup');
        let openPopupButtons = document.querySelector('.open-popup');
        let closePopupButton = document.querySelector('.close-popup');

        popupBg.classList.add('active');
        popup.classList.add('active');

        closePopupButton.addEventListener('click', () => {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        });

        document.addEventListener('click', (e) => {
            if (e.target === popupBg) {
                popupBg.classList.remove('active');
                popup.classList.remove('active');
            }
        });
    }
    return false;
}
