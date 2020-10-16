---
title: Docker Vs Virtual Machines(VMs)
author: Divya Bhushan
authorURL: https://github.com/divyabhushan
authorImageURL: https://avatars0.githubusercontent.com/u/11659160?
---

**Virtualization** comes in handy with the need of running *multiple simulated* environments in a single machine without installing and configuring each instance. Virtualization has its used cases in many scenarios such as testing your app in multiple environments/devices.

Both Dockers and Virtual Machines(VMs) are capable of providing virtualized runtime environments for your software/hardware needs.

This article is aimed at providing a basic understanding of the common and unique features each Docker and a VM possess.

<!--truncate-->

When you deal with multiple platforms with customized hardware/software specifications, you need to have an effective resource management in place. 

## What a machine needs?

Each computing environment(machine) needs its component of _hardware resources_ and _software resources._

As more and more machines are needed, building up and administering many such stand-alone machines is not only cumbersome, time-consuming but also adds up to the cost and energy.

Apparently; to run a customized _High-power_ _Scalable_ _Server_ is a better idea to consolidate all the hardware and software requirements into one place and have a single server run and distribute the resources to many machines over a network.

That saves us time, resources, energy and revenue.

These gigantic servers are stored in a data warehouse called a _Datacenter__._

Below Diagram (2) indicates a single _server_ serving and sharing resources and data among multiple client machines

Does this look simplified enough? Yes of course!

So, this setup looks feasible we have a high-power, high-storage Server that gives resources to many smaller(resources) machines over a network.

**How to manage huge data - Servers**
-------------------------------------

With _Internet Of Things_ in boom, Information is over-flowing with a huge amount of data; handling tremendous data needs more system resources which means more _Dedicated server_s are needed.

### **Many Servers approach challenge:**

Running several _Dedicated servers_ for specific services such as Web service, application or database service as indicated in Diagram (3) is difficult to administer and consumes more energy, resources, manpower and is highly expensive.

In addition; resource utilization of servers is very poor resulting in resource wastage.

This is where simulating different environments and running them all on a single server is a smart choice; rather than having to run multiple physically distinct servers.

This is how Diagram (3) would change after consolidating different servers into one as shown in Diagram (4).

Sheet 2

**Virtualization**
------------------

### What is Virtualization

The above single server implementation can be defined as the following term.

_Virtualization_ is a technique used to simulate and _pretend a single infrastructure_ resource (_hardware resources_ and _software resources_) _to be acting as many_ providing multiple functionalities or services without the need to physically build, install and configure.

In other words;

Running _multiple simulated environments in a single machine without installing and configuring them_ is called _Virtualization_.

Technically speaking;

Virtualization is an abstract layer that shares the infrastructure resources among various simulated _virtual machines_ without the need to physically set up these environments.

Diagram (5) displays different virtual Operating systems are running on the same machine and using the same hardware architecture of the underlying machine.

### _What is a Virtual machine_

The simulated virtualized environments are called virtual machines or VM.

Virtual machine is a _replication/simulation_ of an actual physical machine.

A VM acts like a real physical machine and uses the physical resources of the underlying host OS.

A VM is a running _instance of a real physical machine._

### _Need_ _for_ _virtualization_

So; we have an overview of virtualization, let us examine when should we virtualize and what are the benefits of virtualization?

1.  **Better resource management and** **cost-effective**: as indicated in Diagram (6) and Diagram (7); hardware resources are distributed wisely on need basis to different environments; all the virtual machines share the same resources and reduce resource wastage.
2.  **Ease of quick administration and maintenance**: It is easier to build, install, configure one server rather than multiple servers. Updating a patch on various machines from a single virtualized server is much more feasible.
3.  **Disaster recovery**: Since all the virtualized machines reside on the same server and are treated as mounted volumes of data files, it is easier to back up these machines. In case of a disaster failure (power failure, network down, cyber-attacks, failed test code, etc) VM screenshots are used to recover the running state of the machine and the whole setup can be built up within minutes.
4.  **Isolated and independent secure test environment**: virtualization provide an isolated independent virtual test environment to test the legacy code or a vendor-specific product or even a beta release or say a corrupt code without affecting the main hardware and software platform. (This is a contradictory statement though; will discuss more under types of virtualization)  
    These test environments like dev, uat, preprod, prod etc..can be easily tested and discarded.
5.  **Easily scalable and upgradable**: Building up more simulated environments means spinning up more virtual machines. Also upgrading VMs is as good as to run a patch in all VMs.
6.  **Portable**: Virtual machines are lightweight compared to the actual running physical machines; in addition, a VM that includes its own OS, drivers, and other installation files is portable on any machine. One can access the data virtually from any location.

The screenshot of activity monitor below compares the CPU load:

_Implementation_ 
-----------------

### _a) What is hypervisor and its types__?_

As discussed in the previous section; virtualization is achieved by means of a virtualized layer on top of hardware or a software resource.

This abstract layer is called a _hypervisor._

A hypervisor is a virtual machine monitor (VMM)

There are 2 types of hypervisors: Diagram (8)

1.  Type-1 or bare-metal hypervisor
2.  Type-2 or hosted hypervisor

_Type-1 or bare-metal_ hypervisor is installed directly on the system hardware, thus abstracting and sharing the hardware components with the VMs.

_Type-2 or hosted hypervisor_ is installed on top of the system bootable OS called host OS; this hypervisor abstracts the system resources visible to the host OS and distributes it among the VMs.

Both have their own role to play in virtualization.

### _b) Comparing hypervisor types_

Type-1 or bare-metal hypervisor

Type-2 or hosted hypervisor

Installed _directly on the infrastructure_\-OS independent and more secure against software issues.

Installed _on top of the host OS_\-more prone to software failures.

_Better resource flexibility_: Have direct access to the hardware infrastructure (Hard-drive partition, RAM, embedded cards such as NIC). Provide more flexibility and scalability to the VMs and assign resources on a need basis.

_Limited resource allocation_: Have access to just the resources exposed by the host OS.

VMs installed will have limited access to hardware resources allocated and exposed by the host OS.

Single point of failure: A compromised VM may affect the kernel. Extra security layers needed.

A compromised VM may affect only the host OS, kernel still remains unreachable.

Low latency due to direct link to the infrastructure.

High latency as all the VMs have to pass through the OS layer to access the system resources.

Generally used in Servers

Generally used on small client machines

Expensive

Less expensive

Type-1 Hypervisors in market:

VMWare ESX/ESXi

Hyperkit (OSX)

Microsoft Hyper-V (Windows)  
KVM(Linux)

Oracle VM Server

Type-2 Hypervisors in market:

Oracle VM VirtualBox

VMWare Workstation

Parallels desktop for MAC

_Types of virtualization_
-------------------------

Based on what resource is virtualized, there are different classifications of virtualization.

Server, Storage device, operating system, network

**Desktop** **virtualization**: Entire desktop environment is simulated and distributed to run on a single server all at once. A desktop virtualization allows administrators to manage, install, configure similar setups on many machines. Upgrading all the machines with a single patch update or security checks becomes easier and faster.

**Server** **virtualization**: Many dedicated servers can be virtualized into a single server that provides multi-server functionality.

**Example:**

Many virtual machines can be built up sharing the same underlying system resources.

Storage, RAM, disks, CPU

**Operating system** **virtualization**: This happens at the kernel level Hypervisor on hardware type 2 bare-metal One machine: Can boot up as multiple OS like Windows or Linux side-by-side

**Application virtualization**: Apps are packaged and stored in a virtual environment and are distributed across different VMs. Example Microsoft applications like excel, MS word, Powerpoint etc, Citrix applications.

**Network functions virtualization**: Physical network components such as NIC cards, switches, routers, servers, hubs, and cables are all assembled in a single server and used virtually by multiple machines without having the load of installing them on every machine.

Virtualization is one of the building blocks and driving force behind [_cloud computing_](https://www.ibm.com/cloud/learn/cloud-computing).

Cloud computing provide virtualized need-based services. This has given an uplift to the concept of virtualization.

A quick mention of various cloud computing models/services are listed below:

**SaaS** – Software as a Service– end-user applications are maintained and run by service providers and easily distributed and used by the end users without having to install them.

Top SaaS providers: Microsoft (Office suite, CRM, SQL server databases), AWS, Adobe, Oracle (ERP, CRM, SCM), Cisco’s [Webex](https://www.webex.com/de/index.html), [GitHub](https://github.com/) ( git hosting web service)

**PaaS** – Platform as a Service – computing infrastructure(hardware/software) is maintained and updated by the service provider and the user just have to run the product over this platform.

Top Paas providers: [AWS beanstalk](https://aws.amazon.com/elasticbeanstalk/), [Oracle Cloud Platform (OCP)](https://www.oracle.com/index.html), [Google App Engine](https://cloud.google.com/appengine/)

**IaaS** – Infrastructure as a Service – Provide infrastructure such as servers, physical storage, networking, memory devices etc. Users can build their own platform with customized operating system and applications.

Key IaaS providers: Amazon Web Services, [Microsoft Azure](https://azure.microsoft.com/en-us/), Google compute engine, Citrix

**Conclusion:**

We now have a fair understanding of types of virtualization and how they are implemented.

**Containerization**
--------------------

Though virtualization has its pros; there are certain downsides of virtualization such as:

*   Not all systems can be virtualized always.
*   A corrupt VM is sometimes contagious and may affect other VMs or the kernel in-case of a _Type-1 or bare-metal_ hypervisor.
*   Latency of virtual disks due to increased payload on the CPU resources with a higher number of VMs
*   Unstable performance

An alternative approach to overcome the above flaws of virtualization is to _Containerize_ the applications and the run-time environment together.

_What is containerization_ 
---------------------------

_Containerization_ is an OS-level virtualization; wherein the entire build of an application along with run-time environment is encapsulated or bundled up in a package.

These packages are called _containers_.

Containers are lightweight virtualized environments. These are independent of the infrastructure both hardware and software.

The run-time environment includes the operating system, binaries, libraries, configuration files and other applications as shown in Diagram (9).

_What is a Docker_
-----------------

_Dockers_ provide an excellent framework for containerization and allow to build, ship, and run distributed applications over multiple platforms.

Docker framework is setup as a _docker engine_ installed on host OS and a [docker](https://www.knowledgehut.com/devops/docker-training) _daemon_ (background process) process is started that manage the virtual _containers_.

Refer Diagram (10) that shows a Docker engine with 3 containers residing on host OS (MAC OS).

An instruction file called _dockerfile_ is written with a set of system commands that change the filesystem such as add, copy or delete commands, run commands, install utilities, system calls etc…

This _dockerfile_ is built and packaged along with its run-time environment as an executable file called a _docker image._

Docker daemon services run these images to create _docker containers._

> _Docker container is a run-time instance of an image_

It is wise to say that many images (or layers of instruction files) make up a container.

Docker containers have a compact packaging and each container is well isolated.

We can run, start, stop, attach, move or delete containers as these runs as services on the host OS.

Each image is made up of different layers; each image based on top of the other with the customized command changes that we make.

Every time we make a change in the filesystem, each change related to the image is encapsulated in a new layer of filesystem and stacked up above the parent image.

Only the changed layers are rebuilt, rest of the unchanged image layers are reused.

Certain docker commands ADD, RUN and COPY c_reate a new layer with increased byte size; rest of the commands simply adds up a new layer with zero-byte size._

_These layers are re-used to build a new image, hence faster and lightweight._

Docker images are also

The layer approach of an image every time there is a change in the image makes it possible to Version control the docker images.

Here is a terminal recording that shows docker engine process and how images and containers are created.

Docker documentation - to [create containers](https://docs.docker.com/get-started/part2/).

### **Ppt diagram:**

Code -> package -> build images -> registry hub -> download/pull image -> run container

Animation: sheet4

Let’s consider the docker container: divyabhushan/learn\_docker hosted on docker hub.

Latest tagged image: centOS\_release1.2

### What is the container environment?  

Base OS: Centos:7

Utilities: vim, yum, git

Apps/files: Dockerfile, myApp.sh, runtests.sh, data and other supporting files.

Git source code: [dockerImages](https://github.com/divyabhushan/DockerImages_Ubuntu.git)

Download as: git clone [https://github.com/divyabhushan/DockerImages\_Ubuntu.git](https://github.com/divyabhushan/DockerImages_Ubuntu.git)

What does the container do?  
Container launches “myApp.sh” in Ubuntu:14.04 environment and run some scripts along with a set of post test\_suites in the container (Ubuntu:14.04) and saves the output log file.

_How to modify and build your own app_
--------------------------------------

### **Step 1: pull** 

**1.1: Pull the docker image**

  

  

**1.2: Run image to create a container and exit**

  

### **Step 2: modify**

2.1: Start the container

2.2: Attach to the container and make some changes

### **Step 3: commit**

3.1: Examine the history logs and changes in the container

3.2: Commit the changes in container

### **Step 4: push**

4.1: Push new image to docker hub

Let us see the steps in action:

### **Step 1: pull** 

docker image on your machine

1.1: Pull the docker image

**Command:**

docker pull divyabhushan/learn\_docker:myApp\_ubuntu\_14.04

View the image on system

docker images

screenshot

**Command:**

docker run -it --name ubuntu14.04 0a6f949131a6

Run command in ubuntu container and exit, the container is stopped on exiting out.

View the stopped container with the ‘ps -a’ command.

### **Step 2: modify**

Start the container

**Command:**

docker start <container\_id>

Now the container is listed as a running process Attach to the container and make some changes

**Command:**

docker attach 7d0d0225778c

edit the ‘git configuration’ file and ‘myApp.sh’ script

Container is modified and stopped

### **Step 3: commit**

Examine the history logs and changes in the container

The changes done inside the container filesystem can be viewed using the ‘docker diff’ command as:

**Command:** 

```bash
docker diff 7d0d0225778c
```

Commit the changes in container

Docker commit:

Usage: docker commit \[OPTIONS\] CONTAINER \[REPOSITORY\[:TAG\]\]

docker commit -m 'new Ubuntu image' 7d0d0225778c divyabhushan/learn\_docker:ubuntu14.04\_v2

New image is created and listed

### **Step 4: push**

Push new image to docker hub

**Command:**

docker push divyabhushan/learn\_docker:ubuntu14.04\_v2

Point to note: just the latest commit change layer ‘50a5ce553bba’ has been pushed, while the other layers were re-used.

Image available on docker hub:

The latest tagged image can now be pulled from other machines; and run to create the same container environment.

**Conclusion**: An image was pulled and run to create a container to replicate the environment. Container was modified, new changes were committed to form a new image. New Image pushed back on the docker hub and now available as a new tag ready to be pulled by other machines.

**Difference between Dockers and Virtual machines**
---------------------------------------------------

### _Tabular differences on various parameters_

| Parameters                                                 | VMs                                                                                                                                                                                                                                                                   | Dockers                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| architecture                                               | Hardware-level virtualization. Each VM has its own copy of OS.                                                                                                                                                                                                        | Software level virtualization. Dockers have no own OS, run on host OS                                                                                                                                                                                                                  |
| Isolation                                                  | Fully isolated                                                                                                                                                                                                                                                        | Process or application-level isolation.                                                                                                                                                                                                                                                |
| Installation                                               | Hypervisor can run directly on the hardware resources or on the host OS.                                                                                                                                                                                              | Docker engine is installed on top of the host OS. A docker daemon process is initiated on the host OS. There is no separate OS for every container.                                                                                                                                    |
| CPU processing + performance                               | Slower: A VM contains the entire run-time environment that has to be loaded every time. Uses more CPU cycles; gives unstable performance.                                                                                                                             | Faster: Docker images are pre-built and share host resources as a result running an image as a container is lightweight and consumes less CPU cycle; gives a stable performance                                                                                                        |
| Hardware storage                                           | More storage space as each VM is an independent machine (OS). Example: 3 VMs of 800MB each will take 2.4 GB of space.                                                                                                                                                 | Docker containers are lightweight since do not require to load OS+drivers, run on host OS as processes.                                                                                                                                                                                |
| Portable                                                   | Dependency on host OS and hardware makes VM less portable. Importing a VM still requires manual setup such storage, RAM and network.                                                                                                                                  | Highly portable since lightweight and zero dependency on hardware.                                                                                                                                                                                                                     |
| Scalable and code-reusability                              | Spinning up more VMs still need administrative tasks such as distributing resources to VM. Running a new machine puts extra load on the system resources also re-managing earlier VMs becomes a task. Every VM keeps its own copy of resources-poor code-reusability. | Spinning up new docker containers simply means running pre-built images into containers as a process inside host OS. Containers are also configured on-the-fly passing parameters and run-time. Single image can be run and used to create many containers; encourage code-reusability |
| Resource utilization                                       | Static allocation results in resource wastage in case of idle VMs or if a VM’s resource requirement increases.                                                                                                                                                        | Resources are dynamically allocated and de-allocated on the need basis by the docker engine.                                                                                                                                                                                           |
| Docker system prune or garbage collection                  | Virtual machines do not have an in-built prune mechanism, these have to be administered manually.                                                                                                                                                                     | Docker image and containers can be pruned; which frees up a sensible amount of storage and memory space and CPU cycles.                                                                                                                                                                |
| New environment                                            | Creating new VM from the scratch is a tedious, repetitive tasks. It involves installing a new OS, loading kernel drivers and other tools and configurations.                                                                                                          | Package the code and dependency files, build into an image, run the image to create a new container. Use an existing or a base image (dockerhub- scratch) to run and create more containers on the go.                                                                                 |
| Web-hosted Hub                                             | No web hosted hub for VMs                                                                                                                                                                                                                                             | dockerHub provides an open-source reliable trusted source of pre-built images that can be downloaded to run new containers.                                                                                                                                                            |
| Version control (backup, restore,track history)(refer git) | Snapshot of VMs are not very user-friendly and consume more space.                                                                                                                                                                                                    | Docker images are version controlled. Every delta difference in each docker container can easily be viewed (demo: docker diff ). Any change in the image is stored as a different layered version. A reference link to older images saves build time and space.                        |
| Auto-build                                                 | Automation of creating VMs is not very feasible.                                                                                                                                                                                                                      | Docker images can also be auto-built from every source code check-in to GitHub (Automated builds on Dockerhub)                                                                                                                                                                         |
| Disaster recovery                                          | Tedious to recover from VM backup files.                                                                                                                                                                                                                              | Easier to restore docker images (like files) just like git source files in case images are version controlled. Backup images only have to be run to create containers. (refer: screenshot).                                                                                            |
| Update                                                     | All the VMs have to updated with the release patch.                                                                                                                                                                                                                   | A single image is updated, re-built and distributed across multiple platforms.                                                                                                                                                                                                         |
| Memory usage+speed                                         | Slower: Entire snapshot of a machine and the OS is loaded into the cache memory.                                                                                                                                                                                      | Real-time and fast: pre-built images. Only the instance, i.e, a container has to be run as a process and uses memory like an executable                                                                                                                                                |
| Data integrity                                             | VM behavior may change if the dependency includes beyond the VM boundaries. (example: an app depends on production host network settings)                                                                                                                             | Same behavior of apps in any environment                                                                                                                                                                                                                                               |
| security                                                   | More secure: A failure inside a VM may reach its guest OS but not the host OS or other virtual machines. Type-2 hypervisor though has a risk of kernel attack.                                                                                                        | Less secure: If a docker container compromised; underlying OS and hence all the containers may be affected since they share the same host kernel. OS Kernel may also be risked.                                                                                                        |
| Key providers                                              | Red hat KVM, VMWare, Oracle VM VirtualBox, Mircrosoft Hyper-V, Citrix XenServer                                                                                                                                                                                       | Dockers, Google kubernetes Engine, AWS Elastic Container service                                                                                                                                                                                                                       |
| Data authentication                                        | Lot of software licenses.                                                                                                                                                                                                                                             | Docker maintains inbuilt content trust to verify published images.                                                                                                                                                                                                                     |

 _When to use VM or a Docker_
-----------------------------

When the need is an isolated OS, go for VMs.

For a hardware and software independent isolated application that needs fast distribution on multiple environments, use dockers.

*   ### Docker use-case:
    

Example: A database application along with its database

Consider the docker image - [Oracle WebLogic Server](https://hub.docker.com/_/oracle-weblogic-server-12c?tab=description) on [Docker Hub](https://hub.docker.com/).

This image is pre-built Oracle WebLogic Server runtime environment, including Oracle Linux 7 and Oracle JDK 8 for deploying Java EE applications.

To create Server configurations on any machine, just download this image and run to create and start a container.

There is no need to install and configure JDK, Linux or other run-time environment.

*   ### Do not use Docker use-case:
    

The application depends on utility outside the docker container.

Code developed on dev machine with base OS as MAC; needs certain firewall setting on say Ubuntu OS.

How can the code be tested on the production ubuntu OS firewall while running from MAC OS docker container?

Solution:  Install a virtualization software on host OS-MAC; Create a VM (Virtual machine) with host OS as Ubuntu (same as production environment).

Configure the desired firewall settings on host VM – Ubuntu; import the test code inside Ubuntu and test.

*   ### Use a VM:
    

For Embedded systems programming, a VM is installed that connects to the system device drivers, controllers and kernel.

*   ### Virtualization used along with docker:
    

An extension to the previous scenario would be if you would want to also test your python application in the host OS-Ubuntu VM without having to set up the python exe and its libraries and binaries.

All you have to do is: Install [Docker](https://www.knowledgehut.com/devops/docker-training) engine for Ubuntu OS and pull the python image from Docker hub as:

docker pull python:tag \[ tag is the python version-choose the appropriate version \]

docker pull python:2.7

Refer: [Python image](https://hub.docker.com/_/python/)

Either write a Dockerfile to import/copy entire source code to python environment or directly run the image passing the script path as below:

Command:

$docker run -it --name my-python-script -v “$PWD”:/usr/src/myapp -w /usr/src/myapp python:2.7 python my-application.py

Command options:

\-v = volume list-bind mount a volume \[mount present working directory onto /usr/src/myapp inside container\]

\-w = workdir string-working directory inside the container

Moreover; you can also test your python code in more than one version by downloading different python images, running them to create different containers and running your app in each container.

What’s exciting here is that once the code tested in each python environment; you could quickly work on the test results and drop the containers. And deploy the code to production only once code tested against various python versions.

#### _Final thoughts_  

VMs and dockers are compatible with each other. Dockers are not here to replace Virtual machines.

Both serve the same purpose of virtualizing the computing and infrastructure resources for optimized utilization.

Using both Virtual machines and dockers together can yield better results in virtualization.

When one desires a fast, lightweight, portable and highly scalable hardware-independent environment for multiple applications isolation; wherein security is not the major concern; Dockers is the best choice.

Use a VM for embedded systems that are integrated with hardware; such as device driver or kernel coding.

A scenario simulating an infrastructure setup with a high resource control and dependency on system resources; VMs are a better choice.

Use of Dockers inside VM

CI/CD pipelines scenario:

Virtualization enables a smooth CI/CD process flow by promoting the users to concentrate only on developing the code on a working system that is set up for automated continuous integration and deployment without having to duplicate the entire setup each time.

A virtualized environment is set up; either using a VM or a docker image that takes care of the automatic code check-ins, builds, regression testing, and deployments on the server.

> Originally posted on [KnowledgeHut](https://www.knowledgehut.com/blog/devops/docker-vs-vm)