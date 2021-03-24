export class Cmt{
    constructor(bookid: string, userid: string, cmtid: string,  content: string, cmtdec: BigInteger)
    {
        this.bookid= bookid;
        this.userid= userid;
        this.content= content;
        this.cmtid= cmtid;
        this.cmtdec= cmtdec;
    }
    bookid: string;
    userid: string;
    cmtid: string;
    content: string;
    cmtdec: BigInteger;
};