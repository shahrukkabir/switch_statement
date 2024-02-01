function categorizeFruit(name) {
    
    switch (name.toLowerCase()) {
        case "apple":
        case "pear":
        case "banana":
            console.log(`${name} is a common fruit`);
            break;
        case 'orange':
        case "grapefruit":
            console.log(`${name} is Lemon fruit`);
            break;
        default:
            console.log(`${name} is not recongnize`);

    }
}
categorizeFruit("apple")
categorizeFruit("mango")
categorizeFruit("orange")