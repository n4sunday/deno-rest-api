# Deno REST API

### Installation
eno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the  [releases page](https://github.com/denoland/deno/releases).
#### Using Shell (macOS, Linux)
    curl -fsSL https://deno.land/x/install/install.sh |  sh
#### Using PowerShell (Windows):

    iwr https://deno.land/x/install/install.ps1 -useb | iex

### Getting Started
Try running a simple program:

    deno run --allow-env --allow-net main.js 


### Parameter
| Request        | Method | Description          |
|----------------|--------|----------------------|
| /movies        | GET    | get all movies       |
| /movies/:title | GET    | get movie by title   |
| /movies        | POST   | add movie            |
| /movies/:rank  | PUT    | update movie by rank |
| /movie/:rank   | DELETE | delete movie by rank |
