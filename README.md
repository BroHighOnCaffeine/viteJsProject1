# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Harshit's Comments
1. Open the Project folder with a terminal and Run the following commands :
2. node -v
3. npm -v
4. npm create vite@latest
5. Enter the Project Name . Or press "." if you want to install it in the same directory
6. Enter the Package Name . Or press "." if you want to install it in the same directory
7. Select a Framework . I've selected React here.
8. Select a variant - I've Selected Javascript here.
9.  npm install - installs all the dependencies or modeules.
10.  npm run dev - after running this command our project starts and we get a link to the website of our  project. 
The server starts and gives the link to our project.
11. To Stop the server enter 'q' in the terminal 
12. npm run build - to build the app
 


# Anatomy of React Project.

# Now 
1. The index.html is the entry point of our Project.
2. We have Package.json which includes all Dependencies.
3. Then we have vite.config.js ehich has vite-Configurations and lists of Plugins .


#
We have added a header to the ui - how we did is in the index.html
we updated it and we can notice the counter still counts to 3
Meaning
The update to the UI didnot blow away to the  application state.
This is called "Hot Module Replacement." over native Js Modules


#
We'll add a footer as well similar to a header




# Handling Static Assests - images,etc

Here we have 2 ways to handle the static assests - optimize and copy as to
Optimize works when your file sixe is less than 4kb  . It copies the image with a hash in Name
copy as to means it will copy the image to project as it is w/o optimization.

Handling a image - Scrimbaimage.png
import the image in App.jsx using a relative path just like thw react logo 
And add it as a link in the UI right below the React logo.
After that we will build the app so we can investigate where vite place file and under which name.

import ScrimbaLogo from './assets/Scrimbaimage.png'

<pre>
    <code>
    Then inside the return function in app.jsx write :
     &lt a href="https://ScrimbaLogo.com" target="_blank" &gt
              &lt img src={ScrimbaLogo} className="logo Scrimba" alt="Scrimba logo" / &gt
            &lt /a &gt

    </code>
</pre>


# Use Environmental Varibles

import.meta is a web standard  . To it vit adds an object env . And to this object vit provides a  hat gives the mode the app is running in. This could be development or production or another mode
3. import.meta.env.PROD & .DEV - It is a BOOLEAN which tells us the app is in development or Production 
4. import.meta.env.SSR - It's a boolean that tells whether the App is Running in the server.


Also, VITE grants us access with our own Environmental Variables:

Those could be the one that we pass through the command line 
Or
We could provide them in a file named ".env" in the root of your Project

Rule : Each environmental variable must start with the Prefix - "VITE_" , all in UpperCase
Example : VITE_DB_USER = user
          VITE_DB_PASSWORD = password

In order to use environmental variables in your code , you access it like this :
            const dbUser = import.meta.env.VITE_DB_USER

 
# Challenge  -
# Displaying the Ip Addr using the API and by using Env. Var.

1. In '.env' add an environmental variable[VITE_API_URL] for the IPify API URL,
   and give  it the value https://api.ipify.org 
2. In app.jsx , grab that environment variable and assign it to 'apiUrl' inside the 'useEffect'.
3. Finally in the JSX, display the React State variable 'ipAddress' in an h3 , right below the greeting.
4. Start the Dev Server .
5. You should be able to see your current IPAddress in the UI.

Here we used Hook - UseEffect
We use Try Catch Block
We used an Api 
 



