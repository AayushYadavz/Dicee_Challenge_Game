const button = document.querySelector("#submit");

button.addEventListener("click", function() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const imageSource = "images/dice" + randomNum + ".png";
    
    // Selecting 1st img element
    const image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imageSource);

    const randomNum2 = Math.floor(Math.random() * 6) + 1;
    const imageSource2 = "images/dice" + randomNum2 + ".png";

    // Selelcting 2nd img element
    const image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", imageSource2);

    // Changing h1's inner text
    const heading = document.querySelector("h1");
    if (randomNum > randomNum2) {
       heading.innerHTML = "Player 1 Wins!"
    } else if (randomNum < randomNum2) {
       heading.innerHTML = "Player 2 Wins!"
    } else {
       heading.innerHTML = "Draw!"
    }
});