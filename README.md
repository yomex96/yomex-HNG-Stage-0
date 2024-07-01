This is my submission for the HNG DevOps Stage 0 Task

it is a simple static website (html,javascript & css) deployed on NGINX server on AWS EC2

# Deploying a Simple Static Website Deployed on NGINX Server on AWS EC2

### Testing the project locally

1. Clone this project
```
git clone https://github.com/verma-kunal/AWS-Session.git
```


### Set up an AWS EC2 instance

1. Create an IAM user & login to your AWS Console
    - Access Type - Password
    - Permissions - Admin
2. Create an EC2 instance
    - Select an OS image - Ubuntu
    - Create a new key pair & download `.pem` file
    - Instance type - t2.micro
3. Connecting to the instance using ssh
```
ssh -i instance.pem ubunutu@<IP_ADDRESS>
```

### Configuring Ubuntu on remote VM

1. Updating the outdated packages and dependencies
```
sudo apt update
```
3. Install Git - [Guide by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04) 

### Deploying the static website 

1. Create your instance
Create a regular EC2 instance (mine was AWS EC2 Amazon Linux 2 free tier)
💡
Remember to create Key Pair for external SSH
For the inbound rules, use port 80 (and port 22 for SSH) from anywhere
After creating the instance, SSH into it. You can do that directly from the Management Console with the Connect button after creating the instance.

2. Start the NGINX Server in the instance

Install and update nginx to your instance 
$: sudo apt update &&  sudo apt install nginx -y

$: Start & enable nginx
$: sudo systemctl start nginx
$: sudo systemctl enable nginx
$: sudo systemctl status nginx

3. Move Git Repo into server
​
Clone your GitHub repo
$: git clone https://github.com/yomex96/yomex-HNG-Stage-0.git
​

4. Configure the  nginx in your server 
 nginx in your server ​

Within the file look for a block of code similar to this:
server {
    listen       80;
    listen       [::]:80;
    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }

5. check and Reload 

$ sudo nginx -t

$ sudo systemctl reload nginx​

6. move the files 

That root part should be noted down.
Move the files from your repo folder into that folder using:
$ sudo mv yomex-HNG-Stage-0/index.html   /var/www/html
$ sudo mv  yomex-HNG-Stage-0/style.css & script.js      / var/www/html

the html file must be called index.html
7. Restart
Then, restart the nginx server with
$: sudo systemctl restart nginx
