/* eslint-disable no-console */
import Controller from '@ember/controller';
import { schedule } from '@ember/runloop';

export default Controller.extend({
  actions: {
    testIt() {
      Promise.resolve().then(() => {
        schedule('render', () => {
          console.log(1);
          Promise.resolve().then(() => {
            console.log(2);
            return Promise.resolve().then(() => {
              console.log(3);
              return Promise.resolve().then(() => {
                console.log(4);
                return Promise.resolve().then(() => {
                  console.log(5);
                  return Promise.resolve().then(() => {
                    console.log(6);
                    schedule('afterRender', () => console.log('THIS NEVER RUNS!!!!') )
                  });
                });
              });
            });
          })
        });
      });
    }
  }
});
