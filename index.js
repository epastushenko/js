"use strict";

function lolKek() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3  === 0 && i % 5 === 0) {
      console.log('ЛолКек');
    } else if(i % 3  === 0 ) {
      console.log('Лол');
    } else if(i % 5  === 0 ) {
      console.log('Кек');
    } else {
      console.log(i);
    }
  }
};

function evenNumbersWithFor(value = 10) {
  if(typeof value !== 'number') {
    console.log('Таке чуство шо Бог десь наказує нас за шось')
  } else {
    const result = [];
    for(let i = 1; i < value; i++) {
      if(i % 2 === 0) {
        result.push(i);
      }
    }
    console.log(`${result.join(", ")}.`);
  }
}

function evenNumbersWithWhile(value = 10) {
  if(typeof value !== 'number') {
    console.log('Таке чуство шо Бог десь наказує нас за шось')
  } else {
    let i = 1;
    const result = [];
    while(i < value) {
      if(i % 2 === 0) {
        result.push(i);
      }
      i++;
    }
    console.log(`${result.join(", ")}.`);
  }
}

lolKek();
evenNumbersWithFor();
evenNumbersWithWhile();