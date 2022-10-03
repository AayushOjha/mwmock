export function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name) {
    // console.log(document.cookie.split('; ') ,' 2345678sdfghj234567')
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        // console.log(parts[0] === name , parts[0], name,' parts parts[0] === name ')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
      }, '')

}
export function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}