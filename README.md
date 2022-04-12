# react-hello-world.xdc

This is a template for creating webxdc apps using react and Tailwind CSS.

## How to

    1. Clone the repository
    2. Run `pnpm i`
    3. Run `pnpm dev`

`index.html` is the main file for your app. There we have `<div id="react-code" class="..."></div>` where we will render our react app.

`src/index.jsx` is where we have our react code. Using `babel` our output will be `index.js`

`src/input.css` is the main CSS file that tailwind will minimify and combine into `style.css`

In `manifest.toml` change `name` to your app name

Change `icon.png` to your app icon

Run `create-xdc.sh` to create your xdc file (unless you are a Windows user like me, then F, you'll have to manually create a zip with all files and rename the extension to `.xdc`)

After all this, just drop `your_cool_app.xdc` into any chat and you should be able to use it.
