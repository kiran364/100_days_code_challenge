console.log('start')

function a(x){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(x))
    },3000)
  })
}
    

async function b(){
 await  a('a');
 await  a('b');
 await  a('c');
}

b();

