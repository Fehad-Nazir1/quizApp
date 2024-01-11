let form = document.querySelector('form');
const correctAnswers = ['A', 'A', 'A', 'A', 'A']
const qname = ['.question1', '.question2','.question3','.question4','.question5']

form.addEventListener('submit',  (event) => {
    event.preventDefault()
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    console.log(userAnswers)

    let score  = 0

    for(let i = 0; i<correctAnswers.length; i++){
        if(userAnswers[i] == correctAnswers[i]){
            score++
            document.querySelector(qname[i]).classList.add('correct')
        }else{
            let item = ".question" + i
            document.querySelector(qname[i]).classList.add('incorrect')
        }
    }

    document.querySelector('.result').classList.remove('hide')
    document.querySelector('.score').innerText = 'you Scored ' + score + '/5'

});

let tryAgain = document.querySelector('.try-again')


tryAgain.addEventListener('click', () => {
    document.querySelector('.result').classList.add('hide')

    for(let i = 0; i<correctAnswers.length; i++){
        document.querySelector(qname[i]).classList.remove('correct')
        document.querySelector(qname[i]).classList.remove('incorrect')

        let radios = document.querySelectorAll(`${qname[i]} input[type=radio]`)

        radios.forEach(radio => {
            radio.checked = false;
        });
    }


})