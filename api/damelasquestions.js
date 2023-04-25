export default function handler(request, response) {

    const questions = 
        [{
            title: "Quant es u mes u?",
            answers: [
                "un","dos","tres,","quatre"
            ],
            correct: 1
        },
        {
            title: "Quant es u mes dos?",
            answers: [
                "un","dos","tres,","quatre"
            ],
            correct: 2
        },
        {
            title: "Quant es dos mes dos?",
            answers: [
                "un","dos","tres,","quatre"
            ],
            correct: 3
        }];
    
    response.json(questions);
}