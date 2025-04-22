function count(string) {
    const result = {};
    
    for (const char of string) {
      result[char] = (result[char] || 0) + 1;
    }
  
    return result;
  }