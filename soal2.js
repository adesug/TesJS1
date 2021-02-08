const pluginFood = ( price, voucher, distance , isTaxed) => {
    const voucherList = ["PLUGINFOOD007", "DITRAKTIRPLUGIN"];
    let discount = 0;
    let shipping = 5000;
    let tax = 0;
    if(voucherList.includes(voucher)){
        switch (voucher) {
            case "PLUGINFOOD007":
                discount = price >= 70000 ? price * 0.5 : 0 ;
                if(discount > 50000) {
                    discount = 50000;
                }
                break;
            case "DITRAKTIRPLUGIN":
                discount = price >= 25000 ? price * 0.6 : 0;
                if(discount > 30000) {
                    discount = 30000;
                }
                break;
                default:
                    discount = 0;
                    break;
        }
    }else{
        discount = 0;
    }
    if (distance > 2 ) {
        shipping += Math.ceil(distance - 2) * 3000;
    }
    if (isTaxed) {
        tax = price * 0.05;
    }
    const subTotal = price - discount + shipping + tax ;
    const output = `Harga: ${price}\nPotongan: ${discount}\nBiaya Antar: ${shipping}\nPajak: ${tax}\nSub Total: ${subTotal}`;
    return output;

};

console.log(pluginFood(165000, "PLUGINFOOD007", 6, true));
console.log("======================================");
console.log(pluginFood(25000, "PLUGINFOOD007", 6, false));
