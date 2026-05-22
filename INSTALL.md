# Installation Instructions

## Due to PowerShell Execution Policy Restrictions

Since npm commands are blocked by PowerShell execution policy, you need to enable script execution temporarily or use an alternative method.

### Option 1: Enable PowerShell Script Execution (Recommended)

1. Open PowerShell as Administrator
2. Run the following command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Navigate to the project directory:
```powershell
cd c:\Users\dell\CascadeProjects\arabic-learning-app
```
4. Install dependencies:
```powershell
npm install
```
5. Run the development server:
```powershell
npm run dev
```

### Option 2: Use Command Prompt (cmd)

1. Open Command Prompt (not PowerShell)
2. Navigate to the project directory:
```cmd
cd c:\Users\dell\CascadeProjects\arabic-learning-app
```
3. Install dependencies:
```cmd
npm install
```
4. Run the development server:
```cmd
npm run dev
```

### Option 3: Use Git Bash or WSL

If you have Git Bash or Windows Subsystem for Linux (WSL) installed, you can use them to run npm commands without PowerShell restrictions.

## After Installation

Once dependencies are installed, you can:

1. Run the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
- Arabic: http://localhost:3000/ar
- English: http://localhost:3000/en
- Russian: http://localhost:3000/ru
- Uzbek: http://localhost:3000/uz

## Project Structure

All files have been created and configured. The project includes:

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ next-intl for internationalization
- ✅ 4 language translations (Arabic, English, Russian, Uzbek)
- ✅ RTL/LTR support
- ✅ Middleware for locale detection
- ✅ Language switcher component
- ✅ Sample home page with translations

## Troubleshooting

If you encounter any issues after installation:

1. Clear the Next.js cache:
```bash
rm -rf .next
```

2. Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

3. Check Node.js version (should be 18+):
```bash
node --version
```
