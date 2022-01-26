export function validateText(value, minLength, maxLength, isRequired = true) {
  if (!value && isRequired) {
    return 'Поле необходимо заполнить'
  }
  const trimLen = value.trim().length
  if (trimLen > maxLength || trimLen < minLength) {
    return 'Введите корректное значение'
  }
  return -1
}

export function validateNumber(value, minLength, maxLength) {
  if (!value) {
    return 'Поле необходимо заполнить'
  }
  if (+value > maxLength || +value < minLength) {
    return `от ${minLength} до ${maxLength}`
  }
  return -1
}
