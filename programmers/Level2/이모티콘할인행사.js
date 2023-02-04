// const users = [
//   [40, 2900],
//   [23, 10000],
//   [11, 5200],
//   [5, 5900],
//   [40, 3100],
//   [27, 9200],
//   [32, 6900],
// ];

// const emoticons = [1300, 1500, 1600, 4900];

// // 할인이 가능한 비율은, 10% - 40%이다.
// // emoticons는 최대 7개 존재하고,
// // 7개 정도면 모든 비율을 만들어놔도 괜찮을듯?

// const ratio = [10, 20, 30, 40];
// // const output = [];
// // const result = [];
// // const dfs = (cnt) => {
// //   if (cnt === emoticons.length) {
// //     result.push(Array.from(output));
// //     return;
// //   }
// //   for (let i = 0; i < ratio.length; i++) {
// //     output.push(ratio[i]);
// //     dfs(cnt + 1);
// //     output.pop();
// //   }
// // };

// // dfs(0, 0);

// // users[0]이 구매한다면 이렇게
// const result = [[40, 40, 20, 40]];
// const arr = Array.from({ length: result.length }, () =>
//   Array.from({ length: users.length + 1 }).fill(0),
// );

// for (let i = 0; i < result.length; i++) {
//   const answer = [0, 0];
//   for (let j = 0; j < users.length; j++) {
//     const [min, money] = users[j];

//     const buy = result[i].map((itemR, index) => {
//       if (itemR < min) return 0;
//       const emo = emoticons[index];
//       return (emo * (100 - itemR)) / 100;
//     });

//     const cost = buy.reduce((acc, cur) => acc + cur, 0);
//     if (cost > money) {
//       arr[i][arr[0].length - 1] += 1;
//     } else {
//       arr[i][j] = cost;
//     }
//   }
// }
// console.log(arr);
// // const computed = arr
// //   .map((item) => {
// //     const sliced = item
// //       .slice(0, item.length - 1)
// //       .reduce((acc, cur) => acc + cur, 0);

// //     return [sliced, item[item.length - 1]];
// //   })
// //   .sort((a, b) => {
// //     if (a[1] === b[1]) return b[0] - a[0];
// //     return b[1] - a[1];
// //   });
// // console.log(computed);
// // const answer = computed[0];
// // console.log(answer);

function solution(users, emoticons) {
  const ratio = [10, 20, 30, 40];
  const output = [];
  const result = [];
  const dfs = (cnt) => {
    if (cnt === emoticons.length) {
      result.push(Array.from(output));
      return;
    }
    for (let i = 0; i < ratio.length; i++) {
      output.push(ratio[i]);
      dfs(cnt + 1);
      output.pop();
    }
  };

  dfs(0, 0);
  // users[0]이 구매한다면 이렇게

  const arr = Array.from({ length: result.length }, () =>
    Array.from({ length: users.length + 1 }).fill(0),
  );

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < users.length; j++) {
      const [min, money] = users[j];

      const buy = result[i].map((itemR, index) => {
        if (itemR < min) return 0;
        const emo = emoticons[index];
        return (emo * (100 - itemR)) / 100;
      });

      const cost = buy.reduce((acc, cur) => acc + cur, 0);
      if (cost >= money) {
        arr[i][arr[0].length - 1] += 1;
      } else {
        arr[i][j] = cost;
      }
    }
  }

  const computed = arr
    .map((item) => {
      const sliced = item
        .slice(0, item.length - 1)
        .reduce((acc, cur) => acc + cur, 0);

      return [sliced, item[item.length - 1]];
    })
    .sort((a, b) => {
      if (a[1] === b[1]) return b[0] - a[0];
      return b[1] - a[1];
    });

  const [a, b] = computed[0];
  return [b, a];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/150368
