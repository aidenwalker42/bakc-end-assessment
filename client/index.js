document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          
          document.getElementById("text").innerHTML = data;
        });
  };

document.getElementById("FortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          
          document.getElementById("text").innerHTML = data;
        });
  };

  document.getElementById("PredictAge").onclick = function () {
    axios.get("https://api.agify.io?name=" + document.getElementById("nameInput").value)
        .then(function (res){
            console.log(res.data)
            document.getElementById("text2").innerHTML = res.data.name + ", I predict you are " + res.data.age + " Years old.";
            if(res.data.name === "eric" || res.data.name === "Eric"){
                document.getElementById("eric").innerHTML = "<img src=\"lol.png\">";
            }
        })
    }

    document.getElementById("TLW").onclick = function () {
        axios.get("http://localhost:4000/api/TLW/" + document.getElementById("howmanytlw").value)
            .then(function (response) {
              const data = response.data;
              document.getElementById("text").innerHTML = data;
            });
      };
