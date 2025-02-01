// 1️⃣ Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}
console.log(isLeapYear(2024)); 

// 2️⃣ Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15";
    } else {
        return "Ticket Price: $20";
    }
}
console.log(getTicketPrice(15)); 

// 3️⃣ Fibonacci Sequence (Recursive)
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); 

// 4️⃣ Palindrome Checker (Recursive)
function isPalindrome(str) {
  
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function checkPalindrome(s, left, right) {
        if (left >= right) return true;
        if (s[left] !== s[right]) return false;
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(cleanStr, 0, cleanStr.length - 1);
}
console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("Hello")); 

