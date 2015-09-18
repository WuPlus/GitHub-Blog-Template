---
layout: post
title: Web-based Offline Sales System
description: Project of Database Design Course
category: Project
imageURL: 1/project1.JPG
githubURL: https://github.com/InternetFarmer/Offline-Sales-System
introduction: The sales system is designed for retail chain stores to digitalize checking out process and make it easier to manage warehouse as well as store information.
---

![Image of Project](/img/project/1/project1.JPG)

1. Short overview 
==== 
The sales system is designed for retail chain stores to digitalize checking out process and make it easier to manage warehouse as well as store information. This sales system is based on three aspects. First, on the aspect of inner company, it is to store and manage information of products, employees, stores and regions. Second, it is to manage the relationship with customers, which can be classified into business and home categories. The last one is for the transactions and records storage and management.<br/>
The users of the system include customers and employees of the company. The administrator of this system is also an employee, who has a higher privilege than other employees to handle issues of employee, store and region.<br/>
This system also has a function of data aggregation. It allows administrator to clearly view sales data, providing an easy access for data analysis.<br/>


2. Assumptions
====
1) This sales system is designed for a retail chain store, such as Target.<br/>
2) Considering the system is for the process of checking out, purchasing is based on
scanning membership cards and products bar codes in a physical store.<br/>
3) Customers who do not log in have the lowest privilege. That is they can only browse
products information.<br/>
4) Customers who have logged in the system have privileges of browsing products
information, updating profile and reviewing their order history.<br/>
5) Employees can browse products information, add customers, update profile, and add,
update and delete products, product categories and transactions.<br/>
6) The administrator can add, update and delete records of employee, store and region.<br/>
7) All the customers can be classified into either business customer or home customer.

3. Technology
====
1) Back-end: JSP, Servlet<br/>
2) Front-end: HTML, CSS, Javascript, Bootstrap Framework<br/>
3) Database: MySQL

4. Front-end Design
====
The front-end includes five main parts: login page, guest page, customer page, employee page and administrator page. Login page achieves the function of users login. Employee, customer and administrator can choose their identity type on login page. Guests can access to the system for simple product research without login. This function is achieved on the guest page. Customer page is designed for customer functions including searching products, updating profile and reviewing order history. Employee page allows employees to edit profile, product, category, customer and other functions. Administrator page allows administrator to get data aggregation results and manage employees. Customer page, employee page and administrator page all have a navigation bar for main functions. <br/>



5. APIs
====
1) Add Category Servlet achieves data transfer of product category name.<br/>
2) Add Customer Servlet achieves data transfer of address of a new customer, including city, street, state and zip code, and data transfer of customer, including customer name and type. For business customer, there are the category of business and the income of business. For home customer, there are gender, age, income and marriage status.<br/>
3) Add Employee Servlet achieves data transfer of address of a new employee, including city, street, state and zip code, and data transfer of employee name, job title, privilege, store id where this employee works and salary.<br/>
4) Add Product Servlet achieves data transfer of a new product’s name, inventory number, price, category id and purchasing price.<br/>
5) Add Region Servlet achieves data transfer of a new region’s name and manager.<br/>
6) Add Store Servlet achieves data transfer of a new store’s address, manager and its region’s id.<br/>
7) Add Transaction Servlet<br/>
8) Delete Category Servlet achieves data transfer of the id of a product category.<br/>
9) Delete Customer By Id Servlet achieves data transfer of the id of a customer.<br/>
10) Delete Employee By Id Servlet achieves data transfer of the id of an employee.<br/>
11) Delete Product Servlet achieves data transfer of the id of a product.<br/>
12) Delete Region By Id Servlet achieves data transfer of the id of a region.<br/>
13) Delete Store By Id Servlet achieves data transfer of the id of a store.<br/>
14) Update Category Servlet achieves data transfer of id and name of product category.<br/>
15) Update Customer Servlet achieves data transfer of address of a new customer, including city, street, state and zip code, and data transfer of customer, including customer name and type. For business customer, there are the category of business and the income of business. For home customer, there are gender, age, income and marriage status.<br/>
16)Update Employee Name By Id Servlet achieves data transfer of id and name of an employee, also address including id, city, street, state and zip code.<br/>
17)Update Product Servlet achieves data transfer of a product’s name, inventory number, price, category id and purchasing price.<br/>
18) Update Region By Id Servlet achieves data transfer of a region’s id, name and manager.<br/>
19) Update Store By Id Servlet achieves data transfer of a store’s id, manager and region id.<br/>
20) Update Store Salesperson Number By Id Servlet achieves data transfer of the id of the store.<br/>
21) Search Address By Id Servlet achieves data transfer of the id of a given address.<br/>
22) Search Category By Id Servlet achieves data transfer of the id of a given product category.<br/>
23) Search Customer By Id Servlet achieves data transfer of the id of a given customer.<br/>
24)Search Product Servlet achieves data transfer of category id, product name and price range of product.<br/>
25) Search Product By Id Servlet achieves data transfer of the id of a given product.<br/>
26) Search Transaction Servlet achieves data transfer of customer’s id and salesperson’s id.<br/>
27) Customer Check Servlet achieves data transfer of customer’s id and password.<br/>
28) Customer Login Servlet achieves data transfer of customer’s id and password.<br/>
29) Employee Check Servlet achieves data transfer of employee’s id and password.<br/>
30) Employee Login Servlet achieves data transfer of employee’s id and password.<br/>

6. Limitations and improvements
====
1) Some data in string type with special characters may not be checked.<br/>
2) Password needs higher privacy. In the current system, password can be found in the URL
when a user logs in the system.<br/>
3) Temporarily, we do not achieve the function of online shopping. It can be implemented in
further improvement.<br/>
4) We have do not achieve the function of editing stores and regions.<br/>
5) Employee and salary changing need to be taken into consideration.<br/>
6) Atomic operation of transaction is not realized.<br/>
