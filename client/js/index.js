function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;

  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // console.log(`Token: ${id_token}`);

  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'https://localhost:3000/google-sign-in');
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.onload = function () {
  //   console.log('Signed in as: ' + xhr.responseText);
  // };
  // xhr.send('token=' + id_token);
  $.ajax({
    url: 'http://localhost:3000/google-sign-in',
    method: 'POST',
    data: {
      token: id_token
    }
  })
    .done(response => {
      console.log(response.message)
      // console.log(response);
      localStorage.signedIn = response.token;
      localStorage.status = 1;
      triggered();
    })
    .fail(err => {
      console.log('error')
      console.log(err);
    })
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    localStorage.removeItem('signedIn');
    localStorage.removeItem('status');
    triggered();
  });
}

function login() {
  $('.css-register').hide();
  $('.css-home').hide();
  $('.css-login').show();
}

function register() {
  $('.css-login').hide();
  $('.css-home').hide();
  $('.css-register').show();
}

function home() {
  if (!localStorage.status) {
    $('.css-register').hide();
    $('.css-login').hide();
    $('.css-home').show();
  }
}

function triggered() {
  if (!localStorage.status) {
    $('.css-loggedin').hide();
    $('.css-loggedout').show();
    $('.css-home').show();
    $('.css-register').hide();
    $('.css-login').hide();
    $('.css-dashboard').addClass('disabled');
  } else {
    $('.css-loggedin').show();
    $('.css-loggedout').hide();
    $('.css-dashboard').removeClass('disabled');
    fetchTodos();
  }
}


function fetchTodos() {
  $.ajax({
    url: `http://localhost:3000/user`,
    method: 'GET',
    headers: { token: localStorage.signedIn }
  })
    .done(response => {
      for(todo of response.todolist) {
        $('#listTodo').append(`<a href="#" class="list-group-item list-group-item-action"></a>`)
      }
    })
    .fail((jqXHR, textStatus) => {
      console.log('failed =>', textStatus);
    })
}

$(document).ready(function() {
  if (!localStorage.status) {
    $('.css-loggedin').hide();
    $('.css-loggedout').show();
    $('.css-home').show();
    $('.css-register').hide();
    $('.css-login').hide();
    $('.css-dashboard').addClass('disabled');
  } else {
    $('.css-loggedin').show();
    $('.css-loggedout').hide();
    $('.css-dashboard').removeClass('disabled');
    fetchTodos();
  }
})