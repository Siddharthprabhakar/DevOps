# Use the official MySQL image as the base
FROM mysql:8.0

# Set environment variables for the MySQL database
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=eduflex
ENV MYSQL_USER=vk
ENV MYSQL_PASSWORD=1234

# Copy custom MySQL configurations
COPY ./init/my.cnf /etc/mysql/conf.d/my.cnf

# Copy SQL initialization scripts (optional)
COPY ./init/eduflexdb.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306

# Use the default command provided by the MySQL image
CMD ["mysqld"]
