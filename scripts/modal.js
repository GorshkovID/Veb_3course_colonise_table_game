// Открыть модальное окно
document.getElementById("open-rules-btn").addEventListener("click", function () {
    document.getElementById("rules").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-rules-modal-btn").addEventListener("click", function () {
    document.getElementById("rules").classList.remove("open")
})

// Закрыть модальное окно с помощью Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("rules").classList.remove("open")
    }
})

// Закрыть модальное окно при клике вне его
document.querySelector("#rules .rules_content").addEventListener('click', event => {
    event._isClickWidthInModal = true;
});
document.getElementById("rules").addEventListener('click', event => {
    if (event._isClickWidthInModal) return;
    event.currentTarget.classList.remove('open');
})
