# 🚘 Turners Car Vision Demo

A simple web application that uses **Azure Custom Vision API** to identify car types (e.g., Sedan, SUV, Truck) based on an uploaded image.  
This project was developed as part of **Mission 1** to demonstrate the practical use of AI in a cloud-based environment.

---

## 🌐 Live Demo
🔗 **Try it here:** [https://taoyan929.github.io/turners-car-vision-demo/](https://taoyan929.github.io/turners-car-vision-demo/)

---

## 🧠 Project Overview

This project simulates a car insurance company's use case —  
when a customer uploads a photo of their vehicle, the system automatically identifies the **type of car** to help determine insurance premiums.

### 🎯 Key Features
- Upload any car image (`.jpg`, `.png`, etc.)
- Instantly preview the uploaded image
- Call **Azure Custom Vision API** to analyze car type
- Display the prediction result (car type + probability)
- Clean and professional responsive UI

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla JS) |
| Cloud AI Service | Microsoft Azure Custom Vision |
| Deployment | GitHub Pages |

---

## ⚙️ How It Works

1. The user selects a car image from their device.  
2. The image is displayed as a preview on the page.  
3. The **“Analyze Car Type”** button sends the image to Azure’s **Custom Vision Prediction API**.  
4. The API returns the prediction result (car type and confidence).  
5. The result is shown clearly below the image.

---

## 🧩 Project Structure

