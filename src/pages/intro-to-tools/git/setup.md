---
title: Git Setup
description: Learn how to set up Git on your computer.
---


## Git Setup

Note if you are using a pc make sure to use WSL.

### Installing Git

Git is a command line tool, so you'll need to open up your terminal to use it. If you're on a Mac, you can open up the terminal by going to Applications > Utilities > Terminal. If you're on Windows, you can open up the terminal by going to Start > All Programs > Accessories > Command Prompt.

To check if you have Git installed, type `git --version` in your terminal. If you don't have Git installed, you'll see an error message. If you do have Git installed, you'll see the version number of Git that you have installed.

If you don't have Git installed, you can download it from [git-scm.com](https://git-scm.com/). If you're on a Mac, you can also install Git using [Homebrew](https://brew.sh/). To install Git using Homebrew, type `brew install git` in your terminal.

### Set up your git config

```
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

### Set up a global gitignore

```
touch ~/.gitignore

// for mac
echo ".DS_Store" >> ~/.gitignore
```

### Create an ssh key on your computer

SSH keys are a way to authenticate yourself to a remote computer. They are a more secure way to log in than a password. You can use them to log in to GitHub without typing your username and password every time.

```
// this command can be run anywhere
ssh-keygen -t ed25519 -C "your_email@example.com"
```

This will create a new ssh key, using the provided email as a label. Generating a new SSH key will replace any existing SSH key on your computer.

When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location. When you're prompted to enter a passphrase, press Enter. This accepts an empty passphrase, which means you won't be asked for a password every time you use the key.  At the end of the process, you should see ascii art of a cat and a message that says "Your identification has been saved in /Users/you/.ssh/id_ed25519."  You can now use this key to log in to GitHub.



### Add your ssh key to your GitHub account

1. Copy the contents of your public key to your clipboard. You can do this by running the following command:

```
// This command can be run anywhere, 
// This will copy the contents of your public key to your clipboard. 
pbcopy < ~/.ssh/id_ed25519.pub

// If that doesn't work, try this command instead. 
// This will print the ssh key to the terminal and you can copy it from there
cat ~/.ssh/id_ed25519.pub
```
2. Login to GitHub and navigate to your account settings.
3. Click "SSH and GPG keys" in the left sidebar.
4. Click "New SSH key" or "Add SSH key".
5. Paste your key into the "Key" field.
6. Click "Add SSH key".
7. Confirm the action by entering your GitHub password.


From now on, when you clone or create a repository, you can use the SSH URL instead of the HTTPS URL. 


