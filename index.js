function CreateURL(tag,subtag, url){
  //const amazonRegex = /^(https?:\/\/)?(www\.)?amazon\.[a-z]{2,}\/(?:[\w-]+\/)?(dp|gp\/product)\/([\w]{10})(\/.*)?$/;
  const amazonRegex = /^(https?:\/\/)?(www\.)?amazon|amzn\.[a-z]{2,}\/.*$/; 
  const flipkartRegex = /^(https?:\/\/)?(www\.)?flipkart|fkrt\.[a-z]{2,}\/.*$/;

  if(amazonRegex.test(url)){
    alert("enter in amazon");
    var ASINreg = new RegExp(/(?:\/)([A-Z0-9]{10})(?:$|\/|\?)/);
    
    if(!url &&(!tag || !subtag)) {
      return alert(`Please provide a url and your amazon tracking code. Example: CreateURL('amazon.com/productblahblah', 'pickitly0b-20')`)
    }
    var  cMatch = url.match(ASINreg); //matches productID and url's productID
    if(cMatch == null){
        return null;
    }

    let index = url.indexOf("&tag=");
    if(index !== -1){
      let modifyUrl = url.slice(0,index+5); //whole string before '&tag='
      let newUrl = url.slice(index+5, url.length); //whole string after '&tag='
      let newIndex = newUrl.indexOf('&'); //index before '&' tag
      let otherPart = url.slice(index + 5 + newIndex + 1, url.length); //whole string after &
      var generated = modifyUrl + `${tag}`+"&"+  otherPart +`&ascsubtag=${subtag}`;
      document.getElementById('result').textContent = generated;
      return;
    }
    else{
      var generated = url + `&tag=${tag}&ascsubtag=${subtag}`;
      document.getElementById('result').textContent = generated;
    }  
  }
 

  if(flipkartRegex.test(url)){
    alert("enter in flipkart");
    var ASINreg = new RegExp(/(?:pid=)([\w]+)/);
    if(!url &&(!tag || !subtag)) {
      return alert(`Please provide a url and your amazon tracking code. Example: CreateURL('amazon.com/productblahblah', 'pickitly0b-20')`)
    }
    var  cMatch = url.match(ASINreg);
    if(cMatch == null){
        return null;
    }
    

    let index = url.indexOf("&affid=");
    if(index !== -1){
      let modifyUrl = url.slice(0,index+5); //whole string before '&tag='
      let newUrl = url.slice(index+5, url.length); //whole string after '&tag='
      let newIndex = newUrl.indexOf('&'); //index before '&' tag
      let otherPart = url.slice(index + 5 + newIndex + 1, url.length); //whole string after &
      var generated = modifyUrl + `${tag}`+"&"+  otherPart +`&affExtParam1=${subtag}`;
      document.getElementById('result').textContent = generated;
      return;
    }
    else{
      var generated = url + `&affid=${tag}&affExtParam1=${subtag}`; //there should be &affid= or ?affid=?
      document.getElementById('result').textContent = generated;
    }  
  }

  
  else{
    console.log('enter valid url');
    return;
  }
}
