//console.log("Hello from JavaScript!");
//const url = "https://api.github.com/users/dhh"
// console.log("step1")
const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = document.getElementById('email').value
  const passwordValue = document.getElementById('password').value
  const bodyValue = { email: emailValue, password: passwordValue}
  const url = 'https://reqres.in/api/register'
    fetch(url, {
      method: 'POST',
      headers : { "Content-Type": "application/json" },
      body:  JSON.stringify(bodyValue)})
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
        } else {
          Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
        }
      });
    });
