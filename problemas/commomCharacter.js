let str = ['geeksforgeeks', 'gemkstones', 'acknowledges', 'aguelikes']

for (let i = 0; i < str.length; i++) {
    if (str[i][i].includes(str[i][i])) {
        console.log(str[i][i])
    }
}

