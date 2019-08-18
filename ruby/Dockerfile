FROM lambci/lambda:build-ruby2.5
ENV LANG C.UTF-8
ENV AWS_DEFAULT_REGION ap-northeast-1

ADD . .

CMD bundle install --path vendor/bundle && \
  zip -r9 deploy_package.zip .
