pet-finder-react

    You can access the deployed site by visiting: https://salim-khidhri.onrender.com

Application Behaviour(BDD)

This is an application that allows users to add pets and be able to see all the pets they have added. The user should also be able to:

    view all the available pets
    search for a pet through the name or breed
    update details for a pet that they have added
    a user should be able to remove details of pets they added
    a user should NOT be able to update or delete pets they have not added
    a user must be logged in order to use the application

Install dependancies. The application dependancies are:

                 bundle install
                 npm install
                 npm start            
logic

    Login and Registration

    The landing page will welcome a user to the website and allow them to register and/or login

    After they login they will be taken to the pets of that user

    Searching for a pet

    The user can search for a pet either through the name or the breed

    This functionality will be available in two pages: My pets page All pets page

    User pets

    This page allows a user to see all the pets that they have added

    It also allows a user to add a new pet

    It allows a user to edit an existing pet

    It allows a user to remove an existing pet

    It allows a user to navigate to a page that displays all the pets available

    All pets

    displays all the pets that have been added to the application

Descripton

    This project uses react library.

    Some of the components are:

        AddNewpet
            It allows a user to add new pets

        DeletePets
            Allows a user to only delete the pets they have added

        Updatepets
            Allows a user to update pets they have added

        LoginPets
            Allows a user who already has an account to view all his pets

        PetsCard
            Displays a pets name and image

        RegisterUser
            Allows someone to create an account

        SearchForPets
            Allows a user to search for a pet by name or breed

    It has PetsKeeper that fetches pets data from the api and adds the to the store

REQUIREMENTS FOR USE
Prerequisites

    For you to use the content on this repo ensure you have the following:

        node v14.17.4 and above

        A computer that runs on either of the following; (Linux, Mac OS and Windows)

        nodejs 9.0+

        npm 6.14.14 and above

        Vue 2.6.11

        Status:
            maintained and is currently under development

        Version: - v0.1.0

        Setup instructions

            To use this repository on your machine requires some simple steps:

            - Open a terminal / command line interface on your computer

            Clone the repo by using the following to create a copy on your local machine: 
            "https://github.com/al-hajjar/pet-finder-front-end"

                Change directory to the repo folder:
                    cd phase-3-front-end

                Open it in Visual Studio Code
                    code .

                npm start to install all the dependancies

                Version: v0.1.0

                Node Version: 14.17.4 and above

    Authors:
        [Kidhri Salim]

    License
        This project is licensed under the MIT License
