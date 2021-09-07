All of these commands are run in terminal!

### Cloning/Getting this repository on your computer

You can skip this step if you already have it!

Go to the folder where you want this repository and run

```
git clone https://github.com/vsubruins/vsu-website.git
```

Then, run this command to install all the packages needed

```
yarn
```

### Running locally to test changes

```
yarn start
```

### Making edits and pushing them to this repository

Make your edits on your computer and run this command on the directory where this README is

```
git add .
```

or specify a specific folder/file that you want committed

```
git add folder
```

Then, run this command to commit the changes

```
git commit -m "your comment here"
```

Then, push using this command

```
git push origin master
```

### Deploying changes to the website

If you have not already logged into the vsu firebase on your machine (AKA your first time doing this), run this command and login to the vsu gmail

```
firebase login
```

Then, do this command to compile/build this repository

```
yarn build
```

Finally, deploy the changes

```
firebase deploy
```
