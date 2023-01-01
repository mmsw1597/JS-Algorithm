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
