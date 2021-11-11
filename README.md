# Lab 8 - Starter

my name: Bobby Tatum, my partner's name: none

1. Within a Github action that runs whenever code is pushed. No point in running them manually before pushing when the
github action runs on push. And it would be harmful to run them after all deelopment is completed because the point of
testing is to catch error *during* development.

2. No, I would use a unit test. An end to end test deals with test cases that involve emulating user action, while a
unit test is focused on more individual parts of code, such as a function.

3. Not explicitly the message feature, but rather the components that make up the message feature. For instance, you
could unit test the 'on-click' callback function when a user tried to press 'send' - does the message content contain
the expected message, appropriate headers, etc.? Unit tests are more apt for testing the smaller components of
messaging, such as testing the click function of send, or the input feature, etc.

4. Yes, you would test the message contents for a string of greater than length 80, less than 80, etc. Ideally, you
would have a function to test the max message length and you would unit test that function against messages of different
lengths. 
