// callback
getDataCallback = (num, callback) => {
  setTimeout(() => {
      if (typeof num === 'number') {
        callback(undefined, num * 2);
      } else {
          callback('number not provided', undefined)
      }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
  }
});

// promise
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
  });

getDataPromise('12').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})