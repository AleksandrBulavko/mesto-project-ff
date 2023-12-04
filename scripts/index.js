const placesList = document.querySelector('.places__list');

const cardTemplate = document.querySelector('#card-template').content;

function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = link;

    cardElement.querySelector('.card__title').textContent = name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
};

function deleteCard(evt) {
    const item = evt.target.closest('.card');
    item.remove();
}

initialCards.forEach(function (element) {
    placesList.append(createCard(element.name, element.link, deleteCard));
});


