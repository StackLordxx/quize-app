const questions = [
    {
        question: "What does ACSU stand for?",
        answers: [
            {text: "Army Cadet Service Uniform", correct: true},
            {text: "American College of Surgeons", correct: false},
            {text: "Arizona Center for Sustainable Agriculture", correct: false},
            {text:  "Australian Catholic Social Union", correct: false}, 
        ]
    },
    {
        question: "What type of Shirt is worn under the ACSU Coat?",
        answers: [
            {text: "Black short sleev or long sleev", correct: false},
            {text: "Whit long sleev or short sleev", correct: false},
            {text: "Grey long sleev or short sleev shirt", correct: true},
            {text: "Blue short sleev or long sleev", correct: false},
            
        ] 
    },
    {
        question: "The black necktie/neck tab is optional when wearing what type of Uniform?",
        answers: [
            {text: "Service Uniform with long sleeves", correct: false},
            {text: "Utility Uniform with short sleeves", correct: false},
            {text: "Dress Uniform with long sleeves", correct: false},
            {text:  "Class B with short sleeve", correct: true}, 
        ]
    },
    {
        question: "What does ACSU stand for?",
        answers: [
            {text: "Army Cadet Service Uniform", correct: true},
            {text: "American College of Surgeons", correct: false},
            {text: "Arizona Center for Sustainable Agriculture", correct: false},
            {text:  "Australian Catholic Social Union", correct: false}, 
        ]
    },
    {
        question: "What color t-shirt is worn with the CSU ?",
        answers: [
            {text: "Blue", correct: false},
            {text: "Grey", correct: false},
            {text: "White", correct: true},
            {text:  "White and black", correct: false}, 
        ]
    },
    {
        question: "What Uniform is worn during ceremonies and social functions?",
        answers: [
            {text: "Class A or B", correct: true},
            {text: "Only Class A", correct: false},
            {text: "Only class B", correct: false},
            {text:  "All of the above", correct: false}, 
        ]
    },
    {
        question: "What Uniform is worn at summer camps and for members of speacial team?",
        answers: [
            {text: "PPC", correct: false},
            {text: "OCP", correct: true},
            {text: "AR670-1", correct: false},
            {text:  "CCR 145-2", correct: false}, 
        ]
    },
    {
        question: "What insignia do cadet officers wear on the grey baret?",
        answers: [
            {text: "Service ribbon", correct: false},
            {text: "Unit patch", correct: false},
            {text: "ROTC insignia", correct: false},
            {text:  "Grade or Ranks", correct: true}, 
        ]
    },
    {
        question: "What insignia do enlisted cadets wear of the grey baret?",
        answers: [
            {text: "ROTC insignia", correct: true},
            {text: "Grade or Ranks", correct: false},
            {text: "Service ribbon", correct: false},
            {text:  "Unit patch", correct: false}, 
        ]
    },
    {
        question: "What color T-shirt is worn with OCP?",
        answers: [
            {text: "Army white", correct: false},
            {text: "Tan or Sand", correct: true},
            {text: "Gods color", correct: false},
            {text:  "Blue cane", correct: false}, 
        ]
    },
    {
        question: "How is grade(or ROTC) insignia worn on the grey baret?",
        answers: [
            {text: "On the by the low right", correct: false},
            {text: "On the right chest", correct: false},
            {text: "Centered on the flash", correct: true},
            {text:  "Centered on the right", correct: false}, 
        ]
    },
    {
        question: "How are ribons worn on the class A uniform?",
        answers: [
            {text: "For males, Centered on the left side 1/8 of an inch above the pocket and in order of preecedent", correct: true},
            {text: "it should be with highest rank", correct: false},
            {text: "ROTC", correct: false},
            {text:  "For females, on the left side parallel to the name plate and in order of procedure", correct: true}, 
        ]
    },
    {
        question: "Describe a rank?",
        answers: [
            {text: "Private first class", correct: true},
            {text: "Three disc", correct: true},
            {text: "Comand sergant major", correct: true},
            {text:  "Corporal", correct: True}, 
        ]
    },
    {
        question: "How often must a uniform be worn by cadets?",
        answers: [
            {text: "Every day", correct: false},
            {text: "Once a week", correct: true},
            {text: "Atleast twice a month", correct: false},
            {text:  "They choose when to", correct: false}, 
        ]
    },
    {
        question: "Can a male cadet wear earing in uniform?",
        answers: [
            {text: "Yes", correct: false},
            {text: "If they choose to", correct: false},
            {text: "No", correct: true},
            {text:  "None of the above", correct: false}, 
        ]
    },
    {
        question: "What size/color earing can femal acdets wear in uniforms ?",
        answers: [
            {text: "Any size they choose", correct: false},
            {text: "Any color they choose", correct: false},
            {text: "Small silver, white, or gold or white spherical earings not to exceed 1/4 inch in diameter", correct: true},
            {text:  "All of the above", correct: false}, 
        ]
    },
    {
        question: "How is the name plate worn on your uniform?",
        answers: [
            {text: "Behind the pocket", correct: false},
            {text: "Left side", correct: false},
            {text: "Male center the name plate on the right pocket between the top of the pocket and top of the button of shirt or coat", correct: true},
            {text:  "female 1-2 inches above the the top button centerd horizontally on the right size of the shirt or coat", correct: true}, 
        ]
    },
    {
        question: "What regulation covers the wear of uniform?",
        answers: [
            {text: "AR 67-1 and CCR 145-2", correct: true},
            {text: "The first option", correct: false},
            {text: "A", correct: false},
            {text:  "All of the above", correct: false}, 
        ]
    },
    {
        question: "Are shoulder boards authorized for wear with the class B uniform?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
            {text: "I think so", correct: false},
            {text:  "Not usre", correct: false}, 
        ]
    },
    {
        question: "What does OCP stand for?",
        answers: [
            {text: "Optional comfort position", correct: false},
            {text: "Operational camoflage pattern", correct: true},
            {text: "Oral contraceptive pill", correct: false},
            {text:  "Occupational clothing program", correct: false}, 
        ]
    },
    {
        question: "What color socks are worn the CASU?",
        answers: [
            {text: "brown", correct: false},
            {text: "pink", correct: false},
            {text: "purple", correct: false},
            {text:  "Black", correct: true}, 
        ]
    }

];

const questionElemnt = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
