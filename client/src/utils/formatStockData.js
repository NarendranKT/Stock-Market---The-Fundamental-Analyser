export const formatStockData = (data) => {
    const length = data.timestamp.length;
    const formatedData = [];
    // console.log(data.high.length);
    // console.log(data.low.length);
    // console.log(data.chart.timestamp.length);
    for (let i = 0; i < length; i++) {
        formatedData.push({
            x: new Date(data.timestamp[i] * 1000).toUTCString(),
            y: [
                data.open[i],
                data.high[i],
                data.low[i],
                data.close[i],
                data.volume[i]
            ]
        })
    }

    // for (let i = 0; i < length; i++){
    //     formatedData.push({
    //         Date: new Date(data.timestamp[i]).toUTCString(),
    //         Open: data.open[i],
    //         High: data.open[i],
    //         Low: data.open[i],
    //         Close: data.open[i],
    //         Volume: data.open[i],
    //     })
    // }


    return formatedData;
}


export const getVolumeDate = (data) => {
    const length = data.timestamp.length;
    const formatedData = [];
    for (let i = 0; i < length; i++) {
        formatedData.push(
            
                data.volume[i]
            
        )
    }
}