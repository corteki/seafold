# what needs to change

The container insert elements should be used to determine at which index a element is inserted. A container will render one insert before itself and one after all it's children. 

By using the insert before we can determine the index by finding a element by path, determine its id and insert it before that.

by using the insert last, we can always insert a element after all the children. If there is one or more children, inserting by index follews the same principle as inserting before since the children are containers themselves.

explore the possibility to divide the user interface into more layers as the page-panel for instance already has a mix of view-models, services and controllers combined with their interfaces. This will become hard to maintain after a while.

find out if it's really necessary to create a lib for the user interface separate from the actual app. What are the benefits of this approach?

the page-panel component renders recursively but the injection of models is ugly and unmaintainable, find a better way to solve this

# what has been addressed so far

decorators have been created to register components and controls which are rendered at runtime.

The core business logic has its own layer which handles the most essential parts of the application. However, wiring up the core is still done manually and will eventually be done by a IoC container.

The most crucial code has been covered by a test but should be tested more thouroughly after the user-interface functionality is more stable.

The user-interface layer has been wired up by a IoC container

# tasks

- Write unit tests in the user-interface library to find problems

- refactor to fit the unit tests

- write e2e tests
