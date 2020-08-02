// XMLHttpResquest(GET) + Promises
// AJAX assincrono

// XMLHttp -> nós permite fazer requisições de qualquer lugar tanto no front-end como no back-end.

const request = obj =>{
  const xhr = new XMLHttpRequest();  //abreviação de xmlHtpprequest
  xhr.open(obj.method, obj.url, true) // metodo do objeto, url, e se será assincrono ou não
  xhr.send();

  xhr.addEventListener('load',() =>{
        if(xhr.status >= 200 &&  xhr.status < 300){
          obj.sucess(xhr.responseText);
        }else{
            obj.error({
              code: xhr.status,
              msg: xhr.statusText
            });
          }
        });
}