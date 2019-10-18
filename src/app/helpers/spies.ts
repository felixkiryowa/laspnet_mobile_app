import  { of } from 'rxjs';


export class Spies {

    static resetSpies = (spies: any[]) => {
        spies.forEach((spyObj) => {
          Object.keys(spyObj).forEach((prop) => {
            if (typeof spyObj[prop] === 'function') {
              spyObj[prop].calls.reset();
            }
          });
        });
      };
      
    static createSpyObj = (name: string, methods: string[]) => {
        return jasmine.createSpyObj(name, methods);
      };
      

    static loadingControllerSpy = Spies.createSpyObj('LoadingController', [
        'create'
    ]);

    static alertControllerSpy = Spies.createSpyObj('AlertController', [
      'create'
   ]);

   static routerSpy = Spies.createSpyObj('Router', [
    'navigate'
   ]);

   static activatedRouteSpy = Spies.createSpyObj('ActivatedRoute', [
     'snapshot',
     'queryParams'
   ])

}
