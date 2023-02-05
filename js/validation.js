const phoneInput = document.getElementById('phoneNumber'),
      firstName = document.getElementById('firstName'),
      secondName = document.getElementById('secondName');

const regex = /[A-Za-zA-Яа-яЁё]/g,
      regexNum = /[0-9]/g;

phoneInput.oninput = function(){
  this.value = this.value.replace(regex, '');
}

firstName.oninput = function(){
    this.value = this.value.replace(regexNum, '');
}

secondName.oninput = function(){
    this.value = this.value.replace(regexNum, '');
}

//Маска для телефона
const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
});



