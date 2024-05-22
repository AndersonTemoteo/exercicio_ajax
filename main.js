$(document).ready(function() {
    const endpoint = 'https://api.github.com/users/AndersonTemoteo';

    fetch(endpoint).then(function(resposta) {
        return resposta.json ();
    })
    .then(function(json) {
        $('#name').append(json.name);
        $('#username').append(json.login);
        $("#avatar").attr("src", json.avatar_url);
        $('#repos').append(json.public_repos);
        $('#followers').append(json.followers);
        $('#following').append(json.following);
        $("#link").attr("href", json.html_url);
    })
    .catch (function(erro) {
        alert('O Perfil não foi encontrado, tente novamente mais tarde.');
    })
});