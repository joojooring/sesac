const {Customer, Orders, Sequelize} = require("../model")

const Op = Sequelize.Op;

exports.main = async (req,res) =>{
    // Customer의 주문 목록  "custname"과 함께
    const cust = await Customer.findAll({
        attributes: ["custid", "custname", "birth"],
        //Operator 사용법 중 Op.gte 이상일때(>=)
        where : {birth: { [Op.gte] : "2000-01-01" }},
        include : [
            {
                model : Orders,
                attributes: {exclude : ["custid"] },
                // where : {}
            }
        ],
        raw : true
    })

    console.log(cust);
    res.send(cust);
};