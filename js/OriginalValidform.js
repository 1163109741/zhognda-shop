function isChinese(obj) {
    var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/;
    if (!reg.test(obj)) {
        return false;
    } else {
        return true;
    }
}

function isMoble(obj) {
    var reg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/;
    if (!reg.test(obj)) {
        return false;
    } else {
        return true;
    }
}

function isTel(obj) {
    var reg = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
    if (!reg.test(obj)) {
        return false;
    } else {
        return true;
    }
}