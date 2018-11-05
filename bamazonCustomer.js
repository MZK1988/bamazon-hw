var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"

});

connection.connect(function (err) {
    if (err) throw err;
    showProducts();
});

function showProducts() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        //present the user with the various products he/she can select
        inquirer
            .prompt([
                {
                    name: "product",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "**PLEASE PICK A PRODUCT FROM THE LIST**: "
                }
            ])
            //After user picks a product, we then prompt the user for a quantity
            .then(function (answer) {
                var choice = answer.product;
                inquirer
                    .prompt([
                        {
                            name: "quantity",
                            type: "input",
                            message: "PLEASE ENTER A QUANTITY FOR " + choice + "."
                        }
                    ])
                    //after the user picks a quantity, we then compare the quantity of the product that the user picks to the quantity that exists in the database
                    .then(function(answer){
                        var quantity  = answer.quantity;
                        //chosenItem is not to be confused with choice
                        //chosenItem is a variable that will contain the product_name from the mysql database if the choice from the list the user selects matches one of the products in the product_name column
                        var chosenItem;
                        for (var i = 0; i < results.length; i++) {
                            if (results[i].product_name === choice) {

                                chosenItem = results[i];
                                console.log("HERE IS THE CURRENT RECORD FOR " + choice + ":");
                                console.log(chosenItem);
                                console.log("________________________________");

                            }
                        }
                        if (chosenItem.stock_quantity >= parseInt(quantity)) {
                            console.log("Congrats, we're still in stock");
                            // connection.query("UPDATE products SET ? WHERE ?",
                            // [
                            //     {}






                            // ]
                            
                            
                            
                            
                            
                            
                            
                            
                            // )
                            
                        } else {
                            console.log("We are out of this item");
                        }

                    })
            })
    })
}













