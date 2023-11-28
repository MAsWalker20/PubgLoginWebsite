var userName = document.getElementById('userName');
var userPassword = document.getElementById('password');
var loginButton = document.getElementById('click');

userName = "Maswalker";
userPassword = "maswalker";
function clicker() {
    switch (userName) {
        case "Maswalker" : switch (userPassword) {
            case "maswalker" : console.log('True'); break;
            default : alert('Wrong password')
        }; break
        default : alert('Wrong username & password');
    };
    
};
clicker();
