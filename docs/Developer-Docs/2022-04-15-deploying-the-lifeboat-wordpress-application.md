---
title: Deploying the Lifeboat WordPress Application
author:
  ? "{ field.author }"
draft: true
date: 2022-04-14 16:21
audience:
  - Digital
purpose: How to make updates to WordPress core and plugins
tags: []
---
Each environment can be deployed automatically using a Bitbucket Pipeline or manually from the command line.

## Automated Deployments

Automated deployments use actions (GitHub) or pipelines (Bitbucket). The corresponding repository’s deployment features support automated deploys to these environments:

* **develop**, through a commit to the develop branch
* **qa**, through a commit to the staging branch
* **preprod**, through a commit to the master branch
* **production** using a manual deployment described below

The use of a chained automated deployment provides separate access control for the code that does the actual deployment. A developer with repository read/write access commits code  to the **metro-dot-net** repository which triggers a deployment from the metro-lifeboat-deploy repository to which they do not have read/write access. This “separation of powers” allows developers to maintain the application code base without modifying the deployment.

The **metro-lifeboat-deploy** repository contains the Ansible playbooks and environment definitions used for a deployment. The actions/pipeline associated with the **metro-dot-net** repository is used to “bootstrap” an Ansible environment which runs the deploy playbook **metro-lifeboat-deploy.yml** from the **metro-lifeboat-deploy** repository.

### GitHub based repository

For in-depth information about continuous deployment refer to the Github Actions documentation: <https://github.com/features/actions>

The file: **.github/workflows/lifeboat-deploy.yml** controls deployment to environments after a commit to a specific branch for each environment. Review the file for additional details. A “chained” deployment is used, whereby a commit to a branch triggers a deployment that chains to the application deployment in the repository **metro-lifeboat-deploy** located at: <https://github.com/LACMTA/metro-lifeboat-deploy.git>

There are several secrets used by Ansible and Github for a deploy. These secrets are available in the respective repositories.

### Bitbucket based repository

For in-depth information about continuous deployment on Bitbucket refer to the documentation: <https://bitbucket.org/product/features/pipelines>

The file: **bitbucket-pipelines.yml** located in the root of the repository controls deployment to environments after a commit to a specific branch for each environment. Review the file for additional details. A “chained” deployment is used, whereby a commit to a branch triggers a deployment that chains to the application deployment in the repository **metro_deploy_instance** located at: [https://<USERNAME>@bitbucket.org/getsomeglue/metro_deploy_instance.git](https://%3CUSERNAME%3E@bitbucket.org/getsomeglue/metro_deploy_instance.git)

The credentials required to access the **metro_lifeboat** repository are stored as Repository Variables in the **metro_deploy_instance** repository.

## Manual Deployments

A manual deployment runs the Ansible playbook used by the automated deployment.

The repository containing the Ansible deployment is located at <https://github.com/LACMTA/metro-lifeboat-deploy.git>

The Lifeboat admin instance is configured for manual deployments:

AWS Account: 120253223515

Instance name: met-d-lbt-admin-ops-RoleAdmin-usw2c

Region: us-west-2

Availability Zone: us-west-2c

Public IP: available within the AWS console

User: ubuntu

Key: mlbt_master.pem

Running a Manual Deployment from the Lifeboat Admin Instance

Follow this sequence of commands to deploy the head of the metro-dot-net master branch to the production web servers:

Shell into the admin instance using the credentials for the ubuntu user, then:

\# MUST switch to the webdev user

$ sudo su - webdev

$ cd ~/metro-lifeboat-deploy

\# update the deploy code as needed

$ git pull

\# load required ssh keys into the ssh-agent

$ ./load-ansible-key.sh

$ ansible-playbook -i production -e "ansible_user=ubuntu" \

                   metro-lifeboat-deploy.yml

Configuring an Instance to Run a Deployment

Start with an instance running Ubuntu 20.04 LTS. The tested Python version is v3.8.*.

Clone a copy of the Ansible deploy repository located at 

<https://github.com/LACMTA/metro-lifeboat-deploy.git>

### \# start at home

### $ cd ~

\# clone the repository

### $ git clone <repository> metro_deploy_instance

\# install the python environment for ansible

$ python3 -m venv env

$ pip install -r requirements.txt

Set an environment variable used by Ansible to decrypt files in the vault

Obtain the Ansible Vault decryption key from an administrator and save the plain-text key in a text file. Change the permissions on the enclosing dir and file so that only your user account can access

Example:

### $ mkdir ~/ansible

### $ vi ~/ansible/.vault_key (insert the plain text key in the file)

### $ chmod 0700 ~/ansible

### $ chmod 0600 ~/ansible/.vault_key

Set the environment variable to the location of the key file. Prevent adding the command to the ‘history’ buffer by starting the command line with a space character:

### $ <space>export ANSIBLE_VAULT_PASSWORD_FILE=~/ansible/.vault_key

Setup ~/.ssh with SSH configuration for bastion host support

Obtain the following two files and place them in the ~/.ssh folder:

bastion.pem

obtain bastion.pem ssh private key used to connect to bastion host

config

Host *

    Port 22

    StrictHostKeyChecking no

    UserKnownHostsFile /dev/null

    ServerAliveInterval 60

    ServerAliveCountMax 30

Host bastion

    HostName 54.215.214.16 

    User ubuntu

    IdentityFile ~/.ssh/bastion.pem

    StrictHostKeyChecking no

Load the required ssh keys

### $ ./load_ansible_key.sh

Deploy to the targeted environment

Test connectivity with the targeted deployment environment by running the Ansible metro-ping.yml playbook.

### $ cd ~/metro-lifeboat-deploy

\# activate python environment

$ source env/bin/activate

### $ ansible-playbook -i development metro-ping.yml

Expected output:

$ ansible-playbook -i development metro-ping.yml 

PLAY \[all] \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\**

TASK \[Gathering Facts] \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\**

ok: \[mlbt_dev]

TASK \[Ping host for a 'pong' response] \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\**

ok: \[mlbt_dev]

PLAY RECAP \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\**

mlbt_dev : ok=2 changed=0 unreachable=0 failed=0 skipped=0 rescued=0 ignored=0   

Once access to the deploy environment is confirmed, deploy using one of the following commands. IMPORTANT - Before running the deployment, setup the environment with these commands:

### $ cd ~/metro-lifeboat-deploy

### \# load Python virtual env to setup correct Ansible version

### $ source env/bin/activate

development

$ (env) ansible-playbook -i development --limit mlbt_dev \

                           metro-lifeboat-deploy.yml

qa

$ (env) ansible-playbook -i qa --limit mlbt_qa \

                          metro-lifeboat-deploy.yml

preprod

$ (env) ansible-playbook -i preprod --limit mlbt_preprod \

                           metro-lifeboat-deploy.yml

production

$ (env) ansible-playbook -i production -e "ansible_user=ubuntu" \

                           metro-lifeboat-deploy.yml