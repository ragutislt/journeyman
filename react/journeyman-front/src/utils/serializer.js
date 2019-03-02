export const serialize = (obj) => {
    const objectKeys = Object.keys(obj);
    let newObj = {};
    console.log(objectKeys);
    for (let key of objectKeys) {
        newObj[key] = serialize(obj[key]);
    }
    return newObj;
}
