const placesList = document.querySelector('.places__list');

function createCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__title').textContent = name;
    placesList.append(cardElement);

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
}

function deleteCard(evt) {
    const item = evt.target.closest('.card');
    item.remove();
}

initialCards.forEach(function (element) {
    createCard(element.name, element.link)
})


