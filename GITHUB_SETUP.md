# GitHub Setup Instructions

## Step 1: Configure Git Identity

Run these commands in your project directory:

```bash
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

Replace with your actual GitHub email and name.

## Step 2: Create Initial Commit

```bash
cd c:\Users\dell\CascadeProjects\arabic-learning-app
git commit -m "Initial commit: Arabic learning platform with multi-language support"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `arabic-learning-app`
3. Description: `A multilingual educational platform for learning Arabic for non-native speakers`
4. Make it Public or Private (your choice)
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your project directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/arabic-learning-app.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Verify Connection

You can verify the connection by running:

```bash
git remote -v
```

This should show your GitHub repository URL.

## Alternative: Using SSH

If you prefer SSH instead of HTTPS:

1. Generate SSH key (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

2. Add SSH key to GitHub:
   - Copy your public key: `type %userprofile%\.ssh\id_ed25519.pub`
   - Go to GitHub Settings → SSH and GPG keys → New SSH key
   - Paste the key and save

3. Use SSH URL when connecting:
```bash
git remote add origin git@github.com:YOUR_USERNAME/arabic-learning-app.git
```

## Troubleshooting

### If you get "Permission denied" error:
- Make sure you're using the correct GitHub username
- If using HTTPS, you may need to authenticate with GitHub
- If using SSH, make sure your SSH key is properly configured

### If you get "remote origin already exists" error:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/arabic-learning-app.git
```

### If you need to change the remote URL later:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/arabic-learning-app.git
```

## After Setup

Once connected, you can:
- Push changes: `git push`
- Pull changes: `git pull`
- Check status: `git status`
- View commits: `git log`
