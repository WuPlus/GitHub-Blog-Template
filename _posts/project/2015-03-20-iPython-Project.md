---
layout: post
title: MultiDBs INotebook Project
description: MultiDBs INotebook Project
category: Project
imageURL: ipython/ipython.jpg
githubURL: http://infsci2711.github.io/MultiDBs-INotebook-Server/
introduction: MultiDBs INotebook Project is a sub-project for MultiDBs project. It aims to utilize iPython(Jupyter) notebook to do data analysis on MultiDBs datasets.
---

#1. Description
MultiDBs INotebook Project is a sub-project for MultiDBs project. It aims to utilize iPython(Jupyter) notebook to do data analysis on MultiDBs datasets.

IPython Notebook is a is a web-based interactive computational environment where you can combine code execution, text, mathematics, plots and rich media into a single document.In Jupyter,data imported from MultiDBs database can be analyzed and viewed in different ways using python by implement Ipython Notebook. Each document for each user can be saved to our server. By login into the system, users can check their notebooks.

Jupyter roles as a excellent data visualization platform for data in MultiDBs. Matplotlib, a python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms,is included in Jupyter. You can generate plots, histograms, power spectra, bar charts, errorcharts, scatterplots, etc, with just a few lines of code, because matplotlib tries to make easy things easy and hard things possible.

The Jupyter does an impressive job of hiding its power behind a simple user interface.With the concise interface and design, users can easily handle the software without any help.We no longer have to squint or click around in search of the feature we’re trying to access: The button is right there in that simple interface for us to tap.Its emphasis on performance and a its intriguing minimalistic user interface will attract a lot of well-deserved attention.


#2. Install iPython
Installing IPython is the first step we should take. Here is simple introduction of several ways to install IPython. For more information, please visit Install IPython to get simplified installation instructions that should work for most of the users.


<pre>
<code class="bash">
# Install mavan, git, and dependencies for ipython server:

sudo apt-get install maven
sudo apt-get install git
sudo apt-get install openjdk-7-jdk
sudo apt-get install nginx
sudo apt-get install python-pip
sudo apt-get install python3-pip
sudo apt-get install python3-matplotlib
sudo pip3 install pyzmq
sudo pip install Jinja2
sudo pip install tornado
sudo pip3 install jsonschema

</code>
</pre>

If you already have Python, you can get IPthon with pip

<pre>
<code class="bash">
pip install ipython

</code>
</pre>

Or if you want to also get the dependencies for the IPython notebook:

<pre>
<code class="bash">
pip install "ipython[notebook]"

</code>
</pre>

Install jupyter server (multi-user ipython server):

<pre>
<code class="bash">
cd /opt/project
sudo git clone https://github.com/jupyter/jupyterhub.git 
cd /opt/project/jupyterhub
sudo apt-get install npm nodejs-legacy
sudo npm install -g configurable-http-proxy
sudo pip install -r requirements.txt
sudo pip3 install .
sudo pip install -r dev-requirements.txt
sudo pip3 install -e .

</code>
</pre>

For a new starter, you are suggested to get IPython with the Anaconda or Canopy Python distributions, which provide Python 2.7, IPython and all of its dependences as well as a complete set of open source packages for scientific computing and data science.

<pre>
<code class="bash">
%%for Anaconda:
conda update conda
conda update ipython ipython-notebook ipython-qtconsole
                      
%%Enthought Canopy:
enpkg ipython

</code>     

</pre>


#3. Install Server and Configuration Alert
Note:All the following configuration is based on AWS(Ubuntu 14.04.1 LTS). There may be some configuration errors on other kinds of server system. You can always send emails to wuplus1992@gmail.com for technical support

There are two servers in our system: Java server for portal website and ipython server to deal with actual notebook staffs.

Before starting up the server, users need to make sure that the port 8888 is open to public, and is not binding to other process. It is reserved for jupyter server.

The first part of installation is to install mysql server, with password root for user root, it should automatically set “root” as password of “root” mysql user. If it fails, you should try to replace the password with your own.

<pre>
<code class="bash">
echo mysql-server mysql-server/root_password password root | sudo debconf-set-selections

echo mysql-server mysql-server/root_password_again password root | sudo debconf-set-selections

</code>
</pre>
                
The second part of installation is install java server. System will download server from git, make some configuration, and start server. In “Jupyter Notebook for multi-user”, we install jupyter server which is a multi-user version of ipython.

In this part, the server will use a default port 7654. If you want to change it to another port, please refer to config.properties file and change the port in the first line

The last part is to modify some ipython build-in files to implement some customize functionalities. You can change the defalut ipython path to your own one if your ipythn is not installed in the default directory

<pre>
<code class="bash">
# Copy jupyter server configuration file from git
# Replace the IPython directory with your own one
cp opt/project/MultiDBs-INotebook-IPython-Extention/js/main.js /usr/local/lib/python3.4/dist-packages/IPython/html/static/notebook/js/main.js

cp opt/project/MultiDBs-INotebook-IPython-Extention/css/overiride.css /usr/local/lib/python3.4/dist-packages/IPython/html/static/notebook/css/overiride.css

</code>
</pre> 
                
After setting all the configuration in the startup.sh, just start up the server in a clean machine, run startup.sh in the project directory.

<pre>
<code class="bash">
sudo ./startup.sh

</code>
</pre>                
How to use
Register a new account
Open the Rigister page. Input your user name, email address and password.


Log in
Open the Log in page. Input the user name and password in step 1. Or use the defualt account (username: student, password: infsci27115).


Open your server
When you enter the Jupyterhub page, click the green My Server button. The page will jump to your home page that lists all your files.

 
Create new documents
Click the New button on the right part of the page and select a file type. For this project, you should create Python 3.


Connect to a database
Select a database in the pull-down menu to connect. Then click the cloud button next to the database menu. The first cell will display the database information.

 
Use data from database
Now, you can start to use the data to do analysis. For example, if you want to get the data of two columns "mpg" and "horsepower" from database "car". you can execute a SQL statement select horsepower, mpg from 25.carsin notebook cell. Than you will get the data from the databse. The data is displayed in the form of JSON object.


You can uniform the data to discard schema and to convert data type using Python. The following code gives an example of data pre-processing and scatter plot.

<pre>
<code class="python">
%matplotlib inline
import matplotlib.pyplot as plt

data=data0['data']
dataset1=[]
dataset2=[]
for i in range(len(data)):
    dataset1.insert(i,int(data[i]['row'][0]))
for i in range(len(data)):
    dataset2.insert(i,int(data[i]['row'][1]))

x = dataset1
y = dataset2

plt.scatter(x,y)
plt.show()

</code>
</pre> 
        


#4. APIs
To register a new user in iPython Notebook, the API is:

<pre>

<code class='JSON'>
Path: http://54.152.29.103:7654/User

Method: PUT

JSON: {
	"username": "myName", 
	"email": "myEmail", 
	"password": "password"
}

Return Type: "1" - success; "-1" - failure.

</code>
</pre>

#5. Acknowledge
Thanks for all the advice and help from Evgeny Karataev, the instructor of INFSCI2711.

