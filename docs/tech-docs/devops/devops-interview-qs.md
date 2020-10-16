---
id: devops-interview-qs
title: DevOps Interview Questions and Answers
sidebar-label: DevOps Interview Q/A
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="Beginner"
  values={[
    {label: 'Beginner', value: 'Beginner Level'},
    {label: 'Advanced', value: 'Advanced Level'},
  ]}>
  <TabItem value="Beginner Level"><Link to={useBaseUrl('##beginner-level')}>Beginner Level</Link></TabItem>
  <TabItem value="Advanced Level"><Link to={useBaseUrl('##advanced-level')}>Advanced Level</Link></TabItem>
</Tabs>

## Beginner Level

### What is DevOps?

DevOps is an approach to collaborate the development and operations teams for a better, bug-free continuous delivery and integration of the source code.  
DevOps is about automating the entire SDLC (Software Development Life Cycle) process with the implementation of CI/CD practices.
CI/CD are the Continuous integration and continuous deployment methodologies.  
Every source code check-in will automatically build and unit test the entire code against a  
production like environment and continuously deployed to production environment after it passes its automated tests.  
That eliminates the long feedback, bug-fix, and product enhancements loops between every  
Release.
Every team takes the accountability of the entire product right from the requirement analysis to documentation to coding, testing in development environments, code deployment and continuous improvements in terms of bugs and feedback from reviewers and the customers.



### What are some of the tools you have used in DevOps approach?](#collapse-beginner-xs-1181)

Considering DevOps to be an ideology towards achieving a quality product, every organization has its own guidelines and approach towards it.  
Some of the popular tools I have used are:

* Git as a Distributed VCS to manage the source code.
* Jenkins to achieve CI/CD (Continuous Integration and Continuous Delivery) +plugins
* Puppet for Configuration Management and Deployment tool
* Nagios for Continuous Monitoring; and
* Docker for containerization.



### What is Git?

Git is a Distributed Version Control System; used to logically store and backup the entire history of how your project source code has developed, keeping a track of every version change of the code.

Git facilitates very flexible and efficient branching and merging of your code with other collaborators.Being distributed git is extremely fast and more reliable as every developer has his own local copy of the entire repository.

Git allows you to undo the mistakes in the source code at different tiers of its architecture namely- Working directory, Staging (Index) area, Local repository, and Remote repository.

Using Git we can always get an older version of our source code and work on it.Git tracks every bit of data as it checksums every file into unique hash codes referring to them via pointers.

To summarize Git is the most efficient and widely used VCS, used by major companies like Linux, Google, Facebook, Microsoft, Twitter, LinkedIn, Netflix, Android, Amazon, IBM, Apple IOS to name a few…



### What is a git commit object? How is it read?](#collapse-beginner-xs-1185)

When a project repository is initialized to be a git repository, git stores all its metadata in a hidden folder “.git” under the project root directory.  
Git repository is a collection of _objects._ 

Git has 4 types of objects – blobs, trees, tags, and commits.

Every commit creates a new _commit object_ with a unique SHA-1 hash_id.  
Each commit object has a pointer reference to the tree object, its parent object, author, committer and the commit message.  
![DevOps](https://d2o2utebsixu4k.cloudfront.net/media/images/1552023479018-DevOps--set2-.jpg)

Diagram: Single Commit object

To see the commit log message along with the textual diff of the code, run:  
git show `<commit_id>`
![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552023545395-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [master] $git show f9354cb
commit f9354cb08d91e80cabafd5b54d466b6055eb2927
Author: divya bhushan <divya_bhushan@hotmail.com>
Date:   Mon Feb 11 23:39:24 2019 +0100
    Add database logs.
diff --git a/logs/db.log b/logs/db.log
new file mode 100644
index 0000000..f8854b0
--- /dev/null
+++ b/logs/db.log
@@ -0,0 +1 @@
+database logs
```

To read a commit object git has 'git cat-file’ utility.  
![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552023639240-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [master] $git cat-file -p f9354cb
tree 2a85825b8d20918350cc316513edd9cc289f8349
parent 30760c59d661e129329acfba7e20c899d0d7d199
author divya bhushan <divya_bhushan@hotmail.com> 1549924764 +0100
committer divya bhushan <divya_bhushan@hotmail.com> 1549924764 +0100 
Add database logs.
```

A tree object is like an OS directory that stores references to other directories and files (blob type).  
![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552023752556-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [master] $git cat-file -p 2a85825b8d20918350cc316513edd9cc289f8349
100755 blob 054acd444517ad5a0c1e46d8eff925e061edf46c README.md
040000 tree dfe42cbaf87e6a56b51dab97fc51ecedfc969f39 code
100644 blob e08d4579f39808f3e2830b5da8ac155f87c0621c dockerfile
040000 tree 014e65a65532dc16a6d50e0d153c222a12df4742   logs
```



### What is the difference between a git reset and a git revert.

* git revert is used to record some new commits to reverse the effect of some earlier commits/snapshot of a project.
* Instead of removing the commit from the project history, it figures out how to undo the changes introduced by the commit & appends a new commit with the resulting content in the current branch.

![difference-between-a-git-reset-and-a-git](https://d2o2utebsixu4k.cloudfront.net/media/images/1552024197659-What-is-the-difference-between-a-git-reset-and-a-git-revert.jpg)

*   **Usage:** git revert <commit_id>
*   **Use:** To undo an entire commit from your project history; removing a bug introduced by a commit.

**Reset Vs Revert**

*   git “reset”: resets the project to a previous snapshot erasing the changes.
*   git “revert” does not change the project history unlike git “reset”
*   Git “revert” undoes the commit id changes and applies the undo work as a new commit id object.



### How does 'git rebase’ work? When should you rebase your work instead of a 'git merge’?

There are scenarios wherein one would like to merge a quickfix or feature branch with not a huge commit history into another 'dev’ or 'uat’ branch and yet maintain a linear history.

A non-fast forward 'git merge’ would result in a diverged history. Also when one wants the feature merged commits to be the latest commits; 'git rebase’ is an appropriate way of merging the two branches.

'git rebase’ replays the commits on the current branch and place them over the tip of the rebased branch.Since it replays the commit ids, rebase rewrites commit objects and create a new object id(SHA-1). Word of caution: Do not use it if the history is on release/production branch and being shared on the central server. Limit the rebase on your local repository only to rebase quickfix or feature branches.

**Steps:**

Say there is a 'dev’ branch that needs a quick feature to be added along with the test cases from 'uat’ branch.

* **Step 1:** Branch out 'new-feature’ branch from 'dev’.

Develop the new feature and make commits in 'new-feature’ branch.

```bash
[dev ] $git checkout -b new-feature
[new-feature ] $ git add lib/commonLibrary.sh && git commit -m “Add commonLibrary file”
Divya1@Divya:rebase_project [new-feature] $git add lib/commonLibrary.sh && git commit -m 'Add commonLibrary file'Divya1@Divya:rebase_project [new-feature] $git add feature1.txt && git commit -m 'Add feature1.txt'
Divya1@Divya:rebase_project [new-feature] $git add feature2.txt && git commit -m 'Add feature2.txt'
```

* **Step 2:** Merge 'uat’ branch into 'dev’

```bash
[dev] $ git merge uat
```

* **Step 3:** Rebase 'new-feature’ on 'dev’

```bash
Divya1@Divya:rebase_project [dev] $git checkout new-featureDivya1@Divya:rebase_project [new-feature] $git rebase dev
First, rewinding head to replay your work on top of it...
Applying: Add commonLibrary file
Applying: Add feature1.txt
Applying: Add feature2.txt
```

* **Step 4:** Switch to 'dev’ branch and merge 'new-feature’ branch, this is going to be a fast-forward merge as 'new-feature’ has already incorporated 'dev’+’uat’ commits.

```bash
Divya1@Divya:rebase_project [new-feature] $git checkout dev
Divya1@Divya:rebase_project [dev] $git merge new-feature
Updating 5044e24..3378815
Fast-forward
feature1.txt         | 1 +
feature2.txt         | 1 +
lib/commonLibrary.sh | 16 ++++++++++++++++
3 files changed, 18 insertions(+)
create mode 100644 feature1.txt
create mode 100644 feature2.txt
create mode 100644 lib/commonLibrary.sh
```

this will result in linear history with 'new-feature’ results being at the top and 'dev’ commits being pushed later.

* **Step 5:** View the history of 'dev’ after merging 'uat’ and 'new-feature’ (rebase)

```bash
Divya1@Divya:rebase_project [dev] $git hist
* 3378815 2019-02-14 | Add feature2.txt (HEAD -> dev, new-feature) [divya bhushan]
* d3859c5 2019-02-14 | Add feature1.txt [divya bhushan]
* 93b76f7 2019-02-14 | Add commonLibrary file [divya bhushan]
*   5044e24 2019-02-14 | Merge branch 'uat' into dev [divya bhushan]
|  
| * bb13fb0 2019-02-14 | End of uat work. (uat) [divya bhushan]
| * 0ab2061 2019-02-14 | Start of uat work. [divya bhushan]
* | a96deb1 2019-02-14 | End of dev work. [divya bhushan]
* | 817544e 2019-02-14 | Start of dev work. [divya bhushan]
|/  
* 01ad76b 2019-02-14 | Initial project structure. (tag: v1.0, master) [divya bhushan]
```

:::note
NOTE: 'dev’ will show a diverged commit history for 'uat’ merge and a linear history for 'new-feature’ merge.
:::



### What is a Docker? Explain its role in DevOps.

Every source code deployment needs to be portable and compatible on every device and environment.

Applications and their run time environment such as libraries and other dependencies like binaries, jar files, configuration files etc.. are bundled up(packaged) in a **Container**.

_Containers_ as a whole are portable, consistent and compatible with any environment.

In development words, a developer can run its application in any environment: dev, uat, preprod and production without worrying about the run-time dependencies of the application.

*   Docker is a container platform.
*   Docker is a framework that provides an abstraction layer to manage containers.
*   _Docker_ is a containerization engine, which automates packaging, shipping, and deployment of any software applications or _Containers._
*   Docker also lets us test the code and then deploy it in production.
*   Docker along with Jenkins (a Continuous Integration tool) and Git plugin contributes in CI/CD process.



### What is a Docker image? How are they shared and accessed?

A developer writes code instructions to define all the applications and its dependencies in a file called a “Dockerfile”.Dockerfile is used to create a 'Docker image' using the `docker build <directory>` command.The build command is run by the docker daemon.  
  
When you run a Docker image “Containers” are created. Containers are runtime instances of a Docker image.

*   A Container can have many images.
*   Docker containers are stored in a docker registry on docker host.
*   Docker has a client-Server architecture.
*   Docker registry is generally pushed and shared on a Docker hub (Remote server).

![Docker-image-How-are-they-shared-and-accessed](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025560274-What-is-a-Docker-image-How-are-they-shared-and-accessed.jpg)

Image credit: [docs.docker.com](https://docs.docker.com/engine/docker-overview/)

*   Other developers 'Docker pull’ these registry images and create containers in their own environment.
*   Developers can run their applications in the same docker container as their peers.
*   This way you can get the same test environment on different servers with the same applications and dependencies.



### How do you work on a container image?

```bash
--Get docker images from docker hub or your docker repository

docker pull busybox
docker pull centos
docker pull divyabhushan/myrepo
Divya1@Divya:~ $docker pull divyabhushan/myrepo
Using default tag: latest
latest: Pulling from divyabhushan/myrepo
6cf436f81810: Pull complete
987088a85b96: Pull complete
b4624b3efe06: Pull complete
d42beb8ded59: Pull complete
d08b19d33455: Pull complete
80d9a1d33f81: Pull complete
Digest: sha256:c82b4b701af5301cc5d698d963eeed46739e67aff69fd1a5f4ef0aecc4bf7bbf
Status: Downloaded newer image for divyabhushan/myrepo:latest
```

```bash
--List the docker images

Divya1@Divya:~ $docker images
REPOSITORY            TAG IMAGE ID            CREATED SIZE
divyabhushan/myrepo   latest 72a21c221add        About an hour ago 88.1MB
busybox               latest 3a093384ac30        5 weeks ago 1.2MB
centos                latest 1e1148e4cc2c        2 months ago 202MB
```

```bash
--Create a docker container by running the docker image

--pass a shell argument  : uname -a

Divya1@Divya:~ $docker run centos uname -a
Linux c70fc2da749a 4.9.125-linuxkit #1 SMP Fri Sep 7 08:20:28 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
```

--Docker images can be built by reading a dockerfile  
![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025878271-DevOps--set2--1.jpg)

--build a new image : 'newrepo’ with tag:1.0 from the dockerFiles/dockerfile

docker build -t newrepo:1.1 dockerFiles/

![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025892215-DevOps--set2--2.jpg)

-- Now create a container from the above image:

![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025914827-DevOps--set2--3.jpg)

-- List all the containers

![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025930794-DevOps--set2--4.jpg)

-- start the container

![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025951229-DevOps--set2--5.jpg)

--List only the running containers

![dockerfile](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025971609-DevOps--set2--6.jpg)



### What is Puppet? What is the need for it?

Puppet is a Configuration Management and deployment tool for administrative tasks.
This tool helps in automating the provisioning, configuration, and management of Infrastructure and Systems.

In simple words:
*   Puppet helps administrators to automate the process of manually creating and configuring Virtual machines.
*   Say, you have to bring up 'n’ number of Servers with 'x’ number of VMs(Virtual machines) on them. Each VM needs to be configured for certain users, groups, services, applications, and databases etc.
*   The entire infrastructure can be loaded up with the help of Puppet programs re-using the codes on multiple servers.
*   Key feature: Idempotency
*   The same set of configurations can be run multiple times to build a machine on a server, as puppet would allow only unique configurations to be run.



### What does 'Infrastructure as code’ means in terms of Puppet?

Entire Server Infrastructure setup configurations are written in terms of codes and re-used on all the Puppet Server agent’s nodes(machines) that are connected via a Puppet master Server.
This is achieved by the use of code snippets called 'manifests’; that are configuration files for every Server agent node.

*   Each manifest (program files with *.pp extension) consists of the resources and the codes.
*   We can review, deploy and test the environment configuration for development, testing and production environments.
*   Puppet manifests written once are deployed on any environment to build up the same infrastructure.



### What is Jenkins used for in DevOps?

Jenkins is a self-contained, open source automation server(tool) for continuous development.
Jenkins aids and automates CI/CD process.

It gets the checked in code from VCS like Git using a 'git plugin’, build the source code, run test cases in a production-like environment and make the code release ready using 'deploy’ plugin.

*   These continuous _delivery pipeline_s are written in a '_Jenkinsfile’_ which is also checked into project’s source code and version controlled by Git.
*   Pipelines are a continuous set of jobs that are run for continuous delivery and these jobs are integrated at every section of the workflow.
*   Jenkins pipelines easily connect to Docker images and containers to run inside.
*   Pipelines easily provide the desired test environment without having to configure the various system tools and dependencies.

Sample Jenkins file

```json
pipeline {
   agent { docker { image 'ubuntu:latest' } }
   stages {
       stage('build') {
           steps {
               sh 'uname -a'
           }
       }
   }
}
```

*   Jenkins will start the container- ubuntu with the latest image and execute the test case steps inside it.
*   agent directive says where and how to execute the pipeline
*   jenkinsfile (declarative pipeline)
*   pipeline
*   Jenkins saves us the trouble of debugging after a huge commit history if there was a code break.



### How do you implement CI/CD using Jenkins?

*   Continuous Integration using Jenkins and Git plugin
*   Create a new Jenkins item as a 'Pipeline’.
*   Add 'Git’ as branch source and give the Project repository url.
*   Every time source code is pushed to the remote git repository from the local git repo;
*   Jenkins job gets started(triggered).
*   Jenkins build the code and the output is available under “console output”
*   In the git repository add a 'jenkinsfile’ commit and push the code to git repository.
*   Add a Jenkinsfile in the git repository

```json
pipeline {
   agent { docker { image 'ubuntu:latest' } }
   stages {
       stage('build') {
           steps {
               sh 'uname -a'
           }
       }
stage('Test') {
           steps {
               sh './jenkins/scripts/test.sh'
           }
       }
   }
}
```



### Mention some post condition pipelines options that you used in Jenkinsfile?

We can mention some test conditions to run post the completion of stages in a pipeline.

Code snippet

```json
post {
always {
echo “This block runs always !!!”
}
success {
echo “This block runs when the stages has a success status”
}
unstable {
echo “This block is run when the stages abort with an unstable status”
}
}
```

Here are the post conditions reserved for jenkinsfile:

*   **always:**

Run the steps in the post section regardless of the completion status of the Pipeline’s or stage’s run.

*   **unstable:**

Only run the steps in post if the current Pipeline’s or stage’s run has an "unstable" status, usually caused by test failures, code violations, etc.

*   **aborted:**

Only run the steps in post if the current Pipeline’s or stage’s run has an “aborted” status.

*   **success:**

Only run the steps in post if the current Pipeline’s or stage’s run has a "success" status.

*   **failure:**

Only run the steps in post if the current Pipeline’s or stage’s run has a "failed" status.

*   **changed:**

Only run the steps in post if the current Pipeline’s or stage’s run has a different completion status from its previous run.

*   **cleanup:**

Run the steps in this post condition after every other post condition has been evaluated, regardless of the Pipeline or stage’s status.

## Advanced Level

### What is CI/CD pipeline?

_Continuous Integration_ is a development practice wherein developers regularly merge or _integrate_ their code changes into a common shared repository very frequently (*).Every code check-in is then verified by automated build and automated test cases.

This approach helps to detect and fix the bugs early, improve software quality,reduce the validation and feedback loop time; hence increasing the overall product quality and speedy product releases.

*   (*) Unlike traditional SDLC process wherein a developer would wait until the completion of the code before he/she shares the work on the shared repository.
*   Git becomes the best VCS tool with its strong, easy and reliable branching and merging architecture for Continuous Integration in a DevOps environment.
*   _Continuous Delivery_ is a software practice where every code check-in is automatically built, tested and ready for a release(delivery) to production.
*   Every code check-in should be release/deployment ready.
*   CD is an extension to CI.
*   CD phase delivers the code to a production like environment such as dev, uat, preprod etc and run automated tests.
*   On successful implementation of continuous delivery in the prod-like environment the code is ready to be deployed to the main production server.



### 2. How do you recover a deleted un-merged branch in your project source code?

By default, git does not allow you to delete a branch whose work has not yet been merged into the main branch.

To see the list of branches not merged with the checked out branch run:

```bash
Divya1@Divya:initialRepo [master] $git branch --no-merged
 dev
```

 --If you try to delete this branch, git displays a warning:
```bash
Divya1@Divya:initialRepo [master] $git branch -d dev
error: The branch 'dev' is not fully merged.
```

If you are sure you want to delete it, run `git branch -D dev`.

--If it is still deleted using the -D flag as:
```bash
Divya1@Divya:initialRepo [master] $git branch -D dev
```
--See the references log information
```bash
Divya1@Divya:initialRepo [master] $git reflog
cb9da2b (HEAD -> master) HEAD@{0}: checkout: moving from dev to master
b834dc2 (origin/master, origin/dev) HEAD@{1}: checkout: moving from master to dev
cb9da2b (HEAD -> master) HEAD@{2}: checkout: moving from master to master
cb9da2b (HEAD -> master) HEAD@{3}: checkout: moving from dev to master
b834dc2 (origin/master, origin/dev) HEAD@{4}: checkout: moving from master to dev
cb9da2b (HEAD -> master) HEAD@{5}: checkout: moving from uat to master
03224ed (**uat**) HEAD@{6}: checkout: moving from dev to uat
b834dc2 is the commit id when we jumped to ‘dev’ branch  
Create a branch named ‘dev’ from this commit id again.
```

```bash
Divya1@Divya:initialRepo [master] $git checkout -b dev b834dc2
Switched to a new branch 'dev'
Divya1@Divya:initialRepo [dev]
```


### Explain a good branching structural strategy that you have used for your project code development.

A good branching strategy is the one that adapts to your project and business needs. Every organization has a set of its own defined SDLC processes.  
An example branching structural strategy that I have used in my project:  
![good-branching-structural-strategy](https://d2o2utebsixu4k.cloudfront.net/media/images/1552023943133-Explain-a-good-branching-structural-strategy-that-you-have-used-for-your-project-code-development.jpg)

*   **Diagram:** Branching strategy
*   Clone the project available at github:
*   git clone http://github.com/divyabhushan/structuralStrategy.git structuralStrategy

 **Guidelines:** 

*   “master-prod”: Accepts merges/code/commits only from the “prod” branch
*   “prod”: Perform only a merge --squash from “release” branch.
*   Merge only when approved by “QA”
*   Tag every merge in the format: v1.0, v1.1 … v1.*
*   “release”: merge from the branches “dev”, “uat”, “QA”.
*   Every release commit/project code version has to be approved by “QA”.
*   Tag every merge in the format: r1.0, r1.1 … r1.*
*   “dev” and “uat” never merge with each other.
*   “hotfix” branch commits are shared among any feature branches such as “dev” and “uat”
*   “feature” branch is private to “dev” alone and is dropped after merging.
*   CI/CD DevOps tools can be used to automate the above development and deployment to master_prod.
*   Every project release: r1.0 .. r1.x on the ‘release’ branch can be tracked by Jenkins CI tool and will trigger a build, on a successful build continuous testing suite 
*   cases will be triggered on the code. If the test passes the release will be delivered to ‘prod’ branch.
*   Every source code delivered to ‘prod’ branch will be automatically deployed to ‘master_prod’ branch.

All the steps will be mentioned in a Jenkins file on a branch ‘name’ condition.



### What is the key difference between a `git rebase` and `git merge`

*   `git merge` takes the unique commits from the two branches, merge them together and create another commit with the merged changes; whereas in a `git rebase` the work on the current branch is replayed and placed at the tip of the other branch resulting in re-writing the commit objects.
*   `git rebase` is applied from the branch to be rebased, whereas `git merge` is applied on the branch that needs to merge the feature branch.
*   `git merge` preserves the history and makes it easier to track the ownership or when a code was broken in the project history; unlike `git rebase` which changes the commit history by changing the commit objects (SHA-1) ids.
*   `git rebase` is often used locally for feature and quickfix and bug fix branches; however `git merge` are used for long running stable branches.



### How do you list the commits missing in your branch that are present in the remote tracking branch?

```bash
git log --oneline <localBranch>..<origin/remoteBranch>
```

Your local git branch should be set up to track a remote branch.

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552024852388-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [dev] $git branch -vv
* dev    b834dc2 [origin/dev] Add Jenkinsfile
 master b834dc2 [origin/master] Add Jenkinsfile
```

Reset "dev" commit history to 3 commits behind using the command:

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552024865386-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [dev] $git reset --soft HEAD~3
Divya1@Divya:initialRepo [dev] $git branch -vv
* dev    30760c5 [origin/dev: behind 3] add source code auto build at every code checkin using docker images
```

Compare and list the missing logs in local ‘dev’ branch that are present in ‘origin/dev’  
![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552024970909-CODE-SNIPPET.png.jpg)

```bash
Divya1@Divya:initialRepo [dev] $git log --oneline dev..origin/dev
b834dc2 (origin/master, origin/dev, master) Add Jenkinsfile
c5e476c Rename 'prod' to 'uat'-break the build in Jenkings
6770b16 Add database logs.
```

Use ‘git pull’ to sync local ‘dev’ branch with the remote ‘origin/dev’ branch.



### Define client level git hooks and their implementation.

Git hooks are the instruction scripts that gets triggered before(pre) or post(after) certain actions or events such as a git command run.

*   Git hooks can be implemented on both client(local machine) and server(remote) repositories.
*   Hooks objects are stored under .git/hooks directory. Hooks scripts are written in shell script and made executable.
*   --Code snippet of a `pre-commit` script that stops the commit if a file has been deleted from the project:

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025076134-CODE-SNIPPET.png.jpg)

```bash
#!/bin/sh
#Library includes:
. .git/hooks/hooks_library.lib
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#Aim:Check for any Deleted file in the staging area, if any it stops you from commiting this snapshot.
set_variables 1 $0
if [ "$(git status --short | grep '^D')" ];then
        echo "WARNING!!! Aborting the commit. Found Deleted files in the Staging area.\n" | tee -a $LOGFILE
        echo "git status --short | grep '^D' | awk -F" " '{print $2}'\n" | tee -a $LOGFILE
        exit 1;
else
        echo "[OK]: No deleted files, proceed to commit." | tee -a $LOGFILE
        exit 0;
fi
```

Scenario how I implemented the hooks scripts to enforce certain pre-commit and post-commit test cases:

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025134167-CODE-SNIPPET.png.jpg)

**Step 1:** Running .git/hooks/pre-commit script.

```bash
[OK]: No deleted files, proceed to commit.
Thu Feb  7 12:10:02 CET 2019
--------------------------------------------
```

**Step 2:** Running .git/hooks/prepare-commit-msg script.

```bash
Get hooks scripts while cloning the repo. 
ISSUE#7092
Enter your commit message here.
README
code/install_hooks.sh
code/runTests.sh
database.log
hooksScripts/commit-msg
hooksScripts/hooks_library.lib
hooksScripts/post-commit
hooksScripts/pre-commit
hooksScripts/pre-rebase
hooksScripts/prepare-commit-msg
newFile
Thu Feb  7 12:10:02 CET 2019
--------------------------------------------
```

**Step 3:** Running .git/hooks/commit-msg script.
```bash
[OK]: Commit message has an ISSUE number
Thu Feb  7 12:10:02 CET 2019
--------------------------------------------
```

**Step 4:** Running .git/hooks/post-commit script.

New commit made:

1c705d3 Get hooks scripts while cloning the repo.
ISSUE#7092

*   A ‘pre-rebase’ script to stop the rebase on a ‘master’ branch:
*   Rebase ‘topic’ branch on ‘master’ branch

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025233213-CODE-SNIPPET.png.jpg)

```bash
hooksProj [dev] $git rebase master topic
WARNING!!! upstream branch is master.
You are not allowed to rebase on master
The pre-rebase hook refused to rebase.
```

A code snippet demonstrating the use of a ‘_pre-receive_’ hook that is triggered just before a ‘push’ request on the Server, can be written to reject or allow the push operation.

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552025287512-CODE-SNIPPET.png.jpg)

```bash
localRepo [dev] $git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (2/2), 272 bytes | 272.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0)
remote: pre-recieve hook script
remote: hooks/pre-receive: [NOK]- Abort the push command
remote:
To /Users/Divya1/OneDrive/gitRepos/remoteRepo/
! [remote rejected] dev -> dev (pre-receive hook declined)
error: failed to push some refs to '/Users/Divya1/OneDrive/gitRepos/remoteRepo/'
```



### How do you create a new image in a container without using a dockerfile?

Install a new package in a container
```bash
docker run -it ubuntu
root@851edd8fd83a:/# which yum
--returns nothing
root@851edd8fd83a:/# apt-get update
root@851edd8fd83a:/# apt-get install -y yum
root@851edd8fd83a:/# which yum
/usr/bin/yum
```

--Get the latest container id
```bash
CONTAINER ID        IMAGE  COMMAND   CREATED STATUS                        PORTS NAMES
851edd8fd83a        ubuntu  "/bin/bash"   6 minutes ago Exited (127) 3 minutes ago          
```

--base image changed
```bash
docker diff 851edd8fd83a
```

Commit the changes in the container to create a new image.

```bash
Divya1@Divya:~ $docker commit 851edd8fd83a mydocker/ubuntu_yum
sha256:630004da00cf8f0b8b074942caa0437034b0b6764d537a3a20dd87c5d7b25179
```

--List if the new image is listed
```bash
Divya1@Divya:~ $docker images
REPOSITORY            TAG IMAGE ID            CREATED SIZE
mydocker/ubuntu_yum   latest 630004da00cf        20 seconds ago 256MB
```



### Create a docker file and build a new image. Run the image and create a container.

*   mkdir dockerFiles
*   vi dockerfile

```bash
FROM divyabhushan/myrepo:latest
COPY hello.sh /home/hello.sh
CMD ["bash", "/home/hello.sh"]
CMD ["echo", "Dockerfile demo"]
RUN echo "dockerfile demo" >> logfile
```

**--**Build an image from the dockerfile, tag the image name as ‘mydocker’

```bash
docker build -t mydocker dockerFiles/
docker build --tag <containerName> <dockerfile location>
Divya1@Divya:~ $docker images
REPOSITORY            TAG IMAGE ID            CREATED SIZE
mydocker              latest aacc2e8eb26a        20 seconds ago 88.1MB
Divya1@Divya:~ $docker run mydocker
/home/divya
Hello Divya
Bye Divya
```

*   View the images:
*   docker image
*   docker image --all
*   docker run -it ubuntu (imageName)
*   -i = interactive
*   -t = Allocate a sudo-tty (i.e, provide a terminal for the remote container image)



### Develop your own custom test environment and publish it on the docker hub.

Write instructions in a dockerfile.

*   build the dockerfile and create an image in the registry

`docker build -t learn_docker dockerFiles/`

*   Create a container by running this image

`docker run -it learn_docker`

*   Push the container to the docker hub.

--Tag the local image as:

`<hub-user>/<repo-name>:[:<tag>]`

Examples:

```bash
docker tag learn_docker divyabhushan/learn_docker:dev
docker tag learn_docker divyabhushan/learn_docker:testing
```

--list the images for this container:

```bash
Divya1@Divya:~ $docker images
REPOSITORY                  TAG IMAGE ID            CREATED SIZE
divyabhushan/learn_docker   develop 944b0a5d82a9        About a minute ago 88.1MB
learn_docker                dev1.1 944b0a5d82a9        About a minute ago 88.1MB
divyabhushan/learn_docker   dev d3e93b033af2        16 minutes ago 88.1MB
divyabhushan/learn_docker   testing d3e93b033af2        16 minutes ago 88.1MB
Push the docker images to docker hub
docker push divyabhushan/learn_docker:dev
docker push divyabhushan/learn_docker:develop
docker push divyabhushan/learn_docker:testing
The push refers to repository [docker.io/divyabhushan/ learn_docker]
53ea43c3bcf4: Pushed
4b7d93055d87: Pushed
663e8522d78b: Pushed
283fb404ea94: Pushed
bebe7ce6215a: Pushed
latest: digest: sha256:ba05e9e13111b0f85858f9a3f2d3dc0d6b743db78880270524e799142664ffc6 size: 1362
```

![custom test environment](https://d2o2utebsixu4k.cloudfront.net/media/images/1552026446470-DevOps--set2--7.jpg)

*   Image: Screenshot from the Docker hub.
*   Docker hub repository: learn_docker has different variations of images. Image names are tagged.
*   We can pull the tags from this repository as per the need.

**Summarize:**

Develop your application code and all other dependencies like the binaries, library files, downloadables required to run the application in the test environment. Bundle it all in a directory.

*   Edit the dockerfile to Run the downloadables and replicate the desired production environment as test env.
*   Copy the entire application bundle to the test env in the docker container.
*   Build the dockerfile and create new docker image and tag it.
*   Push this docker image to the docker hub, which is now downloaded by other users to test.

**NOTE:** This docker image has your application bundle = application code + dependencies + test run time environment exactly similar to your machine. Your application bundle is highly portable with no hassles.



### How do you prune data in a Docker?

Docker provides a system prune command to remove stopped containers and dangling images.Dangling images are the ones which are not attached to any container.

Run the `prune command as below:

`docker system prune`

WARNING! This will remove:

*   all stopped containers
*   all networks not used by at least one container
*   all dangling images
*   all dangling build cache

Are you sure you want to continue? [y/N]

There is also a better and controlled way of removing containers and images using the command:

**Step 1:** Stop the containers

`docker stop <container_id>`

**Step 2:** Remove the stopped container

`docker rm container_id`

```bash
docker rm 6174664de09d
```

**Step 3:** Remove the images, first stop the container using those images and then

`docker rmi <image_name>:[<tag>]`

--give image name and tag

`docker rmi ubuntu:1.0`

--give the image id

`docker rmi 4431b2a715f3`



### Explain Docker Orchestration

As the number of docker machines increases, there needs to be a system to manage them all. **_Docker Orchestration_** is a virtual docker manager and allows us to start, stop, pause, unpause or kill the docker nodes(machines).

Docker has an in-built utility called “_docker swarm”._

_Kubernetes_ is another popular and versatile docker orchestration system used. A cluster of dockers is called a ‘_swarm_’. Swarm turns a collection of docker engines into a single virtual docker engine.

In a _swarm orchestration_ arrangement, one machine acts as a _swarm manager_ that controls all the other machines connected to the cluster that acts as _swarm nodes_.

This is how I created a swarm of dockers and managed them on my machine:

We need docker services and docker machines to run these services on.Finally, we need a docker swarm to manage the docker nodes/machines

*   Commands we need:
*   docker service
*   docker-machine
*   docker swarm
*   Task
*   Create docker machines(nodes) and services.

Create a docker swarm and manage the services on different nodes and port numbers.

*   Step 1: Create docker machines as ‘manager’ and ‘worker’: manager, node1, node2, node3, node4
*   Step 2: Create a docker swarm
*   Step 3: Add the nodes as workers(or another manager) to the swarm
*   Step 4: From the manager create docker services
*   Step 5: list the docker services created also use -ps flag to view the node machines these services are running on.
*   Step 6: Open the `<ip_address>:<port_number>` in the browser and confirm the services running.

**Step 1: Create docker machines: manager, node1, node2, node3, node4**

docker-machine create --driver virtualbox manager

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027311324-DevOps--set2--8.jpg)

```bash
docker-machine create --driver virtualbox node1
docker-machine create --driver virtualbox node2
docker-machine create --driver virtualbox node3
docker-machine create --driver virtualbox node4
```

--Every node is started as a virtualbox machine.
--set docker machine ‘manager’ as active
`eval $(docker-machine env manager)`
--List the docker machines

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027332651-DevOps--set2--9.jpg)

**Step 2: Create a docker swarm**

--Initialize a swarm and add ‘manager’ to the swarm cluster using its ip address: 192.168.99.100

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027351927-DevOps--set2--10.jpg)

**Step 3: Add the nodes as workers(or another manager) to the swarm**

--Connect to each node and run the above swarm join command

There can be more than one ‘manager’ node in a swarm

--connect to node1 and join node1 to the swarm as a worker

`docker-machine ssh node1`

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027365983-DevOps--set2--11.jpg)

--List the nodes connected in the swarm

connect to manager node:

`$docker-machine ssh manager`

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027381641-DevOps--set2--12.jpg)

**Step 4: From the ‘manager’ node create new docker services**

`docker-machine ssh manager`

--Create service replicating them on more than 1 nodes and expose them on the mentioned port.

This command pulls the docker image from [docker hub](https://hub.docker.com/).

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027398684-DevOps--set2--13.jpg)

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027414867-DevOps--set2--14.jpg)

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027431500-DevOps--set2--15.jpg)

**Step 5: list the docker services created also use -ps flag to view the node machines these services are running on.**

--List the services that will be shared among different swarm nodes

 ![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027447294-DevOps--set2--16.jpg)

Swarm randomly assigns nodes to the running services when we replicate the services.

--service ‘httpd’ running on 3 nodes: node1, node2 and node3

 ![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027465675-DevOps--set2--17.jpg)

--service ‘couchbase’ is running on 2 nodes: node1 and manager at port: 8091

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027477756-DevOps--set2--18.jpg)

![driver virtualbox manager](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027531359-DevOps--set2--19.jpg)

--’couchbase’ service can be accessed via ‘node1’ (ip: 192.168.99.101) and ‘manager’ (ip: 192.168.99.100) at port : 8091 as show below

*   http://192.168.99.101:8091/
*   http://192.168.99.100:8091
*   --’httpd’ service
*   http://192.168.99.101:80
*   http://192.168.99.102:80
*   http://192.168.99.103:80
*   --’my_nginx’ service
*   http://192.168.99.100:8080
*   http://192.168.99.104:8080

Screenshots of the running services:

![](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027560378-DevOps--set2--20.jpg)

![Couchbase Server](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027583967-DevOps--set2--21.jpg)

![running services](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027614510-DevOps--set2--22.jpg)

‘manager’ node can create/inspect/list/scale or remove a service.

Refer

`docker service --help`

**Conclusion:**

A number of services are balanced over different nodes(machines) in a swarm cluster.A node declared as a ‘manager’ controls the other nodes.Basic ‘docker commands’ works from within a ‘manager’ node.



### When joining a new node to the swarm the following error occurs: “Error response from daemon: Timeout was reached before node joined.” How will you fix this?

The above failure happens when the ‘manager’ docker machine is not active; as a result, the new node machine will not be able to join the swarm cluster.

To fix this:

*   **Step 1:** Check for the active machine hosts as:

![Active machine](https://d2o2utebsixu4k.cloudfront.net/media/images/1552027988955-DevOps--set2--23.jpg)

*   **Step 2:** Activate the ‘manager’ machine as:

![manage](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028007858-DevOps--set2--24.jpg)

*   **Step 3:** Get the swarm join token as worker

![swarm join](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028022728-DevOps--set2--25.jpg)

*   **Step 4:** Connect to the worker machine say: worker2 [ To create docker node machines as worker: join node as a worker ]

`Divya1@Divya:~ $docker-machine ssh worker2`

*   **Step 5:** Run the swarm join token command; it will be successful

![swarm join token command](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028037789-DevOps--set2--26.jpg)



### What are resources? How do you handle system resources in Puppet?

System resources are the key elements of a Puppet code that defines the architecture and manages the configuration of a system infrastructure.

*   Puppet has its own DML (Declarative Modelling Language) to write code.
*   The main unit of code is called a _resource_.
*   Puppet uses various types of resources to define the different definitions and parameters of a system.

Here is how a resource is written:

```json
resource_type { ‘resource_name’:
attribute => value,
attribute => value,
…
}
```

*   **Each resource has 3 items:** Resource_type, resource_name and the attributes.

Example:

```json
user { ‘Jack’:
ensure => present,
owner => ‘root',
group => ‘home’,
mode => 0644,
shell => ‘/bin/bash’
}
```

This code evaluates as:  
Resource type ‘user’ with the resource parameter ‘Jack’ have the attributes: ‘ensure’, ‘owner’, ‘group’, ‘mode’ and ‘shell’.

These attributes have the respective values.

We can get a list of all the available resource types with the command:

*   _puppet describe --list_

Some of the common resource types are:

*   user
*   package
*   exec
*   file
*   service

**Example of resource_type:** ‘service’. This resource ensures that the service: ‘network’ is running service 

```json
{‘network’ :
ensure => running
}
This resource checks the ‘package’: ‘apache’ is running and its pre-requisite requires ‘apt-update’ command to be executed.
package { ‘apache’ :
require => Exec[‘apt-update’],
ensure => running
}
```



### Write a sample module to install LAMP on an existing Ubuntu Server Docker image.

*   Step 1: Run the Docker container with puppet server installed.
*   Step 2: Write a basic manifest file:

`vi /etc/puppet/manifests/lamp.pp`

*   Step 3: Add the resources to install Apache, MySQL and PHP server

```javascript
exec { ‘apt-update’ :
 command => '/usr/bin/apt-get update'  
}
# install apache2 package
package { 'apache2':
 require => exec['apt-update'],        
 ensure => installed,
}
# ensure apache2 service is running
service { 'apache2':
 ensure => running,
}
# install mysql-server package
package { 'mysql-server':
 require => exec['apt-update'],        
 ensure => installed,
}
# ensure mysql service is running
service { 'mysql':
 ensure => running,
}
# install php5 package
package { 'php5':
 require => exec['apt-update'],        
 ensure => installed,
}
# ensure info.php file exists
file { '/var/www/html/info.php':
 ensure => file,
 content => '<?php  phpinfo(); ?>', # phpinfo code
 require => package['apache2'],        
}
```

Save and exit.

*   Step 4: Apply manifest

`puppet apply --test`



### How is Jenkins workspace data shared between different jobs?

Jenkins stores the metadata of every project under $WORKSPACE path.

**Two projects**: 

*   myProject and project_next can be chained to each other and they can share the same data.
*   On successful build of ‘myProject’, build of ‘project_next’ is triggered.

![Execute shell](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028610162-DevOps--set2--27.jpg)

Below code screenshot is for project_next

This access the myProject/logs/db.log file and read it for a pattern :’prod’

![Execute shell](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028641597-DevOps--set2--28.jpg)



### How can Jenkins facilitate Deployment in a DevOps practice?

Jenkins auto-builds the source code from Git(any VCS) at every check-in; tests the source code and deploy the code in a tomcat environment via docker.

Webapp source code is then deployed by tomcat server on a production environment.

**Pre-requisite:**

*   Jenkins plugin: “Deploy to container” and “git plugin”
*   Edit the ‘post-build’ actions to include the tomcat details.
*   Under the SCM section add your git project repository url.

Git project structure:

```bash
Divya1@Divya:myWeb [master] $
Dockerfile
   webapp/
       WEB-INF/
         classes/
         lib/
         web.xml
    index.jsp
```

--Dockerfile content:
```bash
vi Dockerfile
FROM tomcat:9.0.1-jre8-alpine
ADD ./webapp /usr/local/tomcat/webapps/webapp
CMD ["catalina.sh","run"]
```

Add a new project in Jenkins and track your git project url under SCM section.Have a dockerfile with the instruction to connect to the tomcat docker and deploy the webapp folder.

--Add the build section to ‘execute shell’ as below:

```bash
#!/bin/sh
echo "Build started..."
docker build -t webapp .
echo "Deploying webapp to tomcat"
docker run -p 8888:8080 webapp
echo http://localhost:8888/webapp
```

--Build the project from Jenkins:

Below is the screenshot of the output:

![Console Output](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028781473-DevOps--set2--29.jpg)

--Click on the link: http://localhost:8888/webapp

![CI/CD Project](https://d2o2utebsixu4k.cloudfront.net/media/images/1552028880575-DevOps--set2--Divya-Bhushan.jpg)



### How does Jenkins handle a failed test case?

*   Pipelines artifacts
*   Jenkins has built-in artifacts to record and capture the failures for analysis and investigation.
*   This needs to be mentioned in the jenkinsfile pipeline:

Sample code:

```javascript
Pipeline {
agent any
stages {
stage(‘Build’) {
steps {
sh ‘./test_suite1 build’
}
}
Stage(‘Test’) {
Steps {
sh ‘./test_suite1 test’
}
}
}
post {
always {
archiveArtifacts ‘build/libs/**/*.jar’
}
}
}
```

This gives the artifacts path and the filename



### How to backup and restore Jenkins data and configurations

Backup of Jenkins is needed in case of disaster recovery, retrieving old configuration and for auditing.

$JENKINS_HOME folder keeps all the Jenkins metadata.

**That includes:** build logs, job configs, plugins, plugin configurations etc.

Install the ‘think backup’ plugin in Jenkins and enable the backup from settings tab.We have to specify the backup directory and what we want to backup.

**Backup directory:** `$JENKINS_HOME/backup`

Backup files generated with the timestamp in the filenames will be stored under the path we specified.

```bash
divya@jenkins backup]$ pwd
/var/lib/Jenkins/backup
uat@jenkins backup]$ls

FULL-2019-02-4_07-14 FULL-2019-02-11_13-07
```

It is a good practice to version control (using Git) this back-up and move it to cloud.

**Restoring:**

Backup files are in the tar+zip format.

Copy these over to another server; unzip and un-tar it on the server.

```bash
cd $JENKINS_HOME
tar xvfz /backups/Jenkins/backup-project_1.01.tar.gz
config.xml
jobs/myjob/config.xml
…
```

