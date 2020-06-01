# what needs to change

the page-panel component renders recursively but the injection of models is ugly and unmaintainable, find a better way to solve this

# what has been addressed so far

decorators have been created to register components and controls which are rendered at runtime.

The core business logic has its own layer which handles the most essential parts of the application. However, wiring up the core is still done manually and will eventually be done by a IoC container.

The most crucial code has been covered by a test but should be tested more thouroughly after the user-interface functionality is more stable.

The user-interface layer has been wired up via context

# tasks

- Write unit tests in the user-interface library to find problems

- refactor to fit the unit tests

- write e2e tests
