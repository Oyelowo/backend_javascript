const deparam = (url) => {
    url = new URL(url);
    let searchParams = new URLSearchParams(url.search);
    let obj = {};
    for(let item of searchParams) {
      obj[item[0]]= item[1];
    };
    return obj;
};