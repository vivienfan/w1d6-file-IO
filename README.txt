Synchronous vs Asynchronous

Every method in the fs module has synchronous as well as asynchronous forms.

Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error.

It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.