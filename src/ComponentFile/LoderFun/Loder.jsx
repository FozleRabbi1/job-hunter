// const Loder = () => {

export const asyncLodaerFun = async () => {

    const res = await fetch("catagory.json")
    const data = await res.json();
    return data
}
// return { asyncLodaerFun }


// };

// export default Loder;
