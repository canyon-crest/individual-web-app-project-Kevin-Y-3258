// add javascript here
document.getElementById("myBtn")?.addEventListener("Click", () => {
    document.getElementById("my-offerings").toggleAttribute("hidden");
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