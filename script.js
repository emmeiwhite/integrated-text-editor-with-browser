document.addEventListener('DOMContentLoaded', (e) => {
  // Our Code goes here 


  const iframe = document.querySelector('iframe');
  const button = document.querySelector('button');

  button.addEventListener('click', (e) => {
    const myIframe = iframe.contentDocument;
    const htmlCode = document.querySelector('.main-code').value;
    // console.log((myIframe.body));
    myIframe.body.innerHTML = `${htmlCode}`;
  });

});