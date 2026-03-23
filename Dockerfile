# 1. Base Image (Maan lo Node.js app hai)
FROM node:18-alpine

# 2. Container ke andar ka ghar (Working Directory)
WORKDIR /app

# 3. Files copy karo
COPY package*.json ./
RUN npm install
COPY . .

# 4. Port expose karo
EXPOSE 3000

# 5. App start karne ki command
CMD ["npm", "start"]