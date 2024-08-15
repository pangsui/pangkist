'use strict';
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const checkDogs = function (dogJulia, dogKate) {
//   const juliaCopy = dogJulia.slice();
//   juliaCopy.shift(); //juliacopy.splice(0,1)
//   juliaCopy.splice(-2);
//   const correcteData = juliaCopy.concat(kate); //[..juliaCopy,...kate]
//   correcteData.forEach((dog, i) => {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };
// checkDogs(julia, kate);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
document.addEventListener('DOMContentLoaded', function () {
  const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: 'Pangsui Usifu Linge',
    movements: [2000, -200, 3400, -3000, -200, 5000, 400, -3000, -500, 900],
    interestRate: 0.7,
    pin: 3333,
  };
  const account4 = {
    owner: 'Michael Finighang Muh',
    movements: [200, -200, 340, -300, -200, 5000, 400, -460, 9000, -5000],
    interestRate: 0.9,
    pin: 4444,
  };
  const account5 = {
    owner: 'Mbiba Hassanu',
    movements: [2000, -200, 3400, -3000, -90, 50, 400, -430],
    interestRate: 0.7,
    pin: 5555,
  };

  const account6 = {
    owner: 'Usmanou Junior',
    movements: [4300, 1000, 700, 50, 90, -400, -900, 700],
    interestRate: 1,
    pin: 6666,
  };
  const account7 = {
    owner: 'Nyuykonge Amira Nyuykonge',
    movements: [4300, 1000, 700, 500, 90, -400, -900, 7000],
    interestRate: 0.8,
    pin: 7777,
  };

  const accounts = [
    account1,
    account2,
    account3,
    account4,
    account5,
    account6,
    account7,
  ];

  // Elements

  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  /////////////////////////////////////////////////
  const app = document.querySelector('.app');
  const loginForm = document.querySelector('.login');
  const logoutBtn = document.querySelector('.logout__btn-btn');
  const logout = document.querySelector('.logout__btn');
  const welcome = document.querySelector('.welcome');
  const mainMovements = document.querySelector('.main__movements');
  const currentBalance = document.querySelector('.balance__balance');
  const summaryNeg = document.querySelector('.summary__negative');
  const summaryPos = document.querySelector('.summary__positive');
  const summaryInterest = document.querySelector('.summary__positive-interest');
  const userLoginName = document.querySelector('.login__input--user');
  const userLoginPin = document.querySelector('.login__input--pin');
  const loginButton = document.querySelector('.login__btn');
  const transferTo = document.querySelector('.form__input--to');
  const transferAmount = document.querySelector('.form__input--amount');
  const btnTranfer = document.querySelector('.form__btn--close');
  const headingTransfer = document.querySelector('.transfer .heading');
  const deleteUser = document.querySelector('.form__input--delete-user');
  const deleteUserPin = document.querySelector('.form__input--delete-pin');
  const btnClose = document.querySelector('.delete__user');
  const headingCloseAcc = document.querySelector('.heading__close-account');
  const inputLoan = document.querySelector('.form__input-loan');
  const btnloan = document.querySelector('.form__btn--loan');
  const loanMessage = document.querySelector('.heading__loan');
  const btnSort = document.querySelector('.summary__btn--sort');

  const displayMovements = function (movements, sort = false) {
    mainMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
          <div class="main__movement-items">
                <div class="movement__content">
                  <p class="movement__${type}">${i + 1} ${type}</p>
                  <p class="movement__heading">3 days ago</p>
                </div>
                <div class="movement__amount">
                  <p class="movement__amount-text movement__amount-deposit">
                    $${mov}
                  </p>
                </div>
        </div>
      `;
      mainMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  //user name creation

  const userName = function (accounts) {
    accounts.forEach(account => {
      const holder = account.owner.toLowerCase().split(' ');
      const userAcc = holder.map(user => user[0]).join('');
      account.userName = userAcc;
    });
  };
  userName(accounts);

  //balance calculation

  const movementBalance = function (account) {
    const total = account['movements'].reduce((acc, cur) => {
      return acc + cur;
    });
    currentBalance.textContent = `$${total}`;
    account.balance = total;
    console.log(account);
    return `$${total}`;
  };

  //summary calculation

  const calcSummary = function (account) {
    const positiveMove = account.movements
      .filter(mov => mov > 0)
      .reduce((acc, cur) => acc + cur);
    const negativeMove = account.movements
      .filter(mov => mov < 0)
      .reduce((acc, cur) => acc + cur);
    const interest = account.movements
      .filter(mov => mov > 0)
      .map(depo => (depo * account.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int > 1;
      })
      .reduce((acc, cur) => acc + cur, 0);
    summaryNeg.textContent = negativeMove;
    summaryPos.textContent = positiveMove;
    summaryInterest.textContent = interest;
  };
  const updateUI = function () {
    displayMovements(currentAccount.movements);
    movementBalance(currentAccount);
    calcSummary(currentAccount);
  };

  const loginErr = function (text1, style1, text2, style2) {
    welcome.textContent = text1;
    welcome.style.color = style1;
    setTimeout(() => {
      welcome.textContent = text2;
      welcome.style.color = style2;
      userLoginName.value = userLoginPin.value = '';
      userLoginPin.blur();
    }, 3000);
  };
  //user login
  let currentAccount;
  const login = function (accounts) {
    loginButton.addEventListener('click', function (e) {
      e.preventDefault();
      const name = userLoginName.value.toLowerCase();
      const pin = +userLoginPin.value;
      currentAccount = accounts.find(account => account.userName === name);
      if (currentAccount) {
        if (currentAccount.pin === pin) {
          app.style.opacity = 1;
          userLoginName.value = userLoginPin.value = '';
          userLoginPin.blur();
          welcome.textContent = `Welcome back ${
            currentAccount.owner.split(' ')[0]
          }`;
          loginForm.style.visibility = 'hidden';
          logout.style.display = 'block';
          updateUI();
        } else {
          console.log('password incorrect');
          loginErr('Wrong Password', 'red', 'Log in to get started', 'inherit');
        }
      } else {
        console.log('user does not exist, create your account');
        loginErr('Invalid user', 'red', 'Log in to get started', 'inherit');
      }
    });
  };
  login(accounts);

  //logout
  const logoutUser = function () {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.visibility = 'visible';
      welcome.textContent = 'Log in to get started';
      logout.style.display = 'none';
      app.style.opacity = 0;
    });
  };
  logoutUser();

  const styleChange = function (text, style) {
    headingTransfer.textContent = text;
    headingTransfer.style.color = style;
  };
  //transfer money
  const transferMoney = function (accounts) {
    btnTranfer.addEventListener('click', function (e) {
      e.preventDefault();
      const amount = +transferAmount.value;
      const receiver = accounts.find(
        account => account.userName === transferTo.value
      );
      transferAmount.value = transferTo.value = '';
      if (
        receiver &&
        amount > 0 &&
        currentAccount.balance >= amount &&
        receiver.userName !== currentAccount.userName
      ) {
        receiver.movements.push(amount);
        currentAccount.movements.push(-amount);
        setTimeout(() => {
          updateUI();
          styleChange('Success', 'green');
        }, 3000);
        setTimeout(() => {
          styleChange('Transfer Money', 'inherit');
        }, 5000);
      } else {
        styleChange('Invalid User or insufficient balance', 'red');
        setTimeout(() => {
          styleChange('Transfer Money', 'inherit');
        }, 3000);
      }
    });
  };
  transferMoney(accounts);

  const closeAccStyle = (text, style) => {
    headingCloseAcc.textContent = text;
    headingCloseAcc.style.color = style;
  };
  //deleting account

  const deleteAcc = function (accounts) {
    btnClose.addEventListener('click', function (e) {
      e.preventDefault();
      const user = deleteUser.value;
      const userPin = +deleteUserPin.value;
      const index = accounts.findIndex(account => account.userName === user);
      if (
        index >= 0 &&
        accounts.at(index).pin === userPin &&
        accounts[index] === currentAccount
      ) {
        welcome.textContent = `Account name ${accounts[index]['owner']} deleted`;
        welcome.style.color = 'red';
        accounts.splice(index, 1);
        console.log('account deleted');
        app.style.opacity = 0;
        setTimeout(() => {
          welcome.textContent = 'Log in to get started';
          welcome.style.color = 'inherit';
        }, 6000);
      } else {
        closeAccStyle('Failed to delete account', 'red');
        setTimeout(() => {
          closeAccStyle('Close Account', 'inherit');
        }, 3000);
        console.log('failed');
      }
    });
  };

  deleteAcc(accounts);
  const loanStyle = function (text, style) {
    loanMessage.textContent = text;
    loanMessage.style.color = style;
  };
  //request a loan
  const loanRequest = function () {
    btnloan.addEventListener('click', function (e) {
      e.preventDefault();
      const amount = +inputLoan.value;
      if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= 0.1 * amount)
      ) {
        currentAccount.movements.push(amount);
        updateUI();
        inputLoan.value = '';
        // inputLoan.blur();
        setTimeout(() => {
          loanStyle('Success', 'green');
        }, 3000);
        setTimeout(() => {
          loanStyle('Request Loan', 'inherit');
        }, 5000);
      } else {
        loanStyle('Invalid amount', 'red');
        setTimeout(() => {
          loanStyle('Request Loan', 'inherit');
        }, 3000);
      }
    });
  };
  loanRequest();

  //sorting the movments
  let sorted = false;
  const movementSort = function () {
    btnSort.addEventListener('click', function (e) {
      e.preventDefault();
      displayMovements(currentAccount.movements, !sorted);
      sorted = !sorted;
    });
  };
  movementSort();
});

// document
//   .querySelector('.balance__balance')
//   .addEventListener('click', function () {
//     const movementUI = [
//       ...document.querySelectorAll('.movement__amount-deposit'),
//     ];
//     const textcnt = movementUI.map(el => +el.textContent.replace(/^\D+/g, ''));
//     console.log(textcnt);
//   });
