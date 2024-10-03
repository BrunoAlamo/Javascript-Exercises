function getGrade(score) {
    if(score === 100) {
      return "A++";
    } if (score >= 90 && score <= 99){
      return "A";
    } if (score >= 80 && score <= 89){
      return "B";
    } if (score >= 70 && score <= 79){
      return "C";
    } if (score >= 60 && score <= 69){
      return "D";
    } if (score >= 0 && score <= 59){
      return "F";
    }
   }
   
   console.log(getGrade(100));
   console.log(getGrade(96));
   console.log(getGrade(82));
   console.log(getGrade(70));
   console.log(getGrade(63));
   console.log(getGrade(56));