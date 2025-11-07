# Deploying Smart Habit Frontend (Next.js) on a VPS

This guide documents the step-by-step process of deploying the **Smart Habit** frontend (Next.js app) on a VPS using **Nginx**, **Certbot (SSL)**, **Systemd**, and a **secure CI/CD pipeline**.

---

## 🧩 Prerequisites

### 1. VPS Setup
- A Linux VPS (e.g., **Ubuntu 22.04** or later) 
- Domain name pointing to the VPS (e.g., `smarthabit.kode.camp`)
- Basic Linux and Git knowledge
- GitHub account (for CI/CD integration)

### 2. GitHub Secrets

Store these secrets in your GitHub repository under  
**Settings → Secrets → Actions:**

| Secret Name       | Description |
|--------------------|-------------|
| `VPS_HOST`         | Public IP address or domain of your VPS |
| `VPS_USER`         | SSH username for connecting to the VPS |
| `SSH_PRIVATE_KEY`  | Private SSH key (corresponding to the public key added in `~/.ssh/authorized_keys` on the VPS) |

> ⚠️ Ensure the private key does **not** have a passphrase, or the SSH action will fail.

---

## 1️⃣ Update and Upgrade Your Server

```bash
sudo apt update && sudo apt upgrade -y
```

## 2️⃣ Configure the Firewall (UFW)

Make sure your server allows the necessary ports — especially SSH (22), HTTP (80), and HTTPS (443).

```
sudo ufw status              # Check status
sudo ufw allow 22/tcp        # Allow SSH (important before enabling firewall)
sudo ufw allow 80/tcp        # Allow HTTP
sudo ufw allow 443/tcp       # Allow HTTPS
sudo ufw enable              # Enable firewall
sudo ufw reload              # Reload rules
```
>✅ **Tip**: Use `sudo ufw app list` to see available app profiles.

## 3️⃣ Install Required Software

Install **Git, Nginx, Certbot**, and **Node.js** (using NVM):

```
sudo apt install git nginx certbot python3-certbot-nginx -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

## 4️⃣ Allow Nginx Through the Firewall

```
sudo ufw allow 'Nginx Full'
sudo ufw status numbered
```

## 5️⃣ Configure Git Credentials (Optional for Private Repos)

Since this repository is public, you can skip this step.

For **private** repos (i.e Production level), setting up Git Credential Manager with a **Personal Access Token (PAT)**, is one method.

**Generate PAT:**
Go to [GitHub → Settings → Developer settings → Personal Access Tokens](https://github.com/settings/apps)

**Install and Configure Credential Manager:**

```
wget https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.6.1/gcm-linux_amd64.2.6.1.deb
sudo dpkg -i gcm-linux_amd64.2.6.1.deb
git-credential-manager configure
git config --global credential.credentialStore plaintext
```
>⚠️ You may get duplicate entries for credential.helper and the first entry being empty

Run `git config --global --list` to view config

Run `git config --global --edit` to remove any empty ones, if need be. This one always work best if error exit

Other git commands that were helpful to me for reference sake:

```
git config --global --unset-all credential.helper
git config --global --unset credential.https://dev.azure.com.usehttppath
git config --global credential.helper
```
**Alternative (more secure) setup by encrypting token stored:**

```
sudo apt install gnupg pass
gpg --gen-key
pass init <your-public-key>
git config --global credential.credentialStore gpg
```
Switch back to plaintext if needed(What I actaully did):
```
git config --global credential.credentialStore plaintext
```
## 6️⃣ Clone the Frontend Repository

```
git clone https://github.com/Vivixell/smart-habit-fe.git
```
If credentials are required(i.e for private repos shared with you), enter your GitHub username and PAT when prompted.

## 7️⃣ Build and Run the Application
```
cd smart-habit-fe/growtrack/
npm install && npm run build
```
Make sure HTTPS traffic is allowed( To download and install dependencies ):
```
sudo ufw allow 443/tcp
```
## 8️⃣ Test Locally

```
PORT=3010 HOST=127.0.0.1 npm start
curl http://127.0.0.1:3010/
```
## 9️⃣ Configure Nginx Reverse Proxy

Create a new Nginx site configuration file:

```
sudo touch /etc/nginx/sites-available/smart-habit-fe
sudo cp ~/smart-habit-fe/Nginx /etc/nginx/sites-available/smart-habit-fe
sudo ln -s /etc/nginx/sites-available/smart-habit-fe /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```
> **Note:** You can still use **NGINX** without having a domain pointing to your VPS.  
> For quick tests or temporary setups, replace the domain name with an underscore (`_`) in the server block.  
> For example, instead of `server_name smarthabit.kode.camp;`, use `server_name _;`.  
> This allows you to access the app via the server’s public IP address, and NGINX will correctly route the traffic to the running service in the background.

## 🔒 1️⃣0️⃣ Obtain and Install SSL Certificate

Use Certbot to automatically obtain and configure an SSL certificate.

```
sudo certbot --nginx -d smarthabit.kode.camp
sudo systemctl reload nginx
```
Verify HTTPS port:
```
sudo ss -tulwn | grep :443
```
## 1️⃣1️⃣ Create a Systemd Service

To keep the app running after reboots or crashes, create a systemd service.

```
sudo touch /etc/systemd/system/smartfrontend.service
sudo cp ~/smart-habit-fe/Service-File /etc/systemd/system/smartfrontend.service

sudo systemctl daemon-reload
sudo systemctl enable smartfrontend
sudo systemctl start smartfrontend
sudo systemctl status smartfrontend
```
These manual steps can later be automated using **Ansible** or your CI/CD pipeline.

## 🔁 1️⃣2️⃣ Secure Passwordless `sudo` for CI/CD

To allow your GitHub Actions pipeline to restart the service securely without requiring a password, edit the sudoers file:
```
sudo visudo
```
Add one of the following lines (replace `ovrobin` with your username):

> **✅ Recommended (least privilege):**
```
ovrobin ALL=(ALL) NOPASSWD: /bin/systemctl restart smartfrontend
```
> **⚠️ Not recommended (full sudo access):**

```
ovrobin ALL=(ALL) NOPASSWD:ALL
```
The first option follows **best security practice**; it only allows the CI/CD user to restart the frontend service and nothing else.


##  Possible Improvements

While this setup works well for small to medium deployments, here are some enhancements to consider:

1. **Infrastructure as Code (IaC)**
   - Use **Ansible**, **Terraform**, or **Pulumi** to automate server setup, Nginx configuration, and SSL provisioning.
   - This makes redeployment and scaling much faster and consistent.

2. **Environment Variables Management**
   - Move environment variables to a `.env` file and load them securely using **dotenv** or a secret manager like **AWS Secrets Manager** or **Vault**.

3. **CI/CD Optimization**
   - Add a staging environment before production.

4. **Monitoring & Logging**
   - Set up **Prometheus + Grafana** or **Uptime Kuma** to monitor uptime and service health.
   - Use **journalctl** or a log aggregator like **Elastic Stack** for better visibility into service logs.

5. **Security Hardening**
   - Restrict SSH access using key-based authentication only.
   - Consider running the Node.js app with a dedicated non-root user.
   - Enable automatic security updates with:
     ```bash
     sudo apt install unattended-upgrades
     sudo dpkg-reconfigure --priority=low unattended-upgrades
     ```

6. **Zero-Downtime Deployment**
   - Implement rolling updates or use a reverse proxy like **PM2** or **Docker Compose** for smooth restarts without downtime.



## 🧾 Reference Commands

**Check service logs:**
```
sudo journalctl -u smartfrontend -f
```

**Check active ports:**

```
sudo ss -tulwn
sudo lsof -i -P -n
sudo lsof -i :<port to use>
```
**Change server timezone:**
```
timedatectl list-timezones | grep Africa
sudo timedatectl set-timezone Africa/Lagos
```

## Summary

After completing the above setup:

1. The frontend app runs under Nginx reverse proxy with SSL.

2. The app auto-starts after a reboot using systemd.

3. Your GitHub Actions pipeline can deploy updates securely and restart the service automatically.


## 🏁 Conclusion

With this setup, the frontend app is fully deployed on a VPS with secure HTTPS, continuous deployment, and process monitoring.  

The goal is to make deployment repeatable, resilient, and easy to maintain, whether for a single project or a team workflow.  

As the project scales, you can automate more steps using tools like **Ansible**, **Docker**, or **Terraform** for smoother infrastructure management.  


## 👨‍💻 Author

**Victor Robin Okon**  
Cloud & DevOps Enthusiast | AWS | Linux | Automation  
> Building scalable and automated cloud solutions, one deployment at a time.