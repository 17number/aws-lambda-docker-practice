# What is this?

Practice with [lambci/docker\-lambda](https://github.com/lambci/docker-lambda)


# Usage

## Ruby

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:ruby2.5 function.handler
```


## Python

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:python3.7 function.my_handler \
'{"first_name": "Kenji", "last_name": "Yamada"}'
```


## Node.js

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:nodejs10.x function.handler \
'{"runtime": "nodejs10.x"}'
```
