


function getApiData(requestPar){
    return new Promise(function(resolve,reject){
      //GETS STUFF
      var success = true;
      if(success){resolve("result");}else{reject("error 343");}
    });
}



getApiData("requestParameter").then(
  function(result){
  //called WHEN successful
  console.log("result:"+result);
},function(err){
  //called WHEN rejected
  console.log(err);
});
