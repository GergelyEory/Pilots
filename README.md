# Pilots app

# How I found the exercise

The exercise was deceptively simple, but tough to keep it simple for the given time limit. I have spent a lot more time on setting up my tools, than actualy completing the task. I like to have a good linting environment set up with Prettier and ESLint. Setting up Tailwindcss was confusing as well, as there are some issues with it in the latest JetBrains IDEs. 

I found it fun to use daisyUI, which I havent used before.

The rest of the application was pretty standard CRUD, using reactive programming patters with NgRX Component Store.

# Challenges/issues

Testing: I have not created unit tests in this exercise, because of the very short time, and the requirement to have a somewhat nice UI. Using Component Store (or ngrx store, or any single source of truth approach) allows for easy mocking of state and testing component functionality, which is one of the greatest benefits of using it. It felt strange developing functionality without tests.

Date selector: I have defaulted the create pilot form to new Date() instead of null. As a result, if the user doesn't select data of birth, instead of the Required validaiton, the pilot is created with a date of birth of today.

UI Responsiveness: I made the pilot list UI responsive to diffeent screen sizes, but it was a quick effort. On smaller screens, it could use a bit more TLC (like scaling and centering single column elements, scroll to top button, etc.), to ensure good UX on mobile.

No GUID provider: Since it was a FE only application, there was no database source of unique IDs. I had to come up with a pseudo-random id generator. It ideally should check if the generated ID already exists, but I had to balance development time with likelyhood of IDs clashing. It is very low probability, as the random ID range is 5+ orders of magnitude larger than the number of pilots.

No form validation messages: I added basic form validation, but ran out of time before creating the UI messages if the user tries to submit the form incomplete.

# What I would do different

All the CRUD state updates should be effects, calling the API and updating the frontend state depending on the response after the operation. Instead, since the state was only stored locally, all the methods are simple updaters in my example app.

I would create a better design for the pilot-card, ensuring all the displayed properties line up properly.
I would also make sure the UX is good on small screens. I did some scaling and flex behaviour based on breakpoints, but I feel like I could have done aa better job with more time.

I would add proper responsive loading animations on the buttons and on the pages, while waiting for the API. 
Add success/error notifications when a CRUD action is successfully performed or failed.

I would add proper form validation messages, together with coloured highlights and notifications.

For updating an existing pilot and creating new pilots, I would create a separate pages. The create pilot page should load the pilot from the API based on Id passed in the route, so navigating to any URL in the application is idempotent. I decided to pass the state in the router, because I had no source of GUID (as mentioned above). In the end I had to implement an Id generator, but I ran out of time to rework the functionality.
