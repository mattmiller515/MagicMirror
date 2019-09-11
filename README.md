This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Raspberry Pi Settup

Install Raspbian with [NOOBS](https://www.raspberrypi.org/downloads/noobs/)

### Clone project from Github and project setup

1. cd into desired directory from terminal
2. enter 'git clone https://github.com/mattmiller515/MagicMirror'
3. in project folder, create 'src > config > config.js'
4. open the file and enter the following... (keys can be obtained from [Accuweather](https://developer.accuweather.com/))

    export var config = {
        WEATHER_KEY: "your-api-key-here",
        WEATHER_LOCATION_KEY: "your-location-key-here"
    }

5. Back in terminal, enter 'npm install'
6. Once complete, enter 'npm run build'

### Setup automatic server start on boot

1. In terminal, enter 'nano /etc/rc.local'
2. right before the line that says 'exit 0', enter "su pi -c 'node /home/pi/path/to/server.js < /dev/null &'"
3. save and quit nano

### Setup automatic browser open on boot

1. Open terminal
2. Enter 'mkdir -p /home/pi/.config/lxsession/LXDE-pi/'
3. Enter 'cp /etc/xdg/lxsession/LXDE-pi/autostart /home/pi/.config/lxsession/LXDE-pi/autostart'
4. Enter nano '/home/pi/.config/lxsession/LXDE-pi/autostart'
5. At the bottom of the file, type '@chromium-browser --incognito --kiosk http://localhost:8080'
6. Below that line, type '@unclutter -idle 0.1 -root'
7. save and quit nano

### Final Setup steps and tips
 
Reboot the raspberry pi. You should see the desktop appear for a few seconds before the application opens in chromium kiosk mode with no cursor visible. To make the cursor visible, simply wiggle your mouse. To exit kiosk mode, type 'alt + f4' to return to your desktop.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
