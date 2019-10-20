export default class DataUtil {

  //returns frequency according to key
  //returns {key: <>, val: <>} object
  static getFrequency(dataset, key) {
    const values = []
    dataset.forEach((item) => {
      values.push(item[key])
    });

    const unique = new Set(values);
    const dict = {}
    unique.forEach((item) =>{
      dict[item] = 0;
    });

    values.forEach((item) => {
       dict[item]++;
    });

    return dict;
  }
}
