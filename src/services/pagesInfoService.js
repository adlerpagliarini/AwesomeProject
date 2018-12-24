import PageInfo from '../model/pageInfo';

export const GetPageSize = (itens, limitPerPage = 10) => {
    pagesInfo = new PageInfo();
    pagesInfo.total = itens.length;
    if (pagesInfo.total > 0)
    { 
        pagesInfo.page = 1;
        pagesInfo.limitPerPage = limitPerPage;
        pagesInfo.totalPages = Math.ceil(pagesInfo.total / limitPerPage);
    }

    return pagesInfo;
}