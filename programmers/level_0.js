// 더하기 빼기 나누기 곱하기 몫 나머지
function solution(num1, num2) {
    var plus = num1 + num2;
    var minus = num1 - num2;
    var multi = num1 * num2;
    var divide = num1 / num2;
    var quotient = parseInt(num1 / num2);
    var remainder = num1 % num2;
}

// 숫자 비교하기
function solution(num1, num2) {
    var result = num1 === num2 ? 1 : -1;
    return result;
}

// 나이 출력
function solution(age) {
    var answer = 2022 - age + 1;
    return answer;
}

// 각도기
function solution(n) {
    var answer = 0;

    for (let i = 2; i <= n; i += 2) answer += i;

    return answer;
}

// 짝수의 합
function solution(n) {
    var answer = 0;
    var arr = new Array();

    for (var i = 1; i <= n; i++) {
        arr[i] = i;
        if (i % 2 === 0) {
            answer += i;
        }
    }

    return answer;
}

// 배열의 평균값
function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    return answer;
}

// 양꼬치
function solution(n, k) {
    return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

// 배열 뒤집기
function solution(num_list) {
    return num_list.reverse();
}

// 짝수 홀수 개수
function solution(num_list) {
    // // Sol .1
    // var answer = [];
    // let count1 = 0;
    // let count2 = 0;
    // for(let i = 0 ; i < num_list.length ; i++){
    //     if(num_list[i] % 2 === 0 ){
    //         count2++
    //     } else
    //         count1++
    // }
    // answer.push(count2)
    // answer.push(count1)
    // return answer;
    // // Sol .2
    // return [num_list.filter((item) => item % 2 === 0 ).length, num_list.filter((item) => item % 2 === 1 ).length]
}

// 아이스 아메리카노
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}

// 편지
function solution(message) {
    var answer = message.length * 2;

    return answer;
}

// 삼각형의 완성조건 (1)
function solution(sides) {
    var answer = 0;

    sides.sort((a, b) => b - a);

    sides[0] < sides[1] + sides[2] ? (answer = 1) : (answer = 2);

    return answer;
}

// 중복된 숫자 개수
function solution(array, n) {
    var answer = array.filter((item) => item === n);

    return answer.length;
}

// 최댓값 만들기 (1)
function solution(numbers) {
    answer = numbers.sort((a, b) => b - a); // 내림차순

    return answer[0] * answer[1];
}

// 점의 위치 구하기
function solution(dot) {
    const [num, num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// 피자 나눠 먹기 (1)
function solution(n) {
    return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

// 머쓱이보다 키 큰 사람
function solution(array, height) {
    const newArr = array.filter((item) => item > height);

    return newArr.length;
}

// 순서쌍의 개수
function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        n % i === 0 ? answer++ : answer;
    }

    return answer;
}

// 배열의 유사도
function solution(s1, s2) {
    const answer = s1.filter((x) => s2.includes(x));

    return answer.length;
}
