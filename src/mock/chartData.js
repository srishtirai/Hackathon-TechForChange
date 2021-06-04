export const donutChartData = {
    "donut1":{
        "data":{"a": 5, "b": 15},
        "colors":["#47987A", "#D2D7D8"],
        "detail":{'numerical':"25%",'desc':"Health"}
    },
    "donut2":{
        "title":"Health Status",
        "data":{a: 10, b: 3, c:7},
        "legends":['Good','Warning','Critical'],
        "colors":["#00B59B", "#FF453C", "#FFBD35"],
        "detail":{'numerical':"407",'desc':"Total"},
        "stats":"10% Increase in Critical Issues"
    },
    "donut3":{
        "title":"Infrastructure Discovered",
        "data":{a: 10, b: 6, c:4},
        "colors":['#7972CD','#13ABDC','#4567FF'],
        "legends":['AWS','Azure','Oracle'],
        "stats":"Oracle has the most number of critical issues"
    },
    "donut4":{
        "title":"Service Status",
        "data":{a: 12, b: 3, c:3},
        "colors":['#90D4DD','#00A9E0','#005B9F'],
        "legends":['App','Database','Web'],
        "stats":"Number of database services that are down have decreased by 5%"
    }
}

export const headerInfo = {
    'stats':{
        'applications': 407,
        'critical (14% of total)': 57,
        'Warning (6% of total)':20
    },
    'timeInfo':['MTTD - 25s','MTTA - 2m 3s','MTTR - 4h 36m 6s']
};

export const scatterPlotData={
    'ScatterPlot1':{
        "title":"Critical Issue Trend ( This year )",
        'data': [
            {'x':"2018-01-1", 'y':25},
            {'x':"2018-02-1", 'y':50},
            {'x':'2018-03-1', 'y':75},
            {'x':'2018-04-1', 'y':20},
            {'x':'2018-05-1', 'y':100},
            {'x':'2018-06-1', 'y':75},
            {'x':'2018-07-1', 'y':60},
            {'x':'2018-08-1', 'y':30},
            {'x':'2018-09-1', 'y':175},
            {'x':'2018-10-1', 'y':120},
            {'x':'2018-11-1', 'y':80},
            {'x':'2018-12-1','y':100}
        ],
        'stats':"69% Increase in Critical Issues in the last month"
    },
    'ScatterPlot2':{
        "title":"Cost Trend",
        'data': [
            {'x':"2018-01-1", 'y':25},
            {'x':"2018-02-1", 'y':50},
            {'x':'2018-03-1', 'y':75},
            {'x':'2018-04-1', 'y':20},
            {'x':'2018-05-1', 'y':100},
            {'x':'2018-06-1', 'y':75},
            {'x':'2018-07-1', 'y':60},
            {'x':'2018-12-1','y':100}
        ],
        'data2':[
            {'x':"2018-01-1", 'y':20},
            {'x':"2018-02-1", 'y':70},
            {'x':'2018-03-1', 'y':45},
            {'x':'2018-04-1', 'y':30},
            {'x':'2018-05-1', 'y':120},
            {'x':'2018-06-1', 'y':75},
            {'x':'2018-07-1', 'y':80},
            {'x':'2018-12-1','y':60}
        ],
        'data3':[
            {x:'2018-07-1', y:60},
            {x:'2018-12-1', y:150},
            {x:'2018-12-1',y:50}
        ],
        'colors':['#0059A1','#796FD0','#8ED4DE'],
        'legends':['Budget','Spends','Forecast'],
        'stats':"Current spending is higher than budgeted"
    }
}

export const barGraphData = {
    'bar1':{
        'data':[
            {y:'Good',x:30},
            {y:'Warning',x:5},
            {y:'Critical', x:10},
            {y:'Total', x:50}
        ],
        'xValues':[0, 10, 20, 30, 40, 50],
        'colors':['#00B69B','#FFBD35','#FF453C','#4567FF']
    },
    'bar2':{
        'data':[
            {y:25,x:'Total'},
            {y:20,x:'Up'},
            {y:25, x:'Down'}
        ],
        'yValues':[0, 5, 10, 15, 20, 25, 30],
        'color':'#005B9F'
    },
    'bar3':{
        'title':'Current Expenses',
        'data':[
            {'group': "ON PREM", 'Budget': "30", 'Spent': "40"},
            {'group': "AWS", 'Budget': "50", 'Spent': "30"},
            {'group': "AZURE", 'Budget': "20", 'Spent': "20"},
            {'group': "ORACLE", 'Budget': "30", 'Spent': "40"}
        ],
        'colors':['#66C0F5','#6490DE']
    }

}