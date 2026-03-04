// add javascript here
document.getElementById("Button")?.addEventListener("click", () =>{
    document.getElementById("tips").toggleAttribute("hidden");
})

document.getElementById("questionBtn")?.addEventListener("click", () =>{
    let question = document.getElementById("question");
    let questionList = document.getElementById("questionList");
    if(question.value.trim()!= ""){
        const newQuestion = document.createElement("li");
        newQuestion.textContent = question.value;
        questionList.appendChild(newQuestion);
        question.value = "";
    }
})