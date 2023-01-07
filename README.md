# JS-Algorithm

JS 알고리즘 문제 풀이

# forEach

```js
a = [10, 11, 12, 13, 14, 15];
a.forEach(
  (v, i) => {
    console.log(v, i);
  },
  [1, 2]
);
```

매개 변수 2개. 첫번째는 콜백 함수를 받음. 배열 원소를 하나씩 보면서 각 원소마다 콜백함수를 실행. 콜백함수의 첫번째 인자는 값, 두번째 인자는 인덱스.

두번째 인자는 콜백함수 내부의 this에 바인딩 되는 배열이나 객체를 보냄.

for문 대신에 사용되는 고차 함수로 보면 됨.

# map

```js
a = [10, 11, 12, 13, 14, 15];
let answer = a.map(
  function (v, i) {
    return v * v;
  },
  [1, 2]
);
```

매개변수 2개. 첫째는 콜백함수, 둘째는 콜백 내부의 this에 바인딩 되는 객체.

배열의 원소를 돌면서 콜백함수를 수행하고 반환 값으로 구성된 새로운 배열을 return함.

주의할 점은 map이 반환하는 배열의 길이는 무조건 원본 배열과 동일함. 조건문에 따라 return을 안했다면 map은 자동으로 undefined를 배열에 집어넣음. 이 점을 유의할 것.

# filter

```js
a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(
  function (v, i) {
    return v % 2 === 0;
  },
  [1, 2]
);
```

매개변수 2개. 첫째는 콜백함수, 둘째는 콜백 내부의 this에 바인딩 되는 객체.

배열의 원소를 돌면서 콜백 함수를 수행 함. 이때 콜백 함수는 참, 거짓을 반환함.

참을 반환한 원소만 배열에 추가함. 따라서 원본 배열과 filter가 반환하는 배열은 길이가 다를 수 있음.

filter는 원본 배열의 원소로만 이루어진 배열을 반환함.

# reduce

```js
function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
```

매개변수 2개. 첫째는 콜백함수, 둘째는 초기값.

콜백함수 인자는 첫째는 누적값, 둘째는 배열의 원소 값.

배열을 반환하는게 아닌 어떤 값을 반환함.

배열의 원소를 탐색하면서 콜백 함수를 수행함. 누적값은 초기값에서부터 콜백 함수를 거쳐가면서 계속 바뀌게 됨.

# charCodeAt

어떤 문자의 아스키코드 출력 함수.

# toUpperCase, toLowerCase

어떤 문자열을 대문자, 소문자로 바꾸는 함수.

# splice

첫번째 인자는 시작 idx, 두번째 인자는 제거할 개수. 이후 인자는 제거하고 새로 넣을 값들.

두번째 인자는 생략 가능. 생략 시 첫번째 인자부터 끝까지 전부 삭제

원본 배열이 바뀜에 주의.

# Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER

안정적인 정수의 최대, 최솟값 제공. Number 객체가 제공함.

# String.substring

2개 인자를 받음. 일단 첫째는 시작 idx인데, 두번째 인자로 받은 idx 전까지 잘라서 반환하는 함수임. (2,3)이면 2번째 문자만 반환.

# String.indexOf

어떤 문자열의 시작 인덱스를 반환하는 메서드. 실패하면 -1을 반환함.

인자를 하나 더 받을 수 있는데, 그 인자는 탐색 시작 index이다. 그 index 부터 탐색한다.

# Array.from

```js
Array.from({ length: 3 }, (_, i) => i);
```

배열 초기화 메서드 중 하나.

첫번째 인수는 객체를 할당 받는다. 그 객체는 length 와 각 index 숫자를 key로 갖는 객체를 받는다.

두번째 인수는 콜백함수를 받는다. 그 콜백함수의 반환값으로 배열의 나머지 부분을 채운다.

# Math.max

전달받은 인자 중 가장 큰 값 반환 메서드. 인자 개수는 제한 없는 듯.

# String.split

총 가지 인자를 받음. 첫째는 구분자, 둘째는 배열의 길이.

split 메서드는 배열을 반환함. 만약 첫번째 인자를 빈 문자열로 전달하면 문자열을 한 문자씩 분리한 배열을 반환하게 됨.

# Array.join

원본 배열을 문자열로 변환하고 전달받은 구분자로 연결하는 메서드

# Array.reverse

배열 순서를 반대로 뒤집는 메서드.
