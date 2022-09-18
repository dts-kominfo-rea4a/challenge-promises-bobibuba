const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (findemosi) => {
  try {
    let emosi1 = [];
    let emosi2 = [];
    let semuaemosi = [];

    const promiseone = await promiseTheaterIXX()
    for (let i=0; i < promiseone.length; i++) {
      if (promiseone[i].hasil === findemosi){
        emosi1.push(promiseone[i])
      }
    }

    const promisetwo = await promiseTheaterVGC()
    for (let i=0; i < promisetwo.length; i++) {
      if (promisetwo[i].hasil === findemosi){
        emosi2.push(promisetwo[i])
      }
    }

    emosiall = [...emosi1, ...emosi2]
    return emosiall.length
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
