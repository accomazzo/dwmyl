# DWMYL

DWMYL is a simple goal planning app where goals can be input to different lists: day, week, month, year, and life. It's a basic looking app, but extra effort was taken to write it using the most modern, best-practice, AngularJS.

View it at: [https://dwmyl.firebaseapp.com](https://dwmyl.firebaseapp.com)

**Please note that this is a demo app** to showcase my JavaScript/AngularJS skills, and is by no means production ready. The UI is barebones as it is not meant to be a UI piece at this point, though I will add a sexy interface with animations, routing with other views, etc in future updates.

Selling Points:

* Uses directives with isolate scope as components (closer in style and better upgradeable to Angular 2), and a service to deliver the data to the view. 

* Written with "controller as" syntax, and minimal use of scope (the main controller is super tiny).

* The data service uses [Firebase](https://www.firebase.com/), which provides real-time data syncing. Open the app in two different browsers side by side and watch it update both views concurrently. Refresh, and everything is saved and the same as before.

* Follows [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

Please feel free to contact me with any questions, comments, or concerns.

>“It wasn’t my day. My week. My month. My year. My life. God damn it.”
>--Charles Bukowski