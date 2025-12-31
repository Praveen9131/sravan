# Deployment Instructions for CloudPanel

## Quick Fix for Current Issue

The 404 error happens because the server can't find `/assets/index-bVz3YBh_.js`.

### Option 1: Upload Contents of dist Folder (Recommended)

1. After running `bun run build`, go to the `dist` folder
2. Select ALL files and folders INSIDE the dist folder:
   - index.html
   - assets/ folder
   - Apex-logo/ folder
   - Any other files/folders
3. Upload these to your CloudPanel document root: `/home/[user]/htdocs/apexneural.cloud/`
4. **DO NOT** upload the `dist` folder itself

### Option 2: Check Current Server Structure

SSH into your server and check:
```bash
ls -la /home/[user]/htdocs/apexneural.cloud/
```

You should see:
```
index.html
assets/
Apex-logo/
```

If you see `dist/` instead, you uploaded the wrong thing.

### Option 3: Fix Permissions (if needed)

If files are uploaded correctly but still getting 404:
```bash
cd /home/[user]/htdocs/apexneural.cloud/
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

## Automated Deployment (Future)

For easier deployments, you can:

1. **Use SFTP/SCP to upload dist contents:**
   ```bash
   scp -r dist/* user@apexneural.cloud:/home/[user]/htdocs/apexneural.cloud/
   ```

2. **Or create a deployment script** (see deploy.sh below)

## Verification

After deployment, check:
1. Visit: `https://apexneural.cloud/assets/index-bVz3YBh_.js`
   - Should download or show the JS file, not 404
2. Visit: `https://apexneural.cloud/`
   - Should load your site

## Common CloudPanel Issues

- **Wrong document root**: Make sure you're uploading to the right domain folder
- **.htaccess for SPA**: You might need this for React Router to work properly
- **Cache**: Clear browser cache or use incognito mode to test

## Need .htaccess for React Router?

If your routes don't work (e.g., direct navigation to `/about` gives 404), create this file in your document root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
