
let score = 0;
let producers = 0;
let producers1 = 0;
let producers2 = 0;
document.getElementById("greens").style.display = "none";
document.getElementById("saddle").style.display = "none";
document.getElementById("stable").style.display = "none";

document.getElementById("clicker").addEventListener("click", function() {
  score++;
  document.getElementById("score").innerHTML = "Score: " + score;
  });
  
  document.getElementById("greens").addEventListener("click", function() {
  if (score >= 10) {
  score -= 10;
  producers++;
  document.getElementById("score").innerHTML = "Score: " + score;
  }
  });
  
  setInterval(function() {
  score += producers;
  document.getElementById("score").innerHTML = "Score: " + score;
  if (score >= 3) {
    document.getElementById("greens").style.display = "inline-block";
  }
  }, 1000);
  
  document.getElementById("saddle").addEventListener("click", function() {
    if (score >= 50) {
    score -= 50;
    producers1++;
    document.getElementById("score").innerHTML = "Score: " + score;
    }
    });
    
    setInterval(function() {
    score += producers1 * 2;
    document.getElementById("score").innerHTML = "Score: " + score;
    if (score >= 20) {
      document.getElementById("saddle").style.display = "inline-block";
    }
    }, 1000);
  
    document.getElementById("stable").addEventListener("click", function() {
      if (score >= 100) {
      score -= 100;
      producers2++;
      document.getElementById("score").innerHTML = "Score: " + score;
      }
      });
      
      setInterval(function() {
      score += producers2 * 5;
      document.getElementById("score").innerHTML = "Score: " + score;
      if (score >= 70) {
        document.getElementById("stable").style.display = "inline-block";
      }
      }, 1000);
  
  
  
