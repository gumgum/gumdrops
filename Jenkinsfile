#!groovy
echo "Pipeline >> Running ${env.BUILD_ID} on ${env.JENKINS_URL}"

pipeline {
    agent any

    parameters {
        string(name: 'GIT_TAG', defaultValue: 'master', description: 'What git tag/branch should we deploy?')
    }

    stages {
        stage('PREPARE') {
            agent any
            steps {
                deleteDir()
            }
        }

        stage('BUILD_AND_TEST') {
            agent {
                docker {
                    image 'jonathanhle/docker_jenkins_slave:latest'
                }
            }
            steps {
                checkout scm
                checkout([$class: 'GitSCM', branches: [[name: '${GIT_TAG}']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'WipeWorkspace'], [$class: 'RelativeTargetDirectory', relativeTargetDir: 'jenkins_build']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '2714cbf9-79b8-4c4f-be82-627f6ef9c0c3', url: 'git@bitbucket.org:gumgum/common-js-components.git']]])
                sh "chmod -R +x _ops"
                sh "./_ops/01_build.sh"
                sh "./_ops/02_test.sh"
            }
        }

        stage('DEPLOY') {
            agent any
            steps {
                sh "./_ops/03_deploy.sh"
            }
        }
    }
}
