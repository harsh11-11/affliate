
function CreateURL(tag, subtag, url){
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
    //alert(index);
    if(index !== -1){
      let modifyUrl = url.slice(0,index+5); //whole string before '&tag='
      // alert(modifyUrl);
      // let newUrl = url.slice(index+5, url.length); //whole string after '&tag='
      // let newIndex = newUrl.indexOf('&'); //index before '&' tag
      // let otherPart = url.slice(index + 5 + newIndex + 1, url.length); //whole string after &
      var generated = modifyUrl + `${tag}`+"&"+"ascsubtag="+`${subtag}`;
      document.getElementById('result').value = generated;
      //shortUrl(generated);
      return;
    }
    else{
      var generated = url + `&tag=${tag}&ascsubtag=${subtag}`;
      document.getElementById('result').value = generated;
      //shortUrl(generated);

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
      // let newUrl = url.slice(index+5, url.length); //whole string after '&tag='
      // let newIndex = newUrl.indexOf('&'); //index before '&' tag
      // let otherPart = url.slice(index + 5 + newIndex + 1, url.length); //whole string after &
      var generated = modifyUrl + `${tag}`+`&affExtParam1=${subtag}`;
      document.getElementById('result').value = generated;
      //shortUrl(generated);
      return;
    }
    else{
      var generated = url + `&affid=${tag}&affExtParam1=${subtag}`; //there should be &affid= or ?affid=?
      var textAreaa = document.getElementById('result');
      textAreaa.value = generated;
      //shortUrl(generated);
      textAreaa.focus({ preventScroll: true });
    }  
  }

  
  else{
    console.log('enter valid url');
    return;
  }
}


function myFunction(){
  // Get the text field
  let copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);  
}

// async function shortUrl(urlq){
//   // The URL to shorten
//   alert(urlq);
//   // Call the API
//   let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(urlq)}`);
//   alert(request);
//   // Get the response
//   let response = await request.json();
//   alert(response);
//   // The shortened URL
//   let shortened = response.result.full_short_link;
//   alert(shortened);
//   document.getElementById('shortening').value = shortened;
// }