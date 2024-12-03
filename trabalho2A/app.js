const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach((flashcard) => {
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flip');
    });
});
