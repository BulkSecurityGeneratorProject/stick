# Stick - A Web Repository for CloudBindle Recipies

A prototype tool for sharing provisioning recipes.  Stick lets a user connect to their Github account and link one or more "can" repos to their profile.  A can is a container-based recipe for building resources in a cloud.  It has a JSON file that defines certain needed pieces of information to be listed in Stick, it has a Dockerfile that defines the environment used to provision (e.g. has an install of Terraform), and any other resources needed to setup what is provisioned (e.g. )

This application, Stick, allows people to publish their Cans and use them with Bindle.

This uses [JHipster](https://jhipster.github.io/).

## Compiling

See [this](http://jhipster.github.io/creating_an_app.html) page for setting up JHipster and creating the app.

    cd stick
    yo jhipster

## Running

You can just run this via Maven:

    mvn spring-boot:run

## Entities

Here's the data model.  Notice, it's really similar to DockerHub since Stick's website will operate similarly (but maintain no source/repositories ourselves, just metadata).

* user (already part of JHipster)
* external_account
    * provider [github]
    * username
    * token
* repository
    * name
    * description
    * short_description
    * visibility
    * repo_url
    * provider [github]

A repository can have 0_n of the following associated with it:

* tags
    * key
    * value
* collaborators
    * team
    * permissions

A repository must have 1 or more of these associated with it:

* repository_settings
    * push_type [branch|tag]
    * name
    * dockerfile_path
    * stick_path
    * stick_tag_name
