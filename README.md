# Deno REST API

### Installation

eno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the [releases page](https://github.com/denoland/deno/releases).

##### Using Shell (macOS, Linux)

    curl -fsSL https://deno.land/x/install/install.sh |  sh

##### Using PowerShell (Windows):

    iwr https://deno.land/x/install/install.ps1 -useb | iex

##### Getting Started

Try running a simple program:

    deno run --allow-env --allow-read --allow-net main.js

### Parameter

##### User

| Request    | Method | Description     |
| ---------- | ------ | --------------- |
| /users     | POST   | create users    |
| /users     | GET    | get all users   |
| /users/:id | GET    | get users by id |

### Nodemon (Denon)

https://deno.land/x/denon

##### Install

    deno install -Af --unstable https://deno.land/x/denon/denon.ts

##### Usage

    denon run main.js

### Velociraptor

https://github.com/umbopepato/

##### Install

    deno install --allow-read --allow-env --allow-run -n vr https://deno.land/x/velociraptor/cli.ts

##### Usage

    vr [SCRIPT]

    example
    vr start

##### Script files

    // scripts.json
    {
        "scripts": {
            "start": "deno run --allow-net main.js",
            "test": "deno test --allow-net main_test.js"
        }
    }
