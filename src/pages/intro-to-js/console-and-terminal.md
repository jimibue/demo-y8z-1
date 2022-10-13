## Terminal and Console

The terminal is a text-based interface to the system. You can type commands by hand or have a program do it for you. The terminal is a program itself that runs inside another program. That program is called a shell. The shell takes commands from the terminal and passes them to the operating system to run.

The terminal is a program that runs inside another program. That program is called a shell. The shell takes commands from the terminal and passes them to the operating system to run.


We will be using the integrated terminal in vscode to run our js files.  To run a js file we open the terminal in vscode:

`terminal > new terminal` Then we run the command

```
node <name-of-file>
```

some other command line commands you might want to know

```
cd: change directory
touch: create a file
mkdir <folder-name>: make a directory
ls: list directory contents
pwd: see where you are
```

### prompt

the prompt is the part of the terminal that shows you where you are in the file system.  It is usually the name of the current directory you are in.  The prompt is usually a dollar sign `$`, `%` or a greater than sign `>`.  This is where you type your commands.

### Antomony of a command

commands are made up of a few parts

- the command itself: the name of the command
- flags: these are options that change the behavior of the command
- arguments: these are the things you are operating on

```
command -flagS argument1 argument2
```

## Common commands

### ls
list the contents of a directory


```

- `ls`: list directory contents
  flags: `-a` show hidden files, `-l` show more info

- `cd`: change directory

