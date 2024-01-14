Feature: DroitUtilisateur

  Background:
    * call read('karate-config.js')
    * call read('db_cleaner.js')
    * url droitUtilisateurUrl
    * header Content-Type = 'application/json'

    * def postBody = read('DroitUtilisateurSave.json')
    * def FindAllSchema = read('DroitUtilisateurSchema.json')

  Scenario: Fail - GetByID Not Found

    * path 'id', 99999999
    * header Authorization = 'Bearer ' + adminToken
    * method GET
    * status 404
    * match response.length == 0



  Scenario: Fail - POST DroitUtilisateur without Body

    * path ''
    * header Authorization = 'Bearer ' + adminToken
    * method POST
    * status 400
    * match response.error == "Bad Request"



  Scenario: Fail - POST DroitUtilisateur without Authorization

    * path ''
    * header Authorization = 'Bearer unvalid'
    * request postBody
    * method POST
    * status 500



  Scenario: Fail - Save DroitUtilisateur with method PATCH

    * path ''
    * header Authorization = 'Bearer ' + adminToken
    * method PATCH
    * status 405
    * match response.error == "Method Not Allowed"
