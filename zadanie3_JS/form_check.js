function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function validate(form) {

    let flag = true;
    if (!checkStringAndFocus(form.elements["f_imie"], "Wprowadź imię", isStringIncorrect)) {
        flag = false
    }

    if (!checkStringAndFocus(form.f_nazwisko, "Wprowadź nazwisko", isStringIncorrect)) {
        flag =  false
    }

    if(document.getElementById("NazwiskoPanienskie").style.visibility==="visible" || !(document.getElementById("NazwiskoPanienskie").style.visibility==="hidden") ){
        if (!checkStringAndFocus(form.f_nazwisko_p, "Wprowadź nazwisko panieńskie", isStringIncorrect)) {
            flag = false
        }
    }
    else
    {
        document.getElementById("e_nazwisko_p").innerHTML ="";
    }

    if (!checkStringAndFocus(form.f_kod, "Wprowadź kod", isStringIncorrect)) {
        flag =  false
    }

    if (!checkStringAndFocus(form.f_ulica, "Wprowadź ulicę", isStringIncorrect)) {
        flag =  false
    }

    if (!checkStringAndFocus(form.f_miasto, "Wprowadź miasto", isStringIncorrect)) {
        flag =  false
    }
    if (!checkStringAndFocus(form.f_email, "Podaj właściwy email", isEmailIncorrect)) {
        flag =  false
    }

    alterRows(1,document.getElementsByTagName('tr').item(0));


    return flag
}

function isStringIncorrect(string) {
    return isWhiteSpaceOrEmpty(string);

}

function isEmailIncorrect(str) {
    let email = /^[a-zA-Z_0-9.]+@[a-zA-Z_0-9.]+\.[a-zA-Z][a-zA-Z]+$/;
    return !email.test(str);
}

function checkStringAndFocus(obj, msg, val_fun) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (val_fun(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        document.getElementById(errorFieldName).innerHTML ="";
        return true;
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

