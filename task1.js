var n = 7;

function createTable() {
    var body = document.body;
    var table = document.createElement('TABLE');
        table.style.border = '1px solid black';
        table.style.borderCollapse = 'collapse';
        table.style.textAlign = "center";


    for (let i = 0; i < n; i++) {
        var tr = table.insertRow();
        table.appendChild(tr);

        for (let j = 0; j < n; j++) {
            var td = tr.insertCell();
                td.style.height  = '50px';
                td.style.width  = '50px';
                td.style.border = '1px solid black';
            tr.appendChild(td);
        }
    }
    body.appendChild(table);


    var array = [];
    for(let i=0; i<n; i++) {
        array[i] = [];
    }

    let k = 1;
    for (let t=0; t<(n+1)/2; t++) {
        for (let j=t; j<n-t; j++) { 
            array[t][j]=k;
            k++;
        }
        for (let i=t+1; i<n-t; i++) { 			
            array[i][n-1-t]=k; 			
            k++; 		
        } 		
        for (let j=n-2-t; j>=t; j--) {
            array[n-1-t][j]=k;
            k++;
        }
        for (let i=n-2-t; i>t; i--) {
            array[i][t]=k;
            k++;
        }
    }

    for(let i = 0; i < table.rows.length; i++) {
        for(let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].innerHTML = array[i][j];
        }
    }
}
createTable(n);
