export default class Popup {
  constructor() {
  }

  bindToDOM() {
    this.butttonPopup = document.querySelector('.button-popup');
    this.popupElem = document.querySelector('.popup');
    this.buttonHideForm = document.querySelector('.button-hide-form');

    this.butttonPopup.addEventListener('click', (e) => {
      this.popupElem.classList.toggle('popup_shown');
      this.butttonPopup.classList.toggle('button-popup_hidden');
    });

    this.buttonHideForm.addEventListener('click', (e) => {
      this.popupElem.classList.toggle('popup_shown');
      this.butttonPopup.classList.toggle('button-popup_hidden');
    });
  }
}
