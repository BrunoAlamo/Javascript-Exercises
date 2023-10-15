// modify an object nested within an object

let userActivity = {
    id: 123456,
    date: "january 1, 2017",
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);