async function postData(url = "", data = {}) { 
  const response = await fetch(url, {
    method: "POST", 
   headers: {
      "Content-type": "application/json",
    }, 
   body: JSON.stringify(data),  
  });
  return response.json(); 
}

sendButton.addEventListener("click", async()=>{
  questionInput = document.getElementById("questionInput").value;
  document.getElementById("questionInput").value = "";
  document.querySelector(".second").style.display = "block"
  document.querySelector(".right").style.display = "none"

  question.innerHTML = questionInput;

  //Get the answer and populate it
  let result = await postData("/api", {"question": questionInput})
  solution.innerHTML = result.answer
})