// validation password wizards step1
export const validationCheck = (checkboxes) => {
  return Array.from(checkboxes).every(cb=>cb.current.checked)
}

// validation Required password wizards step2
export const validationInput = () => {
  let container = document.querySelector('div.inputStep2')
  let input = container.querySelectorAll('input.required')

  return Array.from(input).every(cb=>cb.value)
}

// validation RegExp password wizards step2
export const validatePassRegExp = ( datas, setDatas, MIN_PASSWORD, MAX_PASSWORD) => {
  let validityStatus = true
  let regex = /[A-Z].*[0-9]|[0-9].*[A-Z]/
  let messagePass = ''
  let messageRepass = ''

  if (datas.pass.length < MIN_PASSWORD) {
    validityStatus = false;
    messagePass = 'Longitud mínima ' + MIN_PASSWORD + ' caracteres'
  }

  if (datas.pass.length > MAX_PASSWORD) {
    validityStatus = false;
    messagePass = 'Longitud máxima ' + MAX_PASSWORD + ' caracteres'
  }

  if (!regex.test(datas.pass)) {
    validityStatus = false;
    messagePass = 'Al menos una mayúscula y un número'
  }

  if (datas.pass !== datas.repass) {
    validityStatus = false;
    messageRepass = 'Las contraseñas no coinciden'
  }

  setDatas({...datas,
    errPass : messagePass,
    errRepass: messageRepass
  })

  return validityStatus;
}
