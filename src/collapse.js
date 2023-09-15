export default class Collapse {
  contructor() {
  }

  bindToDOM() {
    this.buttton = document.querySelector('.button-collapse');
    this.collapsedElem = document.querySelector('.collapsed');
    this.textElem = document.querySelector('.collapsed__text');

    this.buttton.addEventListener('click', (e) => {
      this.buttton.classList.toggle('button-collapse_clicked');
      this.collapsedElem.classList.toggle('collapsed__show');
      if (!this.textElem.classList.contains('collapsed__text')) {
        // if we hide
        this.textElem.classList.toggle('collapsed__text');
      } else {
        // if we show
        setTimeout(() => {
          this.textElem.classList.toggle('collapsed__text');
        }, 200);
      }
    });
  }
}
