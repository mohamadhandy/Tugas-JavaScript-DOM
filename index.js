const namePerson = document.getElementById("name")
const address = document.getElementById("address")
const noTelp = document.getElementById("no-telp")
const email = document.getElementById("email")

const checkboxes = document.querySelectorAll(".checkbox-color")

const inputs = document.querySelectorAll(".input-field-val")

const PATTERN_EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PATTERN_PHONE_NUMBER = /^(\+62)8[1-9][0-9]{6,9}$/

const valueCheckboxes = []

function getData () {
  
  let alertError = ''
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      valueCheckboxes.push(checkbox.value)
    }
  })
  
  inputs.forEach((input) => {
    if (input.value === '') {
      alertError += `Textfield ${input.name} kosong, harap di isi.\n`
    }
  })

  if (!noTelp.value.match(PATTERN_PHONE_NUMBER)) {
    alertError += "No telp salah format. (Harus di input +62)\n"
  }
  
  if (!email.value.match(PATTERN_EMAIL_REGEX)) {
    alertError += "Email salah format. (Contoh: handy@gmail.com)\n"
  }

  if (valueCheckboxes.length === 0) {
    alertError += "isi salah satu checkbox terlebih dahulu.\n"
  }

  if (alertError !== '') {
    swal("ERROR!", alertError, "error")
  } else {
    const table = document.getElementById("table-data")
    const tableRow = table.insertRow()
    let cell1 = tableRow.insertCell()
    let cell2 = tableRow.insertCell()
    let cell3 = tableRow.insertCell()
    let cell4 = tableRow.insertCell()
    let cell5 = tableRow.insertCell()
    cell1.innerHTML = namePerson.value
    cell2.innerHTML = email.value
    cell3.innerHTML = address.value
    cell4.innerHTML = noTelp.value
    cell5.innerHTML = valueCheckboxes.join(", ")

    namePerson.value = ''
    address.value = ''
    noTelp.value = ''
    email.value = ''
    valueCheckboxes.length = 0
  }
}
