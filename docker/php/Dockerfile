FROM php:7.3-fpm
MAINTAINER Wilgner Pinheiro

RUN apt-get update -y
RUN apt-get update && apt-get install -y libpq-dev 
RUN apt-get -y install curl git unzip
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_pgsql

WORKDIR /
# Install composer
RUN  cd / && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
  php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
  php composer-setup.php --install-dir=bin --filename=composer

# install phpunit
RUN curl https://phar.phpunit.de/phpunit.phar -L > phpunit.phar \
  && chmod +x phpunit.phar \
  && mv phpunit.phar /usr/local/bin/phpunit \
  && phpunit --version

# install cron
RUN apt-get -y install rsyslog cron

# Create the log file
RUN touch /var/log/schedule.log
RUN chmod 0777 /var/log/schedule.log



EXPOSE 9000
