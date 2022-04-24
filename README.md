# 원티드 프리온보딩 코스 과제
<br/>

## 1. Toggle.js
<p align="center"><img src="https://user-images.githubusercontent.com/94282246/164976529-7a3bd04d-63bd-4259-832c-ab1bc80afff9.gif"></p>

### 구현 방법
toggle이라는 state를 useState 훅을 사용하여 기본을 클릭하면 true, 상세를 클릭하면 false로 업데이트 해주었습니다.
toggle을 styled-component를 사용하여 필요한 엘리먼트에 props로 전달하여 스타일을 나누거나, 슬라이드 애니메이션 효과를 주었습니다.

슬라이드 애니메이션은 transform : translateX()를 이용하여 요소의 위치를 이동시켰습니다.


### 어려웠던 점
애니메이션으로 움직이는 박스의 위치를 조정하는 것이 어려웠습니다.

### 해결 과정
모든 요소를 감싸고 있는 부모 요소인 div의 display를 flex로 주었기 때문에, align-items : center로 두어서 움직이는 박스를 세로축의 가운데로 정렬되도록 했습니다.
움직이는 박스는 position : absolute로 위치를 지정할 수 있는 특성으로 위치의 미세한 조정을 해주었습니다.


## 2. Tab.js
<p align="center"><img src="https://user-images.githubusercontent.com/94282246/164976724-889e7373-5f96-446b-b085-d10014d042a8.gif"></p>

### 구현 방법
tab이라는 state를 useState 훅을 사용하여 선택된 탭의 이름으로 업데이트 해주었습니다.
tab 값을 styled-component의 props로 전달하여 transform : translateX()를 이용하여 각 탭마다의 슬라이드의 위치를 이동시켜주었습니다.

### 어려웠던 점
슬라이드를 위에서 이동시키고 위치를 계산하는 것이 어려웠습니다.

### 해결 과정
position : absolute로 두었고, 처음 탭은 translateX(0%)로 두고 두번째와 세번째 탭은 전체 길이의 1/3과 2/3 만큼 이동시켰습니다.


## 3. Slider.js
<p align="center"><img src="https://user-images.githubusercontent.com/94282246/164977552-314f1cf0-9def-45a0-8d3f-261c53f1f727.gif"></p>

### 구현 방법
value라는 state를 useState 훅을 사용하여 관리하였습니다.
input 요소의 type="range"를 이용하여 onChange 마다 setValue(e.target.value)로 value를 업데이트 시켜주었습니다.
하단 버튼은 onClick 시 누른 값으로 setValue로 업데이트 시켜주었습니다.
업데이트된 value를 input의 value 속성 값으로 주어서, value가 바뀔 때마다 동그라미가 이동하도록 하였습니다.


### 어려웠던 점
상단의 값에 따라 슬라이더의 위치와 하단의 버튼 위치를 균일하게 맞추는 것이 어려웠습니다.
그리고 슬라이더가 지나온 구간과 원들은 색깔이 칠해져야 하는 스타일 부분도 어려웠습니다.

### 해결 과정
1%, 25%, 50%, 75%, 100% 를 나타내는 원과 버튼의 각 부모요소를 display : flex, width : 100%로 통일하였습니다.
그리고 justify-content : space-between 속성을 주어서 다섯개의 원 및 버튼이 수평으로 동일한 간격으로 정렬되도록 하였습니다.

슬라이더가 지난 구간은 linear-gradient를 이용하여 왼쪽에서 value% 만큼은 blue를 주고, 나머지는 회색이 되도록 설정하였습니다.
기존 바에 위치한 원들은 각 원이 의미하는 값보다 value가 크다면 true로 styled-component의 props로 넘겨주어서 색깔을 채웠습니다.


## 4. Input.js
<p align="center"><img src="https://user-images.githubusercontent.com/94282246/164978959-59759ea1-737a-48d0-8cff-2dabc03da9f9.gif"></p>

### 구현 방법
이메일 형식을 체크하는 함수를 만들어서 형식에 맞는지 여부를 return 값으로 반환하여 사용하였습니다.
이메일 input에 onBlur 시에 이메일 형식 체크를 하여 형식에 맞지 않으면 에러 메세지를 띄우도록 하였습니다. (isError라는 state로 관리함)
onChange 시에도 이메일 형식 체크를 하였고 isEmail이라는 state로 관리하여 true일 경우 체크 아이콘의 색깔이 채워지도록 하였습니다.

눈 표시의 아이콘을 누를 때마다 비밀번호의 비밀 여부(isPrivate이라는 state로 관리)가 true/false로 바뀌게 하였고,
비밀 여부가 true일 경우 input의 type="password" 속성이 적용되도록 하였습니다.

### 어려웠던 점
이메일 입력 창에서 포커스가 해제되었을 때 오류메세지 나타내는 부분을 많이 찾아봤습니다.

### 해결 과정
onBlur라는 속성을 이용하였고, 이때 오류메세지를 보여줄지 말지를 관리하는 state를 isError라는 값으로 따로 만들어서
isError가 true이면 && 연산자를 이용하여 오류메세지가 조건부 랜더링되도록 구현하였습니다.

## 5. Dropdown.js
<p align="center"><img src="https://user-images.githubusercontent.com/94282246/164979107-16c2396f-b058-4e9e-8112-c0038d5477ea.gif"></p>

### 구현 방법
드롭다운 활성화 여부를 active라는 state로 관리하였고, 누르면 active가 true로 되면서 선택창이 활성화되도록 구현하였습니다.

선택 리스트 중 아무거나 선택하면 선택된 항목으로 바뀌도록 category라는 state로 관리하여 setCategory(e.target.innerText)로 업데이트 시켜주었습니다.

키워드 필터 기능은 기본 선택 리스트를 const로 선언해두고, 이 리스트를 filter라는 매서드를 사용하여서 input에서 입력하는 데이터(searchTerm이라는 state로 관리)가 포함되어있는 항목들만
보이도록 구현하였습니다.
```javascript
list.filter((el) => {
                if (searchTerm.includes(" ")) {
                  return el;
                } else if (el.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return el;
                }
              })
```

### 어려웠던 점
선택창이 펼쳐지는 부분에서 밑으로 펼쳐지도록 하는 과정에서 시간이 걸렸습니다.

### 해결 과정
드롭다운 활성화 여부를 active라는 state로 관리하였고, 누르면 active가 true로 되면서 선택창이 활성화되도록 구현하였습니다.
선택창이 활성화되는 것은 active가 false이면 transform : scaleY(0)이었다가,
true가 되면 transform : scaleY(1)과 opacity : 1 을 통해 선택창이 밑으로 보여지도록 구현했습니다.


