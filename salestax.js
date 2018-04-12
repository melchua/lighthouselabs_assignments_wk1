// given sales tax rates and company sales data
// we need calculate the total sales tax for all companies and save to an object

// 1. create function that calculates sales tax
// 2. calculate the sales tax for each company in the companySalesData array and save somewhere
// 3. add the sales tax for companies that are the same but in different provinces

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// create object to hold data
var result = {};

function calculateSalesTax(salesData, taxRates) {

  function calculateTax(sales, rate) {
    return sales * rate;
  }

// Add total sales tax to each companysalesdata object
  companySalesData.forEach(function(companyByProvince) {
    var salesArr = companyByProvince.sales;
    var salesSum = 0;
    var salesWithTax = 0;

    salesArr.forEach(function(sale) {
      salesSum += sale;
    });

    salesWithTax = calculateTax(salesSum, salesTaxRates[companyByProvince.province]);
    companyByProvince.salesWithTax = salesWithTax; // save sales tax to objects
    companyByProvince.salesSum = salesSum; // save total sales
  });

// Add sales for similar companies (different provinces)

// loop through the companies
// for each company that matches add sales tax and add total sales and save to object
  companySalesData.forEach(function(companyByProvince) {

    if (result[companyByProvince.name] === undefined) {
      result[companyByProvince.name] = { totalSales: companyByProvince.salesSum, totalTaxes: companyByProvince.salesWithTax}
    } else {
      result[companyByProvince.name].totalSales += companyByProvince.salesSum;
      result[companyByProvince.name].totalTaxes += companyByProvince.salesWithTax;
    }
  });
   console.log(result);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/