const checkForStraights = (arr) => {
    // Remove duplicates and sort the array
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    //postcode
    // Check for small and large straight
    if (sortedArr.length >= 5) {
      // Check for large straight (5 consecutive numbers)
      for (let i = 0; i <= sortedArr.length - 5; i++) {
        let isLargeStraight = true;
        for (let j = i; j < i + 4; j++) {
          if (sortedArr[j + 1] !== sortedArr[j] + 1) {
            isLargeStraight = false;
            break;
          }
        }
        if (isLargeStraight) {
          // Large straight: set index 4 to 40 and index 3 to 30
          updateRadioOption(4, 40); // Large straight, update index 4 to 40
          updateRadioOption(3, 30); // Large straight, update index 3 to 30
          return; // No need to check further if large straight is found
        }
      }
    }
  
    // Check for small straight (4 consecutive numbers)
    if (sortedArr.length >= 4) {
      for (let i = 0; i <= sortedArr.length - 4; i++) {
        let isSmallStraight = true;
        for (let j = i; j < i + 3; j++) {
          if (sortedArr[j + 1] !== sortedArr[j] + 1) {
            isSmallStraight = false;
            break;
          }
        }
        if (isSmallStraight) {
          // Small straight: update index 3 to 30
          updateRadioOption(3, 30); // Small straight, update index 3 to 30
          return; // No need to check further if small straight is found
        }
      }
    }
  
    // If no straight found, reset the values
    updateRadioOption(5, 0);

  };
