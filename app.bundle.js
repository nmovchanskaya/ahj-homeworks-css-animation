!function(){"use strict";(new class{constructor(){}bindToDOM(){this.buttton=document.querySelector(".button-collapse"),this.collapsedElem=document.querySelector(".collapsed"),this.textElem=document.querySelector(".collapsed__text"),this.buttton.addEventListener("click",(t=>{this.buttton.classList.toggle("button-collapse_clicked"),this.collapsedElem.classList.toggle("collapsed__show"),this.textElem.classList.contains("collapsed__text")?setTimeout((()=>{this.textElem.classList.toggle("collapsed__text")}),200):this.textElem.classList.toggle("collapsed__text")}))}}).bindToDOM(),(new class{constructor(){}bindToDOM(){this.butttonPopup=document.querySelector(".button-popup"),this.popupElem=document.querySelector(".popup"),this.buttonHideForm=document.querySelector(".button-hide-form"),this.butttonPopup.addEventListener("click",(t=>{this.popupElem.classList.toggle("popup_shown"),this.butttonPopup.classList.toggle("button-popup_hidden")})),this.buttonHideForm.addEventListener("click",(t=>{this.popupElem.classList.toggle("popup_shown"),this.butttonPopup.classList.toggle("button-popup_hidden")}))}}).bindToDOM()}();