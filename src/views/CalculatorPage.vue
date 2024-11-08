<template>
  <div class="calculator-container">
    <h2>Calculadora</h2>
    <input type="text" v-model="display" disabled />
    <div class="button-grid">
      <button @click="clearDisplay">C</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('-')">-</button>
      <button @click="appendNumber(7)">7</button>
      <button @click="appendNumber(8)">8</button>
      <button @click="appendNumber(9)">9</button>
      <button @click="calculate('+')">+</button>
      <button @click="appendNumber(4)">4</button>
      <button @click="appendNumber(5)">5</button>
      <button @click="appendNumber(6)">6</button>
      <button class="decimal-btn" @click="appendDecimal">.</button>
      <button @click="appendNumber(1)">1</button>
      <button @click="appendNumber(2)">2</button>
      <button @click="appendNumber(3)">3</button>
      <button @click="deleteLastChar" class="empty">←</button>
      <button @click="appendNumber(0)" class="zero-btn">0</button>
      <button class="equal-btn" @click="calculateResult">=</button>
    </div>
    <footer class="footer">
      Projecte realitzat per Max Segura
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',
      decimalAdded: false
    };
  },
  methods: {
    appendNumber(num) {
      if (this.display === '' && num === 0) {
        return;
      }
      this.display += num;
      this.decimalAdded = false;
    },
    appendDecimal() {
      if (!this.decimalAdded && !this.endsWithOperator() && this.display.length > 0) {
        this.display += '.';
        this.decimalAdded = true;
      }
    },
    calculate(operator) {
      if (!this.endsWithOperator() && this.display !== '') {
        this.display += ` ${operator} `;
        this.decimalAdded = false;
      }
    },
    calculateResult() {
      if (this.display.trim() === '') {
        this.display = 'Error';
        return;
      }

      try {
        this.display = this.safeEval(this.display).toString();
      } catch {
        this.display = 'Error';
      }
      this.decimalAdded = false;
    },
    clearDisplay() {
      this.display = '';
      this.decimalAdded = false;
    },
    deleteLastChar() {
      this.display = this.display.slice(0, -1);
      if (this.endsWithOperator()) {
        this.decimalAdded = false;
      }
    },
    endsWithOperator() {
      return /[+\-*/] $/.test(this.display);
    },
    safeEval(expression) {
      const safeOperators = ['+', '-', '*', '/'];
      const safeChars = '0123456789' + safeOperators.join('') + '.';
      let filteredExpression = '';

      for (let char of expression) {
        if (safeChars.includes(char)) {
          filteredExpression += char;
        }
      }

      return new Function('return ' + filteredExpression)();
    }
  }
}
</script>

<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 340px;
  padding: 20px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

input {
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: right;
  border: 2px solid #007BFF;
  border-radius: 8px;
  padding: 10px;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: #f8f9fa;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
}

button {
  height: 60px;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}

.equal-btn {
  grid-column: span 3;
  background-color: #28a745;
}

.equal-btn:hover {
  background-color: #218838;
}

.zero-btn {
  grid-column: span 1;
}

.empty {
  font-size: 24px;
}

.footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;
  text-align: center;
}

@media (max-width: 400px) {
  input {
    width: 100%;
  }

  button {
    font-size: 20px;
  }
}
</style>
