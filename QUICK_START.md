# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start MongoDB (if using local MongoDB)

Make sure MongoDB is running on your system:

**Windows:**
```bash
mongod
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
```

Or use MongoDB Atlas (cloud) by updating the MONGODB_URI in `.env`

### Step 2: Start the Backend Server

In the project root directory:

```bash
npm run server
```

You should see:
```
Server running on port 5000
MongoDB connected successfully
```

### Step 3: Start the React Frontend

Open a new terminal in the project root:

```bash
npm run client
```

The React app will automatically open at `http://localhost:3000`

## 🎨 What You'll See

A beautiful header with:
- Gradient purple background (from #667eea to #764ba2)
- Animated rocket logo 🚀
- Navigation menu with hover effects
- Responsive hamburger menu for mobile
- "Get Started" call-to-action button
- Smooth animations and transitions

## 📱 Test Responsive Design

- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on different screen sizes
- Watch the hamburger menu appear on mobile!

## 🎯 Next Steps

1. **Customize the header colors** - Edit `client/src/components/Header.css`
2. **Add your logo** - Replace the emoji in `Header.js`
3. **Connect to API** - Use fetch/axios in React components
4. **Add more pages** - Create new components in `client/src/components/`
5. **Create API routes** - Add endpoints in `server.js`

## 🔧 Troubleshooting

**MongoDB Connection Error?**
- Make sure MongoDB is running
- Check MONGODB_URI in `.env` file

**Port already in use?**
- Change PORT in `.env` file
- Or stop the process using that port

**React app not loading?**
- Clear browser cache
- Run `npm install` in the client folder
- Check console for errors

## 🎉 Enjoy Building!

Your MERN stack app is ready to go! The beautiful header will make a great first impression.
