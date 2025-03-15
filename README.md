# 📝 Test Assignment – Interactive CLI Program

## 📌 Description
This project is an **interactive CLI application** that processes user input and performs various validations:

- 🔢 **Numbers**: Checks if the input number is greater than `7`.
- 👤 **Names**: Recognizes the name `John`, otherwise states that the name is unknown.
- 📊 **List of Numbers**: Filters numbers that are multiples of `3`.
- 🔗 **Bracket Sequences**: Validates the correctness of nested brackets `()[]{}`.

## 🚀 Installation and Usage

### 1️⃣ **Clone the repository**
```sh
git clone git@github.com:void20005/test-asignment.git
cd test-asignment
```

### 2️⃣ **Install dependencies**
```sh
npm install
```

### 3️⃣ **Run the application**
```sh
node app.js
```

## 🛠 Functionality
Upon execution, the program prompts for user input and processes it according to the following rules:

| Input | Expected Output |
|------|---------------|
| `8` | `Hello` |
| `John` | `Hello, John` |
| `Alice` | `There is no such name` |
| `3, 6, 9, 12` | `The next elements are multiples of three: 3, 6, 9, 12` |
| `[()]` | `Is the bracket sequence valid? true` |
| `([)]` | `Is the bracket sequence valid? false` |

To exit the program, type **`exit`**.

## ✅ Running Tests
The tests are written using **Jest**. To run the tests:
```sh
npm test
```

## 📦 Project Structure
```
test-asignment/
├── node_modules/       # Project dependencies
├── app.js              # Main CLI logic file
├── test.js             # Unit tests (Jest)
├── package.json        # Project metadata and scripts
├── .eslintrc.mjs       # ESLint configuration
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 👨‍💻 Author
**Aliaksandr Rabau**  
📍 [GitHub](https://github.com/void20005)  
📧 [void2000@gmail.com](mailto:void2000@gmail.com)

## 🛠 Technologies Used
- **Node.js** – CLI application execution
- **Jest** – Testing framework
- **ESLint + Prettier** – Code linting and formatting


