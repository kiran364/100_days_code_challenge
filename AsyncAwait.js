const abc = (num) => {
  return promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(num);
      }, 2000);
  })
}

const xyz = async () => {
  
  await abc(1).then((num) => console.log(num));

  await abc(2).then((num) => console.log(num));
  await abc(3).then((num) => console.log(num));
  await abc(4).then((num) => console.log(num));

}
xyz();

