## _[ SOLAR CALCULATOR ]_  

### _A calculator to convert Solar Earth Years to Solar Years of nearby planets. November 13th, 2020_  

#### DESCRIPTION

This site uses jQuery and JavaScript objects in order to take a user-submitted number of Earth years, and return the corresponding number of orbits nearby planets have made around the sun in that same time.  For example, one Earth year is equal to roughly 4.17 Mercury years. This will also return the number of years (or "orbits") a given person has left, based on a static life expectancy value of 77 Earth years.

#### Project Criteria:  

As referenced from the [Epicodus](https://epicodus.com) program's curriculum:  

> Write an application that determines a user's age based on a planet's solar years.\
>
> Take a person's age in years and create a class that does the following:\
>
> - Returns their age in Mercury years. (A Mercury year is .24 Earth years.)\
> - Returns their age in Venus years. (A Venus year is .62 Earth years.)\
> - Returns their age in Mars years. (A Mars year is 1.88 Earth years.)\
> - Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)\
> - Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit.\
> [ ... ]\
> - If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.\

-------------------------------

#### Project Specs:  

After refactoring, all tests can be found in the [__tests__ folder](https://github.com/grand-scheme/solar-age-calculator/tree/main/__tests__). As of this writing, all tests clear with 100% JEST coverage.

------------------------------

#### Known Issues / Bugs:    
None currently known.

-------------------------------

#### Setup:  

##### To view locally on your machine:  
1. Find the green **Code** button above the file list on this project's [main GitHub repository page](https://github.com/grand-scheme/solar-age-calculator).
2. Select the button to open a drop-down menu. Select "Open with GitHub Desktop" or, if you do not have this program installed, download the compressed .zip file.
3. Extract the .zip file to your local machine.
4. Directions were accurate as of Nov. 13th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

##### To clone this project to your machine:  
1. Launch your terminal of choice. 

> The following directions are based on Git Bash for a Windows machine; you may have to adjust terminology based on your local specs.

2. Navigate to the containing directory you would like to clone this project.
3. Input:\
`$ git clone https://github.com/grand-scheme/solar-age-calculator`
4. This will clone the project to a folder called "solar-age-calculator." If you wish to clone it into a directory of a different name, append the new folder name to the end of the string, like so:\
`$ git clone https://github.com/grand-scheme/solar-age-calculator NEW-FOLDER`\
where `NEW-FOLDER` is where you would type the name of the folder you would like to use.  
5. Directions were accurate as of Nov. 6th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

#### To run this project on your machine:
1. Once you have the project locally stored, navigate to its main directory in your terminal of choice. By default, this is `solar-age-calculator`.
2. Input:\
`$ npm install`\
This should download and install this project's environment within your local copy's directory. 
> **Note**: You will need to have [Node](https://nodejs.org/en/download/) installed on your machine prior to this step.
3. Input:\
`$ npm run start`\
This should both build this project and launch a local instance of this website in your browser of choice.\
**Note:** If you are viewing this project on a MacOS machine, you may need to edit `line 8` of the file `package.json` and change\
`npm run build & webpack-dev-server`\
to\
`npm run build; webpack-dev-server`
4. Check your browser for this project's containing website.
-------------------------------

#### Technologies Used:  
- Website, CSS, and JavaScript coded in Visual Studio Code.  
- JavaScript testing, breaking, and retesting conducted in [jsconsole](https://jsconsole.com/).  

##### License
- _GNU AGPLv3_  
- Project copyright (c) 2020 **_Shannon Grantski_**  
- Project criteria quoted text copyright (c) 2020 Epicodus, Inc  