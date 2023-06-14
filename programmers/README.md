# level 0

### parseInt() : #### 문자열을 정수형으로 파싱한다.

```js
// 몫 구하기
function solution(num1, num2) {
    var answer = parseInt(num1 / num2);

    return answer;
}
```

### reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

```js
// 배열의 합
function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b, 0);
    /* 0은 첫 번째 인수에 제공하는 값. 
		제공하지 않으면 배열의 첫 번째 요소를 사용함.
		따라서 빈 배열일 경우 0이 없으면 오류 뜸
	*/

    return answer;
}
```

### Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다.

```js
// 두 수의 나눗셈
function solution(num1, num2) {
    var answer = Math.floor((num1 / num2) * 1000);
    // var answer = parseInt(num1 / num2 * 1000);

    return answer;
}

// 피자 나눠먹기
function solution(n) {
    return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}
```

### filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```js
// 중복된 숫자 개수
function solution(array, n) {
    var answer = array.filter((item) => item === n);

    return answer.length;
}

// 키 큰 사람
function solution(array, height) {
    var answer = 0;

    const newArr = array.filter((item) => item > height);
    answer = newArr.length;

    return answer;
}
```

### Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환한다.

```js
// 피자 나눠먹기(3)
function solution(slice, n) {
    return Math.ceil(n / slice);
}
```

### revers() : 배열의 순서를 반전한다.

```js
// 배열 뒤집기
function solution(num_list) {
    return num_list.reverse();
}
```
