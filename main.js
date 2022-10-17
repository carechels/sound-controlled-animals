function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eLOebYCB4/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error)
        console.error(error);
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_lable").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + '%';
        document.getElementById("result_lable").style.color = "rgb(" +random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById('animal1');
        img2 = document.getElementById('animal2');
        img3 = document.getElementById('animal3');
        img4 = document.getElementById('animal4');


        if (results[0].label == "deer") {
            img1.src = 'deer.gif';
            img2.src = 'giraffe.jpg';
            img3.src = 'simba.webp';
            img4.src = 'rabbit.jpg';
        } else if (results[0].label == "giraffe") {
            img1.src = 'deer.jpg';
            img2.src = 'giraffe.gif';
            img3.src = 'simba.webp';
            img4.src = 'rabbit.jpg';
        } else if (results[0].label == "simba") {
            img1.src = 'deer.jpg';
            img2.src = 'giraffe.jpg';
            img3.src = 'simba.gif';
            img4.src = 'rabbit.jpg';
        } else if (results[0].label == "rabbit") {
            img1.src = 'deer.jpg';
            img2.src = 'giraffe.jpg';
            img3.src = 'simba.webp';
            img4.src = 'rabbit.gif';
        }
    }
}