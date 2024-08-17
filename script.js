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
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2024-08-15T18:49:59.371Z',
      '2024-08-16T12:01:20.894Z',
    ],
  };

  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };

  const account3 = {
    owner: 'Pangsui Usifu Linge',
    movements: [2000, -200, 3400, -3000, -200, 5000, 400, -3000, -500, 900],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2024-08-10T14:43:26.374Z',
      '2024-08-14T18:49:59.371Z',
      '2024-08-13T12:01:20.894Z',
      '2024-08-15T18:49:59.371Z',
      '2024-08-16T12:01:20.894Z',
    ],
  };
  const account4 = {
    owner: 'Michael Finighang Muh',
    movements: [200, -200, 340, -300, -200, 5000, 400, -460, 9000, -5000],
    interestRate: 0.9,
    pin: 4444,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2024-08-14T12:01:20.894Z',
      '2024-08-15T18:49:59.371Z',
      '2024-08-16T12:01:20.894Z',
    ],
  };
  const account5 = {
    owner: 'Mbiba Hassanu',
    movements: [2000, -200, 3400, -3000, -90, 50, 400, -430],
    interestRate: 0.7,
    pin: 5555,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2023-06-25T18:49:59.371Z',
      '2024-08-16T12:01:20.894Z',
    ],
  };

  const account6 = {
    owner: 'Usmanou Junior',
    movements: [4300, 1000, 700, 50, 90, -400, -900, 700],
    interestRate: 1,
    pin: 6666,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
  };
  const account7 = {
    owner: 'Nyuykonge Amira Nyuykonge',
    movements: [4300, 1000, 700, 500, 90, -400, -900, 7000],
    interestRate: 0.8,
    pin: 7777,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2024-08-15T18:49:59.371Z',
      '2024-08-16T12:01:20.894Z',
    ],
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
  // console.log('accounts' + accounts);
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
  const currentDate = document.querySelector('.date__now');
  const setLogoutTime = document.querySelector('.summary__logout-timer');

  const dateFormatter = function (date) {
    const calcDaysPass = (date1, date2) =>
      Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
    const daysPassed = calcDaysPass(new Date(), date);
    // console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    // const day = `${date.getDate()} `.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(navigator.language).format(date);
  };

  const displayMovements = function (account, sort = false) {
    mainMovements.innerHTML = '';

    const movs = sort
      ? account.movements.slice().sort((a, b) => a - b)
      : account.movements;
    movs.forEach(function (mov, i) {
      const date = new Date(account.movementsDates[i]);
      const displayDate = dateFormatter(date);
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
          <div class="main__movement-items">
                <div class="movement__content">
                  <p class="movement__${type}">${i + 1} ${type}</p>
                  <p class="movement__heading">${displayDate}</p>
                </div>
                <div class="movement__amount">
                  <p class="movement__amount-text movement__amount-deposit">
                    $${new Intl.NumberFormat(navigator.language).format(
                      +mov.toFixed(2)
                    )}
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
    currentBalance.textContent = `$${new Intl.NumberFormat(
      navigator.language
    ).format(total)}`;
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
      .map(depo => +((depo * account.interestRate) / 100).toFixed(2))
      .filter((int, i, arr) => {
        // console.log(arr);
        return int > 1;
      })
      .reduce((acc, cur) => acc + cur, 0);
    summaryNeg.textContent = `$${new Intl.NumberFormat(
      navigator.language
    ).format(+negativeMove.toFixed(2))}`;
    summaryPos.textContent = `$${new Intl.NumberFormat(
      navigator.language
    ).format(+positiveMove.toFixed(2))}`;
    summaryInterest.textContent = `$${new Intl.NumberFormat(
      navigator.language
    ).format(interest)}`;
  };
  const updateUI = function () {
    displayMovements(currentAccount);
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
  //logout timer
  let interval;
  const startLogOutTimer = function () {
    // set logout time
    let time = 300;

    // set timer
    interval = setInterval(() => {
      const mins = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
      console.log(typeof mins);
      setLogoutTime.textContent = `${mins}:${sec}`;
      --time;
      console.log(time);
      if (time === 0) {
        app.style.opacity = 0;
        logout.style.display = 'none';
        welcome.textContent = 'Log in to get started';
        loginForm.style.visibility = 'visible';
        clearInterval(interval);
      }
    }, 1000);
    console.log('timer ' + time);
  };
  const resetTimer = () => {
    if (interval) {
      clearInterval(interval);
      startLogOutTimer();
    }
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
          startLogOutTimer();
          //display date
          // const date = new Date();
          // const day = `${date.getDate()} `.padStart(2, 0);
          // const month = `${date.getMonth() + 1}`.padStart(2, 0);
          // const year = date.getFullYear();
          // const hours = `${date.getHours()}`.padStart(2, 0);
          // const mins = `${date.getMinutes()}`.padStart(2, 0);
          // currentDate.textContent = `${day}/${month}/${year},${hours}:${mins}`;

          const date = new Date();
          const options = {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            weekday: 'long',
          };
          currentDate.textContent = new Intl.DateTimeFormat(
            navigator.language,
            options
          ).format(date);

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
      resetTimer();
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

      resetTimer();

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
        currentAccount.movementsDates.push(new Date().toISOString());
        receiver.movementsDates.push(new Date().toISOString());
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
      resetTimer();
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
        closeAccStyle('Failed to delete account', '#fff');
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
      resetTimer();
      const amount = +inputLoan.value;
      if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= 0.1 * amount)
      ) {
        currentAccount.movements.push(amount);
        currentAccount.movementsDates.push(new Date().toISOString());
        setTimeout(() => {
          updateUI();
        }, 3000);
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
      resetTimer();
      displayMovements(currentAccount, !sorted);
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

// this is a title case => This is a Title Case

// const titleCase = function (string) {
//   const exclusion = ['a', 'an', 'in', 'with', 'or', 'but'];
//   const lowrc = string.toLowerCase().split(' ');
//   const conv = lowrc
//     .map(word =>
//       exclusion.includes(word)
//         ? word
//         : word.replace(word[0], word[0].toUpperCase())
//     )
//     .join(' ');
//   return conv;
// };
// console.log(titleCase('this is a title case in my PHD THESIS'));
// console.log(titleCase('This is but a string or an array'));

// Challenge time
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// question 1
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
// console.log(dogs);

//Question 2
// const saraDogIndex = dogs
//   .map(dog => dog.owners)
//   .findIndex(dog => dog.includes('Sarah'));

// if (saraDogIndex >= 0) {
//   const seraObj = dogs.at(saraDogIndex);
//   console.log(seraObj);
//   if (seraObj.curFood > seraObj.recommendedFood) {
//     console.log('Eating too much');
//   } else {
//     console.log('Eating too little');
//   }
// } else {
//   console.log('dog not found');
// }

// //question 3
// let toomuch = [];
// let tooLittle = [];
// for (let obj of dogs) {
//   if (obj.curFood > obj.recommendedFood) {
//     toomuch.push(obj.owners);
//   } else {
//     tooLittle.push(obj.owners);
//   }
// }
// tooLittle = tooLittle.flat();
// toomuch = toomuch.flat();
// const ownersEatTooMuch = dogs.map(dog =>
//   dog.recommendedFood < dog.curFood ? dog.owners : ''
// );
// const ownersEatTooLittle = dogs.map(dog =>
//   dog.recommendedFood > dog.curFood ? dog.owners : ''
// );
// console.log(ownersEatTooLittle);
// console.log(ownersEatTooMuch);

// let tooMuch = [];
// for (let i of ownersEatTooMuch) {
//   if (i === '') continue;
//   tooMuch.push(i);
// }
// console.log(tooMuch);

// Question 4
// console.log(`${toomuch.join(' and ')} dogs eat too much `);
// console.log(`${tooLittle.join(' and ')} dogs eat too little `);

// // Question 5
// console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

// //question 6
// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood < 1.1 * dog.recommendedFood &&
//       dog.curFood > 0.9 * dog.recommendedFood
//   )
// );

// // Question 7
// let okayAmount2 = [];
// for (let dog of dogs) {
//   if (
//     dog.curFood < 1.1 * dog.recommendedFood &&
//     dog.curFood > 0.9 * dog.recommendedFood
//   ) {
//     okayAmount2.push(dog);
//   }
// }
// console.log(okayAmount2);

// const okayAmount = dogs.map(dog => {
//   if (
//     dog.curFood < 1.1 * dog.recommendedFood &&
//     dog.curFood > 0.9 * dog.recommendedFood
//   ) {
//     return dog;
//   } else {
//     return '';
//   }
// });

// let okayModified = [];
// for (let dog of okayAmount) {
//   if (dog === '') continue;
//   okayModified.push(dog);
// }
// console.log(okayAmount);
// console.log(okayModified);

//Question 8
// const dogsCopy = dogs.slice();
// dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogs);
// console.log(dogsCopy);

// const fruits = ['apple', 'banana', 'orange', 'grape'];
// const citrus = fruits.slice(2, 4);
// console.log(fruits);
// console.log(citrus);
