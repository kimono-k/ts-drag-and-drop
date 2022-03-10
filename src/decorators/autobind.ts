// Autobind Decorator
// Args: target, method decorator, methods are properties which hold functions
// _ = params you are not going to use them but maybe you need it
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Submit handler whole method text
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // We can use the decorator
    get() {
      const boundFn = originalMethod.bind(this); // submitHanlder.bind(this)
      return boundFn; // return result of function
    },
  };
  return adjDescriptor; // You just need to return this, I don't know why...
}
