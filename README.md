# Stick - A Web Repository for CloudBindle Recipies

This application, Stick, allows people to publish their provisioning receipes (provisioning JSON descriptor + Docker container to actually do the provisioning) and use them with CloudBindle.

Stick lets a user connect to their Github account and link one or more provisioning receipies repos (called "cans" tentatively) to their profile.  A can is a container-based recipe for building resources in a cloud.  It has a JSON file that defines certain needed pieces of information to be listed in Stick, it has a Dockerfile that defines the environment used to provision (e.g. has an install of Terraform), and any other resources needed to setup what is provisioned (e.g. APIs, config files, etc).  Notice this is really, really similar to the "DockStore" in [Collaboratory](https://github.com/CancerCollaboratory/dockstore) which is used for analytical workflows in Docker rather than provisioning receipies.  We will probably converge the two codebases in the near future but this repo exits for the time being so I can explore [JHipster](https://jhipster.github.io/) without interrupting development on the DockStore.

This project uses [JHipster](https://jhipster.github.io/).

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
    * external_accounts (1..many)
    * repositories (1..many)
* external_account
    * provider [dockerhub,quay.io]
    * username
    * token
* repository
    * name
    * description
    * short_description
    * visibility
    * repo_url
    * provider [dockerhub,quay.io]
    * tags (many...many)
    * collaborators (1...many)
    * repository_settings (1...many)

A repository can have 0_n of the following associated with it:

* tags
    * key
    * value
* collaborators
    * user
    * permissions

A repository must have 1 or more of these associated with it:

* repository_settings
    * push_type [branch|tag]
    * name
    * dockerfile_path
    * param_descriptor_json (this is a JSON that describes how to run the provisioning tool, might need to be )
    * stick_path
    * stick_tag_name
