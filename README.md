# What is this?

Practice with [lambci/docker\-lambda](https://github.com/lambci/docker-lambda)


# Usage

## Trial

### Ruby

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:ruby2.5 function.handler
```


### Python

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:python3.7 function.my_handler \
'{"first_name": "Kenji", "last_name": "Yamada"}'
```


### Node.js

```bash
$ docker run --rm -v "$PWD":/var/task lambci/lambda:nodejs10.x function.handler \
'{"runtime": "nodejs10.x"}'
```


## Build & Deploy

### Ruby

### Python

Build

```bash
$ cd python
$ docker build -t aws-lambda-python3.7-test .
```

Create deploy package

```bash
$ docker run --rm -v "$PWD":/var/task aws-lambda-python3.7-test:latest
```

Deploy with [`aws-cli`](https://github.com/aws/aws-cli)

```bash
$ aws lambda create-function \
  --function-name docker-lambda-python-test \
  --zip-file fileb://deploy_package.zip \
  --handler lambda_function.lambda_handler \
  --runtime python3.7 \
  --timeout 10 \
  --memory-size 1024 \
  --role arn:aws:iam::123456789012:role/lambda-execute-role
```


### Node.js
