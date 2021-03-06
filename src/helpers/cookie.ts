export const setCookie = (day: number, value?: string, key?: string, domain?: string) => {
  let now = new Date();
  let time = now.getTime();
  let expireTime = time + day * 86400 * 1000;
  now.setTime(expireTime);

  let domainString;
  if (domain) {
    domainString = `;domain=${domain}`;
  } else {
    domainString = ``;
  }

  document.cookie = `${key}=${value};expires=${now.toUTCString()}${domainString};path=/`;
};

export const readCookie = (name: any) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export function deleteAllCookies() {
  var allCookies = document.cookie.split(';');

  for (var i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + '=;expires=' + new Date(0).toUTCString();
}
