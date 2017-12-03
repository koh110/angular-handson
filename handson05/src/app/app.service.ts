import { Injectable } from '@angular/core';

const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, ms);
  })
}

@Injectable()
export class AppService {

  constructor() { }

  // 2秒後にapiからデータをとってくるmock
  public async getTodos(): Promise<{title: string}[]> {
    await sleep(2000);
    return [
      { title: 'ほげ' },
      { title: 'ふが' },
      { title: 'ぴよ' }
    ];
  }
}
