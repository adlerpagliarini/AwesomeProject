const PageInfo = function (total = 0,limitPerPage = 0,page = 0,totalPages = 0){
    this.total = total;
    this.limitPerPage = limitPerPage;
    this.page = page;
    this.totalPages = totalPages;
}

export default PageInfo;