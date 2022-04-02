[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7395941&assignment_repo_type=AssignmentRepo)
# Week 3 Lab

This week is primarily focused on beginning to learn about the jQuery Mobile framework and programming interactivity with widgets/user inputs.  Therefore, this week's lab will focus on having you create your first interactive jQuery mobile app.

You will have 2 main options to pick from for your app:  
- **Option 1** is a beginner level project that will be similar to the Projectile app from the reading (https://repl.it/@JamesSekcienski/Projectile-Range-Calculator-App).  Select one of the following ideas:
  - Undergraduate grade converter
    - User would input their numeric grade for a course and it will show the equivalent letter grade
    - You need to use the Wilmington University Grading scale https://www.wilmu.edu/academics/gradingscale_undergrad.aspx
  - Tip calculator
    - User would input the amount of their bill and the percentage to tip and it will output the amount of the tip and the total with tip
  - Quadratic equation calculator
    - User would input a value for a, b, and c.  After clicking the button, it will show the values of x using the quadratic formula
  - *If you have a different idea for a calculation/conversion you would like to make an app for, send me a message by Thursday describing your idea and I will let you know if it is approved.*


- **Option 2** is more advanced and will require learning more about using information from API calls to create your web page content.  **If choosing this option, please send me a message by Thursday with the API you plan on using and what your app will do, so it can be approved**
  - Example of creating a Weather App using OpenWeatherMap API: https://youtu.be/n4dtwWgRueI *Please note this example doesn't include the use of a button to trigger the user submission and doesn't use the jQuery Mobile framework*
  - Select an API that you can retrieve information from that you will show to the user based on their input (Excluding any weather related API)
    - 15 Fun API's for Your Next Project: https://dev.to/biplov/15-fun-apis-for-your-next-project-5053
    - Public APIs: https://github.com/public-apis/public-apis
  - You will create an app that has a user input field (text or numeric) or a numeric slider that you will use as a query parameter with your API call
  - When the user clicks the button, it will call the API using the value of the user input as part of the API call 
  - The page should update to display what they input and then at least one value from the API call response.
  - Possible Example:
    - Use the Pokemon API.
      - Ask the user for a Pokemon
      - When the user clicks the button it will display the Pokemon name, picture, and type

# Code requirements

You will need to have the following files:
- index.html (This will be the main interactive part of your app)
- information.html (This will be information for the user explaining what your app does and how to use it)
- style.css (This will have the CSS you are applying throughout your app)
- script.js (This will contain the JavaScript functions needed to make your app interactive)

Minimum requirements for index.html:
- Must use the jQuery mobile framework and include the necessary page elements (Use template.html as a reference)
- The sample text and areas that say change me should be updated to be relevant to your app

- **Option 1**:
  - A numeric input with appropriate min and max values set or numeric slider for each input required for your app topic
  - A button to click to perform the action of your app 
  - A table, list, or paragraph(s) that display the value(s) entered by the user and the calculated/converted value.  
    - Don't forget to include the values that were entered by the user so that as they change them, they still know what the calculated value is based on
    - *Ensure it is clear for the user to know what each value is that is shown.*

- **Option 2**: 
  - A text or numeric input or numeric slider for each input required for your app
  - A button to click to perform the action of your app
  - Appropriate elements used to display the information retrieved from your API call
    - Must include the value entered by the user and at least one piece of information from the API call response

Minimum requirements for information.html:
- Must use the jQuery mobile framework and include the necessary page elements (Use template.html as a reference)
- The navbar should be the same as the navbar for index.html, just change which one is active (Refer to comment in template.html for how to make active)
- The sample text and areas that say change me should be updated to be relevant to your app
- The header should be relevant to your app
- The main should contain at least a paragraph describing what your app does to the user and any important instructions for how to use the app.  Relevant images and/or videos may be included, but aren't required
- The footer should be the same as index.html

Minimum requirements for style.css:
- If you include a table, you must include a border and padding to make the content easy to read
- If you change any colors, ensure the colors are accessible.  You can use the following tool to check accessibility:  https://webaim.org/resources/contrastchecker/
- Feel free to apply other style changes that are appropriate to app to enhance the look and feel (This is optional)

Minimum requirements for script.js:
- Need at least one function that handles getting the user input and updating the page based on the user input (Updates that are needed will depend on the option you picked)
- Need at least one function that performs the calculation, conversion, and/or API call that returns the value needed in the other function to update the app


# Important Reminders

*Be sure to validate your code as well and fix any errors*
- HTML Validator: https://validator.w3.org/#validate_by_input 
- CSS Validator: https://jigsaw.w3.org/css-validator/#validate_by_input
- JS Hint: https://jshint.com/ *This will help check for potential problems with your code.  This is not a substitute for testing your code to ensure it is working as expected.

*Use Prettier to format your code*
- If you use the Prettier extension in Visual Studio Code, you can use it to format your code
- You can also access Prettier online, but make sure you select the proper language when formatting:  https://prettier.io/playground/

*Follow the Google Style Guidelines*
- View HTML/CSS style guidelines here: https://google.github.io/styleguide/htmlcssguide.html
- View JavaScript style guidelines here: https://google.github.io/styleguide/jsguide.html

*Documentation*
- For HTML, ensure you have updated the purpose to describe what the web page is about (not the assignment)
- For JavaScript, ensure you have a comment before each function that provides a brief description of each 
