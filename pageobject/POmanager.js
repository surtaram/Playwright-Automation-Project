
const { LoginPage } = require("./LoginPage");
const { DashBoard } = require("./DashBoard");

class POmanager {

    constructor(page){
        this.page=page;
        this.loginPage=new LoginPage(page);
        this.dashBoard=new DashBoard(page);

    }


    getLoginPage(){
        return this.loginPage;
    }

    getDashBoard(){
        return this.dashBoard;
    }

}

module.exports={POmanager};