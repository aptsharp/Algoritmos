let dp_table_blue = ["b", "l", "u", "e"];
let dp_table_clues = ["c", "l", "u", "e", "s"];
let dp_table = Array.from({ length: dp_table_clues.length }, () => Array(dp_table_blue.length).fill(0));

console.log(dp_table);

// sempre que uma solução tiver um for dentro de outro a solução é bidimencional ou seja é uma tabela, se é uma tabela é uma solução de algoritmo dinamico. 
for (let i = 0; i < dp_table_blue.length; i++) {
    for (let j = 0; j < dp_table_clues.length; j++) {
        if (dp_table_clues[j] === dp_table_blue[i]) {
            dp_table[j][i] = (j > 0 && i > 0 ? dp_table[j-1][i-1] : 0) + 1;
        } else {
            dp_table[j][i] = Math.max(
                j > 0 ? dp_table[j-1][i] : 0,
                i > 0 ? dp_table[j][i-1] : 0
            );
        }
    }
}

console.log(dp_table);
