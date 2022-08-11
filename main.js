const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

const userSentence = document.getElementById('sentence_input');
const submitButton = document.getElementById('submit_button');
const result = document.getElementById('result');

let strArr;

submitButton.onclick = function(event) {
    console.log(event);
    event.preventDefault();
    
    submitButton.style.opacity = '0.5';
    setTimeout(function() {
        submitButton.style.opacity = '1';
    }, 1000);

    strArr = userSentence.value.split(' ');
    console.log(strArr);

    const sentiment = analyzer.getSentiment(strArr);
    if (sentiment > 0) {
        result.innerHTML = 'This sentence has a positive sentiment';
        result.style.backgroundColor = '#f4845f';
        
    }
    else if (sentiment < 0) {
        result.innerHTML = 'This sentence has a negative sentiment';
        result.style.backgroundColor = '#732c2c';
        result.style.color = '#eff8e2'; 
    }
    else {
        result.innerHTML = 'This sentence has a neutral sentiment';
        result.style.backgroundColor = '#baa5ff';
    }
}
