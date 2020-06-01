# what needs to be done

ResourceFactory needs to be revised with EditModel en EditEventHandler

# what has been addressed so far

decorators have been created to register components and controls which are rendered at runtime.

The core business logic has its own layer which handles the most essential parts of the application. However, wiring up the core is still done manually and will eventually be done by a IoC container.

The most crucial code has been covered by a test but should be tested more thouroughly after the user-interface functionality is more stable.

The user-interface layer has been wired up via context

ugly instantiation of objects had been replaced with builder and factory patterns

# tasks

- Write unit tests in the user-interface library to find problems

- refactor to fit the unit tests

- write e2e tests
