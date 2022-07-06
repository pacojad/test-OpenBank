// validation password wizards step1
export const validationCheck = () => {
  let activeNextStep = true
  let container = document.querySelector('div.Password-Step1')
  let checkboxes = container.querySelectorAll('input.required')
  
  for(let i=0; i<checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      activeNextStep = false 
    }
  }
  return activeNextStep
}

// validation password wizards step2
export const validationInput = () => {
  let activeNextStep = true
  let container = document.querySelector('div.Password-Step2')
  let input = container.querySelectorAll('input.required')

  for(let i=0; i<input.length; i++) {
    if (input[i].value === '') {
      activeNextStep = false 
    }
  }
  return activeNextStep
}