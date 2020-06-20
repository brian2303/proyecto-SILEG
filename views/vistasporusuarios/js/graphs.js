const GRAPH_SELLS = document.getElementById('grafica-ventas').getContext('2d')
const GRAPH_PURCHASES = document.getElementById('grafica-compras')

let chartSells = new Chart(GRAPH_SELLS,{
    type:'bar',
    data:{
        labels:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[{
            label: 'SILEG VENTAS MES A MES',
            data:[200000,300000,280000,290000,150000,350000,450000,650000,350000,350000,650000,1250000],
            backgroundColor:[
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)',
                'rgb(105, 209, 117)'
            ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
})

let chartPurchases =  new Chart(GRAPH_PURCHASES,{
    type:'bar',
    data:{
        labels:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets:[{
            label: 'SILEG COMPRAS MES A MES',
            data:[200000,300000,280000,290000,150000,350000,450000,650000,350000,350000,650000,1250000],
            backgroundColor:[
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)',
                'rgb(29, 147, 214)'
            ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
})