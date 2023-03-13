terminal.commandData = {"2048": {"description": "play a game of 2048", "isGame": true}, "4inarow": {"description": "play a game of Connect Four against the computer", "args": {"?depth:i:1~100": "The depth of the search tree"}, "standardVals": {"depth": 4}, "isGame": true}, "alias": {"description": "create a new alias for a given function", "args": {"alias": "name of the new alias", "command": "name of the command to be aliased"}}, "background": {"description": "change the background color of the terminal", "args": ["color"]}, "base64": {"description": "encode/decode a message using base64", "args": {"*message": "the message to encode/decode", "?d=decode:b": "decode the message instead of encoding it", "?c=copy:b": "copy the result to the clipboard"}}, "bc": {"description": "start a bc (basic calculator) session"}, "bezier": {"description": "play with bezier curves"}, "bin": {"description": "convert a number to another base", "args": {"n": "number to convert", "?t=to-base:i:2~36": "base to convert to", "?f=from-base:i:2~36": "base to convert from"}, "standardVals": {"t": 2, "f": 10}}, "binomcdf": {"description": "calculate the binomial cumulative distribution function", "args": {"n:n:1~1000": "the number of trials", "p:n:0~1": "the probability of success", "lower:n:0~1000": "the lower bound", "upper:n:0~1000": "the upper bound"}}, "binompdf": {"description": "calculate binomial distribution value", "args": {"n:n:0~100": "the number of trials", "p:n:0~1": "the probability of success", "k:n:0~100": "the number of successes"}}, "blocks": {"description": "3d raycasting test", "args": {"?fov:i:1~720": "Field of view in degrees", "?res=resolution:i:1~1000": "Resolution (width) in Pixels", "?x=roomX:i:5~100": "Room size in x direction", "?y=roomY:i:5~100": "Room size in y direction", "?z=roomZ:i:5~100": "Room size in z direction", "?v=viewDistance:i:1~9999": "View distance in blocks"}, "defaultValues": {"fov": 90, "resolution": 90, "roomX": 30, "roomY": 10, "roomZ": 10, "viewDistance": 13}}, "brainfuck": {"description": "parse given brainfuck code", "args": ["*code"]}, "cal": {"description": "print a calendar", "args": {"?month": "the month to print", "?year": "the year to print"}}, "cardoid": {"description": "start a cardoid generator"}, "cat": {"description": "print file content", "args": {"file": "file to display the content of"}}, "cd": {"helpVisible": true, "args": {"directory": "the directory relative to your current path"}, "description": "change current directory"}, "ceasar": {"description": "shift the letters of a text", "args": {"text": "the text to shift", "?s=shift:i:-26~26": "the shift value"}, "standardVals": {"shift": 1}}, "cheese": {"description": "take a foto with your webcam"}, "chess": {"description": "play a game of chess against the computer", "isGame": true}, "clear": {"description": "clear the terminal"}, "clock": {"description": "display a clock", "args": {"?m=millis:b": "display milliseconds"}}, "cmatrix": {"description": "show the matrix"}, "cmdnotfound": {"description": "display that a command was not found", "rawArgMode": true, "isSecret": true}, "code": {"description": "show the source code of a command", "args": {"command": "the command to show the source code of"}}, "collatz": {"description": "Calculate the Collatz Sequence (3x+1) for a given Number", "args": {"n:i": "the starting number of the sequence", "?m=max:i": "max number of steps to print"}, "standardVals": {"m": 999999999999}}, "color-test": {"description": "test the color capabilities of the terminal", "args": {"?size:i:1~999": "the size of the test image"}, "defaultValues": {"size": 60}}, "compliment": {"description": "get info about yourself"}, "copy": {"description": "copy the file content to the clipboard", "args": {"file": "the file to copy the content of"}}, "cowsay": {"description": "let the cow say something", "args": ["*message"]}, "cowthink": {"description": "let the cow say something", "args": ["*thought"]}, "cp": {"description": "copy a file", "args": ["file", "directory"]}, "curl": {"description": "download a file from the internet", "rawArgMode": true}, "cw": {"description": "get the calendar week of a date", "args": {"?date": "the date to get the calendar week of"}, "standardVals": {"date": null}}, "debug": {"description": "activate the debug mode to enable untested new features"}, "donut": {"description": "display a spinning donut"}, "download": {"description": "download a file", "args": {"file": "the file to download"}}, "draw": {"description": "start simple drawing app"}, "du": {"description": "display storage of current directory", "args": {"?folder": "folder to display storage of"}}, "echo": {"description": "print a line of text", "rawArgMode": true}, "edit": {"description": "edit a file of the current directory", "args": {"?file": "the file to open"}}, "enigma": {"description": "Simulate an Enigma machine", "args": {"?c=config:b": "Enables config mode", "?t=translate:b": "Enables translation mode", "?r=reset:b": "Resets the machine", "?s=show:b": "Shows the current settings"}}, "error404": {"description": "Display a 404 error", "rawArgMode": true}, "eval": {"description": "evaluate javascript code", "rawArgMode": true}, "exit": {"description": "exit the terminal"}, "f": {"description": "calculate friendship score with a friend", "args": ["*friend"]}, "factor": {"description": "print the prime factors of a number", "args": {"?n:n": "number to factorize"}, "standardVals": {"n": null}}, "fakechat": {"description": "fake a whatsapp chat conversation", "args": {"?f=fast:b": "skip typing animations [fast mode]", "?o=offset:n:-100~100": "offset the chat by a procentage of the screen height", "?s=scale:n:0.1~5": "scale the chat by a factor", "?x=width:n:100~10000": "set the width of the screen in pixels", "?y=height:n:100~10000": "set the height of the screen in pixels"}, "standardVals": {"o": 0, "s": 1, "x": 720, "y": 1560}}, "fibo": {"description": "Prints the Fibonacci sequence", "args": {"?n:i:1~100": "The number of elements to print", "?p=phi:b": "calculate the golden ratio using the last two elements"}, "defaultValues": {"n": 10}}, "fizzbuzz": {"description": "print the fizzbuzz sequence", "args": {"?max:n:1~100000": "the maximum number to print"}, "standardVals": {"max": 15}}, "flaci-to-turing": {"description": "Converts a flaci.com JSON File of a turing machine to a turing machine file", "args": {"file": "file to convert", "?s=save:b": "save the converted file"}}, "font": {"description": "change the font of the terminal", "args": ["*font"]}, "foreground": {"description": "change the foreground color of the terminal", "args": {"color": "the color to change the foreground to"}}, "games": {"description": "shows the game menu"}, "get": {"description": "get a value from the server", "args": {"key": "the key to get the value of"}}, "greed": {"description": "play a game of greed", "isGame": true, "args": {"?b": "play the bigger version"}}, "grep": {"description": "search for a pattern in a file", "args": {"pattern": "the pattern to search for", "file": "the file to search in", "?r:b": "search recursively", "?i:b": "ignore case", "?v:b": "invert match", "?x:b": "match whole lines"}}, "head": {"description": "display the first lines of a file", "args": ["file", "?l:i:1~1000"], "standardVals": {"l": 10}}, "helloworld": {"description": "display the hello-world text", "rawArgMode": true}, "help": {"description": "shows this help menu"}, "hi": {"description": "say hello to the terminal"}, "highscore-admin": {"description": "Login as Admin", "isSecret": true, "args": {"?d": "Delete password from local storage"}}, "highscore-remove": {"description": "Remove a highscore", "isSecret": true, "args": {"game": "the game to remove the highscore from", "?n": "only show highscores with this name", "?l:n:1~10000": "limit the number of highscores to show", "?uid": "the uid of the highscore to remove"}, "standardVals": {"n": null, "l": Infinity}}, "highscores": {"description": "Show global highscores for a game", "args": {"game": "the game to show the highscores for", "?n": "only show highscores with this name", "?l:i:1~10000": "limit the number of highscores to show", "?show-all": "show all highscores, not just the top ones"}, "standardVals": {"n": null, "l": 10}}, "history": {"description": "print the command history", "args": {"?l=limit:n:1~100000": "the maximum number of commands to print"}, "standardVals": {"l": 1000}}, "href": {"description": "open a link in another tab", "args": {"url": "url to open"}}, "image-crop": {"description": "start image cropper program"}, "img2ascii": {"description": "Convert an image to ASCII art"}, "joke": {"description": "tell a joke"}, "kaprekar": {"description": "display the kaprekar steps of a number", "args": {"n:n:1~999999999": "the number to display the kaprekar steps of"}}, "kill": {"description": "kill a process", "args": {"process": "the process to kill"}}, "labyrinth": {"description": "play a game of labyrinth", "isGame": true, "args": {"?fps:n:1~60": "the frames per second of the game"}, "standardVals": {"fps": 30}}, "letters": {"description": "prints the given text in ascii art", "args": {"*text": "the text to print"}}, "loadall": {"description": "preload all possible commands"}, "logistic-map": {"description": "draw the logistic map", "args": {"?min:n:-2~4": "minimum R value", "?max:n:-2~4": "maximum R value", "?w:n:10~200": "width of display", "?h:n:5~100": "height of display"}, "standardVals": {"min": 0, "max": 4, "w": 80, "h": 20}}, "lorem": {"description": "generate lorem ipsum text", "args": {"?l=length:i": "number of words to generate", "?c=copy:b": "copy to clipboard"}, "defaultValues": {"l": 100}}, "ls": {"helpVisible": true, "description": "list all files of current directory", "args": {"?folder:f": "folder to list", "?r:b": "list recursively"}, "standardVals": {"folder": ""}}, "lscmds": {"description": "list all available commands", "helpVisible": true, "args": {"?m:b": "format output as markdown table"}}, "lscpu": {"description": "get some helpful info about your cpu"}, "lsusb": {"description": "list all usb devices"}, "lunar-lander": {"description": "play a classic game of moon-lander", "args": {"?particles:n:1~1000": "number of particles to generate", "?f=fullscreen:b": "enable fullscreen application"}, "standardVals": {"particles": 10}, "isGame": true}, "man": {"description": "show the manual page for a command", "args": {"command": "the command to show the manual page for"}, "helpVisible": true}, "mandelbrot": {"description": "draws the mandelbrot set", "args": {"?x:i:10~1000": "width of the plot", "?y:i:10~1000": "height of the plot"}}, "mill2player": {"description": "play a game of mill with a friend locally", "isGame": true}, "mkdir": {"description": "create a new directory", "args": ["directory_name"]}, "morse": {"description": "translate latin to morse or morse to latin", "args": {"*text": "text to translate"}}, "mv": {"description": "move a file", "args": ["file", "directory"]}, "name-gen": {"description": "start a name generator"}, "name": {"description": "set a default name for the highscore system to use", "args": {"method": "set | get | reset", "?newname": "the new name"}}, "ncr": {"description": "calculate binomial distribution value", "args": {"n:n:0~100": "the number of trials", "k:n:0~100": "the number of successes"}}, "number-guess": {"description": "guess a random number", "isGame": true}, "particle": {"description": "start a particle simulation", "args": {"?n:i:1000~10000000": "number of particles"}, "standardVals": {"n": 100000}}, "pascal": {"description": "print a pascal triangle", "args": {"?depth:n:1~100": "the depth of the triangle", "?f:b": "only show the final row"}, "standardVals": {"depth": 10}}, "password": {"description": "Generate a random password", "args": {"?l:n:1~1000": "The length of the password", "?c": "The characters to use in the password", "?norepeat:b": "If present, the password will not repeat characters", "?n:n:1~100": "Number of passwords to generate", "?nocopy:b": "Do not copy the password to the clipboard"}, "standardVals": {"l": 20, "c": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&", "n": 1}}, "pendulum": {"description": "start a pendulum wave simulation", "args": {"?n:i:1~10000": "number of pendulums", "?o:n:0~1": "offset of pendulums"}, "standardVals": {"n": 20, "o": 0.025}}, "perilious-path": {"description": "play perilous path"}, "physics": {"description": "start a physics simulation"}, "pi": {"description": "calculate pi to the n-th digit", "args": {"?n:i:1~10000": "the number of digits"}, "standardVals": {"n": 100}}, "plot": {"description": "plot a mathematical function within bounds", "args": {"equation": "the equation to plot", "?xmin:n:-1000~1000": "the minimum x value", "?xmax:n:-1000~1000": "the maximum x value", "?ymin:n:-1000~1000": "the minimum y value", "?ymax:n:-1000~1000": "the maximum y value", "?playtime:i:0~10000": "the time to play the sound for in milliseconds"}, "standardVals": {"xmin": -3, "xmax": 3.1, "ymin": -3, "ymax": 3.1, "playtime": 2500}}, "plotter": {"description": "plot mathematical functions"}, "pong": {"description": "play a game of pong against the computer", "isGame": true}, "pull": {"description": "pull a file from the server", "args": {"file": "file to pull"}}, "push": {"description": "push a file to the server", "args": {"file": "file to push"}}, "pv": {"description": "print a message with a typing animation", "args": ["*message"]}, "pwd": {"description": "print the current working directory"}, "python": {"description": "run a script or open a python shell", "args": {"?file": "the script to run"}}, "qr": {"description": "generate a qr code", "args": {"*text": "the text to encode"}}, "rate": {"description": "rate a programming language", "args": ["language"]}, "raycasting": {"description": "play with raycasting"}, "reboot": {"description": "reboot the website"}, "reload": {"description": "Reloads the terminal"}, "rename": {"description": "rename a file or folder", "args": {"file": "the file or folder to rename", "name": "the new name of the file or folder"}}, "reset": {"description": "reset the terminal", "args": {"?n=now:b": "reset now"}}, "reverse": {"description": "reverse a message", "args": {"*message": "the message to reverse", "?c": "copy the reversed message to the clipboard"}}, "rm": {"description": "remove a file", "args": ["*file"]}, "rmdir": {"description": "remove a directory", "args": ["directory"]}, "rndm": {"description": "generate a random number based on the current time", "args": {"?min:n:0~100000": "minimum value (inclusive)", "?max:n:0~100000": "maximum value (inclusive)", "?t=time:b": "use a time based random number generator", "?f=float:b": "generate a float instead of an integer"}, "standardVals": {"min": 1, "max": 100}}, "sc": {"description": "manage the startup commands", "args": {"?mode": "'add', 'remove', 'reset' or 'list'", "?command": "the command to add or remove"}, "defaultValues": {"mode": "list"}}, "search": {"description": "search something via google.com", "args": {"*query": "the search query", "?b=baseUrl": "the base search-engine url"}, "standardVals": {"b": "https://www.google.com/search?q="}}, "set": {"description": "set a value on the server", "args": {"key": "the key to set the value of", "value": "the value to set"}}, "sha256": {"description": "calculate the SHA-256 hash of a message", "args": {"?s": "a string to hash", "?f": "a file to hash"}, "standardVals": {"s": null, "f": null}}, "shoot": {"description": "Play a game of Shoot against another player locally", "isGame": true, "args": {"?l=lives:i:1~100": "The number of lives each player has", "?s=shoot-delay:i:0~1000": "The number of frames between each shot"}, "defaultValues": {"l": 3, "s": 20}}, "shutdown": {"description": "shutdown the terminal"}, "sleep": {"description": "sleep for a number of seconds", "args": ["seconds:n:0~1000000"]}, "slime": {"description": "Start a slime simulation"}, "snake": {"description": "play a game of snake", "args": {"?s:n:1~10": "speed level of snake moving"}, "standardVals": {"s": 2}, "isGame": true}, "solve": {"description": "solve a mathematical equation for x", "args": {"*equation": "the equation to solve", "?i:n:1~5": "the number of iteration-steps to perform", "?m:n:1~100000": "the maximum number of total iterations to perform", "?l:n": "the lower bound of the search interval", "?u:n": "the upper bound of the search interval"}, "standardVals": {"i": 4, "m": 100000, "l": -100, "u": 100}, "disableEqualsArgNotation": true}, "sorting": {"description": "display a sorting algorithm", "args": {"?algorithm": "the algorithm to display", "?n:i:10~1000": "the number of elements to sort", "?speed:n:0~100": "the speed of the sorting algorithm", "?s:b": "silent mode (deactivate sound)"}, "standardVals": {"algorithm": null, "n": 20, "speed": 1}}, "stacker": {"description": "play a stacker game", "isGame": true}, "style": {"description": "change the style of the terminal", "args": ["?preset"], "standardVals": {"preset": null}}, "sudo": {"description": "try to use sudo", "args": ["**"]}, "terminal": {"description": "a terminal inside a terminal"}, "terml": {"description": "run a .terml file", "args": {"file": "the file to run"}}, "tetris": {"description": "play a classic game of tetris", "isGame": true}, "tictactoe": {"description": "play a game of tic tac toe against the computer.", "args": {"?d=difficulty": "play against an unbeatable computer."}, "standardVals": {"d": "normal"}, "isGame": true}, "timer": {"description": "set a timer", "rawArgMode": true}, "todo": {"description": "manage a todo list", "rawArgMode": true}, "touch": {"description": "create a file in the current directory", "args": {"filename": "the name of the file"}}, "turing": {"description": "run a turing machine file", "args": {"file": "file to run", "?t=startTape": "starting tape content", "?s=sleep:i:0~10000": "sleep time between steps (in ms)", "?d=startingState": "starting state", "?m=maxSteps:i:0~9999999999": "maximum number of steps to run", "?turbo:b": "run as fast as possible"}, "standardVals": {"startTape": "", "s": 100, "d": "0", "m": 100000}}, "turtlo": {"description": "spawn turtlo", "args": {"?size:i:1~3": "size of turtlo", "?silent:b": "don't print anything"}, "defaultValues": {"size": 1}}, "type-test": {"description": "test your typing speed", "isGame": true}, "uname": {"description": "print the operating system name"}, "upload": {"description": "upload a file from your computer"}, "vigenere": {"description": "encrypt/decrypt a message using the vigenere cipher", "args": {"message": "the message to encrypt/decrypt", "key": "the key to use", "?d=decrypt:b": "decrypt the message instead of encrypting it", "?c=copy:b": "copy the result to the clipboard"}}, "visits": {"description": "Shows the number of page visits"}, "w": {"description": "print the current time elapsed"}, "wave": {"description": "play with a wave"}, "wc": {"description": "display word and line count of file", "args": {"?f=file": "file to open", "?s": "string to count instead of file"}}, "whatday": {"description": "get the weekday of a date", "args": ["DD.MM.YYYY"]}, "whatis": {"description": "display a short description of a command", "args": ["command"]}, "whoami": {"description": "get client info"}, "yes": {"description": "print a message repeatedly", "args": {"?message": "the message to print", "?s:b": "slow mode"}, "standardVals": {"message": "y"}}, "zip": {"description": "zip a file"}}