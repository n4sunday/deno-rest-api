# Deno REST API

### Installation
eno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the  [releases page](https://github.com/denoland/deno/releases).
#### Using Shell (macOS, Linux)
    curl -fsSL https://deno.land/x/install/install.sh |  sh
#### Using PowerShell (Windows):

    iwr https://deno.land/x/install/install.ps1 -useb | iex

### Getting Started
Try running a simple program:

    deno run --allow-env --allow-read --allow-net main.js


### Parameter
| Request        | Method | Description          |
|----------------|--------|----------------------|
| /users         | POST   | create users         |
| /users         | GET    | get all users        |
