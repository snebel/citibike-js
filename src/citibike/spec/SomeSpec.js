
console.log('in SomeSpec');

define([''], function(CitibikeAppView) {
  console.log('in SomeSpec Define');
  describe('something', function() {
    console.log('in SomeSpec Describe');
    it('works', function() {
      console.log('in SomeSpec IT');      
      expect(true).toBe(true);
    });
  });
});
