function CreateURL(tag,subtag, url){
  //  alert(url);
  const amazonRegex = /^(https?:\/\/)?(www\.)?amazon\.[a-z]{2,}\/(?:[\w-]+\/)?(dp|gp\/product)\/([\w]{10})(\/.*)?$/;
  if(amazonRegex.test(url)){
    var ASINreg = new RegExp(/(?:\/)([A-Z0-9]{10})(?:$|\/|\?)/);
    if(!url &&(!tag || !subtag)) {
      return alert(`Please provide a url and your amazon tracking code. Example: CreateURL('amazon.com/productblahblah', 'pickitly0b-20')`)
    }
    var  cMatch = url.match(ASINreg);
    if(cMatch == null){
        return null;
    }

    let index = url.indexOf("&tag=");
    if(index !== -1){
      let modifyUrl = url.slice(0,index);
      // var asin =  cMatch[0];
      var generated = modifyUrl + `&tag=${tag}&ascsubtag=${subtag}`;
      document.getElementById('result').textContent = generated;
    }
    else{
      // var asin =  cMatch[0];
      var generated = url + `&tag=${tag}&ascsubtag=${subtag}`;
      document.getElementById('result').textContent = generated;
    }  
  }
  else{
    console.log('enter valid url');
    return;
  }
}
