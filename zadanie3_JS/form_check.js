function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function validate(form) {

    if (!checkString(form.elements["f_imie"].value, "Wprowadź Imię")) {
        return false
    }

    if (!checkString(form.f_nazwisko.value, "Wprowadź Nazwisko")) {
        return false
    }

    if (!checkString(form.f_nazwisko_p.value, "Wprowadź Nazwisko Panieńskie")) {
        return false
    }


    if (!checkString(form.f_kod.value, "wprowadź kod")) {
        return false
    }

    if (!checkString(form.f_ulica.value, "Wprowadź Ulice")) {
        return false
    }

    if (!checkString(form.f_miasto.value, "Wprowadź Miasto")) {
        return false
    }
    if(!checkEmail(form.f_email.value))
    {
        return false
    }

    return true
}

function checkString(string, errorMsg) {
    if (isWhiteSpaceOrEmpty(string)) {
        alert(errorMsg);
        return false
    }
    return true
}

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9.]+@[a-zA-Z_0-9.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        alert("Podaj właściwy e-mail");
        return false;
    }
}

function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        return true;
    }
}

