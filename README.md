# Sonarqube Provider for Pulumi - Documentation

## Overview
This package provides a Pulumi provider for managing Sonarqube resources. It's generated using the Pulumi Terraform Bridge and allows you to manage your Sonarqube instance infrastructure as code.

## Installation
To use this provider, you need to:

Install Pulumi CLI

Install the Node.js SDK

```npm install @pulumi/sonarqube```

## Available Resources
ALM Integrations
sonarqube:index/almAzure:AlmAzure - Azure DevOps ALM integration

sonarqube:index/almGithub:AlmGithub - GitHub ALM integration

sonarqube:index/almGitlab:AlmGitlab - GitLab ALM integration

## Bindings
sonarqube:index/azureBinding:AzureBinding - Azure binding

sonarqube:index/githubBinding:GithubBinding - GitHub binding

sonarqube:index/gitlabBinding:GitlabBinding - GitLab binding

## User Management
sonarqube:index/group:Group - Manage groups

sonarqube:index/groupMember:GroupMember - Manage group members

sonarqube:index/user:User - Manage users

sonarqube:index/userExternalIdentity:UserExternalIdentity - External user identities

sonarqube:index/userToken:UserToken - User tokens

## Quality Profiles & Gates
sonarqube:index/qualitygate:Qualitygate - Quality gates

sonarqube:index/qualitygateProjectAssociation:QualitygateProjectAssociation - Quality gate project associations

sonarqube:index/qualityprofile:Qualityprofile - Quality profiles

sonarqube:index/qualityprofileActivateRule:QualityprofileActivateRule - Activate rules in quality profiles

sonarqube:index/rule:Rule - Manage rules

## Projects
sonarqube:index/project:Project - Manage projects

sonarqube:index/projectMainBranch:ProjectMainBranch - Project main branch settings

sonarqube:index/portfolio:Portfolio - Manage portfolios

## Other Resources
sonarqube:index/newCodePeriods:NewCodePeriods - New code periods

sonarqube:index/permissionTemplate:PermissionTemplate - Permission templates

sonarqube:index/permissions:Permissions - Permissions

sonarqube:index/plugin:Plugin - Plugin management

sonarqube:index/setting:Setting - System settings

sonarqube:index/webhook:Webhook - Webhooks

## Available Functions
getGroup - Get information about a group

getPortfolio - Get portfolio information

getProject - Get project information

getQualitygate - Get quality gate details

getQualityprofile - Get quality profile details

getRule - Get rule information

getUser - Get user information

## Example Usage
Here's a basic example of how to create a Sonarqube project:

```typescript
import * as sonarqube from "@pulumi/sonarqube";

const myProject = new sonarqube.Project("my-project", {
name: "my-project",
project: "my-project-key",
visibility: "public"
});
```

## Configuration
The provider supports the following configuration options:

url: Sonarqube server URL

token: Authentication token

host: Sonarqube host (alternative to url)

scheme: http or https

port: Server port

Configure these through Pulumi config:

```typescript
const config = new pulumi.Config("sonarqube");
const token = config.requireSecret("token");
const url = config.require("url");
```