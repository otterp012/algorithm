## CS2, 쉘 스크립트

`쉘 스크립트 명령을 활용해서 백업, 원격 복사, 파일 생성등을 자동화할 수 있다`

### 쉘

- _Shell은 OS와 대화하는 프로그램을 말한다._
- 이 문제를 보고, 생각이 난 것은 예전에 Oh my zsh를 설치할때 :wq 명령어를 사용하는 부분이었는데, 
- 그때, 그냥 : 하면 되는걸 엔터와 각종 다른 단축키 사용으로 항상 망쳐버렸던 점이였다.
- 쉘 종류는 여러가지가 있는데, 이번 문제에서는 bash나 zsh를 사용한다.

### 기본적인 명령어

```
pwd
// 현재 디렉토리를 확인한다.

ls -al
// List Directory 디렉토리의 내용을 보여준다.
```

```
mkdir project // 프로젝트 디렉토리를 생성한다.
ls
pwd // 디렉토리를 확인해보면, project가 새로 생성된 것이 보인다.
cd project // project 디렉토리로 이동할 수 있다.
ls 
pwd
```

```
cat 
// 파일 내용을 표시한다.
```

- [lucas에서 확인할 수 있는 추가적인 쉘 명령어](https://lucas.codesquad.kr/masters-2022/course/CS-10/linux/%EB%B0%B0%EA%B2%BD-%EC%A7%80%EC%8B%9D)

### 쉘 명령어로 입력 및 출력하기
- 이번 과제를 풀기 위해서, 셀 명령어의 입출력과 그에 대한 기본 문법을 공부해야 겠다는 생각이 들었다.
- 그런데, 'hello world'를 출력하는 것도 힘들었다.
- 다행히, 정리되어 있는 블로그를 참고 한뒤 하나 하나 완성해 나갔다.
- 쉘스크립트 문법 자체는, 가끔 보이던 C언어와 비슷하다는 생각이 들었다.

### 기본적인 입출력
```
#!/bin/bash

echo "Echo Test"
printf "hello world"

## 기본 출력

## 변수 선언

test="abc"
num=100
## num = 100 으로 띄어쓰기 하니까 오류가 났다.

echo ${test}
echo ${num}
```
- _무언가 자바스크립틀를 처음 배울때로 돌아간 듯한 느낌 🥲_

### 조건문, 반복문

```
num=100

if [ ${num}==100 ]
then
    echo "num is 100!"
fi
// 띄어쓰기가 틀리면 오류가 난다!

if [ expression ] ; then
  명령어
elif [ expression ] ; then
  명령어
else 
  명령어
fi
```

```
list="1 2 3 4 5"
for i in $list 
do
    echo $i
done
```

- 모양은 거의 비슷한데, 이러한 쉘 함수로 아래의 풀이를 해야 하는데.
- 직접적으로 파일에 영향을 끼칠 수 있는지가 궁금했다.

### 하위 디렉토리에 폴더 생성하는 스크립트
- 이번 문제를 풀기 위해선, 하위 디렉토리에 폴더를 생성하거나 하위 디렉토리에 파일이 이미 존재하는지 확인할 수 있어야 한다.
- 이를 위해서, _하위디렉토리에 폴더를 생성하는 스크립트_ 를 먼저 작성 해보았는데, 작동했다!

```
#!/bin/bash

CreateDir=/Users/otter/Desktop/shellScript/TESTDirectory

mkdir $CreateDir

## testDirectory가 생성되었다.
## 그럼 이걸 반복문을 사용해서 day1 부터 시작하는 폴더 16개를 만들어 줄 수 있지 않을까?
```
![testDirectory](https://user-images.githubusercontent.com/87624756/148355776-039cb55f-2daa-4f5c-ad4c-f32da80f90a3.png)


### day1 - day16까지의 폴더를 동적생성하는 쉘 스크립트
```
for ((i=1 ; i<17 ; i++))
do
CreateDir=/Users/otter/Desktop/shellScript/day${i}

mkdir $CreateDir
done
```
- 이렇게 하고 실행하니까, day1, day16까지의 폴더를 동적으로 생성할 수 있었다.
- 또한, for문도 저렇게 쓰니까 확실히 눈에 들어와서 다행이였다.

- [쉘 스크립트로 폴더 동적생성 참고 페이지](https://ponyozzang.tistory.com/644)
- [간단한 쉘스크립트 문법 정리와 예제](https://twpower.github.io/131-simple-shell-script-syntax)

## 프로그래밍 요구사항

- [X] 내 PC의 특정한 디렉토리 아래 day1 부터 day16까지 문제 해결을 저장한 디렉토리가 있다고 가정한다.
    - 각 디렉토리 아래에는 작업한 소스 파일들이 들어있다.
    - 작업한 소스는 a.cs 처럼 파일 내용은 없어도 되고, 확장자가 cs로 끝난다.
- [X] bash 셀 스크립트로 현재 디렉토리 아래있는 day1에서 day16 디렉토리 중에서 있는 .cs 파일만 zip으로 압축해서 백업하는 스크립트를 자동화해서 구현한다.
    - 백업 파일이니까 어떤 제약사항이 있는지 고민해본다.
    - 디렉토리 정보를 포함해야 하나? 다른 디렉토리에 파일이름이 겹칠 수 있나?
- [X] 스크립트 진행 도중에 .cs 파일이 없는 디렉토리가 있으면, 어느 디렉토리가 없는지 문구를 출력한다.
- [X] 예를 들어 day7/ 경로 아래 .cs 파일이 없으면 day7 is empty 같은 문구를 출력할 수 있다.
- [X] 스크립트는 .cs 파일들을 압축해서 가상머신 리눅스 /backup 경로에 복사한다.
- [X] 로컬에 생성한 .zip 파일은 scp 명령을 사용해서 가상 머신으로 복사한다. (패스워드를 입력하는 단계를 생략할 필요는 없다.)
- [ ] 백업 파일 이름에는 실행한 날짜를 붙여서 복사한다. 예시) backup_20220105.zip

#### 내 PC의 특정한 디렉토리 아래 day1 부터 day16까지 문제 해결을 저장한 디렉토리가 있다고 가정한다.
- 우선 가정되어야 하는 내용에 대해 실제로 출력해 확인해 보기 위해,
- ~~desktop의, test 디렉토리에 day1부터 day16까지의 디렉토리를 저장했다.~~
- _공부하는 중 for문과 폴더 디렉토리를 생성하는 쉘 스크립트로, 동적으로 day1부터 day16까지의 폴더를 생성했다._

```
for ((i=1 ; i<17 ; i++))
do
CreateDir=/Users/otter/Desktop/shellScript/day${i}

mkdir $CreateDir
done
```

![dayDirectory](https://user-images.githubusercontent.com/87624756/148355786-bc267aae-fe2a-45fe-a555-a35d21330047.png)
- _이런식으로 폴더 생성하고 나니까 이거 좀 신기한데? 생각이 들었다. 신기해 👨‍💻_

#### 스크립트 진행 도중에 .cs 파일이 없는 디렉토리가 있으면, 어느 디렉토리가 없는지 문구를 출력한다.
- _이 문제를 해결하기 위해 조건문으로 해당 디렉토리에 .cs 파일이 있는지 확인해야 한다._
- 해당 디렉토리에 존재하고 있는 파일들을 확인하는 쉘 명령어는 `ls`이다.
- 해당 디렉토리를 출력하는 명령어는 `pwd`이고 각 디렉토리를 옮겨다닐 수 있는 명령어는 `cd`이다.

![조건문 최종 완성](https://user-images.githubusercontent.com/87624756/148504197-61f88b14-56ef-45f3-a9bc-2cc1435661cc.png)
```
    if [ -e day3/*.cs ]; then
        echo "day3 has *cs"
    fi

    if [ ! -e day3/*.cs ]; then
        echo "day3 doesnt have *cs"
    fi
```
- 조건문으로, day3디렉토리에 *.cs로 끝나는 다시말해, _.cs의 확장자를 가진 파일이 있을 경우 "day3 has *cs"를 출력한다._
- 마찬가지로 day3 디렉토리에 _.cs의 확장자를 가진 파일이 없을 경우 "day3 doesnt have *cs"를 출력한다._
- 생각보다 조건문을 쓰는 것은 어렵지 않았지만, 띄어쓰기를 틀리거나 `;`뒤에 띄어쓰기를 무시한다던가 `fi`로 끝맺음을 해야한다는 것등이 낯설었다. 😂

```
    if [ -e day${i}/*.cs ]; then
        echo "day${i} has *cs"
    else
        echo "day${i} doesnt have *cs"
        cd day${i}
        pwd
        cd ..
    fi
```


- 위 조건문들이 개별적으로 될때, 오류가 발생하기 때문에
- 조건문을 if-else 구문으로 한가지로 합침과 동시에 반복문으로 모든 폴더를 반복할 수 있도록 `${i}` 변수를 넣어주었다.
- 또한, 반복을 돌면서 _*.cs가 없을 경우 디렉토리를 출력해야 하므로 앞서 배운 `cd`와 `pwd`를 반복하도록 했다._

```
    for ((i=1 ; i<17 ; i++))
    do
        if [ -e day${i}/*.cs ]; then
            echo "day${i} has *cs"
        else
            echo "day${i} doesnt have *cs"
            cd day${i}
            pwd
            cd ..
        fi
    done
```
- 최종적으로 반복문과 조건문으로 *.cs가 있을때 day1 has *cs를 출력하고,
- *.cs가 없을때 디렉토리와 day${i} doesnt have *cs를 출력하게 만들었다.
- 현재 간단한 테스트를 위해, 1,3,5,7,9 에만 *cs를 넣어놨으므로, 생각한대로 출력이 되었다.

![최종](https://user-images.githubusercontent.com/87624756/148504204-fdb00a4e-ceb2-41a3-99eb-82dcb438b1b4.png)

#### bash 셀 스크립트로 현재 디렉토리 아래있는 day1에서 day16 디렉토리 중에서 있는 .cs 파일만 zip으로 압축해서 백업하는 스크립트를 자동화해서 구현한다.
- 이 문제를 풀기 위해 지금까지 .cs파일을 가지고 있는 디렉토리와 .cs파일을 가지고 있지 않은 디렉토리를 조건문으로 구분해 두었다.
- 이제, 조건문이 true인 경우, .cs파일을 가지고 있는 경우에만 .cs파일을 압축시켜주면 된다.

```
find ./ -name "*.cs" -type f | xargs tar cjvf backup.gz 
```

- 그러나 검색해보니 조건문 반복문 따로 상관없이 find로 한번에 가능하였다.
- 다음 페이지를 참고했다.

[쉘 스크립트 압축](https://fmd1225.tistory.com/124)

#### 로컬에 생성한 .zip 파일은 scp 명령을 사용해서 가상 머신으로 복사한다. (패스워드를 입력하는 단계를 생략할 필요는 없다.)
- 이 문제는 그냥 검색해 봤더니 손쉽게 나왔다.
- ssh명령어를 사용해서 scp명령어를 사용하면 되는 문제이지만 중요한 것은
- 가상 머신의 폴더가 읽기/쓰기가 가능한 상태여야 하고, path가 확실해야 한다.

```
scp backup.gz otter@192.168.64.2:/home/otter/backup
```
- 이 명령어를 입력하면, ssh연결과 동일하게 비밀번호를 입력해야 한다.
