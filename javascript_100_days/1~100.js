//1.두수의 합
//https://school.programmers.co.kr/learn/courses/30/lessons/120802
function solution1(num1, num2) {
    const answer = num1 + num2;
    return answer;
}
//2. 두수의 차
//https://school.programmers.co.kr/learn/courses/30/lessons/120803
function solution2(num1, num2) {
    const answer = num1-num2;
    return answer;
}
//3. 두수의 곱
//https://school.programmers.co.kr/learn/courses/30/lessons/120804
function solution3(num1, num2) {
    const answer = num1 * num2;
    return answer;
}
//4. 몫 구하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120805
function solution4(num1, num2) {
    const answer = Math.floor(num1 / num2);
    return answer;
}
//5. 두 수의 나눗셈
//https://school.programmers.co.kr/learn/courses/30/lessons/120806
function solution5(num1, num2) {
    const answer = Math.floor(num1 / num2 * 1000);
    return answer;
}
//6. 숫자 비교하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120807
function solution6(num1, num2) {
    const answer = num1 == num2 ? 1 : -1;
    return answer;
}
//7. 분수의 덧셈
//https://school.programmers.co.kr/learn/courses/30/lessons/120808
function solution7(numer1, denom1, numer2, denom2) {
    const answer = [];
    const gcd1 = getGCD(denom2,denom1);
    const lcm = gcd1 * denom2 * denom1;
    const numer = lcm*(numer1*denom2+numer2*denom1);
    const denom = lcm*denom1*denom2;
    const gcd2 =getGCD(denom,numer)
    answer.push(numer/gcd2);
    answer.push(denom/gcd2);
    return answer;
}
function getGCD(num1, num2) {
    if(num2==0){
        return num1;
    }
    return getGCD(num2, num1 % num2);
}
//8. 배열 두 배 만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/120809
function solution(numbers) {
    const answer = [];
    for(let i = 0; i<numbers.length ; i++ ){
        answer[i] = numbers[i] * 2;
    }
    return answer;
}