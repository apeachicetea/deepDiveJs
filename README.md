# 모던 자바스크립트(Deep Dive)
<details>
<summary>1장. 프로그래밍</summary>

## 1장. 프로그래밍
프로그래밍은 프로그래밍 언어를 사용해 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션이다. 프로그래밍언어는 구문(syntax)과 의미(semantics)의 조합으로 표현된다.
즉, 문법에 맞는 문장을 구성하는 것은 물론 의미를 가지고 있어야 언어의 역활을 출싱히 수행할 수 있다.

```
ex) const number = 'string';
```
  
자바스크립트의 변수에는 어떠한 타입의 값도 할당할 수 있다. 따라서 위 예제는 문법적으로 전혀 문제가 없다. 하지만 의미적으로 옳지 않다. number라는 이름의 변수에 문자열이 할당되어 있기 때문이다. number라는 이름의 변수에는 숫자를 할당하는 것이 의미적으로 옳다.
</details>


<details>
<summary>2장. 자바스크립트란?</summary>

## 2장. 자바스크립트란?
자바스크립트는 HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어다. 
Node.js는 브라우저의 자바스크립트 엔진에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서도 동작할 수 있도록 자바스크립트 엔진을 브라우저에서 독립시킨 자바스크립트 실행 환경이다.
</details> 



<details>
<summary>4장. 변수</summary>

## 4장. 변수

### 4.1 변수랑 무엇인가? 왜 필요한가?
사람은 계산과 기억을 모두 두뇌에서 하지만, 컴퓨터는 연산과 기억을 수행하는 부품이 나눠져 있다. 컴퓨터는 CPU를 사용해 연산하고, 메모리를 사용해 데이터를 기억한다. 메모리는 데이터를
저장할 수 있는 메모리 셀의 집합체다. 메모리 셀 하나의 크기는 1바이트(8비트)이며, 컴퓨터는 메모리 셀의 크기, 즉 1바이트 단위로 데이터를 저장하거나 읽어들인다. 각 셀은 고유의 메모리
주소를 갖는다. 이 메모리 주소는 메모리 공간의 위치를 나타내며 0부터 시작해서 메모리의 크기만큼 정수로 표현된다.

메모리주소를 통해 값에 직접 접근하는 것은 치명적 오류를 발생시킬가능성이 높은 매우 위험한 일이다. 만약 실수로 운영체제가 사용하고 이쓴ㄴ 값을 변경하면 시스템을 멈추게 하는 치명적인 오류가 발생할 수도 있다. 따라서 자바스크립트는 개발자의 직접적인 메모리 제어를 허용하지 않는다. 

프로그래밍 언어(자바스크립트)는 기억하고 싶은 값을 메모리에 저장하고, 저장된 값을 읽어 들여 재사용하기 위해 변수라는 메커니즘을 제공한다. 변수는 하나의 값을 저장하기 위해 확보된 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다. 변수에 값을 저장하는 것을 할당이라 하고, 변수에 저장된 값을 읽어 들이는 것을 참조라 한다.

### 4.2 식별자
변수 이름을 식별자라고도 한다. 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다. 식별자라는 용어는 변수 이름에만 국한해서 사용하지않는다. 예를 들어 변수, 함수, 클래스 등의 이름은 모두 식별자다. 변수, 함수, 클래스 등의 이름과 같은 식별자는 네이밍 규칙을 준수해야 하며, 선언에 의해 자바스크립트 엔젠에 식별자의 존재를 알린다.

### 4.3 변수 선언
변수 선언이란 변수를 생성하는 것을 말한다. 좀 더 자세히 말하면 값을 저장하기 위한 메모리 공간을 확보하고 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것이다.
변수 선언에 의해 확보된 메모리 공간은 확보가 해제되기 전까지는 누구도 확보된 메무리 공간을 사용할 수 없도록 보호되므로 안전하게 사용할 수 있다. 변수를 사용하려면 반드시 선언이 필요하다. 변수를
선언할 때는 var, let, const 키워드를 사용한다.

다음 코드를 살펴보자. var 키워드는 뒤에 오는 변수 이름으로 새로운 변수를 선언할 것을 지시하는 키워드이다.
```
var score; // 변수 선언
```
[키워드]: 자바스크립트 코드를 해석하고 실행하는 자바스크립트 엔진이 수행할 동작을 규정한 일종의 명령어다.

위 변수 선언문은 score라는 변수 이름을 등록하고 값을 저장할 메모리 공간을 확보한다.

변수를 선언한 이후, 아직 변수에 값을 할당하지 않았다. 따라서 변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 있으나 확보된 메모리 공간에는 자바스크립트 엔진에 의해 undefined라는 값이 암묵적으로 할당되어 초기화된다. 이것은 자바스크립트의 독특한 특징이다.

자바스크립트 엔진은 변수 선언을 다음과 같은 2단계에 거쳐 수행한다.

- 선언 단계: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
- 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

[변수 이름은 어디에 등록되는가?]: 변수 이름을 비롯한 모든 식별자는 실행 컨텍스트에 등록된다. 실행 컨텍스트는 자바스크립트 엔진이 소스코드를 평가하고 실행하기 위해 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다. 자바스크립트 엔진은 실행 컨텍스트를 통해 식별자와 스코프를 관리한다. 변수 이름과 변수 값은 실행 컨텍스트 내에 키 / 값 형식인 객체로 등록되어 관리된다.

var 키워드를 사용한 변수 선언은 선언 단계와 초기화 단계가 동시에 진행된다. var score;는 선언 단계를 통해 변수 이름 score를 등록하고, 초기화 단계를 통해 score 변수에 암묵적으로 undefined를 할당해 초기화한다. 일반적으로 초기화란 변수가 선언된 이후 최초로 값을 할당하는 것을 말한다. var 키워드로 선언한 변수는 어떠한 값도 할당하지 않아도 undefined라는 값을 갖는다.

만약 초기화 단계를 거치지 않으면 확보된 메모리 공간에는 이전에 다른 애플리케이션이 사용했던 값이 남아있을 수 있다. 이러한 값을 쓰레기 값이라 한다. 따라서 메모리 공간을 확보한 다음, 값을 할당하지 않은 상태에서 곧바로 변수 값을 참조하면 쓰레기 값이 나올 수 있다. 자바스크립트의 var 키워드는 암묵적으로 초기화를 수행하므로 이러한 위험으로부터 안전하다.

### 4.4 변수 선언의 실행 시점과 변수 호이스팅
[예제 04-05]
```
console.log(score); // undefined
var score; // 변수 선언문
```
변수 선언문보다 변수를 참조하는 코드가 앞에 있다. 자바스크립트 코드는 인터프리터에 의해 한 줄씩 순차적으로 실행되므로 console.log(score);가 가장 먼저 실행되고 순차적으로 다음 줄에 있는 코드를 실행한다. 따라서 console.log(score);가 실행되는 시점에는 아직 score 변수의 선언이 실행되지 않았으므로 참조 에러가 발생할 것처럼 보인다. 하지만 참조 에러가 발생하지 않고 undefined가 출력된다. 그 이유는 변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단계에서 먼저 실행되기 때문이다. 자바스크립트 엔진은 변수 선언이 어디에 있든 상관없이 다른 코드보다 먼저 실행한다. 따라서 변수 선언이 소스코드의 어디에 위치하는지와 상관없이 어디서든지 변수를 참조할 수 있다. 이처럼 변수 선언문이 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다. 사실 변수 선언뿐 아니라 var, let, const, funtion, class 키워드를 사용해서 선언하는 모든 식별자(변수, 함수, 클래스 등)는 호이스팅된다. 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.

### 4.5 값의 할당
[예제 04-06]
```
var score; // 변수 선언
score = 80; // 값의 할당
```

[예제 04-07]
```
var score = 80; // 변수 선언과 값의 할당
```

변수 선언과 값의 할당을 2개의 문으로 나누어 표현한 코드와 변수 선언과 값의 할당을 하나의 문으로 단축 표현한 코드는 정확히 정확히 동일하게 동작한다. 즉 자바스크립트 엔진은 변수 선언과 값의 할당을 하나의 문으로 단축 표현해도 변수 선언과 값의 할당을 2개의 문으로 나누어 각각 실행한다.

이때 주의할 점은 변수 선언과 값의 할당의 실행 시점이 다르다는 것이다. 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다. 

[예제 04-08]
```
console.log(score); // undefined
var score; // 변수 선언
score = 80; // 값의 할당
console.log(score); // 80
```
변수 선언은 런타임 이전에 먼저 실행되고 값의 할당은 런타임에 실행된다. 따라서 score 변수에 값을 할당하는 시점에는 이미 변수 선언이 완료된 상태이며, 이미 undefined로 초기화되어 있다. 따라서 socre 변수에 값을 할당하면 score 변수의 값은 undefined에서 새롭게 할당한 숫자 값 80으로 변경된다. 변수에 값을 할당할 때는 이전 값 undefined가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 할당 값 80을 새롭게 저장하는 것이 아니라 새로운 메모리 공간을 확보하고 그곳에 할당 값 80을 저장한다는 점을 주의하자.

[예제 04-10]
```
console.log(score); // undefined
score = 80; // 값의 할당
var score; // 변수 선언
console.log(score); // ?? => 답은 80이다.
```
### 4.6 값의 재할당
재할당이란 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것을 말한다. 변수에 다른 값으로 재할당되어 불필요해진 기존 값들은 가비지 콜렉터에 의해 메모리에서 자동 해제된다. 단, 메모리에서 언제 해제될지는 예측할 수 없다.

[가비지 콜렉터]: 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 더 이상 사용되지 않은 메모리를 해제하는 가능을 말한다. 더이상 사용되지 않는 메모리란 어떤 식별자도 참조하지 않는 메모리 공간을 의미한다. 자바스크립트는 가비지 콜렉터를 내장하고 있는 매니지드 언어로서 가비지 콜렉터를 통해 메모리 누수를 방지한다.

[언매니지드 언어와 매니지드 언어]: 프로그래밍 언어는 메모리 관리 방식에 따라 언매니지드 언어와 매니지드 언어로 분류할 수 있다.
C 언어 같은 언매니지드 언어는 개발자가 명시적으로 메모리를 할당하고 해제하기 위해 여러가지 메모리 제어 기능을 제공한다. 메모리 제어를 개발자가 주도할 수 있으므로 개발자의 역량에 따라 최적의 성능을 확보할 수 있지만 그 반대의 경우 치명적 오류를 생산할 가능성도 있다.

자바스크립트 같은 매니지드 언어는 메모리의 할당 및 해제를 위한 메모리 관리 기능을 언어 차원에서 담당하고 개발자의 직접적인 메모리 제어를 혀용하지 않는다. 즉 개발자가 명시적으로 메모리를 할당하고 해제할 수 없다. 더 이상 사용하지 않는 메모리의 해제는 가비지 콜렉터가 수행하며, 이 또한 개발자가 관여할 수 없다. 매니지드 언어는 개발자의 역량에 의존하는 부분이 상대적으로 작아져 어느 정도 일정한 생산성을 확보할 수 있다는 장점이 있지만 성능 면에서는 어느 정도의 손실은 감수할 수 밖에 없다.

### 4.7 식별자 네이밍 규칙
식별자는 다음과 같은 네이밍 규칙을 준수해야 한다.
- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.
- 단, 식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
- 예약어는 식별자로 사용할 수 없다.
</details> 

<details>
<summary>5장. 표현식과 문</summary>

## 5장. 표현식과 문

### 5.1 값
값은 식(표현식)이 평가되어 생성된 결과를 말한다. 평가란 식을 해석해서 값을 생성하거나 참조하는 것을 의미한다. 

[예제 05-01]
```
// 10 + 20은 평가되어 숫자 값 30을 생성한다.
10 + 20; //30
```
### 5.2 리터럴
리터럴은 사람이 이해할 수 있는 문자 약속된 기호를 사용해 값을 생성하는 표기법을 말한다.

[예제 05-03]
```
3 //숫자 리터럴 3
```
위 예의 3은 단순한 아라비아 숫자가 아니라 숫자 리터럴이다. 사람이 이해할 수 있는  아라비아 숫자를  사용해 숫자 리터럴 3을 코드에 기술하면 자바스크립트 엔진은 이를 평가해 숫자 값 3을 생성한다.

### 5.3 표현식
표현식은 값으로 평가될 수 있는 문이다. 즉, 표현식이 평가되면 새로운 값을 생성하거나 기존의 값을 참조한다. 앞서 살펴본 리터럴은 값으로 평가된다. 따라서 리터럴도 표현식이다.

[예제 05-07]
```
// 리터럴 표현식
10
'Hello'

// 식별자 표현식(선언이 이미 존재한다고 가정)
sum
divide
arr[1]

// 연산자 표현식
10 + 20
sum = 10
sum !== 10

// 함수/메서드 호출 표현식(선언이 이미 존재한다고 가정)
square()
person.getName()
```
이처럼 표현식은 리터럴, 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등의 조합으로 이뤄질 수 있다. 위와 같이 다양한 표현식이 있지만 값으로 평가된다는 점에서 모두 동일하다. 즉, 값으로 평가될 수 있는 문은 모두 표현식이다.

### 5.4 문
문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위이다. 문의 집합으로 이뤄진 것이 바로 프로그램이며, 문을 작성하고 순서에 맞게 나열하는 것이 프로그램밍이다.

[예제 05-09]
```
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
funtion foo() {}

// 조건문
if (x > 1) { console.log(x); }

// 반복문
for (var i = 0; i < 2; i++) { console.log(x); }
```

### 5.6 표현식인 문과 표현식이 아닌 문
[예제 05-11]
```
// 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
// 변수 선언문은 표현식이 아닌 문이다.
var x 

// 1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다.
// x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
x = 1 + 2

// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다.  
// 즉, 할당문은 표현식인 문이다.
x = 100
```

표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명로한 방법은 변수에 할당해 보는 것이다. 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있다. 하지만 표현식이 아닌 문은 값으로 평가할 수 없으므로 변수에 할당하면 에러가 발생한다.
</details>

<details>
<summary>6장. 데이터 타입</summary>

## 6장. 데이터 타입
데이터 타입(줄여서 '타입'이라고도 한다)은 값의 종류를 말한다. 자바스크립트의 모든 값은 데이터 타입을 갖는다. 자바스크립트(ES6)은 7개의 데이터 타입을 제공한다. 7개의 데이터 타입은 원시 타입과 객체타입으로 분류할 수 있다.

***원시 타입***
- 숫자타입 : 숫자. 정수와 실수 구분 없이 하나의 숫자 타입만 존재
- 문자열 타입 : 문자열
- 불리언 타입 : 논리적 참과 거짓
- undefined 타입 : var 키워드로 선언된 변수에 암묵적으로 할당되는 값
- null 타입 : 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
- 심벌 타입 : ES6에서추가된 7번째 타입

***객체 타입***
- 객체, 함수, 배열 등

### 6.9 데이터 타입의 필요성
1. 값을 저장할 때 확보해야 하는 ***메모리 공간의 크기***를 결정하기 위해
2. 값을 참조할 때 한 번에 읽어 들어야 할 ***메모리 공간의 크기***를 결정하기 위해
3. 메모리에서 읽어들인 ***2진수를 어떻게 해석***할지 결정하기 위해

***6.9.1 데이터 타입에 의한 메모리 공간의 확보와 참조***

[예제 06-21]
```
var score = 100;
```
자바스크립트 엔진은 데이터 타입, 즉 값의 종류에 따라 정해진 크기의 메모리 공간을 확보한다. 즉, 변수에 할당되는 값의 데이터 타입에 따라 확보해야 할 메모리 공간의 크기가 결정된다.
이번에는 값을 참조하는 경우를 생각해보자. 값을 참조 하려면 한 번에 읽어 들여야 할 메모리 공간의 크기, 즉 메모리 셀의 개수(바이트 수)를 알아야 한다. 숫자 타입일 경우 8바이트 단위로 읽어 들이지 않으면
값이 훼손된다. 그렇다면 컴퓨터는 한 번에 읽어 들여야 할 메모리 셀의 크기를 어떻게 알 수 있는 것일까? 변수에는 숫자 타입의 값이 할당되어 있으므로 자바스크립트 엔진은 score 변수를 숫자 타입으로 인식한다. 숫자 타입은 8바이트 단위로 저장되므로 score 변수를 참조하면 8바이트 단위로 메모리 공간에 저장된 값을 읽어 들인다.

***6.9.2 데이터 타입에 의한 값의 해석***

메모리에 읽어 들인 2진수를 어떻게 해석해야 하느냐는 문제가 남아 있다. 메모리에 저장된 값은 데이터 타입에 따라 다르게 해석될 수 있다. 예를 들어, 메모리에 저장된값 0100 0001을 숫자로 해석하면 65지만
문자열로 해셕하면 'A'다. 앞에서 살펴본 예제의 score 변수에 할당된 값은 숫자 타입의 값이다. 따라서 score 변수를 참조하면 메모리 공간의 주소에서 읽어들인 2진수를 숫자로 해석한다.


### 6.10 동적 타이핑

C나 자바같은 정적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 값을 종류, 즉 데이터 타입을 사전에 선언해야 한다. 이를 통해 타입의 일관성을 강제함으로써 더욱 안정적인 코드의 구현을 통해 런타임에 발생하는 에러를 줄인다.

자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. 이러한 특징을 동적 타이핑이라 하며, 자바스크립트를 동적 타입 언어라 한다.

***6.10.2 동적 타입 언어와 변수***

자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 한다. 즉, 숫자 타입의 변수일 것이라고 예측했지만 사실은 문자열 타입의 변수일 수도 있다는 말이다.
잘못된 예측에 의해 작성된 프로그램은 당연히 오류를 뿜어낼 것이다. 결국 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다.
</details>

<details>
<summary>8장. 제어문</summary>

## 8장. 제어문

### 8.1 블록문

블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다. 자바스크립트는 블록문을 하나의 실행 단위로 취급한다. 블록문은 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반 적이다. 문의 끝에는 세미콜론을 붙이는 것이 일반적이다. 하지만 블록문은 언제나 문의 종료를 의미하는 자체 종결성을 갖기 때문에 블록문 끝에는 세미콜론을 붙이지 않는다는 것에 주의해야 한다.

[예제 08-01]
```
// 블록문
{ 
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
funtion sum(a, b) {
  return a + b;
}
```

### 8.2.2 switch문
switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다. case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.

[예제 08-07] 
```
var month = 11;
var monthName;

switch(month) {
  case 1: monthName = 'Janauary';
  ...
  case 11: monthName = 'November';
  case 12: monthName = 'December';
  default: monthName = 'Invaild month';
}

```

위 예제를 실행해 보면 'November'가 출력되지 않고 'Invaild month'가 출력된다. 이는 switch 문의 표현식의 평과 결과와 일치하는 case 문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만 문을 실행한 후 switch 문을 탈출하지 않고 switch 문이 끝날 때까지 이후의 모든 case 문과 default 문을 실행했기 때문이다. 이를 폴스루(fall through)라 한다. 다시 말해 monthName 변수에 'November'가 할당된 후 switch 문을 탈출하지 않고 연이어 'December'가 재할당되고 마지막으로 'Invaild month'가 재할당된 것이다.

이러한 결과가 나온 이유는 case 문에 해당하는 문의 마지막에 break 문을 사용하지 않았기 때문이다. break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역활을 한다. break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 흐름이 다음 case 문으로 연이어 이동한다. 따라서 올바른 switch 문은 다음과 같다.

[예제 08-08] 
```
var month = 11;
var monthName;

switch(month) {
  case 1: monthName = 'Janauary';
    break;
  ...
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invaild month';
}

```

default 문에는 break 문을 생략하는 것이 일반적이다. default 문은 switch 문의 맨 마지막에 위치하므로 default 문의 실행이 종료되면 switch 문을 빠져나간다. 따라서 별도로 break 문이 필요 없다.

### 8.3 반복문

***8.3.1 for문***

for 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.
```
for(변수 선언문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```

[예제 08-10]
```
for(var i = 0; i < 2; i++) {
  console.log(i);
}
```

***for 문의 실행 순서***
1. for 문을 실행하면 먼저 변수 선언문 var i = 0이 실행된다. 변수 선언문은 단 한번만 실행된다.
2. 변수 선언문이 실행이 종료되면 조건식이 실행된다. 현재 변수 i 값은 0이므로 조건식의 평가결과는 true다.
3. 조선식의 평과 결과가 true이므로 코드 블록이 실행된다. 증감문으로 실행 흐름이 이동하는 것이 아니라 코드 블록으로 실행 흐름이 이동하는 것에 주의하자.
4. 코드 블록의 실행이 종료되면서 증감식 i++가 실행되어 i 변수의 값은 1이 된다.
5. 증감식 실행이 종료되면 다시 조건식이 실행된다. 변수 선언문이 실행되는 것이 아니라 조건식이 실행된다는 점에 주의하자(앞에서 설명했지만 변수 선언문은 단 한번만 실행된다). 현재 i 변수의 값은 1이므로 조건식의 평가 결과는 true다.
6. 조건식의 평가 결과가 true이므로 코드 블록이 다시 실행된다.
7. 코드 블록의 실행이 종료되면 증감식 i++가 실행되어 i 변수의 값은 2가 된다.
8. 증감식 실행이 종료되면 다시 조건식이 실행된다. 현재 i 변수의 값은 2이므로 조건식의 평가 결과는 false다. 조건식의 평가 결과가 false이므로 for 문의 실행이 종료된다. 

### 8.4 break 문

break 문은 코드 블록을 탈출한다. 좀 더 정확히 표현하자면 코드 블록을 탈출하는 것이 아니라 **레이블 문, 반복문 또는 switch 문의 코드 블록을 탈출**한다. 레이블 문, 반복문, switch 문의 코드 블록 외에 break 문을 사용하면 문법 에러가 발생한다.

### 8.5 continue 문

continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 **반복문의 증감식으로 실행 흐름을 이동**시킨다. break 문처럼 반복문을 탈출하지 않는다.

</details>

<details>
<summary>9장. 타입 변환과 단축 평가</summary>
  
## 9장. 타입 변환과 단축 평가

### 9.1 타입 변환이란?

개발자가 의도적으로 값의 타입을 변환하는 것을 ***명시적 타입 변환*** 또는 타입 캐스팅이라 한다. 개발자의 의도와 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환 되기도 
한다. 이를 ***암묵적 타입 변환*** 또는 타입 강제 변환이라 한다.
  

### 9.2 암묵적 타입 변환

[예제 09-03]
```
// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // 50

// 피연산자 또는 표현식이 블리언 타입이어야 하는 문맥
!0 // true  
```
  
***9.2.1 문자열 타입으로 변환***

자바스크립트 엔진은 문자열 타입 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 때 다음과 같이 동작한다.  
  
[예제 09-06]
```
// 숫자 타입
0 + '' // '0'
-0 + '' // '0'  
-1 + ;; // '-1'
NaN + '' // 'NaN'
  
// 불리언 타입
true + '' // 'true'
false + '' // 'false'
  
// null 타입
null + '' // 'null'
  
// undefined 타입
undefined + '' // 'undefined'
```
  
***9.2.2 숫자 타입으로 변환***

[예제 09-07]
```
1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN  
'1' > 0 // true  
```  
  

[예제 09-09]
```
// 문자열 타입
+'' // 0
+'0' // 0
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0
  
// null 타입
+null // 0

// undefined 타입
+undefined // NaN
```   

***9.2.3 불리언 타입으로 변환***  

if 문이나 for 문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가되어야 하는 표현식이다. 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다. ***이때 자바스크립트 엔진은 불리언 타입이 아닌 값은 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.*** 즉, 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy 값은 true로, Falsy 값은 false로 암묵적 타입 변환된다.
  
[예제 09-11]
```
if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
  
// 2, 4
```  
  
아래 값들은 false로 평가되는 Falsy 값이다.
- false
- undefined
- null
- 0, -0
- NaN
- ''(빈문자열)
  

### 9.3 명시적 타입 변환


***9.3.1 문자열 타입으로 변환***  
1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 매서드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

[예제 09-14]
```
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법 
String(1) // '1'
  
// 2. Object.prototype.toString 매서드를 사용하는 방법
(1).toString(); // '1'
    
// 3. 문자열 연결 연산자를 이용하는 방법
1 + '' // '1'  
```
  
***9.3.2 숫자 타입으로 변환***  
1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
3. + 단항 산술 연산자를 이용하는 방법
4. * 산술 연산자를 이용하는 방법

[예제 09-15]
```
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법 
Number('0') // 0
  
// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
parseInt('0') // 0
parseFloat('-1') // -1
   
// 3. + 단항 산술 연산자를 이용하는 방법
+'0' // 0
+'10.53' // 10.53

// 4. * 산술 연산자를 이용하는 방법
'0' * 1; // 0
'-1' * 1; // 1  
```
  
***9.3.3 불리언 타입으로 변환***  
1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두 번 사용하는 방법

[예제 09-16]
```
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean('x') // true
Boolean('') // false
Boolean('false') // true  
  
// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
!!'x'; // true
!!''; // false  
```
  

### 9.4 단축 평가

***9.4.1 논리 연산자를 사용한 단축 평가*** 
***논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수 도 있다. 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.***

논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 논리곱 연산자는 좌항에서 우항으로 평가가 진핸된다. 첫 번째 피연산자 'Cat'은 Truthy 값이므로 true로 평가된다. 하지만 이 시점까지는 위 표현식을 평가할 수 없다. 두 번째 피연산자까지 평가해 보아야 위 표현식을 평가할 수 있다. 다시 말해, 두 번째 피연산자가 위 논리곱 연산자 표현식의 평가 결과를 결정한다. ***이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다.***
  
논리합(||) 연산자도 논리곱(&&) 연산자와 동일하게 동작한다.
  
[예제 09-17]
```
'Cat' && 'Dog' // 'Cat'  
```  

논리합(||) 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 논리합 연산자도 좌항에서 우항으로 평가가 진행된다. 첫 번째 피연산자 'Cat'은 Truthy 값이므로 true로 평가된다. 이 시점에 두번째 피연산자까지 평가해 보지 않아도 위 표현식을 평가할 수 있다. 이때 논리합 연산자는 논리 연산의 결과를 결정한 첫 번째 피연선자, 즉 문자열 'Cat'을 그대로 반환한다.
  
***논리합(||) 연산자와 논리곱(&&) 연산자는 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다. 이를 단축 평가라 한다.*** 단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

[예제 09-18]
```
'Cat' || 'Dog' // 'Cat'   
``` 

[예제 09-19]
```
// 논리합(||) 연산자
'Cat' || 'Dog' // 'Cat'
false || 'Dog' // 'Dog'
'Cat' || false // 'Cat'    
  
// 논리곱(&&) 연산자
'Cat' && 'Dog' // 'Cat'  
false && 'Dog' // false
'Cat' && false // false    
``` 

단축 평가를 사용하면 if 문을 대체할 수 있다.

[예제 09-20]
```
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';
  
// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료'; // '완료'
```

[예제 09-21]
```
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료';
  
// if 문은 단축 평가로 대체 가능하다.
// done이 false라면 message에 '미완료'를 할당
message = done || '미완료'; // '미완료'
```  
  
</details>

<details>
<summary>11장. 원시 값과 객체의 비교</summary>

## 11장. 원시 값과 객체의 비교
6장 "데이터 타입"에서 살펴보았듯이 자바스크립트가 제공하는 7가지 데이터 타입(숫자, 문자열, 불리언, null, undefined, 심벌, 객체 타입)은 크게 **원시 타입(primitive type)과 객체 타입(object/reference type)** 으로 구분할 수 있다. 데이터 타입을 원시 타입과 객체 타입으로 구분하는 이유는 무엇일까? 원시 타입과 객체 타입은 근본적으로 다르다는 의미일 것이다. 원시 타입과 객체 타입은 크게 세 가지 측면에서 다르다

- 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값이다.
- 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 **값에 의한 전달**이라 한다. 이에 비해 객체를 가르키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 **참조에 의한 전달**이라 한다.

### 11.1 원시값
  
***11.1.1 변경 불가능한 값***<br />
**원시타입(primitive type)의 값, 즉 원시 값은 변경 불가능한 값**이다. 즉, "원시 값은 변경 불가능하다"는 말은 원시 값 자체를 변경할 수 없다는 것이지 변수 값을 변경할 수 없다는 것은 아니다. 변수는 언제든지 재할당을 통해 변수 값을 변경(엄밀히 말하면 교체)할 수 있다.
  
[예제 09-18]
```java
// const 키워드를 이용해 선언한 변수는 재할당이 금지된다.
const o = {};
  
// const 키워드를 사용해 선언한 변수에 할당한 원시 값은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o.); // { a: 1 }
``` 

***11.1.3 값에 의한 전달***<br />

[예제 11-07]
```java
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;
  
console.log(score, copy) // 80, 80
console.log(score === copy); // true
```
이때 score 변수와 copy 변수는 숫자 값 80을 갖는다는 점에서는 동일하다. **하지만 score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다.**
![KakaoTalk_Photo_2022-06-25-20-10-03](https://user-images.githubusercontent.com/89075605/175770968-0e0e00fe-34cc-4fda-ba14-40b9cc345de9.jpeg)
  
사실 위 그림은 실제 자바스크립트 엔진의 내부 동작과 정확히 일치하지 않을 수 있다. ECMAScript 사양에는 변수를 통해 메모리를 어떻게 관리해야 하는지 명확하게 정의되어 있지 않다. 따라서 실제 자바스크립트 엔진을 구현하는 제조사에 따라 실제 내부 동작 방식은 미묘한 차이가 있을 수 있다.
  
**결국은 두 변수의 원시 값은 서로 다른 메모리 공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할 수 없다**는 것이다.

### 11.2 객체
객체는 프로퍼티의 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제할 수 있다. 도한 프로퍼티의 값에도 제약이 없다. 따라서 객체는 원시 값과 같이 확보해야 할 메모리 공간의 크기를 사전에 정해 둘 수 없다.
  
객체는 복합적인 자료구조이므로 객체를 관리하는 방식이 원시 값과 비교해서 복잡하고 구현 방식도 브라우저 제조사마다 다를 수 있다. 원시 값은 상대적으로 적은 메모리를 소비하지만 객체는 경우에 따라 크기가 매우 클 수도 있다. 객체를 생성하고 프로퍼티에 접근하는 것도 원시 값과 비교할 때 비용이 많이 드는 일이다.
  
따라서 객체는 원시 값과는 다른 방식으로 동작하도록 설계되어 있다.
  
***11.2.1 변경 가능한 값***<br />
객체(참조) 타입의 값, 즉 객체는 변경 가능한 값이다. 
  
[예제 11-11]
```java
var person = {
  name: 'Lee'
};
```
원시 값을 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 원시 값에 접근한 수 있다. 즉, 원시 값을 할당한 변수는 원시 값 자체를 값으로 갖는다. 하지만 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 **참조 값**에 접근할 수 있다. 참조 값은 생성된 객체가 저장된 메모리 공간의 주소, 그 자체다.
  
다음 그림을 보면 객체를 할당한 변수에는 생성된 객체가 실제로 저장된 메모리 공간의 주소가 저장되어 있다. 이 값을 참조 값이라고 한다. 변수는 이 참조 값을 통해 객체에 접근할 수 있다.
  ![KakaoTalk_Photo_2022-06-25-20-24-19](https://user-images.githubusercontent.com/89075605/175771401-e8ec8ec3-cbec-4a2f-bcf1-ca4fda2f2d0f.jpeg)

객체를 할당한 변수를 참조하면 메모리에 저장되어 있는 참조 값을 통해 실제 객체에 접근한다.

[예제 11-12]
```java
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
  name: "Lee"
};
  
// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); // { name: "Lee" }
```

일반적으로 원시 값을 할당한 변수의 경우 "변수는 O값을 갖는다" 또는 "변수의 값은 O다"라고 표현한다. 하지만 객체를 할당한 변수의 경우 "변수는 객체를 참조하고 있다" 또는 "변수는 객체를 가리키고(point) 있다"라고 표현한다. 위 예제에서 person 변수는 객체 `{ name: "Lee" }`를 가리키고(참조하고) 있다.\
  
**원시 값은 변경 불가능한 값이므로 원시 값을 갖는 변수의 값을 변경하려면 재할당 외에는 방법이 없다. 하지만 객체는 변경 가능한 값이다. 따라서 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다. 즉, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다.**
  
[예제 11-13]
```java
var person = {
  name: "Lee"
};
  
// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.address = "Seoul";

console.log(person); // { name: "Kim", address: "Seoul" }
```
객체는 변경 가능한 값이므로 메모리에 저장된 객체를 직접 수정할 수 있다. 이때 객체를 할당한 변수에 재할당을 하지 않았으므로 객체를 할당한 변수의 참조 값은 변경되지 않는다.

![KakaoTalk_Photo_2022-06-25-20-24-24](https://user-images.githubusercontent.com/89075605/175771780-7537d0b0-8ca6-4bf4-a575-442929aad8ba.jpeg)

메모리를 효율적으로 사용하기 위해, 그리고 객체를 복사해 생성하는 비용을 절약하여 성능을 향샹시키기 위해 객체는 변경 가능한 값으로 설계되어 있다. 객체는 이러한 구조적 단점에 따른 부작용이 있다. 그것은 원시 값과는 다르게 **여러 개의 식별자가 하나의 객체를 공유할 수 있다는 것**이다.

***얕은 복사(shallow copy)와 깊은 복사(deep copy)***<br />
객체를 프로퍼티 값으로 갖는 객체의 경우 얕은 복사는 한 단계까지만 복사하는 것을 말하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.
  
[예제 11-14]
```java
const o = { x: { y: 1 } };
  
// 얕은 복사
const c1 = { ...o }; 
console.log(c1 === o); // false;
console.log(c1.x === o.x); // true;

// 깊은 복사
// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');
  
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false;
console.log(c2.x === o.x); // false;

```
**얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체**다. **즉, 원본과 복사본은 참조 값이 다른 별개의 객체다.** 하지만 **얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사**하고 **깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만든다는 차이**가 있다.
  
참고로 다음과 같이 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는 경우도 있다.
[예제 11-15]
```java
const v = 1;

// 깊은 복사라고 부르기도 한다.
const c1 = v;
console.log(c1 === v); // true;

const o = { x: 1 };
// 얕은 복사라고 부르기도 한다.
const c2 = o; 
console.log(c2 === o); // true;
```

***11.2.2 참조에 의한 전달***<br />
  

  
  ### 6.9 데이터 타입의 필요성




</details>

<details>
<summary></summary>


</details>

<details>
<summary></summary>


</details>

<details>
<summary></summary>


</details>

 <details>
<summary></summary>


</details>






