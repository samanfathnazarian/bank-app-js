const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//returns first elm that returns true
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
console.log(account);
