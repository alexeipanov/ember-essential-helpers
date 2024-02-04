FROM node:18.19.0-bookworm
RUN yarn global add ember-cli@4.12.2
EXPOSE 4200 7200
WORKDIR /source
CMD ["/bin/bash"]
